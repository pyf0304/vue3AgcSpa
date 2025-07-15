/**
 * 类名:clsGenCtlStyleWApi
 * 表名:GenCtlStyle(00050064)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/15 18:20:30
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面控件管理(ViewControlManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 一般控件样式(GenCtlStyle)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年12月15日.
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
import { clsGenCtlStyleEN } from '@/ts/L0Entity/ViewControlManage/clsGenCtlStyleEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const genCtlStyle_Controller = 'GenCtlStyleApi';
export const genCtlStyle_ConstructorName = 'genCtlStyle';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strGenCtlStyleId:关键字
 * @returns 对象
 **/
export async function GenCtlStyle_GetObjByGenCtlStyleIdAsync(
  strGenCtlStyleId: string,
): Promise<clsGenCtlStyleEN | null> {
  const strThisFuncName = 'GetObjByGenCtlStyleIdAsync';

  if (IsNullOrEmpty(strGenCtlStyleId) == true) {
    const strMsg = Format(
      '参数:[strGenCtlStyleId]不能为空!(In clsGenCtlStyleWApi.GetObjByGenCtlStyleIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByGenCtlStyleId';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strGenCtlStyleId,
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
      const objGenCtlStyle = GenCtlStyle_GetObjFromJsonObj(returnObj);
      return objGenCtlStyle;
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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
 * @param strGenCtlStyleId:所给的关键字
 * @returns 对象
 */
export async function GenCtlStyle_GetObjByGenCtlStyleIdCache(
  strGenCtlStyleId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByGenCtlStyleIdCache';

  if (IsNullOrEmpty(strGenCtlStyleId) == true) {
    const strMsg = Format(
      '参数:[strGenCtlStyleId]不能为空!(In clsGenCtlStyleWApi.GetObjByGenCtlStyleIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrGenCtlStyleObjLstCache = await GenCtlStyle_GetObjLstCache();
  try {
    const arrGenCtlStyleSel = arrGenCtlStyleObjLstCache.filter(
      (x) => x.genCtlStyleId == strGenCtlStyleId,
    );
    let objGenCtlStyle: clsGenCtlStyleEN;
    if (arrGenCtlStyleSel.length > 0) {
      objGenCtlStyle = arrGenCtlStyleSel[0];
      return objGenCtlStyle;
    } else {
      if (bolTryAsyncOnce == true) {
        const objGenCtlStyleConst = await GenCtlStyle_GetObjByGenCtlStyleIdAsync(strGenCtlStyleId);
        if (objGenCtlStyleConst != null) {
          GenCtlStyle_ReFreshThisCache();
          return objGenCtlStyleConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strGenCtlStyleId,
      genCtlStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strGenCtlStyleId:所给的关键字
 * @returns 对象
 */
export async function GenCtlStyle_GetObjByGenCtlStyleIdlocalStorage(strGenCtlStyleId: string) {
  const strThisFuncName = 'GetObjByGenCtlStyleIdlocalStorage';

  if (IsNullOrEmpty(strGenCtlStyleId) == true) {
    const strMsg = Format(
      '参数:[strGenCtlStyleId]不能为空!(In clsGenCtlStyleWApi.GetObjByGenCtlStyleIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsGenCtlStyleEN._CurrTabName, strGenCtlStyleId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objGenCtlStyleCache: clsGenCtlStyleEN = JSON.parse(strTempObj);
    return objGenCtlStyleCache;
  }
  try {
    const objGenCtlStyle = await GenCtlStyle_GetObjByGenCtlStyleIdAsync(strGenCtlStyleId);
    if (objGenCtlStyle != null) {
      localStorage.setItem(strKey, JSON.stringify(objGenCtlStyle));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objGenCtlStyle;
    }
    return objGenCtlStyle;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strGenCtlStyleId,
      genCtlStyle_ConstructorName,
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
 * @param objGenCtlStyle:所给的对象
 * @returns 对象
 */
export async function GenCtlStyle_UpdateObjInLstCache(objGenCtlStyle: clsGenCtlStyleEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrGenCtlStyleObjLstCache = await GenCtlStyle_GetObjLstCache();
    const obj = arrGenCtlStyleObjLstCache.find(
      (x) => x.genCtlStyleId == objGenCtlStyle.genCtlStyleId,
    );
    if (obj != null) {
      objGenCtlStyle.genCtlStyleId = obj.genCtlStyleId;
      ObjectAssign(obj, objGenCtlStyle);
    } else {
      arrGenCtlStyleObjLstCache.push(objGenCtlStyle);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      genCtlStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strGenCtlStyleId:所给的关键字
 * @returns 对象
 */
export async function GenCtlStyle_GetNameByGenCtlStyleIdCache(strGenCtlStyleId: string) {
  if (IsNullOrEmpty(strGenCtlStyleId) == true) {
    const strMsg = Format(
      '参数:[strGenCtlStyleId]不能为空!(In clsGenCtlStyleWApi.GetNameByGenCtlStyleIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrGenCtlStyleObjLstCache = await GenCtlStyle_GetObjLstCache();
  if (arrGenCtlStyleObjLstCache == null) return '';
  try {
    const arrGenCtlStyleSel = arrGenCtlStyleObjLstCache.filter(
      (x) => x.genCtlStyleId == strGenCtlStyleId,
    );
    let objGenCtlStyle: clsGenCtlStyleEN;
    if (arrGenCtlStyleSel.length > 0) {
      objGenCtlStyle = arrGenCtlStyleSel[0];
      return objGenCtlStyle.genCtlStyleName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strGenCtlStyleId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function GenCtlStyle_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsGenCtlStyleEN.con_GenCtlStyleId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsGenCtlStyleEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsGenCtlStyleEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strGenCtlStyleId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objGenCtlStyle = await GenCtlStyle_GetObjByGenCtlStyleIdCache(strGenCtlStyleId);
  if (objGenCtlStyle == null) return '';
  if (objGenCtlStyle.GetFldValue(strOutFldName) == null) return '';
  return objGenCtlStyle.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GenCtlStyle_SortFunDefa(a: clsGenCtlStyleEN, b: clsGenCtlStyleEN): number {
  return a.genCtlStyleId.localeCompare(b.genCtlStyleId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GenCtlStyle_SortFunDefa2Fld(a: clsGenCtlStyleEN, b: clsGenCtlStyleEN): number {
  if (a.genCtlStyleName == b.genCtlStyleName) return a.style.localeCompare(b.style);
  else return a.genCtlStyleName.localeCompare(b.genCtlStyleName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function GenCtlStyle_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsGenCtlStyleEN.con_GenCtlStyleId:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return a.genCtlStyleId.localeCompare(b.genCtlStyleId);
        };
      case clsGenCtlStyleEN.con_GenCtlStyleName:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return a.genCtlStyleName.localeCompare(b.genCtlStyleName);
        };
      case clsGenCtlStyleEN.con_Style:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          if (a.style == null) return -1;
          if (b.style == null) return 1;
          return a.style.localeCompare(b.style);
        };
      case clsGenCtlStyleEN.con_Runat:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          if (a.runat == null) return -1;
          if (b.runat == null) return 1;
          return a.runat.localeCompare(b.runat);
        };
      case clsGenCtlStyleEN.con_FontSize:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          if (a.fontSize == null) return -1;
          if (b.fontSize == null) return 1;
          return a.fontSize.localeCompare(b.fontSize);
        };
      case clsGenCtlStyleEN.con_FontName:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          if (a.fontName == null) return -1;
          if (b.fontName == null) return 1;
          return a.fontName.localeCompare(b.fontName);
        };
      case clsGenCtlStyleEN.con_Width:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return a.width - b.width;
        };
      case clsGenCtlStyleEN.con_Height:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return a.height - b.height;
        };
      case clsGenCtlStyleEN.con_TextMode:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return a.textMode.localeCompare(b.textMode);
        };
      case clsGenCtlStyleEN.con_StyleZindex:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return a.styleZindex - b.styleZindex;
        };
      case clsGenCtlStyleEN.con_StyleLeft:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return a.styleLeft - b.styleLeft;
        };
      case clsGenCtlStyleEN.con_StylePosition:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          if (a.stylePosition == null) return -1;
          if (b.stylePosition == null) return 1;
          return a.stylePosition.localeCompare(b.stylePosition);
        };
      case clsGenCtlStyleEN.con_StyleTop:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return a.styleTop - b.styleTop;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GenCtlStyle]中不存在!(in ${genCtlStyle_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsGenCtlStyleEN.con_GenCtlStyleId:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return b.genCtlStyleId.localeCompare(a.genCtlStyleId);
        };
      case clsGenCtlStyleEN.con_GenCtlStyleName:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return b.genCtlStyleName.localeCompare(a.genCtlStyleName);
        };
      case clsGenCtlStyleEN.con_Style:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          if (b.style == null) return -1;
          if (a.style == null) return 1;
          return b.style.localeCompare(a.style);
        };
      case clsGenCtlStyleEN.con_Runat:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          if (b.runat == null) return -1;
          if (a.runat == null) return 1;
          return b.runat.localeCompare(a.runat);
        };
      case clsGenCtlStyleEN.con_FontSize:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          if (b.fontSize == null) return -1;
          if (a.fontSize == null) return 1;
          return b.fontSize.localeCompare(a.fontSize);
        };
      case clsGenCtlStyleEN.con_FontName:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          if (b.fontName == null) return -1;
          if (a.fontName == null) return 1;
          return b.fontName.localeCompare(a.fontName);
        };
      case clsGenCtlStyleEN.con_Width:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return b.width - a.width;
        };
      case clsGenCtlStyleEN.con_Height:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return b.height - a.height;
        };
      case clsGenCtlStyleEN.con_TextMode:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return b.textMode.localeCompare(a.textMode);
        };
      case clsGenCtlStyleEN.con_StyleZindex:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return b.styleZindex - a.styleZindex;
        };
      case clsGenCtlStyleEN.con_StyleLeft:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return b.styleLeft - a.styleLeft;
        };
      case clsGenCtlStyleEN.con_StylePosition:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          if (b.stylePosition == null) return -1;
          if (a.stylePosition == null) return 1;
          return b.stylePosition.localeCompare(a.stylePosition);
        };
      case clsGenCtlStyleEN.con_StyleTop:
        return (a: clsGenCtlStyleEN, b: clsGenCtlStyleEN) => {
          return b.styleTop - a.styleTop;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[GenCtlStyle]中不存在!(in ${genCtlStyle_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function GenCtlStyle_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsGenCtlStyleEN.con_GenCtlStyleId:
      return (obj: clsGenCtlStyleEN) => {
        return obj.genCtlStyleId === value;
      };
    case clsGenCtlStyleEN.con_GenCtlStyleName:
      return (obj: clsGenCtlStyleEN) => {
        return obj.genCtlStyleName === value;
      };
    case clsGenCtlStyleEN.con_Style:
      return (obj: clsGenCtlStyleEN) => {
        return obj.style === value;
      };
    case clsGenCtlStyleEN.con_Runat:
      return (obj: clsGenCtlStyleEN) => {
        return obj.runat === value;
      };
    case clsGenCtlStyleEN.con_FontSize:
      return (obj: clsGenCtlStyleEN) => {
        return obj.fontSize === value;
      };
    case clsGenCtlStyleEN.con_FontName:
      return (obj: clsGenCtlStyleEN) => {
        return obj.fontName === value;
      };
    case clsGenCtlStyleEN.con_Width:
      return (obj: clsGenCtlStyleEN) => {
        return obj.width === value;
      };
    case clsGenCtlStyleEN.con_Height:
      return (obj: clsGenCtlStyleEN) => {
        return obj.height === value;
      };
    case clsGenCtlStyleEN.con_TextMode:
      return (obj: clsGenCtlStyleEN) => {
        return obj.textMode === value;
      };
    case clsGenCtlStyleEN.con_StyleZindex:
      return (obj: clsGenCtlStyleEN) => {
        return obj.styleZindex === value;
      };
    case clsGenCtlStyleEN.con_StyleLeft:
      return (obj: clsGenCtlStyleEN) => {
        return obj.styleLeft === value;
      };
    case clsGenCtlStyleEN.con_StylePosition:
      return (obj: clsGenCtlStyleEN) => {
        return obj.stylePosition === value;
      };
    case clsGenCtlStyleEN.con_StyleTop:
      return (obj: clsGenCtlStyleEN) => {
        return obj.styleTop === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[GenCtlStyle]中不存在!(in ${genCtlStyle_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function GenCtlStyle_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsGenCtlStyleEN.con_GenCtlStyleId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrGenCtlStyle = await GenCtlStyle_GetObjLstCache();
  if (arrGenCtlStyle == null) return [];
  let arrGenCtlStyleSel = arrGenCtlStyle;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrGenCtlStyleSel.length == 0) return [];
  return arrGenCtlStyleSel.map((x) => x.genCtlStyleId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function GenCtlStyle_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
export async function GenCtlStyle_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
export async function GenCtlStyle_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsGenCtlStyleEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

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
      const objGenCtlStyle = GenCtlStyle_GetObjFromJsonObj(returnObj);
      return objGenCtlStyle;
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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
export async function GenCtlStyle_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGenCtlStyleEN._CurrTabName;
  if (IsNullOrEmpty(clsGenCtlStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGenCtlStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrGenCtlStyleExObjLstCache: Array<clsGenCtlStyleEN> = CacheHelper.Get(strKey);
    const arrGenCtlStyleObjLstT = GenCtlStyle_GetObjLstByJSONObjLst(arrGenCtlStyleExObjLstCache);
    return arrGenCtlStyleObjLstT;
  }
  try {
    const arrGenCtlStyleExObjLst = await GenCtlStyle_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrGenCtlStyleExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGenCtlStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrGenCtlStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      genCtlStyle_ConstructorName,
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
export async function GenCtlStyle_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGenCtlStyleEN._CurrTabName;
  if (IsNullOrEmpty(clsGenCtlStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGenCtlStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGenCtlStyleExObjLstCache: Array<clsGenCtlStyleEN> = JSON.parse(strTempObjLst);
    const arrGenCtlStyleObjLstT = GenCtlStyle_GetObjLstByJSONObjLst(arrGenCtlStyleExObjLstCache);
    return arrGenCtlStyleObjLstT;
  }
  try {
    const arrGenCtlStyleExObjLst = await GenCtlStyle_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrGenCtlStyleExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGenCtlStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrGenCtlStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      genCtlStyle_ConstructorName,
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
export async function GenCtlStyle_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsGenCtlStyleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrGenCtlStyleObjLstCache: Array<clsGenCtlStyleEN> = JSON.parse(strTempObjLst);
    return arrGenCtlStyleObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function GenCtlStyle_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsGenCtlStyleEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

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
          genCtlStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GenCtlStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
export async function GenCtlStyle_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsGenCtlStyleEN._CurrTabName;
  if (IsNullOrEmpty(clsGenCtlStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsGenCtlStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGenCtlStyleExObjLstCache: Array<clsGenCtlStyleEN> = JSON.parse(strTempObjLst);
    const arrGenCtlStyleObjLstT = GenCtlStyle_GetObjLstByJSONObjLst(arrGenCtlStyleExObjLstCache);
    return arrGenCtlStyleObjLstT;
  }
  try {
    const arrGenCtlStyleExObjLst = await GenCtlStyle_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrGenCtlStyleExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrGenCtlStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrGenCtlStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      genCtlStyle_ConstructorName,
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
export async function GenCtlStyle_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsGenCtlStyleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrGenCtlStyleObjLstCache: Array<clsGenCtlStyleEN> = JSON.parse(strTempObjLst);
    return arrGenCtlStyleObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GenCtlStyle_GetObjLstCache(): Promise<Array<clsGenCtlStyleEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrGenCtlStyleObjLstCache;
  switch (clsGenCtlStyleEN.CacheModeId) {
    case '04': //sessionStorage
      arrGenCtlStyleObjLstCache = await GenCtlStyle_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrGenCtlStyleObjLstCache = await GenCtlStyle_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrGenCtlStyleObjLstCache = await GenCtlStyle_GetObjLstClientCache();
      break;
    default:
      arrGenCtlStyleObjLstCache = await GenCtlStyle_GetObjLstClientCache();
      break;
  }
  return arrGenCtlStyleObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function GenCtlStyle_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrGenCtlStyleObjLstCache;
  switch (clsGenCtlStyleEN.CacheModeId) {
    case '04': //sessionStorage
      arrGenCtlStyleObjLstCache = await GenCtlStyle_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrGenCtlStyleObjLstCache = await GenCtlStyle_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrGenCtlStyleObjLstCache = null;
      break;
    default:
      arrGenCtlStyleObjLstCache = null;
      break;
  }
  return arrGenCtlStyleObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrGenCtlStyleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GenCtlStyle_GetSubObjLstCache(objGenCtlStyleCond: clsGenCtlStyleEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrGenCtlStyleObjLstCache = await GenCtlStyle_GetObjLstCache();
  let arrGenCtlStyleSel = arrGenCtlStyleObjLstCache;
  if (objGenCtlStyleCond.sfFldComparisonOp == null || objGenCtlStyleCond.sfFldComparisonOp == '')
    return arrGenCtlStyleSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objGenCtlStyleCond.sfFldComparisonOp,
  );
  //console.log("clsGenCtlStyleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objGenCtlStyleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objGenCtlStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrGenCtlStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGenCtlStyleCond),
      genCtlStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGenCtlStyleEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrGenCtlStyleId:关键字列表
 * @returns 对象列表
 **/
export async function GenCtlStyle_GetObjLstByGenCtlStyleIdLstAsync(
  arrGenCtlStyleId: Array<string>,
): Promise<Array<clsGenCtlStyleEN>> {
  const strThisFuncName = 'GetObjLstByGenCtlStyleIdLstAsync';
  const strAction = 'GetObjLstByGenCtlStyleIdLst';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrGenCtlStyleId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          genCtlStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GenCtlStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
 * @param arrstrGenCtlStyleIdLst:关键字列表
 * @returns 对象列表
 */
export async function GenCtlStyle_GetObjLstByGenCtlStyleIdLstCache(
  arrGenCtlStyleIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByGenCtlStyleIdLstCache';
  try {
    const arrGenCtlStyleObjLstCache = await GenCtlStyle_GetObjLstCache();
    const arrGenCtlStyleSel = arrGenCtlStyleObjLstCache.filter(
      (x) => arrGenCtlStyleIdLst.indexOf(x.genCtlStyleId) > -1,
    );
    return arrGenCtlStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrGenCtlStyleIdLst.join(','),
      genCtlStyle_ConstructorName,
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
export async function GenCtlStyle_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsGenCtlStyleEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

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
          genCtlStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GenCtlStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
export async function GenCtlStyle_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsGenCtlStyleEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

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
          genCtlStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GenCtlStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
export async function GenCtlStyle_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsGenCtlStyleEN>();
  const arrGenCtlStyleObjLstCache = await GenCtlStyle_GetObjLstCache();
  if (arrGenCtlStyleObjLstCache.length == 0) return arrGenCtlStyleObjLstCache;
  let arrGenCtlStyleSel = arrGenCtlStyleObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objGenCtlStyleCond = new clsGenCtlStyleEN();
  ObjectAssign(objGenCtlStyleCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsGenCtlStyleWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objGenCtlStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrGenCtlStyleSel.length == 0) return arrGenCtlStyleSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrGenCtlStyleSel = arrGenCtlStyleSel.sort(GenCtlStyle_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrGenCtlStyleSel = arrGenCtlStyleSel.sort(objPagerPara.sortFun);
    }
    arrGenCtlStyleSel = arrGenCtlStyleSel.slice(intStart, intEnd);
    return arrGenCtlStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      genCtlStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsGenCtlStyleEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function GenCtlStyle_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsGenCtlStyleEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsGenCtlStyleEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

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
          genCtlStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = GenCtlStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
 * @param strGenCtlStyleId:关键字
 * @returns 获取删除的结果
 **/
export async function GenCtlStyle_DelRecordAsync(strGenCtlStyleId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strGenCtlStyleId);

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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
 * @param arrGenCtlStyleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function GenCtlStyle_DelGenCtlStylesAsync(
  arrGenCtlStyleId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelGenCtlStylesAsync';
  const strAction = 'DelGenCtlStyles';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrGenCtlStyleId, config);
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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
export async function GenCtlStyle_DelGenCtlStylesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelGenCtlStylesByCondAsync';
  const strAction = 'DelGenCtlStylesByCond';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
 * @param objGenCtlStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GenCtlStyle_AddNewRecordAsync(
  objGenCtlStyleEN: clsGenCtlStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objGenCtlStyleEN.genCtlStyleId === null || objGenCtlStyleEN.genCtlStyleId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objGenCtlStyleEN);
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGenCtlStyleEN, config);
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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
 * @param objGenCtlStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function GenCtlStyle_AddNewRecordWithMaxIdAsync(
  objGenCtlStyleEN: clsGenCtlStyleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGenCtlStyleEN, config);
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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
 * @param objGenCtlStyleEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function GenCtlStyle_AddNewRecordWithReturnKeyAsync(
  objGenCtlStyleEN: clsGenCtlStyleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGenCtlStyleEN, config);
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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
 * @param objGenCtlStyleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function GenCtlStyle_UpdateRecordAsync(
  objGenCtlStyleEN: clsGenCtlStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objGenCtlStyleEN.sfUpdFldSetStr === undefined ||
    objGenCtlStyleEN.sfUpdFldSetStr === null ||
    objGenCtlStyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGenCtlStyleEN.genCtlStyleId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGenCtlStyleEN, config);
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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
 * @param objGenCtlStyleEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function GenCtlStyle_UpdateWithConditionAsync(
  objGenCtlStyleEN: clsGenCtlStyleEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objGenCtlStyleEN.sfUpdFldSetStr === undefined ||
    objGenCtlStyleEN.sfUpdFldSetStr === null ||
    objGenCtlStyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objGenCtlStyleEN.genCtlStyleId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);
  objGenCtlStyleEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objGenCtlStyleEN, config);
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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
 * @param objstrGenCtlStyleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function GenCtlStyle_IsExistRecordCache(objGenCtlStyleCond: clsGenCtlStyleEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrGenCtlStyleObjLstCache = await GenCtlStyle_GetObjLstCache();
  if (arrGenCtlStyleObjLstCache == null) return false;
  let arrGenCtlStyleSel = arrGenCtlStyleObjLstCache;
  if (objGenCtlStyleCond.sfFldComparisonOp == null || objGenCtlStyleCond.sfFldComparisonOp == '')
    return arrGenCtlStyleSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objGenCtlStyleCond.sfFldComparisonOp,
  );
  //console.log("clsGenCtlStyleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objGenCtlStyleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objGenCtlStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrGenCtlStyleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objGenCtlStyleCond),
      genCtlStyle_ConstructorName,
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
export async function GenCtlStyle_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
 * @param strGenCtlStyleId:所给的关键字
 * @returns 对象
 */
export async function GenCtlStyle_IsExistCache(strGenCtlStyleId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrGenCtlStyleObjLstCache = await GenCtlStyle_GetObjLstCache();
  if (arrGenCtlStyleObjLstCache == null) return false;
  try {
    const arrGenCtlStyleSel = arrGenCtlStyleObjLstCache.filter(
      (x) => x.genCtlStyleId == strGenCtlStyleId,
    );
    if (arrGenCtlStyleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strGenCtlStyleId,
      genCtlStyle_ConstructorName,
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
 * @param strGenCtlStyleId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function GenCtlStyle_IsExistAsync(strGenCtlStyleId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strGenCtlStyleId,
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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
export async function GenCtlStyle_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
 * @param objGenCtlStyleCond:条件对象
 * @returns 对象列表记录数
 */
export async function GenCtlStyle_GetRecCountByCondCache(objGenCtlStyleCond: clsGenCtlStyleEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrGenCtlStyleObjLstCache = await GenCtlStyle_GetObjLstCache();
  if (arrGenCtlStyleObjLstCache == null) return 0;
  let arrGenCtlStyleSel = arrGenCtlStyleObjLstCache;
  if (objGenCtlStyleCond.sfFldComparisonOp == null || objGenCtlStyleCond.sfFldComparisonOp == '')
    return arrGenCtlStyleSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objGenCtlStyleCond.sfFldComparisonOp,
  );
  //console.log("clsGenCtlStyleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objGenCtlStyleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objGenCtlStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrGenCtlStyleSel = arrGenCtlStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrGenCtlStyleSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objGenCtlStyleCond),
      genCtlStyle_ConstructorName,
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
export async function GenCtlStyle_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(genCtlStyle_Controller, strAction);

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
        genCtlStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        genCtlStyle_ConstructorName,
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
export function GenCtlStyle_GetWebApiUrl(strController: string, strAction: string): string {
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
export function GenCtlStyle_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsGenCtlStyleEN._CurrTabName;
  switch (clsGenCtlStyleEN.CacheModeId) {
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
export function GenCtlStyle_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsGenCtlStyleEN._CurrTabName;
    switch (clsGenCtlStyleEN.CacheModeId) {
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
export async function GenCtlStyle_BindDdl_GenCtlStyleIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_GenCtlStyleIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_GenCtlStyleIdInDivCache");
  const arrObjLstSel = await GenCtlStyle_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsGenCtlStyleEN.con_GenCtlStyleId,
    clsGenCtlStyleEN.con_GenCtlStyleName,
    '一般控件样式',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GenCtlStyle_CheckPropertyNew(pobjGenCtlStyleEN: clsGenCtlStyleEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjGenCtlStyleEN.genCtlStyleName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[GenCtlStyleName]不能为空(In 一般控件样式)!(clsGenCtlStyleBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjGenCtlStyleEN.textMode) === true) {
    throw new Error(
      '(errid:Watl000411)字段[TextMode]不能为空(In 一般控件样式)!(clsGenCtlStyleBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.genCtlStyleId) == false &&
    GetStrLen(pobjGenCtlStyleEN.genCtlStyleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[GenCtlStyleId(genCtlStyleId)]的长度不能超过4(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.genCtlStyleId)(clsGenCtlStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.genCtlStyleName) == false &&
    GetStrLen(pobjGenCtlStyleEN.genCtlStyleName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[GenCtlStyleName(genCtlStyleName)]的长度不能超过30(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.genCtlStyleName)(clsGenCtlStyleBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjGenCtlStyleEN.style) == false && GetStrLen(pobjGenCtlStyleEN.style) > 800) {
    throw new Error(
      '(errid:Watl000413)字段[类型(style)]的长度不能超过800(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.style)(clsGenCtlStyleBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjGenCtlStyleEN.runat) == false && GetStrLen(pobjGenCtlStyleEN.runat) > 30) {
    throw new Error(
      '(errid:Watl000413)字段[运行在(runat)]的长度不能超过30(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.runat)(clsGenCtlStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.fontSize) == false &&
    GetStrLen(pobjGenCtlStyleEN.fontSize) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字号(fontSize)]的长度不能超过20(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.fontSize)(clsGenCtlStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.fontName) == false &&
    GetStrLen(pobjGenCtlStyleEN.fontName) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字体(fontName)]的长度不能超过20(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.fontName)(clsGenCtlStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.textMode) == false &&
    GetStrLen(pobjGenCtlStyleEN.textMode) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[TextMode(textMode)]的长度不能超过20(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.textMode)(clsGenCtlStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.stylePosition) == false &&
    GetStrLen(pobjGenCtlStyleEN.stylePosition) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Style_Position(stylePosition)]的长度不能超过20(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.stylePosition)(clsGenCtlStyleBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.genCtlStyleId) == false &&
    undefined !== pobjGenCtlStyleEN.genCtlStyleId &&
    tzDataType.isString(pobjGenCtlStyleEN.genCtlStyleId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[GenCtlStyleId(genCtlStyleId)]的值:[$(pobjGenCtlStyleEN.genCtlStyleId)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.genCtlStyleName) == false &&
    undefined !== pobjGenCtlStyleEN.genCtlStyleName &&
    tzDataType.isString(pobjGenCtlStyleEN.genCtlStyleName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[GenCtlStyleName(genCtlStyleName)]的值:[$(pobjGenCtlStyleEN.genCtlStyleName)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.style) == false &&
    undefined !== pobjGenCtlStyleEN.style &&
    tzDataType.isString(pobjGenCtlStyleEN.style) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类型(style)]的值:[$(pobjGenCtlStyleEN.style)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.runat) == false &&
    undefined !== pobjGenCtlStyleEN.runat &&
    tzDataType.isString(pobjGenCtlStyleEN.runat) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[运行在(runat)]的值:[$(pobjGenCtlStyleEN.runat)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.fontSize) == false &&
    undefined !== pobjGenCtlStyleEN.fontSize &&
    tzDataType.isString(pobjGenCtlStyleEN.fontSize) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字号(fontSize)]的值:[$(pobjGenCtlStyleEN.fontSize)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.fontName) == false &&
    undefined !== pobjGenCtlStyleEN.fontName &&
    tzDataType.isString(pobjGenCtlStyleEN.fontName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字体(fontName)]的值:[$(pobjGenCtlStyleEN.fontName)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjGenCtlStyleEN.width &&
    undefined !== pobjGenCtlStyleEN.width &&
    tzDataType.isNumber(pobjGenCtlStyleEN.width) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[宽(width)]的值:[$(pobjGenCtlStyleEN.width)], 非法,应该为数值型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjGenCtlStyleEN.height &&
    undefined !== pobjGenCtlStyleEN.height &&
    tzDataType.isNumber(pobjGenCtlStyleEN.height) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[高度(height)]的值:[$(pobjGenCtlStyleEN.height)], 非法,应该为数值型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.textMode) == false &&
    undefined !== pobjGenCtlStyleEN.textMode &&
    tzDataType.isString(pobjGenCtlStyleEN.textMode) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[TextMode(textMode)]的值:[$(pobjGenCtlStyleEN.textMode)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjGenCtlStyleEN.styleZindex &&
    undefined !== pobjGenCtlStyleEN.styleZindex &&
    tzDataType.isNumber(pobjGenCtlStyleEN.styleZindex) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Zindex(styleZindex)]的值:[$(pobjGenCtlStyleEN.styleZindex)], 非法,应该为数值型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjGenCtlStyleEN.styleLeft &&
    undefined !== pobjGenCtlStyleEN.styleLeft &&
    tzDataType.isNumber(pobjGenCtlStyleEN.styleLeft) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Left(styleLeft)]的值:[$(pobjGenCtlStyleEN.styleLeft)], 非法,应该为数值型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.stylePosition) == false &&
    undefined !== pobjGenCtlStyleEN.stylePosition &&
    tzDataType.isString(pobjGenCtlStyleEN.stylePosition) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Position(stylePosition)]的值:[$(pobjGenCtlStyleEN.stylePosition)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjGenCtlStyleEN.styleTop &&
    undefined !== pobjGenCtlStyleEN.styleTop &&
    tzDataType.isNumber(pobjGenCtlStyleEN.styleTop) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Top(styleTop)]的值:[$(pobjGenCtlStyleEN.styleTop)], 非法,应该为数值型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function GenCtlStyle_CheckProperty4Update(pobjGenCtlStyleEN: clsGenCtlStyleEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.genCtlStyleId) == false &&
    GetStrLen(pobjGenCtlStyleEN.genCtlStyleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[GenCtlStyleId(genCtlStyleId)]的长度不能超过4(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.genCtlStyleId)(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.genCtlStyleName) == false &&
    GetStrLen(pobjGenCtlStyleEN.genCtlStyleName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[GenCtlStyleName(genCtlStyleName)]的长度不能超过30(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.genCtlStyleName)(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjGenCtlStyleEN.style) == false && GetStrLen(pobjGenCtlStyleEN.style) > 800) {
    throw new Error(
      '(errid:Watl000416)字段[类型(style)]的长度不能超过800(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.style)(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjGenCtlStyleEN.runat) == false && GetStrLen(pobjGenCtlStyleEN.runat) > 30) {
    throw new Error(
      '(errid:Watl000416)字段[运行在(runat)]的长度不能超过30(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.runat)(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.fontSize) == false &&
    GetStrLen(pobjGenCtlStyleEN.fontSize) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字号(fontSize)]的长度不能超过20(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.fontSize)(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.fontName) == false &&
    GetStrLen(pobjGenCtlStyleEN.fontName) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字体(fontName)]的长度不能超过20(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.fontName)(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.textMode) == false &&
    GetStrLen(pobjGenCtlStyleEN.textMode) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[TextMode(textMode)]的长度不能超过20(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.textMode)(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.stylePosition) == false &&
    GetStrLen(pobjGenCtlStyleEN.stylePosition) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Style_Position(stylePosition)]的长度不能超过20(In 一般控件样式(GenCtlStyle))!值:$(pobjGenCtlStyleEN.stylePosition)(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.genCtlStyleId) == false &&
    undefined !== pobjGenCtlStyleEN.genCtlStyleId &&
    tzDataType.isString(pobjGenCtlStyleEN.genCtlStyleId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[GenCtlStyleId(genCtlStyleId)]的值:[$(pobjGenCtlStyleEN.genCtlStyleId)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.genCtlStyleName) == false &&
    undefined !== pobjGenCtlStyleEN.genCtlStyleName &&
    tzDataType.isString(pobjGenCtlStyleEN.genCtlStyleName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[GenCtlStyleName(genCtlStyleName)]的值:[$(pobjGenCtlStyleEN.genCtlStyleName)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.style) == false &&
    undefined !== pobjGenCtlStyleEN.style &&
    tzDataType.isString(pobjGenCtlStyleEN.style) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类型(style)]的值:[$(pobjGenCtlStyleEN.style)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.runat) == false &&
    undefined !== pobjGenCtlStyleEN.runat &&
    tzDataType.isString(pobjGenCtlStyleEN.runat) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[运行在(runat)]的值:[$(pobjGenCtlStyleEN.runat)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.fontSize) == false &&
    undefined !== pobjGenCtlStyleEN.fontSize &&
    tzDataType.isString(pobjGenCtlStyleEN.fontSize) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字号(fontSize)]的值:[$(pobjGenCtlStyleEN.fontSize)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.fontName) == false &&
    undefined !== pobjGenCtlStyleEN.fontName &&
    tzDataType.isString(pobjGenCtlStyleEN.fontName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字体(fontName)]的值:[$(pobjGenCtlStyleEN.fontName)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjGenCtlStyleEN.width &&
    undefined !== pobjGenCtlStyleEN.width &&
    tzDataType.isNumber(pobjGenCtlStyleEN.width) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[宽(width)]的值:[$(pobjGenCtlStyleEN.width)], 非法,应该为数值型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjGenCtlStyleEN.height &&
    undefined !== pobjGenCtlStyleEN.height &&
    tzDataType.isNumber(pobjGenCtlStyleEN.height) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[高度(height)]的值:[$(pobjGenCtlStyleEN.height)], 非法,应该为数值型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.textMode) == false &&
    undefined !== pobjGenCtlStyleEN.textMode &&
    tzDataType.isString(pobjGenCtlStyleEN.textMode) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[TextMode(textMode)]的值:[$(pobjGenCtlStyleEN.textMode)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjGenCtlStyleEN.styleZindex &&
    undefined !== pobjGenCtlStyleEN.styleZindex &&
    tzDataType.isNumber(pobjGenCtlStyleEN.styleZindex) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Zindex(styleZindex)]的值:[$(pobjGenCtlStyleEN.styleZindex)], 非法,应该为数值型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjGenCtlStyleEN.styleLeft &&
    undefined !== pobjGenCtlStyleEN.styleLeft &&
    tzDataType.isNumber(pobjGenCtlStyleEN.styleLeft) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Left(styleLeft)]的值:[$(pobjGenCtlStyleEN.styleLeft)], 非法,应该为数值型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjGenCtlStyleEN.stylePosition) == false &&
    undefined !== pobjGenCtlStyleEN.stylePosition &&
    tzDataType.isString(pobjGenCtlStyleEN.stylePosition) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Position(stylePosition)]的值:[$(pobjGenCtlStyleEN.stylePosition)], 非法,应该为字符型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjGenCtlStyleEN.styleTop &&
    undefined !== pobjGenCtlStyleEN.styleTop &&
    tzDataType.isNumber(pobjGenCtlStyleEN.styleTop) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Top(styleTop)]的值:[$(pobjGenCtlStyleEN.styleTop)], 非法,应该为数值型(In 一般控件样式(GenCtlStyle))!(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjGenCtlStyleEN.genCtlStyleId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[GenCtlStyleId]不能为空(In 一般控件样式)!(clsGenCtlStyleBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GenCtlStyle_GetJSONStrByObj(pobjGenCtlStyleEN: clsGenCtlStyleEN): string {
  pobjGenCtlStyleEN.sfUpdFldSetStr = pobjGenCtlStyleEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjGenCtlStyleEN);
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
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function GenCtlStyle_GetObjLstByJSONStr(strJSON: string): Array<clsGenCtlStyleEN> {
  let arrGenCtlStyleObjLst = new Array<clsGenCtlStyleEN>();
  if (strJSON === '') {
    return arrGenCtlStyleObjLst;
  }
  try {
    arrGenCtlStyleObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrGenCtlStyleObjLst;
  }
  return arrGenCtlStyleObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrGenCtlStyleObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function GenCtlStyle_GetObjLstByJSONObjLst(
  arrGenCtlStyleObjLstS: Array<clsGenCtlStyleEN>,
): Array<clsGenCtlStyleEN> {
  const arrGenCtlStyleObjLst = new Array<clsGenCtlStyleEN>();
  for (const objInFor of arrGenCtlStyleObjLstS) {
    const obj1 = GenCtlStyle_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrGenCtlStyleObjLst.push(obj1);
  }
  return arrGenCtlStyleObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function GenCtlStyle_GetObjByJSONStr(strJSON: string): clsGenCtlStyleEN {
  let pobjGenCtlStyleEN = new clsGenCtlStyleEN();
  if (strJSON === '') {
    return pobjGenCtlStyleEN;
  }
  try {
    pobjGenCtlStyleEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjGenCtlStyleEN;
  }
  return pobjGenCtlStyleEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function GenCtlStyle_GetCombineCondition(objGenCtlStyleCond: clsGenCtlStyleEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objGenCtlStyleCond.dicFldComparisonOp,
      clsGenCtlStyleEN.con_GenCtlStyleId,
    ) == true
  ) {
    const strComparisonOpGenCtlStyleId: string =
      objGenCtlStyleCond.dicFldComparisonOp[clsGenCtlStyleEN.con_GenCtlStyleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGenCtlStyleEN.con_GenCtlStyleId,
      objGenCtlStyleCond.genCtlStyleId,
      strComparisonOpGenCtlStyleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGenCtlStyleCond.dicFldComparisonOp,
      clsGenCtlStyleEN.con_GenCtlStyleName,
    ) == true
  ) {
    const strComparisonOpGenCtlStyleName: string =
      objGenCtlStyleCond.dicFldComparisonOp[clsGenCtlStyleEN.con_GenCtlStyleName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGenCtlStyleEN.con_GenCtlStyleName,
      objGenCtlStyleCond.genCtlStyleName,
      strComparisonOpGenCtlStyleName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGenCtlStyleCond.dicFldComparisonOp,
      clsGenCtlStyleEN.con_Style,
    ) == true
  ) {
    const strComparisonOpStyle: string =
      objGenCtlStyleCond.dicFldComparisonOp[clsGenCtlStyleEN.con_Style];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGenCtlStyleEN.con_Style,
      objGenCtlStyleCond.style,
      strComparisonOpStyle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGenCtlStyleCond.dicFldComparisonOp,
      clsGenCtlStyleEN.con_Runat,
    ) == true
  ) {
    const strComparisonOpRunat: string =
      objGenCtlStyleCond.dicFldComparisonOp[clsGenCtlStyleEN.con_Runat];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGenCtlStyleEN.con_Runat,
      objGenCtlStyleCond.runat,
      strComparisonOpRunat,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGenCtlStyleCond.dicFldComparisonOp,
      clsGenCtlStyleEN.con_FontSize,
    ) == true
  ) {
    const strComparisonOpFontSize: string =
      objGenCtlStyleCond.dicFldComparisonOp[clsGenCtlStyleEN.con_FontSize];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGenCtlStyleEN.con_FontSize,
      objGenCtlStyleCond.fontSize,
      strComparisonOpFontSize,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGenCtlStyleCond.dicFldComparisonOp,
      clsGenCtlStyleEN.con_FontName,
    ) == true
  ) {
    const strComparisonOpFontName: string =
      objGenCtlStyleCond.dicFldComparisonOp[clsGenCtlStyleEN.con_FontName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGenCtlStyleEN.con_FontName,
      objGenCtlStyleCond.fontName,
      strComparisonOpFontName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGenCtlStyleCond.dicFldComparisonOp,
      clsGenCtlStyleEN.con_Width,
    ) == true
  ) {
    const strComparisonOpWidth: string =
      objGenCtlStyleCond.dicFldComparisonOp[clsGenCtlStyleEN.con_Width];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsGenCtlStyleEN.con_Width,
      objGenCtlStyleCond.width,
      strComparisonOpWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGenCtlStyleCond.dicFldComparisonOp,
      clsGenCtlStyleEN.con_Height,
    ) == true
  ) {
    const strComparisonOpHeight: string =
      objGenCtlStyleCond.dicFldComparisonOp[clsGenCtlStyleEN.con_Height];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsGenCtlStyleEN.con_Height,
      objGenCtlStyleCond.height,
      strComparisonOpHeight,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGenCtlStyleCond.dicFldComparisonOp,
      clsGenCtlStyleEN.con_TextMode,
    ) == true
  ) {
    const strComparisonOpTextMode: string =
      objGenCtlStyleCond.dicFldComparisonOp[clsGenCtlStyleEN.con_TextMode];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGenCtlStyleEN.con_TextMode,
      objGenCtlStyleCond.textMode,
      strComparisonOpTextMode,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGenCtlStyleCond.dicFldComparisonOp,
      clsGenCtlStyleEN.con_StyleZindex,
    ) == true
  ) {
    const strComparisonOpStyleZindex: string =
      objGenCtlStyleCond.dicFldComparisonOp[clsGenCtlStyleEN.con_StyleZindex];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsGenCtlStyleEN.con_StyleZindex,
      objGenCtlStyleCond.styleZindex,
      strComparisonOpStyleZindex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGenCtlStyleCond.dicFldComparisonOp,
      clsGenCtlStyleEN.con_StyleLeft,
    ) == true
  ) {
    const strComparisonOpStyleLeft: string =
      objGenCtlStyleCond.dicFldComparisonOp[clsGenCtlStyleEN.con_StyleLeft];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsGenCtlStyleEN.con_StyleLeft,
      objGenCtlStyleCond.styleLeft,
      strComparisonOpStyleLeft,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGenCtlStyleCond.dicFldComparisonOp,
      clsGenCtlStyleEN.con_StylePosition,
    ) == true
  ) {
    const strComparisonOpStylePosition: string =
      objGenCtlStyleCond.dicFldComparisonOp[clsGenCtlStyleEN.con_StylePosition];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsGenCtlStyleEN.con_StylePosition,
      objGenCtlStyleCond.stylePosition,
      strComparisonOpStylePosition,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objGenCtlStyleCond.dicFldComparisonOp,
      clsGenCtlStyleEN.con_StyleTop,
    ) == true
  ) {
    const strComparisonOpStyleTop: string =
      objGenCtlStyleCond.dicFldComparisonOp[clsGenCtlStyleEN.con_StyleTop];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsGenCtlStyleEN.con_StyleTop,
      objGenCtlStyleCond.styleTop,
      strComparisonOpStyleTop,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objGenCtlStyleENS:源对象
 * @param objGenCtlStyleENT:目标对象
 */
export function GenCtlStyle_GetObjFromJsonObj(
  objGenCtlStyleENS: clsGenCtlStyleEN,
): clsGenCtlStyleEN {
  const objGenCtlStyleENT: clsGenCtlStyleEN = new clsGenCtlStyleEN();
  ObjectAssign(objGenCtlStyleENT, objGenCtlStyleENS);
  return objGenCtlStyleENT;
}
