/**
 * 类名:clsvFeatureFuncRela_FeatureCountByGCWApi
 * 表名:vFeatureFuncRela_FeatureCountByGC(00050627)
 * 版本:2023.07.18.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/27 22:52:48
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
 * vFeatureFuncRela_FeatureCountByGC(vFeatureFuncRela_FeatureCountByGC)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年07月27日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvFeatureFuncRela_FeatureCountByGCEN } from '@/ts/L0Entity/PrjFunction/clsvFeatureFuncRela_FeatureCountByGCEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vFeatureFuncRela_FeatureCountByGC_Controller = 'vFeatureFuncRela_FeatureCountByGCApi';
export const vFeatureFuncRela_FeatureCountByGC_ConstructorName =
  'vFeatureFuncRela_FeatureCountByGC';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncId4GC:关键字
 * @returns 对象
 **/
export async function vFeatureFuncRela_FeatureCountByGC_GetObjByFuncId4GCAsync(
  strFuncId4GC: string,
): Promise<clsvFeatureFuncRela_FeatureCountByGCEN | null> {
  const strThisFuncName = 'GetObjByFuncId4GCAsync';

  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空!(In clsvFeatureFuncRela_FeatureCountByGCWApi.GetObjByFuncId4GCAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确!(clsvFeatureFuncRela_FeatureCountByGCWApi.GetObjByFuncId4GCAsync)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncId4GC';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByGC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId4GC,
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
      const objvFeatureFuncRela_FeatureCountByGC =
        vFeatureFuncRela_FeatureCountByGC_GetObjFromJsonObj(returnObj);
      return objvFeatureFuncRela_FeatureCountByGC;
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
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
 * @param strFuncId4GC:所给的关键字
 * @returns 对象
 */
export async function vFeatureFuncRela_FeatureCountByGC_GetObjByFuncId4GCCache(
  strFuncId4GC: string,
  intApplicationTypeId: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFuncId4GCCache';

  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空!(In clsvFeatureFuncRela_FeatureCountByGCWApi.GetObjByFuncId4GCCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确!(clsvFeatureFuncRela_FeatureCountByGCWApi.GetObjByFuncId4GCCache)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFeatureFuncRela_FeatureCountByGCObjLstCache =
    await vFeatureFuncRela_FeatureCountByGC_GetObjLstCache(intApplicationTypeId);
  try {
    const arrvFeatureFuncRela_FeatureCountByGCSel =
      arrvFeatureFuncRela_FeatureCountByGCObjLstCache.filter((x) => x.funcId4GC == strFuncId4GC);
    let objvFeatureFuncRela_FeatureCountByGC: clsvFeatureFuncRela_FeatureCountByGCEN;
    if (arrvFeatureFuncRela_FeatureCountByGCSel.length > 0) {
      objvFeatureFuncRela_FeatureCountByGC = arrvFeatureFuncRela_FeatureCountByGCSel[0];
      return objvFeatureFuncRela_FeatureCountByGC;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvFeatureFuncRela_FeatureCountByGCConst =
          await vFeatureFuncRela_FeatureCountByGC_GetObjByFuncId4GCAsync(strFuncId4GC);
        if (objvFeatureFuncRela_FeatureCountByGCConst != null) {
          vFeatureFuncRela_FeatureCountByGC_ReFreshThisCache(intApplicationTypeId);
          return objvFeatureFuncRela_FeatureCountByGCConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncId4GC,
      vFeatureFuncRela_FeatureCountByGC_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strFuncId4GC:所给的关键字
 * @returns 对象
 */
export async function vFeatureFuncRela_FeatureCountByGC_GetObjByFuncId4GClocalStorage(
  strFuncId4GC: string,
) {
  const strThisFuncName = 'GetObjByFuncId4GClocalStorage';

  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空!(In clsvFeatureFuncRela_FeatureCountByGCWApi.GetObjByFuncId4GClocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确!(clsvFeatureFuncRela_FeatureCountByGCWApi.GetObjByFuncId4GClocalStorage)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFeatureFuncRela_FeatureCountByGCEN._CurrTabName,
    strFuncId4GC,
  );
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvFeatureFuncRela_FeatureCountByGCCache: clsvFeatureFuncRela_FeatureCountByGCEN =
      JSON.parse(strTempObj);
    return objvFeatureFuncRela_FeatureCountByGCCache;
  }
  try {
    const objvFeatureFuncRela_FeatureCountByGC =
      await vFeatureFuncRela_FeatureCountByGC_GetObjByFuncId4GCAsync(strFuncId4GC);
    if (objvFeatureFuncRela_FeatureCountByGC != null) {
      localStorage.setItem(strKey, JSON.stringify(objvFeatureFuncRela_FeatureCountByGC));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvFeatureFuncRela_FeatureCountByGC;
    }
    return objvFeatureFuncRela_FeatureCountByGC;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncId4GC,
      vFeatureFuncRela_FeatureCountByGC_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param intApplicationTypeId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vFeatureFuncRela_FeatureCountByGC_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  intApplicationTypeIdClassfy: number,
) {
  //const strThisFuncName = "func";

  if (intApplicationTypeIdClassfy == 0) {
    const strMsg = Format(
      '参数:[intApplicationTypeIdClassfy]不能为空!(In clsvFeatureFuncRela_FeatureCountByGCWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvFeatureFuncRela_FeatureCountByGCEN.con_FuncId4GC) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFeatureFuncRela_FeatureCountByGCEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvFeatureFuncRela_FeatureCountByGCEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFuncId4GC = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvFeatureFuncRela_FeatureCountByGC =
    await vFeatureFuncRela_FeatureCountByGC_GetObjByFuncId4GCCache(
      strFuncId4GC,
      intApplicationTypeIdClassfy,
    );
  if (objvFeatureFuncRela_FeatureCountByGC == null) return '';
  if (objvFeatureFuncRela_FeatureCountByGC.GetFldValue(strOutFldName) == null) return '';
  return objvFeatureFuncRela_FeatureCountByGC.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFeatureFuncRela_FeatureCountByGC_SortFunDefa(
  a: clsvFeatureFuncRela_FeatureCountByGCEN,
  b: clsvFeatureFuncRela_FeatureCountByGCEN,
): number {
  return a.funcId4GC.localeCompare(b.funcId4GC);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFeatureFuncRela_FeatureCountByGC_SortFunDefa2Fld(
  a: clsvFeatureFuncRela_FeatureCountByGCEN,
  b: clsvFeatureFuncRela_FeatureCountByGCEN,
): number {
  if (a.applicationTypeId == b.applicationTypeId) return a.featureCount - b.featureCount;
  else return a.applicationTypeId - b.applicationTypeId;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFeatureFuncRela_FeatureCountByGC_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFeatureFuncRela_FeatureCountByGCEN.con_FuncId4GC:
        return (
          a: clsvFeatureFuncRela_FeatureCountByGCEN,
          b: clsvFeatureFuncRela_FeatureCountByGCEN,
        ) => {
          return a.funcId4GC.localeCompare(b.funcId4GC);
        };
      case clsvFeatureFuncRela_FeatureCountByGCEN.con_ApplicationTypeId:
        return (
          a: clsvFeatureFuncRela_FeatureCountByGCEN,
          b: clsvFeatureFuncRela_FeatureCountByGCEN,
        ) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsvFeatureFuncRela_FeatureCountByGCEN.con_FeatureCount:
        return (
          a: clsvFeatureFuncRela_FeatureCountByGCEN,
          b: clsvFeatureFuncRela_FeatureCountByGCEN,
        ) => {
          return a.featureCount - b.featureCount;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFeatureFuncRela_FeatureCountByGC]中不存在!(in ${vFeatureFuncRela_FeatureCountByGC_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFeatureFuncRela_FeatureCountByGCEN.con_FuncId4GC:
        return (
          a: clsvFeatureFuncRela_FeatureCountByGCEN,
          b: clsvFeatureFuncRela_FeatureCountByGCEN,
        ) => {
          return b.funcId4GC.localeCompare(a.funcId4GC);
        };
      case clsvFeatureFuncRela_FeatureCountByGCEN.con_ApplicationTypeId:
        return (
          a: clsvFeatureFuncRela_FeatureCountByGCEN,
          b: clsvFeatureFuncRela_FeatureCountByGCEN,
        ) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsvFeatureFuncRela_FeatureCountByGCEN.con_FeatureCount:
        return (
          a: clsvFeatureFuncRela_FeatureCountByGCEN,
          b: clsvFeatureFuncRela_FeatureCountByGCEN,
        ) => {
          return b.featureCount - a.featureCount;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFeatureFuncRela_FeatureCountByGC]中不存在!(in ${vFeatureFuncRela_FeatureCountByGC_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vFeatureFuncRela_FeatureCountByGC_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFeatureFuncRela_FeatureCountByGCEN.con_FuncId4GC:
      return (obj: clsvFeatureFuncRela_FeatureCountByGCEN) => {
        return obj.funcId4GC === value;
      };
    case clsvFeatureFuncRela_FeatureCountByGCEN.con_ApplicationTypeId:
      return (obj: clsvFeatureFuncRela_FeatureCountByGCEN) => {
        return obj.applicationTypeId === value;
      };
    case clsvFeatureFuncRela_FeatureCountByGCEN.con_FeatureCount:
      return (obj: clsvFeatureFuncRela_FeatureCountByGCEN) => {
        return obj.featureCount === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFeatureFuncRela_FeatureCountByGC]中不存在!(in ${vFeatureFuncRela_FeatureCountByGC_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param intApplicationTypeId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vFeatureFuncRela_FeatureCountByGC_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  intApplicationTypeIdClassfy: number,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (intApplicationTypeIdClassfy == 0) {
    const strMsg = Format(
      '参数:[intApplicationTypeIdClassfy]不能为空!(In clsvFeatureFuncRela_FeatureCountByGCWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvFeatureFuncRela_FeatureCountByGCEN.con_FuncId4GC) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvFeatureFuncRela_FeatureCountByGC =
    await vFeatureFuncRela_FeatureCountByGC_GetObjLstCache(intApplicationTypeIdClassfy);
  if (arrvFeatureFuncRela_FeatureCountByGC == null) return [];
  let arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGC;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvFeatureFuncRela_FeatureCountByGCSel.length == 0) return [];
  return arrvFeatureFuncRela_FeatureCountByGCSel.map((x) => x.funcId4GC);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFeatureFuncRela_FeatureCountByGC_GetFirstIDAsync(
  strWhereCond: string,
): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByGC_Controller, strAction);

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
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByGC_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByGC_Controller, strAction);

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
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByGC_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFeatureFuncRela_FeatureCountByGCEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByGC_Controller, strAction);

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
      const objvFeatureFuncRela_FeatureCountByGC =
        vFeatureFuncRela_FeatureCountByGC_GetObjFromJsonObj(returnObj);
      return objvFeatureFuncRela_FeatureCountByGC;
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
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByGC_GetObjLstClientCache(
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFeatureFuncRela_FeatureCountByGCEN.WhereFormat) == false) {
    strWhereCond = Format(clsvFeatureFuncRela_FeatureCountByGCEN.WhereFormat, intApplicationTypeId);
  } else {
    strWhereCond = Format("ApplicationTypeId='{0}'", intApplicationTypeId);
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFeatureFuncRela_FeatureCountByGCEN._CurrTabName,
    intApplicationTypeId,
  );
  if (IsNullOrEmpty(clsvFeatureFuncRela_FeatureCountByGCEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFeatureFuncRela_FeatureCountByGCEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvFeatureFuncRela_FeatureCountByGCExObjLstCache: Array<clsvFeatureFuncRela_FeatureCountByGCEN> =
      CacheHelper.Get(strKey);
    const arrvFeatureFuncRela_FeatureCountByGCObjLstT =
      vFeatureFuncRela_FeatureCountByGC_GetObjLstByJSONObjLst(
        arrvFeatureFuncRela_FeatureCountByGCExObjLstCache,
      );
    return arrvFeatureFuncRela_FeatureCountByGCObjLstT;
  }
  try {
    const arrvFeatureFuncRela_FeatureCountByGCExObjLst =
      await vFeatureFuncRela_FeatureCountByGC_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvFeatureFuncRela_FeatureCountByGCExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFeatureFuncRela_FeatureCountByGCExObjLst.length,
    );
    console.log(strInfo);
    return arrvFeatureFuncRela_FeatureCountByGCExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByGC_GetObjLstlocalStorage(
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFeatureFuncRela_FeatureCountByGCEN.WhereFormat) == false) {
    strWhereCond = Format(clsvFeatureFuncRela_FeatureCountByGCEN.WhereFormat, intApplicationTypeId);
  } else {
    strWhereCond = Format(
      "{0}='{1}'",
      clsvFeatureFuncRela_FeatureCountByGCEN.con_ApplicationTypeId,
      intApplicationTypeId,
    );
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFeatureFuncRela_FeatureCountByGCEN._CurrTabName,
    intApplicationTypeId,
  );
  if (IsNullOrEmpty(clsvFeatureFuncRela_FeatureCountByGCEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFeatureFuncRela_FeatureCountByGCEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFeatureFuncRela_FeatureCountByGCExObjLstCache: Array<clsvFeatureFuncRela_FeatureCountByGCEN> =
      JSON.parse(strTempObjLst);
    const arrvFeatureFuncRela_FeatureCountByGCObjLstT =
      vFeatureFuncRela_FeatureCountByGC_GetObjLstByJSONObjLst(
        arrvFeatureFuncRela_FeatureCountByGCExObjLstCache,
      );
    return arrvFeatureFuncRela_FeatureCountByGCObjLstT;
  }
  try {
    const arrvFeatureFuncRela_FeatureCountByGCExObjLst =
      await vFeatureFuncRela_FeatureCountByGC_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvFeatureFuncRela_FeatureCountByGCEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvFeatureFuncRela_FeatureCountByGCExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFeatureFuncRela_FeatureCountByGCExObjLst.length,
    );
    console.log(strInfo);
    return arrvFeatureFuncRela_FeatureCountByGCExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByGC_GetObjLstlocalStoragePureCache(
  intApplicationTypeId: number,
) {
  //初始化列表缓存
  const strKey = Format(
    '{0}_{1}',
    clsvFeatureFuncRela_FeatureCountByGCEN._CurrTabName,
    intApplicationTypeId,
  );
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFeatureFuncRela_FeatureCountByGCObjLstCache: Array<clsvFeatureFuncRela_FeatureCountByGCEN> =
      JSON.parse(strTempObjLst);
    return arrvFeatureFuncRela_FeatureCountByGCObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vFeatureFuncRela_FeatureCountByGC_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFeatureFuncRela_FeatureCountByGCEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByGC_Controller, strAction);

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
          vFeatureFuncRela_FeatureCountByGC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureFuncRela_FeatureCountByGC_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByGC_GetObjLstsessionStorage(
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFeatureFuncRela_FeatureCountByGCEN.WhereFormat) == false) {
    strWhereCond = Format(clsvFeatureFuncRela_FeatureCountByGCEN.WhereFormat, intApplicationTypeId);
  } else {
    strWhereCond = Format(
      "{0}='{1}'",
      clsvFeatureFuncRela_FeatureCountByGCEN.con_ApplicationTypeId,
      intApplicationTypeId,
    );
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFeatureFuncRela_FeatureCountByGCEN._CurrTabName,
    intApplicationTypeId,
  );
  if (IsNullOrEmpty(clsvFeatureFuncRela_FeatureCountByGCEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFeatureFuncRela_FeatureCountByGCEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFeatureFuncRela_FeatureCountByGCExObjLstCache: Array<clsvFeatureFuncRela_FeatureCountByGCEN> =
      JSON.parse(strTempObjLst);
    const arrvFeatureFuncRela_FeatureCountByGCObjLstT =
      vFeatureFuncRela_FeatureCountByGC_GetObjLstByJSONObjLst(
        arrvFeatureFuncRela_FeatureCountByGCExObjLstCache,
      );
    return arrvFeatureFuncRela_FeatureCountByGCObjLstT;
  }
  try {
    const arrvFeatureFuncRela_FeatureCountByGCExObjLst =
      await vFeatureFuncRela_FeatureCountByGC_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvFeatureFuncRela_FeatureCountByGCEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvFeatureFuncRela_FeatureCountByGCExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFeatureFuncRela_FeatureCountByGCExObjLst.length,
    );
    console.log(strInfo);
    return arrvFeatureFuncRela_FeatureCountByGCExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByGC_GetObjLstsessionStoragePureCache(
  intApplicationTypeId: number,
) {
  //初始化列表缓存
  const strKey = Format(
    '{0}_{1}',
    clsvFeatureFuncRela_FeatureCountByGCEN._CurrTabName,
    intApplicationTypeId,
  );
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFeatureFuncRela_FeatureCountByGCObjLstCache: Array<clsvFeatureFuncRela_FeatureCountByGCEN> =
      JSON.parse(strTempObjLst);
    return arrvFeatureFuncRela_FeatureCountByGCObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFeatureFuncRela_FeatureCountByGC_GetObjLstCache(
  intApplicationTypeId: number,
): Promise<Array<clsvFeatureFuncRela_FeatureCountByGCEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (intApplicationTypeId == 0) {
    const strMsg = Format(
      '参数:[intApplicationTypeId]不能为空！(In clsvFeatureFuncRela_FeatureCountByGCWApi.vFeatureFuncRela_FeatureCountByGC_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvFeatureFuncRela_FeatureCountByGCObjLstCache;
  switch (clsvFeatureFuncRela_FeatureCountByGCEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFeatureFuncRela_FeatureCountByGCObjLstCache =
        await vFeatureFuncRela_FeatureCountByGC_GetObjLstsessionStorage(intApplicationTypeId);
      break;
    case '03': //localStorage
      arrvFeatureFuncRela_FeatureCountByGCObjLstCache =
        await vFeatureFuncRela_FeatureCountByGC_GetObjLstlocalStorage(intApplicationTypeId);
      break;
    case '02': //ClientCache
      arrvFeatureFuncRela_FeatureCountByGCObjLstCache =
        await vFeatureFuncRela_FeatureCountByGC_GetObjLstClientCache(intApplicationTypeId);
      break;
    default:
      arrvFeatureFuncRela_FeatureCountByGCObjLstCache =
        await vFeatureFuncRela_FeatureCountByGC_GetObjLstClientCache(intApplicationTypeId);
      break;
  }
  return arrvFeatureFuncRela_FeatureCountByGCObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFeatureFuncRela_FeatureCountByGC_GetObjLstPureCache(
  intApplicationTypeId: number,
) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvFeatureFuncRela_FeatureCountByGCObjLstCache;
  switch (clsvFeatureFuncRela_FeatureCountByGCEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFeatureFuncRela_FeatureCountByGCObjLstCache =
        await vFeatureFuncRela_FeatureCountByGC_GetObjLstsessionStoragePureCache(
          intApplicationTypeId,
        );
      break;
    case '03': //localStorage
      arrvFeatureFuncRela_FeatureCountByGCObjLstCache =
        await vFeatureFuncRela_FeatureCountByGC_GetObjLstlocalStoragePureCache(
          intApplicationTypeId,
        );
      break;
    case '02': //ClientCache
      arrvFeatureFuncRela_FeatureCountByGCObjLstCache = null;
      break;
    default:
      arrvFeatureFuncRela_FeatureCountByGCObjLstCache = null;
      break;
  }
  return arrvFeatureFuncRela_FeatureCountByGCObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFuncId4GCCond:条件对象
 * @returns 对象列表子集
 */
export async function vFeatureFuncRela_FeatureCountByGC_GetSubObjLstCache(
  objvFeatureFuncRela_FeatureCountByGCCond: clsvFeatureFuncRela_FeatureCountByGCEN,
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvFeatureFuncRela_FeatureCountByGCObjLstCache =
    await vFeatureFuncRela_FeatureCountByGC_GetObjLstCache(intApplicationTypeId);
  let arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCObjLstCache;
  if (
    objvFeatureFuncRela_FeatureCountByGCCond.sfFldComparisonOp == null ||
    objvFeatureFuncRela_FeatureCountByGCCond.sfFldComparisonOp == ''
  )
    return arrvFeatureFuncRela_FeatureCountByGCSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFeatureFuncRela_FeatureCountByGCCond.sfFldComparisonOp,
  );
  //console.log("clsvFeatureFuncRela_FeatureCountByGCWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFeatureFuncRela_FeatureCountByGCCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureFuncRela_FeatureCountByGCCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
              );
          } else if (strComparisonOp == 'like') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
              );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
              );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          } else if (strComparisonOp == '>=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) >= strValue,
              );
          } else if (strComparisonOp == '<=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          } else if (strComparisonOp == '>') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) > strValue,
              );
          } else if (strComparisonOp == '<') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          }
          break;
      }
    }
    return arrvFeatureFuncRela_FeatureCountByGCSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFeatureFuncRela_FeatureCountByGCCond),
      vFeatureFuncRela_FeatureCountByGC_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFeatureFuncRela_FeatureCountByGCEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFuncId4GC:关键字列表
 * @returns 对象列表
 **/
export async function vFeatureFuncRela_FeatureCountByGC_GetObjLstByFuncId4GCLstAsync(
  arrFuncId4GC: Array<string>,
): Promise<Array<clsvFeatureFuncRela_FeatureCountByGCEN>> {
  const strThisFuncName = 'GetObjLstByFuncId4GCLstAsync';
  const strAction = 'GetObjLstByFuncId4GCLst';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByGC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncId4GC, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vFeatureFuncRela_FeatureCountByGC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureFuncRela_FeatureCountByGC_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
 * @param arrstrFuncId4GCLst:关键字列表
 * @returns 对象列表
 */
export async function vFeatureFuncRela_FeatureCountByGC_GetObjLstByFuncId4GCLstCache(
  arrFuncId4GCLst: Array<string>,
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'GetObjLstByFuncId4GCLstCache';
  try {
    const arrvFeatureFuncRela_FeatureCountByGCObjLstCache =
      await vFeatureFuncRela_FeatureCountByGC_GetObjLstCache(intApplicationTypeId);
    const arrvFeatureFuncRela_FeatureCountByGCSel =
      arrvFeatureFuncRela_FeatureCountByGCObjLstCache.filter(
        (x) => arrFuncId4GCLst.indexOf(x.funcId4GC) > -1,
      );
    return arrvFeatureFuncRela_FeatureCountByGCSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFuncId4GCLst.join(','),
      vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByGC_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFeatureFuncRela_FeatureCountByGCEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByGC_Controller, strAction);

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
          vFeatureFuncRela_FeatureCountByGC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureFuncRela_FeatureCountByGC_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByGC_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFeatureFuncRela_FeatureCountByGCEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByGC_Controller, strAction);

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
          vFeatureFuncRela_FeatureCountByGC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureFuncRela_FeatureCountByGC_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByGC_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFeatureFuncRela_FeatureCountByGCEN>();
  const arrvFeatureFuncRela_FeatureCountByGCObjLstCache =
    await vFeatureFuncRela_FeatureCountByGC_GetObjLstCache(intApplicationTypeId);
  if (arrvFeatureFuncRela_FeatureCountByGCObjLstCache.length == 0)
    return arrvFeatureFuncRela_FeatureCountByGCObjLstCache;
  let arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvFeatureFuncRela_FeatureCountByGCCond = new clsvFeatureFuncRela_FeatureCountByGCEN();
  ObjectAssign(objvFeatureFuncRela_FeatureCountByGCCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvFeatureFuncRela_FeatureCountByGCWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureFuncRela_FeatureCountByGCCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
              );
          } else if (strComparisonOp == 'like') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
              );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
              );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          } else if (strComparisonOp == '>=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) >= strValue,
              );
          } else if (strComparisonOp == '<=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          } else if (strComparisonOp == '>') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) > strValue,
              );
          } else if (strComparisonOp == '<') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          }
          break;
      }
    }
    if (arrvFeatureFuncRela_FeatureCountByGCSel.length == 0)
      return arrvFeatureFuncRela_FeatureCountByGCSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.sort(
        vFeatureFuncRela_FeatureCountByGC_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.sort(
        objPagerPara.sortFun,
      );
    }
    arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.slice(
      intStart,
      intEnd,
    );
    return arrvFeatureFuncRela_FeatureCountByGCSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vFeatureFuncRela_FeatureCountByGC_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFeatureFuncRela_FeatureCountByGCEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vFeatureFuncRela_FeatureCountByGC_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFeatureFuncRela_FeatureCountByGCEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFeatureFuncRela_FeatureCountByGCEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByGC_Controller, strAction);

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
          vFeatureFuncRela_FeatureCountByGC_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureFuncRela_FeatureCountByGC_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
 * @param objstrFuncId4GCCond:条件对象
 * @returns 对象列表子集
 */
