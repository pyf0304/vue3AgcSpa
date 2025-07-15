/**
 * 类名:clsvFeatureFuncRela_FeatureCountByCodeWApi
 * 表名:vFeatureFuncRela_FeatureCountByCode(00050628)
 * 版本:2023.07.18.1(服务器:WIN-SRV103-116)
 * 日期:2023/07/27 22:52:49
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
 * vFeatureFuncRela_FeatureCountByCode(vFeatureFuncRela_FeatureCountByCode)
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
import { clsvFeatureFuncRela_FeatureCountByCodeEN } from '@/ts/L0Entity/PrjFunction/clsvFeatureFuncRela_FeatureCountByCodeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vFeatureFuncRela_FeatureCountByCode_Controller =
  'vFeatureFuncRela_FeatureCountByCodeApi';
export const vFeatureFuncRela_FeatureCountByCode_ConstructorName =
  'vFeatureFuncRela_FeatureCountByCode';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncId4Code:关键字
 * @returns 对象
 **/
export async function vFeatureFuncRela_FeatureCountByCode_GetObjByFuncId4CodeAsync(
  strFuncId4Code: string,
): Promise<clsvFeatureFuncRela_FeatureCountByCodeEN | null> {
  const strThisFuncName = 'GetObjByFuncId4CodeAsync';

  if (IsNullOrEmpty(strFuncId4Code) == true) {
    const strMsg = Format(
      '参数:[strFuncId4Code]不能为空!(In clsvFeatureFuncRela_FeatureCountByCodeWApi.GetObjByFuncId4CodeAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4Code.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4Code]的长度:[{0}]不正确!(clsvFeatureFuncRela_FeatureCountByCodeWApi.GetObjByFuncId4CodeAsync)',
      strFuncId4Code.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncId4Code';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByCode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId4Code,
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
      const objvFeatureFuncRela_FeatureCountByCode =
        vFeatureFuncRela_FeatureCountByCode_GetObjFromJsonObj(returnObj);
      return objvFeatureFuncRela_FeatureCountByCode;
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
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
 * @param strFuncId4Code:所给的关键字
 * @returns 对象
 */
export async function vFeatureFuncRela_FeatureCountByCode_GetObjByFuncId4CodeCache(
  strFuncId4Code: string,
  intApplicationTypeId: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFuncId4CodeCache';

  if (IsNullOrEmpty(strFuncId4Code) == true) {
    const strMsg = Format(
      '参数:[strFuncId4Code]不能为空!(In clsvFeatureFuncRela_FeatureCountByCodeWApi.GetObjByFuncId4CodeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4Code.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4Code]的长度:[{0}]不正确!(clsvFeatureFuncRela_FeatureCountByCodeWApi.GetObjByFuncId4CodeCache)',
      strFuncId4Code.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFeatureFuncRela_FeatureCountByCodeObjLstCache =
    await vFeatureFuncRela_FeatureCountByCode_GetObjLstCache(intApplicationTypeId);
  try {
    const arrvFeatureFuncRela_FeatureCountByCodeSel =
      arrvFeatureFuncRela_FeatureCountByCodeObjLstCache.filter(
        (x) => x.funcId4Code == strFuncId4Code,
      );
    let objvFeatureFuncRela_FeatureCountByCode: clsvFeatureFuncRela_FeatureCountByCodeEN;
    if (arrvFeatureFuncRela_FeatureCountByCodeSel.length > 0) {
      objvFeatureFuncRela_FeatureCountByCode = arrvFeatureFuncRela_FeatureCountByCodeSel[0];
      return objvFeatureFuncRela_FeatureCountByCode;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvFeatureFuncRela_FeatureCountByCodeConst =
          await vFeatureFuncRela_FeatureCountByCode_GetObjByFuncId4CodeAsync(strFuncId4Code);
        if (objvFeatureFuncRela_FeatureCountByCodeConst != null) {
          vFeatureFuncRela_FeatureCountByCode_ReFreshThisCache(intApplicationTypeId);
          return objvFeatureFuncRela_FeatureCountByCodeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncId4Code,
      vFeatureFuncRela_FeatureCountByCode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strFuncId4Code:所给的关键字
 * @returns 对象
 */
export async function vFeatureFuncRela_FeatureCountByCode_GetObjByFuncId4CodelocalStorage(
  strFuncId4Code: string,
) {
  const strThisFuncName = 'GetObjByFuncId4CodelocalStorage';

  if (IsNullOrEmpty(strFuncId4Code) == true) {
    const strMsg = Format(
      '参数:[strFuncId4Code]不能为空!(In clsvFeatureFuncRela_FeatureCountByCodeWApi.GetObjByFuncId4CodelocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4Code.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4Code]的长度:[{0}]不正确!(clsvFeatureFuncRela_FeatureCountByCodeWApi.GetObjByFuncId4CodelocalStorage)',
      strFuncId4Code.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFeatureFuncRela_FeatureCountByCodeEN._CurrTabName,
    strFuncId4Code,
  );
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvFeatureFuncRela_FeatureCountByCodeCache: clsvFeatureFuncRela_FeatureCountByCodeEN =
      JSON.parse(strTempObj);
    return objvFeatureFuncRela_FeatureCountByCodeCache;
  }
  try {
    const objvFeatureFuncRela_FeatureCountByCode =
      await vFeatureFuncRela_FeatureCountByCode_GetObjByFuncId4CodeAsync(strFuncId4Code);
    if (objvFeatureFuncRela_FeatureCountByCode != null) {
      localStorage.setItem(strKey, JSON.stringify(objvFeatureFuncRela_FeatureCountByCode));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvFeatureFuncRela_FeatureCountByCode;
    }
    return objvFeatureFuncRela_FeatureCountByCode;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncId4Code,
      vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByCode_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  intApplicationTypeIdClassfy: number,
) {
  //const strThisFuncName = "func";

  if (intApplicationTypeIdClassfy == 0) {
    const strMsg = Format(
      '参数:[intApplicationTypeIdClassfy]不能为空!(In clsvFeatureFuncRela_FeatureCountByCodeWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvFeatureFuncRela_FeatureCountByCodeEN.con_FuncId4Code) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFeatureFuncRela_FeatureCountByCodeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvFeatureFuncRela_FeatureCountByCodeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFuncId4Code = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvFeatureFuncRela_FeatureCountByCode =
    await vFeatureFuncRela_FeatureCountByCode_GetObjByFuncId4CodeCache(
      strFuncId4Code,
      intApplicationTypeIdClassfy,
    );
  if (objvFeatureFuncRela_FeatureCountByCode == null) return '';
  if (objvFeatureFuncRela_FeatureCountByCode.GetFldValue(strOutFldName) == null) return '';
  return objvFeatureFuncRela_FeatureCountByCode.GetFldValue(strOutFldName).toString();
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
export function vFeatureFuncRela_FeatureCountByCode_SortFunDefa(
  a: clsvFeatureFuncRela_FeatureCountByCodeEN,
  b: clsvFeatureFuncRela_FeatureCountByCodeEN,
): number {
  return a.funcId4Code.localeCompare(b.funcId4Code);
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
export function vFeatureFuncRela_FeatureCountByCode_SortFunDefa2Fld(
  a: clsvFeatureFuncRela_FeatureCountByCodeEN,
  b: clsvFeatureFuncRela_FeatureCountByCodeEN,
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
export function vFeatureFuncRela_FeatureCountByCode_SortFunByKey(
  strKey: string,
  AscOrDesc: string,
) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFeatureFuncRela_FeatureCountByCodeEN.con_FuncId4Code:
        return (
          a: clsvFeatureFuncRela_FeatureCountByCodeEN,
          b: clsvFeatureFuncRela_FeatureCountByCodeEN,
        ) => {
          return a.funcId4Code.localeCompare(b.funcId4Code);
        };
      case clsvFeatureFuncRela_FeatureCountByCodeEN.con_ApplicationTypeId:
        return (
          a: clsvFeatureFuncRela_FeatureCountByCodeEN,
          b: clsvFeatureFuncRela_FeatureCountByCodeEN,
        ) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsvFeatureFuncRela_FeatureCountByCodeEN.con_FeatureCount:
        return (
          a: clsvFeatureFuncRela_FeatureCountByCodeEN,
          b: clsvFeatureFuncRela_FeatureCountByCodeEN,
        ) => {
          return a.featureCount - b.featureCount;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFeatureFuncRela_FeatureCountByCode]中不存在!(in ${vFeatureFuncRela_FeatureCountByCode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFeatureFuncRela_FeatureCountByCodeEN.con_FuncId4Code:
        return (
          a: clsvFeatureFuncRela_FeatureCountByCodeEN,
          b: clsvFeatureFuncRela_FeatureCountByCodeEN,
        ) => {
          return b.funcId4Code.localeCompare(a.funcId4Code);
        };
      case clsvFeatureFuncRela_FeatureCountByCodeEN.con_ApplicationTypeId:
        return (
          a: clsvFeatureFuncRela_FeatureCountByCodeEN,
          b: clsvFeatureFuncRela_FeatureCountByCodeEN,
        ) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsvFeatureFuncRela_FeatureCountByCodeEN.con_FeatureCount:
        return (
          a: clsvFeatureFuncRela_FeatureCountByCodeEN,
          b: clsvFeatureFuncRela_FeatureCountByCodeEN,
        ) => {
          return b.featureCount - a.featureCount;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFeatureFuncRela_FeatureCountByCode]中不存在!(in ${vFeatureFuncRela_FeatureCountByCode_ConstructorName}.${strThisFuncName})`;
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
export async function vFeatureFuncRela_FeatureCountByCode_FilterFunByKey(
  strKey: string,
  value: any,
) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFeatureFuncRela_FeatureCountByCodeEN.con_FuncId4Code:
      return (obj: clsvFeatureFuncRela_FeatureCountByCodeEN) => {
        return obj.funcId4Code === value;
      };
    case clsvFeatureFuncRela_FeatureCountByCodeEN.con_ApplicationTypeId:
      return (obj: clsvFeatureFuncRela_FeatureCountByCodeEN) => {
        return obj.applicationTypeId === value;
      };
    case clsvFeatureFuncRela_FeatureCountByCodeEN.con_FeatureCount:
      return (obj: clsvFeatureFuncRela_FeatureCountByCodeEN) => {
        return obj.featureCount === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFeatureFuncRela_FeatureCountByCode]中不存在!(in ${vFeatureFuncRela_FeatureCountByCode_ConstructorName}.${strThisFuncName})`;
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
export async function vFeatureFuncRela_FeatureCountByCode_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  intApplicationTypeIdClassfy: number,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (intApplicationTypeIdClassfy == 0) {
    const strMsg = Format(
      '参数:[intApplicationTypeIdClassfy]不能为空!(In clsvFeatureFuncRela_FeatureCountByCodeWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvFeatureFuncRela_FeatureCountByCodeEN.con_FuncId4Code) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvFeatureFuncRela_FeatureCountByCode =
    await vFeatureFuncRela_FeatureCountByCode_GetObjLstCache(intApplicationTypeIdClassfy);
  if (arrvFeatureFuncRela_FeatureCountByCode == null) return [];
  let arrvFeatureFuncRela_FeatureCountByCodeSel = arrvFeatureFuncRela_FeatureCountByCode;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvFeatureFuncRela_FeatureCountByCodeSel =
            arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
              (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
            );
          break;
        case enumComparisonOp.Like_03:
          arrvFeatureFuncRela_FeatureCountByCodeSel =
            arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
              (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
            );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvFeatureFuncRela_FeatureCountByCodeSel =
            arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
            );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvFeatureFuncRela_FeatureCountByCodeSel =
          arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvFeatureFuncRela_FeatureCountByCodeSel =
            arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
              (x) => x.GetFldValue(strInFldName) == strInValue,
            );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvFeatureFuncRela_FeatureCountByCodeSel =
            arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
              (x) => x.GetFldValue(strInFldName) != strInValue,
            );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvFeatureFuncRela_FeatureCountByCodeSel =
            arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
              (x) => x.GetFldValue(strInFldName) >= strInValue,
            );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvFeatureFuncRela_FeatureCountByCodeSel =
            arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
              (x) => x.GetFldValue(strInFldName) <= strInValue,
            );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvFeatureFuncRela_FeatureCountByCodeSel =
            arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
              (x) => x.GetFldValue(strInFldName) > strInValue,
            );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvFeatureFuncRela_FeatureCountByCodeSel =
            arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
              (x) => x.GetFldValue(strInFldName) <= strInValue,
            );
          break;
      }
      break;
  }
  if (arrvFeatureFuncRela_FeatureCountByCodeSel.length == 0) return [];
  return arrvFeatureFuncRela_FeatureCountByCodeSel.map((x) => x.funcId4Code);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFeatureFuncRela_FeatureCountByCode_GetFirstIDAsync(
  strWhereCond: string,
): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByCode_Controller, strAction);

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
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByCode_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByCode_Controller, strAction);

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
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByCode_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFeatureFuncRela_FeatureCountByCodeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByCode_Controller, strAction);

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
      const objvFeatureFuncRela_FeatureCountByCode =
        vFeatureFuncRela_FeatureCountByCode_GetObjFromJsonObj(returnObj);
      return objvFeatureFuncRela_FeatureCountByCode;
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
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByCode_GetObjLstClientCache(
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFeatureFuncRela_FeatureCountByCodeEN.WhereFormat) == false) {
    strWhereCond = Format(
      clsvFeatureFuncRela_FeatureCountByCodeEN.WhereFormat,
      intApplicationTypeId,
    );
  } else {
    strWhereCond = Format("ApplicationTypeId='{0}'", intApplicationTypeId);
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFeatureFuncRela_FeatureCountByCodeEN._CurrTabName,
    intApplicationTypeId,
  );
  if (IsNullOrEmpty(clsvFeatureFuncRela_FeatureCountByCodeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFeatureFuncRela_FeatureCountByCodeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvFeatureFuncRela_FeatureCountByCodeExObjLstCache: Array<clsvFeatureFuncRela_FeatureCountByCodeEN> =
      CacheHelper.Get(strKey);
    const arrvFeatureFuncRela_FeatureCountByCodeObjLstT =
      vFeatureFuncRela_FeatureCountByCode_GetObjLstByJSONObjLst(
        arrvFeatureFuncRela_FeatureCountByCodeExObjLstCache,
      );
    return arrvFeatureFuncRela_FeatureCountByCodeObjLstT;
  }
  try {
    const arrvFeatureFuncRela_FeatureCountByCodeExObjLst =
      await vFeatureFuncRela_FeatureCountByCode_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvFeatureFuncRela_FeatureCountByCodeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFeatureFuncRela_FeatureCountByCodeExObjLst.length,
    );
    console.log(strInfo);
    return arrvFeatureFuncRela_FeatureCountByCodeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByCode_GetObjLstlocalStorage(
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFeatureFuncRela_FeatureCountByCodeEN.WhereFormat) == false) {
    strWhereCond = Format(
      clsvFeatureFuncRela_FeatureCountByCodeEN.WhereFormat,
      intApplicationTypeId,
    );
  } else {
    strWhereCond = Format(
      "{0}='{1}'",
      clsvFeatureFuncRela_FeatureCountByCodeEN.con_ApplicationTypeId,
      intApplicationTypeId,
    );
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFeatureFuncRela_FeatureCountByCodeEN._CurrTabName,
    intApplicationTypeId,
  );
  if (IsNullOrEmpty(clsvFeatureFuncRela_FeatureCountByCodeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFeatureFuncRela_FeatureCountByCodeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFeatureFuncRela_FeatureCountByCodeExObjLstCache: Array<clsvFeatureFuncRela_FeatureCountByCodeEN> =
      JSON.parse(strTempObjLst);
    const arrvFeatureFuncRela_FeatureCountByCodeObjLstT =
      vFeatureFuncRela_FeatureCountByCode_GetObjLstByJSONObjLst(
        arrvFeatureFuncRela_FeatureCountByCodeExObjLstCache,
      );
    return arrvFeatureFuncRela_FeatureCountByCodeObjLstT;
  }
  try {
    const arrvFeatureFuncRela_FeatureCountByCodeExObjLst =
      await vFeatureFuncRela_FeatureCountByCode_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvFeatureFuncRela_FeatureCountByCodeEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvFeatureFuncRela_FeatureCountByCodeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFeatureFuncRela_FeatureCountByCodeExObjLst.length,
    );
    console.log(strInfo);
    return arrvFeatureFuncRela_FeatureCountByCodeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByCode_GetObjLstlocalStoragePureCache(
  intApplicationTypeId: number,
) {
  //初始化列表缓存
  const strKey = Format(
    '{0}_{1}',
    clsvFeatureFuncRela_FeatureCountByCodeEN._CurrTabName,
    intApplicationTypeId,
  );
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFeatureFuncRela_FeatureCountByCodeObjLstCache: Array<clsvFeatureFuncRela_FeatureCountByCodeEN> =
      JSON.parse(strTempObjLst);
    return arrvFeatureFuncRela_FeatureCountByCodeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vFeatureFuncRela_FeatureCountByCode_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFeatureFuncRela_FeatureCountByCodeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByCode_Controller, strAction);

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
          vFeatureFuncRela_FeatureCountByCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureFuncRela_FeatureCountByCode_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByCode_GetObjLstsessionStorage(
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFeatureFuncRela_FeatureCountByCodeEN.WhereFormat) == false) {
    strWhereCond = Format(
      clsvFeatureFuncRela_FeatureCountByCodeEN.WhereFormat,
      intApplicationTypeId,
    );
  } else {
    strWhereCond = Format(
      "{0}='{1}'",
      clsvFeatureFuncRela_FeatureCountByCodeEN.con_ApplicationTypeId,
      intApplicationTypeId,
    );
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFeatureFuncRela_FeatureCountByCodeEN._CurrTabName,
    intApplicationTypeId,
  );
  if (IsNullOrEmpty(clsvFeatureFuncRela_FeatureCountByCodeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFeatureFuncRela_FeatureCountByCodeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFeatureFuncRela_FeatureCountByCodeExObjLstCache: Array<clsvFeatureFuncRela_FeatureCountByCodeEN> =
      JSON.parse(strTempObjLst);
    const arrvFeatureFuncRela_FeatureCountByCodeObjLstT =
      vFeatureFuncRela_FeatureCountByCode_GetObjLstByJSONObjLst(
        arrvFeatureFuncRela_FeatureCountByCodeExObjLstCache,
      );
    return arrvFeatureFuncRela_FeatureCountByCodeObjLstT;
  }
  try {
    const arrvFeatureFuncRela_FeatureCountByCodeExObjLst =
      await vFeatureFuncRela_FeatureCountByCode_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvFeatureFuncRela_FeatureCountByCodeEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvFeatureFuncRela_FeatureCountByCodeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFeatureFuncRela_FeatureCountByCodeExObjLst.length,
    );
    console.log(strInfo);
    return arrvFeatureFuncRela_FeatureCountByCodeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByCode_GetObjLstsessionStoragePureCache(
  intApplicationTypeId: number,
) {
  //初始化列表缓存
  const strKey = Format(
    '{0}_{1}',
    clsvFeatureFuncRela_FeatureCountByCodeEN._CurrTabName,
    intApplicationTypeId,
  );
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFeatureFuncRela_FeatureCountByCodeObjLstCache: Array<clsvFeatureFuncRela_FeatureCountByCodeEN> =
      JSON.parse(strTempObjLst);
    return arrvFeatureFuncRela_FeatureCountByCodeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFeatureFuncRela_FeatureCountByCode_GetObjLstCache(
  intApplicationTypeId: number,
): Promise<Array<clsvFeatureFuncRela_FeatureCountByCodeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (intApplicationTypeId == 0) {
    const strMsg = Format(
      '参数:[intApplicationTypeId]不能为空！(In clsvFeatureFuncRela_FeatureCountByCodeWApi.vFeatureFuncRela_FeatureCountByCode_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvFeatureFuncRela_FeatureCountByCodeObjLstCache;
  switch (clsvFeatureFuncRela_FeatureCountByCodeEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFeatureFuncRela_FeatureCountByCodeObjLstCache =
        await vFeatureFuncRela_FeatureCountByCode_GetObjLstsessionStorage(intApplicationTypeId);
      break;
    case '03': //localStorage
      arrvFeatureFuncRela_FeatureCountByCodeObjLstCache =
        await vFeatureFuncRela_FeatureCountByCode_GetObjLstlocalStorage(intApplicationTypeId);
      break;
    case '02': //ClientCache
      arrvFeatureFuncRela_FeatureCountByCodeObjLstCache =
        await vFeatureFuncRela_FeatureCountByCode_GetObjLstClientCache(intApplicationTypeId);
      break;
    default:
      arrvFeatureFuncRela_FeatureCountByCodeObjLstCache =
        await vFeatureFuncRela_FeatureCountByCode_GetObjLstClientCache(intApplicationTypeId);
      break;
  }
  return arrvFeatureFuncRela_FeatureCountByCodeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFeatureFuncRela_FeatureCountByCode_GetObjLstPureCache(
  intApplicationTypeId: number,
) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvFeatureFuncRela_FeatureCountByCodeObjLstCache;
  switch (clsvFeatureFuncRela_FeatureCountByCodeEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFeatureFuncRela_FeatureCountByCodeObjLstCache =
        await vFeatureFuncRela_FeatureCountByCode_GetObjLstsessionStoragePureCache(
          intApplicationTypeId,
        );
      break;
    case '03': //localStorage
      arrvFeatureFuncRela_FeatureCountByCodeObjLstCache =
        await vFeatureFuncRela_FeatureCountByCode_GetObjLstlocalStoragePureCache(
          intApplicationTypeId,
        );
      break;
    case '02': //ClientCache
      arrvFeatureFuncRela_FeatureCountByCodeObjLstCache = null;
      break;
    default:
      arrvFeatureFuncRela_FeatureCountByCodeObjLstCache = null;
      break;
  }
  return arrvFeatureFuncRela_FeatureCountByCodeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFuncId4CodeCond:条件对象
 * @returns 对象列表子集
 */
export async function vFeatureFuncRela_FeatureCountByCode_GetSubObjLstCache(
  objvFeatureFuncRela_FeatureCountByCodeCond: clsvFeatureFuncRela_FeatureCountByCodeEN,
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvFeatureFuncRela_FeatureCountByCodeObjLstCache =
    await vFeatureFuncRela_FeatureCountByCode_GetObjLstCache(intApplicationTypeId);
  let arrvFeatureFuncRela_FeatureCountByCodeSel = arrvFeatureFuncRela_FeatureCountByCodeObjLstCache;
  if (
    objvFeatureFuncRela_FeatureCountByCodeCond.sfFldComparisonOp == null ||
    objvFeatureFuncRela_FeatureCountByCodeCond.sfFldComparisonOp == ''
  )
    return arrvFeatureFuncRela_FeatureCountByCodeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFeatureFuncRela_FeatureCountByCodeCond.sfFldComparisonOp,
  );
  //console.log("clsvFeatureFuncRela_FeatureCountByCodeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFeatureFuncRela_FeatureCountByCodeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFeatureFuncRela_FeatureCountByCodeSel = arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureFuncRela_FeatureCountByCodeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
              );
          } else if (strComparisonOp == 'like') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
              );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
              );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          } else if (strComparisonOp == '>=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) >= strValue,
              );
          } else if (strComparisonOp == '<=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          } else if (strComparisonOp == '>') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) > strValue,
              );
          } else if (strComparisonOp == '<') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          }
          break;
      }
    }
    return arrvFeatureFuncRela_FeatureCountByCodeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFeatureFuncRela_FeatureCountByCodeCond),
      vFeatureFuncRela_FeatureCountByCode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFeatureFuncRela_FeatureCountByCodeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFuncId4Code:关键字列表
 * @returns 对象列表
 **/
