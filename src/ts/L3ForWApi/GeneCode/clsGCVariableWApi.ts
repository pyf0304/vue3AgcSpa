/**
 * 类名:clsGCVariableWApi
 * 表名:GCVariable(00050559)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/18 00:20:52
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
 * GC变量(GCVariable)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月18日.
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
import { gCVariableCache, isFuncMapCache } from '@/views/GeneCode/GCVariableVueShare';
import { clsGCVariableENEx } from '@/ts/L0Entity/GeneCode/clsGCVariableENEx';
import { clsGCVariableEN } from '@/ts/L0Entity/GeneCode/clsGCVariableEN';
import { GCVariableType_func } from '@/ts/L3ForWApi/GeneCode/clsGCVariableTypeWApi';
import { clsGCVariableTypeEN } from '@/ts/L0Entity/GeneCode/clsGCVariableTypeEN';
import { DataTypeAbbr_func } from '@/ts/L3ForWApi/SysPara/clsDataTypeAbbrWApi';
import { clsDataTypeAbbrEN } from '@/ts/L0Entity/SysPara/clsDataTypeAbbrEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';

export const gCVariable_Controller = 'GCVariableApi';
export const gCVariable_ConstructorName = 'gCVariable';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strVarId:关键字
 * @returns 对象
 **/