export async function vFeatureFuncRela_FeatureCountByGC_IsExistRecordCache(
  objvFeatureFuncRela_FeatureCountByGCCond: clsvFeatureFuncRela_FeatureCountByGCEN,
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvFeatureFuncRela_FeatureCountByGCObjLstCache =
    await vFeatureFuncRela_FeatureCountByGC_GetObjLstCache(intApplicationTypeId);
  if (arrvFeatureFuncRela_FeatureCountByGCObjLstCache == null) return false;
  let arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCObjLstCache;
  if (
    objvFeatureFuncRela_FeatureCountByGCCond.sfFldComparisonOp == null ||
    objvFeatureFuncRela_FeatureCountByGCCond.sfFldComparisonOp == ''
  )
    return arrvFeatureFuncRela_FeatureCountByGCSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFeatureFuncRela_FeatureCountByGCCond.sfFldComparisonOp,
  );
  //console.log("clsvFeatureFuncRela_FeatureCountByGCWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFeatureFuncRela_FeatureCountByGCCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureFuncRela_FeatureCountByGCCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
              );
          } else if (strComparisonOp == 'like') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
              );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
              );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          } else if (strComparisonOp == '>=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) >= strValue,
              );
          } else if (strComparisonOp == '<=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          } else if (strComparisonOp == '>') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) > strValue,
              );
          } else if (strComparisonOp == '<') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          }
          break;
      }
    }
    if (arrvFeatureFuncRela_FeatureCountByGCSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvFeatureFuncRela_FeatureCountByGCCond),
      vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByGC_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByGC_Controller, strAction);

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
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
 * @param strFuncId4GC:所给的关键字
 * @returns 对象
 */
