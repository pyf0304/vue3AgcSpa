/**
 * 类名:clsFeatureFieldTypeRelaWApi
 * 表名:FeatureFieldTypeRela(00050457)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:38:46
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 功能字段类型关系(FeatureFieldTypeRela)
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
import { clsFeatureFieldTypeRelaEN } from '@/ts/L0Entity/Table_Field/clsFeatureFieldTypeRelaEN';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const featureFieldTypeRela_Controller = 'FeatureFieldTypeRelaApi';
export const featureFieldTypeRela_ConstructorName = 'featureFieldTypeRela';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function FeatureFieldTypeRela_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsFeatureFieldTypeRelaEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsFeatureFieldTypeRelaWApi.GetObjBymIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

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
      const objFeatureFieldTypeRela = FeatureFieldTypeRela_GetObjFromJsonObj(returnObj);
      return objFeatureFieldTypeRela;
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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_GetObjBymIdCache(
  lngmId: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsFeatureFieldTypeRelaWApi.GetObjBymIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrFeatureFieldTypeRelaObjLstCache = await FeatureFieldTypeRela_GetObjLstCache();
  try {
    const arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    let objFeatureFieldTypeRela: clsFeatureFieldTypeRelaEN;
    if (arrFeatureFieldTypeRelaSel.length > 0) {
      objFeatureFieldTypeRela = arrFeatureFieldTypeRelaSel[0];
      return objFeatureFieldTypeRela;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFeatureFieldTypeRelaConst = await FeatureFieldTypeRela_GetObjBymIdAsync(lngmId);
        if (objFeatureFieldTypeRelaConst != null) {
          FeatureFieldTypeRela_ReFreshThisCache();
          return objFeatureFieldTypeRelaConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsFeatureFieldTypeRelaWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFeatureFieldTypeRelaEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFeatureFieldTypeRelaCache: clsFeatureFieldTypeRelaEN = JSON.parse(strTempObj);
    return objFeatureFieldTypeRelaCache;
  }
  try {
    const objFeatureFieldTypeRela = await FeatureFieldTypeRela_GetObjBymIdAsync(lngmId);
    if (objFeatureFieldTypeRela != null) {
      localStorage.setItem(strKey, JSON.stringify(objFeatureFieldTypeRela));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFeatureFieldTypeRela;
    }
    return objFeatureFieldTypeRela;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      featureFieldTypeRela_ConstructorName,
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
 * @param objFeatureFieldTypeRela:所给的对象
 * @returns 对象
 */
