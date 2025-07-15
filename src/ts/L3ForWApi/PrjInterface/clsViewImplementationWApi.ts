/**
 * 类名:clsViewImplementationWApi
 * 表名:ViewImplementation(00050396)
 * 版本:2025.05.11.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/12 14:49:54
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 界面实现方式(ViewImplementation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月12日.
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
import { clsViewImplementationEN } from '@/ts/L0Entity/PrjInterface/clsViewImplementationEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const viewImplementation_Controller = 'ViewImplementationApi';
export const viewImplementation_ConstructorName = 'viewImplementation';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strViewImplId:关键字
 * @returns 对象
 **/
export async function ViewImplementation_GetObjByViewImplIdAsync(
  strViewImplId: string,
): Promise<clsViewImplementationEN | null> {
  const strThisFuncName = 'GetObjByViewImplIdAsync';

  if (IsNullOrEmpty(strViewImplId) == true) {
    const strMsg = Format(
      '参数:[strViewImplId]不能为空!(In clsViewImplementationWApi.GetObjByViewImplIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewImplId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strViewImplId]的长度:[{0}]不正确!(clsViewImplementationWApi.GetObjByViewImplIdAsync)',
      strViewImplId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByViewImplId';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewImplId,
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
      const objViewImplementation = ViewImplementation_GetObjFromJsonObj(returnObj);
      return objViewImplementation;
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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
 * @param strViewImplId:所给的关键字
 * @returns 对象
 */
export async function ViewImplementation_GetObjByViewImplIdlocalStorage(strViewImplId: string) {
  const strThisFuncName = 'GetObjByViewImplIdlocalStorage';

  if (IsNullOrEmpty(strViewImplId) == true) {
    const strMsg = Format(
      '参数:[strViewImplId]不能为空!(In clsViewImplementationWApi.GetObjByViewImplIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewImplId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strViewImplId]的长度:[{0}]不正确!(clsViewImplementationWApi.GetObjByViewImplIdlocalStorage)',
      strViewImplId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsViewImplementationEN._CurrTabName, strViewImplId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objViewImplementationCache: clsViewImplementationEN = JSON.parse(strTempObj);
    return objViewImplementationCache;
  }
  try {
    const objViewImplementation = await ViewImplementation_GetObjByViewImplIdAsync(strViewImplId);
    if (objViewImplementation != null) {
      localStorage.setItem(strKey, JSON.stringify(objViewImplementation));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objViewImplementation;
    }
    return objViewImplementation;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewImplId,
      viewImplementation_ConstructorName,
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
 * @param strViewImplId:所给的关键字
 * @returns 对象
 */
export async function ViewImplementation_GetObjByViewImplIdCache(
  strViewImplId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByViewImplIdCache';

  if (IsNullOrEmpty(strViewImplId) == true) {
    const strMsg = Format(
      '参数:[strViewImplId]不能为空!(In clsViewImplementationWApi.GetObjByViewImplIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewImplId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strViewImplId]的长度:[{0}]不正确!(clsViewImplementationWApi.GetObjByViewImplIdCache)',
      strViewImplId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewImplementationObjLstCache = await ViewImplementation_GetObjLstCache();
  try {
    const arrViewImplementationSel = arrViewImplementationObjLstCache.filter(
      (x) => x.viewImplId == strViewImplId,
    );
    let objViewImplementation: clsViewImplementationEN;
    if (arrViewImplementationSel.length > 0) {
      objViewImplementation = arrViewImplementationSel[0];
      return objViewImplementation;
    } else {
      if (bolTryAsyncOnce == true) {
        const objViewImplementationConst = await ViewImplementation_GetObjByViewImplIdAsync(
          strViewImplId,
        );
        if (objViewImplementationConst != null) {
          ViewImplementation_ReFreshThisCache();
          return objViewImplementationConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewImplId,
      viewImplementation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objViewImplementation:所给的对象
 * @returns 对象
 */
export async function ViewImplementation_UpdateObjInLstCache(
  objViewImplementation: clsViewImplementationEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrViewImplementationObjLstCache = await ViewImplementation_GetObjLstCache();
    const obj = arrViewImplementationObjLstCache.find(
      (x) => x.viewImplName == objViewImplementation.viewImplName,
    );
    if (obj != null) {
      objViewImplementation.viewImplId = obj.viewImplId;
      ObjectAssign(obj, objViewImplementation);
    } else {
      arrViewImplementationObjLstCache.push(objViewImplementation);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      viewImplementation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewImplementation_SortFunDefa(
  a: clsViewImplementationEN,
  b: clsViewImplementationEN,
): number {
  return a.viewImplId.localeCompare(b.viewImplId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewImplementation_SortFunDefa2Fld(
  a: clsViewImplementationEN,
  b: clsViewImplementationEN,
): number {
  if (a.viewImplName == b.viewImplName) return a.viewImplENName.localeCompare(b.viewImplENName);
  else return a.viewImplName.localeCompare(b.viewImplName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewImplementation_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewImplementationEN.con_ViewImplId:
        return (a: clsViewImplementationEN, b: clsViewImplementationEN) => {
          return a.viewImplId.localeCompare(b.viewImplId);
        };
      case clsViewImplementationEN.con_ViewImplName:
        return (a: clsViewImplementationEN, b: clsViewImplementationEN) => {
          return a.viewImplName.localeCompare(b.viewImplName);
        };
      case clsViewImplementationEN.con_ViewImplENName:
        return (a: clsViewImplementationEN, b: clsViewImplementationEN) => {
          return a.viewImplENName.localeCompare(b.viewImplENName);
        };
      case clsViewImplementationEN.con_UpdDate:
        return (a: clsViewImplementationEN, b: clsViewImplementationEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsViewImplementationEN.con_UpdUser:
        return (a: clsViewImplementationEN, b: clsViewImplementationEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsViewImplementationEN.con_Memo:
        return (a: clsViewImplementationEN, b: clsViewImplementationEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewImplementation]中不存在!(in ${viewImplementation_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewImplementationEN.con_ViewImplId:
        return (a: clsViewImplementationEN, b: clsViewImplementationEN) => {
          return b.viewImplId.localeCompare(a.viewImplId);
        };
      case clsViewImplementationEN.con_ViewImplName:
        return (a: clsViewImplementationEN, b: clsViewImplementationEN) => {
          return b.viewImplName.localeCompare(a.viewImplName);
        };
      case clsViewImplementationEN.con_ViewImplENName:
        return (a: clsViewImplementationEN, b: clsViewImplementationEN) => {
          return b.viewImplENName.localeCompare(a.viewImplENName);
        };
      case clsViewImplementationEN.con_UpdDate:
        return (a: clsViewImplementationEN, b: clsViewImplementationEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsViewImplementationEN.con_UpdUser:
        return (a: clsViewImplementationEN, b: clsViewImplementationEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsViewImplementationEN.con_Memo:
        return (a: clsViewImplementationEN, b: clsViewImplementationEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewImplementation]中不存在!(in ${viewImplementation_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strViewImplId:所给的关键字
 * @returns 对象
 */
export async function ViewImplementation_GetNameByViewImplIdCache(strViewImplId: string) {
  if (IsNullOrEmpty(strViewImplId) == true) {
    const strMsg = Format(
      '参数:[strViewImplId]不能为空!(In clsViewImplementationWApi.GetNameByViewImplIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewImplId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strViewImplId]的长度:[{0}]不正确!(clsViewImplementationWApi.GetNameByViewImplIdCache)',
      strViewImplId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewImplementationObjLstCache = await ViewImplementation_GetObjLstCache();
  if (arrViewImplementationObjLstCache == null) return '';
  try {
    const arrViewImplementationSel = arrViewImplementationObjLstCache.filter(
      (x) => x.viewImplId == strViewImplId,
    );
    let objViewImplementation: clsViewImplementationEN;
    if (arrViewImplementationSel.length > 0) {
      objViewImplementation = arrViewImplementationSel[0];
      return objViewImplementation.viewImplName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strViewImplId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ViewImplementation_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewImplementationEN.con_ViewImplId:
      return (obj: clsViewImplementationEN) => {
        return obj.viewImplId === value;
      };
    case clsViewImplementationEN.con_ViewImplName:
      return (obj: clsViewImplementationEN) => {
        return obj.viewImplName === value;
      };
    case clsViewImplementationEN.con_ViewImplENName:
      return (obj: clsViewImplementationEN) => {
        return obj.viewImplENName === value;
      };
    case clsViewImplementationEN.con_UpdDate:
      return (obj: clsViewImplementationEN) => {
        return obj.updDate === value;
      };
    case clsViewImplementationEN.con_UpdUser:
      return (obj: clsViewImplementationEN) => {
        return obj.updUser === value;
      };
    case clsViewImplementationEN.con_Memo:
      return (obj: clsViewImplementationEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewImplementation]中不存在!(in ${viewImplementation_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function ViewImplementation_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsViewImplementationEN.con_ViewImplId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsViewImplementationEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsViewImplementationEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strViewImplId = strInValue;
  if (IsNullOrEmpty(strViewImplId) == true) {
    return '';
  }
  const objViewImplementation = await ViewImplementation_GetObjByViewImplIdCache(strViewImplId);
  if (objViewImplementation == null) return '';
  if (objViewImplementation.GetFldValue(strOutFldName) == null) return '';
  return objViewImplementation.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function ViewImplementation_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsViewImplementationEN.con_ViewImplId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrViewImplementation = await ViewImplementation_GetObjLstCache();
  if (arrViewImplementation == null) return [];
  let arrViewImplementationSel = arrViewImplementation;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrViewImplementationSel = arrViewImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrViewImplementationSel = arrViewImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrViewImplementationSel = arrViewImplementationSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrViewImplementationSel = arrViewImplementationSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrViewImplementationSel = arrViewImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrViewImplementationSel = arrViewImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrViewImplementationSel = arrViewImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrViewImplementationSel = arrViewImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrViewImplementationSel = arrViewImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrViewImplementationSel = arrViewImplementationSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrViewImplementationSel.length == 0) return [];
  return arrViewImplementationSel.map((x) => x.viewImplId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewImplementation_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
export async function ViewImplementation_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
export async function ViewImplementation_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
export async function ViewImplementation_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewImplementationEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

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
      const objViewImplementation = ViewImplementation_GetObjFromJsonObj(returnObj);
      return objViewImplementation;
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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
export async function ViewImplementation_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewImplementationEN._CurrTabName;
  if (IsNullOrEmpty(clsViewImplementationEN.WhereFormat) == false) {
    strWhereCond = clsViewImplementationEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsViewImplementationEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewImplementationEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrViewImplementationExObjLstCache: Array<clsViewImplementationEN> =
      CacheHelper.Get(strKey);
    const arrViewImplementationObjLstT = ViewImplementation_GetObjLstByJSONObjLst(
      arrViewImplementationExObjLstCache,
    );
    return arrViewImplementationObjLstT;
  }
  try {
    const arrViewImplementationExObjLst = await ViewImplementation_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrViewImplementationExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewImplementationExObjLst.length,
    );
    console.log(strInfo);
    return arrViewImplementationExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewImplementation_ConstructorName,
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
export async function ViewImplementation_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewImplementationEN._CurrTabName;
  if (IsNullOrEmpty(clsViewImplementationEN.WhereFormat) == false) {
    strWhereCond = clsViewImplementationEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsViewImplementationEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewImplementationEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewImplementationExObjLstCache: Array<clsViewImplementationEN> =
      JSON.parse(strTempObjLst);
    const arrViewImplementationObjLstT = ViewImplementation_GetObjLstByJSONObjLst(
      arrViewImplementationExObjLstCache,
    );
    return arrViewImplementationObjLstT;
  }
  try {
    const arrViewImplementationExObjLst = await ViewImplementation_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrViewImplementationExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewImplementationExObjLst.length,
    );
    console.log(strInfo);
    return arrViewImplementationExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewImplementation_ConstructorName,
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
export async function ViewImplementation_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsViewImplementationEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewImplementationObjLstCache: Array<clsViewImplementationEN> =
      JSON.parse(strTempObjLst);
    return arrViewImplementationObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ViewImplementation_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewImplementationEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

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
          viewImplementation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewImplementation_GetObjLstByJSONObjLst(returnObjLst);
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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
export async function ViewImplementation_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewImplementationEN._CurrTabName;
  if (IsNullOrEmpty(clsViewImplementationEN.WhereFormat) == false) {
    strWhereCond = clsViewImplementationEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsViewImplementationEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewImplementationEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewImplementationExObjLstCache: Array<clsViewImplementationEN> =
      JSON.parse(strTempObjLst);
    const arrViewImplementationObjLstT = ViewImplementation_GetObjLstByJSONObjLst(
      arrViewImplementationExObjLstCache,
    );
    return arrViewImplementationObjLstT;
  }
  try {
    const arrViewImplementationExObjLst = await ViewImplementation_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrViewImplementationExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewImplementationExObjLst.length,
    );
    console.log(strInfo);
    return arrViewImplementationExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewImplementation_ConstructorName,
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
export async function ViewImplementation_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsViewImplementationEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewImplementationObjLstCache: Array<clsViewImplementationEN> =
      JSON.parse(strTempObjLst);
    return arrViewImplementationObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewImplementation_GetObjLstCache(): Promise<Array<clsViewImplementationEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrViewImplementationObjLstCache;
  switch (clsViewImplementationEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewImplementationObjLstCache = await ViewImplementation_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrViewImplementationObjLstCache = await ViewImplementation_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrViewImplementationObjLstCache = await ViewImplementation_GetObjLstClientCache();
      break;
    default:
      arrViewImplementationObjLstCache = await ViewImplementation_GetObjLstClientCache();
      break;
  }
  return arrViewImplementationObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewImplementation_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrViewImplementationObjLstCache;
  switch (clsViewImplementationEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewImplementationObjLstCache =
        await ViewImplementation_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrViewImplementationObjLstCache = await ViewImplementation_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrViewImplementationObjLstCache = null;
      break;
    default:
      arrViewImplementationObjLstCache = null;
      break;
  }
  return arrViewImplementationObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrViewImplIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewImplementation_GetSubObjLstCache(
  objViewImplementationCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrViewImplementationObjLstCache = await ViewImplementation_GetObjLstCache();
  let arrViewImplementationSel = arrViewImplementationObjLstCache;
  if (objViewImplementationCond.GetConditions().length == 0) return arrViewImplementationSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objViewImplementationCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewImplementationSel = arrViewImplementationSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrViewImplementationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewImplementationCond),
      viewImplementation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewImplementationEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewImplId:关键字列表
 * @returns 对象列表
 **/
export async function ViewImplementation_GetObjLstByViewImplIdLstAsync(
  arrViewImplId: Array<string>,
): Promise<Array<clsViewImplementationEN>> {
  const strThisFuncName = 'GetObjLstByViewImplIdLstAsync';
  const strAction = 'GetObjLstByViewImplIdLst';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewImplId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          viewImplementation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewImplementation_GetObjLstByJSONObjLst(returnObjLst);
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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
 * @param arrstrViewImplIdLst:关键字列表
 * @returns 对象列表
 */
export async function ViewImplementation_GetObjLstByViewImplIdLstCache(
  arrViewImplIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByViewImplIdLstCache';
  try {
    const arrViewImplementationObjLstCache = await ViewImplementation_GetObjLstCache();
    const arrViewImplementationSel = arrViewImplementationObjLstCache.filter(
      (x) => arrViewImplIdLst.indexOf(x.viewImplId) > -1,
    );
    return arrViewImplementationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewImplIdLst.join(','),
      viewImplementation_ConstructorName,
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
export async function ViewImplementation_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewImplementationEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

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
          viewImplementation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewImplementation_GetObjLstByJSONObjLst(returnObjLst);
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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
export async function ViewImplementation_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewImplementationEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

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
          viewImplementation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewImplementation_GetObjLstByJSONObjLst(returnObjLst);
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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
export async function ViewImplementation_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewImplementationEN>();
  const arrViewImplementationObjLstCache = await ViewImplementation_GetObjLstCache();
  if (arrViewImplementationObjLstCache.length == 0) return arrViewImplementationObjLstCache;
  let arrViewImplementationSel = arrViewImplementationObjLstCache;
  const objViewImplementationCond = objPagerPara.conditionCollection;
  if (objViewImplementationCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsViewImplementationEN>();
  }
  //console.log("clsViewImplementationWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objViewImplementationCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewImplementationSel = arrViewImplementationSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewImplementationSel.length == 0) return arrViewImplementationSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewImplementationSel = arrViewImplementationSel.sort(
        ViewImplementation_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewImplementationSel = arrViewImplementationSel.sort(objPagerPara.sortFun);
    }
    arrViewImplementationSel = arrViewImplementationSel.slice(intStart, intEnd);
    return arrViewImplementationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewImplementation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewImplementationEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ViewImplementation_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewImplementationEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewImplementationEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

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
          viewImplementation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewImplementation_GetObjLstByJSONObjLst(returnObjLst);
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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
 * @param strViewImplId:关键字
 * @returns 获取删除的结果
 **/
export async function ViewImplementation_DelRecordAsync(strViewImplId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strViewImplId);

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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
 * @param arrViewImplId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ViewImplementation_DelViewImplementationsAsync(
  arrViewImplId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelViewImplementationsAsync';
  const strAction = 'DelViewImplementations';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewImplId, config);
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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
export async function ViewImplementation_DelViewImplementationsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelViewImplementationsByCondAsync';
  const strAction = 'DelViewImplementationsByCond';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
 * @param objViewImplementationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewImplementation_AddNewRecordAsync(
  objViewImplementationEN: clsViewImplementationEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objViewImplementationEN);
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewImplementationEN, config);
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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
 * @param objViewImplementationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewImplementation_AddNewRecordWithMaxIdAsync(
  objViewImplementationEN: clsViewImplementationEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewImplementationEN, config);
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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
export async function ViewImplementation_AddNewObjSave(
  objViewImplementationEN: clsViewImplementationEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    ViewImplementation_CheckPropertyNew(objViewImplementationEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewImplementation_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ViewImplementation_CheckUniCond4Add(objViewImplementationEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await ViewImplementation_AddNewRecordWithMaxIdAsync(
      objViewImplementationEN,
    );
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      ViewImplementation_ReFreshCache();
    } else {
      const strInfo = `添加[界面实现方式(ViewImplementation)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${viewImplementation_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function ViewImplementation_CheckUniCond4Add(
  objViewImplementationEN: clsViewImplementationEN,
): Promise<boolean> {
  const strUniquenessCondition = ViewImplementation_GetUniCondStr(objViewImplementationEN);
  const bolIsExistCondition = await ViewImplementation_IsExistRecordAsync(strUniquenessCondition);
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
export async function ViewImplementation_CheckUniCond4Update(
  objViewImplementationEN: clsViewImplementationEN,
): Promise<boolean> {
  const strUniquenessCondition = ViewImplementation_GetUniCondStr4Update(objViewImplementationEN);
  const bolIsExistCondition = await ViewImplementation_IsExistRecordAsync(strUniquenessCondition);
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
export async function ViewImplementation_UpdateObjSave(
  objViewImplementationEN: clsViewImplementationEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objViewImplementationEN.sfUpdFldSetStr = objViewImplementationEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objViewImplementationEN.viewImplId == '' || objViewImplementationEN.viewImplId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    ViewImplementation_CheckProperty4Update(objViewImplementationEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewImplementation_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ViewImplementation_CheckUniCond4Update(objViewImplementationEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await ViewImplementation_UpdateRecordAsync(objViewImplementationEN);
    if (returnBool == true) {
      ViewImplementation_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${viewImplementation_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objViewImplementationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewImplementation_AddNewRecordWithReturnKeyAsync(
  objViewImplementationEN: clsViewImplementationEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewImplementationEN, config);
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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
 * @param objViewImplementationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewImplementation_UpdateRecordAsync(
  objViewImplementationEN: clsViewImplementationEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewImplementationEN.sfUpdFldSetStr === undefined ||
    objViewImplementationEN.sfUpdFldSetStr === null ||
    objViewImplementationEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewImplementationEN.viewImplId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewImplementationEN, config);
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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
 * @param objViewImplementationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewImplementation_EditRecordExAsync(
  objViewImplementationEN: clsViewImplementationEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objViewImplementationEN.sfUpdFldSetStr === undefined ||
    objViewImplementationEN.sfUpdFldSetStr === null ||
    objViewImplementationEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewImplementationEN.viewImplId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewImplementationEN, config);
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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
 * @param objViewImplementationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewImplementation_UpdateWithConditionAsync(
  objViewImplementationEN: clsViewImplementationEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewImplementationEN.sfUpdFldSetStr === undefined ||
    objViewImplementationEN.sfUpdFldSetStr === null ||
    objViewImplementationEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewImplementationEN.viewImplId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);
  objViewImplementationEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewImplementationEN, config);
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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
 * @param objstrViewImplIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewImplementation_IsExistRecordCache(
  objViewImplementationCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrViewImplementationObjLstCache = await ViewImplementation_GetObjLstCache();
  if (arrViewImplementationObjLstCache == null) return false;
  let arrViewImplementationSel = arrViewImplementationObjLstCache;
  if (objViewImplementationCond.GetConditions().length == 0)
    return arrViewImplementationSel.length > 0 ? true : false;
  try {
    for (const objCondition of objViewImplementationCond.GetConditions()) {
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
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewImplementationSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objViewImplementationCond),
      viewImplementation_ConstructorName,
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
export async function ViewImplementation_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
 * @param strViewImplId:所给的关键字
 * @returns 对象
 */
export async function ViewImplementation_IsExistCache(strViewImplId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrViewImplementationObjLstCache = await ViewImplementation_GetObjLstCache();
  if (arrViewImplementationObjLstCache == null) return false;
  try {
    const arrViewImplementationSel = arrViewImplementationObjLstCache.filter(
      (x) => x.viewImplId == strViewImplId,
    );
    if (arrViewImplementationSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strViewImplId,
      viewImplementation_ConstructorName,
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
 * @param strViewImplId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ViewImplementation_IsExistAsync(strViewImplId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewImplId,
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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
export async function ViewImplementation_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
 * @param objViewImplementationCond:条件对象
 * @returns 对象列表记录数
 */
export async function ViewImplementation_GetRecCountByCondCache(
  objViewImplementationCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrViewImplementationObjLstCache = await ViewImplementation_GetObjLstCache();
  if (arrViewImplementationObjLstCache == null) return 0;
  let arrViewImplementationSel = arrViewImplementationObjLstCache;
  if (objViewImplementationCond.GetConditions().length == 0) return arrViewImplementationSel.length;
  try {
    for (const objCondition of objViewImplementationCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewImplementationSel = arrViewImplementationSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewImplementationSel = arrViewImplementationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrViewImplementationSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewImplementationCond),
      viewImplementation_ConstructorName,
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
export async function ViewImplementation_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
export async function ViewImplementation_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewImplementation_Controller, strAction);

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
        viewImplementation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewImplementation_ConstructorName,
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
export function ViewImplementation_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewImplementation_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsViewImplementationEN._CurrTabName;
  switch (clsViewImplementationEN.CacheModeId) {
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
  clsViewImplementationEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ViewImplementation_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsViewImplementationEN._CurrTabName;
    switch (clsViewImplementationEN.CacheModeId) {
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
    clsViewImplementationEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function ViewImplementation_GetLastRefreshTime(): string {
  if (clsViewImplementationEN._RefreshTimeLst.length == 0) return '';
  return clsViewImplementationEN._RefreshTimeLst[
    clsViewImplementationEN._RefreshTimeLst.length - 1
  ];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function ViewImplementation_BindDdl_ViewImplIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ViewImplIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ViewImplIdInDivCache");
  const arrObjLstSel = await ViewImplementation_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsViewImplementationEN.con_ViewImplId,
    clsViewImplementationEN.con_ViewImplName,
    '界面实现方式...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function ViewImplementation_GetArrViewImplementation() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ViewImplIdInDivCache");
  const arrViewImplementation = new Array<clsViewImplementationEN>();
  const arrObjLstSel = await ViewImplementation_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsViewImplementationEN();
  obj0.viewImplId = '0';
  obj0.viewImplName = '选界面实现方式...';
  arrViewImplementation.push(obj0);
  arrObjLstSel.forEach((x) => arrViewImplementation.push(x));
  return arrViewImplementation;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewImplementation_CheckPropertyNew(
  pobjViewImplementationEN: clsViewImplementationEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjViewImplementationEN.viewImplName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[界面实现名]不能为空(In 界面实现方式)!(clsViewImplementationBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjViewImplementationEN.viewImplENName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[界面实现英文名]不能为空(In 界面实现方式)!(clsViewImplementationBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewImplementationEN.viewImplId) == false &&
    GetStrLen(pobjViewImplementationEN.viewImplId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面实现Id(viewImplId)]的长度不能超过4(In 界面实现方式(ViewImplementation))!值:${pobjViewImplementationEN.viewImplId}(clsViewImplementationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.viewImplName) == false &&
    GetStrLen(pobjViewImplementationEN.viewImplName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面实现名(viewImplName)]的长度不能超过50(In 界面实现方式(ViewImplementation))!值:${pobjViewImplementationEN.viewImplName}(clsViewImplementationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.viewImplENName) == false &&
    GetStrLen(pobjViewImplementationEN.viewImplENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面实现英文名(viewImplENName)]的长度不能超过50(In 界面实现方式(ViewImplementation))!值:${pobjViewImplementationEN.viewImplENName}(clsViewImplementationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.updDate) == false &&
    GetStrLen(pobjViewImplementationEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 界面实现方式(ViewImplementation))!值:${pobjViewImplementationEN.updDate}(clsViewImplementationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.updUser) == false &&
    GetStrLen(pobjViewImplementationEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 界面实现方式(ViewImplementation))!值:${pobjViewImplementationEN.updUser}(clsViewImplementationBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.memo) == false &&
    GetStrLen(pobjViewImplementationEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 界面实现方式(ViewImplementation))!值:${pobjViewImplementationEN.memo}(clsViewImplementationBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewImplementationEN.viewImplId) == false &&
    undefined !== pobjViewImplementationEN.viewImplId &&
    tzDataType.isString(pobjViewImplementationEN.viewImplId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面实现Id(viewImplId)]的值:[${pobjViewImplementationEN.viewImplId}], 非法,应该为字符型(In 界面实现方式(ViewImplementation))!(clsViewImplementationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.viewImplName) == false &&
    undefined !== pobjViewImplementationEN.viewImplName &&
    tzDataType.isString(pobjViewImplementationEN.viewImplName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面实现名(viewImplName)]的值:[${pobjViewImplementationEN.viewImplName}], 非法,应该为字符型(In 界面实现方式(ViewImplementation))!(clsViewImplementationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.viewImplENName) == false &&
    undefined !== pobjViewImplementationEN.viewImplENName &&
    tzDataType.isString(pobjViewImplementationEN.viewImplENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面实现英文名(viewImplENName)]的值:[${pobjViewImplementationEN.viewImplENName}], 非法,应该为字符型(In 界面实现方式(ViewImplementation))!(clsViewImplementationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.updDate) == false &&
    undefined !== pobjViewImplementationEN.updDate &&
    tzDataType.isString(pobjViewImplementationEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjViewImplementationEN.updDate}], 非法,应该为字符型(In 界面实现方式(ViewImplementation))!(clsViewImplementationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.updUser) == false &&
    undefined !== pobjViewImplementationEN.updUser &&
    tzDataType.isString(pobjViewImplementationEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjViewImplementationEN.updUser}], 非法,应该为字符型(In 界面实现方式(ViewImplementation))!(clsViewImplementationBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.memo) == false &&
    undefined !== pobjViewImplementationEN.memo &&
    tzDataType.isString(pobjViewImplementationEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjViewImplementationEN.memo}], 非法,应该为字符型(In 界面实现方式(ViewImplementation))!(clsViewImplementationBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewImplementation_CheckProperty4Update(
  pobjViewImplementationEN: clsViewImplementationEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewImplementationEN.viewImplId) == false &&
    GetStrLen(pobjViewImplementationEN.viewImplId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面实现Id(viewImplId)]的长度不能超过4(In 界面实现方式(ViewImplementation))!值:${pobjViewImplementationEN.viewImplId}(clsViewImplementationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.viewImplName) == false &&
    GetStrLen(pobjViewImplementationEN.viewImplName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面实现名(viewImplName)]的长度不能超过50(In 界面实现方式(ViewImplementation))!值:${pobjViewImplementationEN.viewImplName}(clsViewImplementationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.viewImplENName) == false &&
    GetStrLen(pobjViewImplementationEN.viewImplENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面实现英文名(viewImplENName)]的长度不能超过50(In 界面实现方式(ViewImplementation))!值:${pobjViewImplementationEN.viewImplENName}(clsViewImplementationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.updDate) == false &&
    GetStrLen(pobjViewImplementationEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 界面实现方式(ViewImplementation))!值:${pobjViewImplementationEN.updDate}(clsViewImplementationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.updUser) == false &&
    GetStrLen(pobjViewImplementationEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 界面实现方式(ViewImplementation))!值:${pobjViewImplementationEN.updUser}(clsViewImplementationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.memo) == false &&
    GetStrLen(pobjViewImplementationEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 界面实现方式(ViewImplementation))!值:${pobjViewImplementationEN.memo}(clsViewImplementationBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewImplementationEN.viewImplId) == false &&
    undefined !== pobjViewImplementationEN.viewImplId &&
    tzDataType.isString(pobjViewImplementationEN.viewImplId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面实现Id(viewImplId)]的值:[${pobjViewImplementationEN.viewImplId}], 非法,应该为字符型(In 界面实现方式(ViewImplementation))!(clsViewImplementationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.viewImplName) == false &&
    undefined !== pobjViewImplementationEN.viewImplName &&
    tzDataType.isString(pobjViewImplementationEN.viewImplName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面实现名(viewImplName)]的值:[${pobjViewImplementationEN.viewImplName}], 非法,应该为字符型(In 界面实现方式(ViewImplementation))!(clsViewImplementationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.viewImplENName) == false &&
    undefined !== pobjViewImplementationEN.viewImplENName &&
    tzDataType.isString(pobjViewImplementationEN.viewImplENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面实现英文名(viewImplENName)]的值:[${pobjViewImplementationEN.viewImplENName}], 非法,应该为字符型(In 界面实现方式(ViewImplementation))!(clsViewImplementationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.updDate) == false &&
    undefined !== pobjViewImplementationEN.updDate &&
    tzDataType.isString(pobjViewImplementationEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjViewImplementationEN.updDate}], 非法,应该为字符型(In 界面实现方式(ViewImplementation))!(clsViewImplementationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.updUser) == false &&
    undefined !== pobjViewImplementationEN.updUser &&
    tzDataType.isString(pobjViewImplementationEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjViewImplementationEN.updUser}], 非法,应该为字符型(In 界面实现方式(ViewImplementation))!(clsViewImplementationBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewImplementationEN.memo) == false &&
    undefined !== pobjViewImplementationEN.memo &&
    tzDataType.isString(pobjViewImplementationEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjViewImplementationEN.memo}], 非法,应该为字符型(In 界面实现方式(ViewImplementation))!(clsViewImplementationBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewImplementation_GetJSONStrByObj(
  pobjViewImplementationEN: clsViewImplementationEN,
): string {
  pobjViewImplementationEN.sfUpdFldSetStr = pobjViewImplementationEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewImplementationEN);
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
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function ViewImplementation_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsViewImplementationEN> {
  let arrViewImplementationObjLst = new Array<clsViewImplementationEN>();
  if (strJSON === '') {
    return arrViewImplementationObjLst;
  }
  try {
    arrViewImplementationObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewImplementationObjLst;
  }
  return arrViewImplementationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewImplementationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewImplementation_GetObjLstByJSONObjLst(
  arrViewImplementationObjLstS: Array<clsViewImplementationEN>,
): Array<clsViewImplementationEN> {
  const arrViewImplementationObjLst = new Array<clsViewImplementationEN>();
  for (const objInFor of arrViewImplementationObjLstS) {
    const obj1 = ViewImplementation_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewImplementationObjLst.push(obj1);
  }
  return arrViewImplementationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewImplementation_GetObjByJSONStr(strJSON: string): clsViewImplementationEN {
  let pobjViewImplementationEN = new clsViewImplementationEN();
  if (strJSON === '') {
    return pobjViewImplementationEN;
  }
  try {
    pobjViewImplementationEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewImplementationEN;
  }
  return pobjViewImplementationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewImplementation_GetCombineCondition(
  objViewImplementationCond: clsViewImplementationEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewImplementationCond.dicFldComparisonOp,
      clsViewImplementationEN.con_ViewImplId,
    ) == true
  ) {
    const strComparisonOpViewImplId: string =
      objViewImplementationCond.dicFldComparisonOp[clsViewImplementationEN.con_ViewImplId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewImplementationEN.con_ViewImplId,
      objViewImplementationCond.viewImplId,
      strComparisonOpViewImplId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewImplementationCond.dicFldComparisonOp,
      clsViewImplementationEN.con_ViewImplName,
    ) == true
  ) {
    const strComparisonOpViewImplName: string =
      objViewImplementationCond.dicFldComparisonOp[clsViewImplementationEN.con_ViewImplName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewImplementationEN.con_ViewImplName,
      objViewImplementationCond.viewImplName,
      strComparisonOpViewImplName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewImplementationCond.dicFldComparisonOp,
      clsViewImplementationEN.con_ViewImplENName,
    ) == true
  ) {
    const strComparisonOpViewImplENName: string =
      objViewImplementationCond.dicFldComparisonOp[clsViewImplementationEN.con_ViewImplENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewImplementationEN.con_ViewImplENName,
      objViewImplementationCond.viewImplENName,
      strComparisonOpViewImplENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewImplementationCond.dicFldComparisonOp,
      clsViewImplementationEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objViewImplementationCond.dicFldComparisonOp[clsViewImplementationEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewImplementationEN.con_UpdDate,
      objViewImplementationCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewImplementationCond.dicFldComparisonOp,
      clsViewImplementationEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objViewImplementationCond.dicFldComparisonOp[clsViewImplementationEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewImplementationEN.con_UpdUser,
      objViewImplementationCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewImplementationCond.dicFldComparisonOp,
      clsViewImplementationEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objViewImplementationCond.dicFldComparisonOp[clsViewImplementationEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewImplementationEN.con_Memo,
      objViewImplementationCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewImplementation(界面实现方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strViewImplName: 界面实现名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewImplementation_GetUniCondStr(
  objViewImplementationEN: clsViewImplementationEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewImplName = '{0}'", objViewImplementationEN.viewImplName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewImplementation(界面实现方式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strViewImplName: 界面实现名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewImplementation_GetUniCondStr4Update(
  objViewImplementationEN: clsViewImplementationEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewImplId <> '{0}'", objViewImplementationEN.viewImplId);
  strWhereCond += Format(" and ViewImplName = '{0}'", objViewImplementationEN.viewImplName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewImplementationENS:源对象
 * @param objViewImplementationENT:目标对象
 */
export function ViewImplementation_GetObjFromJsonObj(
  objViewImplementationENS: clsViewImplementationEN,
): clsViewImplementationEN {
  const objViewImplementationENT: clsViewImplementationEN = new clsViewImplementationEN();
  ObjectAssign(objViewImplementationENT, objViewImplementationENS);
  return objViewImplementationENT;
}
