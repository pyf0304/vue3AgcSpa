/**
 * 类名:clsCodeFunctionWApi
 * 表名:CodeFunction(00050439)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:42
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
 * 代码函数(CodeFunction)
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
import { clsCodeFunctionEN } from '@/ts/L0Entity/GeneCode/clsCodeFunctionEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const codeFunction_Controller = 'CodeFunctionApi';
export const codeFunction_ConstructorName = 'codeFunction';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCodeFuncId:关键字
 * @returns 对象
 **/
export async function CodeFunction_GetObjByCodeFuncIdAsync(
  strCodeFuncId: string,
): Promise<clsCodeFunctionEN | null> {
  const strThisFuncName = 'GetObjByCodeFuncIdAsync';

  if (IsNullOrEmpty(strCodeFuncId) == true) {
    const strMsg = Format(
      '参数:[strCodeFuncId]不能为空!(In clsCodeFunctionWApi.GetObjByCodeFuncIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeFuncId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCodeFuncId]的长度:[{0}]不正确!(clsCodeFunctionWApi.GetObjByCodeFuncIdAsync)',
      strCodeFuncId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCodeFuncId';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCodeFuncId,
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
      const objCodeFunction = CodeFunction_GetObjFromJsonObj(returnObj);
      return objCodeFunction;
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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
 * @param strCodeFuncId:所给的关键字
 * @returns 对象
 */
export async function CodeFunction_GetObjByCodeFuncIdCache(
  strCodeFuncId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCodeFuncIdCache';

  if (IsNullOrEmpty(strCodeFuncId) == true) {
    const strMsg = Format(
      '参数:[strCodeFuncId]不能为空!(In clsCodeFunctionWApi.GetObjByCodeFuncIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeFuncId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCodeFuncId]的长度:[{0}]不正确!(clsCodeFunctionWApi.GetObjByCodeFuncIdCache)',
      strCodeFuncId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCodeFunctionObjLstCache = await CodeFunction_GetObjLstCache();
  try {
    const arrCodeFunctionSel = arrCodeFunctionObjLstCache.filter(
      (x) => x.codeFuncId == strCodeFuncId,
    );
    let objCodeFunction: clsCodeFunctionEN;
    if (arrCodeFunctionSel.length > 0) {
      objCodeFunction = arrCodeFunctionSel[0];
      return objCodeFunction;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCodeFunctionConst = await CodeFunction_GetObjByCodeFuncIdAsync(strCodeFuncId);
        if (objCodeFunctionConst != null) {
          CodeFunction_ReFreshThisCache();
          return objCodeFunctionConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCodeFuncId,
      codeFunction_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCodeFuncId:所给的关键字
 * @returns 对象
 */
export async function CodeFunction_GetObjByCodeFuncIdlocalStorage(strCodeFuncId: string) {
  const strThisFuncName = 'GetObjByCodeFuncIdlocalStorage';

  if (IsNullOrEmpty(strCodeFuncId) == true) {
    const strMsg = Format(
      '参数:[strCodeFuncId]不能为空!(In clsCodeFunctionWApi.GetObjByCodeFuncIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeFuncId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCodeFuncId]的长度:[{0}]不正确!(clsCodeFunctionWApi.GetObjByCodeFuncIdlocalStorage)',
      strCodeFuncId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsCodeFunctionEN._CurrTabName, strCodeFuncId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objCodeFunctionCache: clsCodeFunctionEN = JSON.parse(strTempObj);
    return objCodeFunctionCache;
  }
  try {
    const objCodeFunction = await CodeFunction_GetObjByCodeFuncIdAsync(strCodeFuncId);
    if (objCodeFunction != null) {
      localStorage.setItem(strKey, JSON.stringify(objCodeFunction));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objCodeFunction;
    }
    return objCodeFunction;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCodeFuncId,
      codeFunction_ConstructorName,
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
 * @param objCodeFunction:所给的对象
 * @returns 对象
 */
export async function CodeFunction_UpdateObjInLstCache(objCodeFunction: clsCodeFunctionEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCodeFunctionObjLstCache = await CodeFunction_GetObjLstCache();
    const obj = arrCodeFunctionObjLstCache.find((x) => x.codeFuncId == objCodeFunction.codeFuncId);
    if (obj != null) {
      objCodeFunction.codeFuncId = obj.codeFuncId;
      ObjectAssign(obj, objCodeFunction);
    } else {
      arrCodeFunctionObjLstCache.push(objCodeFunction);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      codeFunction_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCodeFuncId:所给的关键字
 * @returns 对象
 */
export async function CodeFunction_GetNameByCodeFuncIdCache(strCodeFuncId: string) {
  if (IsNullOrEmpty(strCodeFuncId) == true) {
    const strMsg = Format(
      '参数:[strCodeFuncId]不能为空!(In clsCodeFunctionWApi.GetNameByCodeFuncIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeFuncId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCodeFuncId]的长度:[{0}]不正确!(clsCodeFunctionWApi.GetNameByCodeFuncIdCache)',
      strCodeFuncId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCodeFunctionObjLstCache = await CodeFunction_GetObjLstCache();
  if (arrCodeFunctionObjLstCache == null) return '';
  try {
    const arrCodeFunctionSel = arrCodeFunctionObjLstCache.filter(
      (x) => x.codeFuncId == strCodeFuncId,
    );
    let objCodeFunction: clsCodeFunctionEN;
    if (arrCodeFunctionSel.length > 0) {
      objCodeFunction = arrCodeFunctionSel[0];
      return objCodeFunction.codeFuncName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strCodeFuncId,
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
export async function CodeFunction_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsCodeFunctionEN.con_CodeFuncId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCodeFunctionEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsCodeFunctionEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCodeFuncId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objCodeFunction = await CodeFunction_GetObjByCodeFuncIdCache(strCodeFuncId);
  if (objCodeFunction == null) return '';
  if (objCodeFunction.GetFldValue(strOutFldName) == null) return '';
  return objCodeFunction.GetFldValue(strOutFldName).toString();
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
export function CodeFunction_SortFunDefa(a: clsCodeFunctionEN, b: clsCodeFunctionEN): number {
  return a.codeFuncId.localeCompare(b.codeFuncId);
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
export function CodeFunction_SortFunDefa2Fld(a: clsCodeFunctionEN, b: clsCodeFunctionEN): number {
  if (a.codeFuncName == b.codeFuncName) return a.funcSignature.localeCompare(b.funcSignature);
  else return a.codeFuncName.localeCompare(b.codeFuncName);
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
export function CodeFunction_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCodeFunctionEN.con_CodeFuncId:
        return (a: clsCodeFunctionEN, b: clsCodeFunctionEN) => {
          return a.codeFuncId.localeCompare(b.codeFuncId);
        };
      case clsCodeFunctionEN.con_CodeFuncName:
        return (a: clsCodeFunctionEN, b: clsCodeFunctionEN) => {
          if (a.codeFuncName == null) return -1;
          if (b.codeFuncName == null) return 1;
          return a.codeFuncName.localeCompare(b.codeFuncName);
        };
      case clsCodeFunctionEN.con_FuncSignature:
        return (a: clsCodeFunctionEN, b: clsCodeFunctionEN) => {
          if (a.funcSignature == null) return -1;
          if (b.funcSignature == null) return 1;
          return a.funcSignature.localeCompare(b.funcSignature);
        };
      case clsCodeFunctionEN.con_UpdDate:
        return (a: clsCodeFunctionEN, b: clsCodeFunctionEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCodeFunctionEN.con_UpdUser:
        return (a: clsCodeFunctionEN, b: clsCodeFunctionEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCodeFunctionEN.con_Memo:
        return (a: clsCodeFunctionEN, b: clsCodeFunctionEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CodeFunction]中不存在!(in ${codeFunction_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCodeFunctionEN.con_CodeFuncId:
        return (a: clsCodeFunctionEN, b: clsCodeFunctionEN) => {
          return b.codeFuncId.localeCompare(a.codeFuncId);
        };
      case clsCodeFunctionEN.con_CodeFuncName:
        return (a: clsCodeFunctionEN, b: clsCodeFunctionEN) => {
          if (b.codeFuncName == null) return -1;
          if (a.codeFuncName == null) return 1;
          return b.codeFuncName.localeCompare(a.codeFuncName);
        };
      case clsCodeFunctionEN.con_FuncSignature:
        return (a: clsCodeFunctionEN, b: clsCodeFunctionEN) => {
          if (b.funcSignature == null) return -1;
          if (a.funcSignature == null) return 1;
          return b.funcSignature.localeCompare(a.funcSignature);
        };
      case clsCodeFunctionEN.con_UpdDate:
        return (a: clsCodeFunctionEN, b: clsCodeFunctionEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCodeFunctionEN.con_UpdUser:
        return (a: clsCodeFunctionEN, b: clsCodeFunctionEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCodeFunctionEN.con_Memo:
        return (a: clsCodeFunctionEN, b: clsCodeFunctionEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CodeFunction]中不存在!(in ${codeFunction_ConstructorName}.${strThisFuncName})`;
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
export async function CodeFunction_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCodeFunctionEN.con_CodeFuncId:
      return (obj: clsCodeFunctionEN) => {
        return obj.codeFuncId === value;
      };
    case clsCodeFunctionEN.con_CodeFuncName:
      return (obj: clsCodeFunctionEN) => {
        return obj.codeFuncName === value;
      };
    case clsCodeFunctionEN.con_FuncSignature:
      return (obj: clsCodeFunctionEN) => {
        return obj.funcSignature === value;
      };
    case clsCodeFunctionEN.con_UpdDate:
      return (obj: clsCodeFunctionEN) => {
        return obj.updDate === value;
      };
    case clsCodeFunctionEN.con_UpdUser:
      return (obj: clsCodeFunctionEN) => {
        return obj.updUser === value;
      };
    case clsCodeFunctionEN.con_Memo:
      return (obj: clsCodeFunctionEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CodeFunction]中不存在!(in ${codeFunction_ConstructorName}.${strThisFuncName})`;
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
export async function CodeFunction_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsCodeFunctionEN.con_CodeFuncId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrCodeFunction = await CodeFunction_GetObjLstCache();
  if (arrCodeFunction == null) return [];
  let arrCodeFunctionSel = arrCodeFunction;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCodeFunctionSel = arrCodeFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCodeFunctionSel = arrCodeFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCodeFunctionSel = arrCodeFunctionSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCodeFunctionSel = arrCodeFunctionSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCodeFunctionSel = arrCodeFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrCodeFunctionSel = arrCodeFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCodeFunctionSel = arrCodeFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCodeFunctionSel = arrCodeFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCodeFunctionSel = arrCodeFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCodeFunctionSel = arrCodeFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrCodeFunctionSel.length == 0) return [];
  return arrCodeFunctionSel.map((x) => x.codeFuncId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CodeFunction_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
export async function CodeFunction_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
export async function CodeFunction_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCodeFunctionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

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
      const objCodeFunction = CodeFunction_GetObjFromJsonObj(returnObj);
      return objCodeFunction;
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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
export async function CodeFunction_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCodeFunctionEN._CurrTabName;
  if (IsNullOrEmpty(clsCodeFunctionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCodeFunctionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrCodeFunctionExObjLstCache: Array<clsCodeFunctionEN> = CacheHelper.Get(strKey);
    const arrCodeFunctionObjLstT = CodeFunction_GetObjLstByJSONObjLst(arrCodeFunctionExObjLstCache);
    return arrCodeFunctionObjLstT;
  }
  try {
    const arrCodeFunctionExObjLst = await CodeFunction_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCodeFunctionExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCodeFunctionExObjLst.length,
    );
    console.log(strInfo);
    return arrCodeFunctionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      codeFunction_ConstructorName,
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
export async function CodeFunction_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCodeFunctionEN._CurrTabName;
  if (IsNullOrEmpty(clsCodeFunctionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCodeFunctionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCodeFunctionExObjLstCache: Array<clsCodeFunctionEN> = JSON.parse(strTempObjLst);
    const arrCodeFunctionObjLstT = CodeFunction_GetObjLstByJSONObjLst(arrCodeFunctionExObjLstCache);
    return arrCodeFunctionObjLstT;
  }
  try {
    const arrCodeFunctionExObjLst = await CodeFunction_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCodeFunctionExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCodeFunctionExObjLst.length,
    );
    console.log(strInfo);
    return arrCodeFunctionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      codeFunction_ConstructorName,
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
export async function CodeFunction_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCodeFunctionEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCodeFunctionObjLstCache: Array<clsCodeFunctionEN> = JSON.parse(strTempObjLst);
    return arrCodeFunctionObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CodeFunction_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCodeFunctionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

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
          codeFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodeFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
export async function CodeFunction_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCodeFunctionEN._CurrTabName;
  if (IsNullOrEmpty(clsCodeFunctionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCodeFunctionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCodeFunctionExObjLstCache: Array<clsCodeFunctionEN> = JSON.parse(strTempObjLst);
    const arrCodeFunctionObjLstT = CodeFunction_GetObjLstByJSONObjLst(arrCodeFunctionExObjLstCache);
    return arrCodeFunctionObjLstT;
  }
  try {
    const arrCodeFunctionExObjLst = await CodeFunction_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCodeFunctionExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCodeFunctionExObjLst.length,
    );
    console.log(strInfo);
    return arrCodeFunctionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      codeFunction_ConstructorName,
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
export async function CodeFunction_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCodeFunctionEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCodeFunctionObjLstCache: Array<clsCodeFunctionEN> = JSON.parse(strTempObjLst);
    return arrCodeFunctionObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CodeFunction_GetObjLstCache(): Promise<Array<clsCodeFunctionEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrCodeFunctionObjLstCache;
  switch (clsCodeFunctionEN.CacheModeId) {
    case '04': //sessionStorage
      arrCodeFunctionObjLstCache = await CodeFunction_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrCodeFunctionObjLstCache = await CodeFunction_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrCodeFunctionObjLstCache = await CodeFunction_GetObjLstClientCache();
      break;
    default:
      arrCodeFunctionObjLstCache = await CodeFunction_GetObjLstClientCache();
      break;
  }
  return arrCodeFunctionObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CodeFunction_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCodeFunctionObjLstCache;
  switch (clsCodeFunctionEN.CacheModeId) {
    case '04': //sessionStorage
      arrCodeFunctionObjLstCache = await CodeFunction_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrCodeFunctionObjLstCache = await CodeFunction_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrCodeFunctionObjLstCache = null;
      break;
    default:
      arrCodeFunctionObjLstCache = null;
      break;
  }
  return arrCodeFunctionObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCodeFuncIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CodeFunction_GetSubObjLstCache(objCodeFunctionCond: clsCodeFunctionEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCodeFunctionObjLstCache = await CodeFunction_GetObjLstCache();
  let arrCodeFunctionSel = arrCodeFunctionObjLstCache;
  if (objCodeFunctionCond.sfFldComparisonOp == null || objCodeFunctionCond.sfFldComparisonOp == '')
    return arrCodeFunctionSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCodeFunctionCond.sfFldComparisonOp,
  );
  //console.log("clsCodeFunctionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCodeFunctionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCodeFunctionSel = arrCodeFunctionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCodeFunctionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCodeFunctionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCodeFunctionCond),
      codeFunction_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCodeFunctionEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCodeFuncId:关键字列表
 * @returns 对象列表
 **/
export async function CodeFunction_GetObjLstByCodeFuncIdLstAsync(
  arrCodeFuncId: Array<string>,
): Promise<Array<clsCodeFunctionEN>> {
  const strThisFuncName = 'GetObjLstByCodeFuncIdLstAsync';
  const strAction = 'GetObjLstByCodeFuncIdLst';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCodeFuncId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          codeFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodeFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
 * @param arrstrCodeFuncIdLst:关键字列表
 * @returns 对象列表
 */
export async function CodeFunction_GetObjLstByCodeFuncIdLstCache(arrCodeFuncIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByCodeFuncIdLstCache';
  try {
    const arrCodeFunctionObjLstCache = await CodeFunction_GetObjLstCache();
    const arrCodeFunctionSel = arrCodeFunctionObjLstCache.filter(
      (x) => arrCodeFuncIdLst.indexOf(x.codeFuncId) > -1,
    );
    return arrCodeFunctionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCodeFuncIdLst.join(','),
      codeFunction_ConstructorName,
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
export async function CodeFunction_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCodeFunctionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

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
          codeFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodeFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
export async function CodeFunction_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCodeFunctionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

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
          codeFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodeFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
export async function CodeFunction_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsCodeFunctionEN>();
  const arrCodeFunctionObjLstCache = await CodeFunction_GetObjLstCache();
  if (arrCodeFunctionObjLstCache.length == 0) return arrCodeFunctionObjLstCache;
  let arrCodeFunctionSel = arrCodeFunctionObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objCodeFunctionCond = new clsCodeFunctionEN();
  ObjectAssign(objCodeFunctionCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsCodeFunctionWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCodeFunctionSel = arrCodeFunctionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCodeFunctionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCodeFunctionSel.length == 0) return arrCodeFunctionSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCodeFunctionSel = arrCodeFunctionSel.sort(
        CodeFunction_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCodeFunctionSel = arrCodeFunctionSel.sort(objPagerPara.sortFun);
    }
    arrCodeFunctionSel = arrCodeFunctionSel.slice(intStart, intEnd);
    return arrCodeFunctionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      codeFunction_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCodeFunctionEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function CodeFunction_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCodeFunctionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCodeFunctionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

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
          codeFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodeFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
 * @param strCodeFuncId:关键字
 * @returns 获取删除的结果
 **/
export async function CodeFunction_DelRecordAsync(strCodeFuncId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(codeFunction_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strCodeFuncId);

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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
 * @param arrCodeFuncId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CodeFunction_DelCodeFunctionsAsync(
  arrCodeFuncId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelCodeFunctionsAsync';
  const strAction = 'DelCodeFunctions';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCodeFuncId, config);
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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
export async function CodeFunction_DelCodeFunctionsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCodeFunctionsByCondAsync';
  const strAction = 'DelCodeFunctionsByCond';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
 * @param objCodeFunctionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CodeFunction_AddNewRecordAsync(
  objCodeFunctionEN: clsCodeFunctionEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objCodeFunctionEN.codeFuncId === null || objCodeFunctionEN.codeFuncId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCodeFunctionEN);
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeFunctionEN, config);
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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
 * @param objCodeFunctionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CodeFunction_AddNewRecordWithMaxIdAsync(
  objCodeFunctionEN: clsCodeFunctionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeFunctionEN, config);
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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
 * @param objCodeFunctionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CodeFunction_AddNewRecordWithReturnKeyAsync(
  objCodeFunctionEN: clsCodeFunctionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeFunctionEN, config);
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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
 * @param objCodeFunctionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CodeFunction_UpdateRecordAsync(
  objCodeFunctionEN: clsCodeFunctionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCodeFunctionEN.sfUpdFldSetStr === undefined ||
    objCodeFunctionEN.sfUpdFldSetStr === null ||
    objCodeFunctionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCodeFunctionEN.codeFuncId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeFunctionEN, config);
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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
 * @param objCodeFunctionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CodeFunction_UpdateWithConditionAsync(
  objCodeFunctionEN: clsCodeFunctionEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCodeFunctionEN.sfUpdFldSetStr === undefined ||
    objCodeFunctionEN.sfUpdFldSetStr === null ||
    objCodeFunctionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCodeFunctionEN.codeFuncId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);
  objCodeFunctionEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeFunctionEN, config);
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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
 * @param objstrCodeFuncIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CodeFunction_IsExistRecordCache(objCodeFunctionCond: clsCodeFunctionEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCodeFunctionObjLstCache = await CodeFunction_GetObjLstCache();
  if (arrCodeFunctionObjLstCache == null) return false;
  let arrCodeFunctionSel = arrCodeFunctionObjLstCache;
  if (objCodeFunctionCond.sfFldComparisonOp == null || objCodeFunctionCond.sfFldComparisonOp == '')
    return arrCodeFunctionSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCodeFunctionCond.sfFldComparisonOp,
  );
  //console.log("clsCodeFunctionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCodeFunctionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCodeFunctionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCodeFunctionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCodeFunctionCond),
      codeFunction_ConstructorName,
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
export async function CodeFunction_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
 * @param strCodeFuncId:所给的关键字
 * @returns 对象
 */
export async function CodeFunction_IsExistCache(strCodeFuncId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrCodeFunctionObjLstCache = await CodeFunction_GetObjLstCache();
  if (arrCodeFunctionObjLstCache == null) return false;
  try {
    const arrCodeFunctionSel = arrCodeFunctionObjLstCache.filter(
      (x) => x.codeFuncId == strCodeFuncId,
    );
    if (arrCodeFunctionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCodeFuncId,
      codeFunction_ConstructorName,
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
 * @param strCodeFuncId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CodeFunction_IsExistAsync(strCodeFuncId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCodeFuncId,
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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
export async function CodeFunction_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
 * @param objCodeFunctionCond:条件对象
 * @returns 对象列表记录数
 */
export async function CodeFunction_GetRecCountByCondCache(objCodeFunctionCond: clsCodeFunctionEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCodeFunctionObjLstCache = await CodeFunction_GetObjLstCache();
  if (arrCodeFunctionObjLstCache == null) return 0;
  let arrCodeFunctionSel = arrCodeFunctionObjLstCache;
  if (objCodeFunctionCond.sfFldComparisonOp == null || objCodeFunctionCond.sfFldComparisonOp == '')
    return arrCodeFunctionSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCodeFunctionCond.sfFldComparisonOp,
  );
  //console.log("clsCodeFunctionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCodeFunctionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCodeFunctionSel = arrCodeFunctionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCodeFunctionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCodeFunctionSel = arrCodeFunctionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCodeFunctionSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCodeFunctionCond),
      codeFunction_ConstructorName,
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
export async function CodeFunction_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(codeFunction_Controller, strAction);

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
        codeFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeFunction_ConstructorName,
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
export function CodeFunction_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CodeFunction_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsCodeFunctionEN._CurrTabName;
  switch (clsCodeFunctionEN.CacheModeId) {
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
export function CodeFunction_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsCodeFunctionEN._CurrTabName;
    switch (clsCodeFunctionEN.CacheModeId) {
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
export async function CodeFunction_BindDdl_CodeFuncIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CodeFuncIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CodeFuncIdInDivCache");
  const arrObjLstSel = await CodeFunction_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCodeFunctionEN.con_CodeFuncId,
    clsCodeFunctionEN.con_CodeFuncName,
    '代码函数',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CodeFunction_CheckPropertyNew(pobjCodeFunctionEN: clsCodeFunctionEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.codeFuncId) == false &&
    GetStrLen(pobjCodeFunctionEN.codeFuncId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[代码函数Id(codeFuncId)]的长度不能超过4(In 代码函数(CodeFunction))!值:$(pobjCodeFunctionEN.codeFuncId)(clsCodeFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.codeFuncName) == false &&
    GetStrLen(pobjCodeFunctionEN.codeFuncName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[代码函数名(codeFuncName)]的长度不能超过50(In 代码函数(CodeFunction))!值:$(pobjCodeFunctionEN.codeFuncName)(clsCodeFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.funcSignature) == false &&
    GetStrLen(pobjCodeFunctionEN.funcSignature) > 300
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数签名(funcSignature)]的长度不能超过300(In 代码函数(CodeFunction))!值:$(pobjCodeFunctionEN.funcSignature)(clsCodeFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.updDate) == false &&
    GetStrLen(pobjCodeFunctionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 代码函数(CodeFunction))!值:$(pobjCodeFunctionEN.updDate)(clsCodeFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.updUser) == false &&
    GetStrLen(pobjCodeFunctionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 代码函数(CodeFunction))!值:$(pobjCodeFunctionEN.updUser)(clsCodeFunctionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.memo) == false &&
    GetStrLen(pobjCodeFunctionEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 代码函数(CodeFunction))!值:$(pobjCodeFunctionEN.memo)(clsCodeFunctionBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.codeFuncId) == false &&
    undefined !== pobjCodeFunctionEN.codeFuncId &&
    tzDataType.isString(pobjCodeFunctionEN.codeFuncId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[代码函数Id(codeFuncId)]的值:[$(pobjCodeFunctionEN.codeFuncId)], 非法,应该为字符型(In 代码函数(CodeFunction))!(clsCodeFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.codeFuncName) == false &&
    undefined !== pobjCodeFunctionEN.codeFuncName &&
    tzDataType.isString(pobjCodeFunctionEN.codeFuncName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[代码函数名(codeFuncName)]的值:[$(pobjCodeFunctionEN.codeFuncName)], 非法,应该为字符型(In 代码函数(CodeFunction))!(clsCodeFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.funcSignature) == false &&
    undefined !== pobjCodeFunctionEN.funcSignature &&
    tzDataType.isString(pobjCodeFunctionEN.funcSignature) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数签名(funcSignature)]的值:[$(pobjCodeFunctionEN.funcSignature)], 非法,应该为字符型(In 代码函数(CodeFunction))!(clsCodeFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.updDate) == false &&
    undefined !== pobjCodeFunctionEN.updDate &&
    tzDataType.isString(pobjCodeFunctionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjCodeFunctionEN.updDate)], 非法,应该为字符型(In 代码函数(CodeFunction))!(clsCodeFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.updUser) == false &&
    undefined !== pobjCodeFunctionEN.updUser &&
    tzDataType.isString(pobjCodeFunctionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjCodeFunctionEN.updUser)], 非法,应该为字符型(In 代码函数(CodeFunction))!(clsCodeFunctionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.memo) == false &&
    undefined !== pobjCodeFunctionEN.memo &&
    tzDataType.isString(pobjCodeFunctionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjCodeFunctionEN.memo)], 非法,应该为字符型(In 代码函数(CodeFunction))!(clsCodeFunctionBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CodeFunction_CheckProperty4Update(pobjCodeFunctionEN: clsCodeFunctionEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.codeFuncId) == false &&
    GetStrLen(pobjCodeFunctionEN.codeFuncId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[代码函数Id(codeFuncId)]的长度不能超过4(In 代码函数(CodeFunction))!值:$(pobjCodeFunctionEN.codeFuncId)(clsCodeFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.codeFuncName) == false &&
    GetStrLen(pobjCodeFunctionEN.codeFuncName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[代码函数名(codeFuncName)]的长度不能超过50(In 代码函数(CodeFunction))!值:$(pobjCodeFunctionEN.codeFuncName)(clsCodeFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.funcSignature) == false &&
    GetStrLen(pobjCodeFunctionEN.funcSignature) > 300
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数签名(funcSignature)]的长度不能超过300(In 代码函数(CodeFunction))!值:$(pobjCodeFunctionEN.funcSignature)(clsCodeFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.updDate) == false &&
    GetStrLen(pobjCodeFunctionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 代码函数(CodeFunction))!值:$(pobjCodeFunctionEN.updDate)(clsCodeFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.updUser) == false &&
    GetStrLen(pobjCodeFunctionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 代码函数(CodeFunction))!值:$(pobjCodeFunctionEN.updUser)(clsCodeFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.memo) == false &&
    GetStrLen(pobjCodeFunctionEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 代码函数(CodeFunction))!值:$(pobjCodeFunctionEN.memo)(clsCodeFunctionBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.codeFuncId) == false &&
    undefined !== pobjCodeFunctionEN.codeFuncId &&
    tzDataType.isString(pobjCodeFunctionEN.codeFuncId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[代码函数Id(codeFuncId)]的值:[$(pobjCodeFunctionEN.codeFuncId)], 非法,应该为字符型(In 代码函数(CodeFunction))!(clsCodeFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.codeFuncName) == false &&
    undefined !== pobjCodeFunctionEN.codeFuncName &&
    tzDataType.isString(pobjCodeFunctionEN.codeFuncName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[代码函数名(codeFuncName)]的值:[$(pobjCodeFunctionEN.codeFuncName)], 非法,应该为字符型(In 代码函数(CodeFunction))!(clsCodeFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.funcSignature) == false &&
    undefined !== pobjCodeFunctionEN.funcSignature &&
    tzDataType.isString(pobjCodeFunctionEN.funcSignature) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数签名(funcSignature)]的值:[$(pobjCodeFunctionEN.funcSignature)], 非法,应该为字符型(In 代码函数(CodeFunction))!(clsCodeFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.updDate) == false &&
    undefined !== pobjCodeFunctionEN.updDate &&
    tzDataType.isString(pobjCodeFunctionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjCodeFunctionEN.updDate)], 非法,应该为字符型(In 代码函数(CodeFunction))!(clsCodeFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.updUser) == false &&
    undefined !== pobjCodeFunctionEN.updUser &&
    tzDataType.isString(pobjCodeFunctionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjCodeFunctionEN.updUser)], 非法,应该为字符型(In 代码函数(CodeFunction))!(clsCodeFunctionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeFunctionEN.memo) == false &&
    undefined !== pobjCodeFunctionEN.memo &&
    tzDataType.isString(pobjCodeFunctionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjCodeFunctionEN.memo)], 非法,应该为字符型(In 代码函数(CodeFunction))!(clsCodeFunctionBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjCodeFunctionEN.codeFuncId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[代码函数Id]不能为空(In 代码函数)!(clsCodeFunctionBL:CheckProperty4Update)',
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
export function CodeFunction_GetJSONStrByObj(pobjCodeFunctionEN: clsCodeFunctionEN): string {
  pobjCodeFunctionEN.sfUpdFldSetStr = pobjCodeFunctionEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCodeFunctionEN);
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
export function CodeFunction_GetObjLstByJSONStr(strJSON: string): Array<clsCodeFunctionEN> {
  let arrCodeFunctionObjLst = new Array<clsCodeFunctionEN>();
  if (strJSON === '') {
    return arrCodeFunctionObjLst;
  }
  try {
    arrCodeFunctionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCodeFunctionObjLst;
  }
  return arrCodeFunctionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCodeFunctionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CodeFunction_GetObjLstByJSONObjLst(
  arrCodeFunctionObjLstS: Array<clsCodeFunctionEN>,
): Array<clsCodeFunctionEN> {
  const arrCodeFunctionObjLst = new Array<clsCodeFunctionEN>();
  for (const objInFor of arrCodeFunctionObjLstS) {
    const obj1 = CodeFunction_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCodeFunctionObjLst.push(obj1);
  }
  return arrCodeFunctionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CodeFunction_GetObjByJSONStr(strJSON: string): clsCodeFunctionEN {
  let pobjCodeFunctionEN = new clsCodeFunctionEN();
  if (strJSON === '') {
    return pobjCodeFunctionEN;
  }
  try {
    pobjCodeFunctionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCodeFunctionEN;
  }
  return pobjCodeFunctionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CodeFunction_GetCombineCondition(objCodeFunctionCond: clsCodeFunctionEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeFunctionCond.dicFldComparisonOp,
      clsCodeFunctionEN.con_CodeFuncId,
    ) == true
  ) {
    const strComparisonOpCodeFuncId: string =
      objCodeFunctionCond.dicFldComparisonOp[clsCodeFunctionEN.con_CodeFuncId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeFunctionEN.con_CodeFuncId,
      objCodeFunctionCond.codeFuncId,
      strComparisonOpCodeFuncId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeFunctionCond.dicFldComparisonOp,
      clsCodeFunctionEN.con_CodeFuncName,
    ) == true
  ) {
    const strComparisonOpCodeFuncName: string =
      objCodeFunctionCond.dicFldComparisonOp[clsCodeFunctionEN.con_CodeFuncName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeFunctionEN.con_CodeFuncName,
      objCodeFunctionCond.codeFuncName,
      strComparisonOpCodeFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeFunctionCond.dicFldComparisonOp,
      clsCodeFunctionEN.con_FuncSignature,
    ) == true
  ) {
    const strComparisonOpFuncSignature: string =
      objCodeFunctionCond.dicFldComparisonOp[clsCodeFunctionEN.con_FuncSignature];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeFunctionEN.con_FuncSignature,
      objCodeFunctionCond.funcSignature,
      strComparisonOpFuncSignature,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeFunctionCond.dicFldComparisonOp,
      clsCodeFunctionEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCodeFunctionCond.dicFldComparisonOp[clsCodeFunctionEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeFunctionEN.con_UpdDate,
      objCodeFunctionCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeFunctionCond.dicFldComparisonOp,
      clsCodeFunctionEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCodeFunctionCond.dicFldComparisonOp[clsCodeFunctionEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeFunctionEN.con_UpdUser,
      objCodeFunctionCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeFunctionCond.dicFldComparisonOp,
      clsCodeFunctionEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCodeFunctionCond.dicFldComparisonOp[clsCodeFunctionEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeFunctionEN.con_Memo,
      objCodeFunctionCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCodeFunctionENS:源对象
 * @param objCodeFunctionENT:目标对象
 */
export function CodeFunction_GetObjFromJsonObj(
  objCodeFunctionENS: clsCodeFunctionEN,
): clsCodeFunctionEN {
  const objCodeFunctionENT: clsCodeFunctionEN = new clsCodeFunctionEN();
  ObjectAssign(objCodeFunctionENT, objCodeFunctionENS);
  return objCodeFunctionENT;
}
