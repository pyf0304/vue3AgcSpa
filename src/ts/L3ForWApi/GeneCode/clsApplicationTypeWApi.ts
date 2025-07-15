/**
 * 类名:clsApplicationTypeWApi
 * 表名:ApplicationType(00050127)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:51:45
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
 * 应用程序类型(ApplicationType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
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
import { applicationTypeCache, isFuncMapCache } from '@/views/GeneCode/ApplicationTypeVueShare';
import { clsApplicationTypeENEx } from '@/ts/L0Entity/GeneCode/clsApplicationTypeENEx';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { Format, GetStrLen, tzDataType, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { ProgLangType_func } from '@/ts/L3ForWApi/SysPara/clsProgLangTypeWApi';
import { clsProgLangTypeEN } from '@/ts/L0Entity/SysPara/clsProgLangTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const applicationType_Controller = 'ApplicationTypeApi';
export const applicationType_ConstructorName = 'applicationType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param intApplicationTypeId:关键字
 * @returns 对象
 **/
export async function ApplicationType_GetObjByApplicationTypeIdAsync(
  intApplicationTypeId: number,
): Promise<clsApplicationTypeEN | null> {
  const strThisFuncName = 'GetObjByApplicationTypeIdAsync';

  if (intApplicationTypeId == 0) {
    const strMsg = Format(
      '参数:[intApplicationTypeId]不能为空!(In clsApplicationTypeWApi.GetObjByApplicationTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByApplicationTypeId';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      intApplicationTypeId,
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
      const objApplicationType = ApplicationType_GetObjFromJsonObj(returnObj);
      return objApplicationType;
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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
 * @param intApplicationTypeId:所给的关键字
 * @returns 对象
 */
export async function ApplicationType_GetObjByApplicationTypeIdlocalStorage(
  intApplicationTypeId: number,
) {
  const strThisFuncName = 'GetObjByApplicationTypeIdlocalStorage';

  if (intApplicationTypeId == 0) {
    const strMsg = Format(
      '参数:[intApplicationTypeId]不能为空!(In clsApplicationTypeWApi.GetObjByApplicationTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsApplicationTypeEN._CurrTabName, intApplicationTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objApplicationTypeCache: clsApplicationTypeEN = JSON.parse(strTempObj);
    return objApplicationTypeCache;
  }
  try {
    const objApplicationType = await ApplicationType_GetObjByApplicationTypeIdAsync(
      intApplicationTypeId,
    );
    if (objApplicationType != null) {
      localStorage.setItem(strKey, JSON.stringify(objApplicationType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objApplicationType;
    }
    return objApplicationType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      intApplicationTypeId,
      applicationType_ConstructorName,
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
 * @param intApplicationTypeId:所给的关键字
 * @returns 对象
 */
export async function ApplicationType_GetObjByApplicationTypeIdCache(
  intApplicationTypeId: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByApplicationTypeIdCache';

  if (intApplicationTypeId == 0) {
    const strMsg = Format(
      '参数:[intApplicationTypeId]不能为空!(In clsApplicationTypeWApi.GetObjByApplicationTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrApplicationTypeObjLstCache = await ApplicationType_GetObjLstCache();
  try {
    const arrApplicationTypeSel = arrApplicationTypeObjLstCache.filter(
      (x) => x.applicationTypeId == intApplicationTypeId,
    );
    let objApplicationType: clsApplicationTypeEN;
    if (arrApplicationTypeSel.length > 0) {
      objApplicationType = arrApplicationTypeSel[0];
      return objApplicationType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objApplicationTypeConst = await ApplicationType_GetObjByApplicationTypeIdAsync(
          intApplicationTypeId,
        );
        if (objApplicationTypeConst != null) {
          ApplicationType_ReFreshThisCache();
          return objApplicationTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      intApplicationTypeId,
      applicationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objApplicationType:所给的对象
 * @returns 对象
 */
export async function ApplicationType_UpdateObjInLstCache(
  objApplicationType: clsApplicationTypeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrApplicationTypeObjLstCache = await ApplicationType_GetObjLstCache();
    const obj = arrApplicationTypeObjLstCache.find(
      (x) => x.applicationTypeName == objApplicationType.applicationTypeName,
    );
    if (obj != null) {
      objApplicationType.applicationTypeId = obj.applicationTypeId;
      ObjectAssign(obj, objApplicationType);
    } else {
      arrApplicationTypeObjLstCache.push(objApplicationType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      applicationType_ConstructorName,
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
export function ApplicationType_SortFunDefa(
  a: clsApplicationTypeEN,
  b: clsApplicationTypeEN,
): number {
  return a.applicationTypeId - b.applicationTypeId;
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
export function ApplicationType_SortFunDefa2Fld(
  a: clsApplicationTypeEN,
  b: clsApplicationTypeEN,
): number {
  if (a.applicationTypeName == b.applicationTypeName)
    return a.applicationTypeSimName.localeCompare(b.applicationTypeSimName);
  else return a.applicationTypeName.localeCompare(b.applicationTypeName);
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
export function ApplicationType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsApplicationTypeEN.con_ApplicationTypeId:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsApplicationTypeEN.con_ApplicationTypeName:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          return a.applicationTypeName.localeCompare(b.applicationTypeName);
        };
      case clsApplicationTypeEN.con_ApplicationTypeSimName:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          if (a.applicationTypeSimName == null) return -1;
          if (b.applicationTypeSimName == null) return 1;
          return a.applicationTypeSimName.localeCompare(b.applicationTypeSimName);
        };
      case clsApplicationTypeEN.con_ApplicationTypeENName:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          return a.applicationTypeENName.localeCompare(b.applicationTypeENName);
        };
      case clsApplicationTypeEN.con_ProgLangTypeId:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          if (a.progLangTypeId == null) return -1;
          if (b.progLangTypeId == null) return 1;
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsApplicationTypeEN.con_ProgLangTypeId2:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          if (a.progLangTypeId2 == null) return -1;
          if (b.progLangTypeId2 == null) return 1;
          return a.progLangTypeId2.localeCompare(b.progLangTypeId2);
        };
      case clsApplicationTypeEN.con_ProgLangTypeId3:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          if (a.progLangTypeId3 == null) return -1;
          if (b.progLangTypeId3 == null) return 1;
          return a.progLangTypeId3.localeCompare(b.progLangTypeId3);
        };
      case clsApplicationTypeEN.con_ProgLangTypeId4:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          if (a.progLangTypeId4 == null) return -1;
          if (b.progLangTypeId4 == null) return 1;
          return a.progLangTypeId4.localeCompare(b.progLangTypeId4);
        };
      case clsApplicationTypeEN.con_ProgLangTypeId5:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          if (a.progLangTypeId5 == null) return -1;
          if (b.progLangTypeId5 == null) return 1;
          return a.progLangTypeId5.localeCompare(b.progLangTypeId5);
        };
      case clsApplicationTypeEN.con_IsVisible:
        return (a: clsApplicationTypeEN) => {
          if (a.isVisible == true) return 1;
          else return -1;
        };
      case clsApplicationTypeEN.con_VisitedNum:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          return a.visitedNum - b.visitedNum;
        };
      case clsApplicationTypeEN.con_OrderNum:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsApplicationTypeEN.con_Memo:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ApplicationType]中不存在!(in ${applicationType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsApplicationTypeEN.con_ApplicationTypeId:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsApplicationTypeEN.con_ApplicationTypeName:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          return b.applicationTypeName.localeCompare(a.applicationTypeName);
        };
      case clsApplicationTypeEN.con_ApplicationTypeSimName:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          if (b.applicationTypeSimName == null) return -1;
          if (a.applicationTypeSimName == null) return 1;
          return b.applicationTypeSimName.localeCompare(a.applicationTypeSimName);
        };
      case clsApplicationTypeEN.con_ApplicationTypeENName:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          return b.applicationTypeENName.localeCompare(a.applicationTypeENName);
        };
      case clsApplicationTypeEN.con_ProgLangTypeId:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          if (b.progLangTypeId == null) return -1;
          if (a.progLangTypeId == null) return 1;
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsApplicationTypeEN.con_ProgLangTypeId2:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          if (b.progLangTypeId2 == null) return -1;
          if (a.progLangTypeId2 == null) return 1;
          return b.progLangTypeId2.localeCompare(a.progLangTypeId2);
        };
      case clsApplicationTypeEN.con_ProgLangTypeId3:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          if (b.progLangTypeId3 == null) return -1;
          if (a.progLangTypeId3 == null) return 1;
          return b.progLangTypeId3.localeCompare(a.progLangTypeId3);
        };
      case clsApplicationTypeEN.con_ProgLangTypeId4:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          if (b.progLangTypeId4 == null) return -1;
          if (a.progLangTypeId4 == null) return 1;
          return b.progLangTypeId4.localeCompare(a.progLangTypeId4);
        };
      case clsApplicationTypeEN.con_ProgLangTypeId5:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          if (b.progLangTypeId5 == null) return -1;
          if (a.progLangTypeId5 == null) return 1;
          return b.progLangTypeId5.localeCompare(a.progLangTypeId5);
        };
      case clsApplicationTypeEN.con_IsVisible:
        return (b: clsApplicationTypeEN) => {
          if (b.isVisible == true) return 1;
          else return -1;
        };
      case clsApplicationTypeEN.con_VisitedNum:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          return b.visitedNum - a.visitedNum;
        };
      case clsApplicationTypeEN.con_OrderNum:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsApplicationTypeEN.con_Memo:
        return (a: clsApplicationTypeEN, b: clsApplicationTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ApplicationType]中不存在!(in ${applicationType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param intApplicationTypeId:所给的关键字
 * @returns 对象
 */
export async function ApplicationType_GetNameByApplicationTypeIdCache(
  intApplicationTypeId: number,
) {
  if (intApplicationTypeId == 0) {
    const strMsg = Format(
      '参数:[intApplicationTypeId]不能为空!(In clsApplicationTypeWApi.GetNameByApplicationTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrApplicationTypeObjLstCache = await ApplicationType_GetObjLstCache();
  if (arrApplicationTypeObjLstCache == null) return '';
  try {
    const arrApplicationTypeSel = arrApplicationTypeObjLstCache.filter(
      (x) => x.applicationTypeId == intApplicationTypeId,
    );
    let objApplicationType: clsApplicationTypeEN;
    if (arrApplicationTypeSel.length > 0) {
      objApplicationType = arrApplicationTypeSel[0];
      return objApplicationType.applicationTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      intApplicationTypeId,
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
export async function ApplicationType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsApplicationTypeEN.con_ApplicationTypeId:
      return (obj: clsApplicationTypeEN) => {
        return obj.applicationTypeId === value;
      };
    case clsApplicationTypeEN.con_ApplicationTypeName:
      return (obj: clsApplicationTypeEN) => {
        return obj.applicationTypeName === value;
      };
    case clsApplicationTypeEN.con_ApplicationTypeSimName:
      return (obj: clsApplicationTypeEN) => {
        return obj.applicationTypeSimName === value;
      };
    case clsApplicationTypeEN.con_ApplicationTypeENName:
      return (obj: clsApplicationTypeEN) => {
        return obj.applicationTypeENName === value;
      };
    case clsApplicationTypeEN.con_ProgLangTypeId:
      return (obj: clsApplicationTypeEN) => {
        return obj.progLangTypeId === value;
      };
    case clsApplicationTypeEN.con_ProgLangTypeId2:
      return (obj: clsApplicationTypeEN) => {
        return obj.progLangTypeId2 === value;
      };
    case clsApplicationTypeEN.con_ProgLangTypeId3:
      return (obj: clsApplicationTypeEN) => {
        return obj.progLangTypeId3 === value;
      };
    case clsApplicationTypeEN.con_ProgLangTypeId4:
      return (obj: clsApplicationTypeEN) => {
        return obj.progLangTypeId4 === value;
      };
    case clsApplicationTypeEN.con_ProgLangTypeId5:
      return (obj: clsApplicationTypeEN) => {
        return obj.progLangTypeId5 === value;
      };
    case clsApplicationTypeEN.con_IsVisible:
      return (obj: clsApplicationTypeEN) => {
        return obj.isVisible === value;
      };
    case clsApplicationTypeEN.con_VisitedNum:
      return (obj: clsApplicationTypeEN) => {
        return obj.visitedNum === value;
      };
    case clsApplicationTypeEN.con_OrderNum:
      return (obj: clsApplicationTypeEN) => {
        return obj.orderNum === value;
      };
    case clsApplicationTypeEN.con_Memo:
      return (obj: clsApplicationTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ApplicationType]中不存在!(in ${applicationType_ConstructorName}.${strThisFuncName})`;
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
export async function ApplicationType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsApplicationTypeEN.con_ApplicationTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsApplicationTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsApplicationTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const intApplicationTypeId = Number(strInValue);
  if (intApplicationTypeId == 0) {
    return '';
  }
  const objApplicationType = await ApplicationType_GetObjByApplicationTypeIdCache(
    intApplicationTypeId,
  );
  if (objApplicationType == null) return '';
  if (objApplicationType.GetFldValue(strOutFldName) == null) return '';
  return objApplicationType.GetFldValue(strOutFldName).toString();
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
export async function ApplicationType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsApplicationTypeEN.con_ApplicationTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrApplicationType = await ApplicationType_GetObjLstCache();
  if (arrApplicationType == null) return [];
  let arrApplicationTypeSel = arrApplicationType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrApplicationTypeSel = arrApplicationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrApplicationTypeSel = arrApplicationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrApplicationTypeSel = arrApplicationTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrApplicationTypeSel = arrApplicationTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrApplicationTypeSel = arrApplicationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrApplicationTypeSel = arrApplicationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrApplicationTypeSel = arrApplicationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrApplicationTypeSel = arrApplicationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrApplicationTypeSel = arrApplicationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrApplicationTypeSel = arrApplicationTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrApplicationTypeSel.length == 0) return [];
  return arrApplicationTypeSel.map((x) => x.applicationTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ApplicationType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
export async function ApplicationType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
export async function ApplicationType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
export async function ApplicationType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsApplicationTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

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
      const objApplicationType = ApplicationType_GetObjFromJsonObj(returnObj);
      return objApplicationType;
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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
export async function ApplicationType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsApplicationTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsApplicationTypeEN.WhereFormat) == false) {
    strWhereCond = clsApplicationTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsApplicationTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsApplicationTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrApplicationTypeExObjLstCache: Array<clsApplicationTypeEN> = CacheHelper.Get(strKey);
    const arrApplicationTypeObjLstT = ApplicationType_GetObjLstByJSONObjLst(
      arrApplicationTypeExObjLstCache,
    );
    return arrApplicationTypeObjLstT;
  }
  try {
    const arrApplicationTypeExObjLst = await ApplicationType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrApplicationTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrApplicationTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrApplicationTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      applicationType_ConstructorName,
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
export async function ApplicationType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsApplicationTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsApplicationTypeEN.WhereFormat) == false) {
    strWhereCond = clsApplicationTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsApplicationTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsApplicationTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrApplicationTypeExObjLstCache: Array<clsApplicationTypeEN> = JSON.parse(strTempObjLst);
    const arrApplicationTypeObjLstT = ApplicationType_GetObjLstByJSONObjLst(
      arrApplicationTypeExObjLstCache,
    );
    return arrApplicationTypeObjLstT;
  }
  try {
    const arrApplicationTypeExObjLst = await ApplicationType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrApplicationTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrApplicationTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrApplicationTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      applicationType_ConstructorName,
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
export async function ApplicationType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsApplicationTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrApplicationTypeObjLstCache: Array<clsApplicationTypeEN> = JSON.parse(strTempObjLst);
    return arrApplicationTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ApplicationType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsApplicationTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

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
          applicationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ApplicationType_GetObjLstByJSONObjLst(returnObjLst);
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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
export async function ApplicationType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsApplicationTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsApplicationTypeEN.WhereFormat) == false) {
    strWhereCond = clsApplicationTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsApplicationTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsApplicationTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrApplicationTypeExObjLstCache: Array<clsApplicationTypeEN> = JSON.parse(strTempObjLst);
    const arrApplicationTypeObjLstT = ApplicationType_GetObjLstByJSONObjLst(
      arrApplicationTypeExObjLstCache,
    );
    return arrApplicationTypeObjLstT;
  }
  try {
    const arrApplicationTypeExObjLst = await ApplicationType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrApplicationTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrApplicationTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrApplicationTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      applicationType_ConstructorName,
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
export async function ApplicationType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsApplicationTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrApplicationTypeObjLstCache: Array<clsApplicationTypeEN> = JSON.parse(strTempObjLst);
    return arrApplicationTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ApplicationType_GetObjLstCache(): Promise<Array<clsApplicationTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrApplicationTypeObjLstCache;
  switch (clsApplicationTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrApplicationTypeObjLstCache = await ApplicationType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrApplicationTypeObjLstCache = await ApplicationType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrApplicationTypeObjLstCache = await ApplicationType_GetObjLstClientCache();
      break;
    default:
      arrApplicationTypeObjLstCache = await ApplicationType_GetObjLstClientCache();
      break;
  }
  return arrApplicationTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ApplicationType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrApplicationTypeObjLstCache;
  switch (clsApplicationTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrApplicationTypeObjLstCache = await ApplicationType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrApplicationTypeObjLstCache = await ApplicationType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrApplicationTypeObjLstCache = null;
      break;
    default:
      arrApplicationTypeObjLstCache = null;
      break;
  }
  return arrApplicationTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objintApplicationTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ApplicationType_GetSubObjLstCache(
  objApplicationTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrApplicationTypeObjLstCache = await ApplicationType_GetObjLstCache();
  let arrApplicationTypeSel = arrApplicationTypeObjLstCache;
  if (objApplicationTypeCond.GetConditions().length == 0) return arrApplicationTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objApplicationTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrApplicationTypeSel = arrApplicationTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrApplicationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objApplicationTypeCond),
      applicationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsApplicationTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrApplicationTypeId:关键字列表
 * @returns 对象列表
 **/
export async function ApplicationType_GetObjLstByApplicationTypeIdLstAsync(
  arrApplicationTypeId: Array<string>,
): Promise<Array<clsApplicationTypeEN>> {
  const strThisFuncName = 'GetObjLstByApplicationTypeIdLstAsync';
  const strAction = 'GetObjLstByApplicationTypeIdLst';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrApplicationTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          applicationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ApplicationType_GetObjLstByJSONObjLst(returnObjLst);
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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
 * @param arrintApplicationTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function ApplicationType_GetObjLstByApplicationTypeIdLstCache(
  arrApplicationTypeIdLst: Array<number>,
) {
  const strThisFuncName = 'GetObjLstByApplicationTypeIdLstCache';
  try {
    const arrApplicationTypeObjLstCache = await ApplicationType_GetObjLstCache();
    const arrApplicationTypeSel = arrApplicationTypeObjLstCache.filter(
      (x) => arrApplicationTypeIdLst.indexOf(x.applicationTypeId) > -1,
    );
    return arrApplicationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrApplicationTypeIdLst.join(','),
      applicationType_ConstructorName,
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
export async function ApplicationType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsApplicationTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

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
          applicationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ApplicationType_GetObjLstByJSONObjLst(returnObjLst);
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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
export async function ApplicationType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsApplicationTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

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
          applicationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ApplicationType_GetObjLstByJSONObjLst(returnObjLst);
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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
export async function ApplicationType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsApplicationTypeEN>();
  const arrApplicationTypeObjLstCache = await ApplicationType_GetObjLstCache();
  if (arrApplicationTypeObjLstCache.length == 0) return arrApplicationTypeObjLstCache;
  let arrApplicationTypeSel = arrApplicationTypeObjLstCache;
  const objApplicationTypeCond = objPagerPara.conditionCollection;
  if (objApplicationTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsApplicationTypeEN>();
  }
  //console.log("clsApplicationTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objApplicationTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrApplicationTypeSel = arrApplicationTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrApplicationTypeSel.length == 0) return arrApplicationTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrApplicationTypeSel = arrApplicationTypeSel.sort(
        ApplicationType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrApplicationTypeSel = arrApplicationTypeSel.sort(objPagerPara.sortFun);
    }
    arrApplicationTypeSel = arrApplicationTypeSel.slice(intStart, intEnd);
    return arrApplicationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      applicationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsApplicationTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ApplicationType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsApplicationTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsApplicationTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

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
          applicationType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ApplicationType_GetObjLstByJSONObjLst(returnObjLst);
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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
 * @param intApplicationTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function ApplicationType_DelRecordAsync(
  intApplicationTypeId: number,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(applicationType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, intApplicationTypeId);

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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
 * @param arrApplicationTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ApplicationType_DelApplicationTypesAsync(
  arrApplicationTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelApplicationTypesAsync';
  const strAction = 'DelApplicationTypes';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrApplicationTypeId, config);
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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
export async function ApplicationType_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsApplicationTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrApplicationTypeObjLst = await ApplicationType_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsApplicationTypeENEx>();
  const arrApplicationTypeExObjLst = arrApplicationTypeObjLst.map((obj) => {
    const cacheKey = `${obj.applicationTypeId}`;
    if (applicationTypeCache[cacheKey]) {
      const oldObj = applicationTypeCache[cacheKey];
      return oldObj;
    } else {
      const newObj = ApplicationType_CopyToEx(obj);
      arrNewObj.push(newObj);
      applicationTypeCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await ApplicationType_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsApplicationTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrApplicationTypeExObjLst) {
      await ApplicationType_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.applicationTypeId}`;
      applicationTypeCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrApplicationTypeExObjLst.length == 0) return arrApplicationTypeExObjLst;
  let arrApplicationTypeSel: Array<clsApplicationTypeENEx> = arrApplicationTypeExObjLst;
  const objApplicationTypeCond = objPagerPara.conditionCollection;
  if (objApplicationTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrApplicationTypeExObjLst;
  }
  try {
    for (const objCondition of objApplicationTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrApplicationTypeSel = arrApplicationTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrApplicationTypeSel.length == 0) return arrApplicationTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrApplicationTypeSel = arrApplicationTypeSel.sort(
        ApplicationType_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrApplicationTypeSel = arrApplicationTypeSel.sort(objPagerPara.sortFun);
    }
    arrApplicationTypeSel = arrApplicationTypeSel.slice(intStart, intEnd);
    return arrApplicationTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      applicationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsApplicationTypeENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objApplicationTypeENS:源对象
 * @returns 目标对象=>clsApplicationTypeEN:objApplicationTypeENT
 **/
export function ApplicationType_CopyToEx(
  objApplicationTypeENS: clsApplicationTypeEN,
): clsApplicationTypeENEx {
  const strThisFuncName = ApplicationType_CopyToEx.name;
  const objApplicationTypeENT = new clsApplicationTypeENEx();
  try {
    ObjectAssign(objApplicationTypeENT, objApplicationTypeENS);
    return objApplicationTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      applicationType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objApplicationTypeENT;
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
export function ApplicationType_FuncMapByFldName(
  strFldName: string,
  objApplicationTypeEx: clsApplicationTypeENEx,
) {
  const strThisFuncName = ApplicationType_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsApplicationTypeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsApplicationTypeENEx.con_ProgLangTypeName:
      return ApplicationType_FuncMapProgLangTypeName(objApplicationTypeEx);
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
export function ApplicationType_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsApplicationTypeENEx.con_ProgLangTypeName:
        return (a: clsApplicationTypeENEx, b: clsApplicationTypeENEx) => {
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      default:
        return ApplicationType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsApplicationTypeENEx.con_ProgLangTypeName:
        return (a: clsApplicationTypeENEx, b: clsApplicationTypeENEx) => {
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      default:
        return ApplicationType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objApplicationTypeS:源对象
 **/
export async function ApplicationType_FuncMapProgLangTypeName(
  objApplicationType: clsApplicationTypeENEx,
) {
  const strThisFuncName = ApplicationType_FuncMapProgLangTypeName.name;
  try {
    if (IsNullOrEmpty(objApplicationType.progLangTypeName) == true) {
      const ProgLangTypeProgLangTypeId = objApplicationType.progLangTypeId;
      const ProgLangTypeProgLangTypeName = await ProgLangType_func(
        clsProgLangTypeEN.con_ProgLangTypeId,
        clsProgLangTypeEN.con_ProgLangTypeName,
        ProgLangTypeProgLangTypeId,
      );
      objApplicationType.progLangTypeName = ProgLangTypeProgLangTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001312)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      applicationType_ConstructorName,
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
export async function ApplicationType_DelApplicationTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelApplicationTypesByCondAsync';
  const strAction = 'DelApplicationTypesByCond';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
 * @param objApplicationTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ApplicationType_AddNewRecordAsync(
  objApplicationTypeEN: clsApplicationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objApplicationTypeEN);
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objApplicationTypeEN, config);
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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function ApplicationType_AddNewObjSave(
  objApplicationTypeEN: clsApplicationTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    ApplicationType_CheckPropertyNew(objApplicationTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${applicationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ApplicationType_CheckUniCond4Add(objApplicationTypeEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await ApplicationType_AddNewRecordAsync(objApplicationTypeEN);
    if (returnBool == true) {
      ApplicationType_ReFreshCache();
    } else {
      const strInfo = `添加[应用程序类型(ApplicationType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objApplicationTypeEN.applicationTypeId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${applicationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function ApplicationType_CheckUniCond4Add(
  objApplicationTypeEN: clsApplicationTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = ApplicationType_GetUniCondStr(objApplicationTypeEN);
  const bolIsExistCondition = await ApplicationType_IsExistRecordAsync(strUniquenessCondition);
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
export async function ApplicationType_CheckUniCond4Update(
  objApplicationTypeEN: clsApplicationTypeEN,
): Promise<boolean> {
  const strUniquenessCondition = ApplicationType_GetUniCondStr4Update(objApplicationTypeEN);
  const bolIsExistCondition = await ApplicationType_IsExistRecordAsync(strUniquenessCondition);
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
export async function ApplicationType_UpdateObjSave(
  objApplicationTypeEN: clsApplicationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objApplicationTypeEN.sfUpdFldSetStr = objApplicationTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objApplicationTypeEN.applicationTypeId == 0 ||
    objApplicationTypeEN.applicationTypeId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    ApplicationType_CheckProperty4Update(objApplicationTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${applicationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ApplicationType_CheckUniCond4Update(objApplicationTypeEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await ApplicationType_UpdateRecordAsync(objApplicationTypeEN);
    if (returnBool == true) {
      ApplicationType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${applicationType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objApplicationTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ApplicationType_AddNewRecordWithReturnKeyAsync(
  objApplicationTypeEN: clsApplicationTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objApplicationTypeEN, config);
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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
 * @param objApplicationTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ApplicationType_UpdateRecordAsync(
  objApplicationTypeEN: clsApplicationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objApplicationTypeEN.sfUpdFldSetStr === undefined ||
    objApplicationTypeEN.sfUpdFldSetStr === null ||
    objApplicationTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objApplicationTypeEN.applicationTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objApplicationTypeEN, config);
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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
 * @param objApplicationTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ApplicationType_EditRecordExAsync(
  objApplicationTypeEN: clsApplicationTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objApplicationTypeEN.sfUpdFldSetStr === undefined ||
    objApplicationTypeEN.sfUpdFldSetStr === null ||
    objApplicationTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objApplicationTypeEN.applicationTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objApplicationTypeEN, config);
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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
 * @param objApplicationTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ApplicationType_UpdateWithConditionAsync(
  objApplicationTypeEN: clsApplicationTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objApplicationTypeEN.sfUpdFldSetStr === undefined ||
    objApplicationTypeEN.sfUpdFldSetStr === null ||
    objApplicationTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objApplicationTypeEN.applicationTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);
  objApplicationTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objApplicationTypeEN, config);
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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
 * @param objintApplicationTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ApplicationType_IsExistRecordCache(
  objApplicationTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrApplicationTypeObjLstCache = await ApplicationType_GetObjLstCache();
  if (arrApplicationTypeObjLstCache == null) return false;
  let arrApplicationTypeSel = arrApplicationTypeObjLstCache;
  if (objApplicationTypeCond.GetConditions().length == 0)
    return arrApplicationTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objApplicationTypeCond.GetConditions()) {
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
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrApplicationTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objApplicationTypeCond),
      applicationType_ConstructorName,
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
export async function ApplicationType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
 * @param intApplicationTypeId:所给的关键字
 * @returns 对象
 */
export async function ApplicationType_IsExistCache(intApplicationTypeId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrApplicationTypeObjLstCache = await ApplicationType_GetObjLstCache();
  if (arrApplicationTypeObjLstCache == null) return false;
  try {
    const arrApplicationTypeSel = arrApplicationTypeObjLstCache.filter(
      (x) => x.applicationTypeId == intApplicationTypeId,
    );
    if (arrApplicationTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      intApplicationTypeId,
      applicationType_ConstructorName,
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
 * @param intApplicationTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ApplicationType_IsExistAsync(intApplicationTypeId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      intApplicationTypeId,
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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
export async function ApplicationType_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
 * @param objApplicationTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function ApplicationType_GetRecCountByCondCache(
  objApplicationTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrApplicationTypeObjLstCache = await ApplicationType_GetObjLstCache();
  if (arrApplicationTypeObjLstCache == null) return 0;
  let arrApplicationTypeSel = arrApplicationTypeObjLstCache;
  if (objApplicationTypeCond.GetConditions().length == 0) return arrApplicationTypeSel.length;
  try {
    for (const objCondition of objApplicationTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrApplicationTypeSel = arrApplicationTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrApplicationTypeSel = arrApplicationTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrApplicationTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objApplicationTypeCond),
      applicationType_ConstructorName,
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
export async function ApplicationType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(applicationType_Controller, strAction);

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
        applicationType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        applicationType_ConstructorName,
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
export function ApplicationType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ApplicationType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsApplicationTypeEN._CurrTabName;
  switch (clsApplicationTypeEN.CacheModeId) {
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
  clsApplicationTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ApplicationType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsApplicationTypeEN._CurrTabName;
    switch (clsApplicationTypeEN.CacheModeId) {
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
    clsApplicationTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function ApplicationType_GetLastRefreshTime(): string {
  if (clsApplicationTypeEN._RefreshTimeLst.length == 0) return '';
  return clsApplicationTypeEN._RefreshTimeLst[clsApplicationTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function ApplicationType_BindDdl_ApplicationTypeIdByIsVisibleInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_ApplicationTypeIdByIsVisibleInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ApplicationTypeIdByIsVisibleInDivCache");
  let arrObjLstSel = await ApplicationType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsApplicationTypeEN.con_ApplicationTypeId,
    clsApplicationTypeEN.con_ApplicationTypeName,
    '应用程序类型...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function ApplicationType_GetArrApplicationTypeByIsVisible() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ApplicationTypeIdByIsVisibleInDivCache");
  const arrApplicationType = new Array<clsApplicationTypeEN>();
  let arrObjLstSel = await ApplicationType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.orderNum - y.orderNum);
  const obj0 = new clsApplicationTypeEN();
  obj0.applicationTypeId = 0;
  obj0.applicationTypeName = '选应用程序类型...';
  arrApplicationType.push(obj0);
  arrObjLstSel.forEach((x) => arrApplicationType.push(x));
  return arrApplicationType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ApplicationType_CheckPropertyNew(pobjApplicationTypeEN: clsApplicationTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjApplicationTypeEN.applicationTypeName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[应用程序类型名称]不能为空(In 应用程序类型)!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjApplicationTypeEN.applicationTypeENName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[应用类型英文名]不能为空(In 应用程序类型)!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjApplicationTypeEN.orderNum ||
    (pobjApplicationTypeEN.orderNum != null && pobjApplicationTypeEN.orderNum.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[序号]不能为空(In 应用程序类型)!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.applicationTypeName) == false &&
    GetStrLen(pobjApplicationTypeEN.applicationTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[应用程序类型名称(applicationTypeName)]的长度不能超过30(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.applicationTypeName}(clsApplicationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.applicationTypeSimName) == false &&
    GetStrLen(pobjApplicationTypeEN.applicationTypeSimName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[应用程序类型简称(applicationTypeSimName)]的长度不能超过30(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.applicationTypeSimName}(clsApplicationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.applicationTypeENName) == false &&
    GetStrLen(pobjApplicationTypeEN.applicationTypeENName) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[应用类型英文名(applicationTypeENName)]的长度不能超过30(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.applicationTypeENName}(clsApplicationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId) == false &&
    GetStrLen(pobjApplicationTypeEN.progLangTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.progLangTypeId}(clsApplicationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId2) == false &&
    GetStrLen(pobjApplicationTypeEN.progLangTypeId2) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[编程语言类型Id2(progLangTypeId2)]的长度不能超过2(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.progLangTypeId2}(clsApplicationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId3) == false &&
    GetStrLen(pobjApplicationTypeEN.progLangTypeId3) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[编程语言类型Id3(progLangTypeId3)]的长度不能超过2(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.progLangTypeId3}(clsApplicationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId4) == false &&
    GetStrLen(pobjApplicationTypeEN.progLangTypeId4) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[编程语言类型Id4(progLangTypeId4)]的长度不能超过2(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.progLangTypeId4}(clsApplicationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId5) == false &&
    GetStrLen(pobjApplicationTypeEN.progLangTypeId5) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[编程语言类型Id5(progLangTypeId5)]的长度不能超过2(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.progLangTypeId5}(clsApplicationTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.memo) == false &&
    GetStrLen(pobjApplicationTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.memo}(clsApplicationTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjApplicationTypeEN.applicationTypeId &&
    undefined !== pobjApplicationTypeEN.applicationTypeId &&
    tzDataType.isNumber(pobjApplicationTypeEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjApplicationTypeEN.applicationTypeId}], 非法,应该为数值型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.applicationTypeName) == false &&
    undefined !== pobjApplicationTypeEN.applicationTypeName &&
    tzDataType.isString(pobjApplicationTypeEN.applicationTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[应用程序类型名称(applicationTypeName)]的值:[${pobjApplicationTypeEN.applicationTypeName}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.applicationTypeSimName) == false &&
    undefined !== pobjApplicationTypeEN.applicationTypeSimName &&
    tzDataType.isString(pobjApplicationTypeEN.applicationTypeSimName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[应用程序类型简称(applicationTypeSimName)]的值:[${pobjApplicationTypeEN.applicationTypeSimName}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.applicationTypeENName) == false &&
    undefined !== pobjApplicationTypeEN.applicationTypeENName &&
    tzDataType.isString(pobjApplicationTypeEN.applicationTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[应用类型英文名(applicationTypeENName)]的值:[${pobjApplicationTypeEN.applicationTypeENName}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId) == false &&
    undefined !== pobjApplicationTypeEN.progLangTypeId &&
    tzDataType.isString(pobjApplicationTypeEN.progLangTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[编程语言类型Id(progLangTypeId)]的值:[${pobjApplicationTypeEN.progLangTypeId}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId2) == false &&
    undefined !== pobjApplicationTypeEN.progLangTypeId2 &&
    tzDataType.isString(pobjApplicationTypeEN.progLangTypeId2) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[编程语言类型Id2(progLangTypeId2)]的值:[${pobjApplicationTypeEN.progLangTypeId2}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId3) == false &&
    undefined !== pobjApplicationTypeEN.progLangTypeId3 &&
    tzDataType.isString(pobjApplicationTypeEN.progLangTypeId3) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[编程语言类型Id3(progLangTypeId3)]的值:[${pobjApplicationTypeEN.progLangTypeId3}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId4) == false &&
    undefined !== pobjApplicationTypeEN.progLangTypeId4 &&
    tzDataType.isString(pobjApplicationTypeEN.progLangTypeId4) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[编程语言类型Id4(progLangTypeId4)]的值:[${pobjApplicationTypeEN.progLangTypeId4}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId5) == false &&
    undefined !== pobjApplicationTypeEN.progLangTypeId5 &&
    tzDataType.isString(pobjApplicationTypeEN.progLangTypeId5) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[编程语言类型Id5(progLangTypeId5)]的值:[${pobjApplicationTypeEN.progLangTypeId5}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjApplicationTypeEN.isVisible &&
    undefined !== pobjApplicationTypeEN.isVisible &&
    tzDataType.isBoolean(pobjApplicationTypeEN.isVisible) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否显示(isVisible)]的值:[${pobjApplicationTypeEN.isVisible}], 非法,应该为布尔型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjApplicationTypeEN.visitedNum &&
    undefined !== pobjApplicationTypeEN.visitedNum &&
    tzDataType.isNumber(pobjApplicationTypeEN.visitedNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[访问数(visitedNum)]的值:[${pobjApplicationTypeEN.visitedNum}], 非法,应该为数值型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjApplicationTypeEN.orderNum &&
    undefined !== pobjApplicationTypeEN.orderNum &&
    tzDataType.isNumber(pobjApplicationTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjApplicationTypeEN.orderNum}], 非法,应该为数值型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.memo) == false &&
    undefined !== pobjApplicationTypeEN.memo &&
    tzDataType.isString(pobjApplicationTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjApplicationTypeEN.memo}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ApplicationType_CheckProperty4Update(pobjApplicationTypeEN: clsApplicationTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.applicationTypeName) == false &&
    GetStrLen(pobjApplicationTypeEN.applicationTypeName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[应用程序类型名称(applicationTypeName)]的长度不能超过30(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.applicationTypeName}(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.applicationTypeSimName) == false &&
    GetStrLen(pobjApplicationTypeEN.applicationTypeSimName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[应用程序类型简称(applicationTypeSimName)]的长度不能超过30(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.applicationTypeSimName}(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.applicationTypeENName) == false &&
    GetStrLen(pobjApplicationTypeEN.applicationTypeENName) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[应用类型英文名(applicationTypeENName)]的长度不能超过30(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.applicationTypeENName}(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId) == false &&
    GetStrLen(pobjApplicationTypeEN.progLangTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[编程语言类型Id(progLangTypeId)]的长度不能超过2(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.progLangTypeId}(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId2) == false &&
    GetStrLen(pobjApplicationTypeEN.progLangTypeId2) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[编程语言类型Id2(progLangTypeId2)]的长度不能超过2(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.progLangTypeId2}(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId3) == false &&
    GetStrLen(pobjApplicationTypeEN.progLangTypeId3) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[编程语言类型Id3(progLangTypeId3)]的长度不能超过2(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.progLangTypeId3}(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId4) == false &&
    GetStrLen(pobjApplicationTypeEN.progLangTypeId4) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[编程语言类型Id4(progLangTypeId4)]的长度不能超过2(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.progLangTypeId4}(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId5) == false &&
    GetStrLen(pobjApplicationTypeEN.progLangTypeId5) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[编程语言类型Id5(progLangTypeId5)]的长度不能超过2(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.progLangTypeId5}(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.memo) == false &&
    GetStrLen(pobjApplicationTypeEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 应用程序类型(ApplicationType))!值:${pobjApplicationTypeEN.memo}(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjApplicationTypeEN.applicationTypeId &&
    undefined !== pobjApplicationTypeEN.applicationTypeId &&
    tzDataType.isNumber(pobjApplicationTypeEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjApplicationTypeEN.applicationTypeId}], 非法,应该为数值型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.applicationTypeName) == false &&
    undefined !== pobjApplicationTypeEN.applicationTypeName &&
    tzDataType.isString(pobjApplicationTypeEN.applicationTypeName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[应用程序类型名称(applicationTypeName)]的值:[${pobjApplicationTypeEN.applicationTypeName}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.applicationTypeSimName) == false &&
    undefined !== pobjApplicationTypeEN.applicationTypeSimName &&
    tzDataType.isString(pobjApplicationTypeEN.applicationTypeSimName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[应用程序类型简称(applicationTypeSimName)]的值:[${pobjApplicationTypeEN.applicationTypeSimName}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.applicationTypeENName) == false &&
    undefined !== pobjApplicationTypeEN.applicationTypeENName &&
    tzDataType.isString(pobjApplicationTypeEN.applicationTypeENName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[应用类型英文名(applicationTypeENName)]的值:[${pobjApplicationTypeEN.applicationTypeENName}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId) == false &&
    undefined !== pobjApplicationTypeEN.progLangTypeId &&
    tzDataType.isString(pobjApplicationTypeEN.progLangTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[编程语言类型Id(progLangTypeId)]的值:[${pobjApplicationTypeEN.progLangTypeId}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId2) == false &&
    undefined !== pobjApplicationTypeEN.progLangTypeId2 &&
    tzDataType.isString(pobjApplicationTypeEN.progLangTypeId2) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[编程语言类型Id2(progLangTypeId2)]的值:[${pobjApplicationTypeEN.progLangTypeId2}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId3) == false &&
    undefined !== pobjApplicationTypeEN.progLangTypeId3 &&
    tzDataType.isString(pobjApplicationTypeEN.progLangTypeId3) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[编程语言类型Id3(progLangTypeId3)]的值:[${pobjApplicationTypeEN.progLangTypeId3}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId4) == false &&
    undefined !== pobjApplicationTypeEN.progLangTypeId4 &&
    tzDataType.isString(pobjApplicationTypeEN.progLangTypeId4) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[编程语言类型Id4(progLangTypeId4)]的值:[${pobjApplicationTypeEN.progLangTypeId4}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.progLangTypeId5) == false &&
    undefined !== pobjApplicationTypeEN.progLangTypeId5 &&
    tzDataType.isString(pobjApplicationTypeEN.progLangTypeId5) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[编程语言类型Id5(progLangTypeId5)]的值:[${pobjApplicationTypeEN.progLangTypeId5}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjApplicationTypeEN.isVisible &&
    undefined !== pobjApplicationTypeEN.isVisible &&
    tzDataType.isBoolean(pobjApplicationTypeEN.isVisible) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否显示(isVisible)]的值:[${pobjApplicationTypeEN.isVisible}], 非法,应该为布尔型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjApplicationTypeEN.visitedNum &&
    undefined !== pobjApplicationTypeEN.visitedNum &&
    tzDataType.isNumber(pobjApplicationTypeEN.visitedNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[访问数(visitedNum)]的值:[${pobjApplicationTypeEN.visitedNum}], 非法,应该为数值型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjApplicationTypeEN.orderNum &&
    undefined !== pobjApplicationTypeEN.orderNum &&
    tzDataType.isNumber(pobjApplicationTypeEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjApplicationTypeEN.orderNum}], 非法,应该为数值型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjApplicationTypeEN.memo) == false &&
    undefined !== pobjApplicationTypeEN.memo &&
    tzDataType.isString(pobjApplicationTypeEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjApplicationTypeEN.memo}], 非法,应该为字符型(In 应用程序类型(ApplicationType))!(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjApplicationTypeEN.applicationTypeId ||
    (pobjApplicationTypeEN.applicationTypeId != null &&
      pobjApplicationTypeEN.applicationTypeId.toString() === '') ||
    pobjApplicationTypeEN.applicationTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000064)字段[应用程序类型ID]不能为空(In 应用程序类型)!(clsApplicationTypeBL:CheckProperty4Update)`,
    );
  }
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
export function ApplicationType_GetJSONStrByObj(
  pobjApplicationTypeEN: clsApplicationTypeEN,
): string {
  pobjApplicationTypeEN.sfUpdFldSetStr = pobjApplicationTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjApplicationTypeEN);
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
export function ApplicationType_GetObjLstByJSONStr(strJSON: string): Array<clsApplicationTypeEN> {
  let arrApplicationTypeObjLst = new Array<clsApplicationTypeEN>();
  if (strJSON === '') {
    return arrApplicationTypeObjLst;
  }
  try {
    arrApplicationTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrApplicationTypeObjLst;
  }
  return arrApplicationTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrApplicationTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ApplicationType_GetObjLstByJSONObjLst(
  arrApplicationTypeObjLstS: Array<clsApplicationTypeEN>,
): Array<clsApplicationTypeEN> {
  const arrApplicationTypeObjLst = new Array<clsApplicationTypeEN>();
  for (const objInFor of arrApplicationTypeObjLstS) {
    const obj1 = ApplicationType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrApplicationTypeObjLst.push(obj1);
  }
  return arrApplicationTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ApplicationType_GetObjByJSONStr(strJSON: string): clsApplicationTypeEN {
  let pobjApplicationTypeEN = new clsApplicationTypeEN();
  if (strJSON === '') {
    return pobjApplicationTypeEN;
  }
  try {
    pobjApplicationTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjApplicationTypeEN;
  }
  return pobjApplicationTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ApplicationType_GetCombineCondition(
  objApplicationTypeCond: clsApplicationTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objApplicationTypeCond.dicFldComparisonOp,
      clsApplicationTypeEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objApplicationTypeCond.dicFldComparisonOp[clsApplicationTypeEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsApplicationTypeEN.con_ApplicationTypeId,
      objApplicationTypeCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objApplicationTypeCond.dicFldComparisonOp,
      clsApplicationTypeEN.con_ApplicationTypeName,
    ) == true
  ) {
    const strComparisonOpApplicationTypeName: string =
      objApplicationTypeCond.dicFldComparisonOp[clsApplicationTypeEN.con_ApplicationTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsApplicationTypeEN.con_ApplicationTypeName,
      objApplicationTypeCond.applicationTypeName,
      strComparisonOpApplicationTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objApplicationTypeCond.dicFldComparisonOp,
      clsApplicationTypeEN.con_ApplicationTypeSimName,
    ) == true
  ) {
    const strComparisonOpApplicationTypeSimName: string =
      objApplicationTypeCond.dicFldComparisonOp[clsApplicationTypeEN.con_ApplicationTypeSimName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsApplicationTypeEN.con_ApplicationTypeSimName,
      objApplicationTypeCond.applicationTypeSimName,
      strComparisonOpApplicationTypeSimName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objApplicationTypeCond.dicFldComparisonOp,
      clsApplicationTypeEN.con_ApplicationTypeENName,
    ) == true
  ) {
    const strComparisonOpApplicationTypeENName: string =
      objApplicationTypeCond.dicFldComparisonOp[clsApplicationTypeEN.con_ApplicationTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsApplicationTypeEN.con_ApplicationTypeENName,
      objApplicationTypeCond.applicationTypeENName,
      strComparisonOpApplicationTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objApplicationTypeCond.dicFldComparisonOp,
      clsApplicationTypeEN.con_ProgLangTypeId,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId: string =
      objApplicationTypeCond.dicFldComparisonOp[clsApplicationTypeEN.con_ProgLangTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsApplicationTypeEN.con_ProgLangTypeId,
      objApplicationTypeCond.progLangTypeId,
      strComparisonOpProgLangTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objApplicationTypeCond.dicFldComparisonOp,
      clsApplicationTypeEN.con_ProgLangTypeId2,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId2: string =
      objApplicationTypeCond.dicFldComparisonOp[clsApplicationTypeEN.con_ProgLangTypeId2];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsApplicationTypeEN.con_ProgLangTypeId2,
      objApplicationTypeCond.progLangTypeId2,
      strComparisonOpProgLangTypeId2,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objApplicationTypeCond.dicFldComparisonOp,
      clsApplicationTypeEN.con_ProgLangTypeId3,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId3: string =
      objApplicationTypeCond.dicFldComparisonOp[clsApplicationTypeEN.con_ProgLangTypeId3];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsApplicationTypeEN.con_ProgLangTypeId3,
      objApplicationTypeCond.progLangTypeId3,
      strComparisonOpProgLangTypeId3,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objApplicationTypeCond.dicFldComparisonOp,
      clsApplicationTypeEN.con_ProgLangTypeId4,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId4: string =
      objApplicationTypeCond.dicFldComparisonOp[clsApplicationTypeEN.con_ProgLangTypeId4];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsApplicationTypeEN.con_ProgLangTypeId4,
      objApplicationTypeCond.progLangTypeId4,
      strComparisonOpProgLangTypeId4,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objApplicationTypeCond.dicFldComparisonOp,
      clsApplicationTypeEN.con_ProgLangTypeId5,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId5: string =
      objApplicationTypeCond.dicFldComparisonOp[clsApplicationTypeEN.con_ProgLangTypeId5];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsApplicationTypeEN.con_ProgLangTypeId5,
      objApplicationTypeCond.progLangTypeId5,
      strComparisonOpProgLangTypeId5,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objApplicationTypeCond.dicFldComparisonOp,
      clsApplicationTypeEN.con_IsVisible,
    ) == true
  ) {
    if (objApplicationTypeCond.isVisible == true) {
      strWhereCond += Format(" And {0} = '1'", clsApplicationTypeEN.con_IsVisible);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsApplicationTypeEN.con_IsVisible);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objApplicationTypeCond.dicFldComparisonOp,
      clsApplicationTypeEN.con_VisitedNum,
    ) == true
  ) {
    const strComparisonOpVisitedNum: string =
      objApplicationTypeCond.dicFldComparisonOp[clsApplicationTypeEN.con_VisitedNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsApplicationTypeEN.con_VisitedNum,
      objApplicationTypeCond.visitedNum,
      strComparisonOpVisitedNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objApplicationTypeCond.dicFldComparisonOp,
      clsApplicationTypeEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objApplicationTypeCond.dicFldComparisonOp[clsApplicationTypeEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsApplicationTypeEN.con_OrderNum,
      objApplicationTypeCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objApplicationTypeCond.dicFldComparisonOp,
      clsApplicationTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objApplicationTypeCond.dicFldComparisonOp[clsApplicationTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsApplicationTypeEN.con_Memo,
      objApplicationTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ApplicationType(应用程序类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strApplicationTypeName: 应用程序类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ApplicationType_GetUniCondStr(objApplicationTypeEN: clsApplicationTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and ApplicationTypeName = '{0}'",
    objApplicationTypeEN.applicationTypeName,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ApplicationType(应用程序类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strApplicationTypeName: 应用程序类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ApplicationType_GetUniCondStr4Update(
  objApplicationTypeEN: clsApplicationTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ApplicationTypeId <> '{0}'", objApplicationTypeEN.applicationTypeId);
  strWhereCond += Format(
    " and ApplicationTypeName = '{0}'",
    objApplicationTypeEN.applicationTypeName,
  );
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objApplicationTypeENS:源对象
 * @param objApplicationTypeENT:目标对象
 */
export function ApplicationType_GetObjFromJsonObj(
  objApplicationTypeENS: clsApplicationTypeEN,
): clsApplicationTypeEN {
  const objApplicationTypeENT: clsApplicationTypeEN = new clsApplicationTypeEN();
  ObjectAssign(objApplicationTypeENT, objApplicationTypeENS);
  return objApplicationTypeENT;
}
