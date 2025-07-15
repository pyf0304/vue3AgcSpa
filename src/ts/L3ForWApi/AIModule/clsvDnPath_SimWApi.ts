/**
 * 类名:clsvDnPath_SimWApi
 * 表名:vDnPath_Sim(00050603)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/04 16:01:14
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:AI模块(AIModule)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vDnPath_Sim(vDnPath_Sim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月04日.
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
import {
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvDnPath_SimEN } from '@/ts/L0Entity/AIModule/clsvDnPath_SimEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vDnPath_Sim_Controller = 'vDnPath_SimApi';
export const vDnPath_Sim_ConstructorName = 'vDnPath_Sim';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDnPathId:关键字
 * @returns 对象
 **/
export async function vDnPath_Sim_GetObjByDnPathIdAsync(
  strDnPathId: string,
): Promise<clsvDnPath_SimEN | null> {
  const strThisFuncName = 'GetObjByDnPathIdAsync';

  if (IsNullOrEmpty(strDnPathId) == true) {
    const strMsg = Format(
      '参数:[strDnPathId]不能为空!(In clsvDnPath_SimWApi.GetObjByDnPathIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDnPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDnPathId]的长度:[{0}]不正确!(clsvDnPath_SimWApi.GetObjByDnPathIdAsync)',
      strDnPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDnPathId';
  const strUrl = GetWebApiUrl(vDnPath_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDnPathId,
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
      const objvDnPath_Sim = vDnPath_Sim_GetObjFromJsonObj(returnObj);
      return objvDnPath_Sim;
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
        vDnPath_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnPath_Sim_ConstructorName,
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
 * @param strDnPathId:所给的关键字
 * @returns 对象
 */
export async function vDnPath_Sim_GetObjByDnPathIdlocalStorage(strDnPathId: string) {
  const strThisFuncName = 'GetObjByDnPathIdlocalStorage';

  if (IsNullOrEmpty(strDnPathId) == true) {
    const strMsg = Format(
      '参数:[strDnPathId]不能为空!(In clsvDnPath_SimWApi.GetObjByDnPathIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDnPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDnPathId]的长度:[{0}]不正确!(clsvDnPath_SimWApi.GetObjByDnPathIdlocalStorage)',
      strDnPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvDnPath_SimEN._CurrTabName, strDnPathId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvDnPath_SimCache: clsvDnPath_SimEN = JSON.parse(strTempObj);
    return objvDnPath_SimCache;
  }
  try {
    const objvDnPath_Sim = await vDnPath_Sim_GetObjByDnPathIdAsync(strDnPathId);
    if (objvDnPath_Sim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvDnPath_Sim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvDnPath_Sim;
    }
    return objvDnPath_Sim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDnPathId,
      vDnPath_Sim_ConstructorName,
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
 * @param strDnPathId:所给的关键字
 * @returns 对象
 */
export async function vDnPath_Sim_GetObjByDnPathIdCache(
  strDnPathId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDnPathIdCache';

  if (IsNullOrEmpty(strDnPathId) == true) {
    const strMsg = Format(
      '参数:[strDnPathId]不能为空!(In clsvDnPath_SimWApi.GetObjByDnPathIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDnPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDnPathId]的长度:[{0}]不正确!(clsvDnPath_SimWApi.GetObjByDnPathIdCache)',
      strDnPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvDnPath_SimObjLstCache = await vDnPath_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvDnPath_SimSel = arrvDnPath_SimObjLstCache.filter((x) => x.dnPathId == strDnPathId);
    let objvDnPath_Sim: clsvDnPath_SimEN;
    if (arrvDnPath_SimSel.length > 0) {
      objvDnPath_Sim = arrvDnPath_SimSel[0];
      return objvDnPath_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvDnPath_SimConst = await vDnPath_Sim_GetObjByDnPathIdAsync(strDnPathId);
        if (objvDnPath_SimConst != null) {
          vDnPath_Sim_ReFreshThisCache(strPrjId);
          return objvDnPath_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDnPathId,
      vDnPath_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vDnPath_Sim_SortFunDefa(a: clsvDnPath_SimEN, b: clsvDnPath_SimEN): number {
  return a.dnPathId.localeCompare(b.dnPathId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vDnPath_Sim_SortFunDefa2Fld(a: clsvDnPath_SimEN, b: clsvDnPath_SimEN): number {
  if (a.dnPathName == b.dnPathName) return a.inDataNodeId - b.inDataNodeId;
  else return a.dnPathName.localeCompare(b.dnPathName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vDnPath_Sim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvDnPath_SimEN.con_DnPathId:
        return (a: clsvDnPath_SimEN, b: clsvDnPath_SimEN) => {
          return a.dnPathId.localeCompare(b.dnPathId);
        };
      case clsvDnPath_SimEN.con_DnPathName:
        return (a: clsvDnPath_SimEN, b: clsvDnPath_SimEN) => {
          return a.dnPathName.localeCompare(b.dnPathName);
        };
      case clsvDnPath_SimEN.con_InDataNodeId:
        return (a: clsvDnPath_SimEN, b: clsvDnPath_SimEN) => {
          return a.inDataNodeId - b.inDataNodeId;
        };
      case clsvDnPath_SimEN.con_OutDataNodeId:
        return (a: clsvDnPath_SimEN, b: clsvDnPath_SimEN) => {
          return a.outDataNodeId - b.outDataNodeId;
        };
      case clsvDnPath_SimEN.con_DnPathNodeLst:
        return (a: clsvDnPath_SimEN, b: clsvDnPath_SimEN) => {
          return a.dnPathNodeLst.localeCompare(b.dnPathNodeLst);
        };
      case clsvDnPath_SimEN.con_PrjId:
        return (a: clsvDnPath_SimEN, b: clsvDnPath_SimEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vDnPath_Sim]中不存在!(in ${vDnPath_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvDnPath_SimEN.con_DnPathId:
        return (a: clsvDnPath_SimEN, b: clsvDnPath_SimEN) => {
          return b.dnPathId.localeCompare(a.dnPathId);
        };
      case clsvDnPath_SimEN.con_DnPathName:
        return (a: clsvDnPath_SimEN, b: clsvDnPath_SimEN) => {
          return b.dnPathName.localeCompare(a.dnPathName);
        };
      case clsvDnPath_SimEN.con_InDataNodeId:
        return (a: clsvDnPath_SimEN, b: clsvDnPath_SimEN) => {
          return b.inDataNodeId - a.inDataNodeId;
        };
      case clsvDnPath_SimEN.con_OutDataNodeId:
        return (a: clsvDnPath_SimEN, b: clsvDnPath_SimEN) => {
          return b.outDataNodeId - a.outDataNodeId;
        };
      case clsvDnPath_SimEN.con_DnPathNodeLst:
        return (a: clsvDnPath_SimEN, b: clsvDnPath_SimEN) => {
          return b.dnPathNodeLst.localeCompare(a.dnPathNodeLst);
        };
      case clsvDnPath_SimEN.con_PrjId:
        return (a: clsvDnPath_SimEN, b: clsvDnPath_SimEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vDnPath_Sim]中不存在!(in ${vDnPath_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strDnPathId:所给的关键字
 * @returns 对象
 */
export async function vDnPath_Sim_GetNameByDnPathIdCache(strDnPathId: string, strPrjId: string) {
  if (IsNullOrEmpty(strDnPathId) == true) {
    const strMsg = Format(
      '参数:[strDnPathId]不能为空!(In clsvDnPath_SimWApi.GetNameByDnPathIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDnPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDnPathId]的长度:[{0}]不正确!(clsvDnPath_SimWApi.GetNameByDnPathIdCache)',
      strDnPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvDnPath_SimObjLstCache = await vDnPath_Sim_GetObjLstCache(strPrjId);
  if (arrvDnPath_SimObjLstCache == null) return '';
  try {
    const arrvDnPath_SimSel = arrvDnPath_SimObjLstCache.filter((x) => x.dnPathId == strDnPathId);
    let objvDnPath_Sim: clsvDnPath_SimEN;
    if (arrvDnPath_SimSel.length > 0) {
      objvDnPath_Sim = arrvDnPath_SimSel[0];
      return objvDnPath_Sim.dnPathName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strDnPathId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vDnPath_Sim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvDnPath_SimEN.con_DnPathId:
      return (obj: clsvDnPath_SimEN) => {
        return obj.dnPathId === value;
      };
    case clsvDnPath_SimEN.con_DnPathName:
      return (obj: clsvDnPath_SimEN) => {
        return obj.dnPathName === value;
      };
    case clsvDnPath_SimEN.con_InDataNodeId:
      return (obj: clsvDnPath_SimEN) => {
        return obj.inDataNodeId === value;
      };
    case clsvDnPath_SimEN.con_OutDataNodeId:
      return (obj: clsvDnPath_SimEN) => {
        return obj.outDataNodeId === value;
      };
    case clsvDnPath_SimEN.con_DnPathNodeLst:
      return (obj: clsvDnPath_SimEN) => {
        return obj.dnPathNodeLst === value;
      };
    case clsvDnPath_SimEN.con_PrjId:
      return (obj: clsvDnPath_SimEN) => {
        return obj.prjId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vDnPath_Sim]中不存在!(in ${vDnPath_Sim_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vDnPath_Sim_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvDnPath_SimWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvDnPath_SimWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvDnPath_SimEN.con_DnPathId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvDnPath_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvDnPath_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strDnPathId = strInValue;
  if (IsNullOrEmpty(strDnPathId) == true) {
    return '';
  }
  const objvDnPath_Sim = await vDnPath_Sim_GetObjByDnPathIdCache(strDnPathId, strPrjIdClassfy);
  if (objvDnPath_Sim == null) return '';
  if (objvDnPath_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvDnPath_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vDnPath_Sim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvDnPath_SimWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvDnPath_SimWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvDnPath_SimEN.con_DnPathId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvDnPath_Sim = await vDnPath_Sim_GetObjLstCache(strPrjIdClassfy);
  if (arrvDnPath_Sim == null) return [];
  let arrvDnPath_SimSel = arrvDnPath_Sim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvDnPath_SimSel.length == 0) return [];
  return arrvDnPath_SimSel.map((x) => x.dnPathId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vDnPath_Sim_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vDnPath_Sim_Controller, strAction);

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
        vDnPath_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnPath_Sim_ConstructorName,
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
export async function vDnPath_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vDnPath_Sim_Controller, strAction);

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
        vDnPath_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnPath_Sim_ConstructorName,
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
export async function vDnPath_Sim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vDnPath_Sim_Controller, strAction);

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
        vDnPath_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnPath_Sim_ConstructorName,
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
export async function vDnPath_Sim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvDnPath_SimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vDnPath_Sim_Controller, strAction);

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
      const objvDnPath_Sim = vDnPath_Sim_GetObjFromJsonObj(returnObj);
      return objvDnPath_Sim;
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
        vDnPath_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnPath_Sim_ConstructorName,
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
export async function vDnPath_Sim_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvDnPath_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvDnPath_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvDnPath_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvDnPath_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvDnPath_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvDnPath_SimExObjLstCache: Array<clsvDnPath_SimEN> = CacheHelper.Get(strKey);
    const arrvDnPath_SimObjLstT = vDnPath_Sim_GetObjLstByJSONObjLst(arrvDnPath_SimExObjLstCache);
    return arrvDnPath_SimObjLstT;
  }
  try {
    const arrvDnPath_SimExObjLst = await vDnPath_Sim_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvDnPath_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvDnPath_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvDnPath_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vDnPath_Sim_ConstructorName,
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
export async function vDnPath_Sim_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvDnPath_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvDnPath_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvDnPath_SimEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvDnPath_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvDnPath_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvDnPath_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvDnPath_SimExObjLstCache: Array<clsvDnPath_SimEN> = JSON.parse(strTempObjLst);
    const arrvDnPath_SimObjLstT = vDnPath_Sim_GetObjLstByJSONObjLst(arrvDnPath_SimExObjLstCache);
    return arrvDnPath_SimObjLstT;
  }
  try {
    const arrvDnPath_SimExObjLst = await vDnPath_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvDnPath_SimEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvDnPath_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvDnPath_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvDnPath_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vDnPath_Sim_ConstructorName,
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
export async function vDnPath_Sim_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvDnPath_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvDnPath_SimObjLstCache: Array<clsvDnPath_SimEN> = JSON.parse(strTempObjLst);
    return arrvDnPath_SimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vDnPath_Sim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvDnPath_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vDnPath_Sim_Controller, strAction);

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
          vDnPath_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDnPath_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vDnPath_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnPath_Sim_ConstructorName,
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
export async function vDnPath_Sim_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvDnPath_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvDnPath_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvDnPath_SimEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvDnPath_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvDnPath_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvDnPath_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvDnPath_SimExObjLstCache: Array<clsvDnPath_SimEN> = JSON.parse(strTempObjLst);
    const arrvDnPath_SimObjLstT = vDnPath_Sim_GetObjLstByJSONObjLst(arrvDnPath_SimExObjLstCache);
    return arrvDnPath_SimObjLstT;
  }
  try {
    const arrvDnPath_SimExObjLst = await vDnPath_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvDnPath_SimEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvDnPath_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvDnPath_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvDnPath_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vDnPath_Sim_ConstructorName,
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
export async function vDnPath_Sim_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvDnPath_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvDnPath_SimObjLstCache: Array<clsvDnPath_SimEN> = JSON.parse(strTempObjLst);
    return arrvDnPath_SimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vDnPath_Sim_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvDnPath_SimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvDnPath_SimWApi.vDnPath_Sim_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvDnPath_SimWApi.vDnPath_Sim_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvDnPath_SimObjLstCache;
  switch (clsvDnPath_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvDnPath_SimObjLstCache = await vDnPath_Sim_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrvDnPath_SimObjLstCache = await vDnPath_Sim_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrvDnPath_SimObjLstCache = await vDnPath_Sim_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrvDnPath_SimObjLstCache = await vDnPath_Sim_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrvDnPath_SimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vDnPath_Sim_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvDnPath_SimObjLstCache;
  switch (clsvDnPath_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvDnPath_SimObjLstCache = await vDnPath_Sim_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrvDnPath_SimObjLstCache = await vDnPath_Sim_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrvDnPath_SimObjLstCache = null;
      break;
    default:
      arrvDnPath_SimObjLstCache = null;
      break;
  }
  return arrvDnPath_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrDnPathIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vDnPath_Sim_GetSubObjLstCache(
  objvDnPath_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvDnPath_SimObjLstCache = await vDnPath_Sim_GetObjLstCache(strPrjId);
  let arrvDnPath_SimSel = arrvDnPath_SimObjLstCache;
  if (objvDnPath_SimCond.GetConditions().length == 0) return arrvDnPath_SimSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objvDnPath_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvDnPath_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvDnPath_SimCond),
      vDnPath_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvDnPath_SimEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDnPathId:关键字列表
 * @returns 对象列表
 **/
export async function vDnPath_Sim_GetObjLstByDnPathIdLstAsync(
  arrDnPathId: Array<string>,
): Promise<Array<clsvDnPath_SimEN>> {
  const strThisFuncName = 'GetObjLstByDnPathIdLstAsync';
  const strAction = 'GetObjLstByDnPathIdLst';
  const strUrl = GetWebApiUrl(vDnPath_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDnPathId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vDnPath_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDnPath_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vDnPath_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnPath_Sim_ConstructorName,
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
 * @param arrstrDnPathIdLst:关键字列表
 * @returns 对象列表
 */
export async function vDnPath_Sim_GetObjLstByDnPathIdLstCache(
  arrDnPathIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByDnPathIdLstCache';
  try {
    const arrvDnPath_SimObjLstCache = await vDnPath_Sim_GetObjLstCache(strPrjId);
    const arrvDnPath_SimSel = arrvDnPath_SimObjLstCache.filter(
      (x) => arrDnPathIdLst.indexOf(x.dnPathId) > -1,
    );
    return arrvDnPath_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrDnPathIdLst.join(','),
      vDnPath_Sim_ConstructorName,
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
export async function vDnPath_Sim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvDnPath_SimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vDnPath_Sim_Controller, strAction);

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
          vDnPath_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDnPath_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vDnPath_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnPath_Sim_ConstructorName,
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
export async function vDnPath_Sim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvDnPath_SimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vDnPath_Sim_Controller, strAction);

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
          vDnPath_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDnPath_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vDnPath_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnPath_Sim_ConstructorName,
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
export async function vDnPath_Sim_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvDnPath_SimEN>();
  const arrvDnPath_SimObjLstCache = await vDnPath_Sim_GetObjLstCache(strPrjId);
  if (arrvDnPath_SimObjLstCache.length == 0) return arrvDnPath_SimObjLstCache;
  let arrvDnPath_SimSel = arrvDnPath_SimObjLstCache;
  const objvDnPath_SimCond = objPagerPara.conditionCollection;
  if (objvDnPath_SimCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsvDnPath_SimEN>();
  }
  //console.log("clsvDnPath_SimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objvDnPath_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvDnPath_SimSel.length == 0) return arrvDnPath_SimSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvDnPath_SimSel = arrvDnPath_SimSel.sort(vDnPath_Sim_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvDnPath_SimSel = arrvDnPath_SimSel.sort(objPagerPara.sortFun);
    }
    arrvDnPath_SimSel = arrvDnPath_SimSel.slice(intStart, intEnd);
    return arrvDnPath_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vDnPath_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvDnPath_SimEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vDnPath_Sim_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvDnPath_SimEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvDnPath_SimEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vDnPath_Sim_Controller, strAction);

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
          vDnPath_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vDnPath_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vDnPath_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnPath_Sim_ConstructorName,
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
 * @param objstrDnPathIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vDnPath_Sim_IsExistRecordCache(
  objvDnPath_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvDnPath_SimObjLstCache = await vDnPath_Sim_GetObjLstCache(strPrjId);
  if (arrvDnPath_SimObjLstCache == null) return false;
  let arrvDnPath_SimSel = arrvDnPath_SimObjLstCache;
  if (objvDnPath_SimCond.GetConditions().length == 0)
    return arrvDnPath_SimSel.length > 0 ? true : false;
  try {
    for (const objCondition of objvDnPath_SimCond.GetConditions()) {
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
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvDnPath_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvDnPath_SimCond),
      vDnPath_Sim_ConstructorName,
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
export async function vDnPath_Sim_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vDnPath_Sim_Controller, strAction);

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
        vDnPath_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnPath_Sim_ConstructorName,
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
 * @param strDnPathId:所给的关键字
 * @returns 对象
 */
export async function vDnPath_Sim_IsExistCache(strDnPathId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvDnPath_SimObjLstCache = await vDnPath_Sim_GetObjLstCache(strPrjId);
  if (arrvDnPath_SimObjLstCache == null) return false;
  try {
    const arrvDnPath_SimSel = arrvDnPath_SimObjLstCache.filter((x) => x.dnPathId == strDnPathId);
    if (arrvDnPath_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strDnPathId,
      vDnPath_Sim_ConstructorName,
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
 * @param strDnPathId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vDnPath_Sim_IsExistAsync(strDnPathId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vDnPath_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDnPathId,
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
        vDnPath_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnPath_Sim_ConstructorName,
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
export async function vDnPath_Sim_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vDnPath_Sim_Controller, strAction);

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
        vDnPath_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vDnPath_Sim_ConstructorName,
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
 * @param objvDnPath_SimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vDnPath_Sim_GetRecCountByCondCache(
  objvDnPath_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvDnPath_SimObjLstCache = await vDnPath_Sim_GetObjLstCache(strPrjId);
  if (arrvDnPath_SimObjLstCache == null) return 0;
  let arrvDnPath_SimSel = arrvDnPath_SimObjLstCache;
  if (objvDnPath_SimCond.GetConditions().length == 0) return arrvDnPath_SimSel.length;
  try {
    for (const objCondition of objvDnPath_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvDnPath_SimSel = arrvDnPath_SimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvDnPath_SimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvDnPath_SimCond),
      vDnPath_Sim_ConstructorName,
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
export function vDnPath_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vDnPath_Sim_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsvDnPath_SimWApi.vDnPath_Sim_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsvDnPath_SimWApi.vDnPath_Sim_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvDnPath_SimEN._CurrTabName, strPrjId);
    switch (clsvDnPath_SimEN.CacheModeId) {
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
    clsvDnPath_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function vDnPath_Sim_GetLastRefreshTime(): string {
  if (clsvDnPath_SimEN._RefreshTimeLst.length == 0) return '';
  return clsvDnPath_SimEN._RefreshTimeLst[clsvDnPath_SimEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function vDnPath_Sim_BindDdl_DnPathIdByPrjIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvDnPath_SimWApi.BindDdl_DnPathIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvDnPath_SimWApi.BindDdl_DnPathIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_DnPathIdByPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DnPathIdByPrjIdInDivCache");
  let arrObjLstSel = await vDnPath_Sim_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvDnPath_SimEN.con_DnPathId,
    clsvDnPath_SimEN.con_DnPathName,
    'vDnPath_Sim...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function vDnPath_Sim_GetArrvDnPath_SimByPrjId(strPrjId: string) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvDnPath_SimWApi.BindDdl_DnPathIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvDnPath_SimWApi.BindDdl_DnPathIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DnPathIdByPrjIdInDivCache");
  const arrvDnPath_Sim = new Array<clsvDnPath_SimEN>();
  let arrObjLstSel = await vDnPath_Sim_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  const obj0 = new clsvDnPath_SimEN();
  obj0.dnPathId = '0';
  obj0.dnPathName = '选vDnPath_Sim...';
  arrvDnPath_Sim.push(obj0);
  arrObjLstSel.forEach((x) => arrvDnPath_Sim.push(x));
  return arrvDnPath_Sim;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vDnPath_Sim_GetJSONStrByObj(pobjvDnPath_SimEN: clsvDnPath_SimEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvDnPath_SimEN);
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
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vDnPath_Sim_GetObjLstByJSONStr(strJSON: string): Array<clsvDnPath_SimEN> {
  let arrvDnPath_SimObjLst = new Array<clsvDnPath_SimEN>();
  if (strJSON === '') {
    return arrvDnPath_SimObjLst;
  }
  try {
    arrvDnPath_SimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvDnPath_SimObjLst;
  }
  return arrvDnPath_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvDnPath_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vDnPath_Sim_GetObjLstByJSONObjLst(
  arrvDnPath_SimObjLstS: Array<clsvDnPath_SimEN>,
): Array<clsvDnPath_SimEN> {
  const arrvDnPath_SimObjLst = new Array<clsvDnPath_SimEN>();
  for (const objInFor of arrvDnPath_SimObjLstS) {
    const obj1 = vDnPath_Sim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvDnPath_SimObjLst.push(obj1);
  }
  return arrvDnPath_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vDnPath_Sim_GetObjByJSONStr(strJSON: string): clsvDnPath_SimEN {
  let pobjvDnPath_SimEN = new clsvDnPath_SimEN();
  if (strJSON === '') {
    return pobjvDnPath_SimEN;
  }
  try {
    pobjvDnPath_SimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvDnPath_SimEN;
  }
  return pobjvDnPath_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vDnPath_Sim_GetCombineCondition(objvDnPath_SimCond: clsvDnPath_SimEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnPath_SimCond.dicFldComparisonOp,
      clsvDnPath_SimEN.con_DnPathId,
    ) == true
  ) {
    const strComparisonOpDnPathId: string =
      objvDnPath_SimCond.dicFldComparisonOp[clsvDnPath_SimEN.con_DnPathId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnPath_SimEN.con_DnPathId,
      objvDnPath_SimCond.dnPathId,
      strComparisonOpDnPathId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnPath_SimCond.dicFldComparisonOp,
      clsvDnPath_SimEN.con_DnPathName,
    ) == true
  ) {
    const strComparisonOpDnPathName: string =
      objvDnPath_SimCond.dicFldComparisonOp[clsvDnPath_SimEN.con_DnPathName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnPath_SimEN.con_DnPathName,
      objvDnPath_SimCond.dnPathName,
      strComparisonOpDnPathName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnPath_SimCond.dicFldComparisonOp,
      clsvDnPath_SimEN.con_InDataNodeId,
    ) == true
  ) {
    const strComparisonOpInDataNodeId: string =
      objvDnPath_SimCond.dicFldComparisonOp[clsvDnPath_SimEN.con_InDataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvDnPath_SimEN.con_InDataNodeId,
      objvDnPath_SimCond.inDataNodeId,
      strComparisonOpInDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnPath_SimCond.dicFldComparisonOp,
      clsvDnPath_SimEN.con_OutDataNodeId,
    ) == true
  ) {
    const strComparisonOpOutDataNodeId: string =
      objvDnPath_SimCond.dicFldComparisonOp[clsvDnPath_SimEN.con_OutDataNodeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvDnPath_SimEN.con_OutDataNodeId,
      objvDnPath_SimCond.outDataNodeId,
      strComparisonOpOutDataNodeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnPath_SimCond.dicFldComparisonOp,
      clsvDnPath_SimEN.con_DnPathNodeLst,
    ) == true
  ) {
    const strComparisonOpDnPathNodeLst: string =
      objvDnPath_SimCond.dicFldComparisonOp[clsvDnPath_SimEN.con_DnPathNodeLst];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnPath_SimEN.con_DnPathNodeLst,
      objvDnPath_SimCond.dnPathNodeLst,
      strComparisonOpDnPathNodeLst,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvDnPath_SimCond.dicFldComparisonOp,
      clsvDnPath_SimEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvDnPath_SimCond.dicFldComparisonOp[clsvDnPath_SimEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvDnPath_SimEN.con_PrjId,
      objvDnPath_SimCond.prjId,
      strComparisonOpPrjId,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvDnPath_SimENS:源对象
 * @param objvDnPath_SimENT:目标对象
 */
export function vDnPath_Sim_GetObjFromJsonObj(
  objvDnPath_SimENS: clsvDnPath_SimEN,
): clsvDnPath_SimEN {
  const objvDnPath_SimENT: clsvDnPath_SimEN = new clsvDnPath_SimEN();
  ObjectAssign(objvDnPath_SimENT, objvDnPath_SimENS);
  return objvDnPath_SimENT;
}
