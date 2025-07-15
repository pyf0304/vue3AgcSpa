/**
 * 类名:clsCMProjectWApi
 * 表名:CMProject(00050512)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:55
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * CM项目(CMProject)
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
import { cMProjectCache, isFuncMapCache } from '@/views/CodeMan/CMProjectVueShare';
import { clsCMProjectENEx } from '@/ts/L0Entity/CodeMan/clsCMProjectENEx';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import { Projects_func } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
import { ApplicationType_func } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { UseState_func } from '@/ts/L3ForWApi/SysPara/clsUseStateWApi';
import { clsUseStateEN } from '@/ts/L0Entity/SysPara/clsUseStateEN';
import { FunctionTemplate_func } from '@/ts/L3ForWApi/PrjFunction/clsFunctionTemplateWApi';
import { clsFunctionTemplateEN } from '@/ts/L0Entity/PrjFunction/clsFunctionTemplateEN';
import { VueCtrlDesignSys_func } from '@/ts/L3ForWApi/SysPara/clsVueCtrlDesignSysWApi';
import { clsVueCtrlDesignSysEN } from '@/ts/L0Entity/SysPara/clsVueCtrlDesignSysEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const cMProject_Controller = 'CMProjectApi';
export const cMProject_ConstructorName = 'cMProject';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCmPrjId:关键字
 * @returns 对象
 **/
