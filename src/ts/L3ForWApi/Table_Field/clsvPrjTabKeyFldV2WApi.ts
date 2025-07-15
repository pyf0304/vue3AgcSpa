/**
 * 类名:clsvPrjTabKeyFldV2WApi
 * 表名:vPrjTabKeyFldV2(00050612)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:51:07
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vPrjTabKeyFldV2(vPrjTabKeyFldV2)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvPrjTabKeyFldV2EN } from '@/ts/L0Entity/Table_Field/clsvPrjTabKeyFldV2EN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vPrjTabKeyFldV2_Controller = 'vPrjTabKeyFldV2Api';
export const vPrjTabKeyFldV2_ConstructorName = 'vPrjTabKeyFldV2';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTabId:关键字
 * @returns 对象
 **/
export async function vPrjTabKeyFldV2_GetObjByTabIdAsync(
  strTabId: string,
): Promise<clsvPrjTabKeyFldV2EN | null> {
  const strThisFuncName = 'GetObjByTabIdAsync';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空!(In clsvPrjTabKeyFldV2WApi.GetObjByTabIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTabKeyFldV2WApi.GetObjByTabIdAsync)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTabId';
  const strUrl = GetWebApiUrl(vPrjTabKeyFldV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
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
      const objvPrjTabKeyFldV2 = vPrjTabKeyFldV2_GetObjFromJsonObj(returnObj);
      return objvPrjTabKeyFldV2;
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
        vPrjTabKeyFldV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabKeyFldV2_ConstructorName,
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
 * @param strTabId:所给的关键字
 * @returns 对象
 */
export async function vPrjTabKeyFldV2_GetObjByTabIdCache(
  strTabId: string,
  strCmPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTabIdCache';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format('参数:[strTabId]不能为空!(In clsvPrjTabKeyFldV2WApi.GetObjByTabIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTabKeyFldV2WApi.GetObjByTabIdCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2_GetObjLstCache(strCmPrjId);
  try {
    const arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2ObjLstCache.filter((x) => x.tabId == strTabId);
    let objvPrjTabKeyFldV2: clsvPrjTabKeyFldV2EN;
    if (arrvPrjTabKeyFldV2Sel.length > 0) {
      objvPrjTabKeyFldV2 = arrvPrjTabKeyFldV2Sel[0];
      return objvPrjTabKeyFldV2;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvPrjTabKeyFldV2Const = await vPrjTabKeyFldV2_GetObjByTabIdAsync(strTabId);
        if (objvPrjTabKeyFldV2Const != null) {
          vPrjTabKeyFldV2_ReFreshThisCache(strCmPrjId);
          return objvPrjTabKeyFldV2Const;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabId,
      vPrjTabKeyFldV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strTabId:所给的关键字
 * @returns 对象
 */
export async function vPrjTabKeyFldV2_GetObjByTabIdlocalStorage(strTabId: string) {
  const strThisFuncName = 'GetObjByTabIdlocalStorage';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In clsvPrjTabKeyFldV2WApi.GetObjByTabIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTabKeyFldV2WApi.GetObjByTabIdlocalStorage)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvPrjTabKeyFldV2EN._CurrTabName, strTabId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvPrjTabKeyFldV2Cache: clsvPrjTabKeyFldV2EN = JSON.parse(strTempObj);
    return objvPrjTabKeyFldV2Cache;
  }
  try {
    const objvPrjTabKeyFldV2 = await vPrjTabKeyFldV2_GetObjByTabIdAsync(strTabId);
    if (objvPrjTabKeyFldV2 != null) {
      localStorage.setItem(strKey, JSON.stringify(objvPrjTabKeyFldV2));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvPrjTabKeyFldV2;
    }
    return objvPrjTabKeyFldV2;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabId,
      vPrjTabKeyFldV2_ConstructorName,
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
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vPrjTabKeyFldV2_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strCmPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strCmPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strCmPrjIdClassfy]不能为空!(In clsvPrjTabKeyFldV2WApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjIdClassfy.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjIdClassfy]的长度:[{0}]不正确!(clsvPrjTabKeyFldV2WApi.func)',
      strCmPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvPrjTabKeyFldV2EN.con_TabId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvPrjTabKeyFldV2EN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvPrjTabKeyFldV2EN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTabId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvPrjTabKeyFldV2 = await vPrjTabKeyFldV2_GetObjByTabIdCache(strTabId, strCmPrjIdClassfy);
  if (objvPrjTabKeyFldV2 == null) return '';
  if (objvPrjTabKeyFldV2.GetFldValue(strOutFldName) == null) return '';
  return objvPrjTabKeyFldV2.GetFldValue(strOutFldName).toString();
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
export function vPrjTabKeyFldV2_SortFunDefa(
  a: clsvPrjTabKeyFldV2EN,
  b: clsvPrjTabKeyFldV2EN,
): number {
  return a.tabId.localeCompare(b.tabId);
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
export function vPrjTabKeyFldV2_SortFunDefa2Fld(
  a: clsvPrjTabKeyFldV2EN,
  b: clsvPrjTabKeyFldV2EN,
): number {
  if (a.fldId == b.fldId) return a.primaryTypeId.localeCompare(b.primaryTypeId);
  else return a.fldId.localeCompare(b.fldId);
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
export function vPrjTabKeyFldV2_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvPrjTabKeyFldV2EN.con_TabId:
        return (a: clsvPrjTabKeyFldV2EN, b: clsvPrjTabKeyFldV2EN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsvPrjTabKeyFldV2EN.con_FldId:
        return (a: clsvPrjTabKeyFldV2EN, b: clsvPrjTabKeyFldV2EN) => {
          return a.fldId.localeCompare(b.fldId);
        };
      case clsvPrjTabKeyFldV2EN.con_PrimaryTypeId:
        return (a: clsvPrjTabKeyFldV2EN, b: clsvPrjTabKeyFldV2EN) => {
          return a.primaryTypeId.localeCompare(b.primaryTypeId);
        };
      case clsvPrjTabKeyFldV2EN.con_KeyFldName:
        return (a: clsvPrjTabKeyFldV2EN, b: clsvPrjTabKeyFldV2EN) => {
          if (a.keyFldName == null) return -1;
          if (b.keyFldName == null) return 1;
          return a.keyFldName.localeCompare(b.keyFldName);
        };
      case clsvPrjTabKeyFldV2EN.con_PrimaryTypeName:
        return (a: clsvPrjTabKeyFldV2EN, b: clsvPrjTabKeyFldV2EN) => {
          if (a.primaryTypeName == null) return -1;
          if (b.primaryTypeName == null) return 1;
          return a.primaryTypeName.localeCompare(b.primaryTypeName);
        };
      case clsvPrjTabKeyFldV2EN.con_FieldTypeId:
        return (a: clsvPrjTabKeyFldV2EN, b: clsvPrjTabKeyFldV2EN) => {
          if (a.fieldTypeId == null) return -1;
          if (b.fieldTypeId == null) return 1;
          return a.fieldTypeId.localeCompare(b.fieldTypeId);
        };
      case clsvPrjTabKeyFldV2EN.con_CmPrjId:
        return (a: clsvPrjTabKeyFldV2EN, b: clsvPrjTabKeyFldV2EN) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjTabKeyFldV2]中不存在!(in ${vPrjTabKeyFldV2_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvPrjTabKeyFldV2EN.con_TabId:
        return (a: clsvPrjTabKeyFldV2EN, b: clsvPrjTabKeyFldV2EN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsvPrjTabKeyFldV2EN.con_FldId:
        return (a: clsvPrjTabKeyFldV2EN, b: clsvPrjTabKeyFldV2EN) => {
          return b.fldId.localeCompare(a.fldId);
        };
      case clsvPrjTabKeyFldV2EN.con_PrimaryTypeId:
        return (a: clsvPrjTabKeyFldV2EN, b: clsvPrjTabKeyFldV2EN) => {
          return b.primaryTypeId.localeCompare(a.primaryTypeId);
        };
      case clsvPrjTabKeyFldV2EN.con_KeyFldName:
        return (a: clsvPrjTabKeyFldV2EN, b: clsvPrjTabKeyFldV2EN) => {
          if (b.keyFldName == null) return -1;
          if (a.keyFldName == null) return 1;
          return b.keyFldName.localeCompare(a.keyFldName);
        };
      case clsvPrjTabKeyFldV2EN.con_PrimaryTypeName:
        return (a: clsvPrjTabKeyFldV2EN, b: clsvPrjTabKeyFldV2EN) => {
          if (b.primaryTypeName == null) return -1;
          if (a.primaryTypeName == null) return 1;
          return b.primaryTypeName.localeCompare(a.primaryTypeName);
        };
      case clsvPrjTabKeyFldV2EN.con_FieldTypeId:
        return (a: clsvPrjTabKeyFldV2EN, b: clsvPrjTabKeyFldV2EN) => {
          if (b.fieldTypeId == null) return -1;
          if (a.fieldTypeId == null) return 1;
          return b.fieldTypeId.localeCompare(a.fieldTypeId);
        };
      case clsvPrjTabKeyFldV2EN.con_CmPrjId:
        return (a: clsvPrjTabKeyFldV2EN, b: clsvPrjTabKeyFldV2EN) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjTabKeyFldV2]中不存在!(in ${vPrjTabKeyFldV2_ConstructorName}.${strThisFuncName})`;
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
export async function vPrjTabKeyFldV2_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvPrjTabKeyFldV2EN.con_TabId:
      return (obj: clsvPrjTabKeyFldV2EN) => {
        return obj.tabId === value;
      };
    case clsvPrjTabKeyFldV2EN.con_FldId:
      return (obj: clsvPrjTabKeyFldV2EN) => {
        return obj.fldId === value;
      };
    case clsvPrjTabKeyFldV2EN.con_PrimaryTypeId:
      return (obj: clsvPrjTabKeyFldV2EN) => {
        return obj.primaryTypeId === value;
      };
    case clsvPrjTabKeyFldV2EN.con_KeyFldName:
      return (obj: clsvPrjTabKeyFldV2EN) => {
        return obj.keyFldName === value;
      };
    case clsvPrjTabKeyFldV2EN.con_PrimaryTypeName:
      return (obj: clsvPrjTabKeyFldV2EN) => {
        return obj.primaryTypeName === value;
      };
    case clsvPrjTabKeyFldV2EN.con_FieldTypeId:
      return (obj: clsvPrjTabKeyFldV2EN) => {
        return obj.fieldTypeId === value;
      };
    case clsvPrjTabKeyFldV2EN.con_CmPrjId:
      return (obj: clsvPrjTabKeyFldV2EN) => {
        return obj.cmPrjId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vPrjTabKeyFldV2]中不存在!(in ${vPrjTabKeyFldV2_ConstructorName}.${strThisFuncName})`;
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
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vPrjTabKeyFldV2_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCmPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCmPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strCmPrjIdClassfy]不能为空!(In clsvPrjTabKeyFldV2WApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjIdClassfy.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjIdClassfy]的长度:[{0}]不正确!(clsvPrjTabKeyFldV2WApi.funcKey)',
      strCmPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvPrjTabKeyFldV2EN.con_TabId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvPrjTabKeyFldV2 = await vPrjTabKeyFldV2_GetObjLstCache(strCmPrjIdClassfy);
  if (arrvPrjTabKeyFldV2 == null) return [];
  let arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvPrjTabKeyFldV2Sel.length == 0) return [];
  return arrvPrjTabKeyFldV2Sel.map((x) => x.tabId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vPrjTabKeyFldV2_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjTabKeyFldV2_Controller, strAction);

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
        vPrjTabKeyFldV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabKeyFldV2_ConstructorName,
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
export async function vPrjTabKeyFldV2_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjTabKeyFldV2_Controller, strAction);

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
        vPrjTabKeyFldV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabKeyFldV2_ConstructorName,
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
export async function vPrjTabKeyFldV2_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvPrjTabKeyFldV2EN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vPrjTabKeyFldV2_Controller, strAction);

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
      const objvPrjTabKeyFldV2 = vPrjTabKeyFldV2_GetObjFromJsonObj(returnObj);
      return objvPrjTabKeyFldV2;
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
        vPrjTabKeyFldV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabKeyFldV2_ConstructorName,
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
export async function vPrjTabKeyFldV2_GetObjLstClientCache(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjTabKeyFldV2EN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjTabKeyFldV2EN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("CmPrjId='{0}'", strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjTabKeyFldV2EN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsvPrjTabKeyFldV2EN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTabKeyFldV2EN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvPrjTabKeyFldV2ExObjLstCache: Array<clsvPrjTabKeyFldV2EN> = CacheHelper.Get(strKey);
    const arrvPrjTabKeyFldV2ObjLstT = vPrjTabKeyFldV2_GetObjLstByJSONObjLst(
      arrvPrjTabKeyFldV2ExObjLstCache,
    );
    return arrvPrjTabKeyFldV2ObjLstT;
  }
  try {
    const arrvPrjTabKeyFldV2ExObjLst = await vPrjTabKeyFldV2_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvPrjTabKeyFldV2ExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjTabKeyFldV2ExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTabKeyFldV2ExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTabKeyFldV2_ConstructorName,
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
export async function vPrjTabKeyFldV2_GetObjLstlocalStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjTabKeyFldV2EN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjTabKeyFldV2EN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvPrjTabKeyFldV2EN.con_CmPrjId, strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjTabKeyFldV2EN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsvPrjTabKeyFldV2EN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTabKeyFldV2EN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjTabKeyFldV2ExObjLstCache: Array<clsvPrjTabKeyFldV2EN> = JSON.parse(strTempObjLst);
    const arrvPrjTabKeyFldV2ObjLstT = vPrjTabKeyFldV2_GetObjLstByJSONObjLst(
      arrvPrjTabKeyFldV2ExObjLstCache,
    );
    return arrvPrjTabKeyFldV2ObjLstT;
  }
  try {
    const arrvPrjTabKeyFldV2ExObjLst = await vPrjTabKeyFldV2_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvPrjTabKeyFldV2EN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvPrjTabKeyFldV2ExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjTabKeyFldV2ExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTabKeyFldV2ExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTabKeyFldV2_ConstructorName,
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
export async function vPrjTabKeyFldV2_GetObjLstlocalStoragePureCache(strCmPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvPrjTabKeyFldV2EN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjTabKeyFldV2ObjLstCache: Array<clsvPrjTabKeyFldV2EN> = JSON.parse(strTempObjLst);
    return arrvPrjTabKeyFldV2ObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vPrjTabKeyFldV2_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvPrjTabKeyFldV2EN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vPrjTabKeyFldV2_Controller, strAction);

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
          vPrjTabKeyFldV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTabKeyFldV2_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTabKeyFldV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabKeyFldV2_ConstructorName,
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
export async function vPrjTabKeyFldV2_GetObjLstsessionStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjTabKeyFldV2EN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjTabKeyFldV2EN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvPrjTabKeyFldV2EN.con_CmPrjId, strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjTabKeyFldV2EN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsvPrjTabKeyFldV2EN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTabKeyFldV2EN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjTabKeyFldV2ExObjLstCache: Array<clsvPrjTabKeyFldV2EN> = JSON.parse(strTempObjLst);
    const arrvPrjTabKeyFldV2ObjLstT = vPrjTabKeyFldV2_GetObjLstByJSONObjLst(
      arrvPrjTabKeyFldV2ExObjLstCache,
    );
    return arrvPrjTabKeyFldV2ObjLstT;
  }
  try {
    const arrvPrjTabKeyFldV2ExObjLst = await vPrjTabKeyFldV2_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvPrjTabKeyFldV2EN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvPrjTabKeyFldV2ExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjTabKeyFldV2ExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTabKeyFldV2ExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTabKeyFldV2_ConstructorName,
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
export async function vPrjTabKeyFldV2_GetObjLstsessionStoragePureCache(strCmPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvPrjTabKeyFldV2EN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjTabKeyFldV2ObjLstCache: Array<clsvPrjTabKeyFldV2EN> = JSON.parse(strTempObjLst);
    return arrvPrjTabKeyFldV2ObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTabKeyFldV2_GetObjLstCache(
  strCmPrjId: string,
): Promise<Array<clsvPrjTabKeyFldV2EN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空！(In clsvPrjTabKeyFldV2WApi.vPrjTabKeyFldV2_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！(clsvPrjTabKeyFldV2WApi.vPrjTabKeyFldV2_GetObjLstCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvPrjTabKeyFldV2ObjLstCache;
  switch (clsvPrjTabKeyFldV2EN.CacheModeId) {
    case '04': //sessionStorage
      arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2_GetObjLstsessionStorage(strCmPrjId);
      break;
    case '03': //localStorage
      arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2_GetObjLstlocalStorage(strCmPrjId);
      break;
    case '02': //ClientCache
      arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2_GetObjLstClientCache(strCmPrjId);
      break;
    default:
      arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2_GetObjLstClientCache(strCmPrjId);
      break;
  }
  return arrvPrjTabKeyFldV2ObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTabKeyFldV2_GetObjLstPureCache(strCmPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvPrjTabKeyFldV2ObjLstCache;
  switch (clsvPrjTabKeyFldV2EN.CacheModeId) {
    case '04': //sessionStorage
      arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2_GetObjLstsessionStoragePureCache(
        strCmPrjId,
      );
      break;
    case '03': //localStorage
      arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2_GetObjLstlocalStoragePureCache(
        strCmPrjId,
      );
      break;
    case '02': //ClientCache
      arrvPrjTabKeyFldV2ObjLstCache = null;
      break;
    default:
      arrvPrjTabKeyFldV2ObjLstCache = null;
      break;
  }
  return arrvPrjTabKeyFldV2ObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTabIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vPrjTabKeyFldV2_GetSubObjLstCache(
  objvPrjTabKeyFldV2Cond: clsvPrjTabKeyFldV2EN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2_GetObjLstCache(strCmPrjId);
  let arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2ObjLstCache;
  if (
    objvPrjTabKeyFldV2Cond.sfFldComparisonOp == null ||
    objvPrjTabKeyFldV2Cond.sfFldComparisonOp == ''
  )
    return arrvPrjTabKeyFldV2Sel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPrjTabKeyFldV2Cond.sfFldComparisonOp,
  );
  //console.log("clsvPrjTabKeyFldV2WApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPrjTabKeyFldV2Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTabKeyFldV2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvPrjTabKeyFldV2Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPrjTabKeyFldV2Cond),
      vPrjTabKeyFldV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjTabKeyFldV2EN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTabId:关键字列表
 * @returns 对象列表
 **/
export async function vPrjTabKeyFldV2_GetObjLstByTabIdLstAsync(
  arrTabId: Array<string>,
): Promise<Array<clsvPrjTabKeyFldV2EN>> {
  const strThisFuncName = 'GetObjLstByTabIdLstAsync';
  const strAction = 'GetObjLstByTabIdLst';
  const strUrl = GetWebApiUrl(vPrjTabKeyFldV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTabId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vPrjTabKeyFldV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTabKeyFldV2_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTabKeyFldV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabKeyFldV2_ConstructorName,
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
 * @param arrstrTabIdLst:关键字列表
 * @returns 对象列表
 */
export async function vPrjTabKeyFldV2_GetObjLstByTabIdLstCache(
  arrTabIdLst: Array<string>,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByTabIdLstCache';
  try {
    const arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2_GetObjLstCache(strCmPrjId);
    const arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2ObjLstCache.filter(
      (x) => arrTabIdLst.indexOf(x.tabId) > -1,
    );
    return arrvPrjTabKeyFldV2Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTabIdLst.join(','),
      vPrjTabKeyFldV2_ConstructorName,
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
export async function vPrjTabKeyFldV2_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvPrjTabKeyFldV2EN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vPrjTabKeyFldV2_Controller, strAction);

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
          vPrjTabKeyFldV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTabKeyFldV2_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTabKeyFldV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabKeyFldV2_ConstructorName,
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
export async function vPrjTabKeyFldV2_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvPrjTabKeyFldV2EN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vPrjTabKeyFldV2_Controller, strAction);

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
          vPrjTabKeyFldV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTabKeyFldV2_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTabKeyFldV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabKeyFldV2_ConstructorName,
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
export async function vPrjTabKeyFldV2_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvPrjTabKeyFldV2EN>();
  const arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2_GetObjLstCache(strCmPrjId);
  if (arrvPrjTabKeyFldV2ObjLstCache.length == 0) return arrvPrjTabKeyFldV2ObjLstCache;
  let arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2ObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvPrjTabKeyFldV2Cond = new clsvPrjTabKeyFldV2EN();
  ObjectAssign(objvPrjTabKeyFldV2Cond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvPrjTabKeyFldV2WApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTabKeyFldV2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPrjTabKeyFldV2Sel.length == 0) return arrvPrjTabKeyFldV2Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.sort(
        vPrjTabKeyFldV2_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.sort(objPagerPara.sortFun);
    }
    arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.slice(intStart, intEnd);
    return arrvPrjTabKeyFldV2Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPrjTabKeyFldV2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjTabKeyFldV2EN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vPrjTabKeyFldV2_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPrjTabKeyFldV2EN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvPrjTabKeyFldV2EN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vPrjTabKeyFldV2_Controller, strAction);

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
          vPrjTabKeyFldV2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTabKeyFldV2_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTabKeyFldV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabKeyFldV2_ConstructorName,
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
 * @param objstrTabIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vPrjTabKeyFldV2_IsExistRecordCache(
  objvPrjTabKeyFldV2Cond: clsvPrjTabKeyFldV2EN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2_GetObjLstCache(strCmPrjId);
  if (arrvPrjTabKeyFldV2ObjLstCache == null) return false;
  let arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2ObjLstCache;
  if (
    objvPrjTabKeyFldV2Cond.sfFldComparisonOp == null ||
    objvPrjTabKeyFldV2Cond.sfFldComparisonOp == ''
  )
    return arrvPrjTabKeyFldV2Sel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPrjTabKeyFldV2Cond.sfFldComparisonOp,
  );
  //console.log("clsvPrjTabKeyFldV2WApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPrjTabKeyFldV2Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTabKeyFldV2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPrjTabKeyFldV2Sel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvPrjTabKeyFldV2Cond),
      vPrjTabKeyFldV2_ConstructorName,
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
export async function vPrjTabKeyFldV2_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vPrjTabKeyFldV2_Controller, strAction);

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
        vPrjTabKeyFldV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabKeyFldV2_ConstructorName,
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
 * @param strTabId:所给的关键字
 * @returns 对象
 */
export async function vPrjTabKeyFldV2_IsExistCache(strTabId: string, strCmPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2_GetObjLstCache(strCmPrjId);
  if (arrvPrjTabKeyFldV2ObjLstCache == null) return false;
  try {
    const arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2ObjLstCache.filter((x) => x.tabId == strTabId);
    if (arrvPrjTabKeyFldV2Sel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTabId,
      vPrjTabKeyFldV2_ConstructorName,
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
 * @param strTabId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vPrjTabKeyFldV2_IsExistAsync(strTabId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vPrjTabKeyFldV2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
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
        vPrjTabKeyFldV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabKeyFldV2_ConstructorName,
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
export async function vPrjTabKeyFldV2_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vPrjTabKeyFldV2_Controller, strAction);

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
        vPrjTabKeyFldV2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabKeyFldV2_ConstructorName,
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
 * @param objvPrjTabKeyFldV2Cond:条件对象
 * @returns 对象列表记录数
 */
export async function vPrjTabKeyFldV2_GetRecCountByCondCache(
  objvPrjTabKeyFldV2Cond: clsvPrjTabKeyFldV2EN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvPrjTabKeyFldV2ObjLstCache = await vPrjTabKeyFldV2_GetObjLstCache(strCmPrjId);
  if (arrvPrjTabKeyFldV2ObjLstCache == null) return 0;
  let arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2ObjLstCache;
  if (
    objvPrjTabKeyFldV2Cond.sfFldComparisonOp == null ||
    objvPrjTabKeyFldV2Cond.sfFldComparisonOp == ''
  )
    return arrvPrjTabKeyFldV2Sel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPrjTabKeyFldV2Cond.sfFldComparisonOp,
  );
  //console.log("clsvPrjTabKeyFldV2WApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPrjTabKeyFldV2Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTabKeyFldV2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTabKeyFldV2Sel = arrvPrjTabKeyFldV2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvPrjTabKeyFldV2Sel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPrjTabKeyFldV2Cond),
      vPrjTabKeyFldV2_ConstructorName,
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
export function vPrjTabKeyFldV2_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vPrjTabKeyFldV2_ReFreshThisCache(strCmPrjId: string): void {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsvPrjTabKeyFldV2WApi.vPrjTabKeyFldV2_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsvPrjTabKeyFldV2WApi.vPrjTabKeyFldV2_ReFreshThisCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvPrjTabKeyFldV2EN._CurrTabName, strCmPrjId);
    switch (clsvPrjTabKeyFldV2EN.CacheModeId) {
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
export function vPrjTabKeyFldV2_GetJSONStrByObj(
  pobjvPrjTabKeyFldV2EN: clsvPrjTabKeyFldV2EN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvPrjTabKeyFldV2EN);
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
export function vPrjTabKeyFldV2_GetObjLstByJSONStr(strJSON: string): Array<clsvPrjTabKeyFldV2EN> {
  let arrvPrjTabKeyFldV2ObjLst = new Array<clsvPrjTabKeyFldV2EN>();
  if (strJSON === '') {
    return arrvPrjTabKeyFldV2ObjLst;
  }
  try {
    arrvPrjTabKeyFldV2ObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvPrjTabKeyFldV2ObjLst;
  }
  return arrvPrjTabKeyFldV2ObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvPrjTabKeyFldV2ObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vPrjTabKeyFldV2_GetObjLstByJSONObjLst(
  arrvPrjTabKeyFldV2ObjLstS: Array<clsvPrjTabKeyFldV2EN>,
): Array<clsvPrjTabKeyFldV2EN> {
  const arrvPrjTabKeyFldV2ObjLst = new Array<clsvPrjTabKeyFldV2EN>();
  for (const objInFor of arrvPrjTabKeyFldV2ObjLstS) {
    const obj1 = vPrjTabKeyFldV2_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvPrjTabKeyFldV2ObjLst.push(obj1);
  }
  return arrvPrjTabKeyFldV2ObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPrjTabKeyFldV2_GetObjByJSONStr(strJSON: string): clsvPrjTabKeyFldV2EN {
  let pobjvPrjTabKeyFldV2EN = new clsvPrjTabKeyFldV2EN();
  if (strJSON === '') {
    return pobjvPrjTabKeyFldV2EN;
  }
  try {
    pobjvPrjTabKeyFldV2EN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvPrjTabKeyFldV2EN;
  }
  return pobjvPrjTabKeyFldV2EN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vPrjTabKeyFldV2_GetCombineCondition(
  objvPrjTabKeyFldV2Cond: clsvPrjTabKeyFldV2EN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTabKeyFldV2Cond.dicFldComparisonOp,
      clsvPrjTabKeyFldV2EN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objvPrjTabKeyFldV2Cond.dicFldComparisonOp[clsvPrjTabKeyFldV2EN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTabKeyFldV2EN.con_TabId,
      objvPrjTabKeyFldV2Cond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTabKeyFldV2Cond.dicFldComparisonOp,
      clsvPrjTabKeyFldV2EN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objvPrjTabKeyFldV2Cond.dicFldComparisonOp[clsvPrjTabKeyFldV2EN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTabKeyFldV2EN.con_FldId,
      objvPrjTabKeyFldV2Cond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTabKeyFldV2Cond.dicFldComparisonOp,
      clsvPrjTabKeyFldV2EN.con_PrimaryTypeId,
    ) == true
  ) {
    const strComparisonOpPrimaryTypeId: string =
      objvPrjTabKeyFldV2Cond.dicFldComparisonOp[clsvPrjTabKeyFldV2EN.con_PrimaryTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTabKeyFldV2EN.con_PrimaryTypeId,
      objvPrjTabKeyFldV2Cond.primaryTypeId,
      strComparisonOpPrimaryTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTabKeyFldV2Cond.dicFldComparisonOp,
      clsvPrjTabKeyFldV2EN.con_KeyFldName,
    ) == true
  ) {
    const strComparisonOpKeyFldName: string =
      objvPrjTabKeyFldV2Cond.dicFldComparisonOp[clsvPrjTabKeyFldV2EN.con_KeyFldName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTabKeyFldV2EN.con_KeyFldName,
      objvPrjTabKeyFldV2Cond.keyFldName,
      strComparisonOpKeyFldName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTabKeyFldV2Cond.dicFldComparisonOp,
      clsvPrjTabKeyFldV2EN.con_PrimaryTypeName,
    ) == true
  ) {
    const strComparisonOpPrimaryTypeName: string =
      objvPrjTabKeyFldV2Cond.dicFldComparisonOp[clsvPrjTabKeyFldV2EN.con_PrimaryTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTabKeyFldV2EN.con_PrimaryTypeName,
      objvPrjTabKeyFldV2Cond.primaryTypeName,
      strComparisonOpPrimaryTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTabKeyFldV2Cond.dicFldComparisonOp,
      clsvPrjTabKeyFldV2EN.con_FieldTypeId,
    ) == true
  ) {
    const strComparisonOpFieldTypeId: string =
      objvPrjTabKeyFldV2Cond.dicFldComparisonOp[clsvPrjTabKeyFldV2EN.con_FieldTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTabKeyFldV2EN.con_FieldTypeId,
      objvPrjTabKeyFldV2Cond.fieldTypeId,
      strComparisonOpFieldTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTabKeyFldV2Cond.dicFldComparisonOp,
      clsvPrjTabKeyFldV2EN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objvPrjTabKeyFldV2Cond.dicFldComparisonOp[clsvPrjTabKeyFldV2EN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTabKeyFldV2EN.con_CmPrjId,
      objvPrjTabKeyFldV2Cond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvPrjTabKeyFldV2ENS:源对象
 * @param objvPrjTabKeyFldV2ENT:目标对象
 */
export function vPrjTabKeyFldV2_GetObjFromJsonObj(
  objvPrjTabKeyFldV2ENS: clsvPrjTabKeyFldV2EN,
): clsvPrjTabKeyFldV2EN {
  const objvPrjTabKeyFldV2ENT: clsvPrjTabKeyFldV2EN = new clsvPrjTabKeyFldV2EN();
  ObjectAssign(objvPrjTabKeyFldV2ENT, objvPrjTabKeyFldV2ENS);
  return objvPrjTabKeyFldV2ENT;
}
