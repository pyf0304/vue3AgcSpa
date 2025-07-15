/**
 * 类名:clsFeatureButtonRelaWApi
 * 表名:FeatureButtonRela(00050426)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:33
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
 * 功能按钮关系(FeatureButtonRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
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
  featureButtonRelaCache,
  isFuncMapCache,
} from '@/views/PrjFunction/FeatureButtonRelaVueShare';
import { clsFeatureButtonRelaENEx } from '@/ts/L0Entity/PrjFunction/clsFeatureButtonRelaENEx';
import { clsFeatureButtonRelaEN } from '@/ts/L0Entity/PrjFunction/clsFeatureButtonRelaEN';
import { Format, GetStrLen, tzDataType, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { ButtonTab_func } from '@/ts/L3ForWApi/PrjFunction/clsButtonTabWApi';
import { clsButtonTabEN } from '@/ts/L0Entity/PrjFunction/clsButtonTabEN';
import { ApplicationType_func } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { PrjFeature_func } from '@/ts/L3ForWApi/PrjFunction/clsPrjFeatureWApi';
import { clsPrjFeatureEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { PrjFeatureType_func } from '@/ts/L3ForWApi/PrjFunction/clsPrjFeatureTypeWApi';
import { clsPrjFeatureTypeEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const featureButtonRela_Controller = 'FeatureButtonRelaApi';
export const featureButtonRela_ConstructorName = 'featureButtonRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function FeatureButtonRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsFeatureButtonRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsFeatureButtonRelaWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
      const objFeatureButtonRela = FeatureButtonRela_GetObjFromJsonObj(returnObj);
      return objFeatureButtonRela;
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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsFeatureButtonRelaWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFeatureButtonRelaEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFeatureButtonRelaCache: clsFeatureButtonRelaEN = JSON.parse(strTempObj);
    return objFeatureButtonRelaCache;
  }
  try {
    const objFeatureButtonRela = await FeatureButtonRela_GetObjBymIdAsync(lngmId);
    if (objFeatureButtonRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objFeatureButtonRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFeatureButtonRela;
    }
    return objFeatureButtonRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsFeatureButtonRelaWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrFeatureButtonRelaObjLstCache = await FeatureButtonRela_GetObjLstCache();
  try {
    const arrFeatureButtonRelaSel = arrFeatureButtonRelaObjLstCache.filter((x) => x.mId == lngmId);
    let objFeatureButtonRela: clsFeatureButtonRelaEN;
    if (arrFeatureButtonRelaSel.length > 0) {
      objFeatureButtonRela = arrFeatureButtonRelaSel[0];
      return objFeatureButtonRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFeatureButtonRelaConst = await FeatureButtonRela_GetObjBymIdAsync(lngmId);
        if (objFeatureButtonRelaConst != null) {
          FeatureButtonRela_ReFreshThisCache();
          return objFeatureButtonRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      featureButtonRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objFeatureButtonRela:所给的对象
 * @returns 对象
 */
