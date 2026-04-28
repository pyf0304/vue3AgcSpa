/**
 * 类名:clsPrjDataBaseWApi
 * 表名:PrjDataBase(00050176)
 * 版本:2026.04.19(服务器:WIN-SRV103-116)
 * 日期:2026/04/28 23:40:03
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:工程管理(PrjManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 数据库对象(PrjDataBase)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2026年04月28日.
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
import { prjDataBaseCache, isFuncMapCache } from '@/views/PrjManage/PrjDataBaseVueShare';
import { clsPrjDataBaseENEx } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseENEx';
import { clsPrjDataBaseEN } from '@/ts/L0Entity/PrjManage/clsPrjDataBaseEN';
import { DataBaseType_func } from '@/ts/L3ForWApi/SysPara/clsDataBaseTypeWApi';
import { clsDataBaseTypeEN } from '@/ts/L0Entity/SysPara/clsDataBaseTypeEN';
import { UseState_func } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
import { clsUseStateEN } from '@/ts/L0Entity/SysPara/clsUseStateEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const prjDataBase_Controller = 'PrjDataBaseApi';
export const prjDataBase_ConstructorName = 'prjDataBase';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPrjDataBaseId:关键字
 * @returns 对象
 **/
export async function PrjDataBase_GetObjByPrjDataBaseIdAsync(
  strPrjDataBaseId: string,
): Promise<clsPrjDataBaseEN | null> {
  const strThisFuncName = 'GetObjByPrjDataBaseIdAsync';

  if (IsNullOrEmpty(strPrjDataBaseId) == true) {
    const strMsg = Format(
      '参数:[strPrjDataBaseId]不能为空!(In clsPrjDataBaseWApi.GetObjByPrjDataBaseIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjDataBaseId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjDataBaseId]的长度:[{0}]不正确!(clsPrjDataBaseWApi.GetObjByPrjDataBaseIdAsync)',
      strPrjDataBaseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPrjDataBaseId';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjDataBaseId,
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
      const objPrjDataBase = PrjDataBase_GetObjFromJsonObj(returnObj);
      return objPrjDataBase;
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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
 * @param strPrjDataBaseId:所给的关键字
 * @returns 对象
 */
export async function PrjDataBase_GetObjByPrjDataBaseIdlocalStorage(strPrjDataBaseId: string) {
  const strThisFuncName = 'GetObjByPrjDataBaseIdlocalStorage';

  if (IsNullOrEmpty(strPrjDataBaseId) == true) {
    const strMsg = Format(
      '参数:[strPrjDataBaseId]不能为空!(In clsPrjDataBaseWApi.GetObjByPrjDataBaseIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjDataBaseId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjDataBaseId]的长度:[{0}]不正确!(clsPrjDataBaseWApi.GetObjByPrjDataBaseIdlocalStorage)',
      strPrjDataBaseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPrjDataBaseEN._CurrTabName, strPrjDataBaseId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPrjDataBaseCache: clsPrjDataBaseEN = JSON.parse(strTempObj);
    return objPrjDataBaseCache;
  }
  try {
    const objPrjDataBase = await PrjDataBase_GetObjByPrjDataBaseIdAsync(strPrjDataBaseId);
    if (objPrjDataBase != null) {
      localStorage.setItem(strKey, JSON.stringify(objPrjDataBase));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPrjDataBase;
    }
    return objPrjDataBase;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPrjDataBaseId,
      prjDataBase_ConstructorName,
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
 * @param strPrjDataBaseId:所给的关键字
 * @returns 对象
 */
export async function PrjDataBase_GetObjByPrjDataBaseIdCache(
  strPrjDataBaseId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByPrjDataBaseIdCache';

  if (IsNullOrEmpty(strPrjDataBaseId) == true) {
    const strMsg = Format(
      '参数:[strPrjDataBaseId]不能为空!(In clsPrjDataBaseWApi.GetObjByPrjDataBaseIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjDataBaseId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjDataBaseId]的长度:[{0}]不正确!(clsPrjDataBaseWApi.GetObjByPrjDataBaseIdCache)',
      strPrjDataBaseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjDataBaseObjLstCache = await PrjDataBase_GetObjLstCache();
  try {
    const arrPrjDataBaseSel = arrPrjDataBaseObjLstCache.filter(
      (x) => x.prjDataBaseId == strPrjDataBaseId,
    );
    let objPrjDataBase: clsPrjDataBaseEN;
    if (arrPrjDataBaseSel.length > 0) {
      objPrjDataBase = arrPrjDataBaseSel[0];
      return objPrjDataBase;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPrjDataBaseConst = await PrjDataBase_GetObjByPrjDataBaseIdAsync(strPrjDataBaseId);
        if (objPrjDataBaseConst != null) {
          PrjDataBase_ReFreshThisCache();
          return objPrjDataBaseConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPrjDataBaseId,
      prjDataBase_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objPrjDataBase:所给的对象
 * @returns 对象
 */
export async function PrjDataBase_UpdateObjInLstCache(objPrjDataBase: clsPrjDataBaseEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPrjDataBaseObjLstCache = await PrjDataBase_GetObjLstCache();
    const obj = arrPrjDataBaseObjLstCache.find(
      (x) => x.prjDataBaseName == objPrjDataBase.prjDataBaseName,
    );
    if (obj != null) {
      objPrjDataBase.prjDataBaseId = obj.prjDataBaseId;
      ObjectAssign(obj, objPrjDataBase);
    } else {
      arrPrjDataBaseObjLstCache.push(objPrjDataBase);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      prjDataBase_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-28
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjDataBase_SortFunDefa(a: clsPrjDataBaseEN, b: clsPrjDataBaseEN): number {
  return a.prjDataBaseId.localeCompare(b.prjDataBaseId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-28
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjDataBase_SortFunDefa2Fld(a: clsPrjDataBaseEN, b: clsPrjDataBaseEN): number {
  if (a.prjDataBaseName == b.prjDataBaseName) return a.dataBaseName.localeCompare(b.dataBaseName);
  else return a.prjDataBaseName.localeCompare(b.prjDataBaseName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2026-04-28
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjDataBase_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjDataBaseEN.con_PrjDataBaseId:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          return a.prjDataBaseId.localeCompare(b.prjDataBaseId);
        };
      case clsPrjDataBaseEN.con_PrjDataBaseName:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          return a.prjDataBaseName.localeCompare(b.prjDataBaseName);
        };
      case clsPrjDataBaseEN.con_DataBaseName:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (a.dataBaseName == null) return -1;
          if (b.dataBaseName == null) return 1;
          return a.dataBaseName.localeCompare(b.dataBaseName);
        };
      case clsPrjDataBaseEN.con_DatabaseOwner:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (a.databaseOwner == null) return -1;
          if (b.databaseOwner == null) return 1;
          return a.databaseOwner.localeCompare(b.databaseOwner);
        };
      case clsPrjDataBaseEN.con_DataBasePwd:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          return a.dataBasePwd.localeCompare(b.dataBasePwd);
        };
      case clsPrjDataBaseEN.con_DataBaseTypeId:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (a.dataBaseTypeId == null) return -1;
          if (b.dataBaseTypeId == null) return 1;
          return a.dataBaseTypeId.localeCompare(b.dataBaseTypeId);
        };
      case clsPrjDataBaseEN.con_DataBaseUserId:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (a.dataBaseUserId == null) return -1;
          if (b.dataBaseUserId == null) return 1;
          return a.dataBaseUserId.localeCompare(b.dataBaseUserId);
        };
      case clsPrjDataBaseEN.con_IpAddress:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (a.ipAddress == null) return -1;
          if (b.ipAddress == null) return 1;
          return a.ipAddress.localeCompare(b.ipAddress);
        };
      case clsPrjDataBaseEN.con_Sid:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (a.sid == null) return -1;
          if (b.sid == null) return 1;
          return a.sid.localeCompare(b.sid);
        };
      case clsPrjDataBaseEN.con_TableSpace:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (a.tableSpace == null) return -1;
          if (b.tableSpace == null) return 1;
          return a.tableSpace.localeCompare(b.tableSpace);
        };
      case clsPrjDataBaseEN.con_UseStateId:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          return a.useStateId.localeCompare(b.useStateId);
        };
      case clsPrjDataBaseEN.con_UserId:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsPrjDataBaseEN.con_UpdDate:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsPrjDataBaseEN.con_Memo:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjDataBase]中不存在!(in ${prjDataBase_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrjDataBaseEN.con_PrjDataBaseId:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          return b.prjDataBaseId.localeCompare(a.prjDataBaseId);
        };
      case clsPrjDataBaseEN.con_PrjDataBaseName:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          return b.prjDataBaseName.localeCompare(a.prjDataBaseName);
        };
      case clsPrjDataBaseEN.con_DataBaseName:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (b.dataBaseName == null) return -1;
          if (a.dataBaseName == null) return 1;
          return b.dataBaseName.localeCompare(a.dataBaseName);
        };
      case clsPrjDataBaseEN.con_DatabaseOwner:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (b.databaseOwner == null) return -1;
          if (a.databaseOwner == null) return 1;
          return b.databaseOwner.localeCompare(a.databaseOwner);
        };
      case clsPrjDataBaseEN.con_DataBasePwd:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          return b.dataBasePwd.localeCompare(a.dataBasePwd);
        };
      case clsPrjDataBaseEN.con_DataBaseTypeId:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (b.dataBaseTypeId == null) return -1;
          if (a.dataBaseTypeId == null) return 1;
          return b.dataBaseTypeId.localeCompare(a.dataBaseTypeId);
        };
      case clsPrjDataBaseEN.con_DataBaseUserId:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (b.dataBaseUserId == null) return -1;
          if (a.dataBaseUserId == null) return 1;
          return b.dataBaseUserId.localeCompare(a.dataBaseUserId);
        };
      case clsPrjDataBaseEN.con_IpAddress:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (b.ipAddress == null) return -1;
          if (a.ipAddress == null) return 1;
          return b.ipAddress.localeCompare(a.ipAddress);
        };
      case clsPrjDataBaseEN.con_Sid:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (b.sid == null) return -1;
          if (a.sid == null) return 1;
          return b.sid.localeCompare(a.sid);
        };
      case clsPrjDataBaseEN.con_TableSpace:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (b.tableSpace == null) return -1;
          if (a.tableSpace == null) return 1;
          return b.tableSpace.localeCompare(a.tableSpace);
        };
      case clsPrjDataBaseEN.con_UseStateId:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          return b.useStateId.localeCompare(a.useStateId);
        };
      case clsPrjDataBaseEN.con_UserId:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsPrjDataBaseEN.con_UpdDate:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsPrjDataBaseEN.con_Memo:
        return (a: clsPrjDataBaseEN, b: clsPrjDataBaseEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjDataBase]中不存在!(in ${prjDataBase_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strPrjDataBaseId:所给的关键字
 * @returns 对象
 */
export async function PrjDataBase_GetNameByPrjDataBaseIdCache(strPrjDataBaseId: string) {
  if (IsNullOrEmpty(strPrjDataBaseId) == true) {
    const strMsg = Format(
      '参数:[strPrjDataBaseId]不能为空!(In clsPrjDataBaseWApi.GetNameByPrjDataBaseIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjDataBaseId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjDataBaseId]的长度:[{0}]不正确!(clsPrjDataBaseWApi.GetNameByPrjDataBaseIdCache)',
      strPrjDataBaseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjDataBaseObjLstCache = await PrjDataBase_GetObjLstCache();
  if (arrPrjDataBaseObjLstCache == null) return '';
  try {
    const arrPrjDataBaseSel = arrPrjDataBaseObjLstCache.filter(
      (x) => x.prjDataBaseId == strPrjDataBaseId,
    );
    let objPrjDataBase: clsPrjDataBaseEN;
    if (arrPrjDataBaseSel.length > 0) {
      objPrjDataBase = arrPrjDataBaseSel[0];
      return objPrjDataBase.prjDataBaseName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strPrjDataBaseId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2026-04-28
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function PrjDataBase_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrjDataBaseEN.con_PrjDataBaseId:
      return (obj: clsPrjDataBaseEN) => {
        return obj.prjDataBaseId === value;
      };
    case clsPrjDataBaseEN.con_PrjDataBaseName:
      return (obj: clsPrjDataBaseEN) => {
        return obj.prjDataBaseName === value;
      };
    case clsPrjDataBaseEN.con_DataBaseName:
      return (obj: clsPrjDataBaseEN) => {
        return obj.dataBaseName === value;
      };
    case clsPrjDataBaseEN.con_DatabaseOwner:
      return (obj: clsPrjDataBaseEN) => {
        return obj.databaseOwner === value;
      };
    case clsPrjDataBaseEN.con_DataBasePwd:
      return (obj: clsPrjDataBaseEN) => {
        return obj.dataBasePwd === value;
      };
    case clsPrjDataBaseEN.con_DataBaseTypeId:
      return (obj: clsPrjDataBaseEN) => {
        return obj.dataBaseTypeId === value;
      };
    case clsPrjDataBaseEN.con_DataBaseUserId:
      return (obj: clsPrjDataBaseEN) => {
        return obj.dataBaseUserId === value;
      };
    case clsPrjDataBaseEN.con_IpAddress:
      return (obj: clsPrjDataBaseEN) => {
        return obj.ipAddress === value;
      };
    case clsPrjDataBaseEN.con_Sid:
      return (obj: clsPrjDataBaseEN) => {
        return obj.sid === value;
      };
    case clsPrjDataBaseEN.con_TableSpace:
      return (obj: clsPrjDataBaseEN) => {
        return obj.tableSpace === value;
      };
    case clsPrjDataBaseEN.con_UseStateId:
      return (obj: clsPrjDataBaseEN) => {
        return obj.useStateId === value;
      };
    case clsPrjDataBaseEN.con_UserId:
      return (obj: clsPrjDataBaseEN) => {
        return obj.userId === value;
      };
    case clsPrjDataBaseEN.con_UpdDate:
      return (obj: clsPrjDataBaseEN) => {
        return obj.updDate === value;
      };
    case clsPrjDataBaseEN.con_Memo:
      return (obj: clsPrjDataBaseEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrjDataBase]中不存在!(in ${prjDataBase_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-04-28
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function PrjDataBase_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsPrjDataBaseEN.con_PrjDataBaseId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPrjDataBaseEN._AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPrjDataBaseEN._AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strPrjDataBaseId = strInValue;
  if (IsNullOrEmpty(strPrjDataBaseId) == true) {
    return '';
  }
  const objPrjDataBase = await PrjDataBase_GetObjByPrjDataBaseIdCache(strPrjDataBaseId);
  if (objPrjDataBase == null) return '';
  if (objPrjDataBase.GetFldValue(strOutFldName) == null) return '';
  return objPrjDataBase.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2026-04-28
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function PrjDataBase_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsPrjDataBaseEN.con_PrjDataBaseId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrPrjDataBase = await PrjDataBase_GetObjLstCache();
  if (arrPrjDataBase == null) return [];
  let arrPrjDataBaseSel = arrPrjDataBase;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPrjDataBaseSel.length == 0) return [];
  return arrPrjDataBaseSel.map((x) => x.prjDataBaseId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjDataBase_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
export async function PrjDataBase_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
export async function PrjDataBase_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
export async function PrjDataBase_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPrjDataBaseEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

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
      const objPrjDataBase = PrjDataBase_GetObjFromJsonObj(returnObj);
      return objPrjDataBase;
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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
export async function PrjDataBase_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjDataBaseEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjDataBaseEN._WhereFormat) == false) {
    strWhereCond = clsPrjDataBaseEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsPrjDataBaseEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjDataBaseEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPrjDataBaseExObjLstCache: Array<clsPrjDataBaseEN> = CacheHelper.Get(strKey);
    const arrPrjDataBaseObjLstT = PrjDataBase_GetObjLstByJSONObjLst(arrPrjDataBaseExObjLstCache);
    return arrPrjDataBaseObjLstT;
  }
  try {
    const arrPrjDataBaseExObjLst = await PrjDataBase_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPrjDataBaseExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjDataBaseExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjDataBaseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjDataBase_ConstructorName,
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
export async function PrjDataBase_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjDataBaseEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjDataBaseEN._WhereFormat) == false) {
    strWhereCond = clsPrjDataBaseEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsPrjDataBaseEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjDataBaseEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjDataBaseExObjLstCache: Array<clsPrjDataBaseEN> = JSON.parse(strTempObjLst);
    const arrPrjDataBaseObjLstT = PrjDataBase_GetObjLstByJSONObjLst(arrPrjDataBaseExObjLstCache);
    return arrPrjDataBaseObjLstT;
  }
  try {
    const arrPrjDataBaseExObjLst = await PrjDataBase_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPrjDataBaseExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjDataBaseExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjDataBaseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjDataBase_ConstructorName,
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
export async function PrjDataBase_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjDataBaseEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjDataBaseObjLstCache: Array<clsPrjDataBaseEN> = JSON.parse(strTempObjLst);
    return arrPrjDataBaseObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PrjDataBase_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPrjDataBaseEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

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
          prjDataBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjDataBase_GetObjLstByJSONObjLst(returnObjLst);
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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
export async function PrjDataBase_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjDataBaseEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjDataBaseEN._WhereFormat) == false) {
    strWhereCond = clsPrjDataBaseEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsPrjDataBaseEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjDataBaseEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjDataBaseExObjLstCache: Array<clsPrjDataBaseEN> = JSON.parse(strTempObjLst);
    const arrPrjDataBaseObjLstT = PrjDataBase_GetObjLstByJSONObjLst(arrPrjDataBaseExObjLstCache);
    return arrPrjDataBaseObjLstT;
  }
  try {
    const arrPrjDataBaseExObjLst = await PrjDataBase_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPrjDataBaseExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjDataBaseExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjDataBaseExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjDataBase_ConstructorName,
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
export async function PrjDataBase_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjDataBaseEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjDataBaseObjLstCache: Array<clsPrjDataBaseEN> = JSON.parse(strTempObjLst);
    return arrPrjDataBaseObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjDataBase_GetObjLstCache(): Promise<Array<clsPrjDataBaseEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrPrjDataBaseObjLstCache;
  switch (clsPrjDataBaseEN._CacheModeId) {
    case '04': //sessionStorage
      arrPrjDataBaseObjLstCache = await PrjDataBase_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrPrjDataBaseObjLstCache = await PrjDataBase_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrPrjDataBaseObjLstCache = await PrjDataBase_GetObjLstClientCache();
      break;
    default:
      arrPrjDataBaseObjLstCache = await PrjDataBase_GetObjLstClientCache();
      break;
  }
  return arrPrjDataBaseObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjDataBase_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPrjDataBaseObjLstCache;
  switch (clsPrjDataBaseEN._CacheModeId) {
    case '04': //sessionStorage
      arrPrjDataBaseObjLstCache = await PrjDataBase_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrPrjDataBaseObjLstCache = await PrjDataBase_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrPrjDataBaseObjLstCache = null;
      break;
    default:
      arrPrjDataBaseObjLstCache = null;
      break;
  }
  return arrPrjDataBaseObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPrjDataBaseIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjDataBase_GetSubObjLstCache(objPrjDataBaseCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPrjDataBaseObjLstCache = await PrjDataBase_GetObjLstCache();
  let arrPrjDataBaseSel = arrPrjDataBaseObjLstCache;
  if (objPrjDataBaseCond.GetConditions().length == 0) return arrPrjDataBaseSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objPrjDataBaseCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPrjDataBaseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjDataBaseCond),
      prjDataBase_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjDataBaseEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPrjDataBaseId:关键字列表
 * @returns 对象列表
 **/
export async function PrjDataBase_GetObjLstByPrjDataBaseIdLstAsync(
  arrPrjDataBaseId: Array<string>,
): Promise<Array<clsPrjDataBaseEN>> {
  const strThisFuncName = 'GetObjLstByPrjDataBaseIdLstAsync';
  const strAction = 'GetObjLstByPrjDataBaseIdLst';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrjDataBaseId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          prjDataBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjDataBase_GetObjLstByJSONObjLst(returnObjLst);
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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
 * @param arrstrPrjDataBaseIdLst:关键字列表
 * @returns 对象列表
 */
export async function PrjDataBase_GetObjLstByPrjDataBaseIdLstCache(
  arrPrjDataBaseIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByPrjDataBaseIdLstCache';
  try {
    const arrPrjDataBaseObjLstCache = await PrjDataBase_GetObjLstCache();
    const arrPrjDataBaseSel = arrPrjDataBaseObjLstCache.filter(
      (x) => arrPrjDataBaseIdLst.indexOf(x.prjDataBaseId) > -1,
    );
    return arrPrjDataBaseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPrjDataBaseIdLst.join(','),
      prjDataBase_ConstructorName,
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
export async function PrjDataBase_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrjDataBaseEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

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
          prjDataBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjDataBase_GetObjLstByJSONObjLst(returnObjLst);
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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
export async function PrjDataBase_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrjDataBaseEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

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
          prjDataBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjDataBase_GetObjLstByJSONObjLst(returnObjLst);
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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
export async function PrjDataBase_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjDataBaseEN>();
  const arrPrjDataBaseObjLstCache = await PrjDataBase_GetObjLstCache();
  if (arrPrjDataBaseObjLstCache.length == 0) return arrPrjDataBaseObjLstCache;
  let arrPrjDataBaseSel = arrPrjDataBaseObjLstCache;
  const objPrjDataBaseCond = objPagerPara.conditionCollection;
  if (objPrjDataBaseCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsPrjDataBaseEN>();
  }
  //console.log("clsPrjDataBaseWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objPrjDataBaseCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrjDataBaseSel.length == 0) return arrPrjDataBaseSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjDataBaseSel = arrPrjDataBaseSel.sort(PrjDataBase_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjDataBaseSel = arrPrjDataBaseSel.sort(objPagerPara.sortFun);
    }
    arrPrjDataBaseSel = arrPrjDataBaseSel.slice(intStart, intEnd);
    return arrPrjDataBaseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjDataBase_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjDataBaseEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PrjDataBase_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjDataBaseEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjDataBaseEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

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
          prjDataBase_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjDataBase_GetObjLstByJSONObjLst(returnObjLst);
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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
 * @param strPrjDataBaseId:关键字
 * @returns 获取删除的结果
 **/
export async function PrjDataBase_DelRecordAsync(strPrjDataBaseId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strPrjDataBaseId);

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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
 * @param arrPrjDataBaseId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PrjDataBase_DelPrjDataBasesAsync(
  arrPrjDataBaseId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelPrjDataBasesAsync';
  const strAction = 'DelPrjDataBases';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrjDataBaseId, config);
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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
export async function PrjDataBase_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjDataBaseENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrPrjDataBaseObjLst = await PrjDataBase_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsPrjDataBaseENEx>();
  const arrPrjDataBaseExObjLst = arrPrjDataBaseObjLst.map((obj) => {
    const cacheKey = `${obj.prjDataBaseId}`;
    if (prjDataBaseCache[cacheKey]) {
      const oldObj = prjDataBaseCache[cacheKey];
      return oldObj;
    } else {
      const newObj = PrjDataBase_CopyToEx(obj);
      arrNewObj.push(newObj);
      prjDataBaseCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await PrjDataBase_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsPrjDataBaseEN._AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrPrjDataBaseExObjLst) {
      await PrjDataBase_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.prjDataBaseId}`;
      prjDataBaseCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrPrjDataBaseExObjLst.length == 0) return arrPrjDataBaseExObjLst;
  let arrPrjDataBaseSel: Array<clsPrjDataBaseENEx> = arrPrjDataBaseExObjLst;
  const objPrjDataBaseCond = objPagerPara.conditionCollection;
  if (objPrjDataBaseCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrPrjDataBaseExObjLst;
  }
  try {
    for (const objCondition of objPrjDataBaseCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrjDataBaseSel.length == 0) return arrPrjDataBaseSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrPrjDataBaseSel = arrPrjDataBaseSel.sort(
        PrjDataBase_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjDataBaseSel = arrPrjDataBaseSel.sort(objPagerPara.sortFun);
    }
    arrPrjDataBaseSel = arrPrjDataBaseSel.slice(intStart, intEnd);
    return arrPrjDataBaseSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjDataBase_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjDataBaseENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objPrjDataBaseENS:源对象
 * @returns 目标对象=>clsPrjDataBaseEN:objPrjDataBaseENT
 **/
export function PrjDataBase_CopyToEx(objPrjDataBaseENS: clsPrjDataBaseEN): clsPrjDataBaseENEx {
  const strThisFuncName = PrjDataBase_CopyToEx.name;
  const objPrjDataBaseENT = new clsPrjDataBaseENEx();
  try {
    ObjectAssign(objPrjDataBaseENT, objPrjDataBaseENS);
    return objPrjDataBaseENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjDataBase_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPrjDataBaseENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2026-04-28
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function PrjDataBase_FuncMapByFldName(
  strFldName: string,
  objPrjDataBaseEx: clsPrjDataBaseENEx,
) {
  const strThisFuncName = PrjDataBase_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsPrjDataBaseEN._AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsPrjDataBaseENEx.con_DataBaseTypeName:
      return PrjDataBase_FuncMapDataBaseTypeName(objPrjDataBaseEx);
    case clsPrjDataBaseENEx.con_UseStateName:
      return PrjDataBase_FuncMapUseStateName(objPrjDataBaseEx);
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
 * 日期:2026-04-28
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function PrjDataBase_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjDataBaseENEx.con_DataBaseTypeName:
        return (a: clsPrjDataBaseENEx, b: clsPrjDataBaseENEx) => {
          return a.dataBaseTypeName.localeCompare(b.dataBaseTypeName);
        };
      case clsPrjDataBaseENEx.con_UseStateName:
        return (a: clsPrjDataBaseENEx, b: clsPrjDataBaseENEx) => {
          return a.useStateName.localeCompare(b.useStateName);
        };
      default:
        return PrjDataBase_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsPrjDataBaseENEx.con_DataBaseTypeName:
        return (a: clsPrjDataBaseENEx, b: clsPrjDataBaseENEx) => {
          return b.dataBaseTypeName.localeCompare(a.dataBaseTypeName);
        };
      case clsPrjDataBaseENEx.con_UseStateName:
        return (a: clsPrjDataBaseENEx, b: clsPrjDataBaseENEx) => {
          return b.useStateName.localeCompare(a.useStateName);
        };
      default:
        return PrjDataBase_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjDataBaseS:源对象
 **/
export async function PrjDataBase_FuncMapDataBaseTypeName(objPrjDataBase: clsPrjDataBaseENEx) {
  const strThisFuncName = PrjDataBase_FuncMapDataBaseTypeName.name;
  try {
    if (IsNullOrEmpty(objPrjDataBase.dataBaseTypeName) == true) {
      const DataBaseTypeDataBaseTypeId = objPrjDataBase.dataBaseTypeId;
      const DataBaseTypeDataBaseTypeName = await DataBaseType_func(
        clsDataBaseTypeEN.con_DataBaseTypeId,
        clsDataBaseTypeEN.con_DataBaseTypeName,
        DataBaseTypeDataBaseTypeId,
      );
      objPrjDataBase.dataBaseTypeName = DataBaseTypeDataBaseTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001523)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjDataBase_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objPrjDataBaseS:源对象
 **/
export async function PrjDataBase_FuncMapUseStateName(objPrjDataBase: clsPrjDataBaseENEx) {
  const strThisFuncName = PrjDataBase_FuncMapUseStateName.name;
  try {
    if (IsNullOrEmpty(objPrjDataBase.useStateName) == true) {
      const UseStateUseStateId = objPrjDataBase.useStateId;
      const UseStateUseStateName = await UseState_func(
        clsUseStateEN.con_UseStateId,
        clsUseStateEN.con_UseStateName,
        UseStateUseStateId,
      );
      objPrjDataBase.useStateName = UseStateUseStateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001317)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      prjDataBase_ConstructorName,
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
export async function PrjDataBase_DelPrjDataBasesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPrjDataBasesByCondAsync';
  const strAction = 'DelPrjDataBasesByCond';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
 * @param objPrjDataBaseEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjDataBase_AddNewRecordAsync(
  objPrjDataBaseEN: clsPrjDataBaseEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objPrjDataBaseEN);
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjDataBaseEN, config);
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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
 * @param objPrjDataBaseEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjDataBase_AddNewRecordWithMaxIdAsync(
  objPrjDataBaseEN: clsPrjDataBaseEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjDataBaseEN, config);
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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
export async function PrjDataBase_AddNewObjSave(
  objPrjDataBaseEN: clsPrjDataBaseEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    PrjDataBase_CheckPropertyNew(objPrjDataBaseEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjDataBase_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjDataBase_CheckUniCond4Add(objPrjDataBaseEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await PrjDataBase_AddNewRecordWithMaxIdAsync(objPrjDataBaseEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      PrjDataBase_ReFreshCache();
    } else {
      const strInfo = `添加[数据库对象(PrjDataBase)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${prjDataBase_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function PrjDataBase_CheckUniCond4Add(
  objPrjDataBaseEN: clsPrjDataBaseEN,
): Promise<boolean> {
  const strUniquenessCondition = PrjDataBase_GetUniCondStr(objPrjDataBaseEN);
  const bolIsExistCondition = await PrjDataBase_IsExistRecordAsync(strUniquenessCondition);
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
export async function PrjDataBase_CheckUniCond4Update(
  objPrjDataBaseEN: clsPrjDataBaseEN,
): Promise<boolean> {
  const strUniquenessCondition = PrjDataBase_GetUniCondStr4Update(objPrjDataBaseEN);
  const bolIsExistCondition = await PrjDataBase_IsExistRecordAsync(strUniquenessCondition);
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
export async function PrjDataBase_UpdateObjSave(
  objPrjDataBaseEN: clsPrjDataBaseEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objPrjDataBaseEN.sfUpdFldSetStr = objPrjDataBaseEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objPrjDataBaseEN.prjDataBaseId == '' || objPrjDataBaseEN.prjDataBaseId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    PrjDataBase_CheckProperty4Update(objPrjDataBaseEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${prjDataBase_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await PrjDataBase_CheckUniCond4Update(objPrjDataBaseEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await PrjDataBase_UpdateRecordAsync(objPrjDataBaseEN);
    if (returnBool == true) {
      PrjDataBase_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${prjDataBase_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objPrjDataBaseEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrjDataBase_AddNewRecordWithReturnKeyAsync(
  objPrjDataBaseEN: clsPrjDataBaseEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjDataBaseEN, config);
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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
 * @param objPrjDataBaseEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjDataBase_UpdateRecordAsync(
  objPrjDataBaseEN: clsPrjDataBaseEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrjDataBaseEN.sfUpdFldSetStr === undefined ||
    objPrjDataBaseEN.sfUpdFldSetStr === null ||
    objPrjDataBaseEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjDataBaseEN.prjDataBaseId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjDataBaseEN, config);
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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
 * @param objPrjDataBaseEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjDataBase_EditRecordExAsync(
  objPrjDataBaseEN: clsPrjDataBaseEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objPrjDataBaseEN.sfUpdFldSetStr === undefined ||
    objPrjDataBaseEN.sfUpdFldSetStr === null ||
    objPrjDataBaseEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjDataBaseEN.prjDataBaseId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjDataBaseEN, config);
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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
 * @param objPrjDataBaseEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjDataBase_UpdateWithConditionAsync(
  objPrjDataBaseEN: clsPrjDataBaseEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrjDataBaseEN.sfUpdFldSetStr === undefined ||
    objPrjDataBaseEN.sfUpdFldSetStr === null ||
    objPrjDataBaseEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjDataBaseEN.prjDataBaseId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);
  objPrjDataBaseEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjDataBaseEN, config);
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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
 * @param objstrPrjDataBaseIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjDataBase_IsExistRecordCache(objPrjDataBaseCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPrjDataBaseObjLstCache = await PrjDataBase_GetObjLstCache();
  if (arrPrjDataBaseObjLstCache == null) return false;
  let arrPrjDataBaseSel = arrPrjDataBaseObjLstCache;
  if (objPrjDataBaseCond.GetConditions().length == 0)
    return arrPrjDataBaseSel.length > 0 ? true : false;
  try {
    for (const objCondition of objPrjDataBaseCond.GetConditions()) {
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
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrjDataBaseSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPrjDataBaseCond),
      prjDataBase_ConstructorName,
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
export async function PrjDataBase_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
 * @param strPrjDataBaseId:所给的关键字
 * @returns 对象
 */
export async function PrjDataBase_IsExistCache(strPrjDataBaseId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrPrjDataBaseObjLstCache = await PrjDataBase_GetObjLstCache();
  if (arrPrjDataBaseObjLstCache == null) return false;
  try {
    const arrPrjDataBaseSel = arrPrjDataBaseObjLstCache.filter(
      (x) => x.prjDataBaseId == strPrjDataBaseId,
    );
    if (arrPrjDataBaseSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strPrjDataBaseId,
      prjDataBase_ConstructorName,
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
 * @param strPrjDataBaseId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PrjDataBase_IsExistAsync(strPrjDataBaseId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjDataBaseId,
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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
export async function PrjDataBase_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
 * @param objPrjDataBaseCond:条件对象
 * @returns 对象列表记录数
 */
export async function PrjDataBase_GetRecCountByCondCache(objPrjDataBaseCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPrjDataBaseObjLstCache = await PrjDataBase_GetObjLstCache();
  if (arrPrjDataBaseObjLstCache == null) return 0;
  let arrPrjDataBaseSel = arrPrjDataBaseObjLstCache;
  if (objPrjDataBaseCond.GetConditions().length == 0) return arrPrjDataBaseSel.length;
  try {
    for (const objCondition of objPrjDataBaseCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjDataBaseSel = arrPrjDataBaseSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPrjDataBaseSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjDataBaseCond),
      prjDataBase_ConstructorName,
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
export async function PrjDataBase_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
export async function PrjDataBase_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjDataBase_Controller, strAction);

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
        prjDataBase_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjDataBase_ConstructorName,
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
export function PrjDataBase_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PrjDataBase_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsPrjDataBaseEN._CurrTabName;
  switch (clsPrjDataBaseEN._CacheModeId) {
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
  clsPrjDataBaseEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function PrjDataBase_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsPrjDataBaseEN._CurrTabName;
    switch (clsPrjDataBaseEN._CacheModeId) {
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
    clsPrjDataBaseEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function PrjDataBase_GetLastRefreshTime(): string {
  if (clsPrjDataBaseEN._RefreshTimeLst.length == 0) return '';
  return clsPrjDataBaseEN._RefreshTimeLst[clsPrjDataBaseEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function PrjDataBase_BindDdl_PrjDataBaseIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_PrjDataBaseIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrjDataBaseIdInDivCache");
  const arrObjLstSel = await PrjDataBase_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsPrjDataBaseEN.con_PrjDataBaseId,
    clsPrjDataBaseEN.con_PrjDataBaseName,
    '数据库对象...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function PrjDataBase_GetArrPrjDataBase() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrjDataBaseIdInDivCache");
  const arrPrjDataBase = new Array<clsPrjDataBaseEN>();
  const arrObjLstSel = await PrjDataBase_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsPrjDataBaseEN();
  obj0.prjDataBaseId = '0';
  obj0.prjDataBaseName = '选数据库对象...';
  arrPrjDataBase.push(obj0);
  arrObjLstSel.forEach((x) => arrPrjDataBase.push(x));
  return arrPrjDataBase;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjDataBase_CheckPropertyNew(pobjPrjDataBaseEN: clsPrjDataBaseEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPrjDataBaseEN.prjDataBaseName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[项目数据库名]不能为空(In 数据库对象)!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjDataBaseEN.dataBasePwd) === true) {
    throw new Error(
      `(errid:Watl000411)字段[数据库的用户口令]不能为空(In 数据库对象)!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.useStateId) === true ||
    pobjPrjDataBaseEN.useStateId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[使用状态Id]不能为空(In 数据库对象)!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.prjDataBaseId) == false &&
    GetStrLen(pobjPrjDataBaseEN.prjDataBaseId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[项目数据库Id(prjDataBaseId)]的长度不能超过4(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.prjDataBaseId}(clsPrjDataBaseBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.prjDataBaseName) == false &&
    GetStrLen(pobjPrjDataBaseEN.prjDataBaseName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[项目数据库名(prjDataBaseName)]的长度不能超过50(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.prjDataBaseName}(clsPrjDataBaseBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBaseName) == false &&
    GetStrLen(pobjPrjDataBaseEN.dataBaseName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据库名(dataBaseName)]的长度不能超过50(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.dataBaseName}(clsPrjDataBaseBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.databaseOwner) == false &&
    GetStrLen(pobjPrjDataBaseEN.databaseOwner) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据库拥有者(databaseOwner)]的长度不能超过30(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.databaseOwner}(clsPrjDataBaseBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBasePwd) == false &&
    GetStrLen(pobjPrjDataBaseEN.dataBasePwd) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据库的用户口令(dataBasePwd)]的长度不能超过30(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.dataBasePwd}(clsPrjDataBaseBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBaseTypeId) == false &&
    GetStrLen(pobjPrjDataBaseEN.dataBaseTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据库类型ID(dataBaseTypeId)]的长度不能超过2(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.dataBaseTypeId}(clsPrjDataBaseBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBaseUserId) == false &&
    GetStrLen(pobjPrjDataBaseEN.dataBaseUserId) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据库的用户ID(dataBaseUserId)]的长度不能超过30(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.dataBaseUserId}(clsPrjDataBaseBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.ipAddress) == false &&
    GetStrLen(pobjPrjDataBaseEN.ipAddress) > 25
  ) {
    throw new Error(
      `(errid:Watl000413)字段[服务器(ipAddress)]的长度不能超过25(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.ipAddress}(clsPrjDataBaseBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjDataBaseEN.sid) == false && GetStrLen(pobjPrjDataBaseEN.sid) > 50) {
    throw new Error(
      `(errid:Watl000413)字段[SID(sid)]的长度不能超过50(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.sid}(clsPrjDataBaseBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.tableSpace) == false &&
    GetStrLen(pobjPrjDataBaseEN.tableSpace) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表空间(tableSpace)]的长度不能超过50(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.tableSpace}(clsPrjDataBaseBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.useStateId) == false &&
    GetStrLen(pobjPrjDataBaseEN.useStateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[使用状态Id(useStateId)]的长度不能超过4(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.useStateId}(clsPrjDataBaseBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.userId) == false &&
    GetStrLen(pobjPrjDataBaseEN.userId) > 18
  ) {
    throw new Error(
      `(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.userId}(clsPrjDataBaseBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.updDate) == false &&
    GetStrLen(pobjPrjDataBaseEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.updDate}(clsPrjDataBaseBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjDataBaseEN.memo) == false && GetStrLen(pobjPrjDataBaseEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.memo}(clsPrjDataBaseBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.prjDataBaseId) == false &&
    undefined !== pobjPrjDataBaseEN.prjDataBaseId &&
    tzDataType.isString(pobjPrjDataBaseEN.prjDataBaseId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[项目数据库Id(prjDataBaseId)]的值:[${pobjPrjDataBaseEN.prjDataBaseId}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.prjDataBaseName) == false &&
    undefined !== pobjPrjDataBaseEN.prjDataBaseName &&
    tzDataType.isString(pobjPrjDataBaseEN.prjDataBaseName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[项目数据库名(prjDataBaseName)]的值:[${pobjPrjDataBaseEN.prjDataBaseName}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBaseName) == false &&
    undefined !== pobjPrjDataBaseEN.dataBaseName &&
    tzDataType.isString(pobjPrjDataBaseEN.dataBaseName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据库名(dataBaseName)]的值:[${pobjPrjDataBaseEN.dataBaseName}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.databaseOwner) == false &&
    undefined !== pobjPrjDataBaseEN.databaseOwner &&
    tzDataType.isString(pobjPrjDataBaseEN.databaseOwner) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据库拥有者(databaseOwner)]的值:[${pobjPrjDataBaseEN.databaseOwner}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBasePwd) == false &&
    undefined !== pobjPrjDataBaseEN.dataBasePwd &&
    tzDataType.isString(pobjPrjDataBaseEN.dataBasePwd) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据库的用户口令(dataBasePwd)]的值:[${pobjPrjDataBaseEN.dataBasePwd}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBaseTypeId) == false &&
    undefined !== pobjPrjDataBaseEN.dataBaseTypeId &&
    tzDataType.isString(pobjPrjDataBaseEN.dataBaseTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据库类型ID(dataBaseTypeId)]的值:[${pobjPrjDataBaseEN.dataBaseTypeId}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBaseUserId) == false &&
    undefined !== pobjPrjDataBaseEN.dataBaseUserId &&
    tzDataType.isString(pobjPrjDataBaseEN.dataBaseUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据库的用户ID(dataBaseUserId)]的值:[${pobjPrjDataBaseEN.dataBaseUserId}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.ipAddress) == false &&
    undefined !== pobjPrjDataBaseEN.ipAddress &&
    tzDataType.isString(pobjPrjDataBaseEN.ipAddress) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[服务器(ipAddress)]的值:[${pobjPrjDataBaseEN.ipAddress}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.sid) == false &&
    undefined !== pobjPrjDataBaseEN.sid &&
    tzDataType.isString(pobjPrjDataBaseEN.sid) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[SID(sid)]的值:[${pobjPrjDataBaseEN.sid}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.tableSpace) == false &&
    undefined !== pobjPrjDataBaseEN.tableSpace &&
    tzDataType.isString(pobjPrjDataBaseEN.tableSpace) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表空间(tableSpace)]的值:[${pobjPrjDataBaseEN.tableSpace}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.useStateId) == false &&
    undefined !== pobjPrjDataBaseEN.useStateId &&
    tzDataType.isString(pobjPrjDataBaseEN.useStateId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[使用状态Id(useStateId)]的值:[${pobjPrjDataBaseEN.useStateId}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.userId) == false &&
    undefined !== pobjPrjDataBaseEN.userId &&
    tzDataType.isString(pobjPrjDataBaseEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[用户Id(userId)]的值:[${pobjPrjDataBaseEN.userId}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.updDate) == false &&
    undefined !== pobjPrjDataBaseEN.updDate &&
    tzDataType.isString(pobjPrjDataBaseEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjPrjDataBaseEN.updDate}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.memo) == false &&
    undefined !== pobjPrjDataBaseEN.memo &&
    tzDataType.isString(pobjPrjDataBaseEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjPrjDataBaseEN.memo}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBaseTypeId) == false &&
    pobjPrjDataBaseEN.dataBaseTypeId != '[nuull]' &&
    GetStrLen(pobjPrjDataBaseEN.dataBaseTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[数据库类型ID]作为外键字段,长度应该为2(In 数据库对象)!(clsPrjDataBaseBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.useStateId) == false &&
    pobjPrjDataBaseEN.useStateId != '[nuull]' &&
    GetStrLen(pobjPrjDataBaseEN.useStateId) != 4
  ) {
    throw '(errid:Watl000415)字段[使用状态Id]作为外键字段,长度应该为4(In 数据库对象)!(clsPrjDataBaseBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjDataBase_CheckProperty4Update(pobjPrjDataBaseEN: clsPrjDataBaseEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.prjDataBaseId) == false &&
    GetStrLen(pobjPrjDataBaseEN.prjDataBaseId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[项目数据库Id(prjDataBaseId)]的长度不能超过4(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.prjDataBaseId}(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.prjDataBaseName) == false &&
    GetStrLen(pobjPrjDataBaseEN.prjDataBaseName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[项目数据库名(prjDataBaseName)]的长度不能超过50(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.prjDataBaseName}(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBaseName) == false &&
    GetStrLen(pobjPrjDataBaseEN.dataBaseName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据库名(dataBaseName)]的长度不能超过50(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.dataBaseName}(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.databaseOwner) == false &&
    GetStrLen(pobjPrjDataBaseEN.databaseOwner) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据库拥有者(databaseOwner)]的长度不能超过30(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.databaseOwner}(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBasePwd) == false &&
    GetStrLen(pobjPrjDataBaseEN.dataBasePwd) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据库的用户口令(dataBasePwd)]的长度不能超过30(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.dataBasePwd}(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBaseTypeId) == false &&
    GetStrLen(pobjPrjDataBaseEN.dataBaseTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据库类型ID(dataBaseTypeId)]的长度不能超过2(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.dataBaseTypeId}(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBaseUserId) == false &&
    GetStrLen(pobjPrjDataBaseEN.dataBaseUserId) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据库的用户ID(dataBaseUserId)]的长度不能超过30(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.dataBaseUserId}(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.ipAddress) == false &&
    GetStrLen(pobjPrjDataBaseEN.ipAddress) > 25
  ) {
    throw new Error(
      `(errid:Watl000416)字段[服务器(ipAddress)]的长度不能超过25(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.ipAddress}(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjDataBaseEN.sid) == false && GetStrLen(pobjPrjDataBaseEN.sid) > 50) {
    throw new Error(
      `(errid:Watl000416)字段[SID(sid)]的长度不能超过50(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.sid}(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.tableSpace) == false &&
    GetStrLen(pobjPrjDataBaseEN.tableSpace) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表空间(tableSpace)]的长度不能超过50(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.tableSpace}(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.useStateId) == false &&
    GetStrLen(pobjPrjDataBaseEN.useStateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[使用状态Id(useStateId)]的长度不能超过4(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.useStateId}(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.userId) == false &&
    GetStrLen(pobjPrjDataBaseEN.userId) > 18
  ) {
    throw new Error(
      `(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.userId}(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.updDate) == false &&
    GetStrLen(pobjPrjDataBaseEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.updDate}(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjPrjDataBaseEN.memo) == false && GetStrLen(pobjPrjDataBaseEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 数据库对象(PrjDataBase))!值:${pobjPrjDataBaseEN.memo}(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.prjDataBaseId) == false &&
    undefined !== pobjPrjDataBaseEN.prjDataBaseId &&
    tzDataType.isString(pobjPrjDataBaseEN.prjDataBaseId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[项目数据库Id(prjDataBaseId)]的值:[${pobjPrjDataBaseEN.prjDataBaseId}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.prjDataBaseName) == false &&
    undefined !== pobjPrjDataBaseEN.prjDataBaseName &&
    tzDataType.isString(pobjPrjDataBaseEN.prjDataBaseName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[项目数据库名(prjDataBaseName)]的值:[${pobjPrjDataBaseEN.prjDataBaseName}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBaseName) == false &&
    undefined !== pobjPrjDataBaseEN.dataBaseName &&
    tzDataType.isString(pobjPrjDataBaseEN.dataBaseName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据库名(dataBaseName)]的值:[${pobjPrjDataBaseEN.dataBaseName}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.databaseOwner) == false &&
    undefined !== pobjPrjDataBaseEN.databaseOwner &&
    tzDataType.isString(pobjPrjDataBaseEN.databaseOwner) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据库拥有者(databaseOwner)]的值:[${pobjPrjDataBaseEN.databaseOwner}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBasePwd) == false &&
    undefined !== pobjPrjDataBaseEN.dataBasePwd &&
    tzDataType.isString(pobjPrjDataBaseEN.dataBasePwd) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据库的用户口令(dataBasePwd)]的值:[${pobjPrjDataBaseEN.dataBasePwd}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBaseTypeId) == false &&
    undefined !== pobjPrjDataBaseEN.dataBaseTypeId &&
    tzDataType.isString(pobjPrjDataBaseEN.dataBaseTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据库类型ID(dataBaseTypeId)]的值:[${pobjPrjDataBaseEN.dataBaseTypeId}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBaseUserId) == false &&
    undefined !== pobjPrjDataBaseEN.dataBaseUserId &&
    tzDataType.isString(pobjPrjDataBaseEN.dataBaseUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据库的用户ID(dataBaseUserId)]的值:[${pobjPrjDataBaseEN.dataBaseUserId}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.ipAddress) == false &&
    undefined !== pobjPrjDataBaseEN.ipAddress &&
    tzDataType.isString(pobjPrjDataBaseEN.ipAddress) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[服务器(ipAddress)]的值:[${pobjPrjDataBaseEN.ipAddress}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.sid) == false &&
    undefined !== pobjPrjDataBaseEN.sid &&
    tzDataType.isString(pobjPrjDataBaseEN.sid) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[SID(sid)]的值:[${pobjPrjDataBaseEN.sid}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.tableSpace) == false &&
    undefined !== pobjPrjDataBaseEN.tableSpace &&
    tzDataType.isString(pobjPrjDataBaseEN.tableSpace) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表空间(tableSpace)]的值:[${pobjPrjDataBaseEN.tableSpace}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.useStateId) == false &&
    undefined !== pobjPrjDataBaseEN.useStateId &&
    tzDataType.isString(pobjPrjDataBaseEN.useStateId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[使用状态Id(useStateId)]的值:[${pobjPrjDataBaseEN.useStateId}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.userId) == false &&
    undefined !== pobjPrjDataBaseEN.userId &&
    tzDataType.isString(pobjPrjDataBaseEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[用户Id(userId)]的值:[${pobjPrjDataBaseEN.userId}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.updDate) == false &&
    undefined !== pobjPrjDataBaseEN.updDate &&
    tzDataType.isString(pobjPrjDataBaseEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjPrjDataBaseEN.updDate}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.memo) == false &&
    undefined !== pobjPrjDataBaseEN.memo &&
    tzDataType.isString(pobjPrjDataBaseEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjPrjDataBaseEN.memo}], 非法,应该为字符型(In 数据库对象(PrjDataBase))!(clsPrjDataBaseBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.dataBaseTypeId) == false &&
    pobjPrjDataBaseEN.dataBaseTypeId != '[nuull]' &&
    GetStrLen(pobjPrjDataBaseEN.dataBaseTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[数据库类型ID]作为外键字段,长度应该为2(In 数据库对象)!(clsPrjDataBaseBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjPrjDataBaseEN.useStateId) == false &&
    pobjPrjDataBaseEN.useStateId != '[nuull]' &&
    GetStrLen(pobjPrjDataBaseEN.useStateId) != 4
  ) {
    throw '(errid:Watl000418)字段[使用状态Id]作为外键字段,长度应该为4(In 数据库对象)!(clsPrjDataBaseBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2026-04-28
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjDataBase_GetJSONStrByObj(pobjPrjDataBaseEN: clsPrjDataBaseEN): string {
  pobjPrjDataBaseEN.sfUpdFldSetStr = pobjPrjDataBaseEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrjDataBaseEN);
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
 * 日期:2026-04-28
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function PrjDataBase_GetObjLstByJSONStr(strJSON: string): Array<clsPrjDataBaseEN> {
  let arrPrjDataBaseObjLst = new Array<clsPrjDataBaseEN>();
  if (strJSON === '') {
    return arrPrjDataBaseObjLst;
  }
  try {
    arrPrjDataBaseObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrjDataBaseObjLst;
  }
  return arrPrjDataBaseObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2026-04-28
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrjDataBaseObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrjDataBase_GetObjLstByJSONObjLst(
  arrPrjDataBaseObjLstS: Array<clsPrjDataBaseEN>,
): Array<clsPrjDataBaseEN> {
  const arrPrjDataBaseObjLst = new Array<clsPrjDataBaseEN>();
  for (const objInFor of arrPrjDataBaseObjLstS) {
    const obj1 = PrjDataBase_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrjDataBaseObjLst.push(obj1);
  }
  return arrPrjDataBaseObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2026-04-28
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjDataBase_GetObjByJSONStr(strJSON: string): clsPrjDataBaseEN {
  let pobjPrjDataBaseEN = new clsPrjDataBaseEN();
  if (strJSON === '') {
    return pobjPrjDataBaseEN;
  }
  try {
    pobjPrjDataBaseEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrjDataBaseEN;
  }
  return pobjPrjDataBaseEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrjDataBase_GetCombineCondition(objPrjDataBaseCond: clsPrjDataBaseEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjDataBaseCond.dicFldComparisonOp,
      clsPrjDataBaseEN.con_PrjDataBaseId,
    ) == true
  ) {
    const strComparisonOpPrjDataBaseId: string =
      objPrjDataBaseCond.dicFldComparisonOp[clsPrjDataBaseEN.con_PrjDataBaseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjDataBaseEN.con_PrjDataBaseId,
      objPrjDataBaseCond.prjDataBaseId,
      strComparisonOpPrjDataBaseId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjDataBaseCond.dicFldComparisonOp,
      clsPrjDataBaseEN.con_PrjDataBaseName,
    ) == true
  ) {
    const strComparisonOpPrjDataBaseName: string =
      objPrjDataBaseCond.dicFldComparisonOp[clsPrjDataBaseEN.con_PrjDataBaseName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjDataBaseEN.con_PrjDataBaseName,
      objPrjDataBaseCond.prjDataBaseName,
      strComparisonOpPrjDataBaseName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjDataBaseCond.dicFldComparisonOp,
      clsPrjDataBaseEN.con_DataBaseName,
    ) == true
  ) {
    const strComparisonOpDataBaseName: string =
      objPrjDataBaseCond.dicFldComparisonOp[clsPrjDataBaseEN.con_DataBaseName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjDataBaseEN.con_DataBaseName,
      objPrjDataBaseCond.dataBaseName,
      strComparisonOpDataBaseName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjDataBaseCond.dicFldComparisonOp,
      clsPrjDataBaseEN.con_DatabaseOwner,
    ) == true
  ) {
    const strComparisonOpDatabaseOwner: string =
      objPrjDataBaseCond.dicFldComparisonOp[clsPrjDataBaseEN.con_DatabaseOwner];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjDataBaseEN.con_DatabaseOwner,
      objPrjDataBaseCond.databaseOwner,
      strComparisonOpDatabaseOwner,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjDataBaseCond.dicFldComparisonOp,
      clsPrjDataBaseEN.con_DataBasePwd,
    ) == true
  ) {
    const strComparisonOpDataBasePwd: string =
      objPrjDataBaseCond.dicFldComparisonOp[clsPrjDataBaseEN.con_DataBasePwd];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjDataBaseEN.con_DataBasePwd,
      objPrjDataBaseCond.dataBasePwd,
      strComparisonOpDataBasePwd,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjDataBaseCond.dicFldComparisonOp,
      clsPrjDataBaseEN.con_DataBaseTypeId,
    ) == true
  ) {
    const strComparisonOpDataBaseTypeId: string =
      objPrjDataBaseCond.dicFldComparisonOp[clsPrjDataBaseEN.con_DataBaseTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjDataBaseEN.con_DataBaseTypeId,
      objPrjDataBaseCond.dataBaseTypeId,
      strComparisonOpDataBaseTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjDataBaseCond.dicFldComparisonOp,
      clsPrjDataBaseEN.con_DataBaseUserId,
    ) == true
  ) {
    const strComparisonOpDataBaseUserId: string =
      objPrjDataBaseCond.dicFldComparisonOp[clsPrjDataBaseEN.con_DataBaseUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjDataBaseEN.con_DataBaseUserId,
      objPrjDataBaseCond.dataBaseUserId,
      strComparisonOpDataBaseUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjDataBaseCond.dicFldComparisonOp,
      clsPrjDataBaseEN.con_IpAddress,
    ) == true
  ) {
    const strComparisonOpIpAddress: string =
      objPrjDataBaseCond.dicFldComparisonOp[clsPrjDataBaseEN.con_IpAddress];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjDataBaseEN.con_IpAddress,
      objPrjDataBaseCond.ipAddress,
      strComparisonOpIpAddress,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjDataBaseCond.dicFldComparisonOp,
      clsPrjDataBaseEN.con_Sid,
    ) == true
  ) {
    const strComparisonOpSid: string =
      objPrjDataBaseCond.dicFldComparisonOp[clsPrjDataBaseEN.con_Sid];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjDataBaseEN.con_Sid,
      objPrjDataBaseCond.sid,
      strComparisonOpSid,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjDataBaseCond.dicFldComparisonOp,
      clsPrjDataBaseEN.con_TableSpace,
    ) == true
  ) {
    const strComparisonOpTableSpace: string =
      objPrjDataBaseCond.dicFldComparisonOp[clsPrjDataBaseEN.con_TableSpace];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjDataBaseEN.con_TableSpace,
      objPrjDataBaseCond.tableSpace,
      strComparisonOpTableSpace,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjDataBaseCond.dicFldComparisonOp,
      clsPrjDataBaseEN.con_UseStateId,
    ) == true
  ) {
    const strComparisonOpUseStateId: string =
      objPrjDataBaseCond.dicFldComparisonOp[clsPrjDataBaseEN.con_UseStateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjDataBaseEN.con_UseStateId,
      objPrjDataBaseCond.useStateId,
      strComparisonOpUseStateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjDataBaseCond.dicFldComparisonOp,
      clsPrjDataBaseEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objPrjDataBaseCond.dicFldComparisonOp[clsPrjDataBaseEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjDataBaseEN.con_UserId,
      objPrjDataBaseCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjDataBaseCond.dicFldComparisonOp,
      clsPrjDataBaseEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objPrjDataBaseCond.dicFldComparisonOp[clsPrjDataBaseEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjDataBaseEN.con_UpdDate,
      objPrjDataBaseCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjDataBaseCond.dicFldComparisonOp,
      clsPrjDataBaseEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPrjDataBaseCond.dicFldComparisonOp[clsPrjDataBaseEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjDataBaseEN.con_Memo,
      objPrjDataBaseCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjDataBase(数据库对象),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjDataBaseName: 项目数据库名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjDataBase_GetUniCondStr(objPrjDataBaseEN: clsPrjDataBaseEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjDataBaseName = '{0}'", objPrjDataBaseEN.prjDataBaseName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjDataBase(数据库对象),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjDataBaseName: 项目数据库名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjDataBase_GetUniCondStr4Update(objPrjDataBaseEN: clsPrjDataBaseEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjDataBaseId <> '{0}'", objPrjDataBaseEN.prjDataBaseId);
  strWhereCond += Format(" and PrjDataBaseName = '{0}'", objPrjDataBaseEN.prjDataBaseName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrjDataBaseENS:源对象
 * @param objPrjDataBaseENT:目标对象
 */
export function PrjDataBase_GetObjFromJsonObj(
  objPrjDataBaseENS: clsPrjDataBaseEN,
): clsPrjDataBaseEN {
  const objPrjDataBaseENT: clsPrjDataBaseEN = new clsPrjDataBaseEN();
  ObjectAssign(objPrjDataBaseENT, objPrjDataBaseENS);
  return objPrjDataBaseENT;
}