export async function GCVariable_GetObjByVarIdAsync(
  strVarId: string,
): Promise<clsGCVariableEN | null> {
  const strThisFuncName = 'GetObjByVarIdAsync';

  if (IsNullOrEmpty(strVarId) == true) {
    const strMsg = Format('参数:[strVarId]不能为空!(In clsGCVariableWApi.GetObjByVarIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strVarId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strVarId]的长度:[{0}]不正确!(clsGCVariableWApi.GetObjByVarIdAsync)',
      strVarId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByVarId';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVarId,
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
      const objGCVariable = GCVariable_GetObjFromJsonObj(returnObj);
      return objGCVariable;
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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
 * @param strVarId:所给的关键字
 * @returns 对象
 */
export async function GCVariable_GetObjByVarIdlocalStorage(strVarId: string) {
  const strThisFuncName = 'GetObjByVarIdlocalStorage';

  if (IsNullOrEmpty(strVarId) == true) {
    const strMsg = Format(
      '参数:[strVarId]不能为空!(In clsGCVariableWApi.GetObjByVarIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVarId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strVarId]的长度:[{0}]不正确!(clsGCVariableWApi.GetObjByVarIdlocalStorage)',
      strVarId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsGCVariableEN._CurrTabName, strVarId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objGCVariableCache: clsGCVariableEN = JSON.parse(strTempObj);
    return objGCVariableCache;
  }
  try {
    const objGCVariable = await GCVariable_GetObjByVarIdAsync(strVarId);
    if (objGCVariable != null) {
      localStorage.setItem(strKey, JSON.stringify(objGCVariable));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objGCVariable;
    }
    return objGCVariable;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strVarId,
      gCVariable_ConstructorName,
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
 * @param strVarId:所给的关键字
 * @returns 对象
 */
export async function GCVariable_GetObjByVarIdCache(strVarId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByVarIdCache';

  if (IsNullOrEmpty(strVarId) == true) {
    const strMsg = Format('参数:[strVarId]不能为空!(In clsGCVariableWApi.GetObjByVarIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strVarId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strVarId]的长度:[{0}]不正确!(clsGCVariableWApi.GetObjByVarIdCache)',
      strVarId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrGCVariableObjLstCache = await GCVariable_GetObjLstCache();
  try {
    const arrGCVariableSel = arrGCVariableObjLstCache.filter((x) => x.varId == strVarId);
    let objGCVariable: clsGCVariableEN;
    if (arrGCVariableSel.length > 0) {
      objGCVariable = arrGCVariableSel[0];
      return objGCVariable;
    } else {
      if (bolTryAsyncOnce == true) {
        const objGCVariableConst = await GCVariable_GetObjByVarIdAsync(strVarId);
        if (objGCVariableConst != null) {
          GCVariable_ReFreshThisCache();
          return objGCVariableConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strVarId,
      gCVariable_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objGCVariable:所给的对象
 * @returns 对象
 */
export async function GCVariable_UpdateObjInLstCache(objGCVariable: clsGCVariableEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrGCVariableObjLstCache = await GCVariable_GetObjLstCache();
    const obj = arrGCVariableObjLstCache.find(
      (x) => x.varName == objGCVariable.varName && x.varTypeId == objGCVariable.varTypeId,
    );
    if (obj != null) {
      objGCVariable.varId = obj.varId;
      ObjectAssign(obj, objGCVariable);
    } else {
      arrGCVariableObjLstCache.push(objGCVariable);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gCVariable_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCVariable_SortFunDefa(a: clsGCVariableEN, b: clsGCVariableEN): number {
  return a.varId.localeCompare(b.varId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCVariable_SortFunDefa2Fld(a: clsGCVariableEN, b: clsGCVariableEN): number {
  if (a.varName == b.varName) return a.varExpression.localeCompare(b.varExpression);
  else return a.varName.localeCompare(b.varName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCVariable_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCVariableEN.con_VarId:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          return a.varId.localeCompare(b.varId);
        };
      case clsGCVariableEN.con_VarName:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          return a.varName.localeCompare(b.varName);
        };
      case clsGCVariableEN.con_VarExpression:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          return a.varExpression.localeCompare(b.varExpression);
        };
      case clsGCVariableEN.con_FilePath:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (a.filePath == null) return -1;
          if (b.filePath == null) return 1;
          return a.filePath.localeCompare(b.filePath);
        };
      case clsGCVariableEN.con_InitValue:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (a.initValue == null) return -1;
          if (b.initValue == null) return 1;
          return a.initValue.localeCompare(b.initValue);
        };
      case clsGCVariableEN.con_VarTypeId:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          return a.varTypeId.localeCompare(b.varTypeId);
        };
      case clsGCVariableEN.con_DataTypeId:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          return a.dataTypeId.localeCompare(b.dataTypeId);
        };
      case clsGCVariableEN.con_VariableType:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (a.variableType == null) return -1;
          if (b.variableType == null) return 1;
          return a.variableType.localeCompare(b.variableType);
        };
      case clsGCVariableEN.con_VariableTypeFullName:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (a.variableTypeFullName == null) return -1;
          if (b.variableTypeFullName == null) return 1;
          return a.variableTypeFullName.localeCompare(b.variableTypeFullName);
        };
      case clsGCVariableEN.con_ClsName:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (a.clsName == null) return -1;
          if (b.clsName == null) return 1;
          return a.clsName.localeCompare(b.clsName);
        };
      case clsGCVariableEN.con_UpdDate:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsGCVariableEN.con_UpdUser:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsGCVariableEN.con_Memo:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCVariable]中不存在!(in ${gCVariable_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsGCVariableEN.con_VarId:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          return b.varId.localeCompare(a.varId);
        };
      case clsGCVariableEN.con_VarName:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          return b.varName.localeCompare(a.varName);
        };
      case clsGCVariableEN.con_VarExpression:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          return b.varExpression.localeCompare(a.varExpression);
        };
      case clsGCVariableEN.con_FilePath:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (b.filePath == null) return -1;
          if (a.filePath == null) return 1;
          return b.filePath.localeCompare(a.filePath);
        };
      case clsGCVariableEN.con_InitValue:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (b.initValue == null) return -1;
          if (a.initValue == null) return 1;
          return b.initValue.localeCompare(a.initValue);
        };
      case clsGCVariableEN.con_VarTypeId:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          return b.varTypeId.localeCompare(a.varTypeId);
        };
      case clsGCVariableEN.con_DataTypeId:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          return b.dataTypeId.localeCompare(a.dataTypeId);
        };
      case clsGCVariableEN.con_VariableType:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (b.variableType == null) return -1;
          if (a.variableType == null) return 1;
          return b.variableType.localeCompare(a.variableType);
        };
      case clsGCVariableEN.con_VariableTypeFullName:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (b.variableTypeFullName == null) return -1;
          if (a.variableTypeFullName == null) return 1;
          return b.variableTypeFullName.localeCompare(a.variableTypeFullName);
        };
      case clsGCVariableEN.con_ClsName:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (b.clsName == null) return -1;
          if (a.clsName == null) return 1;
          return b.clsName.localeCompare(a.clsName);
        };
      case clsGCVariableEN.con_UpdDate:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsGCVariableEN.con_UpdUser:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsGCVariableEN.con_Memo:
        return (a: clsGCVariableEN, b: clsGCVariableEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCVariable]中不存在!(in ${gCVariable_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strVarId:所给的关键字
 * @returns 对象
 */
export async function GCVariable_GetNameByVarIdCache(strVarId: string) {
  if (IsNullOrEmpty(strVarId) == true) {
    const strMsg = Format('参数:[strVarId]不能为空!(In clsGCVariableWApi.GetNameByVarIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strVarId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strVarId]的长度:[{0}]不正确!(clsGCVariableWApi.GetNameByVarIdCache)',
      strVarId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrGCVariableObjLstCache = await GCVariable_GetObjLstCache();
  if (arrGCVariableObjLstCache == null) return '';
  try {
    const arrGCVariableSel = arrGCVariableObjLstCache.filter((x) => x.varId == strVarId);
    let objGCVariable: clsGCVariableEN;
    if (arrGCVariableSel.length > 0) {
      objGCVariable = arrGCVariableSel[0];
      return objGCVariable.varName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strVarId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function GCVariable_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsGCVariableEN.con_VarId:
      return (obj: clsGCVariableEN) => {
        return obj.varId === value;
      };
    case clsGCVariableEN.con_VarName:
      return (obj: clsGCVariableEN) => {
        return obj.varName === value;
      };
    case clsGCVariableEN.con_VarExpression:
      return (obj: clsGCVariableEN) => {
        return obj.varExpression === value;
      };
    case clsGCVariableEN.con_FilePath:
      return (obj: clsGCVariableEN) => {
        return obj.filePath === value;
      };
    case clsGCVariableEN.con_InitValue:
      return (obj: clsGCVariableEN) => {
        return obj.initValue === value;
      };
    case clsGCVariableEN.con_VarTypeId:
      return (obj: clsGCVariableEN) => {
        return obj.varTypeId === value;
      };
    case clsGCVariableEN.con_DataTypeId:
      return (obj: clsGCVariableEN) => {
        return obj.dataTypeId === value;
      };
    case clsGCVariableEN.con_VariableType:
      return (obj: clsGCVariableEN) => {
        return obj.variableType === value;
      };
    case clsGCVariableEN.con_VariableTypeFullName:
      return (obj: clsGCVariableEN) => {
        return obj.variableTypeFullName === value;
      };
    case clsGCVariableEN.con_ClsName:
      return (obj: clsGCVariableEN) => {
        return obj.clsName === value;
      };
    case clsGCVariableEN.con_UpdDate:
      return (obj: clsGCVariableEN) => {
        return obj.updDate === value;
      };
    case clsGCVariableEN.con_UpdUser:
      return (obj: clsGCVariableEN) => {
        return obj.updUser === value;
      };
    case clsGCVariableEN.con_Memo:
      return (obj: clsGCVariableEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[GCVariable]中不存在!(in ${gCVariable_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function GCVariable_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsGCVariableEN.con_VarId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsGCVariableEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsGCVariableEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strVarId = strInValue;
  if (IsNullOrEmpty(strVarId) == true) {
    return '';
  }
  const objGCVariable = await GCVariable_GetObjByVarIdCache(strVarId);
  if (objGCVariable == null) return '';
  if (objGCVariable.GetFldValue(strOutFldName) == null) return '';
  return objGCVariable.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function GCVariable_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsGCVariableEN.con_VarId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrGCVariable = await GCVariable_GetObjLstCache();
  if (arrGCVariable == null) return [];
  let arrGCVariableSel = arrGCVariable;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrGCVariableSel = arrGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrGCVariableSel = arrGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrGCVariableSel = arrGCVariableSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrGCVariableSel = arrGCVariableSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrGCVariableSel = arrGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrGCVariableSel = arrGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrGCVariableSel = arrGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrGCVariableSel = arrGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrGCVariableSel = arrGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrGCVariableSel = arrGCVariableSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrGCVariableSel.length == 0) return [];
  return arrGCVariableSel.map((x) => x.varId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCVariable_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
export async function GCVariable_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
export async function GCVariable_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
export async function GCVariable_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsGCVariableEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

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
      const objGCVariable = GCVariable_GetObjFromJsonObj(returnObj);
      return objGCVariable;
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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
export async function GCVariable_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGCVariableEN._CurrTabName;
  if (IsNullOrEmpty(clsGCVariableEN.WhereFormat) == false) {
    strWhereCond = clsGCVariableEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsGCVariableEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCVariableEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrGCVariableExObjLstCache: Array<clsGCVariableEN> = CacheHelper.Get(strKey);
    const arrGCVariableObjLstT = GCVariable_GetObjLstByJSONObjLst(arrGCVariableExObjLstCache);
    return arrGCVariableObjLstT;
  }
  try {
    const arrGCVariableExObjLst = await GCVariable_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrGCVariableExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCVariableExObjLst.length,
    );
    console.log(strInfo);
    return arrGCVariableExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCVariable_ConstructorName,
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
export async function GCVariable_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGCVariableEN._CurrTabName;
  if (IsNullOrEmpty(clsGCVariableEN.WhereFormat) == false) {
    strWhereCond = clsGCVariableEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsGCVariableEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCVariableEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGCVariableExObjLstCache: Array<clsGCVariableEN> = JSON.parse(strTempObjLst);
    const arrGCVariableObjLstT = GCVariable_GetObjLstByJSONObjLst(arrGCVariableExObjLstCache);
    return arrGCVariableObjLstT;
  }
  try {
    const arrGCVariableExObjLst = await GCVariable_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrGCVariableExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCVariableExObjLst.length,
    );
    console.log(strInfo);
    return arrGCVariableExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCVariable_ConstructorName,
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
export async function GCVariable_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsGCVariableEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGCVariableObjLstCache: Array<clsGCVariableEN> = JSON.parse(strTempObjLst);
    return arrGCVariableObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function GCVariable_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsGCVariableEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

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
          gCVariable_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVariable_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
export async function GCVariable_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGCVariableEN._CurrTabName;
  if (IsNullOrEmpty(clsGCVariableEN.WhereFormat) == false) {
    strWhereCond = clsGCVariableEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsGCVariableEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCVariableEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGCVariableExObjLstCache: Array<clsGCVariableEN> = JSON.parse(strTempObjLst);
    const arrGCVariableObjLstT = GCVariable_GetObjLstByJSONObjLst(arrGCVariableExObjLstCache);
    return arrGCVariableObjLstT;
  }
  try {
    const arrGCVariableExObjLst = await GCVariable_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrGCVariableExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCVariableExObjLst.length,
    );
    console.log(strInfo);
    return arrGCVariableExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCVariable_ConstructorName,
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
export async function GCVariable_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsGCVariableEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGCVariableObjLstCache: Array<clsGCVariableEN> = JSON.parse(strTempObjLst);
    return arrGCVariableObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GCVariable_GetObjLstCache(): Promise<Array<clsGCVariableEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrGCVariableObjLstCache;
  switch (clsGCVariableEN.CacheModeId) {
    case '04': //sessionStorage
      arrGCVariableObjLstCache = await GCVariable_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrGCVariableObjLstCache = await GCVariable_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrGCVariableObjLstCache = await GCVariable_GetObjLstClientCache();
      break;
    default:
      arrGCVariableObjLstCache = await GCVariable_GetObjLstClientCache();
      break;
  }
  return arrGCVariableObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GCVariable_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrGCVariableObjLstCache;
  switch (clsGCVariableEN.CacheModeId) {
    case '04': //sessionStorage
      arrGCVariableObjLstCache = await GCVariable_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrGCVariableObjLstCache = await GCVariable_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrGCVariableObjLstCache = null;
      break;
    default:
      arrGCVariableObjLstCache = null;
      break;
  }
  return arrGCVariableObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrVarIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GCVariable_GetSubObjLstCache(objGCVariableCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrGCVariableObjLstCache = await GCVariable_GetObjLstCache();
  let arrGCVariableSel = arrGCVariableObjLstCache;
  if (objGCVariableCond.GetConditions().length == 0) return arrGCVariableSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objGCVariableCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrGCVariableSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGCVariableCond),
      gCVariable_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCVariableEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrVarId:关键字列表
 * @returns 对象列表
 **/
export async function GCVariable_GetObjLstByVarIdLstAsync(
  arrVarId: Array<string>,
): Promise<Array<clsGCVariableEN>> {
  const strThisFuncName = 'GetObjLstByVarIdLstAsync';
  const strAction = 'GetObjLstByVarIdLst';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrVarId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gCVariable_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVariable_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
 * @param arrstrVarIdLst:关键字列表
 * @returns 对象列表
 */
export async function GCVariable_GetObjLstByVarIdLstCache(arrVarIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByVarIdLstCache';
  try {
    const arrGCVariableObjLstCache = await GCVariable_GetObjLstCache();
    const arrGCVariableSel = arrGCVariableObjLstCache.filter(
      (x) => arrVarIdLst.indexOf(x.varId) > -1,
    );
    return arrGCVariableSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrVarIdLst.join(','),
      gCVariable_ConstructorName,
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
export async function GCVariable_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsGCVariableEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

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
          gCVariable_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVariable_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
export async function GCVariable_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsGCVariableEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

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
          gCVariable_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVariable_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
export async function GCVariable_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCVariableEN>();
  const arrGCVariableObjLstCache = await GCVariable_GetObjLstCache();
  if (arrGCVariableObjLstCache.length == 0) return arrGCVariableObjLstCache;
  let arrGCVariableSel = arrGCVariableObjLstCache;
  const objGCVariableCond = objPagerPara.conditionCollection;
  if (objGCVariableCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsGCVariableEN>();
  }
  //console.log("clsGCVariableWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objGCVariableCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrGCVariableSel.length == 0) return arrGCVariableSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGCVariableSel = arrGCVariableSel.sort(GCVariable_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCVariableSel = arrGCVariableSel.sort(objPagerPara.sortFun);
    }
    arrGCVariableSel = arrGCVariableSel.slice(intStart, intEnd);
    return arrGCVariableSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCVariable_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCVariableEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function GCVariable_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCVariableEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCVariableEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

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
          gCVariable_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCVariable_GetObjLstByJSONObjLst(returnObjLst);
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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
 * @param strVarId:关键字
 * @returns 获取删除的结果
 **/
export async function GCVariable_DelRecordAsync(strVarId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gCVariable_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strVarId);

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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
 * @param arrVarId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function GCVariable_DelGCVariablesAsync(arrVarId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelGCVariablesAsync';
  const strAction = 'DelGCVariables';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrVarId, config);
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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
export async function GCVariable_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCVariableENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrGCVariableObjLst = await GCVariable_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsGCVariableENEx>();
  const arrGCVariableExObjLst = arrGCVariableObjLst.map((obj) => {
    const cacheKey = `${obj.varId}`;
    if (gCVariableCache[cacheKey]) {
      const oldObj = gCVariableCache[cacheKey];
      return oldObj;
    } else {
      const newObj = GCVariable_CopyToEx(obj);
      arrNewObj.push(newObj);
      gCVariableCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await GCVariable_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsGCVariableEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrGCVariableExObjLst) {
      await GCVariable_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.varId}`;
      gCVariableCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrGCVariableExObjLst.length == 0) return arrGCVariableExObjLst;
  let arrGCVariableSel: Array<clsGCVariableENEx> = arrGCVariableExObjLst;
  const objGCVariableCond = objPagerPara.conditionCollection;
  if (objGCVariableCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrGCVariableExObjLst;
  }
  try {
    for (const objCondition of objGCVariableCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrGCVariableSel.length == 0) return arrGCVariableSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrGCVariableSel = arrGCVariableSel.sort(
        GCVariable_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCVariableSel = arrGCVariableSel.sort(objPagerPara.sortFun);
    }
    arrGCVariableSel = arrGCVariableSel.slice(intStart, intEnd);
    return arrGCVariableSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCVariable_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCVariableENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objGCVariableENS:源对象
 * @returns 目标对象=>clsGCVariableEN:objGCVariableENT
 **/
export function GCVariable_CopyToEx(objGCVariableENS: clsGCVariableEN): clsGCVariableENEx {
  const strThisFuncName = GCVariable_CopyToEx.name;
  const objGCVariableENT = new clsGCVariableENEx();
  try {
    ObjectAssign(objGCVariableENT, objGCVariableENS);
    return objGCVariableENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariable_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGCVariableENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function GCVariable_FuncMapByFldName(
  strFldName: string,
  objGCVariableEx: clsGCVariableENEx,
) {
  const strThisFuncName = GCVariable_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsGCVariableEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsGCVariableENEx.con_VarTypeName:
      return GCVariable_FuncMapVarTypeName(objGCVariableEx);
    // case clsGCVariableENEx.con_VarExpressionEx:
    //   return GCVariable_FuncMapVarExpressionEx(objGCVariableEx);
    case clsGCVariableENEx.con_DataTypeName:
      return GCVariable_FuncMapDataTypeName(objGCVariableEx);
    case clsGCVariableENEx.con_DuFilePath:
      return GCVariable_FuncMapDuFilePath(objGCVariableEx);
    case clsGCVariableENEx.con_DuClassName:
      return GCVariable_FuncMapDuClassName(objGCVariableEx);
    case clsGCVariableENEx.con_DuDataTypeName:
      return GCVariable_FuncMapDuDataTypeName(objGCVariableEx);
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
 * 日期:2025-06-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCVariable_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCVariableENEx.con_VarTypeName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          if (a.varTypeName === null && b.varTypeName === null) return 0;
          if (a.varTypeName === null) return -1;
          if (b.varTypeName === null) return 1;
          return a.varTypeName.localeCompare(b.varTypeName);
        };
      case clsGCVariableENEx.con_VarNameEx:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          if (a.varNameEx === null && b.varNameEx === null) return 0;
          if (a.varNameEx === null) return -1;
          if (b.varNameEx === null) return 1;
          return a.varNameEx.localeCompare(b.varNameEx);
        };
      case clsGCVariableENEx.con_VarExpressionEx:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          if (a.varExpressionEx === null && b.varExpressionEx === null) return 0;
          if (a.varExpressionEx === null) return -1;
          if (b.varExpressionEx === null) return 1;
          return a.varExpressionEx.localeCompare(b.varExpressionEx);
        };
      case clsGCVariableENEx.con_PrjName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsGCVariableENEx.con_DataTypeName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return -1;
          if (b.dataTypeName === null) return 1;
          return a.dataTypeName.localeCompare(b.dataTypeName);
        };
      case clsGCVariableENEx.con_DuFilePath:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return a.duFilePath.localeCompare(b.duFilePath);
        };
      case clsGCVariableENEx.con_DuClassName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return a.duClassName.localeCompare(b.duClassName);
        };
      case clsGCVariableENEx.con_DuDataTypeName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          if (a.duDataTypeName === null && b.duDataTypeName === null) return 0;
          if (a.duDataTypeName === null) return -1;
          if (b.duDataTypeName === null) return 1;
          return a.duDataTypeName.localeCompare(b.duDataTypeName);
        };
      case clsGCVariableENEx.con_PrjId:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsGCVariableENEx.con_PrjIdBak:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return a.prjIdBak.localeCompare(b.prjIdBak);
        };
      default:
        return GCVariable_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsGCVariableENEx.con_VarTypeName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          if (a.varTypeName === null && b.varTypeName === null) return 0;
          if (a.varTypeName === null) return 1;
          if (b.varTypeName === null) return -1;
          return b.varTypeName.localeCompare(a.varTypeName);
        };
      case clsGCVariableENEx.con_VarNameEx:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          if (a.varNameEx === null && b.varNameEx === null) return 0;
          if (a.varNameEx === null) return 1;
          if (b.varNameEx === null) return -1;
          return b.varNameEx.localeCompare(a.varNameEx);
        };
      case clsGCVariableENEx.con_VarExpressionEx:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          if (a.varExpressionEx === null && b.varExpressionEx === null) return 0;
          if (a.varExpressionEx === null) return 1;
          if (b.varExpressionEx === null) return -1;
          return b.varExpressionEx.localeCompare(a.varExpressionEx);
        };
      case clsGCVariableENEx.con_PrjName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsGCVariableENEx.con_DataTypeName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          if (a.dataTypeName === null && b.dataTypeName === null) return 0;
          if (a.dataTypeName === null) return 1;
          if (b.dataTypeName === null) return -1;
          return b.dataTypeName.localeCompare(a.dataTypeName);
        };
      case clsGCVariableENEx.con_DuFilePath:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return b.duFilePath.localeCompare(a.duFilePath);
        };
      case clsGCVariableENEx.con_DuClassName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return b.duClassName.localeCompare(a.duClassName);
        };
      case clsGCVariableENEx.con_DuDataTypeName:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          if (a.duDataTypeName === null && b.duDataTypeName === null) return 0;
          if (a.duDataTypeName === null) return 1;
          if (b.duDataTypeName === null) return -1;
          return b.duDataTypeName.localeCompare(a.duDataTypeName);
        };
      case clsGCVariableENEx.con_PrjId:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsGCVariableENEx.con_PrjIdBak:
        return (a: clsGCVariableENEx, b: clsGCVariableENEx) => {
          return b.prjIdBak.localeCompare(a.prjIdBak);
        };
      default:
        return GCVariable_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCVariableS:源对象
 **/
export async function GCVariable_FuncMapVarTypeName(objGCVariable: clsGCVariableENEx) {
  const strThisFuncName = GCVariable_FuncMapVarTypeName.name;
  try {
    if (IsNullOrEmpty(objGCVariable.varTypeName) == true) {
      const GCVariableTypeVarTypeId = objGCVariable.varTypeId;
      const GCVariableTypeVarTypeName = await GCVariableType_func(
        clsGCVariableTypeEN.con_VarTypeId,
        clsGCVariableTypeEN.con_VarTypeName,
        GCVariableTypeVarTypeId,
      );
      objGCVariable.varTypeName = GCVariableTypeVarTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001362)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariable_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCVariableS:源对象
 **/
export async function GCVariable_FuncMapDataTypeName(objGCVariable: clsGCVariableENEx) {
  const strThisFuncName = GCVariable_FuncMapDataTypeName.name;
  try {
    if (IsNullOrEmpty(objGCVariable.dataTypeName) == true) {
      const DataTypeAbbrDataTypeId = objGCVariable.dataTypeId;
      const DataTypeAbbrDataTypeName = await DataTypeAbbr_func(
        clsDataTypeAbbrEN.con_DataTypeId,
        clsDataTypeAbbrEN.con_DataTypeName,
        DataTypeAbbrDataTypeId,
      );
      objGCVariable.dataTypeName = DataTypeAbbrDataTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001349)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariable_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 显示一个字段的单元信息
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCVariableS:源对象
 **/
export async function GCVariable_FuncMapDuClassName(objGCVariable: clsGCVariableENEx) {
  const strThisFuncName = GCVariable_FuncMapDuClassName.name;
  try {
    if (IsNullOrEmpty(objGCVariable.duClassName) == true) {
      const spnCurr = GetSpan_Empty('col-form-label text-right');
      const spnStyle_Title = GetSpan_Empty('text-secondary font-weight-bold'); //;
      spnStyle_Title.innerHTML = '类名';
      const spnStyle_Content = GetSpan_Empty('text-black'); //; await css_StyleEx_GetHtmlElementByStyleId(objCss_FldDispUnitStyle.styleId_Content, strContent);
      spnStyle_Content.innerHTML = objGCVariable.clsName;
      spnCurr.innerHTML = Format('{0}:{1}', spnStyle_Title.outerHTML, spnStyle_Content.outerHTML);
      objGCVariable.duClassName = spnCurr.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001363)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariable_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 显示一个字段的单元信息
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCVariableS:源对象
 **/
export async function GCVariable_FuncMapDuFilePath(objGCVariable: clsGCVariableENEx) {
  const strThisFuncName = GCVariable_FuncMapDuFilePath.name;
  try {
    if (IsNullOrEmpty(objGCVariable.duFilePath) == true) {
      const spnCurr = GetSpan_Empty('col-form-label text-right');
      const spnStyle_Title = GetSpan_Empty('text-secondary font-weight-bold'); //;
      spnStyle_Title.innerHTML = '文件路径';
      const spnStyle_Content = GetSpan_Empty('text-black'); //; await css_StyleEx_GetHtmlElementByStyleId(objCss_FldDispUnitStyle.styleId_Content, strContent);
      spnStyle_Content.innerHTML = objGCVariable.filePath;
      spnCurr.innerHTML = Format(
        '{0}<br/>{1}',
        spnStyle_Title.outerHTML,
        spnStyle_Content.outerHTML,
      );
      objGCVariable.duFilePath = spnCurr.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001364)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariable_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 显示一个字段的单元信息
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objGCVariableS:源对象
 **/
export async function GCVariable_FuncMapDuDataTypeName(objGCVariable: clsGCVariableENEx) {
  const strThisFuncName = GCVariable_FuncMapDuDataTypeName.name;
  try {
    if (IsNullOrEmpty(objGCVariable.duDataTypeName) == true) {
      if (IsNullOrEmpty(objGCVariable.dataTypeName) == true) {
        await GCVariable_FuncMapDataTypeName(objGCVariable);
      }
      const spnCurr = GetSpan_Empty('text-info col-form-label-sm');
      const spnStyle_Title = GetSpan_Empty('text-danger font-weight-bold'); //;
      spnStyle_Title.innerHTML = '数据类型名称';
      const spnStyle_Content = GetSpan_Empty('text-muted'); //; await css_StyleEx_GetHtmlElementByStyleId(objCss_FldDispUnitStyle.styleId_Content, strContent);
      spnStyle_Content.innerHTML = objGCVariable.dataTypeName;
      spnCurr.innerHTML = Format('{0}:{1}', spnStyle_Title.outerHTML, spnStyle_Content.outerHTML);
      objGCVariable.duDataTypeName = spnCurr.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001365)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCVariable_ConstructorName,
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
export async function GCVariable_DelGCVariablesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelGCVariablesByCondAsync';
  const strAction = 'DelGCVariablesByCond';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
 * @param objGCVariableEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCVariable_AddNewRecordAsync(
  objGCVariableEN: clsGCVariableEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objGCVariableEN);
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariableEN, config);
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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
 * @param objGCVariableEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCVariable_AddNewRecordWithMaxIdAsync(
  objGCVariableEN: clsGCVariableEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariableEN, config);
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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
export async function GCVariable_AddNewObjSave(
  objGCVariableEN: clsGCVariableEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    GCVariable_CheckPropertyNew(objGCVariableEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gCVariable_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await GCVariable_CheckUniCond4Add(objGCVariableEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await GCVariable_AddNewRecordWithMaxIdAsync(objGCVariableEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      GCVariable_ReFreshCache();
    } else {
      const strInfo = `添加[GC变量(GCVariable)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${gCVariable_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function GCVariable_CheckUniCond4Add(
  objGCVariableEN: clsGCVariableEN,
): Promise<boolean> {
  const strUniquenessCondition = GCVariable_GetUniCondStr(objGCVariableEN);
  const bolIsExistCondition = await GCVariable_IsExistRecordAsync(strUniquenessCondition);
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
export async function GCVariable_CheckUniCond4Update(
  objGCVariableEN: clsGCVariableEN,
): Promise<boolean> {
  const strUniquenessCondition = GCVariable_GetUniCondStr4Update(objGCVariableEN);
  const bolIsExistCondition = await GCVariable_IsExistRecordAsync(strUniquenessCondition);
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
export async function GCVariable_UpdateObjSave(objGCVariableEN: clsGCVariableEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objGCVariableEN.sfUpdFldSetStr = objGCVariableEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objGCVariableEN.varId == '' || objGCVariableEN.varId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    GCVariable_CheckProperty4Update(objGCVariableEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gCVariable_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await GCVariable_CheckUniCond4Update(objGCVariableEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await GCVariable_UpdateRecordAsync(objGCVariableEN);
    if (returnBool == true) {
      GCVariable_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${gCVariable_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objGCVariableEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function GCVariable_AddNewRecordWithReturnKeyAsync(
  objGCVariableEN: clsGCVariableEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariableEN, config);
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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
 * @param objGCVariableEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCVariable_UpdateRecordAsync(
  objGCVariableEN: clsGCVariableEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objGCVariableEN.sfUpdFldSetStr === undefined ||
    objGCVariableEN.sfUpdFldSetStr === null ||
    objGCVariableEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objGCVariableEN.varId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariableEN, config);
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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
 * @param objGCVariableEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCVariable_EditRecordExAsync(
  objGCVariableEN: clsGCVariableEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objGCVariableEN.sfUpdFldSetStr === undefined ||
    objGCVariableEN.sfUpdFldSetStr === null ||
    objGCVariableEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objGCVariableEN.varId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariableEN, config);
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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
 * @param objGCVariableEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCVariable_UpdateWithConditionAsync(
  objGCVariableEN: clsGCVariableEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objGCVariableEN.sfUpdFldSetStr === undefined ||
    objGCVariableEN.sfUpdFldSetStr === null ||
    objGCVariableEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objGCVariableEN.varId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);
  objGCVariableEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCVariableEN, config);
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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
 * @param objstrVarIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GCVariable_IsExistRecordCache(objGCVariableCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrGCVariableObjLstCache = await GCVariable_GetObjLstCache();
  if (arrGCVariableObjLstCache == null) return false;
  let arrGCVariableSel = arrGCVariableObjLstCache;
  if (objGCVariableCond.GetConditions().length == 0)
    return arrGCVariableSel.length > 0 ? true : false;
  try {
    for (const objCondition of objGCVariableCond.GetConditions()) {
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
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrGCVariableSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objGCVariableCond),
      gCVariable_ConstructorName,
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
export async function GCVariable_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
 * @param strVarId:所给的关键字
 * @returns 对象
 */
export async function GCVariable_IsExistCache(strVarId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrGCVariableObjLstCache = await GCVariable_GetObjLstCache();
  if (arrGCVariableObjLstCache == null) return false;
  try {
    const arrGCVariableSel = arrGCVariableObjLstCache.filter((x) => x.varId == strVarId);
    if (arrGCVariableSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strVarId,
      gCVariable_ConstructorName,
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
 * @param strVarId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function GCVariable_IsExistAsync(strVarId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVarId,
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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
export async function GCVariable_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
 * @param objGCVariableCond:条件对象
 * @returns 对象列表记录数
 */
export async function GCVariable_GetRecCountByCondCache(objGCVariableCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrGCVariableObjLstCache = await GCVariable_GetObjLstCache();
  if (arrGCVariableObjLstCache == null) return 0;
  let arrGCVariableSel = arrGCVariableObjLstCache;
  if (objGCVariableCond.GetConditions().length == 0) return arrGCVariableSel.length;
  try {
    for (const objCondition of objGCVariableCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGCVariableSel = arrGCVariableSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrGCVariableSel = arrGCVariableSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrGCVariableSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGCVariableCond),
      gCVariable_ConstructorName,
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
export async function GCVariable_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
export async function GCVariable_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gCVariable_Controller, strAction);

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
        gCVariable_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCVariable_ConstructorName,
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
export function GCVariable_GetWebApiUrl(strController: string, strAction: string): string {
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
export function GCVariable_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsGCVariableEN._CurrTabName;
  switch (clsGCVariableEN.CacheModeId) {
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
  clsGCVariableEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function GCVariable_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsGCVariableEN._CurrTabName;
    switch (clsGCVariableEN.CacheModeId) {
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
    clsGCVariableEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function GCVariable_GetLastRefreshTime(): string {
  if (clsGCVariableEN._RefreshTimeLst.length == 0) return '';
  return clsGCVariableEN._RefreshTimeLst[clsGCVariableEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function GCVariable_BindDdl_VarIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_VarIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_VarIdInDivCache");
  const arrObjLstSel = await GCVariable_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsGCVariableEN.con_VarId,
    clsGCVariableEN.con_VarName,
    '选变量...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function GCVariable_GetArrGCVariable() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_VarIdInDivCache");
  const arrGCVariable = new Array<clsGCVariableEN>();
  const arrObjLstSel = await GCVariable_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsGCVariableEN();
  obj0.varId = '0';
  obj0.varName = '选变量...';
  arrGCVariable.push(obj0);
  arrObjLstSel.forEach((x) => arrGCVariable.push(x));
  return arrGCVariable;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCVariable_CheckPropertyNew(pobjGCVariableEN: clsGCVariableEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjGCVariableEN.varName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[变量名]不能为空(In GC变量)!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjGCVariableEN.varExpression) === true) {
    throw new Error(
      `(errid:Watl000411)字段[变量表达式]不能为空(In GC变量)!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.varTypeId) === true ||
    pobjGCVariableEN.varTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[变量类型Id]不能为空(In GC变量)!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.dataTypeId) === true ||
    pobjGCVariableEN.dataTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[数据类型Id]不能为空(In GC变量)!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjGCVariableEN.varId) == false && GetStrLen(pobjGCVariableEN.varId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[变量Id(varId)]的长度不能超过8(In GC变量(GCVariable))!值:${pobjGCVariableEN.varId}(clsGCVariableBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.varName) == false &&
    GetStrLen(pobjGCVariableEN.varName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量名(varName)]的长度不能超过50(In GC变量(GCVariable))!值:${pobjGCVariableEN.varName}(clsGCVariableBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.varExpression) == false &&
    GetStrLen(pobjGCVariableEN.varExpression) > 150
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量表达式(varExpression)]的长度不能超过150(In GC变量(GCVariable))!值:${pobjGCVariableEN.varExpression}(clsGCVariableBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.filePath) == false &&
    GetStrLen(pobjGCVariableEN.filePath) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[文件路径(filePath)]的长度不能超过500(In GC变量(GCVariable))!值:${pobjGCVariableEN.filePath}(clsGCVariableBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.initValue) == false &&
    GetStrLen(pobjGCVariableEN.initValue) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[初始值(initValue)]的长度不能超过1000(In GC变量(GCVariable))!值:${pobjGCVariableEN.initValue}(clsGCVariableBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.varTypeId) == false &&
    GetStrLen(pobjGCVariableEN.varTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量类型Id(varTypeId)]的长度不能超过4(In GC变量(GCVariable))!值:${pobjGCVariableEN.varTypeId}(clsGCVariableBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.dataTypeId) == false &&
    GetStrLen(pobjGCVariableEN.dataTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据类型Id(dataTypeId)]的长度不能超过2(In GC变量(GCVariable))!值:${pobjGCVariableEN.dataTypeId}(clsGCVariableBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.variableType) == false &&
    GetStrLen(pobjGCVariableEN.variableType) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量类型(variableType)]的长度不能超过100(In GC变量(GCVariable))!值:${pobjGCVariableEN.variableType}(clsGCVariableBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.variableTypeFullName) == false &&
    GetStrLen(pobjGCVariableEN.variableTypeFullName) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量类型全名(variableTypeFullName)]的长度不能超过500(In GC变量(GCVariable))!值:${pobjGCVariableEN.variableTypeFullName}(clsGCVariableBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.clsName) == false &&
    GetStrLen(pobjGCVariableEN.clsName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[类名(clsName)]的长度不能超过100(In GC变量(GCVariable))!值:${pobjGCVariableEN.clsName}(clsGCVariableBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.updDate) == false &&
    GetStrLen(pobjGCVariableEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In GC变量(GCVariable))!值:${pobjGCVariableEN.updDate}(clsGCVariableBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.updUser) == false &&
    GetStrLen(pobjGCVariableEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In GC变量(GCVariable))!值:${pobjGCVariableEN.updUser}(clsGCVariableBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjGCVariableEN.memo) == false && GetStrLen(pobjGCVariableEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In GC变量(GCVariable))!值:${pobjGCVariableEN.memo}(clsGCVariableBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCVariableEN.varId) == false &&
    undefined !== pobjGCVariableEN.varId &&
    tzDataType.isString(pobjGCVariableEN.varId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量Id(varId)]的值:[${pobjGCVariableEN.varId}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.varName) == false &&
    undefined !== pobjGCVariableEN.varName &&
    tzDataType.isString(pobjGCVariableEN.varName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量名(varName)]的值:[${pobjGCVariableEN.varName}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.varExpression) == false &&
    undefined !== pobjGCVariableEN.varExpression &&
    tzDataType.isString(pobjGCVariableEN.varExpression) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量表达式(varExpression)]的值:[${pobjGCVariableEN.varExpression}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.filePath) == false &&
    undefined !== pobjGCVariableEN.filePath &&
    tzDataType.isString(pobjGCVariableEN.filePath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[文件路径(filePath)]的值:[${pobjGCVariableEN.filePath}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.initValue) == false &&
    undefined !== pobjGCVariableEN.initValue &&
    tzDataType.isString(pobjGCVariableEN.initValue) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[初始值(initValue)]的值:[${pobjGCVariableEN.initValue}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.varTypeId) == false &&
    undefined !== pobjGCVariableEN.varTypeId &&
    tzDataType.isString(pobjGCVariableEN.varTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量类型Id(varTypeId)]的值:[${pobjGCVariableEN.varTypeId}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.dataTypeId) == false &&
    undefined !== pobjGCVariableEN.dataTypeId &&
    tzDataType.isString(pobjGCVariableEN.dataTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据类型Id(dataTypeId)]的值:[${pobjGCVariableEN.dataTypeId}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.variableType) == false &&
    undefined !== pobjGCVariableEN.variableType &&
    tzDataType.isString(pobjGCVariableEN.variableType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量类型(variableType)]的值:[${pobjGCVariableEN.variableType}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.variableTypeFullName) == false &&
    undefined !== pobjGCVariableEN.variableTypeFullName &&
    tzDataType.isString(pobjGCVariableEN.variableTypeFullName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量类型全名(variableTypeFullName)]的值:[${pobjGCVariableEN.variableTypeFullName}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.clsName) == false &&
    undefined !== pobjGCVariableEN.clsName &&
    tzDataType.isString(pobjGCVariableEN.clsName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[类名(clsName)]的值:[${pobjGCVariableEN.clsName}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.updDate) == false &&
    undefined !== pobjGCVariableEN.updDate &&
    tzDataType.isString(pobjGCVariableEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjGCVariableEN.updDate}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.updUser) == false &&
    undefined !== pobjGCVariableEN.updUser &&
    tzDataType.isString(pobjGCVariableEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjGCVariableEN.updUser}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.memo) == false &&
    undefined !== pobjGCVariableEN.memo &&
    tzDataType.isString(pobjGCVariableEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjGCVariableEN.memo}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjGCVariableEN.dataTypeId) == false &&
    pobjGCVariableEN.dataTypeId != '[nuull]' &&
    GetStrLen(pobjGCVariableEN.dataTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[数据类型Id]作为外键字段,长度应该为2(In GC变量)!(clsGCVariableBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCVariable_CheckProperty4Update(pobjGCVariableEN: clsGCVariableEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjGCVariableEN.varId) == false && GetStrLen(pobjGCVariableEN.varId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[变量Id(varId)]的长度不能超过8(In GC变量(GCVariable))!值:${pobjGCVariableEN.varId}(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.varName) == false &&
    GetStrLen(pobjGCVariableEN.varName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量名(varName)]的长度不能超过50(In GC变量(GCVariable))!值:${pobjGCVariableEN.varName}(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.varExpression) == false &&
    GetStrLen(pobjGCVariableEN.varExpression) > 150
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量表达式(varExpression)]的长度不能超过150(In GC变量(GCVariable))!值:${pobjGCVariableEN.varExpression}(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.filePath) == false &&
    GetStrLen(pobjGCVariableEN.filePath) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[文件路径(filePath)]的长度不能超过500(In GC变量(GCVariable))!值:${pobjGCVariableEN.filePath}(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.initValue) == false &&
    GetStrLen(pobjGCVariableEN.initValue) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[初始值(initValue)]的长度不能超过1000(In GC变量(GCVariable))!值:${pobjGCVariableEN.initValue}(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.varTypeId) == false &&
    GetStrLen(pobjGCVariableEN.varTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量类型Id(varTypeId)]的长度不能超过4(In GC变量(GCVariable))!值:${pobjGCVariableEN.varTypeId}(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.dataTypeId) == false &&
    GetStrLen(pobjGCVariableEN.dataTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据类型Id(dataTypeId)]的长度不能超过2(In GC变量(GCVariable))!值:${pobjGCVariableEN.dataTypeId}(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.variableType) == false &&
    GetStrLen(pobjGCVariableEN.variableType) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量类型(variableType)]的长度不能超过100(In GC变量(GCVariable))!值:${pobjGCVariableEN.variableType}(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.variableTypeFullName) == false &&
    GetStrLen(pobjGCVariableEN.variableTypeFullName) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量类型全名(variableTypeFullName)]的长度不能超过500(In GC变量(GCVariable))!值:${pobjGCVariableEN.variableTypeFullName}(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.clsName) == false &&
    GetStrLen(pobjGCVariableEN.clsName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[类名(clsName)]的长度不能超过100(In GC变量(GCVariable))!值:${pobjGCVariableEN.clsName}(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.updDate) == false &&
    GetStrLen(pobjGCVariableEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In GC变量(GCVariable))!值:${pobjGCVariableEN.updDate}(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.updUser) == false &&
    GetStrLen(pobjGCVariableEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In GC变量(GCVariable))!值:${pobjGCVariableEN.updUser}(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjGCVariableEN.memo) == false && GetStrLen(pobjGCVariableEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In GC变量(GCVariable))!值:${pobjGCVariableEN.memo}(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCVariableEN.varId) == false &&
    undefined !== pobjGCVariableEN.varId &&
    tzDataType.isString(pobjGCVariableEN.varId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量Id(varId)]的值:[${pobjGCVariableEN.varId}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.varName) == false &&
    undefined !== pobjGCVariableEN.varName &&
    tzDataType.isString(pobjGCVariableEN.varName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量名(varName)]的值:[${pobjGCVariableEN.varName}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.varExpression) == false &&
    undefined !== pobjGCVariableEN.varExpression &&
    tzDataType.isString(pobjGCVariableEN.varExpression) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量表达式(varExpression)]的值:[${pobjGCVariableEN.varExpression}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.filePath) == false &&
    undefined !== pobjGCVariableEN.filePath &&
    tzDataType.isString(pobjGCVariableEN.filePath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[文件路径(filePath)]的值:[${pobjGCVariableEN.filePath}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.initValue) == false &&
    undefined !== pobjGCVariableEN.initValue &&
    tzDataType.isString(pobjGCVariableEN.initValue) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[初始值(initValue)]的值:[${pobjGCVariableEN.initValue}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.varTypeId) == false &&
    undefined !== pobjGCVariableEN.varTypeId &&
    tzDataType.isString(pobjGCVariableEN.varTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量类型Id(varTypeId)]的值:[${pobjGCVariableEN.varTypeId}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.dataTypeId) == false &&
    undefined !== pobjGCVariableEN.dataTypeId &&
    tzDataType.isString(pobjGCVariableEN.dataTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据类型Id(dataTypeId)]的值:[${pobjGCVariableEN.dataTypeId}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.variableType) == false &&
    undefined !== pobjGCVariableEN.variableType &&
    tzDataType.isString(pobjGCVariableEN.variableType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量类型(variableType)]的值:[${pobjGCVariableEN.variableType}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.variableTypeFullName) == false &&
    undefined !== pobjGCVariableEN.variableTypeFullName &&
    tzDataType.isString(pobjGCVariableEN.variableTypeFullName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量类型全名(variableTypeFullName)]的值:[${pobjGCVariableEN.variableTypeFullName}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.clsName) == false &&
    undefined !== pobjGCVariableEN.clsName &&
    tzDataType.isString(pobjGCVariableEN.clsName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[类名(clsName)]的值:[${pobjGCVariableEN.clsName}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.updDate) == false &&
    undefined !== pobjGCVariableEN.updDate &&
    tzDataType.isString(pobjGCVariableEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjGCVariableEN.updDate}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.updUser) == false &&
    undefined !== pobjGCVariableEN.updUser &&
    tzDataType.isString(pobjGCVariableEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjGCVariableEN.updUser}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCVariableEN.memo) == false &&
    undefined !== pobjGCVariableEN.memo &&
    tzDataType.isString(pobjGCVariableEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjGCVariableEN.memo}], 非法,应该为字符型(In GC变量(GCVariable))!(clsGCVariableBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjGCVariableEN.dataTypeId) == false &&
    pobjGCVariableEN.dataTypeId != '[nuull]' &&
    GetStrLen(pobjGCVariableEN.dataTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[数据类型Id]作为外键字段,长度应该为2(In GC变量)!(clsGCVariableBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GCVariable_GetJSONStrByObj(pobjGCVariableEN: clsGCVariableEN): string {
  pobjGCVariableEN.sfUpdFldSetStr = pobjGCVariableEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjGCVariableEN);
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
 * 日期:2025-06-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function GCVariable_GetObjLstByJSONStr(strJSON: string): Array<clsGCVariableEN> {
  let arrGCVariableObjLst = new Array<clsGCVariableEN>();
  if (strJSON === '') {
    return arrGCVariableObjLst;
  }
  try {
    arrGCVariableObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrGCVariableObjLst;
  }
  return arrGCVariableObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrGCVariableObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function GCVariable_GetObjLstByJSONObjLst(
  arrGCVariableObjLstS: Array<clsGCVariableEN>,
): Array<clsGCVariableEN> {
  const arrGCVariableObjLst = new Array<clsGCVariableEN>();
  for (const objInFor of arrGCVariableObjLstS) {
    const obj1 = GCVariable_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrGCVariableObjLst.push(obj1);
  }
  return arrGCVariableObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-18
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GCVariable_GetObjByJSONStr(strJSON: string): clsGCVariableEN {
  let pobjGCVariableEN = new clsGCVariableEN();
  if (strJSON === '') {
    return pobjGCVariableEN;
  }
  try {
    pobjGCVariableEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjGCVariableEN;
  }
  return pobjGCVariableEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function GCVariable_GetCombineCondition(objGCVariableCond: clsGCVariableEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableCond.dicFldComparisonOp,
      clsGCVariableEN.con_VarId,
    ) == true
  ) {
    const strComparisonOpVarId: string =
      objGCVariableCond.dicFldComparisonOp[clsGCVariableEN.con_VarId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableEN.con_VarId,
      objGCVariableCond.varId,
      strComparisonOpVarId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableCond.dicFldComparisonOp,
      clsGCVariableEN.con_VarName,
    ) == true
  ) {
    const strComparisonOpVarName: string =
      objGCVariableCond.dicFldComparisonOp[clsGCVariableEN.con_VarName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableEN.con_VarName,
      objGCVariableCond.varName,
      strComparisonOpVarName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableCond.dicFldComparisonOp,
      clsGCVariableEN.con_VarExpression,
    ) == true
  ) {
    const strComparisonOpVarExpression: string =
      objGCVariableCond.dicFldComparisonOp[clsGCVariableEN.con_VarExpression];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableEN.con_VarExpression,
      objGCVariableCond.varExpression,
      strComparisonOpVarExpression,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableCond.dicFldComparisonOp,
      clsGCVariableEN.con_FilePath,
    ) == true
  ) {
    const strComparisonOpFilePath: string =
      objGCVariableCond.dicFldComparisonOp[clsGCVariableEN.con_FilePath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableEN.con_FilePath,
      objGCVariableCond.filePath,
      strComparisonOpFilePath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableCond.dicFldComparisonOp,
      clsGCVariableEN.con_InitValue,
    ) == true
  ) {
    const strComparisonOpInitValue: string =
      objGCVariableCond.dicFldComparisonOp[clsGCVariableEN.con_InitValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableEN.con_InitValue,
      objGCVariableCond.initValue,
      strComparisonOpInitValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableCond.dicFldComparisonOp,
      clsGCVariableEN.con_VarTypeId,
    ) == true
  ) {
    const strComparisonOpVarTypeId: string =
      objGCVariableCond.dicFldComparisonOp[clsGCVariableEN.con_VarTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableEN.con_VarTypeId,
      objGCVariableCond.varTypeId,
      strComparisonOpVarTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableCond.dicFldComparisonOp,
      clsGCVariableEN.con_DataTypeId,
    ) == true
  ) {
    const strComparisonOpDataTypeId: string =
      objGCVariableCond.dicFldComparisonOp[clsGCVariableEN.con_DataTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableEN.con_DataTypeId,
      objGCVariableCond.dataTypeId,
      strComparisonOpDataTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableCond.dicFldComparisonOp,
      clsGCVariableEN.con_VariableType,
    ) == true
  ) {
    const strComparisonOpVariableType: string =
      objGCVariableCond.dicFldComparisonOp[clsGCVariableEN.con_VariableType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableEN.con_VariableType,
      objGCVariableCond.variableType,
      strComparisonOpVariableType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableCond.dicFldComparisonOp,
      clsGCVariableEN.con_VariableTypeFullName,
    ) == true
  ) {
    const strComparisonOpVariableTypeFullName: string =
      objGCVariableCond.dicFldComparisonOp[clsGCVariableEN.con_VariableTypeFullName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableEN.con_VariableTypeFullName,
      objGCVariableCond.variableTypeFullName,
      strComparisonOpVariableTypeFullName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableCond.dicFldComparisonOp,
      clsGCVariableEN.con_ClsName,
    ) == true
  ) {
    const strComparisonOpClsName: string =
      objGCVariableCond.dicFldComparisonOp[clsGCVariableEN.con_ClsName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableEN.con_ClsName,
      objGCVariableCond.clsName,
      strComparisonOpClsName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableCond.dicFldComparisonOp,
      clsGCVariableEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objGCVariableCond.dicFldComparisonOp[clsGCVariableEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableEN.con_UpdDate,
      objGCVariableCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableCond.dicFldComparisonOp,
      clsGCVariableEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objGCVariableCond.dicFldComparisonOp[clsGCVariableEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableEN.con_UpdUser,
      objGCVariableCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCVariableCond.dicFldComparisonOp,
      clsGCVariableEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objGCVariableCond.dicFldComparisonOp[clsGCVariableEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCVariableEN.con_Memo,
      objGCVariableCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--GCVariable(GC变量),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strVarName: 变量名(要求唯一的字段)
 * @param strVarTypeId: 变量类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function GCVariable_GetUniCondStr(objGCVariableEN: clsGCVariableEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and VarName = '{0}'", objGCVariableEN.varName);
  strWhereCond += Format(" and VarTypeId = '{0}'", objGCVariableEN.varTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--GCVariable(GC变量),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strVarName: 变量名(要求唯一的字段)
 * @param strVarTypeId: 变量类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function GCVariable_GetUniCondStr4Update(objGCVariableEN: clsGCVariableEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and VarId <> '{0}'", objGCVariableEN.varId);
  strWhereCond += Format(" and VarName = '{0}'", objGCVariableEN.varName);
  strWhereCond += Format(" and VarTypeId = '{0}'", objGCVariableEN.varTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objGCVariableENS:源对象
 * @param objGCVariableENT:目标对象
 */
export function GCVariable_GetObjFromJsonObj(objGCVariableENS: clsGCVariableEN): clsGCVariableEN {
  const objGCVariableENT: clsGCVariableEN = new clsGCVariableEN();
  ObjectAssign(objGCVariableENT, objGCVariableENS);
  return objGCVariableENT;
}
