/**
 * 类名:clsGCDefaConstantsWApi
 * 表名:GCDefaConstants(00050640)
 * 版本:2025.07.05.1(服务器:PYF-AI)
 * 日期:2025/07/05 15:37:09
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * GC常量(GCDefaConstants)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年07月05日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetSortExpressInfo,
  ObjectAssign,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { gCDefaConstantsCache, isFuncMapCache } from '@/views/GeneCode/GCDefaConstantsVueShare';
import { clsGCDefaConstantsENEx } from '@/ts/L0Entity/GeneCode/clsGCDefaConstantsENEx';
import { clsGCDefaConstantsEN } from '@/ts/L0Entity/GeneCode/clsGCDefaConstantsEN';
import { DataTypeAbbr_func } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const gCDefaConstants_Controller = 'GCDefaConstantsApi';
export const gCDefaConstants_ConstructorName = 'gCDefaConstants';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strConstId:关键字
 * @returns 对象
 **/
export async function GCDefaConstants_GetObjByConstIdAsync(
  strConstId: string,
): Promise<clsGCDefaConstantsEN | null> {
  const strThisFuncName = 'GetObjByConstIdAsync';

  if (IsNullOrEmpty(strConstId) == true) {
    const strMsg = Format(
      '参数:[strConstId]不能为空!(In clsGCDefaConstantsWApi.GetObjByConstIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strConstId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strConstId]的长度:[{0}]不正确!(clsGCDefaConstantsWApi.GetObjByConstIdAsync)',
      strConstId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByConstId';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strConstId,
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
      const objGCDefaConstants = GCDefaConstants_GetObjFromJsonObj(returnObj);
      return objGCDefaConstants;
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
 * @param strConstId:所给的关键字
 * @returns 对象
 */
export async function GCDefaConstants_GetObjByConstIdlocalStorage(strConstId: string) {
  const strThisFuncName = 'GetObjByConstIdlocalStorage';

  if (IsNullOrEmpty(strConstId) == true) {
    const strMsg = Format(
      '参数:[strConstId]不能为空!(In clsGCDefaConstantsWApi.GetObjByConstIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strConstId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strConstId]的长度:[{0}]不正确!(clsGCDefaConstantsWApi.GetObjByConstIdlocalStorage)',
      strConstId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsGCDefaConstantsEN._CurrTabName, strConstId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objGCDefaConstantsCache: clsGCDefaConstantsEN = JSON.parse(strTempObj);
    return objGCDefaConstantsCache;
  }
  try {
    const objGCDefaConstants = await GCDefaConstants_GetObjByConstIdAsync(strConstId);
    if (objGCDefaConstants != null) {
      localStorage.setItem(strKey, JSON.stringify(objGCDefaConstants));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objGCDefaConstants;
    }
    return objGCDefaConstants;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strConstId,
      gCDefaConstants_ConstructorName,
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
 * @param strConstId:所给的关键字
 * @returns 对象
 */
export async function GCDefaConstants_GetObjByConstIdCache(
  strConstId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByConstIdCache';

  if (IsNullOrEmpty(strConstId) == true) {
    const strMsg = Format(
      '参数:[strConstId]不能为空!(In clsGCDefaConstantsWApi.GetObjByConstIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strConstId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strConstId]的长度:[{0}]不正确!(clsGCDefaConstantsWApi.GetObjByConstIdCache)',
      strConstId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrGCDefaConstantsObjLstCache = await GCDefaConstants_GetObjLstCache();
  try {
    const arrGCDefaConstantsSel = arrGCDefaConstantsObjLstCache.filter(
      (x) => x.constId == strConstId,
    );
    let objGCDefaConstants: clsGCDefaConstantsEN;
    if (arrGCDefaConstantsSel.length > 0) {
      objGCDefaConstants = arrGCDefaConstantsSel[0];
      return objGCDefaConstants;
    } else {
      if (bolTryAsyncOnce == true) {
        const objGCDefaConstantsConst = await GCDefaConstants_GetObjByConstIdAsync(strConstId);
        if (objGCDefaConstantsConst != null) {
          GCDefaConstants_ReFreshThisCache();
          return objGCDefaConstantsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strConstId,
      gCDefaConstants_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objGCDefaConstants:所给的对象
 * @returns 对象
 */
export async function GCDefaConstants_UpdateObjInLstCache(
  objGCDefaConstants: clsGCDefaConstantsEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrGCDefaConstantsObjLstCache = await GCDefaConstants_GetObjLstCache();
    const obj = arrGCDefaConstantsObjLstCache.find(
      (x) => x.constName == objGCDefaConstants.constName,
    );
    if (obj != null) {
      objGCDefaConstants.constId = obj.constId;
      ObjectAssign(obj, objGCDefaConstants);
    } else {
      arrGCDefaConstantsObjLstCache.push(objGCDefaConstants);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gCDefaConstants_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
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
export function GCDefaConstants_SortFunDefa(
  a: clsGCDefaConstantsEN,
  b: clsGCDefaConstantsEN,
): number {
  return a.constId.localeCompare(b.constId);
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
export function GCDefaConstants_SortFunDefa2Fld(
  a: clsGCDefaConstantsEN,
  b: clsGCDefaConstantsEN,
): number {
  if (a.constName == b.constName) return a.constExpression.localeCompare(b.constExpression);
  else return a.constName.localeCompare(b.constName);
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
export function GCDefaConstants_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCDefaConstantsEN.con_ConstId:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          return a.constId.localeCompare(b.constId);
        };
      case clsGCDefaConstantsEN.con_ConstName:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          return a.constName.localeCompare(b.constName);
        };
      case clsGCDefaConstantsEN.con_ConstExpression:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          return a.constExpression.localeCompare(b.constExpression);
        };
      case clsGCDefaConstantsEN.con_FilePath:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          if (a.filePath == null) return -1;
          if (b.filePath == null) return 1;
          return a.filePath.localeCompare(b.filePath);
        };
      case clsGCDefaConstantsEN.con_InitValue:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          if (a.initValue == null) return -1;
          if (b.initValue == null) return 1;
          return a.initValue.localeCompare(b.initValue);
        };
      case clsGCDefaConstantsEN.con_DataTypeId:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsGCDefaConstantsEN.con_ClsName:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          if (a.clsName == null) return -1;
          if (b.clsName == null) return 1;
          return a.clsName.localeCompare(b.clsName);
        };
      case clsGCDefaConstantsEN.con_UpdDate:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsGCDefaConstantsEN.con_UpdUser:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsGCDefaConstantsEN.con_Memo:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCDefaConstants]中不存在!(in ${gCDefaConstants_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsGCDefaConstantsEN.con_ConstId:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          return b.constId.localeCompare(a.constId);
        };
      case clsGCDefaConstantsEN.con_ConstName:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          return b.constName.localeCompare(a.constName);
        };
      case clsGCDefaConstantsEN.con_ConstExpression:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          return b.constExpression.localeCompare(a.constExpression);
        };
      case clsGCDefaConstantsEN.con_FilePath:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          if (b.filePath == null) return -1;
          if (a.filePath == null) return 1;
          return b.filePath.localeCompare(a.filePath);
        };
      case clsGCDefaConstantsEN.con_InitValue:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          if (b.initValue == null) return -1;
          if (a.initValue == null) return 1;
          return b.initValue.localeCompare(a.initValue);
        };
      case clsGCDefaConstantsEN.con_DataTypeId:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsGCDefaConstantsEN.con_ClsName:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          if (b.clsName == null) return -1;
          if (a.clsName == null) return 1;
          return b.clsName.localeCompare(a.clsName);
        };
      case clsGCDefaConstantsEN.con_UpdDate:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsGCDefaConstantsEN.con_UpdUser:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsGCDefaConstantsEN.con_Memo:
        return (a: clsGCDefaConstantsEN, b: clsGCDefaConstantsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCDefaConstants]中不存在!(in ${gCDefaConstants_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strConstId:所给的关键字
 * @returns 对象
 */
export async function GCDefaConstants_GetNameByConstIdCache(strConstId: string) {
  if (IsNullOrEmpty(strConstId) == true) {
    const strMsg = Format(
      '参数:[strConstId]不能为空!(In clsGCDefaConstantsWApi.GetNameByConstIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strConstId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strConstId]的长度:[{0}]不正确!(clsGCDefaConstantsWApi.GetNameByConstIdCache)',
      strConstId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrGCDefaConstantsObjLstCache = await GCDefaConstants_GetObjLstCache();
  if (arrGCDefaConstantsObjLstCache == null) return '';
  try {
    const arrGCDefaConstantsSel = arrGCDefaConstantsObjLstCache.filter(
      (x) => x.constId == strConstId,
    );
    let objGCDefaConstants: clsGCDefaConstantsEN;
    if (arrGCDefaConstantsSel.length > 0) {
      objGCDefaConstants = arrGCDefaConstantsSel[0];
      return objGCDefaConstants.constName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strConstId,
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
export async function GCDefaConstants_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsGCDefaConstantsEN.con_ConstId:
      return (obj: clsGCDefaConstantsEN) => {
        return obj.constId === value;
      };
    case clsGCDefaConstantsEN.con_ConstName:
      return (obj: clsGCDefaConstantsEN) => {
        return obj.constName === value;
      };
    case clsGCDefaConstantsEN.con_ConstExpression:
      return (obj: clsGCDefaConstantsEN) => {
        return obj.constExpression === value;
      };
    case clsGCDefaConstantsEN.con_FilePath:
      return (obj: clsGCDefaConstantsEN) => {
        return obj.filePath === value;
      };
    case clsGCDefaConstantsEN.con_InitValue:
      return (obj: clsGCDefaConstantsEN) => {
        return obj.initValue === value;
      };
    case clsGCDefaConstantsEN.con_DataTypeId:
      return (obj: clsGCDefaConstantsEN) => {
        return obj.dataTypeId === value;
      };
    case clsGCDefaConstantsEN.con_ClsName:
      return (obj: clsGCDefaConstantsEN) => {
        return obj.clsName === value;
      };
    case clsGCDefaConstantsEN.con_UpdDate:
      return (obj: clsGCDefaConstantsEN) => {
        return obj.updDate === value;
      };
    case clsGCDefaConstantsEN.con_UpdUser:
      return (obj: clsGCDefaConstantsEN) => {
        return obj.updUser === value;
      };
    case clsGCDefaConstantsEN.con_Memo:
      return (obj: clsGCDefaConstantsEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[GCDefaConstants]中不存在!(in ${gCDefaConstants_ConstructorName}.${strThisFuncName})`;
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
 * @returns 返回一个输出字段值
 */
export async function GCDefaConstants_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsGCDefaConstantsEN.con_ConstId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsGCDefaConstantsEN._AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsGCDefaConstantsEN._AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strConstId = strInValue;
  if (IsNullOrEmpty(strConstId) == true) {
    return '';
  }
  const objGCDefaConstants = await GCDefaConstants_GetObjByConstIdCache(strConstId);
  if (objGCDefaConstants == null) return '';
  if (objGCDefaConstants.GetFldValue(strOutFldName) == null) return '';
  return objGCDefaConstants.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function GCDefaConstants_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsGCDefaConstantsEN.con_ConstId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrGCDefaConstants = await GCDefaConstants_GetObjLstCache();
  if (arrGCDefaConstants == null) return [];
  let arrGCDefaConstantsSel = arrGCDefaConstants;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrGCDefaConstantsSel.length == 0) return [];
  return arrGCDefaConstantsSel.map((x) => x.constId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCDefaConstants_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
export async function GCDefaConstants_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
export async function GCDefaConstants_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
export async function GCDefaConstants_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsGCDefaConstantsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

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
      const objGCDefaConstants = GCDefaConstants_GetObjFromJsonObj(returnObj);
      return objGCDefaConstants;
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
export async function GCDefaConstants_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGCDefaConstantsEN._CurrTabName;
  if (IsNullOrEmpty(clsGCDefaConstantsEN._WhereFormat) == false) {
    strWhereCond = clsGCDefaConstantsEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsGCDefaConstantsEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCDefaConstantsEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrGCDefaConstantsExObjLstCache: Array<clsGCDefaConstantsEN> = CacheHelper.Get(strKey);
    const arrGCDefaConstantsObjLstT = GCDefaConstants_GetObjLstByJSONObjLst(
      arrGCDefaConstantsExObjLstCache,
    );
    return arrGCDefaConstantsObjLstT;
  }
  try {
    const arrGCDefaConstantsExObjLst = await GCDefaConstants_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrGCDefaConstantsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCDefaConstantsExObjLst.length,
    );
    console.log(strInfo);
    return arrGCDefaConstantsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCDefaConstants_ConstructorName,
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
export async function GCDefaConstants_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGCDefaConstantsEN._CurrTabName;
  if (IsNullOrEmpty(clsGCDefaConstantsEN._WhereFormat) == false) {
    strWhereCond = clsGCDefaConstantsEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsGCDefaConstantsEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCDefaConstantsEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGCDefaConstantsExObjLstCache: Array<clsGCDefaConstantsEN> = JSON.parse(strTempObjLst);
    const arrGCDefaConstantsObjLstT = GCDefaConstants_GetObjLstByJSONObjLst(
      arrGCDefaConstantsExObjLstCache,
    );
    return arrGCDefaConstantsObjLstT;
  }
  try {
    const arrGCDefaConstantsExObjLst = await GCDefaConstants_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrGCDefaConstantsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCDefaConstantsExObjLst.length,
    );
    console.log(strInfo);
    return arrGCDefaConstantsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCDefaConstants_ConstructorName,
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
export async function GCDefaConstants_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsGCDefaConstantsEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGCDefaConstantsObjLstCache: Array<clsGCDefaConstantsEN> = JSON.parse(strTempObjLst);
    return arrGCDefaConstantsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function GCDefaConstants_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsGCDefaConstantsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

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
          gCDefaConstants_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCDefaConstants_GetObjLstByJSONObjLst(returnObjLst);
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
export async function GCDefaConstants_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGCDefaConstantsEN._CurrTabName;
  if (IsNullOrEmpty(clsGCDefaConstantsEN._WhereFormat) == false) {
    strWhereCond = clsGCDefaConstantsEN._WhereFormat;
  }
  if (IsNullOrEmpty(clsGCDefaConstantsEN._CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCDefaConstantsEN._CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGCDefaConstantsExObjLstCache: Array<clsGCDefaConstantsEN> = JSON.parse(strTempObjLst);
    const arrGCDefaConstantsObjLstT = GCDefaConstants_GetObjLstByJSONObjLst(
      arrGCDefaConstantsExObjLstCache,
    );
    return arrGCDefaConstantsObjLstT;
  }
  try {
    const arrGCDefaConstantsExObjLst = await GCDefaConstants_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrGCDefaConstantsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCDefaConstantsExObjLst.length,
    );
    console.log(strInfo);
    return arrGCDefaConstantsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCDefaConstants_ConstructorName,
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
export async function GCDefaConstants_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsGCDefaConstantsEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGCDefaConstantsObjLstCache: Array<clsGCDefaConstantsEN> = JSON.parse(strTempObjLst);
    return arrGCDefaConstantsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GCDefaConstants_GetObjLstCache(): Promise<Array<clsGCDefaConstantsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrGCDefaConstantsObjLstCache;
  switch (clsGCDefaConstantsEN._CacheModeId) {
    case '04': //sessionStorage
      arrGCDefaConstantsObjLstCache = await GCDefaConstants_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrGCDefaConstantsObjLstCache = await GCDefaConstants_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrGCDefaConstantsObjLstCache = await GCDefaConstants_GetObjLstClientCache();
      break;
    default:
      arrGCDefaConstantsObjLstCache = await GCDefaConstants_GetObjLstClientCache();
      break;
  }
  return arrGCDefaConstantsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GCDefaConstants_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrGCDefaConstantsObjLstCache;
  switch (clsGCDefaConstantsEN._CacheModeId) {
    case '04': //sessionStorage
      arrGCDefaConstantsObjLstCache = await GCDefaConstants_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrGCDefaConstantsObjLstCache = await GCDefaConstants_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrGCDefaConstantsObjLstCache = null;
      break;
    default:
      arrGCDefaConstantsObjLstCache = null;
      break;
  }
  return arrGCDefaConstantsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrConstIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GCDefaConstants_GetSubObjLstCache(
  objGCDefaConstantsCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrGCDefaConstantsObjLstCache = await GCDefaConstants_GetObjLstCache();
  let arrGCDefaConstantsSel = arrGCDefaConstantsObjLstCache;
  if (objGCDefaConstantsCond.GetConditions().length == 0) return arrGCDefaConstantsSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objGCDefaConstantsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrGCDefaConstantsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGCDefaConstantsCond),
      gCDefaConstants_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCDefaConstantsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrConstId:关键字列表
 * @returns 对象列表
 **/
export async function GCDefaConstants_GetObjLstByConstIdLstAsync(
  arrConstId: Array<string>,
): Promise<Array<clsGCDefaConstantsEN>> {
  const strThisFuncName = 'GetObjLstByConstIdLstAsync';
  const strAction = 'GetObjLstByConstIdLst';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrConstId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gCDefaConstants_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCDefaConstants_GetObjLstByJSONObjLst(returnObjLst);
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
 * @param arrstrConstIdLst:关键字列表
 * @returns 对象列表
 */
export async function GCDefaConstants_GetObjLstByConstIdLstCache(arrConstIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByConstIdLstCache';
  try {
    const arrGCDefaConstantsObjLstCache = await GCDefaConstants_GetObjLstCache();
    const arrGCDefaConstantsSel = arrGCDefaConstantsObjLstCache.filter(
      (x) => arrConstIdLst.indexOf(x.constId) > -1,
    );
    return arrGCDefaConstantsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrConstIdLst.join(','),
      gCDefaConstants_ConstructorName,
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
export async function GCDefaConstants_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsGCDefaConstantsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

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
          gCDefaConstants_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCDefaConstants_GetObjLstByJSONObjLst(returnObjLst);
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
export async function GCDefaConstants_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsGCDefaConstantsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

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
          gCDefaConstants_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCDefaConstants_GetObjLstByJSONObjLst(returnObjLst);
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
export async function GCDefaConstants_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCDefaConstantsEN>();
  const arrGCDefaConstantsObjLstCache = await GCDefaConstants_GetObjLstCache();
  if (arrGCDefaConstantsObjLstCache.length == 0) return arrGCDefaConstantsObjLstCache;
  let arrGCDefaConstantsSel = arrGCDefaConstantsObjLstCache;
  const objGCDefaConstantsCond = objPagerPara.conditionCollection;
  if (objGCDefaConstantsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsGCDefaConstantsEN>();
  }
  //console.log("clsGCDefaConstantsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objGCDefaConstantsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCDefaConstantsSel.length == 0) return arrGCDefaConstantsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGCDefaConstantsSel = arrGCDefaConstantsSel.sort(
        GCDefaConstants_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCDefaConstantsSel = arrGCDefaConstantsSel.sort(objPagerPara.sortFun);
    }
    arrGCDefaConstantsSel = arrGCDefaConstantsSel.slice(intStart, intEnd);
    return arrGCDefaConstantsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCDefaConstants_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCDefaConstantsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function GCDefaConstants_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCDefaConstantsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCDefaConstantsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

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
          gCDefaConstants_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCDefaConstants_GetObjLstByJSONObjLst(returnObjLst);
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
 * @param strConstId:关键字
 * @returns 获取删除的结果
 **/
export async function GCDefaConstants_DelRecordAsync(strConstId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strConstId);

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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
 * @param arrConstId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function GCDefaConstants_DelGCDefaConstantssAsync(
  arrConstId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelGCDefaConstantssAsync';
  const strAction = 'DelGCDefaConstantss';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrConstId, config);
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function GCDefaConstants_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCDefaConstantsENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrGCDefaConstantsObjLst = await GCDefaConstants_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsGCDefaConstantsENEx>();
  const arrGCDefaConstantsExObjLst = arrGCDefaConstantsObjLst.map((obj) => {
    const cacheKey = `${obj.constId}`;
    if (gCDefaConstantsCache[cacheKey]) {
      const oldObj = gCDefaConstantsCache[cacheKey];
      return oldObj;
    } else {
      const newObj = GCDefaConstants_CopyToEx(obj);
      arrNewObj.push(newObj);
      gCDefaConstantsCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await GCDefaConstants_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsGCDefaConstantsEN._AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrGCDefaConstantsExObjLst) {
      await GCDefaConstants_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.constId}`;
      gCDefaConstantsCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrGCDefaConstantsExObjLst.length == 0) return arrGCDefaConstantsExObjLst;
  let arrGCDefaConstantsSel: Array<clsGCDefaConstantsENEx> = arrGCDefaConstantsExObjLst;
  const objGCDefaConstantsCond = objPagerPara.conditionCollection;
  if (objGCDefaConstantsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrGCDefaConstantsExObjLst;
  }
  try {
    for (const objCondition of objGCDefaConstantsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCDefaConstantsSel.length == 0) return arrGCDefaConstantsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrGCDefaConstantsSel = arrGCDefaConstantsSel.sort(
        GCDefaConstants_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCDefaConstantsSel = arrGCDefaConstantsSel.sort(objPagerPara.sortFun);
    }
    arrGCDefaConstantsSel = arrGCDefaConstantsSel.slice(intStart, intEnd);
    return arrGCDefaConstantsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCDefaConstants_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCDefaConstantsENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objGCDefaConstantsENS:源对象
 * @returns 目标对象=>clsGCDefaConstantsEN:objGCDefaConstantsENT
 **/
export function GCDefaConstants_CopyToEx(
  objGCDefaConstantsENS: clsGCDefaConstantsEN,
): clsGCDefaConstantsENEx {
  const strThisFuncName = GCDefaConstants_CopyToEx.name;
  const objGCDefaConstantsENT = new clsGCDefaConstantsENEx();
  try {
    ObjectAssign(objGCDefaConstantsENT, objGCDefaConstantsENS);
    return objGCDefaConstantsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCDefaConstants_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGCDefaConstantsENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function GCDefaConstants_FuncMapByFldName(
  strFldName: string,
  objGCDefaConstantsEx: clsGCDefaConstantsENEx,
) {
  const strThisFuncName = GCDefaConstants_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsGCDefaConstantsEN._AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsGCDefaConstantsENEx.con_DataTypeName:
      return GCDefaConstants_FuncMapDataTypeName(objGCDefaConstantsEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCDefaConstants_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCDefaConstantsENEx.con_ConstNameEx:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.constNameEx === null && b.constNameEx === null) return 0;
          if (a.constNameEx === null) return -1;
          if (b.constNameEx === null) return 1;
          return a.constNameEx.localeCompare(b.constNameEx);
        };
      case clsGCDefaConstantsENEx.con_ConstExpressionEx:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.constExpressionEx === null && b.constExpressionEx === null) return 0;
          if (a.constExpressionEx === null) return -1;
          if (b.constExpressionEx === null) return 1;
          return a.constExpressionEx.localeCompare(b.constExpressionEx);
        };
      case clsGCDefaConstantsENEx.con_PrjName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsGCDefaConstantsENEx.con_DataTypeName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return -1;
          if (b.dataTypeName === null) return 1;
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsGCDefaConstantsENEx.con_DuFilePath:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return a.duFilePath.localeCompare(b.duFilePath);
        };
      case clsGCDefaConstantsENEx.con_DuClassName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return a.duClassName.localeCompare(b.duClassName);
        };
      case clsGCDefaConstantsENEx.con_DuDataTypeName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.duDataTypeName === null && b.duDataTypeName === null) return 0;
          if (a.duDataTypeName === null) return -1;
          if (b.duDataTypeName === null) return 1;
          return a.duDataTypeName.localeCompare(b.duDataTypeName);
        };
      case clsGCDefaConstantsENEx.con_PrjId:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return a.prjId.localeCompare(b.prjId);
        };
      default:
        return GCDefaConstants_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsGCDefaConstantsENEx.con_ConstNameEx:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.constNameEx === null && b.constNameEx === null) return 0;
          if (a.constNameEx === null) return 1;
          if (b.constNameEx === null) return -1;
          return b.constNameEx.localeCompare(a.constNameEx);
        };
      case clsGCDefaConstantsENEx.con_ConstExpressionEx:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.constExpressionEx === null && b.constExpressionEx === null) return 0;
          if (a.constExpressionEx === null) return 1;
          if (b.constExpressionEx === null) return -1;
          return b.constExpressionEx.localeCompare(a.constExpressionEx);
        };
      case clsGCDefaConstantsENEx.con_PrjName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsGCDefaConstantsENEx.con_DataTypeName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return 1;
          if (b.dataTypeName === null) return -1;
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsGCDefaConstantsENEx.con_DuFilePath:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return b.duFilePath.localeCompare(a.duFilePath);
        };
      case clsGCDefaConstantsENEx.con_DuClassName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return b.duClassName.localeCompare(a.duClassName);
        };
      case clsGCDefaConstantsENEx.con_DuDataTypeName:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          if (a.duDataTypeName === null && b.duDataTypeName === null) return 0;
          if (a.duDataTypeName === null) return 1;
          if (b.duDataTypeName === null) return -1;
          return b.duDataTypeName.localeCompare(a.duDataTypeName);
        };
      case clsGCDefaConstantsENEx.con_PrjId:
        return (a: clsGCDefaConstantsENEx, b: clsGCDefaConstantsENEx) => {
          return b.prjId.localeCompare(a.prjId);
        };
      default:
        return GCDefaConstants_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCDefaConstantsS:源对象
 **/
export async function GCDefaConstants_FuncMapDataTypeName(
  objGCDefaConstants: clsGCDefaConstantsENEx,
) {
  const strThisFuncName = GCDefaConstants_FuncMapDataTypeName.name;
  try {
    if (IsNullOrEmpty(objGCDefaConstants.dataTypeName) == true) {
      const DataTypeAbbrDataTypeId = objGCDefaConstants.dataTypeId;
      const DataTypeAbbrDataTypeName = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_DataTypeName,
        DataTypeAbbrDataTypeId,
      );
      objGCDefaConstants.dataTypeName = DataTypeAbbrDataTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001349)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCDefaConstants_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function GCDefaConstants_DelGCDefaConstantssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelGCDefaConstantssByCondAsync';
  const strAction = 'DelGCDefaConstantssByCond';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
 * @param objGCDefaConstantsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCDefaConstants_AddNewRecordAsync(
  objGCDefaConstantsEN: clsGCDefaConstantsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objGCDefaConstantsEN);
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCDefaConstantsEN, config);
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
 * @param objGCDefaConstantsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCDefaConstants_AddNewRecordWithMaxIdAsync(
  objGCDefaConstantsEN: clsGCDefaConstantsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCDefaConstantsEN, config);
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function GCDefaConstants_AddNewObjSave(
  objGCDefaConstantsEN: clsGCDefaConstantsEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    GCDefaConstants_CheckPropertyNew(objGCDefaConstantsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gCDefaConstants_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await GCDefaConstants_CheckUniCond4Add(objGCDefaConstantsEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await GCDefaConstants_AddNewRecordWithMaxIdAsync(objGCDefaConstantsEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      GCDefaConstants_ReFreshCache();
    } else {
      const strInfo = `添加[GC常量(GCDefaConstants)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${gCDefaConstants_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function GCDefaConstants_CheckUniCond4Add(
  objGCDefaConstantsEN: clsGCDefaConstantsEN,
): Promise<boolean> {
  const strUniquenessCondition = GCDefaConstants_GetUniCondStr(objGCDefaConstantsEN);
  const bolIsExistCondition = await GCDefaConstants_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Update)
 **/
export async function GCDefaConstants_CheckUniCond4Update(
  objGCDefaConstantsEN: clsGCDefaConstantsEN,
): Promise<boolean> {
  const strUniquenessCondition = GCDefaConstants_GetUniCondStr4Update(objGCDefaConstantsEN);
  const bolIsExistCondition = await GCDefaConstants_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function GCDefaConstants_UpdateObjSave(
  objGCDefaConstantsEN: clsGCDefaConstantsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objGCDefaConstantsEN.sfUpdFldSetStr = objGCDefaConstantsEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objGCDefaConstantsEN.constId == '' || objGCDefaConstantsEN.constId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    GCDefaConstants_CheckProperty4Update(objGCDefaConstantsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gCDefaConstants_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await GCDefaConstants_CheckUniCond4Update(objGCDefaConstantsEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await GCDefaConstants_UpdateRecordAsync(objGCDefaConstantsEN);
    if (returnBool == true) {
      GCDefaConstants_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${gCDefaConstants_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objGCDefaConstantsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function GCDefaConstants_AddNewRecordWithReturnKeyAsync(
  objGCDefaConstantsEN: clsGCDefaConstantsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCDefaConstantsEN, config);
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
 * @param objGCDefaConstantsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCDefaConstants_UpdateRecordAsync(
  objGCDefaConstantsEN: clsGCDefaConstantsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objGCDefaConstantsEN.sfUpdFldSetStr === undefined ||
    objGCDefaConstantsEN.sfUpdFldSetStr === null ||
    objGCDefaConstantsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCDefaConstantsEN.constId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCDefaConstantsEN, config);
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
 * 调用WebApi来编辑记录（存在就修改，不存在就添加）,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_EditRecordExAsync)
 * @param objGCDefaConstantsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCDefaConstants_EditRecordExAsync(
  objGCDefaConstantsEN: clsGCDefaConstantsEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objGCDefaConstantsEN.sfUpdFldSetStr === undefined ||
    objGCDefaConstantsEN.sfUpdFldSetStr === null ||
    objGCDefaConstantsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCDefaConstantsEN.constId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCDefaConstantsEN, config);
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
 * @param objGCDefaConstantsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCDefaConstants_UpdateWithConditionAsync(
  objGCDefaConstantsEN: clsGCDefaConstantsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objGCDefaConstantsEN.sfUpdFldSetStr === undefined ||
    objGCDefaConstantsEN.sfUpdFldSetStr === null ||
    objGCDefaConstantsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCDefaConstantsEN.constId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);
  objGCDefaConstantsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCDefaConstantsEN, config);
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
 * @param objstrConstIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GCDefaConstants_IsExistRecordCache(
  objGCDefaConstantsCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrGCDefaConstantsObjLstCache = await GCDefaConstants_GetObjLstCache();
  if (arrGCDefaConstantsObjLstCache == null) return false;
  let arrGCDefaConstantsSel = arrGCDefaConstantsObjLstCache;
  if (objGCDefaConstantsCond.GetConditions().length == 0)
    return arrGCDefaConstantsSel.length > 0 ? true : false;
  try {
    for (const objCondition of objGCDefaConstantsCond.GetConditions()) {
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
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCDefaConstantsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objGCDefaConstantsCond),
      gCDefaConstants_ConstructorName,
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
export async function GCDefaConstants_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
 * @param strConstId:所给的关键字
 * @returns 对象
 */
export async function GCDefaConstants_IsExistCache(strConstId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrGCDefaConstantsObjLstCache = await GCDefaConstants_GetObjLstCache();
  if (arrGCDefaConstantsObjLstCache == null) return false;
  try {
    const arrGCDefaConstantsSel = arrGCDefaConstantsObjLstCache.filter(
      (x) => x.constId == strConstId,
    );
    if (arrGCDefaConstantsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strConstId,
      gCDefaConstants_ConstructorName,
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
 * @param strConstId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function GCDefaConstants_IsExistAsync(strConstId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strConstId,
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
export async function GCDefaConstants_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
 * @param objGCDefaConstantsCond:条件对象
 * @returns 对象列表记录数
 */
export async function GCDefaConstants_GetRecCountByCondCache(
  objGCDefaConstantsCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrGCDefaConstantsObjLstCache = await GCDefaConstants_GetObjLstCache();
  if (arrGCDefaConstantsObjLstCache == null) return 0;
  let arrGCDefaConstantsSel = arrGCDefaConstantsObjLstCache;
  if (objGCDefaConstantsCond.GetConditions().length == 0) return arrGCDefaConstantsSel.length;
  try {
    for (const objCondition of objGCDefaConstantsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCDefaConstantsSel = arrGCDefaConstantsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrGCDefaConstantsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGCDefaConstantsCond),
      gCDefaConstants_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export async function GCDefaConstants_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function GCDefaConstants_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gCDefaConstants_Controller, strAction);

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
        gCDefaConstants_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCDefaConstants_ConstructorName,
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
export function GCDefaConstants_GetWebApiUrl(strController: string, strAction: string): string {
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
export function GCDefaConstants_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsGCDefaConstantsEN._CurrTabName;
  switch (clsGCDefaConstantsEN._CacheModeId) {
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
  clsGCDefaConstantsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function GCDefaConstants_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsGCDefaConstantsEN._CurrTabName;
    switch (clsGCDefaConstantsEN._CacheModeId) {
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
    clsGCDefaConstantsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function GCDefaConstants_GetLastRefreshTime(): string {
  if (clsGCDefaConstantsEN._RefreshTimeLst.length == 0) return '';
  return clsGCDefaConstantsEN._RefreshTimeLst[clsGCDefaConstantsEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function GCDefaConstants_BindDdl_ConstIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ConstIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ConstIdInDivCache");
  const arrObjLstSel = await GCDefaConstants_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsGCDefaConstantsEN.con_ConstId,
    clsGCDefaConstantsEN.con_ConstName,
    '选GC常量...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function GCDefaConstants_GetArrGCDefaConstantsCache() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ConstIdInDivCache");
  const arrGCDefaConstants = new Array<clsGCDefaConstantsEN>();
  const arrObjLstSel = await GCDefaConstants_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsGCDefaConstantsEN();
  obj0.constId = '0';
  obj0.constName = '选GC常量...';
  arrGCDefaConstants.push(obj0);
  arrObjLstSel.forEach((x) => arrGCDefaConstants.push(x));
  return arrGCDefaConstants;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCDefaConstants_CheckPropertyNew(pobjGCDefaConstantsEN: clsGCDefaConstantsEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjGCDefaConstantsEN.constName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[常量名]不能为空(In GC常量)!(clsGCDefaConstantsBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjGCDefaConstantsEN.constExpression) === true) {
    throw new Error(
      `(errid:Watl000411)字段[常量表达式]不能为空(In GC常量)!(clsGCDefaConstantsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.dataTypeId) === true ||
    pobjGCDefaConstantsEN.dataTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[数据类型Id]不能为空(In GC常量)!(clsGCDefaConstantsBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.constId) == false &&
    GetStrLen(pobjGCDefaConstantsEN.constId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[常量Id(constId)]的长度不能超过8(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.constId}(clsGCDefaConstantsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.constName) == false &&
    GetStrLen(pobjGCDefaConstantsEN.constName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[常量名(constName)]的长度不能超过50(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.constName}(clsGCDefaConstantsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.constExpression) == false &&
    GetStrLen(pobjGCDefaConstantsEN.constExpression) > 150
  ) {
    throw new Error(
      `(errid:Watl000413)字段[常量表达式(constExpression)]的长度不能超过150(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.constExpression}(clsGCDefaConstantsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.filePath) == false &&
    GetStrLen(pobjGCDefaConstantsEN.filePath) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[文件路径(filePath)]的长度不能超过500(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.filePath}(clsGCDefaConstantsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.initValue) == false &&
    GetStrLen(pobjGCDefaConstantsEN.initValue) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[初始值(initValue)]的长度不能超过1000(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.initValue}(clsGCDefaConstantsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.dataTypeId) == false &&
    GetStrLen(pobjGCDefaConstantsEN.dataTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据类型Id(dataTypeId)]的长度不能超过2(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.dataTypeId}(clsGCDefaConstantsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.clsName) == false &&
    GetStrLen(pobjGCDefaConstantsEN.clsName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[类名(clsName)]的长度不能超过100(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.clsName}(clsGCDefaConstantsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.updDate) == false &&
    GetStrLen(pobjGCDefaConstantsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.updDate}(clsGCDefaConstantsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.updUser) == false &&
    GetStrLen(pobjGCDefaConstantsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.updUser}(clsGCDefaConstantsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.memo) == false &&
    GetStrLen(pobjGCDefaConstantsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.memo}(clsGCDefaConstantsBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.constId) == false &&
    undefined !== pobjGCDefaConstantsEN.constId &&
    tzDataType.isString(pobjGCDefaConstantsEN.constId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[常量Id(constId)]的值:[${pobjGCDefaConstantsEN.constId}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.constName) == false &&
    undefined !== pobjGCDefaConstantsEN.constName &&
    tzDataType.isString(pobjGCDefaConstantsEN.constName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[常量名(constName)]的值:[${pobjGCDefaConstantsEN.constName}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.constExpression) == false &&
    undefined !== pobjGCDefaConstantsEN.constExpression &&
    tzDataType.isString(pobjGCDefaConstantsEN.constExpression) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[常量表达式(constExpression)]的值:[${pobjGCDefaConstantsEN.constExpression}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.filePath) == false &&
    undefined !== pobjGCDefaConstantsEN.filePath &&
    tzDataType.isString(pobjGCDefaConstantsEN.filePath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[文件路径(filePath)]的值:[${pobjGCDefaConstantsEN.filePath}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.initValue) == false &&
    undefined !== pobjGCDefaConstantsEN.initValue &&
    tzDataType.isString(pobjGCDefaConstantsEN.initValue) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[初始值(initValue)]的值:[${pobjGCDefaConstantsEN.initValue}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.dataTypeId) == false &&
    undefined !== pobjGCDefaConstantsEN.dataTypeId &&
    tzDataType.isString(pobjGCDefaConstantsEN.dataTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据类型Id(dataTypeId)]的值:[${pobjGCDefaConstantsEN.dataTypeId}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.clsName) == false &&
    undefined !== pobjGCDefaConstantsEN.clsName &&
    tzDataType.isString(pobjGCDefaConstantsEN.clsName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[类名(clsName)]的值:[${pobjGCDefaConstantsEN.clsName}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.updDate) == false &&
    undefined !== pobjGCDefaConstantsEN.updDate &&
    tzDataType.isString(pobjGCDefaConstantsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjGCDefaConstantsEN.updDate}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.updUser) == false &&
    undefined !== pobjGCDefaConstantsEN.updUser &&
    tzDataType.isString(pobjGCDefaConstantsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjGCDefaConstantsEN.updUser}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.memo) == false &&
    undefined !== pobjGCDefaConstantsEN.memo &&
    tzDataType.isString(pobjGCDefaConstantsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjGCDefaConstantsEN.memo}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.dataTypeId) == false &&
    pobjGCDefaConstantsEN.dataTypeId != '[nuull]' &&
    GetStrLen(pobjGCDefaConstantsEN.dataTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[数据类型Id]作为外键字段,长度应该为2(In GC常量)!(clsGCDefaConstantsBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCDefaConstants_CheckProperty4Update(pobjGCDefaConstantsEN: clsGCDefaConstantsEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.constId) == false &&
    GetStrLen(pobjGCDefaConstantsEN.constId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[常量Id(constId)]的长度不能超过8(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.constId}(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.constName) == false &&
    GetStrLen(pobjGCDefaConstantsEN.constName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[常量名(constName)]的长度不能超过50(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.constName}(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.constExpression) == false &&
    GetStrLen(pobjGCDefaConstantsEN.constExpression) > 150
  ) {
    throw new Error(
      `(errid:Watl000416)字段[常量表达式(constExpression)]的长度不能超过150(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.constExpression}(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.filePath) == false &&
    GetStrLen(pobjGCDefaConstantsEN.filePath) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[文件路径(filePath)]的长度不能超过500(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.filePath}(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.initValue) == false &&
    GetStrLen(pobjGCDefaConstantsEN.initValue) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[初始值(initValue)]的长度不能超过1000(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.initValue}(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.dataTypeId) == false &&
    GetStrLen(pobjGCDefaConstantsEN.dataTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据类型Id(dataTypeId)]的长度不能超过2(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.dataTypeId}(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.clsName) == false &&
    GetStrLen(pobjGCDefaConstantsEN.clsName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[类名(clsName)]的长度不能超过100(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.clsName}(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.updDate) == false &&
    GetStrLen(pobjGCDefaConstantsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.updDate}(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.updUser) == false &&
    GetStrLen(pobjGCDefaConstantsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.updUser}(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.memo) == false &&
    GetStrLen(pobjGCDefaConstantsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In GC常量(GCDefaConstants))!值:${pobjGCDefaConstantsEN.memo}(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.constId) == false &&
    undefined !== pobjGCDefaConstantsEN.constId &&
    tzDataType.isString(pobjGCDefaConstantsEN.constId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[常量Id(constId)]的值:[${pobjGCDefaConstantsEN.constId}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.constName) == false &&
    undefined !== pobjGCDefaConstantsEN.constName &&
    tzDataType.isString(pobjGCDefaConstantsEN.constName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[常量名(constName)]的值:[${pobjGCDefaConstantsEN.constName}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.constExpression) == false &&
    undefined !== pobjGCDefaConstantsEN.constExpression &&
    tzDataType.isString(pobjGCDefaConstantsEN.constExpression) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[常量表达式(constExpression)]的值:[${pobjGCDefaConstantsEN.constExpression}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.filePath) == false &&
    undefined !== pobjGCDefaConstantsEN.filePath &&
    tzDataType.isString(pobjGCDefaConstantsEN.filePath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[文件路径(filePath)]的值:[${pobjGCDefaConstantsEN.filePath}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.initValue) == false &&
    undefined !== pobjGCDefaConstantsEN.initValue &&
    tzDataType.isString(pobjGCDefaConstantsEN.initValue) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[初始值(initValue)]的值:[${pobjGCDefaConstantsEN.initValue}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.dataTypeId) == false &&
    undefined !== pobjGCDefaConstantsEN.dataTypeId &&
    tzDataType.isString(pobjGCDefaConstantsEN.dataTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据类型Id(dataTypeId)]的值:[${pobjGCDefaConstantsEN.dataTypeId}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.clsName) == false &&
    undefined !== pobjGCDefaConstantsEN.clsName &&
    tzDataType.isString(pobjGCDefaConstantsEN.clsName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[类名(clsName)]的值:[${pobjGCDefaConstantsEN.clsName}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.updDate) == false &&
    undefined !== pobjGCDefaConstantsEN.updDate &&
    tzDataType.isString(pobjGCDefaConstantsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjGCDefaConstantsEN.updDate}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.updUser) == false &&
    undefined !== pobjGCDefaConstantsEN.updUser &&
    tzDataType.isString(pobjGCDefaConstantsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjGCDefaConstantsEN.updUser}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.memo) == false &&
    undefined !== pobjGCDefaConstantsEN.memo &&
    tzDataType.isString(pobjGCDefaConstantsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjGCDefaConstantsEN.memo}], 非法,应该为字符型(In GC常量(GCDefaConstants))!(clsGCDefaConstantsBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjGCDefaConstantsEN.dataTypeId) == false &&
    pobjGCDefaConstantsEN.dataTypeId != '[nuull]' &&
    GetStrLen(pobjGCDefaConstantsEN.dataTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[数据类型Id]作为外键字段,长度应该为2(In GC常量)!(clsGCDefaConstantsBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GCDefaConstants_GetJSONStrByObj(
  pobjGCDefaConstantsEN: clsGCDefaConstantsEN,
): string {
  pobjGCDefaConstantsEN.sfUpdFldSetStr = pobjGCDefaConstantsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjGCDefaConstantsEN);
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
export function GCDefaConstants_GetObjLstByJSONStr(strJSON: string): Array<clsGCDefaConstantsEN> {
  let arrGCDefaConstantsObjLst = new Array<clsGCDefaConstantsEN>();
  if (strJSON === '') {
    return arrGCDefaConstantsObjLst;
  }
  try {
    arrGCDefaConstantsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrGCDefaConstantsObjLst;
  }
  return arrGCDefaConstantsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrGCDefaConstantsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function GCDefaConstants_GetObjLstByJSONObjLst(
  arrGCDefaConstantsObjLstS: Array<clsGCDefaConstantsEN>,
): Array<clsGCDefaConstantsEN> {
  const arrGCDefaConstantsObjLst = new Array<clsGCDefaConstantsEN>();
  for (const objInFor of arrGCDefaConstantsObjLstS) {
    const obj1 = GCDefaConstants_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrGCDefaConstantsObjLst.push(obj1);
  }
  return arrGCDefaConstantsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-07-05
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GCDefaConstants_GetObjByJSONStr(strJSON: string): clsGCDefaConstantsEN {
  let pobjGCDefaConstantsEN = new clsGCDefaConstantsEN();
  if (strJSON === '') {
    return pobjGCDefaConstantsEN;
  }
  try {
    pobjGCDefaConstantsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjGCDefaConstantsEN;
  }
  return pobjGCDefaConstantsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function GCDefaConstants_GetCombineCondition(
  objGCDefaConstantsCond: clsGCDefaConstantsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objGCDefaConstantsCond.dicFldComparisonOp,
      clsGCDefaConstantsEN.con_ConstId,
    ) == true
  ) {
    const strComparisonOpConstId: string =
      objGCDefaConstantsCond.dicFldComparisonOp[clsGCDefaConstantsEN.con_ConstId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCDefaConstantsEN.con_ConstId,
      objGCDefaConstantsCond.constId,
      strComparisonOpConstId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCDefaConstantsCond.dicFldComparisonOp,
      clsGCDefaConstantsEN.con_ConstName,
    ) == true
  ) {
    const strComparisonOpConstName: string =
      objGCDefaConstantsCond.dicFldComparisonOp[clsGCDefaConstantsEN.con_ConstName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCDefaConstantsEN.con_ConstName,
      objGCDefaConstantsCond.constName,
      strComparisonOpConstName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCDefaConstantsCond.dicFldComparisonOp,
      clsGCDefaConstantsEN.con_ConstExpression,
    ) == true
  ) {
    const strComparisonOpConstExpression: string =
      objGCDefaConstantsCond.dicFldComparisonOp[clsGCDefaConstantsEN.con_ConstExpression];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCDefaConstantsEN.con_ConstExpression,
      objGCDefaConstantsCond.constExpression,
      strComparisonOpConstExpression,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCDefaConstantsCond.dicFldComparisonOp,
      clsGCDefaConstantsEN.con_FilePath,
    ) == true
  ) {
    const strComparisonOpFilePath: string =
      objGCDefaConstantsCond.dicFldComparisonOp[clsGCDefaConstantsEN.con_FilePath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCDefaConstantsEN.con_FilePath,
      objGCDefaConstantsCond.filePath,
      strComparisonOpFilePath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCDefaConstantsCond.dicFldComparisonOp,
      clsGCDefaConstantsEN.con_InitValue,
    ) == true
  ) {
    const strComparisonOpInitValue: string =
      objGCDefaConstantsCond.dicFldComparisonOp[clsGCDefaConstantsEN.con_InitValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCDefaConstantsEN.con_InitValue,
      objGCDefaConstantsCond.initValue,
      strComparisonOpInitValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCDefaConstantsCond.dicFldComparisonOp,
      clsGCDefaConstantsEN.con_DataTypeId,
    ) == true
  ) {
    const strComparisonOpDataTypeId: string =
      objGCDefaConstantsCond.dicFldComparisonOp[clsGCDefaConstantsEN.con_DataTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCDefaConstantsEN.con_DataTypeId,
      objGCDefaConstantsCond.dataTypeId,
      strComparisonOpDataTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCDefaConstantsCond.dicFldComparisonOp,
      clsGCDefaConstantsEN.con_ClsName,
    ) == true
  ) {
    const strComparisonOpClsName: string =
      objGCDefaConstantsCond.dicFldComparisonOp[clsGCDefaConstantsEN.con_ClsName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCDefaConstantsEN.con_ClsName,
      objGCDefaConstantsCond.clsName,
      strComparisonOpClsName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCDefaConstantsCond.dicFldComparisonOp,
      clsGCDefaConstantsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objGCDefaConstantsCond.dicFldComparisonOp[clsGCDefaConstantsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCDefaConstantsEN.con_UpdDate,
      objGCDefaConstantsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCDefaConstantsCond.dicFldComparisonOp,
      clsGCDefaConstantsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objGCDefaConstantsCond.dicFldComparisonOp[clsGCDefaConstantsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCDefaConstantsEN.con_UpdUser,
      objGCDefaConstantsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCDefaConstantsCond.dicFldComparisonOp,
      clsGCDefaConstantsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objGCDefaConstantsCond.dicFldComparisonOp[clsGCDefaConstantsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCDefaConstantsEN.con_Memo,
      objGCDefaConstantsCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--GCDefaConstants(GC常量),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strConstName: 常量名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function GCDefaConstants_GetUniCondStr(objGCDefaConstantsEN: clsGCDefaConstantsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ConstName = '{0}'", objGCDefaConstantsEN.constName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--GCDefaConstants(GC常量),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strConstName: 常量名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function GCDefaConstants_GetUniCondStr4Update(
  objGCDefaConstantsEN: clsGCDefaConstantsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ConstId <> '{0}'", objGCDefaConstantsEN.constId);
  strWhereCond += Format(" and ConstName = '{0}'", objGCDefaConstantsEN.constName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objGCDefaConstantsENS:源对象
 * @param objGCDefaConstantsENT:目标对象
 */
export function GCDefaConstants_GetObjFromJsonObj(
  objGCDefaConstantsENS: clsGCDefaConstantsEN,
): clsGCDefaConstantsEN {
  const objGCDefaConstantsENT: clsGCDefaConstantsEN = new clsGCDefaConstantsEN();
  ObjectAssign(objGCDefaConstantsENT, objGCDefaConstantsENS);
  return objGCDefaConstantsENT;
}
