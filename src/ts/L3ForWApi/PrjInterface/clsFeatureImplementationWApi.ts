/**
 * 类名:clsFeatureImplementationWApi
 * 表名:FeatureImplementation(00050393)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:11
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 功能实现方式(FeatureImplementation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsFeatureImplementationEN } from '@/ts/L0Entity/PrjInterface/clsFeatureImplementationEN';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const featureImplementation_Controller = 'FeatureImplementationApi';
export const featureImplementation_ConstructorName = 'featureImplementation';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function FeatureImplementation_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsFeatureImplementationEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsFeatureImplementationWApi.GetObjBymIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
      const objFeatureImplementation = FeatureImplementation_GetObjFromJsonObj(returnObj);
      return objFeatureImplementation;
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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function FeatureImplementation_GetObjBymIdCache(
  lngmId: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsFeatureImplementationWApi.GetObjBymIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFeatureImplementationObjLstCache = await FeatureImplementation_GetObjLstCache();
  try {
    const arrFeatureImplementationSel = arrFeatureImplementationObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    let objFeatureImplementation: clsFeatureImplementationEN;
    if (arrFeatureImplementationSel.length > 0) {
      objFeatureImplementation = arrFeatureImplementationSel[0];
      return objFeatureImplementation;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFeatureImplementationConst = await FeatureImplementation_GetObjBymIdAsync(lngmId);
        if (objFeatureImplementationConst != null) {
          FeatureImplementation_ReFreshThisCache();
          return objFeatureImplementationConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      featureImplementation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function FeatureImplementation_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsFeatureImplementationWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFeatureImplementationEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFeatureImplementationCache: clsFeatureImplementationEN = JSON.parse(strTempObj);
    return objFeatureImplementationCache;
  }
  try {
    const objFeatureImplementation = await FeatureImplementation_GetObjBymIdAsync(lngmId);
    if (objFeatureImplementation != null) {
      localStorage.setItem(strKey, JSON.stringify(objFeatureImplementation));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFeatureImplementation;
    }
    return objFeatureImplementation;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      featureImplementation_ConstructorName,
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
 * @param objFeatureImplementation:所给的对象
 * @returns 对象
 */
