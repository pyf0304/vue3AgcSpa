/**
 * 类名:clsButtonStyleWApi
 * 表名:ButtonStyle(00050054)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/15 18:20:32
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 按钮样式(ButtonStyle)
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
import { clsButtonStyleEN } from '@/ts/L0Entity/SysPara/clsButtonStyleEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const buttonStyle_Controller = 'ButtonStyleApi';
export const buttonStyle_ConstructorName = 'buttonStyle';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strButtonStyleId:关键字
 * @returns 对象
 **/
export async function ButtonStyle_GetObjByButtonStyleIdAsync(
  strButtonStyleId: string,
): Promise<clsButtonStyleEN | null> {
  const strThisFuncName = 'GetObjByButtonStyleIdAsync';

  if (IsNullOrEmpty(strButtonStyleId) == true) {
    const strMsg = Format(
      '参数:[strButtonStyleId]不能为空!(In clsButtonStyleWApi.GetObjByButtonStyleIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strButtonStyleId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strButtonStyleId]的长度:[{0}]不正确!(clsButtonStyleWApi.GetObjByButtonStyleIdAsync)',
      strButtonStyleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByButtonStyleId';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strButtonStyleId,
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
      const objButtonStyle = ButtonStyle_GetObjFromJsonObj(returnObj);
      return objButtonStyle;
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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
 * @param strButtonStyleId:所给的关键字
 * @returns 对象
 */
export async function ButtonStyle_GetObjByButtonStyleIdCache(
  strButtonStyleId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByButtonStyleIdCache';

  if (IsNullOrEmpty(strButtonStyleId) == true) {
    const strMsg = Format(
      '参数:[strButtonStyleId]不能为空!(In clsButtonStyleWApi.GetObjByButtonStyleIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strButtonStyleId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strButtonStyleId]的长度:[{0}]不正确!(clsButtonStyleWApi.GetObjByButtonStyleIdCache)',
      strButtonStyleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrButtonStyleObjLstCache = await ButtonStyle_GetObjLstCache();
  try {
    const arrButtonStyleSel = arrButtonStyleObjLstCache.filter(
      (x) => x.buttonStyleId == strButtonStyleId,
    );
    let objButtonStyle: clsButtonStyleEN;
    if (arrButtonStyleSel.length > 0) {
      objButtonStyle = arrButtonStyleSel[0];
      return objButtonStyle;
    } else {
      if (bolTryAsyncOnce == true) {
        const objButtonStyleConst = await ButtonStyle_GetObjByButtonStyleIdAsync(strButtonStyleId);
        if (objButtonStyleConst != null) {
          ButtonStyle_ReFreshThisCache();
          return objButtonStyleConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strButtonStyleId,
      buttonStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strButtonStyleId:所给的关键字
 * @returns 对象
 */
export async function ButtonStyle_GetObjByButtonStyleIdlocalStorage(strButtonStyleId: string) {
  const strThisFuncName = 'GetObjByButtonStyleIdlocalStorage';

  if (IsNullOrEmpty(strButtonStyleId) == true) {
    const strMsg = Format(
      '参数:[strButtonStyleId]不能为空!(In clsButtonStyleWApi.GetObjByButtonStyleIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strButtonStyleId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strButtonStyleId]的长度:[{0}]不正确!(clsButtonStyleWApi.GetObjByButtonStyleIdlocalStorage)',
      strButtonStyleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsButtonStyleEN._CurrTabName, strButtonStyleId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objButtonStyleCache: clsButtonStyleEN = JSON.parse(strTempObj);
    return objButtonStyleCache;
  }
  try {
    const objButtonStyle = await ButtonStyle_GetObjByButtonStyleIdAsync(strButtonStyleId);
    if (objButtonStyle != null) {
      localStorage.setItem(strKey, JSON.stringify(objButtonStyle));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objButtonStyle;
    }
    return objButtonStyle;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strButtonStyleId,
      buttonStyle_ConstructorName,
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
 * @param objButtonStyle:所给的对象
 * @returns 对象
 */
export async function ButtonStyle_UpdateObjInLstCache(objButtonStyle: clsButtonStyleEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrButtonStyleObjLstCache = await ButtonStyle_GetObjLstCache();
    const obj = arrButtonStyleObjLstCache.find(
      (x) => x.buttonStyleId == objButtonStyle.buttonStyleId,
    );
    if (obj != null) {
      objButtonStyle.buttonStyleId = obj.buttonStyleId;
      ObjectAssign(obj, objButtonStyle);
    } else {
      arrButtonStyleObjLstCache.push(objButtonStyle);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      buttonStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strButtonStyleId:所给的关键字
 * @returns 对象
 */
export async function ButtonStyle_GetNameByButtonStyleIdCache(strButtonStyleId: string) {
  if (IsNullOrEmpty(strButtonStyleId) == true) {
    const strMsg = Format(
      '参数:[strButtonStyleId]不能为空!(In clsButtonStyleWApi.GetNameByButtonStyleIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strButtonStyleId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strButtonStyleId]的长度:[{0}]不正确!(clsButtonStyleWApi.GetNameByButtonStyleIdCache)',
      strButtonStyleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrButtonStyleObjLstCache = await ButtonStyle_GetObjLstCache();
  if (arrButtonStyleObjLstCache == null) return '';
  try {
    const arrButtonStyleSel = arrButtonStyleObjLstCache.filter(
      (x) => x.buttonStyleId == strButtonStyleId,
    );
    let objButtonStyle: clsButtonStyleEN;
    if (arrButtonStyleSel.length > 0) {
      objButtonStyle = arrButtonStyleSel[0];
      return objButtonStyle.buttonStyleName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strButtonStyleId,
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
export async function ButtonStyle_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsButtonStyleEN.con_ButtonStyleId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsButtonStyleEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsButtonStyleEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strButtonStyleId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objButtonStyle = await ButtonStyle_GetObjByButtonStyleIdCache(strButtonStyleId);
  if (objButtonStyle == null) return '';
  if (objButtonStyle.GetFldValue(strOutFldName) == null) return '';
  return objButtonStyle.GetFldValue(strOutFldName).toString();
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
export function ButtonStyle_SortFunDefa(a: clsButtonStyleEN, b: clsButtonStyleEN): number {
  return a.buttonStyleId.localeCompare(b.buttonStyleId);
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
export function ButtonStyle_SortFunDefa2Fld(a: clsButtonStyleEN, b: clsButtonStyleEN): number {
  if (a.buttonStyleName == b.buttonStyleName) return a.cssClass.localeCompare(b.cssClass);
  else return a.buttonStyleName.localeCompare(b.buttonStyleName);
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
export function ButtonStyle_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsButtonStyleEN.con_ButtonStyleId:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return a.buttonStyleId.localeCompare(b.buttonStyleId);
        };
      case clsButtonStyleEN.con_ButtonStyleName:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return a.buttonStyleName.localeCompare(b.buttonStyleName);
        };
      case clsButtonStyleEN.con_CssClass:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          if (a.cssClass == null) return -1;
          if (b.cssClass == null) return 1;
          return a.cssClass.localeCompare(b.cssClass);
        };
      case clsButtonStyleEN.con_Style:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return a.style.localeCompare(b.style);
        };
      case clsButtonStyleEN.con_Runat:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return a.runat.localeCompare(b.runat);
        };
      case clsButtonStyleEN.con_FontSize:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return a.fontSize.localeCompare(b.fontSize);
        };
      case clsButtonStyleEN.con_FontName:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return a.fontName.localeCompare(b.fontName);
        };
      case clsButtonStyleEN.con_Width:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return a.width - b.width;
        };
      case clsButtonStyleEN.con_Height:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return a.height - b.height;
        };
      case clsButtonStyleEN.con_StyleZindex:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return a.styleZindex - b.styleZindex;
        };
      case clsButtonStyleEN.con_StyleLeft:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return a.styleLeft - b.styleLeft;
        };
      case clsButtonStyleEN.con_StylePosition:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return a.stylePosition.localeCompare(b.stylePosition);
        };
      case clsButtonStyleEN.con_StyleTop:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return a.styleTop - b.styleTop;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ButtonStyle]中不存在!(in ${buttonStyle_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsButtonStyleEN.con_ButtonStyleId:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return b.buttonStyleId.localeCompare(a.buttonStyleId);
        };
      case clsButtonStyleEN.con_ButtonStyleName:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return b.buttonStyleName.localeCompare(a.buttonStyleName);
        };
      case clsButtonStyleEN.con_CssClass:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          if (b.cssClass == null) return -1;
          if (a.cssClass == null) return 1;
          return b.cssClass.localeCompare(a.cssClass);
        };
      case clsButtonStyleEN.con_Style:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return b.style.localeCompare(a.style);
        };
      case clsButtonStyleEN.con_Runat:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return b.runat.localeCompare(a.runat);
        };
      case clsButtonStyleEN.con_FontSize:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return b.fontSize.localeCompare(a.fontSize);
        };
      case clsButtonStyleEN.con_FontName:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return b.fontName.localeCompare(a.fontName);
        };
      case clsButtonStyleEN.con_Width:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return b.width - a.width;
        };
      case clsButtonStyleEN.con_Height:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return b.height - a.height;
        };
      case clsButtonStyleEN.con_StyleZindex:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return b.styleZindex - a.styleZindex;
        };
      case clsButtonStyleEN.con_StyleLeft:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return b.styleLeft - a.styleLeft;
        };
      case clsButtonStyleEN.con_StylePosition:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return b.stylePosition.localeCompare(a.stylePosition);
        };
      case clsButtonStyleEN.con_StyleTop:
        return (a: clsButtonStyleEN, b: clsButtonStyleEN) => {
          return b.styleTop - a.styleTop;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ButtonStyle]中不存在!(in ${buttonStyle_ConstructorName}.${strThisFuncName})`;
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
export async function ButtonStyle_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsButtonStyleEN.con_ButtonStyleId:
      return (obj: clsButtonStyleEN) => {
        return obj.buttonStyleId === value;
      };
    case clsButtonStyleEN.con_ButtonStyleName:
      return (obj: clsButtonStyleEN) => {
        return obj.buttonStyleName === value;
      };
    case clsButtonStyleEN.con_CssClass:
      return (obj: clsButtonStyleEN) => {
        return obj.cssClass === value;
      };
    case clsButtonStyleEN.con_Style:
      return (obj: clsButtonStyleEN) => {
        return obj.style === value;
      };
    case clsButtonStyleEN.con_Runat:
      return (obj: clsButtonStyleEN) => {
        return obj.runat === value;
      };
    case clsButtonStyleEN.con_FontSize:
      return (obj: clsButtonStyleEN) => {
        return obj.fontSize === value;
      };
    case clsButtonStyleEN.con_FontName:
      return (obj: clsButtonStyleEN) => {
        return obj.fontName === value;
      };
    case clsButtonStyleEN.con_Width:
      return (obj: clsButtonStyleEN) => {
        return obj.width === value;
      };
    case clsButtonStyleEN.con_Height:
      return (obj: clsButtonStyleEN) => {
        return obj.height === value;
      };
    case clsButtonStyleEN.con_StyleZindex:
      return (obj: clsButtonStyleEN) => {
        return obj.styleZindex === value;
      };
    case clsButtonStyleEN.con_StyleLeft:
      return (obj: clsButtonStyleEN) => {
        return obj.styleLeft === value;
      };
    case clsButtonStyleEN.con_StylePosition:
      return (obj: clsButtonStyleEN) => {
        return obj.stylePosition === value;
      };
    case clsButtonStyleEN.con_StyleTop:
      return (obj: clsButtonStyleEN) => {
        return obj.styleTop === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ButtonStyle]中不存在!(in ${buttonStyle_ConstructorName}.${strThisFuncName})`;
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
export async function ButtonStyle_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsButtonStyleEN.con_ButtonStyleId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrButtonStyle = await ButtonStyle_GetObjLstCache();
  if (arrButtonStyle == null) return [];
  let arrButtonStyleSel = arrButtonStyle;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrButtonStyleSel = arrButtonStyleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrButtonStyleSel = arrButtonStyleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrButtonStyleSel = arrButtonStyleSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrButtonStyleSel = arrButtonStyleSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrButtonStyleSel = arrButtonStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrButtonStyleSel = arrButtonStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrButtonStyleSel = arrButtonStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrButtonStyleSel = arrButtonStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrButtonStyleSel = arrButtonStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrButtonStyleSel = arrButtonStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrButtonStyleSel.length == 0) return [];
  return arrButtonStyleSel.map((x) => x.buttonStyleId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ButtonStyle_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
export async function ButtonStyle_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
export async function ButtonStyle_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsButtonStyleEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

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
      const objButtonStyle = ButtonStyle_GetObjFromJsonObj(returnObj);
      return objButtonStyle;
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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
export async function ButtonStyle_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsButtonStyleEN._CurrTabName;
  if (IsNullOrEmpty(clsButtonStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsButtonStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrButtonStyleExObjLstCache: Array<clsButtonStyleEN> = CacheHelper.Get(strKey);
    const arrButtonStyleObjLstT = ButtonStyle_GetObjLstByJSONObjLst(arrButtonStyleExObjLstCache);
    return arrButtonStyleObjLstT;
  }
  try {
    const arrButtonStyleExObjLst = await ButtonStyle_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrButtonStyleExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrButtonStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrButtonStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      buttonStyle_ConstructorName,
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
export async function ButtonStyle_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsButtonStyleEN._CurrTabName;
  if (IsNullOrEmpty(clsButtonStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsButtonStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrButtonStyleExObjLstCache: Array<clsButtonStyleEN> = JSON.parse(strTempObjLst);
    const arrButtonStyleObjLstT = ButtonStyle_GetObjLstByJSONObjLst(arrButtonStyleExObjLstCache);
    return arrButtonStyleObjLstT;
  }
  try {
    const arrButtonStyleExObjLst = await ButtonStyle_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrButtonStyleExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrButtonStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrButtonStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      buttonStyle_ConstructorName,
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
export async function ButtonStyle_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsButtonStyleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrButtonStyleObjLstCache: Array<clsButtonStyleEN> = JSON.parse(strTempObjLst);
    return arrButtonStyleObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ButtonStyle_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsButtonStyleEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

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
          buttonStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ButtonStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
export async function ButtonStyle_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsButtonStyleEN._CurrTabName;
  if (IsNullOrEmpty(clsButtonStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsButtonStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrButtonStyleExObjLstCache: Array<clsButtonStyleEN> = JSON.parse(strTempObjLst);
    const arrButtonStyleObjLstT = ButtonStyle_GetObjLstByJSONObjLst(arrButtonStyleExObjLstCache);
    return arrButtonStyleObjLstT;
  }
  try {
    const arrButtonStyleExObjLst = await ButtonStyle_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrButtonStyleExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrButtonStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrButtonStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      buttonStyle_ConstructorName,
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
export async function ButtonStyle_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsButtonStyleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrButtonStyleObjLstCache: Array<clsButtonStyleEN> = JSON.parse(strTempObjLst);
    return arrButtonStyleObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ButtonStyle_GetObjLstCache(): Promise<Array<clsButtonStyleEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrButtonStyleObjLstCache;
  switch (clsButtonStyleEN.CacheModeId) {
    case '04': //sessionStorage
      arrButtonStyleObjLstCache = await ButtonStyle_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrButtonStyleObjLstCache = await ButtonStyle_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrButtonStyleObjLstCache = await ButtonStyle_GetObjLstClientCache();
      break;
    default:
      arrButtonStyleObjLstCache = await ButtonStyle_GetObjLstClientCache();
      break;
  }
  return arrButtonStyleObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ButtonStyle_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrButtonStyleObjLstCache;
  switch (clsButtonStyleEN.CacheModeId) {
    case '04': //sessionStorage
      arrButtonStyleObjLstCache = await ButtonStyle_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrButtonStyleObjLstCache = await ButtonStyle_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrButtonStyleObjLstCache = null;
      break;
    default:
      arrButtonStyleObjLstCache = null;
      break;
  }
  return arrButtonStyleObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrButtonStyleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ButtonStyle_GetSubObjLstCache(objButtonStyleCond: clsButtonStyleEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrButtonStyleObjLstCache = await ButtonStyle_GetObjLstCache();
  let arrButtonStyleSel = arrButtonStyleObjLstCache;
  if (objButtonStyleCond.sfFldComparisonOp == null || objButtonStyleCond.sfFldComparisonOp == '')
    return arrButtonStyleSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objButtonStyleCond.sfFldComparisonOp,
  );
  //console.log("clsButtonStyleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objButtonStyleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objButtonStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrButtonStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objButtonStyleCond),
      buttonStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsButtonStyleEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrButtonStyleId:关键字列表
 * @returns 对象列表
 **/
export async function ButtonStyle_GetObjLstByButtonStyleIdLstAsync(
  arrButtonStyleId: Array<string>,
): Promise<Array<clsButtonStyleEN>> {
  const strThisFuncName = 'GetObjLstByButtonStyleIdLstAsync';
  const strAction = 'GetObjLstByButtonStyleIdLst';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrButtonStyleId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          buttonStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ButtonStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
 * @param arrstrButtonStyleIdLst:关键字列表
 * @returns 对象列表
 */
export async function ButtonStyle_GetObjLstByButtonStyleIdLstCache(
  arrButtonStyleIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByButtonStyleIdLstCache';
  try {
    const arrButtonStyleObjLstCache = await ButtonStyle_GetObjLstCache();
    const arrButtonStyleSel = arrButtonStyleObjLstCache.filter(
      (x) => arrButtonStyleIdLst.indexOf(x.buttonStyleId) > -1,
    );
    return arrButtonStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrButtonStyleIdLst.join(','),
      buttonStyle_ConstructorName,
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
export async function ButtonStyle_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsButtonStyleEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

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
          buttonStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ButtonStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
export async function ButtonStyle_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsButtonStyleEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

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
          buttonStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ButtonStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
export async function ButtonStyle_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsButtonStyleEN>();
  const arrButtonStyleObjLstCache = await ButtonStyle_GetObjLstCache();
  if (arrButtonStyleObjLstCache.length == 0) return arrButtonStyleObjLstCache;
  let arrButtonStyleSel = arrButtonStyleObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objButtonStyleCond = new clsButtonStyleEN();
  ObjectAssign(objButtonStyleCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsButtonStyleWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objButtonStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrButtonStyleSel.length == 0) return arrButtonStyleSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrButtonStyleSel = arrButtonStyleSel.sort(ButtonStyle_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrButtonStyleSel = arrButtonStyleSel.sort(objPagerPara.sortFun);
    }
    arrButtonStyleSel = arrButtonStyleSel.slice(intStart, intEnd);
    return arrButtonStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      buttonStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsButtonStyleEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ButtonStyle_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsButtonStyleEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsButtonStyleEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

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
          buttonStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ButtonStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
 * @param strButtonStyleId:关键字
 * @returns 获取删除的结果
 **/
export async function ButtonStyle_DelRecordAsync(strButtonStyleId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strButtonStyleId);

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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
 * @param arrButtonStyleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ButtonStyle_DelButtonStylesAsync(
  arrButtonStyleId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelButtonStylesAsync';
  const strAction = 'DelButtonStyles';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrButtonStyleId, config);
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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
export async function ButtonStyle_DelButtonStylesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelButtonStylesByCondAsync';
  const strAction = 'DelButtonStylesByCond';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
 * @param objButtonStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ButtonStyle_AddNewRecordAsync(
  objButtonStyleEN: clsButtonStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objButtonStyleEN.buttonStyleId === null || objButtonStyleEN.buttonStyleId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objButtonStyleEN);
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objButtonStyleEN, config);
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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
 * @param objButtonStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ButtonStyle_AddNewRecordWithMaxIdAsync(
  objButtonStyleEN: clsButtonStyleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objButtonStyleEN, config);
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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
 * @param objButtonStyleEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ButtonStyle_AddNewRecordWithReturnKeyAsync(
  objButtonStyleEN: clsButtonStyleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objButtonStyleEN, config);
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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
 * @param objButtonStyleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ButtonStyle_UpdateRecordAsync(
  objButtonStyleEN: clsButtonStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objButtonStyleEN.sfUpdFldSetStr === undefined ||
    objButtonStyleEN.sfUpdFldSetStr === null ||
    objButtonStyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objButtonStyleEN.buttonStyleId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objButtonStyleEN, config);
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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
 * @param objButtonStyleEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ButtonStyle_UpdateWithConditionAsync(
  objButtonStyleEN: clsButtonStyleEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objButtonStyleEN.sfUpdFldSetStr === undefined ||
    objButtonStyleEN.sfUpdFldSetStr === null ||
    objButtonStyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objButtonStyleEN.buttonStyleId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);
  objButtonStyleEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objButtonStyleEN, config);
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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
 * @param objstrButtonStyleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ButtonStyle_IsExistRecordCache(objButtonStyleCond: clsButtonStyleEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrButtonStyleObjLstCache = await ButtonStyle_GetObjLstCache();
  if (arrButtonStyleObjLstCache == null) return false;
  let arrButtonStyleSel = arrButtonStyleObjLstCache;
  if (objButtonStyleCond.sfFldComparisonOp == null || objButtonStyleCond.sfFldComparisonOp == '')
    return arrButtonStyleSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objButtonStyleCond.sfFldComparisonOp,
  );
  //console.log("clsButtonStyleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objButtonStyleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objButtonStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrButtonStyleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objButtonStyleCond),
      buttonStyle_ConstructorName,
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
export async function ButtonStyle_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
 * @param strButtonStyleId:所给的关键字
 * @returns 对象
 */
export async function ButtonStyle_IsExistCache(strButtonStyleId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrButtonStyleObjLstCache = await ButtonStyle_GetObjLstCache();
  if (arrButtonStyleObjLstCache == null) return false;
  try {
    const arrButtonStyleSel = arrButtonStyleObjLstCache.filter(
      (x) => x.buttonStyleId == strButtonStyleId,
    );
    if (arrButtonStyleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strButtonStyleId,
      buttonStyle_ConstructorName,
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
 * @param strButtonStyleId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ButtonStyle_IsExistAsync(strButtonStyleId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strButtonStyleId,
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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
export async function ButtonStyle_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
 * @param objButtonStyleCond:条件对象
 * @returns 对象列表记录数
 */
export async function ButtonStyle_GetRecCountByCondCache(objButtonStyleCond: clsButtonStyleEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrButtonStyleObjLstCache = await ButtonStyle_GetObjLstCache();
  if (arrButtonStyleObjLstCache == null) return 0;
  let arrButtonStyleSel = arrButtonStyleObjLstCache;
  if (objButtonStyleCond.sfFldComparisonOp == null || objButtonStyleCond.sfFldComparisonOp == '')
    return arrButtonStyleSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objButtonStyleCond.sfFldComparisonOp,
  );
  //console.log("clsButtonStyleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objButtonStyleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objButtonStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrButtonStyleSel = arrButtonStyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrButtonStyleSel = arrButtonStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrButtonStyleSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objButtonStyleCond),
      buttonStyle_ConstructorName,
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
export async function ButtonStyle_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(buttonStyle_Controller, strAction);

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
        buttonStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonStyle_ConstructorName,
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
export function ButtonStyle_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ButtonStyle_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsButtonStyleEN._CurrTabName;
  switch (clsButtonStyleEN.CacheModeId) {
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
export function ButtonStyle_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsButtonStyleEN._CurrTabName;
    switch (clsButtonStyleEN.CacheModeId) {
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
export async function ButtonStyle_BindDdl_ButtonStyleIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ButtonStyleIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ButtonStyleIdInDivCache");
  const arrObjLstSel = await ButtonStyle_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsButtonStyleEN.con_ButtonStyleId,
    clsButtonStyleEN.con_ButtonStyleName,
    '按钮样式',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ButtonStyle_CheckPropertyNew(pobjButtonStyleEN: clsButtonStyleEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjButtonStyleEN.buttonStyleName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[按钮样式名]不能为空(In 按钮样式)!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjButtonStyleEN.style) === true) {
    throw new Error(
      '(errid:Watl000411)字段[类型]不能为空(In 按钮样式)!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjButtonStyleEN.runat) === true) {
    throw new Error(
      '(errid:Watl000411)字段[运行在]不能为空(In 按钮样式)!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjButtonStyleEN.fontSize) === true) {
    throw new Error(
      '(errid:Watl000411)字段[字号]不能为空(In 按钮样式)!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjButtonStyleEN.fontName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[字体]不能为空(In 按钮样式)!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjButtonStyleEN.width ||
    (pobjButtonStyleEN.width != null && pobjButtonStyleEN.width.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[宽]不能为空(In 按钮样式)!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjButtonStyleEN.height ||
    (pobjButtonStyleEN.height != null && pobjButtonStyleEN.height.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[高度]不能为空(In 按钮样式)!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjButtonStyleEN.styleZindex ||
    (pobjButtonStyleEN.styleZindex != null && pobjButtonStyleEN.styleZindex.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[Style_Zindex]不能为空(In 按钮样式)!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjButtonStyleEN.styleLeft ||
    (pobjButtonStyleEN.styleLeft != null && pobjButtonStyleEN.styleLeft.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[Style_Left]不能为空(In 按钮样式)!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjButtonStyleEN.stylePosition) === true) {
    throw new Error(
      '(errid:Watl000411)字段[Style_Position]不能为空(In 按钮样式)!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjButtonStyleEN.styleTop ||
    (pobjButtonStyleEN.styleTop != null && pobjButtonStyleEN.styleTop.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[Style_Top]不能为空(In 按钮样式)!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjButtonStyleEN.buttonStyleId) == false &&
    GetStrLen(pobjButtonStyleEN.buttonStyleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[按钮样式Id(buttonStyleId)]的长度不能超过4(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.buttonStyleId)(clsButtonStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.buttonStyleName) == false &&
    GetStrLen(pobjButtonStyleEN.buttonStyleName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[按钮样式名(buttonStyleName)]的长度不能超过30(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.buttonStyleName)(clsButtonStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.cssClass) == false &&
    GetStrLen(pobjButtonStyleEN.cssClass) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[样式表(cssClass)]的长度不能超过50(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.cssClass)(clsButtonStyleBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjButtonStyleEN.style) == false && GetStrLen(pobjButtonStyleEN.style) > 800) {
    throw new Error(
      '(errid:Watl000413)字段[类型(style)]的长度不能超过800(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.style)(clsButtonStyleBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjButtonStyleEN.runat) == false && GetStrLen(pobjButtonStyleEN.runat) > 30) {
    throw new Error(
      '(errid:Watl000413)字段[运行在(runat)]的长度不能超过30(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.runat)(clsButtonStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.fontSize) == false &&
    GetStrLen(pobjButtonStyleEN.fontSize) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字号(fontSize)]的长度不能超过20(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.fontSize)(clsButtonStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.fontName) == false &&
    GetStrLen(pobjButtonStyleEN.fontName) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字体(fontName)]的长度不能超过20(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.fontName)(clsButtonStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.stylePosition) == false &&
    GetStrLen(pobjButtonStyleEN.stylePosition) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Style_Position(stylePosition)]的长度不能超过20(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.stylePosition)(clsButtonStyleBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjButtonStyleEN.buttonStyleId) == false &&
    undefined !== pobjButtonStyleEN.buttonStyleId &&
    tzDataType.isString(pobjButtonStyleEN.buttonStyleId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[按钮样式Id(buttonStyleId)]的值:[$(pobjButtonStyleEN.buttonStyleId)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.buttonStyleName) == false &&
    undefined !== pobjButtonStyleEN.buttonStyleName &&
    tzDataType.isString(pobjButtonStyleEN.buttonStyleName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[按钮样式名(buttonStyleName)]的值:[$(pobjButtonStyleEN.buttonStyleName)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.cssClass) == false &&
    undefined !== pobjButtonStyleEN.cssClass &&
    tzDataType.isString(pobjButtonStyleEN.cssClass) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[样式表(cssClass)]的值:[$(pobjButtonStyleEN.cssClass)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.style) == false &&
    undefined !== pobjButtonStyleEN.style &&
    tzDataType.isString(pobjButtonStyleEN.style) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类型(style)]的值:[$(pobjButtonStyleEN.style)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.runat) == false &&
    undefined !== pobjButtonStyleEN.runat &&
    tzDataType.isString(pobjButtonStyleEN.runat) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[运行在(runat)]的值:[$(pobjButtonStyleEN.runat)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.fontSize) == false &&
    undefined !== pobjButtonStyleEN.fontSize &&
    tzDataType.isString(pobjButtonStyleEN.fontSize) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字号(fontSize)]的值:[$(pobjButtonStyleEN.fontSize)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.fontName) == false &&
    undefined !== pobjButtonStyleEN.fontName &&
    tzDataType.isString(pobjButtonStyleEN.fontName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字体(fontName)]的值:[$(pobjButtonStyleEN.fontName)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjButtonStyleEN.width &&
    undefined !== pobjButtonStyleEN.width &&
    tzDataType.isNumber(pobjButtonStyleEN.width) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[宽(width)]的值:[$(pobjButtonStyleEN.width)], 非法,应该为数值型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjButtonStyleEN.height &&
    undefined !== pobjButtonStyleEN.height &&
    tzDataType.isNumber(pobjButtonStyleEN.height) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[高度(height)]的值:[$(pobjButtonStyleEN.height)], 非法,应该为数值型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjButtonStyleEN.styleZindex &&
    undefined !== pobjButtonStyleEN.styleZindex &&
    tzDataType.isNumber(pobjButtonStyleEN.styleZindex) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Zindex(styleZindex)]的值:[$(pobjButtonStyleEN.styleZindex)], 非法,应该为数值型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjButtonStyleEN.styleLeft &&
    undefined !== pobjButtonStyleEN.styleLeft &&
    tzDataType.isNumber(pobjButtonStyleEN.styleLeft) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Left(styleLeft)]的值:[$(pobjButtonStyleEN.styleLeft)], 非法,应该为数值型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.stylePosition) == false &&
    undefined !== pobjButtonStyleEN.stylePosition &&
    tzDataType.isString(pobjButtonStyleEN.stylePosition) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Position(stylePosition)]的值:[$(pobjButtonStyleEN.stylePosition)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjButtonStyleEN.styleTop &&
    undefined !== pobjButtonStyleEN.styleTop &&
    tzDataType.isNumber(pobjButtonStyleEN.styleTop) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Top(styleTop)]的值:[$(pobjButtonStyleEN.styleTop)], 非法,应该为数值型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ButtonStyle_CheckProperty4Update(pobjButtonStyleEN: clsButtonStyleEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjButtonStyleEN.buttonStyleId) == false &&
    GetStrLen(pobjButtonStyleEN.buttonStyleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[按钮样式Id(buttonStyleId)]的长度不能超过4(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.buttonStyleId)(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.buttonStyleName) == false &&
    GetStrLen(pobjButtonStyleEN.buttonStyleName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[按钮样式名(buttonStyleName)]的长度不能超过30(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.buttonStyleName)(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.cssClass) == false &&
    GetStrLen(pobjButtonStyleEN.cssClass) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[样式表(cssClass)]的长度不能超过50(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.cssClass)(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjButtonStyleEN.style) == false && GetStrLen(pobjButtonStyleEN.style) > 800) {
    throw new Error(
      '(errid:Watl000416)字段[类型(style)]的长度不能超过800(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.style)(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjButtonStyleEN.runat) == false && GetStrLen(pobjButtonStyleEN.runat) > 30) {
    throw new Error(
      '(errid:Watl000416)字段[运行在(runat)]的长度不能超过30(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.runat)(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.fontSize) == false &&
    GetStrLen(pobjButtonStyleEN.fontSize) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字号(fontSize)]的长度不能超过20(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.fontSize)(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.fontName) == false &&
    GetStrLen(pobjButtonStyleEN.fontName) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字体(fontName)]的长度不能超过20(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.fontName)(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.stylePosition) == false &&
    GetStrLen(pobjButtonStyleEN.stylePosition) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Style_Position(stylePosition)]的长度不能超过20(In 按钮样式(ButtonStyle))!值:$(pobjButtonStyleEN.stylePosition)(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjButtonStyleEN.buttonStyleId) == false &&
    undefined !== pobjButtonStyleEN.buttonStyleId &&
    tzDataType.isString(pobjButtonStyleEN.buttonStyleId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[按钮样式Id(buttonStyleId)]的值:[$(pobjButtonStyleEN.buttonStyleId)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.buttonStyleName) == false &&
    undefined !== pobjButtonStyleEN.buttonStyleName &&
    tzDataType.isString(pobjButtonStyleEN.buttonStyleName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[按钮样式名(buttonStyleName)]的值:[$(pobjButtonStyleEN.buttonStyleName)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.cssClass) == false &&
    undefined !== pobjButtonStyleEN.cssClass &&
    tzDataType.isString(pobjButtonStyleEN.cssClass) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[样式表(cssClass)]的值:[$(pobjButtonStyleEN.cssClass)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.style) == false &&
    undefined !== pobjButtonStyleEN.style &&
    tzDataType.isString(pobjButtonStyleEN.style) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类型(style)]的值:[$(pobjButtonStyleEN.style)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.runat) == false &&
    undefined !== pobjButtonStyleEN.runat &&
    tzDataType.isString(pobjButtonStyleEN.runat) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[运行在(runat)]的值:[$(pobjButtonStyleEN.runat)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.fontSize) == false &&
    undefined !== pobjButtonStyleEN.fontSize &&
    tzDataType.isString(pobjButtonStyleEN.fontSize) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字号(fontSize)]的值:[$(pobjButtonStyleEN.fontSize)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.fontName) == false &&
    undefined !== pobjButtonStyleEN.fontName &&
    tzDataType.isString(pobjButtonStyleEN.fontName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字体(fontName)]的值:[$(pobjButtonStyleEN.fontName)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjButtonStyleEN.width &&
    undefined !== pobjButtonStyleEN.width &&
    tzDataType.isNumber(pobjButtonStyleEN.width) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[宽(width)]的值:[$(pobjButtonStyleEN.width)], 非法,应该为数值型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjButtonStyleEN.height &&
    undefined !== pobjButtonStyleEN.height &&
    tzDataType.isNumber(pobjButtonStyleEN.height) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[高度(height)]的值:[$(pobjButtonStyleEN.height)], 非法,应该为数值型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjButtonStyleEN.styleZindex &&
    undefined !== pobjButtonStyleEN.styleZindex &&
    tzDataType.isNumber(pobjButtonStyleEN.styleZindex) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Zindex(styleZindex)]的值:[$(pobjButtonStyleEN.styleZindex)], 非法,应该为数值型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjButtonStyleEN.styleLeft &&
    undefined !== pobjButtonStyleEN.styleLeft &&
    tzDataType.isNumber(pobjButtonStyleEN.styleLeft) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Left(styleLeft)]的值:[$(pobjButtonStyleEN.styleLeft)], 非法,应该为数值型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonStyleEN.stylePosition) == false &&
    undefined !== pobjButtonStyleEN.stylePosition &&
    tzDataType.isString(pobjButtonStyleEN.stylePosition) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Position(stylePosition)]的值:[$(pobjButtonStyleEN.stylePosition)], 非法,应该为字符型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjButtonStyleEN.styleTop &&
    undefined !== pobjButtonStyleEN.styleTop &&
    tzDataType.isNumber(pobjButtonStyleEN.styleTop) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Top(styleTop)]的值:[$(pobjButtonStyleEN.styleTop)], 非法,应该为数值型(In 按钮样式(ButtonStyle))!(clsButtonStyleBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjButtonStyleEN.buttonStyleId) === true ||
    pobjButtonStyleEN.buttonStyleId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[按钮样式Id]不能为空(In 按钮样式)!(clsButtonStyleBL:CheckProperty4Update)',
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
export function ButtonStyle_GetJSONStrByObj(pobjButtonStyleEN: clsButtonStyleEN): string {
  pobjButtonStyleEN.sfUpdFldSetStr = pobjButtonStyleEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjButtonStyleEN);
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
export function ButtonStyle_GetObjLstByJSONStr(strJSON: string): Array<clsButtonStyleEN> {
  let arrButtonStyleObjLst = new Array<clsButtonStyleEN>();
  if (strJSON === '') {
    return arrButtonStyleObjLst;
  }
  try {
    arrButtonStyleObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrButtonStyleObjLst;
  }
  return arrButtonStyleObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrButtonStyleObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ButtonStyle_GetObjLstByJSONObjLst(
  arrButtonStyleObjLstS: Array<clsButtonStyleEN>,
): Array<clsButtonStyleEN> {
  const arrButtonStyleObjLst = new Array<clsButtonStyleEN>();
  for (const objInFor of arrButtonStyleObjLstS) {
    const obj1 = ButtonStyle_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrButtonStyleObjLst.push(obj1);
  }
  return arrButtonStyleObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ButtonStyle_GetObjByJSONStr(strJSON: string): clsButtonStyleEN {
  let pobjButtonStyleEN = new clsButtonStyleEN();
  if (strJSON === '') {
    return pobjButtonStyleEN;
  }
  try {
    pobjButtonStyleEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjButtonStyleEN;
  }
  return pobjButtonStyleEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ButtonStyle_GetCombineCondition(objButtonStyleCond: clsButtonStyleEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonStyleCond.dicFldComparisonOp,
      clsButtonStyleEN.con_ButtonStyleId,
    ) == true
  ) {
    const strComparisonOpButtonStyleId: string =
      objButtonStyleCond.dicFldComparisonOp[clsButtonStyleEN.con_ButtonStyleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonStyleEN.con_ButtonStyleId,
      objButtonStyleCond.buttonStyleId,
      strComparisonOpButtonStyleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonStyleCond.dicFldComparisonOp,
      clsButtonStyleEN.con_ButtonStyleName,
    ) == true
  ) {
    const strComparisonOpButtonStyleName: string =
      objButtonStyleCond.dicFldComparisonOp[clsButtonStyleEN.con_ButtonStyleName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonStyleEN.con_ButtonStyleName,
      objButtonStyleCond.buttonStyleName,
      strComparisonOpButtonStyleName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonStyleCond.dicFldComparisonOp,
      clsButtonStyleEN.con_CssClass,
    ) == true
  ) {
    const strComparisonOpCssClass: string =
      objButtonStyleCond.dicFldComparisonOp[clsButtonStyleEN.con_CssClass];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonStyleEN.con_CssClass,
      objButtonStyleCond.cssClass,
      strComparisonOpCssClass,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonStyleCond.dicFldComparisonOp,
      clsButtonStyleEN.con_Style,
    ) == true
  ) {
    const strComparisonOpStyle: string =
      objButtonStyleCond.dicFldComparisonOp[clsButtonStyleEN.con_Style];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonStyleEN.con_Style,
      objButtonStyleCond.style,
      strComparisonOpStyle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonStyleCond.dicFldComparisonOp,
      clsButtonStyleEN.con_Runat,
    ) == true
  ) {
    const strComparisonOpRunat: string =
      objButtonStyleCond.dicFldComparisonOp[clsButtonStyleEN.con_Runat];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonStyleEN.con_Runat,
      objButtonStyleCond.runat,
      strComparisonOpRunat,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonStyleCond.dicFldComparisonOp,
      clsButtonStyleEN.con_FontSize,
    ) == true
  ) {
    const strComparisonOpFontSize: string =
      objButtonStyleCond.dicFldComparisonOp[clsButtonStyleEN.con_FontSize];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonStyleEN.con_FontSize,
      objButtonStyleCond.fontSize,
      strComparisonOpFontSize,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonStyleCond.dicFldComparisonOp,
      clsButtonStyleEN.con_FontName,
    ) == true
  ) {
    const strComparisonOpFontName: string =
      objButtonStyleCond.dicFldComparisonOp[clsButtonStyleEN.con_FontName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonStyleEN.con_FontName,
      objButtonStyleCond.fontName,
      strComparisonOpFontName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonStyleCond.dicFldComparisonOp,
      clsButtonStyleEN.con_Width,
    ) == true
  ) {
    const strComparisonOpWidth: string =
      objButtonStyleCond.dicFldComparisonOp[clsButtonStyleEN.con_Width];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsButtonStyleEN.con_Width,
      objButtonStyleCond.width,
      strComparisonOpWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonStyleCond.dicFldComparisonOp,
      clsButtonStyleEN.con_Height,
    ) == true
  ) {
    const strComparisonOpHeight: string =
      objButtonStyleCond.dicFldComparisonOp[clsButtonStyleEN.con_Height];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsButtonStyleEN.con_Height,
      objButtonStyleCond.height,
      strComparisonOpHeight,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonStyleCond.dicFldComparisonOp,
      clsButtonStyleEN.con_StyleZindex,
    ) == true
  ) {
    const strComparisonOpStyleZindex: string =
      objButtonStyleCond.dicFldComparisonOp[clsButtonStyleEN.con_StyleZindex];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsButtonStyleEN.con_StyleZindex,
      objButtonStyleCond.styleZindex,
      strComparisonOpStyleZindex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonStyleCond.dicFldComparisonOp,
      clsButtonStyleEN.con_StyleLeft,
    ) == true
  ) {
    const strComparisonOpStyleLeft: string =
      objButtonStyleCond.dicFldComparisonOp[clsButtonStyleEN.con_StyleLeft];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsButtonStyleEN.con_StyleLeft,
      objButtonStyleCond.styleLeft,
      strComparisonOpStyleLeft,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonStyleCond.dicFldComparisonOp,
      clsButtonStyleEN.con_StylePosition,
    ) == true
  ) {
    const strComparisonOpStylePosition: string =
      objButtonStyleCond.dicFldComparisonOp[clsButtonStyleEN.con_StylePosition];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonStyleEN.con_StylePosition,
      objButtonStyleCond.stylePosition,
      strComparisonOpStylePosition,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonStyleCond.dicFldComparisonOp,
      clsButtonStyleEN.con_StyleTop,
    ) == true
  ) {
    const strComparisonOpStyleTop: string =
      objButtonStyleCond.dicFldComparisonOp[clsButtonStyleEN.con_StyleTop];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsButtonStyleEN.con_StyleTop,
      objButtonStyleCond.styleTop,
      strComparisonOpStyleTop,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objButtonStyleENS:源对象
 * @param objButtonStyleENT:目标对象
 */
export function ButtonStyle_GetObjFromJsonObj(
  objButtonStyleENS: clsButtonStyleEN,
): clsButtonStyleEN {
  const objButtonStyleENT: clsButtonStyleEN = new clsButtonStyleEN();
  ObjectAssign(objButtonStyleENT, objButtonStyleENS);
  return objButtonStyleENT;
}
