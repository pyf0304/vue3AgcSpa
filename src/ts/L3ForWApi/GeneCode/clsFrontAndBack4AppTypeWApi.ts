/**
 * 类名:clsFrontAndBack4AppTypeWApi
 * 表名:FrontAndBack4AppType(00050423)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:39:16
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
 * 应用类型的前后台关系(FrontAndBack4AppType)
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
import { clsFrontAndBack4AppTypeEN } from '@/ts/L0Entity/GeneCode/clsFrontAndBack4AppTypeEN';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const frontAndBack4AppType_Controller = 'FrontAndBack4AppTypeApi';
export const frontAndBack4AppType_ConstructorName = 'frontAndBack4AppType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function FrontAndBack4AppType_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsFrontAndBack4AppTypeEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsFrontAndBack4AppTypeWApi.GetObjBymIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

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
      const objFrontAndBack4AppType = FrontAndBack4AppType_GetObjFromJsonObj(returnObj);
      return objFrontAndBack4AppType;
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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_GetObjBymIdCache(
  lngmId: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsFrontAndBack4AppTypeWApi.GetObjBymIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFrontAndBack4AppTypeObjLstCache = await FrontAndBack4AppType_GetObjLstCache();
  try {
    const arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    let objFrontAndBack4AppType: clsFrontAndBack4AppTypeEN;
    if (arrFrontAndBack4AppTypeSel.length > 0) {
      objFrontAndBack4AppType = arrFrontAndBack4AppTypeSel[0];
      return objFrontAndBack4AppType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFrontAndBack4AppTypeConst = await FrontAndBack4AppType_GetObjBymIdAsync(lngmId);
        if (objFrontAndBack4AppTypeConst != null) {
          FrontAndBack4AppType_ReFreshThisCache();
          return objFrontAndBack4AppTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsFrontAndBack4AppTypeWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFrontAndBack4AppTypeEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFrontAndBack4AppTypeCache: clsFrontAndBack4AppTypeEN = JSON.parse(strTempObj);
    return objFrontAndBack4AppTypeCache;
  }
  try {
    const objFrontAndBack4AppType = await FrontAndBack4AppType_GetObjBymIdAsync(lngmId);
    if (objFrontAndBack4AppType != null) {
      localStorage.setItem(strKey, JSON.stringify(objFrontAndBack4AppType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFrontAndBack4AppType;
    }
    return objFrontAndBack4AppType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      frontAndBack4AppType_ConstructorName,
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
 * @param objFrontAndBack4AppType:所给的对象
 * @returns 对象
 */