export async function CMProject_GetObjByCmPrjIdAsync(
  strCmPrjId: string,
): Promise<clsCMProjectEN | null> {
  const strThisFuncName = 'GetObjByCmPrjIdAsync';

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空!(In clsCMProjectWApi.GetObjByCmPrjIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsCMProjectWApi.GetObjByCmPrjIdAsync)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCmPrjId';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmPrjId,
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
      const objCMProject = CMProject_GetObjFromJsonObj(returnObj);
      return objCMProject;
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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
 * @param strCmPrjId:所给的关键字
 * @returns 对象
 */
export async function CMProject_GetObjByCmPrjIdlocalStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjByCmPrjIdlocalStorage';

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsCMProjectWApi.GetObjByCmPrjIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsCMProjectWApi.GetObjByCmPrjIdlocalStorage)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsCMProjectEN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objCMProjectCache: clsCMProjectEN = JSON.parse(strTempObj);
    return objCMProjectCache;
  }
  try {
    const objCMProject = await CMProject_GetObjByCmPrjIdAsync(strCmPrjId);
    if (objCMProject != null) {
      localStorage.setItem(strKey, JSON.stringify(objCMProject));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objCMProject;
    }
    return objCMProject;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCmPrjId,
      cMProject_ConstructorName,
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
 * @param strCmPrjId:所给的关键字
 * @returns 对象
 */
export async function CMProject_GetObjByCmPrjIdCache(strCmPrjId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByCmPrjIdCache';

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空!(In clsCMProjectWApi.GetObjByCmPrjIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsCMProjectWApi.GetObjByCmPrjIdCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCMProjectObjLstCache = await CMProject_GetObjLstCache();
  try {
    const arrCMProjectSel = arrCMProjectObjLstCache.filter((x) => x.cmPrjId == strCmPrjId);
    let objCMProject: clsCMProjectEN;
    if (arrCMProjectSel.length > 0) {
      objCMProject = arrCMProjectSel[0];
      return objCMProject;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCMProjectConst = await CMProject_GetObjByCmPrjIdAsync(strCmPrjId);
        if (objCMProjectConst != null) {
          CMProject_ReFreshThisCache();
          return objCMProjectConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCmPrjId,
      cMProject_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objCMProject:所给的对象
 * @returns 对象
 */
export async function CMProject_UpdateObjInLstCache(objCMProject: clsCMProjectEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCMProjectObjLstCache = await CMProject_GetObjLstCache();
    const obj = arrCMProjectObjLstCache.find(
      (x) => x.cmPrjName == objCMProject.cmPrjName && x.prjId == objCMProject.prjId,
    );
    if (obj != null) {
      objCMProject.cmPrjId = obj.cmPrjId;
      ObjectAssign(obj, objCMProject);
    } else {
      arrCMProjectObjLstCache.push(objCMProject);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      cMProject_ConstructorName,
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
export function CMProject_SortFunDefa(a: clsCMProjectEN, b: clsCMProjectEN): number {
  return a.cmPrjId.localeCompare(b.cmPrjId);
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
export function CMProject_SortFunDefa2Fld(a: clsCMProjectEN, b: clsCMProjectEN): number {
  if (a.cmPrjName == b.cmPrjName) return a.prjId.localeCompare(b.prjId);
  else return a.cmPrjName.localeCompare(b.cmPrjName);
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
export function CMProject_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMProjectEN.con_CmPrjId:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsCMProjectEN.con_CmPrjName:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          return a.cmPrjName.localeCompare(b.cmPrjName);
        };
      case clsCMProjectEN.con_PrjId:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsCMProjectEN.con_ApplicationTypeId:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsCMProjectEN.con_FunctionTemplateId:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          if (a.functionTemplateId == null) return -1;
          if (b.functionTemplateId == null) return 1;
          return a.functionTemplateId.localeCompare(b.functionTemplateId);
        };
      case clsCMProjectEN.con_VueDesignSysId:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          if (a.vueDesignSysId == null) return -1;
          if (b.vueDesignSysId == null) return 1;
          return a.vueDesignSysId.localeCompare(b.vueDesignSysId);
        };
      case clsCMProjectEN.con_IsFstLcase:
        return (a: clsCMProjectEN) => {
          if (a.isFstLcase == true) return 1;
          else return -1;
        };
      case clsCMProjectEN.con_IsCamelCase:
        return (a: clsCMProjectEN) => {
          if (a.isCamelCase == true) return 1;
          else return -1;
        };
      case clsCMProjectEN.con_ProjectFileName:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          if (a.projectFileName == null) return -1;
          if (b.projectFileName == null) return 1;
          return a.projectFileName.localeCompare(b.projectFileName);
        };
      case clsCMProjectEN.con_UseStateId:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          if (a.useStateId == null) return -1;
          if (b.useStateId == null) return 1;
          return a.useStateId.localeCompare(b.useStateId);
        };
      case clsCMProjectEN.con_IsRefresh4RelaView:
        return (a: clsCMProjectEN) => {
          if (a.isRefresh4RelaView == true) return 1;
          else return -1;
        };
      case clsCMProjectEN.con_UpdDate:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCMProjectEN.con_UpdUserId:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsCMProjectEN.con_Memo:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMProject]中不存在!(in ${cMProject_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCMProjectEN.con_CmPrjId:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsCMProjectEN.con_CmPrjName:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          return b.cmPrjName.localeCompare(a.cmPrjName);
        };
      case clsCMProjectEN.con_PrjId:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsCMProjectEN.con_ApplicationTypeId:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsCMProjectEN.con_FunctionTemplateId:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          if (b.functionTemplateId == null) return -1;
          if (a.functionTemplateId == null) return 1;
          return b.functionTemplateId.localeCompare(a.functionTemplateId);
        };
      case clsCMProjectEN.con_VueDesignSysId:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          if (b.vueDesignSysId == null) return -1;
          if (a.vueDesignSysId == null) return 1;
          return b.vueDesignSysId.localeCompare(a.vueDesignSysId);
        };
      case clsCMProjectEN.con_IsFstLcase:
        return (b: clsCMProjectEN) => {
          if (b.isFstLcase == true) return 1;
          else return -1;
        };
      case clsCMProjectEN.con_IsCamelCase:
        return (b: clsCMProjectEN) => {
          if (b.isCamelCase == true) return 1;
          else return -1;
        };
      case clsCMProjectEN.con_ProjectFileName:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          if (b.projectFileName == null) return -1;
          if (a.projectFileName == null) return 1;
          return b.projectFileName.localeCompare(a.projectFileName);
        };
      case clsCMProjectEN.con_UseStateId:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          if (b.useStateId == null) return -1;
          if (a.useStateId == null) return 1;
          return b.useStateId.localeCompare(a.useStateId);
        };
      case clsCMProjectEN.con_IsRefresh4RelaView:
        return (b: clsCMProjectEN) => {
          if (b.isRefresh4RelaView == true) return 1;
          else return -1;
        };
      case clsCMProjectEN.con_UpdDate:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCMProjectEN.con_UpdUserId:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsCMProjectEN.con_Memo:
        return (a: clsCMProjectEN, b: clsCMProjectEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMProject]中不存在!(in ${cMProject_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCmPrjId:所给的关键字
 * @returns 对象
 */
export async function CMProject_GetNameByCmPrjIdCache(strCmPrjId: string) {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format('参数:[strCmPrjId]不能为空!(In clsCMProjectWApi.GetNameByCmPrjIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsCMProjectWApi.GetNameByCmPrjIdCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCMProjectObjLstCache = await CMProject_GetObjLstCache();
  if (arrCMProjectObjLstCache == null) return '';
  try {
    const arrCMProjectSel = arrCMProjectObjLstCache.filter((x) => x.cmPrjId == strCmPrjId);
    let objCMProject: clsCMProjectEN;
    if (arrCMProjectSel.length > 0) {
      objCMProject = arrCMProjectSel[0];
      return objCMProject.cmPrjName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strCmPrjId,
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
export async function CMProject_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCMProjectEN.con_CmPrjId:
      return (obj: clsCMProjectEN) => {
        return obj.cmPrjId === value;
      };
    case clsCMProjectEN.con_CmPrjName:
      return (obj: clsCMProjectEN) => {
        return obj.cmPrjName === value;
      };
    case clsCMProjectEN.con_PrjId:
      return (obj: clsCMProjectEN) => {
        return obj.prjId === value;
      };
    case clsCMProjectEN.con_ApplicationTypeId:
      return (obj: clsCMProjectEN) => {
        return obj.applicationTypeId === value;
      };
    case clsCMProjectEN.con_FunctionTemplateId:
      return (obj: clsCMProjectEN) => {
        return obj.functionTemplateId === value;
      };
    case clsCMProjectEN.con_VueDesignSysId:
      return (obj: clsCMProjectEN) => {
        return obj.vueDesignSysId === value;
      };
    case clsCMProjectEN.con_IsFstLcase:
      return (obj: clsCMProjectEN) => {
        return obj.isFstLcase === value;
      };
    case clsCMProjectEN.con_IsCamelCase:
      return (obj: clsCMProjectEN) => {
        return obj.isCamelCase === value;
      };
    case clsCMProjectEN.con_ProjectFileName:
      return (obj: clsCMProjectEN) => {
        return obj.projectFileName === value;
      };
    case clsCMProjectEN.con_UseStateId:
      return (obj: clsCMProjectEN) => {
        return obj.useStateId === value;
      };
    case clsCMProjectEN.con_IsRefresh4RelaView:
      return (obj: clsCMProjectEN) => {
        return obj.isRefresh4RelaView === value;
      };
    case clsCMProjectEN.con_UpdDate:
      return (obj: clsCMProjectEN) => {
        return obj.updDate === value;
      };
    case clsCMProjectEN.con_UpdUserId:
      return (obj: clsCMProjectEN) => {
        return obj.updUserId === value;
      };
    case clsCMProjectEN.con_Memo:
      return (obj: clsCMProjectEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CMProject]中不存在!(in ${cMProject_ConstructorName}.${strThisFuncName})`;
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
export async function CMProject_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsCMProjectEN.con_CmPrjId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCMProjectEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsCMProjectEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCmPrjId = strInValue;
  if (IsNullOrEmpty(strCmPrjId) == true) {
    return '';
  }
  const objCMProject = await CMProject_GetObjByCmPrjIdCache(strCmPrjId);
  if (objCMProject == null) return '';
  if (objCMProject.GetFldValue(strOutFldName) == null) return '';
  return objCMProject.GetFldValue(strOutFldName).toString();
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
export async function CMProject_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsCMProjectEN.con_CmPrjId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrCMProject = await CMProject_GetObjLstCache();
  if (arrCMProject == null) return [];
  let arrCMProjectSel = arrCMProject;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCMProjectSel = arrCMProjectSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCMProjectSel = arrCMProjectSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCMProjectSel = arrCMProjectSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCMProjectSel = arrCMProjectSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrCMProjectSel = arrCMProjectSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCMProjectSel = arrCMProjectSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCMProjectSel = arrCMProjectSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCMProjectSel = arrCMProjectSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrCMProjectSel.length == 0) return [];
  return arrCMProjectSel.map((x) => x.cmPrjId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMProject_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
export async function CMProject_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
export async function CMProject_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
export async function CMProject_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCMProjectEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

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
      const objCMProject = CMProject_GetObjFromJsonObj(returnObj);
      return objCMProject;
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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
export async function CMProject_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCMProjectEN._CurrTabName;
  if (IsNullOrEmpty(clsCMProjectEN.WhereFormat) == false) {
    strWhereCond = clsCMProjectEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsCMProjectEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMProjectEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrCMProjectExObjLstCache: Array<clsCMProjectEN> = CacheHelper.Get(strKey);
    const arrCMProjectObjLstT = CMProject_GetObjLstByJSONObjLst(arrCMProjectExObjLstCache);
    return arrCMProjectObjLstT;
  }
  try {
    const arrCMProjectExObjLst = await CMProject_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCMProjectExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMProjectExObjLst.length,
    );
    console.log(strInfo);
    return arrCMProjectExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMProject_ConstructorName,
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
export async function CMProject_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCMProjectEN._CurrTabName;
  if (IsNullOrEmpty(clsCMProjectEN.WhereFormat) == false) {
    strWhereCond = clsCMProjectEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsCMProjectEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMProjectEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCMProjectExObjLstCache: Array<clsCMProjectEN> = JSON.parse(strTempObjLst);
    const arrCMProjectObjLstT = CMProject_GetObjLstByJSONObjLst(arrCMProjectExObjLstCache);
    return arrCMProjectObjLstT;
  }
  try {
    const arrCMProjectExObjLst = await CMProject_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCMProjectExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMProjectExObjLst.length,
    );
    console.log(strInfo);
    return arrCMProjectExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMProject_ConstructorName,
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
export async function CMProject_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCMProjectEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCMProjectObjLstCache: Array<clsCMProjectEN> = JSON.parse(strTempObjLst);
    return arrCMProjectObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CMProject_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCMProjectEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

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
          cMProject_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMProject_GetObjLstByJSONObjLst(returnObjLst);
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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
export async function CMProject_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCMProjectEN._CurrTabName;
  if (IsNullOrEmpty(clsCMProjectEN.WhereFormat) == false) {
    strWhereCond = clsCMProjectEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsCMProjectEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMProjectEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCMProjectExObjLstCache: Array<clsCMProjectEN> = JSON.parse(strTempObjLst);
    const arrCMProjectObjLstT = CMProject_GetObjLstByJSONObjLst(arrCMProjectExObjLstCache);
    return arrCMProjectObjLstT;
  }
  try {
    const arrCMProjectExObjLst = await CMProject_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCMProjectExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMProjectExObjLst.length,
    );
    console.log(strInfo);
    return arrCMProjectExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMProject_ConstructorName,
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
export async function CMProject_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCMProjectEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCMProjectObjLstCache: Array<clsCMProjectEN> = JSON.parse(strTempObjLst);
    return arrCMProjectObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CMProject_GetObjLstCache(): Promise<Array<clsCMProjectEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrCMProjectObjLstCache;
  switch (clsCMProjectEN.CacheModeId) {
    case '04': //sessionStorage
      arrCMProjectObjLstCache = await CMProject_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrCMProjectObjLstCache = await CMProject_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrCMProjectObjLstCache = await CMProject_GetObjLstClientCache();
      break;
    default:
      arrCMProjectObjLstCache = await CMProject_GetObjLstClientCache();
      break;
  }
  return arrCMProjectObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CMProject_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCMProjectObjLstCache;
  switch (clsCMProjectEN.CacheModeId) {
    case '04': //sessionStorage
      arrCMProjectObjLstCache = await CMProject_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrCMProjectObjLstCache = await CMProject_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrCMProjectObjLstCache = null;
      break;
    default:
      arrCMProjectObjLstCache = null;
      break;
  }
  return arrCMProjectObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCmPrjIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CMProject_GetSubObjLstCache(objCMProjectCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCMProjectObjLstCache = await CMProject_GetObjLstCache();
  let arrCMProjectSel = arrCMProjectObjLstCache;
  if (objCMProjectCond.GetConditions().length == 0) return arrCMProjectSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objCMProjectCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrCMProjectSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCMProjectCond),
      cMProject_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCMProjectEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCmPrjId:关键字列表
 * @returns 对象列表
 **/
export async function CMProject_GetObjLstByCmPrjIdLstAsync(
  arrCmPrjId: Array<string>,
): Promise<Array<clsCMProjectEN>> {
  const strThisFuncName = 'GetObjLstByCmPrjIdLstAsync';
  const strAction = 'GetObjLstByCmPrjIdLst';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCmPrjId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          cMProject_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMProject_GetObjLstByJSONObjLst(returnObjLst);
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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
 * @param arrstrCmPrjIdLst:关键字列表
 * @returns 对象列表
 */
export async function CMProject_GetObjLstByCmPrjIdLstCache(arrCmPrjIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByCmPrjIdLstCache';
  try {
    const arrCMProjectObjLstCache = await CMProject_GetObjLstCache();
    const arrCMProjectSel = arrCMProjectObjLstCache.filter(
      (x) => arrCmPrjIdLst.indexOf(x.cmPrjId) > -1,
    );
    return arrCMProjectSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCmPrjIdLst.join(','),
      cMProject_ConstructorName,
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
export async function CMProject_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCMProjectEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

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
          cMProject_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMProject_GetObjLstByJSONObjLst(returnObjLst);
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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
export async function CMProject_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCMProjectEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

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
          cMProject_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMProject_GetObjLstByJSONObjLst(returnObjLst);
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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
export async function CMProject_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMProjectEN>();
  const arrCMProjectObjLstCache = await CMProject_GetObjLstCache();
  if (arrCMProjectObjLstCache.length == 0) return arrCMProjectObjLstCache;
  let arrCMProjectSel = arrCMProjectObjLstCache;
  const objCMProjectCond = objPagerPara.conditionCollection;
  if (objCMProjectCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsCMProjectEN>();
  }
  //console.log("clsCMProjectWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objCMProjectCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCMProjectSel.length == 0) return arrCMProjectSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCMProjectSel = arrCMProjectSel.sort(CMProject_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCMProjectSel = arrCMProjectSel.sort(objPagerPara.sortFun);
    }
    arrCMProjectSel = arrCMProjectSel.slice(intStart, intEnd);
    return arrCMProjectSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cMProject_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCMProjectEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function CMProject_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCMProjectEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMProjectEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

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
          cMProject_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMProject_GetObjLstByJSONObjLst(returnObjLst);
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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
 * @param strCmPrjId:关键字
 * @returns 获取删除的结果
 **/
export async function CMProject_DelRecordAsync(strCmPrjId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cMProject_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strCmPrjId);

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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
 * @param arrCmPrjId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CMProject_DelCMProjectsAsync(arrCmPrjId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelCMProjectsAsync';
  const strAction = 'DelCMProjects';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCmPrjId, config);
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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
export async function CMProject_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCMProjectENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrCMProjectObjLst = await CMProject_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsCMProjectENEx>();
  const arrCMProjectExObjLst = arrCMProjectObjLst.map((obj) => {
    const cacheKey = `${obj.cmPrjId}`;
    if (cMProjectCache[cacheKey]) {
      const oldObj = cMProjectCache[cacheKey];
      return oldObj;
    } else {
      const newObj = CMProject_CopyToEx(obj);
      arrNewObj.push(newObj);
      cMProjectCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await CMProject_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCMProjectEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrCMProjectExObjLst) {
      await CMProject_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.cmPrjId}`;
      cMProjectCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrCMProjectExObjLst.length == 0) return arrCMProjectExObjLst;
  let arrCMProjectSel: Array<clsCMProjectENEx> = arrCMProjectExObjLst;
  const objCMProjectCond = objPagerPara.conditionCollection;
  if (objCMProjectCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrCMProjectExObjLst;
  }
  try {
    for (const objCondition of objCMProjectCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCMProjectSel.length == 0) return arrCMProjectSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrCMProjectSel = arrCMProjectSel.sort(
        CMProject_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCMProjectSel = arrCMProjectSel.sort(objPagerPara.sortFun);
    }
    arrCMProjectSel = arrCMProjectSel.slice(intStart, intEnd);
    return arrCMProjectSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cMProject_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCMProjectENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objCMProjectENS:源对象
 * @returns 目标对象=>clsCMProjectEN:objCMProjectENT
 **/
export function CMProject_CopyToEx(objCMProjectENS: clsCMProjectEN): clsCMProjectENEx {
  const strThisFuncName = CMProject_CopyToEx.name;
  const objCMProjectENT = new clsCMProjectENEx();
  try {
    ObjectAssign(objCMProjectENT, objCMProjectENS);
    return objCMProjectENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProject_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCMProjectENT;
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
export function CMProject_FuncMapByFldName(strFldName: string, objCMProjectEx: clsCMProjectENEx) {
  const strThisFuncName = CMProject_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCMProjectEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCMProjectENEx.con_PrjName:
      return CMProject_FuncMapPrjName(objCMProjectEx);
    case clsCMProjectENEx.con_ApplicationTypeSimName:
      return CMProject_FuncMapApplicationTypeSimName(objCMProjectEx);
    case clsCMProjectENEx.con_UseStateName:
      return CMProject_FuncMapUseStateName(objCMProjectEx);
    case clsCMProjectENEx.con_ApplicationTypeName:
      return CMProject_FuncMapApplicationTypeName(objCMProjectEx);
    case clsCMProjectENEx.con_FunctionTemplateName:
      return CMProject_FuncMapFunctionTemplateName(objCMProjectEx);
    case clsCMProjectENEx.con_VueDesignSysName:
      return CMProject_FuncMapVueDesignSysName(objCMProjectEx);
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
export function CMProject_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMProjectENEx.con_PrjName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsCMProjectENEx.con_ApplicationTypeSimName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          if (a.applicationTypeSimName === null && b.applicationTypeSimName === null) return 0;
          if (a.applicationTypeSimName === null) return -1;
          if (b.applicationTypeSimName === null) return 1;
          return a.applicationTypeSimName.localeCompare(b.applicationTypeSimName);
        };
      case clsCMProjectENEx.con_UseStateName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return a.useStateName.localeCompare(b.useStateName);
        };
      case clsCMProjectENEx.con_ApplicationTypeName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return a.applicationTypeName.localeCompare(b.applicationTypeName);
        };
      case clsCMProjectENEx.con_ApplicationTypeNameLst:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          if (a.applicationTypeNameLst === null && b.applicationTypeNameLst === null) return 0;
          if (a.applicationTypeNameLst === null) return -1;
          if (b.applicationTypeNameLst === null) return 1;
          return a.applicationTypeNameLst.localeCompare(b.applicationTypeNameLst);
        };
      case clsCMProjectENEx.con_FunctionTemplateName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return a.functionTemplateName.localeCompare(b.functionTemplateName);
        };
      case clsCMProjectENEx.con_VueDesignSysName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return a.vueDesignSysName.localeCompare(b.vueDesignSysName);
        };
      default:
        return CMProject_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCMProjectENEx.con_PrjName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsCMProjectENEx.con_ApplicationTypeSimName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          if (a.applicationTypeSimName === null && b.applicationTypeSimName === null) return 0;
          if (a.applicationTypeSimName === null) return 1;
          if (b.applicationTypeSimName === null) return -1;
          return b.applicationTypeSimName.localeCompare(a.applicationTypeSimName);
        };
      case clsCMProjectENEx.con_UseStateName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return b.useStateName.localeCompare(a.useStateName);
        };
      case clsCMProjectENEx.con_ApplicationTypeName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return b.applicationTypeName.localeCompare(a.applicationTypeName);
        };
      case clsCMProjectENEx.con_ApplicationTypeNameLst:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          if (a.applicationTypeNameLst === null && b.applicationTypeNameLst === null) return 0;
          if (a.applicationTypeNameLst === null) return 1;
          if (b.applicationTypeNameLst === null) return -1;
          return b.applicationTypeNameLst.localeCompare(a.applicationTypeNameLst);
        };
      case clsCMProjectENEx.con_FunctionTemplateName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return b.functionTemplateName.localeCompare(a.functionTemplateName);
        };
      case clsCMProjectENEx.con_VueDesignSysName:
        return (a: clsCMProjectENEx, b: clsCMProjectENEx) => {
          return b.vueDesignSysName.localeCompare(a.vueDesignSysName);
        };
      default:
        return CMProject_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProject_FuncMapPrjName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProject_FuncMapPrjName.name;
  try {
    if (IsNullOrEmpty(objCMProject.prjName) == true) {
      const ProjectsPrjId = objCMProject.prjId;
      const ProjectsPrjName = await Projects_func(
        clsProjectsEN.con_PrjId,
        clsProjectsEN.con_PrjName,
        ProjectsPrjId,
      );
      objCMProject.prjName = ProjectsPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001315)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProject_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProject_FuncMapApplicationTypeSimName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProject_FuncMapApplicationTypeSimName.name;
  try {
    if (IsNullOrEmpty(objCMProject.applicationTypeSimName) == true) {
      const ApplicationTypeApplicationTypeId = objCMProject.applicationTypeId.toString();
      const ApplicationTypeApplicationTypeSimName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeSimName,
        ApplicationTypeApplicationTypeId,
      );
      objCMProject.applicationTypeSimName = ApplicationTypeApplicationTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001316)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProject_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProject_FuncMapUseStateName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProject_FuncMapUseStateName.name;
  try {
    if (IsNullOrEmpty(objCMProject.useStateName) == true) {
      const UseStateUseStateId = objCMProject.useStateId;
      const UseStateUseStateName = await UseState_func(
        clsUseStateEN.con_UseStateId,
        clsUseStateEN.con_UseStateName,
        UseStateUseStateId,
      );
      objCMProject.useStateName = UseStateUseStateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001317)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProject_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProject_FuncMapApplicationTypeName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProject_FuncMapApplicationTypeName.name;
  try {
    if (IsNullOrEmpty(objCMProject.applicationTypeName) == true) {
      const ApplicationTypeApplicationTypeId = objCMProject.applicationTypeId.toString();
      const ApplicationTypeApplicationTypeName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeName,
        ApplicationTypeApplicationTypeId,
      );
      objCMProject.applicationTypeName = ApplicationTypeApplicationTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001307)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProject_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProject_FuncMapFunctionTemplateName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProject_FuncMapFunctionTemplateName.name;
  try {
    if (IsNullOrEmpty(objCMProject.functionTemplateName) == true) {
      const FunctionTemplateFunctionTemplateId = objCMProject.functionTemplateId;
      const FunctionTemplateFunctionTemplateName = await FunctionTemplate_func(
        clsFunctionTemplateEN.con_FunctionTemplateId,
        clsFunctionTemplateEN.con_FunctionTemplateName,
        FunctionTemplateFunctionTemplateId,
      );
      objCMProject.functionTemplateName = FunctionTemplateFunctionTemplateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001318)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProject_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objCMProjectS:源对象
 **/
export async function CMProject_FuncMapVueDesignSysName(objCMProject: clsCMProjectENEx) {
  const strThisFuncName = CMProject_FuncMapVueDesignSysName.name;
  try {
    if (IsNullOrEmpty(objCMProject.vueDesignSysName) == true) {
      const VueCtrlDesignSysVueDesignSysId = objCMProject.vueDesignSysId;
      const VueCtrlDesignSysVueDesignSysName = await VueCtrlDesignSys_func(
        clsVueCtrlDesignSysEN.con_VueDesignSysId,
        clsVueCtrlDesignSysEN.con_VueDesignSysName,
        VueCtrlDesignSysVueDesignSysId,
      );
      objCMProject.vueDesignSysName = VueCtrlDesignSysVueDesignSysName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001319)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cMProject_ConstructorName,
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
export async function CMProject_DelCMProjectsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelCMProjectsByCondAsync';
  const strAction = 'DelCMProjectsByCond';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
 * @param objCMProjectEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMProject_AddNewRecordAsync(
  objCMProjectEN: clsCMProjectEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objCMProjectEN);
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMProjectEN, config);
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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
 * @param objCMProjectEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMProject_AddNewRecordWithMaxIdAsync(
  objCMProjectEN: clsCMProjectEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMProjectEN, config);
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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
export async function CMProject_AddNewObjSave(
  objCMProjectEN: clsCMProjectEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    CMProject_CheckPropertyNew(objCMProjectEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${cMProject_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await CMProject_CheckUniCond4Add(objCMProjectEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await CMProject_AddNewRecordWithMaxIdAsync(objCMProjectEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      CMProject_ReFreshCache();
    } else {
      const strInfo = `添加[CM项目(CMProject)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${cMProject_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function CMProject_CheckUniCond4Add(objCMProjectEN: clsCMProjectEN): Promise<boolean> {
  const strUniquenessCondition = CMProject_GetUniCondStr(objCMProjectEN);
  const bolIsExistCondition = await CMProject_IsExistRecordAsync(strUniquenessCondition);
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
export async function CMProject_CheckUniCond4Update(
  objCMProjectEN: clsCMProjectEN,
): Promise<boolean> {
  const strUniquenessCondition = CMProject_GetUniCondStr4Update(objCMProjectEN);
  const bolIsExistCondition = await CMProject_IsExistRecordAsync(strUniquenessCondition);
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
export async function CMProject_UpdateObjSave(objCMProjectEN: clsCMProjectEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objCMProjectEN.sfUpdFldSetStr = objCMProjectEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objCMProjectEN.cmPrjId == '' || objCMProjectEN.cmPrjId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    CMProject_CheckProperty4Update(objCMProjectEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${cMProject_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await CMProject_CheckUniCond4Update(objCMProjectEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await CMProject_UpdateRecordAsync(objCMProjectEN);
    if (returnBool == true) {
      CMProject_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${cMProject_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objCMProjectEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CMProject_AddNewRecordWithReturnKeyAsync(
  objCMProjectEN: clsCMProjectEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMProjectEN, config);
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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
 * @param objCMProjectEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CMProject_UpdateRecordAsync(
  objCMProjectEN: clsCMProjectEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCMProjectEN.sfUpdFldSetStr === undefined ||
    objCMProjectEN.sfUpdFldSetStr === null ||
    objCMProjectEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMProjectEN.cmPrjId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMProjectEN, config);
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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
 * @param objCMProjectEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CMProject_EditRecordExAsync(
  objCMProjectEN: clsCMProjectEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objCMProjectEN.sfUpdFldSetStr === undefined ||
    objCMProjectEN.sfUpdFldSetStr === null ||
    objCMProjectEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMProjectEN.cmPrjId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMProjectEN, config);
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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
 * @param objCMProjectEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMProject_UpdateWithConditionAsync(
  objCMProjectEN: clsCMProjectEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCMProjectEN.sfUpdFldSetStr === undefined ||
    objCMProjectEN.sfUpdFldSetStr === null ||
    objCMProjectEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMProjectEN.cmPrjId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);
  objCMProjectEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMProjectEN, config);
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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
 * @param objstrCmPrjIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CMProject_IsExistRecordCache(objCMProjectCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCMProjectObjLstCache = await CMProject_GetObjLstCache();
  if (arrCMProjectObjLstCache == null) return false;
  let arrCMProjectSel = arrCMProjectObjLstCache;
  if (objCMProjectCond.GetConditions().length == 0)
    return arrCMProjectSel.length > 0 ? true : false;
  try {
    for (const objCondition of objCMProjectCond.GetConditions()) {
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
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCMProjectSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCMProjectCond),
      cMProject_ConstructorName,
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
export async function CMProject_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
 * @param strCmPrjId:所给的关键字
 * @returns 对象
 */
export async function CMProject_IsExistCache(strCmPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrCMProjectObjLstCache = await CMProject_GetObjLstCache();
  if (arrCMProjectObjLstCache == null) return false;
  try {
    const arrCMProjectSel = arrCMProjectObjLstCache.filter((x) => x.cmPrjId == strCmPrjId);
    if (arrCMProjectSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCmPrjId,
      cMProject_ConstructorName,
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
 * @param strCmPrjId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CMProject_IsExistAsync(strCmPrjId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmPrjId,
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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
export async function CMProject_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
 * @param objCMProjectCond:条件对象
 * @returns 对象列表记录数
 */
export async function CMProject_GetRecCountByCondCache(objCMProjectCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCMProjectObjLstCache = await CMProject_GetObjLstCache();
  if (arrCMProjectObjLstCache == null) return 0;
  let arrCMProjectSel = arrCMProjectObjLstCache;
  if (objCMProjectCond.GetConditions().length == 0) return arrCMProjectSel.length;
  try {
    for (const objCondition of objCMProjectCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCMProjectSel = arrCMProjectSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMProjectSel = arrCMProjectSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrCMProjectSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCMProjectCond),
      cMProject_ConstructorName,
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
export async function CMProject_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
export async function CMProject_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cMProject_Controller, strAction);

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
        cMProject_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMProject_ConstructorName,
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
export function CMProject_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CMProject_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsCMProjectEN._CurrTabName;
  switch (clsCMProjectEN.CacheModeId) {
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
  clsCMProjectEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function CMProject_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsCMProjectEN._CurrTabName;
    switch (clsCMProjectEN.CacheModeId) {
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
    clsCMProjectEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function CMProject_GetLastRefreshTime(): string {
  if (clsCMProjectEN._RefreshTimeLst.length == 0) return '';
  return clsCMProjectEN._RefreshTimeLst[clsCMProjectEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function CMProject_BindDdl_CmPrjIdByPrjIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsCMProjectWApi.BindDdl_CmPrjIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsCMProjectWApi.BindDdl_CmPrjIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CmPrjIdByPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CmPrjIdByPrjIdInDivCache");
  let arrObjLstSel = await CMProject_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCMProjectEN.con_CmPrjId,
    clsCMProjectEN.con_CmPrjName,
    'CM项目...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function CMProject_GetArrCMProjectByPrjId(strPrjId: string) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsCMProjectWApi.BindDdl_CmPrjIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsCMProjectWApi.BindDdl_CmPrjIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CmPrjIdByPrjIdInDivCache");
  const arrCMProject = new Array<clsCMProjectEN>();
  let arrObjLstSel = await CMProject_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  const obj0 = new clsCMProjectEN();
  obj0.cmPrjId = '0';
  obj0.cmPrjName = '选cM项目...';
  arrCMProject.push(obj0);
  arrObjLstSel.forEach((x) => arrCMProject.push(x));
  return arrCMProject;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMProject_CheckPropertyNew(pobjCMProjectEN: clsCMProjectEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjCMProjectEN.cmPrjName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[CM工程名]不能为空(In CM项目)!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjCMProjectEN.prjId) === true || pobjCMProjectEN.prjId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In CM项目)!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjCMProjectEN.applicationTypeId ||
    (pobjCMProjectEN.applicationTypeId != null &&
      pobjCMProjectEN.applicationTypeId.toString() === '') ||
    pobjCMProjectEN.applicationTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[应用程序类型ID]不能为空(In CM项目)!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjCMProjectEN.cmPrjId) == false && GetStrLen(pobjCMProjectEN.cmPrjId) > 6) {
    throw new Error(
      `(errid:Watl000413)字段[Cm工程Id(cmPrjId)]的长度不能超过6(In CM项目(CMProject))!值:${pobjCMProjectEN.cmPrjId}(clsCMProjectBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.cmPrjName) == false &&
    GetStrLen(pobjCMProjectEN.cmPrjName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[CM工程名(cmPrjName)]的长度不能超过50(In CM项目(CMProject))!值:${pobjCMProjectEN.cmPrjName}(clsCMProjectBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjCMProjectEN.prjId) == false && GetStrLen(pobjCMProjectEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In CM项目(CMProject))!值:${pobjCMProjectEN.prjId}(clsCMProjectBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.functionTemplateId) == false &&
    GetStrLen(pobjCMProjectEN.functionTemplateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[函数模板Id(functionTemplateId)]的长度不能超过4(In CM项目(CMProject))!值:${pobjCMProjectEN.functionTemplateId}(clsCMProjectBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.vueDesignSysId) == false &&
    GetStrLen(pobjCMProjectEN.vueDesignSysId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Vue控件设计体系Id(vueDesignSysId)]的长度不能超过2(In CM项目(CMProject))!值:${pobjCMProjectEN.vueDesignSysId}(clsCMProjectBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.projectFileName) == false &&
    GetStrLen(pobjCMProjectEN.projectFileName) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程文件名(projectFileName)]的长度不能超过200(In CM项目(CMProject))!值:${pobjCMProjectEN.projectFileName}(clsCMProjectBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.useStateId) == false &&
    GetStrLen(pobjCMProjectEN.useStateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[使用状态Id(useStateId)]的长度不能超过4(In CM项目(CMProject))!值:${pobjCMProjectEN.useStateId}(clsCMProjectBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjCMProjectEN.updDate) == false && GetStrLen(pobjCMProjectEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In CM项目(CMProject))!值:${pobjCMProjectEN.updDate}(clsCMProjectBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.updUserId) == false &&
    GetStrLen(pobjCMProjectEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In CM项目(CMProject))!值:${pobjCMProjectEN.updUserId}(clsCMProjectBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjCMProjectEN.memo) == false && GetStrLen(pobjCMProjectEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In CM项目(CMProject))!值:${pobjCMProjectEN.memo}(clsCMProjectBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCMProjectEN.cmPrjId) == false &&
    undefined !== pobjCMProjectEN.cmPrjId &&
    tzDataType.isString(pobjCMProjectEN.cmPrjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Cm工程Id(cmPrjId)]的值:[${pobjCMProjectEN.cmPrjId}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.cmPrjName) == false &&
    undefined !== pobjCMProjectEN.cmPrjName &&
    tzDataType.isString(pobjCMProjectEN.cmPrjName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[CM工程名(cmPrjName)]的值:[${pobjCMProjectEN.cmPrjName}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.prjId) == false &&
    undefined !== pobjCMProjectEN.prjId &&
    tzDataType.isString(pobjCMProjectEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjCMProjectEN.prjId}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCMProjectEN.applicationTypeId &&
    undefined !== pobjCMProjectEN.applicationTypeId &&
    tzDataType.isNumber(pobjCMProjectEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjCMProjectEN.applicationTypeId}], 非法,应该为数值型(In CM项目(CMProject))!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.functionTemplateId) == false &&
    undefined !== pobjCMProjectEN.functionTemplateId &&
    tzDataType.isString(pobjCMProjectEN.functionTemplateId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[函数模板Id(functionTemplateId)]的值:[${pobjCMProjectEN.functionTemplateId}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.vueDesignSysId) == false &&
    undefined !== pobjCMProjectEN.vueDesignSysId &&
    tzDataType.isString(pobjCMProjectEN.vueDesignSysId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Vue控件设计体系Id(vueDesignSysId)]的值:[${pobjCMProjectEN.vueDesignSysId}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCMProjectEN.isFstLcase &&
    undefined !== pobjCMProjectEN.isFstLcase &&
    tzDataType.isBoolean(pobjCMProjectEN.isFstLcase) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否首字母小写(isFstLcase)]的值:[${pobjCMProjectEN.isFstLcase}], 非法,应该为布尔型(In CM项目(CMProject))!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCMProjectEN.isCamelCase &&
    undefined !== pobjCMProjectEN.isCamelCase &&
    tzDataType.isBoolean(pobjCMProjectEN.isCamelCase) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否使用CamelCase(isCamelCase)]的值:[${pobjCMProjectEN.isCamelCase}], 非法,应该为布尔型(In CM项目(CMProject))!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.projectFileName) == false &&
    undefined !== pobjCMProjectEN.projectFileName &&
    tzDataType.isString(pobjCMProjectEN.projectFileName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程文件名(projectFileName)]的值:[${pobjCMProjectEN.projectFileName}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.useStateId) == false &&
    undefined !== pobjCMProjectEN.useStateId &&
    tzDataType.isString(pobjCMProjectEN.useStateId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[使用状态Id(useStateId)]的值:[${pobjCMProjectEN.useStateId}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjCMProjectEN.isRefresh4RelaView &&
    undefined !== pobjCMProjectEN.isRefresh4RelaView &&
    tzDataType.isBoolean(pobjCMProjectEN.isRefresh4RelaView) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否刷新相关视图(isRefresh4RelaView)]的值:[${pobjCMProjectEN.isRefresh4RelaView}], 非法,应该为布尔型(In CM项目(CMProject))!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.updDate) == false &&
    undefined !== pobjCMProjectEN.updDate &&
    tzDataType.isString(pobjCMProjectEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjCMProjectEN.updDate}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.updUserId) == false &&
    undefined !== pobjCMProjectEN.updUserId &&
    tzDataType.isString(pobjCMProjectEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjCMProjectEN.updUserId}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.memo) == false &&
    undefined !== pobjCMProjectEN.memo &&
    tzDataType.isString(pobjCMProjectEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjCMProjectEN.memo}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMProject_CheckProperty4Update(pobjCMProjectEN: clsCMProjectEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjCMProjectEN.cmPrjId) == false && GetStrLen(pobjCMProjectEN.cmPrjId) > 6) {
    throw new Error(
      `(errid:Watl000416)字段[Cm工程Id(cmPrjId)]的长度不能超过6(In CM项目(CMProject))!值:${pobjCMProjectEN.cmPrjId}(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.cmPrjName) == false &&
    GetStrLen(pobjCMProjectEN.cmPrjName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[CM工程名(cmPrjName)]的长度不能超过50(In CM项目(CMProject))!值:${pobjCMProjectEN.cmPrjName}(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjCMProjectEN.prjId) == false && GetStrLen(pobjCMProjectEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In CM项目(CMProject))!值:${pobjCMProjectEN.prjId}(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.functionTemplateId) == false &&
    GetStrLen(pobjCMProjectEN.functionTemplateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[函数模板Id(functionTemplateId)]的长度不能超过4(In CM项目(CMProject))!值:${pobjCMProjectEN.functionTemplateId}(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.vueDesignSysId) == false &&
    GetStrLen(pobjCMProjectEN.vueDesignSysId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Vue控件设计体系Id(vueDesignSysId)]的长度不能超过2(In CM项目(CMProject))!值:${pobjCMProjectEN.vueDesignSysId}(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.projectFileName) == false &&
    GetStrLen(pobjCMProjectEN.projectFileName) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程文件名(projectFileName)]的长度不能超过200(In CM项目(CMProject))!值:${pobjCMProjectEN.projectFileName}(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.useStateId) == false &&
    GetStrLen(pobjCMProjectEN.useStateId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[使用状态Id(useStateId)]的长度不能超过4(In CM项目(CMProject))!值:${pobjCMProjectEN.useStateId}(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjCMProjectEN.updDate) == false && GetStrLen(pobjCMProjectEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In CM项目(CMProject))!值:${pobjCMProjectEN.updDate}(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.updUserId) == false &&
    GetStrLen(pobjCMProjectEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In CM项目(CMProject))!值:${pobjCMProjectEN.updUserId}(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjCMProjectEN.memo) == false && GetStrLen(pobjCMProjectEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In CM项目(CMProject))!值:${pobjCMProjectEN.memo}(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCMProjectEN.cmPrjId) == false &&
    undefined !== pobjCMProjectEN.cmPrjId &&
    tzDataType.isString(pobjCMProjectEN.cmPrjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Cm工程Id(cmPrjId)]的值:[${pobjCMProjectEN.cmPrjId}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.cmPrjName) == false &&
    undefined !== pobjCMProjectEN.cmPrjName &&
    tzDataType.isString(pobjCMProjectEN.cmPrjName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[CM工程名(cmPrjName)]的值:[${pobjCMProjectEN.cmPrjName}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.prjId) == false &&
    undefined !== pobjCMProjectEN.prjId &&
    tzDataType.isString(pobjCMProjectEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjCMProjectEN.prjId}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCMProjectEN.applicationTypeId &&
    undefined !== pobjCMProjectEN.applicationTypeId &&
    tzDataType.isNumber(pobjCMProjectEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjCMProjectEN.applicationTypeId}], 非法,应该为数值型(In CM项目(CMProject))!(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.functionTemplateId) == false &&
    undefined !== pobjCMProjectEN.functionTemplateId &&
    tzDataType.isString(pobjCMProjectEN.functionTemplateId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[函数模板Id(functionTemplateId)]的值:[${pobjCMProjectEN.functionTemplateId}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.vueDesignSysId) == false &&
    undefined !== pobjCMProjectEN.vueDesignSysId &&
    tzDataType.isString(pobjCMProjectEN.vueDesignSysId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Vue控件设计体系Id(vueDesignSysId)]的值:[${pobjCMProjectEN.vueDesignSysId}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCMProjectEN.isFstLcase &&
    undefined !== pobjCMProjectEN.isFstLcase &&
    tzDataType.isBoolean(pobjCMProjectEN.isFstLcase) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否首字母小写(isFstLcase)]的值:[${pobjCMProjectEN.isFstLcase}], 非法,应该为布尔型(In CM项目(CMProject))!(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCMProjectEN.isCamelCase &&
    undefined !== pobjCMProjectEN.isCamelCase &&
    tzDataType.isBoolean(pobjCMProjectEN.isCamelCase) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否使用CamelCase(isCamelCase)]的值:[${pobjCMProjectEN.isCamelCase}], 非法,应该为布尔型(In CM项目(CMProject))!(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.projectFileName) == false &&
    undefined !== pobjCMProjectEN.projectFileName &&
    tzDataType.isString(pobjCMProjectEN.projectFileName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程文件名(projectFileName)]的值:[${pobjCMProjectEN.projectFileName}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.useStateId) == false &&
    undefined !== pobjCMProjectEN.useStateId &&
    tzDataType.isString(pobjCMProjectEN.useStateId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[使用状态Id(useStateId)]的值:[${pobjCMProjectEN.useStateId}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjCMProjectEN.isRefresh4RelaView &&
    undefined !== pobjCMProjectEN.isRefresh4RelaView &&
    tzDataType.isBoolean(pobjCMProjectEN.isRefresh4RelaView) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否刷新相关视图(isRefresh4RelaView)]的值:[${pobjCMProjectEN.isRefresh4RelaView}], 非法,应该为布尔型(In CM项目(CMProject))!(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.updDate) == false &&
    undefined !== pobjCMProjectEN.updDate &&
    tzDataType.isString(pobjCMProjectEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjCMProjectEN.updDate}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.updUserId) == false &&
    undefined !== pobjCMProjectEN.updUserId &&
    tzDataType.isString(pobjCMProjectEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjCMProjectEN.updUserId}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjCMProjectEN.memo) == false &&
    undefined !== pobjCMProjectEN.memo &&
    tzDataType.isString(pobjCMProjectEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjCMProjectEN.memo}], 非法,应该为字符型(In CM项目(CMProject))!(clsCMProjectBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
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
export function CMProject_GetJSONStrByObj(pobjCMProjectEN: clsCMProjectEN): string {
  pobjCMProjectEN.sfUpdFldSetStr = pobjCMProjectEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCMProjectEN);
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
export function CMProject_GetObjLstByJSONStr(strJSON: string): Array<clsCMProjectEN> {
  let arrCMProjectObjLst = new Array<clsCMProjectEN>();
  if (strJSON === '') {
    return arrCMProjectObjLst;
  }
  try {
    arrCMProjectObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCMProjectObjLst;
  }
  return arrCMProjectObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCMProjectObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CMProject_GetObjLstByJSONObjLst(
  arrCMProjectObjLstS: Array<clsCMProjectEN>,
): Array<clsCMProjectEN> {
  const arrCMProjectObjLst = new Array<clsCMProjectEN>();
  for (const objInFor of arrCMProjectObjLstS) {
    const obj1 = CMProject_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCMProjectObjLst.push(obj1);
  }
  return arrCMProjectObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMProject_GetObjByJSONStr(strJSON: string): clsCMProjectEN {
  let pobjCMProjectEN = new clsCMProjectEN();
  if (strJSON === '') {
    return pobjCMProjectEN;
  }
  try {
    pobjCMProjectEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCMProjectEN;
  }
  return pobjCMProjectEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CMProject_GetCombineCondition(objCMProjectCond: clsCMProjectEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectCond.dicFldComparisonOp,
      clsCMProjectEN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objCMProjectCond.dicFldComparisonOp[clsCMProjectEN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMProjectEN.con_CmPrjId,
      objCMProjectCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectCond.dicFldComparisonOp,
      clsCMProjectEN.con_CmPrjName,
    ) == true
  ) {
    const strComparisonOpCmPrjName: string =
      objCMProjectCond.dicFldComparisonOp[clsCMProjectEN.con_CmPrjName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMProjectEN.con_CmPrjName,
      objCMProjectCond.cmPrjName,
      strComparisonOpCmPrjName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectCond.dicFldComparisonOp,
      clsCMProjectEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objCMProjectCond.dicFldComparisonOp[clsCMProjectEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMProjectEN.con_PrjId,
      objCMProjectCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectCond.dicFldComparisonOp,
      clsCMProjectEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objCMProjectCond.dicFldComparisonOp[clsCMProjectEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCMProjectEN.con_ApplicationTypeId,
      objCMProjectCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectCond.dicFldComparisonOp,
      clsCMProjectEN.con_FunctionTemplateId,
    ) == true
  ) {
    const strComparisonOpFunctionTemplateId: string =
      objCMProjectCond.dicFldComparisonOp[clsCMProjectEN.con_FunctionTemplateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMProjectEN.con_FunctionTemplateId,
      objCMProjectCond.functionTemplateId,
      strComparisonOpFunctionTemplateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectCond.dicFldComparisonOp,
      clsCMProjectEN.con_VueDesignSysId,
    ) == true
  ) {
    const strComparisonOpVueDesignSysId: string =
      objCMProjectCond.dicFldComparisonOp[clsCMProjectEN.con_VueDesignSysId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMProjectEN.con_VueDesignSysId,
      objCMProjectCond.vueDesignSysId,
      strComparisonOpVueDesignSysId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectCond.dicFldComparisonOp,
      clsCMProjectEN.con_IsFstLcase,
    ) == true
  ) {
    if (objCMProjectCond.isFstLcase == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMProjectEN.con_IsFstLcase);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMProjectEN.con_IsFstLcase);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectCond.dicFldComparisonOp,
      clsCMProjectEN.con_IsCamelCase,
    ) == true
  ) {
    if (objCMProjectCond.isCamelCase == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMProjectEN.con_IsCamelCase);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMProjectEN.con_IsCamelCase);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectCond.dicFldComparisonOp,
      clsCMProjectEN.con_ProjectFileName,
    ) == true
  ) {
    const strComparisonOpProjectFileName: string =
      objCMProjectCond.dicFldComparisonOp[clsCMProjectEN.con_ProjectFileName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMProjectEN.con_ProjectFileName,
      objCMProjectCond.projectFileName,
      strComparisonOpProjectFileName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectCond.dicFldComparisonOp,
      clsCMProjectEN.con_UseStateId,
    ) == true
  ) {
    const strComparisonOpUseStateId: string =
      objCMProjectCond.dicFldComparisonOp[clsCMProjectEN.con_UseStateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMProjectEN.con_UseStateId,
      objCMProjectCond.useStateId,
      strComparisonOpUseStateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectCond.dicFldComparisonOp,
      clsCMProjectEN.con_IsRefresh4RelaView,
    ) == true
  ) {
    if (objCMProjectCond.isRefresh4RelaView == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMProjectEN.con_IsRefresh4RelaView);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMProjectEN.con_IsRefresh4RelaView);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectCond.dicFldComparisonOp,
      clsCMProjectEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCMProjectCond.dicFldComparisonOp[clsCMProjectEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMProjectEN.con_UpdDate,
      objCMProjectCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectCond.dicFldComparisonOp,
      clsCMProjectEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objCMProjectCond.dicFldComparisonOp[clsCMProjectEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMProjectEN.con_UpdUserId,
      objCMProjectCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMProjectCond.dicFldComparisonOp,
      clsCMProjectEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCMProjectCond.dicFldComparisonOp[clsCMProjectEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMProjectEN.con_Memo,
      objCMProjectCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMProject(CM项目),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCmPrjName: CM工程名(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMProject_GetUniCondStr(objCMProjectEN: clsCMProjectEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CmPrjName = '{0}'", objCMProjectEN.cmPrjName);
  strWhereCond += Format(" and PrjId = '{0}'", objCMProjectEN.prjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMProject(CM项目),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCmPrjName: CM工程名(要求唯一的字段)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMProject_GetUniCondStr4Update(objCMProjectEN: clsCMProjectEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CmPrjId <> '{0}'", objCMProjectEN.cmPrjId);
  strWhereCond += Format(" and CmPrjName = '{0}'", objCMProjectEN.cmPrjName);
  strWhereCond += Format(" and PrjId = '{0}'", objCMProjectEN.prjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCMProjectENS:源对象
 * @param objCMProjectENT:目标对象
 */
export function CMProject_GetObjFromJsonObj(objCMProjectENS: clsCMProjectEN): clsCMProjectEN {
  const objCMProjectENT: clsCMProjectEN = new clsCMProjectEN();
  ObjectAssign(objCMProjectENT, objCMProjectENS);
  return objCMProjectENT;
}
