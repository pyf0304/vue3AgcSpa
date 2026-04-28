/**
 * 类名:clsViewTabTypeWApi
 * 表名:ViewTabType(00050103)
 * 版本:2026.04.19(服务器:WIN-SRV103-116)
 * 日期:2026/04/29 01:25:30
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 界面表类型(ViewTabType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2026年04月29日.
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
import { clsViewTabTypeEN } from '@/ts/L0Entity/PrjInterface/clsViewTabTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const viewTabType_Controller = 'ViewTabTypeApi';
export const viewTabType_ConstructorName = 'viewTabType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strViewTabTypeId:关键字
 * @returns 对象
 **/
export async function ViewTabType_GetObjByViewTabTypeIdAsync(
  strViewTabTypeId: string,
): Promise<clsViewTabTypeEN | null> {
  const strThisFuncName = 'GetObjByViewTabTypeIdAsync';

  if (IsNullOrEmpty(strViewTabTypeId) == true) {
    const strMsg = Format(
      '参数:[strViewTabTypeId]不能为空!(In clsViewTabTypeWApi.GetObjByViewTabTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByViewTabTypeId';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewTabTypeId,
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
      const objViewTabType = ViewTabType_GetObjFromJsonObj(returnObj);
      return objViewTabType;
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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
 * @param strViewTabTypeId:所给的关键字
 * @returns 对象
 */
export async function ViewTabType_GetObjByViewTabTypeIdlocalStorage(strViewTabTypeId: string) {
  const strThisFuncName = 'GetObjByViewTabTypeIdlocalStorage';

  if (IsNullOrEmpty(strViewTabTypeId) == true) {
    const strMsg = Format(
      '参数:[strViewTabTypeId]不能为空!(In clsViewTabTypeWApi.GetObjByViewTabTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsViewTabTypeEN._CurrTabName, strViewTabTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objViewTabTypeCache: clsViewTabTypeEN = JSON.parse(strTempObj);
    return objViewTabTypeCache;
  }
  try {
    const objViewTabType = await ViewTabType_GetObjByViewTabTypeIdAsync(strViewTabTypeId);
    if (objViewTabType != null) {
      localStorage.setItem(strKey, JSON.stringify(objViewTabType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objViewTabType;
    }
    return objViewTabType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewTabTypeId,
      viewTabType_ConstructorName,
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
 * @param strViewTabTypeId:所给的关键字
 * @returns 对象
 */
export async function ViewTabType_GetObjByViewTabTypeIdCache(
  strViewTabTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByViewTabTypeIdCache';

  if (IsNullOrEmpty(strViewTabTypeId) == true) {
    const strMsg = Format(
      '参数:[strViewTabTypeId]不能为空!(In clsViewTabTypeWApi.GetObjByViewTabTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewTabTypeObjLstCache = await ViewTabType_GetObjLstCache();
  try {
    const arrViewTabTypeSel = arrViewTabTypeObjLstCache.filter(
      (x) => x.viewTabTypeId == strViewTabTypeId,
    );
    let objViewTabType: clsViewTabTypeEN;
    if (arrViewTabTypeSel.length > 0) {
      objViewTabType = arrViewTabTypeSel[0];
      return objViewTabType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objViewTabTypeConst = await ViewTabType_GetObjByViewTabTypeIdAsync(strViewTabTypeId);
        if (objViewTabTypeConst != null) {
          ViewTabType_ReFreshThisCache();
          return objViewTabTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewTabTypeId,
      viewTabType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objViewTabType:所给的对象
 * @returns 对象
 */
export async function ViewTabType_UpdateObjInLstCache(objViewTabType: clsViewTabTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrViewTabTypeObjLstCache = await ViewTabType_GetObjLstCache();
    const obj = arrViewTabTypeObjLstCache.find(
      (x) => x.viewTabTypeName == objViewTabType.viewTabTypeName,
    );
    if (obj != null) {
      objViewTabType.viewTabTypeId = obj.viewTabTypeId;
      ObjectAssign(obj, objViewTabType);
    } else {
      arrViewTabTypeObjLstCache.push(objViewTabType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      viewTabType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewTabType_SortFunDefa(a: clsViewTabTypeEN, b: clsViewTabTypeEN): number {
  return a.viewTabTypeId.localeCompare(b.viewTabTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewTabType_SortFunDefa2Fld(a: clsViewTabTypeEN, b: clsViewTabTypeEN): number {
  if (a.viewTabTypeName == b.viewTabTypeName)
    return a.viewTabTypeEnName.localeCompare(b.viewTabTypeEnName);
  else return a.viewTabTypeName.localeCompare(b.viewTabTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewTabType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewTabTypeEN.con_ViewTabTypeId:
        return (a: clsViewTabTypeEN, b: clsViewTabTypeEN) => {
          return a.viewTabTypeId.localeCompare(b.viewTabTypeId);
        };
      case clsViewTabTypeEN.con_ViewTabTypeName:
        return (a: clsViewTabTypeEN, b: clsViewTabTypeEN) => {
          return a.viewTabTypeName.localeCompare(b.viewTabTypeName);
        };
      case clsViewTabTypeEN.con_ViewTabTypeEnName:
        return (a: clsViewTabTypeEN, b: clsViewTabTypeEN) => {
          return a.viewTabTypeEnName.localeCompare(b.viewTabTypeEnName);
        };
      case clsViewTabTypeEN.con_TabTypeFunction:
        return (a: clsViewTabTypeEN, b: clsViewTabTypeEN) => {
          if (a.tabTypeFunction == null) return -1;
          if (b.tabTypeFunction == null) return 1;
          return a.tabTypeFunction.localeCompare(b.tabTypeFunction);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewTabType]中不存在!(in ${viewTabType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewTabTypeEN.con_ViewTabTypeId:
        return (a: clsViewTabTypeEN, b: clsViewTabTypeEN) => {
          return b.viewTabTypeId.localeCompare(a.viewTabTypeId);
        };
      case clsViewTabTypeEN.con_ViewTabTypeName:
        return (a: clsViewTabTypeEN, b: clsViewTabTypeEN) => {
          return b.viewTabTypeName.localeCompare(a.viewTabTypeName);
        };
      case clsViewTabTypeEN.con_ViewTabTypeEnName:
        return (a: clsViewTabTypeEN, b: clsViewTabTypeEN) => {
          return b.viewTabTypeEnName.localeCompare(a.viewTabTypeEnName);
        };
      case clsViewTabTypeEN.con_TabTypeFunction:
        return (a: clsViewTabTypeEN, b: clsViewTabTypeEN) => {
          if (b.tabTypeFunction == null) return -1;
          if (a.tabTypeFunction == null) return 1;
          return b.tabTypeFunction.localeCompare(a.tabTypeFunction);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewTabType]中不存在!(in ${viewTabType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strViewTabTypeId:所给的关键字
 * @returns 对象
 */
export async function ViewTabType_GetNameByViewTabTypeIdCache(strViewTabTypeId: string) {
  if (IsNullOrEmpty(strViewTabTypeId) == true) {
    const strMsg = Format(
      '参数:[strViewTabTypeId]不能为空!(In clsViewTabTypeWApi.GetNameByViewTabTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewTabTypeObjLstCache = await ViewTabType_GetObjLstCache();
  if (arrViewTabTypeObjLstCache == null) return '';
  try {
    const arrViewTabTypeSel = arrViewTabTypeObjLstCache.filter(
      (x) => x.viewTabTypeId == strViewTabTypeId,
    );
    let objViewTabType: clsViewTabTypeEN;
    if (arrViewTabTypeSel.length > 0) {
      objViewTabType = arrViewTabTypeSel[0];
      return objViewTabType.viewTabTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strViewTabTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2026-04-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ViewTabType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewTabTypeEN.con_ViewTabTypeId:
      return (obj: clsViewTabTypeEN) => {
        return obj.viewTabTypeId === value;
      };
    case clsViewTabTypeEN.con_ViewTabTypeName:
      return (obj: clsViewTabTypeEN) => {
        return obj.viewTabTypeName === value;
      };
    case clsViewTabTypeEN.con_ViewTabTypeEnName:
      return (obj: clsViewTabTypeEN) => {
        return obj.viewTabTypeEnName === value;
      };
    case clsViewTabTypeEN.con_TabTypeFunction:
      return (obj: clsViewTabTypeEN) => {
        return obj.tabTypeFunction === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewTabType]中不存在!(in ${viewTabType_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-04-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function ViewTabType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsViewTabTypeEN.con_ViewTabTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsViewTabTypeEN._AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsViewTabTypeEN._AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strViewTabTypeId = strInValue;
  if (IsNullOrEmpty(strViewTabTypeId) == true) {
    return '';
  }
  const objViewTabType = await ViewTabType_GetObjByViewTabTypeIdCache(strViewTabTypeId);
  if (objViewTabType == null) return '';
  if (objViewTabType.GetFldValue(strOutFldName) == null) return '';
  return objViewTabType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-04-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function ViewTabType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsViewTabTypeEN.con_ViewTabTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrViewTabType = await ViewTabType_GetObjLstCache();
  if (arrViewTabType == null) return [];
  let arrViewTabTypeSel = arrViewTabType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrViewTabTypeSel = arrViewTabTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrViewTabTypeSel = arrViewTabTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrViewTabTypeSel = arrViewTabTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrViewTabTypeSel = arrViewTabTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrViewTabTypeSel = arrViewTabTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrViewTabTypeSel = arrViewTabTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrViewTabTypeSel = arrViewTabTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrViewTabTypeSel = arrViewTabTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrViewTabTypeSel = arrViewTabTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrViewTabTypeSel = arrViewTabTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrViewTabTypeSel.length == 0) return [];
  return arrViewTabTypeSel.map((x) => x.viewTabTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewTabType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
export async function ViewTabType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
export async function ViewTabType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
export async function ViewTabType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewTabTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

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
      const objViewTabType = ViewTabType_GetObjFromJsonObj(returnObj);
      return objViewTabType;
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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
export async function ViewTabType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewTabTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsViewTabTypeEN._WhereFormat) == false) {
    strWhereCond = clsViewTabTypeEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsViewTabTypeEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewTabTypeEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrViewTabTypeExObjLstCache: Array<clsViewTabTypeEN> = CacheHelper.Get(strKey);
    const arrViewTabTypeObjLstT = ViewTabType_GetObjLstByJSONObjLst(arrViewTabTypeExObjLstCache);
    return arrViewTabTypeObjLstT;
  }
  try {
    const arrViewTabTypeExObjLst = await ViewTabType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrViewTabTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewTabTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrViewTabTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewTabType_ConstructorName,
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
export async function ViewTabType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewTabTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsViewTabTypeEN._WhereFormat) == false) {
    strWhereCond = clsViewTabTypeEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsViewTabTypeEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewTabTypeEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewTabTypeExObjLstCache: Array<clsViewTabTypeEN> = JSON.parse(strTempObjLst);
    const arrViewTabTypeObjLstT = ViewTabType_GetObjLstByJSONObjLst(arrViewTabTypeExObjLstCache);
    return arrViewTabTypeObjLstT;
  }
  try {
    const arrViewTabTypeExObjLst = await ViewTabType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrViewTabTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewTabTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrViewTabTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewTabType_ConstructorName,
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
export async function ViewTabType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsViewTabTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewTabTypeObjLstCache: Array<clsViewTabTypeEN> = JSON.parse(strTempObjLst);
    return arrViewTabTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ViewTabType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewTabTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

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
          viewTabType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewTabType_GetObjLstByJSONObjLst(returnObjLst);
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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
export async function ViewTabType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewTabTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsViewTabTypeEN._WhereFormat) == false) {
    strWhereCond = clsViewTabTypeEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsViewTabTypeEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewTabTypeEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewTabTypeExObjLstCache: Array<clsViewTabTypeEN> = JSON.parse(strTempObjLst);
    const arrViewTabTypeObjLstT = ViewTabType_GetObjLstByJSONObjLst(arrViewTabTypeExObjLstCache);
    return arrViewTabTypeObjLstT;
  }
  try {
    const arrViewTabTypeExObjLst = await ViewTabType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrViewTabTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewTabTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrViewTabTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewTabType_ConstructorName,
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
export async function ViewTabType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsViewTabTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewTabTypeObjLstCache: Array<clsViewTabTypeEN> = JSON.parse(strTempObjLst);
    return arrViewTabTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewTabType_GetObjLstCache(): Promise<Array<clsViewTabTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrViewTabTypeObjLstCache;
  switch (clsViewTabTypeEN._CacheModeId) {
    case '04': //sessionStorage
      arrViewTabTypeObjLstCache = await ViewTabType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrViewTabTypeObjLstCache = await ViewTabType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrViewTabTypeObjLstCache = await ViewTabType_GetObjLstClientCache();
      break;
    default:
      arrViewTabTypeObjLstCache = await ViewTabType_GetObjLstClientCache();
      break;
  }
  return arrViewTabTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewTabType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrViewTabTypeObjLstCache;
  switch (clsViewTabTypeEN._CacheModeId) {
    case '04': //sessionStorage
      arrViewTabTypeObjLstCache = await ViewTabType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrViewTabTypeObjLstCache = await ViewTabType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrViewTabTypeObjLstCache = null;
      break;
    default:
      arrViewTabTypeObjLstCache = null;
      break;
  }
  return arrViewTabTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrViewTabTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewTabType_GetSubObjLstCache(objViewTabTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrViewTabTypeObjLstCache = await ViewTabType_GetObjLstCache();
  let arrViewTabTypeSel = arrViewTabTypeObjLstCache;
  if (objViewTabTypeCond.GetConditions().length == 0) return arrViewTabTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objViewTabTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrViewTabTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewTabTypeCond),
      viewTabType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewTabTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewTabTypeId:关键字列表
 * @returns 对象列表
 **/
export async function ViewTabType_GetObjLstByViewTabTypeIdLstAsync(
  arrViewTabTypeId: Array<string>,
): Promise<Array<clsViewTabTypeEN>> {
  const strThisFuncName = 'GetObjLstByViewTabTypeIdLstAsync';
  const strAction = 'GetObjLstByViewTabTypeIdLst';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewTabTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          viewTabType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewTabType_GetObjLstByJSONObjLst(returnObjLst);
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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
 * @param arrstrViewTabTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function ViewTabType_GetObjLstByViewTabTypeIdLstCache(
  arrViewTabTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByViewTabTypeIdLstCache';
  try {
    const arrViewTabTypeObjLstCache = await ViewTabType_GetObjLstCache();
    const arrViewTabTypeSel = arrViewTabTypeObjLstCache.filter(
      (x) => arrViewTabTypeIdLst.indexOf(x.viewTabTypeId) > -1,
    );
    return arrViewTabTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewTabTypeIdLst.join(','),
      viewTabType_ConstructorName,
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
export async function ViewTabType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewTabTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

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
          viewTabType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewTabType_GetObjLstByJSONObjLst(returnObjLst);
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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
export async function ViewTabType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewTabTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

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
          viewTabType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewTabType_GetObjLstByJSONObjLst(returnObjLst);
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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
 * @param strViewTabTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function ViewTabType_DelRecordAsync(strViewTabTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(viewTabType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strViewTabTypeId);

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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
 * @param arrViewTabTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ViewTabType_DelViewTabTypesAsync(
  arrViewTabTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelViewTabTypesAsync';
  const strAction = 'DelViewTabTypes';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewTabTypeId, config);
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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
export async function ViewTabType_DelViewTabTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelViewTabTypesByCondAsync';
  const strAction = 'DelViewTabTypesByCond';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
 * @param objViewTabTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewTabType_AddNewRecordAsync(
  objViewTabTypeEN: clsViewTabTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objViewTabTypeEN);
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewTabTypeEN, config);
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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
 * @param objViewTabTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewTabType_AddNewRecordWithMaxIdAsync(
  objViewTabTypeEN: clsViewTabTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewTabTypeEN, config);
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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
export async function ViewTabType_AddNewObjSave(
  objViewTabTypeEN: clsViewTabTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    ViewTabType_CheckPropertyNew(objViewTabTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewTabType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ViewTabType_CheckUniCond4Add(objViewTabTypeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await ViewTabType_AddNewRecordWithMaxIdAsync(objViewTabTypeEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      ViewTabType_ReFreshCache();
    } else {
      const strInfo = `添加[界面表类型(ViewTabType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${viewTabType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function ViewTabType_CheckUniCond4Add(
  objViewTabTypeEN: clsViewTabTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = ViewTabType_GetUniCondStr(objViewTabTypeEN);
  const bolIsExistCondition = await ViewTabType_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Update)
 **/
export async function ViewTabType_CheckUniCond4Update(
  objViewTabTypeEN: clsViewTabTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = ViewTabType_GetUniCondStr4Update(objViewTabTypeEN);
  const bolIsExistCondition = await ViewTabType_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function ViewTabType_UpdateObjSave(
  objViewTabTypeEN: clsViewTabTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objViewTabTypeEN.sfUpdFldSetStr = objViewTabTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objViewTabTypeEN.viewTabTypeId == '' || objViewTabTypeEN.viewTabTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    ViewTabType_CheckProperty4Update(objViewTabTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewTabType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ViewTabType_CheckUniCond4Update(objViewTabTypeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await ViewTabType_UpdateRecordAsync(objViewTabTypeEN);
    if (returnBool == true) {
      ViewTabType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${viewTabType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objViewTabTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewTabType_AddNewRecordWithReturnKeyAsync(
  objViewTabTypeEN: clsViewTabTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewTabTypeEN, config);
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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
 * @param objViewTabTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewTabType_UpdateRecordAsync(
  objViewTabTypeEN: clsViewTabTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewTabTypeEN.sfUpdFldSetStr === undefined ||
    objViewTabTypeEN.sfUpdFldSetStr === null ||
    objViewTabTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewTabTypeEN.viewTabTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewTabTypeEN, config);
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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
 * @param objViewTabTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewTabType_EditRecordExAsync(
  objViewTabTypeEN: clsViewTabTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objViewTabTypeEN.sfUpdFldSetStr === undefined ||
    objViewTabTypeEN.sfUpdFldSetStr === null ||
    objViewTabTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewTabTypeEN.viewTabTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewTabTypeEN, config);
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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
 * @param objViewTabTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewTabType_UpdateWithConditionAsync(
  objViewTabTypeEN: clsViewTabTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewTabTypeEN.sfUpdFldSetStr === undefined ||
    objViewTabTypeEN.sfUpdFldSetStr === null ||
    objViewTabTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewTabTypeEN.viewTabTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);
  objViewTabTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewTabTypeEN, config);
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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
 * @param objstrViewTabTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewTabType_IsExistRecordCache(objViewTabTypeCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrViewTabTypeObjLstCache = await ViewTabType_GetObjLstCache();
  if (arrViewTabTypeObjLstCache == null) return false;
  let arrViewTabTypeSel = arrViewTabTypeObjLstCache;
  if (objViewTabTypeCond.GetConditions().length == 0)
    return arrViewTabTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objViewTabTypeCond.GetConditions()) {
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
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewTabTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objViewTabTypeCond),
      viewTabType_ConstructorName,
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
export async function ViewTabType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
 * @param strViewTabTypeId:所给的关键字
 * @returns 对象
 */
export async function ViewTabType_IsExistCache(strViewTabTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrViewTabTypeObjLstCache = await ViewTabType_GetObjLstCache();
  if (arrViewTabTypeObjLstCache == null) return false;
  try {
    const arrViewTabTypeSel = arrViewTabTypeObjLstCache.filter(
      (x) => x.viewTabTypeId == strViewTabTypeId,
    );
    if (arrViewTabTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strViewTabTypeId,
      viewTabType_ConstructorName,
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
 * @param strViewTabTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ViewTabType_IsExistAsync(strViewTabTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewTabTypeId,
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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
export async function ViewTabType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
 * @param objViewTabTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function ViewTabType_GetRecCountByCondCache(objViewTabTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrViewTabTypeObjLstCache = await ViewTabType_GetObjLstCache();
  if (arrViewTabTypeObjLstCache == null) return 0;
  let arrViewTabTypeSel = arrViewTabTypeObjLstCache;
  if (objViewTabTypeCond.GetConditions().length == 0) return arrViewTabTypeSel.length;
  try {
    for (const objCondition of objViewTabTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewTabTypeSel = arrViewTabTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewTabTypeSel = arrViewTabTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrViewTabTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewTabTypeCond),
      viewTabType_ConstructorName,
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
export async function ViewTabType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
export async function ViewTabType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewTabType_Controller, strAction);

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
        viewTabType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTabType_ConstructorName,
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
export function ViewTabType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewTabType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsViewTabTypeEN._CurrTabName;
  switch (clsViewTabTypeEN._CacheModeId) {
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
  clsViewTabTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ViewTabType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsViewTabTypeEN._CurrTabName;
    switch (clsViewTabTypeEN._CacheModeId) {
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
    clsViewTabTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function ViewTabType_GetLastRefreshTime(): string {
  if (clsViewTabTypeEN._RefreshTimeLst.length == 0) return '';
  return clsViewTabTypeEN._RefreshTimeLst[clsViewTabTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function ViewTabType_BindDdl_ViewTabTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ViewTabTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ViewTabTypeIdInDivCache");
  const arrObjLstSel = await ViewTabType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsViewTabTypeEN.con_ViewTabTypeId,
    clsViewTabTypeEN.con_ViewTabTypeName,
    '界面表类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function ViewTabType_GetArrViewTabType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ViewTabTypeIdInDivCache");
  const arrViewTabType = new Array<clsViewTabTypeEN>();
  const arrObjLstSel = await ViewTabType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsViewTabTypeEN();
  obj0.viewTabTypeId = '0';
  obj0.viewTabTypeName = '选界面表类型...';
  arrViewTabType.push(obj0);
  arrObjLstSel.forEach((x) => arrViewTabType.push(x));
  return arrViewTabType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewTabType_CheckPropertyNew(pobjViewTabTypeEN: clsViewTabTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjViewTabTypeEN.viewTabTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[界面表类型名]不能为空(In 界面表类型)!(clsViewTabTypeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjViewTabTypeEN.viewTabTypeEnName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[界面表类型英文名]不能为空(In 界面表类型)!(clsViewTabTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.viewTabTypeId) == false &&
    GetStrLen(pobjViewTabTypeEN.viewTabTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面表类型码(viewTabTypeId)]的长度不能超过4(In 界面表类型(ViewTabType))!值:${pobjViewTabTypeEN.viewTabTypeId}(clsViewTabTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.viewTabTypeName) == false &&
    GetStrLen(pobjViewTabTypeEN.viewTabTypeName) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面表类型名(viewTabTypeName)]的长度不能超过20(In 界面表类型(ViewTabType))!值:${pobjViewTabTypeEN.viewTabTypeName}(clsViewTabTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.viewTabTypeEnName) == false &&
    GetStrLen(pobjViewTabTypeEN.viewTabTypeEnName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面表类型英文名(viewTabTypeEnName)]的长度不能超过100(In 界面表类型(ViewTabType))!值:${pobjViewTabTypeEN.viewTabTypeEnName}(clsViewTabTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.tabTypeFunction) == false &&
    GetStrLen(pobjViewTabTypeEN.tabTypeFunction) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表类型功能(tabTypeFunction)]的长度不能超过500(In 界面表类型(ViewTabType))!值:${pobjViewTabTypeEN.tabTypeFunction}(clsViewTabTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.viewTabTypeId) == false &&
    undefined !== pobjViewTabTypeEN.viewTabTypeId &&
    tzDataType.isString(pobjViewTabTypeEN.viewTabTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面表类型码(viewTabTypeId)]的值:[${pobjViewTabTypeEN.viewTabTypeId}], 非法,应该为字符型(In 界面表类型(ViewTabType))!(clsViewTabTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.viewTabTypeName) == false &&
    undefined !== pobjViewTabTypeEN.viewTabTypeName &&
    tzDataType.isString(pobjViewTabTypeEN.viewTabTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面表类型名(viewTabTypeName)]的值:[${pobjViewTabTypeEN.viewTabTypeName}], 非法,应该为字符型(In 界面表类型(ViewTabType))!(clsViewTabTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.viewTabTypeEnName) == false &&
    undefined !== pobjViewTabTypeEN.viewTabTypeEnName &&
    tzDataType.isString(pobjViewTabTypeEN.viewTabTypeEnName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面表类型英文名(viewTabTypeEnName)]的值:[${pobjViewTabTypeEN.viewTabTypeEnName}], 非法,应该为字符型(In 界面表类型(ViewTabType))!(clsViewTabTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.tabTypeFunction) == false &&
    undefined !== pobjViewTabTypeEN.tabTypeFunction &&
    tzDataType.isString(pobjViewTabTypeEN.tabTypeFunction) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表类型功能(tabTypeFunction)]的值:[${pobjViewTabTypeEN.tabTypeFunction}], 非法,应该为字符型(In 界面表类型(ViewTabType))!(clsViewTabTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewTabType_CheckProperty4Update(pobjViewTabTypeEN: clsViewTabTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.viewTabTypeId) == false &&
    GetStrLen(pobjViewTabTypeEN.viewTabTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面表类型码(viewTabTypeId)]的长度不能超过4(In 界面表类型(ViewTabType))!值:${pobjViewTabTypeEN.viewTabTypeId}(clsViewTabTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.viewTabTypeName) == false &&
    GetStrLen(pobjViewTabTypeEN.viewTabTypeName) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面表类型名(viewTabTypeName)]的长度不能超过20(In 界面表类型(ViewTabType))!值:${pobjViewTabTypeEN.viewTabTypeName}(clsViewTabTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.viewTabTypeEnName) == false &&
    GetStrLen(pobjViewTabTypeEN.viewTabTypeEnName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面表类型英文名(viewTabTypeEnName)]的长度不能超过100(In 界面表类型(ViewTabType))!值:${pobjViewTabTypeEN.viewTabTypeEnName}(clsViewTabTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.tabTypeFunction) == false &&
    GetStrLen(pobjViewTabTypeEN.tabTypeFunction) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表类型功能(tabTypeFunction)]的长度不能超过500(In 界面表类型(ViewTabType))!值:${pobjViewTabTypeEN.tabTypeFunction}(clsViewTabTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.viewTabTypeId) == false &&
    undefined !== pobjViewTabTypeEN.viewTabTypeId &&
    tzDataType.isString(pobjViewTabTypeEN.viewTabTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面表类型码(viewTabTypeId)]的值:[${pobjViewTabTypeEN.viewTabTypeId}], 非法,应该为字符型(In 界面表类型(ViewTabType))!(clsViewTabTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.viewTabTypeName) == false &&
    undefined !== pobjViewTabTypeEN.viewTabTypeName &&
    tzDataType.isString(pobjViewTabTypeEN.viewTabTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面表类型名(viewTabTypeName)]的值:[${pobjViewTabTypeEN.viewTabTypeName}], 非法,应该为字符型(In 界面表类型(ViewTabType))!(clsViewTabTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.viewTabTypeEnName) == false &&
    undefined !== pobjViewTabTypeEN.viewTabTypeEnName &&
    tzDataType.isString(pobjViewTabTypeEN.viewTabTypeEnName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面表类型英文名(viewTabTypeEnName)]的值:[${pobjViewTabTypeEN.viewTabTypeEnName}], 非法,应该为字符型(In 界面表类型(ViewTabType))!(clsViewTabTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewTabTypeEN.tabTypeFunction) == false &&
    undefined !== pobjViewTabTypeEN.tabTypeFunction &&
    tzDataType.isString(pobjViewTabTypeEN.tabTypeFunction) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表类型功能(tabTypeFunction)]的值:[${pobjViewTabTypeEN.tabTypeFunction}], 非法,应该为字符型(In 界面表类型(ViewTabType))!(clsViewTabTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2026-04-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewTabType_GetJSONStrByObj(pobjViewTabTypeEN: clsViewTabTypeEN): string {
  pobjViewTabTypeEN.sfUpdFldSetStr = pobjViewTabTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewTabTypeEN);
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
 * 日期:2026-04-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function ViewTabType_GetObjLstByJSONStr(strJSON: string): Array<clsViewTabTypeEN> {
  let arrViewTabTypeObjLst = new Array<clsViewTabTypeEN>();
  if (strJSON === '') {
    return arrViewTabTypeObjLst;
  }
  try {
    arrViewTabTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewTabTypeObjLst;
  }
  return arrViewTabTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-04-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewTabTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewTabType_GetObjLstByJSONObjLst(
  arrViewTabTypeObjLstS: Array<clsViewTabTypeEN>,
): Array<clsViewTabTypeEN> {
  const arrViewTabTypeObjLst = new Array<clsViewTabTypeEN>();
  for (const objInFor of arrViewTabTypeObjLstS) {
    const obj1 = ViewTabType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewTabTypeObjLst.push(obj1);
  }
  return arrViewTabTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-04-29
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewTabType_GetObjByJSONStr(strJSON: string): clsViewTabTypeEN {
  let pobjViewTabTypeEN = new clsViewTabTypeEN();
  if (strJSON === '') {
    return pobjViewTabTypeEN;
  }
  try {
    pobjViewTabTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewTabTypeEN;
  }
  return pobjViewTabTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewTabType_GetCombineCondition(objViewTabTypeCond: clsViewTabTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTabTypeCond.dicFldComparisonOp,
      clsViewTabTypeEN.con_ViewTabTypeId,
    ) == true
  ) {
    const strComparisonOpViewTabTypeId: string =
      objViewTabTypeCond.dicFldComparisonOp[clsViewTabTypeEN.con_ViewTabTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewTabTypeEN.con_ViewTabTypeId,
      objViewTabTypeCond.viewTabTypeId,
      strComparisonOpViewTabTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTabTypeCond.dicFldComparisonOp,
      clsViewTabTypeEN.con_ViewTabTypeName,
    ) == true
  ) {
    const strComparisonOpViewTabTypeName: string =
      objViewTabTypeCond.dicFldComparisonOp[clsViewTabTypeEN.con_ViewTabTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewTabTypeEN.con_ViewTabTypeName,
      objViewTabTypeCond.viewTabTypeName,
      strComparisonOpViewTabTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTabTypeCond.dicFldComparisonOp,
      clsViewTabTypeEN.con_ViewTabTypeEnName,
    ) == true
  ) {
    const strComparisonOpViewTabTypeEnName: string =
      objViewTabTypeCond.dicFldComparisonOp[clsViewTabTypeEN.con_ViewTabTypeEnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewTabTypeEN.con_ViewTabTypeEnName,
      objViewTabTypeCond.viewTabTypeEnName,
      strComparisonOpViewTabTypeEnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTabTypeCond.dicFldComparisonOp,
      clsViewTabTypeEN.con_TabTypeFunction,
    ) == true
  ) {
    const strComparisonOpTabTypeFunction: string =
      objViewTabTypeCond.dicFldComparisonOp[clsViewTabTypeEN.con_TabTypeFunction];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewTabTypeEN.con_TabTypeFunction,
      objViewTabTypeCond.tabTypeFunction,
      strComparisonOpTabTypeFunction,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewTabType(界面表类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strViewTabTypeName: 界面表类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewTabType_GetUniCondStr(objViewTabTypeEN: clsViewTabTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewTabTypeName = '{0}'", objViewTabTypeEN.viewTabTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewTabType(界面表类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strViewTabTypeName: 界面表类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewTabType_GetUniCondStr4Update(objViewTabTypeEN: clsViewTabTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewTabTypeId <> '{0}'", objViewTabTypeEN.viewTabTypeId);
  strWhereCond += Format(" and ViewTabTypeName = '{0}'", objViewTabTypeEN.viewTabTypeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewTabTypeENS:源对象
 * @param objViewTabTypeENT:目标对象
 */
export function ViewTabType_GetObjFromJsonObj(
  objViewTabTypeENS: clsViewTabTypeEN,
): clsViewTabTypeEN {
  const objViewTabTypeENT: clsViewTabTypeEN = new clsViewTabTypeEN();
  ObjectAssign(objViewTabTypeENT, objViewTabTypeENS);
  return objViewTabTypeENT;
}
