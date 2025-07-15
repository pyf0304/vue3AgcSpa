/**
 * 类名:clsvFunction4Code_SimWApi
 * 表名:vFunction4Code_Sim(00050602)
 * 版本:2024.10.15.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/15 11:49:10
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v函数4Code_Sim(vFunction4Code_Sim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年10月15日.
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
import { clsvFunction4Code_SimEN } from '@/ts/L0Entity/PrjFunction/clsvFunction4Code_SimEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vFunction4Code_Sim_Controller = 'vFunction4Code_SimApi';
export const vFunction4Code_Sim_ConstructorName = 'vFunction4Code_Sim';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncId4Code:关键字
 * @returns 对象
 **/
export async function vFunction4Code_Sim_GetObjByFuncId4CodeAsync(
  strFuncId4Code: string,
): Promise<clsvFunction4Code_SimEN | null> {
  const strThisFuncName = 'GetObjByFuncId4CodeAsync';

  if (IsNullOrEmpty(strFuncId4Code) == true) {
    const strMsg = Format(
      '参数:[strFuncId4Code]不能为空!(In clsvFunction4Code_SimWApi.GetObjByFuncId4CodeAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4Code.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4Code]的长度:[{0}]不正确!(clsvFunction4Code_SimWApi.GetObjByFuncId4CodeAsync)',
      strFuncId4Code.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncId4Code';
  const strUrl = GetWebApiUrl(vFunction4Code_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId4Code,
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
      const objvFunction4Code_Sim = vFunction4Code_Sim_GetObjFromJsonObj(returnObj);
      return objvFunction4Code_Sim;
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
        vFunction4Code_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_Sim_ConstructorName,
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
 * @param strFuncId4Code:所给的关键字
 * @returns 对象
 */
export async function vFunction4Code_Sim_GetObjByFuncId4CodeCache(
  strFuncId4Code: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFuncId4CodeCache';

  if (IsNullOrEmpty(strFuncId4Code) == true) {
    const strMsg = Format(
      '参数:[strFuncId4Code]不能为空!(In clsvFunction4Code_SimWApi.GetObjByFuncId4CodeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4Code.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4Code]的长度:[{0}]不正确!(clsvFunction4Code_SimWApi.GetObjByFuncId4CodeCache)',
      strFuncId4Code.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFunction4Code_SimObjLstCache = await vFunction4Code_Sim_GetObjLstCache();
  try {
    const arrvFunction4Code_SimSel = arrvFunction4Code_SimObjLstCache.filter(
      (x) => x.funcId4Code == strFuncId4Code,
    );
    let objvFunction4Code_Sim: clsvFunction4Code_SimEN;
    if (arrvFunction4Code_SimSel.length > 0) {
      objvFunction4Code_Sim = arrvFunction4Code_SimSel[0];
      return objvFunction4Code_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvFunction4Code_SimConst = await vFunction4Code_Sim_GetObjByFuncId4CodeAsync(
          strFuncId4Code,
        );
        if (objvFunction4Code_SimConst != null) {
          vFunction4Code_Sim_ReFreshThisCache();
          return objvFunction4Code_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncId4Code,
      vFunction4Code_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strFuncId4Code:所给的关键字
 * @returns 对象
 */
export async function vFunction4Code_Sim_GetObjByFuncId4CodelocalStorage(strFuncId4Code: string) {
  const strThisFuncName = 'GetObjByFuncId4CodelocalStorage';

  if (IsNullOrEmpty(strFuncId4Code) == true) {
    const strMsg = Format(
      '参数:[strFuncId4Code]不能为空!(In clsvFunction4Code_SimWApi.GetObjByFuncId4CodelocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4Code.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4Code]的长度:[{0}]不正确!(clsvFunction4Code_SimWApi.GetObjByFuncId4CodelocalStorage)',
      strFuncId4Code.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvFunction4Code_SimEN._CurrTabName, strFuncId4Code);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvFunction4Code_SimCache: clsvFunction4Code_SimEN = JSON.parse(strTempObj);
    return objvFunction4Code_SimCache;
  }
  try {
    const objvFunction4Code_Sim = await vFunction4Code_Sim_GetObjByFuncId4CodeAsync(strFuncId4Code);
    if (objvFunction4Code_Sim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvFunction4Code_Sim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvFunction4Code_Sim;
    }
    return objvFunction4Code_Sim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncId4Code,
      vFunction4Code_Sim_ConstructorName,
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
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function vFunction4Code_Sim_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvFunction4Code_SimEN.con_FuncId4Code) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFunction4Code_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvFunction4Code_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFuncId4Code = strInValue;
  if (IsNullOrEmpty(strFuncId4Code) == true) {
    return '';
  }
  const objvFunction4Code_Sim = await vFunction4Code_Sim_GetObjByFuncId4CodeCache(strFuncId4Code);
  if (objvFunction4Code_Sim == null) return '';
  if (objvFunction4Code_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvFunction4Code_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunction4Code_Sim_SortFunDefa(
  a: clsvFunction4Code_SimEN,
  b: clsvFunction4Code_SimEN,
): number {
  return a.funcId4Code.localeCompare(b.funcId4Code);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunction4Code_Sim_SortFunDefa2Fld(
  a: clsvFunction4Code_SimEN,
  b: clsvFunction4Code_SimEN,
): number {
  if (a.funcName4Code == b.funcName4Code) return a.funcCHName4Code.localeCompare(b.funcCHName4Code);
  else return a.funcName4Code.localeCompare(b.funcName4Code);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunction4Code_Sim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFunction4Code_SimEN.con_FuncId4Code:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          return a.funcId4Code.localeCompare(b.funcId4Code);
        };
      case clsvFunction4Code_SimEN.con_FuncName4Code:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          return a.funcName4Code.localeCompare(b.funcName4Code);
        };
      case clsvFunction4Code_SimEN.con_FuncCHName4Code:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          if (a.funcCHName4Code == null) return -1;
          if (b.funcCHName4Code == null) return 1;
          return a.funcCHName4Code.localeCompare(b.funcCHName4Code);
        };
      case clsvFunction4Code_SimEN.con_FuncGCTypeId:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          if (a.funcGCTypeId == null) return -1;
          if (b.funcGCTypeId == null) return 1;
          return a.funcGCTypeId.localeCompare(b.funcGCTypeId);
        };
      case clsvFunction4Code_SimEN.con_ApplicationTypeId:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsvFunction4Code_SimEN.con_FuncPurposeId:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          return a.funcPurposeId.localeCompare(b.funcPurposeId);
        };
      case clsvFunction4Code_SimEN.con_FuncTypeId:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          if (a.funcTypeId == null) return -1;
          if (b.funcTypeId == null) return 1;
          return a.funcTypeId.localeCompare(b.funcTypeId);
        };
      case clsvFunction4Code_SimEN.con_UsedTimes:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          return a.usedTimes - b.usedTimes;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFunction4Code_Sim]中不存在!(in ${vFunction4Code_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFunction4Code_SimEN.con_FuncId4Code:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          return b.funcId4Code.localeCompare(a.funcId4Code);
        };
      case clsvFunction4Code_SimEN.con_FuncName4Code:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          return b.funcName4Code.localeCompare(a.funcName4Code);
        };
      case clsvFunction4Code_SimEN.con_FuncCHName4Code:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          if (b.funcCHName4Code == null) return -1;
          if (a.funcCHName4Code == null) return 1;
          return b.funcCHName4Code.localeCompare(a.funcCHName4Code);
        };
      case clsvFunction4Code_SimEN.con_FuncGCTypeId:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          if (b.funcGCTypeId == null) return -1;
          if (a.funcGCTypeId == null) return 1;
          return b.funcGCTypeId.localeCompare(a.funcGCTypeId);
        };
      case clsvFunction4Code_SimEN.con_ApplicationTypeId:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsvFunction4Code_SimEN.con_FuncPurposeId:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          return b.funcPurposeId.localeCompare(a.funcPurposeId);
        };
      case clsvFunction4Code_SimEN.con_FuncTypeId:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          if (b.funcTypeId == null) return -1;
          if (a.funcTypeId == null) return 1;
          return b.funcTypeId.localeCompare(a.funcTypeId);
        };
      case clsvFunction4Code_SimEN.con_UsedTimes:
        return (a: clsvFunction4Code_SimEN, b: clsvFunction4Code_SimEN) => {
          return b.usedTimes - a.usedTimes;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFunction4Code_Sim]中不存在!(in ${vFunction4Code_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vFunction4Code_Sim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFunction4Code_SimEN.con_FuncId4Code:
      return (obj: clsvFunction4Code_SimEN) => {
        return obj.funcId4Code === value;
      };
    case clsvFunction4Code_SimEN.con_FuncName4Code:
      return (obj: clsvFunction4Code_SimEN) => {
        return obj.funcName4Code === value;
      };
    case clsvFunction4Code_SimEN.con_FuncCHName4Code:
      return (obj: clsvFunction4Code_SimEN) => {
        return obj.funcCHName4Code === value;
      };
    case clsvFunction4Code_SimEN.con_FuncGCTypeId:
      return (obj: clsvFunction4Code_SimEN) => {
        return obj.funcGCTypeId === value;
      };
    case clsvFunction4Code_SimEN.con_ApplicationTypeId:
      return (obj: clsvFunction4Code_SimEN) => {
        return obj.applicationTypeId === value;
      };
    case clsvFunction4Code_SimEN.con_FuncPurposeId:
      return (obj: clsvFunction4Code_SimEN) => {
        return obj.funcPurposeId === value;
      };
    case clsvFunction4Code_SimEN.con_FuncTypeId:
      return (obj: clsvFunction4Code_SimEN) => {
        return obj.funcTypeId === value;
      };
    case clsvFunction4Code_SimEN.con_UsedTimes:
      return (obj: clsvFunction4Code_SimEN) => {
        return obj.usedTimes === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFunction4Code_Sim]中不存在!(in ${vFunction4Code_Sim_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function vFunction4Code_Sim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvFunction4Code_SimEN.con_FuncId4Code) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvFunction4Code_Sim = await vFunction4Code_Sim_GetObjLstCache();
  if (arrvFunction4Code_Sim == null) return [];
  let arrvFunction4Code_SimSel = arrvFunction4Code_Sim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvFunction4Code_SimSel.length == 0) return [];
  return arrvFunction4Code_SimSel.map((x) => x.funcId4Code);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFunction4Code_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFunction4Code_Sim_Controller, strAction);

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
        vFunction4Code_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_Sim_ConstructorName,
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
export async function vFunction4Code_Sim_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vFunction4Code_Sim_Controller, strAction);

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
        vFunction4Code_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_Sim_ConstructorName,
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
export async function vFunction4Code_Sim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFunction4Code_Sim_Controller, strAction);

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
        vFunction4Code_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_Sim_ConstructorName,
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
export async function vFunction4Code_Sim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFunction4Code_SimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFunction4Code_Sim_Controller, strAction);

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
      const objvFunction4Code_Sim = vFunction4Code_Sim_GetObjFromJsonObj(returnObj);
      return objvFunction4Code_Sim;
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
        vFunction4Code_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_Sim_ConstructorName,
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
export async function vFunction4Code_Sim_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvFunction4Code_SimEN._CurrTabName;
  if (IsNullOrEmpty(clsvFunction4Code_SimEN.WhereFormat) == false) {
    strWhereCond = clsvFunction4Code_SimEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsvFunction4Code_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFunction4Code_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvFunction4Code_SimExObjLstCache: Array<clsvFunction4Code_SimEN> =
      CacheHelper.Get(strKey);
    const arrvFunction4Code_SimObjLstT = vFunction4Code_Sim_GetObjLstByJSONObjLst(
      arrvFunction4Code_SimExObjLstCache,
    );
    return arrvFunction4Code_SimObjLstT;
  }
  try {
    const arrvFunction4Code_SimExObjLst = await vFunction4Code_Sim_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvFunction4Code_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFunction4Code_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFunction4Code_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFunction4Code_Sim_ConstructorName,
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
export async function vFunction4Code_Sim_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvFunction4Code_SimEN._CurrTabName;
  if (IsNullOrEmpty(clsvFunction4Code_SimEN.WhereFormat) == false) {
    strWhereCond = clsvFunction4Code_SimEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsvFunction4Code_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFunction4Code_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFunction4Code_SimExObjLstCache: Array<clsvFunction4Code_SimEN> =
      JSON.parse(strTempObjLst);
    const arrvFunction4Code_SimObjLstT = vFunction4Code_Sim_GetObjLstByJSONObjLst(
      arrvFunction4Code_SimExObjLstCache,
    );
    return arrvFunction4Code_SimObjLstT;
  }
  try {
    const arrvFunction4Code_SimExObjLst = await vFunction4Code_Sim_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvFunction4Code_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFunction4Code_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFunction4Code_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFunction4Code_Sim_ConstructorName,
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
export async function vFunction4Code_Sim_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvFunction4Code_SimEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFunction4Code_SimObjLstCache: Array<clsvFunction4Code_SimEN> =
      JSON.parse(strTempObjLst);
    return arrvFunction4Code_SimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vFunction4Code_Sim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFunction4Code_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFunction4Code_Sim_Controller, strAction);

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
          vFunction4Code_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4Code_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4Code_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_Sim_ConstructorName,
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
export async function vFunction4Code_Sim_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvFunction4Code_SimEN._CurrTabName;
  if (IsNullOrEmpty(clsvFunction4Code_SimEN.WhereFormat) == false) {
    strWhereCond = clsvFunction4Code_SimEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsvFunction4Code_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFunction4Code_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFunction4Code_SimExObjLstCache: Array<clsvFunction4Code_SimEN> =
      JSON.parse(strTempObjLst);
    const arrvFunction4Code_SimObjLstT = vFunction4Code_Sim_GetObjLstByJSONObjLst(
      arrvFunction4Code_SimExObjLstCache,
    );
    return arrvFunction4Code_SimObjLstT;
  }
  try {
    const arrvFunction4Code_SimExObjLst = await vFunction4Code_Sim_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvFunction4Code_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFunction4Code_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFunction4Code_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFunction4Code_Sim_ConstructorName,
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
export async function vFunction4Code_Sim_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvFunction4Code_SimEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFunction4Code_SimObjLstCache: Array<clsvFunction4Code_SimEN> =
      JSON.parse(strTempObjLst);
    return arrvFunction4Code_SimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFunction4Code_Sim_GetObjLstCache(): Promise<Array<clsvFunction4Code_SimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvFunction4Code_SimObjLstCache;
  switch (clsvFunction4Code_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFunction4Code_SimObjLstCache = await vFunction4Code_Sim_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvFunction4Code_SimObjLstCache = await vFunction4Code_Sim_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvFunction4Code_SimObjLstCache = await vFunction4Code_Sim_GetObjLstClientCache();
      break;
    default:
      arrvFunction4Code_SimObjLstCache = await vFunction4Code_Sim_GetObjLstClientCache();
      break;
  }
  return arrvFunction4Code_SimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFunction4Code_Sim_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvFunction4Code_SimObjLstCache;
  switch (clsvFunction4Code_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFunction4Code_SimObjLstCache =
        await vFunction4Code_Sim_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvFunction4Code_SimObjLstCache = await vFunction4Code_Sim_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvFunction4Code_SimObjLstCache = null;
      break;
    default:
      arrvFunction4Code_SimObjLstCache = null;
      break;
  }
  return arrvFunction4Code_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFuncId4CodeCond:条件对象
 * @returns 对象列表子集
 */
export async function vFunction4Code_Sim_GetSubObjLstCache(
  objvFunction4Code_SimCond: clsvFunction4Code_SimEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvFunction4Code_SimObjLstCache = await vFunction4Code_Sim_GetObjLstCache();
  let arrvFunction4Code_SimSel = arrvFunction4Code_SimObjLstCache;
  if (
    objvFunction4Code_SimCond.sfFldComparisonOp == null ||
    objvFunction4Code_SimCond.sfFldComparisonOp == ''
  )
    return arrvFunction4Code_SimSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFunction4Code_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvFunction4Code_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFunction4Code_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFunction4Code_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFunction4Code_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFunction4Code_SimCond),
      vFunction4Code_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFunction4Code_SimEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFuncId4Code:关键字列表
 * @returns 对象列表
 **/
export async function vFunction4Code_Sim_GetObjLstByFuncId4CodeLstAsync(
  arrFuncId4Code: Array<string>,
): Promise<Array<clsvFunction4Code_SimEN>> {
  const strThisFuncName = 'GetObjLstByFuncId4CodeLstAsync';
  const strAction = 'GetObjLstByFuncId4CodeLst';
  const strUrl = GetWebApiUrl(vFunction4Code_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncId4Code, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vFunction4Code_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4Code_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4Code_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_Sim_ConstructorName,
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
 * @param arrstrFuncId4CodeLst:关键字列表
 * @returns 对象列表
 */
export async function vFunction4Code_Sim_GetObjLstByFuncId4CodeLstCache(
  arrFuncId4CodeLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByFuncId4CodeLstCache';
  try {
    const arrvFunction4Code_SimObjLstCache = await vFunction4Code_Sim_GetObjLstCache();
    const arrvFunction4Code_SimSel = arrvFunction4Code_SimObjLstCache.filter(
      (x) => arrFuncId4CodeLst.indexOf(x.funcId4Code) > -1,
    );
    return arrvFunction4Code_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFuncId4CodeLst.join(','),
      vFunction4Code_Sim_ConstructorName,
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
export async function vFunction4Code_Sim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFunction4Code_SimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFunction4Code_Sim_Controller, strAction);

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
          vFunction4Code_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4Code_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4Code_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_Sim_ConstructorName,
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
export async function vFunction4Code_Sim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFunction4Code_SimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFunction4Code_Sim_Controller, strAction);

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
          vFunction4Code_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4Code_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4Code_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_Sim_ConstructorName,
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
export async function vFunction4Code_Sim_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFunction4Code_SimEN>();
  const arrvFunction4Code_SimObjLstCache = await vFunction4Code_Sim_GetObjLstCache();
  if (arrvFunction4Code_SimObjLstCache.length == 0) return arrvFunction4Code_SimObjLstCache;
  let arrvFunction4Code_SimSel = arrvFunction4Code_SimObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvFunction4Code_SimCond = new clsvFunction4Code_SimEN();
  ObjectAssign(objvFunction4Code_SimCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvFunction4Code_SimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFunction4Code_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFunction4Code_SimSel.length == 0) return arrvFunction4Code_SimSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.sort(
        vFunction4Code_Sim_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.sort(objPagerPara.sortFun);
    }
    arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.slice(intStart, intEnd);
    return arrvFunction4Code_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vFunction4Code_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFunction4Code_SimEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vFunction4Code_Sim_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFunction4Code_SimEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFunction4Code_SimEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFunction4Code_Sim_Controller, strAction);

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
          vFunction4Code_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunction4Code_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFunction4Code_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_Sim_ConstructorName,
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
 * @param objstrFuncId4CodeCond:条件对象
 * @returns 对象列表子集
 */
export async function vFunction4Code_Sim_IsExistRecordCache(
  objvFunction4Code_SimCond: clsvFunction4Code_SimEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvFunction4Code_SimObjLstCache = await vFunction4Code_Sim_GetObjLstCache();
  if (arrvFunction4Code_SimObjLstCache == null) return false;
  let arrvFunction4Code_SimSel = arrvFunction4Code_SimObjLstCache;
  if (
    objvFunction4Code_SimCond.sfFldComparisonOp == null ||
    objvFunction4Code_SimCond.sfFldComparisonOp == ''
  )
    return arrvFunction4Code_SimSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFunction4Code_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvFunction4Code_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFunction4Code_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFunction4Code_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFunction4Code_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvFunction4Code_SimCond),
      vFunction4Code_Sim_ConstructorName,
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
export async function vFunction4Code_Sim_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFunction4Code_Sim_Controller, strAction);

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
        vFunction4Code_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_Sim_ConstructorName,
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
 * @param strFuncId4Code:所给的关键字
 * @returns 对象
 */
export async function vFunction4Code_Sim_IsExistCache(strFuncId4Code: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvFunction4Code_SimObjLstCache = await vFunction4Code_Sim_GetObjLstCache();
  if (arrvFunction4Code_SimObjLstCache == null) return false;
  try {
    const arrvFunction4Code_SimSel = arrvFunction4Code_SimObjLstCache.filter(
      (x) => x.funcId4Code == strFuncId4Code,
    );
    if (arrvFunction4Code_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFuncId4Code,
      vFunction4Code_Sim_ConstructorName,
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
 * @param strFuncId4Code:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vFunction4Code_Sim_IsExistAsync(strFuncId4Code: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFunction4Code_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId4Code,
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
        vFunction4Code_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_Sim_ConstructorName,
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
export async function vFunction4Code_Sim_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFunction4Code_Sim_Controller, strAction);

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
        vFunction4Code_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFunction4Code_Sim_ConstructorName,
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
 * @param objvFunction4Code_SimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vFunction4Code_Sim_GetRecCountByCondCache(
  objvFunction4Code_SimCond: clsvFunction4Code_SimEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvFunction4Code_SimObjLstCache = await vFunction4Code_Sim_GetObjLstCache();
  if (arrvFunction4Code_SimObjLstCache == null) return 0;
  let arrvFunction4Code_SimSel = arrvFunction4Code_SimObjLstCache;
  if (
    objvFunction4Code_SimCond.sfFldComparisonOp == null ||
    objvFunction4Code_SimCond.sfFldComparisonOp == ''
  )
    return arrvFunction4Code_SimSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFunction4Code_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvFunction4Code_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFunction4Code_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFunction4Code_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunction4Code_SimSel = arrvFunction4Code_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFunction4Code_SimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFunction4Code_SimCond),
      vFunction4Code_Sim_ConstructorName,
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
export function vFunction4Code_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vFunction4Code_Sim_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvFunction4Code_SimEN._CurrTabName;
    switch (clsvFunction4Code_SimEN.CacheModeId) {
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
    clsvFunction4Code_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function vFunction4Code_Sim_GetLastRefreshTime(): string {
  if (clsvFunction4Code_SimEN._RefreshTimeLst.length == 0) return '';
  return clsvFunction4Code_SimEN._RefreshTimeLst[
    clsvFunction4Code_SimEN._RefreshTimeLst.length - 1
  ];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFunction4Code_Sim_GetJSONStrByObj(
  pobjvFunction4Code_SimEN: clsvFunction4Code_SimEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFunction4Code_SimEN);
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
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vFunction4Code_Sim_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvFunction4Code_SimEN> {
  let arrvFunction4Code_SimObjLst = new Array<clsvFunction4Code_SimEN>();
  if (strJSON === '') {
    return arrvFunction4Code_SimObjLst;
  }
  try {
    arrvFunction4Code_SimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFunction4Code_SimObjLst;
  }
  return arrvFunction4Code_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFunction4Code_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFunction4Code_Sim_GetObjLstByJSONObjLst(
  arrvFunction4Code_SimObjLstS: Array<clsvFunction4Code_SimEN>,
): Array<clsvFunction4Code_SimEN> {
  const arrvFunction4Code_SimObjLst = new Array<clsvFunction4Code_SimEN>();
  for (const objInFor of arrvFunction4Code_SimObjLstS) {
    const obj1 = vFunction4Code_Sim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFunction4Code_SimObjLst.push(obj1);
  }
  return arrvFunction4Code_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFunction4Code_Sim_GetObjByJSONStr(strJSON: string): clsvFunction4Code_SimEN {
  let pobjvFunction4Code_SimEN = new clsvFunction4Code_SimEN();
  if (strJSON === '') {
    return pobjvFunction4Code_SimEN;
  }
  try {
    pobjvFunction4Code_SimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFunction4Code_SimEN;
  }
  return pobjvFunction4Code_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFunction4Code_Sim_GetCombineCondition(
  objvFunction4Code_SimCond: clsvFunction4Code_SimEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4Code_SimCond.dicFldComparisonOp,
      clsvFunction4Code_SimEN.con_FuncId4Code,
    ) == true
  ) {
    const strComparisonOpFuncId4Code: string =
      objvFunction4Code_SimCond.dicFldComparisonOp[clsvFunction4Code_SimEN.con_FuncId4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4Code_SimEN.con_FuncId4Code,
      objvFunction4Code_SimCond.funcId4Code,
      strComparisonOpFuncId4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4Code_SimCond.dicFldComparisonOp,
      clsvFunction4Code_SimEN.con_FuncName4Code,
    ) == true
  ) {
    const strComparisonOpFuncName4Code: string =
      objvFunction4Code_SimCond.dicFldComparisonOp[clsvFunction4Code_SimEN.con_FuncName4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4Code_SimEN.con_FuncName4Code,
      objvFunction4Code_SimCond.funcName4Code,
      strComparisonOpFuncName4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4Code_SimCond.dicFldComparisonOp,
      clsvFunction4Code_SimEN.con_FuncCHName4Code,
    ) == true
  ) {
    const strComparisonOpFuncCHName4Code: string =
      objvFunction4Code_SimCond.dicFldComparisonOp[clsvFunction4Code_SimEN.con_FuncCHName4Code];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4Code_SimEN.con_FuncCHName4Code,
      objvFunction4Code_SimCond.funcCHName4Code,
      strComparisonOpFuncCHName4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4Code_SimCond.dicFldComparisonOp,
      clsvFunction4Code_SimEN.con_FuncGCTypeId,
    ) == true
  ) {
    const strComparisonOpFuncGCTypeId: string =
      objvFunction4Code_SimCond.dicFldComparisonOp[clsvFunction4Code_SimEN.con_FuncGCTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4Code_SimEN.con_FuncGCTypeId,
      objvFunction4Code_SimCond.funcGCTypeId,
      strComparisonOpFuncGCTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4Code_SimCond.dicFldComparisonOp,
      clsvFunction4Code_SimEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objvFunction4Code_SimCond.dicFldComparisonOp[clsvFunction4Code_SimEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFunction4Code_SimEN.con_ApplicationTypeId,
      objvFunction4Code_SimCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4Code_SimCond.dicFldComparisonOp,
      clsvFunction4Code_SimEN.con_FuncPurposeId,
    ) == true
  ) {
    const strComparisonOpFuncPurposeId: string =
      objvFunction4Code_SimCond.dicFldComparisonOp[clsvFunction4Code_SimEN.con_FuncPurposeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4Code_SimEN.con_FuncPurposeId,
      objvFunction4Code_SimCond.funcPurposeId,
      strComparisonOpFuncPurposeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4Code_SimCond.dicFldComparisonOp,
      clsvFunction4Code_SimEN.con_FuncTypeId,
    ) == true
  ) {
    const strComparisonOpFuncTypeId: string =
      objvFunction4Code_SimCond.dicFldComparisonOp[clsvFunction4Code_SimEN.con_FuncTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunction4Code_SimEN.con_FuncTypeId,
      objvFunction4Code_SimCond.funcTypeId,
      strComparisonOpFuncTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunction4Code_SimCond.dicFldComparisonOp,
      clsvFunction4Code_SimEN.con_UsedTimes,
    ) == true
  ) {
    const strComparisonOpUsedTimes: string =
      objvFunction4Code_SimCond.dicFldComparisonOp[clsvFunction4Code_SimEN.con_UsedTimes];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFunction4Code_SimEN.con_UsedTimes,
      objvFunction4Code_SimCond.usedTimes,
      strComparisonOpUsedTimes,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFunction4Code_SimENS:源对象
 * @param objvFunction4Code_SimENT:目标对象
 */
export function vFunction4Code_Sim_GetObjFromJsonObj(
  objvFunction4Code_SimENS: clsvFunction4Code_SimEN,
): clsvFunction4Code_SimEN {
  const objvFunction4Code_SimENT: clsvFunction4Code_SimEN = new clsvFunction4Code_SimEN();
  ObjectAssign(objvFunction4Code_SimENT, objvFunction4Code_SimENS);
  return objvFunction4Code_SimENT;
}
