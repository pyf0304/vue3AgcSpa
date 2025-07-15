/**
 * 类名:clsConstraintFieldsWApi
 * 表名:ConstraintFields(00050334)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:49:37
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
 * 约束字段(ConstraintFields)
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
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  constraintFieldsCache,
  isFuncMapCache,
} from '@/views/Table_Field/ConstraintFieldsVueShare';
import { clsConstraintFieldsENEx } from '@/ts/L0Entity/Table_Field/clsConstraintFieldsENEx';
import { clsConstraintFieldsEN } from '@/ts/L0Entity/Table_Field/clsConstraintFieldsEN';
import { vFieldTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { vPrjConstraint_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjConstraint_SimWApi';
import { clsvPrjConstraint_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjConstraint_SimEN';
import { SortType_func } from '@/ts/L3ForWApi/Table_Field/clsSortTypeWApi';
import { clsSortTypeEN } from '@/ts/L0Entity/Table_Field/clsSortTypeEN';
import { vPrjTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const constraintFields_Controller = 'ConstraintFieldsApi';
export const constraintFields_ConstructorName = 'constraintFields';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function ConstraintFields_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsConstraintFieldsEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsConstraintFieldsWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
      const objConstraintFields = ConstraintFields_GetObjFromJsonObj(returnObj);
      return objConstraintFields;
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function ConstraintFields_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsConstraintFieldsWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsConstraintFieldsEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objConstraintFieldsCache: clsConstraintFieldsEN = JSON.parse(strTempObj);
    return objConstraintFieldsCache;
  }
  try {
    const objConstraintFields = await ConstraintFields_GetObjBymIdAsync(lngmId);
    if (objConstraintFields != null) {
      localStorage.setItem(strKey, JSON.stringify(objConstraintFields));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objConstraintFields;
    }
    return objConstraintFields;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      constraintFields_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function ConstraintFields_GetObjBymIdCache(
  lngmId: number,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsConstraintFieldsWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrConstraintFieldsObjLstCache = await ConstraintFields_GetObjLstCache(strPrjId);
  try {
    const arrConstraintFieldsSel = arrConstraintFieldsObjLstCache.filter((x) => x.mId == lngmId);
    let objConstraintFields: clsConstraintFieldsEN;
    if (arrConstraintFieldsSel.length > 0) {
      objConstraintFields = arrConstraintFieldsSel[0];
      return objConstraintFields;
    } else {
      if (bolTryAsyncOnce == true) {
        const objConstraintFieldsConst = await ConstraintFields_GetObjBymIdAsync(lngmId);
        if (objConstraintFieldsConst != null) {
          ConstraintFields_ReFreshThisCache(strPrjId);
          return objConstraintFieldsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      constraintFields_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objConstraintFields:所给的对象
 * @returns 对象
 */
