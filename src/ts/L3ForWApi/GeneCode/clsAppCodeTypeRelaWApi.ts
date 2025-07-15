/**
 * 类名:clsAppCodeTypeRelaWApi
 * 表名:AppCodeTypeRela(00050418)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:43
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 应用程序代码类型关系(AppCodeTypeRela)
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
import { appCodeTypeRelaCache, isFuncMapCache } from '@/views/GeneCode/AppCodeTypeRelaVueShare';
import { clsAppCodeTypeRelaENEx } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaENEx';
import { clsAppCodeTypeRelaEN } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaEN';
import { Format, GetStrLen, tzDataType, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { ApplicationType_func } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { vCodeType_Sim_func } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
import { ProgLangType_func } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const appCodeTypeRela_Controller = 'AppCodeTypeRelaApi';
export const appCodeTypeRela_ConstructorName = 'appCodeTypeRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function AppCodeTypeRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsAppCodeTypeRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsAppCodeTypeRelaWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
      const objAppCodeTypeRela = AppCodeTypeRela_GetObjFromJsonObj(returnObj);
      return objAppCodeTypeRela;
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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsAppCodeTypeRelaWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsAppCodeTypeRelaEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objAppCodeTypeRelaCache: clsAppCodeTypeRelaEN = JSON.parse(strTempObj);
    return objAppCodeTypeRelaCache;
  }
  try {
    const objAppCodeTypeRela = await AppCodeTypeRela_GetObjBymIdAsync(lngmId);
    if (objAppCodeTypeRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objAppCodeTypeRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objAppCodeTypeRela;
    }
    return objAppCodeTypeRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsAppCodeTypeRelaWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrAppCodeTypeRelaObjLstCache = await AppCodeTypeRela_GetObjLstCache();
  try {
    const arrAppCodeTypeRelaSel = arrAppCodeTypeRelaObjLstCache.filter((x) => x.mId == lngmId);
    let objAppCodeTypeRela: clsAppCodeTypeRelaEN;
    if (arrAppCodeTypeRelaSel.length > 0) {
      objAppCodeTypeRela = arrAppCodeTypeRelaSel[0];
      return objAppCodeTypeRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objAppCodeTypeRelaConst = await AppCodeTypeRela_GetObjBymIdAsync(lngmId);
        if (objAppCodeTypeRelaConst != null) {
          AppCodeTypeRela_ReFreshThisCache();
          return objAppCodeTypeRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      appCodeTypeRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objAppCodeTypeRela:所给的对象
 * @returns 对象
 */
