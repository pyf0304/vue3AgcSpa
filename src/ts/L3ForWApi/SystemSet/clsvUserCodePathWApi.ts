/**
 * 类名:clsvUserCodePathWApi
 * 表名:vUserCodePath(00050205)
 * 版本:2024.10.15.1(服务器:WIN-SRV103-116)
 * 日期:2024/10/15 11:50:16
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v用户生成路径(vUserCodePath)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年10月15日.
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
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvUserCodePathEN } from '@/ts/L0Entity/SystemSet/clsvUserCodePathEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vUserCodePath_Controller = 'vUserCodePathApi';
export const vUserCodePath_ConstructorName = 'vUserCodePath';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function vUserCodePath_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsvUserCodePathEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvUserCodePathWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(vUserCodePath_Controller, strAction);

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
      const objvUserCodePath = vUserCodePath_GetObjFromJsonObj(returnObj);
      return objvUserCodePath;
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
        vUserCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePath_ConstructorName,
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
export async function vUserCodePath_GetObjBymIdCache(
  lngmId: number,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsvUserCodePathWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrvUserCodePathObjLstCache = await vUserCodePath_GetObjLstCache(strPrjId);
  try {
    const arrvUserCodePathSel = arrvUserCodePathObjLstCache.filter((x) => x.mId == lngmId);
    let objvUserCodePath: clsvUserCodePathEN;
    if (arrvUserCodePathSel.length > 0) {
      objvUserCodePath = arrvUserCodePathSel[0];
      return objvUserCodePath;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvUserCodePathConst = await vUserCodePath_GetObjBymIdAsync(lngmId);
        if (objvUserCodePathConst != null) {
          vUserCodePath_ReFreshThisCache(strPrjId);
          return objvUserCodePathConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vUserCodePath_ConstructorName,
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
export async function vUserCodePath_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsvUserCodePathWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvUserCodePathEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvUserCodePathCache: clsvUserCodePathEN = JSON.parse(strTempObj);
    return objvUserCodePathCache;
  }
  try {
    const objvUserCodePath = await vUserCodePath_GetObjBymIdAsync(lngmId);
    if (objvUserCodePath != null) {
      localStorage.setItem(strKey, JSON.stringify(objvUserCodePath));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvUserCodePath;
    }
    return objvUserCodePath;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      vUserCodePath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vUserCodePath_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvUserCodePathWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvUserCodePathWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvUserCodePathEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvUserCodePathEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvUserCodePathEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objvUserCodePath = await vUserCodePath_GetObjBymIdCache(lngmId, strPrjIdClassfy);
  if (objvUserCodePath == null) return '';
  if (objvUserCodePath.GetFldValue(strOutFldName) == null) return '';
  return objvUserCodePath.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vUserCodePath_SortFunDefa(a: clsvUserCodePathEN, b: clsvUserCodePathEN): number {
  return a.mId - b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vUserCodePath_SortFunDefa2Fld(
  a: clsvUserCodePathEN,
  b: clsvUserCodePathEN,
): number {
  if (a.cMProjectAppRelaId == b.cMProjectAppRelaId) return a.codeTypeId.localeCompare(b.codeTypeId);
  else return a.cMProjectAppRelaId - b.cMProjectAppRelaId;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vUserCodePath_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvUserCodePathEN.con_mId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return a.mId - b.mId;
        };
      case clsvUserCodePathEN.con_CMProjectAppRelaId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return a.cMProjectAppRelaId - b.cMProjectAppRelaId;
        };
      case clsvUserCodePathEN.con_CodeTypeId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return a.codeTypeId.localeCompare(b.codeTypeId);
        };
      case clsvUserCodePathEN.con_ProgLangTypeId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return a.progLangTypeId.localeCompare(b.progLangTypeId);
        };
      case clsvUserCodePathEN.con_ProgLangTypeName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.progLangTypeName == null) return -1;
          if (b.progLangTypeName == null) return 1;
          return a.progLangTypeName.localeCompare(b.progLangTypeName);
        };
      case clsvUserCodePathEN.con_CmPrjId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.cmPrjId == null) return -1;
          if (b.cmPrjId == null) return 1;
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsvUserCodePathEN.con_ApplicationTypeName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.applicationTypeName == null) return -1;
          if (b.applicationTypeName == null) return 1;
          return a.applicationTypeName.localeCompare(b.applicationTypeName);
        };
      case clsvUserCodePathEN.con_ApplicationTypeENName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.applicationTypeENName == null) return -1;
          if (b.applicationTypeENName == null) return 1;
          return a.applicationTypeENName.localeCompare(b.applicationTypeENName);
        };
      case clsvUserCodePathEN.con_PrjFileStateName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.prjFileStateName == null) return -1;
          if (b.prjFileStateName == null) return 1;
          return a.prjFileStateName.localeCompare(b.prjFileStateName);
        };
      case clsvUserCodePathEN.con_AppOrderNum:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return a.appOrderNum - b.appOrderNum;
        };
      case clsvUserCodePathEN.con_NewCodePath:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return a.newCodePath.localeCompare(b.newCodePath);
        };
      case clsvUserCodePathEN.con_NewCodePathBackup:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return a.newCodePathBackup.localeCompare(b.newCodePathBackup);
        };
      case clsvUserCodePathEN.con_CodeTypeName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return a.codeTypeName.localeCompare(b.codeTypeName);
        };
      case clsvUserCodePathEN.con_CodeTypeENName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.codeTypeENName == null) return -1;
          if (b.codeTypeENName == null) return 1;
          return a.codeTypeENName.localeCompare(b.codeTypeENName);
        };
      case clsvUserCodePathEN.con_OrderNum:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsvUserCodePathEN.con_ApplicationTypeId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsvUserCodePathEN.con_TabMainTypeId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.tabMainTypeId == null) return -1;
          if (b.tabMainTypeId == null) return 1;
          return a.tabMainTypeId.localeCompare(b.tabMainTypeId);
        };
      case clsvUserCodePathEN.con_IsGeneCode:
        return (a: clsvUserCodePathEN) => {
          if (a.isGeneCode == true) return 1;
          else return -1;
        };
      case clsvUserCodePathEN.con_ProjectFileName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return a.projectFileName.localeCompare(b.projectFileName);
        };
      case clsvUserCodePathEN.con_ProjectPath:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return a.projectPath.localeCompare(b.projectPath);
        };
      case clsvUserCodePathEN.con_PrjFileStateId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.prjFileStateId == null) return -1;
          if (b.prjFileStateId == null) return 1;
          return a.prjFileStateId.localeCompare(b.prjFileStateId);
        };
      case clsvUserCodePathEN.con_CodePath:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return a.codePath.localeCompare(b.codePath);
        };
      case clsvUserCodePathEN.con_CodePathBackup:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return a.codePathBackup.localeCompare(b.codePathBackup);
        };
      case clsvUserCodePathEN.con_SuffixPath:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.suffixPath == null) return -1;
          if (b.suffixPath == null) return 1;
          return a.suffixPath.localeCompare(b.suffixPath);
        };
      case clsvUserCodePathEN.con_IsTemplate:
        return (a: clsvUserCodePathEN) => {
          if (a.isTemplate == true) return 1;
          else return -1;
        };
      case clsvUserCodePathEN.con_IsExistCodePath:
        return (a: clsvUserCodePathEN) => {
          if (a.isExistCodePath == true) return 1;
          else return -1;
        };
      case clsvUserCodePathEN.con_IsExistCodePathBackup:
        return (a: clsvUserCodePathEN) => {
          if (a.isExistCodePathBackup == true) return 1;
          else return -1;
        };
      case clsvUserCodePathEN.con_PrjId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsvUserCodePathEN.con_UpdDate:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvUserCodePathEN.con_UpdUserId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsvUserCodePathEN.con_Memo:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvUserCodePathEN.con_ProgLangTypeSimName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.progLangTypeSimName == null) return -1;
          if (b.progLangTypeSimName == null) return 1;
          return a.progLangTypeSimName.localeCompare(b.progLangTypeSimName);
        };
      case clsvUserCodePathEN.con_ApplicationTypeSimName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.applicationTypeSimName == null) return -1;
          if (b.applicationTypeSimName == null) return 1;
          return a.applicationTypeSimName.localeCompare(b.applicationTypeSimName);
        };
      case clsvUserCodePathEN.con_CmPrjName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.cmPrjName == null) return -1;
          if (b.cmPrjName == null) return 1;
          return a.cmPrjName.localeCompare(b.cmPrjName);
        };
      case clsvUserCodePathEN.con_TabMainTypeName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.tabMainTypeName == null) return -1;
          if (b.tabMainTypeName == null) return 1;
          return a.tabMainTypeName.localeCompare(b.tabMainTypeName);
        };
      case clsvUserCodePathEN.con_CodeTypeSimName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (a.codeTypeSimName == null) return -1;
          if (b.codeTypeSimName == null) return 1;
          return a.codeTypeSimName.localeCompare(b.codeTypeSimName);
        };
      case clsvUserCodePathEN.con_IsExistCodePathP:
        return (a: clsvUserCodePathEN) => {
          if (a.isExistCodePathP == true) return 1;
          else return -1;
        };
      case clsvUserCodePathEN.con_IsExistCodePathBackupP:
        return (a: clsvUserCodePathEN) => {
          if (a.isExistCodePathBackupP == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vUserCodePath]中不存在!(in ${vUserCodePath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvUserCodePathEN.con_mId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return b.mId - a.mId;
        };
      case clsvUserCodePathEN.con_CMProjectAppRelaId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return b.cMProjectAppRelaId - a.cMProjectAppRelaId;
        };
      case clsvUserCodePathEN.con_CodeTypeId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return b.codeTypeId.localeCompare(a.codeTypeId);
        };
      case clsvUserCodePathEN.con_ProgLangTypeId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return b.progLangTypeId.localeCompare(a.progLangTypeId);
        };
      case clsvUserCodePathEN.con_ProgLangTypeName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.progLangTypeName == null) return -1;
          if (a.progLangTypeName == null) return 1;
          return b.progLangTypeName.localeCompare(a.progLangTypeName);
        };
      case clsvUserCodePathEN.con_CmPrjId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.cmPrjId == null) return -1;
          if (a.cmPrjId == null) return 1;
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsvUserCodePathEN.con_ApplicationTypeName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.applicationTypeName == null) return -1;
          if (a.applicationTypeName == null) return 1;
          return b.applicationTypeName.localeCompare(a.applicationTypeName);
        };
      case clsvUserCodePathEN.con_ApplicationTypeENName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.applicationTypeENName == null) return -1;
          if (a.applicationTypeENName == null) return 1;
          return b.applicationTypeENName.localeCompare(a.applicationTypeENName);
        };
      case clsvUserCodePathEN.con_PrjFileStateName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.prjFileStateName == null) return -1;
          if (a.prjFileStateName == null) return 1;
          return b.prjFileStateName.localeCompare(a.prjFileStateName);
        };
      case clsvUserCodePathEN.con_AppOrderNum:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return b.appOrderNum - a.appOrderNum;
        };
      case clsvUserCodePathEN.con_NewCodePath:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return b.newCodePath.localeCompare(a.newCodePath);
        };
      case clsvUserCodePathEN.con_NewCodePathBackup:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return b.newCodePathBackup.localeCompare(a.newCodePathBackup);
        };
      case clsvUserCodePathEN.con_CodeTypeName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return b.codeTypeName.localeCompare(a.codeTypeName);
        };
      case clsvUserCodePathEN.con_CodeTypeENName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.codeTypeENName == null) return -1;
          if (a.codeTypeENName == null) return 1;
          return b.codeTypeENName.localeCompare(a.codeTypeENName);
        };
      case clsvUserCodePathEN.con_OrderNum:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsvUserCodePathEN.con_ApplicationTypeId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsvUserCodePathEN.con_TabMainTypeId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.tabMainTypeId == null) return -1;
          if (a.tabMainTypeId == null) return 1;
          return b.tabMainTypeId.localeCompare(a.tabMainTypeId);
        };
      case clsvUserCodePathEN.con_IsGeneCode:
        return (b: clsvUserCodePathEN) => {
          if (b.isGeneCode == true) return 1;
          else return -1;
        };
      case clsvUserCodePathEN.con_ProjectFileName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return b.projectFileName.localeCompare(a.projectFileName);
        };
      case clsvUserCodePathEN.con_ProjectPath:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return b.projectPath.localeCompare(a.projectPath);
        };
      case clsvUserCodePathEN.con_PrjFileStateId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.prjFileStateId == null) return -1;
          if (a.prjFileStateId == null) return 1;
          return b.prjFileStateId.localeCompare(a.prjFileStateId);
        };
      case clsvUserCodePathEN.con_CodePath:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return b.codePath.localeCompare(a.codePath);
        };
      case clsvUserCodePathEN.con_CodePathBackup:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return b.codePathBackup.localeCompare(a.codePathBackup);
        };
      case clsvUserCodePathEN.con_SuffixPath:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.suffixPath == null) return -1;
          if (a.suffixPath == null) return 1;
          return b.suffixPath.localeCompare(a.suffixPath);
        };
      case clsvUserCodePathEN.con_IsTemplate:
        return (b: clsvUserCodePathEN) => {
          if (b.isTemplate == true) return 1;
          else return -1;
        };
      case clsvUserCodePathEN.con_IsExistCodePath:
        return (b: clsvUserCodePathEN) => {
          if (b.isExistCodePath == true) return 1;
          else return -1;
        };
      case clsvUserCodePathEN.con_IsExistCodePathBackup:
        return (b: clsvUserCodePathEN) => {
          if (b.isExistCodePathBackup == true) return 1;
          else return -1;
        };
      case clsvUserCodePathEN.con_PrjId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsvUserCodePathEN.con_UpdDate:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvUserCodePathEN.con_UpdUserId:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsvUserCodePathEN.con_Memo:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvUserCodePathEN.con_ProgLangTypeSimName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.progLangTypeSimName == null) return -1;
          if (a.progLangTypeSimName == null) return 1;
          return b.progLangTypeSimName.localeCompare(a.progLangTypeSimName);
        };
      case clsvUserCodePathEN.con_ApplicationTypeSimName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.applicationTypeSimName == null) return -1;
          if (a.applicationTypeSimName == null) return 1;
          return b.applicationTypeSimName.localeCompare(a.applicationTypeSimName);
        };
      case clsvUserCodePathEN.con_CmPrjName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.cmPrjName == null) return -1;
          if (a.cmPrjName == null) return 1;
          return b.cmPrjName.localeCompare(a.cmPrjName);
        };
      case clsvUserCodePathEN.con_TabMainTypeName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.tabMainTypeName == null) return -1;
          if (a.tabMainTypeName == null) return 1;
          return b.tabMainTypeName.localeCompare(a.tabMainTypeName);
        };
      case clsvUserCodePathEN.con_CodeTypeSimName:
        return (a: clsvUserCodePathEN, b: clsvUserCodePathEN) => {
          if (b.codeTypeSimName == null) return -1;
          if (a.codeTypeSimName == null) return 1;
          return b.codeTypeSimName.localeCompare(a.codeTypeSimName);
        };
      case clsvUserCodePathEN.con_IsExistCodePathP:
        return (b: clsvUserCodePathEN) => {
          if (b.isExistCodePathP == true) return 1;
          else return -1;
        };
      case clsvUserCodePathEN.con_IsExistCodePathBackupP:
        return (b: clsvUserCodePathEN) => {
          if (b.isExistCodePathBackupP == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vUserCodePath]中不存在!(in ${vUserCodePath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vUserCodePath_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvUserCodePathEN.con_mId:
      return (obj: clsvUserCodePathEN) => {
        return obj.mId === value;
      };
    case clsvUserCodePathEN.con_CMProjectAppRelaId:
      return (obj: clsvUserCodePathEN) => {
        return obj.cMProjectAppRelaId === value;
      };
    case clsvUserCodePathEN.con_CodeTypeId:
      return (obj: clsvUserCodePathEN) => {
        return obj.codeTypeId === value;
      };
    case clsvUserCodePathEN.con_ProgLangTypeId:
      return (obj: clsvUserCodePathEN) => {
        return obj.progLangTypeId === value;
      };
    case clsvUserCodePathEN.con_ProgLangTypeName:
      return (obj: clsvUserCodePathEN) => {
        return obj.progLangTypeName === value;
      };
    case clsvUserCodePathEN.con_CmPrjId:
      return (obj: clsvUserCodePathEN) => {
        return obj.cmPrjId === value;
      };
    case clsvUserCodePathEN.con_ApplicationTypeName:
      return (obj: clsvUserCodePathEN) => {
        return obj.applicationTypeName === value;
      };
    case clsvUserCodePathEN.con_ApplicationTypeENName:
      return (obj: clsvUserCodePathEN) => {
        return obj.applicationTypeENName === value;
      };
    case clsvUserCodePathEN.con_PrjFileStateName:
      return (obj: clsvUserCodePathEN) => {
        return obj.prjFileStateName === value;
      };
    case clsvUserCodePathEN.con_AppOrderNum:
      return (obj: clsvUserCodePathEN) => {
        return obj.appOrderNum === value;
      };
    case clsvUserCodePathEN.con_NewCodePath:
      return (obj: clsvUserCodePathEN) => {
        return obj.newCodePath === value;
      };
    case clsvUserCodePathEN.con_NewCodePathBackup:
      return (obj: clsvUserCodePathEN) => {
        return obj.newCodePathBackup === value;
      };
    case clsvUserCodePathEN.con_CodeTypeName:
      return (obj: clsvUserCodePathEN) => {
        return obj.codeTypeName === value;
      };
    case clsvUserCodePathEN.con_CodeTypeENName:
      return (obj: clsvUserCodePathEN) => {
        return obj.codeTypeENName === value;
      };
    case clsvUserCodePathEN.con_OrderNum:
      return (obj: clsvUserCodePathEN) => {
        return obj.orderNum === value;
      };
    case clsvUserCodePathEN.con_ApplicationTypeId:
      return (obj: clsvUserCodePathEN) => {
        return obj.applicationTypeId === value;
      };
    case clsvUserCodePathEN.con_TabMainTypeId:
      return (obj: clsvUserCodePathEN) => {
        return obj.tabMainTypeId === value;
      };
    case clsvUserCodePathEN.con_IsGeneCode:
      return (obj: clsvUserCodePathEN) => {
        return obj.isGeneCode === value;
      };
    case clsvUserCodePathEN.con_ProjectFileName:
      return (obj: clsvUserCodePathEN) => {
        return obj.projectFileName === value;
      };
    case clsvUserCodePathEN.con_ProjectPath:
      return (obj: clsvUserCodePathEN) => {
        return obj.projectPath === value;
      };
    case clsvUserCodePathEN.con_PrjFileStateId:
      return (obj: clsvUserCodePathEN) => {
        return obj.prjFileStateId === value;
      };
    case clsvUserCodePathEN.con_CodePath:
      return (obj: clsvUserCodePathEN) => {
        return obj.codePath === value;
      };
    case clsvUserCodePathEN.con_CodePathBackup:
      return (obj: clsvUserCodePathEN) => {
        return obj.codePathBackup === value;
      };
    case clsvUserCodePathEN.con_SuffixPath:
      return (obj: clsvUserCodePathEN) => {
        return obj.suffixPath === value;
      };
    case clsvUserCodePathEN.con_IsTemplate:
      return (obj: clsvUserCodePathEN) => {
        return obj.isTemplate === value;
      };
    case clsvUserCodePathEN.con_IsExistCodePath:
      return (obj: clsvUserCodePathEN) => {
        return obj.isExistCodePath === value;
      };
    case clsvUserCodePathEN.con_IsExistCodePathBackup:
      return (obj: clsvUserCodePathEN) => {
        return obj.isExistCodePathBackup === value;
      };
    case clsvUserCodePathEN.con_PrjId:
      return (obj: clsvUserCodePathEN) => {
        return obj.prjId === value;
      };
    case clsvUserCodePathEN.con_UpdDate:
      return (obj: clsvUserCodePathEN) => {
        return obj.updDate === value;
      };
    case clsvUserCodePathEN.con_UpdUserId:
      return (obj: clsvUserCodePathEN) => {
        return obj.updUserId === value;
      };
    case clsvUserCodePathEN.con_Memo:
      return (obj: clsvUserCodePathEN) => {
        return obj.memo === value;
      };
    case clsvUserCodePathEN.con_ProgLangTypeSimName:
      return (obj: clsvUserCodePathEN) => {
        return obj.progLangTypeSimName === value;
      };
    case clsvUserCodePathEN.con_ApplicationTypeSimName:
      return (obj: clsvUserCodePathEN) => {
        return obj.applicationTypeSimName === value;
      };
    case clsvUserCodePathEN.con_CmPrjName:
      return (obj: clsvUserCodePathEN) => {
        return obj.cmPrjName === value;
      };
    case clsvUserCodePathEN.con_TabMainTypeName:
      return (obj: clsvUserCodePathEN) => {
        return obj.tabMainTypeName === value;
      };
    case clsvUserCodePathEN.con_CodeTypeSimName:
      return (obj: clsvUserCodePathEN) => {
        return obj.codeTypeSimName === value;
      };
    case clsvUserCodePathEN.con_IsExistCodePathP:
      return (obj: clsvUserCodePathEN) => {
        return obj.isExistCodePathP === value;
      };
    case clsvUserCodePathEN.con_IsExistCodePathBackupP:
      return (obj: clsvUserCodePathEN) => {
        return obj.isExistCodePathBackupP === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vUserCodePath]中不存在!(in ${vUserCodePath_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function vUserCodePath_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsvUserCodePathWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsvUserCodePathWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvUserCodePathEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrvUserCodePath = await vUserCodePath_GetObjLstCache(strPrjIdClassfy);
  if (arrvUserCodePath == null) return [];
  let arrvUserCodePathSel = arrvUserCodePath;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvUserCodePathSel = arrvUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvUserCodePathSel = arrvUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvUserCodePathSel = arrvUserCodePathSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvUserCodePathSel = arrvUserCodePathSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvUserCodePathSel = arrvUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvUserCodePathSel = arrvUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvUserCodePathSel = arrvUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvUserCodePathSel = arrvUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvUserCodePathSel = arrvUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvUserCodePathSel = arrvUserCodePathSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvUserCodePathSel.length == 0) return [];
  return arrvUserCodePathSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vUserCodePath_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vUserCodePath_Controller, strAction);

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
        vUserCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePath_ConstructorName,
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
export async function vUserCodePath_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vUserCodePath_Controller, strAction);

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
        vUserCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePath_ConstructorName,
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
export async function vUserCodePath_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vUserCodePath_Controller, strAction);

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
        vUserCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePath_ConstructorName,
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
export async function vUserCodePath_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvUserCodePathEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vUserCodePath_Controller, strAction);

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
      const objvUserCodePath = vUserCodePath_GetObjFromJsonObj(returnObj);
      return objvUserCodePath;
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
        vUserCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePath_ConstructorName,
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
export async function vUserCodePath_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvUserCodePathEN.WhereFormat) == false) {
    strWhereCond = Format(clsvUserCodePathEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvUserCodePathEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvUserCodePathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvUserCodePathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvUserCodePathExObjLstCache: Array<clsvUserCodePathEN> = CacheHelper.Get(strKey);
    const arrvUserCodePathObjLstT = vUserCodePath_GetObjLstByJSONObjLst(
      arrvUserCodePathExObjLstCache,
    );
    return arrvUserCodePathObjLstT;
  }
  try {
    const arrvUserCodePathExObjLst = await vUserCodePath_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvUserCodePathExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvUserCodePathExObjLst.length,
    );
    console.log(strInfo);
    return arrvUserCodePathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vUserCodePath_ConstructorName,
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
export async function vUserCodePath_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvUserCodePathEN.WhereFormat) == false) {
    strWhereCond = Format(clsvUserCodePathEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvUserCodePathEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvUserCodePathEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvUserCodePathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvUserCodePathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvUserCodePathExObjLstCache: Array<clsvUserCodePathEN> = JSON.parse(strTempObjLst);
    const arrvUserCodePathObjLstT = vUserCodePath_GetObjLstByJSONObjLst(
      arrvUserCodePathExObjLstCache,
    );
    return arrvUserCodePathObjLstT;
  }
  try {
    const arrvUserCodePathExObjLst = await vUserCodePath_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvUserCodePathExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvUserCodePathExObjLst.length,
    );
    console.log(strInfo);
    return arrvUserCodePathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vUserCodePath_ConstructorName,
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
export async function vUserCodePath_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvUserCodePathEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvUserCodePathObjLstCache: Array<clsvUserCodePathEN> = JSON.parse(strTempObjLst);
    return arrvUserCodePathObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vUserCodePath_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvUserCodePathEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vUserCodePath_Controller, strAction);

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
          vUserCodePath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vUserCodePath_GetObjLstByJSONObjLst(returnObjLst);
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
        vUserCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePath_ConstructorName,
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
export async function vUserCodePath_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvUserCodePathEN.WhereFormat) == false) {
    strWhereCond = Format(clsvUserCodePathEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsvUserCodePathEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsvUserCodePathEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsvUserCodePathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvUserCodePathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvUserCodePathExObjLstCache: Array<clsvUserCodePathEN> = JSON.parse(strTempObjLst);
    const arrvUserCodePathObjLstT = vUserCodePath_GetObjLstByJSONObjLst(
      arrvUserCodePathExObjLstCache,
    );
    return arrvUserCodePathObjLstT;
  }
  try {
    const arrvUserCodePathExObjLst = await vUserCodePath_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvUserCodePathExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvUserCodePathExObjLst.length,
    );
    console.log(strInfo);
    return arrvUserCodePathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vUserCodePath_ConstructorName,
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
export async function vUserCodePath_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvUserCodePathEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvUserCodePathObjLstCache: Array<clsvUserCodePathEN> = JSON.parse(strTempObjLst);
    return arrvUserCodePathObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vUserCodePath_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsvUserCodePathEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsvUserCodePathWApi.vUserCodePath_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsvUserCodePathWApi.vUserCodePath_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvUserCodePathObjLstCache;
  switch (clsvUserCodePathEN.CacheModeId) {
    case '04': //sessionStorage
      arrvUserCodePathObjLstCache = await vUserCodePath_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrvUserCodePathObjLstCache = await vUserCodePath_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrvUserCodePathObjLstCache = await vUserCodePath_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrvUserCodePathObjLstCache = await vUserCodePath_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrvUserCodePathObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vUserCodePath_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvUserCodePathObjLstCache;
  switch (clsvUserCodePathEN.CacheModeId) {
    case '04': //sessionStorage
      arrvUserCodePathObjLstCache = await vUserCodePath_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrvUserCodePathObjLstCache = await vUserCodePath_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrvUserCodePathObjLstCache = null;
      break;
    default:
      arrvUserCodePathObjLstCache = null;
      break;
  }
  return arrvUserCodePathObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vUserCodePath_GetSubObjLstCache(
  objvUserCodePathCond: clsvUserCodePathEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvUserCodePathObjLstCache = await vUserCodePath_GetObjLstCache(strPrjId);
  let arrvUserCodePathSel = arrvUserCodePathObjLstCache;
  if (
    objvUserCodePathCond.sfFldComparisonOp == null ||
    objvUserCodePathCond.sfFldComparisonOp == ''
  )
    return arrvUserCodePathSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvUserCodePathCond.sfFldComparisonOp,
  );
  //console.log("clsvUserCodePathWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvUserCodePathCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvUserCodePathSel = arrvUserCodePathSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvUserCodePathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvUserCodePathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvUserCodePathCond),
      vUserCodePath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvUserCodePathEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function vUserCodePath_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsvUserCodePathEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(vUserCodePath_Controller, strAction);

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
          vUserCodePath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vUserCodePath_GetObjLstByJSONObjLst(returnObjLst);
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
        vUserCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePath_ConstructorName,
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
export async function vUserCodePath_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrvUserCodePathObjLstCache = await vUserCodePath_GetObjLstCache(strPrjId);
    const arrvUserCodePathSel = arrvUserCodePathObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrvUserCodePathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      vUserCodePath_ConstructorName,
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
export async function vUserCodePath_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvUserCodePathEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vUserCodePath_Controller, strAction);

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
          vUserCodePath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vUserCodePath_GetObjLstByJSONObjLst(returnObjLst);
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
        vUserCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePath_ConstructorName,
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
export async function vUserCodePath_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvUserCodePathEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vUserCodePath_Controller, strAction);

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
          vUserCodePath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vUserCodePath_GetObjLstByJSONObjLst(returnObjLst);
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
        vUserCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePath_ConstructorName,
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
export async function vUserCodePath_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvUserCodePathEN>();
  const arrvUserCodePathObjLstCache = await vUserCodePath_GetObjLstCache(strPrjId);
  if (arrvUserCodePathObjLstCache.length == 0) return arrvUserCodePathObjLstCache;
  let arrvUserCodePathSel = arrvUserCodePathObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvUserCodePathCond = new clsvUserCodePathEN();
  ObjectAssign(objvUserCodePathCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvUserCodePathWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvUserCodePathSel = arrvUserCodePathSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvUserCodePathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvUserCodePathSel.length == 0) return arrvUserCodePathSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvUserCodePathSel = arrvUserCodePathSel.sort(
        vUserCodePath_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvUserCodePathSel = arrvUserCodePathSel.sort(objPagerPara.sortFun);
    }
    arrvUserCodePathSel = arrvUserCodePathSel.slice(intStart, intEnd);
    return arrvUserCodePathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vUserCodePath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvUserCodePathEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vUserCodePath_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvUserCodePathEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvUserCodePathEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vUserCodePath_Controller, strAction);

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
          vUserCodePath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vUserCodePath_GetObjLstByJSONObjLst(returnObjLst);
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
        vUserCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePath_ConstructorName,
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
export async function vUserCodePath_IsExistRecordCache(
  objvUserCodePathCond: clsvUserCodePathEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvUserCodePathObjLstCache = await vUserCodePath_GetObjLstCache(strPrjId);
  if (arrvUserCodePathObjLstCache == null) return false;
  let arrvUserCodePathSel = arrvUserCodePathObjLstCache;
  if (
    objvUserCodePathCond.sfFldComparisonOp == null ||
    objvUserCodePathCond.sfFldComparisonOp == ''
  )
    return arrvUserCodePathSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvUserCodePathCond.sfFldComparisonOp,
  );
  //console.log("clsvUserCodePathWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvUserCodePathCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvUserCodePathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvUserCodePathSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvUserCodePathCond),
      vUserCodePath_ConstructorName,
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
export async function vUserCodePath_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vUserCodePath_Controller, strAction);

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
        vUserCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePath_ConstructorName,
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
export async function vUserCodePath_IsExistCache(lngmId: number, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvUserCodePathObjLstCache = await vUserCodePath_GetObjLstCache(strPrjId);
  if (arrvUserCodePathObjLstCache == null) return false;
  try {
    const arrvUserCodePathSel = arrvUserCodePathObjLstCache.filter((x) => x.mId == lngmId);
    if (arrvUserCodePathSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      vUserCodePath_ConstructorName,
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
export async function vUserCodePath_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vUserCodePath_Controller, strAction);

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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vUserCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePath_ConstructorName,
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
export async function vUserCodePath_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vUserCodePath_Controller, strAction);

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
        vUserCodePath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vUserCodePath_ConstructorName,
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
 * @param objvUserCodePathCond:条件对象
 * @returns 对象列表记录数
 */
