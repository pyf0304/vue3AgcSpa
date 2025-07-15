/**
 * 类名:clsAssociationMappingWApi
 * 表名:AssociationMapping(00050550)
 * 版本:2025.05.23.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/26 02:45:25
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 关联关系映射(AssociationMapping)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月26日.
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
import { clsAssociationMappingEN } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const associationMapping_Controller = 'AssociationMappingApi';
export const associationMapping_ConstructorName = 'associationMapping';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strAssociationMappingId:关键字
 * @returns 对象
 **/
export async function AssociationMapping_GetObjByAssociationMappingIdAsync(
  strAssociationMappingId: string,
): Promise<clsAssociationMappingEN | null> {
  const strThisFuncName = 'GetObjByAssociationMappingIdAsync';

  if (IsNullOrEmpty(strAssociationMappingId) == true) {
    const strMsg = Format(
      '参数:[strAssociationMappingId]不能为空!(In clsAssociationMappingWApi.GetObjByAssociationMappingIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strAssociationMappingId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strAssociationMappingId]的长度:[{0}]不正确!(clsAssociationMappingWApi.GetObjByAssociationMappingIdAsync)',
      strAssociationMappingId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByAssociationMappingId';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strAssociationMappingId,
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
      const objAssociationMapping = AssociationMapping_GetObjFromJsonObj(returnObj);
      return objAssociationMapping;
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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
 * @param strAssociationMappingId:所给的关键字
 * @returns 对象
 */
export async function AssociationMapping_GetObjByAssociationMappingIdlocalStorage(
  strAssociationMappingId: string,
) {
  const strThisFuncName = 'GetObjByAssociationMappingIdlocalStorage';

  if (IsNullOrEmpty(strAssociationMappingId) == true) {
    const strMsg = Format(
      '参数:[strAssociationMappingId]不能为空!(In clsAssociationMappingWApi.GetObjByAssociationMappingIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strAssociationMappingId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strAssociationMappingId]的长度:[{0}]不正确!(clsAssociationMappingWApi.GetObjByAssociationMappingIdlocalStorage)',
      strAssociationMappingId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsAssociationMappingEN._CurrTabName, strAssociationMappingId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objAssociationMappingCache: clsAssociationMappingEN = JSON.parse(strTempObj);
    return objAssociationMappingCache;
  }
  try {
    const objAssociationMapping = await AssociationMapping_GetObjByAssociationMappingIdAsync(
      strAssociationMappingId,
    );
    if (objAssociationMapping != null) {
      localStorage.setItem(strKey, JSON.stringify(objAssociationMapping));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objAssociationMapping;
    }
    return objAssociationMapping;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strAssociationMappingId,
      associationMapping_ConstructorName,
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
 * @param strAssociationMappingId:所给的关键字
 * @returns 对象
 */
export async function AssociationMapping_GetObjByAssociationMappingIdCache(
  strAssociationMappingId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByAssociationMappingIdCache';

  if (IsNullOrEmpty(strAssociationMappingId) == true) {
    const strMsg = Format(
      '参数:[strAssociationMappingId]不能为空!(In clsAssociationMappingWApi.GetObjByAssociationMappingIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strAssociationMappingId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strAssociationMappingId]的长度:[{0}]不正确!(clsAssociationMappingWApi.GetObjByAssociationMappingIdCache)',
      strAssociationMappingId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrAssociationMappingObjLstCache = await AssociationMapping_GetObjLstCache();
  try {
    const arrAssociationMappingSel = arrAssociationMappingObjLstCache.filter(
      (x) => x.associationMappingId == strAssociationMappingId,
    );
    let objAssociationMapping: clsAssociationMappingEN;
    if (arrAssociationMappingSel.length > 0) {
      objAssociationMapping = arrAssociationMappingSel[0];
      return objAssociationMapping;
    } else {
      if (bolTryAsyncOnce == true) {
        const objAssociationMappingConst =
          await AssociationMapping_GetObjByAssociationMappingIdAsync(strAssociationMappingId);
        if (objAssociationMappingConst != null) {
          AssociationMapping_ReFreshThisCache();
          return objAssociationMappingConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strAssociationMappingId,
      associationMapping_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objAssociationMapping:所给的对象
 * @returns 对象
 */
export async function AssociationMapping_UpdateObjInLstCache(
  objAssociationMapping: clsAssociationMappingEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrAssociationMappingObjLstCache = await AssociationMapping_GetObjLstCache();
    const obj = arrAssociationMappingObjLstCache.find(
      (x) => x.associationMappingName == objAssociationMapping.associationMappingName,
    );
    if (obj != null) {
      objAssociationMapping.associationMappingId = obj.associationMappingId;
      ObjectAssign(obj, objAssociationMapping);
    } else {
      arrAssociationMappingObjLstCache.push(objAssociationMapping);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      associationMapping_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function AssociationMapping_SortFunDefa(
  a: clsAssociationMappingEN,
  b: clsAssociationMappingEN,
): number {
  return a.associationMappingId.localeCompare(b.associationMappingId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function AssociationMapping_SortFunDefa2Fld(
  a: clsAssociationMappingEN,
  b: clsAssociationMappingEN,
): number {
  if (a.associationMappingName == b.associationMappingName)
    return a.associationMappingENName.localeCompare(b.associationMappingENName);
  else return a.associationMappingName.localeCompare(b.associationMappingName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function AssociationMapping_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsAssociationMappingEN.con_AssociationMappingId:
        return (a: clsAssociationMappingEN, b: clsAssociationMappingEN) => {
          return a.associationMappingId.localeCompare(b.associationMappingId);
        };
      case clsAssociationMappingEN.con_AssociationMappingName:
        return (a: clsAssociationMappingEN, b: clsAssociationMappingEN) => {
          if (a.associationMappingName == null) return -1;
          if (b.associationMappingName == null) return 1;
          return a.associationMappingName.localeCompare(b.associationMappingName);
        };
      case clsAssociationMappingEN.con_AssociationMappingENName:
        return (a: clsAssociationMappingEN, b: clsAssociationMappingEN) => {
          if (a.associationMappingENName == null) return -1;
          if (b.associationMappingENName == null) return 1;
          return a.associationMappingENName.localeCompare(b.associationMappingENName);
        };
      case clsAssociationMappingEN.con_UpdDate:
        return (a: clsAssociationMappingEN, b: clsAssociationMappingEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsAssociationMappingEN.con_UpdUser:
        return (a: clsAssociationMappingEN, b: clsAssociationMappingEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsAssociationMappingEN.con_Memo:
        return (a: clsAssociationMappingEN, b: clsAssociationMappingEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[AssociationMapping]中不存在!(in ${associationMapping_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsAssociationMappingEN.con_AssociationMappingId:
        return (a: clsAssociationMappingEN, b: clsAssociationMappingEN) => {
          return b.associationMappingId.localeCompare(a.associationMappingId);
        };
      case clsAssociationMappingEN.con_AssociationMappingName:
        return (a: clsAssociationMappingEN, b: clsAssociationMappingEN) => {
          if (b.associationMappingName == null) return -1;
          if (a.associationMappingName == null) return 1;
          return b.associationMappingName.localeCompare(a.associationMappingName);
        };
      case clsAssociationMappingEN.con_AssociationMappingENName:
        return (a: clsAssociationMappingEN, b: clsAssociationMappingEN) => {
          if (b.associationMappingENName == null) return -1;
          if (a.associationMappingENName == null) return 1;
          return b.associationMappingENName.localeCompare(a.associationMappingENName);
        };
      case clsAssociationMappingEN.con_UpdDate:
        return (a: clsAssociationMappingEN, b: clsAssociationMappingEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsAssociationMappingEN.con_UpdUser:
        return (a: clsAssociationMappingEN, b: clsAssociationMappingEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsAssociationMappingEN.con_Memo:
        return (a: clsAssociationMappingEN, b: clsAssociationMappingEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[AssociationMapping]中不存在!(in ${associationMapping_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strAssociationMappingId:所给的关键字
 * @returns 对象
 */
export async function AssociationMapping_GetNameByAssociationMappingIdCache(
  strAssociationMappingId: string,
) {
  if (IsNullOrEmpty(strAssociationMappingId) == true) {
    const strMsg = Format(
      '参数:[strAssociationMappingId]不能为空!(In clsAssociationMappingWApi.GetNameByAssociationMappingIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strAssociationMappingId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strAssociationMappingId]的长度:[{0}]不正确!(clsAssociationMappingWApi.GetNameByAssociationMappingIdCache)',
      strAssociationMappingId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrAssociationMappingObjLstCache = await AssociationMapping_GetObjLstCache();
  if (arrAssociationMappingObjLstCache == null) return '';
  try {
    const arrAssociationMappingSel = arrAssociationMappingObjLstCache.filter(
      (x) => x.associationMappingId == strAssociationMappingId,
    );
    let objAssociationMapping: clsAssociationMappingEN;
    if (arrAssociationMappingSel.length > 0) {
      objAssociationMapping = arrAssociationMappingSel[0];
      return objAssociationMapping.associationMappingName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strAssociationMappingId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function AssociationMapping_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsAssociationMappingEN.con_AssociationMappingId:
      return (obj: clsAssociationMappingEN) => {
        return obj.associationMappingId === value;
      };
    case clsAssociationMappingEN.con_AssociationMappingName:
      return (obj: clsAssociationMappingEN) => {
        return obj.associationMappingName === value;
      };
    case clsAssociationMappingEN.con_AssociationMappingENName:
      return (obj: clsAssociationMappingEN) => {
        return obj.associationMappingENName === value;
      };
    case clsAssociationMappingEN.con_UpdDate:
      return (obj: clsAssociationMappingEN) => {
        return obj.updDate === value;
      };
    case clsAssociationMappingEN.con_UpdUser:
      return (obj: clsAssociationMappingEN) => {
        return obj.updUser === value;
      };
    case clsAssociationMappingEN.con_Memo:
      return (obj: clsAssociationMappingEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[AssociationMapping]中不存在!(in ${associationMapping_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function AssociationMapping_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsAssociationMappingEN.con_AssociationMappingId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsAssociationMappingEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsAssociationMappingEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strAssociationMappingId = strInValue;
  if (IsNullOrEmpty(strAssociationMappingId) == true) {
    return '';
  }
  const objAssociationMapping = await AssociationMapping_GetObjByAssociationMappingIdCache(
    strAssociationMappingId,
  );
  if (objAssociationMapping == null) return '';
  if (objAssociationMapping.GetFldValue(strOutFldName) == null) return '';
  return objAssociationMapping.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function AssociationMapping_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsAssociationMappingEN.con_AssociationMappingId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrAssociationMapping = await AssociationMapping_GetObjLstCache();
  if (arrAssociationMapping == null) return [];
  let arrAssociationMappingSel = arrAssociationMapping;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrAssociationMappingSel = arrAssociationMappingSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrAssociationMappingSel = arrAssociationMappingSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrAssociationMappingSel = arrAssociationMappingSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrAssociationMappingSel = arrAssociationMappingSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrAssociationMappingSel = arrAssociationMappingSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrAssociationMappingSel = arrAssociationMappingSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrAssociationMappingSel = arrAssociationMappingSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrAssociationMappingSel = arrAssociationMappingSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrAssociationMappingSel = arrAssociationMappingSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrAssociationMappingSel = arrAssociationMappingSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrAssociationMappingSel.length == 0) return [];
  return arrAssociationMappingSel.map((x) => x.associationMappingId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function AssociationMapping_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
export async function AssociationMapping_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
export async function AssociationMapping_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
export async function AssociationMapping_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsAssociationMappingEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

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
      const objAssociationMapping = AssociationMapping_GetObjFromJsonObj(returnObj);
      return objAssociationMapping;
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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
export async function AssociationMapping_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsAssociationMappingEN._CurrTabName;
  if (IsNullOrEmpty(clsAssociationMappingEN.WhereFormat) == false) {
    strWhereCond = clsAssociationMappingEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsAssociationMappingEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsAssociationMappingEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrAssociationMappingExObjLstCache: Array<clsAssociationMappingEN> =
      CacheHelper.Get(strKey);
    const arrAssociationMappingObjLstT = AssociationMapping_GetObjLstByJSONObjLst(
      arrAssociationMappingExObjLstCache,
    );
    return arrAssociationMappingObjLstT;
  }
  try {
    const arrAssociationMappingExObjLst = await AssociationMapping_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrAssociationMappingExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrAssociationMappingExObjLst.length,
    );
    console.log(strInfo);
    return arrAssociationMappingExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      associationMapping_ConstructorName,
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
export async function AssociationMapping_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsAssociationMappingEN._CurrTabName;
  if (IsNullOrEmpty(clsAssociationMappingEN.WhereFormat) == false) {
    strWhereCond = clsAssociationMappingEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsAssociationMappingEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsAssociationMappingEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrAssociationMappingExObjLstCache: Array<clsAssociationMappingEN> =
      JSON.parse(strTempObjLst);
    const arrAssociationMappingObjLstT = AssociationMapping_GetObjLstByJSONObjLst(
      arrAssociationMappingExObjLstCache,
    );
    return arrAssociationMappingObjLstT;
  }
  try {
    const arrAssociationMappingExObjLst = await AssociationMapping_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrAssociationMappingExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrAssociationMappingExObjLst.length,
    );
    console.log(strInfo);
    return arrAssociationMappingExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      associationMapping_ConstructorName,
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
export async function AssociationMapping_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsAssociationMappingEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrAssociationMappingObjLstCache: Array<clsAssociationMappingEN> =
      JSON.parse(strTempObjLst);
    return arrAssociationMappingObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function AssociationMapping_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsAssociationMappingEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

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
          associationMapping_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AssociationMapping_GetObjLstByJSONObjLst(returnObjLst);
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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
export async function AssociationMapping_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsAssociationMappingEN._CurrTabName;
  if (IsNullOrEmpty(clsAssociationMappingEN.WhereFormat) == false) {
    strWhereCond = clsAssociationMappingEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsAssociationMappingEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsAssociationMappingEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrAssociationMappingExObjLstCache: Array<clsAssociationMappingEN> =
      JSON.parse(strTempObjLst);
    const arrAssociationMappingObjLstT = AssociationMapping_GetObjLstByJSONObjLst(
      arrAssociationMappingExObjLstCache,
    );
    return arrAssociationMappingObjLstT;
  }
  try {
    const arrAssociationMappingExObjLst = await AssociationMapping_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrAssociationMappingExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrAssociationMappingExObjLst.length,
    );
    console.log(strInfo);
    return arrAssociationMappingExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      associationMapping_ConstructorName,
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
export async function AssociationMapping_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsAssociationMappingEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrAssociationMappingObjLstCache: Array<clsAssociationMappingEN> =
      JSON.parse(strTempObjLst);
    return arrAssociationMappingObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function AssociationMapping_GetObjLstCache(): Promise<Array<clsAssociationMappingEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrAssociationMappingObjLstCache;
  switch (clsAssociationMappingEN.CacheModeId) {
    case '04': //sessionStorage
      arrAssociationMappingObjLstCache = await AssociationMapping_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrAssociationMappingObjLstCache = await AssociationMapping_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrAssociationMappingObjLstCache = await AssociationMapping_GetObjLstClientCache();
      break;
    default:
      arrAssociationMappingObjLstCache = await AssociationMapping_GetObjLstClientCache();
      break;
  }
  return arrAssociationMappingObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function AssociationMapping_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrAssociationMappingObjLstCache;
  switch (clsAssociationMappingEN.CacheModeId) {
    case '04': //sessionStorage
      arrAssociationMappingObjLstCache =
        await AssociationMapping_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrAssociationMappingObjLstCache = await AssociationMapping_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrAssociationMappingObjLstCache = null;
      break;
    default:
      arrAssociationMappingObjLstCache = null;
      break;
  }
  return arrAssociationMappingObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrAssociationMappingIdCond:条件对象
 * @returns 对象列表子集
 */
export async function AssociationMapping_GetSubObjLstCache(
  objAssociationMappingCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrAssociationMappingObjLstCache = await AssociationMapping_GetObjLstCache();
  let arrAssociationMappingSel = arrAssociationMappingObjLstCache;
  if (objAssociationMappingCond.GetConditions().length == 0) return arrAssociationMappingSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objAssociationMappingCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrAssociationMappingSel = arrAssociationMappingSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrAssociationMappingSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objAssociationMappingCond),
      associationMapping_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsAssociationMappingEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrAssociationMappingId:关键字列表
 * @returns 对象列表
 **/
export async function AssociationMapping_GetObjLstByAssociationMappingIdLstAsync(
  arrAssociationMappingId: Array<string>,
): Promise<Array<clsAssociationMappingEN>> {
  const strThisFuncName = 'GetObjLstByAssociationMappingIdLstAsync';
  const strAction = 'GetObjLstByAssociationMappingIdLst';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrAssociationMappingId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          associationMapping_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AssociationMapping_GetObjLstByJSONObjLst(returnObjLst);
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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
 * @param arrstrAssociationMappingIdLst:关键字列表
 * @returns 对象列表
 */
export async function AssociationMapping_GetObjLstByAssociationMappingIdLstCache(
  arrAssociationMappingIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByAssociationMappingIdLstCache';
  try {
    const arrAssociationMappingObjLstCache = await AssociationMapping_GetObjLstCache();
    const arrAssociationMappingSel = arrAssociationMappingObjLstCache.filter(
      (x) => arrAssociationMappingIdLst.indexOf(x.associationMappingId) > -1,
    );
    return arrAssociationMappingSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrAssociationMappingIdLst.join(','),
      associationMapping_ConstructorName,
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
export async function AssociationMapping_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsAssociationMappingEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

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
          associationMapping_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AssociationMapping_GetObjLstByJSONObjLst(returnObjLst);
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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
export async function AssociationMapping_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsAssociationMappingEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

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
          associationMapping_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AssociationMapping_GetObjLstByJSONObjLst(returnObjLst);
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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
 * @param strAssociationMappingId:关键字
 * @returns 获取删除的结果
 **/
export async function AssociationMapping_DelRecordAsync(
  strAssociationMappingId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(associationMapping_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strAssociationMappingId);

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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
 * @param arrAssociationMappingId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function AssociationMapping_DelAssociationMappingsAsync(
  arrAssociationMappingId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelAssociationMappingsAsync';
  const strAction = 'DelAssociationMappings';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrAssociationMappingId, config);
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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
export async function AssociationMapping_DelAssociationMappingsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelAssociationMappingsByCondAsync';
  const strAction = 'DelAssociationMappingsByCond';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
 * @param objAssociationMappingEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function AssociationMapping_AddNewRecordAsync(
  objAssociationMappingEN: clsAssociationMappingEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objAssociationMappingEN);
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAssociationMappingEN, config);
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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
 * @param objAssociationMappingEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function AssociationMapping_AddNewRecordWithMaxIdAsync(
  objAssociationMappingEN: clsAssociationMappingEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAssociationMappingEN, config);
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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
export async function AssociationMapping_AddNewObjSave(
  objAssociationMappingEN: clsAssociationMappingEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    AssociationMapping_CheckPropertyNew(objAssociationMappingEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${associationMapping_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await AssociationMapping_CheckUniCond4Add(objAssociationMappingEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await AssociationMapping_AddNewRecordWithMaxIdAsync(
      objAssociationMappingEN,
    );
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      AssociationMapping_ReFreshCache();
    } else {
      const strInfo = `添加[关联关系映射(AssociationMapping)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${associationMapping_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function AssociationMapping_CheckUniCond4Add(
  objAssociationMappingEN: clsAssociationMappingEN,
): Promise<boolean> {
  const strUniquenessCondition = AssociationMapping_GetUniCondStr(objAssociationMappingEN);
  const bolIsExistCondition = await AssociationMapping_IsExistRecordAsync(strUniquenessCondition);
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
export async function AssociationMapping_CheckUniCond4Update(
  objAssociationMappingEN: clsAssociationMappingEN,
): Promise<boolean> {
  const strUniquenessCondition = AssociationMapping_GetUniCondStr4Update(objAssociationMappingEN);
  const bolIsExistCondition = await AssociationMapping_IsExistRecordAsync(strUniquenessCondition);
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
export async function AssociationMapping_UpdateObjSave(
  objAssociationMappingEN: clsAssociationMappingEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objAssociationMappingEN.sfUpdFldSetStr = objAssociationMappingEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objAssociationMappingEN.associationMappingId == '' ||
    objAssociationMappingEN.associationMappingId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    AssociationMapping_CheckProperty4Update(objAssociationMappingEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${associationMapping_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await AssociationMapping_CheckUniCond4Update(objAssociationMappingEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await AssociationMapping_UpdateRecordAsync(objAssociationMappingEN);
    if (returnBool == true) {
      AssociationMapping_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${associationMapping_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objAssociationMappingEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function AssociationMapping_AddNewRecordWithReturnKeyAsync(
  objAssociationMappingEN: clsAssociationMappingEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAssociationMappingEN, config);
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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
 * @param objAssociationMappingEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function AssociationMapping_UpdateRecordAsync(
  objAssociationMappingEN: clsAssociationMappingEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objAssociationMappingEN.sfUpdFldSetStr === undefined ||
    objAssociationMappingEN.sfUpdFldSetStr === null ||
    objAssociationMappingEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objAssociationMappingEN.associationMappingId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAssociationMappingEN, config);
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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
 * @param objAssociationMappingEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function AssociationMapping_EditRecordExAsync(
  objAssociationMappingEN: clsAssociationMappingEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objAssociationMappingEN.sfUpdFldSetStr === undefined ||
    objAssociationMappingEN.sfUpdFldSetStr === null ||
    objAssociationMappingEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objAssociationMappingEN.associationMappingId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAssociationMappingEN, config);
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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
 * @param objAssociationMappingEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function AssociationMapping_UpdateWithConditionAsync(
  objAssociationMappingEN: clsAssociationMappingEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objAssociationMappingEN.sfUpdFldSetStr === undefined ||
    objAssociationMappingEN.sfUpdFldSetStr === null ||
    objAssociationMappingEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objAssociationMappingEN.associationMappingId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);
  objAssociationMappingEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAssociationMappingEN, config);
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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
 * @param objstrAssociationMappingIdCond:条件对象
 * @returns 对象列表子集
 */
export async function AssociationMapping_IsExistRecordCache(
  objAssociationMappingCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrAssociationMappingObjLstCache = await AssociationMapping_GetObjLstCache();
  if (arrAssociationMappingObjLstCache == null) return false;
  let arrAssociationMappingSel = arrAssociationMappingObjLstCache;
  if (objAssociationMappingCond.GetConditions().length == 0)
    return arrAssociationMappingSel.length > 0 ? true : false;
  try {
    for (const objCondition of objAssociationMappingCond.GetConditions()) {
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
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrAssociationMappingSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objAssociationMappingCond),
      associationMapping_ConstructorName,
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
export async function AssociationMapping_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
 * @param strAssociationMappingId:所给的关键字
 * @returns 对象
 */
export async function AssociationMapping_IsExistCache(strAssociationMappingId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrAssociationMappingObjLstCache = await AssociationMapping_GetObjLstCache();
  if (arrAssociationMappingObjLstCache == null) return false;
  try {
    const arrAssociationMappingSel = arrAssociationMappingObjLstCache.filter(
      (x) => x.associationMappingId == strAssociationMappingId,
    );
    if (arrAssociationMappingSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strAssociationMappingId,
      associationMapping_ConstructorName,
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
 * @param strAssociationMappingId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function AssociationMapping_IsExistAsync(
  strAssociationMappingId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strAssociationMappingId,
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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
export async function AssociationMapping_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
 * @param objAssociationMappingCond:条件对象
 * @returns 对象列表记录数
 */
export async function AssociationMapping_GetRecCountByCondCache(
  objAssociationMappingCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrAssociationMappingObjLstCache = await AssociationMapping_GetObjLstCache();
  if (arrAssociationMappingObjLstCache == null) return 0;
  let arrAssociationMappingSel = arrAssociationMappingObjLstCache;
  if (objAssociationMappingCond.GetConditions().length == 0) return arrAssociationMappingSel.length;
  try {
    for (const objCondition of objAssociationMappingCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrAssociationMappingSel = arrAssociationMappingSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrAssociationMappingSel = arrAssociationMappingSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrAssociationMappingSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objAssociationMappingCond),
      associationMapping_ConstructorName,
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
export async function AssociationMapping_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
export async function AssociationMapping_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(associationMapping_Controller, strAction);

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
        associationMapping_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        associationMapping_ConstructorName,
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
export function AssociationMapping_GetWebApiUrl(strController: string, strAction: string): string {
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
export function AssociationMapping_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsAssociationMappingEN._CurrTabName;
  switch (clsAssociationMappingEN.CacheModeId) {
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
  clsAssociationMappingEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function AssociationMapping_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsAssociationMappingEN._CurrTabName;
    switch (clsAssociationMappingEN.CacheModeId) {
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
    clsAssociationMappingEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function AssociationMapping_GetLastRefreshTime(): string {
  if (clsAssociationMappingEN._RefreshTimeLst.length == 0) return '';
  return clsAssociationMappingEN._RefreshTimeLst[
    clsAssociationMappingEN._RefreshTimeLst.length - 1
  ];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function AssociationMapping_BindDdl_AssociationMappingIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_AssociationMappingIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_AssociationMappingIdInDivCache");
  let arrObjLstSel = await AssociationMapping_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.sort((x, y) =>
    x.associationMappingName.localeCompare(y.associationMappingName),
  );
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsAssociationMappingEN.con_AssociationMappingId,
    clsAssociationMappingEN.con_AssociationMappingName,
    '关联关系映射...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function AssociationMapping_GetArrAssociationMapping() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_AssociationMappingIdInDivCache");
  const arrAssociationMapping = new Array<clsAssociationMappingEN>();
  let arrObjLstSel = await AssociationMapping_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.sort((x, y) => {
    if (x.associationMappingName === null && y.associationMappingName === null) return 0;
    if (x.associationMappingName === null) return 1;
    if (y.associationMappingName === null) return -1;
    return x.associationMappingName.localeCompare(y.associationMappingName);
  });
  const obj0 = new clsAssociationMappingEN();
  obj0.associationMappingId = '0';
  obj0.associationMappingName = '选关联关系映射...';
  arrAssociationMapping.push(obj0);
  arrObjLstSel.forEach((x) => arrAssociationMapping.push(x));
  return arrAssociationMapping;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function AssociationMapping_CheckPropertyNew(
  pobjAssociationMappingEN: clsAssociationMappingEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.associationMappingId) == false &&
    GetStrLen(pobjAssociationMappingEN.associationMappingId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[关联关系映射Id(associationMappingId)]的长度不能超过2(In 关联关系映射(AssociationMapping))!值:${pobjAssociationMappingEN.associationMappingId}(clsAssociationMappingBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.associationMappingName) == false &&
    GetStrLen(pobjAssociationMappingEN.associationMappingName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[关联关系映射名(associationMappingName)]的长度不能超过50(In 关联关系映射(AssociationMapping))!值:${pobjAssociationMappingEN.associationMappingName}(clsAssociationMappingBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.associationMappingENName) == false &&
    GetStrLen(pobjAssociationMappingEN.associationMappingENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[关联关系映射英文名(associationMappingENName)]的长度不能超过50(In 关联关系映射(AssociationMapping))!值:${pobjAssociationMappingEN.associationMappingENName}(clsAssociationMappingBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.updDate) == false &&
    GetStrLen(pobjAssociationMappingEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 关联关系映射(AssociationMapping))!值:${pobjAssociationMappingEN.updDate}(clsAssociationMappingBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.updUser) == false &&
    GetStrLen(pobjAssociationMappingEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 关联关系映射(AssociationMapping))!值:${pobjAssociationMappingEN.updUser}(clsAssociationMappingBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.memo) == false &&
    GetStrLen(pobjAssociationMappingEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 关联关系映射(AssociationMapping))!值:${pobjAssociationMappingEN.memo}(clsAssociationMappingBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.associationMappingId) == false &&
    undefined !== pobjAssociationMappingEN.associationMappingId &&
    tzDataType.isString(pobjAssociationMappingEN.associationMappingId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关联关系映射Id(associationMappingId)]的值:[${pobjAssociationMappingEN.associationMappingId}], 非法,应该为字符型(In 关联关系映射(AssociationMapping))!(clsAssociationMappingBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.associationMappingName) == false &&
    undefined !== pobjAssociationMappingEN.associationMappingName &&
    tzDataType.isString(pobjAssociationMappingEN.associationMappingName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关联关系映射名(associationMappingName)]的值:[${pobjAssociationMappingEN.associationMappingName}], 非法,应该为字符型(In 关联关系映射(AssociationMapping))!(clsAssociationMappingBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.associationMappingENName) == false &&
    undefined !== pobjAssociationMappingEN.associationMappingENName &&
    tzDataType.isString(pobjAssociationMappingEN.associationMappingENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关联关系映射英文名(associationMappingENName)]的值:[${pobjAssociationMappingEN.associationMappingENName}], 非法,应该为字符型(In 关联关系映射(AssociationMapping))!(clsAssociationMappingBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.updDate) == false &&
    undefined !== pobjAssociationMappingEN.updDate &&
    tzDataType.isString(pobjAssociationMappingEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjAssociationMappingEN.updDate}], 非法,应该为字符型(In 关联关系映射(AssociationMapping))!(clsAssociationMappingBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.updUser) == false &&
    undefined !== pobjAssociationMappingEN.updUser &&
    tzDataType.isString(pobjAssociationMappingEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjAssociationMappingEN.updUser}], 非法,应该为字符型(In 关联关系映射(AssociationMapping))!(clsAssociationMappingBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.memo) == false &&
    undefined !== pobjAssociationMappingEN.memo &&
    tzDataType.isString(pobjAssociationMappingEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjAssociationMappingEN.memo}], 非法,应该为字符型(In 关联关系映射(AssociationMapping))!(clsAssociationMappingBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function AssociationMapping_CheckProperty4Update(
  pobjAssociationMappingEN: clsAssociationMappingEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.associationMappingId) == false &&
    GetStrLen(pobjAssociationMappingEN.associationMappingId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[关联关系映射Id(associationMappingId)]的长度不能超过2(In 关联关系映射(AssociationMapping))!值:${pobjAssociationMappingEN.associationMappingId}(clsAssociationMappingBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.associationMappingName) == false &&
    GetStrLen(pobjAssociationMappingEN.associationMappingName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[关联关系映射名(associationMappingName)]的长度不能超过50(In 关联关系映射(AssociationMapping))!值:${pobjAssociationMappingEN.associationMappingName}(clsAssociationMappingBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.associationMappingENName) == false &&
    GetStrLen(pobjAssociationMappingEN.associationMappingENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[关联关系映射英文名(associationMappingENName)]的长度不能超过50(In 关联关系映射(AssociationMapping))!值:${pobjAssociationMappingEN.associationMappingENName}(clsAssociationMappingBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.updDate) == false &&
    GetStrLen(pobjAssociationMappingEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 关联关系映射(AssociationMapping))!值:${pobjAssociationMappingEN.updDate}(clsAssociationMappingBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.updUser) == false &&
    GetStrLen(pobjAssociationMappingEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 关联关系映射(AssociationMapping))!值:${pobjAssociationMappingEN.updUser}(clsAssociationMappingBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.memo) == false &&
    GetStrLen(pobjAssociationMappingEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 关联关系映射(AssociationMapping))!值:${pobjAssociationMappingEN.memo}(clsAssociationMappingBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.associationMappingId) == false &&
    undefined !== pobjAssociationMappingEN.associationMappingId &&
    tzDataType.isString(pobjAssociationMappingEN.associationMappingId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关联关系映射Id(associationMappingId)]的值:[${pobjAssociationMappingEN.associationMappingId}], 非法,应该为字符型(In 关联关系映射(AssociationMapping))!(clsAssociationMappingBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.associationMappingName) == false &&
    undefined !== pobjAssociationMappingEN.associationMappingName &&
    tzDataType.isString(pobjAssociationMappingEN.associationMappingName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关联关系映射名(associationMappingName)]的值:[${pobjAssociationMappingEN.associationMappingName}], 非法,应该为字符型(In 关联关系映射(AssociationMapping))!(clsAssociationMappingBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.associationMappingENName) == false &&
    undefined !== pobjAssociationMappingEN.associationMappingENName &&
    tzDataType.isString(pobjAssociationMappingEN.associationMappingENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关联关系映射英文名(associationMappingENName)]的值:[${pobjAssociationMappingEN.associationMappingENName}], 非法,应该为字符型(In 关联关系映射(AssociationMapping))!(clsAssociationMappingBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.updDate) == false &&
    undefined !== pobjAssociationMappingEN.updDate &&
    tzDataType.isString(pobjAssociationMappingEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjAssociationMappingEN.updDate}], 非法,应该为字符型(In 关联关系映射(AssociationMapping))!(clsAssociationMappingBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.updUser) == false &&
    undefined !== pobjAssociationMappingEN.updUser &&
    tzDataType.isString(pobjAssociationMappingEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjAssociationMappingEN.updUser}], 非法,应该为字符型(In 关联关系映射(AssociationMapping))!(clsAssociationMappingBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAssociationMappingEN.memo) == false &&
    undefined !== pobjAssociationMappingEN.memo &&
    tzDataType.isString(pobjAssociationMappingEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjAssociationMappingEN.memo}], 非法,应该为字符型(In 关联关系映射(AssociationMapping))!(clsAssociationMappingBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function AssociationMapping_GetJSONStrByObj(
  pobjAssociationMappingEN: clsAssociationMappingEN,
): string {
  pobjAssociationMappingEN.sfUpdFldSetStr = pobjAssociationMappingEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjAssociationMappingEN);
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
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function AssociationMapping_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsAssociationMappingEN> {
  let arrAssociationMappingObjLst = new Array<clsAssociationMappingEN>();
  if (strJSON === '') {
    return arrAssociationMappingObjLst;
  }
  try {
    arrAssociationMappingObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrAssociationMappingObjLst;
  }
  return arrAssociationMappingObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrAssociationMappingObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function AssociationMapping_GetObjLstByJSONObjLst(
  arrAssociationMappingObjLstS: Array<clsAssociationMappingEN>,
): Array<clsAssociationMappingEN> {
  const arrAssociationMappingObjLst = new Array<clsAssociationMappingEN>();
  for (const objInFor of arrAssociationMappingObjLstS) {
    const obj1 = AssociationMapping_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrAssociationMappingObjLst.push(obj1);
  }
  return arrAssociationMappingObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function AssociationMapping_GetObjByJSONStr(strJSON: string): clsAssociationMappingEN {
  let pobjAssociationMappingEN = new clsAssociationMappingEN();
  if (strJSON === '') {
    return pobjAssociationMappingEN;
  }
  try {
    pobjAssociationMappingEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjAssociationMappingEN;
  }
  return pobjAssociationMappingEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function AssociationMapping_GetCombineCondition(
  objAssociationMappingCond: clsAssociationMappingEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objAssociationMappingCond.dicFldComparisonOp,
      clsAssociationMappingEN.con_AssociationMappingId,
    ) == true
  ) {
    const strComparisonOpAssociationMappingId: string =
      objAssociationMappingCond.dicFldComparisonOp[
        clsAssociationMappingEN.con_AssociationMappingId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAssociationMappingEN.con_AssociationMappingId,
      objAssociationMappingCond.associationMappingId,
      strComparisonOpAssociationMappingId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAssociationMappingCond.dicFldComparisonOp,
      clsAssociationMappingEN.con_AssociationMappingName,
    ) == true
  ) {
    const strComparisonOpAssociationMappingName: string =
      objAssociationMappingCond.dicFldComparisonOp[
        clsAssociationMappingEN.con_AssociationMappingName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAssociationMappingEN.con_AssociationMappingName,
      objAssociationMappingCond.associationMappingName,
      strComparisonOpAssociationMappingName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAssociationMappingCond.dicFldComparisonOp,
      clsAssociationMappingEN.con_AssociationMappingENName,
    ) == true
  ) {
    const strComparisonOpAssociationMappingENName: string =
      objAssociationMappingCond.dicFldComparisonOp[
        clsAssociationMappingEN.con_AssociationMappingENName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAssociationMappingEN.con_AssociationMappingENName,
      objAssociationMappingCond.associationMappingENName,
      strComparisonOpAssociationMappingENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAssociationMappingCond.dicFldComparisonOp,
      clsAssociationMappingEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objAssociationMappingCond.dicFldComparisonOp[clsAssociationMappingEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAssociationMappingEN.con_UpdDate,
      objAssociationMappingCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAssociationMappingCond.dicFldComparisonOp,
      clsAssociationMappingEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objAssociationMappingCond.dicFldComparisonOp[clsAssociationMappingEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAssociationMappingEN.con_UpdUser,
      objAssociationMappingCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAssociationMappingCond.dicFldComparisonOp,
      clsAssociationMappingEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objAssociationMappingCond.dicFldComparisonOp[clsAssociationMappingEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAssociationMappingEN.con_Memo,
      objAssociationMappingCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--AssociationMapping(关联关系映射),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strAssociationMappingName: 关联关系映射名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function AssociationMapping_GetUniCondStr(
  objAssociationMappingEN: clsAssociationMappingEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and AssociationMappingName = '{0}'",
    objAssociationMappingEN.associationMappingName,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--AssociationMapping(关联关系映射),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strAssociationMappingName: 关联关系映射名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function AssociationMapping_GetUniCondStr4Update(
  objAssociationMappingEN: clsAssociationMappingEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and AssociationMappingId <> '{0}'",
    objAssociationMappingEN.associationMappingId,
  );
  strWhereCond += Format(
    " and AssociationMappingName = '{0}'",
    objAssociationMappingEN.associationMappingName,
  );
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objAssociationMappingENS:源对象
 * @param objAssociationMappingENT:目标对象
 */
export function AssociationMapping_GetObjFromJsonObj(
  objAssociationMappingENS: clsAssociationMappingEN,
): clsAssociationMappingEN {
  const objAssociationMappingENT: clsAssociationMappingEN = new clsAssociationMappingEN();
  ObjectAssign(objAssociationMappingENT, objAssociationMappingENS);
  return objAssociationMappingENT;
}