export async function ConstraintFields_UpdateObjInLstCache(
  objConstraintFields: clsConstraintFieldsEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrConstraintFieldsObjLstCache = await ConstraintFields_GetObjLstCache(strPrjId);
    const obj = arrConstraintFieldsObjLstCache.find(
      (x) =>
        x.prjConstraintId == objConstraintFields.prjConstraintId &&
        x.fldId == objConstraintFields.fldId,
    );
    if (obj != null) {
      objConstraintFields.mId = obj.mId;
      ObjectAssign(obj, objConstraintFields);
    } else {
      arrConstraintFieldsObjLstCache.push(objConstraintFields);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      constraintFields_ConstructorName,
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
export function ConstraintFields_SortFunDefa(
  a: clsConstraintFieldsEN,
  b: clsConstraintFieldsEN,
): number {
  return a.mId - b.mId;
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
export function ConstraintFields_SortFunDefa2Fld(
  a: clsConstraintFieldsEN,
  b: clsConstraintFieldsEN,
): number {
  if (a.prjConstraintId == b.prjConstraintId) return a.tabId.localeCompare(b.tabId);
  else return a.prjConstraintId.localeCompare(b.prjConstraintId);
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
export function ConstraintFields_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsConstraintFieldsEN.con_mId:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          return a.mId - b.mId;
        };
      case clsConstraintFieldsEN.con_PrjConstraintId:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          return a.prjConstraintId.localeCompare(b.prjConstraintId);
        };
      case clsConstraintFieldsEN.con_TabId:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsConstraintFieldsEN.con_FldId:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          return a.fldId.localeCompare(b.fldId);
        };
      case clsConstraintFieldsEN.con_MaxValue:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          if (a.maxValue == null) return -1;
          if (b.maxValue == null) return 1;
          return a.maxValue.localeCompare(b.maxValue);
        };
      case clsConstraintFieldsEN.con_MinValue:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          if (a.minValue == null) return -1;
          if (b.minValue == null) return 1;
          return a.minValue.localeCompare(b.minValue);
        };
      case clsConstraintFieldsEN.con_SortTypeId:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          return a.sortTypeId.localeCompare(b.sortTypeId);
        };
      case clsConstraintFieldsEN.con_InUse:
        return (a: clsConstraintFieldsEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsConstraintFieldsEN.con_OrderNum:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsConstraintFieldsEN.con_PrjId:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      case clsConstraintFieldsEN.con_UpdDate:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsConstraintFieldsEN.con_UpdUser:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsConstraintFieldsEN.con_Memo:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ConstraintFields]中不存在!(in ${constraintFields_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsConstraintFieldsEN.con_mId:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          return b.mId - a.mId;
        };
      case clsConstraintFieldsEN.con_PrjConstraintId:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          return b.prjConstraintId.localeCompare(a.prjConstraintId);
        };
      case clsConstraintFieldsEN.con_TabId:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsConstraintFieldsEN.con_FldId:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          return b.fldId.localeCompare(a.fldId);
        };
      case clsConstraintFieldsEN.con_MaxValue:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          if (b.maxValue == null) return -1;
          if (a.maxValue == null) return 1;
          return b.maxValue.localeCompare(a.maxValue);
        };
      case clsConstraintFieldsEN.con_MinValue:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          if (b.minValue == null) return -1;
          if (a.minValue == null) return 1;
          return b.minValue.localeCompare(a.minValue);
        };
      case clsConstraintFieldsEN.con_SortTypeId:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          return b.sortTypeId.localeCompare(a.sortTypeId);
        };
      case clsConstraintFieldsEN.con_InUse:
        return (b: clsConstraintFieldsEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsConstraintFieldsEN.con_OrderNum:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsConstraintFieldsEN.con_PrjId:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      case clsConstraintFieldsEN.con_UpdDate:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsConstraintFieldsEN.con_UpdUser:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsConstraintFieldsEN.con_Memo:
        return (a: clsConstraintFieldsEN, b: clsConstraintFieldsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ConstraintFields]中不存在!(in ${constraintFields_ConstructorName}.${strThisFuncName})`;
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
export async function ConstraintFields_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsConstraintFieldsEN.con_mId:
      return (obj: clsConstraintFieldsEN) => {
        return obj.mId === value;
      };
    case clsConstraintFieldsEN.con_PrjConstraintId:
      return (obj: clsConstraintFieldsEN) => {
        return obj.prjConstraintId === value;
      };
    case clsConstraintFieldsEN.con_TabId:
      return (obj: clsConstraintFieldsEN) => {
        return obj.tabId === value;
      };
    case clsConstraintFieldsEN.con_FldId:
      return (obj: clsConstraintFieldsEN) => {
        return obj.fldId === value;
      };
    case clsConstraintFieldsEN.con_MaxValue:
      return (obj: clsConstraintFieldsEN) => {
        return obj.maxValue === value;
      };
    case clsConstraintFieldsEN.con_MinValue:
      return (obj: clsConstraintFieldsEN) => {
        return obj.minValue === value;
      };
    case clsConstraintFieldsEN.con_SortTypeId:
      return (obj: clsConstraintFieldsEN) => {
        return obj.sortTypeId === value;
      };
    case clsConstraintFieldsEN.con_InUse:
      return (obj: clsConstraintFieldsEN) => {
        return obj.inUse === value;
      };
    case clsConstraintFieldsEN.con_OrderNum:
      return (obj: clsConstraintFieldsEN) => {
        return obj.orderNum === value;
      };
    case clsConstraintFieldsEN.con_PrjId:
      return (obj: clsConstraintFieldsEN) => {
        return obj.prjId === value;
      };
    case clsConstraintFieldsEN.con_UpdDate:
      return (obj: clsConstraintFieldsEN) => {
        return obj.updDate === value;
      };
    case clsConstraintFieldsEN.con_UpdUser:
      return (obj: clsConstraintFieldsEN) => {
        return obj.updUser === value;
      };
    case clsConstraintFieldsEN.con_Memo:
      return (obj: clsConstraintFieldsEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ConstraintFields]中不存在!(in ${constraintFields_ConstructorName}.${strThisFuncName})`;
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
export async function ConstraintFields_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsConstraintFieldsWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsConstraintFieldsWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsConstraintFieldsEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsConstraintFieldsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsConstraintFieldsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objConstraintFields = await ConstraintFields_GetObjBymIdCache(lngmId, strPrjIdClassfy);
  if (objConstraintFields == null) return '';
  if (objConstraintFields.GetFldValue(strOutFldName) == null) return '';
  return objConstraintFields.GetFldValue(strOutFldName).toString();
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
export async function ConstraintFields_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsConstraintFieldsWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsConstraintFieldsWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsConstraintFieldsEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrConstraintFields = await ConstraintFields_GetObjLstCache(strPrjIdClassfy);
  if (arrConstraintFields == null) return [];
  let arrConstraintFieldsSel = arrConstraintFields;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrConstraintFieldsSel.length == 0) return [];
  return arrConstraintFieldsSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ConstraintFields_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
export async function ConstraintFields_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
export async function ConstraintFields_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
export async function ConstraintFields_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsConstraintFieldsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

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
      const objConstraintFields = ConstraintFields_GetObjFromJsonObj(returnObj);
      return objConstraintFields;
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
export async function ConstraintFields_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsConstraintFieldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsConstraintFieldsEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsConstraintFieldsEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsConstraintFieldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsConstraintFieldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrConstraintFieldsExObjLstCache: Array<clsConstraintFieldsEN> = CacheHelper.Get(strKey);
    const arrConstraintFieldsObjLstT = ConstraintFields_GetObjLstByJSONObjLst(
      arrConstraintFieldsExObjLstCache,
    );
    return arrConstraintFieldsObjLstT;
  }
  try {
    const arrConstraintFieldsExObjLst = await ConstraintFields_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrConstraintFieldsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrConstraintFieldsExObjLst.length,
    );
    console.log(strInfo);
    return arrConstraintFieldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      constraintFields_ConstructorName,
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
export async function ConstraintFields_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsConstraintFieldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsConstraintFieldsEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsConstraintFieldsEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsConstraintFieldsEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsConstraintFieldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsConstraintFieldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrConstraintFieldsExObjLstCache: Array<clsConstraintFieldsEN> =
      JSON.parse(strTempObjLst);
    const arrConstraintFieldsObjLstT = ConstraintFields_GetObjLstByJSONObjLst(
      arrConstraintFieldsExObjLstCache,
    );
    return arrConstraintFieldsObjLstT;
  }
  try {
    const arrConstraintFieldsExObjLst = await ConstraintFields_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrConstraintFieldsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrConstraintFieldsExObjLst.length,
    );
    console.log(strInfo);
    return arrConstraintFieldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      constraintFields_ConstructorName,
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
export async function ConstraintFields_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsConstraintFieldsEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrConstraintFieldsObjLstCache: Array<clsConstraintFieldsEN> = JSON.parse(strTempObjLst);
    return arrConstraintFieldsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ConstraintFields_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsConstraintFieldsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

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
          constraintFields_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ConstraintFields_GetObjLstByJSONObjLst(returnObjLst);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
