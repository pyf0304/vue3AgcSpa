/**
 * 类名:clsCodeLocationWApi
 * 表名:CodeLocation(00050438)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:44
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 代码位置(CodeLocation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年10月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsCodeLocationEN } from '@/ts/L0Entity/GeneCode/clsCodeLocationEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const codeLocation_Controller = 'CodeLocationApi';
export const codeLocation_ConstructorName = 'codeLocation';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCodeLocId:关键字
 * @returns 对象
 **/
export async function CodeLocation_GetObjByCodeLocIdAsync(
  strCodeLocId: string,
): Promise<clsCodeLocationEN | null> {
  const strThisFuncName = 'GetObjByCodeLocIdAsync';

  if (IsNullOrEmpty(strCodeLocId) == true) {
    const strMsg = Format(
      '参数:[strCodeLocId]不能为空!(In clsCodeLocationWApi.GetObjByCodeLocIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeLocId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCodeLocId]的长度:[{0}]不正确!(clsCodeLocationWApi.GetObjByCodeLocIdAsync)',
      strCodeLocId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCodeLocId';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCodeLocId,
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
      const objCodeLocation = CodeLocation_GetObjFromJsonObj(returnObj);
      return objCodeLocation;
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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
 * @param strCodeLocId:所给的关键字
 * @returns 对象
 */
export async function CodeLocation_GetObjByCodeLocIdCache(
  strCodeLocId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCodeLocIdCache';

  if (IsNullOrEmpty(strCodeLocId) == true) {
    const strMsg = Format(
      '参数:[strCodeLocId]不能为空!(In clsCodeLocationWApi.GetObjByCodeLocIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeLocId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCodeLocId]的长度:[{0}]不正确!(clsCodeLocationWApi.GetObjByCodeLocIdCache)',
      strCodeLocId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCodeLocationObjLstCache = await CodeLocation_GetObjLstCache();
  try {
    const arrCodeLocationSel = arrCodeLocationObjLstCache.filter(
      (x) => x.codeLocId == strCodeLocId,
    );
    let objCodeLocation: clsCodeLocationEN;
    if (arrCodeLocationSel.length > 0) {
      objCodeLocation = arrCodeLocationSel[0];
      return objCodeLocation;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCodeLocationConst = await CodeLocation_GetObjByCodeLocIdAsync(strCodeLocId);
        if (objCodeLocationConst != null) {
          CodeLocation_ReFreshThisCache();
          return objCodeLocationConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCodeLocId,
      codeLocation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCodeLocId:所给的关键字
 * @returns 对象
 */
export async function CodeLocation_GetObjByCodeLocIdlocalStorage(strCodeLocId: string) {
  const strThisFuncName = 'GetObjByCodeLocIdlocalStorage';

  if (IsNullOrEmpty(strCodeLocId) == true) {
    const strMsg = Format(
      '参数:[strCodeLocId]不能为空!(In clsCodeLocationWApi.GetObjByCodeLocIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeLocId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCodeLocId]的长度:[{0}]不正确!(clsCodeLocationWApi.GetObjByCodeLocIdlocalStorage)',
      strCodeLocId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsCodeLocationEN._CurrTabName, strCodeLocId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objCodeLocationCache: clsCodeLocationEN = JSON.parse(strTempObj);
    return objCodeLocationCache;
  }
  try {
    const objCodeLocation = await CodeLocation_GetObjByCodeLocIdAsync(strCodeLocId);
    if (objCodeLocation != null) {
      localStorage.setItem(strKey, JSON.stringify(objCodeLocation));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objCodeLocation;
    }
    return objCodeLocation;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCodeLocId,
      codeLocation_ConstructorName,
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
 * @param objCodeLocation:所给的对象
 * @returns 对象
 */
export async function CodeLocation_UpdateObjInLstCache(objCodeLocation: clsCodeLocationEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCodeLocationObjLstCache = await CodeLocation_GetObjLstCache();
    const obj = arrCodeLocationObjLstCache.find((x) => x.codeLocId == objCodeLocation.codeLocId);
    if (obj != null) {
      objCodeLocation.codeLocId = obj.codeLocId;
      ObjectAssign(obj, objCodeLocation);
    } else {
      arrCodeLocationObjLstCache.push(objCodeLocation);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      codeLocation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCodeLocId:所给的关键字
 * @returns 对象
 */
export async function CodeLocation_GetNameByCodeLocIdCache(strCodeLocId: string) {
  if (IsNullOrEmpty(strCodeLocId) == true) {
    const strMsg = Format(
      '参数:[strCodeLocId]不能为空!(In clsCodeLocationWApi.GetNameByCodeLocIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCodeLocId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strCodeLocId]的长度:[{0}]不正确!(clsCodeLocationWApi.GetNameByCodeLocIdCache)',
      strCodeLocId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCodeLocationObjLstCache = await CodeLocation_GetObjLstCache();
  if (arrCodeLocationObjLstCache == null) return '';
  try {
    const arrCodeLocationSel = arrCodeLocationObjLstCache.filter(
      (x) => x.codeLocId == strCodeLocId,
    );
    let objCodeLocation: clsCodeLocationEN;
    if (arrCodeLocationSel.length > 0) {
      objCodeLocation = arrCodeLocationSel[0];
      return objCodeLocation.codeLocName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strCodeLocId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

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
export async function CodeLocation_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsCodeLocationEN.con_CodeLocId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCodeLocationEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsCodeLocationEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCodeLocId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objCodeLocation = await CodeLocation_GetObjByCodeLocIdCache(strCodeLocId);
  if (objCodeLocation == null) return '';
  if (objCodeLocation.GetFldValue(strOutFldName) == null) return '';
  return objCodeLocation.GetFldValue(strOutFldName).toString();
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
export function CodeLocation_SortFunDefa(a: clsCodeLocationEN, b: clsCodeLocationEN): number {
  return a.codeLocId.localeCompare(b.codeLocId);
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
export function CodeLocation_SortFunDefa2Fld(a: clsCodeLocationEN, b: clsCodeLocationEN): number {
  if (a.codeLocName == b.codeLocName) return a.updDate.localeCompare(b.updDate);
  else return a.codeLocName.localeCompare(b.codeLocName);
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
export function CodeLocation_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCodeLocationEN.con_CodeLocId:
        return (a: clsCodeLocationEN, b: clsCodeLocationEN) => {
          return a.codeLocId.localeCompare(b.codeLocId);
        };
      case clsCodeLocationEN.con_CodeLocName:
        return (a: clsCodeLocationEN, b: clsCodeLocationEN) => {
          if (a.codeLocName == null) return -1;
          if (b.codeLocName == null) return 1;
          return a.codeLocName.localeCompare(b.codeLocName);
        };
      case clsCodeLocationEN.con_UpdDate:
        return (a: clsCodeLocationEN, b: clsCodeLocationEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCodeLocationEN.con_UpdUser:
        return (a: clsCodeLocationEN, b: clsCodeLocationEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCodeLocationEN.con_Memo:
        return (a: clsCodeLocationEN, b: clsCodeLocationEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CodeLocation]中不存在!(in ${codeLocation_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCodeLocationEN.con_CodeLocId:
        return (a: clsCodeLocationEN, b: clsCodeLocationEN) => {
          return b.codeLocId.localeCompare(a.codeLocId);
        };
      case clsCodeLocationEN.con_CodeLocName:
        return (a: clsCodeLocationEN, b: clsCodeLocationEN) => {
          if (b.codeLocName == null) return -1;
          if (a.codeLocName == null) return 1;
          return b.codeLocName.localeCompare(a.codeLocName);
        };
      case clsCodeLocationEN.con_UpdDate:
        return (a: clsCodeLocationEN, b: clsCodeLocationEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCodeLocationEN.con_UpdUser:
        return (a: clsCodeLocationEN, b: clsCodeLocationEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCodeLocationEN.con_Memo:
        return (a: clsCodeLocationEN, b: clsCodeLocationEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CodeLocation]中不存在!(in ${codeLocation_ConstructorName}.${strThisFuncName})`;
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
export async function CodeLocation_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCodeLocationEN.con_CodeLocId:
      return (obj: clsCodeLocationEN) => {
        return obj.codeLocId === value;
      };
    case clsCodeLocationEN.con_CodeLocName:
      return (obj: clsCodeLocationEN) => {
        return obj.codeLocName === value;
      };
    case clsCodeLocationEN.con_UpdDate:
      return (obj: clsCodeLocationEN) => {
        return obj.updDate === value;
      };
    case clsCodeLocationEN.con_UpdUser:
      return (obj: clsCodeLocationEN) => {
        return obj.updUser === value;
      };
    case clsCodeLocationEN.con_Memo:
      return (obj: clsCodeLocationEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CodeLocation]中不存在!(in ${codeLocation_ConstructorName}.${strThisFuncName})`;
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
export async function CodeLocation_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsCodeLocationEN.con_CodeLocId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrCodeLocation = await CodeLocation_GetObjLstCache();
  if (arrCodeLocation == null) return [];
  let arrCodeLocationSel = arrCodeLocation;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCodeLocationSel = arrCodeLocationSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCodeLocationSel = arrCodeLocationSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCodeLocationSel = arrCodeLocationSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCodeLocationSel = arrCodeLocationSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCodeLocationSel = arrCodeLocationSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrCodeLocationSel = arrCodeLocationSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCodeLocationSel = arrCodeLocationSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCodeLocationSel = arrCodeLocationSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCodeLocationSel = arrCodeLocationSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCodeLocationSel = arrCodeLocationSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrCodeLocationSel.length == 0) return [];
  return arrCodeLocationSel.map((x) => x.codeLocId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CodeLocation_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
export async function CodeLocation_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
export async function CodeLocation_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCodeLocationEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

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
      const objCodeLocation = CodeLocation_GetObjFromJsonObj(returnObj);
      return objCodeLocation;
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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
export async function CodeLocation_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCodeLocationEN._CurrTabName;
  if (IsNullOrEmpty(clsCodeLocationEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCodeLocationEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrCodeLocationExObjLstCache: Array<clsCodeLocationEN> = CacheHelper.Get(strKey);
    const arrCodeLocationObjLstT = CodeLocation_GetObjLstByJSONObjLst(arrCodeLocationExObjLstCache);
    return arrCodeLocationObjLstT;
  }
  try {
    const arrCodeLocationExObjLst = await CodeLocation_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCodeLocationExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCodeLocationExObjLst.length,
    );
    console.log(strInfo);
    return arrCodeLocationExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      codeLocation_ConstructorName,
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
export async function CodeLocation_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCodeLocationEN._CurrTabName;
  if (IsNullOrEmpty(clsCodeLocationEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCodeLocationEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCodeLocationExObjLstCache: Array<clsCodeLocationEN> = JSON.parse(strTempObjLst);
    const arrCodeLocationObjLstT = CodeLocation_GetObjLstByJSONObjLst(arrCodeLocationExObjLstCache);
    return arrCodeLocationObjLstT;
  }
  try {
    const arrCodeLocationExObjLst = await CodeLocation_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCodeLocationExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCodeLocationExObjLst.length,
    );
    console.log(strInfo);
    return arrCodeLocationExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      codeLocation_ConstructorName,
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
export async function CodeLocation_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCodeLocationEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCodeLocationObjLstCache: Array<clsCodeLocationEN> = JSON.parse(strTempObjLst);
    return arrCodeLocationObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CodeLocation_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCodeLocationEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

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
          codeLocation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodeLocation_GetObjLstByJSONObjLst(returnObjLst);
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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
export async function CodeLocation_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCodeLocationEN._CurrTabName;
  if (IsNullOrEmpty(clsCodeLocationEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCodeLocationEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCodeLocationExObjLstCache: Array<clsCodeLocationEN> = JSON.parse(strTempObjLst);
    const arrCodeLocationObjLstT = CodeLocation_GetObjLstByJSONObjLst(arrCodeLocationExObjLstCache);
    return arrCodeLocationObjLstT;
  }
  try {
    const arrCodeLocationExObjLst = await CodeLocation_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCodeLocationExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCodeLocationExObjLst.length,
    );
    console.log(strInfo);
    return arrCodeLocationExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      codeLocation_ConstructorName,
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
export async function CodeLocation_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCodeLocationEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCodeLocationObjLstCache: Array<clsCodeLocationEN> = JSON.parse(strTempObjLst);
    return arrCodeLocationObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CodeLocation_GetObjLstCache(): Promise<Array<clsCodeLocationEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrCodeLocationObjLstCache;
  switch (clsCodeLocationEN.CacheModeId) {
    case '04': //sessionStorage
      arrCodeLocationObjLstCache = await CodeLocation_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrCodeLocationObjLstCache = await CodeLocation_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrCodeLocationObjLstCache = await CodeLocation_GetObjLstClientCache();
      break;
    default:
      arrCodeLocationObjLstCache = await CodeLocation_GetObjLstClientCache();
      break;
  }
  return arrCodeLocationObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CodeLocation_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCodeLocationObjLstCache;
  switch (clsCodeLocationEN.CacheModeId) {
    case '04': //sessionStorage
      arrCodeLocationObjLstCache = await CodeLocation_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrCodeLocationObjLstCache = await CodeLocation_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrCodeLocationObjLstCache = null;
      break;
    default:
      arrCodeLocationObjLstCache = null;
      break;
  }
  return arrCodeLocationObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCodeLocIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CodeLocation_GetSubObjLstCache(objCodeLocationCond: clsCodeLocationEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCodeLocationObjLstCache = await CodeLocation_GetObjLstCache();
  let arrCodeLocationSel = arrCodeLocationObjLstCache;
  if (objCodeLocationCond.sfFldComparisonOp == null || objCodeLocationCond.sfFldComparisonOp == '')
    return arrCodeLocationSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCodeLocationCond.sfFldComparisonOp,
  );
  //console.log("clsCodeLocationWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCodeLocationCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCodeLocationSel = arrCodeLocationSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCodeLocationCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCodeLocationSel = arrCodeLocationSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCodeLocationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCodeLocationCond),
      codeLocation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCodeLocationEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCodeLocId:关键字列表
 * @returns 对象列表
 **/
export async function CodeLocation_GetObjLstByCodeLocIdLstAsync(
  arrCodeLocId: Array<string>,
): Promise<Array<clsCodeLocationEN>> {
  const strThisFuncName = 'GetObjLstByCodeLocIdLstAsync';
  const strAction = 'GetObjLstByCodeLocIdLst';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCodeLocId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          codeLocation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodeLocation_GetObjLstByJSONObjLst(returnObjLst);
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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
 * @param arrstrCodeLocIdLst:关键字列表
 * @returns 对象列表
 */
export async function CodeLocation_GetObjLstByCodeLocIdLstCache(arrCodeLocIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByCodeLocIdLstCache';
  try {
    const arrCodeLocationObjLstCache = await CodeLocation_GetObjLstCache();
    const arrCodeLocationSel = arrCodeLocationObjLstCache.filter(
      (x) => arrCodeLocIdLst.indexOf(x.codeLocId) > -1,
    );
    return arrCodeLocationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCodeLocIdLst.join(','),
      codeLocation_ConstructorName,
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
export async function CodeLocation_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCodeLocationEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

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
          codeLocation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodeLocation_GetObjLstByJSONObjLst(returnObjLst);
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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
export async function CodeLocation_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCodeLocationEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

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
          codeLocation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodeLocation_GetObjLstByJSONObjLst(returnObjLst);
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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
export async function CodeLocation_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsCodeLocationEN>();
  const arrCodeLocationObjLstCache = await CodeLocation_GetObjLstCache();
  if (arrCodeLocationObjLstCache.length == 0) return arrCodeLocationObjLstCache;
  let arrCodeLocationSel = arrCodeLocationObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objCodeLocationCond = new clsCodeLocationEN();
  ObjectAssign(objCodeLocationCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsCodeLocationWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCodeLocationSel = arrCodeLocationSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCodeLocationCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCodeLocationSel = arrCodeLocationSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCodeLocationSel.length == 0) return arrCodeLocationSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCodeLocationSel = arrCodeLocationSel.sort(
        CodeLocation_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCodeLocationSel = arrCodeLocationSel.sort(objPagerPara.sortFun);
    }
    arrCodeLocationSel = arrCodeLocationSel.slice(intStart, intEnd);
    return arrCodeLocationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      codeLocation_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCodeLocationEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function CodeLocation_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCodeLocationEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCodeLocationEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

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
          codeLocation_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CodeLocation_GetObjLstByJSONObjLst(returnObjLst);
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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
 * @param strCodeLocId:关键字
 * @returns 获取删除的结果
 **/
export async function CodeLocation_DelRecordAsync(strCodeLocId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(codeLocation_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strCodeLocId);

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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
 * @param arrCodeLocId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CodeLocation_DelCodeLocationsAsync(
  arrCodeLocId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelCodeLocationsAsync';
  const strAction = 'DelCodeLocations';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCodeLocId, config);
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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
export async function CodeLocation_DelCodeLocationsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelCodeLocationsByCondAsync';
  const strAction = 'DelCodeLocationsByCond';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
 * @param objCodeLocationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CodeLocation_AddNewRecordAsync(
  objCodeLocationEN: clsCodeLocationEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objCodeLocationEN.codeLocId === null || objCodeLocationEN.codeLocId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCodeLocationEN);
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeLocationEN, config);
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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
 * @param objCodeLocationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CodeLocation_AddNewRecordWithMaxIdAsync(
  objCodeLocationEN: clsCodeLocationEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeLocationEN, config);
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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objCodeLocationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CodeLocation_AddNewRecordWithReturnKeyAsync(
  objCodeLocationEN: clsCodeLocationEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeLocationEN, config);
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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
 * @param objCodeLocationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CodeLocation_UpdateRecordAsync(
  objCodeLocationEN: clsCodeLocationEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCodeLocationEN.sfUpdFldSetStr === undefined ||
    objCodeLocationEN.sfUpdFldSetStr === null ||
    objCodeLocationEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCodeLocationEN.codeLocId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeLocationEN, config);
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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
 * @param objCodeLocationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CodeLocation_UpdateWithConditionAsync(
  objCodeLocationEN: clsCodeLocationEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCodeLocationEN.sfUpdFldSetStr === undefined ||
    objCodeLocationEN.sfUpdFldSetStr === null ||
    objCodeLocationEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCodeLocationEN.codeLocId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);
  objCodeLocationEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCodeLocationEN, config);
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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
 * @param objstrCodeLocIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CodeLocation_IsExistRecordCache(objCodeLocationCond: clsCodeLocationEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCodeLocationObjLstCache = await CodeLocation_GetObjLstCache();
  if (arrCodeLocationObjLstCache == null) return false;
  let arrCodeLocationSel = arrCodeLocationObjLstCache;
  if (objCodeLocationCond.sfFldComparisonOp == null || objCodeLocationCond.sfFldComparisonOp == '')
    return arrCodeLocationSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCodeLocationCond.sfFldComparisonOp,
  );
  //console.log("clsCodeLocationWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCodeLocationCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCodeLocationCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCodeLocationSel = arrCodeLocationSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrCodeLocationSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCodeLocationCond),
      codeLocation_ConstructorName,
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
export async function CodeLocation_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
 * @param strCodeLocId:所给的关键字
 * @returns 对象
 */
export async function CodeLocation_IsExistCache(strCodeLocId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrCodeLocationObjLstCache = await CodeLocation_GetObjLstCache();
  if (arrCodeLocationObjLstCache == null) return false;
  try {
    const arrCodeLocationSel = arrCodeLocationObjLstCache.filter(
      (x) => x.codeLocId == strCodeLocId,
    );
    if (arrCodeLocationSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCodeLocId,
      codeLocation_ConstructorName,
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
 * @param strCodeLocId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CodeLocation_IsExistAsync(strCodeLocId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCodeLocId,
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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
export async function CodeLocation_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
 * @param objCodeLocationCond:条件对象
 * @returns 对象列表记录数
 */
export async function CodeLocation_GetRecCountByCondCache(objCodeLocationCond: clsCodeLocationEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCodeLocationObjLstCache = await CodeLocation_GetObjLstCache();
  if (arrCodeLocationObjLstCache == null) return 0;
  let arrCodeLocationSel = arrCodeLocationObjLstCache;
  if (objCodeLocationCond.sfFldComparisonOp == null || objCodeLocationCond.sfFldComparisonOp == '')
    return arrCodeLocationSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCodeLocationCond.sfFldComparisonOp,
  );
  //console.log("clsCodeLocationWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCodeLocationCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCodeLocationSel = arrCodeLocationSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCodeLocationCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrCodeLocationSel = arrCodeLocationSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCodeLocationSel = arrCodeLocationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrCodeLocationSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCodeLocationCond),
      codeLocation_ConstructorName,
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
export async function CodeLocation_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(codeLocation_Controller, strAction);

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
        codeLocation_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        codeLocation_ConstructorName,
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
export function CodeLocation_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CodeLocation_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsCodeLocationEN._CurrTabName;
  switch (clsCodeLocationEN.CacheModeId) {
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
export function CodeLocation_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsCodeLocationEN._CurrTabName;
    switch (clsCodeLocationEN.CacheModeId) {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function CodeLocation_BindDdl_CodeLocIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CodeLocIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CodeLocIdInDivCache");
  const arrObjLstSel = await CodeLocation_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCodeLocationEN.con_CodeLocId,
    clsCodeLocationEN.con_CodeLocName,
    '代码位置',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CodeLocation_CheckPropertyNew(pobjCodeLocationEN: clsCodeLocationEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCodeLocationEN.codeLocId) == false &&
    GetStrLen(pobjCodeLocationEN.codeLocId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[代码位置Id(codeLocId)]的长度不能超过4(In 代码位置(CodeLocation))!值:$(pobjCodeLocationEN.codeLocId)(clsCodeLocationBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.codeLocName) == false &&
    GetStrLen(pobjCodeLocationEN.codeLocName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[代码位置名(codeLocName)]的长度不能超过50(In 代码位置(CodeLocation))!值:$(pobjCodeLocationEN.codeLocName)(clsCodeLocationBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.updDate) == false &&
    GetStrLen(pobjCodeLocationEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 代码位置(CodeLocation))!值:$(pobjCodeLocationEN.updDate)(clsCodeLocationBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.updUser) == false &&
    GetStrLen(pobjCodeLocationEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 代码位置(CodeLocation))!值:$(pobjCodeLocationEN.updUser)(clsCodeLocationBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.memo) == false &&
    GetStrLen(pobjCodeLocationEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 代码位置(CodeLocation))!值:$(pobjCodeLocationEN.memo)(clsCodeLocationBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCodeLocationEN.codeLocId) == false &&
    undefined !== pobjCodeLocationEN.codeLocId &&
    tzDataType.isString(pobjCodeLocationEN.codeLocId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[代码位置Id(codeLocId)]的值:[$(pobjCodeLocationEN.codeLocId)], 非法,应该为字符型(In 代码位置(CodeLocation))!(clsCodeLocationBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.codeLocName) == false &&
    undefined !== pobjCodeLocationEN.codeLocName &&
    tzDataType.isString(pobjCodeLocationEN.codeLocName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[代码位置名(codeLocName)]的值:[$(pobjCodeLocationEN.codeLocName)], 非法,应该为字符型(In 代码位置(CodeLocation))!(clsCodeLocationBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.updDate) == false &&
    undefined !== pobjCodeLocationEN.updDate &&
    tzDataType.isString(pobjCodeLocationEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjCodeLocationEN.updDate)], 非法,应该为字符型(In 代码位置(CodeLocation))!(clsCodeLocationBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.updUser) == false &&
    undefined !== pobjCodeLocationEN.updUser &&
    tzDataType.isString(pobjCodeLocationEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjCodeLocationEN.updUser)], 非法,应该为字符型(In 代码位置(CodeLocation))!(clsCodeLocationBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.memo) == false &&
    undefined !== pobjCodeLocationEN.memo &&
    tzDataType.isString(pobjCodeLocationEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjCodeLocationEN.memo)], 非法,应该为字符型(In 代码位置(CodeLocation))!(clsCodeLocationBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CodeLocation_CheckProperty4Update(pobjCodeLocationEN: clsCodeLocationEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCodeLocationEN.codeLocId) == false &&
    GetStrLen(pobjCodeLocationEN.codeLocId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[代码位置Id(codeLocId)]的长度不能超过4(In 代码位置(CodeLocation))!值:$(pobjCodeLocationEN.codeLocId)(clsCodeLocationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.codeLocName) == false &&
    GetStrLen(pobjCodeLocationEN.codeLocName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[代码位置名(codeLocName)]的长度不能超过50(In 代码位置(CodeLocation))!值:$(pobjCodeLocationEN.codeLocName)(clsCodeLocationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.updDate) == false &&
    GetStrLen(pobjCodeLocationEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 代码位置(CodeLocation))!值:$(pobjCodeLocationEN.updDate)(clsCodeLocationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.updUser) == false &&
    GetStrLen(pobjCodeLocationEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 代码位置(CodeLocation))!值:$(pobjCodeLocationEN.updUser)(clsCodeLocationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.memo) == false &&
    GetStrLen(pobjCodeLocationEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 代码位置(CodeLocation))!值:$(pobjCodeLocationEN.memo)(clsCodeLocationBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCodeLocationEN.codeLocId) == false &&
    undefined !== pobjCodeLocationEN.codeLocId &&
    tzDataType.isString(pobjCodeLocationEN.codeLocId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[代码位置Id(codeLocId)]的值:[$(pobjCodeLocationEN.codeLocId)], 非法,应该为字符型(In 代码位置(CodeLocation))!(clsCodeLocationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.codeLocName) == false &&
    undefined !== pobjCodeLocationEN.codeLocName &&
    tzDataType.isString(pobjCodeLocationEN.codeLocName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[代码位置名(codeLocName)]的值:[$(pobjCodeLocationEN.codeLocName)], 非法,应该为字符型(In 代码位置(CodeLocation))!(clsCodeLocationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.updDate) == false &&
    undefined !== pobjCodeLocationEN.updDate &&
    tzDataType.isString(pobjCodeLocationEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjCodeLocationEN.updDate)], 非法,应该为字符型(In 代码位置(CodeLocation))!(clsCodeLocationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.updUser) == false &&
    undefined !== pobjCodeLocationEN.updUser &&
    tzDataType.isString(pobjCodeLocationEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjCodeLocationEN.updUser)], 非法,应该为字符型(In 代码位置(CodeLocation))!(clsCodeLocationBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCodeLocationEN.memo) == false &&
    undefined !== pobjCodeLocationEN.memo &&
    tzDataType.isString(pobjCodeLocationEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjCodeLocationEN.memo)], 非法,应该为字符型(In 代码位置(CodeLocation))!(clsCodeLocationBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjCodeLocationEN.codeLocId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[代码位置Id]不能为空(In 代码位置)!(clsCodeLocationBL:CheckProperty4Update)',
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
export function CodeLocation_GetJSONStrByObj(pobjCodeLocationEN: clsCodeLocationEN): string {
  pobjCodeLocationEN.sfUpdFldSetStr = pobjCodeLocationEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCodeLocationEN);
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
export function CodeLocation_GetObjLstByJSONStr(strJSON: string): Array<clsCodeLocationEN> {
  let arrCodeLocationObjLst = new Array<clsCodeLocationEN>();
  if (strJSON === '') {
    return arrCodeLocationObjLst;
  }
  try {
    arrCodeLocationObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCodeLocationObjLst;
  }
  return arrCodeLocationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCodeLocationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CodeLocation_GetObjLstByJSONObjLst(
  arrCodeLocationObjLstS: Array<clsCodeLocationEN>,
): Array<clsCodeLocationEN> {
  const arrCodeLocationObjLst = new Array<clsCodeLocationEN>();
  for (const objInFor of arrCodeLocationObjLstS) {
    const obj1 = CodeLocation_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCodeLocationObjLst.push(obj1);
  }
  return arrCodeLocationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CodeLocation_GetObjByJSONStr(strJSON: string): clsCodeLocationEN {
  let pobjCodeLocationEN = new clsCodeLocationEN();
  if (strJSON === '') {
    return pobjCodeLocationEN;
  }
  try {
    pobjCodeLocationEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCodeLocationEN;
  }
  return pobjCodeLocationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CodeLocation_GetCombineCondition(objCodeLocationCond: clsCodeLocationEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeLocationCond.dicFldComparisonOp,
      clsCodeLocationEN.con_CodeLocId,
    ) == true
  ) {
    const strComparisonOpCodeLocId: string =
      objCodeLocationCond.dicFldComparisonOp[clsCodeLocationEN.con_CodeLocId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeLocationEN.con_CodeLocId,
      objCodeLocationCond.codeLocId,
      strComparisonOpCodeLocId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeLocationCond.dicFldComparisonOp,
      clsCodeLocationEN.con_CodeLocName,
    ) == true
  ) {
    const strComparisonOpCodeLocName: string =
      objCodeLocationCond.dicFldComparisonOp[clsCodeLocationEN.con_CodeLocName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeLocationEN.con_CodeLocName,
      objCodeLocationCond.codeLocName,
      strComparisonOpCodeLocName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeLocationCond.dicFldComparisonOp,
      clsCodeLocationEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCodeLocationCond.dicFldComparisonOp[clsCodeLocationEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeLocationEN.con_UpdDate,
      objCodeLocationCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeLocationCond.dicFldComparisonOp,
      clsCodeLocationEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCodeLocationCond.dicFldComparisonOp[clsCodeLocationEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeLocationEN.con_UpdUser,
      objCodeLocationCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCodeLocationCond.dicFldComparisonOp,
      clsCodeLocationEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCodeLocationCond.dicFldComparisonOp[clsCodeLocationEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCodeLocationEN.con_Memo,
      objCodeLocationCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCodeLocationENS:源对象
 * @param objCodeLocationENT:目标对象
 */
export function CodeLocation_GetObjFromJsonObj(
  objCodeLocationENS: clsCodeLocationEN,
): clsCodeLocationEN {
  const objCodeLocationENT: clsCodeLocationEN = new clsCodeLocationEN();
  ObjectAssign(objCodeLocationENT, objCodeLocationENS);
  return objCodeLocationENT;
}
