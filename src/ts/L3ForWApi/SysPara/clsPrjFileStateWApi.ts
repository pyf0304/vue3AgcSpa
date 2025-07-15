/**
 * 类名:clsPrjFileStateWApi
 * 表名:PrjFileState(00050525)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:41:23
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程文件状态(PrjFileState)
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
import { clsPrjFileStateEN } from '@/ts/L0Entity/SysPara/clsPrjFileStateEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const prjFileState_Controller = 'PrjFileStateApi';
export const prjFileState_ConstructorName = 'prjFileState';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPrjFileStateId:关键字
 * @returns 对象
 **/
export async function PrjFileState_GetObjByPrjFileStateIdAsync(
  strPrjFileStateId: string,
): Promise<clsPrjFileStateEN | null> {
  const strThisFuncName = 'GetObjByPrjFileStateIdAsync';

  if (IsNullOrEmpty(strPrjFileStateId) == true) {
    const strMsg = Format(
      '参数:[strPrjFileStateId]不能为空!(In clsPrjFileStateWApi.GetObjByPrjFileStateIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjFileStateId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPrjFileStateId]的长度:[{0}]不正确!(clsPrjFileStateWApi.GetObjByPrjFileStateIdAsync)',
      strPrjFileStateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPrjFileStateId';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjFileStateId,
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
      const objPrjFileState = PrjFileState_GetObjFromJsonObj(returnObj);
      return objPrjFileState;
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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param strPrjFileStateId:所给的关键字
 * @returns 对象
 */
export async function PrjFileState_GetObjByPrjFileStateIdCache(
  strPrjFileStateId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByPrjFileStateIdCache';

  if (IsNullOrEmpty(strPrjFileStateId) == true) {
    const strMsg = Format(
      '参数:[strPrjFileStateId]不能为空!(In clsPrjFileStateWApi.GetObjByPrjFileStateIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjFileStateId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPrjFileStateId]的长度:[{0}]不正确!(clsPrjFileStateWApi.GetObjByPrjFileStateIdCache)',
      strPrjFileStateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjFileStateObjLstCache = await PrjFileState_GetObjLstCache();
  try {
    const arrPrjFileStateSel = arrPrjFileStateObjLstCache.filter(
      (x) => x.prjFileStateId == strPrjFileStateId,
    );
    let objPrjFileState: clsPrjFileStateEN;
    if (arrPrjFileStateSel.length > 0) {
      objPrjFileState = arrPrjFileStateSel[0];
      return objPrjFileState;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPrjFileStateConst = await PrjFileState_GetObjByPrjFileStateIdAsync(
          strPrjFileStateId,
        );
        if (objPrjFileStateConst != null) {
          PrjFileState_ReFreshThisCache();
          return objPrjFileStateConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPrjFileStateId,
      prjFileState_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strPrjFileStateId:所给的关键字
 * @returns 对象
 */
export async function PrjFileState_GetObjByPrjFileStateIdlocalStorage(strPrjFileStateId: string) {
  const strThisFuncName = 'GetObjByPrjFileStateIdlocalStorage';

  if (IsNullOrEmpty(strPrjFileStateId) == true) {
    const strMsg = Format(
      '参数:[strPrjFileStateId]不能为空!(In clsPrjFileStateWApi.GetObjByPrjFileStateIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjFileStateId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPrjFileStateId]的长度:[{0}]不正确!(clsPrjFileStateWApi.GetObjByPrjFileStateIdlocalStorage)',
      strPrjFileStateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPrjFileStateEN._CurrTabName, strPrjFileStateId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPrjFileStateCache: clsPrjFileStateEN = JSON.parse(strTempObj);
    return objPrjFileStateCache;
  }
  try {
    const objPrjFileState = await PrjFileState_GetObjByPrjFileStateIdAsync(strPrjFileStateId);
    if (objPrjFileState != null) {
      localStorage.setItem(strKey, JSON.stringify(objPrjFileState));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPrjFileState;
    }
    return objPrjFileState;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPrjFileStateId,
      prjFileState_ConstructorName,
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
 * @param objPrjFileState:所给的对象
 * @returns 对象
 */
export async function PrjFileState_UpdateObjInLstCache(objPrjFileState: clsPrjFileStateEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPrjFileStateObjLstCache = await PrjFileState_GetObjLstCache();
    const obj = arrPrjFileStateObjLstCache.find(
      (x) => x.prjFileStateName == objPrjFileState.prjFileStateName,
    );
    if (obj != null) {
      objPrjFileState.prjFileStateId = obj.prjFileStateId;
      ObjectAssign(obj, objPrjFileState);
    } else {
      arrPrjFileStateObjLstCache.push(objPrjFileState);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      prjFileState_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strPrjFileStateId:所给的关键字
 * @returns 对象
 */
export async function PrjFileState_GetNameByPrjFileStateIdCache(strPrjFileStateId: string) {
  if (IsNullOrEmpty(strPrjFileStateId) == true) {
    const strMsg = Format(
      '参数:[strPrjFileStateId]不能为空!(In clsPrjFileStateWApi.GetNameByPrjFileStateIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjFileStateId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPrjFileStateId]的长度:[{0}]不正确!(clsPrjFileStateWApi.GetNameByPrjFileStateIdCache)',
      strPrjFileStateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjFileStateObjLstCache = await PrjFileState_GetObjLstCache();
  if (arrPrjFileStateObjLstCache == null) return '';
  try {
    const arrPrjFileStateSel = arrPrjFileStateObjLstCache.filter(
      (x) => x.prjFileStateId == strPrjFileStateId,
    );
    let objPrjFileState: clsPrjFileStateEN;
    if (arrPrjFileStateSel.length > 0) {
      objPrjFileState = arrPrjFileStateSel[0];
      return objPrjFileState.prjFileStateName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strPrjFileStateId,
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
export async function PrjFileState_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsPrjFileStateEN.con_PrjFileStateId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPrjFileStateEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPrjFileStateEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strPrjFileStateId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objPrjFileState = await PrjFileState_GetObjByPrjFileStateIdCache(strPrjFileStateId);
  if (objPrjFileState == null) return '';
  if (objPrjFileState.GetFldValue(strOutFldName) == null) return '';
  return objPrjFileState.GetFldValue(strOutFldName).toString();
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
export function PrjFileState_SortFunDefa(a: clsPrjFileStateEN, b: clsPrjFileStateEN): number {
  return a.prjFileStateId.localeCompare(b.prjFileStateId);
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
export function PrjFileState_SortFunDefa2Fld(a: clsPrjFileStateEN, b: clsPrjFileStateEN): number {
  if (a.prjFileStateName == b.prjFileStateName)
    return a.prjFileStateENName.localeCompare(b.prjFileStateENName);
  else return a.prjFileStateName.localeCompare(b.prjFileStateName);
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
export function PrjFileState_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjFileStateEN.con_PrjFileStateId:
        return (a: clsPrjFileStateEN, b: clsPrjFileStateEN) => {
          return a.prjFileStateId.localeCompare(b.prjFileStateId);
        };
      case clsPrjFileStateEN.con_PrjFileStateName:
        return (a: clsPrjFileStateEN, b: clsPrjFileStateEN) => {
          return a.prjFileStateName.localeCompare(b.prjFileStateName);
        };
      case clsPrjFileStateEN.con_PrjFileStateENName:
        return (a: clsPrjFileStateEN, b: clsPrjFileStateEN) => {
          if (a.prjFileStateENName == null) return -1;
          if (b.prjFileStateENName == null) return 1;
          return a.prjFileStateENName.localeCompare(b.prjFileStateENName);
        };
      case clsPrjFileStateEN.con_OrderNum:
        return (a: clsPrjFileStateEN, b: clsPrjFileStateEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsPrjFileStateEN.con_Memo:
        return (a: clsPrjFileStateEN, b: clsPrjFileStateEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjFileState]中不存在!(in ${prjFileState_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrjFileStateEN.con_PrjFileStateId:
        return (a: clsPrjFileStateEN, b: clsPrjFileStateEN) => {
          return b.prjFileStateId.localeCompare(a.prjFileStateId);
        };
      case clsPrjFileStateEN.con_PrjFileStateName:
        return (a: clsPrjFileStateEN, b: clsPrjFileStateEN) => {
          return b.prjFileStateName.localeCompare(a.prjFileStateName);
        };
      case clsPrjFileStateEN.con_PrjFileStateENName:
        return (a: clsPrjFileStateEN, b: clsPrjFileStateEN) => {
          if (b.prjFileStateENName == null) return -1;
          if (a.prjFileStateENName == null) return 1;
          return b.prjFileStateENName.localeCompare(a.prjFileStateENName);
        };
      case clsPrjFileStateEN.con_OrderNum:
        return (a: clsPrjFileStateEN, b: clsPrjFileStateEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsPrjFileStateEN.con_Memo:
        return (a: clsPrjFileStateEN, b: clsPrjFileStateEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjFileState]中不存在!(in ${prjFileState_ConstructorName}.${strThisFuncName})`;
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
export async function PrjFileState_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrjFileStateEN.con_PrjFileStateId:
      return (obj: clsPrjFileStateEN) => {
        return obj.prjFileStateId === value;
      };
    case clsPrjFileStateEN.con_PrjFileStateName:
      return (obj: clsPrjFileStateEN) => {
        return obj.prjFileStateName === value;
      };
    case clsPrjFileStateEN.con_PrjFileStateENName:
      return (obj: clsPrjFileStateEN) => {
        return obj.prjFileStateENName === value;
      };
    case clsPrjFileStateEN.con_OrderNum:
      return (obj: clsPrjFileStateEN) => {
        return obj.orderNum === value;
      };
    case clsPrjFileStateEN.con_Memo:
      return (obj: clsPrjFileStateEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrjFileState]中不存在!(in ${prjFileState_ConstructorName}.${strThisFuncName})`;
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
export async function PrjFileState_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsPrjFileStateEN.con_PrjFileStateId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrPrjFileState = await PrjFileState_GetObjLstCache();
  if (arrPrjFileState == null) return [];
  let arrPrjFileStateSel = arrPrjFileState;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPrjFileStateSel = arrPrjFileStateSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPrjFileStateSel = arrPrjFileStateSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPrjFileStateSel = arrPrjFileStateSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPrjFileStateSel = arrPrjFileStateSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPrjFileStateSel = arrPrjFileStateSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPrjFileStateSel = arrPrjFileStateSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPrjFileStateSel = arrPrjFileStateSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPrjFileStateSel = arrPrjFileStateSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPrjFileStateSel = arrPrjFileStateSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPrjFileStateSel = arrPrjFileStateSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPrjFileStateSel.length == 0) return [];
  return arrPrjFileStateSel.map((x) => x.prjFileStateId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjFileState_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
export async function PrjFileState_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
export async function PrjFileState_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPrjFileStateEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
      const objPrjFileState = PrjFileState_GetObjFromJsonObj(returnObj);
      return objPrjFileState;
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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
export async function PrjFileState_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjFileStateEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjFileStateEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjFileStateEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPrjFileStateExObjLstCache: Array<clsPrjFileStateEN> = CacheHelper.Get(strKey);
    const arrPrjFileStateObjLstT = PrjFileState_GetObjLstByJSONObjLst(arrPrjFileStateExObjLstCache);
    return arrPrjFileStateObjLstT;
  }
  try {
    const arrPrjFileStateExObjLst = await PrjFileState_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPrjFileStateExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjFileStateExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjFileStateExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjFileState_ConstructorName,
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
export async function PrjFileState_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjFileStateEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjFileStateEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjFileStateEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjFileStateExObjLstCache: Array<clsPrjFileStateEN> = JSON.parse(strTempObjLst);
    const arrPrjFileStateObjLstT = PrjFileState_GetObjLstByJSONObjLst(arrPrjFileStateExObjLstCache);
    return arrPrjFileStateObjLstT;
  }
  try {
    const arrPrjFileStateExObjLst = await PrjFileState_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPrjFileStateExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjFileStateExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjFileStateExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjFileState_ConstructorName,
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
export async function PrjFileState_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjFileStateEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjFileStateObjLstCache: Array<clsPrjFileStateEN> = JSON.parse(strTempObjLst);
    return arrPrjFileStateObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PrjFileState_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPrjFileStateEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
          prjFileState_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFileState_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
export async function PrjFileState_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjFileStateEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjFileStateEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjFileStateEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjFileStateExObjLstCache: Array<clsPrjFileStateEN> = JSON.parse(strTempObjLst);
    const arrPrjFileStateObjLstT = PrjFileState_GetObjLstByJSONObjLst(arrPrjFileStateExObjLstCache);
    return arrPrjFileStateObjLstT;
  }
  try {
    const arrPrjFileStateExObjLst = await PrjFileState_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPrjFileStateExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjFileStateExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjFileStateExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjFileState_ConstructorName,
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
export async function PrjFileState_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjFileStateEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjFileStateObjLstCache: Array<clsPrjFileStateEN> = JSON.parse(strTempObjLst);
    return arrPrjFileStateObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjFileState_GetObjLstCache(): Promise<Array<clsPrjFileStateEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrPrjFileStateObjLstCache;
  switch (clsPrjFileStateEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjFileStateObjLstCache = await PrjFileState_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrPrjFileStateObjLstCache = await PrjFileState_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrPrjFileStateObjLstCache = await PrjFileState_GetObjLstClientCache();
      break;
    default:
      arrPrjFileStateObjLstCache = await PrjFileState_GetObjLstClientCache();
      break;
  }
  return arrPrjFileStateObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjFileState_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPrjFileStateObjLstCache;
  switch (clsPrjFileStateEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjFileStateObjLstCache = await PrjFileState_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrPrjFileStateObjLstCache = await PrjFileState_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrPrjFileStateObjLstCache = null;
      break;
    default:
      arrPrjFileStateObjLstCache = null;
      break;
  }
  return arrPrjFileStateObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPrjFileStateIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjFileState_GetSubObjLstCache(objPrjFileStateCond: clsPrjFileStateEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPrjFileStateObjLstCache = await PrjFileState_GetObjLstCache();
  let arrPrjFileStateSel = arrPrjFileStateObjLstCache;
  if (objPrjFileStateCond.sfFldComparisonOp == null || objPrjFileStateCond.sfFldComparisonOp == '')
    return arrPrjFileStateSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPrjFileStateCond.sfFldComparisonOp,
  );
  //console.log("clsPrjFileStateWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPrjFileStateCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPrjFileStateSel = arrPrjFileStateSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjFileStateCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPrjFileStateSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjFileStateCond),
      prjFileState_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjFileStateEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPrjFileStateId:关键字列表
 * @returns 对象列表
 **/
export async function PrjFileState_GetObjLstByPrjFileStateIdLstAsync(
  arrPrjFileStateId: Array<string>,
): Promise<Array<clsPrjFileStateEN>> {
  const strThisFuncName = 'GetObjLstByPrjFileStateIdLstAsync';
  const strAction = 'GetObjLstByPrjFileStateIdLst';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrjFileStateId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          prjFileState_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFileState_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param arrstrPrjFileStateIdLst:关键字列表
 * @returns 对象列表
 */
export async function PrjFileState_GetObjLstByPrjFileStateIdLstCache(
  arrPrjFileStateIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByPrjFileStateIdLstCache';
  try {
    const arrPrjFileStateObjLstCache = await PrjFileState_GetObjLstCache();
    const arrPrjFileStateSel = arrPrjFileStateObjLstCache.filter(
      (x) => arrPrjFileStateIdLst.indexOf(x.prjFileStateId) > -1,
    );
    return arrPrjFileStateSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPrjFileStateIdLst.join(','),
      prjFileState_ConstructorName,
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
export async function PrjFileState_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrjFileStateEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
          prjFileState_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFileState_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
export async function PrjFileState_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrjFileStateEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
          prjFileState_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFileState_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
export async function PrjFileState_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjFileStateEN>();
  const arrPrjFileStateObjLstCache = await PrjFileState_GetObjLstCache();
  if (arrPrjFileStateObjLstCache.length == 0) return arrPrjFileStateObjLstCache;
  let arrPrjFileStateSel = arrPrjFileStateObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objPrjFileStateCond = new clsPrjFileStateEN();
  ObjectAssign(objPrjFileStateCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsPrjFileStateWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPrjFileStateSel = arrPrjFileStateSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjFileStateCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPrjFileStateSel.length == 0) return arrPrjFileStateSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjFileStateSel = arrPrjFileStateSel.sort(
        PrjFileState_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjFileStateSel = arrPrjFileStateSel.sort(objPagerPara.sortFun);
    }
    arrPrjFileStateSel = arrPrjFileStateSel.slice(intStart, intEnd);
    return arrPrjFileStateSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjFileState_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjFileStateEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PrjFileState_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjFileStateEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjFileStateEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
          prjFileState_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFileState_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param strPrjFileStateId:关键字
 * @returns 获取删除的结果
 **/
export async function PrjFileState_DelRecordAsync(strPrjFileStateId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(prjFileState_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strPrjFileStateId);

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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param arrPrjFileStateId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PrjFileState_DelPrjFileStatesAsync(
  arrPrjFileStateId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelPrjFileStatesAsync';
  const strAction = 'DelPrjFileStates';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrjFileStateId, config);
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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
export async function PrjFileState_DelPrjFileStatesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPrjFileStatesByCondAsync';
  const strAction = 'DelPrjFileStatesByCond';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param objPrjFileStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFileState_AddNewRecordAsync(
  objPrjFileStateEN: clsPrjFileStateEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPrjFileStateEN);
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFileStateEN, config);
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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param objPrjFileStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFileState_AddNewRecordWithMaxIdAsync(
  objPrjFileStateEN: clsPrjFileStateEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFileStateEN, config);
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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param objPrjFileStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFileState_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param objPrjFileStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFileState_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjFileStateEN);
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param objPrjFileStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFileState_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjFileStateEN);
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objPrjFileStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFileState_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjFileStateEN);
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param objPrjFileStateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFileState_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objPrjFileStateEN);
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param objPrjFileStateEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrjFileState_AddNewRecordWithReturnKeyAsync(
  objPrjFileStateEN: clsPrjFileStateEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFileStateEN, config);
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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param objPrjFileStateEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjFileState_UpdateRecordAsync(
  objPrjFileStateEN: clsPrjFileStateEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrjFileStateEN.sfUpdFldSetStr === undefined ||
    objPrjFileStateEN.sfUpdFldSetStr === null ||
    objPrjFileStateEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjFileStateEN.prjFileStateId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFileStateEN, config);
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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param objPrjFileStateEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjFileState_UpdateWithConditionAsync(
  objPrjFileStateEN: clsPrjFileStateEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrjFileStateEN.sfUpdFldSetStr === undefined ||
    objPrjFileStateEN.sfUpdFldSetStr === null ||
    objPrjFileStateEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjFileStateEN.prjFileStateId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);
  objPrjFileStateEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFileStateEN, config);
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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param objstrPrjFileStateIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjFileState_IsExistRecordCache(objPrjFileStateCond: clsPrjFileStateEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPrjFileStateObjLstCache = await PrjFileState_GetObjLstCache();
  if (arrPrjFileStateObjLstCache == null) return false;
  let arrPrjFileStateSel = arrPrjFileStateObjLstCache;
  if (objPrjFileStateCond.sfFldComparisonOp == null || objPrjFileStateCond.sfFldComparisonOp == '')
    return arrPrjFileStateSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPrjFileStateCond.sfFldComparisonOp,
  );
  //console.log("clsPrjFileStateWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPrjFileStateCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjFileStateCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPrjFileStateSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPrjFileStateCond),
      prjFileState_ConstructorName,
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
export async function PrjFileState_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param strPrjFileStateId:所给的关键字
 * @returns 对象
 */
export async function PrjFileState_IsExistCache(strPrjFileStateId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrPrjFileStateObjLstCache = await PrjFileState_GetObjLstCache();
  if (arrPrjFileStateObjLstCache == null) return false;
  try {
    const arrPrjFileStateSel = arrPrjFileStateObjLstCache.filter(
      (x) => x.prjFileStateId == strPrjFileStateId,
    );
    if (arrPrjFileStateSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strPrjFileStateId,
      prjFileState_ConstructorName,
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
 * @param strPrjFileStateId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PrjFileState_IsExistAsync(strPrjFileStateId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjFileStateId,
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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
export async function PrjFileState_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
 * @param objPrjFileStateCond:条件对象
 * @returns 对象列表记录数
 */
export async function PrjFileState_GetRecCountByCondCache(objPrjFileStateCond: clsPrjFileStateEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPrjFileStateObjLstCache = await PrjFileState_GetObjLstCache();
  if (arrPrjFileStateObjLstCache == null) return 0;
  let arrPrjFileStateSel = arrPrjFileStateObjLstCache;
  if (objPrjFileStateCond.sfFldComparisonOp == null || objPrjFileStateCond.sfFldComparisonOp == '')
    return arrPrjFileStateSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPrjFileStateCond.sfFldComparisonOp,
  );
  //console.log("clsPrjFileStateWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPrjFileStateCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPrjFileStateSel = arrPrjFileStateSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjFileStateCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjFileStateSel = arrPrjFileStateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPrjFileStateSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjFileStateCond),
      prjFileState_ConstructorName,
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
export async function PrjFileState_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
export async function PrjFileState_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjFileState_Controller, strAction);

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
        prjFileState_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileState_ConstructorName,
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
export function PrjFileState_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PrjFileState_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsPrjFileStateEN._CurrTabName;
  switch (clsPrjFileStateEN.CacheModeId) {
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
export function PrjFileState_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsPrjFileStateEN._CurrTabName;
    switch (clsPrjFileStateEN.CacheModeId) {
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
export async function PrjFileState_BindDdl_PrjFileStateIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_PrjFileStateIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrjFileStateIdInDivCache");
  const arrObjLstSel = await PrjFileState_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsPrjFileStateEN.con_PrjFileStateId,
    clsPrjFileStateEN.con_PrjFileStateName,
    '工程文件状态',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjFileState_CheckPropertyNew(pobjPrjFileStateEN: clsPrjFileStateEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPrjFileStateEN.prjFileStateName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[工程文件状态名]不能为空(In 工程文件状态)!(clsPrjFileStateBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjPrjFileStateEN.orderNum ||
    (pobjPrjFileStateEN.orderNum != null && pobjPrjFileStateEN.orderNum.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[序号]不能为空(In 工程文件状态)!(clsPrjFileStateBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.prjFileStateId) == false &&
    GetStrLen(pobjPrjFileStateEN.prjFileStateId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程文件状态Id(prjFileStateId)]的长度不能超过2(In 工程文件状态(PrjFileState))!值:$(pobjPrjFileStateEN.prjFileStateId)(clsPrjFileStateBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.prjFileStateName) == false &&
    GetStrLen(pobjPrjFileStateEN.prjFileStateName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程文件状态名(prjFileStateName)]的长度不能超过30(In 工程文件状态(PrjFileState))!值:$(pobjPrjFileStateEN.prjFileStateName)(clsPrjFileStateBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.prjFileStateENName) == false &&
    GetStrLen(pobjPrjFileStateEN.prjFileStateENName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程文件状态英文名(prjFileStateENName)]的长度不能超过30(In 工程文件状态(PrjFileState))!值:$(pobjPrjFileStateEN.prjFileStateENName)(clsPrjFileStateBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.memo) == false &&
    GetStrLen(pobjPrjFileStateEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 工程文件状态(PrjFileState))!值:$(pobjPrjFileStateEN.memo)(clsPrjFileStateBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.prjFileStateId) == false &&
    undefined !== pobjPrjFileStateEN.prjFileStateId &&
    tzDataType.isString(pobjPrjFileStateEN.prjFileStateId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程文件状态Id(prjFileStateId)]的值:[$(pobjPrjFileStateEN.prjFileStateId)], 非法,应该为字符型(In 工程文件状态(PrjFileState))!(clsPrjFileStateBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.prjFileStateName) == false &&
    undefined !== pobjPrjFileStateEN.prjFileStateName &&
    tzDataType.isString(pobjPrjFileStateEN.prjFileStateName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程文件状态名(prjFileStateName)]的值:[$(pobjPrjFileStateEN.prjFileStateName)], 非法,应该为字符型(In 工程文件状态(PrjFileState))!(clsPrjFileStateBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.prjFileStateENName) == false &&
    undefined !== pobjPrjFileStateEN.prjFileStateENName &&
    tzDataType.isString(pobjPrjFileStateEN.prjFileStateENName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程文件状态英文名(prjFileStateENName)]的值:[$(pobjPrjFileStateEN.prjFileStateENName)], 非法,应该为字符型(In 工程文件状态(PrjFileState))!(clsPrjFileStateBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjPrjFileStateEN.orderNum &&
    undefined !== pobjPrjFileStateEN.orderNum &&
    tzDataType.isNumber(pobjPrjFileStateEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjPrjFileStateEN.orderNum)], 非法,应该为数值型(In 工程文件状态(PrjFileState))!(clsPrjFileStateBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.memo) == false &&
    undefined !== pobjPrjFileStateEN.memo &&
    tzDataType.isString(pobjPrjFileStateEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjPrjFileStateEN.memo)], 非法,应该为字符型(In 工程文件状态(PrjFileState))!(clsPrjFileStateBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjFileState_CheckProperty4Update(pobjPrjFileStateEN: clsPrjFileStateEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.prjFileStateId) == false &&
    GetStrLen(pobjPrjFileStateEN.prjFileStateId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程文件状态Id(prjFileStateId)]的长度不能超过2(In 工程文件状态(PrjFileState))!值:$(pobjPrjFileStateEN.prjFileStateId)(clsPrjFileStateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.prjFileStateName) == false &&
    GetStrLen(pobjPrjFileStateEN.prjFileStateName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程文件状态名(prjFileStateName)]的长度不能超过30(In 工程文件状态(PrjFileState))!值:$(pobjPrjFileStateEN.prjFileStateName)(clsPrjFileStateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.prjFileStateENName) == false &&
    GetStrLen(pobjPrjFileStateEN.prjFileStateENName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程文件状态英文名(prjFileStateENName)]的长度不能超过30(In 工程文件状态(PrjFileState))!值:$(pobjPrjFileStateEN.prjFileStateENName)(clsPrjFileStateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.memo) == false &&
    GetStrLen(pobjPrjFileStateEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 工程文件状态(PrjFileState))!值:$(pobjPrjFileStateEN.memo)(clsPrjFileStateBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.prjFileStateId) == false &&
    undefined !== pobjPrjFileStateEN.prjFileStateId &&
    tzDataType.isString(pobjPrjFileStateEN.prjFileStateId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程文件状态Id(prjFileStateId)]的值:[$(pobjPrjFileStateEN.prjFileStateId)], 非法,应该为字符型(In 工程文件状态(PrjFileState))!(clsPrjFileStateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.prjFileStateName) == false &&
    undefined !== pobjPrjFileStateEN.prjFileStateName &&
    tzDataType.isString(pobjPrjFileStateEN.prjFileStateName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程文件状态名(prjFileStateName)]的值:[$(pobjPrjFileStateEN.prjFileStateName)], 非法,应该为字符型(In 工程文件状态(PrjFileState))!(clsPrjFileStateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.prjFileStateENName) == false &&
    undefined !== pobjPrjFileStateEN.prjFileStateENName &&
    tzDataType.isString(pobjPrjFileStateEN.prjFileStateENName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程文件状态英文名(prjFileStateENName)]的值:[$(pobjPrjFileStateEN.prjFileStateENName)], 非法,应该为字符型(In 工程文件状态(PrjFileState))!(clsPrjFileStateBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjPrjFileStateEN.orderNum &&
    undefined !== pobjPrjFileStateEN.orderNum &&
    tzDataType.isNumber(pobjPrjFileStateEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjPrjFileStateEN.orderNum)], 非法,应该为数值型(In 工程文件状态(PrjFileState))!(clsPrjFileStateBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileStateEN.memo) == false &&
    undefined !== pobjPrjFileStateEN.memo &&
    tzDataType.isString(pobjPrjFileStateEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjPrjFileStateEN.memo)], 非法,应该为字符型(In 工程文件状态(PrjFileState))!(clsPrjFileStateBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
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
export function PrjFileState_GetJSONStrByObj(pobjPrjFileStateEN: clsPrjFileStateEN): string {
  pobjPrjFileStateEN.sfUpdFldSetStr = pobjPrjFileStateEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrjFileStateEN);
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
export function PrjFileState_GetObjLstByJSONStr(strJSON: string): Array<clsPrjFileStateEN> {
  let arrPrjFileStateObjLst = new Array<clsPrjFileStateEN>();
  if (strJSON === '') {
    return arrPrjFileStateObjLst;
  }
  try {
    arrPrjFileStateObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrjFileStateObjLst;
  }
  return arrPrjFileStateObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrjFileStateObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrjFileState_GetObjLstByJSONObjLst(
  arrPrjFileStateObjLstS: Array<clsPrjFileStateEN>,
): Array<clsPrjFileStateEN> {
  const arrPrjFileStateObjLst = new Array<clsPrjFileStateEN>();
  for (const objInFor of arrPrjFileStateObjLstS) {
    const obj1 = PrjFileState_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrjFileStateObjLst.push(obj1);
  }
  return arrPrjFileStateObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjFileState_GetObjByJSONStr(strJSON: string): clsPrjFileStateEN {
  let pobjPrjFileStateEN = new clsPrjFileStateEN();
  if (strJSON === '') {
    return pobjPrjFileStateEN;
  }
  try {
    pobjPrjFileStateEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrjFileStateEN;
  }
  return pobjPrjFileStateEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrjFileState_GetCombineCondition(objPrjFileStateCond: clsPrjFileStateEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFileStateCond.dicFldComparisonOp,
      clsPrjFileStateEN.con_PrjFileStateId,
    ) == true
  ) {
    const strComparisonOpPrjFileStateId: string =
      objPrjFileStateCond.dicFldComparisonOp[clsPrjFileStateEN.con_PrjFileStateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFileStateEN.con_PrjFileStateId,
      objPrjFileStateCond.prjFileStateId,
      strComparisonOpPrjFileStateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFileStateCond.dicFldComparisonOp,
      clsPrjFileStateEN.con_PrjFileStateName,
    ) == true
  ) {
    const strComparisonOpPrjFileStateName: string =
      objPrjFileStateCond.dicFldComparisonOp[clsPrjFileStateEN.con_PrjFileStateName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFileStateEN.con_PrjFileStateName,
      objPrjFileStateCond.prjFileStateName,
      strComparisonOpPrjFileStateName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFileStateCond.dicFldComparisonOp,
      clsPrjFileStateEN.con_PrjFileStateENName,
    ) == true
  ) {
    const strComparisonOpPrjFileStateENName: string =
      objPrjFileStateCond.dicFldComparisonOp[clsPrjFileStateEN.con_PrjFileStateENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFileStateEN.con_PrjFileStateENName,
      objPrjFileStateCond.prjFileStateENName,
      strComparisonOpPrjFileStateENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFileStateCond.dicFldComparisonOp,
      clsPrjFileStateEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objPrjFileStateCond.dicFldComparisonOp[clsPrjFileStateEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPrjFileStateEN.con_OrderNum,
      objPrjFileStateCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFileStateCond.dicFldComparisonOp,
      clsPrjFileStateEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPrjFileStateCond.dicFldComparisonOp[clsPrjFileStateEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFileStateEN.con_Memo,
      objPrjFileStateCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjFileState(工程文件状态),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjFileStateName: 工程文件状态名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjFileState_GetUniCondStr(objPrjFileStateEN: clsPrjFileStateEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjFileStateName = '{0}'", objPrjFileStateEN.prjFileStateName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjFileState(工程文件状态),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjFileStateName: 工程文件状态名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjFileState_GetUniCondStr4Update(objPrjFileStateEN: clsPrjFileStateEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjFileStateId <> '{0}'", objPrjFileStateEN.prjFileStateId);
  strWhereCond += Format(" and PrjFileStateName = '{0}'", objPrjFileStateEN.prjFileStateName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrjFileStateENS:源对象
 * @param objPrjFileStateENT:目标对象
 */
export function PrjFileState_GetObjFromJsonObj(
  objPrjFileStateENS: clsPrjFileStateEN,
): clsPrjFileStateEN {
  const objPrjFileStateENT: clsPrjFileStateEN = new clsPrjFileStateEN();
  ObjectAssign(objPrjFileStateENT, objPrjFileStateENS);
  return objPrjFileStateENT;
}
