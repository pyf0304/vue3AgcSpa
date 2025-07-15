/**
 * 类名:clsFieldTab4CodeConvWApi
 * 表名:FieldTab4CodeConv(00050593)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:49:32
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
 * 字段4代码转换(FieldTab4CodeConv)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetSortExpressInfo,
  ObjectAssign,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  fieldTab4CodeConvCache,
  isFuncMapCache,
} from '@/views/Table_Field/FieldTab4CodeConvVueShare';
import { clsFieldTab4CodeConvENEx } from '@/ts/L0Entity/Table_Field/clsFieldTab4CodeConvENEx';
import { clsFieldTab4CodeConvEN } from '@/ts/L0Entity/Table_Field/clsFieldTab4CodeConvEN';
import { vFieldTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { vPrjTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const fieldTab4CodeConv_Controller = 'FieldTab4CodeConvApi';
export const fieldTab4CodeConv_ConstructorName = 'fieldTab4CodeConv';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFldId:关键字
 * @returns 对象
 **/
export async function FieldTab4CodeConv_GetObjByFldIdAsync(
  strFldId: string,
): Promise<clsFieldTab4CodeConvEN | null> {
  const strThisFuncName = 'GetObjByFldIdAsync';

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format(
      '参数:[strFldId]不能为空!(In clsFieldTab4CodeConvWApi.GetObjByFldIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsFieldTab4CodeConvWApi.GetObjByFldIdAsync)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFldId';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
      const objFieldTab4CodeConv = FieldTab4CodeConv_GetObjFromJsonObj(returnObj);
      return objFieldTab4CodeConv;
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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
 * @param strFldId:所给的关键字
 * @returns 对象
 */
export async function FieldTab4CodeConv_GetObjByFldIdlocalStorage(strFldId: string) {
  const strThisFuncName = 'GetObjByFldIdlocalStorage';

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format(
      '参数:[strFldId]不能为空!(In clsFieldTab4CodeConvWApi.GetObjByFldIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsFieldTab4CodeConvWApi.GetObjByFldIdlocalStorage)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFieldTab4CodeConvEN._CurrTabName, strFldId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFieldTab4CodeConvCache: clsFieldTab4CodeConvEN = JSON.parse(strTempObj);
    return objFieldTab4CodeConvCache;
  }
  try {
    const objFieldTab4CodeConv = await FieldTab4CodeConv_GetObjByFldIdAsync(strFldId);
    if (objFieldTab4CodeConv != null) {
      localStorage.setItem(strKey, JSON.stringify(objFieldTab4CodeConv));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFieldTab4CodeConv;
    }
    return objFieldTab4CodeConv;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFldId,
      fieldTab4CodeConv_ConstructorName,
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
 * @param strFldId:所给的关键字
 * @returns 对象
 */
export async function FieldTab4CodeConv_GetObjByFldIdCache(
  strFldId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFldIdCache';

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format(
      '参数:[strFldId]不能为空!(In clsFieldTab4CodeConvWApi.GetObjByFldIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsFieldTab4CodeConvWApi.GetObjByFldIdCache)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFieldTab4CodeConvObjLstCache = await FieldTab4CodeConv_GetObjLstCache(strPrjId);
  try {
    const arrFieldTab4CodeConvSel = arrFieldTab4CodeConvObjLstCache.filter(
      (x) => x.fldId == strFldId,
    );
    let objFieldTab4CodeConv: clsFieldTab4CodeConvEN;
    if (arrFieldTab4CodeConvSel.length > 0) {
      objFieldTab4CodeConv = arrFieldTab4CodeConvSel[0];
      return objFieldTab4CodeConv;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFieldTab4CodeConvConst = await FieldTab4CodeConv_GetObjByFldIdAsync(strFldId);
        if (objFieldTab4CodeConvConst != null) {
          FieldTab4CodeConv_ReFreshThisCache(strPrjId);
          return objFieldTab4CodeConvConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFldId,
      fieldTab4CodeConv_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objFieldTab4CodeConv:所给的对象
 * @returns 对象
 */
export async function FieldTab4CodeConv_UpdateObjInLstCache(
  objFieldTab4CodeConv: clsFieldTab4CodeConvEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFieldTab4CodeConvObjLstCache = await FieldTab4CodeConv_GetObjLstCache(strPrjId);
    const obj = arrFieldTab4CodeConvObjLstCache.find((x) => x.fldId == objFieldTab4CodeConv.fldId);
    if (obj != null) {
      objFieldTab4CodeConv.fldId = obj.fldId;
      ObjectAssign(obj, objFieldTab4CodeConv);
    } else {
      arrFieldTab4CodeConvObjLstCache.push(objFieldTab4CodeConv);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      fieldTab4CodeConv_ConstructorName,
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
export function FieldTab4CodeConv_SortFunDefa(
  a: clsFieldTab4CodeConvEN,
  b: clsFieldTab4CodeConvEN,
): number {
  return a.fldId.localeCompare(b.fldId);
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
export function FieldTab4CodeConv_SortFunDefa2Fld(
  a: clsFieldTab4CodeConvEN,
  b: clsFieldTab4CodeConvEN,
): number {
  if (a.prjId == b.prjId) return a.codeTabId.localeCompare(b.codeTabId);
  else return a.prjId.localeCompare(b.prjId);
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
export function FieldTab4CodeConv_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFieldTab4CodeConvEN.con_FldId:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          return a.fldId.localeCompare(b.fldId);
        };
      case clsFieldTab4CodeConvEN.con_PrjId:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsFieldTab4CodeConvEN.con_CodeTabId:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          if (a.codeTabId == null) return -1;
          if (b.codeTabId == null) return 1;
          return a.codeTabId.localeCompare(b.codeTabId);
        };
      case clsFieldTab4CodeConvEN.con_CodeTabNameId:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          if (a.codeTabNameId == null) return -1;
          if (b.codeTabNameId == null) return 1;
          return a.codeTabNameId.localeCompare(b.codeTabNameId);
        };
      case clsFieldTab4CodeConvEN.con_CodeTabCodeId:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          if (a.codeTabCodeId == null) return -1;
          if (b.codeTabCodeId == null) return 1;
          return a.codeTabCodeId.localeCompare(b.codeTabCodeId);
        };
      case clsFieldTab4CodeConvEN.con_UpdDate:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFieldTab4CodeConvEN.con_UpdUser:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFieldTab4CodeConvEN.con_Memo:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FieldTab4CodeConv]中不存在!(in ${fieldTab4CodeConv_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFieldTab4CodeConvEN.con_FldId:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          return b.fldId.localeCompare(a.fldId);
        };
      case clsFieldTab4CodeConvEN.con_PrjId:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsFieldTab4CodeConvEN.con_CodeTabId:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          if (b.codeTabId == null) return -1;
          if (a.codeTabId == null) return 1;
          return b.codeTabId.localeCompare(a.codeTabId);
        };
      case clsFieldTab4CodeConvEN.con_CodeTabNameId:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          if (b.codeTabNameId == null) return -1;
          if (a.codeTabNameId == null) return 1;
          return b.codeTabNameId.localeCompare(a.codeTabNameId);
        };
      case clsFieldTab4CodeConvEN.con_CodeTabCodeId:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          if (b.codeTabCodeId == null) return -1;
          if (a.codeTabCodeId == null) return 1;
          return b.codeTabCodeId.localeCompare(a.codeTabCodeId);
        };
      case clsFieldTab4CodeConvEN.con_UpdDate:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFieldTab4CodeConvEN.con_UpdUser:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFieldTab4CodeConvEN.con_Memo:
        return (a: clsFieldTab4CodeConvEN, b: clsFieldTab4CodeConvEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FieldTab4CodeConv]中不存在!(in ${fieldTab4CodeConv_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function FieldTab4CodeConv_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFieldTab4CodeConvEN.con_FldId:
      return (obj: clsFieldTab4CodeConvEN) => {
        return obj.fldId === value;
      };
    case clsFieldTab4CodeConvEN.con_PrjId:
      return (obj: clsFieldTab4CodeConvEN) => {
        return obj.prjId === value;
      };
    case clsFieldTab4CodeConvEN.con_CodeTabId:
      return (obj: clsFieldTab4CodeConvEN) => {
        return obj.codeTabId === value;
      };
    case clsFieldTab4CodeConvEN.con_CodeTabNameId:
      return (obj: clsFieldTab4CodeConvEN) => {
        return obj.codeTabNameId === value;
      };
    case clsFieldTab4CodeConvEN.con_CodeTabCodeId:
      return (obj: clsFieldTab4CodeConvEN) => {
        return obj.codeTabCodeId === value;
      };
    case clsFieldTab4CodeConvEN.con_UpdDate:
      return (obj: clsFieldTab4CodeConvEN) => {
        return obj.updDate === value;
      };
    case clsFieldTab4CodeConvEN.con_UpdUser:
      return (obj: clsFieldTab4CodeConvEN) => {
        return obj.updUser === value;
      };
    case clsFieldTab4CodeConvEN.con_Memo:
      return (obj: clsFieldTab4CodeConvEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FieldTab4CodeConv]中不存在!(in ${fieldTab4CodeConv_ConstructorName}.${strThisFuncName})`;
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
export async function FieldTab4CodeConv_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsFieldTab4CodeConvWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsFieldTab4CodeConvWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsFieldTab4CodeConvEN.con_FldId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFieldTab4CodeConvEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFieldTab4CodeConvEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFldId = strInValue;
  if (IsNullOrEmpty(strFldId) == true) {
    return '';
  }
  const objFieldTab4CodeConv = await FieldTab4CodeConv_GetObjByFldIdCache(
    strFldId,
    strPrjIdClassfy,
  );
  if (objFieldTab4CodeConv == null) return '';
  if (objFieldTab4CodeConv.GetFldValue(strOutFldName) == null) return '';
  return objFieldTab4CodeConv.GetFldValue(strOutFldName).toString();
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
export async function FieldTab4CodeConv_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsFieldTab4CodeConvWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsFieldTab4CodeConvWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsFieldTab4CodeConvEN.con_FldId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrFieldTab4CodeConv = await FieldTab4CodeConv_GetObjLstCache(strPrjIdClassfy);
  if (arrFieldTab4CodeConv == null) return [];
  let arrFieldTab4CodeConvSel = arrFieldTab4CodeConv;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFieldTab4CodeConvSel.length == 0) return [];
  return arrFieldTab4CodeConvSel.map((x) => x.fldId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FieldTab4CodeConv_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFieldTab4CodeConvEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
      const objFieldTab4CodeConv = FieldTab4CodeConv_GetObjFromJsonObj(returnObj);
      return objFieldTab4CodeConv;
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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsFieldTab4CodeConvEN.WhereFormat) == false) {
    strWhereCond = Format(clsFieldTab4CodeConvEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsFieldTab4CodeConvEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsFieldTab4CodeConvEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFieldTab4CodeConvEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFieldTab4CodeConvExObjLstCache: Array<clsFieldTab4CodeConvEN> =
      CacheHelper.Get(strKey);
    const arrFieldTab4CodeConvObjLstT = FieldTab4CodeConv_GetObjLstByJSONObjLst(
      arrFieldTab4CodeConvExObjLstCache,
    );
    return arrFieldTab4CodeConvObjLstT;
  }
  try {
    const arrFieldTab4CodeConvExObjLst = await FieldTab4CodeConv_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrFieldTab4CodeConvExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFieldTab4CodeConvExObjLst.length,
    );
    console.log(strInfo);
    return arrFieldTab4CodeConvExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsFieldTab4CodeConvEN.WhereFormat) == false) {
    strWhereCond = Format(clsFieldTab4CodeConvEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsFieldTab4CodeConvEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsFieldTab4CodeConvEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsFieldTab4CodeConvEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFieldTab4CodeConvEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFieldTab4CodeConvExObjLstCache: Array<clsFieldTab4CodeConvEN> =
      JSON.parse(strTempObjLst);
    const arrFieldTab4CodeConvObjLstT = FieldTab4CodeConv_GetObjLstByJSONObjLst(
      arrFieldTab4CodeConvExObjLstCache,
    );
    return arrFieldTab4CodeConvObjLstT;
  }
  try {
    const arrFieldTab4CodeConvExObjLst = await FieldTab4CodeConv_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsFieldTab4CodeConvEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrFieldTab4CodeConvExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFieldTab4CodeConvExObjLst.length,
    );
    console.log(strInfo);
    return arrFieldTab4CodeConvExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsFieldTab4CodeConvEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFieldTab4CodeConvObjLstCache: Array<clsFieldTab4CodeConvEN> =
      JSON.parse(strTempObjLst);
    return arrFieldTab4CodeConvObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FieldTab4CodeConv_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFieldTab4CodeConvEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
          fieldTab4CodeConv_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldTab4CodeConv_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsFieldTab4CodeConvEN.WhereFormat) == false) {
    strWhereCond = Format(clsFieldTab4CodeConvEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsFieldTab4CodeConvEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsFieldTab4CodeConvEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsFieldTab4CodeConvEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFieldTab4CodeConvEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFieldTab4CodeConvExObjLstCache: Array<clsFieldTab4CodeConvEN> =
      JSON.parse(strTempObjLst);
    const arrFieldTab4CodeConvObjLstT = FieldTab4CodeConv_GetObjLstByJSONObjLst(
      arrFieldTab4CodeConvExObjLstCache,
    );
    return arrFieldTab4CodeConvObjLstT;
  }
  try {
    const arrFieldTab4CodeConvExObjLst = await FieldTab4CodeConv_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsFieldTab4CodeConvEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrFieldTab4CodeConvExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFieldTab4CodeConvExObjLst.length,
    );
    console.log(strInfo);
    return arrFieldTab4CodeConvExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsFieldTab4CodeConvEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFieldTab4CodeConvObjLstCache: Array<clsFieldTab4CodeConvEN> =
      JSON.parse(strTempObjLst);
    return arrFieldTab4CodeConvObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FieldTab4CodeConv_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsFieldTab4CodeConvEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsFieldTab4CodeConvWApi.FieldTab4CodeConv_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsFieldTab4CodeConvWApi.FieldTab4CodeConv_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrFieldTab4CodeConvObjLstCache;
  switch (clsFieldTab4CodeConvEN.CacheModeId) {
    case '04': //sessionStorage
      arrFieldTab4CodeConvObjLstCache = await FieldTab4CodeConv_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrFieldTab4CodeConvObjLstCache = await FieldTab4CodeConv_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrFieldTab4CodeConvObjLstCache = await FieldTab4CodeConv_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrFieldTab4CodeConvObjLstCache = await FieldTab4CodeConv_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrFieldTab4CodeConvObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FieldTab4CodeConv_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFieldTab4CodeConvObjLstCache;
  switch (clsFieldTab4CodeConvEN.CacheModeId) {
    case '04': //sessionStorage
      arrFieldTab4CodeConvObjLstCache = await FieldTab4CodeConv_GetObjLstsessionStoragePureCache(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrFieldTab4CodeConvObjLstCache = await FieldTab4CodeConv_GetObjLstlocalStoragePureCache(
        strPrjId,
      );
      break;
    case '02': //ClientCache
      arrFieldTab4CodeConvObjLstCache = null;
      break;
    default:
      arrFieldTab4CodeConvObjLstCache = null;
      break;
  }
  return arrFieldTab4CodeConvObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFldIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FieldTab4CodeConv_GetSubObjLstCache(
  objFieldTab4CodeConvCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFieldTab4CodeConvObjLstCache = await FieldTab4CodeConv_GetObjLstCache(strPrjId);
  let arrFieldTab4CodeConvSel = arrFieldTab4CodeConvObjLstCache;
  if (objFieldTab4CodeConvCond.GetConditions().length == 0) return arrFieldTab4CodeConvSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objFieldTab4CodeConvCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFieldTab4CodeConvSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFieldTab4CodeConvCond),
      fieldTab4CodeConv_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFieldTab4CodeConvEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFldId:关键字列表
 * @returns 对象列表
 **/
export async function FieldTab4CodeConv_GetObjLstByFldIdLstAsync(
  arrFldId: Array<string>,
): Promise<Array<clsFieldTab4CodeConvEN>> {
  const strThisFuncName = 'GetObjLstByFldIdLstAsync';
  const strAction = 'GetObjLstByFldIdLst';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
          fieldTab4CodeConv_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldTab4CodeConv_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_GetObjLstByFldIdLstCache(
  arrFldIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByFldIdLstCache';
  try {
    const arrFieldTab4CodeConvObjLstCache = await FieldTab4CodeConv_GetObjLstCache(strPrjId);
    const arrFieldTab4CodeConvSel = arrFieldTab4CodeConvObjLstCache.filter(
      (x) => arrFldIdLst.indexOf(x.fldId) > -1,
    );
    return arrFieldTab4CodeConvSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFldIdLst.join(','),
      fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFieldTab4CodeConvEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
          fieldTab4CodeConv_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldTab4CodeConv_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFieldTab4CodeConvEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
          fieldTab4CodeConv_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldTab4CodeConv_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsFieldTab4CodeConvEN>();
  const arrFieldTab4CodeConvObjLstCache = await FieldTab4CodeConv_GetObjLstCache(strPrjId);
  if (arrFieldTab4CodeConvObjLstCache.length == 0) return arrFieldTab4CodeConvObjLstCache;
  let arrFieldTab4CodeConvSel = arrFieldTab4CodeConvObjLstCache;
  const objFieldTab4CodeConvCond = objPagerPara.conditionCollection;
  if (objFieldTab4CodeConvCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsFieldTab4CodeConvEN>();
  }
  //console.log("clsFieldTab4CodeConvWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objFieldTab4CodeConvCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFieldTab4CodeConvSel.length == 0) return arrFieldTab4CodeConvSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.sort(
        FieldTab4CodeConv_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.sort(objPagerPara.sortFun);
    }
    arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.slice(intStart, intEnd);
    return arrFieldTab4CodeConvSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      fieldTab4CodeConv_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFieldTab4CodeConvEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function FieldTab4CodeConv_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFieldTab4CodeConvEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFieldTab4CodeConvEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
          fieldTab4CodeConv_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldTab4CodeConv_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
 * @param strFldId:关键字
 * @returns 获取删除的结果
 **/
export async function FieldTab4CodeConv_DelRecordAsync(strFldId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFldId);

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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
 * @param arrFldId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function FieldTab4CodeConv_DelFieldTab4CodeConvsAsync(
  arrFldId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFieldTab4CodeConvsAsync';
  const strAction = 'DelFieldTab4CodeConvs';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
): Promise<Array<clsFieldTab4CodeConvENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrFieldTab4CodeConvObjLst = await FieldTab4CodeConv_GetObjLstCache(strPrjId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsFieldTab4CodeConvENEx>();
  const arrFieldTab4CodeConvExObjLst = arrFieldTab4CodeConvObjLst.map((obj) => {
    const cacheKey = `${obj.fldId}_${obj.prjId}`;
    if (fieldTab4CodeConvCache[cacheKey]) {
      const oldObj = fieldTab4CodeConvCache[cacheKey];
      return oldObj;
    } else {
      const newObj = FieldTab4CodeConv_CopyToEx(obj);
      arrNewObj.push(newObj);
      fieldTab4CodeConvCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await FieldTab4CodeConv_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsFieldTab4CodeConvEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrFieldTab4CodeConvExObjLst) {
      await FieldTab4CodeConv_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.fldId}_${newObj.prjId}`;
      fieldTab4CodeConvCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrFieldTab4CodeConvExObjLst.length == 0) return arrFieldTab4CodeConvExObjLst;
  let arrFieldTab4CodeConvSel: Array<clsFieldTab4CodeConvENEx> = arrFieldTab4CodeConvExObjLst;
  const objFieldTab4CodeConvCond = objPagerPara.conditionCollection;
  if (objFieldTab4CodeConvCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrFieldTab4CodeConvExObjLst;
  }
  try {
    for (const objCondition of objFieldTab4CodeConvCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFieldTab4CodeConvSel.length == 0) return arrFieldTab4CodeConvSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.sort(
        FieldTab4CodeConv_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.sort(objPagerPara.sortFun);
    }
    arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.slice(intStart, intEnd);
    return arrFieldTab4CodeConvSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      fieldTab4CodeConv_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFieldTab4CodeConvENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objFieldTab4CodeConvENS:源对象
 * @returns 目标对象=>clsFieldTab4CodeConvEN:objFieldTab4CodeConvENT
 **/
export function FieldTab4CodeConv_CopyToEx(
  objFieldTab4CodeConvENS: clsFieldTab4CodeConvEN,
): clsFieldTab4CodeConvENEx {
  const strThisFuncName = FieldTab4CodeConv_CopyToEx.name;
  const objFieldTab4CodeConvENT = new clsFieldTab4CodeConvENEx();
  try {
    ObjectAssign(objFieldTab4CodeConvENT, objFieldTab4CodeConvENS);
    return objFieldTab4CodeConvENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTab4CodeConv_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFieldTab4CodeConvENT;
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
export function FieldTab4CodeConv_FuncMapByFldName(
  strFldName: string,
  objFieldTab4CodeConvEx: clsFieldTab4CodeConvENEx,
) {
  const strThisFuncName = FieldTab4CodeConv_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsFieldTab4CodeConvEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFieldTab4CodeConvENEx.con_FldName:
      return FieldTab4CodeConv_FuncMapFldName(objFieldTab4CodeConvEx);
    case clsFieldTab4CodeConvENEx.con_CodeFldName:
      return FieldTab4CodeConv_FuncMapCodeFldName(objFieldTab4CodeConvEx);
    case clsFieldTab4CodeConvENEx.con_CodeNameFldName:
      return FieldTab4CodeConv_FuncMapCodeNameFldName(objFieldTab4CodeConvEx);
    case clsFieldTab4CodeConvENEx.con_TabName:
      return FieldTab4CodeConv_FuncMapTabName(objFieldTab4CodeConvEx);
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
export function FieldTab4CodeConv_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFieldTab4CodeConvENEx.con_FldName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsFieldTab4CodeConvENEx.con_CodeTabName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          if (a.codeTabName === null && b.codeTabName === null) return 0;
          if (a.codeTabName === null) return -1;
          if (b.codeTabName === null) return 1;
          return a.codeTabName.localeCompare(b.codeTabName);
        };
      case clsFieldTab4CodeConvENEx.con_CodeFldName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          if (a.codeFldName === null && b.codeFldName === null) return 0;
          if (a.codeFldName === null) return -1;
          if (b.codeFldName === null) return 1;
          return a.codeFldName.localeCompare(b.codeFldName);
        };
      case clsFieldTab4CodeConvENEx.con_CodeNameFldName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          if (a.codeNameFldName === null && b.codeNameFldName === null) return 0;
          if (a.codeNameFldName === null) return -1;
          if (b.codeNameFldName === null) return 1;
          return a.codeNameFldName.localeCompare(b.codeNameFldName);
        };
      case clsFieldTab4CodeConvENEx.con_TabName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      default:
        return FieldTab4CodeConv_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFieldTab4CodeConvENEx.con_FldName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsFieldTab4CodeConvENEx.con_CodeTabName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          if (a.codeTabName === null && b.codeTabName === null) return 0;
          if (a.codeTabName === null) return 1;
          if (b.codeTabName === null) return -1;
          return b.codeTabName.localeCompare(a.codeTabName);
        };
      case clsFieldTab4CodeConvENEx.con_CodeFldName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          if (a.codeFldName === null && b.codeFldName === null) return 0;
          if (a.codeFldName === null) return 1;
          if (b.codeFldName === null) return -1;
          return b.codeFldName.localeCompare(a.codeFldName);
        };
      case clsFieldTab4CodeConvENEx.con_CodeNameFldName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          if (a.codeNameFldName === null && b.codeNameFldName === null) return 0;
          if (a.codeNameFldName === null) return 1;
          if (b.codeNameFldName === null) return -1;
          return b.codeNameFldName.localeCompare(a.codeNameFldName);
        };
      case clsFieldTab4CodeConvENEx.con_TabName:
        return (a: clsFieldTab4CodeConvENEx, b: clsFieldTab4CodeConvENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      default:
        return FieldTab4CodeConv_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFieldTab4CodeConvS:源对象
 **/
export async function FieldTab4CodeConv_FuncMapFldName(
  objFieldTab4CodeConv: clsFieldTab4CodeConvENEx,
) {
  const strThisFuncName = FieldTab4CodeConv_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objFieldTab4CodeConv.fldName) == true) {
      const vFieldTabSimFldId = objFieldTab4CodeConv.fldId;
      if (IsNullOrEmpty(objFieldTab4CodeConv.prjId) == true) {
        const strMsg = `函数映射[FldName]数据出错,prjId不能为空!(in ${fieldTab4CodeConv_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objFieldTab4CodeConv.prjId,
      );
      objFieldTab4CodeConv.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001295)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTab4CodeConv_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFieldTab4CodeConvS:源对象
 **/
export async function FieldTab4CodeConv_FuncMapCodeFldName(
  objFieldTab4CodeConv: clsFieldTab4CodeConvENEx,
) {
  const strThisFuncName = FieldTab4CodeConv_FuncMapCodeFldName.name;
  try {
    if (IsNullOrEmpty(objFieldTab4CodeConv.codeFldName) == true) {
      const vFieldTabSimFldId = objFieldTab4CodeConv.codeTabCodeId;
      if (IsNullOrEmpty(objFieldTab4CodeConv.prjId) == true) {
        const strMsg = `函数映射[CodeFldName]数据出错,prjId不能为空!(in ${fieldTab4CodeConv_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objFieldTab4CodeConv.prjId,
      );
      objFieldTab4CodeConv.codeFldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001296)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTab4CodeConv_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFieldTab4CodeConvS:源对象
 **/
export async function FieldTab4CodeConv_FuncMapCodeNameFldName(
  objFieldTab4CodeConv: clsFieldTab4CodeConvENEx,
) {
  const strThisFuncName = FieldTab4CodeConv_FuncMapCodeNameFldName.name;
  try {
    if (IsNullOrEmpty(objFieldTab4CodeConv.codeNameFldName) == true) {
      const vFieldTabSimFldId = objFieldTab4CodeConv.codeTabNameId;
      if (IsNullOrEmpty(objFieldTab4CodeConv.prjId) == true) {
        const strMsg = `函数映射[CodeNameFldName]数据出错,prjId不能为空!(in ${fieldTab4CodeConv_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objFieldTab4CodeConv.prjId,
      );
      objFieldTab4CodeConv.codeNameFldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001297)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTab4CodeConv_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFieldTab4CodeConvS:源对象
 **/
export async function FieldTab4CodeConv_FuncMapTabName(
  objFieldTab4CodeConv: clsFieldTab4CodeConvENEx,
) {
  const strThisFuncName = FieldTab4CodeConv_FuncMapTabName.name;
  try {
    if (IsNullOrEmpty(objFieldTab4CodeConv.tabName) == true) {
      const vPrjTabSimTabId = objFieldTab4CodeConv.codeTabId;
      if (IsNullOrEmpty(objFieldTab4CodeConv.prjId) == true) {
        const strMsg = `函数映射[TabName]数据出错,prjId不能为空!(in ${fieldTab4CodeConv_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        objFieldTab4CodeConv.prjId,
      );
      objFieldTab4CodeConv.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001298)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_DelFieldTab4CodeConvsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFieldTab4CodeConvsByCondAsync';
  const strAction = 'DelFieldTab4CodeConvsByCond';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
 * @param objFieldTab4CodeConvEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FieldTab4CodeConv_AddNewRecordAsync(
  objFieldTab4CodeConvEN: clsFieldTab4CodeConvEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objFieldTab4CodeConvEN.fldId === null || objFieldTab4CodeConvEN.fldId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFieldTab4CodeConvEN);
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTab4CodeConvEN, config);
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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
 * @param objFieldTab4CodeConvEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FieldTab4CodeConv_AddNewRecordWithMaxIdAsync(
  objFieldTab4CodeConvEN: clsFieldTab4CodeConvEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTab4CodeConvEN, config);
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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_AddNewObjSave(
  objFieldTab4CodeConvEN: clsFieldTab4CodeConvEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    FieldTab4CodeConv_CheckPropertyNew(objFieldTab4CodeConvEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${fieldTab4CodeConv_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await FieldTab4CodeConv_IsExistAsync(objFieldTab4CodeConvEN.fldId);
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objFieldTab4CodeConvEN.fldId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await FieldTab4CodeConv_AddNewRecordAsync(objFieldTab4CodeConvEN);
    if (returnBool == true) {
      FieldTab4CodeConv_ReFreshCache(objFieldTab4CodeConvEN.prjId);
    } else {
      const strInfo = `添加[字段4代码转换(FieldTab4CodeConv)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objFieldTab4CodeConvEN.fldId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${fieldTab4CodeConv_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function FieldTab4CodeConv_UpdateObjSave(
  objFieldTab4CodeConvEN: clsFieldTab4CodeConvEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFieldTab4CodeConvEN.sfUpdFldSetStr = objFieldTab4CodeConvEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objFieldTab4CodeConvEN.fldId == '' || objFieldTab4CodeConvEN.fldId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    FieldTab4CodeConv_CheckProperty4Update(objFieldTab4CodeConvEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${fieldTab4CodeConv_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await FieldTab4CodeConv_UpdateRecordAsync(objFieldTab4CodeConvEN);
    if (returnBool == true) {
      FieldTab4CodeConv_ReFreshCache(objFieldTab4CodeConvEN.prjId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${fieldTab4CodeConv_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFieldTab4CodeConvEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FieldTab4CodeConv_AddNewRecordWithReturnKeyAsync(
  objFieldTab4CodeConvEN: clsFieldTab4CodeConvEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTab4CodeConvEN, config);
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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
 * @param objFieldTab4CodeConvEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FieldTab4CodeConv_UpdateRecordAsync(
  objFieldTab4CodeConvEN: clsFieldTab4CodeConvEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFieldTab4CodeConvEN.sfUpdFldSetStr === undefined ||
    objFieldTab4CodeConvEN.sfUpdFldSetStr === null ||
    objFieldTab4CodeConvEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFieldTab4CodeConvEN.fldId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTab4CodeConvEN, config);
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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
 * @param objFieldTab4CodeConvEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FieldTab4CodeConv_EditRecordExAsync(
  objFieldTab4CodeConvEN: clsFieldTab4CodeConvEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFieldTab4CodeConvEN.sfUpdFldSetStr === undefined ||
    objFieldTab4CodeConvEN.sfUpdFldSetStr === null ||
    objFieldTab4CodeConvEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFieldTab4CodeConvEN.fldId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTab4CodeConvEN, config);
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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
 * @param objFieldTab4CodeConvEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FieldTab4CodeConv_UpdateWithConditionAsync(
  objFieldTab4CodeConvEN: clsFieldTab4CodeConvEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFieldTab4CodeConvEN.sfUpdFldSetStr === undefined ||
    objFieldTab4CodeConvEN.sfUpdFldSetStr === null ||
    objFieldTab4CodeConvEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFieldTab4CodeConvEN.fldId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);
  objFieldTab4CodeConvEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTab4CodeConvEN, config);
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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_IsExistRecordCache(
  objFieldTab4CodeConvCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFieldTab4CodeConvObjLstCache = await FieldTab4CodeConv_GetObjLstCache(strPrjId);
  if (arrFieldTab4CodeConvObjLstCache == null) return false;
  let arrFieldTab4CodeConvSel = arrFieldTab4CodeConvObjLstCache;
  if (objFieldTab4CodeConvCond.GetConditions().length == 0)
    return arrFieldTab4CodeConvSel.length > 0 ? true : false;
  try {
    for (const objCondition of objFieldTab4CodeConvCond.GetConditions()) {
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
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFieldTab4CodeConvSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFieldTab4CodeConvCond),
      fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_IsExistCache(strFldId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrFieldTab4CodeConvObjLstCache = await FieldTab4CodeConv_GetObjLstCache(strPrjId);
  if (arrFieldTab4CodeConvObjLstCache == null) return false;
  try {
    const arrFieldTab4CodeConvSel = arrFieldTab4CodeConvObjLstCache.filter(
      (x) => x.fldId == strFldId,
    );
    if (arrFieldTab4CodeConvSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFldId,
      fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_IsExistAsync(strFldId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
 * @param objFieldTab4CodeConvCond:条件对象
 * @returns 对象列表记录数
 */
export async function FieldTab4CodeConv_GetRecCountByCondCache(
  objFieldTab4CodeConvCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFieldTab4CodeConvObjLstCache = await FieldTab4CodeConv_GetObjLstCache(strPrjId);
  if (arrFieldTab4CodeConvObjLstCache == null) return 0;
  let arrFieldTab4CodeConvSel = arrFieldTab4CodeConvObjLstCache;
  if (objFieldTab4CodeConvCond.GetConditions().length == 0) return arrFieldTab4CodeConvSel.length;
  try {
    for (const objCondition of objFieldTab4CodeConvCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFieldTab4CodeConvSel = arrFieldTab4CodeConvSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFieldTab4CodeConvSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFieldTab4CodeConvCond),
      fieldTab4CodeConv_ConstructorName,
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
export async function FieldTab4CodeConv_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(fieldTab4CodeConv_Controller, strAction);

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
        fieldTab4CodeConv_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4CodeConv_ConstructorName,
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
export function FieldTab4CodeConv_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FieldTab4CodeConv_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsFieldTab4CodeConvWApi.clsFieldTab4CodeConvWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsFieldTab4CodeConvWApi.clsFieldTab4CodeConvWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsFieldTab4CodeConvEN._CurrTabName, strPrjId);
  switch (clsFieldTab4CodeConvEN.CacheModeId) {
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
  clsFieldTab4CodeConvEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function FieldTab4CodeConv_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsFieldTab4CodeConvWApi.FieldTab4CodeConv_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsFieldTab4CodeConvWApi.FieldTab4CodeConv_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsFieldTab4CodeConvEN._CurrTabName, strPrjId);
    switch (clsFieldTab4CodeConvEN.CacheModeId) {
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
    clsFieldTab4CodeConvEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function FieldTab4CodeConv_GetLastRefreshTime(): string {
  if (clsFieldTab4CodeConvEN._RefreshTimeLst.length == 0) return '';
  return clsFieldTab4CodeConvEN._RefreshTimeLst[clsFieldTab4CodeConvEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FieldTab4CodeConv_CheckPropertyNew(
  pobjFieldTab4CodeConvEN: clsFieldTab4CodeConvEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.prjId) === true ||
    pobjFieldTab4CodeConvEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 字段4代码转换)!(clsFieldTab4CodeConvBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.fldId) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.fldId}(clsFieldTab4CodeConvBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.prjId) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.prjId}(clsFieldTab4CodeConvBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.codeTabId) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.codeTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码表Id(codeTabId)]的长度不能超过8(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.codeTabId}(clsFieldTab4CodeConvBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.codeTabNameId) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.codeTabNameId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码_名Id(codeTabNameId)]的长度不能超过8(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.codeTabNameId}(clsFieldTab4CodeConvBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.codeTabCodeId) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.codeTabCodeId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码Id(codeTabCodeId)]的长度不能超过8(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.codeTabCodeId}(clsFieldTab4CodeConvBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.updDate) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.updDate}(clsFieldTab4CodeConvBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.updUser) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.updUser}(clsFieldTab4CodeConvBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.memo) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.memo}(clsFieldTab4CodeConvBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.fldId) == false &&
    undefined !== pobjFieldTab4CodeConvEN.fldId &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id(fldId)]的值:[${pobjFieldTab4CodeConvEN.fldId}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.prjId) == false &&
    undefined !== pobjFieldTab4CodeConvEN.prjId &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjFieldTab4CodeConvEN.prjId}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.codeTabId) == false &&
    undefined !== pobjFieldTab4CodeConvEN.codeTabId &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.codeTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码表Id(codeTabId)]的值:[${pobjFieldTab4CodeConvEN.codeTabId}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.codeTabNameId) == false &&
    undefined !== pobjFieldTab4CodeConvEN.codeTabNameId &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.codeTabNameId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码_名Id(codeTabNameId)]的值:[${pobjFieldTab4CodeConvEN.codeTabNameId}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.codeTabCodeId) == false &&
    undefined !== pobjFieldTab4CodeConvEN.codeTabCodeId &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.codeTabCodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码Id(codeTabCodeId)]的值:[${pobjFieldTab4CodeConvEN.codeTabCodeId}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.updDate) == false &&
    undefined !== pobjFieldTab4CodeConvEN.updDate &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjFieldTab4CodeConvEN.updDate}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.updUser) == false &&
    undefined !== pobjFieldTab4CodeConvEN.updUser &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjFieldTab4CodeConvEN.updUser}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.memo) == false &&
    undefined !== pobjFieldTab4CodeConvEN.memo &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFieldTab4CodeConvEN.memo}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.prjId) == false &&
    pobjFieldTab4CodeConvEN.prjId != '[nuull]' &&
    GetStrLen(pobjFieldTab4CodeConvEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程Id]作为外键字段,长度应该为4(In 字段4代码转换)!(clsFieldTab4CodeConvBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FieldTab4CodeConv_CheckProperty4Update(
  pobjFieldTab4CodeConvEN: clsFieldTab4CodeConvEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.fldId) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.fldId}(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.prjId) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.prjId}(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.codeTabId) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.codeTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码表Id(codeTabId)]的长度不能超过8(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.codeTabId}(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.codeTabNameId) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.codeTabNameId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码_名Id(codeTabNameId)]的长度不能超过8(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.codeTabNameId}(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.codeTabCodeId) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.codeTabCodeId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码Id(codeTabCodeId)]的长度不能超过8(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.codeTabCodeId}(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.updDate) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.updDate}(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.updUser) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.updUser}(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.memo) == false &&
    GetStrLen(pobjFieldTab4CodeConvEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 字段4代码转换(FieldTab4CodeConv))!值:${pobjFieldTab4CodeConvEN.memo}(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.fldId) == false &&
    undefined !== pobjFieldTab4CodeConvEN.fldId &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id(fldId)]的值:[${pobjFieldTab4CodeConvEN.fldId}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.prjId) == false &&
    undefined !== pobjFieldTab4CodeConvEN.prjId &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjFieldTab4CodeConvEN.prjId}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.codeTabId) == false &&
    undefined !== pobjFieldTab4CodeConvEN.codeTabId &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.codeTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码表Id(codeTabId)]的值:[${pobjFieldTab4CodeConvEN.codeTabId}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.codeTabNameId) == false &&
    undefined !== pobjFieldTab4CodeConvEN.codeTabNameId &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.codeTabNameId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码_名Id(codeTabNameId)]的值:[${pobjFieldTab4CodeConvEN.codeTabNameId}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.codeTabCodeId) == false &&
    undefined !== pobjFieldTab4CodeConvEN.codeTabCodeId &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.codeTabCodeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码Id(codeTabCodeId)]的值:[${pobjFieldTab4CodeConvEN.codeTabCodeId}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.updDate) == false &&
    undefined !== pobjFieldTab4CodeConvEN.updDate &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjFieldTab4CodeConvEN.updDate}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.updUser) == false &&
    undefined !== pobjFieldTab4CodeConvEN.updUser &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjFieldTab4CodeConvEN.updUser}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.memo) == false &&
    undefined !== pobjFieldTab4CodeConvEN.memo &&
    tzDataType.isString(pobjFieldTab4CodeConvEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFieldTab4CodeConvEN.memo}], 非法,应该为字符型(In 字段4代码转换(FieldTab4CodeConv))!(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.fldId) === true ||
    pobjFieldTab4CodeConvEN.fldId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[字段Id]不能为空(In 字段4代码转换)!(clsFieldTab4CodeConvBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFieldTab4CodeConvEN.prjId) == false &&
    pobjFieldTab4CodeConvEN.prjId != '[nuull]' &&
    GetStrLen(pobjFieldTab4CodeConvEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程Id]作为外键字段,长度应该为4(In 字段4代码转换)!(clsFieldTab4CodeConvBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FieldTab4CodeConv_GetJSONStrByObj(
  pobjFieldTab4CodeConvEN: clsFieldTab4CodeConvEN,
): string {
  pobjFieldTab4CodeConvEN.sfUpdFldSetStr = pobjFieldTab4CodeConvEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFieldTab4CodeConvEN);
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
export function FieldTab4CodeConv_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsFieldTab4CodeConvEN> {
  let arrFieldTab4CodeConvObjLst = new Array<clsFieldTab4CodeConvEN>();
  if (strJSON === '') {
    return arrFieldTab4CodeConvObjLst;
  }
  try {
    arrFieldTab4CodeConvObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFieldTab4CodeConvObjLst;
  }
  return arrFieldTab4CodeConvObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFieldTab4CodeConvObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FieldTab4CodeConv_GetObjLstByJSONObjLst(
  arrFieldTab4CodeConvObjLstS: Array<clsFieldTab4CodeConvEN>,
): Array<clsFieldTab4CodeConvEN> {
  const arrFieldTab4CodeConvObjLst = new Array<clsFieldTab4CodeConvEN>();
  for (const objInFor of arrFieldTab4CodeConvObjLstS) {
    const obj1 = FieldTab4CodeConv_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFieldTab4CodeConvObjLst.push(obj1);
  }
  return arrFieldTab4CodeConvObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FieldTab4CodeConv_GetObjByJSONStr(strJSON: string): clsFieldTab4CodeConvEN {
  let pobjFieldTab4CodeConvEN = new clsFieldTab4CodeConvEN();
  if (strJSON === '') {
    return pobjFieldTab4CodeConvEN;
  }
  try {
    pobjFieldTab4CodeConvEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFieldTab4CodeConvEN;
  }
  return pobjFieldTab4CodeConvEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FieldTab4CodeConv_GetCombineCondition(
  objFieldTab4CodeConvCond: clsFieldTab4CodeConvEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4CodeConvCond.dicFldComparisonOp,
      clsFieldTab4CodeConvEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objFieldTab4CodeConvCond.dicFldComparisonOp[clsFieldTab4CodeConvEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4CodeConvEN.con_FldId,
      objFieldTab4CodeConvCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4CodeConvCond.dicFldComparisonOp,
      clsFieldTab4CodeConvEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objFieldTab4CodeConvCond.dicFldComparisonOp[clsFieldTab4CodeConvEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4CodeConvEN.con_PrjId,
      objFieldTab4CodeConvCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4CodeConvCond.dicFldComparisonOp,
      clsFieldTab4CodeConvEN.con_CodeTabId,
    ) == true
  ) {
    const strComparisonOpCodeTabId: string =
      objFieldTab4CodeConvCond.dicFldComparisonOp[clsFieldTab4CodeConvEN.con_CodeTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4CodeConvEN.con_CodeTabId,
      objFieldTab4CodeConvCond.codeTabId,
      strComparisonOpCodeTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4CodeConvCond.dicFldComparisonOp,
      clsFieldTab4CodeConvEN.con_CodeTabNameId,
    ) == true
  ) {
    const strComparisonOpCodeTabNameId: string =
      objFieldTab4CodeConvCond.dicFldComparisonOp[clsFieldTab4CodeConvEN.con_CodeTabNameId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4CodeConvEN.con_CodeTabNameId,
      objFieldTab4CodeConvCond.codeTabNameId,
      strComparisonOpCodeTabNameId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4CodeConvCond.dicFldComparisonOp,
      clsFieldTab4CodeConvEN.con_CodeTabCodeId,
    ) == true
  ) {
    const strComparisonOpCodeTabCodeId: string =
      objFieldTab4CodeConvCond.dicFldComparisonOp[clsFieldTab4CodeConvEN.con_CodeTabCodeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4CodeConvEN.con_CodeTabCodeId,
      objFieldTab4CodeConvCond.codeTabCodeId,
      strComparisonOpCodeTabCodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4CodeConvCond.dicFldComparisonOp,
      clsFieldTab4CodeConvEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFieldTab4CodeConvCond.dicFldComparisonOp[clsFieldTab4CodeConvEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4CodeConvEN.con_UpdDate,
      objFieldTab4CodeConvCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4CodeConvCond.dicFldComparisonOp,
      clsFieldTab4CodeConvEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFieldTab4CodeConvCond.dicFldComparisonOp[clsFieldTab4CodeConvEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4CodeConvEN.con_UpdUser,
      objFieldTab4CodeConvCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4CodeConvCond.dicFldComparisonOp,
      clsFieldTab4CodeConvEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFieldTab4CodeConvCond.dicFldComparisonOp[clsFieldTab4CodeConvEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4CodeConvEN.con_Memo,
      objFieldTab4CodeConvCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFieldTab4CodeConvENS:源对象
 * @param objFieldTab4CodeConvENT:目标对象
 */
export function FieldTab4CodeConv_GetObjFromJsonObj(
  objFieldTab4CodeConvENS: clsFieldTab4CodeConvEN,
): clsFieldTab4CodeConvEN {
  const objFieldTab4CodeConvENT: clsFieldTab4CodeConvEN = new clsFieldTab4CodeConvEN();
  ObjectAssign(objFieldTab4CodeConvENT, objFieldTab4CodeConvENS);
  return objFieldTab4CodeConvENT;
}
