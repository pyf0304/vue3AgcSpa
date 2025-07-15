/**
 * 类名:clsLog4GeneViewCodeWApi
 * 表名:Log4GeneViewCode(00050280)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:23
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
 * 生成界面代码日志(Log4GeneViewCode)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsLog4GeneViewCodeEN } from '@/ts/L0Entity/LogManage/clsLog4GeneViewCodeEN';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const log4GeneViewCode_Controller = 'Log4GeneViewCodeApi';
export const log4GeneViewCode_ConstructorName = 'log4GeneViewCode';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function Log4GeneViewCode_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsLog4GeneViewCodeEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsLog4GeneViewCodeWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

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
      const objLog4GeneViewCode = Log4GeneViewCode_GetObjFromJsonObj(returnObj);
      return objLog4GeneViewCode;
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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsLog4GeneViewCodeWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrLog4GeneViewCodeObjLstCache = await Log4GeneViewCode_GetObjLstCache();
  try {
    const arrLog4GeneViewCodeSel = arrLog4GeneViewCodeObjLstCache.filter((x) => x.mId == lngmId);
    let objLog4GeneViewCode: clsLog4GeneViewCodeEN;
    if (arrLog4GeneViewCodeSel.length > 0) {
      objLog4GeneViewCode = arrLog4GeneViewCodeSel[0];
      return objLog4GeneViewCode;
    } else {
      if (bolTryAsyncOnce == true) {
        const objLog4GeneViewCodeConst = await Log4GeneViewCode_GetObjBymIdAsync(lngmId);
        if (objLog4GeneViewCodeConst != null) {
          Log4GeneViewCode_ReFreshThisCache();
          return objLog4GeneViewCodeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsLog4GeneViewCodeWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsLog4GeneViewCodeEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objLog4GeneViewCodeCache: clsLog4GeneViewCodeEN = JSON.parse(strTempObj);
    return objLog4GeneViewCodeCache;
  }
  try {
    const objLog4GeneViewCode = await Log4GeneViewCode_GetObjBymIdAsync(lngmId);
    if (objLog4GeneViewCode != null) {
      localStorage.setItem(strKey, JSON.stringify(objLog4GeneViewCode));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objLog4GeneViewCode;
    }
    return objLog4GeneViewCode;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      log4GeneViewCode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objLog4GeneViewCode:所给的对象
 * @returns 对象
 */
