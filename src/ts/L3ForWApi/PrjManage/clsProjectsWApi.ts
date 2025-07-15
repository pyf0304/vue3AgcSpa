/**
 * 类名:clsProjectsWApi
 * 表名:Projects(00050002)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:18
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
 * 工程(Projects)
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
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { projectsCache, isFuncMapCache } from '@/views/PrjManage/ProjectsVueShare';
import { clsProjectsENEx } from '@/ts/L0Entity/PrjManage/clsProjectsENEx';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import { UseState_func } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
import { clsUseStateEN } from '@/ts/L0Entity/SysPara/clsUseStateEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const projects_Controller = 'ProjectsApi';
export const projects_ConstructorName = 'projects';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPrjId:关键字
 * @returns 对象
 **/
export async function Projects_GetObjByPrjIdAsync(strPrjId: string): Promise<clsProjectsEN | null> {
  const strThisFuncName = 'GetObjByPrjIdAsync';

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空!(In clsProjectsWApi.GetObjByPrjIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsProjectsWApi.GetObjByPrjIdAsync)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPrjId';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
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
      const objProjects = Projects_GetObjFromJsonObj(returnObj);
      return objProjects;
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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
 * @param strPrjId:所给的关键字
 * @returns 对象
 */
export async function Projects_GetObjByPrjIdlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjByPrjIdlocalStorage';

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空!(In clsProjectsWApi.GetObjByPrjIdlocalStorage)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsProjectsWApi.GetObjByPrjIdlocalStorage)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsProjectsEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objProjectsCache: clsProjectsEN = JSON.parse(strTempObj);
    return objProjectsCache;
  }
  try {
    const objProjects = await Projects_GetObjByPrjIdAsync(strPrjId);
    if (objProjects != null) {
      localStorage.setItem(strKey, JSON.stringify(objProjects));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objProjects;
    }
    return objProjects;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPrjId,
      projects_ConstructorName,
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
 * @param strPrjId:所给的关键字
 * @returns 对象
 */
export async function Projects_GetObjByPrjIdCache(strPrjId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByPrjIdCache';

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空!(In clsProjectsWApi.GetObjByPrjIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsProjectsWApi.GetObjByPrjIdCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrProjectsObjLstCache = await Projects_GetObjLstCache();
  try {
    const arrProjectsSel = arrProjectsObjLstCache.filter((x) => x.prjId == strPrjId);
    let objProjects: clsProjectsEN;
    if (arrProjectsSel.length > 0) {
      objProjects = arrProjectsSel[0];
      return objProjects;
    } else {
      if (bolTryAsyncOnce == true) {
        const objProjectsConst = await Projects_GetObjByPrjIdAsync(strPrjId);
        if (objProjectsConst != null) {
          Projects_ReFreshThisCache();
          return objProjectsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPrjId,
      projects_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objProjects:所给的对象
 * @returns 对象
 */
export async function Projects_UpdateObjInLstCache(objProjects: clsProjectsEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrProjectsObjLstCache = await Projects_GetObjLstCache();
    const obj = arrProjectsObjLstCache.find((x) => x.prjName == objProjects.prjName);
    if (obj != null) {
      objProjects.prjId = obj.prjId;
      ObjectAssign(obj, objProjects);
    } else {
      arrProjectsObjLstCache.push(objProjects);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      projects_ConstructorName,
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
export function Projects_SortFunDefa(a: clsProjectsEN, b: clsProjectsEN): number {
  return a.prjId.localeCompare(b.prjId);
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
export function Projects_SortFunDefa2Fld(a: clsProjectsEN, b: clsProjectsEN): number {
  if (a.prjName == b.prjName) return a.prjDomain.localeCompare(b.prjDomain);
  else return a.prjName.localeCompare(b.prjName);
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
export function Projects_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsProjectsEN.con_PrjId:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsProjectsEN.con_PrjName:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsProjectsEN.con_PrjDomain:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          if (a.prjDomain == null) return -1;
          if (b.prjDomain == null) return 1;
          return a.prjDomain.localeCompare(b.prjDomain);
        };
      case clsProjectsEN.con_TableSpace:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          if (a.tableSpace == null) return -1;
          if (b.tableSpace == null) return 1;
          return a.tableSpace.localeCompare(b.tableSpace);
        };
      case clsProjectsEN.con_GetWebApiFunc:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          if (a.getWebApiFunc == null) return -1;
          if (b.getWebApiFunc == null) return 1;
          return a.getWebApiFunc.localeCompare(b.getWebApiFunc);
        };
      case clsProjectsEN.con_IsRelaDataBase:
        return (a: clsProjectsEN) => {
          if (a.isRelaDataBase == true) return 1;
          else return -1;
        };
      case clsProjectsEN.con_UseStateId:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          return a.useStateId.localeCompare(b.useStateId);
        };
      case clsProjectsEN.con_UserId:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsProjectsEN.con_UpdDate:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsProjectsEN.con_Memo:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsProjectsEN.con_JavaPackageName:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          if (a.javaPackageName == null) return -1;
          if (b.javaPackageName == null) return 1;
          return a.javaPackageName.localeCompare(b.javaPackageName);
        };
      case clsProjectsEN.con_IsSupportMvc:
        return (a: clsProjectsEN) => {
          if (a.isSupportMvc == true) return 1;
          else return -1;
        };
      case clsProjectsEN.con_IsoPrjName:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          if (a.isoPrjName == null) return -1;
          if (b.isoPrjName == null) return 1;
          return a.isoPrjName.localeCompare(b.isoPrjName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Projects]中不存在!(in ${projects_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsProjectsEN.con_PrjId:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsProjectsEN.con_PrjName:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsProjectsEN.con_PrjDomain:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          if (b.prjDomain == null) return -1;
          if (a.prjDomain == null) return 1;
          return b.prjDomain.localeCompare(a.prjDomain);
        };
      case clsProjectsEN.con_TableSpace:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          if (b.tableSpace == null) return -1;
          if (a.tableSpace == null) return 1;
          return b.tableSpace.localeCompare(a.tableSpace);
        };
      case clsProjectsEN.con_GetWebApiFunc:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          if (b.getWebApiFunc == null) return -1;
          if (a.getWebApiFunc == null) return 1;
          return b.getWebApiFunc.localeCompare(a.getWebApiFunc);
        };
      case clsProjectsEN.con_IsRelaDataBase:
        return (b: clsProjectsEN) => {
          if (b.isRelaDataBase == true) return 1;
          else return -1;
        };
      case clsProjectsEN.con_UseStateId:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          return b.useStateId.localeCompare(a.useStateId);
        };
      case clsProjectsEN.con_UserId:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsProjectsEN.con_UpdDate:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsProjectsEN.con_Memo:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsProjectsEN.con_JavaPackageName:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          if (b.javaPackageName == null) return -1;
          if (a.javaPackageName == null) return 1;
          return b.javaPackageName.localeCompare(a.javaPackageName);
        };
      case clsProjectsEN.con_IsSupportMvc:
        return (b: clsProjectsEN) => {
          if (b.isSupportMvc == true) return 1;
          else return -1;
        };
      case clsProjectsEN.con_IsoPrjName:
        return (a: clsProjectsEN, b: clsProjectsEN) => {
          if (b.isoPrjName == null) return -1;
          if (a.isoPrjName == null) return 1;
          return b.isoPrjName.localeCompare(a.isoPrjName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Projects]中不存在!(in ${projects_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strPrjId:所给的关键字
 * @returns 对象
 */
export async function Projects_GetNameByPrjIdCache(strPrjId: string) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空!(In clsProjectsWApi.GetNameByPrjIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsProjectsWApi.GetNameByPrjIdCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrProjectsObjLstCache = await Projects_GetObjLstCache();
  if (arrProjectsObjLstCache == null) return '';
  try {
    const arrProjectsSel = arrProjectsObjLstCache.filter((x) => x.prjId == strPrjId);
    let objProjects: clsProjectsEN;
    if (arrProjectsSel.length > 0) {
      objProjects = arrProjectsSel[0];
      return objProjects.prjName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strPrjId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function Projects_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsProjectsEN.con_PrjId:
      return (obj: clsProjectsEN) => {
        return obj.prjId === value;
      };
    case clsProjectsEN.con_PrjName:
      return (obj: clsProjectsEN) => {
        return obj.prjName === value;
      };
    case clsProjectsEN.con_PrjDomain:
      return (obj: clsProjectsEN) => {
        return obj.prjDomain === value;
      };
    case clsProjectsEN.con_TableSpace:
      return (obj: clsProjectsEN) => {
        return obj.tableSpace === value;
      };
    case clsProjectsEN.con_GetWebApiFunc:
      return (obj: clsProjectsEN) => {
        return obj.getWebApiFunc === value;
      };
    case clsProjectsEN.con_IsRelaDataBase:
      return (obj: clsProjectsEN) => {
        return obj.isRelaDataBase === value;
      };
    case clsProjectsEN.con_UseStateId:
      return (obj: clsProjectsEN) => {
        return obj.useStateId === value;
      };
    case clsProjectsEN.con_UserId:
      return (obj: clsProjectsEN) => {
        return obj.userId === value;
      };
    case clsProjectsEN.con_UpdDate:
      return (obj: clsProjectsEN) => {
        return obj.updDate === value;
      };
    case clsProjectsEN.con_Memo:
      return (obj: clsProjectsEN) => {
        return obj.memo === value;
      };
    case clsProjectsEN.con_JavaPackageName:
      return (obj: clsProjectsEN) => {
        return obj.javaPackageName === value;
      };
    case clsProjectsEN.con_IsSupportMvc:
      return (obj: clsProjectsEN) => {
        return obj.isSupportMvc === value;
      };
    case clsProjectsEN.con_IsoPrjName:
      return (obj: clsProjectsEN) => {
        return obj.isoPrjName === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[Projects]中不存在!(in ${projects_ConstructorName}.${strThisFuncName})`;
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
export async function Projects_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsProjectsEN.con_PrjId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsProjectsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsProjectsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strPrjId = strInValue;
  if (IsNullOrEmpty(strPrjId) == true) {
    return '';
  }
  const objProjects = await Projects_GetObjByPrjIdCache(strPrjId);
  if (objProjects == null) return '';
  if (objProjects.GetFldValue(strOutFldName) == null) return '';
  return objProjects.GetFldValue(strOutFldName).toString();
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
export async function Projects_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsProjectsEN.con_PrjId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrProjects = await Projects_GetObjLstCache();
  if (arrProjects == null) return [];
  let arrProjectsSel = arrProjects;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrProjectsSel = arrProjectsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrProjectsSel = arrProjectsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrProjectsSel = arrProjectsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrProjectsSel.length == 0) return [];
  return arrProjectsSel.map((x) => x.prjId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function Projects_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
export async function Projects_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
export async function Projects_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
export async function Projects_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsProjectsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

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
      const objProjects = Projects_GetObjFromJsonObj(returnObj);
      return objProjects;
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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
export async function Projects_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsProjectsEN._CurrTabName;
  if (IsNullOrEmpty(clsProjectsEN.WhereFormat) == false) {
    strWhereCond = clsProjectsEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsProjectsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsProjectsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrProjectsExObjLstCache: Array<clsProjectsEN> = CacheHelper.Get(strKey);
    const arrProjectsObjLstT = Projects_GetObjLstByJSONObjLst(arrProjectsExObjLstCache);
    return arrProjectsObjLstT;
  }
  try {
    const arrProjectsExObjLst = await Projects_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrProjectsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrProjectsExObjLst.length,
    );
    console.log(strInfo);
    return arrProjectsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      projects_ConstructorName,
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
export async function Projects_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsProjectsEN._CurrTabName;
  if (IsNullOrEmpty(clsProjectsEN.WhereFormat) == false) {
    strWhereCond = clsProjectsEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsProjectsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsProjectsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrProjectsExObjLstCache: Array<clsProjectsEN> = JSON.parse(strTempObjLst);
    const arrProjectsObjLstT = Projects_GetObjLstByJSONObjLst(arrProjectsExObjLstCache);
    return arrProjectsObjLstT;
  }
  try {
    const arrProjectsExObjLst = await Projects_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrProjectsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrProjectsExObjLst.length,
    );
    console.log(strInfo);
    return arrProjectsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      projects_ConstructorName,
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
export async function Projects_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsProjectsEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrProjectsObjLstCache: Array<clsProjectsEN> = JSON.parse(strTempObjLst);
    return arrProjectsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function Projects_GetObjLstAsync(strWhereCond: string): Promise<Array<clsProjectsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

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
          projects_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Projects_GetObjLstByJSONObjLst(returnObjLst);
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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
export async function Projects_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsProjectsEN._CurrTabName;
  if (IsNullOrEmpty(clsProjectsEN.WhereFormat) == false) {
    strWhereCond = clsProjectsEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsProjectsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsProjectsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrProjectsExObjLstCache: Array<clsProjectsEN> = JSON.parse(strTempObjLst);
    const arrProjectsObjLstT = Projects_GetObjLstByJSONObjLst(arrProjectsExObjLstCache);
    return arrProjectsObjLstT;
  }
  try {
    const arrProjectsExObjLst = await Projects_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrProjectsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrProjectsExObjLst.length,
    );
    console.log(strInfo);
    return arrProjectsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      projects_ConstructorName,
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
export async function Projects_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsProjectsEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrProjectsObjLstCache: Array<clsProjectsEN> = JSON.parse(strTempObjLst);
    return arrProjectsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function Projects_GetObjLstCache(): Promise<Array<clsProjectsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrProjectsObjLstCache;
  switch (clsProjectsEN.CacheModeId) {
    case '04': //sessionStorage
      arrProjectsObjLstCache = await Projects_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrProjectsObjLstCache = await Projects_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrProjectsObjLstCache = await Projects_GetObjLstClientCache();
      break;
    default:
      arrProjectsObjLstCache = await Projects_GetObjLstClientCache();
      break;
  }
  return arrProjectsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function Projects_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrProjectsObjLstCache;
  switch (clsProjectsEN.CacheModeId) {
    case '04': //sessionStorage
      arrProjectsObjLstCache = await Projects_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrProjectsObjLstCache = await Projects_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrProjectsObjLstCache = null;
      break;
    default:
      arrProjectsObjLstCache = null;
      break;
  }
  return arrProjectsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPrjIdCond:条件对象
 * @returns 对象列表子集
 */
export async function Projects_GetSubObjLstCache(objProjectsCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrProjectsObjLstCache = await Projects_GetObjLstCache();
  let arrProjectsSel = arrProjectsObjLstCache;
  if (objProjectsCond.GetConditions().length == 0) return arrProjectsSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objProjectsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrProjectsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objProjectsCond),
      projects_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsProjectsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPrjId:关键字列表
 * @returns 对象列表
 **/
export async function Projects_GetObjLstByPrjIdLstAsync(
  arrPrjId: Array<string>,
): Promise<Array<clsProjectsEN>> {
  const strThisFuncName = 'GetObjLstByPrjIdLstAsync';
  const strAction = 'GetObjLstByPrjIdLst';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrjId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          projects_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Projects_GetObjLstByJSONObjLst(returnObjLst);
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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
 * @param arrstrPrjIdLst:关键字列表
 * @returns 对象列表
 */
export async function Projects_GetObjLstByPrjIdLstCache(arrPrjIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByPrjIdLstCache';
  try {
    const arrProjectsObjLstCache = await Projects_GetObjLstCache();
    const arrProjectsSel = arrProjectsObjLstCache.filter((x) => arrPrjIdLst.indexOf(x.prjId) > -1);
    return arrProjectsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPrjIdLst.join(','),
      projects_ConstructorName,
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
export async function Projects_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsProjectsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

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
          projects_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Projects_GetObjLstByJSONObjLst(returnObjLst);
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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
export async function Projects_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsProjectsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

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
          projects_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Projects_GetObjLstByJSONObjLst(returnObjLst);
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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
export async function Projects_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsProjectsEN>();
  const arrProjectsObjLstCache = await Projects_GetObjLstCache();
  if (arrProjectsObjLstCache.length == 0) return arrProjectsObjLstCache;
  let arrProjectsSel = arrProjectsObjLstCache;
  const objProjectsCond = objPagerPara.conditionCollection;
  if (objProjectsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsProjectsEN>();
  }
  //console.log("clsProjectsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objProjectsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrProjectsSel = arrProjectsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrProjectsSel.length == 0) return arrProjectsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrProjectsSel = arrProjectsSel.sort(Projects_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrProjectsSel = arrProjectsSel.sort(objPagerPara.sortFun);
    }
    arrProjectsSel = arrProjectsSel.slice(intStart, intEnd);
    return arrProjectsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      projects_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsProjectsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function Projects_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsProjectsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsProjectsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

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
          projects_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Projects_GetObjLstByJSONObjLst(returnObjLst);
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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
 * @param strPrjId:关键字
 * @returns 获取删除的结果
 **/
export async function Projects_DelRecordAsync(strPrjId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(projects_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strPrjId);

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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
 * @param arrPrjId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function Projects_DelProjectssAsync(arrPrjId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelProjectssAsync';
  const strAction = 'DelProjectss';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrjId, config);
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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
export async function Projects_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsProjectsENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrProjectsObjLst = await Projects_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsProjectsENEx>();
  const arrProjectsExObjLst = arrProjectsObjLst.map((obj) => {
    const cacheKey = `${obj.prjId}`;
    if (projectsCache[cacheKey]) {
      const oldObj = projectsCache[cacheKey];
      return oldObj;
    } else {
      const newObj = Projects_CopyToEx(obj);
      arrNewObj.push(newObj);
      projectsCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await Projects_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsProjectsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrProjectsExObjLst) {
      await Projects_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.prjId}`;
      projectsCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrProjectsExObjLst.length == 0) return arrProjectsExObjLst;
  let arrProjectsSel: Array<clsProjectsENEx> = arrProjectsExObjLst;
  const objProjectsCond = objPagerPara.conditionCollection;
  if (objProjectsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrProjectsExObjLst;
  }
  try {
    for (const objCondition of objProjectsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrProjectsSel = arrProjectsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrProjectsSel.length == 0) return arrProjectsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrProjectsSel = arrProjectsSel.sort(
        Projects_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrProjectsSel = arrProjectsSel.sort(objPagerPara.sortFun);
    }
    arrProjectsSel = arrProjectsSel.slice(intStart, intEnd);
    return arrProjectsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      projects_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsProjectsENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objProjectsENS:源对象
 * @returns 目标对象=>clsProjectsEN:objProjectsENT
 **/
export function Projects_CopyToEx(objProjectsENS: clsProjectsEN): clsProjectsENEx {
  const strThisFuncName = Projects_CopyToEx.name;
  const objProjectsENT = new clsProjectsENEx();
  try {
    ObjectAssign(objProjectsENT, objProjectsENS);
    return objProjectsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      projects_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objProjectsENT;
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
export function Projects_FuncMapByFldName(strFldName: string, objProjectsEx: clsProjectsENEx) {
  const strThisFuncName = Projects_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsProjectsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsProjectsENEx.con_DateTimeSim:
      return Projects_FuncMapDateTimeSim(objProjectsEx);
    case clsProjectsENEx.con_UseStateName:
      return Projects_FuncMapUseStateName(objProjectsEx);
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
export function Projects_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsProjectsENEx.con_DateTimeSim:
        return (a: clsProjectsENEx, b: clsProjectsENEx) => {
          if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
          if (a.dateTimeSim === null) return -1;
          if (b.dateTimeSim === null) return 1;
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      case clsProjectsENEx.con_UseStateName:
        return (a: clsProjectsENEx, b: clsProjectsENEx) => {
          return a.useStateName.localeCompare(b.useStateName);
        };
      default:
        return Projects_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsProjectsENEx.con_DateTimeSim:
        return (a: clsProjectsENEx, b: clsProjectsENEx) => {
          if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
          if (a.dateTimeSim === null) return 1;
          if (b.dateTimeSim === null) return -1;
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      case clsProjectsENEx.con_UseStateName:
        return (a: clsProjectsENEx, b: clsProjectsENEx) => {
          return b.useStateName.localeCompare(a.useStateName);
        };
      default:
        return Projects_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objProjectsS:源对象
 **/
export async function Projects_FuncMapDateTimeSim(objProjects: clsProjectsENEx) {
  const strThisFuncName = Projects_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objProjects.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objProjects.updDate);
      objProjects.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001326)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      projects_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objProjectsS:源对象
 **/
export async function Projects_FuncMapUseStateName(objProjects: clsProjectsENEx) {
  const strThisFuncName = Projects_FuncMapUseStateName.name;
  try {
    if (IsNullOrEmpty(objProjects.useStateName) == true) {
      const UseStateUseStateId = objProjects.useStateId;
      const UseStateUseStateName = await UseState_func(
        clsUseStateEN.con_UseStateId,
        clsUseStateEN.con_UseStateName,
        UseStateUseStateId,
      );
      objProjects.useStateName = UseStateUseStateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001317)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      projects_ConstructorName,
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
export async function Projects_DelProjectssByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelProjectssByCondAsync';
  const strAction = 'DelProjectssByCond';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
 * @param objProjectsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Projects_AddNewRecordAsync(objProjectsEN: clsProjectsEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objProjectsEN);
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProjectsEN, config);
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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
 * @param objProjectsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Projects_AddNewRecordWithMaxIdAsync(
  objProjectsEN: clsProjectsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProjectsEN, config);
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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
export async function Projects_AddNewObjSave(
  objProjectsEN: clsProjectsEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    Projects_CheckPropertyNew(objProjectsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${projects_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await Projects_CheckUniCond4Add(objProjectsEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await Projects_AddNewRecordWithMaxIdAsync(objProjectsEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      Projects_ReFreshCache();
    } else {
      const strInfo = `添加[工程(Projects)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${projects_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function Projects_CheckUniCond4Add(objProjectsEN: clsProjectsEN): Promise<boolean> {
  const strUniquenessCondition = Projects_GetUniCondStr(objProjectsEN);
  const bolIsExistCondition = await Projects_IsExistRecordAsync(strUniquenessCondition);
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
export async function Projects_CheckUniCond4Update(objProjectsEN: clsProjectsEN): Promise<boolean> {
  const strUniquenessCondition = Projects_GetUniCondStr4Update(objProjectsEN);
  const bolIsExistCondition = await Projects_IsExistRecordAsync(strUniquenessCondition);
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
export async function Projects_UpdateObjSave(objProjectsEN: clsProjectsEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objProjectsEN.sfUpdFldSetStr = objProjectsEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objProjectsEN.prjId == '' || objProjectsEN.prjId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    Projects_CheckProperty4Update(objProjectsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${projects_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await Projects_CheckUniCond4Update(objProjectsEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await Projects_UpdateRecordAsync(objProjectsEN);
    if (returnBool == true) {
      Projects_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${projects_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objProjectsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function Projects_AddNewRecordWithReturnKeyAsync(
  objProjectsEN: clsProjectsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProjectsEN, config);
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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
 * @param objProjectsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function Projects_UpdateRecordAsync(objProjectsEN: clsProjectsEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objProjectsEN.sfUpdFldSetStr === undefined ||
    objProjectsEN.sfUpdFldSetStr === null ||
    objProjectsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objProjectsEN.prjId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProjectsEN, config);
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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
 * @param objProjectsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function Projects_EditRecordExAsync(objProjectsEN: clsProjectsEN): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objProjectsEN.sfUpdFldSetStr === undefined ||
    objProjectsEN.sfUpdFldSetStr === null ||
    objProjectsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objProjectsEN.prjId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProjectsEN, config);
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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
 * @param objProjectsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function Projects_UpdateWithConditionAsync(
  objProjectsEN: clsProjectsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objProjectsEN.sfUpdFldSetStr === undefined ||
    objProjectsEN.sfUpdFldSetStr === null ||
    objProjectsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objProjectsEN.prjId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(projects_Controller, strAction);
  objProjectsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objProjectsEN, config);
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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
 * @param objstrPrjIdCond:条件对象
 * @returns 对象列表子集
 */
export async function Projects_IsExistRecordCache(objProjectsCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrProjectsObjLstCache = await Projects_GetObjLstCache();
  if (arrProjectsObjLstCache == null) return false;
  let arrProjectsSel = arrProjectsObjLstCache;
  if (objProjectsCond.GetConditions().length == 0) return arrProjectsSel.length > 0 ? true : false;
  try {
    for (const objCondition of objProjectsCond.GetConditions()) {
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
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrProjectsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objProjectsCond),
      projects_ConstructorName,
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
export async function Projects_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
 * @param strPrjId:所给的关键字
 * @returns 对象
 */
export async function Projects_IsExistCache(strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrProjectsObjLstCache = await Projects_GetObjLstCache();
  if (arrProjectsObjLstCache == null) return false;
  try {
    const arrProjectsSel = arrProjectsObjLstCache.filter((x) => x.prjId == strPrjId);
    if (arrProjectsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strPrjId,
      projects_ConstructorName,
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
 * @param strPrjId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function Projects_IsExistAsync(strPrjId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
export async function Projects_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
 * @param objProjectsCond:条件对象
 * @returns 对象列表记录数
 */
export async function Projects_GetRecCountByCondCache(objProjectsCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrProjectsObjLstCache = await Projects_GetObjLstCache();
  if (arrProjectsObjLstCache == null) return 0;
  let arrProjectsSel = arrProjectsObjLstCache;
  if (objProjectsCond.GetConditions().length == 0) return arrProjectsSel.length;
  try {
    for (const objCondition of objProjectsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrProjectsSel = arrProjectsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrProjectsSel = arrProjectsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrProjectsSel = arrProjectsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrProjectsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objProjectsCond),
      projects_ConstructorName,
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
export async function Projects_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
export async function Projects_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(projects_Controller, strAction);

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
        projects_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        projects_ConstructorName,
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
export function Projects_GetWebApiUrl(strController: string, strAction: string): string {
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
export function Projects_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsProjectsEN._CurrTabName;
  switch (clsProjectsEN.CacheModeId) {
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
  clsProjectsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function Projects_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsProjectsEN._CurrTabName;
    switch (clsProjectsEN.CacheModeId) {
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
    clsProjectsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function Projects_GetLastRefreshTime(): string {
  if (clsProjectsEN._RefreshTimeLst.length == 0) return '';
  return clsProjectsEN._RefreshTimeLst[clsProjectsEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function Projects_BindDdl_PrjIdInDivCache(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_PrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrjIdInDivCache");
  const arrObjLstSel = await Projects_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsProjectsEN.con_PrjId,
    clsProjectsEN.con_PrjName,
    '工程...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function Projects_GetArrProjects() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrjIdInDivCache");
  const arrProjects = new Array<clsProjectsEN>();
  const arrObjLstSel = await Projects_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsProjectsEN();
  obj0.prjId = '0';
  obj0.prjName = '选工程...';
  arrProjects.push(obj0);
  arrObjLstSel.forEach((x) => arrProjects.push(x));
  return arrProjects;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Projects_CheckPropertyNew(pobjProjectsEN: clsProjectsEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjProjectsEN.prjName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[工程名称]不能为空(In 工程)!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.useStateId) === true ||
    pobjProjectsEN.useStateId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[使用状态Id]不能为空(In 工程)!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjProjectsEN.userId) === true || pobjProjectsEN.userId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[用户Id]不能为空(In 工程)!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjProjectsEN.prjId) == false && GetStrLen(pobjProjectsEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 工程(Projects))!值:${pobjProjectsEN.prjId}(clsProjectsBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjProjectsEN.prjName) == false && GetStrLen(pobjProjectsEN.prjName) > 30) {
    throw new Error(
      `(errid:Watl000413)字段[工程名称(prjName)]的长度不能超过30(In 工程(Projects))!值:${pobjProjectsEN.prjName}(clsProjectsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.prjDomain) == false &&
    GetStrLen(pobjProjectsEN.prjDomain) > 128
  ) {
    throw new Error(
      `(errid:Watl000413)字段[域/包名(prjDomain)]的长度不能超过128(In 工程(Projects))!值:${pobjProjectsEN.prjDomain}(clsProjectsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.tableSpace) == false &&
    GetStrLen(pobjProjectsEN.tableSpace) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[表空间(tableSpace)]的长度不能超过50(In 工程(Projects))!值:${pobjProjectsEN.tableSpace}(clsProjectsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.getWebApiFunc) == false &&
    GetStrLen(pobjProjectsEN.getWebApiFunc) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[获取WebApiUrl函数(getWebApiFunc)]的长度不能超过100(In 工程(Projects))!值:${pobjProjectsEN.getWebApiFunc}(clsProjectsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.useStateId) == false &&
    GetStrLen(pobjProjectsEN.useStateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[使用状态Id(useStateId)]的长度不能超过4(In 工程(Projects))!值:${pobjProjectsEN.useStateId}(clsProjectsBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjProjectsEN.userId) == false && GetStrLen(pobjProjectsEN.userId) > 18) {
    throw new Error(
      `(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 工程(Projects))!值:${pobjProjectsEN.userId}(clsProjectsBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjProjectsEN.updDate) == false && GetStrLen(pobjProjectsEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 工程(Projects))!值:${pobjProjectsEN.updDate}(clsProjectsBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjProjectsEN.memo) == false && GetStrLen(pobjProjectsEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 工程(Projects))!值:${pobjProjectsEN.memo}(clsProjectsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.javaPackageName) == false &&
    GetStrLen(pobjProjectsEN.javaPackageName) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Java包名(javaPackageName)]的长度不能超过200(In 工程(Projects))!值:${pobjProjectsEN.javaPackageName}(clsProjectsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.isoPrjName) == false &&
    GetStrLen(pobjProjectsEN.isoPrjName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[ISO工程名(isoPrjName)]的长度不能超过50(In 工程(Projects))!值:${pobjProjectsEN.isoPrjName}(clsProjectsBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjProjectsEN.prjId) == false &&
    undefined !== pobjProjectsEN.prjId &&
    tzDataType.isString(pobjProjectsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjProjectsEN.prjId}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.prjName) == false &&
    undefined !== pobjProjectsEN.prjName &&
    tzDataType.isString(pobjProjectsEN.prjName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程名称(prjName)]的值:[${pobjProjectsEN.prjName}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.prjDomain) == false &&
    undefined !== pobjProjectsEN.prjDomain &&
    tzDataType.isString(pobjProjectsEN.prjDomain) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[域/包名(prjDomain)]的值:[${pobjProjectsEN.prjDomain}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.tableSpace) == false &&
    undefined !== pobjProjectsEN.tableSpace &&
    tzDataType.isString(pobjProjectsEN.tableSpace) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表空间(tableSpace)]的值:[${pobjProjectsEN.tableSpace}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.getWebApiFunc) == false &&
    undefined !== pobjProjectsEN.getWebApiFunc &&
    tzDataType.isString(pobjProjectsEN.getWebApiFunc) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[获取WebApiUrl函数(getWebApiFunc)]的值:[${pobjProjectsEN.getWebApiFunc}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjProjectsEN.isRelaDataBase &&
    undefined !== pobjProjectsEN.isRelaDataBase &&
    tzDataType.isBoolean(pobjProjectsEN.isRelaDataBase) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否关联数据库(isRelaDataBase)]的值:[${pobjProjectsEN.isRelaDataBase}], 非法,应该为布尔型(In 工程(Projects))!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.useStateId) == false &&
    undefined !== pobjProjectsEN.useStateId &&
    tzDataType.isString(pobjProjectsEN.useStateId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[使用状态Id(useStateId)]的值:[${pobjProjectsEN.useStateId}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.userId) == false &&
    undefined !== pobjProjectsEN.userId &&
    tzDataType.isString(pobjProjectsEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[用户Id(userId)]的值:[${pobjProjectsEN.userId}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.updDate) == false &&
    undefined !== pobjProjectsEN.updDate &&
    tzDataType.isString(pobjProjectsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjProjectsEN.updDate}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.memo) == false &&
    undefined !== pobjProjectsEN.memo &&
    tzDataType.isString(pobjProjectsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjProjectsEN.memo}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.javaPackageName) == false &&
    undefined !== pobjProjectsEN.javaPackageName &&
    tzDataType.isString(pobjProjectsEN.javaPackageName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Java包名(javaPackageName)]的值:[${pobjProjectsEN.javaPackageName}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjProjectsEN.isSupportMvc &&
    undefined !== pobjProjectsEN.isSupportMvc &&
    tzDataType.isBoolean(pobjProjectsEN.isSupportMvc) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否支持Mvc(isSupportMvc)]的值:[${pobjProjectsEN.isSupportMvc}], 非法,应该为布尔型(In 工程(Projects))!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.isoPrjName) == false &&
    undefined !== pobjProjectsEN.isoPrjName &&
    tzDataType.isString(pobjProjectsEN.isoPrjName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[ISO工程名(isoPrjName)]的值:[${pobjProjectsEN.isoPrjName}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjProjectsEN.useStateId) == false &&
    pobjProjectsEN.useStateId != '[nuull]' &&
    GetStrLen(pobjProjectsEN.useStateId) != 4
  ) {
    throw '(errid:Watl000415)字段[使用状态Id]作为外键字段,长度应该为4(In 工程)!(clsProjectsBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Projects_CheckProperty4Update(pobjProjectsEN: clsProjectsEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjProjectsEN.prjId) == false && GetStrLen(pobjProjectsEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 工程(Projects))!值:${pobjProjectsEN.prjId}(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjProjectsEN.prjName) == false && GetStrLen(pobjProjectsEN.prjName) > 30) {
    throw new Error(
      `(errid:Watl000416)字段[工程名称(prjName)]的长度不能超过30(In 工程(Projects))!值:${pobjProjectsEN.prjName}(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.prjDomain) == false &&
    GetStrLen(pobjProjectsEN.prjDomain) > 128
  ) {
    throw new Error(
      `(errid:Watl000416)字段[域/包名(prjDomain)]的长度不能超过128(In 工程(Projects))!值:${pobjProjectsEN.prjDomain}(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.tableSpace) == false &&
    GetStrLen(pobjProjectsEN.tableSpace) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[表空间(tableSpace)]的长度不能超过50(In 工程(Projects))!值:${pobjProjectsEN.tableSpace}(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.getWebApiFunc) == false &&
    GetStrLen(pobjProjectsEN.getWebApiFunc) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[获取WebApiUrl函数(getWebApiFunc)]的长度不能超过100(In 工程(Projects))!值:${pobjProjectsEN.getWebApiFunc}(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.useStateId) == false &&
    GetStrLen(pobjProjectsEN.useStateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[使用状态Id(useStateId)]的长度不能超过4(In 工程(Projects))!值:${pobjProjectsEN.useStateId}(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjProjectsEN.userId) == false && GetStrLen(pobjProjectsEN.userId) > 18) {
    throw new Error(
      `(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 工程(Projects))!值:${pobjProjectsEN.userId}(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjProjectsEN.updDate) == false && GetStrLen(pobjProjectsEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 工程(Projects))!值:${pobjProjectsEN.updDate}(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjProjectsEN.memo) == false && GetStrLen(pobjProjectsEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 工程(Projects))!值:${pobjProjectsEN.memo}(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.javaPackageName) == false &&
    GetStrLen(pobjProjectsEN.javaPackageName) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Java包名(javaPackageName)]的长度不能超过200(In 工程(Projects))!值:${pobjProjectsEN.javaPackageName}(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.isoPrjName) == false &&
    GetStrLen(pobjProjectsEN.isoPrjName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[ISO工程名(isoPrjName)]的长度不能超过50(In 工程(Projects))!值:${pobjProjectsEN.isoPrjName}(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjProjectsEN.prjId) == false &&
    undefined !== pobjProjectsEN.prjId &&
    tzDataType.isString(pobjProjectsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjProjectsEN.prjId}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.prjName) == false &&
    undefined !== pobjProjectsEN.prjName &&
    tzDataType.isString(pobjProjectsEN.prjName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程名称(prjName)]的值:[${pobjProjectsEN.prjName}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.prjDomain) == false &&
    undefined !== pobjProjectsEN.prjDomain &&
    tzDataType.isString(pobjProjectsEN.prjDomain) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[域/包名(prjDomain)]的值:[${pobjProjectsEN.prjDomain}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.tableSpace) == false &&
    undefined !== pobjProjectsEN.tableSpace &&
    tzDataType.isString(pobjProjectsEN.tableSpace) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表空间(tableSpace)]的值:[${pobjProjectsEN.tableSpace}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.getWebApiFunc) == false &&
    undefined !== pobjProjectsEN.getWebApiFunc &&
    tzDataType.isString(pobjProjectsEN.getWebApiFunc) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[获取WebApiUrl函数(getWebApiFunc)]的值:[${pobjProjectsEN.getWebApiFunc}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjProjectsEN.isRelaDataBase &&
    undefined !== pobjProjectsEN.isRelaDataBase &&
    tzDataType.isBoolean(pobjProjectsEN.isRelaDataBase) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否关联数据库(isRelaDataBase)]的值:[${pobjProjectsEN.isRelaDataBase}], 非法,应该为布尔型(In 工程(Projects))!(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.useStateId) == false &&
    undefined !== pobjProjectsEN.useStateId &&
    tzDataType.isString(pobjProjectsEN.useStateId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[使用状态Id(useStateId)]的值:[${pobjProjectsEN.useStateId}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.userId) == false &&
    undefined !== pobjProjectsEN.userId &&
    tzDataType.isString(pobjProjectsEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[用户Id(userId)]的值:[${pobjProjectsEN.userId}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.updDate) == false &&
    undefined !== pobjProjectsEN.updDate &&
    tzDataType.isString(pobjProjectsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjProjectsEN.updDate}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.memo) == false &&
    undefined !== pobjProjectsEN.memo &&
    tzDataType.isString(pobjProjectsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjProjectsEN.memo}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.javaPackageName) == false &&
    undefined !== pobjProjectsEN.javaPackageName &&
    tzDataType.isString(pobjProjectsEN.javaPackageName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Java包名(javaPackageName)]的值:[${pobjProjectsEN.javaPackageName}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjProjectsEN.isSupportMvc &&
    undefined !== pobjProjectsEN.isSupportMvc &&
    tzDataType.isBoolean(pobjProjectsEN.isSupportMvc) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否支持Mvc(isSupportMvc)]的值:[${pobjProjectsEN.isSupportMvc}], 非法,应该为布尔型(In 工程(Projects))!(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjProjectsEN.isoPrjName) == false &&
    undefined !== pobjProjectsEN.isoPrjName &&
    tzDataType.isString(pobjProjectsEN.isoPrjName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[ISO工程名(isoPrjName)]的值:[${pobjProjectsEN.isoPrjName}], 非法,应该为字符型(In 工程(Projects))!(clsProjectsBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjProjectsEN.useStateId) == false &&
    pobjProjectsEN.useStateId != '[nuull]' &&
    GetStrLen(pobjProjectsEN.useStateId) != 4
  ) {
    throw '(errid:Watl000418)字段[使用状态Id]作为外键字段,长度应该为4(In 工程)!(clsProjectsBL:CheckPropertyNew)';
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
export function Projects_GetJSONStrByObj(pobjProjectsEN: clsProjectsEN): string {
  pobjProjectsEN.sfUpdFldSetStr = pobjProjectsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjProjectsEN);
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
export function Projects_GetObjLstByJSONStr(strJSON: string): Array<clsProjectsEN> {
  let arrProjectsObjLst = new Array<clsProjectsEN>();
  if (strJSON === '') {
    return arrProjectsObjLst;
  }
  try {
    arrProjectsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrProjectsObjLst;
  }
  return arrProjectsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrProjectsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function Projects_GetObjLstByJSONObjLst(
  arrProjectsObjLstS: Array<clsProjectsEN>,
): Array<clsProjectsEN> {
  const arrProjectsObjLst = new Array<clsProjectsEN>();
  for (const objInFor of arrProjectsObjLstS) {
    const obj1 = Projects_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrProjectsObjLst.push(obj1);
  }
  return arrProjectsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function Projects_GetObjByJSONStr(strJSON: string): clsProjectsEN {
  let pobjProjectsEN = new clsProjectsEN();
  if (strJSON === '') {
    return pobjProjectsEN;
  }
  try {
    pobjProjectsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjProjectsEN;
  }
  return pobjProjectsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function Projects_GetCombineCondition(objProjectsCond: clsProjectsEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectsCond.dicFldComparisonOp,
      clsProjectsEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objProjectsCond.dicFldComparisonOp[clsProjectsEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProjectsEN.con_PrjId,
      objProjectsCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectsCond.dicFldComparisonOp,
      clsProjectsEN.con_PrjName,
    ) == true
  ) {
    const strComparisonOpPrjName: string =
      objProjectsCond.dicFldComparisonOp[clsProjectsEN.con_PrjName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProjectsEN.con_PrjName,
      objProjectsCond.prjName,
      strComparisonOpPrjName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectsCond.dicFldComparisonOp,
      clsProjectsEN.con_PrjDomain,
    ) == true
  ) {
    const strComparisonOpPrjDomain: string =
      objProjectsCond.dicFldComparisonOp[clsProjectsEN.con_PrjDomain];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProjectsEN.con_PrjDomain,
      objProjectsCond.prjDomain,
      strComparisonOpPrjDomain,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectsCond.dicFldComparisonOp,
      clsProjectsEN.con_TableSpace,
    ) == true
  ) {
    const strComparisonOpTableSpace: string =
      objProjectsCond.dicFldComparisonOp[clsProjectsEN.con_TableSpace];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProjectsEN.con_TableSpace,
      objProjectsCond.tableSpace,
      strComparisonOpTableSpace,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectsCond.dicFldComparisonOp,
      clsProjectsEN.con_GetWebApiFunc,
    ) == true
  ) {
    const strComparisonOpGetWebApiFunc: string =
      objProjectsCond.dicFldComparisonOp[clsProjectsEN.con_GetWebApiFunc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProjectsEN.con_GetWebApiFunc,
      objProjectsCond.getWebApiFunc,
      strComparisonOpGetWebApiFunc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectsCond.dicFldComparisonOp,
      clsProjectsEN.con_IsRelaDataBase,
    ) == true
  ) {
    if (objProjectsCond.isRelaDataBase == true) {
      strWhereCond += Format(" And {0} = '1'", clsProjectsEN.con_IsRelaDataBase);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsProjectsEN.con_IsRelaDataBase);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectsCond.dicFldComparisonOp,
      clsProjectsEN.con_UseStateId,
    ) == true
  ) {
    const strComparisonOpUseStateId: string =
      objProjectsCond.dicFldComparisonOp[clsProjectsEN.con_UseStateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProjectsEN.con_UseStateId,
      objProjectsCond.useStateId,
      strComparisonOpUseStateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectsCond.dicFldComparisonOp,
      clsProjectsEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objProjectsCond.dicFldComparisonOp[clsProjectsEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProjectsEN.con_UserId,
      objProjectsCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectsCond.dicFldComparisonOp,
      clsProjectsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objProjectsCond.dicFldComparisonOp[clsProjectsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProjectsEN.con_UpdDate,
      objProjectsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectsCond.dicFldComparisonOp,
      clsProjectsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objProjectsCond.dicFldComparisonOp[clsProjectsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProjectsEN.con_Memo,
      objProjectsCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectsCond.dicFldComparisonOp,
      clsProjectsEN.con_JavaPackageName,
    ) == true
  ) {
    const strComparisonOpJavaPackageName: string =
      objProjectsCond.dicFldComparisonOp[clsProjectsEN.con_JavaPackageName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProjectsEN.con_JavaPackageName,
      objProjectsCond.javaPackageName,
      strComparisonOpJavaPackageName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectsCond.dicFldComparisonOp,
      clsProjectsEN.con_IsSupportMvc,
    ) == true
  ) {
    if (objProjectsCond.isSupportMvc == true) {
      strWhereCond += Format(" And {0} = '1'", clsProjectsEN.con_IsSupportMvc);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsProjectsEN.con_IsSupportMvc);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objProjectsCond.dicFldComparisonOp,
      clsProjectsEN.con_IsoPrjName,
    ) == true
  ) {
    const strComparisonOpIsoPrjName: string =
      objProjectsCond.dicFldComparisonOp[clsProjectsEN.con_IsoPrjName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsProjectsEN.con_IsoPrjName,
      objProjectsCond.isoPrjName,
      strComparisonOpIsoPrjName,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--Projects(工程),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjName: 工程名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Projects_GetUniCondStr(objProjectsEN: clsProjectsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjName = '{0}'", objProjectsEN.prjName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--Projects(工程),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjName: 工程名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Projects_GetUniCondStr4Update(objProjectsEN: clsProjectsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId <> '{0}'", objProjectsEN.prjId);
  strWhereCond += Format(" and PrjName = '{0}'", objProjectsEN.prjName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objProjectsENS:源对象
 * @param objProjectsENT:目标对象
 */
export function Projects_GetObjFromJsonObj(objProjectsENS: clsProjectsEN): clsProjectsEN {
  const objProjectsENT: clsProjectsEN = new clsProjectsEN();
  ObjectAssign(objProjectsENT, objProjectsENS);
  return objProjectsENT;
}
