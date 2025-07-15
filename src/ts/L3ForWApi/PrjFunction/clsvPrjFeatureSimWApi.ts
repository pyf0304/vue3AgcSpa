/**
 * 类名:clsvPrjFeatureSimWApi
 * 表名:vPrjFeatureSim(00050637)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/04 16:01:13
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vPrjFeatureSim(vPrjFeatureSim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月04日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import {
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvPrjFeatureSimEN } from '@/ts/L0Entity/PrjFunction/clsvPrjFeatureSimEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vPrjFeatureSim_Controller = 'vPrjFeatureSimApi';
export const vPrjFeatureSim_ConstructorName = 'vPrjFeatureSim';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFeatureId:关键字
 * @returns 对象
 **/
export async function vPrjFeatureSim_GetObjByFeatureIdAsync(
  strFeatureId: string,
): Promise<clsvPrjFeatureSimEN | null> {
  const strThisFuncName = 'GetObjByFeatureIdAsync';

  if (IsNullOrEmpty(strFeatureId) == true) {
    const strMsg = Format(
      '参数:[strFeatureId]不能为空!(In clsvPrjFeatureSimWApi.GetObjByFeatureIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureId]的长度:[{0}]不正确!(clsvPrjFeatureSimWApi.GetObjByFeatureIdAsync)',
      strFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFeatureId';
  const strUrl = GetWebApiUrl(vPrjFeatureSim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFeatureId,
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
      const objvPrjFeatureSim = vPrjFeatureSim_GetObjFromJsonObj(returnObj);
      return objvPrjFeatureSim;
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
        vPrjFeatureSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFeatureSim_ConstructorName,
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
 * @param strFeatureId:所给的关键字
 * @returns 对象
 */
export async function vPrjFeatureSim_GetObjByFeatureIdlocalStorage(strFeatureId: string) {
  const strThisFuncName = 'GetObjByFeatureIdlocalStorage';

  if (IsNullOrEmpty(strFeatureId) == true) {
    const strMsg = Format(
      '参数:[strFeatureId]不能为空!(In clsvPrjFeatureSimWApi.GetObjByFeatureIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureId]的长度:[{0}]不正确!(clsvPrjFeatureSimWApi.GetObjByFeatureIdlocalStorage)',
      strFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvPrjFeatureSimEN._CurrTabName, strFeatureId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvPrjFeatureSimCache: clsvPrjFeatureSimEN = JSON.parse(strTempObj);
    return objvPrjFeatureSimCache;
  }
  try {
    const objvPrjFeatureSim = await vPrjFeatureSim_GetObjByFeatureIdAsync(strFeatureId);
    if (objvPrjFeatureSim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvPrjFeatureSim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvPrjFeatureSim;
    }
    return objvPrjFeatureSim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFeatureId,
      vPrjFeatureSim_ConstructorName,
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
 * @param strFeatureId:所给的关键字
 * @returns 对象
 */
export async function vPrjFeatureSim_GetObjByFeatureIdCache(
  strFeatureId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFeatureIdCache';

  if (IsNullOrEmpty(strFeatureId) == true) {
    const strMsg = Format(
      '参数:[strFeatureId]不能为空!(In clsvPrjFeatureSimWApi.GetObjByFeatureIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureId]的长度:[{0}]不正确!(clsvPrjFeatureSimWApi.GetObjByFeatureIdCache)',
      strFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPrjFeatureSimObjLstCache = await vPrjFeatureSim_GetObjLstCache();
  try {
    const arrvPrjFeatureSimSel = arrvPrjFeatureSimObjLstCache.filter(
      (x) => x.featureId == strFeatureId,
    );
    let objvPrjFeatureSim: clsvPrjFeatureSimEN;
    if (arrvPrjFeatureSimSel.length > 0) {
      objvPrjFeatureSim = arrvPrjFeatureSimSel[0];
      return objvPrjFeatureSim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvPrjFeatureSimConst = await vPrjFeatureSim_GetObjByFeatureIdAsync(strFeatureId);
        if (objvPrjFeatureSimConst != null) {
          vPrjFeatureSim_ReFreshThisCache();
          return objvPrjFeatureSimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFeatureId,
      vPrjFeatureSim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
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
export function vPrjFeatureSim_SortFunDefa(a: clsvPrjFeatureSimEN, b: clsvPrjFeatureSimEN): number {
  return a.featureId.localeCompare(b.featureId);
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
export function vPrjFeatureSim_SortFunDefa2Fld(
  a: clsvPrjFeatureSimEN,
  b: clsvPrjFeatureSimEN,
): number {
  if (a.featureName == b.featureName) return a.featureTypeId.localeCompare(b.featureTypeId);
  else return a.featureName.localeCompare(b.featureName);
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
export function vPrjFeatureSim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvPrjFeatureSimEN.con_FeatureId:
        return (a: clsvPrjFeatureSimEN, b: clsvPrjFeatureSimEN) => {
          return a.featureId.localeCompare(b.featureId);
        };
      case clsvPrjFeatureSimEN.con_FeatureName:
        return (a: clsvPrjFeatureSimEN, b: clsvPrjFeatureSimEN) => {
          return a.featureName.localeCompare(b.featureName);
        };
      case clsvPrjFeatureSimEN.con_FeatureTypeId:
        return (a: clsvPrjFeatureSimEN, b: clsvPrjFeatureSimEN) => {
          return a.featureTypeId.localeCompare(b.featureTypeId);
        };
      case clsvPrjFeatureSimEN.con_RegionTypeId:
        return (a: clsvPrjFeatureSimEN, b: clsvPrjFeatureSimEN) => {
          return a.regionTypeId.localeCompare(b.regionTypeId);
        };
      case clsvPrjFeatureSimEN.con_InUse:
        return (a: clsvPrjFeatureSimEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsvPrjFeatureSimEN.con_ParentFeatureName:
        return (a: clsvPrjFeatureSimEN, b: clsvPrjFeatureSimEN) => {
          if (a.parentFeatureName == null) return -1;
          if (b.parentFeatureName == null) return 1;
          return a.parentFeatureName.localeCompare(b.parentFeatureName);
        };
      case clsvPrjFeatureSimEN.con_ParentFeatureId:
        return (a: clsvPrjFeatureSimEN, b: clsvPrjFeatureSimEN) => {
          if (a.parentFeatureId == null) return -1;
          if (b.parentFeatureId == null) return 1;
          return a.parentFeatureId.localeCompare(b.parentFeatureId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjFeatureSim]中不存在!(in ${vPrjFeatureSim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvPrjFeatureSimEN.con_FeatureId:
        return (a: clsvPrjFeatureSimEN, b: clsvPrjFeatureSimEN) => {
          return b.featureId.localeCompare(a.featureId);
        };
      case clsvPrjFeatureSimEN.con_FeatureName:
        return (a: clsvPrjFeatureSimEN, b: clsvPrjFeatureSimEN) => {
          return b.featureName.localeCompare(a.featureName);
        };
      case clsvPrjFeatureSimEN.con_FeatureTypeId:
        return (a: clsvPrjFeatureSimEN, b: clsvPrjFeatureSimEN) => {
          return b.featureTypeId.localeCompare(a.featureTypeId);
        };
      case clsvPrjFeatureSimEN.con_RegionTypeId:
        return (a: clsvPrjFeatureSimEN, b: clsvPrjFeatureSimEN) => {
          return b.regionTypeId.localeCompare(a.regionTypeId);
        };
      case clsvPrjFeatureSimEN.con_InUse:
        return (b: clsvPrjFeatureSimEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsvPrjFeatureSimEN.con_ParentFeatureName:
        return (a: clsvPrjFeatureSimEN, b: clsvPrjFeatureSimEN) => {
          if (b.parentFeatureName == null) return -1;
          if (a.parentFeatureName == null) return 1;
          return b.parentFeatureName.localeCompare(a.parentFeatureName);
        };
      case clsvPrjFeatureSimEN.con_ParentFeatureId:
        return (a: clsvPrjFeatureSimEN, b: clsvPrjFeatureSimEN) => {
          if (b.parentFeatureId == null) return -1;
          if (a.parentFeatureId == null) return 1;
          return b.parentFeatureId.localeCompare(a.parentFeatureId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjFeatureSim]中不存在!(in ${vPrjFeatureSim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFeatureId:所给的关键字
 * @returns 对象
 */
export async function vPrjFeatureSim_GetNameByFeatureIdCache(strFeatureId: string) {
  if (IsNullOrEmpty(strFeatureId) == true) {
    const strMsg = Format(
      '参数:[strFeatureId]不能为空!(In clsvPrjFeatureSimWApi.GetNameByFeatureIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureId]的长度:[{0}]不正确!(clsvPrjFeatureSimWApi.GetNameByFeatureIdCache)',
      strFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPrjFeatureSimObjLstCache = await vPrjFeatureSim_GetObjLstCache();
  if (arrvPrjFeatureSimObjLstCache == null) return '';
  try {
    const arrvPrjFeatureSimSel = arrvPrjFeatureSimObjLstCache.filter(
      (x) => x.featureId == strFeatureId,
    );
    let objvPrjFeatureSim: clsvPrjFeatureSimEN;
    if (arrvPrjFeatureSimSel.length > 0) {
      objvPrjFeatureSim = arrvPrjFeatureSimSel[0];
      return objvPrjFeatureSim.featureName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strFeatureId,
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
export async function vPrjFeatureSim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvPrjFeatureSimEN.con_FeatureId:
      return (obj: clsvPrjFeatureSimEN) => {
        return obj.featureId === value;
      };
    case clsvPrjFeatureSimEN.con_FeatureName:
      return (obj: clsvPrjFeatureSimEN) => {
        return obj.featureName === value;
      };
    case clsvPrjFeatureSimEN.con_FeatureTypeId:
      return (obj: clsvPrjFeatureSimEN) => {
        return obj.featureTypeId === value;
      };
    case clsvPrjFeatureSimEN.con_RegionTypeId:
      return (obj: clsvPrjFeatureSimEN) => {
        return obj.regionTypeId === value;
      };
    case clsvPrjFeatureSimEN.con_InUse:
      return (obj: clsvPrjFeatureSimEN) => {
        return obj.inUse === value;
      };
    case clsvPrjFeatureSimEN.con_ParentFeatureName:
      return (obj: clsvPrjFeatureSimEN) => {
        return obj.parentFeatureName === value;
      };
    case clsvPrjFeatureSimEN.con_ParentFeatureId:
      return (obj: clsvPrjFeatureSimEN) => {
        return obj.parentFeatureId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vPrjFeatureSim]中不存在!(in ${vPrjFeatureSim_ConstructorName}.${strThisFuncName})`;
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
export async function vPrjFeatureSim_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvPrjFeatureSimEN.con_FeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvPrjFeatureSimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvPrjFeatureSimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFeatureId = strInValue;
  if (IsNullOrEmpty(strFeatureId) == true) {
    return '';
  }
  const objvPrjFeatureSim = await vPrjFeatureSim_GetObjByFeatureIdCache(strFeatureId);
  if (objvPrjFeatureSim == null) return '';
  if (objvPrjFeatureSim.GetFldValue(strOutFldName) == null) return '';
  return objvPrjFeatureSim.GetFldValue(strOutFldName).toString();
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
export async function vPrjFeatureSim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvPrjFeatureSimEN.con_FeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvPrjFeatureSim = await vPrjFeatureSim_GetObjLstCache();
  if (arrvPrjFeatureSim == null) return [];
  let arrvPrjFeatureSimSel = arrvPrjFeatureSim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvPrjFeatureSimSel.length == 0) return [];
  return arrvPrjFeatureSimSel.map((x) => x.featureId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vPrjFeatureSim_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vPrjFeatureSim_Controller, strAction);

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
        vPrjFeatureSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFeatureSim_ConstructorName,
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
export async function vPrjFeatureSim_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjFeatureSim_Controller, strAction);

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
        vPrjFeatureSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFeatureSim_ConstructorName,
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
export async function vPrjFeatureSim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjFeatureSim_Controller, strAction);

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
        vPrjFeatureSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFeatureSim_ConstructorName,
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
export async function vPrjFeatureSim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvPrjFeatureSimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vPrjFeatureSim_Controller, strAction);

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
      const objvPrjFeatureSim = vPrjFeatureSim_GetObjFromJsonObj(returnObj);
      return objvPrjFeatureSim;
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
        vPrjFeatureSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFeatureSim_ConstructorName,
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
export async function vPrjFeatureSim_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvPrjFeatureSimEN._CurrTabName;
  if (IsNullOrEmpty(clsvPrjFeatureSimEN.WhereFormat) == false) {
    strWhereCond = clsvPrjFeatureSimEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsvPrjFeatureSimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjFeatureSimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvPrjFeatureSimExObjLstCache: Array<clsvPrjFeatureSimEN> = CacheHelper.Get(strKey);
    const arrvPrjFeatureSimObjLstT = vPrjFeatureSim_GetObjLstByJSONObjLst(
      arrvPrjFeatureSimExObjLstCache,
    );
    return arrvPrjFeatureSimObjLstT;
  }
  try {
    const arrvPrjFeatureSimExObjLst = await vPrjFeatureSim_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvPrjFeatureSimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjFeatureSimExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjFeatureSimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjFeatureSim_ConstructorName,
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
export async function vPrjFeatureSim_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvPrjFeatureSimEN._CurrTabName;
  if (IsNullOrEmpty(clsvPrjFeatureSimEN.WhereFormat) == false) {
    strWhereCond = clsvPrjFeatureSimEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsvPrjFeatureSimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjFeatureSimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjFeatureSimExObjLstCache: Array<clsvPrjFeatureSimEN> = JSON.parse(strTempObjLst);
    const arrvPrjFeatureSimObjLstT = vPrjFeatureSim_GetObjLstByJSONObjLst(
      arrvPrjFeatureSimExObjLstCache,
    );
    return arrvPrjFeatureSimObjLstT;
  }
  try {
    const arrvPrjFeatureSimExObjLst = await vPrjFeatureSim_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvPrjFeatureSimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjFeatureSimExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjFeatureSimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjFeatureSim_ConstructorName,
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
export async function vPrjFeatureSim_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvPrjFeatureSimEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjFeatureSimObjLstCache: Array<clsvPrjFeatureSimEN> = JSON.parse(strTempObjLst);
    return arrvPrjFeatureSimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vPrjFeatureSim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvPrjFeatureSimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vPrjFeatureSim_Controller, strAction);

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
          vPrjFeatureSim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjFeatureSim_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjFeatureSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFeatureSim_ConstructorName,
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
export async function vPrjFeatureSim_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvPrjFeatureSimEN._CurrTabName;
  if (IsNullOrEmpty(clsvPrjFeatureSimEN.WhereFormat) == false) {
    strWhereCond = clsvPrjFeatureSimEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsvPrjFeatureSimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjFeatureSimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjFeatureSimExObjLstCache: Array<clsvPrjFeatureSimEN> = JSON.parse(strTempObjLst);
    const arrvPrjFeatureSimObjLstT = vPrjFeatureSim_GetObjLstByJSONObjLst(
      arrvPrjFeatureSimExObjLstCache,
    );
    return arrvPrjFeatureSimObjLstT;
  }
  try {
    const arrvPrjFeatureSimExObjLst = await vPrjFeatureSim_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvPrjFeatureSimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjFeatureSimExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjFeatureSimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjFeatureSim_ConstructorName,
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
export async function vPrjFeatureSim_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvPrjFeatureSimEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjFeatureSimObjLstCache: Array<clsvPrjFeatureSimEN> = JSON.parse(strTempObjLst);
    return arrvPrjFeatureSimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjFeatureSim_GetObjLstCache(): Promise<Array<clsvPrjFeatureSimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvPrjFeatureSimObjLstCache;
  switch (clsvPrjFeatureSimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvPrjFeatureSimObjLstCache = await vPrjFeatureSim_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvPrjFeatureSimObjLstCache = await vPrjFeatureSim_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvPrjFeatureSimObjLstCache = await vPrjFeatureSim_GetObjLstClientCache();
      break;
    default:
      arrvPrjFeatureSimObjLstCache = await vPrjFeatureSim_GetObjLstClientCache();
      break;
  }
  return arrvPrjFeatureSimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjFeatureSim_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvPrjFeatureSimObjLstCache;
  switch (clsvPrjFeatureSimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvPrjFeatureSimObjLstCache = await vPrjFeatureSim_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvPrjFeatureSimObjLstCache = await vPrjFeatureSim_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvPrjFeatureSimObjLstCache = null;
      break;
    default:
      arrvPrjFeatureSimObjLstCache = null;
      break;
  }
  return arrvPrjFeatureSimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFeatureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vPrjFeatureSim_GetSubObjLstCache(objvPrjFeatureSimCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvPrjFeatureSimObjLstCache = await vPrjFeatureSim_GetObjLstCache();
  let arrvPrjFeatureSimSel = arrvPrjFeatureSimObjLstCache;
  if (objvPrjFeatureSimCond.GetConditions().length == 0) return arrvPrjFeatureSimSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objvPrjFeatureSimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvPrjFeatureSimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPrjFeatureSimCond),
      vPrjFeatureSim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjFeatureSimEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFeatureId:关键字列表
 * @returns 对象列表
 **/
export async function vPrjFeatureSim_GetObjLstByFeatureIdLstAsync(
  arrFeatureId: Array<string>,
): Promise<Array<clsvPrjFeatureSimEN>> {
  const strThisFuncName = 'GetObjLstByFeatureIdLstAsync';
  const strAction = 'GetObjLstByFeatureIdLst';
  const strUrl = GetWebApiUrl(vPrjFeatureSim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFeatureId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vPrjFeatureSim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjFeatureSim_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjFeatureSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFeatureSim_ConstructorName,
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
 * @param arrstrFeatureIdLst:关键字列表
 * @returns 对象列表
 */
export async function vPrjFeatureSim_GetObjLstByFeatureIdLstCache(arrFeatureIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByFeatureIdLstCache';
  try {
    const arrvPrjFeatureSimObjLstCache = await vPrjFeatureSim_GetObjLstCache();
    const arrvPrjFeatureSimSel = arrvPrjFeatureSimObjLstCache.filter(
      (x) => arrFeatureIdLst.indexOf(x.featureId) > -1,
    );
    return arrvPrjFeatureSimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFeatureIdLst.join(','),
      vPrjFeatureSim_ConstructorName,
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
export async function vPrjFeatureSim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvPrjFeatureSimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vPrjFeatureSim_Controller, strAction);

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
          vPrjFeatureSim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjFeatureSim_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjFeatureSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFeatureSim_ConstructorName,
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
export async function vPrjFeatureSim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvPrjFeatureSimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vPrjFeatureSim_Controller, strAction);

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
          vPrjFeatureSim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjFeatureSim_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjFeatureSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFeatureSim_ConstructorName,
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
export async function vPrjFeatureSim_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvPrjFeatureSimEN>();
  const arrvPrjFeatureSimObjLstCache = await vPrjFeatureSim_GetObjLstCache();
  if (arrvPrjFeatureSimObjLstCache.length == 0) return arrvPrjFeatureSimObjLstCache;
  let arrvPrjFeatureSimSel = arrvPrjFeatureSimObjLstCache;
  const objvPrjFeatureSimCond = objPagerPara.conditionCollection;
  if (objvPrjFeatureSimCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsvPrjFeatureSimEN>();
  }
  //console.log("clsvPrjFeatureSimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objvPrjFeatureSimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPrjFeatureSimSel.length == 0) return arrvPrjFeatureSimSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.sort(
        vPrjFeatureSim_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.sort(objPagerPara.sortFun);
    }
    arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.slice(intStart, intEnd);
    return arrvPrjFeatureSimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPrjFeatureSim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjFeatureSimEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vPrjFeatureSim_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPrjFeatureSimEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvPrjFeatureSimEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vPrjFeatureSim_Controller, strAction);

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
          vPrjFeatureSim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjFeatureSim_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjFeatureSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFeatureSim_ConstructorName,
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
 * @param objstrFeatureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vPrjFeatureSim_IsExistRecordCache(
  objvPrjFeatureSimCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvPrjFeatureSimObjLstCache = await vPrjFeatureSim_GetObjLstCache();
  if (arrvPrjFeatureSimObjLstCache == null) return false;
  let arrvPrjFeatureSimSel = arrvPrjFeatureSimObjLstCache;
  if (objvPrjFeatureSimCond.GetConditions().length == 0)
    return arrvPrjFeatureSimSel.length > 0 ? true : false;
  try {
    for (const objCondition of objvPrjFeatureSimCond.GetConditions()) {
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
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPrjFeatureSimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvPrjFeatureSimCond),
      vPrjFeatureSim_ConstructorName,
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
export async function vPrjFeatureSim_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vPrjFeatureSim_Controller, strAction);

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
        vPrjFeatureSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFeatureSim_ConstructorName,
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
 * @param strFeatureId:所给的关键字
 * @returns 对象
 */
export async function vPrjFeatureSim_IsExistCache(strFeatureId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvPrjFeatureSimObjLstCache = await vPrjFeatureSim_GetObjLstCache();
  if (arrvPrjFeatureSimObjLstCache == null) return false;
  try {
    const arrvPrjFeatureSimSel = arrvPrjFeatureSimObjLstCache.filter(
      (x) => x.featureId == strFeatureId,
    );
    if (arrvPrjFeatureSimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFeatureId,
      vPrjFeatureSim_ConstructorName,
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
 * @param strFeatureId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vPrjFeatureSim_IsExistAsync(strFeatureId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vPrjFeatureSim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFeatureId,
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
        vPrjFeatureSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFeatureSim_ConstructorName,
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
export async function vPrjFeatureSim_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vPrjFeatureSim_Controller, strAction);

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
        vPrjFeatureSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjFeatureSim_ConstructorName,
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
 * @param objvPrjFeatureSimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vPrjFeatureSim_GetRecCountByCondCache(
  objvPrjFeatureSimCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvPrjFeatureSimObjLstCache = await vPrjFeatureSim_GetObjLstCache();
  if (arrvPrjFeatureSimObjLstCache == null) return 0;
  let arrvPrjFeatureSimSel = arrvPrjFeatureSimObjLstCache;
  if (objvPrjFeatureSimCond.GetConditions().length == 0) return arrvPrjFeatureSimSel.length;
  try {
    for (const objCondition of objvPrjFeatureSimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjFeatureSimSel = arrvPrjFeatureSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvPrjFeatureSimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPrjFeatureSimCond),
      vPrjFeatureSim_ConstructorName,
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
export function vPrjFeatureSim_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vPrjFeatureSim_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvPrjFeatureSimEN._CurrTabName;
    switch (clsvPrjFeatureSimEN.CacheModeId) {
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
    clsvPrjFeatureSimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function vPrjFeatureSim_GetLastRefreshTime(): string {
  if (clsvPrjFeatureSimEN._RefreshTimeLst.length == 0) return '';
  return clsvPrjFeatureSimEN._RefreshTimeLst[clsvPrjFeatureSimEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strFeatureTypeId:
*/
export async function vPrjFeatureSim_BindDdl_FeatureIdByFeatureTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strFeatureTypeId: string,
) {
  if (IsNullOrEmpty(strFeatureTypeId) == true) {
    const strMsg = Format(
      '参数:[strFeatureTypeId]不能为空！(In clsvPrjFeatureSimWApi.BindDdl_FeatureIdByFeatureTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureTypeId]的长度:[{0}]不正确！(clsvPrjFeatureSimWApi.BindDdl_FeatureIdByFeatureTypeIdInDiv)',
      strFeatureTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_FeatureIdByFeatureTypeIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FeatureIdByFeatureTypeIdInDivCache");
  let arrObjLstSel = await vPrjFeatureSim_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.featureTypeId == strFeatureTypeId);
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvPrjFeatureSimEN.con_FeatureId,
    clsvPrjFeatureSimEN.con_FeatureName,
    '选功能...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strFeatureTypeId:
*/
export async function vPrjFeatureSim_GetArrvPrjFeatureSimByFeatureTypeId(strFeatureTypeId: string) {
  if (IsNullOrEmpty(strFeatureTypeId) == true) {
    const strMsg = Format(
      '参数:[strFeatureTypeId]不能为空！(In clsvPrjFeatureSimWApi.BindDdl_FeatureIdByFeatureTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureTypeId]的长度:[{0}]不正确！(clsvPrjFeatureSimWApi.BindDdl_FeatureIdByFeatureTypeIdInDiv)',
      strFeatureTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FeatureIdByFeatureTypeIdInDivCache");
  const arrvPrjFeatureSim = new Array<clsvPrjFeatureSimEN>();
  let arrObjLstSel = await vPrjFeatureSim_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.featureTypeId == strFeatureTypeId);
  const obj0 = new clsvPrjFeatureSimEN();
  obj0.featureId = '0';
  obj0.featureName = '选功能...';
  arrvPrjFeatureSim.push(obj0);
  arrObjLstSel.forEach((x) => arrvPrjFeatureSim.push(x));
  return arrvPrjFeatureSim;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPrjFeatureSim_GetJSONStrByObj(pobjvPrjFeatureSimEN: clsvPrjFeatureSimEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvPrjFeatureSimEN);
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
export function vPrjFeatureSim_GetObjLstByJSONStr(strJSON: string): Array<clsvPrjFeatureSimEN> {
  let arrvPrjFeatureSimObjLst = new Array<clsvPrjFeatureSimEN>();
  if (strJSON === '') {
    return arrvPrjFeatureSimObjLst;
  }
  try {
    arrvPrjFeatureSimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvPrjFeatureSimObjLst;
  }
  return arrvPrjFeatureSimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvPrjFeatureSimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vPrjFeatureSim_GetObjLstByJSONObjLst(
  arrvPrjFeatureSimObjLstS: Array<clsvPrjFeatureSimEN>,
): Array<clsvPrjFeatureSimEN> {
  const arrvPrjFeatureSimObjLst = new Array<clsvPrjFeatureSimEN>();
  for (const objInFor of arrvPrjFeatureSimObjLstS) {
    const obj1 = vPrjFeatureSim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvPrjFeatureSimObjLst.push(obj1);
  }
  return arrvPrjFeatureSimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPrjFeatureSim_GetObjByJSONStr(strJSON: string): clsvPrjFeatureSimEN {
  let pobjvPrjFeatureSimEN = new clsvPrjFeatureSimEN();
  if (strJSON === '') {
    return pobjvPrjFeatureSimEN;
  }
  try {
    pobjvPrjFeatureSimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvPrjFeatureSimEN;
  }
  return pobjvPrjFeatureSimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vPrjFeatureSim_GetCombineCondition(
  objvPrjFeatureSimCond: clsvPrjFeatureSimEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFeatureSimCond.dicFldComparisonOp,
      clsvPrjFeatureSimEN.con_FeatureId,
    ) == true
  ) {
    const strComparisonOpFeatureId: string =
      objvPrjFeatureSimCond.dicFldComparisonOp[clsvPrjFeatureSimEN.con_FeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFeatureSimEN.con_FeatureId,
      objvPrjFeatureSimCond.featureId,
      strComparisonOpFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFeatureSimCond.dicFldComparisonOp,
      clsvPrjFeatureSimEN.con_FeatureName,
    ) == true
  ) {
    const strComparisonOpFeatureName: string =
      objvPrjFeatureSimCond.dicFldComparisonOp[clsvPrjFeatureSimEN.con_FeatureName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFeatureSimEN.con_FeatureName,
      objvPrjFeatureSimCond.featureName,
      strComparisonOpFeatureName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFeatureSimCond.dicFldComparisonOp,
      clsvPrjFeatureSimEN.con_FeatureTypeId,
    ) == true
  ) {
    const strComparisonOpFeatureTypeId: string =
      objvPrjFeatureSimCond.dicFldComparisonOp[clsvPrjFeatureSimEN.con_FeatureTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFeatureSimEN.con_FeatureTypeId,
      objvPrjFeatureSimCond.featureTypeId,
      strComparisonOpFeatureTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFeatureSimCond.dicFldComparisonOp,
      clsvPrjFeatureSimEN.con_RegionTypeId,
    ) == true
  ) {
    const strComparisonOpRegionTypeId: string =
      objvPrjFeatureSimCond.dicFldComparisonOp[clsvPrjFeatureSimEN.con_RegionTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFeatureSimEN.con_RegionTypeId,
      objvPrjFeatureSimCond.regionTypeId,
      strComparisonOpRegionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFeatureSimCond.dicFldComparisonOp,
      clsvPrjFeatureSimEN.con_InUse,
    ) == true
  ) {
    if (objvPrjFeatureSimCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsvPrjFeatureSimEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvPrjFeatureSimEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFeatureSimCond.dicFldComparisonOp,
      clsvPrjFeatureSimEN.con_ParentFeatureName,
    ) == true
  ) {
    const strComparisonOpParentFeatureName: string =
      objvPrjFeatureSimCond.dicFldComparisonOp[clsvPrjFeatureSimEN.con_ParentFeatureName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFeatureSimEN.con_ParentFeatureName,
      objvPrjFeatureSimCond.parentFeatureName,
      strComparisonOpParentFeatureName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjFeatureSimCond.dicFldComparisonOp,
      clsvPrjFeatureSimEN.con_ParentFeatureId,
    ) == true
  ) {
    const strComparisonOpParentFeatureId: string =
      objvPrjFeatureSimCond.dicFldComparisonOp[clsvPrjFeatureSimEN.con_ParentFeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjFeatureSimEN.con_ParentFeatureId,
      objvPrjFeatureSimCond.parentFeatureId,
      strComparisonOpParentFeatureId,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvPrjFeatureSimENS:源对象
 * @param objvPrjFeatureSimENT:目标对象
 */
export function vPrjFeatureSim_GetObjFromJsonObj(
  objvPrjFeatureSimENS: clsvPrjFeatureSimEN,
): clsvPrjFeatureSimEN {
  const objvPrjFeatureSimENT: clsvPrjFeatureSimEN = new clsvPrjFeatureSimEN();
  ObjectAssign(objvPrjFeatureSimENT, objvPrjFeatureSimENS);
  return objvPrjFeatureSimENT;
}
