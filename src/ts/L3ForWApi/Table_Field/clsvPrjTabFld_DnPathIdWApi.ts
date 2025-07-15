/**
 * 类名:clsvPrjTabFld_DnPathIdWApi
 * 表名:vPrjTabFld_DnPathId(00050616)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:05
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
 * v表字段_DnPathId(vPrjTabFld_DnPathId)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
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
import { clsvPrjTabFld_DnPathIdEN } from '@/ts/L0Entity/Table_Field/clsvPrjTabFld_DnPathIdEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vPrjTabFld_DnPathId_Controller = 'vPrjTabFld_DnPathIdApi';
export const vPrjTabFld_DnPathId_ConstructorName = 'vPrjTabFld_DnPathId';

/**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export function vPrjTabFld_DnPathId_SplitKeyLst(strKeyLst: string) {
  const arrKey = strKeyLst.split('|');
  if (arrKey.length != 2) {
    const strMsg = '请选择需要修改的记录!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  const objKeyLst = {
    tabId: arrKey[0],
    fldId: arrKey[1],
  };
  if (IsNullOrEmpty(objKeyLst.tabId) == true) {
    const strMsg = '关键字段(tabId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(objKeyLst.fldId) == true) {
    const strMsg = '关键字段(fldId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  return objKeyLst;
}
/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTabId:关键字
 * @returns 对象
 **/
