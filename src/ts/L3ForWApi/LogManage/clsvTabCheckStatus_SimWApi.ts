/**
 * 类名:clsvTabCheckStatus_SimWApi
 * 表名:vTabCheckStatus_Sim(00050599)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:47
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:日志管理(LogManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v表检查状态_Sim(vTabCheckStatus_Sim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvTabCheckStatus_SimEN } from '@/ts/L0Entity/LogManage/clsvTabCheckStatus_SimEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vTabCheckStatus_Sim_Controller = 'vTabCheckStatus_SimApi';
export const vTabCheckStatus_Sim_ConstructorName = 'vTabCheckStatus_Sim';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function vTabCheckStatus_Sim_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsvTabCheckStatus_SimEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvTabCheckStatus_SimWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(vTabCheckStatus_Sim_Controller, strAction);

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
      const objvTabCheckStatus_Sim = vTabCheckStatus_Sim_GetObjFromJsonObj(returnObj);
      return objvTabCheckStatus_Sim;
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
        vTabCheckStatus_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabCheckStatus_Sim_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function vTabCheckStatus_Sim_GetObjBymIdCache(
  lngmId: number,
  strPrjId: string,
  strPrjDataBaseId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvTabCheckStatus_SimWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrvTabCheckStatus_SimObjLstCache = await vTabCheckStatus_Sim_GetObjLstCache(
    strPrjId,
    strPrjDataBaseId,
  );
  try {
    const arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    let objvTabCheckStatus_Sim: clsvTabCheckStatus_SimEN;
    if (arrvTabCheckStatus_SimSel.length > 0) {
      objvTabCheckStatus_Sim = arrvTabCheckStatus_SimSel[0];
      return objvTabCheckStatus_Sim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvTabCheckStatus_SimConst = await vTabCheckStatus_Sim_GetObjBymIdAsync(lngmId);
        if (objvTabCheckStatus_SimConst != null) {
          vTabCheckStatus_Sim_ReFreshThisCache(strPrjId, strPrjDataBaseId);
          return objvTabCheckStatus_SimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vTabCheckStatus_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function vTabCheckStatus_Sim_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsvTabCheckStatus_SimWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvTabCheckStatus_SimEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvTabCheckStatus_SimCache: clsvTabCheckStatus_SimEN = JSON.parse(strTempObj);
    return objvTabCheckStatus_SimCache;
  }
  try {
    const objvTabCheckStatus_Sim = await vTabCheckStatus_Sim_GetObjBymIdAsync(lngmId);
    if (objvTabCheckStatus_Sim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvTabCheckStatus_Sim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvTabCheckStatus_Sim;
    }
    return objvTabCheckStatus_Sim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vTabCheckStatus_Sim_ConstructorName,
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 @param strPrjDataBaseId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vTabCheckStatus_Sim_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
  strPrjDataBaseIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvTabCheckStatus_SimWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvTabCheckStatus_SimWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjDataBaseIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strPrjDataBaseIdClassfy]不能为空!(In clsvTabCheckStatus_SimWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjDataBaseIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjDataBaseIdClassfy]的长度:[{0}]不正确!(clsvTabCheckStatus_SimWApi.func)',
      strPrjDataBaseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvTabCheckStatus_SimEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvTabCheckStatus_SimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvTabCheckStatus_SimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objvTabCheckStatus_Sim = await vTabCheckStatus_Sim_GetObjBymIdCache(
    lngmId,
    strPrjIdClassfy,
    strPrjDataBaseIdClassfy,
  );
  if (objvTabCheckStatus_Sim == null) return '';
  if (objvTabCheckStatus_Sim.GetFldValue(strOutFldName) == null) return '';
  return objvTabCheckStatus_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vTabCheckStatus_Sim_SortFunDefa(
  a: clsvTabCheckStatus_SimEN,
  b: clsvTabCheckStatus_SimEN,
): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vTabCheckStatus_Sim_SortFunDefa2Fld(
  a: clsvTabCheckStatus_SimEN,
  b: clsvTabCheckStatus_SimEN,
): number {
  if (a.prjId == b.prjId) return a.tabId.localeCompare(b.tabId);
  else return a.prjId.localeCompare(b.prjId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vTabCheckStatus_Sim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvTabCheckStatus_SimEN.con_mId:
        return (a: clsvTabCheckStatus_SimEN, b: clsvTabCheckStatus_SimEN) => {
          return a.mId - b.mId;
        };
      case clsvTabCheckStatus_SimEN.con_PrjId:
        return (a: clsvTabCheckStatus_SimEN, b: clsvTabCheckStatus_SimEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvTabCheckStatus_SimEN.con_TabId:
        return (a: clsvTabCheckStatus_SimEN, b: clsvTabCheckStatus_SimEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsvTabCheckStatus_SimEN.con_ErrorLevelId:
        return (a: clsvTabCheckStatus_SimEN, b: clsvTabCheckStatus_SimEN) => {
          return a.errorLevelId - b.errorLevelId;
        };
      case clsvTabCheckStatus_SimEN.con_ErrorMsg:
        return (a: clsvTabCheckStatus_SimEN, b: clsvTabCheckStatus_SimEN) => {
          if (a.errorMsg == null) return -1;
          if (b.errorMsg == null) return 1;
          return a.errorMsg.localeCompare(b.errorMsg);
        };
      case clsvTabCheckStatus_SimEN.con_PrjDataBaseId:
        return (a: clsvTabCheckStatus_SimEN, b: clsvTabCheckStatus_SimEN) => {
          return a.prjDataBaseId.localeCompare(b.prjDataBaseId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vTabCheckStatus_Sim]中不存在!(in ${vTabCheckStatus_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvTabCheckStatus_SimEN.con_mId:
        return (a: clsvTabCheckStatus_SimEN, b: clsvTabCheckStatus_SimEN) => {
          return b.mId - a.mId;
        };
      case clsvTabCheckStatus_SimEN.con_PrjId:
        return (a: clsvTabCheckStatus_SimEN, b: clsvTabCheckStatus_SimEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvTabCheckStatus_SimEN.con_TabId:
        return (a: clsvTabCheckStatus_SimEN, b: clsvTabCheckStatus_SimEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsvTabCheckStatus_SimEN.con_ErrorLevelId:
        return (a: clsvTabCheckStatus_SimEN, b: clsvTabCheckStatus_SimEN) => {
          return b.errorLevelId - a.errorLevelId;
        };
      case clsvTabCheckStatus_SimEN.con_ErrorMsg:
        return (a: clsvTabCheckStatus_SimEN, b: clsvTabCheckStatus_SimEN) => {
          if (b.errorMsg == null) return -1;
          if (a.errorMsg == null) return 1;
          return b.errorMsg.localeCompare(a.errorMsg);
        };
      case clsvTabCheckStatus_SimEN.con_PrjDataBaseId:
        return (a: clsvTabCheckStatus_SimEN, b: clsvTabCheckStatus_SimEN) => {
          return b.prjDataBaseId.localeCompare(a.prjDataBaseId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vTabCheckStatus_Sim]中不存在!(in ${vTabCheckStatus_Sim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vTabCheckStatus_Sim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvTabCheckStatus_SimEN.con_mId:
      return (obj: clsvTabCheckStatus_SimEN) => {
        return obj.mId === value;
      };
    case clsvTabCheckStatus_SimEN.con_PrjId:
      return (obj: clsvTabCheckStatus_SimEN) => {
        return obj.prjId === value;
      };
    case clsvTabCheckStatus_SimEN.con_TabId:
      return (obj: clsvTabCheckStatus_SimEN) => {
        return obj.tabId === value;
      };
    case clsvTabCheckStatus_SimEN.con_ErrorLevelId:
      return (obj: clsvTabCheckStatus_SimEN) => {
        return obj.errorLevelId === value;
      };
    case clsvTabCheckStatus_SimEN.con_ErrorMsg:
      return (obj: clsvTabCheckStatus_SimEN) => {
        return obj.errorMsg === value;
      };
    case clsvTabCheckStatus_SimEN.con_PrjDataBaseId:
      return (obj: clsvTabCheckStatus_SimEN) => {
        return obj.prjDataBaseId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vTabCheckStatus_Sim]中不存在!(in ${vTabCheckStatus_Sim_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @param strPrjId:缓存的分类字段
 * @param strPrjDataBaseId:缓存的分类字段2
 * @returns 返回一个关键字值列表
 */
