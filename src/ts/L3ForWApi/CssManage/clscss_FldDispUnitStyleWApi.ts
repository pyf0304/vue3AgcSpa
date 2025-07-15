/**
 * 类名:clscss_FldDispUnitStyleWApi
 * 表名:css_FldDispUnitStyle(00050615)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:46
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:样式表管理(CssManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 字段显示单元样式(css_FldDispUnitStyle)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetSortExpressInfo,
  ObjectAssign,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  css_FldDispUnitStyleCache,
  isFuncMapCache,
} from '@/views/CssManage/css_FldDispUnitStyleVueShare';
import { clscss_FldDispUnitStyleENEx } from '@/ts/L0Entity/CssManage/clscss_FldDispUnitStyleENEx';
import { clscss_FldDispUnitStyleEN } from '@/ts/L0Entity/CssManage/clscss_FldDispUnitStyleEN';
import { CtlType_func } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { css_Style_func } from '@/ts/L3ForWApi/CssManage/clscss_StyleWApi';
import { clscss_StyleEN } from '@/ts/L0Entity/CssManage/clscss_StyleEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';

export const css_FldDispUnitStyle_Controller = 'css_FldDispUnitStyleApi';
export const css_FldDispUnitStyle_ConstructorName = 'css_FldDispUnitStyle';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strFldDispUnitStyleId:关键字
 * @returns 对象
 **/