export async function vFeatureFuncRela_FeatureCountByCode_GetObjLstByFuncId4CodeLstAsync(
  arrFuncId4Code: Array<string>,
): Promise<Array<clsvFeatureFuncRela_FeatureCountByCodeEN>> {
  const strThisFuncName = 'GetObjLstByFuncId4CodeLstAsync';
  const strAction = 'GetObjLstByFuncId4CodeLst';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByCode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncId4Code, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vFeatureFuncRela_FeatureCountByCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureFuncRela_FeatureCountByCode_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
 * @param arrstrFuncId4CodeLst:关键字列表
 * @returns 对象列表
 */
export async function vFeatureFuncRela_FeatureCountByCode_GetObjLstByFuncId4CodeLstCache(
  arrFuncId4CodeLst: Array<string>,
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'GetObjLstByFuncId4CodeLstCache';
  try {
    const arrvFeatureFuncRela_FeatureCountByCodeObjLstCache =
      await vFeatureFuncRela_FeatureCountByCode_GetObjLstCache(intApplicationTypeId);
    const arrvFeatureFuncRela_FeatureCountByCodeSel =
      arrvFeatureFuncRela_FeatureCountByCodeObjLstCache.filter(
        (x) => arrFuncId4CodeLst.indexOf(x.funcId4Code) > -1,
      );
    return arrvFeatureFuncRela_FeatureCountByCodeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFuncId4CodeLst.join(','),
      vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByCode_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFeatureFuncRela_FeatureCountByCodeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByCode_Controller, strAction);

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
          vFeatureFuncRela_FeatureCountByCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureFuncRela_FeatureCountByCode_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByCode_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFeatureFuncRela_FeatureCountByCodeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByCode_Controller, strAction);

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
          vFeatureFuncRela_FeatureCountByCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureFuncRela_FeatureCountByCode_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByCode_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFeatureFuncRela_FeatureCountByCodeEN>();
  const arrvFeatureFuncRela_FeatureCountByCodeObjLstCache =
    await vFeatureFuncRela_FeatureCountByCode_GetObjLstCache(intApplicationTypeId);
  if (arrvFeatureFuncRela_FeatureCountByCodeObjLstCache.length == 0)
    return arrvFeatureFuncRela_FeatureCountByCodeObjLstCache;
  let arrvFeatureFuncRela_FeatureCountByCodeSel = arrvFeatureFuncRela_FeatureCountByCodeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvFeatureFuncRela_FeatureCountByCodeCond = new clsvFeatureFuncRela_FeatureCountByCodeEN();
  ObjectAssign(objvFeatureFuncRela_FeatureCountByCodeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvFeatureFuncRela_FeatureCountByCodeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFeatureFuncRela_FeatureCountByCodeSel = arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureFuncRela_FeatureCountByCodeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
              );
          } else if (strComparisonOp == 'like') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
              );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
              );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          } else if (strComparisonOp == '>=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) >= strValue,
              );
          } else if (strComparisonOp == '<=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          } else if (strComparisonOp == '>') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) > strValue,
              );
          } else if (strComparisonOp == '<') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          }
          break;
      }
    }
    if (arrvFeatureFuncRela_FeatureCountByCodeSel.length == 0)
      return arrvFeatureFuncRela_FeatureCountByCodeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvFeatureFuncRela_FeatureCountByCodeSel = arrvFeatureFuncRela_FeatureCountByCodeSel.sort(
        vFeatureFuncRela_FeatureCountByCode_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvFeatureFuncRela_FeatureCountByCodeSel = arrvFeatureFuncRela_FeatureCountByCodeSel.sort(
        objPagerPara.sortFun,
      );
    }
    arrvFeatureFuncRela_FeatureCountByCodeSel = arrvFeatureFuncRela_FeatureCountByCodeSel.slice(
      intStart,
      intEnd,
    );
    return arrvFeatureFuncRela_FeatureCountByCodeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vFeatureFuncRela_FeatureCountByCode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFeatureFuncRela_FeatureCountByCodeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vFeatureFuncRela_FeatureCountByCode_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFeatureFuncRela_FeatureCountByCodeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFeatureFuncRela_FeatureCountByCodeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByCode_Controller, strAction);

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
          vFeatureFuncRela_FeatureCountByCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureFuncRela_FeatureCountByCode_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
 * @param objstrFuncId4CodeCond:条件对象
 * @returns 对象列表子集
 */