export async function FeatureFieldTypeRela_UpdateObjInLstCache(
  objFeatureFieldTypeRela: clsFeatureFieldTypeRelaEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFeatureFieldTypeRelaObjLstCache = await FeatureFieldTypeRela_GetObjLstCache();
    const obj = arrFeatureFieldTypeRelaObjLstCache.find(
      (x) =>
        x.fieldTypeId == objFeatureFieldTypeRela.fieldTypeId &&
        x.featureId == objFeatureFieldTypeRela.featureId,
    );
    if (obj != null) {
      objFeatureFieldTypeRela.mId = obj.mId;
      ObjectAssign(obj, objFeatureFieldTypeRela);
    } else {
      arrFeatureFieldTypeRelaObjLstCache.push(objFeatureFieldTypeRela);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsFeatureFieldTypeRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFeatureFieldTypeRelaEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFeatureFieldTypeRelaEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objFeatureFieldTypeRela = await FeatureFieldTypeRela_GetObjBymIdCache(lngmId);
  if (objFeatureFieldTypeRela == null) return '';
  if (objFeatureFieldTypeRela.GetFldValue(strOutFldName) == null) return '';
  return objFeatureFieldTypeRela.GetFldValue(strOutFldName).toString();
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
export function FeatureFieldTypeRela_SortFunDefa(
  a: clsFeatureFieldTypeRelaEN,
  b: clsFeatureFieldTypeRelaEN,
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
export function FeatureFieldTypeRela_SortFunDefa2Fld(
  a: clsFeatureFieldTypeRelaEN,
  b: clsFeatureFieldTypeRelaEN,
): number {
  if (a.featureId == b.featureId) return a.fieldTypeId.localeCompare(b.fieldTypeId);
  else return a.featureId.localeCompare(b.featureId);
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
export function FeatureFieldTypeRela_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFeatureFieldTypeRelaEN.con_mId:
        return (a: clsFeatureFieldTypeRelaEN, b: clsFeatureFieldTypeRelaEN) => {
          return a.mId - b.mId;
        };
      case clsFeatureFieldTypeRelaEN.con_FeatureId:
        return (a: clsFeatureFieldTypeRelaEN, b: clsFeatureFieldTypeRelaEN) => {
          return a.featureId.localeCompare(b.featureId);
        };
      case clsFeatureFieldTypeRelaEN.con_FieldTypeId:
        return (a: clsFeatureFieldTypeRelaEN, b: clsFeatureFieldTypeRelaEN) => {
          return a.fieldTypeId.localeCompare(b.fieldTypeId);
        };
      case clsFeatureFieldTypeRelaEN.con_OrderNum:
        return (a: clsFeatureFieldTypeRelaEN, b: clsFeatureFieldTypeRelaEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsFeatureFieldTypeRelaEN.con_UpdDate:
        return (a: clsFeatureFieldTypeRelaEN, b: clsFeatureFieldTypeRelaEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFeatureFieldTypeRelaEN.con_UpdUser:
        return (a: clsFeatureFieldTypeRelaEN, b: clsFeatureFieldTypeRelaEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFeatureFieldTypeRelaEN.con_Memo:
        return (a: clsFeatureFieldTypeRelaEN, b: clsFeatureFieldTypeRelaEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FeatureFieldTypeRela]中不存在!(in ${featureFieldTypeRela_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFeatureFieldTypeRelaEN.con_mId:
        return (a: clsFeatureFieldTypeRelaEN, b: clsFeatureFieldTypeRelaEN) => {
          return b.mId - a.mId;
        };
      case clsFeatureFieldTypeRelaEN.con_FeatureId:
        return (a: clsFeatureFieldTypeRelaEN, b: clsFeatureFieldTypeRelaEN) => {
          return b.featureId.localeCompare(a.featureId);
        };
      case clsFeatureFieldTypeRelaEN.con_FieldTypeId:
        return (a: clsFeatureFieldTypeRelaEN, b: clsFeatureFieldTypeRelaEN) => {
          return b.fieldTypeId.localeCompare(a.fieldTypeId);
        };
      case clsFeatureFieldTypeRelaEN.con_OrderNum:
        return (a: clsFeatureFieldTypeRelaEN, b: clsFeatureFieldTypeRelaEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsFeatureFieldTypeRelaEN.con_UpdDate:
        return (a: clsFeatureFieldTypeRelaEN, b: clsFeatureFieldTypeRelaEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFeatureFieldTypeRelaEN.con_UpdUser:
        return (a: clsFeatureFieldTypeRelaEN, b: clsFeatureFieldTypeRelaEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFeatureFieldTypeRelaEN.con_Memo:
        return (a: clsFeatureFieldTypeRelaEN, b: clsFeatureFieldTypeRelaEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FeatureFieldTypeRela]中不存在!(in ${featureFieldTypeRela_ConstructorName}.${strThisFuncName})`;
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
export async function FeatureFieldTypeRela_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFeatureFieldTypeRelaEN.con_mId:
      return (obj: clsFeatureFieldTypeRelaEN) => {
        return obj.mId === value;
      };
    case clsFeatureFieldTypeRelaEN.con_FeatureId:
      return (obj: clsFeatureFieldTypeRelaEN) => {
        return obj.featureId === value;
      };
    case clsFeatureFieldTypeRelaEN.con_FieldTypeId:
      return (obj: clsFeatureFieldTypeRelaEN) => {
        return obj.fieldTypeId === value;
      };
    case clsFeatureFieldTypeRelaEN.con_OrderNum:
      return (obj: clsFeatureFieldTypeRelaEN) => {
        return obj.orderNum === value;
      };
    case clsFeatureFieldTypeRelaEN.con_UpdDate:
      return (obj: clsFeatureFieldTypeRelaEN) => {
        return obj.updDate === value;
      };
    case clsFeatureFieldTypeRelaEN.con_UpdUser:
      return (obj: clsFeatureFieldTypeRelaEN) => {
        return obj.updUser === value;
      };
    case clsFeatureFieldTypeRelaEN.con_Memo:
      return (obj: clsFeatureFieldTypeRelaEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FeatureFieldTypeRela]中不存在!(in ${featureFieldTypeRela_ConstructorName}.${strThisFuncName})`;
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
export async function FeatureFieldTypeRela_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsFeatureFieldTypeRelaEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrFeatureFieldTypeRela = await FeatureFieldTypeRela_GetObjLstCache();
  if (arrFeatureFieldTypeRela == null) return [];
  let arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRela;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFeatureFieldTypeRelaSel.length == 0) return [];
  return arrFeatureFieldTypeRelaSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FeatureFieldTypeRela_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFeatureFieldTypeRelaEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

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
      const objFeatureFieldTypeRela = FeatureFieldTypeRela_GetObjFromJsonObj(returnObj);
      return objFeatureFieldTypeRela;
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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFeatureFieldTypeRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsFeatureFieldTypeRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFeatureFieldTypeRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFeatureFieldTypeRelaExObjLstCache: Array<clsFeatureFieldTypeRelaEN> =
      CacheHelper.Get(strKey);
    const arrFeatureFieldTypeRelaObjLstT = FeatureFieldTypeRela_GetObjLstByJSONObjLst(
      arrFeatureFieldTypeRelaExObjLstCache,
    );
    return arrFeatureFieldTypeRelaObjLstT;
  }
  try {
    const arrFeatureFieldTypeRelaExObjLst = await FeatureFieldTypeRela_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrFeatureFieldTypeRelaExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFeatureFieldTypeRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrFeatureFieldTypeRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFeatureFieldTypeRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsFeatureFieldTypeRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFeatureFieldTypeRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFeatureFieldTypeRelaExObjLstCache: Array<clsFeatureFieldTypeRelaEN> =
      JSON.parse(strTempObjLst);
    const arrFeatureFieldTypeRelaObjLstT = FeatureFieldTypeRela_GetObjLstByJSONObjLst(
      arrFeatureFieldTypeRelaExObjLstCache,
    );
    return arrFeatureFieldTypeRelaObjLstT;
  }
  try {
    const arrFeatureFieldTypeRelaExObjLst = await FeatureFieldTypeRela_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrFeatureFieldTypeRelaExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFeatureFieldTypeRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrFeatureFieldTypeRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFeatureFieldTypeRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFeatureFieldTypeRelaObjLstCache: Array<clsFeatureFieldTypeRelaEN> =
      JSON.parse(strTempObjLst);
    return arrFeatureFieldTypeRelaObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FeatureFieldTypeRela_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFeatureFieldTypeRelaEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

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
          featureFieldTypeRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureFieldTypeRela_GetObjLstByJSONObjLst(returnObjLst);
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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsFeatureFieldTypeRelaEN._CurrTabName;
  if (IsNullOrEmpty(clsFeatureFieldTypeRelaEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFeatureFieldTypeRelaEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFeatureFieldTypeRelaExObjLstCache: Array<clsFeatureFieldTypeRelaEN> =
      JSON.parse(strTempObjLst);
    const arrFeatureFieldTypeRelaObjLstT = FeatureFieldTypeRela_GetObjLstByJSONObjLst(
      arrFeatureFieldTypeRelaExObjLstCache,
    );
    return arrFeatureFieldTypeRelaObjLstT;
  }
  try {
    const arrFeatureFieldTypeRelaExObjLst = await FeatureFieldTypeRela_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrFeatureFieldTypeRelaExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFeatureFieldTypeRelaExObjLst.length,
    );
    console.log(strInfo);
    return arrFeatureFieldTypeRelaExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsFeatureFieldTypeRelaEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFeatureFieldTypeRelaObjLstCache: Array<clsFeatureFieldTypeRelaEN> =
      JSON.parse(strTempObjLst);
    return arrFeatureFieldTypeRelaObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FeatureFieldTypeRela_GetObjLstCache(): Promise<
  Array<clsFeatureFieldTypeRelaEN>
> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrFeatureFieldTypeRelaObjLstCache;
  switch (clsFeatureFieldTypeRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrFeatureFieldTypeRelaObjLstCache = await FeatureFieldTypeRela_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrFeatureFieldTypeRelaObjLstCache = await FeatureFieldTypeRela_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrFeatureFieldTypeRelaObjLstCache = await FeatureFieldTypeRela_GetObjLstClientCache();
      break;
    default:
      arrFeatureFieldTypeRelaObjLstCache = await FeatureFieldTypeRela_GetObjLstClientCache();
      break;
  }
  return arrFeatureFieldTypeRelaObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FeatureFieldTypeRela_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFeatureFieldTypeRelaObjLstCache;
  switch (clsFeatureFieldTypeRelaEN.CacheModeId) {
    case '04': //sessionStorage
      arrFeatureFieldTypeRelaObjLstCache =
        await FeatureFieldTypeRela_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrFeatureFieldTypeRelaObjLstCache =
        await FeatureFieldTypeRela_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrFeatureFieldTypeRelaObjLstCache = null;
      break;
    default:
      arrFeatureFieldTypeRelaObjLstCache = null;
      break;
  }
  return arrFeatureFieldTypeRelaObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FeatureFieldTypeRela_GetSubObjLstCache(
  objFeatureFieldTypeRelaCond: clsFeatureFieldTypeRelaEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFeatureFieldTypeRelaObjLstCache = await FeatureFieldTypeRela_GetObjLstCache();
  let arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaObjLstCache;
  if (
    objFeatureFieldTypeRelaCond.sfFldComparisonOp == null ||
    objFeatureFieldTypeRelaCond.sfFldComparisonOp == ''
  )
    return arrFeatureFieldTypeRelaSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFeatureFieldTypeRelaCond.sfFldComparisonOp,
  );
  //console.log("clsFeatureFieldTypeRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFeatureFieldTypeRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFeatureFieldTypeRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFeatureFieldTypeRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFeatureFieldTypeRelaCond),
      featureFieldTypeRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFeatureFieldTypeRelaEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function FeatureFieldTypeRela_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsFeatureFieldTypeRelaEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

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
          featureFieldTypeRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureFieldTypeRela_GetObjLstByJSONObjLst(returnObjLst);
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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrFeatureFieldTypeRelaObjLstCache = await FeatureFieldTypeRela_GetObjLstCache();
    const arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrFeatureFieldTypeRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFeatureFieldTypeRelaEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

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
          featureFieldTypeRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureFieldTypeRela_GetObjLstByJSONObjLst(returnObjLst);
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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFeatureFieldTypeRelaEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

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
          featureFieldTypeRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureFieldTypeRela_GetObjLstByJSONObjLst(returnObjLst);
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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsFeatureFieldTypeRelaEN>();
  const arrFeatureFieldTypeRelaObjLstCache = await FeatureFieldTypeRela_GetObjLstCache();
  if (arrFeatureFieldTypeRelaObjLstCache.length == 0) return arrFeatureFieldTypeRelaObjLstCache;
  let arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objFeatureFieldTypeRelaCond = new clsFeatureFieldTypeRelaEN();
  ObjectAssign(objFeatureFieldTypeRelaCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsFeatureFieldTypeRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFeatureFieldTypeRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFeatureFieldTypeRelaSel.length == 0) return arrFeatureFieldTypeRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.sort(
        FeatureFieldTypeRela_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.sort(objPagerPara.sortFun);
    }
    arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.slice(intStart, intEnd);
    return arrFeatureFieldTypeRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      featureFieldTypeRela_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFeatureFieldTypeRelaEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function FeatureFieldTypeRela_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFeatureFieldTypeRelaEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFeatureFieldTypeRelaEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

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
          featureFieldTypeRela_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FeatureFieldTypeRela_GetObjLstByJSONObjLst(returnObjLst);
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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);
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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_DelFeatureFieldTypeRelasAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFeatureFieldTypeRelasAsync';
  const strAction = 'DelFeatureFieldTypeRelas';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_DelFeatureFieldTypeRelasByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFeatureFieldTypeRelasByCondAsync';
  const strAction = 'DelFeatureFieldTypeRelasByCond';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
 * @param objFeatureFieldTypeRelaEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FeatureFieldTypeRela_AddNewRecordAsync(
  objFeatureFieldTypeRelaEN: clsFeatureFieldTypeRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFeatureFieldTypeRelaEN);
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureFieldTypeRelaEN, config);
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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
 * @param objFeatureFieldTypeRelaEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FeatureFieldTypeRela_AddNewRecordWithReturnKeyAsync(
  objFeatureFieldTypeRelaEN: clsFeatureFieldTypeRelaEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureFieldTypeRelaEN, config);
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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
 * @param objFeatureFieldTypeRelaEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FeatureFieldTypeRela_UpdateRecordAsync(
  objFeatureFieldTypeRelaEN: clsFeatureFieldTypeRelaEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFeatureFieldTypeRelaEN.sfUpdFldSetStr === undefined ||
    objFeatureFieldTypeRelaEN.sfUpdFldSetStr === null ||
    objFeatureFieldTypeRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFeatureFieldTypeRelaEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureFieldTypeRelaEN, config);
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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
 * @param objFeatureFieldTypeRelaEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FeatureFieldTypeRela_UpdateWithConditionAsync(
  objFeatureFieldTypeRelaEN: clsFeatureFieldTypeRelaEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFeatureFieldTypeRelaEN.sfUpdFldSetStr === undefined ||
    objFeatureFieldTypeRelaEN.sfUpdFldSetStr === null ||
    objFeatureFieldTypeRelaEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFeatureFieldTypeRelaEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);
  objFeatureFieldTypeRelaEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFeatureFieldTypeRelaEN, config);
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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_IsExistRecordCache(
  objFeatureFieldTypeRelaCond: clsFeatureFieldTypeRelaEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFeatureFieldTypeRelaObjLstCache = await FeatureFieldTypeRela_GetObjLstCache();
  if (arrFeatureFieldTypeRelaObjLstCache == null) return false;
  let arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaObjLstCache;
  if (
    objFeatureFieldTypeRelaCond.sfFldComparisonOp == null ||
    objFeatureFieldTypeRelaCond.sfFldComparisonOp == ''
  )
    return arrFeatureFieldTypeRelaSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFeatureFieldTypeRelaCond.sfFldComparisonOp,
  );
  //console.log("clsFeatureFieldTypeRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFeatureFieldTypeRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFeatureFieldTypeRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFeatureFieldTypeRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFeatureFieldTypeRelaCond),
      featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrFeatureFieldTypeRelaObjLstCache = await FeatureFieldTypeRela_GetObjLstCache();
  if (arrFeatureFieldTypeRelaObjLstCache == null) return false;
  try {
    const arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaObjLstCache.filter(
      (x) => x.mId == lngmId,
    );
    if (arrFeatureFieldTypeRelaSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
 * @param objFeatureFieldTypeRelaCond:条件对象
 * @returns 对象列表记录数
 */
export async function FeatureFieldTypeRela_GetRecCountByCondCache(
  objFeatureFieldTypeRelaCond: clsFeatureFieldTypeRelaEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFeatureFieldTypeRelaObjLstCache = await FeatureFieldTypeRela_GetObjLstCache();
  if (arrFeatureFieldTypeRelaObjLstCache == null) return 0;
  let arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaObjLstCache;
  if (
    objFeatureFieldTypeRelaCond.sfFldComparisonOp == null ||
    objFeatureFieldTypeRelaCond.sfFldComparisonOp == ''
  )
    return arrFeatureFieldTypeRelaSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFeatureFieldTypeRelaCond.sfFldComparisonOp,
  );
  //console.log("clsFeatureFieldTypeRelaWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFeatureFieldTypeRelaCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFeatureFieldTypeRelaCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFeatureFieldTypeRelaSel = arrFeatureFieldTypeRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFeatureFieldTypeRelaSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFeatureFieldTypeRelaCond),
      featureFieldTypeRela_ConstructorName,
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
export async function FeatureFieldTypeRela_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(featureFieldTypeRela_Controller, strAction);

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
        featureFieldTypeRela_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        featureFieldTypeRela_ConstructorName,
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
export function FeatureFieldTypeRela_GetWebApiUrl(
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
export function FeatureFieldTypeRela_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsFeatureFieldTypeRelaEN._CurrTabName;
  switch (clsFeatureFieldTypeRelaEN.CacheModeId) {
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
export function FeatureFieldTypeRela_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsFeatureFieldTypeRelaEN._CurrTabName;
    switch (clsFeatureFieldTypeRelaEN.CacheModeId) {
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
export function FeatureFieldTypeRela_CheckPropertyNew(
  pobjFeatureFieldTypeRelaEN: clsFeatureFieldTypeRelaEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.featureId) === true ||
    pobjFeatureFieldTypeRelaEN.featureId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[功能Id]不能为空(In 功能字段类型关系)!(clsFeatureFieldTypeRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.fieldTypeId) === true ||
    pobjFeatureFieldTypeRelaEN.fieldTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[字段类型Id]不能为空(In 功能字段类型关系)!(clsFeatureFieldTypeRelaBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.updUser) === true) {
    throw new Error(
      '(errid:Watl000411)字段[修改者]不能为空(In 功能字段类型关系)!(clsFeatureFieldTypeRelaBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.featureId) == false &&
    GetStrLen(pobjFeatureFieldTypeRelaEN.featureId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能Id(featureId)]的长度不能超过4(In 功能字段类型关系(FeatureFieldTypeRela))!值:$(pobjFeatureFieldTypeRelaEN.featureId)(clsFeatureFieldTypeRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.fieldTypeId) == false &&
    GetStrLen(pobjFeatureFieldTypeRelaEN.fieldTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 功能字段类型关系(FeatureFieldTypeRela))!值:$(pobjFeatureFieldTypeRelaEN.fieldTypeId)(clsFeatureFieldTypeRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.updDate) == false &&
    GetStrLen(pobjFeatureFieldTypeRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 功能字段类型关系(FeatureFieldTypeRela))!值:$(pobjFeatureFieldTypeRelaEN.updDate)(clsFeatureFieldTypeRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.updUser) == false &&
    GetStrLen(pobjFeatureFieldTypeRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 功能字段类型关系(FeatureFieldTypeRela))!值:$(pobjFeatureFieldTypeRelaEN.updUser)(clsFeatureFieldTypeRelaBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.memo) == false &&
    GetStrLen(pobjFeatureFieldTypeRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 功能字段类型关系(FeatureFieldTypeRela))!值:$(pobjFeatureFieldTypeRelaEN.memo)(clsFeatureFieldTypeRelaBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFeatureFieldTypeRelaEN.mId &&
    undefined !== pobjFeatureFieldTypeRelaEN.mId &&
    tzDataType.isNumber(pobjFeatureFieldTypeRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjFeatureFieldTypeRelaEN.mId)], 非法,应该为数值型(In 功能字段类型关系(FeatureFieldTypeRela))!(clsFeatureFieldTypeRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.featureId) == false &&
    undefined !== pobjFeatureFieldTypeRelaEN.featureId &&
    tzDataType.isString(pobjFeatureFieldTypeRelaEN.featureId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能Id(featureId)]的值:[$(pobjFeatureFieldTypeRelaEN.featureId)], 非法,应该为字符型(In 功能字段类型关系(FeatureFieldTypeRela))!(clsFeatureFieldTypeRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.fieldTypeId) == false &&
    undefined !== pobjFeatureFieldTypeRelaEN.fieldTypeId &&
    tzDataType.isString(pobjFeatureFieldTypeRelaEN.fieldTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字段类型Id(fieldTypeId)]的值:[$(pobjFeatureFieldTypeRelaEN.fieldTypeId)], 非法,应该为字符型(In 功能字段类型关系(FeatureFieldTypeRela))!(clsFeatureFieldTypeRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjFeatureFieldTypeRelaEN.orderNum &&
    undefined !== pobjFeatureFieldTypeRelaEN.orderNum &&
    tzDataType.isNumber(pobjFeatureFieldTypeRelaEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjFeatureFieldTypeRelaEN.orderNum)], 非法,应该为数值型(In 功能字段类型关系(FeatureFieldTypeRela))!(clsFeatureFieldTypeRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.updDate) == false &&
    undefined !== pobjFeatureFieldTypeRelaEN.updDate &&
    tzDataType.isString(pobjFeatureFieldTypeRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjFeatureFieldTypeRelaEN.updDate)], 非法,应该为字符型(In 功能字段类型关系(FeatureFieldTypeRela))!(clsFeatureFieldTypeRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.updUser) == false &&
    undefined !== pobjFeatureFieldTypeRelaEN.updUser &&
    tzDataType.isString(pobjFeatureFieldTypeRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjFeatureFieldTypeRelaEN.updUser)], 非法,应该为字符型(In 功能字段类型关系(FeatureFieldTypeRela))!(clsFeatureFieldTypeRelaBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.memo) == false &&
    undefined !== pobjFeatureFieldTypeRelaEN.memo &&
    tzDataType.isString(pobjFeatureFieldTypeRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjFeatureFieldTypeRelaEN.memo)], 非法,应该为字符型(In 功能字段类型关系(FeatureFieldTypeRela))!(clsFeatureFieldTypeRelaBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FeatureFieldTypeRela_CheckProperty4Update(
  pobjFeatureFieldTypeRelaEN: clsFeatureFieldTypeRelaEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.featureId) == false &&
    GetStrLen(pobjFeatureFieldTypeRelaEN.featureId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能Id(featureId)]的长度不能超过4(In 功能字段类型关系(FeatureFieldTypeRela))!值:$(pobjFeatureFieldTypeRelaEN.featureId)(clsFeatureFieldTypeRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.fieldTypeId) == false &&
    GetStrLen(pobjFeatureFieldTypeRelaEN.fieldTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字段类型Id(fieldTypeId)]的长度不能超过2(In 功能字段类型关系(FeatureFieldTypeRela))!值:$(pobjFeatureFieldTypeRelaEN.fieldTypeId)(clsFeatureFieldTypeRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.updDate) == false &&
    GetStrLen(pobjFeatureFieldTypeRelaEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 功能字段类型关系(FeatureFieldTypeRela))!值:$(pobjFeatureFieldTypeRelaEN.updDate)(clsFeatureFieldTypeRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.updUser) == false &&
    GetStrLen(pobjFeatureFieldTypeRelaEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 功能字段类型关系(FeatureFieldTypeRela))!值:$(pobjFeatureFieldTypeRelaEN.updUser)(clsFeatureFieldTypeRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.memo) == false &&
    GetStrLen(pobjFeatureFieldTypeRelaEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 功能字段类型关系(FeatureFieldTypeRela))!值:$(pobjFeatureFieldTypeRelaEN.memo)(clsFeatureFieldTypeRelaBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFeatureFieldTypeRelaEN.mId &&
    undefined !== pobjFeatureFieldTypeRelaEN.mId &&
    tzDataType.isNumber(pobjFeatureFieldTypeRelaEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjFeatureFieldTypeRelaEN.mId)], 非法,应该为数值型(In 功能字段类型关系(FeatureFieldTypeRela))!(clsFeatureFieldTypeRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.featureId) == false &&
    undefined !== pobjFeatureFieldTypeRelaEN.featureId &&
    tzDataType.isString(pobjFeatureFieldTypeRelaEN.featureId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能Id(featureId)]的值:[$(pobjFeatureFieldTypeRelaEN.featureId)], 非法,应该为字符型(In 功能字段类型关系(FeatureFieldTypeRela))!(clsFeatureFieldTypeRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.fieldTypeId) == false &&
    undefined !== pobjFeatureFieldTypeRelaEN.fieldTypeId &&
    tzDataType.isString(pobjFeatureFieldTypeRelaEN.fieldTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字段类型Id(fieldTypeId)]的值:[$(pobjFeatureFieldTypeRelaEN.fieldTypeId)], 非法,应该为字符型(In 功能字段类型关系(FeatureFieldTypeRela))!(clsFeatureFieldTypeRelaBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjFeatureFieldTypeRelaEN.orderNum &&
    undefined !== pobjFeatureFieldTypeRelaEN.orderNum &&
    tzDataType.isNumber(pobjFeatureFieldTypeRelaEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjFeatureFieldTypeRelaEN.orderNum)], 非法,应该为数值型(In 功能字段类型关系(FeatureFieldTypeRela))!(clsFeatureFieldTypeRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.updDate) == false &&
    undefined !== pobjFeatureFieldTypeRelaEN.updDate &&
    tzDataType.isString(pobjFeatureFieldTypeRelaEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjFeatureFieldTypeRelaEN.updDate)], 非法,应该为字符型(In 功能字段类型关系(FeatureFieldTypeRela))!(clsFeatureFieldTypeRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.updUser) == false &&
    undefined !== pobjFeatureFieldTypeRelaEN.updUser &&
    tzDataType.isString(pobjFeatureFieldTypeRelaEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjFeatureFieldTypeRelaEN.updUser)], 非法,应该为字符型(In 功能字段类型关系(FeatureFieldTypeRela))!(clsFeatureFieldTypeRelaBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFeatureFieldTypeRelaEN.memo) == false &&
    undefined !== pobjFeatureFieldTypeRelaEN.memo &&
    tzDataType.isString(pobjFeatureFieldTypeRelaEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjFeatureFieldTypeRelaEN.memo)], 非法,应该为字符型(In 功能字段类型关系(FeatureFieldTypeRela))!(clsFeatureFieldTypeRelaBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjFeatureFieldTypeRelaEN.mId ||
    (pobjFeatureFieldTypeRelaEN.mId != null && pobjFeatureFieldTypeRelaEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 功能字段类型关系)!(clsFeatureFieldTypeRelaBL:CheckProperty4Update)',
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
export function FeatureFieldTypeRela_GetJSONStrByObj(
  pobjFeatureFieldTypeRelaEN: clsFeatureFieldTypeRelaEN,
): string {
  pobjFeatureFieldTypeRelaEN.sfUpdFldSetStr = pobjFeatureFieldTypeRelaEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFeatureFieldTypeRelaEN);
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
export function FeatureFieldTypeRela_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsFeatureFieldTypeRelaEN> {
  let arrFeatureFieldTypeRelaObjLst = new Array<clsFeatureFieldTypeRelaEN>();
  if (strJSON === '') {
    return arrFeatureFieldTypeRelaObjLst;
  }
  try {
    arrFeatureFieldTypeRelaObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFeatureFieldTypeRelaObjLst;
  }
  return arrFeatureFieldTypeRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFeatureFieldTypeRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FeatureFieldTypeRela_GetObjLstByJSONObjLst(
  arrFeatureFieldTypeRelaObjLstS: Array<clsFeatureFieldTypeRelaEN>,
): Array<clsFeatureFieldTypeRelaEN> {
  const arrFeatureFieldTypeRelaObjLst = new Array<clsFeatureFieldTypeRelaEN>();
  for (const objInFor of arrFeatureFieldTypeRelaObjLstS) {
    const obj1 = FeatureFieldTypeRela_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFeatureFieldTypeRelaObjLst.push(obj1);
  }
  return arrFeatureFieldTypeRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FeatureFieldTypeRela_GetObjByJSONStr(strJSON: string): clsFeatureFieldTypeRelaEN {
  let pobjFeatureFieldTypeRelaEN = new clsFeatureFieldTypeRelaEN();
  if (strJSON === '') {
    return pobjFeatureFieldTypeRelaEN;
  }
  try {
    pobjFeatureFieldTypeRelaEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFeatureFieldTypeRelaEN;
  }
  return pobjFeatureFieldTypeRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FeatureFieldTypeRela_GetCombineCondition(
  objFeatureFieldTypeRelaCond: clsFeatureFieldTypeRelaEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureFieldTypeRelaCond.dicFldComparisonOp,
      clsFeatureFieldTypeRelaEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objFeatureFieldTypeRelaCond.dicFldComparisonOp[clsFeatureFieldTypeRelaEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFeatureFieldTypeRelaEN.con_mId,
      objFeatureFieldTypeRelaCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureFieldTypeRelaCond.dicFldComparisonOp,
      clsFeatureFieldTypeRelaEN.con_FeatureId,
    ) == true
  ) {
    const strComparisonOpFeatureId: string =
      objFeatureFieldTypeRelaCond.dicFldComparisonOp[clsFeatureFieldTypeRelaEN.con_FeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureFieldTypeRelaEN.con_FeatureId,
      objFeatureFieldTypeRelaCond.featureId,
      strComparisonOpFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureFieldTypeRelaCond.dicFldComparisonOp,
      clsFeatureFieldTypeRelaEN.con_FieldTypeId,
    ) == true
  ) {
    const strComparisonOpFieldTypeId: string =
      objFeatureFieldTypeRelaCond.dicFldComparisonOp[clsFeatureFieldTypeRelaEN.con_FieldTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureFieldTypeRelaEN.con_FieldTypeId,
      objFeatureFieldTypeRelaCond.fieldTypeId,
      strComparisonOpFieldTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureFieldTypeRelaCond.dicFldComparisonOp,
      clsFeatureFieldTypeRelaEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objFeatureFieldTypeRelaCond.dicFldComparisonOp[clsFeatureFieldTypeRelaEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFeatureFieldTypeRelaEN.con_OrderNum,
      objFeatureFieldTypeRelaCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureFieldTypeRelaCond.dicFldComparisonOp,
      clsFeatureFieldTypeRelaEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFeatureFieldTypeRelaCond.dicFldComparisonOp[clsFeatureFieldTypeRelaEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureFieldTypeRelaEN.con_UpdDate,
      objFeatureFieldTypeRelaCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureFieldTypeRelaCond.dicFldComparisonOp,
      clsFeatureFieldTypeRelaEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFeatureFieldTypeRelaCond.dicFldComparisonOp[clsFeatureFieldTypeRelaEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureFieldTypeRelaEN.con_UpdUser,
      objFeatureFieldTypeRelaCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFeatureFieldTypeRelaCond.dicFldComparisonOp,
      clsFeatureFieldTypeRelaEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFeatureFieldTypeRelaCond.dicFldComparisonOp[clsFeatureFieldTypeRelaEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFeatureFieldTypeRelaEN.con_Memo,
      objFeatureFieldTypeRelaCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FeatureFieldTypeRela(功能字段类型关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFieldTypeId: 字段类型Id(要求唯一的字段)
 * @param strFeatureId: 功能Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FeatureFieldTypeRela_GetUniCondStr(
  objFeatureFieldTypeRelaEN: clsFeatureFieldTypeRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FieldTypeId = '{0}'", objFeatureFieldTypeRelaEN.fieldTypeId);
  strWhereCond += Format(" and FeatureId = '{0}'", objFeatureFieldTypeRelaEN.featureId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FeatureFieldTypeRela(功能字段类型关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFieldTypeId: 字段类型Id(要求唯一的字段)
 * @param strFeatureId: 功能Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FeatureFieldTypeRela_GetUniCondStr4Update(
  objFeatureFieldTypeRelaEN: clsFeatureFieldTypeRelaEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objFeatureFieldTypeRelaEN.mId);
  strWhereCond += Format(" and FieldTypeId = '{0}'", objFeatureFieldTypeRelaEN.fieldTypeId);
  strWhereCond += Format(" and FeatureId = '{0}'", objFeatureFieldTypeRelaEN.featureId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFeatureFieldTypeRelaENS:源对象
 * @param objFeatureFieldTypeRelaENT:目标对象
 */
export function FeatureFieldTypeRela_GetObjFromJsonObj(
  objFeatureFieldTypeRelaENS: clsFeatureFieldTypeRelaEN,
): clsFeatureFieldTypeRelaEN {
  const objFeatureFieldTypeRelaENT: clsFeatureFieldTypeRelaEN = new clsFeatureFieldTypeRelaEN();
  ObjectAssign(objFeatureFieldTypeRelaENT, objFeatureFieldTypeRelaENS);
  return objFeatureFieldTypeRelaENT;
}
