/**
 * 类名:clsSoftStructureWApi
 * 表名:SoftStructure(00050187)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:41:29
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:工程管理(PrjManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 软件架构(SoftStructure)
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
import { clsSoftStructureEN } from '@/ts/L0Entity/PrjManage/clsSoftStructureEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const softStructure_Controller = 'SoftStructureApi';
export const softStructure_ConstructorName = 'softStructure';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strSoftStructureId:关键字
 * @returns 对象
 **/
export async function SoftStructure_GetObjBySoftStructureIdAsync(
  strSoftStructureId: string,
): Promise<clsSoftStructureEN | null> {
  const strThisFuncName = 'GetObjBySoftStructureIdAsync';

  if (IsNullOrEmpty(strSoftStructureId) == true) {
    const strMsg = Format(
      '参数:[strSoftStructureId]不能为空!(In clsSoftStructureWApi.GetObjBySoftStructureIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSoftStructureId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strSoftStructureId]的长度:[{0}]不正确!(clsSoftStructureWApi.GetObjBySoftStructureIdAsync)',
      strSoftStructureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBySoftStructureId';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSoftStructureId,
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
      const objSoftStructure = SoftStructure_GetObjFromJsonObj(returnObj);
      return objSoftStructure;
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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
 * @param strSoftStructureId:所给的关键字
 * @returns 对象
 */
export async function SoftStructure_GetObjBySoftStructureIdCache(
  strSoftStructureId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBySoftStructureIdCache';

  if (IsNullOrEmpty(strSoftStructureId) == true) {
    const strMsg = Format(
      '参数:[strSoftStructureId]不能为空!(In clsSoftStructureWApi.GetObjBySoftStructureIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSoftStructureId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strSoftStructureId]的长度:[{0}]不正确!(clsSoftStructureWApi.GetObjBySoftStructureIdCache)',
      strSoftStructureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSoftStructureObjLstCache = await SoftStructure_GetObjLstCache();
  try {
    const arrSoftStructureSel = arrSoftStructureObjLstCache.filter(
      (x) => x.softStructureId == strSoftStructureId,
    );
    let objSoftStructure: clsSoftStructureEN;
    if (arrSoftStructureSel.length > 0) {
      objSoftStructure = arrSoftStructureSel[0];
      return objSoftStructure;
    } else {
      if (bolTryAsyncOnce == true) {
        const objSoftStructureConst = await SoftStructure_GetObjBySoftStructureIdAsync(
          strSoftStructureId,
        );
        if (objSoftStructureConst != null) {
          SoftStructure_ReFreshThisCache();
          return objSoftStructureConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSoftStructureId,
      softStructure_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strSoftStructureId:所给的关键字
 * @returns 对象
 */
export async function SoftStructure_GetObjBySoftStructureIdlocalStorage(
  strSoftStructureId: string,
) {
  const strThisFuncName = 'GetObjBySoftStructureIdlocalStorage';

  if (IsNullOrEmpty(strSoftStructureId) == true) {
    const strMsg = Format(
      '参数:[strSoftStructureId]不能为空!(In clsSoftStructureWApi.GetObjBySoftStructureIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSoftStructureId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strSoftStructureId]的长度:[{0}]不正确!(clsSoftStructureWApi.GetObjBySoftStructureIdlocalStorage)',
      strSoftStructureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsSoftStructureEN._CurrTabName, strSoftStructureId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objSoftStructureCache: clsSoftStructureEN = JSON.parse(strTempObj);
    return objSoftStructureCache;
  }
  try {
    const objSoftStructure = await SoftStructure_GetObjBySoftStructureIdAsync(strSoftStructureId);
    if (objSoftStructure != null) {
      localStorage.setItem(strKey, JSON.stringify(objSoftStructure));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objSoftStructure;
    }
    return objSoftStructure;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSoftStructureId,
      softStructure_ConstructorName,
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
 * @param objSoftStructure:所给的对象
 * @returns 对象
 */
export async function SoftStructure_UpdateObjInLstCache(objSoftStructure: clsSoftStructureEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrSoftStructureObjLstCache = await SoftStructure_GetObjLstCache();
    const obj = arrSoftStructureObjLstCache.find(
      (x) => x.softStructureId == objSoftStructure.softStructureId,
    );
    if (obj != null) {
      objSoftStructure.softStructureId = obj.softStructureId;
      ObjectAssign(obj, objSoftStructure);
    } else {
      arrSoftStructureObjLstCache.push(objSoftStructure);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      softStructure_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strSoftStructureId:所给的关键字
 * @returns 对象
 */
export async function SoftStructure_GetNameBySoftStructureIdCache(strSoftStructureId: string) {
  if (IsNullOrEmpty(strSoftStructureId) == true) {
    const strMsg = Format(
      '参数:[strSoftStructureId]不能为空!(In clsSoftStructureWApi.GetNameBySoftStructureIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSoftStructureId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strSoftStructureId]的长度:[{0}]不正确!(clsSoftStructureWApi.GetNameBySoftStructureIdCache)',
      strSoftStructureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSoftStructureObjLstCache = await SoftStructure_GetObjLstCache();
  if (arrSoftStructureObjLstCache == null) return '';
  try {
    const arrSoftStructureSel = arrSoftStructureObjLstCache.filter(
      (x) => x.softStructureId == strSoftStructureId,
    );
    let objSoftStructure: clsSoftStructureEN;
    if (arrSoftStructureSel.length > 0) {
      objSoftStructure = arrSoftStructureSel[0];
      return objSoftStructure.softStructureName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strSoftStructureId,
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
export async function SoftStructure_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsSoftStructureEN.con_SoftStructureId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsSoftStructureEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsSoftStructureEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strSoftStructureId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objSoftStructure = await SoftStructure_GetObjBySoftStructureIdCache(strSoftStructureId);
  if (objSoftStructure == null) return '';
  if (objSoftStructure.GetFldValue(strOutFldName) == null) return '';
  return objSoftStructure.GetFldValue(strOutFldName).toString();
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
export function SoftStructure_SortFunDefa(a: clsSoftStructureEN, b: clsSoftStructureEN): number {
  return a.softStructureId.localeCompare(b.softStructureId);
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
export function SoftStructure_SortFunDefa2Fld(
  a: clsSoftStructureEN,
  b: clsSoftStructureEN,
): number {
  if (a.softStructureName == b.softStructureName)
    return a.softStructureDesc.localeCompare(b.softStructureDesc);
  else return a.softStructureName.localeCompare(b.softStructureName);
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
export function SoftStructure_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSoftStructureEN.con_SoftStructureId:
        return (a: clsSoftStructureEN, b: clsSoftStructureEN) => {
          return a.softStructureId.localeCompare(b.softStructureId);
        };
      case clsSoftStructureEN.con_SoftStructureName:
        return (a: clsSoftStructureEN, b: clsSoftStructureEN) => {
          return a.softStructureName.localeCompare(b.softStructureName);
        };
      case clsSoftStructureEN.con_SoftStructureDesc:
        return (a: clsSoftStructureEN, b: clsSoftStructureEN) => {
          if (a.softStructureDesc == null) return -1;
          if (b.softStructureDesc == null) return 1;
          return a.softStructureDesc.localeCompare(b.softStructureDesc);
        };
      case clsSoftStructureEN.con_Memo:
        return (a: clsSoftStructureEN, b: clsSoftStructureEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SoftStructure]中不存在!(in ${softStructure_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSoftStructureEN.con_SoftStructureId:
        return (a: clsSoftStructureEN, b: clsSoftStructureEN) => {
          return b.softStructureId.localeCompare(a.softStructureId);
        };
      case clsSoftStructureEN.con_SoftStructureName:
        return (a: clsSoftStructureEN, b: clsSoftStructureEN) => {
          return b.softStructureName.localeCompare(a.softStructureName);
        };
      case clsSoftStructureEN.con_SoftStructureDesc:
        return (a: clsSoftStructureEN, b: clsSoftStructureEN) => {
          if (b.softStructureDesc == null) return -1;
          if (a.softStructureDesc == null) return 1;
          return b.softStructureDesc.localeCompare(a.softStructureDesc);
        };
      case clsSoftStructureEN.con_Memo:
        return (a: clsSoftStructureEN, b: clsSoftStructureEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SoftStructure]中不存在!(in ${softStructure_ConstructorName}.${strThisFuncName})`;
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
export async function SoftStructure_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSoftStructureEN.con_SoftStructureId:
      return (obj: clsSoftStructureEN) => {
        return obj.softStructureId === value;
      };
    case clsSoftStructureEN.con_SoftStructureName:
      return (obj: clsSoftStructureEN) => {
        return obj.softStructureName === value;
      };
    case clsSoftStructureEN.con_SoftStructureDesc:
      return (obj: clsSoftStructureEN) => {
        return obj.softStructureDesc === value;
      };
    case clsSoftStructureEN.con_Memo:
      return (obj: clsSoftStructureEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SoftStructure]中不存在!(in ${softStructure_ConstructorName}.${strThisFuncName})`;
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
export async function SoftStructure_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsSoftStructureEN.con_SoftStructureId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrSoftStructure = await SoftStructure_GetObjLstCache();
  if (arrSoftStructure == null) return [];
  let arrSoftStructureSel = arrSoftStructure;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrSoftStructureSel = arrSoftStructureSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrSoftStructureSel = arrSoftStructureSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrSoftStructureSel = arrSoftStructureSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrSoftStructureSel = arrSoftStructureSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrSoftStructureSel = arrSoftStructureSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrSoftStructureSel = arrSoftStructureSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrSoftStructureSel = arrSoftStructureSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrSoftStructureSel = arrSoftStructureSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrSoftStructureSel = arrSoftStructureSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrSoftStructureSel = arrSoftStructureSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrSoftStructureSel.length == 0) return [];
  return arrSoftStructureSel.map((x) => x.softStructureId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SoftStructure_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
export async function SoftStructure_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
export async function SoftStructure_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSoftStructureEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

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
      const objSoftStructure = SoftStructure_GetObjFromJsonObj(returnObj);
      return objSoftStructure;
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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
export async function SoftStructure_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSoftStructureEN._CurrTabName;
  if (IsNullOrEmpty(clsSoftStructureEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSoftStructureEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrSoftStructureExObjLstCache: Array<clsSoftStructureEN> = CacheHelper.Get(strKey);
    const arrSoftStructureObjLstT = SoftStructure_GetObjLstByJSONObjLst(
      arrSoftStructureExObjLstCache,
    );
    return arrSoftStructureObjLstT;
  }
  try {
    const arrSoftStructureExObjLst = await SoftStructure_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrSoftStructureExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSoftStructureExObjLst.length,
    );
    console.log(strInfo);
    return arrSoftStructureExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      softStructure_ConstructorName,
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
export async function SoftStructure_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSoftStructureEN._CurrTabName;
  if (IsNullOrEmpty(clsSoftStructureEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSoftStructureEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSoftStructureExObjLstCache: Array<clsSoftStructureEN> = JSON.parse(strTempObjLst);
    const arrSoftStructureObjLstT = SoftStructure_GetObjLstByJSONObjLst(
      arrSoftStructureExObjLstCache,
    );
    return arrSoftStructureObjLstT;
  }
  try {
    const arrSoftStructureExObjLst = await SoftStructure_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrSoftStructureExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSoftStructureExObjLst.length,
    );
    console.log(strInfo);
    return arrSoftStructureExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      softStructure_ConstructorName,
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
export async function SoftStructure_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSoftStructureEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSoftStructureObjLstCache: Array<clsSoftStructureEN> = JSON.parse(strTempObjLst);
    return arrSoftStructureObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function SoftStructure_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsSoftStructureEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

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
          softStructure_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SoftStructure_GetObjLstByJSONObjLst(returnObjLst);
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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
export async function SoftStructure_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSoftStructureEN._CurrTabName;
  if (IsNullOrEmpty(clsSoftStructureEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSoftStructureEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSoftStructureExObjLstCache: Array<clsSoftStructureEN> = JSON.parse(strTempObjLst);
    const arrSoftStructureObjLstT = SoftStructure_GetObjLstByJSONObjLst(
      arrSoftStructureExObjLstCache,
    );
    return arrSoftStructureObjLstT;
  }
  try {
    const arrSoftStructureExObjLst = await SoftStructure_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrSoftStructureExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSoftStructureExObjLst.length,
    );
    console.log(strInfo);
    return arrSoftStructureExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      softStructure_ConstructorName,
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
export async function SoftStructure_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSoftStructureEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSoftStructureObjLstCache: Array<clsSoftStructureEN> = JSON.parse(strTempObjLst);
    return arrSoftStructureObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SoftStructure_GetObjLstCache(): Promise<Array<clsSoftStructureEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrSoftStructureObjLstCache;
  switch (clsSoftStructureEN.CacheModeId) {
    case '04': //sessionStorage
      arrSoftStructureObjLstCache = await SoftStructure_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrSoftStructureObjLstCache = await SoftStructure_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrSoftStructureObjLstCache = await SoftStructure_GetObjLstClientCache();
      break;
    default:
      arrSoftStructureObjLstCache = await SoftStructure_GetObjLstClientCache();
      break;
  }
  return arrSoftStructureObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SoftStructure_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrSoftStructureObjLstCache;
  switch (clsSoftStructureEN.CacheModeId) {
    case '04': //sessionStorage
      arrSoftStructureObjLstCache = await SoftStructure_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrSoftStructureObjLstCache = await SoftStructure_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrSoftStructureObjLstCache = null;
      break;
    default:
      arrSoftStructureObjLstCache = null;
      break;
  }
  return arrSoftStructureObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrSoftStructureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SoftStructure_GetSubObjLstCache(objSoftStructureCond: clsSoftStructureEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrSoftStructureObjLstCache = await SoftStructure_GetObjLstCache();
  let arrSoftStructureSel = arrSoftStructureObjLstCache;
  if (
    objSoftStructureCond.sfFldComparisonOp == null ||
    objSoftStructureCond.sfFldComparisonOp == ''
  )
    return arrSoftStructureSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSoftStructureCond.sfFldComparisonOp,
  );
  //console.log("clsSoftStructureWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSoftStructureCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSoftStructureSel = arrSoftStructureSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSoftStructureCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSoftStructureSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSoftStructureCond),
      softStructure_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSoftStructureEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSoftStructureId:关键字列表
 * @returns 对象列表
 **/
export async function SoftStructure_GetObjLstBySoftStructureIdLstAsync(
  arrSoftStructureId: Array<string>,
): Promise<Array<clsSoftStructureEN>> {
  const strThisFuncName = 'GetObjLstBySoftStructureIdLstAsync';
  const strAction = 'GetObjLstBySoftStructureIdLst';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSoftStructureId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          softStructure_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SoftStructure_GetObjLstByJSONObjLst(returnObjLst);
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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
 * @param arrstrSoftStructureIdLst:关键字列表
 * @returns 对象列表
 */
export async function SoftStructure_GetObjLstBySoftStructureIdLstCache(
  arrSoftStructureIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstBySoftStructureIdLstCache';
  try {
    const arrSoftStructureObjLstCache = await SoftStructure_GetObjLstCache();
    const arrSoftStructureSel = arrSoftStructureObjLstCache.filter(
      (x) => arrSoftStructureIdLst.indexOf(x.softStructureId) > -1,
    );
    return arrSoftStructureSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrSoftStructureIdLst.join(','),
      softStructure_ConstructorName,
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
export async function SoftStructure_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSoftStructureEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

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
          softStructure_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SoftStructure_GetObjLstByJSONObjLst(returnObjLst);
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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
export async function SoftStructure_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSoftStructureEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

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
          softStructure_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SoftStructure_GetObjLstByJSONObjLst(returnObjLst);
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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
export async function SoftStructure_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsSoftStructureEN>();
  const arrSoftStructureObjLstCache = await SoftStructure_GetObjLstCache();
  if (arrSoftStructureObjLstCache.length == 0) return arrSoftStructureObjLstCache;
  let arrSoftStructureSel = arrSoftStructureObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objSoftStructureCond = new clsSoftStructureEN();
  ObjectAssign(objSoftStructureCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsSoftStructureWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSoftStructureSel = arrSoftStructureSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSoftStructureCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSoftStructureSel.length == 0) return arrSoftStructureSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSoftStructureSel = arrSoftStructureSel.sort(
        SoftStructure_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrSoftStructureSel = arrSoftStructureSel.sort(objPagerPara.sortFun);
    }
    arrSoftStructureSel = arrSoftStructureSel.slice(intStart, intEnd);
    return arrSoftStructureSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      softStructure_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSoftStructureEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SoftStructure_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSoftStructureEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSoftStructureEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

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
          softStructure_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SoftStructure_GetObjLstByJSONObjLst(returnObjLst);
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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
 * @param strSoftStructureId:关键字
 * @returns 获取删除的结果
 **/
export async function SoftStructure_DelRecordAsync(strSoftStructureId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(softStructure_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strSoftStructureId);

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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
 * @param arrSoftStructureId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SoftStructure_DelSoftStructuresAsync(
  arrSoftStructureId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelSoftStructuresAsync';
  const strAction = 'DelSoftStructures';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSoftStructureId, config);
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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
export async function SoftStructure_DelSoftStructuresByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelSoftStructuresByCondAsync';
  const strAction = 'DelSoftStructuresByCond';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
 * @param objSoftStructureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SoftStructure_AddNewRecordAsync(
  objSoftStructureEN: clsSoftStructureEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objSoftStructureEN.softStructureId === null || objSoftStructureEN.softStructureId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objSoftStructureEN);
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSoftStructureEN, config);
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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
 * @param objSoftStructureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SoftStructure_AddNewRecordWithMaxIdAsync(
  objSoftStructureEN: clsSoftStructureEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSoftStructureEN, config);
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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
 * @param objSoftStructureEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SoftStructure_AddNewRecordWithReturnKeyAsync(
  objSoftStructureEN: clsSoftStructureEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSoftStructureEN, config);
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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
 * @param objSoftStructureEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SoftStructure_UpdateRecordAsync(
  objSoftStructureEN: clsSoftStructureEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSoftStructureEN.sfUpdFldSetStr === undefined ||
    objSoftStructureEN.sfUpdFldSetStr === null ||
    objSoftStructureEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSoftStructureEN.softStructureId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSoftStructureEN, config);
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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
 * @param objSoftStructureEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SoftStructure_UpdateWithConditionAsync(
  objSoftStructureEN: clsSoftStructureEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSoftStructureEN.sfUpdFldSetStr === undefined ||
    objSoftStructureEN.sfUpdFldSetStr === null ||
    objSoftStructureEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSoftStructureEN.softStructureId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);
  objSoftStructureEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSoftStructureEN, config);
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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
 * @param objstrSoftStructureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SoftStructure_IsExistRecordCache(objSoftStructureCond: clsSoftStructureEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrSoftStructureObjLstCache = await SoftStructure_GetObjLstCache();
  if (arrSoftStructureObjLstCache == null) return false;
  let arrSoftStructureSel = arrSoftStructureObjLstCache;
  if (
    objSoftStructureCond.sfFldComparisonOp == null ||
    objSoftStructureCond.sfFldComparisonOp == ''
  )
    return arrSoftStructureSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSoftStructureCond.sfFldComparisonOp,
  );
  //console.log("clsSoftStructureWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSoftStructureCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSoftStructureCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSoftStructureSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objSoftStructureCond),
      softStructure_ConstructorName,
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
export async function SoftStructure_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
 * @param strSoftStructureId:所给的关键字
 * @returns 对象
 */
export async function SoftStructure_IsExistCache(strSoftStructureId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrSoftStructureObjLstCache = await SoftStructure_GetObjLstCache();
  if (arrSoftStructureObjLstCache == null) return false;
  try {
    const arrSoftStructureSel = arrSoftStructureObjLstCache.filter(
      (x) => x.softStructureId == strSoftStructureId,
    );
    if (arrSoftStructureSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strSoftStructureId,
      softStructure_ConstructorName,
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
 * @param strSoftStructureId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SoftStructure_IsExistAsync(strSoftStructureId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSoftStructureId,
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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
export async function SoftStructure_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
 * @param objSoftStructureCond:条件对象
 * @returns 对象列表记录数
 */
export async function SoftStructure_GetRecCountByCondCache(
  objSoftStructureCond: clsSoftStructureEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrSoftStructureObjLstCache = await SoftStructure_GetObjLstCache();
  if (arrSoftStructureObjLstCache == null) return 0;
  let arrSoftStructureSel = arrSoftStructureObjLstCache;
  if (
    objSoftStructureCond.sfFldComparisonOp == null ||
    objSoftStructureCond.sfFldComparisonOp == ''
  )
    return arrSoftStructureSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSoftStructureCond.sfFldComparisonOp,
  );
  //console.log("clsSoftStructureWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSoftStructureCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSoftStructureSel = arrSoftStructureSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSoftStructureCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSoftStructureSel = arrSoftStructureSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSoftStructureSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSoftStructureCond),
      softStructure_ConstructorName,
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
export async function SoftStructure_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(softStructure_Controller, strAction);

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
        softStructure_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        softStructure_ConstructorName,
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
export function SoftStructure_GetWebApiUrl(strController: string, strAction: string): string {
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
export function SoftStructure_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsSoftStructureEN._CurrTabName;
  switch (clsSoftStructureEN.CacheModeId) {
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
export function SoftStructure_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsSoftStructureEN._CurrTabName;
    switch (clsSoftStructureEN.CacheModeId) {
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
export async function SoftStructure_BindDdl_SoftStructureIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_SoftStructureIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_SoftStructureIdInDivCache");
  const arrObjLstSel = await SoftStructure_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsSoftStructureEN.con_SoftStructureId,
    clsSoftStructureEN.con_SoftStructureName,
    '软件架构',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SoftStructure_CheckPropertyNew(pobjSoftStructureEN: clsSoftStructureEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjSoftStructureEN.softStructureName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[架构名称]不能为空(In 软件架构)!(clsSoftStructureBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSoftStructureEN.softStructureId) == false &&
    GetStrLen(pobjSoftStructureEN.softStructureId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[架构ID(softStructureId)]的长度不能超过4(In 软件架构(SoftStructure))!值:$(pobjSoftStructureEN.softStructureId)(clsSoftStructureBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSoftStructureEN.softStructureName) == false &&
    GetStrLen(pobjSoftStructureEN.softStructureName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[架构名称(softStructureName)]的长度不能超过50(In 软件架构(SoftStructure))!值:$(pobjSoftStructureEN.softStructureName)(clsSoftStructureBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSoftStructureEN.softStructureDesc) == false &&
    GetStrLen(pobjSoftStructureEN.softStructureDesc) > 2000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[架构描述(softStructureDesc)]的长度不能超过2000(In 软件架构(SoftStructure))!值:$(pobjSoftStructureEN.softStructureDesc)(clsSoftStructureBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSoftStructureEN.memo) == false &&
    GetStrLen(pobjSoftStructureEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 软件架构(SoftStructure))!值:$(pobjSoftStructureEN.memo)(clsSoftStructureBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSoftStructureEN.softStructureId) == false &&
    undefined !== pobjSoftStructureEN.softStructureId &&
    tzDataType.isString(pobjSoftStructureEN.softStructureId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[架构ID(softStructureId)]的值:[$(pobjSoftStructureEN.softStructureId)], 非法,应该为字符型(In 软件架构(SoftStructure))!(clsSoftStructureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSoftStructureEN.softStructureName) == false &&
    undefined !== pobjSoftStructureEN.softStructureName &&
    tzDataType.isString(pobjSoftStructureEN.softStructureName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[架构名称(softStructureName)]的值:[$(pobjSoftStructureEN.softStructureName)], 非法,应该为字符型(In 软件架构(SoftStructure))!(clsSoftStructureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSoftStructureEN.softStructureDesc) == false &&
    undefined !== pobjSoftStructureEN.softStructureDesc &&
    tzDataType.isString(pobjSoftStructureEN.softStructureDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[架构描述(softStructureDesc)]的值:[$(pobjSoftStructureEN.softStructureDesc)], 非法,应该为字符型(In 软件架构(SoftStructure))!(clsSoftStructureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSoftStructureEN.memo) == false &&
    undefined !== pobjSoftStructureEN.memo &&
    tzDataType.isString(pobjSoftStructureEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjSoftStructureEN.memo)], 非法,应该为字符型(In 软件架构(SoftStructure))!(clsSoftStructureBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SoftStructure_CheckProperty4Update(pobjSoftStructureEN: clsSoftStructureEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSoftStructureEN.softStructureId) == false &&
    GetStrLen(pobjSoftStructureEN.softStructureId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[架构ID(softStructureId)]的长度不能超过4(In 软件架构(SoftStructure))!值:$(pobjSoftStructureEN.softStructureId)(clsSoftStructureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSoftStructureEN.softStructureName) == false &&
    GetStrLen(pobjSoftStructureEN.softStructureName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[架构名称(softStructureName)]的长度不能超过50(In 软件架构(SoftStructure))!值:$(pobjSoftStructureEN.softStructureName)(clsSoftStructureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSoftStructureEN.softStructureDesc) == false &&
    GetStrLen(pobjSoftStructureEN.softStructureDesc) > 2000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[架构描述(softStructureDesc)]的长度不能超过2000(In 软件架构(SoftStructure))!值:$(pobjSoftStructureEN.softStructureDesc)(clsSoftStructureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSoftStructureEN.memo) == false &&
    GetStrLen(pobjSoftStructureEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 软件架构(SoftStructure))!值:$(pobjSoftStructureEN.memo)(clsSoftStructureBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSoftStructureEN.softStructureId) == false &&
    undefined !== pobjSoftStructureEN.softStructureId &&
    tzDataType.isString(pobjSoftStructureEN.softStructureId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[架构ID(softStructureId)]的值:[$(pobjSoftStructureEN.softStructureId)], 非法,应该为字符型(In 软件架构(SoftStructure))!(clsSoftStructureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSoftStructureEN.softStructureName) == false &&
    undefined !== pobjSoftStructureEN.softStructureName &&
    tzDataType.isString(pobjSoftStructureEN.softStructureName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[架构名称(softStructureName)]的值:[$(pobjSoftStructureEN.softStructureName)], 非法,应该为字符型(In 软件架构(SoftStructure))!(clsSoftStructureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSoftStructureEN.softStructureDesc) == false &&
    undefined !== pobjSoftStructureEN.softStructureDesc &&
    tzDataType.isString(pobjSoftStructureEN.softStructureDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[架构描述(softStructureDesc)]的值:[$(pobjSoftStructureEN.softStructureDesc)], 非法,应该为字符型(In 软件架构(SoftStructure))!(clsSoftStructureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSoftStructureEN.memo) == false &&
    undefined !== pobjSoftStructureEN.memo &&
    tzDataType.isString(pobjSoftStructureEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjSoftStructureEN.memo)], 非法,应该为字符型(In 软件架构(SoftStructure))!(clsSoftStructureBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjSoftStructureEN.softStructureId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[架构ID]不能为空(In 软件架构)!(clsSoftStructureBL:CheckProperty4Update)',
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
export function SoftStructure_GetJSONStrByObj(pobjSoftStructureEN: clsSoftStructureEN): string {
  pobjSoftStructureEN.sfUpdFldSetStr = pobjSoftStructureEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSoftStructureEN);
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
export function SoftStructure_GetObjLstByJSONStr(strJSON: string): Array<clsSoftStructureEN> {
  let arrSoftStructureObjLst = new Array<clsSoftStructureEN>();
  if (strJSON === '') {
    return arrSoftStructureObjLst;
  }
  try {
    arrSoftStructureObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSoftStructureObjLst;
  }
  return arrSoftStructureObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSoftStructureObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SoftStructure_GetObjLstByJSONObjLst(
  arrSoftStructureObjLstS: Array<clsSoftStructureEN>,
): Array<clsSoftStructureEN> {
  const arrSoftStructureObjLst = new Array<clsSoftStructureEN>();
  for (const objInFor of arrSoftStructureObjLstS) {
    const obj1 = SoftStructure_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSoftStructureObjLst.push(obj1);
  }
  return arrSoftStructureObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SoftStructure_GetObjByJSONStr(strJSON: string): clsSoftStructureEN {
  let pobjSoftStructureEN = new clsSoftStructureEN();
  if (strJSON === '') {
    return pobjSoftStructureEN;
  }
  try {
    pobjSoftStructureEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSoftStructureEN;
  }
  return pobjSoftStructureEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SoftStructure_GetCombineCondition(
  objSoftStructureCond: clsSoftStructureEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSoftStructureCond.dicFldComparisonOp,
      clsSoftStructureEN.con_SoftStructureId,
    ) == true
  ) {
    const strComparisonOpSoftStructureId: string =
      objSoftStructureCond.dicFldComparisonOp[clsSoftStructureEN.con_SoftStructureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSoftStructureEN.con_SoftStructureId,
      objSoftStructureCond.softStructureId,
      strComparisonOpSoftStructureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSoftStructureCond.dicFldComparisonOp,
      clsSoftStructureEN.con_SoftStructureName,
    ) == true
  ) {
    const strComparisonOpSoftStructureName: string =
      objSoftStructureCond.dicFldComparisonOp[clsSoftStructureEN.con_SoftStructureName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSoftStructureEN.con_SoftStructureName,
      objSoftStructureCond.softStructureName,
      strComparisonOpSoftStructureName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSoftStructureCond.dicFldComparisonOp,
      clsSoftStructureEN.con_SoftStructureDesc,
    ) == true
  ) {
    const strComparisonOpSoftStructureDesc: string =
      objSoftStructureCond.dicFldComparisonOp[clsSoftStructureEN.con_SoftStructureDesc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSoftStructureEN.con_SoftStructureDesc,
      objSoftStructureCond.softStructureDesc,
      strComparisonOpSoftStructureDesc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSoftStructureCond.dicFldComparisonOp,
      clsSoftStructureEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objSoftStructureCond.dicFldComparisonOp[clsSoftStructureEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSoftStructureEN.con_Memo,
      objSoftStructureCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSoftStructureENS:源对象
 * @param objSoftStructureENT:目标对象
 */
export function SoftStructure_GetObjFromJsonObj(
  objSoftStructureENS: clsSoftStructureEN,
): clsSoftStructureEN {
  const objSoftStructureENT: clsSoftStructureEN = new clsSoftStructureEN();
  ObjectAssign(objSoftStructureENT, objSoftStructureENS);
  return objSoftStructureENT;
}
