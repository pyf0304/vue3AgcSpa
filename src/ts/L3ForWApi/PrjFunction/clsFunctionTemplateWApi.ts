/**
 * 类名:clsFunctionTemplateWApi
 * 表名:FunctionTemplate(00050312)
 * 版本:2025.05.08.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/10 20:42:13
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 函数模板(FunctionTemplate)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月10日.
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
import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const functionTemplate_Controller = 'FunctionTemplateApi';
export const functionTemplate_ConstructorName = 'functionTemplate';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFunctionTemplateId:关键字
 * @returns 对象
 **/
export async function FunctionTemplate_GetObjByFunctionTemplateIdAsync(
  strFunctionTemplateId: string,
): Promise<clsFunctionTemplateEN | null> {
  const strThisFuncName = 'GetObjByFunctionTemplateIdAsync';

  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    const strMsg = Format(
      '参数:[strFunctionTemplateId]不能为空!(In clsFunctionTemplateWApi.GetObjByFunctionTemplateIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateId]的长度:[{0}]不正确!(clsFunctionTemplateWApi.GetObjByFunctionTemplateIdAsync)',
      strFunctionTemplateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFunctionTemplateId';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

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
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objFunctionTemplate = FunctionTemplate_GetObjFromJsonObj(returnObj);
      return objFunctionTemplate;
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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
 * @param strFunctionTemplateId:所给的关键字
 * @returns 对象
 */
export async function FunctionTemplate_GetObjByFunctionTemplateIdlocalStorage(
  strFunctionTemplateId: string,
) {
  const strThisFuncName = 'GetObjByFunctionTemplateIdlocalStorage';

  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    const strMsg = Format(
      '参数:[strFunctionTemplateId]不能为空!(In clsFunctionTemplateWApi.GetObjByFunctionTemplateIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateId]的长度:[{0}]不正确!(clsFunctionTemplateWApi.GetObjByFunctionTemplateIdlocalStorage)',
      strFunctionTemplateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFunctionTemplateEN._CurrTabName, strFunctionTemplateId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFunctionTemplateCache: clsFunctionTemplateEN = JSON.parse(strTempObj);
    return objFunctionTemplateCache;
  }
  try {
    const objFunctionTemplate = await FunctionTemplate_GetObjByFunctionTemplateIdAsync(
      strFunctionTemplateId,
    );
    if (objFunctionTemplate != null) {
      localStorage.setItem(strKey, JSON.stringify(objFunctionTemplate));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFunctionTemplate;
    }
    return objFunctionTemplate;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFunctionTemplateId,
      functionTemplate_ConstructorName,
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
 * @param strFunctionTemplateId:所给的关键字
 * @returns 对象
 */
export async function FunctionTemplate_GetObjByFunctionTemplateIdCache(
  strFunctionTemplateId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFunctionTemplateIdCache';

  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    const strMsg = Format(
      '参数:[strFunctionTemplateId]不能为空!(In clsFunctionTemplateWApi.GetObjByFunctionTemplateIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateId]的长度:[{0}]不正确!(clsFunctionTemplateWApi.GetObjByFunctionTemplateIdCache)',
      strFunctionTemplateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFunctionTemplateObjLstCache = await FunctionTemplate_GetObjLstCache();
  try {
    const arrFunctionTemplateSel = arrFunctionTemplateObjLstCache.filter(
      (x) => x.functionTemplateId == strFunctionTemplateId,
    );
    let objFunctionTemplate: clsFunctionTemplateEN;
    if (arrFunctionTemplateSel.length > 0) {
      objFunctionTemplate = arrFunctionTemplateSel[0];
      return objFunctionTemplate;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFunctionTemplateConst = await FunctionTemplate_GetObjByFunctionTemplateIdAsync(
          strFunctionTemplateId,
        );
        if (objFunctionTemplateConst != null) {
          FunctionTemplate_ReFreshThisCache();
          return objFunctionTemplateConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFunctionTemplateId,
      functionTemplate_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objFunctionTemplate:所给的对象
 * @returns 对象
 */
export async function FunctionTemplate_UpdateObjInLstCache(
  objFunctionTemplate: clsFunctionTemplateEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFunctionTemplateObjLstCache = await FunctionTemplate_GetObjLstCache();
    const obj = arrFunctionTemplateObjLstCache.find(
      (x) => x.functionTemplateName == objFunctionTemplate.functionTemplateName,
    );
    if (obj != null) {
      objFunctionTemplate.functionTemplateId = obj.functionTemplateId;
      ObjectAssign(obj, objFunctionTemplate);
    } else {
      arrFunctionTemplateObjLstCache.push(objFunctionTemplate);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      functionTemplate_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FunctionTemplate_SortFunDefa(
  a: clsFunctionTemplateEN,
  b: clsFunctionTemplateEN,
): number {
  return a.functionTemplateId.localeCompare(b.functionTemplateId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FunctionTemplate_SortFunDefa2Fld(
  a: clsFunctionTemplateEN,
  b: clsFunctionTemplateEN,
): number {
  if (a.functionTemplateName == b.functionTemplateName)
    return a.functionTemplateENName.localeCompare(b.functionTemplateENName);
  else return a.functionTemplateName.localeCompare(b.functionTemplateName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FunctionTemplate_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFunctionTemplateEN.con_FunctionTemplateId:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          return a.functionTemplateId.localeCompare(b.functionTemplateId);
        };
      case clsFunctionTemplateEN.con_FunctionTemplateName:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          return a.functionTemplateName.localeCompare(b.functionTemplateName);
        };
      case clsFunctionTemplateEN.con_FunctionTemplateENName:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          return a.functionTemplateENName.localeCompare(b.functionTemplateENName);
        };
      case clsFunctionTemplateEN.con_ProgLangTypeId:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsFunctionTemplateEN.con_CreateUserId:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          return a.createUserId.localeCompare(b.createUserId);
        };
      case clsFunctionTemplateEN.con_UpdDate:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFunctionTemplateEN.con_UpdUser:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFunctionTemplateEN.con_Memo:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FunctionTemplate]中不存在!(in ${functionTemplate_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFunctionTemplateEN.con_FunctionTemplateId:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          return b.functionTemplateId.localeCompare(a.functionTemplateId);
        };
      case clsFunctionTemplateEN.con_FunctionTemplateName:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          return b.functionTemplateName.localeCompare(a.functionTemplateName);
        };
      case clsFunctionTemplateEN.con_FunctionTemplateENName:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          return b.functionTemplateENName.localeCompare(a.functionTemplateENName);
        };
      case clsFunctionTemplateEN.con_ProgLangTypeId:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsFunctionTemplateEN.con_CreateUserId:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          return b.createUserId.localeCompare(a.createUserId);
        };
      case clsFunctionTemplateEN.con_UpdDate:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFunctionTemplateEN.con_UpdUser:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFunctionTemplateEN.con_Memo:
        return (a: clsFunctionTemplateEN, b: clsFunctionTemplateEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FunctionTemplate]中不存在!(in ${functionTemplate_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFunctionTemplateId:所给的关键字
 * @returns 对象
 */
export async function FunctionTemplate_GetNameByFunctionTemplateIdCache(
  strFunctionTemplateId: string,
) {
  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    const strMsg = Format(
      '参数:[strFunctionTemplateId]不能为空!(In clsFunctionTemplateWApi.GetNameByFunctionTemplateIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFunctionTemplateId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFunctionTemplateId]的长度:[{0}]不正确!(clsFunctionTemplateWApi.GetNameByFunctionTemplateIdCache)',
      strFunctionTemplateId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFunctionTemplateObjLstCache = await FunctionTemplate_GetObjLstCache();
  if (arrFunctionTemplateObjLstCache == null) return '';
  try {
    const arrFunctionTemplateSel = arrFunctionTemplateObjLstCache.filter(
      (x) => x.functionTemplateId == strFunctionTemplateId,
    );
    let objFunctionTemplate: clsFunctionTemplateEN;
    if (arrFunctionTemplateSel.length > 0) {
      objFunctionTemplate = arrFunctionTemplateSel[0];
      return objFunctionTemplate.functionTemplateName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strFunctionTemplateId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function FunctionTemplate_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFunctionTemplateEN.con_FunctionTemplateId:
      return (obj: clsFunctionTemplateEN) => {
        return obj.functionTemplateId === value;
      };
    case clsFunctionTemplateEN.con_FunctionTemplateName:
      return (obj: clsFunctionTemplateEN) => {
        return obj.functionTemplateName === value;
      };
    case clsFunctionTemplateEN.con_FunctionTemplateENName:
      return (obj: clsFunctionTemplateEN) => {
        return obj.functionTemplateENName === value;
      };
    case clsFunctionTemplateEN.con_ProgLangTypeId:
      return (obj: clsFunctionTemplateEN) => {
        return obj.progLangTypeId === value;
      };
    case clsFunctionTemplateEN.con_CreateUserId:
      return (obj: clsFunctionTemplateEN) => {
        return obj.createUserId === value;
      };
    case clsFunctionTemplateEN.con_UpdDate:
      return (obj: clsFunctionTemplateEN) => {
        return obj.updDate === value;
      };
    case clsFunctionTemplateEN.con_UpdUser:
      return (obj: clsFunctionTemplateEN) => {
        return obj.updUser === value;
      };
    case clsFunctionTemplateEN.con_Memo:
      return (obj: clsFunctionTemplateEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FunctionTemplate]中不存在!(in ${functionTemplate_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function FunctionTemplate_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsFunctionTemplateEN.con_FunctionTemplateId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFunctionTemplateEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFunctionTemplateEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFunctionTemplateId = strInValue;
  if (IsNullOrEmpty(strFunctionTemplateId) == true) {
    return '';
  }
  const objFunctionTemplate = await FunctionTemplate_GetObjByFunctionTemplateIdCache(
    strFunctionTemplateId,
  );
  if (objFunctionTemplate == null) return '';
  if (objFunctionTemplate.GetFldValue(strOutFldName) == null) return '';
  return objFunctionTemplate.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function FunctionTemplate_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsFunctionTemplateEN.con_FunctionTemplateId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrFunctionTemplate = await FunctionTemplate_GetObjLstCache();
  if (arrFunctionTemplate == null) return [];
  let arrFunctionTemplateSel = arrFunctionTemplate;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFunctionTemplateSel.length == 0) return [];
  return arrFunctionTemplateSel.map((x) => x.functionTemplateId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FunctionTemplate_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
export async function FunctionTemplate_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
export async function FunctionTemplate_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
export async function FunctionTemplate_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFunctionTemplateEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

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
      const objFunctionTemplate = FunctionTemplate_GetObjFromJsonObj(returnObj);
      return objFunctionTemplate;
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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
export async function FunctionTemplate_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFunctionTemplateEN._CurrTabName;
  if (IsNullOrEmpty(clsFunctionTemplateEN.WhereFormat) == false) {
    strWhereCond = clsFunctionTemplateEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFunctionTemplateEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFunctionTemplateEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFunctionTemplateExObjLstCache: Array<clsFunctionTemplateEN> = CacheHelper.Get(strKey);
    const arrFunctionTemplateObjLstT = FunctionTemplate_GetObjLstByJSONObjLst(
      arrFunctionTemplateExObjLstCache,
    );
    return arrFunctionTemplateObjLstT;
  }
  try {
    const arrFunctionTemplateExObjLst = await FunctionTemplate_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrFunctionTemplateExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFunctionTemplateExObjLst.length,
    );
    console.log(strInfo);
    return arrFunctionTemplateExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      functionTemplate_ConstructorName,
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
export async function FunctionTemplate_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFunctionTemplateEN._CurrTabName;
  if (IsNullOrEmpty(clsFunctionTemplateEN.WhereFormat) == false) {
    strWhereCond = clsFunctionTemplateEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFunctionTemplateEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFunctionTemplateEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFunctionTemplateExObjLstCache: Array<clsFunctionTemplateEN> =
      JSON.parse(strTempObjLst);
    const arrFunctionTemplateObjLstT = FunctionTemplate_GetObjLstByJSONObjLst(
      arrFunctionTemplateExObjLstCache,
    );
    return arrFunctionTemplateObjLstT;
  }
  try {
    const arrFunctionTemplateExObjLst = await FunctionTemplate_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrFunctionTemplateExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFunctionTemplateExObjLst.length,
    );
    console.log(strInfo);
    return arrFunctionTemplateExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      functionTemplate_ConstructorName,
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
export async function FunctionTemplate_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFunctionTemplateEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFunctionTemplateObjLstCache: Array<clsFunctionTemplateEN> = JSON.parse(strTempObjLst);
    return arrFunctionTemplateObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FunctionTemplate_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFunctionTemplateEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

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
          functionTemplate_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionTemplate_GetObjLstByJSONObjLst(returnObjLst);
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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
export async function FunctionTemplate_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFunctionTemplateEN._CurrTabName;
  if (IsNullOrEmpty(clsFunctionTemplateEN.WhereFormat) == false) {
    strWhereCond = clsFunctionTemplateEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFunctionTemplateEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFunctionTemplateEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFunctionTemplateExObjLstCache: Array<clsFunctionTemplateEN> =
      JSON.parse(strTempObjLst);
    const arrFunctionTemplateObjLstT = FunctionTemplate_GetObjLstByJSONObjLst(
      arrFunctionTemplateExObjLstCache,
    );
    return arrFunctionTemplateObjLstT;
  }
  try {
    const arrFunctionTemplateExObjLst = await FunctionTemplate_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrFunctionTemplateExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFunctionTemplateExObjLst.length,
    );
    console.log(strInfo);
    return arrFunctionTemplateExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      functionTemplate_ConstructorName,
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
export async function FunctionTemplate_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFunctionTemplateEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFunctionTemplateObjLstCache: Array<clsFunctionTemplateEN> = JSON.parse(strTempObjLst);
    return arrFunctionTemplateObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FunctionTemplate_GetObjLstCache(): Promise<Array<clsFunctionTemplateEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrFunctionTemplateObjLstCache;
  switch (clsFunctionTemplateEN.CacheModeId) {
    case '04': //sessionStorage
      arrFunctionTemplateObjLstCache = await FunctionTemplate_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrFunctionTemplateObjLstCache = await FunctionTemplate_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrFunctionTemplateObjLstCache = await FunctionTemplate_GetObjLstClientCache();
      break;
    default:
      arrFunctionTemplateObjLstCache = await FunctionTemplate_GetObjLstClientCache();
      break;
  }
  return arrFunctionTemplateObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FunctionTemplate_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFunctionTemplateObjLstCache;
  switch (clsFunctionTemplateEN.CacheModeId) {
    case '04': //sessionStorage
      arrFunctionTemplateObjLstCache = await FunctionTemplate_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrFunctionTemplateObjLstCache = await FunctionTemplate_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrFunctionTemplateObjLstCache = null;
      break;
    default:
      arrFunctionTemplateObjLstCache = null;
      break;
  }
  return arrFunctionTemplateObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFunctionTemplateIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FunctionTemplate_GetSubObjLstCache(
  objFunctionTemplateCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFunctionTemplateObjLstCache = await FunctionTemplate_GetObjLstCache();
  let arrFunctionTemplateSel = arrFunctionTemplateObjLstCache;
  if (objFunctionTemplateCond.GetConditions().length == 0) return arrFunctionTemplateSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objFunctionTemplateCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFunctionTemplateSel = arrFunctionTemplateSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFunctionTemplateSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFunctionTemplateCond),
      functionTemplate_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFunctionTemplateEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFunctionTemplateId:关键字列表
 * @returns 对象列表
 **/
export async function FunctionTemplate_GetObjLstByFunctionTemplateIdLstAsync(
  arrFunctionTemplateId: Array<string>,
): Promise<Array<clsFunctionTemplateEN>> {
  const strThisFuncName = 'GetObjLstByFunctionTemplateIdLstAsync';
  const strAction = 'GetObjLstByFunctionTemplateIdLst';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFunctionTemplateId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          functionTemplate_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionTemplate_GetObjLstByJSONObjLst(returnObjLst);
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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
 * @param arrstrFunctionTemplateIdLst:关键字列表
 * @returns 对象列表
 */
export async function FunctionTemplate_GetObjLstByFunctionTemplateIdLstCache(
  arrFunctionTemplateIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByFunctionTemplateIdLstCache';
  try {
    const arrFunctionTemplateObjLstCache = await FunctionTemplate_GetObjLstCache();
    const arrFunctionTemplateSel = arrFunctionTemplateObjLstCache.filter(
      (x) => arrFunctionTemplateIdLst.indexOf(x.functionTemplateId) > -1,
    );
    return arrFunctionTemplateSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFunctionTemplateIdLst.join(','),
      functionTemplate_ConstructorName,
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
export async function FunctionTemplate_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFunctionTemplateEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

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
          functionTemplate_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionTemplate_GetObjLstByJSONObjLst(returnObjLst);
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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
export async function FunctionTemplate_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFunctionTemplateEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

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
          functionTemplate_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionTemplate_GetObjLstByJSONObjLst(returnObjLst);
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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
export async function FunctionTemplate_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsFunctionTemplateEN>();
  const arrFunctionTemplateObjLstCache = await FunctionTemplate_GetObjLstCache();
  if (arrFunctionTemplateObjLstCache.length == 0) return arrFunctionTemplateObjLstCache;
  let arrFunctionTemplateSel = arrFunctionTemplateObjLstCache;
  const objFunctionTemplateCond = objPagerPara.conditionCollection;
  if (objFunctionTemplateCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsFunctionTemplateEN>();
  }
  //console.log("clsFunctionTemplateWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objFunctionTemplateCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFunctionTemplateSel = arrFunctionTemplateSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFunctionTemplateSel.length == 0) return arrFunctionTemplateSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFunctionTemplateSel = arrFunctionTemplateSel.sort(
        FunctionTemplate_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFunctionTemplateSel = arrFunctionTemplateSel.sort(objPagerPara.sortFun);
    }
    arrFunctionTemplateSel = arrFunctionTemplateSel.slice(intStart, intEnd);
    return arrFunctionTemplateSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      functionTemplate_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFunctionTemplateEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function FunctionTemplate_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFunctionTemplateEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFunctionTemplateEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

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
          functionTemplate_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FunctionTemplate_GetObjLstByJSONObjLst(returnObjLst);
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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
 * @param strFunctionTemplateId:关键字
 * @returns 获取删除的结果
 **/
export async function FunctionTemplate_DelRecordAsync(
  strFunctionTemplateId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFunctionTemplateId);

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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
 * @param arrFunctionTemplateId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function FunctionTemplate_DelFunctionTemplatesAsync(
  arrFunctionTemplateId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFunctionTemplatesAsync';
  const strAction = 'DelFunctionTemplates';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFunctionTemplateId, config);
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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
export async function FunctionTemplate_DelFunctionTemplatesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFunctionTemplatesByCondAsync';
  const strAction = 'DelFunctionTemplatesByCond';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
 * @param objFunctionTemplateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FunctionTemplate_AddNewRecordAsync(
  objFunctionTemplateEN: clsFunctionTemplateEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFunctionTemplateEN);
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTemplateEN, config);
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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
 * @param objFunctionTemplateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FunctionTemplate_AddNewRecordWithMaxIdAsync(
  objFunctionTemplateEN: clsFunctionTemplateEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTemplateEN, config);
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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
export async function FunctionTemplate_AddNewObjSave(
  objFunctionTemplateEN: clsFunctionTemplateEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    FunctionTemplate_CheckPropertyNew(objFunctionTemplateEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${functionTemplate_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FunctionTemplate_CheckUniCond4Add(objFunctionTemplateEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await FunctionTemplate_AddNewRecordWithMaxIdAsync(objFunctionTemplateEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      FunctionTemplate_ReFreshCache();
    } else {
      const strInfo = `添加[函数模板(FunctionTemplate)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${functionTemplate_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function FunctionTemplate_CheckUniCond4Add(
  objFunctionTemplateEN: clsFunctionTemplateEN,
): Promise<boolean> {
  const strUniquenessCondition = FunctionTemplate_GetUniCondStr(objFunctionTemplateEN);
  const bolIsExistCondition = await FunctionTemplate_IsExistRecordAsync(strUniquenessCondition);
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
export async function FunctionTemplate_CheckUniCond4Update(
  objFunctionTemplateEN: clsFunctionTemplateEN,
): Promise<boolean> {
  const strUniquenessCondition = FunctionTemplate_GetUniCondStr4Update(objFunctionTemplateEN);
  const bolIsExistCondition = await FunctionTemplate_IsExistRecordAsync(strUniquenessCondition);
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
export async function FunctionTemplate_UpdateObjSave(
  objFunctionTemplateEN: clsFunctionTemplateEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFunctionTemplateEN.sfUpdFldSetStr = objFunctionTemplateEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objFunctionTemplateEN.functionTemplateId == '' ||
    objFunctionTemplateEN.functionTemplateId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    FunctionTemplate_CheckProperty4Update(objFunctionTemplateEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${functionTemplate_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FunctionTemplate_CheckUniCond4Update(objFunctionTemplateEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await FunctionTemplate_UpdateRecordAsync(objFunctionTemplateEN);
    if (returnBool == true) {
      FunctionTemplate_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${functionTemplate_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFunctionTemplateEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FunctionTemplate_AddNewRecordWithReturnKeyAsync(
  objFunctionTemplateEN: clsFunctionTemplateEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTemplateEN, config);
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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
 * @param objFunctionTemplateEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FunctionTemplate_UpdateRecordAsync(
  objFunctionTemplateEN: clsFunctionTemplateEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFunctionTemplateEN.sfUpdFldSetStr === undefined ||
    objFunctionTemplateEN.sfUpdFldSetStr === null ||
    objFunctionTemplateEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunctionTemplateEN.functionTemplateId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTemplateEN, config);
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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
 * @param objFunctionTemplateEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FunctionTemplate_EditRecordExAsync(
  objFunctionTemplateEN: clsFunctionTemplateEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFunctionTemplateEN.sfUpdFldSetStr === undefined ||
    objFunctionTemplateEN.sfUpdFldSetStr === null ||
    objFunctionTemplateEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunctionTemplateEN.functionTemplateId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTemplateEN, config);
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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
 * @param objFunctionTemplateEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FunctionTemplate_UpdateWithConditionAsync(
  objFunctionTemplateEN: clsFunctionTemplateEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFunctionTemplateEN.sfUpdFldSetStr === undefined ||
    objFunctionTemplateEN.sfUpdFldSetStr === null ||
    objFunctionTemplateEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFunctionTemplateEN.functionTemplateId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);
  objFunctionTemplateEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFunctionTemplateEN, config);
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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
export async function FunctionTemplate_IsExistRecordCache(
  objFunctionTemplateCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFunctionTemplateObjLstCache = await FunctionTemplate_GetObjLstCache();
  if (arrFunctionTemplateObjLstCache == null) return false;
  let arrFunctionTemplateSel = arrFunctionTemplateObjLstCache;
  if (objFunctionTemplateCond.GetConditions().length == 0)
    return arrFunctionTemplateSel.length > 0 ? true : false;
  try {
    for (const objCondition of objFunctionTemplateCond.GetConditions()) {
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
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFunctionTemplateSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFunctionTemplateCond),
      functionTemplate_ConstructorName,
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
export async function FunctionTemplate_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
export async function FunctionTemplate_IsExistCache(strFunctionTemplateId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrFunctionTemplateObjLstCache = await FunctionTemplate_GetObjLstCache();
  if (arrFunctionTemplateObjLstCache == null) return false;
  try {
    const arrFunctionTemplateSel = arrFunctionTemplateObjLstCache.filter(
      (x) => x.functionTemplateId == strFunctionTemplateId,
    );
    if (arrFunctionTemplateSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFunctionTemplateId,
      functionTemplate_ConstructorName,
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
export async function FunctionTemplate_IsExistAsync(
  strFunctionTemplateId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
export async function FunctionTemplate_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
 * @param objFunctionTemplateCond:条件对象
 * @returns 对象列表记录数
 */
export async function FunctionTemplate_GetRecCountByCondCache(
  objFunctionTemplateCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFunctionTemplateObjLstCache = await FunctionTemplate_GetObjLstCache();
  if (arrFunctionTemplateObjLstCache == null) return 0;
  let arrFunctionTemplateSel = arrFunctionTemplateObjLstCache;
  if (objFunctionTemplateCond.GetConditions().length == 0) return arrFunctionTemplateSel.length;
  try {
    for (const objCondition of objFunctionTemplateCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFunctionTemplateSel = arrFunctionTemplateSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFunctionTemplateSel = arrFunctionTemplateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFunctionTemplateSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFunctionTemplateCond),
      functionTemplate_ConstructorName,
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
export async function FunctionTemplate_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
export async function FunctionTemplate_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(functionTemplate_Controller, strAction);

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
        functionTemplate_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        functionTemplate_ConstructorName,
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
export function FunctionTemplate_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FunctionTemplate_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsFunctionTemplateEN._CurrTabName;
  switch (clsFunctionTemplateEN.CacheModeId) {
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
  clsFunctionTemplateEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function FunctionTemplate_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsFunctionTemplateEN._CurrTabName;
    switch (clsFunctionTemplateEN.CacheModeId) {
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
    clsFunctionTemplateEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function FunctionTemplate_GetLastRefreshTime(): string {
  if (clsFunctionTemplateEN._RefreshTimeLst.length == 0) return '';
  return clsFunctionTemplateEN._RefreshTimeLst[clsFunctionTemplateEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function FunctionTemplate_BindDdl_FunctionTemplateIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_FunctionTemplateIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FunctionTemplateIdInDivCache");
  const arrObjLstSel = await FunctionTemplate_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsFunctionTemplateEN.con_FunctionTemplateId,
    clsFunctionTemplateEN.con_FunctionTemplateName,
    '函数模板...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function FunctionTemplate_GetArrFunctionTemplate() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FunctionTemplateIdInDivCache");
  const arrFunctionTemplate = new Array<clsFunctionTemplateEN>();
  const arrObjLstSel = await FunctionTemplate_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsFunctionTemplateEN();
  obj0.functionTemplateId = '0';
  obj0.functionTemplateName = '选函数模板...';
  arrFunctionTemplate.push(obj0);
  arrObjLstSel.forEach((x) => arrFunctionTemplate.push(x));
  return arrFunctionTemplate;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FunctionTemplate_CheckPropertyNew(pobjFunctionTemplateEN: clsFunctionTemplateEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjFunctionTemplateEN.functionTemplateName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[函数模板名]不能为空(In 函数模板)!(clsFunctionTemplateBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjFunctionTemplateEN.functionTemplateENName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[函数模板英文名]不能为空(In 函数模板)!(clsFunctionTemplateBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.progLangTypeId) === true ||
    pobjFunctionTemplateEN.progLangTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[编程语言类型Id]不能为空(In 函数模板)!(clsFunctionTemplateBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjFunctionTemplateEN.createUserId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[建立用户Id]不能为空(In 函数模板)!(clsFunctionTemplateBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.functionTemplateId) == false &&
    GetStrLen(pobjFunctionTemplateEN.functionTemplateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数模板Id(functionTemplateId)]的长度不能超过4(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.functionTemplateId}(clsFunctionTemplateBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.functionTemplateName) == false &&
    GetStrLen(pobjFunctionTemplateEN.functionTemplateName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数模板名(functionTemplateName)]的长度不能超过50(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.functionTemplateName}(clsFunctionTemplateBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.functionTemplateENName) == false &&
    GetStrLen(pobjFunctionTemplateEN.functionTemplateENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数模板英文名(functionTemplateENName)]的长度不能超过50(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.functionTemplateENName}(clsFunctionTemplateBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.progLangTypeId) == false &&
    GetStrLen(pobjFunctionTemplateEN.progLangTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.progLangTypeId}(clsFunctionTemplateBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.createUserId) == false &&
    GetStrLen(pobjFunctionTemplateEN.createUserId) > 18
  ) {
    throw new Error(
      `(errid:Watl000413)字段[建立用户Id(createUserId)]的长度不能超过18(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.createUserId}(clsFunctionTemplateBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.updDate) == false &&
    GetStrLen(pobjFunctionTemplateEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.updDate}(clsFunctionTemplateBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.updUser) == false &&
    GetStrLen(pobjFunctionTemplateEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.updUser}(clsFunctionTemplateBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.memo) == false &&
    GetStrLen(pobjFunctionTemplateEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.memo}(clsFunctionTemplateBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.functionTemplateId) == false &&
    undefined !== pobjFunctionTemplateEN.functionTemplateId &&
    tzDataType.isString(pobjFunctionTemplateEN.functionTemplateId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数模板Id(functionTemplateId)]的值:[${pobjFunctionTemplateEN.functionTemplateId}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.functionTemplateName) == false &&
    undefined !== pobjFunctionTemplateEN.functionTemplateName &&
    tzDataType.isString(pobjFunctionTemplateEN.functionTemplateName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数模板名(functionTemplateName)]的值:[${pobjFunctionTemplateEN.functionTemplateName}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.functionTemplateENName) == false &&
    undefined !== pobjFunctionTemplateEN.functionTemplateENName &&
    tzDataType.isString(pobjFunctionTemplateEN.functionTemplateENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数模板英文名(functionTemplateENName)]的值:[${pobjFunctionTemplateEN.functionTemplateENName}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.progLangTypeId) == false &&
    undefined !== pobjFunctionTemplateEN.progLangTypeId &&
    tzDataType.isString(pobjFunctionTemplateEN.progLangTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[编程语言类型Id(progLangTypeId)]的值:[${pobjFunctionTemplateEN.progLangTypeId}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.createUserId) == false &&
    undefined !== pobjFunctionTemplateEN.createUserId &&
    tzDataType.isString(pobjFunctionTemplateEN.createUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[建立用户Id(createUserId)]的值:[${pobjFunctionTemplateEN.createUserId}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.updDate) == false &&
    undefined !== pobjFunctionTemplateEN.updDate &&
    tzDataType.isString(pobjFunctionTemplateEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjFunctionTemplateEN.updDate}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.updUser) == false &&
    undefined !== pobjFunctionTemplateEN.updUser &&
    tzDataType.isString(pobjFunctionTemplateEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjFunctionTemplateEN.updUser}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.memo) == false &&
    undefined !== pobjFunctionTemplateEN.memo &&
    tzDataType.isString(pobjFunctionTemplateEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFunctionTemplateEN.memo}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FunctionTemplate_CheckProperty4Update(
  pobjFunctionTemplateEN: clsFunctionTemplateEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.functionTemplateId) == false &&
    GetStrLen(pobjFunctionTemplateEN.functionTemplateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数模板Id(functionTemplateId)]的长度不能超过4(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.functionTemplateId}(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.functionTemplateName) == false &&
    GetStrLen(pobjFunctionTemplateEN.functionTemplateName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数模板名(functionTemplateName)]的长度不能超过50(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.functionTemplateName}(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.functionTemplateENName) == false &&
    GetStrLen(pobjFunctionTemplateEN.functionTemplateENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数模板英文名(functionTemplateENName)]的长度不能超过50(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.functionTemplateENName}(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.progLangTypeId) == false &&
    GetStrLen(pobjFunctionTemplateEN.progLangTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.progLangTypeId}(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.createUserId) == false &&
    GetStrLen(pobjFunctionTemplateEN.createUserId) > 18
  ) {
    throw new Error(
      `(errid:Watl000416)字段[建立用户Id(createUserId)]的长度不能超过18(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.createUserId}(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.updDate) == false &&
    GetStrLen(pobjFunctionTemplateEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.updDate}(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.updUser) == false &&
    GetStrLen(pobjFunctionTemplateEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.updUser}(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.memo) == false &&
    GetStrLen(pobjFunctionTemplateEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 函数模板(FunctionTemplate))!值:${pobjFunctionTemplateEN.memo}(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.functionTemplateId) == false &&
    undefined !== pobjFunctionTemplateEN.functionTemplateId &&
    tzDataType.isString(pobjFunctionTemplateEN.functionTemplateId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数模板Id(functionTemplateId)]的值:[${pobjFunctionTemplateEN.functionTemplateId}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.functionTemplateName) == false &&
    undefined !== pobjFunctionTemplateEN.functionTemplateName &&
    tzDataType.isString(pobjFunctionTemplateEN.functionTemplateName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数模板名(functionTemplateName)]的值:[${pobjFunctionTemplateEN.functionTemplateName}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.functionTemplateENName) == false &&
    undefined !== pobjFunctionTemplateEN.functionTemplateENName &&
    tzDataType.isString(pobjFunctionTemplateEN.functionTemplateENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数模板英文名(functionTemplateENName)]的值:[${pobjFunctionTemplateEN.functionTemplateENName}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.progLangTypeId) == false &&
    undefined !== pobjFunctionTemplateEN.progLangTypeId &&
    tzDataType.isString(pobjFunctionTemplateEN.progLangTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[编程语言类型Id(progLangTypeId)]的值:[${pobjFunctionTemplateEN.progLangTypeId}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.createUserId) == false &&
    undefined !== pobjFunctionTemplateEN.createUserId &&
    tzDataType.isString(pobjFunctionTemplateEN.createUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[建立用户Id(createUserId)]的值:[${pobjFunctionTemplateEN.createUserId}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.updDate) == false &&
    undefined !== pobjFunctionTemplateEN.updDate &&
    tzDataType.isString(pobjFunctionTemplateEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjFunctionTemplateEN.updDate}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.updUser) == false &&
    undefined !== pobjFunctionTemplateEN.updUser &&
    tzDataType.isString(pobjFunctionTemplateEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjFunctionTemplateEN.updUser}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFunctionTemplateEN.memo) == false &&
    undefined !== pobjFunctionTemplateEN.memo &&
    tzDataType.isString(pobjFunctionTemplateEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFunctionTemplateEN.memo}], 非法,应该为字符型(In 函数模板(FunctionTemplate))!(clsFunctionTemplateBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FunctionTemplate_GetJSONStrByObj(
  pobjFunctionTemplateEN: clsFunctionTemplateEN,
): string {
  pobjFunctionTemplateEN.sfUpdFldSetStr = pobjFunctionTemplateEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFunctionTemplateEN);
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
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function FunctionTemplate_GetObjLstByJSONStr(strJSON: string): Array<clsFunctionTemplateEN> {
  let arrFunctionTemplateObjLst = new Array<clsFunctionTemplateEN>();
  if (strJSON === '') {
    return arrFunctionTemplateObjLst;
  }
  try {
    arrFunctionTemplateObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFunctionTemplateObjLst;
  }
  return arrFunctionTemplateObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFunctionTemplateObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FunctionTemplate_GetObjLstByJSONObjLst(
  arrFunctionTemplateObjLstS: Array<clsFunctionTemplateEN>,
): Array<clsFunctionTemplateEN> {
  const arrFunctionTemplateObjLst = new Array<clsFunctionTemplateEN>();
  for (const objInFor of arrFunctionTemplateObjLstS) {
    const obj1 = FunctionTemplate_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFunctionTemplateObjLst.push(obj1);
  }
  return arrFunctionTemplateObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FunctionTemplate_GetObjByJSONStr(strJSON: string): clsFunctionTemplateEN {
  let pobjFunctionTemplateEN = new clsFunctionTemplateEN();
  if (strJSON === '') {
    return pobjFunctionTemplateEN;
  }
  try {
    pobjFunctionTemplateEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFunctionTemplateEN;
  }
  return pobjFunctionTemplateEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FunctionTemplate_GetCombineCondition(
  objFunctionTemplateCond: clsFunctionTemplateEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateCond.dicFldComparisonOp,
      clsFunctionTemplateEN.con_FunctionTemplateId,
    ) == true
  ) {
    const strComparisonOpFunctionTemplateId: string =
      objFunctionTemplateCond.dicFldComparisonOp[clsFunctionTemplateEN.con_FunctionTemplateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateEN.con_FunctionTemplateId,
      objFunctionTemplateCond.functionTemplateId,
      strComparisonOpFunctionTemplateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateCond.dicFldComparisonOp,
      clsFunctionTemplateEN.con_FunctionTemplateName,
    ) == true
  ) {
    const strComparisonOpFunctionTemplateName: string =
      objFunctionTemplateCond.dicFldComparisonOp[clsFunctionTemplateEN.con_FunctionTemplateName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateEN.con_FunctionTemplateName,
      objFunctionTemplateCond.functionTemplateName,
      strComparisonOpFunctionTemplateName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateCond.dicFldComparisonOp,
      clsFunctionTemplateEN.con_FunctionTemplateENName,
    ) == true
  ) {
    const strComparisonOpFunctionTemplateENName: string =
      objFunctionTemplateCond.dicFldComparisonOp[clsFunctionTemplateEN.con_FunctionTemplateENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateEN.con_FunctionTemplateENName,
      objFunctionTemplateCond.functionTemplateENName,
      strComparisonOpFunctionTemplateENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateCond.dicFldComparisonOp,
      clsFunctionTemplateEN.con_ProgLangTypeId,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId: string =
      objFunctionTemplateCond.dicFldComparisonOp[clsFunctionTemplateEN.con_ProgLangTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateEN.con_ProgLangTypeId,
      objFunctionTemplateCond.progLangTypeId,
      strComparisonOpProgLangTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateCond.dicFldComparisonOp,
      clsFunctionTemplateEN.con_CreateUserId,
    ) == true
  ) {
    const strComparisonOpCreateUserId: string =
      objFunctionTemplateCond.dicFldComparisonOp[clsFunctionTemplateEN.con_CreateUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateEN.con_CreateUserId,
      objFunctionTemplateCond.createUserId,
      strComparisonOpCreateUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateCond.dicFldComparisonOp,
      clsFunctionTemplateEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFunctionTemplateCond.dicFldComparisonOp[clsFunctionTemplateEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateEN.con_UpdDate,
      objFunctionTemplateCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateCond.dicFldComparisonOp,
      clsFunctionTemplateEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFunctionTemplateCond.dicFldComparisonOp[clsFunctionTemplateEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateEN.con_UpdUser,
      objFunctionTemplateCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFunctionTemplateCond.dicFldComparisonOp,
      clsFunctionTemplateEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFunctionTemplateCond.dicFldComparisonOp[clsFunctionTemplateEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFunctionTemplateEN.con_Memo,
      objFunctionTemplateCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FunctionTemplate(函数模板),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFunctionTemplateName: 函数模板名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FunctionTemplate_GetUniCondStr(
  objFunctionTemplateEN: clsFunctionTemplateEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and FunctionTemplateName = '{0}'",
    objFunctionTemplateEN.functionTemplateName,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FunctionTemplate(函数模板),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFunctionTemplateName: 函数模板名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FunctionTemplate_GetUniCondStr4Update(
  objFunctionTemplateEN: clsFunctionTemplateEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and FunctionTemplateId <> '{0}'",
    objFunctionTemplateEN.functionTemplateId,
  );
  strWhereCond += Format(
    " and FunctionTemplateName = '{0}'",
    objFunctionTemplateEN.functionTemplateName,
  );
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFunctionTemplateENS:源对象
 * @param objFunctionTemplateENT:目标对象
 */
export function FunctionTemplate_GetObjFromJsonObj(
  objFunctionTemplateENS: clsFunctionTemplateEN,
): clsFunctionTemplateEN {
  const objFunctionTemplateENT: clsFunctionTemplateEN = new clsFunctionTemplateEN();
  ObjectAssign(objFunctionTemplateENT, objFunctionTemplateENS);
  return objFunctionTemplateENT;
}
