/**
 * 类名:clsViewTypeCodeTabWApi
 * 表名:ViewTypeCodeTab(00050104)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/01 15:53:35
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 界面类型码(ViewTypeCodeTab)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月01日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsViewTypeCodeTabEN } from '@/ts/L0Entity/PrjInterface/clsViewTypeCodeTabEN';
import { GetStrLen, tzDataType, Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const viewTypeCodeTab_Controller = 'ViewTypeCodeTabApi';
export const viewTypeCodeTab_ConstructorName = 'viewTypeCodeTab';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param intViewTypeCode:关键字
 * @returns 对象
 **/
export async function ViewTypeCodeTab_GetObjByViewTypeCodeAsync(
  intViewTypeCode: number,
): Promise<clsViewTypeCodeTabEN | null> {
  const strThisFuncName = 'GetObjByViewTypeCodeAsync';

  if (intViewTypeCode == 0) {
    const strMsg = Format(
      '参数:[intViewTypeCode]不能为空!(In clsViewTypeCodeTabWApi.GetObjByViewTypeCodeAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByViewTypeCode';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      intViewTypeCode,
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
      const objViewTypeCodeTab = ViewTypeCodeTab_GetObjFromJsonObj(returnObj);
      return objViewTypeCodeTab;
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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
 * @param intViewTypeCode:所给的关键字
 * @returns 对象
 */
export async function ViewTypeCodeTab_GetObjByViewTypeCodeCache(
  intViewTypeCode: number,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByViewTypeCodeCache';

  if (intViewTypeCode == 0) {
    const strMsg = Format(
      '参数:[intViewTypeCode]不能为空!(In clsViewTypeCodeTabWApi.GetObjByViewTypeCodeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewTypeCodeTabObjLstCache = await ViewTypeCodeTab_GetObjLstCache();
  try {
    const arrViewTypeCodeTabSel = arrViewTypeCodeTabObjLstCache.filter(
      (x) => x.viewTypeCode == intViewTypeCode,
    );
    let objViewTypeCodeTab: clsViewTypeCodeTabEN;
    if (arrViewTypeCodeTabSel.length > 0) {
      objViewTypeCodeTab = arrViewTypeCodeTabSel[0];
      return objViewTypeCodeTab;
    } else {
      if (bolTryAsyncOnce == true) {
        const objViewTypeCodeTabConst = await ViewTypeCodeTab_GetObjByViewTypeCodeAsync(
          intViewTypeCode,
        );
        if (objViewTypeCodeTabConst != null) {
          ViewTypeCodeTab_ReFreshThisCache();
          return objViewTypeCodeTabConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      intViewTypeCode,
      viewTypeCodeTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param intViewTypeCode:所给的关键字
 * @returns 对象
 */
export async function ViewTypeCodeTab_GetObjByViewTypeCodelocalStorage(intViewTypeCode: number) {
  const strThisFuncName = 'GetObjByViewTypeCodelocalStorage';

  if (intViewTypeCode == 0) {
    const strMsg = Format(
      '参数:[intViewTypeCode]不能为空!(In clsViewTypeCodeTabWApi.GetObjByViewTypeCodelocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsViewTypeCodeTabEN._CurrTabName, intViewTypeCode);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objViewTypeCodeTabCache: clsViewTypeCodeTabEN = JSON.parse(strTempObj);
    return objViewTypeCodeTabCache;
  }
  try {
    const objViewTypeCodeTab = await ViewTypeCodeTab_GetObjByViewTypeCodeAsync(intViewTypeCode);
    if (objViewTypeCodeTab != null) {
      localStorage.setItem(strKey, JSON.stringify(objViewTypeCodeTab));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objViewTypeCodeTab;
    }
    return objViewTypeCodeTab;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      intViewTypeCode,
      viewTypeCodeTab_ConstructorName,
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
 * @param objViewTypeCodeTab:所给的对象
 * @returns 对象
 */
export async function ViewTypeCodeTab_UpdateObjInLstCache(
  objViewTypeCodeTab: clsViewTypeCodeTabEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrViewTypeCodeTabObjLstCache = await ViewTypeCodeTab_GetObjLstCache();
    const obj = arrViewTypeCodeTabObjLstCache.find(
      (x) =>
        x.viewTypeName == objViewTypeCodeTab.viewTypeName &&
        x.applicationTypeId == objViewTypeCodeTab.applicationTypeId,
    );
    if (obj != null) {
      objViewTypeCodeTab.viewTypeCode = obj.viewTypeCode;
      ObjectAssign(obj, objViewTypeCodeTab);
    } else {
      arrViewTypeCodeTabObjLstCache.push(objViewTypeCodeTab);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      viewTypeCodeTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param intViewTypeCode:所给的关键字
 * @returns 对象
 */
export async function ViewTypeCodeTab_GetNameByViewTypeCodeCache(intViewTypeCode: number) {
  if (intViewTypeCode == 0) {
    const strMsg = Format(
      '参数:[intViewTypeCode]不能为空!(In clsViewTypeCodeTabWApi.GetNameByViewTypeCodeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewTypeCodeTabObjLstCache = await ViewTypeCodeTab_GetObjLstCache();
  if (arrViewTypeCodeTabObjLstCache == null) return '';
  try {
    const arrViewTypeCodeTabSel = arrViewTypeCodeTabObjLstCache.filter(
      (x) => x.viewTypeCode == intViewTypeCode,
    );
    let objViewTypeCodeTab: clsViewTypeCodeTabEN;
    if (arrViewTypeCodeTabSel.length > 0) {
      objViewTypeCodeTab = arrViewTypeCodeTabSel[0];
      return objViewTypeCodeTab.viewTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      intViewTypeCode,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function ViewTypeCodeTab_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsViewTypeCodeTabEN.con_ViewTypeCode) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsViewTypeCodeTabEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsViewTypeCodeTabEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const intViewTypeCode = Number(strInValue);
  if (intViewTypeCode == 0) {
    return '';
  }
  const objViewTypeCodeTab = await ViewTypeCodeTab_GetObjByViewTypeCodeCache(intViewTypeCode);
  if (objViewTypeCodeTab == null) return '';
  if (objViewTypeCodeTab.GetFldValue(strOutFldName) == null) return '';
  return objViewTypeCodeTab.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewTypeCodeTab_SortFunDefa(
  a: clsViewTypeCodeTabEN,
  b: clsViewTypeCodeTabEN,
): number {
  return a.viewTypeCode - b.viewTypeCode;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewTypeCodeTab_SortFunDefa2Fld(
  a: clsViewTypeCodeTabEN,
  b: clsViewTypeCodeTabEN,
): number {
  if (a.viewTypeName == b.viewTypeName) return a.viewTypeENName.localeCompare(b.viewTypeENName);
  else return a.viewTypeName.localeCompare(b.viewTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewTypeCodeTab_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewTypeCodeTabEN.con_ViewTypeCode:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          return a.viewTypeCode - b.viewTypeCode;
        };
      case clsViewTypeCodeTabEN.con_ViewTypeName:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          return a.viewTypeName.localeCompare(b.viewTypeName);
        };
      case clsViewTypeCodeTabEN.con_ViewTypeENName:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          if (a.viewTypeENName == null) return -1;
          if (b.viewTypeENName == null) return 1;
          return a.viewTypeENName.localeCompare(b.viewTypeENName);
        };
      case clsViewTypeCodeTabEN.con_IsWinApp:
        return (a: clsViewTypeCodeTabEN) => {
          if (a.isWinApp == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsMobileApp:
        return (a: clsViewTypeCodeTabEN) => {
          if (a.isMobileApp == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsWebApp:
        return (a: clsViewTypeCodeTabEN) => {
          if (a.isWebApp == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_ViewFunction:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          if (a.viewFunction == null) return -1;
          if (b.viewFunction == null) return 1;
          return a.viewFunction.localeCompare(b.viewFunction);
        };
      case clsViewTypeCodeTabEN.con_OptProcess:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          if (a.optProcess == null) return -1;
          if (b.optProcess == null) return 1;
          return a.optProcess.localeCompare(b.optProcess);
        };
      case clsViewTypeCodeTabEN.con_ViewDetail:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          if (a.viewDetail == null) return -1;
          if (b.viewDetail == null) return 1;
          return a.viewDetail.localeCompare(b.viewDetail);
        };
      case clsViewTypeCodeTabEN.con_ApplicationTypeId:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsViewTypeCodeTabEN.con_IsHaveAdd:
        return (a: clsViewTypeCodeTabEN) => {
          if (a.isHaveAdd == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveUpdate:
        return (a: clsViewTypeCodeTabEN) => {
          if (a.isHaveUpdate == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveDel:
        return (a: clsViewTypeCodeTabEN) => {
          if (a.isHaveDel == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveQuery:
        return (a: clsViewTypeCodeTabEN) => {
          if (a.isHaveQuery == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveExcelExport:
        return (a: clsViewTypeCodeTabEN) => {
          if (a.isHaveExcelExport == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveSetExportExcel:
        return (a: clsViewTypeCodeTabEN) => {
          if (a.isHaveSetExportExcel == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveDetail:
        return (a: clsViewTypeCodeTabEN) => {
          if (a.isHaveDetail == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveExeAdd:
        return (a: clsViewTypeCodeTabEN) => {
          if (a.isHaveExeAdd == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveExeUpdate:
        return (a: clsViewTypeCodeTabEN) => {
          if (a.isHaveExeUpdate == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveMainView:
        return (a: clsViewTypeCodeTabEN) => {
          if (a.isHaveMainView == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveSubView:
        return (a: clsViewTypeCodeTabEN) => {
          if (a.isHaveSubView == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_OrderNum:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsViewTypeCodeTabEN.con_IsUsed:
        return (a: clsViewTypeCodeTabEN) => {
          if (a.isUsed == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewTypeCodeTab]中不存在!(in ${viewTypeCodeTab_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewTypeCodeTabEN.con_ViewTypeCode:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          return b.viewTypeCode - a.viewTypeCode;
        };
      case clsViewTypeCodeTabEN.con_ViewTypeName:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          return b.viewTypeName.localeCompare(a.viewTypeName);
        };
      case clsViewTypeCodeTabEN.con_ViewTypeENName:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          if (b.viewTypeENName == null) return -1;
          if (a.viewTypeENName == null) return 1;
          return b.viewTypeENName.localeCompare(a.viewTypeENName);
        };
      case clsViewTypeCodeTabEN.con_IsWinApp:
        return (b: clsViewTypeCodeTabEN) => {
          if (b.isWinApp == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsMobileApp:
        return (b: clsViewTypeCodeTabEN) => {
          if (b.isMobileApp == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsWebApp:
        return (b: clsViewTypeCodeTabEN) => {
          if (b.isWebApp == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_ViewFunction:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          if (b.viewFunction == null) return -1;
          if (a.viewFunction == null) return 1;
          return b.viewFunction.localeCompare(a.viewFunction);
        };
      case clsViewTypeCodeTabEN.con_OptProcess:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          if (b.optProcess == null) return -1;
          if (a.optProcess == null) return 1;
          return b.optProcess.localeCompare(a.optProcess);
        };
      case clsViewTypeCodeTabEN.con_ViewDetail:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          if (b.viewDetail == null) return -1;
          if (a.viewDetail == null) return 1;
          return b.viewDetail.localeCompare(a.viewDetail);
        };
      case clsViewTypeCodeTabEN.con_ApplicationTypeId:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsViewTypeCodeTabEN.con_IsHaveAdd:
        return (b: clsViewTypeCodeTabEN) => {
          if (b.isHaveAdd == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveUpdate:
        return (b: clsViewTypeCodeTabEN) => {
          if (b.isHaveUpdate == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveDel:
        return (b: clsViewTypeCodeTabEN) => {
          if (b.isHaveDel == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveQuery:
        return (b: clsViewTypeCodeTabEN) => {
          if (b.isHaveQuery == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveExcelExport:
        return (b: clsViewTypeCodeTabEN) => {
          if (b.isHaveExcelExport == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveSetExportExcel:
        return (b: clsViewTypeCodeTabEN) => {
          if (b.isHaveSetExportExcel == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveDetail:
        return (b: clsViewTypeCodeTabEN) => {
          if (b.isHaveDetail == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveExeAdd:
        return (b: clsViewTypeCodeTabEN) => {
          if (b.isHaveExeAdd == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveExeUpdate:
        return (b: clsViewTypeCodeTabEN) => {
          if (b.isHaveExeUpdate == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveMainView:
        return (b: clsViewTypeCodeTabEN) => {
          if (b.isHaveMainView == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_IsHaveSubView:
        return (b: clsViewTypeCodeTabEN) => {
          if (b.isHaveSubView == true) return 1;
          else return -1;
        };
      case clsViewTypeCodeTabEN.con_OrderNum:
        return (a: clsViewTypeCodeTabEN, b: clsViewTypeCodeTabEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsViewTypeCodeTabEN.con_IsUsed:
        return (b: clsViewTypeCodeTabEN) => {
          if (b.isUsed == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewTypeCodeTab]中不存在!(in ${viewTypeCodeTab_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ViewTypeCodeTab_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewTypeCodeTabEN.con_ViewTypeCode:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.viewTypeCode === value;
      };
    case clsViewTypeCodeTabEN.con_ViewTypeName:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.viewTypeName === value;
      };
    case clsViewTypeCodeTabEN.con_ViewTypeENName:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.viewTypeENName === value;
      };
    case clsViewTypeCodeTabEN.con_IsWinApp:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.isWinApp === value;
      };
    case clsViewTypeCodeTabEN.con_IsMobileApp:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.isMobileApp === value;
      };
    case clsViewTypeCodeTabEN.con_IsWebApp:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.isWebApp === value;
      };
    case clsViewTypeCodeTabEN.con_ViewFunction:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.viewFunction === value;
      };
    case clsViewTypeCodeTabEN.con_OptProcess:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.optProcess === value;
      };
    case clsViewTypeCodeTabEN.con_ViewDetail:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.viewDetail === value;
      };
    case clsViewTypeCodeTabEN.con_ApplicationTypeId:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.applicationTypeId === value;
      };
    case clsViewTypeCodeTabEN.con_IsHaveAdd:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.isHaveAdd === value;
      };
    case clsViewTypeCodeTabEN.con_IsHaveUpdate:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.isHaveUpdate === value;
      };
    case clsViewTypeCodeTabEN.con_IsHaveDel:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.isHaveDel === value;
      };
    case clsViewTypeCodeTabEN.con_IsHaveQuery:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.isHaveQuery === value;
      };
    case clsViewTypeCodeTabEN.con_IsHaveExcelExport:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.isHaveExcelExport === value;
      };
    case clsViewTypeCodeTabEN.con_IsHaveSetExportExcel:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.isHaveSetExportExcel === value;
      };
    case clsViewTypeCodeTabEN.con_IsHaveDetail:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.isHaveDetail === value;
      };
    case clsViewTypeCodeTabEN.con_IsHaveExeAdd:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.isHaveExeAdd === value;
      };
    case clsViewTypeCodeTabEN.con_IsHaveExeUpdate:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.isHaveExeUpdate === value;
      };
    case clsViewTypeCodeTabEN.con_IsHaveMainView:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.isHaveMainView === value;
      };
    case clsViewTypeCodeTabEN.con_IsHaveSubView:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.isHaveSubView === value;
      };
    case clsViewTypeCodeTabEN.con_OrderNum:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.orderNum === value;
      };
    case clsViewTypeCodeTabEN.con_IsUsed:
      return (obj: clsViewTypeCodeTabEN) => {
        return obj.isUsed === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewTypeCodeTab]中不存在!(in ${viewTypeCodeTab_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function ViewTypeCodeTab_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsViewTypeCodeTabEN.con_ViewTypeCode) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrViewTypeCodeTab = await ViewTypeCodeTab_GetObjLstCache();
  if (arrViewTypeCodeTab == null) return [];
  let arrViewTypeCodeTabSel = arrViewTypeCodeTab;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrViewTypeCodeTabSel.length == 0) return [];
  return arrViewTypeCodeTabSel.map((x) => x.viewTypeCode);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewTypeCodeTab_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
export async function ViewTypeCodeTab_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
export async function ViewTypeCodeTab_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewTypeCodeTabEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

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
      const objViewTypeCodeTab = ViewTypeCodeTab_GetObjFromJsonObj(returnObj);
      return objViewTypeCodeTab;
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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
export async function ViewTypeCodeTab_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewTypeCodeTabEN._CurrTabName;
  if (IsNullOrEmpty(clsViewTypeCodeTabEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewTypeCodeTabEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrViewTypeCodeTabExObjLstCache: Array<clsViewTypeCodeTabEN> = CacheHelper.Get(strKey);
    const arrViewTypeCodeTabObjLstT = ViewTypeCodeTab_GetObjLstByJSONObjLst(
      arrViewTypeCodeTabExObjLstCache,
    );
    return arrViewTypeCodeTabObjLstT;
  }
  try {
    const arrViewTypeCodeTabExObjLst = await ViewTypeCodeTab_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrViewTypeCodeTabExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewTypeCodeTabExObjLst.length,
    );
    console.log(strInfo);
    return arrViewTypeCodeTabExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewTypeCodeTab_ConstructorName,
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
export async function ViewTypeCodeTab_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewTypeCodeTabEN._CurrTabName;
  if (IsNullOrEmpty(clsViewTypeCodeTabEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewTypeCodeTabEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewTypeCodeTabExObjLstCache: Array<clsViewTypeCodeTabEN> = JSON.parse(strTempObjLst);
    const arrViewTypeCodeTabObjLstT = ViewTypeCodeTab_GetObjLstByJSONObjLst(
      arrViewTypeCodeTabExObjLstCache,
    );
    return arrViewTypeCodeTabObjLstT;
  }
  try {
    const arrViewTypeCodeTabExObjLst = await ViewTypeCodeTab_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrViewTypeCodeTabExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewTypeCodeTabExObjLst.length,
    );
    console.log(strInfo);
    return arrViewTypeCodeTabExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewTypeCodeTab_ConstructorName,
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
export async function ViewTypeCodeTab_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsViewTypeCodeTabEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewTypeCodeTabObjLstCache: Array<clsViewTypeCodeTabEN> = JSON.parse(strTempObjLst);
    return arrViewTypeCodeTabObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ViewTypeCodeTab_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewTypeCodeTabEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

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
          viewTypeCodeTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewTypeCodeTab_GetObjLstByJSONObjLst(returnObjLst);
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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
export async function ViewTypeCodeTab_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewTypeCodeTabEN._CurrTabName;
  if (IsNullOrEmpty(clsViewTypeCodeTabEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewTypeCodeTabEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewTypeCodeTabExObjLstCache: Array<clsViewTypeCodeTabEN> = JSON.parse(strTempObjLst);
    const arrViewTypeCodeTabObjLstT = ViewTypeCodeTab_GetObjLstByJSONObjLst(
      arrViewTypeCodeTabExObjLstCache,
    );
    return arrViewTypeCodeTabObjLstT;
  }
  try {
    const arrViewTypeCodeTabExObjLst = await ViewTypeCodeTab_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrViewTypeCodeTabExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewTypeCodeTabExObjLst.length,
    );
    console.log(strInfo);
    return arrViewTypeCodeTabExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewTypeCodeTab_ConstructorName,
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
export async function ViewTypeCodeTab_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsViewTypeCodeTabEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewTypeCodeTabObjLstCache: Array<clsViewTypeCodeTabEN> = JSON.parse(strTempObjLst);
    return arrViewTypeCodeTabObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewTypeCodeTab_GetObjLstCache(): Promise<Array<clsViewTypeCodeTabEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrViewTypeCodeTabObjLstCache;
  switch (clsViewTypeCodeTabEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewTypeCodeTabObjLstCache = await ViewTypeCodeTab_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrViewTypeCodeTabObjLstCache = await ViewTypeCodeTab_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrViewTypeCodeTabObjLstCache = await ViewTypeCodeTab_GetObjLstClientCache();
      break;
    default:
      arrViewTypeCodeTabObjLstCache = await ViewTypeCodeTab_GetObjLstClientCache();
      break;
  }
  return arrViewTypeCodeTabObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewTypeCodeTab_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrViewTypeCodeTabObjLstCache;
  switch (clsViewTypeCodeTabEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewTypeCodeTabObjLstCache = await ViewTypeCodeTab_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrViewTypeCodeTabObjLstCache = await ViewTypeCodeTab_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrViewTypeCodeTabObjLstCache = null;
      break;
    default:
      arrViewTypeCodeTabObjLstCache = null;
      break;
  }
  return arrViewTypeCodeTabObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objintViewTypeCodeCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewTypeCodeTab_GetSubObjLstCache(
  objViewTypeCodeTabCond: clsViewTypeCodeTabEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrViewTypeCodeTabObjLstCache = await ViewTypeCodeTab_GetObjLstCache();
  let arrViewTypeCodeTabSel = arrViewTypeCodeTabObjLstCache;
  if (
    objViewTypeCodeTabCond.sfFldComparisonOp == null ||
    objViewTypeCodeTabCond.sfFldComparisonOp == ''
  )
    return arrViewTypeCodeTabSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewTypeCodeTabCond.sfFldComparisonOp,
  );
  //console.log("clsViewTypeCodeTabWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewTypeCodeTabCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewTypeCodeTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrViewTypeCodeTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewTypeCodeTabCond),
      viewTypeCodeTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewTypeCodeTabEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewTypeCode:关键字列表
 * @returns 对象列表
 **/
export async function ViewTypeCodeTab_GetObjLstByViewTypeCodeLstAsync(
  arrViewTypeCode: Array<string>,
): Promise<Array<clsViewTypeCodeTabEN>> {
  const strThisFuncName = 'GetObjLstByViewTypeCodeLstAsync';
  const strAction = 'GetObjLstByViewTypeCodeLst';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewTypeCode, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          viewTypeCodeTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewTypeCodeTab_GetObjLstByJSONObjLst(returnObjLst);
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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
 * @param arrintViewTypeCodeLst:关键字列表
 * @returns 对象列表
 */
export async function ViewTypeCodeTab_GetObjLstByViewTypeCodeLstCache(
  arrViewTypeCodeLst: Array<number>,
) {
  const strThisFuncName = 'GetObjLstByViewTypeCodeLstCache';
  try {
    const arrViewTypeCodeTabObjLstCache = await ViewTypeCodeTab_GetObjLstCache();
    const arrViewTypeCodeTabSel = arrViewTypeCodeTabObjLstCache.filter(
      (x) => arrViewTypeCodeLst.indexOf(x.viewTypeCode) > -1,
    );
    return arrViewTypeCodeTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewTypeCodeLst.join(','),
      viewTypeCodeTab_ConstructorName,
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
export async function ViewTypeCodeTab_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewTypeCodeTabEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

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
          viewTypeCodeTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewTypeCodeTab_GetObjLstByJSONObjLst(returnObjLst);
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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
export async function ViewTypeCodeTab_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewTypeCodeTabEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

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
          viewTypeCodeTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewTypeCodeTab_GetObjLstByJSONObjLst(returnObjLst);
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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
export async function ViewTypeCodeTab_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewTypeCodeTabEN>();
  const arrViewTypeCodeTabObjLstCache = await ViewTypeCodeTab_GetObjLstCache();
  if (arrViewTypeCodeTabObjLstCache.length == 0) return arrViewTypeCodeTabObjLstCache;
  let arrViewTypeCodeTabSel = arrViewTypeCodeTabObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objViewTypeCodeTabCond = new clsViewTypeCodeTabEN();
  ObjectAssign(objViewTypeCodeTabCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsViewTypeCodeTabWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewTypeCodeTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewTypeCodeTabSel.length == 0) return arrViewTypeCodeTabSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.sort(
        ViewTypeCodeTab_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.sort(objPagerPara.sortFun);
    }
    arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.slice(intStart, intEnd);
    return arrViewTypeCodeTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewTypeCodeTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewTypeCodeTabEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ViewTypeCodeTab_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewTypeCodeTabEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewTypeCodeTabEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

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
          viewTypeCodeTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewTypeCodeTab_GetObjLstByJSONObjLst(returnObjLst);
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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
 * @param intViewTypeCode:关键字
 * @returns 获取删除的结果
 **/
export async function ViewTypeCodeTab_DelRecordAsync(intViewTypeCode: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, intViewTypeCode);

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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
 * @param arrViewTypeCode:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ViewTypeCodeTab_DelViewTypeCodeTabsAsync(
  arrViewTypeCode: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelViewTypeCodeTabsAsync';
  const strAction = 'DelViewTypeCodeTabs';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewTypeCode, config);
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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
export async function ViewTypeCodeTab_DelViewTypeCodeTabsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelViewTypeCodeTabsByCondAsync';
  const strAction = 'DelViewTypeCodeTabsByCond';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
 * @param objViewTypeCodeTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewTypeCodeTab_AddNewRecordAsync(
  objViewTypeCodeTabEN: clsViewTypeCodeTabEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objViewTypeCodeTabEN);
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewTypeCodeTabEN, config);
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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
 * @param objViewTypeCodeTabEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewTypeCodeTab_AddNewRecordWithReturnKeyAsync(
  objViewTypeCodeTabEN: clsViewTypeCodeTabEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewTypeCodeTabEN, config);
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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
 * @param objViewTypeCodeTabEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewTypeCodeTab_UpdateRecordAsync(
  objViewTypeCodeTabEN: clsViewTypeCodeTabEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewTypeCodeTabEN.sfUpdFldSetStr === undefined ||
    objViewTypeCodeTabEN.sfUpdFldSetStr === null ||
    objViewTypeCodeTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewTypeCodeTabEN.viewTypeCode,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewTypeCodeTabEN, config);
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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
 * @param objViewTypeCodeTabEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewTypeCodeTab_UpdateWithConditionAsync(
  objViewTypeCodeTabEN: clsViewTypeCodeTabEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewTypeCodeTabEN.sfUpdFldSetStr === undefined ||
    objViewTypeCodeTabEN.sfUpdFldSetStr === null ||
    objViewTypeCodeTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewTypeCodeTabEN.viewTypeCode,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);
  objViewTypeCodeTabEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewTypeCodeTabEN, config);
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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
 * @param objintViewTypeCodeCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewTypeCodeTab_IsExistRecordCache(
  objViewTypeCodeTabCond: clsViewTypeCodeTabEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrViewTypeCodeTabObjLstCache = await ViewTypeCodeTab_GetObjLstCache();
  if (arrViewTypeCodeTabObjLstCache == null) return false;
  let arrViewTypeCodeTabSel = arrViewTypeCodeTabObjLstCache;
  if (
    objViewTypeCodeTabCond.sfFldComparisonOp == null ||
    objViewTypeCodeTabCond.sfFldComparisonOp == ''
  )
    return arrViewTypeCodeTabSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewTypeCodeTabCond.sfFldComparisonOp,
  );
  //console.log("clsViewTypeCodeTabWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewTypeCodeTabCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewTypeCodeTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrViewTypeCodeTabSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objViewTypeCodeTabCond),
      viewTypeCodeTab_ConstructorName,
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
export async function ViewTypeCodeTab_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
 * @param intViewTypeCode:所给的关键字
 * @returns 对象
 */
export async function ViewTypeCodeTab_IsExistCache(intViewTypeCode: number) {
  const strThisFuncName = 'IsExistCache';
  const arrViewTypeCodeTabObjLstCache = await ViewTypeCodeTab_GetObjLstCache();
  if (arrViewTypeCodeTabObjLstCache == null) return false;
  try {
    const arrViewTypeCodeTabSel = arrViewTypeCodeTabObjLstCache.filter(
      (x) => x.viewTypeCode == intViewTypeCode,
    );
    if (arrViewTypeCodeTabSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      intViewTypeCode,
      viewTypeCodeTab_ConstructorName,
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
 * @param intViewTypeCode:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ViewTypeCodeTab_IsExistAsync(intViewTypeCode: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      intViewTypeCode,
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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
export async function ViewTypeCodeTab_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
 * @param objViewTypeCodeTabCond:条件对象
 * @returns 对象列表记录数
 */
export async function ViewTypeCodeTab_GetRecCountByCondCache(
  objViewTypeCodeTabCond: clsViewTypeCodeTabEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrViewTypeCodeTabObjLstCache = await ViewTypeCodeTab_GetObjLstCache();
  if (arrViewTypeCodeTabObjLstCache == null) return 0;
  let arrViewTypeCodeTabSel = arrViewTypeCodeTabObjLstCache;
  if (
    objViewTypeCodeTabCond.sfFldComparisonOp == null ||
    objViewTypeCodeTabCond.sfFldComparisonOp == ''
  )
    return arrViewTypeCodeTabSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewTypeCodeTabCond.sfFldComparisonOp,
  );
  //console.log("clsViewTypeCodeTabWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewTypeCodeTabCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewTypeCodeTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrViewTypeCodeTabSel = arrViewTypeCodeTabSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrViewTypeCodeTabSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewTypeCodeTabCond),
      viewTypeCodeTab_ConstructorName,
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
export async function ViewTypeCodeTab_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewTypeCodeTab_Controller, strAction);

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
        viewTypeCodeTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewTypeCodeTab_ConstructorName,
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
export function ViewTypeCodeTab_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewTypeCodeTab_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsViewTypeCodeTabEN._CurrTabName;
  switch (clsViewTypeCodeTabEN.CacheModeId) {
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
export function ViewTypeCodeTab_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsViewTypeCodeTabEN._CurrTabName;
    switch (clsViewTypeCodeTabEN.CacheModeId) {
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
export async function ViewTypeCodeTab_BindDdl_ViewTypeCodeInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ViewTypeCodeInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ViewTypeCodeInDivCache");
  const arrObjLstSel = await ViewTypeCodeTab_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsViewTypeCodeTabEN.con_ViewTypeCode,
    clsViewTypeCodeTabEN.con_ViewTypeName,
    '界面类型码',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewTypeCodeTab_CheckPropertyNew(pobjViewTypeCodeTabEN: clsViewTypeCodeTabEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjViewTypeCodeTabEN.viewTypeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[界面类型名称]不能为空(In 界面类型码)!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewTypeCodeTabEN.applicationTypeId ||
    (pobjViewTypeCodeTabEN.applicationTypeId != null &&
      pobjViewTypeCodeTabEN.applicationTypeId.toString() === '') ||
    pobjViewTypeCodeTabEN.applicationTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[应用程序类型ID]不能为空(In 界面类型码)!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewTypeCodeTabEN.isHaveAdd ||
    (pobjViewTypeCodeTabEN.isHaveAdd != null && pobjViewTypeCodeTabEN.isHaveAdd.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否有添加]不能为空(In 界面类型码)!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewTypeCodeTabEN.isHaveUpdate ||
    (pobjViewTypeCodeTabEN.isHaveUpdate != null &&
      pobjViewTypeCodeTabEN.isHaveUpdate.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否有修改]不能为空(In 界面类型码)!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewTypeCodeTabEN.isHaveDel ||
    (pobjViewTypeCodeTabEN.isHaveDel != null && pobjViewTypeCodeTabEN.isHaveDel.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否有删除]不能为空(In 界面类型码)!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewTypeCodeTabEN.isHaveQuery ||
    (pobjViewTypeCodeTabEN.isHaveQuery != null &&
      pobjViewTypeCodeTabEN.isHaveQuery.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否有查询]不能为空(In 界面类型码)!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewTypeCodeTabEN.isHaveExcelExport ||
    (pobjViewTypeCodeTabEN.isHaveExcelExport != null &&
      pobjViewTypeCodeTabEN.isHaveExcelExport.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否EXCEL导出]不能为空(In 界面类型码)!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewTypeCodeTabEN.isHaveSetExportExcel ||
    (pobjViewTypeCodeTabEN.isHaveSetExportExcel != null &&
      pobjViewTypeCodeTabEN.isHaveSetExportExcel.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否有设置EXCEL导出]不能为空(In 界面类型码)!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewTypeCodeTabEN.isHaveDetail ||
    (pobjViewTypeCodeTabEN.isHaveDetail != null &&
      pobjViewTypeCodeTabEN.isHaveDetail.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否有详细]不能为空(In 界面类型码)!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewTypeCodeTabEN.isHaveExeAdd ||
    (pobjViewTypeCodeTabEN.isHaveExeAdd != null &&
      pobjViewTypeCodeTabEN.isHaveExeAdd.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否有调用添加]不能为空(In 界面类型码)!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewTypeCodeTabEN.isHaveExeUpdate ||
    (pobjViewTypeCodeTabEN.isHaveExeUpdate != null &&
      pobjViewTypeCodeTabEN.isHaveExeUpdate.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否有调用修改]不能为空(In 界面类型码)!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewTypeCodeTabEN.isHaveMainView ||
    (pobjViewTypeCodeTabEN.isHaveMainView != null &&
      pobjViewTypeCodeTabEN.isHaveMainView.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否有主界面]不能为空(In 界面类型码)!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewTypeCodeTabEN.isHaveSubView ||
    (pobjViewTypeCodeTabEN.isHaveSubView != null &&
      pobjViewTypeCodeTabEN.isHaveSubView.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[是否有子界面]不能为空(In 界面类型码)!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewTypeName) == false &&
    GetStrLen(pobjViewTypeCodeTabEN.viewTypeName) > 40
  ) {
    throw new Error(
      '(errid:Watl000413)字段[界面类型名称(viewTypeName)]的长度不能超过40(In 界面类型码(ViewTypeCodeTab))!值:$(pobjViewTypeCodeTabEN.viewTypeName)(clsViewTypeCodeTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewTypeENName) == false &&
    GetStrLen(pobjViewTypeCodeTabEN.viewTypeENName) > 40
  ) {
    throw new Error(
      '(errid:Watl000413)字段[ViewTypeENName(viewTypeENName)]的长度不能超过40(In 界面类型码(ViewTypeCodeTab))!值:$(pobjViewTypeCodeTabEN.viewTypeENName)(clsViewTypeCodeTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewFunction) == false &&
    GetStrLen(pobjViewTypeCodeTabEN.viewFunction) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[界面功能(viewFunction)]的长度不能超过100(In 界面类型码(ViewTypeCodeTab))!值:$(pobjViewTypeCodeTabEN.viewFunction)(clsViewTypeCodeTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.optProcess) == false &&
    GetStrLen(pobjViewTypeCodeTabEN.optProcess) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[操作流程(optProcess)]的长度不能超过1000(In 界面类型码(ViewTypeCodeTab))!值:$(pobjViewTypeCodeTabEN.optProcess)(clsViewTypeCodeTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewDetail) == false &&
    GetStrLen(pobjViewTypeCodeTabEN.viewDetail) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[界面说明(viewDetail)]的长度不能超过1000(In 界面类型码(ViewTypeCodeTab))!值:$(pobjViewTypeCodeTabEN.viewDetail)(clsViewTypeCodeTabBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewTypeCodeTabEN.viewTypeCode &&
    undefined !== pobjViewTypeCodeTabEN.viewTypeCode &&
    tzDataType.isNumber(pobjViewTypeCodeTabEN.viewTypeCode) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[界面类型码(viewTypeCode)]的值:[$(pobjViewTypeCodeTabEN.viewTypeCode)], 非法,应该为数值型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewTypeName) == false &&
    undefined !== pobjViewTypeCodeTabEN.viewTypeName &&
    tzDataType.isString(pobjViewTypeCodeTabEN.viewTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[界面类型名称(viewTypeName)]的值:[$(pobjViewTypeCodeTabEN.viewTypeName)], 非法,应该为字符型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewTypeENName) == false &&
    undefined !== pobjViewTypeCodeTabEN.viewTypeENName &&
    tzDataType.isString(pobjViewTypeCodeTabEN.viewTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[ViewTypeENName(viewTypeENName)]的值:[$(pobjViewTypeCodeTabEN.viewTypeENName)], 非法,应该为字符型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isWinApp &&
    undefined !== pobjViewTypeCodeTabEN.isWinApp &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isWinApp) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[IsWinApp(isWinApp)]的值:[$(pobjViewTypeCodeTabEN.isWinApp)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isMobileApp &&
    undefined !== pobjViewTypeCodeTabEN.isMobileApp &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isMobileApp) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否移动终端应用(isMobileApp)]的值:[$(pobjViewTypeCodeTabEN.isMobileApp)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isWebApp &&
    undefined !== pobjViewTypeCodeTabEN.isWebApp &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isWebApp) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[IsWebApp(isWebApp)]的值:[$(pobjViewTypeCodeTabEN.isWebApp)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewFunction) == false &&
    undefined !== pobjViewTypeCodeTabEN.viewFunction &&
    tzDataType.isString(pobjViewTypeCodeTabEN.viewFunction) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[界面功能(viewFunction)]的值:[$(pobjViewTypeCodeTabEN.viewFunction)], 非法,应该为字符型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.optProcess) == false &&
    undefined !== pobjViewTypeCodeTabEN.optProcess &&
    tzDataType.isString(pobjViewTypeCodeTabEN.optProcess) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[操作流程(optProcess)]的值:[$(pobjViewTypeCodeTabEN.optProcess)], 非法,应该为字符型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewDetail) == false &&
    undefined !== pobjViewTypeCodeTabEN.viewDetail &&
    tzDataType.isString(pobjViewTypeCodeTabEN.viewDetail) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[界面说明(viewDetail)]的值:[$(pobjViewTypeCodeTabEN.viewDetail)], 非法,应该为字符型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.applicationTypeId &&
    undefined !== pobjViewTypeCodeTabEN.applicationTypeId &&
    tzDataType.isNumber(pobjViewTypeCodeTabEN.applicationTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[应用程序类型ID(applicationTypeId)]的值:[$(pobjViewTypeCodeTabEN.applicationTypeId)], 非法,应该为数值型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveAdd &&
    undefined !== pobjViewTypeCodeTabEN.isHaveAdd &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveAdd) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有添加(isHaveAdd)]的值:[$(pobjViewTypeCodeTabEN.isHaveAdd)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveUpdate &&
    undefined !== pobjViewTypeCodeTabEN.isHaveUpdate &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveUpdate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有修改(isHaveUpdate)]的值:[$(pobjViewTypeCodeTabEN.isHaveUpdate)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveDel &&
    undefined !== pobjViewTypeCodeTabEN.isHaveDel &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveDel) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有删除(isHaveDel)]的值:[$(pobjViewTypeCodeTabEN.isHaveDel)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveQuery &&
    undefined !== pobjViewTypeCodeTabEN.isHaveQuery &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveQuery) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有查询(isHaveQuery)]的值:[$(pobjViewTypeCodeTabEN.isHaveQuery)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveExcelExport &&
    undefined !== pobjViewTypeCodeTabEN.isHaveExcelExport &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveExcelExport) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否EXCEL导出(isHaveExcelExport)]的值:[$(pobjViewTypeCodeTabEN.isHaveExcelExport)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveSetExportExcel &&
    undefined !== pobjViewTypeCodeTabEN.isHaveSetExportExcel &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveSetExportExcel) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有设置EXCEL导出(isHaveSetExportExcel)]的值:[$(pobjViewTypeCodeTabEN.isHaveSetExportExcel)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveDetail &&
    undefined !== pobjViewTypeCodeTabEN.isHaveDetail &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveDetail) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有详细(isHaveDetail)]的值:[$(pobjViewTypeCodeTabEN.isHaveDetail)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveExeAdd &&
    undefined !== pobjViewTypeCodeTabEN.isHaveExeAdd &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveExeAdd) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有调用添加(isHaveExeAdd)]的值:[$(pobjViewTypeCodeTabEN.isHaveExeAdd)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveExeUpdate &&
    undefined !== pobjViewTypeCodeTabEN.isHaveExeUpdate &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveExeUpdate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有调用修改(isHaveExeUpdate)]的值:[$(pobjViewTypeCodeTabEN.isHaveExeUpdate)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveMainView &&
    undefined !== pobjViewTypeCodeTabEN.isHaveMainView &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveMainView) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有主界面(isHaveMainView)]的值:[$(pobjViewTypeCodeTabEN.isHaveMainView)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveSubView &&
    undefined !== pobjViewTypeCodeTabEN.isHaveSubView &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveSubView) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有子界面(isHaveSubView)]的值:[$(pobjViewTypeCodeTabEN.isHaveSubView)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.orderNum &&
    undefined !== pobjViewTypeCodeTabEN.orderNum &&
    tzDataType.isNumber(pobjViewTypeCodeTabEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjViewTypeCodeTabEN.orderNum)], 非法,应该为数值型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isUsed &&
    undefined !== pobjViewTypeCodeTabEN.isUsed &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isUsed) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[IsUsed(isUsed)]的值:[$(pobjViewTypeCodeTabEN.isUsed)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewTypeCodeTab_CheckProperty4Update(pobjViewTypeCodeTabEN: clsViewTypeCodeTabEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewTypeName) == false &&
    GetStrLen(pobjViewTypeCodeTabEN.viewTypeName) > 40
  ) {
    throw new Error(
      '(errid:Watl000416)字段[界面类型名称(viewTypeName)]的长度不能超过40(In 界面类型码(ViewTypeCodeTab))!值:$(pobjViewTypeCodeTabEN.viewTypeName)(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewTypeENName) == false &&
    GetStrLen(pobjViewTypeCodeTabEN.viewTypeENName) > 40
  ) {
    throw new Error(
      '(errid:Watl000416)字段[ViewTypeENName(viewTypeENName)]的长度不能超过40(In 界面类型码(ViewTypeCodeTab))!值:$(pobjViewTypeCodeTabEN.viewTypeENName)(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewFunction) == false &&
    GetStrLen(pobjViewTypeCodeTabEN.viewFunction) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[界面功能(viewFunction)]的长度不能超过100(In 界面类型码(ViewTypeCodeTab))!值:$(pobjViewTypeCodeTabEN.viewFunction)(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.optProcess) == false &&
    GetStrLen(pobjViewTypeCodeTabEN.optProcess) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[操作流程(optProcess)]的长度不能超过1000(In 界面类型码(ViewTypeCodeTab))!值:$(pobjViewTypeCodeTabEN.optProcess)(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewDetail) == false &&
    GetStrLen(pobjViewTypeCodeTabEN.viewDetail) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[界面说明(viewDetail)]的长度不能超过1000(In 界面类型码(ViewTypeCodeTab))!值:$(pobjViewTypeCodeTabEN.viewDetail)(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjViewTypeCodeTabEN.viewTypeCode &&
    undefined !== pobjViewTypeCodeTabEN.viewTypeCode &&
    tzDataType.isNumber(pobjViewTypeCodeTabEN.viewTypeCode) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[界面类型码(viewTypeCode)]的值:[$(pobjViewTypeCodeTabEN.viewTypeCode)], 非法,应该为数值型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewTypeName) == false &&
    undefined !== pobjViewTypeCodeTabEN.viewTypeName &&
    tzDataType.isString(pobjViewTypeCodeTabEN.viewTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[界面类型名称(viewTypeName)]的值:[$(pobjViewTypeCodeTabEN.viewTypeName)], 非法,应该为字符型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewTypeENName) == false &&
    undefined !== pobjViewTypeCodeTabEN.viewTypeENName &&
    tzDataType.isString(pobjViewTypeCodeTabEN.viewTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[ViewTypeENName(viewTypeENName)]的值:[$(pobjViewTypeCodeTabEN.viewTypeENName)], 非法,应该为字符型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isWinApp &&
    undefined !== pobjViewTypeCodeTabEN.isWinApp &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isWinApp) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[IsWinApp(isWinApp)]的值:[$(pobjViewTypeCodeTabEN.isWinApp)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isMobileApp &&
    undefined !== pobjViewTypeCodeTabEN.isMobileApp &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isMobileApp) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否移动终端应用(isMobileApp)]的值:[$(pobjViewTypeCodeTabEN.isMobileApp)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isWebApp &&
    undefined !== pobjViewTypeCodeTabEN.isWebApp &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isWebApp) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[IsWebApp(isWebApp)]的值:[$(pobjViewTypeCodeTabEN.isWebApp)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewFunction) == false &&
    undefined !== pobjViewTypeCodeTabEN.viewFunction &&
    tzDataType.isString(pobjViewTypeCodeTabEN.viewFunction) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[界面功能(viewFunction)]的值:[$(pobjViewTypeCodeTabEN.viewFunction)], 非法,应该为字符型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.optProcess) == false &&
    undefined !== pobjViewTypeCodeTabEN.optProcess &&
    tzDataType.isString(pobjViewTypeCodeTabEN.optProcess) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[操作流程(optProcess)]的值:[$(pobjViewTypeCodeTabEN.optProcess)], 非法,应该为字符型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewTypeCodeTabEN.viewDetail) == false &&
    undefined !== pobjViewTypeCodeTabEN.viewDetail &&
    tzDataType.isString(pobjViewTypeCodeTabEN.viewDetail) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[界面说明(viewDetail)]的值:[$(pobjViewTypeCodeTabEN.viewDetail)], 非法,应该为字符型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.applicationTypeId &&
    undefined !== pobjViewTypeCodeTabEN.applicationTypeId &&
    tzDataType.isNumber(pobjViewTypeCodeTabEN.applicationTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[应用程序类型ID(applicationTypeId)]的值:[$(pobjViewTypeCodeTabEN.applicationTypeId)], 非法,应该为数值型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveAdd &&
    undefined !== pobjViewTypeCodeTabEN.isHaveAdd &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveAdd) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有添加(isHaveAdd)]的值:[$(pobjViewTypeCodeTabEN.isHaveAdd)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveUpdate &&
    undefined !== pobjViewTypeCodeTabEN.isHaveUpdate &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveUpdate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有修改(isHaveUpdate)]的值:[$(pobjViewTypeCodeTabEN.isHaveUpdate)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveDel &&
    undefined !== pobjViewTypeCodeTabEN.isHaveDel &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveDel) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有删除(isHaveDel)]的值:[$(pobjViewTypeCodeTabEN.isHaveDel)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveQuery &&
    undefined !== pobjViewTypeCodeTabEN.isHaveQuery &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveQuery) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有查询(isHaveQuery)]的值:[$(pobjViewTypeCodeTabEN.isHaveQuery)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveExcelExport &&
    undefined !== pobjViewTypeCodeTabEN.isHaveExcelExport &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveExcelExport) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否EXCEL导出(isHaveExcelExport)]的值:[$(pobjViewTypeCodeTabEN.isHaveExcelExport)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveSetExportExcel &&
    undefined !== pobjViewTypeCodeTabEN.isHaveSetExportExcel &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveSetExportExcel) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有设置EXCEL导出(isHaveSetExportExcel)]的值:[$(pobjViewTypeCodeTabEN.isHaveSetExportExcel)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveDetail &&
    undefined !== pobjViewTypeCodeTabEN.isHaveDetail &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveDetail) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有详细(isHaveDetail)]的值:[$(pobjViewTypeCodeTabEN.isHaveDetail)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveExeAdd &&
    undefined !== pobjViewTypeCodeTabEN.isHaveExeAdd &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveExeAdd) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有调用添加(isHaveExeAdd)]的值:[$(pobjViewTypeCodeTabEN.isHaveExeAdd)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveExeUpdate &&
    undefined !== pobjViewTypeCodeTabEN.isHaveExeUpdate &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveExeUpdate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有调用修改(isHaveExeUpdate)]的值:[$(pobjViewTypeCodeTabEN.isHaveExeUpdate)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveMainView &&
    undefined !== pobjViewTypeCodeTabEN.isHaveMainView &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveMainView) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有主界面(isHaveMainView)]的值:[$(pobjViewTypeCodeTabEN.isHaveMainView)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isHaveSubView &&
    undefined !== pobjViewTypeCodeTabEN.isHaveSubView &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isHaveSubView) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有子界面(isHaveSubView)]的值:[$(pobjViewTypeCodeTabEN.isHaveSubView)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.orderNum &&
    undefined !== pobjViewTypeCodeTabEN.orderNum &&
    tzDataType.isNumber(pobjViewTypeCodeTabEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjViewTypeCodeTabEN.orderNum)], 非法,应该为数值型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewTypeCodeTabEN.isUsed &&
    undefined !== pobjViewTypeCodeTabEN.isUsed &&
    tzDataType.isBoolean(pobjViewTypeCodeTabEN.isUsed) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[IsUsed(isUsed)]的值:[$(pobjViewTypeCodeTabEN.isUsed)], 非法,应该为布尔型(In 界面类型码(ViewTypeCodeTab))!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjViewTypeCodeTabEN.viewTypeCode ||
    (pobjViewTypeCodeTabEN.viewTypeCode != null &&
      pobjViewTypeCodeTabEN.viewTypeCode.toString() === '') ||
    pobjViewTypeCodeTabEN.viewTypeCode.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[界面类型码]不能为空(In 界面类型码)!(clsViewTypeCodeTabBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewTypeCodeTab_GetJSONStrByObj(
  pobjViewTypeCodeTabEN: clsViewTypeCodeTabEN,
): string {
  pobjViewTypeCodeTabEN.sfUpdFldSetStr = pobjViewTypeCodeTabEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewTypeCodeTabEN);
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
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function ViewTypeCodeTab_GetObjLstByJSONStr(strJSON: string): Array<clsViewTypeCodeTabEN> {
  let arrViewTypeCodeTabObjLst = new Array<clsViewTypeCodeTabEN>();
  if (strJSON === '') {
    return arrViewTypeCodeTabObjLst;
  }
  try {
    arrViewTypeCodeTabObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewTypeCodeTabObjLst;
  }
  return arrViewTypeCodeTabObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewTypeCodeTabObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewTypeCodeTab_GetObjLstByJSONObjLst(
  arrViewTypeCodeTabObjLstS: Array<clsViewTypeCodeTabEN>,
): Array<clsViewTypeCodeTabEN> {
  const arrViewTypeCodeTabObjLst = new Array<clsViewTypeCodeTabEN>();
  for (const objInFor of arrViewTypeCodeTabObjLstS) {
    const obj1 = ViewTypeCodeTab_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewTypeCodeTabObjLst.push(obj1);
  }
  return arrViewTypeCodeTabObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewTypeCodeTab_GetObjByJSONStr(strJSON: string): clsViewTypeCodeTabEN {
  let pobjViewTypeCodeTabEN = new clsViewTypeCodeTabEN();
  if (strJSON === '') {
    return pobjViewTypeCodeTabEN;
  }
  try {
    pobjViewTypeCodeTabEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewTypeCodeTabEN;
  }
  return pobjViewTypeCodeTabEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewTypeCodeTab_GetCombineCondition(
  objViewTypeCodeTabCond: clsViewTypeCodeTabEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_ViewTypeCode,
    ) == true
  ) {
    const strComparisonOpViewTypeCode: string =
      objViewTypeCodeTabCond.dicFldComparisonOp[clsViewTypeCodeTabEN.con_ViewTypeCode];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewTypeCodeTabEN.con_ViewTypeCode,
      objViewTypeCodeTabCond.viewTypeCode,
      strComparisonOpViewTypeCode,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_ViewTypeName,
    ) == true
  ) {
    const strComparisonOpViewTypeName: string =
      objViewTypeCodeTabCond.dicFldComparisonOp[clsViewTypeCodeTabEN.con_ViewTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewTypeCodeTabEN.con_ViewTypeName,
      objViewTypeCodeTabCond.viewTypeName,
      strComparisonOpViewTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_ViewTypeENName,
    ) == true
  ) {
    const strComparisonOpViewTypeENName: string =
      objViewTypeCodeTabCond.dicFldComparisonOp[clsViewTypeCodeTabEN.con_ViewTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewTypeCodeTabEN.con_ViewTypeENName,
      objViewTypeCodeTabCond.viewTypeENName,
      strComparisonOpViewTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_IsWinApp,
    ) == true
  ) {
    if (objViewTypeCodeTabCond.isWinApp == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewTypeCodeTabEN.con_IsWinApp);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewTypeCodeTabEN.con_IsWinApp);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_IsMobileApp,
    ) == true
  ) {
    if (objViewTypeCodeTabCond.isMobileApp == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewTypeCodeTabEN.con_IsMobileApp);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewTypeCodeTabEN.con_IsMobileApp);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_IsWebApp,
    ) == true
  ) {
    if (objViewTypeCodeTabCond.isWebApp == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewTypeCodeTabEN.con_IsWebApp);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewTypeCodeTabEN.con_IsWebApp);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_ViewFunction,
    ) == true
  ) {
    const strComparisonOpViewFunction: string =
      objViewTypeCodeTabCond.dicFldComparisonOp[clsViewTypeCodeTabEN.con_ViewFunction];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewTypeCodeTabEN.con_ViewFunction,
      objViewTypeCodeTabCond.viewFunction,
      strComparisonOpViewFunction,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_OptProcess,
    ) == true
  ) {
    const strComparisonOpOptProcess: string =
      objViewTypeCodeTabCond.dicFldComparisonOp[clsViewTypeCodeTabEN.con_OptProcess];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewTypeCodeTabEN.con_OptProcess,
      objViewTypeCodeTabCond.optProcess,
      strComparisonOpOptProcess,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_ViewDetail,
    ) == true
  ) {
    const strComparisonOpViewDetail: string =
      objViewTypeCodeTabCond.dicFldComparisonOp[clsViewTypeCodeTabEN.con_ViewDetail];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewTypeCodeTabEN.con_ViewDetail,
      objViewTypeCodeTabCond.viewDetail,
      strComparisonOpViewDetail,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objViewTypeCodeTabCond.dicFldComparisonOp[clsViewTypeCodeTabEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewTypeCodeTabEN.con_ApplicationTypeId,
      objViewTypeCodeTabCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_IsHaveAdd,
    ) == true
  ) {
    if (objViewTypeCodeTabCond.isHaveAdd == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewTypeCodeTabEN.con_IsHaveAdd);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewTypeCodeTabEN.con_IsHaveAdd);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_IsHaveUpdate,
    ) == true
  ) {
    if (objViewTypeCodeTabCond.isHaveUpdate == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewTypeCodeTabEN.con_IsHaveUpdate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewTypeCodeTabEN.con_IsHaveUpdate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_IsHaveDel,
    ) == true
  ) {
    if (objViewTypeCodeTabCond.isHaveDel == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewTypeCodeTabEN.con_IsHaveDel);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewTypeCodeTabEN.con_IsHaveDel);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_IsHaveQuery,
    ) == true
  ) {
    if (objViewTypeCodeTabCond.isHaveQuery == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewTypeCodeTabEN.con_IsHaveQuery);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewTypeCodeTabEN.con_IsHaveQuery);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_IsHaveExcelExport,
    ) == true
  ) {
    if (objViewTypeCodeTabCond.isHaveExcelExport == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewTypeCodeTabEN.con_IsHaveExcelExport);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewTypeCodeTabEN.con_IsHaveExcelExport);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_IsHaveSetExportExcel,
    ) == true
  ) {
    if (objViewTypeCodeTabCond.isHaveSetExportExcel == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewTypeCodeTabEN.con_IsHaveSetExportExcel);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewTypeCodeTabEN.con_IsHaveSetExportExcel);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_IsHaveDetail,
    ) == true
  ) {
    if (objViewTypeCodeTabCond.isHaveDetail == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewTypeCodeTabEN.con_IsHaveDetail);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewTypeCodeTabEN.con_IsHaveDetail);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_IsHaveExeAdd,
    ) == true
  ) {
    if (objViewTypeCodeTabCond.isHaveExeAdd == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewTypeCodeTabEN.con_IsHaveExeAdd);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewTypeCodeTabEN.con_IsHaveExeAdd);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_IsHaveExeUpdate,
    ) == true
  ) {
    if (objViewTypeCodeTabCond.isHaveExeUpdate == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewTypeCodeTabEN.con_IsHaveExeUpdate);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewTypeCodeTabEN.con_IsHaveExeUpdate);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_IsHaveMainView,
    ) == true
  ) {
    if (objViewTypeCodeTabCond.isHaveMainView == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewTypeCodeTabEN.con_IsHaveMainView);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewTypeCodeTabEN.con_IsHaveMainView);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_IsHaveSubView,
    ) == true
  ) {
    if (objViewTypeCodeTabCond.isHaveSubView == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewTypeCodeTabEN.con_IsHaveSubView);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewTypeCodeTabEN.con_IsHaveSubView);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objViewTypeCodeTabCond.dicFldComparisonOp[clsViewTypeCodeTabEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewTypeCodeTabEN.con_OrderNum,
      objViewTypeCodeTabCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewTypeCodeTabCond.dicFldComparisonOp,
      clsViewTypeCodeTabEN.con_IsUsed,
    ) == true
  ) {
    if (objViewTypeCodeTabCond.isUsed == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewTypeCodeTabEN.con_IsUsed);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewTypeCodeTabEN.con_IsUsed);
    }
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewTypeCodeTab(界面类型码),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strViewTypeName: 界面类型名称(要求唯一的字段)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewTypeCodeTab_GetUniCondStr(objViewTypeCodeTabEN: clsViewTypeCodeTabEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewTypeName = '{0}'", objViewTypeCodeTabEN.viewTypeName);
  strWhereCond += Format(" and ApplicationTypeId = '{0}'", objViewTypeCodeTabEN.applicationTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewTypeCodeTab(界面类型码),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strViewTypeName: 界面类型名称(要求唯一的字段)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewTypeCodeTab_GetUniCondStr4Update(
  objViewTypeCodeTabEN: clsViewTypeCodeTabEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewTypeCode <> '{0}'", objViewTypeCodeTabEN.viewTypeCode);
  strWhereCond += Format(" and ViewTypeName = '{0}'", objViewTypeCodeTabEN.viewTypeName);
  strWhereCond += Format(" and ApplicationTypeId = '{0}'", objViewTypeCodeTabEN.applicationTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewTypeCodeTabENS:源对象
 * @param objViewTypeCodeTabENT:目标对象
 */
export function ViewTypeCodeTab_GetObjFromJsonObj(
  objViewTypeCodeTabENS: clsViewTypeCodeTabEN,
): clsViewTypeCodeTabEN {
  const objViewTypeCodeTabENT: clsViewTypeCodeTabEN = new clsViewTypeCodeTabEN();
  ObjectAssign(objViewTypeCodeTabENT, objViewTypeCodeTabENS);
  return objViewTypeCodeTabENT;
}
