/**
 * 类名:clsvFieldTab_Sim2WApi
 * 表名:vFieldTab_Sim2(00050608)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:36
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vFieldTab_Sim2(vFieldTab_Sim2)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
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
import { clsvFieldTab_Sim2EN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_Sim2EN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vFieldTab_Sim2_Controller = 'vFieldTab_Sim2Api';
export const vFieldTab_Sim2_ConstructorName = 'vFieldTab_Sim2';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFldId:关键字
 * @returns 对象
 **/
export async function vFieldTab_Sim2_GetObjByFldIdAsync(
  strFldId: string,
): Promise<clsvFieldTab_Sim2EN | null> {
  const strThisFuncName = 'GetObjByFldIdAsync';

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format('参数:[strFldId]不能为空!(In clsvFieldTab_Sim2WApi.GetObjByFldIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsvFieldTab_Sim2WApi.GetObjByFldIdAsync)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFldId';
  const strUrl = GetWebApiUrl(vFieldTab_Sim2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldId,
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
      const objvFieldTab_Sim2 = vFieldTab_Sim2_GetObjFromJsonObj(returnObj);
      return objvFieldTab_Sim2;
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
        vFieldTab_Sim2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim2_ConstructorName,
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
 * @param strFldId:所给的关键字
 * @returns 对象
 */
export async function vFieldTab_Sim2_GetObjByFldIdCache(
  strFldId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFldIdCache';

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format('参数:[strFldId]不能为空!(In clsvFieldTab_Sim2WApi.GetObjByFldIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsvFieldTab_Sim2WApi.GetObjByFldIdCache)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFieldTab_Sim2ObjLstCache = await vFieldTab_Sim2_GetObjLstCache(strPrjId, strFldId);
  try {
    const arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2ObjLstCache.filter((x) => x.fldId == strFldId);
    let objvFieldTab_Sim2: clsvFieldTab_Sim2EN;
    if (arrvFieldTab_Sim2Sel.length > 0) {
      objvFieldTab_Sim2 = arrvFieldTab_Sim2Sel[0];
      return objvFieldTab_Sim2;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvFieldTab_Sim2Const = await vFieldTab_Sim2_GetObjByFldIdAsync(strFldId);
        if (objvFieldTab_Sim2Const != null) {
          vFieldTab_Sim2_ReFreshThisCache(strPrjId, strFldId);
          return objvFieldTab_Sim2Const;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFldId,
      vFieldTab_Sim2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strFldId:所给的关键字
 * @returns 对象
 */
export async function vFieldTab_Sim2_GetObjByFldIdlocalStorage(strFldId: string) {
  const strThisFuncName = 'GetObjByFldIdlocalStorage';

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format(
      '参数:[strFldId]不能为空!(In clsvFieldTab_Sim2WApi.GetObjByFldIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsvFieldTab_Sim2WApi.GetObjByFldIdlocalStorage)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvFieldTab_Sim2EN._CurrTabName, strFldId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvFieldTab_Sim2Cache: clsvFieldTab_Sim2EN = JSON.parse(strTempObj);
    return objvFieldTab_Sim2Cache;
  }
  try {
    const objvFieldTab_Sim2 = await vFieldTab_Sim2_GetObjByFldIdAsync(strFldId);
    if (objvFieldTab_Sim2 != null) {
      localStorage.setItem(strKey, JSON.stringify(objvFieldTab_Sim2));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvFieldTab_Sim2;
    }
    return objvFieldTab_Sim2;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFldId,
      vFieldTab_Sim2_ConstructorName,
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 @param strFldId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vFieldTab_Sim2_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvFieldTab_Sim2WApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvFieldTab_Sim2WApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvFieldTab_Sim2EN.con_FldId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFieldTab_Sim2EN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvFieldTab_Sim2EN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFldId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvFieldTab_Sim2 = await vFieldTab_Sim2_GetObjByFldIdCache(strFldId, strPrjIdClassfy);
  if (objvFieldTab_Sim2 == null) return '';
  if (objvFieldTab_Sim2.GetFldValue(strOutFldName) == null) return '';
  return objvFieldTab_Sim2.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFieldTab_Sim2_SortFunDefa(a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN): number {
  return a.fldId.localeCompare(b.fldId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFieldTab_Sim2_SortFunDefa2Fld(
  a: clsvFieldTab_Sim2EN,
  b: clsvFieldTab_Sim2EN,
): number {
  if (a.dataTypeId == b.dataTypeId) return a.fldName.localeCompare(b.fldName);
  else return a.dataTypeId.localeCompare(b.dataTypeId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFieldTab_Sim2_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFieldTab_Sim2EN.con_FldId:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          return a.fldId.localeCompare(b.fldId);
        };
      case clsvFieldTab_Sim2EN.con_DataTypeId:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsvFieldTab_Sim2EN.con_FldName:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsvFieldTab_Sim2EN.con_Caption:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          return a.caption.localeCompare(b.caption);
        };
      case clsvFieldTab_Sim2EN.con_FldLength:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          return a.fldLength - b.fldLength;
        };
      case clsvFieldTab_Sim2EN.con_FldPrecision:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          return a.fldPrecision - b.fldPrecision;
        };
      case clsvFieldTab_Sim2EN.con_PrjId:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvFieldTab_Sim2EN.con_FieldTypeId:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          if (a.fieldTypeId == null) return -1;
          if (b.fieldTypeId == null) return 1;
          return a.fieldTypeId.localeCompare(b.fieldTypeId);
        };
      case clsvFieldTab_Sim2EN.con_HomologousFldId:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          if (a.homologousFldId == null) return -1;
          if (b.homologousFldId == null) return 1;
          return a.homologousFldId.localeCompare(b.homologousFldId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFieldTab_Sim2]中不存在!(in ${vFieldTab_Sim2_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFieldTab_Sim2EN.con_FldId:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          return b.fldId.localeCompare(a.fldId);
        };
      case clsvFieldTab_Sim2EN.con_DataTypeId:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsvFieldTab_Sim2EN.con_FldName:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsvFieldTab_Sim2EN.con_Caption:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          return b.caption.localeCompare(a.caption);
        };
      case clsvFieldTab_Sim2EN.con_FldLength:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          return b.fldLength - a.fldLength;
        };
      case clsvFieldTab_Sim2EN.con_FldPrecision:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          return b.fldPrecision - a.fldPrecision;
        };
      case clsvFieldTab_Sim2EN.con_PrjId:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvFieldTab_Sim2EN.con_FieldTypeId:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          if (b.fieldTypeId == null) return -1;
          if (a.fieldTypeId == null) return 1;
          return b.fieldTypeId.localeCompare(a.fieldTypeId);
        };
      case clsvFieldTab_Sim2EN.con_HomologousFldId:
        return (a: clsvFieldTab_Sim2EN, b: clsvFieldTab_Sim2EN) => {
          if (b.homologousFldId == null) return -1;
          if (a.homologousFldId == null) return 1;
          return b.homologousFldId.localeCompare(a.homologousFldId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFieldTab_Sim2]中不存在!(in ${vFieldTab_Sim2_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vFieldTab_Sim2_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFieldTab_Sim2EN.con_FldId:
      return (obj: clsvFieldTab_Sim2EN) => {
        return obj.fldId === value;
      };
    case clsvFieldTab_Sim2EN.con_DataTypeId:
      return (obj: clsvFieldTab_Sim2EN) => {
        return obj.dataTypeId === value;
      };
    case clsvFieldTab_Sim2EN.con_FldName:
      return (obj: clsvFieldTab_Sim2EN) => {
        return obj.fldName === value;
      };
    case clsvFieldTab_Sim2EN.con_Caption:
      return (obj: clsvFieldTab_Sim2EN) => {
        return obj.caption === value;
      };
    case clsvFieldTab_Sim2EN.con_FldLength:
      return (obj: clsvFieldTab_Sim2EN) => {
        return obj.fldLength === value;
      };
    case clsvFieldTab_Sim2EN.con_FldPrecision:
      return (obj: clsvFieldTab_Sim2EN) => {
        return obj.fldPrecision === value;
      };
    case clsvFieldTab_Sim2EN.con_PrjId:
      return (obj: clsvFieldTab_Sim2EN) => {
        return obj.prjId === value;
      };
    case clsvFieldTab_Sim2EN.con_FieldTypeId:
      return (obj: clsvFieldTab_Sim2EN) => {
        return obj.fieldTypeId === value;
      };
    case clsvFieldTab_Sim2EN.con_HomologousFldId:
      return (obj: clsvFieldTab_Sim2EN) => {
        return obj.homologousFldId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFieldTab_Sim2]中不存在!(in ${vFieldTab_Sim2_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @param strPrjId:缓存的分类字段
 * @param strFldId:缓存的分类字段2
 * @returns 返回一个关键字值列表
 */
export async function vFieldTab_Sim2_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
  strFldIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvFieldTab_Sim2WApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvFieldTab_Sim2WApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strFldIdClassfy) == true) {
    const strMsg = Format('参数:[strFldIdClassfy]不能为空!(In clsvFieldTab_Sim2WApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldIdClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldIdClassfy]的长度:[{0}]不正确!(clsvFieldTab_Sim2WApi.funcKey)',
      strFldIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvFieldTab_Sim2EN.con_FldId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvFieldTab_Sim2 = await vFieldTab_Sim2_GetObjLstCache(strPrjIdClassfy, strFldIdClassfy);
  if (arrvFieldTab_Sim2 == null) return [];
  let arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvFieldTab_Sim2Sel.length == 0) return [];
  return arrvFieldTab_Sim2Sel.map((x) => x.fldId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFieldTab_Sim2_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFieldTab_Sim2_Controller, strAction);

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
        vFieldTab_Sim2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim2_ConstructorName,
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
export async function vFieldTab_Sim2_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFieldTab_Sim2_Controller, strAction);

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
        vFieldTab_Sim2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim2_ConstructorName,
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
export async function vFieldTab_Sim2_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFieldTab_Sim2EN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFieldTab_Sim2_Controller, strAction);

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
      const objvFieldTab_Sim2 = vFieldTab_Sim2_GetObjFromJsonObj(returnObj);
      return objvFieldTab_Sim2;
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
        vFieldTab_Sim2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim2_ConstructorName,
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
export async function vFieldTab_Sim2_GetObjLstClientCache(strPrjId: string, strFldId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFieldTab_Sim2EN.WhereFormat) == false) {
    strWhereCond = Format(clsvFieldTab_Sim2EN.WhereFormat, strPrjId, strFldId);
  } else {
    strWhereCond = Format("PrjId='{0}' and FldId='{1}'", strPrjId, strFldId);
  }
  const strKey = Format('{0}_{1}_{2}', clsvFieldTab_Sim2EN._CurrTabName, strPrjId, strFldId);
  if (IsNullOrEmpty(clsvFieldTab_Sim2EN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFieldTab_Sim2EN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvFieldTab_Sim2ExObjLstCache: Array<clsvFieldTab_Sim2EN> = CacheHelper.Get(strKey);
    const arrvFieldTab_Sim2ObjLstT = vFieldTab_Sim2_GetObjLstByJSONObjLst(
      arrvFieldTab_Sim2ExObjLstCache,
    );
    return arrvFieldTab_Sim2ObjLstT;
  }
  try {
    const arrvFieldTab_Sim2ExObjLst = await vFieldTab_Sim2_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvFieldTab_Sim2ExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFieldTab_Sim2ExObjLst.length,
    );
    console.log(strInfo);
    return arrvFieldTab_Sim2ExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFieldTab_Sim2_ConstructorName,
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
export async function vFieldTab_Sim2_GetObjLstlocalStorage(strPrjId: string, strFldId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFieldTab_Sim2EN.WhereFormat) == false) {
    strWhereCond = Format(clsvFieldTab_Sim2EN.WhereFormat, strPrjId, strFldId);
  } else {
    strWhereCond = Format("PrjId='{0}' and FldId='{1}'", strPrjId, strFldId);
  }
  const strKey = Format('{0}_{1}_{2}', clsvFieldTab_Sim2EN._CurrTabName, strPrjId, strFldId);
  if (IsNullOrEmpty(clsvFieldTab_Sim2EN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFieldTab_Sim2EN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFieldTab_Sim2ExObjLstCache: Array<clsvFieldTab_Sim2EN> = JSON.parse(strTempObjLst);
    const arrvFieldTab_Sim2ObjLstT = vFieldTab_Sim2_GetObjLstByJSONObjLst(
      arrvFieldTab_Sim2ExObjLstCache,
    );
    return arrvFieldTab_Sim2ObjLstT;
  }
  try {
    const arrvFieldTab_Sim2ExObjLst = await vFieldTab_Sim2_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvFieldTab_Sim2ExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFieldTab_Sim2ExObjLst.length,
    );
    console.log(strInfo);
    return arrvFieldTab_Sim2ExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFieldTab_Sim2_ConstructorName,
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
export async function vFieldTab_Sim2_GetObjLstlocalStoragePureCache(
  strPrjId: string,
  strFldId: string,
) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}_{2}', clsvFieldTab_Sim2EN._CurrTabName, strPrjId, strFldId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFieldTab_Sim2ObjLstCache: Array<clsvFieldTab_Sim2EN> = JSON.parse(strTempObjLst);
    return arrvFieldTab_Sim2ObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vFieldTab_Sim2_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFieldTab_Sim2EN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFieldTab_Sim2_Controller, strAction);

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
          vFieldTab_Sim2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFieldTab_Sim2_GetObjLstByJSONObjLst(returnObjLst);
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
        vFieldTab_Sim2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim2_ConstructorName,
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
export async function vFieldTab_Sim2_GetObjLstsessionStorage(strPrjId: string, strFldId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFieldTab_Sim2EN.WhereFormat) == false) {
    strWhereCond = Format(clsvFieldTab_Sim2EN.WhereFormat, strPrjId, strFldId);
  } else {
    strWhereCond = Format("PrjId='{0}' and FldId='{1}'", strPrjId, strFldId);
  }
  const strKey = Format('{0}_{1}_{2}', clsvFieldTab_Sim2EN._CurrTabName, strPrjId, strFldId);
  if (IsNullOrEmpty(clsvFieldTab_Sim2EN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFieldTab_Sim2EN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFieldTab_Sim2ExObjLstCache: Array<clsvFieldTab_Sim2EN> = JSON.parse(strTempObjLst);
    const arrvFieldTab_Sim2ObjLstT = vFieldTab_Sim2_GetObjLstByJSONObjLst(
      arrvFieldTab_Sim2ExObjLstCache,
    );
    return arrvFieldTab_Sim2ObjLstT;
  }
  try {
    const arrvFieldTab_Sim2ExObjLst = await vFieldTab_Sim2_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvFieldTab_Sim2ExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFieldTab_Sim2ExObjLst.length,
    );
    console.log(strInfo);
    return arrvFieldTab_Sim2ExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFieldTab_Sim2_ConstructorName,
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
export async function vFieldTab_Sim2_GetObjLstsessionStoragePureCache(
  strPrjId: string,
  strFldId: string,
) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}_{2}', clsvFieldTab_Sim2EN._CurrTabName, strPrjId, strFldId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFieldTab_Sim2ObjLstCache: Array<clsvFieldTab_Sim2EN> = JSON.parse(strTempObjLst);
    return arrvFieldTab_Sim2ObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFieldTab_Sim2_GetObjLstCache(
  strPrjId: string,
  strFldId: string,
): Promise<Array<clsvFieldTab_Sim2EN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvFieldTab_Sim2WApi.vFieldTab_Sim2_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvFieldTab_Sim2WApi.vFieldTab_Sim2_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format(
      '参数:[strFldId]不能为空！(In clsvFieldTab_Sim2WApi.vFieldTab_Sim2_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确！(clsvFieldTab_Sim2WApi.vFieldTab_Sim2_GetObjLstCache)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvFieldTab_Sim2ObjLstCache;
  switch (clsvFieldTab_Sim2EN.CacheModeId) {
    case '04': //sessionStorage
      arrvFieldTab_Sim2ObjLstCache = await vFieldTab_Sim2_GetObjLstsessionStorage(
        strPrjId,
        strFldId,
      );
      break;
    case '03': //localStorage
      arrvFieldTab_Sim2ObjLstCache = await vFieldTab_Sim2_GetObjLstlocalStorage(strPrjId, strFldId);
      break;
    case '02': //ClientCache
      arrvFieldTab_Sim2ObjLstCache = await vFieldTab_Sim2_GetObjLstClientCache(strPrjId, strFldId);
      break;
    default:
      arrvFieldTab_Sim2ObjLstCache = await vFieldTab_Sim2_GetObjLstClientCache(strPrjId, strFldId);
      break;
  }
  return arrvFieldTab_Sim2ObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFieldTab_Sim2_GetObjLstPureCache(strPrjId: string, strFldId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvFieldTab_Sim2ObjLstCache;
  switch (clsvFieldTab_Sim2EN.CacheModeId) {
    case '04': //sessionStorage
      arrvFieldTab_Sim2ObjLstCache = await vFieldTab_Sim2_GetObjLstsessionStoragePureCache(
        strPrjId,
        strFldId,
      );
      break;
    case '03': //localStorage
      arrvFieldTab_Sim2ObjLstCache = await vFieldTab_Sim2_GetObjLstlocalStoragePureCache(
        strPrjId,
        strFldId,
      );
      break;
    case '02': //ClientCache
      arrvFieldTab_Sim2ObjLstCache = null;
      break;
    default:
      arrvFieldTab_Sim2ObjLstCache = null;
      break;
  }
  return arrvFieldTab_Sim2ObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFldIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vFieldTab_Sim2_GetSubObjLstCache(
  objvFieldTab_Sim2Cond: clsvFieldTab_Sim2EN,
  strPrjId: string,
  strFldId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvFieldTab_Sim2ObjLstCache = await vFieldTab_Sim2_GetObjLstCache(strPrjId, strFldId);
  let arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2ObjLstCache;
  if (
    objvFieldTab_Sim2Cond.sfFldComparisonOp == null ||
    objvFieldTab_Sim2Cond.sfFldComparisonOp == ''
  )
    return arrvFieldTab_Sim2Sel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFieldTab_Sim2Cond.sfFldComparisonOp,
  );
  //console.log("clsvFieldTab_Sim2WApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFieldTab_Sim2Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFieldTab_Sim2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFieldTab_Sim2Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFieldTab_Sim2Cond),
      vFieldTab_Sim2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFieldTab_Sim2EN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFldId:关键字列表
 * @returns 对象列表
 **/
export async function vFieldTab_Sim2_GetObjLstByFldIdLstAsync(
  arrFldId: Array<string>,
): Promise<Array<clsvFieldTab_Sim2EN>> {
  const strThisFuncName = 'GetObjLstByFldIdLstAsync';
  const strAction = 'GetObjLstByFldIdLst';
  const strUrl = GetWebApiUrl(vFieldTab_Sim2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFldId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vFieldTab_Sim2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFieldTab_Sim2_GetObjLstByJSONObjLst(returnObjLst);
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
        vFieldTab_Sim2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim2_ConstructorName,
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
 * @param arrstrFldIdLst:关键字列表
 * @returns 对象列表
 */
export async function vFieldTab_Sim2_GetObjLstByFldIdLstCache(
  arrFldIdLst: Array<string>,
  strPrjId: string,
  strFldId: string,
) {
  const strThisFuncName = 'GetObjLstByFldIdLstCache';
  try {
    const arrvFieldTab_Sim2ObjLstCache = await vFieldTab_Sim2_GetObjLstCache(strPrjId, strFldId);
    const arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2ObjLstCache.filter(
      (x) => arrFldIdLst.indexOf(x.fldId) > -1,
    );
    return arrvFieldTab_Sim2Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFldIdLst.join(','),
      vFieldTab_Sim2_ConstructorName,
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
export async function vFieldTab_Sim2_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFieldTab_Sim2EN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFieldTab_Sim2_Controller, strAction);

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
          vFieldTab_Sim2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFieldTab_Sim2_GetObjLstByJSONObjLst(returnObjLst);
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
        vFieldTab_Sim2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim2_ConstructorName,
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
export async function vFieldTab_Sim2_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFieldTab_Sim2EN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFieldTab_Sim2_Controller, strAction);

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
          vFieldTab_Sim2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFieldTab_Sim2_GetObjLstByJSONObjLst(returnObjLst);
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
        vFieldTab_Sim2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim2_ConstructorName,
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
export async function vFieldTab_Sim2_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
  strFldId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFieldTab_Sim2EN>();
  const arrvFieldTab_Sim2ObjLstCache = await vFieldTab_Sim2_GetObjLstCache(strPrjId, strFldId);
  if (arrvFieldTab_Sim2ObjLstCache.length == 0) return arrvFieldTab_Sim2ObjLstCache;
  let arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2ObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvFieldTab_Sim2Cond = new clsvFieldTab_Sim2EN();
  ObjectAssign(objvFieldTab_Sim2Cond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvFieldTab_Sim2WApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFieldTab_Sim2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFieldTab_Sim2Sel.length == 0) return arrvFieldTab_Sim2Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.sort(
        vFieldTab_Sim2_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.sort(objPagerPara.sortFun);
    }
    arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.slice(intStart, intEnd);
    return arrvFieldTab_Sim2Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vFieldTab_Sim2_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFieldTab_Sim2EN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vFieldTab_Sim2_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFieldTab_Sim2EN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFieldTab_Sim2EN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFieldTab_Sim2_Controller, strAction);

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
          vFieldTab_Sim2_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFieldTab_Sim2_GetObjLstByJSONObjLst(returnObjLst);
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
        vFieldTab_Sim2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim2_ConstructorName,
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
 * @param objstrFldIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vFieldTab_Sim2_IsExistRecordCache(
  objvFieldTab_Sim2Cond: clsvFieldTab_Sim2EN,
  strPrjId: string,
  strFldId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvFieldTab_Sim2ObjLstCache = await vFieldTab_Sim2_GetObjLstCache(strPrjId, strFldId);
  if (arrvFieldTab_Sim2ObjLstCache == null) return false;
  let arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2ObjLstCache;
  if (
    objvFieldTab_Sim2Cond.sfFldComparisonOp == null ||
    objvFieldTab_Sim2Cond.sfFldComparisonOp == ''
  )
    return arrvFieldTab_Sim2Sel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFieldTab_Sim2Cond.sfFldComparisonOp,
  );
  //console.log("clsvFieldTab_Sim2WApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFieldTab_Sim2Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFieldTab_Sim2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFieldTab_Sim2Sel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvFieldTab_Sim2Cond),
      vFieldTab_Sim2_ConstructorName,
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
export async function vFieldTab_Sim2_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFieldTab_Sim2_Controller, strAction);

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
        vFieldTab_Sim2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim2_ConstructorName,
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
 * @param strFldId:所给的关键字
 * @returns 对象
 */
export async function vFieldTab_Sim2_IsExistCache(strFldId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvFieldTab_Sim2ObjLstCache = await vFieldTab_Sim2_GetObjLstCache(strPrjId, strFldId);
  if (arrvFieldTab_Sim2ObjLstCache == null) return false;
  try {
    const arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2ObjLstCache.filter((x) => x.fldId == strFldId);
    if (arrvFieldTab_Sim2Sel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFldId,
      vFieldTab_Sim2_ConstructorName,
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
 * @param strFldId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vFieldTab_Sim2_IsExistAsync(strFldId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFieldTab_Sim2_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldId,
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
        vFieldTab_Sim2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim2_ConstructorName,
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
export async function vFieldTab_Sim2_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFieldTab_Sim2_Controller, strAction);

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
        vFieldTab_Sim2_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim2_ConstructorName,
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
 * @param objvFieldTab_Sim2Cond:条件对象
 * @returns 对象列表记录数
 */
export async function vFieldTab_Sim2_GetRecCountByCondCache(
  objvFieldTab_Sim2Cond: clsvFieldTab_Sim2EN,
  strPrjId: string,
  strFldId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvFieldTab_Sim2ObjLstCache = await vFieldTab_Sim2_GetObjLstCache(strPrjId, strFldId);
  if (arrvFieldTab_Sim2ObjLstCache == null) return 0;
  let arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2ObjLstCache;
  if (
    objvFieldTab_Sim2Cond.sfFldComparisonOp == null ||
    objvFieldTab_Sim2Cond.sfFldComparisonOp == ''
  )
    return arrvFieldTab_Sim2Sel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFieldTab_Sim2Cond.sfFldComparisonOp,
  );
  //console.log("clsvFieldTab_Sim2WApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFieldTab_Sim2Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFieldTab_Sim2Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFieldTab_Sim2Sel = arrvFieldTab_Sim2Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFieldTab_Sim2Sel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFieldTab_Sim2Cond),
      vFieldTab_Sim2_ConstructorName,
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
export function vFieldTab_Sim2_GetWebApiUrl(strController: string, strAction: string): string {
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vFieldTab_Sim2_ReFreshThisCache4Head(strPrjId: string): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsvFieldTab_Sim2EN._CurrTabName, strPrjId);
  switch (clsvFieldTab_Sim2EN.CacheModeId) {
    case '04': //sessionStorage
      CacheHelper.ClearSessionStorage4Head(strKey);
      break;
    case '03': //localStorage
      CacheHelper.ClearLocalStorage4Head(strKey);
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
export function vFieldTab_Sim2_ReFreshThisCache(strPrjId: string, strFldId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsvFieldTab_Sim2WApi.vFieldTab_Sim2_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsvFieldTab_Sim2WApi.vFieldTab_Sim2_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format(
      '参数:[strFldId]不能为空!(In clsvFieldTab_Sim2WApi.vFieldTab_Sim2_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsvFieldTab_Sim2WApi.vFieldTab_Sim2_ReFreshThisCache)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}_{2}', clsvFieldTab_Sim2EN._CurrTabName, strPrjId, strFldId);
    switch (clsvFieldTab_Sim2EN.CacheModeId) {
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFieldTab_Sim2_GetJSONStrByObj(pobjvFieldTab_Sim2EN: clsvFieldTab_Sim2EN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFieldTab_Sim2EN);
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vFieldTab_Sim2_GetObjLstByJSONStr(strJSON: string): Array<clsvFieldTab_Sim2EN> {
  let arrvFieldTab_Sim2ObjLst = new Array<clsvFieldTab_Sim2EN>();
  if (strJSON === '') {
    return arrvFieldTab_Sim2ObjLst;
  }
  try {
    arrvFieldTab_Sim2ObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFieldTab_Sim2ObjLst;
  }
  return arrvFieldTab_Sim2ObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFieldTab_Sim2ObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFieldTab_Sim2_GetObjLstByJSONObjLst(
  arrvFieldTab_Sim2ObjLstS: Array<clsvFieldTab_Sim2EN>,
): Array<clsvFieldTab_Sim2EN> {
  const arrvFieldTab_Sim2ObjLst = new Array<clsvFieldTab_Sim2EN>();
  for (const objInFor of arrvFieldTab_Sim2ObjLstS) {
    const obj1 = vFieldTab_Sim2_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFieldTab_Sim2ObjLst.push(obj1);
  }
  return arrvFieldTab_Sim2ObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFieldTab_Sim2_GetObjByJSONStr(strJSON: string): clsvFieldTab_Sim2EN {
  let pobjvFieldTab_Sim2EN = new clsvFieldTab_Sim2EN();
  if (strJSON === '') {
    return pobjvFieldTab_Sim2EN;
  }
  try {
    pobjvFieldTab_Sim2EN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFieldTab_Sim2EN;
  }
  return pobjvFieldTab_Sim2EN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFieldTab_Sim2_GetCombineCondition(
  objvFieldTab_Sim2Cond: clsvFieldTab_Sim2EN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFieldTab_Sim2Cond.dicFldComparisonOp,
      clsvFieldTab_Sim2EN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objvFieldTab_Sim2Cond.dicFldComparisonOp[clsvFieldTab_Sim2EN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFieldTab_Sim2EN.con_FldId,
      objvFieldTab_Sim2Cond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFieldTab_Sim2Cond.dicFldComparisonOp,
      clsvFieldTab_Sim2EN.con_DataTypeId,
    ) == true
  ) {
    const strComparisonOpDataTypeId: string =
      objvFieldTab_Sim2Cond.dicFldComparisonOp[clsvFieldTab_Sim2EN.con_DataTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFieldTab_Sim2EN.con_DataTypeId,
      objvFieldTab_Sim2Cond.dataTypeId,
      strComparisonOpDataTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFieldTab_Sim2Cond.dicFldComparisonOp,
      clsvFieldTab_Sim2EN.con_FldName,
    ) == true
  ) {
    const strComparisonOpFldName: string =
      objvFieldTab_Sim2Cond.dicFldComparisonOp[clsvFieldTab_Sim2EN.con_FldName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFieldTab_Sim2EN.con_FldName,
      objvFieldTab_Sim2Cond.fldName,
      strComparisonOpFldName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFieldTab_Sim2Cond.dicFldComparisonOp,
      clsvFieldTab_Sim2EN.con_Caption,
    ) == true
  ) {
    const strComparisonOpCaption: string =
      objvFieldTab_Sim2Cond.dicFldComparisonOp[clsvFieldTab_Sim2EN.con_Caption];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFieldTab_Sim2EN.con_Caption,
      objvFieldTab_Sim2Cond.caption,
      strComparisonOpCaption,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFieldTab_Sim2Cond.dicFldComparisonOp,
      clsvFieldTab_Sim2EN.con_FldLength,
    ) == true
  ) {
    const strComparisonOpFldLength: string =
      objvFieldTab_Sim2Cond.dicFldComparisonOp[clsvFieldTab_Sim2EN.con_FldLength];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFieldTab_Sim2EN.con_FldLength,
      objvFieldTab_Sim2Cond.fldLength,
      strComparisonOpFldLength,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFieldTab_Sim2Cond.dicFldComparisonOp,
      clsvFieldTab_Sim2EN.con_FldPrecision,
    ) == true
  ) {
    const strComparisonOpFldPrecision: string =
      objvFieldTab_Sim2Cond.dicFldComparisonOp[clsvFieldTab_Sim2EN.con_FldPrecision];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFieldTab_Sim2EN.con_FldPrecision,
      objvFieldTab_Sim2Cond.fldPrecision,
      strComparisonOpFldPrecision,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFieldTab_Sim2Cond.dicFldComparisonOp,
      clsvFieldTab_Sim2EN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvFieldTab_Sim2Cond.dicFldComparisonOp[clsvFieldTab_Sim2EN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFieldTab_Sim2EN.con_PrjId,
      objvFieldTab_Sim2Cond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFieldTab_Sim2Cond.dicFldComparisonOp,
      clsvFieldTab_Sim2EN.con_FieldTypeId,
    ) == true
  ) {
    const strComparisonOpFieldTypeId: string =
      objvFieldTab_Sim2Cond.dicFldComparisonOp[clsvFieldTab_Sim2EN.con_FieldTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFieldTab_Sim2EN.con_FieldTypeId,
      objvFieldTab_Sim2Cond.fieldTypeId,
      strComparisonOpFieldTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFieldTab_Sim2Cond.dicFldComparisonOp,
      clsvFieldTab_Sim2EN.con_HomologousFldId,
    ) == true
  ) {
    const strComparisonOpHomologousFldId: string =
      objvFieldTab_Sim2Cond.dicFldComparisonOp[clsvFieldTab_Sim2EN.con_HomologousFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFieldTab_Sim2EN.con_HomologousFldId,
      objvFieldTab_Sim2Cond.homologousFldId,
      strComparisonOpHomologousFldId,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFieldTab_Sim2ENS:源对象
 * @param objvFieldTab_Sim2ENT:目标对象
 */
export function vFieldTab_Sim2_GetObjFromJsonObj(
  objvFieldTab_Sim2ENS: clsvFieldTab_Sim2EN,
): clsvFieldTab_Sim2EN {
  const objvFieldTab_Sim2ENT: clsvFieldTab_Sim2EN = new clsvFieldTab_Sim2EN();
  ObjectAssign(objvFieldTab_Sim2ENT, objvFieldTab_Sim2ENS);
  return objvFieldTab_Sim2ENT;
}
