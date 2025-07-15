/**
 * 类名:clsPrjFeatureTypeWApi
 * 表名:PrjFeatureType(00050323)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:41:47
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
 * 功能类型(PrjFeatureType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPrjFeatureTypeEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureTypeEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const prjFeatureType_Controller = 'PrjFeatureTypeApi';
export const prjFeatureType_ConstructorName = 'prjFeatureType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFeatureTypeId:关键字
 * @returns 对象
 **/
export async function PrjFeatureType_GetObjByFeatureTypeIdAsync(
  strFeatureTypeId: string,
): Promise<clsPrjFeatureTypeEN | null> {
  const strThisFuncName = 'GetObjByFeatureTypeIdAsync';

  if (IsNullOrEmpty(strFeatureTypeId) == true) {
    const strMsg = Format(
      '参数:[strFeatureTypeId]不能为空!(In clsPrjFeatureTypeWApi.GetObjByFeatureTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureTypeId]的长度:[{0}]不正确!(clsPrjFeatureTypeWApi.GetObjByFeatureTypeIdAsync)',
      strFeatureTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFeatureTypeId';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFeatureTypeId,
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
      const objPrjFeatureType = PrjFeatureType_GetObjFromJsonObj(returnObj);
      return objPrjFeatureType;
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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param strFeatureTypeId:所给的关键字
 * @returns 对象
 */
export async function PrjFeatureType_GetObjByFeatureTypeIdCache(
  strFeatureTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFeatureTypeIdCache';

  if (IsNullOrEmpty(strFeatureTypeId) == true) {
    const strMsg = Format(
      '参数:[strFeatureTypeId]不能为空!(In clsPrjFeatureTypeWApi.GetObjByFeatureTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureTypeId]的长度:[{0}]不正确!(clsPrjFeatureTypeWApi.GetObjByFeatureTypeIdCache)',
      strFeatureTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjFeatureTypeObjLstCache = await PrjFeatureType_GetObjLstCache();
  try {
    const arrPrjFeatureTypeSel = arrPrjFeatureTypeObjLstCache.filter(
      (x) => x.featureTypeId == strFeatureTypeId,
    );
    let objPrjFeatureType: clsPrjFeatureTypeEN;
    if (arrPrjFeatureTypeSel.length > 0) {
      objPrjFeatureType = arrPrjFeatureTypeSel[0];
      return objPrjFeatureType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPrjFeatureTypeConst = await PrjFeatureType_GetObjByFeatureTypeIdAsync(
          strFeatureTypeId,
        );
        if (objPrjFeatureTypeConst != null) {
          PrjFeatureType_ReFreshThisCache();
          return objPrjFeatureTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFeatureTypeId,
      prjFeatureType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strFeatureTypeId:所给的关键字
 * @returns 对象
 */
export async function PrjFeatureType_GetObjByFeatureTypeIdlocalStorage(strFeatureTypeId: string) {
  const strThisFuncName = 'GetObjByFeatureTypeIdlocalStorage';

  if (IsNullOrEmpty(strFeatureTypeId) == true) {
    const strMsg = Format(
      '参数:[strFeatureTypeId]不能为空!(In clsPrjFeatureTypeWApi.GetObjByFeatureTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureTypeId]的长度:[{0}]不正确!(clsPrjFeatureTypeWApi.GetObjByFeatureTypeIdlocalStorage)',
      strFeatureTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPrjFeatureTypeEN._CurrTabName, strFeatureTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPrjFeatureTypeCache: clsPrjFeatureTypeEN = JSON.parse(strTempObj);
    return objPrjFeatureTypeCache;
  }
  try {
    const objPrjFeatureType = await PrjFeatureType_GetObjByFeatureTypeIdAsync(strFeatureTypeId);
    if (objPrjFeatureType != null) {
      localStorage.setItem(strKey, JSON.stringify(objPrjFeatureType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPrjFeatureType;
    }
    return objPrjFeatureType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFeatureTypeId,
      prjFeatureType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objPrjFeatureType:所给的对象
 * @returns 对象
 */
export async function PrjFeatureType_UpdateObjInLstCache(objPrjFeatureType: clsPrjFeatureTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPrjFeatureTypeObjLstCache = await PrjFeatureType_GetObjLstCache();
    const obj = arrPrjFeatureTypeObjLstCache.find(
      (x) => x.featureTypeName == objPrjFeatureType.featureTypeName,
    );
    if (obj != null) {
      objPrjFeatureType.featureTypeId = obj.featureTypeId;
      ObjectAssign(obj, objPrjFeatureType);
    } else {
      arrPrjFeatureTypeObjLstCache.push(objPrjFeatureType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      prjFeatureType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFeatureTypeId:所给的关键字
 * @returns 对象
 */
export async function PrjFeatureType_GetNameByFeatureTypeIdCache(strFeatureTypeId: string) {
  if (IsNullOrEmpty(strFeatureTypeId) == true) {
    const strMsg = Format(
      '参数:[strFeatureTypeId]不能为空!(In clsPrjFeatureTypeWApi.GetNameByFeatureTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureTypeId]的长度:[{0}]不正确!(clsPrjFeatureTypeWApi.GetNameByFeatureTypeIdCache)',
      strFeatureTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjFeatureTypeObjLstCache = await PrjFeatureType_GetObjLstCache();
  if (arrPrjFeatureTypeObjLstCache == null) return '';
  try {
    const arrPrjFeatureTypeSel = arrPrjFeatureTypeObjLstCache.filter(
      (x) => x.featureTypeId == strFeatureTypeId,
    );
    let objPrjFeatureType: clsPrjFeatureTypeEN;
    if (arrPrjFeatureTypeSel.length > 0) {
      objPrjFeatureType = arrPrjFeatureTypeSel[0];
      return objPrjFeatureType.featureTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strFeatureTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function PrjFeatureType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsPrjFeatureTypeEN.con_FeatureTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPrjFeatureTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPrjFeatureTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFeatureTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objPrjFeatureType = await PrjFeatureType_GetObjByFeatureTypeIdCache(strFeatureTypeId);
  if (objPrjFeatureType == null) return '';
  if (objPrjFeatureType.GetFldValue(strOutFldName) == null) return '';
  return objPrjFeatureType.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjFeatureType_SortFunDefa(a: clsPrjFeatureTypeEN, b: clsPrjFeatureTypeEN): number {
  return a.featureTypeId.localeCompare(b.featureTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjFeatureType_SortFunDefa2Fld(
  a: clsPrjFeatureTypeEN,
  b: clsPrjFeatureTypeEN,
): number {
  if (a.featureTypeName == b.featureTypeName)
    return a.featureTypeENName.localeCompare(b.featureTypeENName);
  else return a.featureTypeName.localeCompare(b.featureTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjFeatureType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjFeatureTypeEN.con_FeatureTypeId:
        return (a: clsPrjFeatureTypeEN, b: clsPrjFeatureTypeEN) => {
          return a.featureTypeId.localeCompare(b.featureTypeId);
        };
      case clsPrjFeatureTypeEN.con_FeatureTypeName:
        return (a: clsPrjFeatureTypeEN, b: clsPrjFeatureTypeEN) => {
          return a.featureTypeName.localeCompare(b.featureTypeName);
        };
      case clsPrjFeatureTypeEN.con_FeatureTypeENName:
        return (a: clsPrjFeatureTypeEN, b: clsPrjFeatureTypeEN) => {
          if (a.featureTypeENName == null) return -1;
          if (b.featureTypeENName == null) return 1;
          return a.featureTypeENName.localeCompare(b.featureTypeENName);
        };
      case clsPrjFeatureTypeEN.con_OrderNum:
        return (a: clsPrjFeatureTypeEN, b: clsPrjFeatureTypeEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsPrjFeatureTypeEN.con_UpdDate:
        return (a: clsPrjFeatureTypeEN, b: clsPrjFeatureTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPrjFeatureTypeEN.con_UpdUser:
        return (a: clsPrjFeatureTypeEN, b: clsPrjFeatureTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsPrjFeatureTypeEN.con_Memo:
        return (a: clsPrjFeatureTypeEN, b: clsPrjFeatureTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjFeatureType]中不存在!(in ${prjFeatureType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrjFeatureTypeEN.con_FeatureTypeId:
        return (a: clsPrjFeatureTypeEN, b: clsPrjFeatureTypeEN) => {
          return b.featureTypeId.localeCompare(a.featureTypeId);
        };
      case clsPrjFeatureTypeEN.con_FeatureTypeName:
        return (a: clsPrjFeatureTypeEN, b: clsPrjFeatureTypeEN) => {
          return b.featureTypeName.localeCompare(a.featureTypeName);
        };
      case clsPrjFeatureTypeEN.con_FeatureTypeENName:
        return (a: clsPrjFeatureTypeEN, b: clsPrjFeatureTypeEN) => {
          if (b.featureTypeENName == null) return -1;
          if (a.featureTypeENName == null) return 1;
          return b.featureTypeENName.localeCompare(a.featureTypeENName);
        };
      case clsPrjFeatureTypeEN.con_OrderNum:
        return (a: clsPrjFeatureTypeEN, b: clsPrjFeatureTypeEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsPrjFeatureTypeEN.con_UpdDate:
        return (a: clsPrjFeatureTypeEN, b: clsPrjFeatureTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPrjFeatureTypeEN.con_UpdUser:
        return (a: clsPrjFeatureTypeEN, b: clsPrjFeatureTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsPrjFeatureTypeEN.con_Memo:
        return (a: clsPrjFeatureTypeEN, b: clsPrjFeatureTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjFeatureType]中不存在!(in ${prjFeatureType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PrjFeatureType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrjFeatureTypeEN.con_FeatureTypeId:
      return (obj: clsPrjFeatureTypeEN) => {
        return obj.featureTypeId === value;
      };
    case clsPrjFeatureTypeEN.con_FeatureTypeName:
      return (obj: clsPrjFeatureTypeEN) => {
        return obj.featureTypeName === value;
      };
    case clsPrjFeatureTypeEN.con_FeatureTypeENName:
      return (obj: clsPrjFeatureTypeEN) => {
        return obj.featureTypeENName === value;
      };
    case clsPrjFeatureTypeEN.con_OrderNum:
      return (obj: clsPrjFeatureTypeEN) => {
        return obj.orderNum === value;
      };
    case clsPrjFeatureTypeEN.con_UpdDate:
      return (obj: clsPrjFeatureTypeEN) => {
        return obj.updDate === value;
      };
    case clsPrjFeatureTypeEN.con_UpdUser:
      return (obj: clsPrjFeatureTypeEN) => {
        return obj.updUser === value;
      };
    case clsPrjFeatureTypeEN.con_Memo:
      return (obj: clsPrjFeatureTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrjFeatureType]中不存在!(in ${prjFeatureType_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function PrjFeatureType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsPrjFeatureTypeEN.con_FeatureTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrPrjFeatureType = await PrjFeatureType_GetObjLstCache();
  if (arrPrjFeatureType == null) return [];
  let arrPrjFeatureTypeSel = arrPrjFeatureType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPrjFeatureTypeSel.length == 0) return [];
  return arrPrjFeatureTypeSel.map((x) => x.featureTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjFeatureType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
export async function PrjFeatureType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
export async function PrjFeatureType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPrjFeatureTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
      const objPrjFeatureType = PrjFeatureType_GetObjFromJsonObj(returnObj);
      return objPrjFeatureType;
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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
export async function PrjFeatureType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjFeatureTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjFeatureTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjFeatureTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPrjFeatureTypeExObjLstCache: Array<clsPrjFeatureTypeEN> = CacheHelper.Get(strKey);
    const arrPrjFeatureTypeObjLstT = PrjFeatureType_GetObjLstByJSONObjLst(
      arrPrjFeatureTypeExObjLstCache,
    );
    return arrPrjFeatureTypeObjLstT;
  }
  try {
    const arrPrjFeatureTypeExObjLst = await PrjFeatureType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPrjFeatureTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjFeatureTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjFeatureTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjFeatureType_ConstructorName,
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
export async function PrjFeatureType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjFeatureTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjFeatureTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjFeatureTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjFeatureTypeExObjLstCache: Array<clsPrjFeatureTypeEN> = JSON.parse(strTempObjLst);
    const arrPrjFeatureTypeObjLstT = PrjFeatureType_GetObjLstByJSONObjLst(
      arrPrjFeatureTypeExObjLstCache,
    );
    return arrPrjFeatureTypeObjLstT;
  }
  try {
    const arrPrjFeatureTypeExObjLst = await PrjFeatureType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPrjFeatureTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjFeatureTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjFeatureTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjFeatureType_ConstructorName,
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
export async function PrjFeatureType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjFeatureTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjFeatureTypeObjLstCache: Array<clsPrjFeatureTypeEN> = JSON.parse(strTempObjLst);
    return arrPrjFeatureTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PrjFeatureType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPrjFeatureTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
          prjFeatureType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFeatureType_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
export async function PrjFeatureType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjFeatureTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjFeatureTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjFeatureTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjFeatureTypeExObjLstCache: Array<clsPrjFeatureTypeEN> = JSON.parse(strTempObjLst);
    const arrPrjFeatureTypeObjLstT = PrjFeatureType_GetObjLstByJSONObjLst(
      arrPrjFeatureTypeExObjLstCache,
    );
    return arrPrjFeatureTypeObjLstT;
  }
  try {
    const arrPrjFeatureTypeExObjLst = await PrjFeatureType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPrjFeatureTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjFeatureTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjFeatureTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjFeatureType_ConstructorName,
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
export async function PrjFeatureType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjFeatureTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjFeatureTypeObjLstCache: Array<clsPrjFeatureTypeEN> = JSON.parse(strTempObjLst);
    return arrPrjFeatureTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjFeatureType_GetObjLstCache(): Promise<Array<clsPrjFeatureTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrPrjFeatureTypeObjLstCache;
  switch (clsPrjFeatureTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjFeatureTypeObjLstCache = await PrjFeatureType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrPrjFeatureTypeObjLstCache = await PrjFeatureType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrPrjFeatureTypeObjLstCache = await PrjFeatureType_GetObjLstClientCache();
      break;
    default:
      arrPrjFeatureTypeObjLstCache = await PrjFeatureType_GetObjLstClientCache();
      break;
  }
  return arrPrjFeatureTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjFeatureType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPrjFeatureTypeObjLstCache;
  switch (clsPrjFeatureTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjFeatureTypeObjLstCache = await PrjFeatureType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrPrjFeatureTypeObjLstCache = await PrjFeatureType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrPrjFeatureTypeObjLstCache = null;
      break;
    default:
      arrPrjFeatureTypeObjLstCache = null;
      break;
  }
  return arrPrjFeatureTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFeatureTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjFeatureType_GetSubObjLstCache(objPrjFeatureTypeCond: clsPrjFeatureTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPrjFeatureTypeObjLstCache = await PrjFeatureType_GetObjLstCache();
  let arrPrjFeatureTypeSel = arrPrjFeatureTypeObjLstCache;
  if (
    objPrjFeatureTypeCond.sfFldComparisonOp == null ||
    objPrjFeatureTypeCond.sfFldComparisonOp == ''
  )
    return arrPrjFeatureTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPrjFeatureTypeCond.sfFldComparisonOp,
  );
  //console.log("clsPrjFeatureTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPrjFeatureTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjFeatureTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPrjFeatureTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjFeatureTypeCond),
      prjFeatureType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjFeatureTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFeatureTypeId:关键字列表
 * @returns 对象列表
 **/
export async function PrjFeatureType_GetObjLstByFeatureTypeIdLstAsync(
  arrFeatureTypeId: Array<string>,
): Promise<Array<clsPrjFeatureTypeEN>> {
  const strThisFuncName = 'GetObjLstByFeatureTypeIdLstAsync';
  const strAction = 'GetObjLstByFeatureTypeIdLst';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFeatureTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          prjFeatureType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFeatureType_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param arrstrFeatureTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function PrjFeatureType_GetObjLstByFeatureTypeIdLstCache(
  arrFeatureTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByFeatureTypeIdLstCache';
  try {
    const arrPrjFeatureTypeObjLstCache = await PrjFeatureType_GetObjLstCache();
    const arrPrjFeatureTypeSel = arrPrjFeatureTypeObjLstCache.filter(
      (x) => arrFeatureTypeIdLst.indexOf(x.featureTypeId) > -1,
    );
    return arrPrjFeatureTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFeatureTypeIdLst.join(','),
      prjFeatureType_ConstructorName,
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
export async function PrjFeatureType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrjFeatureTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
          prjFeatureType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFeatureType_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
export async function PrjFeatureType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrjFeatureTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
          prjFeatureType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFeatureType_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
export async function PrjFeatureType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjFeatureTypeEN>();
  const arrPrjFeatureTypeObjLstCache = await PrjFeatureType_GetObjLstCache();
  if (arrPrjFeatureTypeObjLstCache.length == 0) return arrPrjFeatureTypeObjLstCache;
  let arrPrjFeatureTypeSel = arrPrjFeatureTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objPrjFeatureTypeCond = new clsPrjFeatureTypeEN();
  ObjectAssign(objPrjFeatureTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsPrjFeatureTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjFeatureTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPrjFeatureTypeSel.length == 0) return arrPrjFeatureTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.sort(
        PrjFeatureType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.sort(objPagerPara.sortFun);
    }
    arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.slice(intStart, intEnd);
    return arrPrjFeatureTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjFeatureType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjFeatureTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PrjFeatureType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjFeatureTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjFeatureTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
          prjFeatureType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFeatureType_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param strFeatureTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function PrjFeatureType_DelRecordAsync(strFeatureTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFeatureTypeId);

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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param arrFeatureTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PrjFeatureType_DelPrjFeatureTypesAsync(
  arrFeatureTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelPrjFeatureTypesAsync';
  const strAction = 'DelPrjFeatureTypes';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFeatureTypeId, config);
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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
export async function PrjFeatureType_DelPrjFeatureTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPrjFeatureTypesByCondAsync';
  const strAction = 'DelPrjFeatureTypesByCond';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param objPrjFeatureTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFeatureType_AddNewRecordAsync(
  objPrjFeatureTypeEN: clsPrjFeatureTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPrjFeatureTypeEN);
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFeatureTypeEN, config);
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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param objPrjFeatureTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFeatureType_AddNewRecordWithMaxIdAsync(
  objPrjFeatureTypeEN: clsPrjFeatureTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFeatureTypeEN, config);
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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param objPrjFeatureTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFeatureType_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param objPrjFeatureTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFeatureType_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjFeatureTypeEN);
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param objPrjFeatureTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFeatureType_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjFeatureTypeEN);
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objPrjFeatureTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFeatureType_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjFeatureTypeEN);
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param objPrjFeatureTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFeatureType_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objPrjFeatureTypeEN);
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param objPrjFeatureTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrjFeatureType_AddNewRecordWithReturnKeyAsync(
  objPrjFeatureTypeEN: clsPrjFeatureTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFeatureTypeEN, config);
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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param objPrjFeatureTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjFeatureType_UpdateRecordAsync(
  objPrjFeatureTypeEN: clsPrjFeatureTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrjFeatureTypeEN.sfUpdFldSetStr === undefined ||
    objPrjFeatureTypeEN.sfUpdFldSetStr === null ||
    objPrjFeatureTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjFeatureTypeEN.featureTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFeatureTypeEN, config);
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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param objPrjFeatureTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjFeatureType_UpdateWithConditionAsync(
  objPrjFeatureTypeEN: clsPrjFeatureTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrjFeatureTypeEN.sfUpdFldSetStr === undefined ||
    objPrjFeatureTypeEN.sfUpdFldSetStr === null ||
    objPrjFeatureTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjFeatureTypeEN.featureTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);
  objPrjFeatureTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFeatureTypeEN, config);
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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param objstrFeatureTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjFeatureType_IsExistRecordCache(
  objPrjFeatureTypeCond: clsPrjFeatureTypeEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPrjFeatureTypeObjLstCache = await PrjFeatureType_GetObjLstCache();
  if (arrPrjFeatureTypeObjLstCache == null) return false;
  let arrPrjFeatureTypeSel = arrPrjFeatureTypeObjLstCache;
  if (
    objPrjFeatureTypeCond.sfFldComparisonOp == null ||
    objPrjFeatureTypeCond.sfFldComparisonOp == ''
  )
    return arrPrjFeatureTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPrjFeatureTypeCond.sfFldComparisonOp,
  );
  //console.log("clsPrjFeatureTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPrjFeatureTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjFeatureTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPrjFeatureTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPrjFeatureTypeCond),
      prjFeatureType_ConstructorName,
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
export async function PrjFeatureType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param strFeatureTypeId:所给的关键字
 * @returns 对象
 */
export async function PrjFeatureType_IsExistCache(strFeatureTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrPrjFeatureTypeObjLstCache = await PrjFeatureType_GetObjLstCache();
  if (arrPrjFeatureTypeObjLstCache == null) return false;
  try {
    const arrPrjFeatureTypeSel = arrPrjFeatureTypeObjLstCache.filter(
      (x) => x.featureTypeId == strFeatureTypeId,
    );
    if (arrPrjFeatureTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFeatureTypeId,
      prjFeatureType_ConstructorName,
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
 * @param strFeatureTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PrjFeatureType_IsExistAsync(strFeatureTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFeatureTypeId,
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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
export async function PrjFeatureType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
 * @param objPrjFeatureTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function PrjFeatureType_GetRecCountByCondCache(
  objPrjFeatureTypeCond: clsPrjFeatureTypeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPrjFeatureTypeObjLstCache = await PrjFeatureType_GetObjLstCache();
  if (arrPrjFeatureTypeObjLstCache == null) return 0;
  let arrPrjFeatureTypeSel = arrPrjFeatureTypeObjLstCache;
  if (
    objPrjFeatureTypeCond.sfFldComparisonOp == null ||
    objPrjFeatureTypeCond.sfFldComparisonOp == ''
  )
    return arrPrjFeatureTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPrjFeatureTypeCond.sfFldComparisonOp,
  );
  //console.log("clsPrjFeatureTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPrjFeatureTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjFeatureTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPrjFeatureTypeSel = arrPrjFeatureTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrPrjFeatureTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjFeatureTypeCond),
      prjFeatureType_ConstructorName,
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
export async function PrjFeatureType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
export async function PrjFeatureType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjFeatureType_Controller, strAction);

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
        prjFeatureType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeatureType_ConstructorName,
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
export function PrjFeatureType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PrjFeatureType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsPrjFeatureTypeEN._CurrTabName;
  switch (clsPrjFeatureTypeEN.CacheModeId) {
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
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function PrjFeatureType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsPrjFeatureTypeEN._CurrTabName;
    switch (clsPrjFeatureTypeEN.CacheModeId) {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function PrjFeatureType_BindDdl_FeatureTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_FeatureTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FeatureTypeIdInDivCache");
  const arrObjLstSel = await PrjFeatureType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsPrjFeatureTypeEN.con_FeatureTypeId,
    clsPrjFeatureTypeEN.con_FeatureTypeName,
    '功能类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjFeatureType_CheckPropertyNew(pobjPrjFeatureTypeEN: clsPrjFeatureTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPrjFeatureTypeEN.featureTypeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[功能类型名称]不能为空(In 功能类型)!(clsPrjFeatureTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjPrjFeatureTypeEN.orderNum ||
    (pobjPrjFeatureTypeEN.orderNum != null && pobjPrjFeatureTypeEN.orderNum.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[序号]不能为空(In 功能类型)!(clsPrjFeatureTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.featureTypeId) == false &&
    GetStrLen(pobjPrjFeatureTypeEN.featureTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能类型Id(featureTypeId)]的长度不能超过2(In 功能类型(PrjFeatureType))!值:$(pobjPrjFeatureTypeEN.featureTypeId)(clsPrjFeatureTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.featureTypeName) == false &&
    GetStrLen(pobjPrjFeatureTypeEN.featureTypeName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能类型名称(featureTypeName)]的长度不能超过30(In 功能类型(PrjFeatureType))!值:$(pobjPrjFeatureTypeEN.featureTypeName)(clsPrjFeatureTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.featureTypeENName) == false &&
    GetStrLen(pobjPrjFeatureTypeEN.featureTypeENName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能类型英文名(featureTypeENName)]的长度不能超过30(In 功能类型(PrjFeatureType))!值:$(pobjPrjFeatureTypeEN.featureTypeENName)(clsPrjFeatureTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.updDate) == false &&
    GetStrLen(pobjPrjFeatureTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 功能类型(PrjFeatureType))!值:$(pobjPrjFeatureTypeEN.updDate)(clsPrjFeatureTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.updUser) == false &&
    GetStrLen(pobjPrjFeatureTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 功能类型(PrjFeatureType))!值:$(pobjPrjFeatureTypeEN.updUser)(clsPrjFeatureTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.memo) == false &&
    GetStrLen(pobjPrjFeatureTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 功能类型(PrjFeatureType))!值:$(pobjPrjFeatureTypeEN.memo)(clsPrjFeatureTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.featureTypeId) == false &&
    undefined !== pobjPrjFeatureTypeEN.featureTypeId &&
    tzDataType.isString(pobjPrjFeatureTypeEN.featureTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能类型Id(featureTypeId)]的值:[$(pobjPrjFeatureTypeEN.featureTypeId)], 非法,应该为字符型(In 功能类型(PrjFeatureType))!(clsPrjFeatureTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.featureTypeName) == false &&
    undefined !== pobjPrjFeatureTypeEN.featureTypeName &&
    tzDataType.isString(pobjPrjFeatureTypeEN.featureTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能类型名称(featureTypeName)]的值:[$(pobjPrjFeatureTypeEN.featureTypeName)], 非法,应该为字符型(In 功能类型(PrjFeatureType))!(clsPrjFeatureTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.featureTypeENName) == false &&
    undefined !== pobjPrjFeatureTypeEN.featureTypeENName &&
    tzDataType.isString(pobjPrjFeatureTypeEN.featureTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能类型英文名(featureTypeENName)]的值:[$(pobjPrjFeatureTypeEN.featureTypeENName)], 非法,应该为字符型(In 功能类型(PrjFeatureType))!(clsPrjFeatureTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjPrjFeatureTypeEN.orderNum &&
    undefined !== pobjPrjFeatureTypeEN.orderNum &&
    tzDataType.isNumber(pobjPrjFeatureTypeEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjPrjFeatureTypeEN.orderNum)], 非法,应该为数值型(In 功能类型(PrjFeatureType))!(clsPrjFeatureTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.updDate) == false &&
    undefined !== pobjPrjFeatureTypeEN.updDate &&
    tzDataType.isString(pobjPrjFeatureTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjPrjFeatureTypeEN.updDate)], 非法,应该为字符型(In 功能类型(PrjFeatureType))!(clsPrjFeatureTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.updUser) == false &&
    undefined !== pobjPrjFeatureTypeEN.updUser &&
    tzDataType.isString(pobjPrjFeatureTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjPrjFeatureTypeEN.updUser)], 非法,应该为字符型(In 功能类型(PrjFeatureType))!(clsPrjFeatureTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.memo) == false &&
    undefined !== pobjPrjFeatureTypeEN.memo &&
    tzDataType.isString(pobjPrjFeatureTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjPrjFeatureTypeEN.memo)], 非法,应该为字符型(In 功能类型(PrjFeatureType))!(clsPrjFeatureTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjFeatureType_CheckProperty4Update(pobjPrjFeatureTypeEN: clsPrjFeatureTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.featureTypeId) == false &&
    GetStrLen(pobjPrjFeatureTypeEN.featureTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能类型Id(featureTypeId)]的长度不能超过2(In 功能类型(PrjFeatureType))!值:$(pobjPrjFeatureTypeEN.featureTypeId)(clsPrjFeatureTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.featureTypeName) == false &&
    GetStrLen(pobjPrjFeatureTypeEN.featureTypeName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能类型名称(featureTypeName)]的长度不能超过30(In 功能类型(PrjFeatureType))!值:$(pobjPrjFeatureTypeEN.featureTypeName)(clsPrjFeatureTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.featureTypeENName) == false &&
    GetStrLen(pobjPrjFeatureTypeEN.featureTypeENName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能类型英文名(featureTypeENName)]的长度不能超过30(In 功能类型(PrjFeatureType))!值:$(pobjPrjFeatureTypeEN.featureTypeENName)(clsPrjFeatureTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.updDate) == false &&
    GetStrLen(pobjPrjFeatureTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 功能类型(PrjFeatureType))!值:$(pobjPrjFeatureTypeEN.updDate)(clsPrjFeatureTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.updUser) == false &&
    GetStrLen(pobjPrjFeatureTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 功能类型(PrjFeatureType))!值:$(pobjPrjFeatureTypeEN.updUser)(clsPrjFeatureTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.memo) == false &&
    GetStrLen(pobjPrjFeatureTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 功能类型(PrjFeatureType))!值:$(pobjPrjFeatureTypeEN.memo)(clsPrjFeatureTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.featureTypeId) == false &&
    undefined !== pobjPrjFeatureTypeEN.featureTypeId &&
    tzDataType.isString(pobjPrjFeatureTypeEN.featureTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能类型Id(featureTypeId)]的值:[$(pobjPrjFeatureTypeEN.featureTypeId)], 非法,应该为字符型(In 功能类型(PrjFeatureType))!(clsPrjFeatureTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.featureTypeName) == false &&
    undefined !== pobjPrjFeatureTypeEN.featureTypeName &&
    tzDataType.isString(pobjPrjFeatureTypeEN.featureTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能类型名称(featureTypeName)]的值:[$(pobjPrjFeatureTypeEN.featureTypeName)], 非法,应该为字符型(In 功能类型(PrjFeatureType))!(clsPrjFeatureTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.featureTypeENName) == false &&
    undefined !== pobjPrjFeatureTypeEN.featureTypeENName &&
    tzDataType.isString(pobjPrjFeatureTypeEN.featureTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能类型英文名(featureTypeENName)]的值:[$(pobjPrjFeatureTypeEN.featureTypeENName)], 非法,应该为字符型(In 功能类型(PrjFeatureType))!(clsPrjFeatureTypeBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjPrjFeatureTypeEN.orderNum &&
    undefined !== pobjPrjFeatureTypeEN.orderNum &&
    tzDataType.isNumber(pobjPrjFeatureTypeEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjPrjFeatureTypeEN.orderNum)], 非法,应该为数值型(In 功能类型(PrjFeatureType))!(clsPrjFeatureTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.updDate) == false &&
    undefined !== pobjPrjFeatureTypeEN.updDate &&
    tzDataType.isString(pobjPrjFeatureTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjPrjFeatureTypeEN.updDate)], 非法,应该为字符型(In 功能类型(PrjFeatureType))!(clsPrjFeatureTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.updUser) == false &&
    undefined !== pobjPrjFeatureTypeEN.updUser &&
    tzDataType.isString(pobjPrjFeatureTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjPrjFeatureTypeEN.updUser)], 非法,应该为字符型(In 功能类型(PrjFeatureType))!(clsPrjFeatureTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureTypeEN.memo) == false &&
    undefined !== pobjPrjFeatureTypeEN.memo &&
    tzDataType.isString(pobjPrjFeatureTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjPrjFeatureTypeEN.memo)], 非法,应该为字符型(In 功能类型(PrjFeatureType))!(clsPrjFeatureTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjFeatureType_GetJSONStrByObj(pobjPrjFeatureTypeEN: clsPrjFeatureTypeEN): string {
  pobjPrjFeatureTypeEN.sfUpdFldSetStr = pobjPrjFeatureTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrjFeatureTypeEN);
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
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PrjFeatureType_GetObjLstByJSONStr(strJSON: string): Array<clsPrjFeatureTypeEN> {
  let arrPrjFeatureTypeObjLst = new Array<clsPrjFeatureTypeEN>();
  if (strJSON === '') {
    return arrPrjFeatureTypeObjLst;
  }
  try {
    arrPrjFeatureTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrjFeatureTypeObjLst;
  }
  return arrPrjFeatureTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrjFeatureTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrjFeatureType_GetObjLstByJSONObjLst(
  arrPrjFeatureTypeObjLstS: Array<clsPrjFeatureTypeEN>,
): Array<clsPrjFeatureTypeEN> {
  const arrPrjFeatureTypeObjLst = new Array<clsPrjFeatureTypeEN>();
  for (const objInFor of arrPrjFeatureTypeObjLstS) {
    const obj1 = PrjFeatureType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrjFeatureTypeObjLst.push(obj1);
  }
  return arrPrjFeatureTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjFeatureType_GetObjByJSONStr(strJSON: string): clsPrjFeatureTypeEN {
  let pobjPrjFeatureTypeEN = new clsPrjFeatureTypeEN();
  if (strJSON === '') {
    return pobjPrjFeatureTypeEN;
  }
  try {
    pobjPrjFeatureTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrjFeatureTypeEN;
  }
  return pobjPrjFeatureTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrjFeatureType_GetCombineCondition(
  objPrjFeatureTypeCond: clsPrjFeatureTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureTypeCond.dicFldComparisonOp,
      clsPrjFeatureTypeEN.con_FeatureTypeId,
    ) == true
  ) {
    const strComparisonOpFeatureTypeId: string =
      objPrjFeatureTypeCond.dicFldComparisonOp[clsPrjFeatureTypeEN.con_FeatureTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureTypeEN.con_FeatureTypeId,
      objPrjFeatureTypeCond.featureTypeId,
      strComparisonOpFeatureTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureTypeCond.dicFldComparisonOp,
      clsPrjFeatureTypeEN.con_FeatureTypeName,
    ) == true
  ) {
    const strComparisonOpFeatureTypeName: string =
      objPrjFeatureTypeCond.dicFldComparisonOp[clsPrjFeatureTypeEN.con_FeatureTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureTypeEN.con_FeatureTypeName,
      objPrjFeatureTypeCond.featureTypeName,
      strComparisonOpFeatureTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureTypeCond.dicFldComparisonOp,
      clsPrjFeatureTypeEN.con_FeatureTypeENName,
    ) == true
  ) {
    const strComparisonOpFeatureTypeENName: string =
      objPrjFeatureTypeCond.dicFldComparisonOp[clsPrjFeatureTypeEN.con_FeatureTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureTypeEN.con_FeatureTypeENName,
      objPrjFeatureTypeCond.featureTypeENName,
      strComparisonOpFeatureTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureTypeCond.dicFldComparisonOp,
      clsPrjFeatureTypeEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objPrjFeatureTypeCond.dicFldComparisonOp[clsPrjFeatureTypeEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPrjFeatureTypeEN.con_OrderNum,
      objPrjFeatureTypeCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureTypeCond.dicFldComparisonOp,
      clsPrjFeatureTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPrjFeatureTypeCond.dicFldComparisonOp[clsPrjFeatureTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureTypeEN.con_UpdDate,
      objPrjFeatureTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureTypeCond.dicFldComparisonOp,
      clsPrjFeatureTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objPrjFeatureTypeCond.dicFldComparisonOp[clsPrjFeatureTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureTypeEN.con_UpdUser,
      objPrjFeatureTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureTypeCond.dicFldComparisonOp,
      clsPrjFeatureTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPrjFeatureTypeCond.dicFldComparisonOp[clsPrjFeatureTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureTypeEN.con_Memo,
      objPrjFeatureTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjFeatureType(功能类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFeatureTypeName: 功能类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjFeatureType_GetUniCondStr(objPrjFeatureTypeEN: clsPrjFeatureTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FeatureTypeName = '{0}'", objPrjFeatureTypeEN.featureTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjFeatureType(功能类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFeatureTypeName: 功能类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjFeatureType_GetUniCondStr4Update(
  objPrjFeatureTypeEN: clsPrjFeatureTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FeatureTypeId <> '{0}'", objPrjFeatureTypeEN.featureTypeId);
  strWhereCond += Format(" and FeatureTypeName = '{0}'", objPrjFeatureTypeEN.featureTypeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrjFeatureTypeENS:源对象
 * @param objPrjFeatureTypeENT:目标对象
 */
export function PrjFeatureType_GetObjFromJsonObj(
  objPrjFeatureTypeENS: clsPrjFeatureTypeEN,
): clsPrjFeatureTypeEN {
  const objPrjFeatureTypeENT: clsPrjFeatureTypeEN = new clsPrjFeatureTypeEN();
  ObjectAssign(objPrjFeatureTypeENT, objPrjFeatureTypeENS);
  return objPrjFeatureTypeENT;
}