export async function FrontAndBack4AppType_UpdateObjInLstCache(
  objFrontAndBack4AppType: clsFrontAndBack4AppTypeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFrontAndBack4AppTypeObjLstCache = await FrontAndBack4AppType_GetObjLstCache();
    const obj = arrFrontAndBack4AppTypeObjLstCache.find(
      (x) =>
        x.appTypeId4Back == objFrontAndBack4AppType.appTypeId4Back &&
        x.appTypeId4Front == objFrontAndBack4AppType.appTypeId4Front,
    );
    if (obj != null) {
      objFrontAndBack4AppType.mId = obj.mId;
      ObjectAssign(obj, objFrontAndBack4AppType);
    } else {
      arrFrontAndBack4AppTypeObjLstCache.push(objFrontAndBack4AppType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsFrontAndBack4AppTypeEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFrontAndBack4AppTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFrontAndBack4AppTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objFrontAndBack4AppType = await FrontAndBack4AppType_GetObjBymIdCache(lngmId);
  if (objFrontAndBack4AppType == null) return '';
  if (objFrontAndBack4AppType.GetFldValue(strOutFldName) == null) return '';
  return objFrontAndBack4AppType.GetFldValue(strOutFldName).toString();
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
export function FrontAndBack4AppType_SortFunDefa(
  a: clsFrontAndBack4AppTypeEN,
  b: clsFrontAndBack4AppTypeEN,
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
export function FrontAndBack4AppType_SortFunDefa2Fld(
  a: clsFrontAndBack4AppTypeEN,
  b: clsFrontAndBack4AppTypeEN,
): number {
  if (a.appTypeId4Front == b.appTypeId4Front) return a.appTypeId4Back - b.appTypeId4Back;
  else return a.appTypeId4Front - b.appTypeId4Front;
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
export function FrontAndBack4AppType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFrontAndBack4AppTypeEN.con_mId:
        return (a: clsFrontAndBack4AppTypeEN, b: clsFrontAndBack4AppTypeEN) => {
          return a.mId - b.mId;
        };
      case clsFrontAndBack4AppTypeEN.con_AppTypeId4Front:
        return (a: clsFrontAndBack4AppTypeEN, b: clsFrontAndBack4AppTypeEN) => {
          return a.appTypeId4Front - b.appTypeId4Front;
        };
      case clsFrontAndBack4AppTypeEN.con_AppTypeId4Back:
        return (a: clsFrontAndBack4AppTypeEN, b: clsFrontAndBack4AppTypeEN) => {
          return a.appTypeId4Back - b.appTypeId4Back;
        };
      case clsFrontAndBack4AppTypeEN.con_UpdDate:
        return (a: clsFrontAndBack4AppTypeEN, b: clsFrontAndBack4AppTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFrontAndBack4AppTypeEN.con_UpdUser:
        return (a: clsFrontAndBack4AppTypeEN, b: clsFrontAndBack4AppTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFrontAndBack4AppTypeEN.con_Memo:
        return (a: clsFrontAndBack4AppTypeEN, b: clsFrontAndBack4AppTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FrontAndBack4AppType]中不存在!(in ${frontAndBack4AppType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFrontAndBack4AppTypeEN.con_mId:
        return (a: clsFrontAndBack4AppTypeEN, b: clsFrontAndBack4AppTypeEN) => {
          return b.mId - a.mId;
        };
      case clsFrontAndBack4AppTypeEN.con_AppTypeId4Front:
        return (a: clsFrontAndBack4AppTypeEN, b: clsFrontAndBack4AppTypeEN) => {
          return b.appTypeId4Front - a.appTypeId4Front;
        };
      case clsFrontAndBack4AppTypeEN.con_AppTypeId4Back:
        return (a: clsFrontAndBack4AppTypeEN, b: clsFrontAndBack4AppTypeEN) => {
          return b.appTypeId4Back - a.appTypeId4Back;
        };
      case clsFrontAndBack4AppTypeEN.con_UpdDate:
        return (a: clsFrontAndBack4AppTypeEN, b: clsFrontAndBack4AppTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFrontAndBack4AppTypeEN.con_UpdUser:
        return (a: clsFrontAndBack4AppTypeEN, b: clsFrontAndBack4AppTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFrontAndBack4AppTypeEN.con_Memo:
        return (a: clsFrontAndBack4AppTypeEN, b: clsFrontAndBack4AppTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FrontAndBack4AppType]中不存在!(in ${frontAndBack4AppType_ConstructorName}.${strThisFuncName})`;
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
export async function FrontAndBack4AppType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFrontAndBack4AppTypeEN.con_mId:
      return (obj: clsFrontAndBack4AppTypeEN) => {
        return obj.mId === value;
      };
    case clsFrontAndBack4AppTypeEN.con_AppTypeId4Front:
      return (obj: clsFrontAndBack4AppTypeEN) => {
        return obj.appTypeId4Front === value;
      };
    case clsFrontAndBack4AppTypeEN.con_AppTypeId4Back:
      return (obj: clsFrontAndBack4AppTypeEN) => {
        return obj.appTypeId4Back === value;
      };
    case clsFrontAndBack4AppTypeEN.con_UpdDate:
      return (obj: clsFrontAndBack4AppTypeEN) => {
        return obj.updDate === value;
      };
    case clsFrontAndBack4AppTypeEN.con_UpdUser:
      return (obj: clsFrontAndBack4AppTypeEN) => {
        return obj.updUser === value;
      };
    case clsFrontAndBack4AppTypeEN.con_Memo:
      return (obj: clsFrontAndBack4AppTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FrontAndBack4AppType]中不存在!(in ${frontAndBack4AppType_ConstructorName}.${strThisFuncName})`;
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
export async function FrontAndBack4AppType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsFrontAndBack4AppTypeEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrFrontAndBack4AppType = await FrontAndBack4AppType_GetObjLstCache();
  if (arrFrontAndBack4AppType == null) return [];
  let arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFrontAndBack4AppTypeSel.length == 0) return [];
  return arrFrontAndBack4AppTypeSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FrontAndBack4AppType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFrontAndBack4AppTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

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
      const objFrontAndBack4AppType = FrontAndBack4AppType_GetObjFromJsonObj(returnObj);
      return objFrontAndBack4AppType;
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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFrontAndBack4AppTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsFrontAndBack4AppTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFrontAndBack4AppTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFrontAndBack4AppTypeExObjLstCache: Array<clsFrontAndBack4AppTypeEN> =
      CacheHelper.Get(strKey);
    const arrFrontAndBack4AppTypeObjLstT = FrontAndBack4AppType_GetObjLstByJSONObjLst(
      arrFrontAndBack4AppTypeExObjLstCache,
    );
    return arrFrontAndBack4AppTypeObjLstT;
  }
  try {
    const arrFrontAndBack4AppTypeExObjLst = await FrontAndBack4AppType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrFrontAndBack4AppTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFrontAndBack4AppTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrFrontAndBack4AppTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFrontAndBack4AppTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsFrontAndBack4AppTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFrontAndBack4AppTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFrontAndBack4AppTypeExObjLstCache: Array<clsFrontAndBack4AppTypeEN> =
      JSON.parse(strTempObjLst);
    const arrFrontAndBack4AppTypeObjLstT = FrontAndBack4AppType_GetObjLstByJSONObjLst(
      arrFrontAndBack4AppTypeExObjLstCache,
    );
    return arrFrontAndBack4AppTypeObjLstT;
  }
  try {
    const arrFrontAndBack4AppTypeExObjLst = await FrontAndBack4AppType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrFrontAndBack4AppTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFrontAndBack4AppTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrFrontAndBack4AppTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFrontAndBack4AppTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFrontAndBack4AppTypeObjLstCache: Array<clsFrontAndBack4AppTypeEN> =
      JSON.parse(strTempObjLst);
    return arrFrontAndBack4AppTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FrontAndBack4AppType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFrontAndBack4AppTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

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
          frontAndBack4AppType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FrontAndBack4AppType_GetObjLstByJSONObjLst(returnObjLst);
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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFrontAndBack4AppTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsFrontAndBack4AppTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFrontAndBack4AppTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFrontAndBack4AppTypeExObjLstCache: Array<clsFrontAndBack4AppTypeEN> =
      JSON.parse(strTempObjLst);
    const arrFrontAndBack4AppTypeObjLstT = FrontAndBack4AppType_GetObjLstByJSONObjLst(
      arrFrontAndBack4AppTypeExObjLstCache,
    );
    return arrFrontAndBack4AppTypeObjLstT;
  }
  try {
    const arrFrontAndBack4AppTypeExObjLst = await FrontAndBack4AppType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrFrontAndBack4AppTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFrontAndBack4AppTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrFrontAndBack4AppTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFrontAndBack4AppTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFrontAndBack4AppTypeObjLstCache: Array<clsFrontAndBack4AppTypeEN> =
      JSON.parse(strTempObjLst);
    return arrFrontAndBack4AppTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FrontAndBack4AppType_GetObjLstCache(): Promise<
  Array<clsFrontAndBack4AppTypeEN>
> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrFrontAndBack4AppTypeObjLstCache;
  switch (clsFrontAndBack4AppTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrFrontAndBack4AppTypeObjLstCache = await FrontAndBack4AppType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrFrontAndBack4AppTypeObjLstCache = await FrontAndBack4AppType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrFrontAndBack4AppTypeObjLstCache = await FrontAndBack4AppType_GetObjLstClientCache();
      break;
    default:
      arrFrontAndBack4AppTypeObjLstCache = await FrontAndBack4AppType_GetObjLstClientCache();
      break;
  }
  return arrFrontAndBack4AppTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FrontAndBack4AppType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFrontAndBack4AppTypeObjLstCache;
  switch (clsFrontAndBack4AppTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrFrontAndBack4AppTypeObjLstCache =
        await FrontAndBack4AppType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrFrontAndBack4AppTypeObjLstCache =
        await FrontAndBack4AppType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrFrontAndBack4AppTypeObjLstCache = null;
      break;
    default:
      arrFrontAndBack4AppTypeObjLstCache = null;
      break;
  }
  return arrFrontAndBack4AppTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FrontAndBack4AppType_GetSubObjLstCache(
  objFrontAndBack4AppTypeCond: clsFrontAndBack4AppTypeEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFrontAndBack4AppTypeObjLstCache = await FrontAndBack4AppType_GetObjLstCache();
  let arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeObjLstCache;
  if (
    objFrontAndBack4AppTypeCond.sfFldComparisonOp == null ||
    objFrontAndBack4AppTypeCond.sfFldComparisonOp == ''
  )
    return arrFrontAndBack4AppTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFrontAndBack4AppTypeCond.sfFldComparisonOp,
  );
  //console.log("clsFrontAndBack4AppTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFrontAndBack4AppTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFrontAndBack4AppTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFrontAndBack4AppTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFrontAndBack4AppTypeCond),
      frontAndBack4AppType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFrontAndBack4AppTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function FrontAndBack4AppType_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsFrontAndBack4AppTypeEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

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
          frontAndBack4AppType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FrontAndBack4AppType_GetObjLstByJSONObjLst(returnObjLst);
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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrFrontAndBack4AppTypeObjLstCache = await FrontAndBack4AppType_GetObjLstCache();
    const arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrFrontAndBack4AppTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFrontAndBack4AppTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

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
          frontAndBack4AppType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FrontAndBack4AppType_GetObjLstByJSONObjLst(returnObjLst);
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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFrontAndBack4AppTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

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
          frontAndBack4AppType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FrontAndBack4AppType_GetObjLstByJSONObjLst(returnObjLst);
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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsFrontAndBack4AppTypeEN>();
  const arrFrontAndBack4AppTypeObjLstCache = await FrontAndBack4AppType_GetObjLstCache();
  if (arrFrontAndBack4AppTypeObjLstCache.length == 0) return arrFrontAndBack4AppTypeObjLstCache;
  let arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objFrontAndBack4AppTypeCond = new clsFrontAndBack4AppTypeEN();
  ObjectAssign(objFrontAndBack4AppTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsFrontAndBack4AppTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFrontAndBack4AppTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFrontAndBack4AppTypeSel.length == 0) return arrFrontAndBack4AppTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.sort(
        FrontAndBack4AppType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.sort(objPagerPara.sortFun);
    }
    arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.slice(intStart, intEnd);
    return arrFrontAndBack4AppTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      frontAndBack4AppType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFrontAndBack4AppTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function FrontAndBack4AppType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFrontAndBack4AppTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFrontAndBack4AppTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

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
          frontAndBack4AppType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FrontAndBack4AppType_GetObjLstByJSONObjLst(returnObjLst);
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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);
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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_DelFrontAndBack4AppTypesAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFrontAndBack4AppTypesAsync';
  const strAction = 'DelFrontAndBack4AppTypes';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_DelFrontAndBack4AppTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFrontAndBack4AppTypesByCondAsync';
  const strAction = 'DelFrontAndBack4AppTypesByCond';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
 * @param objFrontAndBack4AppTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FrontAndBack4AppType_AddNewRecordAsync(
  objFrontAndBack4AppTypeEN: clsFrontAndBack4AppTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFrontAndBack4AppTypeEN);
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFrontAndBack4AppTypeEN, config);
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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
 * @param objFrontAndBack4AppTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FrontAndBack4AppType_AddNewRecordWithReturnKeyAsync(
  objFrontAndBack4AppTypeEN: clsFrontAndBack4AppTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFrontAndBack4AppTypeEN, config);
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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
 * @param objFrontAndBack4AppTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FrontAndBack4AppType_UpdateRecordAsync(
  objFrontAndBack4AppTypeEN: clsFrontAndBack4AppTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFrontAndBack4AppTypeEN.sfUpdFldSetStr === undefined ||
    objFrontAndBack4AppTypeEN.sfUpdFldSetStr === null ||
    objFrontAndBack4AppTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFrontAndBack4AppTypeEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFrontAndBack4AppTypeEN, config);
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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
 * @param objFrontAndBack4AppTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FrontAndBack4AppType_UpdateWithConditionAsync(
  objFrontAndBack4AppTypeEN: clsFrontAndBack4AppTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFrontAndBack4AppTypeEN.sfUpdFldSetStr === undefined ||
    objFrontAndBack4AppTypeEN.sfUpdFldSetStr === null ||
    objFrontAndBack4AppTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFrontAndBack4AppTypeEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);
  objFrontAndBack4AppTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFrontAndBack4AppTypeEN, config);
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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_IsExistRecordCache(
  objFrontAndBack4AppTypeCond: clsFrontAndBack4AppTypeEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFrontAndBack4AppTypeObjLstCache = await FrontAndBack4AppType_GetObjLstCache();
  if (arrFrontAndBack4AppTypeObjLstCache == null) return false;
  let arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeObjLstCache;
  if (
    objFrontAndBack4AppTypeCond.sfFldComparisonOp == null ||
    objFrontAndBack4AppTypeCond.sfFldComparisonOp == ''
  )
    return arrFrontAndBack4AppTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFrontAndBack4AppTypeCond.sfFldComparisonOp,
  );
  //console.log("clsFrontAndBack4AppTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFrontAndBack4AppTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFrontAndBack4AppTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFrontAndBack4AppTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFrontAndBack4AppTypeCond),
      frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrFrontAndBack4AppTypeObjLstCache = await FrontAndBack4AppType_GetObjLstCache();
  if (arrFrontAndBack4AppTypeObjLstCache == null) return false;
  try {
    const arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    if (arrFrontAndBack4AppTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
 * @param objFrontAndBack4AppTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function FrontAndBack4AppType_GetRecCountByCondCache(
  objFrontAndBack4AppTypeCond: clsFrontAndBack4AppTypeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFrontAndBack4AppTypeObjLstCache = await FrontAndBack4AppType_GetObjLstCache();
  if (arrFrontAndBack4AppTypeObjLstCache == null) return 0;
  let arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeObjLstCache;
  if (
    objFrontAndBack4AppTypeCond.sfFldComparisonOp == null ||
    objFrontAndBack4AppTypeCond.sfFldComparisonOp == ''
  )
    return arrFrontAndBack4AppTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFrontAndBack4AppTypeCond.sfFldComparisonOp,
  );
  //console.log("clsFrontAndBack4AppTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFrontAndBack4AppTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFrontAndBack4AppTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFrontAndBack4AppTypeSel = arrFrontAndBack4AppTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFrontAndBack4AppTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFrontAndBack4AppTypeCond),
      frontAndBack4AppType_ConstructorName,
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
export async function FrontAndBack4AppType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(frontAndBack4AppType_Controller, strAction);

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
        frontAndBack4AppType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        frontAndBack4AppType_ConstructorName,
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
export function FrontAndBack4AppType_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
export function FrontAndBack4AppType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsFrontAndBack4AppTypeEN._CurrTabName;
  switch (clsFrontAndBack4AppTypeEN.CacheModeId) {
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
export function FrontAndBack4AppType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsFrontAndBack4AppTypeEN._CurrTabName;
    switch (clsFrontAndBack4AppTypeEN.CacheModeId) {
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
export function FrontAndBack4AppType_CheckPropertyNew(
  pobjFrontAndBack4AppTypeEN: clsFrontAndBack4AppTypeEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    null === pobjFrontAndBack4AppTypeEN.appTypeId4Front ||
    (pobjFrontAndBack4AppTypeEN.appTypeId4Front != null &&
      pobjFrontAndBack4AppTypeEN.appTypeId4Front.toString() === '') ||
    pobjFrontAndBack4AppTypeEN.appTypeId4Front.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[应用类型Id4Front]不能为空(In 应用类型的前后台关系)!(clsFrontAndBack4AppTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjFrontAndBack4AppTypeEN.appTypeId4Back ||
    (pobjFrontAndBack4AppTypeEN.appTypeId4Back != null &&
      pobjFrontAndBack4AppTypeEN.appTypeId4Back.toString() === '') ||
    pobjFrontAndBack4AppTypeEN.appTypeId4Back.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[应用类型Id4Back]不能为空(In 应用类型的前后台关系)!(clsFrontAndBack4AppTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFrontAndBack4AppTypeEN.updDate) == false &&
    GetStrLen(pobjFrontAndBack4AppTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 应用类型的前后台关系(FrontAndBack4AppType))!值:$(pobjFrontAndBack4AppTypeEN.updDate)(clsFrontAndBack4AppTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFrontAndBack4AppTypeEN.updUser) == false &&
    GetStrLen(pobjFrontAndBack4AppTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 应用类型的前后台关系(FrontAndBack4AppType))!值:$(pobjFrontAndBack4AppTypeEN.updUser)(clsFrontAndBack4AppTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFrontAndBack4AppTypeEN.memo) == false &&
    GetStrLen(pobjFrontAndBack4AppTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 应用类型的前后台关系(FrontAndBack4AppType))!值:$(pobjFrontAndBack4AppTypeEN.memo)(clsFrontAndBack4AppTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFrontAndBack4AppTypeEN.mId &&
    undefined !== pobjFrontAndBack4AppTypeEN.mId &&
    tzDataType.isNumber(pobjFrontAndBack4AppTypeEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjFrontAndBack4AppTypeEN.mId)], 非法,应该为数值型(In 应用类型的前后台关系(FrontAndBack4AppType))!(clsFrontAndBack4AppTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjFrontAndBack4AppTypeEN.appTypeId4Front &&
    undefined !== pobjFrontAndBack4AppTypeEN.appTypeId4Front &&
    tzDataType.isNumber(pobjFrontAndBack4AppTypeEN.appTypeId4Front) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[应用类型Id4Front(appTypeId4Front)]的值:[$(pobjFrontAndBack4AppTypeEN.appTypeId4Front)], 非法,应该为数值型(In 应用类型的前后台关系(FrontAndBack4AppType))!(clsFrontAndBack4AppTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjFrontAndBack4AppTypeEN.appTypeId4Back &&
    undefined !== pobjFrontAndBack4AppTypeEN.appTypeId4Back &&
    tzDataType.isNumber(pobjFrontAndBack4AppTypeEN.appTypeId4Back) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[应用类型Id4Back(appTypeId4Back)]的值:[$(pobjFrontAndBack4AppTypeEN.appTypeId4Back)], 非法,应该为数值型(In 应用类型的前后台关系(FrontAndBack4AppType))!(clsFrontAndBack4AppTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFrontAndBack4AppTypeEN.updDate) == false &&
    undefined !== pobjFrontAndBack4AppTypeEN.updDate &&
    tzDataType.isString(pobjFrontAndBack4AppTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjFrontAndBack4AppTypeEN.updDate)], 非法,应该为字符型(In 应用类型的前后台关系(FrontAndBack4AppType))!(clsFrontAndBack4AppTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFrontAndBack4AppTypeEN.updUser) == false &&
    undefined !== pobjFrontAndBack4AppTypeEN.updUser &&
    tzDataType.isString(pobjFrontAndBack4AppTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjFrontAndBack4AppTypeEN.updUser)], 非法,应该为字符型(In 应用类型的前后台关系(FrontAndBack4AppType))!(clsFrontAndBack4AppTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFrontAndBack4AppTypeEN.memo) == false &&
    undefined !== pobjFrontAndBack4AppTypeEN.memo &&
    tzDataType.isString(pobjFrontAndBack4AppTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjFrontAndBack4AppTypeEN.memo)], 非法,应该为字符型(In 应用类型的前后台关系(FrontAndBack4AppType))!(clsFrontAndBack4AppTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FrontAndBack4AppType_CheckProperty4Update(
  pobjFrontAndBack4AppTypeEN: clsFrontAndBack4AppTypeEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFrontAndBack4AppTypeEN.updDate) == false &&
    GetStrLen(pobjFrontAndBack4AppTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 应用类型的前后台关系(FrontAndBack4AppType))!值:$(pobjFrontAndBack4AppTypeEN.updDate)(clsFrontAndBack4AppTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFrontAndBack4AppTypeEN.updUser) == false &&
    GetStrLen(pobjFrontAndBack4AppTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 应用类型的前后台关系(FrontAndBack4AppType))!值:$(pobjFrontAndBack4AppTypeEN.updUser)(clsFrontAndBack4AppTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFrontAndBack4AppTypeEN.memo) == false &&
    GetStrLen(pobjFrontAndBack4AppTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 应用类型的前后台关系(FrontAndBack4AppType))!值:$(pobjFrontAndBack4AppTypeEN.memo)(clsFrontAndBack4AppTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFrontAndBack4AppTypeEN.mId &&
    undefined !== pobjFrontAndBack4AppTypeEN.mId &&
    tzDataType.isNumber(pobjFrontAndBack4AppTypeEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjFrontAndBack4AppTypeEN.mId)], 非法,应该为数值型(In 应用类型的前后台关系(FrontAndBack4AppType))!(clsFrontAndBack4AppTypeBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjFrontAndBack4AppTypeEN.appTypeId4Front &&
    undefined !== pobjFrontAndBack4AppTypeEN.appTypeId4Front &&
    tzDataType.isNumber(pobjFrontAndBack4AppTypeEN.appTypeId4Front) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[应用类型Id4Front(appTypeId4Front)]的值:[$(pobjFrontAndBack4AppTypeEN.appTypeId4Front)], 非法,应该为数值型(In 应用类型的前后台关系(FrontAndBack4AppType))!(clsFrontAndBack4AppTypeBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjFrontAndBack4AppTypeEN.appTypeId4Back &&
    undefined !== pobjFrontAndBack4AppTypeEN.appTypeId4Back &&
    tzDataType.isNumber(pobjFrontAndBack4AppTypeEN.appTypeId4Back) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[应用类型Id4Back(appTypeId4Back)]的值:[$(pobjFrontAndBack4AppTypeEN.appTypeId4Back)], 非法,应该为数值型(In 应用类型的前后台关系(FrontAndBack4AppType))!(clsFrontAndBack4AppTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFrontAndBack4AppTypeEN.updDate) == false &&
    undefined !== pobjFrontAndBack4AppTypeEN.updDate &&
    tzDataType.isString(pobjFrontAndBack4AppTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjFrontAndBack4AppTypeEN.updDate)], 非法,应该为字符型(In 应用类型的前后台关系(FrontAndBack4AppType))!(clsFrontAndBack4AppTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFrontAndBack4AppTypeEN.updUser) == false &&
    undefined !== pobjFrontAndBack4AppTypeEN.updUser &&
    tzDataType.isString(pobjFrontAndBack4AppTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjFrontAndBack4AppTypeEN.updUser)], 非法,应该为字符型(In 应用类型的前后台关系(FrontAndBack4AppType))!(clsFrontAndBack4AppTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFrontAndBack4AppTypeEN.memo) == false &&
    undefined !== pobjFrontAndBack4AppTypeEN.memo &&
    tzDataType.isString(pobjFrontAndBack4AppTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjFrontAndBack4AppTypeEN.memo)], 非法,应该为字符型(In 应用类型的前后台关系(FrontAndBack4AppType))!(clsFrontAndBack4AppTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjFrontAndBack4AppTypeEN.mId ||
    (pobjFrontAndBack4AppTypeEN.mId != null && pobjFrontAndBack4AppTypeEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 应用类型的前后台关系)!(clsFrontAndBack4AppTypeBL:CheckProperty4Update)',
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
export function FrontAndBack4AppType_GetJSONStrByObj(
  pobjFrontAndBack4AppTypeEN: clsFrontAndBack4AppTypeEN,
): string {
  pobjFrontAndBack4AppTypeEN.sfUpdFldSetStr = pobjFrontAndBack4AppTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFrontAndBack4AppTypeEN);
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
export function FrontAndBack4AppType_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsFrontAndBack4AppTypeEN> {
  let arrFrontAndBack4AppTypeObjLst = new Array<clsFrontAndBack4AppTypeEN>();
  if (strJSON === '') {
    return arrFrontAndBack4AppTypeObjLst;
  }
  try {
    arrFrontAndBack4AppTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFrontAndBack4AppTypeObjLst;
  }
  return arrFrontAndBack4AppTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFrontAndBack4AppTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FrontAndBack4AppType_GetObjLstByJSONObjLst(
  arrFrontAndBack4AppTypeObjLstS: Array<clsFrontAndBack4AppTypeEN>,
): Array<clsFrontAndBack4AppTypeEN> {
  const arrFrontAndBack4AppTypeObjLst = new Array<clsFrontAndBack4AppTypeEN>();
  for (const objInFor of arrFrontAndBack4AppTypeObjLstS) {
    const obj1 = FrontAndBack4AppType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFrontAndBack4AppTypeObjLst.push(obj1);
  }
  return arrFrontAndBack4AppTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FrontAndBack4AppType_GetObjByJSONStr(strJSON: string): clsFrontAndBack4AppTypeEN {
  let pobjFrontAndBack4AppTypeEN = new clsFrontAndBack4AppTypeEN();
  if (strJSON === '') {
    return pobjFrontAndBack4AppTypeEN;
  }
  try {
    pobjFrontAndBack4AppTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFrontAndBack4AppTypeEN;
  }
  return pobjFrontAndBack4AppTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FrontAndBack4AppType_GetCombineCondition(
  objFrontAndBack4AppTypeCond: clsFrontAndBack4AppTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFrontAndBack4AppTypeCond.dicFldComparisonOp,
      clsFrontAndBack4AppTypeEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objFrontAndBack4AppTypeCond.dicFldComparisonOp[clsFrontAndBack4AppTypeEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFrontAndBack4AppTypeEN.con_mId,
      objFrontAndBack4AppTypeCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFrontAndBack4AppTypeCond.dicFldComparisonOp,
      clsFrontAndBack4AppTypeEN.con_AppTypeId4Front,
    ) == true
  ) {
    const strComparisonOpAppTypeId4Front: string =
      objFrontAndBack4AppTypeCond.dicFldComparisonOp[clsFrontAndBack4AppTypeEN.con_AppTypeId4Front];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFrontAndBack4AppTypeEN.con_AppTypeId4Front,
      objFrontAndBack4AppTypeCond.appTypeId4Front,
      strComparisonOpAppTypeId4Front,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFrontAndBack4AppTypeCond.dicFldComparisonOp,
      clsFrontAndBack4AppTypeEN.con_AppTypeId4Back,
    ) == true
  ) {
    const strComparisonOpAppTypeId4Back: string =
      objFrontAndBack4AppTypeCond.dicFldComparisonOp[clsFrontAndBack4AppTypeEN.con_AppTypeId4Back];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFrontAndBack4AppTypeEN.con_AppTypeId4Back,
      objFrontAndBack4AppTypeCond.appTypeId4Back,
      strComparisonOpAppTypeId4Back,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFrontAndBack4AppTypeCond.dicFldComparisonOp,
      clsFrontAndBack4AppTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFrontAndBack4AppTypeCond.dicFldComparisonOp[clsFrontAndBack4AppTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFrontAndBack4AppTypeEN.con_UpdDate,
      objFrontAndBack4AppTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFrontAndBack4AppTypeCond.dicFldComparisonOp,
      clsFrontAndBack4AppTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFrontAndBack4AppTypeCond.dicFldComparisonOp[clsFrontAndBack4AppTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFrontAndBack4AppTypeEN.con_UpdUser,
      objFrontAndBack4AppTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFrontAndBack4AppTypeCond.dicFldComparisonOp,
      clsFrontAndBack4AppTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFrontAndBack4AppTypeCond.dicFldComparisonOp[clsFrontAndBack4AppTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFrontAndBack4AppTypeEN.con_Memo,
      objFrontAndBack4AppTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FrontAndBack4AppType(应用类型的前后台关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param intAppTypeId4Back: 应用类型Id4Back(要求唯一的字段)
 * @param intAppTypeId4Front: 应用类型Id4Front(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FrontAndBack4AppType_GetUniCondStr(
  objFrontAndBack4AppTypeEN: clsFrontAndBack4AppTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and AppTypeId4Back = '{0}'", objFrontAndBack4AppTypeEN.appTypeId4Back);
  strWhereCond += Format(" and AppTypeId4Front = '{0}'", objFrontAndBack4AppTypeEN.appTypeId4Front);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FrontAndBack4AppType(应用类型的前后台关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param intAppTypeId4Back: 应用类型Id4Back(要求唯一的字段)
 * @param intAppTypeId4Front: 应用类型Id4Front(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FrontAndBack4AppType_GetUniCondStr4Update(
  objFrontAndBack4AppTypeEN: clsFrontAndBack4AppTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objFrontAndBack4AppTypeEN.mId);
  strWhereCond += Format(" and AppTypeId4Back = '{0}'", objFrontAndBack4AppTypeEN.appTypeId4Back);
  strWhereCond += Format(" and AppTypeId4Front = '{0}'", objFrontAndBack4AppTypeEN.appTypeId4Front);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFrontAndBack4AppTypeENS:源对象
 * @param objFrontAndBack4AppTypeENT:目标对象
 */
export function FrontAndBack4AppType_GetObjFromJsonObj(
  objFrontAndBack4AppTypeENS: clsFrontAndBack4AppTypeEN,
): clsFrontAndBack4AppTypeEN {
  const objFrontAndBack4AppTypeENT: clsFrontAndBack4AppTypeEN = new clsFrontAndBack4AppTypeEN();
  ObjectAssign(objFrontAndBack4AppTypeENT, objFrontAndBack4AppTypeENS);
  return objFrontAndBack4AppTypeENT;
}
