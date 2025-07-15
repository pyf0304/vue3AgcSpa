/**
 * 类名:clsAppPageTypeWApi
 * 表名:AppPageType(00050382)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:25
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
 * App页面类型(AppPageType)
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
import { clsAppPageTypeEN } from '@/ts/L0Entity/SysPara/clsAppPageTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const appPageType_Controller = 'AppPageTypeApi';
export const appPageType_ConstructorName = 'appPageType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strAppPageTypeId:关键字
 * @returns 对象
 **/
export async function AppPageType_GetObjByAppPageTypeIdAsync(
  strAppPageTypeId: string,
): Promise<clsAppPageTypeEN | null> {
  const strThisFuncName = 'GetObjByAppPageTypeIdAsync';

  if (IsNullOrEmpty(strAppPageTypeId) == true) {
    const strMsg = Format(
      '参数:[strAppPageTypeId]不能为空!(In clsAppPageTypeWApi.GetObjByAppPageTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strAppPageTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strAppPageTypeId]的长度:[{0}]不正确!(clsAppPageTypeWApi.GetObjByAppPageTypeIdAsync)',
      strAppPageTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByAppPageTypeId';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strAppPageTypeId,
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
      const objAppPageType = AppPageType_GetObjFromJsonObj(returnObj);
      return objAppPageType;
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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
 * @param strAppPageTypeId:所给的关键字
 * @returns 对象
 */
export async function AppPageType_GetObjByAppPageTypeIdCache(
  strAppPageTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByAppPageTypeIdCache';

  if (IsNullOrEmpty(strAppPageTypeId) == true) {
    const strMsg = Format(
      '参数:[strAppPageTypeId]不能为空!(In clsAppPageTypeWApi.GetObjByAppPageTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strAppPageTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strAppPageTypeId]的长度:[{0}]不正确!(clsAppPageTypeWApi.GetObjByAppPageTypeIdCache)',
      strAppPageTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrAppPageTypeObjLstCache = await AppPageType_GetObjLstCache();
  try {
    const arrAppPageTypeSel = arrAppPageTypeObjLstCache.filter(
      (x) => x.appPageTypeId == strAppPageTypeId,
    );
    let objAppPageType: clsAppPageTypeEN;
    if (arrAppPageTypeSel.length > 0) {
      objAppPageType = arrAppPageTypeSel[0];
      return objAppPageType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objAppPageTypeConst = await AppPageType_GetObjByAppPageTypeIdAsync(strAppPageTypeId);
        if (objAppPageTypeConst != null) {
          AppPageType_ReFreshThisCache();
          return objAppPageTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strAppPageTypeId,
      appPageType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strAppPageTypeId:所给的关键字
 * @returns 对象
 */
export async function AppPageType_GetObjByAppPageTypeIdlocalStorage(strAppPageTypeId: string) {
  const strThisFuncName = 'GetObjByAppPageTypeIdlocalStorage';

  if (IsNullOrEmpty(strAppPageTypeId) == true) {
    const strMsg = Format(
      '参数:[strAppPageTypeId]不能为空!(In clsAppPageTypeWApi.GetObjByAppPageTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strAppPageTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strAppPageTypeId]的长度:[{0}]不正确!(clsAppPageTypeWApi.GetObjByAppPageTypeIdlocalStorage)',
      strAppPageTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsAppPageTypeEN._CurrTabName, strAppPageTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objAppPageTypeCache: clsAppPageTypeEN = JSON.parse(strTempObj);
    return objAppPageTypeCache;
  }
  try {
    const objAppPageType = await AppPageType_GetObjByAppPageTypeIdAsync(strAppPageTypeId);
    if (objAppPageType != null) {
      localStorage.setItem(strKey, JSON.stringify(objAppPageType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objAppPageType;
    }
    return objAppPageType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strAppPageTypeId,
      appPageType_ConstructorName,
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
 * @param objAppPageType:所给的对象
 * @returns 对象
 */
export async function AppPageType_UpdateObjInLstCache(objAppPageType: clsAppPageTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrAppPageTypeObjLstCache = await AppPageType_GetObjLstCache();
    const obj = arrAppPageTypeObjLstCache.find(
      (x) => x.appPageTypeName == objAppPageType.appPageTypeName,
    );
    if (obj != null) {
      objAppPageType.appPageTypeId = obj.appPageTypeId;
      ObjectAssign(obj, objAppPageType);
    } else {
      arrAppPageTypeObjLstCache.push(objAppPageType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      appPageType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strAppPageTypeId:所给的关键字
 * @returns 对象
 */
export async function AppPageType_GetNameByAppPageTypeIdCache(strAppPageTypeId: string) {
  if (IsNullOrEmpty(strAppPageTypeId) == true) {
    const strMsg = Format(
      '参数:[strAppPageTypeId]不能为空!(In clsAppPageTypeWApi.GetNameByAppPageTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strAppPageTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strAppPageTypeId]的长度:[{0}]不正确!(clsAppPageTypeWApi.GetNameByAppPageTypeIdCache)',
      strAppPageTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrAppPageTypeObjLstCache = await AppPageType_GetObjLstCache();
  if (arrAppPageTypeObjLstCache == null) return '';
  try {
    const arrAppPageTypeSel = arrAppPageTypeObjLstCache.filter(
      (x) => x.appPageTypeId == strAppPageTypeId,
    );
    let objAppPageType: clsAppPageTypeEN;
    if (arrAppPageTypeSel.length > 0) {
      objAppPageType = arrAppPageTypeSel[0];
      return objAppPageType.appPageTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strAppPageTypeId,
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
export async function AppPageType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsAppPageTypeEN.con_AppPageTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsAppPageTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsAppPageTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strAppPageTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objAppPageType = await AppPageType_GetObjByAppPageTypeIdCache(strAppPageTypeId);
  if (objAppPageType == null) return '';
  if (objAppPageType.GetFldValue(strOutFldName) == null) return '';
  return objAppPageType.GetFldValue(strOutFldName).toString();
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
export function AppPageType_SortFunDefa(a: clsAppPageTypeEN, b: clsAppPageTypeEN): number {
  return a.appPageTypeId.localeCompare(b.appPageTypeId);
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
export function AppPageType_SortFunDefa2Fld(a: clsAppPageTypeEN, b: clsAppPageTypeEN): number {
  if (a.appPageTypeName == b.appPageTypeName)
    return a.appPageTypeENName.localeCompare(b.appPageTypeENName);
  else return a.appPageTypeName.localeCompare(b.appPageTypeName);
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
export function AppPageType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsAppPageTypeEN.con_AppPageTypeId:
        return (a: clsAppPageTypeEN, b: clsAppPageTypeEN) => {
          return a.appPageTypeId.localeCompare(b.appPageTypeId);
        };
      case clsAppPageTypeEN.con_AppPageTypeName:
        return (a: clsAppPageTypeEN, b: clsAppPageTypeEN) => {
          return a.appPageTypeName.localeCompare(b.appPageTypeName);
        };
      case clsAppPageTypeEN.con_AppPageTypeENName:
        return (a: clsAppPageTypeEN, b: clsAppPageTypeEN) => {
          return a.appPageTypeENName.localeCompare(b.appPageTypeENName);
        };
      case clsAppPageTypeEN.con_UpdDate:
        return (a: clsAppPageTypeEN, b: clsAppPageTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsAppPageTypeEN.con_UpdUser:
        return (a: clsAppPageTypeEN, b: clsAppPageTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsAppPageTypeEN.con_Memo:
        return (a: clsAppPageTypeEN, b: clsAppPageTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[AppPageType]中不存在!(in ${appPageType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsAppPageTypeEN.con_AppPageTypeId:
        return (a: clsAppPageTypeEN, b: clsAppPageTypeEN) => {
          return b.appPageTypeId.localeCompare(a.appPageTypeId);
        };
      case clsAppPageTypeEN.con_AppPageTypeName:
        return (a: clsAppPageTypeEN, b: clsAppPageTypeEN) => {
          return b.appPageTypeName.localeCompare(a.appPageTypeName);
        };
      case clsAppPageTypeEN.con_AppPageTypeENName:
        return (a: clsAppPageTypeEN, b: clsAppPageTypeEN) => {
          return b.appPageTypeENName.localeCompare(a.appPageTypeENName);
        };
      case clsAppPageTypeEN.con_UpdDate:
        return (a: clsAppPageTypeEN, b: clsAppPageTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsAppPageTypeEN.con_UpdUser:
        return (a: clsAppPageTypeEN, b: clsAppPageTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsAppPageTypeEN.con_Memo:
        return (a: clsAppPageTypeEN, b: clsAppPageTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[AppPageType]中不存在!(in ${appPageType_ConstructorName}.${strThisFuncName})`;
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
export async function AppPageType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsAppPageTypeEN.con_AppPageTypeId:
      return (obj: clsAppPageTypeEN) => {
        return obj.appPageTypeId === value;
      };
    case clsAppPageTypeEN.con_AppPageTypeName:
      return (obj: clsAppPageTypeEN) => {
        return obj.appPageTypeName === value;
      };
    case clsAppPageTypeEN.con_AppPageTypeENName:
      return (obj: clsAppPageTypeEN) => {
        return obj.appPageTypeENName === value;
      };
    case clsAppPageTypeEN.con_UpdDate:
      return (obj: clsAppPageTypeEN) => {
        return obj.updDate === value;
      };
    case clsAppPageTypeEN.con_UpdUser:
      return (obj: clsAppPageTypeEN) => {
        return obj.updUser === value;
      };
    case clsAppPageTypeEN.con_Memo:
      return (obj: clsAppPageTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[AppPageType]中不存在!(in ${appPageType_ConstructorName}.${strThisFuncName})`;
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
export async function AppPageType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsAppPageTypeEN.con_AppPageTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrAppPageType = await AppPageType_GetObjLstCache();
  if (arrAppPageType == null) return [];
  let arrAppPageTypeSel = arrAppPageType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrAppPageTypeSel = arrAppPageTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrAppPageTypeSel = arrAppPageTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrAppPageTypeSel = arrAppPageTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrAppPageTypeSel = arrAppPageTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrAppPageTypeSel = arrAppPageTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrAppPageTypeSel = arrAppPageTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrAppPageTypeSel = arrAppPageTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrAppPageTypeSel = arrAppPageTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrAppPageTypeSel = arrAppPageTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrAppPageTypeSel = arrAppPageTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrAppPageTypeSel.length == 0) return [];
  return arrAppPageTypeSel.map((x) => x.appPageTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function AppPageType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
export async function AppPageType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
export async function AppPageType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsAppPageTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

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
      const objAppPageType = AppPageType_GetObjFromJsonObj(returnObj);
      return objAppPageType;
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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
export async function AppPageType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsAppPageTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsAppPageTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsAppPageTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrAppPageTypeExObjLstCache: Array<clsAppPageTypeEN> = CacheHelper.Get(strKey);
    const arrAppPageTypeObjLstT = AppPageType_GetObjLstByJSONObjLst(arrAppPageTypeExObjLstCache);
    return arrAppPageTypeObjLstT;
  }
  try {
    const arrAppPageTypeExObjLst = await AppPageType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrAppPageTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrAppPageTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrAppPageTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      appPageType_ConstructorName,
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
export async function AppPageType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsAppPageTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsAppPageTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsAppPageTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrAppPageTypeExObjLstCache: Array<clsAppPageTypeEN> = JSON.parse(strTempObjLst);
    const arrAppPageTypeObjLstT = AppPageType_GetObjLstByJSONObjLst(arrAppPageTypeExObjLstCache);
    return arrAppPageTypeObjLstT;
  }
  try {
    const arrAppPageTypeExObjLst = await AppPageType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrAppPageTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrAppPageTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrAppPageTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      appPageType_ConstructorName,
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
export async function AppPageType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsAppPageTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrAppPageTypeObjLstCache: Array<clsAppPageTypeEN> = JSON.parse(strTempObjLst);
    return arrAppPageTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function AppPageType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsAppPageTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

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
          appPageType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AppPageType_GetObjLstByJSONObjLst(returnObjLst);
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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
export async function AppPageType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsAppPageTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsAppPageTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsAppPageTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrAppPageTypeExObjLstCache: Array<clsAppPageTypeEN> = JSON.parse(strTempObjLst);
    const arrAppPageTypeObjLstT = AppPageType_GetObjLstByJSONObjLst(arrAppPageTypeExObjLstCache);
    return arrAppPageTypeObjLstT;
  }
  try {
    const arrAppPageTypeExObjLst = await AppPageType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrAppPageTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrAppPageTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrAppPageTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      appPageType_ConstructorName,
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
export async function AppPageType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsAppPageTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrAppPageTypeObjLstCache: Array<clsAppPageTypeEN> = JSON.parse(strTempObjLst);
    return arrAppPageTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function AppPageType_GetObjLstCache(): Promise<Array<clsAppPageTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrAppPageTypeObjLstCache;
  switch (clsAppPageTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrAppPageTypeObjLstCache = await AppPageType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrAppPageTypeObjLstCache = await AppPageType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrAppPageTypeObjLstCache = await AppPageType_GetObjLstClientCache();
      break;
    default:
      arrAppPageTypeObjLstCache = await AppPageType_GetObjLstClientCache();
      break;
  }
  return arrAppPageTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function AppPageType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrAppPageTypeObjLstCache;
  switch (clsAppPageTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrAppPageTypeObjLstCache = await AppPageType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrAppPageTypeObjLstCache = await AppPageType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrAppPageTypeObjLstCache = null;
      break;
    default:
      arrAppPageTypeObjLstCache = null;
      break;
  }
  return arrAppPageTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrAppPageTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function AppPageType_GetSubObjLstCache(objAppPageTypeCond: clsAppPageTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrAppPageTypeObjLstCache = await AppPageType_GetObjLstCache();
  let arrAppPageTypeSel = arrAppPageTypeObjLstCache;
  if (objAppPageTypeCond.sfFldComparisonOp == null || objAppPageTypeCond.sfFldComparisonOp == '')
    return arrAppPageTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objAppPageTypeCond.sfFldComparisonOp,
  );
  //console.log("clsAppPageTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objAppPageTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objAppPageTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrAppPageTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objAppPageTypeCond),
      appPageType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsAppPageTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrAppPageTypeId:关键字列表
 * @returns 对象列表
 **/
export async function AppPageType_GetObjLstByAppPageTypeIdLstAsync(
  arrAppPageTypeId: Array<string>,
): Promise<Array<clsAppPageTypeEN>> {
  const strThisFuncName = 'GetObjLstByAppPageTypeIdLstAsync';
  const strAction = 'GetObjLstByAppPageTypeIdLst';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrAppPageTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          appPageType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AppPageType_GetObjLstByJSONObjLst(returnObjLst);
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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
 * @param arrstrAppPageTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function AppPageType_GetObjLstByAppPageTypeIdLstCache(
  arrAppPageTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByAppPageTypeIdLstCache';
  try {
    const arrAppPageTypeObjLstCache = await AppPageType_GetObjLstCache();
    const arrAppPageTypeSel = arrAppPageTypeObjLstCache.filter(
      (x) => arrAppPageTypeIdLst.indexOf(x.appPageTypeId) > -1,
    );
    return arrAppPageTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrAppPageTypeIdLst.join(','),
      appPageType_ConstructorName,
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
export async function AppPageType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsAppPageTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

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
          appPageType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AppPageType_GetObjLstByJSONObjLst(returnObjLst);
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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
export async function AppPageType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsAppPageTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

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
          appPageType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AppPageType_GetObjLstByJSONObjLst(returnObjLst);
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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
export async function AppPageType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsAppPageTypeEN>();
  const arrAppPageTypeObjLstCache = await AppPageType_GetObjLstCache();
  if (arrAppPageTypeObjLstCache.length == 0) return arrAppPageTypeObjLstCache;
  let arrAppPageTypeSel = arrAppPageTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objAppPageTypeCond = new clsAppPageTypeEN();
  ObjectAssign(objAppPageTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsAppPageTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objAppPageTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrAppPageTypeSel.length == 0) return arrAppPageTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrAppPageTypeSel = arrAppPageTypeSel.sort(AppPageType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrAppPageTypeSel = arrAppPageTypeSel.sort(objPagerPara.sortFun);
    }
    arrAppPageTypeSel = arrAppPageTypeSel.slice(intStart, intEnd);
    return arrAppPageTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      appPageType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsAppPageTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function AppPageType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsAppPageTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsAppPageTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

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
          appPageType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AppPageType_GetObjLstByJSONObjLst(returnObjLst);
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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
 * @param strAppPageTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function AppPageType_DelRecordAsync(strAppPageTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(appPageType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strAppPageTypeId);

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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
 * @param arrAppPageTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function AppPageType_DelAppPageTypesAsync(
  arrAppPageTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelAppPageTypesAsync';
  const strAction = 'DelAppPageTypes';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrAppPageTypeId, config);
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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
export async function AppPageType_DelAppPageTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelAppPageTypesByCondAsync';
  const strAction = 'DelAppPageTypesByCond';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
 * @param objAppPageTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function AppPageType_AddNewRecordAsync(
  objAppPageTypeEN: clsAppPageTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objAppPageTypeEN);
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAppPageTypeEN, config);
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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
 * @param objAppPageTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function AppPageType_AddNewRecordWithMaxIdAsync(
  objAppPageTypeEN: clsAppPageTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAppPageTypeEN, config);
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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
 * @param objAppPageTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function AppPageType_AddNewRecordWithReturnKeyAsync(
  objAppPageTypeEN: clsAppPageTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAppPageTypeEN, config);
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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
 * @param objAppPageTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function AppPageType_UpdateRecordAsync(
  objAppPageTypeEN: clsAppPageTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objAppPageTypeEN.sfUpdFldSetStr === undefined ||
    objAppPageTypeEN.sfUpdFldSetStr === null ||
    objAppPageTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objAppPageTypeEN.appPageTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAppPageTypeEN, config);
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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
 * @param objAppPageTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function AppPageType_UpdateWithConditionAsync(
  objAppPageTypeEN: clsAppPageTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objAppPageTypeEN.sfUpdFldSetStr === undefined ||
    objAppPageTypeEN.sfUpdFldSetStr === null ||
    objAppPageTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objAppPageTypeEN.appPageTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);
  objAppPageTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAppPageTypeEN, config);
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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
 * @param objstrAppPageTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function AppPageType_IsExistRecordCache(objAppPageTypeCond: clsAppPageTypeEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrAppPageTypeObjLstCache = await AppPageType_GetObjLstCache();
  if (arrAppPageTypeObjLstCache == null) return false;
  let arrAppPageTypeSel = arrAppPageTypeObjLstCache;
  if (objAppPageTypeCond.sfFldComparisonOp == null || objAppPageTypeCond.sfFldComparisonOp == '')
    return arrAppPageTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objAppPageTypeCond.sfFldComparisonOp,
  );
  //console.log("clsAppPageTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objAppPageTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objAppPageTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrAppPageTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objAppPageTypeCond),
      appPageType_ConstructorName,
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
export async function AppPageType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
 * @param strAppPageTypeId:所给的关键字
 * @returns 对象
 */
export async function AppPageType_IsExistCache(strAppPageTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrAppPageTypeObjLstCache = await AppPageType_GetObjLstCache();
  if (arrAppPageTypeObjLstCache == null) return false;
  try {
    const arrAppPageTypeSel = arrAppPageTypeObjLstCache.filter(
      (x) => x.appPageTypeId == strAppPageTypeId,
    );
    if (arrAppPageTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strAppPageTypeId,
      appPageType_ConstructorName,
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
 * @param strAppPageTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function AppPageType_IsExistAsync(strAppPageTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strAppPageTypeId,
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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
export async function AppPageType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
 * @param objAppPageTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function AppPageType_GetRecCountByCondCache(objAppPageTypeCond: clsAppPageTypeEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrAppPageTypeObjLstCache = await AppPageType_GetObjLstCache();
  if (arrAppPageTypeObjLstCache == null) return 0;
  let arrAppPageTypeSel = arrAppPageTypeObjLstCache;
  if (objAppPageTypeCond.sfFldComparisonOp == null || objAppPageTypeCond.sfFldComparisonOp == '')
    return arrAppPageTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objAppPageTypeCond.sfFldComparisonOp,
  );
  //console.log("clsAppPageTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objAppPageTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objAppPageTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrAppPageTypeSel = arrAppPageTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrAppPageTypeSel = arrAppPageTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrAppPageTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objAppPageTypeCond),
      appPageType_ConstructorName,
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
export async function AppPageType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
export async function AppPageType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(appPageType_Controller, strAction);

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
        appPageType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appPageType_ConstructorName,
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
export function AppPageType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function AppPageType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsAppPageTypeEN._CurrTabName;
  switch (clsAppPageTypeEN.CacheModeId) {
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
export function AppPageType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsAppPageTypeEN._CurrTabName;
    switch (clsAppPageTypeEN.CacheModeId) {
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
export async function AppPageType_BindDdl_AppPageTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_AppPageTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_AppPageTypeIdInDivCache");
  const arrObjLstSel = await AppPageType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsAppPageTypeEN.con_AppPageTypeId,
    clsAppPageTypeEN.con_AppPageTypeName,
    'App页面类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function AppPageType_CheckPropertyNew(pobjAppPageTypeEN: clsAppPageTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjAppPageTypeEN.appPageTypeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[App页面类型名]不能为空(In App页面类型)!(clsAppPageTypeBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjAppPageTypeEN.appPageTypeENName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[App页面类型英文名]不能为空(In App页面类型)!(clsAppPageTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.appPageTypeId) == false &&
    GetStrLen(pobjAppPageTypeEN.appPageTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[App页面类型Id(appPageTypeId)]的长度不能超过4(In App页面类型(AppPageType))!值:$(pobjAppPageTypeEN.appPageTypeId)(clsAppPageTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.appPageTypeName) == false &&
    GetStrLen(pobjAppPageTypeEN.appPageTypeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[App页面类型名(appPageTypeName)]的长度不能超过50(In App页面类型(AppPageType))!值:$(pobjAppPageTypeEN.appPageTypeName)(clsAppPageTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.appPageTypeENName) == false &&
    GetStrLen(pobjAppPageTypeEN.appPageTypeENName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[App页面类型英文名(appPageTypeENName)]的长度不能超过50(In App页面类型(AppPageType))!值:$(pobjAppPageTypeEN.appPageTypeENName)(clsAppPageTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.updDate) == false &&
    GetStrLen(pobjAppPageTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In App页面类型(AppPageType))!值:$(pobjAppPageTypeEN.updDate)(clsAppPageTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.updUser) == false &&
    GetStrLen(pobjAppPageTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In App页面类型(AppPageType))!值:$(pobjAppPageTypeEN.updUser)(clsAppPageTypeBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjAppPageTypeEN.memo) == false && GetStrLen(pobjAppPageTypeEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In App页面类型(AppPageType))!值:$(pobjAppPageTypeEN.memo)(clsAppPageTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.appPageTypeId) == false &&
    undefined !== pobjAppPageTypeEN.appPageTypeId &&
    tzDataType.isString(pobjAppPageTypeEN.appPageTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[App页面类型Id(appPageTypeId)]的值:[$(pobjAppPageTypeEN.appPageTypeId)], 非法,应该为字符型(In App页面类型(AppPageType))!(clsAppPageTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.appPageTypeName) == false &&
    undefined !== pobjAppPageTypeEN.appPageTypeName &&
    tzDataType.isString(pobjAppPageTypeEN.appPageTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[App页面类型名(appPageTypeName)]的值:[$(pobjAppPageTypeEN.appPageTypeName)], 非法,应该为字符型(In App页面类型(AppPageType))!(clsAppPageTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.appPageTypeENName) == false &&
    undefined !== pobjAppPageTypeEN.appPageTypeENName &&
    tzDataType.isString(pobjAppPageTypeEN.appPageTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[App页面类型英文名(appPageTypeENName)]的值:[$(pobjAppPageTypeEN.appPageTypeENName)], 非法,应该为字符型(In App页面类型(AppPageType))!(clsAppPageTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.updDate) == false &&
    undefined !== pobjAppPageTypeEN.updDate &&
    tzDataType.isString(pobjAppPageTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjAppPageTypeEN.updDate)], 非法,应该为字符型(In App页面类型(AppPageType))!(clsAppPageTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.updUser) == false &&
    undefined !== pobjAppPageTypeEN.updUser &&
    tzDataType.isString(pobjAppPageTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjAppPageTypeEN.updUser)], 非法,应该为字符型(In App页面类型(AppPageType))!(clsAppPageTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.memo) == false &&
    undefined !== pobjAppPageTypeEN.memo &&
    tzDataType.isString(pobjAppPageTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjAppPageTypeEN.memo)], 非法,应该为字符型(In App页面类型(AppPageType))!(clsAppPageTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function AppPageType_CheckProperty4Update(pobjAppPageTypeEN: clsAppPageTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.appPageTypeId) == false &&
    GetStrLen(pobjAppPageTypeEN.appPageTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[App页面类型Id(appPageTypeId)]的长度不能超过4(In App页面类型(AppPageType))!值:$(pobjAppPageTypeEN.appPageTypeId)(clsAppPageTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.appPageTypeName) == false &&
    GetStrLen(pobjAppPageTypeEN.appPageTypeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[App页面类型名(appPageTypeName)]的长度不能超过50(In App页面类型(AppPageType))!值:$(pobjAppPageTypeEN.appPageTypeName)(clsAppPageTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.appPageTypeENName) == false &&
    GetStrLen(pobjAppPageTypeEN.appPageTypeENName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[App页面类型英文名(appPageTypeENName)]的长度不能超过50(In App页面类型(AppPageType))!值:$(pobjAppPageTypeEN.appPageTypeENName)(clsAppPageTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.updDate) == false &&
    GetStrLen(pobjAppPageTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In App页面类型(AppPageType))!值:$(pobjAppPageTypeEN.updDate)(clsAppPageTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.updUser) == false &&
    GetStrLen(pobjAppPageTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In App页面类型(AppPageType))!值:$(pobjAppPageTypeEN.updUser)(clsAppPageTypeBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjAppPageTypeEN.memo) == false && GetStrLen(pobjAppPageTypeEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In App页面类型(AppPageType))!值:$(pobjAppPageTypeEN.memo)(clsAppPageTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.appPageTypeId) == false &&
    undefined !== pobjAppPageTypeEN.appPageTypeId &&
    tzDataType.isString(pobjAppPageTypeEN.appPageTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[App页面类型Id(appPageTypeId)]的值:[$(pobjAppPageTypeEN.appPageTypeId)], 非法,应该为字符型(In App页面类型(AppPageType))!(clsAppPageTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.appPageTypeName) == false &&
    undefined !== pobjAppPageTypeEN.appPageTypeName &&
    tzDataType.isString(pobjAppPageTypeEN.appPageTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[App页面类型名(appPageTypeName)]的值:[$(pobjAppPageTypeEN.appPageTypeName)], 非法,应该为字符型(In App页面类型(AppPageType))!(clsAppPageTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.appPageTypeENName) == false &&
    undefined !== pobjAppPageTypeEN.appPageTypeENName &&
    tzDataType.isString(pobjAppPageTypeEN.appPageTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[App页面类型英文名(appPageTypeENName)]的值:[$(pobjAppPageTypeEN.appPageTypeENName)], 非法,应该为字符型(In App页面类型(AppPageType))!(clsAppPageTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.updDate) == false &&
    undefined !== pobjAppPageTypeEN.updDate &&
    tzDataType.isString(pobjAppPageTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjAppPageTypeEN.updDate)], 非法,应该为字符型(In App页面类型(AppPageType))!(clsAppPageTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.updUser) == false &&
    undefined !== pobjAppPageTypeEN.updUser &&
    tzDataType.isString(pobjAppPageTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjAppPageTypeEN.updUser)], 非法,应该为字符型(In App页面类型(AppPageType))!(clsAppPageTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjAppPageTypeEN.memo) == false &&
    undefined !== pobjAppPageTypeEN.memo &&
    tzDataType.isString(pobjAppPageTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjAppPageTypeEN.memo)], 非法,应该为字符型(In App页面类型(AppPageType))!(clsAppPageTypeBL:CheckProperty4Update)',
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
export function AppPageType_GetJSONStrByObj(pobjAppPageTypeEN: clsAppPageTypeEN): string {
  pobjAppPageTypeEN.sfUpdFldSetStr = pobjAppPageTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjAppPageTypeEN);
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
export function AppPageType_GetObjLstByJSONStr(strJSON: string): Array<clsAppPageTypeEN> {
  let arrAppPageTypeObjLst = new Array<clsAppPageTypeEN>();
  if (strJSON === '') {
    return arrAppPageTypeObjLst;
  }
  try {
    arrAppPageTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrAppPageTypeObjLst;
  }
  return arrAppPageTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrAppPageTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function AppPageType_GetObjLstByJSONObjLst(
  arrAppPageTypeObjLstS: Array<clsAppPageTypeEN>,
): Array<clsAppPageTypeEN> {
  const arrAppPageTypeObjLst = new Array<clsAppPageTypeEN>();
  for (const objInFor of arrAppPageTypeObjLstS) {
    const obj1 = AppPageType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrAppPageTypeObjLst.push(obj1);
  }
  return arrAppPageTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function AppPageType_GetObjByJSONStr(strJSON: string): clsAppPageTypeEN {
  let pobjAppPageTypeEN = new clsAppPageTypeEN();
  if (strJSON === '') {
    return pobjAppPageTypeEN;
  }
  try {
    pobjAppPageTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjAppPageTypeEN;
  }
  return pobjAppPageTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function AppPageType_GetCombineCondition(objAppPageTypeCond: clsAppPageTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objAppPageTypeCond.dicFldComparisonOp,
      clsAppPageTypeEN.con_AppPageTypeId,
    ) == true
  ) {
    const strComparisonOpAppPageTypeId: string =
      objAppPageTypeCond.dicFldComparisonOp[clsAppPageTypeEN.con_AppPageTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAppPageTypeEN.con_AppPageTypeId,
      objAppPageTypeCond.appPageTypeId,
      strComparisonOpAppPageTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAppPageTypeCond.dicFldComparisonOp,
      clsAppPageTypeEN.con_AppPageTypeName,
    ) == true
  ) {
    const strComparisonOpAppPageTypeName: string =
      objAppPageTypeCond.dicFldComparisonOp[clsAppPageTypeEN.con_AppPageTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAppPageTypeEN.con_AppPageTypeName,
      objAppPageTypeCond.appPageTypeName,
      strComparisonOpAppPageTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAppPageTypeCond.dicFldComparisonOp,
      clsAppPageTypeEN.con_AppPageTypeENName,
    ) == true
  ) {
    const strComparisonOpAppPageTypeENName: string =
      objAppPageTypeCond.dicFldComparisonOp[clsAppPageTypeEN.con_AppPageTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAppPageTypeEN.con_AppPageTypeENName,
      objAppPageTypeCond.appPageTypeENName,
      strComparisonOpAppPageTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAppPageTypeCond.dicFldComparisonOp,
      clsAppPageTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objAppPageTypeCond.dicFldComparisonOp[clsAppPageTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAppPageTypeEN.con_UpdDate,
      objAppPageTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAppPageTypeCond.dicFldComparisonOp,
      clsAppPageTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objAppPageTypeCond.dicFldComparisonOp[clsAppPageTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAppPageTypeEN.con_UpdUser,
      objAppPageTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAppPageTypeCond.dicFldComparisonOp,
      clsAppPageTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objAppPageTypeCond.dicFldComparisonOp[clsAppPageTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAppPageTypeEN.con_Memo,
      objAppPageTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--AppPageType(App页面类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strAppPageTypeName: App页面类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function AppPageType_GetUniCondStr(objAppPageTypeEN: clsAppPageTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and AppPageTypeName = '{0}'", objAppPageTypeEN.appPageTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--AppPageType(App页面类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strAppPageTypeName: App页面类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function AppPageType_GetUniCondStr4Update(objAppPageTypeEN: clsAppPageTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and AppPageTypeId <> '{0}'", objAppPageTypeEN.appPageTypeId);
  strWhereCond += Format(" and AppPageTypeName = '{0}'", objAppPageTypeEN.appPageTypeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objAppPageTypeENS:源对象
 * @param objAppPageTypeENT:目标对象
 */
export function AppPageType_GetObjFromJsonObj(
  objAppPageTypeENS: clsAppPageTypeEN,
): clsAppPageTypeEN {
  const objAppPageTypeENT: clsAppPageTypeEN = new clsAppPageTypeEN();
  ObjectAssign(objAppPageTypeENT, objAppPageTypeENS);
  return objAppPageTypeENT;
}