export async function vFeatureFuncRela_FeatureCountByCode_IsExistRecordCache(
  objvFeatureFuncRela_FeatureCountByCodeCond: clsvFeatureFuncRela_FeatureCountByCodeEN,
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvFeatureFuncRela_FeatureCountByCodeObjLstCache =
    await vFeatureFuncRela_FeatureCountByCode_GetObjLstCache(intApplicationTypeId);
  if (arrvFeatureFuncRela_FeatureCountByCodeObjLstCache == null) return false;
  let arrvFeatureFuncRela_FeatureCountByCodeSel = arrvFeatureFuncRela_FeatureCountByCodeObjLstCache;
  if (
    objvFeatureFuncRela_FeatureCountByCodeCond.sfFldComparisonOp == null ||
    objvFeatureFuncRela_FeatureCountByCodeCond.sfFldComparisonOp == ''
  )
    return arrvFeatureFuncRela_FeatureCountByCodeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFeatureFuncRela_FeatureCountByCodeCond.sfFldComparisonOp,
  );
  //console.log("clsvFeatureFuncRela_FeatureCountByCodeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFeatureFuncRela_FeatureCountByCodeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureFuncRela_FeatureCountByCodeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
              );
          } else if (strComparisonOp == 'like') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
              );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
              );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          } else if (strComparisonOp == '>=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) >= strValue,
              );
          } else if (strComparisonOp == '<=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          } else if (strComparisonOp == '>') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) > strValue,
              );
          } else if (strComparisonOp == '<') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          }
          break;
      }
    }
    if (arrvFeatureFuncRela_FeatureCountByCodeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvFeatureFuncRela_FeatureCountByCodeCond),
      vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByCode_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByCode_Controller, strAction);

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
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
 * @param strFuncId4Code:所给的关键字
 * @returns 对象
 */
