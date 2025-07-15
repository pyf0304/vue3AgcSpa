/**
 * 类名:clsvFunctionTemplateRelaSimWApi
 * 表名:vFunctionTemplateRela_Sim(00050604)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:22:30
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
 * v函数模板关系_Sim(vFunctionTemplateRelaSim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年06月08日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvFunctionTemplateRelaSimEN } from '@/ts/L0Entity/PrjFunction/clsvFunctionTemplateRelaSimEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vFunctionTemplateRelaSimController = 'vFunctionTemplateRelaSimApi';
export const vFunctionTemplateRelaSimConstructorName = 'vFunctionTemplateRelaSim';

/**
 * 把多关键字值分解为单独关键字的值，并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export function vFunctionTemplateRelaSimSplitKeyLst(strKeyLst: string) {
  const arrKey = strKeyLst.split('|');
  if (arrKey.length != 2) {
    const strMsg = '请选择需要修改的记录！';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  const objKeyLst = {
    functionTemplateId: arrKey[0],
    funcId4GC: arrKey[1],
  };
  if (IsNullOrEmpty(objKeyLst.functionTemplateId) == true) {
    const strMsg = '关键字段(functionTemplateId)值不能为空！';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(objKeyLst.funcId4GC) == true) {
    const strMsg = '关键字段(funcId4GC)值不能为空！';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  return objKeyLst;
}
/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFunctionTemplateId:关键字
 * @returns 对象
 **/