export async function vFeatureFuncRela_FeatureCountByGC_IsExistCache(
  strFuncId4GC: string,
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'IsExistCache';
  const arrvFeatureFuncRela_FeatureCountByGCObjLstCache =
    await vFeatureFuncRela_FeatureCountByGC_GetObjLstCache(intApplicationTypeId);
  if (arrvFeatureFuncRela_FeatureCountByGCObjLstCache == null) return false;
  try {
    const arrvFeatureFuncRela_FeatureCountByGCSel =
      arrvFeatureFuncRela_FeatureCountByGCObjLstCache.filter((x) => x.funcId4GC == strFuncId4GC);
    if (arrvFeatureFuncRela_FeatureCountByGCSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFuncId4GC,
      vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
 * @param strFuncId4GC:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vFeatureFuncRela_FeatureCountByGC_IsExistAsync(
  strFuncId4GC: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByGC_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId4GC,
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
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByGC_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByGC_Controller, strAction);

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
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
 * @param objvFeatureFuncRela_FeatureCountByGCCond:条件对象
 * @returns 对象列表记录数
 */
export async function vFeatureFuncRela_FeatureCountByGC_GetRecCountByCondCache(
  objvFeatureFuncRela_FeatureCountByGCCond: clsvFeatureFuncRela_FeatureCountByGCEN,
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvFeatureFuncRela_FeatureCountByGCObjLstCache =
    await vFeatureFuncRela_FeatureCountByGC_GetObjLstCache(intApplicationTypeId);
  if (arrvFeatureFuncRela_FeatureCountByGCObjLstCache == null) return 0;
  let arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCObjLstCache;
  if (
    objvFeatureFuncRela_FeatureCountByGCCond.sfFldComparisonOp == null ||
    objvFeatureFuncRela_FeatureCountByGCCond.sfFldComparisonOp == ''
  )
    return arrvFeatureFuncRela_FeatureCountByGCSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFeatureFuncRela_FeatureCountByGCCond.sfFldComparisonOp,
  );
  //console.log("clsvFeatureFuncRela_FeatureCountByGCWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFeatureFuncRela_FeatureCountByGCCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFeatureFuncRela_FeatureCountByGCSel = arrvFeatureFuncRela_FeatureCountByGCSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureFuncRela_FeatureCountByGCCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
              );
          } else if (strComparisonOp == 'like') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
              );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
              );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          } else if (strComparisonOp == '>=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) >= strValue,
              );
          } else if (strComparisonOp == '<=') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          } else if (strComparisonOp == '>') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) > strValue,
              );
          } else if (strComparisonOp == '<') {
            arrvFeatureFuncRela_FeatureCountByGCSel =
              arrvFeatureFuncRela_FeatureCountByGCSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          }
          break;
      }
    }
    return arrvFeatureFuncRela_FeatureCountByGCSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFeatureFuncRela_FeatureCountByGCCond),
      vFeatureFuncRela_FeatureCountByGC_ConstructorName,
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
export function vFeatureFuncRela_FeatureCountByGC_GetWebApiUrl(
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vFeatureFuncRela_FeatureCountByGC_ReFreshThisCache(
  intApplicationTypeId: number,
): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format(
      '{0}_{1}',
      clsvFeatureFuncRela_FeatureCountByGCEN._CurrTabName,
      intApplicationTypeId,
    );
    switch (clsvFeatureFuncRela_FeatureCountByGCEN.CacheModeId) {
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
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFeatureFuncRela_FeatureCountByGC_GetJSONStrByObj(
  pobjvFeatureFuncRela_FeatureCountByGCEN: clsvFeatureFuncRela_FeatureCountByGCEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFeatureFuncRela_FeatureCountByGCEN);
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
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vFeatureFuncRela_FeatureCountByGC_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvFeatureFuncRela_FeatureCountByGCEN> {
  let arrvFeatureFuncRela_FeatureCountByGCObjLst =
    new Array<clsvFeatureFuncRela_FeatureCountByGCEN>();
  if (strJSON === '') {
    return arrvFeatureFuncRela_FeatureCountByGCObjLst;
  }
  try {
    arrvFeatureFuncRela_FeatureCountByGCObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFeatureFuncRela_FeatureCountByGCObjLst;
  }
  return arrvFeatureFuncRela_FeatureCountByGCObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFeatureFuncRela_FeatureCountByGCObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFeatureFuncRela_FeatureCountByGC_GetObjLstByJSONObjLst(
  arrvFeatureFuncRela_FeatureCountByGCObjLstS: Array<clsvFeatureFuncRela_FeatureCountByGCEN>,
): Array<clsvFeatureFuncRela_FeatureCountByGCEN> {
  const arrvFeatureFuncRela_FeatureCountByGCObjLst =
    new Array<clsvFeatureFuncRela_FeatureCountByGCEN>();
  for (const objInFor of arrvFeatureFuncRela_FeatureCountByGCObjLstS) {
    const obj1 = vFeatureFuncRela_FeatureCountByGC_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFeatureFuncRela_FeatureCountByGCObjLst.push(obj1);
  }
  return arrvFeatureFuncRela_FeatureCountByGCObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFeatureFuncRela_FeatureCountByGC_GetObjByJSONStr(
  strJSON: string,
): clsvFeatureFuncRela_FeatureCountByGCEN {
  let pobjvFeatureFuncRela_FeatureCountByGCEN = new clsvFeatureFuncRela_FeatureCountByGCEN();
  if (strJSON === '') {
    return pobjvFeatureFuncRela_FeatureCountByGCEN;
  }
  try {
    pobjvFeatureFuncRela_FeatureCountByGCEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFeatureFuncRela_FeatureCountByGCEN;
  }
  return pobjvFeatureFuncRela_FeatureCountByGCEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFeatureFuncRela_FeatureCountByGC_GetCombineCondition(
  objvFeatureFuncRela_FeatureCountByGCCond: clsvFeatureFuncRela_FeatureCountByGCEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureFuncRela_FeatureCountByGCCond.dicFldComparisonOp,
      clsvFeatureFuncRela_FeatureCountByGCEN.con_FuncId4GC,
    ) == true
  ) {
    const strComparisonOpFuncId4GC: string =
      objvFeatureFuncRela_FeatureCountByGCCond.dicFldComparisonOp[
        clsvFeatureFuncRela_FeatureCountByGCEN.con_FuncId4GC
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureFuncRela_FeatureCountByGCEN.con_FuncId4GC,
      objvFeatureFuncRela_FeatureCountByGCCond.funcId4GC,
      strComparisonOpFuncId4GC,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureFuncRela_FeatureCountByGCCond.dicFldComparisonOp,
      clsvFeatureFuncRela_FeatureCountByGCEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objvFeatureFuncRela_FeatureCountByGCCond.dicFldComparisonOp[
        clsvFeatureFuncRela_FeatureCountByGCEN.con_ApplicationTypeId
      ];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFeatureFuncRela_FeatureCountByGCEN.con_ApplicationTypeId,
      objvFeatureFuncRela_FeatureCountByGCCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureFuncRela_FeatureCountByGCCond.dicFldComparisonOp,
      clsvFeatureFuncRela_FeatureCountByGCEN.con_FeatureCount,
    ) == true
  ) {
    const strComparisonOpFeatureCount: string =
      objvFeatureFuncRela_FeatureCountByGCCond.dicFldComparisonOp[
        clsvFeatureFuncRela_FeatureCountByGCEN.con_FeatureCount
      ];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFeatureFuncRela_FeatureCountByGCEN.con_FeatureCount,
      objvFeatureFuncRela_FeatureCountByGCCond.featureCount,
      strComparisonOpFeatureCount,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFeatureFuncRela_FeatureCountByGCENS:源对象
 * @param objvFeatureFuncRela_FeatureCountByGCENT:目标对象
 */
export function vFeatureFuncRela_FeatureCountByGC_GetObjFromJsonObj(
  objvFeatureFuncRela_FeatureCountByGCENS: clsvFeatureFuncRela_FeatureCountByGCEN,
): clsvFeatureFuncRela_FeatureCountByGCEN {
  const objvFeatureFuncRela_FeatureCountByGCENT: clsvFeatureFuncRela_FeatureCountByGCEN =
    new clsvFeatureFuncRela_FeatureCountByGCEN();
  ObjectAssign(objvFeatureFuncRela_FeatureCountByGCENT, objvFeatureFuncRela_FeatureCountByGCENS);
  return objvFeatureFuncRela_FeatureCountByGCENT;
}