export async function vFeatureFuncRela_FeatureCountByCode_IsExistCache(
  strFuncId4Code: string,
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'IsExistCache';
  const arrvFeatureFuncRela_FeatureCountByCodeObjLstCache =
    await vFeatureFuncRela_FeatureCountByCode_GetObjLstCache(intApplicationTypeId);
  if (arrvFeatureFuncRela_FeatureCountByCodeObjLstCache == null) return false;
  try {
    const arrvFeatureFuncRela_FeatureCountByCodeSel =
      arrvFeatureFuncRela_FeatureCountByCodeObjLstCache.filter(
        (x) => x.funcId4Code == strFuncId4Code,
      );
    if (arrvFeatureFuncRela_FeatureCountByCodeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFuncId4Code,
      vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
 * @param strFuncId4Code:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vFeatureFuncRela_FeatureCountByCode_IsExistAsync(
  strFuncId4Code: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByCode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncId4Code,
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
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
export async function vFeatureFuncRela_FeatureCountByCode_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFeatureFuncRela_FeatureCountByCode_Controller, strAction);

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
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
 * @param objvFeatureFuncRela_FeatureCountByCodeCond:条件对象
 * @returns 对象列表记录数
 */
export async function vFeatureFuncRela_FeatureCountByCode_GetRecCountByCondCache(
  objvFeatureFuncRela_FeatureCountByCodeCond: clsvFeatureFuncRela_FeatureCountByCodeEN,
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvFeatureFuncRela_FeatureCountByCodeObjLstCache =
    await vFeatureFuncRela_FeatureCountByCode_GetObjLstCache(intApplicationTypeId);
  if (arrvFeatureFuncRela_FeatureCountByCodeObjLstCache == null) return 0;
  let arrvFeatureFuncRela_FeatureCountByCodeSel = arrvFeatureFuncRela_FeatureCountByCodeObjLstCache;
  if (
    objvFeatureFuncRela_FeatureCountByCodeCond.sfFldComparisonOp == null ||
    objvFeatureFuncRela_FeatureCountByCodeCond.sfFldComparisonOp == ''
  )
    return arrvFeatureFuncRela_FeatureCountByCodeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFeatureFuncRela_FeatureCountByCodeCond.sfFldComparisonOp,
  );
  //console.log("clsvFeatureFuncRela_FeatureCountByCodeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFeatureFuncRela_FeatureCountByCodeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFeatureFuncRela_FeatureCountByCodeSel = arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureFuncRela_FeatureCountByCodeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
              );
          } else if (strComparisonOp == 'like') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
              );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
              );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
              );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) == strValue,
              );
          } else if (strComparisonOp == '>=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) >= strValue,
              );
          } else if (strComparisonOp == '<=') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          } else if (strComparisonOp == '>') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) > strValue,
              );
          } else if (strComparisonOp == '<') {
            arrvFeatureFuncRela_FeatureCountByCodeSel =
              arrvFeatureFuncRela_FeatureCountByCodeSel.filter(
                (x) => x.GetFldValue(strKey) <= strValue,
              );
          }
          break;
      }
    }
    return arrvFeatureFuncRela_FeatureCountByCodeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFeatureFuncRela_FeatureCountByCodeCond),
      vFeatureFuncRela_FeatureCountByCode_ConstructorName,
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
export function vFeatureFuncRela_FeatureCountByCode_GetWebApiUrl(
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
export function vFeatureFuncRela_FeatureCountByCode_ReFreshThisCache(
  intApplicationTypeId: number,
): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format(
      '{0}_{1}',
      clsvFeatureFuncRela_FeatureCountByCodeEN._CurrTabName,
      intApplicationTypeId,
    );
    switch (clsvFeatureFuncRela_FeatureCountByCodeEN.CacheModeId) {
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
export function vFeatureFuncRela_FeatureCountByCode_GetJSONStrByObj(
  pobjvFeatureFuncRela_FeatureCountByCodeEN: clsvFeatureFuncRela_FeatureCountByCodeEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFeatureFuncRela_FeatureCountByCodeEN);
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
export function vFeatureFuncRela_FeatureCountByCode_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvFeatureFuncRela_FeatureCountByCodeEN> {
  let arrvFeatureFuncRela_FeatureCountByCodeObjLst =
    new Array<clsvFeatureFuncRela_FeatureCountByCodeEN>();
  if (strJSON === '') {
    return arrvFeatureFuncRela_FeatureCountByCodeObjLst;
  }
  try {
    arrvFeatureFuncRela_FeatureCountByCodeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFeatureFuncRela_FeatureCountByCodeObjLst;
  }
  return arrvFeatureFuncRela_FeatureCountByCodeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFeatureFuncRela_FeatureCountByCodeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFeatureFuncRela_FeatureCountByCode_GetObjLstByJSONObjLst(
  arrvFeatureFuncRela_FeatureCountByCodeObjLstS: Array<clsvFeatureFuncRela_FeatureCountByCodeEN>,
): Array<clsvFeatureFuncRela_FeatureCountByCodeEN> {
  const arrvFeatureFuncRela_FeatureCountByCodeObjLst =
    new Array<clsvFeatureFuncRela_FeatureCountByCodeEN>();
  for (const objInFor of arrvFeatureFuncRela_FeatureCountByCodeObjLstS) {
    const obj1 = vFeatureFuncRela_FeatureCountByCode_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFeatureFuncRela_FeatureCountByCodeObjLst.push(obj1);
  }
  return arrvFeatureFuncRela_FeatureCountByCodeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-07-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFeatureFuncRela_FeatureCountByCode_GetObjByJSONStr(
  strJSON: string,
): clsvFeatureFuncRela_FeatureCountByCodeEN {
  let pobjvFeatureFuncRela_FeatureCountByCodeEN = new clsvFeatureFuncRela_FeatureCountByCodeEN();
  if (strJSON === '') {
    return pobjvFeatureFuncRela_FeatureCountByCodeEN;
  }
  try {
    pobjvFeatureFuncRela_FeatureCountByCodeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFeatureFuncRela_FeatureCountByCodeEN;
  }
  return pobjvFeatureFuncRela_FeatureCountByCodeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFeatureFuncRela_FeatureCountByCode_GetCombineCondition(
  objvFeatureFuncRela_FeatureCountByCodeCond: clsvFeatureFuncRela_FeatureCountByCodeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureFuncRela_FeatureCountByCodeCond.dicFldComparisonOp,
      clsvFeatureFuncRela_FeatureCountByCodeEN.con_FuncId4Code,
    ) == true
  ) {
    const strComparisonOpFuncId4Code: string =
      objvFeatureFuncRela_FeatureCountByCodeCond.dicFldComparisonOp[
        clsvFeatureFuncRela_FeatureCountByCodeEN.con_FuncId4Code
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureFuncRela_FeatureCountByCodeEN.con_FuncId4Code,
      objvFeatureFuncRela_FeatureCountByCodeCond.funcId4Code,
      strComparisonOpFuncId4Code,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureFuncRela_FeatureCountByCodeCond.dicFldComparisonOp,
      clsvFeatureFuncRela_FeatureCountByCodeEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objvFeatureFuncRela_FeatureCountByCodeCond.dicFldComparisonOp[
        clsvFeatureFuncRela_FeatureCountByCodeEN.con_ApplicationTypeId
      ];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFeatureFuncRela_FeatureCountByCodeEN.con_ApplicationTypeId,
      objvFeatureFuncRela_FeatureCountByCodeCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureFuncRela_FeatureCountByCodeCond.dicFldComparisonOp,
      clsvFeatureFuncRela_FeatureCountByCodeEN.con_FeatureCount,
    ) == true
  ) {
    const strComparisonOpFeatureCount: string =
      objvFeatureFuncRela_FeatureCountByCodeCond.dicFldComparisonOp[
        clsvFeatureFuncRela_FeatureCountByCodeEN.con_FeatureCount
      ];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFeatureFuncRela_FeatureCountByCodeEN.con_FeatureCount,
      objvFeatureFuncRela_FeatureCountByCodeCond.featureCount,
      strComparisonOpFeatureCount,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFeatureFuncRela_FeatureCountByCodeENS:源对象
 * @param objvFeatureFuncRela_FeatureCountByCodeENT:目标对象
 */
export function vFeatureFuncRela_FeatureCountByCode_GetObjFromJsonObj(
  objvFeatureFuncRela_FeatureCountByCodeENS: clsvFeatureFuncRela_FeatureCountByCodeEN,
): clsvFeatureFuncRela_FeatureCountByCodeEN {
  const objvFeatureFuncRela_FeatureCountByCodeENT: clsvFeatureFuncRela_FeatureCountByCodeEN =
    new clsvFeatureFuncRela_FeatureCountByCodeEN();
  ObjectAssign(
    objvFeatureFuncRela_FeatureCountByCodeENT,
    objvFeatureFuncRela_FeatureCountByCodeENS,
  );
  return objvFeatureFuncRela_FeatureCountByCodeENT;
}
