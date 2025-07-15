/**
 * 类名:clsFuncModule_AgcWApi
 * 表名:FuncModule_Agc(00050015)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/13 23:53:39
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:工程管理(PrjManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 模块(FuncModule_Agc)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月13日.
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
import { funcModule_AgcCache, isFuncMapCache } from '@/views/PrjManage/FuncModule_AgcVueShare';
import { clsFuncModule_AgcENEx } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcENEx';
import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
import { UseState_func } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
import { clsUseStateEN } from '@/ts/L0Entity/SysPara/clsUseStateEN';
import { vFuncModuleViewNum_func } from '@/ts/L3ForWApi/PrjManage/clsvFuncModuleViewNumWApi';
import { clsvFuncModuleViewNumEN } from '@/ts/L0Entity/PrjManage/clsvFuncModuleViewNumEN';
import { vFuncModuleTabNum_func } from '@/ts/L3ForWApi/PrjManage/clsvFuncModuleTabNumWApi';
import { clsvFuncModuleTabNumEN } from '@/ts/L0Entity/PrjManage/clsvFuncModuleTabNumEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const funcModule_Agc_Controller = 'FuncModule_AgcApi';
export const funcModule_Agc_ConstructorName = 'funcModule_Agc';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFuncModuleAgcId:关键字
 * @returns 对象
 **/
