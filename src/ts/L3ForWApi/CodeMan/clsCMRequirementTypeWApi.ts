﻿/**
 * 类名:clsCMRequirementTypeWApi
 * 表名:CMRequirementType(00050082)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:19
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 需求类型(CMRequirementType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
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
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsCMRequirementTypeEN } from '@/ts/L0Entity/CodeMan/clsCMRequirementTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cMRequirementType_Controller = 'CMRequirementTypeApi';
export const cMRequirementType_ConstructorName = 'cMRequirementType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRequirementTypeId:关键字
 * @returns 对象
 **/
export async function CMRequirementType_GetObjByRequirementTypeIdAsync(
  strRequirementTypeId: string,
): Promise<clsCMRequirementTypeEN | null> {
  const strThisFuncName = 'GetObjByRequirementTypeIdAsync';

  if (IsNullOrEmpty(strRequirementTypeId) == true) {
    const strMsg = Format(
      '参数:[strRequirementTypeId]不能为空!(In clsCMRequirementTypeWApi.GetObjByRequirementTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRequirementTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strRequirementTypeId]的长度:[{0}]不正确!(clsCMRequirementTypeWApi.GetObjByRequirementTypeIdAsync)',
      strRequirementTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByRequirementTypeId';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRequirementTypeId,
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
      const objCMRequirementType = CMRequirementType_GetObjFromJsonObj(returnObj);
      return objCMRequirementType;
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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
 * @param strRequirementTypeId:所给的关键字
 * @returns 对象
 */
export async function CMRequirementType_GetObjByRequirementTypeIdCache(
  strRequirementTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByRequirementTypeIdCache';

  if (IsNullOrEmpty(strRequirementTypeId) == true) {
    const strMsg = Format(
      '参数:[strRequirementTypeId]不能为空!(In clsCMRequirementTypeWApi.GetObjByRequirementTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRequirementTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strRequirementTypeId]的长度:[{0}]不正确!(clsCMRequirementTypeWApi.GetObjByRequirementTypeIdCache)',
      strRequirementTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCMRequirementTypeObjLstCache = await CMRequirementType_GetObjLstCache();
  try {
    const arrCMRequirementTypeSel = arrCMRequirementTypeObjLstCache.filter(
      (x) => x.requirementTypeId == strRequirementTypeId,
    );
    let objCMRequirementType: clsCMRequirementTypeEN;
    if (arrCMRequirementTypeSel.length > 0) {
      objCMRequirementType = arrCMRequirementTypeSel[0];
      return objCMRequirementType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCMRequirementTypeConst = await CMRequirementType_GetObjByRequirementTypeIdAsync(
          strRequirementTypeId,
        );
        if (objCMRequirementTypeConst != null) {
          CMRequirementType_ReFreshThisCache();
          return objCMRequirementTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRequirementTypeId,
      cMRequirementType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strRequirementTypeId:所给的关键字
 * @returns 对象
 */
export async function CMRequirementType_GetObjByRequirementTypeIdlocalStorage(
  strRequirementTypeId: string,
) {
  const strThisFuncName = 'GetObjByRequirementTypeIdlocalStorage';

  if (IsNullOrEmpty(strRequirementTypeId) == true) {
    const strMsg = Format(
      '参数:[strRequirementTypeId]不能为空!(In clsCMRequirementTypeWApi.GetObjByRequirementTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRequirementTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strRequirementTypeId]的长度:[{0}]不正确!(clsCMRequirementTypeWApi.GetObjByRequirementTypeIdlocalStorage)',
      strRequirementTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsCMRequirementTypeEN._CurrTabName, strRequirementTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objCMRequirementTypeCache: clsCMRequirementTypeEN = JSON.parse(strTempObj);
    return objCMRequirementTypeCache;
  }
  try {
    const objCMRequirementType = await CMRequirementType_GetObjByRequirementTypeIdAsync(
      strRequirementTypeId,
    );
    if (objCMRequirementType != null) {
      localStorage.setItem(strKey, JSON.stringify(objCMRequirementType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objCMRequirementType;
    }
    return objCMRequirementType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRequirementTypeId,
      cMRequirementType_ConstructorName,
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
 * @param objCMRequirementType:所给的对象
 * @returns 对象
 */
export async function CMRequirementType_UpdateObjInLstCache(
  objCMRequirementType: clsCMRequirementTypeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCMRequirementTypeObjLstCache = await CMRequirementType_GetObjLstCache();
    const obj = arrCMRequirementTypeObjLstCache.find(
      (x) => x.requirementTypeId == objCMRequirementType.requirementTypeId,
    );
    if (obj != null) {
      objCMRequirementType.requirementTypeId = obj.requirementTypeId;
      ObjectAssign(obj, objCMRequirementType);
    } else {
      arrCMRequirementTypeObjLstCache.push(objCMRequirementType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      cMRequirementType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strRequirementTypeId:所给的关键字
 * @returns 对象
 */
export async function CMRequirementType_GetNameByRequirementTypeIdCache(
  strRequirementTypeId: string,
) {
  if (IsNullOrEmpty(strRequirementTypeId) == true) {
    const strMsg = Format(
      '参数:[strRequirementTypeId]不能为空!(In clsCMRequirementTypeWApi.GetNameByRequirementTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRequirementTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strRequirementTypeId]的长度:[{0}]不正确!(clsCMRequirementTypeWApi.GetNameByRequirementTypeIdCache)',
      strRequirementTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCMRequirementTypeObjLstCache = await CMRequirementType_GetObjLstCache();
  if (arrCMRequirementTypeObjLstCache == null) return '';
  try {
    const arrCMRequirementTypeSel = arrCMRequirementTypeObjLstCache.filter(
      (x) => x.requirementTypeId == strRequirementTypeId,
    );
    let objCMRequirementType: clsCMRequirementTypeEN;
    if (arrCMRequirementTypeSel.length > 0) {
      objCMRequirementType = arrCMRequirementTypeSel[0];
      return objCMRequirementType.requirementTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strRequirementTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function CMRequirementType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsCMRequirementTypeEN.con_RequirementTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCMRequirementTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsCMRequirementTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strRequirementTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objCMRequirementType = await CMRequirementType_GetObjByRequirementTypeIdCache(
    strRequirementTypeId,
  );
  if (objCMRequirementType == null) return '';
  if (objCMRequirementType.GetFldValue(strOutFldName) == null) return '';
  return objCMRequirementType.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CMRequirementType_SortFunDefa(
  a: clsCMRequirementTypeEN,
  b: clsCMRequirementTypeEN,
): number {
  return a.requirementTypeId.localeCompare(b.requirementTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CMRequirementType_SortFunDefa2Fld(
  a: clsCMRequirementTypeEN,
  b: clsCMRequirementTypeEN,
): number {
  if (a.requirementTypeName == b.requirementTypeName)
    return a.requirementTypeENName.localeCompare(b.requirementTypeENName);
  else return a.requirementTypeName.localeCompare(b.requirementTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CMRequirementType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMRequirementTypeEN.con_RequirementTypeId:
        return (a: clsCMRequirementTypeEN, b: clsCMRequirementTypeEN) => {
          return a.requirementTypeId.localeCompare(b.requirementTypeId);
        };
      case clsCMRequirementTypeEN.con_RequirementTypeName:
        return (a: clsCMRequirementTypeEN, b: clsCMRequirementTypeEN) => {
          return a.requirementTypeName.localeCompare(b.requirementTypeName);
        };
      case clsCMRequirementTypeEN.con_RequirementTypeENName:
        return (a: clsCMRequirementTypeEN, b: clsCMRequirementTypeEN) => {
          if (a.requirementTypeENName == null) return -1;
          if (b.requirementTypeENName == null) return 1;
          return a.requirementTypeENName.localeCompare(b.requirementTypeENName);
        };
      case clsCMRequirementTypeEN.con_Memo:
        return (a: clsCMRequirementTypeEN, b: clsCMRequirementTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMRequirementType]中不存在!(in ${cMRequirementType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCMRequirementTypeEN.con_RequirementTypeId:
        return (a: clsCMRequirementTypeEN, b: clsCMRequirementTypeEN) => {
          return b.requirementTypeId.localeCompare(a.requirementTypeId);
        };
      case clsCMRequirementTypeEN.con_RequirementTypeName:
        return (a: clsCMRequirementTypeEN, b: clsCMRequirementTypeEN) => {
          return b.requirementTypeName.localeCompare(a.requirementTypeName);
        };
      case clsCMRequirementTypeEN.con_RequirementTypeENName:
        return (a: clsCMRequirementTypeEN, b: clsCMRequirementTypeEN) => {
          if (b.requirementTypeENName == null) return -1;
          if (a.requirementTypeENName == null) return 1;
          return b.requirementTypeENName.localeCompare(a.requirementTypeENName);
        };
      case clsCMRequirementTypeEN.con_Memo:
        return (a: clsCMRequirementTypeEN, b: clsCMRequirementTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMRequirementType]中不存在!(in ${cMRequirementType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function CMRequirementType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCMRequirementTypeEN.con_RequirementTypeId:
      return (obj: clsCMRequirementTypeEN) => {
        return obj.requirementTypeId === value;
      };
    case clsCMRequirementTypeEN.con_RequirementTypeName:
      return (obj: clsCMRequirementTypeEN) => {
        return obj.requirementTypeName === value;
      };
    case clsCMRequirementTypeEN.con_RequirementTypeENName:
      return (obj: clsCMRequirementTypeEN) => {
        return obj.requirementTypeENName === value;
      };
    case clsCMRequirementTypeEN.con_Memo:
      return (obj: clsCMRequirementTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CMRequirementType]中不存在!(in ${cMRequirementType_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function CMRequirementType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsCMRequirementTypeEN.con_RequirementTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrCMRequirementType = await CMRequirementType_GetObjLstCache();
  if (arrCMRequirementType == null) return [];
  let arrCMRequirementTypeSel = arrCMRequirementType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrCMRequirementTypeSel.length == 0) return [];
  return arrCMRequirementTypeSel.map((x) => x.requirementTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMRequirementType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
export async function CMRequirementType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
export async function CMRequirementType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCMRequirementTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

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
      const objCMRequirementType = CMRequirementType_GetObjFromJsonObj(returnObj);
      return objCMRequirementType;
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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
export async function CMRequirementType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCMRequirementTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsCMRequirementTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMRequirementTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrCMRequirementTypeExObjLstCache: Array<clsCMRequirementTypeEN> =
      CacheHelper.Get(strKey);
    const arrCMRequirementTypeObjLstT = CMRequirementType_GetObjLstByJSONObjLst(
      arrCMRequirementTypeExObjLstCache,
    );
    return arrCMRequirementTypeObjLstT;
  }
  try {
    const arrCMRequirementTypeExObjLst = await CMRequirementType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCMRequirementTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMRequirementTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrCMRequirementTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMRequirementType_ConstructorName,
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
export async function CMRequirementType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCMRequirementTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsCMRequirementTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMRequirementTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCMRequirementTypeExObjLstCache: Array<clsCMRequirementTypeEN> =
      JSON.parse(strTempObjLst);
    const arrCMRequirementTypeObjLstT = CMRequirementType_GetObjLstByJSONObjLst(
      arrCMRequirementTypeExObjLstCache,
    );
    return arrCMRequirementTypeObjLstT;
  }
  try {
    const arrCMRequirementTypeExObjLst = await CMRequirementType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCMRequirementTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMRequirementTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrCMRequirementTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMRequirementType_ConstructorName,
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
export async function CMRequirementType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCMRequirementTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCMRequirementTypeObjLstCache: Array<clsCMRequirementTypeEN> =
      JSON.parse(strTempObjLst);
    return arrCMRequirementTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CMRequirementType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCMRequirementTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

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
          cMRequirementType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMRequirementType_GetObjLstByJSONObjLst(returnObjLst);
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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
export async function CMRequirementType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCMRequirementTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsCMRequirementTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMRequirementTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCMRequirementTypeExObjLstCache: Array<clsCMRequirementTypeEN> =
      JSON.parse(strTempObjLst);
    const arrCMRequirementTypeObjLstT = CMRequirementType_GetObjLstByJSONObjLst(
      arrCMRequirementTypeExObjLstCache,
    );
    return arrCMRequirementTypeObjLstT;
  }
  try {
    const arrCMRequirementTypeExObjLst = await CMRequirementType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCMRequirementTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMRequirementTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrCMRequirementTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMRequirementType_ConstructorName,
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
export async function CMRequirementType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCMRequirementTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCMRequirementTypeObjLstCache: Array<clsCMRequirementTypeEN> =
      JSON.parse(strTempObjLst);
    return arrCMRequirementTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CMRequirementType_GetObjLstCache(): Promise<Array<clsCMRequirementTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrCMRequirementTypeObjLstCache;
  switch (clsCMRequirementTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrCMRequirementTypeObjLstCache = await CMRequirementType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrCMRequirementTypeObjLstCache = await CMRequirementType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrCMRequirementTypeObjLstCache = await CMRequirementType_GetObjLstClientCache();
      break;
    default:
      arrCMRequirementTypeObjLstCache = await CMRequirementType_GetObjLstClientCache();
      break;
  }
  return arrCMRequirementTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CMRequirementType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCMRequirementTypeObjLstCache;
  switch (clsCMRequirementTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrCMRequirementTypeObjLstCache = await CMRequirementType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrCMRequirementTypeObjLstCache = await CMRequirementType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrCMRequirementTypeObjLstCache = null;
      break;
    default:
      arrCMRequirementTypeObjLstCache = null;
      break;
  }
  return arrCMRequirementTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrRequirementTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CMRequirementType_GetSubObjLstCache(
  objCMRequirementTypeCond: clsCMRequirementTypeEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCMRequirementTypeObjLstCache = await CMRequirementType_GetObjLstCache();
  let arrCMRequirementTypeSel = arrCMRequirementTypeObjLstCache;
  if (
    objCMRequirementTypeCond.sfFldComparisonOp == null ||
    objCMRequirementTypeCond.sfFldComparisonOp == ''
  )
    return arrCMRequirementTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCMRequirementTypeCond.sfFldComparisonOp,
  );
  //console.log("clsCMRequirementTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCMRequirementTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMRequirementTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCMRequirementTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCMRequirementTypeCond),
      cMRequirementType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCMRequirementTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrRequirementTypeId:关键字列表
 * @returns 对象列表
 **/
export async function CMRequirementType_GetObjLstByRequirementTypeIdLstAsync(
  arrRequirementTypeId: Array<string>,
): Promise<Array<clsCMRequirementTypeEN>> {
  const strThisFuncName = 'GetObjLstByRequirementTypeIdLstAsync';
  const strAction = 'GetObjLstByRequirementTypeIdLst';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRequirementTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          cMRequirementType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMRequirementType_GetObjLstByJSONObjLst(returnObjLst);
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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
 * @param arrstrRequirementTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function CMRequirementType_GetObjLstByRequirementTypeIdLstCache(
  arrRequirementTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByRequirementTypeIdLstCache';
  try {
    const arrCMRequirementTypeObjLstCache = await CMRequirementType_GetObjLstCache();
    const arrCMRequirementTypeSel = arrCMRequirementTypeObjLstCache.filter(
      (x) => arrRequirementTypeIdLst.indexOf(x.requirementTypeId) > -1,
    );
    return arrCMRequirementTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrRequirementTypeIdLst.join(','),
      cMRequirementType_ConstructorName,
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
export async function CMRequirementType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCMRequirementTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

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
          cMRequirementType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMRequirementType_GetObjLstByJSONObjLst(returnObjLst);
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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
export async function CMRequirementType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCMRequirementTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

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
          cMRequirementType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMRequirementType_GetObjLstByJSONObjLst(returnObjLst);
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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
export async function CMRequirementType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMRequirementTypeEN>();
  const arrCMRequirementTypeObjLstCache = await CMRequirementType_GetObjLstCache();
  if (arrCMRequirementTypeObjLstCache.length == 0) return arrCMRequirementTypeObjLstCache;
  let arrCMRequirementTypeSel = arrCMRequirementTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objCMRequirementTypeCond = new clsCMRequirementTypeEN();
  ObjectAssign(objCMRequirementTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsCMRequirementTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMRequirementTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCMRequirementTypeSel.length == 0) return arrCMRequirementTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCMRequirementTypeSel = arrCMRequirementTypeSel.sort(
        CMRequirementType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCMRequirementTypeSel = arrCMRequirementTypeSel.sort(objPagerPara.sortFun);
    }
    arrCMRequirementTypeSel = arrCMRequirementTypeSel.slice(intStart, intEnd);
    return arrCMRequirementTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cMRequirementType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCMRequirementTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function CMRequirementType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCMRequirementTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMRequirementTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

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
          cMRequirementType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMRequirementType_GetObjLstByJSONObjLst(returnObjLst);
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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
 * @param strRequirementTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function CMRequirementType_DelRecordAsync(
  strRequirementTypeId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strRequirementTypeId);

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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
 * @param arrRequirementTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CMRequirementType_DelCMRequirementTypesAsync(
  arrRequirementTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelCMRequirementTypesAsync';
  const strAction = 'DelCMRequirementTypes';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRequirementTypeId, config);
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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
export async function CMRequirementType_DelCMRequirementTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCMRequirementTypesByCondAsync';
  const strAction = 'DelCMRequirementTypesByCond';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
 * @param objCMRequirementTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMRequirementType_AddNewRecordAsync(
  objCMRequirementTypeEN: clsCMRequirementTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (
    objCMRequirementTypeEN.requirementTypeId === null ||
    objCMRequirementTypeEN.requirementTypeId === ''
  ) {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCMRequirementTypeEN);
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMRequirementTypeEN, config);
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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
 * @param objCMRequirementTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMRequirementType_AddNewRecordWithMaxIdAsync(
  objCMRequirementTypeEN: clsCMRequirementTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMRequirementTypeEN, config);
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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
 * @param objCMRequirementTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CMRequirementType_AddNewRecordWithReturnKeyAsync(
  objCMRequirementTypeEN: clsCMRequirementTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMRequirementTypeEN, config);
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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
 * @param objCMRequirementTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CMRequirementType_UpdateRecordAsync(
  objCMRequirementTypeEN: clsCMRequirementTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCMRequirementTypeEN.sfUpdFldSetStr === undefined ||
    objCMRequirementTypeEN.sfUpdFldSetStr === null ||
    objCMRequirementTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMRequirementTypeEN.requirementTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMRequirementTypeEN, config);
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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
 * @param objCMRequirementTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMRequirementType_UpdateWithConditionAsync(
  objCMRequirementTypeEN: clsCMRequirementTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCMRequirementTypeEN.sfUpdFldSetStr === undefined ||
    objCMRequirementTypeEN.sfUpdFldSetStr === null ||
    objCMRequirementTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMRequirementTypeEN.requirementTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);
  objCMRequirementTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMRequirementTypeEN, config);
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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
 * @param objstrRequirementTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CMRequirementType_IsExistRecordCache(
  objCMRequirementTypeCond: clsCMRequirementTypeEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCMRequirementTypeObjLstCache = await CMRequirementType_GetObjLstCache();
  if (arrCMRequirementTypeObjLstCache == null) return false;
  let arrCMRequirementTypeSel = arrCMRequirementTypeObjLstCache;
  if (
    objCMRequirementTypeCond.sfFldComparisonOp == null ||
    objCMRequirementTypeCond.sfFldComparisonOp == ''
  )
    return arrCMRequirementTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCMRequirementTypeCond.sfFldComparisonOp,
  );
  //console.log("clsCMRequirementTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCMRequirementTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMRequirementTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCMRequirementTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCMRequirementTypeCond),
      cMRequirementType_ConstructorName,
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
export async function CMRequirementType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
 * @param strRequirementTypeId:所给的关键字
 * @returns 对象
 */
export async function CMRequirementType_IsExistCache(strRequirementTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrCMRequirementTypeObjLstCache = await CMRequirementType_GetObjLstCache();
  if (arrCMRequirementTypeObjLstCache == null) return false;
  try {
    const arrCMRequirementTypeSel = arrCMRequirementTypeObjLstCache.filter(
      (x) => x.requirementTypeId == strRequirementTypeId,
    );
    if (arrCMRequirementTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strRequirementTypeId,
      cMRequirementType_ConstructorName,
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
 * @param strRequirementTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CMRequirementType_IsExistAsync(
  strRequirementTypeId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRequirementTypeId,
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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
export async function CMRequirementType_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
 * @param objCMRequirementTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function CMRequirementType_GetRecCountByCondCache(
  objCMRequirementTypeCond: clsCMRequirementTypeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCMRequirementTypeObjLstCache = await CMRequirementType_GetObjLstCache();
  if (arrCMRequirementTypeObjLstCache == null) return 0;
  let arrCMRequirementTypeSel = arrCMRequirementTypeObjLstCache;
  if (
    objCMRequirementTypeCond.sfFldComparisonOp == null ||
    objCMRequirementTypeCond.sfFldComparisonOp == ''
  )
    return arrCMRequirementTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCMRequirementTypeCond.sfFldComparisonOp,
  );
  //console.log("clsCMRequirementTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCMRequirementTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMRequirementTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrCMRequirementTypeSel = arrCMRequirementTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCMRequirementTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCMRequirementTypeCond),
      cMRequirementType_ConstructorName,
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
export async function CMRequirementType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cMRequirementType_Controller, strAction);

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
        cMRequirementType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMRequirementType_ConstructorName,
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
export function CMRequirementType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CMRequirementType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsCMRequirementTypeEN._CurrTabName;
  switch (clsCMRequirementTypeEN.CacheModeId) {
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
export function CMRequirementType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsCMRequirementTypeEN._CurrTabName;
    switch (clsCMRequirementTypeEN.CacheModeId) {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function CMRequirementType_BindDdl_RequirementTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_RequirementTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_RequirementTypeIdInDivCache");
  const arrObjLstSel = await CMRequirementType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCMRequirementTypeEN.con_RequirementTypeId,
    clsCMRequirementTypeEN.con_RequirementTypeName,
    '需求类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMRequirementType_CheckPropertyNew(
  pobjCMRequirementTypeEN: clsCMRequirementTypeEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjCMRequirementTypeEN.requirementTypeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[需求类型名]不能为空(In 需求类型)!(clsCMRequirementTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.requirementTypeId) == false &&
    GetStrLen(pobjCMRequirementTypeEN.requirementTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[需求类型Id(requirementTypeId)]的长度不能超过4(In 需求类型(CMRequirementType))!值:$(pobjCMRequirementTypeEN.requirementTypeId)(clsCMRequirementTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.requirementTypeName) == false &&
    GetStrLen(pobjCMRequirementTypeEN.requirementTypeName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[需求类型名(requirementTypeName)]的长度不能超过30(In 需求类型(CMRequirementType))!值:$(pobjCMRequirementTypeEN.requirementTypeName)(clsCMRequirementTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.requirementTypeENName) == false &&
    GetStrLen(pobjCMRequirementTypeEN.requirementTypeENName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[需求类型英文名(requirementTypeENName)]的长度不能超过30(In 需求类型(CMRequirementType))!值:$(pobjCMRequirementTypeEN.requirementTypeENName)(clsCMRequirementTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.memo) == false &&
    GetStrLen(pobjCMRequirementTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 需求类型(CMRequirementType))!值:$(pobjCMRequirementTypeEN.memo)(clsCMRequirementTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.requirementTypeId) == false &&
    undefined !== pobjCMRequirementTypeEN.requirementTypeId &&
    tzDataType.isString(pobjCMRequirementTypeEN.requirementTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[需求类型Id(requirementTypeId)]的值:[$(pobjCMRequirementTypeEN.requirementTypeId)], 非法,应该为字符型(In 需求类型(CMRequirementType))!(clsCMRequirementTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.requirementTypeName) == false &&
    undefined !== pobjCMRequirementTypeEN.requirementTypeName &&
    tzDataType.isString(pobjCMRequirementTypeEN.requirementTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[需求类型名(requirementTypeName)]的值:[$(pobjCMRequirementTypeEN.requirementTypeName)], 非法,应该为字符型(In 需求类型(CMRequirementType))!(clsCMRequirementTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.requirementTypeENName) == false &&
    undefined !== pobjCMRequirementTypeEN.requirementTypeENName &&
    tzDataType.isString(pobjCMRequirementTypeEN.requirementTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[需求类型英文名(requirementTypeENName)]的值:[$(pobjCMRequirementTypeEN.requirementTypeENName)], 非法,应该为字符型(In 需求类型(CMRequirementType))!(clsCMRequirementTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.memo) == false &&
    undefined !== pobjCMRequirementTypeEN.memo &&
    tzDataType.isString(pobjCMRequirementTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjCMRequirementTypeEN.memo)], 非法,应该为字符型(In 需求类型(CMRequirementType))!(clsCMRequirementTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMRequirementType_CheckProperty4Update(
  pobjCMRequirementTypeEN: clsCMRequirementTypeEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.requirementTypeId) == false &&
    GetStrLen(pobjCMRequirementTypeEN.requirementTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[需求类型Id(requirementTypeId)]的长度不能超过4(In 需求类型(CMRequirementType))!值:$(pobjCMRequirementTypeEN.requirementTypeId)(clsCMRequirementTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.requirementTypeName) == false &&
    GetStrLen(pobjCMRequirementTypeEN.requirementTypeName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[需求类型名(requirementTypeName)]的长度不能超过30(In 需求类型(CMRequirementType))!值:$(pobjCMRequirementTypeEN.requirementTypeName)(clsCMRequirementTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.requirementTypeENName) == false &&
    GetStrLen(pobjCMRequirementTypeEN.requirementTypeENName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[需求类型英文名(requirementTypeENName)]的长度不能超过30(In 需求类型(CMRequirementType))!值:$(pobjCMRequirementTypeEN.requirementTypeENName)(clsCMRequirementTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.memo) == false &&
    GetStrLen(pobjCMRequirementTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 需求类型(CMRequirementType))!值:$(pobjCMRequirementTypeEN.memo)(clsCMRequirementTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.requirementTypeId) == false &&
    undefined !== pobjCMRequirementTypeEN.requirementTypeId &&
    tzDataType.isString(pobjCMRequirementTypeEN.requirementTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[需求类型Id(requirementTypeId)]的值:[$(pobjCMRequirementTypeEN.requirementTypeId)], 非法,应该为字符型(In 需求类型(CMRequirementType))!(clsCMRequirementTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.requirementTypeName) == false &&
    undefined !== pobjCMRequirementTypeEN.requirementTypeName &&
    tzDataType.isString(pobjCMRequirementTypeEN.requirementTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[需求类型名(requirementTypeName)]的值:[$(pobjCMRequirementTypeEN.requirementTypeName)], 非法,应该为字符型(In 需求类型(CMRequirementType))!(clsCMRequirementTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.requirementTypeENName) == false &&
    undefined !== pobjCMRequirementTypeEN.requirementTypeENName &&
    tzDataType.isString(pobjCMRequirementTypeEN.requirementTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[需求类型英文名(requirementTypeENName)]的值:[$(pobjCMRequirementTypeEN.requirementTypeENName)], 非法,应该为字符型(In 需求类型(CMRequirementType))!(clsCMRequirementTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.memo) == false &&
    undefined !== pobjCMRequirementTypeEN.memo &&
    tzDataType.isString(pobjCMRequirementTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjCMRequirementTypeEN.memo)], 非法,应该为字符型(In 需求类型(CMRequirementType))!(clsCMRequirementTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjCMRequirementTypeEN.requirementTypeId) === true ||
    pobjCMRequirementTypeEN.requirementTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[需求类型Id]不能为空(In 需求类型)!(clsCMRequirementTypeBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMRequirementType_GetJSONStrByObj(
  pobjCMRequirementTypeEN: clsCMRequirementTypeEN,
): string {
  pobjCMRequirementTypeEN.sfUpdFldSetStr = pobjCMRequirementTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCMRequirementTypeEN);
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
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function CMRequirementType_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsCMRequirementTypeEN> {
  let arrCMRequirementTypeObjLst = new Array<clsCMRequirementTypeEN>();
  if (strJSON === '') {
    return arrCMRequirementTypeObjLst;
  }
  try {
    arrCMRequirementTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCMRequirementTypeObjLst;
  }
  return arrCMRequirementTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCMRequirementTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CMRequirementType_GetObjLstByJSONObjLst(
  arrCMRequirementTypeObjLstS: Array<clsCMRequirementTypeEN>,
): Array<clsCMRequirementTypeEN> {
  const arrCMRequirementTypeObjLst = new Array<clsCMRequirementTypeEN>();
  for (const objInFor of arrCMRequirementTypeObjLstS) {
    const obj1 = CMRequirementType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCMRequirementTypeObjLst.push(obj1);
  }
  return arrCMRequirementTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMRequirementType_GetObjByJSONStr(strJSON: string): clsCMRequirementTypeEN {
  let pobjCMRequirementTypeEN = new clsCMRequirementTypeEN();
  if (strJSON === '') {
    return pobjCMRequirementTypeEN;
  }
  try {
    pobjCMRequirementTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCMRequirementTypeEN;
  }
  return pobjCMRequirementTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CMRequirementType_GetCombineCondition(
  objCMRequirementTypeCond: clsCMRequirementTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementTypeCond.dicFldComparisonOp,
      clsCMRequirementTypeEN.con_RequirementTypeId,
    ) == true
  ) {
    const strComparisonOpRequirementTypeId: string =
      objCMRequirementTypeCond.dicFldComparisonOp[clsCMRequirementTypeEN.con_RequirementTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementTypeEN.con_RequirementTypeId,
      objCMRequirementTypeCond.requirementTypeId,
      strComparisonOpRequirementTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementTypeCond.dicFldComparisonOp,
      clsCMRequirementTypeEN.con_RequirementTypeName,
    ) == true
  ) {
    const strComparisonOpRequirementTypeName: string =
      objCMRequirementTypeCond.dicFldComparisonOp[clsCMRequirementTypeEN.con_RequirementTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementTypeEN.con_RequirementTypeName,
      objCMRequirementTypeCond.requirementTypeName,
      strComparisonOpRequirementTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementTypeCond.dicFldComparisonOp,
      clsCMRequirementTypeEN.con_RequirementTypeENName,
    ) == true
  ) {
    const strComparisonOpRequirementTypeENName: string =
      objCMRequirementTypeCond.dicFldComparisonOp[clsCMRequirementTypeEN.con_RequirementTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementTypeEN.con_RequirementTypeENName,
      objCMRequirementTypeCond.requirementTypeENName,
      strComparisonOpRequirementTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMRequirementTypeCond.dicFldComparisonOp,
      clsCMRequirementTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCMRequirementTypeCond.dicFldComparisonOp[clsCMRequirementTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMRequirementTypeEN.con_Memo,
      objCMRequirementTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCMRequirementTypeENS:源对象
 * @param objCMRequirementTypeENT:目标对象
 */
export function CMRequirementType_GetObjFromJsonObj(
  objCMRequirementTypeENS: clsCMRequirementTypeEN,
): clsCMRequirementTypeEN {
  const objCMRequirementTypeENT: clsCMRequirementTypeEN = new clsCMRequirementTypeEN();
  ObjectAssign(objCMRequirementTypeENT, objCMRequirementTypeENS);
  return objCMRequirementTypeENT;
}