export async function FeatureImplementation_UpdateObjInLstCache(
  objFeatureImplementation: clsFeatureImplementationEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFeatureImplementationObjLstCache = await FeatureImplementation_GetObjLstCache();
    const obj = arrFeatureImplementationObjLstCache.find(
      (x) =>
        x.featureId == objFeatureImplementation.featureId &&
        x.viewImplId == objFeatureImplementation.viewImplId,
    );
    if (obj != null) {
      objFeatureImplementation.mId = obj.mId;
      ObjectAssign(obj, objFeatureImplementation);
    } else {
      arrFeatureImplementationObjLstCache.push(objFeatureImplementation);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      featureImplementation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/*该表没有名称字段,不能生成此函数!*/

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
export async function FeatureImplementation_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsFeatureImplementationEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFeatureImplementationEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFeatureImplementationEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objFeatureImplementation = await FeatureImplementation_GetObjBymIdCache(lngmId);
  if (objFeatureImplementation == null) return '';
  if (objFeatureImplementation.GetFldValue(strOutFldName) == null) return '';
  return objFeatureImplementation.GetFldValue(strOutFldName).toString();
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
export function FeatureImplementation_SortFunDefa(
  a: clsFeatureImplementationEN,
  b: clsFeatureImplementationEN,
): number {
  return a.mId - b.mId;
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
export function FeatureImplementation_SortFunDefa2Fld(
  a: clsFeatureImplementationEN,
  b: clsFeatureImplementationEN,
): number {
  if (a.featureId == b.featureId) return a.viewImplId.localeCompare(b.viewImplId);
  else return a.featureId.localeCompare(b.featureId);
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
export function FeatureImplementation_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFeatureImplementationEN.con_mId:
        return (a: clsFeatureImplementationEN, b: clsFeatureImplementationEN) => {
          return a.mId - b.mId;
        };
      case clsFeatureImplementationEN.con_FeatureId:
        return (a: clsFeatureImplementationEN, b: clsFeatureImplementationEN) => {
          return a.featureId.localeCompare(b.featureId);
        };
      case clsFeatureImplementationEN.con_ViewImplId:
        return (a: clsFeatureImplementationEN, b: clsFeatureImplementationEN) => {
          return a.viewImplId.localeCompare(b.viewImplId);
        };
      case clsFeatureImplementationEN.con_IsDefault:
        return (a: clsFeatureImplementationEN) => {
          if (a.isDefault == true) return 1;
          else return -1;
        };
      case clsFeatureImplementationEN.con_UpdDate:
        return (a: clsFeatureImplementationEN, b: clsFeatureImplementationEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFeatureImplementationEN.con_UpdUser:
        return (a: clsFeatureImplementationEN, b: clsFeatureImplementationEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFeatureImplementationEN.con_Memo:
        return (a: clsFeatureImplementationEN, b: clsFeatureImplementationEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FeatureImplementation]中不存在!(in ${featureImplementation_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFeatureImplementationEN.con_mId:
        return (a: clsFeatureImplementationEN, b: clsFeatureImplementationEN) => {
          return b.mId - a.mId;
        };
      case clsFeatureImplementationEN.con_FeatureId:
        return (a: clsFeatureImplementationEN, b: clsFeatureImplementationEN) => {
          return b.featureId.localeCompare(a.featureId);
        };
      case clsFeatureImplementationEN.con_ViewImplId:
        return (a: clsFeatureImplementationEN, b: clsFeatureImplementationEN) => {
          return b.viewImplId.localeCompare(a.viewImplId);
        };
      case clsFeatureImplementationEN.con_IsDefault:
        return (b: clsFeatureImplementationEN) => {
          if (b.isDefault == true) return 1;
          else return -1;
        };
      case clsFeatureImplementationEN.con_UpdDate:
        return (a: clsFeatureImplementationEN, b: clsFeatureImplementationEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFeatureImplementationEN.con_UpdUser:
        return (a: clsFeatureImplementationEN, b: clsFeatureImplementationEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFeatureImplementationEN.con_Memo:
        return (a: clsFeatureImplementationEN, b: clsFeatureImplementationEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FeatureImplementation]中不存在!(in ${featureImplementation_ConstructorName}.${strThisFuncName})`;
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
export async function FeatureImplementation_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFeatureImplementationEN.con_mId:
      return (obj: clsFeatureImplementationEN) => {
        return obj.mId === value;
      };
    case clsFeatureImplementationEN.con_FeatureId:
      return (obj: clsFeatureImplementationEN) => {
        return obj.featureId === value;
      };
    case clsFeatureImplementationEN.con_ViewImplId:
      return (obj: clsFeatureImplementationEN) => {
        return obj.viewImplId === value;
      };
    case clsFeatureImplementationEN.con_IsDefault:
      return (obj: clsFeatureImplementationEN) => {
        return obj.isDefault === value;
      };
    case clsFeatureImplementationEN.con_UpdDate:
      return (obj: clsFeatureImplementationEN) => {
        return obj.updDate === value;
      };
    case clsFeatureImplementationEN.con_UpdUser:
      return (obj: clsFeatureImplementationEN) => {
        return obj.updUser === value;
      };
    case clsFeatureImplementationEN.con_Memo:
      return (obj: clsFeatureImplementationEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FeatureImplementation]中不存在!(in ${featureImplementation_ConstructorName}.${strThisFuncName})`;
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
export async function FeatureImplementation_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsFeatureImplementationEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrFeatureImplementation = await FeatureImplementation_GetObjLstCache();
  if (arrFeatureImplementation == null) return [];
  let arrFeatureImplementationSel = arrFeatureImplementation;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFeatureImplementationSel.length == 0) return [];
  return arrFeatureImplementationSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FeatureImplementation_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
export async function FeatureImplementation_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
export async function FeatureImplementation_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFeatureImplementationEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

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
      const objFeatureImplementation = FeatureImplementation_GetObjFromJsonObj(returnObj);
      return objFeatureImplementation;
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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
export async function FeatureImplementation_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFeatureImplementationEN._CurrTabName;
  if (IsNullOrEmpty(clsFeatureImplementationEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFeatureImplementationEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFeatureImplementationExObjLstCache: Array<clsFeatureImplementationEN> =
      CacheHelper.Get(strKey);
    const arrFeatureImplementationObjLstT = FeatureImplementation_GetObjLstByJSONObjLst(
      arrFeatureImplementationExObjLstCache,
    );
    return arrFeatureImplementationObjLstT;
  }
  try {
    const arrFeatureImplementationExObjLst = await FeatureImplementation_GetObjLstAsync(
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrFeatureImplementationExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFeatureImplementationExObjLst.length,
    );
    console.log(strInfo);
    return arrFeatureImplementationExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      featureImplementation_ConstructorName,
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
export async function FeatureImplementation_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFeatureImplementationEN._CurrTabName;
  if (IsNullOrEmpty(clsFeatureImplementationEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFeatureImplementationEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFeatureImplementationExObjLstCache: Array<clsFeatureImplementationEN> =
      JSON.parse(strTempObjLst);
    const arrFeatureImplementationObjLstT = FeatureImplementation_GetObjLstByJSONObjLst(
      arrFeatureImplementationExObjLstCache,
    );
    return arrFeatureImplementationObjLstT;
  }
  try {
    const arrFeatureImplementationExObjLst = await FeatureImplementation_GetObjLstAsync(
      strWhereCond,
    );
    localStorage.setItem(strKey, JSON.stringify(arrFeatureImplementationExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFeatureImplementationExObjLst.length,
    );
    console.log(strInfo);
    return arrFeatureImplementationExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      featureImplementation_ConstructorName,
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
export async function FeatureImplementation_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFeatureImplementationEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFeatureImplementationObjLstCache: Array<clsFeatureImplementationEN> =
      JSON.parse(strTempObjLst);
    return arrFeatureImplementationObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FeatureImplementation_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFeatureImplementationEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

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
          featureImplementation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureImplementation_GetObjLstByJSONObjLst(returnObjLst);
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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
export async function FeatureImplementation_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFeatureImplementationEN._CurrTabName;
  if (IsNullOrEmpty(clsFeatureImplementationEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFeatureImplementationEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFeatureImplementationExObjLstCache: Array<clsFeatureImplementationEN> =
      JSON.parse(strTempObjLst);
    const arrFeatureImplementationObjLstT = FeatureImplementation_GetObjLstByJSONObjLst(
      arrFeatureImplementationExObjLstCache,
    );
    return arrFeatureImplementationObjLstT;
  }
  try {
    const arrFeatureImplementationExObjLst = await FeatureImplementation_GetObjLstAsync(
      strWhereCond,
    );
    sessionStorage.setItem(strKey, JSON.stringify(arrFeatureImplementationExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFeatureImplementationExObjLst.length,
    );
    console.log(strInfo);
    return arrFeatureImplementationExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      featureImplementation_ConstructorName,
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
export async function FeatureImplementation_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFeatureImplementationEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFeatureImplementationObjLstCache: Array<clsFeatureImplementationEN> =
      JSON.parse(strTempObjLst);
    return arrFeatureImplementationObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FeatureImplementation_GetObjLstCache(): Promise<
  Array<clsFeatureImplementationEN>
> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrFeatureImplementationObjLstCache;
  switch (clsFeatureImplementationEN.CacheModeId) {
    case '04': //sessionStorage
      arrFeatureImplementationObjLstCache = await FeatureImplementation_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrFeatureImplementationObjLstCache = await FeatureImplementation_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrFeatureImplementationObjLstCache = await FeatureImplementation_GetObjLstClientCache();
      break;
    default:
      arrFeatureImplementationObjLstCache = await FeatureImplementation_GetObjLstClientCache();
      break;
  }
  return arrFeatureImplementationObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FeatureImplementation_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFeatureImplementationObjLstCache;
  switch (clsFeatureImplementationEN.CacheModeId) {
    case '04': //sessionStorage
      arrFeatureImplementationObjLstCache =
        await FeatureImplementation_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrFeatureImplementationObjLstCache =
        await FeatureImplementation_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrFeatureImplementationObjLstCache = null;
      break;
    default:
      arrFeatureImplementationObjLstCache = null;
      break;
  }
  return arrFeatureImplementationObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FeatureImplementation_GetSubObjLstCache(
  objFeatureImplementationCond: clsFeatureImplementationEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFeatureImplementationObjLstCache = await FeatureImplementation_GetObjLstCache();
  let arrFeatureImplementationSel = arrFeatureImplementationObjLstCache;
  if (
    objFeatureImplementationCond.sfFldComparisonOp == null ||
    objFeatureImplementationCond.sfFldComparisonOp == ''
  )
    return arrFeatureImplementationSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFeatureImplementationCond.sfFldComparisonOp,
  );
  //console.log("clsFeatureImplementationWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFeatureImplementationCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFeatureImplementationCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFeatureImplementationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFeatureImplementationCond),
      featureImplementation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFeatureImplementationEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function FeatureImplementation_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsFeatureImplementationEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          featureImplementation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureImplementation_GetObjLstByJSONObjLst(returnObjLst);
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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
 */
export async function FeatureImplementation_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrFeatureImplementationObjLstCache = await FeatureImplementation_GetObjLstCache();
    const arrFeatureImplementationSel = arrFeatureImplementationObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrFeatureImplementationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      featureImplementation_ConstructorName,
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
export async function FeatureImplementation_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFeatureImplementationEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

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
          featureImplementation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureImplementation_GetObjLstByJSONObjLst(returnObjLst);
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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
export async function FeatureImplementation_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFeatureImplementationEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

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
          featureImplementation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureImplementation_GetObjLstByJSONObjLst(returnObjLst);
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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
export async function FeatureImplementation_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsFeatureImplementationEN>();
  const arrFeatureImplementationObjLstCache = await FeatureImplementation_GetObjLstCache();
  if (arrFeatureImplementationObjLstCache.length == 0) return arrFeatureImplementationObjLstCache;
  let arrFeatureImplementationSel = arrFeatureImplementationObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objFeatureImplementationCond = new clsFeatureImplementationEN();
  ObjectAssign(objFeatureImplementationCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsFeatureImplementationWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFeatureImplementationCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFeatureImplementationSel.length == 0) return arrFeatureImplementationSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFeatureImplementationSel = arrFeatureImplementationSel.sort(
        FeatureImplementation_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFeatureImplementationSel = arrFeatureImplementationSel.sort(objPagerPara.sortFun);
    }
    arrFeatureImplementationSel = arrFeatureImplementationSel.slice(intStart, intEnd);
    return arrFeatureImplementationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      featureImplementation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFeatureImplementationEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function FeatureImplementation_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFeatureImplementationEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFeatureImplementationEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

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
          featureImplementation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureImplementation_GetObjLstByJSONObjLst(returnObjLst);
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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export async function FeatureImplementation_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngmId);

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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function FeatureImplementation_DelFeatureImplementationsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFeatureImplementationsAsync';
  const strAction = 'DelFeatureImplementations';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
export async function FeatureImplementation_DelFeatureImplementationsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFeatureImplementationsByCondAsync';
  const strAction = 'DelFeatureImplementationsByCond';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
 * @param objFeatureImplementationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FeatureImplementation_AddNewRecordAsync(
  objFeatureImplementationEN: clsFeatureImplementationEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFeatureImplementationEN);
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureImplementationEN, config);
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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFeatureImplementationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FeatureImplementation_AddNewRecordWithReturnKeyAsync(
  objFeatureImplementationEN: clsFeatureImplementationEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureImplementationEN, config);
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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
 * @param objFeatureImplementationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FeatureImplementation_UpdateRecordAsync(
  objFeatureImplementationEN: clsFeatureImplementationEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFeatureImplementationEN.sfUpdFldSetStr === undefined ||
    objFeatureImplementationEN.sfUpdFldSetStr === null ||
    objFeatureImplementationEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFeatureImplementationEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureImplementationEN, config);
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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
 * @param objFeatureImplementationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FeatureImplementation_UpdateWithConditionAsync(
  objFeatureImplementationEN: clsFeatureImplementationEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFeatureImplementationEN.sfUpdFldSetStr === undefined ||
    objFeatureImplementationEN.sfUpdFldSetStr === null ||
    objFeatureImplementationEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFeatureImplementationEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);
  objFeatureImplementationEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureImplementationEN, config);
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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FeatureImplementation_IsExistRecordCache(
  objFeatureImplementationCond: clsFeatureImplementationEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFeatureImplementationObjLstCache = await FeatureImplementation_GetObjLstCache();
  if (arrFeatureImplementationObjLstCache == null) return false;
  let arrFeatureImplementationSel = arrFeatureImplementationObjLstCache;
  if (
    objFeatureImplementationCond.sfFldComparisonOp == null ||
    objFeatureImplementationCond.sfFldComparisonOp == ''
  )
    return arrFeatureImplementationSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFeatureImplementationCond.sfFldComparisonOp,
  );
  //console.log("clsFeatureImplementationWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFeatureImplementationCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFeatureImplementationCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFeatureImplementationSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFeatureImplementationCond),
      featureImplementation_ConstructorName,
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
export async function FeatureImplementation_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function FeatureImplementation_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrFeatureImplementationObjLstCache = await FeatureImplementation_GetObjLstCache();
  if (arrFeatureImplementationObjLstCache == null) return false;
  try {
    const arrFeatureImplementationSel = arrFeatureImplementationObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    if (arrFeatureImplementationSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      featureImplementation_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function FeatureImplementation_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
export async function FeatureImplementation_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
 * @param objFeatureImplementationCond:条件对象
 * @returns 对象列表记录数
 */
export async function FeatureImplementation_GetRecCountByCondCache(
  objFeatureImplementationCond: clsFeatureImplementationEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFeatureImplementationObjLstCache = await FeatureImplementation_GetObjLstCache();
  if (arrFeatureImplementationObjLstCache == null) return 0;
  let arrFeatureImplementationSel = arrFeatureImplementationObjLstCache;
  if (
    objFeatureImplementationCond.sfFldComparisonOp == null ||
    objFeatureImplementationCond.sfFldComparisonOp == ''
  )
    return arrFeatureImplementationSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFeatureImplementationCond.sfFldComparisonOp,
  );
  //console.log("clsFeatureImplementationWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFeatureImplementationCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFeatureImplementationCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureImplementationSel = arrFeatureImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFeatureImplementationSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFeatureImplementationCond),
      featureImplementation_ConstructorName,
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
export async function FeatureImplementation_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(featureImplementation_Controller, strAction);

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
        featureImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureImplementation_ConstructorName,
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
export function FeatureImplementation_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
export function FeatureImplementation_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsFeatureImplementationEN._CurrTabName;
  switch (clsFeatureImplementationEN.CacheModeId) {
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
export function FeatureImplementation_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsFeatureImplementationEN._CurrTabName;
    switch (clsFeatureImplementationEN.CacheModeId) {
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
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FeatureImplementation_CheckPropertyNew(
  pobjFeatureImplementationEN: clsFeatureImplementationEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.featureId) === true ||
    pobjFeatureImplementationEN.featureId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[功能Id]不能为空(In 功能实现方式)!(clsFeatureImplementationBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.viewImplId) === true ||
    pobjFeatureImplementationEN.viewImplId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[界面实现Id]不能为空(In 功能实现方式)!(clsFeatureImplementationBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.featureId) == false &&
    GetStrLen(pobjFeatureImplementationEN.featureId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能Id(featureId)]的长度不能超过4(In 功能实现方式(FeatureImplementation))!值:$(pobjFeatureImplementationEN.featureId)(clsFeatureImplementationBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.viewImplId) == false &&
    GetStrLen(pobjFeatureImplementationEN.viewImplId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[界面实现Id(viewImplId)]的长度不能超过4(In 功能实现方式(FeatureImplementation))!值:$(pobjFeatureImplementationEN.viewImplId)(clsFeatureImplementationBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.updDate) == false &&
    GetStrLen(pobjFeatureImplementationEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 功能实现方式(FeatureImplementation))!值:$(pobjFeatureImplementationEN.updDate)(clsFeatureImplementationBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.updUser) == false &&
    GetStrLen(pobjFeatureImplementationEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 功能实现方式(FeatureImplementation))!值:$(pobjFeatureImplementationEN.updUser)(clsFeatureImplementationBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.memo) == false &&
    GetStrLen(pobjFeatureImplementationEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 功能实现方式(FeatureImplementation))!值:$(pobjFeatureImplementationEN.memo)(clsFeatureImplementationBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFeatureImplementationEN.mId &&
    undefined !== pobjFeatureImplementationEN.mId &&
    tzDataType.isNumber(pobjFeatureImplementationEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjFeatureImplementationEN.mId)], 非法,应该为数值型(In 功能实现方式(FeatureImplementation))!(clsFeatureImplementationBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.featureId) == false &&
    undefined !== pobjFeatureImplementationEN.featureId &&
    tzDataType.isString(pobjFeatureImplementationEN.featureId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能Id(featureId)]的值:[$(pobjFeatureImplementationEN.featureId)], 非法,应该为字符型(In 功能实现方式(FeatureImplementation))!(clsFeatureImplementationBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.viewImplId) == false &&
    undefined !== pobjFeatureImplementationEN.viewImplId &&
    tzDataType.isString(pobjFeatureImplementationEN.viewImplId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[界面实现Id(viewImplId)]的值:[$(pobjFeatureImplementationEN.viewImplId)], 非法,应该为字符型(In 功能实现方式(FeatureImplementation))!(clsFeatureImplementationBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjFeatureImplementationEN.isDefault &&
    undefined !== pobjFeatureImplementationEN.isDefault &&
    tzDataType.isBoolean(pobjFeatureImplementationEN.isDefault) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否默认(isDefault)]的值:[$(pobjFeatureImplementationEN.isDefault)], 非法,应该为布尔型(In 功能实现方式(FeatureImplementation))!(clsFeatureImplementationBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.updDate) == false &&
    undefined !== pobjFeatureImplementationEN.updDate &&
    tzDataType.isString(pobjFeatureImplementationEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjFeatureImplementationEN.updDate)], 非法,应该为字符型(In 功能实现方式(FeatureImplementation))!(clsFeatureImplementationBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.updUser) == false &&
    undefined !== pobjFeatureImplementationEN.updUser &&
    tzDataType.isString(pobjFeatureImplementationEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjFeatureImplementationEN.updUser)], 非法,应该为字符型(In 功能实现方式(FeatureImplementation))!(clsFeatureImplementationBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.memo) == false &&
    undefined !== pobjFeatureImplementationEN.memo &&
    tzDataType.isString(pobjFeatureImplementationEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjFeatureImplementationEN.memo)], 非法,应该为字符型(In 功能实现方式(FeatureImplementation))!(clsFeatureImplementationBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.featureId) == false &&
    pobjFeatureImplementationEN.featureId != '[nuull]' &&
    GetStrLen(pobjFeatureImplementationEN.featureId) != 4
  ) {
    throw '(errid:Watl000415)字段[功能Id]作为外键字段,长度应该为4(In 功能实现方式)!(clsFeatureImplementationBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.viewImplId) == false &&
    pobjFeatureImplementationEN.viewImplId != '[nuull]' &&
    GetStrLen(pobjFeatureImplementationEN.viewImplId) != 4
  ) {
    throw '(errid:Watl000415)字段[界面实现Id]作为外键字段,长度应该为4(In 功能实现方式)!(clsFeatureImplementationBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FeatureImplementation_CheckProperty4Update(
  pobjFeatureImplementationEN: clsFeatureImplementationEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.featureId) == false &&
    GetStrLen(pobjFeatureImplementationEN.featureId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能Id(featureId)]的长度不能超过4(In 功能实现方式(FeatureImplementation))!值:$(pobjFeatureImplementationEN.featureId)(clsFeatureImplementationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.viewImplId) == false &&
    GetStrLen(pobjFeatureImplementationEN.viewImplId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[界面实现Id(viewImplId)]的长度不能超过4(In 功能实现方式(FeatureImplementation))!值:$(pobjFeatureImplementationEN.viewImplId)(clsFeatureImplementationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.updDate) == false &&
    GetStrLen(pobjFeatureImplementationEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 功能实现方式(FeatureImplementation))!值:$(pobjFeatureImplementationEN.updDate)(clsFeatureImplementationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.updUser) == false &&
    GetStrLen(pobjFeatureImplementationEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 功能实现方式(FeatureImplementation))!值:$(pobjFeatureImplementationEN.updUser)(clsFeatureImplementationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.memo) == false &&
    GetStrLen(pobjFeatureImplementationEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 功能实现方式(FeatureImplementation))!值:$(pobjFeatureImplementationEN.memo)(clsFeatureImplementationBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFeatureImplementationEN.mId &&
    undefined !== pobjFeatureImplementationEN.mId &&
    tzDataType.isNumber(pobjFeatureImplementationEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjFeatureImplementationEN.mId)], 非法,应该为数值型(In 功能实现方式(FeatureImplementation))!(clsFeatureImplementationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.featureId) == false &&
    undefined !== pobjFeatureImplementationEN.featureId &&
    tzDataType.isString(pobjFeatureImplementationEN.featureId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能Id(featureId)]的值:[$(pobjFeatureImplementationEN.featureId)], 非法,应该为字符型(In 功能实现方式(FeatureImplementation))!(clsFeatureImplementationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.viewImplId) == false &&
    undefined !== pobjFeatureImplementationEN.viewImplId &&
    tzDataType.isString(pobjFeatureImplementationEN.viewImplId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[界面实现Id(viewImplId)]的值:[$(pobjFeatureImplementationEN.viewImplId)], 非法,应该为字符型(In 功能实现方式(FeatureImplementation))!(clsFeatureImplementationBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjFeatureImplementationEN.isDefault &&
    undefined !== pobjFeatureImplementationEN.isDefault &&
    tzDataType.isBoolean(pobjFeatureImplementationEN.isDefault) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否默认(isDefault)]的值:[$(pobjFeatureImplementationEN.isDefault)], 非法,应该为布尔型(In 功能实现方式(FeatureImplementation))!(clsFeatureImplementationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.updDate) == false &&
    undefined !== pobjFeatureImplementationEN.updDate &&
    tzDataType.isString(pobjFeatureImplementationEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjFeatureImplementationEN.updDate)], 非法,应该为字符型(In 功能实现方式(FeatureImplementation))!(clsFeatureImplementationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.updUser) == false &&
    undefined !== pobjFeatureImplementationEN.updUser &&
    tzDataType.isString(pobjFeatureImplementationEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjFeatureImplementationEN.updUser)], 非法,应该为字符型(In 功能实现方式(FeatureImplementation))!(clsFeatureImplementationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.memo) == false &&
    undefined !== pobjFeatureImplementationEN.memo &&
    tzDataType.isString(pobjFeatureImplementationEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjFeatureImplementationEN.memo)], 非法,应该为字符型(In 功能实现方式(FeatureImplementation))!(clsFeatureImplementationBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjFeatureImplementationEN.mId ||
    (pobjFeatureImplementationEN.mId != null && pobjFeatureImplementationEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 功能实现方式)!(clsFeatureImplementationBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.featureId) == false &&
    pobjFeatureImplementationEN.featureId != '[nuull]' &&
    GetStrLen(pobjFeatureImplementationEN.featureId) != 4
  ) {
    throw '(errid:Watl000418)字段[功能Id]作为外键字段,长度应该为4(In 功能实现方式)!(clsFeatureImplementationBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFeatureImplementationEN.viewImplId) == false &&
    pobjFeatureImplementationEN.viewImplId != '[nuull]' &&
    GetStrLen(pobjFeatureImplementationEN.viewImplId) != 4
  ) {
    throw '(errid:Watl000418)字段[界面实现Id]作为外键字段,长度应该为4(In 功能实现方式)!(clsFeatureImplementationBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FeatureImplementation_GetJSONStrByObj(
  pobjFeatureImplementationEN: clsFeatureImplementationEN,
): string {
  pobjFeatureImplementationEN.sfUpdFldSetStr = pobjFeatureImplementationEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFeatureImplementationEN);
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
export function FeatureImplementation_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsFeatureImplementationEN> {
  let arrFeatureImplementationObjLst = new Array<clsFeatureImplementationEN>();
  if (strJSON === '') {
    return arrFeatureImplementationObjLst;
  }
  try {
    arrFeatureImplementationObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFeatureImplementationObjLst;
  }
  return arrFeatureImplementationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFeatureImplementationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FeatureImplementation_GetObjLstByJSONObjLst(
  arrFeatureImplementationObjLstS: Array<clsFeatureImplementationEN>,
): Array<clsFeatureImplementationEN> {
  const arrFeatureImplementationObjLst = new Array<clsFeatureImplementationEN>();
  for (const objInFor of arrFeatureImplementationObjLstS) {
    const obj1 = FeatureImplementation_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFeatureImplementationObjLst.push(obj1);
  }
  return arrFeatureImplementationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FeatureImplementation_GetObjByJSONStr(strJSON: string): clsFeatureImplementationEN {
  let pobjFeatureImplementationEN = new clsFeatureImplementationEN();
  if (strJSON === '') {
    return pobjFeatureImplementationEN;
  }
  try {
    pobjFeatureImplementationEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFeatureImplementationEN;
  }
  return pobjFeatureImplementationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FeatureImplementation_GetCombineCondition(
  objFeatureImplementationCond: clsFeatureImplementationEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureImplementationCond.dicFldComparisonOp,
      clsFeatureImplementationEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objFeatureImplementationCond.dicFldComparisonOp[clsFeatureImplementationEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFeatureImplementationEN.con_mId,
      objFeatureImplementationCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureImplementationCond.dicFldComparisonOp,
      clsFeatureImplementationEN.con_FeatureId,
    ) == true
  ) {
    const strComparisonOpFeatureId: string =
      objFeatureImplementationCond.dicFldComparisonOp[clsFeatureImplementationEN.con_FeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureImplementationEN.con_FeatureId,
      objFeatureImplementationCond.featureId,
      strComparisonOpFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureImplementationCond.dicFldComparisonOp,
      clsFeatureImplementationEN.con_ViewImplId,
    ) == true
  ) {
    const strComparisonOpViewImplId: string =
      objFeatureImplementationCond.dicFldComparisonOp[clsFeatureImplementationEN.con_ViewImplId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureImplementationEN.con_ViewImplId,
      objFeatureImplementationCond.viewImplId,
      strComparisonOpViewImplId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureImplementationCond.dicFldComparisonOp,
      clsFeatureImplementationEN.con_IsDefault,
    ) == true
  ) {
    if (objFeatureImplementationCond.isDefault == true) {
      strWhereCond += Format(" And {0} = '1'", clsFeatureImplementationEN.con_IsDefault);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFeatureImplementationEN.con_IsDefault);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureImplementationCond.dicFldComparisonOp,
      clsFeatureImplementationEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFeatureImplementationCond.dicFldComparisonOp[clsFeatureImplementationEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureImplementationEN.con_UpdDate,
      objFeatureImplementationCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureImplementationCond.dicFldComparisonOp,
      clsFeatureImplementationEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFeatureImplementationCond.dicFldComparisonOp[clsFeatureImplementationEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureImplementationEN.con_UpdUser,
      objFeatureImplementationCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureImplementationCond.dicFldComparisonOp,
      clsFeatureImplementationEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFeatureImplementationCond.dicFldComparisonOp[clsFeatureImplementationEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureImplementationEN.con_Memo,
      objFeatureImplementationCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FeatureImplementation(功能实现方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFeatureId: 功能Id(要求唯一的字段)
 * @param strViewImplId: 界面实现Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FeatureImplementation_GetUniCondStr(
  objFeatureImplementationEN: clsFeatureImplementationEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FeatureId = '{0}'", objFeatureImplementationEN.featureId);
  strWhereCond += Format(" and ViewImplId = '{0}'", objFeatureImplementationEN.viewImplId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FeatureImplementation(功能实现方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFeatureId: 功能Id(要求唯一的字段)
 * @param strViewImplId: 界面实现Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FeatureImplementation_GetUniCondStr4Update(
  objFeatureImplementationEN: clsFeatureImplementationEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objFeatureImplementationEN.mId);
  strWhereCond += Format(" and FeatureId = '{0}'", objFeatureImplementationEN.featureId);
  strWhereCond += Format(" and ViewImplId = '{0}'", objFeatureImplementationEN.viewImplId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFeatureImplementationENS:源对象
 * @param objFeatureImplementationENT:目标对象
 */
export function FeatureImplementation_GetObjFromJsonObj(
  objFeatureImplementationENS: clsFeatureImplementationEN,
): clsFeatureImplementationEN {
  const objFeatureImplementationENT: clsFeatureImplementationEN = new clsFeatureImplementationEN();
  ObjectAssign(objFeatureImplementationENT, objFeatureImplementationENS);
  return objFeatureImplementationENT;
}
