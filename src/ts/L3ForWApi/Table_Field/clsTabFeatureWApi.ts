/**
 * 类名:clsTabFeatureWApi
 * 表名:TabFeature(00050463)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/15 10:12:08
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
 * 表功能(TabFeature)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月15日.
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
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { tabFeatureCache, isFuncMapCache } from '@/views/Table_Field/TabFeatureVueShare';
import { clsTabFeatureENEx } from '@/ts/L0Entity/Table_Field/clsTabFeatureENEx';
import { clsTabFeatureEN } from '@/ts/L0Entity/Table_Field/clsTabFeatureEN';
import { vPrjTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { vPrjFeatureSim_func } from '@/ts/L3ForWApi/PrjFunction/clsvPrjFeatureSimWApi';
import { clsvPrjFeatureSimEN } from '@/ts/L0Entity/PrjFunction/clsvPrjFeatureSimEN';
import { FuncModule_Agc_func } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const tabFeature_Controller = 'TabFeatureApi';
export const tabFeature_ConstructorName = 'tabFeature';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTabFeatureId:关键字
 * @returns 对象
 **/
export async function TabFeature_GetObjByTabFeatureIdAsync(
  strTabFeatureId: string,
): Promise<clsTabFeatureEN | null> {
  const strThisFuncName = 'GetObjByTabFeatureIdAsync';

  if (IsNullOrEmpty(strTabFeatureId) == true) {
    const strMsg = Format(
      '参数:[strTabFeatureId]不能为空!(In clsTabFeatureWApi.GetObjByTabFeatureIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabFeatureId]的长度:[{0}]不正确!(clsTabFeatureWApi.GetObjByTabFeatureIdAsync)',
      strTabFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTabFeatureId';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabFeatureId,
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
      const objTabFeature = TabFeature_GetObjFromJsonObj(returnObj);
      return objTabFeature;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param strTabFeatureId:所给的关键字
 * @returns 对象
 */
export async function TabFeature_GetObjByTabFeatureIdlocalStorage(strTabFeatureId: string) {
  const strThisFuncName = 'GetObjByTabFeatureIdlocalStorage';

  if (IsNullOrEmpty(strTabFeatureId) == true) {
    const strMsg = Format(
      '参数:[strTabFeatureId]不能为空!(In clsTabFeatureWApi.GetObjByTabFeatureIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabFeatureId]的长度:[{0}]不正确!(clsTabFeatureWApi.GetObjByTabFeatureIdlocalStorage)',
      strTabFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsTabFeatureEN._CurrTabName, strTabFeatureId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objTabFeatureCache: clsTabFeatureEN = JSON.parse(strTempObj);
    return objTabFeatureCache;
  }
  try {
    const objTabFeature = await TabFeature_GetObjByTabFeatureIdAsync(strTabFeatureId);
    if (objTabFeature != null) {
      localStorage.setItem(strKey, JSON.stringify(objTabFeature));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objTabFeature;
    }
    return objTabFeature;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabFeatureId,
      tabFeature_ConstructorName,
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
 * @param strTabFeatureId:所给的关键字
 * @returns 对象
 */
export async function TabFeature_GetObjByTabFeatureIdCache(
  strTabFeatureId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTabFeatureIdCache';

  if (IsNullOrEmpty(strTabFeatureId) == true) {
    const strMsg = Format(
      '参数:[strTabFeatureId]不能为空!(In clsTabFeatureWApi.GetObjByTabFeatureIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabFeatureId]的长度:[{0}]不正确!(clsTabFeatureWApi.GetObjByTabFeatureIdCache)',
      strTabFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrTabFeatureObjLstCache = await TabFeature_GetObjLstCache(strPrjId);
  try {
    const arrTabFeatureSel = arrTabFeatureObjLstCache.filter(
      (x) => x.tabFeatureId == strTabFeatureId,
    );
    let objTabFeature: clsTabFeatureEN;
    if (arrTabFeatureSel.length > 0) {
      objTabFeature = arrTabFeatureSel[0];
      return objTabFeature;
    } else {
      if (bolTryAsyncOnce == true) {
        const objTabFeatureConst = await TabFeature_GetObjByTabFeatureIdAsync(strTabFeatureId);
        if (objTabFeatureConst != null) {
          TabFeature_ReFreshThisCache(strPrjId);
          return objTabFeatureConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabFeatureId,
      tabFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objTabFeature:所给的对象
 * @returns 对象
 */
export async function TabFeature_UpdateObjInLstCache(
  objTabFeature: clsTabFeatureEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrTabFeatureObjLstCache = await TabFeature_GetObjLstCache(strPrjId);
    const obj = arrTabFeatureObjLstCache.find(
      (x) =>
        x.tabId == objTabFeature.tabId &&
        x.featureId == objTabFeature.featureId &&
        x.funcNameCs == objTabFeature.funcNameCs &&
        x.funcNameJs == objTabFeature.funcNameJs,
    );
    if (obj != null) {
      objTabFeature.tabFeatureId = obj.tabFeatureId;
      ObjectAssign(obj, objTabFeature);
    } else {
      arrTabFeatureObjLstCache.push(objTabFeature);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      tabFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabFeature_SortFunDefa(a: clsTabFeatureEN, b: clsTabFeatureEN): number {
  return a.tabFeatureId.localeCompare(b.tabFeatureId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabFeature_SortFunDefa2Fld(a: clsTabFeatureEN, b: clsTabFeatureEN): number {
  if (a.tabFeatureName == b.tabFeatureName) return a.tabId.localeCompare(b.tabId);
  else return a.tabFeatureName.localeCompare(b.tabFeatureName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabFeature_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTabFeatureEN.con_TabFeatureId:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return a.tabFeatureId.localeCompare(b.tabFeatureId);
        };
      case clsTabFeatureEN.con_TabFeatureName:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return a.tabFeatureName.localeCompare(b.tabFeatureName);
        };
      case clsTabFeatureEN.con_TabId:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsTabFeatureEN.con_FeatureId:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return a.featureId.localeCompare(b.featureId);
        };
      case clsTabFeatureEN.con_FuncNameCs:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (a.funcNameCs == null) return -1;
          if (b.funcNameCs == null) return 1;
          return a.funcNameCs.localeCompare(b.funcNameCs);
        };
      case clsTabFeatureEN.con_IsExtendedClass:
        return (a: clsTabFeatureEN) => {
          if (a.isExtendedClass == true) return 1;
          else return -1;
        };
      case clsTabFeatureEN.con_FuncNameJs:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (a.funcNameJs == null) return -1;
          if (b.funcNameJs == null) return 1;
          return a.funcNameJs.localeCompare(b.funcNameJs);
        };
      case clsTabFeatureEN.con_GetDdlDataFuncName4Ex:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (a.getDdlDataFuncName4Ex == null) return -1;
          if (b.getDdlDataFuncName4Ex == null) return 1;
          return a.getDdlDataFuncName4Ex.localeCompare(b.getDdlDataFuncName4Ex);
        };
      case clsTabFeatureEN.con_IsForCSharp:
        return (a: clsTabFeatureEN) => {
          if (a.isForCSharp == true) return 1;
          else return -1;
        };
      case clsTabFeatureEN.con_IsForTypeScript:
        return (a: clsTabFeatureEN) => {
          if (a.isForTypeScript == true) return 1;
          else return -1;
        };
      case clsTabFeatureEN.con_IsForDiv:
        return (a: clsTabFeatureEN) => {
          if (a.isForDiv == true) return 1;
          else return -1;
        };
      case clsTabFeatureEN.con_IsNeedGC:
        return (a: clsTabFeatureEN) => {
          if (a.isNeedGC == true) return 1;
          else return -1;
        };
      case clsTabFeatureEN.con_UseTimes:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return a.useTimes - b.useTimes;
        };
      case clsTabFeatureEN.con_OrderNum:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsTabFeatureEN.con_IsNullable:
        return (a: clsTabFeatureEN) => {
          if (a.isNullable == true) return 1;
          else return -1;
        };
      case clsTabFeatureEN.con_InUse:
        return (a: clsTabFeatureEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsTabFeatureEN.con_CheckDate:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (a.checkDate == null) return -1;
          if (b.checkDate == null) return 1;
          return a.checkDate.localeCompare(b.checkDate);
        };
      case clsTabFeatureEN.con_ToolTipText:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (a.toolTipText == null) return -1;
          if (b.toolTipText == null) return 1;
          return a.toolTipText.localeCompare(b.toolTipText);
        };
      case clsTabFeatureEN.con_ErrMsg:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsTabFeatureEN.con_PrjId:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsTabFeatureEN.con_UpdUser:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsTabFeatureEN.con_UpdDate:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsTabFeatureEN.con_Memo:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TabFeature]中不存在!(in ${tabFeature_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsTabFeatureEN.con_TabFeatureId:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return b.tabFeatureId.localeCompare(a.tabFeatureId);
        };
      case clsTabFeatureEN.con_TabFeatureName:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return b.tabFeatureName.localeCompare(a.tabFeatureName);
        };
      case clsTabFeatureEN.con_TabId:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsTabFeatureEN.con_FeatureId:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return b.featureId.localeCompare(a.featureId);
        };
      case clsTabFeatureEN.con_FuncNameCs:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (b.funcNameCs == null) return -1;
          if (a.funcNameCs == null) return 1;
          return b.funcNameCs.localeCompare(a.funcNameCs);
        };
      case clsTabFeatureEN.con_IsExtendedClass:
        return (b: clsTabFeatureEN) => {
          if (b.isExtendedClass == true) return 1;
          else return -1;
        };
      case clsTabFeatureEN.con_FuncNameJs:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (b.funcNameJs == null) return -1;
          if (a.funcNameJs == null) return 1;
          return b.funcNameJs.localeCompare(a.funcNameJs);
        };
      case clsTabFeatureEN.con_GetDdlDataFuncName4Ex:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (b.getDdlDataFuncName4Ex == null) return -1;
          if (a.getDdlDataFuncName4Ex == null) return 1;
          return b.getDdlDataFuncName4Ex.localeCompare(a.getDdlDataFuncName4Ex);
        };
      case clsTabFeatureEN.con_IsForCSharp:
        return (b: clsTabFeatureEN) => {
          if (b.isForCSharp == true) return 1;
          else return -1;
        };
      case clsTabFeatureEN.con_IsForTypeScript:
        return (b: clsTabFeatureEN) => {
          if (b.isForTypeScript == true) return 1;
          else return -1;
        };
      case clsTabFeatureEN.con_IsForDiv:
        return (b: clsTabFeatureEN) => {
          if (b.isForDiv == true) return 1;
          else return -1;
        };
      case clsTabFeatureEN.con_IsNeedGC:
        return (b: clsTabFeatureEN) => {
          if (b.isNeedGC == true) return 1;
          else return -1;
        };
      case clsTabFeatureEN.con_UseTimes:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return b.useTimes - a.useTimes;
        };
      case clsTabFeatureEN.con_OrderNum:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsTabFeatureEN.con_IsNullable:
        return (b: clsTabFeatureEN) => {
          if (b.isNullable == true) return 1;
          else return -1;
        };
      case clsTabFeatureEN.con_InUse:
        return (b: clsTabFeatureEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsTabFeatureEN.con_CheckDate:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (b.checkDate == null) return -1;
          if (a.checkDate == null) return 1;
          return b.checkDate.localeCompare(a.checkDate);
        };
      case clsTabFeatureEN.con_ToolTipText:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (b.toolTipText == null) return -1;
          if (a.toolTipText == null) return 1;
          return b.toolTipText.localeCompare(a.toolTipText);
        };
      case clsTabFeatureEN.con_ErrMsg:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsTabFeatureEN.con_PrjId:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsTabFeatureEN.con_UpdUser:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsTabFeatureEN.con_UpdDate:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsTabFeatureEN.con_Memo:
        return (a: clsTabFeatureEN, b: clsTabFeatureEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TabFeature]中不存在!(in ${tabFeature_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strTabFeatureId:所给的关键字
 * @returns 对象
 */
export async function TabFeature_GetNameByTabFeatureIdCache(
  strTabFeatureId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strTabFeatureId) == true) {
    const strMsg = Format(
      '参数:[strTabFeatureId]不能为空!(In clsTabFeatureWApi.GetNameByTabFeatureIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabFeatureId]的长度:[{0}]不正确!(clsTabFeatureWApi.GetNameByTabFeatureIdCache)',
      strTabFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrTabFeatureObjLstCache = await TabFeature_GetObjLstCache(strPrjId);
  if (arrTabFeatureObjLstCache == null) return '';
  try {
    const arrTabFeatureSel = arrTabFeatureObjLstCache.filter(
      (x) => x.tabFeatureId == strTabFeatureId,
    );
    let objTabFeature: clsTabFeatureEN;
    if (arrTabFeatureSel.length > 0) {
      objTabFeature = arrTabFeatureSel[0];
      return objTabFeature.tabFeatureName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strTabFeatureId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function TabFeature_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsTabFeatureEN.con_TabFeatureId:
      return (obj: clsTabFeatureEN) => {
        return obj.tabFeatureId === value;
      };
    case clsTabFeatureEN.con_TabFeatureName:
      return (obj: clsTabFeatureEN) => {
        return obj.tabFeatureName === value;
      };
    case clsTabFeatureEN.con_TabId:
      return (obj: clsTabFeatureEN) => {
        return obj.tabId === value;
      };
    case clsTabFeatureEN.con_FeatureId:
      return (obj: clsTabFeatureEN) => {
        return obj.featureId === value;
      };
    case clsTabFeatureEN.con_FuncNameCs:
      return (obj: clsTabFeatureEN) => {
        return obj.funcNameCs === value;
      };
    case clsTabFeatureEN.con_IsExtendedClass:
      return (obj: clsTabFeatureEN) => {
        return obj.isExtendedClass === value;
      };
    case clsTabFeatureEN.con_FuncNameJs:
      return (obj: clsTabFeatureEN) => {
        return obj.funcNameJs === value;
      };
    case clsTabFeatureEN.con_GetDdlDataFuncName4Ex:
      return (obj: clsTabFeatureEN) => {
        return obj.getDdlDataFuncName4Ex === value;
      };
    case clsTabFeatureEN.con_IsForCSharp:
      return (obj: clsTabFeatureEN) => {
        return obj.isForCSharp === value;
      };
    case clsTabFeatureEN.con_IsForTypeScript:
      return (obj: clsTabFeatureEN) => {
        return obj.isForTypeScript === value;
      };
    case clsTabFeatureEN.con_IsForDiv:
      return (obj: clsTabFeatureEN) => {
        return obj.isForDiv === value;
      };
    case clsTabFeatureEN.con_IsNeedGC:
      return (obj: clsTabFeatureEN) => {
        return obj.isNeedGC === value;
      };
    case clsTabFeatureEN.con_UseTimes:
      return (obj: clsTabFeatureEN) => {
        return obj.useTimes === value;
      };
    case clsTabFeatureEN.con_OrderNum:
      return (obj: clsTabFeatureEN) => {
        return obj.orderNum === value;
      };
    case clsTabFeatureEN.con_IsNullable:
      return (obj: clsTabFeatureEN) => {
        return obj.isNullable === value;
      };
    case clsTabFeatureEN.con_InUse:
      return (obj: clsTabFeatureEN) => {
        return obj.inUse === value;
      };
    case clsTabFeatureEN.con_CheckDate:
      return (obj: clsTabFeatureEN) => {
        return obj.checkDate === value;
      };
    case clsTabFeatureEN.con_ToolTipText:
      return (obj: clsTabFeatureEN) => {
        return obj.toolTipText === value;
      };
    case clsTabFeatureEN.con_ErrMsg:
      return (obj: clsTabFeatureEN) => {
        return obj.errMsg === value;
      };
    case clsTabFeatureEN.con_PrjId:
      return (obj: clsTabFeatureEN) => {
        return obj.prjId === value;
      };
    case clsTabFeatureEN.con_UpdUser:
      return (obj: clsTabFeatureEN) => {
        return obj.updUser === value;
      };
    case clsTabFeatureEN.con_UpdDate:
      return (obj: clsTabFeatureEN) => {
        return obj.updDate === value;
      };
    case clsTabFeatureEN.con_Memo:
      return (obj: clsTabFeatureEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[TabFeature]中不存在!(in ${tabFeature_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function TabFeature_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsTabFeatureWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsTabFeatureWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsTabFeatureEN.con_TabFeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsTabFeatureEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsTabFeatureEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTabFeatureId = strInValue;
  if (IsNullOrEmpty(strTabFeatureId) == true) {
    return '';
  }
  const objTabFeature = await TabFeature_GetObjByTabFeatureIdCache(
    strTabFeatureId,
    strPrjIdClassfy,
  );
  if (objTabFeature == null) return '';
  if (objTabFeature.GetFldValue(strOutFldName) == null) return '';
  return objTabFeature.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function TabFeature_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsTabFeatureWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsTabFeatureWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsTabFeatureEN.con_TabFeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrTabFeature = await TabFeature_GetObjLstCache(strPrjIdClassfy);
  if (arrTabFeature == null) return [];
  let arrTabFeatureSel = arrTabFeature;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrTabFeatureSel = arrTabFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrTabFeatureSel = arrTabFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrTabFeatureSel = arrTabFeatureSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrTabFeatureSel = arrTabFeatureSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrTabFeatureSel = arrTabFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrTabFeatureSel = arrTabFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrTabFeatureSel = arrTabFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrTabFeatureSel = arrTabFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrTabFeatureSel = arrTabFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrTabFeatureSel = arrTabFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrTabFeatureSel.length == 0) return [];
  return arrTabFeatureSel.map((x) => x.tabFeatureId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function TabFeature_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
export async function TabFeature_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
export async function TabFeature_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
export async function TabFeature_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsTabFeatureEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
      const objTabFeature = TabFeature_GetObjFromJsonObj(returnObj);
      return objTabFeature;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
export async function TabFeature_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsTabFeatureEN.WhereFormat) == false) {
    strWhereCond = Format(clsTabFeatureEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsTabFeatureEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsTabFeatureEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTabFeatureEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrTabFeatureExObjLstCache: Array<clsTabFeatureEN> = CacheHelper.Get(strKey);
    const arrTabFeatureObjLstT = TabFeature_GetObjLstByJSONObjLst(arrTabFeatureExObjLstCache);
    return arrTabFeatureObjLstT;
  }
  try {
    const arrTabFeatureExObjLst = await TabFeature_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrTabFeatureExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrTabFeatureExObjLst.length,
    );
    console.log(strInfo);
    return arrTabFeatureExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      tabFeature_ConstructorName,
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
export async function TabFeature_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsTabFeatureEN.WhereFormat) == false) {
    strWhereCond = Format(clsTabFeatureEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsTabFeatureEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsTabFeatureEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsTabFeatureEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTabFeatureEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrTabFeatureExObjLstCache: Array<clsTabFeatureEN> = JSON.parse(strTempObjLst);
    const arrTabFeatureObjLstT = TabFeature_GetObjLstByJSONObjLst(arrTabFeatureExObjLstCache);
    return arrTabFeatureObjLstT;
  }
  try {
    const arrTabFeatureExObjLst = await TabFeature_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsTabFeatureEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrTabFeatureExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrTabFeatureExObjLst.length,
    );
    console.log(strInfo);
    return arrTabFeatureExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      tabFeature_ConstructorName,
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
export async function TabFeature_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsTabFeatureEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrTabFeatureObjLstCache: Array<clsTabFeatureEN> = JSON.parse(strTempObjLst);
    return arrTabFeatureObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function TabFeature_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsTabFeatureEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
          tabFeature_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFeature_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
export async function TabFeature_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsTabFeatureEN.WhereFormat) == false) {
    strWhereCond = Format(clsTabFeatureEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsTabFeatureEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsTabFeatureEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsTabFeatureEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTabFeatureEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrTabFeatureExObjLstCache: Array<clsTabFeatureEN> = JSON.parse(strTempObjLst);
    const arrTabFeatureObjLstT = TabFeature_GetObjLstByJSONObjLst(arrTabFeatureExObjLstCache);
    return arrTabFeatureObjLstT;
  }
  try {
    const arrTabFeatureExObjLst = await TabFeature_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsTabFeatureEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrTabFeatureExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrTabFeatureExObjLst.length,
    );
    console.log(strInfo);
    return arrTabFeatureExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      tabFeature_ConstructorName,
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
export async function TabFeature_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsTabFeatureEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrTabFeatureObjLstCache: Array<clsTabFeatureEN> = JSON.parse(strTempObjLst);
    return arrTabFeatureObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TabFeature_GetObjLstCache(strPrjId: string): Promise<Array<clsTabFeatureEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsTabFeatureWApi.TabFeature_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsTabFeatureWApi.TabFeature_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrTabFeatureObjLstCache;
  switch (clsTabFeatureEN.CacheModeId) {
    case '04': //sessionStorage
      arrTabFeatureObjLstCache = await TabFeature_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrTabFeatureObjLstCache = await TabFeature_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrTabFeatureObjLstCache = await TabFeature_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrTabFeatureObjLstCache = await TabFeature_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrTabFeatureObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TabFeature_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrTabFeatureObjLstCache;
  switch (clsTabFeatureEN.CacheModeId) {
    case '04': //sessionStorage
      arrTabFeatureObjLstCache = await TabFeature_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrTabFeatureObjLstCache = await TabFeature_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrTabFeatureObjLstCache = null;
      break;
    default:
      arrTabFeatureObjLstCache = null;
      break;
  }
  return arrTabFeatureObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTabFeatureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function TabFeature_GetSubObjLstCache(
  objTabFeatureCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrTabFeatureObjLstCache = await TabFeature_GetObjLstCache(strPrjId);
  let arrTabFeatureSel = arrTabFeatureObjLstCache;
  if (objTabFeatureCond.GetConditions().length == 0) return arrTabFeatureSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objTabFeatureCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrTabFeatureSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objTabFeatureCond),
      tabFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTabFeatureEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTabFeatureId:关键字列表
 * @returns 对象列表
 **/
export async function TabFeature_GetObjLstByTabFeatureIdLstAsync(
  arrTabFeatureId: Array<string>,
): Promise<Array<clsTabFeatureEN>> {
  const strThisFuncName = 'GetObjLstByTabFeatureIdLstAsync';
  const strAction = 'GetObjLstByTabFeatureIdLst';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTabFeatureId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          tabFeature_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFeature_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param arrstrTabFeatureIdLst:关键字列表
 * @returns 对象列表
 */
export async function TabFeature_GetObjLstByTabFeatureIdLstCache(
  arrTabFeatureIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByTabFeatureIdLstCache';
  try {
    const arrTabFeatureObjLstCache = await TabFeature_GetObjLstCache(strPrjId);
    const arrTabFeatureSel = arrTabFeatureObjLstCache.filter(
      (x) => arrTabFeatureIdLst.indexOf(x.tabFeatureId) > -1,
    );
    return arrTabFeatureSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTabFeatureIdLst.join(','),
      tabFeature_ConstructorName,
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
export async function TabFeature_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsTabFeatureEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
          tabFeature_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFeature_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
export async function TabFeature_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsTabFeatureEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
          tabFeature_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFeature_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
export async function TabFeature_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsTabFeatureEN>();
  const arrTabFeatureObjLstCache = await TabFeature_GetObjLstCache(strPrjId);
  if (arrTabFeatureObjLstCache.length == 0) return arrTabFeatureObjLstCache;
  let arrTabFeatureSel = arrTabFeatureObjLstCache;
  const objTabFeatureCond = objPagerPara.conditionCollection;
  if (objTabFeatureCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsTabFeatureEN>();
  }
  //console.log("clsTabFeatureWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objTabFeatureCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrTabFeatureSel.length == 0) return arrTabFeatureSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrTabFeatureSel = arrTabFeatureSel.sort(TabFeature_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrTabFeatureSel = arrTabFeatureSel.sort(objPagerPara.sortFun);
    }
    arrTabFeatureSel = arrTabFeatureSel.slice(intStart, intEnd);
    return arrTabFeatureSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      tabFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTabFeatureEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function TabFeature_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsTabFeatureEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsTabFeatureEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
          tabFeature_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TabFeature_GetObjLstByJSONObjLst(returnObjLst);
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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param strTabFeatureId:关键字
 * @returns 获取删除的结果
 **/
export async function TabFeature_DelRecordAsync(strTabFeatureId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(tabFeature_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strTabFeatureId);

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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param arrTabFeatureId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function TabFeature_DelTabFeaturesAsync(
  arrTabFeatureId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelTabFeaturesAsync';
  const strAction = 'DelTabFeatures';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTabFeatureId, config);
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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
export async function TabFeature_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
): Promise<Array<clsTabFeatureENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrTabFeatureObjLst = await TabFeature_GetObjLstCache(strPrjId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsTabFeatureENEx>();
  const arrTabFeatureExObjLst = arrTabFeatureObjLst.map((obj) => {
    const cacheKey = `${obj.tabFeatureId}_${obj.prjId}`;
    if (tabFeatureCache[cacheKey]) {
      const oldObj = tabFeatureCache[cacheKey];
      return oldObj;
    } else {
      const newObj = TabFeature_CopyToEx(obj);
      arrNewObj.push(newObj);
      tabFeatureCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await TabFeature_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsTabFeatureEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrTabFeatureExObjLst) {
      await TabFeature_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.tabFeatureId}_${newObj.prjId}`;
      tabFeatureCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrTabFeatureExObjLst.length == 0) return arrTabFeatureExObjLst;
  let arrTabFeatureSel: Array<clsTabFeatureENEx> = arrTabFeatureExObjLst;
  const objTabFeatureCond = objPagerPara.conditionCollection;
  if (objTabFeatureCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrTabFeatureExObjLst;
  }
  try {
    for (const objCondition of objTabFeatureCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrTabFeatureSel.length == 0) return arrTabFeatureSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrTabFeatureSel = arrTabFeatureSel.sort(
        TabFeature_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrTabFeatureSel = arrTabFeatureSel.sort(objPagerPara.sortFun);
    }
    arrTabFeatureSel = arrTabFeatureSel.slice(intStart, intEnd);
    return arrTabFeatureSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      tabFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTabFeatureENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objTabFeatureENS:源对象
 * @returns 目标对象=>clsTabFeatureEN:objTabFeatureENT
 **/
export function TabFeature_CopyToEx(objTabFeatureENS: clsTabFeatureEN): clsTabFeatureENEx {
  const strThisFuncName = TabFeature_CopyToEx.name;
  const objTabFeatureENT = new clsTabFeatureENEx();
  try {
    ObjectAssign(objTabFeatureENT, objTabFeatureENS);
    return objTabFeatureENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objTabFeatureENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function TabFeature_FuncMapByFldName(
  strFldName: string,
  objTabFeatureEx: clsTabFeatureENEx,
) {
  const strThisFuncName = TabFeature_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsTabFeatureEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsTabFeatureENEx.con_TabName:
      return TabFeature_FuncMapTabName(objTabFeatureEx);
    case clsTabFeatureENEx.con_FeatureName:
      return TabFeature_FuncMapFeatureName(objTabFeatureEx);
    case clsTabFeatureENEx.con_ParentFeatureName:
      return TabFeature_FuncMapParentFeatureName(objTabFeatureEx);
    case clsTabFeatureENEx.con_FuncModuleNameSim:
      return TabFeature_FuncMapFuncModuleNameSim(objTabFeatureEx);
    case clsTabFeatureENEx.con_ParentFeatureId:
      return TabFeature_FuncMapParentFeatureId(objTabFeatureEx);
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
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function TabFeature_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTabFeatureENEx.con_TabName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsTabFeatureENEx.con_FeatureName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return a.featureName.localeCompare(b.featureName);
        };
      case clsTabFeatureENEx.con_ParentFeatureName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          if (a.parentFeatureName === null && b.parentFeatureName === null) return 0;
          if (a.parentFeatureName === null) return -1;
          if (b.parentFeatureName === null) return 1;
          return a.parentFeatureName.localeCompare(b.parentFeatureName);
        };
      case clsTabFeatureENEx.con_FuncModuleNameSim:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          if (a.funcModuleNameSim === null && b.funcModuleNameSim === null) return 0;
          if (a.funcModuleNameSim === null) return -1;
          if (b.funcModuleNameSim === null) return 1;
          return a.funcModuleNameSim.localeCompare(b.funcModuleNameSim);
        };
      case clsTabFeatureENEx.con_PrjName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsTabFeatureENEx.con_ParentFeatureId:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return a.parentFeatureId.localeCompare(b.parentFeatureId);
        };
      case clsTabFeatureENEx.con_FuncNameJsEx:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          if (a.funcNameJsEx === null && b.funcNameJsEx === null) return 0;
          if (a.funcNameJsEx === null) return -1;
          if (b.funcNameJsEx === null) return 1;
          return a.funcNameJsEx.localeCompare(b.funcNameJsEx);
        };
      case clsTabFeatureENEx.con_FuncNameCsEx:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          if (a.funcNameCsEx === null && b.funcNameCsEx === null) return 0;
          if (a.funcNameCsEx === null) return -1;
          if (b.funcNameCsEx === null) return 1;
          return a.funcNameCsEx.localeCompare(b.funcNameCsEx);
        };
      case clsTabFeatureENEx.con_FldNames:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return a.fldNames.localeCompare(b.fldNames);
        };
      case clsTabFeatureENEx.con_FuncNames:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return a.funcNames.localeCompare(b.funcNames);
        };
      case clsTabFeatureENEx.con_TrClass:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return -1;
          if (b.trClass === null) return 1;
          return a.trClass.localeCompare(b.trClass);
        };
      case clsTabFeatureENEx.con_CmPrjId:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      default:
        return TabFeature_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsTabFeatureENEx.con_TabName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsTabFeatureENEx.con_FeatureName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return b.featureName.localeCompare(a.featureName);
        };
      case clsTabFeatureENEx.con_ParentFeatureName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          if (a.parentFeatureName === null && b.parentFeatureName === null) return 0;
          if (a.parentFeatureName === null) return 1;
          if (b.parentFeatureName === null) return -1;
          return b.parentFeatureName.localeCompare(a.parentFeatureName);
        };
      case clsTabFeatureENEx.con_FuncModuleNameSim:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          if (a.funcModuleNameSim === null && b.funcModuleNameSim === null) return 0;
          if (a.funcModuleNameSim === null) return 1;
          if (b.funcModuleNameSim === null) return -1;
          return b.funcModuleNameSim.localeCompare(a.funcModuleNameSim);
        };
      case clsTabFeatureENEx.con_PrjName:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsTabFeatureENEx.con_ParentFeatureId:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return b.parentFeatureId.localeCompare(a.parentFeatureId);
        };
      case clsTabFeatureENEx.con_FuncNameJsEx:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          if (a.funcNameJsEx === null && b.funcNameJsEx === null) return 0;
          if (a.funcNameJsEx === null) return 1;
          if (b.funcNameJsEx === null) return -1;
          return b.funcNameJsEx.localeCompare(a.funcNameJsEx);
        };
      case clsTabFeatureENEx.con_FuncNameCsEx:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          if (a.funcNameCsEx === null && b.funcNameCsEx === null) return 0;
          if (a.funcNameCsEx === null) return 1;
          if (b.funcNameCsEx === null) return -1;
          return b.funcNameCsEx.localeCompare(a.funcNameCsEx);
        };
      case clsTabFeatureENEx.con_FldNames:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return b.fldNames.localeCompare(a.fldNames);
        };
      case clsTabFeatureENEx.con_FuncNames:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return b.funcNames.localeCompare(a.funcNames);
        };
      case clsTabFeatureENEx.con_TrClass:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return 1;
          if (b.trClass === null) return -1;
          return b.trClass.localeCompare(a.trClass);
        };
      case clsTabFeatureENEx.con_CmPrjId:
        return (a: clsTabFeatureENEx, b: clsTabFeatureENEx) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      default:
        return TabFeature_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objTabFeatureS:源对象
 **/
export async function TabFeature_FuncMapTabName(objTabFeature: clsTabFeatureENEx) {
  const strThisFuncName = TabFeature_FuncMapTabName.name;
  try {
    if (IsNullOrEmpty(objTabFeature.tabName) == true) {
      const vPrjTabSimTabId = objTabFeature.tabId;
      if (IsNullOrEmpty(objTabFeature.prjId) == true) {
        const strMsg = `函数映射[TabName]数据出错,prjId不能为空!(in ${tabFeature_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        objTabFeature.prjId,
      );
      objTabFeature.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001298)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objTabFeatureS:源对象
 **/
export async function TabFeature_FuncMapFeatureName(objTabFeature: clsTabFeatureENEx) {
  const strThisFuncName = TabFeature_FuncMapFeatureName.name;
  try {
    if (IsNullOrEmpty(objTabFeature.featureName) == true) {
      const vPrjFeatureSimFeatureId = objTabFeature.featureId;
      const vPrjFeatureSimFeatureName = await vPrjFeatureSim_func(
        clsvPrjFeatureSimEN.con_FeatureId,
        clsvPrjFeatureSimEN.con_FeatureName,
        vPrjFeatureSimFeatureId,
      );
      objTabFeature.featureName = vPrjFeatureSimFeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001341)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objTabFeatureS:源对象
 **/
export async function TabFeature_FuncMapParentFeatureName(objTabFeature: clsTabFeatureENEx) {
  const strThisFuncName = TabFeature_FuncMapParentFeatureName.name;
  try {
    if (IsNullOrEmpty(objTabFeature.parentFeatureName) == true) {
      const vPrjFeatureSimFeatureId = objTabFeature.featureId;
      const vPrjFeatureSimParentFeatureName = await vPrjFeatureSim_func(
        clsvPrjFeatureSimEN.con_FeatureId,
        clsvPrjFeatureSimEN.con_ParentFeatureName,
        vPrjFeatureSimFeatureId,
      );
      objTabFeature.parentFeatureName = vPrjFeatureSimParentFeatureName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001383)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objTabFeatureS:源对象
 **/
export async function TabFeature_FuncMapFuncModuleNameSim(objTabFeature: clsTabFeatureENEx) {
  const strThisFuncName = TabFeature_FuncMapFuncModuleNameSim.name;
  try {
    if (IsNullOrEmpty(objTabFeature.funcModuleNameSim) == true) {
      const vPrjTabSimTabId = objTabFeature.tabId;
      if (IsNullOrEmpty(objTabFeature.prjId) == true) {
        const strMsg = `函数映射[FuncModuleNameSim]数据出错,prjId不能为空!(in ${tabFeature_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vPrjTabSimFuncModuleAgcId = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_FuncModuleAgcId,
        vPrjTabSimTabId,
        objTabFeature.prjId,
      );
      const FuncModuleAgcFuncModuleAgcId = vPrjTabSimFuncModuleAgcId;
      if (IsNullOrEmpty(objTabFeature.prjId) == true) {
        const strMsg = `函数映射[FuncModuleNameSim]数据出错,prjId不能为空!(in ${tabFeature_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const FuncModuleAgcFuncModuleNameSim = await FuncModule_Agc_func(
        clsFuncModule_AgcEN.con_FuncModuleAgcId,
        clsFuncModule_AgcEN.con_FuncModuleNameSim,
        FuncModuleAgcFuncModuleAgcId,
        objTabFeature.prjId,
      );
      objTabFeature.funcModuleNameSim = FuncModuleAgcFuncModuleNameSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001384)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objTabFeatureS:源对象
 **/
export async function TabFeature_FuncMapParentFeatureId(objTabFeature: clsTabFeatureENEx) {
  const strThisFuncName = TabFeature_FuncMapParentFeatureId.name;
  try {
    if (IsNullOrEmpty(objTabFeature.parentFeatureId) == true) {
      const vPrjFeatureSimFeatureId = objTabFeature.featureId;
      const vPrjFeatureSimParentFeatureId = await vPrjFeatureSim_func(
        clsvPrjFeatureSimEN.con_FeatureId,
        clsvPrjFeatureSimEN.con_ParentFeatureId,
        vPrjFeatureSimFeatureId,
      );
      objTabFeature.parentFeatureId = vPrjFeatureSimParentFeatureId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001385)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      tabFeature_ConstructorName,
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
export async function TabFeature_DelTabFeaturesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelTabFeaturesByCondAsync';
  const strAction = 'DelTabFeaturesByCond';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param objTabFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabFeature_AddNewRecordAsync(
  objTabFeatureEN: clsTabFeatureEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objTabFeatureEN.tabFeatureId === null || objTabFeatureEN.tabFeatureId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objTabFeatureEN);
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFeatureEN, config);
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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param objTabFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabFeature_AddNewRecordWithMaxIdAsync(
  objTabFeatureEN: clsTabFeatureEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFeatureEN, config);
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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param objTabFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabFeature_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param objTabFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabFeature_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objTabFeatureEN);
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param objTabFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabFeature_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objTabFeatureEN);
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
export async function TabFeature_AddNewObjSave(
  objTabFeatureEN: clsTabFeatureEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    TabFeature_CheckPropertyNew(objTabFeatureEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${tabFeature_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await TabFeature_CheckUniCond4Add(objTabFeatureEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    const bolIsExistCond_V2 = await TabFeature_CheckUniCond4Add(objTabFeatureEN);
    if (bolIsExistCond_V2 == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await TabFeature_AddNewRecordWithMaxIdAsync(objTabFeatureEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      TabFeature_ReFreshCache(objTabFeatureEN.prjId);
    } else {
      const strInfo = `添加[表功能(TabFeature)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${tabFeature_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function TabFeature_CheckUniCond4Add(
  objTabFeatureEN: clsTabFeatureEN,
): Promise<boolean> {
  const strUniquenessCondition = TabFeature_GetUniCondStr(objTabFeatureEN);
  const bolIsExistCondition = await TabFeature_IsExistRecordAsync(strUniquenessCondition);
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
/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function TabFeature_CheckUniCond4Add_V2(
  objTabFeatureEN: clsTabFeatureEN,
): Promise<boolean> {
  const strUniquenessCondition = TabFeature_GetUniCondStr(objTabFeatureEN);
  const bolIsExistCondition = await TabFeature_IsExistRecordAsync(strUniquenessCondition);
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
export async function TabFeature_CheckUniCond4Update(
  objTabFeatureEN: clsTabFeatureEN,
): Promise<boolean> {
  const strUniquenessCondition = TabFeature_GetUniCondStr4Update(objTabFeatureEN);
  const bolIsExistCondition = await TabFeature_IsExistRecordAsync(strUniquenessCondition);
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
export async function TabFeature_CheckUniCond4Update_V2(
  objTabFeatureEN: clsTabFeatureEN,
): Promise<boolean> {
  const strUniquenessCondition = TabFeature_GetUniCondStr4Update(objTabFeatureEN);
  const bolIsExistCondition = await TabFeature_IsExistRecordAsync(strUniquenessCondition);
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
export async function TabFeature_UpdateObjSave(objTabFeatureEN: clsTabFeatureEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objTabFeatureEN.sfUpdFldSetStr = objTabFeatureEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objTabFeatureEN.tabFeatureId == '' || objTabFeatureEN.tabFeatureId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    TabFeature_CheckProperty4Update(objTabFeatureEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${tabFeature_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await TabFeature_CheckUniCond4Update(objTabFeatureEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const bolIsExistCond_V2 = await TabFeature_CheckUniCond4Update(objTabFeatureEN);
    if (bolIsExistCond_V2 == false) {
      return false;
    }
    const returnBool = await TabFeature_UpdateRecordAsync(objTabFeatureEN);
    if (returnBool == true) {
      TabFeature_ReFreshCache(objTabFeatureEN.prjId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${tabFeature_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objTabFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabFeature_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objTabFeatureEN);
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param objTabFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TabFeature_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objTabFeatureEN);
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param objTabFeatureEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function TabFeature_AddNewRecordWithReturnKeyAsync(
  objTabFeatureEN: clsTabFeatureEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFeatureEN, config);
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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param objTabFeatureEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function TabFeature_UpdateRecordAsync(
  objTabFeatureEN: clsTabFeatureEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objTabFeatureEN.sfUpdFldSetStr === undefined ||
    objTabFeatureEN.sfUpdFldSetStr === null ||
    objTabFeatureEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabFeatureEN.tabFeatureId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFeatureEN, config);
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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param objTabFeatureEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function TabFeature_EditRecordExAsync(
  objTabFeatureEN: clsTabFeatureEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objTabFeatureEN.sfUpdFldSetStr === undefined ||
    objTabFeatureEN.sfUpdFldSetStr === null ||
    objTabFeatureEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabFeatureEN.tabFeatureId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFeatureEN, config);
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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param objTabFeatureEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function TabFeature_UpdateWithConditionAsync(
  objTabFeatureEN: clsTabFeatureEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objTabFeatureEN.sfUpdFldSetStr === undefined ||
    objTabFeatureEN.sfUpdFldSetStr === null ||
    objTabFeatureEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTabFeatureEN.tabFeatureId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);
  objTabFeatureEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTabFeatureEN, config);
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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param objstrTabFeatureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function TabFeature_IsExistRecordCache(
  objTabFeatureCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrTabFeatureObjLstCache = await TabFeature_GetObjLstCache(strPrjId);
  if (arrTabFeatureObjLstCache == null) return false;
  let arrTabFeatureSel = arrTabFeatureObjLstCache;
  if (objTabFeatureCond.GetConditions().length == 0)
    return arrTabFeatureSel.length > 0 ? true : false;
  try {
    for (const objCondition of objTabFeatureCond.GetConditions()) {
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
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrTabFeatureSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objTabFeatureCond),
      tabFeature_ConstructorName,
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
export async function TabFeature_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param strTabFeatureId:所给的关键字
 * @returns 对象
 */
export async function TabFeature_IsExistCache(strTabFeatureId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrTabFeatureObjLstCache = await TabFeature_GetObjLstCache(strPrjId);
  if (arrTabFeatureObjLstCache == null) return false;
  try {
    const arrTabFeatureSel = arrTabFeatureObjLstCache.filter(
      (x) => x.tabFeatureId == strTabFeatureId,
    );
    if (arrTabFeatureSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTabFeatureId,
      tabFeature_ConstructorName,
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
 * @param strTabFeatureId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function TabFeature_IsExistAsync(strTabFeatureId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabFeatureId,
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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
export async function TabFeature_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * @param objTabFeatureCond:条件对象
 * @returns 对象列表记录数
 */
export async function TabFeature_GetRecCountByCondCache(
  objTabFeatureCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrTabFeatureObjLstCache = await TabFeature_GetObjLstCache(strPrjId);
  if (arrTabFeatureObjLstCache == null) return 0;
  let arrTabFeatureSel = arrTabFeatureObjLstCache;
  if (objTabFeatureCond.GetConditions().length == 0) return arrTabFeatureSel.length;
  try {
    for (const objCondition of objTabFeatureCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrTabFeatureSel = arrTabFeatureSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrTabFeatureSel = arrTabFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrTabFeatureSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objTabFeatureCond),
      tabFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefixAsync)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 **/
export async function TabFeature_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdByPrefixAsync';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function TabFeature_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(tabFeature_Controller, strAction);

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
        tabFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        tabFeature_ConstructorName,
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
export function TabFeature_GetWebApiUrl(strController: string, strAction: string): string {
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
export function TabFeature_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsTabFeatureWApi.clsTabFeatureWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsTabFeatureWApi.clsTabFeatureWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsTabFeatureEN._CurrTabName, strPrjId);
  switch (clsTabFeatureEN.CacheModeId) {
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
  clsTabFeatureEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function TabFeature_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsTabFeatureWApi.TabFeature_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsTabFeatureWApi.TabFeature_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsTabFeatureEN._CurrTabName, strPrjId);
    switch (clsTabFeatureEN.CacheModeId) {
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
    clsTabFeatureEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function TabFeature_GetLastRefreshTime(): string {
  if (clsTabFeatureEN._RefreshTimeLst.length == 0) return '';
  return clsTabFeatureEN._RefreshTimeLst[clsTabFeatureEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strTabId:
 * @param strPrjId:
*/
export async function TabFeature_BindDdl_TabFeatureIdByTabIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strTabId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空！(In clsTabFeatureWApi.BindDdl_TabFeatureIdByTabIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确！(clsTabFeatureWApi.BindDdl_TabFeatureIdByTabIdInDiv)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsTabFeatureWApi.BindDdl_TabFeatureIdByTabIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsTabFeatureWApi.BindDdl_TabFeatureIdByTabIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_TabFeatureIdByTabIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_TabFeatureIdByTabIdInDivCache");
  let arrObjLstSel = await TabFeature_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.tabId == strTabId && x.prjId == strPrjId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsTabFeatureEN.con_TabFeatureId,
    clsTabFeatureEN.con_TabFeatureName,
    '表功能...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strTabId:
 * @param strPrjId:
*/
export async function TabFeature_GetArrTabFeatureByTabId(strTabId: string, strPrjId: string) {
  if (IsNullOrEmpty(strTabId) == true) {
    const strMsg = Format(
      '参数:[strTabId]不能为空！(In clsTabFeatureWApi.BindDdl_TabFeatureIdByTabIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabId]的长度:[{0}]不正确！(clsTabFeatureWApi.BindDdl_TabFeatureIdByTabIdInDiv)',
      strTabId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsTabFeatureWApi.BindDdl_TabFeatureIdByTabIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsTabFeatureWApi.BindDdl_TabFeatureIdByTabIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_TabFeatureIdByTabIdInDivCache");
  const arrTabFeature = new Array<clsTabFeatureEN>();
  let arrObjLstSel = await TabFeature_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.tabId == strTabId && x.prjId == strPrjId);
  const obj0 = new clsTabFeatureEN();
  obj0.tabFeatureId = '0';
  obj0.tabFeatureName = '选表功能...';
  arrTabFeature.push(obj0);
  arrObjLstSel.forEach((x) => arrTabFeature.push(x));
  return arrTabFeature;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TabFeature_CheckPropertyNew(pobjTabFeatureEN: clsTabFeatureEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjTabFeatureEN.tabFeatureName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[表功能名]不能为空(In 表功能)!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjTabFeatureEN.tabId) === true || pobjTabFeatureEN.tabId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[表ID]不能为空(In 表功能)!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.featureId) === true ||
    pobjTabFeatureEN.featureId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[功能Id]不能为空(In 表功能)!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjTabFeatureEN.prjId) === true || pobjTabFeatureEN.prjId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 表功能)!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjTabFeatureEN.updUser) === true) {
    throw new Error(
      `(errid:Watl000411)字段[修改者]不能为空(In 表功能)!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTabFeatureEN.tabFeatureId) == false &&
    GetStrLen(pobjTabFeatureEN.tabFeatureId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表功能Id(tabFeatureId)]的长度不能超过8(In 表功能(TabFeature))!值:${pobjTabFeatureEN.tabFeatureId}(clsTabFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.tabFeatureName) == false &&
    GetStrLen(pobjTabFeatureEN.tabFeatureName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表功能名(tabFeatureName)]的长度不能超过100(In 表功能(TabFeature))!值:${pobjTabFeatureEN.tabFeatureName}(clsTabFeatureBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjTabFeatureEN.tabId) == false && GetStrLen(pobjTabFeatureEN.tabId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 表功能(TabFeature))!值:${pobjTabFeatureEN.tabId}(clsTabFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.featureId) == false &&
    GetStrLen(pobjTabFeatureEN.featureId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能Id(featureId)]的长度不能超过4(In 表功能(TabFeature))!值:${pobjTabFeatureEN.featureId}(clsTabFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.funcNameCs) == false &&
    GetStrLen(pobjTabFeatureEN.funcNameCs) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Cs函数名(funcNameCs)]的长度不能超过100(In 表功能(TabFeature))!值:${pobjTabFeatureEN.funcNameCs}(clsTabFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.funcNameJs) == false &&
    GetStrLen(pobjTabFeatureEN.funcNameJs) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Js函数名(funcNameJs)]的长度不能超过100(In 表功能(TabFeature))!值:${pobjTabFeatureEN.funcNameJs}(clsTabFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.getDdlDataFuncName4Ex) == false &&
    GetStrLen(pobjTabFeatureEN.getDdlDataFuncName4Ex) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[获取Ddl函数名(getDdlDataFuncName4Ex)]的长度不能超过100(In 表功能(TabFeature))!值:${pobjTabFeatureEN.getDdlDataFuncName4Ex}(clsTabFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.checkDate) == false &&
    GetStrLen(pobjTabFeatureEN.checkDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[检查日期(checkDate)]的长度不能超过20(In 表功能(TabFeature))!值:${pobjTabFeatureEN.checkDate}(clsTabFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.toolTipText) == false &&
    GetStrLen(pobjTabFeatureEN.toolTipText) > 150
  ) {
    throw new Error(
      `(errid:Watl000413)字段[提示文字(toolTipText)]的长度不能超过150(In 表功能(TabFeature))!值:${pobjTabFeatureEN.toolTipText}(clsTabFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.errMsg) == false &&
    GetStrLen(pobjTabFeatureEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In 表功能(TabFeature))!值:${pobjTabFeatureEN.errMsg}(clsTabFeatureBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjTabFeatureEN.prjId) == false && GetStrLen(pobjTabFeatureEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 表功能(TabFeature))!值:${pobjTabFeatureEN.prjId}(clsTabFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.updUser) == false &&
    GetStrLen(pobjTabFeatureEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 表功能(TabFeature))!值:${pobjTabFeatureEN.updUser}(clsTabFeatureBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.updDate) == false &&
    GetStrLen(pobjTabFeatureEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 表功能(TabFeature))!值:${pobjTabFeatureEN.updDate}(clsTabFeatureBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjTabFeatureEN.memo) == false && GetStrLen(pobjTabFeatureEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 表功能(TabFeature))!值:${pobjTabFeatureEN.memo}(clsTabFeatureBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjTabFeatureEN.tabFeatureId) == false &&
    undefined !== pobjTabFeatureEN.tabFeatureId &&
    tzDataType.isString(pobjTabFeatureEN.tabFeatureId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表功能Id(tabFeatureId)]的值:[${pobjTabFeatureEN.tabFeatureId}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.tabFeatureName) == false &&
    undefined !== pobjTabFeatureEN.tabFeatureName &&
    tzDataType.isString(pobjTabFeatureEN.tabFeatureName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表功能名(tabFeatureName)]的值:[${pobjTabFeatureEN.tabFeatureName}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.tabId) == false &&
    undefined !== pobjTabFeatureEN.tabId &&
    tzDataType.isString(pobjTabFeatureEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表ID(tabId)]的值:[${pobjTabFeatureEN.tabId}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.featureId) == false &&
    undefined !== pobjTabFeatureEN.featureId &&
    tzDataType.isString(pobjTabFeatureEN.featureId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能Id(featureId)]的值:[${pobjTabFeatureEN.featureId}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.funcNameCs) == false &&
    undefined !== pobjTabFeatureEN.funcNameCs &&
    tzDataType.isString(pobjTabFeatureEN.funcNameCs) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Cs函数名(funcNameCs)]的值:[${pobjTabFeatureEN.funcNameCs}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjTabFeatureEN.isExtendedClass &&
    undefined !== pobjTabFeatureEN.isExtendedClass &&
    tzDataType.isBoolean(pobjTabFeatureEN.isExtendedClass) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在扩展类(isExtendedClass)]的值:[${pobjTabFeatureEN.isExtendedClass}], 非法,应该为布尔型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.funcNameJs) == false &&
    undefined !== pobjTabFeatureEN.funcNameJs &&
    tzDataType.isString(pobjTabFeatureEN.funcNameJs) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Js函数名(funcNameJs)]的值:[${pobjTabFeatureEN.funcNameJs}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.getDdlDataFuncName4Ex) == false &&
    undefined !== pobjTabFeatureEN.getDdlDataFuncName4Ex &&
    tzDataType.isString(pobjTabFeatureEN.getDdlDataFuncName4Ex) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[获取Ddl函数名(getDdlDataFuncName4Ex)]的值:[${pobjTabFeatureEN.getDdlDataFuncName4Ex}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjTabFeatureEN.isForCSharp &&
    undefined !== pobjTabFeatureEN.isForCSharp &&
    tzDataType.isBoolean(pobjTabFeatureEN.isForCSharp) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否ForCSharp(isForCSharp)]的值:[${pobjTabFeatureEN.isForCSharp}], 非法,应该为布尔型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjTabFeatureEN.isForTypeScript &&
    undefined !== pobjTabFeatureEN.isForTypeScript &&
    tzDataType.isBoolean(pobjTabFeatureEN.isForTypeScript) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否ForTypeScript(isForTypeScript)]的值:[${pobjTabFeatureEN.isForTypeScript}], 非法,应该为布尔型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjTabFeatureEN.isForDiv &&
    undefined !== pobjTabFeatureEN.isForDiv &&
    tzDataType.isBoolean(pobjTabFeatureEN.isForDiv) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否针对Div内控件(isForDiv)]的值:[${pobjTabFeatureEN.isForDiv}], 非法,应该为布尔型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjTabFeatureEN.isNeedGC &&
    undefined !== pobjTabFeatureEN.isNeedGC &&
    tzDataType.isBoolean(pobjTabFeatureEN.isNeedGC) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否需要生成代码(isNeedGC)]的值:[${pobjTabFeatureEN.isNeedGC}], 非法,应该为布尔型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjTabFeatureEN.useTimes &&
    undefined !== pobjTabFeatureEN.useTimes &&
    tzDataType.isNumber(pobjTabFeatureEN.useTimes) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[使用次数(useTimes)]的值:[${pobjTabFeatureEN.useTimes}], 非法,应该为数值型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjTabFeatureEN.orderNum &&
    undefined !== pobjTabFeatureEN.orderNum &&
    tzDataType.isNumber(pobjTabFeatureEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjTabFeatureEN.orderNum}], 非法,应该为数值型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjTabFeatureEN.isNullable &&
    undefined !== pobjTabFeatureEN.isNullable &&
    tzDataType.isBoolean(pobjTabFeatureEN.isNullable) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否可空(isNullable)]的值:[${pobjTabFeatureEN.isNullable}], 非法,应该为布尔型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjTabFeatureEN.inUse &&
    undefined !== pobjTabFeatureEN.inUse &&
    tzDataType.isBoolean(pobjTabFeatureEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjTabFeatureEN.inUse}], 非法,应该为布尔型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.checkDate) == false &&
    undefined !== pobjTabFeatureEN.checkDate &&
    tzDataType.isString(pobjTabFeatureEN.checkDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[检查日期(checkDate)]的值:[${pobjTabFeatureEN.checkDate}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.toolTipText) == false &&
    undefined !== pobjTabFeatureEN.toolTipText &&
    tzDataType.isString(pobjTabFeatureEN.toolTipText) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[提示文字(toolTipText)]的值:[${pobjTabFeatureEN.toolTipText}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.errMsg) == false &&
    undefined !== pobjTabFeatureEN.errMsg &&
    tzDataType.isString(pobjTabFeatureEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjTabFeatureEN.errMsg}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.prjId) == false &&
    undefined !== pobjTabFeatureEN.prjId &&
    tzDataType.isString(pobjTabFeatureEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjTabFeatureEN.prjId}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.updUser) == false &&
    undefined !== pobjTabFeatureEN.updUser &&
    tzDataType.isString(pobjTabFeatureEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjTabFeatureEN.updUser}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.updDate) == false &&
    undefined !== pobjTabFeatureEN.updDate &&
    tzDataType.isString(pobjTabFeatureEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjTabFeatureEN.updDate}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.memo) == false &&
    undefined !== pobjTabFeatureEN.memo &&
    tzDataType.isString(pobjTabFeatureEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjTabFeatureEN.memo}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjTabFeatureEN.tabId) == false &&
    pobjTabFeatureEN.tabId != '[nuull]' &&
    GetStrLen(pobjTabFeatureEN.tabId) != 8
  ) {
    throw '(errid:Watl000415)字段[表ID]作为外键字段,长度应该为8(In 表功能)!(clsTabFeatureBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TabFeature_CheckProperty4Update(pobjTabFeatureEN: clsTabFeatureEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTabFeatureEN.tabFeatureId) == false &&
    GetStrLen(pobjTabFeatureEN.tabFeatureId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表功能Id(tabFeatureId)]的长度不能超过8(In 表功能(TabFeature))!值:${pobjTabFeatureEN.tabFeatureId}(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.tabFeatureName) == false &&
    GetStrLen(pobjTabFeatureEN.tabFeatureName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表功能名(tabFeatureName)]的长度不能超过100(In 表功能(TabFeature))!值:${pobjTabFeatureEN.tabFeatureName}(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjTabFeatureEN.tabId) == false && GetStrLen(pobjTabFeatureEN.tabId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 表功能(TabFeature))!值:${pobjTabFeatureEN.tabId}(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.featureId) == false &&
    GetStrLen(pobjTabFeatureEN.featureId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能Id(featureId)]的长度不能超过4(In 表功能(TabFeature))!值:${pobjTabFeatureEN.featureId}(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.funcNameCs) == false &&
    GetStrLen(pobjTabFeatureEN.funcNameCs) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Cs函数名(funcNameCs)]的长度不能超过100(In 表功能(TabFeature))!值:${pobjTabFeatureEN.funcNameCs}(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.funcNameJs) == false &&
    GetStrLen(pobjTabFeatureEN.funcNameJs) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Js函数名(funcNameJs)]的长度不能超过100(In 表功能(TabFeature))!值:${pobjTabFeatureEN.funcNameJs}(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.getDdlDataFuncName4Ex) == false &&
    GetStrLen(pobjTabFeatureEN.getDdlDataFuncName4Ex) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[获取Ddl函数名(getDdlDataFuncName4Ex)]的长度不能超过100(In 表功能(TabFeature))!值:${pobjTabFeatureEN.getDdlDataFuncName4Ex}(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.checkDate) == false &&
    GetStrLen(pobjTabFeatureEN.checkDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[检查日期(checkDate)]的长度不能超过20(In 表功能(TabFeature))!值:${pobjTabFeatureEN.checkDate}(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.toolTipText) == false &&
    GetStrLen(pobjTabFeatureEN.toolTipText) > 150
  ) {
    throw new Error(
      `(errid:Watl000416)字段[提示文字(toolTipText)]的长度不能超过150(In 表功能(TabFeature))!值:${pobjTabFeatureEN.toolTipText}(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.errMsg) == false &&
    GetStrLen(pobjTabFeatureEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In 表功能(TabFeature))!值:${pobjTabFeatureEN.errMsg}(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjTabFeatureEN.prjId) == false && GetStrLen(pobjTabFeatureEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 表功能(TabFeature))!值:${pobjTabFeatureEN.prjId}(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.updUser) == false &&
    GetStrLen(pobjTabFeatureEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 表功能(TabFeature))!值:${pobjTabFeatureEN.updUser}(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.updDate) == false &&
    GetStrLen(pobjTabFeatureEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 表功能(TabFeature))!值:${pobjTabFeatureEN.updDate}(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjTabFeatureEN.memo) == false && GetStrLen(pobjTabFeatureEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 表功能(TabFeature))!值:${pobjTabFeatureEN.memo}(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjTabFeatureEN.tabFeatureId) == false &&
    undefined !== pobjTabFeatureEN.tabFeatureId &&
    tzDataType.isString(pobjTabFeatureEN.tabFeatureId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表功能Id(tabFeatureId)]的值:[${pobjTabFeatureEN.tabFeatureId}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.tabFeatureName) == false &&
    undefined !== pobjTabFeatureEN.tabFeatureName &&
    tzDataType.isString(pobjTabFeatureEN.tabFeatureName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表功能名(tabFeatureName)]的值:[${pobjTabFeatureEN.tabFeatureName}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.tabId) == false &&
    undefined !== pobjTabFeatureEN.tabId &&
    tzDataType.isString(pobjTabFeatureEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表ID(tabId)]的值:[${pobjTabFeatureEN.tabId}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.featureId) == false &&
    undefined !== pobjTabFeatureEN.featureId &&
    tzDataType.isString(pobjTabFeatureEN.featureId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能Id(featureId)]的值:[${pobjTabFeatureEN.featureId}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.funcNameCs) == false &&
    undefined !== pobjTabFeatureEN.funcNameCs &&
    tzDataType.isString(pobjTabFeatureEN.funcNameCs) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Cs函数名(funcNameCs)]的值:[${pobjTabFeatureEN.funcNameCs}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjTabFeatureEN.isExtendedClass &&
    undefined !== pobjTabFeatureEN.isExtendedClass &&
    tzDataType.isBoolean(pobjTabFeatureEN.isExtendedClass) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在扩展类(isExtendedClass)]的值:[${pobjTabFeatureEN.isExtendedClass}], 非法,应该为布尔型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.funcNameJs) == false &&
    undefined !== pobjTabFeatureEN.funcNameJs &&
    tzDataType.isString(pobjTabFeatureEN.funcNameJs) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Js函数名(funcNameJs)]的值:[${pobjTabFeatureEN.funcNameJs}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.getDdlDataFuncName4Ex) == false &&
    undefined !== pobjTabFeatureEN.getDdlDataFuncName4Ex &&
    tzDataType.isString(pobjTabFeatureEN.getDdlDataFuncName4Ex) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[获取Ddl函数名(getDdlDataFuncName4Ex)]的值:[${pobjTabFeatureEN.getDdlDataFuncName4Ex}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjTabFeatureEN.isForCSharp &&
    undefined !== pobjTabFeatureEN.isForCSharp &&
    tzDataType.isBoolean(pobjTabFeatureEN.isForCSharp) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否ForCSharp(isForCSharp)]的值:[${pobjTabFeatureEN.isForCSharp}], 非法,应该为布尔型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjTabFeatureEN.isForTypeScript &&
    undefined !== pobjTabFeatureEN.isForTypeScript &&
    tzDataType.isBoolean(pobjTabFeatureEN.isForTypeScript) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否ForTypeScript(isForTypeScript)]的值:[${pobjTabFeatureEN.isForTypeScript}], 非法,应该为布尔型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjTabFeatureEN.isForDiv &&
    undefined !== pobjTabFeatureEN.isForDiv &&
    tzDataType.isBoolean(pobjTabFeatureEN.isForDiv) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否针对Div内控件(isForDiv)]的值:[${pobjTabFeatureEN.isForDiv}], 非法,应该为布尔型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjTabFeatureEN.isNeedGC &&
    undefined !== pobjTabFeatureEN.isNeedGC &&
    tzDataType.isBoolean(pobjTabFeatureEN.isNeedGC) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否需要生成代码(isNeedGC)]的值:[${pobjTabFeatureEN.isNeedGC}], 非法,应该为布尔型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjTabFeatureEN.useTimes &&
    undefined !== pobjTabFeatureEN.useTimes &&
    tzDataType.isNumber(pobjTabFeatureEN.useTimes) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[使用次数(useTimes)]的值:[${pobjTabFeatureEN.useTimes}], 非法,应该为数值型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjTabFeatureEN.orderNum &&
    undefined !== pobjTabFeatureEN.orderNum &&
    tzDataType.isNumber(pobjTabFeatureEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjTabFeatureEN.orderNum}], 非法,应该为数值型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjTabFeatureEN.isNullable &&
    undefined !== pobjTabFeatureEN.isNullable &&
    tzDataType.isBoolean(pobjTabFeatureEN.isNullable) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否可空(isNullable)]的值:[${pobjTabFeatureEN.isNullable}], 非法,应该为布尔型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjTabFeatureEN.inUse &&
    undefined !== pobjTabFeatureEN.inUse &&
    tzDataType.isBoolean(pobjTabFeatureEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjTabFeatureEN.inUse}], 非法,应该为布尔型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.checkDate) == false &&
    undefined !== pobjTabFeatureEN.checkDate &&
    tzDataType.isString(pobjTabFeatureEN.checkDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[检查日期(checkDate)]的值:[${pobjTabFeatureEN.checkDate}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.toolTipText) == false &&
    undefined !== pobjTabFeatureEN.toolTipText &&
    tzDataType.isString(pobjTabFeatureEN.toolTipText) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[提示文字(toolTipText)]的值:[${pobjTabFeatureEN.toolTipText}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.errMsg) == false &&
    undefined !== pobjTabFeatureEN.errMsg &&
    tzDataType.isString(pobjTabFeatureEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjTabFeatureEN.errMsg}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.prjId) == false &&
    undefined !== pobjTabFeatureEN.prjId &&
    tzDataType.isString(pobjTabFeatureEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjTabFeatureEN.prjId}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.updUser) == false &&
    undefined !== pobjTabFeatureEN.updUser &&
    tzDataType.isString(pobjTabFeatureEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjTabFeatureEN.updUser}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.updDate) == false &&
    undefined !== pobjTabFeatureEN.updDate &&
    tzDataType.isString(pobjTabFeatureEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjTabFeatureEN.updDate}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjTabFeatureEN.memo) == false &&
    undefined !== pobjTabFeatureEN.memo &&
    tzDataType.isString(pobjTabFeatureEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjTabFeatureEN.memo}], 非法,应该为字符型(In 表功能(TabFeature))!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjTabFeatureEN.tabFeatureId) === true ||
    pobjTabFeatureEN.tabFeatureId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[表功能Id]不能为空(In 表功能)!(clsTabFeatureBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjTabFeatureEN.tabId) == false &&
    pobjTabFeatureEN.tabId != '[nuull]' &&
    GetStrLen(pobjTabFeatureEN.tabId) != 8
  ) {
    throw '(errid:Watl000418)字段[表ID]作为外键字段,长度应该为8(In 表功能)!(clsTabFeatureBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TabFeature_GetJSONStrByObj(pobjTabFeatureEN: clsTabFeatureEN): string {
  pobjTabFeatureEN.sfUpdFldSetStr = pobjTabFeatureEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjTabFeatureEN);
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
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function TabFeature_GetObjLstByJSONStr(strJSON: string): Array<clsTabFeatureEN> {
  let arrTabFeatureObjLst = new Array<clsTabFeatureEN>();
  if (strJSON === '') {
    return arrTabFeatureObjLst;
  }
  try {
    arrTabFeatureObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrTabFeatureObjLst;
  }
  return arrTabFeatureObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrTabFeatureObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function TabFeature_GetObjLstByJSONObjLst(
  arrTabFeatureObjLstS: Array<clsTabFeatureEN>,
): Array<clsTabFeatureEN> {
  const arrTabFeatureObjLst = new Array<clsTabFeatureEN>();
  for (const objInFor of arrTabFeatureObjLstS) {
    const obj1 = TabFeature_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrTabFeatureObjLst.push(obj1);
  }
  return arrTabFeatureObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TabFeature_GetObjByJSONStr(strJSON: string): clsTabFeatureEN {
  let pobjTabFeatureEN = new clsTabFeatureEN();
  if (strJSON === '') {
    return pobjTabFeatureEN;
  }
  try {
    pobjTabFeatureEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjTabFeatureEN;
  }
  return pobjTabFeatureEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function TabFeature_GetCombineCondition(objTabFeatureCond: clsTabFeatureEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_TabFeatureId,
    ) == true
  ) {
    const strComparisonOpTabFeatureId: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_TabFeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureEN.con_TabFeatureId,
      objTabFeatureCond.tabFeatureId,
      strComparisonOpTabFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_TabFeatureName,
    ) == true
  ) {
    const strComparisonOpTabFeatureName: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_TabFeatureName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureEN.con_TabFeatureName,
      objTabFeatureCond.tabFeatureName,
      strComparisonOpTabFeatureName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureEN.con_TabId,
      objTabFeatureCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_FeatureId,
    ) == true
  ) {
    const strComparisonOpFeatureId: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_FeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureEN.con_FeatureId,
      objTabFeatureCond.featureId,
      strComparisonOpFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_FuncNameCs,
    ) == true
  ) {
    const strComparisonOpFuncNameCs: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_FuncNameCs];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureEN.con_FuncNameCs,
      objTabFeatureCond.funcNameCs,
      strComparisonOpFuncNameCs,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_IsExtendedClass,
    ) == true
  ) {
    if (objTabFeatureCond.isExtendedClass == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsExtendedClass);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsExtendedClass);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_FuncNameJs,
    ) == true
  ) {
    const strComparisonOpFuncNameJs: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_FuncNameJs];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureEN.con_FuncNameJs,
      objTabFeatureCond.funcNameJs,
      strComparisonOpFuncNameJs,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_GetDdlDataFuncName4Ex,
    ) == true
  ) {
    const strComparisonOpGetDdlDataFuncName4Ex: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_GetDdlDataFuncName4Ex];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureEN.con_GetDdlDataFuncName4Ex,
      objTabFeatureCond.getDdlDataFuncName4Ex,
      strComparisonOpGetDdlDataFuncName4Ex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_IsForCSharp,
    ) == true
  ) {
    if (objTabFeatureCond.isForCSharp == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsForCSharp);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsForCSharp);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_IsForTypeScript,
    ) == true
  ) {
    if (objTabFeatureCond.isForTypeScript == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsForTypeScript);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsForTypeScript);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_IsForDiv,
    ) == true
  ) {
    if (objTabFeatureCond.isForDiv == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsForDiv);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsForDiv);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_IsNeedGC,
    ) == true
  ) {
    if (objTabFeatureCond.isNeedGC == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsNeedGC);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsNeedGC);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_UseTimes,
    ) == true
  ) {
    const strComparisonOpUseTimes: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_UseTimes];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsTabFeatureEN.con_UseTimes,
      objTabFeatureCond.useTimes,
      strComparisonOpUseTimes,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsTabFeatureEN.con_OrderNum,
      objTabFeatureCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_IsNullable,
    ) == true
  ) {
    if (objTabFeatureCond.isNullable == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_IsNullable);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_IsNullable);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_InUse,
    ) == true
  ) {
    if (objTabFeatureCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsTabFeatureEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsTabFeatureEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_CheckDate,
    ) == true
  ) {
    const strComparisonOpCheckDate: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_CheckDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureEN.con_CheckDate,
      objTabFeatureCond.checkDate,
      strComparisonOpCheckDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_ToolTipText,
    ) == true
  ) {
    const strComparisonOpToolTipText: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_ToolTipText];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureEN.con_ToolTipText,
      objTabFeatureCond.toolTipText,
      strComparisonOpToolTipText,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureEN.con_ErrMsg,
      objTabFeatureCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureEN.con_PrjId,
      objTabFeatureCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureEN.con_UpdUser,
      objTabFeatureCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureEN.con_UpdDate,
      objTabFeatureCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTabFeatureCond.dicFldComparisonOp,
      clsTabFeatureEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objTabFeatureCond.dicFldComparisonOp[clsTabFeatureEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTabFeatureEN.con_Memo,
      objTabFeatureCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TabFeature(表功能),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strFeatureId: 功能Id(要求唯一的字段)
 * @param strTabFeatureName: 表功能名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TabFeature_GetUniCondStr(objTabFeatureEN: clsTabFeatureEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabId = '{0}'", objTabFeatureEN.tabId);
  strWhereCond += Format(" and FeatureId = '{0}'", objTabFeatureEN.featureId);
  strWhereCond += Format(" and TabFeatureName = '{0}'", objTabFeatureEN.tabFeatureName);
  return strWhereCond;
}
/**
 *获取唯一性条件串(Uniqueness)--TabFeature(表功能),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strFeatureId: 功能Id(要求唯一的字段)
 * @param strFuncNameCs: Cs函数名(要求唯一的字段)
 * @param strFuncNameJs: Js函数名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TabFeature_GetUniCondStr_V2(objTabFeatureEN: clsTabFeatureEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabId = '{0}'", objTabFeatureEN.tabId);
  strWhereCond += Format(" and FeatureId = '{0}'", objTabFeatureEN.featureId);
  strWhereCond += Format(" and FuncNameCs = '{0}'", objTabFeatureEN.funcNameCs);
  strWhereCond += Format(" and FuncNameJs = '{0}'", objTabFeatureEN.funcNameJs);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TabFeature(表功能),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strFeatureId: 功能Id(要求唯一的字段)
 * @param strTabFeatureName: 表功能名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TabFeature_GetUniCondStr4Update(objTabFeatureEN: clsTabFeatureEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabFeatureId <> '{0}'", objTabFeatureEN.tabFeatureId);
  strWhereCond += Format(" and TabId = '{0}'", objTabFeatureEN.tabId);
  strWhereCond += Format(" and FeatureId = '{0}'", objTabFeatureEN.featureId);
  strWhereCond += Format(" and TabFeatureName = '{0}'", objTabFeatureEN.tabFeatureName);
  return strWhereCond;
}
/**
 *获取唯一性条件串(Uniqueness)--TabFeature(表功能),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strFeatureId: 功能Id(要求唯一的字段)
 * @param strFuncNameCs: Cs函数名(要求唯一的字段)
 * @param strFuncNameJs: Js函数名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TabFeature_GetUniCondStr4Update_V2(objTabFeatureEN: clsTabFeatureEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabFeatureId <> '{0}'", objTabFeatureEN.tabFeatureId);
  strWhereCond += Format(" and TabId = '{0}'", objTabFeatureEN.tabId);
  strWhereCond += Format(" and FeatureId = '{0}'", objTabFeatureEN.featureId);
  strWhereCond += Format(" and FuncNameCs = '{0}'", objTabFeatureEN.funcNameCs);
  strWhereCond += Format(" and FuncNameJs = '{0}'", objTabFeatureEN.funcNameJs);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objTabFeatureENS:源对象
 * @param objTabFeatureENT:目标对象
 */
export function TabFeature_GetObjFromJsonObj(objTabFeatureENS: clsTabFeatureEN): clsTabFeatureEN {
  const objTabFeatureENT: clsTabFeatureEN = new clsTabFeatureEN();
  ObjectAssign(objTabFeatureENT, objTabFeatureENS);
  return objTabFeatureENT;
}
