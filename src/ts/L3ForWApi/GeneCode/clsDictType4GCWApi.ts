/**
 * 类名:clsDictType4GCWApi
 * 表名:DictType4GC(00050352)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:41:00
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 生成代码字典类型(DictType4GC)
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
import { clsDictType4GCEN } from '@/ts/L0Entity/GeneCode/clsDictType4GCEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const dictType4GC_Controller = 'DictType4GCApi';
export const dictType4GC_ConstructorName = 'dictType4GC';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDictTypeId:关键字
 * @returns 对象
 **/
export async function DictType4GC_GetObjByDictTypeIdAsync(
  strDictTypeId: string,
): Promise<clsDictType4GCEN | null> {
  const strThisFuncName = 'GetObjByDictTypeIdAsync';

  if (IsNullOrEmpty(strDictTypeId) == true) {
    const strMsg = Format(
      '参数:[strDictTypeId]不能为空!(In clsDictType4GCWApi.GetObjByDictTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDictTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strDictTypeId]的长度:[{0}]不正确!(clsDictType4GCWApi.GetObjByDictTypeIdAsync)',
      strDictTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDictTypeId';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDictTypeId,
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
      const objDictType4GC = DictType4GC_GetObjFromJsonObj(returnObj);
      return objDictType4GC;
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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
 * @param strDictTypeId:所给的关键字
 * @returns 对象
 */
export async function DictType4GC_GetObjByDictTypeIdCache(
  strDictTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDictTypeIdCache';

  if (IsNullOrEmpty(strDictTypeId) == true) {
    const strMsg = Format(
      '参数:[strDictTypeId]不能为空!(In clsDictType4GCWApi.GetObjByDictTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDictTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strDictTypeId]的长度:[{0}]不正确!(clsDictType4GCWApi.GetObjByDictTypeIdCache)',
      strDictTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDictType4GCObjLstCache = await DictType4GC_GetObjLstCache();
  try {
    const arrDictType4GCSel = arrDictType4GCObjLstCache.filter(
      (x) => x.dictTypeId == strDictTypeId,
    );
    let objDictType4GC: clsDictType4GCEN;
    if (arrDictType4GCSel.length > 0) {
      objDictType4GC = arrDictType4GCSel[0];
      return objDictType4GC;
    } else {
      if (bolTryAsyncOnce == true) {
        const objDictType4GCConst = await DictType4GC_GetObjByDictTypeIdAsync(strDictTypeId);
        if (objDictType4GCConst != null) {
          DictType4GC_ReFreshThisCache();
          return objDictType4GCConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDictTypeId,
      dictType4GC_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strDictTypeId:所给的关键字
 * @returns 对象
 */
export async function DictType4GC_GetObjByDictTypeIdlocalStorage(strDictTypeId: string) {
  const strThisFuncName = 'GetObjByDictTypeIdlocalStorage';

  if (IsNullOrEmpty(strDictTypeId) == true) {
    const strMsg = Format(
      '参数:[strDictTypeId]不能为空!(In clsDictType4GCWApi.GetObjByDictTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDictTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strDictTypeId]的长度:[{0}]不正确!(clsDictType4GCWApi.GetObjByDictTypeIdlocalStorage)',
      strDictTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsDictType4GCEN._CurrTabName, strDictTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objDictType4GCCache: clsDictType4GCEN = JSON.parse(strTempObj);
    return objDictType4GCCache;
  }
  try {
    const objDictType4GC = await DictType4GC_GetObjByDictTypeIdAsync(strDictTypeId);
    if (objDictType4GC != null) {
      localStorage.setItem(strKey, JSON.stringify(objDictType4GC));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objDictType4GC;
    }
    return objDictType4GC;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDictTypeId,
      dictType4GC_ConstructorName,
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
 * @param objDictType4GC:所给的对象
 * @returns 对象
 */
export async function DictType4GC_UpdateObjInLstCache(objDictType4GC: clsDictType4GCEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrDictType4GCObjLstCache = await DictType4GC_GetObjLstCache();
    const obj = arrDictType4GCObjLstCache.find(
      (x) => x.dictTypeName == objDictType4GC.dictTypeName,
    );
    if (obj != null) {
      objDictType4GC.dictTypeId = obj.dictTypeId;
      ObjectAssign(obj, objDictType4GC);
    } else {
      arrDictType4GCObjLstCache.push(objDictType4GC);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      dictType4GC_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strDictTypeId:所给的关键字
 * @returns 对象
 */
export async function DictType4GC_GetNameByDictTypeIdCache(strDictTypeId: string) {
  if (IsNullOrEmpty(strDictTypeId) == true) {
    const strMsg = Format(
      '参数:[strDictTypeId]不能为空!(In clsDictType4GCWApi.GetNameByDictTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDictTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strDictTypeId]的长度:[{0}]不正确!(clsDictType4GCWApi.GetNameByDictTypeIdCache)',
      strDictTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDictType4GCObjLstCache = await DictType4GC_GetObjLstCache();
  if (arrDictType4GCObjLstCache == null) return '';
  try {
    const arrDictType4GCSel = arrDictType4GCObjLstCache.filter(
      (x) => x.dictTypeId == strDictTypeId,
    );
    let objDictType4GC: clsDictType4GCEN;
    if (arrDictType4GCSel.length > 0) {
      objDictType4GC = arrDictType4GCSel[0];
      return objDictType4GC.dictTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strDictTypeId,
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
export async function DictType4GC_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsDictType4GCEN.con_DictTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsDictType4GCEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsDictType4GCEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strDictTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objDictType4GC = await DictType4GC_GetObjByDictTypeIdCache(strDictTypeId);
  if (objDictType4GC == null) return '';
  if (objDictType4GC.GetFldValue(strOutFldName) == null) return '';
  return objDictType4GC.GetFldValue(strOutFldName).toString();
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
export function DictType4GC_SortFunDefa(a: clsDictType4GCEN, b: clsDictType4GCEN): number {
  return a.dictTypeId.localeCompare(b.dictTypeId);
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
export function DictType4GC_SortFunDefa2Fld(a: clsDictType4GCEN, b: clsDictType4GCEN): number {
  if (a.dictTypeName == b.dictTypeName) return a.updDate.localeCompare(b.updDate);
  else return a.dictTypeName.localeCompare(b.dictTypeName);
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
export function DictType4GC_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDictType4GCEN.con_DictTypeId:
        return (a: clsDictType4GCEN, b: clsDictType4GCEN) => {
          return a.dictTypeId.localeCompare(b.dictTypeId);
        };
      case clsDictType4GCEN.con_DictTypeName:
        return (a: clsDictType4GCEN, b: clsDictType4GCEN) => {
          return a.dictTypeName.localeCompare(b.dictTypeName);
        };
      case clsDictType4GCEN.con_UpdDate:
        return (a: clsDictType4GCEN, b: clsDictType4GCEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsDictType4GCEN.con_UpdUser:
        return (a: clsDictType4GCEN, b: clsDictType4GCEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsDictType4GCEN.con_Memo:
        return (a: clsDictType4GCEN, b: clsDictType4GCEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DictType4GC]中不存在!(in ${dictType4GC_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDictType4GCEN.con_DictTypeId:
        return (a: clsDictType4GCEN, b: clsDictType4GCEN) => {
          return b.dictTypeId.localeCompare(a.dictTypeId);
        };
      case clsDictType4GCEN.con_DictTypeName:
        return (a: clsDictType4GCEN, b: clsDictType4GCEN) => {
          return b.dictTypeName.localeCompare(a.dictTypeName);
        };
      case clsDictType4GCEN.con_UpdDate:
        return (a: clsDictType4GCEN, b: clsDictType4GCEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsDictType4GCEN.con_UpdUser:
        return (a: clsDictType4GCEN, b: clsDictType4GCEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsDictType4GCEN.con_Memo:
        return (a: clsDictType4GCEN, b: clsDictType4GCEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DictType4GC]中不存在!(in ${dictType4GC_ConstructorName}.${strThisFuncName})`;
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
export async function DictType4GC_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDictType4GCEN.con_DictTypeId:
      return (obj: clsDictType4GCEN) => {
        return obj.dictTypeId === value;
      };
    case clsDictType4GCEN.con_DictTypeName:
      return (obj: clsDictType4GCEN) => {
        return obj.dictTypeName === value;
      };
    case clsDictType4GCEN.con_UpdDate:
      return (obj: clsDictType4GCEN) => {
        return obj.updDate === value;
      };
    case clsDictType4GCEN.con_UpdUser:
      return (obj: clsDictType4GCEN) => {
        return obj.updUser === value;
      };
    case clsDictType4GCEN.con_Memo:
      return (obj: clsDictType4GCEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DictType4GC]中不存在!(in ${dictType4GC_ConstructorName}.${strThisFuncName})`;
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
export async function DictType4GC_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsDictType4GCEN.con_DictTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrDictType4GC = await DictType4GC_GetObjLstCache();
  if (arrDictType4GC == null) return [];
  let arrDictType4GCSel = arrDictType4GC;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrDictType4GCSel = arrDictType4GCSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrDictType4GCSel = arrDictType4GCSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrDictType4GCSel = arrDictType4GCSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrDictType4GCSel = arrDictType4GCSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrDictType4GCSel = arrDictType4GCSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrDictType4GCSel = arrDictType4GCSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrDictType4GCSel = arrDictType4GCSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrDictType4GCSel = arrDictType4GCSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrDictType4GCSel = arrDictType4GCSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrDictType4GCSel = arrDictType4GCSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrDictType4GCSel.length == 0) return [];
  return arrDictType4GCSel.map((x) => x.dictTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DictType4GC_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
export async function DictType4GC_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
export async function DictType4GC_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDictType4GCEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

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
      const objDictType4GC = DictType4GC_GetObjFromJsonObj(returnObj);
      return objDictType4GC;
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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
export async function DictType4GC_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDictType4GCEN._CurrTabName;
  if (IsNullOrEmpty(clsDictType4GCEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDictType4GCEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrDictType4GCExObjLstCache: Array<clsDictType4GCEN> = CacheHelper.Get(strKey);
    const arrDictType4GCObjLstT = DictType4GC_GetObjLstByJSONObjLst(arrDictType4GCExObjLstCache);
    return arrDictType4GCObjLstT;
  }
  try {
    const arrDictType4GCExObjLst = await DictType4GC_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrDictType4GCExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDictType4GCExObjLst.length,
    );
    console.log(strInfo);
    return arrDictType4GCExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dictType4GC_ConstructorName,
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
export async function DictType4GC_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDictType4GCEN._CurrTabName;
  if (IsNullOrEmpty(clsDictType4GCEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDictType4GCEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDictType4GCExObjLstCache: Array<clsDictType4GCEN> = JSON.parse(strTempObjLst);
    const arrDictType4GCObjLstT = DictType4GC_GetObjLstByJSONObjLst(arrDictType4GCExObjLstCache);
    return arrDictType4GCObjLstT;
  }
  try {
    const arrDictType4GCExObjLst = await DictType4GC_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrDictType4GCExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDictType4GCExObjLst.length,
    );
    console.log(strInfo);
    return arrDictType4GCExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dictType4GC_ConstructorName,
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
export async function DictType4GC_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsDictType4GCEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDictType4GCObjLstCache: Array<clsDictType4GCEN> = JSON.parse(strTempObjLst);
    return arrDictType4GCObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function DictType4GC_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDictType4GCEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

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
          dictType4GC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DictType4GC_GetObjLstByJSONObjLst(returnObjLst);
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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
export async function DictType4GC_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDictType4GCEN._CurrTabName;
  if (IsNullOrEmpty(clsDictType4GCEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDictType4GCEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDictType4GCExObjLstCache: Array<clsDictType4GCEN> = JSON.parse(strTempObjLst);
    const arrDictType4GCObjLstT = DictType4GC_GetObjLstByJSONObjLst(arrDictType4GCExObjLstCache);
    return arrDictType4GCObjLstT;
  }
  try {
    const arrDictType4GCExObjLst = await DictType4GC_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrDictType4GCExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDictType4GCExObjLst.length,
    );
    console.log(strInfo);
    return arrDictType4GCExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dictType4GC_ConstructorName,
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
export async function DictType4GC_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsDictType4GCEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDictType4GCObjLstCache: Array<clsDictType4GCEN> = JSON.parse(strTempObjLst);
    return arrDictType4GCObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DictType4GC_GetObjLstCache(): Promise<Array<clsDictType4GCEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrDictType4GCObjLstCache;
  switch (clsDictType4GCEN.CacheModeId) {
    case '04': //sessionStorage
      arrDictType4GCObjLstCache = await DictType4GC_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrDictType4GCObjLstCache = await DictType4GC_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrDictType4GCObjLstCache = await DictType4GC_GetObjLstClientCache();
      break;
    default:
      arrDictType4GCObjLstCache = await DictType4GC_GetObjLstClientCache();
      break;
  }
  return arrDictType4GCObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DictType4GC_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrDictType4GCObjLstCache;
  switch (clsDictType4GCEN.CacheModeId) {
    case '04': //sessionStorage
      arrDictType4GCObjLstCache = await DictType4GC_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrDictType4GCObjLstCache = await DictType4GC_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrDictType4GCObjLstCache = null;
      break;
    default:
      arrDictType4GCObjLstCache = null;
      break;
  }
  return arrDictType4GCObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrDictTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DictType4GC_GetSubObjLstCache(objDictType4GCCond: clsDictType4GCEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrDictType4GCObjLstCache = await DictType4GC_GetObjLstCache();
  let arrDictType4GCSel = arrDictType4GCObjLstCache;
  if (objDictType4GCCond.sfFldComparisonOp == null || objDictType4GCCond.sfFldComparisonOp == '')
    return arrDictType4GCSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objDictType4GCCond.sfFldComparisonOp,
  );
  //console.log("clsDictType4GCWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objDictType4GCCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDictType4GCCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrDictType4GCSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDictType4GCCond),
      dictType4GC_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDictType4GCEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDictTypeId:关键字列表
 * @returns 对象列表
 **/
export async function DictType4GC_GetObjLstByDictTypeIdLstAsync(
  arrDictTypeId: Array<string>,
): Promise<Array<clsDictType4GCEN>> {
  const strThisFuncName = 'GetObjLstByDictTypeIdLstAsync';
  const strAction = 'GetObjLstByDictTypeIdLst';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDictTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          dictType4GC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DictType4GC_GetObjLstByJSONObjLst(returnObjLst);
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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
 * @param arrstrDictTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function DictType4GC_GetObjLstByDictTypeIdLstCache(arrDictTypeIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByDictTypeIdLstCache';
  try {
    const arrDictType4GCObjLstCache = await DictType4GC_GetObjLstCache();
    const arrDictType4GCSel = arrDictType4GCObjLstCache.filter(
      (x) => arrDictTypeIdLst.indexOf(x.dictTypeId) > -1,
    );
    return arrDictType4GCSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrDictTypeIdLst.join(','),
      dictType4GC_ConstructorName,
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
export async function DictType4GC_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDictType4GCEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

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
          dictType4GC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DictType4GC_GetObjLstByJSONObjLst(returnObjLst);
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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
export async function DictType4GC_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDictType4GCEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

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
          dictType4GC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DictType4GC_GetObjLstByJSONObjLst(returnObjLst);
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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
export async function DictType4GC_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsDictType4GCEN>();
  const arrDictType4GCObjLstCache = await DictType4GC_GetObjLstCache();
  if (arrDictType4GCObjLstCache.length == 0) return arrDictType4GCObjLstCache;
  let arrDictType4GCSel = arrDictType4GCObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objDictType4GCCond = new clsDictType4GCEN();
  ObjectAssign(objDictType4GCCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsDictType4GCWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDictType4GCCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrDictType4GCSel.length == 0) return arrDictType4GCSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDictType4GCSel = arrDictType4GCSel.sort(DictType4GC_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDictType4GCSel = arrDictType4GCSel.sort(objPagerPara.sortFun);
    }
    arrDictType4GCSel = arrDictType4GCSel.slice(intStart, intEnd);
    return arrDictType4GCSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dictType4GC_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDictType4GCEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function DictType4GC_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDictType4GCEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDictType4GCEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

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
          dictType4GC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DictType4GC_GetObjLstByJSONObjLst(returnObjLst);
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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
 * @param strDictTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function DictType4GC_DelRecordAsync(strDictTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strDictTypeId);

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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
 * @param arrDictTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function DictType4GC_DelDictType4GCsAsync(
  arrDictTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelDictType4GCsAsync';
  const strAction = 'DelDictType4GCs';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDictTypeId, config);
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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
export async function DictType4GC_DelDictType4GCsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelDictType4GCsByCondAsync';
  const strAction = 'DelDictType4GCsByCond';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
 * @param objDictType4GCEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DictType4GC_AddNewRecordAsync(
  objDictType4GCEN: clsDictType4GCEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objDictType4GCEN);
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDictType4GCEN, config);
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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
 * @param objDictType4GCEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DictType4GC_AddNewRecordWithMaxIdAsync(
  objDictType4GCEN: clsDictType4GCEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDictType4GCEN, config);
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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
 * @param objDictType4GCEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DictType4GC_AddNewRecordWithReturnKeyAsync(
  objDictType4GCEN: clsDictType4GCEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDictType4GCEN, config);
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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
 * @param objDictType4GCEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DictType4GC_UpdateRecordAsync(
  objDictType4GCEN: clsDictType4GCEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDictType4GCEN.sfUpdFldSetStr === undefined ||
    objDictType4GCEN.sfUpdFldSetStr === null ||
    objDictType4GCEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDictType4GCEN.dictTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDictType4GCEN, config);
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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
 * @param objDictType4GCEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DictType4GC_UpdateWithConditionAsync(
  objDictType4GCEN: clsDictType4GCEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDictType4GCEN.sfUpdFldSetStr === undefined ||
    objDictType4GCEN.sfUpdFldSetStr === null ||
    objDictType4GCEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDictType4GCEN.dictTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);
  objDictType4GCEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDictType4GCEN, config);
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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
 * @param objstrDictTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DictType4GC_IsExistRecordCache(objDictType4GCCond: clsDictType4GCEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrDictType4GCObjLstCache = await DictType4GC_GetObjLstCache();
  if (arrDictType4GCObjLstCache == null) return false;
  let arrDictType4GCSel = arrDictType4GCObjLstCache;
  if (objDictType4GCCond.sfFldComparisonOp == null || objDictType4GCCond.sfFldComparisonOp == '')
    return arrDictType4GCSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objDictType4GCCond.sfFldComparisonOp,
  );
  //console.log("clsDictType4GCWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objDictType4GCCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDictType4GCCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrDictType4GCSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objDictType4GCCond),
      dictType4GC_ConstructorName,
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
export async function DictType4GC_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
 * @param strDictTypeId:所给的关键字
 * @returns 对象
 */
export async function DictType4GC_IsExistCache(strDictTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrDictType4GCObjLstCache = await DictType4GC_GetObjLstCache();
  if (arrDictType4GCObjLstCache == null) return false;
  try {
    const arrDictType4GCSel = arrDictType4GCObjLstCache.filter(
      (x) => x.dictTypeId == strDictTypeId,
    );
    if (arrDictType4GCSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strDictTypeId,
      dictType4GC_ConstructorName,
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
 * @param strDictTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function DictType4GC_IsExistAsync(strDictTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDictTypeId,
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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
export async function DictType4GC_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
 * @param objDictType4GCCond:条件对象
 * @returns 对象列表记录数
 */
export async function DictType4GC_GetRecCountByCondCache(objDictType4GCCond: clsDictType4GCEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrDictType4GCObjLstCache = await DictType4GC_GetObjLstCache();
  if (arrDictType4GCObjLstCache == null) return 0;
  let arrDictType4GCSel = arrDictType4GCObjLstCache;
  if (objDictType4GCCond.sfFldComparisonOp == null || objDictType4GCCond.sfFldComparisonOp == '')
    return arrDictType4GCSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objDictType4GCCond.sfFldComparisonOp,
  );
  //console.log("clsDictType4GCWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objDictType4GCCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDictType4GCCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDictType4GCSel = arrDictType4GCSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDictType4GCSel = arrDictType4GCSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrDictType4GCSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDictType4GCCond),
      dictType4GC_ConstructorName,
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
export async function DictType4GC_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
export async function DictType4GC_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(dictType4GC_Controller, strAction);

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
        dictType4GC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dictType4GC_ConstructorName,
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
export function DictType4GC_GetWebApiUrl(strController: string, strAction: string): string {
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
export function DictType4GC_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsDictType4GCEN._CurrTabName;
  switch (clsDictType4GCEN.CacheModeId) {
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
export function DictType4GC_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsDictType4GCEN._CurrTabName;
    switch (clsDictType4GCEN.CacheModeId) {
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
export async function DictType4GC_BindDdl_DictTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_DictTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DictTypeIdInDivCache");
  const arrObjLstSel = await DictType4GC_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsDictType4GCEN.con_DictTypeId,
    clsDictType4GCEN.con_DictTypeName,
    '生成代码字典类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DictType4GC_CheckPropertyNew(pobjDictType4GCEN: clsDictType4GCEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjDictType4GCEN.dictTypeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[字典类型名]不能为空(In 生成代码字典类型)!(clsDictType4GCBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDictType4GCEN.dictTypeId) == false &&
    GetStrLen(pobjDictType4GCEN.dictTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字典类型Id(dictTypeId)]的长度不能超过4(In 生成代码字典类型(DictType4GC))!值:$(pobjDictType4GCEN.dictTypeId)(clsDictType4GCBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDictType4GCEN.dictTypeName) == false &&
    GetStrLen(pobjDictType4GCEN.dictTypeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字典类型名(dictTypeName)]的长度不能超过50(In 生成代码字典类型(DictType4GC))!值:$(pobjDictType4GCEN.dictTypeName)(clsDictType4GCBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDictType4GCEN.updDate) == false &&
    GetStrLen(pobjDictType4GCEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 生成代码字典类型(DictType4GC))!值:$(pobjDictType4GCEN.updDate)(clsDictType4GCBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDictType4GCEN.updUser) == false &&
    GetStrLen(pobjDictType4GCEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 生成代码字典类型(DictType4GC))!值:$(pobjDictType4GCEN.updUser)(clsDictType4GCBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjDictType4GCEN.memo) == false && GetStrLen(pobjDictType4GCEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 生成代码字典类型(DictType4GC))!值:$(pobjDictType4GCEN.memo)(clsDictType4GCBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDictType4GCEN.dictTypeId) == false &&
    undefined !== pobjDictType4GCEN.dictTypeId &&
    tzDataType.isString(pobjDictType4GCEN.dictTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字典类型Id(dictTypeId)]的值:[$(pobjDictType4GCEN.dictTypeId)], 非法,应该为字符型(In 生成代码字典类型(DictType4GC))!(clsDictType4GCBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDictType4GCEN.dictTypeName) == false &&
    undefined !== pobjDictType4GCEN.dictTypeName &&
    tzDataType.isString(pobjDictType4GCEN.dictTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字典类型名(dictTypeName)]的值:[$(pobjDictType4GCEN.dictTypeName)], 非法,应该为字符型(In 生成代码字典类型(DictType4GC))!(clsDictType4GCBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDictType4GCEN.updDate) == false &&
    undefined !== pobjDictType4GCEN.updDate &&
    tzDataType.isString(pobjDictType4GCEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjDictType4GCEN.updDate)], 非法,应该为字符型(In 生成代码字典类型(DictType4GC))!(clsDictType4GCBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDictType4GCEN.updUser) == false &&
    undefined !== pobjDictType4GCEN.updUser &&
    tzDataType.isString(pobjDictType4GCEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjDictType4GCEN.updUser)], 非法,应该为字符型(In 生成代码字典类型(DictType4GC))!(clsDictType4GCBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDictType4GCEN.memo) == false &&
    undefined !== pobjDictType4GCEN.memo &&
    tzDataType.isString(pobjDictType4GCEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjDictType4GCEN.memo)], 非法,应该为字符型(In 生成代码字典类型(DictType4GC))!(clsDictType4GCBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DictType4GC_CheckProperty4Update(pobjDictType4GCEN: clsDictType4GCEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDictType4GCEN.dictTypeId) == false &&
    GetStrLen(pobjDictType4GCEN.dictTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字典类型Id(dictTypeId)]的长度不能超过4(In 生成代码字典类型(DictType4GC))!值:$(pobjDictType4GCEN.dictTypeId)(clsDictType4GCBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDictType4GCEN.dictTypeName) == false &&
    GetStrLen(pobjDictType4GCEN.dictTypeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字典类型名(dictTypeName)]的长度不能超过50(In 生成代码字典类型(DictType4GC))!值:$(pobjDictType4GCEN.dictTypeName)(clsDictType4GCBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDictType4GCEN.updDate) == false &&
    GetStrLen(pobjDictType4GCEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 生成代码字典类型(DictType4GC))!值:$(pobjDictType4GCEN.updDate)(clsDictType4GCBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDictType4GCEN.updUser) == false &&
    GetStrLen(pobjDictType4GCEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 生成代码字典类型(DictType4GC))!值:$(pobjDictType4GCEN.updUser)(clsDictType4GCBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjDictType4GCEN.memo) == false && GetStrLen(pobjDictType4GCEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 生成代码字典类型(DictType4GC))!值:$(pobjDictType4GCEN.memo)(clsDictType4GCBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDictType4GCEN.dictTypeId) == false &&
    undefined !== pobjDictType4GCEN.dictTypeId &&
    tzDataType.isString(pobjDictType4GCEN.dictTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字典类型Id(dictTypeId)]的值:[$(pobjDictType4GCEN.dictTypeId)], 非法,应该为字符型(In 生成代码字典类型(DictType4GC))!(clsDictType4GCBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDictType4GCEN.dictTypeName) == false &&
    undefined !== pobjDictType4GCEN.dictTypeName &&
    tzDataType.isString(pobjDictType4GCEN.dictTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字典类型名(dictTypeName)]的值:[$(pobjDictType4GCEN.dictTypeName)], 非法,应该为字符型(In 生成代码字典类型(DictType4GC))!(clsDictType4GCBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDictType4GCEN.updDate) == false &&
    undefined !== pobjDictType4GCEN.updDate &&
    tzDataType.isString(pobjDictType4GCEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjDictType4GCEN.updDate)], 非法,应该为字符型(In 生成代码字典类型(DictType4GC))!(clsDictType4GCBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDictType4GCEN.updUser) == false &&
    undefined !== pobjDictType4GCEN.updUser &&
    tzDataType.isString(pobjDictType4GCEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjDictType4GCEN.updUser)], 非法,应该为字符型(In 生成代码字典类型(DictType4GC))!(clsDictType4GCBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDictType4GCEN.memo) == false &&
    undefined !== pobjDictType4GCEN.memo &&
    tzDataType.isString(pobjDictType4GCEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjDictType4GCEN.memo)], 非法,应该为字符型(In 生成代码字典类型(DictType4GC))!(clsDictType4GCBL:CheckProperty4Update)',
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
export function DictType4GC_GetJSONStrByObj(pobjDictType4GCEN: clsDictType4GCEN): string {
  pobjDictType4GCEN.sfUpdFldSetStr = pobjDictType4GCEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDictType4GCEN);
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
export function DictType4GC_GetObjLstByJSONStr(strJSON: string): Array<clsDictType4GCEN> {
  let arrDictType4GCObjLst = new Array<clsDictType4GCEN>();
  if (strJSON === '') {
    return arrDictType4GCObjLst;
  }
  try {
    arrDictType4GCObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDictType4GCObjLst;
  }
  return arrDictType4GCObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDictType4GCObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DictType4GC_GetObjLstByJSONObjLst(
  arrDictType4GCObjLstS: Array<clsDictType4GCEN>,
): Array<clsDictType4GCEN> {
  const arrDictType4GCObjLst = new Array<clsDictType4GCEN>();
  for (const objInFor of arrDictType4GCObjLstS) {
    const obj1 = DictType4GC_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDictType4GCObjLst.push(obj1);
  }
  return arrDictType4GCObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DictType4GC_GetObjByJSONStr(strJSON: string): clsDictType4GCEN {
  let pobjDictType4GCEN = new clsDictType4GCEN();
  if (strJSON === '') {
    return pobjDictType4GCEN;
  }
  try {
    pobjDictType4GCEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDictType4GCEN;
  }
  return pobjDictType4GCEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DictType4GC_GetCombineCondition(objDictType4GCCond: clsDictType4GCEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDictType4GCCond.dicFldComparisonOp,
      clsDictType4GCEN.con_DictTypeId,
    ) == true
  ) {
    const strComparisonOpDictTypeId: string =
      objDictType4GCCond.dicFldComparisonOp[clsDictType4GCEN.con_DictTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDictType4GCEN.con_DictTypeId,
      objDictType4GCCond.dictTypeId,
      strComparisonOpDictTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDictType4GCCond.dicFldComparisonOp,
      clsDictType4GCEN.con_DictTypeName,
    ) == true
  ) {
    const strComparisonOpDictTypeName: string =
      objDictType4GCCond.dicFldComparisonOp[clsDictType4GCEN.con_DictTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDictType4GCEN.con_DictTypeName,
      objDictType4GCCond.dictTypeName,
      strComparisonOpDictTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDictType4GCCond.dicFldComparisonOp,
      clsDictType4GCEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objDictType4GCCond.dicFldComparisonOp[clsDictType4GCEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDictType4GCEN.con_UpdDate,
      objDictType4GCCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDictType4GCCond.dicFldComparisonOp,
      clsDictType4GCEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objDictType4GCCond.dicFldComparisonOp[clsDictType4GCEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDictType4GCEN.con_UpdUser,
      objDictType4GCCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDictType4GCCond.dicFldComparisonOp,
      clsDictType4GCEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objDictType4GCCond.dicFldComparisonOp[clsDictType4GCEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDictType4GCEN.con_Memo,
      objDictType4GCCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DictType4GC(生成代码字典类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strDictTypeName: 字典类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DictType4GC_GetUniCondStr(objDictType4GCEN: clsDictType4GCEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DictTypeName = '{0}'", objDictType4GCEN.dictTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DictType4GC(生成代码字典类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strDictTypeName: 字典类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DictType4GC_GetUniCondStr4Update(objDictType4GCEN: clsDictType4GCEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DictTypeId <> '{0}'", objDictType4GCEN.dictTypeId);
  strWhereCond += Format(" and DictTypeName = '{0}'", objDictType4GCEN.dictTypeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDictType4GCENS:源对象
 * @param objDictType4GCENT:目标对象
 */
export function DictType4GC_GetObjFromJsonObj(
  objDictType4GCENS: clsDictType4GCEN,
): clsDictType4GCEN {
  const objDictType4GCENT: clsDictType4GCEN = new clsDictType4GCEN();
  ObjectAssign(objDictType4GCENT, objDictType4GCENS);
  return objDictType4GCENT;
}
