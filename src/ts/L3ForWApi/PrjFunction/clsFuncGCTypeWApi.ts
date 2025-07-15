/**
 * 类名:clsFuncGCTypeWApi
 * 表名:FuncGCType(00050409)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:41:40
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 函数生成代码类型(FuncGCType)
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
import { clsFuncGCTypeEN } from '@/ts/L0Entity/PrjFunction/clsFuncGCTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const funcGCType_Controller = 'FuncGCTypeApi';
export const funcGCType_ConstructorName = 'funcGCType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncGCTypeId:关键字
 * @returns 对象
 **/
export async function FuncGCType_GetObjByFuncGCTypeIdAsync(
  strFuncGCTypeId: string,
): Promise<clsFuncGCTypeEN | null> {
  const strThisFuncName = 'GetObjByFuncGCTypeIdAsync';

  if (IsNullOrEmpty(strFuncGCTypeId) == true) {
    const strMsg = Format(
      '参数:[strFuncGCTypeId]不能为空!(In clsFuncGCTypeWApi.GetObjByFuncGCTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncGCTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncGCTypeId]的长度:[{0}]不正确!(clsFuncGCTypeWApi.GetObjByFuncGCTypeIdAsync)',
      strFuncGCTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncGCTypeId';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncGCTypeId,
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
      const objFuncGCType = FuncGCType_GetObjFromJsonObj(returnObj);
      return objFuncGCType;
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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
 * @param strFuncGCTypeId:所给的关键字
 * @returns 对象
 */
export async function FuncGCType_GetObjByFuncGCTypeIdCache(
  strFuncGCTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFuncGCTypeIdCache';

  if (IsNullOrEmpty(strFuncGCTypeId) == true) {
    const strMsg = Format(
      '参数:[strFuncGCTypeId]不能为空!(In clsFuncGCTypeWApi.GetObjByFuncGCTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncGCTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncGCTypeId]的长度:[{0}]不正确!(clsFuncGCTypeWApi.GetObjByFuncGCTypeIdCache)',
      strFuncGCTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFuncGCTypeObjLstCache = await FuncGCType_GetObjLstCache();
  try {
    const arrFuncGCTypeSel = arrFuncGCTypeObjLstCache.filter(
      (x) => x.funcGCTypeId == strFuncGCTypeId,
    );
    let objFuncGCType: clsFuncGCTypeEN;
    if (arrFuncGCTypeSel.length > 0) {
      objFuncGCType = arrFuncGCTypeSel[0];
      return objFuncGCType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFuncGCTypeConst = await FuncGCType_GetObjByFuncGCTypeIdAsync(strFuncGCTypeId);
        if (objFuncGCTypeConst != null) {
          FuncGCType_ReFreshThisCache();
          return objFuncGCTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncGCTypeId,
      funcGCType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strFuncGCTypeId:所给的关键字
 * @returns 对象
 */
export async function FuncGCType_GetObjByFuncGCTypeIdlocalStorage(strFuncGCTypeId: string) {
  const strThisFuncName = 'GetObjByFuncGCTypeIdlocalStorage';

  if (IsNullOrEmpty(strFuncGCTypeId) == true) {
    const strMsg = Format(
      '参数:[strFuncGCTypeId]不能为空!(In clsFuncGCTypeWApi.GetObjByFuncGCTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncGCTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncGCTypeId]的长度:[{0}]不正确!(clsFuncGCTypeWApi.GetObjByFuncGCTypeIdlocalStorage)',
      strFuncGCTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFuncGCTypeEN._CurrTabName, strFuncGCTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFuncGCTypeCache: clsFuncGCTypeEN = JSON.parse(strTempObj);
    return objFuncGCTypeCache;
  }
  try {
    const objFuncGCType = await FuncGCType_GetObjByFuncGCTypeIdAsync(strFuncGCTypeId);
    if (objFuncGCType != null) {
      localStorage.setItem(strKey, JSON.stringify(objFuncGCType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFuncGCType;
    }
    return objFuncGCType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncGCTypeId,
      funcGCType_ConstructorName,
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
 * @param objFuncGCType:所给的对象
 * @returns 对象
 */
export async function FuncGCType_UpdateObjInLstCache(objFuncGCType: clsFuncGCTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFuncGCTypeObjLstCache = await FuncGCType_GetObjLstCache();
    const obj = arrFuncGCTypeObjLstCache.find(
      (x) => x.funcGCTypeName == objFuncGCType.funcGCTypeName,
    );
    if (obj != null) {
      objFuncGCType.funcGCTypeId = obj.funcGCTypeId;
      ObjectAssign(obj, objFuncGCType);
    } else {
      arrFuncGCTypeObjLstCache.push(objFuncGCType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      funcGCType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFuncGCTypeId:所给的关键字
 * @returns 对象
 */
export async function FuncGCType_GetNameByFuncGCTypeIdCache(strFuncGCTypeId: string) {
  if (IsNullOrEmpty(strFuncGCTypeId) == true) {
    const strMsg = Format(
      '参数:[strFuncGCTypeId]不能为空!(In clsFuncGCTypeWApi.GetNameByFuncGCTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncGCTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFuncGCTypeId]的长度:[{0}]不正确!(clsFuncGCTypeWApi.GetNameByFuncGCTypeIdCache)',
      strFuncGCTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFuncGCTypeObjLstCache = await FuncGCType_GetObjLstCache();
  if (arrFuncGCTypeObjLstCache == null) return '';
  try {
    const arrFuncGCTypeSel = arrFuncGCTypeObjLstCache.filter(
      (x) => x.funcGCTypeId == strFuncGCTypeId,
    );
    let objFuncGCType: clsFuncGCTypeEN;
    if (arrFuncGCTypeSel.length > 0) {
      objFuncGCType = arrFuncGCTypeSel[0];
      return objFuncGCType.funcGCTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strFuncGCTypeId,
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
export async function FuncGCType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsFuncGCTypeEN.con_FuncGCTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFuncGCTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFuncGCTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFuncGCTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objFuncGCType = await FuncGCType_GetObjByFuncGCTypeIdCache(strFuncGCTypeId);
  if (objFuncGCType == null) return '';
  if (objFuncGCType.GetFldValue(strOutFldName) == null) return '';
  return objFuncGCType.GetFldValue(strOutFldName).toString();
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
export function FuncGCType_SortFunDefa(a: clsFuncGCTypeEN, b: clsFuncGCTypeEN): number {
  return a.funcGCTypeId.localeCompare(b.funcGCTypeId);
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
export function FuncGCType_SortFunDefa2Fld(a: clsFuncGCTypeEN, b: clsFuncGCTypeEN): number {
  if (a.funcGCTypeName == b.funcGCTypeName)
    return a.funcGCTypeENName.localeCompare(b.funcGCTypeENName);
  else return a.funcGCTypeName.localeCompare(b.funcGCTypeName);
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
export function FuncGCType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFuncGCTypeEN.con_FuncGCTypeId:
        return (a: clsFuncGCTypeEN, b: clsFuncGCTypeEN) => {
          return a.funcGCTypeId.localeCompare(b.funcGCTypeId);
        };
      case clsFuncGCTypeEN.con_FuncGCTypeName:
        return (a: clsFuncGCTypeEN, b: clsFuncGCTypeEN) => {
          if (a.funcGCTypeName == null) return -1;
          if (b.funcGCTypeName == null) return 1;
          return a.funcGCTypeName.localeCompare(b.funcGCTypeName);
        };
      case clsFuncGCTypeEN.con_FuncGCTypeENName:
        return (a: clsFuncGCTypeEN, b: clsFuncGCTypeEN) => {
          if (a.funcGCTypeENName == null) return -1;
          if (b.funcGCTypeENName == null) return 1;
          return a.funcGCTypeENName.localeCompare(b.funcGCTypeENName);
        };
      case clsFuncGCTypeEN.con_UpdDate:
        return (a: clsFuncGCTypeEN, b: clsFuncGCTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFuncGCTypeEN.con_UpdUser:
        return (a: clsFuncGCTypeEN, b: clsFuncGCTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFuncGCTypeEN.con_Memo:
        return (a: clsFuncGCTypeEN, b: clsFuncGCTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FuncGCType]中不存在!(in ${funcGCType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFuncGCTypeEN.con_FuncGCTypeId:
        return (a: clsFuncGCTypeEN, b: clsFuncGCTypeEN) => {
          return b.funcGCTypeId.localeCompare(a.funcGCTypeId);
        };
      case clsFuncGCTypeEN.con_FuncGCTypeName:
        return (a: clsFuncGCTypeEN, b: clsFuncGCTypeEN) => {
          if (b.funcGCTypeName == null) return -1;
          if (a.funcGCTypeName == null) return 1;
          return b.funcGCTypeName.localeCompare(a.funcGCTypeName);
        };
      case clsFuncGCTypeEN.con_FuncGCTypeENName:
        return (a: clsFuncGCTypeEN, b: clsFuncGCTypeEN) => {
          if (b.funcGCTypeENName == null) return -1;
          if (a.funcGCTypeENName == null) return 1;
          return b.funcGCTypeENName.localeCompare(a.funcGCTypeENName);
        };
      case clsFuncGCTypeEN.con_UpdDate:
        return (a: clsFuncGCTypeEN, b: clsFuncGCTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFuncGCTypeEN.con_UpdUser:
        return (a: clsFuncGCTypeEN, b: clsFuncGCTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFuncGCTypeEN.con_Memo:
        return (a: clsFuncGCTypeEN, b: clsFuncGCTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FuncGCType]中不存在!(in ${funcGCType_ConstructorName}.${strThisFuncName})`;
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
export async function FuncGCType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFuncGCTypeEN.con_FuncGCTypeId:
      return (obj: clsFuncGCTypeEN) => {
        return obj.funcGCTypeId === value;
      };
    case clsFuncGCTypeEN.con_FuncGCTypeName:
      return (obj: clsFuncGCTypeEN) => {
        return obj.funcGCTypeName === value;
      };
    case clsFuncGCTypeEN.con_FuncGCTypeENName:
      return (obj: clsFuncGCTypeEN) => {
        return obj.funcGCTypeENName === value;
      };
    case clsFuncGCTypeEN.con_UpdDate:
      return (obj: clsFuncGCTypeEN) => {
        return obj.updDate === value;
      };
    case clsFuncGCTypeEN.con_UpdUser:
      return (obj: clsFuncGCTypeEN) => {
        return obj.updUser === value;
      };
    case clsFuncGCTypeEN.con_Memo:
      return (obj: clsFuncGCTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FuncGCType]中不存在!(in ${funcGCType_ConstructorName}.${strThisFuncName})`;
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
export async function FuncGCType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsFuncGCTypeEN.con_FuncGCTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrFuncGCType = await FuncGCType_GetObjLstCache();
  if (arrFuncGCType == null) return [];
  let arrFuncGCTypeSel = arrFuncGCType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFuncGCTypeSel.length == 0) return [];
  return arrFuncGCTypeSel.map((x) => x.funcGCTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FuncGCType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
export async function FuncGCType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
export async function FuncGCType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFuncGCTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

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
      const objFuncGCType = FuncGCType_GetObjFromJsonObj(returnObj);
      return objFuncGCType;
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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
export async function FuncGCType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFuncGCTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsFuncGCTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFuncGCTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFuncGCTypeExObjLstCache: Array<clsFuncGCTypeEN> = CacheHelper.Get(strKey);
    const arrFuncGCTypeObjLstT = FuncGCType_GetObjLstByJSONObjLst(arrFuncGCTypeExObjLstCache);
    return arrFuncGCTypeObjLstT;
  }
  try {
    const arrFuncGCTypeExObjLst = await FuncGCType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrFuncGCTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFuncGCTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrFuncGCTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      funcGCType_ConstructorName,
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
export async function FuncGCType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFuncGCTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsFuncGCTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFuncGCTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFuncGCTypeExObjLstCache: Array<clsFuncGCTypeEN> = JSON.parse(strTempObjLst);
    const arrFuncGCTypeObjLstT = FuncGCType_GetObjLstByJSONObjLst(arrFuncGCTypeExObjLstCache);
    return arrFuncGCTypeObjLstT;
  }
  try {
    const arrFuncGCTypeExObjLst = await FuncGCType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrFuncGCTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFuncGCTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrFuncGCTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      funcGCType_ConstructorName,
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
export async function FuncGCType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFuncGCTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFuncGCTypeObjLstCache: Array<clsFuncGCTypeEN> = JSON.parse(strTempObjLst);
    return arrFuncGCTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FuncGCType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFuncGCTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

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
          funcGCType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncGCType_GetObjLstByJSONObjLst(returnObjLst);
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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
export async function FuncGCType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFuncGCTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsFuncGCTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFuncGCTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFuncGCTypeExObjLstCache: Array<clsFuncGCTypeEN> = JSON.parse(strTempObjLst);
    const arrFuncGCTypeObjLstT = FuncGCType_GetObjLstByJSONObjLst(arrFuncGCTypeExObjLstCache);
    return arrFuncGCTypeObjLstT;
  }
  try {
    const arrFuncGCTypeExObjLst = await FuncGCType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrFuncGCTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFuncGCTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrFuncGCTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      funcGCType_ConstructorName,
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
export async function FuncGCType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFuncGCTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFuncGCTypeObjLstCache: Array<clsFuncGCTypeEN> = JSON.parse(strTempObjLst);
    return arrFuncGCTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FuncGCType_GetObjLstCache(): Promise<Array<clsFuncGCTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrFuncGCTypeObjLstCache;
  switch (clsFuncGCTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrFuncGCTypeObjLstCache = await FuncGCType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrFuncGCTypeObjLstCache = await FuncGCType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrFuncGCTypeObjLstCache = await FuncGCType_GetObjLstClientCache();
      break;
    default:
      arrFuncGCTypeObjLstCache = await FuncGCType_GetObjLstClientCache();
      break;
  }
  return arrFuncGCTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FuncGCType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFuncGCTypeObjLstCache;
  switch (clsFuncGCTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrFuncGCTypeObjLstCache = await FuncGCType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrFuncGCTypeObjLstCache = await FuncGCType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrFuncGCTypeObjLstCache = null;
      break;
    default:
      arrFuncGCTypeObjLstCache = null;
      break;
  }
  return arrFuncGCTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFuncGCTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FuncGCType_GetSubObjLstCache(objFuncGCTypeCond: clsFuncGCTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFuncGCTypeObjLstCache = await FuncGCType_GetObjLstCache();
  let arrFuncGCTypeSel = arrFuncGCTypeObjLstCache;
  if (objFuncGCTypeCond.sfFldComparisonOp == null || objFuncGCTypeCond.sfFldComparisonOp == '')
    return arrFuncGCTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFuncGCTypeCond.sfFldComparisonOp,
  );
  //console.log("clsFuncGCTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFuncGCTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFuncGCTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrFuncGCTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFuncGCTypeCond),
      funcGCType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFuncGCTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFuncGCTypeId:关键字列表
 * @returns 对象列表
 **/
export async function FuncGCType_GetObjLstByFuncGCTypeIdLstAsync(
  arrFuncGCTypeId: Array<string>,
): Promise<Array<clsFuncGCTypeEN>> {
  const strThisFuncName = 'GetObjLstByFuncGCTypeIdLstAsync';
  const strAction = 'GetObjLstByFuncGCTypeIdLst';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncGCTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          funcGCType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncGCType_GetObjLstByJSONObjLst(returnObjLst);
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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
 * @param arrstrFuncGCTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function FuncGCType_GetObjLstByFuncGCTypeIdLstCache(
  arrFuncGCTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByFuncGCTypeIdLstCache';
  try {
    const arrFuncGCTypeObjLstCache = await FuncGCType_GetObjLstCache();
    const arrFuncGCTypeSel = arrFuncGCTypeObjLstCache.filter(
      (x) => arrFuncGCTypeIdLst.indexOf(x.funcGCTypeId) > -1,
    );
    return arrFuncGCTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFuncGCTypeIdLst.join(','),
      funcGCType_ConstructorName,
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
export async function FuncGCType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFuncGCTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

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
          funcGCType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncGCType_GetObjLstByJSONObjLst(returnObjLst);
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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
export async function FuncGCType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFuncGCTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

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
          funcGCType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncGCType_GetObjLstByJSONObjLst(returnObjLst);
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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
export async function FuncGCType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsFuncGCTypeEN>();
  const arrFuncGCTypeObjLstCache = await FuncGCType_GetObjLstCache();
  if (arrFuncGCTypeObjLstCache.length == 0) return arrFuncGCTypeObjLstCache;
  let arrFuncGCTypeSel = arrFuncGCTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objFuncGCTypeCond = new clsFuncGCTypeEN();
  ObjectAssign(objFuncGCTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsFuncGCTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFuncGCTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrFuncGCTypeSel.length == 0) return arrFuncGCTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFuncGCTypeSel = arrFuncGCTypeSel.sort(FuncGCType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFuncGCTypeSel = arrFuncGCTypeSel.sort(objPagerPara.sortFun);
    }
    arrFuncGCTypeSel = arrFuncGCTypeSel.slice(intStart, intEnd);
    return arrFuncGCTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      funcGCType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFuncGCTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function FuncGCType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFuncGCTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFuncGCTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

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
          funcGCType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncGCType_GetObjLstByJSONObjLst(returnObjLst);
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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
 * @param strFuncGCTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function FuncGCType_DelRecordAsync(strFuncGCTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(funcGCType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFuncGCTypeId);

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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
 * @param arrFuncGCTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function FuncGCType_DelFuncGCTypesAsync(
  arrFuncGCTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFuncGCTypesAsync';
  const strAction = 'DelFuncGCTypes';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncGCTypeId, config);
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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
export async function FuncGCType_DelFuncGCTypesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelFuncGCTypesByCondAsync';
  const strAction = 'DelFuncGCTypesByCond';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
 * @param objFuncGCTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncGCType_AddNewRecordAsync(
  objFuncGCTypeEN: clsFuncGCTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFuncGCTypeEN);
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncGCTypeEN, config);
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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
 * @param objFuncGCTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncGCType_AddNewRecordWithMaxIdAsync(
  objFuncGCTypeEN: clsFuncGCTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncGCTypeEN, config);
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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
 * @param objFuncGCTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FuncGCType_AddNewRecordWithReturnKeyAsync(
  objFuncGCTypeEN: clsFuncGCTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncGCTypeEN, config);
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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
 * @param objFuncGCTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FuncGCType_UpdateRecordAsync(
  objFuncGCTypeEN: clsFuncGCTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFuncGCTypeEN.sfUpdFldSetStr === undefined ||
    objFuncGCTypeEN.sfUpdFldSetStr === null ||
    objFuncGCTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFuncGCTypeEN.funcGCTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncGCTypeEN, config);
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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
 * @param objFuncGCTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FuncGCType_UpdateWithConditionAsync(
  objFuncGCTypeEN: clsFuncGCTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFuncGCTypeEN.sfUpdFldSetStr === undefined ||
    objFuncGCTypeEN.sfUpdFldSetStr === null ||
    objFuncGCTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFuncGCTypeEN.funcGCTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);
  objFuncGCTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncGCTypeEN, config);
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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
 * @param objstrFuncGCTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FuncGCType_IsExistRecordCache(objFuncGCTypeCond: clsFuncGCTypeEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFuncGCTypeObjLstCache = await FuncGCType_GetObjLstCache();
  if (arrFuncGCTypeObjLstCache == null) return false;
  let arrFuncGCTypeSel = arrFuncGCTypeObjLstCache;
  if (objFuncGCTypeCond.sfFldComparisonOp == null || objFuncGCTypeCond.sfFldComparisonOp == '')
    return arrFuncGCTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFuncGCTypeCond.sfFldComparisonOp,
  );
  //console.log("clsFuncGCTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFuncGCTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFuncGCTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrFuncGCTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFuncGCTypeCond),
      funcGCType_ConstructorName,
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
export async function FuncGCType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
 * @param strFuncGCTypeId:所给的关键字
 * @returns 对象
 */
export async function FuncGCType_IsExistCache(strFuncGCTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrFuncGCTypeObjLstCache = await FuncGCType_GetObjLstCache();
  if (arrFuncGCTypeObjLstCache == null) return false;
  try {
    const arrFuncGCTypeSel = arrFuncGCTypeObjLstCache.filter(
      (x) => x.funcGCTypeId == strFuncGCTypeId,
    );
    if (arrFuncGCTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFuncGCTypeId,
      funcGCType_ConstructorName,
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
 * @param strFuncGCTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function FuncGCType_IsExistAsync(strFuncGCTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncGCTypeId,
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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
export async function FuncGCType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
 * @param objFuncGCTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function FuncGCType_GetRecCountByCondCache(objFuncGCTypeCond: clsFuncGCTypeEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFuncGCTypeObjLstCache = await FuncGCType_GetObjLstCache();
  if (arrFuncGCTypeObjLstCache == null) return 0;
  let arrFuncGCTypeSel = arrFuncGCTypeObjLstCache;
  if (objFuncGCTypeCond.sfFldComparisonOp == null || objFuncGCTypeCond.sfFldComparisonOp == '')
    return arrFuncGCTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFuncGCTypeCond.sfFldComparisonOp,
  );
  //console.log("clsFuncGCTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFuncGCTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFuncGCTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrFuncGCTypeSel = arrFuncGCTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrFuncGCTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFuncGCTypeCond),
      funcGCType_ConstructorName,
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
export async function FuncGCType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
export async function FuncGCType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(funcGCType_Controller, strAction);

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
        funcGCType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcGCType_ConstructorName,
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
export function FuncGCType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FuncGCType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsFuncGCTypeEN._CurrTabName;
  switch (clsFuncGCTypeEN.CacheModeId) {
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
export function FuncGCType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsFuncGCTypeEN._CurrTabName;
    switch (clsFuncGCTypeEN.CacheModeId) {
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
export async function FuncGCType_BindDdl_FuncGCTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_FuncGCTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncGCTypeIdInDivCache");
  const arrObjLstSel = await FuncGCType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsFuncGCTypeEN.con_FuncGCTypeId,
    clsFuncGCTypeEN.con_FuncGCTypeName,
    '函数生成代码类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FuncGCType_CheckPropertyNew(pobjFuncGCTypeEN: clsFuncGCTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.funcGCTypeId) == false &&
    GetStrLen(pobjFuncGCTypeEN.funcGCTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数生成代码类型Id(funcGCTypeId)]的长度不能超过2(In 函数生成代码类型(FuncGCType))!值:$(pobjFuncGCTypeEN.funcGCTypeId)(clsFuncGCTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.funcGCTypeName) == false &&
    GetStrLen(pobjFuncGCTypeEN.funcGCTypeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数生成代码类型名(funcGCTypeName)]的长度不能超过50(In 函数生成代码类型(FuncGCType))!值:$(pobjFuncGCTypeEN.funcGCTypeName)(clsFuncGCTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.funcGCTypeENName) == false &&
    GetStrLen(pobjFuncGCTypeEN.funcGCTypeENName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[函数生成代码类型英文名(funcGCTypeENName)]的长度不能超过50(In 函数生成代码类型(FuncGCType))!值:$(pobjFuncGCTypeEN.funcGCTypeENName)(clsFuncGCTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.updDate) == false &&
    GetStrLen(pobjFuncGCTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 函数生成代码类型(FuncGCType))!值:$(pobjFuncGCTypeEN.updDate)(clsFuncGCTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.updUser) == false &&
    GetStrLen(pobjFuncGCTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 函数生成代码类型(FuncGCType))!值:$(pobjFuncGCTypeEN.updUser)(clsFuncGCTypeBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjFuncGCTypeEN.memo) == false && GetStrLen(pobjFuncGCTypeEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 函数生成代码类型(FuncGCType))!值:$(pobjFuncGCTypeEN.memo)(clsFuncGCTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.funcGCTypeId) == false &&
    undefined !== pobjFuncGCTypeEN.funcGCTypeId &&
    tzDataType.isString(pobjFuncGCTypeEN.funcGCTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数生成代码类型Id(funcGCTypeId)]的值:[$(pobjFuncGCTypeEN.funcGCTypeId)], 非法,应该为字符型(In 函数生成代码类型(FuncGCType))!(clsFuncGCTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.funcGCTypeName) == false &&
    undefined !== pobjFuncGCTypeEN.funcGCTypeName &&
    tzDataType.isString(pobjFuncGCTypeEN.funcGCTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数生成代码类型名(funcGCTypeName)]的值:[$(pobjFuncGCTypeEN.funcGCTypeName)], 非法,应该为字符型(In 函数生成代码类型(FuncGCType))!(clsFuncGCTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.funcGCTypeENName) == false &&
    undefined !== pobjFuncGCTypeEN.funcGCTypeENName &&
    tzDataType.isString(pobjFuncGCTypeEN.funcGCTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[函数生成代码类型英文名(funcGCTypeENName)]的值:[$(pobjFuncGCTypeEN.funcGCTypeENName)], 非法,应该为字符型(In 函数生成代码类型(FuncGCType))!(clsFuncGCTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.updDate) == false &&
    undefined !== pobjFuncGCTypeEN.updDate &&
    tzDataType.isString(pobjFuncGCTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjFuncGCTypeEN.updDate)], 非法,应该为字符型(In 函数生成代码类型(FuncGCType))!(clsFuncGCTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.updUser) == false &&
    undefined !== pobjFuncGCTypeEN.updUser &&
    tzDataType.isString(pobjFuncGCTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjFuncGCTypeEN.updUser)], 非法,应该为字符型(In 函数生成代码类型(FuncGCType))!(clsFuncGCTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.memo) == false &&
    undefined !== pobjFuncGCTypeEN.memo &&
    tzDataType.isString(pobjFuncGCTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjFuncGCTypeEN.memo)], 非法,应该为字符型(In 函数生成代码类型(FuncGCType))!(clsFuncGCTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FuncGCType_CheckProperty4Update(pobjFuncGCTypeEN: clsFuncGCTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.funcGCTypeId) == false &&
    GetStrLen(pobjFuncGCTypeEN.funcGCTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数生成代码类型Id(funcGCTypeId)]的长度不能超过2(In 函数生成代码类型(FuncGCType))!值:$(pobjFuncGCTypeEN.funcGCTypeId)(clsFuncGCTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.funcGCTypeName) == false &&
    GetStrLen(pobjFuncGCTypeEN.funcGCTypeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数生成代码类型名(funcGCTypeName)]的长度不能超过50(In 函数生成代码类型(FuncGCType))!值:$(pobjFuncGCTypeEN.funcGCTypeName)(clsFuncGCTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.funcGCTypeENName) == false &&
    GetStrLen(pobjFuncGCTypeEN.funcGCTypeENName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[函数生成代码类型英文名(funcGCTypeENName)]的长度不能超过50(In 函数生成代码类型(FuncGCType))!值:$(pobjFuncGCTypeEN.funcGCTypeENName)(clsFuncGCTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.updDate) == false &&
    GetStrLen(pobjFuncGCTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 函数生成代码类型(FuncGCType))!值:$(pobjFuncGCTypeEN.updDate)(clsFuncGCTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.updUser) == false &&
    GetStrLen(pobjFuncGCTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 函数生成代码类型(FuncGCType))!值:$(pobjFuncGCTypeEN.updUser)(clsFuncGCTypeBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjFuncGCTypeEN.memo) == false && GetStrLen(pobjFuncGCTypeEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 函数生成代码类型(FuncGCType))!值:$(pobjFuncGCTypeEN.memo)(clsFuncGCTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.funcGCTypeId) == false &&
    undefined !== pobjFuncGCTypeEN.funcGCTypeId &&
    tzDataType.isString(pobjFuncGCTypeEN.funcGCTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数生成代码类型Id(funcGCTypeId)]的值:[$(pobjFuncGCTypeEN.funcGCTypeId)], 非法,应该为字符型(In 函数生成代码类型(FuncGCType))!(clsFuncGCTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.funcGCTypeName) == false &&
    undefined !== pobjFuncGCTypeEN.funcGCTypeName &&
    tzDataType.isString(pobjFuncGCTypeEN.funcGCTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数生成代码类型名(funcGCTypeName)]的值:[$(pobjFuncGCTypeEN.funcGCTypeName)], 非法,应该为字符型(In 函数生成代码类型(FuncGCType))!(clsFuncGCTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.funcGCTypeENName) == false &&
    undefined !== pobjFuncGCTypeEN.funcGCTypeENName &&
    tzDataType.isString(pobjFuncGCTypeEN.funcGCTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[函数生成代码类型英文名(funcGCTypeENName)]的值:[$(pobjFuncGCTypeEN.funcGCTypeENName)], 非法,应该为字符型(In 函数生成代码类型(FuncGCType))!(clsFuncGCTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.updDate) == false &&
    undefined !== pobjFuncGCTypeEN.updDate &&
    tzDataType.isString(pobjFuncGCTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjFuncGCTypeEN.updDate)], 非法,应该为字符型(In 函数生成代码类型(FuncGCType))!(clsFuncGCTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.updUser) == false &&
    undefined !== pobjFuncGCTypeEN.updUser &&
    tzDataType.isString(pobjFuncGCTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjFuncGCTypeEN.updUser)], 非法,应该为字符型(In 函数生成代码类型(FuncGCType))!(clsFuncGCTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFuncGCTypeEN.memo) == false &&
    undefined !== pobjFuncGCTypeEN.memo &&
    tzDataType.isString(pobjFuncGCTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjFuncGCTypeEN.memo)], 非法,应该为字符型(In 函数生成代码类型(FuncGCType))!(clsFuncGCTypeBL:CheckProperty4Update)',
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
export function FuncGCType_GetJSONStrByObj(pobjFuncGCTypeEN: clsFuncGCTypeEN): string {
  pobjFuncGCTypeEN.sfUpdFldSetStr = pobjFuncGCTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFuncGCTypeEN);
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
export function FuncGCType_GetObjLstByJSONStr(strJSON: string): Array<clsFuncGCTypeEN> {
  let arrFuncGCTypeObjLst = new Array<clsFuncGCTypeEN>();
  if (strJSON === '') {
    return arrFuncGCTypeObjLst;
  }
  try {
    arrFuncGCTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFuncGCTypeObjLst;
  }
  return arrFuncGCTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFuncGCTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FuncGCType_GetObjLstByJSONObjLst(
  arrFuncGCTypeObjLstS: Array<clsFuncGCTypeEN>,
): Array<clsFuncGCTypeEN> {
  const arrFuncGCTypeObjLst = new Array<clsFuncGCTypeEN>();
  for (const objInFor of arrFuncGCTypeObjLstS) {
    const obj1 = FuncGCType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFuncGCTypeObjLst.push(obj1);
  }
  return arrFuncGCTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FuncGCType_GetObjByJSONStr(strJSON: string): clsFuncGCTypeEN {
  let pobjFuncGCTypeEN = new clsFuncGCTypeEN();
  if (strJSON === '') {
    return pobjFuncGCTypeEN;
  }
  try {
    pobjFuncGCTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFuncGCTypeEN;
  }
  return pobjFuncGCTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FuncGCType_GetCombineCondition(objFuncGCTypeCond: clsFuncGCTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncGCTypeCond.dicFldComparisonOp,
      clsFuncGCTypeEN.con_FuncGCTypeId,
    ) == true
  ) {
    const strComparisonOpFuncGCTypeId: string =
      objFuncGCTypeCond.dicFldComparisonOp[clsFuncGCTypeEN.con_FuncGCTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncGCTypeEN.con_FuncGCTypeId,
      objFuncGCTypeCond.funcGCTypeId,
      strComparisonOpFuncGCTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncGCTypeCond.dicFldComparisonOp,
      clsFuncGCTypeEN.con_FuncGCTypeName,
    ) == true
  ) {
    const strComparisonOpFuncGCTypeName: string =
      objFuncGCTypeCond.dicFldComparisonOp[clsFuncGCTypeEN.con_FuncGCTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncGCTypeEN.con_FuncGCTypeName,
      objFuncGCTypeCond.funcGCTypeName,
      strComparisonOpFuncGCTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncGCTypeCond.dicFldComparisonOp,
      clsFuncGCTypeEN.con_FuncGCTypeENName,
    ) == true
  ) {
    const strComparisonOpFuncGCTypeENName: string =
      objFuncGCTypeCond.dicFldComparisonOp[clsFuncGCTypeEN.con_FuncGCTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncGCTypeEN.con_FuncGCTypeENName,
      objFuncGCTypeCond.funcGCTypeENName,
      strComparisonOpFuncGCTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncGCTypeCond.dicFldComparisonOp,
      clsFuncGCTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFuncGCTypeCond.dicFldComparisonOp[clsFuncGCTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncGCTypeEN.con_UpdDate,
      objFuncGCTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncGCTypeCond.dicFldComparisonOp,
      clsFuncGCTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFuncGCTypeCond.dicFldComparisonOp[clsFuncGCTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncGCTypeEN.con_UpdUser,
      objFuncGCTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncGCTypeCond.dicFldComparisonOp,
      clsFuncGCTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFuncGCTypeCond.dicFldComparisonOp[clsFuncGCTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncGCTypeEN.con_Memo,
      objFuncGCTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FuncGCType(函数生成代码类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFuncGCTypeName: 函数生成代码类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FuncGCType_GetUniCondStr(objFuncGCTypeEN: clsFuncGCTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncGCTypeName = '{0}'", objFuncGCTypeEN.funcGCTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FuncGCType(函数生成代码类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFuncGCTypeName: 函数生成代码类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FuncGCType_GetUniCondStr4Update(objFuncGCTypeEN: clsFuncGCTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncGCTypeId <> '{0}'", objFuncGCTypeEN.funcGCTypeId);
  strWhereCond += Format(" and FuncGCTypeName = '{0}'", objFuncGCTypeEN.funcGCTypeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFuncGCTypeENS:源对象
 * @param objFuncGCTypeENT:目标对象
 */
export function FuncGCType_GetObjFromJsonObj(objFuncGCTypeENS: clsFuncGCTypeEN): clsFuncGCTypeEN {
  const objFuncGCTypeENT: clsFuncGCTypeEN = new clsFuncGCTypeEN();
  ObjectAssign(objFuncGCTypeENT, objFuncGCTypeENS);
  return objFuncGCTypeENT;
}
