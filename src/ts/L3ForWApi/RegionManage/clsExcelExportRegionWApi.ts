/**
 * 类名:clsExcelExportRegionWApi
 * 表名:ExcelExportRegion(00050148)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:13
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * Excel导出区域(ExcelExportRegion)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
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
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsExcelExportRegionEN } from '@/ts/L0Entity/RegionManage/clsExcelExportRegionEN';

import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const excelExportRegion_Controller = 'ExcelExportRegionApi';
export const excelExportRegion_ConstructorName = 'excelExportRegion';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRegionId:关键字
 * @returns 对象
 **/
export async function ExcelExportRegion_GetObjByRegionIdAsync(
  strRegionId: string,
): Promise<clsExcelExportRegionEN | null> {
  const strThisFuncName = 'GetObjByRegionIdAsync';

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsExcelExportRegionWApi.GetObjByRegionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsExcelExportRegionWApi.GetObjByRegionIdAsync)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByRegionId';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

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
      const objExcelExportRegion = ExcelExportRegion_GetObjFromJsonObj(returnObj);
      return objExcelExportRegion;
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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
 * @param strRegionId:所给的关键字
 * @returns 对象
 */
export async function ExcelExportRegion_GetObjByRegionIdCache(
  strRegionId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByRegionIdCache';

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsExcelExportRegionWApi.GetObjByRegionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsExcelExportRegionWApi.GetObjByRegionIdCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrExcelExportRegionObjLstCache = await ExcelExportRegion_GetObjLstCache(strPrjId);
  try {
    const arrExcelExportRegionSel = arrExcelExportRegionObjLstCache.filter(
      (x) => x.regionId == strRegionId,
    );
    let objExcelExportRegion: clsExcelExportRegionEN;
    if (arrExcelExportRegionSel.length > 0) {
      objExcelExportRegion = arrExcelExportRegionSel[0];
      return objExcelExportRegion;
    } else {
      if (bolTryAsyncOnce == true) {
        const objExcelExportRegionConst = await ExcelExportRegion_GetObjByRegionIdAsync(
          strRegionId,
        );
        if (objExcelExportRegionConst != null) {
          ExcelExportRegion_ReFreshThisCache(strPrjId);
          return objExcelExportRegionConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRegionId,
      excelExportRegion_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strRegionId:所给的关键字
 * @returns 对象
 */
export async function ExcelExportRegion_GetObjByRegionIdlocalStorage(strRegionId: string) {
  const strThisFuncName = 'GetObjByRegionIdlocalStorage';

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsExcelExportRegionWApi.GetObjByRegionIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsExcelExportRegionWApi.GetObjByRegionIdlocalStorage)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsExcelExportRegionEN._CurrTabName, strRegionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objExcelExportRegionCache: clsExcelExportRegionEN = JSON.parse(strTempObj);
    return objExcelExportRegionCache;
  }
  try {
    const objExcelExportRegion = await ExcelExportRegion_GetObjByRegionIdAsync(strRegionId);
    if (objExcelExportRegion != null) {
      localStorage.setItem(strKey, JSON.stringify(objExcelExportRegion));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objExcelExportRegion;
    }
    return objExcelExportRegion;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRegionId,
      excelExportRegion_ConstructorName,
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
 * @param objExcelExportRegion:所给的对象
 * @returns 对象
 */
export async function ExcelExportRegion_UpdateObjInLstCache(
  objExcelExportRegion: clsExcelExportRegionEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrExcelExportRegionObjLstCache = await ExcelExportRegion_GetObjLstCache(strPrjId);
    const obj = arrExcelExportRegionObjLstCache.find(
      (x) => x.prjId == objExcelExportRegion.prjId && x.regionId == objExcelExportRegion.regionId,
    );
    if (obj != null) {
      objExcelExportRegion.regionId = obj.regionId;
      ObjectAssign(obj, objExcelExportRegion);
    } else {
      arrExcelExportRegionObjLstCache.push(objExcelExportRegion);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      excelExportRegion_ConstructorName,
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function ExcelExportRegion_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsExcelExportRegionWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsExcelExportRegionWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsExcelExportRegionEN.con_RegionId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsExcelExportRegionEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsExcelExportRegionEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strRegionId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objExcelExportRegion = await ExcelExportRegion_GetObjByRegionIdCache(
    strRegionId,
    strPrjIdClassfy,
  );
  if (objExcelExportRegion == null) return '';
  if (objExcelExportRegion.GetFldValue(strOutFldName) == null) return '';
  return objExcelExportRegion.GetFldValue(strOutFldName).toString();
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
export function ExcelExportRegion_SortFunDefa(
  a: clsExcelExportRegionEN,
  b: clsExcelExportRegionEN,
): number {
  return a.regionId.localeCompare(b.regionId);
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
export function ExcelExportRegion_SortFunDefa2Fld(
  a: clsExcelExportRegionEN,
  b: clsExcelExportRegionEN,
): number {
  if (a.prjId == b.prjId) return a.updDate.localeCompare(b.updDate);
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
export function ExcelExportRegion_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsExcelExportRegionEN.con_RegionId:
        return (a: clsExcelExportRegionEN, b: clsExcelExportRegionEN) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsExcelExportRegionEN.con_PrjId:
        return (a: clsExcelExportRegionEN, b: clsExcelExportRegionEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsExcelExportRegionEN.con_UpdDate:
        return (a: clsExcelExportRegionEN, b: clsExcelExportRegionEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsExcelExportRegionEN.con_UpdUser:
        return (a: clsExcelExportRegionEN, b: clsExcelExportRegionEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsExcelExportRegionEN.con_Memo:
        return (a: clsExcelExportRegionEN, b: clsExcelExportRegionEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ExcelExportRegion]中不存在!(in ${excelExportRegion_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsExcelExportRegionEN.con_RegionId:
        return (a: clsExcelExportRegionEN, b: clsExcelExportRegionEN) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsExcelExportRegionEN.con_PrjId:
        return (a: clsExcelExportRegionEN, b: clsExcelExportRegionEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsExcelExportRegionEN.con_UpdDate:
        return (a: clsExcelExportRegionEN, b: clsExcelExportRegionEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsExcelExportRegionEN.con_UpdUser:
        return (a: clsExcelExportRegionEN, b: clsExcelExportRegionEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsExcelExportRegionEN.con_Memo:
        return (a: clsExcelExportRegionEN, b: clsExcelExportRegionEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ExcelExportRegion]中不存在!(in ${excelExportRegion_ConstructorName}.${strThisFuncName})`;
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
export async function ExcelExportRegion_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsExcelExportRegionEN.con_RegionId:
      return (obj: clsExcelExportRegionEN) => {
        return obj.regionId === value;
      };
    case clsExcelExportRegionEN.con_PrjId:
      return (obj: clsExcelExportRegionEN) => {
        return obj.prjId === value;
      };
    case clsExcelExportRegionEN.con_UpdDate:
      return (obj: clsExcelExportRegionEN) => {
        return obj.updDate === value;
      };
    case clsExcelExportRegionEN.con_UpdUser:
      return (obj: clsExcelExportRegionEN) => {
        return obj.updUser === value;
      };
    case clsExcelExportRegionEN.con_Memo:
      return (obj: clsExcelExportRegionEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ExcelExportRegion]中不存在!(in ${excelExportRegion_ConstructorName}.${strThisFuncName})`;
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
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function ExcelExportRegion_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsExcelExportRegionWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsExcelExportRegionWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsExcelExportRegionEN.con_RegionId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrExcelExportRegion = await ExcelExportRegion_GetObjLstCache(strPrjIdClassfy);
  if (arrExcelExportRegion == null) return [];
  let arrExcelExportRegionSel = arrExcelExportRegion;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrExcelExportRegionSel.length == 0) return [];
  return arrExcelExportRegionSel.map((x) => x.regionId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ExcelExportRegion_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsExcelExportRegionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

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
      const objExcelExportRegion = ExcelExportRegion_GetObjFromJsonObj(returnObj);
      return objExcelExportRegion;
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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsExcelExportRegionEN.WhereFormat) == false) {
    strWhereCond = Format(clsExcelExportRegionEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsExcelExportRegionEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsExcelExportRegionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsExcelExportRegionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrExcelExportRegionExObjLstCache: Array<clsExcelExportRegionEN> =
      CacheHelper.Get(strKey);
    const arrExcelExportRegionObjLstT = ExcelExportRegion_GetObjLstByJSONObjLst(
      arrExcelExportRegionExObjLstCache,
    );
    return arrExcelExportRegionObjLstT;
  }
  try {
    const arrExcelExportRegionExObjLst = await ExcelExportRegion_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrExcelExportRegionExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrExcelExportRegionExObjLst.length,
    );
    console.log(strInfo);
    return arrExcelExportRegionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsExcelExportRegionEN.WhereFormat) == false) {
    strWhereCond = Format(clsExcelExportRegionEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsExcelExportRegionEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsExcelExportRegionEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsExcelExportRegionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsExcelExportRegionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrExcelExportRegionExObjLstCache: Array<clsExcelExportRegionEN> =
      JSON.parse(strTempObjLst);
    const arrExcelExportRegionObjLstT = ExcelExportRegion_GetObjLstByJSONObjLst(
      arrExcelExportRegionExObjLstCache,
    );
    return arrExcelExportRegionObjLstT;
  }
  try {
    const arrExcelExportRegionExObjLst = await ExcelExportRegion_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrExcelExportRegionExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrExcelExportRegionExObjLst.length,
    );
    console.log(strInfo);
    return arrExcelExportRegionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsExcelExportRegionEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrExcelExportRegionObjLstCache: Array<clsExcelExportRegionEN> =
      JSON.parse(strTempObjLst);
    return arrExcelExportRegionObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ExcelExportRegion_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsExcelExportRegionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

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
          excelExportRegion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ExcelExportRegion_GetObjLstByJSONObjLst(returnObjLst);
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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsExcelExportRegionEN.WhereFormat) == false) {
    strWhereCond = Format(clsExcelExportRegionEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsExcelExportRegionEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsExcelExportRegionEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsExcelExportRegionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsExcelExportRegionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrExcelExportRegionExObjLstCache: Array<clsExcelExportRegionEN> =
      JSON.parse(strTempObjLst);
    const arrExcelExportRegionObjLstT = ExcelExportRegion_GetObjLstByJSONObjLst(
      arrExcelExportRegionExObjLstCache,
    );
    return arrExcelExportRegionObjLstT;
  }
  try {
    const arrExcelExportRegionExObjLst = await ExcelExportRegion_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrExcelExportRegionExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrExcelExportRegionExObjLst.length,
    );
    console.log(strInfo);
    return arrExcelExportRegionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsExcelExportRegionEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrExcelExportRegionObjLstCache: Array<clsExcelExportRegionEN> =
      JSON.parse(strTempObjLst);
    return arrExcelExportRegionObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ExcelExportRegion_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsExcelExportRegionEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsExcelExportRegionWApi.ExcelExportRegion_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsExcelExportRegionWApi.ExcelExportRegion_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrExcelExportRegionObjLstCache;
  switch (clsExcelExportRegionEN.CacheModeId) {
    case '04': //sessionStorage
      arrExcelExportRegionObjLstCache = await ExcelExportRegion_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrExcelExportRegionObjLstCache = await ExcelExportRegion_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrExcelExportRegionObjLstCache = await ExcelExportRegion_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrExcelExportRegionObjLstCache = await ExcelExportRegion_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrExcelExportRegionObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ExcelExportRegion_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrExcelExportRegionObjLstCache;
  switch (clsExcelExportRegionEN.CacheModeId) {
    case '04': //sessionStorage
      arrExcelExportRegionObjLstCache = await ExcelExportRegion_GetObjLstsessionStoragePureCache(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrExcelExportRegionObjLstCache = await ExcelExportRegion_GetObjLstlocalStoragePureCache(
        strPrjId,
      );
      break;
    case '02': //ClientCache
      arrExcelExportRegionObjLstCache = null;
      break;
    default:
      arrExcelExportRegionObjLstCache = null;
      break;
  }
  return arrExcelExportRegionObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrRegionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ExcelExportRegion_GetSubObjLstCache(
  objExcelExportRegionCond: clsExcelExportRegionEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrExcelExportRegionObjLstCache = await ExcelExportRegion_GetObjLstCache(strPrjId);
  let arrExcelExportRegionSel = arrExcelExportRegionObjLstCache;
  if (
    objExcelExportRegionCond.sfFldComparisonOp == null ||
    objExcelExportRegionCond.sfFldComparisonOp == ''
  )
    return arrExcelExportRegionSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objExcelExportRegionCond.sfFldComparisonOp,
  );
  //console.log("clsExcelExportRegionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objExcelExportRegionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objExcelExportRegionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrExcelExportRegionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objExcelExportRegionCond),
      excelExportRegion_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsExcelExportRegionEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrRegionId:关键字列表
 * @returns 对象列表
 **/
export async function ExcelExportRegion_GetObjLstByRegionIdLstAsync(
  arrRegionId: Array<string>,
): Promise<Array<clsExcelExportRegionEN>> {
  const strThisFuncName = 'GetObjLstByRegionIdLstAsync';
  const strAction = 'GetObjLstByRegionIdLst';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

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
          excelExportRegion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ExcelExportRegion_GetObjLstByJSONObjLst(returnObjLst);
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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_GetObjLstByRegionIdLstCache(
  arrRegionIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByRegionIdLstCache';
  try {
    const arrExcelExportRegionObjLstCache = await ExcelExportRegion_GetObjLstCache(strPrjId);
    const arrExcelExportRegionSel = arrExcelExportRegionObjLstCache.filter(
      (x) => arrRegionIdLst.indexOf(x.regionId) > -1,
    );
    return arrExcelExportRegionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrRegionIdLst.join(','),
      excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsExcelExportRegionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

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
          excelExportRegion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ExcelExportRegion_GetObjLstByJSONObjLst(returnObjLst);
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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsExcelExportRegionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

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
          excelExportRegion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ExcelExportRegion_GetObjLstByJSONObjLst(returnObjLst);
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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsExcelExportRegionEN>();
  const arrExcelExportRegionObjLstCache = await ExcelExportRegion_GetObjLstCache(strPrjId);
  if (arrExcelExportRegionObjLstCache.length == 0) return arrExcelExportRegionObjLstCache;
  let arrExcelExportRegionSel = arrExcelExportRegionObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objExcelExportRegionCond = new clsExcelExportRegionEN();
  ObjectAssign(objExcelExportRegionCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsExcelExportRegionWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objExcelExportRegionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrExcelExportRegionSel.length == 0) return arrExcelExportRegionSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrExcelExportRegionSel = arrExcelExportRegionSel.sort(
        ExcelExportRegion_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrExcelExportRegionSel = arrExcelExportRegionSel.sort(objPagerPara.sortFun);
    }
    arrExcelExportRegionSel = arrExcelExportRegionSel.slice(intStart, intEnd);
    return arrExcelExportRegionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      excelExportRegion_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsExcelExportRegionEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ExcelExportRegion_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsExcelExportRegionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsExcelExportRegionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

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
          excelExportRegion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ExcelExportRegion_GetObjLstByJSONObjLst(returnObjLst);
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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
 * @param strRegionId:关键字
 * @returns 获取删除的结果
 **/
export async function ExcelExportRegion_DelRecordAsync(strRegionId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strRegionId);

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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
 * @param arrRegionId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ExcelExportRegion_DelExcelExportRegionsAsync(
  arrRegionId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelExcelExportRegionsAsync';
  const strAction = 'DelExcelExportRegions';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_DelExcelExportRegionsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelExcelExportRegionsByCondAsync';
  const strAction = 'DelExcelExportRegionsByCond';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
 * @param objExcelExportRegionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ExcelExportRegion_AddNewRecordAsync(
  objExcelExportRegionEN: clsExcelExportRegionEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objExcelExportRegionEN.regionId === null || objExcelExportRegionEN.regionId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objExcelExportRegionEN);
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objExcelExportRegionEN, config);
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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
 * @param objExcelExportRegionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ExcelExportRegion_AddNewRecordWithMaxIdAsync(
  objExcelExportRegionEN: clsExcelExportRegionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objExcelExportRegionEN, config);
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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
 * @param objExcelExportRegionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ExcelExportRegion_AddNewRecordWithReturnKeyAsync(
  objExcelExportRegionEN: clsExcelExportRegionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objExcelExportRegionEN, config);
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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
 * @param objExcelExportRegionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ExcelExportRegion_UpdateRecordAsync(
  objExcelExportRegionEN: clsExcelExportRegionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objExcelExportRegionEN.sfUpdFldSetStr === undefined ||
    objExcelExportRegionEN.sfUpdFldSetStr === null ||
    objExcelExportRegionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objExcelExportRegionEN.regionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objExcelExportRegionEN, config);
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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
 * @param objExcelExportRegionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ExcelExportRegion_UpdateWithConditionAsync(
  objExcelExportRegionEN: clsExcelExportRegionEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objExcelExportRegionEN.sfUpdFldSetStr === undefined ||
    objExcelExportRegionEN.sfUpdFldSetStr === null ||
    objExcelExportRegionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objExcelExportRegionEN.regionId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);
  objExcelExportRegionEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objExcelExportRegionEN, config);
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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
 * @param objstrRegionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ExcelExportRegion_IsExistRecordCache(
  objExcelExportRegionCond: clsExcelExportRegionEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrExcelExportRegionObjLstCache = await ExcelExportRegion_GetObjLstCache(strPrjId);
  if (arrExcelExportRegionObjLstCache == null) return false;
  let arrExcelExportRegionSel = arrExcelExportRegionObjLstCache;
  if (
    objExcelExportRegionCond.sfFldComparisonOp == null ||
    objExcelExportRegionCond.sfFldComparisonOp == ''
  )
    return arrExcelExportRegionSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objExcelExportRegionCond.sfFldComparisonOp,
  );
  //console.log("clsExcelExportRegionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objExcelExportRegionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objExcelExportRegionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrExcelExportRegionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objExcelExportRegionCond),
      excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_IsExistCache(strRegionId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrExcelExportRegionObjLstCache = await ExcelExportRegion_GetObjLstCache(strPrjId);
  if (arrExcelExportRegionObjLstCache == null) return false;
  try {
    const arrExcelExportRegionSel = arrExcelExportRegionObjLstCache.filter(
      (x) => x.regionId == strRegionId,
    );
    if (arrExcelExportRegionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strRegionId,
      excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_IsExistAsync(strRegionId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
 * @param objExcelExportRegionCond:条件对象
 * @returns 对象列表记录数
 */
export async function ExcelExportRegion_GetRecCountByCondCache(
  objExcelExportRegionCond: clsExcelExportRegionEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrExcelExportRegionObjLstCache = await ExcelExportRegion_GetObjLstCache(strPrjId);
  if (arrExcelExportRegionObjLstCache == null) return 0;
  let arrExcelExportRegionSel = arrExcelExportRegionObjLstCache;
  if (
    objExcelExportRegionCond.sfFldComparisonOp == null ||
    objExcelExportRegionCond.sfFldComparisonOp == ''
  )
    return arrExcelExportRegionSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objExcelExportRegionCond.sfFldComparisonOp,
  );
  //console.log("clsExcelExportRegionWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objExcelExportRegionCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objExcelExportRegionCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrExcelExportRegionSel = arrExcelExportRegionSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrExcelExportRegionSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objExcelExportRegionCond),
      excelExportRegion_ConstructorName,
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
export async function ExcelExportRegion_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(excelExportRegion_Controller, strAction);

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
        excelExportRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        excelExportRegion_ConstructorName,
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
export function ExcelExportRegion_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ExcelExportRegion_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsExcelExportRegionWApi.clsExcelExportRegionWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsExcelExportRegionWApi.clsExcelExportRegionWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsExcelExportRegionEN._CurrTabName, strPrjId);
  switch (clsExcelExportRegionEN.CacheModeId) {
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
  // vExcelExportRegion_ReFreshThisCache(strPrjId);
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ExcelExportRegion_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsExcelExportRegionWApi.ExcelExportRegion_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsExcelExportRegionWApi.ExcelExportRegion_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsExcelExportRegionEN._CurrTabName, strPrjId);
    switch (clsExcelExportRegionEN.CacheModeId) {
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
export function ExcelExportRegion_CheckPropertyNew(
  pobjExcelExportRegionEN: clsExcelExportRegionEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.prjId) === true ||
    pobjExcelExportRegionEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In Excel导出区域)!(clsExcelExportRegionBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjExcelExportRegionEN.updUser) === true) {
    throw new Error(
      '(errid:Watl000411)字段[修改者]不能为空(In Excel导出区域)!(clsExcelExportRegionBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.regionId) == false &&
    GetStrLen(pobjExcelExportRegionEN.regionId) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[区域Id(regionId)]的长度不能超过10(In Excel导出区域(ExcelExportRegion))!值:$(pobjExcelExportRegionEN.regionId)(clsExcelExportRegionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.prjId) == false &&
    GetStrLen(pobjExcelExportRegionEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In Excel导出区域(ExcelExportRegion))!值:$(pobjExcelExportRegionEN.prjId)(clsExcelExportRegionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.updDate) == false &&
    GetStrLen(pobjExcelExportRegionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In Excel导出区域(ExcelExportRegion))!值:$(pobjExcelExportRegionEN.updDate)(clsExcelExportRegionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.updUser) == false &&
    GetStrLen(pobjExcelExportRegionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In Excel导出区域(ExcelExportRegion))!值:$(pobjExcelExportRegionEN.updUser)(clsExcelExportRegionBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.memo) == false &&
    GetStrLen(pobjExcelExportRegionEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In Excel导出区域(ExcelExportRegion))!值:$(pobjExcelExportRegionEN.memo)(clsExcelExportRegionBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.regionId) == false &&
    undefined !== pobjExcelExportRegionEN.regionId &&
    tzDataType.isString(pobjExcelExportRegionEN.regionId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[区域Id(regionId)]的值:[$(pobjExcelExportRegionEN.regionId)], 非法,应该为字符型(In Excel导出区域(ExcelExportRegion))!(clsExcelExportRegionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.prjId) == false &&
    undefined !== pobjExcelExportRegionEN.prjId &&
    tzDataType.isString(pobjExcelExportRegionEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjExcelExportRegionEN.prjId)], 非法,应该为字符型(In Excel导出区域(ExcelExportRegion))!(clsExcelExportRegionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.updDate) == false &&
    undefined !== pobjExcelExportRegionEN.updDate &&
    tzDataType.isString(pobjExcelExportRegionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjExcelExportRegionEN.updDate)], 非法,应该为字符型(In Excel导出区域(ExcelExportRegion))!(clsExcelExportRegionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.updUser) == false &&
    undefined !== pobjExcelExportRegionEN.updUser &&
    tzDataType.isString(pobjExcelExportRegionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjExcelExportRegionEN.updUser)], 非法,应该为字符型(In Excel导出区域(ExcelExportRegion))!(clsExcelExportRegionBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.memo) == false &&
    undefined !== pobjExcelExportRegionEN.memo &&
    tzDataType.isString(pobjExcelExportRegionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjExcelExportRegionEN.memo)], 非法,应该为字符型(In Excel导出区域(ExcelExportRegion))!(clsExcelExportRegionBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.prjId) == false &&
    pobjExcelExportRegionEN.prjId != '[nuull]' &&
    GetStrLen(pobjExcelExportRegionEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程ID]作为外键字段,长度应该为4(In Excel导出区域)!(clsExcelExportRegionBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ExcelExportRegion_CheckProperty4Update(
  pobjExcelExportRegionEN: clsExcelExportRegionEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.regionId) == false &&
    GetStrLen(pobjExcelExportRegionEN.regionId) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[区域Id(regionId)]的长度不能超过10(In Excel导出区域(ExcelExportRegion))!值:$(pobjExcelExportRegionEN.regionId)(clsExcelExportRegionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.prjId) == false &&
    GetStrLen(pobjExcelExportRegionEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In Excel导出区域(ExcelExportRegion))!值:$(pobjExcelExportRegionEN.prjId)(clsExcelExportRegionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.updDate) == false &&
    GetStrLen(pobjExcelExportRegionEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In Excel导出区域(ExcelExportRegion))!值:$(pobjExcelExportRegionEN.updDate)(clsExcelExportRegionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.updUser) == false &&
    GetStrLen(pobjExcelExportRegionEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In Excel导出区域(ExcelExportRegion))!值:$(pobjExcelExportRegionEN.updUser)(clsExcelExportRegionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.memo) == false &&
    GetStrLen(pobjExcelExportRegionEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In Excel导出区域(ExcelExportRegion))!值:$(pobjExcelExportRegionEN.memo)(clsExcelExportRegionBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.regionId) == false &&
    undefined !== pobjExcelExportRegionEN.regionId &&
    tzDataType.isString(pobjExcelExportRegionEN.regionId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[区域Id(regionId)]的值:[$(pobjExcelExportRegionEN.regionId)], 非法,应该为字符型(In Excel导出区域(ExcelExportRegion))!(clsExcelExportRegionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.prjId) == false &&
    undefined !== pobjExcelExportRegionEN.prjId &&
    tzDataType.isString(pobjExcelExportRegionEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjExcelExportRegionEN.prjId)], 非法,应该为字符型(In Excel导出区域(ExcelExportRegion))!(clsExcelExportRegionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.updDate) == false &&
    undefined !== pobjExcelExportRegionEN.updDate &&
    tzDataType.isString(pobjExcelExportRegionEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjExcelExportRegionEN.updDate)], 非法,应该为字符型(In Excel导出区域(ExcelExportRegion))!(clsExcelExportRegionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.updUser) == false &&
    undefined !== pobjExcelExportRegionEN.updUser &&
    tzDataType.isString(pobjExcelExportRegionEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjExcelExportRegionEN.updUser)], 非法,应该为字符型(In Excel导出区域(ExcelExportRegion))!(clsExcelExportRegionBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.memo) == false &&
    undefined !== pobjExcelExportRegionEN.memo &&
    tzDataType.isString(pobjExcelExportRegionEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjExcelExportRegionEN.memo)], 非法,应该为字符型(In Excel导出区域(ExcelExportRegion))!(clsExcelExportRegionBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjExcelExportRegionEN.regionId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[区域Id]不能为空(In Excel导出区域)!(clsExcelExportRegionBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjExcelExportRegionEN.prjId) == false &&
    pobjExcelExportRegionEN.prjId != '[nuull]' &&
    GetStrLen(pobjExcelExportRegionEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程ID]作为外键字段,长度应该为4(In Excel导出区域)!(clsExcelExportRegionBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ExcelExportRegion_GetJSONStrByObj(
  pobjExcelExportRegionEN: clsExcelExportRegionEN,
): string {
  pobjExcelExportRegionEN.sfUpdFldSetStr = pobjExcelExportRegionEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjExcelExportRegionEN);
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
export function ExcelExportRegion_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsExcelExportRegionEN> {
  let arrExcelExportRegionObjLst = new Array<clsExcelExportRegionEN>();
  if (strJSON === '') {
    return arrExcelExportRegionObjLst;
  }
  try {
    arrExcelExportRegionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrExcelExportRegionObjLst;
  }
  return arrExcelExportRegionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrExcelExportRegionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ExcelExportRegion_GetObjLstByJSONObjLst(
  arrExcelExportRegionObjLstS: Array<clsExcelExportRegionEN>,
): Array<clsExcelExportRegionEN> {
  const arrExcelExportRegionObjLst = new Array<clsExcelExportRegionEN>();
  for (const objInFor of arrExcelExportRegionObjLstS) {
    const obj1 = ExcelExportRegion_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrExcelExportRegionObjLst.push(obj1);
  }
  return arrExcelExportRegionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ExcelExportRegion_GetObjByJSONStr(strJSON: string): clsExcelExportRegionEN {
  let pobjExcelExportRegionEN = new clsExcelExportRegionEN();
  if (strJSON === '') {
    return pobjExcelExportRegionEN;
  }
  try {
    pobjExcelExportRegionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjExcelExportRegionEN;
  }
  return pobjExcelExportRegionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ExcelExportRegion_GetCombineCondition(
  objExcelExportRegionCond: clsExcelExportRegionEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionCond.dicFldComparisonOp,
      clsExcelExportRegionEN.con_RegionId,
    ) == true
  ) {
    const strComparisonOpRegionId: string =
      objExcelExportRegionCond.dicFldComparisonOp[clsExcelExportRegionEN.con_RegionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsExcelExportRegionEN.con_RegionId,
      objExcelExportRegionCond.regionId,
      strComparisonOpRegionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionCond.dicFldComparisonOp,
      clsExcelExportRegionEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objExcelExportRegionCond.dicFldComparisonOp[clsExcelExportRegionEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsExcelExportRegionEN.con_PrjId,
      objExcelExportRegionCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionCond.dicFldComparisonOp,
      clsExcelExportRegionEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objExcelExportRegionCond.dicFldComparisonOp[clsExcelExportRegionEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsExcelExportRegionEN.con_UpdDate,
      objExcelExportRegionCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionCond.dicFldComparisonOp,
      clsExcelExportRegionEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objExcelExportRegionCond.dicFldComparisonOp[clsExcelExportRegionEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsExcelExportRegionEN.con_UpdUser,
      objExcelExportRegionCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objExcelExportRegionCond.dicFldComparisonOp,
      clsExcelExportRegionEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objExcelExportRegionCond.dicFldComparisonOp[clsExcelExportRegionEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsExcelExportRegionEN.con_Memo,
      objExcelExportRegionCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ExcelExportRegion(Excel导出区域),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ExcelExportRegion_GetUniCondStr(
  objExcelExportRegionEN: clsExcelExportRegionEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId = '{0}'", objExcelExportRegionEN.prjId);
  strWhereCond += Format(" and RegionId = '{0}'", objExcelExportRegionEN.regionId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ExcelExportRegion(Excel导出区域),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ExcelExportRegion_GetUniCondStr4Update(
  objExcelExportRegionEN: clsExcelExportRegionEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RegionId <> '{0}'", objExcelExportRegionEN.regionId);
  strWhereCond += Format(" and PrjId = '{0}'", objExcelExportRegionEN.prjId);
  strWhereCond += Format(" and RegionId = '{0}'", objExcelExportRegionEN.regionId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objExcelExportRegionENS:源对象
 * @param objExcelExportRegionENT:目标对象
 */
export function ExcelExportRegion_GetObjFromJsonObj(
  objExcelExportRegionENS: clsExcelExportRegionEN,
): clsExcelExportRegionEN {
  const objExcelExportRegionENT: clsExcelExportRegionEN = new clsExcelExportRegionEN();
  ObjectAssign(objExcelExportRegionENT, objExcelExportRegionENS);
  return objExcelExportRegionENT;
}
