/**
 * 类名:clsMethodModifierWApi
 * 表名:MethodModifier(00050523)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 20:44:09
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 函数修饰语(MethodModifier)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月10日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import {
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsMethodModifierEN } from '@/ts/L0Entity/PrjFunction/clsMethodModifierEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const methodModifier_Controller = 'MethodModifierApi';
export const methodModifier_ConstructorName = 'methodModifier';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strMethodModifierId:关键字
 * @returns 对象
 **/
export async function MethodModifier_GetObjByMethodModifierIdAsync(
  strMethodModifierId: string,
): Promise<clsMethodModifierEN | null> {
  const strThisFuncName = 'GetObjByMethodModifierIdAsync';

  if (IsNullOrEmpty(strMethodModifierId) == true) {
    const strMsg = Format(
      '参数:[strMethodModifierId]不能为空!(In clsMethodModifierWApi.GetObjByMethodModifierIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strMethodModifierId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strMethodModifierId]的长度:[{0}]不正确!(clsMethodModifierWApi.GetObjByMethodModifierIdAsync)',
      strMethodModifierId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByMethodModifierId';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strMethodModifierId,
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
      const objMethodModifier = MethodModifier_GetObjFromJsonObj(returnObj);
      return objMethodModifier;
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * @param strMethodModifierId:所给的关键字
 * @returns 对象
 */
export async function MethodModifier_GetObjByMethodModifierIdlocalStorage(
  strMethodModifierId: string,
) {
  const strThisFuncName = 'GetObjByMethodModifierIdlocalStorage';

  if (IsNullOrEmpty(strMethodModifierId) == true) {
    const strMsg = Format(
      '参数:[strMethodModifierId]不能为空!(In clsMethodModifierWApi.GetObjByMethodModifierIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strMethodModifierId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strMethodModifierId]的长度:[{0}]不正确!(clsMethodModifierWApi.GetObjByMethodModifierIdlocalStorage)',
      strMethodModifierId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsMethodModifierEN._CurrTabName, strMethodModifierId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objMethodModifierCache: clsMethodModifierEN = JSON.parse(strTempObj);
    return objMethodModifierCache;
  }
  try {
    const objMethodModifier = await MethodModifier_GetObjByMethodModifierIdAsync(
      strMethodModifierId,
    );
    if (objMethodModifier != null) {
      localStorage.setItem(strKey, JSON.stringify(objMethodModifier));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objMethodModifier;
    }
    return objMethodModifier;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strMethodModifierId,
      methodModifier_ConstructorName,
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
 * @param strMethodModifierId:所给的关键字
 * @returns 对象
 */
export async function MethodModifier_GetObjByMethodModifierIdCache(
  strMethodModifierId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByMethodModifierIdCache';

  if (IsNullOrEmpty(strMethodModifierId) == true) {
    const strMsg = Format(
      '参数:[strMethodModifierId]不能为空!(In clsMethodModifierWApi.GetObjByMethodModifierIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strMethodModifierId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strMethodModifierId]的长度:[{0}]不正确!(clsMethodModifierWApi.GetObjByMethodModifierIdCache)',
      strMethodModifierId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrMethodModifierObjLstCache = await MethodModifier_GetObjLstCache();
  try {
    const arrMethodModifierSel = arrMethodModifierObjLstCache.filter(
      (x) => x.methodModifierId == strMethodModifierId,
    );
    let objMethodModifier: clsMethodModifierEN;
    if (arrMethodModifierSel.length > 0) {
      objMethodModifier = arrMethodModifierSel[0];
      return objMethodModifier;
    } else {
      if (bolTryAsyncOnce == true) {
        const objMethodModifierConst = await MethodModifier_GetObjByMethodModifierIdAsync(
          strMethodModifierId,
        );
        if (objMethodModifierConst != null) {
          MethodModifier_ReFreshThisCache();
          return objMethodModifierConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strMethodModifierId,
      methodModifier_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objMethodModifier:所给的对象
 * @returns 对象
 */
export async function MethodModifier_UpdateObjInLstCache(objMethodModifier: clsMethodModifierEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrMethodModifierObjLstCache = await MethodModifier_GetObjLstCache();
    const obj = arrMethodModifierObjLstCache.find(
      (x) => x.methodModifierName == objMethodModifier.methodModifierName,
    );
    if (obj != null) {
      objMethodModifier.methodModifierId = obj.methodModifierId;
      ObjectAssign(obj, objMethodModifier);
    } else {
      arrMethodModifierObjLstCache.push(objMethodModifier);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      methodModifier_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function MethodModifier_SortFunDefa(a: clsMethodModifierEN, b: clsMethodModifierEN): number {
  return a.methodModifierId.localeCompare(b.methodModifierId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function MethodModifier_SortFunDefa2Fld(
  a: clsMethodModifierEN,
  b: clsMethodModifierEN,
): number {
  if (a.methodModifierName == b.methodModifierName) return a.orderNum - b.orderNum;
  else return a.methodModifierName.localeCompare(b.methodModifierName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function MethodModifier_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsMethodModifierEN.con_MethodModifierId:
        return (a: clsMethodModifierEN, b: clsMethodModifierEN) => {
          return a.methodModifierId.localeCompare(b.methodModifierId);
        };
      case clsMethodModifierEN.con_MethodModifierName:
        return (a: clsMethodModifierEN, b: clsMethodModifierEN) => {
          return a.methodModifierName.localeCompare(b.methodModifierName);
        };
      case clsMethodModifierEN.con_OrderNum:
        return (a: clsMethodModifierEN, b: clsMethodModifierEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsMethodModifierEN.con_Memo:
        return (a: clsMethodModifierEN, b: clsMethodModifierEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[MethodModifier]中不存在!(in ${methodModifier_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsMethodModifierEN.con_MethodModifierId:
        return (a: clsMethodModifierEN, b: clsMethodModifierEN) => {
          return b.methodModifierId.localeCompare(a.methodModifierId);
        };
      case clsMethodModifierEN.con_MethodModifierName:
        return (a: clsMethodModifierEN, b: clsMethodModifierEN) => {
          return b.methodModifierName.localeCompare(a.methodModifierName);
        };
      case clsMethodModifierEN.con_OrderNum:
        return (a: clsMethodModifierEN, b: clsMethodModifierEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsMethodModifierEN.con_Memo:
        return (a: clsMethodModifierEN, b: clsMethodModifierEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[MethodModifier]中不存在!(in ${methodModifier_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strMethodModifierId:所给的关键字
 * @returns 对象
 */
export async function MethodModifier_GetNameByMethodModifierIdCache(strMethodModifierId: string) {
  if (IsNullOrEmpty(strMethodModifierId) == true) {
    const strMsg = Format(
      '参数:[strMethodModifierId]不能为空!(In clsMethodModifierWApi.GetNameByMethodModifierIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strMethodModifierId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strMethodModifierId]的长度:[{0}]不正确!(clsMethodModifierWApi.GetNameByMethodModifierIdCache)',
      strMethodModifierId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrMethodModifierObjLstCache = await MethodModifier_GetObjLstCache();
  if (arrMethodModifierObjLstCache == null) return '';
  try {
    const arrMethodModifierSel = arrMethodModifierObjLstCache.filter(
      (x) => x.methodModifierId == strMethodModifierId,
    );
    let objMethodModifier: clsMethodModifierEN;
    if (arrMethodModifierSel.length > 0) {
      objMethodModifier = arrMethodModifierSel[0];
      return objMethodModifier.methodModifierName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strMethodModifierId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function MethodModifier_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsMethodModifierEN.con_MethodModifierId:
      return (obj: clsMethodModifierEN) => {
        return obj.methodModifierId === value;
      };
    case clsMethodModifierEN.con_MethodModifierName:
      return (obj: clsMethodModifierEN) => {
        return obj.methodModifierName === value;
      };
    case clsMethodModifierEN.con_OrderNum:
      return (obj: clsMethodModifierEN) => {
        return obj.orderNum === value;
      };
    case clsMethodModifierEN.con_Memo:
      return (obj: clsMethodModifierEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[MethodModifier]中不存在!(in ${methodModifier_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function MethodModifier_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsMethodModifierEN.con_MethodModifierId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsMethodModifierEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsMethodModifierEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strMethodModifierId = strInValue;
  if (IsNullOrEmpty(strMethodModifierId) == true) {
    return '';
  }
  const objMethodModifier = await MethodModifier_GetObjByMethodModifierIdCache(strMethodModifierId);
  if (objMethodModifier == null) return '';
  if (objMethodModifier.GetFldValue(strOutFldName) == null) return '';
  return objMethodModifier.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function MethodModifier_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsMethodModifierEN.con_MethodModifierId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrMethodModifier = await MethodModifier_GetObjLstCache();
  if (arrMethodModifier == null) return [];
  let arrMethodModifierSel = arrMethodModifier;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrMethodModifierSel = arrMethodModifierSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrMethodModifierSel = arrMethodModifierSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrMethodModifierSel = arrMethodModifierSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrMethodModifierSel = arrMethodModifierSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrMethodModifierSel = arrMethodModifierSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrMethodModifierSel = arrMethodModifierSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrMethodModifierSel = arrMethodModifierSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrMethodModifierSel = arrMethodModifierSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrMethodModifierSel = arrMethodModifierSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrMethodModifierSel = arrMethodModifierSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrMethodModifierSel.length == 0) return [];
  return arrMethodModifierSel.map((x) => x.methodModifierId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function MethodModifier_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
export async function MethodModifier_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
export async function MethodModifier_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
export async function MethodModifier_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsMethodModifierEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

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
      const objMethodModifier = MethodModifier_GetObjFromJsonObj(returnObj);
      return objMethodModifier;
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
export async function MethodModifier_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsMethodModifierEN._CurrTabName;
  if (IsNullOrEmpty(clsMethodModifierEN.WhereFormat) == false) {
    strWhereCond = clsMethodModifierEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsMethodModifierEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsMethodModifierEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrMethodModifierExObjLstCache: Array<clsMethodModifierEN> = CacheHelper.Get(strKey);
    const arrMethodModifierObjLstT = MethodModifier_GetObjLstByJSONObjLst(
      arrMethodModifierExObjLstCache,
    );
    return arrMethodModifierObjLstT;
  }
  try {
    const arrMethodModifierExObjLst = await MethodModifier_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrMethodModifierExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrMethodModifierExObjLst.length,
    );
    console.log(strInfo);
    return arrMethodModifierExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      methodModifier_ConstructorName,
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
export async function MethodModifier_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsMethodModifierEN._CurrTabName;
  if (IsNullOrEmpty(clsMethodModifierEN.WhereFormat) == false) {
    strWhereCond = clsMethodModifierEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsMethodModifierEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsMethodModifierEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrMethodModifierExObjLstCache: Array<clsMethodModifierEN> = JSON.parse(strTempObjLst);
    const arrMethodModifierObjLstT = MethodModifier_GetObjLstByJSONObjLst(
      arrMethodModifierExObjLstCache,
    );
    return arrMethodModifierObjLstT;
  }
  try {
    const arrMethodModifierExObjLst = await MethodModifier_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrMethodModifierExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrMethodModifierExObjLst.length,
    );
    console.log(strInfo);
    return arrMethodModifierExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      methodModifier_ConstructorName,
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
export async function MethodModifier_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsMethodModifierEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrMethodModifierObjLstCache: Array<clsMethodModifierEN> = JSON.parse(strTempObjLst);
    return arrMethodModifierObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function MethodModifier_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsMethodModifierEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

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
          methodModifier_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = MethodModifier_GetObjLstByJSONObjLst(returnObjLst);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
export async function MethodModifier_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsMethodModifierEN._CurrTabName;
  if (IsNullOrEmpty(clsMethodModifierEN.WhereFormat) == false) {
    strWhereCond = clsMethodModifierEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsMethodModifierEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsMethodModifierEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrMethodModifierExObjLstCache: Array<clsMethodModifierEN> = JSON.parse(strTempObjLst);
    const arrMethodModifierObjLstT = MethodModifier_GetObjLstByJSONObjLst(
      arrMethodModifierExObjLstCache,
    );
    return arrMethodModifierObjLstT;
  }
  try {
    const arrMethodModifierExObjLst = await MethodModifier_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrMethodModifierExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrMethodModifierExObjLst.length,
    );
    console.log(strInfo);
    return arrMethodModifierExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      methodModifier_ConstructorName,
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
export async function MethodModifier_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsMethodModifierEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrMethodModifierObjLstCache: Array<clsMethodModifierEN> = JSON.parse(strTempObjLst);
    return arrMethodModifierObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function MethodModifier_GetObjLstCache(): Promise<Array<clsMethodModifierEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrMethodModifierObjLstCache;
  switch (clsMethodModifierEN.CacheModeId) {
    case '04': //sessionStorage
      arrMethodModifierObjLstCache = await MethodModifier_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrMethodModifierObjLstCache = await MethodModifier_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrMethodModifierObjLstCache = await MethodModifier_GetObjLstClientCache();
      break;
    default:
      arrMethodModifierObjLstCache = await MethodModifier_GetObjLstClientCache();
      break;
  }
  return arrMethodModifierObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function MethodModifier_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrMethodModifierObjLstCache;
  switch (clsMethodModifierEN.CacheModeId) {
    case '04': //sessionStorage
      arrMethodModifierObjLstCache = await MethodModifier_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrMethodModifierObjLstCache = await MethodModifier_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrMethodModifierObjLstCache = null;
      break;
    default:
      arrMethodModifierObjLstCache = null;
      break;
  }
  return arrMethodModifierObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrMethodModifierIdCond:条件对象
 * @returns 对象列表子集
 */
export async function MethodModifier_GetSubObjLstCache(objMethodModifierCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrMethodModifierObjLstCache = await MethodModifier_GetObjLstCache();
  let arrMethodModifierSel = arrMethodModifierObjLstCache;
  if (objMethodModifierCond.GetConditions().length == 0) return arrMethodModifierSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objMethodModifierCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrMethodModifierSel = arrMethodModifierSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrMethodModifierSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objMethodModifierCond),
      methodModifier_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsMethodModifierEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrMethodModifierId:关键字列表
 * @returns 对象列表
 **/
export async function MethodModifier_GetObjLstByMethodModifierIdLstAsync(
  arrMethodModifierId: Array<string>,
): Promise<Array<clsMethodModifierEN>> {
  const strThisFuncName = 'GetObjLstByMethodModifierIdLstAsync';
  const strAction = 'GetObjLstByMethodModifierIdLst';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrMethodModifierId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          methodModifier_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = MethodModifier_GetObjLstByJSONObjLst(returnObjLst);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * @param arrstrMethodModifierIdLst:关键字列表
 * @returns 对象列表
 */
export async function MethodModifier_GetObjLstByMethodModifierIdLstCache(
  arrMethodModifierIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByMethodModifierIdLstCache';
  try {
    const arrMethodModifierObjLstCache = await MethodModifier_GetObjLstCache();
    const arrMethodModifierSel = arrMethodModifierObjLstCache.filter(
      (x) => arrMethodModifierIdLst.indexOf(x.methodModifierId) > -1,
    );
    return arrMethodModifierSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrMethodModifierIdLst.join(','),
      methodModifier_ConstructorName,
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
export async function MethodModifier_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsMethodModifierEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

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
          methodModifier_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = MethodModifier_GetObjLstByJSONObjLst(returnObjLst);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
export async function MethodModifier_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsMethodModifierEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

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
          methodModifier_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = MethodModifier_GetObjLstByJSONObjLst(returnObjLst);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
export async function MethodModifier_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsMethodModifierEN>();
  const arrMethodModifierObjLstCache = await MethodModifier_GetObjLstCache();
  if (arrMethodModifierObjLstCache.length == 0) return arrMethodModifierObjLstCache;
  let arrMethodModifierSel = arrMethodModifierObjLstCache;
  const objMethodModifierCond = objPagerPara.conditionCollection;
  if (objMethodModifierCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsMethodModifierEN>();
  }
  //console.log("clsMethodModifierWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objMethodModifierCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrMethodModifierSel = arrMethodModifierSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrMethodModifierSel.length == 0) return arrMethodModifierSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrMethodModifierSel = arrMethodModifierSel.sort(
        MethodModifier_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrMethodModifierSel = arrMethodModifierSel.sort(objPagerPara.sortFun);
    }
    arrMethodModifierSel = arrMethodModifierSel.slice(intStart, intEnd);
    return arrMethodModifierSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      methodModifier_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsMethodModifierEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function MethodModifier_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsMethodModifierEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsMethodModifierEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

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
          methodModifier_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = MethodModifier_GetObjLstByJSONObjLst(returnObjLst);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * @param strMethodModifierId:关键字
 * @returns 获取删除的结果
 **/
export async function MethodModifier_DelRecordAsync(strMethodModifierId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(methodModifier_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strMethodModifierId);

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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * @param arrMethodModifierId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function MethodModifier_DelMethodModifiersAsync(
  arrMethodModifierId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelMethodModifiersAsync';
  const strAction = 'DelMethodModifiers';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrMethodModifierId, config);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
export async function MethodModifier_DelMethodModifiersByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelMethodModifiersByCondAsync';
  const strAction = 'DelMethodModifiersByCond';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * @param objMethodModifierEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function MethodModifier_AddNewRecordAsync(
  objMethodModifierEN: clsMethodModifierEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objMethodModifierEN);
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objMethodModifierEN, config);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * @param objMethodModifierEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function MethodModifier_AddNewRecordWithMaxIdAsync(
  objMethodModifierEN: clsMethodModifierEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objMethodModifierEN, config);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objMethodModifierEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function MethodModifier_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objMethodModifierEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function MethodModifier_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objMethodModifierEN);
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objMethodModifierEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function MethodModifier_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objMethodModifierEN);
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
export async function MethodModifier_AddNewObjSave(
  objMethodModifierEN: clsMethodModifierEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    MethodModifier_CheckPropertyNew(objMethodModifierEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${methodModifier_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await MethodModifier_CheckUniCond4Add(objMethodModifierEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await MethodModifier_AddNewRecordWithMaxIdAsync(objMethodModifierEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      MethodModifier_ReFreshCache();
    } else {
      const strInfo = `添加[函数修饰语(MethodModifier)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${methodModifier_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function MethodModifier_CheckUniCond4Add(
  objMethodModifierEN: clsMethodModifierEN,
): Promise<boolean> {
  const strUniquenessCondition = MethodModifier_GetUniCondStr(objMethodModifierEN);
  const bolIsExistCondition = await MethodModifier_IsExistRecordAsync(strUniquenessCondition);
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
export async function MethodModifier_CheckUniCond4Update(
  objMethodModifierEN: clsMethodModifierEN,
): Promise<boolean> {
  const strUniquenessCondition = MethodModifier_GetUniCondStr4Update(objMethodModifierEN);
  const bolIsExistCondition = await MethodModifier_IsExistRecordAsync(strUniquenessCondition);
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
export async function MethodModifier_UpdateObjSave(
  objMethodModifierEN: clsMethodModifierEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objMethodModifierEN.sfUpdFldSetStr = objMethodModifierEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objMethodModifierEN.methodModifierId == '' ||
    objMethodModifierEN.methodModifierId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    MethodModifier_CheckProperty4Update(objMethodModifierEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${methodModifier_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await MethodModifier_CheckUniCond4Update(objMethodModifierEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await MethodModifier_UpdateRecordAsync(objMethodModifierEN);
    if (returnBool == true) {
      MethodModifier_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${methodModifier_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objMethodModifierEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function MethodModifier_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objMethodModifierEN);
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objMethodModifierEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function MethodModifier_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objMethodModifierEN);
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * @param objMethodModifierEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function MethodModifier_AddNewRecordWithReturnKeyAsync(
  objMethodModifierEN: clsMethodModifierEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objMethodModifierEN, config);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * @param objMethodModifierEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function MethodModifier_UpdateRecordAsync(
  objMethodModifierEN: clsMethodModifierEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objMethodModifierEN.sfUpdFldSetStr === undefined ||
    objMethodModifierEN.sfUpdFldSetStr === null ||
    objMethodModifierEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objMethodModifierEN.methodModifierId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objMethodModifierEN, config);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * @param objMethodModifierEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function MethodModifier_EditRecordExAsync(
  objMethodModifierEN: clsMethodModifierEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objMethodModifierEN.sfUpdFldSetStr === undefined ||
    objMethodModifierEN.sfUpdFldSetStr === null ||
    objMethodModifierEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objMethodModifierEN.methodModifierId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objMethodModifierEN, config);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * @param objMethodModifierEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function MethodModifier_UpdateWithConditionAsync(
  objMethodModifierEN: clsMethodModifierEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objMethodModifierEN.sfUpdFldSetStr === undefined ||
    objMethodModifierEN.sfUpdFldSetStr === null ||
    objMethodModifierEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objMethodModifierEN.methodModifierId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);
  objMethodModifierEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objMethodModifierEN, config);
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * @param objstrMethodModifierIdCond:条件对象
 * @returns 对象列表子集
 */
export async function MethodModifier_IsExistRecordCache(
  objMethodModifierCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrMethodModifierObjLstCache = await MethodModifier_GetObjLstCache();
  if (arrMethodModifierObjLstCache == null) return false;
  let arrMethodModifierSel = arrMethodModifierObjLstCache;
  if (objMethodModifierCond.GetConditions().length == 0)
    return arrMethodModifierSel.length > 0 ? true : false;
  try {
    for (const objCondition of objMethodModifierCond.GetConditions()) {
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
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrMethodModifierSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objMethodModifierCond),
      methodModifier_ConstructorName,
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
export async function MethodModifier_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * @param strMethodModifierId:所给的关键字
 * @returns 对象
 */
export async function MethodModifier_IsExistCache(strMethodModifierId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrMethodModifierObjLstCache = await MethodModifier_GetObjLstCache();
  if (arrMethodModifierObjLstCache == null) return false;
  try {
    const arrMethodModifierSel = arrMethodModifierObjLstCache.filter(
      (x) => x.methodModifierId == strMethodModifierId,
    );
    if (arrMethodModifierSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strMethodModifierId,
      methodModifier_ConstructorName,
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
 * @param strMethodModifierId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function MethodModifier_IsExistAsync(strMethodModifierId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strMethodModifierId,
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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
export async function MethodModifier_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
 * @param objMethodModifierCond:条件对象
 * @returns 对象列表记录数
 */
export async function MethodModifier_GetRecCountByCondCache(
  objMethodModifierCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrMethodModifierObjLstCache = await MethodModifier_GetObjLstCache();
  if (arrMethodModifierObjLstCache == null) return 0;
  let arrMethodModifierSel = arrMethodModifierObjLstCache;
  if (objMethodModifierCond.GetConditions().length == 0) return arrMethodModifierSel.length;
  try {
    for (const objCondition of objMethodModifierCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrMethodModifierSel = arrMethodModifierSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrMethodModifierSel = arrMethodModifierSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrMethodModifierSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objMethodModifierCond),
      methodModifier_ConstructorName,
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
export async function MethodModifier_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
export async function MethodModifier_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(methodModifier_Controller, strAction);

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
        methodModifier_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        methodModifier_ConstructorName,
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
export function MethodModifier_GetWebApiUrl(strController: string, strAction: string): string {
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
export function MethodModifier_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsMethodModifierEN._CurrTabName;
  switch (clsMethodModifierEN.CacheModeId) {
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
  clsMethodModifierEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function MethodModifier_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsMethodModifierEN._CurrTabName;
    switch (clsMethodModifierEN.CacheModeId) {
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
    clsMethodModifierEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function MethodModifier_GetLastRefreshTime(): string {
  if (clsMethodModifierEN._RefreshTimeLst.length == 0) return '';
  return clsMethodModifierEN._RefreshTimeLst[clsMethodModifierEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function MethodModifier_BindDdl_MethodModifierIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_MethodModifierIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_MethodModifierIdInDivCache");
  let arrObjLstSel = await MethodModifier_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsMethodModifierEN.con_MethodModifierId,
    clsMethodModifierEN.con_MethodModifierName,
    '函数修饰语...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function MethodModifier_GetArrMethodModifier() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_MethodModifierIdInDivCache");
  const arrMethodModifier = new Array<clsMethodModifierEN>();
  let arrObjLstSel = await MethodModifier_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  const obj0 = new clsMethodModifierEN();
  obj0.methodModifierId = '0';
  obj0.methodModifierName = '选函数修饰语...';
  arrMethodModifier.push(obj0);
  arrObjLstSel.forEach((x) => arrMethodModifier.push(x));
  return arrMethodModifier;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function MethodModifier_CheckPropertyNew(pobjMethodModifierEN: clsMethodModifierEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjMethodModifierEN.methodModifierName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[函数修饰语名称]不能为空(In 函数修饰语)!(clsMethodModifierBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjMethodModifierEN.orderNum ||
    (pobjMethodModifierEN.orderNum != null && pobjMethodModifierEN.orderNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[序号]不能为空(In 函数修饰语)!(clsMethodModifierBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjMethodModifierEN.methodModifierId) == false &&
    GetStrLen(pobjMethodModifierEN.methodModifierId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数修饰语Id(methodModifierId)]的长度不能超过2(In 函数修饰语(MethodModifier))!值:${pobjMethodModifierEN.methodModifierId}(clsMethodModifierBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjMethodModifierEN.methodModifierName) == false &&
    GetStrLen(pobjMethodModifierEN.methodModifierName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数修饰语名称(methodModifierName)]的长度不能超过50(In 函数修饰语(MethodModifier))!值:${pobjMethodModifierEN.methodModifierName}(clsMethodModifierBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjMethodModifierEN.memo) == false &&
    GetStrLen(pobjMethodModifierEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 函数修饰语(MethodModifier))!值:${pobjMethodModifierEN.memo}(clsMethodModifierBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjMethodModifierEN.methodModifierId) == false &&
    undefined !== pobjMethodModifierEN.methodModifierId &&
    tzDataType.isString(pobjMethodModifierEN.methodModifierId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数修饰语Id(methodModifierId)]的值:[${pobjMethodModifierEN.methodModifierId}], 非法,应该为字符型(In 函数修饰语(MethodModifier))!(clsMethodModifierBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjMethodModifierEN.methodModifierName) == false &&
    undefined !== pobjMethodModifierEN.methodModifierName &&
    tzDataType.isString(pobjMethodModifierEN.methodModifierName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数修饰语名称(methodModifierName)]的值:[${pobjMethodModifierEN.methodModifierName}], 非法,应该为字符型(In 函数修饰语(MethodModifier))!(clsMethodModifierBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjMethodModifierEN.orderNum &&
    undefined !== pobjMethodModifierEN.orderNum &&
    tzDataType.isNumber(pobjMethodModifierEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjMethodModifierEN.orderNum}], 非法,应该为数值型(In 函数修饰语(MethodModifier))!(clsMethodModifierBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjMethodModifierEN.memo) == false &&
    undefined !== pobjMethodModifierEN.memo &&
    tzDataType.isString(pobjMethodModifierEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjMethodModifierEN.memo}], 非法,应该为字符型(In 函数修饰语(MethodModifier))!(clsMethodModifierBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function MethodModifier_CheckProperty4Update(pobjMethodModifierEN: clsMethodModifierEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjMethodModifierEN.methodModifierId) == false &&
    GetStrLen(pobjMethodModifierEN.methodModifierId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数修饰语Id(methodModifierId)]的长度不能超过2(In 函数修饰语(MethodModifier))!值:${pobjMethodModifierEN.methodModifierId}(clsMethodModifierBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjMethodModifierEN.methodModifierName) == false &&
    GetStrLen(pobjMethodModifierEN.methodModifierName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数修饰语名称(methodModifierName)]的长度不能超过50(In 函数修饰语(MethodModifier))!值:${pobjMethodModifierEN.methodModifierName}(clsMethodModifierBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjMethodModifierEN.memo) == false &&
    GetStrLen(pobjMethodModifierEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 函数修饰语(MethodModifier))!值:${pobjMethodModifierEN.memo}(clsMethodModifierBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjMethodModifierEN.methodModifierId) == false &&
    undefined !== pobjMethodModifierEN.methodModifierId &&
    tzDataType.isString(pobjMethodModifierEN.methodModifierId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数修饰语Id(methodModifierId)]的值:[${pobjMethodModifierEN.methodModifierId}], 非法,应该为字符型(In 函数修饰语(MethodModifier))!(clsMethodModifierBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjMethodModifierEN.methodModifierName) == false &&
    undefined !== pobjMethodModifierEN.methodModifierName &&
    tzDataType.isString(pobjMethodModifierEN.methodModifierName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数修饰语名称(methodModifierName)]的值:[${pobjMethodModifierEN.methodModifierName}], 非法,应该为字符型(In 函数修饰语(MethodModifier))!(clsMethodModifierBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjMethodModifierEN.orderNum &&
    undefined !== pobjMethodModifierEN.orderNum &&
    tzDataType.isNumber(pobjMethodModifierEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjMethodModifierEN.orderNum}], 非法,应该为数值型(In 函数修饰语(MethodModifier))!(clsMethodModifierBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjMethodModifierEN.memo) == false &&
    undefined !== pobjMethodModifierEN.memo &&
    tzDataType.isString(pobjMethodModifierEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjMethodModifierEN.memo}], 非法,应该为字符型(In 函数修饰语(MethodModifier))!(clsMethodModifierBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function MethodModifier_GetJSONStrByObj(pobjMethodModifierEN: clsMethodModifierEN): string {
  pobjMethodModifierEN.sfUpdFldSetStr = pobjMethodModifierEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjMethodModifierEN);
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
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function MethodModifier_GetObjLstByJSONStr(strJSON: string): Array<clsMethodModifierEN> {
  let arrMethodModifierObjLst = new Array<clsMethodModifierEN>();
  if (strJSON === '') {
    return arrMethodModifierObjLst;
  }
  try {
    arrMethodModifierObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrMethodModifierObjLst;
  }
  return arrMethodModifierObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrMethodModifierObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function MethodModifier_GetObjLstByJSONObjLst(
  arrMethodModifierObjLstS: Array<clsMethodModifierEN>,
): Array<clsMethodModifierEN> {
  const arrMethodModifierObjLst = new Array<clsMethodModifierEN>();
  for (const objInFor of arrMethodModifierObjLstS) {
    const obj1 = MethodModifier_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrMethodModifierObjLst.push(obj1);
  }
  return arrMethodModifierObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function MethodModifier_GetObjByJSONStr(strJSON: string): clsMethodModifierEN {
  let pobjMethodModifierEN = new clsMethodModifierEN();
  if (strJSON === '') {
    return pobjMethodModifierEN;
  }
  try {
    pobjMethodModifierEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjMethodModifierEN;
  }
  return pobjMethodModifierEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function MethodModifier_GetCombineCondition(
  objMethodModifierCond: clsMethodModifierEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objMethodModifierCond.dicFldComparisonOp,
      clsMethodModifierEN.con_MethodModifierId,
    ) == true
  ) {
    const strComparisonOpMethodModifierId: string =
      objMethodModifierCond.dicFldComparisonOp[clsMethodModifierEN.con_MethodModifierId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsMethodModifierEN.con_MethodModifierId,
      objMethodModifierCond.methodModifierId,
      strComparisonOpMethodModifierId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objMethodModifierCond.dicFldComparisonOp,
      clsMethodModifierEN.con_MethodModifierName,
    ) == true
  ) {
    const strComparisonOpMethodModifierName: string =
      objMethodModifierCond.dicFldComparisonOp[clsMethodModifierEN.con_MethodModifierName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsMethodModifierEN.con_MethodModifierName,
      objMethodModifierCond.methodModifierName,
      strComparisonOpMethodModifierName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objMethodModifierCond.dicFldComparisonOp,
      clsMethodModifierEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objMethodModifierCond.dicFldComparisonOp[clsMethodModifierEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsMethodModifierEN.con_OrderNum,
      objMethodModifierCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objMethodModifierCond.dicFldComparisonOp,
      clsMethodModifierEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objMethodModifierCond.dicFldComparisonOp[clsMethodModifierEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsMethodModifierEN.con_Memo,
      objMethodModifierCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--MethodModifier(函数修饰语),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strMethodModifierName: 函数修饰语名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function MethodModifier_GetUniCondStr(objMethodModifierEN: clsMethodModifierEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and MethodModifierName = '{0}'", objMethodModifierEN.methodModifierName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--MethodModifier(函数修饰语),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strMethodModifierName: 函数修饰语名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function MethodModifier_GetUniCondStr4Update(
  objMethodModifierEN: clsMethodModifierEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and MethodModifierId <> '{0}'", objMethodModifierEN.methodModifierId);
  strWhereCond += Format(" and MethodModifierName = '{0}'", objMethodModifierEN.methodModifierName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objMethodModifierENS:源对象
 * @param objMethodModifierENT:目标对象
 */
export function MethodModifier_GetObjFromJsonObj(
  objMethodModifierENS: clsMethodModifierEN,
): clsMethodModifierEN {
  const objMethodModifierENT: clsMethodModifierEN = new clsMethodModifierEN();
  ObjectAssign(objMethodModifierENT, objMethodModifierENS);
  return objMethodModifierENT;
}
