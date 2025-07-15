/**
 * 类名:clsvViewRegionReferNumWApi
 * 表名:vViewRegionReferNum(00050636)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:48:38
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vViewRegionReferNum(vViewRegionReferNum)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
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
import { clsvViewRegionReferNumEN } from '@/ts/L0Entity/RegionManage/clsvViewRegionReferNumEN';
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vViewRegionReferNum_Controller = 'vViewRegionReferNumApi';
export const vViewRegionReferNum_ConstructorName = 'vViewRegionReferNum';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRegionId:关键字
 * @returns 对象
 **/
export async function vViewRegionReferNum_GetObjByRegionIdAsync(
  strRegionId: string,
): Promise<clsvViewRegionReferNumEN | null> {
  const strThisFuncName = 'GetObjByRegionIdAsync';

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsvViewRegionReferNumWApi.GetObjByRegionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsvViewRegionReferNumWApi.GetObjByRegionIdAsync)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByRegionId';
  const strUrl = GetWebApiUrl(vViewRegionReferNum_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRegionId,
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
      const objvViewRegionReferNum = vViewRegionReferNum_GetObjFromJsonObj(returnObj);
      return objvViewRegionReferNum;
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
        vViewRegionReferNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewRegionReferNum_ConstructorName,
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
 * @param strRegionId:所给的关键字
 * @returns 对象
 */
export async function vViewRegionReferNum_GetObjByRegionIdlocalStorage(strRegionId: string) {
  const strThisFuncName = 'GetObjByRegionIdlocalStorage';

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsvViewRegionReferNumWApi.GetObjByRegionIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsvViewRegionReferNumWApi.GetObjByRegionIdlocalStorage)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvViewRegionReferNumEN._CurrTabName, strRegionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvViewRegionReferNumCache: clsvViewRegionReferNumEN = JSON.parse(strTempObj);
    return objvViewRegionReferNumCache;
  }
  try {
    const objvViewRegionReferNum = await vViewRegionReferNum_GetObjByRegionIdAsync(strRegionId);
    if (objvViewRegionReferNum != null) {
      localStorage.setItem(strKey, JSON.stringify(objvViewRegionReferNum));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvViewRegionReferNum;
    }
    return objvViewRegionReferNum;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRegionId,
      vViewRegionReferNum_ConstructorName,
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
 * @param strRegionId:所给的关键字
 * @returns 对象
 */
export async function vViewRegionReferNum_GetObjByRegionIdCache(
  strRegionId: string,
  strPrjIdRefer: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByRegionIdCache';

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsvViewRegionReferNumWApi.GetObjByRegionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsvViewRegionReferNumWApi.GetObjByRegionIdCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvViewRegionReferNumObjLstCache = await vViewRegionReferNum_GetObjLstCache(strPrjIdRefer);
  try {
    const arrvViewRegionReferNumSel = arrvViewRegionReferNumObjLstCache.filter(
      (x) => x.regionId == strRegionId,
    );
    let objvViewRegionReferNum: clsvViewRegionReferNumEN;
    if (arrvViewRegionReferNumSel.length > 0) {
      objvViewRegionReferNum = arrvViewRegionReferNumSel[0];
      return objvViewRegionReferNum;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvViewRegionReferNumConst = await vViewRegionReferNum_GetObjByRegionIdAsync(
          strRegionId,
        );
        if (objvViewRegionReferNumConst != null) {
          vViewRegionReferNum_ReFreshThisCache(strPrjIdRefer);
          return objvViewRegionReferNumConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRegionId,
      vViewRegionReferNum_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
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
export function vViewRegionReferNum_SortFunDefa(
  a: clsvViewRegionReferNumEN,
  b: clsvViewRegionReferNumEN,
): number {
  return a.regionId.localeCompare(b.regionId);
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
export function vViewRegionReferNum_SortFunDefa2Fld(
  a: clsvViewRegionReferNumEN,
  b: clsvViewRegionReferNumEN,
): number {
  if (a.referNum == b.referNum) return a.prjIdRefer.localeCompare(b.prjIdRefer);
  else return a.referNum - b.referNum;
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
export function vViewRegionReferNum_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvViewRegionReferNumEN.con_RegionId:
        return (a: clsvViewRegionReferNumEN, b: clsvViewRegionReferNumEN) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsvViewRegionReferNumEN.con_ReferNum:
        return (a: clsvViewRegionReferNumEN, b: clsvViewRegionReferNumEN) => {
          return a.referNum - b.referNum;
        };
      case clsvViewRegionReferNumEN.con_PrjIdRefer:
        return (a: clsvViewRegionReferNumEN, b: clsvViewRegionReferNumEN) => {
          return a.prjIdRefer.localeCompare(b.prjIdRefer);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vViewRegionReferNum]中不存在!(in ${vViewRegionReferNum_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvViewRegionReferNumEN.con_RegionId:
        return (a: clsvViewRegionReferNumEN, b: clsvViewRegionReferNumEN) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsvViewRegionReferNumEN.con_ReferNum:
        return (a: clsvViewRegionReferNumEN, b: clsvViewRegionReferNumEN) => {
          return b.referNum - a.referNum;
        };
      case clsvViewRegionReferNumEN.con_PrjIdRefer:
        return (a: clsvViewRegionReferNumEN, b: clsvViewRegionReferNumEN) => {
          return b.prjIdRefer.localeCompare(a.prjIdRefer);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vViewRegionReferNum]中不存在!(in ${vViewRegionReferNum_ConstructorName}.${strThisFuncName})`;
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
export async function vViewRegionReferNum_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvViewRegionReferNumEN.con_RegionId:
      return (obj: clsvViewRegionReferNumEN) => {
        return obj.regionId === value;
      };
    case clsvViewRegionReferNumEN.con_ReferNum:
      return (obj: clsvViewRegionReferNumEN) => {
        return obj.referNum === value;
      };
    case clsvViewRegionReferNumEN.con_PrjIdRefer:
      return (obj: clsvViewRegionReferNumEN) => {
        return obj.prjIdRefer === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vViewRegionReferNum]中不存在!(in ${vViewRegionReferNum_ConstructorName}.${strThisFuncName})`;
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
 @param strPrjIdRefer:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vViewRegionReferNum_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdReferClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdReferClassfy) == true) {
    const strMsg = Format(
      '参数:[strPrjIdReferClassfy]不能为空!(In clsvViewRegionReferNumWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdReferClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdReferClassfy]的长度:[{0}]不正确!(clsvViewRegionReferNumWApi.func)',
      strPrjIdReferClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvViewRegionReferNumEN.con_RegionId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvViewRegionReferNumEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvViewRegionReferNumEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strRegionId = strInValue;
  if (IsNullOrEmpty(strRegionId) == true) {
    return '';
  }
  const objvViewRegionReferNum = await vViewRegionReferNum_GetObjByRegionIdCache(
    strRegionId,
    strPrjIdReferClassfy,
  );
  if (objvViewRegionReferNum == null) return '';
  if (objvViewRegionReferNum.GetFldValue(strOutFldName) == null) return '';
  return objvViewRegionReferNum.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjIdRefer:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vViewRegionReferNum_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdReferClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdReferClassfy) == true) {
    const strMsg = Format(
      '参数:[strPrjIdReferClassfy]不能为空!(In clsvViewRegionReferNumWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdReferClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdReferClassfy]的长度:[{0}]不正确!(clsvViewRegionReferNumWApi.funcKey)',
      strPrjIdReferClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvViewRegionReferNumEN.con_RegionId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvViewRegionReferNum = await vViewRegionReferNum_GetObjLstCache(strPrjIdReferClassfy);
  if (arrvViewRegionReferNum == null) return [];
  let arrvViewRegionReferNumSel = arrvViewRegionReferNum;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvViewRegionReferNumSel.length == 0) return [];
  return arrvViewRegionReferNumSel.map((x) => x.regionId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vViewRegionReferNum_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vViewRegionReferNum_Controller, strAction);

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
        vViewRegionReferNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewRegionReferNum_ConstructorName,
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
export async function vViewRegionReferNum_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vViewRegionReferNum_Controller, strAction);

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
        vViewRegionReferNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewRegionReferNum_ConstructorName,
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
export async function vViewRegionReferNum_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vViewRegionReferNum_Controller, strAction);

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
        vViewRegionReferNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewRegionReferNum_ConstructorName,
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
export async function vViewRegionReferNum_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvViewRegionReferNumEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vViewRegionReferNum_Controller, strAction);

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
      const objvViewRegionReferNum = vViewRegionReferNum_GetObjFromJsonObj(returnObj);
      return objvViewRegionReferNum;
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
        vViewRegionReferNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewRegionReferNum_ConstructorName,
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
export async function vViewRegionReferNum_GetObjLstClientCache(strPrjIdRefer: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvViewRegionReferNumEN.WhereFormat) == false) {
    strWhereCond = Format(clsvViewRegionReferNumEN.WhereFormat, strPrjIdRefer);
  } else {
    strWhereCond = Format("PrjIdRefer='{0}'", strPrjIdRefer);
  }
  const strKey = Format('{0}_{1}', clsvViewRegionReferNumEN._CurrTabName, strPrjIdRefer);
  if (IsNullOrEmpty(clsvViewRegionReferNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvViewRegionReferNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvViewRegionReferNumExObjLstCache: Array<clsvViewRegionReferNumEN> =
      CacheHelper.Get(strKey);
    const arrvViewRegionReferNumObjLstT = vViewRegionReferNum_GetObjLstByJSONObjLst(
      arrvViewRegionReferNumExObjLstCache,
    );
    return arrvViewRegionReferNumObjLstT;
  }
  try {
    const arrvViewRegionReferNumExObjLst = await vViewRegionReferNum_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvViewRegionReferNumExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvViewRegionReferNumExObjLst.length,
    );
    console.log(strInfo);
    return arrvViewRegionReferNumExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vViewRegionReferNum_ConstructorName,
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
export async function vViewRegionReferNum_GetObjLstlocalStorage(strPrjIdRefer: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvViewRegionReferNumEN.WhereFormat) == false) {
    strWhereCond = Format(clsvViewRegionReferNumEN.WhereFormat, strPrjIdRefer);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvViewRegionReferNumEN.con_PrjIdRefer, strPrjIdRefer);
  }
  const strKey = Format('{0}_{1}', clsvViewRegionReferNumEN._CurrTabName, strPrjIdRefer);
  if (IsNullOrEmpty(clsvViewRegionReferNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvViewRegionReferNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvViewRegionReferNumExObjLstCache: Array<clsvViewRegionReferNumEN> =
      JSON.parse(strTempObjLst);
    const arrvViewRegionReferNumObjLstT = vViewRegionReferNum_GetObjLstByJSONObjLst(
      arrvViewRegionReferNumExObjLstCache,
    );
    return arrvViewRegionReferNumObjLstT;
  }
  try {
    const arrvViewRegionReferNumExObjLst = await vViewRegionReferNum_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvViewRegionReferNumEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrvViewRegionReferNumExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvViewRegionReferNumExObjLst.length,
    );
    console.log(strInfo);
    return arrvViewRegionReferNumExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vViewRegionReferNum_ConstructorName,
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
export async function vViewRegionReferNum_GetObjLstlocalStoragePureCache(strPrjIdRefer: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvViewRegionReferNumEN._CurrTabName, strPrjIdRefer);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvViewRegionReferNumObjLstCache: Array<clsvViewRegionReferNumEN> =
      JSON.parse(strTempObjLst);
    return arrvViewRegionReferNumObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vViewRegionReferNum_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvViewRegionReferNumEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vViewRegionReferNum_Controller, strAction);

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
          vViewRegionReferNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vViewRegionReferNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vViewRegionReferNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewRegionReferNum_ConstructorName,
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
export async function vViewRegionReferNum_GetObjLstsessionStorage(strPrjIdRefer: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvViewRegionReferNumEN.WhereFormat) == false) {
    strWhereCond = Format(clsvViewRegionReferNumEN.WhereFormat, strPrjIdRefer);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvViewRegionReferNumEN.con_PrjIdRefer, strPrjIdRefer);
  }
  const strKey = Format('{0}_{1}', clsvViewRegionReferNumEN._CurrTabName, strPrjIdRefer);
  if (IsNullOrEmpty(clsvViewRegionReferNumEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvViewRegionReferNumEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvViewRegionReferNumExObjLstCache: Array<clsvViewRegionReferNumEN> =
      JSON.parse(strTempObjLst);
    const arrvViewRegionReferNumObjLstT = vViewRegionReferNum_GetObjLstByJSONObjLst(
      arrvViewRegionReferNumExObjLstCache,
    );
    return arrvViewRegionReferNumObjLstT;
  }
  try {
    const arrvViewRegionReferNumExObjLst = await vViewRegionReferNum_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsvViewRegionReferNumEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrvViewRegionReferNumExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvViewRegionReferNumExObjLst.length,
    );
    console.log(strInfo);
    return arrvViewRegionReferNumExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vViewRegionReferNum_ConstructorName,
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
export async function vViewRegionReferNum_GetObjLstsessionStoragePureCache(strPrjIdRefer: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvViewRegionReferNumEN._CurrTabName, strPrjIdRefer);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvViewRegionReferNumObjLstCache: Array<clsvViewRegionReferNumEN> =
      JSON.parse(strTempObjLst);
    return arrvViewRegionReferNumObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vViewRegionReferNum_GetObjLstCache(
  strPrjIdRefer: string,
): Promise<Array<clsvViewRegionReferNumEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjIdRefer) == true) {
    const strMsg = Format(
      '参数:[strPrjIdRefer]不能为空！(In clsvViewRegionReferNumWApi.vViewRegionReferNum_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdRefer.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdRefer]的长度:[{0}]不正确！(clsvViewRegionReferNumWApi.vViewRegionReferNum_GetObjLstCache)',
      strPrjIdRefer.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvViewRegionReferNumObjLstCache;
  switch (clsvViewRegionReferNumEN.CacheModeId) {
    case '04': //sessionStorage
      arrvViewRegionReferNumObjLstCache = await vViewRegionReferNum_GetObjLstsessionStorage(
        strPrjIdRefer,
      );
      break;
    case '03': //localStorage
      arrvViewRegionReferNumObjLstCache = await vViewRegionReferNum_GetObjLstlocalStorage(
        strPrjIdRefer,
      );
      break;
    case '02': //ClientCache
      arrvViewRegionReferNumObjLstCache = await vViewRegionReferNum_GetObjLstClientCache(
        strPrjIdRefer,
      );
      break;
    default:
      arrvViewRegionReferNumObjLstCache = await vViewRegionReferNum_GetObjLstClientCache(
        strPrjIdRefer,
      );
      break;
  }
  return arrvViewRegionReferNumObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vViewRegionReferNum_GetObjLstPureCache(strPrjIdRefer: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvViewRegionReferNumObjLstCache;
  switch (clsvViewRegionReferNumEN.CacheModeId) {
    case '04': //sessionStorage
      arrvViewRegionReferNumObjLstCache =
        await vViewRegionReferNum_GetObjLstsessionStoragePureCache(strPrjIdRefer);
      break;
    case '03': //localStorage
      arrvViewRegionReferNumObjLstCache = await vViewRegionReferNum_GetObjLstlocalStoragePureCache(
        strPrjIdRefer,
      );
      break;
    case '02': //ClientCache
      arrvViewRegionReferNumObjLstCache = null;
      break;
    default:
      arrvViewRegionReferNumObjLstCache = null;
      break;
  }
  return arrvViewRegionReferNumObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrRegionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vViewRegionReferNum_GetSubObjLstCache(
  objvViewRegionReferNumCond: ConditionCollection,
  strPrjIdRefer: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvViewRegionReferNumObjLstCache = await vViewRegionReferNum_GetObjLstCache(strPrjIdRefer);
  let arrvViewRegionReferNumSel = arrvViewRegionReferNumObjLstCache;
  if (objvViewRegionReferNumCond.GetConditions().length == 0) return arrvViewRegionReferNumSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objvViewRegionReferNumCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvViewRegionReferNumSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvViewRegionReferNumCond),
      vViewRegionReferNum_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvViewRegionReferNumEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrRegionId:关键字列表
 * @returns 对象列表
 **/
export async function vViewRegionReferNum_GetObjLstByRegionIdLstAsync(
  arrRegionId: Array<string>,
): Promise<Array<clsvViewRegionReferNumEN>> {
  const strThisFuncName = 'GetObjLstByRegionIdLstAsync';
  const strAction = 'GetObjLstByRegionIdLst';
  const strUrl = GetWebApiUrl(vViewRegionReferNum_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRegionId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vViewRegionReferNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vViewRegionReferNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vViewRegionReferNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewRegionReferNum_ConstructorName,
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
 * @param arrstrRegionIdLst:关键字列表
 * @returns 对象列表
 */
export async function vViewRegionReferNum_GetObjLstByRegionIdLstCache(
  arrRegionIdLst: Array<string>,
  strPrjIdRefer: string,
) {
  const strThisFuncName = 'GetObjLstByRegionIdLstCache';
  try {
    const arrvViewRegionReferNumObjLstCache = await vViewRegionReferNum_GetObjLstCache(
      strPrjIdRefer,
    );
    const arrvViewRegionReferNumSel = arrvViewRegionReferNumObjLstCache.filter(
      (x) => arrRegionIdLst.indexOf(x.regionId) > -1,
    );
    return arrvViewRegionReferNumSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrRegionIdLst.join(','),
      vViewRegionReferNum_ConstructorName,
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
export async function vViewRegionReferNum_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvViewRegionReferNumEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vViewRegionReferNum_Controller, strAction);

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
          vViewRegionReferNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vViewRegionReferNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vViewRegionReferNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewRegionReferNum_ConstructorName,
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
export async function vViewRegionReferNum_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvViewRegionReferNumEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vViewRegionReferNum_Controller, strAction);

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
          vViewRegionReferNum_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vViewRegionReferNum_GetObjLstByJSONObjLst(returnObjLst);
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
        vViewRegionReferNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewRegionReferNum_ConstructorName,
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
 * @param objstrRegionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vViewRegionReferNum_IsExistRecordCache(
  objvViewRegionReferNumCond: ConditionCollection,
  strPrjIdRefer: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvViewRegionReferNumObjLstCache = await vViewRegionReferNum_GetObjLstCache(strPrjIdRefer);
  if (arrvViewRegionReferNumObjLstCache == null) return false;
  let arrvViewRegionReferNumSel = arrvViewRegionReferNumObjLstCache;
  if (objvViewRegionReferNumCond.GetConditions().length == 0)
    return arrvViewRegionReferNumSel.length > 0 ? true : false;
  try {
    for (const objCondition of objvViewRegionReferNumCond.GetConditions()) {
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
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvViewRegionReferNumSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvViewRegionReferNumCond),
      vViewRegionReferNum_ConstructorName,
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
export async function vViewRegionReferNum_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vViewRegionReferNum_Controller, strAction);

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
        vViewRegionReferNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewRegionReferNum_ConstructorName,
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
 * @param strRegionId:所给的关键字
 * @returns 对象
 */
export async function vViewRegionReferNum_IsExistCache(strRegionId: string, strPrjIdRefer: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvViewRegionReferNumObjLstCache = await vViewRegionReferNum_GetObjLstCache(strPrjIdRefer);
  if (arrvViewRegionReferNumObjLstCache == null) return false;
  try {
    const arrvViewRegionReferNumSel = arrvViewRegionReferNumObjLstCache.filter(
      (x) => x.regionId == strRegionId,
    );
    if (arrvViewRegionReferNumSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strRegionId,
      vViewRegionReferNum_ConstructorName,
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
 * @param strRegionId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vViewRegionReferNum_IsExistAsync(strRegionId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vViewRegionReferNum_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRegionId,
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
        vViewRegionReferNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewRegionReferNum_ConstructorName,
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
export async function vViewRegionReferNum_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vViewRegionReferNum_Controller, strAction);

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
        vViewRegionReferNum_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vViewRegionReferNum_ConstructorName,
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
 * @param objvViewRegionReferNumCond:条件对象
 * @returns 对象列表记录数
 */
export async function vViewRegionReferNum_GetRecCountByCondCache(
  objvViewRegionReferNumCond: ConditionCollection,
  strPrjIdRefer: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvViewRegionReferNumObjLstCache = await vViewRegionReferNum_GetObjLstCache(strPrjIdRefer);
  if (arrvViewRegionReferNumObjLstCache == null) return 0;
  let arrvViewRegionReferNumSel = arrvViewRegionReferNumObjLstCache;
  if (objvViewRegionReferNumCond.GetConditions().length == 0)
    return arrvViewRegionReferNumSel.length;
  try {
    for (const objCondition of objvViewRegionReferNumCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvViewRegionReferNumSel = arrvViewRegionReferNumSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvViewRegionReferNumSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvViewRegionReferNumCond),
      vViewRegionReferNum_ConstructorName,
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
export function vViewRegionReferNum_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vViewRegionReferNum_ReFreshThisCache(strPrjIdRefer: string): void {
  if (IsNullOrEmpty(strPrjIdRefer) == true) {
    const strMsg = Format(
      '参数:[strPrjIdRefer]不能为空!(In clsvViewRegionReferNumWApi.vViewRegionReferNum_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdRefer.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdRefer]的长度:[{0}]不正确!(clsvViewRegionReferNumWApi.vViewRegionReferNum_ReFreshThisCache)',
      strPrjIdRefer.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvViewRegionReferNumEN._CurrTabName, strPrjIdRefer);
    switch (clsvViewRegionReferNumEN.CacheModeId) {
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
    clsvViewRegionReferNumEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function vViewRegionReferNum_GetLastRefreshTime(): string {
  if (clsvViewRegionReferNumEN._RefreshTimeLst.length == 0) return '';
  return clsvViewRegionReferNumEN._RefreshTimeLst[
    clsvViewRegionReferNumEN._RefreshTimeLst.length - 1
  ];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vViewRegionReferNum_GetJSONStrByObj(
  pobjvViewRegionReferNumEN: clsvViewRegionReferNumEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvViewRegionReferNumEN);
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
export function vViewRegionReferNum_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvViewRegionReferNumEN> {
  let arrvViewRegionReferNumObjLst = new Array<clsvViewRegionReferNumEN>();
  if (strJSON === '') {
    return arrvViewRegionReferNumObjLst;
  }
  try {
    arrvViewRegionReferNumObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvViewRegionReferNumObjLst;
  }
  return arrvViewRegionReferNumObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvViewRegionReferNumObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vViewRegionReferNum_GetObjLstByJSONObjLst(
  arrvViewRegionReferNumObjLstS: Array<clsvViewRegionReferNumEN>,
): Array<clsvViewRegionReferNumEN> {
  const arrvViewRegionReferNumObjLst = new Array<clsvViewRegionReferNumEN>();
  for (const objInFor of arrvViewRegionReferNumObjLstS) {
    const obj1 = vViewRegionReferNum_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvViewRegionReferNumObjLst.push(obj1);
  }
  return arrvViewRegionReferNumObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vViewRegionReferNum_GetObjByJSONStr(strJSON: string): clsvViewRegionReferNumEN {
  let pobjvViewRegionReferNumEN = new clsvViewRegionReferNumEN();
  if (strJSON === '') {
    return pobjvViewRegionReferNumEN;
  }
  try {
    pobjvViewRegionReferNumEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvViewRegionReferNumEN;
  }
  return pobjvViewRegionReferNumEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vViewRegionReferNum_GetCombineCondition(
  objvViewRegionReferNumCond: clsvViewRegionReferNumEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewRegionReferNumCond.dicFldComparisonOp,
      clsvViewRegionReferNumEN.con_RegionId,
    ) == true
  ) {
    const strComparisonOpRegionId: string =
      objvViewRegionReferNumCond.dicFldComparisonOp[clsvViewRegionReferNumEN.con_RegionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvViewRegionReferNumEN.con_RegionId,
      objvViewRegionReferNumCond.regionId,
      strComparisonOpRegionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewRegionReferNumCond.dicFldComparisonOp,
      clsvViewRegionReferNumEN.con_ReferNum,
    ) == true
  ) {
    const strComparisonOpReferNum: string =
      objvViewRegionReferNumCond.dicFldComparisonOp[clsvViewRegionReferNumEN.con_ReferNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvViewRegionReferNumEN.con_ReferNum,
      objvViewRegionReferNumCond.referNum,
      strComparisonOpReferNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvViewRegionReferNumCond.dicFldComparisonOp,
      clsvViewRegionReferNumEN.con_PrjIdRefer,
    ) == true
  ) {
    const strComparisonOpPrjIdRefer: string =
      objvViewRegionReferNumCond.dicFldComparisonOp[clsvViewRegionReferNumEN.con_PrjIdRefer];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvViewRegionReferNumEN.con_PrjIdRefer,
      objvViewRegionReferNumCond.prjIdRefer,
      strComparisonOpPrjIdRefer,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvViewRegionReferNumENS:源对象
 * @param objvViewRegionReferNumENT:目标对象
 */
export function vViewRegionReferNum_GetObjFromJsonObj(
  objvViewRegionReferNumENS: clsvViewRegionReferNumEN,
): clsvViewRegionReferNumEN {
  const objvViewRegionReferNumENT: clsvViewRegionReferNumEN = new clsvViewRegionReferNumEN();
  ObjectAssign(objvViewRegionReferNumENT, objvViewRegionReferNumENS);
  return objvViewRegionReferNumENT;
}