export async function Log4GeneViewCode_UpdateObjInLstCache(
  objLog4GeneViewCode: clsLog4GeneViewCodeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrLog4GeneViewCodeObjLstCache = await Log4GeneViewCode_GetObjLstCache();
    const obj = arrLog4GeneViewCodeObjLstCache.find(
      (x) => x.userId == objLog4GeneViewCode.userId && x.viewId == objLog4GeneViewCode.viewId,
    );
    if (obj != null) {
      objLog4GeneViewCode.mId = obj.mId;
      ObjectAssign(obj, objLog4GeneViewCode);
    } else {
      arrLog4GeneViewCodeObjLstCache.push(objLog4GeneViewCode);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      log4GeneViewCode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function Log4GeneViewCode_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsLog4GeneViewCodeEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsLog4GeneViewCodeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsLog4GeneViewCodeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objLog4GeneViewCode = await Log4GeneViewCode_GetObjBymIdCache(lngmId);
  if (objLog4GeneViewCode == null) return '';
  if (objLog4GeneViewCode.GetFldValue(strOutFldName) == null) return '';
  return objLog4GeneViewCode.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function Log4GeneViewCode_SortFunDefa(
  a: clsLog4GeneViewCodeEN,
  b: clsLog4GeneViewCodeEN,
): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function Log4GeneViewCode_SortFunDefa2Fld(
  a: clsLog4GeneViewCodeEN,
  b: clsLog4GeneViewCodeEN,
): number {
  if (a.userId == b.userId) return a.viewId.localeCompare(b.viewId);
  else return a.userId.localeCompare(b.userId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function Log4GeneViewCode_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsLog4GeneViewCodeEN.con_mId:
        return (a: clsLog4GeneViewCodeEN, b: clsLog4GeneViewCodeEN) => {
          return a.mId - b.mId;
        };
      case clsLog4GeneViewCodeEN.con_UserId:
        return (a: clsLog4GeneViewCodeEN, b: clsLog4GeneViewCodeEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsLog4GeneViewCodeEN.con_ViewId:
        return (a: clsLog4GeneViewCodeEN, b: clsLog4GeneViewCodeEN) => {
          return a.viewId.localeCompare(b.viewId);
        };
      case clsLog4GeneViewCodeEN.con_PrjId:
        return (a: clsLog4GeneViewCodeEN, b: clsLog4GeneViewCodeEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsLog4GeneViewCodeEN.con_GeneCodeDate:
        return (a: clsLog4GeneViewCodeEN, b: clsLog4GeneViewCodeEN) => {
          if (a.geneCodeDate == null) return -1;
          if (b.geneCodeDate == null) return 1;
          return a.geneCodeDate.localeCompare(b.geneCodeDate);
        };
      case clsLog4GeneViewCodeEN.con_VersionGeneCode:
        return (a: clsLog4GeneViewCodeEN, b: clsLog4GeneViewCodeEN) => {
          return a.versionGeneCode.localeCompare(b.versionGeneCode);
        };
      case clsLog4GeneViewCodeEN.con_Memo:
        return (a: clsLog4GeneViewCodeEN, b: clsLog4GeneViewCodeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Log4GeneViewCode]中不存在!(in ${log4GeneViewCode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsLog4GeneViewCodeEN.con_mId:
        return (a: clsLog4GeneViewCodeEN, b: clsLog4GeneViewCodeEN) => {
          return b.mId - a.mId;
        };
      case clsLog4GeneViewCodeEN.con_UserId:
        return (a: clsLog4GeneViewCodeEN, b: clsLog4GeneViewCodeEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsLog4GeneViewCodeEN.con_ViewId:
        return (a: clsLog4GeneViewCodeEN, b: clsLog4GeneViewCodeEN) => {
          return b.viewId.localeCompare(a.viewId);
        };
      case clsLog4GeneViewCodeEN.con_PrjId:
        return (a: clsLog4GeneViewCodeEN, b: clsLog4GeneViewCodeEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsLog4GeneViewCodeEN.con_GeneCodeDate:
        return (a: clsLog4GeneViewCodeEN, b: clsLog4GeneViewCodeEN) => {
          if (b.geneCodeDate == null) return -1;
          if (a.geneCodeDate == null) return 1;
          return b.geneCodeDate.localeCompare(a.geneCodeDate);
        };
      case clsLog4GeneViewCodeEN.con_VersionGeneCode:
        return (a: clsLog4GeneViewCodeEN, b: clsLog4GeneViewCodeEN) => {
          return b.versionGeneCode.localeCompare(a.versionGeneCode);
        };
      case clsLog4GeneViewCodeEN.con_Memo:
        return (a: clsLog4GeneViewCodeEN, b: clsLog4GeneViewCodeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Log4GeneViewCode]中不存在!(in ${log4GeneViewCode_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function Log4GeneViewCode_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsLog4GeneViewCodeEN.con_mId:
      return (obj: clsLog4GeneViewCodeEN) => {
        return obj.mId === value;
      };
    case clsLog4GeneViewCodeEN.con_UserId:
      return (obj: clsLog4GeneViewCodeEN) => {
        return obj.userId === value;
      };
    case clsLog4GeneViewCodeEN.con_ViewId:
      return (obj: clsLog4GeneViewCodeEN) => {
        return obj.viewId === value;
      };
    case clsLog4GeneViewCodeEN.con_PrjId:
      return (obj: clsLog4GeneViewCodeEN) => {
        return obj.prjId === value;
      };
    case clsLog4GeneViewCodeEN.con_GeneCodeDate:
      return (obj: clsLog4GeneViewCodeEN) => {
        return obj.geneCodeDate === value;
      };
    case clsLog4GeneViewCodeEN.con_VersionGeneCode:
      return (obj: clsLog4GeneViewCodeEN) => {
        return obj.versionGeneCode === value;
      };
    case clsLog4GeneViewCodeEN.con_Memo:
      return (obj: clsLog4GeneViewCodeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[Log4GeneViewCode]中不存在!(in ${log4GeneViewCode_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function Log4GeneViewCode_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsLog4GeneViewCodeEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrLog4GeneViewCode = await Log4GeneViewCode_GetObjLstCache();
  if (arrLog4GeneViewCode == null) return [];
  let arrLog4GeneViewCodeSel = arrLog4GeneViewCode;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrLog4GeneViewCodeSel.length == 0) return [];
  return arrLog4GeneViewCodeSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function Log4GeneViewCode_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsLog4GeneViewCodeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

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
      const objLog4GeneViewCode = Log4GeneViewCode_GetObjFromJsonObj(returnObj);
      return objLog4GeneViewCode;
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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsLog4GeneViewCodeEN._CurrTabName;
  if (IsNullOrEmpty(clsLog4GeneViewCodeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsLog4GeneViewCodeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrLog4GeneViewCodeExObjLstCache: Array<clsLog4GeneViewCodeEN> = CacheHelper.Get(strKey);
    const arrLog4GeneViewCodeObjLstT = Log4GeneViewCode_GetObjLstByJSONObjLst(
      arrLog4GeneViewCodeExObjLstCache,
    );
    return arrLog4GeneViewCodeObjLstT;
  }
  try {
    const arrLog4GeneViewCodeExObjLst = await Log4GeneViewCode_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrLog4GeneViewCodeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrLog4GeneViewCodeExObjLst.length,
    );
    console.log(strInfo);
    return arrLog4GeneViewCodeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsLog4GeneViewCodeEN._CurrTabName;
  if (IsNullOrEmpty(clsLog4GeneViewCodeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsLog4GeneViewCodeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrLog4GeneViewCodeExObjLstCache: Array<clsLog4GeneViewCodeEN> =
      JSON.parse(strTempObjLst);
    const arrLog4GeneViewCodeObjLstT = Log4GeneViewCode_GetObjLstByJSONObjLst(
      arrLog4GeneViewCodeExObjLstCache,
    );
    return arrLog4GeneViewCodeObjLstT;
  }
  try {
    const arrLog4GeneViewCodeExObjLst = await Log4GeneViewCode_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrLog4GeneViewCodeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrLog4GeneViewCodeExObjLst.length,
    );
    console.log(strInfo);
    return arrLog4GeneViewCodeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsLog4GeneViewCodeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrLog4GeneViewCodeObjLstCache: Array<clsLog4GeneViewCodeEN> = JSON.parse(strTempObjLst);
    return arrLog4GeneViewCodeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function Log4GeneViewCode_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsLog4GeneViewCodeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

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
          log4GeneViewCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Log4GeneViewCode_GetObjLstByJSONObjLst(returnObjLst);
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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsLog4GeneViewCodeEN._CurrTabName;
  if (IsNullOrEmpty(clsLog4GeneViewCodeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsLog4GeneViewCodeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrLog4GeneViewCodeExObjLstCache: Array<clsLog4GeneViewCodeEN> =
      JSON.parse(strTempObjLst);
    const arrLog4GeneViewCodeObjLstT = Log4GeneViewCode_GetObjLstByJSONObjLst(
      arrLog4GeneViewCodeExObjLstCache,
    );
    return arrLog4GeneViewCodeObjLstT;
  }
  try {
    const arrLog4GeneViewCodeExObjLst = await Log4GeneViewCode_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrLog4GeneViewCodeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrLog4GeneViewCodeExObjLst.length,
    );
    console.log(strInfo);
    return arrLog4GeneViewCodeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsLog4GeneViewCodeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrLog4GeneViewCodeObjLstCache: Array<clsLog4GeneViewCodeEN> = JSON.parse(strTempObjLst);
    return arrLog4GeneViewCodeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function Log4GeneViewCode_GetObjLstCache(): Promise<Array<clsLog4GeneViewCodeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrLog4GeneViewCodeObjLstCache;
  switch (clsLog4GeneViewCodeEN.CacheModeId) {
    case '04': //sessionStorage
      arrLog4GeneViewCodeObjLstCache = await Log4GeneViewCode_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrLog4GeneViewCodeObjLstCache = await Log4GeneViewCode_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrLog4GeneViewCodeObjLstCache = await Log4GeneViewCode_GetObjLstClientCache();
      break;
    default:
      arrLog4GeneViewCodeObjLstCache = await Log4GeneViewCode_GetObjLstClientCache();
      break;
  }
  return arrLog4GeneViewCodeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function Log4GeneViewCode_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrLog4GeneViewCodeObjLstCache;
  switch (clsLog4GeneViewCodeEN.CacheModeId) {
    case '04': //sessionStorage
      arrLog4GeneViewCodeObjLstCache = await Log4GeneViewCode_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrLog4GeneViewCodeObjLstCache = await Log4GeneViewCode_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrLog4GeneViewCodeObjLstCache = null;
      break;
    default:
      arrLog4GeneViewCodeObjLstCache = null;
      break;
  }
  return arrLog4GeneViewCodeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function Log4GeneViewCode_GetSubObjLstCache(
  objLog4GeneViewCodeCond: clsLog4GeneViewCodeEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrLog4GeneViewCodeObjLstCache = await Log4GeneViewCode_GetObjLstCache();
  let arrLog4GeneViewCodeSel = arrLog4GeneViewCodeObjLstCache;
  if (
    objLog4GeneViewCodeCond.sfFldComparisonOp == null ||
    objLog4GeneViewCodeCond.sfFldComparisonOp == ''
  )
    return arrLog4GeneViewCodeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objLog4GeneViewCodeCond.sfFldComparisonOp,
  );
  //console.log("clsLog4GeneViewCodeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objLog4GeneViewCodeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objLog4GeneViewCodeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrLog4GeneViewCodeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objLog4GeneViewCodeCond),
      log4GeneViewCode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsLog4GeneViewCodeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function Log4GeneViewCode_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsLog4GeneViewCodeEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

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
          log4GeneViewCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Log4GeneViewCode_GetObjLstByJSONObjLst(returnObjLst);
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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrLog4GeneViewCodeObjLstCache = await Log4GeneViewCode_GetObjLstCache();
    const arrLog4GeneViewCodeSel = arrLog4GeneViewCodeObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrLog4GeneViewCodeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsLog4GeneViewCodeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

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
          log4GeneViewCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Log4GeneViewCode_GetObjLstByJSONObjLst(returnObjLst);
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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsLog4GeneViewCodeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

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
          log4GeneViewCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Log4GeneViewCode_GetObjLstByJSONObjLst(returnObjLst);
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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsLog4GeneViewCodeEN>();
  const arrLog4GeneViewCodeObjLstCache = await Log4GeneViewCode_GetObjLstCache();
  if (arrLog4GeneViewCodeObjLstCache.length == 0) return arrLog4GeneViewCodeObjLstCache;
  let arrLog4GeneViewCodeSel = arrLog4GeneViewCodeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objLog4GeneViewCodeCond = new clsLog4GeneViewCodeEN();
  ObjectAssign(objLog4GeneViewCodeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsLog4GeneViewCodeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objLog4GeneViewCodeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrLog4GeneViewCodeSel.length == 0) return arrLog4GeneViewCodeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.sort(
        Log4GeneViewCode_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.sort(objPagerPara.sortFun);
    }
    arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.slice(intStart, intEnd);
    return arrLog4GeneViewCodeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      log4GeneViewCode_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsLog4GeneViewCodeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function Log4GeneViewCode_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsLog4GeneViewCodeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsLog4GeneViewCodeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

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
          log4GeneViewCode_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Log4GeneViewCode_GetObjLstByJSONObjLst(returnObjLst);
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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);
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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_DelLog4GeneViewCodesAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelLog4GeneViewCodesAsync';
  const strAction = 'DelLog4GeneViewCodes';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function Log4GeneViewCode_DelLog4GeneViewCodesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelLog4GeneViewCodesByCondAsync';
  const strAction = 'DelLog4GeneViewCodesByCond';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
 * @param objLog4GeneViewCodeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Log4GeneViewCode_AddNewRecordAsync(
  objLog4GeneViewCodeEN: clsLog4GeneViewCodeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objLog4GeneViewCodeEN);
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLog4GeneViewCodeEN, config);
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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objLog4GeneViewCodeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function Log4GeneViewCode_AddNewRecordWithReturnKeyAsync(
  objLog4GeneViewCodeEN: clsLog4GeneViewCodeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLog4GeneViewCodeEN, config);
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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
 * @param objLog4GeneViewCodeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function Log4GeneViewCode_UpdateRecordAsync(
  objLog4GeneViewCodeEN: clsLog4GeneViewCodeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objLog4GeneViewCodeEN.sfUpdFldSetStr === undefined ||
    objLog4GeneViewCodeEN.sfUpdFldSetStr === null ||
    objLog4GeneViewCodeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objLog4GeneViewCodeEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLog4GeneViewCodeEN, config);
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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
 * @param objLog4GeneViewCodeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function Log4GeneViewCode_UpdateWithConditionAsync(
  objLog4GeneViewCodeEN: clsLog4GeneViewCodeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objLog4GeneViewCodeEN.sfUpdFldSetStr === undefined ||
    objLog4GeneViewCodeEN.sfUpdFldSetStr === null ||
    objLog4GeneViewCodeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objLog4GeneViewCodeEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);
  objLog4GeneViewCodeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLog4GeneViewCodeEN, config);
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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_IsExistRecordCache(
  objLog4GeneViewCodeCond: clsLog4GeneViewCodeEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrLog4GeneViewCodeObjLstCache = await Log4GeneViewCode_GetObjLstCache();
  if (arrLog4GeneViewCodeObjLstCache == null) return false;
  let arrLog4GeneViewCodeSel = arrLog4GeneViewCodeObjLstCache;
  if (
    objLog4GeneViewCodeCond.sfFldComparisonOp == null ||
    objLog4GeneViewCodeCond.sfFldComparisonOp == ''
  )
    return arrLog4GeneViewCodeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objLog4GeneViewCodeCond.sfFldComparisonOp,
  );
  //console.log("clsLog4GeneViewCodeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objLog4GeneViewCodeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objLog4GeneViewCodeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrLog4GeneViewCodeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objLog4GeneViewCodeCond),
      log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrLog4GeneViewCodeObjLstCache = await Log4GeneViewCode_GetObjLstCache();
  if (arrLog4GeneViewCodeObjLstCache == null) return false;
  try {
    const arrLog4GeneViewCodeSel = arrLog4GeneViewCodeObjLstCache.filter((x) => x.mId == lngmId);
    if (arrLog4GeneViewCodeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
 * @param objLog4GeneViewCodeCond:条件对象
 * @returns 对象列表记录数
 */
export async function Log4GeneViewCode_GetRecCountByCondCache(
  objLog4GeneViewCodeCond: clsLog4GeneViewCodeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrLog4GeneViewCodeObjLstCache = await Log4GeneViewCode_GetObjLstCache();
  if (arrLog4GeneViewCodeObjLstCache == null) return 0;
  let arrLog4GeneViewCodeSel = arrLog4GeneViewCodeObjLstCache;
  if (
    objLog4GeneViewCodeCond.sfFldComparisonOp == null ||
    objLog4GeneViewCodeCond.sfFldComparisonOp == ''
  )
    return arrLog4GeneViewCodeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objLog4GeneViewCodeCond.sfFldComparisonOp,
  );
  //console.log("clsLog4GeneViewCodeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objLog4GeneViewCodeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objLog4GeneViewCodeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrLog4GeneViewCodeSel = arrLog4GeneViewCodeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrLog4GeneViewCodeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objLog4GeneViewCodeCond),
      log4GeneViewCode_ConstructorName,
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
export async function Log4GeneViewCode_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(log4GeneViewCode_Controller, strAction);

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
        log4GeneViewCode_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        log4GeneViewCode_ConstructorName,
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
export function Log4GeneViewCode_GetWebApiUrl(strController: string, strAction: string): string {
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
export function Log4GeneViewCode_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsLog4GeneViewCodeEN._CurrTabName;
  switch (clsLog4GeneViewCodeEN.CacheModeId) {
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
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function Log4GeneViewCode_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsLog4GeneViewCodeEN._CurrTabName;
    switch (clsLog4GeneViewCodeEN.CacheModeId) {
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
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Log4GeneViewCode_CheckPropertyNew(pobjLog4GeneViewCodeEN: clsLog4GeneViewCodeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.userId) === true ||
    pobjLog4GeneViewCodeEN.userId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[用户Id]不能为空(In 生成界面代码日志)!(clsLog4GeneViewCodeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.viewId) === true ||
    pobjLog4GeneViewCodeEN.viewId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[界面Id]不能为空(In 生成界面代码日志)!(clsLog4GeneViewCodeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.prjId) === true ||
    pobjLog4GeneViewCodeEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 生成界面代码日志)!(clsLog4GeneViewCodeBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjLog4GeneViewCodeEN.versionGeneCode) === true) {
    throw new Error(
      '(errid:Watl000411)字段[生成代码版本]不能为空(In 生成界面代码日志)!(clsLog4GeneViewCodeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.userId) == false &&
    GetStrLen(pobjLog4GeneViewCodeEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 生成界面代码日志(Log4GeneViewCode))!值:$(pobjLog4GeneViewCodeEN.userId)(clsLog4GeneViewCodeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.viewId) == false &&
    GetStrLen(pobjLog4GeneViewCodeEN.viewId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[界面Id(viewId)]的长度不能超过8(In 生成界面代码日志(Log4GeneViewCode))!值:$(pobjLog4GeneViewCodeEN.viewId)(clsLog4GeneViewCodeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.prjId) == false &&
    GetStrLen(pobjLog4GeneViewCodeEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 生成界面代码日志(Log4GeneViewCode))!值:$(pobjLog4GeneViewCodeEN.prjId)(clsLog4GeneViewCodeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.geneCodeDate) == false &&
    GetStrLen(pobjLog4GeneViewCodeEN.geneCodeDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[生成代码日期(geneCodeDate)]的长度不能超过20(In 生成界面代码日志(Log4GeneViewCode))!值:$(pobjLog4GeneViewCodeEN.geneCodeDate)(clsLog4GeneViewCodeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.versionGeneCode) == false &&
    GetStrLen(pobjLog4GeneViewCodeEN.versionGeneCode) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[生成代码版本(versionGeneCode)]的长度不能超过30(In 生成界面代码日志(Log4GeneViewCode))!值:$(pobjLog4GeneViewCodeEN.versionGeneCode)(clsLog4GeneViewCodeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.memo) == false &&
    GetStrLen(pobjLog4GeneViewCodeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 生成界面代码日志(Log4GeneViewCode))!值:$(pobjLog4GeneViewCodeEN.memo)(clsLog4GeneViewCodeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjLog4GeneViewCodeEN.mId &&
    undefined !== pobjLog4GeneViewCodeEN.mId &&
    tzDataType.isNumber(pobjLog4GeneViewCodeEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjLog4GeneViewCodeEN.mId)], 非法,应该为数值型(In 生成界面代码日志(Log4GeneViewCode))!(clsLog4GeneViewCodeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.userId) == false &&
    undefined !== pobjLog4GeneViewCodeEN.userId &&
    tzDataType.isString(pobjLog4GeneViewCodeEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户Id(userId)]的值:[$(pobjLog4GeneViewCodeEN.userId)], 非法,应该为字符型(In 生成界面代码日志(Log4GeneViewCode))!(clsLog4GeneViewCodeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.viewId) == false &&
    undefined !== pobjLog4GeneViewCodeEN.viewId &&
    tzDataType.isString(pobjLog4GeneViewCodeEN.viewId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[界面Id(viewId)]的值:[$(pobjLog4GeneViewCodeEN.viewId)], 非法,应该为字符型(In 生成界面代码日志(Log4GeneViewCode))!(clsLog4GeneViewCodeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.prjId) == false &&
    undefined !== pobjLog4GeneViewCodeEN.prjId &&
    tzDataType.isString(pobjLog4GeneViewCodeEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjLog4GeneViewCodeEN.prjId)], 非法,应该为字符型(In 生成界面代码日志(Log4GeneViewCode))!(clsLog4GeneViewCodeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.geneCodeDate) == false &&
    undefined !== pobjLog4GeneViewCodeEN.geneCodeDate &&
    tzDataType.isString(pobjLog4GeneViewCodeEN.geneCodeDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[生成代码日期(geneCodeDate)]的值:[$(pobjLog4GeneViewCodeEN.geneCodeDate)], 非法,应该为字符型(In 生成界面代码日志(Log4GeneViewCode))!(clsLog4GeneViewCodeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.versionGeneCode) == false &&
    undefined !== pobjLog4GeneViewCodeEN.versionGeneCode &&
    tzDataType.isString(pobjLog4GeneViewCodeEN.versionGeneCode) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[生成代码版本(versionGeneCode)]的值:[$(pobjLog4GeneViewCodeEN.versionGeneCode)], 非法,应该为字符型(In 生成界面代码日志(Log4GeneViewCode))!(clsLog4GeneViewCodeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.memo) == false &&
    undefined !== pobjLog4GeneViewCodeEN.memo &&
    tzDataType.isString(pobjLog4GeneViewCodeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjLog4GeneViewCodeEN.memo)], 非法,应该为字符型(In 生成界面代码日志(Log4GeneViewCode))!(clsLog4GeneViewCodeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Log4GeneViewCode_CheckProperty4Update(
  pobjLog4GeneViewCodeEN: clsLog4GeneViewCodeEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.userId) == false &&
    GetStrLen(pobjLog4GeneViewCodeEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 生成界面代码日志(Log4GeneViewCode))!值:$(pobjLog4GeneViewCodeEN.userId)(clsLog4GeneViewCodeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.viewId) == false &&
    GetStrLen(pobjLog4GeneViewCodeEN.viewId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[界面Id(viewId)]的长度不能超过8(In 生成界面代码日志(Log4GeneViewCode))!值:$(pobjLog4GeneViewCodeEN.viewId)(clsLog4GeneViewCodeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.prjId) == false &&
    GetStrLen(pobjLog4GeneViewCodeEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 生成界面代码日志(Log4GeneViewCode))!值:$(pobjLog4GeneViewCodeEN.prjId)(clsLog4GeneViewCodeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.geneCodeDate) == false &&
    GetStrLen(pobjLog4GeneViewCodeEN.geneCodeDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[生成代码日期(geneCodeDate)]的长度不能超过20(In 生成界面代码日志(Log4GeneViewCode))!值:$(pobjLog4GeneViewCodeEN.geneCodeDate)(clsLog4GeneViewCodeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.versionGeneCode) == false &&
    GetStrLen(pobjLog4GeneViewCodeEN.versionGeneCode) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[生成代码版本(versionGeneCode)]的长度不能超过30(In 生成界面代码日志(Log4GeneViewCode))!值:$(pobjLog4GeneViewCodeEN.versionGeneCode)(clsLog4GeneViewCodeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.memo) == false &&
    GetStrLen(pobjLog4GeneViewCodeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 生成界面代码日志(Log4GeneViewCode))!值:$(pobjLog4GeneViewCodeEN.memo)(clsLog4GeneViewCodeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjLog4GeneViewCodeEN.mId &&
    undefined !== pobjLog4GeneViewCodeEN.mId &&
    tzDataType.isNumber(pobjLog4GeneViewCodeEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjLog4GeneViewCodeEN.mId)], 非法,应该为数值型(In 生成界面代码日志(Log4GeneViewCode))!(clsLog4GeneViewCodeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.userId) == false &&
    undefined !== pobjLog4GeneViewCodeEN.userId &&
    tzDataType.isString(pobjLog4GeneViewCodeEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户Id(userId)]的值:[$(pobjLog4GeneViewCodeEN.userId)], 非法,应该为字符型(In 生成界面代码日志(Log4GeneViewCode))!(clsLog4GeneViewCodeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.viewId) == false &&
    undefined !== pobjLog4GeneViewCodeEN.viewId &&
    tzDataType.isString(pobjLog4GeneViewCodeEN.viewId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[界面Id(viewId)]的值:[$(pobjLog4GeneViewCodeEN.viewId)], 非法,应该为字符型(In 生成界面代码日志(Log4GeneViewCode))!(clsLog4GeneViewCodeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.prjId) == false &&
    undefined !== pobjLog4GeneViewCodeEN.prjId &&
    tzDataType.isString(pobjLog4GeneViewCodeEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjLog4GeneViewCodeEN.prjId)], 非法,应该为字符型(In 生成界面代码日志(Log4GeneViewCode))!(clsLog4GeneViewCodeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.geneCodeDate) == false &&
    undefined !== pobjLog4GeneViewCodeEN.geneCodeDate &&
    tzDataType.isString(pobjLog4GeneViewCodeEN.geneCodeDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[生成代码日期(geneCodeDate)]的值:[$(pobjLog4GeneViewCodeEN.geneCodeDate)], 非法,应该为字符型(In 生成界面代码日志(Log4GeneViewCode))!(clsLog4GeneViewCodeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.versionGeneCode) == false &&
    undefined !== pobjLog4GeneViewCodeEN.versionGeneCode &&
    tzDataType.isString(pobjLog4GeneViewCodeEN.versionGeneCode) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[生成代码版本(versionGeneCode)]的值:[$(pobjLog4GeneViewCodeEN.versionGeneCode)], 非法,应该为字符型(In 生成界面代码日志(Log4GeneViewCode))!(clsLog4GeneViewCodeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLog4GeneViewCodeEN.memo) == false &&
    undefined !== pobjLog4GeneViewCodeEN.memo &&
    tzDataType.isString(pobjLog4GeneViewCodeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjLog4GeneViewCodeEN.memo)], 非法,应该为字符型(In 生成界面代码日志(Log4GeneViewCode))!(clsLog4GeneViewCodeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjLog4GeneViewCodeEN.mId ||
    (pobjLog4GeneViewCodeEN.mId != null && pobjLog4GeneViewCodeEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 生成界面代码日志)!(clsLog4GeneViewCodeBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function Log4GeneViewCode_GetJSONStrByObj(
  pobjLog4GeneViewCodeEN: clsLog4GeneViewCodeEN,
): string {
  pobjLog4GeneViewCodeEN.sfUpdFldSetStr = pobjLog4GeneViewCodeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjLog4GeneViewCodeEN);
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
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function Log4GeneViewCode_GetObjLstByJSONStr(strJSON: string): Array<clsLog4GeneViewCodeEN> {
  let arrLog4GeneViewCodeObjLst = new Array<clsLog4GeneViewCodeEN>();
  if (strJSON === '') {
    return arrLog4GeneViewCodeObjLst;
  }
  try {
    arrLog4GeneViewCodeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrLog4GeneViewCodeObjLst;
  }
  return arrLog4GeneViewCodeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrLog4GeneViewCodeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function Log4GeneViewCode_GetObjLstByJSONObjLst(
  arrLog4GeneViewCodeObjLstS: Array<clsLog4GeneViewCodeEN>,
): Array<clsLog4GeneViewCodeEN> {
  const arrLog4GeneViewCodeObjLst = new Array<clsLog4GeneViewCodeEN>();
  for (const objInFor of arrLog4GeneViewCodeObjLstS) {
    const obj1 = Log4GeneViewCode_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrLog4GeneViewCodeObjLst.push(obj1);
  }
  return arrLog4GeneViewCodeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function Log4GeneViewCode_GetObjByJSONStr(strJSON: string): clsLog4GeneViewCodeEN {
  let pobjLog4GeneViewCodeEN = new clsLog4GeneViewCodeEN();
  if (strJSON === '') {
    return pobjLog4GeneViewCodeEN;
  }
  try {
    pobjLog4GeneViewCodeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjLog4GeneViewCodeEN;
  }
  return pobjLog4GeneViewCodeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function Log4GeneViewCode_GetCombineCondition(
  objLog4GeneViewCodeCond: clsLog4GeneViewCodeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objLog4GeneViewCodeCond.dicFldComparisonOp,
      clsLog4GeneViewCodeEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objLog4GeneViewCodeCond.dicFldComparisonOp[clsLog4GeneViewCodeEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsLog4GeneViewCodeEN.con_mId,
      objLog4GeneViewCodeCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLog4GeneViewCodeCond.dicFldComparisonOp,
      clsLog4GeneViewCodeEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objLog4GeneViewCodeCond.dicFldComparisonOp[clsLog4GeneViewCodeEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLog4GeneViewCodeEN.con_UserId,
      objLog4GeneViewCodeCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLog4GeneViewCodeCond.dicFldComparisonOp,
      clsLog4GeneViewCodeEN.con_ViewId,
    ) == true
  ) {
    const strComparisonOpViewId: string =
      objLog4GeneViewCodeCond.dicFldComparisonOp[clsLog4GeneViewCodeEN.con_ViewId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLog4GeneViewCodeEN.con_ViewId,
      objLog4GeneViewCodeCond.viewId,
      strComparisonOpViewId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLog4GeneViewCodeCond.dicFldComparisonOp,
      clsLog4GeneViewCodeEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objLog4GeneViewCodeCond.dicFldComparisonOp[clsLog4GeneViewCodeEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLog4GeneViewCodeEN.con_PrjId,
      objLog4GeneViewCodeCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLog4GeneViewCodeCond.dicFldComparisonOp,
      clsLog4GeneViewCodeEN.con_GeneCodeDate,
    ) == true
  ) {
    const strComparisonOpGeneCodeDate: string =
      objLog4GeneViewCodeCond.dicFldComparisonOp[clsLog4GeneViewCodeEN.con_GeneCodeDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLog4GeneViewCodeEN.con_GeneCodeDate,
      objLog4GeneViewCodeCond.geneCodeDate,
      strComparisonOpGeneCodeDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLog4GeneViewCodeCond.dicFldComparisonOp,
      clsLog4GeneViewCodeEN.con_VersionGeneCode,
    ) == true
  ) {
    const strComparisonOpVersionGeneCode: string =
      objLog4GeneViewCodeCond.dicFldComparisonOp[clsLog4GeneViewCodeEN.con_VersionGeneCode];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLog4GeneViewCodeEN.con_VersionGeneCode,
      objLog4GeneViewCodeCond.versionGeneCode,
      strComparisonOpVersionGeneCode,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLog4GeneViewCodeCond.dicFldComparisonOp,
      clsLog4GeneViewCodeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objLog4GeneViewCodeCond.dicFldComparisonOp[clsLog4GeneViewCodeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLog4GeneViewCodeEN.con_Memo,
      objLog4GeneViewCodeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--Log4GeneViewCode(生成界面代码日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strViewId: 界面Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Log4GeneViewCode_GetUniCondStr(
  objLog4GeneViewCodeEN: clsLog4GeneViewCodeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and UserId = '{0}'", objLog4GeneViewCodeEN.userId);
  strWhereCond += Format(" and ViewId = '{0}'", objLog4GeneViewCodeEN.viewId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--Log4GeneViewCode(生成界面代码日志),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strViewId: 界面Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function Log4GeneViewCode_GetUniCondStr4Update(
  objLog4GeneViewCodeEN: clsLog4GeneViewCodeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objLog4GeneViewCodeEN.mId);
  strWhereCond += Format(" and UserId = '{0}'", objLog4GeneViewCodeEN.userId);
  strWhereCond += Format(" and ViewId = '{0}'", objLog4GeneViewCodeEN.viewId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objLog4GeneViewCodeENS:源对象
 * @param objLog4GeneViewCodeENT:目标对象
 */
export function Log4GeneViewCode_GetObjFromJsonObj(
  objLog4GeneViewCodeENS: clsLog4GeneViewCodeEN,
): clsLog4GeneViewCodeEN {
  const objLog4GeneViewCodeENT: clsLog4GeneViewCodeEN = new clsLog4GeneViewCodeEN();
  ObjectAssign(objLog4GeneViewCodeENT, objLog4GeneViewCodeENS);
  return objLog4GeneViewCodeENT;
}