export async function vUserCodePath_GetRecCountByCondCache(
  objvUserCodePathCond: clsvUserCodePathEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvUserCodePathObjLstCache = await vUserCodePath_GetObjLstCache(strPrjId);
  if (arrvUserCodePathObjLstCache == null) return 0;
  let arrvUserCodePathSel = arrvUserCodePathObjLstCache;
  if (
    objvUserCodePathCond.sfFldComparisonOp == null ||
    objvUserCodePathCond.sfFldComparisonOp == ''
  )
    return arrvUserCodePathSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvUserCodePathCond.sfFldComparisonOp,
  );
  //console.log("clsvUserCodePathWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvUserCodePathCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvUserCodePathSel = arrvUserCodePathSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvUserCodePathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvUserCodePathSel = arrvUserCodePathSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvUserCodePathSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvUserCodePathCond),
      vUserCodePath_ConstructorName,
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
export function vUserCodePath_GetWebApiUrl(strController: string, strAction: string): string {
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
export function vUserCodePath_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsvUserCodePathWApi.vUserCodePath_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsvUserCodePathWApi.vUserCodePath_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvUserCodePathEN._CurrTabName, strPrjId);
    switch (clsvUserCodePathEN.CacheModeId) {
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
    clsvUserCodePathEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function vUserCodePath_GetLastRefreshTime(): string {
  if (clsvUserCodePathEN._RefreshTimeLst.length == 0) return '';
  return clsvUserCodePathEN._RefreshTimeLst[clsvUserCodePathEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vUserCodePath_GetJSONStrByObj(pobjvUserCodePathEN: clsvUserCodePathEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvUserCodePathEN);
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
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vUserCodePath_GetObjLstByJSONStr(strJSON: string): Array<clsvUserCodePathEN> {
  let arrvUserCodePathObjLst = new Array<clsvUserCodePathEN>();
  if (strJSON === '') {
    return arrvUserCodePathObjLst;
  }
  try {
    arrvUserCodePathObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvUserCodePathObjLst;
  }
  return arrvUserCodePathObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvUserCodePathObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vUserCodePath_GetObjLstByJSONObjLst(
  arrvUserCodePathObjLstS: Array<clsvUserCodePathEN>,
): Array<clsvUserCodePathEN> {
  const arrvUserCodePathObjLst = new Array<clsvUserCodePathEN>();
  for (const objInFor of arrvUserCodePathObjLstS) {
    const obj1 = vUserCodePath_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvUserCodePathObjLst.push(obj1);
  }
  return arrvUserCodePathObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-10-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vUserCodePath_GetObjByJSONStr(strJSON: string): clsvUserCodePathEN {
  let pobjvUserCodePathEN = new clsvUserCodePathEN();
  if (strJSON === '') {
    return pobjvUserCodePathEN;
  }
  try {
    pobjvUserCodePathEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvUserCodePathEN;
  }
  return pobjvUserCodePathEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vUserCodePath_GetCombineCondition(
  objvUserCodePathCond: clsvUserCodePathEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvUserCodePathEN.con_mId,
      objvUserCodePathCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_CMProjectAppRelaId,
    ) == true
  ) {
    const strComparisonOpCMProjectAppRelaId: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_CMProjectAppRelaId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvUserCodePathEN.con_CMProjectAppRelaId,
      objvUserCodePathCond.cMProjectAppRelaId,
      strComparisonOpCMProjectAppRelaId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_CodeTypeId,
    ) == true
  ) {
    const strComparisonOpCodeTypeId: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_CodeTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_CodeTypeId,
      objvUserCodePathCond.codeTypeId,
      strComparisonOpCodeTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_ProgLangTypeId,
    ) == true
  ) {
    const strComparisonOpProgLangTypeId: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_ProgLangTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_ProgLangTypeId,
      objvUserCodePathCond.progLangTypeId,
      strComparisonOpProgLangTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_ProgLangTypeName,
    ) == true
  ) {
    const strComparisonOpProgLangTypeName: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_ProgLangTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_ProgLangTypeName,
      objvUserCodePathCond.progLangTypeName,
      strComparisonOpProgLangTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_CmPrjId,
      objvUserCodePathCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_ApplicationTypeName,
    ) == true
  ) {
    const strComparisonOpApplicationTypeName: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_ApplicationTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_ApplicationTypeName,
      objvUserCodePathCond.applicationTypeName,
      strComparisonOpApplicationTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_ApplicationTypeENName,
    ) == true
  ) {
    const strComparisonOpApplicationTypeENName: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_ApplicationTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_ApplicationTypeENName,
      objvUserCodePathCond.applicationTypeENName,
      strComparisonOpApplicationTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_PrjFileStateName,
    ) == true
  ) {
    const strComparisonOpPrjFileStateName: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_PrjFileStateName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_PrjFileStateName,
      objvUserCodePathCond.prjFileStateName,
      strComparisonOpPrjFileStateName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_AppOrderNum,
    ) == true
  ) {
    const strComparisonOpAppOrderNum: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_AppOrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvUserCodePathEN.con_AppOrderNum,
      objvUserCodePathCond.appOrderNum,
      strComparisonOpAppOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_NewCodePath,
    ) == true
  ) {
    const strComparisonOpNewCodePath: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_NewCodePath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_NewCodePath,
      objvUserCodePathCond.newCodePath,
      strComparisonOpNewCodePath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_NewCodePathBackup,
    ) == true
  ) {
    const strComparisonOpNewCodePathBackup: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_NewCodePathBackup];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_NewCodePathBackup,
      objvUserCodePathCond.newCodePathBackup,
      strComparisonOpNewCodePathBackup,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_CodeTypeName,
    ) == true
  ) {
    const strComparisonOpCodeTypeName: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_CodeTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_CodeTypeName,
      objvUserCodePathCond.codeTypeName,
      strComparisonOpCodeTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_CodeTypeENName,
    ) == true
  ) {
    const strComparisonOpCodeTypeENName: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_CodeTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_CodeTypeENName,
      objvUserCodePathCond.codeTypeENName,
      strComparisonOpCodeTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvUserCodePathEN.con_OrderNum,
      objvUserCodePathCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvUserCodePathEN.con_ApplicationTypeId,
      objvUserCodePathCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_TabMainTypeId,
    ) == true
  ) {
    const strComparisonOpTabMainTypeId: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_TabMainTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_TabMainTypeId,
      objvUserCodePathCond.tabMainTypeId,
      strComparisonOpTabMainTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_IsGeneCode,
    ) == true
  ) {
    if (objvUserCodePathCond.isGeneCode == true) {
      strWhereCond += Format(" And {0} = '1'", clsvUserCodePathEN.con_IsGeneCode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvUserCodePathEN.con_IsGeneCode);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_ProjectFileName,
    ) == true
  ) {
    const strComparisonOpProjectFileName: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_ProjectFileName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_ProjectFileName,
      objvUserCodePathCond.projectFileName,
      strComparisonOpProjectFileName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_ProjectPath,
    ) == true
  ) {
    const strComparisonOpProjectPath: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_ProjectPath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_ProjectPath,
      objvUserCodePathCond.projectPath,
      strComparisonOpProjectPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_PrjFileStateId,
    ) == true
  ) {
    const strComparisonOpPrjFileStateId: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_PrjFileStateId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_PrjFileStateId,
      objvUserCodePathCond.prjFileStateId,
      strComparisonOpPrjFileStateId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_CodePath,
    ) == true
  ) {
    const strComparisonOpCodePath: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_CodePath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_CodePath,
      objvUserCodePathCond.codePath,
      strComparisonOpCodePath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_CodePathBackup,
    ) == true
  ) {
    const strComparisonOpCodePathBackup: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_CodePathBackup];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_CodePathBackup,
      objvUserCodePathCond.codePathBackup,
      strComparisonOpCodePathBackup,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_SuffixPath,
    ) == true
  ) {
    const strComparisonOpSuffixPath: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_SuffixPath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_SuffixPath,
      objvUserCodePathCond.suffixPath,
      strComparisonOpSuffixPath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_IsTemplate,
    ) == true
  ) {
    if (objvUserCodePathCond.isTemplate == true) {
      strWhereCond += Format(" And {0} = '1'", clsvUserCodePathEN.con_IsTemplate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvUserCodePathEN.con_IsTemplate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_IsExistCodePath,
    ) == true
  ) {
    if (objvUserCodePathCond.isExistCodePath == true) {
      strWhereCond += Format(" And {0} = '1'", clsvUserCodePathEN.con_IsExistCodePath);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvUserCodePathEN.con_IsExistCodePath);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_IsExistCodePathBackup,
    ) == true
  ) {
    if (objvUserCodePathCond.isExistCodePathBackup == true) {
      strWhereCond += Format(" And {0} = '1'", clsvUserCodePathEN.con_IsExistCodePathBackup);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvUserCodePathEN.con_IsExistCodePathBackup);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_PrjId,
      objvUserCodePathCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_UpdDate,
      objvUserCodePathCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_UpdUserId,
      objvUserCodePathCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_Memo,
      objvUserCodePathCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_ProgLangTypeSimName,
    ) == true
  ) {
    const strComparisonOpProgLangTypeSimName: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_ProgLangTypeSimName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_ProgLangTypeSimName,
      objvUserCodePathCond.progLangTypeSimName,
      strComparisonOpProgLangTypeSimName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_ApplicationTypeSimName,
    ) == true
  ) {
    const strComparisonOpApplicationTypeSimName: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_ApplicationTypeSimName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_ApplicationTypeSimName,
      objvUserCodePathCond.applicationTypeSimName,
      strComparisonOpApplicationTypeSimName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_CmPrjName,
    ) == true
  ) {
    const strComparisonOpCmPrjName: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_CmPrjName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_CmPrjName,
      objvUserCodePathCond.cmPrjName,
      strComparisonOpCmPrjName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_TabMainTypeName,
    ) == true
  ) {
    const strComparisonOpTabMainTypeName: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_TabMainTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_TabMainTypeName,
      objvUserCodePathCond.tabMainTypeName,
      strComparisonOpTabMainTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_CodeTypeSimName,
    ) == true
  ) {
    const strComparisonOpCodeTypeSimName: string =
      objvUserCodePathCond.dicFldComparisonOp[clsvUserCodePathEN.con_CodeTypeSimName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvUserCodePathEN.con_CodeTypeSimName,
      objvUserCodePathCond.codeTypeSimName,
      strComparisonOpCodeTypeSimName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_IsExistCodePathP,
    ) == true
  ) {
    if (objvUserCodePathCond.isExistCodePathP == true) {
      strWhereCond += Format(" And {0} = '1'", clsvUserCodePathEN.con_IsExistCodePathP);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvUserCodePathEN.con_IsExistCodePathP);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvUserCodePathCond.dicFldComparisonOp,
      clsvUserCodePathEN.con_IsExistCodePathBackupP,
    ) == true
  ) {
    if (objvUserCodePathCond.isExistCodePathBackupP == true) {
      strWhereCond += Format(" And {0} = '1'", clsvUserCodePathEN.con_IsExistCodePathBackupP);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvUserCodePathEN.con_IsExistCodePathBackupP);
    }
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vUserCodePath(v用户生成路径),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngCMProjectAppRelaId: Cm工程应用关系Id(要求唯一的字段)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vUserCodePath_GetUniCondStr(objvUserCodePathEN: clsvUserCodePathEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CMProjectAppRelaId = '{0}'", objvUserCodePathEN.cMProjectAppRelaId);
  strWhereCond += Format(" and CodeTypeId = '{0}'", objvUserCodePathEN.codeTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--vUserCodePath(v用户生成路径),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngCMProjectAppRelaId: Cm工程应用关系Id(要求唯一的字段)
 * @param strCodeTypeId: 代码类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function vUserCodePath_GetUniCondStr4Update(objvUserCodePathEN: clsvUserCodePathEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objvUserCodePathEN.mId);
  strWhereCond += Format(" and CMProjectAppRelaId = '{0}'", objvUserCodePathEN.cMProjectAppRelaId);
  strWhereCond += Format(" and CodeTypeId = '{0}'", objvUserCodePathEN.codeTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvUserCodePathENS:源对象
 * @param objvUserCodePathENT:目标对象
 */
export function vUserCodePath_GetObjFromJsonObj(
  objvUserCodePathENS: clsvUserCodePathEN,
): clsvUserCodePathEN {
  const objvUserCodePathENT: clsvUserCodePathEN = new clsvUserCodePathEN();
  ObjectAssign(objvUserCodePathENT, objvUserCodePathENS);
  return objvUserCodePathENT;
}
