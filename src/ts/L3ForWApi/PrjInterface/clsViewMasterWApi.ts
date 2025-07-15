/**
 * 类名:clsViewMasterWApi
 * 表名:ViewMaster(00050557)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:49:41
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 界面母版(ViewMaster)
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
import { viewMasterCache, isFuncMapCache } from '@/views/PrjInterface/ViewMasterVueShare';
import { clsViewMasterENEx } from '@/ts/L0Entity/PrjInterface/clsViewMasterENEx';
import { clsViewMasterEN } from '@/ts/L0Entity/PrjInterface/clsViewMasterEN';
import { ApplicationType_func } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const viewMaster_Controller = 'ViewMasterApi';
export const viewMaster_ConstructorName = 'viewMaster';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strViewMasterId:关键字
 * @returns 对象
 **/
export async function ViewMaster_GetObjByViewMasterIdAsync(
  strViewMasterId: string,
): Promise<clsViewMasterEN | null> {
  const strThisFuncName = 'GetObjByViewMasterIdAsync';

  if (IsNullOrEmpty(strViewMasterId) == true) {
    const strMsg = Format(
      '参数:[strViewMasterId]不能为空!(In clsViewMasterWApi.GetObjByViewMasterIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewMasterId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewMasterId]的长度:[{0}]不正确!(clsViewMasterWApi.GetObjByViewMasterIdAsync)',
      strViewMasterId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByViewMasterId';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewMasterId,
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
      const objViewMaster = ViewMaster_GetObjFromJsonObj(returnObj);
      return objViewMaster;
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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
 * @param strViewMasterId:所给的关键字
 * @returns 对象
 */
export async function ViewMaster_GetObjByViewMasterIdlocalStorage(strViewMasterId: string) {
  const strThisFuncName = 'GetObjByViewMasterIdlocalStorage';

  if (IsNullOrEmpty(strViewMasterId) == true) {
    const strMsg = Format(
      '参数:[strViewMasterId]不能为空!(In clsViewMasterWApi.GetObjByViewMasterIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewMasterId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewMasterId]的长度:[{0}]不正确!(clsViewMasterWApi.GetObjByViewMasterIdlocalStorage)',
      strViewMasterId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsViewMasterEN._CurrTabName, strViewMasterId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objViewMasterCache: clsViewMasterEN = JSON.parse(strTempObj);
    return objViewMasterCache;
  }
  try {
    const objViewMaster = await ViewMaster_GetObjByViewMasterIdAsync(strViewMasterId);
    if (objViewMaster != null) {
      localStorage.setItem(strKey, JSON.stringify(objViewMaster));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objViewMaster;
    }
    return objViewMaster;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewMasterId,
      viewMaster_ConstructorName,
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
 * @param strViewMasterId:所给的关键字
 * @returns 对象
 */
export async function ViewMaster_GetObjByViewMasterIdCache(
  strViewMasterId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByViewMasterIdCache';

  if (IsNullOrEmpty(strViewMasterId) == true) {
    const strMsg = Format(
      '参数:[strViewMasterId]不能为空!(In clsViewMasterWApi.GetObjByViewMasterIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewMasterId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewMasterId]的长度:[{0}]不正确!(clsViewMasterWApi.GetObjByViewMasterIdCache)',
      strViewMasterId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewMasterObjLstCache = await ViewMaster_GetObjLstCache(strPrjId);
  try {
    const arrViewMasterSel = arrViewMasterObjLstCache.filter(
      (x) => x.viewMasterId == strViewMasterId,
    );
    let objViewMaster: clsViewMasterEN;
    if (arrViewMasterSel.length > 0) {
      objViewMaster = arrViewMasterSel[0];
      return objViewMaster;
    } else {
      if (bolTryAsyncOnce == true) {
        const objViewMasterConst = await ViewMaster_GetObjByViewMasterIdAsync(strViewMasterId);
        if (objViewMasterConst != null) {
          ViewMaster_ReFreshThisCache(strPrjId);
          return objViewMasterConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewMasterId,
      viewMaster_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objViewMaster:所给的对象
 * @returns 对象
 */
export async function ViewMaster_UpdateObjInLstCache(
  objViewMaster: clsViewMasterEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrViewMasterObjLstCache = await ViewMaster_GetObjLstCache(strPrjId);
    const obj = arrViewMasterObjLstCache.find(
      (x) =>
        x.prjId == objViewMaster.prjId &&
        x.applicationTypeId == objViewMaster.applicationTypeId &&
        x.viewMasterName == objViewMaster.viewMasterName,
    );
    if (obj != null) {
      objViewMaster.viewMasterId = obj.viewMasterId;
      ObjectAssign(obj, objViewMaster);
    } else {
      arrViewMasterObjLstCache.push(objViewMaster);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      viewMaster_ConstructorName,
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
export function ViewMaster_SortFunDefa(a: clsViewMasterEN, b: clsViewMasterEN): number {
  return a.viewMasterId.localeCompare(b.viewMasterId);
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
export function ViewMaster_SortFunDefa2Fld(a: clsViewMasterEN, b: clsViewMasterEN): number {
  if (a.viewMasterName == b.viewMasterName) return a.viewMasterPath.localeCompare(b.viewMasterPath);
  else return a.viewMasterName.localeCompare(b.viewMasterName);
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
export function ViewMaster_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewMasterEN.con_ViewMasterId:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          return a.viewMasterId.localeCompare(b.viewMasterId);
        };
      case clsViewMasterEN.con_ViewMasterName:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          return a.viewMasterName.localeCompare(b.viewMasterName);
        };
      case clsViewMasterEN.con_ViewMasterPath:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          return a.viewMasterPath.localeCompare(b.viewMasterPath);
        };
      case clsViewMasterEN.con_ApplicationTypeId:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsViewMasterEN.con_PrjId:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsViewMasterEN.con_UpdDate:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsViewMasterEN.con_UpdUser:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsViewMasterEN.con_Memo:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewMaster]中不存在!(in ${viewMaster_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewMasterEN.con_ViewMasterId:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          return b.viewMasterId.localeCompare(a.viewMasterId);
        };
      case clsViewMasterEN.con_ViewMasterName:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          return b.viewMasterName.localeCompare(a.viewMasterName);
        };
      case clsViewMasterEN.con_ViewMasterPath:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          return b.viewMasterPath.localeCompare(a.viewMasterPath);
        };
      case clsViewMasterEN.con_ApplicationTypeId:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsViewMasterEN.con_PrjId:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsViewMasterEN.con_UpdDate:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsViewMasterEN.con_UpdUser:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsViewMasterEN.con_Memo:
        return (a: clsViewMasterEN, b: clsViewMasterEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewMaster]中不存在!(in ${viewMaster_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strViewMasterId:所给的关键字
 * @returns 对象
 */
export async function ViewMaster_GetNameByViewMasterIdCache(
  strViewMasterId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strViewMasterId) == true) {
    const strMsg = Format(
      '参数:[strViewMasterId]不能为空!(In clsViewMasterWApi.GetNameByViewMasterIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewMasterId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewMasterId]的长度:[{0}]不正确!(clsViewMasterWApi.GetNameByViewMasterIdCache)',
      strViewMasterId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewMasterObjLstCache = await ViewMaster_GetObjLstCache(strPrjId);
  if (arrViewMasterObjLstCache == null) return '';
  try {
    const arrViewMasterSel = arrViewMasterObjLstCache.filter(
      (x) => x.viewMasterId == strViewMasterId,
    );
    let objViewMaster: clsViewMasterEN;
    if (arrViewMasterSel.length > 0) {
      objViewMaster = arrViewMasterSel[0];
      return objViewMaster.viewMasterName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strViewMasterId,
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
export async function ViewMaster_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewMasterEN.con_ViewMasterId:
      return (obj: clsViewMasterEN) => {
        return obj.viewMasterId === value;
      };
    case clsViewMasterEN.con_ViewMasterName:
      return (obj: clsViewMasterEN) => {
        return obj.viewMasterName === value;
      };
    case clsViewMasterEN.con_ViewMasterPath:
      return (obj: clsViewMasterEN) => {
        return obj.viewMasterPath === value;
      };
    case clsViewMasterEN.con_ApplicationTypeId:
      return (obj: clsViewMasterEN) => {
        return obj.applicationTypeId === value;
      };
    case clsViewMasterEN.con_PrjId:
      return (obj: clsViewMasterEN) => {
        return obj.prjId === value;
      };
    case clsViewMasterEN.con_UpdDate:
      return (obj: clsViewMasterEN) => {
        return obj.updDate === value;
      };
    case clsViewMasterEN.con_UpdUser:
      return (obj: clsViewMasterEN) => {
        return obj.updUser === value;
      };
    case clsViewMasterEN.con_Memo:
      return (obj: clsViewMasterEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewMaster]中不存在!(in ${viewMaster_ConstructorName}.${strThisFuncName})`;
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
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function ViewMaster_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsViewMasterWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsViewMasterWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsViewMasterEN.con_ViewMasterId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsViewMasterEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsViewMasterEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strViewMasterId = strInValue;
  if (IsNullOrEmpty(strViewMasterId) == true) {
    return '';
  }
  const objViewMaster = await ViewMaster_GetObjByViewMasterIdCache(
    strViewMasterId,
    strPrjIdClassfy,
  );
  if (objViewMaster == null) return '';
  if (objViewMaster.GetFldValue(strOutFldName) == null) return '';
  return objViewMaster.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function ViewMaster_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsViewMasterWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsViewMasterWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsViewMasterEN.con_ViewMasterId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrViewMaster = await ViewMaster_GetObjLstCache(strPrjIdClassfy);
  if (arrViewMaster == null) return [];
  let arrViewMasterSel = arrViewMaster;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrViewMasterSel = arrViewMasterSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrViewMasterSel = arrViewMasterSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrViewMasterSel = arrViewMasterSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrViewMasterSel = arrViewMasterSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrViewMasterSel = arrViewMasterSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrViewMasterSel = arrViewMasterSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrViewMasterSel = arrViewMasterSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrViewMasterSel = arrViewMasterSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrViewMasterSel = arrViewMasterSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrViewMasterSel = arrViewMasterSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrViewMasterSel.length == 0) return [];
  return arrViewMasterSel.map((x) => x.viewMasterId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewMaster_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
export async function ViewMaster_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
export async function ViewMaster_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
export async function ViewMaster_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewMasterEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

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
      const objViewMaster = ViewMaster_GetObjFromJsonObj(returnObj);
      return objViewMaster;
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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
export async function ViewMaster_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewMasterEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewMasterEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewMasterEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsViewMasterEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewMasterEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrViewMasterExObjLstCache: Array<clsViewMasterEN> = CacheHelper.Get(strKey);
    const arrViewMasterObjLstT = ViewMaster_GetObjLstByJSONObjLst(arrViewMasterExObjLstCache);
    return arrViewMasterObjLstT;
  }
  try {
    const arrViewMasterExObjLst = await ViewMaster_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrViewMasterExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewMasterExObjLst.length,
    );
    console.log(strInfo);
    return arrViewMasterExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewMaster_ConstructorName,
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
export async function ViewMaster_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewMasterEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewMasterEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsViewMasterEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewMasterEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsViewMasterEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewMasterEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewMasterExObjLstCache: Array<clsViewMasterEN> = JSON.parse(strTempObjLst);
    const arrViewMasterObjLstT = ViewMaster_GetObjLstByJSONObjLst(arrViewMasterExObjLstCache);
    return arrViewMasterObjLstT;
  }
  try {
    const arrViewMasterExObjLst = await ViewMaster_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrViewMasterExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewMasterExObjLst.length,
    );
    console.log(strInfo);
    return arrViewMasterExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewMaster_ConstructorName,
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
export async function ViewMaster_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsViewMasterEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewMasterObjLstCache: Array<clsViewMasterEN> = JSON.parse(strTempObjLst);
    return arrViewMasterObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ViewMaster_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewMasterEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

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
          viewMaster_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewMaster_GetObjLstByJSONObjLst(returnObjLst);
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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
export async function ViewMaster_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewMasterEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewMasterEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsViewMasterEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewMasterEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsViewMasterEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewMasterEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewMasterExObjLstCache: Array<clsViewMasterEN> = JSON.parse(strTempObjLst);
    const arrViewMasterObjLstT = ViewMaster_GetObjLstByJSONObjLst(arrViewMasterExObjLstCache);
    return arrViewMasterObjLstT;
  }
  try {
    const arrViewMasterExObjLst = await ViewMaster_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrViewMasterExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewMasterExObjLst.length,
    );
    console.log(strInfo);
    return arrViewMasterExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewMaster_ConstructorName,
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
export async function ViewMaster_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsViewMasterEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewMasterObjLstCache: Array<clsViewMasterEN> = JSON.parse(strTempObjLst);
    return arrViewMasterObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewMaster_GetObjLstCache(strPrjId: string): Promise<Array<clsViewMasterEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsViewMasterWApi.ViewMaster_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsViewMasterWApi.ViewMaster_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrViewMasterObjLstCache;
  switch (clsViewMasterEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewMasterObjLstCache = await ViewMaster_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrViewMasterObjLstCache = await ViewMaster_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrViewMasterObjLstCache = await ViewMaster_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrViewMasterObjLstCache = await ViewMaster_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrViewMasterObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewMaster_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrViewMasterObjLstCache;
  switch (clsViewMasterEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewMasterObjLstCache = await ViewMaster_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrViewMasterObjLstCache = await ViewMaster_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrViewMasterObjLstCache = null;
      break;
    default:
      arrViewMasterObjLstCache = null;
      break;
  }
  return arrViewMasterObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrViewMasterIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewMaster_GetSubObjLstCache(
  objViewMasterCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrViewMasterObjLstCache = await ViewMaster_GetObjLstCache(strPrjId);
  let arrViewMasterSel = arrViewMasterObjLstCache;
  if (objViewMasterCond.GetConditions().length == 0) return arrViewMasterSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objViewMasterCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrViewMasterSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewMasterCond),
      viewMaster_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewMasterEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewMasterId:关键字列表
 * @returns 对象列表
 **/
export async function ViewMaster_GetObjLstByViewMasterIdLstAsync(
  arrViewMasterId: Array<string>,
): Promise<Array<clsViewMasterEN>> {
  const strThisFuncName = 'GetObjLstByViewMasterIdLstAsync';
  const strAction = 'GetObjLstByViewMasterIdLst';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewMasterId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          viewMaster_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewMaster_GetObjLstByJSONObjLst(returnObjLst);
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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
 * @param arrstrViewMasterIdLst:关键字列表
 * @returns 对象列表
 */
export async function ViewMaster_GetObjLstByViewMasterIdLstCache(
  arrViewMasterIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByViewMasterIdLstCache';
  try {
    const arrViewMasterObjLstCache = await ViewMaster_GetObjLstCache(strPrjId);
    const arrViewMasterSel = arrViewMasterObjLstCache.filter(
      (x) => arrViewMasterIdLst.indexOf(x.viewMasterId) > -1,
    );
    return arrViewMasterSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewMasterIdLst.join(','),
      viewMaster_ConstructorName,
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
export async function ViewMaster_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewMasterEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

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
          viewMaster_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewMaster_GetObjLstByJSONObjLst(returnObjLst);
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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
export async function ViewMaster_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewMasterEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

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
          viewMaster_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewMaster_GetObjLstByJSONObjLst(returnObjLst);
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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
export async function ViewMaster_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewMasterEN>();
  const arrViewMasterObjLstCache = await ViewMaster_GetObjLstCache(strPrjId);
  if (arrViewMasterObjLstCache.length == 0) return arrViewMasterObjLstCache;
  let arrViewMasterSel = arrViewMasterObjLstCache;
  const objViewMasterCond = objPagerPara.conditionCollection;
  if (objViewMasterCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsViewMasterEN>();
  }
  //console.log("clsViewMasterWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objViewMasterCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewMasterSel.length == 0) return arrViewMasterSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewMasterSel = arrViewMasterSel.sort(ViewMaster_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewMasterSel = arrViewMasterSel.sort(objPagerPara.sortFun);
    }
    arrViewMasterSel = arrViewMasterSel.slice(intStart, intEnd);
    return arrViewMasterSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewMaster_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewMasterEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ViewMaster_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewMasterEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewMasterEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

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
          viewMaster_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewMaster_GetObjLstByJSONObjLst(returnObjLst);
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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
 * @param strViewMasterId:关键字
 * @returns 获取删除的结果
 **/
export async function ViewMaster_DelRecordAsync(strViewMasterId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(viewMaster_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strViewMasterId);

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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
 * @param arrViewMasterId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ViewMaster_DelViewMastersAsync(
  arrViewMasterId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelViewMastersAsync';
  const strAction = 'DelViewMasters';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewMasterId, config);
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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
export async function ViewMaster_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
): Promise<Array<clsViewMasterENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrViewMasterObjLst = await ViewMaster_GetObjLstCache(strPrjId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsViewMasterENEx>();
  const arrViewMasterExObjLst = arrViewMasterObjLst.map((obj) => {
    const cacheKey = `${obj.viewMasterId}_${obj.prjId}`;
    if (viewMasterCache[cacheKey]) {
      const oldObj = viewMasterCache[cacheKey];
      return oldObj;
    } else {
      const newObj = ViewMaster_CopyToEx(obj);
      arrNewObj.push(newObj);
      viewMasterCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await ViewMaster_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsViewMasterEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrViewMasterExObjLst) {
      await ViewMaster_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.viewMasterId}_${newObj.prjId}`;
      viewMasterCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrViewMasterExObjLst.length == 0) return arrViewMasterExObjLst;
  let arrViewMasterSel: Array<clsViewMasterENEx> = arrViewMasterExObjLst;
  const objViewMasterCond = objPagerPara.conditionCollection;
  if (objViewMasterCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrViewMasterExObjLst;
  }
  try {
    for (const objCondition of objViewMasterCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewMasterSel.length == 0) return arrViewMasterSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrViewMasterSel = arrViewMasterSel.sort(
        ViewMaster_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewMasterSel = arrViewMasterSel.sort(objPagerPara.sortFun);
    }
    arrViewMasterSel = arrViewMasterSel.slice(intStart, intEnd);
    return arrViewMasterSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewMaster_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewMasterENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objViewMasterENS:源对象
 * @returns 目标对象=>clsViewMasterEN:objViewMasterENT
 **/
export function ViewMaster_CopyToEx(objViewMasterENS: clsViewMasterEN): clsViewMasterENEx {
  const strThisFuncName = ViewMaster_CopyToEx.name;
  const objViewMasterENT = new clsViewMasterENEx();
  try {
    ObjectAssign(objViewMasterENT, objViewMasterENS);
    return objViewMasterENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewMaster_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewMasterENT;
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
export function ViewMaster_FuncMapByFldName(
  strFldName: string,
  objViewMasterEx: clsViewMasterENEx,
) {
  const strThisFuncName = ViewMaster_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsViewMasterEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsViewMasterENEx.con_ApplicationTypeSimName:
      return ViewMaster_FuncMapApplicationTypeSimName(objViewMasterEx);
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
export function ViewMaster_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewMasterENEx.con_ApplicationTypeSimName:
        return (a: clsViewMasterENEx, b: clsViewMasterENEx) => {
          if (a.applicationTypeSimName === null && b.applicationTypeSimName === null) return 0;
          if (a.applicationTypeSimName === null) return -1;
          if (b.applicationTypeSimName === null) return 1;
          return a.applicationTypeSimName.localeCompare(b.applicationTypeSimName);
        };
      case clsViewMasterENEx.con_TrClass:
        return (a: clsViewMasterENEx, b: clsViewMasterENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return -1;
          if (b.trClass === null) return 1;
          return a.trClass.localeCompare(b.trClass);
        };
      default:
        return ViewMaster_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsViewMasterENEx.con_ApplicationTypeSimName:
        return (a: clsViewMasterENEx, b: clsViewMasterENEx) => {
          if (a.applicationTypeSimName === null && b.applicationTypeSimName === null) return 0;
          if (a.applicationTypeSimName === null) return 1;
          if (b.applicationTypeSimName === null) return -1;
          return b.applicationTypeSimName.localeCompare(a.applicationTypeSimName);
        };
      case clsViewMasterENEx.con_TrClass:
        return (a: clsViewMasterENEx, b: clsViewMasterENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return 1;
          if (b.trClass === null) return -1;
          return b.trClass.localeCompare(a.trClass);
        };
      default:
        return ViewMaster_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewMasterS:源对象
 **/
export async function ViewMaster_FuncMapApplicationTypeSimName(objViewMaster: clsViewMasterENEx) {
  const strThisFuncName = ViewMaster_FuncMapApplicationTypeSimName.name;
  try {
    if (IsNullOrEmpty(objViewMaster.applicationTypeSimName) == true) {
      const ApplicationTypeApplicationTypeId = objViewMaster.applicationTypeId.toString();
      const ApplicationTypeApplicationTypeSimName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeSimName,
        ApplicationTypeApplicationTypeId,
      );
      objViewMaster.applicationTypeSimName = ApplicationTypeApplicationTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001316)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewMaster_ConstructorName,
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
export async function ViewMaster_DelViewMastersByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelViewMastersByCondAsync';
  const strAction = 'DelViewMastersByCond';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
 * @param objViewMasterEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewMaster_AddNewRecordAsync(
  objViewMasterEN: clsViewMasterEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objViewMasterEN);
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewMasterEN, config);
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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
 * @param objViewMasterEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewMaster_AddNewRecordWithMaxIdAsync(
  objViewMasterEN: clsViewMasterEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewMasterEN, config);
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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
export async function ViewMaster_AddNewObjSave(
  objViewMasterEN: clsViewMasterEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    ViewMaster_CheckPropertyNew(objViewMasterEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewMaster_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ViewMaster_CheckUniCond4Add(objViewMasterEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await ViewMaster_AddNewRecordWithMaxIdAsync(objViewMasterEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      ViewMaster_ReFreshCache(objViewMasterEN.prjId);
    } else {
      const strInfo = `添加[界面母版(ViewMaster)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${viewMaster_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function ViewMaster_CheckUniCond4Add(
  objViewMasterEN: clsViewMasterEN,
): Promise<boolean> {
  const strUniquenessCondition = ViewMaster_GetUniCondStr(objViewMasterEN);
  const bolIsExistCondition = await ViewMaster_IsExistRecordAsync(strUniquenessCondition);
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
export async function ViewMaster_CheckUniCond4Update(
  objViewMasterEN: clsViewMasterEN,
): Promise<boolean> {
  const strUniquenessCondition = ViewMaster_GetUniCondStr4Update(objViewMasterEN);
  const bolIsExistCondition = await ViewMaster_IsExistRecordAsync(strUniquenessCondition);
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
export async function ViewMaster_UpdateObjSave(objViewMasterEN: clsViewMasterEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objViewMasterEN.sfUpdFldSetStr = objViewMasterEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objViewMasterEN.viewMasterId == '' || objViewMasterEN.viewMasterId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    ViewMaster_CheckProperty4Update(objViewMasterEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewMaster_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ViewMaster_CheckUniCond4Update(objViewMasterEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await ViewMaster_UpdateRecordAsync(objViewMasterEN);
    if (returnBool == true) {
      ViewMaster_ReFreshCache(objViewMasterEN.prjId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${viewMaster_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objViewMasterEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewMaster_AddNewRecordWithReturnKeyAsync(
  objViewMasterEN: clsViewMasterEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewMasterEN, config);
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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
 * @param objViewMasterEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewMaster_UpdateRecordAsync(
  objViewMasterEN: clsViewMasterEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewMasterEN.sfUpdFldSetStr === undefined ||
    objViewMasterEN.sfUpdFldSetStr === null ||
    objViewMasterEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewMasterEN.viewMasterId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewMasterEN, config);
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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
 * @param objViewMasterEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewMaster_EditRecordExAsync(
  objViewMasterEN: clsViewMasterEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objViewMasterEN.sfUpdFldSetStr === undefined ||
    objViewMasterEN.sfUpdFldSetStr === null ||
    objViewMasterEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewMasterEN.viewMasterId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewMasterEN, config);
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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
 * @param objViewMasterEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewMaster_UpdateWithConditionAsync(
  objViewMasterEN: clsViewMasterEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewMasterEN.sfUpdFldSetStr === undefined ||
    objViewMasterEN.sfUpdFldSetStr === null ||
    objViewMasterEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewMasterEN.viewMasterId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);
  objViewMasterEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewMasterEN, config);
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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
 * @param objstrViewMasterIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewMaster_IsExistRecordCache(
  objViewMasterCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrViewMasterObjLstCache = await ViewMaster_GetObjLstCache(strPrjId);
  if (arrViewMasterObjLstCache == null) return false;
  let arrViewMasterSel = arrViewMasterObjLstCache;
  if (objViewMasterCond.GetConditions().length == 0)
    return arrViewMasterSel.length > 0 ? true : false;
  try {
    for (const objCondition of objViewMasterCond.GetConditions()) {
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
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewMasterSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objViewMasterCond),
      viewMaster_ConstructorName,
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
export async function ViewMaster_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
 * @param strViewMasterId:所给的关键字
 * @returns 对象
 */
export async function ViewMaster_IsExistCache(strViewMasterId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrViewMasterObjLstCache = await ViewMaster_GetObjLstCache(strPrjId);
  if (arrViewMasterObjLstCache == null) return false;
  try {
    const arrViewMasterSel = arrViewMasterObjLstCache.filter(
      (x) => x.viewMasterId == strViewMasterId,
    );
    if (arrViewMasterSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strViewMasterId,
      viewMaster_ConstructorName,
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
 * @param strViewMasterId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ViewMaster_IsExistAsync(strViewMasterId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewMasterId,
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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
export async function ViewMaster_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
 * @param objViewMasterCond:条件对象
 * @returns 对象列表记录数
 */
export async function ViewMaster_GetRecCountByCondCache(
  objViewMasterCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrViewMasterObjLstCache = await ViewMaster_GetObjLstCache(strPrjId);
  if (arrViewMasterObjLstCache == null) return 0;
  let arrViewMasterSel = arrViewMasterObjLstCache;
  if (objViewMasterCond.GetConditions().length == 0) return arrViewMasterSel.length;
  try {
    for (const objCondition of objViewMasterCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewMasterSel = arrViewMasterSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewMasterSel = arrViewMasterSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrViewMasterSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewMasterCond),
      viewMaster_ConstructorName,
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
export async function ViewMaster_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
export async function ViewMaster_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewMaster_Controller, strAction);

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
        viewMaster_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewMaster_ConstructorName,
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
export function ViewMaster_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewMaster_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsViewMasterWApi.clsViewMasterWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsViewMasterWApi.clsViewMasterWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsViewMasterEN._CurrTabName, strPrjId);
  switch (clsViewMasterEN.CacheModeId) {
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
  clsViewMasterEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ViewMaster_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsViewMasterWApi.ViewMaster_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsViewMasterWApi.ViewMaster_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsViewMasterEN._CurrTabName, strPrjId);
    switch (clsViewMasterEN.CacheModeId) {
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
    clsViewMasterEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function ViewMaster_GetLastRefreshTime(): string {
  if (clsViewMasterEN._RefreshTimeLst.length == 0) return '';
  return clsViewMasterEN._RefreshTimeLst[clsViewMasterEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param intApplicationTypeId:
 * @param strPrjId:
*/
export async function ViewMaster_BindDdl_ViewMasterIdByApplicationTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  intApplicationTypeId: number,
  strPrjId: string,
) {
  if (intApplicationTypeId == 0) {
    const strMsg = Format(
      '参数:[intApplicationTypeId]不能为空！(In clsViewMasterWApi.BindDdl_ViewMasterIdByApplicationTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsViewMasterWApi.BindDdl_ViewMasterIdByApplicationTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsViewMasterWApi.BindDdl_ViewMasterIdByApplicationTypeIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_ViewMasterIdByApplicationTypeIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ViewMasterIdByApplicationTypeIdInDivCache");
  let arrObjLstSel = await ViewMaster_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter(
    (x) => x.applicationTypeId == intApplicationTypeId && x.prjId == strPrjId,
  );
  arrObjLstSel = arrObjLstSel.sort((x, y) => x.viewMasterName.localeCompare(y.viewMasterName));
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsViewMasterEN.con_ViewMasterId,
    clsViewMasterEN.con_ViewMasterName,
    '界面母版...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param intApplicationTypeId:
 * @param strPrjId:
*/
export async function ViewMaster_GetArrViewMasterByApplicationTypeId(
  intApplicationTypeId: number,
  strPrjId: string,
) {
  if (intApplicationTypeId == 0) {
    const strMsg = Format(
      '参数:[intApplicationTypeId]不能为空！(In clsViewMasterWApi.BindDdl_ViewMasterIdByApplicationTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsViewMasterWApi.BindDdl_ViewMasterIdByApplicationTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsViewMasterWApi.BindDdl_ViewMasterIdByApplicationTypeIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ViewMasterIdByApplicationTypeIdInDivCache");
  const arrViewMaster = new Array<clsViewMasterEN>();
  let arrObjLstSel = await ViewMaster_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter(
    (x) => x.applicationTypeId == intApplicationTypeId && x.prjId == strPrjId,
  );
  arrObjLstSel = arrObjLstSel.sort((x, y) => {
    if (x.viewMasterName === null && y.viewMasterName === null) return 0;
    if (x.viewMasterName === null) return 1;
    if (y.viewMasterName === null) return -1;
    return x.viewMasterName.localeCompare(y.viewMasterName);
  });
  const obj0 = new clsViewMasterEN();
  obj0.viewMasterId = '0';
  obj0.viewMasterName = '选界面母版...';
  arrViewMaster.push(obj0);
  arrObjLstSel.forEach((x) => arrViewMaster.push(x));
  return arrViewMaster;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewMaster_CheckPropertyNew(pobjViewMasterEN: clsViewMasterEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjViewMasterEN.viewMasterName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[界面母版名]不能为空(In 界面母版)!(clsViewMasterBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjViewMasterEN.viewMasterPath) === true) {
    throw new Error(
      `(errid:Watl000411)字段[界面母版路径]不能为空(In 界面母版)!(clsViewMasterBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjViewMasterEN.applicationTypeId ||
    (pobjViewMasterEN.applicationTypeId != null &&
      pobjViewMasterEN.applicationTypeId.toString() === '') ||
    pobjViewMasterEN.applicationTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[应用程序类型ID]不能为空(In 界面母版)!(clsViewMasterBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjViewMasterEN.prjId) === true || pobjViewMasterEN.prjId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 界面母版)!(clsViewMasterBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewMasterEN.viewMasterId) == false &&
    GetStrLen(pobjViewMasterEN.viewMasterId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面母版Id(viewMasterId)]的长度不能超过8(In 界面母版(ViewMaster))!值:${pobjViewMasterEN.viewMasterId}(clsViewMasterBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.viewMasterName) == false &&
    GetStrLen(pobjViewMasterEN.viewMasterName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面母版名(viewMasterName)]的长度不能超过50(In 界面母版(ViewMaster))!值:${pobjViewMasterEN.viewMasterName}(clsViewMasterBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.viewMasterPath) == false &&
    GetStrLen(pobjViewMasterEN.viewMasterPath) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面母版路径(viewMasterPath)]的长度不能超过100(In 界面母版(ViewMaster))!值:${pobjViewMasterEN.viewMasterPath}(clsViewMasterBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjViewMasterEN.prjId) == false && GetStrLen(pobjViewMasterEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 界面母版(ViewMaster))!值:${pobjViewMasterEN.prjId}(clsViewMasterBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.updDate) == false &&
    GetStrLen(pobjViewMasterEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 界面母版(ViewMaster))!值:${pobjViewMasterEN.updDate}(clsViewMasterBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.updUser) == false &&
    GetStrLen(pobjViewMasterEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 界面母版(ViewMaster))!值:${pobjViewMasterEN.updUser}(clsViewMasterBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjViewMasterEN.memo) == false && GetStrLen(pobjViewMasterEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 界面母版(ViewMaster))!值:${pobjViewMasterEN.memo}(clsViewMasterBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewMasterEN.viewMasterId) == false &&
    undefined !== pobjViewMasterEN.viewMasterId &&
    tzDataType.isString(pobjViewMasterEN.viewMasterId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面母版Id(viewMasterId)]的值:[${pobjViewMasterEN.viewMasterId}], 非法,应该为字符型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.viewMasterName) == false &&
    undefined !== pobjViewMasterEN.viewMasterName &&
    tzDataType.isString(pobjViewMasterEN.viewMasterName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面母版名(viewMasterName)]的值:[${pobjViewMasterEN.viewMasterName}], 非法,应该为字符型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.viewMasterPath) == false &&
    undefined !== pobjViewMasterEN.viewMasterPath &&
    tzDataType.isString(pobjViewMasterEN.viewMasterPath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面母版路径(viewMasterPath)]的值:[${pobjViewMasterEN.viewMasterPath}], 非法,应该为字符型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjViewMasterEN.applicationTypeId &&
    undefined !== pobjViewMasterEN.applicationTypeId &&
    tzDataType.isNumber(pobjViewMasterEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjViewMasterEN.applicationTypeId}], 非法,应该为数值型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.prjId) == false &&
    undefined !== pobjViewMasterEN.prjId &&
    tzDataType.isString(pobjViewMasterEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjViewMasterEN.prjId}], 非法,应该为字符型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.updDate) == false &&
    undefined !== pobjViewMasterEN.updDate &&
    tzDataType.isString(pobjViewMasterEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjViewMasterEN.updDate}], 非法,应该为字符型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.updUser) == false &&
    undefined !== pobjViewMasterEN.updUser &&
    tzDataType.isString(pobjViewMasterEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjViewMasterEN.updUser}], 非法,应该为字符型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.memo) == false &&
    undefined !== pobjViewMasterEN.memo &&
    tzDataType.isString(pobjViewMasterEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjViewMasterEN.memo}], 非法,应该为字符型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewMaster_CheckProperty4Update(pobjViewMasterEN: clsViewMasterEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewMasterEN.viewMasterId) == false &&
    GetStrLen(pobjViewMasterEN.viewMasterId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面母版Id(viewMasterId)]的长度不能超过8(In 界面母版(ViewMaster))!值:${pobjViewMasterEN.viewMasterId}(clsViewMasterBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.viewMasterName) == false &&
    GetStrLen(pobjViewMasterEN.viewMasterName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面母版名(viewMasterName)]的长度不能超过50(In 界面母版(ViewMaster))!值:${pobjViewMasterEN.viewMasterName}(clsViewMasterBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.viewMasterPath) == false &&
    GetStrLen(pobjViewMasterEN.viewMasterPath) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面母版路径(viewMasterPath)]的长度不能超过100(In 界面母版(ViewMaster))!值:${pobjViewMasterEN.viewMasterPath}(clsViewMasterBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjViewMasterEN.prjId) == false && GetStrLen(pobjViewMasterEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 界面母版(ViewMaster))!值:${pobjViewMasterEN.prjId}(clsViewMasterBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.updDate) == false &&
    GetStrLen(pobjViewMasterEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 界面母版(ViewMaster))!值:${pobjViewMasterEN.updDate}(clsViewMasterBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.updUser) == false &&
    GetStrLen(pobjViewMasterEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 界面母版(ViewMaster))!值:${pobjViewMasterEN.updUser}(clsViewMasterBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjViewMasterEN.memo) == false && GetStrLen(pobjViewMasterEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 界面母版(ViewMaster))!值:${pobjViewMasterEN.memo}(clsViewMasterBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewMasterEN.viewMasterId) == false &&
    undefined !== pobjViewMasterEN.viewMasterId &&
    tzDataType.isString(pobjViewMasterEN.viewMasterId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面母版Id(viewMasterId)]的值:[${pobjViewMasterEN.viewMasterId}], 非法,应该为字符型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.viewMasterName) == false &&
    undefined !== pobjViewMasterEN.viewMasterName &&
    tzDataType.isString(pobjViewMasterEN.viewMasterName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面母版名(viewMasterName)]的值:[${pobjViewMasterEN.viewMasterName}], 非法,应该为字符型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.viewMasterPath) == false &&
    undefined !== pobjViewMasterEN.viewMasterPath &&
    tzDataType.isString(pobjViewMasterEN.viewMasterPath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面母版路径(viewMasterPath)]的值:[${pobjViewMasterEN.viewMasterPath}], 非法,应该为字符型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjViewMasterEN.applicationTypeId &&
    undefined !== pobjViewMasterEN.applicationTypeId &&
    tzDataType.isNumber(pobjViewMasterEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjViewMasterEN.applicationTypeId}], 非法,应该为数值型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.prjId) == false &&
    undefined !== pobjViewMasterEN.prjId &&
    tzDataType.isString(pobjViewMasterEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjViewMasterEN.prjId}], 非法,应该为字符型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.updDate) == false &&
    undefined !== pobjViewMasterEN.updDate &&
    tzDataType.isString(pobjViewMasterEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjViewMasterEN.updDate}], 非法,应该为字符型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.updUser) == false &&
    undefined !== pobjViewMasterEN.updUser &&
    tzDataType.isString(pobjViewMasterEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjViewMasterEN.updUser}], 非法,应该为字符型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewMasterEN.memo) == false &&
    undefined !== pobjViewMasterEN.memo &&
    tzDataType.isString(pobjViewMasterEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjViewMasterEN.memo}], 非法,应该为字符型(In 界面母版(ViewMaster))!(clsViewMasterBL:CheckProperty4Update)`,
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
export function ViewMaster_GetJSONStrByObj(pobjViewMasterEN: clsViewMasterEN): string {
  pobjViewMasterEN.sfUpdFldSetStr = pobjViewMasterEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewMasterEN);
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
export function ViewMaster_GetObjLstByJSONStr(strJSON: string): Array<clsViewMasterEN> {
  let arrViewMasterObjLst = new Array<clsViewMasterEN>();
  if (strJSON === '') {
    return arrViewMasterObjLst;
  }
  try {
    arrViewMasterObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewMasterObjLst;
  }
  return arrViewMasterObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewMasterObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewMaster_GetObjLstByJSONObjLst(
  arrViewMasterObjLstS: Array<clsViewMasterEN>,
): Array<clsViewMasterEN> {
  const arrViewMasterObjLst = new Array<clsViewMasterEN>();
  for (const objInFor of arrViewMasterObjLstS) {
    const obj1 = ViewMaster_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewMasterObjLst.push(obj1);
  }
  return arrViewMasterObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewMaster_GetObjByJSONStr(strJSON: string): clsViewMasterEN {
  let pobjViewMasterEN = new clsViewMasterEN();
  if (strJSON === '') {
    return pobjViewMasterEN;
  }
  try {
    pobjViewMasterEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewMasterEN;
  }
  return pobjViewMasterEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewMaster_GetCombineCondition(objViewMasterCond: clsViewMasterEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewMasterCond.dicFldComparisonOp,
      clsViewMasterEN.con_ViewMasterId,
    ) == true
  ) {
    const strComparisonOpViewMasterId: string =
      objViewMasterCond.dicFldComparisonOp[clsViewMasterEN.con_ViewMasterId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewMasterEN.con_ViewMasterId,
      objViewMasterCond.viewMasterId,
      strComparisonOpViewMasterId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewMasterCond.dicFldComparisonOp,
      clsViewMasterEN.con_ViewMasterName,
    ) == true
  ) {
    const strComparisonOpViewMasterName: string =
      objViewMasterCond.dicFldComparisonOp[clsViewMasterEN.con_ViewMasterName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewMasterEN.con_ViewMasterName,
      objViewMasterCond.viewMasterName,
      strComparisonOpViewMasterName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewMasterCond.dicFldComparisonOp,
      clsViewMasterEN.con_ViewMasterPath,
    ) == true
  ) {
    const strComparisonOpViewMasterPath: string =
      objViewMasterCond.dicFldComparisonOp[clsViewMasterEN.con_ViewMasterPath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewMasterEN.con_ViewMasterPath,
      objViewMasterCond.viewMasterPath,
      strComparisonOpViewMasterPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewMasterCond.dicFldComparisonOp,
      clsViewMasterEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objViewMasterCond.dicFldComparisonOp[clsViewMasterEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewMasterEN.con_ApplicationTypeId,
      objViewMasterCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewMasterCond.dicFldComparisonOp,
      clsViewMasterEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objViewMasterCond.dicFldComparisonOp[clsViewMasterEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewMasterEN.con_PrjId,
      objViewMasterCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewMasterCond.dicFldComparisonOp,
      clsViewMasterEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objViewMasterCond.dicFldComparisonOp[clsViewMasterEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewMasterEN.con_UpdDate,
      objViewMasterCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewMasterCond.dicFldComparisonOp,
      clsViewMasterEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objViewMasterCond.dicFldComparisonOp[clsViewMasterEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewMasterEN.con_UpdUser,
      objViewMasterCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewMasterCond.dicFldComparisonOp,
      clsViewMasterEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objViewMasterCond.dicFldComparisonOp[clsViewMasterEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewMasterEN.con_Memo,
      objViewMasterCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewMaster(界面母版),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @param strViewMasterName: 界面母版名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewMaster_GetUniCondStr(objViewMasterEN: clsViewMasterEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId = '{0}'", objViewMasterEN.prjId);
  strWhereCond += Format(" and ApplicationTypeId = '{0}'", objViewMasterEN.applicationTypeId);
  strWhereCond += Format(" and ViewMasterName = '{0}'", objViewMasterEN.viewMasterName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewMaster(界面母版),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @param strViewMasterName: 界面母版名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewMaster_GetUniCondStr4Update(objViewMasterEN: clsViewMasterEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewMasterId <> '{0}'", objViewMasterEN.viewMasterId);
  strWhereCond += Format(" and PrjId = '{0}'", objViewMasterEN.prjId);
  strWhereCond += Format(" and ApplicationTypeId = '{0}'", objViewMasterEN.applicationTypeId);
  strWhereCond += Format(" and ViewMasterName = '{0}'", objViewMasterEN.viewMasterName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewMasterENS:源对象
 * @param objViewMasterENT:目标对象
 */
export function ViewMaster_GetObjFromJsonObj(objViewMasterENS: clsViewMasterEN): clsViewMasterEN {
  const objViewMasterENT: clsViewMasterEN = new clsViewMasterEN();
  ObjectAssign(objViewMasterENT, objViewMasterENS);
  return objViewMasterENT;
}
