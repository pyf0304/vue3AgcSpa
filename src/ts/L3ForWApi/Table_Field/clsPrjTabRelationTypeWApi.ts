/**
 * 类名:clsPrjTabRelationTypeWApi
 * 表名:PrjTabRelationType(00050607)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:09
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
 * 工程表关系类型(PrjTabRelationType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetSortExpressInfo,
  ObjectAssign,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  prjTabRelationTypeCache,
  isFuncMapCache,
} from '@/views/Table_Field/PrjTabRelationTypeVueShare';
import { clsPrjTabRelationTypeENEx } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationTypeENEx';
import { clsPrjTabRelationTypeEN } from '@/ts/L0Entity/Table_Field/clsPrjTabRelationTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const prjTabRelationType_Controller = 'PrjTabRelationTypeApi';
export const prjTabRelationType_ConstructorName = 'prjTabRelationType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPrjTabRelaTypeId:关键字
 * @returns 对象
 **/
export async function PrjTabRelationType_GetObjByPrjTabRelaTypeIdAsync(
  strPrjTabRelaTypeId: string,
): Promise<clsPrjTabRelationTypeEN | null> {
  const strThisFuncName = 'GetObjByPrjTabRelaTypeIdAsync';

  if (IsNullOrEmpty(strPrjTabRelaTypeId) == true) {
    const strMsg = Format(
      '参数:[strPrjTabRelaTypeId]不能为空!(In clsPrjTabRelationTypeWApi.GetObjByPrjTabRelaTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjTabRelaTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPrjTabRelaTypeId]的长度:[{0}]不正确!(clsPrjTabRelationTypeWApi.GetObjByPrjTabRelaTypeIdAsync)',
      strPrjTabRelaTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPrjTabRelaTypeId';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjTabRelaTypeId,
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
      const objPrjTabRelationType = PrjTabRelationType_GetObjFromJsonObj(returnObj);
      return objPrjTabRelationType;
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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
 * @param strPrjTabRelaTypeId:所给的关键字
 * @returns 对象
 */
export async function PrjTabRelationType_GetObjByPrjTabRelaTypeIdlocalStorage(
  strPrjTabRelaTypeId: string,
) {
  const strThisFuncName = 'GetObjByPrjTabRelaTypeIdlocalStorage';

  if (IsNullOrEmpty(strPrjTabRelaTypeId) == true) {
    const strMsg = Format(
      '参数:[strPrjTabRelaTypeId]不能为空!(In clsPrjTabRelationTypeWApi.GetObjByPrjTabRelaTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjTabRelaTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPrjTabRelaTypeId]的长度:[{0}]不正确!(clsPrjTabRelationTypeWApi.GetObjByPrjTabRelaTypeIdlocalStorage)',
      strPrjTabRelaTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPrjTabRelationTypeEN._CurrTabName, strPrjTabRelaTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPrjTabRelationTypeCache: clsPrjTabRelationTypeEN = JSON.parse(strTempObj);
    return objPrjTabRelationTypeCache;
  }
  try {
    const objPrjTabRelationType = await PrjTabRelationType_GetObjByPrjTabRelaTypeIdAsync(
      strPrjTabRelaTypeId,
    );
    if (objPrjTabRelationType != null) {
      localStorage.setItem(strKey, JSON.stringify(objPrjTabRelationType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPrjTabRelationType;
    }
    return objPrjTabRelationType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPrjTabRelaTypeId,
      prjTabRelationType_ConstructorName,
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
 * @param strPrjTabRelaTypeId:所给的关键字
 * @returns 对象
 */
export async function PrjTabRelationType_GetObjByPrjTabRelaTypeIdCache(
  strPrjTabRelaTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByPrjTabRelaTypeIdCache';

  if (IsNullOrEmpty(strPrjTabRelaTypeId) == true) {
    const strMsg = Format(
      '参数:[strPrjTabRelaTypeId]不能为空!(In clsPrjTabRelationTypeWApi.GetObjByPrjTabRelaTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjTabRelaTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPrjTabRelaTypeId]的长度:[{0}]不正确!(clsPrjTabRelationTypeWApi.GetObjByPrjTabRelaTypeIdCache)',
      strPrjTabRelaTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjTabRelationTypeObjLstCache = await PrjTabRelationType_GetObjLstCache();
  try {
    const arrPrjTabRelationTypeSel = arrPrjTabRelationTypeObjLstCache.filter(
      (x) => x.prjTabRelaTypeId == strPrjTabRelaTypeId,
    );
    let objPrjTabRelationType: clsPrjTabRelationTypeEN;
    if (arrPrjTabRelationTypeSel.length > 0) {
      objPrjTabRelationType = arrPrjTabRelationTypeSel[0];
      return objPrjTabRelationType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPrjTabRelationTypeConst = await PrjTabRelationType_GetObjByPrjTabRelaTypeIdAsync(
          strPrjTabRelaTypeId,
        );
        if (objPrjTabRelationTypeConst != null) {
          PrjTabRelationType_ReFreshThisCache();
          return objPrjTabRelationTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPrjTabRelaTypeId,
      prjTabRelationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objPrjTabRelationType:所给的对象
 * @returns 对象
 */
export async function PrjTabRelationType_UpdateObjInLstCache(
  objPrjTabRelationType: clsPrjTabRelationTypeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPrjTabRelationTypeObjLstCache = await PrjTabRelationType_GetObjLstCache();
    const obj = arrPrjTabRelationTypeObjLstCache.find(
      (x) => x.tabRelationTypeName == objPrjTabRelationType.tabRelationTypeName,
    );
    if (obj != null) {
      objPrjTabRelationType.prjTabRelaTypeId = obj.prjTabRelaTypeId;
      ObjectAssign(obj, objPrjTabRelationType);
    } else {
      arrPrjTabRelationTypeObjLstCache.push(objPrjTabRelationType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      prjTabRelationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabRelationType_SortFunDefa(
  a: clsPrjTabRelationTypeEN,
  b: clsPrjTabRelationTypeEN,
): number {
  return a.prjTabRelaTypeId.localeCompare(b.prjTabRelaTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabRelationType_SortFunDefa2Fld(
  a: clsPrjTabRelationTypeEN,
  b: clsPrjTabRelationTypeEN,
): number {
  if (a.tabRelationTypeName == b.tabRelationTypeName)
    return a.tabRelationTypeENName.localeCompare(b.tabRelationTypeENName);
  else return a.tabRelationTypeName.localeCompare(b.tabRelationTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabRelationType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId:
        return (a: clsPrjTabRelationTypeEN, b: clsPrjTabRelationTypeEN) => {
          return a.prjTabRelaTypeId.localeCompare(b.prjTabRelaTypeId);
        };
      case clsPrjTabRelationTypeEN.con_TabRelationTypeName:
        return (a: clsPrjTabRelationTypeEN, b: clsPrjTabRelationTypeEN) => {
          return a.tabRelationTypeName.localeCompare(b.tabRelationTypeName);
        };
      case clsPrjTabRelationTypeEN.con_TabRelationTypeENName:
        return (a: clsPrjTabRelationTypeEN, b: clsPrjTabRelationTypeEN) => {
          if (a.tabRelationTypeENName == null) return -1;
          if (b.tabRelationTypeENName == null) return 1;
          return a.tabRelationTypeENName.localeCompare(b.tabRelationTypeENName);
        };
      case clsPrjTabRelationTypeEN.con_Memo:
        return (a: clsPrjTabRelationTypeEN, b: clsPrjTabRelationTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjTabRelationType]中不存在!(in ${prjTabRelationType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId:
        return (a: clsPrjTabRelationTypeEN, b: clsPrjTabRelationTypeEN) => {
          return b.prjTabRelaTypeId.localeCompare(a.prjTabRelaTypeId);
        };
      case clsPrjTabRelationTypeEN.con_TabRelationTypeName:
        return (a: clsPrjTabRelationTypeEN, b: clsPrjTabRelationTypeEN) => {
          return b.tabRelationTypeName.localeCompare(a.tabRelationTypeName);
        };
      case clsPrjTabRelationTypeEN.con_TabRelationTypeENName:
        return (a: clsPrjTabRelationTypeEN, b: clsPrjTabRelationTypeEN) => {
          if (b.tabRelationTypeENName == null) return -1;
          if (a.tabRelationTypeENName == null) return 1;
          return b.tabRelationTypeENName.localeCompare(a.tabRelationTypeENName);
        };
      case clsPrjTabRelationTypeEN.con_Memo:
        return (a: clsPrjTabRelationTypeEN, b: clsPrjTabRelationTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjTabRelationType]中不存在!(in ${prjTabRelationType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strPrjTabRelaTypeId:所给的关键字
 * @returns 对象
 */
export async function PrjTabRelationType_GetNameByPrjTabRelaTypeIdCache(
  strPrjTabRelaTypeId: string,
) {
  if (IsNullOrEmpty(strPrjTabRelaTypeId) == true) {
    const strMsg = Format(
      '参数:[strPrjTabRelaTypeId]不能为空!(In clsPrjTabRelationTypeWApi.GetNameByPrjTabRelaTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjTabRelaTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strPrjTabRelaTypeId]的长度:[{0}]不正确!(clsPrjTabRelationTypeWApi.GetNameByPrjTabRelaTypeIdCache)',
      strPrjTabRelaTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjTabRelationTypeObjLstCache = await PrjTabRelationType_GetObjLstCache();
  if (arrPrjTabRelationTypeObjLstCache == null) return '';
  try {
    const arrPrjTabRelationTypeSel = arrPrjTabRelationTypeObjLstCache.filter(
      (x) => x.prjTabRelaTypeId == strPrjTabRelaTypeId,
    );
    let objPrjTabRelationType: clsPrjTabRelationTypeEN;
    if (arrPrjTabRelationTypeSel.length > 0) {
      objPrjTabRelationType = arrPrjTabRelationTypeSel[0];
      return objPrjTabRelationType.tabRelationTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strPrjTabRelaTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PrjTabRelationType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId:
      return (obj: clsPrjTabRelationTypeEN) => {
        return obj.prjTabRelaTypeId === value;
      };
    case clsPrjTabRelationTypeEN.con_TabRelationTypeName:
      return (obj: clsPrjTabRelationTypeEN) => {
        return obj.tabRelationTypeName === value;
      };
    case clsPrjTabRelationTypeEN.con_TabRelationTypeENName:
      return (obj: clsPrjTabRelationTypeEN) => {
        return obj.tabRelationTypeENName === value;
      };
    case clsPrjTabRelationTypeEN.con_Memo:
      return (obj: clsPrjTabRelationTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrjTabRelationType]中不存在!(in ${prjTabRelationType_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function PrjTabRelationType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPrjTabRelationTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPrjTabRelationTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strPrjTabRelaTypeId = strInValue;
  if (IsNullOrEmpty(strPrjTabRelaTypeId) == true) {
    return '';
  }
  const objPrjTabRelationType = await PrjTabRelationType_GetObjByPrjTabRelaTypeIdCache(
    strPrjTabRelaTypeId,
  );
  if (objPrjTabRelationType == null) return '';
  if (objPrjTabRelationType.GetFldValue(strOutFldName) == null) return '';
  return objPrjTabRelationType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function PrjTabRelationType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrPrjTabRelationType = await PrjTabRelationType_GetObjLstCache();
  if (arrPrjTabRelationType == null) return [];
  let arrPrjTabRelationTypeSel = arrPrjTabRelationType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPrjTabRelationTypeSel.length == 0) return [];
  return arrPrjTabRelationTypeSel.map((x) => x.prjTabRelaTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjTabRelationType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPrjTabRelationTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

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
      const objPrjTabRelationType = PrjTabRelationType_GetObjFromJsonObj(returnObj);
      return objPrjTabRelationType;
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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjTabRelationTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjTabRelationTypeEN.WhereFormat) == false) {
    strWhereCond = clsPrjTabRelationTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsPrjTabRelationTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjTabRelationTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPrjTabRelationTypeExObjLstCache: Array<clsPrjTabRelationTypeEN> =
      CacheHelper.Get(strKey);
    const arrPrjTabRelationTypeObjLstT = PrjTabRelationType_GetObjLstByJSONObjLst(
      arrPrjTabRelationTypeExObjLstCache,
    );
    return arrPrjTabRelationTypeObjLstT;
  }
  try {
    const arrPrjTabRelationTypeExObjLst = await PrjTabRelationType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPrjTabRelationTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjTabRelationTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjTabRelationTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjTabRelationTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjTabRelationTypeEN.WhereFormat) == false) {
    strWhereCond = clsPrjTabRelationTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsPrjTabRelationTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjTabRelationTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjTabRelationTypeExObjLstCache: Array<clsPrjTabRelationTypeEN> =
      JSON.parse(strTempObjLst);
    const arrPrjTabRelationTypeObjLstT = PrjTabRelationType_GetObjLstByJSONObjLst(
      arrPrjTabRelationTypeExObjLstCache,
    );
    return arrPrjTabRelationTypeObjLstT;
  }
  try {
    const arrPrjTabRelationTypeExObjLst = await PrjTabRelationType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPrjTabRelationTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjTabRelationTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjTabRelationTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjTabRelationTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjTabRelationTypeObjLstCache: Array<clsPrjTabRelationTypeEN> =
      JSON.parse(strTempObjLst);
    return arrPrjTabRelationTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PrjTabRelationType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPrjTabRelationTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

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
          prjTabRelationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabRelationType_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjTabRelationTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjTabRelationTypeEN.WhereFormat) == false) {
    strWhereCond = clsPrjTabRelationTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsPrjTabRelationTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjTabRelationTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjTabRelationTypeExObjLstCache: Array<clsPrjTabRelationTypeEN> =
      JSON.parse(strTempObjLst);
    const arrPrjTabRelationTypeObjLstT = PrjTabRelationType_GetObjLstByJSONObjLst(
      arrPrjTabRelationTypeExObjLstCache,
    );
    return arrPrjTabRelationTypeObjLstT;
  }
  try {
    const arrPrjTabRelationTypeExObjLst = await PrjTabRelationType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPrjTabRelationTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjTabRelationTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjTabRelationTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjTabRelationTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjTabRelationTypeObjLstCache: Array<clsPrjTabRelationTypeEN> =
      JSON.parse(strTempObjLst);
    return arrPrjTabRelationTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjTabRelationType_GetObjLstCache(): Promise<Array<clsPrjTabRelationTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrPrjTabRelationTypeObjLstCache;
  switch (clsPrjTabRelationTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjTabRelationTypeObjLstCache = await PrjTabRelationType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrPrjTabRelationTypeObjLstCache = await PrjTabRelationType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrPrjTabRelationTypeObjLstCache = await PrjTabRelationType_GetObjLstClientCache();
      break;
    default:
      arrPrjTabRelationTypeObjLstCache = await PrjTabRelationType_GetObjLstClientCache();
      break;
  }
  return arrPrjTabRelationTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjTabRelationType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPrjTabRelationTypeObjLstCache;
  switch (clsPrjTabRelationTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjTabRelationTypeObjLstCache =
        await PrjTabRelationType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrPrjTabRelationTypeObjLstCache = await PrjTabRelationType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrPrjTabRelationTypeObjLstCache = null;
      break;
    default:
      arrPrjTabRelationTypeObjLstCache = null;
      break;
  }
  return arrPrjTabRelationTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPrjTabRelaTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjTabRelationType_GetSubObjLstCache(
  objPrjTabRelationTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPrjTabRelationTypeObjLstCache = await PrjTabRelationType_GetObjLstCache();
  let arrPrjTabRelationTypeSel = arrPrjTabRelationTypeObjLstCache;
  if (objPrjTabRelationTypeCond.GetConditions().length == 0) return arrPrjTabRelationTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objPrjTabRelationTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPrjTabRelationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjTabRelationTypeCond),
      prjTabRelationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjTabRelationTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPrjTabRelaTypeId:关键字列表
 * @returns 对象列表
 **/
export async function PrjTabRelationType_GetObjLstByPrjTabRelaTypeIdLstAsync(
  arrPrjTabRelaTypeId: Array<string>,
): Promise<Array<clsPrjTabRelationTypeEN>> {
  const strThisFuncName = 'GetObjLstByPrjTabRelaTypeIdLstAsync';
  const strAction = 'GetObjLstByPrjTabRelaTypeIdLst';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrjTabRelaTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          prjTabRelationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabRelationType_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
 * @param arrstrPrjTabRelaTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function PrjTabRelationType_GetObjLstByPrjTabRelaTypeIdLstCache(
  arrPrjTabRelaTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByPrjTabRelaTypeIdLstCache';
  try {
    const arrPrjTabRelationTypeObjLstCache = await PrjTabRelationType_GetObjLstCache();
    const arrPrjTabRelationTypeSel = arrPrjTabRelationTypeObjLstCache.filter(
      (x) => arrPrjTabRelaTypeIdLst.indexOf(x.prjTabRelaTypeId) > -1,
    );
    return arrPrjTabRelationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPrjTabRelaTypeIdLst.join(','),
      prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrjTabRelationTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

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
          prjTabRelationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabRelationType_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrjTabRelationTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

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
          prjTabRelationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabRelationType_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjTabRelationTypeEN>();
  const arrPrjTabRelationTypeObjLstCache = await PrjTabRelationType_GetObjLstCache();
  if (arrPrjTabRelationTypeObjLstCache.length == 0) return arrPrjTabRelationTypeObjLstCache;
  let arrPrjTabRelationTypeSel = arrPrjTabRelationTypeObjLstCache;
  const objPrjTabRelationTypeCond = objPagerPara.conditionCollection;
  if (objPrjTabRelationTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsPrjTabRelationTypeEN>();
  }
  //console.log("clsPrjTabRelationTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objPrjTabRelationTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPrjTabRelationTypeSel.length == 0) return arrPrjTabRelationTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.sort(
        PrjTabRelationType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.sort(objPagerPara.sortFun);
    }
    arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.slice(intStart, intEnd);
    return arrPrjTabRelationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjTabRelationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjTabRelationTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PrjTabRelationType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjTabRelationTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjTabRelationTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

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
          prjTabRelationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjTabRelationType_GetObjLstByJSONObjLst(returnObjLst);
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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
 * @param strPrjTabRelaTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function PrjTabRelationType_DelRecordAsync(
  strPrjTabRelaTypeId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strPrjTabRelaTypeId);

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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
 * @param arrPrjTabRelaTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PrjTabRelationType_DelPrjTabRelationTypesAsync(
  arrPrjTabRelaTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelPrjTabRelationTypesAsync';
  const strAction = 'DelPrjTabRelationTypes';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrjTabRelaTypeId, config);
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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PrjTabRelationType_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjTabRelationTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrPrjTabRelationTypeObjLst = await PrjTabRelationType_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsPrjTabRelationTypeENEx>();
  const arrPrjTabRelationTypeExObjLst = arrPrjTabRelationTypeObjLst.map((obj) => {
    const cacheKey = `${obj.prjTabRelaTypeId}`;
    if (prjTabRelationTypeCache[cacheKey]) {
      const oldObj = prjTabRelationTypeCache[cacheKey];
      return oldObj;
    } else {
      const newObj = PrjTabRelationType_CopyToEx(obj);
      arrNewObj.push(newObj);
      prjTabRelationTypeCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await PrjTabRelationType_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsPrjTabRelationTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrPrjTabRelationTypeExObjLst) {
      await PrjTabRelationType_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.prjTabRelaTypeId}`;
      prjTabRelationTypeCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrPrjTabRelationTypeExObjLst.length == 0) return arrPrjTabRelationTypeExObjLst;
  let arrPrjTabRelationTypeSel: Array<clsPrjTabRelationTypeENEx> = arrPrjTabRelationTypeExObjLst;
  const objPrjTabRelationTypeCond = objPagerPara.conditionCollection;
  if (objPrjTabRelationTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrPrjTabRelationTypeExObjLst;
  }
  try {
    for (const objCondition of objPrjTabRelationTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPrjTabRelationTypeSel.length == 0) return arrPrjTabRelationTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.sort(
        PrjTabRelationType_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.sort(objPagerPara.sortFun);
    }
    arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.slice(intStart, intEnd);
    return arrPrjTabRelationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjTabRelationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjTabRelationTypeENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objPrjTabRelationTypeENS:源对象
 * @returns 目标对象=>clsPrjTabRelationTypeEN:objPrjTabRelationTypeENT
 **/
export function PrjTabRelationType_CopyToEx(
  objPrjTabRelationTypeENS: clsPrjTabRelationTypeEN,
): clsPrjTabRelationTypeENEx {
  const strThisFuncName = PrjTabRelationType_CopyToEx.name;
  const objPrjTabRelationTypeENT = new clsPrjTabRelationTypeENEx();
  try {
    ObjectAssign(objPrjTabRelationTypeENT, objPrjTabRelationTypeENS);
    return objPrjTabRelationTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjTabRelationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPrjTabRelationTypeENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function PrjTabRelationType_FuncMapByFldName(
  strFldName: string,
  objPrjTabRelationTypeEx: clsPrjTabRelationTypeENEx,
) {
  const strThisFuncName = PrjTabRelationType_FuncMapByFldName.name;
  console.log(objPrjTabRelationTypeEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsPrjTabRelationTypeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjTabRelationType_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return PrjTabRelationType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return PrjTabRelationType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function PrjTabRelationType_DelPrjTabRelationTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPrjTabRelationTypesByCondAsync';
  const strAction = 'DelPrjTabRelationTypesByCond';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
 * @param objPrjTabRelationTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjTabRelationType_AddNewRecordAsync(
  objPrjTabRelationTypeEN: clsPrjTabRelationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPrjTabRelationTypeEN);
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabRelationTypeEN, config);
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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
 * @param objPrjTabRelationTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjTabRelationType_AddNewRecordWithMaxIdAsync(
  objPrjTabRelationTypeEN: clsPrjTabRelationTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabRelationTypeEN, config);
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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_AddNewObjSave(
  objPrjTabRelationTypeEN: clsPrjTabRelationTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    PrjTabRelationType_CheckPropertyNew(objPrjTabRelationTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjTabRelationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjTabRelationType_CheckUniCond4Add(objPrjTabRelationTypeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await PrjTabRelationType_AddNewRecordWithMaxIdAsync(
      objPrjTabRelationTypeEN,
    );
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      PrjTabRelationType_ReFreshCache();
    } else {
      const strInfo = `添加[工程表关系类型(PrjTabRelationType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${prjTabRelationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function PrjTabRelationType_CheckUniCond4Add(
  objPrjTabRelationTypeEN: clsPrjTabRelationTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = PrjTabRelationType_GetUniCondStr(objPrjTabRelationTypeEN);
  const bolIsExistCondition = await PrjTabRelationType_IsExistRecordAsync(strUniquenessCondition);
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
export async function PrjTabRelationType_CheckUniCond4Update(
  objPrjTabRelationTypeEN: clsPrjTabRelationTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = PrjTabRelationType_GetUniCondStr4Update(objPrjTabRelationTypeEN);
  const bolIsExistCondition = await PrjTabRelationType_IsExistRecordAsync(strUniquenessCondition);
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
export async function PrjTabRelationType_UpdateObjSave(
  objPrjTabRelationTypeEN: clsPrjTabRelationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objPrjTabRelationTypeEN.sfUpdFldSetStr = objPrjTabRelationTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objPrjTabRelationTypeEN.prjTabRelaTypeId == '' ||
    objPrjTabRelationTypeEN.prjTabRelaTypeId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    PrjTabRelationType_CheckProperty4Update(objPrjTabRelationTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjTabRelationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjTabRelationType_CheckUniCond4Update(objPrjTabRelationTypeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await PrjTabRelationType_UpdateRecordAsync(objPrjTabRelationTypeEN);
    if (returnBool == true) {
      PrjTabRelationType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${prjTabRelationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objPrjTabRelationTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrjTabRelationType_AddNewRecordWithReturnKeyAsync(
  objPrjTabRelationTypeEN: clsPrjTabRelationTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabRelationTypeEN, config);
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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
 * @param objPrjTabRelationTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjTabRelationType_UpdateRecordAsync(
  objPrjTabRelationTypeEN: clsPrjTabRelationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrjTabRelationTypeEN.sfUpdFldSetStr === undefined ||
    objPrjTabRelationTypeEN.sfUpdFldSetStr === null ||
    objPrjTabRelationTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjTabRelationTypeEN.prjTabRelaTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabRelationTypeEN, config);
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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
 * @param objPrjTabRelationTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjTabRelationType_EditRecordExAsync(
  objPrjTabRelationTypeEN: clsPrjTabRelationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objPrjTabRelationTypeEN.sfUpdFldSetStr === undefined ||
    objPrjTabRelationTypeEN.sfUpdFldSetStr === null ||
    objPrjTabRelationTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjTabRelationTypeEN.prjTabRelaTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabRelationTypeEN, config);
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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
 * @param objPrjTabRelationTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjTabRelationType_UpdateWithConditionAsync(
  objPrjTabRelationTypeEN: clsPrjTabRelationTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrjTabRelationTypeEN.sfUpdFldSetStr === undefined ||
    objPrjTabRelationTypeEN.sfUpdFldSetStr === null ||
    objPrjTabRelationTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjTabRelationTypeEN.prjTabRelaTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);
  objPrjTabRelationTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjTabRelationTypeEN, config);
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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
 * @param objstrPrjTabRelaTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjTabRelationType_IsExistRecordCache(
  objPrjTabRelationTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPrjTabRelationTypeObjLstCache = await PrjTabRelationType_GetObjLstCache();
  if (arrPrjTabRelationTypeObjLstCache == null) return false;
  let arrPrjTabRelationTypeSel = arrPrjTabRelationTypeObjLstCache;
  if (objPrjTabRelationTypeCond.GetConditions().length == 0)
    return arrPrjTabRelationTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objPrjTabRelationTypeCond.GetConditions()) {
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
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPrjTabRelationTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPrjTabRelationTypeCond),
      prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
 * @param strPrjTabRelaTypeId:所给的关键字
 * @returns 对象
 */
export async function PrjTabRelationType_IsExistCache(strPrjTabRelaTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrPrjTabRelationTypeObjLstCache = await PrjTabRelationType_GetObjLstCache();
  if (arrPrjTabRelationTypeObjLstCache == null) return false;
  try {
    const arrPrjTabRelationTypeSel = arrPrjTabRelationTypeObjLstCache.filter(
      (x) => x.prjTabRelaTypeId == strPrjTabRelaTypeId,
    );
    if (arrPrjTabRelationTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strPrjTabRelaTypeId,
      prjTabRelationType_ConstructorName,
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
 * @param strPrjTabRelaTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PrjTabRelationType_IsExistAsync(
  strPrjTabRelaTypeId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjTabRelaTypeId,
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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
 * @param objPrjTabRelationTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function PrjTabRelationType_GetRecCountByCondCache(
  objPrjTabRelationTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPrjTabRelationTypeObjLstCache = await PrjTabRelationType_GetObjLstCache();
  if (arrPrjTabRelationTypeObjLstCache == null) return 0;
  let arrPrjTabRelationTypeSel = arrPrjTabRelationTypeObjLstCache;
  if (objPrjTabRelationTypeCond.GetConditions().length == 0) return arrPrjTabRelationTypeSel.length;
  try {
    for (const objCondition of objPrjTabRelationTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjTabRelationTypeSel = arrPrjTabRelationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPrjTabRelationTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjTabRelationTypeCond),
      prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
export async function PrjTabRelationType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjTabRelationType_Controller, strAction);

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
        prjTabRelationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjTabRelationType_ConstructorName,
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
export function PrjTabRelationType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PrjTabRelationType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsPrjTabRelationTypeEN._CurrTabName;
  switch (clsPrjTabRelationTypeEN.CacheModeId) {
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
  clsPrjTabRelationTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function PrjTabRelationType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsPrjTabRelationTypeEN._CurrTabName;
    switch (clsPrjTabRelationTypeEN.CacheModeId) {
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
    clsPrjTabRelationTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function PrjTabRelationType_GetLastRefreshTime(): string {
  if (clsPrjTabRelationTypeEN._RefreshTimeLst.length == 0) return '';
  return clsPrjTabRelationTypeEN._RefreshTimeLst[
    clsPrjTabRelationTypeEN._RefreshTimeLst.length - 1
  ];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function PrjTabRelationType_BindDdl_PrjTabRelaTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_PrjTabRelaTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrjTabRelaTypeIdInDivCache");
  const arrObjLstSel = await PrjTabRelationType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId,
    clsPrjTabRelationTypeEN.con_TabRelationTypeName,
    '工程表关系类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function PrjTabRelationType_GetArrPrjTabRelationType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrjTabRelaTypeIdInDivCache");
  const arrPrjTabRelationType = new Array<clsPrjTabRelationTypeEN>();
  const arrObjLstSel = await PrjTabRelationType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsPrjTabRelationTypeEN();
  obj0.prjTabRelaTypeId = '0';
  obj0.tabRelationTypeName = '选工程表关系类型...';
  arrPrjTabRelationType.push(obj0);
  arrObjLstSel.forEach((x) => arrPrjTabRelationType.push(x));
  return arrPrjTabRelationType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjTabRelationType_CheckPropertyNew(
  pobjPrjTabRelationTypeEN: clsPrjTabRelationTypeEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPrjTabRelationTypeEN.tabRelationTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[表关系类型名]不能为空(In 工程表关系类型)!(clsPrjTabRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.prjTabRelaTypeId) == false &&
    GetStrLen(pobjPrjTabRelationTypeEN.prjTabRelaTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表关系类型Id(prjTabRelaTypeId)]的长度不能超过2(In 工程表关系类型(PrjTabRelationType))!值:${pobjPrjTabRelationTypeEN.prjTabRelaTypeId}(clsPrjTabRelationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.tabRelationTypeName) == false &&
    GetStrLen(pobjPrjTabRelationTypeEN.tabRelationTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表关系类型名(tabRelationTypeName)]的长度不能超过30(In 工程表关系类型(PrjTabRelationType))!值:${pobjPrjTabRelationTypeEN.tabRelationTypeName}(clsPrjTabRelationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.tabRelationTypeENName) == false &&
    GetStrLen(pobjPrjTabRelationTypeEN.tabRelationTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表关系类型英文名(tabRelationTypeENName)]的长度不能超过50(In 工程表关系类型(PrjTabRelationType))!值:${pobjPrjTabRelationTypeEN.tabRelationTypeENName}(clsPrjTabRelationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.memo) == false &&
    GetStrLen(pobjPrjTabRelationTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 工程表关系类型(PrjTabRelationType))!值:${pobjPrjTabRelationTypeEN.memo}(clsPrjTabRelationTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.prjTabRelaTypeId) == false &&
    undefined !== pobjPrjTabRelationTypeEN.prjTabRelaTypeId &&
    tzDataType.isString(pobjPrjTabRelationTypeEN.prjTabRelaTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表关系类型Id(prjTabRelaTypeId)]的值:[${pobjPrjTabRelationTypeEN.prjTabRelaTypeId}], 非法,应该为字符型(In 工程表关系类型(PrjTabRelationType))!(clsPrjTabRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.tabRelationTypeName) == false &&
    undefined !== pobjPrjTabRelationTypeEN.tabRelationTypeName &&
    tzDataType.isString(pobjPrjTabRelationTypeEN.tabRelationTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表关系类型名(tabRelationTypeName)]的值:[${pobjPrjTabRelationTypeEN.tabRelationTypeName}], 非法,应该为字符型(In 工程表关系类型(PrjTabRelationType))!(clsPrjTabRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.tabRelationTypeENName) == false &&
    undefined !== pobjPrjTabRelationTypeEN.tabRelationTypeENName &&
    tzDataType.isString(pobjPrjTabRelationTypeEN.tabRelationTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表关系类型英文名(tabRelationTypeENName)]的值:[${pobjPrjTabRelationTypeEN.tabRelationTypeENName}], 非法,应该为字符型(In 工程表关系类型(PrjTabRelationType))!(clsPrjTabRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.memo) == false &&
    undefined !== pobjPrjTabRelationTypeEN.memo &&
    tzDataType.isString(pobjPrjTabRelationTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjPrjTabRelationTypeEN.memo}], 非法,应该为字符型(In 工程表关系类型(PrjTabRelationType))!(clsPrjTabRelationTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjTabRelationType_CheckProperty4Update(
  pobjPrjTabRelationTypeEN: clsPrjTabRelationTypeEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.prjTabRelaTypeId) == false &&
    GetStrLen(pobjPrjTabRelationTypeEN.prjTabRelaTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表关系类型Id(prjTabRelaTypeId)]的长度不能超过2(In 工程表关系类型(PrjTabRelationType))!值:${pobjPrjTabRelationTypeEN.prjTabRelaTypeId}(clsPrjTabRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.tabRelationTypeName) == false &&
    GetStrLen(pobjPrjTabRelationTypeEN.tabRelationTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表关系类型名(tabRelationTypeName)]的长度不能超过30(In 工程表关系类型(PrjTabRelationType))!值:${pobjPrjTabRelationTypeEN.tabRelationTypeName}(clsPrjTabRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.tabRelationTypeENName) == false &&
    GetStrLen(pobjPrjTabRelationTypeEN.tabRelationTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表关系类型英文名(tabRelationTypeENName)]的长度不能超过50(In 工程表关系类型(PrjTabRelationType))!值:${pobjPrjTabRelationTypeEN.tabRelationTypeENName}(clsPrjTabRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.memo) == false &&
    GetStrLen(pobjPrjTabRelationTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 工程表关系类型(PrjTabRelationType))!值:${pobjPrjTabRelationTypeEN.memo}(clsPrjTabRelationTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.prjTabRelaTypeId) == false &&
    undefined !== pobjPrjTabRelationTypeEN.prjTabRelaTypeId &&
    tzDataType.isString(pobjPrjTabRelationTypeEN.prjTabRelaTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表关系类型Id(prjTabRelaTypeId)]的值:[${pobjPrjTabRelationTypeEN.prjTabRelaTypeId}], 非法,应该为字符型(In 工程表关系类型(PrjTabRelationType))!(clsPrjTabRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.tabRelationTypeName) == false &&
    undefined !== pobjPrjTabRelationTypeEN.tabRelationTypeName &&
    tzDataType.isString(pobjPrjTabRelationTypeEN.tabRelationTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表关系类型名(tabRelationTypeName)]的值:[${pobjPrjTabRelationTypeEN.tabRelationTypeName}], 非法,应该为字符型(In 工程表关系类型(PrjTabRelationType))!(clsPrjTabRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.tabRelationTypeENName) == false &&
    undefined !== pobjPrjTabRelationTypeEN.tabRelationTypeENName &&
    tzDataType.isString(pobjPrjTabRelationTypeEN.tabRelationTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表关系类型英文名(tabRelationTypeENName)]的值:[${pobjPrjTabRelationTypeEN.tabRelationTypeENName}], 非法,应该为字符型(In 工程表关系类型(PrjTabRelationType))!(clsPrjTabRelationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjTabRelationTypeEN.memo) == false &&
    undefined !== pobjPrjTabRelationTypeEN.memo &&
    tzDataType.isString(pobjPrjTabRelationTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjPrjTabRelationTypeEN.memo}], 非法,应该为字符型(In 工程表关系类型(PrjTabRelationType))!(clsPrjTabRelationTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjTabRelationType_GetJSONStrByObj(
  pobjPrjTabRelationTypeEN: clsPrjTabRelationTypeEN,
): string {
  pobjPrjTabRelationTypeEN.sfUpdFldSetStr = pobjPrjTabRelationTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrjTabRelationTypeEN);
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
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PrjTabRelationType_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsPrjTabRelationTypeEN> {
  let arrPrjTabRelationTypeObjLst = new Array<clsPrjTabRelationTypeEN>();
  if (strJSON === '') {
    return arrPrjTabRelationTypeObjLst;
  }
  try {
    arrPrjTabRelationTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrjTabRelationTypeObjLst;
  }
  return arrPrjTabRelationTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrjTabRelationTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrjTabRelationType_GetObjLstByJSONObjLst(
  arrPrjTabRelationTypeObjLstS: Array<clsPrjTabRelationTypeEN>,
): Array<clsPrjTabRelationTypeEN> {
  const arrPrjTabRelationTypeObjLst = new Array<clsPrjTabRelationTypeEN>();
  for (const objInFor of arrPrjTabRelationTypeObjLstS) {
    const obj1 = PrjTabRelationType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrjTabRelationTypeObjLst.push(obj1);
  }
  return arrPrjTabRelationTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjTabRelationType_GetObjByJSONStr(strJSON: string): clsPrjTabRelationTypeEN {
  let pobjPrjTabRelationTypeEN = new clsPrjTabRelationTypeEN();
  if (strJSON === '') {
    return pobjPrjTabRelationTypeEN;
  }
  try {
    pobjPrjTabRelationTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrjTabRelationTypeEN;
  }
  return pobjPrjTabRelationTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrjTabRelationType_GetCombineCondition(
  objPrjTabRelationTypeCond: clsPrjTabRelationTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationTypeCond.dicFldComparisonOp,
      clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId,
    ) == true
  ) {
    const strComparisonOpPrjTabRelaTypeId: string =
      objPrjTabRelationTypeCond.dicFldComparisonOp[clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationTypeEN.con_PrjTabRelaTypeId,
      objPrjTabRelationTypeCond.prjTabRelaTypeId,
      strComparisonOpPrjTabRelaTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationTypeCond.dicFldComparisonOp,
      clsPrjTabRelationTypeEN.con_TabRelationTypeName,
    ) == true
  ) {
    const strComparisonOpTabRelationTypeName: string =
      objPrjTabRelationTypeCond.dicFldComparisonOp[clsPrjTabRelationTypeEN.con_TabRelationTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationTypeEN.con_TabRelationTypeName,
      objPrjTabRelationTypeCond.tabRelationTypeName,
      strComparisonOpTabRelationTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationTypeCond.dicFldComparisonOp,
      clsPrjTabRelationTypeEN.con_TabRelationTypeENName,
    ) == true
  ) {
    const strComparisonOpTabRelationTypeENName: string =
      objPrjTabRelationTypeCond.dicFldComparisonOp[
        clsPrjTabRelationTypeEN.con_TabRelationTypeENName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationTypeEN.con_TabRelationTypeENName,
      objPrjTabRelationTypeCond.tabRelationTypeENName,
      strComparisonOpTabRelationTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjTabRelationTypeCond.dicFldComparisonOp,
      clsPrjTabRelationTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPrjTabRelationTypeCond.dicFldComparisonOp[clsPrjTabRelationTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjTabRelationTypeEN.con_Memo,
      objPrjTabRelationTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjTabRelationType(工程表关系类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTabRelationTypeName: 表关系类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjTabRelationType_GetUniCondStr(
  objPrjTabRelationTypeEN: clsPrjTabRelationTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and TabRelationTypeName = '{0}'",
    objPrjTabRelationTypeEN.tabRelationTypeName,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjTabRelationType(工程表关系类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTabRelationTypeName: 表关系类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjTabRelationType_GetUniCondStr4Update(
  objPrjTabRelationTypeEN: clsPrjTabRelationTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and PrjTabRelaTypeId <> '{0}'",
    objPrjTabRelationTypeEN.prjTabRelaTypeId,
  );
  strWhereCond += Format(
    " and TabRelationTypeName = '{0}'",
    objPrjTabRelationTypeEN.tabRelationTypeName,
  );
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrjTabRelationTypeENS:源对象
 * @param objPrjTabRelationTypeENT:目标对象
 */
export function PrjTabRelationType_GetObjFromJsonObj(
  objPrjTabRelationTypeENS: clsPrjTabRelationTypeEN,
): clsPrjTabRelationTypeEN {
  const objPrjTabRelationTypeENT: clsPrjTabRelationTypeEN = new clsPrjTabRelationTypeEN();
  ObjectAssign(objPrjTabRelationTypeENT, objPrjTabRelationTypeENS);
  return objPrjTabRelationTypeENT;
}
