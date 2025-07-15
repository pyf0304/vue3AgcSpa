/**
 * 类名:clsUserCodePrjMainPathMachineNameWApi
 * 表名:UserCodePrjMainPath_MachineName(00050614)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:20:06
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户生成项目主路径_PC(UserCodePrjMainPathMachineName)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年06月08日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
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
import { clsUserCodePrjMainPathMachineNameEN } from '@/ts/L0Entity/SystemSet/clsUserCodePrjMainPathMachineNameEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const userCodePrjMainPathMachineNameController = 'UserCodePrjMainPathMachineNameApi';
export const userCodePrjMainPathMachineNameConstructorName = 'userCodePrjMainPathMachineName';

/**
 * 把多关键字值分解为单独关键字的值，并且以对象形式返回
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKeyLst:多关键字值
 * @returns 分解后的单独关键字值对象
 **/
export function UserCodePrjMainPathMachineNameSplitKeyLst(strKeyLst: string) {
  const arrKey = strKeyLst.split('|');
  if (arrKey.length != 2) {
    const strMsg = '请选择需要修改的记录！';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  const objKeyLst = {
    userCodePrjMainPathId: arrKey[0],
    machineName: arrKey[1],
  };
  if (IsNullOrEmpty(objKeyLst.userCodePrjMainPathId) == true) {
    const strMsg = '关键字段(userCodePrjMainPathId)值不能为空！';
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(objKeyLst.machineName) == true) {
    const strMsg = '关键字段(machineName)值不能为空！';
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
export async function UserCodePrjMainPathMachineNameGetObjByKeyLstAsync(
  strUserCodePrjMainPathId: string,
  strMachineName: string,
): Promise<clsUserCodePrjMainPathMachineNameEN | null> {
  const strThisFuncName = 'GetObjByKeyLstAsync';

  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    const strMsg = Format(
      '参数:[strUserCodePrjMainPathId]不能为空！(In clsUserCodePrjMainPathMachineNameWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserCodePrjMainPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strUserCodePrjMainPathId]的长度:[{0}]不正确！(clsUserCodePrjMainPathMachineNameWApi.GetObjByKeyLstAsync)',
      strUserCodePrjMainPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strMachineName) == true) {
    const strMsg = Format(
      '参数:[strMachineName]不能为空！(In clsUserCodePrjMainPathMachineNameWApi.GetObjByKeyLstAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByKeyLst';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
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
      const objUserCodePrjMainPathMachineName =
        UserCodePrjMainPathMachineNameGetObjFromJsonObj(returnObj);
      return objUserCodePrjMainPathMachineName;
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameGetObjByKeyLstCache(
  strUserCodePrjMainPathId: string,
  strMachineName: string,
  strCmPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByKeyLstCache';

  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    const strMsg = Format(
      '参数:[strUserCodePrjMainPathId]不能为空！(In clsUserCodePrjMainPathMachineNameWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserCodePrjMainPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strUserCodePrjMainPathId]的长度:[{0}]不正确！(clsUserCodePrjMainPathMachineNameWApi.GetObjByKeyLstCache)',
      strUserCodePrjMainPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strMachineName) == true) {
    const strMsg = Format(
      '参数:[strMachineName]不能为空！(In clsUserCodePrjMainPathMachineNameWApi.GetObjByKeyLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrUserCodePrjMainPathMachineNameObjLstCache =
    await UserCodePrjMainPathMachineNameGetObjLstCache(strCmPrjId);
  try {
    const arrUserCodePrjMainPathMachineNameSel =
      arrUserCodePrjMainPathMachineNameObjLstCache.filter(
        (x) =>
          x.userCodePrjMainPathId == strUserCodePrjMainPathId && x.machineName == strMachineName,
      );
    let objUserCodePrjMainPathMachineName: clsUserCodePrjMainPathMachineNameEN;
    if (arrUserCodePrjMainPathMachineNameSel.length > 0) {
      objUserCodePrjMainPathMachineName = arrUserCodePrjMainPathMachineNameSel[0];
      return objUserCodePrjMainPathMachineName;
    } else {
      if (bolTryAsyncOnce == true) {
        const objUserCodePrjMainPathMachineNameConst =
          await UserCodePrjMainPathMachineNameGetObjByKeyLstAsync(
            strUserCodePrjMainPathId,
            strMachineName,
          );
        if (objUserCodePrjMainPathMachineNameConst != null) {
          UserCodePrjMainPathMachineNameReFreshThisCache(strCmPrjId);
          return objUserCodePrjMainPathMachineNameConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserCodePrjMainPathId,
      userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameGetObjByKeyLstlocalStorage(
  strUserCodePrjMainPathId: string,
  strMachineName: string,
) {
  const strThisFuncName = 'GetObjByKeyLstlocalStorage';

  if (IsNullOrEmpty(strUserCodePrjMainPathId) == true) {
    const strMsg = Format(
      '参数:[strUserCodePrjMainPathId]不能为空！(In clsUserCodePrjMainPathMachineNameWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserCodePrjMainPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strUserCodePrjMainPathId]的长度:[{0}]不正确！(clsUserCodePrjMainPathMachineNameWApi.GetObjByKeyLstlocalStorage)',
      strUserCodePrjMainPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strMachineName) == true) {
    const strMsg = Format(
      '参数:[strMachineName]不能为空！(In clsUserCodePrjMainPathMachineNameWApi.GetObjByKeyLstlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format(
    '{0}_{1}',
    clsUserCodePrjMainPathMachineNameEN._CurrTabName,
    strUserCodePrjMainPathId,
  );
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objUserCodePrjMainPathMachineNameCache: clsUserCodePrjMainPathMachineNameEN =
      JSON.parse(strTempObj);
    return objUserCodePrjMainPathMachineNameCache;
  }
  try {
    const objUserCodePrjMainPathMachineName =
      await UserCodePrjMainPathMachineNameGetObjByKeyLstAsync(
        strUserCodePrjMainPathId,
        strMachineName,
      );
    if (objUserCodePrjMainPathMachineName != null) {
      localStorage.setItem(strKey, JSON.stringify(objUserCodePrjMainPathMachineName));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objUserCodePrjMainPathMachineName;
    }
    return objUserCodePrjMainPathMachineName;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserCodePrjMainPathId,
      userCodePrjMainPathMachineNameConstructorName,
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
 * @param objUserCodePrjMainPathMachineName:所给的对象
 * @returns 对象
 */
export async function UserCodePrjMainPathMachineNameUpdateObjInLstCache(
  objUserCodePrjMainPathMachineName: clsUserCodePrjMainPathMachineNameEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrUserCodePrjMainPathMachineNameObjLstCache =
      await UserCodePrjMainPathMachineNameGetObjLstCache(strCmPrjId);
    const obj = arrUserCodePrjMainPathMachineNameObjLstCache.find(
      (x) =>
        x.userCodePrjMainPathId == objUserCodePrjMainPathMachineName.userCodePrjMainPathId &&
        x.machineName == objUserCodePrjMainPathMachineName.machineName,
    );
    if (obj != null) {
      objUserCodePrjMainPathMachineName.userCodePrjMainPathId = obj.userCodePrjMainPathId;
      ObjectAssign(obj, objUserCodePrjMainPathMachineName);
    } else {
      arrUserCodePrjMainPathMachineNameObjLstCache.push(objUserCodePrjMainPathMachineName);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      userCodePrjMainPathMachineNameConstructorName,
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
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function UserCodePrjMainPathMachineNamefunc(
  strInFldName1: string,
  strInFldName2: string,
  strOutFldName: string,
  strInValue1: string,
  strInValue2: string,
  strCmPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strCmPrjIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strCmPrjIdClassfy]不能为空！(In clsUserCodePrjMainPathMachineNameWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjIdClassfy.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjIdClassfy]的长度:[{0}]不正确！(clsUserCodePrjMainPathMachineNameWApi.func)',
      strCmPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName1 != clsUserCodePrjMainPathMachineNameEN.conUserCodePrjMainPathId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName1);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName2 != clsUserCodePrjMainPathMachineNameEN.conMachineName) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName2);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsUserCodePrjMainPathMachineNameEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strOutFldName,
      clsUserCodePrjMainPathMachineNameEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strUserCodePrjMainPathId = strInValue1;
  if (IsNullOrEmpty(strInValue1) == true) {
    return '';
  }
  const strMachineName = strInValue2;
  if (IsNullOrEmpty(strInValue2) == true) {
    return '';
  }
  const objUserCodePrjMainPathMachineName = await UserCodePrjMainPathMachineNameGetObjByKeyLstCache(
    strUserCodePrjMainPathId,
    strMachineName,
    strCmPrjIdClassfy,
  );
  if (objUserCodePrjMainPathMachineName == null) return '';
  if (objUserCodePrjMainPathMachineName.GetFldValue(strOutFldName) == null) return '';
  return objUserCodePrjMainPathMachineName.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function UserCodePrjMainPathMachineNameSortFunDefa(
  a: clsUserCodePrjMainPathMachineNameEN,
  b: clsUserCodePrjMainPathMachineNameEN,
): number {
  return a.userCodePrjMainPathId.localeCompare(b.userCodePrjMainPathId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function UserCodePrjMainPathMachineNameSortFunDefa2Fld(
  a: clsUserCodePrjMainPathMachineNameEN,
  b: clsUserCodePrjMainPathMachineNameEN,
): number {
  if (a.codePath == b.codePath) return a.gcPathId.localeCompare(b.gcPathId);
  else return a.codePath.localeCompare(b.codePath);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function UserCodePrjMainPathMachineNameSortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserCodePrjMainPathMachineNameEN.conUserCodePrjMainPathId:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          return a.userCodePrjMainPathId.localeCompare(b.userCodePrjMainPathId);
        };
      case clsUserCodePrjMainPathMachineNameEN.conMachineName:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          if (a.machineName == null) return -1;
          if (b.machineName == null) return 1;
          return a.machineName.localeCompare(b.machineName);
        };
      case clsUserCodePrjMainPathMachineNameEN.conCodePath:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          return a.codePath.localeCompare(b.codePath);
        };
      case clsUserCodePrjMainPathMachineNameEN.conGcPathId:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          if (a.gcPathId == null) return -1;
          if (b.gcPathId == null) return 1;
          return a.gcPathId.localeCompare(b.gcPathId);
        };
      case clsUserCodePrjMainPathMachineNameEN.conCodePathBackup:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          return a.codePathBackup.localeCompare(b.codePathBackup);
        };
      case clsUserCodePrjMainPathMachineNameEN.conLogPath:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          if (a.logPath == null) return -1;
          if (b.logPath == null) return 1;
          return a.logPath.localeCompare(b.logPath);
        };
      case clsUserCodePrjMainPathMachineNameEN.conIncludeXmlPath:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          if (a.includeXmlPath == null) return -1;
          if (b.includeXmlPath == null) return 1;
          return a.includeXmlPath.localeCompare(b.includeXmlPath);
        };
      case clsUserCodePrjMainPathMachineNameEN.conCmPrjId:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsUserCodePrjMainPathMachineNameEN.conUpdDate:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsUserCodePrjMainPathMachineNameEN.conUpdUserId:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsUserCodePrjMainPathMachineNameEN.conMemo:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserCodePrjMainPathMachineName]中不存在！(in ${userCodePrjMainPathMachineNameConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsUserCodePrjMainPathMachineNameEN.conUserCodePrjMainPathId:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          return b.userCodePrjMainPathId.localeCompare(a.userCodePrjMainPathId);
        };
      case clsUserCodePrjMainPathMachineNameEN.conMachineName:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          if (b.machineName == null) return -1;
          if (a.machineName == null) return 1;
          return b.machineName.localeCompare(a.machineName);
        };
      case clsUserCodePrjMainPathMachineNameEN.conCodePath:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          return b.codePath.localeCompare(a.codePath);
        };
      case clsUserCodePrjMainPathMachineNameEN.conGcPathId:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          if (b.gcPathId == null) return -1;
          if (a.gcPathId == null) return 1;
          return b.gcPathId.localeCompare(a.gcPathId);
        };
      case clsUserCodePrjMainPathMachineNameEN.conCodePathBackup:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          return b.codePathBackup.localeCompare(a.codePathBackup);
        };
      case clsUserCodePrjMainPathMachineNameEN.conLogPath:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          if (b.logPath == null) return -1;
          if (a.logPath == null) return 1;
          return b.logPath.localeCompare(a.logPath);
        };
      case clsUserCodePrjMainPathMachineNameEN.conIncludeXmlPath:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          if (b.includeXmlPath == null) return -1;
          if (a.includeXmlPath == null) return 1;
          return b.includeXmlPath.localeCompare(a.includeXmlPath);
        };
      case clsUserCodePrjMainPathMachineNameEN.conCmPrjId:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsUserCodePrjMainPathMachineNameEN.conUpdDate:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsUserCodePrjMainPathMachineNameEN.conUpdUserId:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsUserCodePrjMainPathMachineNameEN.conMemo:
        return (a: clsUserCodePrjMainPathMachineNameEN, b: clsUserCodePrjMainPathMachineNameEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserCodePrjMainPathMachineName]中不存在！(in ${userCodePrjMainPathMachineNameConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function UserCodePrjMainPathMachineNameFilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsUserCodePrjMainPathMachineNameEN.conUserCodePrjMainPathId:
      return (obj: clsUserCodePrjMainPathMachineNameEN) => {
        return obj.userCodePrjMainPathId === value;
      };
    case clsUserCodePrjMainPathMachineNameEN.conMachineName:
      return (obj: clsUserCodePrjMainPathMachineNameEN) => {
        return obj.machineName === value;
      };
    case clsUserCodePrjMainPathMachineNameEN.conCodePath:
      return (obj: clsUserCodePrjMainPathMachineNameEN) => {
        return obj.codePath === value;
      };
    case clsUserCodePrjMainPathMachineNameEN.conGcPathId:
      return (obj: clsUserCodePrjMainPathMachineNameEN) => {
        return obj.gcPathId === value;
      };
    case clsUserCodePrjMainPathMachineNameEN.conCodePathBackup:
      return (obj: clsUserCodePrjMainPathMachineNameEN) => {
        return obj.codePathBackup === value;
      };
    case clsUserCodePrjMainPathMachineNameEN.conLogPath:
      return (obj: clsUserCodePrjMainPathMachineNameEN) => {
        return obj.logPath === value;
      };
    case clsUserCodePrjMainPathMachineNameEN.conIncludeXmlPath:
      return (obj: clsUserCodePrjMainPathMachineNameEN) => {
        return obj.includeXmlPath === value;
      };
    case clsUserCodePrjMainPathMachineNameEN.conCmPrjId:
      return (obj: clsUserCodePrjMainPathMachineNameEN) => {
        return obj.cmPrjId === value;
      };
    case clsUserCodePrjMainPathMachineNameEN.conUpdDate:
      return (obj: clsUserCodePrjMainPathMachineNameEN) => {
        return obj.updDate === value;
      };
    case clsUserCodePrjMainPathMachineNameEN.conUpdUserId:
      return (obj: clsUserCodePrjMainPathMachineNameEN) => {
        return obj.updUserId === value;
      };
    case clsUserCodePrjMainPathMachineNameEN.conMemo:
      return (obj: clsUserCodePrjMainPathMachineNameEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[UserCodePrjMainPathMachineName]中不存在！(in ${userCodePrjMainPathMachineNameConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function UserCodePrjMainPathMachineNamefuncKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCmPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCmPrjIdClassfy) == true) {
    const strMsg = Format(
      '参数:[strCmPrjIdClassfy]不能为空！(In clsUserCodePrjMainPathMachineNameWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjIdClassfy.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjIdClassfy]的长度:[{0}]不正确！(clsUserCodePrjMainPathMachineNameWApi.funcKey)',
      strCmPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsUserCodePrjMainPathMachineNameEN.conUserCodePrjMainPathId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (strInFldName == clsUserCodePrjMainPathMachineNameEN.conMachineName) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrUserCodePrjMainPathMachineName = await UserCodePrjMainPathMachineNameGetObjLstCache(
    strCmPrjIdClassfy,
  );
  if (arrUserCodePrjMainPathMachineName == null) return [];
  let arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineName;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrUserCodePrjMainPathMachineNameSel.length == 0) return [];
  return arrUserCodePrjMainPathMachineName.map(
    (x) => `${x.userCodePrjMainPathId}|${x.machineName}`,
  );
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserCodePrjMainPathMachineNameGetFirstIDAsync(
  strWhereCond: string,
): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameGetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameGetFirstObjAsync(
  strWhereCond: string,
): Promise<clsUserCodePrjMainPathMachineNameEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
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
      const objUserCodePrjMainPathMachineName =
        UserCodePrjMainPathMachineNameGetObjFromJsonObj(returnObj);
      return objUserCodePrjMainPathMachineName;
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameGetObjLstClientCache(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsUserCodePrjMainPathMachineNameEN.WhereFormat) == false) {
    strWhereCond = Format(clsUserCodePrjMainPathMachineNameEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("CmPrjId='{0}'", strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPathMachineNameEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsUserCodePrjMainPathMachineNameEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserCodePrjMainPathMachineNameEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrUserCodePrjMainPathMachineNameExObjLstCache: Array<clsUserCodePrjMainPathMachineNameEN> =
      CacheHelper.Get(strKey);
    const arrUserCodePrjMainPathMachineNameObjLstT =
      UserCodePrjMainPathMachineNameGetObjLstByJSONObjLst(
        arrUserCodePrjMainPathMachineNameExObjLstCache,
      );
    return arrUserCodePrjMainPathMachineNameObjLstT;
  }
  try {
    const arrUserCodePrjMainPathMachineNameExObjLst =
      await UserCodePrjMainPathMachineNameGetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrUserCodePrjMainPathMachineNameExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrUserCodePrjMainPathMachineNameExObjLst.length,
    );
    console.log(strInfo);
    return arrUserCodePrjMainPathMachineNameExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameGetObjLstlocalStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsUserCodePrjMainPathMachineNameEN.WhereFormat) == false) {
    strWhereCond = Format(clsUserCodePrjMainPathMachineNameEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("CmPrjId='{0}'", strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPathMachineNameEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsUserCodePrjMainPathMachineNameEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserCodePrjMainPathMachineNameEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrUserCodePrjMainPathMachineNameExObjLstCache: Array<clsUserCodePrjMainPathMachineNameEN> =
      JSON.parse(strTempObjLst);
    const arrUserCodePrjMainPathMachineNameObjLstT =
      UserCodePrjMainPathMachineNameGetObjLstByJSONObjLst(
        arrUserCodePrjMainPathMachineNameExObjLstCache,
      );
    return arrUserCodePrjMainPathMachineNameObjLstT;
  }
  try {
    const arrUserCodePrjMainPathMachineNameExObjLst =
      await UserCodePrjMainPathMachineNameGetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsUserCodePrjMainPathMachineNameEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrUserCodePrjMainPathMachineNameExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrUserCodePrjMainPathMachineNameExObjLst.length,
    );
    console.log(strInfo);
    return arrUserCodePrjMainPathMachineNameExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameGetObjLstlocalStoragePureCache(
  strCmPrjId: string,
) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPathMachineNameEN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrUserCodePrjMainPathMachineNameObjLstCache: Array<clsUserCodePrjMainPathMachineNameEN> =
      JSON.parse(strTempObjLst);
    return arrUserCodePrjMainPathMachineNameObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function UserCodePrjMainPathMachineNameGetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsUserCodePrjMainPathMachineNameEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
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
          userCodePrjMainPathMachineNameConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePrjMainPathMachineNameGetObjLstByJSONObjLst(returnObjLst);
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameGetObjLstsessionStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsUserCodePrjMainPathMachineNameEN.WhereFormat) == false) {
    strWhereCond = Format(clsUserCodePrjMainPathMachineNameEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("CmPrjId='{0}'", strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPathMachineNameEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsUserCodePrjMainPathMachineNameEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserCodePrjMainPathMachineNameEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrUserCodePrjMainPathMachineNameExObjLstCache: Array<clsUserCodePrjMainPathMachineNameEN> =
      JSON.parse(strTempObjLst);
    const arrUserCodePrjMainPathMachineNameObjLstT =
      UserCodePrjMainPathMachineNameGetObjLstByJSONObjLst(
        arrUserCodePrjMainPathMachineNameExObjLstCache,
      );
    return arrUserCodePrjMainPathMachineNameObjLstT;
  }
  try {
    const arrUserCodePrjMainPathMachineNameExObjLst =
      await UserCodePrjMainPathMachineNameGetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsUserCodePrjMainPathMachineNameEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrUserCodePrjMainPathMachineNameExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrUserCodePrjMainPathMachineNameExObjLst.length,
    );
    console.log(strInfo);
    return arrUserCodePrjMainPathMachineNameExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameGetObjLstsessionStoragePureCache(
  strCmPrjId: string,
) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPathMachineNameEN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrUserCodePrjMainPathMachineNameObjLstCache: Array<clsUserCodePrjMainPathMachineNameEN> =
      JSON.parse(strTempObjLst);
    return arrUserCodePrjMainPathMachineNameObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserCodePrjMainPathMachineNameGetObjLstCache(
  strCmPrjId: string,
): Promise<Array<clsUserCodePrjMainPathMachineNameEN>> {
  //const strThisFuncName = "GetObjLstCache";

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '缓存分类变量:[CmPrjId]不能为空！(in clsUserCodePrjMainPathMachineNameWApi.UserCodePrjMainPathMachineNameGetObjLstCache() )',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！(in clsUserCodePrjMainPathMachineNameWApi.UserCodePrjMainPathMachineNameGetObjLstCache() )',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrUserCodePrjMainPathMachineNameObjLstCache;
  switch (clsUserCodePrjMainPathMachineNameEN.CacheModeId) {
    case '04': //sessionStorage
      arrUserCodePrjMainPathMachineNameObjLstCache =
        await UserCodePrjMainPathMachineNameGetObjLstsessionStorage(strCmPrjId);
      break;
    case '03': //localStorage
      arrUserCodePrjMainPathMachineNameObjLstCache =
        await UserCodePrjMainPathMachineNameGetObjLstlocalStorage(strCmPrjId);
      break;
    case '02': //ClientCache
      arrUserCodePrjMainPathMachineNameObjLstCache =
        await UserCodePrjMainPathMachineNameGetObjLstClientCache(strCmPrjId);
      break;
    default:
      arrUserCodePrjMainPathMachineNameObjLstCache =
        await UserCodePrjMainPathMachineNameGetObjLstClientCache(strCmPrjId);
      break;
  }
  return arrUserCodePrjMainPathMachineNameObjLstCache;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserCodePrjMainPathMachineNameGetObjLstPureCache(strCmPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrUserCodePrjMainPathMachineNameObjLstCache;
  switch (clsUserCodePrjMainPathMachineNameEN.CacheModeId) {
    case '04': //sessionStorage
      arrUserCodePrjMainPathMachineNameObjLstCache =
        await UserCodePrjMainPathMachineNameGetObjLstsessionStoragePureCache(strCmPrjId);
      break;
    case '03': //localStorage
      arrUserCodePrjMainPathMachineNameObjLstCache =
        await UserCodePrjMainPathMachineNameGetObjLstlocalStoragePureCache(strCmPrjId);
      break;
    case '02': //ClientCache
      arrUserCodePrjMainPathMachineNameObjLstCache = null;
      break;
    default:
      arrUserCodePrjMainPathMachineNameObjLstCache = null;
      break;
  }
  return arrUserCodePrjMainPathMachineNameObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrUserCodePrjMainPathIdCond:条件对象
 * @returns 对象列表子集
 */
export async function UserCodePrjMainPathMachineNameGetSubObjLstCache(
  objUserCodePrjMainPathMachineNameCond: clsUserCodePrjMainPathMachineNameEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrUserCodePrjMainPathMachineNameObjLstCache =
    await UserCodePrjMainPathMachineNameGetObjLstCache(strCmPrjId);
  let arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameObjLstCache;
  if (
    objUserCodePrjMainPathMachineNameCond.sfFldComparisonOp == null ||
    objUserCodePrjMainPathMachineNameCond.sfFldComparisonOp == ''
  )
    return arrUserCodePrjMainPathMachineNameSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objUserCodePrjMainPathMachineNameCond.sfFldComparisonOp,
  );
  //console.log("clsUserCodePrjMainPathMachineNameWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objUserCodePrjMainPathMachineNameCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserCodePrjMainPathMachineNameCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrUserCodePrjMainPathMachineNameSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objUserCodePrjMainPathMachineNameCond),
      userCodePrjMainPathMachineNameConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserCodePrjMainPathMachineNameEN>();
}

/// <summary>
/// 把多个关键字段的值连接起来，用|连接(Join)--UserCodePrjMainPathMachineName(用户生成项目主路径_PC)
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_JoinByKeyLst)
/// </summary>
/// <param name = "objUserCodePrjMainPathMachineNameEN">需要连接的对象</param>
/// <returns></returns>
export function UserCodePrjMainPathMachineNameJoinByKeyLst(
  objUserCodePrjMainPathMachineNameEN: clsUserCodePrjMainPathMachineNameEN,
): string {
  //检测记录是否存在
  let strResult = '';
  strResult += objUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId;
  strResult += `|${objUserCodePrjMainPathMachineNameEN.machineName}`;
  return strResult;
}
/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrUserCodePrjMainPathIdLst:关键字列表
 * @returns 对象列表
 */
export async function UserCodePrjMainPathMachineNameGetObjLstByKeyLstsCache(
  arrUserCodePrjMainPathIdLst: Array<string>,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByKeyLstsCache';
  try {
    const arrUserCodePrjMainPathMachineNameObjLstCache =
      await UserCodePrjMainPathMachineNameGetObjLstCache(strCmPrjId);
    const arrUserCodePrjMainPathMachineNameSel =
      arrUserCodePrjMainPathMachineNameObjLstCache.filter(
        (x) =>
          arrUserCodePrjMainPathIdLst.indexOf(UserCodePrjMainPathMachineNameJoinByKeyLst(x)) > -1,
      );
    return arrUserCodePrjMainPathMachineNameSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrUserCodePrjMainPathIdLst.join(','),
      userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameGetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsUserCodePrjMainPathMachineNameEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
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
          userCodePrjMainPathMachineNameConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePrjMainPathMachineNameGetObjLstByJSONObjLst(returnObjLst);
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameGetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsUserCodePrjMainPathMachineNameEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
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
          userCodePrjMainPathMachineNameConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePrjMainPathMachineNameGetObjLstByJSONObjLst(returnObjLst);
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameGetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsUserCodePrjMainPathMachineNameEN>();
  const arrUserCodePrjMainPathMachineNameObjLstCache =
    await UserCodePrjMainPathMachineNameGetObjLstCache(strCmPrjId);
  if (arrUserCodePrjMainPathMachineNameObjLstCache.length == 0)
    return arrUserCodePrjMainPathMachineNameObjLstCache;
  let arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objUserCodePrjMainPathMachineNameCond = new clsUserCodePrjMainPathMachineNameEN();
  ObjectAssign(objUserCodePrjMainPathMachineNameCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsUserCodePrjMainPathMachineNameWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserCodePrjMainPathMachineNameCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrUserCodePrjMainPathMachineNameSel.length == 0)
      return arrUserCodePrjMainPathMachineNameSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.sort(
        UserCodePrjMainPathMachineNameSortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.sort(
        objPagerPara.sortFun,
      );
    }
    arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.slice(
      intStart,
      intEnd,
    );
    return arrUserCodePrjMainPathMachineNameSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      userCodePrjMainPathMachineNameConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserCodePrjMainPathMachineNameEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表，只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function UserCodePrjMainPathMachineNameGetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUserCodePrjMainPathMachineNameEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsUserCodePrjMainPathMachineNameEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
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
          userCodePrjMainPathMachineNameConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserCodePrjMainPathMachineNameGetObjLstByJSONObjLst(returnObjLst);
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
 * @param strUserCodePrjMainPathId,strMachineName:关键字列表
 * @returns 获取删除的结果
 **/
export async function UserCodePrjMainPathMachineNameDelRecKeyLstAsync(
  strUserCodePrjMainPathId: string,
  strMachineName: string,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstAsync';
  const strAction = 'DelRecKeyLst';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      UserCodePrjMainPathId: strUserCodePrjMainPathId,
      MachineName: strMachineName,
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameDelRecKeyLstsAsync(
  arrKeyLsts: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelRecKeyLstsAsync';
  const strAction = 'DelRecKeyLsts';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameDelUserCodePrjMainPathMachineNamesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelUserCodePrjMainPathMachineNamesByCondAsync';
  const strAction = 'DelUserCodePrjMainPathMachineNamesByCond';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
 * @param objUserCodePrjMainPathMachineNameEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserCodePrjMainPathMachineNameAddNewRecordAsync(
  objUserCodePrjMainPathMachineNameEN: clsUserCodePrjMainPathMachineNameEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (
    objUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId === null ||
    objUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId === ''
  ) {
    const strMsg = '需要的对象的关键字为空，不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objUserCodePrjMainPathMachineNameEN);
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPathMachineNameEN, config);
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
 * 调用WebApi来添加记录，关键字用最大关键字，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objUserCodePrjMainPathMachineNameEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserCodePrjMainPathMachineNameAddNewRecordWithMaxIdAsync(
  objUserCodePrjMainPathMachineNameEN: clsUserCodePrjMainPathMachineNameEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPathMachineNameEN, config);
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
 * @param objUserCodePrjMainPathMachineNameEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function UserCodePrjMainPathMachineNameAddNewRecordWithReturnKeyAsync(
  objUserCodePrjMainPathMachineNameEN: clsUserCodePrjMainPathMachineNameEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPathMachineNameEN, config);
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
 * @param objUserCodePrjMainPathMachineNameEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function UserCodePrjMainPathMachineNameUpdateRecordAsync(
  objUserCodePrjMainPathMachineNameEN: clsUserCodePrjMainPathMachineNameEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objUserCodePrjMainPathMachineNameEN.sfUpdFldSetStr === undefined ||
    objUserCodePrjMainPathMachineNameEN.sfUpdFldSetStr === null ||
    objUserCodePrjMainPathMachineNameEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPathMachineNameEN, config);
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
 * @param objUserCodePrjMainPathMachineNameEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserCodePrjMainPathMachineNameUpdateWithConditionAsync(
  objUserCodePrjMainPathMachineNameEN: clsUserCodePrjMainPathMachineNameEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objUserCodePrjMainPathMachineNameEN.sfUpdFldSetStr === undefined ||
    objUserCodePrjMainPathMachineNameEN.sfUpdFldSetStr === null ||
    objUserCodePrjMainPathMachineNameEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
  objUserCodePrjMainPathMachineNameEN.whereCond = strWhereCond;
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserCodePrjMainPathMachineNameEN, config);
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameIsExistRecordCache(
  objUserCodePrjMainPathMachineNameCond: clsUserCodePrjMainPathMachineNameEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrUserCodePrjMainPathMachineNameObjLstCache =
    await UserCodePrjMainPathMachineNameGetObjLstCache(strCmPrjId);
  if (arrUserCodePrjMainPathMachineNameObjLstCache == null) return false;
  let arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameObjLstCache;
  if (
    objUserCodePrjMainPathMachineNameCond.sfFldComparisonOp == null ||
    objUserCodePrjMainPathMachineNameCond.sfFldComparisonOp == ''
  )
    return arrUserCodePrjMainPathMachineNameSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objUserCodePrjMainPathMachineNameCond.sfFldComparisonOp,
  );
  //console.log("clsUserCodePrjMainPathMachineNameWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objUserCodePrjMainPathMachineNameCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserCodePrjMainPathMachineNameCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrUserCodePrjMainPathMachineNameSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objUserCodePrjMainPathMachineNameCond),
      userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameIsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameIsExistCache(
  strUserCodePrjMainPathId: string,
  strMachineName: string,
  strCmPrjId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrUserCodePrjMainPathMachineNameObjLstCache =
    await UserCodePrjMainPathMachineNameGetObjLstCache(strCmPrjId);
  if (arrUserCodePrjMainPathMachineNameObjLstCache == null) return false;
  try {
    const arrUserCodePrjMainPathMachineNameSel =
      arrUserCodePrjMainPathMachineNameObjLstCache.filter(
        (x) =>
          x.userCodePrjMainPathId == strUserCodePrjMainPathId && x.machineName == strMachineName,
      );
    if (arrUserCodePrjMainPathMachineNameSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strUserCodePrjMainPathId,
      userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameIsExistAsync(
  strUserCodePrjMainPathId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameGetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
 * @param objUserCodePrjMainPathMachineNameCond:条件对象
 * @returns 对象列表记录数
 */
export async function UserCodePrjMainPathMachineNameGetRecCountByCondCache(
  objUserCodePrjMainPathMachineNameCond: clsUserCodePrjMainPathMachineNameEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrUserCodePrjMainPathMachineNameObjLstCache =
    await UserCodePrjMainPathMachineNameGetObjLstCache(strCmPrjId);
  if (arrUserCodePrjMainPathMachineNameObjLstCache == null) return 0;
  let arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameObjLstCache;
  if (
    objUserCodePrjMainPathMachineNameCond.sfFldComparisonOp == null ||
    objUserCodePrjMainPathMachineNameCond.sfFldComparisonOp == ''
  )
    return arrUserCodePrjMainPathMachineNameSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objUserCodePrjMainPathMachineNameCond.sfFldComparisonOp,
  );
  //console.log("clsUserCodePrjMainPathMachineNameWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objUserCodePrjMainPathMachineNameCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserCodePrjMainPathMachineNameCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrUserCodePrjMainPathMachineNameSel = arrUserCodePrjMainPathMachineNameSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrUserCodePrjMainPathMachineNameSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objUserCodePrjMainPathMachineNameCond),
      userCodePrjMainPathMachineNameConstructorName,
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
export async function UserCodePrjMainPathMachineNameGetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(userCodePrjMainPathMachineNameController, strAction);
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
        userCodePrjMainPathMachineNameConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userCodePrjMainPathMachineNameConstructorName,
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
export function UserCodePrjMainPathMachineNameGetWebApiUrl(
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
export function UserCodePrjMainPathMachineNameReFreshCache(strCmPrjId: string): void {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空！(In clsUserCodePrjMainPathMachineNameWApi.clsUserCodePrjMainPathMachineNameWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！(clsUserCodePrjMainPathMachineNameWApi.clsUserCodePrjMainPathMachineNameWApi.ReFreshCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功！');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsUserCodePrjMainPathMachineNameEN._CurrTabName, strCmPrjId);
  switch (clsUserCodePrjMainPathMachineNameEN.CacheModeId) {
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
export function UserCodePrjMainPathMachineNameReFreshThisCache(strCmPrjId: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsUserCodePrjMainPathMachineNameEN._CurrTabName, strCmPrjId);
    switch (clsUserCodePrjMainPathMachineNameEN.CacheModeId) {
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
export function UserCodePrjMainPathMachineNameCheckPropertyNew(
  pobjUserCodePrjMainPathMachineNameEN: clsUserCodePrjMainPathMachineNameEN,
) {
  //检查字段非空， 即数据表要求非常非空的字段，不能为空！
  if (IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.codePath) === true) {
    throw new Error(
      '(errid:Watl000058)字段[代码路径]不能为空(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.codePathBackup) === true) {
    throw new Error(
      '(errid:Watl000058)字段[备份代码路径]不能为空(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.cmPrjId) === true ||
    pobjUserCodePrjMainPathMachineNameEN.cmPrjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000058)字段[CM工程Id]不能为空(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId) > 8
  ) {
    throw new Error(
      '(errid:Watl000059)字段[生成主目录Id(userCodePrjMainPathId)]的长度不能超过8(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId)(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.machineName) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.machineName) > 50
  ) {
    throw new Error(
      '(errid:Watl000059)字段[机器名(machineName)]的长度不能超过50(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.machineName)(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.codePath) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.codePath) > 200
  ) {
    throw new Error(
      '(errid:Watl000059)字段[代码路径(codePath)]的长度不能超过200(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.codePath)(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.gcPathId) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.gcPathId) > 8
  ) {
    throw new Error(
      '(errid:Watl000059)字段[GC路径Id(gcPathId)]的长度不能超过8(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.gcPathId)(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.codePathBackup) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.codePathBackup) > 200
  ) {
    throw new Error(
      '(errid:Watl000059)字段[备份代码路径(codePathBackup)]的长度不能超过200(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.codePathBackup)(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.logPath) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.logPath) > 150
  ) {
    throw new Error(
      '(errid:Watl000059)字段[日志路径(logPath)]的长度不能超过150(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.logPath)(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.includeXmlPath) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.includeXmlPath) > 150
  ) {
    throw new Error(
      '(errid:Watl000059)字段[包含表Xml路径(includeXmlPath)]的长度不能超过150(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.includeXmlPath)(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.cmPrjId) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.cmPrjId) > 6
  ) {
    throw new Error(
      '(errid:Watl000059)字段[CM工程Id(cmPrjId)]的长度不能超过6(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.cmPrjId)(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.updDate) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[修改日期(updDate)]的长度不能超过20(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.updDate)(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.updUserId) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.updUserId)(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.memo) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000059)字段[说明(memo)]的长度不能超过1000(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.memo)(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[生成主目录Id(userCodePrjMainPathId)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.machineName) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.machineName &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.machineName) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[机器名(machineName)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.machineName)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.codePath) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.codePath &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.codePath) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[代码路径(codePath)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.codePath)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.gcPathId) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.gcPathId &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.gcPathId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[GC路径Id(gcPathId)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.gcPathId)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.codePathBackup) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.codePathBackup &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.codePathBackup) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[备份代码路径(codePathBackup)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.codePathBackup)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.logPath) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.logPath &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.logPath) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[日志路径(logPath)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.logPath)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.includeXmlPath) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.includeXmlPath &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.includeXmlPath) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[包含表Xml路径(includeXmlPath)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.includeXmlPath)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.cmPrjId) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.cmPrjId &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.cmPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[CM工程Id(cmPrjId)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.cmPrjId)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.updDate) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.updDate &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[修改日期(updDate)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.updDate)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.updUserId) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.updUserId &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[修改用户Id(updUserId)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.updUserId)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.memo) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.memo &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[说明(memo)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.memo)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId) != 8
  ) {
    throw '(errid:Watl000061)字段[生成主目录Id]作为外键字段,长度应该为8(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.gcPathId) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.gcPathId) != 8
  ) {
    throw '(errid:Watl000061)字段[GC路径Id]作为外键字段,长度应该为8(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了，后面不需要再检查，即非法！
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function UserCodePrjMainPathMachineNameCheckProperty4Update(
  pobjUserCodePrjMainPathMachineNameEN: clsUserCodePrjMainPathMachineNameEN,
) {
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId) > 8
  ) {
    throw new Error(
      '(errid:Watl000062)字段[生成主目录Id(userCodePrjMainPathId)]的长度不能超过8(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId)(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.machineName) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.machineName) > 50
  ) {
    throw new Error(
      '(errid:Watl000062)字段[机器名(machineName)]的长度不能超过50(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.machineName)(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.codePath) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.codePath) > 200
  ) {
    throw new Error(
      '(errid:Watl000062)字段[代码路径(codePath)]的长度不能超过200(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.codePath)(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.gcPathId) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.gcPathId) > 8
  ) {
    throw new Error(
      '(errid:Watl000062)字段[GC路径Id(gcPathId)]的长度不能超过8(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.gcPathId)(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.codePathBackup) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.codePathBackup) > 200
  ) {
    throw new Error(
      '(errid:Watl000062)字段[备份代码路径(codePathBackup)]的长度不能超过200(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.codePathBackup)(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.logPath) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.logPath) > 150
  ) {
    throw new Error(
      '(errid:Watl000062)字段[日志路径(logPath)]的长度不能超过150(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.logPath)(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.includeXmlPath) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.includeXmlPath) > 150
  ) {
    throw new Error(
      '(errid:Watl000062)字段[包含表Xml路径(includeXmlPath)]的长度不能超过150(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.includeXmlPath)(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.cmPrjId) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.cmPrjId) > 6
  ) {
    throw new Error(
      '(errid:Watl000062)字段[CM工程Id(cmPrjId)]的长度不能超过6(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.cmPrjId)(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.updDate) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[修改日期(updDate)]的长度不能超过20(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.updDate)(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.updUserId) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.updUserId)(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.memo) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000062)字段[说明(memo)]的长度不能超过1000(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!值:$(pobjUserCodePrjMainPathMachineNameEN.memo)(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[生成主目录Id(userCodePrjMainPathId)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.machineName) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.machineName &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.machineName) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[机器名(machineName)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.machineName)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.codePath) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.codePath &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.codePath) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[代码路径(codePath)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.codePath)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.gcPathId) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.gcPathId &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.gcPathId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[GC路径Id(gcPathId)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.gcPathId)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.codePathBackup) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.codePathBackup &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.codePathBackup) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[备份代码路径(codePathBackup)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.codePathBackup)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.logPath) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.logPath &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.logPath) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[日志路径(logPath)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.logPath)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.includeXmlPath) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.includeXmlPath &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.includeXmlPath) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[包含表Xml路径(includeXmlPath)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.includeXmlPath)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.cmPrjId) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.cmPrjId &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.cmPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[CM工程Id(cmPrjId)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.cmPrjId)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.updDate) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.updDate &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[修改日期(updDate)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.updDate)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.updUserId) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.updUserId &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[修改用户Id(updUserId)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.updUserId)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.memo) == false &&
    undefined !== pobjUserCodePrjMainPathMachineNameEN.memo &&
    tzDataType.isString(pobjUserCodePrjMainPathMachineNameEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[说明(memo)]的值:[$(pobjUserCodePrjMainPathMachineNameEN.memo)], 非法，应该为字符型(In 用户生成项目主路径_PC(UserCodePrjMainPathMachineName))!(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空！
  if (IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[生成主目录Id]不能为空(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPathMachineNameBL:CheckProperty4Update)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId) != 8
  ) {
    throw '(errid:Watl000065)字段[生成主目录Id]作为外键字段,长度应该为8(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjUserCodePrjMainPathMachineNameEN.gcPathId) == false &&
    GetStrLen(pobjUserCodePrjMainPathMachineNameEN.gcPathId) != 8
  ) {
    throw '(errid:Watl000065)字段[GC路径Id]作为外键字段,长度应该为8(In 用户生成项目主路径_PC)!(clsUserCodePrjMainPathMachineNameBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function UserCodePrjMainPathMachineNameGetJSONStrByObj(
  pobjUserCodePrjMainPathMachineNameEN: clsUserCodePrjMainPathMachineNameEN,
): string {
  pobjUserCodePrjMainPathMachineNameEN.sfUpdFldSetStr =
    pobjUserCodePrjMainPathMachineNameEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjUserCodePrjMainPathMachineNameEN);
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
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function UserCodePrjMainPathMachineNameGetObjLstByJSONStr(
  strJSON: string,
): Array<clsUserCodePrjMainPathMachineNameEN> {
  let arrUserCodePrjMainPathMachineNameObjLst = new Array<clsUserCodePrjMainPathMachineNameEN>();
  if (strJSON === '') {
    return arrUserCodePrjMainPathMachineNameObjLst;
  }
  try {
    arrUserCodePrjMainPathMachineNameObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrUserCodePrjMainPathMachineNameObjLst;
  }
  return arrUserCodePrjMainPathMachineNameObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrUserCodePrjMainPathMachineNameObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function UserCodePrjMainPathMachineNameGetObjLstByJSONObjLst(
  arrUserCodePrjMainPathMachineNameObjLstS: Array<clsUserCodePrjMainPathMachineNameEN>,
): Array<clsUserCodePrjMainPathMachineNameEN> {
  const arrUserCodePrjMainPathMachineNameObjLst = new Array<clsUserCodePrjMainPathMachineNameEN>();
  for (const objInFor of arrUserCodePrjMainPathMachineNameObjLstS) {
    const obj1 = UserCodePrjMainPathMachineNameGetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrUserCodePrjMainPathMachineNameObjLst.push(obj1);
  }
  return arrUserCodePrjMainPathMachineNameObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function UserCodePrjMainPathMachineNameGetObjByJSONStr(
  strJSON: string,
): clsUserCodePrjMainPathMachineNameEN {
  let pobjUserCodePrjMainPathMachineNameEN = new clsUserCodePrjMainPathMachineNameEN();
  if (strJSON === '') {
    return pobjUserCodePrjMainPathMachineNameEN;
  }
  try {
    pobjUserCodePrjMainPathMachineNameEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjUserCodePrjMainPathMachineNameEN;
  }
  return pobjUserCodePrjMainPathMachineNameEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function UserCodePrjMainPathMachineNameGetCombineCondition(
  objUserCodePrjMainPathMachineNameCond: clsUserCodePrjMainPathMachineNameEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPathMachineNameEN.conUserCodePrjMainPathId,
    ) == true
  ) {
    const strComparisonOpUserCodePrjMainPathId: string =
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPathMachineNameEN.conUserCodePrjMainPathId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathMachineNameEN.conUserCodePrjMainPathId,
      objUserCodePrjMainPathMachineNameCond.userCodePrjMainPathId,
      strComparisonOpUserCodePrjMainPathId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPathMachineNameEN.conMachineName,
    ) == true
  ) {
    const strComparisonOpMachineName: string =
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPathMachineNameEN.conMachineName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathMachineNameEN.conMachineName,
      objUserCodePrjMainPathMachineNameCond.machineName,
      strComparisonOpMachineName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPathMachineNameEN.conCodePath,
    ) == true
  ) {
    const strComparisonOpCodePath: string =
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPathMachineNameEN.conCodePath
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathMachineNameEN.conCodePath,
      objUserCodePrjMainPathMachineNameCond.codePath,
      strComparisonOpCodePath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPathMachineNameEN.conGcPathId,
    ) == true
  ) {
    const strComparisonOpGcPathId: string =
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPathMachineNameEN.conGcPathId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathMachineNameEN.conGcPathId,
      objUserCodePrjMainPathMachineNameCond.gcPathId,
      strComparisonOpGcPathId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPathMachineNameEN.conCodePathBackup,
    ) == true
  ) {
    const strComparisonOpCodePathBackup: string =
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPathMachineNameEN.conCodePathBackup
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathMachineNameEN.conCodePathBackup,
      objUserCodePrjMainPathMachineNameCond.codePathBackup,
      strComparisonOpCodePathBackup,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPathMachineNameEN.conLogPath,
    ) == true
  ) {
    const strComparisonOpLogPath: string =
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPathMachineNameEN.conLogPath
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathMachineNameEN.conLogPath,
      objUserCodePrjMainPathMachineNameCond.logPath,
      strComparisonOpLogPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPathMachineNameEN.conIncludeXmlPath,
    ) == true
  ) {
    const strComparisonOpIncludeXmlPath: string =
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPathMachineNameEN.conIncludeXmlPath
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathMachineNameEN.conIncludeXmlPath,
      objUserCodePrjMainPathMachineNameCond.includeXmlPath,
      strComparisonOpIncludeXmlPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPathMachineNameEN.conCmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPathMachineNameEN.conCmPrjId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathMachineNameEN.conCmPrjId,
      objUserCodePrjMainPathMachineNameCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPathMachineNameEN.conUpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPathMachineNameEN.conUpdDate
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathMachineNameEN.conUpdDate,
      objUserCodePrjMainPathMachineNameCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPathMachineNameEN.conUpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPathMachineNameEN.conUpdUserId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathMachineNameEN.conUpdUserId,
      objUserCodePrjMainPathMachineNameCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp,
      clsUserCodePrjMainPathMachineNameEN.conMemo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objUserCodePrjMainPathMachineNameCond.dicFldComparisonOp[
        clsUserCodePrjMainPathMachineNameEN.conMemo
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserCodePrjMainPathMachineNameEN.conMemo,
      objUserCodePrjMainPathMachineNameCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--UserCodePrjMainPathMachineName(用户生成项目主路径_PC),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserCodePrjMainPathId: 生成主目录Id(要求唯一的字段)
 * @param strMachineName: 机器名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function UserCodePrjMainPathMachineNameGetUniCondStrUserCodePrjMainPathIdMachineName(
  objUserCodePrjMainPathMachineNameEN: clsUserCodePrjMainPathMachineNameEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and UserCodePrjMainPathId = '{0}'",
    objUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId,
  );
  strWhereCond += Format(
    " and MachineName = '{0}'",
    objUserCodePrjMainPathMachineNameEN.machineName,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--UserCodePrjMainPathMachineName(用户生成项目主路径_PC),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserCodePrjMainPathId: 生成主目录Id(要求唯一的字段)
 * @param strMachineName: 机器名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function UserCodePrjMainPathMachineNameGetUniCondStr4UpdateUserCodePrjMainPathIdMachineName(
  objUserCodePrjMainPathMachineNameEN: clsUserCodePrjMainPathMachineNameEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and UserCodePrjMainPathId <> '{0}'",
    objUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId,
  );
  strWhereCond += Format(
    " and MachineName <> '{0}'",
    objUserCodePrjMainPathMachineNameEN.machineName,
  );
  strWhereCond += Format(
    " and UserCodePrjMainPathId = '{0}'",
    objUserCodePrjMainPathMachineNameEN.userCodePrjMainPathId,
  );
  strWhereCond += Format(
    " and MachineName = '{0}'",
    objUserCodePrjMainPathMachineNameEN.machineName,
  );
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objUserCodePrjMainPathMachineNameENS:源对象
 * @param objUserCodePrjMainPathMachineNameENT:目标对象
 */
export function UserCodePrjMainPathMachineNameGetObjFromJsonObj(
  objUserCodePrjMainPathMachineNameENS: clsUserCodePrjMainPathMachineNameEN,
): clsUserCodePrjMainPathMachineNameEN {
  const objUserCodePrjMainPathMachineNameENT: clsUserCodePrjMainPathMachineNameEN =
    new clsUserCodePrjMainPathMachineNameEN();
  ObjectAssign(objUserCodePrjMainPathMachineNameENT, objUserCodePrjMainPathMachineNameENS);
  return objUserCodePrjMainPathMachineNameENT;
}