export async function AppCodeTypeRela_UpdateObjInLstCache(
  objAppCodeTypeRela: clsAppCodeTypeRelaEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrAppCodeTypeRelaObjLstCache = await AppCodeTypeRela_GetObjLstCache();
    const obj = arrAppCodeTypeRelaObjLstCache.find(
      (x) =>
        x.applicationTypeId == objAppCodeTypeRela.applicationTypeId &&
        x.codeTypeId == objAppCodeTypeRela.codeTypeId,
    );
    if (obj != null) {
      objAppCodeTypeRela.mId = obj.mId;
      ObjectAssign(obj, objAppCodeTypeRela);
    } else {
      arrAppCodeTypeRelaObjLstCache.push(objAppCodeTypeRela);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      appCodeTypeRela_ConstructorName,
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
export function AppCodeTypeRela_SortFunDefa(
  a: clsAppCodeTypeRelaEN,
  b: clsAppCodeTypeRelaEN,
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
export function AppCodeTypeRela_SortFunDefa2Fld(
  a: clsAppCodeTypeRelaEN,
  b: clsAppCodeTypeRelaEN,
): number {
  if (a.applicationTypeId == b.applicationTypeId) return a.codeTypeId.localeCompare(b.codeTypeId);
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
export function AppCodeTypeRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsAppCodeTypeRelaEN.con_mId:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          return a.mId - b.mId;
        };
      case clsAppCodeTypeRelaEN.con_ApplicationTypeId:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsAppCodeTypeRelaEN.con_CodeTypeId:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsAppCodeTypeRelaEN.con_ViewTypeCode:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          return a.viewTypeCode - b.viewTypeCode;
        };
      case clsAppCodeTypeRelaEN.con_TabMainTypeId:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          if (a.tabMainTypeId == null) return -1;
          if (b.tabMainTypeId == null) return 1;
          return a.tabMainTypeId.localeCompare(b.tabMainTypeId);
        };
      case clsAppCodeTypeRelaEN.con_IsVisible:
        return (a: clsAppCodeTypeRelaEN) => {
          if (a.isVisible == true) return 1;
          else return -1;
        };
      case clsAppCodeTypeRelaEN.con_IsInGroupGeneCode:
        return (a: clsAppCodeTypeRelaEN) => {
          if (a.isInGroupGeneCode == true) return 1;
          else return -1;
        };
      case clsAppCodeTypeRelaEN.con_OrderNum:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsAppCodeTypeRelaEN.con_UpdDate:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsAppCodeTypeRelaEN.con_UpdUser:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsAppCodeTypeRelaEN.con_Memo:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[AppCodeTypeRela]中不存在!(in ${appCodeTypeRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsAppCodeTypeRelaEN.con_mId:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          return b.mId - a.mId;
        };
      case clsAppCodeTypeRelaEN.con_ApplicationTypeId:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsAppCodeTypeRelaEN.con_CodeTypeId:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsAppCodeTypeRelaEN.con_ViewTypeCode:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          return b.viewTypeCode - a.viewTypeCode;
        };
      case clsAppCodeTypeRelaEN.con_TabMainTypeId:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          if (b.tabMainTypeId == null) return -1;
          if (a.tabMainTypeId == null) return 1;
          return b.tabMainTypeId.localeCompare(a.tabMainTypeId);
        };
      case clsAppCodeTypeRelaEN.con_IsVisible:
        return (b: clsAppCodeTypeRelaEN) => {
          if (b.isVisible == true) return 1;
          else return -1;
        };
      case clsAppCodeTypeRelaEN.con_IsInGroupGeneCode:
        return (b: clsAppCodeTypeRelaEN) => {
          if (b.isInGroupGeneCode == true) return 1;
          else return -1;
        };
      case clsAppCodeTypeRelaEN.con_OrderNum:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsAppCodeTypeRelaEN.con_UpdDate:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsAppCodeTypeRelaEN.con_UpdUser:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsAppCodeTypeRelaEN.con_Memo:
        return (a: clsAppCodeTypeRelaEN, b: clsAppCodeTypeRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[AppCodeTypeRela]中不存在!(in ${appCodeTypeRela_ConstructorName}.${strThisFuncName})`;
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
export async function AppCodeTypeRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsAppCodeTypeRelaEN.con_mId:
      return (obj: clsAppCodeTypeRelaEN) => {
        return obj.mId === value;
      };
    case clsAppCodeTypeRelaEN.con_ApplicationTypeId:
      return (obj: clsAppCodeTypeRelaEN) => {
        return obj.applicationTypeId === value;
      };
    case clsAppCodeTypeRelaEN.con_CodeTypeId:
      return (obj: clsAppCodeTypeRelaEN) => {
        return obj.codeTypeId === value;
      };
    case clsAppCodeTypeRelaEN.con_ViewTypeCode:
      return (obj: clsAppCodeTypeRelaEN) => {
        return obj.viewTypeCode === value;
      };
    case clsAppCodeTypeRelaEN.con_TabMainTypeId:
      return (obj: clsAppCodeTypeRelaEN) => {
        return obj.tabMainTypeId === value;
      };
    case clsAppCodeTypeRelaEN.con_IsVisible:
      return (obj: clsAppCodeTypeRelaEN) => {
        return obj.isVisible === value;
      };
    case clsAppCodeTypeRelaEN.con_IsInGroupGeneCode:
      return (obj: clsAppCodeTypeRelaEN) => {
        return obj.isInGroupGeneCode === value;
      };
    case clsAppCodeTypeRelaEN.con_OrderNum:
      return (obj: clsAppCodeTypeRelaEN) => {
        return obj.orderNum === value;
      };
    case clsAppCodeTypeRelaEN.con_UpdDate:
      return (obj: clsAppCodeTypeRelaEN) => {
        return obj.updDate === value;
      };
    case clsAppCodeTypeRelaEN.con_UpdUser:
      return (obj: clsAppCodeTypeRelaEN) => {
        return obj.updUser === value;
      };
    case clsAppCodeTypeRelaEN.con_Memo:
      return (obj: clsAppCodeTypeRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[AppCodeTypeRela]中不存在!(in ${appCodeTypeRela_ConstructorName}.${strThisFuncName})`;
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
export async function AppCodeTypeRela_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsAppCodeTypeRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsAppCodeTypeRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsAppCodeTypeRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objAppCodeTypeRela = await AppCodeTypeRela_GetObjBymIdCache(lngmId);
  if (objAppCodeTypeRela == null) return '';
  if (objAppCodeTypeRela.GetFldValue(strOutFldName) == null) return '';
  return objAppCodeTypeRela.GetFldValue(strOutFldName).toString();
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
export async function AppCodeTypeRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsAppCodeTypeRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrAppCodeTypeRela = await AppCodeTypeRela_GetObjLstCache();
  if (arrAppCodeTypeRela == null) return [];
  let arrAppCodeTypeRelaSel = arrAppCodeTypeRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrAppCodeTypeRelaSel.length == 0) return [];
  return arrAppCodeTypeRelaSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function AppCodeTypeRela_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsAppCodeTypeRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
      const objAppCodeTypeRela = AppCodeTypeRela_GetObjFromJsonObj(returnObj);
      return objAppCodeTypeRela;
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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsAppCodeTypeRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsAppCodeTypeRelaEN.WhereFormat) == false) {
    strWhereCond = clsAppCodeTypeRelaEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsAppCodeTypeRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsAppCodeTypeRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrAppCodeTypeRelaExObjLstCache: Array<clsAppCodeTypeRelaEN> = CacheHelper.Get(strKey);
    const arrAppCodeTypeRelaObjLstT = AppCodeTypeRela_GetObjLstByJSONObjLst(
      arrAppCodeTypeRelaExObjLstCache,
    );
    return arrAppCodeTypeRelaObjLstT;
  }
  try {
    const arrAppCodeTypeRelaExObjLst = await AppCodeTypeRela_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrAppCodeTypeRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrAppCodeTypeRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrAppCodeTypeRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsAppCodeTypeRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsAppCodeTypeRelaEN.WhereFormat) == false) {
    strWhereCond = clsAppCodeTypeRelaEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsAppCodeTypeRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsAppCodeTypeRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrAppCodeTypeRelaExObjLstCache: Array<clsAppCodeTypeRelaEN> = JSON.parse(strTempObjLst);
    const arrAppCodeTypeRelaObjLstT = AppCodeTypeRela_GetObjLstByJSONObjLst(
      arrAppCodeTypeRelaExObjLstCache,
    );
    return arrAppCodeTypeRelaObjLstT;
  }
  try {
    const arrAppCodeTypeRelaExObjLst = await AppCodeTypeRela_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrAppCodeTypeRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrAppCodeTypeRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrAppCodeTypeRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsAppCodeTypeRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrAppCodeTypeRelaObjLstCache: Array<clsAppCodeTypeRelaEN> = JSON.parse(strTempObjLst);
    return arrAppCodeTypeRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function AppCodeTypeRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsAppCodeTypeRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
          appCodeTypeRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AppCodeTypeRela_GetObjLstByJSONObjLst(returnObjLst);
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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsAppCodeTypeRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsAppCodeTypeRelaEN.WhereFormat) == false) {
    strWhereCond = clsAppCodeTypeRelaEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsAppCodeTypeRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsAppCodeTypeRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrAppCodeTypeRelaExObjLstCache: Array<clsAppCodeTypeRelaEN> = JSON.parse(strTempObjLst);
    const arrAppCodeTypeRelaObjLstT = AppCodeTypeRela_GetObjLstByJSONObjLst(
      arrAppCodeTypeRelaExObjLstCache,
    );
    return arrAppCodeTypeRelaObjLstT;
  }
  try {
    const arrAppCodeTypeRelaExObjLst = await AppCodeTypeRela_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrAppCodeTypeRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrAppCodeTypeRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrAppCodeTypeRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsAppCodeTypeRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrAppCodeTypeRelaObjLstCache: Array<clsAppCodeTypeRelaEN> = JSON.parse(strTempObjLst);
    return arrAppCodeTypeRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function AppCodeTypeRela_GetObjLstCache(): Promise<Array<clsAppCodeTypeRelaEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrAppCodeTypeRelaObjLstCache;
  switch (clsAppCodeTypeRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrAppCodeTypeRelaObjLstCache = await AppCodeTypeRela_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrAppCodeTypeRelaObjLstCache = await AppCodeTypeRela_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrAppCodeTypeRelaObjLstCache = await AppCodeTypeRela_GetObjLstClientCache();
      break;
    default:
      arrAppCodeTypeRelaObjLstCache = await AppCodeTypeRela_GetObjLstClientCache();
      break;
  }
  return arrAppCodeTypeRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function AppCodeTypeRela_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrAppCodeTypeRelaObjLstCache;
  switch (clsAppCodeTypeRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrAppCodeTypeRelaObjLstCache = await AppCodeTypeRela_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrAppCodeTypeRelaObjLstCache = await AppCodeTypeRela_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrAppCodeTypeRelaObjLstCache = null;
      break;
    default:
      arrAppCodeTypeRelaObjLstCache = null;
      break;
  }
  return arrAppCodeTypeRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function AppCodeTypeRela_GetSubObjLstCache(
  objAppCodeTypeRelaCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrAppCodeTypeRelaObjLstCache = await AppCodeTypeRela_GetObjLstCache();
  let arrAppCodeTypeRelaSel = arrAppCodeTypeRelaObjLstCache;
  if (objAppCodeTypeRelaCond.GetConditions().length == 0) return arrAppCodeTypeRelaSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objAppCodeTypeRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrAppCodeTypeRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objAppCodeTypeRelaCond),
      appCodeTypeRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsAppCodeTypeRelaEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function AppCodeTypeRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsAppCodeTypeRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
          appCodeTypeRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AppCodeTypeRela_GetObjLstByJSONObjLst(returnObjLst);
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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrAppCodeTypeRelaObjLstCache = await AppCodeTypeRela_GetObjLstCache();
    const arrAppCodeTypeRelaSel = arrAppCodeTypeRelaObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrAppCodeTypeRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsAppCodeTypeRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
          appCodeTypeRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AppCodeTypeRela_GetObjLstByJSONObjLst(returnObjLst);
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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsAppCodeTypeRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
          appCodeTypeRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AppCodeTypeRela_GetObjLstByJSONObjLst(returnObjLst);
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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsAppCodeTypeRelaEN>();
  const arrAppCodeTypeRelaObjLstCache = await AppCodeTypeRela_GetObjLstCache();
  if (arrAppCodeTypeRelaObjLstCache.length == 0) return arrAppCodeTypeRelaObjLstCache;
  let arrAppCodeTypeRelaSel = arrAppCodeTypeRelaObjLstCache;
  const objAppCodeTypeRelaCond = objPagerPara.conditionCollection;
  if (objAppCodeTypeRelaCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsAppCodeTypeRelaEN>();
  }
  //console.log("clsAppCodeTypeRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objAppCodeTypeRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrAppCodeTypeRelaSel.length == 0) return arrAppCodeTypeRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.sort(
        AppCodeTypeRela_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.sort(objPagerPara.sortFun);
    }
    arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.slice(intStart, intEnd);
    return arrAppCodeTypeRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      appCodeTypeRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsAppCodeTypeRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function AppCodeTypeRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsAppCodeTypeRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsAppCodeTypeRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
          appCodeTypeRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = AppCodeTypeRela_GetObjLstByJSONObjLst(returnObjLst);
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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);
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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_DelAppCodeTypeRelasAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelAppCodeTypeRelasAsync';
  const strAction = 'DelAppCodeTypeRelas';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsAppCodeTypeRelaENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrAppCodeTypeRelaObjLst = await AppCodeTypeRela_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsAppCodeTypeRelaENEx>();
  const arrAppCodeTypeRelaExObjLst = arrAppCodeTypeRelaObjLst.map((obj) => {
    const cacheKey = `${obj.mId}`;
    if (appCodeTypeRelaCache[cacheKey]) {
      const oldObj = appCodeTypeRelaCache[cacheKey];
      return oldObj;
    } else {
      const newObj = AppCodeTypeRela_CopyToEx(obj);
      arrNewObj.push(newObj);
      appCodeTypeRelaCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await AppCodeTypeRela_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsAppCodeTypeRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrAppCodeTypeRelaExObjLst) {
      await AppCodeTypeRela_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}`;
      appCodeTypeRelaCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrAppCodeTypeRelaExObjLst.length == 0) return arrAppCodeTypeRelaExObjLst;
  let arrAppCodeTypeRelaSel: Array<clsAppCodeTypeRelaENEx> = arrAppCodeTypeRelaExObjLst;
  const objAppCodeTypeRelaCond = objPagerPara.conditionCollection;
  if (objAppCodeTypeRelaCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrAppCodeTypeRelaExObjLst;
  }
  try {
    for (const objCondition of objAppCodeTypeRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrAppCodeTypeRelaSel.length == 0) return arrAppCodeTypeRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.sort(
        AppCodeTypeRela_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.sort(objPagerPara.sortFun);
    }
    arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.slice(intStart, intEnd);
    return arrAppCodeTypeRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      appCodeTypeRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsAppCodeTypeRelaENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objAppCodeTypeRelaENS:源对象
 * @returns 目标对象=>clsAppCodeTypeRelaEN:objAppCodeTypeRelaENT
 **/
export function AppCodeTypeRela_CopyToEx(
  objAppCodeTypeRelaENS: clsAppCodeTypeRelaEN,
): clsAppCodeTypeRelaENEx {
  const strThisFuncName = AppCodeTypeRela_CopyToEx.name;
  const objAppCodeTypeRelaENT = new clsAppCodeTypeRelaENEx();
  try {
    ObjectAssign(objAppCodeTypeRelaENT, objAppCodeTypeRelaENS);
    return objAppCodeTypeRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      appCodeTypeRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objAppCodeTypeRelaENT;
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
export function AppCodeTypeRela_FuncMapByFldName(
  strFldName: string,
  objAppCodeTypeRelaEx: clsAppCodeTypeRelaENEx,
) {
  const strThisFuncName = AppCodeTypeRela_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsAppCodeTypeRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsAppCodeTypeRelaENEx.con_ApplicationTypeName:
      return AppCodeTypeRela_FuncMapApplicationTypeName(objAppCodeTypeRelaEx);
    case clsAppCodeTypeRelaENEx.con_CodeTypeSimName:
      return AppCodeTypeRela_FuncMapCodeTypeSimName(objAppCodeTypeRelaEx);
    case clsAppCodeTypeRelaENEx.con_CodeTypeName:
      return AppCodeTypeRela_FuncMapCodeTypeName(objAppCodeTypeRelaEx);
    case clsAppCodeTypeRelaENEx.con_GroupName:
      return AppCodeTypeRela_FuncMapGroupName(objAppCodeTypeRelaEx);
    case clsAppCodeTypeRelaENEx.con_ProgLangTypeSimName:
      return AppCodeTypeRela_FuncMapProgLangTypeSimName(objAppCodeTypeRelaEx);
    case clsAppCodeTypeRelaENEx.con_ProgLangTypeName:
      return AppCodeTypeRela_FuncMapProgLangTypeName(objAppCodeTypeRelaEx);
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
export function AppCodeTypeRela_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsAppCodeTypeRelaENEx.con_ApplicationTypeName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return a.applicationTypeName.localeCompare(b.applicationTypeName);
        };
      case clsAppCodeTypeRelaENEx.con_CodeTypeSimName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return a.codeTypeSimName.localeCompare(b.codeTypeSimName);
        };
      case clsAppCodeTypeRelaENEx.con_CodeTypeName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return a.codeTypeName.localeCompare(b.codeTypeName);
        };
      case clsAppCodeTypeRelaENEx.con_DependsOn:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          if (a.dependsOn === null && b.dependsOn === null) return 0;
          if (a.dependsOn === null) return -1;
          if (b.dependsOn === null) return 1;
          return a.dependsOn.localeCompare(b.dependsOn);
        };
      case clsAppCodeTypeRelaENEx.con_GroupName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return a.groupName.localeCompare(b.groupName);
        };
      case clsAppCodeTypeRelaENEx.con_ProgLangTypeSimName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          if (a.progLangTypeSimName === null && b.progLangTypeSimName === null) return 0;
          if (a.progLangTypeSimName === null) return -1;
          if (b.progLangTypeSimName === null) return 1;
          return a.progLangTypeSimName.localeCompare(b.progLangTypeSimName);
        };
      case clsAppCodeTypeRelaENEx.con_ProgLangTypeName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      default:
        return AppCodeTypeRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsAppCodeTypeRelaENEx.con_ApplicationTypeName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return b.applicationTypeName.localeCompare(a.applicationTypeName);
        };
      case clsAppCodeTypeRelaENEx.con_CodeTypeSimName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return b.codeTypeSimName.localeCompare(a.codeTypeSimName);
        };
      case clsAppCodeTypeRelaENEx.con_CodeTypeName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return b.codeTypeName.localeCompare(a.codeTypeName);
        };
      case clsAppCodeTypeRelaENEx.con_DependsOn:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          if (a.dependsOn === null && b.dependsOn === null) return 0;
          if (a.dependsOn === null) return 1;
          if (b.dependsOn === null) return -1;
          return b.dependsOn.localeCompare(a.dependsOn);
        };
      case clsAppCodeTypeRelaENEx.con_GroupName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return b.groupName.localeCompare(a.groupName);
        };
      case clsAppCodeTypeRelaENEx.con_ProgLangTypeSimName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          if (a.progLangTypeSimName === null && b.progLangTypeSimName === null) return 0;
          if (a.progLangTypeSimName === null) return 1;
          if (b.progLangTypeSimName === null) return -1;
          return b.progLangTypeSimName.localeCompare(a.progLangTypeSimName);
        };
      case clsAppCodeTypeRelaENEx.con_ProgLangTypeName:
        return (a: clsAppCodeTypeRelaENEx, b: clsAppCodeTypeRelaENEx) => {
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      default:
        return AppCodeTypeRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objAppCodeTypeRelaS:源对象
 **/
export async function AppCodeTypeRela_FuncMapApplicationTypeName(
  objAppCodeTypeRela: clsAppCodeTypeRelaENEx,
) {
  const strThisFuncName = AppCodeTypeRela_FuncMapApplicationTypeName.name;
  try {
    if (IsNullOrEmpty(objAppCodeTypeRela.applicationTypeName) == true) {
      const ApplicationTypeApplicationTypeId = objAppCodeTypeRela.applicationTypeId.toString();
      const ApplicationTypeApplicationTypeName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeName,
        ApplicationTypeApplicationTypeId,
      );
      objAppCodeTypeRela.applicationTypeName = ApplicationTypeApplicationTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001307)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      appCodeTypeRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objAppCodeTypeRelaS:源对象
 **/
export async function AppCodeTypeRela_FuncMapCodeTypeSimName(
  objAppCodeTypeRela: clsAppCodeTypeRelaENEx,
) {
  const strThisFuncName = AppCodeTypeRela_FuncMapCodeTypeSimName.name;
  try {
    if (IsNullOrEmpty(objAppCodeTypeRela.codeTypeSimName) == true) {
      const vCodeTypeSimCodeTypeId = objAppCodeTypeRela.codeTypeId;
      const vCodeTypeSimCodeTypeSimName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_CodeTypeSimName,
        vCodeTypeSimCodeTypeId,
      );
      objAppCodeTypeRela.codeTypeSimName = vCodeTypeSimCodeTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001308)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      appCodeTypeRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objAppCodeTypeRelaS:源对象
 **/
export async function AppCodeTypeRela_FuncMapCodeTypeName(
  objAppCodeTypeRela: clsAppCodeTypeRelaENEx,
) {
  const strThisFuncName = AppCodeTypeRela_FuncMapCodeTypeName.name;
  try {
    if (IsNullOrEmpty(objAppCodeTypeRela.codeTypeName) == true) {
      const vCodeTypeSimCodeTypeId = objAppCodeTypeRela.codeTypeId;
      const vCodeTypeSimCodeTypeName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_CodeTypeName,
        vCodeTypeSimCodeTypeId,
      );
      objAppCodeTypeRela.codeTypeName = vCodeTypeSimCodeTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001309)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      appCodeTypeRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objAppCodeTypeRelaS:源对象
 **/
export async function AppCodeTypeRela_FuncMapGroupName(objAppCodeTypeRela: clsAppCodeTypeRelaENEx) {
  const strThisFuncName = AppCodeTypeRela_FuncMapGroupName.name;
  try {
    if (IsNullOrEmpty(objAppCodeTypeRela.groupName) == true) {
      const vCodeTypeSimCodeTypeId = objAppCodeTypeRela.codeTypeId;
      const vCodeTypeSimGroupName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_GroupName,
        vCodeTypeSimCodeTypeId,
      );
      objAppCodeTypeRela.groupName = vCodeTypeSimGroupName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001310)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      appCodeTypeRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objAppCodeTypeRelaS:源对象
 **/
export async function AppCodeTypeRela_FuncMapProgLangTypeSimName(
  objAppCodeTypeRela: clsAppCodeTypeRelaENEx,
) {
  const strThisFuncName = AppCodeTypeRela_FuncMapProgLangTypeSimName.name;
  try {
    if (IsNullOrEmpty(objAppCodeTypeRela.progLangTypeSimName) == true) {
      const vCodeTypeSimCodeTypeId = objAppCodeTypeRela.codeTypeId;
      const vCodeTypeSimProgLangTypeId = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_ProgLangTypeId,
        vCodeTypeSimCodeTypeId,
      );
      const ProgLangTypeProgLangTypeId = vCodeTypeSimProgLangTypeId;
      const ProgLangTypeProgLangTypeSimName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeSimName,
        ProgLangTypeProgLangTypeId,
      );
      objAppCodeTypeRela.progLangTypeSimName = ProgLangTypeProgLangTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001311)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      appCodeTypeRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objAppCodeTypeRelaS:源对象
 **/
export async function AppCodeTypeRela_FuncMapProgLangTypeName(
  objAppCodeTypeRela: clsAppCodeTypeRelaENEx,
) {
  const strThisFuncName = AppCodeTypeRela_FuncMapProgLangTypeName.name;
  try {
    if (IsNullOrEmpty(objAppCodeTypeRela.progLangTypeName) == true) {
      const vCodeTypeSimCodeTypeId = objAppCodeTypeRela.codeTypeId;
      const vCodeTypeSimProgLangTypeId = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_ProgLangTypeId,
        vCodeTypeSimCodeTypeId,
      );
      const ProgLangTypeProgLangTypeId = vCodeTypeSimProgLangTypeId;
      const ProgLangTypeProgLangTypeName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeName,
        ProgLangTypeProgLangTypeId,
      );
      objAppCodeTypeRela.progLangTypeName = ProgLangTypeProgLangTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001312)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_DelAppCodeTypeRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelAppCodeTypeRelasByCondAsync';
  const strAction = 'DelAppCodeTypeRelasByCond';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
 * @param objAppCodeTypeRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function AppCodeTypeRela_AddNewRecordAsync(
  objAppCodeTypeRelaEN: clsAppCodeTypeRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objAppCodeTypeRelaEN);
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAppCodeTypeRelaEN, config);
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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
 * @param objAppCodeTypeRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function AppCodeTypeRela_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
 * @param objAppCodeTypeRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function AppCodeTypeRela_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objAppCodeTypeRelaEN);
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
 * @param objAppCodeTypeRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function AppCodeTypeRela_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objAppCodeTypeRelaEN);
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_AddNewObjSave(
  objAppCodeTypeRelaEN: clsAppCodeTypeRelaEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    AppCodeTypeRela_CheckPropertyNew(objAppCodeTypeRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${appCodeTypeRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await AppCodeTypeRela_CheckUniCond4Add(objAppCodeTypeRelaEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await AppCodeTypeRela_AddNewRecordAsync(objAppCodeTypeRelaEN);
    if (returnBool == true) {
      AppCodeTypeRela_ReFreshCache();
    } else {
      const strInfo = `添加[应用程序代码类型关系(AppCodeTypeRela)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objAppCodeTypeRelaEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${appCodeTypeRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function AppCodeTypeRela_CheckUniCond4Add(
  objAppCodeTypeRelaEN: clsAppCodeTypeRelaEN,
): Promise<boolean> {
  const strUniquenessCondition = AppCodeTypeRela_GetUniCondStr(objAppCodeTypeRelaEN);
  const bolIsExistCondition = await AppCodeTypeRela_IsExistRecordAsync(strUniquenessCondition);
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
export async function AppCodeTypeRela_CheckUniCond4Update(
  objAppCodeTypeRelaEN: clsAppCodeTypeRelaEN,
): Promise<boolean> {
  const strUniquenessCondition = AppCodeTypeRela_GetUniCondStr4Update(objAppCodeTypeRelaEN);
  const bolIsExistCondition = await AppCodeTypeRela_IsExistRecordAsync(strUniquenessCondition);
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
export async function AppCodeTypeRela_UpdateObjSave(
  objAppCodeTypeRelaEN: clsAppCodeTypeRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objAppCodeTypeRelaEN.sfUpdFldSetStr = objAppCodeTypeRelaEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objAppCodeTypeRelaEN.mId == 0 || objAppCodeTypeRelaEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    AppCodeTypeRela_CheckProperty4Update(objAppCodeTypeRelaEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${appCodeTypeRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await AppCodeTypeRela_CheckUniCond4Update(objAppCodeTypeRelaEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await AppCodeTypeRela_UpdateRecordAsync(objAppCodeTypeRelaEN);
    if (returnBool == true) {
      AppCodeTypeRela_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${appCodeTypeRela_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objAppCodeTypeRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function AppCodeTypeRela_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objAppCodeTypeRelaEN);
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
 * @param objAppCodeTypeRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function AppCodeTypeRela_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objAppCodeTypeRelaEN);
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
 * @param objAppCodeTypeRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function AppCodeTypeRela_AddNewRecordWithReturnKeyAsync(
  objAppCodeTypeRelaEN: clsAppCodeTypeRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAppCodeTypeRelaEN, config);
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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
 * @param objAppCodeTypeRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function AppCodeTypeRela_UpdateRecordAsync(
  objAppCodeTypeRelaEN: clsAppCodeTypeRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objAppCodeTypeRelaEN.sfUpdFldSetStr === undefined ||
    objAppCodeTypeRelaEN.sfUpdFldSetStr === null ||
    objAppCodeTypeRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objAppCodeTypeRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAppCodeTypeRelaEN, config);
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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
 * @param objAppCodeTypeRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function AppCodeTypeRela_EditRecordExAsync(
  objAppCodeTypeRelaEN: clsAppCodeTypeRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objAppCodeTypeRelaEN.sfUpdFldSetStr === undefined ||
    objAppCodeTypeRelaEN.sfUpdFldSetStr === null ||
    objAppCodeTypeRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objAppCodeTypeRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAppCodeTypeRelaEN, config);
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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
 * @param objAppCodeTypeRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function AppCodeTypeRela_UpdateWithConditionAsync(
  objAppCodeTypeRelaEN: clsAppCodeTypeRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objAppCodeTypeRelaEN.sfUpdFldSetStr === undefined ||
    objAppCodeTypeRelaEN.sfUpdFldSetStr === null ||
    objAppCodeTypeRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objAppCodeTypeRelaEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);
  objAppCodeTypeRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objAppCodeTypeRelaEN, config);
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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_IsExistRecordCache(
  objAppCodeTypeRelaCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrAppCodeTypeRelaObjLstCache = await AppCodeTypeRela_GetObjLstCache();
  if (arrAppCodeTypeRelaObjLstCache == null) return false;
  let arrAppCodeTypeRelaSel = arrAppCodeTypeRelaObjLstCache;
  if (objAppCodeTypeRelaCond.GetConditions().length == 0)
    return arrAppCodeTypeRelaSel.length > 0 ? true : false;
  try {
    for (const objCondition of objAppCodeTypeRelaCond.GetConditions()) {
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
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrAppCodeTypeRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objAppCodeTypeRelaCond),
      appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrAppCodeTypeRelaObjLstCache = await AppCodeTypeRela_GetObjLstCache();
  if (arrAppCodeTypeRelaObjLstCache == null) return false;
  try {
    const arrAppCodeTypeRelaSel = arrAppCodeTypeRelaObjLstCache.filter((x) => x.mId == lngmId);
    if (arrAppCodeTypeRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
 * @param objAppCodeTypeRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function AppCodeTypeRela_GetRecCountByCondCache(
  objAppCodeTypeRelaCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrAppCodeTypeRelaObjLstCache = await AppCodeTypeRela_GetObjLstCache();
  if (arrAppCodeTypeRelaObjLstCache == null) return 0;
  let arrAppCodeTypeRelaSel = arrAppCodeTypeRelaObjLstCache;
  if (objAppCodeTypeRelaCond.GetConditions().length == 0) return arrAppCodeTypeRelaSel.length;
  try {
    for (const objCondition of objAppCodeTypeRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrAppCodeTypeRelaSel = arrAppCodeTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrAppCodeTypeRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objAppCodeTypeRelaCond),
      appCodeTypeRela_ConstructorName,
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
export async function AppCodeTypeRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(appCodeTypeRela_Controller, strAction);

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
        appCodeTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        appCodeTypeRela_ConstructorName,
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
export function AppCodeTypeRela_GetWebApiUrl(strController: string, strAction: string): string {
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
export function AppCodeTypeRela_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsAppCodeTypeRelaEN._CurrTabName;
  switch (clsAppCodeTypeRelaEN.CacheModeId) {
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
  clsAppCodeTypeRelaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function AppCodeTypeRela_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsAppCodeTypeRelaEN._CurrTabName;
    switch (clsAppCodeTypeRelaEN.CacheModeId) {
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
    clsAppCodeTypeRelaEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function AppCodeTypeRela_GetLastRefreshTime(): string {
  if (clsAppCodeTypeRelaEN._RefreshTimeLst.length == 0) return '';
  return clsAppCodeTypeRelaEN._RefreshTimeLst[clsAppCodeTypeRelaEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function AppCodeTypeRela_CheckPropertyNew(pobjAppCodeTypeRelaEN: clsAppCodeTypeRelaEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    null === pobjAppCodeTypeRelaEN.applicationTypeId ||
    (pobjAppCodeTypeRelaEN.applicationTypeId != null &&
      pobjAppCodeTypeRelaEN.applicationTypeId.toString() === '') ||
    pobjAppCodeTypeRelaEN.applicationTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[应用程序类型ID]不能为空(In 应用程序代码类型关系)!(clsAppCodeTypeRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.codeTypeId) === true ||
    pobjAppCodeTypeRelaEN.codeTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[代码类型Id]不能为空(In 应用程序代码类型关系)!(clsAppCodeTypeRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjAppCodeTypeRelaEN.orderNum ||
    (pobjAppCodeTypeRelaEN.orderNum != null && pobjAppCodeTypeRelaEN.orderNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[序号]不能为空(In 应用程序代码类型关系)!(clsAppCodeTypeRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.codeTypeId) == false &&
    GetStrLen(pobjAppCodeTypeRelaEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 应用程序代码类型关系(AppCodeTypeRela))!值:${pobjAppCodeTypeRelaEN.codeTypeId}(clsAppCodeTypeRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.tabMainTypeId) == false &&
    GetStrLen(pobjAppCodeTypeRelaEN.tabMainTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表主类型Id(tabMainTypeId)]的长度不能超过4(In 应用程序代码类型关系(AppCodeTypeRela))!值:${pobjAppCodeTypeRelaEN.tabMainTypeId}(clsAppCodeTypeRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.updDate) == false &&
    GetStrLen(pobjAppCodeTypeRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 应用程序代码类型关系(AppCodeTypeRela))!值:${pobjAppCodeTypeRelaEN.updDate}(clsAppCodeTypeRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.updUser) == false &&
    GetStrLen(pobjAppCodeTypeRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 应用程序代码类型关系(AppCodeTypeRela))!值:${pobjAppCodeTypeRelaEN.updUser}(clsAppCodeTypeRelaBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.memo) == false &&
    GetStrLen(pobjAppCodeTypeRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 应用程序代码类型关系(AppCodeTypeRela))!值:${pobjAppCodeTypeRelaEN.memo}(clsAppCodeTypeRelaBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjAppCodeTypeRelaEN.mId &&
    undefined !== pobjAppCodeTypeRelaEN.mId &&
    tzDataType.isNumber(pobjAppCodeTypeRelaEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjAppCodeTypeRelaEN.mId}], 非法,应该为数值型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjAppCodeTypeRelaEN.applicationTypeId &&
    undefined !== pobjAppCodeTypeRelaEN.applicationTypeId &&
    tzDataType.isNumber(pobjAppCodeTypeRelaEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjAppCodeTypeRelaEN.applicationTypeId}], 非法,应该为数值型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.codeTypeId) == false &&
    undefined !== pobjAppCodeTypeRelaEN.codeTypeId &&
    tzDataType.isString(pobjAppCodeTypeRelaEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码类型Id(codeTypeId)]的值:[${pobjAppCodeTypeRelaEN.codeTypeId}], 非法,应该为字符型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjAppCodeTypeRelaEN.viewTypeCode &&
    undefined !== pobjAppCodeTypeRelaEN.viewTypeCode &&
    tzDataType.isNumber(pobjAppCodeTypeRelaEN.viewTypeCode) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面类型码(viewTypeCode)]的值:[${pobjAppCodeTypeRelaEN.viewTypeCode}], 非法,应该为数值型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.tabMainTypeId) == false &&
    undefined !== pobjAppCodeTypeRelaEN.tabMainTypeId &&
    tzDataType.isString(pobjAppCodeTypeRelaEN.tabMainTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表主类型Id(tabMainTypeId)]的值:[${pobjAppCodeTypeRelaEN.tabMainTypeId}], 非法,应该为字符型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjAppCodeTypeRelaEN.isVisible &&
    undefined !== pobjAppCodeTypeRelaEN.isVisible &&
    tzDataType.isBoolean(pobjAppCodeTypeRelaEN.isVisible) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否显示(isVisible)]的值:[${pobjAppCodeTypeRelaEN.isVisible}], 非法,应该为布尔型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjAppCodeTypeRelaEN.isInGroupGeneCode &&
    undefined !== pobjAppCodeTypeRelaEN.isInGroupGeneCode &&
    tzDataType.isBoolean(pobjAppCodeTypeRelaEN.isInGroupGeneCode) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否参与组生成代码(isInGroupGeneCode)]的值:[${pobjAppCodeTypeRelaEN.isInGroupGeneCode}], 非法,应该为布尔型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjAppCodeTypeRelaEN.orderNum &&
    undefined !== pobjAppCodeTypeRelaEN.orderNum &&
    tzDataType.isNumber(pobjAppCodeTypeRelaEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjAppCodeTypeRelaEN.orderNum}], 非法,应该为数值型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.updDate) == false &&
    undefined !== pobjAppCodeTypeRelaEN.updDate &&
    tzDataType.isString(pobjAppCodeTypeRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjAppCodeTypeRelaEN.updDate}], 非法,应该为字符型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.updUser) == false &&
    undefined !== pobjAppCodeTypeRelaEN.updUser &&
    tzDataType.isString(pobjAppCodeTypeRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjAppCodeTypeRelaEN.updUser}], 非法,应该为字符型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.memo) == false &&
    undefined !== pobjAppCodeTypeRelaEN.memo &&
    tzDataType.isString(pobjAppCodeTypeRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjAppCodeTypeRelaEN.memo}], 非法,应该为字符型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function AppCodeTypeRela_CheckProperty4Update(pobjAppCodeTypeRelaEN: clsAppCodeTypeRelaEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.codeTypeId) == false &&
    GetStrLen(pobjAppCodeTypeRelaEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 应用程序代码类型关系(AppCodeTypeRela))!值:${pobjAppCodeTypeRelaEN.codeTypeId}(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.tabMainTypeId) == false &&
    GetStrLen(pobjAppCodeTypeRelaEN.tabMainTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表主类型Id(tabMainTypeId)]的长度不能超过4(In 应用程序代码类型关系(AppCodeTypeRela))!值:${pobjAppCodeTypeRelaEN.tabMainTypeId}(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.updDate) == false &&
    GetStrLen(pobjAppCodeTypeRelaEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 应用程序代码类型关系(AppCodeTypeRela))!值:${pobjAppCodeTypeRelaEN.updDate}(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.updUser) == false &&
    GetStrLen(pobjAppCodeTypeRelaEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 应用程序代码类型关系(AppCodeTypeRela))!值:${pobjAppCodeTypeRelaEN.updUser}(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.memo) == false &&
    GetStrLen(pobjAppCodeTypeRelaEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 应用程序代码类型关系(AppCodeTypeRela))!值:${pobjAppCodeTypeRelaEN.memo}(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjAppCodeTypeRelaEN.mId &&
    undefined !== pobjAppCodeTypeRelaEN.mId &&
    tzDataType.isNumber(pobjAppCodeTypeRelaEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjAppCodeTypeRelaEN.mId}], 非法,应该为数值型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjAppCodeTypeRelaEN.applicationTypeId &&
    undefined !== pobjAppCodeTypeRelaEN.applicationTypeId &&
    tzDataType.isNumber(pobjAppCodeTypeRelaEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjAppCodeTypeRelaEN.applicationTypeId}], 非法,应该为数值型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.codeTypeId) == false &&
    undefined !== pobjAppCodeTypeRelaEN.codeTypeId &&
    tzDataType.isString(pobjAppCodeTypeRelaEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码类型Id(codeTypeId)]的值:[${pobjAppCodeTypeRelaEN.codeTypeId}], 非法,应该为字符型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjAppCodeTypeRelaEN.viewTypeCode &&
    undefined !== pobjAppCodeTypeRelaEN.viewTypeCode &&
    tzDataType.isNumber(pobjAppCodeTypeRelaEN.viewTypeCode) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面类型码(viewTypeCode)]的值:[${pobjAppCodeTypeRelaEN.viewTypeCode}], 非法,应该为数值型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.tabMainTypeId) == false &&
    undefined !== pobjAppCodeTypeRelaEN.tabMainTypeId &&
    tzDataType.isString(pobjAppCodeTypeRelaEN.tabMainTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表主类型Id(tabMainTypeId)]的值:[${pobjAppCodeTypeRelaEN.tabMainTypeId}], 非法,应该为字符型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjAppCodeTypeRelaEN.isVisible &&
    undefined !== pobjAppCodeTypeRelaEN.isVisible &&
    tzDataType.isBoolean(pobjAppCodeTypeRelaEN.isVisible) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否显示(isVisible)]的值:[${pobjAppCodeTypeRelaEN.isVisible}], 非法,应该为布尔型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjAppCodeTypeRelaEN.isInGroupGeneCode &&
    undefined !== pobjAppCodeTypeRelaEN.isInGroupGeneCode &&
    tzDataType.isBoolean(pobjAppCodeTypeRelaEN.isInGroupGeneCode) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否参与组生成代码(isInGroupGeneCode)]的值:[${pobjAppCodeTypeRelaEN.isInGroupGeneCode}], 非法,应该为布尔型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjAppCodeTypeRelaEN.orderNum &&
    undefined !== pobjAppCodeTypeRelaEN.orderNum &&
    tzDataType.isNumber(pobjAppCodeTypeRelaEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjAppCodeTypeRelaEN.orderNum}], 非法,应该为数值型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.updDate) == false &&
    undefined !== pobjAppCodeTypeRelaEN.updDate &&
    tzDataType.isString(pobjAppCodeTypeRelaEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjAppCodeTypeRelaEN.updDate}], 非法,应该为字符型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.updUser) == false &&
    undefined !== pobjAppCodeTypeRelaEN.updUser &&
    tzDataType.isString(pobjAppCodeTypeRelaEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjAppCodeTypeRelaEN.updUser}], 非法,应该为字符型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjAppCodeTypeRelaEN.memo) == false &&
    undefined !== pobjAppCodeTypeRelaEN.memo &&
    tzDataType.isString(pobjAppCodeTypeRelaEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjAppCodeTypeRelaEN.memo}], 非法,应该为字符型(In 应用程序代码类型关系(AppCodeTypeRela))!(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjAppCodeTypeRelaEN.mId ||
    (pobjAppCodeTypeRelaEN.mId != null && pobjAppCodeTypeRelaEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 应用程序代码类型关系)!(clsAppCodeTypeRelaBL:CheckProperty4Update)`,
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
export function AppCodeTypeRela_GetJSONStrByObj(
  pobjAppCodeTypeRelaEN: clsAppCodeTypeRelaEN,
): string {
  pobjAppCodeTypeRelaEN.sfUpdFldSetStr = pobjAppCodeTypeRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjAppCodeTypeRelaEN);
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
export function AppCodeTypeRela_GetObjLstByJSONStr(strJSON: string): Array<clsAppCodeTypeRelaEN> {
  let arrAppCodeTypeRelaObjLst = new Array<clsAppCodeTypeRelaEN>();
  if (strJSON === '') {
    return arrAppCodeTypeRelaObjLst;
  }
  try {
    arrAppCodeTypeRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrAppCodeTypeRelaObjLst;
  }
  return arrAppCodeTypeRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrAppCodeTypeRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function AppCodeTypeRela_GetObjLstByJSONObjLst(
  arrAppCodeTypeRelaObjLstS: Array<clsAppCodeTypeRelaEN>,
): Array<clsAppCodeTypeRelaEN> {
  const arrAppCodeTypeRelaObjLst = new Array<clsAppCodeTypeRelaEN>();
  for (const objInFor of arrAppCodeTypeRelaObjLstS) {
    const obj1 = AppCodeTypeRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrAppCodeTypeRelaObjLst.push(obj1);
  }
  return arrAppCodeTypeRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function AppCodeTypeRela_GetObjByJSONStr(strJSON: string): clsAppCodeTypeRelaEN {
  let pobjAppCodeTypeRelaEN = new clsAppCodeTypeRelaEN();
  if (strJSON === '') {
    return pobjAppCodeTypeRelaEN;
  }
  try {
    pobjAppCodeTypeRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjAppCodeTypeRelaEN;
  }
  return pobjAppCodeTypeRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function AppCodeTypeRela_GetCombineCondition(
  objAppCodeTypeRelaCond: clsAppCodeTypeRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objAppCodeTypeRelaCond.dicFldComparisonOp,
      clsAppCodeTypeRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objAppCodeTypeRelaCond.dicFldComparisonOp[clsAppCodeTypeRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsAppCodeTypeRelaEN.con_mId,
      objAppCodeTypeRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAppCodeTypeRelaCond.dicFldComparisonOp,
      clsAppCodeTypeRelaEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objAppCodeTypeRelaCond.dicFldComparisonOp[clsAppCodeTypeRelaEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsAppCodeTypeRelaEN.con_ApplicationTypeId,
      objAppCodeTypeRelaCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAppCodeTypeRelaCond.dicFldComparisonOp,
      clsAppCodeTypeRelaEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objAppCodeTypeRelaCond.dicFldComparisonOp[clsAppCodeTypeRelaEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAppCodeTypeRelaEN.con_CodeTypeId,
      objAppCodeTypeRelaCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAppCodeTypeRelaCond.dicFldComparisonOp,
      clsAppCodeTypeRelaEN.con_ViewTypeCode,
    ) == true
  ) {
    const strComparisonOpViewTypeCode: string =
      objAppCodeTypeRelaCond.dicFldComparisonOp[clsAppCodeTypeRelaEN.con_ViewTypeCode];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsAppCodeTypeRelaEN.con_ViewTypeCode,
      objAppCodeTypeRelaCond.viewTypeCode,
      strComparisonOpViewTypeCode,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAppCodeTypeRelaCond.dicFldComparisonOp,
      clsAppCodeTypeRelaEN.con_TabMainTypeId,
    ) == true
  ) {
    const strComparisonOpTabMainTypeId: string =
      objAppCodeTypeRelaCond.dicFldComparisonOp[clsAppCodeTypeRelaEN.con_TabMainTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAppCodeTypeRelaEN.con_TabMainTypeId,
      objAppCodeTypeRelaCond.tabMainTypeId,
      strComparisonOpTabMainTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAppCodeTypeRelaCond.dicFldComparisonOp,
      clsAppCodeTypeRelaEN.con_IsVisible,
    ) == true
  ) {
    if (objAppCodeTypeRelaCond.isVisible == true) {
      strWhereCond += Format(" And {0} = '1'", clsAppCodeTypeRelaEN.con_IsVisible);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsAppCodeTypeRelaEN.con_IsVisible);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAppCodeTypeRelaCond.dicFldComparisonOp,
      clsAppCodeTypeRelaEN.con_IsInGroupGeneCode,
    ) == true
  ) {
    if (objAppCodeTypeRelaCond.isInGroupGeneCode == true) {
      strWhereCond += Format(" And {0} = '1'", clsAppCodeTypeRelaEN.con_IsInGroupGeneCode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsAppCodeTypeRelaEN.con_IsInGroupGeneCode);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAppCodeTypeRelaCond.dicFldComparisonOp,
      clsAppCodeTypeRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objAppCodeTypeRelaCond.dicFldComparisonOp[clsAppCodeTypeRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsAppCodeTypeRelaEN.con_OrderNum,
      objAppCodeTypeRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAppCodeTypeRelaCond.dicFldComparisonOp,
      clsAppCodeTypeRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objAppCodeTypeRelaCond.dicFldComparisonOp[clsAppCodeTypeRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAppCodeTypeRelaEN.con_UpdDate,
      objAppCodeTypeRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAppCodeTypeRelaCond.dicFldComparisonOp,
      clsAppCodeTypeRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objAppCodeTypeRelaCond.dicFldComparisonOp[clsAppCodeTypeRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAppCodeTypeRelaEN.con_UpdUser,
      objAppCodeTypeRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objAppCodeTypeRelaCond.dicFldComparisonOp,
      clsAppCodeTypeRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objAppCodeTypeRelaCond.dicFldComparisonOp[clsAppCodeTypeRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsAppCodeTypeRelaEN.con_Memo,
      objAppCodeTypeRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--AppCodeTypeRela(应用程序代码类型关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function AppCodeTypeRela_GetUniCondStr(objAppCodeTypeRelaEN: clsAppCodeTypeRelaEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ApplicationTypeId = '{0}'", objAppCodeTypeRelaEN.applicationTypeId);
  strWhereCond += Format(" and CodeTypeId = '{0}'", objAppCodeTypeRelaEN.codeTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--AppCodeTypeRela(应用程序代码类型关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function AppCodeTypeRela_GetUniCondStr4Update(
  objAppCodeTypeRelaEN: clsAppCodeTypeRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objAppCodeTypeRelaEN.mId);
  strWhereCond += Format(" and ApplicationTypeId = '{0}'", objAppCodeTypeRelaEN.applicationTypeId);
  strWhereCond += Format(" and CodeTypeId = '{0}'", objAppCodeTypeRelaEN.codeTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objAppCodeTypeRelaENS:源对象
 * @param objAppCodeTypeRelaENT:目标对象
 */
export function AppCodeTypeRela_GetObjFromJsonObj(
  objAppCodeTypeRelaENS: clsAppCodeTypeRelaEN,
): clsAppCodeTypeRelaEN {
  const objAppCodeTypeRelaENT: clsAppCodeTypeRelaEN = new clsAppCodeTypeRelaEN();
  ObjectAssign(objAppCodeTypeRelaENT, objAppCodeTypeRelaENS);
  return objAppCodeTypeRelaENT;
}
