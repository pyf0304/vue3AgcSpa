﻿/**
 * 类名:clsQxRoleMenusWApi
 * 表名:QxRoleMenus(00140007)
 * 版本:2023.06.21.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/22 00:23:33
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台Spa(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 角色菜单(QxRoleMenus)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年06月22日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
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
import { clsQxRoleMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusEN';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const qxRoleMenus_Controller = 'QxRoleMenusApi';
export const qxRoleMenus_ConstructorName = 'qxRoleMenus';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function QxRoleMenus_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsQxRoleMenusEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空！(In clsQxRoleMenusWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

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
      const objQxRoleMenus = QxRoleMenus_GetObjFromJsonObj(returnObj);
      return objQxRoleMenus;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
export async function QxRoleMenus_GetObjBymIdCache(lngmId: number, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空！(In clsQxRoleMenusWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrQxRoleMenusObjLstCache = await QxRoleMenus_GetObjLstCache();
  try {
    const arrQxRoleMenusSel = arrQxRoleMenusObjLstCache.filter((x) => x.mId == lngmId);
    let objQxRoleMenus: clsQxRoleMenusEN;
    if (arrQxRoleMenusSel.length > 0) {
      objQxRoleMenus = arrQxRoleMenusSel[0];
      return objQxRoleMenus;
    } else {
      if (bolTryAsyncOnce == true) {
        const objQxRoleMenusConst = await QxRoleMenus_GetObjBymIdAsync(lngmId);
        if (objQxRoleMenusConst != null) {
          QxRoleMenus_ReFreshThisCache();
          return objQxRoleMenusConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      qxRoleMenus_ConstructorName,
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
export async function QxRoleMenus_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空！(In clsQxRoleMenusWApi.GetObjBymIdlocalStorage)');
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsQxRoleMenusEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objQxRoleMenusCache: clsQxRoleMenusEN = JSON.parse(strTempObj);
    return objQxRoleMenusCache;
  }
  try {
    const objQxRoleMenus = await QxRoleMenus_GetObjBymIdAsync(lngmId);
    if (objQxRoleMenus != null) {
      localStorage.setItem(strKey, JSON.stringify(objQxRoleMenus));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objQxRoleMenus;
    }
    return objQxRoleMenus;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      qxRoleMenus_ConstructorName,
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
 * @param objQxRoleMenus:所给的对象
 * @returns 对象
 */