export async function css_FldDispUnitStyle_GetObjByFldDispUnitStyleIdAsync(
  strFldDispUnitStyleId: string,
): Promise<clscss_FldDispUnitStyleEN | null> {
  const strThisFuncName = 'GetObjByFldDispUnitStyleIdAsync';

  if (IsNullOrEmpty(strFldDispUnitStyleId) == true) {
    const strMsg = Format(
      '参数:[strFldDispUnitStyleId]不能为空!(In clscss_FldDispUnitStyleWApi.GetObjByFldDispUnitStyleIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldDispUnitStyleId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldDispUnitStyleId]的长度:[{0}]不正确!(clscss_FldDispUnitStyleWApi.GetObjByFldDispUnitStyleIdAsync)',
      strFldDispUnitStyleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByFldDispUnitStyleId';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldDispUnitStyleId,
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
      const objcss_FldDispUnitStyle = css_FldDispUnitStyle_GetObjFromJsonObj(returnObj);
      return objcss_FldDispUnitStyle;
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strFldDispUnitStyleId:所给的关键字
 * @returns 对象
 */
export async function css_FldDispUnitStyle_GetObjByFldDispUnitStyleIdlocalStorage(
  strFldDispUnitStyleId: string,
) {
  const strThisFuncName = 'GetObjByFldDispUnitStyleIdlocalStorage';

  if (IsNullOrEmpty(strFldDispUnitStyleId) == true) {
    const strMsg = Format(
      '参数:[strFldDispUnitStyleId]不能为空!(In clscss_FldDispUnitStyleWApi.GetObjByFldDispUnitStyleIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldDispUnitStyleId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldDispUnitStyleId]的长度:[{0}]不正确!(clscss_FldDispUnitStyleWApi.GetObjByFldDispUnitStyleIdlocalStorage)',
      strFldDispUnitStyleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clscss_FldDispUnitStyleEN._CurrTabName, strFldDispUnitStyleId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objcss_FldDispUnitStyleCache: clscss_FldDispUnitStyleEN = JSON.parse(strTempObj);
    return objcss_FldDispUnitStyleCache;
  }
  try {
    const objcss_FldDispUnitStyle = await css_FldDispUnitStyle_GetObjByFldDispUnitStyleIdAsync(
      strFldDispUnitStyleId,
    );
    if (objcss_FldDispUnitStyle != null) {
      localStorage.setItem(strKey, JSON.stringify(objcss_FldDispUnitStyle));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objcss_FldDispUnitStyle;
    }
    return objcss_FldDispUnitStyle;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFldDispUnitStyleId,
      css_FldDispUnitStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strFldDispUnitStyleId:所给的关键字
 * @returns 对象
 */
export async function css_FldDispUnitStyle_GetObjByFldDispUnitStyleIdCache(
  strFldDispUnitStyleId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByFldDispUnitStyleIdCache';

  if (IsNullOrEmpty(strFldDispUnitStyleId) == true) {
    const strMsg = Format(
      '参数:[strFldDispUnitStyleId]不能为空!(In clscss_FldDispUnitStyleWApi.GetObjByFldDispUnitStyleIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldDispUnitStyleId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldDispUnitStyleId]的长度:[{0}]不正确!(clscss_FldDispUnitStyleWApi.GetObjByFldDispUnitStyleIdCache)',
      strFldDispUnitStyleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrcss_FldDispUnitStyleObjLstCache = await css_FldDispUnitStyle_GetObjLstCache();
  try {
    const arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleObjLstCache.filter(
      (x) => x.fldDispUnitStyleId == strFldDispUnitStyleId,
    );
    let objcss_FldDispUnitStyle: clscss_FldDispUnitStyleEN;
    if (arrcss_FldDispUnitStyleSel.length > 0) {
      objcss_FldDispUnitStyle = arrcss_FldDispUnitStyleSel[0];
      return objcss_FldDispUnitStyle;
    } else {
      if (bolTryAsyncOnce == true) {
        const objcss_FldDispUnitStyleConst =
          await css_FldDispUnitStyle_GetObjByFldDispUnitStyleIdAsync(strFldDispUnitStyleId);
        if (objcss_FldDispUnitStyleConst != null) {
          css_FldDispUnitStyle_ReFreshThisCache();
          return objcss_FldDispUnitStyleConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strFldDispUnitStyleId,
      css_FldDispUnitStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objcss_FldDispUnitStyle:所给的对象
 * @returns 对象
 */
export async function css_FldDispUnitStyle_UpdateObjInLstCache(
  objcss_FldDispUnitStyle: clscss_FldDispUnitStyleEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrcss_FldDispUnitStyleObjLstCache = await css_FldDispUnitStyle_GetObjLstCache();
    const obj = arrcss_FldDispUnitStyleObjLstCache.find(
      (x) =>
        x.fldDispUnitStyleName == objcss_FldDispUnitStyle.fldDispUnitStyleName &&
        x.ctlTypeId == objcss_FldDispUnitStyle.ctlTypeId,
    );
    if (obj != null) {
      objcss_FldDispUnitStyle.fldDispUnitStyleId = obj.fldDispUnitStyleId;
      ObjectAssign(obj, objcss_FldDispUnitStyle);
    } else {
      arrcss_FldDispUnitStyleObjLstCache.push(objcss_FldDispUnitStyle);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      css_FldDispUnitStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function css_FldDispUnitStyle_SortFunDefa(
  a: clscss_FldDispUnitStyleEN,
  b: clscss_FldDispUnitStyleEN,
): number {
  return a.fldDispUnitStyleId.localeCompare(b.fldDispUnitStyleId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function css_FldDispUnitStyle_SortFunDefa2Fld(
  a: clscss_FldDispUnitStyleEN,
  b: clscss_FldDispUnitStyleEN,
): number {
  if (a.fldDispUnitStyleName == b.fldDispUnitStyleName)
    return a.fldDispUnitStyleDesc.localeCompare(b.fldDispUnitStyleDesc);
  else return a.fldDispUnitStyleName.localeCompare(b.fldDispUnitStyleName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function css_FldDispUnitStyle_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          return a.fldDispUnitStyleId.localeCompare(b.fldDispUnitStyleId);
        };
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          return a.fldDispUnitStyleName.localeCompare(b.fldDispUnitStyleName);
        };
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleDesc:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (a.fldDispUnitStyleDesc == null) return -1;
          if (b.fldDispUnitStyleDesc == null) return 1;
          return a.fldDispUnitStyleDesc.localeCompare(b.fldDispUnitStyleDesc);
        };
      case clscss_FldDispUnitStyleEN.con_StyleIdContent:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (a.styleIdContent == null) return -1;
          if (b.styleIdContent == null) return 1;
          return a.styleIdContent.localeCompare(b.styleIdContent);
        };
      case clscss_FldDispUnitStyleEN.con_StyleIdTitle:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (a.styleIdTitle == null) return -1;
          if (b.styleIdTitle == null) return 1;
          return a.styleIdTitle.localeCompare(b.styleIdTitle);
        };
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleContent:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          return a.fldDispUnitStyleContent.localeCompare(b.fldDispUnitStyleContent);
        };
      case clscss_FldDispUnitStyleEN.con_FldDispUnitFormat:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (a.fldDispUnitFormat == null) return -1;
          if (b.fldDispUnitFormat == null) return 1;
          return a.fldDispUnitFormat.localeCompare(b.fldDispUnitFormat);
        };
      case clscss_FldDispUnitStyleEN.con_CtlTypeId:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          return a.ctlTypeId.localeCompare(b.ctlTypeId);
        };
      case clscss_FldDispUnitStyleEN.con_OrderNum:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          return a.orderNum - b.orderNum;
        };
      case clscss_FldDispUnitStyleEN.con_DeletedDate:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (a.deletedDate == null) return -1;
          if (b.deletedDate == null) return 1;
          return a.deletedDate.localeCompare(b.deletedDate);
        };
      case clscss_FldDispUnitStyleEN.con_IsDeleted:
        return (a: clscss_FldDispUnitStyleEN) => {
          if (a.isDeleted == true) return 1;
          else return -1;
        };
      case clscss_FldDispUnitStyleEN.con_UpdDate:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clscss_FldDispUnitStyleEN.con_UpdUser:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clscss_FldDispUnitStyleEN.con_Memo:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[css_FldDispUnitStyle]中不存在!(in ${css_FldDispUnitStyle_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          return b.fldDispUnitStyleId.localeCompare(a.fldDispUnitStyleId);
        };
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          return b.fldDispUnitStyleName.localeCompare(a.fldDispUnitStyleName);
        };
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleDesc:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (b.fldDispUnitStyleDesc == null) return -1;
          if (a.fldDispUnitStyleDesc == null) return 1;
          return b.fldDispUnitStyleDesc.localeCompare(a.fldDispUnitStyleDesc);
        };
      case clscss_FldDispUnitStyleEN.con_StyleIdContent:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (b.styleIdContent == null) return -1;
          if (a.styleIdContent == null) return 1;
          return b.styleIdContent.localeCompare(a.styleIdContent);
        };
      case clscss_FldDispUnitStyleEN.con_StyleIdTitle:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (b.styleIdTitle == null) return -1;
          if (a.styleIdTitle == null) return 1;
          return b.styleIdTitle.localeCompare(a.styleIdTitle);
        };
      case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleContent:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          return b.fldDispUnitStyleContent.localeCompare(a.fldDispUnitStyleContent);
        };
      case clscss_FldDispUnitStyleEN.con_FldDispUnitFormat:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (b.fldDispUnitFormat == null) return -1;
          if (a.fldDispUnitFormat == null) return 1;
          return b.fldDispUnitFormat.localeCompare(a.fldDispUnitFormat);
        };
      case clscss_FldDispUnitStyleEN.con_CtlTypeId:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          return b.ctlTypeId.localeCompare(a.ctlTypeId);
        };
      case clscss_FldDispUnitStyleEN.con_OrderNum:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          return b.orderNum - a.orderNum;
        };
      case clscss_FldDispUnitStyleEN.con_DeletedDate:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (b.deletedDate == null) return -1;
          if (a.deletedDate == null) return 1;
          return b.deletedDate.localeCompare(a.deletedDate);
        };
      case clscss_FldDispUnitStyleEN.con_IsDeleted:
        return (b: clscss_FldDispUnitStyleEN) => {
          if (b.isDeleted == true) return 1;
          else return -1;
        };
      case clscss_FldDispUnitStyleEN.con_UpdDate:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clscss_FldDispUnitStyleEN.con_UpdUser:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clscss_FldDispUnitStyleEN.con_Memo:
        return (a: clscss_FldDispUnitStyleEN, b: clscss_FldDispUnitStyleEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[css_FldDispUnitStyle]中不存在!(in ${css_FldDispUnitStyle_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strFldDispUnitStyleId:所给的关键字
 * @returns 对象
 */
export async function css_FldDispUnitStyle_GetNameByFldDispUnitStyleIdCache(
  strFldDispUnitStyleId: string,
) {
  if (IsNullOrEmpty(strFldDispUnitStyleId) == true) {
    const strMsg = Format(
      '参数:[strFldDispUnitStyleId]不能为空!(In clscss_FldDispUnitStyleWApi.GetNameByFldDispUnitStyleIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strFldDispUnitStyleId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strFldDispUnitStyleId]的长度:[{0}]不正确!(clscss_FldDispUnitStyleWApi.GetNameByFldDispUnitStyleIdCache)',
      strFldDispUnitStyleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrcss_FldDispUnitStyleObjLstCache = await css_FldDispUnitStyle_GetObjLstCache();
  if (arrcss_FldDispUnitStyleObjLstCache == null) return '';
  try {
    const arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleObjLstCache.filter(
      (x) => x.fldDispUnitStyleId == strFldDispUnitStyleId,
    );
    let objcss_FldDispUnitStyle: clscss_FldDispUnitStyleEN;
    if (arrcss_FldDispUnitStyleSel.length > 0) {
      objcss_FldDispUnitStyle = arrcss_FldDispUnitStyleSel[0];
      return objcss_FldDispUnitStyle.fldDispUnitStyleName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strFldDispUnitStyleId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function css_FldDispUnitStyle_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId:
      return (obj: clscss_FldDispUnitStyleEN) => {
        return obj.fldDispUnitStyleId === value;
      };
    case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName:
      return (obj: clscss_FldDispUnitStyleEN) => {
        return obj.fldDispUnitStyleName === value;
      };
    case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleDesc:
      return (obj: clscss_FldDispUnitStyleEN) => {
        return obj.fldDispUnitStyleDesc === value;
      };
    case clscss_FldDispUnitStyleEN.con_StyleIdContent:
      return (obj: clscss_FldDispUnitStyleEN) => {
        return obj.styleIdContent === value;
      };
    case clscss_FldDispUnitStyleEN.con_StyleIdTitle:
      return (obj: clscss_FldDispUnitStyleEN) => {
        return obj.styleIdTitle === value;
      };
    case clscss_FldDispUnitStyleEN.con_FldDispUnitStyleContent:
      return (obj: clscss_FldDispUnitStyleEN) => {
        return obj.fldDispUnitStyleContent === value;
      };
    case clscss_FldDispUnitStyleEN.con_FldDispUnitFormat:
      return (obj: clscss_FldDispUnitStyleEN) => {
        return obj.fldDispUnitFormat === value;
      };
    case clscss_FldDispUnitStyleEN.con_CtlTypeId:
      return (obj: clscss_FldDispUnitStyleEN) => {
        return obj.ctlTypeId === value;
      };
    case clscss_FldDispUnitStyleEN.con_OrderNum:
      return (obj: clscss_FldDispUnitStyleEN) => {
        return obj.orderNum === value;
      };
    case clscss_FldDispUnitStyleEN.con_DeletedDate:
      return (obj: clscss_FldDispUnitStyleEN) => {
        return obj.deletedDate === value;
      };
    case clscss_FldDispUnitStyleEN.con_IsDeleted:
      return (obj: clscss_FldDispUnitStyleEN) => {
        return obj.isDeleted === value;
      };
    case clscss_FldDispUnitStyleEN.con_UpdDate:
      return (obj: clscss_FldDispUnitStyleEN) => {
        return obj.updDate === value;
      };
    case clscss_FldDispUnitStyleEN.con_UpdUser:
      return (obj: clscss_FldDispUnitStyleEN) => {
        return obj.updUser === value;
      };
    case clscss_FldDispUnitStyleEN.con_Memo:
      return (obj: clscss_FldDispUnitStyleEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[css_FldDispUnitStyle]中不存在!(in ${css_FldDispUnitStyle_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function css_FldDispUnitStyle_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clscss_FldDispUnitStyleEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clscss_FldDispUnitStyleEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strFldDispUnitStyleId = strInValue;
  if (IsNullOrEmpty(strFldDispUnitStyleId) == true) {
    return '';
  }
  const objcss_FldDispUnitStyle = await css_FldDispUnitStyle_GetObjByFldDispUnitStyleIdCache(
    strFldDispUnitStyleId,
  );
  if (objcss_FldDispUnitStyle == null) return '';
  if (objcss_FldDispUnitStyle.GetFldValue(strOutFldName) == null) return '';
  return objcss_FldDispUnitStyle.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function css_FldDispUnitStyle_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrcss_FldDispUnitStyle = await css_FldDispUnitStyle_GetObjLstCache();
  if (arrcss_FldDispUnitStyle == null) return [];
  let arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyle;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrcss_FldDispUnitStyleSel.length == 0) return [];
  return arrcss_FldDispUnitStyleSel.map((x) => x.fldDispUnitStyleId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function css_FldDispUnitStyle_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function css_FldDispUnitStyle_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
export async function css_FldDispUnitStyle_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
export async function css_FldDispUnitStyle_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clscss_FldDispUnitStyleEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
      const objcss_FldDispUnitStyle = css_FldDispUnitStyle_GetObjFromJsonObj(returnObj);
      return objcss_FldDispUnitStyle;
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
export async function css_FldDispUnitStyle_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clscss_FldDispUnitStyleEN._CurrTabName;
  if (IsNullOrEmpty(clscss_FldDispUnitStyleEN.WhereFormat) == false) {
    strWhereCond = clscss_FldDispUnitStyleEN.WhereFormat;
  }
  if (IsNullOrEmpty(clscss_FldDispUnitStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscss_FldDispUnitStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrcss_FldDispUnitStyleExObjLstCache: Array<clscss_FldDispUnitStyleEN> =
      CacheHelper.Get(strKey);
    const arrcss_FldDispUnitStyleObjLstT = css_FldDispUnitStyle_GetObjLstByJSONObjLst(
      arrcss_FldDispUnitStyleExObjLstCache,
    );
    return arrcss_FldDispUnitStyleObjLstT;
  }
  try {
    const arrcss_FldDispUnitStyleExObjLst = await css_FldDispUnitStyle_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrcss_FldDispUnitStyleExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcss_FldDispUnitStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrcss_FldDispUnitStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      css_FldDispUnitStyle_ConstructorName,
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
export async function css_FldDispUnitStyle_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clscss_FldDispUnitStyleEN._CurrTabName;
  if (IsNullOrEmpty(clscss_FldDispUnitStyleEN.WhereFormat) == false) {
    strWhereCond = clscss_FldDispUnitStyleEN.WhereFormat;
  }
  if (IsNullOrEmpty(clscss_FldDispUnitStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscss_FldDispUnitStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrcss_FldDispUnitStyleExObjLstCache: Array<clscss_FldDispUnitStyleEN> =
      JSON.parse(strTempObjLst);
    const arrcss_FldDispUnitStyleObjLstT = css_FldDispUnitStyle_GetObjLstByJSONObjLst(
      arrcss_FldDispUnitStyleExObjLstCache,
    );
    return arrcss_FldDispUnitStyleObjLstT;
  }
  try {
    const arrcss_FldDispUnitStyleExObjLst = await css_FldDispUnitStyle_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrcss_FldDispUnitStyleExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcss_FldDispUnitStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrcss_FldDispUnitStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      css_FldDispUnitStyle_ConstructorName,
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
export async function css_FldDispUnitStyle_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clscss_FldDispUnitStyleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrcss_FldDispUnitStyleObjLstCache: Array<clscss_FldDispUnitStyleEN> =
      JSON.parse(strTempObjLst);
    return arrcss_FldDispUnitStyleObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function css_FldDispUnitStyle_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clscss_FldDispUnitStyleEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
          css_FldDispUnitStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_FldDispUnitStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
export async function css_FldDispUnitStyle_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clscss_FldDispUnitStyleEN._CurrTabName;
  if (IsNullOrEmpty(clscss_FldDispUnitStyleEN.WhereFormat) == false) {
    strWhereCond = clscss_FldDispUnitStyleEN.WhereFormat;
  }
  if (IsNullOrEmpty(clscss_FldDispUnitStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscss_FldDispUnitStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrcss_FldDispUnitStyleExObjLstCache: Array<clscss_FldDispUnitStyleEN> =
      JSON.parse(strTempObjLst);
    const arrcss_FldDispUnitStyleObjLstT = css_FldDispUnitStyle_GetObjLstByJSONObjLst(
      arrcss_FldDispUnitStyleExObjLstCache,
    );
    return arrcss_FldDispUnitStyleObjLstT;
  }
  try {
    const arrcss_FldDispUnitStyleExObjLst = await css_FldDispUnitStyle_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrcss_FldDispUnitStyleExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcss_FldDispUnitStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrcss_FldDispUnitStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      css_FldDispUnitStyle_ConstructorName,
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
export async function css_FldDispUnitStyle_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clscss_FldDispUnitStyleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrcss_FldDispUnitStyleObjLstCache: Array<clscss_FldDispUnitStyleEN> =
      JSON.parse(strTempObjLst);
    return arrcss_FldDispUnitStyleObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function css_FldDispUnitStyle_GetObjLstCache(): Promise<
  Array<clscss_FldDispUnitStyleEN>
> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrcss_FldDispUnitStyleObjLstCache;
  switch (clscss_FldDispUnitStyleEN.CacheModeId) {
    case '04': //sessionStorage
      arrcss_FldDispUnitStyleObjLstCache = await css_FldDispUnitStyle_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrcss_FldDispUnitStyleObjLstCache = await css_FldDispUnitStyle_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrcss_FldDispUnitStyleObjLstCache = await css_FldDispUnitStyle_GetObjLstClientCache();
      break;
    default:
      arrcss_FldDispUnitStyleObjLstCache = await css_FldDispUnitStyle_GetObjLstClientCache();
      break;
  }
  return arrcss_FldDispUnitStyleObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function css_FldDispUnitStyle_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrcss_FldDispUnitStyleObjLstCache;
  switch (clscss_FldDispUnitStyleEN.CacheModeId) {
    case '04': //sessionStorage
      arrcss_FldDispUnitStyleObjLstCache =
        await css_FldDispUnitStyle_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrcss_FldDispUnitStyleObjLstCache =
        await css_FldDispUnitStyle_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrcss_FldDispUnitStyleObjLstCache = null;
      break;
    default:
      arrcss_FldDispUnitStyleObjLstCache = null;
      break;
  }
  return arrcss_FldDispUnitStyleObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrFldDispUnitStyleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function css_FldDispUnitStyle_GetSubObjLstCache(
  objcss_FldDispUnitStyleCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrcss_FldDispUnitStyleObjLstCache = await css_FldDispUnitStyle_GetObjLstCache();
  let arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleObjLstCache;
  if (objcss_FldDispUnitStyleCond.GetConditions().length == 0) return arrcss_FldDispUnitStyleSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objcss_FldDispUnitStyleCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrcss_FldDispUnitStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objcss_FldDispUnitStyleCond),
      css_FldDispUnitStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscss_FldDispUnitStyleEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrFldDispUnitStyleId:关键字列表
 * @returns 对象列表
 **/
export async function css_FldDispUnitStyle_GetObjLstByFldDispUnitStyleIdLstAsync(
  arrFldDispUnitStyleId: Array<string>,
): Promise<Array<clscss_FldDispUnitStyleEN>> {
  const strThisFuncName = 'GetObjLstByFldDispUnitStyleIdLstAsync';
  const strAction = 'GetObjLstByFldDispUnitStyleIdLst';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFldDispUnitStyleId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          css_FldDispUnitStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_FldDispUnitStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * @param arrstrFldDispUnitStyleIdLst:关键字列表
 * @returns 对象列表
 */
export async function css_FldDispUnitStyle_GetObjLstByFldDispUnitStyleIdLstCache(
  arrFldDispUnitStyleIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByFldDispUnitStyleIdLstCache';
  try {
    const arrcss_FldDispUnitStyleObjLstCache = await css_FldDispUnitStyle_GetObjLstCache();
    const arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleObjLstCache.filter(
      (x) => arrFldDispUnitStyleIdLst.indexOf(x.fldDispUnitStyleId) > -1,
    );
    return arrcss_FldDispUnitStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrFldDispUnitStyleIdLst.join(','),
      css_FldDispUnitStyle_ConstructorName,
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
export async function css_FldDispUnitStyle_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clscss_FldDispUnitStyleEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
          css_FldDispUnitStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_FldDispUnitStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
export async function css_FldDispUnitStyle_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clscss_FldDispUnitStyleEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
          css_FldDispUnitStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_FldDispUnitStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
export async function css_FldDispUnitStyle_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clscss_FldDispUnitStyleEN>();
  const arrcss_FldDispUnitStyleObjLstCache = await css_FldDispUnitStyle_GetObjLstCache();
  if (arrcss_FldDispUnitStyleObjLstCache.length == 0) return arrcss_FldDispUnitStyleObjLstCache;
  let arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleObjLstCache;
  const objcss_FldDispUnitStyleCond = objPagerPara.conditionCollection;
  if (objcss_FldDispUnitStyleCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clscss_FldDispUnitStyleEN>();
  }
  //console.log("clscss_FldDispUnitStyleWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objcss_FldDispUnitStyleCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcss_FldDispUnitStyleSel.length == 0) return arrcss_FldDispUnitStyleSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.sort(
        css_FldDispUnitStyle_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.sort(objPagerPara.sortFun);
    }
    arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.slice(intStart, intEnd);
    return arrcss_FldDispUnitStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      css_FldDispUnitStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscss_FldDispUnitStyleEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function css_FldDispUnitStyle_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscss_FldDispUnitStyleEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clscss_FldDispUnitStyleEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
          css_FldDispUnitStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_FldDispUnitStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * @param strFldDispUnitStyleId:关键字
 * @returns 获取删除的结果
 **/
export async function css_FldDispUnitStyle_DelRecordAsync(
  strFldDispUnitStyleId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strFldDispUnitStyleId);

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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * @param arrFldDispUnitStyleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function css_FldDispUnitStyle_Delcss_FldDispUnitStylesAsync(
  arrFldDispUnitStyleId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delcss_FldDispUnitStylesAsync';
  const strAction = 'Delcss_FldDispUnitStyles';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFldDispUnitStyleId, config);
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function css_FldDispUnitStyle_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clscss_FldDispUnitStyleENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrcss_FldDispUnitStyleObjLst = await css_FldDispUnitStyle_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clscss_FldDispUnitStyleENEx>();
  const arrcss_FldDispUnitStyleExObjLst = arrcss_FldDispUnitStyleObjLst.map((obj) => {
    const cacheKey = `${obj.fldDispUnitStyleId}`;
    if (css_FldDispUnitStyleCache[cacheKey]) {
      const oldObj = css_FldDispUnitStyleCache[cacheKey];
      return oldObj;
    } else {
      const newObj = css_FldDispUnitStyle_CopyToEx(obj);
      arrNewObj.push(newObj);
      css_FldDispUnitStyleCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await css_FldDispUnitStyle_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscss_FldDispUnitStyleEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrcss_FldDispUnitStyleExObjLst) {
      await css_FldDispUnitStyle_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.fldDispUnitStyleId}`;
      css_FldDispUnitStyleCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrcss_FldDispUnitStyleExObjLst.length == 0) return arrcss_FldDispUnitStyleExObjLst;
  let arrcss_FldDispUnitStyleSel: Array<clscss_FldDispUnitStyleENEx> =
    arrcss_FldDispUnitStyleExObjLst;
  const objcss_FldDispUnitStyleCond = objPagerPara.conditionCollection;
  if (objcss_FldDispUnitStyleCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrcss_FldDispUnitStyleExObjLst;
  }
  try {
    for (const objCondition of objcss_FldDispUnitStyleCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcss_FldDispUnitStyleSel.length == 0) return arrcss_FldDispUnitStyleSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.sort(
        css_FldDispUnitStyle_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.sort(objPagerPara.sortFun);
    }
    arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.slice(intStart, intEnd);
    return arrcss_FldDispUnitStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      css_FldDispUnitStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscss_FldDispUnitStyleENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objcss_FldDispUnitStyleENS:源对象
 * @returns 目标对象=>clscss_FldDispUnitStyleEN:objcss_FldDispUnitStyleENT
 **/
export function css_FldDispUnitStyle_CopyToEx(
  objcss_FldDispUnitStyleENS: clscss_FldDispUnitStyleEN,
): clscss_FldDispUnitStyleENEx {
  const strThisFuncName = css_FldDispUnitStyle_CopyToEx.name;
  const objcss_FldDispUnitStyleENT = new clscss_FldDispUnitStyleENEx();
  try {
    ObjectAssign(objcss_FldDispUnitStyleENT, objcss_FldDispUnitStyleENS);
    return objcss_FldDispUnitStyleENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_FldDispUnitStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcss_FldDispUnitStyleENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function css_FldDispUnitStyle_FuncMapByFldName(
  strFldName: string,
  objcss_FldDispUnitStyleEx: clscss_FldDispUnitStyleENEx,
) {
  const strThisFuncName = css_FldDispUnitStyle_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clscss_FldDispUnitStyleEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscss_FldDispUnitStyleENEx.con_CtlTypeName:
      return css_FldDispUnitStyle_FuncMapCtlTypeName(objcss_FldDispUnitStyleEx);
    case clscss_FldDispUnitStyleENEx.con_StyleNameContent:
      return css_FldDispUnitStyle_FuncMapStyleNameContent(objcss_FldDispUnitStyleEx);
    case clscss_FldDispUnitStyleENEx.con_StyleNameTitle:
      return css_FldDispUnitStyle_FuncMapStyleNameTitle(objcss_FldDispUnitStyleEx);
    case clscss_FldDispUnitStyleENEx.con_DuFldDispUnitStyleName:
      return css_FldDispUnitStyle_FuncMapDuFldDispUnitStyleName(objcss_FldDispUnitStyleEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function css_FldDispUnitStyle_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscss_FldDispUnitStyleENEx.con_CtlTypeName:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      case clscss_FldDispUnitStyleENEx.con_StyleNameContent:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          if (a.styleNameContent === null && b.styleNameContent === null) return 0;
          if (a.styleNameContent === null) return -1;
          if (b.styleNameContent === null) return 1;
          return a.styleNameContent.localeCompare(b.styleNameContent);
        };
      case clscss_FldDispUnitStyleENEx.con_StyleNameTitle:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          if (a.styleNameTitle === null && b.styleNameTitle === null) return 0;
          if (a.styleNameTitle === null) return -1;
          if (b.styleNameTitle === null) return 1;
          return a.styleNameTitle.localeCompare(b.styleNameTitle);
        };
      case clscss_FldDispUnitStyleENEx.con_FldDispUnitFormatDisp:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          if (a.fldDispUnitFormatDisp === null && b.fldDispUnitFormatDisp === null) return 0;
          if (a.fldDispUnitFormatDisp === null) return -1;
          if (b.fldDispUnitFormatDisp === null) return 1;
          return a.fldDispUnitFormatDisp.localeCompare(b.fldDispUnitFormatDisp);
        };
      case clscss_FldDispUnitStyleENEx.con_DuFldDispUnitStyleName:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          if (a.duFldDispUnitStyleName === null && b.duFldDispUnitStyleName === null) return 0;
          if (a.duFldDispUnitStyleName === null) return -1;
          if (b.duFldDispUnitStyleName === null) return 1;
          return a.duFldDispUnitStyleName.localeCompare(b.duFldDispUnitStyleName);
        };
      default:
        return css_FldDispUnitStyle_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clscss_FldDispUnitStyleENEx.con_CtlTypeName:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      case clscss_FldDispUnitStyleENEx.con_StyleNameContent:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          if (a.styleNameContent === null && b.styleNameContent === null) return 0;
          if (a.styleNameContent === null) return 1;
          if (b.styleNameContent === null) return -1;
          return b.styleNameContent.localeCompare(a.styleNameContent);
        };
      case clscss_FldDispUnitStyleENEx.con_StyleNameTitle:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          if (a.styleNameTitle === null && b.styleNameTitle === null) return 0;
          if (a.styleNameTitle === null) return 1;
          if (b.styleNameTitle === null) return -1;
          return b.styleNameTitle.localeCompare(a.styleNameTitle);
        };
      case clscss_FldDispUnitStyleENEx.con_FldDispUnitFormatDisp:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          if (a.fldDispUnitFormatDisp === null && b.fldDispUnitFormatDisp === null) return 0;
          if (a.fldDispUnitFormatDisp === null) return 1;
          if (b.fldDispUnitFormatDisp === null) return -1;
          return b.fldDispUnitFormatDisp.localeCompare(a.fldDispUnitFormatDisp);
        };
      case clscss_FldDispUnitStyleENEx.con_DuFldDispUnitStyleName:
        return (a: clscss_FldDispUnitStyleENEx, b: clscss_FldDispUnitStyleENEx) => {
          if (a.duFldDispUnitStyleName === null && b.duFldDispUnitStyleName === null) return 0;
          if (a.duFldDispUnitStyleName === null) return 1;
          if (b.duFldDispUnitStyleName === null) return -1;
          return b.duFldDispUnitStyleName.localeCompare(a.duFldDispUnitStyleName);
        };
      default:
        return css_FldDispUnitStyle_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcss_FldDispUnitStyleS:源对象
 **/
export async function css_FldDispUnitStyle_FuncMapCtlTypeName(
  objcss_FldDispUnitStyle: clscss_FldDispUnitStyleENEx,
) {
  const strThisFuncName = css_FldDispUnitStyle_FuncMapCtlTypeName.name;
  try {
    if (IsNullOrEmpty(objcss_FldDispUnitStyle.ctlTypeName) == true) {
      const CtlTypeCtlTypeId = objcss_FldDispUnitStyle.ctlTypeId;
      const CtlTypeCtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlTypeCtlTypeId,
      );
      objcss_FldDispUnitStyle.ctlTypeName = CtlTypeCtlTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001301)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_FldDispUnitStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcss_FldDispUnitStyleS:源对象
 **/
export async function css_FldDispUnitStyle_FuncMapStyleNameContent(
  objcss_FldDispUnitStyle: clscss_FldDispUnitStyleENEx,
) {
  const strThisFuncName = css_FldDispUnitStyle_FuncMapStyleNameContent.name;
  try {
    if (IsNullOrEmpty(objcss_FldDispUnitStyle.styleNameContent) == true) {
      const cssStyleStyleId = objcss_FldDispUnitStyle.styleIdContent;
      const cssStyleStyleName = await css_Style_func(
        clscss_StyleEN.con_StyleId,
        clscss_StyleEN.con_StyleName,
        cssStyleStyleId,
      );
      objcss_FldDispUnitStyle.styleNameContent = cssStyleStyleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001327)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_FldDispUnitStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcss_FldDispUnitStyleS:源对象
 **/
export async function css_FldDispUnitStyle_FuncMapStyleNameTitle(
  objcss_FldDispUnitStyle: clscss_FldDispUnitStyleENEx,
) {
  const strThisFuncName = css_FldDispUnitStyle_FuncMapStyleNameTitle.name;
  try {
    if (IsNullOrEmpty(objcss_FldDispUnitStyle.styleNameTitle) == true) {
      const cssStyleStyleId = objcss_FldDispUnitStyle.styleIdTitle;
      const cssStyleStyleName = await css_Style_func(
        clscss_StyleEN.con_StyleId,
        clscss_StyleEN.con_StyleName,
        cssStyleStyleId,
      );
      objcss_FldDispUnitStyle.styleNameTitle = cssStyleStyleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001328)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_FldDispUnitStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 显示一个字段的单元信息
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcss_FldDispUnitStyleS:源对象
 **/
export async function css_FldDispUnitStyle_FuncMapDuFldDispUnitStyleName(
  objcss_FldDispUnitStyle: clscss_FldDispUnitStyleENEx,
) {
  const strThisFuncName = css_FldDispUnitStyle_FuncMapDuFldDispUnitStyleName.name;
  try {
    if (IsNullOrEmpty(objcss_FldDispUnitStyle.duFldDispUnitStyleName) == true) {
      const spnCurr = GetSpan_Empty('col-form-label text-right');
      const spnStyle_Title = GetSpan_Empty('text-secondary font-weight-bold'); //;
      spnStyle_Title.innerHTML = '字段显示单元样式名称';
      const spnStyle_Content = GetSpan_Empty('text-black'); //; await css_StyleEx_GetHtmlElementByStyleId(objCss_FldDispUnitStyle.styleId_Content, strContent);
      spnStyle_Content.innerHTML = objcss_FldDispUnitStyle.fldDispUnitStyleName;
      spnCurr.innerHTML = Format('{0}:{1}', spnStyle_Title.outerHTML, spnStyle_Content.outerHTML);
      objcss_FldDispUnitStyle.duFldDispUnitStyleName = spnCurr.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001329)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_FldDispUnitStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字列表按标志删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordBySignAsync)
 * @param arrFldDispUnitStyleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function css_FldDispUnitStyle_DelRecordBySignAsync(
  arrFldDispUnitStyleId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelRecordBySignAsync';
  const strAction = 'DelRecordBySign';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFldDispUnitStyleId, config);
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * 根据关键字列表按标志恢复记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UnDelRecordBySignAsync)
 * @param arrFldDispUnitStyleId:关键字列表
 * @returns 实际恢复记录的个数
 **/
export async function css_FldDispUnitStyle_UnDelRecordBySignAsync(
  arrFldDispUnitStyleId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'UnDelRecordBySignAsync';
  const strAction = 'UnDelRecordBySign';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrFldDispUnitStyleId, config);
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
export async function css_FldDispUnitStyle_Delcss_FldDispUnitStylesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delcss_FldDispUnitStylesByCondAsync';
  const strAction = 'Delcss_FldDispUnitStylesByCond';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * @param objcss_FldDispUnitStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_FldDispUnitStyle_AddNewRecordAsync(
  objcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objcss_FldDispUnitStyleEN);
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_FldDispUnitStyleEN, config);
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * @param objcss_FldDispUnitStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_FldDispUnitStyle_AddNewRecordWithMaxIdAsync(
  objcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_FldDispUnitStyleEN, config);
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * @param objcss_FldDispUnitStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_FldDispUnitStyle_GoTopAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * @param objcss_FldDispUnitStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_FldDispUnitStyle_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objcss_FldDispUnitStyleEN);
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * @param objcss_FldDispUnitStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_FldDispUnitStyle_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objcss_FldDispUnitStyleEN);
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function css_FldDispUnitStyle_AddNewObjSave(
  objcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    css_FldDispUnitStyle_CheckPropertyNew(objcss_FldDispUnitStyleEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${css_FldDispUnitStyle_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await css_FldDispUnitStyle_CheckUniCond4Add(objcss_FldDispUnitStyleEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await css_FldDispUnitStyle_AddNewRecordWithMaxIdAsync(
      objcss_FldDispUnitStyleEN,
    );
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      css_FldDispUnitStyle_ReFreshCache();
    } else {
      const strInfo = `添加[字段显示单元样式(css_FldDispUnitStyle)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${css_FldDispUnitStyle_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function css_FldDispUnitStyle_CheckUniCond4Add(
  objcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
): Promise<boolean> {
  const strUniquenessCondition = css_FldDispUnitStyle_GetUniCondStr(objcss_FldDispUnitStyleEN);
  const bolIsExistCondition = await css_FldDispUnitStyle_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Update)
 **/
export async function css_FldDispUnitStyle_CheckUniCond4Update(
  objcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
): Promise<boolean> {
  const strUniquenessCondition =
    css_FldDispUnitStyle_GetUniCondStr4Update(objcss_FldDispUnitStyleEN);
  const bolIsExistCondition = await css_FldDispUnitStyle_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function css_FldDispUnitStyle_UpdateObjSave(
  objcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objcss_FldDispUnitStyleEN.sfUpdFldSetStr = objcss_FldDispUnitStyleEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objcss_FldDispUnitStyleEN.fldDispUnitStyleId == '' ||
    objcss_FldDispUnitStyleEN.fldDispUnitStyleId == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    css_FldDispUnitStyle_CheckProperty4Update(objcss_FldDispUnitStyleEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${css_FldDispUnitStyle_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await css_FldDispUnitStyle_CheckUniCond4Update(
      objcss_FldDispUnitStyleEN,
    );
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await css_FldDispUnitStyle_UpdateRecordAsync(objcss_FldDispUnitStyleEN);
    if (returnBool == true) {
      css_FldDispUnitStyle_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${css_FldDispUnitStyle_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objcss_FldDispUnitStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_FldDispUnitStyle_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objcss_FldDispUnitStyleEN);
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * @param objcss_FldDispUnitStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_FldDispUnitStyle_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objcss_FldDispUnitStyleEN);
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * @param objcss_FldDispUnitStyleEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function css_FldDispUnitStyle_AddNewRecordWithReturnKeyAsync(
  objcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_FldDispUnitStyleEN, config);
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * @param objcss_FldDispUnitStyleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function css_FldDispUnitStyle_UpdateRecordAsync(
  objcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objcss_FldDispUnitStyleEN.sfUpdFldSetStr === undefined ||
    objcss_FldDispUnitStyleEN.sfUpdFldSetStr === null ||
    objcss_FldDispUnitStyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcss_FldDispUnitStyleEN.fldDispUnitStyleId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_FldDispUnitStyleEN, config);
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * 调用WebApi来编辑记录（存在就修改，不存在就添加）,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_EditRecordExAsync)
 * @param objcss_FldDispUnitStyleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function css_FldDispUnitStyle_EditRecordExAsync(
  objcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objcss_FldDispUnitStyleEN.sfUpdFldSetStr === undefined ||
    objcss_FldDispUnitStyleEN.sfUpdFldSetStr === null ||
    objcss_FldDispUnitStyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcss_FldDispUnitStyleEN.fldDispUnitStyleId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_FldDispUnitStyleEN, config);
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * @param objcss_FldDispUnitStyleEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function css_FldDispUnitStyle_UpdateWithConditionAsync(
  objcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objcss_FldDispUnitStyleEN.sfUpdFldSetStr === undefined ||
    objcss_FldDispUnitStyleEN.sfUpdFldSetStr === null ||
    objcss_FldDispUnitStyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcss_FldDispUnitStyleEN.fldDispUnitStyleId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);
  objcss_FldDispUnitStyleEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_FldDispUnitStyleEN, config);
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * @param objstrFldDispUnitStyleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function css_FldDispUnitStyle_IsExistRecordCache(
  objcss_FldDispUnitStyleCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrcss_FldDispUnitStyleObjLstCache = await css_FldDispUnitStyle_GetObjLstCache();
  if (arrcss_FldDispUnitStyleObjLstCache == null) return false;
  let arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleObjLstCache;
  if (objcss_FldDispUnitStyleCond.GetConditions().length == 0)
    return arrcss_FldDispUnitStyleSel.length > 0 ? true : false;
  try {
    for (const objCondition of objcss_FldDispUnitStyleCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcss_FldDispUnitStyleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objcss_FldDispUnitStyleCond),
      css_FldDispUnitStyle_ConstructorName,
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
export async function css_FldDispUnitStyle_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * @param strFldDispUnitStyleId:所给的关键字
 * @returns 对象
 */
export async function css_FldDispUnitStyle_IsExistCache(strFldDispUnitStyleId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrcss_FldDispUnitStyleObjLstCache = await css_FldDispUnitStyle_GetObjLstCache();
  if (arrcss_FldDispUnitStyleObjLstCache == null) return false;
  try {
    const arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleObjLstCache.filter(
      (x) => x.fldDispUnitStyleId == strFldDispUnitStyleId,
    );
    if (arrcss_FldDispUnitStyleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strFldDispUnitStyleId,
      css_FldDispUnitStyle_ConstructorName,
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
 * @param strFldDispUnitStyleId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function css_FldDispUnitStyle_IsExistAsync(
  strFldDispUnitStyleId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldDispUnitStyleId,
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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
export async function css_FldDispUnitStyle_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
 * @param objcss_FldDispUnitStyleCond:条件对象
 * @returns 对象列表记录数
 */
export async function css_FldDispUnitStyle_GetRecCountByCondCache(
  objcss_FldDispUnitStyleCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrcss_FldDispUnitStyleObjLstCache = await css_FldDispUnitStyle_GetObjLstCache();
  if (arrcss_FldDispUnitStyleObjLstCache == null) return 0;
  let arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleObjLstCache;
  if (objcss_FldDispUnitStyleCond.GetConditions().length == 0)
    return arrcss_FldDispUnitStyleSel.length;
  try {
    for (const objCondition of objcss_FldDispUnitStyleCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcss_FldDispUnitStyleSel = arrcss_FldDispUnitStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrcss_FldDispUnitStyleSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objcss_FldDispUnitStyleCond),
      css_FldDispUnitStyle_ConstructorName,
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
export async function css_FldDispUnitStyle_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
export async function css_FldDispUnitStyle_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(css_FldDispUnitStyle_Controller, strAction);

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
        css_FldDispUnitStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_FldDispUnitStyle_ConstructorName,
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
export function css_FldDispUnitStyle_GetWebApiUrl(
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
export function css_FldDispUnitStyle_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clscss_FldDispUnitStyleEN._CurrTabName;
  switch (clscss_FldDispUnitStyleEN.CacheModeId) {
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
  clscss_FldDispUnitStyleEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function css_FldDispUnitStyle_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clscss_FldDispUnitStyleEN._CurrTabName;
    switch (clscss_FldDispUnitStyleEN.CacheModeId) {
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
    clscss_FldDispUnitStyleEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function css_FldDispUnitStyle_GetLastRefreshTime(): string {
  if (clscss_FldDispUnitStyleEN._RefreshTimeLst.length == 0) return '';
  return clscss_FldDispUnitStyleEN._RefreshTimeLst[
    clscss_FldDispUnitStyleEN._RefreshTimeLst.length - 1
  ];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCtlTypeId:
*/
export async function css_FldDispUnitStyle_BindDdl_FldDispUnitStyleIdByCtlTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strCtlTypeId: string,
) {
  if (IsNullOrEmpty(strCtlTypeId) == true) {
    const strMsg = Format(
      '参数:[strCtlTypeId]不能为空！(In clscss_FldDispUnitStyleWApi.BindDdl_FldDispUnitStyleIdByCtlTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCtlTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strCtlTypeId]的长度:[{0}]不正确！(clscss_FldDispUnitStyleWApi.BindDdl_FldDispUnitStyleIdByCtlTypeIdInDiv)',
      strCtlTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format(
      '下拉框：{0} 不存在!(In BindDdl_FldDispUnitStyleIdByCtlTypeIdInDiv)',
      strDdlName,
    );
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FldDispUnitStyleIdByCtlTypeIdInDivCache");
  let arrObjLstSel = await css_FldDispUnitStyle_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.ctlTypeId == strCtlTypeId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId,
    clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName,
    '字段显示单元样式...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCtlTypeId:
*/
export async function css_FldDispUnitStyle_GetArrcss_FldDispUnitStyleByCtlTypeId(
  strCtlTypeId: string,
) {
  if (IsNullOrEmpty(strCtlTypeId) == true) {
    const strMsg = Format(
      '参数:[strCtlTypeId]不能为空！(In clscss_FldDispUnitStyleWApi.BindDdl_FldDispUnitStyleIdByCtlTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCtlTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strCtlTypeId]的长度:[{0}]不正确！(clscss_FldDispUnitStyleWApi.BindDdl_FldDispUnitStyleIdByCtlTypeIdInDiv)',
      strCtlTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_FldDispUnitStyleIdByCtlTypeIdInDivCache");
  const arrcss_FldDispUnitStyle = new Array<clscss_FldDispUnitStyleEN>();
  let arrObjLstSel = await css_FldDispUnitStyle_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.ctlTypeId == strCtlTypeId);
  const obj0 = new clscss_FldDispUnitStyleEN();
  obj0.fldDispUnitStyleId = '0';
  obj0.fldDispUnitStyleName = '选字段显示单元样式...';
  arrcss_FldDispUnitStyle.push(obj0);
  arrObjLstSel.forEach((x) => arrcss_FldDispUnitStyle.push(x));
  return arrcss_FldDispUnitStyle;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function css_FldDispUnitStyle_CheckPropertyNew(
  pobjcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[字段显示单元样式名称]不能为空(In 字段显示单元样式)!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent) === true) {
    throw new Error(
      `(errid:Watl000411)字段[样式内容]不能为空(In 字段显示单元样式)!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.ctlTypeId) === true ||
    pobjcss_FldDispUnitStyleEN.ctlTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[控件类型号]不能为空(In 字段显示单元样式)!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleId) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段显示单元样式Id(fldDispUnitStyleId)]的长度不能超过8(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleId}(clscss_FldDispUnitStyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段显示单元样式名称(fldDispUnitStyleName)]的长度不能超过50(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName}(clscss_FldDispUnitStyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleDesc) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleDesc) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[样式描述(fldDispUnitStyleDesc)]的长度不能超过1000(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleDesc}(clscss_FldDispUnitStyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.styleIdContent) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.styleIdContent) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[内容样式Id(styleIdContent)]的长度不能超过8(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.styleIdContent}(clscss_FldDispUnitStyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.styleIdTitle) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.styleIdTitle) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[标题样式Id(styleIdTitle)]的长度不能超过8(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.styleIdTitle}(clscss_FldDispUnitStyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[样式内容(fldDispUnitStyleContent)]的长度不能超过1000(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent}(clscss_FldDispUnitStyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitFormat) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.fldDispUnitFormat) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段显示单元格式(fldDispUnitFormat)]的长度不能超过1000(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.fldDispUnitFormat}(clscss_FldDispUnitStyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.ctlTypeId) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.ctlTypeId}(clscss_FldDispUnitStyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.deletedDate) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.deletedDate) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[删除日期(deletedDate)]的长度不能超过50(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.deletedDate}(clscss_FldDispUnitStyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.updDate) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.updDate}(clscss_FldDispUnitStyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.updUser) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.updUser}(clscss_FldDispUnitStyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.memo) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.memo}(clscss_FldDispUnitStyleBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleId) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.fldDispUnitStyleId &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段显示单元样式Id(fldDispUnitStyleId)]的值:[${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleId}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段显示单元样式名称(fldDispUnitStyleName)]的值:[${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleDesc) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.fldDispUnitStyleDesc &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleDesc) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[样式描述(fldDispUnitStyleDesc)]的值:[${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleDesc}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.styleIdContent) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.styleIdContent &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.styleIdContent) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[内容样式Id(styleIdContent)]的值:[${pobjcss_FldDispUnitStyleEN.styleIdContent}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.styleIdTitle) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.styleIdTitle &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.styleIdTitle) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[标题样式Id(styleIdTitle)]的值:[${pobjcss_FldDispUnitStyleEN.styleIdTitle}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[样式内容(fldDispUnitStyleContent)]的值:[${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitFormat) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.fldDispUnitFormat &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.fldDispUnitFormat) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段显示单元格式(fldDispUnitFormat)]的值:[${pobjcss_FldDispUnitStyleEN.fldDispUnitFormat}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.ctlTypeId) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.ctlTypeId &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[控件类型号(ctlTypeId)]的值:[${pobjcss_FldDispUnitStyleEN.ctlTypeId}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjcss_FldDispUnitStyleEN.orderNum &&
    undefined !== pobjcss_FldDispUnitStyleEN.orderNum &&
    tzDataType.isNumber(pobjcss_FldDispUnitStyleEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjcss_FldDispUnitStyleEN.orderNum}], 非法,应该为数值型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.deletedDate) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.deletedDate &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.deletedDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[删除日期(deletedDate)]的值:[${pobjcss_FldDispUnitStyleEN.deletedDate}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjcss_FldDispUnitStyleEN.isDeleted &&
    undefined !== pobjcss_FldDispUnitStyleEN.isDeleted &&
    tzDataType.isBoolean(pobjcss_FldDispUnitStyleEN.isDeleted) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否删除(isDeleted)]的值:[${pobjcss_FldDispUnitStyleEN.isDeleted}], 非法,应该为布尔型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.updDate) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.updDate &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjcss_FldDispUnitStyleEN.updDate}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.updUser) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.updUser &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjcss_FldDispUnitStyleEN.updUser}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.memo) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.memo &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjcss_FldDispUnitStyleEN.memo}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.styleIdContent) == false &&
    pobjcss_FldDispUnitStyleEN.styleIdContent != '[nuull]' &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.styleIdContent) != 8
  ) {
    throw '(errid:Watl000415)字段[内容样式Id]作为外键字段,长度应该为8(In 字段显示单元样式)!(clscss_FldDispUnitStyleBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.styleIdTitle) == false &&
    pobjcss_FldDispUnitStyleEN.styleIdTitle != '[nuull]' &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.styleIdTitle) != 8
  ) {
    throw '(errid:Watl000415)字段[标题样式Id]作为外键字段,长度应该为8(In 字段显示单元样式)!(clscss_FldDispUnitStyleBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.ctlTypeId) == false &&
    pobjcss_FldDispUnitStyleEN.ctlTypeId != '[nuull]' &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.ctlTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[控件类型号]作为外键字段,长度应该为2(In 字段显示单元样式)!(clscss_FldDispUnitStyleBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function css_FldDispUnitStyle_CheckProperty4Update(
  pobjcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleId) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段显示单元样式Id(fldDispUnitStyleId)]的长度不能超过8(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleId}(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段显示单元样式名称(fldDispUnitStyleName)]的长度不能超过50(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName}(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleDesc) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleDesc) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[样式描述(fldDispUnitStyleDesc)]的长度不能超过1000(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleDesc}(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.styleIdContent) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.styleIdContent) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[内容样式Id(styleIdContent)]的长度不能超过8(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.styleIdContent}(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.styleIdTitle) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.styleIdTitle) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[标题样式Id(styleIdTitle)]的长度不能超过8(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.styleIdTitle}(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[样式内容(fldDispUnitStyleContent)]的长度不能超过1000(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent}(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitFormat) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.fldDispUnitFormat) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段显示单元格式(fldDispUnitFormat)]的长度不能超过1000(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.fldDispUnitFormat}(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.ctlTypeId) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.ctlTypeId}(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.deletedDate) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.deletedDate) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[删除日期(deletedDate)]的长度不能超过50(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.deletedDate}(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.updDate) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.updDate}(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.updUser) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.updUser}(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.memo) == false &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 字段显示单元样式(css_FldDispUnitStyle))!值:${pobjcss_FldDispUnitStyleEN.memo}(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleId) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.fldDispUnitStyleId &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段显示单元样式Id(fldDispUnitStyleId)]的值:[${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleId}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段显示单元样式名称(fldDispUnitStyleName)]的值:[${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleName}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleDesc) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.fldDispUnitStyleDesc &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleDesc) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[样式描述(fldDispUnitStyleDesc)]的值:[${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleDesc}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.styleIdContent) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.styleIdContent &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.styleIdContent) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[内容样式Id(styleIdContent)]的值:[${pobjcss_FldDispUnitStyleEN.styleIdContent}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.styleIdTitle) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.styleIdTitle &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.styleIdTitle) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[标题样式Id(styleIdTitle)]的值:[${pobjcss_FldDispUnitStyleEN.styleIdTitle}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[样式内容(fldDispUnitStyleContent)]的值:[${pobjcss_FldDispUnitStyleEN.fldDispUnitStyleContent}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.fldDispUnitFormat) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.fldDispUnitFormat &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.fldDispUnitFormat) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段显示单元格式(fldDispUnitFormat)]的值:[${pobjcss_FldDispUnitStyleEN.fldDispUnitFormat}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.ctlTypeId) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.ctlTypeId &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[控件类型号(ctlTypeId)]的值:[${pobjcss_FldDispUnitStyleEN.ctlTypeId}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjcss_FldDispUnitStyleEN.orderNum &&
    undefined !== pobjcss_FldDispUnitStyleEN.orderNum &&
    tzDataType.isNumber(pobjcss_FldDispUnitStyleEN.orderNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjcss_FldDispUnitStyleEN.orderNum}], 非法,应该为数值型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.deletedDate) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.deletedDate &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.deletedDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[删除日期(deletedDate)]的值:[${pobjcss_FldDispUnitStyleEN.deletedDate}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjcss_FldDispUnitStyleEN.isDeleted &&
    undefined !== pobjcss_FldDispUnitStyleEN.isDeleted &&
    tzDataType.isBoolean(pobjcss_FldDispUnitStyleEN.isDeleted) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否删除(isDeleted)]的值:[${pobjcss_FldDispUnitStyleEN.isDeleted}], 非法,应该为布尔型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.updDate) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.updDate &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjcss_FldDispUnitStyleEN.updDate}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.updUser) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.updUser &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjcss_FldDispUnitStyleEN.updUser}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.memo) == false &&
    undefined !== pobjcss_FldDispUnitStyleEN.memo &&
    tzDataType.isString(pobjcss_FldDispUnitStyleEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjcss_FldDispUnitStyleEN.memo}], 非法,应该为字符型(In 字段显示单元样式(css_FldDispUnitStyle))!(clscss_FldDispUnitStyleBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.styleIdContent) == false &&
    pobjcss_FldDispUnitStyleEN.styleIdContent != '[nuull]' &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.styleIdContent) != 8
  ) {
    throw '(errid:Watl000418)字段[内容样式Id]作为外键字段,长度应该为8(In 字段显示单元样式)!(clscss_FldDispUnitStyleBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.styleIdTitle) == false &&
    pobjcss_FldDispUnitStyleEN.styleIdTitle != '[nuull]' &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.styleIdTitle) != 8
  ) {
    throw '(errid:Watl000418)字段[标题样式Id]作为外键字段,长度应该为8(In 字段显示单元样式)!(clscss_FldDispUnitStyleBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjcss_FldDispUnitStyleEN.ctlTypeId) == false &&
    pobjcss_FldDispUnitStyleEN.ctlTypeId != '[nuull]' &&
    GetStrLen(pobjcss_FldDispUnitStyleEN.ctlTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[控件类型号]作为外键字段,长度应该为2(In 字段显示单元样式)!(clscss_FldDispUnitStyleBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function css_FldDispUnitStyle_GetJSONStrByObj(
  pobjcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
): string {
  pobjcss_FldDispUnitStyleEN.sfUpdFldSetStr = pobjcss_FldDispUnitStyleEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjcss_FldDispUnitStyleEN);
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
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function css_FldDispUnitStyle_GetObjLstByJSONStr(
  strJSON: string,
): Array<clscss_FldDispUnitStyleEN> {
  let arrcss_FldDispUnitStyleObjLst = new Array<clscss_FldDispUnitStyleEN>();
  if (strJSON === '') {
    return arrcss_FldDispUnitStyleObjLst;
  }
  try {
    arrcss_FldDispUnitStyleObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrcss_FldDispUnitStyleObjLst;
  }
  return arrcss_FldDispUnitStyleObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcss_FldDispUnitStyleObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function css_FldDispUnitStyle_GetObjLstByJSONObjLst(
  arrcss_FldDispUnitStyleObjLstS: Array<clscss_FldDispUnitStyleEN>,
): Array<clscss_FldDispUnitStyleEN> {
  const arrcss_FldDispUnitStyleObjLst = new Array<clscss_FldDispUnitStyleEN>();
  for (const objInFor of arrcss_FldDispUnitStyleObjLstS) {
    const obj1 = css_FldDispUnitStyle_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrcss_FldDispUnitStyleObjLst.push(obj1);
  }
  return arrcss_FldDispUnitStyleObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function css_FldDispUnitStyle_GetObjByJSONStr(strJSON: string): clscss_FldDispUnitStyleEN {
  let pobjcss_FldDispUnitStyleEN = new clscss_FldDispUnitStyleEN();
  if (strJSON === '') {
    return pobjcss_FldDispUnitStyleEN;
  }
  try {
    pobjcss_FldDispUnitStyleEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjcss_FldDispUnitStyleEN;
  }
  return pobjcss_FldDispUnitStyleEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function css_FldDispUnitStyle_GetCombineCondition(
  objcss_FldDispUnitStyleCond: clscss_FldDispUnitStyleEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_FldDispUnitStyleCond.dicFldComparisonOp,
      clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId,
    ) == true
  ) {
    const strComparisonOpFldDispUnitStyleId: string =
      objcss_FldDispUnitStyleCond.dicFldComparisonOp[
        clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_FldDispUnitStyleEN.con_FldDispUnitStyleId,
      objcss_FldDispUnitStyleCond.fldDispUnitStyleId,
      strComparisonOpFldDispUnitStyleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_FldDispUnitStyleCond.dicFldComparisonOp,
      clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName,
    ) == true
  ) {
    const strComparisonOpFldDispUnitStyleName: string =
      objcss_FldDispUnitStyleCond.dicFldComparisonOp[
        clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_FldDispUnitStyleEN.con_FldDispUnitStyleName,
      objcss_FldDispUnitStyleCond.fldDispUnitStyleName,
      strComparisonOpFldDispUnitStyleName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_FldDispUnitStyleCond.dicFldComparisonOp,
      clscss_FldDispUnitStyleEN.con_FldDispUnitStyleDesc,
    ) == true
  ) {
    const strComparisonOpFldDispUnitStyleDesc: string =
      objcss_FldDispUnitStyleCond.dicFldComparisonOp[
        clscss_FldDispUnitStyleEN.con_FldDispUnitStyleDesc
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_FldDispUnitStyleEN.con_FldDispUnitStyleDesc,
      objcss_FldDispUnitStyleCond.fldDispUnitStyleDesc,
      strComparisonOpFldDispUnitStyleDesc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_FldDispUnitStyleCond.dicFldComparisonOp,
      clscss_FldDispUnitStyleEN.con_StyleIdContent,
    ) == true
  ) {
    const strComparisonOpStyleIdContent: string =
      objcss_FldDispUnitStyleCond.dicFldComparisonOp[clscss_FldDispUnitStyleEN.con_StyleIdContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_FldDispUnitStyleEN.con_StyleIdContent,
      objcss_FldDispUnitStyleCond.styleIdContent,
      strComparisonOpStyleIdContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_FldDispUnitStyleCond.dicFldComparisonOp,
      clscss_FldDispUnitStyleEN.con_StyleIdTitle,
    ) == true
  ) {
    const strComparisonOpStyleIdTitle: string =
      objcss_FldDispUnitStyleCond.dicFldComparisonOp[clscss_FldDispUnitStyleEN.con_StyleIdTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_FldDispUnitStyleEN.con_StyleIdTitle,
      objcss_FldDispUnitStyleCond.styleIdTitle,
      strComparisonOpStyleIdTitle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_FldDispUnitStyleCond.dicFldComparisonOp,
      clscss_FldDispUnitStyleEN.con_FldDispUnitStyleContent,
    ) == true
  ) {
    const strComparisonOpFldDispUnitStyleContent: string =
      objcss_FldDispUnitStyleCond.dicFldComparisonOp[
        clscss_FldDispUnitStyleEN.con_FldDispUnitStyleContent
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_FldDispUnitStyleEN.con_FldDispUnitStyleContent,
      objcss_FldDispUnitStyleCond.fldDispUnitStyleContent,
      strComparisonOpFldDispUnitStyleContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_FldDispUnitStyleCond.dicFldComparisonOp,
      clscss_FldDispUnitStyleEN.con_FldDispUnitFormat,
    ) == true
  ) {
    const strComparisonOpFldDispUnitFormat: string =
      objcss_FldDispUnitStyleCond.dicFldComparisonOp[
        clscss_FldDispUnitStyleEN.con_FldDispUnitFormat
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_FldDispUnitStyleEN.con_FldDispUnitFormat,
      objcss_FldDispUnitStyleCond.fldDispUnitFormat,
      strComparisonOpFldDispUnitFormat,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_FldDispUnitStyleCond.dicFldComparisonOp,
      clscss_FldDispUnitStyleEN.con_CtlTypeId,
    ) == true
  ) {
    const strComparisonOpCtlTypeId: string =
      objcss_FldDispUnitStyleCond.dicFldComparisonOp[clscss_FldDispUnitStyleEN.con_CtlTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_FldDispUnitStyleEN.con_CtlTypeId,
      objcss_FldDispUnitStyleCond.ctlTypeId,
      strComparisonOpCtlTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_FldDispUnitStyleCond.dicFldComparisonOp,
      clscss_FldDispUnitStyleEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objcss_FldDispUnitStyleCond.dicFldComparisonOp[clscss_FldDispUnitStyleEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clscss_FldDispUnitStyleEN.con_OrderNum,
      objcss_FldDispUnitStyleCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_FldDispUnitStyleCond.dicFldComparisonOp,
      clscss_FldDispUnitStyleEN.con_DeletedDate,
    ) == true
  ) {
    const strComparisonOpDeletedDate: string =
      objcss_FldDispUnitStyleCond.dicFldComparisonOp[clscss_FldDispUnitStyleEN.con_DeletedDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_FldDispUnitStyleEN.con_DeletedDate,
      objcss_FldDispUnitStyleCond.deletedDate,
      strComparisonOpDeletedDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_FldDispUnitStyleCond.dicFldComparisonOp,
      clscss_FldDispUnitStyleEN.con_IsDeleted,
    ) == true
  ) {
    if (objcss_FldDispUnitStyleCond.isDeleted == true) {
      strWhereCond += Format(" And {0} = '1'", clscss_FldDispUnitStyleEN.con_IsDeleted);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscss_FldDispUnitStyleEN.con_IsDeleted);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_FldDispUnitStyleCond.dicFldComparisonOp,
      clscss_FldDispUnitStyleEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objcss_FldDispUnitStyleCond.dicFldComparisonOp[clscss_FldDispUnitStyleEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_FldDispUnitStyleEN.con_UpdDate,
      objcss_FldDispUnitStyleCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_FldDispUnitStyleCond.dicFldComparisonOp,
      clscss_FldDispUnitStyleEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objcss_FldDispUnitStyleCond.dicFldComparisonOp[clscss_FldDispUnitStyleEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_FldDispUnitStyleEN.con_UpdUser,
      objcss_FldDispUnitStyleCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_FldDispUnitStyleCond.dicFldComparisonOp,
      clscss_FldDispUnitStyleEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objcss_FldDispUnitStyleCond.dicFldComparisonOp[clscss_FldDispUnitStyleEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_FldDispUnitStyleEN.con_Memo,
      objcss_FldDispUnitStyleCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--css_FldDispUnitStyle(字段显示单元样式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFldDispUnitStyleName: 字段显示单元样式名称(要求唯一的字段)
 * @param strCtlTypeId: 控件类型号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function css_FldDispUnitStyle_GetUniCondStr(
  objcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and FldDispUnitStyleName = '{0}'",
    objcss_FldDispUnitStyleEN.fldDispUnitStyleName,
  );
  strWhereCond += Format(" and CtlTypeId = '{0}'", objcss_FldDispUnitStyleEN.ctlTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--css_FldDispUnitStyle(字段显示单元样式),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFldDispUnitStyleName: 字段显示单元样式名称(要求唯一的字段)
 * @param strCtlTypeId: 控件类型号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function css_FldDispUnitStyle_GetUniCondStr4Update(
  objcss_FldDispUnitStyleEN: clscss_FldDispUnitStyleEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and FldDispUnitStyleId <> '{0}'",
    objcss_FldDispUnitStyleEN.fldDispUnitStyleId,
  );
  strWhereCond += Format(
    " and FldDispUnitStyleName = '{0}'",
    objcss_FldDispUnitStyleEN.fldDispUnitStyleName,
  );
  strWhereCond += Format(" and CtlTypeId = '{0}'", objcss_FldDispUnitStyleEN.ctlTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcss_FldDispUnitStyleENS:源对象
 * @param objcss_FldDispUnitStyleENT:目标对象
 */
export function css_FldDispUnitStyle_GetObjFromJsonObj(
  objcss_FldDispUnitStyleENS: clscss_FldDispUnitStyleEN,
): clscss_FldDispUnitStyleEN {
  const objcss_FldDispUnitStyleENT: clscss_FldDispUnitStyleEN = new clscss_FldDispUnitStyleEN();
  ObjectAssign(objcss_FldDispUnitStyleENT, objcss_FldDispUnitStyleENS);
  return objcss_FldDispUnitStyleENT;
}
