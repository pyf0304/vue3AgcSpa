/**
 * 类名:clsTabMainTypeWApi
 * 表名:TabMainType(00050534)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/04 15:35:58
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 表主类型(TabMainType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月04日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import {
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsTabMainTypeEN } from '@/ts/L0Entity/Table_Field/clsTabMainTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const tabMainType_Controller = 'TabMainTypeApi';
export const tabMainType_ConstructorName = 'tabMainType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTabMainTypeId:关键字
 * @returns 对象
 **/
export async function TabMainType_GetObjByTabMainTypeIdAsync(
  strTabMainTypeId: string,
): Promise<clsTabMainTypeEN | null> {
  const strThisFuncName = 'GetObjByTabMainTypeIdAsync';

  if (IsNullOrEmpty(strTabMainTypeId) == true) {
    const strMsg = Format(
      '参数:[strTabMainTypeId]不能为空!(In clsTabMainTypeWApi.GetObjByTabMainTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabMainTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strTabMainTypeId]的长度:[{0}]不正确!(clsTabMainTypeWApi.GetObjByTabMainTypeIdAsync)',
      strTabMainTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTabMainTypeId';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabMainTypeId,
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
      const objTabMainType = TabMainType_GetObjFromJsonObj(returnObj);
      return objTabMainType;
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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
 * @param strTabMainTypeId:所给的关键字
 * @returns 对象
 */
export async function TabMainType_GetObjByTabMainTypeIdlocalStorage(strTabMainTypeId: string) {
  const strThisFuncName = 'GetObjByTabMainTypeIdlocalStorage';

  if (IsNullOrEmpty(strTabMainTypeId) == true) {
    const strMsg = Format(
      '参数:[strTabMainTypeId]不能为空!(In clsTabMainTypeWApi.GetObjByTabMainTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabMainTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strTabMainTypeId]的长度:[{0}]不正确!(clsTabMainTypeWApi.GetObjByTabMainTypeIdlocalStorage)',
      strTabMainTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsTabMainTypeEN._CurrTabName, strTabMainTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objTabMainTypeCache: clsTabMainTypeEN = JSON.parse(strTempObj);
    return objTabMainTypeCache;
  }
  try {
    const objTabMainType = await TabMainType_GetObjByTabMainTypeIdAsync(strTabMainTypeId);
    if (objTabMainType != null) {
      localStorage.setItem(strKey, JSON.stringify(objTabMainType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objTabMainType;
    }
    return objTabMainType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabMainTypeId,
      tabMainType_ConstructorName,
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
 * @param strTabMainTypeId:所给的关键字
 * @returns 对象
 */
export async function TabMainType_GetObjByTabMainTypeIdCache(
  strTabMainTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTabMainTypeIdCache';

  if (IsNullOrEmpty(strTabMainTypeId) == true) {
    const strMsg = Format(
      '参数:[strTabMainTypeId]不能为空!(In clsTabMainTypeWApi.GetObjByTabMainTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabMainTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strTabMainTypeId]的长度:[{0}]不正确!(clsTabMainTypeWApi.GetObjByTabMainTypeIdCache)',
      strTabMainTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrTabMainTypeObjLstCache = await TabMainType_GetObjLstCache();
  try {
    const arrTabMainTypeSel = arrTabMainTypeObjLstCache.filter(
      (x) => x.tabMainTypeId == strTabMainTypeId,
    );
    let objTabMainType: clsTabMainTypeEN;
    if (arrTabMainTypeSel.length > 0) {
      objTabMainType = arrTabMainTypeSel[0];
      return objTabMainType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objTabMainTypeConst = await TabMainType_GetObjByTabMainTypeIdAsync(strTabMainTypeId);
        if (objTabMainTypeConst != null) {
          TabMainType_ReFreshThisCache();
          return objTabMainTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabMainTypeId,
      tabMainType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objTabMainType:所给的对象
 * @returns 对象
 */
export async function TabMainType_UpdateObjInLstCache(objTabMainType: clsTabMainTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrTabMainTypeObjLstCache = await TabMainType_GetObjLstCache();
    const obj = arrTabMainTypeObjLstCache.find(
      (x) => x.tabMainTypeId == objTabMainType.tabMainTypeId,
    );
    if (obj != null) {
      objTabMainType.tabMainTypeId = obj.tabMainTypeId;
      ObjectAssign(obj, objTabMainType);
    } else {
      arrTabMainTypeObjLstCache.push(objTabMainType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      tabMainType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabMainType_SortFunDefa(a: clsTabMainTypeEN, b: clsTabMainTypeEN): number {
  return a.tabMainTypeId.localeCompare(b.tabMainTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabMainType_SortFunDefa2Fld(a: clsTabMainTypeEN, b: clsTabMainTypeEN): number {
  if (a.tabMainTypeName == b.tabMainTypeName)
    return a.tabMainTypeENName.localeCompare(b.tabMainTypeENName);
  else return a.tabMainTypeName.localeCompare(b.tabMainTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabMainType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTabMainTypeEN.con_TabMainTypeId:
        return (a: clsTabMainTypeEN, b: clsTabMainTypeEN) => {
          return a.tabMainTypeId.localeCompare(b.tabMainTypeId);
        };
      case clsTabMainTypeEN.con_TabMainTypeName:
        return (a: clsTabMainTypeEN, b: clsTabMainTypeEN) => {
          return a.tabMainTypeName.localeCompare(b.tabMainTypeName);
        };
      case clsTabMainTypeEN.con_TabMainTypeENName:
        return (a: clsTabMainTypeEN, b: clsTabMainTypeEN) => {
          if (a.tabMainTypeENName == null) return -1;
          if (b.tabMainTypeENName == null) return 1;
          return a.tabMainTypeENName.localeCompare(b.tabMainTypeENName);
        };
      case clsTabMainTypeEN.con_Memo:
        return (a: clsTabMainTypeEN, b: clsTabMainTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TabMainType]中不存在!(in ${tabMainType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsTabMainTypeEN.con_TabMainTypeId:
        return (a: clsTabMainTypeEN, b: clsTabMainTypeEN) => {
          return b.tabMainTypeId.localeCompare(a.tabMainTypeId);
        };
      case clsTabMainTypeEN.con_TabMainTypeName:
        return (a: clsTabMainTypeEN, b: clsTabMainTypeEN) => {
          return b.tabMainTypeName.localeCompare(a.tabMainTypeName);
        };
      case clsTabMainTypeEN.con_TabMainTypeENName:
        return (a: clsTabMainTypeEN, b: clsTabMainTypeEN) => {
          if (b.tabMainTypeENName == null) return -1;
          if (a.tabMainTypeENName == null) return 1;
          return b.tabMainTypeENName.localeCompare(a.tabMainTypeENName);
        };
      case clsTabMainTypeEN.con_Memo:
        return (a: clsTabMainTypeEN, b: clsTabMainTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TabMainType]中不存在!(in ${tabMainType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strTabMainTypeId:所给的关键字
 * @returns 对象
 */
export async function TabMainType_GetNameByTabMainTypeIdCache(strTabMainTypeId: string) {
  if (IsNullOrEmpty(strTabMainTypeId) == true) {
    const strMsg = Format(
      '参数:[strTabMainTypeId]不能为空!(In clsTabMainTypeWApi.GetNameByTabMainTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabMainTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strTabMainTypeId]的长度:[{0}]不正确!(clsTabMainTypeWApi.GetNameByTabMainTypeIdCache)',
      strTabMainTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrTabMainTypeObjLstCache = await TabMainType_GetObjLstCache();
  if (arrTabMainTypeObjLstCache == null) return '';
  try {
    const arrTabMainTypeSel = arrTabMainTypeObjLstCache.filter(
      (x) => x.tabMainTypeId == strTabMainTypeId,
    );
    let objTabMainType: clsTabMainTypeEN;
    if (arrTabMainTypeSel.length > 0) {
      objTabMainType = arrTabMainTypeSel[0];
      return objTabMainType.tabMainTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strTabMainTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function TabMainType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsTabMainTypeEN.con_TabMainTypeId:
      return (obj: clsTabMainTypeEN) => {
        return obj.tabMainTypeId === value;
      };
    case clsTabMainTypeEN.con_TabMainTypeName:
      return (obj: clsTabMainTypeEN) => {
        return obj.tabMainTypeName === value;
      };
    case clsTabMainTypeEN.con_TabMainTypeENName:
      return (obj: clsTabMainTypeEN) => {
        return obj.tabMainTypeENName === value;
      };
    case clsTabMainTypeEN.con_Memo:
      return (obj: clsTabMainTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[TabMainType]中不存在!(in ${tabMainType_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function TabMainType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsTabMainTypeEN.con_TabMainTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsTabMainTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsTabMainTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTabMainTypeId = strInValue;
  if (IsNullOrEmpty(strTabMainTypeId) == true) {
    return '';
  }
  const objTabMainType = await TabMainType_GetObjByTabMainTypeIdCache(strTabMainTypeId);
  if (objTabMainType == null) return '';
  if (objTabMainType.GetFldValue(strOutFldName) == null) return '';
  return objTabMainType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function TabMainType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsTabMainTypeEN.con_TabMainTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrTabMainType = await TabMainType_GetObjLstCache();
  if (arrTabMainType == null) return [];
  let arrTabMainTypeSel = arrTabMainType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrTabMainTypeSel = arrTabMainTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrTabMainTypeSel = arrTabMainTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrTabMainTypeSel = arrTabMainTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrTabMainTypeSel = arrTabMainTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrTabMainTypeSel = arrTabMainTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrTabMainTypeSel = arrTabMainTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrTabMainTypeSel = arrTabMainTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrTabMainTypeSel = arrTabMainTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrTabMainTypeSel = arrTabMainTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrTabMainTypeSel = arrTabMainTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrTabMainTypeSel.length == 0) return [];
  return arrTabMainTypeSel.map((x) => x.tabMainTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function TabMainType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
export async function TabMainType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
export async function TabMainType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
export async function TabMainType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsTabMainTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

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
      const objTabMainType = TabMainType_GetObjFromJsonObj(returnObj);
      return objTabMainType;
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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
export async function TabMainType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsTabMainTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsTabMainTypeEN.WhereFormat) == false) {
    strWhereCond = clsTabMainTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsTabMainTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTabMainTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrTabMainTypeExObjLstCache: Array<clsTabMainTypeEN> = CacheHelper.Get(strKey);
    const arrTabMainTypeObjLstT = TabMainType_GetObjLstByJSONObjLst(arrTabMainTypeExObjLstCache);
    return arrTabMainTypeObjLstT;
  }
  try {
    const arrTabMainTypeExObjLst = await TabMainType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrTabMainTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrTabMainTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrTabMainTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      tabMainType_ConstructorName,
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
export async function TabMainType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsTabMainTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsTabMainTypeEN.WhereFormat) == false) {
    strWhereCond = clsTabMainTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsTabMainTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTabMainTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrTabMainTypeExObjLstCache: Array<clsTabMainTypeEN> = JSON.parse(strTempObjLst);
    const arrTabMainTypeObjLstT = TabMainType_GetObjLstByJSONObjLst(arrTabMainTypeExObjLstCache);
    return arrTabMainTypeObjLstT;
  }
  try {
    const arrTabMainTypeExObjLst = await TabMainType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrTabMainTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrTabMainTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrTabMainTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      tabMainType_ConstructorName,
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
export async function TabMainType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsTabMainTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrTabMainTypeObjLstCache: Array<clsTabMainTypeEN> = JSON.parse(strTempObjLst);
    return arrTabMainTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function TabMainType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsTabMainTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

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
          tabMainType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabMainType_GetObjLstByJSONObjLst(returnObjLst);
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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
export async function TabMainType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsTabMainTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsTabMainTypeEN.WhereFormat) == false) {
    strWhereCond = clsTabMainTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsTabMainTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTabMainTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrTabMainTypeExObjLstCache: Array<clsTabMainTypeEN> = JSON.parse(strTempObjLst);
    const arrTabMainTypeObjLstT = TabMainType_GetObjLstByJSONObjLst(arrTabMainTypeExObjLstCache);
    return arrTabMainTypeObjLstT;
  }
  try {
    const arrTabMainTypeExObjLst = await TabMainType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrTabMainTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrTabMainTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrTabMainTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      tabMainType_ConstructorName,
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
export async function TabMainType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsTabMainTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrTabMainTypeObjLstCache: Array<clsTabMainTypeEN> = JSON.parse(strTempObjLst);
    return arrTabMainTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TabMainType_GetObjLstCache(): Promise<Array<clsTabMainTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrTabMainTypeObjLstCache;
  switch (clsTabMainTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrTabMainTypeObjLstCache = await TabMainType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrTabMainTypeObjLstCache = await TabMainType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrTabMainTypeObjLstCache = await TabMainType_GetObjLstClientCache();
      break;
    default:
      arrTabMainTypeObjLstCache = await TabMainType_GetObjLstClientCache();
      break;
  }
  return arrTabMainTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TabMainType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrTabMainTypeObjLstCache;
  switch (clsTabMainTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrTabMainTypeObjLstCache = await TabMainType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrTabMainTypeObjLstCache = await TabMainType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrTabMainTypeObjLstCache = null;
      break;
    default:
      arrTabMainTypeObjLstCache = null;
      break;
  }
  return arrTabMainTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTabMainTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function TabMainType_GetSubObjLstCache(objTabMainTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrTabMainTypeObjLstCache = await TabMainType_GetObjLstCache();
  let arrTabMainTypeSel = arrTabMainTypeObjLstCache;
  if (objTabMainTypeCond.GetConditions().length == 0) return arrTabMainTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objTabMainTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrTabMainTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objTabMainTypeCond),
      tabMainType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTabMainTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTabMainTypeId:关键字列表
 * @returns 对象列表
 **/
export async function TabMainType_GetObjLstByTabMainTypeIdLstAsync(
  arrTabMainTypeId: Array<string>,
): Promise<Array<clsTabMainTypeEN>> {
  const strThisFuncName = 'GetObjLstByTabMainTypeIdLstAsync';
  const strAction = 'GetObjLstByTabMainTypeIdLst';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTabMainTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          tabMainType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabMainType_GetObjLstByJSONObjLst(returnObjLst);
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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
 * @param arrstrTabMainTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function TabMainType_GetObjLstByTabMainTypeIdLstCache(
  arrTabMainTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByTabMainTypeIdLstCache';
  try {
    const arrTabMainTypeObjLstCache = await TabMainType_GetObjLstCache();
    const arrTabMainTypeSel = arrTabMainTypeObjLstCache.filter(
      (x) => arrTabMainTypeIdLst.indexOf(x.tabMainTypeId) > -1,
    );
    return arrTabMainTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTabMainTypeIdLst.join(','),
      tabMainType_ConstructorName,
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
export async function TabMainType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsTabMainTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

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
          tabMainType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabMainType_GetObjLstByJSONObjLst(returnObjLst);
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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
export async function TabMainType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsTabMainTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

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
          tabMainType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabMainType_GetObjLstByJSONObjLst(returnObjLst);
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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
export async function TabMainType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsTabMainTypeEN>();
  const arrTabMainTypeObjLstCache = await TabMainType_GetObjLstCache();
  if (arrTabMainTypeObjLstCache.length == 0) return arrTabMainTypeObjLstCache;
  let arrTabMainTypeSel = arrTabMainTypeObjLstCache;
  const objTabMainTypeCond = objPagerPara.conditionCollection;
  if (objTabMainTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsTabMainTypeEN>();
  }
  //console.log("clsTabMainTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objTabMainTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrTabMainTypeSel.length == 0) return arrTabMainTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrTabMainTypeSel = arrTabMainTypeSel.sort(TabMainType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrTabMainTypeSel = arrTabMainTypeSel.sort(objPagerPara.sortFun);
    }
    arrTabMainTypeSel = arrTabMainTypeSel.slice(intStart, intEnd);
    return arrTabMainTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      tabMainType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTabMainTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function TabMainType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsTabMainTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsTabMainTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

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
          tabMainType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabMainType_GetObjLstByJSONObjLst(returnObjLst);
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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
 * @param strTabMainTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function TabMainType_DelRecordAsync(strTabMainTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(tabMainType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strTabMainTypeId);

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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
 * @param arrTabMainTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function TabMainType_DelTabMainTypesAsync(
  arrTabMainTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelTabMainTypesAsync';
  const strAction = 'DelTabMainTypes';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTabMainTypeId, config);
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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
export async function TabMainType_DelTabMainTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelTabMainTypesByCondAsync';
  const strAction = 'DelTabMainTypesByCond';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
 * @param objTabMainTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabMainType_AddNewRecordAsync(
  objTabMainTypeEN: clsTabMainTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objTabMainTypeEN.tabMainTypeId === null || objTabMainTypeEN.tabMainTypeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objTabMainTypeEN);
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabMainTypeEN, config);
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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
 * @param objTabMainTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabMainType_AddNewRecordWithMaxIdAsync(
  objTabMainTypeEN: clsTabMainTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabMainTypeEN, config);
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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
export async function TabMainType_AddNewObjSave(
  objTabMainTypeEN: clsTabMainTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    TabMainType_CheckPropertyNew(objTabMainTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${tabMainType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await TabMainType_IsExistAsync(objTabMainTypeEN.tabMainTypeId);
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objTabMainTypeEN.tabMainTypeId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await TabMainType_AddNewRecordAsync(objTabMainTypeEN);
    if (returnBool == true) {
      TabMainType_ReFreshCache();
    } else {
      const strInfo = `添加[表主类型(TabMainType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objTabMainTypeEN.tabMainTypeId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${tabMainType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function TabMainType_UpdateObjSave(
  objTabMainTypeEN: clsTabMainTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objTabMainTypeEN.sfUpdFldSetStr = objTabMainTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objTabMainTypeEN.tabMainTypeId == '' || objTabMainTypeEN.tabMainTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    TabMainType_CheckProperty4Update(objTabMainTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${tabMainType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await TabMainType_UpdateRecordAsync(objTabMainTypeEN);
    if (returnBool == true) {
      TabMainType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${tabMainType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objTabMainTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function TabMainType_AddNewRecordWithReturnKeyAsync(
  objTabMainTypeEN: clsTabMainTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabMainTypeEN, config);
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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
 * @param objTabMainTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function TabMainType_UpdateRecordAsync(
  objTabMainTypeEN: clsTabMainTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objTabMainTypeEN.sfUpdFldSetStr === undefined ||
    objTabMainTypeEN.sfUpdFldSetStr === null ||
    objTabMainTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabMainTypeEN.tabMainTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabMainTypeEN, config);
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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
 * @param objTabMainTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function TabMainType_EditRecordExAsync(
  objTabMainTypeEN: clsTabMainTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objTabMainTypeEN.sfUpdFldSetStr === undefined ||
    objTabMainTypeEN.sfUpdFldSetStr === null ||
    objTabMainTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabMainTypeEN.tabMainTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabMainTypeEN, config);
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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
 * @param objTabMainTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function TabMainType_UpdateWithConditionAsync(
  objTabMainTypeEN: clsTabMainTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objTabMainTypeEN.sfUpdFldSetStr === undefined ||
    objTabMainTypeEN.sfUpdFldSetStr === null ||
    objTabMainTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabMainTypeEN.tabMainTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);
  objTabMainTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabMainTypeEN, config);
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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
 * @param objstrTabMainTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function TabMainType_IsExistRecordCache(objTabMainTypeCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrTabMainTypeObjLstCache = await TabMainType_GetObjLstCache();
  if (arrTabMainTypeObjLstCache == null) return false;
  let arrTabMainTypeSel = arrTabMainTypeObjLstCache;
  if (objTabMainTypeCond.GetConditions().length == 0)
    return arrTabMainTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objTabMainTypeCond.GetConditions()) {
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
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrTabMainTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objTabMainTypeCond),
      tabMainType_ConstructorName,
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
export async function TabMainType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
 * @param strTabMainTypeId:所给的关键字
 * @returns 对象
 */
export async function TabMainType_IsExistCache(strTabMainTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrTabMainTypeObjLstCache = await TabMainType_GetObjLstCache();
  if (arrTabMainTypeObjLstCache == null) return false;
  try {
    const arrTabMainTypeSel = arrTabMainTypeObjLstCache.filter(
      (x) => x.tabMainTypeId == strTabMainTypeId,
    );
    if (arrTabMainTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTabMainTypeId,
      tabMainType_ConstructorName,
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
 * @param strTabMainTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function TabMainType_IsExistAsync(strTabMainTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabMainTypeId,
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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
export async function TabMainType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
 * @param objTabMainTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function TabMainType_GetRecCountByCondCache(objTabMainTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrTabMainTypeObjLstCache = await TabMainType_GetObjLstCache();
  if (arrTabMainTypeObjLstCache == null) return 0;
  let arrTabMainTypeSel = arrTabMainTypeObjLstCache;
  if (objTabMainTypeCond.GetConditions().length == 0) return arrTabMainTypeSel.length;
  try {
    for (const objCondition of objTabMainTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrTabMainTypeSel = arrTabMainTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrTabMainTypeSel = arrTabMainTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrTabMainTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objTabMainTypeCond),
      tabMainType_ConstructorName,
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
export async function TabMainType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(tabMainType_Controller, strAction);

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
        tabMainType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabMainType_ConstructorName,
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
export function TabMainType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function TabMainType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsTabMainTypeEN._CurrTabName;
  switch (clsTabMainTypeEN.CacheModeId) {
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
  clsTabMainTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function TabMainType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsTabMainTypeEN._CurrTabName;
    switch (clsTabMainTypeEN.CacheModeId) {
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
    clsTabMainTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function TabMainType_GetLastRefreshTime(): string {
  if (clsTabMainTypeEN._RefreshTimeLst.length == 0) return '';
  return clsTabMainTypeEN._RefreshTimeLst[clsTabMainTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function TabMainType_BindDdl_TabMainTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_TabMainTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_TabMainTypeIdInDivCache");
  const arrObjLstSel = await TabMainType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsTabMainTypeEN.con_TabMainTypeId,
    clsTabMainTypeEN.con_TabMainTypeName,
    '选表主类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function TabMainType_GetArrTabMainType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_TabMainTypeIdInDivCache");
  const arrTabMainType = new Array<clsTabMainTypeEN>();
  const arrObjLstSel = await TabMainType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsTabMainTypeEN();
  obj0.tabMainTypeId = '0';
  obj0.tabMainTypeName = '选表主类型...';
  arrTabMainType.push(obj0);
  arrObjLstSel.forEach((x) => arrTabMainType.push(x));
  return arrTabMainType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TabMainType_CheckPropertyNew(pobjTabMainTypeEN: clsTabMainTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjTabMainTypeEN.tabMainTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[表主类型名]不能为空(In 表主类型)!(clsTabMainTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTabMainTypeEN.tabMainTypeId) == false &&
    GetStrLen(pobjTabMainTypeEN.tabMainTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表主类型Id(tabMainTypeId)]的长度不能超过4(In 表主类型(TabMainType))!值:${pobjTabMainTypeEN.tabMainTypeId}(clsTabMainTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabMainTypeEN.tabMainTypeName) == false &&
    GetStrLen(pobjTabMainTypeEN.tabMainTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表主类型名(tabMainTypeName)]的长度不能超过30(In 表主类型(TabMainType))!值:${pobjTabMainTypeEN.tabMainTypeName}(clsTabMainTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabMainTypeEN.tabMainTypeENName) == false &&
    GetStrLen(pobjTabMainTypeEN.tabMainTypeENName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表主类型英文名(tabMainTypeENName)]的长度不能超过30(In 表主类型(TabMainType))!值:${pobjTabMainTypeEN.tabMainTypeENName}(clsTabMainTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjTabMainTypeEN.memo) == false && GetStrLen(pobjTabMainTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 表主类型(TabMainType))!值:${pobjTabMainTypeEN.memo}(clsTabMainTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjTabMainTypeEN.tabMainTypeId) == false &&
    undefined !== pobjTabMainTypeEN.tabMainTypeId &&
    tzDataType.isString(pobjTabMainTypeEN.tabMainTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表主类型Id(tabMainTypeId)]的值:[${pobjTabMainTypeEN.tabMainTypeId}], 非法,应该为字符型(In 表主类型(TabMainType))!(clsTabMainTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabMainTypeEN.tabMainTypeName) == false &&
    undefined !== pobjTabMainTypeEN.tabMainTypeName &&
    tzDataType.isString(pobjTabMainTypeEN.tabMainTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表主类型名(tabMainTypeName)]的值:[${pobjTabMainTypeEN.tabMainTypeName}], 非法,应该为字符型(In 表主类型(TabMainType))!(clsTabMainTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabMainTypeEN.tabMainTypeENName) == false &&
    undefined !== pobjTabMainTypeEN.tabMainTypeENName &&
    tzDataType.isString(pobjTabMainTypeEN.tabMainTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表主类型英文名(tabMainTypeENName)]的值:[${pobjTabMainTypeEN.tabMainTypeENName}], 非法,应该为字符型(In 表主类型(TabMainType))!(clsTabMainTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabMainTypeEN.memo) == false &&
    undefined !== pobjTabMainTypeEN.memo &&
    tzDataType.isString(pobjTabMainTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjTabMainTypeEN.memo}], 非法,应该为字符型(In 表主类型(TabMainType))!(clsTabMainTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TabMainType_CheckProperty4Update(pobjTabMainTypeEN: clsTabMainTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTabMainTypeEN.tabMainTypeId) == false &&
    GetStrLen(pobjTabMainTypeEN.tabMainTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表主类型Id(tabMainTypeId)]的长度不能超过4(In 表主类型(TabMainType))!值:${pobjTabMainTypeEN.tabMainTypeId}(clsTabMainTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabMainTypeEN.tabMainTypeName) == false &&
    GetStrLen(pobjTabMainTypeEN.tabMainTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表主类型名(tabMainTypeName)]的长度不能超过30(In 表主类型(TabMainType))!值:${pobjTabMainTypeEN.tabMainTypeName}(clsTabMainTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabMainTypeEN.tabMainTypeENName) == false &&
    GetStrLen(pobjTabMainTypeEN.tabMainTypeENName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表主类型英文名(tabMainTypeENName)]的长度不能超过30(In 表主类型(TabMainType))!值:${pobjTabMainTypeEN.tabMainTypeENName}(clsTabMainTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjTabMainTypeEN.memo) == false && GetStrLen(pobjTabMainTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 表主类型(TabMainType))!值:${pobjTabMainTypeEN.memo}(clsTabMainTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjTabMainTypeEN.tabMainTypeId) == false &&
    undefined !== pobjTabMainTypeEN.tabMainTypeId &&
    tzDataType.isString(pobjTabMainTypeEN.tabMainTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表主类型Id(tabMainTypeId)]的值:[${pobjTabMainTypeEN.tabMainTypeId}], 非法,应该为字符型(In 表主类型(TabMainType))!(clsTabMainTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabMainTypeEN.tabMainTypeName) == false &&
    undefined !== pobjTabMainTypeEN.tabMainTypeName &&
    tzDataType.isString(pobjTabMainTypeEN.tabMainTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表主类型名(tabMainTypeName)]的值:[${pobjTabMainTypeEN.tabMainTypeName}], 非法,应该为字符型(In 表主类型(TabMainType))!(clsTabMainTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabMainTypeEN.tabMainTypeENName) == false &&
    undefined !== pobjTabMainTypeEN.tabMainTypeENName &&
    tzDataType.isString(pobjTabMainTypeEN.tabMainTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表主类型英文名(tabMainTypeENName)]的值:[${pobjTabMainTypeEN.tabMainTypeENName}], 非法,应该为字符型(In 表主类型(TabMainType))!(clsTabMainTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabMainTypeEN.memo) == false &&
    undefined !== pobjTabMainTypeEN.memo &&
    tzDataType.isString(pobjTabMainTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjTabMainTypeEN.memo}], 非法,应该为字符型(In 表主类型(TabMainType))!(clsTabMainTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjTabMainTypeEN.tabMainTypeId) === true ||
    pobjTabMainTypeEN.tabMainTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[表主类型Id]不能为空(In 表主类型)!(clsTabMainTypeBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TabMainType_GetJSONStrByObj(pobjTabMainTypeEN: clsTabMainTypeEN): string {
  pobjTabMainTypeEN.sfUpdFldSetStr = pobjTabMainTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjTabMainTypeEN);
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
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function TabMainType_GetObjLstByJSONStr(strJSON: string): Array<clsTabMainTypeEN> {
  let arrTabMainTypeObjLst = new Array<clsTabMainTypeEN>();
  if (strJSON === '') {
    return arrTabMainTypeObjLst;
  }
  try {
    arrTabMainTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrTabMainTypeObjLst;
  }
  return arrTabMainTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrTabMainTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function TabMainType_GetObjLstByJSONObjLst(
  arrTabMainTypeObjLstS: Array<clsTabMainTypeEN>,
): Array<clsTabMainTypeEN> {
  const arrTabMainTypeObjLst = new Array<clsTabMainTypeEN>();
  for (const objInFor of arrTabMainTypeObjLstS) {
    const obj1 = TabMainType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrTabMainTypeObjLst.push(obj1);
  }
  return arrTabMainTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TabMainType_GetObjByJSONStr(strJSON: string): clsTabMainTypeEN {
  let pobjTabMainTypeEN = new clsTabMainTypeEN();
  if (strJSON === '') {
    return pobjTabMainTypeEN;
  }
  try {
    pobjTabMainTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjTabMainTypeEN;
  }
  return pobjTabMainTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function TabMainType_GetCombineCondition(objTabMainTypeCond: clsTabMainTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objTabMainTypeCond.dicFldComparisonOp,
      clsTabMainTypeEN.con_TabMainTypeId,
    ) == true
  ) {
    const strComparisonOpTabMainTypeId: string =
      objTabMainTypeCond.dicFldComparisonOp[clsTabMainTypeEN.con_TabMainTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabMainTypeEN.con_TabMainTypeId,
      objTabMainTypeCond.tabMainTypeId,
      strComparisonOpTabMainTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabMainTypeCond.dicFldComparisonOp,
      clsTabMainTypeEN.con_TabMainTypeName,
    ) == true
  ) {
    const strComparisonOpTabMainTypeName: string =
      objTabMainTypeCond.dicFldComparisonOp[clsTabMainTypeEN.con_TabMainTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabMainTypeEN.con_TabMainTypeName,
      objTabMainTypeCond.tabMainTypeName,
      strComparisonOpTabMainTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabMainTypeCond.dicFldComparisonOp,
      clsTabMainTypeEN.con_TabMainTypeENName,
    ) == true
  ) {
    const strComparisonOpTabMainTypeENName: string =
      objTabMainTypeCond.dicFldComparisonOp[clsTabMainTypeEN.con_TabMainTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabMainTypeEN.con_TabMainTypeENName,
      objTabMainTypeCond.tabMainTypeENName,
      strComparisonOpTabMainTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabMainTypeCond.dicFldComparisonOp,
      clsTabMainTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objTabMainTypeCond.dicFldComparisonOp[clsTabMainTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabMainTypeEN.con_Memo,
      objTabMainTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objTabMainTypeENS:源对象
 * @param objTabMainTypeENT:目标对象
 */
export function TabMainType_GetObjFromJsonObj(
  objTabMainTypeENS: clsTabMainTypeEN,
): clsTabMainTypeEN {
  const objTabMainTypeENT: clsTabMainTypeEN = new clsTabMainTypeEN();
  ObjectAssign(objTabMainTypeENT, objTabMainTypeENS);
  return objTabMainTypeENT;
}