export async function FuncModule_Agc_GetObjByFuncModuleAgcIdAsync(
  strFuncModuleAgcId: string,
): Promise<clsFuncModule_AgcEN | null> {
  const strThisFuncName = 'GetObjByFuncModuleAgcIdAsync';

  if (IsNullOrEmpty(strFuncModuleAgcId) == true) {
    const strMsg = Format(
      '参数:[strFuncModuleAgcId]不能为空!(In clsFuncModule_AgcWApi.GetObjByFuncModuleAgcIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncModuleAgcId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncModuleAgcId]的长度:[{0}]不正确!(clsFuncModule_AgcWApi.GetObjByFuncModuleAgcIdAsync)',
      strFuncModuleAgcId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFuncModuleAgcId';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncModuleAgcId,
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
      const objFuncModule_Agc = FuncModule_Agc_GetObjFromJsonObj(returnObj);
      return objFuncModule_Agc;
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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param strFuncModuleAgcId:所给的关键字
 * @returns 对象
 */
export async function FuncModule_Agc_GetObjByFuncModuleAgcIdlocalStorage(
  strFuncModuleAgcId: string,
) {
  const strThisFuncName = 'GetObjByFuncModuleAgcIdlocalStorage';

  if (IsNullOrEmpty(strFuncModuleAgcId) == true) {
    const strMsg = Format(
      '参数:[strFuncModuleAgcId]不能为空!(In clsFuncModule_AgcWApi.GetObjByFuncModuleAgcIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncModuleAgcId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncModuleAgcId]的长度:[{0}]不正确!(clsFuncModule_AgcWApi.GetObjByFuncModuleAgcIdlocalStorage)',
      strFuncModuleAgcId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFuncModule_AgcEN._CurrTabName, strFuncModuleAgcId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFuncModule_AgcCache: clsFuncModule_AgcEN = JSON.parse(strTempObj);
    return objFuncModule_AgcCache;
  }
  try {
    const objFuncModule_Agc = await FuncModule_Agc_GetObjByFuncModuleAgcIdAsync(strFuncModuleAgcId);
    if (objFuncModule_Agc != null) {
      localStorage.setItem(strKey, JSON.stringify(objFuncModule_Agc));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFuncModule_Agc;
    }
    return objFuncModule_Agc;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncModuleAgcId,
      funcModule_Agc_ConstructorName,
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
 * @param strFuncModuleAgcId:所给的关键字
 * @returns 对象
 */
export async function FuncModule_Agc_GetObjByFuncModuleAgcIdCache(
  strFuncModuleAgcId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFuncModuleAgcIdCache';

  if (IsNullOrEmpty(strFuncModuleAgcId) == true) {
    const strMsg = Format(
      '参数:[strFuncModuleAgcId]不能为空!(In clsFuncModule_AgcWApi.GetObjByFuncModuleAgcIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncModuleAgcId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncModuleAgcId]的长度:[{0}]不正确!(clsFuncModule_AgcWApi.GetObjByFuncModuleAgcIdCache)',
      strFuncModuleAgcId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFuncModule_AgcObjLstCache = await FuncModule_Agc_GetObjLstCache(strPrjId);
  try {
    const arrFuncModule_AgcSel = arrFuncModule_AgcObjLstCache.filter(
      (x) => x.funcModuleAgcId == strFuncModuleAgcId,
    );
    let objFuncModule_Agc: clsFuncModule_AgcEN;
    if (arrFuncModule_AgcSel.length > 0) {
      objFuncModule_Agc = arrFuncModule_AgcSel[0];
      return objFuncModule_Agc;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFuncModule_AgcConst = await FuncModule_Agc_GetObjByFuncModuleAgcIdAsync(
          strFuncModuleAgcId,
        );
        if (objFuncModule_AgcConst != null) {
          FuncModule_Agc_ReFreshThisCache(strPrjId);
          return objFuncModule_AgcConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFuncModuleAgcId,
      funcModule_Agc_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objFuncModule_Agc:所给的对象
 * @returns 对象
 */
export async function FuncModule_Agc_UpdateObjInLstCache(
  objFuncModule_Agc: clsFuncModule_AgcEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFuncModule_AgcObjLstCache = await FuncModule_Agc_GetObjLstCache(strPrjId);
    const obj = arrFuncModule_AgcObjLstCache.find(
      (x) =>
        x.funcModuleName == objFuncModule_Agc.funcModuleName && x.prjId == objFuncModule_Agc.prjId,
    );
    if (obj != null) {
      objFuncModule_Agc.funcModuleAgcId = obj.funcModuleAgcId;
      ObjectAssign(obj, objFuncModule_Agc);
    } else {
      arrFuncModule_AgcObjLstCache.push(objFuncModule_Agc);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      funcModule_Agc_ConstructorName,
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
export function FuncModule_Agc_SortFunDefa(a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN): number {
  return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
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
export function FuncModule_Agc_SortFunDefa2Fld(
  a: clsFuncModule_AgcEN,
  b: clsFuncModule_AgcEN,
): number {
  if (a.funcModuleName == b.funcModuleName)
    return a.funcModuleEnName.localeCompare(b.funcModuleEnName);
  else return a.funcModuleName.localeCompare(b.funcModuleName);
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
export function FuncModule_Agc_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFuncModule_AgcEN.con_FuncModuleAgcId:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
        };
      case clsFuncModule_AgcEN.con_FuncModuleName:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          return a.funcModuleName.localeCompare(b.funcModuleName);
        };
      case clsFuncModule_AgcEN.con_FuncModuleEnName:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          if (a.funcModuleEnName == null) return -1;
          if (b.funcModuleEnName == null) return 1;
          return a.funcModuleEnName.localeCompare(b.funcModuleEnName);
        };
      case clsFuncModule_AgcEN.con_FuncModuleNameSim:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          if (a.funcModuleNameSim == null) return -1;
          if (b.funcModuleNameSim == null) return 1;
          return a.funcModuleNameSim.localeCompare(b.funcModuleNameSim);
        };
      case clsFuncModule_AgcEN.con_PrjId:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsFuncModule_AgcEN.con_OrderNum:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsFuncModule_AgcEN.con_UseStateId:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          return a.useStateId.localeCompare(b.useStateId);
        };
      case clsFuncModule_AgcEN.con_UpdUser:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFuncModule_AgcEN.con_UpdDate:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFuncModule_AgcEN.con_Memo:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FuncModule_Agc]中不存在!(in ${funcModule_Agc_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFuncModule_AgcEN.con_FuncModuleAgcId:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
        };
      case clsFuncModule_AgcEN.con_FuncModuleName:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          return b.funcModuleName.localeCompare(a.funcModuleName);
        };
      case clsFuncModule_AgcEN.con_FuncModuleEnName:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          if (b.funcModuleEnName == null) return -1;
          if (a.funcModuleEnName == null) return 1;
          return b.funcModuleEnName.localeCompare(a.funcModuleEnName);
        };
      case clsFuncModule_AgcEN.con_FuncModuleNameSim:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          if (b.funcModuleNameSim == null) return -1;
          if (a.funcModuleNameSim == null) return 1;
          return b.funcModuleNameSim.localeCompare(a.funcModuleNameSim);
        };
      case clsFuncModule_AgcEN.con_PrjId:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsFuncModule_AgcEN.con_OrderNum:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsFuncModule_AgcEN.con_UseStateId:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          return b.useStateId.localeCompare(a.useStateId);
        };
      case clsFuncModule_AgcEN.con_UpdUser:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFuncModule_AgcEN.con_UpdDate:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFuncModule_AgcEN.con_Memo:
        return (a: clsFuncModule_AgcEN, b: clsFuncModule_AgcEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FuncModule_Agc]中不存在!(in ${funcModule_Agc_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFuncModuleAgcId:所给的关键字
 * @returns 对象
 */
export async function FuncModule_Agc_GetNameByFuncModuleAgcIdCache(
  strFuncModuleAgcId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strFuncModuleAgcId) == true) {
    const strMsg = Format(
      '参数:[strFuncModuleAgcId]不能为空!(In clsFuncModule_AgcWApi.GetNameByFuncModuleAgcIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFuncModuleAgcId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFuncModuleAgcId]的长度:[{0}]不正确!(clsFuncModule_AgcWApi.GetNameByFuncModuleAgcIdCache)',
      strFuncModuleAgcId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFuncModule_AgcObjLstCache = await FuncModule_Agc_GetObjLstCache(strPrjId);
  if (arrFuncModule_AgcObjLstCache == null) return '';
  try {
    const arrFuncModule_AgcSel = arrFuncModule_AgcObjLstCache.filter(
      (x) => x.funcModuleAgcId == strFuncModuleAgcId,
    );
    let objFuncModule_Agc: clsFuncModule_AgcEN;
    if (arrFuncModule_AgcSel.length > 0) {
      objFuncModule_Agc = arrFuncModule_AgcSel[0];
      return objFuncModule_Agc.funcModuleName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strFuncModuleAgcId,
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
export async function FuncModule_Agc_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFuncModule_AgcEN.con_FuncModuleAgcId:
      return (obj: clsFuncModule_AgcEN) => {
        return obj.funcModuleAgcId === value;
      };
    case clsFuncModule_AgcEN.con_FuncModuleName:
      return (obj: clsFuncModule_AgcEN) => {
        return obj.funcModuleName === value;
      };
    case clsFuncModule_AgcEN.con_FuncModuleEnName:
      return (obj: clsFuncModule_AgcEN) => {
        return obj.funcModuleEnName === value;
      };
    case clsFuncModule_AgcEN.con_FuncModuleNameSim:
      return (obj: clsFuncModule_AgcEN) => {
        return obj.funcModuleNameSim === value;
      };
    case clsFuncModule_AgcEN.con_PrjId:
      return (obj: clsFuncModule_AgcEN) => {
        return obj.prjId === value;
      };
    case clsFuncModule_AgcEN.con_OrderNum:
      return (obj: clsFuncModule_AgcEN) => {
        return obj.orderNum === value;
      };
    case clsFuncModule_AgcEN.con_UseStateId:
      return (obj: clsFuncModule_AgcEN) => {
        return obj.useStateId === value;
      };
    case clsFuncModule_AgcEN.con_UpdUser:
      return (obj: clsFuncModule_AgcEN) => {
        return obj.updUser === value;
      };
    case clsFuncModule_AgcEN.con_UpdDate:
      return (obj: clsFuncModule_AgcEN) => {
        return obj.updDate === value;
      };
    case clsFuncModule_AgcEN.con_Memo:
      return (obj: clsFuncModule_AgcEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FuncModule_Agc]中不存在!(in ${funcModule_Agc_ConstructorName}.${strThisFuncName})`;
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
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function FuncModule_Agc_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsFuncModule_AgcWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsFuncModule_AgcWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsFuncModule_AgcEN.con_FuncModuleAgcId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFuncModule_AgcEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFuncModule_AgcEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFuncModuleAgcId = strInValue;
  if (IsNullOrEmpty(strFuncModuleAgcId) == true) {
    return '';
  }
  const objFuncModule_Agc = await FuncModule_Agc_GetObjByFuncModuleAgcIdCache(
    strFuncModuleAgcId,
    strPrjIdClassfy,
  );
  if (objFuncModule_Agc == null) return '';
  if (objFuncModule_Agc.GetFldValue(strOutFldName) == null) return '';
  return objFuncModule_Agc.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function FuncModule_Agc_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsFuncModule_AgcWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsFuncModule_AgcWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsFuncModule_AgcEN.con_FuncModuleAgcId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrFuncModule_Agc = await FuncModule_Agc_GetObjLstCache(strPrjIdClassfy);
  if (arrFuncModule_Agc == null) return [];
  let arrFuncModule_AgcSel = arrFuncModule_Agc;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFuncModule_AgcSel.length == 0) return [];
  return arrFuncModule_AgcSel.map((x) => x.funcModuleAgcId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FuncModule_Agc_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFuncModule_AgcEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
      const objFuncModule_Agc = FuncModule_Agc_GetObjFromJsonObj(returnObj);
      return objFuncModule_Agc;
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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsFuncModule_AgcEN.WhereFormat) == false) {
    strWhereCond = Format(clsFuncModule_AgcEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsFuncModule_AgcEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsFuncModule_AgcEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFuncModule_AgcEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFuncModule_AgcExObjLstCache: Array<clsFuncModule_AgcEN> = CacheHelper.Get(strKey);
    const arrFuncModule_AgcObjLstT = FuncModule_Agc_GetObjLstByJSONObjLst(
      arrFuncModule_AgcExObjLstCache,
    );
    return arrFuncModule_AgcObjLstT;
  }
  try {
    const arrFuncModule_AgcExObjLst = await FuncModule_Agc_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrFuncModule_AgcExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFuncModule_AgcExObjLst.length,
    );
    console.log(strInfo);
    return arrFuncModule_AgcExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsFuncModule_AgcEN.WhereFormat) == false) {
    strWhereCond = Format(clsFuncModule_AgcEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsFuncModule_AgcEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsFuncModule_AgcEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsFuncModule_AgcEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFuncModule_AgcEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFuncModule_AgcExObjLstCache: Array<clsFuncModule_AgcEN> = JSON.parse(strTempObjLst);
    const arrFuncModule_AgcObjLstT = FuncModule_Agc_GetObjLstByJSONObjLst(
      arrFuncModule_AgcExObjLstCache,
    );
    return arrFuncModule_AgcObjLstT;
  }
  try {
    const arrFuncModule_AgcExObjLst = await FuncModule_Agc_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsFuncModule_AgcEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrFuncModule_AgcExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFuncModule_AgcExObjLst.length,
    );
    console.log(strInfo);
    return arrFuncModule_AgcExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsFuncModule_AgcEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFuncModule_AgcObjLstCache: Array<clsFuncModule_AgcEN> = JSON.parse(strTempObjLst);
    return arrFuncModule_AgcObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FuncModule_Agc_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFuncModule_AgcEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
          funcModule_Agc_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncModule_Agc_GetObjLstByJSONObjLst(returnObjLst);
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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsFuncModule_AgcEN.WhereFormat) == false) {
    strWhereCond = Format(clsFuncModule_AgcEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsFuncModule_AgcEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsFuncModule_AgcEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsFuncModule_AgcEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFuncModule_AgcEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFuncModule_AgcExObjLstCache: Array<clsFuncModule_AgcEN> = JSON.parse(strTempObjLst);
    const arrFuncModule_AgcObjLstT = FuncModule_Agc_GetObjLstByJSONObjLst(
      arrFuncModule_AgcExObjLstCache,
    );
    return arrFuncModule_AgcObjLstT;
  }
  try {
    const arrFuncModule_AgcExObjLst = await FuncModule_Agc_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsFuncModule_AgcEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrFuncModule_AgcExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFuncModule_AgcExObjLst.length,
    );
    console.log(strInfo);
    return arrFuncModule_AgcExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsFuncModule_AgcEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFuncModule_AgcObjLstCache: Array<clsFuncModule_AgcEN> = JSON.parse(strTempObjLst);
    return arrFuncModule_AgcObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FuncModule_Agc_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsFuncModule_AgcEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsFuncModule_AgcWApi.FuncModule_Agc_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsFuncModule_AgcWApi.FuncModule_Agc_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrFuncModule_AgcObjLstCache;
  switch (clsFuncModule_AgcEN.CacheModeId) {
    case '04': //sessionStorage
      arrFuncModule_AgcObjLstCache = await FuncModule_Agc_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrFuncModule_AgcObjLstCache = await FuncModule_Agc_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrFuncModule_AgcObjLstCache = await FuncModule_Agc_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrFuncModule_AgcObjLstCache = await FuncModule_Agc_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrFuncModule_AgcObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FuncModule_Agc_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFuncModule_AgcObjLstCache;
  switch (clsFuncModule_AgcEN.CacheModeId) {
    case '04': //sessionStorage
      arrFuncModule_AgcObjLstCache = await FuncModule_Agc_GetObjLstsessionStoragePureCache(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrFuncModule_AgcObjLstCache = await FuncModule_Agc_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrFuncModule_AgcObjLstCache = null;
      break;
    default:
      arrFuncModule_AgcObjLstCache = null;
      break;
  }
  return arrFuncModule_AgcObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFuncModuleAgcIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FuncModule_Agc_GetSubObjLstCache(
  objFuncModule_AgcCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFuncModule_AgcObjLstCache = await FuncModule_Agc_GetObjLstCache(strPrjId);
  let arrFuncModule_AgcSel = arrFuncModule_AgcObjLstCache;
  if (objFuncModule_AgcCond.GetConditions().length == 0) return arrFuncModule_AgcSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objFuncModule_AgcCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFuncModule_AgcSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFuncModule_AgcCond),
      funcModule_Agc_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFuncModule_AgcEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFuncModuleAgcId:关键字列表
 * @returns 对象列表
 **/
export async function FuncModule_Agc_GetObjLstByFuncModuleAgcIdLstAsync(
  arrFuncModuleAgcId: Array<string>,
): Promise<Array<clsFuncModule_AgcEN>> {
  const strThisFuncName = 'GetObjLstByFuncModuleAgcIdLstAsync';
  const strAction = 'GetObjLstByFuncModuleAgcIdLst';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncModuleAgcId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          funcModule_Agc_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncModule_Agc_GetObjLstByJSONObjLst(returnObjLst);
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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param arrstrFuncModuleAgcIdLst:关键字列表
 * @returns 对象列表
 */
export async function FuncModule_Agc_GetObjLstByFuncModuleAgcIdLstCache(
  arrFuncModuleAgcIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByFuncModuleAgcIdLstCache';
  try {
    const arrFuncModule_AgcObjLstCache = await FuncModule_Agc_GetObjLstCache(strPrjId);
    const arrFuncModule_AgcSel = arrFuncModule_AgcObjLstCache.filter(
      (x) => arrFuncModuleAgcIdLst.indexOf(x.funcModuleAgcId) > -1,
    );
    return arrFuncModule_AgcSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFuncModuleAgcIdLst.join(','),
      funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFuncModule_AgcEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
          funcModule_Agc_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncModule_Agc_GetObjLstByJSONObjLst(returnObjLst);
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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFuncModule_AgcEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
          funcModule_Agc_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncModule_Agc_GetObjLstByJSONObjLst(returnObjLst);
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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsFuncModule_AgcEN>();
  const arrFuncModule_AgcObjLstCache = await FuncModule_Agc_GetObjLstCache(strPrjId);
  if (arrFuncModule_AgcObjLstCache.length == 0) return arrFuncModule_AgcObjLstCache;
  let arrFuncModule_AgcSel = arrFuncModule_AgcObjLstCache;
  const objFuncModule_AgcCond = objPagerPara.conditionCollection;
  if (objFuncModule_AgcCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsFuncModule_AgcEN>();
  }
  //console.log("clsFuncModule_AgcWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objFuncModule_AgcCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFuncModule_AgcSel.length == 0) return arrFuncModule_AgcSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFuncModule_AgcSel = arrFuncModule_AgcSel.sort(
        FuncModule_Agc_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFuncModule_AgcSel = arrFuncModule_AgcSel.sort(objPagerPara.sortFun);
    }
    arrFuncModule_AgcSel = arrFuncModule_AgcSel.slice(intStart, intEnd);
    return arrFuncModule_AgcSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      funcModule_Agc_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFuncModule_AgcEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function FuncModule_Agc_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFuncModule_AgcEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFuncModule_AgcEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
          funcModule_Agc_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FuncModule_Agc_GetObjLstByJSONObjLst(returnObjLst);
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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param strFuncModuleAgcId:关键字
 * @returns 获取删除的结果
 **/
export async function FuncModule_Agc_DelRecordAsync(strFuncModuleAgcId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFuncModuleAgcId);

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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param arrFuncModuleAgcId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function FuncModule_Agc_DelFuncModule_AgcsAsync(
  arrFuncModuleAgcId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFuncModule_AgcsAsync';
  const strAction = 'DelFuncModule_Agcs';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFuncModuleAgcId, config);
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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
): Promise<Array<clsFuncModule_AgcENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrFuncModule_AgcObjLst = await FuncModule_Agc_GetObjLstCache(strPrjId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsFuncModule_AgcENEx>();
  const arrFuncModule_AgcExObjLst = arrFuncModule_AgcObjLst.map((obj) => {
    const cacheKey = `${obj.funcModuleAgcId}_${obj.prjId}`;
    if (funcModule_AgcCache[cacheKey]) {
      const oldObj = funcModule_AgcCache[cacheKey];
      return oldObj;
    } else {
      const newObj = FuncModule_Agc_CopyToEx(obj);
      arrNewObj.push(newObj);
      funcModule_AgcCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await FuncModule_Agc_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsFuncModule_AgcEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrFuncModule_AgcExObjLst) {
      await FuncModule_Agc_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.funcModuleAgcId}_${newObj.prjId}`;
      funcModule_AgcCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrFuncModule_AgcExObjLst.length == 0) return arrFuncModule_AgcExObjLst;
  let arrFuncModule_AgcSel: Array<clsFuncModule_AgcENEx> = arrFuncModule_AgcExObjLst;
  const objFuncModule_AgcCond = objPagerPara.conditionCollection;
  if (objFuncModule_AgcCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrFuncModule_AgcExObjLst;
  }
  try {
    for (const objCondition of objFuncModule_AgcCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFuncModule_AgcSel.length == 0) return arrFuncModule_AgcSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrFuncModule_AgcSel = arrFuncModule_AgcSel.sort(
        FuncModule_Agc_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFuncModule_AgcSel = arrFuncModule_AgcSel.sort(objPagerPara.sortFun);
    }
    arrFuncModule_AgcSel = arrFuncModule_AgcSel.slice(intStart, intEnd);
    return arrFuncModule_AgcSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      funcModule_Agc_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFuncModule_AgcENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objFuncModule_AgcENS:源对象
 * @returns 目标对象=>clsFuncModule_AgcEN:objFuncModule_AgcENT
 **/
export function FuncModule_Agc_CopyToEx(
  objFuncModule_AgcENS: clsFuncModule_AgcEN,
): clsFuncModule_AgcENEx {
  const strThisFuncName = FuncModule_Agc_CopyToEx.name;
  const objFuncModule_AgcENT = new clsFuncModule_AgcENEx();
  try {
    ObjectAssign(objFuncModule_AgcENT, objFuncModule_AgcENS);
    return objFuncModule_AgcENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcModule_Agc_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objFuncModule_AgcENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function FuncModule_Agc_FuncMapByFldName(
  strFldName: string,
  objFuncModule_AgcEx: clsFuncModule_AgcENEx,
) {
  const strThisFuncName = FuncModule_Agc_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsFuncModule_AgcEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsFuncModule_AgcENEx.con_UseStateName:
      return FuncModule_Agc_FuncMapUseStateName(objFuncModule_AgcEx);
    case clsFuncModule_AgcENEx.con_ViewNum:
      return FuncModule_Agc_FuncMapViewNum(objFuncModule_AgcEx);
    case clsFuncModule_AgcENEx.con_TabNum:
      return FuncModule_Agc_FuncMapTabNum(objFuncModule_AgcEx);
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
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function FuncModule_Agc_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFuncModule_AgcENEx.con_UseStateName:
        return (a: clsFuncModule_AgcENEx, b: clsFuncModule_AgcENEx) => {
          return a.useStateName.localeCompare(b.useStateName);
        };
      case clsFuncModule_AgcENEx.con_ViewNum:
        return (a: clsFuncModule_AgcENEx, b: clsFuncModule_AgcENEx) => {
          return a.viewNum - b.viewNum;
        };
      case clsFuncModule_AgcENEx.con_TabNum:
        return (a: clsFuncModule_AgcENEx, b: clsFuncModule_AgcENEx) => {
          return a.tabNum - b.tabNum;
        };
      case clsFuncModule_AgcENEx.con_PrjName:
        return (a: clsFuncModule_AgcENEx, b: clsFuncModule_AgcENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      default:
        return FuncModule_Agc_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsFuncModule_AgcENEx.con_UseStateName:
        return (a: clsFuncModule_AgcENEx, b: clsFuncModule_AgcENEx) => {
          return b.useStateName.localeCompare(a.useStateName);
        };
      case clsFuncModule_AgcENEx.con_ViewNum:
        return (a: clsFuncModule_AgcENEx, b: clsFuncModule_AgcENEx) => {
          return b.viewNum - a.viewNum;
        };
      case clsFuncModule_AgcENEx.con_TabNum:
        return (a: clsFuncModule_AgcENEx, b: clsFuncModule_AgcENEx) => {
          return b.tabNum - a.tabNum;
        };
      case clsFuncModule_AgcENEx.con_PrjName:
        return (a: clsFuncModule_AgcENEx, b: clsFuncModule_AgcENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      default:
        return FuncModule_Agc_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFuncModule_AgcS:源对象
 **/
export async function FuncModule_Agc_FuncMapUseStateName(objFuncModule_Agc: clsFuncModule_AgcENEx) {
  const strThisFuncName = FuncModule_Agc_FuncMapUseStateName.name;
  try {
    if (IsNullOrEmpty(objFuncModule_Agc.useStateName) == true) {
      const UseStateUseStateId = objFuncModule_Agc.useStateId;
      const UseStateUseStateName = await UseState_func(
        clsUseStateEN.con_UseStateId,
        clsUseStateEN.con_UseStateName,
        UseStateUseStateId,
      );
      objFuncModule_Agc.useStateName = UseStateUseStateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001317)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcModule_Agc_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFuncModule_AgcS:源对象
 **/
export async function FuncModule_Agc_FuncMapViewNum(objFuncModule_Agc: clsFuncModule_AgcENEx) {
  const strThisFuncName = FuncModule_Agc_FuncMapViewNum.name;
  try {
    if (objFuncModule_Agc.viewNum == 0) {
      const vFuncModuleViewNumFuncModuleAgcId = objFuncModule_Agc.funcModuleAgcId;
      if (IsNullOrEmpty(objFuncModule_Agc.prjId) == true) {
        const strMsg = `函数映射[ViewNum]数据出错,prjId不能为空!(in ${funcModule_Agc_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFuncModuleViewNumViewNum = await vFuncModuleViewNum_func(
        clsvFuncModuleViewNumEN.con_FuncModuleAgcId,
        clsvFuncModuleViewNumEN.con_ViewNum,
        vFuncModuleViewNumFuncModuleAgcId,
        objFuncModule_Agc.prjId,
      );
      objFuncModule_Agc.viewNum = vFuncModuleViewNumViewNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001350)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcModule_Agc_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objFuncModule_AgcS:源对象
 **/
export async function FuncModule_Agc_FuncMapTabNum(objFuncModule_Agc: clsFuncModule_AgcENEx) {
  const strThisFuncName = FuncModule_Agc_FuncMapTabNum.name;
  try {
    if (objFuncModule_Agc.tabNum == 0) {
      const vFuncModuleTabNumFuncModuleAgcId = objFuncModule_Agc.funcModuleAgcId;
      if (IsNullOrEmpty(objFuncModule_Agc.prjId) == true) {
        const strMsg = `函数映射[TabNum]数据出错,prjId不能为空!(in ${funcModule_Agc_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFuncModuleTabNumTabNum = await vFuncModuleTabNum_func(
        clsvFuncModuleTabNumEN.con_FuncModuleAgcId,
        clsvFuncModuleTabNumEN.con_TabNum,
        vFuncModuleTabNumFuncModuleAgcId,
        objFuncModule_Agc.prjId,
      );
      objFuncModule_Agc.tabNum = vFuncModuleTabNumTabNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001351)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_DelFuncModule_AgcsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFuncModule_AgcsByCondAsync';
  const strAction = 'DelFuncModule_AgcsByCond';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param objFuncModule_AgcEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncModule_Agc_AddNewRecordAsync(
  objFuncModule_AgcEN: clsFuncModule_AgcEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objFuncModule_AgcEN.funcModuleAgcId === null || objFuncModule_AgcEN.funcModuleAgcId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFuncModule_AgcEN);
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncModule_AgcEN, config);
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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param objFuncModule_AgcEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncModule_Agc_AddNewRecordWithMaxIdAsync(
  objFuncModule_AgcEN: clsFuncModule_AgcEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncModule_AgcEN, config);
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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param objFuncModule_AgcEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncModule_Agc_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param objFuncModule_AgcEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncModule_Agc_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFuncModule_AgcEN);
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param objFuncModule_AgcEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncModule_Agc_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFuncModule_AgcEN);
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_AddNewObjSave(
  objFuncModule_AgcEN: clsFuncModule_AgcEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    FuncModule_Agc_CheckPropertyNew(objFuncModule_AgcEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${funcModule_Agc_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FuncModule_Agc_CheckUniCond4Add(objFuncModule_AgcEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await FuncModule_Agc_AddNewRecordWithMaxIdAsync(objFuncModule_AgcEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      FuncModule_Agc_ReFreshCache(objFuncModule_AgcEN.prjId);
    } else {
      const strInfo = `添加[模块(FuncModule_Agc)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${funcModule_Agc_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function FuncModule_Agc_CheckUniCond4Add(
  objFuncModule_AgcEN: clsFuncModule_AgcEN,
): Promise<boolean> {
  const strUniquenessCondition = FuncModule_Agc_GetUniCondStr(objFuncModule_AgcEN);
  const bolIsExistCondition = await FuncModule_Agc_IsExistRecordAsync(strUniquenessCondition);
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
export async function FuncModule_Agc_CheckUniCond4Update(
  objFuncModule_AgcEN: clsFuncModule_AgcEN,
): Promise<boolean> {
  const strUniquenessCondition = FuncModule_Agc_GetUniCondStr4Update(objFuncModule_AgcEN);
  const bolIsExistCondition = await FuncModule_Agc_IsExistRecordAsync(strUniquenessCondition);
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
export async function FuncModule_Agc_UpdateObjSave(
  objFuncModule_AgcEN: clsFuncModule_AgcEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objFuncModule_AgcEN.sfUpdFldSetStr = objFuncModule_AgcEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objFuncModule_AgcEN.funcModuleAgcId == '' ||
    objFuncModule_AgcEN.funcModuleAgcId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    FuncModule_Agc_CheckProperty4Update(objFuncModule_AgcEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${funcModule_Agc_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await FuncModule_Agc_CheckUniCond4Update(objFuncModule_AgcEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await FuncModule_Agc_UpdateRecordAsync(objFuncModule_AgcEN);
    if (returnBool == true) {
      FuncModule_Agc_ReFreshCache(objFuncModule_AgcEN.prjId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${funcModule_Agc_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objFuncModule_AgcEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncModule_Agc_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objFuncModule_AgcEN);
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param objFuncModule_AgcEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FuncModule_Agc_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objFuncModule_AgcEN);
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param objFuncModule_AgcEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FuncModule_Agc_AddNewRecordWithReturnKeyAsync(
  objFuncModule_AgcEN: clsFuncModule_AgcEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncModule_AgcEN, config);
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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param objFuncModule_AgcEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FuncModule_Agc_UpdateRecordAsync(
  objFuncModule_AgcEN: clsFuncModule_AgcEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFuncModule_AgcEN.sfUpdFldSetStr === undefined ||
    objFuncModule_AgcEN.sfUpdFldSetStr === null ||
    objFuncModule_AgcEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFuncModule_AgcEN.funcModuleAgcId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncModule_AgcEN, config);
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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param objFuncModule_AgcEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FuncModule_Agc_EditRecordExAsync(
  objFuncModule_AgcEN: clsFuncModule_AgcEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objFuncModule_AgcEN.sfUpdFldSetStr === undefined ||
    objFuncModule_AgcEN.sfUpdFldSetStr === null ||
    objFuncModule_AgcEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFuncModule_AgcEN.funcModuleAgcId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncModule_AgcEN, config);
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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param objFuncModule_AgcEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FuncModule_Agc_UpdateWithConditionAsync(
  objFuncModule_AgcEN: clsFuncModule_AgcEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFuncModule_AgcEN.sfUpdFldSetStr === undefined ||
    objFuncModule_AgcEN.sfUpdFldSetStr === null ||
    objFuncModule_AgcEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFuncModule_AgcEN.funcModuleAgcId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);
  objFuncModule_AgcEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFuncModule_AgcEN, config);
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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param objstrFuncModuleAgcIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FuncModule_Agc_IsExistRecordCache(
  objFuncModule_AgcCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFuncModule_AgcObjLstCache = await FuncModule_Agc_GetObjLstCache(strPrjId);
  if (arrFuncModule_AgcObjLstCache == null) return false;
  let arrFuncModule_AgcSel = arrFuncModule_AgcObjLstCache;
  if (objFuncModule_AgcCond.GetConditions().length == 0)
    return arrFuncModule_AgcSel.length > 0 ? true : false;
  try {
    for (const objCondition of objFuncModule_AgcCond.GetConditions()) {
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
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFuncModule_AgcSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFuncModule_AgcCond),
      funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param strFuncModuleAgcId:所给的关键字
 * @returns 对象
 */
export async function FuncModule_Agc_IsExistCache(strFuncModuleAgcId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrFuncModule_AgcObjLstCache = await FuncModule_Agc_GetObjLstCache(strPrjId);
  if (arrFuncModule_AgcObjLstCache == null) return false;
  try {
    const arrFuncModule_AgcSel = arrFuncModule_AgcObjLstCache.filter(
      (x) => x.funcModuleAgcId == strFuncModuleAgcId,
    );
    if (arrFuncModule_AgcSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFuncModuleAgcId,
      funcModule_Agc_ConstructorName,
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
 * @param strFuncModuleAgcId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function FuncModule_Agc_IsExistAsync(strFuncModuleAgcId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFuncModuleAgcId,
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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
 * @param objFuncModule_AgcCond:条件对象
 * @returns 对象列表记录数
 */
export async function FuncModule_Agc_GetRecCountByCondCache(
  objFuncModule_AgcCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFuncModule_AgcObjLstCache = await FuncModule_Agc_GetObjLstCache(strPrjId);
  if (arrFuncModule_AgcObjLstCache == null) return 0;
  let arrFuncModule_AgcSel = arrFuncModule_AgcObjLstCache;
  if (objFuncModule_AgcCond.GetConditions().length == 0) return arrFuncModule_AgcSel.length;
  try {
    for (const objCondition of objFuncModule_AgcCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFuncModule_AgcSel = arrFuncModule_AgcSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFuncModule_AgcSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFuncModule_AgcCond),
      funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdByPrefixAsync';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
export async function FuncModule_Agc_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(funcModule_Agc_Controller, strAction);

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
        funcModule_Agc_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        funcModule_Agc_ConstructorName,
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
export function FuncModule_Agc_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FuncModule_Agc_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsFuncModule_AgcWApi.clsFuncModule_AgcWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsFuncModule_AgcWApi.clsFuncModule_AgcWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsFuncModule_AgcEN._CurrTabName, strPrjId);
  switch (clsFuncModule_AgcEN.CacheModeId) {
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
  clsFuncModule_AgcEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function FuncModule_Agc_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsFuncModule_AgcWApi.FuncModule_Agc_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsFuncModule_AgcWApi.FuncModule_Agc_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsFuncModule_AgcEN._CurrTabName, strPrjId);
    switch (clsFuncModule_AgcEN.CacheModeId) {
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
    clsFuncModule_AgcEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function FuncModule_Agc_GetLastRefreshTime(): string {
  if (clsFuncModule_AgcEN._RefreshTimeLst.length == 0) return '';
  return clsFuncModule_AgcEN._RefreshTimeLst[clsFuncModule_AgcEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function FuncModule_Agc_BindDdl_FuncModuleAgcIdByPrjIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsFuncModule_AgcWApi.BindDdl_FuncModuleAgcIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsFuncModule_AgcWApi.BindDdl_FuncModuleAgcIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_FuncModuleAgcIdByPrjIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncModuleAgcIdByPrjIdInDivCache");
  let arrObjLstSel = await FuncModule_Agc_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsFuncModule_AgcEN.con_FuncModuleAgcId,
    clsFuncModule_AgcEN.con_FuncModuleName,
    '选模块...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function FuncModule_Agc_GetArrFuncModule_AgcByPrjId(strPrjId: string) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsFuncModule_AgcWApi.BindDdl_FuncModuleAgcIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsFuncModule_AgcWApi.BindDdl_FuncModuleAgcIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FuncModuleAgcIdByPrjIdInDivCache");
  const arrFuncModule_Agc = new Array<clsFuncModule_AgcEN>();
  let arrObjLstSel = await FuncModule_Agc_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  const obj0 = new clsFuncModule_AgcEN();
  obj0.funcModuleAgcId = '0';
  obj0.funcModuleName = '选模块...';
  arrFuncModule_Agc.push(obj0);
  arrObjLstSel.forEach((x) => arrFuncModule_Agc.push(x));
  return arrFuncModule_Agc;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FuncModule_Agc_CheckPropertyNew(pobjFuncModule_AgcEN: clsFuncModule_AgcEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[功能模块名称]不能为空(In 模块)!(clsFuncModule_AgcBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.prjId) === true ||
    pobjFuncModule_AgcEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 模块)!(clsFuncModule_AgcBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjFuncModule_AgcEN.orderNum ||
    (pobjFuncModule_AgcEN.orderNum != null && pobjFuncModule_AgcEN.orderNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[序号]不能为空(In 模块)!(clsFuncModule_AgcBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.useStateId) === true ||
    pobjFuncModule_AgcEN.useStateId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[使用状态Id]不能为空(In 模块)!(clsFuncModule_AgcBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleAgcId) == false &&
    GetStrLen(pobjFuncModule_AgcEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.funcModuleAgcId}(clsFuncModule_AgcBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleName) == false &&
    GetStrLen(pobjFuncModule_AgcEN.funcModuleName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能模块名称(funcModuleName)]的长度不能超过30(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.funcModuleName}(clsFuncModule_AgcBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleEnName) == false &&
    GetStrLen(pobjFuncModule_AgcEN.funcModuleEnName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能模块英文名称(funcModuleEnName)]的长度不能超过30(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.funcModuleEnName}(clsFuncModule_AgcBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleNameSim) == false &&
    GetStrLen(pobjFuncModule_AgcEN.funcModuleNameSim) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能模块简称(funcModuleNameSim)]的长度不能超过30(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.funcModuleNameSim}(clsFuncModule_AgcBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.prjId) == false &&
    GetStrLen(pobjFuncModule_AgcEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.prjId}(clsFuncModule_AgcBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.useStateId) == false &&
    GetStrLen(pobjFuncModule_AgcEN.useStateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[使用状态Id(useStateId)]的长度不能超过4(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.useStateId}(clsFuncModule_AgcBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.updUser) == false &&
    GetStrLen(pobjFuncModule_AgcEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.updUser}(clsFuncModule_AgcBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.updDate) == false &&
    GetStrLen(pobjFuncModule_AgcEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.updDate}(clsFuncModule_AgcBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.memo) == false &&
    GetStrLen(pobjFuncModule_AgcEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.memo}(clsFuncModule_AgcBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleAgcId) == false &&
    undefined !== pobjFuncModule_AgcEN.funcModuleAgcId &&
    tzDataType.isString(pobjFuncModule_AgcEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能模块Id(funcModuleAgcId)]的值:[${pobjFuncModule_AgcEN.funcModuleAgcId}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleName) == false &&
    undefined !== pobjFuncModule_AgcEN.funcModuleName &&
    tzDataType.isString(pobjFuncModule_AgcEN.funcModuleName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能模块名称(funcModuleName)]的值:[${pobjFuncModule_AgcEN.funcModuleName}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleEnName) == false &&
    undefined !== pobjFuncModule_AgcEN.funcModuleEnName &&
    tzDataType.isString(pobjFuncModule_AgcEN.funcModuleEnName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能模块英文名称(funcModuleEnName)]的值:[${pobjFuncModule_AgcEN.funcModuleEnName}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleNameSim) == false &&
    undefined !== pobjFuncModule_AgcEN.funcModuleNameSim &&
    tzDataType.isString(pobjFuncModule_AgcEN.funcModuleNameSim) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能模块简称(funcModuleNameSim)]的值:[${pobjFuncModule_AgcEN.funcModuleNameSim}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.prjId) == false &&
    undefined !== pobjFuncModule_AgcEN.prjId &&
    tzDataType.isString(pobjFuncModule_AgcEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjFuncModule_AgcEN.prjId}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjFuncModule_AgcEN.orderNum &&
    undefined !== pobjFuncModule_AgcEN.orderNum &&
    tzDataType.isNumber(pobjFuncModule_AgcEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjFuncModule_AgcEN.orderNum}], 非法,应该为数值型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.useStateId) == false &&
    undefined !== pobjFuncModule_AgcEN.useStateId &&
    tzDataType.isString(pobjFuncModule_AgcEN.useStateId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[使用状态Id(useStateId)]的值:[${pobjFuncModule_AgcEN.useStateId}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.updUser) == false &&
    undefined !== pobjFuncModule_AgcEN.updUser &&
    tzDataType.isString(pobjFuncModule_AgcEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjFuncModule_AgcEN.updUser}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.updDate) == false &&
    undefined !== pobjFuncModule_AgcEN.updDate &&
    tzDataType.isString(pobjFuncModule_AgcEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjFuncModule_AgcEN.updDate}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.memo) == false &&
    undefined !== pobjFuncModule_AgcEN.memo &&
    tzDataType.isString(pobjFuncModule_AgcEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjFuncModule_AgcEN.memo}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.prjId) == false &&
    pobjFuncModule_AgcEN.prjId != '[nuull]' &&
    GetStrLen(pobjFuncModule_AgcEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程Id]作为外键字段,长度应该为4(In 模块)!(clsFuncModule_AgcBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.useStateId) == false &&
    pobjFuncModule_AgcEN.useStateId != '[nuull]' &&
    GetStrLen(pobjFuncModule_AgcEN.useStateId) != 4
  ) {
    throw '(errid:Watl000415)字段[使用状态Id]作为外键字段,长度应该为4(In 模块)!(clsFuncModule_AgcBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FuncModule_Agc_CheckProperty4Update(pobjFuncModule_AgcEN: clsFuncModule_AgcEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleAgcId) == false &&
    GetStrLen(pobjFuncModule_AgcEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.funcModuleAgcId}(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleName) == false &&
    GetStrLen(pobjFuncModule_AgcEN.funcModuleName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能模块名称(funcModuleName)]的长度不能超过30(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.funcModuleName}(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleEnName) == false &&
    GetStrLen(pobjFuncModule_AgcEN.funcModuleEnName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能模块英文名称(funcModuleEnName)]的长度不能超过30(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.funcModuleEnName}(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleNameSim) == false &&
    GetStrLen(pobjFuncModule_AgcEN.funcModuleNameSim) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能模块简称(funcModuleNameSim)]的长度不能超过30(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.funcModuleNameSim}(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.prjId) == false &&
    GetStrLen(pobjFuncModule_AgcEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.prjId}(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.useStateId) == false &&
    GetStrLen(pobjFuncModule_AgcEN.useStateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[使用状态Id(useStateId)]的长度不能超过4(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.useStateId}(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.updUser) == false &&
    GetStrLen(pobjFuncModule_AgcEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.updUser}(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.updDate) == false &&
    GetStrLen(pobjFuncModule_AgcEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.updDate}(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.memo) == false &&
    GetStrLen(pobjFuncModule_AgcEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 模块(FuncModule_Agc))!值:${pobjFuncModule_AgcEN.memo}(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleAgcId) == false &&
    undefined !== pobjFuncModule_AgcEN.funcModuleAgcId &&
    tzDataType.isString(pobjFuncModule_AgcEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能模块Id(funcModuleAgcId)]的值:[${pobjFuncModule_AgcEN.funcModuleAgcId}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleName) == false &&
    undefined !== pobjFuncModule_AgcEN.funcModuleName &&
    tzDataType.isString(pobjFuncModule_AgcEN.funcModuleName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能模块名称(funcModuleName)]的值:[${pobjFuncModule_AgcEN.funcModuleName}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleEnName) == false &&
    undefined !== pobjFuncModule_AgcEN.funcModuleEnName &&
    tzDataType.isString(pobjFuncModule_AgcEN.funcModuleEnName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能模块英文名称(funcModuleEnName)]的值:[${pobjFuncModule_AgcEN.funcModuleEnName}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleNameSim) == false &&
    undefined !== pobjFuncModule_AgcEN.funcModuleNameSim &&
    tzDataType.isString(pobjFuncModule_AgcEN.funcModuleNameSim) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能模块简称(funcModuleNameSim)]的值:[${pobjFuncModule_AgcEN.funcModuleNameSim}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.prjId) == false &&
    undefined !== pobjFuncModule_AgcEN.prjId &&
    tzDataType.isString(pobjFuncModule_AgcEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjFuncModule_AgcEN.prjId}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjFuncModule_AgcEN.orderNum &&
    undefined !== pobjFuncModule_AgcEN.orderNum &&
    tzDataType.isNumber(pobjFuncModule_AgcEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjFuncModule_AgcEN.orderNum}], 非法,应该为数值型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.useStateId) == false &&
    undefined !== pobjFuncModule_AgcEN.useStateId &&
    tzDataType.isString(pobjFuncModule_AgcEN.useStateId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[使用状态Id(useStateId)]的值:[${pobjFuncModule_AgcEN.useStateId}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.updUser) == false &&
    undefined !== pobjFuncModule_AgcEN.updUser &&
    tzDataType.isString(pobjFuncModule_AgcEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjFuncModule_AgcEN.updUser}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.updDate) == false &&
    undefined !== pobjFuncModule_AgcEN.updDate &&
    tzDataType.isString(pobjFuncModule_AgcEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjFuncModule_AgcEN.updDate}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.memo) == false &&
    undefined !== pobjFuncModule_AgcEN.memo &&
    tzDataType.isString(pobjFuncModule_AgcEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjFuncModule_AgcEN.memo}], 非法,应该为字符型(In 模块(FuncModule_Agc))!(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.funcModuleAgcId) === true ||
    pobjFuncModule_AgcEN.funcModuleAgcId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[功能模块Id]不能为空(In 模块)!(clsFuncModule_AgcBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.prjId) == false &&
    pobjFuncModule_AgcEN.prjId != '[nuull]' &&
    GetStrLen(pobjFuncModule_AgcEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程Id]作为外键字段,长度应该为4(In 模块)!(clsFuncModule_AgcBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjFuncModule_AgcEN.useStateId) == false &&
    pobjFuncModule_AgcEN.useStateId != '[nuull]' &&
    GetStrLen(pobjFuncModule_AgcEN.useStateId) != 4
  ) {
    throw '(errid:Watl000418)字段[使用状态Id]作为外键字段,长度应该为4(In 模块)!(clsFuncModule_AgcBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FuncModule_Agc_GetJSONStrByObj(pobjFuncModule_AgcEN: clsFuncModule_AgcEN): string {
  pobjFuncModule_AgcEN.sfUpdFldSetStr = pobjFuncModule_AgcEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFuncModule_AgcEN);
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
export function FuncModule_Agc_GetObjLstByJSONStr(strJSON: string): Array<clsFuncModule_AgcEN> {
  let arrFuncModule_AgcObjLst = new Array<clsFuncModule_AgcEN>();
  if (strJSON === '') {
    return arrFuncModule_AgcObjLst;
  }
  try {
    arrFuncModule_AgcObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFuncModule_AgcObjLst;
  }
  return arrFuncModule_AgcObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFuncModule_AgcObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FuncModule_Agc_GetObjLstByJSONObjLst(
  arrFuncModule_AgcObjLstS: Array<clsFuncModule_AgcEN>,
): Array<clsFuncModule_AgcEN> {
  const arrFuncModule_AgcObjLst = new Array<clsFuncModule_AgcEN>();
  for (const objInFor of arrFuncModule_AgcObjLstS) {
    const obj1 = FuncModule_Agc_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFuncModule_AgcObjLst.push(obj1);
  }
  return arrFuncModule_AgcObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-13
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FuncModule_Agc_GetObjByJSONStr(strJSON: string): clsFuncModule_AgcEN {
  let pobjFuncModule_AgcEN = new clsFuncModule_AgcEN();
  if (strJSON === '') {
    return pobjFuncModule_AgcEN;
  }
  try {
    pobjFuncModule_AgcEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFuncModule_AgcEN;
  }
  return pobjFuncModule_AgcEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FuncModule_Agc_GetCombineCondition(
  objFuncModule_AgcCond: clsFuncModule_AgcEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncModule_AgcCond.dicFldComparisonOp,
      clsFuncModule_AgcEN.con_FuncModuleAgcId,
    ) == true
  ) {
    const strComparisonOpFuncModuleAgcId: string =
      objFuncModule_AgcCond.dicFldComparisonOp[clsFuncModule_AgcEN.con_FuncModuleAgcId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncModule_AgcEN.con_FuncModuleAgcId,
      objFuncModule_AgcCond.funcModuleAgcId,
      strComparisonOpFuncModuleAgcId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncModule_AgcCond.dicFldComparisonOp,
      clsFuncModule_AgcEN.con_FuncModuleName,
    ) == true
  ) {
    const strComparisonOpFuncModuleName: string =
      objFuncModule_AgcCond.dicFldComparisonOp[clsFuncModule_AgcEN.con_FuncModuleName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncModule_AgcEN.con_FuncModuleName,
      objFuncModule_AgcCond.funcModuleName,
      strComparisonOpFuncModuleName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncModule_AgcCond.dicFldComparisonOp,
      clsFuncModule_AgcEN.con_FuncModuleEnName,
    ) == true
  ) {
    const strComparisonOpFuncModuleEnName: string =
      objFuncModule_AgcCond.dicFldComparisonOp[clsFuncModule_AgcEN.con_FuncModuleEnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncModule_AgcEN.con_FuncModuleEnName,
      objFuncModule_AgcCond.funcModuleEnName,
      strComparisonOpFuncModuleEnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncModule_AgcCond.dicFldComparisonOp,
      clsFuncModule_AgcEN.con_FuncModuleNameSim,
    ) == true
  ) {
    const strComparisonOpFuncModuleNameSim: string =
      objFuncModule_AgcCond.dicFldComparisonOp[clsFuncModule_AgcEN.con_FuncModuleNameSim];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncModule_AgcEN.con_FuncModuleNameSim,
      objFuncModule_AgcCond.funcModuleNameSim,
      strComparisonOpFuncModuleNameSim,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncModule_AgcCond.dicFldComparisonOp,
      clsFuncModule_AgcEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objFuncModule_AgcCond.dicFldComparisonOp[clsFuncModule_AgcEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncModule_AgcEN.con_PrjId,
      objFuncModule_AgcCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncModule_AgcCond.dicFldComparisonOp,
      clsFuncModule_AgcEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objFuncModule_AgcCond.dicFldComparisonOp[clsFuncModule_AgcEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFuncModule_AgcEN.con_OrderNum,
      objFuncModule_AgcCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncModule_AgcCond.dicFldComparisonOp,
      clsFuncModule_AgcEN.con_UseStateId,
    ) == true
  ) {
    const strComparisonOpUseStateId: string =
      objFuncModule_AgcCond.dicFldComparisonOp[clsFuncModule_AgcEN.con_UseStateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncModule_AgcEN.con_UseStateId,
      objFuncModule_AgcCond.useStateId,
      strComparisonOpUseStateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncModule_AgcCond.dicFldComparisonOp,
      clsFuncModule_AgcEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFuncModule_AgcCond.dicFldComparisonOp[clsFuncModule_AgcEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncModule_AgcEN.con_UpdUser,
      objFuncModule_AgcCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncModule_AgcCond.dicFldComparisonOp,
      clsFuncModule_AgcEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFuncModule_AgcCond.dicFldComparisonOp[clsFuncModule_AgcEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncModule_AgcEN.con_UpdDate,
      objFuncModule_AgcCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFuncModule_AgcCond.dicFldComparisonOp,
      clsFuncModule_AgcEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFuncModule_AgcCond.dicFldComparisonOp[clsFuncModule_AgcEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFuncModule_AgcEN.con_Memo,
      objFuncModule_AgcCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FuncModule_Agc(模块),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFuncModuleName: 功能模块名称(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FuncModule_Agc_GetUniCondStr(objFuncModule_AgcEN: clsFuncModule_AgcEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncModuleName = '{0}'", objFuncModule_AgcEN.funcModuleName);
  strWhereCond += Format(" and PrjId = '{0}'", objFuncModule_AgcEN.prjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FuncModule_Agc(模块),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFuncModuleName: 功能模块名称(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FuncModule_Agc_GetUniCondStr4Update(
  objFuncModule_AgcEN: clsFuncModule_AgcEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FuncModuleAgcId <> '{0}'", objFuncModule_AgcEN.funcModuleAgcId);
  strWhereCond += Format(" and FuncModuleName = '{0}'", objFuncModule_AgcEN.funcModuleName);
  strWhereCond += Format(" and PrjId = '{0}'", objFuncModule_AgcEN.prjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFuncModule_AgcENS:源对象
 * @param objFuncModule_AgcENT:目标对象
 */
export function FuncModule_Agc_GetObjFromJsonObj(
  objFuncModule_AgcENS: clsFuncModule_AgcEN,
): clsFuncModule_AgcEN {
  const objFuncModule_AgcENT: clsFuncModule_AgcEN = new clsFuncModule_AgcEN();
  ObjectAssign(objFuncModule_AgcENT, objFuncModule_AgcENS);
  return objFuncModule_AgcENT;
}
