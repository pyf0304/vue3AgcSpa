/**
 * 类名:clsPrjFileTypeWApi
 * 表名:PrjFileType(00050649)
 * 版本:2026.05.30(服务器:PYF-AI)
 * 日期:2026/06/13 04:48:22
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:资源管理(ResourceMan)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程文件类型(PrjFileType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2026年06月13日.
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
import { prjFileTypeCache, isFuncMapCache } from '@/views/ResourceMan/PrjFileTypeVueShare';
import { clsPrjFileTypeENEx } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeENEx';
import { clsPrjFileTypeEN, PrjFileTypeKey } from '@/ts/L0Entity/ResourceMan/clsPrjFileTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const prjFileType_Controller = 'PrjFileTypeApi';
export const prjFileType_ConstructorName = 'prjFileType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param key:包含关键字的对象
 * @returns 对象
 **/
export async function PrjFileType_GetObjByKeyAsync(
  key: PrjFileTypeKey,
): Promise<clsPrjFileTypeEN | null> {
  const strThisFuncName = 'GetObjByKeyAsync';
  if (key.prjFileTypeId === undefined || key.prjFileTypeId === null || key.prjFileTypeId === '') {
    const strMsg = Format(
      '关键字段[PrjFileTypeId]不能为空!(in {0}.{1})',
      prjFileType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strAction = 'GetObjByPrjFileTypeId';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjFileTypeId: key.prjFileTypeId,
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
      const objPrjFileType = PrjFileType_GetObjFromJsonObj(returnObj);
      return objPrjFileType;
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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
 * 根据关键字获取特定对象, 从 localStorage 中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param key:关键字对象
 * @returns 对象
 */
export async function PrjFileType_GetObjByKeylocalStorage(key: PrjFileTypeKey) {
  const strThisFuncName = 'GetObjByPrjFileTypeIdlocalStorage';

  if (IsNullOrEmpty(key.prjFileTypeId) == true) {
    const strMsg = Format(
      '参数:[key.prjFileTypeId]不能为空!(In clsPrjFileTypeWApi.GetObjByPrjFileTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (key.prjFileTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[key.prjFileTypeId]的长度:[{0}]不正确!(clsPrjFileTypeWApi.GetObjByPrjFileTypeIdlocalStorage)',
      key.prjFileTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPrjFileTypeEN._CurrTabName, key.prjFileTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPrjFileTypeCache: clsPrjFileTypeEN = JSON.parse(strTempObj);
    return objPrjFileTypeCache;
  }
  try {
    const objPrjFileType = await PrjFileType_GetObjByKeyAsync(key);
    if (objPrjFileType != null) {
      localStorage.setItem(strKey, JSON.stringify(objPrjFileType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPrjFileType;
    }
    return objPrjFileType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      key.prjFileTypeId,
      prjFileType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取特定对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param key:关键字对象
 * @returns 对象
 */
export async function PrjFileType_GetObjByKeyCache(key: PrjFileTypeKey, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByPrjFileTypeIdCache';

  if (IsNullOrEmpty(key.prjFileTypeId) == true) {
    const strMsg = Format(
      '参数:[key.prjFileTypeId]不能为空!(In clsPrjFileTypeWApi.GetObjByPrjFileTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (key.prjFileTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[key.prjFileTypeId]的长度:[{0}]不正确!(clsPrjFileTypeWApi.GetObjByPrjFileTypeIdCache)',
      key.prjFileTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjFileTypeObjLstCache = await PrjFileType_GetObjLstCache();
  try {
    const arrPrjFileTypeSel = arrPrjFileTypeObjLstCache.filter(
      (x) => x.prjFileTypeId == key.prjFileTypeId,
    );
    let objPrjFileType: clsPrjFileTypeEN;
    if (arrPrjFileTypeSel.length > 0) {
      objPrjFileType = arrPrjFileTypeSel[0];
      return objPrjFileType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPrjFileTypeConst = await PrjFileType_GetObjByKeyAsync(key);
        if (objPrjFileTypeConst != null) {
          PrjFileType_ReFreshThisCache();
          return objPrjFileTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      key.prjFileTypeId,
      prjFileType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objPrjFileType:所给的对象
 * @returns 对象
 */
export async function PrjFileType_UpdateObjInLstCache(objPrjFileType: clsPrjFileTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPrjFileTypeObjLstCache = await PrjFileType_GetObjLstCache();
    const obj = arrPrjFileTypeObjLstCache.find(
      (x) => x.prjFileTypeName == objPrjFileType.prjFileTypeName,
    );
    if (obj != null) {
      objPrjFileType.prjFileTypeId = obj.prjFileTypeId;
      ObjectAssign(obj, objPrjFileType);
    } else {
      arrPrjFileTypeObjLstCache.push(objPrjFileType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      prjFileType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjFileType_SortFunDefa(a: clsPrjFileTypeEN, b: clsPrjFileTypeEN): number {
  return a.prjFileTypeId.localeCompare(b.prjFileTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjFileType_SortFunDefa2Fld(a: clsPrjFileTypeEN, b: clsPrjFileTypeEN): number {
  if (a.prjFileTypeName == b.prjFileTypeName)
    return a.prjFileTypeENName.localeCompare(b.prjFileTypeENName);
  else return a.prjFileTypeName.localeCompare(b.prjFileTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjFileType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjFileTypeEN.con_PrjFileTypeId:
        return (a: clsPrjFileTypeEN, b: clsPrjFileTypeEN) => {
          return a.prjFileTypeId.localeCompare(b.prjFileTypeId);
        };
      case clsPrjFileTypeEN.con_PrjFileTypeName:
        return (a: clsPrjFileTypeEN, b: clsPrjFileTypeEN) => {
          return a.prjFileTypeName.localeCompare(b.prjFileTypeName);
        };
      case clsPrjFileTypeEN.con_PrjFileTypeENName:
        return (a: clsPrjFileTypeEN, b: clsPrjFileTypeEN) => {
          if (a.prjFileTypeENName == null) return -1;
          if (b.prjFileTypeENName == null) return 1;
          return a.prjFileTypeENName.localeCompare(b.prjFileTypeENName);
        };
      case clsPrjFileTypeEN.con_InUse:
        return (a: clsPrjFileTypeEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsPrjFileTypeEN.con_OrderNum:
        return (a: clsPrjFileTypeEN, b: clsPrjFileTypeEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsPrjFileTypeEN.con_UpdDate:
        return (a: clsPrjFileTypeEN, b: clsPrjFileTypeEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPrjFileTypeEN.con_UpdUserId:
        return (a: clsPrjFileTypeEN, b: clsPrjFileTypeEN) => {
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsPrjFileTypeEN.con_Memo:
        return (a: clsPrjFileTypeEN, b: clsPrjFileTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjFileType]中不存在!(in ${prjFileType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrjFileTypeEN.con_PrjFileTypeId:
        return (a: clsPrjFileTypeEN, b: clsPrjFileTypeEN) => {
          return b.prjFileTypeId.localeCompare(a.prjFileTypeId);
        };
      case clsPrjFileTypeEN.con_PrjFileTypeName:
        return (a: clsPrjFileTypeEN, b: clsPrjFileTypeEN) => {
          return b.prjFileTypeName.localeCompare(a.prjFileTypeName);
        };
      case clsPrjFileTypeEN.con_PrjFileTypeENName:
        return (a: clsPrjFileTypeEN, b: clsPrjFileTypeEN) => {
          if (b.prjFileTypeENName == null) return -1;
          if (a.prjFileTypeENName == null) return 1;
          return b.prjFileTypeENName.localeCompare(a.prjFileTypeENName);
        };
      case clsPrjFileTypeEN.con_InUse:
        return (b: clsPrjFileTypeEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsPrjFileTypeEN.con_OrderNum:
        return (a: clsPrjFileTypeEN, b: clsPrjFileTypeEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsPrjFileTypeEN.con_UpdDate:
        return (a: clsPrjFileTypeEN, b: clsPrjFileTypeEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPrjFileTypeEN.con_UpdUserId:
        return (a: clsPrjFileTypeEN, b: clsPrjFileTypeEN) => {
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsPrjFileTypeEN.con_Memo:
        return (a: clsPrjFileTypeEN, b: clsPrjFileTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjFileType]中不存在!(in ${prjFileType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param key:关键字对象
 * @returns 名称属性值
 */
export async function PrjFileType_GetNameByKeyCache(key: PrjFileTypeKey) {
  if (IsNullOrEmpty(key.prjFileTypeId) == true) {
    const strMsg = Format(
      '参数:[key.prjFileTypeId]不能为空!(In clsPrjFileTypeWApi.GetNameByKeyCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (key.prjFileTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[key.prjFileTypeId]的长度:[{0}]不正确!(clsPrjFileTypeWApi.GetNameByKeyCache)',
      key.prjFileTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjFileTypeObjLstCache = await PrjFileType_GetObjLstCache();
  if (arrPrjFileTypeObjLstCache == null) return '';
  try {
    const arrPrjFileTypeSel = arrPrjFileTypeObjLstCache.filter(
      (x) => x.prjFileTypeId == key.prjFileTypeId,
    );
    let objPrjFileType: clsPrjFileTypeEN;
    if (arrPrjFileTypeSel.length > 0) {
      objPrjFileType = arrPrjFileTypeSel[0];
      return objPrjFileType.prjFileTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      key.prjFileTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2026-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PrjFileType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrjFileTypeEN.con_PrjFileTypeId:
      return (obj: clsPrjFileTypeEN) => {
        return obj.prjFileTypeId === value;
      };
    case clsPrjFileTypeEN.con_PrjFileTypeName:
      return (obj: clsPrjFileTypeEN) => {
        return obj.prjFileTypeName === value;
      };
    case clsPrjFileTypeEN.con_PrjFileTypeENName:
      return (obj: clsPrjFileTypeEN) => {
        return obj.prjFileTypeENName === value;
      };
    case clsPrjFileTypeEN.con_InUse:
      return (obj: clsPrjFileTypeEN) => {
        return obj.inUse === value;
      };
    case clsPrjFileTypeEN.con_OrderNum:
      return (obj: clsPrjFileTypeEN) => {
        return obj.orderNum === value;
      };
    case clsPrjFileTypeEN.con_UpdDate:
      return (obj: clsPrjFileTypeEN) => {
        return obj.updDate === value;
      };
    case clsPrjFileTypeEN.con_UpdUserId:
      return (obj: clsPrjFileTypeEN) => {
        return obj.updUserId === value;
      };
    case clsPrjFileTypeEN.con_Memo:
      return (obj: clsPrjFileTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrjFileType]中不存在!(in ${prjFileType_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function PrjFileType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsPrjFileTypeEN.con_PrjFileTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPrjFileTypeEN._AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPrjFileTypeEN._AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strPrjFileTypeId = strInValue;
  if (IsNullOrEmpty(strPrjFileTypeId) == true) {
    return '';
  }
  const objPrjFileType = await PrjFileType_GetObjByKeyCache({ prjFileTypeId: strPrjFileTypeId });
  if (objPrjFileType == null) return '';
  if (objPrjFileType.GetFldValue(strOutFldName) == null) return '';
  return objPrjFileType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function PrjFileType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsPrjFileTypeEN.con_PrjFileTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrPrjFileType = await PrjFileType_GetObjLstCache();
  if (arrPrjFileType == null) return [];
  let arrPrjFileTypeSel = arrPrjFileType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPrjFileTypeSel.length == 0) return [];
  return arrPrjFileTypeSel.map((x) => x.prjFileTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjFileType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
export async function PrjFileType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
export async function PrjFileType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
export async function PrjFileType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPrjFileTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

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
      const objPrjFileType = PrjFileType_GetObjFromJsonObj(returnObj);
      return objPrjFileType;
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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
export async function PrjFileType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjFileTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjFileTypeEN._WhereFormat) == false) {
    strWhereCond = clsPrjFileTypeEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsPrjFileTypeEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjFileTypeEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPrjFileTypeExObjLstCache: Array<clsPrjFileTypeEN> = CacheHelper.Get(strKey);
    const arrPrjFileTypeObjLstT = PrjFileType_GetObjLstByJSONObjLst(arrPrjFileTypeExObjLstCache);
    return arrPrjFileTypeObjLstT;
  }
  try {
    const arrPrjFileTypeExObjLst = await PrjFileType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPrjFileTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjFileTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjFileTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjFileType_ConstructorName,
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
export async function PrjFileType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjFileTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjFileTypeEN._WhereFormat) == false) {
    strWhereCond = clsPrjFileTypeEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsPrjFileTypeEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjFileTypeEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjFileTypeExObjLstCache: Array<clsPrjFileTypeEN> = JSON.parse(strTempObjLst);
    const arrPrjFileTypeObjLstT = PrjFileType_GetObjLstByJSONObjLst(arrPrjFileTypeExObjLstCache);
    return arrPrjFileTypeObjLstT;
  }
  try {
    const arrPrjFileTypeExObjLst = await PrjFileType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPrjFileTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjFileTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjFileTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjFileType_ConstructorName,
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
export async function PrjFileType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjFileTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjFileTypeObjLstCache: Array<clsPrjFileTypeEN> = JSON.parse(strTempObjLst);
    return arrPrjFileTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PrjFileType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPrjFileTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

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
          prjFileType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFileType_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
export async function PrjFileType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjFileTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjFileTypeEN._WhereFormat) == false) {
    strWhereCond = clsPrjFileTypeEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsPrjFileTypeEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjFileTypeEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjFileTypeExObjLstCache: Array<clsPrjFileTypeEN> = JSON.parse(strTempObjLst);
    const arrPrjFileTypeObjLstT = PrjFileType_GetObjLstByJSONObjLst(arrPrjFileTypeExObjLstCache);
    return arrPrjFileTypeObjLstT;
  }
  try {
    const arrPrjFileTypeExObjLst = await PrjFileType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPrjFileTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjFileTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjFileTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjFileType_ConstructorName,
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
export async function PrjFileType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjFileTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjFileTypeObjLstCache: Array<clsPrjFileTypeEN> = JSON.parse(strTempObjLst);
    return arrPrjFileTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjFileType_GetObjLstCache(): Promise<Array<clsPrjFileTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrPrjFileTypeObjLstCache;
  switch (clsPrjFileTypeEN._CacheModeId) {
    case '04': //sessionStorage
      arrPrjFileTypeObjLstCache = await PrjFileType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrPrjFileTypeObjLstCache = await PrjFileType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrPrjFileTypeObjLstCache = await PrjFileType_GetObjLstClientCache();
      break;
    default:
      arrPrjFileTypeObjLstCache = await PrjFileType_GetObjLstClientCache();
      break;
  }
  return arrPrjFileTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjFileType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPrjFileTypeObjLstCache;
  switch (clsPrjFileTypeEN._CacheModeId) {
    case '04': //sessionStorage
      arrPrjFileTypeObjLstCache = await PrjFileType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrPrjFileTypeObjLstCache = await PrjFileType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrPrjFileTypeObjLstCache = null;
      break;
    default:
      arrPrjFileTypeObjLstCache = null;
      break;
  }
  return arrPrjFileTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPrjFileTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjFileType_GetSubObjLstCache(objPrjFileTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPrjFileTypeObjLstCache = await PrjFileType_GetObjLstCache();
  let arrPrjFileTypeSel = arrPrjFileTypeObjLstCache;
  if (objPrjFileTypeCond.GetConditions().length == 0) return arrPrjFileTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objPrjFileTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPrjFileTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjFileTypeCond),
      prjFileType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjFileTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPrjFileTypeId:关键字列表
 * @returns 对象列表
 **/
export async function PrjFileType_GetObjLstByPrjFileTypeIdLstAsync(
  arrPrjFileTypeId: Array<string>,
): Promise<Array<clsPrjFileTypeEN>> {
  const strThisFuncName = 'GetObjLstByPrjFileTypeIdLstAsync';
  const strAction = 'GetObjLstByPrjFileTypeIdLst';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrjFileTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          prjFileType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFileType_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
 * @param arrstrPrjFileTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function PrjFileType_GetObjLstByPrjFileTypeIdLstCache(
  arrPrjFileTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByPrjFileTypeIdLstCache';
  try {
    const arrPrjFileTypeObjLstCache = await PrjFileType_GetObjLstCache();
    const arrPrjFileTypeSel = arrPrjFileTypeObjLstCache.filter(
      (x) => arrPrjFileTypeIdLst.indexOf(x.prjFileTypeId) > -1,
    );
    return arrPrjFileTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPrjFileTypeIdLst.join(','),
      prjFileType_ConstructorName,
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
export async function PrjFileType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrjFileTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

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
          prjFileType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFileType_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
export async function PrjFileType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrjFileTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

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
          prjFileType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFileType_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
export async function PrjFileType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjFileTypeEN>();
  const arrPrjFileTypeObjLstCache = await PrjFileType_GetObjLstCache();
  if (arrPrjFileTypeObjLstCache.length == 0) return arrPrjFileTypeObjLstCache;
  let arrPrjFileTypeSel = arrPrjFileTypeObjLstCache;
  const objPrjFileTypeCond = objPagerPara.conditionCollection;
  if (objPrjFileTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsPrjFileTypeEN>();
  }
  //console.log("clsPrjFileTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objPrjFileTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrjFileTypeSel.length == 0) return arrPrjFileTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjFileTypeSel = arrPrjFileTypeSel.sort(PrjFileType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjFileTypeSel = arrPrjFileTypeSel.sort(objPagerPara.sortFun);
    }
    arrPrjFileTypeSel = arrPrjFileTypeSel.slice(intStart, intEnd);
    return arrPrjFileTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjFileType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjFileTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PrjFileType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjFileTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjFileTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

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
          prjFileType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFileType_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
 * @param key:关键字对象
 * @returns 获取删除的结果
 **/
export async function PrjFileType_DelRecordAsync(key: PrjFileTypeKey): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(prjFileType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, key.prjFileTypeId);

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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
 * @param arrPrjFileTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PrjFileType_DelKeysAsync(arrPrjFileTypeId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelKeysAsync';
  const strAction = 'DelKeys';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrjFileTypeId, config);
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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
export async function PrjFileType_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjFileTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrPrjFileTypeObjLst = await PrjFileType_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsPrjFileTypeENEx>();
  const arrPrjFileTypeExObjLst = arrPrjFileTypeObjLst.map((obj) => {
    const cacheKey = `${obj.prjFileTypeId}`;
    if (prjFileTypeCache[cacheKey]) {
      const oldObj = prjFileTypeCache[cacheKey];
      return oldObj;
    } else {
      const newObj = PrjFileType_CopyToEx(obj);
      arrNewObj.push(newObj);
      prjFileTypeCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await PrjFileType_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsPrjFileTypeEN._AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrPrjFileTypeExObjLst) {
      await PrjFileType_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.prjFileTypeId}`;
      prjFileTypeCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrPrjFileTypeExObjLst.length == 0) return arrPrjFileTypeExObjLst;
  let arrPrjFileTypeSel: Array<clsPrjFileTypeENEx> = arrPrjFileTypeExObjLst;
  const objPrjFileTypeCond = objPagerPara.conditionCollection;
  if (objPrjFileTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrPrjFileTypeExObjLst;
  }
  try {
    for (const objCondition of objPrjFileTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrjFileTypeSel.length == 0) return arrPrjFileTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrPrjFileTypeSel = arrPrjFileTypeSel.sort(
        PrjFileType_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjFileTypeSel = arrPrjFileTypeSel.sort(objPagerPara.sortFun);
    }
    arrPrjFileTypeSel = arrPrjFileTypeSel.slice(intStart, intEnd);
    return arrPrjFileTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjFileType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjFileTypeENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objPrjFileTypeENS:源对象
 * @returns 目标对象=>clsPrjFileTypeEN:objPrjFileTypeENT
 **/
export function PrjFileType_CopyToEx(objPrjFileTypeENS: clsPrjFileTypeEN): clsPrjFileTypeENEx {
  const strThisFuncName = PrjFileType_CopyToEx.name;
  const objPrjFileTypeENT = new clsPrjFileTypeENEx();
  try {
    ObjectAssign(objPrjFileTypeENT, objPrjFileTypeENS);
    return objPrjFileTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjFileType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPrjFileTypeENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2026-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function PrjFileType_FuncMapByFldName(
  strFldName: string,
  objPrjFileTypeEx: clsPrjFileTypeENEx,
) {
  const strThisFuncName = PrjFileType_FuncMapByFldName.name;
  console.log(objPrjFileTypeEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsPrjFileTypeEN._AttributeName;
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
 * 日期:2026-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjFileType_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return PrjFileType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return PrjFileType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function PrjFileType_DelPrjFileTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPrjFileTypesByCondAsync';
  const strAction = 'DelPrjFileTypesByCond';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
 * @param objPrjFileTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFileType_AddNewRecordAsync(
  objPrjFileTypeEN: clsPrjFileTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPrjFileTypeEN);
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFileTypeEN, config);
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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
 * @param objPrjFileTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFileType_AddNewRecordWithMaxIdAsync(
  objPrjFileTypeEN: clsPrjFileTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFileTypeEN, config);
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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
export async function PrjFileType_AddNewObjSave(
  objPrjFileTypeEN: clsPrjFileTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    PrjFileType_CheckPropertyNew(objPrjFileTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjFileType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjFileType_CheckUniCond4Add(objPrjFileTypeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await PrjFileType_AddNewRecordWithMaxIdAsync(objPrjFileTypeEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      PrjFileType_ReFreshCache();
    } else {
      const strInfo = `添加[工程文件类型(PrjFileType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${prjFileType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function PrjFileType_CheckUniCond4Add(
  objPrjFileTypeEN: clsPrjFileTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = PrjFileType_GetUniCondStr(objPrjFileTypeEN);
  const bolIsExistCondition = await PrjFileType_IsExistRecordAsync(strUniquenessCondition);
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
export async function PrjFileType_CheckUniCond4Update(
  objPrjFileTypeEN: clsPrjFileTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = PrjFileType_GetUniCondStr4Update(objPrjFileTypeEN);
  const bolIsExistCondition = await PrjFileType_IsExistRecordAsync(strUniquenessCondition);
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
export async function PrjFileType_UpdateObjSave(
  objPrjFileTypeEN: clsPrjFileTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objPrjFileTypeEN.sfUpdFldSetStr = objPrjFileTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objPrjFileTypeEN.prjFileTypeId == '' || objPrjFileTypeEN.prjFileTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    PrjFileType_CheckProperty4Update(objPrjFileTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjFileType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjFileType_CheckUniCond4Update(objPrjFileTypeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await PrjFileType_UpdateRecordAsync(objPrjFileTypeEN);
    if (returnBool == true) {
      PrjFileType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${prjFileType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objPrjFileTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrjFileType_AddNewRecordWithReturnKeyAsync(
  objPrjFileTypeEN: clsPrjFileTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFileTypeEN, config);
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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
 * @param objPrjFileTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjFileType_UpdateRecordAsync(
  objPrjFileTypeEN: clsPrjFileTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrjFileTypeEN.sfUpdFldSetStr === undefined ||
    objPrjFileTypeEN.sfUpdFldSetStr === null ||
    objPrjFileTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjFileTypeEN.prjFileTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFileTypeEN, config);
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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
 * @param objPrjFileTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjFileType_EditRecordExAsync(
  objPrjFileTypeEN: clsPrjFileTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objPrjFileTypeEN.sfUpdFldSetStr === undefined ||
    objPrjFileTypeEN.sfUpdFldSetStr === null ||
    objPrjFileTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjFileTypeEN.prjFileTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFileTypeEN, config);
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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
 * @param objPrjFileTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjFileType_UpdateWithConditionAsync(
  objPrjFileTypeEN: clsPrjFileTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrjFileTypeEN.sfUpdFldSetStr === undefined ||
    objPrjFileTypeEN.sfUpdFldSetStr === null ||
    objPrjFileTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjFileTypeEN.prjFileTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);
  objPrjFileTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFileTypeEN, config);
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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
 * @param objstrPrjFileTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjFileType_IsExistRecordCache(objPrjFileTypeCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPrjFileTypeObjLstCache = await PrjFileType_GetObjLstCache();
  if (arrPrjFileTypeObjLstCache == null) return false;
  let arrPrjFileTypeSel = arrPrjFileTypeObjLstCache;
  if (objPrjFileTypeCond.GetConditions().length == 0)
    return arrPrjFileTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objPrjFileTypeCond.GetConditions()) {
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
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrjFileTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPrjFileTypeCond),
      prjFileType_ConstructorName,
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
export async function PrjFileType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
 * @param key:关键字对象
 * @returns 是否存在
 */
export async function PrjFileType_IsExistCache(key: PrjFileTypeKey): Promise<boolean> {
  const strThisFuncName = 'IsExistCache';
  const arrPrjFileTypeObjLstCache = await PrjFileType_GetObjLstCache();
  if (arrPrjFileTypeObjLstCache == null) return false;
  try {
    const arrPrjFileTypeSel = arrPrjFileTypeObjLstCache.filter(
      (x) => x.prjFileTypeId == key.prjFileTypeId,
    );
    if (arrPrjFileTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      key.prjFileTypeId,
      prjFileType_ConstructorName,
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
 * @param key:包含关键字的对象
 * @returns 是否存在?存在返回True
 **/
export async function PrjFileType_IsExistAsync(key: PrjFileTypeKey): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjFileTypeId: key.prjFileTypeId,
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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
export async function PrjFileType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
 * @param objPrjFileTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function PrjFileType_GetRecCountByCondCache(objPrjFileTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPrjFileTypeObjLstCache = await PrjFileType_GetObjLstCache();
  if (arrPrjFileTypeObjLstCache == null) return 0;
  let arrPrjFileTypeSel = arrPrjFileTypeObjLstCache;
  if (objPrjFileTypeCond.GetConditions().length == 0) return arrPrjFileTypeSel.length;
  try {
    for (const objCondition of objPrjFileTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjFileTypeSel = arrPrjFileTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPrjFileTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjFileTypeCond),
      prjFileType_ConstructorName,
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
export async function PrjFileType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
export async function PrjFileType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjFileType_Controller, strAction);

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
        prjFileType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFileType_ConstructorName,
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
export function PrjFileType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PrjFileType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsPrjFileTypeEN._CurrTabName;
  switch (clsPrjFileTypeEN._CacheModeId) {
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
  clsPrjFileTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function PrjFileType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsPrjFileTypeEN._CurrTabName;
    switch (clsPrjFileTypeEN._CacheModeId) {
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
    clsPrjFileTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function PrjFileType_GetLastRefreshTime(): string {
  if (clsPrjFileTypeEN._RefreshTimeLst.length == 0) return '';
  return clsPrjFileTypeEN._RefreshTimeLst[clsPrjFileTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框(TabFeatureId:00050487)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function PrjFileType_BindDdl_PrjFileTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_PrjFileTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrjFileTypeIdInDivCache");
  const arrObjLstSel = await PrjFileType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsPrjFileTypeEN.con_PrjFileTypeId,
    clsPrjFileTypeEN.con_PrjFileTypeName,
    '选工程文件类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框(TabFeatureId:00050487)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function PrjFileType_GetArrPrjFileType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrjFileTypeIdInDivCache");
  const arrPrjFileType = new Array<clsPrjFileTypeEN>();
  const arrObjLstSel = await PrjFileType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsPrjFileTypeEN();
  obj0.prjFileTypeId = '0';
  obj0.prjFileTypeName = '选工程文件类型...';
  arrPrjFileType.push(obj0);
  arrObjLstSel.forEach((x) => arrPrjFileType.push(x));
  return arrPrjFileType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjFileType_CheckPropertyNew(pobjPrjFileTypeEN: clsPrjFileTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPrjFileTypeEN.prjFileTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[工程文件类型名]不能为空(In 工程文件类型)!(clsPrjFileTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjPrjFileTypeEN.orderNum ||
    (pobjPrjFileTypeEN.orderNum != null && pobjPrjFileTypeEN.orderNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[序号]不能为空(In 工程文件类型)!(clsPrjFileTypeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjFileTypeEN.updUserId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[修改用户Id]不能为空(In 工程文件类型)!(clsPrjFileTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.prjFileTypeId) == false &&
    GetStrLen(pobjPrjFileTypeEN.prjFileTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[项目文件类型Id(prjFileTypeId)]的长度不能超过2(In 工程文件类型(PrjFileType))!值:${pobjPrjFileTypeEN.prjFileTypeId}(clsPrjFileTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.prjFileTypeName) == false &&
    GetStrLen(pobjPrjFileTypeEN.prjFileTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程文件类型名(prjFileTypeName)]的长度不能超过50(In 工程文件类型(PrjFileType))!值:${pobjPrjFileTypeEN.prjFileTypeName}(clsPrjFileTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.prjFileTypeENName) == false &&
    GetStrLen(pobjPrjFileTypeEN.prjFileTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程文件类型英文名(prjFileTypeENName)]的长度不能超过50(In 工程文件类型(PrjFileType))!值:${pobjPrjFileTypeEN.prjFileTypeENName}(clsPrjFileTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.updDate) == false &&
    GetStrLen(pobjPrjFileTypeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 工程文件类型(PrjFileType))!值:${pobjPrjFileTypeEN.updDate}(clsPrjFileTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.updUserId) == false &&
    GetStrLen(pobjPrjFileTypeEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 工程文件类型(PrjFileType))!值:${pobjPrjFileTypeEN.updUserId}(clsPrjFileTypeBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjFileTypeEN.memo) == false && GetStrLen(pobjPrjFileTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 工程文件类型(PrjFileType))!值:${pobjPrjFileTypeEN.memo}(clsPrjFileTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.prjFileTypeId) == false &&
    undefined !== pobjPrjFileTypeEN.prjFileTypeId &&
    tzDataType.isString(pobjPrjFileTypeEN.prjFileTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[项目文件类型Id(prjFileTypeId)]的值:[${pobjPrjFileTypeEN.prjFileTypeId}], 非法,应该为字符型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.prjFileTypeName) == false &&
    undefined !== pobjPrjFileTypeEN.prjFileTypeName &&
    tzDataType.isString(pobjPrjFileTypeEN.prjFileTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程文件类型名(prjFileTypeName)]的值:[${pobjPrjFileTypeEN.prjFileTypeName}], 非法,应该为字符型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.prjFileTypeENName) == false &&
    undefined !== pobjPrjFileTypeEN.prjFileTypeENName &&
    tzDataType.isString(pobjPrjFileTypeEN.prjFileTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程文件类型英文名(prjFileTypeENName)]的值:[${pobjPrjFileTypeEN.prjFileTypeENName}], 非法,应该为字符型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjFileTypeEN.inUse &&
    undefined !== pobjPrjFileTypeEN.inUse &&
    tzDataType.isBoolean(pobjPrjFileTypeEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjPrjFileTypeEN.inUse}], 非法,应该为布尔型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjFileTypeEN.orderNum &&
    undefined !== pobjPrjFileTypeEN.orderNum &&
    tzDataType.isNumber(pobjPrjFileTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjPrjFileTypeEN.orderNum}], 非法,应该为数值型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.updDate) == false &&
    undefined !== pobjPrjFileTypeEN.updDate &&
    tzDataType.isString(pobjPrjFileTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjPrjFileTypeEN.updDate}], 非法,应该为字符型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.updUserId) == false &&
    undefined !== pobjPrjFileTypeEN.updUserId &&
    tzDataType.isString(pobjPrjFileTypeEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjPrjFileTypeEN.updUserId}], 非法,应该为字符型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.memo) == false &&
    undefined !== pobjPrjFileTypeEN.memo &&
    tzDataType.isString(pobjPrjFileTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjPrjFileTypeEN.memo}], 非法,应该为字符型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjFileType_CheckProperty4Update(pobjPrjFileTypeEN: clsPrjFileTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.prjFileTypeId) == false &&
    GetStrLen(pobjPrjFileTypeEN.prjFileTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[项目文件类型Id(prjFileTypeId)]的长度不能超过2(In 工程文件类型(PrjFileType))!值:${pobjPrjFileTypeEN.prjFileTypeId}(clsPrjFileTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.prjFileTypeName) == false &&
    GetStrLen(pobjPrjFileTypeEN.prjFileTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程文件类型名(prjFileTypeName)]的长度不能超过50(In 工程文件类型(PrjFileType))!值:${pobjPrjFileTypeEN.prjFileTypeName}(clsPrjFileTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.prjFileTypeENName) == false &&
    GetStrLen(pobjPrjFileTypeEN.prjFileTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程文件类型英文名(prjFileTypeENName)]的长度不能超过50(In 工程文件类型(PrjFileType))!值:${pobjPrjFileTypeEN.prjFileTypeENName}(clsPrjFileTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.updDate) == false &&
    GetStrLen(pobjPrjFileTypeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 工程文件类型(PrjFileType))!值:${pobjPrjFileTypeEN.updDate}(clsPrjFileTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.updUserId) == false &&
    GetStrLen(pobjPrjFileTypeEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 工程文件类型(PrjFileType))!值:${pobjPrjFileTypeEN.updUserId}(clsPrjFileTypeBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjFileTypeEN.memo) == false && GetStrLen(pobjPrjFileTypeEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 工程文件类型(PrjFileType))!值:${pobjPrjFileTypeEN.memo}(clsPrjFileTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.prjFileTypeId) == false &&
    undefined !== pobjPrjFileTypeEN.prjFileTypeId &&
    tzDataType.isString(pobjPrjFileTypeEN.prjFileTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[项目文件类型Id(prjFileTypeId)]的值:[${pobjPrjFileTypeEN.prjFileTypeId}], 非法,应该为字符型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.prjFileTypeName) == false &&
    undefined !== pobjPrjFileTypeEN.prjFileTypeName &&
    tzDataType.isString(pobjPrjFileTypeEN.prjFileTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程文件类型名(prjFileTypeName)]的值:[${pobjPrjFileTypeEN.prjFileTypeName}], 非法,应该为字符型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.prjFileTypeENName) == false &&
    undefined !== pobjPrjFileTypeEN.prjFileTypeENName &&
    tzDataType.isString(pobjPrjFileTypeEN.prjFileTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程文件类型英文名(prjFileTypeENName)]的值:[${pobjPrjFileTypeEN.prjFileTypeENName}], 非法,应该为字符型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjFileTypeEN.inUse &&
    undefined !== pobjPrjFileTypeEN.inUse &&
    tzDataType.isBoolean(pobjPrjFileTypeEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjPrjFileTypeEN.inUse}], 非法,应该为布尔型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjFileTypeEN.orderNum &&
    undefined !== pobjPrjFileTypeEN.orderNum &&
    tzDataType.isNumber(pobjPrjFileTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjPrjFileTypeEN.orderNum}], 非法,应该为数值型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.updDate) == false &&
    undefined !== pobjPrjFileTypeEN.updDate &&
    tzDataType.isString(pobjPrjFileTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjPrjFileTypeEN.updDate}], 非法,应该为字符型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.updUserId) == false &&
    undefined !== pobjPrjFileTypeEN.updUserId &&
    tzDataType.isString(pobjPrjFileTypeEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjPrjFileTypeEN.updUserId}], 非法,应该为字符型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFileTypeEN.memo) == false &&
    undefined !== pobjPrjFileTypeEN.memo &&
    tzDataType.isString(pobjPrjFileTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjPrjFileTypeEN.memo}], 非法,应该为字符型(In 工程文件类型(PrjFileType))!(clsPrjFileTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2026-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjFileType_GetJSONStrByObj(pobjPrjFileTypeEN: clsPrjFileTypeEN): string {
  pobjPrjFileTypeEN.sfUpdFldSetStr = pobjPrjFileTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrjFileTypeEN);
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
 * 日期:2026-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PrjFileType_GetObjLstByJSONStr(strJSON: string): Array<clsPrjFileTypeEN> {
  let arrPrjFileTypeObjLst = new Array<clsPrjFileTypeEN>();
  if (strJSON === '') {
    return arrPrjFileTypeObjLst;
  }
  try {
    arrPrjFileTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrjFileTypeObjLst;
  }
  return arrPrjFileTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrjFileTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrjFileType_GetObjLstByJSONObjLst(
  arrPrjFileTypeObjLstS: Array<clsPrjFileTypeEN>,
): Array<clsPrjFileTypeEN> {
  const arrPrjFileTypeObjLst = new Array<clsPrjFileTypeEN>();
  for (const objInFor of arrPrjFileTypeObjLstS) {
    const obj1 = PrjFileType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrjFileTypeObjLst.push(obj1);
  }
  return arrPrjFileTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjFileType_GetObjByJSONStr(strJSON: string): clsPrjFileTypeEN {
  let pobjPrjFileTypeEN = new clsPrjFileTypeEN();
  if (strJSON === '') {
    return pobjPrjFileTypeEN;
  }
  try {
    pobjPrjFileTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrjFileTypeEN;
  }
  return pobjPrjFileTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrjFileType_GetCombineCondition(objPrjFileTypeCond: clsPrjFileTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFileTypeCond.dicFldComparisonOp,
      clsPrjFileTypeEN.con_PrjFileTypeId,
    ) == true
  ) {
    const strComparisonOpPrjFileTypeId: string =
      objPrjFileTypeCond.dicFldComparisonOp[clsPrjFileTypeEN.con_PrjFileTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFileTypeEN.con_PrjFileTypeId,
      objPrjFileTypeCond.prjFileTypeId,
      strComparisonOpPrjFileTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFileTypeCond.dicFldComparisonOp,
      clsPrjFileTypeEN.con_PrjFileTypeName,
    ) == true
  ) {
    const strComparisonOpPrjFileTypeName: string =
      objPrjFileTypeCond.dicFldComparisonOp[clsPrjFileTypeEN.con_PrjFileTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFileTypeEN.con_PrjFileTypeName,
      objPrjFileTypeCond.prjFileTypeName,
      strComparisonOpPrjFileTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFileTypeCond.dicFldComparisonOp,
      clsPrjFileTypeEN.con_PrjFileTypeENName,
    ) == true
  ) {
    const strComparisonOpPrjFileTypeENName: string =
      objPrjFileTypeCond.dicFldComparisonOp[clsPrjFileTypeEN.con_PrjFileTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFileTypeEN.con_PrjFileTypeENName,
      objPrjFileTypeCond.prjFileTypeENName,
      strComparisonOpPrjFileTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFileTypeCond.dicFldComparisonOp,
      clsPrjFileTypeEN.con_InUse,
    ) == true
  ) {
    if (objPrjFileTypeCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjFileTypeEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjFileTypeEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFileTypeCond.dicFldComparisonOp,
      clsPrjFileTypeEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objPrjFileTypeCond.dicFldComparisonOp[clsPrjFileTypeEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPrjFileTypeEN.con_OrderNum,
      objPrjFileTypeCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFileTypeCond.dicFldComparisonOp,
      clsPrjFileTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPrjFileTypeCond.dicFldComparisonOp[clsPrjFileTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFileTypeEN.con_UpdDate,
      objPrjFileTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFileTypeCond.dicFldComparisonOp,
      clsPrjFileTypeEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objPrjFileTypeCond.dicFldComparisonOp[clsPrjFileTypeEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFileTypeEN.con_UpdUserId,
      objPrjFileTypeCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFileTypeCond.dicFldComparisonOp,
      clsPrjFileTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPrjFileTypeCond.dicFldComparisonOp[clsPrjFileTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFileTypeEN.con_Memo,
      objPrjFileTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjFileType(工程文件类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjFileTypeName: 工程文件类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjFileType_GetUniCondStr(objPrjFileTypeEN: clsPrjFileTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjFileTypeName = '{0}'", objPrjFileTypeEN.prjFileTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjFileType(工程文件类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjFileTypeName: 工程文件类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjFileType_GetUniCondStr4Update(objPrjFileTypeEN: clsPrjFileTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjFileTypeId <> '{0}'", objPrjFileTypeEN.prjFileTypeId);
  strWhereCond += Format(" and PrjFileTypeName = '{0}'", objPrjFileTypeEN.prjFileTypeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrjFileTypeENS:源对象
 * @param objPrjFileTypeENT:目标对象
 */
export function PrjFileType_GetObjFromJsonObj(
  objPrjFileTypeENS: clsPrjFileTypeEN,
): clsPrjFileTypeEN {
  const objPrjFileTypeENT: clsPrjFileTypeEN = new clsPrjFileTypeEN();
  ObjectAssign(objPrjFileTypeENT, objPrjFileTypeENS);
  return objPrjFileTypeENT;
}