export async function FeatureButtonRela_UpdateObjInLstCache(
  objFeatureButtonRela: clsFeatureButtonRelaEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFeatureButtonRelaObjLstCache = await FeatureButtonRela_GetObjLstCache();
    const obj = arrFeatureButtonRelaObjLstCache.find(
      (x) =>
        x.applicationTypeId == objFeatureButtonRela.applicationTypeId &&
        x.featureId == objFeatureButtonRela.featureId &&
        x.buttonId == objFeatureButtonRela.buttonId,
    );
    if (obj != null) {
      objFeatureButtonRela.mId = obj.mId;
      ObjectAssign(obj, objFeatureButtonRela);
    } else {
      arrFeatureButtonRelaObjLstCache.push(objFeatureButtonRela);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      featureButtonRela_ConstructorName,
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
export function FeatureButtonRela_SortFunDefa(
  a: clsFeatureButtonRelaEN,
  b: clsFeatureButtonRelaEN,
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
export function FeatureButtonRela_SortFunDefa2Fld(
  a: clsFeatureButtonRelaEN,
  b: clsFeatureButtonRelaEN,
): number {
  if (a.applicationTypeId == b.applicationTypeId) return a.featureId.localeCompare(b.featureId);
  else return a.applicationTypeId - b.applicationTypeId;
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
export function FeatureButtonRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFeatureButtonRelaEN.con_mId:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          return a.mId - b.mId;
        };
      case clsFeatureButtonRelaEN.con_ApplicationTypeId:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsFeatureButtonRelaEN.con_FeatureId:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          return a.featureId.localeCompare(b.featureId);
        };
      case clsFeatureButtonRelaEN.con_ButtonId:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          return a.buttonId.localeCompare(b.buttonId);
        };
      case clsFeatureButtonRelaEN.con_EventFuncName:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          if (a.eventFuncName == null) return -1;
          if (b.eventFuncName == null) return 1;
          return a.eventFuncName.localeCompare(b.eventFuncName);
        };
      case clsFeatureButtonRelaEN.con_UpdDate:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFeatureButtonRelaEN.con_UpdUser:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFeatureButtonRelaEN.con_Memo:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FeatureButtonRela]中不存在!(in ${featureButtonRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFeatureButtonRelaEN.con_mId:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          return b.mId - a.mId;
        };
      case clsFeatureButtonRelaEN.con_ApplicationTypeId:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsFeatureButtonRelaEN.con_FeatureId:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          return b.featureId.localeCompare(a.featureId);
        };
      case clsFeatureButtonRelaEN.con_ButtonId:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          return b.buttonId.localeCompare(a.buttonId);
        };
      case clsFeatureButtonRelaEN.con_EventFuncName:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          if (b.eventFuncName == null) return -1;
          if (a.eventFuncName == null) return 1;
          return b.eventFuncName.localeCompare(a.eventFuncName);
        };
      case clsFeatureButtonRelaEN.con_UpdDate:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFeatureButtonRelaEN.con_UpdUser:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFeatureButtonRelaEN.con_Memo:
        return (a: clsFeatureButtonRelaEN, b: clsFeatureButtonRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FeatureButtonRela]中不存在!(in ${featureButtonRela_ConstructorName}.${strThisFuncName})`;
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
export async function FeatureButtonRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFeatureButtonRelaEN.con_mId:
      return (obj: clsFeatureButtonRelaEN) => {
        return obj.mId === value;
      };
    case clsFeatureButtonRelaEN.con_ApplicationTypeId:
      return (obj: clsFeatureButtonRelaEN) => {
        return obj.applicationTypeId === value;
      };
    case clsFeatureButtonRelaEN.con_FeatureId:
      return (obj: clsFeatureButtonRelaEN) => {
        return obj.featureId === value;
      };
    case clsFeatureButtonRelaEN.con_ButtonId:
      return (obj: clsFeatureButtonRelaEN) => {
        return obj.buttonId === value;
      };
    case clsFeatureButtonRelaEN.con_EventFuncName:
      return (obj: clsFeatureButtonRelaEN) => {
        return obj.eventFuncName === value;
      };
    case clsFeatureButtonRelaEN.con_UpdDate:
      return (obj: clsFeatureButtonRelaEN) => {
        return obj.updDate === value;
      };
    case clsFeatureButtonRelaEN.con_UpdUser:
      return (obj: clsFeatureButtonRelaEN) => {
        return obj.updUser === value;
      };
    case clsFeatureButtonRelaEN.con_Memo:
      return (obj: clsFeatureButtonRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FeatureButtonRela]中不存在!(in ${featureButtonRela_ConstructorName}.${strThisFuncName})`;
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
export async function FeatureButtonRela_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsFeatureButtonRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFeatureButtonRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFeatureButtonRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objFeatureButtonRela = await FeatureButtonRela_GetObjBymIdCache(lngmId);
  if (objFeatureButtonRela == null) return '';
  if (objFeatureButtonRela.GetFldValue(strOutFldName) == null) return '';
  return objFeatureButtonRela.GetFldValue(strOutFldName).toString();
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
export async function FeatureButtonRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsFeatureButtonRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrFeatureButtonRela = await FeatureButtonRela_GetObjLstCache();
  if (arrFeatureButtonRela == null) return [];
  let arrFeatureButtonRelaSel = arrFeatureButtonRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFeatureButtonRelaSel.length == 0) return [];
  return arrFeatureButtonRelaSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FeatureButtonRela_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFeatureButtonRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
      const objFeatureButtonRela = FeatureButtonRela_GetObjFromJsonObj(returnObj);
      return objFeatureButtonRela;
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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFeatureButtonRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsFeatureButtonRelaEN.WhereFormat) == false) {
    strWhereCond = clsFeatureButtonRelaEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFeatureButtonRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFeatureButtonRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFeatureButtonRelaExObjLstCache: Array<clsFeatureButtonRelaEN> =
      CacheHelper.Get(strKey);
    const arrFeatureButtonRelaObjLstT = FeatureButtonRela_GetObjLstByJSONObjLst(
      arrFeatureButtonRelaExObjLstCache,
    );
    return arrFeatureButtonRelaObjLstT;
  }
  try {
    const arrFeatureButtonRelaExObjLst = await FeatureButtonRela_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrFeatureButtonRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFeatureButtonRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrFeatureButtonRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFeatureButtonRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsFeatureButtonRelaEN.WhereFormat) == false) {
    strWhereCond = clsFeatureButtonRelaEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFeatureButtonRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFeatureButtonRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFeatureButtonRelaExObjLstCache: Array<clsFeatureButtonRelaEN> =
      JSON.parse(strTempObjLst);
    const arrFeatureButtonRelaObjLstT = FeatureButtonRela_GetObjLstByJSONObjLst(
      arrFeatureButtonRelaExObjLstCache,
    );
    return arrFeatureButtonRelaObjLstT;
  }
  try {
    const arrFeatureButtonRelaExObjLst = await FeatureButtonRela_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrFeatureButtonRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFeatureButtonRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrFeatureButtonRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFeatureButtonRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFeatureButtonRelaObjLstCache: Array<clsFeatureButtonRelaEN> =
      JSON.parse(strTempObjLst);
    return arrFeatureButtonRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FeatureButtonRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFeatureButtonRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
          featureButtonRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureButtonRela_GetObjLstByJSONObjLst(returnObjLst);
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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFeatureButtonRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsFeatureButtonRelaEN.WhereFormat) == false) {
    strWhereCond = clsFeatureButtonRelaEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsFeatureButtonRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFeatureButtonRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFeatureButtonRelaExObjLstCache: Array<clsFeatureButtonRelaEN> =
      JSON.parse(strTempObjLst);
    const arrFeatureButtonRelaObjLstT = FeatureButtonRela_GetObjLstByJSONObjLst(
      arrFeatureButtonRelaExObjLstCache,
    );
    return arrFeatureButtonRelaObjLstT;
  }
  try {
    const arrFeatureButtonRelaExObjLst = await FeatureButtonRela_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrFeatureButtonRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFeatureButtonRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrFeatureButtonRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFeatureButtonRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFeatureButtonRelaObjLstCache: Array<clsFeatureButtonRelaEN> =
      JSON.parse(strTempObjLst);
    return arrFeatureButtonRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FeatureButtonRela_GetObjLstCache(): Promise<Array<clsFeatureButtonRelaEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrFeatureButtonRelaObjLstCache;
  switch (clsFeatureButtonRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrFeatureButtonRelaObjLstCache = await FeatureButtonRela_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrFeatureButtonRelaObjLstCache = await FeatureButtonRela_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrFeatureButtonRelaObjLstCache = await FeatureButtonRela_GetObjLstClientCache();
      break;
    default:
      arrFeatureButtonRelaObjLstCache = await FeatureButtonRela_GetObjLstClientCache();
      break;
  }
  return arrFeatureButtonRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FeatureButtonRela_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFeatureButtonRelaObjLstCache;
  switch (clsFeatureButtonRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrFeatureButtonRelaObjLstCache = await FeatureButtonRela_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrFeatureButtonRelaObjLstCache = await FeatureButtonRela_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrFeatureButtonRelaObjLstCache = null;
      break;
    default:
      arrFeatureButtonRelaObjLstCache = null;
      break;
  }
  return arrFeatureButtonRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FeatureButtonRela_GetSubObjLstCache(
  objFeatureButtonRelaCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFeatureButtonRelaObjLstCache = await FeatureButtonRela_GetObjLstCache();
  let arrFeatureButtonRelaSel = arrFeatureButtonRelaObjLstCache;
  if (objFeatureButtonRelaCond.GetConditions().length == 0) return arrFeatureButtonRelaSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objFeatureButtonRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFeatureButtonRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFeatureButtonRelaCond),
      featureButtonRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFeatureButtonRelaEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function FeatureButtonRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsFeatureButtonRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
          featureButtonRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureButtonRela_GetObjLstByJSONObjLst(returnObjLst);
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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrFeatureButtonRelaObjLstCache = await FeatureButtonRela_GetObjLstCache();
    const arrFeatureButtonRelaSel = arrFeatureButtonRelaObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrFeatureButtonRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFeatureButtonRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
          featureButtonRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureButtonRela_GetObjLstByJSONObjLst(returnObjLst);
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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFeatureButtonRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
          featureButtonRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureButtonRela_GetObjLstByJSONObjLst(returnObjLst);
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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsFeatureButtonRelaEN>();
  const arrFeatureButtonRelaObjLstCache = await FeatureButtonRela_GetObjLstCache();
  if (arrFeatureButtonRelaObjLstCache.length == 0) return arrFeatureButtonRelaObjLstCache;
  let arrFeatureButtonRelaSel = arrFeatureButtonRelaObjLstCache;
  const objFeatureButtonRelaCond = objPagerPara.conditionCollection;
  if (objFeatureButtonRelaCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsFeatureButtonRelaEN>();
  }
  //console.log("clsFeatureButtonRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objFeatureButtonRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFeatureButtonRelaSel.length == 0) return arrFeatureButtonRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.sort(
        FeatureButtonRela_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.sort(objPagerPara.sortFun);
    }
    arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.slice(intStart, intEnd);
    return arrFeatureButtonRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      featureButtonRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFeatureButtonRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function FeatureButtonRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFeatureButtonRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFeatureButtonRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
          featureButtonRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureButtonRela_GetObjLstByJSONObjLst(returnObjLst);
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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);
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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_DelFeatureButtonRelasAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFeatureButtonRelasAsync';
  const strAction = 'DelFeatureButtonRelas';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFeatureButtonRelaENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrFeatureButtonRelaObjLst = await FeatureButtonRela_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsFeatureButtonRelaENEx>();
  const arrFeatureButtonRelaExObjLst = arrFeatureButtonRelaObjLst.map((obj) => {
    const cacheKey = `${obj.mId}`;
    if (featureButtonRelaCache[cacheKey]) {
      const oldObj = featureButtonRelaCache[cacheKey];
      return oldObj;
    } else {
      const newObj = FeatureButtonRela_CopyToEx(obj);
      arrNewObj.push(newObj);
      featureButtonRelaCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await FeatureButtonRela_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsFeatureButtonRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrFeatureButtonRelaExObjLst) {
      await FeatureButtonRela_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}`;
      featureButtonRelaCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrFeatureButtonRelaExObjLst.length == 0) return arrFeatureButtonRelaExObjLst;
  let arrFeatureButtonRelaSel: Array<clsFeatureButtonRelaENEx> = arrFeatureButtonRelaExObjLst;
  const objFeatureButtonRelaCond = objPagerPara.conditionCollection;
  if (objFeatureButtonRelaCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrFeatureButtonRelaExObjLst;
  }
  try {
    for (const objCondition of objFeatureButtonRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFeatureButtonRelaSel.length == 0) return arrFeatureButtonRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.sort(
        FeatureButtonRela_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.sort(objPagerPara.sortFun);
    }
    arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.slice(intStart, intEnd);
    return arrFeatureButtonRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      featureButtonRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFeatureButtonRelaENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objFeatureButtonRelaENS:源对象
 * @returns 目标对象=>clsFeatureButtonRelaEN:objFeatureButtonRelaENT
 **/
export function FeatureButtonRela_CopyToEx(
  objFeatureButtonRelaENS: clsFeatureButtonRelaEN,
): clsFeatureButtonRelaENEx {
  const strThisFuncName = FeatureButtonRela_CopyToEx.name;
  const objFeatureButtonRelaENT = new clsFeatureButtonRelaENEx();
  try {
    ObjectAssign(objFeatureButtonRelaENT, objFeatureButtonRelaENS);
    return objFeatureButtonRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureButtonRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFeatureButtonRelaENT;
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
export function FeatureButtonRela_FuncMapByFldName(
  strFldName: string,
  objFeatureButtonRelaEx: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRela_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsFeatureButtonRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFeatureButtonRelaENEx.con_OrderNum:
      return FeatureButtonRela_FuncMapOrderNum(objFeatureButtonRelaEx);
    case clsFeatureButtonRelaENEx.con_ApplicationTypeName:
      return FeatureButtonRela_FuncMapApplicationTypeName(objFeatureButtonRelaEx);
    case clsFeatureButtonRelaENEx.con_ApplicationTypeENName:
      return FeatureButtonRela_FuncMapApplicationTypeENName(objFeatureButtonRelaEx);
    case clsFeatureButtonRelaENEx.con_FeatureName:
      return FeatureButtonRela_FuncMapFeatureName(objFeatureButtonRelaEx);
    case clsFeatureButtonRelaENEx.con_FeatureTypeName:
      return FeatureButtonRela_FuncMapFeatureTypeName(objFeatureButtonRelaEx);
    case clsFeatureButtonRelaENEx.con_ButtonName:
      return FeatureButtonRela_FuncMapButtonName(objFeatureButtonRelaEx);
    case clsFeatureButtonRelaENEx.con_Text:
      return FeatureButtonRela_FuncMapText(objFeatureButtonRelaEx);
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
export function FeatureButtonRela_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFeatureButtonRelaENEx.con_OrderNum:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return a.orderNum - b.orderNum;
        };
      case clsFeatureButtonRelaENEx.con_ApplicationTypeName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return a.applicationTypeName.localeCompare(b.applicationTypeName);
        };
      case clsFeatureButtonRelaENEx.con_ApplicationTypeENName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return a.applicationTypeENName.localeCompare(b.applicationTypeENName);
        };
      case clsFeatureButtonRelaENEx.con_FeatureName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return a.featureName.localeCompare(b.featureName);
        };
      case clsFeatureButtonRelaENEx.con_FeatureTypeName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return a.featureTypeName.localeCompare(b.featureTypeName);
        };
      case clsFeatureButtonRelaENEx.con_ButtonName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return a.buttonName.localeCompare(b.buttonName);
        };
      case clsFeatureButtonRelaENEx.con_Text:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return a.text.localeCompare(b.text);
        };
      default:
        return FeatureButtonRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFeatureButtonRelaENEx.con_OrderNum:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return b.orderNum - a.orderNum;
        };
      case clsFeatureButtonRelaENEx.con_ApplicationTypeName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return b.applicationTypeName.localeCompare(a.applicationTypeName);
        };
      case clsFeatureButtonRelaENEx.con_ApplicationTypeENName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return b.applicationTypeENName.localeCompare(a.applicationTypeENName);
        };
      case clsFeatureButtonRelaENEx.con_FeatureName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return b.featureName.localeCompare(a.featureName);
        };
      case clsFeatureButtonRelaENEx.con_FeatureTypeName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return b.featureTypeName.localeCompare(a.featureTypeName);
        };
      case clsFeatureButtonRelaENEx.con_ButtonName:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return b.buttonName.localeCompare(a.buttonName);
        };
      case clsFeatureButtonRelaENEx.con_Text:
        return (a: clsFeatureButtonRelaENEx, b: clsFeatureButtonRelaENEx) => {
          return b.text.localeCompare(a.text);
        };
      default:
        return FeatureButtonRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFeatureButtonRelaS:源对象
 **/
export async function FeatureButtonRela_FuncMapOrderNum(
  objFeatureButtonRela: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRela_FuncMapOrderNum.name;
  try {
    if (objFeatureButtonRela.orderNum == 0) {
      const ButtonTabButtonId = objFeatureButtonRela.buttonId;
      const ButtonTabOrderNum = await ButtonTab_func(
        clsButtonTabEN.con_ButtonId,
        clsButtonTabEN.con_OrderNum,
        ButtonTabButtonId,
      );
      objFeatureButtonRela.orderNum = ButtonTabOrderNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001339)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureButtonRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFeatureButtonRelaS:源对象
 **/
export async function FeatureButtonRela_FuncMapApplicationTypeName(
  objFeatureButtonRela: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRela_FuncMapApplicationTypeName.name;
  try {
    if (IsNullOrEmpty(objFeatureButtonRela.applicationTypeName) == true) {
      const ApplicationTypeApplicationTypeId = objFeatureButtonRela.applicationTypeId.toString();
      const ApplicationTypeApplicationTypeName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeName,
        ApplicationTypeApplicationTypeId,
      );
      objFeatureButtonRela.applicationTypeName = ApplicationTypeApplicationTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001307)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureButtonRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFeatureButtonRelaS:源对象
 **/
export async function FeatureButtonRela_FuncMapApplicationTypeENName(
  objFeatureButtonRela: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRela_FuncMapApplicationTypeENName.name;
  try {
    if (IsNullOrEmpty(objFeatureButtonRela.applicationTypeENName) == true) {
      const ApplicationTypeApplicationTypeId = objFeatureButtonRela.applicationTypeId.toString();
      const ApplicationTypeApplicationTypeENName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeENName,
        ApplicationTypeApplicationTypeId,
      );
      objFeatureButtonRela.applicationTypeENName = ApplicationTypeApplicationTypeENName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001340)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureButtonRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFeatureButtonRelaS:源对象
 **/
export async function FeatureButtonRela_FuncMapFeatureName(
  objFeatureButtonRela: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRela_FuncMapFeatureName.name;
  try {
    if (IsNullOrEmpty(objFeatureButtonRela.featureName) == true) {
      const PrjFeatureFeatureId = objFeatureButtonRela.featureId;
      const PrjFeatureFeatureName = await PrjFeature_func(
        clsPrjFeatureEN.con_FeatureId,
        clsPrjFeatureEN.con_FeatureName,
        PrjFeatureFeatureId,
      );
      objFeatureButtonRela.featureName = PrjFeatureFeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001341)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureButtonRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFeatureButtonRelaS:源对象
 **/
export async function FeatureButtonRela_FuncMapFeatureTypeName(
  objFeatureButtonRela: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRela_FuncMapFeatureTypeName.name;
  try {
    if (IsNullOrEmpty(objFeatureButtonRela.featureTypeName) == true) {
      const PrjFeatureFeatureId = objFeatureButtonRela.featureId;
      const PrjFeatureFeatureTypeId = await PrjFeature_func(
        clsPrjFeatureEN.con_FeatureId,
        clsPrjFeatureEN.con_FeatureTypeId,
        PrjFeatureFeatureId,
      );
      const PrjFeatureTypeFeatureTypeId = PrjFeatureFeatureTypeId;
      const PrjFeatureTypeFeatureTypeName = await PrjFeatureType_func(
        clsPrjFeatureTypeEN.con_FeatureTypeId,
        clsPrjFeatureTypeEN.con_FeatureTypeName,
        PrjFeatureTypeFeatureTypeId,
      );
      objFeatureButtonRela.featureTypeName = PrjFeatureTypeFeatureTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001342)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureButtonRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFeatureButtonRelaS:源对象
 **/
export async function FeatureButtonRela_FuncMapButtonName(
  objFeatureButtonRela: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRela_FuncMapButtonName.name;
  try {
    if (IsNullOrEmpty(objFeatureButtonRela.buttonName) == true) {
      const ButtonTabButtonId = objFeatureButtonRela.buttonId;
      const ButtonTabButtonName = await ButtonTab_func(
        clsButtonTabEN.con_ButtonId,
        clsButtonTabEN.con_ButtonName,
        ButtonTabButtonId,
      );
      objFeatureButtonRela.buttonName = ButtonTabButtonName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001343)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureButtonRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFeatureButtonRelaS:源对象
 **/
export async function FeatureButtonRela_FuncMapText(
  objFeatureButtonRela: clsFeatureButtonRelaENEx,
) {
  const strThisFuncName = FeatureButtonRela_FuncMapText.name;
  try {
    if (IsNullOrEmpty(objFeatureButtonRela.text) == true) {
      const ButtonTabButtonId = objFeatureButtonRela.buttonId;
      const ButtonTabText = await ButtonTab_func(
        clsButtonTabEN.con_ButtonId,
        clsButtonTabEN.con_Text,
        ButtonTabButtonId,
      );
      objFeatureButtonRela.text = ButtonTabText;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001344)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_DelFeatureButtonRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFeatureButtonRelasByCondAsync';
  const strAction = 'DelFeatureButtonRelasByCond';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
 * @param objFeatureButtonRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FeatureButtonRela_AddNewRecordAsync(
  objFeatureButtonRelaEN: clsFeatureButtonRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFeatureButtonRelaEN);
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureButtonRelaEN, config);
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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function FeatureButtonRela_AddNewObjSave(
  objFeatureButtonRelaEN: clsFeatureButtonRelaEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    FeatureButtonRela_CheckPropertyNew(objFeatureButtonRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${featureButtonRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FeatureButtonRela_CheckUniCond4Add(objFeatureButtonRelaEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await FeatureButtonRela_AddNewRecordAsync(objFeatureButtonRelaEN);
    if (returnBool == true) {
      FeatureButtonRela_ReFreshCache();
    } else {
      const strInfo = `添加[功能按钮关系(FeatureButtonRela)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objFeatureButtonRelaEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${featureButtonRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function FeatureButtonRela_CheckUniCond4Add(
  objFeatureButtonRelaEN: clsFeatureButtonRelaEN,
): Promise<boolean> {
  const strUniquenessCondition = FeatureButtonRela_GetUniCondStr(objFeatureButtonRelaEN);
  const bolIsExistCondition = await FeatureButtonRela_IsExistRecordAsync(strUniquenessCondition);
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
export async function FeatureButtonRela_CheckUniCond4Update(
  objFeatureButtonRelaEN: clsFeatureButtonRelaEN,
): Promise<boolean> {
  const strUniquenessCondition = FeatureButtonRela_GetUniCondStr4Update(objFeatureButtonRelaEN);
  const bolIsExistCondition = await FeatureButtonRela_IsExistRecordAsync(strUniquenessCondition);
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
export async function FeatureButtonRela_UpdateObjSave(
  objFeatureButtonRelaEN: clsFeatureButtonRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFeatureButtonRelaEN.sfUpdFldSetStr = objFeatureButtonRelaEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objFeatureButtonRelaEN.mId == 0 || objFeatureButtonRelaEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    FeatureButtonRela_CheckProperty4Update(objFeatureButtonRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${featureButtonRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FeatureButtonRela_CheckUniCond4Update(objFeatureButtonRelaEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await FeatureButtonRela_UpdateRecordAsync(objFeatureButtonRelaEN);
    if (returnBool == true) {
      FeatureButtonRela_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${featureButtonRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFeatureButtonRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FeatureButtonRela_AddNewRecordWithReturnKeyAsync(
  objFeatureButtonRelaEN: clsFeatureButtonRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureButtonRelaEN, config);
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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
 * @param objFeatureButtonRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FeatureButtonRela_UpdateRecordAsync(
  objFeatureButtonRelaEN: clsFeatureButtonRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFeatureButtonRelaEN.sfUpdFldSetStr === undefined ||
    objFeatureButtonRelaEN.sfUpdFldSetStr === null ||
    objFeatureButtonRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFeatureButtonRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureButtonRelaEN, config);
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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
 * @param objFeatureButtonRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FeatureButtonRela_EditRecordExAsync(
  objFeatureButtonRelaEN: clsFeatureButtonRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFeatureButtonRelaEN.sfUpdFldSetStr === undefined ||
    objFeatureButtonRelaEN.sfUpdFldSetStr === null ||
    objFeatureButtonRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFeatureButtonRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureButtonRelaEN, config);
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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
 * @param objFeatureButtonRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FeatureButtonRela_UpdateWithConditionAsync(
  objFeatureButtonRelaEN: clsFeatureButtonRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFeatureButtonRelaEN.sfUpdFldSetStr === undefined ||
    objFeatureButtonRelaEN.sfUpdFldSetStr === null ||
    objFeatureButtonRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFeatureButtonRelaEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);
  objFeatureButtonRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureButtonRelaEN, config);
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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_IsExistRecordCache(
  objFeatureButtonRelaCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFeatureButtonRelaObjLstCache = await FeatureButtonRela_GetObjLstCache();
  if (arrFeatureButtonRelaObjLstCache == null) return false;
  let arrFeatureButtonRelaSel = arrFeatureButtonRelaObjLstCache;
  if (objFeatureButtonRelaCond.GetConditions().length == 0)
    return arrFeatureButtonRelaSel.length > 0 ? true : false;
  try {
    for (const objCondition of objFeatureButtonRelaCond.GetConditions()) {
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
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFeatureButtonRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFeatureButtonRelaCond),
      featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrFeatureButtonRelaObjLstCache = await FeatureButtonRela_GetObjLstCache();
  if (arrFeatureButtonRelaObjLstCache == null) return false;
  try {
    const arrFeatureButtonRelaSel = arrFeatureButtonRelaObjLstCache.filter((x) => x.mId == lngmId);
    if (arrFeatureButtonRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
 * @param objFeatureButtonRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function FeatureButtonRela_GetRecCountByCondCache(
  objFeatureButtonRelaCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFeatureButtonRelaObjLstCache = await FeatureButtonRela_GetObjLstCache();
  if (arrFeatureButtonRelaObjLstCache == null) return 0;
  let arrFeatureButtonRelaSel = arrFeatureButtonRelaObjLstCache;
  if (objFeatureButtonRelaCond.GetConditions().length == 0) return arrFeatureButtonRelaSel.length;
  try {
    for (const objCondition of objFeatureButtonRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureButtonRelaSel = arrFeatureButtonRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFeatureButtonRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFeatureButtonRelaCond),
      featureButtonRela_ConstructorName,
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
export async function FeatureButtonRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(featureButtonRela_Controller, strAction);

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
        featureButtonRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureButtonRela_ConstructorName,
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
export function FeatureButtonRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FeatureButtonRela_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsFeatureButtonRelaEN._CurrTabName;
  switch (clsFeatureButtonRelaEN.CacheModeId) {
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
  clsFeatureButtonRelaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function FeatureButtonRela_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsFeatureButtonRelaEN._CurrTabName;
    switch (clsFeatureButtonRelaEN.CacheModeId) {
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
    clsFeatureButtonRelaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function FeatureButtonRela_GetLastRefreshTime(): string {
  if (clsFeatureButtonRelaEN._RefreshTimeLst.length == 0) return '';
  return clsFeatureButtonRelaEN._RefreshTimeLst[clsFeatureButtonRelaEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FeatureButtonRela_CheckPropertyNew(
  pobjFeatureButtonRelaEN: clsFeatureButtonRelaEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    null === pobjFeatureButtonRelaEN.applicationTypeId ||
    (pobjFeatureButtonRelaEN.applicationTypeId != null &&
      pobjFeatureButtonRelaEN.applicationTypeId.toString() === '') ||
    pobjFeatureButtonRelaEN.applicationTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[应用程序类型ID]不能为空(In 功能按钮关系)!(clsFeatureButtonRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.featureId) === true ||
    pobjFeatureButtonRelaEN.featureId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[功能Id]不能为空(In 功能按钮关系)!(clsFeatureButtonRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.buttonId) === true ||
    pobjFeatureButtonRelaEN.buttonId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[按钮Id]不能为空(In 功能按钮关系)!(clsFeatureButtonRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.featureId) == false &&
    GetStrLen(pobjFeatureButtonRelaEN.featureId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能Id(featureId)]的长度不能超过4(In 功能按钮关系(FeatureButtonRela))!值:${pobjFeatureButtonRelaEN.featureId}(clsFeatureButtonRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.buttonId) == false &&
    GetStrLen(pobjFeatureButtonRelaEN.buttonId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[按钮Id(buttonId)]的长度不能超过2(In 功能按钮关系(FeatureButtonRela))!值:${pobjFeatureButtonRelaEN.buttonId}(clsFeatureButtonRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.eventFuncName) == false &&
    GetStrLen(pobjFeatureButtonRelaEN.eventFuncName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[事件函数名(eventFuncName)]的长度不能超过50(In 功能按钮关系(FeatureButtonRela))!值:${pobjFeatureButtonRelaEN.eventFuncName}(clsFeatureButtonRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.updDate) == false &&
    GetStrLen(pobjFeatureButtonRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 功能按钮关系(FeatureButtonRela))!值:${pobjFeatureButtonRelaEN.updDate}(clsFeatureButtonRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.updUser) == false &&
    GetStrLen(pobjFeatureButtonRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 功能按钮关系(FeatureButtonRela))!值:${pobjFeatureButtonRelaEN.updUser}(clsFeatureButtonRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.memo) == false &&
    GetStrLen(pobjFeatureButtonRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 功能按钮关系(FeatureButtonRela))!值:${pobjFeatureButtonRelaEN.memo}(clsFeatureButtonRelaBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFeatureButtonRelaEN.mId &&
    undefined !== pobjFeatureButtonRelaEN.mId &&
    tzDataType.isNumber(pobjFeatureButtonRelaEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjFeatureButtonRelaEN.mId}], 非法,应该为数值型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFeatureButtonRelaEN.applicationTypeId &&
    undefined !== pobjFeatureButtonRelaEN.applicationTypeId &&
    tzDataType.isNumber(pobjFeatureButtonRelaEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjFeatureButtonRelaEN.applicationTypeId}], 非法,应该为数值型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.featureId) == false &&
    undefined !== pobjFeatureButtonRelaEN.featureId &&
    tzDataType.isString(pobjFeatureButtonRelaEN.featureId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能Id(featureId)]的值:[${pobjFeatureButtonRelaEN.featureId}], 非法,应该为字符型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.buttonId) == false &&
    undefined !== pobjFeatureButtonRelaEN.buttonId &&
    tzDataType.isString(pobjFeatureButtonRelaEN.buttonId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[按钮Id(buttonId)]的值:[${pobjFeatureButtonRelaEN.buttonId}], 非法,应该为字符型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.eventFuncName) == false &&
    undefined !== pobjFeatureButtonRelaEN.eventFuncName &&
    tzDataType.isString(pobjFeatureButtonRelaEN.eventFuncName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[事件函数名(eventFuncName)]的值:[${pobjFeatureButtonRelaEN.eventFuncName}], 非法,应该为字符型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.updDate) == false &&
    undefined !== pobjFeatureButtonRelaEN.updDate &&
    tzDataType.isString(pobjFeatureButtonRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjFeatureButtonRelaEN.updDate}], 非法,应该为字符型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.updUser) == false &&
    undefined !== pobjFeatureButtonRelaEN.updUser &&
    tzDataType.isString(pobjFeatureButtonRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjFeatureButtonRelaEN.updUser}], 非法,应该为字符型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.memo) == false &&
    undefined !== pobjFeatureButtonRelaEN.memo &&
    tzDataType.isString(pobjFeatureButtonRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFeatureButtonRelaEN.memo}], 非法,应该为字符型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.featureId) == false &&
    pobjFeatureButtonRelaEN.featureId != '[nuull]' &&
    GetStrLen(pobjFeatureButtonRelaEN.featureId) != 4
  ) {
    throw '(errid:Watl000415)字段[功能Id]作为外键字段,长度应该为4(In 功能按钮关系)!(clsFeatureButtonRelaBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FeatureButtonRela_CheckProperty4Update(
  pobjFeatureButtonRelaEN: clsFeatureButtonRelaEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.featureId) == false &&
    GetStrLen(pobjFeatureButtonRelaEN.featureId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能Id(featureId)]的长度不能超过4(In 功能按钮关系(FeatureButtonRela))!值:${pobjFeatureButtonRelaEN.featureId}(clsFeatureButtonRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.buttonId) == false &&
    GetStrLen(pobjFeatureButtonRelaEN.buttonId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[按钮Id(buttonId)]的长度不能超过2(In 功能按钮关系(FeatureButtonRela))!值:${pobjFeatureButtonRelaEN.buttonId}(clsFeatureButtonRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.eventFuncName) == false &&
    GetStrLen(pobjFeatureButtonRelaEN.eventFuncName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[事件函数名(eventFuncName)]的长度不能超过50(In 功能按钮关系(FeatureButtonRela))!值:${pobjFeatureButtonRelaEN.eventFuncName}(clsFeatureButtonRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.updDate) == false &&
    GetStrLen(pobjFeatureButtonRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 功能按钮关系(FeatureButtonRela))!值:${pobjFeatureButtonRelaEN.updDate}(clsFeatureButtonRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.updUser) == false &&
    GetStrLen(pobjFeatureButtonRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 功能按钮关系(FeatureButtonRela))!值:${pobjFeatureButtonRelaEN.updUser}(clsFeatureButtonRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.memo) == false &&
    GetStrLen(pobjFeatureButtonRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 功能按钮关系(FeatureButtonRela))!值:${pobjFeatureButtonRelaEN.memo}(clsFeatureButtonRelaBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFeatureButtonRelaEN.mId &&
    undefined !== pobjFeatureButtonRelaEN.mId &&
    tzDataType.isNumber(pobjFeatureButtonRelaEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjFeatureButtonRelaEN.mId}], 非法,应该为数值型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFeatureButtonRelaEN.applicationTypeId &&
    undefined !== pobjFeatureButtonRelaEN.applicationTypeId &&
    tzDataType.isNumber(pobjFeatureButtonRelaEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjFeatureButtonRelaEN.applicationTypeId}], 非法,应该为数值型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.featureId) == false &&
    undefined !== pobjFeatureButtonRelaEN.featureId &&
    tzDataType.isString(pobjFeatureButtonRelaEN.featureId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能Id(featureId)]的值:[${pobjFeatureButtonRelaEN.featureId}], 非法,应该为字符型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.buttonId) == false &&
    undefined !== pobjFeatureButtonRelaEN.buttonId &&
    tzDataType.isString(pobjFeatureButtonRelaEN.buttonId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[按钮Id(buttonId)]的值:[${pobjFeatureButtonRelaEN.buttonId}], 非法,应该为字符型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.eventFuncName) == false &&
    undefined !== pobjFeatureButtonRelaEN.eventFuncName &&
    tzDataType.isString(pobjFeatureButtonRelaEN.eventFuncName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[事件函数名(eventFuncName)]的值:[${pobjFeatureButtonRelaEN.eventFuncName}], 非法,应该为字符型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.updDate) == false &&
    undefined !== pobjFeatureButtonRelaEN.updDate &&
    tzDataType.isString(pobjFeatureButtonRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjFeatureButtonRelaEN.updDate}], 非法,应该为字符型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.updUser) == false &&
    undefined !== pobjFeatureButtonRelaEN.updUser &&
    tzDataType.isString(pobjFeatureButtonRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjFeatureButtonRelaEN.updUser}], 非法,应该为字符型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.memo) == false &&
    undefined !== pobjFeatureButtonRelaEN.memo &&
    tzDataType.isString(pobjFeatureButtonRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFeatureButtonRelaEN.memo}], 非法,应该为字符型(In 功能按钮关系(FeatureButtonRela))!(clsFeatureButtonRelaBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjFeatureButtonRelaEN.mId ||
    (pobjFeatureButtonRelaEN.mId != null && pobjFeatureButtonRelaEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 功能按钮关系)!(clsFeatureButtonRelaBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFeatureButtonRelaEN.featureId) == false &&
    pobjFeatureButtonRelaEN.featureId != '[nuull]' &&
    GetStrLen(pobjFeatureButtonRelaEN.featureId) != 4
  ) {
    throw '(errid:Watl000418)字段[功能Id]作为外键字段,长度应该为4(In 功能按钮关系)!(clsFeatureButtonRelaBL:CheckPropertyNew)';
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
export function FeatureButtonRela_GetJSONStrByObj(
  pobjFeatureButtonRelaEN: clsFeatureButtonRelaEN,
): string {
  pobjFeatureButtonRelaEN.sfUpdFldSetStr = pobjFeatureButtonRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFeatureButtonRelaEN);
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
export function FeatureButtonRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsFeatureButtonRelaEN> {
  let arrFeatureButtonRelaObjLst = new Array<clsFeatureButtonRelaEN>();
  if (strJSON === '') {
    return arrFeatureButtonRelaObjLst;
  }
  try {
    arrFeatureButtonRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFeatureButtonRelaObjLst;
  }
  return arrFeatureButtonRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFeatureButtonRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FeatureButtonRela_GetObjLstByJSONObjLst(
  arrFeatureButtonRelaObjLstS: Array<clsFeatureButtonRelaEN>,
): Array<clsFeatureButtonRelaEN> {
  const arrFeatureButtonRelaObjLst = new Array<clsFeatureButtonRelaEN>();
  for (const objInFor of arrFeatureButtonRelaObjLstS) {
    const obj1 = FeatureButtonRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFeatureButtonRelaObjLst.push(obj1);
  }
  return arrFeatureButtonRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FeatureButtonRela_GetObjByJSONStr(strJSON: string): clsFeatureButtonRelaEN {
  let pobjFeatureButtonRelaEN = new clsFeatureButtonRelaEN();
  if (strJSON === '') {
    return pobjFeatureButtonRelaEN;
  }
  try {
    pobjFeatureButtonRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFeatureButtonRelaEN;
  }
  return pobjFeatureButtonRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FeatureButtonRela_GetCombineCondition(
  objFeatureButtonRelaCond: clsFeatureButtonRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureButtonRelaCond.dicFldComparisonOp,
      clsFeatureButtonRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objFeatureButtonRelaCond.dicFldComparisonOp[clsFeatureButtonRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFeatureButtonRelaEN.con_mId,
      objFeatureButtonRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureButtonRelaCond.dicFldComparisonOp,
      clsFeatureButtonRelaEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objFeatureButtonRelaCond.dicFldComparisonOp[clsFeatureButtonRelaEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFeatureButtonRelaEN.con_ApplicationTypeId,
      objFeatureButtonRelaCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureButtonRelaCond.dicFldComparisonOp,
      clsFeatureButtonRelaEN.con_FeatureId,
    ) == true
  ) {
    const strComparisonOpFeatureId: string =
      objFeatureButtonRelaCond.dicFldComparisonOp[clsFeatureButtonRelaEN.con_FeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureButtonRelaEN.con_FeatureId,
      objFeatureButtonRelaCond.featureId,
      strComparisonOpFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureButtonRelaCond.dicFldComparisonOp,
      clsFeatureButtonRelaEN.con_ButtonId,
    ) == true
  ) {
    const strComparisonOpButtonId: string =
      objFeatureButtonRelaCond.dicFldComparisonOp[clsFeatureButtonRelaEN.con_ButtonId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureButtonRelaEN.con_ButtonId,
      objFeatureButtonRelaCond.buttonId,
      strComparisonOpButtonId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureButtonRelaCond.dicFldComparisonOp,
      clsFeatureButtonRelaEN.con_EventFuncName,
    ) == true
  ) {
    const strComparisonOpEventFuncName: string =
      objFeatureButtonRelaCond.dicFldComparisonOp[clsFeatureButtonRelaEN.con_EventFuncName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureButtonRelaEN.con_EventFuncName,
      objFeatureButtonRelaCond.eventFuncName,
      strComparisonOpEventFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureButtonRelaCond.dicFldComparisonOp,
      clsFeatureButtonRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFeatureButtonRelaCond.dicFldComparisonOp[clsFeatureButtonRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureButtonRelaEN.con_UpdDate,
      objFeatureButtonRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureButtonRelaCond.dicFldComparisonOp,
      clsFeatureButtonRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFeatureButtonRelaCond.dicFldComparisonOp[clsFeatureButtonRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureButtonRelaEN.con_UpdUser,
      objFeatureButtonRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureButtonRelaCond.dicFldComparisonOp,
      clsFeatureButtonRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFeatureButtonRelaCond.dicFldComparisonOp[clsFeatureButtonRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureButtonRelaEN.con_Memo,
      objFeatureButtonRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FeatureButtonRela(功能按钮关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @param strFeatureId: 功能Id(要求唯一的字段)
 * @param strButtonId: 按钮Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FeatureButtonRela_GetUniCondStr(
  objFeatureButtonRelaEN: clsFeatureButtonRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and ApplicationTypeId = '{0}'",
    objFeatureButtonRelaEN.applicationTypeId,
  );
  strWhereCond += Format(" and FeatureId = '{0}'", objFeatureButtonRelaEN.featureId);
  strWhereCond += Format(" and ButtonId = '{0}'", objFeatureButtonRelaEN.buttonId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FeatureButtonRela(功能按钮关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @param strFeatureId: 功能Id(要求唯一的字段)
 * @param strButtonId: 按钮Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FeatureButtonRela_GetUniCondStr4Update(
  objFeatureButtonRelaEN: clsFeatureButtonRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objFeatureButtonRelaEN.mId);
  strWhereCond += Format(
    " and ApplicationTypeId = '{0}'",
    objFeatureButtonRelaEN.applicationTypeId,
  );
  strWhereCond += Format(" and FeatureId = '{0}'", objFeatureButtonRelaEN.featureId);
  strWhereCond += Format(" and ButtonId = '{0}'", objFeatureButtonRelaEN.buttonId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFeatureButtonRelaENS:源对象
 * @param objFeatureButtonRelaENT:目标对象
 */
export function FeatureButtonRela_GetObjFromJsonObj(
  objFeatureButtonRelaENS: clsFeatureButtonRelaEN,
): clsFeatureButtonRelaEN {
  const objFeatureButtonRelaENT: clsFeatureButtonRelaEN = new clsFeatureButtonRelaEN();
  ObjectAssign(objFeatureButtonRelaENT, objFeatureButtonRelaENS);
  return objFeatureButtonRelaENT;
}
