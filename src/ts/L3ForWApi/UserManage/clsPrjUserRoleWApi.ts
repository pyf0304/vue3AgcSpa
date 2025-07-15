/**
 * 类名:clsPrjUserRoleWApi
 * 表名:PrjUserRole(00050079)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:41:49
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程用户角色(PrjUserRole)
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
import { clsPrjUserRoleEN } from '@/ts/L0Entity/UserManage/clsPrjUserRoleEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const prjUserRole_Controller = 'PrjUserRoleApi';
export const prjUserRole_ConstructorName = 'prjUserRole';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRoleId:关键字
 * @returns 对象
 **/
export async function PrjUserRole_GetObjByRoleIdAsync(
  strRoleId: string,
): Promise<clsPrjUserRoleEN | null> {
  const strThisFuncName = 'GetObjByRoleIdAsync';

  if (IsNullOrEmpty(strRoleId) == true) {
    const strMsg = Format('参数:[strRoleId]不能为空!(In clsPrjUserRoleWApi.GetObjByRoleIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strRoleId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strRoleId]的长度:[{0}]不正确!(clsPrjUserRoleWApi.GetObjByRoleIdAsync)',
      strRoleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByRoleId';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRoleId,
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
      const objPrjUserRole = PrjUserRole_GetObjFromJsonObj(returnObj);
      return objPrjUserRole;
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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
 * @param strRoleId:所给的关键字
 * @returns 对象
 */
export async function PrjUserRole_GetObjByRoleIdCache(strRoleId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByRoleIdCache';

  if (IsNullOrEmpty(strRoleId) == true) {
    const strMsg = Format('参数:[strRoleId]不能为空!(In clsPrjUserRoleWApi.GetObjByRoleIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strRoleId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strRoleId]的长度:[{0}]不正确!(clsPrjUserRoleWApi.GetObjByRoleIdCache)',
      strRoleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjUserRoleObjLstCache = await PrjUserRole_GetObjLstCache();
  try {
    const arrPrjUserRoleSel = arrPrjUserRoleObjLstCache.filter((x) => x.roleId == strRoleId);
    let objPrjUserRole: clsPrjUserRoleEN;
    if (arrPrjUserRoleSel.length > 0) {
      objPrjUserRole = arrPrjUserRoleSel[0];
      return objPrjUserRole;
    } else {
      if (bolTryAsyncOnce == true) {
        const objPrjUserRoleConst = await PrjUserRole_GetObjByRoleIdAsync(strRoleId);
        if (objPrjUserRoleConst != null) {
          PrjUserRole_ReFreshThisCache();
          return objPrjUserRoleConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRoleId,
      prjUserRole_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strRoleId:所给的关键字
 * @returns 对象
 */
export async function PrjUserRole_GetObjByRoleIdlocalStorage(strRoleId: string) {
  const strThisFuncName = 'GetObjByRoleIdlocalStorage';

  if (IsNullOrEmpty(strRoleId) == true) {
    const strMsg = Format(
      '参数:[strRoleId]不能为空!(In clsPrjUserRoleWApi.GetObjByRoleIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRoleId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strRoleId]的长度:[{0}]不正确!(clsPrjUserRoleWApi.GetObjByRoleIdlocalStorage)',
      strRoleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsPrjUserRoleEN._CurrTabName, strRoleId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objPrjUserRoleCache: clsPrjUserRoleEN = JSON.parse(strTempObj);
    return objPrjUserRoleCache;
  }
  try {
    const objPrjUserRole = await PrjUserRole_GetObjByRoleIdAsync(strRoleId);
    if (objPrjUserRole != null) {
      localStorage.setItem(strKey, JSON.stringify(objPrjUserRole));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objPrjUserRole;
    }
    return objPrjUserRole;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRoleId,
      prjUserRole_ConstructorName,
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
 * @param objPrjUserRole:所给的对象
 * @returns 对象
 */
export async function PrjUserRole_UpdateObjInLstCache(objPrjUserRole: clsPrjUserRoleEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrPrjUserRoleObjLstCache = await PrjUserRole_GetObjLstCache();
    const obj = arrPrjUserRoleObjLstCache.find(
      (x) => x.roleName == objPrjUserRole.roleName && x.prjId == objPrjUserRole.prjId,
    );
    if (obj != null) {
      objPrjUserRole.roleId = obj.roleId;
      ObjectAssign(obj, objPrjUserRole);
    } else {
      arrPrjUserRoleObjLstCache.push(objPrjUserRole);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      prjUserRole_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strRoleId:所给的关键字
 * @returns 对象
 */
export async function PrjUserRole_GetNameByRoleIdCache(strRoleId: string) {
  if (IsNullOrEmpty(strRoleId) == true) {
    const strMsg = Format('参数:[strRoleId]不能为空!(In clsPrjUserRoleWApi.GetNameByRoleIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strRoleId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strRoleId]的长度:[{0}]不正确!(clsPrjUserRoleWApi.GetNameByRoleIdCache)',
      strRoleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrPrjUserRoleObjLstCache = await PrjUserRole_GetObjLstCache();
  if (arrPrjUserRoleObjLstCache == null) return '';
  try {
    const arrPrjUserRoleSel = arrPrjUserRoleObjLstCache.filter((x) => x.roleId == strRoleId);
    let objPrjUserRole: clsPrjUserRoleEN;
    if (arrPrjUserRoleSel.length > 0) {
      objPrjUserRole = arrPrjUserRoleSel[0];
      return objPrjUserRole.roleName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strRoleId,
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
export async function PrjUserRole_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsPrjUserRoleEN.con_RoleId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsPrjUserRoleEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsPrjUserRoleEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strRoleId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objPrjUserRole = await PrjUserRole_GetObjByRoleIdCache(strRoleId);
  if (objPrjUserRole == null) return '';
  if (objPrjUserRole.GetFldValue(strOutFldName) == null) return '';
  return objPrjUserRole.GetFldValue(strOutFldName).toString();
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
export function PrjUserRole_SortFunDefa(a: clsPrjUserRoleEN, b: clsPrjUserRoleEN): number {
  return a.roleId.localeCompare(b.roleId);
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
export function PrjUserRole_SortFunDefa2Fld(a: clsPrjUserRoleEN, b: clsPrjUserRoleEN): number {
  if (a.roleName == b.roleName) return a.prjId.localeCompare(b.prjId);
  else return a.roleName.localeCompare(b.roleName);
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
export function PrjUserRole_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsPrjUserRoleEN.con_RoleId:
        return (a: clsPrjUserRoleEN, b: clsPrjUserRoleEN) => {
          return a.roleId.localeCompare(b.roleId);
        };
      case clsPrjUserRoleEN.con_RoleName:
        return (a: clsPrjUserRoleEN, b: clsPrjUserRoleEN) => {
          return a.roleName.localeCompare(b.roleName);
        };
      case clsPrjUserRoleEN.con_PrjId:
        return (a: clsPrjUserRoleEN, b: clsPrjUserRoleEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsPrjUserRoleEN.con_Memo:
        return (a: clsPrjUserRoleEN, b: clsPrjUserRoleEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjUserRole]中不存在!(in ${prjUserRole_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsPrjUserRoleEN.con_RoleId:
        return (a: clsPrjUserRoleEN, b: clsPrjUserRoleEN) => {
          return b.roleId.localeCompare(a.roleId);
        };
      case clsPrjUserRoleEN.con_RoleName:
        return (a: clsPrjUserRoleEN, b: clsPrjUserRoleEN) => {
          return b.roleName.localeCompare(a.roleName);
        };
      case clsPrjUserRoleEN.con_PrjId:
        return (a: clsPrjUserRoleEN, b: clsPrjUserRoleEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsPrjUserRoleEN.con_Memo:
        return (a: clsPrjUserRoleEN, b: clsPrjUserRoleEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[PrjUserRole]中不存在!(in ${prjUserRole_ConstructorName}.${strThisFuncName})`;
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
export async function PrjUserRole_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsPrjUserRoleEN.con_RoleId:
      return (obj: clsPrjUserRoleEN) => {
        return obj.roleId === value;
      };
    case clsPrjUserRoleEN.con_RoleName:
      return (obj: clsPrjUserRoleEN) => {
        return obj.roleName === value;
      };
    case clsPrjUserRoleEN.con_PrjId:
      return (obj: clsPrjUserRoleEN) => {
        return obj.prjId === value;
      };
    case clsPrjUserRoleEN.con_Memo:
      return (obj: clsPrjUserRoleEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[PrjUserRole]中不存在!(in ${prjUserRole_ConstructorName}.${strThisFuncName})`;
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
export async function PrjUserRole_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsPrjUserRoleEN.con_RoleId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrPrjUserRole = await PrjUserRole_GetObjLstCache();
  if (arrPrjUserRole == null) return [];
  let arrPrjUserRoleSel = arrPrjUserRole;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrPrjUserRoleSel.length == 0) return [];
  return arrPrjUserRoleSel.map((x) => x.roleId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjUserRole_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
export async function PrjUserRole_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
export async function PrjUserRole_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsPrjUserRoleEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

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
      const objPrjUserRole = PrjUserRole_GetObjFromJsonObj(returnObj);
      return objPrjUserRole;
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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
export async function PrjUserRole_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjUserRoleEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjUserRoleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjUserRoleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrPrjUserRoleExObjLstCache: Array<clsPrjUserRoleEN> = CacheHelper.Get(strKey);
    const arrPrjUserRoleObjLstT = PrjUserRole_GetObjLstByJSONObjLst(arrPrjUserRoleExObjLstCache);
    return arrPrjUserRoleObjLstT;
  }
  try {
    const arrPrjUserRoleExObjLst = await PrjUserRole_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrPrjUserRoleExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjUserRoleExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjUserRoleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjUserRole_ConstructorName,
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
export async function PrjUserRole_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjUserRoleEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjUserRoleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjUserRoleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjUserRoleExObjLstCache: Array<clsPrjUserRoleEN> = JSON.parse(strTempObjLst);
    const arrPrjUserRoleObjLstT = PrjUserRole_GetObjLstByJSONObjLst(arrPrjUserRoleExObjLstCache);
    return arrPrjUserRoleObjLstT;
  }
  try {
    const arrPrjUserRoleExObjLst = await PrjUserRole_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrPrjUserRoleExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjUserRoleExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjUserRoleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjUserRole_ConstructorName,
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
export async function PrjUserRole_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjUserRoleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrPrjUserRoleObjLstCache: Array<clsPrjUserRoleEN> = JSON.parse(strTempObjLst);
    return arrPrjUserRoleObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function PrjUserRole_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsPrjUserRoleEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

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
          prjUserRole_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjUserRole_GetObjLstByJSONObjLst(returnObjLst);
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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
export async function PrjUserRole_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsPrjUserRoleEN._CurrTabName;
  if (IsNullOrEmpty(clsPrjUserRoleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsPrjUserRoleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjUserRoleExObjLstCache: Array<clsPrjUserRoleEN> = JSON.parse(strTempObjLst);
    const arrPrjUserRoleObjLstT = PrjUserRole_GetObjLstByJSONObjLst(arrPrjUserRoleExObjLstCache);
    return arrPrjUserRoleObjLstT;
  }
  try {
    const arrPrjUserRoleExObjLst = await PrjUserRole_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrPrjUserRoleExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrPrjUserRoleExObjLst.length,
    );
    console.log(strInfo);
    return arrPrjUserRoleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      prjUserRole_ConstructorName,
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
export async function PrjUserRole_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsPrjUserRoleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrPrjUserRoleObjLstCache: Array<clsPrjUserRoleEN> = JSON.parse(strTempObjLst);
    return arrPrjUserRoleObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjUserRole_GetObjLstCache(): Promise<Array<clsPrjUserRoleEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrPrjUserRoleObjLstCache;
  switch (clsPrjUserRoleEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjUserRoleObjLstCache = await PrjUserRole_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrPrjUserRoleObjLstCache = await PrjUserRole_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrPrjUserRoleObjLstCache = await PrjUserRole_GetObjLstClientCache();
      break;
    default:
      arrPrjUserRoleObjLstCache = await PrjUserRole_GetObjLstClientCache();
      break;
  }
  return arrPrjUserRoleObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function PrjUserRole_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrPrjUserRoleObjLstCache;
  switch (clsPrjUserRoleEN.CacheModeId) {
    case '04': //sessionStorage
      arrPrjUserRoleObjLstCache = await PrjUserRole_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrPrjUserRoleObjLstCache = await PrjUserRole_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrPrjUserRoleObjLstCache = null;
      break;
    default:
      arrPrjUserRoleObjLstCache = null;
      break;
  }
  return arrPrjUserRoleObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrRoleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjUserRole_GetSubObjLstCache(objPrjUserRoleCond: clsPrjUserRoleEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrPrjUserRoleObjLstCache = await PrjUserRole_GetObjLstCache();
  let arrPrjUserRoleSel = arrPrjUserRoleObjLstCache;
  if (objPrjUserRoleCond.sfFldComparisonOp == null || objPrjUserRoleCond.sfFldComparisonOp == '')
    return arrPrjUserRoleSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPrjUserRoleCond.sfFldComparisonOp,
  );
  //console.log("clsPrjUserRoleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPrjUserRoleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjUserRoleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPrjUserRoleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjUserRoleCond),
      prjUserRole_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjUserRoleEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrRoleId:关键字列表
 * @returns 对象列表
 **/
export async function PrjUserRole_GetObjLstByRoleIdLstAsync(
  arrRoleId: Array<string>,
): Promise<Array<clsPrjUserRoleEN>> {
  const strThisFuncName = 'GetObjLstByRoleIdLstAsync';
  const strAction = 'GetObjLstByRoleIdLst';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRoleId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          prjUserRole_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjUserRole_GetObjLstByJSONObjLst(returnObjLst);
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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
 * @param arrstrRoleIdLst:关键字列表
 * @returns 对象列表
 */
export async function PrjUserRole_GetObjLstByRoleIdLstCache(arrRoleIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByRoleIdLstCache';
  try {
    const arrPrjUserRoleObjLstCache = await PrjUserRole_GetObjLstCache();
    const arrPrjUserRoleSel = arrPrjUserRoleObjLstCache.filter(
      (x) => arrRoleIdLst.indexOf(x.roleId) > -1,
    );
    return arrPrjUserRoleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrRoleIdLst.join(','),
      prjUserRole_ConstructorName,
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
export async function PrjUserRole_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsPrjUserRoleEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

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
          prjUserRole_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjUserRole_GetObjLstByJSONObjLst(returnObjLst);
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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
export async function PrjUserRole_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsPrjUserRoleEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

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
          prjUserRole_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjUserRole_GetObjLstByJSONObjLst(returnObjLst);
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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
export async function PrjUserRole_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjUserRoleEN>();
  const arrPrjUserRoleObjLstCache = await PrjUserRole_GetObjLstCache();
  if (arrPrjUserRoleObjLstCache.length == 0) return arrPrjUserRoleObjLstCache;
  let arrPrjUserRoleSel = arrPrjUserRoleObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objPrjUserRoleCond = new clsPrjUserRoleEN();
  ObjectAssign(objPrjUserRoleCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsPrjUserRoleWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjUserRoleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrjUserRoleSel.length == 0) return arrPrjUserRoleSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPrjUserRoleSel = arrPrjUserRoleSel.sort(PrjUserRole_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrPrjUserRoleSel = arrPrjUserRoleSel.sort(objPagerPara.sortFun);
    }
    arrPrjUserRoleSel = arrPrjUserRoleSel.slice(intStart, intEnd);
    return arrPrjUserRoleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      prjUserRole_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPrjUserRoleEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function PrjUserRole_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPrjUserRoleEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsPrjUserRoleEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

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
          prjUserRole_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = PrjUserRole_GetObjLstByJSONObjLst(returnObjLst);
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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
 * @param strRoleId:关键字
 * @returns 获取删除的结果
 **/
export async function PrjUserRole_DelRecordAsync(strRoleId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strRoleId);

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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
 * @param arrRoleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function PrjUserRole_DelPrjUserRolesAsync(arrRoleId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelPrjUserRolesAsync';
  const strAction = 'DelPrjUserRoles';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRoleId, config);
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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
export async function PrjUserRole_DelPrjUserRolesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelPrjUserRolesByCondAsync';
  const strAction = 'DelPrjUserRolesByCond';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
 * @param objPrjUserRoleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjUserRole_AddNewRecordAsync(
  objPrjUserRoleEN: clsPrjUserRoleEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objPrjUserRoleEN.roleId === null || objPrjUserRoleEN.roleId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objPrjUserRoleEN);
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjUserRoleEN, config);
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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
 * @param objPrjUserRoleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function PrjUserRole_AddNewRecordWithMaxIdAsync(
  objPrjUserRoleEN: clsPrjUserRoleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjUserRoleEN, config);
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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
 * @param objPrjUserRoleEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function PrjUserRole_AddNewRecordWithReturnKeyAsync(
  objPrjUserRoleEN: clsPrjUserRoleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjUserRoleEN, config);
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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
 * @param objPrjUserRoleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function PrjUserRole_UpdateRecordAsync(
  objPrjUserRoleEN: clsPrjUserRoleEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objPrjUserRoleEN.sfUpdFldSetStr === undefined ||
    objPrjUserRoleEN.sfUpdFldSetStr === null ||
    objPrjUserRoleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjUserRoleEN.roleId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjUserRoleEN, config);
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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
 * @param objPrjUserRoleEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function PrjUserRole_UpdateWithConditionAsync(
  objPrjUserRoleEN: clsPrjUserRoleEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objPrjUserRoleEN.sfUpdFldSetStr === undefined ||
    objPrjUserRoleEN.sfUpdFldSetStr === null ||
    objPrjUserRoleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objPrjUserRoleEN.roleId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);
  objPrjUserRoleEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPrjUserRoleEN, config);
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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
 * @param objstrRoleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function PrjUserRole_IsExistRecordCache(objPrjUserRoleCond: clsPrjUserRoleEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrPrjUserRoleObjLstCache = await PrjUserRole_GetObjLstCache();
  if (arrPrjUserRoleObjLstCache == null) return false;
  let arrPrjUserRoleSel = arrPrjUserRoleObjLstCache;
  if (objPrjUserRoleCond.sfFldComparisonOp == null || objPrjUserRoleCond.sfFldComparisonOp == '')
    return arrPrjUserRoleSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPrjUserRoleCond.sfFldComparisonOp,
  );
  //console.log("clsPrjUserRoleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPrjUserRoleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjUserRoleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrPrjUserRoleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objPrjUserRoleCond),
      prjUserRole_ConstructorName,
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
export async function PrjUserRole_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
 * @param strRoleId:所给的关键字
 * @returns 对象
 */
export async function PrjUserRole_IsExistCache(strRoleId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrPrjUserRoleObjLstCache = await PrjUserRole_GetObjLstCache();
  if (arrPrjUserRoleObjLstCache == null) return false;
  try {
    const arrPrjUserRoleSel = arrPrjUserRoleObjLstCache.filter((x) => x.roleId == strRoleId);
    if (arrPrjUserRoleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strRoleId,
      prjUserRole_ConstructorName,
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
 * @param strRoleId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function PrjUserRole_IsExistAsync(strRoleId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRoleId,
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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
export async function PrjUserRole_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
 * @param objPrjUserRoleCond:条件对象
 * @returns 对象列表记录数
 */
export async function PrjUserRole_GetRecCountByCondCache(objPrjUserRoleCond: clsPrjUserRoleEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrPrjUserRoleObjLstCache = await PrjUserRole_GetObjLstCache();
  if (arrPrjUserRoleObjLstCache == null) return 0;
  let arrPrjUserRoleSel = arrPrjUserRoleObjLstCache;
  if (objPrjUserRoleCond.sfFldComparisonOp == null || objPrjUserRoleCond.sfFldComparisonOp == '')
    return arrPrjUserRoleSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objPrjUserRoleCond.sfFldComparisonOp,
  );
  //console.log("clsPrjUserRoleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objPrjUserRoleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPrjUserRoleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrPrjUserRoleSel = arrPrjUserRoleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrPrjUserRoleSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objPrjUserRoleCond),
      prjUserRole_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefixAsync)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 **/
export async function PrjUserRole_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdByPrefixAsync';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function PrjUserRole_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(prjUserRole_Controller, strAction);

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
        prjUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        prjUserRole_ConstructorName,
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
export function PrjUserRole_GetWebApiUrl(strController: string, strAction: string): string {
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
export function PrjUserRole_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsPrjUserRoleEN._CurrTabName;
  switch (clsPrjUserRoleEN.CacheModeId) {
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
export function PrjUserRole_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsPrjUserRoleEN._CurrTabName;
    switch (clsPrjUserRoleEN.CacheModeId) {
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
export async function PrjUserRole_BindDdl_RoleIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_RoleIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_RoleIdInDivCache");
  const arrObjLstSel = await PrjUserRole_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsPrjUserRoleEN.con_RoleId,
    clsPrjUserRoleEN.con_RoleName,
    '工程用户角色',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjUserRole_CheckPropertyNew(pobjPrjUserRoleEN: clsPrjUserRoleEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjPrjUserRoleEN.roleName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[角色名称]不能为空(In 工程用户角色)!(clsPrjUserRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserRoleEN.prjId) === true ||
    pobjPrjUserRoleEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 工程用户角色)!(clsPrjUserRoleBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjPrjUserRoleEN.roleId) == false && GetStrLen(pobjPrjUserRoleEN.roleId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[角色ID(roleId)]的长度不能超过8(In 工程用户角色(PrjUserRole))!值:$(pobjPrjUserRoleEN.roleId)(clsPrjUserRoleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserRoleEN.roleName) == false &&
    GetStrLen(pobjPrjUserRoleEN.roleName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[角色名称(roleName)]的长度不能超过30(In 工程用户角色(PrjUserRole))!值:$(pobjPrjUserRoleEN.roleName)(clsPrjUserRoleBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjPrjUserRoleEN.prjId) == false && GetStrLen(pobjPrjUserRoleEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 工程用户角色(PrjUserRole))!值:$(pobjPrjUserRoleEN.prjId)(clsPrjUserRoleBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjPrjUserRoleEN.memo) == false && GetStrLen(pobjPrjUserRoleEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 工程用户角色(PrjUserRole))!值:$(pobjPrjUserRoleEN.memo)(clsPrjUserRoleBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjUserRoleEN.roleId) == false &&
    undefined !== pobjPrjUserRoleEN.roleId &&
    tzDataType.isString(pobjPrjUserRoleEN.roleId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[角色ID(roleId)]的值:[$(pobjPrjUserRoleEN.roleId)], 非法,应该为字符型(In 工程用户角色(PrjUserRole))!(clsPrjUserRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserRoleEN.roleName) == false &&
    undefined !== pobjPrjUserRoleEN.roleName &&
    tzDataType.isString(pobjPrjUserRoleEN.roleName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[角色名称(roleName)]的值:[$(pobjPrjUserRoleEN.roleName)], 非法,应该为字符型(In 工程用户角色(PrjUserRole))!(clsPrjUserRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserRoleEN.prjId) == false &&
    undefined !== pobjPrjUserRoleEN.prjId &&
    tzDataType.isString(pobjPrjUserRoleEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjPrjUserRoleEN.prjId)], 非法,应该为字符型(In 工程用户角色(PrjUserRole))!(clsPrjUserRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserRoleEN.memo) == false &&
    undefined !== pobjPrjUserRoleEN.memo &&
    tzDataType.isString(pobjPrjUserRoleEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjPrjUserRoleEN.memo)], 非法,应该为字符型(In 工程用户角色(PrjUserRole))!(clsPrjUserRoleBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function PrjUserRole_CheckProperty4Update(pobjPrjUserRoleEN: clsPrjUserRoleEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjPrjUserRoleEN.roleId) == false && GetStrLen(pobjPrjUserRoleEN.roleId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[角色ID(roleId)]的长度不能超过8(In 工程用户角色(PrjUserRole))!值:$(pobjPrjUserRoleEN.roleId)(clsPrjUserRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserRoleEN.roleName) == false &&
    GetStrLen(pobjPrjUserRoleEN.roleName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[角色名称(roleName)]的长度不能超过30(In 工程用户角色(PrjUserRole))!值:$(pobjPrjUserRoleEN.roleName)(clsPrjUserRoleBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjPrjUserRoleEN.prjId) == false && GetStrLen(pobjPrjUserRoleEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 工程用户角色(PrjUserRole))!值:$(pobjPrjUserRoleEN.prjId)(clsPrjUserRoleBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjPrjUserRoleEN.memo) == false && GetStrLen(pobjPrjUserRoleEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 工程用户角色(PrjUserRole))!值:$(pobjPrjUserRoleEN.memo)(clsPrjUserRoleBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjPrjUserRoleEN.roleId) == false &&
    undefined !== pobjPrjUserRoleEN.roleId &&
    tzDataType.isString(pobjPrjUserRoleEN.roleId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[角色ID(roleId)]的值:[$(pobjPrjUserRoleEN.roleId)], 非法,应该为字符型(In 工程用户角色(PrjUserRole))!(clsPrjUserRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserRoleEN.roleName) == false &&
    undefined !== pobjPrjUserRoleEN.roleName &&
    tzDataType.isString(pobjPrjUserRoleEN.roleName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[角色名称(roleName)]的值:[$(pobjPrjUserRoleEN.roleName)], 非法,应该为字符型(In 工程用户角色(PrjUserRole))!(clsPrjUserRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserRoleEN.prjId) == false &&
    undefined !== pobjPrjUserRoleEN.prjId &&
    tzDataType.isString(pobjPrjUserRoleEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjPrjUserRoleEN.prjId)], 非法,应该为字符型(In 工程用户角色(PrjUserRole))!(clsPrjUserRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjPrjUserRoleEN.memo) == false &&
    undefined !== pobjPrjUserRoleEN.memo &&
    tzDataType.isString(pobjPrjUserRoleEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjPrjUserRoleEN.memo)], 非法,应该为字符型(In 工程用户角色(PrjUserRole))!(clsPrjUserRoleBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjPrjUserRoleEN.roleId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[角色ID]不能为空(In 工程用户角色)!(clsPrjUserRoleBL:CheckProperty4Update)',
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
export function PrjUserRole_GetJSONStrByObj(pobjPrjUserRoleEN: clsPrjUserRoleEN): string {
  pobjPrjUserRoleEN.sfUpdFldSetStr = pobjPrjUserRoleEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjPrjUserRoleEN);
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
export function PrjUserRole_GetObjLstByJSONStr(strJSON: string): Array<clsPrjUserRoleEN> {
  let arrPrjUserRoleObjLst = new Array<clsPrjUserRoleEN>();
  if (strJSON === '') {
    return arrPrjUserRoleObjLst;
  }
  try {
    arrPrjUserRoleObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrPrjUserRoleObjLst;
  }
  return arrPrjUserRoleObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrPrjUserRoleObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function PrjUserRole_GetObjLstByJSONObjLst(
  arrPrjUserRoleObjLstS: Array<clsPrjUserRoleEN>,
): Array<clsPrjUserRoleEN> {
  const arrPrjUserRoleObjLst = new Array<clsPrjUserRoleEN>();
  for (const objInFor of arrPrjUserRoleObjLstS) {
    const obj1 = PrjUserRole_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrPrjUserRoleObjLst.push(obj1);
  }
  return arrPrjUserRoleObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function PrjUserRole_GetObjByJSONStr(strJSON: string): clsPrjUserRoleEN {
  let pobjPrjUserRoleEN = new clsPrjUserRoleEN();
  if (strJSON === '') {
    return pobjPrjUserRoleEN;
  }
  try {
    pobjPrjUserRoleEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjPrjUserRoleEN;
  }
  return pobjPrjUserRoleEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function PrjUserRole_GetCombineCondition(objPrjUserRoleCond: clsPrjUserRoleEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjUserRoleCond.dicFldComparisonOp,
      clsPrjUserRoleEN.con_RoleId,
    ) == true
  ) {
    const strComparisonOpRoleId: string =
      objPrjUserRoleCond.dicFldComparisonOp[clsPrjUserRoleEN.con_RoleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjUserRoleEN.con_RoleId,
      objPrjUserRoleCond.roleId,
      strComparisonOpRoleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjUserRoleCond.dicFldComparisonOp,
      clsPrjUserRoleEN.con_RoleName,
    ) == true
  ) {
    const strComparisonOpRoleName: string =
      objPrjUserRoleCond.dicFldComparisonOp[clsPrjUserRoleEN.con_RoleName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjUserRoleEN.con_RoleName,
      objPrjUserRoleCond.roleName,
      strComparisonOpRoleName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjUserRoleCond.dicFldComparisonOp,
      clsPrjUserRoleEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objPrjUserRoleCond.dicFldComparisonOp[clsPrjUserRoleEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjUserRoleEN.con_PrjId,
      objPrjUserRoleCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objPrjUserRoleCond.dicFldComparisonOp,
      clsPrjUserRoleEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objPrjUserRoleCond.dicFldComparisonOp[clsPrjUserRoleEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsPrjUserRoleEN.con_Memo,
      objPrjUserRoleCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjUserRole(工程用户角色),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strRoleName: 角色名称(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjUserRole_GetUniCondStr(objPrjUserRoleEN: clsPrjUserRoleEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RoleName = '{0}'", objPrjUserRoleEN.roleName);
  strWhereCond += Format(" and PrjId = '{0}'", objPrjUserRoleEN.prjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--PrjUserRole(工程用户角色),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strRoleName: 角色名称(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function PrjUserRole_GetUniCondStr4Update(objPrjUserRoleEN: clsPrjUserRoleEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RoleId <> '{0}'", objPrjUserRoleEN.roleId);
  strWhereCond += Format(" and RoleName = '{0}'", objPrjUserRoleEN.roleName);
  strWhereCond += Format(" and PrjId = '{0}'", objPrjUserRoleEN.prjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objPrjUserRoleENS:源对象
 * @param objPrjUserRoleENT:目标对象
 */
export function PrjUserRole_GetObjFromJsonObj(
  objPrjUserRoleENS: clsPrjUserRoleEN,
): clsPrjUserRoleEN {
  const objPrjUserRoleENT: clsPrjUserRoleEN = new clsPrjUserRoleEN();
  ObjectAssign(objPrjUserRoleENT, objPrjUserRoleENS);
  return objPrjUserRoleENT;
}
