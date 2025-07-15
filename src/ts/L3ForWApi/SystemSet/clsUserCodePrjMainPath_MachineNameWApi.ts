/**
 * 类名:clsUserCodePrjMainPath_MachineNameWApi
 * 表名:UserCodePrjMainPath_MachineName(00050614)
 * 版本:2024.08.31.1(服务器:WIN-SRV103-116)
 * 日期:2024/09/04 18:07:31
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
 * 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年09月04日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsUserCodePrjMainPath_MachineNameEN } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPath_MachineNameEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const userCodePrjMainPath_MachineName_Controller = 'UserCodePrjMainPath_MachineNameApi';
export const userCodePrjMainPath_MachineName_ConstructorName = 'userCodePrjMainPath_MachineName';

/**
 * 把多关键字值分解为单独关键字的值,并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export function UserCodePrjMainPath_MachineName_SplitKeyLst(strKeyLst: string) {
  const arrKey = strKeyLst.split('|');
  if (arrKey.length != 2) {
    const strMsg = '请选择需要修改的记录!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  const objKeyLst = {
    userCodePrjMainPathId: arrKey[0],
    machineName: arrKey[1],
  };
  if (IsNullOrEmpty(objKeyLst.userCodePrjMainPathId) == true) {
    const strMsg = '关键字段(userCodePrjMainPathId)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(objKeyLst.machineName) == true) {
    const strMsg = '关键字段(machineName)值不能为空!';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  return objKeyLst;
}
/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserCodePrjMainPathId:关键字
 * @returns 对象
 **/
