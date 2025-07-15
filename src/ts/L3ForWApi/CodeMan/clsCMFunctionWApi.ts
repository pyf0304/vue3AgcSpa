/**
 * 类名:clsCMFunctionWApi
 * 表名:CMFunction(00050502)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/05 22:36:20
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
 * CM函数(CMFunction)
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
import { clsCMFunctionEN } from '@/ts/L0Entity/CodeMan/clsCMFunctionEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cMFunction_Controller = 'CMFunctionApi';
export const cMFunction_ConstructorName = 'cMFunction';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCmFunctionId:关键字
 * @returns 对象
 **/
export async function CMFunction_GetObjByCmFunctionIdAsync(
  strCmFunctionId: string,
): Promise<clsCMFunctionEN | null> {
  const strThisFuncName = 'GetObjByCmFunctionIdAsync';

  if (IsNullOrEmpty(strCmFunctionId) == true) {
    const strMsg = Format(
      '参数:[strCmFunctionId]不能为空!(In clsCMFunctionWApi.GetObjByCmFunctionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmFunctionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmFunctionId]的长度:[{0}]不正确!(clsCMFunctionWApi.GetObjByCmFunctionIdAsync)',
      strCmFunctionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCmFunctionId';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmFunctionId,
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
      const objCMFunction = CMFunction_GetObjFromJsonObj(returnObj);
      return objCMFunction;
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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
 * @param strCmFunctionId:所给的关键字
 * @returns 对象
 */
export async function CMFunction_GetObjByCmFunctionIdCache(
  strCmFunctionId: string,
  strCmClassId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCmFunctionIdCache';

  if (IsNullOrEmpty(strCmFunctionId) == true) {
    const strMsg = Format(
      '参数:[strCmFunctionId]不能为空!(In clsCMFunctionWApi.GetObjByCmFunctionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmFunctionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmFunctionId]的长度:[{0}]不正确!(clsCMFunctionWApi.GetObjByCmFunctionIdCache)',
      strCmFunctionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCMFunctionObjLstCache = await CMFunction_GetObjLstCache(strCmClassId);
  try {
    const arrCMFunctionSel = arrCMFunctionObjLstCache.filter(
      (x) => x.cmFunctionId == strCmFunctionId,
    );
    let objCMFunction: clsCMFunctionEN;
    if (arrCMFunctionSel.length > 0) {
      objCMFunction = arrCMFunctionSel[0];
      return objCMFunction;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCMFunctionConst = await CMFunction_GetObjByCmFunctionIdAsync(strCmFunctionId);
        if (objCMFunctionConst != null) {
          CMFunction_ReFreshThisCache(strCmClassId);
          return objCMFunctionConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCmFunctionId,
      cMFunction_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCmFunctionId:所给的关键字
 * @returns 对象
 */
export async function CMFunction_GetObjByCmFunctionIdlocalStorage(strCmFunctionId: string) {
  const strThisFuncName = 'GetObjByCmFunctionIdlocalStorage';

  if (IsNullOrEmpty(strCmFunctionId) == true) {
    const strMsg = Format(
      '参数:[strCmFunctionId]不能为空!(In clsCMFunctionWApi.GetObjByCmFunctionIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmFunctionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmFunctionId]的长度:[{0}]不正确!(clsCMFunctionWApi.GetObjByCmFunctionIdlocalStorage)',
      strCmFunctionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsCMFunctionEN._CurrTabName, strCmFunctionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objCMFunctionCache: clsCMFunctionEN = JSON.parse(strTempObj);
    return objCMFunctionCache;
  }
  try {
    const objCMFunction = await CMFunction_GetObjByCmFunctionIdAsync(strCmFunctionId);
    if (objCMFunction != null) {
      localStorage.setItem(strKey, JSON.stringify(objCMFunction));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objCMFunction;
    }
    return objCMFunction;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCmFunctionId,
      cMFunction_ConstructorName,
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
 * @param objCMFunction:所给的对象
 * @returns 对象
 */
export async function CMFunction_UpdateObjInLstCache(
  objCMFunction: clsCMFunctionEN,
  strCmClassId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCMFunctionObjLstCache = await CMFunction_GetObjLstCache(strCmClassId);
    const obj = arrCMFunctionObjLstCache.find(
      (x) =>
        x.functionName == objCMFunction.functionName &&
        x.funcParaLst == objCMFunction.funcParaLst &&
        x.cmClassId == objCMFunction.cmClassId,
    );
    if (obj != null) {
      objCMFunction.cmFunctionId = obj.cmFunctionId;
      ObjectAssign(obj, objCMFunction);
    } else {
      arrCMFunctionObjLstCache.push(objCMFunction);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      cMFunction_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCmFunctionId:所给的关键字
 * @returns 对象
 */
export async function CMFunction_GetNameByCmFunctionIdCache(
  strCmFunctionId: string,
  strCmClassId: string,
) {
  if (IsNullOrEmpty(strCmFunctionId) == true) {
    const strMsg = Format(
      '参数:[strCmFunctionId]不能为空!(In clsCMFunctionWApi.GetNameByCmFunctionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmFunctionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmFunctionId]的长度:[{0}]不正确!(clsCMFunctionWApi.GetNameByCmFunctionIdCache)',
      strCmFunctionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCMFunctionObjLstCache = await CMFunction_GetObjLstCache(strCmClassId);
  if (arrCMFunctionObjLstCache == null) return '';
  try {
    const arrCMFunctionSel = arrCMFunctionObjLstCache.filter(
      (x) => x.cmFunctionId == strCmFunctionId,
    );
    let objCMFunction: clsCMFunctionEN;
    if (arrCMFunctionSel.length > 0) {
      objCMFunction = arrCMFunctionSel[0];
      return objCMFunction.functionName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strCmFunctionId,
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
 @param strCmClassId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function CMFunction_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strCmClassIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strCmClassIdClassfy) == true) {
    const strMsg = Format('参数:[strCmClassIdClassfy]不能为空!(In clsCMFunctionWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmClassIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmClassIdClassfy]的长度:[{0}]不正确!(clsCMFunctionWApi.func)',
      strCmClassIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsCMFunctionEN.con_CmFunctionId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCMFunctionEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsCMFunctionEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCmFunctionId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objCMFunction = await CMFunction_GetObjByCmFunctionIdCache(
    strCmFunctionId,
    strCmClassIdClassfy,
  );
  if (objCMFunction == null) return '';
  if (objCMFunction.GetFldValue(strOutFldName) == null) return '';
  return objCMFunction.GetFldValue(strOutFldName).toString();
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
export function CMFunction_SortFunDefa(a: clsCMFunctionEN, b: clsCMFunctionEN): number {
  return a.cmFunctionId.localeCompare(b.cmFunctionId);
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
export function CMFunction_SortFunDefa2Fld(a: clsCMFunctionEN, b: clsCMFunctionEN): number {
  if (a.cmClassId == b.cmClassId) return a.functionName.localeCompare(b.functionName);
  else return a.cmClassId.localeCompare(b.cmClassId);
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
export function CMFunction_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMFunctionEN.con_CmFunctionId:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          return a.cmFunctionId.localeCompare(b.cmFunctionId);
        };
      case clsCMFunctionEN.con_CmClassId:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          return a.cmClassId.localeCompare(b.cmClassId);
        };
      case clsCMFunctionEN.con_FunctionName:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          return a.functionName.localeCompare(b.functionName);
        };
      case clsCMFunctionEN.con_FuncContent:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.funcContent == null) return -1;
          if (b.funcContent == null) return 1;
          return a.funcContent.localeCompare(b.funcContent);
        };
      case clsCMFunctionEN.con_KeyWords:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.keyWords == null) return -1;
          if (b.keyWords == null) return 1;
          return a.keyWords.localeCompare(b.keyWords);
        };
      case clsCMFunctionEN.con_FuncParaLst:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.funcParaLst == null) return -1;
          if (b.funcParaLst == null) return 1;
          return a.funcParaLst.localeCompare(b.funcParaLst);
        };
      case clsCMFunctionEN.con_FuncComments:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.funcComments == null) return -1;
          if (b.funcComments == null) return 1;
          return a.funcComments.localeCompare(b.funcComments);
        };
      case clsCMFunctionEN.con_FunctionSignature:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.functionSignature == null) return -1;
          if (b.functionSignature == null) return 1;
          return a.functionSignature.localeCompare(b.functionSignature);
        };
      case clsCMFunctionEN.con_FuncTypeId:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.funcTypeId == null) return -1;
          if (b.funcTypeId == null) return 1;
          return a.funcTypeId.localeCompare(b.funcTypeId);
        };
      case clsCMFunctionEN.con_ReturnType:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.returnType == null) return -1;
          if (b.returnType == null) return 1;
          return a.returnType.localeCompare(b.returnType);
        };
      case clsCMFunctionEN.con_ReturnTypeFullName:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.returnTypeFullName == null) return -1;
          if (b.returnTypeFullName == null) return 1;
          return a.returnTypeFullName.localeCompare(b.returnTypeFullName);
        };
      case clsCMFunctionEN.con_IsKnownType:
        return (a: clsCMFunctionEN) => {
          if (a.isKnownType == true) return 1;
          else return -1;
        };
      case clsCMFunctionEN.con_ReturnTypeId:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.returnTypeId == null) return -1;
          if (b.returnTypeId == null) return 1;
          return a.returnTypeId.localeCompare(b.returnTypeId);
        };
      case clsCMFunctionEN.con_IsAsyncFunc:
        return (a: clsCMFunctionEN) => {
          if (a.isAsyncFunc == true) return 1;
          else return -1;
        };
      case clsCMFunctionEN.con_SourceFunction:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.sourceFunction == null) return -1;
          if (b.sourceFunction == null) return 1;
          return a.sourceFunction.localeCompare(b.sourceFunction);
        };
      case clsCMFunctionEN.con_IsGeneCode:
        return (a: clsCMFunctionEN) => {
          if (a.isGeneCode == true) return 1;
          else return -1;
        };
      case clsCMFunctionEN.con_ReturnValueDescription:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.returnValueDescription == null) return -1;
          if (b.returnValueDescription == null) return 1;
          return a.returnValueDescription.localeCompare(b.returnValueDescription);
        };
      case clsCMFunctionEN.con_IsSysFunction:
        return (a: clsCMFunctionEN) => {
          if (a.isSysFunction == true) return 1;
          else return -1;
        };
      case clsCMFunctionEN.con_GetCustomAttributes:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          return a.getCustomAttributes - b.getCustomAttributes;
        };
      case clsCMFunctionEN.con_ClassNameLst:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.classNameLst == null) return -1;
          if (b.classNameLst == null) return 1;
          return a.classNameLst.localeCompare(b.classNameLst);
        };
      case clsCMFunctionEN.con_UpdDate:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCMFunctionEN.con_UpdUser:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCMFunctionEN.con_Memo:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsCMFunctionEN.con_IsSynchToServer:
        return (a: clsCMFunctionEN) => {
          if (a.isSynchToServer == true) return 1;
          else return -1;
        };
      case clsCMFunctionEN.con_SynchToServerDate:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.synchToServerDate == null) return -1;
          if (b.synchToServerDate == null) return 1;
          return a.synchToServerDate.localeCompare(b.synchToServerDate);
        };
      case clsCMFunctionEN.con_SynchToServerUser:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.synchToServerUser == null) return -1;
          if (b.synchToServerUser == null) return 1;
          return a.synchToServerUser.localeCompare(b.synchToServerUser);
        };
      case clsCMFunctionEN.con_IsSynchToClient:
        return (a: clsCMFunctionEN) => {
          if (a.isSynchToClient == true) return 1;
          else return -1;
        };
      case clsCMFunctionEN.con_SynchToClientDate:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.synchToClientDate == null) return -1;
          if (b.synchToClientDate == null) return 1;
          return a.synchToClientDate.localeCompare(b.synchToClientDate);
        };
      case clsCMFunctionEN.con_SynchToClientUser:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.synchToClientUser == null) return -1;
          if (b.synchToClientUser == null) return 1;
          return a.synchToClientUser.localeCompare(b.synchToClientUser);
        };
      case clsCMFunctionEN.con_SynSource:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (a.synSource == null) return -1;
          if (b.synSource == null) return 1;
          return a.synSource.localeCompare(b.synSource);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMFunction]中不存在!(in ${cMFunction_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCMFunctionEN.con_CmFunctionId:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          return b.cmFunctionId.localeCompare(a.cmFunctionId);
        };
      case clsCMFunctionEN.con_CmClassId:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          return b.cmClassId.localeCompare(a.cmClassId);
        };
      case clsCMFunctionEN.con_FunctionName:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          return b.functionName.localeCompare(a.functionName);
        };
      case clsCMFunctionEN.con_FuncContent:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.funcContent == null) return -1;
          if (a.funcContent == null) return 1;
          return b.funcContent.localeCompare(a.funcContent);
        };
      case clsCMFunctionEN.con_KeyWords:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.keyWords == null) return -1;
          if (a.keyWords == null) return 1;
          return b.keyWords.localeCompare(a.keyWords);
        };
      case clsCMFunctionEN.con_FuncParaLst:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.funcParaLst == null) return -1;
          if (a.funcParaLst == null) return 1;
          return b.funcParaLst.localeCompare(a.funcParaLst);
        };
      case clsCMFunctionEN.con_FuncComments:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.funcComments == null) return -1;
          if (a.funcComments == null) return 1;
          return b.funcComments.localeCompare(a.funcComments);
        };
      case clsCMFunctionEN.con_FunctionSignature:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.functionSignature == null) return -1;
          if (a.functionSignature == null) return 1;
          return b.functionSignature.localeCompare(a.functionSignature);
        };
      case clsCMFunctionEN.con_FuncTypeId:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.funcTypeId == null) return -1;
          if (a.funcTypeId == null) return 1;
          return b.funcTypeId.localeCompare(a.funcTypeId);
        };
      case clsCMFunctionEN.con_ReturnType:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.returnType == null) return -1;
          if (a.returnType == null) return 1;
          return b.returnType.localeCompare(a.returnType);
        };
      case clsCMFunctionEN.con_ReturnTypeFullName:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.returnTypeFullName == null) return -1;
          if (a.returnTypeFullName == null) return 1;
          return b.returnTypeFullName.localeCompare(a.returnTypeFullName);
        };
      case clsCMFunctionEN.con_IsKnownType:
        return (b: clsCMFunctionEN) => {
          if (b.isKnownType == true) return 1;
          else return -1;
        };
      case clsCMFunctionEN.con_ReturnTypeId:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.returnTypeId == null) return -1;
          if (a.returnTypeId == null) return 1;
          return b.returnTypeId.localeCompare(a.returnTypeId);
        };
      case clsCMFunctionEN.con_IsAsyncFunc:
        return (b: clsCMFunctionEN) => {
          if (b.isAsyncFunc == true) return 1;
          else return -1;
        };
      case clsCMFunctionEN.con_SourceFunction:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.sourceFunction == null) return -1;
          if (a.sourceFunction == null) return 1;
          return b.sourceFunction.localeCompare(a.sourceFunction);
        };
      case clsCMFunctionEN.con_IsGeneCode:
        return (b: clsCMFunctionEN) => {
          if (b.isGeneCode == true) return 1;
          else return -1;
        };
      case clsCMFunctionEN.con_ReturnValueDescription:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.returnValueDescription == null) return -1;
          if (a.returnValueDescription == null) return 1;
          return b.returnValueDescription.localeCompare(a.returnValueDescription);
        };
      case clsCMFunctionEN.con_IsSysFunction:
        return (b: clsCMFunctionEN) => {
          if (b.isSysFunction == true) return 1;
          else return -1;
        };
      case clsCMFunctionEN.con_GetCustomAttributes:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          return b.getCustomAttributes - a.getCustomAttributes;
        };
      case clsCMFunctionEN.con_ClassNameLst:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.classNameLst == null) return -1;
          if (a.classNameLst == null) return 1;
          return b.classNameLst.localeCompare(a.classNameLst);
        };
      case clsCMFunctionEN.con_UpdDate:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCMFunctionEN.con_UpdUser:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCMFunctionEN.con_Memo:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsCMFunctionEN.con_IsSynchToServer:
        return (b: clsCMFunctionEN) => {
          if (b.isSynchToServer == true) return 1;
          else return -1;
        };
      case clsCMFunctionEN.con_SynchToServerDate:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.synchToServerDate == null) return -1;
          if (a.synchToServerDate == null) return 1;
          return b.synchToServerDate.localeCompare(a.synchToServerDate);
        };
      case clsCMFunctionEN.con_SynchToServerUser:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.synchToServerUser == null) return -1;
          if (a.synchToServerUser == null) return 1;
          return b.synchToServerUser.localeCompare(a.synchToServerUser);
        };
      case clsCMFunctionEN.con_IsSynchToClient:
        return (b: clsCMFunctionEN) => {
          if (b.isSynchToClient == true) return 1;
          else return -1;
        };
      case clsCMFunctionEN.con_SynchToClientDate:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.synchToClientDate == null) return -1;
          if (a.synchToClientDate == null) return 1;
          return b.synchToClientDate.localeCompare(a.synchToClientDate);
        };
      case clsCMFunctionEN.con_SynchToClientUser:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.synchToClientUser == null) return -1;
          if (a.synchToClientUser == null) return 1;
          return b.synchToClientUser.localeCompare(a.synchToClientUser);
        };
      case clsCMFunctionEN.con_SynSource:
        return (a: clsCMFunctionEN, b: clsCMFunctionEN) => {
          if (b.synSource == null) return -1;
          if (a.synSource == null) return 1;
          return b.synSource.localeCompare(a.synSource);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMFunction]中不存在!(in ${cMFunction_ConstructorName}.${strThisFuncName})`;
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
export async function CMFunction_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCMFunctionEN.con_CmFunctionId:
      return (obj: clsCMFunctionEN) => {
        return obj.cmFunctionId === value;
      };
    case clsCMFunctionEN.con_CmClassId:
      return (obj: clsCMFunctionEN) => {
        return obj.cmClassId === value;
      };
    case clsCMFunctionEN.con_FunctionName:
      return (obj: clsCMFunctionEN) => {
        return obj.functionName === value;
      };
    case clsCMFunctionEN.con_FuncContent:
      return (obj: clsCMFunctionEN) => {
        return obj.funcContent === value;
      };
    case clsCMFunctionEN.con_KeyWords:
      return (obj: clsCMFunctionEN) => {
        return obj.keyWords === value;
      };
    case clsCMFunctionEN.con_FuncParaLst:
      return (obj: clsCMFunctionEN) => {
        return obj.funcParaLst === value;
      };
    case clsCMFunctionEN.con_FuncComments:
      return (obj: clsCMFunctionEN) => {
        return obj.funcComments === value;
      };
    case clsCMFunctionEN.con_FunctionSignature:
      return (obj: clsCMFunctionEN) => {
        return obj.functionSignature === value;
      };
    case clsCMFunctionEN.con_FuncTypeId:
      return (obj: clsCMFunctionEN) => {
        return obj.funcTypeId === value;
      };
    case clsCMFunctionEN.con_ReturnType:
      return (obj: clsCMFunctionEN) => {
        return obj.returnType === value;
      };
    case clsCMFunctionEN.con_ReturnTypeFullName:
      return (obj: clsCMFunctionEN) => {
        return obj.returnTypeFullName === value;
      };
    case clsCMFunctionEN.con_IsKnownType:
      return (obj: clsCMFunctionEN) => {
        return obj.isKnownType === value;
      };
    case clsCMFunctionEN.con_ReturnTypeId:
      return (obj: clsCMFunctionEN) => {
        return obj.returnTypeId === value;
      };
    case clsCMFunctionEN.con_IsAsyncFunc:
      return (obj: clsCMFunctionEN) => {
        return obj.isAsyncFunc === value;
      };
    case clsCMFunctionEN.con_SourceFunction:
      return (obj: clsCMFunctionEN) => {
        return obj.sourceFunction === value;
      };
    case clsCMFunctionEN.con_IsGeneCode:
      return (obj: clsCMFunctionEN) => {
        return obj.isGeneCode === value;
      };
    case clsCMFunctionEN.con_ReturnValueDescription:
      return (obj: clsCMFunctionEN) => {
        return obj.returnValueDescription === value;
      };
    case clsCMFunctionEN.con_IsSysFunction:
      return (obj: clsCMFunctionEN) => {
        return obj.isSysFunction === value;
      };
    case clsCMFunctionEN.con_GetCustomAttributes:
      return (obj: clsCMFunctionEN) => {
        return obj.getCustomAttributes === value;
      };
    case clsCMFunctionEN.con_ClassNameLst:
      return (obj: clsCMFunctionEN) => {
        return obj.classNameLst === value;
      };
    case clsCMFunctionEN.con_UpdDate:
      return (obj: clsCMFunctionEN) => {
        return obj.updDate === value;
      };
    case clsCMFunctionEN.con_UpdUser:
      return (obj: clsCMFunctionEN) => {
        return obj.updUser === value;
      };
    case clsCMFunctionEN.con_Memo:
      return (obj: clsCMFunctionEN) => {
        return obj.memo === value;
      };
    case clsCMFunctionEN.con_IsSynchToServer:
      return (obj: clsCMFunctionEN) => {
        return obj.isSynchToServer === value;
      };
    case clsCMFunctionEN.con_SynchToServerDate:
      return (obj: clsCMFunctionEN) => {
        return obj.synchToServerDate === value;
      };
    case clsCMFunctionEN.con_SynchToServerUser:
      return (obj: clsCMFunctionEN) => {
        return obj.synchToServerUser === value;
      };
    case clsCMFunctionEN.con_IsSynchToClient:
      return (obj: clsCMFunctionEN) => {
        return obj.isSynchToClient === value;
      };
    case clsCMFunctionEN.con_SynchToClientDate:
      return (obj: clsCMFunctionEN) => {
        return obj.synchToClientDate === value;
      };
    case clsCMFunctionEN.con_SynchToClientUser:
      return (obj: clsCMFunctionEN) => {
        return obj.synchToClientUser === value;
      };
    case clsCMFunctionEN.con_SynSource:
      return (obj: clsCMFunctionEN) => {
        return obj.synSource === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CMFunction]中不存在!(in ${cMFunction_ConstructorName}.${strThisFuncName})`;
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
 @param strCmClassId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function CMFunction_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCmClassIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCmClassIdClassfy) == true) {
    const strMsg = Format('参数:[strCmClassIdClassfy]不能为空!(In clsCMFunctionWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmClassIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmClassIdClassfy]的长度:[{0}]不正确!(clsCMFunctionWApi.funcKey)',
      strCmClassIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsCMFunctionEN.con_CmFunctionId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrCMFunction = await CMFunction_GetObjLstCache(strCmClassIdClassfy);
  if (arrCMFunction == null) return [];
  let arrCMFunctionSel = arrCMFunction;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCMFunctionSel = arrCMFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCMFunctionSel = arrCMFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCMFunctionSel = arrCMFunctionSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCMFunctionSel = arrCMFunctionSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCMFunctionSel = arrCMFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrCMFunctionSel = arrCMFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCMFunctionSel = arrCMFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCMFunctionSel = arrCMFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCMFunctionSel = arrCMFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCMFunctionSel = arrCMFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrCMFunctionSel.length == 0) return [];
  return arrCMFunctionSel.map((x) => x.cmFunctionId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMFunction_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
export async function CMFunction_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
export async function CMFunction_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCMFunctionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

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
      const objCMFunction = CMFunction_GetObjFromJsonObj(returnObj);
      return objCMFunction;
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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
export async function CMFunction_GetObjLstClientCache(strCmClassId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCMFunctionEN.WhereFormat) == false) {
    strWhereCond = Format(clsCMFunctionEN.WhereFormat, strCmClassId);
  } else {
    strWhereCond = Format("CmClassId='{0}'", strCmClassId);
  }
  const strKey = Format('{0}_{1}', clsCMFunctionEN._CurrTabName, strCmClassId);
  if (IsNullOrEmpty(clsCMFunctionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMFunctionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrCMFunctionExObjLstCache: Array<clsCMFunctionEN> = CacheHelper.Get(strKey);
    const arrCMFunctionObjLstT = CMFunction_GetObjLstByJSONObjLst(arrCMFunctionExObjLstCache);
    return arrCMFunctionObjLstT;
  }
  try {
    const arrCMFunctionExObjLst = await CMFunction_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCMFunctionExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMFunctionExObjLst.length,
    );
    console.log(strInfo);
    return arrCMFunctionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMFunction_ConstructorName,
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
export async function CMFunction_GetObjLstlocalStorage(strCmClassId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCMFunctionEN.WhereFormat) == false) {
    strWhereCond = Format(clsCMFunctionEN.WhereFormat, strCmClassId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsCMFunctionEN.con_CmClassId, strCmClassId);
  }
  const strKey = Format('{0}_{1}', clsCMFunctionEN._CurrTabName, strCmClassId);
  if (IsNullOrEmpty(clsCMFunctionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMFunctionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCMFunctionExObjLstCache: Array<clsCMFunctionEN> = JSON.parse(strTempObjLst);
    const arrCMFunctionObjLstT = CMFunction_GetObjLstByJSONObjLst(arrCMFunctionExObjLstCache);
    return arrCMFunctionObjLstT;
  }
  try {
    const arrCMFunctionExObjLst = await CMFunction_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCMFunctionExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMFunctionExObjLst.length,
    );
    console.log(strInfo);
    return arrCMFunctionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMFunction_ConstructorName,
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
export async function CMFunction_GetObjLstlocalStoragePureCache(strCmClassId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsCMFunctionEN._CurrTabName, strCmClassId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCMFunctionObjLstCache: Array<clsCMFunctionEN> = JSON.parse(strTempObjLst);
    return arrCMFunctionObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CMFunction_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCMFunctionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

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
          cMFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
export async function CMFunction_GetObjLstsessionStorage(strCmClassId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCMFunctionEN.WhereFormat) == false) {
    strWhereCond = Format(clsCMFunctionEN.WhereFormat, strCmClassId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsCMFunctionEN.con_CmClassId, strCmClassId);
  }
  const strKey = Format('{0}_{1}', clsCMFunctionEN._CurrTabName, strCmClassId);
  if (IsNullOrEmpty(clsCMFunctionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMFunctionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCMFunctionExObjLstCache: Array<clsCMFunctionEN> = JSON.parse(strTempObjLst);
    const arrCMFunctionObjLstT = CMFunction_GetObjLstByJSONObjLst(arrCMFunctionExObjLstCache);
    return arrCMFunctionObjLstT;
  }
  try {
    const arrCMFunctionExObjLst = await CMFunction_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCMFunctionExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMFunctionExObjLst.length,
    );
    console.log(strInfo);
    return arrCMFunctionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMFunction_ConstructorName,
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
export async function CMFunction_GetObjLstsessionStoragePureCache(strCmClassId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsCMFunctionEN._CurrTabName, strCmClassId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCMFunctionObjLstCache: Array<clsCMFunctionEN> = JSON.parse(strTempObjLst);
    return arrCMFunctionObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CMFunction_GetObjLstCache(
  strCmClassId: string,
): Promise<Array<clsCMFunctionEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strCmClassId) == true) {
    const strMsg = Format(
      '参数:[strCmClassId]不能为空！(In clsCMFunctionWApi.CMFunction_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmClassId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmClassId]的长度:[{0}]不正确！(clsCMFunctionWApi.CMFunction_GetObjLstCache)',
      strCmClassId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrCMFunctionObjLstCache;
  switch (clsCMFunctionEN.CacheModeId) {
    case '04': //sessionStorage
      arrCMFunctionObjLstCache = await CMFunction_GetObjLstsessionStorage(strCmClassId);
      break;
    case '03': //localStorage
      arrCMFunctionObjLstCache = await CMFunction_GetObjLstlocalStorage(strCmClassId);
      break;
    case '02': //ClientCache
      arrCMFunctionObjLstCache = await CMFunction_GetObjLstClientCache(strCmClassId);
      break;
    default:
      arrCMFunctionObjLstCache = await CMFunction_GetObjLstClientCache(strCmClassId);
      break;
  }
  return arrCMFunctionObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CMFunction_GetObjLstPureCache(strCmClassId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCMFunctionObjLstCache;
  switch (clsCMFunctionEN.CacheModeId) {
    case '04': //sessionStorage
      arrCMFunctionObjLstCache = await CMFunction_GetObjLstsessionStoragePureCache(strCmClassId);
      break;
    case '03': //localStorage
      arrCMFunctionObjLstCache = await CMFunction_GetObjLstlocalStoragePureCache(strCmClassId);
      break;
    case '02': //ClientCache
      arrCMFunctionObjLstCache = null;
      break;
    default:
      arrCMFunctionObjLstCache = null;
      break;
  }
  return arrCMFunctionObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCmFunctionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CMFunction_GetSubObjLstCache(
  objCMFunctionCond: clsCMFunctionEN,
  strCmClassId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCMFunctionObjLstCache = await CMFunction_GetObjLstCache(strCmClassId);
  let arrCMFunctionSel = arrCMFunctionObjLstCache;
  if (objCMFunctionCond.sfFldComparisonOp == null || objCMFunctionCond.sfFldComparisonOp == '')
    return arrCMFunctionSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCMFunctionCond.sfFldComparisonOp,
  );
  //console.log("clsCMFunctionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCMFunctionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMFunctionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrCMFunctionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCMFunctionCond),
      cMFunction_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCMFunctionEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCmFunctionId:关键字列表
 * @returns 对象列表
 **/
export async function CMFunction_GetObjLstByCmFunctionIdLstAsync(
  arrCmFunctionId: Array<string>,
): Promise<Array<clsCMFunctionEN>> {
  const strThisFuncName = 'GetObjLstByCmFunctionIdLstAsync';
  const strAction = 'GetObjLstByCmFunctionIdLst';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCmFunctionId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          cMFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
 * @param arrstrCmFunctionIdLst:关键字列表
 * @returns 对象列表
 */
export async function CMFunction_GetObjLstByCmFunctionIdLstCache(
  arrCmFunctionIdLst: Array<string>,
  strCmClassId: string,
) {
  const strThisFuncName = 'GetObjLstByCmFunctionIdLstCache';
  try {
    const arrCMFunctionObjLstCache = await CMFunction_GetObjLstCache(strCmClassId);
    const arrCMFunctionSel = arrCMFunctionObjLstCache.filter(
      (x) => arrCmFunctionIdLst.indexOf(x.cmFunctionId) > -1,
    );
    return arrCMFunctionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCmFunctionIdLst.join(','),
      cMFunction_ConstructorName,
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
export async function CMFunction_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCMFunctionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

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
          cMFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
export async function CMFunction_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCMFunctionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

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
          cMFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
export async function CMFunction_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCmClassId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMFunctionEN>();
  const arrCMFunctionObjLstCache = await CMFunction_GetObjLstCache(strCmClassId);
  if (arrCMFunctionObjLstCache.length == 0) return arrCMFunctionObjLstCache;
  let arrCMFunctionSel = arrCMFunctionObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objCMFunctionCond = new clsCMFunctionEN();
  ObjectAssign(objCMFunctionCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsCMFunctionWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMFunctionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCMFunctionSel.length == 0) return arrCMFunctionSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCMFunctionSel = arrCMFunctionSel.sort(CMFunction_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCMFunctionSel = arrCMFunctionSel.sort(objPagerPara.sortFun);
    }
    arrCMFunctionSel = arrCMFunctionSel.slice(intStart, intEnd);
    return arrCMFunctionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cMFunction_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCMFunctionEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function CMFunction_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCMFunctionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMFunctionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

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
          cMFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
 * @param strCmFunctionId:关键字
 * @returns 获取删除的结果
 **/
export async function CMFunction_DelRecordAsync(strCmFunctionId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cMFunction_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strCmFunctionId);

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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
 * @param arrCmFunctionId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CMFunction_DelCMFunctionsAsync(
  arrCmFunctionId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelCMFunctionsAsync';
  const strAction = 'DelCMFunctions';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCmFunctionId, config);
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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
export async function CMFunction_DelCMFunctionsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelCMFunctionsByCondAsync';
  const strAction = 'DelCMFunctionsByCond';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
 * @param objCMFunctionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFunction_AddNewRecordAsync(
  objCMFunctionEN: clsCMFunctionEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objCMFunctionEN);
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFunctionEN, config);
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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
 * @param objCMFunctionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFunction_AddNewRecordWithMaxIdAsync(
  objCMFunctionEN: clsCMFunctionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFunctionEN, config);
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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
 * @param objCMFunctionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CMFunction_AddNewRecordWithReturnKeyAsync(
  objCMFunctionEN: clsCMFunctionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFunctionEN, config);
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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
 * @param objCMFunctionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CMFunction_UpdateRecordAsync(
  objCMFunctionEN: clsCMFunctionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCMFunctionEN.sfUpdFldSetStr === undefined ||
    objCMFunctionEN.sfUpdFldSetStr === null ||
    objCMFunctionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMFunctionEN.cmFunctionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFunctionEN, config);
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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
 * @param objCMFunctionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMFunction_UpdateWithConditionAsync(
  objCMFunctionEN: clsCMFunctionEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCMFunctionEN.sfUpdFldSetStr === undefined ||
    objCMFunctionEN.sfUpdFldSetStr === null ||
    objCMFunctionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMFunctionEN.cmFunctionId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);
  objCMFunctionEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFunctionEN, config);
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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
 * @param objstrCmFunctionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CMFunction_IsExistRecordCache(
  objCMFunctionCond: clsCMFunctionEN,
  strCmClassId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCMFunctionObjLstCache = await CMFunction_GetObjLstCache(strCmClassId);
  if (arrCMFunctionObjLstCache == null) return false;
  let arrCMFunctionSel = arrCMFunctionObjLstCache;
  if (objCMFunctionCond.sfFldComparisonOp == null || objCMFunctionCond.sfFldComparisonOp == '')
    return arrCMFunctionSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCMFunctionCond.sfFldComparisonOp,
  );
  //console.log("clsCMFunctionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCMFunctionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMFunctionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCMFunctionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCMFunctionCond),
      cMFunction_ConstructorName,
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
export async function CMFunction_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
 * @param strCmFunctionId:所给的关键字
 * @returns 对象
 */
export async function CMFunction_IsExistCache(strCmFunctionId: string, strCmClassId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrCMFunctionObjLstCache = await CMFunction_GetObjLstCache(strCmClassId);
  if (arrCMFunctionObjLstCache == null) return false;
  try {
    const arrCMFunctionSel = arrCMFunctionObjLstCache.filter(
      (x) => x.cmFunctionId == strCmFunctionId,
    );
    if (arrCMFunctionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCmFunctionId,
      cMFunction_ConstructorName,
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
 * @param strCmFunctionId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CMFunction_IsExistAsync(strCmFunctionId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmFunctionId,
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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
export async function CMFunction_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
 * @param objCMFunctionCond:条件对象
 * @returns 对象列表记录数
 */
export async function CMFunction_GetRecCountByCondCache(
  objCMFunctionCond: clsCMFunctionEN,
  strCmClassId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCMFunctionObjLstCache = await CMFunction_GetObjLstCache(strCmClassId);
  if (arrCMFunctionObjLstCache == null) return 0;
  let arrCMFunctionSel = arrCMFunctionObjLstCache;
  if (objCMFunctionCond.sfFldComparisonOp == null || objCMFunctionCond.sfFldComparisonOp == '')
    return arrCMFunctionSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCMFunctionCond.sfFldComparisonOp,
  );
  //console.log("clsCMFunctionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCMFunctionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMFunctionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCMFunctionSel = arrCMFunctionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMFunctionSel = arrCMFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrCMFunctionSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCMFunctionCond),
      cMFunction_ConstructorName,
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
export async function CMFunction_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
export async function CMFunction_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cMFunction_Controller, strAction);

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
        cMFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFunction_ConstructorName,
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
export function CMFunction_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CMFunction_ReFreshCache(strCmClassId: string): void {
  if (IsNullOrEmpty(strCmClassId) == true) {
    const strMsg = Format(
      '参数:[strCmClassId]不能为空!(In clsCMFunctionWApi.clsCMFunctionWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmClassId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmClassId]的长度:[{0}]不正确!(clsCMFunctionWApi.clsCMFunctionWApi.ReFreshCache)',
      strCmClassId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsCMFunctionEN._CurrTabName, strCmClassId);
  switch (clsCMFunctionEN.CacheModeId) {
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
export function CMFunction_ReFreshThisCache(strCmClassId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsCMFunctionEN._CurrTabName, strCmClassId);
    switch (clsCMFunctionEN.CacheModeId) {
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

 * @param strCmClassId:
*/
export async function CMFunction_BindDdl_CmFunctionIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strCmClassId: string,
) {
  if (IsNullOrEmpty(strCmClassId) == true) {
    const strMsg = Format(
      '参数:[strCmClassId]不能为空！(In clsCMFunctionWApi.BindDdl_CmFunctionIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmClassId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmClassId]的长度:[{0}]不正确！(clsCMFunctionWApi.BindDdl_CmFunctionIdInDiv)',
      strCmClassId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CmFunctionIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CmFunctionIdInDivCache");
  const arrObjLstSel = await CMFunction_GetObjLstCache(strCmClassId);
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCMFunctionEN.con_CmFunctionId,
    clsCMFunctionEN.con_FunctionName,
    'CM函数',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMFunction_CheckPropertyNew(pobjCMFunctionEN: clsCMFunctionEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjCMFunctionEN.cmClassId) === true ||
    pobjCMFunctionEN.cmClassId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[类Id]不能为空(In CM函数)!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCMFunctionEN.functionName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[功能名称]不能为空(In CM函数)!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMFunctionEN.cmFunctionId) == false &&
    GetStrLen(pobjCMFunctionEN.cmFunctionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数Id(cmFunctionId)]的长度不能超过8(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.cmFunctionId)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.cmClassId) == false &&
    GetStrLen(pobjCMFunctionEN.cmClassId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[类Id(cmClassId)]的长度不能超过8(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.cmClassId)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.functionName) == false &&
    GetStrLen(pobjCMFunctionEN.functionName) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能名称(functionName)]的长度不能超过200(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.functionName)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.keyWords) == false &&
    GetStrLen(pobjCMFunctionEN.keyWords) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[关键字(keyWords)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.keyWords)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.funcParaLst) == false &&
    GetStrLen(pobjCMFunctionEN.funcParaLst) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数参数列表(funcParaLst)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.funcParaLst)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.functionSignature) == false &&
    GetStrLen(pobjCMFunctionEN.functionSignature) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数签名(functionSignature)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.functionSignature)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.funcTypeId) == false &&
    GetStrLen(pobjCMFunctionEN.funcTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数类型Id(funcTypeId)]的长度不能超过2(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.funcTypeId)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnType) == false &&
    GetStrLen(pobjCMFunctionEN.returnType) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[返回类型(returnType)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.returnType)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnTypeFullName) == false &&
    GetStrLen(pobjCMFunctionEN.returnTypeFullName) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[返回类型全名(returnTypeFullName)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.returnTypeFullName)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnTypeId) == false &&
    GetStrLen(pobjCMFunctionEN.returnTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[返回类型ID(returnTypeId)]的长度不能超过2(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.returnTypeId)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.sourceFunction) == false &&
    GetStrLen(pobjCMFunctionEN.sourceFunction) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[来源函数(sourceFunction)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.sourceFunction)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnValueDescription) == false &&
    GetStrLen(pobjCMFunctionEN.returnValueDescription) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[返回值说明(returnValueDescription)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.returnValueDescription)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.classNameLst) == false &&
    GetStrLen(pobjCMFunctionEN.classNameLst) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[类名列表(classNameLst)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.classNameLst)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.updDate) == false &&
    GetStrLen(pobjCMFunctionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.updDate)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.updUser) == false &&
    GetStrLen(pobjCMFunctionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.updUser)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMFunctionEN.memo) == false && GetStrLen(pobjCMFunctionEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.memo)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToServerDate) == false &&
    GetStrLen(pobjCMFunctionEN.synchToServerDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Server日期(synchToServerDate)]的长度不能超过20(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.synchToServerDate)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToServerUser) == false &&
    GetStrLen(pobjCMFunctionEN.synchToServerUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Server用户(synchToServerUser)]的长度不能超过20(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.synchToServerUser)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToClientDate) == false &&
    GetStrLen(pobjCMFunctionEN.synchToClientDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Client库日期(synchToClientDate)]的长度不能超过20(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.synchToClientDate)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToClientUser) == false &&
    GetStrLen(pobjCMFunctionEN.synchToClientUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步到Client库用户(synchToClientUser)]的长度不能超过20(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.synchToClientUser)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synSource) == false &&
    GetStrLen(pobjCMFunctionEN.synSource) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[同步来源(synSource)]的长度不能超过50(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.synSource)(clsCMFunctionBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCMFunctionEN.cmFunctionId) == false &&
    undefined !== pobjCMFunctionEN.cmFunctionId &&
    tzDataType.isString(pobjCMFunctionEN.cmFunctionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数Id(cmFunctionId)]的值:[$(pobjCMFunctionEN.cmFunctionId)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.cmClassId) == false &&
    undefined !== pobjCMFunctionEN.cmClassId &&
    tzDataType.isString(pobjCMFunctionEN.cmClassId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类Id(cmClassId)]的值:[$(pobjCMFunctionEN.cmClassId)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.functionName) == false &&
    undefined !== pobjCMFunctionEN.functionName &&
    tzDataType.isString(pobjCMFunctionEN.functionName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能名称(functionName)]的值:[$(pobjCMFunctionEN.functionName)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.funcContent) == false &&
    undefined !== pobjCMFunctionEN.funcContent &&
    tzDataType.isString(pobjCMFunctionEN.funcContent) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数内容(funcContent)]的值:[$(pobjCMFunctionEN.funcContent)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.keyWords) == false &&
    undefined !== pobjCMFunctionEN.keyWords &&
    tzDataType.isString(pobjCMFunctionEN.keyWords) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[关键字(keyWords)]的值:[$(pobjCMFunctionEN.keyWords)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.funcParaLst) == false &&
    undefined !== pobjCMFunctionEN.funcParaLst &&
    tzDataType.isString(pobjCMFunctionEN.funcParaLst) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数参数列表(funcParaLst)]的值:[$(pobjCMFunctionEN.funcParaLst)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.funcComments) == false &&
    undefined !== pobjCMFunctionEN.funcComments &&
    tzDataType.isString(pobjCMFunctionEN.funcComments) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数注释(funcComments)]的值:[$(pobjCMFunctionEN.funcComments)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.functionSignature) == false &&
    undefined !== pobjCMFunctionEN.functionSignature &&
    tzDataType.isString(pobjCMFunctionEN.functionSignature) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数签名(functionSignature)]的值:[$(pobjCMFunctionEN.functionSignature)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.funcTypeId) == false &&
    undefined !== pobjCMFunctionEN.funcTypeId &&
    tzDataType.isString(pobjCMFunctionEN.funcTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数类型Id(funcTypeId)]的值:[$(pobjCMFunctionEN.funcTypeId)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnType) == false &&
    undefined !== pobjCMFunctionEN.returnType &&
    tzDataType.isString(pobjCMFunctionEN.returnType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[返回类型(returnType)]的值:[$(pobjCMFunctionEN.returnType)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnTypeFullName) == false &&
    undefined !== pobjCMFunctionEN.returnTypeFullName &&
    tzDataType.isString(pobjCMFunctionEN.returnTypeFullName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[返回类型全名(returnTypeFullName)]的值:[$(pobjCMFunctionEN.returnTypeFullName)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFunctionEN.isKnownType &&
    undefined !== pobjCMFunctionEN.isKnownType &&
    tzDataType.isBoolean(pobjCMFunctionEN.isKnownType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否已知类型(isKnownType)]的值:[$(pobjCMFunctionEN.isKnownType)], 非法,应该为布尔型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnTypeId) == false &&
    undefined !== pobjCMFunctionEN.returnTypeId &&
    tzDataType.isString(pobjCMFunctionEN.returnTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[返回类型ID(returnTypeId)]的值:[$(pobjCMFunctionEN.returnTypeId)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFunctionEN.isAsyncFunc &&
    undefined !== pobjCMFunctionEN.isAsyncFunc &&
    tzDataType.isBoolean(pobjCMFunctionEN.isAsyncFunc) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否异步函数(isAsyncFunc)]的值:[$(pobjCMFunctionEN.isAsyncFunc)], 非法,应该为布尔型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.sourceFunction) == false &&
    undefined !== pobjCMFunctionEN.sourceFunction &&
    tzDataType.isString(pobjCMFunctionEN.sourceFunction) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[来源函数(sourceFunction)]的值:[$(pobjCMFunctionEN.sourceFunction)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFunctionEN.isGeneCode &&
    undefined !== pobjCMFunctionEN.isGeneCode &&
    tzDataType.isBoolean(pobjCMFunctionEN.isGeneCode) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否生成代码(isGeneCode)]的值:[$(pobjCMFunctionEN.isGeneCode)], 非法,应该为布尔型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnValueDescription) == false &&
    undefined !== pobjCMFunctionEN.returnValueDescription &&
    tzDataType.isString(pobjCMFunctionEN.returnValueDescription) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[返回值说明(returnValueDescription)]的值:[$(pobjCMFunctionEN.returnValueDescription)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFunctionEN.isSysFunction &&
    undefined !== pobjCMFunctionEN.isSysFunction &&
    tzDataType.isBoolean(pobjCMFunctionEN.isSysFunction) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否系统函数(isSysFunction)]的值:[$(pobjCMFunctionEN.isSysFunction)], 非法,应该为布尔型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFunctionEN.getCustomAttributes &&
    undefined !== pobjCMFunctionEN.getCustomAttributes &&
    tzDataType.isNumber(pobjCMFunctionEN.getCustomAttributes) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[GetCustomAttributes(getCustomAttributes)]的值:[$(pobjCMFunctionEN.getCustomAttributes)], 非法,应该为数值型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.classNameLst) == false &&
    undefined !== pobjCMFunctionEN.classNameLst &&
    tzDataType.isString(pobjCMFunctionEN.classNameLst) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类名列表(classNameLst)]的值:[$(pobjCMFunctionEN.classNameLst)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.updDate) == false &&
    undefined !== pobjCMFunctionEN.updDate &&
    tzDataType.isString(pobjCMFunctionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjCMFunctionEN.updDate)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.updUser) == false &&
    undefined !== pobjCMFunctionEN.updUser &&
    tzDataType.isString(pobjCMFunctionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjCMFunctionEN.updUser)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.memo) == false &&
    undefined !== pobjCMFunctionEN.memo &&
    tzDataType.isString(pobjCMFunctionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjCMFunctionEN.memo)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFunctionEN.isSynchToServer &&
    undefined !== pobjCMFunctionEN.isSynchToServer &&
    tzDataType.isBoolean(pobjCMFunctionEN.isSynchToServer) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否同步到Server(isSynchToServer)]的值:[$(pobjCMFunctionEN.isSynchToServer)], 非法,应该为布尔型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToServerDate) == false &&
    undefined !== pobjCMFunctionEN.synchToServerDate &&
    tzDataType.isString(pobjCMFunctionEN.synchToServerDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Server日期(synchToServerDate)]的值:[$(pobjCMFunctionEN.synchToServerDate)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToServerUser) == false &&
    undefined !== pobjCMFunctionEN.synchToServerUser &&
    tzDataType.isString(pobjCMFunctionEN.synchToServerUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Server用户(synchToServerUser)]的值:[$(pobjCMFunctionEN.synchToServerUser)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFunctionEN.isSynchToClient &&
    undefined !== pobjCMFunctionEN.isSynchToClient &&
    tzDataType.isBoolean(pobjCMFunctionEN.isSynchToClient) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否同步到Client(isSynchToClient)]的值:[$(pobjCMFunctionEN.isSynchToClient)], 非法,应该为布尔型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToClientDate) == false &&
    undefined !== pobjCMFunctionEN.synchToClientDate &&
    tzDataType.isString(pobjCMFunctionEN.synchToClientDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Client库日期(synchToClientDate)]的值:[$(pobjCMFunctionEN.synchToClientDate)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToClientUser) == false &&
    undefined !== pobjCMFunctionEN.synchToClientUser &&
    tzDataType.isString(pobjCMFunctionEN.synchToClientUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步到Client库用户(synchToClientUser)]的值:[$(pobjCMFunctionEN.synchToClientUser)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synSource) == false &&
    undefined !== pobjCMFunctionEN.synSource &&
    tzDataType.isString(pobjCMFunctionEN.synSource) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[同步来源(synSource)]的值:[$(pobjCMFunctionEN.synSource)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMFunction_CheckProperty4Update(pobjCMFunctionEN: clsCMFunctionEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMFunctionEN.cmFunctionId) == false &&
    GetStrLen(pobjCMFunctionEN.cmFunctionId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数Id(cmFunctionId)]的长度不能超过8(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.cmFunctionId)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.cmClassId) == false &&
    GetStrLen(pobjCMFunctionEN.cmClassId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[类Id(cmClassId)]的长度不能超过8(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.cmClassId)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.functionName) == false &&
    GetStrLen(pobjCMFunctionEN.functionName) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能名称(functionName)]的长度不能超过200(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.functionName)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.keyWords) == false &&
    GetStrLen(pobjCMFunctionEN.keyWords) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[关键字(keyWords)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.keyWords)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.funcParaLst) == false &&
    GetStrLen(pobjCMFunctionEN.funcParaLst) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数参数列表(funcParaLst)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.funcParaLst)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.functionSignature) == false &&
    GetStrLen(pobjCMFunctionEN.functionSignature) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数签名(functionSignature)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.functionSignature)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.funcTypeId) == false &&
    GetStrLen(pobjCMFunctionEN.funcTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数类型Id(funcTypeId)]的长度不能超过2(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.funcTypeId)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnType) == false &&
    GetStrLen(pobjCMFunctionEN.returnType) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[返回类型(returnType)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.returnType)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnTypeFullName) == false &&
    GetStrLen(pobjCMFunctionEN.returnTypeFullName) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[返回类型全名(returnTypeFullName)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.returnTypeFullName)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnTypeId) == false &&
    GetStrLen(pobjCMFunctionEN.returnTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[返回类型ID(returnTypeId)]的长度不能超过2(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.returnTypeId)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.sourceFunction) == false &&
    GetStrLen(pobjCMFunctionEN.sourceFunction) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[来源函数(sourceFunction)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.sourceFunction)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnValueDescription) == false &&
    GetStrLen(pobjCMFunctionEN.returnValueDescription) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[返回值说明(returnValueDescription)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.returnValueDescription)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.classNameLst) == false &&
    GetStrLen(pobjCMFunctionEN.classNameLst) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[类名列表(classNameLst)]的长度不能超过500(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.classNameLst)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.updDate) == false &&
    GetStrLen(pobjCMFunctionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.updDate)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.updUser) == false &&
    GetStrLen(pobjCMFunctionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.updUser)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMFunctionEN.memo) == false && GetStrLen(pobjCMFunctionEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.memo)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToServerDate) == false &&
    GetStrLen(pobjCMFunctionEN.synchToServerDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Server日期(synchToServerDate)]的长度不能超过20(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.synchToServerDate)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToServerUser) == false &&
    GetStrLen(pobjCMFunctionEN.synchToServerUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Server用户(synchToServerUser)]的长度不能超过20(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.synchToServerUser)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToClientDate) == false &&
    GetStrLen(pobjCMFunctionEN.synchToClientDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Client库日期(synchToClientDate)]的长度不能超过20(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.synchToClientDate)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToClientUser) == false &&
    GetStrLen(pobjCMFunctionEN.synchToClientUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步到Client库用户(synchToClientUser)]的长度不能超过20(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.synchToClientUser)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synSource) == false &&
    GetStrLen(pobjCMFunctionEN.synSource) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[同步来源(synSource)]的长度不能超过50(In CM函数(CMFunction))!值:$(pobjCMFunctionEN.synSource)(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCMFunctionEN.cmFunctionId) == false &&
    undefined !== pobjCMFunctionEN.cmFunctionId &&
    tzDataType.isString(pobjCMFunctionEN.cmFunctionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数Id(cmFunctionId)]的值:[$(pobjCMFunctionEN.cmFunctionId)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.cmClassId) == false &&
    undefined !== pobjCMFunctionEN.cmClassId &&
    tzDataType.isString(pobjCMFunctionEN.cmClassId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类Id(cmClassId)]的值:[$(pobjCMFunctionEN.cmClassId)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.functionName) == false &&
    undefined !== pobjCMFunctionEN.functionName &&
    tzDataType.isString(pobjCMFunctionEN.functionName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能名称(functionName)]的值:[$(pobjCMFunctionEN.functionName)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.funcContent) == false &&
    undefined !== pobjCMFunctionEN.funcContent &&
    tzDataType.isString(pobjCMFunctionEN.funcContent) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数内容(funcContent)]的值:[$(pobjCMFunctionEN.funcContent)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.keyWords) == false &&
    undefined !== pobjCMFunctionEN.keyWords &&
    tzDataType.isString(pobjCMFunctionEN.keyWords) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[关键字(keyWords)]的值:[$(pobjCMFunctionEN.keyWords)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.funcParaLst) == false &&
    undefined !== pobjCMFunctionEN.funcParaLst &&
    tzDataType.isString(pobjCMFunctionEN.funcParaLst) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数参数列表(funcParaLst)]的值:[$(pobjCMFunctionEN.funcParaLst)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.funcComments) == false &&
    undefined !== pobjCMFunctionEN.funcComments &&
    tzDataType.isString(pobjCMFunctionEN.funcComments) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数注释(funcComments)]的值:[$(pobjCMFunctionEN.funcComments)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.functionSignature) == false &&
    undefined !== pobjCMFunctionEN.functionSignature &&
    tzDataType.isString(pobjCMFunctionEN.functionSignature) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数签名(functionSignature)]的值:[$(pobjCMFunctionEN.functionSignature)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.funcTypeId) == false &&
    undefined !== pobjCMFunctionEN.funcTypeId &&
    tzDataType.isString(pobjCMFunctionEN.funcTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数类型Id(funcTypeId)]的值:[$(pobjCMFunctionEN.funcTypeId)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnType) == false &&
    undefined !== pobjCMFunctionEN.returnType &&
    tzDataType.isString(pobjCMFunctionEN.returnType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[返回类型(returnType)]的值:[$(pobjCMFunctionEN.returnType)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnTypeFullName) == false &&
    undefined !== pobjCMFunctionEN.returnTypeFullName &&
    tzDataType.isString(pobjCMFunctionEN.returnTypeFullName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[返回类型全名(returnTypeFullName)]的值:[$(pobjCMFunctionEN.returnTypeFullName)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFunctionEN.isKnownType &&
    undefined !== pobjCMFunctionEN.isKnownType &&
    tzDataType.isBoolean(pobjCMFunctionEN.isKnownType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否已知类型(isKnownType)]的值:[$(pobjCMFunctionEN.isKnownType)], 非法,应该为布尔型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnTypeId) == false &&
    undefined !== pobjCMFunctionEN.returnTypeId &&
    tzDataType.isString(pobjCMFunctionEN.returnTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[返回类型ID(returnTypeId)]的值:[$(pobjCMFunctionEN.returnTypeId)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFunctionEN.isAsyncFunc &&
    undefined !== pobjCMFunctionEN.isAsyncFunc &&
    tzDataType.isBoolean(pobjCMFunctionEN.isAsyncFunc) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否异步函数(isAsyncFunc)]的值:[$(pobjCMFunctionEN.isAsyncFunc)], 非法,应该为布尔型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.sourceFunction) == false &&
    undefined !== pobjCMFunctionEN.sourceFunction &&
    tzDataType.isString(pobjCMFunctionEN.sourceFunction) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[来源函数(sourceFunction)]的值:[$(pobjCMFunctionEN.sourceFunction)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFunctionEN.isGeneCode &&
    undefined !== pobjCMFunctionEN.isGeneCode &&
    tzDataType.isBoolean(pobjCMFunctionEN.isGeneCode) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否生成代码(isGeneCode)]的值:[$(pobjCMFunctionEN.isGeneCode)], 非法,应该为布尔型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.returnValueDescription) == false &&
    undefined !== pobjCMFunctionEN.returnValueDescription &&
    tzDataType.isString(pobjCMFunctionEN.returnValueDescription) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[返回值说明(returnValueDescription)]的值:[$(pobjCMFunctionEN.returnValueDescription)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFunctionEN.isSysFunction &&
    undefined !== pobjCMFunctionEN.isSysFunction &&
    tzDataType.isBoolean(pobjCMFunctionEN.isSysFunction) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否系统函数(isSysFunction)]的值:[$(pobjCMFunctionEN.isSysFunction)], 非法,应该为布尔型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFunctionEN.getCustomAttributes &&
    undefined !== pobjCMFunctionEN.getCustomAttributes &&
    tzDataType.isNumber(pobjCMFunctionEN.getCustomAttributes) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[GetCustomAttributes(getCustomAttributes)]的值:[$(pobjCMFunctionEN.getCustomAttributes)], 非法,应该为数值型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.classNameLst) == false &&
    undefined !== pobjCMFunctionEN.classNameLst &&
    tzDataType.isString(pobjCMFunctionEN.classNameLst) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类名列表(classNameLst)]的值:[$(pobjCMFunctionEN.classNameLst)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.updDate) == false &&
    undefined !== pobjCMFunctionEN.updDate &&
    tzDataType.isString(pobjCMFunctionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjCMFunctionEN.updDate)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.updUser) == false &&
    undefined !== pobjCMFunctionEN.updUser &&
    tzDataType.isString(pobjCMFunctionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjCMFunctionEN.updUser)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.memo) == false &&
    undefined !== pobjCMFunctionEN.memo &&
    tzDataType.isString(pobjCMFunctionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjCMFunctionEN.memo)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFunctionEN.isSynchToServer &&
    undefined !== pobjCMFunctionEN.isSynchToServer &&
    tzDataType.isBoolean(pobjCMFunctionEN.isSynchToServer) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否同步到Server(isSynchToServer)]的值:[$(pobjCMFunctionEN.isSynchToServer)], 非法,应该为布尔型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToServerDate) == false &&
    undefined !== pobjCMFunctionEN.synchToServerDate &&
    tzDataType.isString(pobjCMFunctionEN.synchToServerDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Server日期(synchToServerDate)]的值:[$(pobjCMFunctionEN.synchToServerDate)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToServerUser) == false &&
    undefined !== pobjCMFunctionEN.synchToServerUser &&
    tzDataType.isString(pobjCMFunctionEN.synchToServerUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Server用户(synchToServerUser)]的值:[$(pobjCMFunctionEN.synchToServerUser)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFunctionEN.isSynchToClient &&
    undefined !== pobjCMFunctionEN.isSynchToClient &&
    tzDataType.isBoolean(pobjCMFunctionEN.isSynchToClient) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否同步到Client(isSynchToClient)]的值:[$(pobjCMFunctionEN.isSynchToClient)], 非法,应该为布尔型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToClientDate) == false &&
    undefined !== pobjCMFunctionEN.synchToClientDate &&
    tzDataType.isString(pobjCMFunctionEN.synchToClientDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Client库日期(synchToClientDate)]的值:[$(pobjCMFunctionEN.synchToClientDate)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synchToClientUser) == false &&
    undefined !== pobjCMFunctionEN.synchToClientUser &&
    tzDataType.isString(pobjCMFunctionEN.synchToClientUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步到Client库用户(synchToClientUser)]的值:[$(pobjCMFunctionEN.synchToClientUser)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFunctionEN.synSource) == false &&
    undefined !== pobjCMFunctionEN.synSource &&
    tzDataType.isString(pobjCMFunctionEN.synSource) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[同步来源(synSource)]的值:[$(pobjCMFunctionEN.synSource)], 非法,应该为字符型(In CM函数(CMFunction))!(clsCMFunctionBL:CheckProperty4Update)',
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
export function CMFunction_GetJSONStrByObj(pobjCMFunctionEN: clsCMFunctionEN): string {
  pobjCMFunctionEN.sfUpdFldSetStr = pobjCMFunctionEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCMFunctionEN);
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
export function CMFunction_GetObjLstByJSONStr(strJSON: string): Array<clsCMFunctionEN> {
  let arrCMFunctionObjLst = new Array<clsCMFunctionEN>();
  if (strJSON === '') {
    return arrCMFunctionObjLst;
  }
  try {
    arrCMFunctionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCMFunctionObjLst;
  }
  return arrCMFunctionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCMFunctionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CMFunction_GetObjLstByJSONObjLst(
  arrCMFunctionObjLstS: Array<clsCMFunctionEN>,
): Array<clsCMFunctionEN> {
  const arrCMFunctionObjLst = new Array<clsCMFunctionEN>();
  for (const objInFor of arrCMFunctionObjLstS) {
    const obj1 = CMFunction_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCMFunctionObjLst.push(obj1);
  }
  return arrCMFunctionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMFunction_GetObjByJSONStr(strJSON: string): clsCMFunctionEN {
  let pobjCMFunctionEN = new clsCMFunctionEN();
  if (strJSON === '') {
    return pobjCMFunctionEN;
  }
  try {
    pobjCMFunctionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCMFunctionEN;
  }
  return pobjCMFunctionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CMFunction_GetCombineCondition(objCMFunctionCond: clsCMFunctionEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_CmFunctionId,
    ) == true
  ) {
    const strComparisonOpCmFunctionId: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_CmFunctionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_CmFunctionId,
      objCMFunctionCond.cmFunctionId,
      strComparisonOpCmFunctionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_CmClassId,
    ) == true
  ) {
    const strComparisonOpCmClassId: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_CmClassId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_CmClassId,
      objCMFunctionCond.cmClassId,
      strComparisonOpCmClassId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_FunctionName,
    ) == true
  ) {
    const strComparisonOpFunctionName: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_FunctionName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_FunctionName,
      objCMFunctionCond.functionName,
      strComparisonOpFunctionName,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_KeyWords,
    ) == true
  ) {
    const strComparisonOpKeyWords: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_KeyWords];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_KeyWords,
      objCMFunctionCond.keyWords,
      strComparisonOpKeyWords,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_FuncParaLst,
    ) == true
  ) {
    const strComparisonOpFuncParaLst: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_FuncParaLst];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_FuncParaLst,
      objCMFunctionCond.funcParaLst,
      strComparisonOpFuncParaLst,
    );
  }
  //数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_FunctionSignature,
    ) == true
  ) {
    const strComparisonOpFunctionSignature: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_FunctionSignature];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_FunctionSignature,
      objCMFunctionCond.functionSignature,
      strComparisonOpFunctionSignature,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_FuncTypeId,
    ) == true
  ) {
    const strComparisonOpFuncTypeId: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_FuncTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_FuncTypeId,
      objCMFunctionCond.funcTypeId,
      strComparisonOpFuncTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_ReturnType,
    ) == true
  ) {
    const strComparisonOpReturnType: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_ReturnType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_ReturnType,
      objCMFunctionCond.returnType,
      strComparisonOpReturnType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_ReturnTypeFullName,
    ) == true
  ) {
    const strComparisonOpReturnTypeFullName: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_ReturnTypeFullName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_ReturnTypeFullName,
      objCMFunctionCond.returnTypeFullName,
      strComparisonOpReturnTypeFullName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_IsKnownType,
    ) == true
  ) {
    if (objCMFunctionCond.isKnownType == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMFunctionEN.con_IsKnownType);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMFunctionEN.con_IsKnownType);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_ReturnTypeId,
    ) == true
  ) {
    const strComparisonOpReturnTypeId: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_ReturnTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_ReturnTypeId,
      objCMFunctionCond.returnTypeId,
      strComparisonOpReturnTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_IsAsyncFunc,
    ) == true
  ) {
    if (objCMFunctionCond.isAsyncFunc == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMFunctionEN.con_IsAsyncFunc);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMFunctionEN.con_IsAsyncFunc);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_SourceFunction,
    ) == true
  ) {
    const strComparisonOpSourceFunction: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_SourceFunction];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_SourceFunction,
      objCMFunctionCond.sourceFunction,
      strComparisonOpSourceFunction,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_IsGeneCode,
    ) == true
  ) {
    if (objCMFunctionCond.isGeneCode == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMFunctionEN.con_IsGeneCode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMFunctionEN.con_IsGeneCode);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_ReturnValueDescription,
    ) == true
  ) {
    const strComparisonOpReturnValueDescription: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_ReturnValueDescription];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_ReturnValueDescription,
      objCMFunctionCond.returnValueDescription,
      strComparisonOpReturnValueDescription,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_IsSysFunction,
    ) == true
  ) {
    if (objCMFunctionCond.isSysFunction == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMFunctionEN.con_IsSysFunction);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMFunctionEN.con_IsSysFunction);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_GetCustomAttributes,
    ) == true
  ) {
    const strComparisonOpGetCustomAttributes: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_GetCustomAttributes];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCMFunctionEN.con_GetCustomAttributes,
      objCMFunctionCond.getCustomAttributes,
      strComparisonOpGetCustomAttributes,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_ClassNameLst,
    ) == true
  ) {
    const strComparisonOpClassNameLst: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_ClassNameLst];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_ClassNameLst,
      objCMFunctionCond.classNameLst,
      strComparisonOpClassNameLst,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_UpdDate,
      objCMFunctionCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_UpdUser,
      objCMFunctionCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_Memo,
      objCMFunctionCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_IsSynchToServer,
    ) == true
  ) {
    if (objCMFunctionCond.isSynchToServer == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMFunctionEN.con_IsSynchToServer);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMFunctionEN.con_IsSynchToServer);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_SynchToServerDate,
    ) == true
  ) {
    const strComparisonOpSynchToServerDate: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_SynchToServerDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_SynchToServerDate,
      objCMFunctionCond.synchToServerDate,
      strComparisonOpSynchToServerDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_SynchToServerUser,
    ) == true
  ) {
    const strComparisonOpSynchToServerUser: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_SynchToServerUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_SynchToServerUser,
      objCMFunctionCond.synchToServerUser,
      strComparisonOpSynchToServerUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_IsSynchToClient,
    ) == true
  ) {
    if (objCMFunctionCond.isSynchToClient == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMFunctionEN.con_IsSynchToClient);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMFunctionEN.con_IsSynchToClient);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_SynchToClientDate,
    ) == true
  ) {
    const strComparisonOpSynchToClientDate: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_SynchToClientDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_SynchToClientDate,
      objCMFunctionCond.synchToClientDate,
      strComparisonOpSynchToClientDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_SynchToClientUser,
    ) == true
  ) {
    const strComparisonOpSynchToClientUser: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_SynchToClientUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_SynchToClientUser,
      objCMFunctionCond.synchToClientUser,
      strComparisonOpSynchToClientUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFunctionCond.dicFldComparisonOp,
      clsCMFunctionEN.con_SynSource,
    ) == true
  ) {
    const strComparisonOpSynSource: string =
      objCMFunctionCond.dicFldComparisonOp[clsCMFunctionEN.con_SynSource];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFunctionEN.con_SynSource,
      objCMFunctionCond.synSource,
      strComparisonOpSynSource,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMFunction(CM函数),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFunctionName: 功能名称(要求唯一的字段)
 * @param strFuncParaLst: 函数参数列表(要求唯一的字段)
 * @param strCmClassId: 类Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMFunction_GetUniCondStr(objCMFunctionEN: clsCMFunctionEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FunctionName = '{0}'", objCMFunctionEN.functionName);
  strWhereCond += Format(" and FuncParaLst = '{0}'", objCMFunctionEN.funcParaLst);
  strWhereCond += Format(" and CmClassId = '{0}'", objCMFunctionEN.cmClassId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMFunction(CM函数),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFunctionName: 功能名称(要求唯一的字段)
 * @param strFuncParaLst: 函数参数列表(要求唯一的字段)
 * @param strCmClassId: 类Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMFunction_GetUniCondStr4Update(objCMFunctionEN: clsCMFunctionEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CmFunctionId <> '{0}'", objCMFunctionEN.cmFunctionId);
  strWhereCond += Format(" and FunctionName = '{0}'", objCMFunctionEN.functionName);
  strWhereCond += Format(" and FuncParaLst = '{0}'", objCMFunctionEN.funcParaLst);
  strWhereCond += Format(" and CmClassId = '{0}'", objCMFunctionEN.cmClassId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCMFunctionENS:源对象
 * @param objCMFunctionENT:目标对象
 */
export function CMFunction_GetObjFromJsonObj(objCMFunctionENS: clsCMFunctionEN): clsCMFunctionEN {
  const objCMFunctionENT: clsCMFunctionEN = new clsCMFunctionEN();
  ObjectAssign(objCMFunctionENT, objCMFunctionENS);
  return objCMFunctionENT;
}
