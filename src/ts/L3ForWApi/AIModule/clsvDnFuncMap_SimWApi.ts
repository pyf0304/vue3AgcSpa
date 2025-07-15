/**
 * 类名:clsvDnFuncMap_SimWApi
 * 表名:vDnFuncMap_Sim(00050625)
 * 版本:2024.10.22.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/26 10:03:58
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v结点函数映射_Sim(vDnFuncMap_Sim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年10月26日.
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
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvDnFuncMap_SimEN } from '@/ts/L0Entity/AIModule/clsvDnFuncMap_SimEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vDnFuncMap_Sim_Controller = 'vDnFuncMap_SimApi';
export const vDnFuncMap_Sim_ConstructorName = 'vDnFuncMap_Sim';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDnFuncMapId:关键字
 * @returns 对象
 **/
export async function vDnFuncMap_Sim_GetObjByDnFuncMapIdAsync(
  strDnFuncMapId: string,
): Promise<clsvDnFuncMap_SimEN | null> {
  const strThisFuncName = 'GetObjByDnFuncMapIdAsync';

  if (IsNullOrEmpty(strDnFuncMapId) == true) {
    const strMsg = Format(
      '参数:[strDnFuncMapId]不能为空!(In clsvDnFuncMap_SimWApi.GetObjByDnFuncMapIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDnFuncMapId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDnFuncMapId]的长度:[{0}]不正确!(clsvDnFuncMap_SimWApi.GetObjByDnFuncMapIdAsync)',
      strDnFuncMapId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDnFuncMapId';
  const strUrl = GetWebApiUrl(vDnFuncMap_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDnFuncMapId,
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
      const objvDnFuncMap_Sim = vDnFuncMap_Sim_GetObjFromJsonObj(returnObj);
      return objvDnFuncMap_Sim;
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
        vDnFuncMap_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_Sim_ConstructorName,
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
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strDnFuncMapId:所给的关键字
 * @returns 对象
 */
export async function vDnFuncMap_Sim_GetObjByDnFuncMapIdCache(
  strDnFuncMapId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDnFuncMapIdCache';

  if (IsNullOrEmpty(strDnFuncMapId) == true) {
    const strMsg = Format(
      '参数:[strDnFuncMapId]不能为空!(In clsvDnFuncMap_SimWApi.GetObjByDnFuncMapIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDnFuncMapId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDnFuncMapId]的长度:[{0}]不正确!(clsvDnFuncMap_SimWApi.GetObjByDnFuncMapIdCache)',
      strDnFuncMapId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvDnFuncMap_SimSel = arrvDnFuncMap_SimObjLstCache.filter(
      (x) => x.dnFuncMapId == strDnFuncMapId,
    );
    let objvDnFuncMap_Sim: clsvDnFuncMap_SimEN;
    if (arrvDnFuncMap_SimSel.length > 0) {
      objvDnFuncMap_Sim = arrvDnFuncMap_SimSel[0];
      return objvDnFuncMap_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvDnFuncMap_SimConst = await vDnFuncMap_Sim_GetObjByDnFuncMapIdAsync(
          strDnFuncMapId,
        );
        if (objvDnFuncMap_SimConst != null) {
          vDnFuncMap_Sim_ReFreshThisCache(strPrjId);
          return objvDnFuncMap_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDnFuncMapId,
      vDnFuncMap_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strDnFuncMapId:所给的关键字
 * @returns 对象
 */
export async function vDnFuncMap_Sim_GetObjByDnFuncMapIdlocalStorage(strDnFuncMapId: string) {
  const strThisFuncName = 'GetObjByDnFuncMapIdlocalStorage';

  if (IsNullOrEmpty(strDnFuncMapId) == true) {
    const strMsg = Format(
      '参数:[strDnFuncMapId]不能为空!(In clsvDnFuncMap_SimWApi.GetObjByDnFuncMapIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDnFuncMapId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDnFuncMapId]的长度:[{0}]不正确!(clsvDnFuncMap_SimWApi.GetObjByDnFuncMapIdlocalStorage)',
      strDnFuncMapId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvDnFuncMap_SimEN._CurrTabName, strDnFuncMapId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvDnFuncMap_SimCache: clsvDnFuncMap_SimEN = JSON.parse(strTempObj);
    return objvDnFuncMap_SimCache;
  }
  try {
    const objvDnFuncMap_Sim = await vDnFuncMap_Sim_GetObjByDnFuncMapIdAsync(strDnFuncMapId);
    if (objvDnFuncMap_Sim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvDnFuncMap_Sim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvDnFuncMap_Sim;
    }
    return objvDnFuncMap_Sim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDnFuncMapId,
      vDnFuncMap_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-10-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vDnFuncMap_Sim_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvDnFuncMap_SimWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvDnFuncMap_SimWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvDnFuncMap_SimEN.con_DnFuncMapId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvDnFuncMap_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvDnFuncMap_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strDnFuncMapId = strInValue;
  if (IsNullOrEmpty(strDnFuncMapId) == true) {
    return '';
  }
  const objvDnFuncMap_Sim = await vDnFuncMap_Sim_GetObjByDnFuncMapIdCache(
    strDnFuncMapId,
    strPrjIdClassfy,
  );
  if (objvDnFuncMap_Sim == null) return '';
  if (objvDnFuncMap_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvDnFuncMap_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-10-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vDnFuncMap_Sim_SortFunDefa(a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN): number {
  return a.dnFuncMapId.localeCompare(b.dnFuncMapId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-10-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vDnFuncMap_Sim_SortFunDefa2Fld(
  a: clsvDnFuncMap_SimEN,
  b: clsvDnFuncMap_SimEN,
): number {
  if (a.inDataNodeId == b.inDataNodeId) return a.outDataNodeId - b.outDataNodeId;
  else return a.inDataNodeId - b.inDataNodeId;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-10-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vDnFuncMap_Sim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvDnFuncMap_SimEN.con_DnFuncMapId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          return a.dnFuncMapId.localeCompare(b.dnFuncMapId);
        };
      case clsvDnFuncMap_SimEN.con_InDataNodeId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          return a.inDataNodeId - b.inDataNodeId;
        };
      case clsvDnFuncMap_SimEN.con_OutDataNodeId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          return a.outDataNodeId - b.outDataNodeId;
        };
      case clsvDnFuncMap_SimEN.con_AssociationMappingId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          if (a.associationMappingId == null) return -1;
          if (b.associationMappingId == null) return 1;
          return a.associationMappingId.localeCompare(b.associationMappingId);
        };
      case clsvDnFuncMap_SimEN.con_FuncMapModeId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          if (a.funcMapModeId == null) return -1;
          if (b.funcMapModeId == null) return 1;
          return a.funcMapModeId.localeCompare(b.funcMapModeId);
        };
      case clsvDnFuncMap_SimEN.con_TabId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsvDnFuncMap_SimEN.con_DnFunctionId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          if (a.dnFunctionId == null) return -1;
          if (b.dnFunctionId == null) return 1;
          return a.dnFunctionId.localeCompare(b.dnFunctionId);
        };
      case clsvDnFuncMap_SimEN.con_PrjId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvDnFuncMap_SimEN.con_UsedTimes:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          return a.usedTimes - b.usedTimes;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vDnFuncMap_Sim]中不存在!(in ${vDnFuncMap_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvDnFuncMap_SimEN.con_DnFuncMapId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          return b.dnFuncMapId.localeCompare(a.dnFuncMapId);
        };
      case clsvDnFuncMap_SimEN.con_InDataNodeId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          return b.inDataNodeId - a.inDataNodeId;
        };
      case clsvDnFuncMap_SimEN.con_OutDataNodeId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          return b.outDataNodeId - a.outDataNodeId;
        };
      case clsvDnFuncMap_SimEN.con_AssociationMappingId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          if (b.associationMappingId == null) return -1;
          if (a.associationMappingId == null) return 1;
          return b.associationMappingId.localeCompare(a.associationMappingId);
        };
      case clsvDnFuncMap_SimEN.con_FuncMapModeId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          if (b.funcMapModeId == null) return -1;
          if (a.funcMapModeId == null) return 1;
          return b.funcMapModeId.localeCompare(a.funcMapModeId);
        };
      case clsvDnFuncMap_SimEN.con_TabId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsvDnFuncMap_SimEN.con_DnFunctionId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          if (b.dnFunctionId == null) return -1;
          if (a.dnFunctionId == null) return 1;
          return b.dnFunctionId.localeCompare(a.dnFunctionId);
        };
      case clsvDnFuncMap_SimEN.con_PrjId:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvDnFuncMap_SimEN.con_UsedTimes:
        return (a: clsvDnFuncMap_SimEN, b: clsvDnFuncMap_SimEN) => {
          return b.usedTimes - a.usedTimes;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vDnFuncMap_Sim]中不存在!(in ${vDnFuncMap_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-10-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vDnFuncMap_Sim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvDnFuncMap_SimEN.con_DnFuncMapId:
      return (obj: clsvDnFuncMap_SimEN) => {
        return obj.dnFuncMapId === value;
      };
    case clsvDnFuncMap_SimEN.con_InDataNodeId:
      return (obj: clsvDnFuncMap_SimEN) => {
        return obj.inDataNodeId === value;
      };
    case clsvDnFuncMap_SimEN.con_OutDataNodeId:
      return (obj: clsvDnFuncMap_SimEN) => {
        return obj.outDataNodeId === value;
      };
    case clsvDnFuncMap_SimEN.con_AssociationMappingId:
      return (obj: clsvDnFuncMap_SimEN) => {
        return obj.associationMappingId === value;
      };
    case clsvDnFuncMap_SimEN.con_FuncMapModeId:
      return (obj: clsvDnFuncMap_SimEN) => {
        return obj.funcMapModeId === value;
      };
    case clsvDnFuncMap_SimEN.con_TabId:
      return (obj: clsvDnFuncMap_SimEN) => {
        return obj.tabId === value;
      };
    case clsvDnFuncMap_SimEN.con_DnFunctionId:
      return (obj: clsvDnFuncMap_SimEN) => {
        return obj.dnFunctionId === value;
      };
    case clsvDnFuncMap_SimEN.con_PrjId:
      return (obj: clsvDnFuncMap_SimEN) => {
        return obj.prjId === value;
      };
    case clsvDnFuncMap_SimEN.con_UsedTimes:
      return (obj: clsvDnFuncMap_SimEN) => {
        return obj.usedTimes === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vDnFuncMap_Sim]中不存在!(in ${vDnFuncMap_Sim_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-10-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vDnFuncMap_Sim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvDnFuncMap_SimWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvDnFuncMap_SimWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvDnFuncMap_SimEN.con_DnFuncMapId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvDnFuncMap_Sim = await vDnFuncMap_Sim_GetObjLstCache(strPrjIdClassfy);
  if (arrvDnFuncMap_Sim == null) return [];
  let arrvDnFuncMap_SimSel = arrvDnFuncMap_Sim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvDnFuncMap_SimSel.length == 0) return [];
  return arrvDnFuncMap_SimSel.map((x) => x.dnFuncMapId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vDnFuncMap_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vDnFuncMap_Sim_Controller, strAction);

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
        vDnFuncMap_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_Sim_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vDnFuncMap_Sim_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vDnFuncMap_Sim_Controller, strAction);

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
        vDnFuncMap_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_Sim_ConstructorName,
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
export async function vDnFuncMap_Sim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vDnFuncMap_Sim_Controller, strAction);

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
        vDnFuncMap_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_Sim_ConstructorName,
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
export async function vDnFuncMap_Sim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvDnFuncMap_SimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vDnFuncMap_Sim_Controller, strAction);

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
      const objvDnFuncMap_Sim = vDnFuncMap_Sim_GetObjFromJsonObj(returnObj);
      return objvDnFuncMap_Sim;
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
        vDnFuncMap_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_Sim_ConstructorName,
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
export async function vDnFuncMap_Sim_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvDnFuncMap_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvDnFuncMap_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvDnFuncMap_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvDnFuncMap_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvDnFuncMap_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvDnFuncMap_SimExObjLstCache: Array<clsvDnFuncMap_SimEN> = CacheHelper.Get(strKey);
    const arrvDnFuncMap_SimObjLstT = vDnFuncMap_Sim_GetObjLstByJSONObjLst(
      arrvDnFuncMap_SimExObjLstCache,
    );
    return arrvDnFuncMap_SimObjLstT;
  }
  try {
    const arrvDnFuncMap_SimExObjLst = await vDnFuncMap_Sim_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvDnFuncMap_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvDnFuncMap_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvDnFuncMap_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vDnFuncMap_Sim_ConstructorName,
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
export async function vDnFuncMap_Sim_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvDnFuncMap_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvDnFuncMap_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvDnFuncMap_SimEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvDnFuncMap_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvDnFuncMap_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvDnFuncMap_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvDnFuncMap_SimExObjLstCache: Array<clsvDnFuncMap_SimEN> = JSON.parse(strTempObjLst);
    const arrvDnFuncMap_SimObjLstT = vDnFuncMap_Sim_GetObjLstByJSONObjLst(
      arrvDnFuncMap_SimExObjLstCache,
    );
    return arrvDnFuncMap_SimObjLstT;
  }
  try {
    const arrvDnFuncMap_SimExObjLst = await vDnFuncMap_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvDnFuncMap_SimEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvDnFuncMap_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvDnFuncMap_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvDnFuncMap_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vDnFuncMap_Sim_ConstructorName,
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
export async function vDnFuncMap_Sim_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvDnFuncMap_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvDnFuncMap_SimObjLstCache: Array<clsvDnFuncMap_SimEN> = JSON.parse(strTempObjLst);
    return arrvDnFuncMap_SimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vDnFuncMap_Sim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvDnFuncMap_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vDnFuncMap_Sim_Controller, strAction);

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
          vDnFuncMap_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDnFuncMap_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vDnFuncMap_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_Sim_ConstructorName,
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
export async function vDnFuncMap_Sim_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvDnFuncMap_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvDnFuncMap_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvDnFuncMap_SimEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvDnFuncMap_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvDnFuncMap_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvDnFuncMap_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvDnFuncMap_SimExObjLstCache: Array<clsvDnFuncMap_SimEN> = JSON.parse(strTempObjLst);
    const arrvDnFuncMap_SimObjLstT = vDnFuncMap_Sim_GetObjLstByJSONObjLst(
      arrvDnFuncMap_SimExObjLstCache,
    );
    return arrvDnFuncMap_SimObjLstT;
  }
  try {
    const arrvDnFuncMap_SimExObjLst = await vDnFuncMap_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvDnFuncMap_SimEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvDnFuncMap_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvDnFuncMap_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvDnFuncMap_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vDnFuncMap_Sim_ConstructorName,
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
export async function vDnFuncMap_Sim_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvDnFuncMap_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvDnFuncMap_SimObjLstCache: Array<clsvDnFuncMap_SimEN> = JSON.parse(strTempObjLst);
    return arrvDnFuncMap_SimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vDnFuncMap_Sim_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvDnFuncMap_SimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvDnFuncMap_SimWApi.vDnFuncMap_Sim_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvDnFuncMap_SimWApi.vDnFuncMap_Sim_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvDnFuncMap_SimObjLstCache;
  switch (clsvDnFuncMap_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrvDnFuncMap_SimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vDnFuncMap_Sim_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvDnFuncMap_SimObjLstCache;
  switch (clsvDnFuncMap_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstsessionStoragePureCache(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrvDnFuncMap_SimObjLstCache = null;
      break;
    default:
      arrvDnFuncMap_SimObjLstCache = null;
      break;
  }
  return arrvDnFuncMap_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrDnFuncMapIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vDnFuncMap_Sim_GetSubObjLstCache(
  objvDnFuncMap_SimCond: clsvDnFuncMap_SimEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstCache(strPrjId);
  let arrvDnFuncMap_SimSel = arrvDnFuncMap_SimObjLstCache;
  if (
    objvDnFuncMap_SimCond.sfFldComparisonOp == null ||
    objvDnFuncMap_SimCond.sfFldComparisonOp == ''
  )
    return arrvDnFuncMap_SimSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvDnFuncMap_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvDnFuncMap_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvDnFuncMap_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvDnFuncMap_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvDnFuncMap_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvDnFuncMap_SimCond),
      vDnFuncMap_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvDnFuncMap_SimEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDnFuncMapId:关键字列表
 * @returns 对象列表
 **/
export async function vDnFuncMap_Sim_GetObjLstByDnFuncMapIdLstAsync(
  arrDnFuncMapId: Array<string>,
): Promise<Array<clsvDnFuncMap_SimEN>> {
  const strThisFuncName = 'GetObjLstByDnFuncMapIdLstAsync';
  const strAction = 'GetObjLstByDnFuncMapIdLst';
  const strUrl = GetWebApiUrl(vDnFuncMap_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDnFuncMapId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vDnFuncMap_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDnFuncMap_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vDnFuncMap_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_Sim_ConstructorName,
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
 * @param arrstrDnFuncMapIdLst:关键字列表
 * @returns 对象列表
 */
export async function vDnFuncMap_Sim_GetObjLstByDnFuncMapIdLstCache(
  arrDnFuncMapIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByDnFuncMapIdLstCache';
  try {
    const arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstCache(strPrjId);
    const arrvDnFuncMap_SimSel = arrvDnFuncMap_SimObjLstCache.filter(
      (x) => arrDnFuncMapIdLst.indexOf(x.dnFuncMapId) > -1,
    );
    return arrvDnFuncMap_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrDnFuncMapIdLst.join(','),
      vDnFuncMap_Sim_ConstructorName,
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
export async function vDnFuncMap_Sim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvDnFuncMap_SimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vDnFuncMap_Sim_Controller, strAction);

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
          vDnFuncMap_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDnFuncMap_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vDnFuncMap_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_Sim_ConstructorName,
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
export async function vDnFuncMap_Sim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvDnFuncMap_SimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vDnFuncMap_Sim_Controller, strAction);

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
          vDnFuncMap_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDnFuncMap_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vDnFuncMap_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_Sim_ConstructorName,
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
export async function vDnFuncMap_Sim_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvDnFuncMap_SimEN>();
  const arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstCache(strPrjId);
  if (arrvDnFuncMap_SimObjLstCache.length == 0) return arrvDnFuncMap_SimObjLstCache;
  let arrvDnFuncMap_SimSel = arrvDnFuncMap_SimObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvDnFuncMap_SimCond = new clsvDnFuncMap_SimEN();
  ObjectAssign(objvDnFuncMap_SimCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvDnFuncMap_SimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvDnFuncMap_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvDnFuncMap_SimSel.length == 0) return arrvDnFuncMap_SimSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.sort(
        vDnFuncMap_Sim_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.sort(objPagerPara.sortFun);
    }
    arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.slice(intStart, intEnd);
    return arrvDnFuncMap_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vDnFuncMap_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvDnFuncMap_SimEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vDnFuncMap_Sim_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvDnFuncMap_SimEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvDnFuncMap_SimEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vDnFuncMap_Sim_Controller, strAction);

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
          vDnFuncMap_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDnFuncMap_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vDnFuncMap_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_Sim_ConstructorName,
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
 * @param objstrDnFuncMapIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vDnFuncMap_Sim_IsExistRecordCache(
  objvDnFuncMap_SimCond: clsvDnFuncMap_SimEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstCache(strPrjId);
  if (arrvDnFuncMap_SimObjLstCache == null) return false;
  let arrvDnFuncMap_SimSel = arrvDnFuncMap_SimObjLstCache;
  if (
    objvDnFuncMap_SimCond.sfFldComparisonOp == null ||
    objvDnFuncMap_SimCond.sfFldComparisonOp == ''
  )
    return arrvDnFuncMap_SimSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvDnFuncMap_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvDnFuncMap_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvDnFuncMap_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvDnFuncMap_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvDnFuncMap_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvDnFuncMap_SimCond),
      vDnFuncMap_Sim_ConstructorName,
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
export async function vDnFuncMap_Sim_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vDnFuncMap_Sim_Controller, strAction);

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
        vDnFuncMap_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_Sim_ConstructorName,
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
 * @param strDnFuncMapId:所给的关键字
 * @returns 对象
 */
export async function vDnFuncMap_Sim_IsExistCache(strDnFuncMapId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstCache(strPrjId);
  if (arrvDnFuncMap_SimObjLstCache == null) return false;
  try {
    const arrvDnFuncMap_SimSel = arrvDnFuncMap_SimObjLstCache.filter(
      (x) => x.dnFuncMapId == strDnFuncMapId,
    );
    if (arrvDnFuncMap_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strDnFuncMapId,
      vDnFuncMap_Sim_ConstructorName,
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
 * @param strDnFuncMapId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vDnFuncMap_Sim_IsExistAsync(strDnFuncMapId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vDnFuncMap_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDnFuncMapId,
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
        vDnFuncMap_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_Sim_ConstructorName,
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
export async function vDnFuncMap_Sim_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vDnFuncMap_Sim_Controller, strAction);

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
        vDnFuncMap_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnFuncMap_Sim_ConstructorName,
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
 * @param objvDnFuncMap_SimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vDnFuncMap_Sim_GetRecCountByCondCache(
  objvDnFuncMap_SimCond: clsvDnFuncMap_SimEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvDnFuncMap_SimObjLstCache = await vDnFuncMap_Sim_GetObjLstCache(strPrjId);
  if (arrvDnFuncMap_SimObjLstCache == null) return 0;
  let arrvDnFuncMap_SimSel = arrvDnFuncMap_SimObjLstCache;
  if (
    objvDnFuncMap_SimCond.sfFldComparisonOp == null ||
    objvDnFuncMap_SimCond.sfFldComparisonOp == ''
  )
    return arrvDnFuncMap_SimSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvDnFuncMap_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvDnFuncMap_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvDnFuncMap_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvDnFuncMap_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvDnFuncMap_SimSel = arrvDnFuncMap_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvDnFuncMap_SimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvDnFuncMap_SimCond),
      vDnFuncMap_Sim_ConstructorName,
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
export function vDnFuncMap_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vDnFuncMap_Sim_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsvDnFuncMap_SimWApi.vDnFuncMap_Sim_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsvDnFuncMap_SimWApi.vDnFuncMap_Sim_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvDnFuncMap_SimEN._CurrTabName, strPrjId);
    switch (clsvDnFuncMap_SimEN.CacheModeId) {
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
    clsvDnFuncMap_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function vDnFuncMap_Sim_GetLastRefreshTime(): string {
  if (clsvDnFuncMap_SimEN._RefreshTimeLst.length == 0) return '';
  return clsvDnFuncMap_SimEN._RefreshTimeLst[clsvDnFuncMap_SimEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-10-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vDnFuncMap_Sim_GetJSONStrByObj(pobjvDnFuncMap_SimEN: clsvDnFuncMap_SimEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvDnFuncMap_SimEN);
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
 * 日期:2024-10-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vDnFuncMap_Sim_GetObjLstByJSONStr(strJSON: string): Array<clsvDnFuncMap_SimEN> {
  let arrvDnFuncMap_SimObjLst = new Array<clsvDnFuncMap_SimEN>();
  if (strJSON === '') {
    return arrvDnFuncMap_SimObjLst;
  }
  try {
    arrvDnFuncMap_SimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvDnFuncMap_SimObjLst;
  }
  return arrvDnFuncMap_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-10-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvDnFuncMap_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vDnFuncMap_Sim_GetObjLstByJSONObjLst(
  arrvDnFuncMap_SimObjLstS: Array<clsvDnFuncMap_SimEN>,
): Array<clsvDnFuncMap_SimEN> {
  const arrvDnFuncMap_SimObjLst = new Array<clsvDnFuncMap_SimEN>();
  for (const objInFor of arrvDnFuncMap_SimObjLstS) {
    const obj1 = vDnFuncMap_Sim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvDnFuncMap_SimObjLst.push(obj1);
  }
  return arrvDnFuncMap_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-10-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vDnFuncMap_Sim_GetObjByJSONStr(strJSON: string): clsvDnFuncMap_SimEN {
  let pobjvDnFuncMap_SimEN = new clsvDnFuncMap_SimEN();
  if (strJSON === '') {
    return pobjvDnFuncMap_SimEN;
  }
  try {
    pobjvDnFuncMap_SimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvDnFuncMap_SimEN;
  }
  return pobjvDnFuncMap_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vDnFuncMap_Sim_GetCombineCondition(
  objvDnFuncMap_SimCond: clsvDnFuncMap_SimEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMap_SimCond.dicFldComparisonOp,
      clsvDnFuncMap_SimEN.con_DnFuncMapId,
    ) == true
  ) {
    const strComparisonOpDnFuncMapId: string =
      objvDnFuncMap_SimCond.dicFldComparisonOp[clsvDnFuncMap_SimEN.con_DnFuncMapId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMap_SimEN.con_DnFuncMapId,
      objvDnFuncMap_SimCond.dnFuncMapId,
      strComparisonOpDnFuncMapId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMap_SimCond.dicFldComparisonOp,
      clsvDnFuncMap_SimEN.con_InDataNodeId,
    ) == true
  ) {
    const strComparisonOpInDataNodeId: string =
      objvDnFuncMap_SimCond.dicFldComparisonOp[clsvDnFuncMap_SimEN.con_InDataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvDnFuncMap_SimEN.con_InDataNodeId,
      objvDnFuncMap_SimCond.inDataNodeId,
      strComparisonOpInDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMap_SimCond.dicFldComparisonOp,
      clsvDnFuncMap_SimEN.con_OutDataNodeId,
    ) == true
  ) {
    const strComparisonOpOutDataNodeId: string =
      objvDnFuncMap_SimCond.dicFldComparisonOp[clsvDnFuncMap_SimEN.con_OutDataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvDnFuncMap_SimEN.con_OutDataNodeId,
      objvDnFuncMap_SimCond.outDataNodeId,
      strComparisonOpOutDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMap_SimCond.dicFldComparisonOp,
      clsvDnFuncMap_SimEN.con_AssociationMappingId,
    ) == true
  ) {
    const strComparisonOpAssociationMappingId: string =
      objvDnFuncMap_SimCond.dicFldComparisonOp[clsvDnFuncMap_SimEN.con_AssociationMappingId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMap_SimEN.con_AssociationMappingId,
      objvDnFuncMap_SimCond.associationMappingId,
      strComparisonOpAssociationMappingId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMap_SimCond.dicFldComparisonOp,
      clsvDnFuncMap_SimEN.con_FuncMapModeId,
    ) == true
  ) {
    const strComparisonOpFuncMapModeId: string =
      objvDnFuncMap_SimCond.dicFldComparisonOp[clsvDnFuncMap_SimEN.con_FuncMapModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMap_SimEN.con_FuncMapModeId,
      objvDnFuncMap_SimCond.funcMapModeId,
      strComparisonOpFuncMapModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMap_SimCond.dicFldComparisonOp,
      clsvDnFuncMap_SimEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objvDnFuncMap_SimCond.dicFldComparisonOp[clsvDnFuncMap_SimEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMap_SimEN.con_TabId,
      objvDnFuncMap_SimCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMap_SimCond.dicFldComparisonOp,
      clsvDnFuncMap_SimEN.con_DnFunctionId,
    ) == true
  ) {
    const strComparisonOpDnFunctionId: string =
      objvDnFuncMap_SimCond.dicFldComparisonOp[clsvDnFuncMap_SimEN.con_DnFunctionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMap_SimEN.con_DnFunctionId,
      objvDnFuncMap_SimCond.dnFunctionId,
      strComparisonOpDnFunctionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMap_SimCond.dicFldComparisonOp,
      clsvDnFuncMap_SimEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvDnFuncMap_SimCond.dicFldComparisonOp[clsvDnFuncMap_SimEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnFuncMap_SimEN.con_PrjId,
      objvDnFuncMap_SimCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnFuncMap_SimCond.dicFldComparisonOp,
      clsvDnFuncMap_SimEN.con_UsedTimes,
    ) == true
  ) {
    const strComparisonOpUsedTimes: string =
      objvDnFuncMap_SimCond.dicFldComparisonOp[clsvDnFuncMap_SimEN.con_UsedTimes];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvDnFuncMap_SimEN.con_UsedTimes,
      objvDnFuncMap_SimCond.usedTimes,
      strComparisonOpUsedTimes,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvDnFuncMap_SimENS:源对象
 * @param objvDnFuncMap_SimENT:目标对象
 */
export function vDnFuncMap_Sim_GetObjFromJsonObj(
  objvDnFuncMap_SimENS: clsvDnFuncMap_SimEN,
): clsvDnFuncMap_SimEN {
  const objvDnFuncMap_SimENT: clsvDnFuncMap_SimEN = new clsvDnFuncMap_SimEN();
  ObjectAssign(objvDnFuncMap_SimENT, objvDnFuncMap_SimENS);
  return objvDnFuncMap_SimENT;
}