export async function QxRoleMenus_UpdateObjInLstCache(objQxRoleMenus: clsQxRoleMenusEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrQxRoleMenusObjLstCache = await QxRoleMenus_GetObjLstCache();
    const obj = arrQxRoleMenusObjLstCache.find(
      (x) => x.roleId == objQxRoleMenus.roleId && x.menuId == objQxRoleMenus.menuId,
    );
    if (obj != null) {
      objQxRoleMenus.mId = obj.mId;
      ObjectAssign(obj, objQxRoleMenus);
    } else {
      arrQxRoleMenusObjLstCache.push(objQxRoleMenus);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      qxRoleMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/*该表没有名称字段，不能生成此函数！*/

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function QxRoleMenus_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsQxRoleMenusEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsQxRoleMenusEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strOutFldName,
      clsQxRoleMenusEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objQxRoleMenus = await QxRoleMenus_GetObjBymIdCache(lngmId);
  if (objQxRoleMenus == null) return '';
  if (objQxRoleMenus.GetFldValue(strOutFldName) == null) return '';
  return objQxRoleMenus.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxRoleMenus_SortFunDefa(a: clsQxRoleMenusEN, b: clsQxRoleMenusEN): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxRoleMenus_SortFunDefa2Fld(a: clsQxRoleMenusEN, b: clsQxRoleMenusEN): number {
  if (a.roleId == b.roleId) return a.qxPrjId.localeCompare(b.qxPrjId);
  else return a.roleId.localeCompare(b.roleId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxRoleMenus_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxRoleMenusEN.con_mId:
        return (a: clsQxRoleMenusEN, b: clsQxRoleMenusEN) => {
          return a.mId - b.mId;
        };
      case clsQxRoleMenusEN.con_RoleId:
        return (a: clsQxRoleMenusEN, b: clsQxRoleMenusEN) => {
          return a.roleId.localeCompare(b.roleId);
        };
      case clsQxRoleMenusEN.con_QxPrjId:
        return (a: clsQxRoleMenusEN, b: clsQxRoleMenusEN) => {
          return a.qxPrjId.localeCompare(b.qxPrjId);
        };
      case clsQxRoleMenusEN.con_MenuId:
        return (a: clsQxRoleMenusEN, b: clsQxRoleMenusEN) => {
          return a.menuId.localeCompare(b.menuId);
        };
      case clsQxRoleMenusEN.con_IsDisp:
        return (a: clsQxRoleMenusEN) => {
          if (a.isDisp == true) return 1;
          else return -1;
        };
      case clsQxRoleMenusEN.con_UpdDate:
        return (a: clsQxRoleMenusEN, b: clsQxRoleMenusEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clsQxRoleMenusEN.con_UpdUserId:
        return (a: clsQxRoleMenusEN, b: clsQxRoleMenusEN) => {
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsQxRoleMenusEN.con_Memo:
        return (a: clsQxRoleMenusEN, b: clsQxRoleMenusEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxRoleMenus]中不存在！(in ${qxRoleMenus_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsQxRoleMenusEN.con_mId:
        return (a: clsQxRoleMenusEN, b: clsQxRoleMenusEN) => {
          return b.mId - a.mId;
        };
      case clsQxRoleMenusEN.con_RoleId:
        return (a: clsQxRoleMenusEN, b: clsQxRoleMenusEN) => {
          return b.roleId.localeCompare(a.roleId);
        };
      case clsQxRoleMenusEN.con_QxPrjId:
        return (a: clsQxRoleMenusEN, b: clsQxRoleMenusEN) => {
          return b.qxPrjId.localeCompare(a.qxPrjId);
        };
      case clsQxRoleMenusEN.con_MenuId:
        return (a: clsQxRoleMenusEN, b: clsQxRoleMenusEN) => {
          return b.menuId.localeCompare(a.menuId);
        };
      case clsQxRoleMenusEN.con_IsDisp:
        return (b: clsQxRoleMenusEN) => {
          if (b.isDisp == true) return 1;
          else return -1;
        };
      case clsQxRoleMenusEN.con_UpdDate:
        return (a: clsQxRoleMenusEN, b: clsQxRoleMenusEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clsQxRoleMenusEN.con_UpdUserId:
        return (a: clsQxRoleMenusEN, b: clsQxRoleMenusEN) => {
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsQxRoleMenusEN.con_Memo:
        return (a: clsQxRoleMenusEN, b: clsQxRoleMenusEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[QxRoleMenus]中不存在！(in ${qxRoleMenus_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function QxRoleMenus_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsQxRoleMenusEN.con_mId:
      return (obj: clsQxRoleMenusEN) => {
        return obj.mId === value;
      };
    case clsQxRoleMenusEN.con_RoleId:
      return (obj: clsQxRoleMenusEN) => {
        return obj.roleId === value;
      };
    case clsQxRoleMenusEN.con_QxPrjId:
      return (obj: clsQxRoleMenusEN) => {
        return obj.qxPrjId === value;
      };
    case clsQxRoleMenusEN.con_MenuId:
      return (obj: clsQxRoleMenusEN) => {
        return obj.menuId === value;
      };
    case clsQxRoleMenusEN.con_IsDisp:
      return (obj: clsQxRoleMenusEN) => {
        return obj.isDisp === value;
      };
    case clsQxRoleMenusEN.con_UpdDate:
      return (obj: clsQxRoleMenusEN) => {
        return obj.updDate === value;
      };
    case clsQxRoleMenusEN.con_UpdUserId:
      return (obj: clsQxRoleMenusEN) => {
        return obj.updUserId === value;
      };
    case clsQxRoleMenusEN.con_Memo:
      return (obj: clsQxRoleMenusEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[QxRoleMenus]中不存在！(in ${qxRoleMenus_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function QxRoleMenus_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsQxRoleMenusEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrQxRoleMenus = await QxRoleMenus_GetObjLstCache();
  if (arrQxRoleMenus == null) return [];
  let arrQxRoleMenusSel = arrQxRoleMenus;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrQxRoleMenusSel.length == 0) return [];
  return arrQxRoleMenusSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxRoleMenus_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
export async function QxRoleMenus_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
export async function QxRoleMenus_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsQxRoleMenusEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

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
      const objQxRoleMenus = QxRoleMenus_GetObjFromJsonObj(returnObj);
      return objQxRoleMenus;
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxRoleMenus_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQxRoleMenusEN._CurrTabName;
  if (IsNullOrEmpty(clsQxRoleMenusEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxRoleMenusEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrQxRoleMenusExObjLstCache: Array<clsQxRoleMenusEN> = CacheHelper.Get(strKey);
    const arrQxRoleMenusObjLstT = QxRoleMenus_GetObjLstByJSONObjLst(arrQxRoleMenusExObjLstCache);
    return arrQxRoleMenusObjLstT;
  }
  try {
    const arrQxRoleMenusExObjLst = await QxRoleMenus_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrQxRoleMenusExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrQxRoleMenusExObjLst.length,
    );
    console.log(strInfo);
    return arrQxRoleMenusExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxRoleMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxRoleMenus_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQxRoleMenusEN._CurrTabName;
  if (IsNullOrEmpty(clsQxRoleMenusEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxRoleMenusEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQxRoleMenusExObjLstCache: Array<clsQxRoleMenusEN> = JSON.parse(strTempObjLst);
    const arrQxRoleMenusObjLstT = QxRoleMenus_GetObjLstByJSONObjLst(arrQxRoleMenusExObjLstCache);
    return arrQxRoleMenusObjLstT;
  }
  try {
    const arrQxRoleMenusExObjLst = await QxRoleMenus_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrQxRoleMenusExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrQxRoleMenusExObjLst.length,
    );
    console.log(strInfo);
    return arrQxRoleMenusExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxRoleMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.如果本地不存在就返回null，不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxRoleMenus_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsQxRoleMenusEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrQxRoleMenusObjLstCache: Array<clsQxRoleMenusEN> = JSON.parse(strTempObjLst);
    return arrQxRoleMenusObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function QxRoleMenus_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsQxRoleMenusEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

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
          qxRoleMenus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxRoleMenus_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
 * 获取本地sessionStorage缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxRoleMenus_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsQxRoleMenusEN._CurrTabName;
  if (IsNullOrEmpty(clsQxRoleMenusEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsQxRoleMenusEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQxRoleMenusExObjLstCache: Array<clsQxRoleMenusEN> = JSON.parse(strTempObjLst);
    const arrQxRoleMenusObjLstT = QxRoleMenus_GetObjLstByJSONObjLst(arrQxRoleMenusExObjLstCache);
    return arrQxRoleMenusObjLstT;
  }
  try {
    const arrQxRoleMenusExObjLst = await QxRoleMenus_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrQxRoleMenusExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrQxRoleMenusExObjLst.length,
    );
    console.log(strInfo);
    return arrQxRoleMenusExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      qxRoleMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxRoleMenus_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsQxRoleMenusEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrQxRoleMenusObjLstCache: Array<clsQxRoleMenusEN> = JSON.parse(strTempObjLst);
    return arrQxRoleMenusObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxRoleMenus_GetObjLstCache(): Promise<Array<clsQxRoleMenusEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrQxRoleMenusObjLstCache;
  switch (clsQxRoleMenusEN.CacheModeId) {
    case '04': //sessionStorage
      arrQxRoleMenusObjLstCache = await QxRoleMenus_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrQxRoleMenusObjLstCache = await QxRoleMenus_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrQxRoleMenusObjLstCache = await QxRoleMenus_GetObjLstClientCache();
      break;
    default:
      arrQxRoleMenusObjLstCache = await QxRoleMenus_GetObjLstClientCache();
      break;
  }
  return arrQxRoleMenusObjLstCache;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function QxRoleMenus_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrQxRoleMenusObjLstCache;
  switch (clsQxRoleMenusEN.CacheModeId) {
    case '04': //sessionStorage
      arrQxRoleMenusObjLstCache = await QxRoleMenus_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrQxRoleMenusObjLstCache = await QxRoleMenus_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrQxRoleMenusObjLstCache = null;
      break;
    default:
      arrQxRoleMenusObjLstCache = null;
      break;
  }
  return arrQxRoleMenusObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function QxRoleMenus_GetSubObjLstCache(objQxRoleMenusCond: clsQxRoleMenusEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrQxRoleMenusObjLstCache = await QxRoleMenus_GetObjLstCache();
  let arrQxRoleMenusSel = arrQxRoleMenusObjLstCache;
  if (objQxRoleMenusCond.sfFldComparisonOp == null || objQxRoleMenusCond.sfFldComparisonOp == '')
    return arrQxRoleMenusSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxRoleMenusCond.sfFldComparisonOp,
  );
  //console.log("clsQxRoleMenusWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxRoleMenusCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxRoleMenusCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrQxRoleMenusSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQxRoleMenusCond),
      qxRoleMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxRoleMenusEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function QxRoleMenus_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsQxRoleMenusEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

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
          qxRoleMenus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxRoleMenus_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
export async function QxRoleMenus_GetObjLstBymIdLstCache(arrmIdLst: Array<number>) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrQxRoleMenusObjLstCache = await QxRoleMenus_GetObjLstCache();
    const arrQxRoleMenusSel = arrQxRoleMenusObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrQxRoleMenusSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      qxRoleMenus_ConstructorName,
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
export async function QxRoleMenus_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsQxRoleMenusEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

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
          qxRoleMenus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxRoleMenus_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
 * 根据范围条件获取相应的记录对象列表，获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function QxRoleMenus_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsQxRoleMenusEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

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
          qxRoleMenus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxRoleMenus_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxRoleMenus_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsQxRoleMenusEN>();
  const arrQxRoleMenusObjLstCache = await QxRoleMenus_GetObjLstCache();
  if (arrQxRoleMenusObjLstCache.length == 0) return arrQxRoleMenusObjLstCache;
  let arrQxRoleMenusSel = arrQxRoleMenusObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objQxRoleMenusCond = new clsQxRoleMenusEN();
  ObjectAssign(objQxRoleMenusCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsQxRoleMenusWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxRoleMenusCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrQxRoleMenusSel.length == 0) return arrQxRoleMenusSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxRoleMenusSel = arrQxRoleMenusSel.sort(QxRoleMenus_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrQxRoleMenusSel = arrQxRoleMenusSel.sort(objPagerPara.sortFun);
    }
    arrQxRoleMenusSel = arrQxRoleMenusSel.slice(intStart, intEnd);
    return arrQxRoleMenusSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxRoleMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxRoleMenusEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表，只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function QxRoleMenus_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxRoleMenusEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsQxRoleMenusEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

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
          qxRoleMenus_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = QxRoleMenus_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
 * 调用WebApi来删除记录，根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export async function QxRoleMenus_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);
  strUrl = Format('{0}/?Id={1}', strUrl, lngmId);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
export async function QxRoleMenus_DelQxRoleMenussAsync(arrmId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelQxRoleMenussAsync';
  const strAction = 'DelQxRoleMenuss';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
export async function QxRoleMenus_DelQxRoleMenussByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelQxRoleMenussByCondAsync';
  const strAction = 'DelQxRoleMenussByCond';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
 * 调用WebApi来添加记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objQxRoleMenusEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function QxRoleMenus_AddNewRecordAsync(
  objQxRoleMenusEN: clsQxRoleMenusEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objQxRoleMenusEN);
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxRoleMenusEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型，不可以最大关键字的方式添加记录。*/

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxRoleMenusEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function QxRoleMenus_AddNewRecordWithReturnKeyAsync(
  objQxRoleMenusEN: clsQxRoleMenusEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxRoleMenusEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
 * 调用WebApi来修改记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objQxRoleMenusEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function QxRoleMenus_UpdateRecordAsync(
  objQxRoleMenusEN: clsQxRoleMenusEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objQxRoleMenusEN.sfUpdFldSetStr === undefined ||
    objQxRoleMenusEN.sfUpdFldSetStr === null ||
    objQxRoleMenusEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空，不能修改!', objQxRoleMenusEN.mId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxRoleMenusEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
 * @param objQxRoleMenusEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function QxRoleMenus_UpdateWithConditionAsync(
  objQxRoleMenusEN: clsQxRoleMenusEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objQxRoleMenusEN.sfUpdFldSetStr === undefined ||
    objQxRoleMenusEN.sfUpdFldSetStr === null ||
    objQxRoleMenusEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空，不能修改!', objQxRoleMenusEN.mId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);
  objQxRoleMenusEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objQxRoleMenusEN, config);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
export async function QxRoleMenus_IsExistRecordCache(objQxRoleMenusCond: clsQxRoleMenusEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrQxRoleMenusObjLstCache = await QxRoleMenus_GetObjLstCache();
  if (arrQxRoleMenusObjLstCache == null) return false;
  let arrQxRoleMenusSel = arrQxRoleMenusObjLstCache;
  if (objQxRoleMenusCond.sfFldComparisonOp == null || objQxRoleMenusCond.sfFldComparisonOp == '')
    return arrQxRoleMenusSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxRoleMenusCond.sfFldComparisonOp,
  );
  //console.log("clsQxRoleMenusWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxRoleMenusCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxRoleMenusCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrQxRoleMenusSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objQxRoleMenusCond),
      qxRoleMenus_ConstructorName,
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
export async function QxRoleMenus_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
export async function QxRoleMenus_IsExistCache(lngmId: number) {
  const strThisFuncName = 'IsExistCache';
  const arrQxRoleMenusObjLstCache = await QxRoleMenus_GetObjLstCache();
  if (arrQxRoleMenusObjLstCache == null) return false;
  try {
    const arrQxRoleMenusSel = arrQxRoleMenusObjLstCache.filter((x) => x.mId == lngmId);
    if (arrQxRoleMenusSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      qxRoleMenus_ConstructorName,
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
export async function QxRoleMenus_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
export async function QxRoleMenus_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
 * @param objQxRoleMenusCond:条件对象
 * @returns 对象列表记录数
 */
export async function QxRoleMenus_GetRecCountByCondCache(objQxRoleMenusCond: clsQxRoleMenusEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrQxRoleMenusObjLstCache = await QxRoleMenus_GetObjLstCache();
  if (arrQxRoleMenusObjLstCache == null) return 0;
  let arrQxRoleMenusSel = arrQxRoleMenusObjLstCache;
  if (objQxRoleMenusCond.sfFldComparisonOp == null || objQxRoleMenusCond.sfFldComparisonOp == '')
    return arrQxRoleMenusSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objQxRoleMenusCond.sfFldComparisonOp,
  );
  //console.log("clsQxRoleMenusWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objQxRoleMenusCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxRoleMenusCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrQxRoleMenusSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objQxRoleMenusCond),
      qxRoleMenus_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增，不需要生成获取最大关键字函数！*/
/*该表的关键字类型不是字符型带前缀自增，不需要生成获取最大关键字函数！*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function QxRoleMenus_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(qxRoleMenus_Controller, strAction);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenus_ConstructorName,
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
export function QxRoleMenus_GetWebApiUrl(strController: string, strAction: string): string {
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
export function QxRoleMenus_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功！');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsQxRoleMenusEN._CurrTabName;
  switch (clsQxRoleMenusEN.CacheModeId) {
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
export function QxRoleMenus_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsQxRoleMenusEN._CurrTabName;
    switch (clsQxRoleMenusEN.CacheModeId) {
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
    const strMsg = Format('刷新缓存成功！');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}
/* 该表的下拉框功能没有设置，不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QxRoleMenus_CheckPropertyNew(pobjQxRoleMenusEN: clsQxRoleMenusEN) {
  //检查字段非空， 即数据表要求非常非空的字段，不能为空！
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.roleId) === true ||
    pobjQxRoleMenusEN.roleId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000058)字段[角色Id]不能为空(In 角色菜单)!(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.qxPrjId) === true ||
    pobjQxRoleMenusEN.qxPrjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000058)字段[项目Id]不能为空(In 角色菜单)!(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.menuId) === true ||
    pobjQxRoleMenusEN.menuId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000058)字段[菜单Id]不能为空(In 角色菜单)!(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxRoleMenusEN.updUserId) === true) {
    throw new Error(
      '(errid:Watl000058)字段[修改用户Id]不能为空(In 角色菜单)!(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (IsNullOrEmpty(pobjQxRoleMenusEN.roleId) == false && GetStrLen(pobjQxRoleMenusEN.roleId) > 8) {
    throw new Error(
      '(errid:Watl000059)字段[角色Id(roleId)]的长度不能超过8(In 角色菜单(QxRoleMenus))!值:$(pobjQxRoleMenusEN.roleId)(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.qxPrjId) == false &&
    GetStrLen(pobjQxRoleMenusEN.qxPrjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000059)字段[项目Id(qxPrjId)]的长度不能超过4(In 角色菜单(QxRoleMenus))!值:$(pobjQxRoleMenusEN.qxPrjId)(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxRoleMenusEN.menuId) == false && GetStrLen(pobjQxRoleMenusEN.menuId) > 8) {
    throw new Error(
      '(errid:Watl000059)字段[菜单Id(menuId)]的长度不能超过8(In 角色菜单(QxRoleMenus))!值:$(pobjQxRoleMenusEN.menuId)(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.updDate) == false &&
    GetStrLen(pobjQxRoleMenusEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[修改日期(updDate)]的长度不能超过20(In 角色菜单(QxRoleMenus))!值:$(pobjQxRoleMenusEN.updDate)(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.updUserId) == false &&
    GetStrLen(pobjQxRoleMenusEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[修改用户Id(updUserId)]的长度不能超过20(In 角色菜单(QxRoleMenus))!值:$(pobjQxRoleMenusEN.updUserId)(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjQxRoleMenusEN.memo) == false && GetStrLen(pobjQxRoleMenusEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000059)字段[备注(memo)]的长度不能超过1000(In 角色菜单(QxRoleMenus))!值:$(pobjQxRoleMenusEN.memo)(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjQxRoleMenusEN.mId &&
    undefined !== pobjQxRoleMenusEN.mId &&
    tzDataType.isNumber(pobjQxRoleMenusEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[流水号(mId)]的值:[$(pobjQxRoleMenusEN.mId)], 非法，应该为数值型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.roleId) == false &&
    undefined !== pobjQxRoleMenusEN.roleId &&
    tzDataType.isString(pobjQxRoleMenusEN.roleId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[角色Id(roleId)]的值:[$(pobjQxRoleMenusEN.roleId)], 非法，应该为字符型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.qxPrjId) == false &&
    undefined !== pobjQxRoleMenusEN.qxPrjId &&
    tzDataType.isString(pobjQxRoleMenusEN.qxPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[项目Id(qxPrjId)]的值:[$(pobjQxRoleMenusEN.qxPrjId)], 非法，应该为字符型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.menuId) == false &&
    undefined !== pobjQxRoleMenusEN.menuId &&
    tzDataType.isString(pobjQxRoleMenusEN.menuId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[菜单Id(menuId)]的值:[$(pobjQxRoleMenusEN.menuId)], 非法，应该为字符型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjQxRoleMenusEN.isDisp &&
    undefined !== pobjQxRoleMenusEN.isDisp &&
    tzDataType.isBoolean(pobjQxRoleMenusEN.isDisp) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[是否显示(isDisp)]的值:[$(pobjQxRoleMenusEN.isDisp)], 非法，应该为布尔型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.updDate) == false &&
    undefined !== pobjQxRoleMenusEN.updDate &&
    tzDataType.isString(pobjQxRoleMenusEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[修改日期(updDate)]的值:[$(pobjQxRoleMenusEN.updDate)], 非法，应该为字符型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.updUserId) == false &&
    undefined !== pobjQxRoleMenusEN.updUserId &&
    tzDataType.isString(pobjQxRoleMenusEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[修改用户Id(updUserId)]的值:[$(pobjQxRoleMenusEN.updUserId)], 非法，应该为字符型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.memo) == false &&
    undefined !== pobjQxRoleMenusEN.memo &&
    tzDataType.isString(pobjQxRoleMenusEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[备注(memo)]的值:[$(pobjQxRoleMenusEN.memo)], 非法，应该为字符型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckPropertyNew)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.roleId) == false &&
    GetStrLen(pobjQxRoleMenusEN.roleId) != 8
  ) {
    throw '(errid:Watl000061)字段[角色Id]作为外键字段,长度应该为8(In 角色菜单)!(clsQxRoleMenusBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.qxPrjId) == false &&
    GetStrLen(pobjQxRoleMenusEN.qxPrjId) != 4
  ) {
    throw '(errid:Watl000061)字段[项目Id]作为外键字段,长度应该为4(In 角色菜单)!(clsQxRoleMenusBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.menuId) == false &&
    GetStrLen(pobjQxRoleMenusEN.menuId) != 8
  ) {
    throw '(errid:Watl000061)字段[菜单Id]作为外键字段,长度应该为8(In 角色菜单)!(clsQxRoleMenusBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了，后面不需要再检查，即非法！
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function QxRoleMenus_CheckProperty4Update(pobjQxRoleMenusEN: clsQxRoleMenusEN) {
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (IsNullOrEmpty(pobjQxRoleMenusEN.roleId) == false && GetStrLen(pobjQxRoleMenusEN.roleId) > 8) {
    throw new Error(
      '(errid:Watl000062)字段[角色Id(roleId)]的长度不能超过8(In 角色菜单(QxRoleMenus))!值:$(pobjQxRoleMenusEN.roleId)(clsQxRoleMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.qxPrjId) == false &&
    GetStrLen(pobjQxRoleMenusEN.qxPrjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000062)字段[项目Id(qxPrjId)]的长度不能超过4(In 角色菜单(QxRoleMenus))!值:$(pobjQxRoleMenusEN.qxPrjId)(clsQxRoleMenusBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxRoleMenusEN.menuId) == false && GetStrLen(pobjQxRoleMenusEN.menuId) > 8) {
    throw new Error(
      '(errid:Watl000062)字段[菜单Id(menuId)]的长度不能超过8(In 角色菜单(QxRoleMenus))!值:$(pobjQxRoleMenusEN.menuId)(clsQxRoleMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.updDate) == false &&
    GetStrLen(pobjQxRoleMenusEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[修改日期(updDate)]的长度不能超过20(In 角色菜单(QxRoleMenus))!值:$(pobjQxRoleMenusEN.updDate)(clsQxRoleMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.updUserId) == false &&
    GetStrLen(pobjQxRoleMenusEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[修改用户Id(updUserId)]的长度不能超过20(In 角色菜单(QxRoleMenus))!值:$(pobjQxRoleMenusEN.updUserId)(clsQxRoleMenusBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjQxRoleMenusEN.memo) == false && GetStrLen(pobjQxRoleMenusEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000062)字段[备注(memo)]的长度不能超过1000(In 角色菜单(QxRoleMenus))!值:$(pobjQxRoleMenusEN.memo)(clsQxRoleMenusBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjQxRoleMenusEN.mId &&
    undefined !== pobjQxRoleMenusEN.mId &&
    tzDataType.isNumber(pobjQxRoleMenusEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[流水号(mId)]的值:[$(pobjQxRoleMenusEN.mId)], 非法，应该为数值型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.roleId) == false &&
    undefined !== pobjQxRoleMenusEN.roleId &&
    tzDataType.isString(pobjQxRoleMenusEN.roleId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[角色Id(roleId)]的值:[$(pobjQxRoleMenusEN.roleId)], 非法，应该为字符型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.qxPrjId) == false &&
    undefined !== pobjQxRoleMenusEN.qxPrjId &&
    tzDataType.isString(pobjQxRoleMenusEN.qxPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[项目Id(qxPrjId)]的值:[$(pobjQxRoleMenusEN.qxPrjId)], 非法，应该为字符型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.menuId) == false &&
    undefined !== pobjQxRoleMenusEN.menuId &&
    tzDataType.isString(pobjQxRoleMenusEN.menuId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[菜单Id(menuId)]的值:[$(pobjQxRoleMenusEN.menuId)], 非法，应该为字符型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjQxRoleMenusEN.isDisp &&
    undefined !== pobjQxRoleMenusEN.isDisp &&
    tzDataType.isBoolean(pobjQxRoleMenusEN.isDisp) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[是否显示(isDisp)]的值:[$(pobjQxRoleMenusEN.isDisp)], 非法，应该为布尔型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.updDate) == false &&
    undefined !== pobjQxRoleMenusEN.updDate &&
    tzDataType.isString(pobjQxRoleMenusEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[修改日期(updDate)]的值:[$(pobjQxRoleMenusEN.updDate)], 非法，应该为字符型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.updUserId) == false &&
    undefined !== pobjQxRoleMenusEN.updUserId &&
    tzDataType.isString(pobjQxRoleMenusEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[修改用户Id(updUserId)]的值:[$(pobjQxRoleMenusEN.updUserId)], 非法，应该为字符型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.memo) == false &&
    undefined !== pobjQxRoleMenusEN.memo &&
    tzDataType.isString(pobjQxRoleMenusEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[备注(memo)]的值:[$(pobjQxRoleMenusEN.memo)], 非法，应该为字符型(In 角色菜单(QxRoleMenus))!(clsQxRoleMenusBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空！
  if (
    null === pobjQxRoleMenusEN.mId ||
    (pobjQxRoleMenusEN.mId != null && pobjQxRoleMenusEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[流水号]不能为空(In 角色菜单)!(clsQxRoleMenusBL:CheckProperty4Update)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.roleId) == false &&
    GetStrLen(pobjQxRoleMenusEN.roleId) != 8
  ) {
    throw '(errid:Watl000065)字段[角色Id]作为外键字段,长度应该为8(In 角色菜单)!(clsQxRoleMenusBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.qxPrjId) == false &&
    GetStrLen(pobjQxRoleMenusEN.qxPrjId) != 4
  ) {
    throw '(errid:Watl000065)字段[项目Id]作为外键字段,长度应该为4(In 角色菜单)!(clsQxRoleMenusBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjQxRoleMenusEN.menuId) == false &&
    GetStrLen(pobjQxRoleMenusEN.menuId) != 8
  ) {
    throw '(errid:Watl000065)字段[菜单Id]作为外键字段,长度应该为8(In 角色菜单)!(clsQxRoleMenusBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QxRoleMenus_GetJSONStrByObj(pobjQxRoleMenusEN: clsQxRoleMenusEN): string {
  pobjQxRoleMenusEN.sfUpdFldSetStr = pobjQxRoleMenusEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjQxRoleMenusEN);
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
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function QxRoleMenus_GetObjLstByJSONStr(strJSON: string): Array<clsQxRoleMenusEN> {
  let arrQxRoleMenusObjLst = new Array<clsQxRoleMenusEN>();
  if (strJSON === '') {
    return arrQxRoleMenusObjLst;
  }
  try {
    arrQxRoleMenusObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrQxRoleMenusObjLst;
  }
  return arrQxRoleMenusObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxRoleMenusObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function QxRoleMenus_GetObjLstByJSONObjLst(
  arrQxRoleMenusObjLstS: Array<clsQxRoleMenusEN>,
): Array<clsQxRoleMenusEN> {
  const arrQxRoleMenusObjLst = new Array<clsQxRoleMenusEN>();
  for (const objInFor of arrQxRoleMenusObjLstS) {
    const obj1 = QxRoleMenus_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrQxRoleMenusObjLst.push(obj1);
  }
  return arrQxRoleMenusObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function QxRoleMenus_GetObjByJSONStr(strJSON: string): clsQxRoleMenusEN {
  let pobjQxRoleMenusEN = new clsQxRoleMenusEN();
  if (strJSON === '') {
    return pobjQxRoleMenusEN;
  }
  try {
    pobjQxRoleMenusEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjQxRoleMenusEN;
  }
  return pobjQxRoleMenusEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function QxRoleMenus_GetCombineCondition(objQxRoleMenusCond: clsQxRoleMenusEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRoleMenusCond.dicFldComparisonOp,
      clsQxRoleMenusEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objQxRoleMenusCond.dicFldComparisonOp[clsQxRoleMenusEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsQxRoleMenusEN.con_mId,
      objQxRoleMenusCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRoleMenusCond.dicFldComparisonOp,
      clsQxRoleMenusEN.con_RoleId,
    ) == true
  ) {
    const strComparisonOpRoleId: string =
      objQxRoleMenusCond.dicFldComparisonOp[clsQxRoleMenusEN.con_RoleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxRoleMenusEN.con_RoleId,
      objQxRoleMenusCond.roleId,
      strComparisonOpRoleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRoleMenusCond.dicFldComparisonOp,
      clsQxRoleMenusEN.con_QxPrjId,
    ) == true
  ) {
    const strComparisonOpQxPrjId: string =
      objQxRoleMenusCond.dicFldComparisonOp[clsQxRoleMenusEN.con_QxPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxRoleMenusEN.con_QxPrjId,
      objQxRoleMenusCond.qxPrjId,
      strComparisonOpQxPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRoleMenusCond.dicFldComparisonOp,
      clsQxRoleMenusEN.con_MenuId,
    ) == true
  ) {
    const strComparisonOpMenuId: string =
      objQxRoleMenusCond.dicFldComparisonOp[clsQxRoleMenusEN.con_MenuId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxRoleMenusEN.con_MenuId,
      objQxRoleMenusCond.menuId,
      strComparisonOpMenuId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRoleMenusCond.dicFldComparisonOp,
      clsQxRoleMenusEN.con_IsDisp,
    ) == true
  ) {
    if (objQxRoleMenusCond.isDisp == true) {
      strWhereCond += Format(" And {0} = '1'", clsQxRoleMenusEN.con_IsDisp);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsQxRoleMenusEN.con_IsDisp);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRoleMenusCond.dicFldComparisonOp,
      clsQxRoleMenusEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objQxRoleMenusCond.dicFldComparisonOp[clsQxRoleMenusEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxRoleMenusEN.con_UpdDate,
      objQxRoleMenusCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRoleMenusCond.dicFldComparisonOp,
      clsQxRoleMenusEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objQxRoleMenusCond.dicFldComparisonOp[clsQxRoleMenusEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxRoleMenusEN.con_UpdUserId,
      objQxRoleMenusCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objQxRoleMenusCond.dicFldComparisonOp,
      clsQxRoleMenusEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objQxRoleMenusCond.dicFldComparisonOp[clsQxRoleMenusEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsQxRoleMenusEN.con_Memo,
      objQxRoleMenusCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--QxRoleMenus(角色菜单),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strRoleId: 角色Id(要求唯一的字段)
 * @param strMenuId: 菜单Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function QxRoleMenus_GetUniCondStr(objQxRoleMenusEN: clsQxRoleMenusEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RoleId = '{0}'", objQxRoleMenusEN.roleId);
  strWhereCond += Format(" and MenuId = '{0}'", objQxRoleMenusEN.menuId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--QxRoleMenus(角色菜单),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strRoleId: 角色Id(要求唯一的字段)
 * @param strMenuId: 菜单Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function QxRoleMenus_GetUniCondStr4Update(objQxRoleMenusEN: clsQxRoleMenusEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objQxRoleMenusEN.mId);
  strWhereCond += Format(" and RoleId = '{0}'", objQxRoleMenusEN.roleId);
  strWhereCond += Format(" and MenuId = '{0}'", objQxRoleMenusEN.menuId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxRoleMenusENS:源对象
 * @param objQxRoleMenusENT:目标对象
 */
export function QxRoleMenus_GetObjFromJsonObj(
  objQxRoleMenusENS: clsQxRoleMenusEN,
): clsQxRoleMenusEN {
  const objQxRoleMenusENT: clsQxRoleMenusEN = new clsQxRoleMenusEN();
  ObjectAssign(objQxRoleMenusENT, objQxRoleMenusENS);
  return objQxRoleMenusENT;
}