export async function UserCodePrjMainPath_MachineName_GetObjByKeyLstAsync(
  strUserCodePrjMainPathId: string,
  strMachineName: string,
): Promise<clsUserCodePrjMainPath_MachineNameEN | null> {
  const strThisFuncName = 'GetObjByKeyLstAsync';

  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    const strMsg = Format(
      '参数:[strUserCodePrjMainPathId]不能为空!(In clsUserCodePrjMainPath_MachineNameWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserCodePrjMainPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strUserCodePrjMainPathId]的长度:[{0}]不正确!(clsUserCodePrjMainPath_MachineNameWApi.GetObjByKeyLstAsync)',
      strUserCodePrjMainPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strMachineName) == true) {
    const strMsg = Format(
      '参数:[strMachineName]不能为空!(In clsUserCodePrjMainPath_MachineNameWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyLst';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserCodePrjMainPathId,
      strMachineName,
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
      const objUserCodePrjMainPath_MachineName =
        UserCodePrjMainPath_MachineName_GetObjFromJsonObj(returnObj);
      return objUserCodePrjMainPath_MachineName;
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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_GetObjByKeyLstCache(
  strUserCodePrjMainPathId: string,
  strMachineName: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByKeyLstCache';

  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    const strMsg = Format(
      '参数:[strUserCodePrjMainPathId]不能为空!(In clsUserCodePrjMainPath_MachineNameWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserCodePrjMainPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strUserCodePrjMainPathId]的长度:[{0}]不正确!(clsUserCodePrjMainPath_MachineNameWApi.GetObjByKeyLstCache)',
      strUserCodePrjMainPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strMachineName) == true) {
    const strMsg = Format(
      '参数:[strMachineName]不能为空!(In clsUserCodePrjMainPath_MachineNameWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrUserCodePrjMainPath_MachineNameObjLstCache =
    await UserCodePrjMainPath_MachineName_GetObjLstCache(strPrjId);
  try {
    const arrUserCodePrjMainPath_MachineNameSel =
      arrUserCodePrjMainPath_MachineNameObjLstCache.filter(
        (x) =>
          x.userCodePrjMainPathId == strUserCodePrjMainPathId && x.machineName == strMachineName,
      );
    let objUserCodePrjMainPath_MachineName: clsUserCodePrjMainPath_MachineNameEN;
    if (arrUserCodePrjMainPath_MachineNameSel.length > 0) {
      objUserCodePrjMainPath_MachineName = arrUserCodePrjMainPath_MachineNameSel[0];
      return objUserCodePrjMainPath_MachineName;
    } else {
      if (bolTryAsyncOnce == true) {
        const objUserCodePrjMainPath_MachineNameConst =
          await UserCodePrjMainPath_MachineName_GetObjByKeyLstAsync(
            strUserCodePrjMainPathId,
            strMachineName,
          );
        if (objUserCodePrjMainPath_MachineNameConst != null) {
          UserCodePrjMainPath_MachineName_ReFreshThisCache(strPrjId);
          return objUserCodePrjMainPath_MachineNameConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserCodePrjMainPathId,
      userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_GetObjByKeyLstlocalStorage(
  strUserCodePrjMainPathId: string,
  strMachineName: string,
) {
  const strThisFuncName = 'GetObjByKeyLstlocalStorage';

  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    const strMsg = Format(
      '参数:[strUserCodePrjMainPathId]不能为空!(In clsUserCodePrjMainPath_MachineNameWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserCodePrjMainPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strUserCodePrjMainPathId]的长度:[{0}]不正确!(clsUserCodePrjMainPath_MachineNameWApi.GetObjByKeyLstlocalStorage)',
      strUserCodePrjMainPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strMachineName) == true) {
    const strMsg = Format(
      '参数:[strMachineName]不能为空!(In clsUserCodePrjMainPath_MachineNameWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format(
    '{0}_{1}',
    clsUserCodePrjMainPath_MachineNameEN._CurrTabName,
    strUserCodePrjMainPathId,
  );
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objUserCodePrjMainPath_MachineNameCache: clsUserCodePrjMainPath_MachineNameEN =
      JSON.parse(strTempObj);
    return objUserCodePrjMainPath_MachineNameCache;
  }
  try {
    const objUserCodePrjMainPath_MachineName =
      await UserCodePrjMainPath_MachineName_GetObjByKeyLstAsync(
        strUserCodePrjMainPathId,
        strMachineName,
      );
    if (objUserCodePrjMainPath_MachineName != null) {
      localStorage.setItem(strKey, JSON.stringify(objUserCodePrjMainPath_MachineName));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objUserCodePrjMainPath_MachineName;
    }
    return objUserCodePrjMainPath_MachineName;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserCodePrjMainPathId,
      userCodePrjMainPath_MachineName_ConstructorName,
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
 * @param objUserCodePrjMainPath_MachineName:所给的对象
 * @returns 对象
 */
export async function UserCodePrjMainPath_MachineName_UpdateObjInLstCache(
  objUserCodePrjMainPath_MachineName: clsUserCodePrjMainPath_MachineNameEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrUserCodePrjMainPath_MachineNameObjLstCache =
      await UserCodePrjMainPath_MachineName_GetObjLstCache(strPrjId);
    const obj = arrUserCodePrjMainPath_MachineNameObjLstCache.find(
      (x) =>
        x.userCodePrjMainPathId == objUserCodePrjMainPath_MachineName.userCodePrjMainPathId &&
        x.machineName == objUserCodePrjMainPath_MachineName.machineName,
    );
    if (obj != null) {
      objUserCodePrjMainPath_MachineName.userCodePrjMainPathId = obj.userCodePrjMainPathId;
      ObjectAssign(obj, objUserCodePrjMainPath_MachineName);
    } else {
      arrUserCodePrjMainPath_MachineNameObjLstCache.push(objUserCodePrjMainPath_MachineName);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      userCodePrjMainPath_MachineName_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/*该表没有名称字段,不能生成此函数!*/

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
export async function UserCodePrjMainPath_MachineName_func(
  strInFldName1: string,
  strInFldName2: string,
  strOutFldName: string,
  strInValue1: string,
  strInValue2: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strPrjIdClassfy]不能为空!(In clsUserCodePrjMainPath_MachineNameWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsUserCodePrjMainPath_MachineNameWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName1 != clsUserCodePrjMainPath_MachineNameEN.con_UserCodePrjMainPathId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName1);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName2 != clsUserCodePrjMainPath_MachineNameEN.con_MachineName) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName2);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsUserCodePrjMainPath_MachineNameEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsUserCodePrjMainPath_MachineNameEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strUserCodePrjMainPathId = strInValue1;
  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    return '';
  }
  const strMachineName = strInValue2;
  if (IsNullOrEmpty(strMachineName) == true) {
    return '';
  }
  const objUserCodePrjMainPath_MachineName =
    await UserCodePrjMainPath_MachineName_GetObjByKeyLstCache(
      strUserCodePrjMainPathId,
      strMachineName,
      strPrjIdClassfy,
    );
  if (objUserCodePrjMainPath_MachineName == null) return '';
  if (objUserCodePrjMainPath_MachineName.GetFldValue(strOutFldName) == null) return '';
  return objUserCodePrjMainPath_MachineName.GetFldValue(strOutFldName).toString();
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
export function UserCodePrjMainPath_MachineName_SortFunDefa(
  a: clsUserCodePrjMainPath_MachineNameEN,
  b: clsUserCodePrjMainPath_MachineNameEN,
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
export function UserCodePrjMainPath_MachineName_SortFunDefa2Fld(
  a: clsUserCodePrjMainPath_MachineNameEN,
  b: clsUserCodePrjMainPath_MachineNameEN,
): number {
  if (a.codePath == b.codePath) return a.gcPathId.localeCompare(b.gcPathId);
  else return a.codePath.localeCompare(b.codePath);
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
export function UserCodePrjMainPath_MachineName_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserCodePrjMainPath_MachineNameEN.con_UserCodePrjMainPathId:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          return a.userCodePrjMainPathId.localeCompare(b.userCodePrjMainPathId);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_MachineName:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          return a.machineName.localeCompare(b.machineName);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_CodePath:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          return a.codePath.localeCompare(b.codePath);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_GcPathId:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          if (a.gcPathId == null) return -1;
          if (b.gcPathId == null) return 1;
          return a.gcPathId.localeCompare(b.gcPathId);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_CodePathBackup:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          return a.codePathBackup.localeCompare(b.codePathBackup);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_LogPath:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          if (a.logPath == null) return -1;
          if (b.logPath == null) return 1;
          return a.logPath.localeCompare(b.logPath);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_IncludeXmlPath:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          if (a.includeXmlPath == null) return -1;
          if (b.includeXmlPath == null) return 1;
          return a.includeXmlPath.localeCompare(b.includeXmlPath);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_PrjId:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_UpdDate:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_UpdUserId:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_Memo:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserCodePrjMainPath_MachineName]中不存在!(in ${userCodePrjMainPath_MachineName_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsUserCodePrjMainPath_MachineNameEN.con_UserCodePrjMainPathId:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          return b.userCodePrjMainPathId.localeCompare(a.userCodePrjMainPathId);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_MachineName:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          return b.machineName.localeCompare(a.machineName);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_CodePath:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          return b.codePath.localeCompare(a.codePath);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_GcPathId:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          if (b.gcPathId == null) return -1;
          if (a.gcPathId == null) return 1;
          return b.gcPathId.localeCompare(a.gcPathId);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_CodePathBackup:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          return b.codePathBackup.localeCompare(a.codePathBackup);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_LogPath:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          if (b.logPath == null) return -1;
          if (a.logPath == null) return 1;
          return b.logPath.localeCompare(a.logPath);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_IncludeXmlPath:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          if (b.includeXmlPath == null) return -1;
          if (a.includeXmlPath == null) return 1;
          return b.includeXmlPath.localeCompare(a.includeXmlPath);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_PrjId:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_UpdDate:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_UpdUserId:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsUserCodePrjMainPath_MachineNameEN.con_Memo:
        return (
          a: clsUserCodePrjMainPath_MachineNameEN,
          b: clsUserCodePrjMainPath_MachineNameEN,
        ) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserCodePrjMainPath_MachineName]中不存在!(in ${userCodePrjMainPath_MachineName_ConstructorName}.${strThisFuncName})`;
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
export async function UserCodePrjMainPath_MachineName_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsUserCodePrjMainPath_MachineNameEN.con_UserCodePrjMainPathId:
      return (obj: clsUserCodePrjMainPath_MachineNameEN) => {
        return obj.userCodePrjMainPathId === value;
      };
    case clsUserCodePrjMainPath_MachineNameEN.con_MachineName:
      return (obj: clsUserCodePrjMainPath_MachineNameEN) => {
        return obj.machineName === value;
      };
    case clsUserCodePrjMainPath_MachineNameEN.con_CodePath:
      return (obj: clsUserCodePrjMainPath_MachineNameEN) => {
        return obj.codePath === value;
      };
    case clsUserCodePrjMainPath_MachineNameEN.con_GcPathId:
      return (obj: clsUserCodePrjMainPath_MachineNameEN) => {
        return obj.gcPathId === value;
      };
    case clsUserCodePrjMainPath_MachineNameEN.con_CodePathBackup:
      return (obj: clsUserCodePrjMainPath_MachineNameEN) => {
        return obj.codePathBackup === value;
      };
    case clsUserCodePrjMainPath_MachineNameEN.con_LogPath:
      return (obj: clsUserCodePrjMainPath_MachineNameEN) => {
        return obj.logPath === value;
      };
    case clsUserCodePrjMainPath_MachineNameEN.con_IncludeXmlPath:
      return (obj: clsUserCodePrjMainPath_MachineNameEN) => {
        return obj.includeXmlPath === value;
      };
    case clsUserCodePrjMainPath_MachineNameEN.con_PrjId:
      return (obj: clsUserCodePrjMainPath_MachineNameEN) => {
        return obj.prjId === value;
      };
    case clsUserCodePrjMainPath_MachineNameEN.con_UpdDate:
      return (obj: clsUserCodePrjMainPath_MachineNameEN) => {
        return obj.updDate === value;
      };
    case clsUserCodePrjMainPath_MachineNameEN.con_UpdUserId:
      return (obj: clsUserCodePrjMainPath_MachineNameEN) => {
        return obj.updUserId === value;
      };
    case clsUserCodePrjMainPath_MachineNameEN.con_Memo:
      return (obj: clsUserCodePrjMainPath_MachineNameEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[UserCodePrjMainPath_MachineName]中不存在!(in ${userCodePrjMainPath_MachineName_ConstructorName}.${strThisFuncName})`;
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
export async function UserCodePrjMainPath_MachineName_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strPrjIdClassfy]不能为空!(In clsUserCodePrjMainPath_MachineNameWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsUserCodePrjMainPath_MachineNameWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsUserCodePrjMainPath_MachineNameEN.con_UserCodePrjMainPathId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName == clsUserCodePrjMainPath_MachineNameEN.con_MachineName) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrUserCodePrjMainPath_MachineName = await UserCodePrjMainPath_MachineName_GetObjLstCache(
    strPrjIdClassfy,
  );
  if (arrUserCodePrjMainPath_MachineName == null) return [];
  let arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineName;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrUserCodePrjMainPath_MachineNameSel.length == 0) return [];
  return arrUserCodePrjMainPath_MachineName.map(
    (x) => `${x.userCodePrjMainPathId}|${x.machineName}`,
  );
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserCodePrjMainPath_MachineName_GetFirstIDAsync(
  strWhereCond: string,
): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsUserCodePrjMainPath_MachineNameEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

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
      const objUserCodePrjMainPath_MachineName =
        UserCodePrjMainPath_MachineName_GetObjFromJsonObj(returnObj);
      return objUserCodePrjMainPath_MachineName;
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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsUserCodePrjMainPath_MachineNameEN.WhereFormat) == false) {
    strWhereCond = Format(clsUserCodePrjMainPath_MachineNameEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPath_MachineNameEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsUserCodePrjMainPath_MachineNameEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserCodePrjMainPath_MachineNameEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrUserCodePrjMainPath_MachineNameExObjLstCache: Array<clsUserCodePrjMainPath_MachineNameEN> =
      CacheHelper.Get(strKey);
    const arrUserCodePrjMainPath_MachineNameObjLstT =
      UserCodePrjMainPath_MachineName_GetObjLstByJSONObjLst(
        arrUserCodePrjMainPath_MachineNameExObjLstCache,
      );
    return arrUserCodePrjMainPath_MachineNameObjLstT;
  }
  try {
    const arrUserCodePrjMainPath_MachineNameExObjLst =
      await UserCodePrjMainPath_MachineName_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrUserCodePrjMainPath_MachineNameExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUserCodePrjMainPath_MachineNameExObjLst.length,
    );
    console.log(strInfo);
    return arrUserCodePrjMainPath_MachineNameExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsUserCodePrjMainPath_MachineNameEN.WhereFormat) == false) {
    strWhereCond = Format(clsUserCodePrjMainPath_MachineNameEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsUserCodePrjMainPath_MachineNameEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPath_MachineNameEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsUserCodePrjMainPath_MachineNameEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserCodePrjMainPath_MachineNameEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrUserCodePrjMainPath_MachineNameExObjLstCache: Array<clsUserCodePrjMainPath_MachineNameEN> =
      JSON.parse(strTempObjLst);
    const arrUserCodePrjMainPath_MachineNameObjLstT =
      UserCodePrjMainPath_MachineName_GetObjLstByJSONObjLst(
        arrUserCodePrjMainPath_MachineNameExObjLstCache,
      );
    return arrUserCodePrjMainPath_MachineNameObjLstT;
  }
  try {
    const arrUserCodePrjMainPath_MachineNameExObjLst =
      await UserCodePrjMainPath_MachineName_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsUserCodePrjMainPath_MachineNameEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrUserCodePrjMainPath_MachineNameExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUserCodePrjMainPath_MachineNameExObjLst.length,
    );
    console.log(strInfo);
    return arrUserCodePrjMainPath_MachineNameExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_GetObjLstlocalStoragePureCache(
  strPrjId: string,
) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPath_MachineNameEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrUserCodePrjMainPath_MachineNameObjLstCache: Array<clsUserCodePrjMainPath_MachineNameEN> =
      JSON.parse(strTempObjLst);
    return arrUserCodePrjMainPath_MachineNameObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function UserCodePrjMainPath_MachineName_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsUserCodePrjMainPath_MachineNameEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

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
          userCodePrjMainPath_MachineName_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePrjMainPath_MachineName_GetObjLstByJSONObjLst(returnObjLst);
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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsUserCodePrjMainPath_MachineNameEN.WhereFormat) == false) {
    strWhereCond = Format(clsUserCodePrjMainPath_MachineNameEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsUserCodePrjMainPath_MachineNameEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPath_MachineNameEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsUserCodePrjMainPath_MachineNameEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserCodePrjMainPath_MachineNameEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrUserCodePrjMainPath_MachineNameExObjLstCache: Array<clsUserCodePrjMainPath_MachineNameEN> =
      JSON.parse(strTempObjLst);
    const arrUserCodePrjMainPath_MachineNameObjLstT =
      UserCodePrjMainPath_MachineName_GetObjLstByJSONObjLst(
        arrUserCodePrjMainPath_MachineNameExObjLstCache,
      );
    return arrUserCodePrjMainPath_MachineNameObjLstT;
  }
  try {
    const arrUserCodePrjMainPath_MachineNameExObjLst =
      await UserCodePrjMainPath_MachineName_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsUserCodePrjMainPath_MachineNameEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrUserCodePrjMainPath_MachineNameExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUserCodePrjMainPath_MachineNameExObjLst.length,
    );
    console.log(strInfo);
    return arrUserCodePrjMainPath_MachineNameExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_GetObjLstsessionStoragePureCache(
  strPrjId: string,
) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPath_MachineNameEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrUserCodePrjMainPath_MachineNameObjLstCache: Array<clsUserCodePrjMainPath_MachineNameEN> =
      JSON.parse(strTempObjLst);
    return arrUserCodePrjMainPath_MachineNameObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserCodePrjMainPath_MachineName_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsUserCodePrjMainPath_MachineNameEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsUserCodePrjMainPath_MachineNameWApi.UserCodePrjMainPath_MachineName_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsUserCodePrjMainPath_MachineNameWApi.UserCodePrjMainPath_MachineName_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrUserCodePrjMainPath_MachineNameObjLstCache;
  switch (clsUserCodePrjMainPath_MachineNameEN.CacheModeId) {
    case '04': //sessionStorage
      arrUserCodePrjMainPath_MachineNameObjLstCache =
        await UserCodePrjMainPath_MachineName_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrUserCodePrjMainPath_MachineNameObjLstCache =
        await UserCodePrjMainPath_MachineName_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrUserCodePrjMainPath_MachineNameObjLstCache =
        await UserCodePrjMainPath_MachineName_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrUserCodePrjMainPath_MachineNameObjLstCache =
        await UserCodePrjMainPath_MachineName_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrUserCodePrjMainPath_MachineNameObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserCodePrjMainPath_MachineName_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrUserCodePrjMainPath_MachineNameObjLstCache;
  switch (clsUserCodePrjMainPath_MachineNameEN.CacheModeId) {
    case '04': //sessionStorage
      arrUserCodePrjMainPath_MachineNameObjLstCache =
        await UserCodePrjMainPath_MachineName_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrUserCodePrjMainPath_MachineNameObjLstCache =
        await UserCodePrjMainPath_MachineName_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrUserCodePrjMainPath_MachineNameObjLstCache = null;
      break;
    default:
      arrUserCodePrjMainPath_MachineNameObjLstCache = null;
      break;
  }
  return arrUserCodePrjMainPath_MachineNameObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrUserCodePrjMainPathIdCond:条件对象
 * @returns 对象列表子集
 */
export async function UserCodePrjMainPath_MachineName_GetSubObjLstCache(
  objUserCodePrjMainPath_MachineNameCond: clsUserCodePrjMainPath_MachineNameEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrUserCodePrjMainPath_MachineNameObjLstCache =
    await UserCodePrjMainPath_MachineName_GetObjLstCache(strPrjId);
  let arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameObjLstCache;
  if (
    objUserCodePrjMainPath_MachineNameCond.sfFldComparisonOp == null ||
    objUserCodePrjMainPath_MachineNameCond.sfFldComparisonOp == ''
  )
    return arrUserCodePrjMainPath_MachineNameSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objUserCodePrjMainPath_MachineNameCond.sfFldComparisonOp,
  );
  //console.log("clsUserCodePrjMainPath_MachineNameWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objUserCodePrjMainPath_MachineNameCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserCodePrjMainPath_MachineNameCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrUserCodePrjMainPath_MachineNameSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objUserCodePrjMainPath_MachineNameCond),
      userCodePrjMainPath_MachineName_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserCodePrjMainPath_MachineNameEN>();
}

/// <summary>
/// 把多个关键字段的值连接起来,用|连接(Join)--UserCodePrjMainPath_MachineName(用户生成项目主路径_PC)
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_JoinByKeyLst)
/// </summary>
/// <param name = "objUserCodePrjMainPath_MachineNameEN">需要连接的对象</param>
/// <returns></returns>
export function UserCodePrjMainPath_MachineName_JoinByKeyLst(
  objUserCodePrjMainPath_MachineNameEN: clsUserCodePrjMainPath_MachineNameEN,
): string {
  //检测记录是否存在
  const strResult = `${objUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId}|${objUserCodePrjMainPath_MachineNameEN.machineName}`;
  return strResult;
}
/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrUserCodePrjMainPathIdLst:关键字列表
 * @returns 对象列表
 */
export async function UserCodePrjMainPath_MachineName_GetObjLstByKeyLstsCache(
  arrKeysLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByKeyLstsCache';
  try {
    const arrUserCodePrjMainPath_MachineNameObjLstCache =
      await UserCodePrjMainPath_MachineName_GetObjLstCache(strPrjId);
    const arrUserCodePrjMainPath_MachineNameSel =
      arrUserCodePrjMainPath_MachineNameObjLstCache.filter(
        (x) => arrKeysLst.indexOf(UserCodePrjMainPath_MachineName_JoinByKeyLst(x)) > -1,
      );
    return arrUserCodePrjMainPath_MachineNameSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrKeysLst.join(','),
      userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsUserCodePrjMainPath_MachineNameEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

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
          userCodePrjMainPath_MachineName_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePrjMainPath_MachineName_GetObjLstByJSONObjLst(returnObjLst);
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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsUserCodePrjMainPath_MachineNameEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

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
          userCodePrjMainPath_MachineName_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePrjMainPath_MachineName_GetObjLstByJSONObjLst(returnObjLst);
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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsUserCodePrjMainPath_MachineNameEN>();
  const arrUserCodePrjMainPath_MachineNameObjLstCache =
    await UserCodePrjMainPath_MachineName_GetObjLstCache(strPrjId);
  if (arrUserCodePrjMainPath_MachineNameObjLstCache.length == 0)
    return arrUserCodePrjMainPath_MachineNameObjLstCache;
  let arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objUserCodePrjMainPath_MachineNameCond = new clsUserCodePrjMainPath_MachineNameEN();
  ObjectAssign(objUserCodePrjMainPath_MachineNameCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsUserCodePrjMainPath_MachineNameWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserCodePrjMainPath_MachineNameCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrUserCodePrjMainPath_MachineNameSel.length == 0)
      return arrUserCodePrjMainPath_MachineNameSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.sort(
        UserCodePrjMainPath_MachineName_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.sort(
        objPagerPara.sortFun,
      );
    }
    arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.slice(
      intStart,
      intEnd,
    );
    return arrUserCodePrjMainPath_MachineNameSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      userCodePrjMainPath_MachineName_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserCodePrjMainPath_MachineNameEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function UserCodePrjMainPath_MachineName_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUserCodePrjMainPath_MachineNameEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsUserCodePrjMainPath_MachineNameEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

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
          userCodePrjMainPath_MachineName_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePrjMainPath_MachineName_GetObjLstByJSONObjLst(returnObjLst);
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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
 * @param strUserCodePrjMainPathId,strMachineName:关键字列表
 * @returns 获取删除的结果
 **/
export async function UserCodePrjMainPath_MachineName_DelRecKeyLstAsync(
  strUserCodePrjMainPathId: string,
  strMachineName: string,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstAsync';
  const strAction = 'DelRecKeyLst';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserCodePrjMainPathId,
      strMachineName,
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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
 * @param arrKeyLsts:关键字列表, 关键字是多个字段的组合
 * @returns 实际删除记录的个数
 **/
export async function UserCodePrjMainPath_MachineName_DelRecKeyLstsAsync(
  arrKeyLsts: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstsAsync';
  const strAction = 'DelRecKeyLsts';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrKeyLsts, config);
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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_DelUserCodePrjMainPath_MachineNamesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelUserCodePrjMainPath_MachineNamesByCondAsync';
  const strAction = 'DelUserCodePrjMainPath_MachineNamesByCond';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
 * @param objUserCodePrjMainPath_MachineNameEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserCodePrjMainPath_MachineName_AddNewRecordAsync(
  objUserCodePrjMainPath_MachineNameEN: clsUserCodePrjMainPath_MachineNameEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (
    objUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId === null ||
    objUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId === ''
  ) {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objUserCodePrjMainPath_MachineNameEN);
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPath_MachineNameEN, config);
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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
 * @param objUserCodePrjMainPath_MachineNameEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserCodePrjMainPath_MachineName_AddNewRecordWithMaxIdAsync(
  objUserCodePrjMainPath_MachineNameEN: clsUserCodePrjMainPath_MachineNameEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPath_MachineNameEN, config);
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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
 * @param objUserCodePrjMainPath_MachineNameEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function UserCodePrjMainPath_MachineName_AddNewRecordWithReturnKeyAsync(
  objUserCodePrjMainPath_MachineNameEN: clsUserCodePrjMainPath_MachineNameEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPath_MachineNameEN, config);
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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
 * @param objUserCodePrjMainPath_MachineNameEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function UserCodePrjMainPath_MachineName_UpdateRecordAsync(
  objUserCodePrjMainPath_MachineNameEN: clsUserCodePrjMainPath_MachineNameEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objUserCodePrjMainPath_MachineNameEN.sfUpdFldSetStr === undefined ||
    objUserCodePrjMainPath_MachineNameEN.sfUpdFldSetStr === null ||
    objUserCodePrjMainPath_MachineNameEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPath_MachineNameEN, config);
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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
 * @param objUserCodePrjMainPath_MachineNameEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserCodePrjMainPath_MachineName_UpdateWithConditionAsync(
  objUserCodePrjMainPath_MachineNameEN: clsUserCodePrjMainPath_MachineNameEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objUserCodePrjMainPath_MachineNameEN.sfUpdFldSetStr === undefined ||
    objUserCodePrjMainPath_MachineNameEN.sfUpdFldSetStr === null ||
    objUserCodePrjMainPath_MachineNameEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);
  objUserCodePrjMainPath_MachineNameEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPath_MachineNameEN, config);
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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_IsExistRecordCache(
  objUserCodePrjMainPath_MachineNameCond: clsUserCodePrjMainPath_MachineNameEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrUserCodePrjMainPath_MachineNameObjLstCache =
    await UserCodePrjMainPath_MachineName_GetObjLstCache(strPrjId);
  if (arrUserCodePrjMainPath_MachineNameObjLstCache == null) return false;
  let arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameObjLstCache;
  if (
    objUserCodePrjMainPath_MachineNameCond.sfFldComparisonOp == null ||
    objUserCodePrjMainPath_MachineNameCond.sfFldComparisonOp == ''
  )
    return arrUserCodePrjMainPath_MachineNameSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objUserCodePrjMainPath_MachineNameCond.sfFldComparisonOp,
  );
  //console.log("clsUserCodePrjMainPath_MachineNameWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objUserCodePrjMainPath_MachineNameCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserCodePrjMainPath_MachineNameCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrUserCodePrjMainPath_MachineNameSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objUserCodePrjMainPath_MachineNameCond),
      userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_IsExistCache(
  strUserCodePrjMainPathId: string,
  strMachineName: string,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrUserCodePrjMainPath_MachineNameObjLstCache =
    await UserCodePrjMainPath_MachineName_GetObjLstCache(strPrjId);
  if (arrUserCodePrjMainPath_MachineNameObjLstCache == null) return false;
  try {
    const arrUserCodePrjMainPath_MachineNameSel =
      arrUserCodePrjMainPath_MachineNameObjLstCache.filter(
        (x) =>
          x.userCodePrjMainPathId == strUserCodePrjMainPathId && x.machineName == strMachineName,
      );
    if (arrUserCodePrjMainPath_MachineNameSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strUserCodePrjMainPathId,
      userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_IsExistAsync(
  strUserCodePrjMainPathId: string,
  strMachineName: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserCodePrjMainPathId,
      strMachineName,
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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
 * @param objUserCodePrjMainPath_MachineNameCond:条件对象
 * @returns 对象列表记录数
 */
export async function UserCodePrjMainPath_MachineName_GetRecCountByCondCache(
  objUserCodePrjMainPath_MachineNameCond: clsUserCodePrjMainPath_MachineNameEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrUserCodePrjMainPath_MachineNameObjLstCache =
    await UserCodePrjMainPath_MachineName_GetObjLstCache(strPrjId);
  if (arrUserCodePrjMainPath_MachineNameObjLstCache == null) return 0;
  let arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameObjLstCache;
  if (
    objUserCodePrjMainPath_MachineNameCond.sfFldComparisonOp == null ||
    objUserCodePrjMainPath_MachineNameCond.sfFldComparisonOp == ''
  )
    return arrUserCodePrjMainPath_MachineNameSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objUserCodePrjMainPath_MachineNameCond.sfFldComparisonOp,
  );
  //console.log("clsUserCodePrjMainPath_MachineNameWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objUserCodePrjMainPath_MachineNameCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserCodePrjMainPath_MachineNameCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrUserCodePrjMainPath_MachineNameSel = arrUserCodePrjMainPath_MachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrUserCodePrjMainPath_MachineNameSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objUserCodePrjMainPath_MachineNameCond),
      userCodePrjMainPath_MachineName_ConstructorName,
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
export async function UserCodePrjMainPath_MachineName_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(userCodePrjMainPath_MachineName_Controller, strAction);

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
        userCodePrjMainPath_MachineName_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userCodePrjMainPath_MachineName_ConstructorName,
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
export function UserCodePrjMainPath_MachineName_GetWebApiUrl(
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
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export function UserCodePrjMainPath_MachineName_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsUserCodePrjMainPath_MachineNameWApi.clsUserCodePrjMainPath_MachineNameWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsUserCodePrjMainPath_MachineNameWApi.clsUserCodePrjMainPath_MachineNameWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPath_MachineNameEN._CurrTabName, strPrjId);
  switch (clsUserCodePrjMainPath_MachineNameEN.CacheModeId) {
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
export function UserCodePrjMainPath_MachineName_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsUserCodePrjMainPath_MachineNameWApi.UserCodePrjMainPath_MachineName_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsUserCodePrjMainPath_MachineNameWApi.UserCodePrjMainPath_MachineName_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsUserCodePrjMainPath_MachineNameEN._CurrTabName, strPrjId);
    switch (clsUserCodePrjMainPath_MachineNameEN.CacheModeId) {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function UserCodePrjMainPath_MachineName_CheckPropertyNew(
  pobjUserCodePrjMainPath_MachineNameEN: clsUserCodePrjMainPath_MachineNameEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.codePath) === true) {
    throw new Error(
      `(errid:Watl000411)字段[代码路径]不能为空(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.codePathBackup) === true) {
    throw new Error(
      `(errid:Watl000411)字段[备份代码路径]不能为空(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.prjId) === true ||
    pobjUserCodePrjMainPath_MachineNameEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程ID]不能为空(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[生成主目录Id(userCodePrjMainPathId)]的长度不能超过8(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId}(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.machineName) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.machineName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[机器名(machineName)]的长度不能超过50(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.machineName}(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.codePath) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.codePath) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[代码路径(codePath)]的长度不能超过200(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.codePath}(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.gcPathId) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.gcPathId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[GC路径Id(gcPathId)]的长度不能超过8(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.gcPathId}(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.codePathBackup) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.codePathBackup) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[备份代码路径(codePathBackup)]的长度不能超过200(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.codePathBackup}(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.logPath) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.logPath) > 150
  ) {
    throw new Error(
      `(errid:Watl000413)字段[日志路径(logPath)]的长度不能超过150(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.logPath}(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.includeXmlPath) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.includeXmlPath) > 150
  ) {
    throw new Error(
      `(errid:Watl000413)字段[包含表Xml路径(includeXmlPath)]的长度不能超过150(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.includeXmlPath}(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.prjId) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.prjId}(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.updDate) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.updDate}(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.updUserId) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.updUserId}(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.memo) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.memo}(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[生成主目录Id(userCodePrjMainPathId)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.machineName) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.machineName &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.machineName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[机器名(machineName)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.machineName}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.codePath) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.codePath &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.codePath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[代码路径(codePath)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.codePath}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.gcPathId) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.gcPathId &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.gcPathId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[GC路径Id(gcPathId)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.gcPathId}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.codePathBackup) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.codePathBackup &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.codePathBackup) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[备份代码路径(codePathBackup)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.codePathBackup}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.logPath) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.logPath &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.logPath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[日志路径(logPath)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.logPath}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.includeXmlPath) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.includeXmlPath &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.includeXmlPath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[包含表Xml路径(includeXmlPath)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.includeXmlPath}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.prjId) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.prjId &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程ID(prjId)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.prjId}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.updDate) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.updDate &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.updDate}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.updUserId) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.updUserId &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.updUserId}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.memo) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.memo &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.memo}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId) == false &&
    pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId != '[nuull]' &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId) != 8
  ) {
    throw '(errid:Watl000415)字段[生成主目录Id]作为外键字段,长度应该为8(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.gcPathId) == false &&
    pobjUserCodePrjMainPath_MachineNameEN.gcPathId != '[nuull]' &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.gcPathId) != 8
  ) {
    throw '(errid:Watl000415)字段[GC路径Id]作为外键字段,长度应该为8(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function UserCodePrjMainPath_MachineName_CheckProperty4Update(
  pobjUserCodePrjMainPath_MachineNameEN: clsUserCodePrjMainPath_MachineNameEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[生成主目录Id(userCodePrjMainPathId)]的长度不能超过8(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId}(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.machineName) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.machineName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[机器名(machineName)]的长度不能超过50(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.machineName}(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.codePath) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.codePath) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[代码路径(codePath)]的长度不能超过200(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.codePath}(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.gcPathId) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.gcPathId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[GC路径Id(gcPathId)]的长度不能超过8(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.gcPathId}(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.codePathBackup) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.codePathBackup) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[备份代码路径(codePathBackup)]的长度不能超过200(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.codePathBackup}(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.logPath) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.logPath) > 150
  ) {
    throw new Error(
      `(errid:Watl000416)字段[日志路径(logPath)]的长度不能超过150(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.logPath}(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.includeXmlPath) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.includeXmlPath) > 150
  ) {
    throw new Error(
      `(errid:Watl000416)字段[包含表Xml路径(includeXmlPath)]的长度不能超过150(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.includeXmlPath}(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.prjId) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.prjId}(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.updDate) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.updDate}(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.updUserId) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.updUserId}(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.memo) == false &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!值:${pobjUserCodePrjMainPath_MachineNameEN.memo}(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[生成主目录Id(userCodePrjMainPathId)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.machineName) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.machineName &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.machineName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[机器名(machineName)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.machineName}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.codePath) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.codePath &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.codePath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[代码路径(codePath)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.codePath}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.gcPathId) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.gcPathId &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.gcPathId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[GC路径Id(gcPathId)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.gcPathId}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.codePathBackup) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.codePathBackup &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.codePathBackup) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[备份代码路径(codePathBackup)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.codePathBackup}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.logPath) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.logPath &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.logPath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[日志路径(logPath)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.logPath}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.includeXmlPath) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.includeXmlPath &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.includeXmlPath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[包含表Xml路径(includeXmlPath)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.includeXmlPath}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.prjId) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.prjId &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程ID(prjId)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.prjId}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.updDate) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.updDate &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.updDate}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.updUserId) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.updUserId &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.updUserId}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.memo) == false &&
    undefined !== pobjUserCodePrjMainPath_MachineNameEN.memo &&
    tzDataType.isString(pobjUserCodePrjMainPath_MachineNameEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjUserCodePrjMainPath_MachineNameEN.memo}], 非法,应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPath_MachineName))!(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId) === true) {
    throw new Error(
      `(errid:Watl000064)字段[生成主目录Id]不能为空(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPath_MachineNameBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId) == false &&
    pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId != '[nuull]' &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId) != 8
  ) {
    throw '(errid:Watl000418)字段[生成主目录Id]作为外键字段,长度应该为8(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPath_MachineNameEN.gcPathId) == false &&
    pobjUserCodePrjMainPath_MachineNameEN.gcPathId != '[nuull]' &&
    GetStrLen(pobjUserCodePrjMainPath_MachineNameEN.gcPathId) != 8
  ) {
    throw '(errid:Watl000418)字段[GC路径Id]作为外键字段,长度应该为8(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPath_MachineNameBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-09-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function UserCodePrjMainPath_MachineName_GetJSONStrByObj(
  pobjUserCodePrjMainPath_MachineNameEN: clsUserCodePrjMainPath_MachineNameEN,
): string {
  pobjUserCodePrjMainPath_MachineNameEN.sfUpdFldSetStr =
    pobjUserCodePrjMainPath_MachineNameEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjUserCodePrjMainPath_MachineNameEN);
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
export function UserCodePrjMainPath_MachineName_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsUserCodePrjMainPath_MachineNameEN> {
  let arrUserCodePrjMainPath_MachineNameObjLst = new Array<clsUserCodePrjMainPath_MachineNameEN>();
  if (strJSON === '') {
    return arrUserCodePrjMainPath_MachineNameObjLst;
  }
  try {
    arrUserCodePrjMainPath_MachineNameObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrUserCodePrjMainPath_MachineNameObjLst;
  }
  return arrUserCodePrjMainPath_MachineNameObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-09-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrUserCodePrjMainPath_MachineNameObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function UserCodePrjMainPath_MachineName_GetObjLstByJSONObjLst(
  arrUserCodePrjMainPath_MachineNameObjLstS: Array<clsUserCodePrjMainPath_MachineNameEN>,
): Array<clsUserCodePrjMainPath_MachineNameEN> {
  const arrUserCodePrjMainPath_MachineNameObjLst =
    new Array<clsUserCodePrjMainPath_MachineNameEN>();
  for (const objInFor of arrUserCodePrjMainPath_MachineNameObjLstS) {
    const obj1 = UserCodePrjMainPath_MachineName_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrUserCodePrjMainPath_MachineNameObjLst.push(obj1);
  }
  return arrUserCodePrjMainPath_MachineNameObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-09-04
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function UserCodePrjMainPath_MachineName_GetObjByJSONStr(
  strJSON: string,
): clsUserCodePrjMainPath_MachineNameEN {
  let pobjUserCodePrjMainPath_MachineNameEN = new clsUserCodePrjMainPath_MachineNameEN();
  if (strJSON === '') {
    return pobjUserCodePrjMainPath_MachineNameEN;
  }
  try {
    pobjUserCodePrjMainPath_MachineNameEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjUserCodePrjMainPath_MachineNameEN;
  }
  return pobjUserCodePrjMainPath_MachineNameEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function UserCodePrjMainPath_MachineName_GetCombineCondition(
  objUserCodePrjMainPath_MachineNameCond: clsUserCodePrjMainPath_MachineNameEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPath_MachineNameEN.con_UserCodePrjMainPathId,
    ) == true
  ) {
    const strComparisonOpUserCodePrjMainPathId: string =
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPath_MachineNameEN.con_UserCodePrjMainPathId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPath_MachineNameEN.con_UserCodePrjMainPathId,
      objUserCodePrjMainPath_MachineNameCond.userCodePrjMainPathId,
      strComparisonOpUserCodePrjMainPathId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPath_MachineNameEN.con_MachineName,
    ) == true
  ) {
    const strComparisonOpMachineName: string =
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPath_MachineNameEN.con_MachineName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPath_MachineNameEN.con_MachineName,
      objUserCodePrjMainPath_MachineNameCond.machineName,
      strComparisonOpMachineName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPath_MachineNameEN.con_CodePath,
    ) == true
  ) {
    const strComparisonOpCodePath: string =
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPath_MachineNameEN.con_CodePath
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPath_MachineNameEN.con_CodePath,
      objUserCodePrjMainPath_MachineNameCond.codePath,
      strComparisonOpCodePath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPath_MachineNameEN.con_GcPathId,
    ) == true
  ) {
    const strComparisonOpGcPathId: string =
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPath_MachineNameEN.con_GcPathId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPath_MachineNameEN.con_GcPathId,
      objUserCodePrjMainPath_MachineNameCond.gcPathId,
      strComparisonOpGcPathId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPath_MachineNameEN.con_CodePathBackup,
    ) == true
  ) {
    const strComparisonOpCodePathBackup: string =
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPath_MachineNameEN.con_CodePathBackup
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPath_MachineNameEN.con_CodePathBackup,
      objUserCodePrjMainPath_MachineNameCond.codePathBackup,
      strComparisonOpCodePathBackup,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPath_MachineNameEN.con_LogPath,
    ) == true
  ) {
    const strComparisonOpLogPath: string =
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPath_MachineNameEN.con_LogPath
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPath_MachineNameEN.con_LogPath,
      objUserCodePrjMainPath_MachineNameCond.logPath,
      strComparisonOpLogPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPath_MachineNameEN.con_IncludeXmlPath,
    ) == true
  ) {
    const strComparisonOpIncludeXmlPath: string =
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPath_MachineNameEN.con_IncludeXmlPath
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPath_MachineNameEN.con_IncludeXmlPath,
      objUserCodePrjMainPath_MachineNameCond.includeXmlPath,
      strComparisonOpIncludeXmlPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPath_MachineNameEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPath_MachineNameEN.con_PrjId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPath_MachineNameEN.con_PrjId,
      objUserCodePrjMainPath_MachineNameCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPath_MachineNameEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPath_MachineNameEN.con_UpdDate
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPath_MachineNameEN.con_UpdDate,
      objUserCodePrjMainPath_MachineNameCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPath_MachineNameEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPath_MachineNameEN.con_UpdUserId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPath_MachineNameEN.con_UpdUserId,
      objUserCodePrjMainPath_MachineNameCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPath_MachineNameEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objUserCodePrjMainPath_MachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPath_MachineNameEN.con_Memo
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPath_MachineNameEN.con_Memo,
      objUserCodePrjMainPath_MachineNameCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--UserCodePrjMainPath_MachineName(用户生成项目主路径_PC),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserCodePrjMainPathId: 生成主目录Id(要求唯一的字段)
 * @param strMachineName: 机器名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function UserCodePrjMainPath_MachineName_GetUniCondStr(
  objUserCodePrjMainPath_MachineNameEN: clsUserCodePrjMainPath_MachineNameEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and UserCodePrjMainPathId = '{0}'",
    objUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId,
  );
  strWhereCond += Format(
    " and MachineName = '{0}'",
    objUserCodePrjMainPath_MachineNameEN.machineName,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--UserCodePrjMainPath_MachineName(用户生成项目主路径_PC),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserCodePrjMainPathId: 生成主目录Id(要求唯一的字段)
 * @param strMachineName: 机器名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function UserCodePrjMainPath_MachineName_GetUniCondStr4Update(
  objUserCodePrjMainPath_MachineNameEN: clsUserCodePrjMainPath_MachineNameEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and UserCodePrjMainPathId <> '{0}'",
    objUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId,
  );
  strWhereCond += Format(
    " and MachineName <> '{0}'",
    objUserCodePrjMainPath_MachineNameEN.machineName,
  );
  strWhereCond += Format(
    " and UserCodePrjMainPathId = '{0}'",
    objUserCodePrjMainPath_MachineNameEN.userCodePrjMainPathId,
  );
  strWhereCond += Format(
    " and MachineName = '{0}'",
    objUserCodePrjMainPath_MachineNameEN.machineName,
  );
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objUserCodePrjMainPath_MachineNameENS:源对象
 * @param objUserCodePrjMainPath_MachineNameENT:目标对象
 */
export function UserCodePrjMainPath_MachineName_GetObjFromJsonObj(
  objUserCodePrjMainPath_MachineNameENS: clsUserCodePrjMainPath_MachineNameEN,
): clsUserCodePrjMainPath_MachineNameEN {
  const objUserCodePrjMainPath_MachineNameENT: clsUserCodePrjMainPath_MachineNameEN =
    new clsUserCodePrjMainPath_MachineNameEN();
  ObjectAssign(objUserCodePrjMainPath_MachineNameENT, objUserCodePrjMainPath_MachineNameENS);
  return objUserCodePrjMainPath_MachineNameENT;
}
