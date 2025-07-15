/**
 * 类名:clsFieldTab4RootFldWApi
 * 表名:FieldTab4RootFld(00050422)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:19
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:字段、表维护(Table_Field)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程字段4RootFld(FieldTab4RootFld)
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
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsFieldTab4RootFldEN } from '@/ts/L0Entity/Table_Field/clsFieldTab4RootFldEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const fieldTab4RootFld_Controller = 'FieldTab4RootFldApi';
export const fieldTab4RootFld_ConstructorName = 'fieldTab4RootFld';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function FieldTab4RootFld_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsFieldTab4RootFldEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsFieldTab4RootFldWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

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
      const objFieldTab4RootFld = FieldTab4RootFld_GetObjFromJsonObj(returnObj);
      return objFieldTab4RootFld;
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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_GetObjBymIdCache(
  lngmId: number,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsFieldTab4RootFldWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrFieldTab4RootFldObjLstCache = await FieldTab4RootFld_GetObjLstCache(strPrjId);
  try {
    const arrFieldTab4RootFldSel = arrFieldTab4RootFldObjLstCache.filter((x) => x.mId == lngmId);
    let objFieldTab4RootFld: clsFieldTab4RootFldEN;
    if (arrFieldTab4RootFldSel.length > 0) {
      objFieldTab4RootFld = arrFieldTab4RootFldSel[0];
      return objFieldTab4RootFld;
    } else {
      if (bolTryAsyncOnce == true) {
        const objFieldTab4RootFldConst = await FieldTab4RootFld_GetObjBymIdAsync(lngmId);
        if (objFieldTab4RootFldConst != null) {
          FieldTab4RootFld_ReFreshThisCache(strPrjId);
          return objFieldTab4RootFldConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsFieldTab4RootFldWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsFieldTab4RootFldEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objFieldTab4RootFldCache: clsFieldTab4RootFldEN = JSON.parse(strTempObj);
    return objFieldTab4RootFldCache;
  }
  try {
    const objFieldTab4RootFld = await FieldTab4RootFld_GetObjBymIdAsync(lngmId);
    if (objFieldTab4RootFld != null) {
      localStorage.setItem(strKey, JSON.stringify(objFieldTab4RootFld));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objFieldTab4RootFld;
    }
    return objFieldTab4RootFld;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      fieldTab4RootFld_ConstructorName,
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
 * @param objFieldTab4RootFld:所给的对象
 * @returns 对象
 */
