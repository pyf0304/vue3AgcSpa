/**
 * 类名:clsReferFilesWApi
 * 表名:ReferFiles(00050460)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:41:52
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:生成代码(GeneCode)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 引用文件(ReferFiles)
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
import { clsReferFilesEN } from '@/ts/L0Entity/GeneCode/clsReferFilesEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const referFiles_Controller = 'ReferFilesApi';
export const referFiles_ConstructorName = 'referFiles';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strReferFileId:关键字
 * @returns 对象
 **/
export async function ReferFiles_GetObjByReferFileIdAsync(
  strReferFileId: string,
): Promise<clsReferFilesEN | null> {
  const strThisFuncName = 'GetObjByReferFileIdAsync';

  if (IsNullOrEmpty(strReferFileId) == true) {
    const strMsg = Format(
      '参数:[strReferFileId]不能为空!(In clsReferFilesWApi.GetObjByReferFileIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strReferFileId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strReferFileId]的长度:[{0}]不正确!(clsReferFilesWApi.GetObjByReferFileIdAsync)',
      strReferFileId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByReferFileId';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strReferFileId,
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
      const objReferFiles = ReferFiles_GetObjFromJsonObj(returnObj);
      return objReferFiles;
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * @param strReferFileId:所给的关键字
 * @returns 对象
 */
export async function ReferFiles_GetObjByReferFileIdCache(
  strReferFileId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByReferFileIdCache';

  if (IsNullOrEmpty(strReferFileId) == true) {
    const strMsg = Format(
      '参数:[strReferFileId]不能为空!(In clsReferFilesWApi.GetObjByReferFileIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strReferFileId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strReferFileId]的长度:[{0}]不正确!(clsReferFilesWApi.GetObjByReferFileIdCache)',
      strReferFileId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrReferFilesObjLstCache = await ReferFiles_GetObjLstCache();
  try {
    const arrReferFilesSel = arrReferFilesObjLstCache.filter(
      (x) => x.referFileId == strReferFileId,
    );
    let objReferFiles: clsReferFilesEN;
    if (arrReferFilesSel.length > 0) {
      objReferFiles = arrReferFilesSel[0];
      return objReferFiles;
    } else {
      if (bolTryAsyncOnce == true) {
        const objReferFilesConst = await ReferFiles_GetObjByReferFileIdAsync(strReferFileId);
        if (objReferFilesConst != null) {
          ReferFiles_ReFreshThisCache();
          return objReferFilesConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strReferFileId,
      referFiles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strReferFileId:所给的关键字
 * @returns 对象
 */
export async function ReferFiles_GetObjByReferFileIdlocalStorage(strReferFileId: string) {
  const strThisFuncName = 'GetObjByReferFileIdlocalStorage';

  if (IsNullOrEmpty(strReferFileId) == true) {
    const strMsg = Format(
      '参数:[strReferFileId]不能为空!(In clsReferFilesWApi.GetObjByReferFileIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strReferFileId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strReferFileId]的长度:[{0}]不正确!(clsReferFilesWApi.GetObjByReferFileIdlocalStorage)',
      strReferFileId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsReferFilesEN._CurrTabName, strReferFileId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objReferFilesCache: clsReferFilesEN = JSON.parse(strTempObj);
    return objReferFilesCache;
  }
  try {
    const objReferFiles = await ReferFiles_GetObjByReferFileIdAsync(strReferFileId);
    if (objReferFiles != null) {
      localStorage.setItem(strKey, JSON.stringify(objReferFiles));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objReferFiles;
    }
    return objReferFiles;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strReferFileId,
      referFiles_ConstructorName,
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
 * @param objReferFiles:所给的对象
 * @returns 对象
 */
export async function ReferFiles_UpdateObjInLstCache(objReferFiles: clsReferFilesEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrReferFilesObjLstCache = await ReferFiles_GetObjLstCache();
    const obj = arrReferFilesObjLstCache.find(
      (x) =>
        x.fileName == objReferFiles.fileName && x.referFileTypeId == objReferFiles.referFileTypeId,
    );
    if (obj != null) {
      objReferFiles.referFileId = obj.referFileId;
      ObjectAssign(obj, objReferFiles);
    } else {
      arrReferFilesObjLstCache.push(objReferFiles);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      referFiles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strReferFileId:所给的关键字
 * @returns 对象
 */
export async function ReferFiles_GetNameByReferFileIdCache(strReferFileId: string) {
  if (IsNullOrEmpty(strReferFileId) == true) {
    const strMsg = Format(
      '参数:[strReferFileId]不能为空!(In clsReferFilesWApi.GetNameByReferFileIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strReferFileId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strReferFileId]的长度:[{0}]不正确!(clsReferFilesWApi.GetNameByReferFileIdCache)',
      strReferFileId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrReferFilesObjLstCache = await ReferFiles_GetObjLstCache();
  if (arrReferFilesObjLstCache == null) return '';
  try {
    const arrReferFilesSel = arrReferFilesObjLstCache.filter(
      (x) => x.referFileId == strReferFileId,
    );
    let objReferFiles: clsReferFilesEN;
    if (arrReferFilesSel.length > 0) {
      objReferFiles = arrReferFilesSel[0];
      return objReferFiles.fileName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strReferFileId,
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
export async function ReferFiles_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsReferFilesEN.con_ReferFileId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsReferFilesEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsReferFilesEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strReferFileId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objReferFiles = await ReferFiles_GetObjByReferFileIdCache(strReferFileId);
  if (objReferFiles == null) return '';
  if (objReferFiles.GetFldValue(strOutFldName) == null) return '';
  return objReferFiles.GetFldValue(strOutFldName).toString();
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
export function ReferFiles_SortFunDefa(a: clsReferFilesEN, b: clsReferFilesEN): number {
  return a.referFileId.localeCompare(b.referFileId);
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
export function ReferFiles_SortFunDefa2Fld(a: clsReferFilesEN, b: clsReferFilesEN): number {
  if (a.fileName == b.fileName) return a.referFileTypeId.localeCompare(b.referFileTypeId);
  else return a.fileName.localeCompare(b.fileName);
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
export function ReferFiles_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsReferFilesEN.con_ReferFileId:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          return a.referFileId.localeCompare(b.referFileId);
        };
      case clsReferFilesEN.con_FileName:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          return a.fileName.localeCompare(b.fileName);
        };
      case clsReferFilesEN.con_ReferFileTypeId:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          if (a.referFileTypeId == null) return -1;
          if (b.referFileTypeId == null) return 1;
          return a.referFileTypeId.localeCompare(b.referFileTypeId);
        };
      case clsReferFilesEN.con_FilePath:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          return a.filePath.localeCompare(b.filePath);
        };
      case clsReferFilesEN.con_IsNeedDownLoad:
        return (a: clsReferFilesEN) => {
          if (a.isNeedDownLoad == true) return 1;
          else return -1;
        };
      case clsReferFilesEN.con_Version:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          if (a.version == null) return -1;
          if (b.version == null) return 1;
          return a.version.localeCompare(b.version);
        };
      case clsReferFilesEN.con_InUse:
        return (a: clsReferFilesEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsReferFilesEN.con_OrderNum:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsReferFilesEN.con_UpdDate:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          return a.updDate.localeCompare(b.updDate);
        };
      case clsReferFilesEN.con_UpdUserId:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsReferFilesEN.con_Memo:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ReferFiles]中不存在!(in ${referFiles_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsReferFilesEN.con_ReferFileId:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          return b.referFileId.localeCompare(a.referFileId);
        };
      case clsReferFilesEN.con_FileName:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          return b.fileName.localeCompare(a.fileName);
        };
      case clsReferFilesEN.con_ReferFileTypeId:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          if (b.referFileTypeId == null) return -1;
          if (a.referFileTypeId == null) return 1;
          return b.referFileTypeId.localeCompare(a.referFileTypeId);
        };
      case clsReferFilesEN.con_FilePath:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          return b.filePath.localeCompare(a.filePath);
        };
      case clsReferFilesEN.con_IsNeedDownLoad:
        return (b: clsReferFilesEN) => {
          if (b.isNeedDownLoad == true) return 1;
          else return -1;
        };
      case clsReferFilesEN.con_Version:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          if (b.version == null) return -1;
          if (a.version == null) return 1;
          return b.version.localeCompare(a.version);
        };
      case clsReferFilesEN.con_InUse:
        return (b: clsReferFilesEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsReferFilesEN.con_OrderNum:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsReferFilesEN.con_UpdDate:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          return b.updDate.localeCompare(a.updDate);
        };
      case clsReferFilesEN.con_UpdUserId:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsReferFilesEN.con_Memo:
        return (a: clsReferFilesEN, b: clsReferFilesEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ReferFiles]中不存在!(in ${referFiles_ConstructorName}.${strThisFuncName})`;
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
export async function ReferFiles_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsReferFilesEN.con_ReferFileId:
      return (obj: clsReferFilesEN) => {
        return obj.referFileId === value;
      };
    case clsReferFilesEN.con_FileName:
      return (obj: clsReferFilesEN) => {
        return obj.fileName === value;
      };
    case clsReferFilesEN.con_ReferFileTypeId:
      return (obj: clsReferFilesEN) => {
        return obj.referFileTypeId === value;
      };
    case clsReferFilesEN.con_FilePath:
      return (obj: clsReferFilesEN) => {
        return obj.filePath === value;
      };
    case clsReferFilesEN.con_IsNeedDownLoad:
      return (obj: clsReferFilesEN) => {
        return obj.isNeedDownLoad === value;
      };
    case clsReferFilesEN.con_Version:
      return (obj: clsReferFilesEN) => {
        return obj.version === value;
      };
    case clsReferFilesEN.con_InUse:
      return (obj: clsReferFilesEN) => {
        return obj.inUse === value;
      };
    case clsReferFilesEN.con_OrderNum:
      return (obj: clsReferFilesEN) => {
        return obj.orderNum === value;
      };
    case clsReferFilesEN.con_UpdDate:
      return (obj: clsReferFilesEN) => {
        return obj.updDate === value;
      };
    case clsReferFilesEN.con_UpdUserId:
      return (obj: clsReferFilesEN) => {
        return obj.updUserId === value;
      };
    case clsReferFilesEN.con_Memo:
      return (obj: clsReferFilesEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ReferFiles]中不存在!(in ${referFiles_ConstructorName}.${strThisFuncName})`;
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
export async function ReferFiles_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsReferFilesEN.con_ReferFileId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrReferFiles = await ReferFiles_GetObjLstCache();
  if (arrReferFiles == null) return [];
  let arrReferFilesSel = arrReferFiles;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrReferFilesSel = arrReferFilesSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrReferFilesSel = arrReferFilesSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrReferFilesSel = arrReferFilesSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrReferFilesSel = arrReferFilesSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrReferFilesSel = arrReferFilesSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrReferFilesSel = arrReferFilesSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrReferFilesSel = arrReferFilesSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrReferFilesSel = arrReferFilesSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrReferFilesSel = arrReferFilesSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrReferFilesSel = arrReferFilesSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrReferFilesSel.length == 0) return [];
  return arrReferFilesSel.map((x) => x.referFileId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ReferFiles_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
export async function ReferFiles_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
export async function ReferFiles_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsReferFilesEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

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
      const objReferFiles = ReferFiles_GetObjFromJsonObj(returnObj);
      return objReferFiles;
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
export async function ReferFiles_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsReferFilesEN._CurrTabName;
  if (IsNullOrEmpty(clsReferFilesEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsReferFilesEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrReferFilesExObjLstCache: Array<clsReferFilesEN> = CacheHelper.Get(strKey);
    const arrReferFilesObjLstT = ReferFiles_GetObjLstByJSONObjLst(arrReferFilesExObjLstCache);
    return arrReferFilesObjLstT;
  }
  try {
    const arrReferFilesExObjLst = await ReferFiles_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrReferFilesExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrReferFilesExObjLst.length,
    );
    console.log(strInfo);
    return arrReferFilesExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      referFiles_ConstructorName,
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
export async function ReferFiles_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsReferFilesEN._CurrTabName;
  if (IsNullOrEmpty(clsReferFilesEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsReferFilesEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrReferFilesExObjLstCache: Array<clsReferFilesEN> = JSON.parse(strTempObjLst);
    const arrReferFilesObjLstT = ReferFiles_GetObjLstByJSONObjLst(arrReferFilesExObjLstCache);
    return arrReferFilesObjLstT;
  }
  try {
    const arrReferFilesExObjLst = await ReferFiles_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrReferFilesExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrReferFilesExObjLst.length,
    );
    console.log(strInfo);
    return arrReferFilesExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      referFiles_ConstructorName,
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
export async function ReferFiles_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsReferFilesEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrReferFilesObjLstCache: Array<clsReferFilesEN> = JSON.parse(strTempObjLst);
    return arrReferFilesObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ReferFiles_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsReferFilesEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

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
          referFiles_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ReferFiles_GetObjLstByJSONObjLst(returnObjLst);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
export async function ReferFiles_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsReferFilesEN._CurrTabName;
  if (IsNullOrEmpty(clsReferFilesEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsReferFilesEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrReferFilesExObjLstCache: Array<clsReferFilesEN> = JSON.parse(strTempObjLst);
    const arrReferFilesObjLstT = ReferFiles_GetObjLstByJSONObjLst(arrReferFilesExObjLstCache);
    return arrReferFilesObjLstT;
  }
  try {
    const arrReferFilesExObjLst = await ReferFiles_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrReferFilesExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrReferFilesExObjLst.length,
    );
    console.log(strInfo);
    return arrReferFilesExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      referFiles_ConstructorName,
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
export async function ReferFiles_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsReferFilesEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrReferFilesObjLstCache: Array<clsReferFilesEN> = JSON.parse(strTempObjLst);
    return arrReferFilesObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ReferFiles_GetObjLstCache(): Promise<Array<clsReferFilesEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrReferFilesObjLstCache;
  switch (clsReferFilesEN.CacheModeId) {
    case '04': //sessionStorage
      arrReferFilesObjLstCache = await ReferFiles_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrReferFilesObjLstCache = await ReferFiles_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrReferFilesObjLstCache = await ReferFiles_GetObjLstClientCache();
      break;
    default:
      arrReferFilesObjLstCache = await ReferFiles_GetObjLstClientCache();
      break;
  }
  return arrReferFilesObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ReferFiles_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrReferFilesObjLstCache;
  switch (clsReferFilesEN.CacheModeId) {
    case '04': //sessionStorage
      arrReferFilesObjLstCache = await ReferFiles_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrReferFilesObjLstCache = await ReferFiles_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrReferFilesObjLstCache = null;
      break;
    default:
      arrReferFilesObjLstCache = null;
      break;
  }
  return arrReferFilesObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrReferFileIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ReferFiles_GetSubObjLstCache(objReferFilesCond: clsReferFilesEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrReferFilesObjLstCache = await ReferFiles_GetObjLstCache();
  let arrReferFilesSel = arrReferFilesObjLstCache;
  if (objReferFilesCond.sfFldComparisonOp == null || objReferFilesCond.sfFldComparisonOp == '')
    return arrReferFilesSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objReferFilesCond.sfFldComparisonOp,
  );
  //console.log("clsReferFilesWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objReferFilesCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objReferFilesCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrReferFilesSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objReferFilesCond),
      referFiles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsReferFilesEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrReferFileId:关键字列表
 * @returns 对象列表
 **/
export async function ReferFiles_GetObjLstByReferFileIdLstAsync(
  arrReferFileId: Array<string>,
): Promise<Array<clsReferFilesEN>> {
  const strThisFuncName = 'GetObjLstByReferFileIdLstAsync';
  const strAction = 'GetObjLstByReferFileIdLst';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrReferFileId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          referFiles_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ReferFiles_GetObjLstByJSONObjLst(returnObjLst);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * @param arrstrReferFileIdLst:关键字列表
 * @returns 对象列表
 */
export async function ReferFiles_GetObjLstByReferFileIdLstCache(arrReferFileIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByReferFileIdLstCache';
  try {
    const arrReferFilesObjLstCache = await ReferFiles_GetObjLstCache();
    const arrReferFilesSel = arrReferFilesObjLstCache.filter(
      (x) => arrReferFileIdLst.indexOf(x.referFileId) > -1,
    );
    return arrReferFilesSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrReferFileIdLst.join(','),
      referFiles_ConstructorName,
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
export async function ReferFiles_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsReferFilesEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

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
          referFiles_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ReferFiles_GetObjLstByJSONObjLst(returnObjLst);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
export async function ReferFiles_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsReferFilesEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

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
          referFiles_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ReferFiles_GetObjLstByJSONObjLst(returnObjLst);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
export async function ReferFiles_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsReferFilesEN>();
  const arrReferFilesObjLstCache = await ReferFiles_GetObjLstCache();
  if (arrReferFilesObjLstCache.length == 0) return arrReferFilesObjLstCache;
  let arrReferFilesSel = arrReferFilesObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objReferFilesCond = new clsReferFilesEN();
  ObjectAssign(objReferFilesCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsReferFilesWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objReferFilesCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrReferFilesSel.length == 0) return arrReferFilesSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrReferFilesSel = arrReferFilesSel.sort(ReferFiles_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrReferFilesSel = arrReferFilesSel.sort(objPagerPara.sortFun);
    }
    arrReferFilesSel = arrReferFilesSel.slice(intStart, intEnd);
    return arrReferFilesSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      referFiles_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsReferFilesEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ReferFiles_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsReferFilesEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsReferFilesEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

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
          referFiles_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ReferFiles_GetObjLstByJSONObjLst(returnObjLst);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * @param strReferFileId:关键字
 * @returns 获取删除的结果
 **/
export async function ReferFiles_DelRecordAsync(strReferFileId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(referFiles_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strReferFileId);

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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * @param arrReferFileId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ReferFiles_DelReferFilessAsync(
  arrReferFileId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelReferFilessAsync';
  const strAction = 'DelReferFiless';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrReferFileId, config);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
export async function ReferFiles_DelReferFilessByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelReferFilessByCondAsync';
  const strAction = 'DelReferFilessByCond';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * @param objReferFilesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ReferFiles_AddNewRecordAsync(
  objReferFilesEN: clsReferFilesEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objReferFilesEN);
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objReferFilesEN, config);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * @param objReferFilesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ReferFiles_AddNewRecordWithMaxIdAsync(
  objReferFilesEN: clsReferFilesEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objReferFilesEN, config);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objReferFilesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ReferFiles_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objReferFilesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ReferFiles_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objReferFilesEN);
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objReferFilesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ReferFiles_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objReferFilesEN);
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objReferFilesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ReferFiles_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objReferFilesEN);
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objReferFilesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ReferFiles_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objReferFilesEN);
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * @param objReferFilesEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ReferFiles_AddNewRecordWithReturnKeyAsync(
  objReferFilesEN: clsReferFilesEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objReferFilesEN, config);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * @param objReferFilesEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ReferFiles_UpdateRecordAsync(
  objReferFilesEN: clsReferFilesEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objReferFilesEN.sfUpdFldSetStr === undefined ||
    objReferFilesEN.sfUpdFldSetStr === null ||
    objReferFilesEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objReferFilesEN.referFileId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objReferFilesEN, config);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * @param objReferFilesEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ReferFiles_UpdateWithConditionAsync(
  objReferFilesEN: clsReferFilesEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objReferFilesEN.sfUpdFldSetStr === undefined ||
    objReferFilesEN.sfUpdFldSetStr === null ||
    objReferFilesEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objReferFilesEN.referFileId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);
  objReferFilesEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objReferFilesEN, config);
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * @param objstrReferFileIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ReferFiles_IsExistRecordCache(objReferFilesCond: clsReferFilesEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrReferFilesObjLstCache = await ReferFiles_GetObjLstCache();
  if (arrReferFilesObjLstCache == null) return false;
  let arrReferFilesSel = arrReferFilesObjLstCache;
  if (objReferFilesCond.sfFldComparisonOp == null || objReferFilesCond.sfFldComparisonOp == '')
    return arrReferFilesSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objReferFilesCond.sfFldComparisonOp,
  );
  //console.log("clsReferFilesWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objReferFilesCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objReferFilesCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrReferFilesSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objReferFilesCond),
      referFiles_ConstructorName,
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
export async function ReferFiles_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * @param strReferFileId:所给的关键字
 * @returns 对象
 */
export async function ReferFiles_IsExistCache(strReferFileId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrReferFilesObjLstCache = await ReferFiles_GetObjLstCache();
  if (arrReferFilesObjLstCache == null) return false;
  try {
    const arrReferFilesSel = arrReferFilesObjLstCache.filter(
      (x) => x.referFileId == strReferFileId,
    );
    if (arrReferFilesSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strReferFileId,
      referFiles_ConstructorName,
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
 * @param strReferFileId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ReferFiles_IsExistAsync(strReferFileId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strReferFileId,
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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
export async function ReferFiles_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
 * @param objReferFilesCond:条件对象
 * @returns 对象列表记录数
 */
export async function ReferFiles_GetRecCountByCondCache(objReferFilesCond: clsReferFilesEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrReferFilesObjLstCache = await ReferFiles_GetObjLstCache();
  if (arrReferFilesObjLstCache == null) return 0;
  let arrReferFilesSel = arrReferFilesObjLstCache;
  if (objReferFilesCond.sfFldComparisonOp == null || objReferFilesCond.sfFldComparisonOp == '')
    return arrReferFilesSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objReferFilesCond.sfFldComparisonOp,
  );
  //console.log("clsReferFilesWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objReferFilesCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objReferFilesCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrReferFilesSel = arrReferFilesSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrReferFilesSel = arrReferFilesSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrReferFilesSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objReferFilesCond),
      referFiles_ConstructorName,
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
export async function ReferFiles_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
export async function ReferFiles_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(referFiles_Controller, strAction);

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
        referFiles_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        referFiles_ConstructorName,
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
export function ReferFiles_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ReferFiles_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsReferFilesEN._CurrTabName;
  switch (clsReferFilesEN.CacheModeId) {
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
export function ReferFiles_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsReferFilesEN._CurrTabName;
    switch (clsReferFilesEN.CacheModeId) {
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
export async function ReferFiles_BindDdl_ReferFileIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ReferFileIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ReferFileIdInDivCache");
  const arrObjLstSel = await ReferFiles_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsReferFilesEN.con_ReferFileId,
    clsReferFilesEN.con_FileName,
    '引用文件',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ReferFiles_CheckPropertyNew(pobjReferFilesEN: clsReferFilesEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjReferFilesEN.fileName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[文件名]不能为空(In 引用文件)!(clsReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjReferFilesEN.filePath) === true) {
    throw new Error(
      '(errid:Watl000411)字段[文件路径]不能为空(In 引用文件)!(clsReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjReferFilesEN.orderNum ||
    (pobjReferFilesEN.orderNum != null && pobjReferFilesEN.orderNum.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[序号]不能为空(In 引用文件)!(clsReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjReferFilesEN.updUserId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[修改用户Id]不能为空(In 引用文件)!(clsReferFilesBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjReferFilesEN.referFileId) == false &&
    GetStrLen(pobjReferFilesEN.referFileId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[引用文件Id(referFileId)]的长度不能超过8(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.referFileId)(clsReferFilesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.fileName) == false &&
    GetStrLen(pobjReferFilesEN.fileName) > 150
  ) {
    throw new Error(
      '(errid:Watl000413)字段[文件名(fileName)]的长度不能超过150(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.fileName)(clsReferFilesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.referFileTypeId) == false &&
    GetStrLen(pobjReferFilesEN.referFileTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[引用文件类型Id(referFileTypeId)]的长度不能超过2(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.referFileTypeId)(clsReferFilesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.filePath) == false &&
    GetStrLen(pobjReferFilesEN.filePath) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[文件路径(filePath)]的长度不能超过500(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.filePath)(clsReferFilesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.version) == false &&
    GetStrLen(pobjReferFilesEN.version) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[版本(version)]的长度不能超过30(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.version)(clsReferFilesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.updDate) == false &&
    GetStrLen(pobjReferFilesEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.updDate)(clsReferFilesBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.updUserId) == false &&
    GetStrLen(pobjReferFilesEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.updUserId)(clsReferFilesBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjReferFilesEN.memo) == false && GetStrLen(pobjReferFilesEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.memo)(clsReferFilesBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjReferFilesEN.referFileId) == false &&
    undefined !== pobjReferFilesEN.referFileId &&
    tzDataType.isString(pobjReferFilesEN.referFileId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[引用文件Id(referFileId)]的值:[$(pobjReferFilesEN.referFileId)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.fileName) == false &&
    undefined !== pobjReferFilesEN.fileName &&
    tzDataType.isString(pobjReferFilesEN.fileName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文件名(fileName)]的值:[$(pobjReferFilesEN.fileName)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.referFileTypeId) == false &&
    undefined !== pobjReferFilesEN.referFileTypeId &&
    tzDataType.isString(pobjReferFilesEN.referFileTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[引用文件类型Id(referFileTypeId)]的值:[$(pobjReferFilesEN.referFileTypeId)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.filePath) == false &&
    undefined !== pobjReferFilesEN.filePath &&
    tzDataType.isString(pobjReferFilesEN.filePath) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文件路径(filePath)]的值:[$(pobjReferFilesEN.filePath)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjReferFilesEN.isNeedDownLoad &&
    undefined !== pobjReferFilesEN.isNeedDownLoad &&
    tzDataType.isBoolean(pobjReferFilesEN.isNeedDownLoad) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否需要下载(isNeedDownLoad)]的值:[$(pobjReferFilesEN.isNeedDownLoad)], 非法,应该为布尔型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.version) == false &&
    undefined !== pobjReferFilesEN.version &&
    tzDataType.isString(pobjReferFilesEN.version) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[版本(version)]的值:[$(pobjReferFilesEN.version)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjReferFilesEN.inUse &&
    undefined !== pobjReferFilesEN.inUse &&
    tzDataType.isBoolean(pobjReferFilesEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否在用(inUse)]的值:[$(pobjReferFilesEN.inUse)], 非法,应该为布尔型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjReferFilesEN.orderNum &&
    undefined !== pobjReferFilesEN.orderNum &&
    tzDataType.isNumber(pobjReferFilesEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjReferFilesEN.orderNum)], 非法,应该为数值型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.updDate) == false &&
    undefined !== pobjReferFilesEN.updDate &&
    tzDataType.isString(pobjReferFilesEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjReferFilesEN.updDate)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.updUserId) == false &&
    undefined !== pobjReferFilesEN.updUserId &&
    tzDataType.isString(pobjReferFilesEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjReferFilesEN.updUserId)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.memo) == false &&
    undefined !== pobjReferFilesEN.memo &&
    tzDataType.isString(pobjReferFilesEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjReferFilesEN.memo)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ReferFiles_CheckProperty4Update(pobjReferFilesEN: clsReferFilesEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjReferFilesEN.referFileId) == false &&
    GetStrLen(pobjReferFilesEN.referFileId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[引用文件Id(referFileId)]的长度不能超过8(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.referFileId)(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.fileName) == false &&
    GetStrLen(pobjReferFilesEN.fileName) > 150
  ) {
    throw new Error(
      '(errid:Watl000416)字段[文件名(fileName)]的长度不能超过150(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.fileName)(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.referFileTypeId) == false &&
    GetStrLen(pobjReferFilesEN.referFileTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[引用文件类型Id(referFileTypeId)]的长度不能超过2(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.referFileTypeId)(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.filePath) == false &&
    GetStrLen(pobjReferFilesEN.filePath) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[文件路径(filePath)]的长度不能超过500(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.filePath)(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.version) == false &&
    GetStrLen(pobjReferFilesEN.version) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[版本(version)]的长度不能超过30(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.version)(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.updDate) == false &&
    GetStrLen(pobjReferFilesEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.updDate)(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.updUserId) == false &&
    GetStrLen(pobjReferFilesEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.updUserId)(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjReferFilesEN.memo) == false && GetStrLen(pobjReferFilesEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 引用文件(ReferFiles))!值:$(pobjReferFilesEN.memo)(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjReferFilesEN.referFileId) == false &&
    undefined !== pobjReferFilesEN.referFileId &&
    tzDataType.isString(pobjReferFilesEN.referFileId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[引用文件Id(referFileId)]的值:[$(pobjReferFilesEN.referFileId)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.fileName) == false &&
    undefined !== pobjReferFilesEN.fileName &&
    tzDataType.isString(pobjReferFilesEN.fileName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文件名(fileName)]的值:[$(pobjReferFilesEN.fileName)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.referFileTypeId) == false &&
    undefined !== pobjReferFilesEN.referFileTypeId &&
    tzDataType.isString(pobjReferFilesEN.referFileTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[引用文件类型Id(referFileTypeId)]的值:[$(pobjReferFilesEN.referFileTypeId)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.filePath) == false &&
    undefined !== pobjReferFilesEN.filePath &&
    tzDataType.isString(pobjReferFilesEN.filePath) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文件路径(filePath)]的值:[$(pobjReferFilesEN.filePath)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjReferFilesEN.isNeedDownLoad &&
    undefined !== pobjReferFilesEN.isNeedDownLoad &&
    tzDataType.isBoolean(pobjReferFilesEN.isNeedDownLoad) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否需要下载(isNeedDownLoad)]的值:[$(pobjReferFilesEN.isNeedDownLoad)], 非法,应该为布尔型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.version) == false &&
    undefined !== pobjReferFilesEN.version &&
    tzDataType.isString(pobjReferFilesEN.version) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[版本(version)]的值:[$(pobjReferFilesEN.version)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjReferFilesEN.inUse &&
    undefined !== pobjReferFilesEN.inUse &&
    tzDataType.isBoolean(pobjReferFilesEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否在用(inUse)]的值:[$(pobjReferFilesEN.inUse)], 非法,应该为布尔型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjReferFilesEN.orderNum &&
    undefined !== pobjReferFilesEN.orderNum &&
    tzDataType.isNumber(pobjReferFilesEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjReferFilesEN.orderNum)], 非法,应该为数值型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.updDate) == false &&
    undefined !== pobjReferFilesEN.updDate &&
    tzDataType.isString(pobjReferFilesEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjReferFilesEN.updDate)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.updUserId) == false &&
    undefined !== pobjReferFilesEN.updUserId &&
    tzDataType.isString(pobjReferFilesEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjReferFilesEN.updUserId)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjReferFilesEN.memo) == false &&
    undefined !== pobjReferFilesEN.memo &&
    tzDataType.isString(pobjReferFilesEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjReferFilesEN.memo)], 非法,应该为字符型(In 引用文件(ReferFiles))!(clsReferFilesBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
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
export function ReferFiles_GetJSONStrByObj(pobjReferFilesEN: clsReferFilesEN): string {
  pobjReferFilesEN.sfUpdFldSetStr = pobjReferFilesEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjReferFilesEN);
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
export function ReferFiles_GetObjLstByJSONStr(strJSON: string): Array<clsReferFilesEN> {
  let arrReferFilesObjLst = new Array<clsReferFilesEN>();
  if (strJSON === '') {
    return arrReferFilesObjLst;
  }
  try {
    arrReferFilesObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrReferFilesObjLst;
  }
  return arrReferFilesObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrReferFilesObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ReferFiles_GetObjLstByJSONObjLst(
  arrReferFilesObjLstS: Array<clsReferFilesEN>,
): Array<clsReferFilesEN> {
  const arrReferFilesObjLst = new Array<clsReferFilesEN>();
  for (const objInFor of arrReferFilesObjLstS) {
    const obj1 = ReferFiles_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrReferFilesObjLst.push(obj1);
  }
  return arrReferFilesObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ReferFiles_GetObjByJSONStr(strJSON: string): clsReferFilesEN {
  let pobjReferFilesEN = new clsReferFilesEN();
  if (strJSON === '') {
    return pobjReferFilesEN;
  }
  try {
    pobjReferFilesEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjReferFilesEN;
  }
  return pobjReferFilesEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ReferFiles_GetCombineCondition(objReferFilesCond: clsReferFilesEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objReferFilesCond.dicFldComparisonOp,
      clsReferFilesEN.con_ReferFileId,
    ) == true
  ) {
    const strComparisonOpReferFileId: string =
      objReferFilesCond.dicFldComparisonOp[clsReferFilesEN.con_ReferFileId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsReferFilesEN.con_ReferFileId,
      objReferFilesCond.referFileId,
      strComparisonOpReferFileId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objReferFilesCond.dicFldComparisonOp,
      clsReferFilesEN.con_FileName,
    ) == true
  ) {
    const strComparisonOpFileName: string =
      objReferFilesCond.dicFldComparisonOp[clsReferFilesEN.con_FileName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsReferFilesEN.con_FileName,
      objReferFilesCond.fileName,
      strComparisonOpFileName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objReferFilesCond.dicFldComparisonOp,
      clsReferFilesEN.con_ReferFileTypeId,
    ) == true
  ) {
    const strComparisonOpReferFileTypeId: string =
      objReferFilesCond.dicFldComparisonOp[clsReferFilesEN.con_ReferFileTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsReferFilesEN.con_ReferFileTypeId,
      objReferFilesCond.referFileTypeId,
      strComparisonOpReferFileTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objReferFilesCond.dicFldComparisonOp,
      clsReferFilesEN.con_FilePath,
    ) == true
  ) {
    const strComparisonOpFilePath: string =
      objReferFilesCond.dicFldComparisonOp[clsReferFilesEN.con_FilePath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsReferFilesEN.con_FilePath,
      objReferFilesCond.filePath,
      strComparisonOpFilePath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objReferFilesCond.dicFldComparisonOp,
      clsReferFilesEN.con_IsNeedDownLoad,
    ) == true
  ) {
    if (objReferFilesCond.isNeedDownLoad == true) {
      strWhereCond += Format(" And {0} = '1'", clsReferFilesEN.con_IsNeedDownLoad);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsReferFilesEN.con_IsNeedDownLoad);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objReferFilesCond.dicFldComparisonOp,
      clsReferFilesEN.con_Version,
    ) == true
  ) {
    const strComparisonOpVersion: string =
      objReferFilesCond.dicFldComparisonOp[clsReferFilesEN.con_Version];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsReferFilesEN.con_Version,
      objReferFilesCond.version,
      strComparisonOpVersion,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objReferFilesCond.dicFldComparisonOp,
      clsReferFilesEN.con_InUse,
    ) == true
  ) {
    if (objReferFilesCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsReferFilesEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsReferFilesEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objReferFilesCond.dicFldComparisonOp,
      clsReferFilesEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objReferFilesCond.dicFldComparisonOp[clsReferFilesEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsReferFilesEN.con_OrderNum,
      objReferFilesCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objReferFilesCond.dicFldComparisonOp,
      clsReferFilesEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objReferFilesCond.dicFldComparisonOp[clsReferFilesEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsReferFilesEN.con_UpdDate,
      objReferFilesCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objReferFilesCond.dicFldComparisonOp,
      clsReferFilesEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objReferFilesCond.dicFldComparisonOp[clsReferFilesEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsReferFilesEN.con_UpdUserId,
      objReferFilesCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objReferFilesCond.dicFldComparisonOp,
      clsReferFilesEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objReferFilesCond.dicFldComparisonOp[clsReferFilesEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsReferFilesEN.con_Memo,
      objReferFilesCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ReferFiles(引用文件),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFileName: 文件名(要求唯一的字段)
 * @param strReferFileTypeId: 引用文件类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ReferFiles_GetUniCondStr(objReferFilesEN: clsReferFilesEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FileName = '{0}'", objReferFilesEN.fileName);
  strWhereCond += Format(" and ReferFileTypeId = '{0}'", objReferFilesEN.referFileTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ReferFiles(引用文件),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFileName: 文件名(要求唯一的字段)
 * @param strReferFileTypeId: 引用文件类型Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ReferFiles_GetUniCondStr4Update(objReferFilesEN: clsReferFilesEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ReferFileId <> '{0}'", objReferFilesEN.referFileId);
  strWhereCond += Format(" and FileName = '{0}'", objReferFilesEN.fileName);
  strWhereCond += Format(" and ReferFileTypeId = '{0}'", objReferFilesEN.referFileTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objReferFilesENS:源对象
 * @param objReferFilesENT:目标对象
 */
export function ReferFiles_GetObjFromJsonObj(objReferFilesENS: clsReferFilesEN): clsReferFilesEN {
  const objReferFilesENT: clsReferFilesEN = new clsReferFilesEN();
  ObjectAssign(objReferFilesENT, objReferFilesENS);
  return objReferFilesENT;
}
