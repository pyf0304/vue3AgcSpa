/**
 * 类名:clsCtlTypeWApi
 * 表名:CtlType(00050058)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:20
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
 * 控件类型缩写(CtlType)
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
import { ctlTypeCache, isFuncMapCache } from '@/views/PrjInterface/CtlTypeVueShare';
import { clsCtlTypeENEx } from '@/ts/L0Entity/PrjInterface/clsCtlTypeENEx';
import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const ctlType_Controller = 'CtlTypeApi';
export const ctlType_ConstructorName = 'ctlType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCtlTypeId:关键字
 * @returns 对象
 **/
export async function CtlType_GetObjByCtlTypeIdAsync(
  strCtlTypeId: string,
): Promise<clsCtlTypeEN | null> {
  const strThisFuncName = 'GetObjByCtlTypeIdAsync';

  if (IsNullOrEmpty(strCtlTypeId) == true) {
    const strMsg = Format('参数:[strCtlTypeId]不能为空!(In clsCtlTypeWApi.GetObjByCtlTypeIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCtlTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strCtlTypeId]的长度:[{0}]不正确!(clsCtlTypeWApi.GetObjByCtlTypeIdAsync)',
      strCtlTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCtlTypeId';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCtlTypeId,
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
      const objCtlType = CtlType_GetObjFromJsonObj(returnObj);
      return objCtlType;
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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param strCtlTypeId:所给的关键字
 * @returns 对象
 */
export async function CtlType_GetObjByCtlTypeIdlocalStorage(strCtlTypeId: string) {
  const strThisFuncName = 'GetObjByCtlTypeIdlocalStorage';

  if (IsNullOrEmpty(strCtlTypeId) == true) {
    const strMsg = Format(
      '参数:[strCtlTypeId]不能为空!(In clsCtlTypeWApi.GetObjByCtlTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCtlTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strCtlTypeId]的长度:[{0}]不正确!(clsCtlTypeWApi.GetObjByCtlTypeIdlocalStorage)',
      strCtlTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsCtlTypeEN._CurrTabName, strCtlTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objCtlTypeCache: clsCtlTypeEN = JSON.parse(strTempObj);
    return objCtlTypeCache;
  }
  try {
    const objCtlType = await CtlType_GetObjByCtlTypeIdAsync(strCtlTypeId);
    if (objCtlType != null) {
      localStorage.setItem(strKey, JSON.stringify(objCtlType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objCtlType;
    }
    return objCtlType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCtlTypeId,
      ctlType_ConstructorName,
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
 * @param strCtlTypeId:所给的关键字
 * @returns 对象
 */
export async function CtlType_GetObjByCtlTypeIdCache(strCtlTypeId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByCtlTypeIdCache';

  if (IsNullOrEmpty(strCtlTypeId) == true) {
    const strMsg = Format('参数:[strCtlTypeId]不能为空!(In clsCtlTypeWApi.GetObjByCtlTypeIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCtlTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strCtlTypeId]的长度:[{0}]不正确!(clsCtlTypeWApi.GetObjByCtlTypeIdCache)',
      strCtlTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCtlTypeObjLstCache = await CtlType_GetObjLstCache();
  try {
    const arrCtlTypeSel = arrCtlTypeObjLstCache.filter((x) => x.ctlTypeId == strCtlTypeId);
    let objCtlType: clsCtlTypeEN;
    if (arrCtlTypeSel.length > 0) {
      objCtlType = arrCtlTypeSel[0];
      return objCtlType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCtlTypeConst = await CtlType_GetObjByCtlTypeIdAsync(strCtlTypeId);
        if (objCtlTypeConst != null) {
          CtlType_ReFreshThisCache();
          return objCtlTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCtlTypeId,
      ctlType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objCtlType:所给的对象
 * @returns 对象
 */
export async function CtlType_UpdateObjInLstCache(objCtlType: clsCtlTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCtlTypeObjLstCache = await CtlType_GetObjLstCache();
    const obj = arrCtlTypeObjLstCache.find((x) => x.ctlTypeId == objCtlType.ctlTypeId);
    if (obj != null) {
      objCtlType.ctlTypeId = obj.ctlTypeId;
      ObjectAssign(obj, objCtlType);
    } else {
      arrCtlTypeObjLstCache.push(objCtlType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      ctlType_ConstructorName,
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
export function CtlType_SortFunDefa(a: clsCtlTypeEN, b: clsCtlTypeEN): number {
  return a.ctlTypeId.localeCompare(b.ctlTypeId);
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
export function CtlType_SortFunDefa2Fld(a: clsCtlTypeEN, b: clsCtlTypeEN): number {
  if (a.ctlTypeName == b.ctlTypeName) return a.ctlTypeENName.localeCompare(b.ctlTypeENName);
  else return a.ctlTypeName.localeCompare(b.ctlTypeName);
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
export function CtlType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCtlTypeEN.con_CtlTypeId:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          return a.ctlTypeId.localeCompare(b.ctlTypeId);
        };
      case clsCtlTypeEN.con_CtlTypeName:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      case clsCtlTypeEN.con_CtlTypeENName:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          if (a.ctlTypeENName == null) return -1;
          if (b.ctlTypeENName == null) return 1;
          return a.ctlTypeENName.localeCompare(b.ctlTypeENName);
        };
      case clsCtlTypeEN.con_CtlCnName:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          return a.ctlCnName.localeCompare(b.ctlCnName);
        };
      case clsCtlTypeEN.con_CtlTypeAbbr:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          return a.ctlTypeAbbr.localeCompare(b.ctlTypeAbbr);
        };
      case clsCtlTypeEN.con_HtmlCtrlTypeName:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          if (a.htmlCtrlTypeName == null) return -1;
          if (b.htmlCtrlTypeName == null) return 1;
          return a.htmlCtrlTypeName.localeCompare(b.htmlCtrlTypeName);
        };
      case clsCtlTypeEN.con_IsForApple:
        return (a: clsCtlTypeEN) => {
          if (a.isForApple == true) return 1;
          else return -1;
        };
      case clsCtlTypeEN.con_InUse:
        return (a: clsCtlTypeEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsCtlTypeEN.con_IsVisible:
        return (a: clsCtlTypeEN) => {
          if (a.isVisible == true) return 1;
          else return -1;
        };
      case clsCtlTypeEN.con_OrderNum:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsCtlTypeEN.con_UpdDate:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCtlTypeEN.con_UpdUser:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCtlTypeEN.con_Memo:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CtlType]中不存在!(in ${ctlType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCtlTypeEN.con_CtlTypeId:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          return b.ctlTypeId.localeCompare(a.ctlTypeId);
        };
      case clsCtlTypeEN.con_CtlTypeName:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      case clsCtlTypeEN.con_CtlTypeENName:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          if (b.ctlTypeENName == null) return -1;
          if (a.ctlTypeENName == null) return 1;
          return b.ctlTypeENName.localeCompare(a.ctlTypeENName);
        };
      case clsCtlTypeEN.con_CtlCnName:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          return b.ctlCnName.localeCompare(a.ctlCnName);
        };
      case clsCtlTypeEN.con_CtlTypeAbbr:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          return b.ctlTypeAbbr.localeCompare(a.ctlTypeAbbr);
        };
      case clsCtlTypeEN.con_HtmlCtrlTypeName:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          if (b.htmlCtrlTypeName == null) return -1;
          if (a.htmlCtrlTypeName == null) return 1;
          return b.htmlCtrlTypeName.localeCompare(a.htmlCtrlTypeName);
        };
      case clsCtlTypeEN.con_IsForApple:
        return (b: clsCtlTypeEN) => {
          if (b.isForApple == true) return 1;
          else return -1;
        };
      case clsCtlTypeEN.con_InUse:
        return (b: clsCtlTypeEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsCtlTypeEN.con_IsVisible:
        return (b: clsCtlTypeEN) => {
          if (b.isVisible == true) return 1;
          else return -1;
        };
      case clsCtlTypeEN.con_OrderNum:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsCtlTypeEN.con_UpdDate:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCtlTypeEN.con_UpdUser:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCtlTypeEN.con_Memo:
        return (a: clsCtlTypeEN, b: clsCtlTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CtlType]中不存在!(in ${ctlType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCtlTypeId:所给的关键字
 * @returns 对象
 */
export async function CtlType_GetNameByCtlTypeIdCache(strCtlTypeId: string) {
  if (IsNullOrEmpty(strCtlTypeId) == true) {
    const strMsg = Format(
      '参数:[strCtlTypeId]不能为空!(In clsCtlTypeWApi.GetNameByCtlTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCtlTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strCtlTypeId]的长度:[{0}]不正确!(clsCtlTypeWApi.GetNameByCtlTypeIdCache)',
      strCtlTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCtlTypeObjLstCache = await CtlType_GetObjLstCache();
  if (arrCtlTypeObjLstCache == null) return '';
  try {
    const arrCtlTypeSel = arrCtlTypeObjLstCache.filter((x) => x.ctlTypeId == strCtlTypeId);
    let objCtlType: clsCtlTypeEN;
    if (arrCtlTypeSel.length > 0) {
      objCtlType = arrCtlTypeSel[0];
      return objCtlType.ctlTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strCtlTypeId,
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
export async function CtlType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCtlTypeEN.con_CtlTypeId:
      return (obj: clsCtlTypeEN) => {
        return obj.ctlTypeId === value;
      };
    case clsCtlTypeEN.con_CtlTypeName:
      return (obj: clsCtlTypeEN) => {
        return obj.ctlTypeName === value;
      };
    case clsCtlTypeEN.con_CtlTypeENName:
      return (obj: clsCtlTypeEN) => {
        return obj.ctlTypeENName === value;
      };
    case clsCtlTypeEN.con_CtlCnName:
      return (obj: clsCtlTypeEN) => {
        return obj.ctlCnName === value;
      };
    case clsCtlTypeEN.con_CtlTypeAbbr:
      return (obj: clsCtlTypeEN) => {
        return obj.ctlTypeAbbr === value;
      };
    case clsCtlTypeEN.con_HtmlCtrlTypeName:
      return (obj: clsCtlTypeEN) => {
        return obj.htmlCtrlTypeName === value;
      };
    case clsCtlTypeEN.con_IsForApple:
      return (obj: clsCtlTypeEN) => {
        return obj.isForApple === value;
      };
    case clsCtlTypeEN.con_InUse:
      return (obj: clsCtlTypeEN) => {
        return obj.inUse === value;
      };
    case clsCtlTypeEN.con_IsVisible:
      return (obj: clsCtlTypeEN) => {
        return obj.isVisible === value;
      };
    case clsCtlTypeEN.con_OrderNum:
      return (obj: clsCtlTypeEN) => {
        return obj.orderNum === value;
      };
    case clsCtlTypeEN.con_UpdDate:
      return (obj: clsCtlTypeEN) => {
        return obj.updDate === value;
      };
    case clsCtlTypeEN.con_UpdUser:
      return (obj: clsCtlTypeEN) => {
        return obj.updUser === value;
      };
    case clsCtlTypeEN.con_Memo:
      return (obj: clsCtlTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CtlType]中不存在!(in ${ctlType_ConstructorName}.${strThisFuncName})`;
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
 * @returns 返回一个输出字段值
 */
export async function CtlType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsCtlTypeEN.con_CtlTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCtlTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsCtlTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCtlTypeId = strInValue;
  if (IsNullOrEmpty(strCtlTypeId) == true) {
    return '';
  }
  const objCtlType = await CtlType_GetObjByCtlTypeIdCache(strCtlTypeId);
  if (objCtlType == null) return '';
  if (objCtlType.GetFldValue(strOutFldName) == null) return '';
  return objCtlType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function CtlType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsCtlTypeEN.con_CtlTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrCtlType = await CtlType_GetObjLstCache();
  if (arrCtlType == null) return [];
  let arrCtlTypeSel = arrCtlType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCtlTypeSel = arrCtlTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCtlTypeSel = arrCtlTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCtlTypeSel = arrCtlTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrCtlTypeSel.length == 0) return [];
  return arrCtlTypeSel.map((x) => x.ctlTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CtlType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
export async function CtlType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
export async function CtlType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
export async function CtlType_GetFirstObjAsync(strWhereCond: string): Promise<clsCtlTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
      const objCtlType = CtlType_GetObjFromJsonObj(returnObj);
      return objCtlType;
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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
export async function CtlType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCtlTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsCtlTypeEN.WhereFormat) == false) {
    strWhereCond = clsCtlTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsCtlTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCtlTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrCtlTypeExObjLstCache: Array<clsCtlTypeEN> = CacheHelper.Get(strKey);
    const arrCtlTypeObjLstT = CtlType_GetObjLstByJSONObjLst(arrCtlTypeExObjLstCache);
    return arrCtlTypeObjLstT;
  }
  try {
    const arrCtlTypeExObjLst = await CtlType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCtlTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCtlTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrCtlTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      ctlType_ConstructorName,
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
export async function CtlType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCtlTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsCtlTypeEN.WhereFormat) == false) {
    strWhereCond = clsCtlTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsCtlTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCtlTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCtlTypeExObjLstCache: Array<clsCtlTypeEN> = JSON.parse(strTempObjLst);
    const arrCtlTypeObjLstT = CtlType_GetObjLstByJSONObjLst(arrCtlTypeExObjLstCache);
    return arrCtlTypeObjLstT;
  }
  try {
    const arrCtlTypeExObjLst = await CtlType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCtlTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCtlTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrCtlTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      ctlType_ConstructorName,
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
export async function CtlType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCtlTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCtlTypeObjLstCache: Array<clsCtlTypeEN> = JSON.parse(strTempObjLst);
    return arrCtlTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CtlType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsCtlTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
          ctlType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CtlType_GetObjLstByJSONObjLst(returnObjLst);
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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
export async function CtlType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCtlTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsCtlTypeEN.WhereFormat) == false) {
    strWhereCond = clsCtlTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsCtlTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCtlTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCtlTypeExObjLstCache: Array<clsCtlTypeEN> = JSON.parse(strTempObjLst);
    const arrCtlTypeObjLstT = CtlType_GetObjLstByJSONObjLst(arrCtlTypeExObjLstCache);
    return arrCtlTypeObjLstT;
  }
  try {
    const arrCtlTypeExObjLst = await CtlType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCtlTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCtlTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrCtlTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      ctlType_ConstructorName,
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
export async function CtlType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCtlTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCtlTypeObjLstCache: Array<clsCtlTypeEN> = JSON.parse(strTempObjLst);
    return arrCtlTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CtlType_GetObjLstCache(): Promise<Array<clsCtlTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrCtlTypeObjLstCache;
  switch (clsCtlTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrCtlTypeObjLstCache = await CtlType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrCtlTypeObjLstCache = await CtlType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrCtlTypeObjLstCache = await CtlType_GetObjLstClientCache();
      break;
    default:
      arrCtlTypeObjLstCache = await CtlType_GetObjLstClientCache();
      break;
  }
  return arrCtlTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CtlType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCtlTypeObjLstCache;
  switch (clsCtlTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrCtlTypeObjLstCache = await CtlType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrCtlTypeObjLstCache = await CtlType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrCtlTypeObjLstCache = null;
      break;
    default:
      arrCtlTypeObjLstCache = null;
      break;
  }
  return arrCtlTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCtlTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CtlType_GetSubObjLstCache(objCtlTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCtlTypeObjLstCache = await CtlType_GetObjLstCache();
  let arrCtlTypeSel = arrCtlTypeObjLstCache;
  if (objCtlTypeCond.GetConditions().length == 0) return arrCtlTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objCtlTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrCtlTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCtlTypeCond),
      ctlType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCtlTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCtlTypeId:关键字列表
 * @returns 对象列表
 **/
export async function CtlType_GetObjLstByCtlTypeIdLstAsync(
  arrCtlTypeId: Array<string>,
): Promise<Array<clsCtlTypeEN>> {
  const strThisFuncName = 'GetObjLstByCtlTypeIdLstAsync';
  const strAction = 'GetObjLstByCtlTypeIdLst';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCtlTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          ctlType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CtlType_GetObjLstByJSONObjLst(returnObjLst);
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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param arrstrCtlTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function CtlType_GetObjLstByCtlTypeIdLstCache(arrCtlTypeIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByCtlTypeIdLstCache';
  try {
    const arrCtlTypeObjLstCache = await CtlType_GetObjLstCache();
    const arrCtlTypeSel = arrCtlTypeObjLstCache.filter(
      (x) => arrCtlTypeIdLst.indexOf(x.ctlTypeId) > -1,
    );
    return arrCtlTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCtlTypeIdLst.join(','),
      ctlType_ConstructorName,
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
export async function CtlType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCtlTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
          ctlType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CtlType_GetObjLstByJSONObjLst(returnObjLst);
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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
export async function CtlType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCtlTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
          ctlType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CtlType_GetObjLstByJSONObjLst(returnObjLst);
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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
export async function CtlType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsCtlTypeEN>();
  const arrCtlTypeObjLstCache = await CtlType_GetObjLstCache();
  if (arrCtlTypeObjLstCache.length == 0) return arrCtlTypeObjLstCache;
  let arrCtlTypeSel = arrCtlTypeObjLstCache;
  const objCtlTypeCond = objPagerPara.conditionCollection;
  if (objCtlTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsCtlTypeEN>();
  }
  //console.log("clsCtlTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objCtlTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCtlTypeSel.length == 0) return arrCtlTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCtlTypeSel = arrCtlTypeSel.sort(CtlType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCtlTypeSel = arrCtlTypeSel.sort(objPagerPara.sortFun);
    }
    arrCtlTypeSel = arrCtlTypeSel.slice(intStart, intEnd);
    return arrCtlTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ctlType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCtlTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function CtlType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCtlTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCtlTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
          ctlType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CtlType_GetObjLstByJSONObjLst(returnObjLst);
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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param strCtlTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function CtlType_DelRecordAsync(strCtlTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(ctlType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strCtlTypeId);

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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param arrCtlTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CtlType_DelCtlTypesAsync(arrCtlTypeId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelCtlTypesAsync';
  const strAction = 'DelCtlTypes';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCtlTypeId, config);
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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
export async function CtlType_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCtlTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrCtlTypeObjLst = await CtlType_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsCtlTypeENEx>();
  const arrCtlTypeExObjLst = arrCtlTypeObjLst.map((obj) => {
    const cacheKey = `${obj.ctlTypeId}`;
    if (ctlTypeCache[cacheKey]) {
      const oldObj = ctlTypeCache[cacheKey];
      return oldObj;
    } else {
      const newObj = CtlType_CopyToEx(obj);
      arrNewObj.push(newObj);
      ctlTypeCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await CtlType_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCtlTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrCtlTypeExObjLst) {
      await CtlType_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.ctlTypeId}`;
      ctlTypeCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrCtlTypeExObjLst.length == 0) return arrCtlTypeExObjLst;
  let arrCtlTypeSel: Array<clsCtlTypeENEx> = arrCtlTypeExObjLst;
  const objCtlTypeCond = objPagerPara.conditionCollection;
  if (objCtlTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrCtlTypeExObjLst;
  }
  try {
    for (const objCondition of objCtlTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCtlTypeSel.length == 0) return arrCtlTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrCtlTypeSel = arrCtlTypeSel.sort(
        CtlType_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCtlTypeSel = arrCtlTypeSel.sort(objPagerPara.sortFun);
    }
    arrCtlTypeSel = arrCtlTypeSel.slice(intStart, intEnd);
    return arrCtlTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ctlType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCtlTypeENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objCtlTypeENS:源对象
 * @returns 目标对象=>clsCtlTypeEN:objCtlTypeENT
 **/
export function CtlType_CopyToEx(objCtlTypeENS: clsCtlTypeEN): clsCtlTypeENEx {
  const strThisFuncName = CtlType_CopyToEx.name;
  const objCtlTypeENT = new clsCtlTypeENEx();
  try {
    ObjectAssign(objCtlTypeENT, objCtlTypeENS);
    return objCtlTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ctlType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCtlTypeENT;
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
export function CtlType_FuncMapByFldName(strFldName: string, objCtlTypeEx: clsCtlTypeENEx) {
  const strThisFuncName = CtlType_FuncMapByFldName.name;
  console.log(objCtlTypeEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCtlTypeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
export function CtlType_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return CtlType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return CtlType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function CtlType_DelCtlTypesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelCtlTypesByCondAsync';
  const strAction = 'DelCtlTypesByCond';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param objCtlTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CtlType_AddNewRecordAsync(objCtlTypeEN: clsCtlTypeEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objCtlTypeEN.ctlTypeId === null || objCtlTypeEN.ctlTypeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCtlTypeEN);
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCtlTypeEN, config);
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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param objCtlTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CtlType_AddNewRecordWithMaxIdAsync(
  objCtlTypeEN: clsCtlTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCtlTypeEN, config);
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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objCtlTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CtlType_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param objCtlTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CtlType_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCtlTypeEN);
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param objCtlTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CtlType_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCtlTypeEN);
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
export async function CtlType_AddNewObjSave(objCtlTypeEN: clsCtlTypeEN): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    CtlType_CheckPropertyNew(objCtlTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${ctlType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await CtlType_IsExistAsync(objCtlTypeEN.ctlTypeId);
    if (bolIsExist == true) {
      const strMsg = Format('添加记录时,关键字：{0}已经存在!', objCtlTypeEN.ctlTypeId);
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await CtlType_AddNewRecordAsync(objCtlTypeEN);
    if (returnBool == true) {
      CtlType_ReFreshCache();
    } else {
      const strInfo = `添加[控件类型缩写(CtlType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objCtlTypeEN.ctlTypeId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${ctlType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function CtlType_UpdateObjSave(objCtlTypeEN: clsCtlTypeEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objCtlTypeEN.sfUpdFldSetStr = objCtlTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objCtlTypeEN.ctlTypeId == '' || objCtlTypeEN.ctlTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    CtlType_CheckProperty4Update(objCtlTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${ctlType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await CtlType_UpdateRecordAsync(objCtlTypeEN);
    if (returnBool == true) {
      CtlType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${ctlType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objCtlTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CtlType_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCtlTypeEN);
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param objCtlTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CtlType_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objCtlTypeEN);
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param objCtlTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CtlType_AddNewRecordWithReturnKeyAsync(
  objCtlTypeEN: clsCtlTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCtlTypeEN, config);
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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param objCtlTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CtlType_UpdateRecordAsync(objCtlTypeEN: clsCtlTypeEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCtlTypeEN.sfUpdFldSetStr === undefined ||
    objCtlTypeEN.sfUpdFldSetStr === null ||
    objCtlTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCtlTypeEN.ctlTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCtlTypeEN, config);
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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param objCtlTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CtlType_EditRecordExAsync(objCtlTypeEN: clsCtlTypeEN): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objCtlTypeEN.sfUpdFldSetStr === undefined ||
    objCtlTypeEN.sfUpdFldSetStr === null ||
    objCtlTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCtlTypeEN.ctlTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCtlTypeEN, config);
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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param objCtlTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CtlType_UpdateWithConditionAsync(
  objCtlTypeEN: clsCtlTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCtlTypeEN.sfUpdFldSetStr === undefined ||
    objCtlTypeEN.sfUpdFldSetStr === null ||
    objCtlTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCtlTypeEN.ctlTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);
  objCtlTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCtlTypeEN, config);
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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param objstrCtlTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CtlType_IsExistRecordCache(objCtlTypeCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCtlTypeObjLstCache = await CtlType_GetObjLstCache();
  if (arrCtlTypeObjLstCache == null) return false;
  let arrCtlTypeSel = arrCtlTypeObjLstCache;
  if (objCtlTypeCond.GetConditions().length == 0) return arrCtlTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objCtlTypeCond.GetConditions()) {
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
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCtlTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCtlTypeCond),
      ctlType_ConstructorName,
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
export async function CtlType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param strCtlTypeId:所给的关键字
 * @returns 对象
 */
export async function CtlType_IsExistCache(strCtlTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrCtlTypeObjLstCache = await CtlType_GetObjLstCache();
  if (arrCtlTypeObjLstCache == null) return false;
  try {
    const arrCtlTypeSel = arrCtlTypeObjLstCache.filter((x) => x.ctlTypeId == strCtlTypeId);
    if (arrCtlTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCtlTypeId,
      ctlType_ConstructorName,
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
 * @param strCtlTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CtlType_IsExistAsync(strCtlTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCtlTypeId,
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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
export async function CtlType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
 * @param objCtlTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function CtlType_GetRecCountByCondCache(objCtlTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCtlTypeObjLstCache = await CtlType_GetObjLstCache();
  if (arrCtlTypeObjLstCache == null) return 0;
  let arrCtlTypeSel = arrCtlTypeObjLstCache;
  if (objCtlTypeCond.GetConditions().length == 0) return arrCtlTypeSel.length;
  try {
    for (const objCondition of objCtlTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCtlTypeSel = arrCtlTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCtlTypeSel = arrCtlTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrCtlTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCtlTypeCond),
      ctlType_ConstructorName,
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
export async function CtlType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(ctlType_Controller, strAction);

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
        ctlType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        ctlType_ConstructorName,
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
export function CtlType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CtlType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsCtlTypeEN._CurrTabName;
  switch (clsCtlTypeEN.CacheModeId) {
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
  clsCtlTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function CtlType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsCtlTypeEN._CurrTabName;
    switch (clsCtlTypeEN.CacheModeId) {
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
    clsCtlTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function CtlType_GetLastRefreshTime(): string {
  if (clsCtlTypeEN._RefreshTimeLst.length == 0) return '';
  return clsCtlTypeEN._RefreshTimeLst[clsCtlTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function CtlType_BindDdl_CtlTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CtlTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CtlTypeIdInDivCache");
  let arrObjLstSel = await CtlType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCtlTypeEN.con_CtlTypeId,
    clsCtlTypeEN.con_CtlTypeName,
    '控件类型缩写...',
  );
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param bolIsForApple:
*/
export async function CtlType_BindDdl_CtlTypeIdByIsForAppleInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  bolIsForApple: boolean,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CtlTypeIdByIsForAppleInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CtlTypeIdByIsForAppleInDivCache");
  let arrObjLstSel = await CtlType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.isForApple == bolIsForApple);
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCtlTypeEN.con_CtlTypeId,
    clsCtlTypeEN.con_CtlTypeName,
    '控件类型缩写...',
  );
}
//(IsNeedGC == false)该表下拉框功能不需要生成;
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param bolIsVisible:
*/
export async function CtlType_BindDdl_CtlTypeIdByIsVisibleInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  bolIsVisible: boolean,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CtlTypeIdByIsVisibleInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CtlTypeIdByIsVisibleInDivCache");
  let arrObjLstSel = await CtlType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.isVisible == bolIsVisible);
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCtlTypeEN.con_CtlTypeId,
    clsCtlTypeEN.con_CtlTypeName,
    '控件类型缩写...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function CtlType_GetArrCtlType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CtlTypeIdInDivCache");
  const arrCtlType = new Array<clsCtlTypeEN>();
  let arrObjLstSel = await CtlType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  const obj0 = new clsCtlTypeEN();
  obj0.ctlTypeId = '0';
  obj0.ctlTypeName = '选控件类型缩写...';
  arrCtlType.push(obj0);
  arrObjLstSel.forEach((x) => arrCtlType.push(x));
  return arrCtlType;
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param bolIsForApple:
*/
export async function CtlType_GetArrCtlTypeByIsForApple(bolIsForApple: boolean) {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CtlTypeIdByIsForAppleInDivCache");
  const arrCtlType = new Array<clsCtlTypeEN>();
  let arrObjLstSel = await CtlType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.isForApple == bolIsForApple);
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  const obj0 = new clsCtlTypeEN();
  obj0.ctlTypeId = '0';
  obj0.ctlTypeName = '选控件类型缩写...';
  arrCtlType.push(obj0);
  arrObjLstSel.forEach((x) => arrCtlType.push(x));
  return arrCtlType;
}
//(IsNeedGC == false)该表下拉框功能不需要生成;
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param bolIsVisible:
*/
export async function CtlType_GetArrCtlTypeByIsVisible(bolIsVisible: boolean) {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CtlTypeIdByIsVisibleInDivCache");
  const arrCtlType = new Array<clsCtlTypeEN>();
  let arrObjLstSel = await CtlType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.isVisible == bolIsVisible);
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  const obj0 = new clsCtlTypeEN();
  obj0.ctlTypeId = '0';
  obj0.ctlTypeName = '选控件类型缩写...';
  arrCtlType.push(obj0);
  arrObjLstSel.forEach((x) => arrCtlType.push(x));
  return arrCtlType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CtlType_CheckPropertyNew(pobjCtlTypeEN: clsCtlTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjCtlTypeEN.ctlTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[控件类型名]不能为空(In 控件类型缩写)!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjCtlTypeEN.ctlCnName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[控件类型中文名]不能为空(In 控件类型缩写)!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjCtlTypeEN.ctlTypeAbbr) === true) {
    throw new Error(
      `(errid:Watl000411)字段[控件类型缩写]不能为空(In 控件类型缩写)!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjCtlTypeEN.ctlTypeId) == false && GetStrLen(pobjCtlTypeEN.ctlTypeId) > 2) {
    throw new Error(
      `(errid:Watl000413)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.ctlTypeId}(clsCtlTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlTypeName) == false &&
    GetStrLen(pobjCtlTypeEN.ctlTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[控件类型名(ctlTypeName)]的长度不能超过30(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.ctlTypeName}(clsCtlTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlTypeENName) == false &&
    GetStrLen(pobjCtlTypeEN.ctlTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[控件类型英文名(ctlTypeENName)]的长度不能超过50(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.ctlTypeENName}(clsCtlTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjCtlTypeEN.ctlCnName) == false && GetStrLen(pobjCtlTypeEN.ctlCnName) > 50) {
    throw new Error(
      `(errid:Watl000413)字段[控件类型中文名(ctlCnName)]的长度不能超过50(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.ctlCnName}(clsCtlTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlTypeAbbr) == false &&
    GetStrLen(pobjCtlTypeEN.ctlTypeAbbr) > 5
  ) {
    throw new Error(
      `(errid:Watl000413)字段[控件类型缩写(ctlTypeAbbr)]的长度不能超过5(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.ctlTypeAbbr}(clsCtlTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.htmlCtrlTypeName) == false &&
    GetStrLen(pobjCtlTypeEN.htmlCtrlTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[HtmlCtrlTypeName(htmlCtrlTypeName)]的长度不能超过50(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.htmlCtrlTypeName}(clsCtlTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjCtlTypeEN.updDate) == false && GetStrLen(pobjCtlTypeEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.updDate}(clsCtlTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjCtlTypeEN.updUser) == false && GetStrLen(pobjCtlTypeEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.updUser}(clsCtlTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjCtlTypeEN.memo) == false && GetStrLen(pobjCtlTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.memo}(clsCtlTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlTypeId) == false &&
    undefined !== pobjCtlTypeEN.ctlTypeId &&
    tzDataType.isString(pobjCtlTypeEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[控件类型号(ctlTypeId)]的值:[${pobjCtlTypeEN.ctlTypeId}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlTypeName) == false &&
    undefined !== pobjCtlTypeEN.ctlTypeName &&
    tzDataType.isString(pobjCtlTypeEN.ctlTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[控件类型名(ctlTypeName)]的值:[${pobjCtlTypeEN.ctlTypeName}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlTypeENName) == false &&
    undefined !== pobjCtlTypeEN.ctlTypeENName &&
    tzDataType.isString(pobjCtlTypeEN.ctlTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[控件类型英文名(ctlTypeENName)]的值:[${pobjCtlTypeEN.ctlTypeENName}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlCnName) == false &&
    undefined !== pobjCtlTypeEN.ctlCnName &&
    tzDataType.isString(pobjCtlTypeEN.ctlCnName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[控件类型中文名(ctlCnName)]的值:[${pobjCtlTypeEN.ctlCnName}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlTypeAbbr) == false &&
    undefined !== pobjCtlTypeEN.ctlTypeAbbr &&
    tzDataType.isString(pobjCtlTypeEN.ctlTypeAbbr) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[控件类型缩写(ctlTypeAbbr)]的值:[${pobjCtlTypeEN.ctlTypeAbbr}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.htmlCtrlTypeName) == false &&
    undefined !== pobjCtlTypeEN.htmlCtrlTypeName &&
    tzDataType.isString(pobjCtlTypeEN.htmlCtrlTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[HtmlCtrlTypeName(htmlCtrlTypeName)]的值:[${pobjCtlTypeEN.htmlCtrlTypeName}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCtlTypeEN.isForApple &&
    undefined !== pobjCtlTypeEN.isForApple &&
    tzDataType.isBoolean(pobjCtlTypeEN.isForApple) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[IsForApple(isForApple)]的值:[${pobjCtlTypeEN.isForApple}], 非法,应该为布尔型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCtlTypeEN.inUse &&
    undefined !== pobjCtlTypeEN.inUse &&
    tzDataType.isBoolean(pobjCtlTypeEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjCtlTypeEN.inUse}], 非法,应该为布尔型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCtlTypeEN.isVisible &&
    undefined !== pobjCtlTypeEN.isVisible &&
    tzDataType.isBoolean(pobjCtlTypeEN.isVisible) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否显示(isVisible)]的值:[${pobjCtlTypeEN.isVisible}], 非法,应该为布尔型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCtlTypeEN.orderNum &&
    undefined !== pobjCtlTypeEN.orderNum &&
    tzDataType.isNumber(pobjCtlTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjCtlTypeEN.orderNum}], 非法,应该为数值型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.updDate) == false &&
    undefined !== pobjCtlTypeEN.updDate &&
    tzDataType.isString(pobjCtlTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjCtlTypeEN.updDate}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.updUser) == false &&
    undefined !== pobjCtlTypeEN.updUser &&
    tzDataType.isString(pobjCtlTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjCtlTypeEN.updUser}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.memo) == false &&
    undefined !== pobjCtlTypeEN.memo &&
    tzDataType.isString(pobjCtlTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjCtlTypeEN.memo}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CtlType_CheckProperty4Update(pobjCtlTypeEN: clsCtlTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjCtlTypeEN.ctlTypeId) == false && GetStrLen(pobjCtlTypeEN.ctlTypeId) > 2) {
    throw new Error(
      `(errid:Watl000416)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.ctlTypeId}(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlTypeName) == false &&
    GetStrLen(pobjCtlTypeEN.ctlTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[控件类型名(ctlTypeName)]的长度不能超过30(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.ctlTypeName}(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlTypeENName) == false &&
    GetStrLen(pobjCtlTypeEN.ctlTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[控件类型英文名(ctlTypeENName)]的长度不能超过50(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.ctlTypeENName}(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjCtlTypeEN.ctlCnName) == false && GetStrLen(pobjCtlTypeEN.ctlCnName) > 50) {
    throw new Error(
      `(errid:Watl000416)字段[控件类型中文名(ctlCnName)]的长度不能超过50(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.ctlCnName}(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlTypeAbbr) == false &&
    GetStrLen(pobjCtlTypeEN.ctlTypeAbbr) > 5
  ) {
    throw new Error(
      `(errid:Watl000416)字段[控件类型缩写(ctlTypeAbbr)]的长度不能超过5(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.ctlTypeAbbr}(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.htmlCtrlTypeName) == false &&
    GetStrLen(pobjCtlTypeEN.htmlCtrlTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[HtmlCtrlTypeName(htmlCtrlTypeName)]的长度不能超过50(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.htmlCtrlTypeName}(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjCtlTypeEN.updDate) == false && GetStrLen(pobjCtlTypeEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.updDate}(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjCtlTypeEN.updUser) == false && GetStrLen(pobjCtlTypeEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.updUser}(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjCtlTypeEN.memo) == false && GetStrLen(pobjCtlTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 控件类型缩写(CtlType))!值:${pobjCtlTypeEN.memo}(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlTypeId) == false &&
    undefined !== pobjCtlTypeEN.ctlTypeId &&
    tzDataType.isString(pobjCtlTypeEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[控件类型号(ctlTypeId)]的值:[${pobjCtlTypeEN.ctlTypeId}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlTypeName) == false &&
    undefined !== pobjCtlTypeEN.ctlTypeName &&
    tzDataType.isString(pobjCtlTypeEN.ctlTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[控件类型名(ctlTypeName)]的值:[${pobjCtlTypeEN.ctlTypeName}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlTypeENName) == false &&
    undefined !== pobjCtlTypeEN.ctlTypeENName &&
    tzDataType.isString(pobjCtlTypeEN.ctlTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[控件类型英文名(ctlTypeENName)]的值:[${pobjCtlTypeEN.ctlTypeENName}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlCnName) == false &&
    undefined !== pobjCtlTypeEN.ctlCnName &&
    tzDataType.isString(pobjCtlTypeEN.ctlCnName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[控件类型中文名(ctlCnName)]的值:[${pobjCtlTypeEN.ctlCnName}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlTypeAbbr) == false &&
    undefined !== pobjCtlTypeEN.ctlTypeAbbr &&
    tzDataType.isString(pobjCtlTypeEN.ctlTypeAbbr) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[控件类型缩写(ctlTypeAbbr)]的值:[${pobjCtlTypeEN.ctlTypeAbbr}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.htmlCtrlTypeName) == false &&
    undefined !== pobjCtlTypeEN.htmlCtrlTypeName &&
    tzDataType.isString(pobjCtlTypeEN.htmlCtrlTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[HtmlCtrlTypeName(htmlCtrlTypeName)]的值:[${pobjCtlTypeEN.htmlCtrlTypeName}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCtlTypeEN.isForApple &&
    undefined !== pobjCtlTypeEN.isForApple &&
    tzDataType.isBoolean(pobjCtlTypeEN.isForApple) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[IsForApple(isForApple)]的值:[${pobjCtlTypeEN.isForApple}], 非法,应该为布尔型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCtlTypeEN.inUse &&
    undefined !== pobjCtlTypeEN.inUse &&
    tzDataType.isBoolean(pobjCtlTypeEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjCtlTypeEN.inUse}], 非法,应该为布尔型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCtlTypeEN.isVisible &&
    undefined !== pobjCtlTypeEN.isVisible &&
    tzDataType.isBoolean(pobjCtlTypeEN.isVisible) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否显示(isVisible)]的值:[${pobjCtlTypeEN.isVisible}], 非法,应该为布尔型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCtlTypeEN.orderNum &&
    undefined !== pobjCtlTypeEN.orderNum &&
    tzDataType.isNumber(pobjCtlTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjCtlTypeEN.orderNum}], 非法,应该为数值型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.updDate) == false &&
    undefined !== pobjCtlTypeEN.updDate &&
    tzDataType.isString(pobjCtlTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjCtlTypeEN.updDate}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.updUser) == false &&
    undefined !== pobjCtlTypeEN.updUser &&
    tzDataType.isString(pobjCtlTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjCtlTypeEN.updUser}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCtlTypeEN.memo) == false &&
    undefined !== pobjCtlTypeEN.memo &&
    tzDataType.isString(pobjCtlTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjCtlTypeEN.memo}], 非法,应该为字符型(In 控件类型缩写(CtlType))!(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjCtlTypeEN.ctlTypeId) === true ||
    pobjCtlTypeEN.ctlTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[控件类型号]不能为空(In 控件类型缩写)!(clsCtlTypeBL:CheckProperty4Update)`,
    );
  }
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
export function CtlType_GetJSONStrByObj(pobjCtlTypeEN: clsCtlTypeEN): string {
  pobjCtlTypeEN.sfUpdFldSetStr = pobjCtlTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCtlTypeEN);
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
export function CtlType_GetObjLstByJSONStr(strJSON: string): Array<clsCtlTypeEN> {
  let arrCtlTypeObjLst = new Array<clsCtlTypeEN>();
  if (strJSON === '') {
    return arrCtlTypeObjLst;
  }
  try {
    arrCtlTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCtlTypeObjLst;
  }
  return arrCtlTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCtlTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CtlType_GetObjLstByJSONObjLst(
  arrCtlTypeObjLstS: Array<clsCtlTypeEN>,
): Array<clsCtlTypeEN> {
  const arrCtlTypeObjLst = new Array<clsCtlTypeEN>();
  for (const objInFor of arrCtlTypeObjLstS) {
    const obj1 = CtlType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCtlTypeObjLst.push(obj1);
  }
  return arrCtlTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CtlType_GetObjByJSONStr(strJSON: string): clsCtlTypeEN {
  let pobjCtlTypeEN = new clsCtlTypeEN();
  if (strJSON === '') {
    return pobjCtlTypeEN;
  }
  try {
    pobjCtlTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCtlTypeEN;
  }
  return pobjCtlTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CtlType_GetCombineCondition(objCtlTypeCond: clsCtlTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCtlTypeCond.dicFldComparisonOp,
      clsCtlTypeEN.con_CtlTypeId,
    ) == true
  ) {
    const strComparisonOpCtlTypeId: string =
      objCtlTypeCond.dicFldComparisonOp[clsCtlTypeEN.con_CtlTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCtlTypeEN.con_CtlTypeId,
      objCtlTypeCond.ctlTypeId,
      strComparisonOpCtlTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCtlTypeCond.dicFldComparisonOp,
      clsCtlTypeEN.con_CtlTypeName,
    ) == true
  ) {
    const strComparisonOpCtlTypeName: string =
      objCtlTypeCond.dicFldComparisonOp[clsCtlTypeEN.con_CtlTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCtlTypeEN.con_CtlTypeName,
      objCtlTypeCond.ctlTypeName,
      strComparisonOpCtlTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCtlTypeCond.dicFldComparisonOp,
      clsCtlTypeEN.con_CtlTypeENName,
    ) == true
  ) {
    const strComparisonOpCtlTypeENName: string =
      objCtlTypeCond.dicFldComparisonOp[clsCtlTypeEN.con_CtlTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCtlTypeEN.con_CtlTypeENName,
      objCtlTypeCond.ctlTypeENName,
      strComparisonOpCtlTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCtlTypeCond.dicFldComparisonOp,
      clsCtlTypeEN.con_CtlCnName,
    ) == true
  ) {
    const strComparisonOpCtlCnName: string =
      objCtlTypeCond.dicFldComparisonOp[clsCtlTypeEN.con_CtlCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCtlTypeEN.con_CtlCnName,
      objCtlTypeCond.ctlCnName,
      strComparisonOpCtlCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCtlTypeCond.dicFldComparisonOp,
      clsCtlTypeEN.con_CtlTypeAbbr,
    ) == true
  ) {
    const strComparisonOpCtlTypeAbbr: string =
      objCtlTypeCond.dicFldComparisonOp[clsCtlTypeEN.con_CtlTypeAbbr];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCtlTypeEN.con_CtlTypeAbbr,
      objCtlTypeCond.ctlTypeAbbr,
      strComparisonOpCtlTypeAbbr,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCtlTypeCond.dicFldComparisonOp,
      clsCtlTypeEN.con_HtmlCtrlTypeName,
    ) == true
  ) {
    const strComparisonOpHtmlCtrlTypeName: string =
      objCtlTypeCond.dicFldComparisonOp[clsCtlTypeEN.con_HtmlCtrlTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCtlTypeEN.con_HtmlCtrlTypeName,
      objCtlTypeCond.htmlCtrlTypeName,
      strComparisonOpHtmlCtrlTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCtlTypeCond.dicFldComparisonOp,
      clsCtlTypeEN.con_IsForApple,
    ) == true
  ) {
    if (objCtlTypeCond.isForApple == true) {
      strWhereCond += Format(" And {0} = '1'", clsCtlTypeEN.con_IsForApple);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCtlTypeEN.con_IsForApple);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCtlTypeCond.dicFldComparisonOp,
      clsCtlTypeEN.con_InUse,
    ) == true
  ) {
    if (objCtlTypeCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsCtlTypeEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCtlTypeEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCtlTypeCond.dicFldComparisonOp,
      clsCtlTypeEN.con_IsVisible,
    ) == true
  ) {
    if (objCtlTypeCond.isVisible == true) {
      strWhereCond += Format(" And {0} = '1'", clsCtlTypeEN.con_IsVisible);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCtlTypeEN.con_IsVisible);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCtlTypeCond.dicFldComparisonOp,
      clsCtlTypeEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objCtlTypeCond.dicFldComparisonOp[clsCtlTypeEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCtlTypeEN.con_OrderNum,
      objCtlTypeCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCtlTypeCond.dicFldComparisonOp,
      clsCtlTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCtlTypeCond.dicFldComparisonOp[clsCtlTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCtlTypeEN.con_UpdDate,
      objCtlTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCtlTypeCond.dicFldComparisonOp,
      clsCtlTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCtlTypeCond.dicFldComparisonOp[clsCtlTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCtlTypeEN.con_UpdUser,
      objCtlTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCtlTypeCond.dicFldComparisonOp,
      clsCtlTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objCtlTypeCond.dicFldComparisonOp[clsCtlTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCtlTypeEN.con_Memo,
      objCtlTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCtlTypeENS:源对象
 * @param objCtlTypeENT:目标对象
 */
export function CtlType_GetObjFromJsonObj(objCtlTypeENS: clsCtlTypeEN): clsCtlTypeEN {
  const objCtlTypeENT: clsCtlTypeEN = new clsCtlTypeEN();
  ObjectAssign(objCtlTypeENT, objCtlTypeENS);
  return objCtlTypeENT;
}