export async function FieldTab4RootFld_UpdateObjInLstCache(
  objFieldTab4RootFld: clsFieldTab4RootFldEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrFieldTab4RootFldObjLstCache = await FieldTab4RootFld_GetObjLstCache(strPrjId);
    const obj = arrFieldTab4RootFldObjLstCache.find(
      (x) => x.tabId == objFieldTab4RootFld.tabId && x.fldId == objFieldTab4RootFld.fldId,
    );
    if (obj != null) {
      objFieldTab4RootFld.mId = obj.mId;
      ObjectAssign(obj, objFieldTab4RootFld);
    } else {
      arrFieldTab4RootFldObjLstCache.push(objFieldTab4RootFld);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      fieldTab4RootFld_ConstructorName,
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function FieldTab4RootFld_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsFieldTab4RootFldWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsFieldTab4RootFldWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsFieldTab4RootFldEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsFieldTab4RootFldEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsFieldTab4RootFldEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objFieldTab4RootFld = await FieldTab4RootFld_GetObjBymIdCache(lngmId, strPrjIdClassfy);
  if (objFieldTab4RootFld == null) return '';
  if (objFieldTab4RootFld.GetFldValue(strOutFldName) == null) return '';
  return objFieldTab4RootFld.GetFldValue(strOutFldName).toString();
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
export function FieldTab4RootFld_SortFunDefa(
  a: clsFieldTab4RootFldEN,
  b: clsFieldTab4RootFldEN,
): number {
  return a.mId - b.mId;
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
export function FieldTab4RootFld_SortFunDefa2Fld(
  a: clsFieldTab4RootFldEN,
  b: clsFieldTab4RootFldEN,
): number {
  if (a.tabId == b.tabId) return a.fldId.localeCompare(b.fldId);
  else return a.tabId.localeCompare(b.tabId);
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
export function FieldTab4RootFld_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsFieldTab4RootFldEN.con_mId:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          return a.mId - b.mId;
        };
      case clsFieldTab4RootFldEN.con_TabId:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsFieldTab4RootFldEN.con_FldId:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          return a.fldId.localeCompare(b.fldId);
        };
      case clsFieldTab4RootFldEN.con_IsPrimaryKey:
        return (a: clsFieldTab4RootFldEN) => {
          if (a.isPrimaryKey == true) return 1;
          else return -1;
        };
      case clsFieldTab4RootFldEN.con_IsRootFld:
        return (a: clsFieldTab4RootFldEN) => {
          if (a.isRootFld == true) return 1;
          else return -1;
        };
      case clsFieldTab4RootFldEN.con_Root4TabId:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          if (a.root4TabId == null) return -1;
          if (b.root4TabId == null) return 1;
          return a.root4TabId.localeCompare(b.root4TabId);
        };
      case clsFieldTab4RootFldEN.con_RootFldId:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          if (a.rootFldId == null) return -1;
          if (b.rootFldId == null) return 1;
          return a.rootFldId.localeCompare(b.rootFldId);
        };
      case clsFieldTab4RootFldEN.con_RootTabId:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          if (a.rootTabId == null) return -1;
          if (b.rootTabId == null) return 1;
          return a.rootTabId.localeCompare(b.rootTabId);
        };
      case clsFieldTab4RootFldEN.con_PrjId:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsFieldTab4RootFldEN.con_UpdUser:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsFieldTab4RootFldEN.con_UpdDate:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsFieldTab4RootFldEN.con_Memo:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FieldTab4RootFld]中不存在!(in ${fieldTab4RootFld_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsFieldTab4RootFldEN.con_mId:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          return b.mId - a.mId;
        };
      case clsFieldTab4RootFldEN.con_TabId:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsFieldTab4RootFldEN.con_FldId:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          return b.fldId.localeCompare(a.fldId);
        };
      case clsFieldTab4RootFldEN.con_IsPrimaryKey:
        return (b: clsFieldTab4RootFldEN) => {
          if (b.isPrimaryKey == true) return 1;
          else return -1;
        };
      case clsFieldTab4RootFldEN.con_IsRootFld:
        return (b: clsFieldTab4RootFldEN) => {
          if (b.isRootFld == true) return 1;
          else return -1;
        };
      case clsFieldTab4RootFldEN.con_Root4TabId:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          if (b.root4TabId == null) return -1;
          if (a.root4TabId == null) return 1;
          return b.root4TabId.localeCompare(a.root4TabId);
        };
      case clsFieldTab4RootFldEN.con_RootFldId:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          if (b.rootFldId == null) return -1;
          if (a.rootFldId == null) return 1;
          return b.rootFldId.localeCompare(a.rootFldId);
        };
      case clsFieldTab4RootFldEN.con_RootTabId:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          if (b.rootTabId == null) return -1;
          if (a.rootTabId == null) return 1;
          return b.rootTabId.localeCompare(a.rootTabId);
        };
      case clsFieldTab4RootFldEN.con_PrjId:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsFieldTab4RootFldEN.con_UpdUser:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsFieldTab4RootFldEN.con_UpdDate:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsFieldTab4RootFldEN.con_Memo:
        return (a: clsFieldTab4RootFldEN, b: clsFieldTab4RootFldEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[FieldTab4RootFld]中不存在!(in ${fieldTab4RootFld_ConstructorName}.${strThisFuncName})`;
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
export async function FieldTab4RootFld_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsFieldTab4RootFldEN.con_mId:
      return (obj: clsFieldTab4RootFldEN) => {
        return obj.mId === value;
      };
    case clsFieldTab4RootFldEN.con_TabId:
      return (obj: clsFieldTab4RootFldEN) => {
        return obj.tabId === value;
      };
    case clsFieldTab4RootFldEN.con_FldId:
      return (obj: clsFieldTab4RootFldEN) => {
        return obj.fldId === value;
      };
    case clsFieldTab4RootFldEN.con_IsPrimaryKey:
      return (obj: clsFieldTab4RootFldEN) => {
        return obj.isPrimaryKey === value;
      };
    case clsFieldTab4RootFldEN.con_IsRootFld:
      return (obj: clsFieldTab4RootFldEN) => {
        return obj.isRootFld === value;
      };
    case clsFieldTab4RootFldEN.con_Root4TabId:
      return (obj: clsFieldTab4RootFldEN) => {
        return obj.root4TabId === value;
      };
    case clsFieldTab4RootFldEN.con_RootFldId:
      return (obj: clsFieldTab4RootFldEN) => {
        return obj.rootFldId === value;
      };
    case clsFieldTab4RootFldEN.con_RootTabId:
      return (obj: clsFieldTab4RootFldEN) => {
        return obj.rootTabId === value;
      };
    case clsFieldTab4RootFldEN.con_PrjId:
      return (obj: clsFieldTab4RootFldEN) => {
        return obj.prjId === value;
      };
    case clsFieldTab4RootFldEN.con_UpdUser:
      return (obj: clsFieldTab4RootFldEN) => {
        return obj.updUser === value;
      };
    case clsFieldTab4RootFldEN.con_UpdDate:
      return (obj: clsFieldTab4RootFldEN) => {
        return obj.updDate === value;
      };
    case clsFieldTab4RootFldEN.con_Memo:
      return (obj: clsFieldTab4RootFldEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[FieldTab4RootFld]中不存在!(in ${fieldTab4RootFld_ConstructorName}.${strThisFuncName})`;
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
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function FieldTab4RootFld_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsFieldTab4RootFldWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsFieldTab4RootFldWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsFieldTab4RootFldEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrFieldTab4RootFld = await FieldTab4RootFld_GetObjLstCache(strPrjIdClassfy);
  if (arrFieldTab4RootFld == null) return [];
  let arrFieldTab4RootFldSel = arrFieldTab4RootFld;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrFieldTab4RootFldSel.length == 0) return [];
  return arrFieldTab4RootFldSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function FieldTab4RootFld_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsFieldTab4RootFldEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

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
      const objFieldTab4RootFld = FieldTab4RootFld_GetObjFromJsonObj(returnObj);
      return objFieldTab4RootFld;
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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsFieldTab4RootFldEN.WhereFormat) == false) {
    strWhereCond = Format(clsFieldTab4RootFldEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsFieldTab4RootFldEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsFieldTab4RootFldEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFieldTab4RootFldEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrFieldTab4RootFldExObjLstCache: Array<clsFieldTab4RootFldEN> = CacheHelper.Get(strKey);
    const arrFieldTab4RootFldObjLstT = FieldTab4RootFld_GetObjLstByJSONObjLst(
      arrFieldTab4RootFldExObjLstCache,
    );
    return arrFieldTab4RootFldObjLstT;
  }
  try {
    const arrFieldTab4RootFldExObjLst = await FieldTab4RootFld_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrFieldTab4RootFldExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFieldTab4RootFldExObjLst.length,
    );
    console.log(strInfo);
    return arrFieldTab4RootFldExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsFieldTab4RootFldEN.WhereFormat) == false) {
    strWhereCond = Format(clsFieldTab4RootFldEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsFieldTab4RootFldEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsFieldTab4RootFldEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsFieldTab4RootFldEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFieldTab4RootFldEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFieldTab4RootFldExObjLstCache: Array<clsFieldTab4RootFldEN> =
      JSON.parse(strTempObjLst);
    const arrFieldTab4RootFldObjLstT = FieldTab4RootFld_GetObjLstByJSONObjLst(
      arrFieldTab4RootFldExObjLstCache,
    );
    return arrFieldTab4RootFldObjLstT;
  }
  try {
    const arrFieldTab4RootFldExObjLst = await FieldTab4RootFld_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrFieldTab4RootFldExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFieldTab4RootFldExObjLst.length,
    );
    console.log(strInfo);
    return arrFieldTab4RootFldExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsFieldTab4RootFldEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrFieldTab4RootFldObjLstCache: Array<clsFieldTab4RootFldEN> = JSON.parse(strTempObjLst);
    return arrFieldTab4RootFldObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function FieldTab4RootFld_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsFieldTab4RootFldEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

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
          fieldTab4RootFld_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldTab4RootFld_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsFieldTab4RootFldEN.WhereFormat) == false) {
    strWhereCond = Format(clsFieldTab4RootFldEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsFieldTab4RootFldEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsFieldTab4RootFldEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsFieldTab4RootFldEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsFieldTab4RootFldEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFieldTab4RootFldExObjLstCache: Array<clsFieldTab4RootFldEN> =
      JSON.parse(strTempObjLst);
    const arrFieldTab4RootFldObjLstT = FieldTab4RootFld_GetObjLstByJSONObjLst(
      arrFieldTab4RootFldExObjLstCache,
    );
    return arrFieldTab4RootFldObjLstT;
  }
  try {
    const arrFieldTab4RootFldExObjLst = await FieldTab4RootFld_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrFieldTab4RootFldExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrFieldTab4RootFldExObjLst.length,
    );
    console.log(strInfo);
    return arrFieldTab4RootFldExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsFieldTab4RootFldEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrFieldTab4RootFldObjLstCache: Array<clsFieldTab4RootFldEN> = JSON.parse(strTempObjLst);
    return arrFieldTab4RootFldObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FieldTab4RootFld_GetObjLstCache(
  strPrjId: string,
): Promise<Array<clsFieldTab4RootFldEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsFieldTab4RootFldWApi.FieldTab4RootFld_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsFieldTab4RootFldWApi.FieldTab4RootFld_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrFieldTab4RootFldObjLstCache;
  switch (clsFieldTab4RootFldEN.CacheModeId) {
    case '04': //sessionStorage
      arrFieldTab4RootFldObjLstCache = await FieldTab4RootFld_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrFieldTab4RootFldObjLstCache = await FieldTab4RootFld_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrFieldTab4RootFldObjLstCache = await FieldTab4RootFld_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrFieldTab4RootFldObjLstCache = await FieldTab4RootFld_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrFieldTab4RootFldObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function FieldTab4RootFld_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrFieldTab4RootFldObjLstCache;
  switch (clsFieldTab4RootFldEN.CacheModeId) {
    case '04': //sessionStorage
      arrFieldTab4RootFldObjLstCache = await FieldTab4RootFld_GetObjLstsessionStoragePureCache(
        strPrjId,
      );
      break;
    case '03': //localStorage
      arrFieldTab4RootFldObjLstCache = await FieldTab4RootFld_GetObjLstlocalStoragePureCache(
        strPrjId,
      );
      break;
    case '02': //ClientCache
      arrFieldTab4RootFldObjLstCache = null;
      break;
    default:
      arrFieldTab4RootFldObjLstCache = null;
      break;
  }
  return arrFieldTab4RootFldObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function FieldTab4RootFld_GetSubObjLstCache(
  objFieldTab4RootFldCond: clsFieldTab4RootFldEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrFieldTab4RootFldObjLstCache = await FieldTab4RootFld_GetObjLstCache(strPrjId);
  let arrFieldTab4RootFldSel = arrFieldTab4RootFldObjLstCache;
  if (
    objFieldTab4RootFldCond.sfFldComparisonOp == null ||
    objFieldTab4RootFldCond.sfFldComparisonOp == ''
  )
    return arrFieldTab4RootFldSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFieldTab4RootFldCond.sfFldComparisonOp,
  );
  //console.log("clsFieldTab4RootFldWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFieldTab4RootFldCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFieldTab4RootFldCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFieldTab4RootFldSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFieldTab4RootFldCond),
      fieldTab4RootFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFieldTab4RootFldEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function FieldTab4RootFld_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsFieldTab4RootFldEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

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
          fieldTab4RootFld_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldTab4RootFld_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrFieldTab4RootFldObjLstCache = await FieldTab4RootFld_GetObjLstCache(strPrjId);
    const arrFieldTab4RootFldSel = arrFieldTab4RootFldObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrFieldTab4RootFldSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsFieldTab4RootFldEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

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
          fieldTab4RootFld_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldTab4RootFld_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsFieldTab4RootFldEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

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
          fieldTab4RootFld_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldTab4RootFld_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsFieldTab4RootFldEN>();
  const arrFieldTab4RootFldObjLstCache = await FieldTab4RootFld_GetObjLstCache(strPrjId);
  if (arrFieldTab4RootFldObjLstCache.length == 0) return arrFieldTab4RootFldObjLstCache;
  let arrFieldTab4RootFldSel = arrFieldTab4RootFldObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objFieldTab4RootFldCond = new clsFieldTab4RootFldEN();
  ObjectAssign(objFieldTab4RootFldCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsFieldTab4RootFldWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFieldTab4RootFldCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFieldTab4RootFldSel.length == 0) return arrFieldTab4RootFldSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.sort(
        FieldTab4RootFld_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.sort(objPagerPara.sortFun);
    }
    arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.slice(intStart, intEnd);
    return arrFieldTab4RootFldSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      fieldTab4RootFld_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsFieldTab4RootFldEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function FieldTab4RootFld_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsFieldTab4RootFldEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsFieldTab4RootFldEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

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
          fieldTab4RootFld_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = FieldTab4RootFld_GetObjLstByJSONObjLst(returnObjLst);
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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export async function FieldTab4RootFld_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngmId);

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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_DelFieldTab4RootFldsAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelFieldTab4RootFldsAsync';
  const strAction = 'DelFieldTab4RootFlds';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_DelFieldTab4RootFldsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelFieldTab4RootFldsByCondAsync';
  const strAction = 'DelFieldTab4RootFldsByCond';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
 * @param objFieldTab4RootFldEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function FieldTab4RootFld_AddNewRecordAsync(
  objFieldTab4RootFldEN: clsFieldTab4RootFldEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objFieldTab4RootFldEN);
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTab4RootFldEN, config);
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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objFieldTab4RootFldEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function FieldTab4RootFld_AddNewRecordWithReturnKeyAsync(
  objFieldTab4RootFldEN: clsFieldTab4RootFldEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTab4RootFldEN, config);
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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
 * @param objFieldTab4RootFldEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function FieldTab4RootFld_UpdateRecordAsync(
  objFieldTab4RootFldEN: clsFieldTab4RootFldEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objFieldTab4RootFldEN.sfUpdFldSetStr === undefined ||
    objFieldTab4RootFldEN.sfUpdFldSetStr === null ||
    objFieldTab4RootFldEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFieldTab4RootFldEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTab4RootFldEN, config);
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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
 * @param objFieldTab4RootFldEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function FieldTab4RootFld_UpdateWithConditionAsync(
  objFieldTab4RootFldEN: clsFieldTab4RootFldEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objFieldTab4RootFldEN.sfUpdFldSetStr === undefined ||
    objFieldTab4RootFldEN.sfUpdFldSetStr === null ||
    objFieldTab4RootFldEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objFieldTab4RootFldEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);
  objFieldTab4RootFldEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objFieldTab4RootFldEN, config);
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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_IsExistRecordCache(
  objFieldTab4RootFldCond: clsFieldTab4RootFldEN,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrFieldTab4RootFldObjLstCache = await FieldTab4RootFld_GetObjLstCache(strPrjId);
  if (arrFieldTab4RootFldObjLstCache == null) return false;
  let arrFieldTab4RootFldSel = arrFieldTab4RootFldObjLstCache;
  if (
    objFieldTab4RootFldCond.sfFldComparisonOp == null ||
    objFieldTab4RootFldCond.sfFldComparisonOp == ''
  )
    return arrFieldTab4RootFldSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFieldTab4RootFldCond.sfFldComparisonOp,
  );
  //console.log("clsFieldTab4RootFldWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFieldTab4RootFldCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFieldTab4RootFldCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrFieldTab4RootFldSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objFieldTab4RootFldCond),
      fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_IsExistCache(lngmId: number, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrFieldTab4RootFldObjLstCache = await FieldTab4RootFld_GetObjLstCache(strPrjId);
  if (arrFieldTab4RootFldObjLstCache == null) return false;
  try {
    const arrFieldTab4RootFldSel = arrFieldTab4RootFldObjLstCache.filter((x) => x.mId == lngmId);
    if (arrFieldTab4RootFldSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
 * @param objFieldTab4RootFldCond:条件对象
 * @returns 对象列表记录数
 */
export async function FieldTab4RootFld_GetRecCountByCondCache(
  objFieldTab4RootFldCond: clsFieldTab4RootFldEN,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrFieldTab4RootFldObjLstCache = await FieldTab4RootFld_GetObjLstCache(strPrjId);
  if (arrFieldTab4RootFldObjLstCache == null) return 0;
  let arrFieldTab4RootFldSel = arrFieldTab4RootFldObjLstCache;
  if (
    objFieldTab4RootFldCond.sfFldComparisonOp == null ||
    objFieldTab4RootFldCond.sfFldComparisonOp == ''
  )
    return arrFieldTab4RootFldSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objFieldTab4RootFldCond.sfFldComparisonOp,
  );
  //console.log("clsFieldTab4RootFldWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objFieldTab4RootFldCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objFieldTab4RootFldCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrFieldTab4RootFldSel = arrFieldTab4RootFldSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrFieldTab4RootFldSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objFieldTab4RootFldCond),
      fieldTab4RootFld_ConstructorName,
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
export async function FieldTab4RootFld_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(fieldTab4RootFld_Controller, strAction);

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
        fieldTab4RootFld_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        fieldTab4RootFld_ConstructorName,
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
export function FieldTab4RootFld_GetWebApiUrl(strController: string, strAction: string): string {
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
export function FieldTab4RootFld_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsFieldTab4RootFldWApi.clsFieldTab4RootFldWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsFieldTab4RootFldWApi.clsFieldTab4RootFldWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsFieldTab4RootFldEN._CurrTabName, strPrjId);
  switch (clsFieldTab4RootFldEN.CacheModeId) {
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
export function FieldTab4RootFld_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsFieldTab4RootFldWApi.FieldTab4RootFld_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsFieldTab4RootFldWApi.FieldTab4RootFld_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsFieldTab4RootFldEN._CurrTabName, strPrjId);
    switch (clsFieldTab4RootFldEN.CacheModeId) {
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
export function FieldTab4RootFld_CheckPropertyNew(pobjFieldTab4RootFldEN: clsFieldTab4RootFldEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.tabId) === true ||
    pobjFieldTab4RootFldEN.tabId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[表ID]不能为空(In 工程字段4RootFld)!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.fldId) === true ||
    pobjFieldTab4RootFldEN.fldId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[字段Id]不能为空(In 工程字段4RootFld)!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjFieldTab4RootFldEN.isPrimaryKey ||
    (pobjFieldTab4RootFldEN.isPrimaryKey != null &&
      pobjFieldTab4RootFldEN.isPrimaryKey.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否主键]不能为空(In 工程字段4RootFld)!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.prjId) === true ||
    pobjFieldTab4RootFldEN.prjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In 工程字段4RootFld)!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.tabId) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.tabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.tabId)(clsFieldTab4RootFldBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.fldId) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.fldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.fldId)(clsFieldTab4RootFldBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.root4TabId) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.root4TabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主根表Id(root4TabId)]的长度不能超过8(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.root4TabId)(clsFieldTab4RootFldBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.rootFldId) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.rootFldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[根字段Id(rootFldId)]的长度不能超过8(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.rootFldId)(clsFieldTab4RootFldBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.rootTabId) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.rootTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[根表Id(rootTabId)]的长度不能超过8(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.rootTabId)(clsFieldTab4RootFldBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.prjId) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.prjId)(clsFieldTab4RootFldBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.updUser) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.updUser)(clsFieldTab4RootFldBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.updDate) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.updDate)(clsFieldTab4RootFldBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.memo) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.memo)(clsFieldTab4RootFldBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFieldTab4RootFldEN.mId &&
    undefined !== pobjFieldTab4RootFldEN.mId &&
    tzDataType.isNumber(pobjFieldTab4RootFldEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjFieldTab4RootFldEN.mId)], 非法,应该为数值型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.tabId) == false &&
    undefined !== pobjFieldTab4RootFldEN.tabId &&
    tzDataType.isString(pobjFieldTab4RootFldEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[表ID(tabId)]的值:[$(pobjFieldTab4RootFldEN.tabId)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.fldId) == false &&
    undefined !== pobjFieldTab4RootFldEN.fldId &&
    tzDataType.isString(pobjFieldTab4RootFldEN.fldId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字段Id(fldId)]的值:[$(pobjFieldTab4RootFldEN.fldId)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjFieldTab4RootFldEN.isPrimaryKey &&
    undefined !== pobjFieldTab4RootFldEN.isPrimaryKey &&
    tzDataType.isBoolean(pobjFieldTab4RootFldEN.isPrimaryKey) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否主键(isPrimaryKey)]的值:[$(pobjFieldTab4RootFldEN.isPrimaryKey)], 非法,应该为布尔型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjFieldTab4RootFldEN.isRootFld &&
    undefined !== pobjFieldTab4RootFldEN.isRootFld &&
    tzDataType.isBoolean(pobjFieldTab4RootFldEN.isRootFld) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否根字段(isRootFld)]的值:[$(pobjFieldTab4RootFldEN.isRootFld)], 非法,应该为布尔型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.root4TabId) == false &&
    undefined !== pobjFieldTab4RootFldEN.root4TabId &&
    tzDataType.isString(pobjFieldTab4RootFldEN.root4TabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主根表Id(root4TabId)]的值:[$(pobjFieldTab4RootFldEN.root4TabId)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.rootFldId) == false &&
    undefined !== pobjFieldTab4RootFldEN.rootFldId &&
    tzDataType.isString(pobjFieldTab4RootFldEN.rootFldId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[根字段Id(rootFldId)]的值:[$(pobjFieldTab4RootFldEN.rootFldId)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.rootTabId) == false &&
    undefined !== pobjFieldTab4RootFldEN.rootTabId &&
    tzDataType.isString(pobjFieldTab4RootFldEN.rootTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[根表Id(rootTabId)]的值:[$(pobjFieldTab4RootFldEN.rootTabId)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.prjId) == false &&
    undefined !== pobjFieldTab4RootFldEN.prjId &&
    tzDataType.isString(pobjFieldTab4RootFldEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjFieldTab4RootFldEN.prjId)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.updUser) == false &&
    undefined !== pobjFieldTab4RootFldEN.updUser &&
    tzDataType.isString(pobjFieldTab4RootFldEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjFieldTab4RootFldEN.updUser)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.updDate) == false &&
    undefined !== pobjFieldTab4RootFldEN.updDate &&
    tzDataType.isString(pobjFieldTab4RootFldEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjFieldTab4RootFldEN.updDate)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.memo) == false &&
    undefined !== pobjFieldTab4RootFldEN.memo &&
    tzDataType.isString(pobjFieldTab4RootFldEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjFieldTab4RootFldEN.memo)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function FieldTab4RootFld_CheckProperty4Update(
  pobjFieldTab4RootFldEN: clsFieldTab4RootFldEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.tabId) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.tabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.tabId)(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.fldId) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.fldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.fldId)(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.root4TabId) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.root4TabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主根表Id(root4TabId)]的长度不能超过8(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.root4TabId)(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.rootFldId) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.rootFldId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[根字段Id(rootFldId)]的长度不能超过8(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.rootFldId)(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.rootTabId) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.rootTabId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[根表Id(rootTabId)]的长度不能超过8(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.rootTabId)(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.prjId) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.prjId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.prjId)(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.updUser) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.updUser)(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.updDate) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.updDate)(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.memo) == false &&
    GetStrLen(pobjFieldTab4RootFldEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 工程字段4RootFld(FieldTab4RootFld))!值:$(pobjFieldTab4RootFldEN.memo)(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjFieldTab4RootFldEN.mId &&
    undefined !== pobjFieldTab4RootFldEN.mId &&
    tzDataType.isNumber(pobjFieldTab4RootFldEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjFieldTab4RootFldEN.mId)], 非法,应该为数值型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.tabId) == false &&
    undefined !== pobjFieldTab4RootFldEN.tabId &&
    tzDataType.isString(pobjFieldTab4RootFldEN.tabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[表ID(tabId)]的值:[$(pobjFieldTab4RootFldEN.tabId)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.fldId) == false &&
    undefined !== pobjFieldTab4RootFldEN.fldId &&
    tzDataType.isString(pobjFieldTab4RootFldEN.fldId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字段Id(fldId)]的值:[$(pobjFieldTab4RootFldEN.fldId)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjFieldTab4RootFldEN.isPrimaryKey &&
    undefined !== pobjFieldTab4RootFldEN.isPrimaryKey &&
    tzDataType.isBoolean(pobjFieldTab4RootFldEN.isPrimaryKey) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否主键(isPrimaryKey)]的值:[$(pobjFieldTab4RootFldEN.isPrimaryKey)], 非法,应该为布尔型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjFieldTab4RootFldEN.isRootFld &&
    undefined !== pobjFieldTab4RootFldEN.isRootFld &&
    tzDataType.isBoolean(pobjFieldTab4RootFldEN.isRootFld) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否根字段(isRootFld)]的值:[$(pobjFieldTab4RootFldEN.isRootFld)], 非法,应该为布尔型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.root4TabId) == false &&
    undefined !== pobjFieldTab4RootFldEN.root4TabId &&
    tzDataType.isString(pobjFieldTab4RootFldEN.root4TabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主根表Id(root4TabId)]的值:[$(pobjFieldTab4RootFldEN.root4TabId)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.rootFldId) == false &&
    undefined !== pobjFieldTab4RootFldEN.rootFldId &&
    tzDataType.isString(pobjFieldTab4RootFldEN.rootFldId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[根字段Id(rootFldId)]的值:[$(pobjFieldTab4RootFldEN.rootFldId)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.rootTabId) == false &&
    undefined !== pobjFieldTab4RootFldEN.rootTabId &&
    tzDataType.isString(pobjFieldTab4RootFldEN.rootTabId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[根表Id(rootTabId)]的值:[$(pobjFieldTab4RootFldEN.rootTabId)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.prjId) == false &&
    undefined !== pobjFieldTab4RootFldEN.prjId &&
    tzDataType.isString(pobjFieldTab4RootFldEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjFieldTab4RootFldEN.prjId)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.updUser) == false &&
    undefined !== pobjFieldTab4RootFldEN.updUser &&
    tzDataType.isString(pobjFieldTab4RootFldEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjFieldTab4RootFldEN.updUser)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.updDate) == false &&
    undefined !== pobjFieldTab4RootFldEN.updDate &&
    tzDataType.isString(pobjFieldTab4RootFldEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjFieldTab4RootFldEN.updDate)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjFieldTab4RootFldEN.memo) == false &&
    undefined !== pobjFieldTab4RootFldEN.memo &&
    tzDataType.isString(pobjFieldTab4RootFldEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjFieldTab4RootFldEN.memo)], 非法,应该为字符型(In 工程字段4RootFld(FieldTab4RootFld))!(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjFieldTab4RootFldEN.mId ||
    (pobjFieldTab4RootFldEN.mId != null && pobjFieldTab4RootFldEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 工程字段4RootFld)!(clsFieldTab4RootFldBL:CheckProperty4Update)',
    );
  }
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
export function FieldTab4RootFld_GetJSONStrByObj(
  pobjFieldTab4RootFldEN: clsFieldTab4RootFldEN,
): string {
  pobjFieldTab4RootFldEN.sfUpdFldSetStr = pobjFieldTab4RootFldEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjFieldTab4RootFldEN);
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
export function FieldTab4RootFld_GetObjLstByJSONStr(strJSON: string): Array<clsFieldTab4RootFldEN> {
  let arrFieldTab4RootFldObjLst = new Array<clsFieldTab4RootFldEN>();
  if (strJSON === '') {
    return arrFieldTab4RootFldObjLst;
  }
  try {
    arrFieldTab4RootFldObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrFieldTab4RootFldObjLst;
  }
  return arrFieldTab4RootFldObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrFieldTab4RootFldObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function FieldTab4RootFld_GetObjLstByJSONObjLst(
  arrFieldTab4RootFldObjLstS: Array<clsFieldTab4RootFldEN>,
): Array<clsFieldTab4RootFldEN> {
  const arrFieldTab4RootFldObjLst = new Array<clsFieldTab4RootFldEN>();
  for (const objInFor of arrFieldTab4RootFldObjLstS) {
    const obj1 = FieldTab4RootFld_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrFieldTab4RootFldObjLst.push(obj1);
  }
  return arrFieldTab4RootFldObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function FieldTab4RootFld_GetObjByJSONStr(strJSON: string): clsFieldTab4RootFldEN {
  let pobjFieldTab4RootFldEN = new clsFieldTab4RootFldEN();
  if (strJSON === '') {
    return pobjFieldTab4RootFldEN;
  }
  try {
    pobjFieldTab4RootFldEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjFieldTab4RootFldEN;
  }
  return pobjFieldTab4RootFldEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function FieldTab4RootFld_GetCombineCondition(
  objFieldTab4RootFldCond: clsFieldTab4RootFldEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4RootFldCond.dicFldComparisonOp,
      clsFieldTab4RootFldEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objFieldTab4RootFldCond.dicFldComparisonOp[clsFieldTab4RootFldEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsFieldTab4RootFldEN.con_mId,
      objFieldTab4RootFldCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4RootFldCond.dicFldComparisonOp,
      clsFieldTab4RootFldEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objFieldTab4RootFldCond.dicFldComparisonOp[clsFieldTab4RootFldEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4RootFldEN.con_TabId,
      objFieldTab4RootFldCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4RootFldCond.dicFldComparisonOp,
      clsFieldTab4RootFldEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objFieldTab4RootFldCond.dicFldComparisonOp[clsFieldTab4RootFldEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4RootFldEN.con_FldId,
      objFieldTab4RootFldCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4RootFldCond.dicFldComparisonOp,
      clsFieldTab4RootFldEN.con_IsPrimaryKey,
    ) == true
  ) {
    if (objFieldTab4RootFldCond.isPrimaryKey == true) {
      strWhereCond += Format(" And {0} = '1'", clsFieldTab4RootFldEN.con_IsPrimaryKey);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFieldTab4RootFldEN.con_IsPrimaryKey);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4RootFldCond.dicFldComparisonOp,
      clsFieldTab4RootFldEN.con_IsRootFld,
    ) == true
  ) {
    if (objFieldTab4RootFldCond.isRootFld == true) {
      strWhereCond += Format(" And {0} = '1'", clsFieldTab4RootFldEN.con_IsRootFld);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsFieldTab4RootFldEN.con_IsRootFld);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4RootFldCond.dicFldComparisonOp,
      clsFieldTab4RootFldEN.con_Root4TabId,
    ) == true
  ) {
    const strComparisonOpRoot4TabId: string =
      objFieldTab4RootFldCond.dicFldComparisonOp[clsFieldTab4RootFldEN.con_Root4TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4RootFldEN.con_Root4TabId,
      objFieldTab4RootFldCond.root4TabId,
      strComparisonOpRoot4TabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4RootFldCond.dicFldComparisonOp,
      clsFieldTab4RootFldEN.con_RootFldId,
    ) == true
  ) {
    const strComparisonOpRootFldId: string =
      objFieldTab4RootFldCond.dicFldComparisonOp[clsFieldTab4RootFldEN.con_RootFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4RootFldEN.con_RootFldId,
      objFieldTab4RootFldCond.rootFldId,
      strComparisonOpRootFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4RootFldCond.dicFldComparisonOp,
      clsFieldTab4RootFldEN.con_RootTabId,
    ) == true
  ) {
    const strComparisonOpRootTabId: string =
      objFieldTab4RootFldCond.dicFldComparisonOp[clsFieldTab4RootFldEN.con_RootTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4RootFldEN.con_RootTabId,
      objFieldTab4RootFldCond.rootTabId,
      strComparisonOpRootTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4RootFldCond.dicFldComparisonOp,
      clsFieldTab4RootFldEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objFieldTab4RootFldCond.dicFldComparisonOp[clsFieldTab4RootFldEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4RootFldEN.con_PrjId,
      objFieldTab4RootFldCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4RootFldCond.dicFldComparisonOp,
      clsFieldTab4RootFldEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objFieldTab4RootFldCond.dicFldComparisonOp[clsFieldTab4RootFldEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4RootFldEN.con_UpdUser,
      objFieldTab4RootFldCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4RootFldCond.dicFldComparisonOp,
      clsFieldTab4RootFldEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objFieldTab4RootFldCond.dicFldComparisonOp[clsFieldTab4RootFldEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4RootFldEN.con_UpdDate,
      objFieldTab4RootFldCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objFieldTab4RootFldCond.dicFldComparisonOp,
      clsFieldTab4RootFldEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objFieldTab4RootFldCond.dicFldComparisonOp[clsFieldTab4RootFldEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsFieldTab4RootFldEN.con_Memo,
      objFieldTab4RootFldCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FieldTab4RootFld(工程字段4RootFld),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FieldTab4RootFld_GetUniCondStr(
  objFieldTab4RootFldEN: clsFieldTab4RootFldEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TabId = '{0}'", objFieldTab4RootFldEN.tabId);
  strWhereCond += Format(" and FldId = '{0}'", objFieldTab4RootFldEN.fldId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--FieldTab4RootFld(工程字段4RootFld),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTabId: 表ID(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function FieldTab4RootFld_GetUniCondStr4Update(
  objFieldTab4RootFldEN: clsFieldTab4RootFldEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objFieldTab4RootFldEN.mId);
  strWhereCond += Format(" and TabId = '{0}'", objFieldTab4RootFldEN.tabId);
  strWhereCond += Format(" and FldId = '{0}'", objFieldTab4RootFldEN.fldId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objFieldTab4RootFldENS:源对象
 * @param objFieldTab4RootFldENT:目标对象
 */
export function FieldTab4RootFld_GetObjFromJsonObj(
  objFieldTab4RootFldENS: clsFieldTab4RootFldEN,
): clsFieldTab4RootFldEN {
  const objFieldTab4RootFldENT: clsFieldTab4RootFldEN = new clsFieldTab4RootFldEN();
  ObjectAssign(objFieldTab4RootFldENT, objFieldTab4RootFldENS);
  return objFieldTab4RootFldENT;
}
