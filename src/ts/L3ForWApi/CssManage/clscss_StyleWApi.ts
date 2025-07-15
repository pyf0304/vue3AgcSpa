/**
 * 类名:clscss_StyleWApi
 * 表名:css_Style(00050468)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:52:49
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
 * css_Style(css_Style)
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
import { css_StyleCache, isFuncMapCache } from '@/views/CssManage/css_StyleVueShare';
import { clscss_StyleENEx } from '@/ts/L0Entity/CssManage/clscss_StyleENEx';
import { clscss_StyleEN } from '@/ts/L0Entity/CssManage/clscss_StyleEN';
import { CtlType_func } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const css_Style_Controller = 'css_StyleApi';
export const css_Style_ConstructorName = 'css_Style';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strStyleId:关键字
 * @returns 对象
 **/
export async function css_Style_GetObjByStyleIdAsync(
  strStyleId: string,
): Promise<clscss_StyleEN | null> {
  const strThisFuncName = 'GetObjByStyleIdAsync';

  if (IsNullOrEmpty(strStyleId) == true) {
    const strMsg = Format('参数:[strStyleId]不能为空!(In clscss_StyleWApi.GetObjByStyleIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strStyleId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strStyleId]的长度:[{0}]不正确!(clscss_StyleWApi.GetObjByStyleIdAsync)',
      strStyleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByStyleId';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strStyleId,
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
      const objcss_Style = css_Style_GetObjFromJsonObj(returnObj);
      return objcss_Style;
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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
 * @param strStyleId:所给的关键字
 * @returns 对象
 */
export async function css_Style_GetObjByStyleIdlocalStorage(strStyleId: string) {
  const strThisFuncName = 'GetObjByStyleIdlocalStorage';

  if (IsNullOrEmpty(strStyleId) == true) {
    const strMsg = Format(
      '参数:[strStyleId]不能为空!(In clscss_StyleWApi.GetObjByStyleIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strStyleId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strStyleId]的长度:[{0}]不正确!(clscss_StyleWApi.GetObjByStyleIdlocalStorage)',
      strStyleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clscss_StyleEN._CurrTabName, strStyleId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objcss_StyleCache: clscss_StyleEN = JSON.parse(strTempObj);
    return objcss_StyleCache;
  }
  try {
    const objcss_Style = await css_Style_GetObjByStyleIdAsync(strStyleId);
    if (objcss_Style != null) {
      localStorage.setItem(strKey, JSON.stringify(objcss_Style));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objcss_Style;
    }
    return objcss_Style;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strStyleId,
      css_Style_ConstructorName,
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
 * @param strStyleId:所给的关键字
 * @returns 对象
 */
export async function css_Style_GetObjByStyleIdCache(strStyleId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByStyleIdCache';

  if (IsNullOrEmpty(strStyleId) == true) {
    const strMsg = Format('参数:[strStyleId]不能为空!(In clscss_StyleWApi.GetObjByStyleIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strStyleId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strStyleId]的长度:[{0}]不正确!(clscss_StyleWApi.GetObjByStyleIdCache)',
      strStyleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrcss_StyleObjLstCache = await css_Style_GetObjLstCache();
  try {
    const arrcss_StyleSel = arrcss_StyleObjLstCache.filter((x) => x.styleId == strStyleId);
    let objcss_Style: clscss_StyleEN;
    if (arrcss_StyleSel.length > 0) {
      objcss_Style = arrcss_StyleSel[0];
      return objcss_Style;
    } else {
      if (bolTryAsyncOnce == true) {
        const objcss_StyleConst = await css_Style_GetObjByStyleIdAsync(strStyleId);
        if (objcss_StyleConst != null) {
          css_Style_ReFreshThisCache();
          return objcss_StyleConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strStyleId,
      css_Style_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objcss_Style:所给的对象
 * @returns 对象
 */
export async function css_Style_UpdateObjInLstCache(objcss_Style: clscss_StyleEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrcss_StyleObjLstCache = await css_Style_GetObjLstCache();
    const obj = arrcss_StyleObjLstCache.find(
      (x) => x.ctlTypeId == objcss_Style.ctlTypeId && x.styleName == objcss_Style.styleName,
    );
    if (obj != null) {
      objcss_Style.styleId = obj.styleId;
      ObjectAssign(obj, objcss_Style);
    } else {
      arrcss_StyleObjLstCache.push(objcss_Style);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      css_Style_ConstructorName,
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
export function css_Style_SortFunDefa(a: clscss_StyleEN, b: clscss_StyleEN): number {
  return a.styleId.localeCompare(b.styleId);
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
export function css_Style_SortFunDefa2Fld(a: clscss_StyleEN, b: clscss_StyleEN): number {
  if (a.ctlTypeId == b.ctlTypeId) return a.styleName.localeCompare(b.styleName);
  else return a.ctlTypeId.localeCompare(b.ctlTypeId);
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
export function css_Style_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscss_StyleEN.con_StyleId:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          return a.styleId.localeCompare(b.styleId);
        };
      case clscss_StyleEN.con_CtlTypeId:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          return a.ctlTypeId.localeCompare(b.ctlTypeId);
        };
      case clscss_StyleEN.con_StyleName:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          if (a.styleName == null) return -1;
          if (b.styleName == null) return 1;
          return a.styleName.localeCompare(b.styleName);
        };
      case clscss_StyleEN.con_StyleDesc:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          if (a.styleDesc == null) return -1;
          if (b.styleDesc == null) return 1;
          return a.styleDesc.localeCompare(b.styleDesc);
        };
      case clscss_StyleEN.con_StyleContent:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          if (a.styleContent == null) return -1;
          if (b.styleContent == null) return 1;
          return a.styleContent.localeCompare(b.styleContent);
        };
      case clscss_StyleEN.con_IsDeleted:
        return (a: clscss_StyleEN) => {
          if (a.isDeleted == true) return 1;
          else return -1;
        };
      case clscss_StyleEN.con_DeletedDate:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          if (a.deletedDate == null) return -1;
          if (b.deletedDate == null) return 1;
          return a.deletedDate.localeCompare(b.deletedDate);
        };
      case clscss_StyleEN.con_UpdDate:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clscss_StyleEN.con_UpdUser:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clscss_StyleEN.con_Memo:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[css_Style]中不存在!(in ${css_Style_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clscss_StyleEN.con_StyleId:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          return b.styleId.localeCompare(a.styleId);
        };
      case clscss_StyleEN.con_CtlTypeId:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          return b.ctlTypeId.localeCompare(a.ctlTypeId);
        };
      case clscss_StyleEN.con_StyleName:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          if (b.styleName == null) return -1;
          if (a.styleName == null) return 1;
          return b.styleName.localeCompare(a.styleName);
        };
      case clscss_StyleEN.con_StyleDesc:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          if (b.styleDesc == null) return -1;
          if (a.styleDesc == null) return 1;
          return b.styleDesc.localeCompare(a.styleDesc);
        };
      case clscss_StyleEN.con_StyleContent:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          if (b.styleContent == null) return -1;
          if (a.styleContent == null) return 1;
          return b.styleContent.localeCompare(a.styleContent);
        };
      case clscss_StyleEN.con_IsDeleted:
        return (b: clscss_StyleEN) => {
          if (b.isDeleted == true) return 1;
          else return -1;
        };
      case clscss_StyleEN.con_DeletedDate:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          if (b.deletedDate == null) return -1;
          if (a.deletedDate == null) return 1;
          return b.deletedDate.localeCompare(a.deletedDate);
        };
      case clscss_StyleEN.con_UpdDate:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clscss_StyleEN.con_UpdUser:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clscss_StyleEN.con_Memo:
        return (a: clscss_StyleEN, b: clscss_StyleEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[css_Style]中不存在!(in ${css_Style_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function css_Style_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clscss_StyleEN.con_StyleId:
      return (obj: clscss_StyleEN) => {
        return obj.styleId === value;
      };
    case clscss_StyleEN.con_CtlTypeId:
      return (obj: clscss_StyleEN) => {
        return obj.ctlTypeId === value;
      };
    case clscss_StyleEN.con_StyleName:
      return (obj: clscss_StyleEN) => {
        return obj.styleName === value;
      };
    case clscss_StyleEN.con_StyleDesc:
      return (obj: clscss_StyleEN) => {
        return obj.styleDesc === value;
      };
    case clscss_StyleEN.con_StyleContent:
      return (obj: clscss_StyleEN) => {
        return obj.styleContent === value;
      };
    case clscss_StyleEN.con_IsDeleted:
      return (obj: clscss_StyleEN) => {
        return obj.isDeleted === value;
      };
    case clscss_StyleEN.con_DeletedDate:
      return (obj: clscss_StyleEN) => {
        return obj.deletedDate === value;
      };
    case clscss_StyleEN.con_UpdDate:
      return (obj: clscss_StyleEN) => {
        return obj.updDate === value;
      };
    case clscss_StyleEN.con_UpdUser:
      return (obj: clscss_StyleEN) => {
        return obj.updUser === value;
      };
    case clscss_StyleEN.con_Memo:
      return (obj: clscss_StyleEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[css_Style]中不存在!(in ${css_Style_ConstructorName}.${strThisFuncName})`;
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
export async function css_Style_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clscss_StyleEN.con_StyleId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clscss_StyleEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clscss_StyleEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strStyleId = strInValue;
  if (IsNullOrEmpty(strStyleId) == true) {
    return '';
  }
  const objcss_Style = await css_Style_GetObjByStyleIdCache(strStyleId);
  if (objcss_Style == null) return '';
  if (objcss_Style.GetFldValue(strOutFldName) == null) return '';
  return objcss_Style.GetFldValue(strOutFldName).toString();
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
export async function css_Style_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clscss_StyleEN.con_StyleId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrcss_Style = await css_Style_GetObjLstCache();
  if (arrcss_Style == null) return [];
  let arrcss_StyleSel = arrcss_Style;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrcss_StyleSel = arrcss_StyleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrcss_StyleSel = arrcss_StyleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrcss_StyleSel = arrcss_StyleSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrcss_StyleSel = arrcss_StyleSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrcss_StyleSel = arrcss_StyleSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrcss_StyleSel = arrcss_StyleSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrcss_StyleSel = arrcss_StyleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrcss_StyleSel = arrcss_StyleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrcss_StyleSel.length == 0) return [];
  return arrcss_StyleSel.map((x) => x.styleId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function css_Style_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
export async function css_Style_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
export async function css_Style_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
export async function css_Style_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clscss_StyleEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

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
      const objcss_Style = css_Style_GetObjFromJsonObj(returnObj);
      return objcss_Style;
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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
export async function css_Style_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clscss_StyleEN._CurrTabName;
  if (IsNullOrEmpty(clscss_StyleEN.WhereFormat) == false) {
    strWhereCond = clscss_StyleEN.WhereFormat;
  }
  if (IsNullOrEmpty(clscss_StyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscss_StyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrcss_StyleExObjLstCache: Array<clscss_StyleEN> = CacheHelper.Get(strKey);
    const arrcss_StyleObjLstT = css_Style_GetObjLstByJSONObjLst(arrcss_StyleExObjLstCache);
    return arrcss_StyleObjLstT;
  }
  try {
    const arrcss_StyleExObjLst = await css_Style_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrcss_StyleExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcss_StyleExObjLst.length,
    );
    console.log(strInfo);
    return arrcss_StyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      css_Style_ConstructorName,
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
export async function css_Style_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clscss_StyleEN._CurrTabName;
  if (IsNullOrEmpty(clscss_StyleEN.WhereFormat) == false) {
    strWhereCond = clscss_StyleEN.WhereFormat;
  }
  if (IsNullOrEmpty(clscss_StyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscss_StyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrcss_StyleExObjLstCache: Array<clscss_StyleEN> = JSON.parse(strTempObjLst);
    const arrcss_StyleObjLstT = css_Style_GetObjLstByJSONObjLst(arrcss_StyleExObjLstCache);
    return arrcss_StyleObjLstT;
  }
  try {
    const arrcss_StyleExObjLst = await css_Style_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrcss_StyleExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcss_StyleExObjLst.length,
    );
    console.log(strInfo);
    return arrcss_StyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      css_Style_ConstructorName,
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
export async function css_Style_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clscss_StyleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrcss_StyleObjLstCache: Array<clscss_StyleEN> = JSON.parse(strTempObjLst);
    return arrcss_StyleObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function css_Style_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clscss_StyleEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

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
          css_Style_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_Style_GetObjLstByJSONObjLst(returnObjLst);
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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
export async function css_Style_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clscss_StyleEN._CurrTabName;
  if (IsNullOrEmpty(clscss_StyleEN.WhereFormat) == false) {
    strWhereCond = clscss_StyleEN.WhereFormat;
  }
  if (IsNullOrEmpty(clscss_StyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clscss_StyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrcss_StyleExObjLstCache: Array<clscss_StyleEN> = JSON.parse(strTempObjLst);
    const arrcss_StyleObjLstT = css_Style_GetObjLstByJSONObjLst(arrcss_StyleExObjLstCache);
    return arrcss_StyleObjLstT;
  }
  try {
    const arrcss_StyleExObjLst = await css_Style_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrcss_StyleExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrcss_StyleExObjLst.length,
    );
    console.log(strInfo);
    return arrcss_StyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      css_Style_ConstructorName,
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
export async function css_Style_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clscss_StyleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrcss_StyleObjLstCache: Array<clscss_StyleEN> = JSON.parse(strTempObjLst);
    return arrcss_StyleObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function css_Style_GetObjLstCache(): Promise<Array<clscss_StyleEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrcss_StyleObjLstCache;
  switch (clscss_StyleEN.CacheModeId) {
    case '04': //sessionStorage
      arrcss_StyleObjLstCache = await css_Style_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrcss_StyleObjLstCache = await css_Style_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrcss_StyleObjLstCache = await css_Style_GetObjLstClientCache();
      break;
    default:
      arrcss_StyleObjLstCache = await css_Style_GetObjLstClientCache();
      break;
  }
  return arrcss_StyleObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function css_Style_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrcss_StyleObjLstCache;
  switch (clscss_StyleEN.CacheModeId) {
    case '04': //sessionStorage
      arrcss_StyleObjLstCache = await css_Style_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrcss_StyleObjLstCache = await css_Style_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrcss_StyleObjLstCache = null;
      break;
    default:
      arrcss_StyleObjLstCache = null;
      break;
  }
  return arrcss_StyleObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrStyleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function css_Style_GetSubObjLstCache(objcss_StyleCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrcss_StyleObjLstCache = await css_Style_GetObjLstCache();
  let arrcss_StyleSel = arrcss_StyleObjLstCache;
  if (objcss_StyleCond.GetConditions().length == 0) return arrcss_StyleSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objcss_StyleCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrcss_StyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objcss_StyleCond),
      css_Style_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscss_StyleEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrStyleId:关键字列表
 * @returns 对象列表
 **/
export async function css_Style_GetObjLstByStyleIdLstAsync(
  arrStyleId: Array<string>,
): Promise<Array<clscss_StyleEN>> {
  const strThisFuncName = 'GetObjLstByStyleIdLstAsync';
  const strAction = 'GetObjLstByStyleIdLst';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrStyleId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          css_Style_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_Style_GetObjLstByJSONObjLst(returnObjLst);
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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
 * @param arrstrStyleIdLst:关键字列表
 * @returns 对象列表
 */
export async function css_Style_GetObjLstByStyleIdLstCache(arrStyleIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByStyleIdLstCache';
  try {
    const arrcss_StyleObjLstCache = await css_Style_GetObjLstCache();
    const arrcss_StyleSel = arrcss_StyleObjLstCache.filter(
      (x) => arrStyleIdLst.indexOf(x.styleId) > -1,
    );
    return arrcss_StyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrStyleIdLst.join(','),
      css_Style_ConstructorName,
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
export async function css_Style_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clscss_StyleEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

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
          css_Style_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_Style_GetObjLstByJSONObjLst(returnObjLst);
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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
export async function css_Style_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clscss_StyleEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

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
          css_Style_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_Style_GetObjLstByJSONObjLst(returnObjLst);
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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
export async function css_Style_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clscss_StyleEN>();
  const arrcss_StyleObjLstCache = await css_Style_GetObjLstCache();
  if (arrcss_StyleObjLstCache.length == 0) return arrcss_StyleObjLstCache;
  let arrcss_StyleSel = arrcss_StyleObjLstCache;
  const objcss_StyleCond = objPagerPara.conditionCollection;
  if (objcss_StyleCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clscss_StyleEN>();
  }
  //console.log("clscss_StyleWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objcss_StyleCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrcss_StyleSel.length == 0) return arrcss_StyleSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcss_StyleSel = arrcss_StyleSel.sort(css_Style_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcss_StyleSel = arrcss_StyleSel.sort(objPagerPara.sortFun);
    }
    arrcss_StyleSel = arrcss_StyleSel.slice(intStart, intEnd);
    return arrcss_StyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      css_Style_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscss_StyleEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function css_Style_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscss_StyleEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clscss_StyleEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

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
          css_Style_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = css_Style_GetObjLstByJSONObjLst(returnObjLst);
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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
 * @param strStyleId:关键字
 * @returns 获取删除的结果
 **/
export async function css_Style_DelRecordAsync(strStyleId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(css_Style_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strStyleId);

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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
 * @param arrStyleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function css_Style_Delcss_StylesAsync(arrStyleId: Array<string>): Promise<number> {
  const strThisFuncName = 'Delcss_StylesAsync';
  const strAction = 'Delcss_Styles';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrStyleId, config);
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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
export async function css_Style_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clscss_StyleENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrcss_StyleObjLst = await css_Style_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clscss_StyleENEx>();
  const arrcss_StyleExObjLst = arrcss_StyleObjLst.map((obj) => {
    const cacheKey = `${obj.styleId}`;
    if (css_StyleCache[cacheKey]) {
      const oldObj = css_StyleCache[cacheKey];
      return oldObj;
    } else {
      const newObj = css_Style_CopyToEx(obj);
      arrNewObj.push(newObj);
      css_StyleCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await css_Style_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscss_StyleEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrcss_StyleExObjLst) {
      await css_Style_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.styleId}`;
      css_StyleCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrcss_StyleExObjLst.length == 0) return arrcss_StyleExObjLst;
  let arrcss_StyleSel: Array<clscss_StyleENEx> = arrcss_StyleExObjLst;
  const objcss_StyleCond = objPagerPara.conditionCollection;
  if (objcss_StyleCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrcss_StyleExObjLst;
  }
  try {
    for (const objCondition of objcss_StyleCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrcss_StyleSel.length == 0) return arrcss_StyleSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrcss_StyleSel = arrcss_StyleSel.sort(
        css_Style_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcss_StyleSel = arrcss_StyleSel.sort(objPagerPara.sortFun);
    }
    arrcss_StyleSel = arrcss_StyleSel.slice(intStart, intEnd);
    return arrcss_StyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      css_Style_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscss_StyleENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objcss_StyleENS:源对象
 * @returns 目标对象=>clscss_StyleEN:objcss_StyleENT
 **/
export function css_Style_CopyToEx(objcss_StyleENS: clscss_StyleEN): clscss_StyleENEx {
  const strThisFuncName = css_Style_CopyToEx.name;
  const objcss_StyleENT = new clscss_StyleENEx();
  try {
    ObjectAssign(objcss_StyleENT, objcss_StyleENS);
    return objcss_StyleENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_Style_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcss_StyleENT;
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
export function css_Style_FuncMapByFldName(strFldName: string, objcss_StyleEx: clscss_StyleENEx) {
  const strThisFuncName = css_Style_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clscss_StyleEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscss_StyleENEx.con_CtlTypeName:
      return css_Style_FuncMapCtlTypeName(objcss_StyleEx);
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
export function css_Style_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscss_StyleENEx.con_CtlTypeName:
        return (a: clscss_StyleENEx, b: clscss_StyleENEx) => {
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      default:
        return css_Style_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clscss_StyleENEx.con_CtlTypeName:
        return (a: clscss_StyleENEx, b: clscss_StyleENEx) => {
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      default:
        return css_Style_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcss_StyleS:源对象
 **/
export async function css_Style_FuncMapCtlTypeName(objcss_Style: clscss_StyleENEx) {
  const strThisFuncName = css_Style_FuncMapCtlTypeName.name;
  try {
    if (IsNullOrEmpty(objcss_Style.ctlTypeName) == true) {
      const CtlTypeCtlTypeId = objcss_Style.ctlTypeId;
      const CtlTypeCtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlTypeCtlTypeId,
      );
      objcss_Style.ctlTypeName = CtlTypeCtlTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001301)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      css_Style_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function css_Style_Delcss_StylesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'Delcss_StylesByCondAsync';
  const strAction = 'Delcss_StylesByCond';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
 * @param objcss_StyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_Style_AddNewRecordAsync(
  objcss_StyleEN: clscss_StyleEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objcss_StyleEN);
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_StyleEN, config);
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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
 * @param objcss_StyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function css_Style_AddNewRecordWithMaxIdAsync(
  objcss_StyleEN: clscss_StyleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_StyleEN, config);
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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
export async function css_Style_AddNewObjSave(
  objcss_StyleEN: clscss_StyleEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    css_Style_CheckPropertyNew(objcss_StyleEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${css_Style_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await css_Style_CheckUniCond4Add(objcss_StyleEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await css_Style_AddNewRecordWithMaxIdAsync(objcss_StyleEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      css_Style_ReFreshCache();
    } else {
      const strInfo = `添加[css_Style(css_Style)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${css_Style_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function css_Style_CheckUniCond4Add(objcss_StyleEN: clscss_StyleEN): Promise<boolean> {
  const strUniquenessCondition = css_Style_GetUniCondStr(objcss_StyleEN);
  const bolIsExistCondition = await css_Style_IsExistRecordAsync(strUniquenessCondition);
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
export async function css_Style_CheckUniCond4Update(
  objcss_StyleEN: clscss_StyleEN,
): Promise<boolean> {
  const strUniquenessCondition = css_Style_GetUniCondStr4Update(objcss_StyleEN);
  const bolIsExistCondition = await css_Style_IsExistRecordAsync(strUniquenessCondition);
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
export async function css_Style_UpdateObjSave(objcss_StyleEN: clscss_StyleEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objcss_StyleEN.sfUpdFldSetStr = objcss_StyleEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objcss_StyleEN.styleId == '' || objcss_StyleEN.styleId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    css_Style_CheckProperty4Update(objcss_StyleEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${css_Style_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await css_Style_CheckUniCond4Update(objcss_StyleEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await css_Style_UpdateRecordAsync(objcss_StyleEN);
    if (returnBool == true) {
      css_Style_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${css_Style_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objcss_StyleEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function css_Style_AddNewRecordWithReturnKeyAsync(
  objcss_StyleEN: clscss_StyleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_StyleEN, config);
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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
 * @param objcss_StyleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function css_Style_UpdateRecordAsync(
  objcss_StyleEN: clscss_StyleEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objcss_StyleEN.sfUpdFldSetStr === undefined ||
    objcss_StyleEN.sfUpdFldSetStr === null ||
    objcss_StyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcss_StyleEN.styleId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_StyleEN, config);
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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
 * @param objcss_StyleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function css_Style_EditRecordExAsync(
  objcss_StyleEN: clscss_StyleEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objcss_StyleEN.sfUpdFldSetStr === undefined ||
    objcss_StyleEN.sfUpdFldSetStr === null ||
    objcss_StyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcss_StyleEN.styleId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_StyleEN, config);
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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
 * @param objcss_StyleEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function css_Style_UpdateWithConditionAsync(
  objcss_StyleEN: clscss_StyleEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objcss_StyleEN.sfUpdFldSetStr === undefined ||
    objcss_StyleEN.sfUpdFldSetStr === null ||
    objcss_StyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objcss_StyleEN.styleId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);
  objcss_StyleEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objcss_StyleEN, config);
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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
 * @param objstrStyleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function css_Style_IsExistRecordCache(objcss_StyleCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrcss_StyleObjLstCache = await css_Style_GetObjLstCache();
  if (arrcss_StyleObjLstCache == null) return false;
  let arrcss_StyleSel = arrcss_StyleObjLstCache;
  if (objcss_StyleCond.GetConditions().length == 0)
    return arrcss_StyleSel.length > 0 ? true : false;
  try {
    for (const objCondition of objcss_StyleCond.GetConditions()) {
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
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrcss_StyleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objcss_StyleCond),
      css_Style_ConstructorName,
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
export async function css_Style_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
 * @param strStyleId:所给的关键字
 * @returns 对象
 */
export async function css_Style_IsExistCache(strStyleId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrcss_StyleObjLstCache = await css_Style_GetObjLstCache();
  if (arrcss_StyleObjLstCache == null) return false;
  try {
    const arrcss_StyleSel = arrcss_StyleObjLstCache.filter((x) => x.styleId == strStyleId);
    if (arrcss_StyleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strStyleId,
      css_Style_ConstructorName,
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
 * @param strStyleId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function css_Style_IsExistAsync(strStyleId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strStyleId,
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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
export async function css_Style_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
 * @param objcss_StyleCond:条件对象
 * @returns 对象列表记录数
 */
export async function css_Style_GetRecCountByCondCache(objcss_StyleCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrcss_StyleObjLstCache = await css_Style_GetObjLstCache();
  if (arrcss_StyleObjLstCache == null) return 0;
  let arrcss_StyleSel = arrcss_StyleObjLstCache;
  if (objcss_StyleCond.GetConditions().length == 0) return arrcss_StyleSel.length;
  try {
    for (const objCondition of objcss_StyleCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrcss_StyleSel = arrcss_StyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrcss_StyleSel = arrcss_StyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrcss_StyleSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objcss_StyleCond),
      css_Style_ConstructorName,
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
export async function css_Style_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
export async function css_Style_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(css_Style_Controller, strAction);

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
        css_Style_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        css_Style_ConstructorName,
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
export function css_Style_GetWebApiUrl(strController: string, strAction: string): string {
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
export function css_Style_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clscss_StyleEN._CurrTabName;
  switch (clscss_StyleEN.CacheModeId) {
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
  clscss_StyleEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function css_Style_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clscss_StyleEN._CurrTabName;
    switch (clscss_StyleEN.CacheModeId) {
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
    clscss_StyleEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function css_Style_GetLastRefreshTime(): string {
  if (clscss_StyleEN._RefreshTimeLst.length == 0) return '';
  return clscss_StyleEN._RefreshTimeLst[clscss_StyleEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCtlTypeId:
*/
export async function css_Style_BindDdl_StyleIdByCtlTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strCtlTypeId: string,
) {
  if (IsNullOrEmpty(strCtlTypeId) == true) {
    const strMsg = Format(
      '参数:[strCtlTypeId]不能为空！(In clscss_StyleWApi.BindDdl_StyleIdByCtlTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCtlTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strCtlTypeId]的长度:[{0}]不正确！(clscss_StyleWApi.BindDdl_StyleIdByCtlTypeIdInDiv)',
      strCtlTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_StyleIdByCtlTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_StyleIdByCtlTypeIdInDivCache");
  let arrObjLstSel = await css_Style_GetObjLstCache();
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.ctlTypeId == strCtlTypeId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clscss_StyleEN.con_StyleId,
    clscss_StyleEN.con_StyleName,
    'css_Style...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCtlTypeId:
*/
export async function css_Style_GetArrcss_StyleByCtlTypeId(strCtlTypeId: string) {
  if (IsNullOrEmpty(strCtlTypeId) == true) {
    const strMsg = Format(
      '参数:[strCtlTypeId]不能为空！(In clscss_StyleWApi.BindDdl_StyleIdByCtlTypeIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCtlTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strCtlTypeId]的长度:[{0}]不正确！(clscss_StyleWApi.BindDdl_StyleIdByCtlTypeIdInDiv)',
      strCtlTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_StyleIdByCtlTypeIdInDivCache");
  const arrcss_Style = new Array<clscss_StyleEN>();
  let arrObjLstSel = await css_Style_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.ctlTypeId == strCtlTypeId);
  const obj0 = new clscss_StyleEN();
  obj0.styleId = '0';
  obj0.styleName = '选css_Style...';
  arrcss_Style.push(obj0);
  arrObjLstSel.forEach((x) => arrcss_Style.push(x));
  return arrcss_Style;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function css_Style_CheckPropertyNew(pobjcss_StyleEN: clscss_StyleEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjcss_StyleEN.ctlTypeId) === true ||
    pobjcss_StyleEN.ctlTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[控件类型号]不能为空(In css_Style)!(clscss_StyleBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjcss_StyleEN.styleId) == false && GetStrLen(pobjcss_StyleEN.styleId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[样式ID(styleId)]的长度不能超过8(In css_Style(css_Style))!值:${pobjcss_StyleEN.styleId}(clscss_StyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.ctlTypeId) == false &&
    GetStrLen(pobjcss_StyleEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[控件类型号(ctlTypeId)]的长度不能超过2(In css_Style(css_Style))!值:${pobjcss_StyleEN.ctlTypeId}(clscss_StyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleName) == false &&
    GetStrLen(pobjcss_StyleEN.styleName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[样式名称(styleName)]的长度不能超过50(In css_Style(css_Style))!值:${pobjcss_StyleEN.styleName}(clscss_StyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleDesc) == false &&
    GetStrLen(pobjcss_StyleEN.styleDesc) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[样式描述(styleDesc)]的长度不能超过1000(In css_Style(css_Style))!值:${pobjcss_StyleEN.styleDesc}(clscss_StyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleContent) == false &&
    GetStrLen(pobjcss_StyleEN.styleContent) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[样式内容(styleContent)]的长度不能超过1000(In css_Style(css_Style))!值:${pobjcss_StyleEN.styleContent}(clscss_StyleBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.deletedDate) == false &&
    GetStrLen(pobjcss_StyleEN.deletedDate) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[删除日期(deletedDate)]的长度不能超过50(In css_Style(css_Style))!值:${pobjcss_StyleEN.deletedDate}(clscss_StyleBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjcss_StyleEN.updDate) == false && GetStrLen(pobjcss_StyleEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In css_Style(css_Style))!值:${pobjcss_StyleEN.updDate}(clscss_StyleBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjcss_StyleEN.updUser) == false && GetStrLen(pobjcss_StyleEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In css_Style(css_Style))!值:${pobjcss_StyleEN.updUser}(clscss_StyleBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjcss_StyleEN.memo) == false && GetStrLen(pobjcss_StyleEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In css_Style(css_Style))!值:${pobjcss_StyleEN.memo}(clscss_StyleBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleId) == false &&
    undefined !== pobjcss_StyleEN.styleId &&
    tzDataType.isString(pobjcss_StyleEN.styleId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[样式ID(styleId)]的值:[${pobjcss_StyleEN.styleId}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.ctlTypeId) == false &&
    undefined !== pobjcss_StyleEN.ctlTypeId &&
    tzDataType.isString(pobjcss_StyleEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[控件类型号(ctlTypeId)]的值:[${pobjcss_StyleEN.ctlTypeId}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleName) == false &&
    undefined !== pobjcss_StyleEN.styleName &&
    tzDataType.isString(pobjcss_StyleEN.styleName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[样式名称(styleName)]的值:[${pobjcss_StyleEN.styleName}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleDesc) == false &&
    undefined !== pobjcss_StyleEN.styleDesc &&
    tzDataType.isString(pobjcss_StyleEN.styleDesc) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[样式描述(styleDesc)]的值:[${pobjcss_StyleEN.styleDesc}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleContent) == false &&
    undefined !== pobjcss_StyleEN.styleContent &&
    tzDataType.isString(pobjcss_StyleEN.styleContent) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[样式内容(styleContent)]的值:[${pobjcss_StyleEN.styleContent}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjcss_StyleEN.isDeleted &&
    undefined !== pobjcss_StyleEN.isDeleted &&
    tzDataType.isBoolean(pobjcss_StyleEN.isDeleted) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否删除(isDeleted)]的值:[${pobjcss_StyleEN.isDeleted}], 非法,应该为布尔型(In css_Style(css_Style))!(clscss_StyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.deletedDate) == false &&
    undefined !== pobjcss_StyleEN.deletedDate &&
    tzDataType.isString(pobjcss_StyleEN.deletedDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[删除日期(deletedDate)]的值:[${pobjcss_StyleEN.deletedDate}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.updDate) == false &&
    undefined !== pobjcss_StyleEN.updDate &&
    tzDataType.isString(pobjcss_StyleEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjcss_StyleEN.updDate}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.updUser) == false &&
    undefined !== pobjcss_StyleEN.updUser &&
    tzDataType.isString(pobjcss_StyleEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjcss_StyleEN.updUser}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.memo) == false &&
    undefined !== pobjcss_StyleEN.memo &&
    tzDataType.isString(pobjcss_StyleEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjcss_StyleEN.memo}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleId) == false &&
    pobjcss_StyleEN.styleId != '[nuull]' &&
    GetStrLen(pobjcss_StyleEN.styleId) != 8
  ) {
    throw '(errid:Watl000415)字段[样式ID]作为外键字段,长度应该为8(In css_Style)!(clscss_StyleBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.ctlTypeId) == false &&
    pobjcss_StyleEN.ctlTypeId != '[nuull]' &&
    GetStrLen(pobjcss_StyleEN.ctlTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[控件类型号]作为外键字段,长度应该为2(In css_Style)!(clscss_StyleBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function css_Style_CheckProperty4Update(pobjcss_StyleEN: clscss_StyleEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjcss_StyleEN.styleId) == false && GetStrLen(pobjcss_StyleEN.styleId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[样式ID(styleId)]的长度不能超过8(In css_Style(css_Style))!值:${pobjcss_StyleEN.styleId}(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.ctlTypeId) == false &&
    GetStrLen(pobjcss_StyleEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[控件类型号(ctlTypeId)]的长度不能超过2(In css_Style(css_Style))!值:${pobjcss_StyleEN.ctlTypeId}(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleName) == false &&
    GetStrLen(pobjcss_StyleEN.styleName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[样式名称(styleName)]的长度不能超过50(In css_Style(css_Style))!值:${pobjcss_StyleEN.styleName}(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleDesc) == false &&
    GetStrLen(pobjcss_StyleEN.styleDesc) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[样式描述(styleDesc)]的长度不能超过1000(In css_Style(css_Style))!值:${pobjcss_StyleEN.styleDesc}(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleContent) == false &&
    GetStrLen(pobjcss_StyleEN.styleContent) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[样式内容(styleContent)]的长度不能超过1000(In css_Style(css_Style))!值:${pobjcss_StyleEN.styleContent}(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.deletedDate) == false &&
    GetStrLen(pobjcss_StyleEN.deletedDate) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[删除日期(deletedDate)]的长度不能超过50(In css_Style(css_Style))!值:${pobjcss_StyleEN.deletedDate}(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjcss_StyleEN.updDate) == false && GetStrLen(pobjcss_StyleEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In css_Style(css_Style))!值:${pobjcss_StyleEN.updDate}(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjcss_StyleEN.updUser) == false && GetStrLen(pobjcss_StyleEN.updUser) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In css_Style(css_Style))!值:${pobjcss_StyleEN.updUser}(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjcss_StyleEN.memo) == false && GetStrLen(pobjcss_StyleEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In css_Style(css_Style))!值:${pobjcss_StyleEN.memo}(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleId) == false &&
    undefined !== pobjcss_StyleEN.styleId &&
    tzDataType.isString(pobjcss_StyleEN.styleId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[样式ID(styleId)]的值:[${pobjcss_StyleEN.styleId}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.ctlTypeId) == false &&
    undefined !== pobjcss_StyleEN.ctlTypeId &&
    tzDataType.isString(pobjcss_StyleEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[控件类型号(ctlTypeId)]的值:[${pobjcss_StyleEN.ctlTypeId}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleName) == false &&
    undefined !== pobjcss_StyleEN.styleName &&
    tzDataType.isString(pobjcss_StyleEN.styleName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[样式名称(styleName)]的值:[${pobjcss_StyleEN.styleName}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleDesc) == false &&
    undefined !== pobjcss_StyleEN.styleDesc &&
    tzDataType.isString(pobjcss_StyleEN.styleDesc) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[样式描述(styleDesc)]的值:[${pobjcss_StyleEN.styleDesc}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleContent) == false &&
    undefined !== pobjcss_StyleEN.styleContent &&
    tzDataType.isString(pobjcss_StyleEN.styleContent) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[样式内容(styleContent)]的值:[${pobjcss_StyleEN.styleContent}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjcss_StyleEN.isDeleted &&
    undefined !== pobjcss_StyleEN.isDeleted &&
    tzDataType.isBoolean(pobjcss_StyleEN.isDeleted) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否删除(isDeleted)]的值:[${pobjcss_StyleEN.isDeleted}], 非法,应该为布尔型(In css_Style(css_Style))!(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.deletedDate) == false &&
    undefined !== pobjcss_StyleEN.deletedDate &&
    tzDataType.isString(pobjcss_StyleEN.deletedDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[删除日期(deletedDate)]的值:[${pobjcss_StyleEN.deletedDate}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.updDate) == false &&
    undefined !== pobjcss_StyleEN.updDate &&
    tzDataType.isString(pobjcss_StyleEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjcss_StyleEN.updDate}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.updUser) == false &&
    undefined !== pobjcss_StyleEN.updUser &&
    tzDataType.isString(pobjcss_StyleEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjcss_StyleEN.updUser}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.memo) == false &&
    undefined !== pobjcss_StyleEN.memo &&
    tzDataType.isString(pobjcss_StyleEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjcss_StyleEN.memo}], 非法,应该为字符型(In css_Style(css_Style))!(clscss_StyleBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjcss_StyleEN.styleId) == false &&
    pobjcss_StyleEN.styleId != '[nuull]' &&
    GetStrLen(pobjcss_StyleEN.styleId) != 8
  ) {
    throw '(errid:Watl000418)字段[样式ID]作为外键字段,长度应该为8(In css_Style)!(clscss_StyleBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjcss_StyleEN.ctlTypeId) == false &&
    pobjcss_StyleEN.ctlTypeId != '[nuull]' &&
    GetStrLen(pobjcss_StyleEN.ctlTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[控件类型号]作为外键字段,长度应该为2(In css_Style)!(clscss_StyleBL:CheckPropertyNew)';
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
export function css_Style_GetJSONStrByObj(pobjcss_StyleEN: clscss_StyleEN): string {
  pobjcss_StyleEN.sfUpdFldSetStr = pobjcss_StyleEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjcss_StyleEN);
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
export function css_Style_GetObjLstByJSONStr(strJSON: string): Array<clscss_StyleEN> {
  let arrcss_StyleObjLst = new Array<clscss_StyleEN>();
  if (strJSON === '') {
    return arrcss_StyleObjLst;
  }
  try {
    arrcss_StyleObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrcss_StyleObjLst;
  }
  return arrcss_StyleObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcss_StyleObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function css_Style_GetObjLstByJSONObjLst(
  arrcss_StyleObjLstS: Array<clscss_StyleEN>,
): Array<clscss_StyleEN> {
  const arrcss_StyleObjLst = new Array<clscss_StyleEN>();
  for (const objInFor of arrcss_StyleObjLstS) {
    const obj1 = css_Style_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrcss_StyleObjLst.push(obj1);
  }
  return arrcss_StyleObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function css_Style_GetObjByJSONStr(strJSON: string): clscss_StyleEN {
  let pobjcss_StyleEN = new clscss_StyleEN();
  if (strJSON === '') {
    return pobjcss_StyleEN;
  }
  try {
    pobjcss_StyleEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjcss_StyleEN;
  }
  return pobjcss_StyleEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function css_Style_GetCombineCondition(objcss_StyleCond: clscss_StyleEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_StyleCond.dicFldComparisonOp,
      clscss_StyleEN.con_StyleId,
    ) == true
  ) {
    const strComparisonOpStyleId: string =
      objcss_StyleCond.dicFldComparisonOp[clscss_StyleEN.con_StyleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_StyleEN.con_StyleId,
      objcss_StyleCond.styleId,
      strComparisonOpStyleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_StyleCond.dicFldComparisonOp,
      clscss_StyleEN.con_CtlTypeId,
    ) == true
  ) {
    const strComparisonOpCtlTypeId: string =
      objcss_StyleCond.dicFldComparisonOp[clscss_StyleEN.con_CtlTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_StyleEN.con_CtlTypeId,
      objcss_StyleCond.ctlTypeId,
      strComparisonOpCtlTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_StyleCond.dicFldComparisonOp,
      clscss_StyleEN.con_StyleName,
    ) == true
  ) {
    const strComparisonOpStyleName: string =
      objcss_StyleCond.dicFldComparisonOp[clscss_StyleEN.con_StyleName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_StyleEN.con_StyleName,
      objcss_StyleCond.styleName,
      strComparisonOpStyleName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_StyleCond.dicFldComparisonOp,
      clscss_StyleEN.con_StyleDesc,
    ) == true
  ) {
    const strComparisonOpStyleDesc: string =
      objcss_StyleCond.dicFldComparisonOp[clscss_StyleEN.con_StyleDesc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_StyleEN.con_StyleDesc,
      objcss_StyleCond.styleDesc,
      strComparisonOpStyleDesc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_StyleCond.dicFldComparisonOp,
      clscss_StyleEN.con_StyleContent,
    ) == true
  ) {
    const strComparisonOpStyleContent: string =
      objcss_StyleCond.dicFldComparisonOp[clscss_StyleEN.con_StyleContent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_StyleEN.con_StyleContent,
      objcss_StyleCond.styleContent,
      strComparisonOpStyleContent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_StyleCond.dicFldComparisonOp,
      clscss_StyleEN.con_IsDeleted,
    ) == true
  ) {
    if (objcss_StyleCond.isDeleted == true) {
      strWhereCond += Format(" And {0} = '1'", clscss_StyleEN.con_IsDeleted);
    } else {
      strWhereCond += Format(" And {0} = '0'", clscss_StyleEN.con_IsDeleted);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_StyleCond.dicFldComparisonOp,
      clscss_StyleEN.con_DeletedDate,
    ) == true
  ) {
    const strComparisonOpDeletedDate: string =
      objcss_StyleCond.dicFldComparisonOp[clscss_StyleEN.con_DeletedDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_StyleEN.con_DeletedDate,
      objcss_StyleCond.deletedDate,
      strComparisonOpDeletedDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_StyleCond.dicFldComparisonOp,
      clscss_StyleEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objcss_StyleCond.dicFldComparisonOp[clscss_StyleEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_StyleEN.con_UpdDate,
      objcss_StyleCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_StyleCond.dicFldComparisonOp,
      clscss_StyleEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objcss_StyleCond.dicFldComparisonOp[clscss_StyleEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_StyleEN.con_UpdUser,
      objcss_StyleCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objcss_StyleCond.dicFldComparisonOp,
      clscss_StyleEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objcss_StyleCond.dicFldComparisonOp[clscss_StyleEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clscss_StyleEN.con_Memo,
      objcss_StyleCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--css_Style(css_Style),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCtlTypeId: 控件类型号(要求唯一的字段)
 * @param strStyleName: 样式名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function css_Style_GetUniCondStr(objcss_StyleEN: clscss_StyleEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CtlTypeId = '{0}'", objcss_StyleEN.ctlTypeId);
  strWhereCond += Format(" and StyleName = '{0}'", objcss_StyleEN.styleName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--css_Style(css_Style),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCtlTypeId: 控件类型号(要求唯一的字段)
 * @param strStyleName: 样式名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function css_Style_GetUniCondStr4Update(objcss_StyleEN: clscss_StyleEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and StyleId <> '{0}'", objcss_StyleEN.styleId);
  strWhereCond += Format(" and CtlTypeId = '{0}'", objcss_StyleEN.ctlTypeId);
  strWhereCond += Format(" and StyleName = '{0}'", objcss_StyleEN.styleName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcss_StyleENS:源对象
 * @param objcss_StyleENT:目标对象
 */
export function css_Style_GetObjFromJsonObj(objcss_StyleENS: clscss_StyleEN): clscss_StyleEN {
  const objcss_StyleENT: clscss_StyleEN = new clscss_StyleEN();
  ObjectAssign(objcss_StyleENT, objcss_StyleENS);
  return objcss_StyleENT;
}
