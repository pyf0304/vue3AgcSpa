/**
 * 类名:clsVueCtrlDesignSysWApi
 * 表名:VueCtrlDesignSys(00050633)
 * 版本:2025.05.23.1(服务器:WIN-SRV103-116)
 * 日期:2025/05/26 15:55:45
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * Vue控件设计体系(VueCtrlDesignSys)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年05月26日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import {
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsVueCtrlDesignSysEN } from '@/ts/L0Entity/SysPara/clsVueCtrlDesignSysEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vueCtrlDesignSys_Controller = 'VueCtrlDesignSysApi';
export const vueCtrlDesignSys_ConstructorName = 'vueCtrlDesignSys';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strVueDesignSysId:关键字
 * @returns 对象
 **/
export async function VueCtrlDesignSys_GetObjByVueDesignSysIdAsync(
  strVueDesignSysId: string,
): Promise<clsVueCtrlDesignSysEN | null> {
  const strThisFuncName = 'GetObjByVueDesignSysIdAsync';

  if (IsNullOrEmpty(strVueDesignSysId) == true) {
    const strMsg = Format(
      '参数:[strVueDesignSysId]不能为空!(In clsVueCtrlDesignSysWApi.GetObjByVueDesignSysIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVueDesignSysId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strVueDesignSysId]的长度:[{0}]不正确!(clsVueCtrlDesignSysWApi.GetObjByVueDesignSysIdAsync)',
      strVueDesignSysId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByVueDesignSysId';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVueDesignSysId,
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
      const objVueCtrlDesignSys = VueCtrlDesignSys_GetObjFromJsonObj(returnObj);
      return objVueCtrlDesignSys;
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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
 * @param strVueDesignSysId:所给的关键字
 * @returns 对象
 */
export async function VueCtrlDesignSys_GetObjByVueDesignSysIdlocalStorage(
  strVueDesignSysId: string,
) {
  const strThisFuncName = 'GetObjByVueDesignSysIdlocalStorage';

  if (IsNullOrEmpty(strVueDesignSysId) == true) {
    const strMsg = Format(
      '参数:[strVueDesignSysId]不能为空!(In clsVueCtrlDesignSysWApi.GetObjByVueDesignSysIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVueDesignSysId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strVueDesignSysId]的长度:[{0}]不正确!(clsVueCtrlDesignSysWApi.GetObjByVueDesignSysIdlocalStorage)',
      strVueDesignSysId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsVueCtrlDesignSysEN._CurrTabName, strVueDesignSysId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objVueCtrlDesignSysCache: clsVueCtrlDesignSysEN = JSON.parse(strTempObj);
    return objVueCtrlDesignSysCache;
  }
  try {
    const objVueCtrlDesignSys = await VueCtrlDesignSys_GetObjByVueDesignSysIdAsync(
      strVueDesignSysId,
    );
    if (objVueCtrlDesignSys != null) {
      localStorage.setItem(strKey, JSON.stringify(objVueCtrlDesignSys));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objVueCtrlDesignSys;
    }
    return objVueCtrlDesignSys;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strVueDesignSysId,
      vueCtrlDesignSys_ConstructorName,
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
 * @param strVueDesignSysId:所给的关键字
 * @returns 对象
 */
export async function VueCtrlDesignSys_GetObjByVueDesignSysIdCache(
  strVueDesignSysId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByVueDesignSysIdCache';

  if (IsNullOrEmpty(strVueDesignSysId) == true) {
    const strMsg = Format(
      '参数:[strVueDesignSysId]不能为空!(In clsVueCtrlDesignSysWApi.GetObjByVueDesignSysIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVueDesignSysId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strVueDesignSysId]的长度:[{0}]不正确!(clsVueCtrlDesignSysWApi.GetObjByVueDesignSysIdCache)',
      strVueDesignSysId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrVueCtrlDesignSysObjLstCache = await VueCtrlDesignSys_GetObjLstCache();
  try {
    const arrVueCtrlDesignSysSel = arrVueCtrlDesignSysObjLstCache.filter(
      (x) => x.vueDesignSysId == strVueDesignSysId,
    );
    let objVueCtrlDesignSys: clsVueCtrlDesignSysEN;
    if (arrVueCtrlDesignSysSel.length > 0) {
      objVueCtrlDesignSys = arrVueCtrlDesignSysSel[0];
      return objVueCtrlDesignSys;
    } else {
      if (bolTryAsyncOnce == true) {
        const objVueCtrlDesignSysConst = await VueCtrlDesignSys_GetObjByVueDesignSysIdAsync(
          strVueDesignSysId,
        );
        if (objVueCtrlDesignSysConst != null) {
          VueCtrlDesignSys_ReFreshThisCache();
          return objVueCtrlDesignSysConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strVueDesignSysId,
      vueCtrlDesignSys_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objVueCtrlDesignSys:所给的对象
 * @returns 对象
 */
export async function VueCtrlDesignSys_UpdateObjInLstCache(
  objVueCtrlDesignSys: clsVueCtrlDesignSysEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrVueCtrlDesignSysObjLstCache = await VueCtrlDesignSys_GetObjLstCache();
    const obj = arrVueCtrlDesignSysObjLstCache.find(
      (x) => x.vueDesignSysName == objVueCtrlDesignSys.vueDesignSysName,
    );
    if (obj != null) {
      objVueCtrlDesignSys.vueDesignSysId = obj.vueDesignSysId;
      ObjectAssign(obj, objVueCtrlDesignSys);
    } else {
      arrVueCtrlDesignSysObjLstCache.push(objVueCtrlDesignSys);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      vueCtrlDesignSys_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function VueCtrlDesignSys_SortFunDefa(
  a: clsVueCtrlDesignSysEN,
  b: clsVueCtrlDesignSysEN,
): number {
  return a.vueDesignSysId.localeCompare(b.vueDesignSysId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function VueCtrlDesignSys_SortFunDefa2Fld(
  a: clsVueCtrlDesignSysEN,
  b: clsVueCtrlDesignSysEN,
): number {
  if (a.vueDesignSysName == b.vueDesignSysName)
    return a.vueDesignSysEnName.localeCompare(b.vueDesignSysEnName);
  else return a.vueDesignSysName.localeCompare(b.vueDesignSysName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function VueCtrlDesignSys_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsVueCtrlDesignSysEN.con_VueDesignSysId:
        return (a: clsVueCtrlDesignSysEN, b: clsVueCtrlDesignSysEN) => {
          return a.vueDesignSysId.localeCompare(b.vueDesignSysId);
        };
      case clsVueCtrlDesignSysEN.con_VueDesignSysName:
        return (a: clsVueCtrlDesignSysEN, b: clsVueCtrlDesignSysEN) => {
          return a.vueDesignSysName.localeCompare(b.vueDesignSysName);
        };
      case clsVueCtrlDesignSysEN.con_VueDesignSysEnName:
        return (a: clsVueCtrlDesignSysEN, b: clsVueCtrlDesignSysEN) => {
          return a.vueDesignSysEnName.localeCompare(b.vueDesignSysEnName);
        };
      case clsVueCtrlDesignSysEN.con_UpdDate:
        return (a: clsVueCtrlDesignSysEN, b: clsVueCtrlDesignSysEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clsVueCtrlDesignSysEN.con_UpdUser:
        return (a: clsVueCtrlDesignSysEN, b: clsVueCtrlDesignSysEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsVueCtrlDesignSysEN.con_Memo:
        return (a: clsVueCtrlDesignSysEN, b: clsVueCtrlDesignSysEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[VueCtrlDesignSys]中不存在!(in ${vueCtrlDesignSys_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsVueCtrlDesignSysEN.con_VueDesignSysId:
        return (a: clsVueCtrlDesignSysEN, b: clsVueCtrlDesignSysEN) => {
          return b.vueDesignSysId.localeCompare(a.vueDesignSysId);
        };
      case clsVueCtrlDesignSysEN.con_VueDesignSysName:
        return (a: clsVueCtrlDesignSysEN, b: clsVueCtrlDesignSysEN) => {
          return b.vueDesignSysName.localeCompare(a.vueDesignSysName);
        };
      case clsVueCtrlDesignSysEN.con_VueDesignSysEnName:
        return (a: clsVueCtrlDesignSysEN, b: clsVueCtrlDesignSysEN) => {
          return b.vueDesignSysEnName.localeCompare(a.vueDesignSysEnName);
        };
      case clsVueCtrlDesignSysEN.con_UpdDate:
        return (a: clsVueCtrlDesignSysEN, b: clsVueCtrlDesignSysEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clsVueCtrlDesignSysEN.con_UpdUser:
        return (a: clsVueCtrlDesignSysEN, b: clsVueCtrlDesignSysEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsVueCtrlDesignSysEN.con_Memo:
        return (a: clsVueCtrlDesignSysEN, b: clsVueCtrlDesignSysEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[VueCtrlDesignSys]中不存在!(in ${vueCtrlDesignSys_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strVueDesignSysId:所给的关键字
 * @returns 对象
 */
export async function VueCtrlDesignSys_GetNameByVueDesignSysIdCache(strVueDesignSysId: string) {
  if (IsNullOrEmpty(strVueDesignSysId) == true) {
    const strMsg = Format(
      '参数:[strVueDesignSysId]不能为空!(In clsVueCtrlDesignSysWApi.GetNameByVueDesignSysIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strVueDesignSysId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strVueDesignSysId]的长度:[{0}]不正确!(clsVueCtrlDesignSysWApi.GetNameByVueDesignSysIdCache)',
      strVueDesignSysId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrVueCtrlDesignSysObjLstCache = await VueCtrlDesignSys_GetObjLstCache();
  if (arrVueCtrlDesignSysObjLstCache == null) return '';
  try {
    const arrVueCtrlDesignSysSel = arrVueCtrlDesignSysObjLstCache.filter(
      (x) => x.vueDesignSysId == strVueDesignSysId,
    );
    let objVueCtrlDesignSys: clsVueCtrlDesignSysEN;
    if (arrVueCtrlDesignSysSel.length > 0) {
      objVueCtrlDesignSys = arrVueCtrlDesignSysSel[0];
      return objVueCtrlDesignSys.vueDesignSysName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strVueDesignSysId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function VueCtrlDesignSys_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsVueCtrlDesignSysEN.con_VueDesignSysId:
      return (obj: clsVueCtrlDesignSysEN) => {
        return obj.vueDesignSysId === value;
      };
    case clsVueCtrlDesignSysEN.con_VueDesignSysName:
      return (obj: clsVueCtrlDesignSysEN) => {
        return obj.vueDesignSysName === value;
      };
    case clsVueCtrlDesignSysEN.con_VueDesignSysEnName:
      return (obj: clsVueCtrlDesignSysEN) => {
        return obj.vueDesignSysEnName === value;
      };
    case clsVueCtrlDesignSysEN.con_UpdDate:
      return (obj: clsVueCtrlDesignSysEN) => {
        return obj.updDate === value;
      };
    case clsVueCtrlDesignSysEN.con_UpdUser:
      return (obj: clsVueCtrlDesignSysEN) => {
        return obj.updUser === value;
      };
    case clsVueCtrlDesignSysEN.con_Memo:
      return (obj: clsVueCtrlDesignSysEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[VueCtrlDesignSys]中不存在!(in ${vueCtrlDesignSys_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function VueCtrlDesignSys_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsVueCtrlDesignSysEN.con_VueDesignSysId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsVueCtrlDesignSysEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsVueCtrlDesignSysEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strVueDesignSysId = strInValue;
  if (IsNullOrEmpty(strVueDesignSysId) == true) {
    return '';
  }
  const objVueCtrlDesignSys = await VueCtrlDesignSys_GetObjByVueDesignSysIdCache(strVueDesignSysId);
  if (objVueCtrlDesignSys == null) return '';
  if (objVueCtrlDesignSys.GetFldValue(strOutFldName) == null) return '';
  return objVueCtrlDesignSys.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function VueCtrlDesignSys_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsVueCtrlDesignSysEN.con_VueDesignSysId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrVueCtrlDesignSys = await VueCtrlDesignSys_GetObjLstCache();
  if (arrVueCtrlDesignSys == null) return [];
  let arrVueCtrlDesignSysSel = arrVueCtrlDesignSys;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrVueCtrlDesignSysSel.length == 0) return [];
  return arrVueCtrlDesignSysSel.map((x) => x.vueDesignSysId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function VueCtrlDesignSys_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
export async function VueCtrlDesignSys_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
export async function VueCtrlDesignSys_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
export async function VueCtrlDesignSys_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsVueCtrlDesignSysEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

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
      const objVueCtrlDesignSys = VueCtrlDesignSys_GetObjFromJsonObj(returnObj);
      return objVueCtrlDesignSys;
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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
export async function VueCtrlDesignSys_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsVueCtrlDesignSysEN._CurrTabName;
  if (IsNullOrEmpty(clsVueCtrlDesignSysEN.WhereFormat) == false) {
    strWhereCond = clsVueCtrlDesignSysEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsVueCtrlDesignSysEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsVueCtrlDesignSysEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrVueCtrlDesignSysExObjLstCache: Array<clsVueCtrlDesignSysEN> = CacheHelper.Get(strKey);
    const arrVueCtrlDesignSysObjLstT = VueCtrlDesignSys_GetObjLstByJSONObjLst(
      arrVueCtrlDesignSysExObjLstCache,
    );
    return arrVueCtrlDesignSysObjLstT;
  }
  try {
    const arrVueCtrlDesignSysExObjLst = await VueCtrlDesignSys_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrVueCtrlDesignSysExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrVueCtrlDesignSysExObjLst.length,
    );
    console.log(strInfo);
    return arrVueCtrlDesignSysExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vueCtrlDesignSys_ConstructorName,
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
export async function VueCtrlDesignSys_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsVueCtrlDesignSysEN._CurrTabName;
  if (IsNullOrEmpty(clsVueCtrlDesignSysEN.WhereFormat) == false) {
    strWhereCond = clsVueCtrlDesignSysEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsVueCtrlDesignSysEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsVueCtrlDesignSysEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrVueCtrlDesignSysExObjLstCache: Array<clsVueCtrlDesignSysEN> =
      JSON.parse(strTempObjLst);
    const arrVueCtrlDesignSysObjLstT = VueCtrlDesignSys_GetObjLstByJSONObjLst(
      arrVueCtrlDesignSysExObjLstCache,
    );
    return arrVueCtrlDesignSysObjLstT;
  }
  try {
    const arrVueCtrlDesignSysExObjLst = await VueCtrlDesignSys_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrVueCtrlDesignSysExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrVueCtrlDesignSysExObjLst.length,
    );
    console.log(strInfo);
    return arrVueCtrlDesignSysExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vueCtrlDesignSys_ConstructorName,
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
export async function VueCtrlDesignSys_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsVueCtrlDesignSysEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrVueCtrlDesignSysObjLstCache: Array<clsVueCtrlDesignSysEN> = JSON.parse(strTempObjLst);
    return arrVueCtrlDesignSysObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function VueCtrlDesignSys_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsVueCtrlDesignSysEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

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
          vueCtrlDesignSys_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = VueCtrlDesignSys_GetObjLstByJSONObjLst(returnObjLst);
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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
export async function VueCtrlDesignSys_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsVueCtrlDesignSysEN._CurrTabName;
  if (IsNullOrEmpty(clsVueCtrlDesignSysEN.WhereFormat) == false) {
    strWhereCond = clsVueCtrlDesignSysEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsVueCtrlDesignSysEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsVueCtrlDesignSysEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrVueCtrlDesignSysExObjLstCache: Array<clsVueCtrlDesignSysEN> =
      JSON.parse(strTempObjLst);
    const arrVueCtrlDesignSysObjLstT = VueCtrlDesignSys_GetObjLstByJSONObjLst(
      arrVueCtrlDesignSysExObjLstCache,
    );
    return arrVueCtrlDesignSysObjLstT;
  }
  try {
    const arrVueCtrlDesignSysExObjLst = await VueCtrlDesignSys_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrVueCtrlDesignSysExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrVueCtrlDesignSysExObjLst.length,
    );
    console.log(strInfo);
    return arrVueCtrlDesignSysExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vueCtrlDesignSys_ConstructorName,
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
export async function VueCtrlDesignSys_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsVueCtrlDesignSysEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrVueCtrlDesignSysObjLstCache: Array<clsVueCtrlDesignSysEN> = JSON.parse(strTempObjLst);
    return arrVueCtrlDesignSysObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function VueCtrlDesignSys_GetObjLstCache(): Promise<Array<clsVueCtrlDesignSysEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrVueCtrlDesignSysObjLstCache;
  switch (clsVueCtrlDesignSysEN.CacheModeId) {
    case '04': //sessionStorage
      arrVueCtrlDesignSysObjLstCache = await VueCtrlDesignSys_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrVueCtrlDesignSysObjLstCache = await VueCtrlDesignSys_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrVueCtrlDesignSysObjLstCache = await VueCtrlDesignSys_GetObjLstClientCache();
      break;
    default:
      arrVueCtrlDesignSysObjLstCache = await VueCtrlDesignSys_GetObjLstClientCache();
      break;
  }
  return arrVueCtrlDesignSysObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function VueCtrlDesignSys_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrVueCtrlDesignSysObjLstCache;
  switch (clsVueCtrlDesignSysEN.CacheModeId) {
    case '04': //sessionStorage
      arrVueCtrlDesignSysObjLstCache = await VueCtrlDesignSys_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrVueCtrlDesignSysObjLstCache = await VueCtrlDesignSys_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrVueCtrlDesignSysObjLstCache = null;
      break;
    default:
      arrVueCtrlDesignSysObjLstCache = null;
      break;
  }
  return arrVueCtrlDesignSysObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrVueDesignSysIdCond:条件对象
 * @returns 对象列表子集
 */
export async function VueCtrlDesignSys_GetSubObjLstCache(
  objVueCtrlDesignSysCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrVueCtrlDesignSysObjLstCache = await VueCtrlDesignSys_GetObjLstCache();
  let arrVueCtrlDesignSysSel = arrVueCtrlDesignSysObjLstCache;
  if (objVueCtrlDesignSysCond.GetConditions().length == 0) return arrVueCtrlDesignSysSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objVueCtrlDesignSysCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrVueCtrlDesignSysSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objVueCtrlDesignSysCond),
      vueCtrlDesignSys_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsVueCtrlDesignSysEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrVueDesignSysId:关键字列表
 * @returns 对象列表
 **/
export async function VueCtrlDesignSys_GetObjLstByVueDesignSysIdLstAsync(
  arrVueDesignSysId: Array<string>,
): Promise<Array<clsVueCtrlDesignSysEN>> {
  const strThisFuncName = 'GetObjLstByVueDesignSysIdLstAsync';
  const strAction = 'GetObjLstByVueDesignSysIdLst';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrVueDesignSysId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vueCtrlDesignSys_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = VueCtrlDesignSys_GetObjLstByJSONObjLst(returnObjLst);
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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
 * @param arrstrVueDesignSysIdLst:关键字列表
 * @returns 对象列表
 */
export async function VueCtrlDesignSys_GetObjLstByVueDesignSysIdLstCache(
  arrVueDesignSysIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByVueDesignSysIdLstCache';
  try {
    const arrVueCtrlDesignSysObjLstCache = await VueCtrlDesignSys_GetObjLstCache();
    const arrVueCtrlDesignSysSel = arrVueCtrlDesignSysObjLstCache.filter(
      (x) => arrVueDesignSysIdLst.indexOf(x.vueDesignSysId) > -1,
    );
    return arrVueCtrlDesignSysSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrVueDesignSysIdLst.join(','),
      vueCtrlDesignSys_ConstructorName,
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
export async function VueCtrlDesignSys_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsVueCtrlDesignSysEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

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
          vueCtrlDesignSys_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = VueCtrlDesignSys_GetObjLstByJSONObjLst(returnObjLst);
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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
export async function VueCtrlDesignSys_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsVueCtrlDesignSysEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

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
          vueCtrlDesignSys_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = VueCtrlDesignSys_GetObjLstByJSONObjLst(returnObjLst);
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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)

/**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strVueDesignSysId:关键字
 * @returns 获取删除的结果
 **/
export async function VueCtrlDesignSys_DelRecordAsync(strVueDesignSysId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strVueDesignSysId);

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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
 * @param arrVueDesignSysId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function VueCtrlDesignSys_DelVueCtrlDesignSyssAsync(
  arrVueDesignSysId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelVueCtrlDesignSyssAsync';
  const strAction = 'DelVueCtrlDesignSyss';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrVueDesignSysId, config);
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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function VueCtrlDesignSys_DelVueCtrlDesignSyssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelVueCtrlDesignSyssByCondAsync';
  const strAction = 'DelVueCtrlDesignSyssByCond';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
 * @param objVueCtrlDesignSysEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function VueCtrlDesignSys_AddNewRecordAsync(
  objVueCtrlDesignSysEN: clsVueCtrlDesignSysEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objVueCtrlDesignSysEN);
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objVueCtrlDesignSysEN, config);
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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
 * @param objVueCtrlDesignSysEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function VueCtrlDesignSys_AddNewRecordWithMaxIdAsync(
  objVueCtrlDesignSysEN: clsVueCtrlDesignSysEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objVueCtrlDesignSysEN, config);
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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
export async function VueCtrlDesignSys_AddNewObjSave(
  objVueCtrlDesignSysEN: clsVueCtrlDesignSysEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    VueCtrlDesignSys_CheckPropertyNew(objVueCtrlDesignSysEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${vueCtrlDesignSys_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await VueCtrlDesignSys_CheckUniCond4Add(objVueCtrlDesignSysEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await VueCtrlDesignSys_AddNewRecordWithMaxIdAsync(objVueCtrlDesignSysEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      VueCtrlDesignSys_ReFreshCache();
    } else {
      const strInfo = `添加[Vue控件设计体系(VueCtrlDesignSys)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${vueCtrlDesignSys_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function VueCtrlDesignSys_CheckUniCond4Add(
  objVueCtrlDesignSysEN: clsVueCtrlDesignSysEN,
): Promise<boolean> {
  const strUniquenessCondition = VueCtrlDesignSys_GetUniCondStr(objVueCtrlDesignSysEN);
  const bolIsExistCondition = await VueCtrlDesignSys_IsExistRecordAsync(strUniquenessCondition);
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
export async function VueCtrlDesignSys_CheckUniCond4Update(
  objVueCtrlDesignSysEN: clsVueCtrlDesignSysEN,
): Promise<boolean> {
  const strUniquenessCondition = VueCtrlDesignSys_GetUniCondStr4Update(objVueCtrlDesignSysEN);
  const bolIsExistCondition = await VueCtrlDesignSys_IsExistRecordAsync(strUniquenessCondition);
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
export async function VueCtrlDesignSys_UpdateObjSave(
  objVueCtrlDesignSysEN: clsVueCtrlDesignSysEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objVueCtrlDesignSysEN.sfUpdFldSetStr = objVueCtrlDesignSysEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objVueCtrlDesignSysEN.vueDesignSysId == '' ||
    objVueCtrlDesignSysEN.vueDesignSysId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    VueCtrlDesignSys_CheckProperty4Update(objVueCtrlDesignSysEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${vueCtrlDesignSys_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await VueCtrlDesignSys_CheckUniCond4Update(objVueCtrlDesignSysEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await VueCtrlDesignSys_UpdateRecordAsync(objVueCtrlDesignSysEN);
    if (returnBool == true) {
      VueCtrlDesignSys_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${vueCtrlDesignSys_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objVueCtrlDesignSysEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function VueCtrlDesignSys_AddNewRecordWithReturnKeyAsync(
  objVueCtrlDesignSysEN: clsVueCtrlDesignSysEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objVueCtrlDesignSysEN, config);
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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
 * @param objVueCtrlDesignSysEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function VueCtrlDesignSys_UpdateRecordAsync(
  objVueCtrlDesignSysEN: clsVueCtrlDesignSysEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objVueCtrlDesignSysEN.sfUpdFldSetStr === undefined ||
    objVueCtrlDesignSysEN.sfUpdFldSetStr === null ||
    objVueCtrlDesignSysEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objVueCtrlDesignSysEN.vueDesignSysId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objVueCtrlDesignSysEN, config);
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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
 * @param objVueCtrlDesignSysEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function VueCtrlDesignSys_EditRecordExAsync(
  objVueCtrlDesignSysEN: clsVueCtrlDesignSysEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objVueCtrlDesignSysEN.sfUpdFldSetStr === undefined ||
    objVueCtrlDesignSysEN.sfUpdFldSetStr === null ||
    objVueCtrlDesignSysEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objVueCtrlDesignSysEN.vueDesignSysId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objVueCtrlDesignSysEN, config);
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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
 * @param objVueCtrlDesignSysEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function VueCtrlDesignSys_UpdateWithConditionAsync(
  objVueCtrlDesignSysEN: clsVueCtrlDesignSysEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objVueCtrlDesignSysEN.sfUpdFldSetStr === undefined ||
    objVueCtrlDesignSysEN.sfUpdFldSetStr === null ||
    objVueCtrlDesignSysEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objVueCtrlDesignSysEN.vueDesignSysId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);
  objVueCtrlDesignSysEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objVueCtrlDesignSysEN, config);
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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
 * @param objstrVueDesignSysIdCond:条件对象
 * @returns 对象列表子集
 */
export async function VueCtrlDesignSys_IsExistRecordCache(
  objVueCtrlDesignSysCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrVueCtrlDesignSysObjLstCache = await VueCtrlDesignSys_GetObjLstCache();
  if (arrVueCtrlDesignSysObjLstCache == null) return false;
  let arrVueCtrlDesignSysSel = arrVueCtrlDesignSysObjLstCache;
  if (objVueCtrlDesignSysCond.GetConditions().length == 0)
    return arrVueCtrlDesignSysSel.length > 0 ? true : false;
  try {
    for (const objCondition of objVueCtrlDesignSysCond.GetConditions()) {
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
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrVueCtrlDesignSysSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objVueCtrlDesignSysCond),
      vueCtrlDesignSys_ConstructorName,
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
export async function VueCtrlDesignSys_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
 * @param strVueDesignSysId:所给的关键字
 * @returns 对象
 */
export async function VueCtrlDesignSys_IsExistCache(strVueDesignSysId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrVueCtrlDesignSysObjLstCache = await VueCtrlDesignSys_GetObjLstCache();
  if (arrVueCtrlDesignSysObjLstCache == null) return false;
  try {
    const arrVueCtrlDesignSysSel = arrVueCtrlDesignSysObjLstCache.filter(
      (x) => x.vueDesignSysId == strVueDesignSysId,
    );
    if (arrVueCtrlDesignSysSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strVueDesignSysId,
      vueCtrlDesignSys_ConstructorName,
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
 * @param strVueDesignSysId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function VueCtrlDesignSys_IsExistAsync(strVueDesignSysId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strVueDesignSysId,
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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
export async function VueCtrlDesignSys_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
 * @param objVueCtrlDesignSysCond:条件对象
 * @returns 对象列表记录数
 */
export async function VueCtrlDesignSys_GetRecCountByCondCache(
  objVueCtrlDesignSysCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrVueCtrlDesignSysObjLstCache = await VueCtrlDesignSys_GetObjLstCache();
  if (arrVueCtrlDesignSysObjLstCache == null) return 0;
  let arrVueCtrlDesignSysSel = arrVueCtrlDesignSysObjLstCache;
  if (objVueCtrlDesignSysCond.GetConditions().length == 0) return arrVueCtrlDesignSysSel.length;
  try {
    for (const objCondition of objVueCtrlDesignSysCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrVueCtrlDesignSysSel = arrVueCtrlDesignSysSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrVueCtrlDesignSysSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objVueCtrlDesignSysCond),
      vueCtrlDesignSys_ConstructorName,
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
export async function VueCtrlDesignSys_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
export async function VueCtrlDesignSys_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(vueCtrlDesignSys_Controller, strAction);

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
        vueCtrlDesignSys_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vueCtrlDesignSys_ConstructorName,
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
export function VueCtrlDesignSys_GetWebApiUrl(strController: string, strAction: string): string {
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
export function VueCtrlDesignSys_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsVueCtrlDesignSysEN._CurrTabName;
  switch (clsVueCtrlDesignSysEN.CacheModeId) {
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
  clsVueCtrlDesignSysEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function VueCtrlDesignSys_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsVueCtrlDesignSysEN._CurrTabName;
    switch (clsVueCtrlDesignSysEN.CacheModeId) {
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
    clsVueCtrlDesignSysEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function VueCtrlDesignSys_GetLastRefreshTime(): string {
  if (clsVueCtrlDesignSysEN._RefreshTimeLst.length == 0) return '';
  return clsVueCtrlDesignSysEN._RefreshTimeLst[clsVueCtrlDesignSysEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function VueCtrlDesignSys_Cache(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In )', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：Cache");
  const arrObjLstSel = await VueCtrlDesignSys_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsVueCtrlDesignSysEN.con_VueDesignSysId,
    clsVueCtrlDesignSysEN.con_VueDesignSysName,
    'Vue控件设计体系...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function VueCtrlDesignSys_GetArrVueCtrlDesignSys() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：Cache");
  const arrVueCtrlDesignSys = new Array<clsVueCtrlDesignSysEN>();
  const arrObjLstSel = await VueCtrlDesignSys_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsVueCtrlDesignSysEN();
  obj0.vueDesignSysId = '0';
  obj0.vueDesignSysName = '选vue控件设计体系...';
  arrVueCtrlDesignSys.push(obj0);
  arrObjLstSel.forEach((x) => arrVueCtrlDesignSys.push(x));
  return arrVueCtrlDesignSys;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function VueCtrlDesignSys_CheckPropertyNew(pobjVueCtrlDesignSysEN: clsVueCtrlDesignSysEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjVueCtrlDesignSysEN.vueDesignSysName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[Vue控件设计体系名称]不能为空(In Vue控件设计体系)!(clsVueCtrlDesignSysBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjVueCtrlDesignSysEN.vueDesignSysEnName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[Vue控件设计体系英文名]不能为空(In Vue控件设计体系)!(clsVueCtrlDesignSysBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjVueCtrlDesignSysEN.updUser) === true) {
    throw new Error(
      `(errid:Watl000411)字段[修改者]不能为空(In Vue控件设计体系)!(clsVueCtrlDesignSysBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.vueDesignSysId) == false &&
    GetStrLen(pobjVueCtrlDesignSysEN.vueDesignSysId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Vue控件设计体系Id(vueDesignSysId)]的长度不能超过2(In Vue控件设计体系(VueCtrlDesignSys))!值:${pobjVueCtrlDesignSysEN.vueDesignSysId}(clsVueCtrlDesignSysBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.vueDesignSysName) == false &&
    GetStrLen(pobjVueCtrlDesignSysEN.vueDesignSysName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Vue控件设计体系名称(vueDesignSysName)]的长度不能超过50(In Vue控件设计体系(VueCtrlDesignSys))!值:${pobjVueCtrlDesignSysEN.vueDesignSysName}(clsVueCtrlDesignSysBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.vueDesignSysEnName) == false &&
    GetStrLen(pobjVueCtrlDesignSysEN.vueDesignSysEnName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Vue控件设计体系英文名(vueDesignSysEnName)]的长度不能超过50(In Vue控件设计体系(VueCtrlDesignSys))!值:${pobjVueCtrlDesignSysEN.vueDesignSysEnName}(clsVueCtrlDesignSysBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.updDate) == false &&
    GetStrLen(pobjVueCtrlDesignSysEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In Vue控件设计体系(VueCtrlDesignSys))!值:${pobjVueCtrlDesignSysEN.updDate}(clsVueCtrlDesignSysBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.updUser) == false &&
    GetStrLen(pobjVueCtrlDesignSysEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In Vue控件设计体系(VueCtrlDesignSys))!值:${pobjVueCtrlDesignSysEN.updUser}(clsVueCtrlDesignSysBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.memo) == false &&
    GetStrLen(pobjVueCtrlDesignSysEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In Vue控件设计体系(VueCtrlDesignSys))!值:${pobjVueCtrlDesignSysEN.memo}(clsVueCtrlDesignSysBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.vueDesignSysId) == false &&
    undefined !== pobjVueCtrlDesignSysEN.vueDesignSysId &&
    tzDataType.isString(pobjVueCtrlDesignSysEN.vueDesignSysId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Vue控件设计体系Id(vueDesignSysId)]的值:[${pobjVueCtrlDesignSysEN.vueDesignSysId}], 非法,应该为字符型(In Vue控件设计体系(VueCtrlDesignSys))!(clsVueCtrlDesignSysBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.vueDesignSysName) == false &&
    undefined !== pobjVueCtrlDesignSysEN.vueDesignSysName &&
    tzDataType.isString(pobjVueCtrlDesignSysEN.vueDesignSysName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Vue控件设计体系名称(vueDesignSysName)]的值:[${pobjVueCtrlDesignSysEN.vueDesignSysName}], 非法,应该为字符型(In Vue控件设计体系(VueCtrlDesignSys))!(clsVueCtrlDesignSysBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.vueDesignSysEnName) == false &&
    undefined !== pobjVueCtrlDesignSysEN.vueDesignSysEnName &&
    tzDataType.isString(pobjVueCtrlDesignSysEN.vueDesignSysEnName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Vue控件设计体系英文名(vueDesignSysEnName)]的值:[${pobjVueCtrlDesignSysEN.vueDesignSysEnName}], 非法,应该为字符型(In Vue控件设计体系(VueCtrlDesignSys))!(clsVueCtrlDesignSysBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.updDate) == false &&
    undefined !== pobjVueCtrlDesignSysEN.updDate &&
    tzDataType.isString(pobjVueCtrlDesignSysEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjVueCtrlDesignSysEN.updDate}], 非法,应该为字符型(In Vue控件设计体系(VueCtrlDesignSys))!(clsVueCtrlDesignSysBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.updUser) == false &&
    undefined !== pobjVueCtrlDesignSysEN.updUser &&
    tzDataType.isString(pobjVueCtrlDesignSysEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjVueCtrlDesignSysEN.updUser}], 非法,应该为字符型(In Vue控件设计体系(VueCtrlDesignSys))!(clsVueCtrlDesignSysBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.memo) == false &&
    undefined !== pobjVueCtrlDesignSysEN.memo &&
    tzDataType.isString(pobjVueCtrlDesignSysEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjVueCtrlDesignSysEN.memo}], 非法,应该为字符型(In Vue控件设计体系(VueCtrlDesignSys))!(clsVueCtrlDesignSysBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function VueCtrlDesignSys_CheckProperty4Update(
  pobjVueCtrlDesignSysEN: clsVueCtrlDesignSysEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.vueDesignSysId) == false &&
    GetStrLen(pobjVueCtrlDesignSysEN.vueDesignSysId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Vue控件设计体系Id(vueDesignSysId)]的长度不能超过2(In Vue控件设计体系(VueCtrlDesignSys))!值:${pobjVueCtrlDesignSysEN.vueDesignSysId}(clsVueCtrlDesignSysBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.vueDesignSysName) == false &&
    GetStrLen(pobjVueCtrlDesignSysEN.vueDesignSysName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Vue控件设计体系名称(vueDesignSysName)]的长度不能超过50(In Vue控件设计体系(VueCtrlDesignSys))!值:${pobjVueCtrlDesignSysEN.vueDesignSysName}(clsVueCtrlDesignSysBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.vueDesignSysEnName) == false &&
    GetStrLen(pobjVueCtrlDesignSysEN.vueDesignSysEnName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Vue控件设计体系英文名(vueDesignSysEnName)]的长度不能超过50(In Vue控件设计体系(VueCtrlDesignSys))!值:${pobjVueCtrlDesignSysEN.vueDesignSysEnName}(clsVueCtrlDesignSysBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.updDate) == false &&
    GetStrLen(pobjVueCtrlDesignSysEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In Vue控件设计体系(VueCtrlDesignSys))!值:${pobjVueCtrlDesignSysEN.updDate}(clsVueCtrlDesignSysBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.updUser) == false &&
    GetStrLen(pobjVueCtrlDesignSysEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In Vue控件设计体系(VueCtrlDesignSys))!值:${pobjVueCtrlDesignSysEN.updUser}(clsVueCtrlDesignSysBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.memo) == false &&
    GetStrLen(pobjVueCtrlDesignSysEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In Vue控件设计体系(VueCtrlDesignSys))!值:${pobjVueCtrlDesignSysEN.memo}(clsVueCtrlDesignSysBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.vueDesignSysId) == false &&
    undefined !== pobjVueCtrlDesignSysEN.vueDesignSysId &&
    tzDataType.isString(pobjVueCtrlDesignSysEN.vueDesignSysId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Vue控件设计体系Id(vueDesignSysId)]的值:[${pobjVueCtrlDesignSysEN.vueDesignSysId}], 非法,应该为字符型(In Vue控件设计体系(VueCtrlDesignSys))!(clsVueCtrlDesignSysBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.vueDesignSysName) == false &&
    undefined !== pobjVueCtrlDesignSysEN.vueDesignSysName &&
    tzDataType.isString(pobjVueCtrlDesignSysEN.vueDesignSysName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Vue控件设计体系名称(vueDesignSysName)]的值:[${pobjVueCtrlDesignSysEN.vueDesignSysName}], 非法,应该为字符型(In Vue控件设计体系(VueCtrlDesignSys))!(clsVueCtrlDesignSysBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.vueDesignSysEnName) == false &&
    undefined !== pobjVueCtrlDesignSysEN.vueDesignSysEnName &&
    tzDataType.isString(pobjVueCtrlDesignSysEN.vueDesignSysEnName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Vue控件设计体系英文名(vueDesignSysEnName)]的值:[${pobjVueCtrlDesignSysEN.vueDesignSysEnName}], 非法,应该为字符型(In Vue控件设计体系(VueCtrlDesignSys))!(clsVueCtrlDesignSysBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.updDate) == false &&
    undefined !== pobjVueCtrlDesignSysEN.updDate &&
    tzDataType.isString(pobjVueCtrlDesignSysEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjVueCtrlDesignSysEN.updDate}], 非法,应该为字符型(In Vue控件设计体系(VueCtrlDesignSys))!(clsVueCtrlDesignSysBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.updUser) == false &&
    undefined !== pobjVueCtrlDesignSysEN.updUser &&
    tzDataType.isString(pobjVueCtrlDesignSysEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjVueCtrlDesignSysEN.updUser}], 非法,应该为字符型(In Vue控件设计体系(VueCtrlDesignSys))!(clsVueCtrlDesignSysBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjVueCtrlDesignSysEN.memo) == false &&
    undefined !== pobjVueCtrlDesignSysEN.memo &&
    tzDataType.isString(pobjVueCtrlDesignSysEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjVueCtrlDesignSysEN.memo}], 非法,应该为字符型(In Vue控件设计体系(VueCtrlDesignSys))!(clsVueCtrlDesignSysBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function VueCtrlDesignSys_GetJSONStrByObj(
  pobjVueCtrlDesignSysEN: clsVueCtrlDesignSysEN,
): string {
  pobjVueCtrlDesignSysEN.sfUpdFldSetStr = pobjVueCtrlDesignSysEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjVueCtrlDesignSysEN);
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
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function VueCtrlDesignSys_GetObjLstByJSONStr(strJSON: string): Array<clsVueCtrlDesignSysEN> {
  let arrVueCtrlDesignSysObjLst = new Array<clsVueCtrlDesignSysEN>();
  if (strJSON === '') {
    return arrVueCtrlDesignSysObjLst;
  }
  try {
    arrVueCtrlDesignSysObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrVueCtrlDesignSysObjLst;
  }
  return arrVueCtrlDesignSysObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrVueCtrlDesignSysObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function VueCtrlDesignSys_GetObjLstByJSONObjLst(
  arrVueCtrlDesignSysObjLstS: Array<clsVueCtrlDesignSysEN>,
): Array<clsVueCtrlDesignSysEN> {
  const arrVueCtrlDesignSysObjLst = new Array<clsVueCtrlDesignSysEN>();
  for (const objInFor of arrVueCtrlDesignSysObjLstS) {
    const obj1 = VueCtrlDesignSys_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrVueCtrlDesignSysObjLst.push(obj1);
  }
  return arrVueCtrlDesignSysObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-05-26
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function VueCtrlDesignSys_GetObjByJSONStr(strJSON: string): clsVueCtrlDesignSysEN {
  let pobjVueCtrlDesignSysEN = new clsVueCtrlDesignSysEN();
  if (strJSON === '') {
    return pobjVueCtrlDesignSysEN;
  }
  try {
    pobjVueCtrlDesignSysEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjVueCtrlDesignSysEN;
  }
  return pobjVueCtrlDesignSysEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function VueCtrlDesignSys_GetCombineCondition(
  objVueCtrlDesignSysCond: clsVueCtrlDesignSysEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objVueCtrlDesignSysCond.dicFldComparisonOp,
      clsVueCtrlDesignSysEN.con_VueDesignSysId,
    ) == true
  ) {
    const strComparisonOpVueDesignSysId: string =
      objVueCtrlDesignSysCond.dicFldComparisonOp[clsVueCtrlDesignSysEN.con_VueDesignSysId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsVueCtrlDesignSysEN.con_VueDesignSysId,
      objVueCtrlDesignSysCond.vueDesignSysId,
      strComparisonOpVueDesignSysId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objVueCtrlDesignSysCond.dicFldComparisonOp,
      clsVueCtrlDesignSysEN.con_VueDesignSysName,
    ) == true
  ) {
    const strComparisonOpVueDesignSysName: string =
      objVueCtrlDesignSysCond.dicFldComparisonOp[clsVueCtrlDesignSysEN.con_VueDesignSysName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsVueCtrlDesignSysEN.con_VueDesignSysName,
      objVueCtrlDesignSysCond.vueDesignSysName,
      strComparisonOpVueDesignSysName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objVueCtrlDesignSysCond.dicFldComparisonOp,
      clsVueCtrlDesignSysEN.con_VueDesignSysEnName,
    ) == true
  ) {
    const strComparisonOpVueDesignSysEnName: string =
      objVueCtrlDesignSysCond.dicFldComparisonOp[clsVueCtrlDesignSysEN.con_VueDesignSysEnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsVueCtrlDesignSysEN.con_VueDesignSysEnName,
      objVueCtrlDesignSysCond.vueDesignSysEnName,
      strComparisonOpVueDesignSysEnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objVueCtrlDesignSysCond.dicFldComparisonOp,
      clsVueCtrlDesignSysEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objVueCtrlDesignSysCond.dicFldComparisonOp[clsVueCtrlDesignSysEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsVueCtrlDesignSysEN.con_UpdDate,
      objVueCtrlDesignSysCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objVueCtrlDesignSysCond.dicFldComparisonOp,
      clsVueCtrlDesignSysEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objVueCtrlDesignSysCond.dicFldComparisonOp[clsVueCtrlDesignSysEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsVueCtrlDesignSysEN.con_UpdUser,
      objVueCtrlDesignSysCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objVueCtrlDesignSysCond.dicFldComparisonOp,
      clsVueCtrlDesignSysEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objVueCtrlDesignSysCond.dicFldComparisonOp[clsVueCtrlDesignSysEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsVueCtrlDesignSysEN.con_Memo,
      objVueCtrlDesignSysCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--VueCtrlDesignSys(Vue控件设计体系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strVueDesignSysName: Vue控件设计体系名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function VueCtrlDesignSys_GetUniCondStr(
  objVueCtrlDesignSysEN: clsVueCtrlDesignSysEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and VueDesignSysName = '{0}'", objVueCtrlDesignSysEN.vueDesignSysName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--VueCtrlDesignSys(Vue控件设计体系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strVueDesignSysName: Vue控件设计体系名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function VueCtrlDesignSys_GetUniCondStr4Update(
  objVueCtrlDesignSysEN: clsVueCtrlDesignSysEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and VueDesignSysId <> '{0}'", objVueCtrlDesignSysEN.vueDesignSysId);
  strWhereCond += Format(" and VueDesignSysName = '{0}'", objVueCtrlDesignSysEN.vueDesignSysName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objVueCtrlDesignSysENS:源对象
 * @param objVueCtrlDesignSysENT:目标对象
 */
export function VueCtrlDesignSys_GetObjFromJsonObj(
  objVueCtrlDesignSysENS: clsVueCtrlDesignSysEN,
): clsVueCtrlDesignSysEN {
  const objVueCtrlDesignSysENT: clsVueCtrlDesignSysEN = new clsVueCtrlDesignSysEN();
  ObjectAssign(objVueCtrlDesignSysENT, objVueCtrlDesignSysENS);
  return objVueCtrlDesignSysENT;
}
