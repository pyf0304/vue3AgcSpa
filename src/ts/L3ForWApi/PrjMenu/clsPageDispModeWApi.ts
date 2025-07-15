/**
 * 类名:clsPageDispModeWApi
 * 表名:PageDispMode(00050253)
 * 版本:2025.05.23.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/25 17:27:30
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:菜单管理(PrjMenu)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 页面显示模式(PageDispMode)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月25日.
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
import { clsPageDispModeEN } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const pageDispMode_Controller = 'PageDispModeApi';
export const pageDispMode_ConstructorName = 'pageDispMode';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPageDispModeId:关键字
 * @returns 对象
 **/
export async function PageDispMode_GetObjByPageDispModeIdAsync(
  strPageDispModeId: string,
): Promise<clsPageDispModeEN | null> {
  const strThisFuncName = 'GetObjByPageDispModeIdAsync';

  if (IsNullOrEmpty(strPageDispModeId) == true) {
    const strMsg = Format(
      '参数:[strPageDispModeId]不能为空!(In clsPageDispModeWApi.GetObjByPageDispModeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPageDispModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPageDispModeId]的长度:[{0}]不正确!(clsPageDispModeWApi.GetObjByPageDispModeIdAsync)',
      strPageDispModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPageDispModeId';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPageDispModeId,
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
      const objPageDispMode = PageDispMode_GetObjFromJsonObj(returnObj);
      return objPageDispMode;
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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
 * @param strPageDispModeId:所给的关键字
 * @returns 对象
 */
export async function PageDispMode_GetObjByPageDispModeIdlocalStorage(strPageDispModeId: string) {
  const strThisFuncName = 'GetObjByPageDispModeIdlocalStorage';

  if (IsNullOrEmpty(strPageDispModeId) == true) {
    const strMsg = Format(
      '参数:[strPageDispModeId]不能为空!(In clsPageDispModeWApi.GetObjByPageDispModeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPageDispModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPageDispModeId]的长度:[{0}]不正确!(clsPageDispModeWApi.GetObjByPageDispModeIdlocalStorage)',
      strPageDispModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPageDispModeEN._CurrTabName, strPageDispModeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPageDispModeCache: clsPageDispModeEN = JSON.parse(strTempObj);
    return objPageDispModeCache;
  }
  try {
    const objPageDispMode = await PageDispMode_GetObjByPageDispModeIdAsync(strPageDispModeId);
    if (objPageDispMode != null) {
      localStorage.setItem(strKey, JSON.stringify(objPageDispMode));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPageDispMode;
    }
    return objPageDispMode;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPageDispModeId,
      pageDispMode_ConstructorName,
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
 * @param strPageDispModeId:所给的关键字
 * @returns 对象
 */
export async function PageDispMode_GetObjByPageDispModeIdCache(
  strPageDispModeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByPageDispModeIdCache';

  if (IsNullOrEmpty(strPageDispModeId) == true) {
    const strMsg = Format(
      '参数:[strPageDispModeId]不能为空!(In clsPageDispModeWApi.GetObjByPageDispModeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPageDispModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPageDispModeId]的长度:[{0}]不正确!(clsPageDispModeWApi.GetObjByPageDispModeIdCache)',
      strPageDispModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPageDispModeObjLstCache = await PageDispMode_GetObjLstCache();
  try {
    const arrPageDispModeSel = arrPageDispModeObjLstCache.filter(
      (x) => x.pageDispModeId == strPageDispModeId,
    );
    let objPageDispMode: clsPageDispModeEN;
    if (arrPageDispModeSel.length > 0) {
      objPageDispMode = arrPageDispModeSel[0];
      return objPageDispMode;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPageDispModeConst = await PageDispMode_GetObjByPageDispModeIdAsync(
          strPageDispModeId,
        );
        if (objPageDispModeConst != null) {
          PageDispMode_ReFreshThisCache();
          return objPageDispModeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPageDispModeId,
      pageDispMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objPageDispMode:所给的对象
 * @returns 对象
 */
export async function PageDispMode_UpdateObjInLstCache(objPageDispMode: clsPageDispModeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPageDispModeObjLstCache = await PageDispMode_GetObjLstCache();
    const obj = arrPageDispModeObjLstCache.find(
      (x) => x.pageDispModeId == objPageDispMode.pageDispModeId,
    );
    if (obj != null) {
      objPageDispMode.pageDispModeId = obj.pageDispModeId;
      ObjectAssign(obj, objPageDispMode);
    } else {
      arrPageDispModeObjLstCache.push(objPageDispMode);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      pageDispMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PageDispMode_SortFunDefa(a: clsPageDispModeEN, b: clsPageDispModeEN): number {
  return a.pageDispModeId.localeCompare(b.pageDispModeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PageDispMode_SortFunDefa2Fld(a: clsPageDispModeEN, b: clsPageDispModeEN): number {
  if (a.pageDispModeName == b.pageDispModeName)
    return a.pageDispModeENName.localeCompare(b.pageDispModeENName);
  else return a.pageDispModeName.localeCompare(b.pageDispModeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PageDispMode_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPageDispModeEN.con_PageDispModeId:
        return (a: clsPageDispModeEN, b: clsPageDispModeEN) => {
          return a.pageDispModeId.localeCompare(b.pageDispModeId);
        };
      case clsPageDispModeEN.con_PageDispModeName:
        return (a: clsPageDispModeEN, b: clsPageDispModeEN) => {
          return a.pageDispModeName.localeCompare(b.pageDispModeName);
        };
      case clsPageDispModeEN.con_PageDispModeENName:
        return (a: clsPageDispModeEN, b: clsPageDispModeEN) => {
          return a.pageDispModeENName.localeCompare(b.pageDispModeENName);
        };
      case clsPageDispModeEN.con_Memo:
        return (a: clsPageDispModeEN, b: clsPageDispModeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PageDispMode]中不存在!(in ${pageDispMode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPageDispModeEN.con_PageDispModeId:
        return (a: clsPageDispModeEN, b: clsPageDispModeEN) => {
          return b.pageDispModeId.localeCompare(a.pageDispModeId);
        };
      case clsPageDispModeEN.con_PageDispModeName:
        return (a: clsPageDispModeEN, b: clsPageDispModeEN) => {
          return b.pageDispModeName.localeCompare(a.pageDispModeName);
        };
      case clsPageDispModeEN.con_PageDispModeENName:
        return (a: clsPageDispModeEN, b: clsPageDispModeEN) => {
          return b.pageDispModeENName.localeCompare(a.pageDispModeENName);
        };
      case clsPageDispModeEN.con_Memo:
        return (a: clsPageDispModeEN, b: clsPageDispModeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PageDispMode]中不存在!(in ${pageDispMode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strPageDispModeId:所给的关键字
 * @returns 对象
 */
export async function PageDispMode_GetNameByPageDispModeIdCache(strPageDispModeId: string) {
  if (IsNullOrEmpty(strPageDispModeId) == true) {
    const strMsg = Format(
      '参数:[strPageDispModeId]不能为空!(In clsPageDispModeWApi.GetNameByPageDispModeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPageDispModeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPageDispModeId]的长度:[{0}]不正确!(clsPageDispModeWApi.GetNameByPageDispModeIdCache)',
      strPageDispModeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPageDispModeObjLstCache = await PageDispMode_GetObjLstCache();
  if (arrPageDispModeObjLstCache == null) return '';
  try {
    const arrPageDispModeSel = arrPageDispModeObjLstCache.filter(
      (x) => x.pageDispModeId == strPageDispModeId,
    );
    let objPageDispMode: clsPageDispModeEN;
    if (arrPageDispModeSel.length > 0) {
      objPageDispMode = arrPageDispModeSel[0];
      return objPageDispMode.pageDispModeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strPageDispModeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PageDispMode_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPageDispModeEN.con_PageDispModeId:
      return (obj: clsPageDispModeEN) => {
        return obj.pageDispModeId === value;
      };
    case clsPageDispModeEN.con_PageDispModeName:
      return (obj: clsPageDispModeEN) => {
        return obj.pageDispModeName === value;
      };
    case clsPageDispModeEN.con_PageDispModeENName:
      return (obj: clsPageDispModeEN) => {
        return obj.pageDispModeENName === value;
      };
    case clsPageDispModeEN.con_Memo:
      return (obj: clsPageDispModeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PageDispMode]中不存在!(in ${pageDispMode_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function PageDispMode_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsPageDispModeEN.con_PageDispModeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPageDispModeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPageDispModeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strPageDispModeId = strInValue;
  if (IsNullOrEmpty(strPageDispModeId) == true) {
    return '';
  }
  const objPageDispMode = await PageDispMode_GetObjByPageDispModeIdCache(strPageDispModeId);
  if (objPageDispMode == null) return '';
  if (objPageDispMode.GetFldValue(strOutFldName) == null) return '';
  return objPageDispMode.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function PageDispMode_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsPageDispModeEN.con_PageDispModeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrPageDispMode = await PageDispMode_GetObjLstCache();
  if (arrPageDispMode == null) return [];
  let arrPageDispModeSel = arrPageDispMode;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPageDispModeSel = arrPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPageDispModeSel = arrPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPageDispModeSel = arrPageDispModeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPageDispModeSel = arrPageDispModeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPageDispModeSel = arrPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPageDispModeSel = arrPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPageDispModeSel = arrPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPageDispModeSel = arrPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPageDispModeSel = arrPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPageDispModeSel = arrPageDispModeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPageDispModeSel.length == 0) return [];
  return arrPageDispModeSel.map((x) => x.pageDispModeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PageDispMode_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
export async function PageDispMode_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
export async function PageDispMode_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
export async function PageDispMode_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPageDispModeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

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
      const objPageDispMode = PageDispMode_GetObjFromJsonObj(returnObj);
      return objPageDispMode;
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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
export async function PageDispMode_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPageDispModeEN._CurrTabName;
  if (IsNullOrEmpty(clsPageDispModeEN.WhereFormat) == false) {
    strWhereCond = clsPageDispModeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsPageDispModeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPageDispModeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPageDispModeExObjLstCache: Array<clsPageDispModeEN> = CacheHelper.Get(strKey);
    const arrPageDispModeObjLstT = PageDispMode_GetObjLstByJSONObjLst(arrPageDispModeExObjLstCache);
    return arrPageDispModeObjLstT;
  }
  try {
    const arrPageDispModeExObjLst = await PageDispMode_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPageDispModeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPageDispModeExObjLst.length,
    );
    console.log(strInfo);
    return arrPageDispModeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      pageDispMode_ConstructorName,
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
export async function PageDispMode_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPageDispModeEN._CurrTabName;
  if (IsNullOrEmpty(clsPageDispModeEN.WhereFormat) == false) {
    strWhereCond = clsPageDispModeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsPageDispModeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPageDispModeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPageDispModeExObjLstCache: Array<clsPageDispModeEN> = JSON.parse(strTempObjLst);
    const arrPageDispModeObjLstT = PageDispMode_GetObjLstByJSONObjLst(arrPageDispModeExObjLstCache);
    return arrPageDispModeObjLstT;
  }
  try {
    const arrPageDispModeExObjLst = await PageDispMode_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPageDispModeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPageDispModeExObjLst.length,
    );
    console.log(strInfo);
    return arrPageDispModeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      pageDispMode_ConstructorName,
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
export async function PageDispMode_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPageDispModeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPageDispModeObjLstCache: Array<clsPageDispModeEN> = JSON.parse(strTempObjLst);
    return arrPageDispModeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PageDispMode_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPageDispModeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

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
          pageDispMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PageDispMode_GetObjLstByJSONObjLst(returnObjLst);
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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
export async function PageDispMode_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPageDispModeEN._CurrTabName;
  if (IsNullOrEmpty(clsPageDispModeEN.WhereFormat) == false) {
    strWhereCond = clsPageDispModeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsPageDispModeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPageDispModeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPageDispModeExObjLstCache: Array<clsPageDispModeEN> = JSON.parse(strTempObjLst);
    const arrPageDispModeObjLstT = PageDispMode_GetObjLstByJSONObjLst(arrPageDispModeExObjLstCache);
    return arrPageDispModeObjLstT;
  }
  try {
    const arrPageDispModeExObjLst = await PageDispMode_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPageDispModeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPageDispModeExObjLst.length,
    );
    console.log(strInfo);
    return arrPageDispModeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      pageDispMode_ConstructorName,
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
export async function PageDispMode_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPageDispModeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPageDispModeObjLstCache: Array<clsPageDispModeEN> = JSON.parse(strTempObjLst);
    return arrPageDispModeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PageDispMode_GetObjLstCache(): Promise<Array<clsPageDispModeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrPageDispModeObjLstCache;
  switch (clsPageDispModeEN.CacheModeId) {
    case '04': //sessionStorage
      arrPageDispModeObjLstCache = await PageDispMode_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrPageDispModeObjLstCache = await PageDispMode_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrPageDispModeObjLstCache = await PageDispMode_GetObjLstClientCache();
      break;
    default:
      arrPageDispModeObjLstCache = await PageDispMode_GetObjLstClientCache();
      break;
  }
  return arrPageDispModeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PageDispMode_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPageDispModeObjLstCache;
  switch (clsPageDispModeEN.CacheModeId) {
    case '04': //sessionStorage
      arrPageDispModeObjLstCache = await PageDispMode_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrPageDispModeObjLstCache = await PageDispMode_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrPageDispModeObjLstCache = null;
      break;
    default:
      arrPageDispModeObjLstCache = null;
      break;
  }
  return arrPageDispModeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPageDispModeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PageDispMode_GetSubObjLstCache(objPageDispModeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPageDispModeObjLstCache = await PageDispMode_GetObjLstCache();
  let arrPageDispModeSel = arrPageDispModeObjLstCache;
  if (objPageDispModeCond.GetConditions().length == 0) return arrPageDispModeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objPageDispModeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPageDispModeSel = arrPageDispModeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPageDispModeSel = arrPageDispModeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPageDispModeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPageDispModeCond),
      pageDispMode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPageDispModeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPageDispModeId:关键字列表
 * @returns 对象列表
 **/
export async function PageDispMode_GetObjLstByPageDispModeIdLstAsync(
  arrPageDispModeId: Array<string>,
): Promise<Array<clsPageDispModeEN>> {
  const strThisFuncName = 'GetObjLstByPageDispModeIdLstAsync';
  const strAction = 'GetObjLstByPageDispModeIdLst';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPageDispModeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          pageDispMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PageDispMode_GetObjLstByJSONObjLst(returnObjLst);
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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
 * @param arrstrPageDispModeIdLst:关键字列表
 * @returns 对象列表
 */
export async function PageDispMode_GetObjLstByPageDispModeIdLstCache(
  arrPageDispModeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByPageDispModeIdLstCache';
  try {
    const arrPageDispModeObjLstCache = await PageDispMode_GetObjLstCache();
    const arrPageDispModeSel = arrPageDispModeObjLstCache.filter(
      (x) => arrPageDispModeIdLst.indexOf(x.pageDispModeId) > -1,
    );
    return arrPageDispModeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPageDispModeIdLst.join(','),
      pageDispMode_ConstructorName,
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
export async function PageDispMode_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPageDispModeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

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
          pageDispMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PageDispMode_GetObjLstByJSONObjLst(returnObjLst);
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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
export async function PageDispMode_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPageDispModeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

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
          pageDispMode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PageDispMode_GetObjLstByJSONObjLst(returnObjLst);
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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)

/**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strPageDispModeId:关键字
 * @returns 获取删除的结果
 **/
export async function PageDispMode_DelRecordAsync(strPageDispModeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strPageDispModeId);

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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
 * @param arrPageDispModeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PageDispMode_DelPageDispModesAsync(
  arrPageDispModeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelPageDispModesAsync';
  const strAction = 'DelPageDispModes';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPageDispModeId, config);
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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function PageDispMode_DelPageDispModesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPageDispModesByCondAsync';
  const strAction = 'DelPageDispModesByCond';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
 * @param objPageDispModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PageDispMode_AddNewRecordAsync(
  objPageDispModeEN: clsPageDispModeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objPageDispModeEN.pageDispModeId === null || objPageDispModeEN.pageDispModeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPageDispModeEN);
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPageDispModeEN, config);
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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
 * @param objPageDispModeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PageDispMode_AddNewRecordWithMaxIdAsync(
  objPageDispModeEN: clsPageDispModeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPageDispModeEN, config);
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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
export async function PageDispMode_AddNewObjSave(
  objPageDispModeEN: clsPageDispModeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    PageDispMode_CheckPropertyNew(objPageDispModeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${pageDispMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await PageDispMode_IsExistAsync(objPageDispModeEN.pageDispModeId);
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objPageDispModeEN.pageDispModeId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await PageDispMode_AddNewRecordAsync(objPageDispModeEN);
    if (returnBool == true) {
      PageDispMode_ReFreshCache();
    } else {
      const strInfo = `添加[页面显示模式(PageDispMode)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objPageDispModeEN.pageDispModeId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${pageDispMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function PageDispMode_UpdateObjSave(
  objPageDispModeEN: clsPageDispModeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objPageDispModeEN.sfUpdFldSetStr = objPageDispModeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objPageDispModeEN.pageDispModeId == '' || objPageDispModeEN.pageDispModeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    PageDispMode_CheckProperty4Update(objPageDispModeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${pageDispMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await PageDispMode_UpdateRecordAsync(objPageDispModeEN);
    if (returnBool == true) {
      PageDispMode_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${pageDispMode_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objPageDispModeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PageDispMode_AddNewRecordWithReturnKeyAsync(
  objPageDispModeEN: clsPageDispModeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPageDispModeEN, config);
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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
 * @param objPageDispModeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PageDispMode_UpdateRecordAsync(
  objPageDispModeEN: clsPageDispModeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPageDispModeEN.sfUpdFldSetStr === undefined ||
    objPageDispModeEN.sfUpdFldSetStr === null ||
    objPageDispModeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPageDispModeEN.pageDispModeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPageDispModeEN, config);
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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
 * @param objPageDispModeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PageDispMode_EditRecordExAsync(
  objPageDispModeEN: clsPageDispModeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objPageDispModeEN.sfUpdFldSetStr === undefined ||
    objPageDispModeEN.sfUpdFldSetStr === null ||
    objPageDispModeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPageDispModeEN.pageDispModeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPageDispModeEN, config);
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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
 * @param objPageDispModeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PageDispMode_UpdateWithConditionAsync(
  objPageDispModeEN: clsPageDispModeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPageDispModeEN.sfUpdFldSetStr === undefined ||
    objPageDispModeEN.sfUpdFldSetStr === null ||
    objPageDispModeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPageDispModeEN.pageDispModeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);
  objPageDispModeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPageDispModeEN, config);
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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
 * @param objstrPageDispModeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PageDispMode_IsExistRecordCache(objPageDispModeCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPageDispModeObjLstCache = await PageDispMode_GetObjLstCache();
  if (arrPageDispModeObjLstCache == null) return false;
  let arrPageDispModeSel = arrPageDispModeObjLstCache;
  if (objPageDispModeCond.GetConditions().length == 0)
    return arrPageDispModeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objPageDispModeCond.GetConditions()) {
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
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPageDispModeSel = arrPageDispModeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPageDispModeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPageDispModeCond),
      pageDispMode_ConstructorName,
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
export async function PageDispMode_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
 * @param strPageDispModeId:所给的关键字
 * @returns 对象
 */
export async function PageDispMode_IsExistCache(strPageDispModeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrPageDispModeObjLstCache = await PageDispMode_GetObjLstCache();
  if (arrPageDispModeObjLstCache == null) return false;
  try {
    const arrPageDispModeSel = arrPageDispModeObjLstCache.filter(
      (x) => x.pageDispModeId == strPageDispModeId,
    );
    if (arrPageDispModeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strPageDispModeId,
      pageDispMode_ConstructorName,
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
 * @param strPageDispModeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PageDispMode_IsExistAsync(strPageDispModeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPageDispModeId,
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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
export async function PageDispMode_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
 * @param objPageDispModeCond:条件对象
 * @returns 对象列表记录数
 */
export async function PageDispMode_GetRecCountByCondCache(
  objPageDispModeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPageDispModeObjLstCache = await PageDispMode_GetObjLstCache();
  if (arrPageDispModeObjLstCache == null) return 0;
  let arrPageDispModeSel = arrPageDispModeObjLstCache;
  if (objPageDispModeCond.GetConditions().length == 0) return arrPageDispModeSel.length;
  try {
    for (const objCondition of objPageDispModeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPageDispModeSel = arrPageDispModeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPageDispModeSel = arrPageDispModeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPageDispModeSel = arrPageDispModeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPageDispModeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPageDispModeCond),
      pageDispMode_ConstructorName,
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
export async function PageDispMode_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(pageDispMode_Controller, strAction);

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
        pageDispMode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        pageDispMode_ConstructorName,
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
export function PageDispMode_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PageDispMode_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsPageDispModeEN._CurrTabName;
  switch (clsPageDispModeEN.CacheModeId) {
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
  clsPageDispModeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function PageDispMode_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsPageDispModeEN._CurrTabName;
    switch (clsPageDispModeEN.CacheModeId) {
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
    clsPageDispModeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function PageDispMode_GetLastRefreshTime(): string {
  if (clsPageDispModeEN._RefreshTimeLst.length == 0) return '';
  return clsPageDispModeEN._RefreshTimeLst[clsPageDispModeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function PageDispMode_BindDdl_PageDispModeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_PageDispModeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PageDispModeIdInDivCache");
  const arrObjLstSel = await PageDispMode_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsPageDispModeEN.con_PageDispModeId,
    clsPageDispModeEN.con_PageDispModeName,
    '页面显示模式...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function PageDispMode_GetArrPageDispMode() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PageDispModeIdInDivCache");
  const arrPageDispMode = new Array<clsPageDispModeEN>();
  const arrObjLstSel = await PageDispMode_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsPageDispModeEN();
  obj0.pageDispModeId = '0';
  obj0.pageDispModeName = '选页面显示模式...';
  arrPageDispMode.push(obj0);
  arrObjLstSel.forEach((x) => arrPageDispMode.push(x));
  return arrPageDispMode;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PageDispMode_CheckPropertyNew(pobjPageDispModeEN: clsPageDispModeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPageDispModeEN.pageDispModeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[页面显示模式名称]不能为空(In 页面显示模式)!(clsPageDispModeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjPageDispModeEN.pageDispModeENName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[页面显示模式英文名]不能为空(In 页面显示模式)!(clsPageDispModeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPageDispModeEN.pageDispModeId) == false &&
    GetStrLen(pobjPageDispModeEN.pageDispModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[页面显示模式Id(pageDispModeId)]的长度不能超过2(In 页面显示模式(PageDispMode))!值:${pobjPageDispModeEN.pageDispModeId}(clsPageDispModeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPageDispModeEN.pageDispModeName) == false &&
    GetStrLen(pobjPageDispModeEN.pageDispModeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[页面显示模式名称(pageDispModeName)]的长度不能超过50(In 页面显示模式(PageDispMode))!值:${pobjPageDispModeEN.pageDispModeName}(clsPageDispModeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPageDispModeEN.pageDispModeENName) == false &&
    GetStrLen(pobjPageDispModeEN.pageDispModeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[页面显示模式英文名(pageDispModeENName)]的长度不能超过50(In 页面显示模式(PageDispMode))!值:${pobjPageDispModeEN.pageDispModeENName}(clsPageDispModeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPageDispModeEN.memo) == false &&
    GetStrLen(pobjPageDispModeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 页面显示模式(PageDispMode))!值:${pobjPageDispModeEN.memo}(clsPageDispModeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPageDispModeEN.pageDispModeId) == false &&
    undefined !== pobjPageDispModeEN.pageDispModeId &&
    tzDataType.isString(pobjPageDispModeEN.pageDispModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[页面显示模式Id(pageDispModeId)]的值:[${pobjPageDispModeEN.pageDispModeId}], 非法,应该为字符型(In 页面显示模式(PageDispMode))!(clsPageDispModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPageDispModeEN.pageDispModeName) == false &&
    undefined !== pobjPageDispModeEN.pageDispModeName &&
    tzDataType.isString(pobjPageDispModeEN.pageDispModeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[页面显示模式名称(pageDispModeName)]的值:[${pobjPageDispModeEN.pageDispModeName}], 非法,应该为字符型(In 页面显示模式(PageDispMode))!(clsPageDispModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPageDispModeEN.pageDispModeENName) == false &&
    undefined !== pobjPageDispModeEN.pageDispModeENName &&
    tzDataType.isString(pobjPageDispModeEN.pageDispModeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[页面显示模式英文名(pageDispModeENName)]的值:[${pobjPageDispModeEN.pageDispModeENName}], 非法,应该为字符型(In 页面显示模式(PageDispMode))!(clsPageDispModeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPageDispModeEN.memo) == false &&
    undefined !== pobjPageDispModeEN.memo &&
    tzDataType.isString(pobjPageDispModeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjPageDispModeEN.memo}], 非法,应该为字符型(In 页面显示模式(PageDispMode))!(clsPageDispModeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PageDispMode_CheckProperty4Update(pobjPageDispModeEN: clsPageDispModeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPageDispModeEN.pageDispModeId) == false &&
    GetStrLen(pobjPageDispModeEN.pageDispModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[页面显示模式Id(pageDispModeId)]的长度不能超过2(In 页面显示模式(PageDispMode))!值:${pobjPageDispModeEN.pageDispModeId}(clsPageDispModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPageDispModeEN.pageDispModeName) == false &&
    GetStrLen(pobjPageDispModeEN.pageDispModeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[页面显示模式名称(pageDispModeName)]的长度不能超过50(In 页面显示模式(PageDispMode))!值:${pobjPageDispModeEN.pageDispModeName}(clsPageDispModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPageDispModeEN.pageDispModeENName) == false &&
    GetStrLen(pobjPageDispModeEN.pageDispModeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[页面显示模式英文名(pageDispModeENName)]的长度不能超过50(In 页面显示模式(PageDispMode))!值:${pobjPageDispModeEN.pageDispModeENName}(clsPageDispModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPageDispModeEN.memo) == false &&
    GetStrLen(pobjPageDispModeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 页面显示模式(PageDispMode))!值:${pobjPageDispModeEN.memo}(clsPageDispModeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPageDispModeEN.pageDispModeId) == false &&
    undefined !== pobjPageDispModeEN.pageDispModeId &&
    tzDataType.isString(pobjPageDispModeEN.pageDispModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[页面显示模式Id(pageDispModeId)]的值:[${pobjPageDispModeEN.pageDispModeId}], 非法,应该为字符型(In 页面显示模式(PageDispMode))!(clsPageDispModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPageDispModeEN.pageDispModeName) == false &&
    undefined !== pobjPageDispModeEN.pageDispModeName &&
    tzDataType.isString(pobjPageDispModeEN.pageDispModeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[页面显示模式名称(pageDispModeName)]的值:[${pobjPageDispModeEN.pageDispModeName}], 非法,应该为字符型(In 页面显示模式(PageDispMode))!(clsPageDispModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPageDispModeEN.pageDispModeENName) == false &&
    undefined !== pobjPageDispModeEN.pageDispModeENName &&
    tzDataType.isString(pobjPageDispModeEN.pageDispModeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[页面显示模式英文名(pageDispModeENName)]的值:[${pobjPageDispModeEN.pageDispModeENName}], 非法,应该为字符型(In 页面显示模式(PageDispMode))!(clsPageDispModeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPageDispModeEN.memo) == false &&
    undefined !== pobjPageDispModeEN.memo &&
    tzDataType.isString(pobjPageDispModeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjPageDispModeEN.memo}], 非法,应该为字符型(In 页面显示模式(PageDispMode))!(clsPageDispModeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjPageDispModeEN.pageDispModeId) === true ||
    pobjPageDispModeEN.pageDispModeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[页面显示模式Id]不能为空(In 页面显示模式)!(clsPageDispModeBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PageDispMode_GetJSONStrByObj(pobjPageDispModeEN: clsPageDispModeEN): string {
  pobjPageDispModeEN.sfUpdFldSetStr = pobjPageDispModeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPageDispModeEN);
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
 * 日期:2025-05-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PageDispMode_GetObjLstByJSONStr(strJSON: string): Array<clsPageDispModeEN> {
  let arrPageDispModeObjLst = new Array<clsPageDispModeEN>();
  if (strJSON === '') {
    return arrPageDispModeObjLst;
  }
  try {
    arrPageDispModeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPageDispModeObjLst;
  }
  return arrPageDispModeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPageDispModeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PageDispMode_GetObjLstByJSONObjLst(
  arrPageDispModeObjLstS: Array<clsPageDispModeEN>,
): Array<clsPageDispModeEN> {
  const arrPageDispModeObjLst = new Array<clsPageDispModeEN>();
  for (const objInFor of arrPageDispModeObjLstS) {
    const obj1 = PageDispMode_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPageDispModeObjLst.push(obj1);
  }
  return arrPageDispModeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-25
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PageDispMode_GetObjByJSONStr(strJSON: string): clsPageDispModeEN {
  let pobjPageDispModeEN = new clsPageDispModeEN();
  if (strJSON === '') {
    return pobjPageDispModeEN;
  }
  try {
    pobjPageDispModeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPageDispModeEN;
  }
  return pobjPageDispModeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PageDispMode_GetCombineCondition(objPageDispModeCond: clsPageDispModeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPageDispModeCond.dicFldComparisonOp,
      clsPageDispModeEN.con_PageDispModeId,
    ) == true
  ) {
    const strComparisonOpPageDispModeId: string =
      objPageDispModeCond.dicFldComparisonOp[clsPageDispModeEN.con_PageDispModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPageDispModeEN.con_PageDispModeId,
      objPageDispModeCond.pageDispModeId,
      strComparisonOpPageDispModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPageDispModeCond.dicFldComparisonOp,
      clsPageDispModeEN.con_PageDispModeName,
    ) == true
  ) {
    const strComparisonOpPageDispModeName: string =
      objPageDispModeCond.dicFldComparisonOp[clsPageDispModeEN.con_PageDispModeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPageDispModeEN.con_PageDispModeName,
      objPageDispModeCond.pageDispModeName,
      strComparisonOpPageDispModeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPageDispModeCond.dicFldComparisonOp,
      clsPageDispModeEN.con_PageDispModeENName,
    ) == true
  ) {
    const strComparisonOpPageDispModeENName: string =
      objPageDispModeCond.dicFldComparisonOp[clsPageDispModeEN.con_PageDispModeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPageDispModeEN.con_PageDispModeENName,
      objPageDispModeCond.pageDispModeENName,
      strComparisonOpPageDispModeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPageDispModeCond.dicFldComparisonOp,
      clsPageDispModeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPageDispModeCond.dicFldComparisonOp[clsPageDispModeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPageDispModeEN.con_Memo,
      objPageDispModeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPageDispModeENS:源对象
 * @param objPageDispModeENT:目标对象
 */
export function PageDispMode_GetObjFromJsonObj(
  objPageDispModeENS: clsPageDispModeEN,
): clsPageDispModeEN {
  const objPageDispModeENT: clsPageDispModeEN = new clsPageDispModeEN();
  ObjectAssign(objPageDispModeENT, objPageDispModeENS);
  return objPageDispModeENT;
}
