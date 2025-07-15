/**
 * 类名:clsvUserCodePrjMainPathWApi
 * 表名:vUserCodePrjMainPath(00050339)
 * 版本:2024.08.31.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/04 18:07:34
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v用户生成项目主路径(vUserCodePrjMainPath)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年09月04日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvUserCodePrjMainPathEN } from '@/ts/L0Entity/SystemSet/clsvUserCodePrjMainPathEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vUserCodePrjMainPath_Controller = 'vUserCodePrjMainPathApi';
export const vUserCodePrjMainPath_ConstructorName = 'vUserCodePrjMainPath';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserCodePrjMainPathId:关键字
 * @returns 对象
 **/
export async function vUserCodePrjMainPath_GetObjByUserCodePrjMainPathIdAsync(
  strUserCodePrjMainPathId: string,
): Promise<clsvUserCodePrjMainPathEN | null> {
  const strThisFuncName = 'GetObjByUserCodePrjMainPathIdAsync';

  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    const strMsg = Format(
      '参数:[strUserCodePrjMainPathId]不能为空!(In clsvUserCodePrjMainPathWApi.GetObjByUserCodePrjMainPathIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserCodePrjMainPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strUserCodePrjMainPathId]的长度:[{0}]不正确!(clsvUserCodePrjMainPathWApi.GetObjByUserCodePrjMainPathIdAsync)',
      strUserCodePrjMainPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByUserCodePrjMainPathId';
  const strUrl = GetWebApiUrl(vUserCodePrjMainPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserCodePrjMainPathId,
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
      const objvUserCodePrjMainPath = vUserCodePrjMainPath_GetObjFromJsonObj(returnObj);
      return objvUserCodePrjMainPath;
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
        vUserCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePrjMainPath_ConstructorName,
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
 * @param strUserCodePrjMainPathId:所给的关键字
 * @returns 对象
 */
export async function vUserCodePrjMainPath_GetObjByUserCodePrjMainPathIdCache(
  strUserCodePrjMainPathId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByUserCodePrjMainPathIdCache';

  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    const strMsg = Format(
      '参数:[strUserCodePrjMainPathId]不能为空!(In clsvUserCodePrjMainPathWApi.GetObjByUserCodePrjMainPathIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserCodePrjMainPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strUserCodePrjMainPathId]的长度:[{0}]不正确!(clsvUserCodePrjMainPathWApi.GetObjByUserCodePrjMainPathIdCache)',
      strUserCodePrjMainPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvUserCodePrjMainPathObjLstCache = await vUserCodePrjMainPath_GetObjLstCache(strPrjId);
  try {
    const arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathObjLstCache.filter(
      (x) => x.userCodePrjMainPathId == strUserCodePrjMainPathId,
    );
    let objvUserCodePrjMainPath: clsvUserCodePrjMainPathEN;
    if (arrvUserCodePrjMainPathSel.length > 0) {
      objvUserCodePrjMainPath = arrvUserCodePrjMainPathSel[0];
      return objvUserCodePrjMainPath;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvUserCodePrjMainPathConst =
          await vUserCodePrjMainPath_GetObjByUserCodePrjMainPathIdAsync(strUserCodePrjMainPathId);
        if (objvUserCodePrjMainPathConst != null) {
          vUserCodePrjMainPath_ReFreshThisCache(strPrjId);
          return objvUserCodePrjMainPathConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserCodePrjMainPathId,
      vUserCodePrjMainPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strUserCodePrjMainPathId:所给的关键字
 * @returns 对象
 */
export async function vUserCodePrjMainPath_GetObjByUserCodePrjMainPathIdlocalStorage(
  strUserCodePrjMainPathId: string,
) {
  const strThisFuncName = 'GetObjByUserCodePrjMainPathIdlocalStorage';

  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    const strMsg = Format(
      '参数:[strUserCodePrjMainPathId]不能为空!(In clsvUserCodePrjMainPathWApi.GetObjByUserCodePrjMainPathIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserCodePrjMainPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strUserCodePrjMainPathId]的长度:[{0}]不正确!(clsvUserCodePrjMainPathWApi.GetObjByUserCodePrjMainPathIdlocalStorage)',
      strUserCodePrjMainPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format(
    '{0}_{1}',
    clsvUserCodePrjMainPathEN._CurrTabName,
    strUserCodePrjMainPathId,
  );
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvUserCodePrjMainPathCache: clsvUserCodePrjMainPathEN = JSON.parse(strTempObj);
    return objvUserCodePrjMainPathCache;
  }
  try {
    const objvUserCodePrjMainPath = await vUserCodePrjMainPath_GetObjByUserCodePrjMainPathIdAsync(
      strUserCodePrjMainPathId,
    );
    if (objvUserCodePrjMainPath != null) {
      localStorage.setItem(strKey, JSON.stringify(objvUserCodePrjMainPath));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvUserCodePrjMainPath;
    }
    return objvUserCodePrjMainPath;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserCodePrjMainPathId,
      vUserCodePrjMainPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strUserCodePrjMainPathId:所给的关键字
 * @returns 对象
 */
export async function vUserCodePrjMainPath_GetNameByUserCodePrjMainPathIdCache(
  strUserCodePrjMainPathId: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    const strMsg = Format(
      '参数:[strUserCodePrjMainPathId]不能为空!(In clsvUserCodePrjMainPathWApi.GetNameByUserCodePrjMainPathIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserCodePrjMainPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strUserCodePrjMainPathId]的长度:[{0}]不正确!(clsvUserCodePrjMainPathWApi.GetNameByUserCodePrjMainPathIdCache)',
      strUserCodePrjMainPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvUserCodePrjMainPathObjLstCache = await vUserCodePrjMainPath_GetObjLstCache(strPrjId);
  if (arrvUserCodePrjMainPathObjLstCache == null) return '';
  try {
    const arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathObjLstCache.filter(
      (x) => x.userCodePrjMainPathId == strUserCodePrjMainPathId,
    );
    let objvUserCodePrjMainPath: clsvUserCodePrjMainPathEN;
    if (arrvUserCodePrjMainPathSel.length > 0) {
      objvUserCodePrjMainPath = arrvUserCodePrjMainPathSel[0];
      return objvUserCodePrjMainPath.applicationTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strUserCodePrjMainPathId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-09-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vUserCodePrjMainPath_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvUserCodePrjMainPathWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvUserCodePrjMainPathWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvUserCodePrjMainPathEN.con_UserCodePrjMainPathId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvUserCodePrjMainPathEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvUserCodePrjMainPathEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strUserCodePrjMainPathId = strInValue;
  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    return '';
  }
  const objvUserCodePrjMainPath = await vUserCodePrjMainPath_GetObjByUserCodePrjMainPathIdCache(
    strUserCodePrjMainPathId,
    strPrjIdClassfy,
  );
  if (objvUserCodePrjMainPath == null) return '';
  if (objvUserCodePrjMainPath.GetFldValue(strOutFldName) == null) return '';
  return objvUserCodePrjMainPath.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-09-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vUserCodePrjMainPath_SortFunDefa(
  a: clsvUserCodePrjMainPathEN,
  b: clsvUserCodePrjMainPathEN,
): number {
  return a.userCodePrjMainPathId.localeCompare(b.userCodePrjMainPathId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-09-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vUserCodePrjMainPath_SortFunDefa2Fld(
  a: clsvUserCodePrjMainPathEN,
  b: clsvUserCodePrjMainPathEN,
): number {
  if (a.applicationTypeENName == b.applicationTypeENName)
    return a.cMProjectAppRelaId - b.cMProjectAppRelaId;
  else return a.applicationTypeENName.localeCompare(b.applicationTypeENName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-09-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vUserCodePrjMainPath_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeENName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (a.applicationTypeENName == null) return -1;
          if (b.applicationTypeENName == null) return 1;
          return a.applicationTypeENName.localeCompare(b.applicationTypeENName);
        };
      case clsvUserCodePrjMainPathEN.con_UserCodePrjMainPathId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return a.userCodePrjMainPathId.localeCompare(b.userCodePrjMainPathId);
        };
      case clsvUserCodePrjMainPathEN.con_CMProjectAppRelaId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return a.cMProjectAppRelaId - b.cMProjectAppRelaId;
        };
      case clsvUserCodePrjMainPathEN.con_PrjId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvUserCodePrjMainPathEN.con_PrjName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsvUserCodePrjMainPathEN.con_ProgLangTypeId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (a.progLangTypeId == null) return -1;
          if (b.progLangTypeId == null) return 1;
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsvUserCodePrjMainPathEN.con_UserId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsvUserCodePrjMainPathEN.con_UserName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsvUserCodePrjMainPathEN.con_DepartmentId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (a.departmentId == null) return -1;
          if (b.departmentId == null) return 1;
          return a.departmentId.localeCompare(b.departmentId);
        };
      case clsvUserCodePrjMainPathEN.con_DepartmentName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return a.departmentName.localeCompare(b.departmentName);
        };
      case clsvUserCodePrjMainPathEN.con_UserStateId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (a.userStateId == null) return -1;
          if (b.userStateId == null) return 1;
          return a.userStateId.localeCompare(b.userStateId);
        };
      case clsvUserCodePrjMainPathEN.con_UserStateName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return a.userStateName.localeCompare(b.userStateName);
        };
      case clsvUserCodePrjMainPathEN.con_IsUsePrjMainPath:
        return (a: clsvUserCodePrjMainPathEN) => {
          if (a.isUsePrjMainPath == true) return 1;
          else return -1;
        };
      case clsvUserCodePrjMainPathEN.con_IncludeXmlPath:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (a.includeXmlPath == null) return -1;
          if (b.includeXmlPath == null) return 1;
          return a.includeXmlPath.localeCompare(b.includeXmlPath);
        };
      case clsvUserCodePrjMainPathEN.con_IsTemplate:
        return (a: clsvUserCodePrjMainPathEN) => {
          if (a.isTemplate == true) return 1;
          else return -1;
        };
      case clsvUserCodePrjMainPathEN.con_InUse:
        return (a: clsvUserCodePrjMainPathEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsvUserCodePrjMainPathEN.con_UpdDate:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvUserCodePrjMainPathEN.con_UpdUserId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsvUserCodePrjMainPathEN.con_Memo:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeSimName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (a.applicationTypeSimName == null) return -1;
          if (b.applicationTypeSimName == null) return 1;
          return a.applicationTypeSimName.localeCompare(b.applicationTypeSimName);
        };
      case clsvUserCodePrjMainPathEN.con_CmPrjName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (a.cmPrjName == null) return -1;
          if (b.cmPrjName == null) return 1;
          return a.cmPrjName.localeCompare(b.cmPrjName);
        };
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (a.applicationTypeName == null) return -1;
          if (b.applicationTypeName == null) return 1;
          return a.applicationTypeName.localeCompare(b.applicationTypeName);
        };
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsvUserCodePrjMainPathEN.con_CmPrjId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (a.cmPrjId == null) return -1;
          if (b.cmPrjId == null) return 1;
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsvUserCodePrjMainPathEN.con_AppOrderNum:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return a.appOrderNum - b.appOrderNum;
        };
      case clsvUserCodePrjMainPathEN.con_AppIsVisible:
        return (a: clsvUserCodePrjMainPathEN) => {
          if (a.appIsVisible == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vUserCodePrjMainPath]中不存在!(in ${vUserCodePrjMainPath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeENName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (b.applicationTypeENName == null) return -1;
          if (a.applicationTypeENName == null) return 1;
          return b.applicationTypeENName.localeCompare(a.applicationTypeENName);
        };
      case clsvUserCodePrjMainPathEN.con_UserCodePrjMainPathId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return b.userCodePrjMainPathId.localeCompare(a.userCodePrjMainPathId);
        };
      case clsvUserCodePrjMainPathEN.con_CMProjectAppRelaId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return b.cMProjectAppRelaId - a.cMProjectAppRelaId;
        };
      case clsvUserCodePrjMainPathEN.con_PrjId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvUserCodePrjMainPathEN.con_PrjName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsvUserCodePrjMainPathEN.con_ProgLangTypeId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (b.progLangTypeId == null) return -1;
          if (a.progLangTypeId == null) return 1;
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsvUserCodePrjMainPathEN.con_UserId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsvUserCodePrjMainPathEN.con_UserName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsvUserCodePrjMainPathEN.con_DepartmentId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (b.departmentId == null) return -1;
          if (a.departmentId == null) return 1;
          return b.departmentId.localeCompare(a.departmentId);
        };
      case clsvUserCodePrjMainPathEN.con_DepartmentName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return b.departmentName.localeCompare(a.departmentName);
        };
      case clsvUserCodePrjMainPathEN.con_UserStateId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (b.userStateId == null) return -1;
          if (a.userStateId == null) return 1;
          return b.userStateId.localeCompare(a.userStateId);
        };
      case clsvUserCodePrjMainPathEN.con_UserStateName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return b.userStateName.localeCompare(a.userStateName);
        };
      case clsvUserCodePrjMainPathEN.con_IsUsePrjMainPath:
        return (b: clsvUserCodePrjMainPathEN) => {
          if (b.isUsePrjMainPath == true) return 1;
          else return -1;
        };
      case clsvUserCodePrjMainPathEN.con_IncludeXmlPath:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (b.includeXmlPath == null) return -1;
          if (a.includeXmlPath == null) return 1;
          return b.includeXmlPath.localeCompare(a.includeXmlPath);
        };
      case clsvUserCodePrjMainPathEN.con_IsTemplate:
        return (b: clsvUserCodePrjMainPathEN) => {
          if (b.isTemplate == true) return 1;
          else return -1;
        };
      case clsvUserCodePrjMainPathEN.con_InUse:
        return (b: clsvUserCodePrjMainPathEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsvUserCodePrjMainPathEN.con_UpdDate:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvUserCodePrjMainPathEN.con_UpdUserId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsvUserCodePrjMainPathEN.con_Memo:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeSimName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (b.applicationTypeSimName == null) return -1;
          if (a.applicationTypeSimName == null) return 1;
          return b.applicationTypeSimName.localeCompare(a.applicationTypeSimName);
        };
      case clsvUserCodePrjMainPathEN.con_CmPrjName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (b.cmPrjName == null) return -1;
          if (a.cmPrjName == null) return 1;
          return b.cmPrjName.localeCompare(a.cmPrjName);
        };
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeName:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (b.applicationTypeName == null) return -1;
          if (a.applicationTypeName == null) return 1;
          return b.applicationTypeName.localeCompare(a.applicationTypeName);
        };
      case clsvUserCodePrjMainPathEN.con_ApplicationTypeId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsvUserCodePrjMainPathEN.con_CmPrjId:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          if (b.cmPrjId == null) return -1;
          if (a.cmPrjId == null) return 1;
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsvUserCodePrjMainPathEN.con_AppOrderNum:
        return (a: clsvUserCodePrjMainPathEN, b: clsvUserCodePrjMainPathEN) => {
          return b.appOrderNum - a.appOrderNum;
        };
      case clsvUserCodePrjMainPathEN.con_AppIsVisible:
        return (b: clsvUserCodePrjMainPathEN) => {
          if (b.appIsVisible == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vUserCodePrjMainPath]中不存在!(in ${vUserCodePrjMainPath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-09-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vUserCodePrjMainPath_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvUserCodePrjMainPathEN.con_ApplicationTypeENName:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.applicationTypeENName === value;
      };
    case clsvUserCodePrjMainPathEN.con_UserCodePrjMainPathId:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.userCodePrjMainPathId === value;
      };
    case clsvUserCodePrjMainPathEN.con_CMProjectAppRelaId:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.cMProjectAppRelaId === value;
      };
    case clsvUserCodePrjMainPathEN.con_PrjId:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.prjId === value;
      };
    case clsvUserCodePrjMainPathEN.con_PrjName:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.prjName === value;
      };
    case clsvUserCodePrjMainPathEN.con_ProgLangTypeId:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.progLangTypeId === value;
      };
    case clsvUserCodePrjMainPathEN.con_UserId:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.userId === value;
      };
    case clsvUserCodePrjMainPathEN.con_UserName:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.userName === value;
      };
    case clsvUserCodePrjMainPathEN.con_DepartmentId:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.departmentId === value;
      };
    case clsvUserCodePrjMainPathEN.con_DepartmentName:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.departmentName === value;
      };
    case clsvUserCodePrjMainPathEN.con_UserStateId:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.userStateId === value;
      };
    case clsvUserCodePrjMainPathEN.con_UserStateName:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.userStateName === value;
      };
    case clsvUserCodePrjMainPathEN.con_IsUsePrjMainPath:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.isUsePrjMainPath === value;
      };
    case clsvUserCodePrjMainPathEN.con_IncludeXmlPath:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.includeXmlPath === value;
      };
    case clsvUserCodePrjMainPathEN.con_IsTemplate:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.isTemplate === value;
      };
    case clsvUserCodePrjMainPathEN.con_InUse:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.inUse === value;
      };
    case clsvUserCodePrjMainPathEN.con_UpdDate:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.updDate === value;
      };
    case clsvUserCodePrjMainPathEN.con_UpdUserId:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.updUserId === value;
      };
    case clsvUserCodePrjMainPathEN.con_Memo:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.memo === value;
      };
    case clsvUserCodePrjMainPathEN.con_ApplicationTypeSimName:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.applicationTypeSimName === value;
      };
    case clsvUserCodePrjMainPathEN.con_CmPrjName:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.cmPrjName === value;
      };
    case clsvUserCodePrjMainPathEN.con_ApplicationTypeName:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.applicationTypeName === value;
      };
    case clsvUserCodePrjMainPathEN.con_ApplicationTypeId:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.applicationTypeId === value;
      };
    case clsvUserCodePrjMainPathEN.con_CmPrjId:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.cmPrjId === value;
      };
    case clsvUserCodePrjMainPathEN.con_AppOrderNum:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.appOrderNum === value;
      };
    case clsvUserCodePrjMainPathEN.con_AppIsVisible:
      return (obj: clsvUserCodePrjMainPathEN) => {
        return obj.appIsVisible === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vUserCodePrjMainPath]中不存在!(in ${vUserCodePrjMainPath_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-09-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vUserCodePrjMainPath_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strPrjIdClassfy]不能为空!(In clsvUserCodePrjMainPathWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvUserCodePrjMainPathWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvUserCodePrjMainPathEN.con_UserCodePrjMainPathId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvUserCodePrjMainPath = await vUserCodePrjMainPath_GetObjLstCache(strPrjIdClassfy);
  if (arrvUserCodePrjMainPath == null) return [];
  let arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPath;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvUserCodePrjMainPathSel.length == 0) return [];
  return arrvUserCodePrjMainPathSel.map((x) => x.userCodePrjMainPathId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vUserCodePrjMainPath_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vUserCodePrjMainPath_Controller, strAction);

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
        vUserCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePrjMainPath_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vUserCodePrjMainPath_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vUserCodePrjMainPath_Controller, strAction);

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
        vUserCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePrjMainPath_ConstructorName,
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
export async function vUserCodePrjMainPath_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vUserCodePrjMainPath_Controller, strAction);

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
        vUserCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePrjMainPath_ConstructorName,
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
export async function vUserCodePrjMainPath_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvUserCodePrjMainPathEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vUserCodePrjMainPath_Controller, strAction);

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
      const objvUserCodePrjMainPath = vUserCodePrjMainPath_GetObjFromJsonObj(returnObj);
      return objvUserCodePrjMainPath;
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
        vUserCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePrjMainPath_ConstructorName,
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
export async function vUserCodePrjMainPath_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvUserCodePrjMainPathEN.WhereFormat) == false) {
    strWhereCond = Format(clsvUserCodePrjMainPathEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvUserCodePrjMainPathEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvUserCodePrjMainPathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvUserCodePrjMainPathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvUserCodePrjMainPathExObjLstCache: Array<clsvUserCodePrjMainPathEN> =
      CacheHelper.Get(strKey);
    const arrvUserCodePrjMainPathObjLstT = vUserCodePrjMainPath_GetObjLstByJSONObjLst(
      arrvUserCodePrjMainPathExObjLstCache,
    );
    return arrvUserCodePrjMainPathObjLstT;
  }
  try {
    const arrvUserCodePrjMainPathExObjLst = await vUserCodePrjMainPath_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvUserCodePrjMainPathExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvUserCodePrjMainPathExObjLst.length,
    );
    console.log(strInfo);
    return arrvUserCodePrjMainPathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vUserCodePrjMainPath_ConstructorName,
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
export async function vUserCodePrjMainPath_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvUserCodePrjMainPathEN.WhereFormat) == false) {
    strWhereCond = Format(clsvUserCodePrjMainPathEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvUserCodePrjMainPathEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvUserCodePrjMainPathEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvUserCodePrjMainPathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvUserCodePrjMainPathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvUserCodePrjMainPathExObjLstCache: Array<clsvUserCodePrjMainPathEN> =
      JSON.parse(strTempObjLst);
    const arrvUserCodePrjMainPathObjLstT = vUserCodePrjMainPath_GetObjLstByJSONObjLst(
      arrvUserCodePrjMainPathExObjLstCache,
    );
    return arrvUserCodePrjMainPathObjLstT;
  }
  try {
    const arrvUserCodePrjMainPathExObjLst = await vUserCodePrjMainPath_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvUserCodePrjMainPathExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvUserCodePrjMainPathExObjLst.length,
    );
    console.log(strInfo);
    return arrvUserCodePrjMainPathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vUserCodePrjMainPath_ConstructorName,
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
export async function vUserCodePrjMainPath_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvUserCodePrjMainPathEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvUserCodePrjMainPathObjLstCache: Array<clsvUserCodePrjMainPathEN> =
      JSON.parse(strTempObjLst);
    return arrvUserCodePrjMainPathObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vUserCodePrjMainPath_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvUserCodePrjMainPathEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vUserCodePrjMainPath_Controller, strAction);

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
          vUserCodePrjMainPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vUserCodePrjMainPath_GetObjLstByJSONObjLst(returnObjLst);
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
        vUserCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePrjMainPath_ConstructorName,
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
export async function vUserCodePrjMainPath_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvUserCodePrjMainPathEN.WhereFormat) == false) {
    strWhereCond = Format(clsvUserCodePrjMainPathEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvUserCodePrjMainPathEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvUserCodePrjMainPathEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvUserCodePrjMainPathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvUserCodePrjMainPathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvUserCodePrjMainPathExObjLstCache: Array<clsvUserCodePrjMainPathEN> =
      JSON.parse(strTempObjLst);
    const arrvUserCodePrjMainPathObjLstT = vUserCodePrjMainPath_GetObjLstByJSONObjLst(
      arrvUserCodePrjMainPathExObjLstCache,
    );
    return arrvUserCodePrjMainPathObjLstT;
  }
  try {
    const arrvUserCodePrjMainPathExObjLst = await vUserCodePrjMainPath_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvUserCodePrjMainPathExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvUserCodePrjMainPathExObjLst.length,
    );
    console.log(strInfo);
    return arrvUserCodePrjMainPathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vUserCodePrjMainPath_ConstructorName,
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
export async function vUserCodePrjMainPath_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvUserCodePrjMainPathEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvUserCodePrjMainPathObjLstCache: Array<clsvUserCodePrjMainPathEN> =
      JSON.parse(strTempObjLst);
    return arrvUserCodePrjMainPathObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vUserCodePrjMainPath_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvUserCodePrjMainPathEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvUserCodePrjMainPathWApi.vUserCodePrjMainPath_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvUserCodePrjMainPathWApi.vUserCodePrjMainPath_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvUserCodePrjMainPathObjLstCache;
  switch (clsvUserCodePrjMainPathEN.CacheModeId) {
    case '04': //sessionStorage
      arrvUserCodePrjMainPathObjLstCache = await vUserCodePrjMainPath_GetObjLstsessionStorage(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrvUserCodePrjMainPathObjLstCache = await vUserCodePrjMainPath_GetObjLstlocalStorage(
        strPrjId,
      );
      break;
    case '02': //ClientCache
      arrvUserCodePrjMainPathObjLstCache = await vUserCodePrjMainPath_GetObjLstClientCache(
        strPrjId,
      );
      break;
    default:
      arrvUserCodePrjMainPathObjLstCache = await vUserCodePrjMainPath_GetObjLstClientCache(
        strPrjId,
      );
      break;
  }
  return arrvUserCodePrjMainPathObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vUserCodePrjMainPath_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvUserCodePrjMainPathObjLstCache;
  switch (clsvUserCodePrjMainPathEN.CacheModeId) {
    case '04': //sessionStorage
      arrvUserCodePrjMainPathObjLstCache =
        await vUserCodePrjMainPath_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrvUserCodePrjMainPathObjLstCache =
        await vUserCodePrjMainPath_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrvUserCodePrjMainPathObjLstCache = null;
      break;
    default:
      arrvUserCodePrjMainPathObjLstCache = null;
      break;
  }
  return arrvUserCodePrjMainPathObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrUserCodePrjMainPathIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vUserCodePrjMainPath_GetSubObjLstCache(
  objvUserCodePrjMainPathCond: clsvUserCodePrjMainPathEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvUserCodePrjMainPathObjLstCache = await vUserCodePrjMainPath_GetObjLstCache(strPrjId);
  let arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathObjLstCache;
  if (
    objvUserCodePrjMainPathCond.sfFldComparisonOp == null ||
    objvUserCodePrjMainPathCond.sfFldComparisonOp == ''
  )
    return arrvUserCodePrjMainPathSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvUserCodePrjMainPathCond.sfFldComparisonOp,
  );
  //console.log("clsvUserCodePrjMainPathWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvUserCodePrjMainPathCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvUserCodePrjMainPathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvUserCodePrjMainPathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvUserCodePrjMainPathCond),
      vUserCodePrjMainPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvUserCodePrjMainPathEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrUserCodePrjMainPathId:关键字列表
 * @returns 对象列表
 **/
export async function vUserCodePrjMainPath_GetObjLstByUserCodePrjMainPathIdLstAsync(
  arrUserCodePrjMainPathId: Array<string>,
): Promise<Array<clsvUserCodePrjMainPathEN>> {
  const strThisFuncName = 'GetObjLstByUserCodePrjMainPathIdLstAsync';
  const strAction = 'GetObjLstByUserCodePrjMainPathIdLst';
  const strUrl = GetWebApiUrl(vUserCodePrjMainPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrUserCodePrjMainPathId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vUserCodePrjMainPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vUserCodePrjMainPath_GetObjLstByJSONObjLst(returnObjLst);
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
        vUserCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePrjMainPath_ConstructorName,
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
 * @param arrstrUserCodePrjMainPathIdLst:关键字列表
 * @returns 对象列表
 */
export async function vUserCodePrjMainPath_GetObjLstByUserCodePrjMainPathIdLstCache(
  arrUserCodePrjMainPathIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByUserCodePrjMainPathIdLstCache';
  try {
    const arrvUserCodePrjMainPathObjLstCache = await vUserCodePrjMainPath_GetObjLstCache(strPrjId);
    const arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathObjLstCache.filter(
      (x) => arrUserCodePrjMainPathIdLst.indexOf(x.userCodePrjMainPathId) > -1,
    );
    return arrvUserCodePrjMainPathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrUserCodePrjMainPathIdLst.join(','),
      vUserCodePrjMainPath_ConstructorName,
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
export async function vUserCodePrjMainPath_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvUserCodePrjMainPathEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vUserCodePrjMainPath_Controller, strAction);

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
          vUserCodePrjMainPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vUserCodePrjMainPath_GetObjLstByJSONObjLst(returnObjLst);
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
        vUserCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePrjMainPath_ConstructorName,
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
export async function vUserCodePrjMainPath_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvUserCodePrjMainPathEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vUserCodePrjMainPath_Controller, strAction);

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
          vUserCodePrjMainPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vUserCodePrjMainPath_GetObjLstByJSONObjLst(returnObjLst);
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
        vUserCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePrjMainPath_ConstructorName,
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
export async function vUserCodePrjMainPath_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvUserCodePrjMainPathEN>();
  const arrvUserCodePrjMainPathObjLstCache = await vUserCodePrjMainPath_GetObjLstCache(strPrjId);
  if (arrvUserCodePrjMainPathObjLstCache.length == 0) return arrvUserCodePrjMainPathObjLstCache;
  let arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvUserCodePrjMainPathCond = new clsvUserCodePrjMainPathEN();
  ObjectAssign(objvUserCodePrjMainPathCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvUserCodePrjMainPathWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvUserCodePrjMainPathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvUserCodePrjMainPathSel.length == 0) return arrvUserCodePrjMainPathSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.sort(
        vUserCodePrjMainPath_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.sort(objPagerPara.sortFun);
    }
    arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.slice(intStart, intEnd);
    return arrvUserCodePrjMainPathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vUserCodePrjMainPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvUserCodePrjMainPathEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vUserCodePrjMainPath_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvUserCodePrjMainPathEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvUserCodePrjMainPathEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vUserCodePrjMainPath_Controller, strAction);

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
          vUserCodePrjMainPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vUserCodePrjMainPath_GetObjLstByJSONObjLst(returnObjLst);
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
        vUserCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePrjMainPath_ConstructorName,
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
 * @param objstrUserCodePrjMainPathIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vUserCodePrjMainPath_IsExistRecordCache(
  objvUserCodePrjMainPathCond: clsvUserCodePrjMainPathEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvUserCodePrjMainPathObjLstCache = await vUserCodePrjMainPath_GetObjLstCache(strPrjId);
  if (arrvUserCodePrjMainPathObjLstCache == null) return false;
  let arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathObjLstCache;
  if (
    objvUserCodePrjMainPathCond.sfFldComparisonOp == null ||
    objvUserCodePrjMainPathCond.sfFldComparisonOp == ''
  )
    return arrvUserCodePrjMainPathSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvUserCodePrjMainPathCond.sfFldComparisonOp,
  );
  //console.log("clsvUserCodePrjMainPathWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvUserCodePrjMainPathCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvUserCodePrjMainPathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvUserCodePrjMainPathSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvUserCodePrjMainPathCond),
      vUserCodePrjMainPath_ConstructorName,
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
export async function vUserCodePrjMainPath_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vUserCodePrjMainPath_Controller, strAction);

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
        vUserCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePrjMainPath_ConstructorName,
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
 * @param strUserCodePrjMainPathId:所给的关键字
 * @returns 对象
 */
export async function vUserCodePrjMainPath_IsExistCache(
  strUserCodePrjMainPathId: string,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrvUserCodePrjMainPathObjLstCache = await vUserCodePrjMainPath_GetObjLstCache(strPrjId);
  if (arrvUserCodePrjMainPathObjLstCache == null) return false;
  try {
    const arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathObjLstCache.filter(
      (x) => x.userCodePrjMainPathId == strUserCodePrjMainPathId,
    );
    if (arrvUserCodePrjMainPathSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strUserCodePrjMainPathId,
      vUserCodePrjMainPath_ConstructorName,
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
 * @param strUserCodePrjMainPathId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vUserCodePrjMainPath_IsExistAsync(
  strUserCodePrjMainPathId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vUserCodePrjMainPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserCodePrjMainPathId,
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
        vUserCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePrjMainPath_ConstructorName,
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
export async function vUserCodePrjMainPath_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vUserCodePrjMainPath_Controller, strAction);

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
        vUserCodePrjMainPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePrjMainPath_ConstructorName,
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
 * @param objvUserCodePrjMainPathCond:条件对象
 * @returns 对象列表记录数
 */
export async function vUserCodePrjMainPath_GetRecCountByCondCache(
  objvUserCodePrjMainPathCond: clsvUserCodePrjMainPathEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvUserCodePrjMainPathObjLstCache = await vUserCodePrjMainPath_GetObjLstCache(strPrjId);
  if (arrvUserCodePrjMainPathObjLstCache == null) return 0;
  let arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathObjLstCache;
  if (
    objvUserCodePrjMainPathCond.sfFldComparisonOp == null ||
    objvUserCodePrjMainPathCond.sfFldComparisonOp == ''
  )
    return arrvUserCodePrjMainPathSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvUserCodePrjMainPathCond.sfFldComparisonOp,
  );
  //console.log("clsvUserCodePrjMainPathWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvUserCodePrjMainPathCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvUserCodePrjMainPathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvUserCodePrjMainPathSel = arrvUserCodePrjMainPathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvUserCodePrjMainPathSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvUserCodePrjMainPathCond),
      vUserCodePrjMainPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vUserCodePrjMainPath_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vUserCodePrjMainPath_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsvUserCodePrjMainPathWApi.vUserCodePrjMainPath_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsvUserCodePrjMainPathWApi.vUserCodePrjMainPath_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvUserCodePrjMainPathEN._CurrTabName, strPrjId);
    switch (clsvUserCodePrjMainPathEN.CacheModeId) {
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function vUserCodePrjMainPath_BindDdl_UserCodePrjMainPathIdByPrjIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvUserCodePrjMainPathWApi.BindDdl_UserCodePrjMainPathIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvUserCodePrjMainPathWApi.BindDdl_UserCodePrjMainPathIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_UserCodePrjMainPathIdByPrjIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_UserCodePrjMainPathIdByPrjIdInDivCache");
  let arrObjLstSel = await vUserCodePrjMainPath_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
    clsvUserCodePrjMainPathEN.con_ApplicationTypeName,
    'v用户生成项目主路径',
  );
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-09-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vUserCodePrjMainPath_GetJSONStrByObj(
  pobjvUserCodePrjMainPathEN: clsvUserCodePrjMainPathEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvUserCodePrjMainPathEN);
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
 * 日期:2024-09-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vUserCodePrjMainPath_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvUserCodePrjMainPathEN> {
  let arrvUserCodePrjMainPathObjLst = new Array<clsvUserCodePrjMainPathEN>();
  if (strJSON === '') {
    return arrvUserCodePrjMainPathObjLst;
  }
  try {
    arrvUserCodePrjMainPathObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvUserCodePrjMainPathObjLst;
  }
  return arrvUserCodePrjMainPathObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-09-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvUserCodePrjMainPathObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vUserCodePrjMainPath_GetObjLstByJSONObjLst(
  arrvUserCodePrjMainPathObjLstS: Array<clsvUserCodePrjMainPathEN>,
): Array<clsvUserCodePrjMainPathEN> {
  const arrvUserCodePrjMainPathObjLst = new Array<clsvUserCodePrjMainPathEN>();
  for (const objInFor of arrvUserCodePrjMainPathObjLstS) {
    const obj1 = vUserCodePrjMainPath_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvUserCodePrjMainPathObjLst.push(obj1);
  }
  return arrvUserCodePrjMainPathObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-09-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vUserCodePrjMainPath_GetObjByJSONStr(strJSON: string): clsvUserCodePrjMainPathEN {
  let pobjvUserCodePrjMainPathEN = new clsvUserCodePrjMainPathEN();
  if (strJSON === '') {
    return pobjvUserCodePrjMainPathEN;
  }
  try {
    pobjvUserCodePrjMainPathEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvUserCodePrjMainPathEN;
  }
  return pobjvUserCodePrjMainPathEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vUserCodePrjMainPath_GetCombineCondition(
  objvUserCodePrjMainPathCond: clsvUserCodePrjMainPathEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_ApplicationTypeENName,
    ) == true
  ) {
    const strComparisonOpApplicationTypeENName: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[
        clsvUserCodePrjMainPathEN.con_ApplicationTypeENName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_ApplicationTypeENName,
      objvUserCodePrjMainPathCond.applicationTypeENName,
      strComparisonOpApplicationTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
    ) == true
  ) {
    const strComparisonOpUserCodePrjMainPathId: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[
        clsvUserCodePrjMainPathEN.con_UserCodePrjMainPathId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_UserCodePrjMainPathId,
      objvUserCodePrjMainPathCond.userCodePrjMainPathId,
      strComparisonOpUserCodePrjMainPathId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_CMProjectAppRelaId,
    ) == true
  ) {
    const strComparisonOpCMProjectAppRelaId: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[
        clsvUserCodePrjMainPathEN.con_CMProjectAppRelaId
      ];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvUserCodePrjMainPathEN.con_CMProjectAppRelaId,
      objvUserCodePrjMainPathCond.cMProjectAppRelaId,
      strComparisonOpCMProjectAppRelaId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_PrjId,
      objvUserCodePrjMainPathCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_PrjName,
    ) == true
  ) {
    const strComparisonOpPrjName: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_PrjName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_PrjName,
      objvUserCodePrjMainPathCond.prjName,
      strComparisonOpPrjName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_ProgLangTypeId,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_ProgLangTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_ProgLangTypeId,
      objvUserCodePrjMainPathCond.progLangTypeId,
      strComparisonOpProgLangTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_UserId,
      objvUserCodePrjMainPathCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_UserName,
    ) == true
  ) {
    const strComparisonOpUserName: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_UserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_UserName,
      objvUserCodePrjMainPathCond.userName,
      strComparisonOpUserName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_DepartmentId,
    ) == true
  ) {
    const strComparisonOpDepartmentId: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_DepartmentId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_DepartmentId,
      objvUserCodePrjMainPathCond.departmentId,
      strComparisonOpDepartmentId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_DepartmentName,
    ) == true
  ) {
    const strComparisonOpDepartmentName: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_DepartmentName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_DepartmentName,
      objvUserCodePrjMainPathCond.departmentName,
      strComparisonOpDepartmentName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_UserStateId,
    ) == true
  ) {
    const strComparisonOpUserStateId: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_UserStateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_UserStateId,
      objvUserCodePrjMainPathCond.userStateId,
      strComparisonOpUserStateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_UserStateName,
    ) == true
  ) {
    const strComparisonOpUserStateName: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_UserStateName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_UserStateName,
      objvUserCodePrjMainPathCond.userStateName,
      strComparisonOpUserStateName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_IsUsePrjMainPath,
    ) == true
  ) {
    if (objvUserCodePrjMainPathCond.isUsePrjMainPath == true) {
      strWhereCond += Format(" And {0} = '1'", clsvUserCodePrjMainPathEN.con_IsUsePrjMainPath);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvUserCodePrjMainPathEN.con_IsUsePrjMainPath);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_IncludeXmlPath,
    ) == true
  ) {
    const strComparisonOpIncludeXmlPath: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_IncludeXmlPath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_IncludeXmlPath,
      objvUserCodePrjMainPathCond.includeXmlPath,
      strComparisonOpIncludeXmlPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_IsTemplate,
    ) == true
  ) {
    if (objvUserCodePrjMainPathCond.isTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsvUserCodePrjMainPathEN.con_IsTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvUserCodePrjMainPathEN.con_IsTemplate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_InUse,
    ) == true
  ) {
    if (objvUserCodePrjMainPathCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsvUserCodePrjMainPathEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvUserCodePrjMainPathEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_UpdDate,
      objvUserCodePrjMainPathCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_UpdUserId,
      objvUserCodePrjMainPathCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_Memo,
      objvUserCodePrjMainPathCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_ApplicationTypeSimName,
    ) == true
  ) {
    const strComparisonOpApplicationTypeSimName: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[
        clsvUserCodePrjMainPathEN.con_ApplicationTypeSimName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_ApplicationTypeSimName,
      objvUserCodePrjMainPathCond.applicationTypeSimName,
      strComparisonOpApplicationTypeSimName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_CmPrjName,
    ) == true
  ) {
    const strComparisonOpCmPrjName: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_CmPrjName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_CmPrjName,
      objvUserCodePrjMainPathCond.cmPrjName,
      strComparisonOpCmPrjName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_ApplicationTypeName,
    ) == true
  ) {
    const strComparisonOpApplicationTypeName: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[
        clsvUserCodePrjMainPathEN.con_ApplicationTypeName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_ApplicationTypeName,
      objvUserCodePrjMainPathCond.applicationTypeName,
      strComparisonOpApplicationTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[
        clsvUserCodePrjMainPathEN.con_ApplicationTypeId
      ];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvUserCodePrjMainPathEN.con_ApplicationTypeId,
      objvUserCodePrjMainPathCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePrjMainPathEN.con_CmPrjId,
      objvUserCodePrjMainPathCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_AppOrderNum,
    ) == true
  ) {
    const strComparisonOpAppOrderNum: string =
      objvUserCodePrjMainPathCond.dicFldComparisonOp[clsvUserCodePrjMainPathEN.con_AppOrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvUserCodePrjMainPathEN.con_AppOrderNum,
      objvUserCodePrjMainPathCond.appOrderNum,
      strComparisonOpAppOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePrjMainPathCond.dicFldComparisonOp,
      clsvUserCodePrjMainPathEN.con_AppIsVisible,
    ) == true
  ) {
    if (objvUserCodePrjMainPathCond.appIsVisible == true) {
      strWhereCond += Format(" And {0} = '1'", clsvUserCodePrjMainPathEN.con_AppIsVisible);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvUserCodePrjMainPathEN.con_AppIsVisible);
    }
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvUserCodePrjMainPathENS:源对象
 * @param objvUserCodePrjMainPathENT:目标对象
 */
export function vUserCodePrjMainPath_GetObjFromJsonObj(
  objvUserCodePrjMainPathENS: clsvUserCodePrjMainPathEN,
): clsvUserCodePrjMainPathEN {
  const objvUserCodePrjMainPathENT: clsvUserCodePrjMainPathEN = new clsvUserCodePrjMainPathEN();
  ObjectAssign(objvUserCodePrjMainPathENT, objvUserCodePrjMainPathENS);
  return objvUserCodePrjMainPathENT;
}
