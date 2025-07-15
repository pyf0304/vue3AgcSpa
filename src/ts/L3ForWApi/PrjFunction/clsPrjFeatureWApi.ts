/**
 * 类名:clsPrjFeatureWApi
 * 表名:PrjFeature(00050322)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:53:55
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
 * 功能(PrjFeature)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import {
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPrjFeatureEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const prjFeature_Controller = 'PrjFeatureApi';
export const prjFeature_ConstructorName = 'prjFeature';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFeatureId:关键字
 * @returns 对象
 **/
export async function PrjFeature_GetObjByFeatureIdAsync(
  strFeatureId: string,
): Promise<clsPrjFeatureEN | null> {
  const strThisFuncName = 'GetObjByFeatureIdAsync';

  if (IsNullOrEmpty(strFeatureId) == true) {
    const strMsg = Format(
      '参数:[strFeatureId]不能为空!(In clsPrjFeatureWApi.GetObjByFeatureIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureId]的长度:[{0}]不正确!(clsPrjFeatureWApi.GetObjByFeatureIdAsync)',
      strFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFeatureId';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFeatureId,
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
      const objPrjFeature = PrjFeature_GetObjFromJsonObj(returnObj);
      return objPrjFeature;
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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param strFeatureId:所给的关键字
 * @returns 对象
 */
export async function PrjFeature_GetObjByFeatureIdlocalStorage(strFeatureId: string) {
  const strThisFuncName = 'GetObjByFeatureIdlocalStorage';

  if (IsNullOrEmpty(strFeatureId) == true) {
    const strMsg = Format(
      '参数:[strFeatureId]不能为空!(In clsPrjFeatureWApi.GetObjByFeatureIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureId]的长度:[{0}]不正确!(clsPrjFeatureWApi.GetObjByFeatureIdlocalStorage)',
      strFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPrjFeatureEN._CurrTabName, strFeatureId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPrjFeatureCache: clsPrjFeatureEN = JSON.parse(strTempObj);
    return objPrjFeatureCache;
  }
  try {
    const objPrjFeature = await PrjFeature_GetObjByFeatureIdAsync(strFeatureId);
    if (objPrjFeature != null) {
      localStorage.setItem(strKey, JSON.stringify(objPrjFeature));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPrjFeature;
    }
    return objPrjFeature;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFeatureId,
      prjFeature_ConstructorName,
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
 * @param strFeatureId:所给的关键字
 * @returns 对象
 */
export async function PrjFeature_GetObjByFeatureIdCache(
  strFeatureId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFeatureIdCache';

  if (IsNullOrEmpty(strFeatureId) == true) {
    const strMsg = Format(
      '参数:[strFeatureId]不能为空!(In clsPrjFeatureWApi.GetObjByFeatureIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureId]的长度:[{0}]不正确!(clsPrjFeatureWApi.GetObjByFeatureIdCache)',
      strFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjFeatureObjLstCache = await PrjFeature_GetObjLstCache();
  try {
    const arrPrjFeatureSel = arrPrjFeatureObjLstCache.filter((x) => x.featureId == strFeatureId);
    let objPrjFeature: clsPrjFeatureEN;
    if (arrPrjFeatureSel.length > 0) {
      objPrjFeature = arrPrjFeatureSel[0];
      return objPrjFeature;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPrjFeatureConst = await PrjFeature_GetObjByFeatureIdAsync(strFeatureId);
        if (objPrjFeatureConst != null) {
          PrjFeature_ReFreshThisCache();
          return objPrjFeatureConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFeatureId,
      prjFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objPrjFeature:所给的对象
 * @returns 对象
 */
export async function PrjFeature_UpdateObjInLstCache(objPrjFeature: clsPrjFeatureEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPrjFeatureObjLstCache = await PrjFeature_GetObjLstCache();
    const obj = arrPrjFeatureObjLstCache.find((x) => x.featureName == objPrjFeature.featureName);
    if (obj != null) {
      objPrjFeature.featureId = obj.featureId;
      ObjectAssign(obj, objPrjFeature);
    } else {
      arrPrjFeatureObjLstCache.push(objPrjFeature);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      prjFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjFeature_SortFunDefa(a: clsPrjFeatureEN, b: clsPrjFeatureEN): number {
  return a.featureId.localeCompare(b.featureId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjFeature_SortFunDefa2Fld(a: clsPrjFeatureEN, b: clsPrjFeatureEN): number {
  if (a.featureName == b.featureName) return a.featureENName.localeCompare(b.featureENName);
  else return a.featureName.localeCompare(b.featureName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjFeature_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjFeatureEN.con_FeatureId:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          return a.featureId.localeCompare(b.featureId);
        };
      case clsPrjFeatureEN.con_FeatureName:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          return a.featureName.localeCompare(b.featureName);
        };
      case clsPrjFeatureEN.con_FeatureENName:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (a.featureENName == null) return -1;
          if (b.featureENName == null) return 1;
          return a.featureENName.localeCompare(b.featureENName);
        };
      case clsPrjFeatureEN.con_KeyWords:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (a.keyWords == null) return -1;
          if (b.keyWords == null) return 1;
          return a.keyWords.localeCompare(b.keyWords);
        };
      case clsPrjFeatureEN.con_DefaButtonName:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (a.defaButtonName == null) return -1;
          if (b.defaButtonName == null) return 1;
          return a.defaButtonName.localeCompare(b.defaButtonName);
        };
      case clsPrjFeatureEN.con_DefaButtonName4Mvc:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (a.defaButtonName4Mvc == null) return -1;
          if (b.defaButtonName4Mvc == null) return 1;
          return a.defaButtonName4Mvc.localeCompare(b.defaButtonName4Mvc);
        };
      case clsPrjFeatureEN.con_RegionTypeId:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (a.regionTypeId == null) return -1;
          if (b.regionTypeId == null) return 1;
          return a.regionTypeId.localeCompare(b.regionTypeId);
        };
      case clsPrjFeatureEN.con_GroupName:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (a.groupName == null) return -1;
          if (b.groupName == null) return 1;
          return a.groupName.localeCompare(b.groupName);
        };
      case clsPrjFeatureEN.con_FeatureDescription:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (a.featureDescription == null) return -1;
          if (b.featureDescription == null) return 1;
          return a.featureDescription.localeCompare(b.featureDescription);
        };
      case clsPrjFeatureEN.con_InOutTypeId:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          return a.inOutTypeId.localeCompare(b.inOutTypeId);
        };
      case clsPrjFeatureEN.con_IsNeedField:
        return (a: clsPrjFeatureEN) => {
          if (a.isNeedField == true) return 1;
          else return -1;
        };
      case clsPrjFeatureEN.con_IsNeedTabFeature:
        return (a: clsPrjFeatureEN) => {
          if (a.isNeedTabFeature == true) return 1;
          else return -1;
        };
      case clsPrjFeatureEN.con_ParentFeatureId:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (a.parentFeatureId == null) return -1;
          if (b.parentFeatureId == null) return 1;
          return a.parentFeatureId.localeCompare(b.parentFeatureId);
        };
      case clsPrjFeatureEN.con_ParentFeatureName:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (a.parentFeatureName == null) return -1;
          if (b.parentFeatureName == null) return 1;
          return a.parentFeatureName.localeCompare(b.parentFeatureName);
        };
      case clsPrjFeatureEN.con_FunctionGroupId:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          return a.functionGroupId.localeCompare(b.functionGroupId);
        };
      case clsPrjFeatureEN.con_FeatureTypeId:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          return a.featureTypeId.localeCompare(b.featureTypeId);
        };
      case clsPrjFeatureEN.con_CreateUserId:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          return a.createUserId.localeCompare(b.createUserId);
        };
      case clsPrjFeatureEN.con_InUse:
        return (a: clsPrjFeatureEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsPrjFeatureEN.con_OrderNum:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsPrjFeatureEN.con_UpdDate:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPrjFeatureEN.con_UpdUser:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsPrjFeatureEN.con_Memo:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjFeature]中不存在!(in ${prjFeature_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrjFeatureEN.con_FeatureId:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          return b.featureId.localeCompare(a.featureId);
        };
      case clsPrjFeatureEN.con_FeatureName:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          return b.featureName.localeCompare(a.featureName);
        };
      case clsPrjFeatureEN.con_FeatureENName:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (b.featureENName == null) return -1;
          if (a.featureENName == null) return 1;
          return b.featureENName.localeCompare(a.featureENName);
        };
      case clsPrjFeatureEN.con_KeyWords:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (b.keyWords == null) return -1;
          if (a.keyWords == null) return 1;
          return b.keyWords.localeCompare(a.keyWords);
        };
      case clsPrjFeatureEN.con_DefaButtonName:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (b.defaButtonName == null) return -1;
          if (a.defaButtonName == null) return 1;
          return b.defaButtonName.localeCompare(a.defaButtonName);
        };
      case clsPrjFeatureEN.con_DefaButtonName4Mvc:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (b.defaButtonName4Mvc == null) return -1;
          if (a.defaButtonName4Mvc == null) return 1;
          return b.defaButtonName4Mvc.localeCompare(a.defaButtonName4Mvc);
        };
      case clsPrjFeatureEN.con_RegionTypeId:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (b.regionTypeId == null) return -1;
          if (a.regionTypeId == null) return 1;
          return b.regionTypeId.localeCompare(a.regionTypeId);
        };
      case clsPrjFeatureEN.con_GroupName:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (b.groupName == null) return -1;
          if (a.groupName == null) return 1;
          return b.groupName.localeCompare(a.groupName);
        };
      case clsPrjFeatureEN.con_FeatureDescription:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (b.featureDescription == null) return -1;
          if (a.featureDescription == null) return 1;
          return b.featureDescription.localeCompare(a.featureDescription);
        };
      case clsPrjFeatureEN.con_InOutTypeId:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          return b.inOutTypeId.localeCompare(a.inOutTypeId);
        };
      case clsPrjFeatureEN.con_IsNeedField:
        return (b: clsPrjFeatureEN) => {
          if (b.isNeedField == true) return 1;
          else return -1;
        };
      case clsPrjFeatureEN.con_IsNeedTabFeature:
        return (b: clsPrjFeatureEN) => {
          if (b.isNeedTabFeature == true) return 1;
          else return -1;
        };
      case clsPrjFeatureEN.con_ParentFeatureId:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (b.parentFeatureId == null) return -1;
          if (a.parentFeatureId == null) return 1;
          return b.parentFeatureId.localeCompare(a.parentFeatureId);
        };
      case clsPrjFeatureEN.con_ParentFeatureName:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (b.parentFeatureName == null) return -1;
          if (a.parentFeatureName == null) return 1;
          return b.parentFeatureName.localeCompare(a.parentFeatureName);
        };
      case clsPrjFeatureEN.con_FunctionGroupId:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          return b.functionGroupId.localeCompare(a.functionGroupId);
        };
      case clsPrjFeatureEN.con_FeatureTypeId:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          return b.featureTypeId.localeCompare(a.featureTypeId);
        };
      case clsPrjFeatureEN.con_CreateUserId:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          return b.createUserId.localeCompare(a.createUserId);
        };
      case clsPrjFeatureEN.con_InUse:
        return (b: clsPrjFeatureEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsPrjFeatureEN.con_OrderNum:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsPrjFeatureEN.con_UpdDate:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPrjFeatureEN.con_UpdUser:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsPrjFeatureEN.con_Memo:
        return (a: clsPrjFeatureEN, b: clsPrjFeatureEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjFeature]中不存在!(in ${prjFeature_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFeatureId:所给的关键字
 * @returns 对象
 */
export async function PrjFeature_GetNameByFeatureIdCache(strFeatureId: string) {
  if (IsNullOrEmpty(strFeatureId) == true) {
    const strMsg = Format(
      '参数:[strFeatureId]不能为空!(In clsPrjFeatureWApi.GetNameByFeatureIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureId]的长度:[{0}]不正确!(clsPrjFeatureWApi.GetNameByFeatureIdCache)',
      strFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjFeatureObjLstCache = await PrjFeature_GetObjLstCache();
  if (arrPrjFeatureObjLstCache == null) return '';
  try {
    const arrPrjFeatureSel = arrPrjFeatureObjLstCache.filter((x) => x.featureId == strFeatureId);
    let objPrjFeature: clsPrjFeatureEN;
    if (arrPrjFeatureSel.length > 0) {
      objPrjFeature = arrPrjFeatureSel[0];
      return objPrjFeature.featureName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strFeatureId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PrjFeature_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrjFeatureEN.con_FeatureId:
      return (obj: clsPrjFeatureEN) => {
        return obj.featureId === value;
      };
    case clsPrjFeatureEN.con_FeatureName:
      return (obj: clsPrjFeatureEN) => {
        return obj.featureName === value;
      };
    case clsPrjFeatureEN.con_FeatureENName:
      return (obj: clsPrjFeatureEN) => {
        return obj.featureENName === value;
      };
    case clsPrjFeatureEN.con_KeyWords:
      return (obj: clsPrjFeatureEN) => {
        return obj.keyWords === value;
      };
    case clsPrjFeatureEN.con_DefaButtonName:
      return (obj: clsPrjFeatureEN) => {
        return obj.defaButtonName === value;
      };
    case clsPrjFeatureEN.con_DefaButtonName4Mvc:
      return (obj: clsPrjFeatureEN) => {
        return obj.defaButtonName4Mvc === value;
      };
    case clsPrjFeatureEN.con_RegionTypeId:
      return (obj: clsPrjFeatureEN) => {
        return obj.regionTypeId === value;
      };
    case clsPrjFeatureEN.con_GroupName:
      return (obj: clsPrjFeatureEN) => {
        return obj.groupName === value;
      };
    case clsPrjFeatureEN.con_FeatureDescription:
      return (obj: clsPrjFeatureEN) => {
        return obj.featureDescription === value;
      };
    case clsPrjFeatureEN.con_InOutTypeId:
      return (obj: clsPrjFeatureEN) => {
        return obj.inOutTypeId === value;
      };
    case clsPrjFeatureEN.con_IsNeedField:
      return (obj: clsPrjFeatureEN) => {
        return obj.isNeedField === value;
      };
    case clsPrjFeatureEN.con_IsNeedTabFeature:
      return (obj: clsPrjFeatureEN) => {
        return obj.isNeedTabFeature === value;
      };
    case clsPrjFeatureEN.con_ParentFeatureId:
      return (obj: clsPrjFeatureEN) => {
        return obj.parentFeatureId === value;
      };
    case clsPrjFeatureEN.con_ParentFeatureName:
      return (obj: clsPrjFeatureEN) => {
        return obj.parentFeatureName === value;
      };
    case clsPrjFeatureEN.con_FunctionGroupId:
      return (obj: clsPrjFeatureEN) => {
        return obj.functionGroupId === value;
      };
    case clsPrjFeatureEN.con_FeatureTypeId:
      return (obj: clsPrjFeatureEN) => {
        return obj.featureTypeId === value;
      };
    case clsPrjFeatureEN.con_CreateUserId:
      return (obj: clsPrjFeatureEN) => {
        return obj.createUserId === value;
      };
    case clsPrjFeatureEN.con_InUse:
      return (obj: clsPrjFeatureEN) => {
        return obj.inUse === value;
      };
    case clsPrjFeatureEN.con_OrderNum:
      return (obj: clsPrjFeatureEN) => {
        return obj.orderNum === value;
      };
    case clsPrjFeatureEN.con_UpdDate:
      return (obj: clsPrjFeatureEN) => {
        return obj.updDate === value;
      };
    case clsPrjFeatureEN.con_UpdUser:
      return (obj: clsPrjFeatureEN) => {
        return obj.updUser === value;
      };
    case clsPrjFeatureEN.con_Memo:
      return (obj: clsPrjFeatureEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrjFeature]中不存在!(in ${prjFeature_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function PrjFeature_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsPrjFeatureEN.con_FeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPrjFeatureEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPrjFeatureEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFeatureId = strInValue;
  if (IsNullOrEmpty(strFeatureId) == true) {
    return '';
  }
  const objPrjFeature = await PrjFeature_GetObjByFeatureIdCache(strFeatureId);
  if (objPrjFeature == null) return '';
  if (objPrjFeature.GetFldValue(strOutFldName) == null) return '';
  return objPrjFeature.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function PrjFeature_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsPrjFeatureEN.con_FeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrPrjFeature = await PrjFeature_GetObjLstCache();
  if (arrPrjFeature == null) return [];
  let arrPrjFeatureSel = arrPrjFeature;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPrjFeatureSel = arrPrjFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPrjFeatureSel = arrPrjFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPrjFeatureSel = arrPrjFeatureSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPrjFeatureSel = arrPrjFeatureSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPrjFeatureSel = arrPrjFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPrjFeatureSel = arrPrjFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPrjFeatureSel = arrPrjFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPrjFeatureSel = arrPrjFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPrjFeatureSel = arrPrjFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPrjFeatureSel = arrPrjFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPrjFeatureSel.length == 0) return [];
  return arrPrjFeatureSel.map((x) => x.featureId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjFeature_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
export async function PrjFeature_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
export async function PrjFeature_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
export async function PrjFeature_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPrjFeatureEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
      const objPrjFeature = PrjFeature_GetObjFromJsonObj(returnObj);
      return objPrjFeature;
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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
export async function PrjFeature_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjFeatureEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjFeatureEN.WhereFormat) == false) {
    strWhereCond = clsPrjFeatureEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsPrjFeatureEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjFeatureEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPrjFeatureExObjLstCache: Array<clsPrjFeatureEN> = CacheHelper.Get(strKey);
    const arrPrjFeatureObjLstT = PrjFeature_GetObjLstByJSONObjLst(arrPrjFeatureExObjLstCache);
    return arrPrjFeatureObjLstT;
  }
  try {
    const arrPrjFeatureExObjLst = await PrjFeature_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPrjFeatureExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjFeatureExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjFeatureExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjFeature_ConstructorName,
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
export async function PrjFeature_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjFeatureEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjFeatureEN.WhereFormat) == false) {
    strWhereCond = clsPrjFeatureEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsPrjFeatureEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjFeatureEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjFeatureExObjLstCache: Array<clsPrjFeatureEN> = JSON.parse(strTempObjLst);
    const arrPrjFeatureObjLstT = PrjFeature_GetObjLstByJSONObjLst(arrPrjFeatureExObjLstCache);
    return arrPrjFeatureObjLstT;
  }
  try {
    const arrPrjFeatureExObjLst = await PrjFeature_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPrjFeatureExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjFeatureExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjFeatureExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjFeature_ConstructorName,
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
export async function PrjFeature_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjFeatureEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjFeatureObjLstCache: Array<clsPrjFeatureEN> = JSON.parse(strTempObjLst);
    return arrPrjFeatureObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PrjFeature_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPrjFeatureEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
          prjFeature_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFeature_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
export async function PrjFeature_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjFeatureEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjFeatureEN.WhereFormat) == false) {
    strWhereCond = clsPrjFeatureEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsPrjFeatureEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjFeatureEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjFeatureExObjLstCache: Array<clsPrjFeatureEN> = JSON.parse(strTempObjLst);
    const arrPrjFeatureObjLstT = PrjFeature_GetObjLstByJSONObjLst(arrPrjFeatureExObjLstCache);
    return arrPrjFeatureObjLstT;
  }
  try {
    const arrPrjFeatureExObjLst = await PrjFeature_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPrjFeatureExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjFeatureExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjFeatureExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjFeature_ConstructorName,
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
export async function PrjFeature_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjFeatureEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjFeatureObjLstCache: Array<clsPrjFeatureEN> = JSON.parse(strTempObjLst);
    return arrPrjFeatureObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjFeature_GetObjLstCache(): Promise<Array<clsPrjFeatureEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrPrjFeatureObjLstCache;
  switch (clsPrjFeatureEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjFeatureObjLstCache = await PrjFeature_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrPrjFeatureObjLstCache = await PrjFeature_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrPrjFeatureObjLstCache = await PrjFeature_GetObjLstClientCache();
      break;
    default:
      arrPrjFeatureObjLstCache = await PrjFeature_GetObjLstClientCache();
      break;
  }
  return arrPrjFeatureObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjFeature_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPrjFeatureObjLstCache;
  switch (clsPrjFeatureEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjFeatureObjLstCache = await PrjFeature_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrPrjFeatureObjLstCache = await PrjFeature_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrPrjFeatureObjLstCache = null;
      break;
    default:
      arrPrjFeatureObjLstCache = null;
      break;
  }
  return arrPrjFeatureObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFeatureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjFeature_GetSubObjLstCache(objPrjFeatureCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPrjFeatureObjLstCache = await PrjFeature_GetObjLstCache();
  let arrPrjFeatureSel = arrPrjFeatureObjLstCache;
  if (objPrjFeatureCond.GetConditions().length == 0) return arrPrjFeatureSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objPrjFeatureCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPrjFeatureSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjFeatureCond),
      prjFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjFeatureEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFeatureId:关键字列表
 * @returns 对象列表
 **/
export async function PrjFeature_GetObjLstByFeatureIdLstAsync(
  arrFeatureId: Array<string>,
): Promise<Array<clsPrjFeatureEN>> {
  const strThisFuncName = 'GetObjLstByFeatureIdLstAsync';
  const strAction = 'GetObjLstByFeatureIdLst';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFeatureId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          prjFeature_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFeature_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param arrstrFeatureIdLst:关键字列表
 * @returns 对象列表
 */
export async function PrjFeature_GetObjLstByFeatureIdLstCache(arrFeatureIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByFeatureIdLstCache';
  try {
    const arrPrjFeatureObjLstCache = await PrjFeature_GetObjLstCache();
    const arrPrjFeatureSel = arrPrjFeatureObjLstCache.filter(
      (x) => arrFeatureIdLst.indexOf(x.featureId) > -1,
    );
    return arrPrjFeatureSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFeatureIdLst.join(','),
      prjFeature_ConstructorName,
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
export async function PrjFeature_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrjFeatureEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
          prjFeature_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFeature_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
export async function PrjFeature_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrjFeatureEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
          prjFeature_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjFeature_GetObjLstByJSONObjLst(returnObjLst);
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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)

/**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strFeatureId:关键字
 * @returns 获取删除的结果
 **/
export async function PrjFeature_DelRecordAsync(strFeatureId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(prjFeature_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFeatureId);

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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param arrFeatureId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PrjFeature_DelPrjFeaturesAsync(arrFeatureId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelPrjFeaturesAsync';
  const strAction = 'DelPrjFeatures';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFeatureId, config);
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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function PrjFeature_DelPrjFeaturesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelPrjFeaturesByCondAsync';
  const strAction = 'DelPrjFeaturesByCond';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param objPrjFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFeature_AddNewRecordAsync(
  objPrjFeatureEN: clsPrjFeatureEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPrjFeatureEN);
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFeatureEN, config);
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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param objPrjFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFeature_AddNewRecordWithMaxIdAsync(
  objPrjFeatureEN: clsPrjFeatureEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFeatureEN, config);
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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param objPrjFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFeature_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param objPrjFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFeature_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjFeatureEN);
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param objPrjFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFeature_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjFeatureEN);
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
export async function PrjFeature_AddNewObjSave(
  objPrjFeatureEN: clsPrjFeatureEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    PrjFeature_CheckPropertyNew(objPrjFeatureEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjFeature_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjFeature_CheckUniCond4Add(objPrjFeatureEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await PrjFeature_AddNewRecordWithMaxIdAsync(objPrjFeatureEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      PrjFeature_ReFreshCache();
    } else {
      const strInfo = `添加[功能(PrjFeature)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${prjFeature_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function PrjFeature_CheckUniCond4Add(
  objPrjFeatureEN: clsPrjFeatureEN,
): Promise<boolean> {
  const strUniquenessCondition = PrjFeature_GetUniCondStr(objPrjFeatureEN);
  const bolIsExistCondition = await PrjFeature_IsExistRecordAsync(strUniquenessCondition);
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
export async function PrjFeature_CheckUniCond4Update(
  objPrjFeatureEN: clsPrjFeatureEN,
): Promise<boolean> {
  const strUniquenessCondition = PrjFeature_GetUniCondStr4Update(objPrjFeatureEN);
  const bolIsExistCondition = await PrjFeature_IsExistRecordAsync(strUniquenessCondition);
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
export async function PrjFeature_UpdateObjSave(objPrjFeatureEN: clsPrjFeatureEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objPrjFeatureEN.sfUpdFldSetStr = objPrjFeatureEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objPrjFeatureEN.featureId == '' || objPrjFeatureEN.featureId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    PrjFeature_CheckProperty4Update(objPrjFeatureEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjFeature_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjFeature_CheckUniCond4Update(objPrjFeatureEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await PrjFeature_UpdateRecordAsync(objPrjFeatureEN);
    if (returnBool == true) {
      PrjFeature_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${prjFeature_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objPrjFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFeature_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjFeatureEN);
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param objPrjFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjFeature_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objPrjFeatureEN);
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param objPrjFeatureEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrjFeature_AddNewRecordWithReturnKeyAsync(
  objPrjFeatureEN: clsPrjFeatureEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFeatureEN, config);
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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param objPrjFeatureEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjFeature_UpdateRecordAsync(
  objPrjFeatureEN: clsPrjFeatureEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrjFeatureEN.sfUpdFldSetStr === undefined ||
    objPrjFeatureEN.sfUpdFldSetStr === null ||
    objPrjFeatureEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjFeatureEN.featureId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFeatureEN, config);
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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param objPrjFeatureEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjFeature_EditRecordExAsync(
  objPrjFeatureEN: clsPrjFeatureEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objPrjFeatureEN.sfUpdFldSetStr === undefined ||
    objPrjFeatureEN.sfUpdFldSetStr === null ||
    objPrjFeatureEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjFeatureEN.featureId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFeatureEN, config);
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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param objPrjFeatureEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjFeature_UpdateWithConditionAsync(
  objPrjFeatureEN: clsPrjFeatureEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrjFeatureEN.sfUpdFldSetStr === undefined ||
    objPrjFeatureEN.sfUpdFldSetStr === null ||
    objPrjFeatureEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjFeatureEN.featureId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);
  objPrjFeatureEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjFeatureEN, config);
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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param objstrFeatureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjFeature_IsExistRecordCache(objPrjFeatureCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPrjFeatureObjLstCache = await PrjFeature_GetObjLstCache();
  if (arrPrjFeatureObjLstCache == null) return false;
  let arrPrjFeatureSel = arrPrjFeatureObjLstCache;
  if (objPrjFeatureCond.GetConditions().length == 0)
    return arrPrjFeatureSel.length > 0 ? true : false;
  try {
    for (const objCondition of objPrjFeatureCond.GetConditions()) {
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
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrjFeatureSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPrjFeatureCond),
      prjFeature_ConstructorName,
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
export async function PrjFeature_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param strFeatureId:所给的关键字
 * @returns 对象
 */
export async function PrjFeature_IsExistCache(strFeatureId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrPrjFeatureObjLstCache = await PrjFeature_GetObjLstCache();
  if (arrPrjFeatureObjLstCache == null) return false;
  try {
    const arrPrjFeatureSel = arrPrjFeatureObjLstCache.filter((x) => x.featureId == strFeatureId);
    if (arrPrjFeatureSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFeatureId,
      prjFeature_ConstructorName,
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
 * @param strFeatureId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PrjFeature_IsExistAsync(strFeatureId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFeatureId,
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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
export async function PrjFeature_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
 * @param objPrjFeatureCond:条件对象
 * @returns 对象列表记录数
 */
export async function PrjFeature_GetRecCountByCondCache(objPrjFeatureCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPrjFeatureObjLstCache = await PrjFeature_GetObjLstCache();
  if (arrPrjFeatureObjLstCache == null) return 0;
  let arrPrjFeatureSel = arrPrjFeatureObjLstCache;
  if (objPrjFeatureCond.GetConditions().length == 0) return arrPrjFeatureSel.length;
  try {
    for (const objCondition of objPrjFeatureCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjFeatureSel = arrPrjFeatureSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjFeatureSel = arrPrjFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPrjFeatureSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjFeatureCond),
      prjFeature_ConstructorName,
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
export async function PrjFeature_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
export async function PrjFeature_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjFeature_Controller, strAction);

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
        prjFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjFeature_ConstructorName,
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
export function PrjFeature_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PrjFeature_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsPrjFeatureEN._CurrTabName;
  switch (clsPrjFeatureEN.CacheModeId) {
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
  clsPrjFeatureEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function PrjFeature_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsPrjFeatureEN._CurrTabName;
    switch (clsPrjFeatureEN.CacheModeId) {
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
    clsPrjFeatureEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function PrjFeature_GetLastRefreshTime(): string {
  if (clsPrjFeatureEN._RefreshTimeLst.length == 0) return '';
  return clsPrjFeatureEN._RefreshTimeLst[clsPrjFeatureEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strFeatureTypeId:
*/
export async function PrjFeature_BindDdl_FeatureIdByFeatureTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strFeatureTypeId: string,
) {
  if (IsNullOrEmpty(strFeatureTypeId) == true) {
    const strMsg = Format(
      '参数:[strFeatureTypeId]不能为空！(In clsPrjFeatureWApi.BindDdl_FeatureIdByFeatureTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureTypeId]的长度:[{0}]不正确！(clsPrjFeatureWApi.BindDdl_FeatureIdByFeatureTypeIdInDiv)',
      strFeatureTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_FeatureIdByFeatureTypeIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FeatureIdByFeatureTypeIdInDivCache");
  let arrObjLstSel = await PrjFeature_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.featureTypeId == strFeatureTypeId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsPrjFeatureEN.con_FeatureId,
    clsPrjFeatureEN.con_FeatureName,
    '功能...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strFeatureTypeId:
*/
export async function PrjFeature_GetArrPrjFeatureByFeatureTypeId(strFeatureTypeId: string) {
  if (IsNullOrEmpty(strFeatureTypeId) == true) {
    const strMsg = Format(
      '参数:[strFeatureTypeId]不能为空！(In clsPrjFeatureWApi.BindDdl_FeatureIdByFeatureTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFeatureTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strFeatureTypeId]的长度:[{0}]不正确！(clsPrjFeatureWApi.BindDdl_FeatureIdByFeatureTypeIdInDiv)',
      strFeatureTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FeatureIdByFeatureTypeIdInDivCache");
  const arrPrjFeature = new Array<clsPrjFeatureEN>();
  let arrObjLstSel = await PrjFeature_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.featureTypeId == strFeatureTypeId);
  const obj0 = new clsPrjFeatureEN();
  obj0.featureId = '0';
  obj0.featureName = '选功能...';
  arrPrjFeature.push(obj0);
  arrObjLstSel.forEach((x) => arrPrjFeature.push(x));
  return arrPrjFeature;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjFeature_CheckPropertyNew(pobjPrjFeatureEN: clsPrjFeatureEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPrjFeatureEN.featureName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[功能名称]不能为空(In 功能)!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.inOutTypeId) === true ||
    pobjPrjFeatureEN.inOutTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[INOUT类型ID]不能为空(In 功能)!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.functionGroupId) === true ||
    pobjPrjFeatureEN.functionGroupId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[函数组Id]不能为空(In 功能)!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureTypeId) === true ||
    pobjPrjFeatureEN.featureTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[功能类型Id]不能为空(In 功能)!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjFeatureEN.createUserId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[建立用户Id]不能为空(In 功能)!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjPrjFeatureEN.orderNum ||
    (pobjPrjFeatureEN.orderNum != null && pobjPrjFeatureEN.orderNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[序号]不能为空(In 功能)!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureId) == false &&
    GetStrLen(pobjPrjFeatureEN.featureId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能Id(featureId)]的长度不能超过4(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.featureId}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureName) == false &&
    GetStrLen(pobjPrjFeatureEN.featureName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能名称(featureName)]的长度不能超过100(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.featureName}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureENName) == false &&
    GetStrLen(pobjPrjFeatureEN.featureENName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能英文名(featureENName)]的长度不能超过100(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.featureENName}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.keyWords) == false &&
    GetStrLen(pobjPrjFeatureEN.keyWords) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[关键字(keyWords)]的长度不能超过500(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.keyWords}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.defaButtonName) == false &&
    GetStrLen(pobjPrjFeatureEN.defaButtonName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[默认按钮名(defaButtonName)]的长度不能超过30(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.defaButtonName}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.defaButtonName4Mvc) == false &&
    GetStrLen(pobjPrjFeatureEN.defaButtonName4Mvc) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[默认按钮名4Mvc(defaButtonName4Mvc)]的长度不能超过30(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.defaButtonName4Mvc}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.regionTypeId) == false &&
    GetStrLen(pobjPrjFeatureEN.regionTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域类型Id(regionTypeId)]的长度不能超过4(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.regionTypeId}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.groupName) == false &&
    GetStrLen(pobjPrjFeatureEN.groupName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[组名(groupName)]的长度不能超过30(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.groupName}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureDescription) == false &&
    GetStrLen(pobjPrjFeatureEN.featureDescription) > 4000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能说明(featureDescription)]的长度不能超过4000(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.featureDescription}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.inOutTypeId) == false &&
    GetStrLen(pobjPrjFeatureEN.inOutTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[INOUT类型ID(inOutTypeId)]的长度不能超过2(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.inOutTypeId}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.parentFeatureId) == false &&
    GetStrLen(pobjPrjFeatureEN.parentFeatureId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[父功能Id(parentFeatureId)]的长度不能超过4(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.parentFeatureId}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.parentFeatureName) == false &&
    GetStrLen(pobjPrjFeatureEN.parentFeatureName) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[父功能名(parentFeatureName)]的长度不能超过500(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.parentFeatureName}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.functionGroupId) == false &&
    GetStrLen(pobjPrjFeatureEN.functionGroupId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数组Id(functionGroupId)]的长度不能超过4(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.functionGroupId}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureTypeId) == false &&
    GetStrLen(pobjPrjFeatureEN.featureTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能类型Id(featureTypeId)]的长度不能超过2(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.featureTypeId}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.createUserId) == false &&
    GetStrLen(pobjPrjFeatureEN.createUserId) > 18
  ) {
    throw new Error(
      `(errid:Watl000413)字段[建立用户Id(createUserId)]的长度不能超过18(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.createUserId}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.updDate) == false &&
    GetStrLen(pobjPrjFeatureEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.updDate}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.updUser) == false &&
    GetStrLen(pobjPrjFeatureEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.updUser}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjFeatureEN.memo) == false && GetStrLen(pobjPrjFeatureEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.memo}(clsPrjFeatureBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureId) == false &&
    undefined !== pobjPrjFeatureEN.featureId &&
    tzDataType.isString(pobjPrjFeatureEN.featureId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能Id(featureId)]的值:[${pobjPrjFeatureEN.featureId}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureName) == false &&
    undefined !== pobjPrjFeatureEN.featureName &&
    tzDataType.isString(pobjPrjFeatureEN.featureName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能名称(featureName)]的值:[${pobjPrjFeatureEN.featureName}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureENName) == false &&
    undefined !== pobjPrjFeatureEN.featureENName &&
    tzDataType.isString(pobjPrjFeatureEN.featureENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能英文名(featureENName)]的值:[${pobjPrjFeatureEN.featureENName}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.keyWords) == false &&
    undefined !== pobjPrjFeatureEN.keyWords &&
    tzDataType.isString(pobjPrjFeatureEN.keyWords) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[关键字(keyWords)]的值:[${pobjPrjFeatureEN.keyWords}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.defaButtonName) == false &&
    undefined !== pobjPrjFeatureEN.defaButtonName &&
    tzDataType.isString(pobjPrjFeatureEN.defaButtonName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[默认按钮名(defaButtonName)]的值:[${pobjPrjFeatureEN.defaButtonName}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.defaButtonName4Mvc) == false &&
    undefined !== pobjPrjFeatureEN.defaButtonName4Mvc &&
    tzDataType.isString(pobjPrjFeatureEN.defaButtonName4Mvc) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[默认按钮名4Mvc(defaButtonName4Mvc)]的值:[${pobjPrjFeatureEN.defaButtonName4Mvc}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.regionTypeId) == false &&
    undefined !== pobjPrjFeatureEN.regionTypeId &&
    tzDataType.isString(pobjPrjFeatureEN.regionTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域类型Id(regionTypeId)]的值:[${pobjPrjFeatureEN.regionTypeId}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.groupName) == false &&
    undefined !== pobjPrjFeatureEN.groupName &&
    tzDataType.isString(pobjPrjFeatureEN.groupName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[组名(groupName)]的值:[${pobjPrjFeatureEN.groupName}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureDescription) == false &&
    undefined !== pobjPrjFeatureEN.featureDescription &&
    tzDataType.isString(pobjPrjFeatureEN.featureDescription) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能说明(featureDescription)]的值:[${pobjPrjFeatureEN.featureDescription}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.inOutTypeId) == false &&
    undefined !== pobjPrjFeatureEN.inOutTypeId &&
    tzDataType.isString(pobjPrjFeatureEN.inOutTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[INOUT类型ID(inOutTypeId)]的值:[${pobjPrjFeatureEN.inOutTypeId}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjFeatureEN.isNeedField &&
    undefined !== pobjPrjFeatureEN.isNeedField &&
    tzDataType.isBoolean(pobjPrjFeatureEN.isNeedField) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否需要字段(isNeedField)]的值:[${pobjPrjFeatureEN.isNeedField}], 非法,应该为布尔型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjFeatureEN.isNeedTabFeature &&
    undefined !== pobjPrjFeatureEN.isNeedTabFeature &&
    tzDataType.isBoolean(pobjPrjFeatureEN.isNeedTabFeature) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否需要表功能(isNeedTabFeature)]的值:[${pobjPrjFeatureEN.isNeedTabFeature}], 非法,应该为布尔型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.parentFeatureId) == false &&
    undefined !== pobjPrjFeatureEN.parentFeatureId &&
    tzDataType.isString(pobjPrjFeatureEN.parentFeatureId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[父功能Id(parentFeatureId)]的值:[${pobjPrjFeatureEN.parentFeatureId}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.parentFeatureName) == false &&
    undefined !== pobjPrjFeatureEN.parentFeatureName &&
    tzDataType.isString(pobjPrjFeatureEN.parentFeatureName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[父功能名(parentFeatureName)]的值:[${pobjPrjFeatureEN.parentFeatureName}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.functionGroupId) == false &&
    undefined !== pobjPrjFeatureEN.functionGroupId &&
    tzDataType.isString(pobjPrjFeatureEN.functionGroupId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数组Id(functionGroupId)]的值:[${pobjPrjFeatureEN.functionGroupId}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureTypeId) == false &&
    undefined !== pobjPrjFeatureEN.featureTypeId &&
    tzDataType.isString(pobjPrjFeatureEN.featureTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能类型Id(featureTypeId)]的值:[${pobjPrjFeatureEN.featureTypeId}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.createUserId) == false &&
    undefined !== pobjPrjFeatureEN.createUserId &&
    tzDataType.isString(pobjPrjFeatureEN.createUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[建立用户Id(createUserId)]的值:[${pobjPrjFeatureEN.createUserId}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjFeatureEN.inUse &&
    undefined !== pobjPrjFeatureEN.inUse &&
    tzDataType.isBoolean(pobjPrjFeatureEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjPrjFeatureEN.inUse}], 非法,应该为布尔型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjPrjFeatureEN.orderNum &&
    undefined !== pobjPrjFeatureEN.orderNum &&
    tzDataType.isNumber(pobjPrjFeatureEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjPrjFeatureEN.orderNum}], 非法,应该为数值型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.updDate) == false &&
    undefined !== pobjPrjFeatureEN.updDate &&
    tzDataType.isString(pobjPrjFeatureEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjPrjFeatureEN.updDate}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.updUser) == false &&
    undefined !== pobjPrjFeatureEN.updUser &&
    tzDataType.isString(pobjPrjFeatureEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjPrjFeatureEN.updUser}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.memo) == false &&
    undefined !== pobjPrjFeatureEN.memo &&
    tzDataType.isString(pobjPrjFeatureEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjPrjFeatureEN.memo}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjFeature_CheckProperty4Update(pobjPrjFeatureEN: clsPrjFeatureEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureId) == false &&
    GetStrLen(pobjPrjFeatureEN.featureId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能Id(featureId)]的长度不能超过4(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.featureId}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureName) == false &&
    GetStrLen(pobjPrjFeatureEN.featureName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能名称(featureName)]的长度不能超过100(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.featureName}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureENName) == false &&
    GetStrLen(pobjPrjFeatureEN.featureENName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能英文名(featureENName)]的长度不能超过100(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.featureENName}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.keyWords) == false &&
    GetStrLen(pobjPrjFeatureEN.keyWords) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[关键字(keyWords)]的长度不能超过500(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.keyWords}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.defaButtonName) == false &&
    GetStrLen(pobjPrjFeatureEN.defaButtonName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[默认按钮名(defaButtonName)]的长度不能超过30(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.defaButtonName}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.defaButtonName4Mvc) == false &&
    GetStrLen(pobjPrjFeatureEN.defaButtonName4Mvc) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[默认按钮名4Mvc(defaButtonName4Mvc)]的长度不能超过30(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.defaButtonName4Mvc}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.regionTypeId) == false &&
    GetStrLen(pobjPrjFeatureEN.regionTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域类型Id(regionTypeId)]的长度不能超过4(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.regionTypeId}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.groupName) == false &&
    GetStrLen(pobjPrjFeatureEN.groupName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[组名(groupName)]的长度不能超过30(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.groupName}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureDescription) == false &&
    GetStrLen(pobjPrjFeatureEN.featureDescription) > 4000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能说明(featureDescription)]的长度不能超过4000(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.featureDescription}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.inOutTypeId) == false &&
    GetStrLen(pobjPrjFeatureEN.inOutTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[INOUT类型ID(inOutTypeId)]的长度不能超过2(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.inOutTypeId}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.parentFeatureId) == false &&
    GetStrLen(pobjPrjFeatureEN.parentFeatureId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[父功能Id(parentFeatureId)]的长度不能超过4(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.parentFeatureId}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.parentFeatureName) == false &&
    GetStrLen(pobjPrjFeatureEN.parentFeatureName) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[父功能名(parentFeatureName)]的长度不能超过500(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.parentFeatureName}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.functionGroupId) == false &&
    GetStrLen(pobjPrjFeatureEN.functionGroupId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数组Id(functionGroupId)]的长度不能超过4(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.functionGroupId}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureTypeId) == false &&
    GetStrLen(pobjPrjFeatureEN.featureTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能类型Id(featureTypeId)]的长度不能超过2(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.featureTypeId}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.createUserId) == false &&
    GetStrLen(pobjPrjFeatureEN.createUserId) > 18
  ) {
    throw new Error(
      `(errid:Watl000416)字段[建立用户Id(createUserId)]的长度不能超过18(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.createUserId}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.updDate) == false &&
    GetStrLen(pobjPrjFeatureEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.updDate}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.updUser) == false &&
    GetStrLen(pobjPrjFeatureEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.updUser}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjFeatureEN.memo) == false && GetStrLen(pobjPrjFeatureEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 功能(PrjFeature))!值:${pobjPrjFeatureEN.memo}(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureId) == false &&
    undefined !== pobjPrjFeatureEN.featureId &&
    tzDataType.isString(pobjPrjFeatureEN.featureId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能Id(featureId)]的值:[${pobjPrjFeatureEN.featureId}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureName) == false &&
    undefined !== pobjPrjFeatureEN.featureName &&
    tzDataType.isString(pobjPrjFeatureEN.featureName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能名称(featureName)]的值:[${pobjPrjFeatureEN.featureName}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureENName) == false &&
    undefined !== pobjPrjFeatureEN.featureENName &&
    tzDataType.isString(pobjPrjFeatureEN.featureENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能英文名(featureENName)]的值:[${pobjPrjFeatureEN.featureENName}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.keyWords) == false &&
    undefined !== pobjPrjFeatureEN.keyWords &&
    tzDataType.isString(pobjPrjFeatureEN.keyWords) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[关键字(keyWords)]的值:[${pobjPrjFeatureEN.keyWords}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.defaButtonName) == false &&
    undefined !== pobjPrjFeatureEN.defaButtonName &&
    tzDataType.isString(pobjPrjFeatureEN.defaButtonName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[默认按钮名(defaButtonName)]的值:[${pobjPrjFeatureEN.defaButtonName}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.defaButtonName4Mvc) == false &&
    undefined !== pobjPrjFeatureEN.defaButtonName4Mvc &&
    tzDataType.isString(pobjPrjFeatureEN.defaButtonName4Mvc) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[默认按钮名4Mvc(defaButtonName4Mvc)]的值:[${pobjPrjFeatureEN.defaButtonName4Mvc}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.regionTypeId) == false &&
    undefined !== pobjPrjFeatureEN.regionTypeId &&
    tzDataType.isString(pobjPrjFeatureEN.regionTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域类型Id(regionTypeId)]的值:[${pobjPrjFeatureEN.regionTypeId}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.groupName) == false &&
    undefined !== pobjPrjFeatureEN.groupName &&
    tzDataType.isString(pobjPrjFeatureEN.groupName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[组名(groupName)]的值:[${pobjPrjFeatureEN.groupName}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureDescription) == false &&
    undefined !== pobjPrjFeatureEN.featureDescription &&
    tzDataType.isString(pobjPrjFeatureEN.featureDescription) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能说明(featureDescription)]的值:[${pobjPrjFeatureEN.featureDescription}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.inOutTypeId) == false &&
    undefined !== pobjPrjFeatureEN.inOutTypeId &&
    tzDataType.isString(pobjPrjFeatureEN.inOutTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[INOUT类型ID(inOutTypeId)]的值:[${pobjPrjFeatureEN.inOutTypeId}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjFeatureEN.isNeedField &&
    undefined !== pobjPrjFeatureEN.isNeedField &&
    tzDataType.isBoolean(pobjPrjFeatureEN.isNeedField) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否需要字段(isNeedField)]的值:[${pobjPrjFeatureEN.isNeedField}], 非法,应该为布尔型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjFeatureEN.isNeedTabFeature &&
    undefined !== pobjPrjFeatureEN.isNeedTabFeature &&
    tzDataType.isBoolean(pobjPrjFeatureEN.isNeedTabFeature) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否需要表功能(isNeedTabFeature)]的值:[${pobjPrjFeatureEN.isNeedTabFeature}], 非法,应该为布尔型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.parentFeatureId) == false &&
    undefined !== pobjPrjFeatureEN.parentFeatureId &&
    tzDataType.isString(pobjPrjFeatureEN.parentFeatureId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[父功能Id(parentFeatureId)]的值:[${pobjPrjFeatureEN.parentFeatureId}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.parentFeatureName) == false &&
    undefined !== pobjPrjFeatureEN.parentFeatureName &&
    tzDataType.isString(pobjPrjFeatureEN.parentFeatureName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[父功能名(parentFeatureName)]的值:[${pobjPrjFeatureEN.parentFeatureName}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.functionGroupId) == false &&
    undefined !== pobjPrjFeatureEN.functionGroupId &&
    tzDataType.isString(pobjPrjFeatureEN.functionGroupId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数组Id(functionGroupId)]的值:[${pobjPrjFeatureEN.functionGroupId}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.featureTypeId) == false &&
    undefined !== pobjPrjFeatureEN.featureTypeId &&
    tzDataType.isString(pobjPrjFeatureEN.featureTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能类型Id(featureTypeId)]的值:[${pobjPrjFeatureEN.featureTypeId}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.createUserId) == false &&
    undefined !== pobjPrjFeatureEN.createUserId &&
    tzDataType.isString(pobjPrjFeatureEN.createUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[建立用户Id(createUserId)]的值:[${pobjPrjFeatureEN.createUserId}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjFeatureEN.inUse &&
    undefined !== pobjPrjFeatureEN.inUse &&
    tzDataType.isBoolean(pobjPrjFeatureEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjPrjFeatureEN.inUse}], 非法,应该为布尔型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjPrjFeatureEN.orderNum &&
    undefined !== pobjPrjFeatureEN.orderNum &&
    tzDataType.isNumber(pobjPrjFeatureEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjPrjFeatureEN.orderNum}], 非法,应该为数值型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.updDate) == false &&
    undefined !== pobjPrjFeatureEN.updDate &&
    tzDataType.isString(pobjPrjFeatureEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjPrjFeatureEN.updDate}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.updUser) == false &&
    undefined !== pobjPrjFeatureEN.updUser &&
    tzDataType.isString(pobjPrjFeatureEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjPrjFeatureEN.updUser}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjFeatureEN.memo) == false &&
    undefined !== pobjPrjFeatureEN.memo &&
    tzDataType.isString(pobjPrjFeatureEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjPrjFeatureEN.memo}], 非法,应该为字符型(In 功能(PrjFeature))!(clsPrjFeatureBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjFeature_GetJSONStrByObj(pobjPrjFeatureEN: clsPrjFeatureEN): string {
  pobjPrjFeatureEN.sfUpdFldSetStr = pobjPrjFeatureEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrjFeatureEN);
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
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PrjFeature_GetObjLstByJSONStr(strJSON: string): Array<clsPrjFeatureEN> {
  let arrPrjFeatureObjLst = new Array<clsPrjFeatureEN>();
  if (strJSON === '') {
    return arrPrjFeatureObjLst;
  }
  try {
    arrPrjFeatureObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrjFeatureObjLst;
  }
  return arrPrjFeatureObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrjFeatureObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrjFeature_GetObjLstByJSONObjLst(
  arrPrjFeatureObjLstS: Array<clsPrjFeatureEN>,
): Array<clsPrjFeatureEN> {
  const arrPrjFeatureObjLst = new Array<clsPrjFeatureEN>();
  for (const objInFor of arrPrjFeatureObjLstS) {
    const obj1 = PrjFeature_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrjFeatureObjLst.push(obj1);
  }
  return arrPrjFeatureObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjFeature_GetObjByJSONStr(strJSON: string): clsPrjFeatureEN {
  let pobjPrjFeatureEN = new clsPrjFeatureEN();
  if (strJSON === '') {
    return pobjPrjFeatureEN;
  }
  try {
    pobjPrjFeatureEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrjFeatureEN;
  }
  return pobjPrjFeatureEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrjFeature_GetCombineCondition(objPrjFeatureCond: clsPrjFeatureEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_FeatureId,
    ) == true
  ) {
    const strComparisonOpFeatureId: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_FeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_FeatureId,
      objPrjFeatureCond.featureId,
      strComparisonOpFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_FeatureName,
    ) == true
  ) {
    const strComparisonOpFeatureName: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_FeatureName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_FeatureName,
      objPrjFeatureCond.featureName,
      strComparisonOpFeatureName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_FeatureENName,
    ) == true
  ) {
    const strComparisonOpFeatureENName: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_FeatureENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_FeatureENName,
      objPrjFeatureCond.featureENName,
      strComparisonOpFeatureENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_KeyWords,
    ) == true
  ) {
    const strComparisonOpKeyWords: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_KeyWords];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_KeyWords,
      objPrjFeatureCond.keyWords,
      strComparisonOpKeyWords,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_DefaButtonName,
    ) == true
  ) {
    const strComparisonOpDefaButtonName: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_DefaButtonName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_DefaButtonName,
      objPrjFeatureCond.defaButtonName,
      strComparisonOpDefaButtonName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_DefaButtonName4Mvc,
    ) == true
  ) {
    const strComparisonOpDefaButtonName4Mvc: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_DefaButtonName4Mvc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_DefaButtonName4Mvc,
      objPrjFeatureCond.defaButtonName4Mvc,
      strComparisonOpDefaButtonName4Mvc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_RegionTypeId,
    ) == true
  ) {
    const strComparisonOpRegionTypeId: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_RegionTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_RegionTypeId,
      objPrjFeatureCond.regionTypeId,
      strComparisonOpRegionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_GroupName,
    ) == true
  ) {
    const strComparisonOpGroupName: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_GroupName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_GroupName,
      objPrjFeatureCond.groupName,
      strComparisonOpGroupName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_FeatureDescription,
    ) == true
  ) {
    const strComparisonOpFeatureDescription: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_FeatureDescription];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_FeatureDescription,
      objPrjFeatureCond.featureDescription,
      strComparisonOpFeatureDescription,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_InOutTypeId,
    ) == true
  ) {
    const strComparisonOpInOutTypeId: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_InOutTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_InOutTypeId,
      objPrjFeatureCond.inOutTypeId,
      strComparisonOpInOutTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_IsNeedField,
    ) == true
  ) {
    if (objPrjFeatureCond.isNeedField == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjFeatureEN.con_IsNeedField);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjFeatureEN.con_IsNeedField);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_IsNeedTabFeature,
    ) == true
  ) {
    if (objPrjFeatureCond.isNeedTabFeature == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjFeatureEN.con_IsNeedTabFeature);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjFeatureEN.con_IsNeedTabFeature);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_ParentFeatureId,
    ) == true
  ) {
    const strComparisonOpParentFeatureId: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_ParentFeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_ParentFeatureId,
      objPrjFeatureCond.parentFeatureId,
      strComparisonOpParentFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_ParentFeatureName,
    ) == true
  ) {
    const strComparisonOpParentFeatureName: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_ParentFeatureName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_ParentFeatureName,
      objPrjFeatureCond.parentFeatureName,
      strComparisonOpParentFeatureName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_FunctionGroupId,
    ) == true
  ) {
    const strComparisonOpFunctionGroupId: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_FunctionGroupId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_FunctionGroupId,
      objPrjFeatureCond.functionGroupId,
      strComparisonOpFunctionGroupId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_FeatureTypeId,
    ) == true
  ) {
    const strComparisonOpFeatureTypeId: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_FeatureTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_FeatureTypeId,
      objPrjFeatureCond.featureTypeId,
      strComparisonOpFeatureTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_CreateUserId,
    ) == true
  ) {
    const strComparisonOpCreateUserId: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_CreateUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_CreateUserId,
      objPrjFeatureCond.createUserId,
      strComparisonOpCreateUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_InUse,
    ) == true
  ) {
    if (objPrjFeatureCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsPrjFeatureEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsPrjFeatureEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsPrjFeatureEN.con_OrderNum,
      objPrjFeatureCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_UpdDate,
      objPrjFeatureCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_UpdUser,
      objPrjFeatureCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjFeatureCond.dicFldComparisonOp,
      clsPrjFeatureEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPrjFeatureCond.dicFldComparisonOp[clsPrjFeatureEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjFeatureEN.con_Memo,
      objPrjFeatureCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjFeature(功能),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFeatureName: 功能名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjFeature_GetUniCondStr(objPrjFeatureEN: clsPrjFeatureEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FeatureName = '{0}'", objPrjFeatureEN.featureName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjFeature(功能),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFeatureName: 功能名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjFeature_GetUniCondStr4Update(objPrjFeatureEN: clsPrjFeatureEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FeatureId <> '{0}'", objPrjFeatureEN.featureId);
  strWhereCond += Format(" and FeatureName = '{0}'", objPrjFeatureEN.featureName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrjFeatureENS:源对象
 * @param objPrjFeatureENT:目标对象
 */
export function PrjFeature_GetObjFromJsonObj(objPrjFeatureENS: clsPrjFeatureEN): clsPrjFeatureEN {
  const objPrjFeatureENT: clsPrjFeatureEN = new clsPrjFeatureEN();
  ObjectAssign(objPrjFeatureENT, objPrjFeatureENS);
  return objPrjFeatureENT;
}
