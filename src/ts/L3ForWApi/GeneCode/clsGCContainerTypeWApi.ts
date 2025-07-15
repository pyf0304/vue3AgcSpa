/**
 * 类名:clsGCContainerTypeWApi
 * 表名:GCContainerType(00050563)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:42
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
 * GC容器类型(GCContainerType)
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
import { gCContainerTypeCache, isFuncMapCache } from '@/views/GeneCode/GCContainerTypeVueShare';
import { clsGCContainerTypeENEx } from '@/ts/L0Entity/GeneCode/clsGCContainerTypeENEx';
import { clsGCContainerTypeEN } from '@/ts/L0Entity/GeneCode/clsGCContainerTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const gCContainerType_Controller = 'GCContainerTypeApi';
export const gCContainerType_ConstructorName = 'gCContainerType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strContainerTypeId:关键字
 * @returns 对象
 **/
export async function GCContainerType_GetObjByContainerTypeIdAsync(
  strContainerTypeId: string,
): Promise<clsGCContainerTypeEN | null> {
  const strThisFuncName = 'GetObjByContainerTypeIdAsync';

  if (IsNullOrEmpty(strContainerTypeId) == true) {
    const strMsg = Format(
      '参数:[strContainerTypeId]不能为空!(In clsGCContainerTypeWApi.GetObjByContainerTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strContainerTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strContainerTypeId]的长度:[{0}]不正确!(clsGCContainerTypeWApi.GetObjByContainerTypeIdAsync)',
      strContainerTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByContainerTypeId';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strContainerTypeId,
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
      const objGCContainerType = GCContainerType_GetObjFromJsonObj(returnObj);
      return objGCContainerType;
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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
 * @param strContainerTypeId:所给的关键字
 * @returns 对象
 */
export async function GCContainerType_GetObjByContainerTypeIdlocalStorage(
  strContainerTypeId: string,
) {
  const strThisFuncName = 'GetObjByContainerTypeIdlocalStorage';

  if (IsNullOrEmpty(strContainerTypeId) == true) {
    const strMsg = Format(
      '参数:[strContainerTypeId]不能为空!(In clsGCContainerTypeWApi.GetObjByContainerTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strContainerTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strContainerTypeId]的长度:[{0}]不正确!(clsGCContainerTypeWApi.GetObjByContainerTypeIdlocalStorage)',
      strContainerTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsGCContainerTypeEN._CurrTabName, strContainerTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objGCContainerTypeCache: clsGCContainerTypeEN = JSON.parse(strTempObj);
    return objGCContainerTypeCache;
  }
  try {
    const objGCContainerType = await GCContainerType_GetObjByContainerTypeIdAsync(
      strContainerTypeId,
    );
    if (objGCContainerType != null) {
      localStorage.setItem(strKey, JSON.stringify(objGCContainerType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objGCContainerType;
    }
    return objGCContainerType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strContainerTypeId,
      gCContainerType_ConstructorName,
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
 * @param strContainerTypeId:所给的关键字
 * @returns 对象
 */
export async function GCContainerType_GetObjByContainerTypeIdCache(
  strContainerTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByContainerTypeIdCache';

  if (IsNullOrEmpty(strContainerTypeId) == true) {
    const strMsg = Format(
      '参数:[strContainerTypeId]不能为空!(In clsGCContainerTypeWApi.GetObjByContainerTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strContainerTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strContainerTypeId]的长度:[{0}]不正确!(clsGCContainerTypeWApi.GetObjByContainerTypeIdCache)',
      strContainerTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrGCContainerTypeObjLstCache = await GCContainerType_GetObjLstCache();
  try {
    const arrGCContainerTypeSel = arrGCContainerTypeObjLstCache.filter(
      (x) => x.containerTypeId == strContainerTypeId,
    );
    let objGCContainerType: clsGCContainerTypeEN;
    if (arrGCContainerTypeSel.length > 0) {
      objGCContainerType = arrGCContainerTypeSel[0];
      return objGCContainerType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objGCContainerTypeConst = await GCContainerType_GetObjByContainerTypeIdAsync(
          strContainerTypeId,
        );
        if (objGCContainerTypeConst != null) {
          GCContainerType_ReFreshThisCache();
          return objGCContainerTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strContainerTypeId,
      gCContainerType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objGCContainerType:所给的对象
 * @returns 对象
 */
export async function GCContainerType_UpdateObjInLstCache(
  objGCContainerType: clsGCContainerTypeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrGCContainerTypeObjLstCache = await GCContainerType_GetObjLstCache();
    const obj = arrGCContainerTypeObjLstCache.find(
      (x) => x.containerTypeName == objGCContainerType.containerTypeName,
    );
    if (obj != null) {
      objGCContainerType.containerTypeId = obj.containerTypeId;
      ObjectAssign(obj, objGCContainerType);
    } else {
      arrGCContainerTypeObjLstCache.push(objGCContainerType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gCContainerType_ConstructorName,
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
export function GCContainerType_SortFunDefa(
  a: clsGCContainerTypeEN,
  b: clsGCContainerTypeEN,
): number {
  return a.containerTypeId.localeCompare(b.containerTypeId);
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
export function GCContainerType_SortFunDefa2Fld(
  a: clsGCContainerTypeEN,
  b: clsGCContainerTypeEN,
): number {
  if (a.containerTypeName == b.containerTypeName)
    return a.containerTypeENName.localeCompare(b.containerTypeENName);
  else return a.containerTypeName.localeCompare(b.containerTypeName);
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
export function GCContainerType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCContainerTypeEN.con_ContainerTypeId:
        return (a: clsGCContainerTypeEN, b: clsGCContainerTypeEN) => {
          return a.containerTypeId.localeCompare(b.containerTypeId);
        };
      case clsGCContainerTypeEN.con_ContainerTypeName:
        return (a: clsGCContainerTypeEN, b: clsGCContainerTypeEN) => {
          return a.containerTypeName.localeCompare(b.containerTypeName);
        };
      case clsGCContainerTypeEN.con_ContainerTypeENName:
        return (a: clsGCContainerTypeEN, b: clsGCContainerTypeEN) => {
          return a.containerTypeENName.localeCompare(b.containerTypeENName);
        };
      case clsGCContainerTypeEN.con_UpdDate:
        return (a: clsGCContainerTypeEN, b: clsGCContainerTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsGCContainerTypeEN.con_UpdUser:
        return (a: clsGCContainerTypeEN, b: clsGCContainerTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsGCContainerTypeEN.con_Memo:
        return (a: clsGCContainerTypeEN, b: clsGCContainerTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCContainerType]中不存在!(in ${gCContainerType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsGCContainerTypeEN.con_ContainerTypeId:
        return (a: clsGCContainerTypeEN, b: clsGCContainerTypeEN) => {
          return b.containerTypeId.localeCompare(a.containerTypeId);
        };
      case clsGCContainerTypeEN.con_ContainerTypeName:
        return (a: clsGCContainerTypeEN, b: clsGCContainerTypeEN) => {
          return b.containerTypeName.localeCompare(a.containerTypeName);
        };
      case clsGCContainerTypeEN.con_ContainerTypeENName:
        return (a: clsGCContainerTypeEN, b: clsGCContainerTypeEN) => {
          return b.containerTypeENName.localeCompare(a.containerTypeENName);
        };
      case clsGCContainerTypeEN.con_UpdDate:
        return (a: clsGCContainerTypeEN, b: clsGCContainerTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsGCContainerTypeEN.con_UpdUser:
        return (a: clsGCContainerTypeEN, b: clsGCContainerTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsGCContainerTypeEN.con_Memo:
        return (a: clsGCContainerTypeEN, b: clsGCContainerTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCContainerType]中不存在!(in ${gCContainerType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strContainerTypeId:所给的关键字
 * @returns 对象
 */
export async function GCContainerType_GetNameByContainerTypeIdCache(strContainerTypeId: string) {
  if (IsNullOrEmpty(strContainerTypeId) == true) {
    const strMsg = Format(
      '参数:[strContainerTypeId]不能为空!(In clsGCContainerTypeWApi.GetNameByContainerTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strContainerTypeId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strContainerTypeId]的长度:[{0}]不正确!(clsGCContainerTypeWApi.GetNameByContainerTypeIdCache)',
      strContainerTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrGCContainerTypeObjLstCache = await GCContainerType_GetObjLstCache();
  if (arrGCContainerTypeObjLstCache == null) return '';
  try {
    const arrGCContainerTypeSel = arrGCContainerTypeObjLstCache.filter(
      (x) => x.containerTypeId == strContainerTypeId,
    );
    let objGCContainerType: clsGCContainerTypeEN;
    if (arrGCContainerTypeSel.length > 0) {
      objGCContainerType = arrGCContainerTypeSel[0];
      return objGCContainerType.containerTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strContainerTypeId,
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
export async function GCContainerType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsGCContainerTypeEN.con_ContainerTypeId:
      return (obj: clsGCContainerTypeEN) => {
        return obj.containerTypeId === value;
      };
    case clsGCContainerTypeEN.con_ContainerTypeName:
      return (obj: clsGCContainerTypeEN) => {
        return obj.containerTypeName === value;
      };
    case clsGCContainerTypeEN.con_ContainerTypeENName:
      return (obj: clsGCContainerTypeEN) => {
        return obj.containerTypeENName === value;
      };
    case clsGCContainerTypeEN.con_UpdDate:
      return (obj: clsGCContainerTypeEN) => {
        return obj.updDate === value;
      };
    case clsGCContainerTypeEN.con_UpdUser:
      return (obj: clsGCContainerTypeEN) => {
        return obj.updUser === value;
      };
    case clsGCContainerTypeEN.con_Memo:
      return (obj: clsGCContainerTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[GCContainerType]中不存在!(in ${gCContainerType_ConstructorName}.${strThisFuncName})`;
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
export async function GCContainerType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsGCContainerTypeEN.con_ContainerTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsGCContainerTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsGCContainerTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strContainerTypeId = strInValue;
  if (IsNullOrEmpty(strContainerTypeId) == true) {
    return '';
  }
  const objGCContainerType = await GCContainerType_GetObjByContainerTypeIdCache(strContainerTypeId);
  if (objGCContainerType == null) return '';
  if (objGCContainerType.GetFldValue(strOutFldName) == null) return '';
  return objGCContainerType.GetFldValue(strOutFldName).toString();
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
export async function GCContainerType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsGCContainerTypeEN.con_ContainerTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrGCContainerType = await GCContainerType_GetObjLstCache();
  if (arrGCContainerType == null) return [];
  let arrGCContainerTypeSel = arrGCContainerType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrGCContainerTypeSel.length == 0) return [];
  return arrGCContainerTypeSel.map((x) => x.containerTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCContainerType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
export async function GCContainerType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
export async function GCContainerType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
export async function GCContainerType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsGCContainerTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

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
      const objGCContainerType = GCContainerType_GetObjFromJsonObj(returnObj);
      return objGCContainerType;
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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
export async function GCContainerType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGCContainerTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsGCContainerTypeEN.WhereFormat) == false) {
    strWhereCond = clsGCContainerTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsGCContainerTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCContainerTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrGCContainerTypeExObjLstCache: Array<clsGCContainerTypeEN> = CacheHelper.Get(strKey);
    const arrGCContainerTypeObjLstT = GCContainerType_GetObjLstByJSONObjLst(
      arrGCContainerTypeExObjLstCache,
    );
    return arrGCContainerTypeObjLstT;
  }
  try {
    const arrGCContainerTypeExObjLst = await GCContainerType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrGCContainerTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCContainerTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrGCContainerTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCContainerType_ConstructorName,
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
export async function GCContainerType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGCContainerTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsGCContainerTypeEN.WhereFormat) == false) {
    strWhereCond = clsGCContainerTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsGCContainerTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCContainerTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGCContainerTypeExObjLstCache: Array<clsGCContainerTypeEN> = JSON.parse(strTempObjLst);
    const arrGCContainerTypeObjLstT = GCContainerType_GetObjLstByJSONObjLst(
      arrGCContainerTypeExObjLstCache,
    );
    return arrGCContainerTypeObjLstT;
  }
  try {
    const arrGCContainerTypeExObjLst = await GCContainerType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrGCContainerTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCContainerTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrGCContainerTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCContainerType_ConstructorName,
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
export async function GCContainerType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsGCContainerTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGCContainerTypeObjLstCache: Array<clsGCContainerTypeEN> = JSON.parse(strTempObjLst);
    return arrGCContainerTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function GCContainerType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsGCContainerTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

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
          gCContainerType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCContainerType_GetObjLstByJSONObjLst(returnObjLst);
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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
export async function GCContainerType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGCContainerTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsGCContainerTypeEN.WhereFormat) == false) {
    strWhereCond = clsGCContainerTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsGCContainerTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCContainerTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGCContainerTypeExObjLstCache: Array<clsGCContainerTypeEN> = JSON.parse(strTempObjLst);
    const arrGCContainerTypeObjLstT = GCContainerType_GetObjLstByJSONObjLst(
      arrGCContainerTypeExObjLstCache,
    );
    return arrGCContainerTypeObjLstT;
  }
  try {
    const arrGCContainerTypeExObjLst = await GCContainerType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrGCContainerTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCContainerTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrGCContainerTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCContainerType_ConstructorName,
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
export async function GCContainerType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsGCContainerTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGCContainerTypeObjLstCache: Array<clsGCContainerTypeEN> = JSON.parse(strTempObjLst);
    return arrGCContainerTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GCContainerType_GetObjLstCache(): Promise<Array<clsGCContainerTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrGCContainerTypeObjLstCache;
  switch (clsGCContainerTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrGCContainerTypeObjLstCache = await GCContainerType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrGCContainerTypeObjLstCache = await GCContainerType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrGCContainerTypeObjLstCache = await GCContainerType_GetObjLstClientCache();
      break;
    default:
      arrGCContainerTypeObjLstCache = await GCContainerType_GetObjLstClientCache();
      break;
  }
  return arrGCContainerTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GCContainerType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrGCContainerTypeObjLstCache;
  switch (clsGCContainerTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrGCContainerTypeObjLstCache = await GCContainerType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrGCContainerTypeObjLstCache = await GCContainerType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrGCContainerTypeObjLstCache = null;
      break;
    default:
      arrGCContainerTypeObjLstCache = null;
      break;
  }
  return arrGCContainerTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrContainerTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GCContainerType_GetSubObjLstCache(
  objGCContainerTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrGCContainerTypeObjLstCache = await GCContainerType_GetObjLstCache();
  let arrGCContainerTypeSel = arrGCContainerTypeObjLstCache;
  if (objGCContainerTypeCond.GetConditions().length == 0) return arrGCContainerTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objGCContainerTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCContainerTypeSel = arrGCContainerTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrGCContainerTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGCContainerTypeCond),
      gCContainerType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCContainerTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrContainerTypeId:关键字列表
 * @returns 对象列表
 **/
export async function GCContainerType_GetObjLstByContainerTypeIdLstAsync(
  arrContainerTypeId: Array<string>,
): Promise<Array<clsGCContainerTypeEN>> {
  const strThisFuncName = 'GetObjLstByContainerTypeIdLstAsync';
  const strAction = 'GetObjLstByContainerTypeIdLst';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrContainerTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gCContainerType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCContainerType_GetObjLstByJSONObjLst(returnObjLst);
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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
 * @param arrstrContainerTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function GCContainerType_GetObjLstByContainerTypeIdLstCache(
  arrContainerTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByContainerTypeIdLstCache';
  try {
    const arrGCContainerTypeObjLstCache = await GCContainerType_GetObjLstCache();
    const arrGCContainerTypeSel = arrGCContainerTypeObjLstCache.filter(
      (x) => arrContainerTypeIdLst.indexOf(x.containerTypeId) > -1,
    );
    return arrGCContainerTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrContainerTypeIdLst.join(','),
      gCContainerType_ConstructorName,
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
export async function GCContainerType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsGCContainerTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

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
          gCContainerType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCContainerType_GetObjLstByJSONObjLst(returnObjLst);
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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
export async function GCContainerType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsGCContainerTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

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
          gCContainerType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCContainerType_GetObjLstByJSONObjLst(returnObjLst);
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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
export async function GCContainerType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCContainerTypeEN>();
  const arrGCContainerTypeObjLstCache = await GCContainerType_GetObjLstCache();
  if (arrGCContainerTypeObjLstCache.length == 0) return arrGCContainerTypeObjLstCache;
  let arrGCContainerTypeSel = arrGCContainerTypeObjLstCache;
  const objGCContainerTypeCond = objPagerPara.conditionCollection;
  if (objGCContainerTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsGCContainerTypeEN>();
  }
  //console.log("clsGCContainerTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objGCContainerTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCContainerTypeSel = arrGCContainerTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCContainerTypeSel.length == 0) return arrGCContainerTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGCContainerTypeSel = arrGCContainerTypeSel.sort(
        GCContainerType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCContainerTypeSel = arrGCContainerTypeSel.sort(objPagerPara.sortFun);
    }
    arrGCContainerTypeSel = arrGCContainerTypeSel.slice(intStart, intEnd);
    return arrGCContainerTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCContainerType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCContainerTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function GCContainerType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCContainerTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCContainerTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

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
          gCContainerType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCContainerType_GetObjLstByJSONObjLst(returnObjLst);
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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
 * @param strContainerTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function GCContainerType_DelRecordAsync(strContainerTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strContainerTypeId);

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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
 * @param arrContainerTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function GCContainerType_DelGCContainerTypesAsync(
  arrContainerTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelGCContainerTypesAsync';
  const strAction = 'DelGCContainerTypes';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrContainerTypeId, config);
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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
export async function GCContainerType_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCContainerTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrGCContainerTypeObjLst = await GCContainerType_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsGCContainerTypeENEx>();
  const arrGCContainerTypeExObjLst = arrGCContainerTypeObjLst.map((obj) => {
    const cacheKey = `${obj.containerTypeId}`;
    if (gCContainerTypeCache[cacheKey]) {
      const oldObj = gCContainerTypeCache[cacheKey];
      return oldObj;
    } else {
      const newObj = GCContainerType_CopyToEx(obj);
      arrNewObj.push(newObj);
      gCContainerTypeCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await GCContainerType_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsGCContainerTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrGCContainerTypeExObjLst) {
      await GCContainerType_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.containerTypeId}`;
      gCContainerTypeCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrGCContainerTypeExObjLst.length == 0) return arrGCContainerTypeExObjLst;
  let arrGCContainerTypeSel: Array<clsGCContainerTypeENEx> = arrGCContainerTypeExObjLst;
  const objGCContainerTypeCond = objPagerPara.conditionCollection;
  if (objGCContainerTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrGCContainerTypeExObjLst;
  }
  try {
    for (const objCondition of objGCContainerTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCContainerTypeSel = arrGCContainerTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCContainerTypeSel.length == 0) return arrGCContainerTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrGCContainerTypeSel = arrGCContainerTypeSel.sort(
        GCContainerType_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCContainerTypeSel = arrGCContainerTypeSel.sort(objPagerPara.sortFun);
    }
    arrGCContainerTypeSel = arrGCContainerTypeSel.slice(intStart, intEnd);
    return arrGCContainerTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCContainerType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCContainerTypeENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objGCContainerTypeENS:源对象
 * @returns 目标对象=>clsGCContainerTypeEN:objGCContainerTypeENT
 **/
export function GCContainerType_CopyToEx(
  objGCContainerTypeENS: clsGCContainerTypeEN,
): clsGCContainerTypeENEx {
  const strThisFuncName = GCContainerType_CopyToEx.name;
  const objGCContainerTypeENT = new clsGCContainerTypeENEx();
  try {
    ObjectAssign(objGCContainerTypeENT, objGCContainerTypeENS);
    return objGCContainerTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gCContainerType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objGCContainerTypeENT;
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
export function GCContainerType_FuncMapByFldName(
  strFldName: string,
  objGCContainerTypeEx: clsGCContainerTypeENEx,
) {
  const strThisFuncName = GCContainerType_FuncMapByFldName.name;
  console.log(objGCContainerTypeEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsGCContainerTypeEN.AttributeName;
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
export function GCContainerType_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return GCContainerType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return GCContainerType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function GCContainerType_DelGCContainerTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelGCContainerTypesByCondAsync';
  const strAction = 'DelGCContainerTypesByCond';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
 * @param objGCContainerTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCContainerType_AddNewRecordAsync(
  objGCContainerTypeEN: clsGCContainerTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objGCContainerTypeEN);
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCContainerTypeEN, config);
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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
 * @param objGCContainerTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCContainerType_AddNewRecordWithMaxIdAsync(
  objGCContainerTypeEN: clsGCContainerTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCContainerTypeEN, config);
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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
export async function GCContainerType_AddNewObjSave(
  objGCContainerTypeEN: clsGCContainerTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    GCContainerType_CheckPropertyNew(objGCContainerTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gCContainerType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await GCContainerType_CheckUniCond4Add(objGCContainerTypeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await GCContainerType_AddNewRecordWithMaxIdAsync(objGCContainerTypeEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      GCContainerType_ReFreshCache();
    } else {
      const strInfo = `添加[GC容器类型(GCContainerType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${gCContainerType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function GCContainerType_CheckUniCond4Add(
  objGCContainerTypeEN: clsGCContainerTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = GCContainerType_GetUniCondStr(objGCContainerTypeEN);
  const bolIsExistCondition = await GCContainerType_IsExistRecordAsync(strUniquenessCondition);
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
export async function GCContainerType_CheckUniCond4Update(
  objGCContainerTypeEN: clsGCContainerTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = GCContainerType_GetUniCondStr4Update(objGCContainerTypeEN);
  const bolIsExistCondition = await GCContainerType_IsExistRecordAsync(strUniquenessCondition);
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
export async function GCContainerType_UpdateObjSave(
  objGCContainerTypeEN: clsGCContainerTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objGCContainerTypeEN.sfUpdFldSetStr = objGCContainerTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objGCContainerTypeEN.containerTypeId == '' ||
    objGCContainerTypeEN.containerTypeId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    GCContainerType_CheckProperty4Update(objGCContainerTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${gCContainerType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await GCContainerType_CheckUniCond4Update(objGCContainerTypeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await GCContainerType_UpdateRecordAsync(objGCContainerTypeEN);
    if (returnBool == true) {
      GCContainerType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${gCContainerType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objGCContainerTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function GCContainerType_AddNewRecordWithReturnKeyAsync(
  objGCContainerTypeEN: clsGCContainerTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCContainerTypeEN, config);
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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
 * @param objGCContainerTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCContainerType_UpdateRecordAsync(
  objGCContainerTypeEN: clsGCContainerTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objGCContainerTypeEN.sfUpdFldSetStr === undefined ||
    objGCContainerTypeEN.sfUpdFldSetStr === null ||
    objGCContainerTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCContainerTypeEN.containerTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCContainerTypeEN, config);
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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
 * @param objGCContainerTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCContainerType_EditRecordExAsync(
  objGCContainerTypeEN: clsGCContainerTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objGCContainerTypeEN.sfUpdFldSetStr === undefined ||
    objGCContainerTypeEN.sfUpdFldSetStr === null ||
    objGCContainerTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCContainerTypeEN.containerTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCContainerTypeEN, config);
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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
 * @param objGCContainerTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCContainerType_UpdateWithConditionAsync(
  objGCContainerTypeEN: clsGCContainerTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objGCContainerTypeEN.sfUpdFldSetStr === undefined ||
    objGCContainerTypeEN.sfUpdFldSetStr === null ||
    objGCContainerTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGCContainerTypeEN.containerTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);
  objGCContainerTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCContainerTypeEN, config);
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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
 * @param objstrContainerTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GCContainerType_IsExistRecordCache(
  objGCContainerTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrGCContainerTypeObjLstCache = await GCContainerType_GetObjLstCache();
  if (arrGCContainerTypeObjLstCache == null) return false;
  let arrGCContainerTypeSel = arrGCContainerTypeObjLstCache;
  if (objGCContainerTypeCond.GetConditions().length == 0)
    return arrGCContainerTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objGCContainerTypeCond.GetConditions()) {
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
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrGCContainerTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objGCContainerTypeCond),
      gCContainerType_ConstructorName,
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
export async function GCContainerType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
 * @param strContainerTypeId:所给的关键字
 * @returns 对象
 */
export async function GCContainerType_IsExistCache(strContainerTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrGCContainerTypeObjLstCache = await GCContainerType_GetObjLstCache();
  if (arrGCContainerTypeObjLstCache == null) return false;
  try {
    const arrGCContainerTypeSel = arrGCContainerTypeObjLstCache.filter(
      (x) => x.containerTypeId == strContainerTypeId,
    );
    if (arrGCContainerTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strContainerTypeId,
      gCContainerType_ConstructorName,
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
 * @param strContainerTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function GCContainerType_IsExistAsync(strContainerTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strContainerTypeId,
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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
export async function GCContainerType_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
 * @param objGCContainerTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function GCContainerType_GetRecCountByCondCache(
  objGCContainerTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrGCContainerTypeObjLstCache = await GCContainerType_GetObjLstCache();
  if (arrGCContainerTypeObjLstCache == null) return 0;
  let arrGCContainerTypeSel = arrGCContainerTypeObjLstCache;
  if (objGCContainerTypeCond.GetConditions().length == 0) return arrGCContainerTypeSel.length;
  try {
    for (const objCondition of objGCContainerTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrGCContainerTypeSel = arrGCContainerTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrGCContainerTypeSel = arrGCContainerTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrGCContainerTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGCContainerTypeCond),
      gCContainerType_ConstructorName,
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
export async function GCContainerType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
export async function GCContainerType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gCContainerType_Controller, strAction);

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
        gCContainerType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCContainerType_ConstructorName,
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
export function GCContainerType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function GCContainerType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsGCContainerTypeEN._CurrTabName;
  switch (clsGCContainerTypeEN.CacheModeId) {
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
  clsGCContainerTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function GCContainerType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsGCContainerTypeEN._CurrTabName;
    switch (clsGCContainerTypeEN.CacheModeId) {
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
    clsGCContainerTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function GCContainerType_GetLastRefreshTime(): string {
  if (clsGCContainerTypeEN._RefreshTimeLst.length == 0) return '';
  return clsGCContainerTypeEN._RefreshTimeLst[clsGCContainerTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function GCContainerType_BindDdl_ContainerTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ContainerTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ContainerTypeIdInDivCache");
  let arrObjLstSel = await GCContainerType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.sort((x, y) =>
    x.containerTypeName.localeCompare(y.containerTypeName),
  );
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsGCContainerTypeEN.con_ContainerTypeId,
    clsGCContainerTypeEN.con_ContainerTypeName,
    'GC容器类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function GCContainerType_GetArrGCContainerType() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ContainerTypeIdInDivCache");
  const arrGCContainerType = new Array<clsGCContainerTypeEN>();
  let arrObjLstSel = await GCContainerType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.sort((x, y) => {
    if (x.containerTypeName === null && y.containerTypeName === null) return 0;
    if (x.containerTypeName === null) return 1;
    if (y.containerTypeName === null) return -1;
    return x.containerTypeName.localeCompare(y.containerTypeName);
  });
  const obj0 = new clsGCContainerTypeEN();
  obj0.containerTypeId = '0';
  obj0.containerTypeName = '选gC容器类型...';
  arrGCContainerType.push(obj0);
  arrObjLstSel.forEach((x) => arrGCContainerType.push(x));
  return arrGCContainerType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCContainerType_CheckPropertyNew(pobjGCContainerTypeEN: clsGCContainerTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjGCContainerTypeEN.containerTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[容器类型名]不能为空(In GC容器类型)!(clsGCContainerTypeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjGCContainerTypeEN.containerTypeENName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[容器类型英文名]不能为空(In GC容器类型)!(clsGCContainerTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.containerTypeId) == false &&
    GetStrLen(pobjGCContainerTypeEN.containerTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[容器类型Id(containerTypeId)]的长度不能超过4(In GC容器类型(GCContainerType))!值:${pobjGCContainerTypeEN.containerTypeId}(clsGCContainerTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.containerTypeName) == false &&
    GetStrLen(pobjGCContainerTypeEN.containerTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[容器类型名(containerTypeName)]的长度不能超过50(In GC容器类型(GCContainerType))!值:${pobjGCContainerTypeEN.containerTypeName}(clsGCContainerTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.containerTypeENName) == false &&
    GetStrLen(pobjGCContainerTypeEN.containerTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[容器类型英文名(containerTypeENName)]的长度不能超过50(In GC容器类型(GCContainerType))!值:${pobjGCContainerTypeEN.containerTypeENName}(clsGCContainerTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.updDate) == false &&
    GetStrLen(pobjGCContainerTypeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In GC容器类型(GCContainerType))!值:${pobjGCContainerTypeEN.updDate}(clsGCContainerTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.updUser) == false &&
    GetStrLen(pobjGCContainerTypeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In GC容器类型(GCContainerType))!值:${pobjGCContainerTypeEN.updUser}(clsGCContainerTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.memo) == false &&
    GetStrLen(pobjGCContainerTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In GC容器类型(GCContainerType))!值:${pobjGCContainerTypeEN.memo}(clsGCContainerTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.containerTypeId) == false &&
    undefined !== pobjGCContainerTypeEN.containerTypeId &&
    tzDataType.isString(pobjGCContainerTypeEN.containerTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[容器类型Id(containerTypeId)]的值:[${pobjGCContainerTypeEN.containerTypeId}], 非法,应该为字符型(In GC容器类型(GCContainerType))!(clsGCContainerTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.containerTypeName) == false &&
    undefined !== pobjGCContainerTypeEN.containerTypeName &&
    tzDataType.isString(pobjGCContainerTypeEN.containerTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[容器类型名(containerTypeName)]的值:[${pobjGCContainerTypeEN.containerTypeName}], 非法,应该为字符型(In GC容器类型(GCContainerType))!(clsGCContainerTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.containerTypeENName) == false &&
    undefined !== pobjGCContainerTypeEN.containerTypeENName &&
    tzDataType.isString(pobjGCContainerTypeEN.containerTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[容器类型英文名(containerTypeENName)]的值:[${pobjGCContainerTypeEN.containerTypeENName}], 非法,应该为字符型(In GC容器类型(GCContainerType))!(clsGCContainerTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.updDate) == false &&
    undefined !== pobjGCContainerTypeEN.updDate &&
    tzDataType.isString(pobjGCContainerTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjGCContainerTypeEN.updDate}], 非法,应该为字符型(In GC容器类型(GCContainerType))!(clsGCContainerTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.updUser) == false &&
    undefined !== pobjGCContainerTypeEN.updUser &&
    tzDataType.isString(pobjGCContainerTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjGCContainerTypeEN.updUser}], 非法,应该为字符型(In GC容器类型(GCContainerType))!(clsGCContainerTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.memo) == false &&
    undefined !== pobjGCContainerTypeEN.memo &&
    tzDataType.isString(pobjGCContainerTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjGCContainerTypeEN.memo}], 非法,应该为字符型(In GC容器类型(GCContainerType))!(clsGCContainerTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCContainerType_CheckProperty4Update(pobjGCContainerTypeEN: clsGCContainerTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.containerTypeId) == false &&
    GetStrLen(pobjGCContainerTypeEN.containerTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[容器类型Id(containerTypeId)]的长度不能超过4(In GC容器类型(GCContainerType))!值:${pobjGCContainerTypeEN.containerTypeId}(clsGCContainerTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.containerTypeName) == false &&
    GetStrLen(pobjGCContainerTypeEN.containerTypeName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[容器类型名(containerTypeName)]的长度不能超过50(In GC容器类型(GCContainerType))!值:${pobjGCContainerTypeEN.containerTypeName}(clsGCContainerTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.containerTypeENName) == false &&
    GetStrLen(pobjGCContainerTypeEN.containerTypeENName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[容器类型英文名(containerTypeENName)]的长度不能超过50(In GC容器类型(GCContainerType))!值:${pobjGCContainerTypeEN.containerTypeENName}(clsGCContainerTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.updDate) == false &&
    GetStrLen(pobjGCContainerTypeEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In GC容器类型(GCContainerType))!值:${pobjGCContainerTypeEN.updDate}(clsGCContainerTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.updUser) == false &&
    GetStrLen(pobjGCContainerTypeEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In GC容器类型(GCContainerType))!值:${pobjGCContainerTypeEN.updUser}(clsGCContainerTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.memo) == false &&
    GetStrLen(pobjGCContainerTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In GC容器类型(GCContainerType))!值:${pobjGCContainerTypeEN.memo}(clsGCContainerTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.containerTypeId) == false &&
    undefined !== pobjGCContainerTypeEN.containerTypeId &&
    tzDataType.isString(pobjGCContainerTypeEN.containerTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[容器类型Id(containerTypeId)]的值:[${pobjGCContainerTypeEN.containerTypeId}], 非法,应该为字符型(In GC容器类型(GCContainerType))!(clsGCContainerTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.containerTypeName) == false &&
    undefined !== pobjGCContainerTypeEN.containerTypeName &&
    tzDataType.isString(pobjGCContainerTypeEN.containerTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[容器类型名(containerTypeName)]的值:[${pobjGCContainerTypeEN.containerTypeName}], 非法,应该为字符型(In GC容器类型(GCContainerType))!(clsGCContainerTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.containerTypeENName) == false &&
    undefined !== pobjGCContainerTypeEN.containerTypeENName &&
    tzDataType.isString(pobjGCContainerTypeEN.containerTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[容器类型英文名(containerTypeENName)]的值:[${pobjGCContainerTypeEN.containerTypeENName}], 非法,应该为字符型(In GC容器类型(GCContainerType))!(clsGCContainerTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.updDate) == false &&
    undefined !== pobjGCContainerTypeEN.updDate &&
    tzDataType.isString(pobjGCContainerTypeEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjGCContainerTypeEN.updDate}], 非法,应该为字符型(In GC容器类型(GCContainerType))!(clsGCContainerTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.updUser) == false &&
    undefined !== pobjGCContainerTypeEN.updUser &&
    tzDataType.isString(pobjGCContainerTypeEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjGCContainerTypeEN.updUser}], 非法,应该为字符型(In GC容器类型(GCContainerType))!(clsGCContainerTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjGCContainerTypeEN.memo) == false &&
    undefined !== pobjGCContainerTypeEN.memo &&
    tzDataType.isString(pobjGCContainerTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjGCContainerTypeEN.memo}], 非法,应该为字符型(In GC容器类型(GCContainerType))!(clsGCContainerTypeBL:CheckProperty4Update)`,
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
export function GCContainerType_GetJSONStrByObj(
  pobjGCContainerTypeEN: clsGCContainerTypeEN,
): string {
  pobjGCContainerTypeEN.sfUpdFldSetStr = pobjGCContainerTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjGCContainerTypeEN);
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
export function GCContainerType_GetObjLstByJSONStr(strJSON: string): Array<clsGCContainerTypeEN> {
  let arrGCContainerTypeObjLst = new Array<clsGCContainerTypeEN>();
  if (strJSON === '') {
    return arrGCContainerTypeObjLst;
  }
  try {
    arrGCContainerTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrGCContainerTypeObjLst;
  }
  return arrGCContainerTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrGCContainerTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function GCContainerType_GetObjLstByJSONObjLst(
  arrGCContainerTypeObjLstS: Array<clsGCContainerTypeEN>,
): Array<clsGCContainerTypeEN> {
  const arrGCContainerTypeObjLst = new Array<clsGCContainerTypeEN>();
  for (const objInFor of arrGCContainerTypeObjLstS) {
    const obj1 = GCContainerType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrGCContainerTypeObjLst.push(obj1);
  }
  return arrGCContainerTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GCContainerType_GetObjByJSONStr(strJSON: string): clsGCContainerTypeEN {
  let pobjGCContainerTypeEN = new clsGCContainerTypeEN();
  if (strJSON === '') {
    return pobjGCContainerTypeEN;
  }
  try {
    pobjGCContainerTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjGCContainerTypeEN;
  }
  return pobjGCContainerTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function GCContainerType_GetCombineCondition(
  objGCContainerTypeCond: clsGCContainerTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objGCContainerTypeCond.dicFldComparisonOp,
      clsGCContainerTypeEN.con_ContainerTypeId,
    ) == true
  ) {
    const strComparisonOpContainerTypeId: string =
      objGCContainerTypeCond.dicFldComparisonOp[clsGCContainerTypeEN.con_ContainerTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCContainerTypeEN.con_ContainerTypeId,
      objGCContainerTypeCond.containerTypeId,
      strComparisonOpContainerTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCContainerTypeCond.dicFldComparisonOp,
      clsGCContainerTypeEN.con_ContainerTypeName,
    ) == true
  ) {
    const strComparisonOpContainerTypeName: string =
      objGCContainerTypeCond.dicFldComparisonOp[clsGCContainerTypeEN.con_ContainerTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCContainerTypeEN.con_ContainerTypeName,
      objGCContainerTypeCond.containerTypeName,
      strComparisonOpContainerTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCContainerTypeCond.dicFldComparisonOp,
      clsGCContainerTypeEN.con_ContainerTypeENName,
    ) == true
  ) {
    const strComparisonOpContainerTypeENName: string =
      objGCContainerTypeCond.dicFldComparisonOp[clsGCContainerTypeEN.con_ContainerTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCContainerTypeEN.con_ContainerTypeENName,
      objGCContainerTypeCond.containerTypeENName,
      strComparisonOpContainerTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCContainerTypeCond.dicFldComparisonOp,
      clsGCContainerTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objGCContainerTypeCond.dicFldComparisonOp[clsGCContainerTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCContainerTypeEN.con_UpdDate,
      objGCContainerTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCContainerTypeCond.dicFldComparisonOp,
      clsGCContainerTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objGCContainerTypeCond.dicFldComparisonOp[clsGCContainerTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCContainerTypeEN.con_UpdUser,
      objGCContainerTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCContainerTypeCond.dicFldComparisonOp,
      clsGCContainerTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objGCContainerTypeCond.dicFldComparisonOp[clsGCContainerTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCContainerTypeEN.con_Memo,
      objGCContainerTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--GCContainerType(GC容器类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strContainerTypeName: 容器类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function GCContainerType_GetUniCondStr(objGCContainerTypeEN: clsGCContainerTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ContainerTypeName = '{0}'", objGCContainerTypeEN.containerTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--GCContainerType(GC容器类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strContainerTypeName: 容器类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function GCContainerType_GetUniCondStr4Update(
  objGCContainerTypeEN: clsGCContainerTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ContainerTypeId <> '{0}'", objGCContainerTypeEN.containerTypeId);
  strWhereCond += Format(" and ContainerTypeName = '{0}'", objGCContainerTypeEN.containerTypeName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objGCContainerTypeENS:源对象
 * @param objGCContainerTypeENT:目标对象
 */
export function GCContainerType_GetObjFromJsonObj(
  objGCContainerTypeENS: clsGCContainerTypeEN,
): clsGCContainerTypeEN {
  const objGCContainerTypeENT: clsGCContainerTypeEN = new clsGCContainerTypeEN();
  ObjectAssign(objGCContainerTypeENT, objGCContainerTypeENS);
  return objGCContainerTypeENT;
}
