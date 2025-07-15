/**
 * 类名:clsDnFunctionWApi
 * 表名:DnFunction(00050552)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:53:03
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
 * 数据结点函数(DnFunction)
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
import { dnFunctionCache, isFuncMapCache } from '@/views/AIModule/DnFunctionVueShare';
import { clsDnFunctionENEx } from '@/ts/L0Entity/AIModule/clsDnFunctionENEx';
import { clsDnFunctionEN } from '@/ts/L0Entity/AIModule/clsDnFunctionEN';
import { AssociationMapping_func } from '@/ts/L3ForWApi/AIModule/clsAssociationMappingWApi';
import { clsAssociationMappingEN } from '@/ts/L0Entity/AIModule/clsAssociationMappingEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const dnFunction_Controller = 'DnFunctionApi';
export const dnFunction_ConstructorName = 'dnFunction';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDnFunctionId:关键字
 * @returns 对象
 **/
export async function DnFunction_GetObjByDnFunctionIdAsync(
  strDnFunctionId: string,
): Promise<clsDnFunctionEN | null> {
  const strThisFuncName = 'GetObjByDnFunctionIdAsync';

  if (IsNullOrEmpty(strDnFunctionId) == true) {
    const strMsg = Format(
      '参数:[strDnFunctionId]不能为空!(In clsDnFunctionWApi.GetObjByDnFunctionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDnFunctionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDnFunctionId]的长度:[{0}]不正确!(clsDnFunctionWApi.GetObjByDnFunctionIdAsync)',
      strDnFunctionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDnFunctionId';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDnFunctionId,
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
      const objDnFunction = DnFunction_GetObjFromJsonObj(returnObj);
      return objDnFunction;
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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
 * @param strDnFunctionId:所给的关键字
 * @returns 对象
 */
export async function DnFunction_GetObjByDnFunctionIdlocalStorage(strDnFunctionId: string) {
  const strThisFuncName = 'GetObjByDnFunctionIdlocalStorage';

  if (IsNullOrEmpty(strDnFunctionId) == true) {
    const strMsg = Format(
      '参数:[strDnFunctionId]不能为空!(In clsDnFunctionWApi.GetObjByDnFunctionIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDnFunctionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDnFunctionId]的长度:[{0}]不正确!(clsDnFunctionWApi.GetObjByDnFunctionIdlocalStorage)',
      strDnFunctionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsDnFunctionEN._CurrTabName, strDnFunctionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objDnFunctionCache: clsDnFunctionEN = JSON.parse(strTempObj);
    return objDnFunctionCache;
  }
  try {
    const objDnFunction = await DnFunction_GetObjByDnFunctionIdAsync(strDnFunctionId);
    if (objDnFunction != null) {
      localStorage.setItem(strKey, JSON.stringify(objDnFunction));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objDnFunction;
    }
    return objDnFunction;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDnFunctionId,
      dnFunction_ConstructorName,
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
 * @param strDnFunctionId:所给的关键字
 * @returns 对象
 */
export async function DnFunction_GetObjByDnFunctionIdCache(
  strDnFunctionId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDnFunctionIdCache';

  if (IsNullOrEmpty(strDnFunctionId) == true) {
    const strMsg = Format(
      '参数:[strDnFunctionId]不能为空!(In clsDnFunctionWApi.GetObjByDnFunctionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDnFunctionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDnFunctionId]的长度:[{0}]不正确!(clsDnFunctionWApi.GetObjByDnFunctionIdCache)',
      strDnFunctionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDnFunctionObjLstCache = await DnFunction_GetObjLstCache(strPrjId);
  try {
    const arrDnFunctionSel = arrDnFunctionObjLstCache.filter(
      (x) => x.dnFunctionId == strDnFunctionId,
    );
    let objDnFunction: clsDnFunctionEN;
    if (arrDnFunctionSel.length > 0) {
      objDnFunction = arrDnFunctionSel[0];
      return objDnFunction;
    } else {
      if (bolTryAsyncOnce == true) {
        const objDnFunctionConst = await DnFunction_GetObjByDnFunctionIdAsync(strDnFunctionId);
        if (objDnFunctionConst != null) {
          DnFunction_ReFreshThisCache(strPrjId);
          return objDnFunctionConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDnFunctionId,
      dnFunction_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objDnFunction:所给的对象
 * @returns 对象
 */
export async function DnFunction_UpdateObjInLstCache(
  objDnFunction: clsDnFunctionEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrDnFunctionObjLstCache = await DnFunction_GetObjLstCache(strPrjId);
    const obj = arrDnFunctionObjLstCache.find(
      (x) => x.dnFunctionName == objDnFunction.dnFunctionName && x.prjId == objDnFunction.prjId,
    );
    if (obj != null) {
      objDnFunction.dnFunctionId = obj.dnFunctionId;
      ObjectAssign(obj, objDnFunction);
    } else {
      arrDnFunctionObjLstCache.push(objDnFunction);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      dnFunction_ConstructorName,
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
export function DnFunction_SortFunDefa(a: clsDnFunctionEN, b: clsDnFunctionEN): number {
  return a.dnFunctionId.localeCompare(b.dnFunctionId);
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
export function DnFunction_SortFunDefa2Fld(a: clsDnFunctionEN, b: clsDnFunctionEN): number {
  if (a.dnFunctionName == b.dnFunctionName)
    return a.associationMappingId.localeCompare(b.associationMappingId);
  else return a.dnFunctionName.localeCompare(b.dnFunctionName);
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
export function DnFunction_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDnFunctionEN.con_DnFunctionId:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          return a.dnFunctionId.localeCompare(b.dnFunctionId);
        };
      case clsDnFunctionEN.con_DnFunctionName:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          if (a.dnFunctionName == null) return -1;
          if (b.dnFunctionName == null) return 1;
          return a.dnFunctionName.localeCompare(b.dnFunctionName);
        };
      case clsDnFunctionEN.con_AssociationMappingId:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          return a.associationMappingId.localeCompare(b.associationMappingId);
        };
      case clsDnFunctionEN.con_ImportClass:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          if (a.importClass == null) return -1;
          if (b.importClass == null) return 1;
          return a.importClass.localeCompare(b.importClass);
        };
      case clsDnFunctionEN.con_ImportPath:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          if (a.importPath == null) return -1;
          if (b.importPath == null) return 1;
          return a.importPath.localeCompare(b.importPath);
        };
      case clsDnFunctionEN.con_PrjId:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsDnFunctionEN.con_UpdDate:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsDnFunctionEN.con_UpdUser:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsDnFunctionEN.con_Memo:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DnFunction]中不存在!(in ${dnFunction_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDnFunctionEN.con_DnFunctionId:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          return b.dnFunctionId.localeCompare(a.dnFunctionId);
        };
      case clsDnFunctionEN.con_DnFunctionName:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          if (b.dnFunctionName == null) return -1;
          if (a.dnFunctionName == null) return 1;
          return b.dnFunctionName.localeCompare(a.dnFunctionName);
        };
      case clsDnFunctionEN.con_AssociationMappingId:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          return b.associationMappingId.localeCompare(a.associationMappingId);
        };
      case clsDnFunctionEN.con_ImportClass:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          if (b.importClass == null) return -1;
          if (a.importClass == null) return 1;
          return b.importClass.localeCompare(a.importClass);
        };
      case clsDnFunctionEN.con_ImportPath:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          if (b.importPath == null) return -1;
          if (a.importPath == null) return 1;
          return b.importPath.localeCompare(a.importPath);
        };
      case clsDnFunctionEN.con_PrjId:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsDnFunctionEN.con_UpdDate:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsDnFunctionEN.con_UpdUser:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsDnFunctionEN.con_Memo:
        return (a: clsDnFunctionEN, b: clsDnFunctionEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DnFunction]中不存在!(in ${dnFunction_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strDnFunctionId:所给的关键字
 * @returns 对象
 */
export async function DnFunction_GetNameByDnFunctionIdCache(
  strDnFunctionId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strDnFunctionId) == true) {
    const strMsg = Format(
      '参数:[strDnFunctionId]不能为空!(In clsDnFunctionWApi.GetNameByDnFunctionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDnFunctionId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDnFunctionId]的长度:[{0}]不正确!(clsDnFunctionWApi.GetNameByDnFunctionIdCache)',
      strDnFunctionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDnFunctionObjLstCache = await DnFunction_GetObjLstCache(strPrjId);
  if (arrDnFunctionObjLstCache == null) return '';
  try {
    const arrDnFunctionSel = arrDnFunctionObjLstCache.filter(
      (x) => x.dnFunctionId == strDnFunctionId,
    );
    let objDnFunction: clsDnFunctionEN;
    if (arrDnFunctionSel.length > 0) {
      objDnFunction = arrDnFunctionSel[0];
      return objDnFunction.dnFunctionName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strDnFunctionId,
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
export async function DnFunction_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDnFunctionEN.con_DnFunctionId:
      return (obj: clsDnFunctionEN) => {
        return obj.dnFunctionId === value;
      };
    case clsDnFunctionEN.con_DnFunctionName:
      return (obj: clsDnFunctionEN) => {
        return obj.dnFunctionName === value;
      };
    case clsDnFunctionEN.con_AssociationMappingId:
      return (obj: clsDnFunctionEN) => {
        return obj.associationMappingId === value;
      };
    case clsDnFunctionEN.con_ImportClass:
      return (obj: clsDnFunctionEN) => {
        return obj.importClass === value;
      };
    case clsDnFunctionEN.con_ImportPath:
      return (obj: clsDnFunctionEN) => {
        return obj.importPath === value;
      };
    case clsDnFunctionEN.con_PrjId:
      return (obj: clsDnFunctionEN) => {
        return obj.prjId === value;
      };
    case clsDnFunctionEN.con_UpdDate:
      return (obj: clsDnFunctionEN) => {
        return obj.updDate === value;
      };
    case clsDnFunctionEN.con_UpdUser:
      return (obj: clsDnFunctionEN) => {
        return obj.updUser === value;
      };
    case clsDnFunctionEN.con_Memo:
      return (obj: clsDnFunctionEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DnFunction]中不存在!(in ${dnFunction_ConstructorName}.${strThisFuncName})`;
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
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function DnFunction_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsDnFunctionWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsDnFunctionWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsDnFunctionEN.con_DnFunctionId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsDnFunctionEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsDnFunctionEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strDnFunctionId = strInValue;
  if (IsNullOrEmpty(strDnFunctionId) == true) {
    return '';
  }
  const objDnFunction = await DnFunction_GetObjByDnFunctionIdCache(
    strDnFunctionId,
    strPrjIdClassfy,
  );
  if (objDnFunction == null) return '';
  if (objDnFunction.GetFldValue(strOutFldName) == null) return '';
  return objDnFunction.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function DnFunction_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsDnFunctionWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsDnFunctionWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsDnFunctionEN.con_DnFunctionId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrDnFunction = await DnFunction_GetObjLstCache(strPrjIdClassfy);
  if (arrDnFunction == null) return [];
  let arrDnFunctionSel = arrDnFunction;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrDnFunctionSel = arrDnFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrDnFunctionSel = arrDnFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrDnFunctionSel = arrDnFunctionSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrDnFunctionSel = arrDnFunctionSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrDnFunctionSel = arrDnFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrDnFunctionSel = arrDnFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrDnFunctionSel = arrDnFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrDnFunctionSel = arrDnFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrDnFunctionSel = arrDnFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrDnFunctionSel = arrDnFunctionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrDnFunctionSel.length == 0) return [];
  return arrDnFunctionSel.map((x) => x.dnFunctionId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DnFunction_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
export async function DnFunction_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
export async function DnFunction_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
export async function DnFunction_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDnFunctionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

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
      const objDnFunction = DnFunction_GetObjFromJsonObj(returnObj);
      return objDnFunction;
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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
export async function DnFunction_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsDnFunctionEN.WhereFormat) == false) {
    strWhereCond = Format(clsDnFunctionEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsDnFunctionEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsDnFunctionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDnFunctionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrDnFunctionExObjLstCache: Array<clsDnFunctionEN> = CacheHelper.Get(strKey);
    const arrDnFunctionObjLstT = DnFunction_GetObjLstByJSONObjLst(arrDnFunctionExObjLstCache);
    return arrDnFunctionObjLstT;
  }
  try {
    const arrDnFunctionExObjLst = await DnFunction_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrDnFunctionExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDnFunctionExObjLst.length,
    );
    console.log(strInfo);
    return arrDnFunctionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dnFunction_ConstructorName,
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
export async function DnFunction_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsDnFunctionEN.WhereFormat) == false) {
    strWhereCond = Format(clsDnFunctionEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsDnFunctionEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsDnFunctionEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsDnFunctionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDnFunctionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDnFunctionExObjLstCache: Array<clsDnFunctionEN> = JSON.parse(strTempObjLst);
    const arrDnFunctionObjLstT = DnFunction_GetObjLstByJSONObjLst(arrDnFunctionExObjLstCache);
    return arrDnFunctionObjLstT;
  }
  try {
    const arrDnFunctionExObjLst = await DnFunction_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrDnFunctionExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDnFunctionExObjLst.length,
    );
    console.log(strInfo);
    return arrDnFunctionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dnFunction_ConstructorName,
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
export async function DnFunction_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsDnFunctionEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDnFunctionObjLstCache: Array<clsDnFunctionEN> = JSON.parse(strTempObjLst);
    return arrDnFunctionObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function DnFunction_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDnFunctionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

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
          dnFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
export async function DnFunction_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsDnFunctionEN.WhereFormat) == false) {
    strWhereCond = Format(clsDnFunctionEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsDnFunctionEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsDnFunctionEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsDnFunctionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDnFunctionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDnFunctionExObjLstCache: Array<clsDnFunctionEN> = JSON.parse(strTempObjLst);
    const arrDnFunctionObjLstT = DnFunction_GetObjLstByJSONObjLst(arrDnFunctionExObjLstCache);
    return arrDnFunctionObjLstT;
  }
  try {
    const arrDnFunctionExObjLst = await DnFunction_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrDnFunctionExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDnFunctionExObjLst.length,
    );
    console.log(strInfo);
    return arrDnFunctionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dnFunction_ConstructorName,
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
export async function DnFunction_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsDnFunctionEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDnFunctionObjLstCache: Array<clsDnFunctionEN> = JSON.parse(strTempObjLst);
    return arrDnFunctionObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DnFunction_GetObjLstCache(strPrjId: string): Promise<Array<clsDnFunctionEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsDnFunctionWApi.DnFunction_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsDnFunctionWApi.DnFunction_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrDnFunctionObjLstCache;
  switch (clsDnFunctionEN.CacheModeId) {
    case '04': //sessionStorage
      arrDnFunctionObjLstCache = await DnFunction_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrDnFunctionObjLstCache = await DnFunction_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrDnFunctionObjLstCache = await DnFunction_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrDnFunctionObjLstCache = await DnFunction_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrDnFunctionObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DnFunction_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrDnFunctionObjLstCache;
  switch (clsDnFunctionEN.CacheModeId) {
    case '04': //sessionStorage
      arrDnFunctionObjLstCache = await DnFunction_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrDnFunctionObjLstCache = await DnFunction_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrDnFunctionObjLstCache = null;
      break;
    default:
      arrDnFunctionObjLstCache = null;
      break;
  }
  return arrDnFunctionObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrDnFunctionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DnFunction_GetSubObjLstCache(
  objDnFunctionCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrDnFunctionObjLstCache = await DnFunction_GetObjLstCache(strPrjId);
  let arrDnFunctionSel = arrDnFunctionObjLstCache;
  if (objDnFunctionCond.GetConditions().length == 0) return arrDnFunctionSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objDnFunctionCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrDnFunctionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDnFunctionCond),
      dnFunction_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDnFunctionEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDnFunctionId:关键字列表
 * @returns 对象列表
 **/
export async function DnFunction_GetObjLstByDnFunctionIdLstAsync(
  arrDnFunctionId: Array<string>,
): Promise<Array<clsDnFunctionEN>> {
  const strThisFuncName = 'GetObjLstByDnFunctionIdLstAsync';
  const strAction = 'GetObjLstByDnFunctionIdLst';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDnFunctionId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          dnFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
 * @param arrstrDnFunctionIdLst:关键字列表
 * @returns 对象列表
 */
export async function DnFunction_GetObjLstByDnFunctionIdLstCache(
  arrDnFunctionIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByDnFunctionIdLstCache';
  try {
    const arrDnFunctionObjLstCache = await DnFunction_GetObjLstCache(strPrjId);
    const arrDnFunctionSel = arrDnFunctionObjLstCache.filter(
      (x) => arrDnFunctionIdLst.indexOf(x.dnFunctionId) > -1,
    );
    return arrDnFunctionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrDnFunctionIdLst.join(','),
      dnFunction_ConstructorName,
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
export async function DnFunction_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDnFunctionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

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
          dnFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
export async function DnFunction_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDnFunctionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

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
          dnFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
export async function DnFunction_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsDnFunctionEN>();
  const arrDnFunctionObjLstCache = await DnFunction_GetObjLstCache(strPrjId);
  if (arrDnFunctionObjLstCache.length == 0) return arrDnFunctionObjLstCache;
  let arrDnFunctionSel = arrDnFunctionObjLstCache;
  const objDnFunctionCond = objPagerPara.conditionCollection;
  if (objDnFunctionCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsDnFunctionEN>();
  }
  //console.log("clsDnFunctionWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objDnFunctionCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrDnFunctionSel.length == 0) return arrDnFunctionSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDnFunctionSel = arrDnFunctionSel.sort(DnFunction_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDnFunctionSel = arrDnFunctionSel.sort(objPagerPara.sortFun);
    }
    arrDnFunctionSel = arrDnFunctionSel.slice(intStart, intEnd);
    return arrDnFunctionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dnFunction_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDnFunctionEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function DnFunction_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDnFunctionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDnFunctionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

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
          dnFunction_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DnFunction_GetObjLstByJSONObjLst(returnObjLst);
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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
 * @param strDnFunctionId:关键字
 * @returns 获取删除的结果
 **/
export async function DnFunction_DelRecordAsync(strDnFunctionId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(dnFunction_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strDnFunctionId);

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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
 * @param arrDnFunctionId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function DnFunction_DelDnFunctionsAsync(
  arrDnFunctionId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelDnFunctionsAsync';
  const strAction = 'DelDnFunctions';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDnFunctionId, config);
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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
export async function DnFunction_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
): Promise<Array<clsDnFunctionENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrDnFunctionObjLst = await DnFunction_GetObjLstCache(strPrjId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsDnFunctionENEx>();
  const arrDnFunctionExObjLst = arrDnFunctionObjLst.map((obj) => {
    const cacheKey = `${obj.dnFunctionId}_${obj.prjId}`;
    if (dnFunctionCache[cacheKey]) {
      const oldObj = dnFunctionCache[cacheKey];
      return oldObj;
    } else {
      const newObj = DnFunction_CopyToEx(obj);
      arrNewObj.push(newObj);
      dnFunctionCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await DnFunction_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsDnFunctionEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrDnFunctionExObjLst) {
      await DnFunction_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.dnFunctionId}_${newObj.prjId}`;
      dnFunctionCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrDnFunctionExObjLst.length == 0) return arrDnFunctionExObjLst;
  let arrDnFunctionSel: Array<clsDnFunctionENEx> = arrDnFunctionExObjLst;
  const objDnFunctionCond = objPagerPara.conditionCollection;
  if (objDnFunctionCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrDnFunctionExObjLst;
  }
  try {
    for (const objCondition of objDnFunctionCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrDnFunctionSel.length == 0) return arrDnFunctionSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrDnFunctionSel = arrDnFunctionSel.sort(
        DnFunction_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDnFunctionSel = arrDnFunctionSel.sort(objPagerPara.sortFun);
    }
    arrDnFunctionSel = arrDnFunctionSel.slice(intStart, intEnd);
    return arrDnFunctionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dnFunction_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDnFunctionENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objDnFunctionENS:源对象
 * @returns 目标对象=>clsDnFunctionEN:objDnFunctionENT
 **/
export function DnFunction_CopyToEx(objDnFunctionENS: clsDnFunctionEN): clsDnFunctionENEx {
  const strThisFuncName = DnFunction_CopyToEx.name;
  const objDnFunctionENT = new clsDnFunctionENEx();
  try {
    ObjectAssign(objDnFunctionENT, objDnFunctionENS);
    return objDnFunctionENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnFunction_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objDnFunctionENT;
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
export function DnFunction_FuncMapByFldName(
  strFldName: string,
  objDnFunctionEx: clsDnFunctionENEx,
) {
  const strThisFuncName = DnFunction_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsDnFunctionEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsDnFunctionENEx.con_AssociationMappingName:
      return DnFunction_FuncMapAssociationMappingName(objDnFunctionEx);
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
export function DnFunction_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDnFunctionENEx.con_AssociationMappingName:
        return (a: clsDnFunctionENEx, b: clsDnFunctionENEx) => {
          if (a.associationMappingName === null && b.associationMappingName === null) return 0;
          if (a.associationMappingName === null) return -1;
          if (b.associationMappingName === null) return 1;
          return a.associationMappingName.localeCompare(b.associationMappingName);
        };
      default:
        return DnFunction_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsDnFunctionENEx.con_AssociationMappingName:
        return (a: clsDnFunctionENEx, b: clsDnFunctionENEx) => {
          if (a.associationMappingName === null && b.associationMappingName === null) return 0;
          if (a.associationMappingName === null) return 1;
          if (b.associationMappingName === null) return -1;
          return b.associationMappingName.localeCompare(a.associationMappingName);
        };
      default:
        return DnFunction_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objDnFunctionS:源对象
 **/
export async function DnFunction_FuncMapAssociationMappingName(objDnFunction: clsDnFunctionENEx) {
  const strThisFuncName = DnFunction_FuncMapAssociationMappingName.name;
  try {
    if (IsNullOrEmpty(objDnFunction.associationMappingName) == true) {
      const AssociationMappingAssociationMappingId = objDnFunction.associationMappingId;
      const AssociationMappingAssociationMappingName = await AssociationMapping_func(
        clsAssociationMappingEN.con_AssociationMappingId,
        clsAssociationMappingEN.con_AssociationMappingName,
        AssociationMappingAssociationMappingId,
      );
      objDnFunction.associationMappingName = AssociationMappingAssociationMappingName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001333)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      dnFunction_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function DnFunction_DelDnFunctionsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelDnFunctionsByCondAsync';
  const strAction = 'DelDnFunctionsByCond';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
 * @param objDnFunctionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DnFunction_AddNewRecordAsync(
  objDnFunctionEN: clsDnFunctionEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objDnFunctionEN);
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnFunctionEN, config);
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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
 * @param objDnFunctionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DnFunction_AddNewRecordWithMaxIdAsync(
  objDnFunctionEN: clsDnFunctionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnFunctionEN, config);
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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
export async function DnFunction_AddNewObjSave(
  objDnFunctionEN: clsDnFunctionEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    DnFunction_CheckPropertyNew(objDnFunctionEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dnFunction_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await DnFunction_CheckUniCond4Add(objDnFunctionEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await DnFunction_AddNewRecordWithMaxIdAsync(objDnFunctionEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      DnFunction_ReFreshCache(objDnFunctionEN.prjId);
    } else {
      const strInfo = `添加[数据结点函数(DnFunction)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${dnFunction_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function DnFunction_CheckUniCond4Add(
  objDnFunctionEN: clsDnFunctionEN,
): Promise<boolean> {
  const strUniquenessCondition = DnFunction_GetUniCondStr(objDnFunctionEN);
  const bolIsExistCondition = await DnFunction_IsExistRecordAsync(strUniquenessCondition);
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
export async function DnFunction_CheckUniCond4Update(
  objDnFunctionEN: clsDnFunctionEN,
): Promise<boolean> {
  const strUniquenessCondition = DnFunction_GetUniCondStr4Update(objDnFunctionEN);
  const bolIsExistCondition = await DnFunction_IsExistRecordAsync(strUniquenessCondition);
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
export async function DnFunction_UpdateObjSave(objDnFunctionEN: clsDnFunctionEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objDnFunctionEN.sfUpdFldSetStr = objDnFunctionEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objDnFunctionEN.dnFunctionId == '' || objDnFunctionEN.dnFunctionId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    DnFunction_CheckProperty4Update(objDnFunctionEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${dnFunction_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await DnFunction_CheckUniCond4Update(objDnFunctionEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await DnFunction_UpdateRecordAsync(objDnFunctionEN);
    if (returnBool == true) {
      DnFunction_ReFreshCache(objDnFunctionEN.prjId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${dnFunction_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objDnFunctionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DnFunction_AddNewRecordWithReturnKeyAsync(
  objDnFunctionEN: clsDnFunctionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnFunctionEN, config);
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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
 * @param objDnFunctionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DnFunction_UpdateRecordAsync(
  objDnFunctionEN: clsDnFunctionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDnFunctionEN.sfUpdFldSetStr === undefined ||
    objDnFunctionEN.sfUpdFldSetStr === null ||
    objDnFunctionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDnFunctionEN.dnFunctionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnFunctionEN, config);
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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
 * @param objDnFunctionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DnFunction_EditRecordExAsync(
  objDnFunctionEN: clsDnFunctionEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objDnFunctionEN.sfUpdFldSetStr === undefined ||
    objDnFunctionEN.sfUpdFldSetStr === null ||
    objDnFunctionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDnFunctionEN.dnFunctionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnFunctionEN, config);
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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
 * @param objDnFunctionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DnFunction_UpdateWithConditionAsync(
  objDnFunctionEN: clsDnFunctionEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDnFunctionEN.sfUpdFldSetStr === undefined ||
    objDnFunctionEN.sfUpdFldSetStr === null ||
    objDnFunctionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDnFunctionEN.dnFunctionId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);
  objDnFunctionEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDnFunctionEN, config);
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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
 * @param objstrDnFunctionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DnFunction_IsExistRecordCache(
  objDnFunctionCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrDnFunctionObjLstCache = await DnFunction_GetObjLstCache(strPrjId);
  if (arrDnFunctionObjLstCache == null) return false;
  let arrDnFunctionSel = arrDnFunctionObjLstCache;
  if (objDnFunctionCond.GetConditions().length == 0)
    return arrDnFunctionSel.length > 0 ? true : false;
  try {
    for (const objCondition of objDnFunctionCond.GetConditions()) {
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
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrDnFunctionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objDnFunctionCond),
      dnFunction_ConstructorName,
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
export async function DnFunction_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
 * @param strDnFunctionId:所给的关键字
 * @returns 对象
 */
export async function DnFunction_IsExistCache(strDnFunctionId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrDnFunctionObjLstCache = await DnFunction_GetObjLstCache(strPrjId);
  if (arrDnFunctionObjLstCache == null) return false;
  try {
    const arrDnFunctionSel = arrDnFunctionObjLstCache.filter(
      (x) => x.dnFunctionId == strDnFunctionId,
    );
    if (arrDnFunctionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strDnFunctionId,
      dnFunction_ConstructorName,
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
 * @param strDnFunctionId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function DnFunction_IsExistAsync(strDnFunctionId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDnFunctionId,
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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
export async function DnFunction_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
 * @param objDnFunctionCond:条件对象
 * @returns 对象列表记录数
 */
export async function DnFunction_GetRecCountByCondCache(
  objDnFunctionCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrDnFunctionObjLstCache = await DnFunction_GetObjLstCache(strPrjId);
  if (arrDnFunctionObjLstCache == null) return 0;
  let arrDnFunctionSel = arrDnFunctionObjLstCache;
  if (objDnFunctionCond.GetConditions().length == 0) return arrDnFunctionSel.length;
  try {
    for (const objCondition of objDnFunctionCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDnFunctionSel = arrDnFunctionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrDnFunctionSel = arrDnFunctionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrDnFunctionSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDnFunctionCond),
      dnFunction_ConstructorName,
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
export async function DnFunction_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
export async function DnFunction_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(dnFunction_Controller, strAction);

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
        dnFunction_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dnFunction_ConstructorName,
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
export function DnFunction_GetWebApiUrl(strController: string, strAction: string): string {
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
export function DnFunction_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsDnFunctionWApi.clsDnFunctionWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsDnFunctionWApi.clsDnFunctionWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsDnFunctionEN._CurrTabName, strPrjId);
  switch (clsDnFunctionEN.CacheModeId) {
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
  clsDnFunctionEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function DnFunction_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsDnFunctionWApi.DnFunction_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsDnFunctionWApi.DnFunction_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsDnFunctionEN._CurrTabName, strPrjId);
    switch (clsDnFunctionEN.CacheModeId) {
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
    clsDnFunctionEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function DnFunction_GetLastRefreshTime(): string {
  if (clsDnFunctionEN._RefreshTimeLst.length == 0) return '';
  return clsDnFunctionEN._RefreshTimeLst[clsDnFunctionEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function DnFunction_BindDdl_DnFunctionIdByPrjIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsDnFunctionWApi.BindDdl_DnFunctionIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsDnFunctionWApi.BindDdl_DnFunctionIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_DnFunctionIdByPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DnFunctionIdByPrjIdInDivCache");
  let arrObjLstSel = await DnFunction_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsDnFunctionEN.con_DnFunctionId,
    clsDnFunctionEN.con_DnFunctionName,
    '数据结点函数...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function DnFunction_GetArrDnFunctionByPrjId(strPrjId: string) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsDnFunctionWApi.BindDdl_DnFunctionIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsDnFunctionWApi.BindDdl_DnFunctionIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DnFunctionIdByPrjIdInDivCache");
  const arrDnFunction = new Array<clsDnFunctionEN>();
  let arrObjLstSel = await DnFunction_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  const obj0 = new clsDnFunctionEN();
  obj0.dnFunctionId = '0';
  obj0.dnFunctionName = '选数据结点函数...';
  arrDnFunction.push(obj0);
  arrObjLstSel.forEach((x) => arrDnFunction.push(x));
  return arrDnFunction;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DnFunction_CheckPropertyNew(pobjDnFunctionEN: clsDnFunctionEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjDnFunctionEN.associationMappingId) === true ||
    pobjDnFunctionEN.associationMappingId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[关联关系映射Id]不能为空(In 数据结点函数)!(clsDnFunctionBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFunctionEN.prjId) === true || pobjDnFunctionEN.prjId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 数据结点函数)!(clsDnFunctionBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDnFunctionEN.dnFunctionId) == false &&
    GetStrLen(pobjDnFunctionEN.dnFunctionId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[DN函数Id(dnFunctionId)]的长度不能超过8(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.dnFunctionId}(clsDnFunctionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.dnFunctionName) == false &&
    GetStrLen(pobjDnFunctionEN.dnFunctionName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[DN函数(dnFunctionName)]的长度不能超过50(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.dnFunctionName}(clsDnFunctionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.associationMappingId) == false &&
    GetStrLen(pobjDnFunctionEN.associationMappingId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[关联关系映射Id(associationMappingId)]的长度不能超过2(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.associationMappingId}(clsDnFunctionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.importClass) == false &&
    GetStrLen(pobjDnFunctionEN.importClass) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[导入类(importClass)]的长度不能超过50(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.importClass}(clsDnFunctionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.importPath) == false &&
    GetStrLen(pobjDnFunctionEN.importPath) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[导入路径(importPath)]的长度不能超过100(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.importPath}(clsDnFunctionBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFunctionEN.prjId) == false && GetStrLen(pobjDnFunctionEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.prjId}(clsDnFunctionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.updDate) == false &&
    GetStrLen(pobjDnFunctionEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.updDate}(clsDnFunctionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.updUser) == false &&
    GetStrLen(pobjDnFunctionEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.updUser}(clsDnFunctionBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFunctionEN.memo) == false && GetStrLen(pobjDnFunctionEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.memo}(clsDnFunctionBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDnFunctionEN.dnFunctionId) == false &&
    undefined !== pobjDnFunctionEN.dnFunctionId &&
    tzDataType.isString(pobjDnFunctionEN.dnFunctionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[DN函数Id(dnFunctionId)]的值:[${pobjDnFunctionEN.dnFunctionId}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.dnFunctionName) == false &&
    undefined !== pobjDnFunctionEN.dnFunctionName &&
    tzDataType.isString(pobjDnFunctionEN.dnFunctionName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[DN函数(dnFunctionName)]的值:[${pobjDnFunctionEN.dnFunctionName}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.associationMappingId) == false &&
    undefined !== pobjDnFunctionEN.associationMappingId &&
    tzDataType.isString(pobjDnFunctionEN.associationMappingId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关联关系映射Id(associationMappingId)]的值:[${pobjDnFunctionEN.associationMappingId}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.importClass) == false &&
    undefined !== pobjDnFunctionEN.importClass &&
    tzDataType.isString(pobjDnFunctionEN.importClass) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[导入类(importClass)]的值:[${pobjDnFunctionEN.importClass}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.importPath) == false &&
    undefined !== pobjDnFunctionEN.importPath &&
    tzDataType.isString(pobjDnFunctionEN.importPath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[导入路径(importPath)]的值:[${pobjDnFunctionEN.importPath}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.prjId) == false &&
    undefined !== pobjDnFunctionEN.prjId &&
    tzDataType.isString(pobjDnFunctionEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjDnFunctionEN.prjId}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.updDate) == false &&
    undefined !== pobjDnFunctionEN.updDate &&
    tzDataType.isString(pobjDnFunctionEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjDnFunctionEN.updDate}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.updUser) == false &&
    undefined !== pobjDnFunctionEN.updUser &&
    tzDataType.isString(pobjDnFunctionEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjDnFunctionEN.updUser}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.memo) == false &&
    undefined !== pobjDnFunctionEN.memo &&
    tzDataType.isString(pobjDnFunctionEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjDnFunctionEN.memo}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DnFunction_CheckProperty4Update(pobjDnFunctionEN: clsDnFunctionEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDnFunctionEN.dnFunctionId) == false &&
    GetStrLen(pobjDnFunctionEN.dnFunctionId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[DN函数Id(dnFunctionId)]的长度不能超过8(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.dnFunctionId}(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.dnFunctionName) == false &&
    GetStrLen(pobjDnFunctionEN.dnFunctionName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[DN函数(dnFunctionName)]的长度不能超过50(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.dnFunctionName}(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.associationMappingId) == false &&
    GetStrLen(pobjDnFunctionEN.associationMappingId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[关联关系映射Id(associationMappingId)]的长度不能超过2(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.associationMappingId}(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.importClass) == false &&
    GetStrLen(pobjDnFunctionEN.importClass) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[导入类(importClass)]的长度不能超过50(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.importClass}(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.importPath) == false &&
    GetStrLen(pobjDnFunctionEN.importPath) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[导入路径(importPath)]的长度不能超过100(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.importPath}(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFunctionEN.prjId) == false && GetStrLen(pobjDnFunctionEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.prjId}(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.updDate) == false &&
    GetStrLen(pobjDnFunctionEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.updDate}(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.updUser) == false &&
    GetStrLen(pobjDnFunctionEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.updUser}(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjDnFunctionEN.memo) == false && GetStrLen(pobjDnFunctionEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 数据结点函数(DnFunction))!值:${pobjDnFunctionEN.memo}(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDnFunctionEN.dnFunctionId) == false &&
    undefined !== pobjDnFunctionEN.dnFunctionId &&
    tzDataType.isString(pobjDnFunctionEN.dnFunctionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[DN函数Id(dnFunctionId)]的值:[${pobjDnFunctionEN.dnFunctionId}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.dnFunctionName) == false &&
    undefined !== pobjDnFunctionEN.dnFunctionName &&
    tzDataType.isString(pobjDnFunctionEN.dnFunctionName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[DN函数(dnFunctionName)]的值:[${pobjDnFunctionEN.dnFunctionName}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.associationMappingId) == false &&
    undefined !== pobjDnFunctionEN.associationMappingId &&
    tzDataType.isString(pobjDnFunctionEN.associationMappingId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关联关系映射Id(associationMappingId)]的值:[${pobjDnFunctionEN.associationMappingId}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.importClass) == false &&
    undefined !== pobjDnFunctionEN.importClass &&
    tzDataType.isString(pobjDnFunctionEN.importClass) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[导入类(importClass)]的值:[${pobjDnFunctionEN.importClass}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.importPath) == false &&
    undefined !== pobjDnFunctionEN.importPath &&
    tzDataType.isString(pobjDnFunctionEN.importPath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[导入路径(importPath)]的值:[${pobjDnFunctionEN.importPath}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.prjId) == false &&
    undefined !== pobjDnFunctionEN.prjId &&
    tzDataType.isString(pobjDnFunctionEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjDnFunctionEN.prjId}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.updDate) == false &&
    undefined !== pobjDnFunctionEN.updDate &&
    tzDataType.isString(pobjDnFunctionEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjDnFunctionEN.updDate}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.updUser) == false &&
    undefined !== pobjDnFunctionEN.updUser &&
    tzDataType.isString(pobjDnFunctionEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjDnFunctionEN.updUser}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjDnFunctionEN.memo) == false &&
    undefined !== pobjDnFunctionEN.memo &&
    tzDataType.isString(pobjDnFunctionEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjDnFunctionEN.memo}], 非法,应该为字符型(In 数据结点函数(DnFunction))!(clsDnFunctionBL:CheckProperty4Update)`,
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
export function DnFunction_GetJSONStrByObj(pobjDnFunctionEN: clsDnFunctionEN): string {
  pobjDnFunctionEN.sfUpdFldSetStr = pobjDnFunctionEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDnFunctionEN);
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
export function DnFunction_GetObjLstByJSONStr(strJSON: string): Array<clsDnFunctionEN> {
  let arrDnFunctionObjLst = new Array<clsDnFunctionEN>();
  if (strJSON === '') {
    return arrDnFunctionObjLst;
  }
  try {
    arrDnFunctionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDnFunctionObjLst;
  }
  return arrDnFunctionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDnFunctionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DnFunction_GetObjLstByJSONObjLst(
  arrDnFunctionObjLstS: Array<clsDnFunctionEN>,
): Array<clsDnFunctionEN> {
  const arrDnFunctionObjLst = new Array<clsDnFunctionEN>();
  for (const objInFor of arrDnFunctionObjLstS) {
    const obj1 = DnFunction_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDnFunctionObjLst.push(obj1);
  }
  return arrDnFunctionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DnFunction_GetObjByJSONStr(strJSON: string): clsDnFunctionEN {
  let pobjDnFunctionEN = new clsDnFunctionEN();
  if (strJSON === '') {
    return pobjDnFunctionEN;
  }
  try {
    pobjDnFunctionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDnFunctionEN;
  }
  return pobjDnFunctionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DnFunction_GetCombineCondition(objDnFunctionCond: clsDnFunctionEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFunctionCond.dicFldComparisonOp,
      clsDnFunctionEN.con_DnFunctionId,
    ) == true
  ) {
    const strComparisonOpDnFunctionId: string =
      objDnFunctionCond.dicFldComparisonOp[clsDnFunctionEN.con_DnFunctionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFunctionEN.con_DnFunctionId,
      objDnFunctionCond.dnFunctionId,
      strComparisonOpDnFunctionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFunctionCond.dicFldComparisonOp,
      clsDnFunctionEN.con_DnFunctionName,
    ) == true
  ) {
    const strComparisonOpDnFunctionName: string =
      objDnFunctionCond.dicFldComparisonOp[clsDnFunctionEN.con_DnFunctionName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFunctionEN.con_DnFunctionName,
      objDnFunctionCond.dnFunctionName,
      strComparisonOpDnFunctionName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFunctionCond.dicFldComparisonOp,
      clsDnFunctionEN.con_AssociationMappingId,
    ) == true
  ) {
    const strComparisonOpAssociationMappingId: string =
      objDnFunctionCond.dicFldComparisonOp[clsDnFunctionEN.con_AssociationMappingId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFunctionEN.con_AssociationMappingId,
      objDnFunctionCond.associationMappingId,
      strComparisonOpAssociationMappingId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFunctionCond.dicFldComparisonOp,
      clsDnFunctionEN.con_ImportClass,
    ) == true
  ) {
    const strComparisonOpImportClass: string =
      objDnFunctionCond.dicFldComparisonOp[clsDnFunctionEN.con_ImportClass];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFunctionEN.con_ImportClass,
      objDnFunctionCond.importClass,
      strComparisonOpImportClass,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFunctionCond.dicFldComparisonOp,
      clsDnFunctionEN.con_ImportPath,
    ) == true
  ) {
    const strComparisonOpImportPath: string =
      objDnFunctionCond.dicFldComparisonOp[clsDnFunctionEN.con_ImportPath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFunctionEN.con_ImportPath,
      objDnFunctionCond.importPath,
      strComparisonOpImportPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFunctionCond.dicFldComparisonOp,
      clsDnFunctionEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objDnFunctionCond.dicFldComparisonOp[clsDnFunctionEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFunctionEN.con_PrjId,
      objDnFunctionCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFunctionCond.dicFldComparisonOp,
      clsDnFunctionEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objDnFunctionCond.dicFldComparisonOp[clsDnFunctionEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFunctionEN.con_UpdDate,
      objDnFunctionCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFunctionCond.dicFldComparisonOp,
      clsDnFunctionEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objDnFunctionCond.dicFldComparisonOp[clsDnFunctionEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFunctionEN.con_UpdUser,
      objDnFunctionCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDnFunctionCond.dicFldComparisonOp,
      clsDnFunctionEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objDnFunctionCond.dicFldComparisonOp[clsDnFunctionEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDnFunctionEN.con_Memo,
      objDnFunctionCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DnFunction(数据结点函数),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strDnFunctionName: DN函数(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DnFunction_GetUniCondStr(objDnFunctionEN: clsDnFunctionEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DnFunctionName = '{0}'", objDnFunctionEN.dnFunctionName);
  strWhereCond += Format(" and PrjId = '{0}'", objDnFunctionEN.prjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--DnFunction(数据结点函数),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strDnFunctionName: DN函数(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function DnFunction_GetUniCondStr4Update(objDnFunctionEN: clsDnFunctionEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and DnFunctionId <> '{0}'", objDnFunctionEN.dnFunctionId);
  strWhereCond += Format(" and DnFunctionName = '{0}'", objDnFunctionEN.dnFunctionName);
  strWhereCond += Format(" and PrjId = '{0}'", objDnFunctionEN.prjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDnFunctionENS:源对象
 * @param objDnFunctionENT:目标对象
 */
export function DnFunction_GetObjFromJsonObj(objDnFunctionENS: clsDnFunctionEN): clsDnFunctionEN {
  const objDnFunctionENT: clsDnFunctionEN = new clsDnFunctionEN();
  ObjectAssign(objDnFunctionENT, objDnFunctionENS);
  return objDnFunctionENT;
}