export async function vPrjTabFld_DnPathId_GetObjByKeyLstAsync(
  strTabId: string,
  strFldId: string,
): Promise<clsvPrjTabFld_DnPathIdEN | null> {
  const strThisFuncName = 'GetObjByKeyLstAsync';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In clsvPrjTabFld_DnPathIdWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTabFld_DnPathIdWApi.GetObjByKeyLstAsync)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format(
      '参数:[strFldId]不能为空!(In clsvPrjTabFld_DnPathIdWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsvPrjTabFld_DnPathIdWApi.GetObjByKeyLstAsync)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyLst';
  const strUrl = GetWebApiUrl(vPrjTabFld_DnPathId_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabId,
      strFldId,
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
      const objvPrjTabFld_DnPathId = vPrjTabFld_DnPathId_GetObjFromJsonObj(returnObj);
      return objvPrjTabFld_DnPathId;
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
        vPrjTabFld_DnPathId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_GetObjByKeyLstCache(
  strTabId: string,
  strFldId: string,
  strCmPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByKeyLstCache';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In clsvPrjTabFld_DnPathIdWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTabFld_DnPathIdWApi.GetObjByKeyLstCache)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format(
      '参数:[strFldId]不能为空!(In clsvPrjTabFld_DnPathIdWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsvPrjTabFld_DnPathIdWApi.GetObjByKeyLstCache)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPrjTabFld_DnPathIdObjLstCache = await vPrjTabFld_DnPathId_GetObjLstCache(strCmPrjId);
  try {
    const arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdObjLstCache.filter(
      (x) => x.tabId == strTabId && x.fldId == strFldId,
    );
    let objvPrjTabFld_DnPathId: clsvPrjTabFld_DnPathIdEN;
    if (arrvPrjTabFld_DnPathIdSel.length > 0) {
      objvPrjTabFld_DnPathId = arrvPrjTabFld_DnPathIdSel[0];
      return objvPrjTabFld_DnPathId;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvPrjTabFld_DnPathIdConst = await vPrjTabFld_DnPathId_GetObjByKeyLstAsync(
          strTabId,
          strFldId,
        );
        if (objvPrjTabFld_DnPathIdConst != null) {
          vPrjTabFld_DnPathId_ReFreshThisCache(strCmPrjId);
          return objvPrjTabFld_DnPathIdConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabId,
      vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_GetObjByKeyLstlocalStorage(
  strTabId: string,
  strFldId: string,
) {
  const strThisFuncName = 'GetObjByKeyLstlocalStorage';

  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空!(In clsvPrjTabFld_DnPathIdWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确!(clsvPrjTabFld_DnPathIdWApi.GetObjByKeyLstlocalStorage)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format(
      '参数:[strFldId]不能为空!(In clsvPrjTabFld_DnPathIdWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsvPrjTabFld_DnPathIdWApi.GetObjByKeyLstlocalStorage)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvPrjTabFld_DnPathIdEN._CurrTabName, strTabId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvPrjTabFld_DnPathIdCache: clsvPrjTabFld_DnPathIdEN = JSON.parse(strTempObj);
    return objvPrjTabFld_DnPathIdCache;
  }
  try {
    const objvPrjTabFld_DnPathId = await vPrjTabFld_DnPathId_GetObjByKeyLstAsync(
      strTabId,
      strFldId,
    );
    if (objvPrjTabFld_DnPathId != null) {
      localStorage.setItem(strKey, JSON.stringify(objvPrjTabFld_DnPathId));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvPrjTabFld_DnPathId;
    }
    return objvPrjTabFld_DnPathId;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabId,
      vPrjTabFld_DnPathId_ConstructorName,
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
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vPrjTabFld_DnPathId_func(
  strInFldName1: string,
  strInFldName2: string,
  strOutFldName: string,
  strInValue1: string,
  strInValue2: string,
  strCmPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strCmPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strCmPrjIdClassfy]不能为空!(In clsvPrjTabFld_DnPathIdWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName1 != clsvPrjTabFld_DnPathIdEN.con_TabId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName1);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName2 != clsvPrjTabFld_DnPathIdEN.con_FldId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName2);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvPrjTabFld_DnPathIdEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvPrjTabFld_DnPathIdEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTabId = strInValue1;
  if (IsNullOrEmpty(strInValue1) == true) {
    return '';
  }
  const strFldId = strInValue2;
  if (IsNullOrEmpty(strInValue2) == true) {
    return '';
  }
  const objvPrjTabFld_DnPathId = await vPrjTabFld_DnPathId_GetObjByKeyLstCache(
    strTabId,
    strFldId,
    strCmPrjIdClassfy,
  );
  if (objvPrjTabFld_DnPathId == null) return '';
  if (objvPrjTabFld_DnPathId.GetFldValue(strOutFldName) == null) return '';
  return objvPrjTabFld_DnPathId.GetFldValue(strOutFldName).toString();
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
export function vPrjTabFld_DnPathId_SortFunDefa(
  a: clsvPrjTabFld_DnPathIdEN,
  b: clsvPrjTabFld_DnPathIdEN,
): number {
  return a.tabId.localeCompare(b.tabId);
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
export function vPrjTabFld_DnPathId_SortFunDefa2Fld(
  a: clsvPrjTabFld_DnPathIdEN,
  b: clsvPrjTabFld_DnPathIdEN,
): number {
  if (a.dnPathId == b.dnPathId) return a.cmPrjId.localeCompare(b.cmPrjId);
  else return a.dnPathId.localeCompare(b.dnPathId);
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
export function vPrjTabFld_DnPathId_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvPrjTabFld_DnPathIdEN.con_TabId:
        return (a: clsvPrjTabFld_DnPathIdEN, b: clsvPrjTabFld_DnPathIdEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsvPrjTabFld_DnPathIdEN.con_FldId:
        return (a: clsvPrjTabFld_DnPathIdEN, b: clsvPrjTabFld_DnPathIdEN) => {
          return a.fldId.localeCompare(b.fldId);
        };
      case clsvPrjTabFld_DnPathIdEN.con_DnPathId:
        return (a: clsvPrjTabFld_DnPathIdEN, b: clsvPrjTabFld_DnPathIdEN) => {
          if (a.dnPathId == null) return -1;
          if (b.dnPathId == null) return 1;
          return a.dnPathId.localeCompare(b.dnPathId);
        };
      case clsvPrjTabFld_DnPathIdEN.con_CmPrjId:
        return (a: clsvPrjTabFld_DnPathIdEN, b: clsvPrjTabFld_DnPathIdEN) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjTabFld_DnPathId]中不存在!(in ${vPrjTabFld_DnPathId_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvPrjTabFld_DnPathIdEN.con_TabId:
        return (a: clsvPrjTabFld_DnPathIdEN, b: clsvPrjTabFld_DnPathIdEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsvPrjTabFld_DnPathIdEN.con_FldId:
        return (a: clsvPrjTabFld_DnPathIdEN, b: clsvPrjTabFld_DnPathIdEN) => {
          return b.fldId.localeCompare(a.fldId);
        };
      case clsvPrjTabFld_DnPathIdEN.con_DnPathId:
        return (a: clsvPrjTabFld_DnPathIdEN, b: clsvPrjTabFld_DnPathIdEN) => {
          if (b.dnPathId == null) return -1;
          if (a.dnPathId == null) return 1;
          return b.dnPathId.localeCompare(a.dnPathId);
        };
      case clsvPrjTabFld_DnPathIdEN.con_CmPrjId:
        return (a: clsvPrjTabFld_DnPathIdEN, b: clsvPrjTabFld_DnPathIdEN) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjTabFld_DnPathId]中不存在!(in ${vPrjTabFld_DnPathId_ConstructorName}.${strThisFuncName})`;
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
export async function vPrjTabFld_DnPathId_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvPrjTabFld_DnPathIdEN.con_TabId:
      return (obj: clsvPrjTabFld_DnPathIdEN) => {
        return obj.tabId === value;
      };
    case clsvPrjTabFld_DnPathIdEN.con_FldId:
      return (obj: clsvPrjTabFld_DnPathIdEN) => {
        return obj.fldId === value;
      };
    case clsvPrjTabFld_DnPathIdEN.con_DnPathId:
      return (obj: clsvPrjTabFld_DnPathIdEN) => {
        return obj.dnPathId === value;
      };
    case clsvPrjTabFld_DnPathIdEN.con_CmPrjId:
      return (obj: clsvPrjTabFld_DnPathIdEN) => {
        return obj.cmPrjId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vPrjTabFld_DnPathId]中不存在!(in ${vPrjTabFld_DnPathId_ConstructorName}.${strThisFuncName})`;
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
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vPrjTabFld_DnPathId_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCmPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCmPrjIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strCmPrjIdClassfy]不能为空!(In clsvPrjTabFld_DnPathIdWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvPrjTabFld_DnPathIdEN.con_TabId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName == clsvPrjTabFld_DnPathIdEN.con_FldId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvPrjTabFld_DnPathId = await vPrjTabFld_DnPathId_GetObjLstCache(strCmPrjIdClassfy);
  if (arrvPrjTabFld_DnPathId == null) return [];
  let arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathId;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvPrjTabFld_DnPathIdSel.length == 0) return [];
  return arrvPrjTabFld_DnPathId.map((x) => `${x.tabId}|${x.fldId}`);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vPrjTabFld_DnPathId_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjTabFld_DnPathId_Controller, strAction);

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
        vPrjTabFld_DnPathId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjTabFld_DnPathId_Controller, strAction);

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
        vPrjTabFld_DnPathId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvPrjTabFld_DnPathIdEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vPrjTabFld_DnPathId_Controller, strAction);

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
      const objvPrjTabFld_DnPathId = vPrjTabFld_DnPathId_GetObjFromJsonObj(returnObj);
      return objvPrjTabFld_DnPathId;
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
        vPrjTabFld_DnPathId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_GetObjLstClientCache(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjTabFld_DnPathIdEN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjTabFld_DnPathIdEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("CmPrjId='{0}'", strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjTabFld_DnPathIdEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsvPrjTabFld_DnPathIdEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTabFld_DnPathIdEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvPrjTabFld_DnPathIdExObjLstCache: Array<clsvPrjTabFld_DnPathIdEN> =
      CacheHelper.Get(strKey);
    const arrvPrjTabFld_DnPathIdObjLstT = vPrjTabFld_DnPathId_GetObjLstByJSONObjLst(
      arrvPrjTabFld_DnPathIdExObjLstCache,
    );
    return arrvPrjTabFld_DnPathIdObjLstT;
  }
  try {
    const arrvPrjTabFld_DnPathIdExObjLst = await vPrjTabFld_DnPathId_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvPrjTabFld_DnPathIdExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjTabFld_DnPathIdExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTabFld_DnPathIdExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_GetObjLstlocalStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjTabFld_DnPathIdEN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjTabFld_DnPathIdEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvPrjTabFld_DnPathIdEN.con_CmPrjId, strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjTabFld_DnPathIdEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsvPrjTabFld_DnPathIdEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTabFld_DnPathIdEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjTabFld_DnPathIdExObjLstCache: Array<clsvPrjTabFld_DnPathIdEN> =
      JSON.parse(strTempObjLst);
    const arrvPrjTabFld_DnPathIdObjLstT = vPrjTabFld_DnPathId_GetObjLstByJSONObjLst(
      arrvPrjTabFld_DnPathIdExObjLstCache,
    );
    return arrvPrjTabFld_DnPathIdObjLstT;
  }
  try {
    const arrvPrjTabFld_DnPathIdExObjLst = await vPrjTabFld_DnPathId_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvPrjTabFld_DnPathIdEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvPrjTabFld_DnPathIdExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjTabFld_DnPathIdExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTabFld_DnPathIdExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_GetObjLstlocalStoragePureCache(strCmPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvPrjTabFld_DnPathIdEN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjTabFld_DnPathIdObjLstCache: Array<clsvPrjTabFld_DnPathIdEN> =
      JSON.parse(strTempObjLst);
    return arrvPrjTabFld_DnPathIdObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vPrjTabFld_DnPathId_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvPrjTabFld_DnPathIdEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vPrjTabFld_DnPathId_Controller, strAction);

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
          vPrjTabFld_DnPathId_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTabFld_DnPathId_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTabFld_DnPathId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_GetObjLstsessionStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjTabFld_DnPathIdEN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjTabFld_DnPathIdEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvPrjTabFld_DnPathIdEN.con_CmPrjId, strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjTabFld_DnPathIdEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsvPrjTabFld_DnPathIdEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjTabFld_DnPathIdEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjTabFld_DnPathIdExObjLstCache: Array<clsvPrjTabFld_DnPathIdEN> =
      JSON.parse(strTempObjLst);
    const arrvPrjTabFld_DnPathIdObjLstT = vPrjTabFld_DnPathId_GetObjLstByJSONObjLst(
      arrvPrjTabFld_DnPathIdExObjLstCache,
    );
    return arrvPrjTabFld_DnPathIdObjLstT;
  }
  try {
    const arrvPrjTabFld_DnPathIdExObjLst = await vPrjTabFld_DnPathId_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvPrjTabFld_DnPathIdEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvPrjTabFld_DnPathIdExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjTabFld_DnPathIdExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjTabFld_DnPathIdExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_GetObjLstsessionStoragePureCache(strCmPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvPrjTabFld_DnPathIdEN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjTabFld_DnPathIdObjLstCache: Array<clsvPrjTabFld_DnPathIdEN> =
      JSON.parse(strTempObjLst);
    return arrvPrjTabFld_DnPathIdObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTabFld_DnPathId_GetObjLstCache(
  strCmPrjId: string,
): Promise<Array<clsvPrjTabFld_DnPathIdEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空！(In clsvPrjTabFld_DnPathIdWApi.vPrjTabFld_DnPathId_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvPrjTabFld_DnPathIdObjLstCache;
  switch (clsvPrjTabFld_DnPathIdEN.CacheModeId) {
    case '04': //sessionStorage
      arrvPrjTabFld_DnPathIdObjLstCache = await vPrjTabFld_DnPathId_GetObjLstsessionStorage(
        strCmPrjId,
      );
      break;
    case '03': //localStorage
      arrvPrjTabFld_DnPathIdObjLstCache = await vPrjTabFld_DnPathId_GetObjLstlocalStorage(
        strCmPrjId,
      );
      break;
    case '02': //ClientCache
      arrvPrjTabFld_DnPathIdObjLstCache = await vPrjTabFld_DnPathId_GetObjLstClientCache(
        strCmPrjId,
      );
      break;
    default:
      arrvPrjTabFld_DnPathIdObjLstCache = await vPrjTabFld_DnPathId_GetObjLstClientCache(
        strCmPrjId,
      );
      break;
  }
  return arrvPrjTabFld_DnPathIdObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjTabFld_DnPathId_GetObjLstPureCache(strCmPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvPrjTabFld_DnPathIdObjLstCache;
  switch (clsvPrjTabFld_DnPathIdEN.CacheModeId) {
    case '04': //sessionStorage
      arrvPrjTabFld_DnPathIdObjLstCache =
        await vPrjTabFld_DnPathId_GetObjLstsessionStoragePureCache(strCmPrjId);
      break;
    case '03': //localStorage
      arrvPrjTabFld_DnPathIdObjLstCache = await vPrjTabFld_DnPathId_GetObjLstlocalStoragePureCache(
        strCmPrjId,
      );
      break;
    case '02': //ClientCache
      arrvPrjTabFld_DnPathIdObjLstCache = null;
      break;
    default:
      arrvPrjTabFld_DnPathIdObjLstCache = null;
      break;
  }
  return arrvPrjTabFld_DnPathIdObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTabIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vPrjTabFld_DnPathId_GetSubObjLstCache(
  objvPrjTabFld_DnPathIdCond: clsvPrjTabFld_DnPathIdEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvPrjTabFld_DnPathIdObjLstCache = await vPrjTabFld_DnPathId_GetObjLstCache(strCmPrjId);
  let arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdObjLstCache;
  if (
    objvPrjTabFld_DnPathIdCond.sfFldComparisonOp == null ||
    objvPrjTabFld_DnPathIdCond.sfFldComparisonOp == ''
  )
    return arrvPrjTabFld_DnPathIdSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPrjTabFld_DnPathIdCond.sfFldComparisonOp,
  );
  //console.log("clsvPrjTabFld_DnPathIdWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPrjTabFld_DnPathIdCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTabFld_DnPathIdCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvPrjTabFld_DnPathIdSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPrjTabFld_DnPathIdCond),
      vPrjTabFld_DnPathId_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjTabFld_DnPathIdEN>();
}

/// <summary>
/// 把多个关键字段的值连接起来,用|连接(Join)--vPrjTabFld_DnPathId(v表字段_DnPathId)
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_JoinByKeyLst)
/// </summary>
/// <param name = "objvPrjTabFld_DnPathIdEN">需要连接的对象</param>
/// <returns></returns>
export function vPrjTabFld_DnPathId_JoinByKeyLst(
  objvPrjTabFld_DnPathIdEN: clsvPrjTabFld_DnPathIdEN,
): string {
  //检测记录是否存在
  const strResult = `${objvPrjTabFld_DnPathIdEN.tabId};
|${objvPrjTabFld_DnPathIdEN.fldId}`;
  return strResult;
}
/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrTabIdLst:关键字列表
 * @returns 对象列表
 */
export async function vPrjTabFld_DnPathId_GetObjLstByKeyLstsCache(
  arrTabIdLst: Array<string>,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByKeyLstsCache';
  try {
    const arrvPrjTabFld_DnPathIdObjLstCache = await vPrjTabFld_DnPathId_GetObjLstCache(strCmPrjId);
    const arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdObjLstCache.filter(
      (x) => arrTabIdLst.indexOf(vPrjTabFld_DnPathId_JoinByKeyLst(x)) > -1,
    );
    return arrvPrjTabFld_DnPathIdSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTabIdLst.join(','),
      vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvPrjTabFld_DnPathIdEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vPrjTabFld_DnPathId_Controller, strAction);

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
          vPrjTabFld_DnPathId_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTabFld_DnPathId_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTabFld_DnPathId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvPrjTabFld_DnPathIdEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vPrjTabFld_DnPathId_Controller, strAction);

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
          vPrjTabFld_DnPathId_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTabFld_DnPathId_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTabFld_DnPathId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvPrjTabFld_DnPathIdEN>();
  const arrvPrjTabFld_DnPathIdObjLstCache = await vPrjTabFld_DnPathId_GetObjLstCache(strCmPrjId);
  if (arrvPrjTabFld_DnPathIdObjLstCache.length == 0) return arrvPrjTabFld_DnPathIdObjLstCache;
  let arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvPrjTabFld_DnPathIdCond = new clsvPrjTabFld_DnPathIdEN();
  ObjectAssign(objvPrjTabFld_DnPathIdCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvPrjTabFld_DnPathIdWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTabFld_DnPathIdCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPrjTabFld_DnPathIdSel.length == 0) return arrvPrjTabFld_DnPathIdSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.sort(
        vPrjTabFld_DnPathId_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.sort(objPagerPara.sortFun);
    }
    arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.slice(intStart, intEnd);
    return arrvPrjTabFld_DnPathIdSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPrjTabFld_DnPathId_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjTabFld_DnPathIdEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vPrjTabFld_DnPathId_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPrjTabFld_DnPathIdEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvPrjTabFld_DnPathIdEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vPrjTabFld_DnPathId_Controller, strAction);

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
          vPrjTabFld_DnPathId_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjTabFld_DnPathId_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjTabFld_DnPathId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_IsExistRecordCache(
  objvPrjTabFld_DnPathIdCond: clsvPrjTabFld_DnPathIdEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvPrjTabFld_DnPathIdObjLstCache = await vPrjTabFld_DnPathId_GetObjLstCache(strCmPrjId);
  if (arrvPrjTabFld_DnPathIdObjLstCache == null) return false;
  let arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdObjLstCache;
  if (
    objvPrjTabFld_DnPathIdCond.sfFldComparisonOp == null ||
    objvPrjTabFld_DnPathIdCond.sfFldComparisonOp == ''
  )
    return arrvPrjTabFld_DnPathIdSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPrjTabFld_DnPathIdCond.sfFldComparisonOp,
  );
  //console.log("clsvPrjTabFld_DnPathIdWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPrjTabFld_DnPathIdCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTabFld_DnPathIdCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPrjTabFld_DnPathIdSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvPrjTabFld_DnPathIdCond),
      vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vPrjTabFld_DnPathId_Controller, strAction);

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
        vPrjTabFld_DnPathId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_IsExistCache(
  strTabId: string,
  strFldId: string,
  strCmPrjId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrvPrjTabFld_DnPathIdObjLstCache = await vPrjTabFld_DnPathId_GetObjLstCache(strCmPrjId);
  if (arrvPrjTabFld_DnPathIdObjLstCache == null) return false;
  try {
    const arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdObjLstCache.filter(
      (x) => x.tabId == strTabId && x.fldId == strFldId,
    );
    if (arrvPrjTabFld_DnPathIdSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTabId,
      vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_IsExistAsync(strTabId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vPrjTabFld_DnPathId_Controller, strAction);

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
        vPrjTabFld_DnPathId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFld_DnPathId_ConstructorName,
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
export async function vPrjTabFld_DnPathId_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vPrjTabFld_DnPathId_Controller, strAction);

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
        vPrjTabFld_DnPathId_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjTabFld_DnPathId_ConstructorName,
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
 * @param objvPrjTabFld_DnPathIdCond:条件对象
 * @returns 对象列表记录数
 */
export async function vPrjTabFld_DnPathId_GetRecCountByCondCache(
  objvPrjTabFld_DnPathIdCond: clsvPrjTabFld_DnPathIdEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvPrjTabFld_DnPathIdObjLstCache = await vPrjTabFld_DnPathId_GetObjLstCache(strCmPrjId);
  if (arrvPrjTabFld_DnPathIdObjLstCache == null) return 0;
  let arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdObjLstCache;
  if (
    objvPrjTabFld_DnPathIdCond.sfFldComparisonOp == null ||
    objvPrjTabFld_DnPathIdCond.sfFldComparisonOp == ''
  )
    return arrvPrjTabFld_DnPathIdSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPrjTabFld_DnPathIdCond.sfFldComparisonOp,
  );
  //console.log("clsvPrjTabFld_DnPathIdWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPrjTabFld_DnPathIdCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPrjTabFld_DnPathIdCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjTabFld_DnPathIdSel = arrvPrjTabFld_DnPathIdSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvPrjTabFld_DnPathIdSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPrjTabFld_DnPathIdCond),
      vPrjTabFld_DnPathId_ConstructorName,
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
export function vPrjTabFld_DnPathId_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vPrjTabFld_DnPathId_ReFreshThisCache(strCmPrjId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvPrjTabFld_DnPathIdEN._CurrTabName, strCmPrjId);
    switch (clsvPrjTabFld_DnPathIdEN.CacheModeId) {
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
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPrjTabFld_DnPathId_GetJSONStrByObj(
  pobjvPrjTabFld_DnPathIdEN: clsvPrjTabFld_DnPathIdEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvPrjTabFld_DnPathIdEN);
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
export function vPrjTabFld_DnPathId_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvPrjTabFld_DnPathIdEN> {
  let arrvPrjTabFld_DnPathIdObjLst = new Array<clsvPrjTabFld_DnPathIdEN>();
  if (strJSON === '') {
    return arrvPrjTabFld_DnPathIdObjLst;
  }
  try {
    arrvPrjTabFld_DnPathIdObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvPrjTabFld_DnPathIdObjLst;
  }
  return arrvPrjTabFld_DnPathIdObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvPrjTabFld_DnPathIdObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vPrjTabFld_DnPathId_GetObjLstByJSONObjLst(
  arrvPrjTabFld_DnPathIdObjLstS: Array<clsvPrjTabFld_DnPathIdEN>,
): Array<clsvPrjTabFld_DnPathIdEN> {
  const arrvPrjTabFld_DnPathIdObjLst = new Array<clsvPrjTabFld_DnPathIdEN>();
  for (const objInFor of arrvPrjTabFld_DnPathIdObjLstS) {
    const obj1 = vPrjTabFld_DnPathId_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvPrjTabFld_DnPathIdObjLst.push(obj1);
  }
  return arrvPrjTabFld_DnPathIdObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPrjTabFld_DnPathId_GetObjByJSONStr(strJSON: string): clsvPrjTabFld_DnPathIdEN {
  let pobjvPrjTabFld_DnPathIdEN = new clsvPrjTabFld_DnPathIdEN();
  if (strJSON === '') {
    return pobjvPrjTabFld_DnPathIdEN;
  }
  try {
    pobjvPrjTabFld_DnPathIdEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvPrjTabFld_DnPathIdEN;
  }
  return pobjvPrjTabFld_DnPathIdEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vPrjTabFld_DnPathId_GetCombineCondition(
  objvPrjTabFld_DnPathIdCond: clsvPrjTabFld_DnPathIdEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTabFld_DnPathIdCond.dicFldComparisonOp,
      clsvPrjTabFld_DnPathIdEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objvPrjTabFld_DnPathIdCond.dicFldComparisonOp[clsvPrjTabFld_DnPathIdEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTabFld_DnPathIdEN.con_TabId,
      objvPrjTabFld_DnPathIdCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTabFld_DnPathIdCond.dicFldComparisonOp,
      clsvPrjTabFld_DnPathIdEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objvPrjTabFld_DnPathIdCond.dicFldComparisonOp[clsvPrjTabFld_DnPathIdEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTabFld_DnPathIdEN.con_FldId,
      objvPrjTabFld_DnPathIdCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTabFld_DnPathIdCond.dicFldComparisonOp,
      clsvPrjTabFld_DnPathIdEN.con_DnPathId,
    ) == true
  ) {
    const strComparisonOpDnPathId: string =
      objvPrjTabFld_DnPathIdCond.dicFldComparisonOp[clsvPrjTabFld_DnPathIdEN.con_DnPathId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTabFld_DnPathIdEN.con_DnPathId,
      objvPrjTabFld_DnPathIdCond.dnPathId,
      strComparisonOpDnPathId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjTabFld_DnPathIdCond.dicFldComparisonOp,
      clsvPrjTabFld_DnPathIdEN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objvPrjTabFld_DnPathIdCond.dicFldComparisonOp[clsvPrjTabFld_DnPathIdEN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjTabFld_DnPathIdEN.con_CmPrjId,
      objvPrjTabFld_DnPathIdCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvPrjTabFld_DnPathIdENS:源对象
 * @param objvPrjTabFld_DnPathIdENT:目标对象
 */
export function vPrjTabFld_DnPathId_GetObjFromJsonObj(
  objvPrjTabFld_DnPathIdENS: clsvPrjTabFld_DnPathIdEN,
): clsvPrjTabFld_DnPathIdEN {
  const objvPrjTabFld_DnPathIdENT: clsvPrjTabFld_DnPathIdEN = new clsvPrjTabFld_DnPathIdEN();
  ObjectAssign(objvPrjTabFld_DnPathIdENT, objvPrjTabFld_DnPathIdENS);
  return objvPrjTabFld_DnPathIdENT;
}
