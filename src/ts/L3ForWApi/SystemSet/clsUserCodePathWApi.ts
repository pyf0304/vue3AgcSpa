/**
 * 类名:clsUserCodePathWApi
 * 表名:UserCodePath(00050204)
 * 版本:2025.06.13.1(服务器:PYF-AI)
 * 日期:2025/06/15 10:04:29
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
 * 用户生成路径(UserCodePath)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月15日.
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
import { userCodePathCache, isFuncMapCache } from '@/views/SystemSet/UserCodePathVueShare';
import { clsUserCodePathENEx } from '@/ts/L0Entity/SystemSet/clsUserCodePathENEx';
import { clsUserCodePathEN } from '@/ts/L0Entity/SystemSet/clsUserCodePathEN';
import { TabMainType_func } from '@/ts/L3ForWApi/Table_Field/clsTabMainTypeWApi';
import { clsTabMainTypeEN } from '@/ts/L0Entity/Table_Field/clsTabMainTypeEN';
import { vCodeType_Sim_func } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
import { GCPath_func } from '@/ts/L3ForWApi/GeneCode/clsGCPathWApi';
import { clsGCPathEN } from '@/ts/L0Entity/GeneCode/clsGCPathEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const userCodePath_Controller = 'UserCodePathApi';
export const userCodePath_ConstructorName = 'userCodePath';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function UserCodePath_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsUserCodePathEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsUserCodePathWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
      const objUserCodePath = UserCodePath_GetObjFromJsonObj(returnObj);
      return objUserCodePath;
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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsUserCodePathWApi.GetObjBymIdlocalStorage)');
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsUserCodePathEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objUserCodePathCache: clsUserCodePathEN = JSON.parse(strTempObj);
    return objUserCodePathCache;
  }
  try {
    const objUserCodePath = await UserCodePath_GetObjBymIdAsync(lngmId);
    if (objUserCodePath != null) {
      localStorage.setItem(strKey, JSON.stringify(objUserCodePath));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objUserCodePath;
    }
    return objUserCodePath;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      userCodePath_ConstructorName,
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
export async function UserCodePath_GetObjBymIdCache(
  lngmId: number,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsUserCodePathWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrUserCodePathObjLstCache = await UserCodePath_GetObjLstCache(strPrjId);
  try {
    const arrUserCodePathSel = arrUserCodePathObjLstCache.filter((x) => x.mId == lngmId);
    let objUserCodePath: clsUserCodePathEN;
    if (arrUserCodePathSel.length > 0) {
      objUserCodePath = arrUserCodePathSel[0];
      return objUserCodePath;
    } else {
      if (bolTryAsyncOnce == true) {
        const objUserCodePathConst = await UserCodePath_GetObjBymIdAsync(lngmId);
        if (objUserCodePathConst != null) {
          UserCodePath_ReFreshThisCache(strPrjId);
          return objUserCodePathConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      userCodePath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objUserCodePath:所给的对象
 * @returns 对象
 */
