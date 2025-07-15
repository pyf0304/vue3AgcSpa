/**
 * 类名:clsUserCodePrjMainPathWApi
 * 表名:UserCodePrjMainPath(00050338)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:48:41
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户生成项目主路径(UserCodePrjMainPath)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
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
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  userCodePrjMainPathCache,
  isFuncMapCache,
} from '@/views/SystemSet/UserCodePrjMainPathVueShare';
import { clsUserCodePrjMainPathENEx } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPathENEx';
import { clsUserCodePrjMainPathEN } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPathEN';
import { Projects_func } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import { ProgLangType_func } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const userCodePrjMainPath_Controller = 'UserCodePrjMainPathApi';
export const userCodePrjMainPath_ConstructorName = 'userCodePrjMainPath';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserCodePrjMainPathId:关键字
 * @returns 对象
 **/
export async function UserCodePrjMainPath_GetObjByUserCodePrjMainPathIdAsync(
  strUserCodePrjMainPathId: string,
): Promise<clsUserCodePrjMainPathEN | null> {
  const strThisFuncName = 'GetObjByUserCodePrjMainPathIdAsync';

  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    const strMsg = Format(
      '参数:[strUserCodePrjMainPathId]不能为空!(In clsUserCodePrjMainPathWApi.GetObjByUserCodePrjMainPathIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserCodePrjMainPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strUserCodePrjMainPathId]的长度:[{0}]不正确!(clsUserCodePrjMainPathWApi.GetObjByUserCodePrjMainPathIdAsync)',
      strUserCodePrjMainPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByUserCodePrjMainPathId';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserCodePrjMainPathId,
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
      const objUserCodePrjMainPath = UserCodePrjMainPath_GetObjFromJsonObj(returnObj);
      return objUserCodePrjMainPath;
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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
 * @param strUserCodePrjMainPathId:所给的关键字
 * @returns 对象
 */
export async function UserCodePrjMainPath_GetObjByUserCodePrjMainPathIdlocalStorage(
  strUserCodePrjMainPathId: string,
) {
  const strThisFuncName = 'GetObjByUserCodePrjMainPathIdlocalStorage';

  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    const strMsg = Format(
      '参数:[strUserCodePrjMainPathId]不能为空!(In clsUserCodePrjMainPathWApi.GetObjByUserCodePrjMainPathIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserCodePrjMainPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strUserCodePrjMainPathId]的长度:[{0}]不正确!(clsUserCodePrjMainPathWApi.GetObjByUserCodePrjMainPathIdlocalStorage)',
      strUserCodePrjMainPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPathEN._CurrTabName, strUserCodePrjMainPathId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objUserCodePrjMainPathCache: clsUserCodePrjMainPathEN = JSON.parse(strTempObj);
    return objUserCodePrjMainPathCache;
  }
  try {
    const objUserCodePrjMainPath = await UserCodePrjMainPath_GetObjByUserCodePrjMainPathIdAsync(
      strUserCodePrjMainPathId,
    );
    if (objUserCodePrjMainPath != null) {
      localStorage.setItem(strKey, JSON.stringify(objUserCodePrjMainPath));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objUserCodePrjMainPath;
    }
    return objUserCodePrjMainPath;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserCodePrjMainPathId,
      userCodePrjMainPath_ConstructorName,
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
 * @param strUserCodePrjMainPathId:所给的关键字
 * @returns 对象
 */
export async function UserCodePrjMainPath_GetObjByUserCodePrjMainPathIdCache(
  strUserCodePrjMainPathId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByUserCodePrjMainPathIdCache';

  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    const strMsg = Format(
      '参数:[strUserCodePrjMainPathId]不能为空!(In clsUserCodePrjMainPathWApi.GetObjByUserCodePrjMainPathIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserCodePrjMainPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strUserCodePrjMainPathId]的长度:[{0}]不正确!(clsUserCodePrjMainPathWApi.GetObjByUserCodePrjMainPathIdCache)',
      strUserCodePrjMainPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrUserCodePrjMainPathObjLstCache = await UserCodePrjMainPath_GetObjLstCache(strPrjId);
  try {
    const arrUserCodePrjMainPathSel = arrUserCodePrjMainPathObjLstCache.filter(
      (x) => x.userCodePrjMainPathId == strUserCodePrjMainPathId,
    );
    let objUserCodePrjMainPath: clsUserCodePrjMainPathEN;
    if (arrUserCodePrjMainPathSel.length > 0) {
      objUserCodePrjMainPath = arrUserCodePrjMainPathSel[0];
      return objUserCodePrjMainPath;
    } else {
      if (bolTryAsyncOnce == true) {
        const objUserCodePrjMainPathConst =
          await UserCodePrjMainPath_GetObjByUserCodePrjMainPathIdAsync(strUserCodePrjMainPathId);
        if (objUserCodePrjMainPathConst != null) {
          UserCodePrjMainPath_ReFreshThisCache(strPrjId);
          return objUserCodePrjMainPathConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserCodePrjMainPathId,
      userCodePrjMainPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objUserCodePrjMainPath:所给的对象
 * @returns 对象
 */
export async function UserCodePrjMainPath_UpdateObjInLstCache(
  objUserCodePrjMainPath: clsUserCodePrjMainPathEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrUserCodePrjMainPathObjLstCache = await UserCodePrjMainPath_GetObjLstCache(strPrjId);
    const obj = arrUserCodePrjMainPathObjLstCache.find(
      (x) =>
        x.cMProjectAppRelaId == objUserCodePrjMainPath.cMProjectAppRelaId &&
        x.prjId == objUserCodePrjMainPath.prjId &&
        x.userId == objUserCodePrjMainPath.userId,
    );
    if (obj != null) {
      objUserCodePrjMainPath.userCodePrjMainPathId = obj.userCodePrjMainPathId;
      ObjectAssign(obj, objUserCodePrjMainPath);
    } else {
      arrUserCodePrjMainPathObjLstCache.push(objUserCodePrjMainPath);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      userCodePrjMainPath_ConstructorName,
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
export function UserCodePrjMainPath_SortFunDefa(
  a: clsUserCodePrjMainPathEN,
  b: clsUserCodePrjMainPathEN,
): number {
  return a.userCodePrjMainPathId.localeCompare(b.userCodePrjMainPathId);
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
export function UserCodePrjMainPath_SortFunDefa2Fld(
  a: clsUserCodePrjMainPathEN,
  b: clsUserCodePrjMainPathEN,
): number {
  if (a.cMProjectAppRelaId == b.cMProjectAppRelaId) return a.prjId.localeCompare(b.prjId);
  else return a.cMProjectAppRelaId - b.cMProjectAppRelaId;
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
export function UserCodePrjMainPath_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          return a.userCodePrjMainPathId.localeCompare(b.userCodePrjMainPathId);
        };
      case clsUserCodePrjMainPathEN.con_CMProjectAppRelaId:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          return a.cMProjectAppRelaId - b.cMProjectAppRelaId;
        };
      case clsUserCodePrjMainPathEN.con_PrjId:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsUserCodePrjMainPathEN.con_ProgLangTypeId:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          if (a.progLangTypeId == null) return -1;
          if (b.progLangTypeId == null) return 1;
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsUserCodePrjMainPathEN.con_UserId:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsUserCodePrjMainPathEN.con_IsUsePrjMainPath:
        return (a: clsUserCodePrjMainPathEN) => {
          if (a.isUsePrjMainPath == true) return 1;
          else return -1;
        };
      case clsUserCodePrjMainPathEN.con_IncludeXmlPath:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          if (a.includeXmlPath == null) return -1;
          if (b.includeXmlPath == null) return 1;
          return a.includeXmlPath.localeCompare(b.includeXmlPath);
        };
      case clsUserCodePrjMainPathEN.con_IsTemplate:
        return (a: clsUserCodePrjMainPathEN) => {
          if (a.isTemplate == true) return 1;
          else return -1;
        };
      case clsUserCodePrjMainPathEN.con_InUse:
        return (a: clsUserCodePrjMainPathEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsUserCodePrjMainPathEN.con_UpdDate:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsUserCodePrjMainPathEN.con_UpdUserId:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsUserCodePrjMainPathEN.con_Memo:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserCodePrjMainPath]中不存在!(in ${userCodePrjMainPath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          return b.userCodePrjMainPathId.localeCompare(a.userCodePrjMainPathId);
        };
      case clsUserCodePrjMainPathEN.con_CMProjectAppRelaId:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          return b.cMProjectAppRelaId - a.cMProjectAppRelaId;
        };
      case clsUserCodePrjMainPathEN.con_PrjId:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsUserCodePrjMainPathEN.con_ProgLangTypeId:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          if (b.progLangTypeId == null) return -1;
          if (a.progLangTypeId == null) return 1;
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsUserCodePrjMainPathEN.con_UserId:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsUserCodePrjMainPathEN.con_IsUsePrjMainPath:
        return (b: clsUserCodePrjMainPathEN) => {
          if (b.isUsePrjMainPath == true) return 1;
          else return -1;
        };
      case clsUserCodePrjMainPathEN.con_IncludeXmlPath:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          if (b.includeXmlPath == null) return -1;
          if (a.includeXmlPath == null) return 1;
          return b.includeXmlPath.localeCompare(a.includeXmlPath);
        };
      case clsUserCodePrjMainPathEN.con_IsTemplate:
        return (b: clsUserCodePrjMainPathEN) => {
          if (b.isTemplate == true) return 1;
          else return -1;
        };
      case clsUserCodePrjMainPathEN.con_InUse:
        return (b: clsUserCodePrjMainPathEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsUserCodePrjMainPathEN.con_UpdDate:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsUserCodePrjMainPathEN.con_UpdUserId:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsUserCodePrjMainPathEN.con_Memo:
        return (a: clsUserCodePrjMainPathEN, b: clsUserCodePrjMainPathEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserCodePrjMainPath]中不存在!(in ${userCodePrjMainPath_ConstructorName}.${strThisFuncName})`;
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
export async function UserCodePrjMainPath_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId:
      return (obj: clsUserCodePrjMainPathEN) => {
        return obj.userCodePrjMainPathId === value;
      };
    case clsUserCodePrjMainPathEN.con_CMProjectAppRelaId:
      return (obj: clsUserCodePrjMainPathEN) => {
        return obj.cMProjectAppRelaId === value;
      };
    case clsUserCodePrjMainPathEN.con_PrjId:
      return (obj: clsUserCodePrjMainPathEN) => {
        return obj.prjId === value;
      };
    case clsUserCodePrjMainPathEN.con_ProgLangTypeId:
      return (obj: clsUserCodePrjMainPathEN) => {
        return obj.progLangTypeId === value;
      };
    case clsUserCodePrjMainPathEN.con_UserId:
      return (obj: clsUserCodePrjMainPathEN) => {
        return obj.userId === value;
      };
    case clsUserCodePrjMainPathEN.con_IsUsePrjMainPath:
      return (obj: clsUserCodePrjMainPathEN) => {
        return obj.isUsePrjMainPath === value;
      };
    case clsUserCodePrjMainPathEN.con_IncludeXmlPath:
      return (obj: clsUserCodePrjMainPathEN) => {
        return obj.includeXmlPath === value;
      };
    case clsUserCodePrjMainPathEN.con_IsTemplate:
      return (obj: clsUserCodePrjMainPathEN) => {
        return obj.isTemplate === value;
      };
    case clsUserCodePrjMainPathEN.con_InUse:
      return (obj: clsUserCodePrjMainPathEN) => {
        return obj.inUse === value;
      };
    case clsUserCodePrjMainPathEN.con_UpdDate:
      return (obj: clsUserCodePrjMainPathEN) => {
        return obj.updDate === value;
      };
    case clsUserCodePrjMainPathEN.con_UpdUserId:
      return (obj: clsUserCodePrjMainPathEN) => {
        return obj.updUserId === value;
      };
    case clsUserCodePrjMainPathEN.con_Memo:
      return (obj: clsUserCodePrjMainPathEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[UserCodePrjMainPath]中不存在!(in ${userCodePrjMainPath_ConstructorName}.${strThisFuncName})`;
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
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function UserCodePrjMainPath_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsUserCodePrjMainPathWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsUserCodePrjMainPathWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsUserCodePrjMainPathEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsUserCodePrjMainPathEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strUserCodePrjMainPathId = strInValue;
  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    return '';
  }
  const objUserCodePrjMainPath = await UserCodePrjMainPath_GetObjByUserCodePrjMainPathIdCache(
    strUserCodePrjMainPathId,
    strPrjIdClassfy,
  );
  if (objUserCodePrjMainPath == null) return '';
  if (objUserCodePrjMainPath.GetFldValue(strOutFldName) == null) return '';
  return objUserCodePrjMainPath.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function UserCodePrjMainPath_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsUserCodePrjMainPathWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsUserCodePrjMainPathWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrUserCodePrjMainPath = await UserCodePrjMainPath_GetObjLstCache(strPrjIdClassfy);
  if (arrUserCodePrjMainPath == null) return [];
  let arrUserCodePrjMainPathSel = arrUserCodePrjMainPath;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrUserCodePrjMainPathSel.length == 0) return [];
  return arrUserCodePrjMainPathSel.map((x) => x.userCodePrjMainPathId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserCodePrjMainPath_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsUserCodePrjMainPathEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

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
      const objUserCodePrjMainPath = UserCodePrjMainPath_GetObjFromJsonObj(returnObj);
      return objUserCodePrjMainPath;
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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsUserCodePrjMainPathEN.WhereFormat) == false) {
    strWhereCond = Format(clsUserCodePrjMainPathEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPathEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsUserCodePrjMainPathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserCodePrjMainPathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrUserCodePrjMainPathExObjLstCache: Array<clsUserCodePrjMainPathEN> =
      CacheHelper.Get(strKey);
    const arrUserCodePrjMainPathObjLstT = UserCodePrjMainPath_GetObjLstByJSONObjLst(
      arrUserCodePrjMainPathExObjLstCache,
    );
    return arrUserCodePrjMainPathObjLstT;
  }
  try {
    const arrUserCodePrjMainPathExObjLst = await UserCodePrjMainPath_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrUserCodePrjMainPathExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUserCodePrjMainPathExObjLst.length,
    );
    console.log(strInfo);
    return arrUserCodePrjMainPathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsUserCodePrjMainPathEN.WhereFormat) == false) {
    strWhereCond = Format(clsUserCodePrjMainPathEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsUserCodePrjMainPathEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPathEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsUserCodePrjMainPathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserCodePrjMainPathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrUserCodePrjMainPathExObjLstCache: Array<clsUserCodePrjMainPathEN> =
      JSON.parse(strTempObjLst);
    const arrUserCodePrjMainPathObjLstT = UserCodePrjMainPath_GetObjLstByJSONObjLst(
      arrUserCodePrjMainPathExObjLstCache,
    );
    return arrUserCodePrjMainPathObjLstT;
  }
  try {
    const arrUserCodePrjMainPathExObjLst = await UserCodePrjMainPath_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrUserCodePrjMainPathExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUserCodePrjMainPathExObjLst.length,
    );
    console.log(strInfo);
    return arrUserCodePrjMainPathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPathEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrUserCodePrjMainPathObjLstCache: Array<clsUserCodePrjMainPathEN> =
      JSON.parse(strTempObjLst);
    return arrUserCodePrjMainPathObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function UserCodePrjMainPath_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsUserCodePrjMainPathEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

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
          userCodePrjMainPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePrjMainPath_GetObjLstByJSONObjLst(returnObjLst);
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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsUserCodePrjMainPathEN.WhereFormat) == false) {
    strWhereCond = Format(clsUserCodePrjMainPathEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsUserCodePrjMainPathEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPathEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsUserCodePrjMainPathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserCodePrjMainPathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrUserCodePrjMainPathExObjLstCache: Array<clsUserCodePrjMainPathEN> =
      JSON.parse(strTempObjLst);
    const arrUserCodePrjMainPathObjLstT = UserCodePrjMainPath_GetObjLstByJSONObjLst(
      arrUserCodePrjMainPathExObjLstCache,
    );
    return arrUserCodePrjMainPathObjLstT;
  }
  try {
    const arrUserCodePrjMainPathExObjLst = await UserCodePrjMainPath_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrUserCodePrjMainPathExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUserCodePrjMainPathExObjLst.length,
    );
    console.log(strInfo);
    return arrUserCodePrjMainPathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPathEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrUserCodePrjMainPathObjLstCache: Array<clsUserCodePrjMainPathEN> =
      JSON.parse(strTempObjLst);
    return arrUserCodePrjMainPathObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserCodePrjMainPath_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsUserCodePrjMainPathEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsUserCodePrjMainPathWApi.UserCodePrjMainPath_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsUserCodePrjMainPathWApi.UserCodePrjMainPath_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrUserCodePrjMainPathObjLstCache;
  switch (clsUserCodePrjMainPathEN.CacheModeId) {
    case '04': //sessionStorage
      arrUserCodePrjMainPathObjLstCache = await UserCodePrjMainPath_GetObjLstsessionStorage(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrUserCodePrjMainPathObjLstCache = await UserCodePrjMainPath_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrUserCodePrjMainPathObjLstCache = await UserCodePrjMainPath_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrUserCodePrjMainPathObjLstCache = await UserCodePrjMainPath_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrUserCodePrjMainPathObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserCodePrjMainPath_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrUserCodePrjMainPathObjLstCache;
  switch (clsUserCodePrjMainPathEN.CacheModeId) {
    case '04': //sessionStorage
      arrUserCodePrjMainPathObjLstCache =
        await UserCodePrjMainPath_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrUserCodePrjMainPathObjLstCache = await UserCodePrjMainPath_GetObjLstlocalStoragePureCache(
        strPrjId,
      );
      break;
    case '02': //ClientCache
      arrUserCodePrjMainPathObjLstCache = null;
      break;
    default:
      arrUserCodePrjMainPathObjLstCache = null;
      break;
  }
  return arrUserCodePrjMainPathObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrUserCodePrjMainPathIdCond:条件对象
 * @returns 对象列表子集
 */
export async function UserCodePrjMainPath_GetSubObjLstCache(
  objUserCodePrjMainPathCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrUserCodePrjMainPathObjLstCache = await UserCodePrjMainPath_GetObjLstCache(strPrjId);
  let arrUserCodePrjMainPathSel = arrUserCodePrjMainPathObjLstCache;
  if (objUserCodePrjMainPathCond.GetConditions().length == 0) return arrUserCodePrjMainPathSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objUserCodePrjMainPathCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrUserCodePrjMainPathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objUserCodePrjMainPathCond),
      userCodePrjMainPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserCodePrjMainPathEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrUserCodePrjMainPathId:关键字列表
 * @returns 对象列表
 **/
export async function UserCodePrjMainPath_GetObjLstByUserCodePrjMainPathIdLstAsync(
  arrUserCodePrjMainPathId: Array<string>,
): Promise<Array<clsUserCodePrjMainPathEN>> {
  const strThisFuncName = 'GetObjLstByUserCodePrjMainPathIdLstAsync';
  const strAction = 'GetObjLstByUserCodePrjMainPathIdLst';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrUserCodePrjMainPathId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          userCodePrjMainPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePrjMainPath_GetObjLstByJSONObjLst(returnObjLst);
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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
 * @param arrstrUserCodePrjMainPathIdLst:关键字列表
 * @returns 对象列表
 */
export async function UserCodePrjMainPath_GetObjLstByUserCodePrjMainPathIdLstCache(
  arrUserCodePrjMainPathIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByUserCodePrjMainPathIdLstCache';
  try {
    const arrUserCodePrjMainPathObjLstCache = await UserCodePrjMainPath_GetObjLstCache(strPrjId);
    const arrUserCodePrjMainPathSel = arrUserCodePrjMainPathObjLstCache.filter(
      (x) => arrUserCodePrjMainPathIdLst.indexOf(x.userCodePrjMainPathId) > -1,
    );
    return arrUserCodePrjMainPathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrUserCodePrjMainPathIdLst.join(','),
      userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsUserCodePrjMainPathEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

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
          userCodePrjMainPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePrjMainPath_GetObjLstByJSONObjLst(returnObjLst);
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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsUserCodePrjMainPathEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

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
          userCodePrjMainPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePrjMainPath_GetObjLstByJSONObjLst(returnObjLst);
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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsUserCodePrjMainPathEN>();
  const arrUserCodePrjMainPathObjLstCache = await UserCodePrjMainPath_GetObjLstCache(strPrjId);
  if (arrUserCodePrjMainPathObjLstCache.length == 0) return arrUserCodePrjMainPathObjLstCache;
  let arrUserCodePrjMainPathSel = arrUserCodePrjMainPathObjLstCache;
  const objUserCodePrjMainPathCond = objPagerPara.conditionCollection;
  if (objUserCodePrjMainPathCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsUserCodePrjMainPathEN>();
  }
  //console.log("clsUserCodePrjMainPathWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objUserCodePrjMainPathCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrUserCodePrjMainPathSel.length == 0) return arrUserCodePrjMainPathSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.sort(
        UserCodePrjMainPath_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.sort(objPagerPara.sortFun);
    }
    arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.slice(intStart, intEnd);
    return arrUserCodePrjMainPathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      userCodePrjMainPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserCodePrjMainPathEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function UserCodePrjMainPath_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUserCodePrjMainPathEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsUserCodePrjMainPathEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

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
          userCodePrjMainPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePrjMainPath_GetObjLstByJSONObjLst(returnObjLst);
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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
 * @param strUserCodePrjMainPathId:关键字
 * @returns 获取删除的结果
 **/
export async function UserCodePrjMainPath_DelRecordAsync(
  strUserCodePrjMainPathId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strUserCodePrjMainPathId);

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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
 * @param arrUserCodePrjMainPathId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function UserCodePrjMainPath_DelUserCodePrjMainPathsAsync(
  arrUserCodePrjMainPathId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelUserCodePrjMainPathsAsync';
  const strAction = 'DelUserCodePrjMainPaths';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrUserCodePrjMainPathId, config);
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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
): Promise<Array<clsUserCodePrjMainPathENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrUserCodePrjMainPathObjLst = await UserCodePrjMainPath_GetObjLstCache(strPrjId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsUserCodePrjMainPathENEx>();
  const arrUserCodePrjMainPathExObjLst = arrUserCodePrjMainPathObjLst.map((obj) => {
    const cacheKey = `${obj.userCodePrjMainPathId}_${obj.prjId}`;
    if (userCodePrjMainPathCache[cacheKey]) {
      const oldObj = userCodePrjMainPathCache[cacheKey];
      return oldObj;
    } else {
      const newObj = UserCodePrjMainPath_CopyToEx(obj);
      arrNewObj.push(newObj);
      userCodePrjMainPathCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await UserCodePrjMainPath_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsUserCodePrjMainPathEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrUserCodePrjMainPathExObjLst) {
      await UserCodePrjMainPath_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.userCodePrjMainPathId}_${newObj.prjId}`;
      userCodePrjMainPathCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrUserCodePrjMainPathExObjLst.length == 0) return arrUserCodePrjMainPathExObjLst;
  let arrUserCodePrjMainPathSel: Array<clsUserCodePrjMainPathENEx> = arrUserCodePrjMainPathExObjLst;
  const objUserCodePrjMainPathCond = objPagerPara.conditionCollection;
  if (objUserCodePrjMainPathCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrUserCodePrjMainPathExObjLst;
  }
  try {
    for (const objCondition of objUserCodePrjMainPathCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrUserCodePrjMainPathSel.length == 0) return arrUserCodePrjMainPathSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.sort(
        UserCodePrjMainPath_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.sort(objPagerPara.sortFun);
    }
    arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.slice(intStart, intEnd);
    return arrUserCodePrjMainPathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      userCodePrjMainPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserCodePrjMainPathENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objUserCodePrjMainPathENS:源对象
 * @returns 目标对象=>clsUserCodePrjMainPathEN:objUserCodePrjMainPathENT
 **/
export function UserCodePrjMainPath_CopyToEx(
  objUserCodePrjMainPathENS: clsUserCodePrjMainPathEN,
): clsUserCodePrjMainPathENEx {
  const strThisFuncName = UserCodePrjMainPath_CopyToEx.name;
  const objUserCodePrjMainPathENT = new clsUserCodePrjMainPathENEx();
  try {
    ObjectAssign(objUserCodePrjMainPathENT, objUserCodePrjMainPathENS);
    return objUserCodePrjMainPathENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      userCodePrjMainPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objUserCodePrjMainPathENT;
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
export function UserCodePrjMainPath_FuncMapByFldName(
  strFldName: string,
  objUserCodePrjMainPathEx: clsUserCodePrjMainPathENEx,
) {
  const strThisFuncName = UserCodePrjMainPath_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsUserCodePrjMainPathEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsUserCodePrjMainPathENEx.con_PrjName:
      return UserCodePrjMainPath_FuncMapPrjName(objUserCodePrjMainPathEx);
    case clsUserCodePrjMainPathENEx.con_ProgLangTypeName:
      return UserCodePrjMainPath_FuncMapProgLangTypeName(objUserCodePrjMainPathEx);
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
export function UserCodePrjMainPath_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserCodePrjMainPathENEx.con_PrjName:
        return (a: clsUserCodePrjMainPathENEx, b: clsUserCodePrjMainPathENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsUserCodePrjMainPathENEx.con_ProgLangTypeName:
        return (a: clsUserCodePrjMainPathENEx, b: clsUserCodePrjMainPathENEx) => {
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      default:
        return UserCodePrjMainPath_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsUserCodePrjMainPathENEx.con_PrjName:
        return (a: clsUserCodePrjMainPathENEx, b: clsUserCodePrjMainPathENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsUserCodePrjMainPathENEx.con_ProgLangTypeName:
        return (a: clsUserCodePrjMainPathENEx, b: clsUserCodePrjMainPathENEx) => {
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      default:
        return UserCodePrjMainPath_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objUserCodePrjMainPathS:源对象
 **/
export async function UserCodePrjMainPath_FuncMapPrjName(
  objUserCodePrjMainPath: clsUserCodePrjMainPathENEx,
) {
  const strThisFuncName = UserCodePrjMainPath_FuncMapPrjName.name;
  try {
    if (IsNullOrEmpty(objUserCodePrjMainPath.prjName) == true) {
      const ProjectsPrjId = objUserCodePrjMainPath.prjId;
      const ProjectsPrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        ProjectsPrjId,
      );
      objUserCodePrjMainPath.prjName = ProjectsPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001315)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userCodePrjMainPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objUserCodePrjMainPathS:源对象
 **/
export async function UserCodePrjMainPath_FuncMapProgLangTypeName(
  objUserCodePrjMainPath: clsUserCodePrjMainPathENEx,
) {
  const strThisFuncName = UserCodePrjMainPath_FuncMapProgLangTypeName.name;
  try {
    if (IsNullOrEmpty(objUserCodePrjMainPath.progLangTypeName) == true) {
      const ProgLangTypeProgLangTypeId = objUserCodePrjMainPath.progLangTypeId;
      const ProgLangTypeProgLangTypeName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeName,
        ProgLangTypeProgLangTypeId,
      );
      objUserCodePrjMainPath.progLangTypeName = ProgLangTypeProgLangTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001312)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_DelUserCodePrjMainPathsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelUserCodePrjMainPathsByCondAsync';
  const strAction = 'DelUserCodePrjMainPathsByCond';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
 * @param objUserCodePrjMainPathEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserCodePrjMainPath_AddNewRecordAsync(
  objUserCodePrjMainPathEN: clsUserCodePrjMainPathEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objUserCodePrjMainPathEN);
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPathEN, config);
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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
 * @param objUserCodePrjMainPathEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserCodePrjMainPath_AddNewRecordWithMaxIdAsync(
  objUserCodePrjMainPathEN: clsUserCodePrjMainPathEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPathEN, config);
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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_AddNewObjSave(
  objUserCodePrjMainPathEN: clsUserCodePrjMainPathEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    UserCodePrjMainPath_CheckPropertyNew(objUserCodePrjMainPathEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${userCodePrjMainPath_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await UserCodePrjMainPath_CheckUniCond4Add(objUserCodePrjMainPathEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await UserCodePrjMainPath_AddNewRecordWithMaxIdAsync(
      objUserCodePrjMainPathEN,
    );
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      UserCodePrjMainPath_ReFreshCache(objUserCodePrjMainPathEN.prjId);
    } else {
      const strInfo = `添加[用户生成项目主路径(UserCodePrjMainPath)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${userCodePrjMainPath_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function UserCodePrjMainPath_CheckUniCond4Add(
  objUserCodePrjMainPathEN: clsUserCodePrjMainPathEN,
): Promise<boolean> {
  const strUniquenessCondition = UserCodePrjMainPath_GetUniCondStr(objUserCodePrjMainPathEN);
  const bolIsExistCondition = await UserCodePrjMainPath_IsExistRecordAsync(strUniquenessCondition);
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
export async function UserCodePrjMainPath_CheckUniCond4Update(
  objUserCodePrjMainPathEN: clsUserCodePrjMainPathEN,
): Promise<boolean> {
  const strUniquenessCondition = UserCodePrjMainPath_GetUniCondStr4Update(objUserCodePrjMainPathEN);
  const bolIsExistCondition = await UserCodePrjMainPath_IsExistRecordAsync(strUniquenessCondition);
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
export async function UserCodePrjMainPath_UpdateObjSave(
  objUserCodePrjMainPathEN: clsUserCodePrjMainPathEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objUserCodePrjMainPathEN.sfUpdFldSetStr = objUserCodePrjMainPathEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objUserCodePrjMainPathEN.userCodePrjMainPathId == '' ||
    objUserCodePrjMainPathEN.userCodePrjMainPathId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    UserCodePrjMainPath_CheckProperty4Update(objUserCodePrjMainPathEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${userCodePrjMainPath_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await UserCodePrjMainPath_CheckUniCond4Update(objUserCodePrjMainPathEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await UserCodePrjMainPath_UpdateRecordAsync(objUserCodePrjMainPathEN);
    if (returnBool == true) {
      UserCodePrjMainPath_ReFreshCache(objUserCodePrjMainPathEN.prjId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${userCodePrjMainPath_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objUserCodePrjMainPathEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function UserCodePrjMainPath_AddNewRecordWithReturnKeyAsync(
  objUserCodePrjMainPathEN: clsUserCodePrjMainPathEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPathEN, config);
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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
 * @param objUserCodePrjMainPathEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function UserCodePrjMainPath_UpdateRecordAsync(
  objUserCodePrjMainPathEN: clsUserCodePrjMainPathEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objUserCodePrjMainPathEN.sfUpdFldSetStr === undefined ||
    objUserCodePrjMainPathEN.sfUpdFldSetStr === null ||
    objUserCodePrjMainPathEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objUserCodePrjMainPathEN.userCodePrjMainPathId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPathEN, config);
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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
 * @param objUserCodePrjMainPathEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function UserCodePrjMainPath_EditRecordExAsync(
  objUserCodePrjMainPathEN: clsUserCodePrjMainPathEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objUserCodePrjMainPathEN.sfUpdFldSetStr === undefined ||
    objUserCodePrjMainPathEN.sfUpdFldSetStr === null ||
    objUserCodePrjMainPathEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objUserCodePrjMainPathEN.userCodePrjMainPathId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPathEN, config);
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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
 * @param objUserCodePrjMainPathEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserCodePrjMainPath_UpdateWithConditionAsync(
  objUserCodePrjMainPathEN: clsUserCodePrjMainPathEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objUserCodePrjMainPathEN.sfUpdFldSetStr === undefined ||
    objUserCodePrjMainPathEN.sfUpdFldSetStr === null ||
    objUserCodePrjMainPathEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objUserCodePrjMainPathEN.userCodePrjMainPathId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);
  objUserCodePrjMainPathEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPathEN, config);
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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
 * @param objstrUserCodePrjMainPathIdCond:条件对象
 * @returns 对象列表子集
 */
export async function UserCodePrjMainPath_IsExistRecordCache(
  objUserCodePrjMainPathCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrUserCodePrjMainPathObjLstCache = await UserCodePrjMainPath_GetObjLstCache(strPrjId);
  if (arrUserCodePrjMainPathObjLstCache == null) return false;
  let arrUserCodePrjMainPathSel = arrUserCodePrjMainPathObjLstCache;
  if (objUserCodePrjMainPathCond.GetConditions().length == 0)
    return arrUserCodePrjMainPathSel.length > 0 ? true : false;
  try {
    for (const objCondition of objUserCodePrjMainPathCond.GetConditions()) {
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
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrUserCodePrjMainPathSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objUserCodePrjMainPathCond),
      userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
 * @param strUserCodePrjMainPathId:所给的关键字
 * @returns 对象
 */
export async function UserCodePrjMainPath_IsExistCache(
  strUserCodePrjMainPathId: string,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrUserCodePrjMainPathObjLstCache = await UserCodePrjMainPath_GetObjLstCache(strPrjId);
  if (arrUserCodePrjMainPathObjLstCache == null) return false;
  try {
    const arrUserCodePrjMainPathSel = arrUserCodePrjMainPathObjLstCache.filter(
      (x) => x.userCodePrjMainPathId == strUserCodePrjMainPathId,
    );
    if (arrUserCodePrjMainPathSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strUserCodePrjMainPathId,
      userCodePrjMainPath_ConstructorName,
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
 * @param strUserCodePrjMainPathId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function UserCodePrjMainPath_IsExistAsync(
  strUserCodePrjMainPathId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserCodePrjMainPathId,
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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
 * @param objUserCodePrjMainPathCond:条件对象
 * @returns 对象列表记录数
 */
export async function UserCodePrjMainPath_GetRecCountByCondCache(
  objUserCodePrjMainPathCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrUserCodePrjMainPathObjLstCache = await UserCodePrjMainPath_GetObjLstCache(strPrjId);
  if (arrUserCodePrjMainPathObjLstCache == null) return 0;
  let arrUserCodePrjMainPathSel = arrUserCodePrjMainPathObjLstCache;
  if (objUserCodePrjMainPathCond.GetConditions().length == 0)
    return arrUserCodePrjMainPathSel.length;
  try {
    for (const objCondition of objUserCodePrjMainPathCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrUserCodePrjMainPathSel = arrUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrUserCodePrjMainPathSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objUserCodePrjMainPathCond),
      userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
export async function UserCodePrjMainPath_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_Controller, strAction);

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
        userCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_ConstructorName,
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
export function UserCodePrjMainPath_GetWebApiUrl(strController: string, strAction: string): string {
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
export function UserCodePrjMainPath_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsUserCodePrjMainPathWApi.clsUserCodePrjMainPathWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsUserCodePrjMainPathWApi.clsUserCodePrjMainPathWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPathEN._CurrTabName, strPrjId);
  switch (clsUserCodePrjMainPathEN.CacheModeId) {
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
  clsUserCodePrjMainPathEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function UserCodePrjMainPath_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsUserCodePrjMainPathWApi.UserCodePrjMainPath_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsUserCodePrjMainPathWApi.UserCodePrjMainPath_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsUserCodePrjMainPathEN._CurrTabName, strPrjId);
    switch (clsUserCodePrjMainPathEN.CacheModeId) {
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
    clsUserCodePrjMainPathEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function UserCodePrjMainPath_GetLastRefreshTime(): string {
  if (clsUserCodePrjMainPathEN._RefreshTimeLst.length == 0) return '';
  return clsUserCodePrjMainPathEN._RefreshTimeLst[
    clsUserCodePrjMainPathEN._RefreshTimeLst.length - 1
  ];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function UserCodePrjMainPath_CheckPropertyNew(
  pobjUserCodePrjMainPathEN: clsUserCodePrjMainPathEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    null === pobjUserCodePrjMainPathEN.cMProjectAppRelaId ||
    (pobjUserCodePrjMainPathEN.cMProjectAppRelaId != null &&
      pobjUserCodePrjMainPathEN.cMProjectAppRelaId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[Cm工程应用关系Id]不能为空(In 用户生成项目主路径)!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.prjId) === true ||
    pobjUserCodePrjMainPathEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 用户生成项目主路径)!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.userId) === true ||
    pobjUserCodePrjMainPathEN.userId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[用户Id]不能为空(In 用户生成项目主路径)!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjUserCodePrjMainPathEN.isUsePrjMainPath ||
    (pobjUserCodePrjMainPathEN.isUsePrjMainPath != null &&
      pobjUserCodePrjMainPathEN.isUsePrjMainPath.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否使用主路径]不能为空(In 用户生成项目主路径)!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjUserCodePrjMainPathEN.isTemplate ||
    (pobjUserCodePrjMainPathEN.isTemplate != null &&
      pobjUserCodePrjMainPathEN.isTemplate.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否模板]不能为空(In 用户生成项目主路径)!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjUserCodePrjMainPathEN.inUse ||
    (pobjUserCodePrjMainPathEN.inUse != null && pobjUserCodePrjMainPathEN.inUse.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否在用]不能为空(In 用户生成项目主路径)!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.userCodePrjMainPathId) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.userCodePrjMainPathId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[生成主目录Id(userCodePrjMainPathId)]的长度不能超过8(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.userCodePrjMainPathId}(clsUserCodePrjMainPathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.prjId) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.prjId}(clsUserCodePrjMainPathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.progLangTypeId) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.progLangTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.progLangTypeId}(clsUserCodePrjMainPathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.userId) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.userId) > 18
  ) {
    throw new Error(
      `(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.userId}(clsUserCodePrjMainPathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.includeXmlPath) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.includeXmlPath) > 150
  ) {
    throw new Error(
      `(errid:Watl000413)字段[包含表Xml路径(includeXmlPath)]的长度不能超过150(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.includeXmlPath}(clsUserCodePrjMainPathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.updDate) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.updDate}(clsUserCodePrjMainPathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.updUserId) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.updUserId}(clsUserCodePrjMainPathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.memo) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.memo}(clsUserCodePrjMainPathBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.userCodePrjMainPathId) == false &&
    undefined !== pobjUserCodePrjMainPathEN.userCodePrjMainPathId &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.userCodePrjMainPathId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[生成主目录Id(userCodePrjMainPathId)]的值:[${pobjUserCodePrjMainPathEN.userCodePrjMainPathId}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjUserCodePrjMainPathEN.cMProjectAppRelaId &&
    undefined !== pobjUserCodePrjMainPathEN.cMProjectAppRelaId &&
    tzDataType.isNumber(pobjUserCodePrjMainPathEN.cMProjectAppRelaId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Cm工程应用关系Id(cMProjectAppRelaId)]的值:[${pobjUserCodePrjMainPathEN.cMProjectAppRelaId}], 非法,应该为数值型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.prjId) == false &&
    undefined !== pobjUserCodePrjMainPathEN.prjId &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjUserCodePrjMainPathEN.prjId}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.progLangTypeId) == false &&
    undefined !== pobjUserCodePrjMainPathEN.progLangTypeId &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.progLangTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[编程语言类型Id(progLangTypeId)]的值:[${pobjUserCodePrjMainPathEN.progLangTypeId}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.userId) == false &&
    undefined !== pobjUserCodePrjMainPathEN.userId &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[用户Id(userId)]的值:[${pobjUserCodePrjMainPathEN.userId}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjUserCodePrjMainPathEN.isUsePrjMainPath &&
    undefined !== pobjUserCodePrjMainPathEN.isUsePrjMainPath &&
    tzDataType.isBoolean(pobjUserCodePrjMainPathEN.isUsePrjMainPath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否使用主路径(isUsePrjMainPath)]的值:[${pobjUserCodePrjMainPathEN.isUsePrjMainPath}], 非法,应该为布尔型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.includeXmlPath) == false &&
    undefined !== pobjUserCodePrjMainPathEN.includeXmlPath &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.includeXmlPath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[包含表Xml路径(includeXmlPath)]的值:[${pobjUserCodePrjMainPathEN.includeXmlPath}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjUserCodePrjMainPathEN.isTemplate &&
    undefined !== pobjUserCodePrjMainPathEN.isTemplate &&
    tzDataType.isBoolean(pobjUserCodePrjMainPathEN.isTemplate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否模板(isTemplate)]的值:[${pobjUserCodePrjMainPathEN.isTemplate}], 非法,应该为布尔型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjUserCodePrjMainPathEN.inUse &&
    undefined !== pobjUserCodePrjMainPathEN.inUse &&
    tzDataType.isBoolean(pobjUserCodePrjMainPathEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjUserCodePrjMainPathEN.inUse}], 非法,应该为布尔型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.updDate) == false &&
    undefined !== pobjUserCodePrjMainPathEN.updDate &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjUserCodePrjMainPathEN.updDate}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.updUserId) == false &&
    undefined !== pobjUserCodePrjMainPathEN.updUserId &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjUserCodePrjMainPathEN.updUserId}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.memo) == false &&
    undefined !== pobjUserCodePrjMainPathEN.memo &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjUserCodePrjMainPathEN.memo}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.userCodePrjMainPathId) == false &&
    pobjUserCodePrjMainPathEN.userCodePrjMainPathId != '[nuull]' &&
    GetStrLen(pobjUserCodePrjMainPathEN.userCodePrjMainPathId) != 8
  ) {
    throw '(errid:Watl000415)字段[生成主目录Id]作为外键字段,长度应该为8(In 用户生成项目主路径)!(clsUserCodePrjMainPathBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function UserCodePrjMainPath_CheckProperty4Update(
  pobjUserCodePrjMainPathEN: clsUserCodePrjMainPathEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.userCodePrjMainPathId) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.userCodePrjMainPathId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[生成主目录Id(userCodePrjMainPathId)]的长度不能超过8(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.userCodePrjMainPathId}(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.prjId) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.prjId}(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.progLangTypeId) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.progLangTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.progLangTypeId}(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.userId) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.userId) > 18
  ) {
    throw new Error(
      `(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.userId}(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.includeXmlPath) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.includeXmlPath) > 150
  ) {
    throw new Error(
      `(errid:Watl000416)字段[包含表Xml路径(includeXmlPath)]的长度不能超过150(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.includeXmlPath}(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.updDate) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.updDate}(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.updUserId) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.updUserId}(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.memo) == false &&
    GetStrLen(pobjUserCodePrjMainPathEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 用户生成项目主路径(UserCodePrjMainPath))!值:${pobjUserCodePrjMainPathEN.memo}(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.userCodePrjMainPathId) == false &&
    undefined !== pobjUserCodePrjMainPathEN.userCodePrjMainPathId &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.userCodePrjMainPathId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[生成主目录Id(userCodePrjMainPathId)]的值:[${pobjUserCodePrjMainPathEN.userCodePrjMainPathId}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjUserCodePrjMainPathEN.cMProjectAppRelaId &&
    undefined !== pobjUserCodePrjMainPathEN.cMProjectAppRelaId &&
    tzDataType.isNumber(pobjUserCodePrjMainPathEN.cMProjectAppRelaId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Cm工程应用关系Id(cMProjectAppRelaId)]的值:[${pobjUserCodePrjMainPathEN.cMProjectAppRelaId}], 非法,应该为数值型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.prjId) == false &&
    undefined !== pobjUserCodePrjMainPathEN.prjId &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjUserCodePrjMainPathEN.prjId}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.progLangTypeId) == false &&
    undefined !== pobjUserCodePrjMainPathEN.progLangTypeId &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.progLangTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[编程语言类型Id(progLangTypeId)]的值:[${pobjUserCodePrjMainPathEN.progLangTypeId}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.userId) == false &&
    undefined !== pobjUserCodePrjMainPathEN.userId &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[用户Id(userId)]的值:[${pobjUserCodePrjMainPathEN.userId}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjUserCodePrjMainPathEN.isUsePrjMainPath &&
    undefined !== pobjUserCodePrjMainPathEN.isUsePrjMainPath &&
    tzDataType.isBoolean(pobjUserCodePrjMainPathEN.isUsePrjMainPath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否使用主路径(isUsePrjMainPath)]的值:[${pobjUserCodePrjMainPathEN.isUsePrjMainPath}], 非法,应该为布尔型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.includeXmlPath) == false &&
    undefined !== pobjUserCodePrjMainPathEN.includeXmlPath &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.includeXmlPath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[包含表Xml路径(includeXmlPath)]的值:[${pobjUserCodePrjMainPathEN.includeXmlPath}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjUserCodePrjMainPathEN.isTemplate &&
    undefined !== pobjUserCodePrjMainPathEN.isTemplate &&
    tzDataType.isBoolean(pobjUserCodePrjMainPathEN.isTemplate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否模板(isTemplate)]的值:[${pobjUserCodePrjMainPathEN.isTemplate}], 非法,应该为布尔型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjUserCodePrjMainPathEN.inUse &&
    undefined !== pobjUserCodePrjMainPathEN.inUse &&
    tzDataType.isBoolean(pobjUserCodePrjMainPathEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjUserCodePrjMainPathEN.inUse}], 非法,应该为布尔型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.updDate) == false &&
    undefined !== pobjUserCodePrjMainPathEN.updDate &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjUserCodePrjMainPathEN.updDate}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.updUserId) == false &&
    undefined !== pobjUserCodePrjMainPathEN.updUserId &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjUserCodePrjMainPathEN.updUserId}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.memo) == false &&
    undefined !== pobjUserCodePrjMainPathEN.memo &&
    tzDataType.isString(pobjUserCodePrjMainPathEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjUserCodePrjMainPathEN.memo}], 非法,应该为字符型(In 用户生成项目主路径(UserCodePrjMainPath))!(clsUserCodePrjMainPathBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathEN.userCodePrjMainPathId) == false &&
    pobjUserCodePrjMainPathEN.userCodePrjMainPathId != '[nuull]' &&
    GetStrLen(pobjUserCodePrjMainPathEN.userCodePrjMainPathId) != 8
  ) {
    throw '(errid:Watl000418)字段[生成主目录Id]作为外键字段,长度应该为8(In 用户生成项目主路径)!(clsUserCodePrjMainPathBL:CheckPropertyNew)';
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
export function UserCodePrjMainPath_GetJSONStrByObj(
  pobjUserCodePrjMainPathEN: clsUserCodePrjMainPathEN,
): string {
  pobjUserCodePrjMainPathEN.sfUpdFldSetStr = pobjUserCodePrjMainPathEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjUserCodePrjMainPathEN);
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
export function UserCodePrjMainPath_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsUserCodePrjMainPathEN> {
  let arrUserCodePrjMainPathObjLst = new Array<clsUserCodePrjMainPathEN>();
  if (strJSON === '') {
    return arrUserCodePrjMainPathObjLst;
  }
  try {
    arrUserCodePrjMainPathObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrUserCodePrjMainPathObjLst;
  }
  return arrUserCodePrjMainPathObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrUserCodePrjMainPathObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function UserCodePrjMainPath_GetObjLstByJSONObjLst(
  arrUserCodePrjMainPathObjLstS: Array<clsUserCodePrjMainPathEN>,
): Array<clsUserCodePrjMainPathEN> {
  const arrUserCodePrjMainPathObjLst = new Array<clsUserCodePrjMainPathEN>();
  for (const objInFor of arrUserCodePrjMainPathObjLstS) {
    const obj1 = UserCodePrjMainPath_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrUserCodePrjMainPathObjLst.push(obj1);
  }
  return arrUserCodePrjMainPathObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function UserCodePrjMainPath_GetObjByJSONStr(strJSON: string): clsUserCodePrjMainPathEN {
  let pobjUserCodePrjMainPathEN = new clsUserCodePrjMainPathEN();
  if (strJSON === '') {
    return pobjUserCodePrjMainPathEN;
  }
  try {
    pobjUserCodePrjMainPathEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjUserCodePrjMainPathEN;
  }
  return pobjUserCodePrjMainPathEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function UserCodePrjMainPath_GetCombineCondition(
  objUserCodePrjMainPathCond: clsUserCodePrjMainPathEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathCond.dicFldComparisonOp,
      clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
    ) == true
  ) {
    const strComparisonOpUserCodePrjMainPathId: string =
      objUserCodePrjMainPathCond.dicFldComparisonOp[
        clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
      objUserCodePrjMainPathCond.userCodePrjMainPathId,
      strComparisonOpUserCodePrjMainPathId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathCond.dicFldComparisonOp,
      clsUserCodePrjMainPathEN.con_CMProjectAppRelaId,
    ) == true
  ) {
    const strComparisonOpCMProjectAppRelaId: string =
      objUserCodePrjMainPathCond.dicFldComparisonOp[
        clsUserCodePrjMainPathEN.con_CMProjectAppRelaId
      ];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsUserCodePrjMainPathEN.con_CMProjectAppRelaId,
      objUserCodePrjMainPathCond.cMProjectAppRelaId,
      strComparisonOpCMProjectAppRelaId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathCond.dicFldComparisonOp,
      clsUserCodePrjMainPathEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objUserCodePrjMainPathCond.dicFldComparisonOp[clsUserCodePrjMainPathEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathEN.con_PrjId,
      objUserCodePrjMainPathCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathCond.dicFldComparisonOp,
      clsUserCodePrjMainPathEN.con_ProgLangTypeId,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId: string =
      objUserCodePrjMainPathCond.dicFldComparisonOp[clsUserCodePrjMainPathEN.con_ProgLangTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathEN.con_ProgLangTypeId,
      objUserCodePrjMainPathCond.progLangTypeId,
      strComparisonOpProgLangTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathCond.dicFldComparisonOp,
      clsUserCodePrjMainPathEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objUserCodePrjMainPathCond.dicFldComparisonOp[clsUserCodePrjMainPathEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathEN.con_UserId,
      objUserCodePrjMainPathCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathCond.dicFldComparisonOp,
      clsUserCodePrjMainPathEN.con_IsUsePrjMainPath,
    ) == true
  ) {
    if (objUserCodePrjMainPathCond.isUsePrjMainPath == true) {
      strWhereCond += Format(" And {0} = '1'", clsUserCodePrjMainPathEN.con_IsUsePrjMainPath);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsUserCodePrjMainPathEN.con_IsUsePrjMainPath);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathCond.dicFldComparisonOp,
      clsUserCodePrjMainPathEN.con_IncludeXmlPath,
    ) == true
  ) {
    const strComparisonOpIncludeXmlPath: string =
      objUserCodePrjMainPathCond.dicFldComparisonOp[clsUserCodePrjMainPathEN.con_IncludeXmlPath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathEN.con_IncludeXmlPath,
      objUserCodePrjMainPathCond.includeXmlPath,
      strComparisonOpIncludeXmlPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathCond.dicFldComparisonOp,
      clsUserCodePrjMainPathEN.con_IsTemplate,
    ) == true
  ) {
    if (objUserCodePrjMainPathCond.isTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsUserCodePrjMainPathEN.con_IsTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsUserCodePrjMainPathEN.con_IsTemplate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathCond.dicFldComparisonOp,
      clsUserCodePrjMainPathEN.con_InUse,
    ) == true
  ) {
    if (objUserCodePrjMainPathCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsUserCodePrjMainPathEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsUserCodePrjMainPathEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathCond.dicFldComparisonOp,
      clsUserCodePrjMainPathEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objUserCodePrjMainPathCond.dicFldComparisonOp[clsUserCodePrjMainPathEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathEN.con_UpdDate,
      objUserCodePrjMainPathCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathCond.dicFldComparisonOp,
      clsUserCodePrjMainPathEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objUserCodePrjMainPathCond.dicFldComparisonOp[clsUserCodePrjMainPathEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathEN.con_UpdUserId,
      objUserCodePrjMainPathCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathCond.dicFldComparisonOp,
      clsUserCodePrjMainPathEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objUserCodePrjMainPathCond.dicFldComparisonOp[clsUserCodePrjMainPathEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathEN.con_Memo,
      objUserCodePrjMainPathCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--UserCodePrjMainPath(用户生成项目主路径),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngCMProjectAppRelaId: Cm工程应用关系Id(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function UserCodePrjMainPath_GetUniCondStr(
  objUserCodePrjMainPathEN: clsUserCodePrjMainPathEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and CMProjectAppRelaId = '{0}'",
    objUserCodePrjMainPathEN.cMProjectAppRelaId,
  );
  strWhereCond += Format(" and PrjId = '{0}'", objUserCodePrjMainPathEN.prjId);
  strWhereCond += Format(" and UserId = '{0}'", objUserCodePrjMainPathEN.userId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--UserCodePrjMainPath(用户生成项目主路径),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngCMProjectAppRelaId: Cm工程应用关系Id(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function UserCodePrjMainPath_GetUniCondStr4Update(
  objUserCodePrjMainPathEN: clsUserCodePrjMainPathEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and UserCodePrjMainPathId <> '{0}'",
    objUserCodePrjMainPathEN.userCodePrjMainPathId,
  );
  strWhereCond += Format(
    " and CMProjectAppRelaId = '{0}'",
    objUserCodePrjMainPathEN.cMProjectAppRelaId,
  );
  strWhereCond += Format(" and PrjId = '{0}'", objUserCodePrjMainPathEN.prjId);
  strWhereCond += Format(" and UserId = '{0}'", objUserCodePrjMainPathEN.userId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objUserCodePrjMainPathENS:源对象
 * @param objUserCodePrjMainPathENT:目标对象
 */
export function UserCodePrjMainPath_GetObjFromJsonObj(
  objUserCodePrjMainPathENS: clsUserCodePrjMainPathEN,
): clsUserCodePrjMainPathEN {
  const objUserCodePrjMainPathENT: clsUserCodePrjMainPathEN = new clsUserCodePrjMainPathEN();
  ObjectAssign(objUserCodePrjMainPathENT, objUserCodePrjMainPathENS);
  return objUserCodePrjMainPathENT;
}
