/**
 * 类名:clsFeatureRegionFldsWApi
 * 表名:FeatureRegionFlds(00050452)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 18:59:07
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 功能区域字段(FeatureRegionFlds)
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
  featureRegionFldsCache,
  isFuncMapCache,
} from '@/views/RegionManage/FeatureRegionFldsVueShare';
import { clsFeatureRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsENEx';
import { clsFeatureRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsFeatureRegionFldsEN';
import { PrjFeature_func } from '@/ts/L3ForWApi/PrjFunction/clsPrjFeatureWApi';
import { clsPrjFeatureEN } from '@/ts/L0Entity/PrjFunction/clsPrjFeatureEN';
import { CtlType_func } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { ViewImplementation_func } from '@/ts/L3ForWApi/PrjInterface/clsViewImplementationWApi';
import { clsViewImplementationEN } from '@/ts/L0Entity/PrjInterface/clsViewImplementationEN';
import { ValueGivingMode_func } from '@/ts/L3ForWApi/GeneCode/clsValueGivingModeWApi';
import { clsValueGivingModeEN } from '@/ts/L0Entity/GeneCode/clsValueGivingModeEN';
import { TabFeature_func } from '@/ts/L3ForWApi/Table_Field/clsTabFeatureWApi';
import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const featureRegionFlds_Controller = 'FeatureRegionFldsApi';
export const featureRegionFlds_ConstructorName = 'featureRegionFlds';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strViewFeatureId:关键字
 * @returns 对象
 **/
