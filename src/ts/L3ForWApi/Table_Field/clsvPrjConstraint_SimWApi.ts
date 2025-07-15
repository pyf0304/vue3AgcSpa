/**
 * 类名:clsvPrjConstraint_SimWApi
 * 表名:vPrjConstraint_Sim(00050638)
 * 版本:2025.05.03.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/04 16:01:14
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
 * vPrjConstraint_Sim(vPrjConstraint_Sim)
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
import { clsvPrjConstraint_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjConstraint_SimEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vPrjConstraint_Sim_Controller = 'vPrjConstraint_SimApi';
export const vPrjConstraint_Sim_ConstructorName = 'vPrjConstraint_Sim';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strPrjConstraintId:关键字
 * @returns 对象
 **/
export async function vPrjConstraint_Sim_GetObjByPrjConstraintIdAsync(
  strPrjConstraintId: string,
): Promise<clsvPrjConstraint_SimEN | null> {
  const strThisFuncName = 'GetObjByPrjConstraintIdAsync';

  if (IsNullOrEmpty(strPrjConstraintId) == true) {
    const strMsg = Format(
      '参数:[strPrjConstraintId]不能为空!(In clsvPrjConstraint_SimWApi.GetObjByPrjConstraintIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjConstraintId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPrjConstraintId]的长度:[{0}]不正确!(clsvPrjConstraint_SimWApi.GetObjByPrjConstraintIdAsync)',
      strPrjConstraintId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByPrjConstraintId';
  const strUrl = GetWebApiUrl(vPrjConstraint_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjConstraintId,
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
      const objvPrjConstraint_Sim = vPrjConstraint_Sim_GetObjFromJsonObj(returnObj);
      return objvPrjConstraint_Sim;
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
        vPrjConstraint_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjConstraint_Sim_ConstructorName,
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
 * @param strPrjConstraintId:所给的关键字
 * @returns 对象
 */
export async function vPrjConstraint_Sim_GetObjByPrjConstraintIdlocalStorage(
  strPrjConstraintId: string,
) {
  const strThisFuncName = 'GetObjByPrjConstraintIdlocalStorage';

  if (IsNullOrEmpty(strPrjConstraintId) == true) {
    const strMsg = Format(
      '参数:[strPrjConstraintId]不能为空!(In clsvPrjConstraint_SimWApi.GetObjByPrjConstraintIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjConstraintId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPrjConstraintId]的长度:[{0}]不正确!(clsvPrjConstraint_SimWApi.GetObjByPrjConstraintIdlocalStorage)',
      strPrjConstraintId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvPrjConstraint_SimEN._CurrTabName, strPrjConstraintId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvPrjConstraint_SimCache: clsvPrjConstraint_SimEN = JSON.parse(strTempObj);
    return objvPrjConstraint_SimCache;
  }
  try {
    const objvPrjConstraint_Sim = await vPrjConstraint_Sim_GetObjByPrjConstraintIdAsync(
      strPrjConstraintId,
    );
    if (objvPrjConstraint_Sim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvPrjConstraint_Sim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvPrjConstraint_Sim;
    }
    return objvPrjConstraint_Sim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPrjConstraintId,
      vPrjConstraint_Sim_ConstructorName,
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
 * @param strPrjConstraintId:所给的关键字
 * @returns 对象
 */
export async function vPrjConstraint_Sim_GetObjByPrjConstraintIdCache(
  strPrjConstraintId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByPrjConstraintIdCache';

  if (IsNullOrEmpty(strPrjConstraintId) == true) {
    const strMsg = Format(
      '参数:[strPrjConstraintId]不能为空!(In clsvPrjConstraint_SimWApi.GetObjByPrjConstraintIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjConstraintId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPrjConstraintId]的长度:[{0}]不正确!(clsvPrjConstraint_SimWApi.GetObjByPrjConstraintIdCache)',
      strPrjConstraintId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPrjConstraint_SimObjLstCache = await vPrjConstraint_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvPrjConstraint_SimSel = arrvPrjConstraint_SimObjLstCache.filter(
      (x) => x.prjConstraintId == strPrjConstraintId,
    );
    let objvPrjConstraint_Sim: clsvPrjConstraint_SimEN;
    if (arrvPrjConstraint_SimSel.length > 0) {
      objvPrjConstraint_Sim = arrvPrjConstraint_SimSel[0];
      return objvPrjConstraint_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvPrjConstraint_SimConst = await vPrjConstraint_Sim_GetObjByPrjConstraintIdAsync(
          strPrjConstraintId,
        );
        if (objvPrjConstraint_SimConst != null) {
          vPrjConstraint_Sim_ReFreshThisCache(strPrjId);
          return objvPrjConstraint_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strPrjConstraintId,
      vPrjConstraint_Sim_ConstructorName,
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
export function vPrjConstraint_Sim_SortFunDefa(
  a: clsvPrjConstraint_SimEN,
  b: clsvPrjConstraint_SimEN,
): number {
  return a.prjConstraintId.localeCompare(b.prjConstraintId);
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
export function vPrjConstraint_Sim_SortFunDefa2Fld(
  a: clsvPrjConstraint_SimEN,
  b: clsvPrjConstraint_SimEN,
): number {
  if (a.constraintName == b.constraintName) return a.prjId.localeCompare(b.prjId);
  else return a.constraintName.localeCompare(b.constraintName);
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
export function vPrjConstraint_Sim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvPrjConstraint_SimEN.con_PrjConstraintId:
        return (a: clsvPrjConstraint_SimEN, b: clsvPrjConstraint_SimEN) => {
          return a.prjConstraintId.localeCompare(b.prjConstraintId);
        };
      case clsvPrjConstraint_SimEN.con_ConstraintName:
        return (a: clsvPrjConstraint_SimEN, b: clsvPrjConstraint_SimEN) => {
          return a.constraintName.localeCompare(b.constraintName);
        };
      case clsvPrjConstraint_SimEN.con_PrjId:
        return (a: clsvPrjConstraint_SimEN, b: clsvPrjConstraint_SimEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvPrjConstraint_SimEN.con_TabId:
        return (a: clsvPrjConstraint_SimEN, b: clsvPrjConstraint_SimEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsvPrjConstraint_SimEN.con_ConstraintTypeId:
        return (a: clsvPrjConstraint_SimEN, b: clsvPrjConstraint_SimEN) => {
          return a.constraintTypeId.localeCompare(b.constraintTypeId);
        };
      case clsvPrjConstraint_SimEN.con_InUse:
        return (a: clsvPrjConstraint_SimEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjConstraint_Sim]中不存在!(in ${vPrjConstraint_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvPrjConstraint_SimEN.con_PrjConstraintId:
        return (a: clsvPrjConstraint_SimEN, b: clsvPrjConstraint_SimEN) => {
          return b.prjConstraintId.localeCompare(a.prjConstraintId);
        };
      case clsvPrjConstraint_SimEN.con_ConstraintName:
        return (a: clsvPrjConstraint_SimEN, b: clsvPrjConstraint_SimEN) => {
          return b.constraintName.localeCompare(a.constraintName);
        };
      case clsvPrjConstraint_SimEN.con_PrjId:
        return (a: clsvPrjConstraint_SimEN, b: clsvPrjConstraint_SimEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvPrjConstraint_SimEN.con_TabId:
        return (a: clsvPrjConstraint_SimEN, b: clsvPrjConstraint_SimEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsvPrjConstraint_SimEN.con_ConstraintTypeId:
        return (a: clsvPrjConstraint_SimEN, b: clsvPrjConstraint_SimEN) => {
          return b.constraintTypeId.localeCompare(a.constraintTypeId);
        };
      case clsvPrjConstraint_SimEN.con_InUse:
        return (b: clsvPrjConstraint_SimEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vPrjConstraint_Sim]中不存在!(in ${vPrjConstraint_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strPrjConstraintId:所给的关键字
 * @returns 对象
 */
export async function vPrjConstraint_Sim_GetNameByPrjConstraintIdCache(
  strPrjConstraintId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjConstraintId) == true) {
    const strMsg = Format(
      '参数:[strPrjConstraintId]不能为空!(In clsvPrjConstraint_SimWApi.GetNameByPrjConstraintIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjConstraintId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strPrjConstraintId]的长度:[{0}]不正确!(clsvPrjConstraint_SimWApi.GetNameByPrjConstraintIdCache)',
      strPrjConstraintId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvPrjConstraint_SimObjLstCache = await vPrjConstraint_Sim_GetObjLstCache(strPrjId);
  if (arrvPrjConstraint_SimObjLstCache == null) return '';
  try {
    const arrvPrjConstraint_SimSel = arrvPrjConstraint_SimObjLstCache.filter(
      (x) => x.prjConstraintId == strPrjConstraintId,
    );
    let objvPrjConstraint_Sim: clsvPrjConstraint_SimEN;
    if (arrvPrjConstraint_SimSel.length > 0) {
      objvPrjConstraint_Sim = arrvPrjConstraint_SimSel[0];
      return objvPrjConstraint_Sim.constraintName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strPrjConstraintId,
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
export async function vPrjConstraint_Sim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvPrjConstraint_SimEN.con_PrjConstraintId:
      return (obj: clsvPrjConstraint_SimEN) => {
        return obj.prjConstraintId === value;
      };
    case clsvPrjConstraint_SimEN.con_ConstraintName:
      return (obj: clsvPrjConstraint_SimEN) => {
        return obj.constraintName === value;
      };
    case clsvPrjConstraint_SimEN.con_PrjId:
      return (obj: clsvPrjConstraint_SimEN) => {
        return obj.prjId === value;
      };
    case clsvPrjConstraint_SimEN.con_TabId:
      return (obj: clsvPrjConstraint_SimEN) => {
        return obj.tabId === value;
      };
    case clsvPrjConstraint_SimEN.con_ConstraintTypeId:
      return (obj: clsvPrjConstraint_SimEN) => {
        return obj.constraintTypeId === value;
      };
    case clsvPrjConstraint_SimEN.con_InUse:
      return (obj: clsvPrjConstraint_SimEN) => {
        return obj.inUse === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vPrjConstraint_Sim]中不存在!(in ${vPrjConstraint_Sim_ConstructorName}.${strThisFuncName})`;
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
export async function vPrjConstraint_Sim_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvPrjConstraint_SimWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvPrjConstraint_SimWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvPrjConstraint_SimEN.con_PrjConstraintId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvPrjConstraint_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvPrjConstraint_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strPrjConstraintId = strInValue;
  if (IsNullOrEmpty(strPrjConstraintId) == true) {
    return '';
  }
  const objvPrjConstraint_Sim = await vPrjConstraint_Sim_GetObjByPrjConstraintIdCache(
    strPrjConstraintId,
    strPrjIdClassfy,
  );
  if (objvPrjConstraint_Sim == null) return '';
  if (objvPrjConstraint_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvPrjConstraint_Sim.GetFldValue(strOutFldName).toString();
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
export async function vPrjConstraint_Sim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvPrjConstraint_SimWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvPrjConstraint_SimWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvPrjConstraint_SimEN.con_PrjConstraintId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvPrjConstraint_Sim = await vPrjConstraint_Sim_GetObjLstCache(strPrjIdClassfy);
  if (arrvPrjConstraint_Sim == null) return [];
  let arrvPrjConstraint_SimSel = arrvPrjConstraint_Sim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvPrjConstraint_SimSel.length == 0) return [];
  return arrvPrjConstraint_SimSel.map((x) => x.prjConstraintId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vPrjConstraint_Sim_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vPrjConstraint_Sim_Controller, strAction);

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
        vPrjConstraint_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjConstraint_Sim_ConstructorName,
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
export async function vPrjConstraint_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjConstraint_Sim_Controller, strAction);

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
        vPrjConstraint_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjConstraint_Sim_ConstructorName,
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
export async function vPrjConstraint_Sim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vPrjConstraint_Sim_Controller, strAction);

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
        vPrjConstraint_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjConstraint_Sim_ConstructorName,
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
export async function vPrjConstraint_Sim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvPrjConstraint_SimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vPrjConstraint_Sim_Controller, strAction);

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
      const objvPrjConstraint_Sim = vPrjConstraint_Sim_GetObjFromJsonObj(returnObj);
      return objvPrjConstraint_Sim;
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
        vPrjConstraint_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjConstraint_Sim_ConstructorName,
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
export async function vPrjConstraint_Sim_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjConstraint_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjConstraint_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjConstraint_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvPrjConstraint_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjConstraint_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvPrjConstraint_SimExObjLstCache: Array<clsvPrjConstraint_SimEN> =
      CacheHelper.Get(strKey);
    const arrvPrjConstraint_SimObjLstT = vPrjConstraint_Sim_GetObjLstByJSONObjLst(
      arrvPrjConstraint_SimExObjLstCache,
    );
    return arrvPrjConstraint_SimObjLstT;
  }
  try {
    const arrvPrjConstraint_SimExObjLst = await vPrjConstraint_Sim_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvPrjConstraint_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjConstraint_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjConstraint_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjConstraint_Sim_ConstructorName,
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
export async function vPrjConstraint_Sim_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjConstraint_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjConstraint_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvPrjConstraint_SimEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjConstraint_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvPrjConstraint_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjConstraint_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjConstraint_SimExObjLstCache: Array<clsvPrjConstraint_SimEN> =
      JSON.parse(strTempObjLst);
    const arrvPrjConstraint_SimObjLstT = vPrjConstraint_Sim_GetObjLstByJSONObjLst(
      arrvPrjConstraint_SimExObjLstCache,
    );
    return arrvPrjConstraint_SimObjLstT;
  }
  try {
    const arrvPrjConstraint_SimExObjLst = await vPrjConstraint_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvPrjConstraint_SimEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvPrjConstraint_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjConstraint_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjConstraint_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjConstraint_Sim_ConstructorName,
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
export async function vPrjConstraint_Sim_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvPrjConstraint_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPrjConstraint_SimObjLstCache: Array<clsvPrjConstraint_SimEN> =
      JSON.parse(strTempObjLst);
    return arrvPrjConstraint_SimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vPrjConstraint_Sim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvPrjConstraint_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vPrjConstraint_Sim_Controller, strAction);

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
          vPrjConstraint_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjConstraint_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjConstraint_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjConstraint_Sim_ConstructorName,
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
export async function vPrjConstraint_Sim_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvPrjConstraint_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvPrjConstraint_SimEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvPrjConstraint_SimEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvPrjConstraint_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvPrjConstraint_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvPrjConstraint_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjConstraint_SimExObjLstCache: Array<clsvPrjConstraint_SimEN> =
      JSON.parse(strTempObjLst);
    const arrvPrjConstraint_SimObjLstT = vPrjConstraint_Sim_GetObjLstByJSONObjLst(
      arrvPrjConstraint_SimExObjLstCache,
    );
    return arrvPrjConstraint_SimObjLstT;
  }
  try {
    const arrvPrjConstraint_SimExObjLst = await vPrjConstraint_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvPrjConstraint_SimEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvPrjConstraint_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvPrjConstraint_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvPrjConstraint_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vPrjConstraint_Sim_ConstructorName,
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
export async function vPrjConstraint_Sim_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvPrjConstraint_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPrjConstraint_SimObjLstCache: Array<clsvPrjConstraint_SimEN> =
      JSON.parse(strTempObjLst);
    return arrvPrjConstraint_SimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjConstraint_Sim_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvPrjConstraint_SimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvPrjConstraint_SimWApi.vPrjConstraint_Sim_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvPrjConstraint_SimWApi.vPrjConstraint_Sim_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvPrjConstraint_SimObjLstCache;
  switch (clsvPrjConstraint_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvPrjConstraint_SimObjLstCache = await vPrjConstraint_Sim_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrvPrjConstraint_SimObjLstCache = await vPrjConstraint_Sim_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrvPrjConstraint_SimObjLstCache = await vPrjConstraint_Sim_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrvPrjConstraint_SimObjLstCache = await vPrjConstraint_Sim_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrvPrjConstraint_SimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vPrjConstraint_Sim_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvPrjConstraint_SimObjLstCache;
  switch (clsvPrjConstraint_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvPrjConstraint_SimObjLstCache = await vPrjConstraint_Sim_GetObjLstsessionStoragePureCache(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrvPrjConstraint_SimObjLstCache = await vPrjConstraint_Sim_GetObjLstlocalStoragePureCache(
        strPrjId,
      );
      break;
    case '02': //ClientCache
      arrvPrjConstraint_SimObjLstCache = null;
      break;
    default:
      arrvPrjConstraint_SimObjLstCache = null;
      break;
  }
  return arrvPrjConstraint_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrPrjConstraintIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vPrjConstraint_Sim_GetSubObjLstCache(
  objvPrjConstraint_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvPrjConstraint_SimObjLstCache = await vPrjConstraint_Sim_GetObjLstCache(strPrjId);
  let arrvPrjConstraint_SimSel = arrvPrjConstraint_SimObjLstCache;
  if (objvPrjConstraint_SimCond.GetConditions().length == 0) return arrvPrjConstraint_SimSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objvPrjConstraint_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvPrjConstraint_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPrjConstraint_SimCond),
      vPrjConstraint_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjConstraint_SimEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrPrjConstraintId:关键字列表
 * @returns 对象列表
 **/
export async function vPrjConstraint_Sim_GetObjLstByPrjConstraintIdLstAsync(
  arrPrjConstraintId: Array<string>,
): Promise<Array<clsvPrjConstraint_SimEN>> {
  const strThisFuncName = 'GetObjLstByPrjConstraintIdLstAsync';
  const strAction = 'GetObjLstByPrjConstraintIdLst';
  const strUrl = GetWebApiUrl(vPrjConstraint_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrPrjConstraintId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vPrjConstraint_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjConstraint_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjConstraint_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjConstraint_Sim_ConstructorName,
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
 * @param arrstrPrjConstraintIdLst:关键字列表
 * @returns 对象列表
 */
export async function vPrjConstraint_Sim_GetObjLstByPrjConstraintIdLstCache(
  arrPrjConstraintIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPrjConstraintIdLstCache';
  try {
    const arrvPrjConstraint_SimObjLstCache = await vPrjConstraint_Sim_GetObjLstCache(strPrjId);
    const arrvPrjConstraint_SimSel = arrvPrjConstraint_SimObjLstCache.filter(
      (x) => arrPrjConstraintIdLst.indexOf(x.prjConstraintId) > -1,
    );
    return arrvPrjConstraint_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrPrjConstraintIdLst.join(','),
      vPrjConstraint_Sim_ConstructorName,
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
export async function vPrjConstraint_Sim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvPrjConstraint_SimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vPrjConstraint_Sim_Controller, strAction);

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
          vPrjConstraint_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjConstraint_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjConstraint_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjConstraint_Sim_ConstructorName,
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
export async function vPrjConstraint_Sim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvPrjConstraint_SimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vPrjConstraint_Sim_Controller, strAction);

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
          vPrjConstraint_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjConstraint_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjConstraint_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjConstraint_Sim_ConstructorName,
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
export async function vPrjConstraint_Sim_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvPrjConstraint_SimEN>();
  const arrvPrjConstraint_SimObjLstCache = await vPrjConstraint_Sim_GetObjLstCache(strPrjId);
  if (arrvPrjConstraint_SimObjLstCache.length == 0) return arrvPrjConstraint_SimObjLstCache;
  let arrvPrjConstraint_SimSel = arrvPrjConstraint_SimObjLstCache;
  const objvPrjConstraint_SimCond = objPagerPara.conditionCollection;
  if (objvPrjConstraint_SimCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsvPrjConstraint_SimEN>();
  }
  //console.log("clsvPrjConstraint_SimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objvPrjConstraint_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPrjConstraint_SimSel.length == 0) return arrvPrjConstraint_SimSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.sort(
        vPrjConstraint_Sim_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.sort(objPagerPara.sortFun);
    }
    arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.slice(intStart, intEnd);
    return arrvPrjConstraint_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPrjConstraint_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPrjConstraint_SimEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vPrjConstraint_Sim_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPrjConstraint_SimEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvPrjConstraint_SimEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vPrjConstraint_Sim_Controller, strAction);

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
          vPrjConstraint_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPrjConstraint_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vPrjConstraint_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjConstraint_Sim_ConstructorName,
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
 * @param objstrPrjConstraintIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vPrjConstraint_Sim_IsExistRecordCache(
  objvPrjConstraint_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvPrjConstraint_SimObjLstCache = await vPrjConstraint_Sim_GetObjLstCache(strPrjId);
  if (arrvPrjConstraint_SimObjLstCache == null) return false;
  let arrvPrjConstraint_SimSel = arrvPrjConstraint_SimObjLstCache;
  if (objvPrjConstraint_SimCond.GetConditions().length == 0)
    return arrvPrjConstraint_SimSel.length > 0 ? true : false;
  try {
    for (const objCondition of objvPrjConstraint_SimCond.GetConditions()) {
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
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvPrjConstraint_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvPrjConstraint_SimCond),
      vPrjConstraint_Sim_ConstructorName,
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
export async function vPrjConstraint_Sim_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vPrjConstraint_Sim_Controller, strAction);

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
        vPrjConstraint_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjConstraint_Sim_ConstructorName,
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
 * @param strPrjConstraintId:所给的关键字
 * @returns 对象
 */
export async function vPrjConstraint_Sim_IsExistCache(
  strPrjConstraintId: string,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrvPrjConstraint_SimObjLstCache = await vPrjConstraint_Sim_GetObjLstCache(strPrjId);
  if (arrvPrjConstraint_SimObjLstCache == null) return false;
  try {
    const arrvPrjConstraint_SimSel = arrvPrjConstraint_SimObjLstCache.filter(
      (x) => x.prjConstraintId == strPrjConstraintId,
    );
    if (arrvPrjConstraint_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strPrjConstraintId,
      vPrjConstraint_Sim_ConstructorName,
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
 * @param strPrjConstraintId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vPrjConstraint_Sim_IsExistAsync(
  strPrjConstraintId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vPrjConstraint_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjConstraintId,
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
        vPrjConstraint_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjConstraint_Sim_ConstructorName,
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
export async function vPrjConstraint_Sim_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vPrjConstraint_Sim_Controller, strAction);

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
        vPrjConstraint_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vPrjConstraint_Sim_ConstructorName,
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
 * @param objvPrjConstraint_SimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vPrjConstraint_Sim_GetRecCountByCondCache(
  objvPrjConstraint_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvPrjConstraint_SimObjLstCache = await vPrjConstraint_Sim_GetObjLstCache(strPrjId);
  if (arrvPrjConstraint_SimObjLstCache == null) return 0;
  let arrvPrjConstraint_SimSel = arrvPrjConstraint_SimObjLstCache;
  if (objvPrjConstraint_SimCond.GetConditions().length == 0) return arrvPrjConstraint_SimSel.length;
  try {
    for (const objCondition of objvPrjConstraint_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvPrjConstraint_SimSel = arrvPrjConstraint_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvPrjConstraint_SimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvPrjConstraint_SimCond),
      vPrjConstraint_Sim_ConstructorName,
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
export function vPrjConstraint_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vPrjConstraint_Sim_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsvPrjConstraint_SimWApi.vPrjConstraint_Sim_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsvPrjConstraint_SimWApi.vPrjConstraint_Sim_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvPrjConstraint_SimEN._CurrTabName, strPrjId);
    switch (clsvPrjConstraint_SimEN.CacheModeId) {
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
    clsvPrjConstraint_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function vPrjConstraint_Sim_GetLastRefreshTime(): string {
  if (clsvPrjConstraint_SimEN._RefreshTimeLst.length == 0) return '';
  return clsvPrjConstraint_SimEN._RefreshTimeLst[
    clsvPrjConstraint_SimEN._RefreshTimeLst.length - 1
  ];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function vPrjConstraint_Sim_BindDdl_PrjConstraintIdByPrjIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvPrjConstraint_SimWApi.BindDdl_PrjConstraintIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvPrjConstraint_SimWApi.BindDdl_PrjConstraintIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_PrjConstraintIdByPrjIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrjConstraintIdByPrjIdInDivCache");
  let arrObjLstSel = await vPrjConstraint_Sim_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvPrjConstraint_SimEN.con_PrjConstraintId,
    clsvPrjConstraint_SimEN.con_ConstraintName,
    '选约束...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function vPrjConstraint_Sim_GetArrvPrjConstraint_SimByPrjId(strPrjId: string) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvPrjConstraint_SimWApi.BindDdl_PrjConstraintIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvPrjConstraint_SimWApi.BindDdl_PrjConstraintIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_PrjConstraintIdByPrjIdInDivCache");
  const arrvPrjConstraint_Sim = new Array<clsvPrjConstraint_SimEN>();
  let arrObjLstSel = await vPrjConstraint_Sim_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  const obj0 = new clsvPrjConstraint_SimEN();
  obj0.prjConstraintId = '0';
  obj0.constraintName = '选约束...';
  arrvPrjConstraint_Sim.push(obj0);
  arrObjLstSel.forEach((x) => arrvPrjConstraint_Sim.push(x));
  return arrvPrjConstraint_Sim;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPrjConstraint_Sim_GetJSONStrByObj(
  pobjvPrjConstraint_SimEN: clsvPrjConstraint_SimEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvPrjConstraint_SimEN);
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
export function vPrjConstraint_Sim_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvPrjConstraint_SimEN> {
  let arrvPrjConstraint_SimObjLst = new Array<clsvPrjConstraint_SimEN>();
  if (strJSON === '') {
    return arrvPrjConstraint_SimObjLst;
  }
  try {
    arrvPrjConstraint_SimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvPrjConstraint_SimObjLst;
  }
  return arrvPrjConstraint_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvPrjConstraint_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vPrjConstraint_Sim_GetObjLstByJSONObjLst(
  arrvPrjConstraint_SimObjLstS: Array<clsvPrjConstraint_SimEN>,
): Array<clsvPrjConstraint_SimEN> {
  const arrvPrjConstraint_SimObjLst = new Array<clsvPrjConstraint_SimEN>();
  for (const objInFor of arrvPrjConstraint_SimObjLstS) {
    const obj1 = vPrjConstraint_Sim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvPrjConstraint_SimObjLst.push(obj1);
  }
  return arrvPrjConstraint_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vPrjConstraint_Sim_GetObjByJSONStr(strJSON: string): clsvPrjConstraint_SimEN {
  let pobjvPrjConstraint_SimEN = new clsvPrjConstraint_SimEN();
  if (strJSON === '') {
    return pobjvPrjConstraint_SimEN;
  }
  try {
    pobjvPrjConstraint_SimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvPrjConstraint_SimEN;
  }
  return pobjvPrjConstraint_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vPrjConstraint_Sim_GetCombineCondition(
  objvPrjConstraint_SimCond: clsvPrjConstraint_SimEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjConstraint_SimCond.dicFldComparisonOp,
      clsvPrjConstraint_SimEN.con_PrjConstraintId,
    ) == true
  ) {
    const strComparisonOpPrjConstraintId: string =
      objvPrjConstraint_SimCond.dicFldComparisonOp[clsvPrjConstraint_SimEN.con_PrjConstraintId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjConstraint_SimEN.con_PrjConstraintId,
      objvPrjConstraint_SimCond.prjConstraintId,
      strComparisonOpPrjConstraintId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjConstraint_SimCond.dicFldComparisonOp,
      clsvPrjConstraint_SimEN.con_ConstraintName,
    ) == true
  ) {
    const strComparisonOpConstraintName: string =
      objvPrjConstraint_SimCond.dicFldComparisonOp[clsvPrjConstraint_SimEN.con_ConstraintName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjConstraint_SimEN.con_ConstraintName,
      objvPrjConstraint_SimCond.constraintName,
      strComparisonOpConstraintName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjConstraint_SimCond.dicFldComparisonOp,
      clsvPrjConstraint_SimEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvPrjConstraint_SimCond.dicFldComparisonOp[clsvPrjConstraint_SimEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjConstraint_SimEN.con_PrjId,
      objvPrjConstraint_SimCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjConstraint_SimCond.dicFldComparisonOp,
      clsvPrjConstraint_SimEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objvPrjConstraint_SimCond.dicFldComparisonOp[clsvPrjConstraint_SimEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjConstraint_SimEN.con_TabId,
      objvPrjConstraint_SimCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjConstraint_SimCond.dicFldComparisonOp,
      clsvPrjConstraint_SimEN.con_ConstraintTypeId,
    ) == true
  ) {
    const strComparisonOpConstraintTypeId: string =
      objvPrjConstraint_SimCond.dicFldComparisonOp[clsvPrjConstraint_SimEN.con_ConstraintTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvPrjConstraint_SimEN.con_ConstraintTypeId,
      objvPrjConstraint_SimCond.constraintTypeId,
      strComparisonOpConstraintTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvPrjConstraint_SimCond.dicFldComparisonOp,
      clsvPrjConstraint_SimEN.con_InUse,
    ) == true
  ) {
    if (objvPrjConstraint_SimCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsvPrjConstraint_SimEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvPrjConstraint_SimEN.con_InUse);
    }
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvPrjConstraint_SimENS:源对象
 * @param objvPrjConstraint_SimENT:目标对象
 */
export function vPrjConstraint_Sim_GetObjFromJsonObj(
  objvPrjConstraint_SimENS: clsvPrjConstraint_SimEN,
): clsvPrjConstraint_SimEN {
  const objvPrjConstraint_SimENT: clsvPrjConstraint_SimEN = new clsvPrjConstraint_SimEN();
  ObjectAssign(objvPrjConstraint_SimENT, objvPrjConstraint_SimENS);
  return objvPrjConstraint_SimENT;
}
