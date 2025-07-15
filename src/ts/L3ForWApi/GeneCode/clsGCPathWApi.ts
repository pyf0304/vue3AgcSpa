/**
 * 类名:clsGCPathWApi
 * 表名:GCPath(00050595)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:20
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
 * GC路径(GCPath)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
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
import { clsGCPathEN } from '@/ts/L0Entity/GeneCode/clsGCPathEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gCPath_Controller = 'GCPathApi';
export const gCPath_ConstructorName = 'gCPath';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strGcPathId:关键字
 * @returns 对象
 **/
export async function GCPath_GetObjByGcPathIdAsync(
  strGcPathId: string,
): Promise<clsGCPathEN | null> {
  const strThisFuncName = 'GetObjByGcPathIdAsync';

  if (IsNullOrEmpty(strGcPathId) == true) {
    const strMsg = Format('参数:[strGcPathId]不能为空!(In clsGCPathWApi.GetObjByGcPathIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strGcPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strGcPathId]的长度:[{0}]不正确!(clsGCPathWApi.GetObjByGcPathIdAsync)',
      strGcPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByGcPathId';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strGcPathId,
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
      const objGCPath = GCPath_GetObjFromJsonObj(returnObj);
      return objGCPath;
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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
 * @param strGcPathId:所给的关键字
 * @returns 对象
 */
export async function GCPath_GetObjByGcPathIdCache(
  strGcPathId: string,
  strPrjId: string,
  strUserId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByGcPathIdCache';

  if (IsNullOrEmpty(strGcPathId) == true) {
    const strMsg = Format('参数:[strGcPathId]不能为空!(In clsGCPathWApi.GetObjByGcPathIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strGcPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strGcPathId]的长度:[{0}]不正确!(clsGCPathWApi.GetObjByGcPathIdCache)',
      strGcPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrGCPathObjLstCache = await GCPath_GetObjLstCache(strPrjId, strUserId);
  try {
    const arrGCPathSel = arrGCPathObjLstCache.filter((x) => x.gcPathId == strGcPathId);
    let objGCPath: clsGCPathEN;
    if (arrGCPathSel.length > 0) {
      objGCPath = arrGCPathSel[0];
      return objGCPath;
    } else {
      if (bolTryAsyncOnce == true) {
        const objGCPathConst = await GCPath_GetObjByGcPathIdAsync(strGcPathId);
        if (objGCPathConst != null) {
          GCPath_ReFreshThisCache(strPrjId, strUserId);
          return objGCPathConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strGcPathId,
      gCPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strGcPathId:所给的关键字
 * @returns 对象
 */
export async function GCPath_GetObjByGcPathIdlocalStorage(strGcPathId: string) {
  const strThisFuncName = 'GetObjByGcPathIdlocalStorage';

  if (IsNullOrEmpty(strGcPathId) == true) {
    const strMsg = Format(
      '参数:[strGcPathId]不能为空!(In clsGCPathWApi.GetObjByGcPathIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strGcPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strGcPathId]的长度:[{0}]不正确!(clsGCPathWApi.GetObjByGcPathIdlocalStorage)',
      strGcPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsGCPathEN._CurrTabName, strGcPathId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objGCPathCache: clsGCPathEN = JSON.parse(strTempObj);
    return objGCPathCache;
  }
  try {
    const objGCPath = await GCPath_GetObjByGcPathIdAsync(strGcPathId);
    if (objGCPath != null) {
      localStorage.setItem(strKey, JSON.stringify(objGCPath));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objGCPath;
    }
    return objGCPath;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strGcPathId,
      gCPath_ConstructorName,
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
 * @param objGCPath:所给的对象
 * @returns 对象
 */
export async function GCPath_UpdateObjInLstCache(
  objGCPath: clsGCPathEN,
  strPrjId: string,
  strUserId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrGCPathObjLstCache = await GCPath_GetObjLstCache(strPrjId, strUserId);
    const obj = arrGCPathObjLstCache.find(
      (x) =>
        x.gcPathName == objGCPath.gcPathName &&
        x.isForMainPath == objGCPath.isForMainPath &&
        x.userId == objGCPath.userId &&
        x.prjId == objGCPath.prjId,
    );
    if (obj != null) {
      objGCPath.gcPathId = obj.gcPathId;
      ObjectAssign(obj, objGCPath);
    } else {
      arrGCPathObjLstCache.push(objGCPath);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gCPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strGcPathId:所给的关键字
 * @returns 对象
 */
export async function GCPath_GetNameByGcPathIdCache(
  strGcPathId: string,
  strPrjId: string,
  strUserId: string,
) {
  if (IsNullOrEmpty(strGcPathId) == true) {
    const strMsg = Format('参数:[strGcPathId]不能为空!(In clsGCPathWApi.GetNameByGcPathIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strGcPathId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strGcPathId]的长度:[{0}]不正确!(clsGCPathWApi.GetNameByGcPathIdCache)',
      strGcPathId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrGCPathObjLstCache = await GCPath_GetObjLstCache(strPrjId, strUserId);
  if (arrGCPathObjLstCache == null) return '';
  try {
    const arrGCPathSel = arrGCPathObjLstCache.filter((x) => x.gcPathId == strGcPathId);
    let objGCPath: clsGCPathEN;
    if (arrGCPathSel.length > 0) {
      objGCPath = arrGCPathSel[0];
      return objGCPath.gcPathName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strGcPathId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 @param strUserId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function GCPath_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
  strUserIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsGCPathWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsGCPathWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strUserIdClassfy) == true) {
    const strMsg = Format('参数:[strUserIdClassfy]不能为空!(In clsGCPathWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsGCPathEN.con_GcPathId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsGCPathEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsGCPathEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strGcPathId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objGCPath = await GCPath_GetObjByGcPathIdCache(
    strGcPathId,
    strPrjIdClassfy,
    strUserIdClassfy,
  );
  if (objGCPath == null) return '';
  if (objGCPath.GetFldValue(strOutFldName) == null) return '';
  return objGCPath.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCPath_SortFunDefa(a: clsGCPathEN, b: clsGCPathEN): number {
  return a.gcPathId.localeCompare(b.gcPathId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCPath_SortFunDefa2Fld(a: clsGCPathEN, b: clsGCPathEN): number {
  if (a.gcPathName == b.gcPathName) return a.userId.localeCompare(b.userId);
  else return a.gcPathName.localeCompare(b.gcPathName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GCPath_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGCPathEN.con_GcPathId:
        return (a: clsGCPathEN, b: clsGCPathEN) => {
          return a.gcPathId.localeCompare(b.gcPathId);
        };
      case clsGCPathEN.con_GcPathName:
        return (a: clsGCPathEN, b: clsGCPathEN) => {
          return a.gcPathName.localeCompare(b.gcPathName);
        };
      case clsGCPathEN.con_IsForMainPath:
        return (a: clsGCPathEN) => {
          if (a.isForMainPath == true) return 1;
          else return -1;
        };
      case clsGCPathEN.con_UserId:
        return (a: clsGCPathEN, b: clsGCPathEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsGCPathEN.con_PrjId:
        return (a: clsGCPathEN, b: clsGCPathEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsGCPathEN.con_UpdDate:
        return (a: clsGCPathEN, b: clsGCPathEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsGCPathEN.con_UpdUser:
        return (a: clsGCPathEN, b: clsGCPathEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsGCPathEN.con_Memo:
        return (a: clsGCPathEN, b: clsGCPathEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCPath]中不存在!(in ${gCPath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsGCPathEN.con_GcPathId:
        return (a: clsGCPathEN, b: clsGCPathEN) => {
          return b.gcPathId.localeCompare(a.gcPathId);
        };
      case clsGCPathEN.con_GcPathName:
        return (a: clsGCPathEN, b: clsGCPathEN) => {
          return b.gcPathName.localeCompare(a.gcPathName);
        };
      case clsGCPathEN.con_IsForMainPath:
        return (b: clsGCPathEN) => {
          if (b.isForMainPath == true) return 1;
          else return -1;
        };
      case clsGCPathEN.con_UserId:
        return (a: clsGCPathEN, b: clsGCPathEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsGCPathEN.con_PrjId:
        return (a: clsGCPathEN, b: clsGCPathEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsGCPathEN.con_UpdDate:
        return (a: clsGCPathEN, b: clsGCPathEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsGCPathEN.con_UpdUser:
        return (a: clsGCPathEN, b: clsGCPathEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsGCPathEN.con_Memo:
        return (a: clsGCPathEN, b: clsGCPathEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GCPath]中不存在!(in ${gCPath_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function GCPath_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsGCPathEN.con_GcPathId:
      return (obj: clsGCPathEN) => {
        return obj.gcPathId === value;
      };
    case clsGCPathEN.con_GcPathName:
      return (obj: clsGCPathEN) => {
        return obj.gcPathName === value;
      };
    case clsGCPathEN.con_IsForMainPath:
      return (obj: clsGCPathEN) => {
        return obj.isForMainPath === value;
      };
    case clsGCPathEN.con_UserId:
      return (obj: clsGCPathEN) => {
        return obj.userId === value;
      };
    case clsGCPathEN.con_PrjId:
      return (obj: clsGCPathEN) => {
        return obj.prjId === value;
      };
    case clsGCPathEN.con_UpdDate:
      return (obj: clsGCPathEN) => {
        return obj.updDate === value;
      };
    case clsGCPathEN.con_UpdUser:
      return (obj: clsGCPathEN) => {
        return obj.updUser === value;
      };
    case clsGCPathEN.con_Memo:
      return (obj: clsGCPathEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[GCPath]中不存在!(in ${gCPath_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @param strPrjId:缓存的分类字段
 * @param strUserId:缓存的分类字段2
 * @returns 返回一个关键字值列表
 */
export async function GCPath_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
  strUserIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsGCPathWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsGCPathWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strUserIdClassfy) == true) {
    const strMsg = Format('参数:[strUserIdClassfy]不能为空!(In clsGCPathWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsGCPathEN.con_GcPathId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrGCPath = await GCPath_GetObjLstCache(strPrjIdClassfy, strUserIdClassfy);
  if (arrGCPath == null) return [];
  let arrGCPathSel = arrGCPath;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrGCPathSel = arrGCPathSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrGCPathSel = arrGCPathSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrGCPathSel = arrGCPathSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrGCPathSel.length == 0) return [];
  return arrGCPathSel.map((x) => x.gcPathId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCPath_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
export async function GCPath_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
export async function GCPath_GetFirstObjAsync(strWhereCond: string): Promise<clsGCPathEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

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
      const objGCPath = GCPath_GetObjFromJsonObj(returnObj);
      return objGCPath;
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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
export async function GCPath_GetObjLstClientCache(strPrjId: string, strUserId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsGCPathEN.WhereFormat) == false) {
    strWhereCond = Format(clsGCPathEN.WhereFormat, strPrjId, strUserId);
  } else {
    strWhereCond = Format("PrjId='{0}' and UserId='{1}'", strPrjId, strUserId);
  }
  const strKey = Format('{0}_{1}_{2}', clsGCPathEN._CurrTabName, strPrjId, strUserId);
  if (IsNullOrEmpty(clsGCPathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCPathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrGCPathExObjLstCache: Array<clsGCPathEN> = CacheHelper.Get(strKey);
    const arrGCPathObjLstT = GCPath_GetObjLstByJSONObjLst(arrGCPathExObjLstCache);
    return arrGCPathObjLstT;
  }
  try {
    const arrGCPathExObjLst = await GCPath_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrGCPathExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCPathExObjLst.length,
    );
    console.log(strInfo);
    return arrGCPathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCPath_ConstructorName,
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
export async function GCPath_GetObjLstlocalStorage(strPrjId: string, strUserId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsGCPathEN.WhereFormat) == false) {
    strWhereCond = Format(clsGCPathEN.WhereFormat, strPrjId, strUserId);
  } else {
    strWhereCond = Format("PrjId='{0}' and UserId='{1}'", strPrjId, strUserId);
  }
  const strKey = Format('{0}_{1}_{2}', clsGCPathEN._CurrTabName, strPrjId, strUserId);
  if (IsNullOrEmpty(clsGCPathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCPathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGCPathExObjLstCache: Array<clsGCPathEN> = JSON.parse(strTempObjLst);
    const arrGCPathObjLstT = GCPath_GetObjLstByJSONObjLst(arrGCPathExObjLstCache);
    return arrGCPathObjLstT;
  }
  try {
    const arrGCPathExObjLst = await GCPath_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrGCPathExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCPathExObjLst.length,
    );
    console.log(strInfo);
    return arrGCPathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCPath_ConstructorName,
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
export async function GCPath_GetObjLstlocalStoragePureCache(strPrjId: string, strUserId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}_{2}', clsGCPathEN._CurrTabName, strPrjId, strUserId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGCPathObjLstCache: Array<clsGCPathEN> = JSON.parse(strTempObjLst);
    return arrGCPathObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function GCPath_GetObjLstAsync(strWhereCond: string): Promise<Array<clsGCPathEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

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
          gCPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCPath_GetObjLstByJSONObjLst(returnObjLst);
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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
export async function GCPath_GetObjLstsessionStorage(strPrjId: string, strUserId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsGCPathEN.WhereFormat) == false) {
    strWhereCond = Format(clsGCPathEN.WhereFormat, strPrjId, strUserId);
  } else {
    strWhereCond = Format("PrjId='{0}' and UserId='{1}'", strPrjId, strUserId);
  }
  const strKey = Format('{0}_{1}_{2}', clsGCPathEN._CurrTabName, strPrjId, strUserId);
  if (IsNullOrEmpty(clsGCPathEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGCPathEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGCPathExObjLstCache: Array<clsGCPathEN> = JSON.parse(strTempObjLst);
    const arrGCPathObjLstT = GCPath_GetObjLstByJSONObjLst(arrGCPathExObjLstCache);
    return arrGCPathObjLstT;
  }
  try {
    const arrGCPathExObjLst = await GCPath_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrGCPathExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGCPathExObjLst.length,
    );
    console.log(strInfo);
    return arrGCPathExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gCPath_ConstructorName,
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
export async function GCPath_GetObjLstsessionStoragePureCache(strPrjId: string, strUserId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}_{2}', clsGCPathEN._CurrTabName, strPrjId, strUserId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGCPathObjLstCache: Array<clsGCPathEN> = JSON.parse(strTempObjLst);
    return arrGCPathObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GCPath_GetObjLstCache(
  strPrjId: string,
  strUserId: string,
): Promise<Array<clsGCPathEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In clsGCPathWApi.GCPath_GetObjLstCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsGCPathWApi.GCPath_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空！(In clsGCPathWApi.GCPath_GetObjLstCache)');
    console.error(strMsg);
    throw strMsg;
  }
  let arrGCPathObjLstCache;
  switch (clsGCPathEN.CacheModeId) {
    case '04': //sessionStorage
      arrGCPathObjLstCache = await GCPath_GetObjLstsessionStorage(strPrjId, strUserId);
      break;
    case '03': //localStorage
      arrGCPathObjLstCache = await GCPath_GetObjLstlocalStorage(strPrjId, strUserId);
      break;
    case '02': //ClientCache
      arrGCPathObjLstCache = await GCPath_GetObjLstClientCache(strPrjId, strUserId);
      break;
    default:
      arrGCPathObjLstCache = await GCPath_GetObjLstClientCache(strPrjId, strUserId);
      break;
  }
  return arrGCPathObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GCPath_GetObjLstPureCache(strPrjId: string, strUserId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrGCPathObjLstCache;
  switch (clsGCPathEN.CacheModeId) {
    case '04': //sessionStorage
      arrGCPathObjLstCache = await GCPath_GetObjLstsessionStoragePureCache(strPrjId, strUserId);
      break;
    case '03': //localStorage
      arrGCPathObjLstCache = await GCPath_GetObjLstlocalStoragePureCache(strPrjId, strUserId);
      break;
    case '02': //ClientCache
      arrGCPathObjLstCache = null;
      break;
    default:
      arrGCPathObjLstCache = null;
      break;
  }
  return arrGCPathObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrGcPathIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GCPath_GetSubObjLstCache(
  objGCPathCond: clsGCPathEN,
  strPrjId: string,
  strUserId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrGCPathObjLstCache = await GCPath_GetObjLstCache(strPrjId, strUserId);
  let arrGCPathSel = arrGCPathObjLstCache;
  if (objGCPathCond.sfFldComparisonOp == null || objGCPathCond.sfFldComparisonOp == '')
    return arrGCPathSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objGCPathCond.sfFldComparisonOp,
  );
  //console.log("clsGCPathWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objGCPathCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objGCPathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrGCPathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGCPathCond),
      gCPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCPathEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrGcPathId:关键字列表
 * @returns 对象列表
 **/
export async function GCPath_GetObjLstByGcPathIdLstAsync(
  arrGcPathId: Array<string>,
): Promise<Array<clsGCPathEN>> {
  const strThisFuncName = 'GetObjLstByGcPathIdLstAsync';
  const strAction = 'GetObjLstByGcPathIdLst';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrGcPathId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gCPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCPath_GetObjLstByJSONObjLst(returnObjLst);
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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
 * @param arrstrGcPathIdLst:关键字列表
 * @returns 对象列表
 */
export async function GCPath_GetObjLstByGcPathIdLstCache(
  arrGcPathIdLst: Array<string>,
  strPrjId: string,
  strUserId: string,
) {
  const strThisFuncName = 'GetObjLstByGcPathIdLstCache';
  try {
    const arrGCPathObjLstCache = await GCPath_GetObjLstCache(strPrjId, strUserId);
    const arrGCPathSel = arrGCPathObjLstCache.filter(
      (x) => arrGcPathIdLst.indexOf(x.gcPathId) > -1,
    );
    return arrGCPathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrGcPathIdLst.join(','),
      gCPath_ConstructorName,
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
export async function GCPath_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsGCPathEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

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
          gCPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCPath_GetObjLstByJSONObjLst(returnObjLst);
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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
export async function GCPath_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsGCPathEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

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
          gCPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCPath_GetObjLstByJSONObjLst(returnObjLst);
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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
export async function GCPath_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
  strUserId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCPathEN>();
  const arrGCPathObjLstCache = await GCPath_GetObjLstCache(strPrjId, strUserId);
  if (arrGCPathObjLstCache.length == 0) return arrGCPathObjLstCache;
  let arrGCPathSel = arrGCPathObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objGCPathCond = new clsGCPathEN();
  ObjectAssign(objGCPathCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsGCPathWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objGCPathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGCPathSel = arrGCPathSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrGCPathSel.length == 0) return arrGCPathSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGCPathSel = arrGCPathSel.sort(GCPath_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGCPathSel = arrGCPathSel.sort(objPagerPara.sortFun);
    }
    arrGCPathSel = arrGCPathSel.slice(intStart, intEnd);
    return arrGCPathSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gCPath_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGCPathEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function GCPath_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGCPathEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsGCPathEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

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
          gCPath_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GCPath_GetObjLstByJSONObjLst(returnObjLst);
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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
 * @param strGcPathId:关键字
 * @returns 获取删除的结果
 **/
export async function GCPath_DelRecordAsync(strGcPathId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gCPath_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strGcPathId);

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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
 * @param arrGcPathId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function GCPath_DelGCPathsAsync(arrGcPathId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelGCPathsAsync';
  const strAction = 'DelGCPaths';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrGcPathId, config);
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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
export async function GCPath_DelGCPathsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelGCPathsByCondAsync';
  const strAction = 'DelGCPathsByCond';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
 * @param objGCPathEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCPath_AddNewRecordAsync(objGCPathEN: clsGCPathEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objGCPathEN);
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCPathEN, config);
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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
 * @param objGCPathEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GCPath_AddNewRecordWithMaxIdAsync(objGCPathEN: clsGCPathEN): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCPathEN, config);
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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
 * @param objGCPathEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function GCPath_AddNewRecordWithReturnKeyAsync(
  objGCPathEN: clsGCPathEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCPathEN, config);
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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
 * @param objGCPathEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GCPath_UpdateRecordAsync(objGCPathEN: clsGCPathEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objGCPathEN.sfUpdFldSetStr === undefined ||
    objGCPathEN.sfUpdFldSetStr === null ||
    objGCPathEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objGCPathEN.gcPathId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCPathEN, config);
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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
 * @param objGCPathEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function GCPath_UpdateWithConditionAsync(
  objGCPathEN: clsGCPathEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objGCPathEN.sfUpdFldSetStr === undefined ||
    objGCPathEN.sfUpdFldSetStr === null ||
    objGCPathEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objGCPathEN.gcPathId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);
  objGCPathEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGCPathEN, config);
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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
 * @param objstrGcPathIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GCPath_IsExistRecordCache(
  objGCPathCond: clsGCPathEN,
  strPrjId: string,
  strUserId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrGCPathObjLstCache = await GCPath_GetObjLstCache(strPrjId, strUserId);
  if (arrGCPathObjLstCache == null) return false;
  let arrGCPathSel = arrGCPathObjLstCache;
  if (objGCPathCond.sfFldComparisonOp == null || objGCPathCond.sfFldComparisonOp == '')
    return arrGCPathSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objGCPathCond.sfFldComparisonOp,
  );
  //console.log("clsGCPathWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objGCPathCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objGCPathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrGCPathSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objGCPathCond),
      gCPath_ConstructorName,
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
export async function GCPath_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
 * @param strGcPathId:所给的关键字
 * @returns 对象
 */
export async function GCPath_IsExistCache(
  strGcPathId: string,
  strPrjId: string,
  strUserId: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrGCPathObjLstCache = await GCPath_GetObjLstCache(strPrjId, strUserId);
  if (arrGCPathObjLstCache == null) return false;
  try {
    const arrGCPathSel = arrGCPathObjLstCache.filter((x) => x.gcPathId == strGcPathId);
    if (arrGCPathSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strGcPathId,
      gCPath_ConstructorName,
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
 * @param strGcPathId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function GCPath_IsExistAsync(strGcPathId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strGcPathId,
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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
export async function GCPath_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
 * @param objGCPathCond:条件对象
 * @returns 对象列表记录数
 */
export async function GCPath_GetRecCountByCondCache(
  objGCPathCond: clsGCPathEN,
  strPrjId: string,
  strUserId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrGCPathObjLstCache = await GCPath_GetObjLstCache(strPrjId, strUserId);
  if (arrGCPathObjLstCache == null) return 0;
  let arrGCPathSel = arrGCPathObjLstCache;
  if (objGCPathCond.sfFldComparisonOp == null || objGCPathCond.sfFldComparisonOp == '')
    return arrGCPathSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objGCPathCond.sfFldComparisonOp,
  );
  //console.log("clsGCPathWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objGCPathCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objGCPathCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGCPathSel = arrGCPathSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGCPathSel = arrGCPathSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrGCPathSel = arrGCPathSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrGCPathSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGCPathCond),
      gCPath_ConstructorName,
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
export async function GCPath_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
export async function GCPath_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gCPath_Controller, strAction);

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
        gCPath_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gCPath_ConstructorName,
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
export function GCPath_GetWebApiUrl(strController: string, strAction: string): string {
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
export function GCPath_ReFreshCache4Head(strPrjId: string): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsGCPathEN._CurrTabName, strPrjId);
  switch (clsGCPathEN.CacheModeId) {
    case '04': //sessionStorage
      CacheHelper.ClearSessionStorage4Head(strKey);
      break;
    case '03': //localStorage
      CacheHelper.ClearLocalStorage4Head(strKey);
      break;
    default:
      CacheHelper.Remove(strKey);
      break;
  }
}
/**
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export function GCPath_ReFreshCache(strPrjId: string, strUserId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空!(In clsGCPathWApi.clsGCPathWApi.ReFreshCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsGCPathWApi.clsGCPathWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空!(In clsGCPathWApi.clsGCPathWApi.ReFreshCache)');
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}_{2}', clsGCPathEN._CurrTabName, strPrjId, strUserId);
  switch (clsGCPathEN.CacheModeId) {
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
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function GCPath_ReFreshThisCache4Head(strPrjId: string): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsGCPathEN._CurrTabName, strPrjId);
  switch (clsGCPathEN.CacheModeId) {
    case '04': //sessionStorage
      CacheHelper.ClearSessionStorage4Head(strKey);
      break;
    case '03': //localStorage
      CacheHelper.ClearLocalStorage4Head(strKey);
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
export function GCPath_ReFreshThisCache(strPrjId: string, strUserId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空!(In clsGCPathWApi.GCPath_ReFreshThisCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsGCPathWApi.GCPath_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空!(In clsGCPathWApi.GCPath_ReFreshThisCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}_{2}', clsGCPathEN._CurrTabName, strPrjId, strUserId);
    switch (clsGCPathEN.CacheModeId) {
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

 * @param strPrjId:
 * @param strUserId:
*/
export async function GCPath_BindDdl_GcPathIdByPrjIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
  strUserId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsGCPathWApi.BindDdl_GcPathIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsGCPathWApi.BindDdl_GcPathIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format(
      '参数:[strUserId]不能为空！(In clsGCPathWApi.BindDdl_GcPathIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_GcPathIdByPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_GcPathIdByPrjIdInDivCache");
  let arrObjLstSel = await GCPath_GetObjLstCache(strPrjId, strUserId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId && x.userId == strUserId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsGCPathEN.con_GcPathId,
    clsGCPathEN.con_GcPathName,
    'GC路径',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCPath_CheckPropertyNew(pobjGCPathEN: clsGCPathEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjGCPathEN.gcPathName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[GC路径名]不能为空(In GC路径)!(clsGCPathBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjGCPathEN.isForMainPath ||
    (pobjGCPathEN.isForMainPath != null && pobjGCPathEN.isForMainPath.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否For主目录]不能为空(In GC路径)!(clsGCPathBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjGCPathEN.userId) === true || pobjGCPathEN.userId.toString() === '0') {
    throw new Error(
      '(errid:Watl000411)字段[用户Id]不能为空(In GC路径)!(clsGCPathBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjGCPathEN.prjId) === true || pobjGCPathEN.prjId.toString() === '0') {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In GC路径)!(clsGCPathBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjGCPathEN.gcPathId) == false && GetStrLen(pobjGCPathEN.gcPathId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[GC路径Id(gcPathId)]的长度不能超过8(In GC路径(GCPath))!值:$(pobjGCPathEN.gcPathId)(clsGCPathBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjGCPathEN.gcPathName) == false && GetStrLen(pobjGCPathEN.gcPathName) > 150) {
    throw new Error(
      '(errid:Watl000413)字段[GC路径名(gcPathName)]的长度不能超过150(In GC路径(GCPath))!值:$(pobjGCPathEN.gcPathName)(clsGCPathBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjGCPathEN.userId) == false && GetStrLen(pobjGCPathEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In GC路径(GCPath))!值:$(pobjGCPathEN.userId)(clsGCPathBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjGCPathEN.prjId) == false && GetStrLen(pobjGCPathEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In GC路径(GCPath))!值:$(pobjGCPathEN.prjId)(clsGCPathBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjGCPathEN.updDate) == false && GetStrLen(pobjGCPathEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In GC路径(GCPath))!值:$(pobjGCPathEN.updDate)(clsGCPathBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjGCPathEN.updUser) == false && GetStrLen(pobjGCPathEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In GC路径(GCPath))!值:$(pobjGCPathEN.updUser)(clsGCPathBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjGCPathEN.memo) == false && GetStrLen(pobjGCPathEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In GC路径(GCPath))!值:$(pobjGCPathEN.memo)(clsGCPathBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCPathEN.gcPathId) == false &&
    undefined !== pobjGCPathEN.gcPathId &&
    tzDataType.isString(pobjGCPathEN.gcPathId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[GC路径Id(gcPathId)]的值:[$(pobjGCPathEN.gcPathId)], 非法,应该为字符型(In GC路径(GCPath))!(clsGCPathBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCPathEN.gcPathName) == false &&
    undefined !== pobjGCPathEN.gcPathName &&
    tzDataType.isString(pobjGCPathEN.gcPathName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[GC路径名(gcPathName)]的值:[$(pobjGCPathEN.gcPathName)], 非法,应该为字符型(In GC路径(GCPath))!(clsGCPathBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjGCPathEN.isForMainPath &&
    undefined !== pobjGCPathEN.isForMainPath &&
    tzDataType.isBoolean(pobjGCPathEN.isForMainPath) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否For主目录(isForMainPath)]的值:[$(pobjGCPathEN.isForMainPath)], 非法,应该为布尔型(In GC路径(GCPath))!(clsGCPathBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCPathEN.userId) == false &&
    undefined !== pobjGCPathEN.userId &&
    tzDataType.isString(pobjGCPathEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户Id(userId)]的值:[$(pobjGCPathEN.userId)], 非法,应该为字符型(In GC路径(GCPath))!(clsGCPathBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCPathEN.prjId) == false &&
    undefined !== pobjGCPathEN.prjId &&
    tzDataType.isString(pobjGCPathEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjGCPathEN.prjId)], 非法,应该为字符型(In GC路径(GCPath))!(clsGCPathBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCPathEN.updDate) == false &&
    undefined !== pobjGCPathEN.updDate &&
    tzDataType.isString(pobjGCPathEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjGCPathEN.updDate)], 非法,应该为字符型(In GC路径(GCPath))!(clsGCPathBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCPathEN.updUser) == false &&
    undefined !== pobjGCPathEN.updUser &&
    tzDataType.isString(pobjGCPathEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjGCPathEN.updUser)], 非法,应该为字符型(In GC路径(GCPath))!(clsGCPathBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCPathEN.memo) == false &&
    undefined !== pobjGCPathEN.memo &&
    tzDataType.isString(pobjGCPathEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjGCPathEN.memo)], 非法,应该为字符型(In GC路径(GCPath))!(clsGCPathBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GCPath_CheckProperty4Update(pobjGCPathEN: clsGCPathEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjGCPathEN.gcPathId) == false && GetStrLen(pobjGCPathEN.gcPathId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[GC路径Id(gcPathId)]的长度不能超过8(In GC路径(GCPath))!值:$(pobjGCPathEN.gcPathId)(clsGCPathBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjGCPathEN.gcPathName) == false && GetStrLen(pobjGCPathEN.gcPathName) > 150) {
    throw new Error(
      '(errid:Watl000416)字段[GC路径名(gcPathName)]的长度不能超过150(In GC路径(GCPath))!值:$(pobjGCPathEN.gcPathName)(clsGCPathBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjGCPathEN.userId) == false && GetStrLen(pobjGCPathEN.userId) > 18) {
    throw new Error(
      '(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In GC路径(GCPath))!值:$(pobjGCPathEN.userId)(clsGCPathBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjGCPathEN.prjId) == false && GetStrLen(pobjGCPathEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In GC路径(GCPath))!值:$(pobjGCPathEN.prjId)(clsGCPathBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjGCPathEN.updDate) == false && GetStrLen(pobjGCPathEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In GC路径(GCPath))!值:$(pobjGCPathEN.updDate)(clsGCPathBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjGCPathEN.updUser) == false && GetStrLen(pobjGCPathEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In GC路径(GCPath))!值:$(pobjGCPathEN.updUser)(clsGCPathBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjGCPathEN.memo) == false && GetStrLen(pobjGCPathEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In GC路径(GCPath))!值:$(pobjGCPathEN.memo)(clsGCPathBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGCPathEN.gcPathId) == false &&
    undefined !== pobjGCPathEN.gcPathId &&
    tzDataType.isString(pobjGCPathEN.gcPathId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[GC路径Id(gcPathId)]的值:[$(pobjGCPathEN.gcPathId)], 非法,应该为字符型(In GC路径(GCPath))!(clsGCPathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCPathEN.gcPathName) == false &&
    undefined !== pobjGCPathEN.gcPathName &&
    tzDataType.isString(pobjGCPathEN.gcPathName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[GC路径名(gcPathName)]的值:[$(pobjGCPathEN.gcPathName)], 非法,应该为字符型(In GC路径(GCPath))!(clsGCPathBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjGCPathEN.isForMainPath &&
    undefined !== pobjGCPathEN.isForMainPath &&
    tzDataType.isBoolean(pobjGCPathEN.isForMainPath) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否For主目录(isForMainPath)]的值:[$(pobjGCPathEN.isForMainPath)], 非法,应该为布尔型(In GC路径(GCPath))!(clsGCPathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCPathEN.userId) == false &&
    undefined !== pobjGCPathEN.userId &&
    tzDataType.isString(pobjGCPathEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户Id(userId)]的值:[$(pobjGCPathEN.userId)], 非法,应该为字符型(In GC路径(GCPath))!(clsGCPathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCPathEN.prjId) == false &&
    undefined !== pobjGCPathEN.prjId &&
    tzDataType.isString(pobjGCPathEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjGCPathEN.prjId)], 非法,应该为字符型(In GC路径(GCPath))!(clsGCPathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCPathEN.updDate) == false &&
    undefined !== pobjGCPathEN.updDate &&
    tzDataType.isString(pobjGCPathEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjGCPathEN.updDate)], 非法,应该为字符型(In GC路径(GCPath))!(clsGCPathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCPathEN.updUser) == false &&
    undefined !== pobjGCPathEN.updUser &&
    tzDataType.isString(pobjGCPathEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjGCPathEN.updUser)], 非法,应该为字符型(In GC路径(GCPath))!(clsGCPathBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGCPathEN.memo) == false &&
    undefined !== pobjGCPathEN.memo &&
    tzDataType.isString(pobjGCPathEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjGCPathEN.memo)], 非法,应该为字符型(In GC路径(GCPath))!(clsGCPathBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GCPath_GetJSONStrByObj(pobjGCPathEN: clsGCPathEN): string {
  pobjGCPathEN.sfUpdFldSetStr = pobjGCPathEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjGCPathEN);
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function GCPath_GetObjLstByJSONStr(strJSON: string): Array<clsGCPathEN> {
  let arrGCPathObjLst = new Array<clsGCPathEN>();
  if (strJSON === '') {
    return arrGCPathObjLst;
  }
  try {
    arrGCPathObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrGCPathObjLst;
  }
  return arrGCPathObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrGCPathObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function GCPath_GetObjLstByJSONObjLst(
  arrGCPathObjLstS: Array<clsGCPathEN>,
): Array<clsGCPathEN> {
  const arrGCPathObjLst = new Array<clsGCPathEN>();
  for (const objInFor of arrGCPathObjLstS) {
    const obj1 = GCPath_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrGCPathObjLst.push(obj1);
  }
  return arrGCPathObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GCPath_GetObjByJSONStr(strJSON: string): clsGCPathEN {
  let pobjGCPathEN = new clsGCPathEN();
  if (strJSON === '') {
    return pobjGCPathEN;
  }
  try {
    pobjGCPathEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjGCPathEN;
  }
  return pobjGCPathEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function GCPath_GetCombineCondition(objGCPathCond: clsGCPathEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objGCPathCond.dicFldComparisonOp,
      clsGCPathEN.con_GcPathId,
    ) == true
  ) {
    const strComparisonOpGcPathId: string =
      objGCPathCond.dicFldComparisonOp[clsGCPathEN.con_GcPathId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCPathEN.con_GcPathId,
      objGCPathCond.gcPathId,
      strComparisonOpGcPathId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCPathCond.dicFldComparisonOp,
      clsGCPathEN.con_GcPathName,
    ) == true
  ) {
    const strComparisonOpGcPathName: string =
      objGCPathCond.dicFldComparisonOp[clsGCPathEN.con_GcPathName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCPathEN.con_GcPathName,
      objGCPathCond.gcPathName,
      strComparisonOpGcPathName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCPathCond.dicFldComparisonOp,
      clsGCPathEN.con_IsForMainPath,
    ) == true
  ) {
    if (objGCPathCond.isForMainPath == true) {
      strWhereCond += Format(" And {0} = '1'", clsGCPathEN.con_IsForMainPath);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsGCPathEN.con_IsForMainPath);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCPathCond.dicFldComparisonOp,
      clsGCPathEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string = objGCPathCond.dicFldComparisonOp[clsGCPathEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCPathEN.con_UserId,
      objGCPathCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objGCPathCond.dicFldComparisonOp, clsGCPathEN.con_PrjId) ==
    true
  ) {
    const strComparisonOpPrjId: string = objGCPathCond.dicFldComparisonOp[clsGCPathEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCPathEN.con_PrjId,
      objGCPathCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCPathCond.dicFldComparisonOp,
      clsGCPathEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objGCPathCond.dicFldComparisonOp[clsGCPathEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCPathEN.con_UpdDate,
      objGCPathCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGCPathCond.dicFldComparisonOp,
      clsGCPathEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objGCPathCond.dicFldComparisonOp[clsGCPathEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCPathEN.con_UpdUser,
      objGCPathCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objGCPathCond.dicFldComparisonOp, clsGCPathEN.con_Memo) ==
    true
  ) {
    const strComparisonOpMemo: string = objGCPathCond.dicFldComparisonOp[clsGCPathEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGCPathEN.con_Memo,
      objGCPathCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--GCPath(GC路径),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strGcPathName: GC路径名(要求唯一的字段)
 * @param bolIsForMainPath: 是否For主目录(要求唯一的字段)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function GCPath_GetUniCondStr(objGCPathEN: clsGCPathEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and GcPathName = '{0}'", objGCPathEN.gcPathName);
  strWhereCond += Format(" and IsForMainPath = '{0}'", objGCPathEN.isForMainPath);
  strWhereCond += Format(" and UserId = '{0}'", objGCPathEN.userId);
  strWhereCond += Format(" and PrjId = '{0}'", objGCPathEN.prjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--GCPath(GC路径),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strGcPathName: GC路径名(要求唯一的字段)
 * @param bolIsForMainPath: 是否For主目录(要求唯一的字段)
 * @param strUserId: 用户Id(要求唯一的字段)
 * @param strPrjId: 工程ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function GCPath_GetUniCondStr4Update(objGCPathEN: clsGCPathEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and GcPathId <> '{0}'", objGCPathEN.gcPathId);
  strWhereCond += Format(" and GcPathName = '{0}'", objGCPathEN.gcPathName);
  strWhereCond += Format(" and IsForMainPath = '{0}'", objGCPathEN.isForMainPath);
  strWhereCond += Format(" and UserId = '{0}'", objGCPathEN.userId);
  strWhereCond += Format(" and PrjId = '{0}'", objGCPathEN.prjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objGCPathENS:源对象
 * @param objGCPathENT:目标对象
 */
export function GCPath_GetObjFromJsonObj(objGCPathENS: clsGCPathEN): clsGCPathEN {
  const objGCPathENT: clsGCPathEN = new clsGCPathEN();
  ObjectAssign(objGCPathENT, objGCPathENS);
  return objGCPathENT;
}
