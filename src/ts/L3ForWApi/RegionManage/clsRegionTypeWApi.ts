/**
 * 类名:clsRegionTypeWApi
 * 表名:RegionType(00050081)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 14:35:09
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 区域类型(RegionType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月10日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import {
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const regionType_Controller = 'RegionTypeApi';
export const regionType_ConstructorName = 'regionType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRegionTypeId:关键字
 * @returns 对象
 **/
export async function RegionType_GetObjByRegionTypeIdAsync(
  strRegionTypeId: string,
): Promise<clsRegionTypeEN | null> {
  const strThisFuncName = 'GetObjByRegionTypeIdAsync';

  if (IsNullOrEmpty(strRegionTypeId) == true) {
    const strMsg = Format(
      '参数:[strRegionTypeId]不能为空!(In clsRegionTypeWApi.GetObjByRegionTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strRegionTypeId]的长度:[{0}]不正确!(clsRegionTypeWApi.GetObjByRegionTypeIdAsync)',
      strRegionTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByRegionTypeId';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRegionTypeId,
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
      const objRegionType = RegionType_GetObjFromJsonObj(returnObj);
      return objRegionType;
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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param strRegionTypeId:所给的关键字
 * @returns 对象
 */
export async function RegionType_GetObjByRegionTypeIdlocalStorage(strRegionTypeId: string) {
  const strThisFuncName = 'GetObjByRegionTypeIdlocalStorage';

  if (IsNullOrEmpty(strRegionTypeId) == true) {
    const strMsg = Format(
      '参数:[strRegionTypeId]不能为空!(In clsRegionTypeWApi.GetObjByRegionTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strRegionTypeId]的长度:[{0}]不正确!(clsRegionTypeWApi.GetObjByRegionTypeIdlocalStorage)',
      strRegionTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsRegionTypeEN._CurrTabName, strRegionTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objRegionTypeCache: clsRegionTypeEN = JSON.parse(strTempObj);
    return objRegionTypeCache;
  }
  try {
    const objRegionType = await RegionType_GetObjByRegionTypeIdAsync(strRegionTypeId);
    if (objRegionType != null) {
      localStorage.setItem(strKey, JSON.stringify(objRegionType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objRegionType;
    }
    return objRegionType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRegionTypeId,
      regionType_ConstructorName,
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
 * @param strRegionTypeId:所给的关键字
 * @returns 对象
 */
export async function RegionType_GetObjByRegionTypeIdCache(
  strRegionTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByRegionTypeIdCache';

  if (IsNullOrEmpty(strRegionTypeId) == true) {
    const strMsg = Format(
      '参数:[strRegionTypeId]不能为空!(In clsRegionTypeWApi.GetObjByRegionTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strRegionTypeId]的长度:[{0}]不正确!(clsRegionTypeWApi.GetObjByRegionTypeIdCache)',
      strRegionTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrRegionTypeObjLstCache = await RegionType_GetObjLstCache();
  try {
    const arrRegionTypeSel = arrRegionTypeObjLstCache.filter(
      (x) => x.regionTypeId == strRegionTypeId,
    );
    let objRegionType: clsRegionTypeEN;
    if (arrRegionTypeSel.length > 0) {
      objRegionType = arrRegionTypeSel[0];
      return objRegionType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objRegionTypeConst = await RegionType_GetObjByRegionTypeIdAsync(strRegionTypeId);
        if (objRegionTypeConst != null) {
          RegionType_ReFreshThisCache();
          return objRegionTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRegionTypeId,
      regionType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objRegionType:所给的对象
 * @returns 对象
 */
export async function RegionType_UpdateObjInLstCache(objRegionType: clsRegionTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrRegionTypeObjLstCache = await RegionType_GetObjLstCache();
    const obj = arrRegionTypeObjLstCache.find((x) => x.regionTypeId == objRegionType.regionTypeId);
    if (obj != null) {
      objRegionType.regionTypeId = obj.regionTypeId;
      ObjectAssign(obj, objRegionType);
    } else {
      arrRegionTypeObjLstCache.push(objRegionType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      regionType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function RegionType_SortFunDefa(a: clsRegionTypeEN, b: clsRegionTypeEN): number {
  return a.regionTypeId.localeCompare(b.regionTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function RegionType_SortFunDefa2Fld(a: clsRegionTypeEN, b: clsRegionTypeEN): number {
  if (a.regionTypeName == b.regionTypeName)
    return a.regionTypeENName.localeCompare(b.regionTypeENName);
  else return a.regionTypeName.localeCompare(b.regionTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function RegionType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsRegionTypeEN.con_RegionTypeId:
        return (a: clsRegionTypeEN, b: clsRegionTypeEN) => {
          return a.regionTypeId.localeCompare(b.regionTypeId);
        };
      case clsRegionTypeEN.con_RegionTypeName:
        return (a: clsRegionTypeEN, b: clsRegionTypeEN) => {
          return a.regionTypeName.localeCompare(b.regionTypeName);
        };
      case clsRegionTypeEN.con_RegionTypeENName:
        return (a: clsRegionTypeEN, b: clsRegionTypeEN) => {
          if (a.regionTypeENName == null) return -1;
          if (b.regionTypeENName == null) return 1;
          return a.regionTypeENName.localeCompare(b.regionTypeENName);
        };
      case clsRegionTypeEN.con_RegionTypeSimName:
        return (a: clsRegionTypeEN, b: clsRegionTypeEN) => {
          if (a.regionTypeSimName == null) return -1;
          if (b.regionTypeSimName == null) return 1;
          return a.regionTypeSimName.localeCompare(b.regionTypeSimName);
        };
      case clsRegionTypeEN.con_DefaWidth:
        return (a: clsRegionTypeEN, b: clsRegionTypeEN) => {
          return a.defaWidth - b.defaWidth;
        };
      case clsRegionTypeEN.con_RegionTypeOrderNum:
        return (a: clsRegionTypeEN, b: clsRegionTypeEN) => {
          return a.regionTypeOrderNum - b.regionTypeOrderNum;
        };
      case clsRegionTypeEN.con_Memo:
        return (a: clsRegionTypeEN, b: clsRegionTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[RegionType]中不存在!(in ${regionType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsRegionTypeEN.con_RegionTypeId:
        return (a: clsRegionTypeEN, b: clsRegionTypeEN) => {
          return b.regionTypeId.localeCompare(a.regionTypeId);
        };
      case clsRegionTypeEN.con_RegionTypeName:
        return (a: clsRegionTypeEN, b: clsRegionTypeEN) => {
          return b.regionTypeName.localeCompare(a.regionTypeName);
        };
      case clsRegionTypeEN.con_RegionTypeENName:
        return (a: clsRegionTypeEN, b: clsRegionTypeEN) => {
          if (b.regionTypeENName == null) return -1;
          if (a.regionTypeENName == null) return 1;
          return b.regionTypeENName.localeCompare(a.regionTypeENName);
        };
      case clsRegionTypeEN.con_RegionTypeSimName:
        return (a: clsRegionTypeEN, b: clsRegionTypeEN) => {
          if (b.regionTypeSimName == null) return -1;
          if (a.regionTypeSimName == null) return 1;
          return b.regionTypeSimName.localeCompare(a.regionTypeSimName);
        };
      case clsRegionTypeEN.con_DefaWidth:
        return (a: clsRegionTypeEN, b: clsRegionTypeEN) => {
          return b.defaWidth - a.defaWidth;
        };
      case clsRegionTypeEN.con_RegionTypeOrderNum:
        return (a: clsRegionTypeEN, b: clsRegionTypeEN) => {
          return b.regionTypeOrderNum - a.regionTypeOrderNum;
        };
      case clsRegionTypeEN.con_Memo:
        return (a: clsRegionTypeEN, b: clsRegionTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[RegionType]中不存在!(in ${regionType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strRegionTypeId:所给的关键字
 * @returns 对象
 */
export async function RegionType_GetNameByRegionTypeIdCache(strRegionTypeId: string) {
  if (IsNullOrEmpty(strRegionTypeId) == true) {
    const strMsg = Format(
      '参数:[strRegionTypeId]不能为空!(In clsRegionTypeWApi.GetNameByRegionTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strRegionTypeId]的长度:[{0}]不正确!(clsRegionTypeWApi.GetNameByRegionTypeIdCache)',
      strRegionTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrRegionTypeObjLstCache = await RegionType_GetObjLstCache();
  if (arrRegionTypeObjLstCache == null) return '';
  try {
    const arrRegionTypeSel = arrRegionTypeObjLstCache.filter(
      (x) => x.regionTypeId == strRegionTypeId,
    );
    let objRegionType: clsRegionTypeEN;
    if (arrRegionTypeSel.length > 0) {
      objRegionType = arrRegionTypeSel[0];
      return objRegionType.regionTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strRegionTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function RegionType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsRegionTypeEN.con_RegionTypeId:
      return (obj: clsRegionTypeEN) => {
        return obj.regionTypeId === value;
      };
    case clsRegionTypeEN.con_RegionTypeName:
      return (obj: clsRegionTypeEN) => {
        return obj.regionTypeName === value;
      };
    case clsRegionTypeEN.con_RegionTypeENName:
      return (obj: clsRegionTypeEN) => {
        return obj.regionTypeENName === value;
      };
    case clsRegionTypeEN.con_RegionTypeSimName:
      return (obj: clsRegionTypeEN) => {
        return obj.regionTypeSimName === value;
      };
    case clsRegionTypeEN.con_DefaWidth:
      return (obj: clsRegionTypeEN) => {
        return obj.defaWidth === value;
      };
    case clsRegionTypeEN.con_RegionTypeOrderNum:
      return (obj: clsRegionTypeEN) => {
        return obj.regionTypeOrderNum === value;
      };
    case clsRegionTypeEN.con_Memo:
      return (obj: clsRegionTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[RegionType]中不存在!(in ${regionType_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function RegionType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsRegionTypeEN.con_RegionTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsRegionTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsRegionTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strRegionTypeId = strInValue;
  if (IsNullOrEmpty(strRegionTypeId) == true) {
    return '';
  }
  const objRegionType = await RegionType_GetObjByRegionTypeIdCache(strRegionTypeId);
  if (objRegionType == null) return '';
  if (objRegionType.GetFldValue(strOutFldName) == null) return '';
  return objRegionType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function RegionType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsRegionTypeEN.con_RegionTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrRegionType = await RegionType_GetObjLstCache();
  if (arrRegionType == null) return [];
  let arrRegionTypeSel = arrRegionType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrRegionTypeSel = arrRegionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrRegionTypeSel = arrRegionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrRegionTypeSel = arrRegionTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrRegionTypeSel = arrRegionTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrRegionTypeSel = arrRegionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrRegionTypeSel = arrRegionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrRegionTypeSel = arrRegionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrRegionTypeSel = arrRegionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrRegionTypeSel = arrRegionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrRegionTypeSel = arrRegionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrRegionTypeSel.length == 0) return [];
  return arrRegionTypeSel.map((x) => x.regionTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function RegionType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
export async function RegionType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
export async function RegionType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
export async function RegionType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsRegionTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
      const objRegionType = RegionType_GetObjFromJsonObj(returnObj);
      return objRegionType;
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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
export async function RegionType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRegionTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsRegionTypeEN.WhereFormat) == false) {
    strWhereCond = clsRegionTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsRegionTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRegionTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrRegionTypeExObjLstCache: Array<clsRegionTypeEN> = CacheHelper.Get(strKey);
    const arrRegionTypeObjLstT = RegionType_GetObjLstByJSONObjLst(arrRegionTypeExObjLstCache);
    return arrRegionTypeObjLstT;
  }
  try {
    const arrRegionTypeExObjLst = await RegionType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrRegionTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRegionTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrRegionTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      regionType_ConstructorName,
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
export async function RegionType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRegionTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsRegionTypeEN.WhereFormat) == false) {
    strWhereCond = clsRegionTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsRegionTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRegionTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrRegionTypeExObjLstCache: Array<clsRegionTypeEN> = JSON.parse(strTempObjLst);
    const arrRegionTypeObjLstT = RegionType_GetObjLstByJSONObjLst(arrRegionTypeExObjLstCache);
    return arrRegionTypeObjLstT;
  }
  try {
    const arrRegionTypeExObjLst = await RegionType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrRegionTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRegionTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrRegionTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      regionType_ConstructorName,
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
export async function RegionType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsRegionTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrRegionTypeObjLstCache: Array<clsRegionTypeEN> = JSON.parse(strTempObjLst);
    return arrRegionTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function RegionType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsRegionTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
          regionType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RegionType_GetObjLstByJSONObjLst(returnObjLst);
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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
export async function RegionType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRegionTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsRegionTypeEN.WhereFormat) == false) {
    strWhereCond = clsRegionTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsRegionTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRegionTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrRegionTypeExObjLstCache: Array<clsRegionTypeEN> = JSON.parse(strTempObjLst);
    const arrRegionTypeObjLstT = RegionType_GetObjLstByJSONObjLst(arrRegionTypeExObjLstCache);
    return arrRegionTypeObjLstT;
  }
  try {
    const arrRegionTypeExObjLst = await RegionType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrRegionTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRegionTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrRegionTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      regionType_ConstructorName,
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
export async function RegionType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsRegionTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrRegionTypeObjLstCache: Array<clsRegionTypeEN> = JSON.parse(strTempObjLst);
    return arrRegionTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function RegionType_GetObjLstCache(): Promise<Array<clsRegionTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrRegionTypeObjLstCache;
  switch (clsRegionTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrRegionTypeObjLstCache = await RegionType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrRegionTypeObjLstCache = await RegionType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrRegionTypeObjLstCache = await RegionType_GetObjLstClientCache();
      break;
    default:
      arrRegionTypeObjLstCache = await RegionType_GetObjLstClientCache();
      break;
  }
  return arrRegionTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function RegionType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrRegionTypeObjLstCache;
  switch (clsRegionTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrRegionTypeObjLstCache = await RegionType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrRegionTypeObjLstCache = await RegionType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrRegionTypeObjLstCache = null;
      break;
    default:
      arrRegionTypeObjLstCache = null;
      break;
  }
  return arrRegionTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrRegionTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function RegionType_GetSubObjLstCache(objRegionTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrRegionTypeObjLstCache = await RegionType_GetObjLstCache();
  let arrRegionTypeSel = arrRegionTypeObjLstCache;
  if (objRegionTypeCond.GetConditions().length == 0) return arrRegionTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objRegionTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrRegionTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objRegionTypeCond),
      regionType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsRegionTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrRegionTypeId:关键字列表
 * @returns 对象列表
 **/
export async function RegionType_GetObjLstByRegionTypeIdLstAsync(
  arrRegionTypeId: Array<string>,
): Promise<Array<clsRegionTypeEN>> {
  const strThisFuncName = 'GetObjLstByRegionTypeIdLstAsync';
  const strAction = 'GetObjLstByRegionTypeIdLst';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRegionTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          regionType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RegionType_GetObjLstByJSONObjLst(returnObjLst);
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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param arrstrRegionTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function RegionType_GetObjLstByRegionTypeIdLstCache(
  arrRegionTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByRegionTypeIdLstCache';
  try {
    const arrRegionTypeObjLstCache = await RegionType_GetObjLstCache();
    const arrRegionTypeSel = arrRegionTypeObjLstCache.filter(
      (x) => arrRegionTypeIdLst.indexOf(x.regionTypeId) > -1,
    );
    return arrRegionTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrRegionTypeIdLst.join(','),
      regionType_ConstructorName,
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
export async function RegionType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsRegionTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
          regionType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RegionType_GetObjLstByJSONObjLst(returnObjLst);
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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
export async function RegionType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsRegionTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
          regionType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RegionType_GetObjLstByJSONObjLst(returnObjLst);
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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
export async function RegionType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsRegionTypeEN>();
  const arrRegionTypeObjLstCache = await RegionType_GetObjLstCache();
  if (arrRegionTypeObjLstCache.length == 0) return arrRegionTypeObjLstCache;
  let arrRegionTypeSel = arrRegionTypeObjLstCache;
  const objRegionTypeCond = objPagerPara.conditionCollection;
  if (objRegionTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsRegionTypeEN>();
  }
  //console.log("clsRegionTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objRegionTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrRegionTypeSel.length == 0) return arrRegionTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrRegionTypeSel = arrRegionTypeSel.sort(RegionType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrRegionTypeSel = arrRegionTypeSel.sort(objPagerPara.sortFun);
    }
    arrRegionTypeSel = arrRegionTypeSel.slice(intStart, intEnd);
    return arrRegionTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      regionType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsRegionTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function RegionType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsRegionTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsRegionTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
          regionType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RegionType_GetObjLstByJSONObjLst(returnObjLst);
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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param strRegionTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function RegionType_DelRecordAsync(strRegionTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(regionType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strRegionTypeId);

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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param arrRegionTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function RegionType_DelRegionTypesAsync(
  arrRegionTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelRegionTypesAsync';
  const strAction = 'DelRegionTypes';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRegionTypeId, config);
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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
export async function RegionType_DelRegionTypesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelRegionTypesByCondAsync';
  const strAction = 'DelRegionTypesByCond';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param objRegionTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RegionType_AddNewRecordAsync(
  objRegionTypeEN: clsRegionTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objRegionTypeEN.regionTypeId === null || objRegionTypeEN.regionTypeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objRegionTypeEN);
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRegionTypeEN, config);
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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param objRegionTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RegionType_AddNewRecordWithMaxIdAsync(
  objRegionTypeEN: clsRegionTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRegionTypeEN, config);
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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param objRegionTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RegionType_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param objRegionTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RegionType_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objRegionTypeEN);
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param objRegionTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RegionType_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objRegionTypeEN);
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
export async function RegionType_AddNewObjSave(
  objRegionTypeEN: clsRegionTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    RegionType_CheckPropertyNew(objRegionTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${regionType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await RegionType_IsExistAsync(objRegionTypeEN.regionTypeId);
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objRegionTypeEN.regionTypeId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await RegionType_AddNewRecordAsync(objRegionTypeEN);
    if (returnBool == true) {
      RegionType_ReFreshCache();
    } else {
      const strInfo = `添加[区域类型(RegionType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objRegionTypeEN.regionTypeId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${regionType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function RegionType_UpdateObjSave(objRegionTypeEN: clsRegionTypeEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objRegionTypeEN.sfUpdFldSetStr = objRegionTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objRegionTypeEN.regionTypeId == '' || objRegionTypeEN.regionTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    RegionType_CheckProperty4Update(objRegionTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${regionType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await RegionType_UpdateRecordAsync(objRegionTypeEN);
    if (returnBool == true) {
      RegionType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${regionType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objRegionTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RegionType_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objRegionTypeEN);
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param objRegionTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RegionType_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objRegionTypeEN);
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param objRegionTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function RegionType_AddNewRecordWithReturnKeyAsync(
  objRegionTypeEN: clsRegionTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRegionTypeEN, config);
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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param objRegionTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function RegionType_UpdateRecordAsync(
  objRegionTypeEN: clsRegionTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objRegionTypeEN.sfUpdFldSetStr === undefined ||
    objRegionTypeEN.sfUpdFldSetStr === null ||
    objRegionTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objRegionTypeEN.regionTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRegionTypeEN, config);
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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param objRegionTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function RegionType_EditRecordExAsync(
  objRegionTypeEN: clsRegionTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objRegionTypeEN.sfUpdFldSetStr === undefined ||
    objRegionTypeEN.sfUpdFldSetStr === null ||
    objRegionTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objRegionTypeEN.regionTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRegionTypeEN, config);
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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param objRegionTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function RegionType_UpdateWithConditionAsync(
  objRegionTypeEN: clsRegionTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objRegionTypeEN.sfUpdFldSetStr === undefined ||
    objRegionTypeEN.sfUpdFldSetStr === null ||
    objRegionTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objRegionTypeEN.regionTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);
  objRegionTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRegionTypeEN, config);
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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param objstrRegionTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function RegionType_IsExistRecordCache(objRegionTypeCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrRegionTypeObjLstCache = await RegionType_GetObjLstCache();
  if (arrRegionTypeObjLstCache == null) return false;
  let arrRegionTypeSel = arrRegionTypeObjLstCache;
  if (objRegionTypeCond.GetConditions().length == 0)
    return arrRegionTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objRegionTypeCond.GetConditions()) {
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
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrRegionTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objRegionTypeCond),
      regionType_ConstructorName,
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
export async function RegionType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param strRegionTypeId:所给的关键字
 * @returns 对象
 */
export async function RegionType_IsExistCache(strRegionTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrRegionTypeObjLstCache = await RegionType_GetObjLstCache();
  if (arrRegionTypeObjLstCache == null) return false;
  try {
    const arrRegionTypeSel = arrRegionTypeObjLstCache.filter(
      (x) => x.regionTypeId == strRegionTypeId,
    );
    if (arrRegionTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strRegionTypeId,
      regionType_ConstructorName,
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
 * @param strRegionTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function RegionType_IsExistAsync(strRegionTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRegionTypeId,
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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
export async function RegionType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
 * @param objRegionTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function RegionType_GetRecCountByCondCache(objRegionTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrRegionTypeObjLstCache = await RegionType_GetObjLstCache();
  if (arrRegionTypeObjLstCache == null) return 0;
  let arrRegionTypeSel = arrRegionTypeObjLstCache;
  if (objRegionTypeCond.GetConditions().length == 0) return arrRegionTypeSel.length;
  try {
    for (const objCondition of objRegionTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrRegionTypeSel = arrRegionTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRegionTypeSel = arrRegionTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrRegionTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objRegionTypeCond),
      regionType_ConstructorName,
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
export async function RegionType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(regionType_Controller, strAction);

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
        regionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        regionType_ConstructorName,
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
export function RegionType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function RegionType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsRegionTypeEN._CurrTabName;
  switch (clsRegionTypeEN.CacheModeId) {
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
  clsRegionTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function RegionType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsRegionTypeEN._CurrTabName;
    switch (clsRegionTypeEN.CacheModeId) {
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
    clsRegionTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function RegionType_GetLastRefreshTime(): string {
  if (clsRegionTypeEN._RefreshTimeLst.length == 0) return '';
  return clsRegionTypeEN._RefreshTimeLst[clsRegionTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function RegionType_BindDdl_RegionTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_RegionTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_RegionTypeIdInDivCache");
  let arrObjLstSel = await RegionType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.regionTypeOrderNum - y.regionTypeOrderNum);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsRegionTypeEN.con_RegionTypeId,
    clsRegionTypeEN.con_RegionTypeName,
    '区域类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function RegionType_GetArrRegionType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_RegionTypeIdInDivCache");
  const arrRegionType = new Array<clsRegionTypeEN>();
  let arrObjLstSel = await RegionType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.regionTypeOrderNum - y.regionTypeOrderNum);
  const obj0 = new clsRegionTypeEN();
  obj0.regionTypeId = '0';
  obj0.regionTypeName = '选区域类型...';
  arrRegionType.push(obj0);
  arrObjLstSel.forEach((x) => arrRegionType.push(x));
  return arrRegionType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function RegionType_CheckPropertyNew(pobjRegionTypeEN: clsRegionTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjRegionTypeEN.regionTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[区域类型名称]不能为空(In 区域类型)!(clsRegionTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeId) == false &&
    GetStrLen(pobjRegionTypeEN.regionTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域类型Id(regionTypeId)]的长度不能超过4(In 区域类型(RegionType))!值:${pobjRegionTypeEN.regionTypeId}(clsRegionTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeName) == false &&
    GetStrLen(pobjRegionTypeEN.regionTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域类型名称(regionTypeName)]的长度不能超过30(In 区域类型(RegionType))!值:${pobjRegionTypeEN.regionTypeName}(clsRegionTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeENName) == false &&
    GetStrLen(pobjRegionTypeEN.regionTypeENName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域类型英文名(regionTypeENName)]的长度不能超过30(In 区域类型(RegionType))!值:${pobjRegionTypeEN.regionTypeENName}(clsRegionTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeSimName) == false &&
    GetStrLen(pobjRegionTypeEN.regionTypeSimName) > 10
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域类型简名(regionTypeSimName)]的长度不能超过10(In 区域类型(RegionType))!值:${pobjRegionTypeEN.regionTypeSimName}(clsRegionTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjRegionTypeEN.memo) == false && GetStrLen(pobjRegionTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 区域类型(RegionType))!值:${pobjRegionTypeEN.memo}(clsRegionTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeId) == false &&
    undefined !== pobjRegionTypeEN.regionTypeId &&
    tzDataType.isString(pobjRegionTypeEN.regionTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域类型Id(regionTypeId)]的值:[${pobjRegionTypeEN.regionTypeId}], 非法,应该为字符型(In 区域类型(RegionType))!(clsRegionTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeName) == false &&
    undefined !== pobjRegionTypeEN.regionTypeName &&
    tzDataType.isString(pobjRegionTypeEN.regionTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域类型名称(regionTypeName)]的值:[${pobjRegionTypeEN.regionTypeName}], 非法,应该为字符型(In 区域类型(RegionType))!(clsRegionTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeENName) == false &&
    undefined !== pobjRegionTypeEN.regionTypeENName &&
    tzDataType.isString(pobjRegionTypeEN.regionTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域类型英文名(regionTypeENName)]的值:[${pobjRegionTypeEN.regionTypeENName}], 非法,应该为字符型(In 区域类型(RegionType))!(clsRegionTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeSimName) == false &&
    undefined !== pobjRegionTypeEN.regionTypeSimName &&
    tzDataType.isString(pobjRegionTypeEN.regionTypeSimName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域类型简名(regionTypeSimName)]的值:[${pobjRegionTypeEN.regionTypeSimName}], 非法,应该为字符型(In 区域类型(RegionType))!(clsRegionTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjRegionTypeEN.defaWidth &&
    undefined !== pobjRegionTypeEN.defaWidth &&
    tzDataType.isNumber(pobjRegionTypeEN.defaWidth) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缺省宽度(defaWidth)]的值:[${pobjRegionTypeEN.defaWidth}], 非法,应该为数值型(In 区域类型(RegionType))!(clsRegionTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjRegionTypeEN.regionTypeOrderNum &&
    undefined !== pobjRegionTypeEN.regionTypeOrderNum &&
    tzDataType.isNumber(pobjRegionTypeEN.regionTypeOrderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域类型序号(regionTypeOrderNum)]的值:[${pobjRegionTypeEN.regionTypeOrderNum}], 非法,应该为数值型(In 区域类型(RegionType))!(clsRegionTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRegionTypeEN.memo) == false &&
    undefined !== pobjRegionTypeEN.memo &&
    tzDataType.isString(pobjRegionTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjRegionTypeEN.memo}], 非法,应该为字符型(In 区域类型(RegionType))!(clsRegionTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function RegionType_CheckProperty4Update(pobjRegionTypeEN: clsRegionTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeId) == false &&
    GetStrLen(pobjRegionTypeEN.regionTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域类型Id(regionTypeId)]的长度不能超过4(In 区域类型(RegionType))!值:${pobjRegionTypeEN.regionTypeId}(clsRegionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeName) == false &&
    GetStrLen(pobjRegionTypeEN.regionTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域类型名称(regionTypeName)]的长度不能超过30(In 区域类型(RegionType))!值:${pobjRegionTypeEN.regionTypeName}(clsRegionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeENName) == false &&
    GetStrLen(pobjRegionTypeEN.regionTypeENName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域类型英文名(regionTypeENName)]的长度不能超过30(In 区域类型(RegionType))!值:${pobjRegionTypeEN.regionTypeENName}(clsRegionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeSimName) == false &&
    GetStrLen(pobjRegionTypeEN.regionTypeSimName) > 10
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域类型简名(regionTypeSimName)]的长度不能超过10(In 区域类型(RegionType))!值:${pobjRegionTypeEN.regionTypeSimName}(clsRegionTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjRegionTypeEN.memo) == false && GetStrLen(pobjRegionTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 区域类型(RegionType))!值:${pobjRegionTypeEN.memo}(clsRegionTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeId) == false &&
    undefined !== pobjRegionTypeEN.regionTypeId &&
    tzDataType.isString(pobjRegionTypeEN.regionTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域类型Id(regionTypeId)]的值:[${pobjRegionTypeEN.regionTypeId}], 非法,应该为字符型(In 区域类型(RegionType))!(clsRegionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeName) == false &&
    undefined !== pobjRegionTypeEN.regionTypeName &&
    tzDataType.isString(pobjRegionTypeEN.regionTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域类型名称(regionTypeName)]的值:[${pobjRegionTypeEN.regionTypeName}], 非法,应该为字符型(In 区域类型(RegionType))!(clsRegionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeENName) == false &&
    undefined !== pobjRegionTypeEN.regionTypeENName &&
    tzDataType.isString(pobjRegionTypeEN.regionTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域类型英文名(regionTypeENName)]的值:[${pobjRegionTypeEN.regionTypeENName}], 非法,应该为字符型(In 区域类型(RegionType))!(clsRegionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeSimName) == false &&
    undefined !== pobjRegionTypeEN.regionTypeSimName &&
    tzDataType.isString(pobjRegionTypeEN.regionTypeSimName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域类型简名(regionTypeSimName)]的值:[${pobjRegionTypeEN.regionTypeSimName}], 非法,应该为字符型(In 区域类型(RegionType))!(clsRegionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjRegionTypeEN.defaWidth &&
    undefined !== pobjRegionTypeEN.defaWidth &&
    tzDataType.isNumber(pobjRegionTypeEN.defaWidth) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缺省宽度(defaWidth)]的值:[${pobjRegionTypeEN.defaWidth}], 非法,应该为数值型(In 区域类型(RegionType))!(clsRegionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjRegionTypeEN.regionTypeOrderNum &&
    undefined !== pobjRegionTypeEN.regionTypeOrderNum &&
    tzDataType.isNumber(pobjRegionTypeEN.regionTypeOrderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域类型序号(regionTypeOrderNum)]的值:[${pobjRegionTypeEN.regionTypeOrderNum}], 非法,应该为数值型(In 区域类型(RegionType))!(clsRegionTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjRegionTypeEN.memo) == false &&
    undefined !== pobjRegionTypeEN.memo &&
    tzDataType.isString(pobjRegionTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjRegionTypeEN.memo}], 非法,应该为字符型(In 区域类型(RegionType))!(clsRegionTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjRegionTypeEN.regionTypeId) === true ||
    pobjRegionTypeEN.regionTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[区域类型Id]不能为空(In 区域类型)!(clsRegionTypeBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function RegionType_GetJSONStrByObj(pobjRegionTypeEN: clsRegionTypeEN): string {
  pobjRegionTypeEN.sfUpdFldSetStr = pobjRegionTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjRegionTypeEN);
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
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function RegionType_GetObjLstByJSONStr(strJSON: string): Array<clsRegionTypeEN> {
  let arrRegionTypeObjLst = new Array<clsRegionTypeEN>();
  if (strJSON === '') {
    return arrRegionTypeObjLst;
  }
  try {
    arrRegionTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrRegionTypeObjLst;
  }
  return arrRegionTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRegionTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function RegionType_GetObjLstByJSONObjLst(
  arrRegionTypeObjLstS: Array<clsRegionTypeEN>,
): Array<clsRegionTypeEN> {
  const arrRegionTypeObjLst = new Array<clsRegionTypeEN>();
  for (const objInFor of arrRegionTypeObjLstS) {
    const obj1 = RegionType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrRegionTypeObjLst.push(obj1);
  }
  return arrRegionTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function RegionType_GetObjByJSONStr(strJSON: string): clsRegionTypeEN {
  let pobjRegionTypeEN = new clsRegionTypeEN();
  if (strJSON === '') {
    return pobjRegionTypeEN;
  }
  try {
    pobjRegionTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjRegionTypeEN;
  }
  return pobjRegionTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function RegionType_GetCombineCondition(objRegionTypeCond: clsRegionTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objRegionTypeCond.dicFldComparisonOp,
      clsRegionTypeEN.con_RegionTypeId,
    ) == true
  ) {
    const strComparisonOpRegionTypeId: string =
      objRegionTypeCond.dicFldComparisonOp[clsRegionTypeEN.con_RegionTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRegionTypeEN.con_RegionTypeId,
      objRegionTypeCond.regionTypeId,
      strComparisonOpRegionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRegionTypeCond.dicFldComparisonOp,
      clsRegionTypeEN.con_RegionTypeName,
    ) == true
  ) {
    const strComparisonOpRegionTypeName: string =
      objRegionTypeCond.dicFldComparisonOp[clsRegionTypeEN.con_RegionTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRegionTypeEN.con_RegionTypeName,
      objRegionTypeCond.regionTypeName,
      strComparisonOpRegionTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRegionTypeCond.dicFldComparisonOp,
      clsRegionTypeEN.con_RegionTypeENName,
    ) == true
  ) {
    const strComparisonOpRegionTypeENName: string =
      objRegionTypeCond.dicFldComparisonOp[clsRegionTypeEN.con_RegionTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRegionTypeEN.con_RegionTypeENName,
      objRegionTypeCond.regionTypeENName,
      strComparisonOpRegionTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRegionTypeCond.dicFldComparisonOp,
      clsRegionTypeEN.con_RegionTypeSimName,
    ) == true
  ) {
    const strComparisonOpRegionTypeSimName: string =
      objRegionTypeCond.dicFldComparisonOp[clsRegionTypeEN.con_RegionTypeSimName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRegionTypeEN.con_RegionTypeSimName,
      objRegionTypeCond.regionTypeSimName,
      strComparisonOpRegionTypeSimName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRegionTypeCond.dicFldComparisonOp,
      clsRegionTypeEN.con_DefaWidth,
    ) == true
  ) {
    const strComparisonOpDefaWidth: string =
      objRegionTypeCond.dicFldComparisonOp[clsRegionTypeEN.con_DefaWidth];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsRegionTypeEN.con_DefaWidth,
      objRegionTypeCond.defaWidth,
      strComparisonOpDefaWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRegionTypeCond.dicFldComparisonOp,
      clsRegionTypeEN.con_RegionTypeOrderNum,
    ) == true
  ) {
    const strComparisonOpRegionTypeOrderNum: string =
      objRegionTypeCond.dicFldComparisonOp[clsRegionTypeEN.con_RegionTypeOrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsRegionTypeEN.con_RegionTypeOrderNum,
      objRegionTypeCond.regionTypeOrderNum,
      strComparisonOpRegionTypeOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRegionTypeCond.dicFldComparisonOp,
      clsRegionTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objRegionTypeCond.dicFldComparisonOp[clsRegionTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRegionTypeEN.con_Memo,
      objRegionTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRegionTypeENS:源对象
 * @param objRegionTypeENT:目标对象
 */
export function RegionType_GetObjFromJsonObj(objRegionTypeENS: clsRegionTypeEN): clsRegionTypeEN {
  const objRegionTypeENT: clsRegionTypeEN = new clsRegionTypeEN();
  ObjectAssign(objRegionTypeENT, objRegionTypeENS);
  return objRegionTypeENT;
}
