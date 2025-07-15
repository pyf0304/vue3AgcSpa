/**
 * 类名:clsvFieldTab_SimWApi
 * 表名:vFieldTab_Sim(00050590)
 * 版本:2025.07.05.1(服务器:WIN-SRV103-116)
 * 日期:2025/07/05 15:21:33
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
 * v字段表_Sim(vFieldTab_Sim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年07月05日.
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
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vFieldTab_Sim_Controller = 'vFieldTab_SimApi';
export const vFieldTab_Sim_ConstructorName = 'vFieldTab_Sim';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFldId:关键字
 * @returns 对象
 **/
export async function vFieldTab_Sim_GetObjByFldIdAsync(
  strFldId: string,
): Promise<clsvFieldTab_SimEN | null> {
  const strThisFuncName = 'GetObjByFldIdAsync';

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format('参数:[strFldId]不能为空!(In clsvFieldTab_SimWApi.GetObjByFldIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsvFieldTab_SimWApi.GetObjByFldIdAsync)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFldId';
  const strUrl = GetWebApiUrl(vFieldTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldId,
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
      const objvFieldTab_Sim = vFieldTab_Sim_GetObjFromJsonObj(returnObj);
      return objvFieldTab_Sim;
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
        vFieldTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim_ConstructorName,
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
 * @param strFldId:所给的关键字
 * @returns 对象
 */
export async function vFieldTab_Sim_GetObjByFldIdlocalStorage(strFldId: string) {
  const strThisFuncName = 'GetObjByFldIdlocalStorage';

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format(
      '参数:[strFldId]不能为空!(In clsvFieldTab_SimWApi.GetObjByFldIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsvFieldTab_SimWApi.GetObjByFldIdlocalStorage)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvFieldTab_SimEN._CurrTabName, strFldId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvFieldTab_SimCache: clsvFieldTab_SimEN = JSON.parse(strTempObj);
    return objvFieldTab_SimCache;
  }
  try {
    const objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdAsync(strFldId);
    if (objvFieldTab_Sim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvFieldTab_Sim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvFieldTab_Sim;
    }
    return objvFieldTab_Sim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFldId,
      vFieldTab_Sim_ConstructorName,
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
 * @param strFldId:所给的关键字
 * @returns 对象
 */
export async function vFieldTab_Sim_GetObjByFldIdCache(
  strFldId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFldIdCache';

  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format('参数:[strFldId]不能为空!(In clsvFieldTab_SimWApi.GetObjByFldIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsvFieldTab_SimWApi.GetObjByFldIdCache)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFieldTab_SimObjLstCache = await vFieldTab_Sim_GetObjLstCache(strPrjId);
  try {
    const arrvFieldTab_SimSel = arrvFieldTab_SimObjLstCache.filter((x) => x.fldId == strFldId);
    let objvFieldTab_Sim: clsvFieldTab_SimEN;
    if (arrvFieldTab_SimSel.length > 0) {
      objvFieldTab_Sim = arrvFieldTab_SimSel[0];
      return objvFieldTab_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvFieldTab_SimConst = await vFieldTab_Sim_GetObjByFldIdAsync(strFldId);
        if (objvFieldTab_SimConst != null) {
          vFieldTab_Sim_ReFreshThisCache(strPrjId);
          return objvFieldTab_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFldId,
      vFieldTab_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFieldTab_Sim_SortFunDefa(a: clsvFieldTab_SimEN, b: clsvFieldTab_SimEN): number {
  return a.fldId.localeCompare(b.fldId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFieldTab_Sim_SortFunDefa2Fld(
  a: clsvFieldTab_SimEN,
  b: clsvFieldTab_SimEN,
): number {
  if (a.fldName == b.fldName) return a.caption.localeCompare(b.caption);
  else return a.fldName.localeCompare(b.fldName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFieldTab_Sim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFieldTab_SimEN.con_FldId:
        return (a: clsvFieldTab_SimEN, b: clsvFieldTab_SimEN) => {
          return a.fldId.localeCompare(b.fldId);
        };
      case clsvFieldTab_SimEN.con_FldName:
        return (a: clsvFieldTab_SimEN, b: clsvFieldTab_SimEN) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsvFieldTab_SimEN.con_Caption:
        return (a: clsvFieldTab_SimEN, b: clsvFieldTab_SimEN) => {
          return a.caption.localeCompare(b.caption);
        };
      case clsvFieldTab_SimEN.con_DataTypeId:
        return (a: clsvFieldTab_SimEN, b: clsvFieldTab_SimEN) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFieldTab_Sim]中不存在!(in ${vFieldTab_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFieldTab_SimEN.con_FldId:
        return (a: clsvFieldTab_SimEN, b: clsvFieldTab_SimEN) => {
          return b.fldId.localeCompare(a.fldId);
        };
      case clsvFieldTab_SimEN.con_FldName:
        return (a: clsvFieldTab_SimEN, b: clsvFieldTab_SimEN) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsvFieldTab_SimEN.con_Caption:
        return (a: clsvFieldTab_SimEN, b: clsvFieldTab_SimEN) => {
          return b.caption.localeCompare(a.caption);
        };
      case clsvFieldTab_SimEN.con_DataTypeId:
        return (a: clsvFieldTab_SimEN, b: clsvFieldTab_SimEN) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFieldTab_Sim]中不存在!(in ${vFieldTab_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFldId:所给的关键字
 * @returns 对象
 */
export async function vFieldTab_Sim_GetNameByFldIdCache(strFldId: string, strPrjId: string) {
  if (IsNullOrEmpty(strFldId) == true) {
    const strMsg = Format('参数:[strFldId]不能为空!(In clsvFieldTab_SimWApi.GetNameByFldIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldId]的长度:[{0}]不正确!(clsvFieldTab_SimWApi.GetNameByFldIdCache)',
      strFldId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFieldTab_SimObjLstCache = await vFieldTab_Sim_GetObjLstCache(strPrjId);
  if (arrvFieldTab_SimObjLstCache == null) return '';
  try {
    const arrvFieldTab_SimSel = arrvFieldTab_SimObjLstCache.filter((x) => x.fldId == strFldId);
    let objvFieldTab_Sim: clsvFieldTab_SimEN;
    if (arrvFieldTab_SimSel.length > 0) {
      objvFieldTab_Sim = arrvFieldTab_SimSel[0];
      return objvFieldTab_Sim.fldName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strFldId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vFieldTab_Sim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFieldTab_SimEN.con_FldId:
      return (obj: clsvFieldTab_SimEN) => {
        return obj.fldId === value;
      };
    case clsvFieldTab_SimEN.con_FldName:
      return (obj: clsvFieldTab_SimEN) => {
        return obj.fldName === value;
      };
    case clsvFieldTab_SimEN.con_Caption:
      return (obj: clsvFieldTab_SimEN) => {
        return obj.caption === value;
      };
    case clsvFieldTab_SimEN.con_DataTypeId:
      return (obj: clsvFieldTab_SimEN) => {
        return obj.dataTypeId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFieldTab_Sim]中不存在!(in ${vFieldTab_Sim_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vFieldTab_Sim_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvFieldTab_SimWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvFieldTab_SimWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvFieldTab_SimEN.con_FldId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFieldTab_SimEN._AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvFieldTab_SimEN._AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFldId = strInValue;
  if (IsNullOrEmpty(strFldId) == true) {
    return '';
  }
  const objvFieldTab_Sim = await vFieldTab_Sim_GetObjByFldIdCache(strFldId, strPrjIdClassfy);
  if (objvFieldTab_Sim == null) return '';
  if (objvFieldTab_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvFieldTab_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vFieldTab_Sim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvFieldTab_SimWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvFieldTab_SimWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvFieldTab_SimEN.con_FldId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvFieldTab_Sim = await vFieldTab_Sim_GetObjLstCache(strPrjIdClassfy);
  if (arrvFieldTab_Sim == null) return [];
  let arrvFieldTab_SimSel = arrvFieldTab_Sim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvFieldTab_SimSel.length == 0) return [];
  return arrvFieldTab_SimSel.map((x) => x.fldId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFieldTab_Sim_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vFieldTab_Sim_Controller, strAction);

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
        vFieldTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim_ConstructorName,
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
export async function vFieldTab_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFieldTab_Sim_Controller, strAction);

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
        vFieldTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim_ConstructorName,
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
export async function vFieldTab_Sim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFieldTab_Sim_Controller, strAction);

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
        vFieldTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim_ConstructorName,
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
export async function vFieldTab_Sim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFieldTab_SimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFieldTab_Sim_Controller, strAction);

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
      const objvFieldTab_Sim = vFieldTab_Sim_GetObjFromJsonObj(returnObj);
      return objvFieldTab_Sim;
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
        vFieldTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim_ConstructorName,
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
export async function vFieldTab_Sim_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFieldTab_SimEN._WhereFormat) == false) {
    strWhereCond = Format(clsvFieldTab_SimEN._WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvFieldTab_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvFieldTab_SimEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFieldTab_SimEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvFieldTab_SimExObjLstCache: Array<clsvFieldTab_SimEN> = CacheHelper.Get(strKey);
    const arrvFieldTab_SimObjLstT = vFieldTab_Sim_GetObjLstByJSONObjLst(
      arrvFieldTab_SimExObjLstCache,
    );
    return arrvFieldTab_SimObjLstT;
  }
  try {
    const arrvFieldTab_SimExObjLst = await vFieldTab_Sim_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvFieldTab_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFieldTab_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFieldTab_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFieldTab_Sim_ConstructorName,
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
export async function vFieldTab_Sim_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFieldTab_SimEN._WhereFormat) == false) {
    strWhereCond = Format(clsvFieldTab_SimEN._WhereFormat, strPrjId);
  } else {
    const strMsg = '分类字段为扩展字段,此时WhereFormat不能为空!';
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strKey = Format('{0}_{1}', clsvFieldTab_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvFieldTab_SimEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFieldTab_SimEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFieldTab_SimExObjLstCache: Array<clsvFieldTab_SimEN> = JSON.parse(strTempObjLst);
    const arrvFieldTab_SimObjLstT = vFieldTab_Sim_GetObjLstByJSONObjLst(
      arrvFieldTab_SimExObjLstCache,
    );
    return arrvFieldTab_SimObjLstT;
  }
  try {
    const arrvFieldTab_SimExObjLst = await vFieldTab_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvFieldTab_SimEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvFieldTab_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFieldTab_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFieldTab_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFieldTab_Sim_ConstructorName,
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
export async function vFieldTab_Sim_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvFieldTab_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFieldTab_SimObjLstCache: Array<clsvFieldTab_SimEN> = JSON.parse(strTempObjLst);
    return arrvFieldTab_SimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vFieldTab_Sim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFieldTab_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFieldTab_Sim_Controller, strAction);

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
          vFieldTab_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFieldTab_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFieldTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim_ConstructorName,
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
export async function vFieldTab_Sim_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvFieldTab_SimEN._WhereFormat) == false) {
    strWhereCond = Format(clsvFieldTab_SimEN._WhereFormat, strPrjId);
  } else {
    const strMsg = '分类字段为扩展字段,此时WhereFormat不能为空!';
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strKey = Format('{0}_{1}', clsvFieldTab_SimEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvFieldTab_SimEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFieldTab_SimEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFieldTab_SimExObjLstCache: Array<clsvFieldTab_SimEN> = JSON.parse(strTempObjLst);
    const arrvFieldTab_SimObjLstT = vFieldTab_Sim_GetObjLstByJSONObjLst(
      arrvFieldTab_SimExObjLstCache,
    );
    return arrvFieldTab_SimObjLstT;
  }
  try {
    const arrvFieldTab_SimExObjLst = await vFieldTab_Sim_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvFieldTab_SimEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvFieldTab_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFieldTab_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvFieldTab_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFieldTab_Sim_ConstructorName,
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
export async function vFieldTab_Sim_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvFieldTab_SimEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFieldTab_SimObjLstCache: Array<clsvFieldTab_SimEN> = JSON.parse(strTempObjLst);
    return arrvFieldTab_SimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFieldTab_Sim_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvFieldTab_SimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvFieldTab_SimWApi.vFieldTab_Sim_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvFieldTab_SimWApi.vFieldTab_Sim_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvFieldTab_SimObjLstCache;
  switch (clsvFieldTab_SimEN._CacheModeId) {
    case '04': //sessionStorage
      arrvFieldTab_SimObjLstCache = await vFieldTab_Sim_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrvFieldTab_SimObjLstCache = await vFieldTab_Sim_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrvFieldTab_SimObjLstCache = await vFieldTab_Sim_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrvFieldTab_SimObjLstCache = await vFieldTab_Sim_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrvFieldTab_SimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFieldTab_Sim_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvFieldTab_SimObjLstCache;
  switch (clsvFieldTab_SimEN._CacheModeId) {
    case '04': //sessionStorage
      arrvFieldTab_SimObjLstCache = await vFieldTab_Sim_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrvFieldTab_SimObjLstCache = await vFieldTab_Sim_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrvFieldTab_SimObjLstCache = null;
      break;
    default:
      arrvFieldTab_SimObjLstCache = null;
      break;
  }
  return arrvFieldTab_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFldIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vFieldTab_Sim_GetSubObjLstCache(
  objvFieldTab_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvFieldTab_SimObjLstCache = await vFieldTab_Sim_GetObjLstCache(strPrjId);
  let arrvFieldTab_SimSel = arrvFieldTab_SimObjLstCache;
  if (objvFieldTab_SimCond.GetConditions().length == 0) return arrvFieldTab_SimSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objvFieldTab_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFieldTab_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFieldTab_SimCond),
      vFieldTab_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFieldTab_SimEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFldId:关键字列表
 * @returns 对象列表
 **/
export async function vFieldTab_Sim_GetObjLstByFldIdLstAsync(
  arrFldId: Array<string>,
): Promise<Array<clsvFieldTab_SimEN>> {
  const strThisFuncName = 'GetObjLstByFldIdLstAsync';
  const strAction = 'GetObjLstByFldIdLst';
  const strUrl = GetWebApiUrl(vFieldTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFldId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vFieldTab_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFieldTab_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFieldTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim_ConstructorName,
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
 * @param arrstrFldIdLst:关键字列表
 * @returns 对象列表
 */
export async function vFieldTab_Sim_GetObjLstByFldIdLstCache(
  arrFldIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByFldIdLstCache';
  try {
    const arrvFieldTab_SimObjLstCache = await vFieldTab_Sim_GetObjLstCache(strPrjId);
    const arrvFieldTab_SimSel = arrvFieldTab_SimObjLstCache.filter(
      (x) => arrFldIdLst.indexOf(x.fldId) > -1,
    );
    return arrvFieldTab_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFldIdLst.join(','),
      vFieldTab_Sim_ConstructorName,
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
export async function vFieldTab_Sim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFieldTab_SimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFieldTab_Sim_Controller, strAction);

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
          vFieldTab_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFieldTab_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFieldTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim_ConstructorName,
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
export async function vFieldTab_Sim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFieldTab_SimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFieldTab_Sim_Controller, strAction);

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
          vFieldTab_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFieldTab_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vFieldTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim_ConstructorName,
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
 * @param objstrFldIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vFieldTab_Sim_IsExistRecordCache(
  objvFieldTab_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvFieldTab_SimObjLstCache = await vFieldTab_Sim_GetObjLstCache(strPrjId);
  if (arrvFieldTab_SimObjLstCache == null) return false;
  let arrvFieldTab_SimSel = arrvFieldTab_SimObjLstCache;
  if (objvFieldTab_SimCond.GetConditions().length == 0)
    return arrvFieldTab_SimSel.length > 0 ? true : false;
  try {
    for (const objCondition of objvFieldTab_SimCond.GetConditions()) {
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
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFieldTab_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvFieldTab_SimCond),
      vFieldTab_Sim_ConstructorName,
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
export async function vFieldTab_Sim_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFieldTab_Sim_Controller, strAction);

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
        vFieldTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim_ConstructorName,
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
 * @param strFldId:所给的关键字
 * @returns 对象
 */
export async function vFieldTab_Sim_IsExistCache(strFldId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvFieldTab_SimObjLstCache = await vFieldTab_Sim_GetObjLstCache(strPrjId);
  if (arrvFieldTab_SimObjLstCache == null) return false;
  try {
    const arrvFieldTab_SimSel = arrvFieldTab_SimObjLstCache.filter((x) => x.fldId == strFldId);
    if (arrvFieldTab_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFldId,
      vFieldTab_Sim_ConstructorName,
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
 * @param strFldId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vFieldTab_Sim_IsExistAsync(strFldId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFieldTab_Sim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldId,
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
        vFieldTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim_ConstructorName,
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
export async function vFieldTab_Sim_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFieldTab_Sim_Controller, strAction);

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
        vFieldTab_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFieldTab_Sim_ConstructorName,
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
 * @param objvFieldTab_SimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vFieldTab_Sim_GetRecCountByCondCache(
  objvFieldTab_SimCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvFieldTab_SimObjLstCache = await vFieldTab_Sim_GetObjLstCache(strPrjId);
  if (arrvFieldTab_SimObjLstCache == null) return 0;
  let arrvFieldTab_SimSel = arrvFieldTab_SimObjLstCache;
  if (objvFieldTab_SimCond.GetConditions().length == 0) return arrvFieldTab_SimSel.length;
  try {
    for (const objCondition of objvFieldTab_SimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFieldTab_SimSel = arrvFieldTab_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFieldTab_SimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFieldTab_SimCond),
      vFieldTab_Sim_ConstructorName,
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
export function vFieldTab_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vFieldTab_Sim_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsvFieldTab_SimWApi.vFieldTab_Sim_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsvFieldTab_SimWApi.vFieldTab_Sim_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvFieldTab_SimEN._CurrTabName, strPrjId);
    switch (clsvFieldTab_SimEN._CacheModeId) {
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
    clsvFieldTab_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function vFieldTab_Sim_GetLastRefreshTime(): string {
  if (clsvFieldTab_SimEN._RefreshTimeLst.length == 0) return '';
  return clsvFieldTab_SimEN._RefreshTimeLst[clsvFieldTab_SimEN._RefreshTimeLst.length - 1];
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFieldTab_Sim_GetJSONStrByObj(pobjvFieldTab_SimEN: clsvFieldTab_SimEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFieldTab_SimEN);
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
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vFieldTab_Sim_GetObjLstByJSONStr(strJSON: string): Array<clsvFieldTab_SimEN> {
  let arrvFieldTab_SimObjLst = new Array<clsvFieldTab_SimEN>();
  if (strJSON === '') {
    return arrvFieldTab_SimObjLst;
  }
  try {
    arrvFieldTab_SimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFieldTab_SimObjLst;
  }
  return arrvFieldTab_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFieldTab_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFieldTab_Sim_GetObjLstByJSONObjLst(
  arrvFieldTab_SimObjLstS: Array<clsvFieldTab_SimEN>,
): Array<clsvFieldTab_SimEN> {
  const arrvFieldTab_SimObjLst = new Array<clsvFieldTab_SimEN>();
  for (const objInFor of arrvFieldTab_SimObjLstS) {
    const obj1 = vFieldTab_Sim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFieldTab_SimObjLst.push(obj1);
  }
  return arrvFieldTab_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFieldTab_Sim_GetObjByJSONStr(strJSON: string): clsvFieldTab_SimEN {
  let pobjvFieldTab_SimEN = new clsvFieldTab_SimEN();
  if (strJSON === '') {
    return pobjvFieldTab_SimEN;
  }
  try {
    pobjvFieldTab_SimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFieldTab_SimEN;
  }
  return pobjvFieldTab_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFieldTab_Sim_GetCombineCondition(
  objvFieldTab_SimCond: clsvFieldTab_SimEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFieldTab_SimCond.dicFldComparisonOp,
      clsvFieldTab_SimEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objvFieldTab_SimCond.dicFldComparisonOp[clsvFieldTab_SimEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFieldTab_SimEN.con_FldId,
      objvFieldTab_SimCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFieldTab_SimCond.dicFldComparisonOp,
      clsvFieldTab_SimEN.con_FldName,
    ) == true
  ) {
    const strComparisonOpFldName: string =
      objvFieldTab_SimCond.dicFldComparisonOp[clsvFieldTab_SimEN.con_FldName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFieldTab_SimEN.con_FldName,
      objvFieldTab_SimCond.fldName,
      strComparisonOpFldName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFieldTab_SimCond.dicFldComparisonOp,
      clsvFieldTab_SimEN.con_Caption,
    ) == true
  ) {
    const strComparisonOpCaption: string =
      objvFieldTab_SimCond.dicFldComparisonOp[clsvFieldTab_SimEN.con_Caption];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFieldTab_SimEN.con_Caption,
      objvFieldTab_SimCond.caption,
      strComparisonOpCaption,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFieldTab_SimCond.dicFldComparisonOp,
      clsvFieldTab_SimEN.con_DataTypeId,
    ) == true
  ) {
    const strComparisonOpDataTypeId: string =
      objvFieldTab_SimCond.dicFldComparisonOp[clsvFieldTab_SimEN.con_DataTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFieldTab_SimEN.con_DataTypeId,
      objvFieldTab_SimCond.dataTypeId,
      strComparisonOpDataTypeId,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFieldTab_SimENS:源对象
 * @param objvFieldTab_SimENT:目标对象
 */
export function vFieldTab_Sim_GetObjFromJsonObj(
  objvFieldTab_SimENS: clsvFieldTab_SimEN,
): clsvFieldTab_SimEN {
  const objvFieldTab_SimENT: clsvFieldTab_SimEN = new clsvFieldTab_SimEN();
  ObjectAssign(objvFieldTab_SimENT, objvFieldTab_SimENS);
  return objvFieldTab_SimENT;
}
