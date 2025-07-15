/**
 * 类名:clsWebSrvFunctionsWApi
 * 表名:WebSrvFunctions(00050342)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/05 22:36:17
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * WebSrv函数(WebSrvFunctions)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月05日.
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
import { clsWebSrvFunctionsEN } from '@/ts/L0Entity/GeneCode/clsWebSrvFunctionsEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const webSrvFunctions_Controller = 'WebSrvFunctionsApi';
export const webSrvFunctions_ConstructorName = 'webSrvFunctions';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strWebSrvFunctionId:关键字
 * @returns 对象
 **/
export async function WebSrvFunctions_GetObjByWebSrvFunctionIdAsync(
  strWebSrvFunctionId: string,
): Promise<clsWebSrvFunctionsEN | null> {
  const strThisFuncName = 'GetObjByWebSrvFunctionIdAsync';

  if (IsNullOrEmpty(strWebSrvFunctionId) == true) {
    const strMsg = Format(
      '参数:[strWebSrvFunctionId]不能为空!(In clsWebSrvFunctionsWApi.GetObjByWebSrvFunctionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strWebSrvFunctionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strWebSrvFunctionId]的长度:[{0}]不正确!(clsWebSrvFunctionsWApi.GetObjByWebSrvFunctionIdAsync)',
      strWebSrvFunctionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByWebSrvFunctionId';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWebSrvFunctionId,
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
      const objWebSrvFunctions = WebSrvFunctions_GetObjFromJsonObj(returnObj);
      return objWebSrvFunctions;
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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
 * @param strWebSrvFunctionId:所给的关键字
 * @returns 对象
 */
export async function WebSrvFunctions_GetObjByWebSrvFunctionIdCache(
  strWebSrvFunctionId: string,
  strWebSrvClassId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByWebSrvFunctionIdCache';

  if (IsNullOrEmpty(strWebSrvFunctionId) == true) {
    const strMsg = Format(
      '参数:[strWebSrvFunctionId]不能为空!(In clsWebSrvFunctionsWApi.GetObjByWebSrvFunctionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strWebSrvFunctionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strWebSrvFunctionId]的长度:[{0}]不正确!(clsWebSrvFunctionsWApi.GetObjByWebSrvFunctionIdCache)',
      strWebSrvFunctionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrWebSrvFunctionsObjLstCache = await WebSrvFunctions_GetObjLstCache(strWebSrvClassId);
  try {
    const arrWebSrvFunctionsSel = arrWebSrvFunctionsObjLstCache.filter(
      (x) => x.webSrvFunctionId == strWebSrvFunctionId,
    );
    let objWebSrvFunctions: clsWebSrvFunctionsEN;
    if (arrWebSrvFunctionsSel.length > 0) {
      objWebSrvFunctions = arrWebSrvFunctionsSel[0];
      return objWebSrvFunctions;
    } else {
      if (bolTryAsyncOnce == true) {
        const objWebSrvFunctionsConst = await WebSrvFunctions_GetObjByWebSrvFunctionIdAsync(
          strWebSrvFunctionId,
        );
        if (objWebSrvFunctionsConst != null) {
          WebSrvFunctions_ReFreshThisCache(strWebSrvClassId);
          return objWebSrvFunctionsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strWebSrvFunctionId,
      webSrvFunctions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strWebSrvFunctionId:所给的关键字
 * @returns 对象
 */
export async function WebSrvFunctions_GetObjByWebSrvFunctionIdlocalStorage(
  strWebSrvFunctionId: string,
) {
  const strThisFuncName = 'GetObjByWebSrvFunctionIdlocalStorage';

  if (IsNullOrEmpty(strWebSrvFunctionId) == true) {
    const strMsg = Format(
      '参数:[strWebSrvFunctionId]不能为空!(In clsWebSrvFunctionsWApi.GetObjByWebSrvFunctionIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strWebSrvFunctionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strWebSrvFunctionId]的长度:[{0}]不正确!(clsWebSrvFunctionsWApi.GetObjByWebSrvFunctionIdlocalStorage)',
      strWebSrvFunctionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsWebSrvFunctionsEN._CurrTabName, strWebSrvFunctionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objWebSrvFunctionsCache: clsWebSrvFunctionsEN = JSON.parse(strTempObj);
    return objWebSrvFunctionsCache;
  }
  try {
    const objWebSrvFunctions = await WebSrvFunctions_GetObjByWebSrvFunctionIdAsync(
      strWebSrvFunctionId,
    );
    if (objWebSrvFunctions != null) {
      localStorage.setItem(strKey, JSON.stringify(objWebSrvFunctions));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objWebSrvFunctions;
    }
    return objWebSrvFunctions;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strWebSrvFunctionId,
      webSrvFunctions_ConstructorName,
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
 * @param objWebSrvFunctions:所给的对象
 * @returns 对象
 */
export async function WebSrvFunctions_UpdateObjInLstCache(
  objWebSrvFunctions: clsWebSrvFunctionsEN,
  strWebSrvClassId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrWebSrvFunctionsObjLstCache = await WebSrvFunctions_GetObjLstCache(strWebSrvClassId);
    const obj = arrWebSrvFunctionsObjLstCache.find(
      (x) =>
        x.functionName == objWebSrvFunctions.functionName &&
        x.webSrvClassId == objWebSrvFunctions.webSrvClassId,
    );
    if (obj != null) {
      objWebSrvFunctions.webSrvFunctionId = obj.webSrvFunctionId;
      ObjectAssign(obj, objWebSrvFunctions);
    } else {
      arrWebSrvFunctionsObjLstCache.push(objWebSrvFunctions);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      webSrvFunctions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strWebSrvFunctionId:所给的关键字
 * @returns 对象
 */
export async function WebSrvFunctions_GetNameByWebSrvFunctionIdCache(
  strWebSrvFunctionId: string,
  strWebSrvClassId: string,
) {
  if (IsNullOrEmpty(strWebSrvFunctionId) == true) {
    const strMsg = Format(
      '参数:[strWebSrvFunctionId]不能为空!(In clsWebSrvFunctionsWApi.GetNameByWebSrvFunctionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strWebSrvFunctionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strWebSrvFunctionId]的长度:[{0}]不正确!(clsWebSrvFunctionsWApi.GetNameByWebSrvFunctionIdCache)',
      strWebSrvFunctionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrWebSrvFunctionsObjLstCache = await WebSrvFunctions_GetObjLstCache(strWebSrvClassId);
  if (arrWebSrvFunctionsObjLstCache == null) return '';
  try {
    const arrWebSrvFunctionsSel = arrWebSrvFunctionsObjLstCache.filter(
      (x) => x.webSrvFunctionId == strWebSrvFunctionId,
    );
    let objWebSrvFunctions: clsWebSrvFunctionsEN;
    if (arrWebSrvFunctionsSel.length > 0) {
      objWebSrvFunctions = arrWebSrvFunctionsSel[0];
      return objWebSrvFunctions.functionName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strWebSrvFunctionId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strWebSrvClassId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function WebSrvFunctions_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strWebSrvClassIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strWebSrvClassIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strWebSrvClassIdClassfy]不能为空!(In clsWebSrvFunctionsWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strWebSrvClassIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strWebSrvClassIdClassfy]的长度:[{0}]不正确!(clsWebSrvFunctionsWApi.func)',
      strWebSrvClassIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsWebSrvFunctionsEN.con_WebSrvFunctionId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsWebSrvFunctionsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsWebSrvFunctionsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strWebSrvFunctionId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objWebSrvFunctions = await WebSrvFunctions_GetObjByWebSrvFunctionIdCache(
    strWebSrvFunctionId,
    strWebSrvClassIdClassfy,
  );
  if (objWebSrvFunctions == null) return '';
  if (objWebSrvFunctions.GetFldValue(strOutFldName) == null) return '';
  return objWebSrvFunctions.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function WebSrvFunctions_SortFunDefa(
  a: clsWebSrvFunctionsEN,
  b: clsWebSrvFunctionsEN,
): number {
  return a.webSrvFunctionId.localeCompare(b.webSrvFunctionId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function WebSrvFunctions_SortFunDefa2Fld(
  a: clsWebSrvFunctionsEN,
  b: clsWebSrvFunctionsEN,
): number {
  if (a.webSrvClassId == b.webSrvClassId) return a.functionName.localeCompare(b.functionName);
  else return a.webSrvClassId.localeCompare(b.webSrvClassId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function WebSrvFunctions_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsWebSrvFunctionsEN.con_WebSrvFunctionId:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          return a.webSrvFunctionId.localeCompare(b.webSrvFunctionId);
        };
      case clsWebSrvFunctionsEN.con_WebSrvClassId:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          return a.webSrvClassId.localeCompare(b.webSrvClassId);
        };
      case clsWebSrvFunctionsEN.con_FunctionName:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          return a.functionName.localeCompare(b.functionName);
        };
      case clsWebSrvFunctionsEN.con_GetCustomAttributes:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          return a.getCustomAttributes - b.getCustomAttributes;
        };
      case clsWebSrvFunctionsEN.con_FunctionSignature:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          return a.functionSignature.localeCompare(b.functionSignature);
        };
      case clsWebSrvFunctionsEN.con_FuncTypeId:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          return a.funcTypeId.localeCompare(b.funcTypeId);
        };
      case clsWebSrvFunctionsEN.con_ReturnType:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          return a.returnType.localeCompare(b.returnType);
        };
      case clsWebSrvFunctionsEN.con_ReturnTypeFullName:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (a.returnTypeFullName == null) return -1;
          if (b.returnTypeFullName == null) return 1;
          return a.returnTypeFullName.localeCompare(b.returnTypeFullName);
        };
      case clsWebSrvFunctionsEN.con_IsKnownType:
        return (a: clsWebSrvFunctionsEN) => {
          if (a.isKnownType == true) return 1;
          else return -1;
        };
      case clsWebSrvFunctionsEN.con_ReturnTypeId:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (a.returnTypeId == null) return -1;
          if (b.returnTypeId == null) return 1;
          return a.returnTypeId.localeCompare(b.returnTypeId);
        };
      case clsWebSrvFunctionsEN.con_IsAsyncFunc:
        return (a: clsWebSrvFunctionsEN) => {
          if (a.isAsyncFunc == true) return 1;
          else return -1;
        };
      case clsWebSrvFunctionsEN.con_SourceFunction:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (a.sourceFunction == null) return -1;
          if (b.sourceFunction == null) return 1;
          return a.sourceFunction.localeCompare(b.sourceFunction);
        };
      case clsWebSrvFunctionsEN.con_IsGeneCode:
        return (a: clsWebSrvFunctionsEN) => {
          if (a.isGeneCode == true) return 1;
          else return -1;
        };
      case clsWebSrvFunctionsEN.con_ReturnValueDescription:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (a.returnValueDescription == null) return -1;
          if (b.returnValueDescription == null) return 1;
          return a.returnValueDescription.localeCompare(b.returnValueDescription);
        };
      case clsWebSrvFunctionsEN.con_FuncParaLst:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (a.funcParaLst == null) return -1;
          if (b.funcParaLst == null) return 1;
          return a.funcParaLst.localeCompare(b.funcParaLst);
        };
      case clsWebSrvFunctionsEN.con_IsSysFunction:
        return (a: clsWebSrvFunctionsEN) => {
          if (a.isSysFunction == true) return 1;
          else return -1;
        };
      case clsWebSrvFunctionsEN.con_UpdDate:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsWebSrvFunctionsEN.con_UpdUser:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsWebSrvFunctionsEN.con_Memo:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[WebSrvFunctions]中不存在!(in ${webSrvFunctions_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsWebSrvFunctionsEN.con_WebSrvFunctionId:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          return b.webSrvFunctionId.localeCompare(a.webSrvFunctionId);
        };
      case clsWebSrvFunctionsEN.con_WebSrvClassId:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          return b.webSrvClassId.localeCompare(a.webSrvClassId);
        };
      case clsWebSrvFunctionsEN.con_FunctionName:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          return b.functionName.localeCompare(a.functionName);
        };
      case clsWebSrvFunctionsEN.con_GetCustomAttributes:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          return b.getCustomAttributes - a.getCustomAttributes;
        };
      case clsWebSrvFunctionsEN.con_FunctionSignature:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          return b.functionSignature.localeCompare(a.functionSignature);
        };
      case clsWebSrvFunctionsEN.con_FuncTypeId:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          return b.funcTypeId.localeCompare(a.funcTypeId);
        };
      case clsWebSrvFunctionsEN.con_ReturnType:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          return b.returnType.localeCompare(a.returnType);
        };
      case clsWebSrvFunctionsEN.con_ReturnTypeFullName:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (b.returnTypeFullName == null) return -1;
          if (a.returnTypeFullName == null) return 1;
          return b.returnTypeFullName.localeCompare(a.returnTypeFullName);
        };
      case clsWebSrvFunctionsEN.con_IsKnownType:
        return (b: clsWebSrvFunctionsEN) => {
          if (b.isKnownType == true) return 1;
          else return -1;
        };
      case clsWebSrvFunctionsEN.con_ReturnTypeId:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (b.returnTypeId == null) return -1;
          if (a.returnTypeId == null) return 1;
          return b.returnTypeId.localeCompare(a.returnTypeId);
        };
      case clsWebSrvFunctionsEN.con_IsAsyncFunc:
        return (b: clsWebSrvFunctionsEN) => {
          if (b.isAsyncFunc == true) return 1;
          else return -1;
        };
      case clsWebSrvFunctionsEN.con_SourceFunction:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (b.sourceFunction == null) return -1;
          if (a.sourceFunction == null) return 1;
          return b.sourceFunction.localeCompare(a.sourceFunction);
        };
      case clsWebSrvFunctionsEN.con_IsGeneCode:
        return (b: clsWebSrvFunctionsEN) => {
          if (b.isGeneCode == true) return 1;
          else return -1;
        };
      case clsWebSrvFunctionsEN.con_ReturnValueDescription:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (b.returnValueDescription == null) return -1;
          if (a.returnValueDescription == null) return 1;
          return b.returnValueDescription.localeCompare(a.returnValueDescription);
        };
      case clsWebSrvFunctionsEN.con_FuncParaLst:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (b.funcParaLst == null) return -1;
          if (a.funcParaLst == null) return 1;
          return b.funcParaLst.localeCompare(a.funcParaLst);
        };
      case clsWebSrvFunctionsEN.con_IsSysFunction:
        return (b: clsWebSrvFunctionsEN) => {
          if (b.isSysFunction == true) return 1;
          else return -1;
        };
      case clsWebSrvFunctionsEN.con_UpdDate:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsWebSrvFunctionsEN.con_UpdUser:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsWebSrvFunctionsEN.con_Memo:
        return (a: clsWebSrvFunctionsEN, b: clsWebSrvFunctionsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[WebSrvFunctions]中不存在!(in ${webSrvFunctions_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function WebSrvFunctions_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsWebSrvFunctionsEN.con_WebSrvFunctionId:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.webSrvFunctionId === value;
      };
    case clsWebSrvFunctionsEN.con_WebSrvClassId:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.webSrvClassId === value;
      };
    case clsWebSrvFunctionsEN.con_FunctionName:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.functionName === value;
      };
    case clsWebSrvFunctionsEN.con_GetCustomAttributes:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.getCustomAttributes === value;
      };
    case clsWebSrvFunctionsEN.con_FunctionSignature:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.functionSignature === value;
      };
    case clsWebSrvFunctionsEN.con_FuncTypeId:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.funcTypeId === value;
      };
    case clsWebSrvFunctionsEN.con_ReturnType:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.returnType === value;
      };
    case clsWebSrvFunctionsEN.con_ReturnTypeFullName:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.returnTypeFullName === value;
      };
    case clsWebSrvFunctionsEN.con_IsKnownType:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.isKnownType === value;
      };
    case clsWebSrvFunctionsEN.con_ReturnTypeId:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.returnTypeId === value;
      };
    case clsWebSrvFunctionsEN.con_IsAsyncFunc:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.isAsyncFunc === value;
      };
    case clsWebSrvFunctionsEN.con_SourceFunction:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.sourceFunction === value;
      };
    case clsWebSrvFunctionsEN.con_IsGeneCode:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.isGeneCode === value;
      };
    case clsWebSrvFunctionsEN.con_ReturnValueDescription:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.returnValueDescription === value;
      };
    case clsWebSrvFunctionsEN.con_FuncParaLst:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.funcParaLst === value;
      };
    case clsWebSrvFunctionsEN.con_IsSysFunction:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.isSysFunction === value;
      };
    case clsWebSrvFunctionsEN.con_UpdDate:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.updDate === value;
      };
    case clsWebSrvFunctionsEN.con_UpdUser:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.updUser === value;
      };
    case clsWebSrvFunctionsEN.con_Memo:
      return (obj: clsWebSrvFunctionsEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[WebSrvFunctions]中不存在!(in ${webSrvFunctions_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strWebSrvClassId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function WebSrvFunctions_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strWebSrvClassIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strWebSrvClassIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strWebSrvClassIdClassfy]不能为空!(In clsWebSrvFunctionsWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strWebSrvClassIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strWebSrvClassIdClassfy]的长度:[{0}]不正确!(clsWebSrvFunctionsWApi.funcKey)',
      strWebSrvClassIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsWebSrvFunctionsEN.con_WebSrvFunctionId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrWebSrvFunctions = await WebSrvFunctions_GetObjLstCache(strWebSrvClassIdClassfy);
  if (arrWebSrvFunctions == null) return [];
  let arrWebSrvFunctionsSel = arrWebSrvFunctions;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrWebSrvFunctionsSel.length == 0) return [];
  return arrWebSrvFunctionsSel.map((x) => x.webSrvFunctionId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function WebSrvFunctions_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
export async function WebSrvFunctions_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
export async function WebSrvFunctions_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsWebSrvFunctionsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

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
      const objWebSrvFunctions = WebSrvFunctions_GetObjFromJsonObj(returnObj);
      return objWebSrvFunctions;
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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
export async function WebSrvFunctions_GetObjLstClientCache(strWebSrvClassId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsWebSrvFunctionsEN.WhereFormat) == false) {
    strWhereCond = Format(clsWebSrvFunctionsEN.WhereFormat, strWebSrvClassId);
  } else {
    strWhereCond = Format("WebSrvClassId='{0}'", strWebSrvClassId);
  }
  const strKey = Format('{0}_{1}', clsWebSrvFunctionsEN._CurrTabName, strWebSrvClassId);
  if (IsNullOrEmpty(clsWebSrvFunctionsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsWebSrvFunctionsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrWebSrvFunctionsExObjLstCache: Array<clsWebSrvFunctionsEN> = CacheHelper.Get(strKey);
    const arrWebSrvFunctionsObjLstT = WebSrvFunctions_GetObjLstByJSONObjLst(
      arrWebSrvFunctionsExObjLstCache,
    );
    return arrWebSrvFunctionsObjLstT;
  }
  try {
    const arrWebSrvFunctionsExObjLst = await WebSrvFunctions_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrWebSrvFunctionsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrWebSrvFunctionsExObjLst.length,
    );
    console.log(strInfo);
    return arrWebSrvFunctionsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      webSrvFunctions_ConstructorName,
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
export async function WebSrvFunctions_GetObjLstlocalStorage(strWebSrvClassId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsWebSrvFunctionsEN.WhereFormat) == false) {
    strWhereCond = Format(clsWebSrvFunctionsEN.WhereFormat, strWebSrvClassId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsWebSrvFunctionsEN.con_WebSrvClassId, strWebSrvClassId);
  }
  const strKey = Format('{0}_{1}', clsWebSrvFunctionsEN._CurrTabName, strWebSrvClassId);
  if (IsNullOrEmpty(clsWebSrvFunctionsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsWebSrvFunctionsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrWebSrvFunctionsExObjLstCache: Array<clsWebSrvFunctionsEN> = JSON.parse(strTempObjLst);
    const arrWebSrvFunctionsObjLstT = WebSrvFunctions_GetObjLstByJSONObjLst(
      arrWebSrvFunctionsExObjLstCache,
    );
    return arrWebSrvFunctionsObjLstT;
  }
  try {
    const arrWebSrvFunctionsExObjLst = await WebSrvFunctions_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrWebSrvFunctionsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrWebSrvFunctionsExObjLst.length,
    );
    console.log(strInfo);
    return arrWebSrvFunctionsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      webSrvFunctions_ConstructorName,
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
export async function WebSrvFunctions_GetObjLstlocalStoragePureCache(strWebSrvClassId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsWebSrvFunctionsEN._CurrTabName, strWebSrvClassId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrWebSrvFunctionsObjLstCache: Array<clsWebSrvFunctionsEN> = JSON.parse(strTempObjLst);
    return arrWebSrvFunctionsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function WebSrvFunctions_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsWebSrvFunctionsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

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
          webSrvFunctions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = WebSrvFunctions_GetObjLstByJSONObjLst(returnObjLst);
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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
export async function WebSrvFunctions_GetObjLstsessionStorage(strWebSrvClassId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsWebSrvFunctionsEN.WhereFormat) == false) {
    strWhereCond = Format(clsWebSrvFunctionsEN.WhereFormat, strWebSrvClassId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsWebSrvFunctionsEN.con_WebSrvClassId, strWebSrvClassId);
  }
  const strKey = Format('{0}_{1}', clsWebSrvFunctionsEN._CurrTabName, strWebSrvClassId);
  if (IsNullOrEmpty(clsWebSrvFunctionsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsWebSrvFunctionsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrWebSrvFunctionsExObjLstCache: Array<clsWebSrvFunctionsEN> = JSON.parse(strTempObjLst);
    const arrWebSrvFunctionsObjLstT = WebSrvFunctions_GetObjLstByJSONObjLst(
      arrWebSrvFunctionsExObjLstCache,
    );
    return arrWebSrvFunctionsObjLstT;
  }
  try {
    const arrWebSrvFunctionsExObjLst = await WebSrvFunctions_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrWebSrvFunctionsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrWebSrvFunctionsExObjLst.length,
    );
    console.log(strInfo);
    return arrWebSrvFunctionsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      webSrvFunctions_ConstructorName,
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
export async function WebSrvFunctions_GetObjLstsessionStoragePureCache(strWebSrvClassId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsWebSrvFunctionsEN._CurrTabName, strWebSrvClassId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrWebSrvFunctionsObjLstCache: Array<clsWebSrvFunctionsEN> = JSON.parse(strTempObjLst);
    return arrWebSrvFunctionsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function WebSrvFunctions_GetObjLstCache(
  strWebSrvClassId: string,
): Promise<Array<clsWebSrvFunctionsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strWebSrvClassId) == true) {
    const strMsg = Format(
      '参数:[strWebSrvClassId]不能为空！(In clsWebSrvFunctionsWApi.WebSrvFunctions_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strWebSrvClassId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strWebSrvClassId]的长度:[{0}]不正确！(clsWebSrvFunctionsWApi.WebSrvFunctions_GetObjLstCache)',
      strWebSrvClassId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrWebSrvFunctionsObjLstCache;
  switch (clsWebSrvFunctionsEN.CacheModeId) {
    case '04': //sessionStorage
      arrWebSrvFunctionsObjLstCache = await WebSrvFunctions_GetObjLstsessionStorage(
        strWebSrvClassId,
      );
      break;
    case '03': //localStorage
      arrWebSrvFunctionsObjLstCache = await WebSrvFunctions_GetObjLstlocalStorage(strWebSrvClassId);
      break;
    case '02': //ClientCache
      arrWebSrvFunctionsObjLstCache = await WebSrvFunctions_GetObjLstClientCache(strWebSrvClassId);
      break;
    default:
      arrWebSrvFunctionsObjLstCache = await WebSrvFunctions_GetObjLstClientCache(strWebSrvClassId);
      break;
  }
  return arrWebSrvFunctionsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function WebSrvFunctions_GetObjLstPureCache(strWebSrvClassId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrWebSrvFunctionsObjLstCache;
  switch (clsWebSrvFunctionsEN.CacheModeId) {
    case '04': //sessionStorage
      arrWebSrvFunctionsObjLstCache = await WebSrvFunctions_GetObjLstsessionStoragePureCache(
        strWebSrvClassId,
      );
      break;
    case '03': //localStorage
      arrWebSrvFunctionsObjLstCache = await WebSrvFunctions_GetObjLstlocalStoragePureCache(
        strWebSrvClassId,
      );
      break;
    case '02': //ClientCache
      arrWebSrvFunctionsObjLstCache = null;
      break;
    default:
      arrWebSrvFunctionsObjLstCache = null;
      break;
  }
  return arrWebSrvFunctionsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrWebSrvFunctionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function WebSrvFunctions_GetSubObjLstCache(
  objWebSrvFunctionsCond: clsWebSrvFunctionsEN,
  strWebSrvClassId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrWebSrvFunctionsObjLstCache = await WebSrvFunctions_GetObjLstCache(strWebSrvClassId);
  let arrWebSrvFunctionsSel = arrWebSrvFunctionsObjLstCache;
  if (
    objWebSrvFunctionsCond.sfFldComparisonOp == null ||
    objWebSrvFunctionsCond.sfFldComparisonOp == ''
  )
    return arrWebSrvFunctionsSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objWebSrvFunctionsCond.sfFldComparisonOp,
  );
  //console.log("clsWebSrvFunctionsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objWebSrvFunctionsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objWebSrvFunctionsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrWebSrvFunctionsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objWebSrvFunctionsCond),
      webSrvFunctions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsWebSrvFunctionsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrWebSrvFunctionId:关键字列表
 * @returns 对象列表
 **/
export async function WebSrvFunctions_GetObjLstByWebSrvFunctionIdLstAsync(
  arrWebSrvFunctionId: Array<string>,
): Promise<Array<clsWebSrvFunctionsEN>> {
  const strThisFuncName = 'GetObjLstByWebSrvFunctionIdLstAsync';
  const strAction = 'GetObjLstByWebSrvFunctionIdLst';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrWebSrvFunctionId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          webSrvFunctions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = WebSrvFunctions_GetObjLstByJSONObjLst(returnObjLst);
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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
 * @param arrstrWebSrvFunctionIdLst:关键字列表
 * @returns 对象列表
 */
export async function WebSrvFunctions_GetObjLstByWebSrvFunctionIdLstCache(
  arrWebSrvFunctionIdLst: Array<string>,
  strWebSrvClassId: string,
) {
  const strThisFuncName = 'GetObjLstByWebSrvFunctionIdLstCache';
  try {
    const arrWebSrvFunctionsObjLstCache = await WebSrvFunctions_GetObjLstCache(strWebSrvClassId);
    const arrWebSrvFunctionsSel = arrWebSrvFunctionsObjLstCache.filter(
      (x) => arrWebSrvFunctionIdLst.indexOf(x.webSrvFunctionId) > -1,
    );
    return arrWebSrvFunctionsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrWebSrvFunctionIdLst.join(','),
      webSrvFunctions_ConstructorName,
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
export async function WebSrvFunctions_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsWebSrvFunctionsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

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
          webSrvFunctions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = WebSrvFunctions_GetObjLstByJSONObjLst(returnObjLst);
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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
export async function WebSrvFunctions_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsWebSrvFunctionsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

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
          webSrvFunctions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = WebSrvFunctions_GetObjLstByJSONObjLst(returnObjLst);
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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
export async function WebSrvFunctions_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strWebSrvClassId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsWebSrvFunctionsEN>();
  const arrWebSrvFunctionsObjLstCache = await WebSrvFunctions_GetObjLstCache(strWebSrvClassId);
  if (arrWebSrvFunctionsObjLstCache.length == 0) return arrWebSrvFunctionsObjLstCache;
  let arrWebSrvFunctionsSel = arrWebSrvFunctionsObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objWebSrvFunctionsCond = new clsWebSrvFunctionsEN();
  ObjectAssign(objWebSrvFunctionsCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsWebSrvFunctionsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objWebSrvFunctionsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrWebSrvFunctionsSel.length == 0) return arrWebSrvFunctionsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.sort(
        WebSrvFunctions_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.sort(objPagerPara.sortFun);
    }
    arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.slice(intStart, intEnd);
    return arrWebSrvFunctionsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      webSrvFunctions_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsWebSrvFunctionsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function WebSrvFunctions_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsWebSrvFunctionsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsWebSrvFunctionsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

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
          webSrvFunctions_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = WebSrvFunctions_GetObjLstByJSONObjLst(returnObjLst);
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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
 * @param strWebSrvFunctionId:关键字
 * @returns 获取删除的结果
 **/
export async function WebSrvFunctions_DelRecordAsync(strWebSrvFunctionId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strWebSrvFunctionId);

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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
 * @param arrWebSrvFunctionId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function WebSrvFunctions_DelWebSrvFunctionssAsync(
  arrWebSrvFunctionId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelWebSrvFunctionssAsync';
  const strAction = 'DelWebSrvFunctionss';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrWebSrvFunctionId, config);
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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
export async function WebSrvFunctions_DelWebSrvFunctionssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelWebSrvFunctionssByCondAsync';
  const strAction = 'DelWebSrvFunctionssByCond';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
 * @param objWebSrvFunctionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function WebSrvFunctions_AddNewRecordAsync(
  objWebSrvFunctionsEN: clsWebSrvFunctionsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objWebSrvFunctionsEN);
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objWebSrvFunctionsEN, config);
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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
 * @param objWebSrvFunctionsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function WebSrvFunctions_AddNewRecordWithMaxIdAsync(
  objWebSrvFunctionsEN: clsWebSrvFunctionsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objWebSrvFunctionsEN, config);
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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
 * @param objWebSrvFunctionsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function WebSrvFunctions_AddNewRecordWithReturnKeyAsync(
  objWebSrvFunctionsEN: clsWebSrvFunctionsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objWebSrvFunctionsEN, config);
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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
 * @param objWebSrvFunctionsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function WebSrvFunctions_UpdateRecordAsync(
  objWebSrvFunctionsEN: clsWebSrvFunctionsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objWebSrvFunctionsEN.sfUpdFldSetStr === undefined ||
    objWebSrvFunctionsEN.sfUpdFldSetStr === null ||
    objWebSrvFunctionsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objWebSrvFunctionsEN.webSrvFunctionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objWebSrvFunctionsEN, config);
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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
 * @param objWebSrvFunctionsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function WebSrvFunctions_UpdateWithConditionAsync(
  objWebSrvFunctionsEN: clsWebSrvFunctionsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objWebSrvFunctionsEN.sfUpdFldSetStr === undefined ||
    objWebSrvFunctionsEN.sfUpdFldSetStr === null ||
    objWebSrvFunctionsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objWebSrvFunctionsEN.webSrvFunctionId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);
  objWebSrvFunctionsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objWebSrvFunctionsEN, config);
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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
 * @param objstrWebSrvFunctionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function WebSrvFunctions_IsExistRecordCache(
  objWebSrvFunctionsCond: clsWebSrvFunctionsEN,
  strWebSrvClassId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrWebSrvFunctionsObjLstCache = await WebSrvFunctions_GetObjLstCache(strWebSrvClassId);
  if (arrWebSrvFunctionsObjLstCache == null) return false;
  let arrWebSrvFunctionsSel = arrWebSrvFunctionsObjLstCache;
  if (
    objWebSrvFunctionsCond.sfFldComparisonOp == null ||
    objWebSrvFunctionsCond.sfFldComparisonOp == ''
  )
    return arrWebSrvFunctionsSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objWebSrvFunctionsCond.sfFldComparisonOp,
  );
  //console.log("clsWebSrvFunctionsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objWebSrvFunctionsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objWebSrvFunctionsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrWebSrvFunctionsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objWebSrvFunctionsCond),
      webSrvFunctions_ConstructorName,
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
export async function WebSrvFunctions_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
 * @param strWebSrvFunctionId:所给的关键字
 * @returns 对象
 */
export async function WebSrvFunctions_IsExistCache(
  strWebSrvFunctionId: string,
  strWebSrvClassId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrWebSrvFunctionsObjLstCache = await WebSrvFunctions_GetObjLstCache(strWebSrvClassId);
  if (arrWebSrvFunctionsObjLstCache == null) return false;
  try {
    const arrWebSrvFunctionsSel = arrWebSrvFunctionsObjLstCache.filter(
      (x) => x.webSrvFunctionId == strWebSrvFunctionId,
    );
    if (arrWebSrvFunctionsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strWebSrvFunctionId,
      webSrvFunctions_ConstructorName,
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
 * @param strWebSrvFunctionId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function WebSrvFunctions_IsExistAsync(strWebSrvFunctionId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWebSrvFunctionId,
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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
export async function WebSrvFunctions_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
 * @param objWebSrvFunctionsCond:条件对象
 * @returns 对象列表记录数
 */
export async function WebSrvFunctions_GetRecCountByCondCache(
  objWebSrvFunctionsCond: clsWebSrvFunctionsEN,
  strWebSrvClassId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrWebSrvFunctionsObjLstCache = await WebSrvFunctions_GetObjLstCache(strWebSrvClassId);
  if (arrWebSrvFunctionsObjLstCache == null) return 0;
  let arrWebSrvFunctionsSel = arrWebSrvFunctionsObjLstCache;
  if (
    objWebSrvFunctionsCond.sfFldComparisonOp == null ||
    objWebSrvFunctionsCond.sfFldComparisonOp == ''
  )
    return arrWebSrvFunctionsSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objWebSrvFunctionsCond.sfFldComparisonOp,
  );
  //console.log("clsWebSrvFunctionsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objWebSrvFunctionsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objWebSrvFunctionsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrWebSrvFunctionsSel = arrWebSrvFunctionsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrWebSrvFunctionsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objWebSrvFunctionsCond),
      webSrvFunctions_ConstructorName,
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
export async function WebSrvFunctions_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
export async function WebSrvFunctions_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(webSrvFunctions_Controller, strAction);

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
        webSrvFunctions_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        webSrvFunctions_ConstructorName,
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
export function WebSrvFunctions_GetWebApiUrl(strController: string, strAction: string): string {
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
export function WebSrvFunctions_ReFreshCache(strWebSrvClassId: string): void {
  if (IsNullOrEmpty(strWebSrvClassId) == true) {
    const strMsg = Format(
      '参数:[strWebSrvClassId]不能为空!(In clsWebSrvFunctionsWApi.clsWebSrvFunctionsWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strWebSrvClassId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strWebSrvClassId]的长度:[{0}]不正确!(clsWebSrvFunctionsWApi.clsWebSrvFunctionsWApi.ReFreshCache)',
      strWebSrvClassId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsWebSrvFunctionsEN._CurrTabName, strWebSrvClassId);
  switch (clsWebSrvFunctionsEN.CacheModeId) {
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
export function WebSrvFunctions_ReFreshThisCache(strWebSrvClassId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsWebSrvFunctionsEN._CurrTabName, strWebSrvClassId);
    switch (clsWebSrvFunctionsEN.CacheModeId) {
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

 * @param strWebSrvClassId:
*/
export async function WebSrvFunctions_BindDdl_WebSrvFunctionIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strWebSrvClassId: string,
) {
  if (IsNullOrEmpty(strWebSrvClassId) == true) {
    const strMsg = Format(
      '参数:[strWebSrvClassId]不能为空！(In clsWebSrvFunctionsWApi.BindDdl_WebSrvFunctionIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strWebSrvClassId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strWebSrvClassId]的长度:[{0}]不正确！(clsWebSrvFunctionsWApi.BindDdl_WebSrvFunctionIdInDiv)',
      strWebSrvClassId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_WebSrvFunctionIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_WebSrvFunctionIdInDivCache");
  const arrObjLstSel = await WebSrvFunctions_GetObjLstCache(strWebSrvClassId);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsWebSrvFunctionsEN.con_WebSrvFunctionId,
    clsWebSrvFunctionsEN.con_FunctionName,
    'WebSrv函数',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function WebSrvFunctions_CheckPropertyNew(pobjWebSrvFunctionsEN: clsWebSrvFunctionsEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.webSrvClassId) === true ||
    pobjWebSrvFunctionsEN.webSrvClassId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[类Id]不能为空(In WebSrv函数)!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjWebSrvFunctionsEN.functionName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[功能名称]不能为空(In WebSrv函数)!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjWebSrvFunctionsEN.getCustomAttributes ||
    (pobjWebSrvFunctionsEN.getCustomAttributes != null &&
      pobjWebSrvFunctionsEN.getCustomAttributes.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[GetCustomAttributes]不能为空(In WebSrv函数)!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjWebSrvFunctionsEN.functionSignature) === true) {
    throw new Error(
      '(errid:Watl000411)字段[函数签名]不能为空(In WebSrv函数)!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.funcTypeId) === true ||
    pobjWebSrvFunctionsEN.funcTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[函数类型Id]不能为空(In WebSrv函数)!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjWebSrvFunctionsEN.returnType) === true) {
    throw new Error(
      '(errid:Watl000411)字段[返回类型]不能为空(In WebSrv函数)!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.webSrvFunctionId) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.webSrvFunctionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数Id(webSrvFunctionId)]的长度不能超过8(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.webSrvFunctionId)(clsWebSrvFunctionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.webSrvClassId) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.webSrvClassId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[类Id(webSrvClassId)]的长度不能超过8(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.webSrvClassId)(clsWebSrvFunctionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.functionName) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.functionName) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能名称(functionName)]的长度不能超过200(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.functionName)(clsWebSrvFunctionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.functionSignature) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.functionSignature) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数签名(functionSignature)]的长度不能超过500(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.functionSignature)(clsWebSrvFunctionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.funcTypeId) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.funcTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数类型Id(funcTypeId)]的长度不能超过2(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.funcTypeId)(clsWebSrvFunctionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnType) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.returnType) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[返回类型(returnType)]的长度不能超过500(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.returnType)(clsWebSrvFunctionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnTypeFullName) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.returnTypeFullName) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[返回类型全名(returnTypeFullName)]的长度不能超过500(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.returnTypeFullName)(clsWebSrvFunctionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnTypeId) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.returnTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[返回类型ID(returnTypeId)]的长度不能超过2(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.returnTypeId)(clsWebSrvFunctionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.sourceFunction) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.sourceFunction) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[来源函数(sourceFunction)]的长度不能超过500(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.sourceFunction)(clsWebSrvFunctionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnValueDescription) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.returnValueDescription) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[返回值说明(returnValueDescription)]的长度不能超过500(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.returnValueDescription)(clsWebSrvFunctionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.funcParaLst) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.funcParaLst) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数参数列表(funcParaLst)]的长度不能超过500(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.funcParaLst)(clsWebSrvFunctionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.updDate) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.updDate)(clsWebSrvFunctionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.updUser) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.updUser)(clsWebSrvFunctionsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.memo) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.memo)(clsWebSrvFunctionsBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.webSrvFunctionId) == false &&
    undefined !== pobjWebSrvFunctionsEN.webSrvFunctionId &&
    tzDataType.isString(pobjWebSrvFunctionsEN.webSrvFunctionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数Id(webSrvFunctionId)]的值:[$(pobjWebSrvFunctionsEN.webSrvFunctionId)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.webSrvClassId) == false &&
    undefined !== pobjWebSrvFunctionsEN.webSrvClassId &&
    tzDataType.isString(pobjWebSrvFunctionsEN.webSrvClassId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类Id(webSrvClassId)]的值:[$(pobjWebSrvFunctionsEN.webSrvClassId)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.functionName) == false &&
    undefined !== pobjWebSrvFunctionsEN.functionName &&
    tzDataType.isString(pobjWebSrvFunctionsEN.functionName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能名称(functionName)]的值:[$(pobjWebSrvFunctionsEN.functionName)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjWebSrvFunctionsEN.getCustomAttributes &&
    undefined !== pobjWebSrvFunctionsEN.getCustomAttributes &&
    tzDataType.isNumber(pobjWebSrvFunctionsEN.getCustomAttributes) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[GetCustomAttributes(getCustomAttributes)]的值:[$(pobjWebSrvFunctionsEN.getCustomAttributes)], 非法,应该为数值型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.functionSignature) == false &&
    undefined !== pobjWebSrvFunctionsEN.functionSignature &&
    tzDataType.isString(pobjWebSrvFunctionsEN.functionSignature) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数签名(functionSignature)]的值:[$(pobjWebSrvFunctionsEN.functionSignature)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.funcTypeId) == false &&
    undefined !== pobjWebSrvFunctionsEN.funcTypeId &&
    tzDataType.isString(pobjWebSrvFunctionsEN.funcTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数类型Id(funcTypeId)]的值:[$(pobjWebSrvFunctionsEN.funcTypeId)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnType) == false &&
    undefined !== pobjWebSrvFunctionsEN.returnType &&
    tzDataType.isString(pobjWebSrvFunctionsEN.returnType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[返回类型(returnType)]的值:[$(pobjWebSrvFunctionsEN.returnType)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnTypeFullName) == false &&
    undefined !== pobjWebSrvFunctionsEN.returnTypeFullName &&
    tzDataType.isString(pobjWebSrvFunctionsEN.returnTypeFullName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[返回类型全名(returnTypeFullName)]的值:[$(pobjWebSrvFunctionsEN.returnTypeFullName)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjWebSrvFunctionsEN.isKnownType &&
    undefined !== pobjWebSrvFunctionsEN.isKnownType &&
    tzDataType.isBoolean(pobjWebSrvFunctionsEN.isKnownType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否已知类型(isKnownType)]的值:[$(pobjWebSrvFunctionsEN.isKnownType)], 非法,应该为布尔型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnTypeId) == false &&
    undefined !== pobjWebSrvFunctionsEN.returnTypeId &&
    tzDataType.isString(pobjWebSrvFunctionsEN.returnTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[返回类型ID(returnTypeId)]的值:[$(pobjWebSrvFunctionsEN.returnTypeId)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjWebSrvFunctionsEN.isAsyncFunc &&
    undefined !== pobjWebSrvFunctionsEN.isAsyncFunc &&
    tzDataType.isBoolean(pobjWebSrvFunctionsEN.isAsyncFunc) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否异步函数(isAsyncFunc)]的值:[$(pobjWebSrvFunctionsEN.isAsyncFunc)], 非法,应该为布尔型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.sourceFunction) == false &&
    undefined !== pobjWebSrvFunctionsEN.sourceFunction &&
    tzDataType.isString(pobjWebSrvFunctionsEN.sourceFunction) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[来源函数(sourceFunction)]的值:[$(pobjWebSrvFunctionsEN.sourceFunction)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjWebSrvFunctionsEN.isGeneCode &&
    undefined !== pobjWebSrvFunctionsEN.isGeneCode &&
    tzDataType.isBoolean(pobjWebSrvFunctionsEN.isGeneCode) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否生成代码(isGeneCode)]的值:[$(pobjWebSrvFunctionsEN.isGeneCode)], 非法,应该为布尔型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnValueDescription) == false &&
    undefined !== pobjWebSrvFunctionsEN.returnValueDescription &&
    tzDataType.isString(pobjWebSrvFunctionsEN.returnValueDescription) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[返回值说明(returnValueDescription)]的值:[$(pobjWebSrvFunctionsEN.returnValueDescription)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.funcParaLst) == false &&
    undefined !== pobjWebSrvFunctionsEN.funcParaLst &&
    tzDataType.isString(pobjWebSrvFunctionsEN.funcParaLst) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数参数列表(funcParaLst)]的值:[$(pobjWebSrvFunctionsEN.funcParaLst)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjWebSrvFunctionsEN.isSysFunction &&
    undefined !== pobjWebSrvFunctionsEN.isSysFunction &&
    tzDataType.isBoolean(pobjWebSrvFunctionsEN.isSysFunction) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否系统函数(isSysFunction)]的值:[$(pobjWebSrvFunctionsEN.isSysFunction)], 非法,应该为布尔型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.updDate) == false &&
    undefined !== pobjWebSrvFunctionsEN.updDate &&
    tzDataType.isString(pobjWebSrvFunctionsEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjWebSrvFunctionsEN.updDate)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.updUser) == false &&
    undefined !== pobjWebSrvFunctionsEN.updUser &&
    tzDataType.isString(pobjWebSrvFunctionsEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjWebSrvFunctionsEN.updUser)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.memo) == false &&
    undefined !== pobjWebSrvFunctionsEN.memo &&
    tzDataType.isString(pobjWebSrvFunctionsEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjWebSrvFunctionsEN.memo)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function WebSrvFunctions_CheckProperty4Update(pobjWebSrvFunctionsEN: clsWebSrvFunctionsEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.webSrvFunctionId) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.webSrvFunctionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数Id(webSrvFunctionId)]的长度不能超过8(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.webSrvFunctionId)(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.webSrvClassId) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.webSrvClassId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[类Id(webSrvClassId)]的长度不能超过8(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.webSrvClassId)(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.functionName) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.functionName) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能名称(functionName)]的长度不能超过200(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.functionName)(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.functionSignature) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.functionSignature) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数签名(functionSignature)]的长度不能超过500(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.functionSignature)(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.funcTypeId) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.funcTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数类型Id(funcTypeId)]的长度不能超过2(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.funcTypeId)(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnType) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.returnType) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[返回类型(returnType)]的长度不能超过500(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.returnType)(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnTypeFullName) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.returnTypeFullName) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[返回类型全名(returnTypeFullName)]的长度不能超过500(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.returnTypeFullName)(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnTypeId) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.returnTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[返回类型ID(returnTypeId)]的长度不能超过2(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.returnTypeId)(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.sourceFunction) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.sourceFunction) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[来源函数(sourceFunction)]的长度不能超过500(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.sourceFunction)(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnValueDescription) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.returnValueDescription) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[返回值说明(returnValueDescription)]的长度不能超过500(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.returnValueDescription)(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.funcParaLst) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.funcParaLst) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数参数列表(funcParaLst)]的长度不能超过500(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.funcParaLst)(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.updDate) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.updDate)(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.updUser) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.updUser)(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.memo) == false &&
    GetStrLen(pobjWebSrvFunctionsEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In WebSrv函数(WebSrvFunctions))!值:$(pobjWebSrvFunctionsEN.memo)(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.webSrvFunctionId) == false &&
    undefined !== pobjWebSrvFunctionsEN.webSrvFunctionId &&
    tzDataType.isString(pobjWebSrvFunctionsEN.webSrvFunctionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数Id(webSrvFunctionId)]的值:[$(pobjWebSrvFunctionsEN.webSrvFunctionId)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.webSrvClassId) == false &&
    undefined !== pobjWebSrvFunctionsEN.webSrvClassId &&
    tzDataType.isString(pobjWebSrvFunctionsEN.webSrvClassId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类Id(webSrvClassId)]的值:[$(pobjWebSrvFunctionsEN.webSrvClassId)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.functionName) == false &&
    undefined !== pobjWebSrvFunctionsEN.functionName &&
    tzDataType.isString(pobjWebSrvFunctionsEN.functionName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能名称(functionName)]的值:[$(pobjWebSrvFunctionsEN.functionName)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjWebSrvFunctionsEN.getCustomAttributes &&
    undefined !== pobjWebSrvFunctionsEN.getCustomAttributes &&
    tzDataType.isNumber(pobjWebSrvFunctionsEN.getCustomAttributes) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[GetCustomAttributes(getCustomAttributes)]的值:[$(pobjWebSrvFunctionsEN.getCustomAttributes)], 非法,应该为数值型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.functionSignature) == false &&
    undefined !== pobjWebSrvFunctionsEN.functionSignature &&
    tzDataType.isString(pobjWebSrvFunctionsEN.functionSignature) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数签名(functionSignature)]的值:[$(pobjWebSrvFunctionsEN.functionSignature)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.funcTypeId) == false &&
    undefined !== pobjWebSrvFunctionsEN.funcTypeId &&
    tzDataType.isString(pobjWebSrvFunctionsEN.funcTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数类型Id(funcTypeId)]的值:[$(pobjWebSrvFunctionsEN.funcTypeId)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnType) == false &&
    undefined !== pobjWebSrvFunctionsEN.returnType &&
    tzDataType.isString(pobjWebSrvFunctionsEN.returnType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[返回类型(returnType)]的值:[$(pobjWebSrvFunctionsEN.returnType)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnTypeFullName) == false &&
    undefined !== pobjWebSrvFunctionsEN.returnTypeFullName &&
    tzDataType.isString(pobjWebSrvFunctionsEN.returnTypeFullName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[返回类型全名(returnTypeFullName)]的值:[$(pobjWebSrvFunctionsEN.returnTypeFullName)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjWebSrvFunctionsEN.isKnownType &&
    undefined !== pobjWebSrvFunctionsEN.isKnownType &&
    tzDataType.isBoolean(pobjWebSrvFunctionsEN.isKnownType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否已知类型(isKnownType)]的值:[$(pobjWebSrvFunctionsEN.isKnownType)], 非法,应该为布尔型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnTypeId) == false &&
    undefined !== pobjWebSrvFunctionsEN.returnTypeId &&
    tzDataType.isString(pobjWebSrvFunctionsEN.returnTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[返回类型ID(returnTypeId)]的值:[$(pobjWebSrvFunctionsEN.returnTypeId)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjWebSrvFunctionsEN.isAsyncFunc &&
    undefined !== pobjWebSrvFunctionsEN.isAsyncFunc &&
    tzDataType.isBoolean(pobjWebSrvFunctionsEN.isAsyncFunc) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否异步函数(isAsyncFunc)]的值:[$(pobjWebSrvFunctionsEN.isAsyncFunc)], 非法,应该为布尔型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.sourceFunction) == false &&
    undefined !== pobjWebSrvFunctionsEN.sourceFunction &&
    tzDataType.isString(pobjWebSrvFunctionsEN.sourceFunction) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[来源函数(sourceFunction)]的值:[$(pobjWebSrvFunctionsEN.sourceFunction)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjWebSrvFunctionsEN.isGeneCode &&
    undefined !== pobjWebSrvFunctionsEN.isGeneCode &&
    tzDataType.isBoolean(pobjWebSrvFunctionsEN.isGeneCode) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否生成代码(isGeneCode)]的值:[$(pobjWebSrvFunctionsEN.isGeneCode)], 非法,应该为布尔型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.returnValueDescription) == false &&
    undefined !== pobjWebSrvFunctionsEN.returnValueDescription &&
    tzDataType.isString(pobjWebSrvFunctionsEN.returnValueDescription) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[返回值说明(returnValueDescription)]的值:[$(pobjWebSrvFunctionsEN.returnValueDescription)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.funcParaLst) == false &&
    undefined !== pobjWebSrvFunctionsEN.funcParaLst &&
    tzDataType.isString(pobjWebSrvFunctionsEN.funcParaLst) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数参数列表(funcParaLst)]的值:[$(pobjWebSrvFunctionsEN.funcParaLst)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjWebSrvFunctionsEN.isSysFunction &&
    undefined !== pobjWebSrvFunctionsEN.isSysFunction &&
    tzDataType.isBoolean(pobjWebSrvFunctionsEN.isSysFunction) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否系统函数(isSysFunction)]的值:[$(pobjWebSrvFunctionsEN.isSysFunction)], 非法,应该为布尔型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.updDate) == false &&
    undefined !== pobjWebSrvFunctionsEN.updDate &&
    tzDataType.isString(pobjWebSrvFunctionsEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjWebSrvFunctionsEN.updDate)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.updUser) == false &&
    undefined !== pobjWebSrvFunctionsEN.updUser &&
    tzDataType.isString(pobjWebSrvFunctionsEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjWebSrvFunctionsEN.updUser)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjWebSrvFunctionsEN.memo) == false &&
    undefined !== pobjWebSrvFunctionsEN.memo &&
    tzDataType.isString(pobjWebSrvFunctionsEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjWebSrvFunctionsEN.memo)], 非法,应该为字符型(In WebSrv函数(WebSrvFunctions))!(clsWebSrvFunctionsBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function WebSrvFunctions_GetJSONStrByObj(
  pobjWebSrvFunctionsEN: clsWebSrvFunctionsEN,
): string {
  pobjWebSrvFunctionsEN.sfUpdFldSetStr = pobjWebSrvFunctionsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjWebSrvFunctionsEN);
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
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function WebSrvFunctions_GetObjLstByJSONStr(strJSON: string): Array<clsWebSrvFunctionsEN> {
  let arrWebSrvFunctionsObjLst = new Array<clsWebSrvFunctionsEN>();
  if (strJSON === '') {
    return arrWebSrvFunctionsObjLst;
  }
  try {
    arrWebSrvFunctionsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrWebSrvFunctionsObjLst;
  }
  return arrWebSrvFunctionsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrWebSrvFunctionsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function WebSrvFunctions_GetObjLstByJSONObjLst(
  arrWebSrvFunctionsObjLstS: Array<clsWebSrvFunctionsEN>,
): Array<clsWebSrvFunctionsEN> {
  const arrWebSrvFunctionsObjLst = new Array<clsWebSrvFunctionsEN>();
  for (const objInFor of arrWebSrvFunctionsObjLstS) {
    const obj1 = WebSrvFunctions_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrWebSrvFunctionsObjLst.push(obj1);
  }
  return arrWebSrvFunctionsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function WebSrvFunctions_GetObjByJSONStr(strJSON: string): clsWebSrvFunctionsEN {
  let pobjWebSrvFunctionsEN = new clsWebSrvFunctionsEN();
  if (strJSON === '') {
    return pobjWebSrvFunctionsEN;
  }
  try {
    pobjWebSrvFunctionsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjWebSrvFunctionsEN;
  }
  return pobjWebSrvFunctionsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function WebSrvFunctions_GetCombineCondition(
  objWebSrvFunctionsCond: clsWebSrvFunctionsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_WebSrvFunctionId,
    ) == true
  ) {
    const strComparisonOpWebSrvFunctionId: string =
      objWebSrvFunctionsCond.dicFldComparisonOp[clsWebSrvFunctionsEN.con_WebSrvFunctionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFunctionsEN.con_WebSrvFunctionId,
      objWebSrvFunctionsCond.webSrvFunctionId,
      strComparisonOpWebSrvFunctionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_WebSrvClassId,
    ) == true
  ) {
    const strComparisonOpWebSrvClassId: string =
      objWebSrvFunctionsCond.dicFldComparisonOp[clsWebSrvFunctionsEN.con_WebSrvClassId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFunctionsEN.con_WebSrvClassId,
      objWebSrvFunctionsCond.webSrvClassId,
      strComparisonOpWebSrvClassId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_FunctionName,
    ) == true
  ) {
    const strComparisonOpFunctionName: string =
      objWebSrvFunctionsCond.dicFldComparisonOp[clsWebSrvFunctionsEN.con_FunctionName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFunctionsEN.con_FunctionName,
      objWebSrvFunctionsCond.functionName,
      strComparisonOpFunctionName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_GetCustomAttributes,
    ) == true
  ) {
    const strComparisonOpGetCustomAttributes: string =
      objWebSrvFunctionsCond.dicFldComparisonOp[clsWebSrvFunctionsEN.con_GetCustomAttributes];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsWebSrvFunctionsEN.con_GetCustomAttributes,
      objWebSrvFunctionsCond.getCustomAttributes,
      strComparisonOpGetCustomAttributes,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_FunctionSignature,
    ) == true
  ) {
    const strComparisonOpFunctionSignature: string =
      objWebSrvFunctionsCond.dicFldComparisonOp[clsWebSrvFunctionsEN.con_FunctionSignature];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFunctionsEN.con_FunctionSignature,
      objWebSrvFunctionsCond.functionSignature,
      strComparisonOpFunctionSignature,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_FuncTypeId,
    ) == true
  ) {
    const strComparisonOpFuncTypeId: string =
      objWebSrvFunctionsCond.dicFldComparisonOp[clsWebSrvFunctionsEN.con_FuncTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFunctionsEN.con_FuncTypeId,
      objWebSrvFunctionsCond.funcTypeId,
      strComparisonOpFuncTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_ReturnType,
    ) == true
  ) {
    const strComparisonOpReturnType: string =
      objWebSrvFunctionsCond.dicFldComparisonOp[clsWebSrvFunctionsEN.con_ReturnType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFunctionsEN.con_ReturnType,
      objWebSrvFunctionsCond.returnType,
      strComparisonOpReturnType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_ReturnTypeFullName,
    ) == true
  ) {
    const strComparisonOpReturnTypeFullName: string =
      objWebSrvFunctionsCond.dicFldComparisonOp[clsWebSrvFunctionsEN.con_ReturnTypeFullName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFunctionsEN.con_ReturnTypeFullName,
      objWebSrvFunctionsCond.returnTypeFullName,
      strComparisonOpReturnTypeFullName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_IsKnownType,
    ) == true
  ) {
    if (objWebSrvFunctionsCond.isKnownType == true) {
      strWhereCond += Format(" And {0} = '1'", clsWebSrvFunctionsEN.con_IsKnownType);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsWebSrvFunctionsEN.con_IsKnownType);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_ReturnTypeId,
    ) == true
  ) {
    const strComparisonOpReturnTypeId: string =
      objWebSrvFunctionsCond.dicFldComparisonOp[clsWebSrvFunctionsEN.con_ReturnTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFunctionsEN.con_ReturnTypeId,
      objWebSrvFunctionsCond.returnTypeId,
      strComparisonOpReturnTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_IsAsyncFunc,
    ) == true
  ) {
    if (objWebSrvFunctionsCond.isAsyncFunc == true) {
      strWhereCond += Format(" And {0} = '1'", clsWebSrvFunctionsEN.con_IsAsyncFunc);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsWebSrvFunctionsEN.con_IsAsyncFunc);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_SourceFunction,
    ) == true
  ) {
    const strComparisonOpSourceFunction: string =
      objWebSrvFunctionsCond.dicFldComparisonOp[clsWebSrvFunctionsEN.con_SourceFunction];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFunctionsEN.con_SourceFunction,
      objWebSrvFunctionsCond.sourceFunction,
      strComparisonOpSourceFunction,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_IsGeneCode,
    ) == true
  ) {
    if (objWebSrvFunctionsCond.isGeneCode == true) {
      strWhereCond += Format(" And {0} = '1'", clsWebSrvFunctionsEN.con_IsGeneCode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsWebSrvFunctionsEN.con_IsGeneCode);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_ReturnValueDescription,
    ) == true
  ) {
    const strComparisonOpReturnValueDescription: string =
      objWebSrvFunctionsCond.dicFldComparisonOp[clsWebSrvFunctionsEN.con_ReturnValueDescription];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFunctionsEN.con_ReturnValueDescription,
      objWebSrvFunctionsCond.returnValueDescription,
      strComparisonOpReturnValueDescription,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_FuncParaLst,
    ) == true
  ) {
    const strComparisonOpFuncParaLst: string =
      objWebSrvFunctionsCond.dicFldComparisonOp[clsWebSrvFunctionsEN.con_FuncParaLst];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFunctionsEN.con_FuncParaLst,
      objWebSrvFunctionsCond.funcParaLst,
      strComparisonOpFuncParaLst,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_IsSysFunction,
    ) == true
  ) {
    if (objWebSrvFunctionsCond.isSysFunction == true) {
      strWhereCond += Format(" And {0} = '1'", clsWebSrvFunctionsEN.con_IsSysFunction);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsWebSrvFunctionsEN.con_IsSysFunction);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objWebSrvFunctionsCond.dicFldComparisonOp[clsWebSrvFunctionsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFunctionsEN.con_UpdDate,
      objWebSrvFunctionsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objWebSrvFunctionsCond.dicFldComparisonOp[clsWebSrvFunctionsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFunctionsEN.con_UpdUser,
      objWebSrvFunctionsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objWebSrvFunctionsCond.dicFldComparisonOp,
      clsWebSrvFunctionsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objWebSrvFunctionsCond.dicFldComparisonOp[clsWebSrvFunctionsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsWebSrvFunctionsEN.con_Memo,
      objWebSrvFunctionsCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--WebSrvFunctions(WebSrv函数),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFunctionName: 功能名称(要求唯一的字段)
 * @param strWebSrvClassId: 类Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function WebSrvFunctions_GetUniCondStr(objWebSrvFunctionsEN: clsWebSrvFunctionsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FunctionName = '{0}'", objWebSrvFunctionsEN.functionName);
  strWhereCond += Format(" and WebSrvClassId = '{0}'", objWebSrvFunctionsEN.webSrvClassId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--WebSrvFunctions(WebSrv函数),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFunctionName: 功能名称(要求唯一的字段)
 * @param strWebSrvClassId: 类Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function WebSrvFunctions_GetUniCondStr4Update(
  objWebSrvFunctionsEN: clsWebSrvFunctionsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and WebSrvFunctionId <> '{0}'", objWebSrvFunctionsEN.webSrvFunctionId);
  strWhereCond += Format(" and FunctionName = '{0}'", objWebSrvFunctionsEN.functionName);
  strWhereCond += Format(" and WebSrvClassId = '{0}'", objWebSrvFunctionsEN.webSrvClassId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objWebSrvFunctionsENS:源对象
 * @param objWebSrvFunctionsENT:目标对象
 */
export function WebSrvFunctions_GetObjFromJsonObj(
  objWebSrvFunctionsENS: clsWebSrvFunctionsEN,
): clsWebSrvFunctionsEN {
  const objWebSrvFunctionsENT: clsWebSrvFunctionsEN = new clsWebSrvFunctionsEN();
  ObjectAssign(objWebSrvFunctionsENT, objWebSrvFunctionsENS);
  return objWebSrvFunctionsENT;
}