export async function FeatureRegionFlds_GetObjByViewFeatureIdAsync(
  strViewFeatureId: string,
): Promise<clsFeatureRegionFldsEN | null> {
  const strThisFuncName = 'GetObjByViewFeatureIdAsync';

  if (IsNullOrEmpty(strViewFeatureId) == true) {
    const strMsg = Format(
      '参数:[strViewFeatureId]不能为空!(In clsFeatureRegionFldsWApi.GetObjByViewFeatureIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewFeatureId]的长度:[{0}]不正确!(clsFeatureRegionFldsWApi.GetObjByViewFeatureIdAsync)',
      strViewFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByViewFeatureId';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewFeatureId,
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
      const objFeatureRegionFlds = FeatureRegionFlds_GetObjFromJsonObj(returnObj);
      return objFeatureRegionFlds;
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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param strViewFeatureId:所给的关键字
 * @returns 对象
 */
export async function FeatureRegionFlds_GetObjByViewFeatureIdlocalStorage(
  strViewFeatureId: string,
) {
  const strThisFuncName = 'GetObjByViewFeatureIdlocalStorage';

  if (IsNullOrEmpty(strViewFeatureId) == true) {
    const strMsg = Format(
      '参数:[strViewFeatureId]不能为空!(In clsFeatureRegionFldsWApi.GetObjByViewFeatureIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewFeatureId]的长度:[{0}]不正确!(clsFeatureRegionFldsWApi.GetObjByViewFeatureIdlocalStorage)',
      strViewFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFeatureRegionFldsEN._CurrTabName, strViewFeatureId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFeatureRegionFldsCache: clsFeatureRegionFldsEN = JSON.parse(strTempObj);
    return objFeatureRegionFldsCache;
  }
  try {
    const objFeatureRegionFlds = await FeatureRegionFlds_GetObjByViewFeatureIdAsync(
      strViewFeatureId,
    );
    if (objFeatureRegionFlds != null) {
      localStorage.setItem(strKey, JSON.stringify(objFeatureRegionFlds));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFeatureRegionFlds;
    }
    return objFeatureRegionFlds;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewFeatureId,
      featureRegionFlds_ConstructorName,
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
 * @param strViewFeatureId:所给的关键字
 * @returns 对象
 */
export async function FeatureRegionFlds_GetObjByViewFeatureIdCache(
  strViewFeatureId: string,
  strRegionId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByViewFeatureIdCache';

  if (IsNullOrEmpty(strViewFeatureId) == true) {
    const strMsg = Format(
      '参数:[strViewFeatureId]不能为空!(In clsFeatureRegionFldsWApi.GetObjByViewFeatureIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewFeatureId]的长度:[{0}]不正确!(clsFeatureRegionFldsWApi.GetObjByViewFeatureIdCache)',
      strViewFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstCache(strRegionId);
  try {
    const arrFeatureRegionFldsSel = arrFeatureRegionFldsObjLstCache.filter(
      (x) => x.viewFeatureId == strViewFeatureId,
    );
    let objFeatureRegionFlds: clsFeatureRegionFldsEN;
    if (arrFeatureRegionFldsSel.length > 0) {
      objFeatureRegionFlds = arrFeatureRegionFldsSel[0];
      return objFeatureRegionFlds;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFeatureRegionFldsConst = await FeatureRegionFlds_GetObjByViewFeatureIdAsync(
          strViewFeatureId,
        );
        if (objFeatureRegionFldsConst != null) {
          FeatureRegionFlds_ReFreshThisCache(strRegionId);
          return objFeatureRegionFldsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewFeatureId,
      featureRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objFeatureRegionFlds:所给的对象
 * @returns 对象
 */
export async function FeatureRegionFlds_UpdateObjInLstCache(
  objFeatureRegionFlds: clsFeatureRegionFldsEN,
  strRegionId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstCache(strRegionId);
    const obj = arrFeatureRegionFldsObjLstCache.find(
      (x) =>
        x.regionId == objFeatureRegionFlds.regionId &&
        x.buttonName == objFeatureRegionFlds.buttonName &&
        x.featureId == objFeatureRegionFlds.featureId,
    );
    if (obj != null) {
      objFeatureRegionFlds.viewFeatureId = obj.viewFeatureId;
      ObjectAssign(obj, objFeatureRegionFlds);
    } else {
      arrFeatureRegionFldsObjLstCache.push(objFeatureRegionFlds);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      featureRegionFlds_ConstructorName,
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
export function FeatureRegionFlds_SortFunDefa(
  a: clsFeatureRegionFldsEN,
  b: clsFeatureRegionFldsEN,
): number {
  return a.viewFeatureId.localeCompare(b.viewFeatureId);
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
export function FeatureRegionFlds_SortFunDefa2Fld(
  a: clsFeatureRegionFldsEN,
  b: clsFeatureRegionFldsEN,
): number {
  if (a.regionId == b.regionId) return a.featureId.localeCompare(b.featureId);
  else return a.regionId.localeCompare(b.regionId);
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
export function FeatureRegionFlds_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFeatureRegionFldsEN.con_ViewFeatureId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return a.viewFeatureId.localeCompare(b.viewFeatureId);
        };
      case clsFeatureRegionFldsEN.con_RegionId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsFeatureRegionFldsEN.con_FeatureId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return a.featureId.localeCompare(b.featureId);
        };
      case clsFeatureRegionFldsEN.con_TabFeatureId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.tabFeatureId == null) return -1;
          if (b.tabFeatureId == null) return 1;
          return a.tabFeatureId.localeCompare(b.tabFeatureId);
        };
      case clsFeatureRegionFldsEN.con_CheckTabFeature:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.checkTabFeature == null) return -1;
          if (b.checkTabFeature == null) return 1;
          return a.checkTabFeature.localeCompare(b.checkTabFeature);
        };
      case clsFeatureRegionFldsEN.con_FeatureDescription:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.featureDescription == null) return -1;
          if (b.featureDescription == null) return 1;
          return a.featureDescription.localeCompare(b.featureDescription);
        };
      case clsFeatureRegionFldsEN.con_ButtonName:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return a.buttonName.localeCompare(b.buttonName);
        };
      case clsFeatureRegionFldsEN.con_ButtonName4Mvc:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return a.buttonName4Mvc.localeCompare(b.buttonName4Mvc);
        };
      case clsFeatureRegionFldsEN.con_CommandName:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.commandName == null) return -1;
          if (b.commandName == null) return 1;
          return a.commandName.localeCompare(b.commandName);
        };
      case clsFeatureRegionFldsEN.con_ValueGivingModeId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.valueGivingModeId == null) return -1;
          if (b.valueGivingModeId == null) return 1;
          return a.valueGivingModeId.localeCompare(b.valueGivingModeId);
        };
      case clsFeatureRegionFldsEN.con_FuncName:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.funcName == null) return -1;
          if (b.funcName == null) return 1;
          return a.funcName.localeCompare(b.funcName);
        };
      case clsFeatureRegionFldsEN.con_DefaultValue:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.defaultValue == null) return -1;
          if (b.defaultValue == null) return 1;
          return a.defaultValue.localeCompare(b.defaultValue);
        };
      case clsFeatureRegionFldsEN.con_KeyIdGetModeId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.keyIdGetModeId == null) return -1;
          if (b.keyIdGetModeId == null) return 1;
          return a.keyIdGetModeId.localeCompare(b.keyIdGetModeId);
        };
      case clsFeatureRegionFldsEN.con_Text:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return a.text.localeCompare(b.text);
        };
      case clsFeatureRegionFldsEN.con_GroupName:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.groupName == null) return -1;
          if (b.groupName == null) return 1;
          return a.groupName.localeCompare(b.groupName);
        };
      case clsFeatureRegionFldsEN.con_ReleTabId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return a.releTabId.localeCompare(b.releTabId);
        };
      case clsFeatureRegionFldsEN.con_ReleFldId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.releFldId == null) return -1;
          if (b.releFldId == null) return 1;
          return a.releFldId.localeCompare(b.releFldId);
        };
      case clsFeatureRegionFldsEN.con_EventFuncName:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.eventFuncName == null) return -1;
          if (b.eventFuncName == null) return 1;
          return a.eventFuncName.localeCompare(b.eventFuncName);
        };
      case clsFeatureRegionFldsEN.con_FieldTypeId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.fieldTypeId == null) return -1;
          if (b.fieldTypeId == null) return 1;
          return a.fieldTypeId.localeCompare(b.fieldTypeId);
        };
      case clsFeatureRegionFldsEN.con_ViewImplId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return a.viewImplId.localeCompare(b.viewImplId);
        };
      case clsFeatureRegionFldsEN.con_CtlTypeId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.ctlTypeId == null) return -1;
          if (b.ctlTypeId == null) return 1;
          return a.ctlTypeId.localeCompare(b.ctlTypeId);
        };
      case clsFeatureRegionFldsEN.con_Height:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return a.height - b.height;
        };
      case clsFeatureRegionFldsEN.con_Width:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return a.width - b.width;
        };
      case clsFeatureRegionFldsEN.con_SeqNum:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return a.seqNum - b.seqNum;
        };
      case clsFeatureRegionFldsEN.con_CssClass:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.cssClass == null) return -1;
          if (b.cssClass == null) return 1;
          return a.cssClass.localeCompare(b.cssClass);
        };
      case clsFeatureRegionFldsEN.con_ImageUrl:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.imageUrl == null) return -1;
          if (b.imageUrl == null) return 1;
          return a.imageUrl.localeCompare(b.imageUrl);
        };
      case clsFeatureRegionFldsEN.con_InUse:
        return (a: clsFeatureRegionFldsEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsFeatureRegionFldsEN.con_ErrMsg:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsFeatureRegionFldsEN.con_PrjId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsFeatureRegionFldsEN.con_UpdUser:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFeatureRegionFldsEN.con_UpdDate:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFeatureRegionFldsEN.con_Memo:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FeatureRegionFlds]中不存在!(in ${featureRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFeatureRegionFldsEN.con_ViewFeatureId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return b.viewFeatureId.localeCompare(a.viewFeatureId);
        };
      case clsFeatureRegionFldsEN.con_RegionId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsFeatureRegionFldsEN.con_FeatureId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return b.featureId.localeCompare(a.featureId);
        };
      case clsFeatureRegionFldsEN.con_TabFeatureId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.tabFeatureId == null) return -1;
          if (a.tabFeatureId == null) return 1;
          return b.tabFeatureId.localeCompare(a.tabFeatureId);
        };
      case clsFeatureRegionFldsEN.con_CheckTabFeature:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.checkTabFeature == null) return -1;
          if (a.checkTabFeature == null) return 1;
          return b.checkTabFeature.localeCompare(a.checkTabFeature);
        };
      case clsFeatureRegionFldsEN.con_FeatureDescription:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.featureDescription == null) return -1;
          if (a.featureDescription == null) return 1;
          return b.featureDescription.localeCompare(a.featureDescription);
        };
      case clsFeatureRegionFldsEN.con_ButtonName:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return b.buttonName.localeCompare(a.buttonName);
        };
      case clsFeatureRegionFldsEN.con_ButtonName4Mvc:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return b.buttonName4Mvc.localeCompare(a.buttonName4Mvc);
        };
      case clsFeatureRegionFldsEN.con_CommandName:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.commandName == null) return -1;
          if (a.commandName == null) return 1;
          return b.commandName.localeCompare(a.commandName);
        };
      case clsFeatureRegionFldsEN.con_ValueGivingModeId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.valueGivingModeId == null) return -1;
          if (a.valueGivingModeId == null) return 1;
          return b.valueGivingModeId.localeCompare(a.valueGivingModeId);
        };
      case clsFeatureRegionFldsEN.con_FuncName:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.funcName == null) return -1;
          if (a.funcName == null) return 1;
          return b.funcName.localeCompare(a.funcName);
        };
      case clsFeatureRegionFldsEN.con_DefaultValue:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.defaultValue == null) return -1;
          if (a.defaultValue == null) return 1;
          return b.defaultValue.localeCompare(a.defaultValue);
        };
      case clsFeatureRegionFldsEN.con_KeyIdGetModeId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.keyIdGetModeId == null) return -1;
          if (a.keyIdGetModeId == null) return 1;
          return b.keyIdGetModeId.localeCompare(a.keyIdGetModeId);
        };
      case clsFeatureRegionFldsEN.con_Text:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return b.text.localeCompare(a.text);
        };
      case clsFeatureRegionFldsEN.con_GroupName:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.groupName == null) return -1;
          if (a.groupName == null) return 1;
          return b.groupName.localeCompare(a.groupName);
        };
      case clsFeatureRegionFldsEN.con_ReleTabId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return b.releTabId.localeCompare(a.releTabId);
        };
      case clsFeatureRegionFldsEN.con_ReleFldId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.releFldId == null) return -1;
          if (a.releFldId == null) return 1;
          return b.releFldId.localeCompare(a.releFldId);
        };
      case clsFeatureRegionFldsEN.con_EventFuncName:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.eventFuncName == null) return -1;
          if (a.eventFuncName == null) return 1;
          return b.eventFuncName.localeCompare(a.eventFuncName);
        };
      case clsFeatureRegionFldsEN.con_FieldTypeId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.fieldTypeId == null) return -1;
          if (a.fieldTypeId == null) return 1;
          return b.fieldTypeId.localeCompare(a.fieldTypeId);
        };
      case clsFeatureRegionFldsEN.con_ViewImplId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return b.viewImplId.localeCompare(a.viewImplId);
        };
      case clsFeatureRegionFldsEN.con_CtlTypeId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.ctlTypeId == null) return -1;
          if (a.ctlTypeId == null) return 1;
          return b.ctlTypeId.localeCompare(a.ctlTypeId);
        };
      case clsFeatureRegionFldsEN.con_Height:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return b.height - a.height;
        };
      case clsFeatureRegionFldsEN.con_Width:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return b.width - a.width;
        };
      case clsFeatureRegionFldsEN.con_SeqNum:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return b.seqNum - a.seqNum;
        };
      case clsFeatureRegionFldsEN.con_CssClass:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.cssClass == null) return -1;
          if (a.cssClass == null) return 1;
          return b.cssClass.localeCompare(a.cssClass);
        };
      case clsFeatureRegionFldsEN.con_ImageUrl:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.imageUrl == null) return -1;
          if (a.imageUrl == null) return 1;
          return b.imageUrl.localeCompare(a.imageUrl);
        };
      case clsFeatureRegionFldsEN.con_InUse:
        return (b: clsFeatureRegionFldsEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsFeatureRegionFldsEN.con_ErrMsg:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsFeatureRegionFldsEN.con_PrjId:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsFeatureRegionFldsEN.con_UpdUser:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFeatureRegionFldsEN.con_UpdDate:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFeatureRegionFldsEN.con_Memo:
        return (a: clsFeatureRegionFldsEN, b: clsFeatureRegionFldsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FeatureRegionFlds]中不存在!(in ${featureRegionFlds_ConstructorName}.${strThisFuncName})`;
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
export async function FeatureRegionFlds_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFeatureRegionFldsEN.con_ViewFeatureId:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.viewFeatureId === value;
      };
    case clsFeatureRegionFldsEN.con_RegionId:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.regionId === value;
      };
    case clsFeatureRegionFldsEN.con_FeatureId:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.featureId === value;
      };
    case clsFeatureRegionFldsEN.con_TabFeatureId:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.tabFeatureId === value;
      };
    case clsFeatureRegionFldsEN.con_CheckTabFeature:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.checkTabFeature === value;
      };
    case clsFeatureRegionFldsEN.con_FeatureDescription:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.featureDescription === value;
      };
    case clsFeatureRegionFldsEN.con_ButtonName:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.buttonName === value;
      };
    case clsFeatureRegionFldsEN.con_ButtonName4Mvc:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.buttonName4Mvc === value;
      };
    case clsFeatureRegionFldsEN.con_CommandName:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.commandName === value;
      };
    case clsFeatureRegionFldsEN.con_ValueGivingModeId:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.valueGivingModeId === value;
      };
    case clsFeatureRegionFldsEN.con_FuncName:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.funcName === value;
      };
    case clsFeatureRegionFldsEN.con_DefaultValue:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.defaultValue === value;
      };
    case clsFeatureRegionFldsEN.con_KeyIdGetModeId:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.keyIdGetModeId === value;
      };
    case clsFeatureRegionFldsEN.con_Text:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.text === value;
      };
    case clsFeatureRegionFldsEN.con_GroupName:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.groupName === value;
      };
    case clsFeatureRegionFldsEN.con_ReleTabId:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.releTabId === value;
      };
    case clsFeatureRegionFldsEN.con_ReleFldId:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.releFldId === value;
      };
    case clsFeatureRegionFldsEN.con_EventFuncName:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.eventFuncName === value;
      };
    case clsFeatureRegionFldsEN.con_FieldTypeId:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.fieldTypeId === value;
      };
    case clsFeatureRegionFldsEN.con_ViewImplId:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.viewImplId === value;
      };
    case clsFeatureRegionFldsEN.con_CtlTypeId:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.ctlTypeId === value;
      };
    case clsFeatureRegionFldsEN.con_Height:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.height === value;
      };
    case clsFeatureRegionFldsEN.con_Width:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.width === value;
      };
    case clsFeatureRegionFldsEN.con_SeqNum:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.seqNum === value;
      };
    case clsFeatureRegionFldsEN.con_CssClass:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.cssClass === value;
      };
    case clsFeatureRegionFldsEN.con_ImageUrl:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.imageUrl === value;
      };
    case clsFeatureRegionFldsEN.con_InUse:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.inUse === value;
      };
    case clsFeatureRegionFldsEN.con_ErrMsg:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.errMsg === value;
      };
    case clsFeatureRegionFldsEN.con_PrjId:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.prjId === value;
      };
    case clsFeatureRegionFldsEN.con_UpdUser:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.updUser === value;
      };
    case clsFeatureRegionFldsEN.con_UpdDate:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.updDate === value;
      };
    case clsFeatureRegionFldsEN.con_Memo:
      return (obj: clsFeatureRegionFldsEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FeatureRegionFlds]中不存在!(in ${featureRegionFlds_ConstructorName}.${strThisFuncName})`;
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
 @param strRegionId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function FeatureRegionFlds_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strRegionIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strRegionIdClassfy) == true) {
    const strMsg = Format('参数:[strRegionIdClassfy]不能为空!(In clsFeatureRegionFldsWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionIdClassfy.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionIdClassfy]的长度:[{0}]不正确!(clsFeatureRegionFldsWApi.func)',
      strRegionIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsFeatureRegionFldsEN.con_ViewFeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFeatureRegionFldsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFeatureRegionFldsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strViewFeatureId = strInValue;
  if (IsNullOrEmpty(strViewFeatureId) == true) {
    return '';
  }
  const objFeatureRegionFlds = await FeatureRegionFlds_GetObjByViewFeatureIdCache(
    strViewFeatureId,
    strRegionIdClassfy,
  );
  if (objFeatureRegionFlds == null) return '';
  if (objFeatureRegionFlds.GetFldValue(strOutFldName) == null) return '';
  return objFeatureRegionFlds.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strRegionId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function FeatureRegionFlds_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strRegionIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strRegionIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strRegionIdClassfy]不能为空!(In clsFeatureRegionFldsWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionIdClassfy.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionIdClassfy]的长度:[{0}]不正确!(clsFeatureRegionFldsWApi.funcKey)',
      strRegionIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsFeatureRegionFldsEN.con_ViewFeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrFeatureRegionFlds = await FeatureRegionFlds_GetObjLstCache(strRegionIdClassfy);
  if (arrFeatureRegionFlds == null) return [];
  let arrFeatureRegionFldsSel = arrFeatureRegionFlds;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFeatureRegionFldsSel.length == 0) return [];
  return arrFeatureRegionFldsSel.map((x) => x.viewFeatureId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FeatureRegionFlds_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFeatureRegionFldsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
      const objFeatureRegionFlds = FeatureRegionFlds_GetObjFromJsonObj(returnObj);
      return objFeatureRegionFlds;
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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_GetObjLstClientCache(strRegionId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsFeatureRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsFeatureRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("RegionId='{0}'", strRegionId);
  }
  const strKey = Format('{0}_{1}', clsFeatureRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsFeatureRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFeatureRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFeatureRegionFldsExObjLstCache: Array<clsFeatureRegionFldsEN> =
      CacheHelper.Get(strKey);
    const arrFeatureRegionFldsObjLstT = FeatureRegionFlds_GetObjLstByJSONObjLst(
      arrFeatureRegionFldsExObjLstCache,
    );
    return arrFeatureRegionFldsObjLstT;
  }
  try {
    const arrFeatureRegionFldsExObjLst = await FeatureRegionFlds_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrFeatureRegionFldsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFeatureRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrFeatureRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_GetObjLstlocalStorage(strRegionId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsFeatureRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsFeatureRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsFeatureRegionFldsEN.con_RegionId, strRegionId);
  }
  const strKey = Format('{0}_{1}', clsFeatureRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsFeatureRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFeatureRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFeatureRegionFldsExObjLstCache: Array<clsFeatureRegionFldsEN> =
      JSON.parse(strTempObjLst);
    const arrFeatureRegionFldsObjLstT = FeatureRegionFlds_GetObjLstByJSONObjLst(
      arrFeatureRegionFldsExObjLstCache,
    );
    return arrFeatureRegionFldsObjLstT;
  }
  try {
    const arrFeatureRegionFldsExObjLst = await FeatureRegionFlds_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsFeatureRegionFldsEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrFeatureRegionFldsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFeatureRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrFeatureRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_GetObjLstlocalStoragePureCache(strRegionId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsFeatureRegionFldsEN._CurrTabName, strRegionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFeatureRegionFldsObjLstCache: Array<clsFeatureRegionFldsEN> =
      JSON.parse(strTempObjLst);
    return arrFeatureRegionFldsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FeatureRegionFlds_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFeatureRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
          featureRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_GetObjLstsessionStorage(strRegionId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsFeatureRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsFeatureRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsFeatureRegionFldsEN.con_RegionId, strRegionId);
  }
  const strKey = Format('{0}_{1}', clsFeatureRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsFeatureRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFeatureRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFeatureRegionFldsExObjLstCache: Array<clsFeatureRegionFldsEN> =
      JSON.parse(strTempObjLst);
    const arrFeatureRegionFldsObjLstT = FeatureRegionFlds_GetObjLstByJSONObjLst(
      arrFeatureRegionFldsExObjLstCache,
    );
    return arrFeatureRegionFldsObjLstT;
  }
  try {
    const arrFeatureRegionFldsExObjLst = await FeatureRegionFlds_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsFeatureRegionFldsEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrFeatureRegionFldsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFeatureRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrFeatureRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_GetObjLstsessionStoragePureCache(strRegionId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsFeatureRegionFldsEN._CurrTabName, strRegionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFeatureRegionFldsObjLstCache: Array<clsFeatureRegionFldsEN> =
      JSON.parse(strTempObjLst);
    return arrFeatureRegionFldsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FeatureRegionFlds_GetObjLstCache(
  strRegionId: string,
): Promise<Array<clsFeatureRegionFldsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空！(In clsFeatureRegionFldsWApi.FeatureRegionFlds_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确！(clsFeatureRegionFldsWApi.FeatureRegionFlds_GetObjLstCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrFeatureRegionFldsObjLstCache;
  switch (clsFeatureRegionFldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstsessionStorage(
        strRegionId,
      );
      break;
    case '03': //localStorage
      arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstlocalStorage(strRegionId);
      break;
    case '02': //ClientCache
      arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstClientCache(strRegionId);
      break;
    default:
      arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstClientCache(strRegionId);
      break;
  }
  return arrFeatureRegionFldsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FeatureRegionFlds_GetObjLstPureCache(strRegionId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFeatureRegionFldsObjLstCache;
  switch (clsFeatureRegionFldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstsessionStoragePureCache(
        strRegionId,
      );
      break;
    case '03': //localStorage
      arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstlocalStoragePureCache(
        strRegionId,
      );
      break;
    case '02': //ClientCache
      arrFeatureRegionFldsObjLstCache = null;
      break;
    default:
      arrFeatureRegionFldsObjLstCache = null;
      break;
  }
  return arrFeatureRegionFldsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrViewFeatureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FeatureRegionFlds_GetSubObjLstCache(
  objFeatureRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstCache(strRegionId);
  let arrFeatureRegionFldsSel = arrFeatureRegionFldsObjLstCache;
  if (objFeatureRegionFldsCond.GetConditions().length == 0) return arrFeatureRegionFldsSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objFeatureRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFeatureRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFeatureRegionFldsCond),
      featureRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFeatureRegionFldsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewFeatureId:关键字列表
 * @returns 对象列表
 **/
export async function FeatureRegionFlds_GetObjLstByViewFeatureIdLstAsync(
  arrViewFeatureId: Array<string>,
): Promise<Array<clsFeatureRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstByViewFeatureIdLstAsync';
  const strAction = 'GetObjLstByViewFeatureIdLst';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewFeatureId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          featureRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param arrstrViewFeatureIdLst:关键字列表
 * @returns 对象列表
 */
export async function FeatureRegionFlds_GetObjLstByViewFeatureIdLstCache(
  arrViewFeatureIdLst: Array<string>,
  strRegionId: string,
) {
  const strThisFuncName = 'GetObjLstByViewFeatureIdLstCache';
  try {
    const arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstCache(strRegionId);
    const arrFeatureRegionFldsSel = arrFeatureRegionFldsObjLstCache.filter(
      (x) => arrViewFeatureIdLst.indexOf(x.viewFeatureId) > -1,
    );
    return arrFeatureRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewFeatureIdLst.join(','),
      featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFeatureRegionFldsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
          featureRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFeatureRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
          featureRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strRegionId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsFeatureRegionFldsEN>();
  const arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstCache(strRegionId);
  if (arrFeatureRegionFldsObjLstCache.length == 0) return arrFeatureRegionFldsObjLstCache;
  let arrFeatureRegionFldsSel = arrFeatureRegionFldsObjLstCache;
  const objFeatureRegionFldsCond = objPagerPara.conditionCollection;
  if (objFeatureRegionFldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsFeatureRegionFldsEN>();
  }
  //console.log("clsFeatureRegionFldsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objFeatureRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFeatureRegionFldsSel.length == 0) return arrFeatureRegionFldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.sort(
        FeatureRegionFlds_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.sort(objPagerPara.sortFun);
    }
    arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.slice(intStart, intEnd);
    return arrFeatureRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      featureRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFeatureRegionFldsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function FeatureRegionFlds_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFeatureRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFeatureRegionFldsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
          featureRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param strViewFeatureId:关键字
 * @returns 获取删除的结果
 **/
export async function FeatureRegionFlds_DelRecordAsync(strViewFeatureId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strViewFeatureId);

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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param arrViewFeatureId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function FeatureRegionFlds_DelFeatureRegionFldssAsync(
  arrViewFeatureId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFeatureRegionFldssAsync';
  const strAction = 'DelFeatureRegionFldss';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewFeatureId, config);
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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strRegionId: string,
): Promise<Array<clsFeatureRegionFldsENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrFeatureRegionFldsObjLst = await FeatureRegionFlds_GetObjLstCache(strRegionId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsFeatureRegionFldsENEx>();
  const arrFeatureRegionFldsExObjLst = arrFeatureRegionFldsObjLst.map((obj) => {
    const cacheKey = `${obj.viewFeatureId}_${obj.regionId}`;
    if (featureRegionFldsCache[cacheKey]) {
      const oldObj = featureRegionFldsCache[cacheKey];
      return oldObj;
    } else {
      const newObj = FeatureRegionFlds_CopyToEx(obj);
      arrNewObj.push(newObj);
      featureRegionFldsCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await FeatureRegionFlds_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsFeatureRegionFldsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrFeatureRegionFldsExObjLst) {
      await FeatureRegionFlds_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.viewFeatureId}_${newObj.regionId}`;
      featureRegionFldsCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrFeatureRegionFldsExObjLst.length == 0) return arrFeatureRegionFldsExObjLst;
  let arrFeatureRegionFldsSel: Array<clsFeatureRegionFldsENEx> = arrFeatureRegionFldsExObjLst;
  const objFeatureRegionFldsCond = objPagerPara.conditionCollection;
  if (objFeatureRegionFldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrFeatureRegionFldsExObjLst;
  }
  try {
    for (const objCondition of objFeatureRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFeatureRegionFldsSel.length == 0) return arrFeatureRegionFldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.sort(
        FeatureRegionFlds_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.sort(objPagerPara.sortFun);
    }
    arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.slice(intStart, intEnd);
    return arrFeatureRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      featureRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFeatureRegionFldsENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objFeatureRegionFldsENS:源对象
 * @returns 目标对象=>clsFeatureRegionFldsEN:objFeatureRegionFldsENT
 **/
export function FeatureRegionFlds_CopyToEx(
  objFeatureRegionFldsENS: clsFeatureRegionFldsEN,
): clsFeatureRegionFldsENEx {
  const strThisFuncName = FeatureRegionFlds_CopyToEx.name;
  const objFeatureRegionFldsENT = new clsFeatureRegionFldsENEx();
  try {
    ObjectAssign(objFeatureRegionFldsENT, objFeatureRegionFldsENS);
    return objFeatureRegionFldsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFeatureRegionFldsENT;
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
export function FeatureRegionFlds_FuncMapByFldName(
  strFldName: string,
  objFeatureRegionFldsEx: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFlds_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsFeatureRegionFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFeatureRegionFldsENEx.con_FeatureName:
      return FeatureRegionFlds_FuncMapFeatureName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_TabName:
      return FeatureRegionFlds_FuncMapTabName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_CtlCnName:
      return FeatureRegionFlds_FuncMapCtlCnName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_CtlTypeAbbr:
      return FeatureRegionFlds_FuncMapCtlTypeAbbr(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_ViewImplName:
      return FeatureRegionFlds_FuncMapViewImplName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_CtlTypeName:
      return FeatureRegionFlds_FuncMapCtlTypeName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_ValueGivingModeName:
      return FeatureRegionFlds_FuncMapValueGivingModeName(objFeatureRegionFldsEx);
    case clsFeatureRegionFldsENEx.con_TabFeatureName:
      return FeatureRegionFlds_FuncMapTabFeatureName(objFeatureRegionFldsEx);
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
export function FeatureRegionFlds_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFeatureRegionFldsENEx.con_FeatureName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.featureName.localeCompare(b.featureName);
        };
      case clsFeatureRegionFldsENEx.con_TabName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsFeatureRegionFldsENEx.con_RegionTypeName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.regionTypeName.localeCompare(b.regionTypeName);
        };
      case clsFeatureRegionFldsENEx.con_CtlCnName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.ctlCnName.localeCompare(b.ctlCnName);
        };
      case clsFeatureRegionFldsENEx.con_CtlTypeAbbr:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.ctlTypeAbbr.localeCompare(b.ctlTypeAbbr);
        };
      case clsFeatureRegionFldsENEx.con_ViewImplName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.viewImplName.localeCompare(b.viewImplName);
        };
      case clsFeatureRegionFldsENEx.con_CtlTypeName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      case clsFeatureRegionFldsENEx.con_ValueGivingModeName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          if (a.valueGivingModeName === null && b.valueGivingModeName === null) return 0;
          if (a.valueGivingModeName === null) return -1;
          if (b.valueGivingModeName === null) return 1;
          return a.valueGivingModeName.localeCompare(b.valueGivingModeName);
        };
      case clsFeatureRegionFldsENEx.con_TabFeatureName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          if (a.tabFeatureName === null && b.tabFeatureName === null) return 0;
          if (a.tabFeatureName === null) return -1;
          if (b.tabFeatureName === null) return 1;
          return a.tabFeatureName.localeCompare(b.tabFeatureName);
        };
      case clsFeatureRegionFldsENEx.con_RelaFldName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          if (a.relaFldName === null && b.relaFldName === null) return 0;
          if (a.relaFldName === null) return -1;
          if (b.relaFldName === null) return 1;
          return a.relaFldName.localeCompare(b.relaFldName);
        };
      case clsFeatureRegionFldsENEx.con_CtrlId:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.ctrlId.localeCompare(b.ctrlId);
        };
      case clsFeatureRegionFldsENEx.con_RegionTypeId:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.regionTypeId.localeCompare(b.regionTypeId);
        };
      case clsFeatureRegionFldsENEx.con_TrClass:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return -1;
          if (b.trClass === null) return 1;
          return a.trClass.localeCompare(b.trClass);
        };
      case clsFeatureRegionFldsENEx.con_RegionName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return a.regionName.localeCompare(b.regionName);
        };
      case clsFeatureRegionFldsENEx.con_TabNameEx:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          if (a.tabNameEx === null && b.tabNameEx === null) return 0;
          if (a.tabNameEx === null) return -1;
          if (b.tabNameEx === null) return 1;
          return a.tabNameEx.localeCompare(b.tabNameEx);
        };
      case clsFeatureRegionFldsENEx.con_CommandNameEx:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          if (a.commandNameEx === null && b.commandNameEx === null) return 0;
          if (a.commandNameEx === null) return -1;
          if (b.commandNameEx === null) return 1;
          return a.commandNameEx.localeCompare(b.commandNameEx);
        };
      case clsFeatureRegionFldsENEx.con_TdClass:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          if (a.tdClass === null && b.tdClass === null) return 0;
          if (a.tdClass === null) return -1;
          if (b.tdClass === null) return 1;
          return a.tdClass.localeCompare(b.tdClass);
        };
      default:
        return FeatureRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFeatureRegionFldsENEx.con_FeatureName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.featureName.localeCompare(a.featureName);
        };
      case clsFeatureRegionFldsENEx.con_TabName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsFeatureRegionFldsENEx.con_RegionTypeName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.regionTypeName.localeCompare(a.regionTypeName);
        };
      case clsFeatureRegionFldsENEx.con_CtlCnName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.ctlCnName.localeCompare(a.ctlCnName);
        };
      case clsFeatureRegionFldsENEx.con_CtlTypeAbbr:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.ctlTypeAbbr.localeCompare(a.ctlTypeAbbr);
        };
      case clsFeatureRegionFldsENEx.con_ViewImplName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.viewImplName.localeCompare(a.viewImplName);
        };
      case clsFeatureRegionFldsENEx.con_CtlTypeName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      case clsFeatureRegionFldsENEx.con_ValueGivingModeName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          if (a.valueGivingModeName === null && b.valueGivingModeName === null) return 0;
          if (a.valueGivingModeName === null) return 1;
          if (b.valueGivingModeName === null) return -1;
          return b.valueGivingModeName.localeCompare(a.valueGivingModeName);
        };
      case clsFeatureRegionFldsENEx.con_TabFeatureName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          if (a.tabFeatureName === null && b.tabFeatureName === null) return 0;
          if (a.tabFeatureName === null) return 1;
          if (b.tabFeatureName === null) return -1;
          return b.tabFeatureName.localeCompare(a.tabFeatureName);
        };
      case clsFeatureRegionFldsENEx.con_RelaFldName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          if (a.relaFldName === null && b.relaFldName === null) return 0;
          if (a.relaFldName === null) return 1;
          if (b.relaFldName === null) return -1;
          return b.relaFldName.localeCompare(a.relaFldName);
        };
      case clsFeatureRegionFldsENEx.con_CtrlId:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.ctrlId.localeCompare(a.ctrlId);
        };
      case clsFeatureRegionFldsENEx.con_RegionTypeId:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.regionTypeId.localeCompare(a.regionTypeId);
        };
      case clsFeatureRegionFldsENEx.con_TrClass:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return 1;
          if (b.trClass === null) return -1;
          return b.trClass.localeCompare(a.trClass);
        };
      case clsFeatureRegionFldsENEx.con_RegionName:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          return b.regionName.localeCompare(a.regionName);
        };
      case clsFeatureRegionFldsENEx.con_TabNameEx:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          if (a.tabNameEx === null && b.tabNameEx === null) return 0;
          if (a.tabNameEx === null) return 1;
          if (b.tabNameEx === null) return -1;
          return b.tabNameEx.localeCompare(a.tabNameEx);
        };
      case clsFeatureRegionFldsENEx.con_CommandNameEx:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          if (a.commandNameEx === null && b.commandNameEx === null) return 0;
          if (a.commandNameEx === null) return 1;
          if (b.commandNameEx === null) return -1;
          return b.commandNameEx.localeCompare(a.commandNameEx);
        };
      case clsFeatureRegionFldsENEx.con_TdClass:
        return (a: clsFeatureRegionFldsENEx, b: clsFeatureRegionFldsENEx) => {
          if (a.tdClass === null && b.tdClass === null) return 0;
          if (a.tdClass === null) return 1;
          if (b.tdClass === null) return -1;
          return b.tdClass.localeCompare(a.tdClass);
        };
      default:
        return FeatureRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFlds_FuncMapFeatureName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFlds_FuncMapFeatureName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.featureName) == true) {
      const PrjFeatureFeatureId = objFeatureRegionFlds.featureId;
      const PrjFeatureFeatureName = await PrjFeature_func(
        clsPrjFeatureEN.con_FeatureId,
        clsPrjFeatureEN.con_FeatureName,
        PrjFeatureFeatureId,
      );
      objFeatureRegionFlds.featureName = PrjFeatureFeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001341)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFlds_FuncMapTabName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFlds_FuncMapTabName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.tabName) == true) {
      const vPrjTabSimTabId = objFeatureRegionFlds.releTabId;
      objFeatureRegionFlds.tabName = vPrjTabSimTabId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001298)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFlds_FuncMapCtlCnName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFlds_FuncMapCtlCnName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.ctlCnName) == true) {
      const CtlTypeCtlTypeId = objFeatureRegionFlds.ctlTypeId;
      const CtlTypeCtlCnName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlCnName,
        CtlTypeCtlTypeId,
      );
      objFeatureRegionFlds.ctlCnName = CtlTypeCtlCnName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001303)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFlds_FuncMapCtlTypeAbbr(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFlds_FuncMapCtlTypeAbbr.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.ctlTypeAbbr) == true) {
      const CtlTypeCtlTypeId = objFeatureRegionFlds.ctlTypeId;
      const CtlTypeCtlTypeAbbr = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeAbbr,
        CtlTypeCtlTypeId,
      );
      objFeatureRegionFlds.ctlTypeAbbr = CtlTypeCtlTypeAbbr;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001304)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFlds_FuncMapViewImplName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFlds_FuncMapViewImplName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.viewImplName) == true) {
      const ViewImplementationViewImplId = objFeatureRegionFlds.viewImplId;
      const ViewImplementationViewImplName = await ViewImplementation_func(
        clsViewImplementationEN.con_ViewImplId,
        clsViewImplementationEN.con_ViewImplName,
        ViewImplementationViewImplId,
      );
      objFeatureRegionFlds.viewImplName = ViewImplementationViewImplName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001345)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFlds_FuncMapCtlTypeName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFlds_FuncMapCtlTypeName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.ctlTypeName) == true) {
      const CtlTypeCtlTypeId = objFeatureRegionFlds.ctlTypeId;
      const CtlTypeCtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlTypeCtlTypeId,
      );
      objFeatureRegionFlds.ctlTypeName = CtlTypeCtlTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001301)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFlds_FuncMapValueGivingModeName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFlds_FuncMapValueGivingModeName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.valueGivingModeName) == true) {
      const ValueGivingModeValueGivingModeId = objFeatureRegionFlds.valueGivingModeId;
      const ValueGivingModeValueGivingModeName = await ValueGivingMode_func(
        clsValueGivingModeEN.con_ValueGivingModeId,
        clsValueGivingModeEN.con_ValueGivingModeName,
        ValueGivingModeValueGivingModeId,
      );
      objFeatureRegionFlds.valueGivingModeName = ValueGivingModeValueGivingModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001346)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFeatureRegionFldsS:源对象
 **/
export async function FeatureRegionFlds_FuncMapTabFeatureName(
  objFeatureRegionFlds: clsFeatureRegionFldsENEx,
) {
  const strThisFuncName = FeatureRegionFlds_FuncMapTabFeatureName.name;
  try {
    if (IsNullOrEmpty(objFeatureRegionFlds.tabFeatureName) == true) {
      const TabFeatureTabFeatureId = objFeatureRegionFlds.tabFeatureId;
      if (IsNullOrEmpty(objFeatureRegionFlds.prjId) == true) {
        const strMsg = `函数映射[TabFeatureName]数据出错,prjId不能为空!(in ${featureRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const TabFeatureTabFeatureName = await TabFeature_func(
        clsTabFeatureEN.con_TabFeatureId,
        clsTabFeatureEN.con_TabFeatureName,
        TabFeatureTabFeatureId,
        objFeatureRegionFlds.prjId,
      );
      objFeatureRegionFlds.tabFeatureName = TabFeatureTabFeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001347)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_DelFeatureRegionFldssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFeatureRegionFldssByCondAsync';
  const strAction = 'DelFeatureRegionFldssByCond';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param objFeatureRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FeatureRegionFlds_AddNewRecordAsync(
  objFeatureRegionFldsEN: clsFeatureRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFeatureRegionFldsEN);
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureRegionFldsEN, config);
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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param objFeatureRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FeatureRegionFlds_AddNewRecordWithMaxIdAsync(
  objFeatureRegionFldsEN: clsFeatureRegionFldsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureRegionFldsEN, config);
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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param objFeatureRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FeatureRegionFlds_GoTopAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param objFeatureRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FeatureRegionFlds_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFeatureRegionFldsEN);
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param objFeatureRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FeatureRegionFlds_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFeatureRegionFldsEN);
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_AddNewObjSave(
  objFeatureRegionFldsEN: clsFeatureRegionFldsEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    FeatureRegionFlds_CheckPropertyNew(objFeatureRegionFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${featureRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FeatureRegionFlds_CheckUniCond4Add(objFeatureRegionFldsEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await FeatureRegionFlds_AddNewRecordWithMaxIdAsync(objFeatureRegionFldsEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      FeatureRegionFlds_ReFreshCache(objFeatureRegionFldsEN.regionId);
    } else {
      const strInfo = `添加[功能区域字段(FeatureRegionFlds)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${featureRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function FeatureRegionFlds_CheckUniCond4Add(
  objFeatureRegionFldsEN: clsFeatureRegionFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = FeatureRegionFlds_GetUniCondStr(objFeatureRegionFldsEN);
  const bolIsExistCondition = await FeatureRegionFlds_IsExistRecordAsync(strUniquenessCondition);
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
export async function FeatureRegionFlds_CheckUniCond4Update(
  objFeatureRegionFldsEN: clsFeatureRegionFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = FeatureRegionFlds_GetUniCondStr4Update(objFeatureRegionFldsEN);
  const bolIsExistCondition = await FeatureRegionFlds_IsExistRecordAsync(strUniquenessCondition);
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
export async function FeatureRegionFlds_UpdateObjSave(
  objFeatureRegionFldsEN: clsFeatureRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFeatureRegionFldsEN.sfUpdFldSetStr = objFeatureRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objFeatureRegionFldsEN.viewFeatureId == '' ||
    objFeatureRegionFldsEN.viewFeatureId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    FeatureRegionFlds_CheckProperty4Update(objFeatureRegionFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${featureRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FeatureRegionFlds_CheckUniCond4Update(objFeatureRegionFldsEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await FeatureRegionFlds_UpdateRecordAsync(objFeatureRegionFldsEN);
    if (returnBool == true) {
      FeatureRegionFlds_ReFreshCache(objFeatureRegionFldsEN.regionId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${featureRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objFeatureRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FeatureRegionFlds_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFeatureRegionFldsEN);
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param objFeatureRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FeatureRegionFlds_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objFeatureRegionFldsEN);
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param objFeatureRegionFldsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FeatureRegionFlds_AddNewRecordWithReturnKeyAsync(
  objFeatureRegionFldsEN: clsFeatureRegionFldsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureRegionFldsEN, config);
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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param objFeatureRegionFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FeatureRegionFlds_UpdateRecordAsync(
  objFeatureRegionFldsEN: clsFeatureRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFeatureRegionFldsEN.sfUpdFldSetStr === undefined ||
    objFeatureRegionFldsEN.sfUpdFldSetStr === null ||
    objFeatureRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFeatureRegionFldsEN.viewFeatureId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureRegionFldsEN, config);
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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param objFeatureRegionFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FeatureRegionFlds_EditRecordExAsync(
  objFeatureRegionFldsEN: clsFeatureRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFeatureRegionFldsEN.sfUpdFldSetStr === undefined ||
    objFeatureRegionFldsEN.sfUpdFldSetStr === null ||
    objFeatureRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFeatureRegionFldsEN.viewFeatureId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureRegionFldsEN, config);
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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param objFeatureRegionFldsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FeatureRegionFlds_UpdateWithConditionAsync(
  objFeatureRegionFldsEN: clsFeatureRegionFldsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFeatureRegionFldsEN.sfUpdFldSetStr === undefined ||
    objFeatureRegionFldsEN.sfUpdFldSetStr === null ||
    objFeatureRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFeatureRegionFldsEN.viewFeatureId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);
  objFeatureRegionFldsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureRegionFldsEN, config);
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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param objstrViewFeatureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FeatureRegionFlds_IsExistRecordCache(
  objFeatureRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstCache(strRegionId);
  if (arrFeatureRegionFldsObjLstCache == null) return false;
  let arrFeatureRegionFldsSel = arrFeatureRegionFldsObjLstCache;
  if (objFeatureRegionFldsCond.GetConditions().length == 0)
    return arrFeatureRegionFldsSel.length > 0 ? true : false;
  try {
    for (const objCondition of objFeatureRegionFldsCond.GetConditions()) {
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
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFeatureRegionFldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFeatureRegionFldsCond),
      featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param strViewFeatureId:所给的关键字
 * @returns 对象
 */
export async function FeatureRegionFlds_IsExistCache(
  strViewFeatureId: string,
  strRegionId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstCache(strRegionId);
  if (arrFeatureRegionFldsObjLstCache == null) return false;
  try {
    const arrFeatureRegionFldsSel = arrFeatureRegionFldsObjLstCache.filter(
      (x) => x.viewFeatureId == strViewFeatureId,
    );
    if (arrFeatureRegionFldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strViewFeatureId,
      featureRegionFlds_ConstructorName,
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
 * @param strViewFeatureId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function FeatureRegionFlds_IsExistAsync(strViewFeatureId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewFeatureId,
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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
 * @param objFeatureRegionFldsCond:条件对象
 * @returns 对象列表记录数
 */
export async function FeatureRegionFlds_GetRecCountByCondCache(
  objFeatureRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFeatureRegionFldsObjLstCache = await FeatureRegionFlds_GetObjLstCache(strRegionId);
  if (arrFeatureRegionFldsObjLstCache == null) return 0;
  let arrFeatureRegionFldsSel = arrFeatureRegionFldsObjLstCache;
  if (objFeatureRegionFldsCond.GetConditions().length == 0) return arrFeatureRegionFldsSel.length;
  try {
    for (const objCondition of objFeatureRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureRegionFldsSel = arrFeatureRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFeatureRegionFldsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFeatureRegionFldsCond),
      featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
export async function FeatureRegionFlds_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(featureRegionFlds_Controller, strAction);

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
        featureRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureRegionFlds_ConstructorName,
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
export function FeatureRegionFlds_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FeatureRegionFlds_ReFreshCache(strRegionId: string): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsFeatureRegionFldsWApi.clsFeatureRegionFldsWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsFeatureRegionFldsWApi.clsFeatureRegionFldsWApi.ReFreshCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsFeatureRegionFldsEN._CurrTabName, strRegionId);
  switch (clsFeatureRegionFldsEN.CacheModeId) {
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
  clsFeatureRegionFldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function FeatureRegionFlds_ReFreshThisCache(strRegionId: string): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsFeatureRegionFldsWApi.FeatureRegionFlds_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsFeatureRegionFldsWApi.FeatureRegionFlds_ReFreshThisCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsFeatureRegionFldsEN._CurrTabName, strRegionId);
    switch (clsFeatureRegionFldsEN.CacheModeId) {
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
    clsFeatureRegionFldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function FeatureRegionFlds_GetLastRefreshTime(): string {
  if (clsFeatureRegionFldsEN._RefreshTimeLst.length == 0) return '';
  return clsFeatureRegionFldsEN._RefreshTimeLst[clsFeatureRegionFldsEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FeatureRegionFlds_CheckPropertyNew(
  pobjFeatureRegionFldsEN: clsFeatureRegionFldsEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjFeatureRegionFldsEN.regionId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[区域Id]不能为空(In 功能区域字段)!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.featureId) === true ||
    pobjFeatureRegionFldsEN.featureId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[功能Id]不能为空(In 功能区域字段)!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjFeatureRegionFldsEN.buttonName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[按钮名称]不能为空(In 功能区域字段)!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjFeatureRegionFldsEN.buttonName4Mvc) === true) {
    throw new Error(
      `(errid:Watl000411)字段[按钮名称4Mvc]不能为空(In 功能区域字段)!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjFeatureRegionFldsEN.text) === true) {
    throw new Error(
      `(errid:Watl000411)字段[文本]不能为空(In 功能区域字段)!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjFeatureRegionFldsEN.releTabId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[相关表Id]不能为空(In 功能区域字段)!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.viewImplId) === true ||
    pobjFeatureRegionFldsEN.viewImplId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[界面实现Id]不能为空(In 功能区域字段)!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.prjId) === true ||
    pobjFeatureRegionFldsEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 功能区域字段)!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjFeatureRegionFldsEN.updUser) === true) {
    throw new Error(
      `(errid:Watl000411)字段[修改者]不能为空(In 功能区域字段)!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.viewFeatureId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.viewFeatureId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面功能Id(viewFeatureId)]的长度不能超过8(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.viewFeatureId}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.regionId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域Id(regionId)]的长度不能超过10(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.regionId}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.featureId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.featureId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能Id(featureId)]的长度不能超过4(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.featureId}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.tabFeatureId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.tabFeatureId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表功能Id(tabFeatureId)]的长度不能超过8(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.tabFeatureId}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.checkTabFeature) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.checkTabFeature) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[检查表功能(checkTabFeature)]的长度不能超过50(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.checkTabFeature}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.featureDescription) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.featureDescription) > 4000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能说明(featureDescription)]的长度不能超过4000(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.featureDescription}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.buttonName) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.buttonName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[按钮名称(buttonName)]的长度不能超过30(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.buttonName}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.buttonName4Mvc) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.buttonName4Mvc) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[按钮名称4Mvc(buttonName4Mvc)]的长度不能超过30(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.buttonName4Mvc}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.commandName) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.commandName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[命令名(commandName)]的长度不能超过30(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.commandName}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.valueGivingModeId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.valueGivingModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[给值方式Id(valueGivingModeId)]的长度不能超过2(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.valueGivingModeId}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.funcName) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.funcName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数名(funcName)]的长度不能超过100(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.funcName}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.defaultValue) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.defaultValue) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[缺省值(defaultValue)]的长度不能超过50(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.defaultValue}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.keyIdGetModeId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.keyIdGetModeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[GC关键字获取方式Id(keyIdGetModeId)]的长度不能超过4(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.keyIdGetModeId}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.text) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.text) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[文本(text)]的长度不能超过30(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.text}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.groupName) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.groupName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[组名(groupName)]的长度不能超过30(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.groupName}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.releTabId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.releTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[相关表Id(releTabId)]的长度不能超过8(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.releTabId}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.releFldId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.releFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[相关字段Id(releFldId)]的长度不能超过8(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.releFldId}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.eventFuncName) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.eventFuncName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[事件函数名(eventFuncName)]的长度不能超过50(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.eventFuncName}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.fieldTypeId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.fieldTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.fieldTypeId}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.viewImplId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.viewImplId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面实现Id(viewImplId)]的长度不能超过4(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.viewImplId}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.ctlTypeId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.ctlTypeId}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.cssClass) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.cssClass) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[样式表(cssClass)]的长度不能超过50(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.cssClass}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.imageUrl) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.imageUrl) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[图片资源(imageUrl)]的长度不能超过100(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.imageUrl}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.errMsg) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.errMsg}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.prjId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.prjId}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.updUser) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.updUser}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.updDate) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.updDate}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.memo) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.memo}(clsFeatureRegionFldsBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.viewFeatureId) == false &&
    undefined !== pobjFeatureRegionFldsEN.viewFeatureId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.viewFeatureId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面功能Id(viewFeatureId)]的值:[${pobjFeatureRegionFldsEN.viewFeatureId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.regionId) == false &&
    undefined !== pobjFeatureRegionFldsEN.regionId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域Id(regionId)]的值:[${pobjFeatureRegionFldsEN.regionId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.featureId) == false &&
    undefined !== pobjFeatureRegionFldsEN.featureId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.featureId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能Id(featureId)]的值:[${pobjFeatureRegionFldsEN.featureId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.tabFeatureId) == false &&
    undefined !== pobjFeatureRegionFldsEN.tabFeatureId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.tabFeatureId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表功能Id(tabFeatureId)]的值:[${pobjFeatureRegionFldsEN.tabFeatureId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.checkTabFeature) == false &&
    undefined !== pobjFeatureRegionFldsEN.checkTabFeature &&
    tzDataType.isString(pobjFeatureRegionFldsEN.checkTabFeature) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[检查表功能(checkTabFeature)]的值:[${pobjFeatureRegionFldsEN.checkTabFeature}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.featureDescription) == false &&
    undefined !== pobjFeatureRegionFldsEN.featureDescription &&
    tzDataType.isString(pobjFeatureRegionFldsEN.featureDescription) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能说明(featureDescription)]的值:[${pobjFeatureRegionFldsEN.featureDescription}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.buttonName) == false &&
    undefined !== pobjFeatureRegionFldsEN.buttonName &&
    tzDataType.isString(pobjFeatureRegionFldsEN.buttonName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[按钮名称(buttonName)]的值:[${pobjFeatureRegionFldsEN.buttonName}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.buttonName4Mvc) == false &&
    undefined !== pobjFeatureRegionFldsEN.buttonName4Mvc &&
    tzDataType.isString(pobjFeatureRegionFldsEN.buttonName4Mvc) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[按钮名称4Mvc(buttonName4Mvc)]的值:[${pobjFeatureRegionFldsEN.buttonName4Mvc}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.commandName) == false &&
    undefined !== pobjFeatureRegionFldsEN.commandName &&
    tzDataType.isString(pobjFeatureRegionFldsEN.commandName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[命令名(commandName)]的值:[${pobjFeatureRegionFldsEN.commandName}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.valueGivingModeId) == false &&
    undefined !== pobjFeatureRegionFldsEN.valueGivingModeId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.valueGivingModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[给值方式Id(valueGivingModeId)]的值:[${pobjFeatureRegionFldsEN.valueGivingModeId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.funcName) == false &&
    undefined !== pobjFeatureRegionFldsEN.funcName &&
    tzDataType.isString(pobjFeatureRegionFldsEN.funcName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数名(funcName)]的值:[${pobjFeatureRegionFldsEN.funcName}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.defaultValue) == false &&
    undefined !== pobjFeatureRegionFldsEN.defaultValue &&
    tzDataType.isString(pobjFeatureRegionFldsEN.defaultValue) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缺省值(defaultValue)]的值:[${pobjFeatureRegionFldsEN.defaultValue}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.keyIdGetModeId) == false &&
    undefined !== pobjFeatureRegionFldsEN.keyIdGetModeId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.keyIdGetModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[GC关键字获取方式Id(keyIdGetModeId)]的值:[${pobjFeatureRegionFldsEN.keyIdGetModeId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.text) == false &&
    undefined !== pobjFeatureRegionFldsEN.text &&
    tzDataType.isString(pobjFeatureRegionFldsEN.text) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[文本(text)]的值:[${pobjFeatureRegionFldsEN.text}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.groupName) == false &&
    undefined !== pobjFeatureRegionFldsEN.groupName &&
    tzDataType.isString(pobjFeatureRegionFldsEN.groupName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[组名(groupName)]的值:[${pobjFeatureRegionFldsEN.groupName}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.releTabId) == false &&
    undefined !== pobjFeatureRegionFldsEN.releTabId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.releTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[相关表Id(releTabId)]的值:[${pobjFeatureRegionFldsEN.releTabId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.releFldId) == false &&
    undefined !== pobjFeatureRegionFldsEN.releFldId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.releFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[相关字段Id(releFldId)]的值:[${pobjFeatureRegionFldsEN.releFldId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.eventFuncName) == false &&
    undefined !== pobjFeatureRegionFldsEN.eventFuncName &&
    tzDataType.isString(pobjFeatureRegionFldsEN.eventFuncName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[事件函数名(eventFuncName)]的值:[${pobjFeatureRegionFldsEN.eventFuncName}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.fieldTypeId) == false &&
    undefined !== pobjFeatureRegionFldsEN.fieldTypeId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.fieldTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段类型Id(fieldTypeId)]的值:[${pobjFeatureRegionFldsEN.fieldTypeId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.viewImplId) == false &&
    undefined !== pobjFeatureRegionFldsEN.viewImplId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.viewImplId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面实现Id(viewImplId)]的值:[${pobjFeatureRegionFldsEN.viewImplId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.ctlTypeId) == false &&
    undefined !== pobjFeatureRegionFldsEN.ctlTypeId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[控件类型号(ctlTypeId)]的值:[${pobjFeatureRegionFldsEN.ctlTypeId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFeatureRegionFldsEN.height &&
    undefined !== pobjFeatureRegionFldsEN.height &&
    tzDataType.isNumber(pobjFeatureRegionFldsEN.height) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[高度(height)]的值:[${pobjFeatureRegionFldsEN.height}], 非法,应该为数值型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFeatureRegionFldsEN.width &&
    undefined !== pobjFeatureRegionFldsEN.width &&
    tzDataType.isNumber(pobjFeatureRegionFldsEN.width) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[宽(width)]的值:[${pobjFeatureRegionFldsEN.width}], 非法,应该为数值型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFeatureRegionFldsEN.seqNum &&
    undefined !== pobjFeatureRegionFldsEN.seqNum &&
    tzDataType.isNumber(pobjFeatureRegionFldsEN.seqNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段序号(seqNum)]的值:[${pobjFeatureRegionFldsEN.seqNum}], 非法,应该为数值型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.cssClass) == false &&
    undefined !== pobjFeatureRegionFldsEN.cssClass &&
    tzDataType.isString(pobjFeatureRegionFldsEN.cssClass) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[样式表(cssClass)]的值:[${pobjFeatureRegionFldsEN.cssClass}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.imageUrl) == false &&
    undefined !== pobjFeatureRegionFldsEN.imageUrl &&
    tzDataType.isString(pobjFeatureRegionFldsEN.imageUrl) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[图片资源(imageUrl)]的值:[${pobjFeatureRegionFldsEN.imageUrl}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFeatureRegionFldsEN.inUse &&
    undefined !== pobjFeatureRegionFldsEN.inUse &&
    tzDataType.isBoolean(pobjFeatureRegionFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjFeatureRegionFldsEN.inUse}], 非法,应该为布尔型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.errMsg) == false &&
    undefined !== pobjFeatureRegionFldsEN.errMsg &&
    tzDataType.isString(pobjFeatureRegionFldsEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjFeatureRegionFldsEN.errMsg}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.prjId) == false &&
    undefined !== pobjFeatureRegionFldsEN.prjId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjFeatureRegionFldsEN.prjId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.updUser) == false &&
    undefined !== pobjFeatureRegionFldsEN.updUser &&
    tzDataType.isString(pobjFeatureRegionFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjFeatureRegionFldsEN.updUser}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.updDate) == false &&
    undefined !== pobjFeatureRegionFldsEN.updDate &&
    tzDataType.isString(pobjFeatureRegionFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjFeatureRegionFldsEN.updDate}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.memo) == false &&
    undefined !== pobjFeatureRegionFldsEN.memo &&
    tzDataType.isString(pobjFeatureRegionFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFeatureRegionFldsEN.memo}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.regionId) == false &&
    pobjFeatureRegionFldsEN.regionId != '[nuull]' &&
    GetStrLen(pobjFeatureRegionFldsEN.regionId) != 10
  ) {
    throw '(errid:Watl000415)字段[区域Id]作为外键字段,长度应该为10(In 功能区域字段)!(clsFeatureRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.ctlTypeId) == false &&
    pobjFeatureRegionFldsEN.ctlTypeId != '[nuull]' &&
    GetStrLen(pobjFeatureRegionFldsEN.ctlTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[控件类型号]作为外键字段,长度应该为2(In 功能区域字段)!(clsFeatureRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.prjId) == false &&
    pobjFeatureRegionFldsEN.prjId != '[nuull]' &&
    GetStrLen(pobjFeatureRegionFldsEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程Id]作为外键字段,长度应该为4(In 功能区域字段)!(clsFeatureRegionFldsBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FeatureRegionFlds_CheckProperty4Update(
  pobjFeatureRegionFldsEN: clsFeatureRegionFldsEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.viewFeatureId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.viewFeatureId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面功能Id(viewFeatureId)]的长度不能超过8(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.viewFeatureId}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.regionId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域Id(regionId)]的长度不能超过10(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.regionId}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.featureId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.featureId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能Id(featureId)]的长度不能超过4(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.featureId}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.tabFeatureId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.tabFeatureId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表功能Id(tabFeatureId)]的长度不能超过8(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.tabFeatureId}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.checkTabFeature) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.checkTabFeature) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[检查表功能(checkTabFeature)]的长度不能超过50(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.checkTabFeature}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.featureDescription) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.featureDescription) > 4000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能说明(featureDescription)]的长度不能超过4000(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.featureDescription}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.buttonName) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.buttonName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[按钮名称(buttonName)]的长度不能超过30(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.buttonName}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.buttonName4Mvc) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.buttonName4Mvc) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[按钮名称4Mvc(buttonName4Mvc)]的长度不能超过30(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.buttonName4Mvc}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.commandName) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.commandName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[命令名(commandName)]的长度不能超过30(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.commandName}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.valueGivingModeId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.valueGivingModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[给值方式Id(valueGivingModeId)]的长度不能超过2(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.valueGivingModeId}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.funcName) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.funcName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数名(funcName)]的长度不能超过100(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.funcName}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.defaultValue) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.defaultValue) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[缺省值(defaultValue)]的长度不能超过50(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.defaultValue}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.keyIdGetModeId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.keyIdGetModeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[GC关键字获取方式Id(keyIdGetModeId)]的长度不能超过4(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.keyIdGetModeId}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.text) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.text) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[文本(text)]的长度不能超过30(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.text}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.groupName) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.groupName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[组名(groupName)]的长度不能超过30(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.groupName}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.releTabId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.releTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[相关表Id(releTabId)]的长度不能超过8(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.releTabId}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.releFldId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.releFldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[相关字段Id(releFldId)]的长度不能超过8(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.releFldId}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.eventFuncName) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.eventFuncName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[事件函数名(eventFuncName)]的长度不能超过50(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.eventFuncName}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.fieldTypeId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.fieldTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.fieldTypeId}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.viewImplId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.viewImplId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面实现Id(viewImplId)]的长度不能超过4(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.viewImplId}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.ctlTypeId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.ctlTypeId}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.cssClass) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.cssClass) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[样式表(cssClass)]的长度不能超过50(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.cssClass}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.imageUrl) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.imageUrl) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[图片资源(imageUrl)]的长度不能超过100(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.imageUrl}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.errMsg) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.errMsg}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.prjId) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.prjId}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.updUser) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.updUser}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.updDate) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.updDate}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.memo) == false &&
    GetStrLen(pobjFeatureRegionFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 功能区域字段(FeatureRegionFlds))!值:${pobjFeatureRegionFldsEN.memo}(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.viewFeatureId) == false &&
    undefined !== pobjFeatureRegionFldsEN.viewFeatureId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.viewFeatureId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面功能Id(viewFeatureId)]的值:[${pobjFeatureRegionFldsEN.viewFeatureId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.regionId) == false &&
    undefined !== pobjFeatureRegionFldsEN.regionId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域Id(regionId)]的值:[${pobjFeatureRegionFldsEN.regionId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.featureId) == false &&
    undefined !== pobjFeatureRegionFldsEN.featureId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.featureId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能Id(featureId)]的值:[${pobjFeatureRegionFldsEN.featureId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.tabFeatureId) == false &&
    undefined !== pobjFeatureRegionFldsEN.tabFeatureId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.tabFeatureId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表功能Id(tabFeatureId)]的值:[${pobjFeatureRegionFldsEN.tabFeatureId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.checkTabFeature) == false &&
    undefined !== pobjFeatureRegionFldsEN.checkTabFeature &&
    tzDataType.isString(pobjFeatureRegionFldsEN.checkTabFeature) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[检查表功能(checkTabFeature)]的值:[${pobjFeatureRegionFldsEN.checkTabFeature}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.featureDescription) == false &&
    undefined !== pobjFeatureRegionFldsEN.featureDescription &&
    tzDataType.isString(pobjFeatureRegionFldsEN.featureDescription) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能说明(featureDescription)]的值:[${pobjFeatureRegionFldsEN.featureDescription}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.buttonName) == false &&
    undefined !== pobjFeatureRegionFldsEN.buttonName &&
    tzDataType.isString(pobjFeatureRegionFldsEN.buttonName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[按钮名称(buttonName)]的值:[${pobjFeatureRegionFldsEN.buttonName}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.buttonName4Mvc) == false &&
    undefined !== pobjFeatureRegionFldsEN.buttonName4Mvc &&
    tzDataType.isString(pobjFeatureRegionFldsEN.buttonName4Mvc) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[按钮名称4Mvc(buttonName4Mvc)]的值:[${pobjFeatureRegionFldsEN.buttonName4Mvc}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.commandName) == false &&
    undefined !== pobjFeatureRegionFldsEN.commandName &&
    tzDataType.isString(pobjFeatureRegionFldsEN.commandName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[命令名(commandName)]的值:[${pobjFeatureRegionFldsEN.commandName}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.valueGivingModeId) == false &&
    undefined !== pobjFeatureRegionFldsEN.valueGivingModeId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.valueGivingModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[给值方式Id(valueGivingModeId)]的值:[${pobjFeatureRegionFldsEN.valueGivingModeId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.funcName) == false &&
    undefined !== pobjFeatureRegionFldsEN.funcName &&
    tzDataType.isString(pobjFeatureRegionFldsEN.funcName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数名(funcName)]的值:[${pobjFeatureRegionFldsEN.funcName}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.defaultValue) == false &&
    undefined !== pobjFeatureRegionFldsEN.defaultValue &&
    tzDataType.isString(pobjFeatureRegionFldsEN.defaultValue) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缺省值(defaultValue)]的值:[${pobjFeatureRegionFldsEN.defaultValue}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.keyIdGetModeId) == false &&
    undefined !== pobjFeatureRegionFldsEN.keyIdGetModeId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.keyIdGetModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[GC关键字获取方式Id(keyIdGetModeId)]的值:[${pobjFeatureRegionFldsEN.keyIdGetModeId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.text) == false &&
    undefined !== pobjFeatureRegionFldsEN.text &&
    tzDataType.isString(pobjFeatureRegionFldsEN.text) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[文本(text)]的值:[${pobjFeatureRegionFldsEN.text}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.groupName) == false &&
    undefined !== pobjFeatureRegionFldsEN.groupName &&
    tzDataType.isString(pobjFeatureRegionFldsEN.groupName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[组名(groupName)]的值:[${pobjFeatureRegionFldsEN.groupName}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.releTabId) == false &&
    undefined !== pobjFeatureRegionFldsEN.releTabId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.releTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[相关表Id(releTabId)]的值:[${pobjFeatureRegionFldsEN.releTabId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.releFldId) == false &&
    undefined !== pobjFeatureRegionFldsEN.releFldId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.releFldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[相关字段Id(releFldId)]的值:[${pobjFeatureRegionFldsEN.releFldId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.eventFuncName) == false &&
    undefined !== pobjFeatureRegionFldsEN.eventFuncName &&
    tzDataType.isString(pobjFeatureRegionFldsEN.eventFuncName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[事件函数名(eventFuncName)]的值:[${pobjFeatureRegionFldsEN.eventFuncName}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.fieldTypeId) == false &&
    undefined !== pobjFeatureRegionFldsEN.fieldTypeId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.fieldTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段类型Id(fieldTypeId)]的值:[${pobjFeatureRegionFldsEN.fieldTypeId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.viewImplId) == false &&
    undefined !== pobjFeatureRegionFldsEN.viewImplId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.viewImplId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面实现Id(viewImplId)]的值:[${pobjFeatureRegionFldsEN.viewImplId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.ctlTypeId) == false &&
    undefined !== pobjFeatureRegionFldsEN.ctlTypeId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[控件类型号(ctlTypeId)]的值:[${pobjFeatureRegionFldsEN.ctlTypeId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFeatureRegionFldsEN.height &&
    undefined !== pobjFeatureRegionFldsEN.height &&
    tzDataType.isNumber(pobjFeatureRegionFldsEN.height) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[高度(height)]的值:[${pobjFeatureRegionFldsEN.height}], 非法,应该为数值型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFeatureRegionFldsEN.width &&
    undefined !== pobjFeatureRegionFldsEN.width &&
    tzDataType.isNumber(pobjFeatureRegionFldsEN.width) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[宽(width)]的值:[${pobjFeatureRegionFldsEN.width}], 非法,应该为数值型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFeatureRegionFldsEN.seqNum &&
    undefined !== pobjFeatureRegionFldsEN.seqNum &&
    tzDataType.isNumber(pobjFeatureRegionFldsEN.seqNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段序号(seqNum)]的值:[${pobjFeatureRegionFldsEN.seqNum}], 非法,应该为数值型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.cssClass) == false &&
    undefined !== pobjFeatureRegionFldsEN.cssClass &&
    tzDataType.isString(pobjFeatureRegionFldsEN.cssClass) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[样式表(cssClass)]的值:[${pobjFeatureRegionFldsEN.cssClass}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.imageUrl) == false &&
    undefined !== pobjFeatureRegionFldsEN.imageUrl &&
    tzDataType.isString(pobjFeatureRegionFldsEN.imageUrl) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[图片资源(imageUrl)]的值:[${pobjFeatureRegionFldsEN.imageUrl}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFeatureRegionFldsEN.inUse &&
    undefined !== pobjFeatureRegionFldsEN.inUse &&
    tzDataType.isBoolean(pobjFeatureRegionFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjFeatureRegionFldsEN.inUse}], 非法,应该为布尔型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.errMsg) == false &&
    undefined !== pobjFeatureRegionFldsEN.errMsg &&
    tzDataType.isString(pobjFeatureRegionFldsEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjFeatureRegionFldsEN.errMsg}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.prjId) == false &&
    undefined !== pobjFeatureRegionFldsEN.prjId &&
    tzDataType.isString(pobjFeatureRegionFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjFeatureRegionFldsEN.prjId}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.updUser) == false &&
    undefined !== pobjFeatureRegionFldsEN.updUser &&
    tzDataType.isString(pobjFeatureRegionFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjFeatureRegionFldsEN.updUser}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.updDate) == false &&
    undefined !== pobjFeatureRegionFldsEN.updDate &&
    tzDataType.isString(pobjFeatureRegionFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjFeatureRegionFldsEN.updDate}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.memo) == false &&
    undefined !== pobjFeatureRegionFldsEN.memo &&
    tzDataType.isString(pobjFeatureRegionFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFeatureRegionFldsEN.memo}], 非法,应该为字符型(In 功能区域字段(FeatureRegionFlds))!(clsFeatureRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.regionId) == false &&
    pobjFeatureRegionFldsEN.regionId != '[nuull]' &&
    GetStrLen(pobjFeatureRegionFldsEN.regionId) != 10
  ) {
    throw '(errid:Watl000418)字段[区域Id]作为外键字段,长度应该为10(In 功能区域字段)!(clsFeatureRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.ctlTypeId) == false &&
    pobjFeatureRegionFldsEN.ctlTypeId != '[nuull]' &&
    GetStrLen(pobjFeatureRegionFldsEN.ctlTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[控件类型号]作为外键字段,长度应该为2(In 功能区域字段)!(clsFeatureRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFeatureRegionFldsEN.prjId) == false &&
    pobjFeatureRegionFldsEN.prjId != '[nuull]' &&
    GetStrLen(pobjFeatureRegionFldsEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程Id]作为外键字段,长度应该为4(In 功能区域字段)!(clsFeatureRegionFldsBL:CheckPropertyNew)';
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
export function FeatureRegionFlds_GetJSONStrByObj(
  pobjFeatureRegionFldsEN: clsFeatureRegionFldsEN,
): string {
  pobjFeatureRegionFldsEN.sfUpdFldSetStr = pobjFeatureRegionFldsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFeatureRegionFldsEN);
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
export function FeatureRegionFlds_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsFeatureRegionFldsEN> {
  let arrFeatureRegionFldsObjLst = new Array<clsFeatureRegionFldsEN>();
  if (strJSON === '') {
    return arrFeatureRegionFldsObjLst;
  }
  try {
    arrFeatureRegionFldsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFeatureRegionFldsObjLst;
  }
  return arrFeatureRegionFldsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFeatureRegionFldsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FeatureRegionFlds_GetObjLstByJSONObjLst(
  arrFeatureRegionFldsObjLstS: Array<clsFeatureRegionFldsEN>,
): Array<clsFeatureRegionFldsEN> {
  const arrFeatureRegionFldsObjLst = new Array<clsFeatureRegionFldsEN>();
  for (const objInFor of arrFeatureRegionFldsObjLstS) {
    const obj1 = FeatureRegionFlds_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFeatureRegionFldsObjLst.push(obj1);
  }
  return arrFeatureRegionFldsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FeatureRegionFlds_GetObjByJSONStr(strJSON: string): clsFeatureRegionFldsEN {
  let pobjFeatureRegionFldsEN = new clsFeatureRegionFldsEN();
  if (strJSON === '') {
    return pobjFeatureRegionFldsEN;
  }
  try {
    pobjFeatureRegionFldsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFeatureRegionFldsEN;
  }
  return pobjFeatureRegionFldsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FeatureRegionFlds_GetCombineCondition(
  objFeatureRegionFldsCond: clsFeatureRegionFldsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_ViewFeatureId,
    ) == true
  ) {
    const strComparisonOpViewFeatureId: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_ViewFeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_ViewFeatureId,
      objFeatureRegionFldsCond.viewFeatureId,
      strComparisonOpViewFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_RegionId,
    ) == true
  ) {
    const strComparisonOpRegionId: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_RegionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_RegionId,
      objFeatureRegionFldsCond.regionId,
      strComparisonOpRegionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_FeatureId,
    ) == true
  ) {
    const strComparisonOpFeatureId: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_FeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_FeatureId,
      objFeatureRegionFldsCond.featureId,
      strComparisonOpFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_TabFeatureId,
    ) == true
  ) {
    const strComparisonOpTabFeatureId: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_TabFeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_TabFeatureId,
      objFeatureRegionFldsCond.tabFeatureId,
      strComparisonOpTabFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_CheckTabFeature,
    ) == true
  ) {
    const strComparisonOpCheckTabFeature: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_CheckTabFeature];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_CheckTabFeature,
      objFeatureRegionFldsCond.checkTabFeature,
      strComparisonOpCheckTabFeature,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_FeatureDescription,
    ) == true
  ) {
    const strComparisonOpFeatureDescription: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_FeatureDescription];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_FeatureDescription,
      objFeatureRegionFldsCond.featureDescription,
      strComparisonOpFeatureDescription,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_ButtonName,
    ) == true
  ) {
    const strComparisonOpButtonName: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_ButtonName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_ButtonName,
      objFeatureRegionFldsCond.buttonName,
      strComparisonOpButtonName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_ButtonName4Mvc,
    ) == true
  ) {
    const strComparisonOpButtonName4Mvc: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_ButtonName4Mvc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_ButtonName4Mvc,
      objFeatureRegionFldsCond.buttonName4Mvc,
      strComparisonOpButtonName4Mvc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_CommandName,
    ) == true
  ) {
    const strComparisonOpCommandName: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_CommandName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_CommandName,
      objFeatureRegionFldsCond.commandName,
      strComparisonOpCommandName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_ValueGivingModeId,
    ) == true
  ) {
    const strComparisonOpValueGivingModeId: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_ValueGivingModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_ValueGivingModeId,
      objFeatureRegionFldsCond.valueGivingModeId,
      strComparisonOpValueGivingModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_FuncName,
    ) == true
  ) {
    const strComparisonOpFuncName: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_FuncName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_FuncName,
      objFeatureRegionFldsCond.funcName,
      strComparisonOpFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_DefaultValue,
    ) == true
  ) {
    const strComparisonOpDefaultValue: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_DefaultValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_DefaultValue,
      objFeatureRegionFldsCond.defaultValue,
      strComparisonOpDefaultValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_KeyIdGetModeId,
    ) == true
  ) {
    const strComparisonOpKeyIdGetModeId: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_KeyIdGetModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_KeyIdGetModeId,
      objFeatureRegionFldsCond.keyIdGetModeId,
      strComparisonOpKeyIdGetModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_Text,
    ) == true
  ) {
    const strComparisonOpText: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_Text];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_Text,
      objFeatureRegionFldsCond.text,
      strComparisonOpText,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_GroupName,
    ) == true
  ) {
    const strComparisonOpGroupName: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_GroupName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_GroupName,
      objFeatureRegionFldsCond.groupName,
      strComparisonOpGroupName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_ReleTabId,
    ) == true
  ) {
    const strComparisonOpReleTabId: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_ReleTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_ReleTabId,
      objFeatureRegionFldsCond.releTabId,
      strComparisonOpReleTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_ReleFldId,
    ) == true
  ) {
    const strComparisonOpReleFldId: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_ReleFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_ReleFldId,
      objFeatureRegionFldsCond.releFldId,
      strComparisonOpReleFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_EventFuncName,
    ) == true
  ) {
    const strComparisonOpEventFuncName: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_EventFuncName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_EventFuncName,
      objFeatureRegionFldsCond.eventFuncName,
      strComparisonOpEventFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_FieldTypeId,
    ) == true
  ) {
    const strComparisonOpFieldTypeId: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_FieldTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_FieldTypeId,
      objFeatureRegionFldsCond.fieldTypeId,
      strComparisonOpFieldTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_ViewImplId,
    ) == true
  ) {
    const strComparisonOpViewImplId: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_ViewImplId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_ViewImplId,
      objFeatureRegionFldsCond.viewImplId,
      strComparisonOpViewImplId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_CtlTypeId,
    ) == true
  ) {
    const strComparisonOpCtlTypeId: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_CtlTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_CtlTypeId,
      objFeatureRegionFldsCond.ctlTypeId,
      strComparisonOpCtlTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_Height,
    ) == true
  ) {
    const strComparisonOpHeight: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_Height];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFeatureRegionFldsEN.con_Height,
      objFeatureRegionFldsCond.height,
      strComparisonOpHeight,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_Width,
    ) == true
  ) {
    const strComparisonOpWidth: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_Width];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFeatureRegionFldsEN.con_Width,
      objFeatureRegionFldsCond.width,
      strComparisonOpWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_SeqNum,
    ) == true
  ) {
    const strComparisonOpSeqNum: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_SeqNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFeatureRegionFldsEN.con_SeqNum,
      objFeatureRegionFldsCond.seqNum,
      strComparisonOpSeqNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_CssClass,
    ) == true
  ) {
    const strComparisonOpCssClass: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_CssClass];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_CssClass,
      objFeatureRegionFldsCond.cssClass,
      strComparisonOpCssClass,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_ImageUrl,
    ) == true
  ) {
    const strComparisonOpImageUrl: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_ImageUrl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_ImageUrl,
      objFeatureRegionFldsCond.imageUrl,
      strComparisonOpImageUrl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_InUse,
    ) == true
  ) {
    if (objFeatureRegionFldsCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsFeatureRegionFldsEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFeatureRegionFldsEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_ErrMsg,
      objFeatureRegionFldsCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_PrjId,
      objFeatureRegionFldsCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_UpdUser,
      objFeatureRegionFldsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_UpdDate,
      objFeatureRegionFldsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureRegionFldsCond.dicFldComparisonOp,
      clsFeatureRegionFldsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFeatureRegionFldsCond.dicFldComparisonOp[clsFeatureRegionFldsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureRegionFldsEN.con_Memo,
      objFeatureRegionFldsCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FeatureRegionFlds(功能区域字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @param strButtonName: 按钮名称(要求唯一的字段)
 * @param strFeatureId: 功能Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FeatureRegionFlds_GetUniCondStr(
  objFeatureRegionFldsEN: clsFeatureRegionFldsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RegionId = '{0}'", objFeatureRegionFldsEN.regionId);
  strWhereCond += Format(" and ButtonName = '{0}'", objFeatureRegionFldsEN.buttonName);
  strWhereCond += Format(" and FeatureId = '{0}'", objFeatureRegionFldsEN.featureId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FeatureRegionFlds(功能区域字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @param strButtonName: 按钮名称(要求唯一的字段)
 * @param strFeatureId: 功能Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FeatureRegionFlds_GetUniCondStr4Update(
  objFeatureRegionFldsEN: clsFeatureRegionFldsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewFeatureId <> '{0}'", objFeatureRegionFldsEN.viewFeatureId);
  strWhereCond += Format(" and RegionId = '{0}'", objFeatureRegionFldsEN.regionId);
  strWhereCond += Format(" and ButtonName = '{0}'", objFeatureRegionFldsEN.buttonName);
  strWhereCond += Format(" and FeatureId = '{0}'", objFeatureRegionFldsEN.featureId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFeatureRegionFldsENS:源对象
 * @param objFeatureRegionFldsENT:目标对象
 */
export function FeatureRegionFlds_GetObjFromJsonObj(
  objFeatureRegionFldsENS: clsFeatureRegionFldsEN,
): clsFeatureRegionFldsEN {
  const objFeatureRegionFldsENT: clsFeatureRegionFldsEN = new clsFeatureRegionFldsEN();
  ObjectAssign(objFeatureRegionFldsENT, objFeatureRegionFldsENS);
  return objFeatureRegionFldsENT;
}