export async function UserCodePath_UpdateObjInLstCache(
  objUserCodePath: clsUserCodePathEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrUserCodePathObjLstCache = await UserCodePath_GetObjLstCache(strPrjId);
    const obj = arrUserCodePathObjLstCache.find(
      (x) =>
        x.codeTypeId == objUserCodePath.codeTypeId &&
        x.cMProjectAppRelaId == objUserCodePath.cMProjectAppRelaId,
    );
    if (obj != null) {
      objUserCodePath.mId = obj.mId;
      ObjectAssign(obj, objUserCodePath);
    } else {
      arrUserCodePathObjLstCache.push(objUserCodePath);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      userCodePath_ConstructorName,
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
export function UserCodePath_SortFunDefa(a: clsUserCodePathEN, b: clsUserCodePathEN): number {
  return a.mId - b.mId;
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
export function UserCodePath_SortFunDefa2Fld(a: clsUserCodePathEN, b: clsUserCodePathEN): number {
  if (a.cMProjectAppRelaId == b.cMProjectAppRelaId) return a.codeTypeId.localeCompare(b.codeTypeId);
  else return a.cMProjectAppRelaId - b.cMProjectAppRelaId;
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
export function UserCodePath_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserCodePathEN.con_mId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          return a.mId - b.mId;
        };
      case clsUserCodePathEN.con_CMProjectAppRelaId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          return a.cMProjectAppRelaId - b.cMProjectAppRelaId;
        };
      case clsUserCodePathEN.con_CodeTypeId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsUserCodePathEN.con_TabMainTypeId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (a.tabMainTypeId == null) return -1;
          if (b.tabMainTypeId == null) return 1;
          return a.tabMainTypeId.localeCompare(b.tabMainTypeId);
        };
      case clsUserCodePathEN.con_IsGeneCode:
        return (a: clsUserCodePathEN) => {
          if (a.isGeneCode == true) return 1;
          else return -1;
        };
      case clsUserCodePathEN.con_ProjectFileName:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (a.projectFileName == null) return -1;
          if (b.projectFileName == null) return 1;
          return a.projectFileName.localeCompare(b.projectFileName);
        };
      case clsUserCodePathEN.con_ProjectPath:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (a.projectPath == null) return -1;
          if (b.projectPath == null) return 1;
          return a.projectPath.localeCompare(b.projectPath);
        };
      case clsUserCodePathEN.con_PrjFileStateId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (a.prjFileStateId == null) return -1;
          if (b.prjFileStateId == null) return 1;
          return a.prjFileStateId.localeCompare(b.prjFileStateId);
        };
      case clsUserCodePathEN.con_CodePath:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          return a.codePath.localeCompare(b.codePath);
        };
      case clsUserCodePathEN.con_GcPathId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (a.gcPathId == null) return -1;
          if (b.gcPathId == null) return 1;
          return a.gcPathId.localeCompare(b.gcPathId);
        };
      case clsUserCodePathEN.con_CodePathBackup:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          return a.codePathBackup.localeCompare(b.codePathBackup);
        };
      case clsUserCodePathEN.con_SuffixPath:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (a.suffixPath == null) return -1;
          if (b.suffixPath == null) return 1;
          return a.suffixPath.localeCompare(b.suffixPath);
        };
      case clsUserCodePathEN.con_IsTemplate:
        return (a: clsUserCodePathEN) => {
          if (a.isTemplate == true) return 1;
          else return -1;
        };
      case clsUserCodePathEN.con_IsExistCodePath:
        return (a: clsUserCodePathEN) => {
          if (a.isExistCodePath == true) return 1;
          else return -1;
        };
      case clsUserCodePathEN.con_IsExistCodePathBackup:
        return (a: clsUserCodePathEN) => {
          if (a.isExistCodePathBackup == true) return 1;
          else return -1;
        };
      case clsUserCodePathEN.con_PrjId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsUserCodePathEN.con_UpdDate:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsUserCodePathEN.con_UpdUserId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsUserCodePathEN.con_Memo:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserCodePath]中不存在!(in ${userCodePath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsUserCodePathEN.con_mId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          return b.mId - a.mId;
        };
      case clsUserCodePathEN.con_CMProjectAppRelaId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          return b.cMProjectAppRelaId - a.cMProjectAppRelaId;
        };
      case clsUserCodePathEN.con_CodeTypeId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsUserCodePathEN.con_TabMainTypeId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (b.tabMainTypeId == null) return -1;
          if (a.tabMainTypeId == null) return 1;
          return b.tabMainTypeId.localeCompare(a.tabMainTypeId);
        };
      case clsUserCodePathEN.con_IsGeneCode:
        return (b: clsUserCodePathEN) => {
          if (b.isGeneCode == true) return 1;
          else return -1;
        };
      case clsUserCodePathEN.con_ProjectFileName:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (b.projectFileName == null) return -1;
          if (a.projectFileName == null) return 1;
          return b.projectFileName.localeCompare(a.projectFileName);
        };
      case clsUserCodePathEN.con_ProjectPath:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (b.projectPath == null) return -1;
          if (a.projectPath == null) return 1;
          return b.projectPath.localeCompare(a.projectPath);
        };
      case clsUserCodePathEN.con_PrjFileStateId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (b.prjFileStateId == null) return -1;
          if (a.prjFileStateId == null) return 1;
          return b.prjFileStateId.localeCompare(a.prjFileStateId);
        };
      case clsUserCodePathEN.con_CodePath:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          return b.codePath.localeCompare(a.codePath);
        };
      case clsUserCodePathEN.con_GcPathId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (b.gcPathId == null) return -1;
          if (a.gcPathId == null) return 1;
          return b.gcPathId.localeCompare(a.gcPathId);
        };
      case clsUserCodePathEN.con_CodePathBackup:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          return b.codePathBackup.localeCompare(a.codePathBackup);
        };
      case clsUserCodePathEN.con_SuffixPath:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (b.suffixPath == null) return -1;
          if (a.suffixPath == null) return 1;
          return b.suffixPath.localeCompare(a.suffixPath);
        };
      case clsUserCodePathEN.con_IsTemplate:
        return (b: clsUserCodePathEN) => {
          if (b.isTemplate == true) return 1;
          else return -1;
        };
      case clsUserCodePathEN.con_IsExistCodePath:
        return (b: clsUserCodePathEN) => {
          if (b.isExistCodePath == true) return 1;
          else return -1;
        };
      case clsUserCodePathEN.con_IsExistCodePathBackup:
        return (b: clsUserCodePathEN) => {
          if (b.isExistCodePathBackup == true) return 1;
          else return -1;
        };
      case clsUserCodePathEN.con_PrjId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsUserCodePathEN.con_UpdDate:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsUserCodePathEN.con_UpdUserId:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsUserCodePathEN.con_Memo:
        return (a: clsUserCodePathEN, b: clsUserCodePathEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserCodePath]中不存在!(in ${userCodePath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function UserCodePath_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsUserCodePathEN.con_mId:
      return (obj: clsUserCodePathEN) => {
        return obj.mId === value;
      };
    case clsUserCodePathEN.con_CMProjectAppRelaId:
      return (obj: clsUserCodePathEN) => {
        return obj.cMProjectAppRelaId === value;
      };
    case clsUserCodePathEN.con_CodeTypeId:
      return (obj: clsUserCodePathEN) => {
        return obj.codeTypeId === value;
      };
    case clsUserCodePathEN.con_TabMainTypeId:
      return (obj: clsUserCodePathEN) => {
        return obj.tabMainTypeId === value;
      };
    case clsUserCodePathEN.con_IsGeneCode:
      return (obj: clsUserCodePathEN) => {
        return obj.isGeneCode === value;
      };
    case clsUserCodePathEN.con_ProjectFileName:
      return (obj: clsUserCodePathEN) => {
        return obj.projectFileName === value;
      };
    case clsUserCodePathEN.con_ProjectPath:
      return (obj: clsUserCodePathEN) => {
        return obj.projectPath === value;
      };
    case clsUserCodePathEN.con_PrjFileStateId:
      return (obj: clsUserCodePathEN) => {
        return obj.prjFileStateId === value;
      };
    case clsUserCodePathEN.con_CodePath:
      return (obj: clsUserCodePathEN) => {
        return obj.codePath === value;
      };
    case clsUserCodePathEN.con_GcPathId:
      return (obj: clsUserCodePathEN) => {
        return obj.gcPathId === value;
      };
    case clsUserCodePathEN.con_CodePathBackup:
      return (obj: clsUserCodePathEN) => {
        return obj.codePathBackup === value;
      };
    case clsUserCodePathEN.con_SuffixPath:
      return (obj: clsUserCodePathEN) => {
        return obj.suffixPath === value;
      };
    case clsUserCodePathEN.con_IsTemplate:
      return (obj: clsUserCodePathEN) => {
        return obj.isTemplate === value;
      };
    case clsUserCodePathEN.con_IsExistCodePath:
      return (obj: clsUserCodePathEN) => {
        return obj.isExistCodePath === value;
      };
    case clsUserCodePathEN.con_IsExistCodePathBackup:
      return (obj: clsUserCodePathEN) => {
        return obj.isExistCodePathBackup === value;
      };
    case clsUserCodePathEN.con_PrjId:
      return (obj: clsUserCodePathEN) => {
        return obj.prjId === value;
      };
    case clsUserCodePathEN.con_UpdDate:
      return (obj: clsUserCodePathEN) => {
        return obj.updDate === value;
      };
    case clsUserCodePathEN.con_UpdUserId:
      return (obj: clsUserCodePathEN) => {
        return obj.updUserId === value;
      };
    case clsUserCodePathEN.con_Memo:
      return (obj: clsUserCodePathEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[UserCodePath]中不存在!(in ${userCodePath_ConstructorName}.${strThisFuncName})`;
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
export async function UserCodePath_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsUserCodePathWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsUserCodePathWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsUserCodePathEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsUserCodePathEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsUserCodePathEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objUserCodePath = await UserCodePath_GetObjBymIdCache(lngmId, strPrjIdClassfy);
  if (objUserCodePath == null) return '';
  if (objUserCodePath.GetFldValue(strOutFldName) == null) return '';
  return objUserCodePath.GetFldValue(strOutFldName).toString();
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
export async function UserCodePath_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsUserCodePathWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsUserCodePathWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsUserCodePathEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrUserCodePath = await UserCodePath_GetObjLstCache(strPrjIdClassfy);
  if (arrUserCodePath == null) return [];
  let arrUserCodePathSel = arrUserCodePath;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrUserCodePathSel = arrUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrUserCodePathSel = arrUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrUserCodePathSel = arrUserCodePathSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrUserCodePathSel = arrUserCodePathSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUserCodePathSel = arrUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrUserCodePathSel = arrUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrUserCodePathSel = arrUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrUserCodePathSel = arrUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrUserCodePathSel = arrUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrUserCodePathSel = arrUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrUserCodePathSel.length == 0) return [];
  return arrUserCodePathSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserCodePath_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsUserCodePathEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
      const objUserCodePath = UserCodePath_GetObjFromJsonObj(returnObj);
      return objUserCodePath;
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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsUserCodePathEN.WhereFormat) == false) {
    strWhereCond = Format(clsUserCodePathEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsUserCodePathEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsUserCodePathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserCodePathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrUserCodePathExObjLstCache: Array<clsUserCodePathEN> = CacheHelper.Get(strKey);
    const arrUserCodePathObjLstT = UserCodePath_GetObjLstByJSONObjLst(arrUserCodePathExObjLstCache);
    return arrUserCodePathObjLstT;
  }
  try {
    const arrUserCodePathExObjLst = await UserCodePath_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrUserCodePathExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUserCodePathExObjLst.length,
    );
    console.log(strInfo);
    return arrUserCodePathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userCodePath_ConstructorName,
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
export async function UserCodePath_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsUserCodePathEN.WhereFormat) == false) {
    strWhereCond = Format(clsUserCodePathEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsUserCodePathEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsUserCodePathEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsUserCodePathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserCodePathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrUserCodePathExObjLstCache: Array<clsUserCodePathEN> = JSON.parse(strTempObjLst);
    const arrUserCodePathObjLstT = UserCodePath_GetObjLstByJSONObjLst(arrUserCodePathExObjLstCache);
    return arrUserCodePathObjLstT;
  }
  try {
    const arrUserCodePathExObjLst = await UserCodePath_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrUserCodePathExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUserCodePathExObjLst.length,
    );
    console.log(strInfo);
    return arrUserCodePathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userCodePath_ConstructorName,
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
export async function UserCodePath_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsUserCodePathEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrUserCodePathObjLstCache: Array<clsUserCodePathEN> = JSON.parse(strTempObjLst);
    return arrUserCodePathObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function UserCodePath_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsUserCodePathEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
          userCodePath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePath_GetObjLstByJSONObjLst(returnObjLst);
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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsUserCodePathEN.WhereFormat) == false) {
    strWhereCond = Format(clsUserCodePathEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsUserCodePathEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsUserCodePathEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsUserCodePathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserCodePathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrUserCodePathExObjLstCache: Array<clsUserCodePathEN> = JSON.parse(strTempObjLst);
    const arrUserCodePathObjLstT = UserCodePath_GetObjLstByJSONObjLst(arrUserCodePathExObjLstCache);
    return arrUserCodePathObjLstT;
  }
  try {
    const arrUserCodePathExObjLst = await UserCodePath_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrUserCodePathExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUserCodePathExObjLst.length,
    );
    console.log(strInfo);
    return arrUserCodePathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userCodePath_ConstructorName,
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
export async function UserCodePath_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsUserCodePathEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrUserCodePathObjLstCache: Array<clsUserCodePathEN> = JSON.parse(strTempObjLst);
    return arrUserCodePathObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserCodePath_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsUserCodePathEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsUserCodePathWApi.UserCodePath_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsUserCodePathWApi.UserCodePath_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrUserCodePathObjLstCache;
  switch (clsUserCodePathEN.CacheModeId) {
    case '04': //sessionStorage
      arrUserCodePathObjLstCache = await UserCodePath_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrUserCodePathObjLstCache = await UserCodePath_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrUserCodePathObjLstCache = await UserCodePath_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrUserCodePathObjLstCache = await UserCodePath_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrUserCodePathObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserCodePath_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrUserCodePathObjLstCache;
  switch (clsUserCodePathEN.CacheModeId) {
    case '04': //sessionStorage
      arrUserCodePathObjLstCache = await UserCodePath_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrUserCodePathObjLstCache = await UserCodePath_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrUserCodePathObjLstCache = null;
      break;
    default:
      arrUserCodePathObjLstCache = null;
      break;
  }
  return arrUserCodePathObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function UserCodePath_GetSubObjLstCache(
  objUserCodePathCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrUserCodePathObjLstCache = await UserCodePath_GetObjLstCache(strPrjId);
  let arrUserCodePathSel = arrUserCodePathObjLstCache;
  if (objUserCodePathCond.GetConditions().length == 0) return arrUserCodePathSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objUserCodePathCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrUserCodePathSel = arrUserCodePathSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePathSel = arrUserCodePathSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrUserCodePathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objUserCodePathCond),
      userCodePath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserCodePathEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function UserCodePath_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsUserCodePathEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
          userCodePath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePath_GetObjLstByJSONObjLst(returnObjLst);
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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrUserCodePathObjLstCache = await UserCodePath_GetObjLstCache(strPrjId);
    const arrUserCodePathSel = arrUserCodePathObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrUserCodePathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      userCodePath_ConstructorName,
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
export async function UserCodePath_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsUserCodePathEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
          userCodePath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePath_GetObjLstByJSONObjLst(returnObjLst);
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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsUserCodePathEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
          userCodePath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePath_GetObjLstByJSONObjLst(returnObjLst);
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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsUserCodePathEN>();
  const arrUserCodePathObjLstCache = await UserCodePath_GetObjLstCache(strPrjId);
  if (arrUserCodePathObjLstCache.length == 0) return arrUserCodePathObjLstCache;
  let arrUserCodePathSel = arrUserCodePathObjLstCache;
  const objUserCodePathCond = objPagerPara.conditionCollection;
  if (objUserCodePathCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsUserCodePathEN>();
  }
  //console.log("clsUserCodePathWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objUserCodePathCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrUserCodePathSel = arrUserCodePathSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePathSel = arrUserCodePathSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrUserCodePathSel.length == 0) return arrUserCodePathSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUserCodePathSel = arrUserCodePathSel.sort(
        UserCodePath_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrUserCodePathSel = arrUserCodePathSel.sort(objPagerPara.sortFun);
    }
    arrUserCodePathSel = arrUserCodePathSel.slice(intStart, intEnd);
    return arrUserCodePathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      userCodePath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserCodePathEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function UserCodePath_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUserCodePathEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsUserCodePathEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
          userCodePath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePath_GetObjLstByJSONObjLst(returnObjLst);
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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(userCodePath_Controller, strAction);
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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_DelUserCodePathsAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelUserCodePathsAsync';
  const strAction = 'DelUserCodePaths';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
): Promise<Array<clsUserCodePathENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrUserCodePathObjLst = await UserCodePath_GetObjLstCache(strPrjId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsUserCodePathENEx>();
  const arrUserCodePathExObjLst = arrUserCodePathObjLst.map((obj) => {
    const cacheKey = `${obj.mId}_${obj.prjId}`;
    if (userCodePathCache[cacheKey]) {
      const oldObj = userCodePathCache[cacheKey];
      return oldObj;
    } else {
      const newObj = UserCodePath_CopyToEx(obj);
      arrNewObj.push(newObj);
      userCodePathCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await UserCodePath_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsUserCodePathEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrUserCodePathExObjLst) {
      await UserCodePath_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}_${newObj.prjId}`;
      userCodePathCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrUserCodePathExObjLst.length == 0) return arrUserCodePathExObjLst;
  let arrUserCodePathSel: Array<clsUserCodePathENEx> = arrUserCodePathExObjLst;
  const objUserCodePathCond = objPagerPara.conditionCollection;
  if (objUserCodePathCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrUserCodePathExObjLst;
  }
  try {
    for (const objCondition of objUserCodePathCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrUserCodePathSel = arrUserCodePathSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePathSel = arrUserCodePathSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrUserCodePathSel.length == 0) return arrUserCodePathSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrUserCodePathSel = arrUserCodePathSel.sort(
        UserCodePath_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrUserCodePathSel = arrUserCodePathSel.sort(objPagerPara.sortFun);
    }
    arrUserCodePathSel = arrUserCodePathSel.slice(intStart, intEnd);
    return arrUserCodePathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      userCodePath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserCodePathENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objUserCodePathENS:源对象
 * @returns 目标对象=>clsUserCodePathEN:objUserCodePathENT
 **/
export function UserCodePath_CopyToEx(objUserCodePathENS: clsUserCodePathEN): clsUserCodePathENEx {
  const strThisFuncName = UserCodePath_CopyToEx.name;
  const objUserCodePathENT = new clsUserCodePathENEx();
  try {
    ObjectAssign(objUserCodePathENT, objUserCodePathENS);
    return objUserCodePathENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      userCodePath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objUserCodePathENT;
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
export function UserCodePath_FuncMapByFldName(
  strFldName: string,
  objUserCodePathEx: clsUserCodePathENEx,
) {
  const strThisFuncName = UserCodePath_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsUserCodePathEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsUserCodePathENEx.con_TabMainTypeName:
      return UserCodePath_FuncMapTabMainTypeName(objUserCodePathEx);
    case clsUserCodePathENEx.con_CodeTypeSimName:
      return UserCodePath_FuncMapCodeTypeSimName(objUserCodePathEx);
    case clsUserCodePathENEx.con_GcPathName:
      return UserCodePath_FuncMapGcPathName(objUserCodePathEx);
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
export function UserCodePath_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserCodePathENEx.con_ProgLangTypeSimName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          if (a.progLangTypeSimName === null && b.progLangTypeSimName === null) return 0;
          if (a.progLangTypeSimName === null) return -1;
          if (b.progLangTypeSimName === null) return 1;
          return a.progLangTypeSimName.localeCompare(b.progLangTypeSimName);
        };
      case clsUserCodePathENEx.con_CmPrjName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          if (a.cmPrjName === null && b.cmPrjName === null) return 0;
          if (a.cmPrjName === null) return -1;
          if (b.cmPrjName === null) return 1;
          return a.cmPrjName.localeCompare(b.cmPrjName);
        };
      case clsUserCodePathENEx.con_TabMainTypeName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          if (a.tabMainTypeName === null && b.tabMainTypeName === null) return 0;
          if (a.tabMainTypeName === null) return -1;
          if (b.tabMainTypeName === null) return 1;
          return a.tabMainTypeName.localeCompare(b.tabMainTypeName);
        };
      case clsUserCodePathENEx.con_CodeTypeSimName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          return a.codeTypeSimName.localeCompare(b.codeTypeSimName);
        };
      case clsUserCodePathENEx.con_GcPathName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          if (a.gcPathName === null && b.gcPathName === null) return 0;
          if (a.gcPathName === null) return -1;
          if (b.gcPathName === null) return 1;
          return a.gcPathName.localeCompare(b.gcPathName);
        };
      case clsUserCodePathENEx.con_UserId:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          if (a.userId === null && b.userId === null) return 0;
          if (a.userId === null) return -1;
          if (b.userId === null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      default:
        return UserCodePath_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsUserCodePathENEx.con_ProgLangTypeSimName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          if (a.progLangTypeSimName === null && b.progLangTypeSimName === null) return 0;
          if (a.progLangTypeSimName === null) return 1;
          if (b.progLangTypeSimName === null) return -1;
          return b.progLangTypeSimName.localeCompare(a.progLangTypeSimName);
        };
      case clsUserCodePathENEx.con_CmPrjName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          if (a.cmPrjName === null && b.cmPrjName === null) return 0;
          if (a.cmPrjName === null) return 1;
          if (b.cmPrjName === null) return -1;
          return b.cmPrjName.localeCompare(a.cmPrjName);
        };
      case clsUserCodePathENEx.con_TabMainTypeName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          if (a.tabMainTypeName === null && b.tabMainTypeName === null) return 0;
          if (a.tabMainTypeName === null) return 1;
          if (b.tabMainTypeName === null) return -1;
          return b.tabMainTypeName.localeCompare(a.tabMainTypeName);
        };
      case clsUserCodePathENEx.con_CodeTypeSimName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          return b.codeTypeSimName.localeCompare(a.codeTypeSimName);
        };
      case clsUserCodePathENEx.con_GcPathName:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          if (a.gcPathName === null && b.gcPathName === null) return 0;
          if (a.gcPathName === null) return 1;
          if (b.gcPathName === null) return -1;
          return b.gcPathName.localeCompare(a.gcPathName);
        };
      case clsUserCodePathENEx.con_UserId:
        return (a: clsUserCodePathENEx, b: clsUserCodePathENEx) => {
          if (a.userId === null && b.userId === null) return 0;
          if (a.userId === null) return 1;
          if (b.userId === null) return -1;
          return b.userId.localeCompare(a.userId);
        };
      default:
        return UserCodePath_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objUserCodePathS:源对象
 **/
