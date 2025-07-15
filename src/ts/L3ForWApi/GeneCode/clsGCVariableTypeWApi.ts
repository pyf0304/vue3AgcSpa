/**
 * 类名:clsGCVariableTypeWApi
 * 表名:GCVariableType(00050560)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:37
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
 * GC变量类型(GCVariableType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
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
import { gCVariableTypeCache, isFuncMapCache } from '@/views/GeneCode/GCVariableTypeVueShare';
import { clsGCVariableTypeENEx } from '@/ts/L0Entity/GeneCode/clsGCVariableTypeENEx';
import { clsGCVariableTypeEN } from '@/ts/L0Entity/GeneCode/clsGCVariableTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const gCVariableType_Controller = 'GCVariableTypeApi';
export const gCVariableType_ConstructorName = 'gCVariableType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strVarTypeId:关键字
 * @returns 对象
 **/
export async function GCVariableType_GetObjByVarTypeIdAsync(
  strVarTypeId: string,
): Promise<clsGCVariableTypeEN | null> {
  const strThisFuncName = 'GetObjByVarTypeIdAsync';

  if (IsNullOrEmpty(strVarTypeId) == true) {
    const strMsg = Format(
      '参数:[strVarTypeId]不能为空!(In clsGCVariableTypeWApi.GetObjByVarTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVarTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strVarTypeId]的长度:[{0}]不正确!(clsGCVariableTypeWApi.GetObjByVarTypeIdAsync)',
      strVarTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByVarTypeId';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVarTypeId,
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
      const objGCVariableType = GCVariableType_GetObjFromJsonObj(returnObj);
      return objGCVariableType;
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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
 * @param strVarTypeId:所给的关键字
 * @returns 对象
 */
export async function GCVariableType_GetObjByVarTypeIdlocalStorage(strVarTypeId: string) {
  const strThisFuncName = 'GetObjByVarTypeIdlocalStorage';

  if (IsNullOrEmpty(strVarTypeId) == true) {
    const strMsg = Format(
      '参数:[strVarTypeId]不能为空!(In clsGCVariableTypeWApi.GetObjByVarTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVarTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strVarTypeId]的长度:[{0}]不正确!(clsGCVariableTypeWApi.GetObjByVarTypeIdlocalStorage)',
      strVarTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsGCVariableTypeEN._CurrTabName, strVarTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objGCVariableTypeCache: clsGCVariableTypeEN = JSON.parse(strTempObj);
    return objGCVariableTypeCache;
  }
  try {
    const objGCVariableType = await GCVariableType_GetObjByVarTypeIdAsync(strVarTypeId);
    if (objGCVariableType != null) {
      localStorage.setItem(strKey, JSON.stringify(objGCVariableType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objGCVariableType;
    }
    return objGCVariableType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strVarTypeId,
      gCVariableType_ConstructorName,
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
 * @param strVarTypeId:所给的关键字
 * @returns 对象
 */
export async function GCVariableType_GetObjByVarTypeIdCache(
  strVarTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByVarTypeIdCache';

  if (IsNullOrEmpty(strVarTypeId) == true) {
    const strMsg = Format(
      '参数:[strVarTypeId]不能为空!(In clsGCVariableTypeWApi.GetObjByVarTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVarTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strVarTypeId]的长度:[{0}]不正确!(clsGCVariableTypeWApi.GetObjByVarTypeIdCache)',
      strVarTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrGCVariableTypeObjLstCache = await GCVariableType_GetObjLstCache();
  try {
    const arrGCVariableTypeSel = arrGCVariableTypeObjLstCache.filter(
      (x) => x.varTypeId == strVarTypeId,
    );
    let objGCVariableType: clsGCVariableTypeEN;
    if (arrGCVariableTypeSel.length > 0) {
      objGCVariableType = arrGCVariableTypeSel[0];
      return objGCVariableType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objGCVariableTypeConst = await GCVariableType_GetObjByVarTypeIdAsync(strVarTypeId);
        if (objGCVariableTypeConst != null) {
          GCVariableType_ReFreshThisCache();
          return objGCVariableTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strVarTypeId,
      gCVariableType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objGCVariableType:所给的对象
 * @returns 对象
 */
export async function GCVariableType_UpdateObjInLstCache(objGCVariableType: clsGCVariableTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrGCVariableTypeObjLstCache = await GCVariableType_GetObjLstCache();
    const obj = arrGCVariableTypeObjLstCache.find(
      (x) => x.varTypeName == objGCVariableType.varTypeName,
    );
    if (obj != null) {
      objGCVariableType.varTypeId = obj.varTypeId;
      ObjectAssign(obj, objGCVariableType);
    } else {
      arrGCVariableTypeObjLstCache.push(objGCVariableType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gCVariableType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
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
export function GCVariableType_SortFunDefa(a: clsGCVariableTypeEN, b: clsGCVariableTypeEN): number {
  return a.varTypeId.localeCompare(b.varTypeId);
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
export function GCVariableType_SortFunDefa2Fld(
  a: clsGCVariableTypeEN,
  b: clsGCVariableTypeEN,
): number {
  if (a.varTypeName == b.varTypeName) return a.varTypeENName.localeCompare(b.varTypeENName);
  else return a.varTypeName.localeCompare(b.varTypeName);
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
export function GCVariableType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCVariableTypeEN.con_VarTypeId:
        return (a: clsGCVariableTypeEN, b: clsGCVariableTypeEN) => {
          return a.varTypeId.localeCompare(b.varTypeId);
        };
      case clsGCVariableTypeEN.con_VarTypeName:
        return (a: clsGCVariableTypeEN, b: clsGCVariableTypeEN) => {
          return a.varTypeName.localeCompare(b.varTypeName);
        };
      case clsGCVariableTypeEN.con_VarTypeENName:
        return (a: clsGCVariableTypeEN, b: clsGCVariableTypeEN) => {
          return a.varTypeENName.localeCompare(b.varTypeENName);
        };
      case clsGCVariableTypeEN.con_VarTypeSimName:
        return (a: clsGCVariableTypeEN, b: clsGCVariableTypeEN) => {
          if (a.varTypeSimName == null) return -1;
          if (b.varTypeSimName == null) return 1;
          return a.varTypeSimName.localeCompare(b.varTypeSimName);
        };
      case clsGCVariableTypeEN.con_UpdDate:
        return (a: clsGCVariableTypeEN, b: clsGCVariableTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsGCVariableTypeEN.con_UpdUser:
        return (a: clsGCVariableTypeEN, b: clsGCVariableTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsGCVariableTypeEN.con_Memo:
        return (a: clsGCVariableTypeEN, b: clsGCVariableTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCVariableType]中不存在!(in ${gCVariableType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsGCVariableTypeEN.con_VarTypeId:
        return (a: clsGCVariableTypeEN, b: clsGCVariableTypeEN) => {
          return b.varTypeId.localeCompare(a.varTypeId);
        };
      case clsGCVariableTypeEN.con_VarTypeName:
        return (a: clsGCVariableTypeEN, b: clsGCVariableTypeEN) => {
          return b.varTypeName.localeCompare(a.varTypeName);
        };
      case clsGCVariableTypeEN.con_VarTypeENName:
        return (a: clsGCVariableTypeEN, b: clsGCVariableTypeEN) => {
          return b.varTypeENName.localeCompare(a.varTypeENName);
        };
      case clsGCVariableTypeEN.con_VarTypeSimName:
        return (a: clsGCVariableTypeEN, b: clsGCVariableTypeEN) => {
          if (b.varTypeSimName == null) return -1;
          if (a.varTypeSimName == null) return 1;
          return b.varTypeSimName.localeCompare(a.varTypeSimName);
        };
      case clsGCVariableTypeEN.con_UpdDate:
        return (a: clsGCVariableTypeEN, b: clsGCVariableTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsGCVariableTypeEN.con_UpdUser:
        return (a: clsGCVariableTypeEN, b: clsGCVariableTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsGCVariableTypeEN.con_Memo:
        return (a: clsGCVariableTypeEN, b: clsGCVariableTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCVariableType]中不存在!(in ${gCVariableType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strVarTypeId:所给的关键字
 * @returns 对象
 */
export async function GCVariableType_GetNameByVarTypeIdCache(strVarTypeId: string) {
  if (IsNullOrEmpty(strVarTypeId) == true) {
    const strMsg = Format(
      '参数:[strVarTypeId]不能为空!(In clsGCVariableTypeWApi.GetNameByVarTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVarTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strVarTypeId]的长度:[{0}]不正确!(clsGCVariableTypeWApi.GetNameByVarTypeIdCache)',
      strVarTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrGCVariableTypeObjLstCache = await GCVariableType_GetObjLstCache();
  if (arrGCVariableTypeObjLstCache == null) return '';
  try {
    const arrGCVariableTypeSel = arrGCVariableTypeObjLstCache.filter(
      (x) => x.varTypeId == strVarTypeId,
    );
    let objGCVariableType: clsGCVariableTypeEN;
    if (arrGCVariableTypeSel.length > 0) {
      objGCVariableType = arrGCVariableTypeSel[0];
      return objGCVariableType.varTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strVarTypeId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function GCVariableType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsGCVariableTypeEN.con_VarTypeId:
      return (obj: clsGCVariableTypeEN) => {
        return obj.varTypeId === value;
      };
    case clsGCVariableTypeEN.con_VarTypeName:
      return (obj: clsGCVariableTypeEN) => {
        return obj.varTypeName === value;
      };
    case clsGCVariableTypeEN.con_VarTypeENName:
      return (obj: clsGCVariableTypeEN) => {
        return obj.varTypeENName === value;
      };
    case clsGCVariableTypeEN.con_VarTypeSimName:
      return (obj: clsGCVariableTypeEN) => {
        return obj.varTypeSimName === value;
      };
    case clsGCVariableTypeEN.con_UpdDate:
      return (obj: clsGCVariableTypeEN) => {
        return obj.updDate === value;
      };
    case clsGCVariableTypeEN.con_UpdUser:
      return (obj: clsGCVariableTypeEN) => {
        return obj.updUser === value;
      };
    case clsGCVariableTypeEN.con_Memo:
      return (obj: clsGCVariableTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[GCVariableType]中不存在!(in ${gCVariableType_ConstructorName}.${strThisFuncName})`;
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
 * @returns 返回一个输出字段值
 */
export async function GCVariableType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsGCVariableTypeEN.con_VarTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsGCVariableTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsGCVariableTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strVarTypeId = strInValue;
  if (IsNullOrEmpty(strVarTypeId) == true) {
    return '';
  }
  const objGCVariableType = await GCVariableType_GetObjByVarTypeIdCache(strVarTypeId);
  if (objGCVariableType == null) return '';
  if (objGCVariableType.GetFldValue(strOutFldName) == null) return '';
  return objGCVariableType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function GCVariableType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsGCVariableTypeEN.con_VarTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrGCVariableType = await GCVariableType_GetObjLstCache();
  if (arrGCVariableType == null) return [];
  let arrGCVariableTypeSel = arrGCVariableType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrGCVariableTypeSel.length == 0) return [];
  return arrGCVariableTypeSel.map((x) => x.varTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCVariableType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
export async function GCVariableType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
export async function GCVariableType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
export async function GCVariableType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsGCVariableTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

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
      const objGCVariableType = GCVariableType_GetObjFromJsonObj(returnObj);
      return objGCVariableType;
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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
export async function GCVariableType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGCVariableTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsGCVariableTypeEN.WhereFormat) == false) {
    strWhereCond = clsGCVariableTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsGCVariableTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCVariableTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrGCVariableTypeExObjLstCache: Array<clsGCVariableTypeEN> = CacheHelper.Get(strKey);
    const arrGCVariableTypeObjLstT = GCVariableType_GetObjLstByJSONObjLst(
      arrGCVariableTypeExObjLstCache,
    );
    return arrGCVariableTypeObjLstT;
  }
  try {
    const arrGCVariableTypeExObjLst = await GCVariableType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrGCVariableTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCVariableTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrGCVariableTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCVariableType_ConstructorName,
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
export async function GCVariableType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGCVariableTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsGCVariableTypeEN.WhereFormat) == false) {
    strWhereCond = clsGCVariableTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsGCVariableTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCVariableTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGCVariableTypeExObjLstCache: Array<clsGCVariableTypeEN> = JSON.parse(strTempObjLst);
    const arrGCVariableTypeObjLstT = GCVariableType_GetObjLstByJSONObjLst(
      arrGCVariableTypeExObjLstCache,
    );
    return arrGCVariableTypeObjLstT;
  }
  try {
    const arrGCVariableTypeExObjLst = await GCVariableType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrGCVariableTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCVariableTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrGCVariableTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCVariableType_ConstructorName,
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
export async function GCVariableType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsGCVariableTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGCVariableTypeObjLstCache: Array<clsGCVariableTypeEN> = JSON.parse(strTempObjLst);
    return arrGCVariableTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function GCVariableType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsGCVariableTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

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
          gCVariableType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVariableType_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
export async function GCVariableType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGCVariableTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsGCVariableTypeEN.WhereFormat) == false) {
    strWhereCond = clsGCVariableTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsGCVariableTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCVariableTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGCVariableTypeExObjLstCache: Array<clsGCVariableTypeEN> = JSON.parse(strTempObjLst);
    const arrGCVariableTypeObjLstT = GCVariableType_GetObjLstByJSONObjLst(
      arrGCVariableTypeExObjLstCache,
    );
    return arrGCVariableTypeObjLstT;
  }
  try {
    const arrGCVariableTypeExObjLst = await GCVariableType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrGCVariableTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCVariableTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrGCVariableTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCVariableType_ConstructorName,
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
export async function GCVariableType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsGCVariableTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGCVariableTypeObjLstCache: Array<clsGCVariableTypeEN> = JSON.parse(strTempObjLst);
    return arrGCVariableTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GCVariableType_GetObjLstCache(): Promise<Array<clsGCVariableTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrGCVariableTypeObjLstCache;
  switch (clsGCVariableTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrGCVariableTypeObjLstCache = await GCVariableType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrGCVariableTypeObjLstCache = await GCVariableType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrGCVariableTypeObjLstCache = await GCVariableType_GetObjLstClientCache();
      break;
    default:
      arrGCVariableTypeObjLstCache = await GCVariableType_GetObjLstClientCache();
      break;
  }
  return arrGCVariableTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GCVariableType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrGCVariableTypeObjLstCache;
  switch (clsGCVariableTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrGCVariableTypeObjLstCache = await GCVariableType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrGCVariableTypeObjLstCache = await GCVariableType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrGCVariableTypeObjLstCache = null;
      break;
    default:
      arrGCVariableTypeObjLstCache = null;
      break;
  }
  return arrGCVariableTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrVarTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GCVariableType_GetSubObjLstCache(objGCVariableTypeCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrGCVariableTypeObjLstCache = await GCVariableType_GetObjLstCache();
  let arrGCVariableTypeSel = arrGCVariableTypeObjLstCache;
  if (objGCVariableTypeCond.GetConditions().length == 0) return arrGCVariableTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objGCVariableTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCVariableTypeSel = arrGCVariableTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrGCVariableTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGCVariableTypeCond),
      gCVariableType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCVariableTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrVarTypeId:关键字列表
 * @returns 对象列表
 **/
export async function GCVariableType_GetObjLstByVarTypeIdLstAsync(
  arrVarTypeId: Array<string>,
): Promise<Array<clsGCVariableTypeEN>> {
  const strThisFuncName = 'GetObjLstByVarTypeIdLstAsync';
  const strAction = 'GetObjLstByVarTypeIdLst';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrVarTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gCVariableType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVariableType_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
 * @param arrstrVarTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function GCVariableType_GetObjLstByVarTypeIdLstCache(arrVarTypeIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByVarTypeIdLstCache';
  try {
    const arrGCVariableTypeObjLstCache = await GCVariableType_GetObjLstCache();
    const arrGCVariableTypeSel = arrGCVariableTypeObjLstCache.filter(
      (x) => arrVarTypeIdLst.indexOf(x.varTypeId) > -1,
    );
    return arrGCVariableTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrVarTypeIdLst.join(','),
      gCVariableType_ConstructorName,
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
export async function GCVariableType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsGCVariableTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

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
          gCVariableType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVariableType_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
export async function GCVariableType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsGCVariableTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

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
          gCVariableType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVariableType_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
export async function GCVariableType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCVariableTypeEN>();
  const arrGCVariableTypeObjLstCache = await GCVariableType_GetObjLstCache();
  if (arrGCVariableTypeObjLstCache.length == 0) return arrGCVariableTypeObjLstCache;
  let arrGCVariableTypeSel = arrGCVariableTypeObjLstCache;
  const objGCVariableTypeCond = objPagerPara.conditionCollection;
  if (objGCVariableTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsGCVariableTypeEN>();
  }
  //console.log("clsGCVariableTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objGCVariableTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCVariableTypeSel = arrGCVariableTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCVariableTypeSel.length == 0) return arrGCVariableTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGCVariableTypeSel = arrGCVariableTypeSel.sort(
        GCVariableType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCVariableTypeSel = arrGCVariableTypeSel.sort(objPagerPara.sortFun);
    }
    arrGCVariableTypeSel = arrGCVariableTypeSel.slice(intStart, intEnd);
    return arrGCVariableTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCVariableType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCVariableTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function GCVariableType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCVariableTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCVariableTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

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
          gCVariableType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVariableType_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
 * @param strVarTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function GCVariableType_DelRecordAsync(strVarTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strVarTypeId);

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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
 * @param arrVarTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function GCVariableType_DelGCVariableTypesAsync(
  arrVarTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelGCVariableTypesAsync';
  const strAction = 'DelGCVariableTypes';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrVarTypeId, config);
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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
export async function GCVariableType_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCVariableTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrGCVariableTypeObjLst = await GCVariableType_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsGCVariableTypeENEx>();
  const arrGCVariableTypeExObjLst = arrGCVariableTypeObjLst.map((obj) => {
    const cacheKey = `${obj.varTypeId}`;
    if (gCVariableTypeCache[cacheKey]) {
      const oldObj = gCVariableTypeCache[cacheKey];
      return oldObj;
    } else {
      const newObj = GCVariableType_CopyToEx(obj);
      arrNewObj.push(newObj);
      gCVariableTypeCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await GCVariableType_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsGCVariableTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrGCVariableTypeExObjLst) {
      await GCVariableType_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.varTypeId}`;
      gCVariableTypeCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrGCVariableTypeExObjLst.length == 0) return arrGCVariableTypeExObjLst;
  let arrGCVariableTypeSel: Array<clsGCVariableTypeENEx> = arrGCVariableTypeExObjLst;
  const objGCVariableTypeCond = objPagerPara.conditionCollection;
  if (objGCVariableTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrGCVariableTypeExObjLst;
  }
  try {
    for (const objCondition of objGCVariableTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCVariableTypeSel = arrGCVariableTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCVariableTypeSel.length == 0) return arrGCVariableTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrGCVariableTypeSel = arrGCVariableTypeSel.sort(
        GCVariableType_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCVariableTypeSel = arrGCVariableTypeSel.sort(objPagerPara.sortFun);
    }
    arrGCVariableTypeSel = arrGCVariableTypeSel.slice(intStart, intEnd);
    return arrGCVariableTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCVariableType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCVariableTypeENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objGCVariableTypeENS:源对象
 * @returns 目标对象=>clsGCVariableTypeEN:objGCVariableTypeENT
 **/
export function GCVariableType_CopyToEx(
  objGCVariableTypeENS: clsGCVariableTypeEN,
): clsGCVariableTypeENEx {
  const strThisFuncName = GCVariableType_CopyToEx.name;
  const objGCVariableTypeENT = new clsGCVariableTypeENEx();
  try {
    ObjectAssign(objGCVariableTypeENT, objGCVariableTypeENS);
    return objGCVariableTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariableType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGCVariableTypeENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function GCVariableType_FuncMapByFldName(
  strFldName: string,
  objGCVariableTypeEx: clsGCVariableTypeENEx,
) {
  const strThisFuncName = GCVariableType_FuncMapByFldName.name;
  console.log(objGCVariableTypeEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsGCVariableTypeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCVariableType_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return GCVariableType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return GCVariableType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function GCVariableType_DelGCVariableTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelGCVariableTypesByCondAsync';
  const strAction = 'DelGCVariableTypesByCond';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
 * @param objGCVariableTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCVariableType_AddNewRecordAsync(
  objGCVariableTypeEN: clsGCVariableTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objGCVariableTypeEN);
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariableTypeEN, config);
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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
 * @param objGCVariableTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCVariableType_AddNewRecordWithMaxIdAsync(
  objGCVariableTypeEN: clsGCVariableTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariableTypeEN, config);
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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
export async function GCVariableType_AddNewObjSave(
  objGCVariableTypeEN: clsGCVariableTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    GCVariableType_CheckPropertyNew(objGCVariableTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gCVariableType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await GCVariableType_CheckUniCond4Add(objGCVariableTypeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await GCVariableType_AddNewRecordWithMaxIdAsync(objGCVariableTypeEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      GCVariableType_ReFreshCache();
    } else {
      const strInfo = `添加[GC变量类型(GCVariableType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${gCVariableType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function GCVariableType_CheckUniCond4Add(
  objGCVariableTypeEN: clsGCVariableTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = GCVariableType_GetUniCondStr(objGCVariableTypeEN);
  const bolIsExistCondition = await GCVariableType_IsExistRecordAsync(strUniquenessCondition);
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
export async function GCVariableType_CheckUniCond4Update(
  objGCVariableTypeEN: clsGCVariableTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = GCVariableType_GetUniCondStr4Update(objGCVariableTypeEN);
  const bolIsExistCondition = await GCVariableType_IsExistRecordAsync(strUniquenessCondition);
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
export async function GCVariableType_UpdateObjSave(
  objGCVariableTypeEN: clsGCVariableTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objGCVariableTypeEN.sfUpdFldSetStr = objGCVariableTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objGCVariableTypeEN.varTypeId == '' || objGCVariableTypeEN.varTypeId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    GCVariableType_CheckProperty4Update(objGCVariableTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gCVariableType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await GCVariableType_CheckUniCond4Update(objGCVariableTypeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await GCVariableType_UpdateRecordAsync(objGCVariableTypeEN);
    if (returnBool == true) {
      GCVariableType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${gCVariableType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objGCVariableTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function GCVariableType_AddNewRecordWithReturnKeyAsync(
  objGCVariableTypeEN: clsGCVariableTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariableTypeEN, config);
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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
 * @param objGCVariableTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCVariableType_UpdateRecordAsync(
  objGCVariableTypeEN: clsGCVariableTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objGCVariableTypeEN.sfUpdFldSetStr === undefined ||
    objGCVariableTypeEN.sfUpdFldSetStr === null ||
    objGCVariableTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCVariableTypeEN.varTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariableTypeEN, config);
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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
 * @param objGCVariableTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCVariableType_EditRecordExAsync(
  objGCVariableTypeEN: clsGCVariableTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objGCVariableTypeEN.sfUpdFldSetStr === undefined ||
    objGCVariableTypeEN.sfUpdFldSetStr === null ||
    objGCVariableTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCVariableTypeEN.varTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariableTypeEN, config);
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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
 * @param objGCVariableTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCVariableType_UpdateWithConditionAsync(
  objGCVariableTypeEN: clsGCVariableTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objGCVariableTypeEN.sfUpdFldSetStr === undefined ||
    objGCVariableTypeEN.sfUpdFldSetStr === null ||
    objGCVariableTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCVariableTypeEN.varTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);
  objGCVariableTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariableTypeEN, config);
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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
 * @param objstrVarTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GCVariableType_IsExistRecordCache(
  objGCVariableTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrGCVariableTypeObjLstCache = await GCVariableType_GetObjLstCache();
  if (arrGCVariableTypeObjLstCache == null) return false;
  let arrGCVariableTypeSel = arrGCVariableTypeObjLstCache;
  if (objGCVariableTypeCond.GetConditions().length == 0)
    return arrGCVariableTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objGCVariableTypeCond.GetConditions()) {
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
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCVariableTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objGCVariableTypeCond),
      gCVariableType_ConstructorName,
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
export async function GCVariableType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
 * @param strVarTypeId:所给的关键字
 * @returns 对象
 */
export async function GCVariableType_IsExistCache(strVarTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrGCVariableTypeObjLstCache = await GCVariableType_GetObjLstCache();
  if (arrGCVariableTypeObjLstCache == null) return false;
  try {
    const arrGCVariableTypeSel = arrGCVariableTypeObjLstCache.filter(
      (x) => x.varTypeId == strVarTypeId,
    );
    if (arrGCVariableTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strVarTypeId,
      gCVariableType_ConstructorName,
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
 * @param strVarTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function GCVariableType_IsExistAsync(strVarTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVarTypeId,
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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
export async function GCVariableType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
 * @param objGCVariableTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function GCVariableType_GetRecCountByCondCache(
  objGCVariableTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrGCVariableTypeObjLstCache = await GCVariableType_GetObjLstCache();
  if (arrGCVariableTypeObjLstCache == null) return 0;
  let arrGCVariableTypeSel = arrGCVariableTypeObjLstCache;
  if (objGCVariableTypeCond.GetConditions().length == 0) return arrGCVariableTypeSel.length;
  try {
    for (const objCondition of objGCVariableTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCVariableTypeSel = arrGCVariableTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCVariableTypeSel = arrGCVariableTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrGCVariableTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGCVariableTypeCond),
      gCVariableType_ConstructorName,
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
export async function GCVariableType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
export async function GCVariableType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gCVariableType_Controller, strAction);

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
        gCVariableType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariableType_ConstructorName,
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
export function GCVariableType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function GCVariableType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsGCVariableTypeEN._CurrTabName;
  switch (clsGCVariableTypeEN.CacheModeId) {
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
  clsGCVariableTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function GCVariableType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsGCVariableTypeEN._CurrTabName;
    switch (clsGCVariableTypeEN.CacheModeId) {
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
    clsGCVariableTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function GCVariableType_GetLastRefreshTime(): string {
  if (clsGCVariableTypeEN._RefreshTimeLst.length == 0) return '';
  return clsGCVariableTypeEN._RefreshTimeLst[clsGCVariableTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function GCVariableType_BindDdl_VarTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_VarTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_VarTypeIdInDivCache");
  const arrObjLstSel = await GCVariableType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsGCVariableTypeEN.con_VarTypeId,
    clsGCVariableTypeEN.con_VarTypeName,
    'GC变量类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function GCVariableType_GetArrGCVariableType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_VarTypeIdInDivCache");
  const arrGCVariableType = new Array<clsGCVariableTypeEN>();
  const arrObjLstSel = await GCVariableType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsGCVariableTypeEN();
  obj0.varTypeId = '0';
  obj0.varTypeName = '选gC变量类型...';
  arrGCVariableType.push(obj0);
  arrObjLstSel.forEach((x) => arrGCVariableType.push(x));
  return arrGCVariableType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCVariableType_CheckPropertyNew(pobjGCVariableTypeEN: clsGCVariableTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjGCVariableTypeEN.varTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[变量类型名]不能为空(In GC变量类型)!(clsGCVariableTypeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjGCVariableTypeEN.varTypeENName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[变量类型英文名]不能为空(In GC变量类型)!(clsGCVariableTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeId) == false &&
    GetStrLen(pobjGCVariableTypeEN.varTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量类型Id(varTypeId)]的长度不能超过4(In GC变量类型(GCVariableType))!值:${pobjGCVariableTypeEN.varTypeId}(clsGCVariableTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeName) == false &&
    GetStrLen(pobjGCVariableTypeEN.varTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量类型名(varTypeName)]的长度不能超过50(In GC变量类型(GCVariableType))!值:${pobjGCVariableTypeEN.varTypeName}(clsGCVariableTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeENName) == false &&
    GetStrLen(pobjGCVariableTypeEN.varTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量类型英文名(varTypeENName)]的长度不能超过50(In GC变量类型(GCVariableType))!值:${pobjGCVariableTypeEN.varTypeENName}(clsGCVariableTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeSimName) == false &&
    GetStrLen(pobjGCVariableTypeEN.varTypeSimName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量类型简名(varTypeSimName)]的长度不能超过50(In GC变量类型(GCVariableType))!值:${pobjGCVariableTypeEN.varTypeSimName}(clsGCVariableTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.updDate) == false &&
    GetStrLen(pobjGCVariableTypeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In GC变量类型(GCVariableType))!值:${pobjGCVariableTypeEN.updDate}(clsGCVariableTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.updUser) == false &&
    GetStrLen(pobjGCVariableTypeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In GC变量类型(GCVariableType))!值:${pobjGCVariableTypeEN.updUser}(clsGCVariableTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.memo) == false &&
    GetStrLen(pobjGCVariableTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In GC变量类型(GCVariableType))!值:${pobjGCVariableTypeEN.memo}(clsGCVariableTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeId) == false &&
    undefined !== pobjGCVariableTypeEN.varTypeId &&
    tzDataType.isString(pobjGCVariableTypeEN.varTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量类型Id(varTypeId)]的值:[${pobjGCVariableTypeEN.varTypeId}], 非法,应该为字符型(In GC变量类型(GCVariableType))!(clsGCVariableTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeName) == false &&
    undefined !== pobjGCVariableTypeEN.varTypeName &&
    tzDataType.isString(pobjGCVariableTypeEN.varTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量类型名(varTypeName)]的值:[${pobjGCVariableTypeEN.varTypeName}], 非法,应该为字符型(In GC变量类型(GCVariableType))!(clsGCVariableTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeENName) == false &&
    undefined !== pobjGCVariableTypeEN.varTypeENName &&
    tzDataType.isString(pobjGCVariableTypeEN.varTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量类型英文名(varTypeENName)]的值:[${pobjGCVariableTypeEN.varTypeENName}], 非法,应该为字符型(In GC变量类型(GCVariableType))!(clsGCVariableTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeSimName) == false &&
    undefined !== pobjGCVariableTypeEN.varTypeSimName &&
    tzDataType.isString(pobjGCVariableTypeEN.varTypeSimName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量类型简名(varTypeSimName)]的值:[${pobjGCVariableTypeEN.varTypeSimName}], 非法,应该为字符型(In GC变量类型(GCVariableType))!(clsGCVariableTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.updDate) == false &&
    undefined !== pobjGCVariableTypeEN.updDate &&
    tzDataType.isString(pobjGCVariableTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjGCVariableTypeEN.updDate}], 非法,应该为字符型(In GC变量类型(GCVariableType))!(clsGCVariableTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.updUser) == false &&
    undefined !== pobjGCVariableTypeEN.updUser &&
    tzDataType.isString(pobjGCVariableTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjGCVariableTypeEN.updUser}], 非法,应该为字符型(In GC变量类型(GCVariableType))!(clsGCVariableTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.memo) == false &&
    undefined !== pobjGCVariableTypeEN.memo &&
    tzDataType.isString(pobjGCVariableTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjGCVariableTypeEN.memo}], 非法,应该为字符型(In GC变量类型(GCVariableType))!(clsGCVariableTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCVariableType_CheckProperty4Update(pobjGCVariableTypeEN: clsGCVariableTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeId) == false &&
    GetStrLen(pobjGCVariableTypeEN.varTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量类型Id(varTypeId)]的长度不能超过4(In GC变量类型(GCVariableType))!值:${pobjGCVariableTypeEN.varTypeId}(clsGCVariableTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeName) == false &&
    GetStrLen(pobjGCVariableTypeEN.varTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量类型名(varTypeName)]的长度不能超过50(In GC变量类型(GCVariableType))!值:${pobjGCVariableTypeEN.varTypeName}(clsGCVariableTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeENName) == false &&
    GetStrLen(pobjGCVariableTypeEN.varTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量类型英文名(varTypeENName)]的长度不能超过50(In GC变量类型(GCVariableType))!值:${pobjGCVariableTypeEN.varTypeENName}(clsGCVariableTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeSimName) == false &&
    GetStrLen(pobjGCVariableTypeEN.varTypeSimName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量类型简名(varTypeSimName)]的长度不能超过50(In GC变量类型(GCVariableType))!值:${pobjGCVariableTypeEN.varTypeSimName}(clsGCVariableTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.updDate) == false &&
    GetStrLen(pobjGCVariableTypeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In GC变量类型(GCVariableType))!值:${pobjGCVariableTypeEN.updDate}(clsGCVariableTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.updUser) == false &&
    GetStrLen(pobjGCVariableTypeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In GC变量类型(GCVariableType))!值:${pobjGCVariableTypeEN.updUser}(clsGCVariableTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.memo) == false &&
    GetStrLen(pobjGCVariableTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In GC变量类型(GCVariableType))!值:${pobjGCVariableTypeEN.memo}(clsGCVariableTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeId) == false &&
    undefined !== pobjGCVariableTypeEN.varTypeId &&
    tzDataType.isString(pobjGCVariableTypeEN.varTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量类型Id(varTypeId)]的值:[${pobjGCVariableTypeEN.varTypeId}], 非法,应该为字符型(In GC变量类型(GCVariableType))!(clsGCVariableTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeName) == false &&
    undefined !== pobjGCVariableTypeEN.varTypeName &&
    tzDataType.isString(pobjGCVariableTypeEN.varTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量类型名(varTypeName)]的值:[${pobjGCVariableTypeEN.varTypeName}], 非法,应该为字符型(In GC变量类型(GCVariableType))!(clsGCVariableTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeENName) == false &&
    undefined !== pobjGCVariableTypeEN.varTypeENName &&
    tzDataType.isString(pobjGCVariableTypeEN.varTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量类型英文名(varTypeENName)]的值:[${pobjGCVariableTypeEN.varTypeENName}], 非法,应该为字符型(In GC变量类型(GCVariableType))!(clsGCVariableTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.varTypeSimName) == false &&
    undefined !== pobjGCVariableTypeEN.varTypeSimName &&
    tzDataType.isString(pobjGCVariableTypeEN.varTypeSimName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量类型简名(varTypeSimName)]的值:[${pobjGCVariableTypeEN.varTypeSimName}], 非法,应该为字符型(In GC变量类型(GCVariableType))!(clsGCVariableTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.updDate) == false &&
    undefined !== pobjGCVariableTypeEN.updDate &&
    tzDataType.isString(pobjGCVariableTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjGCVariableTypeEN.updDate}], 非法,应该为字符型(In GC变量类型(GCVariableType))!(clsGCVariableTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.updUser) == false &&
    undefined !== pobjGCVariableTypeEN.updUser &&
    tzDataType.isString(pobjGCVariableTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjGCVariableTypeEN.updUser}], 非法,应该为字符型(In GC变量类型(GCVariableType))!(clsGCVariableTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableTypeEN.memo) == false &&
    undefined !== pobjGCVariableTypeEN.memo &&
    tzDataType.isString(pobjGCVariableTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjGCVariableTypeEN.memo}], 非法,应该为字符型(In GC变量类型(GCVariableType))!(clsGCVariableTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GCVariableType_GetJSONStrByObj(pobjGCVariableTypeEN: clsGCVariableTypeEN): string {
  pobjGCVariableTypeEN.sfUpdFldSetStr = pobjGCVariableTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjGCVariableTypeEN);
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
export function GCVariableType_GetObjLstByJSONStr(strJSON: string): Array<clsGCVariableTypeEN> {
  let arrGCVariableTypeObjLst = new Array<clsGCVariableTypeEN>();
  if (strJSON === '') {
    return arrGCVariableTypeObjLst;
  }
  try {
    arrGCVariableTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrGCVariableTypeObjLst;
  }
  return arrGCVariableTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrGCVariableTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function GCVariableType_GetObjLstByJSONObjLst(
  arrGCVariableTypeObjLstS: Array<clsGCVariableTypeEN>,
): Array<clsGCVariableTypeEN> {
  const arrGCVariableTypeObjLst = new Array<clsGCVariableTypeEN>();
  for (const objInFor of arrGCVariableTypeObjLstS) {
    const obj1 = GCVariableType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrGCVariableTypeObjLst.push(obj1);
  }
  return arrGCVariableTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GCVariableType_GetObjByJSONStr(strJSON: string): clsGCVariableTypeEN {
  let pobjGCVariableTypeEN = new clsGCVariableTypeEN();
  if (strJSON === '') {
    return pobjGCVariableTypeEN;
  }
  try {
    pobjGCVariableTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjGCVariableTypeEN;
  }
  return pobjGCVariableTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function GCVariableType_GetCombineCondition(
  objGCVariableTypeCond: clsGCVariableTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableTypeCond.dicFldComparisonOp,
      clsGCVariableTypeEN.con_VarTypeId,
    ) == true
  ) {
    const strComparisonOpVarTypeId: string =
      objGCVariableTypeCond.dicFldComparisonOp[clsGCVariableTypeEN.con_VarTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableTypeEN.con_VarTypeId,
      objGCVariableTypeCond.varTypeId,
      strComparisonOpVarTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableTypeCond.dicFldComparisonOp,
      clsGCVariableTypeEN.con_VarTypeName,
    ) == true
  ) {
    const strComparisonOpVarTypeName: string =
      objGCVariableTypeCond.dicFldComparisonOp[clsGCVariableTypeEN.con_VarTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableTypeEN.con_VarTypeName,
      objGCVariableTypeCond.varTypeName,
      strComparisonOpVarTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableTypeCond.dicFldComparisonOp,
      clsGCVariableTypeEN.con_VarTypeENName,
    ) == true
  ) {
    const strComparisonOpVarTypeENName: string =
      objGCVariableTypeCond.dicFldComparisonOp[clsGCVariableTypeEN.con_VarTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableTypeEN.con_VarTypeENName,
      objGCVariableTypeCond.varTypeENName,
      strComparisonOpVarTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableTypeCond.dicFldComparisonOp,
      clsGCVariableTypeEN.con_VarTypeSimName,
    ) == true
  ) {
    const strComparisonOpVarTypeSimName: string =
      objGCVariableTypeCond.dicFldComparisonOp[clsGCVariableTypeEN.con_VarTypeSimName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableTypeEN.con_VarTypeSimName,
      objGCVariableTypeCond.varTypeSimName,
      strComparisonOpVarTypeSimName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableTypeCond.dicFldComparisonOp,
      clsGCVariableTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objGCVariableTypeCond.dicFldComparisonOp[clsGCVariableTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableTypeEN.con_UpdDate,
      objGCVariableTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableTypeCond.dicFldComparisonOp,
      clsGCVariableTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objGCVariableTypeCond.dicFldComparisonOp[clsGCVariableTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableTypeEN.con_UpdUser,
      objGCVariableTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableTypeCond.dicFldComparisonOp,
      clsGCVariableTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objGCVariableTypeCond.dicFldComparisonOp[clsGCVariableTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableTypeEN.con_Memo,
      objGCVariableTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--GCVariableType(GC变量类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strVarTypeName: 变量类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function GCVariableType_GetUniCondStr(objGCVariableTypeEN: clsGCVariableTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and VarTypeName = '{0}'", objGCVariableTypeEN.varTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--GCVariableType(GC变量类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strVarTypeName: 变量类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function GCVariableType_GetUniCondStr4Update(
  objGCVariableTypeEN: clsGCVariableTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and VarTypeId <> '{0}'", objGCVariableTypeEN.varTypeId);
  strWhereCond += Format(" and VarTypeName = '{0}'", objGCVariableTypeEN.varTypeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objGCVariableTypeENS:源对象
 * @param objGCVariableTypeENT:目标对象
 */
export function GCVariableType_GetObjFromJsonObj(
  objGCVariableTypeENS: clsGCVariableTypeEN,
): clsGCVariableTypeEN {
  const objGCVariableTypeENT: clsGCVariableTypeEN = new clsGCVariableTypeEN();
  ObjectAssign(objGCVariableTypeENT, objGCVariableTypeENS);
  return objGCVariableTypeENT;
}