export async function vTabCheckStatus_Sim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
  strPrjDataBaseIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvTabCheckStatus_SimWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvTabCheckStatus_SimWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjDataBaseIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strPrjDataBaseIdClassfy]不能为空!(In clsvTabCheckStatus_SimWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjDataBaseIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjDataBaseIdClassfy]的长度:[{0}]不正确!(clsvTabCheckStatus_SimWApi.funcKey)',
      strPrjDataBaseIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvTabCheckStatus_SimEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvTabCheckStatus_Sim = await vTabCheckStatus_Sim_GetObjLstCache(
    strPrjIdClassfy,
    strPrjDataBaseIdClassfy,
  );
  if (arrvTabCheckStatus_Sim == null) return [];
  let arrvTabCheckStatus_SimSel = arrvTabCheckStatus_Sim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvTabCheckStatus_SimSel.length == 0) return [];
  return arrvTabCheckStatus_SimSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vTabCheckStatus_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vTabCheckStatus_Sim_Controller, strAction);

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
        vTabCheckStatus_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vTabCheckStatus_Sim_Controller, strAction);

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
        vTabCheckStatus_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvTabCheckStatus_SimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vTabCheckStatus_Sim_Controller, strAction);

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
      const objvTabCheckStatus_Sim = vTabCheckStatus_Sim_GetObjFromJsonObj(returnObj);
      return objvTabCheckStatus_Sim;
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
        vTabCheckStatus_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_GetObjLstClientCache(
  strPrjId: string,
  strPrjDataBaseId: string,
) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvTabCheckStatus_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvTabCheckStatus_SimEN.WhereFormat, strPrjId, strPrjDataBaseId);
  } else {
    strWhereCond = Format("PrjId='{0}' and PrjDataBaseId='{1}'", strPrjId, strPrjDataBaseId);
  }
  const strKey = Format(
    '{0}_{1}_{2}',
    clsvTabCheckStatus_SimEN._CurrTabName,
    strPrjId,
    strPrjDataBaseId,
  );
  if (IsNullOrEmpty(clsvTabCheckStatus_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvTabCheckStatus_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvTabCheckStatus_SimExObjLstCache: Array<clsvTabCheckStatus_SimEN> =
      CacheHelper.Get(strKey);
    const arrvTabCheckStatus_SimObjLstT = vTabCheckStatus_Sim_GetObjLstByJSONObjLst(
      arrvTabCheckStatus_SimExObjLstCache,
    );
    return arrvTabCheckStatus_SimObjLstT;
  }
  try {
    const arrvTabCheckStatus_SimExObjLst = await vTabCheckStatus_Sim_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvTabCheckStatus_SimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvTabCheckStatus_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvTabCheckStatus_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_GetObjLstlocalStorage(
  strPrjId: string,
  strPrjDataBaseId: string,
) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvTabCheckStatus_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvTabCheckStatus_SimEN.WhereFormat, strPrjId, strPrjDataBaseId);
  } else {
    strWhereCond = Format("PrjId='{0}' and PrjDataBaseId='{1}'", strPrjId, strPrjDataBaseId);
  }
  const strKey = Format(
    '{0}_{1}_{2}',
    clsvTabCheckStatus_SimEN._CurrTabName,
    strPrjId,
    strPrjDataBaseId,
  );
  if (IsNullOrEmpty(clsvTabCheckStatus_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvTabCheckStatus_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvTabCheckStatus_SimExObjLstCache: Array<clsvTabCheckStatus_SimEN> =
      JSON.parse(strTempObjLst);
    const arrvTabCheckStatus_SimObjLstT = vTabCheckStatus_Sim_GetObjLstByJSONObjLst(
      arrvTabCheckStatus_SimExObjLstCache,
    );
    return arrvTabCheckStatus_SimObjLstT;
  }
  try {
    const arrvTabCheckStatus_SimExObjLst = await vTabCheckStatus_Sim_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvTabCheckStatus_SimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvTabCheckStatus_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvTabCheckStatus_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_GetObjLstlocalStoragePureCache(
  strPrjId: string,
  strPrjDataBaseId: string,
) {
  //初始化列表缓存
  const strKey = Format(
    '{0}_{1}_{2}',
    clsvTabCheckStatus_SimEN._CurrTabName,
    strPrjId,
    strPrjDataBaseId,
  );
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvTabCheckStatus_SimObjLstCache: Array<clsvTabCheckStatus_SimEN> =
      JSON.parse(strTempObjLst);
    return arrvTabCheckStatus_SimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vTabCheckStatus_Sim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvTabCheckStatus_SimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vTabCheckStatus_Sim_Controller, strAction);

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
          vTabCheckStatus_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabCheckStatus_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vTabCheckStatus_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_GetObjLstsessionStorage(
  strPrjId: string,
  strPrjDataBaseId: string,
) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvTabCheckStatus_SimEN.WhereFormat) == false) {
    strWhereCond = Format(clsvTabCheckStatus_SimEN.WhereFormat, strPrjId, strPrjDataBaseId);
  } else {
    strWhereCond = Format("PrjId='{0}' and PrjDataBaseId='{1}'", strPrjId, strPrjDataBaseId);
  }
  const strKey = Format(
    '{0}_{1}_{2}',
    clsvTabCheckStatus_SimEN._CurrTabName,
    strPrjId,
    strPrjDataBaseId,
  );
  if (IsNullOrEmpty(clsvTabCheckStatus_SimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvTabCheckStatus_SimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvTabCheckStatus_SimExObjLstCache: Array<clsvTabCheckStatus_SimEN> =
      JSON.parse(strTempObjLst);
    const arrvTabCheckStatus_SimObjLstT = vTabCheckStatus_Sim_GetObjLstByJSONObjLst(
      arrvTabCheckStatus_SimExObjLstCache,
    );
    return arrvTabCheckStatus_SimObjLstT;
  }
  try {
    const arrvTabCheckStatus_SimExObjLst = await vTabCheckStatus_Sim_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvTabCheckStatus_SimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvTabCheckStatus_SimExObjLst.length,
    );
    console.log(strInfo);
    return arrvTabCheckStatus_SimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_GetObjLstsessionStoragePureCache(
  strPrjId: string,
  strPrjDataBaseId: string,
) {
  //初始化列表缓存
  const strKey = Format(
    '{0}_{1}_{2}',
    clsvTabCheckStatus_SimEN._CurrTabName,
    strPrjId,
    strPrjDataBaseId,
  );
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvTabCheckStatus_SimObjLstCache: Array<clsvTabCheckStatus_SimEN> =
      JSON.parse(strTempObjLst);
    return arrvTabCheckStatus_SimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vTabCheckStatus_Sim_GetObjLstCache(
  strPrjId: string,
  strPrjDataBaseId: string,
): Promise<Array<clsvTabCheckStatus_SimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvTabCheckStatus_SimWApi.vTabCheckStatus_Sim_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvTabCheckStatus_SimWApi.vTabCheckStatus_Sim_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjDataBaseId) == true) {
    const strMsg = Format(
      '参数:[strPrjDataBaseId]不能为空！(In clsvTabCheckStatus_SimWApi.vTabCheckStatus_Sim_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjDataBaseId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjDataBaseId]的长度:[{0}]不正确！(clsvTabCheckStatus_SimWApi.vTabCheckStatus_Sim_GetObjLstCache)',
      strPrjDataBaseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvTabCheckStatus_SimObjLstCache;
  switch (clsvTabCheckStatus_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvTabCheckStatus_SimObjLstCache = await vTabCheckStatus_Sim_GetObjLstsessionStorage(
        strPrjId,
        strPrjDataBaseId,
      );
      break;
    case '03': //localStorage
      arrvTabCheckStatus_SimObjLstCache = await vTabCheckStatus_Sim_GetObjLstlocalStorage(
        strPrjId,
        strPrjDataBaseId,
      );
      break;
    case '02': //ClientCache
      arrvTabCheckStatus_SimObjLstCache = await vTabCheckStatus_Sim_GetObjLstClientCache(
        strPrjId,
        strPrjDataBaseId,
      );
      break;
    default:
      arrvTabCheckStatus_SimObjLstCache = await vTabCheckStatus_Sim_GetObjLstClientCache(
        strPrjId,
        strPrjDataBaseId,
      );
      break;
  }
  return arrvTabCheckStatus_SimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vTabCheckStatus_Sim_GetObjLstPureCache(
  strPrjId: string,
  strPrjDataBaseId: string,
) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvTabCheckStatus_SimObjLstCache;
  switch (clsvTabCheckStatus_SimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvTabCheckStatus_SimObjLstCache =
        await vTabCheckStatus_Sim_GetObjLstsessionStoragePureCache(strPrjId, strPrjDataBaseId);
      break;
    case '03': //localStorage
      arrvTabCheckStatus_SimObjLstCache = await vTabCheckStatus_Sim_GetObjLstlocalStoragePureCache(
        strPrjId,
        strPrjDataBaseId,
      );
      break;
    case '02': //ClientCache
      arrvTabCheckStatus_SimObjLstCache = null;
      break;
    default:
      arrvTabCheckStatus_SimObjLstCache = null;
      break;
  }
  return arrvTabCheckStatus_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vTabCheckStatus_Sim_GetSubObjLstCache(
  objvTabCheckStatus_SimCond: clsvTabCheckStatus_SimEN,
  strPrjId: string,
  strPrjDataBaseId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvTabCheckStatus_SimObjLstCache = await vTabCheckStatus_Sim_GetObjLstCache(
    strPrjId,
    strPrjDataBaseId,
  );
  let arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimObjLstCache;
  if (
    objvTabCheckStatus_SimCond.sfFldComparisonOp == null ||
    objvTabCheckStatus_SimCond.sfFldComparisonOp == ''
  )
    return arrvTabCheckStatus_SimSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvTabCheckStatus_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvTabCheckStatus_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvTabCheckStatus_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvTabCheckStatus_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvTabCheckStatus_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvTabCheckStatus_SimCond),
      vTabCheckStatus_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvTabCheckStatus_SimEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function vTabCheckStatus_Sim_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsvTabCheckStatus_SimEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(vTabCheckStatus_Sim_Controller, strAction);

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
          vTabCheckStatus_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabCheckStatus_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vTabCheckStatus_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strPrjId: string,
  strPrjDataBaseId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrvTabCheckStatus_SimObjLstCache = await vTabCheckStatus_Sim_GetObjLstCache(
      strPrjId,
      strPrjDataBaseId,
    );
    const arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrvTabCheckStatus_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvTabCheckStatus_SimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vTabCheckStatus_Sim_Controller, strAction);

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
          vTabCheckStatus_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabCheckStatus_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vTabCheckStatus_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvTabCheckStatus_SimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vTabCheckStatus_Sim_Controller, strAction);

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
          vTabCheckStatus_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabCheckStatus_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vTabCheckStatus_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
  strPrjDataBaseId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvTabCheckStatus_SimEN>();
  const arrvTabCheckStatus_SimObjLstCache = await vTabCheckStatus_Sim_GetObjLstCache(
    strPrjId,
    strPrjDataBaseId,
  );
  if (arrvTabCheckStatus_SimObjLstCache.length == 0) return arrvTabCheckStatus_SimObjLstCache;
  let arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvTabCheckStatus_SimCond = new clsvTabCheckStatus_SimEN();
  ObjectAssign(objvTabCheckStatus_SimCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvTabCheckStatus_SimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvTabCheckStatus_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvTabCheckStatus_SimSel.length == 0) return arrvTabCheckStatus_SimSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.sort(
        vTabCheckStatus_Sim_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.sort(objPagerPara.sortFun);
    }
    arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.slice(intStart, intEnd);
    return arrvTabCheckStatus_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vTabCheckStatus_Sim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvTabCheckStatus_SimEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vTabCheckStatus_Sim_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvTabCheckStatus_SimEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvTabCheckStatus_SimEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vTabCheckStatus_Sim_Controller, strAction);

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
          vTabCheckStatus_Sim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTabCheckStatus_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
        vTabCheckStatus_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_IsExistRecordCache(
  objvTabCheckStatus_SimCond: clsvTabCheckStatus_SimEN,
  strPrjId: string,
  strPrjDataBaseId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvTabCheckStatus_SimObjLstCache = await vTabCheckStatus_Sim_GetObjLstCache(
    strPrjId,
    strPrjDataBaseId,
  );
  if (arrvTabCheckStatus_SimObjLstCache == null) return false;
  let arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimObjLstCache;
  if (
    objvTabCheckStatus_SimCond.sfFldComparisonOp == null ||
    objvTabCheckStatus_SimCond.sfFldComparisonOp == ''
  )
    return arrvTabCheckStatus_SimSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvTabCheckStatus_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvTabCheckStatus_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvTabCheckStatus_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvTabCheckStatus_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvTabCheckStatus_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvTabCheckStatus_SimCond),
      vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vTabCheckStatus_Sim_Controller, strAction);

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
        vTabCheckStatus_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_IsExistCache(
  lngmId: number,
  strPrjId: string,
  strPrjDataBaseId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrvTabCheckStatus_SimObjLstCache = await vTabCheckStatus_Sim_GetObjLstCache(
    strPrjId,
    strPrjDataBaseId,
  );
  if (arrvTabCheckStatus_SimObjLstCache == null) return false;
  try {
    const arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    if (arrvTabCheckStatus_SimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vTabCheckStatus_Sim_Controller, strAction);

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
        vTabCheckStatus_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabCheckStatus_Sim_ConstructorName,
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
export async function vTabCheckStatus_Sim_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vTabCheckStatus_Sim_Controller, strAction);

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
        vTabCheckStatus_Sim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vTabCheckStatus_Sim_ConstructorName,
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
 * @param objvTabCheckStatus_SimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vTabCheckStatus_Sim_GetRecCountByCondCache(
  objvTabCheckStatus_SimCond: clsvTabCheckStatus_SimEN,
  strPrjId: string,
  strPrjDataBaseId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvTabCheckStatus_SimObjLstCache = await vTabCheckStatus_Sim_GetObjLstCache(
    strPrjId,
    strPrjDataBaseId,
  );
  if (arrvTabCheckStatus_SimObjLstCache == null) return 0;
  let arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimObjLstCache;
  if (
    objvTabCheckStatus_SimCond.sfFldComparisonOp == null ||
    objvTabCheckStatus_SimCond.sfFldComparisonOp == ''
  )
    return arrvTabCheckStatus_SimSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvTabCheckStatus_SimCond.sfFldComparisonOp,
  );
  //console.log("clsvTabCheckStatus_SimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvTabCheckStatus_SimCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvTabCheckStatus_SimCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvTabCheckStatus_SimSel = arrvTabCheckStatus_SimSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvTabCheckStatus_SimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvTabCheckStatus_SimCond),
      vTabCheckStatus_Sim_ConstructorName,
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
export function vTabCheckStatus_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vTabCheckStatus_Sim_ReFreshThisCache4Head(strPrjId: string): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsvTabCheckStatus_SimEN._CurrTabName, strPrjId);
  switch (clsvTabCheckStatus_SimEN.CacheModeId) {
    case '04': //sessionStorage
      CacheHelper.ClearSessionStorage4Head(strKey);
      break;
    case '03': //localStorage
      CacheHelper.ClearLocalStorage4Head(strKey);
      break;
    default:
      CacheHelper.Remove(strKey);
      break;
  }
}
/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vTabCheckStatus_Sim_ReFreshThisCache(
  strPrjId: string,
  strPrjDataBaseId: string,
): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsvTabCheckStatus_SimWApi.vTabCheckStatus_Sim_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsvTabCheckStatus_SimWApi.vTabCheckStatus_Sim_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjDataBaseId) == true) {
    const strMsg = Format(
      '参数:[strPrjDataBaseId]不能为空!(In clsvTabCheckStatus_SimWApi.vTabCheckStatus_Sim_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjDataBaseId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjDataBaseId]的长度:[{0}]不正确!(clsvTabCheckStatus_SimWApi.vTabCheckStatus_Sim_ReFreshThisCache)',
      strPrjDataBaseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format(
      '{0}_{1}_{2}',
      clsvTabCheckStatus_SimEN._CurrTabName,
      strPrjId,
      strPrjDataBaseId,
    );
    switch (clsvTabCheckStatus_SimEN.CacheModeId) {
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
    const strMsg = Format('刷新缓存成功!');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vTabCheckStatus_Sim_GetJSONStrByObj(
  pobjvTabCheckStatus_SimEN: clsvTabCheckStatus_SimEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvTabCheckStatus_SimEN);
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vTabCheckStatus_Sim_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvTabCheckStatus_SimEN> {
  let arrvTabCheckStatus_SimObjLst = new Array<clsvTabCheckStatus_SimEN>();
  if (strJSON === '') {
    return arrvTabCheckStatus_SimObjLst;
  }
  try {
    arrvTabCheckStatus_SimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvTabCheckStatus_SimObjLst;
  }
  return arrvTabCheckStatus_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvTabCheckStatus_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vTabCheckStatus_Sim_GetObjLstByJSONObjLst(
  arrvTabCheckStatus_SimObjLstS: Array<clsvTabCheckStatus_SimEN>,
): Array<clsvTabCheckStatus_SimEN> {
  const arrvTabCheckStatus_SimObjLst = new Array<clsvTabCheckStatus_SimEN>();
  for (const objInFor of arrvTabCheckStatus_SimObjLstS) {
    const obj1 = vTabCheckStatus_Sim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvTabCheckStatus_SimObjLst.push(obj1);
  }
  return arrvTabCheckStatus_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vTabCheckStatus_Sim_GetObjByJSONStr(strJSON: string): clsvTabCheckStatus_SimEN {
  let pobjvTabCheckStatus_SimEN = new clsvTabCheckStatus_SimEN();
  if (strJSON === '') {
    return pobjvTabCheckStatus_SimEN;
  }
  try {
    pobjvTabCheckStatus_SimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvTabCheckStatus_SimEN;
  }
  return pobjvTabCheckStatus_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vTabCheckStatus_Sim_GetCombineCondition(
  objvTabCheckStatus_SimCond: clsvTabCheckStatus_SimEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabCheckStatus_SimCond.dicFldComparisonOp,
      clsvTabCheckStatus_SimEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objvTabCheckStatus_SimCond.dicFldComparisonOp[clsvTabCheckStatus_SimEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvTabCheckStatus_SimEN.con_mId,
      objvTabCheckStatus_SimCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabCheckStatus_SimCond.dicFldComparisonOp,
      clsvTabCheckStatus_SimEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvTabCheckStatus_SimCond.dicFldComparisonOp[clsvTabCheckStatus_SimEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabCheckStatus_SimEN.con_PrjId,
      objvTabCheckStatus_SimCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabCheckStatus_SimCond.dicFldComparisonOp,
      clsvTabCheckStatus_SimEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objvTabCheckStatus_SimCond.dicFldComparisonOp[clsvTabCheckStatus_SimEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabCheckStatus_SimEN.con_TabId,
      objvTabCheckStatus_SimCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabCheckStatus_SimCond.dicFldComparisonOp,
      clsvTabCheckStatus_SimEN.con_ErrorLevelId,
    ) == true
  ) {
    const strComparisonOpErrorLevelId: string =
      objvTabCheckStatus_SimCond.dicFldComparisonOp[clsvTabCheckStatus_SimEN.con_ErrorLevelId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvTabCheckStatus_SimEN.con_ErrorLevelId,
      objvTabCheckStatus_SimCond.errorLevelId,
      strComparisonOpErrorLevelId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabCheckStatus_SimCond.dicFldComparisonOp,
      clsvTabCheckStatus_SimEN.con_ErrorMsg,
    ) == true
  ) {
    const strComparisonOpErrorMsg: string =
      objvTabCheckStatus_SimCond.dicFldComparisonOp[clsvTabCheckStatus_SimEN.con_ErrorMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabCheckStatus_SimEN.con_ErrorMsg,
      objvTabCheckStatus_SimCond.errorMsg,
      strComparisonOpErrorMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvTabCheckStatus_SimCond.dicFldComparisonOp,
      clsvTabCheckStatus_SimEN.con_PrjDataBaseId,
    ) == true
  ) {
    const strComparisonOpPrjDataBaseId: string =
      objvTabCheckStatus_SimCond.dicFldComparisonOp[clsvTabCheckStatus_SimEN.con_PrjDataBaseId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvTabCheckStatus_SimEN.con_PrjDataBaseId,
      objvTabCheckStatus_SimCond.prjDataBaseId,
      strComparisonOpPrjDataBaseId,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvTabCheckStatus_SimENS:源对象
 * @param objvTabCheckStatus_SimENT:目标对象
 */
export function vTabCheckStatus_Sim_GetObjFromJsonObj(
  objvTabCheckStatus_SimENS: clsvTabCheckStatus_SimEN,
): clsvTabCheckStatus_SimEN {
  const objvTabCheckStatus_SimENT: clsvTabCheckStatus_SimEN = new clsvTabCheckStatus_SimEN();
  ObjectAssign(objvTabCheckStatus_SimENT, objvTabCheckStatus_SimENS);
  return objvTabCheckStatus_SimENT;
}