export async function ConstraintFields_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsConstraintFieldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsConstraintFieldsEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsConstraintFieldsEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsConstraintFieldsEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsConstraintFieldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsConstraintFieldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrConstraintFieldsExObjLstCache: Array<clsConstraintFieldsEN> =
      JSON.parse(strTempObjLst);
    const arrConstraintFieldsObjLstT = ConstraintFields_GetObjLstByJSONObjLst(
      arrConstraintFieldsExObjLstCache,
    );
    return arrConstraintFieldsObjLstT;
  }
  try {
    const arrConstraintFieldsExObjLst = await ConstraintFields_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrConstraintFieldsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrConstraintFieldsExObjLst.length,
    );
    console.log(strInfo);
    return arrConstraintFieldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      constraintFields_ConstructorName,
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
export async function ConstraintFields_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsConstraintFieldsEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrConstraintFieldsObjLstCache: Array<clsConstraintFieldsEN> = JSON.parse(strTempObjLst);
    return arrConstraintFieldsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ConstraintFields_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsConstraintFieldsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsConstraintFieldsWApi.ConstraintFields_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsConstraintFieldsWApi.ConstraintFields_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrConstraintFieldsObjLstCache;
  switch (clsConstraintFieldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrConstraintFieldsObjLstCache = await ConstraintFields_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrConstraintFieldsObjLstCache = await ConstraintFields_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrConstraintFieldsObjLstCache = await ConstraintFields_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrConstraintFieldsObjLstCache = await ConstraintFields_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrConstraintFieldsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ConstraintFields_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrConstraintFieldsObjLstCache;
  switch (clsConstraintFieldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrConstraintFieldsObjLstCache = await ConstraintFields_GetObjLstsessionStoragePureCache(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrConstraintFieldsObjLstCache = await ConstraintFields_GetObjLstlocalStoragePureCache(
        strPrjId,
      );
      break;
    case '02': //ClientCache
      arrConstraintFieldsObjLstCache = null;
      break;
    default:
      arrConstraintFieldsObjLstCache = null;
      break;
  }
  return arrConstraintFieldsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ConstraintFields_GetSubObjLstCache(
  objConstraintFieldsCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrConstraintFieldsObjLstCache = await ConstraintFields_GetObjLstCache(strPrjId);
  let arrConstraintFieldsSel = arrConstraintFieldsObjLstCache;
  if (objConstraintFieldsCond.GetConditions().length == 0) return arrConstraintFieldsSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objConstraintFieldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrConstraintFieldsSel = arrConstraintFieldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrConstraintFieldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objConstraintFieldsCond),
      constraintFields_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsConstraintFieldsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function ConstraintFields_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsConstraintFieldsEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          constraintFields_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ConstraintFields_GetObjLstByJSONObjLst(returnObjLst);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
 */
export async function ConstraintFields_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrConstraintFieldsObjLstCache = await ConstraintFields_GetObjLstCache(strPrjId);
    const arrConstraintFieldsSel = arrConstraintFieldsObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrConstraintFieldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      constraintFields_ConstructorName,
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
export async function ConstraintFields_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsConstraintFieldsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

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
          constraintFields_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ConstraintFields_GetObjLstByJSONObjLst(returnObjLst);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
export async function ConstraintFields_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsConstraintFieldsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

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
          constraintFields_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ConstraintFields_GetObjLstByJSONObjLst(returnObjLst);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
export async function ConstraintFields_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsConstraintFieldsEN>();
  const arrConstraintFieldsObjLstCache = await ConstraintFields_GetObjLstCache(strPrjId);
  if (arrConstraintFieldsObjLstCache.length == 0) return arrConstraintFieldsObjLstCache;
  let arrConstraintFieldsSel = arrConstraintFieldsObjLstCache;
  const objConstraintFieldsCond = objPagerPara.conditionCollection;
  if (objConstraintFieldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsConstraintFieldsEN>();
  }
  //console.log("clsConstraintFieldsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objConstraintFieldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrConstraintFieldsSel = arrConstraintFieldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrConstraintFieldsSel.length == 0) return arrConstraintFieldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrConstraintFieldsSel = arrConstraintFieldsSel.sort(
        ConstraintFields_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrConstraintFieldsSel = arrConstraintFieldsSel.sort(objPagerPara.sortFun);
    }
    arrConstraintFieldsSel = arrConstraintFieldsSel.slice(intStart, intEnd);
    return arrConstraintFieldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      constraintFields_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsConstraintFieldsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ConstraintFields_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsConstraintFieldsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsConstraintFieldsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

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
          constraintFields_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ConstraintFields_GetObjLstByJSONObjLst(returnObjLst);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export async function ConstraintFields_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(constraintFields_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngmId);

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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ConstraintFields_DelConstraintFieldssAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelConstraintFieldssAsync';
  const strAction = 'DelConstraintFieldss';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
export async function ConstraintFields_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
): Promise<Array<clsConstraintFieldsENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrConstraintFieldsObjLst = await ConstraintFields_GetObjLstCache(strPrjId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsConstraintFieldsENEx>();
  const arrConstraintFieldsExObjLst = arrConstraintFieldsObjLst.map((obj) => {
    const cacheKey = `${obj.mId}_${obj.prjId}`;
    if (constraintFieldsCache[cacheKey]) {
      const oldObj = constraintFieldsCache[cacheKey];
      return oldObj;
    } else {
      const newObj = ConstraintFields_CopyToEx(obj);
      arrNewObj.push(newObj);
      constraintFieldsCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await ConstraintFields_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsConstraintFieldsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrConstraintFieldsExObjLst) {
      await ConstraintFields_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}_${newObj.prjId}`;
      constraintFieldsCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrConstraintFieldsExObjLst.length == 0) return arrConstraintFieldsExObjLst;
  let arrConstraintFieldsSel: Array<clsConstraintFieldsENEx> = arrConstraintFieldsExObjLst;
  const objConstraintFieldsCond = objPagerPara.conditionCollection;
  if (objConstraintFieldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrConstraintFieldsExObjLst;
  }
  try {
    for (const objCondition of objConstraintFieldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrConstraintFieldsSel = arrConstraintFieldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrConstraintFieldsSel.length == 0) return arrConstraintFieldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrConstraintFieldsSel = arrConstraintFieldsSel.sort(
        ConstraintFields_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrConstraintFieldsSel = arrConstraintFieldsSel.sort(objPagerPara.sortFun);
    }
    arrConstraintFieldsSel = arrConstraintFieldsSel.slice(intStart, intEnd);
    return arrConstraintFieldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      constraintFields_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsConstraintFieldsENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objConstraintFieldsENS:源对象
 * @returns 目标对象=>clsConstraintFieldsEN:objConstraintFieldsENT
 **/
export function ConstraintFields_CopyToEx(
  objConstraintFieldsENS: clsConstraintFieldsEN,
): clsConstraintFieldsENEx {
  const strThisFuncName = ConstraintFields_CopyToEx.name;
  const objConstraintFieldsENT = new clsConstraintFieldsENEx();
  try {
    ObjectAssign(objConstraintFieldsENT, objConstraintFieldsENS);
    return objConstraintFieldsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFields_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objConstraintFieldsENT;
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
export function ConstraintFields_FuncMapByFldName(
  strFldName: string,
  objConstraintFieldsEx: clsConstraintFieldsENEx,
) {
  const strThisFuncName = ConstraintFields_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsConstraintFieldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsConstraintFieldsENEx.con_FldName:
      return ConstraintFields_FuncMapFldName(objConstraintFieldsEx);
    case clsConstraintFieldsENEx.con_ConstraintName:
      return ConstraintFields_FuncMapConstraintName(objConstraintFieldsEx);
    case clsConstraintFieldsENEx.con_SortTypeName:
      return ConstraintFields_FuncMapSortTypeName(objConstraintFieldsEx);
    case clsConstraintFieldsENEx.con_TabName:
      return ConstraintFields_FuncMapTabName(objConstraintFieldsEx);
    case clsConstraintFieldsENEx.con_DateTimeSim:
      return ConstraintFields_FuncMapDateTimeSim(objConstraintFieldsEx);
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
export function ConstraintFields_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsConstraintFieldsENEx.con_FldName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsConstraintFieldsENEx.con_ConstraintName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return a.constraintName.localeCompare(b.constraintName);
        };
      case clsConstraintFieldsENEx.con_SortTypeName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return a.sortTypeName.localeCompare(b.sortTypeName);
        };
      case clsConstraintFieldsENEx.con_TabName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsConstraintFieldsENEx.con_DateTimeSim:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
          if (a.dateTimeSim === null) return -1;
          if (b.dateTimeSim === null) return 1;
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      default:
        return ConstraintFields_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsConstraintFieldsENEx.con_FldName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsConstraintFieldsENEx.con_ConstraintName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return b.constraintName.localeCompare(a.constraintName);
        };
      case clsConstraintFieldsENEx.con_SortTypeName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return b.sortTypeName.localeCompare(a.sortTypeName);
        };
      case clsConstraintFieldsENEx.con_TabName:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsConstraintFieldsENEx.con_DateTimeSim:
        return (a: clsConstraintFieldsENEx, b: clsConstraintFieldsENEx) => {
          if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
          if (a.dateTimeSim === null) return 1;
          if (b.dateTimeSim === null) return -1;
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      default:
        return ConstraintFields_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objConstraintFieldsS:源对象
 **/
export async function ConstraintFields_FuncMapFldName(
  objConstraintFields: clsConstraintFieldsENEx,
) {
  const strThisFuncName = ConstraintFields_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objConstraintFields.fldName) == true) {
      const vFieldTabSimFldId = objConstraintFields.fldId;
      if (IsNullOrEmpty(objConstraintFields.prjId) == true) {
        const strMsg = `函数映射[FldName]数据出错,prjId不能为空!(in ${constraintFields_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objConstraintFields.prjId,
      );
      objConstraintFields.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001295)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFields_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objConstraintFieldsS:源对象
 **/
export async function ConstraintFields_FuncMapConstraintName(
  objConstraintFields: clsConstraintFieldsENEx,
) {
  const strThisFuncName = ConstraintFields_FuncMapConstraintName.name;
  try {
    if (IsNullOrEmpty(objConstraintFields.constraintName) == true) {
      const vPrjConstraintSimPrjConstraintId = objConstraintFields.prjConstraintId;
      if (IsNullOrEmpty(objConstraintFields.prjId) == true) {
        const strMsg = `函数映射[ConstraintName]数据出错,prjId不能为空!(in ${constraintFields_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vPrjConstraintSimConstraintName = await vPrjConstraint_Sim_func(
        clsvPrjConstraint_SimEN.con_PrjConstraintId,
        clsvPrjConstraint_SimEN.con_ConstraintName,
        vPrjConstraintSimPrjConstraintId,
        objConstraintFields.prjId,
      );
      objConstraintFields.constraintName = vPrjConstraintSimConstraintName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001324)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFields_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objConstraintFieldsS:源对象
 **/
export async function ConstraintFields_FuncMapSortTypeName(
  objConstraintFields: clsConstraintFieldsENEx,
) {
  const strThisFuncName = ConstraintFields_FuncMapSortTypeName.name;
  try {
    if (IsNullOrEmpty(objConstraintFields.sortTypeName) == true) {
      const SortTypeSortTypeId = objConstraintFields.sortTypeId;
      const SortTypeSortTypeName = await SortType_func(
        clsSortTypeEN.con_SortTypeId,
        clsSortTypeEN.con_SortTypeName,
        SortTypeSortTypeId,
      );
      objConstraintFields.sortTypeName = SortTypeSortTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001325)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFields_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objConstraintFieldsS:源对象
 **/
export async function ConstraintFields_FuncMapTabName(
  objConstraintFields: clsConstraintFieldsENEx,
) {
  const strThisFuncName = ConstraintFields_FuncMapTabName.name;
  try {
    if (IsNullOrEmpty(objConstraintFields.tabName) == true) {
      const vPrjTabSimTabId = objConstraintFields.tabId;
      if (IsNullOrEmpty(objConstraintFields.prjId) == true) {
        const strMsg = `函数映射[TabName]数据出错,prjId不能为空!(in ${constraintFields_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        objConstraintFields.prjId,
      );
      objConstraintFields.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001298)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFields_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objConstraintFieldsS:源对象
 **/
export async function ConstraintFields_FuncMapDateTimeSim(
  objConstraintFields: clsConstraintFieldsENEx,
) {
  const strThisFuncName = ConstraintFields_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objConstraintFields.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objConstraintFields.updDate);
      objConstraintFields.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001326)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      constraintFields_ConstructorName,
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
export async function ConstraintFields_DelConstraintFieldssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelConstraintFieldssByCondAsync';
  const strAction = 'DelConstraintFieldssByCond';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
 * @param objConstraintFieldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ConstraintFields_AddNewRecordAsync(
  objConstraintFieldsEN: clsConstraintFieldsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objConstraintFieldsEN);
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConstraintFieldsEN, config);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

/**
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objConstraintFieldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ConstraintFields_GoTopAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objConstraintFieldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ConstraintFields_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objConstraintFieldsEN);
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objConstraintFieldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ConstraintFields_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objConstraintFieldsEN);
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
export async function ConstraintFields_AddNewObjSave(
  objConstraintFieldsEN: clsConstraintFieldsEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    ConstraintFields_CheckPropertyNew(objConstraintFieldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${constraintFields_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ConstraintFields_CheckUniCond4Add(objConstraintFieldsEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await ConstraintFields_AddNewRecordAsync(objConstraintFieldsEN);
    if (returnBool == true) {
      ConstraintFields_ReFreshCache(objConstraintFieldsEN.prjId);
    } else {
      const strInfo = `添加[约束字段(ConstraintFields)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objConstraintFieldsEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${constraintFields_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function ConstraintFields_CheckUniCond4Add(
  objConstraintFieldsEN: clsConstraintFieldsEN,
): Promise<boolean> {
  const strUniquenessCondition = ConstraintFields_GetUniCondStr(objConstraintFieldsEN);
  const bolIsExistCondition = await ConstraintFields_IsExistRecordAsync(strUniquenessCondition);
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
export async function ConstraintFields_CheckUniCond4Update(
  objConstraintFieldsEN: clsConstraintFieldsEN,
): Promise<boolean> {
  const strUniquenessCondition = ConstraintFields_GetUniCondStr4Update(objConstraintFieldsEN);
  const bolIsExistCondition = await ConstraintFields_IsExistRecordAsync(strUniquenessCondition);
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
export async function ConstraintFields_UpdateObjSave(
  objConstraintFieldsEN: clsConstraintFieldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objConstraintFieldsEN.sfUpdFldSetStr = objConstraintFieldsEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objConstraintFieldsEN.mId == 0 || objConstraintFieldsEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    ConstraintFields_CheckProperty4Update(objConstraintFieldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${constraintFields_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ConstraintFields_CheckUniCond4Update(objConstraintFieldsEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await ConstraintFields_UpdateRecordAsync(objConstraintFieldsEN);
    if (returnBool == true) {
      ConstraintFields_ReFreshCache(objConstraintFieldsEN.prjId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${constraintFields_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objConstraintFieldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ConstraintFields_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objConstraintFieldsEN);
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objConstraintFieldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ConstraintFields_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objConstraintFieldsEN);
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
 * @param objConstraintFieldsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ConstraintFields_AddNewRecordWithReturnKeyAsync(
  objConstraintFieldsEN: clsConstraintFieldsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConstraintFieldsEN, config);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
 * @param objConstraintFieldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ConstraintFields_UpdateRecordAsync(
  objConstraintFieldsEN: clsConstraintFieldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objConstraintFieldsEN.sfUpdFldSetStr === undefined ||
    objConstraintFieldsEN.sfUpdFldSetStr === null ||
    objConstraintFieldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objConstraintFieldsEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConstraintFieldsEN, config);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
 * @param objConstraintFieldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ConstraintFields_EditRecordExAsync(
  objConstraintFieldsEN: clsConstraintFieldsEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objConstraintFieldsEN.sfUpdFldSetStr === undefined ||
    objConstraintFieldsEN.sfUpdFldSetStr === null ||
    objConstraintFieldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objConstraintFieldsEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConstraintFieldsEN, config);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
 * @param objConstraintFieldsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ConstraintFields_UpdateWithConditionAsync(
  objConstraintFieldsEN: clsConstraintFieldsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objConstraintFieldsEN.sfUpdFldSetStr === undefined ||
    objConstraintFieldsEN.sfUpdFldSetStr === null ||
    objConstraintFieldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objConstraintFieldsEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);
  objConstraintFieldsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objConstraintFieldsEN, config);
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ConstraintFields_IsExistRecordCache(
  objConstraintFieldsCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrConstraintFieldsObjLstCache = await ConstraintFields_GetObjLstCache(strPrjId);
  if (arrConstraintFieldsObjLstCache == null) return false;
  let arrConstraintFieldsSel = arrConstraintFieldsObjLstCache;
  if (objConstraintFieldsCond.GetConditions().length == 0)
    return arrConstraintFieldsSel.length > 0 ? true : false;
  try {
    for (const objCondition of objConstraintFieldsCond.GetConditions()) {
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
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrConstraintFieldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objConstraintFieldsCond),
      constraintFields_ConstructorName,
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
export async function ConstraintFields_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function ConstraintFields_IsExistCache(lngmId: number, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrConstraintFieldsObjLstCache = await ConstraintFields_GetObjLstCache(strPrjId);
  if (arrConstraintFieldsObjLstCache == null) return false;
  try {
    const arrConstraintFieldsSel = arrConstraintFieldsObjLstCache.filter((x) => x.mId == lngmId);
    if (arrConstraintFieldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      constraintFields_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ConstraintFields_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
export async function ConstraintFields_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
 * @param objConstraintFieldsCond:条件对象
 * @returns 对象列表记录数
 */
export async function ConstraintFields_GetRecCountByCondCache(
  objConstraintFieldsCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrConstraintFieldsObjLstCache = await ConstraintFields_GetObjLstCache(strPrjId);
  if (arrConstraintFieldsObjLstCache == null) return 0;
  let arrConstraintFieldsSel = arrConstraintFieldsObjLstCache;
  if (objConstraintFieldsCond.GetConditions().length == 0) return arrConstraintFieldsSel.length;
  try {
    for (const objCondition of objConstraintFieldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrConstraintFieldsSel = arrConstraintFieldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrConstraintFieldsSel = arrConstraintFieldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrConstraintFieldsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objConstraintFieldsCond),
      constraintFields_ConstructorName,
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
export async function ConstraintFields_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(constraintFields_Controller, strAction);

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
        constraintFields_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        constraintFields_ConstructorName,
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
export function ConstraintFields_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ConstraintFields_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsConstraintFieldsWApi.clsConstraintFieldsWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsConstraintFieldsWApi.clsConstraintFieldsWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsConstraintFieldsEN._CurrTabName, strPrjId);
  switch (clsConstraintFieldsEN.CacheModeId) {
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
  clsConstraintFieldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ConstraintFields_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsConstraintFieldsWApi.ConstraintFields_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsConstraintFieldsWApi.ConstraintFields_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsConstraintFieldsEN._CurrTabName, strPrjId);
    switch (clsConstraintFieldsEN.CacheModeId) {
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
    clsConstraintFieldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function ConstraintFields_GetLastRefreshTime(): string {
  if (clsConstraintFieldsEN._RefreshTimeLst.length == 0) return '';
  return clsConstraintFieldsEN._RefreshTimeLst[clsConstraintFieldsEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ConstraintFields_CheckPropertyNew(pobjConstraintFieldsEN: clsConstraintFieldsEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.prjConstraintId) === true ||
    pobjConstraintFieldsEN.prjConstraintId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[约束表Id]不能为空(In 约束字段)!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.tabId) === true ||
    pobjConstraintFieldsEN.tabId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[表ID]不能为空(In 约束字段)!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.fldId) === true ||
    pobjConstraintFieldsEN.fldId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[字段Id]不能为空(In 约束字段)!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.sortTypeId) === true ||
    pobjConstraintFieldsEN.sortTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[排序类型Id]不能为空(In 约束字段)!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjConstraintFieldsEN.orderNum ||
    (pobjConstraintFieldsEN.orderNum != null && pobjConstraintFieldsEN.orderNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[序号]不能为空(In 约束字段)!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.prjConstraintId) == false &&
    GetStrLen(pobjConstraintFieldsEN.prjConstraintId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[约束表Id(prjConstraintId)]的长度不能超过8(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.prjConstraintId}(clsConstraintFieldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.tabId) == false &&
    GetStrLen(pobjConstraintFieldsEN.tabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.tabId}(clsConstraintFieldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.fldId) == false &&
    GetStrLen(pobjConstraintFieldsEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.fldId}(clsConstraintFieldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.maxValue) == false &&
    GetStrLen(pobjConstraintFieldsEN.maxValue) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[最大值(maxValue)]的长度不能超过50(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.maxValue}(clsConstraintFieldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.minValue) == false &&
    GetStrLen(pobjConstraintFieldsEN.minValue) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[最小值(minValue)]的长度不能超过50(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.minValue}(clsConstraintFieldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.sortTypeId) == false &&
    GetStrLen(pobjConstraintFieldsEN.sortTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[排序类型Id(sortTypeId)]的长度不能超过2(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.sortTypeId}(clsConstraintFieldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.prjId) == false &&
    GetStrLen(pobjConstraintFieldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.prjId}(clsConstraintFieldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.updDate) == false &&
    GetStrLen(pobjConstraintFieldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.updDate}(clsConstraintFieldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.updUser) == false &&
    GetStrLen(pobjConstraintFieldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.updUser}(clsConstraintFieldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.memo) == false &&
    GetStrLen(pobjConstraintFieldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.memo}(clsConstraintFieldsBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjConstraintFieldsEN.mId &&
    undefined !== pobjConstraintFieldsEN.mId &&
    tzDataType.isNumber(pobjConstraintFieldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjConstraintFieldsEN.mId}], 非法,应该为数值型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.prjConstraintId) == false &&
    undefined !== pobjConstraintFieldsEN.prjConstraintId &&
    tzDataType.isString(pobjConstraintFieldsEN.prjConstraintId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[约束表Id(prjConstraintId)]的值:[${pobjConstraintFieldsEN.prjConstraintId}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.tabId) == false &&
    undefined !== pobjConstraintFieldsEN.tabId &&
    tzDataType.isString(pobjConstraintFieldsEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表ID(tabId)]的值:[${pobjConstraintFieldsEN.tabId}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.fldId) == false &&
    undefined !== pobjConstraintFieldsEN.fldId &&
    tzDataType.isString(pobjConstraintFieldsEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id(fldId)]的值:[${pobjConstraintFieldsEN.fldId}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.maxValue) == false &&
    undefined !== pobjConstraintFieldsEN.maxValue &&
    tzDataType.isString(pobjConstraintFieldsEN.maxValue) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[最大值(maxValue)]的值:[${pobjConstraintFieldsEN.maxValue}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.minValue) == false &&
    undefined !== pobjConstraintFieldsEN.minValue &&
    tzDataType.isString(pobjConstraintFieldsEN.minValue) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[最小值(minValue)]的值:[${pobjConstraintFieldsEN.minValue}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.sortTypeId) == false &&
    undefined !== pobjConstraintFieldsEN.sortTypeId &&
    tzDataType.isString(pobjConstraintFieldsEN.sortTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[排序类型Id(sortTypeId)]的值:[${pobjConstraintFieldsEN.sortTypeId}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjConstraintFieldsEN.inUse &&
    undefined !== pobjConstraintFieldsEN.inUse &&
    tzDataType.isBoolean(pobjConstraintFieldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjConstraintFieldsEN.inUse}], 非法,应该为布尔型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjConstraintFieldsEN.orderNum &&
    undefined !== pobjConstraintFieldsEN.orderNum &&
    tzDataType.isNumber(pobjConstraintFieldsEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjConstraintFieldsEN.orderNum}], 非法,应该为数值型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.prjId) == false &&
    undefined !== pobjConstraintFieldsEN.prjId &&
    tzDataType.isString(pobjConstraintFieldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjConstraintFieldsEN.prjId}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.updDate) == false &&
    undefined !== pobjConstraintFieldsEN.updDate &&
    tzDataType.isString(pobjConstraintFieldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjConstraintFieldsEN.updDate}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.updUser) == false &&
    undefined !== pobjConstraintFieldsEN.updUser &&
    tzDataType.isString(pobjConstraintFieldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjConstraintFieldsEN.updUser}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.memo) == false &&
    undefined !== pobjConstraintFieldsEN.memo &&
    tzDataType.isString(pobjConstraintFieldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjConstraintFieldsEN.memo}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.fldId) == false &&
    pobjConstraintFieldsEN.fldId != '[nuull]' &&
    GetStrLen(pobjConstraintFieldsEN.fldId) != 8
  ) {
    throw '(errid:Watl000415)字段[字段Id]作为外键字段,长度应该为8(In 约束字段)!(clsConstraintFieldsBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ConstraintFields_CheckProperty4Update(
  pobjConstraintFieldsEN: clsConstraintFieldsEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.prjConstraintId) == false &&
    GetStrLen(pobjConstraintFieldsEN.prjConstraintId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[约束表Id(prjConstraintId)]的长度不能超过8(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.prjConstraintId}(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.tabId) == false &&
    GetStrLen(pobjConstraintFieldsEN.tabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.tabId}(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.fldId) == false &&
    GetStrLen(pobjConstraintFieldsEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.fldId}(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.maxValue) == false &&
    GetStrLen(pobjConstraintFieldsEN.maxValue) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[最大值(maxValue)]的长度不能超过50(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.maxValue}(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.minValue) == false &&
    GetStrLen(pobjConstraintFieldsEN.minValue) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[最小值(minValue)]的长度不能超过50(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.minValue}(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.sortTypeId) == false &&
    GetStrLen(pobjConstraintFieldsEN.sortTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[排序类型Id(sortTypeId)]的长度不能超过2(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.sortTypeId}(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.prjId) == false &&
    GetStrLen(pobjConstraintFieldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.prjId}(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.updDate) == false &&
    GetStrLen(pobjConstraintFieldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.updDate}(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.updUser) == false &&
    GetStrLen(pobjConstraintFieldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.updUser}(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.memo) == false &&
    GetStrLen(pobjConstraintFieldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 约束字段(ConstraintFields))!值:${pobjConstraintFieldsEN.memo}(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjConstraintFieldsEN.mId &&
    undefined !== pobjConstraintFieldsEN.mId &&
    tzDataType.isNumber(pobjConstraintFieldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjConstraintFieldsEN.mId}], 非法,应该为数值型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.prjConstraintId) == false &&
    undefined !== pobjConstraintFieldsEN.prjConstraintId &&
    tzDataType.isString(pobjConstraintFieldsEN.prjConstraintId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[约束表Id(prjConstraintId)]的值:[${pobjConstraintFieldsEN.prjConstraintId}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.tabId) == false &&
    undefined !== pobjConstraintFieldsEN.tabId &&
    tzDataType.isString(pobjConstraintFieldsEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表ID(tabId)]的值:[${pobjConstraintFieldsEN.tabId}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.fldId) == false &&
    undefined !== pobjConstraintFieldsEN.fldId &&
    tzDataType.isString(pobjConstraintFieldsEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id(fldId)]的值:[${pobjConstraintFieldsEN.fldId}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.maxValue) == false &&
    undefined !== pobjConstraintFieldsEN.maxValue &&
    tzDataType.isString(pobjConstraintFieldsEN.maxValue) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[最大值(maxValue)]的值:[${pobjConstraintFieldsEN.maxValue}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.minValue) == false &&
    undefined !== pobjConstraintFieldsEN.minValue &&
    tzDataType.isString(pobjConstraintFieldsEN.minValue) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[最小值(minValue)]的值:[${pobjConstraintFieldsEN.minValue}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.sortTypeId) == false &&
    undefined !== pobjConstraintFieldsEN.sortTypeId &&
    tzDataType.isString(pobjConstraintFieldsEN.sortTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[排序类型Id(sortTypeId)]的值:[${pobjConstraintFieldsEN.sortTypeId}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjConstraintFieldsEN.inUse &&
    undefined !== pobjConstraintFieldsEN.inUse &&
    tzDataType.isBoolean(pobjConstraintFieldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjConstraintFieldsEN.inUse}], 非法,应该为布尔型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjConstraintFieldsEN.orderNum &&
    undefined !== pobjConstraintFieldsEN.orderNum &&
    tzDataType.isNumber(pobjConstraintFieldsEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjConstraintFieldsEN.orderNum}], 非法,应该为数值型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.prjId) == false &&
    undefined !== pobjConstraintFieldsEN.prjId &&
    tzDataType.isString(pobjConstraintFieldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjConstraintFieldsEN.prjId}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.updDate) == false &&
    undefined !== pobjConstraintFieldsEN.updDate &&
    tzDataType.isString(pobjConstraintFieldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjConstraintFieldsEN.updDate}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.updUser) == false &&
    undefined !== pobjConstraintFieldsEN.updUser &&
    tzDataType.isString(pobjConstraintFieldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjConstraintFieldsEN.updUser}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.memo) == false &&
    undefined !== pobjConstraintFieldsEN.memo &&
    tzDataType.isString(pobjConstraintFieldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjConstraintFieldsEN.memo}], 非法,应该为字符型(In 约束字段(ConstraintFields))!(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjConstraintFieldsEN.mId ||
    (pobjConstraintFieldsEN.mId != null && pobjConstraintFieldsEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 约束字段)!(clsConstraintFieldsBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjConstraintFieldsEN.fldId) == false &&
    pobjConstraintFieldsEN.fldId != '[nuull]' &&
    GetStrLen(pobjConstraintFieldsEN.fldId) != 8
  ) {
    throw '(errid:Watl000418)字段[字段Id]作为外键字段,长度应该为8(In 约束字段)!(clsConstraintFieldsBL:CheckPropertyNew)';
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
export function ConstraintFields_GetJSONStrByObj(
  pobjConstraintFieldsEN: clsConstraintFieldsEN,
): string {
  pobjConstraintFieldsEN.sfUpdFldSetStr = pobjConstraintFieldsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjConstraintFieldsEN);
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
export function ConstraintFields_GetObjLstByJSONStr(strJSON: string): Array<clsConstraintFieldsEN> {
  let arrConstraintFieldsObjLst = new Array<clsConstraintFieldsEN>();
  if (strJSON === '') {
    return arrConstraintFieldsObjLst;
  }
  try {
    arrConstraintFieldsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrConstraintFieldsObjLst;
  }
  return arrConstraintFieldsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrConstraintFieldsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ConstraintFields_GetObjLstByJSONObjLst(
  arrConstraintFieldsObjLstS: Array<clsConstraintFieldsEN>,
): Array<clsConstraintFieldsEN> {
  const arrConstraintFieldsObjLst = new Array<clsConstraintFieldsEN>();
  for (const objInFor of arrConstraintFieldsObjLstS) {
    const obj1 = ConstraintFields_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrConstraintFieldsObjLst.push(obj1);
  }
  return arrConstraintFieldsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ConstraintFields_GetObjByJSONStr(strJSON: string): clsConstraintFieldsEN {
  let pobjConstraintFieldsEN = new clsConstraintFieldsEN();
  if (strJSON === '') {
    return pobjConstraintFieldsEN;
  }
  try {
    pobjConstraintFieldsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjConstraintFieldsEN;
  }
  return pobjConstraintFieldsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ConstraintFields_GetCombineCondition(
  objConstraintFieldsCond: clsConstraintFieldsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintFieldsCond.dicFldComparisonOp,
      clsConstraintFieldsEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objConstraintFieldsCond.dicFldComparisonOp[clsConstraintFieldsEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsConstraintFieldsEN.con_mId,
      objConstraintFieldsCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintFieldsCond.dicFldComparisonOp,
      clsConstraintFieldsEN.con_PrjConstraintId,
    ) == true
  ) {
    const strComparisonOpPrjConstraintId: string =
      objConstraintFieldsCond.dicFldComparisonOp[clsConstraintFieldsEN.con_PrjConstraintId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintFieldsEN.con_PrjConstraintId,
      objConstraintFieldsCond.prjConstraintId,
      strComparisonOpPrjConstraintId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintFieldsCond.dicFldComparisonOp,
      clsConstraintFieldsEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objConstraintFieldsCond.dicFldComparisonOp[clsConstraintFieldsEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintFieldsEN.con_TabId,
      objConstraintFieldsCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintFieldsCond.dicFldComparisonOp,
      clsConstraintFieldsEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objConstraintFieldsCond.dicFldComparisonOp[clsConstraintFieldsEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintFieldsEN.con_FldId,
      objConstraintFieldsCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintFieldsCond.dicFldComparisonOp,
      clsConstraintFieldsEN.con_MaxValue,
    ) == true
  ) {
    const strComparisonOpMaxValue: string =
      objConstraintFieldsCond.dicFldComparisonOp[clsConstraintFieldsEN.con_MaxValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintFieldsEN.con_MaxValue,
      objConstraintFieldsCond.maxValue,
      strComparisonOpMaxValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintFieldsCond.dicFldComparisonOp,
      clsConstraintFieldsEN.con_MinValue,
    ) == true
  ) {
    const strComparisonOpMinValue: string =
      objConstraintFieldsCond.dicFldComparisonOp[clsConstraintFieldsEN.con_MinValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintFieldsEN.con_MinValue,
      objConstraintFieldsCond.minValue,
      strComparisonOpMinValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintFieldsCond.dicFldComparisonOp,
      clsConstraintFieldsEN.con_SortTypeId,
    ) == true
  ) {
    const strComparisonOpSortTypeId: string =
      objConstraintFieldsCond.dicFldComparisonOp[clsConstraintFieldsEN.con_SortTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintFieldsEN.con_SortTypeId,
      objConstraintFieldsCond.sortTypeId,
      strComparisonOpSortTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintFieldsCond.dicFldComparisonOp,
      clsConstraintFieldsEN.con_InUse,
    ) == true
  ) {
    if (objConstraintFieldsCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsConstraintFieldsEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsConstraintFieldsEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintFieldsCond.dicFldComparisonOp,
      clsConstraintFieldsEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objConstraintFieldsCond.dicFldComparisonOp[clsConstraintFieldsEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsConstraintFieldsEN.con_OrderNum,
      objConstraintFieldsCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintFieldsCond.dicFldComparisonOp,
      clsConstraintFieldsEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objConstraintFieldsCond.dicFldComparisonOp[clsConstraintFieldsEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintFieldsEN.con_PrjId,
      objConstraintFieldsCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintFieldsCond.dicFldComparisonOp,
      clsConstraintFieldsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objConstraintFieldsCond.dicFldComparisonOp[clsConstraintFieldsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintFieldsEN.con_UpdDate,
      objConstraintFieldsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintFieldsCond.dicFldComparisonOp,
      clsConstraintFieldsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objConstraintFieldsCond.dicFldComparisonOp[clsConstraintFieldsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintFieldsEN.con_UpdUser,
      objConstraintFieldsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objConstraintFieldsCond.dicFldComparisonOp,
      clsConstraintFieldsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objConstraintFieldsCond.dicFldComparisonOp[clsConstraintFieldsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsConstraintFieldsEN.con_Memo,
      objConstraintFieldsCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ConstraintFields(约束字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjConstraintId: 约束表Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ConstraintFields_GetUniCondStr(
  objConstraintFieldsEN: clsConstraintFieldsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjConstraintId = '{0}'", objConstraintFieldsEN.prjConstraintId);
  strWhereCond += Format(" and FldId = '{0}'", objConstraintFieldsEN.fldId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ConstraintFields(约束字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjConstraintId: 约束表Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ConstraintFields_GetUniCondStr4Update(
  objConstraintFieldsEN: clsConstraintFieldsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objConstraintFieldsEN.mId);
  strWhereCond += Format(" and PrjConstraintId = '{0}'", objConstraintFieldsEN.prjConstraintId);
  strWhereCond += Format(" and FldId = '{0}'", objConstraintFieldsEN.fldId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objConstraintFieldsENS:源对象
 * @param objConstraintFieldsENT:目标对象
 */
export function ConstraintFields_GetObjFromJsonObj(
  objConstraintFieldsENS: clsConstraintFieldsEN,
): clsConstraintFieldsEN {
  const objConstraintFieldsENT: clsConstraintFieldsEN = new clsConstraintFieldsEN();
  ObjectAssign(objConstraintFieldsENT, objConstraintFieldsENS);
  return objConstraintFieldsENT;
}
