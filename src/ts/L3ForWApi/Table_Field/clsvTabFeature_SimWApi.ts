/**
 * 类名:clsvTabFeature_SimWApi
 * 表名:vTabFeature_Sim(00050613)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:59:48
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
 * v表功能_Sim(vTabFeature_Sim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsvTabFeature_SimEN } from '@/ts/L0Entity/Table_Field/clsvTabFeature_SimEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vTabFeature_Sim_Controller = 'vTabFeature_SimApi';
export const vTabFeature_Sim_ConstructorName = 'vTabFeature_Sim';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTabFeatureId:关键字
 * @returns 对象
 **/
export async function vTabFeature_Sim_GetObjByTabFeatureIdAsync(
  strTabFeatureId: string,
): Promise<clsvTabFeature_SimEN | null> {
  const strThisFuncName = 'GetObjByTabFeatureIdAsync';

  if (IsNullOrEmpty(strTabFeatureId) == true) {
    const strMsg = Format(
      '参数:[strTabFeatureId]不能为空!(In clsvTabFeature_SimWApi.GetObjByTabFeatureIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabFeatureId]的长度:[{0}]不正确!(clsvTabFeature_SimWApi.GetObjByTabFeatureIdAsync)',
      strTabFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTabFeatureId';
  const strUrl = GetWebApiUrl(vTabFeature_Sim_Controller, strAction);

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
      const objvTabFeature_Sim = vTabFeature_Sim_GetObjFromJsonObj(returnObj);
      return objvTabFeature_Sim;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vTabFeature_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_GetObjByTabFeatureIdlocalStorage(strTabFeatureId: string) {
  const strThisFuncName = 'GetObjByTabFeatureIdlocalStorage';

  if (IsNullOrEmpty(strTabFeatureId) == true) {
    const strMsg = Format(
      '参数:[strTabFeatureId]不能为空!(In clsvTabFeature_SimWApi.GetObjByTabFeatureIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabFeatureId]的长度:[{0}]不正确!(clsvTabFeature_SimWApi.GetObjByTabFeatureIdlocalStorage)',
      strTabFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvTabFeature_SimEN._CurrTabName, strTabFeatureId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvTabFeature_SimCache: clsvTabFeature_SimEN = JSON.parse(strTempObj);
    return objvTabFeature_SimCache;
  }
  try {
    const objvTabFeature_Sim = await vTabFeature_Sim_GetObjByTabFeatureIdAsync(strTabFeatureId);
    if (objvTabFeature_Sim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvTabFeature_Sim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvTabFeature_Sim;
    }
    return objvTabFeature_Sim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabFeatureId,
      vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_GetObjByTabFeatureIdCache(
  strTabFeatureId: string,
  strCmPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTabFeatureIdCache';

  if (IsNullOrEmpty(strTabFeatureId) == true) {
    const strMsg = Format(
      '参数:[strTabFeatureId]不能为空!(In clsvTabFeature_SimWApi.GetObjByTabFeatureIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTabFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strTabFeatureId]的长度:[{0}]不正确!(clsvTabFeature_SimWApi.GetObjByTabFeatureIdCache)',
      strTabFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvTabFeature_SimObjLstCache = await vTabFeature_Sim_GetObjLstCache(strCmPrjId);
  try {
    const arrvTabFeature_SimSel = arrvTabFeature_SimObjLstCache.filter(
      (x) => x.tabFeatureId == strTabFeatureId,
    );
    let objvTabFeature_Sim: clsvTabFeature_SimEN;
    if (arrvTabFeature_SimSel.length > 0) {
      objvTabFeature_Sim = arrvTabFeature_SimSel[0];
      return objvTabFeature_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvTabFeature_SimConst = await vTabFeature_Sim_GetObjByTabFeatureIdAsync(
          strTabFeatureId,
        );
        if (objvTabFeature_SimConst != null) {
          vTabFeature_Sim_ReFreshThisCache(strCmPrjId);
          return objvTabFeature_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTabFeatureId,
      vTabFeature_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
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
export function vTabFeature_Sim_SortFunDefa(
  a: clsvTabFeature_SimEN,
  b: clsvTabFeature_SimEN,
): number {
  return a.tabFeatureId.localeCompare(b.tabFeatureId);
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
export function vTabFeature_Sim_SortFunDefa2Fld(
  a: clsvTabFeature_SimEN,
  b: clsvTabFeature_SimEN,
): number {
  if (a.tabFeatureName == b.tabFeatureName) return a.tabId.localeCompare(b.tabId);
  else return a.tabFeatureName.localeCompare(b.tabFeatureName);
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
export function vTabFeature_Sim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvTabFeature_SimEN.con_TabFeatureId:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          return a.tabFeatureId.localeCompare(b.tabFeatureId);
        };
      case clsvTabFeature_SimEN.con_TabFeatureName:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          if (a.tabFeatureName == null) return -1;
          if (b.tabFeatureName == null) return 1;
          return a.tabFeatureName.localeCompare(b.tabFeatureName);
        };
      case clsvTabFeature_SimEN.con_TabId:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsvTabFeature_SimEN.con_OrderNum:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvTabFeature_SimEN.con_InUse:
        return (a: clsvTabFeature_SimEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsvTabFeature_SimEN.con_UpdUser:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvTabFeature_SimEN.con_UpdDate:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvTabFeature_SimEN.con_Memo:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvTabFeature_SimEN.con_FeatureId:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          return a.featureId.localeCompare(b.featureId);
        };
      case clsvTabFeature_SimEN.con_FuncNameCs:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          return a.funcNameCs.localeCompare(b.funcNameCs);
        };
      case clsvTabFeature_SimEN.con_GetDdlDataFuncName4Ex:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          if (a.getDdlDataFuncName4Ex == null) return -1;
          if (b.getDdlDataFuncName4Ex == null) return 1;
          return a.getDdlDataFuncName4Ex.localeCompare(b.getDdlDataFuncName4Ex);
        };
      case clsvTabFeature_SimEN.con_CmPrjId:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsvTabFeature_SimEN.con_FuncNameJs:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          return a.funcNameJs.localeCompare(b.funcNameJs);
        };
      case clsvTabFeature_SimEN.con_IsForDiv:
        return (a: clsvTabFeature_SimEN) => {
          if (a.isForDiv == true) return 1;
          else return -1;
        };
      case clsvTabFeature_SimEN.con_IsForCSharp:
        return (a: clsvTabFeature_SimEN) => {
          if (a.isForCSharp == true) return 1;
          else return -1;
        };
      case clsvTabFeature_SimEN.con_IsForTypeScript:
        return (a: clsvTabFeature_SimEN) => {
          if (a.isForTypeScript == true) return 1;
          else return -1;
        };
      case clsvTabFeature_SimEN.con_IsExtendedClass:
        return (a: clsvTabFeature_SimEN) => {
          if (a.isExtendedClass == true) return 1;
          else return -1;
        };
      case clsvTabFeature_SimEN.con_IsNeedGC:
        return (a: clsvTabFeature_SimEN) => {
          if (a.isNeedGC == true) return 1;
          else return -1;
        };
      case clsvTabFeature_SimEN.con_ToolTipText:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          if (a.toolTipText == null) return -1;
          if (b.toolTipText == null) return 1;
          return a.toolTipText.localeCompare(b.toolTipText);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vTabFeature_Sim]中不存在!(in ${vTabFeature_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvTabFeature_SimEN.con_TabFeatureId:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          return b.tabFeatureId.localeCompare(a.tabFeatureId);
        };
      case clsvTabFeature_SimEN.con_TabFeatureName:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          if (b.tabFeatureName == null) return -1;
          if (a.tabFeatureName == null) return 1;
          return b.tabFeatureName.localeCompare(a.tabFeatureName);
        };
      case clsvTabFeature_SimEN.con_TabId:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsvTabFeature_SimEN.con_OrderNum:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvTabFeature_SimEN.con_InUse:
        return (b: clsvTabFeature_SimEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsvTabFeature_SimEN.con_UpdUser:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvTabFeature_SimEN.con_UpdDate:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvTabFeature_SimEN.con_Memo:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvTabFeature_SimEN.con_FeatureId:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          return b.featureId.localeCompare(a.featureId);
        };
      case clsvTabFeature_SimEN.con_FuncNameCs:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          return b.funcNameCs.localeCompare(a.funcNameCs);
        };
      case clsvTabFeature_SimEN.con_GetDdlDataFuncName4Ex:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          if (b.getDdlDataFuncName4Ex == null) return -1;
          if (a.getDdlDataFuncName4Ex == null) return 1;
          return b.getDdlDataFuncName4Ex.localeCompare(a.getDdlDataFuncName4Ex);
        };
      case clsvTabFeature_SimEN.con_CmPrjId:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsvTabFeature_SimEN.con_FuncNameJs:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          return b.funcNameJs.localeCompare(a.funcNameJs);
        };
      case clsvTabFeature_SimEN.con_IsForDiv:
        return (b: clsvTabFeature_SimEN) => {
          if (b.isForDiv == true) return 1;
          else return -1;
        };
      case clsvTabFeature_SimEN.con_IsForCSharp:
        return (b: clsvTabFeature_SimEN) => {
          if (b.isForCSharp == true) return 1;
          else return -1;
        };
      case clsvTabFeature_SimEN.con_IsForTypeScript:
        return (b: clsvTabFeature_SimEN) => {
          if (b.isForTypeScript == true) return 1;
          else return -1;
        };
      case clsvTabFeature_SimEN.con_IsExtendedClass:
        return (b: clsvTabFeature_SimEN) => {
          if (b.isExtendedClass == true) return 1;
          else return -1;
        };
      case clsvTabFeature_SimEN.con_IsNeedGC:
        return (b: clsvTabFeature_SimEN) => {
          if (b.isNeedGC == true) return 1;
          else return -1;
        };
      case clsvTabFeature_SimEN.con_ToolTipText:
        return (a: clsvTabFeature_SimEN, b: clsvTabFeature_SimEN) => {
          if (b.toolTipText == null) return -1;
          if (a.toolTipText == null) return 1;
          return b.toolTipText.localeCompare(a.toolTipText);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vTabFeature_Sim]中不存在!(in ${vTabFeature_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vTabFeature_Sim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvTabFeature_SimEN.con_TabFeatureId:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.tabFeatureId === value;
      };
    case clsvTabFeature_SimEN.con_TabFeatureName:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.tabFeatureName === value;
      };
    case clsvTabFeature_SimEN.con_TabId:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.tabId === value;
      };
    case clsvTabFeature_SimEN.con_OrderNum:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.orderNum === value;
      };
    case clsvTabFeature_SimEN.con_InUse:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.inUse === value;
      };
    case clsvTabFeature_SimEN.con_UpdUser:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.updUser === value;
      };
    case clsvTabFeature_SimEN.con_UpdDate:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.updDate === value;
      };
    case clsvTabFeature_SimEN.con_Memo:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.memo === value;
      };
    case clsvTabFeature_SimEN.con_FeatureId:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.featureId === value;
      };
    case clsvTabFeature_SimEN.con_FuncNameCs:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.funcNameCs === value;
      };
    case clsvTabFeature_SimEN.con_GetDdlDataFuncName4Ex:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.getDdlDataFuncName4Ex === value;
      };
    case clsvTabFeature_SimEN.con_CmPrjId:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.cmPrjId === value;
      };
    case clsvTabFeature_SimEN.con_FuncNameJs:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.funcNameJs === value;
      };
    case clsvTabFeature_SimEN.con_IsForDiv:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.isForDiv === value;
      };
    case clsvTabFeature_SimEN.con_IsForCSharp:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.isForCSharp === value;
      };
    case clsvTabFeature_SimEN.con_IsForTypeScript:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.isForTypeScript === value;
      };
    case clsvTabFeature_SimEN.con_IsExtendedClass:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.isExtendedClass === value;
      };
    case clsvTabFeature_SimEN.con_IsNeedGC:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.isNeedGC === value;
      };
    case clsvTabFeature_SimEN.con_ToolTipText:
      return (obj: clsvTabFeature_SimEN) => {
        return obj.toolTipText === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vTabFeature_Sim]中不存在!(in ${vTabFeature_Sim_ConstructorName}.${strThisFuncName})`;
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
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vTabFeature_Sim_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strCmPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strCmPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strCmPrjIdClassfy]不能为空!(In clsvTabFeature_SimWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjIdClassfy.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjIdClassfy]的长度:[{0}]不正确!(clsvTabFeature_SimWApi.func)',
      strCmPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvTabFeature_SimEN.con_TabFeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvTabFeature_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvTabFeature_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTabFeatureId = strInValue;
  if (IsNullOrEmpty(strTabFeatureId) == true) {
    return '';
  }
  const objvTabFeature_Sim = await vTabFeature_Sim_GetObjByTabFeatureIdCache(
    strTabFeatureId,
    strCmPrjIdClassfy,
  );
  if (objvTabFeature_Sim == null) return '';
  if (objvTabFeature_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvTabFeature_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vTabFeature_Sim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCmPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCmPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strCmPrjIdClassfy]不能为空!(In clsvTabFeature_SimWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjIdClassfy.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjIdClassfy]的长度:[{0}]不正确!(clsvTabFeature_SimWApi.funcKey)',
      strCmPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvTabFeature_SimEN.con_TabFeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvTabFeature_Sim = await vTabFeature_Sim_GetObjLstCache(strCmPrjIdClassfy);
  if (arrvTabFeature_Sim == null) return [];
  let arrvTabFeature_SimSel = arrvTabFeature_Sim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvTabFeature_SimSel.length == 0) return [];
  return arrvTabFeature_SimSel.map((x) => x.tabFeatureId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vTabFeature_Sim_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vTabFeature_Sim_Controller, strAction);

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
        vTabFeature_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vTabFeature_Sim_Controller, strAction);

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
        vTabFeature_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vTabFeature_Sim_Controller, strAction);

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
        vTabFeature_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvTabFeature_SimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vTabFeature_Sim_Controller, strAction);

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
      const objvTabFeature_Sim = vTabFeature_Sim_GetObjFromJsonObj(returnObj);
      return objvTabFeature_Sim;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vTabFeature_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_GetObjLstClientCache(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvTabFeature_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvTabFeature_SimEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("CmPrjId='{0}'", strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsvTabFeature_SimEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsvTabFeature_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvTabFeature_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvTabFeature_SimExObjLstCache: Array<clsvTabFeature_SimEN> = CacheHelper.Get(strKey);
    const arrvTabFeature_SimObjLstT = vTabFeature_Sim_GetObjLstByJSONObjLst(
      arrvTabFeature_SimExObjLstCache,
    );
    return arrvTabFeature_SimObjLstT;
  }
  try {
    const arrvTabFeature_SimExObjLst = await vTabFeature_Sim_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvTabFeature_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvTabFeature_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvTabFeature_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_GetObjLstlocalStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvTabFeature_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvTabFeature_SimEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvTabFeature_SimEN.con_CmPrjId, strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsvTabFeature_SimEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsvTabFeature_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvTabFeature_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvTabFeature_SimExObjLstCache: Array<clsvTabFeature_SimEN> = JSON.parse(strTempObjLst);
    const arrvTabFeature_SimObjLstT = vTabFeature_Sim_GetObjLstByJSONObjLst(
      arrvTabFeature_SimExObjLstCache,
    );
    return arrvTabFeature_SimObjLstT;
  }
  try {
    const arrvTabFeature_SimExObjLst = await vTabFeature_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvTabFeature_SimEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvTabFeature_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvTabFeature_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvTabFeature_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_GetObjLstlocalStoragePureCache(strCmPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvTabFeature_SimEN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvTabFeature_SimObjLstCache: Array<clsvTabFeature_SimEN> = JSON.parse(strTempObjLst);
    return arrvTabFeature_SimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vTabFeature_Sim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvTabFeature_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vTabFeature_Sim_Controller, strAction);

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
          vTabFeature_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabFeature_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vTabFeature_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_GetObjLstsessionStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvTabFeature_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvTabFeature_SimEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvTabFeature_SimEN.con_CmPrjId, strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsvTabFeature_SimEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsvTabFeature_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvTabFeature_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvTabFeature_SimExObjLstCache: Array<clsvTabFeature_SimEN> = JSON.parse(strTempObjLst);
    const arrvTabFeature_SimObjLstT = vTabFeature_Sim_GetObjLstByJSONObjLst(
      arrvTabFeature_SimExObjLstCache,
    );
    return arrvTabFeature_SimObjLstT;
  }
  try {
    const arrvTabFeature_SimExObjLst = await vTabFeature_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvTabFeature_SimEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvTabFeature_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvTabFeature_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvTabFeature_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_GetObjLstsessionStoragePureCache(strCmPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvTabFeature_SimEN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvTabFeature_SimObjLstCache: Array<clsvTabFeature_SimEN> = JSON.parse(strTempObjLst);
    return arrvTabFeature_SimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vTabFeature_Sim_GetObjLstCache(
  strCmPrjId: string,
): Promise<Array<clsvTabFeature_SimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空！(In clsvTabFeature_SimWApi.vTabFeature_Sim_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！(clsvTabFeature_SimWApi.vTabFeature_Sim_GetObjLstCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvTabFeature_SimObjLstCache;
  switch (clsvTabFeature_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvTabFeature_SimObjLstCache = await vTabFeature_Sim_GetObjLstsessionStorage(strCmPrjId);
      break;
    case '03': //localStorage
      arrvTabFeature_SimObjLstCache = await vTabFeature_Sim_GetObjLstlocalStorage(strCmPrjId);
      break;
    case '02': //ClientCache
      arrvTabFeature_SimObjLstCache = await vTabFeature_Sim_GetObjLstClientCache(strCmPrjId);
      break;
    default:
      arrvTabFeature_SimObjLstCache = await vTabFeature_Sim_GetObjLstClientCache(strCmPrjId);
      break;
  }
  return arrvTabFeature_SimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vTabFeature_Sim_GetObjLstPureCache(strCmPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvTabFeature_SimObjLstCache;
  switch (clsvTabFeature_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvTabFeature_SimObjLstCache = await vTabFeature_Sim_GetObjLstsessionStoragePureCache(
        strCmPrjId,
      );
      break;
    case '03': //localStorage
      arrvTabFeature_SimObjLstCache = await vTabFeature_Sim_GetObjLstlocalStoragePureCache(
        strCmPrjId,
      );
      break;
    case '02': //ClientCache
      arrvTabFeature_SimObjLstCache = null;
      break;
    default:
      arrvTabFeature_SimObjLstCache = null;
      break;
  }
  return arrvTabFeature_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTabFeatureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vTabFeature_Sim_GetSubObjLstCache(
  objvTabFeature_SimCond: ConditionCollection,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvTabFeature_SimObjLstCache = await vTabFeature_Sim_GetObjLstCache(strCmPrjId);
  let arrvTabFeature_SimSel = arrvTabFeature_SimObjLstCache;
  if (objvTabFeature_SimCond.GetConditions().length == 0) return arrvTabFeature_SimSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objvTabFeature_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvTabFeature_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvTabFeature_SimCond),
      vTabFeature_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvTabFeature_SimEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTabFeatureId:关键字列表
 * @returns 对象列表
 **/
export async function vTabFeature_Sim_GetObjLstByTabFeatureIdLstAsync(
  arrTabFeatureId: Array<string>,
): Promise<Array<clsvTabFeature_SimEN>> {
  const strThisFuncName = 'GetObjLstByTabFeatureIdLstAsync';
  const strAction = 'GetObjLstByTabFeatureIdLst';
  const strUrl = GetWebApiUrl(vTabFeature_Sim_Controller, strAction);

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
          vTabFeature_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabFeature_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vTabFeature_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_GetObjLstByTabFeatureIdLstCache(
  arrTabFeatureIdLst: Array<string>,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByTabFeatureIdLstCache';
  try {
    const arrvTabFeature_SimObjLstCache = await vTabFeature_Sim_GetObjLstCache(strCmPrjId);
    const arrvTabFeature_SimSel = arrvTabFeature_SimObjLstCache.filter(
      (x) => arrTabFeatureIdLst.indexOf(x.tabFeatureId) > -1,
    );
    return arrvTabFeature_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTabFeatureIdLst.join(','),
      vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvTabFeature_SimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vTabFeature_Sim_Controller, strAction);

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
          vTabFeature_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabFeature_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vTabFeature_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvTabFeature_SimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vTabFeature_Sim_Controller, strAction);

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
          vTabFeature_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabFeature_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vTabFeature_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeature_Sim_ConstructorName,
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
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrTabFeatureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vTabFeature_Sim_IsExistRecordCache(
  objvTabFeature_SimCond: ConditionCollection,
  strCmPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvTabFeature_SimObjLstCache = await vTabFeature_Sim_GetObjLstCache(strCmPrjId);
  if (arrvTabFeature_SimObjLstCache == null) return false;
  let arrvTabFeature_SimSel = arrvTabFeature_SimObjLstCache;
  if (objvTabFeature_SimCond.GetConditions().length == 0)
    return arrvTabFeature_SimSel.length > 0 ? true : false;
  try {
    for (const objCondition of objvTabFeature_SimCond.GetConditions()) {
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
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvTabFeature_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvTabFeature_SimCond),
      vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vTabFeature_Sim_Controller, strAction);

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
        vTabFeature_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_IsExistCache(strTabFeatureId: string, strCmPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvTabFeature_SimObjLstCache = await vTabFeature_Sim_GetObjLstCache(strCmPrjId);
  if (arrvTabFeature_SimObjLstCache == null) return false;
  try {
    const arrvTabFeature_SimSel = arrvTabFeature_SimObjLstCache.filter(
      (x) => x.tabFeatureId == strTabFeatureId,
    );
    if (arrvTabFeature_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTabFeatureId,
      vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_IsExistAsync(strTabFeatureId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vTabFeature_Sim_Controller, strAction);

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
        vTabFeature_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeature_Sim_ConstructorName,
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
export async function vTabFeature_Sim_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vTabFeature_Sim_Controller, strAction);

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
        vTabFeature_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabFeature_Sim_ConstructorName,
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
 * @param objvTabFeature_SimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vTabFeature_Sim_GetRecCountByCondCache(
  objvTabFeature_SimCond: ConditionCollection,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvTabFeature_SimObjLstCache = await vTabFeature_Sim_GetObjLstCache(strCmPrjId);
  if (arrvTabFeature_SimObjLstCache == null) return 0;
  let arrvTabFeature_SimSel = arrvTabFeature_SimObjLstCache;
  if (objvTabFeature_SimCond.GetConditions().length == 0) return arrvTabFeature_SimSel.length;
  try {
    for (const objCondition of objvTabFeature_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvTabFeature_SimSel = arrvTabFeature_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvTabFeature_SimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvTabFeature_SimCond),
      vTabFeature_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vTabFeature_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vTabFeature_Sim_ReFreshThisCache(strCmPrjId: string): void {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsvTabFeature_SimWApi.vTabFeature_Sim_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsvTabFeature_SimWApi.vTabFeature_Sim_ReFreshThisCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvTabFeature_SimEN._CurrTabName, strCmPrjId);
    switch (clsvTabFeature_SimEN.CacheModeId) {
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
    clsvTabFeature_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function vTabFeature_Sim_GetLastRefreshTime(): string {
  if (clsvTabFeature_SimEN._RefreshTimeLst.length == 0) return '';
  return clsvTabFeature_SimEN._RefreshTimeLst[clsvTabFeature_SimEN._RefreshTimeLst.length - 1];
}

//(IsNeedGC == false)该表下拉框功能不需要生成;

//(IsNeedGC == false)该表下拉框功能不需要生成;

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vTabFeature_Sim_GetJSONStrByObj(
  pobjvTabFeature_SimEN: clsvTabFeature_SimEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvTabFeature_SimEN);
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
export function vTabFeature_Sim_GetObjLstByJSONStr(strJSON: string): Array<clsvTabFeature_SimEN> {
  let arrvTabFeature_SimObjLst = new Array<clsvTabFeature_SimEN>();
  if (strJSON === '') {
    return arrvTabFeature_SimObjLst;
  }
  try {
    arrvTabFeature_SimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvTabFeature_SimObjLst;
  }
  return arrvTabFeature_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvTabFeature_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vTabFeature_Sim_GetObjLstByJSONObjLst(
  arrvTabFeature_SimObjLstS: Array<clsvTabFeature_SimEN>,
): Array<clsvTabFeature_SimEN> {
  const arrvTabFeature_SimObjLst = new Array<clsvTabFeature_SimEN>();
  for (const objInFor of arrvTabFeature_SimObjLstS) {
    const obj1 = vTabFeature_Sim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvTabFeature_SimObjLst.push(obj1);
  }
  return arrvTabFeature_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vTabFeature_Sim_GetObjByJSONStr(strJSON: string): clsvTabFeature_SimEN {
  let pobjvTabFeature_SimEN = new clsvTabFeature_SimEN();
  if (strJSON === '') {
    return pobjvTabFeature_SimEN;
  }
  try {
    pobjvTabFeature_SimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvTabFeature_SimEN;
  }
  return pobjvTabFeature_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vTabFeature_Sim_GetCombineCondition(
  objvTabFeature_SimCond: clsvTabFeature_SimEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_TabFeatureId,
    ) == true
  ) {
    const strComparisonOpTabFeatureId: string =
      objvTabFeature_SimCond.dicFldComparisonOp[clsvTabFeature_SimEN.con_TabFeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeature_SimEN.con_TabFeatureId,
      objvTabFeature_SimCond.tabFeatureId,
      strComparisonOpTabFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_TabFeatureName,
    ) == true
  ) {
    const strComparisonOpTabFeatureName: string =
      objvTabFeature_SimCond.dicFldComparisonOp[clsvTabFeature_SimEN.con_TabFeatureName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeature_SimEN.con_TabFeatureName,
      objvTabFeature_SimCond.tabFeatureName,
      strComparisonOpTabFeatureName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objvTabFeature_SimCond.dicFldComparisonOp[clsvTabFeature_SimEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeature_SimEN.con_TabId,
      objvTabFeature_SimCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvTabFeature_SimCond.dicFldComparisonOp[clsvTabFeature_SimEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvTabFeature_SimEN.con_OrderNum,
      objvTabFeature_SimCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_InUse,
    ) == true
  ) {
    if (objvTabFeature_SimCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsvTabFeature_SimEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvTabFeature_SimEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvTabFeature_SimCond.dicFldComparisonOp[clsvTabFeature_SimEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeature_SimEN.con_UpdUser,
      objvTabFeature_SimCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvTabFeature_SimCond.dicFldComparisonOp[clsvTabFeature_SimEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeature_SimEN.con_UpdDate,
      objvTabFeature_SimCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvTabFeature_SimCond.dicFldComparisonOp[clsvTabFeature_SimEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeature_SimEN.con_Memo,
      objvTabFeature_SimCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_FeatureId,
    ) == true
  ) {
    const strComparisonOpFeatureId: string =
      objvTabFeature_SimCond.dicFldComparisonOp[clsvTabFeature_SimEN.con_FeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeature_SimEN.con_FeatureId,
      objvTabFeature_SimCond.featureId,
      strComparisonOpFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_FuncNameCs,
    ) == true
  ) {
    const strComparisonOpFuncNameCs: string =
      objvTabFeature_SimCond.dicFldComparisonOp[clsvTabFeature_SimEN.con_FuncNameCs];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeature_SimEN.con_FuncNameCs,
      objvTabFeature_SimCond.funcNameCs,
      strComparisonOpFuncNameCs,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_GetDdlDataFuncName4Ex,
    ) == true
  ) {
    const strComparisonOpGetDdlDataFuncName4Ex: string =
      objvTabFeature_SimCond.dicFldComparisonOp[clsvTabFeature_SimEN.con_GetDdlDataFuncName4Ex];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeature_SimEN.con_GetDdlDataFuncName4Ex,
      objvTabFeature_SimCond.getDdlDataFuncName4Ex,
      strComparisonOpGetDdlDataFuncName4Ex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objvTabFeature_SimCond.dicFldComparisonOp[clsvTabFeature_SimEN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeature_SimEN.con_CmPrjId,
      objvTabFeature_SimCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_FuncNameJs,
    ) == true
  ) {
    const strComparisonOpFuncNameJs: string =
      objvTabFeature_SimCond.dicFldComparisonOp[clsvTabFeature_SimEN.con_FuncNameJs];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeature_SimEN.con_FuncNameJs,
      objvTabFeature_SimCond.funcNameJs,
      strComparisonOpFuncNameJs,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_IsForDiv,
    ) == true
  ) {
    if (objvTabFeature_SimCond.isForDiv == true) {
      strWhereCond += Format(" And {0} = '1'", clsvTabFeature_SimEN.con_IsForDiv);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvTabFeature_SimEN.con_IsForDiv);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_IsForCSharp,
    ) == true
  ) {
    if (objvTabFeature_SimCond.isForCSharp == true) {
      strWhereCond += Format(" And {0} = '1'", clsvTabFeature_SimEN.con_IsForCSharp);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvTabFeature_SimEN.con_IsForCSharp);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_IsForTypeScript,
    ) == true
  ) {
    if (objvTabFeature_SimCond.isForTypeScript == true) {
      strWhereCond += Format(" And {0} = '1'", clsvTabFeature_SimEN.con_IsForTypeScript);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvTabFeature_SimEN.con_IsForTypeScript);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_IsExtendedClass,
    ) == true
  ) {
    if (objvTabFeature_SimCond.isExtendedClass == true) {
      strWhereCond += Format(" And {0} = '1'", clsvTabFeature_SimEN.con_IsExtendedClass);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvTabFeature_SimEN.con_IsExtendedClass);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_IsNeedGC,
    ) == true
  ) {
    if (objvTabFeature_SimCond.isNeedGC == true) {
      strWhereCond += Format(" And {0} = '1'", clsvTabFeature_SimEN.con_IsNeedGC);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvTabFeature_SimEN.con_IsNeedGC);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabFeature_SimCond.dicFldComparisonOp,
      clsvTabFeature_SimEN.con_ToolTipText,
    ) == true
  ) {
    const strComparisonOpToolTipText: string =
      objvTabFeature_SimCond.dicFldComparisonOp[clsvTabFeature_SimEN.con_ToolTipText];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabFeature_SimEN.con_ToolTipText,
      objvTabFeature_SimCond.toolTipText,
      strComparisonOpToolTipText,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvTabFeature_SimENS:源对象
 * @param objvTabFeature_SimENT:目标对象
 */
export function vTabFeature_Sim_GetObjFromJsonObj(
  objvTabFeature_SimENS: clsvTabFeature_SimEN,
): clsvTabFeature_SimEN {
  const objvTabFeature_SimENT: clsvTabFeature_SimEN = new clsvTabFeature_SimEN();
  ObjectAssign(objvTabFeature_SimENT, objvTabFeature_SimENS);
  return objvTabFeature_SimENT;
}