export async function vFunctionTemplateRelaSimGetObjByKeyLstAsync(
  strFunctionTemplateId: string,
  strFuncId4GC: string,
): Promise<clsvFunctionTemplateRelaSimEN | null> {
  const strThisFuncName = 'GetObjByKeyLstAsync';

  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    const strMsg = Format(
      '参数:[strFunctionTemplateId]不能为空！(In clsvFunctionTemplateRelaSimWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateId]的长度:[{0}]不正确！(clsvFunctionTemplateRelaSimWApi.GetObjByKeyLstAsync)',
      strFunctionTemplateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空！(In clsvFunctionTemplateRelaSimWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确！(clsvFunctionTemplateRelaSimWApi.GetObjByKeyLstAsync)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyLst';
  const strUrl = GetWebApiUrl(vFunctionTemplateRelaSimController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFunctionTemplateId,
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
      const objvFunctionTemplateRelaSim = vFunctionTemplateRelaSimGetObjFromJsonObj(returnObj);
      return objvFunctionTemplateRelaSim;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
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
 * @param strFunctionTemplateId:所给的关键字
 * @returns 对象
 */
export async function vFunctionTemplateRelaSimGetObjByKeyLstCache(
  strFunctionTemplateId: string,
  strFuncId4GC: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByKeyLstCache';

  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    const strMsg = Format(
      '参数:[strFunctionTemplateId]不能为空！(In clsvFunctionTemplateRelaSimWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateId]的长度:[{0}]不正确！(clsvFunctionTemplateRelaSimWApi.GetObjByKeyLstCache)',
      strFunctionTemplateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空！(In clsvFunctionTemplateRelaSimWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确！(clsvFunctionTemplateRelaSimWApi.GetObjByKeyLstCache)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFunctionTemplateRelaSimObjLstCache = await vFunctionTemplateRelaSimGetObjLstCache(
    strFunctionTemplateId,
  );
  try {
    const arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimObjLstCache.filter(
      (x) => x.functionTemplateId == strFunctionTemplateId && x.funcId4GC == strFuncId4GC,
    );
    let objvFunctionTemplateRelaSim: clsvFunctionTemplateRelaSimEN;
    if (arrvFunctionTemplateRelaSimSel.length > 0) {
      objvFunctionTemplateRelaSim = arrvFunctionTemplateRelaSimSel[0];
      return objvFunctionTemplateRelaSim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvFunctionTemplateRelaSimConst = await vFunctionTemplateRelaSimGetObjByKeyLstAsync(
          strFunctionTemplateId,
          strFuncId4GC,
        );
        if (objvFunctionTemplateRelaSimConst != null) {
          vFunctionTemplateRelaSimReFreshThisCache(strFunctionTemplateId);
          return objvFunctionTemplateRelaSimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFunctionTemplateId,
      vFunctionTemplateRelaSimConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strFunctionTemplateId:所给的关键字
 * @returns 对象
 */
export async function vFunctionTemplateRelaSimGetObjByKeyLstlocalStorage(
  strFunctionTemplateId: string,
  strFuncId4GC: string,
) {
  const strThisFuncName = 'GetObjByKeyLstlocalStorage';

  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    const strMsg = Format(
      '参数:[strFunctionTemplateId]不能为空！(In clsvFunctionTemplateRelaSimWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateId]的长度:[{0}]不正确！(clsvFunctionTemplateRelaSimWApi.GetObjByKeyLstlocalStorage)',
      strFunctionTemplateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strFuncId4GC) == true) {
    const strMsg = Format(
      '参数:[strFuncId4GC]不能为空！(In clsvFunctionTemplateRelaSimWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncId4GC.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strFuncId4GC]的长度:[{0}]不正确！(clsvFunctionTemplateRelaSimWApi.GetObjByKeyLstlocalStorage)',
      strFuncId4GC.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFunctionTemplateRelaSimEN._CurrTabName,
    strFunctionTemplateId,
  );
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvFunctionTemplateRelaSimCache: clsvFunctionTemplateRelaSimEN = JSON.parse(strTempObj);
    return objvFunctionTemplateRelaSimCache;
  }
  try {
    const objvFunctionTemplateRelaSim = await vFunctionTemplateRelaSimGetObjByKeyLstAsync(
      strFunctionTemplateId,
      strFuncId4GC,
    );
    if (objvFunctionTemplateRelaSim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvFunctionTemplateRelaSim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvFunctionTemplateRelaSim;
    }
    return objvFunctionTemplateRelaSim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFunctionTemplateId,
      vFunctionTemplateRelaSimConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}
/*该表没有名称字段，不能生成此函数！*/

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function vFunctionTemplateRelaSimfunc(
  strInFldName1: string,
  strInFldName2: string,
  strOutFldName: string,
  strInValue1: string,
  strInValue2: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName1 != clsvFunctionTemplateRelaSimEN.con_FunctionTemplateId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName1);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName2 != clsvFunctionTemplateRelaSimEN.conFuncId4GC) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName2);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFunctionTemplateRelaSimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strOutFldName,
      clsvFunctionTemplateRelaSimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFunctionTemplateId = strInValue1;
  if (IsNullOrEmpty(strInValue1) == true) {
    return '';
  }
  const strFuncId4GC = strInValue2;
  if (IsNullOrEmpty(strInValue2) == true) {
    return '';
  }
  const objvFunctionTemplateRelaSim = await vFunctionTemplateRelaSimGetObjByKeyLstCache(
    strFunctionTemplateId,
    strFuncId4GC,
  );
  if (objvFunctionTemplateRelaSim == null) return '';
  if (objvFunctionTemplateRelaSim.GetFldValue(strOutFldName) == null) return '';
  return objvFunctionTemplateRelaSim.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunctionTemplateRelaSimSortFunDefa(
  a: clsvFunctionTemplateRelaSimEN,
  b: clsvFunctionTemplateRelaSimEN,
): number {
  return a.functionTemplateId.localeCompare(b.functionTemplateId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunctionTemplateRelaSimSortFunDefa2Fld(
  a: clsvFunctionTemplateRelaSimEN,
  b: clsvFunctionTemplateRelaSimEN,
): number {
  if (a.codeTypeId == b.codeTypeId) return a.regionTypeId.localeCompare(b.regionTypeId);
  else return a.codeTypeId.localeCompare(b.codeTypeId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFunctionTemplateRelaSimSortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFunctionTemplateRelaSimEN.con_FunctionTemplateId:
        return (a: clsvFunctionTemplateRelaSimEN, b: clsvFunctionTemplateRelaSimEN) => {
          return a.functionTemplateId.localeCompare(b.functionTemplateId);
        };
      case clsvFunctionTemplateRelaSimEN.conFuncId4GC:
        return (a: clsvFunctionTemplateRelaSimEN, b: clsvFunctionTemplateRelaSimEN) => {
          return a.funcId4GC.localeCompare(b.funcId4GC);
        };
      case clsvFunctionTemplateRelaSimEN.con_CodeTypeId:
        return (a: clsvFunctionTemplateRelaSimEN, b: clsvFunctionTemplateRelaSimEN) => {
          if (a.codeTypeId == null) return -1;
          if (b.codeTypeId == null) return 1;
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsvFunctionTemplateRelaSimEN.conRegionTypeId:
        return (a: clsvFunctionTemplateRelaSimEN, b: clsvFunctionTemplateRelaSimEN) => {
          if (a.regionTypeId == null) return -1;
          if (b.regionTypeId == null) return 1;
          return a.regionTypeId.localeCompare(b.regionTypeId);
        };
      case clsvFunctionTemplateRelaSimEN.conIsGeneCode:
        return (a: clsvFunctionTemplateRelaSimEN) => {
          if (a.isGeneCode == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFunctionTemplateRelaSim]中不存在！(in ${vFunctionTemplateRelaSimConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFunctionTemplateRelaSimEN.con_FunctionTemplateId:
        return (a: clsvFunctionTemplateRelaSimEN, b: clsvFunctionTemplateRelaSimEN) => {
          return b.functionTemplateId.localeCompare(a.functionTemplateId);
        };
      case clsvFunctionTemplateRelaSimEN.conFuncId4GC:
        return (a: clsvFunctionTemplateRelaSimEN, b: clsvFunctionTemplateRelaSimEN) => {
          return b.funcId4GC.localeCompare(a.funcId4GC);
        };
      case clsvFunctionTemplateRelaSimEN.con_CodeTypeId:
        return (a: clsvFunctionTemplateRelaSimEN, b: clsvFunctionTemplateRelaSimEN) => {
          if (b.codeTypeId == null) return -1;
          if (a.codeTypeId == null) return 1;
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsvFunctionTemplateRelaSimEN.conRegionTypeId:
        return (a: clsvFunctionTemplateRelaSimEN, b: clsvFunctionTemplateRelaSimEN) => {
          if (b.regionTypeId == null) return -1;
          if (a.regionTypeId == null) return 1;
          return b.regionTypeId.localeCompare(a.regionTypeId);
        };
      case clsvFunctionTemplateRelaSimEN.conIsGeneCode:
        return (b: clsvFunctionTemplateRelaSimEN) => {
          if (b.isGeneCode == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFunctionTemplateRelaSim]中不存在！(in ${vFunctionTemplateRelaSimConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vFunctionTemplateRelaSimFilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFunctionTemplateRelaSimEN.con_FunctionTemplateId:
      return (obj: clsvFunctionTemplateRelaSimEN) => {
        return obj.functionTemplateId === value;
      };
    case clsvFunctionTemplateRelaSimEN.conFuncId4GC:
      return (obj: clsvFunctionTemplateRelaSimEN) => {
        return obj.funcId4GC === value;
      };
    case clsvFunctionTemplateRelaSimEN.con_CodeTypeId:
      return (obj: clsvFunctionTemplateRelaSimEN) => {
        return obj.codeTypeId === value;
      };
    case clsvFunctionTemplateRelaSimEN.conRegionTypeId:
      return (obj: clsvFunctionTemplateRelaSimEN) => {
        return obj.regionTypeId === value;
      };
    case clsvFunctionTemplateRelaSimEN.conIsGeneCode:
      return (obj: clsvFunctionTemplateRelaSimEN) => {
        return obj.isGeneCode === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFunctionTemplateRelaSim]中不存在！(in ${vFunctionTemplateRelaSimConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strFunctionTemplateId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vFunctionTemplateRelaSimfuncKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strFunctionTemplateIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strFunctionTemplateIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strFunctionTemplateIdClassfy]不能为空！(In clsvFunctionTemplateRelaSimWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateIdClassfy]的长度:[{0}]不正确！(clsvFunctionTemplateRelaSimWApi.funcKey)',
      strFunctionTemplateIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvFunctionTemplateRelaSimEN.con_FunctionTemplateId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName == clsvFunctionTemplateRelaSimEN.conFuncId4GC) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvFunctionTemplateRelaSim = await vFunctionTemplateRelaSimGetObjLstCache(
    strFunctionTemplateIdClassfy,
  );
  if (arrvFunctionTemplateRelaSim == null) return [];
  let arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvFunctionTemplateRelaSimSel.length == 0) return [];
  return arrvFunctionTemplateRelaSim.map((x) => `${x.functionTemplateId}|${x.funcId4GC}`);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFunctionTemplateRelaSimGetFirstIDAsync(
  strWhereCond: string,
): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFunctionTemplateRelaSimController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
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
export async function vFunctionTemplateRelaSimGetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFunctionTemplateRelaSimController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
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
export async function vFunctionTemplateRelaSimGetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFunctionTemplateRelaSimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFunctionTemplateRelaSimController, strAction);
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
      const objvFunctionTemplateRelaSim = vFunctionTemplateRelaSimGetObjFromJsonObj(returnObj);
      return objvFunctionTemplateRelaSim;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
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
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFunctionTemplateRelaSimGetObjLstClientCache(strFunctionTemplateId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFunctionTemplateRelaSimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvFunctionTemplateRelaSimEN.WhereFormat, strFunctionTemplateId);
  } else {
    strWhereCond = Format("FunctionTemplateId='{0}'", strFunctionTemplateId);
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFunctionTemplateRelaSimEN._CurrTabName,
    strFunctionTemplateId,
  );
  if (IsNullOrEmpty(clsvFunctionTemplateRelaSimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFunctionTemplateRelaSimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrvFunctionTemplateRelaSimExObjLstCache: Array<clsvFunctionTemplateRelaSimEN> =
      CacheHelper.Get(strKey);
    const arrvFunctionTemplateRelaSimObjLstT = vFunctionTemplateRelaSimGetObjLstByJSONObjLst(
      arrvFunctionTemplateRelaSimExObjLstCache,
    );
    return arrvFunctionTemplateRelaSimObjLstT;
  }
  try {
    const arrvFunctionTemplateRelaSimExObjLst = await vFunctionTemplateRelaSimGetObjLstAsync(
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrvFunctionTemplateRelaSimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvFunctionTemplateRelaSimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFunctionTemplateRelaSimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFunctionTemplateRelaSimConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFunctionTemplateRelaSimGetObjLstlocalStorage(strFunctionTemplateId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFunctionTemplateRelaSimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvFunctionTemplateRelaSimEN.WhereFormat, strFunctionTemplateId);
  } else {
    strWhereCond = Format("FunctionTemplateId='{0}'", strFunctionTemplateId);
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFunctionTemplateRelaSimEN._CurrTabName,
    strFunctionTemplateId,
  );
  if (IsNullOrEmpty(clsvFunctionTemplateRelaSimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFunctionTemplateRelaSimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFunctionTemplateRelaSimExObjLstCache: Array<clsvFunctionTemplateRelaSimEN> =
      JSON.parse(strTempObjLst);
    const arrvFunctionTemplateRelaSimObjLstT = vFunctionTemplateRelaSimGetObjLstByJSONObjLst(
      arrvFunctionTemplateRelaSimExObjLstCache,
    );
    return arrvFunctionTemplateRelaSimObjLstT;
  }
  try {
    const arrvFunctionTemplateRelaSimExObjLst = await vFunctionTemplateRelaSimGetObjLstAsync(
      strWhereCond,
    );
    localStorage.setItem(strKey, JSON.stringify(arrvFunctionTemplateRelaSimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvFunctionTemplateRelaSimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFunctionTemplateRelaSimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFunctionTemplateRelaSimConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.如果本地不存在就返回null，不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFunctionTemplateRelaSimGetObjLstlocalStoragePureCache(
  strFunctionTemplateId: string,
) {
  //初始化列表缓存
  const strKey = Format(
    '{0}_{1}',
    clsvFunctionTemplateRelaSimEN._CurrTabName,
    strFunctionTemplateId,
  );
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFunctionTemplateRelaSimObjLstCache: Array<clsvFunctionTemplateRelaSimEN> =
      JSON.parse(strTempObjLst);
    return arrvFunctionTemplateRelaSimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vFunctionTemplateRelaSimGetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFunctionTemplateRelaSimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFunctionTemplateRelaSimController, strAction);
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
          vFunctionTemplateRelaSimConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunctionTemplateRelaSimGetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
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
 * 获取本地sessionStorage缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFunctionTemplateRelaSimGetObjLstsessionStorage(
  strFunctionTemplateId: string,
) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFunctionTemplateRelaSimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvFunctionTemplateRelaSimEN.WhereFormat, strFunctionTemplateId);
  } else {
    strWhereCond = Format("FunctionTemplateId='{0}'", strFunctionTemplateId);
  }
  const strKey = Format(
    '{0}_{1}',
    clsvFunctionTemplateRelaSimEN._CurrTabName,
    strFunctionTemplateId,
  );
  if (IsNullOrEmpty(clsvFunctionTemplateRelaSimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFunctionTemplateRelaSimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFunctionTemplateRelaSimExObjLstCache: Array<clsvFunctionTemplateRelaSimEN> =
      JSON.parse(strTempObjLst);
    const arrvFunctionTemplateRelaSimObjLstT = vFunctionTemplateRelaSimGetObjLstByJSONObjLst(
      arrvFunctionTemplateRelaSimExObjLstCache,
    );
    return arrvFunctionTemplateRelaSimObjLstT;
  }
  try {
    const arrvFunctionTemplateRelaSimExObjLst = await vFunctionTemplateRelaSimGetObjLstAsync(
      strWhereCond,
    );
    sessionStorage.setItem(strKey, JSON.stringify(arrvFunctionTemplateRelaSimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvFunctionTemplateRelaSimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFunctionTemplateRelaSimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFunctionTemplateRelaSimConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFunctionTemplateRelaSimGetObjLstsessionStoragePureCache(
  strFunctionTemplateId: string,
) {
  //初始化列表缓存
  const strKey = Format(
    '{0}_{1}',
    clsvFunctionTemplateRelaSimEN._CurrTabName,
    strFunctionTemplateId,
  );
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFunctionTemplateRelaSimObjLstCache: Array<clsvFunctionTemplateRelaSimEN> =
      JSON.parse(strTempObjLst);
    return arrvFunctionTemplateRelaSimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFunctionTemplateRelaSimGetObjLstCache(
  strFunctionTemplateId: string,
): Promise<Array<clsvFunctionTemplateRelaSimEN>> {
  //const strThisFuncName = "GetObjLstCache";

  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    const strMsg = Format(
      '缓存分类变量:[FunctionTemplateId]不能为空！(in clsvFunctionTemplateRelaSimWApi.vFunctionTemplateRelaSimGetObjLstCache() )',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateId]的长度:[{0}]不正确！(in clsvFunctionTemplateRelaSimWApi.vFunctionTemplateRelaSimGetObjLstCache() )',
      strFunctionTemplateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvFunctionTemplateRelaSimObjLstCache;
  switch (clsvFunctionTemplateRelaSimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFunctionTemplateRelaSimObjLstCache =
        await vFunctionTemplateRelaSimGetObjLstsessionStorage(strFunctionTemplateId);
      break;
    case '03': //localStorage
      arrvFunctionTemplateRelaSimObjLstCache = await vFunctionTemplateRelaSimGetObjLstlocalStorage(
        strFunctionTemplateId,
      );
      break;
    case '02': //ClientCache
      arrvFunctionTemplateRelaSimObjLstCache = await vFunctionTemplateRelaSimGetObjLstClientCache(
        strFunctionTemplateId,
      );
      break;
    default:
      arrvFunctionTemplateRelaSimObjLstCache = await vFunctionTemplateRelaSimGetObjLstClientCache(
        strFunctionTemplateId,
      );
      break;
  }
  return arrvFunctionTemplateRelaSimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFunctionTemplateRelaSimGetObjLstPureCache(strFunctionTemplateId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvFunctionTemplateRelaSimObjLstCache;
  switch (clsvFunctionTemplateRelaSimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFunctionTemplateRelaSimObjLstCache =
        await vFunctionTemplateRelaSimGetObjLstsessionStoragePureCache(strFunctionTemplateId);
      break;
    case '03': //localStorage
      arrvFunctionTemplateRelaSimObjLstCache =
        await vFunctionTemplateRelaSimGetObjLstlocalStoragePureCache(strFunctionTemplateId);
      break;
    case '02': //ClientCache
      arrvFunctionTemplateRelaSimObjLstCache = null;
      break;
    default:
      arrvFunctionTemplateRelaSimObjLstCache = null;
      break;
  }
  return arrvFunctionTemplateRelaSimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFunctionTemplateIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vFunctionTemplateRelaSimGetSubObjLstCache(
  objvFunctionTemplateRelaSimCond: clsvFunctionTemplateRelaSimEN,
  strFunctionTemplateId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvFunctionTemplateRelaSimObjLstCache = await vFunctionTemplateRelaSimGetObjLstCache(
    strFunctionTemplateId,
  );
  let arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimObjLstCache;
  if (
    objvFunctionTemplateRelaSimCond.sfFldComparisonOp == null ||
    objvFunctionTemplateRelaSimCond.sfFldComparisonOp == ''
  )
    return arrvFunctionTemplateRelaSimSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFunctionTemplateRelaSimCond.sfFldComparisonOp,
  );
  //console.log("clsvFunctionTemplateRelaSimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFunctionTemplateRelaSimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFunctionTemplateRelaSimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFunctionTemplateRelaSimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFunctionTemplateRelaSimCond),
      vFunctionTemplateRelaSimConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFunctionTemplateRelaSimEN>();
}

/// <summary>
/// 把多个关键字段的值连接起来，用|连接(Join)--vFunctionTemplateRelaSim(v函数模板关系_Sim)
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_JoinByKeyLst)
/// </summary>
/// <param name = "objvFunctionTemplateRelaSimEN">需要连接的对象</param>
/// <returns></returns>
export function vFunctionTemplateRelaSimJoinByKeyLst(
  objvFunctionTemplateRelaSimEN: clsvFunctionTemplateRelaSimEN,
): string {
  //检测记录是否存在
  let strResult = '';
  strResult += objvFunctionTemplateRelaSimEN.functionTemplateId;
  strResult += `|${objvFunctionTemplateRelaSimEN.funcId4GC}`;
  return strResult;
}
/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrFunctionTemplateIdLst:关键字列表
 * @returns 对象列表
 */
export async function vFunctionTemplateRelaSimGetObjLstByKeyLstsCache(
  arrFunctionTemplateIdLst: Array<string>,
  strFunctionTemplateId: string,
) {
  const strThisFuncName = 'GetObjLstByKeyLstsCache';
  try {
    const arrvFunctionTemplateRelaSimObjLstCache = await vFunctionTemplateRelaSimGetObjLstCache(
      strFunctionTemplateId,
    );
    const arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimObjLstCache.filter(
      (x) => arrFunctionTemplateIdLst.indexOf(vFunctionTemplateRelaSimJoinByKeyLst(x)) > -1,
    );
    return arrvFunctionTemplateRelaSimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFunctionTemplateIdLst.join(','),
      vFunctionTemplateRelaSimConstructorName,
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
export async function vFunctionTemplateRelaSimGetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFunctionTemplateRelaSimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFunctionTemplateRelaSimController, strAction);
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
          vFunctionTemplateRelaSimConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunctionTemplateRelaSimGetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
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
 * 根据范围条件获取相应的记录对象列表，获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vFunctionTemplateRelaSimGetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFunctionTemplateRelaSimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFunctionTemplateRelaSimController, strAction);
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
          vFunctionTemplateRelaSimConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunctionTemplateRelaSimGetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
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
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vFunctionTemplateRelaSimGetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strFunctionTemplateId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFunctionTemplateRelaSimEN>();
  const arrvFunctionTemplateRelaSimObjLstCache = await vFunctionTemplateRelaSimGetObjLstCache(
    strFunctionTemplateId,
  );
  if (arrvFunctionTemplateRelaSimObjLstCache.length == 0)
    return arrvFunctionTemplateRelaSimObjLstCache;
  let arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvFunctionTemplateRelaSimCond = new clsvFunctionTemplateRelaSimEN();
  ObjectAssign(objvFunctionTemplateRelaSimCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvFunctionTemplateRelaSimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFunctionTemplateRelaSimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFunctionTemplateRelaSimSel.length == 0) return arrvFunctionTemplateRelaSimSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.sort(
        vFunctionTemplateRelaSimSortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.sort(objPagerPara.sortFun);
    }
    arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.slice(intStart, intEnd);
    return arrvFunctionTemplateRelaSimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vFunctionTemplateRelaSimConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFunctionTemplateRelaSimEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表，只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vFunctionTemplateRelaSimGetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFunctionTemplateRelaSimEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFunctionTemplateRelaSimEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFunctionTemplateRelaSimController, strAction);
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
          vFunctionTemplateRelaSimConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFunctionTemplateRelaSimGetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
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
 * @param objstrFunctionTemplateIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vFunctionTemplateRelaSimIsExistRecordCache(
  objvFunctionTemplateRelaSimCond: clsvFunctionTemplateRelaSimEN,
  strFunctionTemplateId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvFunctionTemplateRelaSimObjLstCache = await vFunctionTemplateRelaSimGetObjLstCache(
    strFunctionTemplateId,
  );
  if (arrvFunctionTemplateRelaSimObjLstCache == null) return false;
  let arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimObjLstCache;
  if (
    objvFunctionTemplateRelaSimCond.sfFldComparisonOp == null ||
    objvFunctionTemplateRelaSimCond.sfFldComparisonOp == ''
  )
    return arrvFunctionTemplateRelaSimSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFunctionTemplateRelaSimCond.sfFldComparisonOp,
  );
  //console.log("clsvFunctionTemplateRelaSimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFunctionTemplateRelaSimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFunctionTemplateRelaSimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFunctionTemplateRelaSimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvFunctionTemplateRelaSimCond),
      vFunctionTemplateRelaSimConstructorName,
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
export async function vFunctionTemplateRelaSimIsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFunctionTemplateRelaSimController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
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
 * @param strFunctionTemplateId:所给的关键字
 * @returns 对象
 */
export async function vFunctionTemplateRelaSimIsExistCache(
  strFunctionTemplateId: string,
  strFuncId4GC: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrvFunctionTemplateRelaSimObjLstCache = await vFunctionTemplateRelaSimGetObjLstCache(
    strFunctionTemplateId,
  );
  if (arrvFunctionTemplateRelaSimObjLstCache == null) return false;
  try {
    const arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimObjLstCache.filter(
      (x) => x.functionTemplateId == strFunctionTemplateId && x.funcId4GC == strFuncId4GC,
    );
    if (arrvFunctionTemplateRelaSimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFunctionTemplateId,
      vFunctionTemplateRelaSimConstructorName,
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
 * @param strFunctionTemplateId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vFunctionTemplateRelaSimIsExistAsync(
  strFunctionTemplateId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFunctionTemplateRelaSimController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFunctionTemplateId,
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
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
export async function vFunctionTemplateRelaSimGetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFunctionTemplateRelaSimController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFunctionTemplateRelaSimConstructorName,
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
 * @param objvFunctionTemplateRelaSimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vFunctionTemplateRelaSimGetRecCountByCondCache(
  objvFunctionTemplateRelaSimCond: clsvFunctionTemplateRelaSimEN,
  strFunctionTemplateId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvFunctionTemplateRelaSimObjLstCache = await vFunctionTemplateRelaSimGetObjLstCache(
    strFunctionTemplateId,
  );
  if (arrvFunctionTemplateRelaSimObjLstCache == null) return 0;
  let arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimObjLstCache;
  if (
    objvFunctionTemplateRelaSimCond.sfFldComparisonOp == null ||
    objvFunctionTemplateRelaSimCond.sfFldComparisonOp == ''
  )
    return arrvFunctionTemplateRelaSimSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFunctionTemplateRelaSimCond.sfFldComparisonOp,
  );
  //console.log("clsvFunctionTemplateRelaSimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFunctionTemplateRelaSimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFunctionTemplateRelaSimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFunctionTemplateRelaSimSel = arrvFunctionTemplateRelaSimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFunctionTemplateRelaSimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFunctionTemplateRelaSimCond),
      vFunctionTemplateRelaSimConstructorName,
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
export function vFunctionTemplateRelaSimGetWebApiUrl(
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
export function vFunctionTemplateRelaSimReFreshThisCache(strFunctionTemplateId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format(
      '{0}_{1}',
      clsvFunctionTemplateRelaSimEN._CurrTabName,
      strFunctionTemplateId,
    );
    switch (clsvFunctionTemplateRelaSimEN.CacheModeId) {
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
    const strMsg = Format('刷新缓存成功！');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}
/* 该表的下拉框功能没有设置，不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFunctionTemplateRelaSimGetJSONStrByObj(
  pobjvFunctionTemplateRelaSimEN: clsvFunctionTemplateRelaSimEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFunctionTemplateRelaSimEN);
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
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vFunctionTemplateRelaSimGetObjLstByJSONStr(
  strJSON: string,
): Array<clsvFunctionTemplateRelaSimEN> {
  let arrvFunctionTemplateRelaSimObjLst = new Array<clsvFunctionTemplateRelaSimEN>();
  if (strJSON === '') {
    return arrvFunctionTemplateRelaSimObjLst;
  }
  try {
    arrvFunctionTemplateRelaSimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFunctionTemplateRelaSimObjLst;
  }
  return arrvFunctionTemplateRelaSimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFunctionTemplateRelaSimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFunctionTemplateRelaSimGetObjLstByJSONObjLst(
  arrvFunctionTemplateRelaSimObjLstS: Array<clsvFunctionTemplateRelaSimEN>,
): Array<clsvFunctionTemplateRelaSimEN> {
  const arrvFunctionTemplateRelaSimObjLst = new Array<clsvFunctionTemplateRelaSimEN>();
  for (const objInFor of arrvFunctionTemplateRelaSimObjLstS) {
    const obj1 = vFunctionTemplateRelaSimGetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFunctionTemplateRelaSimObjLst.push(obj1);
  }
  return arrvFunctionTemplateRelaSimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFunctionTemplateRelaSimGetObjByJSONStr(
  strJSON: string,
): clsvFunctionTemplateRelaSimEN {
  let pobjvFunctionTemplateRelaSimEN = new clsvFunctionTemplateRelaSimEN();
  if (strJSON === '') {
    return pobjvFunctionTemplateRelaSimEN;
  }
  try {
    pobjvFunctionTemplateRelaSimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFunctionTemplateRelaSimEN;
  }
  return pobjvFunctionTemplateRelaSimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFunctionTemplateRelaSimGetCombineCondition(
  objvFunctionTemplateRelaSimCond: clsvFunctionTemplateRelaSimEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaSimCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaSimEN.con_FunctionTemplateId,
    ) == true
  ) {
    const strComparisonOpFunctionTemplateId: string =
      objvFunctionTemplateRelaSimCond.dicFldComparisonOp[
        clsvFunctionTemplateRelaSimEN.con_FunctionTemplateId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaSimEN.con_FunctionTemplateId,
      objvFunctionTemplateRelaSimCond.functionTemplateId,
      strComparisonOpFunctionTemplateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaSimCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaSimEN.conFuncId4GC,
    ) == true
  ) {
    const strComparisonOpFuncId4GC: string =
      objvFunctionTemplateRelaSimCond.dicFldComparisonOp[
        clsvFunctionTemplateRelaSimEN.conFuncId4GC
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaSimEN.conFuncId4GC,
      objvFunctionTemplateRelaSimCond.funcId4GC,
      strComparisonOpFuncId4GC,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaSimCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaSimEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objvFunctionTemplateRelaSimCond.dicFldComparisonOp[
        clsvFunctionTemplateRelaSimEN.con_CodeTypeId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaSimEN.con_CodeTypeId,
      objvFunctionTemplateRelaSimCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaSimCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaSimEN.conRegionTypeId,
    ) == true
  ) {
    const strComparisonOpRegionTypeId: string =
      objvFunctionTemplateRelaSimCond.dicFldComparisonOp[
        clsvFunctionTemplateRelaSimEN.conRegionTypeId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFunctionTemplateRelaSimEN.conRegionTypeId,
      objvFunctionTemplateRelaSimCond.regionTypeId,
      strComparisonOpRegionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFunctionTemplateRelaSimCond.dicFldComparisonOp,
      clsvFunctionTemplateRelaSimEN.conIsGeneCode,
    ) == true
  ) {
    if (objvFunctionTemplateRelaSimCond.isGeneCode == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFunctionTemplateRelaSimEN.conIsGeneCode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFunctionTemplateRelaSimEN.conIsGeneCode);
    }
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFunctionTemplateRelaSimENS:源对象
 * @param objvFunctionTemplateRelaSimENT:目标对象
 */
export function vFunctionTemplateRelaSimGetObjFromJsonObj(
  objvFunctionTemplateRelaSimENS: clsvFunctionTemplateRelaSimEN,
): clsvFunctionTemplateRelaSimEN {
  const objvFunctionTemplateRelaSimENT: clsvFunctionTemplateRelaSimEN =
    new clsvFunctionTemplateRelaSimEN();
  ObjectAssign(objvFunctionTemplateRelaSimENT, objvFunctionTemplateRelaSimENS);
  return objvFunctionTemplateRelaSimENT;
}