export async function UserCodePath_FuncMapTabMainTypeName(objUserCodePath: clsUserCodePathENEx) {
  const strThisFuncName = UserCodePath_FuncMapTabMainTypeName.name;
  try {
    if (IsNullOrEmpty(objUserCodePath.tabMainTypeName) == true) {
      const TabMainTypeTabMainTypeId = objUserCodePath.tabMainTypeId;
      const TabMainTypeTabMainTypeName = await TabMainType_func(
        clsTabMainTypeEN.con_TabMainTypeId,
        clsTabMainTypeEN.con_TabMainTypeName,
        TabMainTypeTabMainTypeId,
      );
      objUserCodePath.tabMainTypeName = TabMainTypeTabMainTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001374)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userCodePath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objUserCodePathS:源对象
 **/
export async function UserCodePath_FuncMapCodeTypeSimName(objUserCodePath: clsUserCodePathENEx) {
  const strThisFuncName = UserCodePath_FuncMapCodeTypeSimName.name;
  try {
    if (IsNullOrEmpty(objUserCodePath.codeTypeSimName) == true) {
      const vCodeTypeSimCodeTypeId = objUserCodePath.codeTypeId;
      const vCodeTypeSimCodeTypeSimName = await vCodeType_Sim_func(
        clsvCodeType_SimEN.con_CodeTypeId,
        clsvCodeType_SimEN.con_CodeTypeSimName,
        vCodeTypeSimCodeTypeId,
      );
      objUserCodePath.codeTypeSimName = vCodeTypeSimCodeTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001308)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userCodePath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objUserCodePathS:源对象
 **/
export async function UserCodePath_FuncMapGcPathName(objUserCodePath: clsUserCodePathENEx) {
  const strThisFuncName = UserCodePath_FuncMapGcPathName.name;
  try {
    if (IsNullOrEmpty(objUserCodePath.gcPathName) == true) {
      const GCPathGcPathId = objUserCodePath.gcPathId;
      if (IsNullOrEmpty(objUserCodePath.prjId) == true) {
        const strMsg = `函数映射[GcPathName]数据出错,prjId不能为空!(in ${userCodePath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (IsNullOrEmpty(objUserCodePath.userId) == true) {
        const strMsg = `函数映射表对象数据出错,userId不能为空!(in ${userCodePath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const GCPathGcPathName = await GCPath_func(
        clsGCPathEN.con_GcPathId,
        clsGCPathEN.con_GcPathName,
        GCPathGcPathId,
        objUserCodePath.prjId,
        objUserCodePath.userId,
      );
      objUserCodePath.gcPathName = GCPathGcPathName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001388)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      userCodePath_ConstructorName,
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
export async function UserCodePath_DelUserCodePathsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelUserCodePathsByCondAsync';
  const strAction = 'DelUserCodePathsByCond';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
 * @param objUserCodePathEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserCodePath_AddNewRecordAsync(
  objUserCodePathEN: clsUserCodePathEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objUserCodePathEN);
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePathEN, config);
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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_AddNewObjSave(
  objUserCodePathEN: clsUserCodePathEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    UserCodePath_CheckPropertyNew(objUserCodePathEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${userCodePath_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await UserCodePath_CheckUniCond4Add(objUserCodePathEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await UserCodePath_AddNewRecordAsync(objUserCodePathEN);
    if (returnBool == true) {
      UserCodePath_ReFreshCache(objUserCodePathEN.prjId);
    } else {
      const strInfo = `添加[用户生成路径(UserCodePath)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objUserCodePathEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${userCodePath_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function UserCodePath_CheckUniCond4Add(
  objUserCodePathEN: clsUserCodePathEN,
): Promise<boolean> {
  const strUniquenessCondition = UserCodePath_GetUniCondStr(objUserCodePathEN);
  const bolIsExistCondition = await UserCodePath_IsExistRecordAsync(strUniquenessCondition);
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
export async function UserCodePath_CheckUniCond4Update(
  objUserCodePathEN: clsUserCodePathEN,
): Promise<boolean> {
  const strUniquenessCondition = UserCodePath_GetUniCondStr4Update(objUserCodePathEN);
  const bolIsExistCondition = await UserCodePath_IsExistRecordAsync(strUniquenessCondition);
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
export async function UserCodePath_UpdateObjSave(
  objUserCodePathEN: clsUserCodePathEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objUserCodePathEN.sfUpdFldSetStr = objUserCodePathEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objUserCodePathEN.mId == 0 || objUserCodePathEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    UserCodePath_CheckProperty4Update(objUserCodePathEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${userCodePath_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await UserCodePath_CheckUniCond4Update(objUserCodePathEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await UserCodePath_UpdateRecordAsync(objUserCodePathEN);
    if (returnBool == true) {
      UserCodePath_ReFreshCache(objUserCodePathEN.prjId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${userCodePath_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objUserCodePathEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function UserCodePath_AddNewRecordWithReturnKeyAsync(
  objUserCodePathEN: clsUserCodePathEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePathEN, config);
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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
 * @param objUserCodePathEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function UserCodePath_UpdateRecordAsync(
  objUserCodePathEN: clsUserCodePathEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objUserCodePathEN.sfUpdFldSetStr === undefined ||
    objUserCodePathEN.sfUpdFldSetStr === null ||
    objUserCodePathEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objUserCodePathEN.mId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePathEN, config);
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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
 * @param objUserCodePathEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function UserCodePath_EditRecordExAsync(
  objUserCodePathEN: clsUserCodePathEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objUserCodePathEN.sfUpdFldSetStr === undefined ||
    objUserCodePathEN.sfUpdFldSetStr === null ||
    objUserCodePathEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objUserCodePathEN.mId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePathEN, config);
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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
 * @param objUserCodePathEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserCodePath_UpdateWithConditionAsync(
  objUserCodePathEN: clsUserCodePathEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objUserCodePathEN.sfUpdFldSetStr === undefined ||
    objUserCodePathEN.sfUpdFldSetStr === null ||
    objUserCodePathEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objUserCodePathEN.mId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);
  objUserCodePathEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePathEN, config);
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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_IsExistRecordCache(
  objUserCodePathCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrUserCodePathObjLstCache = await UserCodePath_GetObjLstCache(strPrjId);
  if (arrUserCodePathObjLstCache == null) return false;
  let arrUserCodePathSel = arrUserCodePathObjLstCache;
  if (objUserCodePathCond.GetConditions().length == 0)
    return arrUserCodePathSel.length > 0 ? true : false;
  try {
    for (const objCondition of objUserCodePathCond.GetConditions()) {
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
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePathSel = arrUserCodePathSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrUserCodePathSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objUserCodePathCond),
      userCodePath_ConstructorName,
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
export async function UserCodePath_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_IsExistCache(lngmId: number, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrUserCodePathObjLstCache = await UserCodePath_GetObjLstCache(strPrjId);
  if (arrUserCodePathObjLstCache == null) return false;
  try {
    const arrUserCodePathSel = arrUserCodePathObjLstCache.filter((x) => x.mId == lngmId);
    if (arrUserCodePathSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      userCodePath_ConstructorName,
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
export async function UserCodePath_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export async function UserCodePath_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
 * @param objUserCodePathCond:条件对象
 * @returns 对象列表记录数
 */
export async function UserCodePath_GetRecCountByCondCache(
  objUserCodePathCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrUserCodePathObjLstCache = await UserCodePath_GetObjLstCache(strPrjId);
  if (arrUserCodePathObjLstCache == null) return 0;
  let arrUserCodePathSel = arrUserCodePathObjLstCache;
  if (objUserCodePathCond.GetConditions().length == 0) return arrUserCodePathSel.length;
  try {
    for (const objCondition of objUserCodePathCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrUserCodePathSel = arrUserCodePathSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePathSel = arrUserCodePathSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUserCodePathSel = arrUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrUserCodePathSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objUserCodePathCond),
      userCodePath_ConstructorName,
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
export async function UserCodePath_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(userCodePath_Controller, strAction);

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
        userCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePath_ConstructorName,
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
export function UserCodePath_GetWebApiUrl(strController: string, strAction: string): string {
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
export function UserCodePath_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsUserCodePathWApi.clsUserCodePathWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsUserCodePathWApi.clsUserCodePathWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsUserCodePathEN._CurrTabName, strPrjId);
  switch (clsUserCodePathEN.CacheModeId) {
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
  clsUserCodePathEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function UserCodePath_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsUserCodePathWApi.UserCodePath_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsUserCodePathWApi.UserCodePath_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsUserCodePathEN._CurrTabName, strPrjId);
    switch (clsUserCodePathEN.CacheModeId) {
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
    clsUserCodePathEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function UserCodePath_GetLastRefreshTime(): string {
  if (clsUserCodePathEN._RefreshTimeLst.length == 0) return '';
  return clsUserCodePathEN._RefreshTimeLst[clsUserCodePathEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function UserCodePath_CheckPropertyNew(pobjUserCodePathEN: clsUserCodePathEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    null === pobjUserCodePathEN.cMProjectAppRelaId ||
    (pobjUserCodePathEN.cMProjectAppRelaId != null &&
      pobjUserCodePathEN.cMProjectAppRelaId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[Cm工程应用关系Id]不能为空(In 用户生成路径)!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.codeTypeId) === true ||
    pobjUserCodePathEN.codeTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[代码类型Id]不能为空(In 用户生成路径)!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjUserCodePathEN.codePath) === true) {
    throw new Error(
      `(errid:Watl000411)字段[代码路径]不能为空(In 用户生成路径)!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjUserCodePathEN.codePathBackup) === true) {
    throw new Error(
      `(errid:Watl000411)字段[备份代码路径]不能为空(In 用户生成路径)!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjUserCodePathEN.isTemplate ||
    (pobjUserCodePathEN.isTemplate != null && pobjUserCodePathEN.isTemplate.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否模板]不能为空(In 用户生成路径)!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.prjId) === true ||
    pobjUserCodePathEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 用户生成路径)!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjUserCodePathEN.codeTypeId) == false &&
    GetStrLen(pobjUserCodePathEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.codeTypeId}(clsUserCodePathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.tabMainTypeId) == false &&
    GetStrLen(pobjUserCodePathEN.tabMainTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表主类型Id(tabMainTypeId)]的长度不能超过4(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.tabMainTypeId}(clsUserCodePathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.projectFileName) == false &&
    GetStrLen(pobjUserCodePathEN.projectFileName) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程文件名(projectFileName)]的长度不能超过200(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.projectFileName}(clsUserCodePathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.projectPath) == false &&
    GetStrLen(pobjUserCodePathEN.projectPath) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程路径(projectPath)]的长度不能超过500(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.projectPath}(clsUserCodePathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.prjFileStateId) == false &&
    GetStrLen(pobjUserCodePathEN.prjFileStateId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程文件状态Id(prjFileStateId)]的长度不能超过2(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.prjFileStateId}(clsUserCodePathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.codePath) == false &&
    GetStrLen(pobjUserCodePathEN.codePath) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码路径(codePath)]的长度不能超过200(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.codePath}(clsUserCodePathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.gcPathId) == false &&
    GetStrLen(pobjUserCodePathEN.gcPathId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[GC路径Id(gcPathId)]的长度不能超过8(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.gcPathId}(clsUserCodePathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.codePathBackup) == false &&
    GetStrLen(pobjUserCodePathEN.codePathBackup) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[备份代码路径(codePathBackup)]的长度不能超过200(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.codePathBackup}(clsUserCodePathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.suffixPath) == false &&
    GetStrLen(pobjUserCodePathEN.suffixPath) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[后缀路径(suffixPath)]的长度不能超过50(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.suffixPath}(clsUserCodePathBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjUserCodePathEN.prjId) == false && GetStrLen(pobjUserCodePathEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.prjId}(clsUserCodePathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.updDate) == false &&
    GetStrLen(pobjUserCodePathEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.updDate}(clsUserCodePathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.updUserId) == false &&
    GetStrLen(pobjUserCodePathEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.updUserId}(clsUserCodePathBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.memo) == false &&
    GetStrLen(pobjUserCodePathEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.memo}(clsUserCodePathBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjUserCodePathEN.mId &&
    undefined !== pobjUserCodePathEN.mId &&
    tzDataType.isNumber(pobjUserCodePathEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjUserCodePathEN.mId}], 非法,应该为数值型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjUserCodePathEN.cMProjectAppRelaId &&
    undefined !== pobjUserCodePathEN.cMProjectAppRelaId &&
    tzDataType.isNumber(pobjUserCodePathEN.cMProjectAppRelaId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Cm工程应用关系Id(cMProjectAppRelaId)]的值:[${pobjUserCodePathEN.cMProjectAppRelaId}], 非法,应该为数值型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.codeTypeId) == false &&
    undefined !== pobjUserCodePathEN.codeTypeId &&
    tzDataType.isString(pobjUserCodePathEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码类型Id(codeTypeId)]的值:[${pobjUserCodePathEN.codeTypeId}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.tabMainTypeId) == false &&
    undefined !== pobjUserCodePathEN.tabMainTypeId &&
    tzDataType.isString(pobjUserCodePathEN.tabMainTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表主类型Id(tabMainTypeId)]的值:[${pobjUserCodePathEN.tabMainTypeId}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjUserCodePathEN.isGeneCode &&
    undefined !== pobjUserCodePathEN.isGeneCode &&
    tzDataType.isBoolean(pobjUserCodePathEN.isGeneCode) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否生成代码(isGeneCode)]的值:[${pobjUserCodePathEN.isGeneCode}], 非法,应该为布尔型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.projectFileName) == false &&
    undefined !== pobjUserCodePathEN.projectFileName &&
    tzDataType.isString(pobjUserCodePathEN.projectFileName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程文件名(projectFileName)]的值:[${pobjUserCodePathEN.projectFileName}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.projectPath) == false &&
    undefined !== pobjUserCodePathEN.projectPath &&
    tzDataType.isString(pobjUserCodePathEN.projectPath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程路径(projectPath)]的值:[${pobjUserCodePathEN.projectPath}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.prjFileStateId) == false &&
    undefined !== pobjUserCodePathEN.prjFileStateId &&
    tzDataType.isString(pobjUserCodePathEN.prjFileStateId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程文件状态Id(prjFileStateId)]的值:[${pobjUserCodePathEN.prjFileStateId}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.codePath) == false &&
    undefined !== pobjUserCodePathEN.codePath &&
    tzDataType.isString(pobjUserCodePathEN.codePath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码路径(codePath)]的值:[${pobjUserCodePathEN.codePath}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.gcPathId) == false &&
    undefined !== pobjUserCodePathEN.gcPathId &&
    tzDataType.isString(pobjUserCodePathEN.gcPathId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[GC路径Id(gcPathId)]的值:[${pobjUserCodePathEN.gcPathId}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.codePathBackup) == false &&
    undefined !== pobjUserCodePathEN.codePathBackup &&
    tzDataType.isString(pobjUserCodePathEN.codePathBackup) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[备份代码路径(codePathBackup)]的值:[${pobjUserCodePathEN.codePathBackup}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.suffixPath) == false &&
    undefined !== pobjUserCodePathEN.suffixPath &&
    tzDataType.isString(pobjUserCodePathEN.suffixPath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[后缀路径(suffixPath)]的值:[${pobjUserCodePathEN.suffixPath}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjUserCodePathEN.isTemplate &&
    undefined !== pobjUserCodePathEN.isTemplate &&
    tzDataType.isBoolean(pobjUserCodePathEN.isTemplate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否模板(isTemplate)]的值:[${pobjUserCodePathEN.isTemplate}], 非法,应该为布尔型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjUserCodePathEN.isExistCodePath &&
    undefined !== pobjUserCodePathEN.isExistCodePath &&
    tzDataType.isBoolean(pobjUserCodePathEN.isExistCodePath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否存在代码路径(isExistCodePath)]的值:[${pobjUserCodePathEN.isExistCodePath}], 非法,应该为布尔型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjUserCodePathEN.isExistCodePathBackup &&
    undefined !== pobjUserCodePathEN.isExistCodePathBackup &&
    tzDataType.isBoolean(pobjUserCodePathEN.isExistCodePathBackup) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否存在备份路径(isExistCodePathBackup)]的值:[${pobjUserCodePathEN.isExistCodePathBackup}], 非法,应该为布尔型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.prjId) == false &&
    undefined !== pobjUserCodePathEN.prjId &&
    tzDataType.isString(pobjUserCodePathEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjUserCodePathEN.prjId}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.updDate) == false &&
    undefined !== pobjUserCodePathEN.updDate &&
    tzDataType.isString(pobjUserCodePathEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjUserCodePathEN.updDate}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.updUserId) == false &&
    undefined !== pobjUserCodePathEN.updUserId &&
    tzDataType.isString(pobjUserCodePathEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjUserCodePathEN.updUserId}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.memo) == false &&
    undefined !== pobjUserCodePathEN.memo &&
    tzDataType.isString(pobjUserCodePathEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjUserCodePathEN.memo}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjUserCodePathEN.gcPathId) == false &&
    pobjUserCodePathEN.gcPathId != '[nuull]' &&
    GetStrLen(pobjUserCodePathEN.gcPathId) != 8
  ) {
    throw '(errid:Watl000415)字段[GC路径Id]作为外键字段,长度应该为8(In 用户生成路径)!(clsUserCodePathBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function UserCodePath_CheckProperty4Update(pobjUserCodePathEN: clsUserCodePathEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjUserCodePathEN.codeTypeId) == false &&
    GetStrLen(pobjUserCodePathEN.codeTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码类型Id(codeTypeId)]的长度不能超过4(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.codeTypeId}(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.tabMainTypeId) == false &&
    GetStrLen(pobjUserCodePathEN.tabMainTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表主类型Id(tabMainTypeId)]的长度不能超过4(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.tabMainTypeId}(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.projectFileName) == false &&
    GetStrLen(pobjUserCodePathEN.projectFileName) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程文件名(projectFileName)]的长度不能超过200(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.projectFileName}(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.projectPath) == false &&
    GetStrLen(pobjUserCodePathEN.projectPath) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程路径(projectPath)]的长度不能超过500(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.projectPath}(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.prjFileStateId) == false &&
    GetStrLen(pobjUserCodePathEN.prjFileStateId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程文件状态Id(prjFileStateId)]的长度不能超过2(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.prjFileStateId}(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.codePath) == false &&
    GetStrLen(pobjUserCodePathEN.codePath) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码路径(codePath)]的长度不能超过200(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.codePath}(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.gcPathId) == false &&
    GetStrLen(pobjUserCodePathEN.gcPathId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[GC路径Id(gcPathId)]的长度不能超过8(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.gcPathId}(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.codePathBackup) == false &&
    GetStrLen(pobjUserCodePathEN.codePathBackup) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[备份代码路径(codePathBackup)]的长度不能超过200(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.codePathBackup}(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.suffixPath) == false &&
    GetStrLen(pobjUserCodePathEN.suffixPath) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[后缀路径(suffixPath)]的长度不能超过50(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.suffixPath}(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjUserCodePathEN.prjId) == false && GetStrLen(pobjUserCodePathEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.prjId}(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.updDate) == false &&
    GetStrLen(pobjUserCodePathEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.updDate}(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.updUserId) == false &&
    GetStrLen(pobjUserCodePathEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.updUserId}(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.memo) == false &&
    GetStrLen(pobjUserCodePathEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 用户生成路径(UserCodePath))!值:${pobjUserCodePathEN.memo}(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjUserCodePathEN.mId &&
    undefined !== pobjUserCodePathEN.mId &&
    tzDataType.isNumber(pobjUserCodePathEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjUserCodePathEN.mId}], 非法,应该为数值型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjUserCodePathEN.cMProjectAppRelaId &&
    undefined !== pobjUserCodePathEN.cMProjectAppRelaId &&
    tzDataType.isNumber(pobjUserCodePathEN.cMProjectAppRelaId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Cm工程应用关系Id(cMProjectAppRelaId)]的值:[${pobjUserCodePathEN.cMProjectAppRelaId}], 非法,应该为数值型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.codeTypeId) == false &&
    undefined !== pobjUserCodePathEN.codeTypeId &&
    tzDataType.isString(pobjUserCodePathEN.codeTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码类型Id(codeTypeId)]的值:[${pobjUserCodePathEN.codeTypeId}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.tabMainTypeId) == false &&
    undefined !== pobjUserCodePathEN.tabMainTypeId &&
    tzDataType.isString(pobjUserCodePathEN.tabMainTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表主类型Id(tabMainTypeId)]的值:[${pobjUserCodePathEN.tabMainTypeId}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjUserCodePathEN.isGeneCode &&
    undefined !== pobjUserCodePathEN.isGeneCode &&
    tzDataType.isBoolean(pobjUserCodePathEN.isGeneCode) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否生成代码(isGeneCode)]的值:[${pobjUserCodePathEN.isGeneCode}], 非法,应该为布尔型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.projectFileName) == false &&
    undefined !== pobjUserCodePathEN.projectFileName &&
    tzDataType.isString(pobjUserCodePathEN.projectFileName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程文件名(projectFileName)]的值:[${pobjUserCodePathEN.projectFileName}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.projectPath) == false &&
    undefined !== pobjUserCodePathEN.projectPath &&
    tzDataType.isString(pobjUserCodePathEN.projectPath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程路径(projectPath)]的值:[${pobjUserCodePathEN.projectPath}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.prjFileStateId) == false &&
    undefined !== pobjUserCodePathEN.prjFileStateId &&
    tzDataType.isString(pobjUserCodePathEN.prjFileStateId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程文件状态Id(prjFileStateId)]的值:[${pobjUserCodePathEN.prjFileStateId}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.codePath) == false &&
    undefined !== pobjUserCodePathEN.codePath &&
    tzDataType.isString(pobjUserCodePathEN.codePath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码路径(codePath)]的值:[${pobjUserCodePathEN.codePath}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.gcPathId) == false &&
    undefined !== pobjUserCodePathEN.gcPathId &&
    tzDataType.isString(pobjUserCodePathEN.gcPathId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[GC路径Id(gcPathId)]的值:[${pobjUserCodePathEN.gcPathId}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.codePathBackup) == false &&
    undefined !== pobjUserCodePathEN.codePathBackup &&
    tzDataType.isString(pobjUserCodePathEN.codePathBackup) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[备份代码路径(codePathBackup)]的值:[${pobjUserCodePathEN.codePathBackup}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.suffixPath) == false &&
    undefined !== pobjUserCodePathEN.suffixPath &&
    tzDataType.isString(pobjUserCodePathEN.suffixPath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[后缀路径(suffixPath)]的值:[${pobjUserCodePathEN.suffixPath}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjUserCodePathEN.isTemplate &&
    undefined !== pobjUserCodePathEN.isTemplate &&
    tzDataType.isBoolean(pobjUserCodePathEN.isTemplate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否模板(isTemplate)]的值:[${pobjUserCodePathEN.isTemplate}], 非法,应该为布尔型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjUserCodePathEN.isExistCodePath &&
    undefined !== pobjUserCodePathEN.isExistCodePath &&
    tzDataType.isBoolean(pobjUserCodePathEN.isExistCodePath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否存在代码路径(isExistCodePath)]的值:[${pobjUserCodePathEN.isExistCodePath}], 非法,应该为布尔型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjUserCodePathEN.isExistCodePathBackup &&
    undefined !== pobjUserCodePathEN.isExistCodePathBackup &&
    tzDataType.isBoolean(pobjUserCodePathEN.isExistCodePathBackup) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否存在备份路径(isExistCodePathBackup)]的值:[${pobjUserCodePathEN.isExistCodePathBackup}], 非法,应该为布尔型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.prjId) == false &&
    undefined !== pobjUserCodePathEN.prjId &&
    tzDataType.isString(pobjUserCodePathEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjUserCodePathEN.prjId}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.updDate) == false &&
    undefined !== pobjUserCodePathEN.updDate &&
    tzDataType.isString(pobjUserCodePathEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjUserCodePathEN.updDate}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.updUserId) == false &&
    undefined !== pobjUserCodePathEN.updUserId &&
    tzDataType.isString(pobjUserCodePathEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjUserCodePathEN.updUserId}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePathEN.memo) == false &&
    undefined !== pobjUserCodePathEN.memo &&
    tzDataType.isString(pobjUserCodePathEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjUserCodePathEN.memo}], 非法,应该为字符型(In 用户生成路径(UserCodePath))!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjUserCodePathEN.mId ||
    (pobjUserCodePathEN.mId != null && pobjUserCodePathEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 用户生成路径)!(clsUserCodePathBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjUserCodePathEN.gcPathId) == false &&
    pobjUserCodePathEN.gcPathId != '[nuull]' &&
    GetStrLen(pobjUserCodePathEN.gcPathId) != 8
  ) {
    throw '(errid:Watl000418)字段[GC路径Id]作为外键字段,长度应该为8(In 用户生成路径)!(clsUserCodePathBL:CheckPropertyNew)';
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
export function UserCodePath_GetJSONStrByObj(pobjUserCodePathEN: clsUserCodePathEN): string {
  pobjUserCodePathEN.sfUpdFldSetStr = pobjUserCodePathEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjUserCodePathEN);
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
export function UserCodePath_GetObjLstByJSONStr(strJSON: string): Array<clsUserCodePathEN> {
  let arrUserCodePathObjLst = new Array<clsUserCodePathEN>();
  if (strJSON === '') {
    return arrUserCodePathObjLst;
  }
  try {
    arrUserCodePathObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrUserCodePathObjLst;
  }
  return arrUserCodePathObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrUserCodePathObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function UserCodePath_GetObjLstByJSONObjLst(
  arrUserCodePathObjLstS: Array<clsUserCodePathEN>,
): Array<clsUserCodePathEN> {
  const arrUserCodePathObjLst = new Array<clsUserCodePathEN>();
  for (const objInFor of arrUserCodePathObjLstS) {
    const obj1 = UserCodePath_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrUserCodePathObjLst.push(obj1);
  }
  return arrUserCodePathObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function UserCodePath_GetObjByJSONStr(strJSON: string): clsUserCodePathEN {
  let pobjUserCodePathEN = new clsUserCodePathEN();
  if (strJSON === '') {
    return pobjUserCodePathEN;
  }
  try {
    pobjUserCodePathEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjUserCodePathEN;
  }
  return pobjUserCodePathEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function UserCodePath_GetCombineCondition(objUserCodePathCond: clsUserCodePathEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objUserCodePathCond.dicFldComparisonOp[clsUserCodePathEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsUserCodePathEN.con_mId,
      objUserCodePathCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_CMProjectAppRelaId,
    ) == true
  ) {
    const strComparisonOpCMProjectAppRelaId: string =
      objUserCodePathCond.dicFldComparisonOp[clsUserCodePathEN.con_CMProjectAppRelaId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsUserCodePathEN.con_CMProjectAppRelaId,
      objUserCodePathCond.cMProjectAppRelaId,
      strComparisonOpCMProjectAppRelaId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objUserCodePathCond.dicFldComparisonOp[clsUserCodePathEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePathEN.con_CodeTypeId,
      objUserCodePathCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_TabMainTypeId,
    ) == true
  ) {
    const strComparisonOpTabMainTypeId: string =
      objUserCodePathCond.dicFldComparisonOp[clsUserCodePathEN.con_TabMainTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePathEN.con_TabMainTypeId,
      objUserCodePathCond.tabMainTypeId,
      strComparisonOpTabMainTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_IsGeneCode,
    ) == true
  ) {
    if (objUserCodePathCond.isGeneCode == true) {
      strWhereCond += Format(" And {0} = '1'", clsUserCodePathEN.con_IsGeneCode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsUserCodePathEN.con_IsGeneCode);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_ProjectFileName,
    ) == true
  ) {
    const strComparisonOpProjectFileName: string =
      objUserCodePathCond.dicFldComparisonOp[clsUserCodePathEN.con_ProjectFileName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePathEN.con_ProjectFileName,
      objUserCodePathCond.projectFileName,
      strComparisonOpProjectFileName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_ProjectPath,
    ) == true
  ) {
    const strComparisonOpProjectPath: string =
      objUserCodePathCond.dicFldComparisonOp[clsUserCodePathEN.con_ProjectPath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePathEN.con_ProjectPath,
      objUserCodePathCond.projectPath,
      strComparisonOpProjectPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_PrjFileStateId,
    ) == true
  ) {
    const strComparisonOpPrjFileStateId: string =
      objUserCodePathCond.dicFldComparisonOp[clsUserCodePathEN.con_PrjFileStateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePathEN.con_PrjFileStateId,
      objUserCodePathCond.prjFileStateId,
      strComparisonOpPrjFileStateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_CodePath,
    ) == true
  ) {
    const strComparisonOpCodePath: string =
      objUserCodePathCond.dicFldComparisonOp[clsUserCodePathEN.con_CodePath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePathEN.con_CodePath,
      objUserCodePathCond.codePath,
      strComparisonOpCodePath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_GcPathId,
    ) == true
  ) {
    const strComparisonOpGcPathId: string =
      objUserCodePathCond.dicFldComparisonOp[clsUserCodePathEN.con_GcPathId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePathEN.con_GcPathId,
      objUserCodePathCond.gcPathId,
      strComparisonOpGcPathId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_CodePathBackup,
    ) == true
  ) {
    const strComparisonOpCodePathBackup: string =
      objUserCodePathCond.dicFldComparisonOp[clsUserCodePathEN.con_CodePathBackup];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePathEN.con_CodePathBackup,
      objUserCodePathCond.codePathBackup,
      strComparisonOpCodePathBackup,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_SuffixPath,
    ) == true
  ) {
    const strComparisonOpSuffixPath: string =
      objUserCodePathCond.dicFldComparisonOp[clsUserCodePathEN.con_SuffixPath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePathEN.con_SuffixPath,
      objUserCodePathCond.suffixPath,
      strComparisonOpSuffixPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_IsTemplate,
    ) == true
  ) {
    if (objUserCodePathCond.isTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsUserCodePathEN.con_IsTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsUserCodePathEN.con_IsTemplate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_IsExistCodePath,
    ) == true
  ) {
    if (objUserCodePathCond.isExistCodePath == true) {
      strWhereCond += Format(" And {0} = '1'", clsUserCodePathEN.con_IsExistCodePath);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsUserCodePathEN.con_IsExistCodePath);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_IsExistCodePathBackup,
    ) == true
  ) {
    if (objUserCodePathCond.isExistCodePathBackup == true) {
      strWhereCond += Format(" And {0} = '1'", clsUserCodePathEN.con_IsExistCodePathBackup);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsUserCodePathEN.con_IsExistCodePathBackup);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objUserCodePathCond.dicFldComparisonOp[clsUserCodePathEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePathEN.con_PrjId,
      objUserCodePathCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objUserCodePathCond.dicFldComparisonOp[clsUserCodePathEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePathEN.con_UpdDate,
      objUserCodePathCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objUserCodePathCond.dicFldComparisonOp[clsUserCodePathEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePathEN.con_UpdUserId,
      objUserCodePathCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePathCond.dicFldComparisonOp,
      clsUserCodePathEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objUserCodePathCond.dicFldComparisonOp[clsUserCodePathEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePathEN.con_Memo,
      objUserCodePathCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--UserCodePath(用户生成路径),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @param lngCMProjectAppRelaId: Cm工程应用关系Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function UserCodePath_GetUniCondStr(objUserCodePathEN: clsUserCodePathEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CodeTypeId = '{0}'", objUserCodePathEN.codeTypeId);
  strWhereCond += Format(" and CMProjectAppRelaId = '{0}'", objUserCodePathEN.cMProjectAppRelaId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--UserCodePath(用户生成路径),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @param lngCMProjectAppRelaId: Cm工程应用关系Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function UserCodePath_GetUniCondStr4Update(objUserCodePathEN: clsUserCodePathEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objUserCodePathEN.mId);
  strWhereCond += Format(" and CodeTypeId = '{0}'", objUserCodePathEN.codeTypeId);
  strWhereCond += Format(" and CMProjectAppRelaId = '{0}'", objUserCodePathEN.cMProjectAppRelaId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objUserCodePathENS:源对象
 * @param objUserCodePathENT:目标对象
 */
export function UserCodePath_GetObjFromJsonObj(
  objUserCodePathENS: clsUserCodePathEN,
): clsUserCodePathEN {
  const objUserCodePathENT: clsUserCodePathEN = new clsUserCodePathEN();
  ObjectAssign(objUserCodePathENT, objUserCodePathENS);
  return objUserCodePathENT;
}
