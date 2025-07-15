/**
 * 类名:clsDDLItemsOptionWApi
 * 表名:DDLItemsOption(00050059)
 * 版本:2025.05.12.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/13 03:38:13
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 下拉框列表选项(DDLItemsOption)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月13日.
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
import { clsDDLItemsOptionEN } from '@/ts/L0Entity/PrjInterface/clsDDLItemsOptionEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const dDLItemsOption_Controller = 'DDLItemsOptionApi';
export const dDLItemsOption_ConstructorName = 'dDLItemsOption';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDdlItemsOptionId:关键字
 * @returns 对象
 **/
export async function DDLItemsOption_GetObjByDdlItemsOptionIdAsync(
  strDdlItemsOptionId: string,
): Promise<clsDDLItemsOptionEN | null> {
  const strThisFuncName = 'GetObjByDdlItemsOptionIdAsync';

  if (IsNullOrEmpty(strDdlItemsOptionId) == true) {
    const strMsg = Format(
      '参数:[strDdlItemsOptionId]不能为空!(In clsDDLItemsOptionWApi.GetObjByDdlItemsOptionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDdlItemsOptionId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDdlItemsOptionId]的长度:[{0}]不正确!(clsDDLItemsOptionWApi.GetObjByDdlItemsOptionIdAsync)',
      strDdlItemsOptionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDdlItemsOptionId';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDdlItemsOptionId,
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
      const objDDLItemsOption = DDLItemsOption_GetObjFromJsonObj(returnObj);
      return objDDLItemsOption;
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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
 * @param strDdlItemsOptionId:所给的关键字
 * @returns 对象
 */
export async function DDLItemsOption_GetObjByDdlItemsOptionIdlocalStorage(
  strDdlItemsOptionId: string,
) {
  const strThisFuncName = 'GetObjByDdlItemsOptionIdlocalStorage';

  if (IsNullOrEmpty(strDdlItemsOptionId) == true) {
    const strMsg = Format(
      '参数:[strDdlItemsOptionId]不能为空!(In clsDDLItemsOptionWApi.GetObjByDdlItemsOptionIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDdlItemsOptionId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDdlItemsOptionId]的长度:[{0}]不正确!(clsDDLItemsOptionWApi.GetObjByDdlItemsOptionIdlocalStorage)',
      strDdlItemsOptionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsDDLItemsOptionEN._CurrTabName, strDdlItemsOptionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objDDLItemsOptionCache: clsDDLItemsOptionEN = JSON.parse(strTempObj);
    return objDDLItemsOptionCache;
  }
  try {
    const objDDLItemsOption = await DDLItemsOption_GetObjByDdlItemsOptionIdAsync(
      strDdlItemsOptionId,
    );
    if (objDDLItemsOption != null) {
      localStorage.setItem(strKey, JSON.stringify(objDDLItemsOption));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objDDLItemsOption;
    }
    return objDDLItemsOption;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDdlItemsOptionId,
      dDLItemsOption_ConstructorName,
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
 * @param strDdlItemsOptionId:所给的关键字
 * @returns 对象
 */
export async function DDLItemsOption_GetObjByDdlItemsOptionIdCache(
  strDdlItemsOptionId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDdlItemsOptionIdCache';

  if (IsNullOrEmpty(strDdlItemsOptionId) == true) {
    const strMsg = Format(
      '参数:[strDdlItemsOptionId]不能为空!(In clsDDLItemsOptionWApi.GetObjByDdlItemsOptionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDdlItemsOptionId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDdlItemsOptionId]的长度:[{0}]不正确!(clsDDLItemsOptionWApi.GetObjByDdlItemsOptionIdCache)',
      strDdlItemsOptionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDDLItemsOptionObjLstCache = await DDLItemsOption_GetObjLstCache();
  try {
    const arrDDLItemsOptionSel = arrDDLItemsOptionObjLstCache.filter(
      (x) => x.ddlItemsOptionId == strDdlItemsOptionId,
    );
    let objDDLItemsOption: clsDDLItemsOptionEN;
    if (arrDDLItemsOptionSel.length > 0) {
      objDDLItemsOption = arrDDLItemsOptionSel[0];
      return objDDLItemsOption;
    } else {
      if (bolTryAsyncOnce == true) {
        const objDDLItemsOptionConst = await DDLItemsOption_GetObjByDdlItemsOptionIdAsync(
          strDdlItemsOptionId,
        );
        if (objDDLItemsOptionConst != null) {
          DDLItemsOption_ReFreshThisCache();
          return objDDLItemsOptionConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDdlItemsOptionId,
      dDLItemsOption_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objDDLItemsOption:所给的对象
 * @returns 对象
 */
export async function DDLItemsOption_UpdateObjInLstCache(objDDLItemsOption: clsDDLItemsOptionEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrDDLItemsOptionObjLstCache = await DDLItemsOption_GetObjLstCache();
    const obj = arrDDLItemsOptionObjLstCache.find(
      (x) => x.ddlItemsOptionId == objDDLItemsOption.ddlItemsOptionId,
    );
    if (obj != null) {
      objDDLItemsOption.ddlItemsOptionId = obj.ddlItemsOptionId;
      ObjectAssign(obj, objDDLItemsOption);
    } else {
      arrDDLItemsOptionObjLstCache.push(objDDLItemsOption);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      dDLItemsOption_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DDLItemsOption_SortFunDefa(a: clsDDLItemsOptionEN, b: clsDDLItemsOptionEN): number {
  return a.ddlItemsOptionId.localeCompare(b.ddlItemsOptionId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DDLItemsOption_SortFunDefa2Fld(
  a: clsDDLItemsOptionEN,
  b: clsDDLItemsOptionEN,
): number {
  if (a.ddlItemsOptionName == b.ddlItemsOptionName)
    return a.ddlItemsOptionENName.localeCompare(b.ddlItemsOptionENName);
  else return a.ddlItemsOptionName.localeCompare(b.ddlItemsOptionName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function DDLItemsOption_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDDLItemsOptionEN.con_DdlItemsOptionId:
        return (a: clsDDLItemsOptionEN, b: clsDDLItemsOptionEN) => {
          return a.ddlItemsOptionId.localeCompare(b.ddlItemsOptionId);
        };
      case clsDDLItemsOptionEN.con_DdlItemsOptionName:
        return (a: clsDDLItemsOptionEN, b: clsDDLItemsOptionEN) => {
          return a.ddlItemsOptionName.localeCompare(b.ddlItemsOptionName);
        };
      case clsDDLItemsOptionEN.con_DdlItemsOptionENName:
        return (a: clsDDLItemsOptionEN, b: clsDDLItemsOptionEN) => {
          if (a.ddlItemsOptionENName == null) return -1;
          if (b.ddlItemsOptionENName == null) return 1;
          return a.ddlItemsOptionENName.localeCompare(b.ddlItemsOptionENName);
        };
      case clsDDLItemsOptionEN.con_Memo:
        return (a: clsDDLItemsOptionEN, b: clsDDLItemsOptionEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DDLItemsOption]中不存在!(in ${dDLItemsOption_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDDLItemsOptionEN.con_DdlItemsOptionId:
        return (a: clsDDLItemsOptionEN, b: clsDDLItemsOptionEN) => {
          return b.ddlItemsOptionId.localeCompare(a.ddlItemsOptionId);
        };
      case clsDDLItemsOptionEN.con_DdlItemsOptionName:
        return (a: clsDDLItemsOptionEN, b: clsDDLItemsOptionEN) => {
          return b.ddlItemsOptionName.localeCompare(a.ddlItemsOptionName);
        };
      case clsDDLItemsOptionEN.con_DdlItemsOptionENName:
        return (a: clsDDLItemsOptionEN, b: clsDDLItemsOptionEN) => {
          if (b.ddlItemsOptionENName == null) return -1;
          if (a.ddlItemsOptionENName == null) return 1;
          return b.ddlItemsOptionENName.localeCompare(a.ddlItemsOptionENName);
        };
      case clsDDLItemsOptionEN.con_Memo:
        return (a: clsDDLItemsOptionEN, b: clsDDLItemsOptionEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DDLItemsOption]中不存在!(in ${dDLItemsOption_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strDdlItemsOptionId:所给的关键字
 * @returns 对象
 */
export async function DDLItemsOption_GetNameByDdlItemsOptionIdCache(strDdlItemsOptionId: string) {
  if (IsNullOrEmpty(strDdlItemsOptionId) == true) {
    const strMsg = Format(
      '参数:[strDdlItemsOptionId]不能为空!(In clsDDLItemsOptionWApi.GetNameByDdlItemsOptionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDdlItemsOptionId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strDdlItemsOptionId]的长度:[{0}]不正确!(clsDDLItemsOptionWApi.GetNameByDdlItemsOptionIdCache)',
      strDdlItemsOptionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDDLItemsOptionObjLstCache = await DDLItemsOption_GetObjLstCache();
  if (arrDDLItemsOptionObjLstCache == null) return '';
  try {
    const arrDDLItemsOptionSel = arrDDLItemsOptionObjLstCache.filter(
      (x) => x.ddlItemsOptionId == strDdlItemsOptionId,
    );
    let objDDLItemsOption: clsDDLItemsOptionEN;
    if (arrDDLItemsOptionSel.length > 0) {
      objDDLItemsOption = arrDDLItemsOptionSel[0];
      return objDDLItemsOption.ddlItemsOptionName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strDdlItemsOptionId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function DDLItemsOption_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDDLItemsOptionEN.con_DdlItemsOptionId:
      return (obj: clsDDLItemsOptionEN) => {
        return obj.ddlItemsOptionId === value;
      };
    case clsDDLItemsOptionEN.con_DdlItemsOptionName:
      return (obj: clsDDLItemsOptionEN) => {
        return obj.ddlItemsOptionName === value;
      };
    case clsDDLItemsOptionEN.con_DdlItemsOptionENName:
      return (obj: clsDDLItemsOptionEN) => {
        return obj.ddlItemsOptionENName === value;
      };
    case clsDDLItemsOptionEN.con_Memo:
      return (obj: clsDDLItemsOptionEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DDLItemsOption]中不存在!(in ${dDLItemsOption_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function DDLItemsOption_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsDDLItemsOptionEN.con_DdlItemsOptionId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsDDLItemsOptionEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsDDLItemsOptionEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strDdlItemsOptionId = strInValue;
  if (IsNullOrEmpty(strDdlItemsOptionId) == true) {
    return '';
  }
  const objDDLItemsOption = await DDLItemsOption_GetObjByDdlItemsOptionIdCache(strDdlItemsOptionId);
  if (objDDLItemsOption == null) return '';
  if (objDDLItemsOption.GetFldValue(strOutFldName) == null) return '';
  return objDDLItemsOption.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function DDLItemsOption_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsDDLItemsOptionEN.con_DdlItemsOptionId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrDDLItemsOption = await DDLItemsOption_GetObjLstCache();
  if (arrDDLItemsOption == null) return [];
  let arrDDLItemsOptionSel = arrDDLItemsOption;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrDDLItemsOptionSel.length == 0) return [];
  return arrDDLItemsOptionSel.map((x) => x.ddlItemsOptionId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DDLItemsOption_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDDLItemsOptionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

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
      const objDDLItemsOption = DDLItemsOption_GetObjFromJsonObj(returnObj);
      return objDDLItemsOption;
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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDDLItemsOptionEN._CurrTabName;
  if (IsNullOrEmpty(clsDDLItemsOptionEN.WhereFormat) == false) {
    strWhereCond = clsDDLItemsOptionEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsDDLItemsOptionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDDLItemsOptionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrDDLItemsOptionExObjLstCache: Array<clsDDLItemsOptionEN> = CacheHelper.Get(strKey);
    const arrDDLItemsOptionObjLstT = DDLItemsOption_GetObjLstByJSONObjLst(
      arrDDLItemsOptionExObjLstCache,
    );
    return arrDDLItemsOptionObjLstT;
  }
  try {
    const arrDDLItemsOptionExObjLst = await DDLItemsOption_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrDDLItemsOptionExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDDLItemsOptionExObjLst.length,
    );
    console.log(strInfo);
    return arrDDLItemsOptionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDDLItemsOptionEN._CurrTabName;
  if (IsNullOrEmpty(clsDDLItemsOptionEN.WhereFormat) == false) {
    strWhereCond = clsDDLItemsOptionEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsDDLItemsOptionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDDLItemsOptionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDDLItemsOptionExObjLstCache: Array<clsDDLItemsOptionEN> = JSON.parse(strTempObjLst);
    const arrDDLItemsOptionObjLstT = DDLItemsOption_GetObjLstByJSONObjLst(
      arrDDLItemsOptionExObjLstCache,
    );
    return arrDDLItemsOptionObjLstT;
  }
  try {
    const arrDDLItemsOptionExObjLst = await DDLItemsOption_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrDDLItemsOptionExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDDLItemsOptionExObjLst.length,
    );
    console.log(strInfo);
    return arrDDLItemsOptionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsDDLItemsOptionEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDDLItemsOptionObjLstCache: Array<clsDDLItemsOptionEN> = JSON.parse(strTempObjLst);
    return arrDDLItemsOptionObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function DDLItemsOption_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDDLItemsOptionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

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
          dDLItemsOption_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DDLItemsOption_GetObjLstByJSONObjLst(returnObjLst);
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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDDLItemsOptionEN._CurrTabName;
  if (IsNullOrEmpty(clsDDLItemsOptionEN.WhereFormat) == false) {
    strWhereCond = clsDDLItemsOptionEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsDDLItemsOptionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDDLItemsOptionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDDLItemsOptionExObjLstCache: Array<clsDDLItemsOptionEN> = JSON.parse(strTempObjLst);
    const arrDDLItemsOptionObjLstT = DDLItemsOption_GetObjLstByJSONObjLst(
      arrDDLItemsOptionExObjLstCache,
    );
    return arrDDLItemsOptionObjLstT;
  }
  try {
    const arrDDLItemsOptionExObjLst = await DDLItemsOption_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrDDLItemsOptionExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDDLItemsOptionExObjLst.length,
    );
    console.log(strInfo);
    return arrDDLItemsOptionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsDDLItemsOptionEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDDLItemsOptionObjLstCache: Array<clsDDLItemsOptionEN> = JSON.parse(strTempObjLst);
    return arrDDLItemsOptionObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DDLItemsOption_GetObjLstCache(): Promise<Array<clsDDLItemsOptionEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrDDLItemsOptionObjLstCache;
  switch (clsDDLItemsOptionEN.CacheModeId) {
    case '04': //sessionStorage
      arrDDLItemsOptionObjLstCache = await DDLItemsOption_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrDDLItemsOptionObjLstCache = await DDLItemsOption_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrDDLItemsOptionObjLstCache = await DDLItemsOption_GetObjLstClientCache();
      break;
    default:
      arrDDLItemsOptionObjLstCache = await DDLItemsOption_GetObjLstClientCache();
      break;
  }
  return arrDDLItemsOptionObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DDLItemsOption_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrDDLItemsOptionObjLstCache;
  switch (clsDDLItemsOptionEN.CacheModeId) {
    case '04': //sessionStorage
      arrDDLItemsOptionObjLstCache = await DDLItemsOption_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrDDLItemsOptionObjLstCache = await DDLItemsOption_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrDDLItemsOptionObjLstCache = null;
      break;
    default:
      arrDDLItemsOptionObjLstCache = null;
      break;
  }
  return arrDDLItemsOptionObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrDdlItemsOptionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DDLItemsOption_GetSubObjLstCache(objDDLItemsOptionCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrDDLItemsOptionObjLstCache = await DDLItemsOption_GetObjLstCache();
  let arrDDLItemsOptionSel = arrDDLItemsOptionObjLstCache;
  if (objDDLItemsOptionCond.GetConditions().length == 0) return arrDDLItemsOptionSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objDDLItemsOptionCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDDLItemsOptionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDDLItemsOptionCond),
      dDLItemsOption_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDDLItemsOptionEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDdlItemsOptionId:关键字列表
 * @returns 对象列表
 **/
export async function DDLItemsOption_GetObjLstByDdlItemsOptionIdLstAsync(
  arrDdlItemsOptionId: Array<string>,
): Promise<Array<clsDDLItemsOptionEN>> {
  const strThisFuncName = 'GetObjLstByDdlItemsOptionIdLstAsync';
  const strAction = 'GetObjLstByDdlItemsOptionIdLst';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDdlItemsOptionId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          dDLItemsOption_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DDLItemsOption_GetObjLstByJSONObjLst(returnObjLst);
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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
 * @param arrstrDdlItemsOptionIdLst:关键字列表
 * @returns 对象列表
 */
export async function DDLItemsOption_GetObjLstByDdlItemsOptionIdLstCache(
  arrDdlItemsOptionIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByDdlItemsOptionIdLstCache';
  try {
    const arrDDLItemsOptionObjLstCache = await DDLItemsOption_GetObjLstCache();
    const arrDDLItemsOptionSel = arrDDLItemsOptionObjLstCache.filter(
      (x) => arrDdlItemsOptionIdLst.indexOf(x.ddlItemsOptionId) > -1,
    );
    return arrDDLItemsOptionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrDdlItemsOptionIdLst.join(','),
      dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDDLItemsOptionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

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
          dDLItemsOption_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DDLItemsOption_GetObjLstByJSONObjLst(returnObjLst);
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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDDLItemsOptionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

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
          dDLItemsOption_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DDLItemsOption_GetObjLstByJSONObjLst(returnObjLst);
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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsDDLItemsOptionEN>();
  const arrDDLItemsOptionObjLstCache = await DDLItemsOption_GetObjLstCache();
  if (arrDDLItemsOptionObjLstCache.length == 0) return arrDDLItemsOptionObjLstCache;
  let arrDDLItemsOptionSel = arrDDLItemsOptionObjLstCache;
  const objDDLItemsOptionCond = objPagerPara.conditionCollection;
  if (objDDLItemsOptionCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsDDLItemsOptionEN>();
  }
  //console.log("clsDDLItemsOptionWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objDDLItemsOptionCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDDLItemsOptionSel.length == 0) return arrDDLItemsOptionSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDDLItemsOptionSel = arrDDLItemsOptionSel.sort(
        DDLItemsOption_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDDLItemsOptionSel = arrDDLItemsOptionSel.sort(objPagerPara.sortFun);
    }
    arrDDLItemsOptionSel = arrDDLItemsOptionSel.slice(intStart, intEnd);
    return arrDDLItemsOptionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dDLItemsOption_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDDLItemsOptionEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function DDLItemsOption_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDDLItemsOptionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDDLItemsOptionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

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
          dDLItemsOption_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DDLItemsOption_GetObjLstByJSONObjLst(returnObjLst);
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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
 * @param strDdlItemsOptionId:关键字
 * @returns 获取删除的结果
 **/
export async function DDLItemsOption_DelRecordAsync(strDdlItemsOptionId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strDdlItemsOptionId);

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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
 * @param arrDdlItemsOptionId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function DDLItemsOption_DelDDLItemsOptionsAsync(
  arrDdlItemsOptionId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelDDLItemsOptionsAsync';
  const strAction = 'DelDDLItemsOptions';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDdlItemsOptionId, config);
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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_DelDDLItemsOptionsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelDDLItemsOptionsByCondAsync';
  const strAction = 'DelDDLItemsOptionsByCond';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
 * @param objDDLItemsOptionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DDLItemsOption_AddNewRecordAsync(
  objDDLItemsOptionEN: clsDDLItemsOptionEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (
    objDDLItemsOptionEN.ddlItemsOptionId === null ||
    objDDLItemsOptionEN.ddlItemsOptionId === ''
  ) {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objDDLItemsOptionEN);
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDDLItemsOptionEN, config);
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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
 * @param objDDLItemsOptionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DDLItemsOption_AddNewRecordWithMaxIdAsync(
  objDDLItemsOptionEN: clsDDLItemsOptionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDDLItemsOptionEN, config);
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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_AddNewObjSave(
  objDDLItemsOptionEN: clsDDLItemsOptionEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    DDLItemsOption_CheckPropertyNew(objDDLItemsOptionEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dDLItemsOption_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await DDLItemsOption_IsExistAsync(objDDLItemsOptionEN.ddlItemsOptionId);
    if (bolIsExist == true) {
      const strMsg = Format(
        '添加记录时,关键字：{0}已经存在!',
        objDDLItemsOptionEN.ddlItemsOptionId,
      );
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await DDLItemsOption_AddNewRecordAsync(objDDLItemsOptionEN);
    if (returnBool == true) {
      DDLItemsOption_ReFreshCache();
    } else {
      const strInfo = `添加[下拉框列表选项(DDLItemsOption)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objDDLItemsOptionEN.ddlItemsOptionId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${dDLItemsOption_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function DDLItemsOption_UpdateObjSave(
  objDDLItemsOptionEN: clsDDLItemsOptionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objDDLItemsOptionEN.sfUpdFldSetStr = objDDLItemsOptionEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objDDLItemsOptionEN.ddlItemsOptionId == '' ||
    objDDLItemsOptionEN.ddlItemsOptionId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    DDLItemsOption_CheckProperty4Update(objDDLItemsOptionEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dDLItemsOption_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await DDLItemsOption_UpdateRecordAsync(objDDLItemsOptionEN);
    if (returnBool == true) {
      DDLItemsOption_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${dDLItemsOption_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objDDLItemsOptionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DDLItemsOption_AddNewRecordWithReturnKeyAsync(
  objDDLItemsOptionEN: clsDDLItemsOptionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDDLItemsOptionEN, config);
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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
 * @param objDDLItemsOptionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DDLItemsOption_UpdateRecordAsync(
  objDDLItemsOptionEN: clsDDLItemsOptionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDDLItemsOptionEN.sfUpdFldSetStr === undefined ||
    objDDLItemsOptionEN.sfUpdFldSetStr === null ||
    objDDLItemsOptionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDDLItemsOptionEN.ddlItemsOptionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDDLItemsOptionEN, config);
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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
 * @param objDDLItemsOptionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DDLItemsOption_EditRecordExAsync(
  objDDLItemsOptionEN: clsDDLItemsOptionEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objDDLItemsOptionEN.sfUpdFldSetStr === undefined ||
    objDDLItemsOptionEN.sfUpdFldSetStr === null ||
    objDDLItemsOptionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDDLItemsOptionEN.ddlItemsOptionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDDLItemsOptionEN, config);
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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
 * @param objDDLItemsOptionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DDLItemsOption_UpdateWithConditionAsync(
  objDDLItemsOptionEN: clsDDLItemsOptionEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDDLItemsOptionEN.sfUpdFldSetStr === undefined ||
    objDDLItemsOptionEN.sfUpdFldSetStr === null ||
    objDDLItemsOptionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDDLItemsOptionEN.ddlItemsOptionId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);
  objDDLItemsOptionEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDDLItemsOptionEN, config);
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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
 * @param objstrDdlItemsOptionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DDLItemsOption_IsExistRecordCache(
  objDDLItemsOptionCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrDDLItemsOptionObjLstCache = await DDLItemsOption_GetObjLstCache();
  if (arrDDLItemsOptionObjLstCache == null) return false;
  let arrDDLItemsOptionSel = arrDDLItemsOptionObjLstCache;
  if (objDDLItemsOptionCond.GetConditions().length == 0)
    return arrDDLItemsOptionSel.length > 0 ? true : false;
  try {
    for (const objCondition of objDDLItemsOptionCond.GetConditions()) {
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
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDDLItemsOptionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objDDLItemsOptionCond),
      dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
 * @param strDdlItemsOptionId:所给的关键字
 * @returns 对象
 */
export async function DDLItemsOption_IsExistCache(strDdlItemsOptionId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrDDLItemsOptionObjLstCache = await DDLItemsOption_GetObjLstCache();
  if (arrDDLItemsOptionObjLstCache == null) return false;
  try {
    const arrDDLItemsOptionSel = arrDDLItemsOptionObjLstCache.filter(
      (x) => x.ddlItemsOptionId == strDdlItemsOptionId,
    );
    if (arrDDLItemsOptionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strDdlItemsOptionId,
      dDLItemsOption_ConstructorName,
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
 * @param strDdlItemsOptionId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function DDLItemsOption_IsExistAsync(strDdlItemsOptionId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDdlItemsOptionId,
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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
 * @param objDDLItemsOptionCond:条件对象
 * @returns 对象列表记录数
 */
export async function DDLItemsOption_GetRecCountByCondCache(
  objDDLItemsOptionCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrDDLItemsOptionObjLstCache = await DDLItemsOption_GetObjLstCache();
  if (arrDDLItemsOptionObjLstCache == null) return 0;
  let arrDDLItemsOptionSel = arrDDLItemsOptionObjLstCache;
  if (objDDLItemsOptionCond.GetConditions().length == 0) return arrDDLItemsOptionSel.length;
  try {
    for (const objCondition of objDDLItemsOptionCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDDLItemsOptionSel = arrDDLItemsOptionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDDLItemsOptionSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDDLItemsOptionCond),
      dDLItemsOption_ConstructorName,
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
export async function DDLItemsOption_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(dDLItemsOption_Controller, strAction);

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
        dDLItemsOption_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dDLItemsOption_ConstructorName,
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
export function DDLItemsOption_GetWebApiUrl(strController: string, strAction: string): string {
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
export function DDLItemsOption_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsDDLItemsOptionEN._CurrTabName;
  switch (clsDDLItemsOptionEN.CacheModeId) {
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
  clsDDLItemsOptionEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function DDLItemsOption_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsDDLItemsOptionEN._CurrTabName;
    switch (clsDDLItemsOptionEN.CacheModeId) {
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
    clsDDLItemsOptionEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function DDLItemsOption_GetLastRefreshTime(): string {
  if (clsDDLItemsOptionEN._RefreshTimeLst.length == 0) return '';
  return clsDDLItemsOptionEN._RefreshTimeLst[clsDDLItemsOptionEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function DDLItemsOption_BindDdl_DdlItemsOptionIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_DdlItemsOptionIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DdlItemsOptionIdInDivCache");
  const arrObjLstSel = await DDLItemsOption_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsDDLItemsOptionEN.con_DdlItemsOptionId,
    clsDDLItemsOptionEN.con_DdlItemsOptionName,
    '下拉框列表选项...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function DDLItemsOption_GetArrDDLItemsOption() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DdlItemsOptionIdInDivCache");
  const arrDDLItemsOption = new Array<clsDDLItemsOptionEN>();
  const arrObjLstSel = await DDLItemsOption_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsDDLItemsOptionEN();
  obj0.ddlItemsOptionId = '0';
  obj0.ddlItemsOptionName = '选下拉框列表选项...';
  arrDDLItemsOption.push(obj0);
  arrObjLstSel.forEach((x) => arrDDLItemsOption.push(x));
  return arrDDLItemsOption;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DDLItemsOption_CheckPropertyNew(pobjDDLItemsOptionEN: clsDDLItemsOptionEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjDDLItemsOptionEN.ddlItemsOptionName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[下拉选项名]不能为空(In 下拉框列表选项)!(clsDDLItemsOptionBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.ddlItemsOptionId) == false &&
    GetStrLen(pobjDDLItemsOptionEN.ddlItemsOptionId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[下拉框列表选项ID(ddlItemsOptionId)]的长度不能超过2(In 下拉框列表选项(DDLItemsOption))!值:${pobjDDLItemsOptionEN.ddlItemsOptionId}(clsDDLItemsOptionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.ddlItemsOptionName) == false &&
    GetStrLen(pobjDDLItemsOptionEN.ddlItemsOptionName) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[下拉选项名(ddlItemsOptionName)]的长度不能超过20(In 下拉框列表选项(DDLItemsOption))!值:${pobjDDLItemsOptionEN.ddlItemsOptionName}(clsDDLItemsOptionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.ddlItemsOptionENName) == false &&
    GetStrLen(pobjDDLItemsOptionEN.ddlItemsOptionENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[下拉框列表选项英文名(ddlItemsOptionENName)]的长度不能超过50(In 下拉框列表选项(DDLItemsOption))!值:${pobjDDLItemsOptionEN.ddlItemsOptionENName}(clsDDLItemsOptionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.memo) == false &&
    GetStrLen(pobjDDLItemsOptionEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 下拉框列表选项(DDLItemsOption))!值:${pobjDDLItemsOptionEN.memo}(clsDDLItemsOptionBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.ddlItemsOptionId) == false &&
    undefined !== pobjDDLItemsOptionEN.ddlItemsOptionId &&
    tzDataType.isString(pobjDDLItemsOptionEN.ddlItemsOptionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[下拉框列表选项ID(ddlItemsOptionId)]的值:[${pobjDDLItemsOptionEN.ddlItemsOptionId}], 非法,应该为字符型(In 下拉框列表选项(DDLItemsOption))!(clsDDLItemsOptionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.ddlItemsOptionName) == false &&
    undefined !== pobjDDLItemsOptionEN.ddlItemsOptionName &&
    tzDataType.isString(pobjDDLItemsOptionEN.ddlItemsOptionName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[下拉选项名(ddlItemsOptionName)]的值:[${pobjDDLItemsOptionEN.ddlItemsOptionName}], 非法,应该为字符型(In 下拉框列表选项(DDLItemsOption))!(clsDDLItemsOptionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.ddlItemsOptionENName) == false &&
    undefined !== pobjDDLItemsOptionEN.ddlItemsOptionENName &&
    tzDataType.isString(pobjDDLItemsOptionEN.ddlItemsOptionENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[下拉框列表选项英文名(ddlItemsOptionENName)]的值:[${pobjDDLItemsOptionEN.ddlItemsOptionENName}], 非法,应该为字符型(In 下拉框列表选项(DDLItemsOption))!(clsDDLItemsOptionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.memo) == false &&
    undefined !== pobjDDLItemsOptionEN.memo &&
    tzDataType.isString(pobjDDLItemsOptionEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjDDLItemsOptionEN.memo}], 非法,应该为字符型(In 下拉框列表选项(DDLItemsOption))!(clsDDLItemsOptionBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DDLItemsOption_CheckProperty4Update(pobjDDLItemsOptionEN: clsDDLItemsOptionEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.ddlItemsOptionId) == false &&
    GetStrLen(pobjDDLItemsOptionEN.ddlItemsOptionId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[下拉框列表选项ID(ddlItemsOptionId)]的长度不能超过2(In 下拉框列表选项(DDLItemsOption))!值:${pobjDDLItemsOptionEN.ddlItemsOptionId}(clsDDLItemsOptionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.ddlItemsOptionName) == false &&
    GetStrLen(pobjDDLItemsOptionEN.ddlItemsOptionName) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[下拉选项名(ddlItemsOptionName)]的长度不能超过20(In 下拉框列表选项(DDLItemsOption))!值:${pobjDDLItemsOptionEN.ddlItemsOptionName}(clsDDLItemsOptionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.ddlItemsOptionENName) == false &&
    GetStrLen(pobjDDLItemsOptionEN.ddlItemsOptionENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[下拉框列表选项英文名(ddlItemsOptionENName)]的长度不能超过50(In 下拉框列表选项(DDLItemsOption))!值:${pobjDDLItemsOptionEN.ddlItemsOptionENName}(clsDDLItemsOptionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.memo) == false &&
    GetStrLen(pobjDDLItemsOptionEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 下拉框列表选项(DDLItemsOption))!值:${pobjDDLItemsOptionEN.memo}(clsDDLItemsOptionBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.ddlItemsOptionId) == false &&
    undefined !== pobjDDLItemsOptionEN.ddlItemsOptionId &&
    tzDataType.isString(pobjDDLItemsOptionEN.ddlItemsOptionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[下拉框列表选项ID(ddlItemsOptionId)]的值:[${pobjDDLItemsOptionEN.ddlItemsOptionId}], 非法,应该为字符型(In 下拉框列表选项(DDLItemsOption))!(clsDDLItemsOptionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.ddlItemsOptionName) == false &&
    undefined !== pobjDDLItemsOptionEN.ddlItemsOptionName &&
    tzDataType.isString(pobjDDLItemsOptionEN.ddlItemsOptionName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[下拉选项名(ddlItemsOptionName)]的值:[${pobjDDLItemsOptionEN.ddlItemsOptionName}], 非法,应该为字符型(In 下拉框列表选项(DDLItemsOption))!(clsDDLItemsOptionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.ddlItemsOptionENName) == false &&
    undefined !== pobjDDLItemsOptionEN.ddlItemsOptionENName &&
    tzDataType.isString(pobjDDLItemsOptionEN.ddlItemsOptionENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[下拉框列表选项英文名(ddlItemsOptionENName)]的值:[${pobjDDLItemsOptionEN.ddlItemsOptionENName}], 非法,应该为字符型(In 下拉框列表选项(DDLItemsOption))!(clsDDLItemsOptionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.memo) == false &&
    undefined !== pobjDDLItemsOptionEN.memo &&
    tzDataType.isString(pobjDDLItemsOptionEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjDDLItemsOptionEN.memo}], 非法,应该为字符型(In 下拉框列表选项(DDLItemsOption))!(clsDDLItemsOptionBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjDDLItemsOptionEN.ddlItemsOptionId) === true ||
    pobjDDLItemsOptionEN.ddlItemsOptionId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[下拉框列表选项ID]不能为空(In 下拉框列表选项)!(clsDDLItemsOptionBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DDLItemsOption_GetJSONStrByObj(pobjDDLItemsOptionEN: clsDDLItemsOptionEN): string {
  pobjDDLItemsOptionEN.sfUpdFldSetStr = pobjDDLItemsOptionEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDDLItemsOptionEN);
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
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function DDLItemsOption_GetObjLstByJSONStr(strJSON: string): Array<clsDDLItemsOptionEN> {
  let arrDDLItemsOptionObjLst = new Array<clsDDLItemsOptionEN>();
  if (strJSON === '') {
    return arrDDLItemsOptionObjLst;
  }
  try {
    arrDDLItemsOptionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDDLItemsOptionObjLst;
  }
  return arrDDLItemsOptionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDDLItemsOptionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DDLItemsOption_GetObjLstByJSONObjLst(
  arrDDLItemsOptionObjLstS: Array<clsDDLItemsOptionEN>,
): Array<clsDDLItemsOptionEN> {
  const arrDDLItemsOptionObjLst = new Array<clsDDLItemsOptionEN>();
  for (const objInFor of arrDDLItemsOptionObjLstS) {
    const obj1 = DDLItemsOption_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDDLItemsOptionObjLst.push(obj1);
  }
  return arrDDLItemsOptionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DDLItemsOption_GetObjByJSONStr(strJSON: string): clsDDLItemsOptionEN {
  let pobjDDLItemsOptionEN = new clsDDLItemsOptionEN();
  if (strJSON === '') {
    return pobjDDLItemsOptionEN;
  }
  try {
    pobjDDLItemsOptionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDDLItemsOptionEN;
  }
  return pobjDDLItemsOptionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DDLItemsOption_GetCombineCondition(
  objDDLItemsOptionCond: clsDDLItemsOptionEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDDLItemsOptionCond.dicFldComparisonOp,
      clsDDLItemsOptionEN.con_DdlItemsOptionId,
    ) == true
  ) {
    const strComparisonOpDdlItemsOptionId: string =
      objDDLItemsOptionCond.dicFldComparisonOp[clsDDLItemsOptionEN.con_DdlItemsOptionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDDLItemsOptionEN.con_DdlItemsOptionId,
      objDDLItemsOptionCond.ddlItemsOptionId,
      strComparisonOpDdlItemsOptionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDDLItemsOptionCond.dicFldComparisonOp,
      clsDDLItemsOptionEN.con_DdlItemsOptionName,
    ) == true
  ) {
    const strComparisonOpDdlItemsOptionName: string =
      objDDLItemsOptionCond.dicFldComparisonOp[clsDDLItemsOptionEN.con_DdlItemsOptionName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDDLItemsOptionEN.con_DdlItemsOptionName,
      objDDLItemsOptionCond.ddlItemsOptionName,
      strComparisonOpDdlItemsOptionName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDDLItemsOptionCond.dicFldComparisonOp,
      clsDDLItemsOptionEN.con_DdlItemsOptionENName,
    ) == true
  ) {
    const strComparisonOpDdlItemsOptionENName: string =
      objDDLItemsOptionCond.dicFldComparisonOp[clsDDLItemsOptionEN.con_DdlItemsOptionENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDDLItemsOptionEN.con_DdlItemsOptionENName,
      objDDLItemsOptionCond.ddlItemsOptionENName,
      strComparisonOpDdlItemsOptionENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDDLItemsOptionCond.dicFldComparisonOp,
      clsDDLItemsOptionEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objDDLItemsOptionCond.dicFldComparisonOp[clsDDLItemsOptionEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDDLItemsOptionEN.con_Memo,
      objDDLItemsOptionCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDDLItemsOptionENS:源对象
 * @param objDDLItemsOptionENT:目标对象
 */
export function DDLItemsOption_GetObjFromJsonObj(
  objDDLItemsOptionENS: clsDDLItemsOptionEN,
): clsDDLItemsOptionEN {
  const objDDLItemsOptionENT: clsDDLItemsOptionEN = new clsDDLItemsOptionEN();
  ObjectAssign(objDDLItemsOptionENT, objDDLItemsOptionENS);
  return objDDLItemsOptionENT;
}
