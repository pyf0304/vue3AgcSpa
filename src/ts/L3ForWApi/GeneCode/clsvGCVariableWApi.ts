/**
 * 类名:clsvGCVariableWApi
 * 表名:vGCVariable(00050561)
 * 版本:2024.08.31.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/05 02:25:46
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vGCVariable(vGCVariable)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年09月05日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvGCVariableEN } from '@/ts/L0Entity/GeneCode/clsvGCVariableEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vGCVariable_Controller = 'vGCVariableApi';
export const vGCVariable_ConstructorName = 'vGCVariable';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strVarId:关键字
 * @returns 对象
 **/
export async function vGCVariable_GetObjByVarIdAsync(
  strVarId: string,
): Promise<clsvGCVariableEN | null> {
  const strThisFuncName = 'GetObjByVarIdAsync';

  if (IsNullOrEmpty(strVarId) == true) {
    const strMsg = Format('参数:[strVarId]不能为空!(In clsvGCVariableWApi.GetObjByVarIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strVarId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strVarId]的长度:[{0}]不正确!(clsvGCVariableWApi.GetObjByVarIdAsync)',
      strVarId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByVarId';
  const strUrl = GetWebApiUrl(vGCVariable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVarId,
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
      const objvGCVariable = vGCVariable_GetObjFromJsonObj(returnObj);
      return objvGCVariable;
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
        vGCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vGCVariable_ConstructorName,
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
 * @param strVarId:所给的关键字
 * @returns 对象
 */
export async function vGCVariable_GetObjByVarIdCache(
  strVarId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByVarIdCache';

  if (IsNullOrEmpty(strVarId) == true) {
    const strMsg = Format('参数:[strVarId]不能为空!(In clsvGCVariableWApi.GetObjByVarIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strVarId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strVarId]的长度:[{0}]不正确!(clsvGCVariableWApi.GetObjByVarIdCache)',
      strVarId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvGCVariableObjLstCache = await vGCVariable_GetObjLstCache(strPrjId);
  try {
    const arrvGCVariableSel = arrvGCVariableObjLstCache.filter((x) => x.varId == strVarId);
    let objvGCVariable: clsvGCVariableEN;
    if (arrvGCVariableSel.length > 0) {
      objvGCVariable = arrvGCVariableSel[0];
      return objvGCVariable;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvGCVariableConst = await vGCVariable_GetObjByVarIdAsync(strVarId);
        if (objvGCVariableConst != null) {
          vGCVariable_ReFreshThisCache(strPrjId);
          return objvGCVariableConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strVarId,
      vGCVariable_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strVarId:所给的关键字
 * @returns 对象
 */
export async function vGCVariable_GetObjByVarIdlocalStorage(strVarId: string) {
  const strThisFuncName = 'GetObjByVarIdlocalStorage';

  if (IsNullOrEmpty(strVarId) == true) {
    const strMsg = Format(
      '参数:[strVarId]不能为空!(In clsvGCVariableWApi.GetObjByVarIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVarId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strVarId]的长度:[{0}]不正确!(clsvGCVariableWApi.GetObjByVarIdlocalStorage)',
      strVarId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvGCVariableEN._CurrTabName, strVarId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvGCVariableCache: clsvGCVariableEN = JSON.parse(strTempObj);
    return objvGCVariableCache;
  }
  try {
    const objvGCVariable = await vGCVariable_GetObjByVarIdAsync(strVarId);
    if (objvGCVariable != null) {
      localStorage.setItem(strKey, JSON.stringify(objvGCVariable));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvGCVariable;
    }
    return objvGCVariable;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strVarId,
      vGCVariable_ConstructorName,
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
 * 日期:2024-09-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vGCVariable_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvGCVariableWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvGCVariableWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvGCVariableEN.con_VarId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvGCVariableEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvGCVariableEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strVarId = strInValue;
  if (IsNullOrEmpty(strVarId) == true) {
    return '';
  }
  const objvGCVariable = await vGCVariable_GetObjByVarIdCache(strVarId, strPrjIdClassfy);
  if (objvGCVariable == null) return '';
  if (objvGCVariable.GetFldValue(strOutFldName) == null) return '';
  return objvGCVariable.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-09-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vGCVariable_SortFunDefa(a: clsvGCVariableEN, b: clsvGCVariableEN): number {
  return a.varId.localeCompare(b.varId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-09-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vGCVariable_SortFunDefa2Fld(a: clsvGCVariableEN, b: clsvGCVariableEN): number {
  if (a.varName == b.varName) return a.varExpression.localeCompare(b.varExpression);
  else return a.varName.localeCompare(b.varName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-09-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vGCVariable_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvGCVariableEN.con_VarId:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          return a.varId.localeCompare(b.varId);
        };
      case clsvGCVariableEN.con_VarName:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (a.varName == null) return -1;
          if (b.varName == null) return 1;
          return a.varName.localeCompare(b.varName);
        };
      case clsvGCVariableEN.con_VarExpression:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (a.varExpression == null) return -1;
          if (b.varExpression == null) return 1;
          return a.varExpression.localeCompare(b.varExpression);
        };
      case clsvGCVariableEN.con_InitValue:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (a.initValue == null) return -1;
          if (b.initValue == null) return 1;
          return a.initValue.localeCompare(b.initValue);
        };
      case clsvGCVariableEN.con_VarTypeId:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (a.varTypeId == null) return -1;
          if (b.varTypeId == null) return 1;
          return a.varTypeId.localeCompare(b.varTypeId);
        };
      case clsvGCVariableEN.con_VarTypeName:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (a.varTypeName == null) return -1;
          if (b.varTypeName == null) return 1;
          return a.varTypeName.localeCompare(b.varTypeName);
        };
      case clsvGCVariableEN.con_PrjId:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvGCVariableEN.con_UpdDate:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvGCVariableEN.con_UpdUser:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvGCVariableEN.con_Memo:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vGCVariable]中不存在!(in ${vGCVariable_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvGCVariableEN.con_VarId:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          return b.varId.localeCompare(a.varId);
        };
      case clsvGCVariableEN.con_VarName:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (b.varName == null) return -1;
          if (a.varName == null) return 1;
          return b.varName.localeCompare(a.varName);
        };
      case clsvGCVariableEN.con_VarExpression:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (b.varExpression == null) return -1;
          if (a.varExpression == null) return 1;
          return b.varExpression.localeCompare(a.varExpression);
        };
      case clsvGCVariableEN.con_InitValue:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (b.initValue == null) return -1;
          if (a.initValue == null) return 1;
          return b.initValue.localeCompare(a.initValue);
        };
      case clsvGCVariableEN.con_VarTypeId:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (b.varTypeId == null) return -1;
          if (a.varTypeId == null) return 1;
          return b.varTypeId.localeCompare(a.varTypeId);
        };
      case clsvGCVariableEN.con_VarTypeName:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (b.varTypeName == null) return -1;
          if (a.varTypeName == null) return 1;
          return b.varTypeName.localeCompare(a.varTypeName);
        };
      case clsvGCVariableEN.con_PrjId:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvGCVariableEN.con_UpdDate:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvGCVariableEN.con_UpdUser:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvGCVariableEN.con_Memo:
        return (a: clsvGCVariableEN, b: clsvGCVariableEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vGCVariable]中不存在!(in ${vGCVariable_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-09-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vGCVariable_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvGCVariableEN.con_VarId:
      return (obj: clsvGCVariableEN) => {
        return obj.varId === value;
      };
    case clsvGCVariableEN.con_VarName:
      return (obj: clsvGCVariableEN) => {
        return obj.varName === value;
      };
    case clsvGCVariableEN.con_VarExpression:
      return (obj: clsvGCVariableEN) => {
        return obj.varExpression === value;
      };
    case clsvGCVariableEN.con_InitValue:
      return (obj: clsvGCVariableEN) => {
        return obj.initValue === value;
      };
    case clsvGCVariableEN.con_VarTypeId:
      return (obj: clsvGCVariableEN) => {
        return obj.varTypeId === value;
      };
    case clsvGCVariableEN.con_VarTypeName:
      return (obj: clsvGCVariableEN) => {
        return obj.varTypeName === value;
      };
    case clsvGCVariableEN.con_PrjId:
      return (obj: clsvGCVariableEN) => {
        return obj.prjId === value;
      };
    case clsvGCVariableEN.con_UpdDate:
      return (obj: clsvGCVariableEN) => {
        return obj.updDate === value;
      };
    case clsvGCVariableEN.con_UpdUser:
      return (obj: clsvGCVariableEN) => {
        return obj.updUser === value;
      };
    case clsvGCVariableEN.con_Memo:
      return (obj: clsvGCVariableEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vGCVariable]中不存在!(in ${vGCVariable_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-09-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vGCVariable_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvGCVariableWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvGCVariableWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvGCVariableEN.con_VarId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvGCVariable = await vGCVariable_GetObjLstCache(strPrjIdClassfy);
  if (arrvGCVariable == null) return [];
  let arrvGCVariableSel = arrvGCVariable;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvGCVariableSel = arrvGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvGCVariableSel = arrvGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvGCVariableSel = arrvGCVariableSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvGCVariableSel = arrvGCVariableSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvGCVariableSel = arrvGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvGCVariableSel = arrvGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvGCVariableSel = arrvGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvGCVariableSel = arrvGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvGCVariableSel = arrvGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvGCVariableSel = arrvGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvGCVariableSel.length == 0) return [];
  return arrvGCVariableSel.map((x) => x.varId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vGCVariable_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vGCVariable_Controller, strAction);

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
        vGCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vGCVariable_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vGCVariable_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vGCVariable_Controller, strAction);

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
        vGCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vGCVariable_ConstructorName,
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
export async function vGCVariable_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vGCVariable_Controller, strAction);

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
        vGCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vGCVariable_ConstructorName,
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
export async function vGCVariable_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvGCVariableEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vGCVariable_Controller, strAction);

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
      const objvGCVariable = vGCVariable_GetObjFromJsonObj(returnObj);
      return objvGCVariable;
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
        vGCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vGCVariable_ConstructorName,
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
export async function vGCVariable_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvGCVariableEN.WhereFormat) == false) {
    strWhereCond = Format(clsvGCVariableEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvGCVariableEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvGCVariableEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvGCVariableEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvGCVariableExObjLstCache: Array<clsvGCVariableEN> = CacheHelper.Get(strKey);
    const arrvGCVariableObjLstT = vGCVariable_GetObjLstByJSONObjLst(arrvGCVariableExObjLstCache);
    return arrvGCVariableObjLstT;
  }
  try {
    const arrvGCVariableExObjLst = await vGCVariable_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvGCVariableExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvGCVariableExObjLst.length,
    );
    console.log(strInfo);
    return arrvGCVariableExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vGCVariable_ConstructorName,
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
export async function vGCVariable_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvGCVariableEN.WhereFormat) == false) {
    strWhereCond = Format(clsvGCVariableEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvGCVariableEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvGCVariableEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvGCVariableEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvGCVariableEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvGCVariableExObjLstCache: Array<clsvGCVariableEN> = JSON.parse(strTempObjLst);
    const arrvGCVariableObjLstT = vGCVariable_GetObjLstByJSONObjLst(arrvGCVariableExObjLstCache);
    return arrvGCVariableObjLstT;
  }
  try {
    const arrvGCVariableExObjLst = await vGCVariable_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvGCVariableExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvGCVariableExObjLst.length,
    );
    console.log(strInfo);
    return arrvGCVariableExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vGCVariable_ConstructorName,
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
export async function vGCVariable_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvGCVariableEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvGCVariableObjLstCache: Array<clsvGCVariableEN> = JSON.parse(strTempObjLst);
    return arrvGCVariableObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vGCVariable_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvGCVariableEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vGCVariable_Controller, strAction);

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
          vGCVariable_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vGCVariable_GetObjLstByJSONObjLst(returnObjLst);
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
        vGCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vGCVariable_ConstructorName,
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
export async function vGCVariable_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvGCVariableEN.WhereFormat) == false) {
    strWhereCond = Format(clsvGCVariableEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvGCVariableEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvGCVariableEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvGCVariableEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvGCVariableEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvGCVariableExObjLstCache: Array<clsvGCVariableEN> = JSON.parse(strTempObjLst);
    const arrvGCVariableObjLstT = vGCVariable_GetObjLstByJSONObjLst(arrvGCVariableExObjLstCache);
    return arrvGCVariableObjLstT;
  }
  try {
    const arrvGCVariableExObjLst = await vGCVariable_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvGCVariableExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvGCVariableExObjLst.length,
    );
    console.log(strInfo);
    return arrvGCVariableExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vGCVariable_ConstructorName,
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
export async function vGCVariable_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvGCVariableEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvGCVariableObjLstCache: Array<clsvGCVariableEN> = JSON.parse(strTempObjLst);
    return arrvGCVariableObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vGCVariable_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvGCVariableEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvGCVariableWApi.vGCVariable_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvGCVariableWApi.vGCVariable_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvGCVariableObjLstCache;
  switch (clsvGCVariableEN.CacheModeId) {
    case '04': //sessionStorage
      arrvGCVariableObjLstCache = await vGCVariable_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrvGCVariableObjLstCache = await vGCVariable_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrvGCVariableObjLstCache = await vGCVariable_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrvGCVariableObjLstCache = await vGCVariable_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrvGCVariableObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vGCVariable_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvGCVariableObjLstCache;
  switch (clsvGCVariableEN.CacheModeId) {
    case '04': //sessionStorage
      arrvGCVariableObjLstCache = await vGCVariable_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrvGCVariableObjLstCache = await vGCVariable_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrvGCVariableObjLstCache = null;
      break;
    default:
      arrvGCVariableObjLstCache = null;
      break;
  }
  return arrvGCVariableObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrVarIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vGCVariable_GetSubObjLstCache(
  objvGCVariableCond: clsvGCVariableEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvGCVariableObjLstCache = await vGCVariable_GetObjLstCache(strPrjId);
  let arrvGCVariableSel = arrvGCVariableObjLstCache;
  if (objvGCVariableCond.sfFldComparisonOp == null || objvGCVariableCond.sfFldComparisonOp == '')
    return arrvGCVariableSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvGCVariableCond.sfFldComparisonOp,
  );
  //console.log("clsvGCVariableWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvGCVariableCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvGCVariableCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvGCVariableSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvGCVariableCond),
      vGCVariable_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvGCVariableEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrVarId:关键字列表
 * @returns 对象列表
 **/
export async function vGCVariable_GetObjLstByVarIdLstAsync(
  arrVarId: Array<string>,
): Promise<Array<clsvGCVariableEN>> {
  const strThisFuncName = 'GetObjLstByVarIdLstAsync';
  const strAction = 'GetObjLstByVarIdLst';
  const strUrl = GetWebApiUrl(vGCVariable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrVarId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vGCVariable_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vGCVariable_GetObjLstByJSONObjLst(returnObjLst);
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
        vGCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vGCVariable_ConstructorName,
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
 * @param arrstrVarIdLst:关键字列表
 * @returns 对象列表
 */
export async function vGCVariable_GetObjLstByVarIdLstCache(
  arrVarIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByVarIdLstCache';
  try {
    const arrvGCVariableObjLstCache = await vGCVariable_GetObjLstCache(strPrjId);
    const arrvGCVariableSel = arrvGCVariableObjLstCache.filter(
      (x) => arrVarIdLst.indexOf(x.varId) > -1,
    );
    return arrvGCVariableSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrVarIdLst.join(','),
      vGCVariable_ConstructorName,
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
export async function vGCVariable_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvGCVariableEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vGCVariable_Controller, strAction);

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
          vGCVariable_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vGCVariable_GetObjLstByJSONObjLst(returnObjLst);
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
        vGCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vGCVariable_ConstructorName,
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
export async function vGCVariable_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvGCVariableEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vGCVariable_Controller, strAction);

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
          vGCVariable_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vGCVariable_GetObjLstByJSONObjLst(returnObjLst);
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
        vGCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vGCVariable_ConstructorName,
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
export async function vGCVariable_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvGCVariableEN>();
  const arrvGCVariableObjLstCache = await vGCVariable_GetObjLstCache(strPrjId);
  if (arrvGCVariableObjLstCache.length == 0) return arrvGCVariableObjLstCache;
  let arrvGCVariableSel = arrvGCVariableObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvGCVariableCond = new clsvGCVariableEN();
  ObjectAssign(objvGCVariableCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvGCVariableWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvGCVariableCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvGCVariableSel.length == 0) return arrvGCVariableSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvGCVariableSel = arrvGCVariableSel.sort(vGCVariable_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvGCVariableSel = arrvGCVariableSel.sort(objPagerPara.sortFun);
    }
    arrvGCVariableSel = arrvGCVariableSel.slice(intStart, intEnd);
    return arrvGCVariableSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vGCVariable_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvGCVariableEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vGCVariable_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvGCVariableEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvGCVariableEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vGCVariable_Controller, strAction);

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
          vGCVariable_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vGCVariable_GetObjLstByJSONObjLst(returnObjLst);
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
        vGCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vGCVariable_ConstructorName,
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
 * @param objstrVarIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vGCVariable_IsExistRecordCache(
  objvGCVariableCond: clsvGCVariableEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvGCVariableObjLstCache = await vGCVariable_GetObjLstCache(strPrjId);
  if (arrvGCVariableObjLstCache == null) return false;
  let arrvGCVariableSel = arrvGCVariableObjLstCache;
  if (objvGCVariableCond.sfFldComparisonOp == null || objvGCVariableCond.sfFldComparisonOp == '')
    return arrvGCVariableSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvGCVariableCond.sfFldComparisonOp,
  );
  //console.log("clsvGCVariableWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvGCVariableCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvGCVariableCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvGCVariableSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvGCVariableCond),
      vGCVariable_ConstructorName,
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
export async function vGCVariable_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vGCVariable_Controller, strAction);

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
        vGCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vGCVariable_ConstructorName,
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
 * @param strVarId:所给的关键字
 * @returns 对象
 */
export async function vGCVariable_IsExistCache(strVarId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvGCVariableObjLstCache = await vGCVariable_GetObjLstCache(strPrjId);
  if (arrvGCVariableObjLstCache == null) return false;
  try {
    const arrvGCVariableSel = arrvGCVariableObjLstCache.filter((x) => x.varId == strVarId);
    if (arrvGCVariableSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strVarId,
      vGCVariable_ConstructorName,
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
 * @param strVarId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vGCVariable_IsExistAsync(strVarId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vGCVariable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVarId,
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
        vGCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vGCVariable_ConstructorName,
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
export async function vGCVariable_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vGCVariable_Controller, strAction);

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
        vGCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vGCVariable_ConstructorName,
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
 * @param objvGCVariableCond:条件对象
 * @returns 对象列表记录数
 */
export async function vGCVariable_GetRecCountByCondCache(
  objvGCVariableCond: clsvGCVariableEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvGCVariableObjLstCache = await vGCVariable_GetObjLstCache(strPrjId);
  if (arrvGCVariableObjLstCache == null) return 0;
  let arrvGCVariableSel = arrvGCVariableObjLstCache;
  if (objvGCVariableCond.sfFldComparisonOp == null || objvGCVariableCond.sfFldComparisonOp == '')
    return arrvGCVariableSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvGCVariableCond.sfFldComparisonOp,
  );
  //console.log("clsvGCVariableWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvGCVariableCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvGCVariableCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvGCVariableSel = arrvGCVariableSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvGCVariableSel = arrvGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvGCVariableSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvGCVariableCond),
      vGCVariable_ConstructorName,
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
export function vGCVariable_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vGCVariable_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsvGCVariableWApi.vGCVariable_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsvGCVariableWApi.vGCVariable_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvGCVariableEN._CurrTabName, strPrjId);
    switch (clsvGCVariableEN.CacheModeId) {
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
 * 日期:2024-09-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vGCVariable_GetJSONStrByObj(pobjvGCVariableEN: clsvGCVariableEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvGCVariableEN);
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
 * 日期:2024-09-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vGCVariable_GetObjLstByJSONStr(strJSON: string): Array<clsvGCVariableEN> {
  let arrvGCVariableObjLst = new Array<clsvGCVariableEN>();
  if (strJSON === '') {
    return arrvGCVariableObjLst;
  }
  try {
    arrvGCVariableObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvGCVariableObjLst;
  }
  return arrvGCVariableObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-09-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvGCVariableObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vGCVariable_GetObjLstByJSONObjLst(
  arrvGCVariableObjLstS: Array<clsvGCVariableEN>,
): Array<clsvGCVariableEN> {
  const arrvGCVariableObjLst = new Array<clsvGCVariableEN>();
  for (const objInFor of arrvGCVariableObjLstS) {
    const obj1 = vGCVariable_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvGCVariableObjLst.push(obj1);
  }
  return arrvGCVariableObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-09-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vGCVariable_GetObjByJSONStr(strJSON: string): clsvGCVariableEN {
  let pobjvGCVariableEN = new clsvGCVariableEN();
  if (strJSON === '') {
    return pobjvGCVariableEN;
  }
  try {
    pobjvGCVariableEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvGCVariableEN;
  }
  return pobjvGCVariableEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vGCVariable_GetCombineCondition(objvGCVariableCond: clsvGCVariableEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvGCVariableCond.dicFldComparisonOp,
      clsvGCVariableEN.con_VarId,
    ) == true
  ) {
    const strComparisonOpVarId: string =
      objvGCVariableCond.dicFldComparisonOp[clsvGCVariableEN.con_VarId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvGCVariableEN.con_VarId,
      objvGCVariableCond.varId,
      strComparisonOpVarId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvGCVariableCond.dicFldComparisonOp,
      clsvGCVariableEN.con_VarName,
    ) == true
  ) {
    const strComparisonOpVarName: string =
      objvGCVariableCond.dicFldComparisonOp[clsvGCVariableEN.con_VarName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvGCVariableEN.con_VarName,
      objvGCVariableCond.varName,
      strComparisonOpVarName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvGCVariableCond.dicFldComparisonOp,
      clsvGCVariableEN.con_VarExpression,
    ) == true
  ) {
    const strComparisonOpVarExpression: string =
      objvGCVariableCond.dicFldComparisonOp[clsvGCVariableEN.con_VarExpression];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvGCVariableEN.con_VarExpression,
      objvGCVariableCond.varExpression,
      strComparisonOpVarExpression,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvGCVariableCond.dicFldComparisonOp,
      clsvGCVariableEN.con_InitValue,
    ) == true
  ) {
    const strComparisonOpInitValue: string =
      objvGCVariableCond.dicFldComparisonOp[clsvGCVariableEN.con_InitValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvGCVariableEN.con_InitValue,
      objvGCVariableCond.initValue,
      strComparisonOpInitValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvGCVariableCond.dicFldComparisonOp,
      clsvGCVariableEN.con_VarTypeId,
    ) == true
  ) {
    const strComparisonOpVarTypeId: string =
      objvGCVariableCond.dicFldComparisonOp[clsvGCVariableEN.con_VarTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvGCVariableEN.con_VarTypeId,
      objvGCVariableCond.varTypeId,
      strComparisonOpVarTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvGCVariableCond.dicFldComparisonOp,
      clsvGCVariableEN.con_VarTypeName,
    ) == true
  ) {
    const strComparisonOpVarTypeName: string =
      objvGCVariableCond.dicFldComparisonOp[clsvGCVariableEN.con_VarTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvGCVariableEN.con_VarTypeName,
      objvGCVariableCond.varTypeName,
      strComparisonOpVarTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvGCVariableCond.dicFldComparisonOp,
      clsvGCVariableEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvGCVariableCond.dicFldComparisonOp[clsvGCVariableEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvGCVariableEN.con_PrjId,
      objvGCVariableCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvGCVariableCond.dicFldComparisonOp,
      clsvGCVariableEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvGCVariableCond.dicFldComparisonOp[clsvGCVariableEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvGCVariableEN.con_UpdDate,
      objvGCVariableCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvGCVariableCond.dicFldComparisonOp,
      clsvGCVariableEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvGCVariableCond.dicFldComparisonOp[clsvGCVariableEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvGCVariableEN.con_UpdUser,
      objvGCVariableCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvGCVariableCond.dicFldComparisonOp,
      clsvGCVariableEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvGCVariableCond.dicFldComparisonOp[clsvGCVariableEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvGCVariableEN.con_Memo,
      objvGCVariableCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvGCVariableENS:源对象
 * @param objvGCVariableENT:目标对象
 */
export function vGCVariable_GetObjFromJsonObj(
  objvGCVariableENS: clsvGCVariableEN,
): clsvGCVariableEN {
  const objvGCVariableENT: clsvGCVariableEN = new clsvGCVariableEN();
  ObjectAssign(objvGCVariableENT, objvGCVariableENS);
  return objvGCVariableENT;
}
