/**
 * 类名:clsCheckStyleWApi
 * 表名:CheckStyle(00050056)
 * 版本:2023.06.21.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/22 09:47:08
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
 * 复选框样式(CheckStyle)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年06月22日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
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

import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsCheckStyleEN } from '@/ts/L0Entity/ViewControlManage/clsCheckStyleEN';

export const checkStyle_Controller = 'CheckStyleApi';
export const checkStyle_ConstructorName = 'checkStyle';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCheckStyleId:关键字
 * @returns 对象
 **/
export async function CheckStyle_GetObjByCheckStyleIdAsync(
  strCheckStyleId: string,
): Promise<clsCheckStyleEN | null> {
  const strThisFuncName = 'GetObjByCheckStyleIdAsync';

  if (IsNullOrEmpty(strCheckStyleId) == true) {
    const strMsg = Format(
      '参数:[strCheckStyleId]不能为空！(In clsCheckStyleWApi.GetObjByCheckStyleIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCheckStyleId';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCheckStyleId,
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
      const objCheckStyle = CheckStyle_GetObjFromJsonObj(returnObj);
      return objCheckStyle;
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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
 * @param strCheckStyleId:所给的关键字
 * @returns 对象
 */
export async function CheckStyle_GetObjByCheckStyleIdCache(
  strCheckStyleId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCheckStyleIdCache';

  if (IsNullOrEmpty(strCheckStyleId) == true) {
    const strMsg = Format(
      '参数:[strCheckStyleId]不能为空！(In clsCheckStyleWApi.GetObjByCheckStyleIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCheckStyleObjLstCache = await CheckStyle_GetObjLstCache();
  try {
    const arrCheckStyleSel = arrCheckStyleObjLstCache.filter(
      (x) => x.checkStyleId == strCheckStyleId,
    );
    let objCheckStyle: clsCheckStyleEN;
    if (arrCheckStyleSel.length > 0) {
      objCheckStyle = arrCheckStyleSel[0];
      return objCheckStyle;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCheckStyleConst = await CheckStyle_GetObjByCheckStyleIdAsync(strCheckStyleId);
        if (objCheckStyleConst != null) {
          CheckStyle_ReFreshThisCache();
          return objCheckStyleConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCheckStyleId,
      checkStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCheckStyleId:所给的关键字
 * @returns 对象
 */
export async function CheckStyle_GetObjByCheckStyleIdlocalStorage(strCheckStyleId: string) {
  const strThisFuncName = 'GetObjByCheckStyleIdlocalStorage';

  if (IsNullOrEmpty(strCheckStyleId) == true) {
    const strMsg = Format(
      '参数:[strCheckStyleId]不能为空！(In clsCheckStyleWApi.GetObjByCheckStyleIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsCheckStyleEN._CurrTabName, strCheckStyleId);
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objCheckStyleCache: clsCheckStyleEN = JSON.parse(strTempObj);
    return objCheckStyleCache;
  }
  try {
    const objCheckStyle = await CheckStyle_GetObjByCheckStyleIdAsync(strCheckStyleId);
    if (objCheckStyle != null) {
      localStorage.setItem(strKey, JSON.stringify(objCheckStyle));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objCheckStyle;
    }
    return objCheckStyle;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCheckStyleId,
      checkStyle_ConstructorName,
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
 * @param objCheckStyle:所给的对象
 * @returns 对象
 */
export async function CheckStyle_UpdateObjInLstCache(objCheckStyle: clsCheckStyleEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCheckStyleObjLstCache = await CheckStyle_GetObjLstCache();
    const obj = arrCheckStyleObjLstCache.find((x) => x.checkStyleId == objCheckStyle.checkStyleId);
    if (obj != null) {
      objCheckStyle.checkStyleId = obj.checkStyleId;
      ObjectAssign(obj, objCheckStyle);
    } else {
      arrCheckStyleObjLstCache.push(objCheckStyle);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      checkStyle_ConstructorName,
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
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function CheckStyle_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsCheckStyleEN.con_CheckStyleId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCheckStyleEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strOutFldName,
      clsCheckStyleEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCheckStyleId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objCheckStyle = await CheckStyle_GetObjByCheckStyleIdCache(strCheckStyleId);
  if (objCheckStyle == null) return '';
  if (objCheckStyle.GetFldValue(strOutFldName) == null) return '';
  return objCheckStyle.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CheckStyle_SortFunDefa(a: clsCheckStyleEN, b: clsCheckStyleEN): number {
  return a.checkStyleId.localeCompare(b.checkStyleId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CheckStyle_SortFunDefa2Fld(a: clsCheckStyleEN, b: clsCheckStyleEN): number {
  if (a.checkStyleName == b.checkStyleName) return a.style.localeCompare(b.style);
  else return a.checkStyleName.localeCompare(b.checkStyleName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CheckStyle_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCheckStyleEN.con_CheckStyleId:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          return a.checkStyleId.localeCompare(b.checkStyleId);
        };
      case clsCheckStyleEN.con_CheckStyleName:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          return a.checkStyleName.localeCompare(b.checkStyleName);
        };
      case clsCheckStyleEN.con_Style:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          if (a.style == null) return -1;
          if (b.style == null) return 1;
          return a.style.localeCompare(b.style);
        };
      case clsCheckStyleEN.con_Runat:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          if (a.runat == null) return -1;
          if (b.runat == null) return 1;
          return a.runat.localeCompare(b.runat);
        };
      case clsCheckStyleEN.con_FontSize:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          if (a.fontSize == null) return -1;
          if (b.fontSize == null) return 1;
          return a.fontSize.localeCompare(b.fontSize);
        };
      case clsCheckStyleEN.con_FontName:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          if (a.fontName == null) return -1;
          if (b.fontName == null) return 1;
          return a.fontName.localeCompare(b.fontName);
        };
      case clsCheckStyleEN.con_Width:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          return a.width - b.width;
        };
      case clsCheckStyleEN.con_Height:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          return a.height - b.height;
        };
      case clsCheckStyleEN.con_StyleZindex:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          return a.styleZindex - b.styleZindex;
        };
      case clsCheckStyleEN.con_StyleLeft:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          return a.styleLeft - b.styleLeft;
        };
      case clsCheckStyleEN.con_StylePosition:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          if (a.stylePosition == null) return -1;
          if (b.stylePosition == null) return 1;
          return a.stylePosition.localeCompare(b.stylePosition);
        };
      case clsCheckStyleEN.con_StyleTop:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          return a.styleTop - b.styleTop;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CheckStyle]中不存在！(in ${checkStyle_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCheckStyleEN.con_CheckStyleId:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          return b.checkStyleId.localeCompare(a.checkStyleId);
        };
      case clsCheckStyleEN.con_CheckStyleName:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          return b.checkStyleName.localeCompare(a.checkStyleName);
        };
      case clsCheckStyleEN.con_Style:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          if (b.style == null) return -1;
          if (a.style == null) return 1;
          return b.style.localeCompare(a.style);
        };
      case clsCheckStyleEN.con_Runat:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          if (b.runat == null) return -1;
          if (a.runat == null) return 1;
          return b.runat.localeCompare(a.runat);
        };
      case clsCheckStyleEN.con_FontSize:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          if (b.fontSize == null) return -1;
          if (a.fontSize == null) return 1;
          return b.fontSize.localeCompare(a.fontSize);
        };
      case clsCheckStyleEN.con_FontName:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          if (b.fontName == null) return -1;
          if (a.fontName == null) return 1;
          return b.fontName.localeCompare(a.fontName);
        };
      case clsCheckStyleEN.con_Width:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          return b.width - a.width;
        };
      case clsCheckStyleEN.con_Height:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          return b.height - a.height;
        };
      case clsCheckStyleEN.con_StyleZindex:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          return b.styleZindex - a.styleZindex;
        };
      case clsCheckStyleEN.con_StyleLeft:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          return b.styleLeft - a.styleLeft;
        };
      case clsCheckStyleEN.con_StylePosition:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          if (b.stylePosition == null) return -1;
          if (a.stylePosition == null) return 1;
          return b.stylePosition.localeCompare(a.stylePosition);
        };
      case clsCheckStyleEN.con_StyleTop:
        return (a: clsCheckStyleEN, b: clsCheckStyleEN) => {
          return b.styleTop - a.styleTop;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CheckStyle]中不存在！(in ${checkStyle_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function CheckStyle_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCheckStyleEN.con_CheckStyleId:
      return (obj: clsCheckStyleEN) => {
        return obj.checkStyleId === value;
      };
    case clsCheckStyleEN.con_CheckStyleName:
      return (obj: clsCheckStyleEN) => {
        return obj.checkStyleName === value;
      };
    case clsCheckStyleEN.con_Style:
      return (obj: clsCheckStyleEN) => {
        return obj.style === value;
      };
    case clsCheckStyleEN.con_Runat:
      return (obj: clsCheckStyleEN) => {
        return obj.runat === value;
      };
    case clsCheckStyleEN.con_FontSize:
      return (obj: clsCheckStyleEN) => {
        return obj.fontSize === value;
      };
    case clsCheckStyleEN.con_FontName:
      return (obj: clsCheckStyleEN) => {
        return obj.fontName === value;
      };
    case clsCheckStyleEN.con_Width:
      return (obj: clsCheckStyleEN) => {
        return obj.width === value;
      };
    case clsCheckStyleEN.con_Height:
      return (obj: clsCheckStyleEN) => {
        return obj.height === value;
      };
    case clsCheckStyleEN.con_StyleZindex:
      return (obj: clsCheckStyleEN) => {
        return obj.styleZindex === value;
      };
    case clsCheckStyleEN.con_StyleLeft:
      return (obj: clsCheckStyleEN) => {
        return obj.styleLeft === value;
      };
    case clsCheckStyleEN.con_StylePosition:
      return (obj: clsCheckStyleEN) => {
        return obj.stylePosition === value;
      };
    case clsCheckStyleEN.con_StyleTop:
      return (obj: clsCheckStyleEN) => {
        return obj.styleTop === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CheckStyle]中不存在！(in ${checkStyle_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function CheckStyle_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsCheckStyleEN.con_CheckStyleId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrCheckStyle = await CheckStyle_GetObjLstCache();
  if (arrCheckStyle == null) return [];
  let arrCheckStyleSel = arrCheckStyle;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCheckStyleSel = arrCheckStyleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCheckStyleSel = arrCheckStyleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCheckStyleSel = arrCheckStyleSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCheckStyleSel = arrCheckStyleSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCheckStyleSel = arrCheckStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrCheckStyleSel = arrCheckStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCheckStyleSel = arrCheckStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCheckStyleSel = arrCheckStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCheckStyleSel = arrCheckStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCheckStyleSel = arrCheckStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrCheckStyleSel.length == 0) return [];
  return arrCheckStyleSel.map((x) => x.checkStyleId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CheckStyle_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
export async function CheckStyle_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
export async function CheckStyle_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCheckStyleEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

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
      const objCheckStyle = CheckStyle_GetObjFromJsonObj(returnObj);
      return objCheckStyle;
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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
export async function CheckStyle_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCheckStyleEN._CurrTabName;
  if (IsNullOrEmpty(clsCheckStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCheckStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrCheckStyleExObjLstCache: Array<clsCheckStyleEN> = CacheHelper.Get(strKey);
    const arrCheckStyleObjLstT = CheckStyle_GetObjLstByJSONObjLst(arrCheckStyleExObjLstCache);
    return arrCheckStyleObjLstT;
  }
  try {
    const arrCheckStyleExObjLst = await CheckStyle_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCheckStyleExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrCheckStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrCheckStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      checkStyle_ConstructorName,
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
export async function CheckStyle_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCheckStyleEN._CurrTabName;
  if (IsNullOrEmpty(clsCheckStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCheckStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCheckStyleExObjLstCache: Array<clsCheckStyleEN> = JSON.parse(strTempObjLst);
    const arrCheckStyleObjLstT = CheckStyle_GetObjLstByJSONObjLst(arrCheckStyleExObjLstCache);
    return arrCheckStyleObjLstT;
  }
  try {
    const arrCheckStyleExObjLst = await CheckStyle_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCheckStyleExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrCheckStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrCheckStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      checkStyle_ConstructorName,
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
export async function CheckStyle_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCheckStyleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCheckStyleObjLstCache: Array<clsCheckStyleEN> = JSON.parse(strTempObjLst);
    return arrCheckStyleObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CheckStyle_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCheckStyleEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

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
          checkStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CheckStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
export async function CheckStyle_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsCheckStyleEN._CurrTabName;
  if (IsNullOrEmpty(clsCheckStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCheckStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCheckStyleExObjLstCache: Array<clsCheckStyleEN> = JSON.parse(strTempObjLst);
    const arrCheckStyleObjLstT = CheckStyle_GetObjLstByJSONObjLst(arrCheckStyleExObjLstCache);
    return arrCheckStyleObjLstT;
  }
  try {
    const arrCheckStyleExObjLst = await CheckStyle_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCheckStyleExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrCheckStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrCheckStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      checkStyle_ConstructorName,
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
export async function CheckStyle_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsCheckStyleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCheckStyleObjLstCache: Array<clsCheckStyleEN> = JSON.parse(strTempObjLst);
    return arrCheckStyleObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CheckStyle_GetObjLstCache(): Promise<Array<clsCheckStyleEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrCheckStyleObjLstCache;
  switch (clsCheckStyleEN.CacheModeId) {
    case '04': //sessionStorage
      arrCheckStyleObjLstCache = await CheckStyle_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrCheckStyleObjLstCache = await CheckStyle_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrCheckStyleObjLstCache = await CheckStyle_GetObjLstClientCache();
      break;
    default:
      arrCheckStyleObjLstCache = await CheckStyle_GetObjLstClientCache();
      break;
  }
  return arrCheckStyleObjLstCache;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CheckStyle_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCheckStyleObjLstCache;
  switch (clsCheckStyleEN.CacheModeId) {
    case '04': //sessionStorage
      arrCheckStyleObjLstCache = await CheckStyle_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrCheckStyleObjLstCache = await CheckStyle_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrCheckStyleObjLstCache = null;
      break;
    default:
      arrCheckStyleObjLstCache = null;
      break;
  }
  return arrCheckStyleObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCheckStyleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CheckStyle_GetSubObjLstCache(objCheckStyleCond: clsCheckStyleEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCheckStyleObjLstCache = await CheckStyle_GetObjLstCache();
  let arrCheckStyleSel = arrCheckStyleObjLstCache;
  if (objCheckStyleCond.sfFldComparisonOp == null || objCheckStyleCond.sfFldComparisonOp == '')
    return arrCheckStyleSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCheckStyleCond.sfFldComparisonOp,
  );
  //console.log("clsCheckStyleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCheckStyleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCheckStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrCheckStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCheckStyleCond),
      checkStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCheckStyleEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCheckStyleId:关键字列表
 * @returns 对象列表
 **/
export async function CheckStyle_GetObjLstByCheckStyleIdLstAsync(
  arrCheckStyleId: Array<string>,
): Promise<Array<clsCheckStyleEN>> {
  const strThisFuncName = 'GetObjLstByCheckStyleIdLstAsync';
  const strAction = 'GetObjLstByCheckStyleIdLst';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCheckStyleId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          checkStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CheckStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
 * @param arrstrCheckStyleIdLst:关键字列表
 * @returns 对象列表
 */
export async function CheckStyle_GetObjLstByCheckStyleIdLstCache(
  arrCheckStyleIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByCheckStyleIdLstCache';
  try {
    const arrCheckStyleObjLstCache = await CheckStyle_GetObjLstCache();
    const arrCheckStyleSel = arrCheckStyleObjLstCache.filter(
      (x) => arrCheckStyleIdLst.indexOf(x.checkStyleId) > -1,
    );
    return arrCheckStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCheckStyleIdLst.join(','),
      checkStyle_ConstructorName,
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
export async function CheckStyle_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCheckStyleEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

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
          checkStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CheckStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
export async function CheckStyle_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCheckStyleEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

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
          checkStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CheckStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
export async function CheckStyle_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsCheckStyleEN>();
  const arrCheckStyleObjLstCache = await CheckStyle_GetObjLstCache();
  if (arrCheckStyleObjLstCache.length == 0) return arrCheckStyleObjLstCache;
  let arrCheckStyleSel = arrCheckStyleObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objCheckStyleCond = new clsCheckStyleEN();
  ObjectAssign(objCheckStyleCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsCheckStyleWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCheckStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCheckStyleSel.length == 0) return arrCheckStyleSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCheckStyleSel = arrCheckStyleSel.sort(CheckStyle_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrCheckStyleSel = arrCheckStyleSel.sort(objPagerPara.sortFun);
    }
    arrCheckStyleSel = arrCheckStyleSel.slice(intStart, intEnd);
    return arrCheckStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      checkStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCheckStyleEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表，只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function CheckStyle_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCheckStyleEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCheckStyleEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

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
          checkStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CheckStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
 * @param strCheckStyleId:关键字
 * @returns 获取删除的结果
 **/
export async function CheckStyle_DelRecordAsync(strCheckStyleId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(checkStyle_Controller, strAction);
  strUrl = Format('{0}/?Id={1}', strUrl, strCheckStyleId);

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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
 * @param arrCheckStyleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CheckStyle_DelCheckStylesAsync(
  arrCheckStyleId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelCheckStylesAsync';
  const strAction = 'DelCheckStyles';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCheckStyleId, config);
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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
export async function CheckStyle_DelCheckStylesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelCheckStylesByCondAsync';
  const strAction = 'DelCheckStylesByCond';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
 * @param objCheckStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CheckStyle_AddNewRecordAsync(
  objCheckStyleEN: clsCheckStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objCheckStyleEN.checkStyleId === null || objCheckStyleEN.checkStyleId === '') {
    const strMsg = '需要的对象的关键字为空，不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCheckStyleEN);
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCheckStyleEN, config);
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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
 * @param objCheckStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CheckStyle_AddNewRecordWithMaxIdAsync(
  objCheckStyleEN: clsCheckStyleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCheckStyleEN, config);
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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
 * @param objCheckStyleEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CheckStyle_AddNewRecordWithReturnKeyAsync(
  objCheckStyleEN: clsCheckStyleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCheckStyleEN, config);
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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
 * @param objCheckStyleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CheckStyle_UpdateRecordAsync(
  objCheckStyleEN: clsCheckStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCheckStyleEN.sfUpdFldSetStr === undefined ||
    objCheckStyleEN.sfUpdFldSetStr === null ||
    objCheckStyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objCheckStyleEN.checkStyleId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCheckStyleEN, config);
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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
 * @param objCheckStyleEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CheckStyle_UpdateWithConditionAsync(
  objCheckStyleEN: clsCheckStyleEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCheckStyleEN.sfUpdFldSetStr === undefined ||
    objCheckStyleEN.sfUpdFldSetStr === null ||
    objCheckStyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objCheckStyleEN.checkStyleId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);
  objCheckStyleEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCheckStyleEN, config);
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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
 * @param objstrCheckStyleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CheckStyle_IsExistRecordCache(objCheckStyleCond: clsCheckStyleEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCheckStyleObjLstCache = await CheckStyle_GetObjLstCache();
  if (arrCheckStyleObjLstCache == null) return false;
  let arrCheckStyleSel = arrCheckStyleObjLstCache;
  if (objCheckStyleCond.sfFldComparisonOp == null || objCheckStyleCond.sfFldComparisonOp == '')
    return arrCheckStyleSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCheckStyleCond.sfFldComparisonOp,
  );
  //console.log("clsCheckStyleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCheckStyleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCheckStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCheckStyleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCheckStyleCond),
      checkStyle_ConstructorName,
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
export async function CheckStyle_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
 * @param strCheckStyleId:所给的关键字
 * @returns 对象
 */
export async function CheckStyle_IsExistCache(strCheckStyleId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrCheckStyleObjLstCache = await CheckStyle_GetObjLstCache();
  if (arrCheckStyleObjLstCache == null) return false;
  try {
    const arrCheckStyleSel = arrCheckStyleObjLstCache.filter(
      (x) => x.checkStyleId == strCheckStyleId,
    );
    if (arrCheckStyleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCheckStyleId,
      checkStyle_ConstructorName,
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
 * @param strCheckStyleId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CheckStyle_IsExistAsync(strCheckStyleId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCheckStyleId,
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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
export async function CheckStyle_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
 * @param objCheckStyleCond:条件对象
 * @returns 对象列表记录数
 */
export async function CheckStyle_GetRecCountByCondCache(objCheckStyleCond: clsCheckStyleEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCheckStyleObjLstCache = await CheckStyle_GetObjLstCache();
  if (arrCheckStyleObjLstCache == null) return 0;
  let arrCheckStyleSel = arrCheckStyleObjLstCache;
  if (objCheckStyleCond.sfFldComparisonOp == null || objCheckStyleCond.sfFldComparisonOp == '')
    return arrCheckStyleSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCheckStyleCond.sfFldComparisonOp,
  );
  //console.log("clsCheckStyleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCheckStyleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCheckStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCheckStyleSel = arrCheckStyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCheckStyleSel = arrCheckStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrCheckStyleSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCheckStyleCond),
      checkStyle_ConstructorName,
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
export async function CheckStyle_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(checkStyle_Controller, strAction);

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
        checkStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        checkStyle_ConstructorName,
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
export function CheckStyle_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CheckStyle_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功！');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsCheckStyleEN._CurrTabName;
  switch (clsCheckStyleEN.CacheModeId) {
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
export function CheckStyle_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsCheckStyleEN._CurrTabName;
    switch (clsCheckStyleEN.CacheModeId) {
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
export function CheckStyle_CheckPropertyNew(pobjCheckStyleEN: clsCheckStyleEN) {
  //检查字段非空， 即数据表要求非常非空的字段，不能为空！
  if (IsNullOrEmpty(pobjCheckStyleEN.checkStyleName) === true) {
    throw new Error(
      '(errid:Watl000058)字段[CheckStyleName]不能为空(In 复选框样式)!(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjCheckStyleEN.checkStyleId) == false &&
    GetStrLen(pobjCheckStyleEN.checkStyleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000059)字段[CheckStyleId(checkStyleId)]的长度不能超过4(In 复选框样式(CheckStyle))!值:$(pobjCheckStyleEN.checkStyleId)(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.checkStyleName) == false &&
    GetStrLen(pobjCheckStyleEN.checkStyleName) > 30
  ) {
    throw new Error(
      '(errid:Watl000059)字段[CheckStyleName(checkStyleName)]的长度不能超过30(In 复选框样式(CheckStyle))!值:$(pobjCheckStyleEN.checkStyleName)(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCheckStyleEN.style) == false && GetStrLen(pobjCheckStyleEN.style) > 800) {
    throw new Error(
      '(errid:Watl000059)字段[类型(style)]的长度不能超过800(In 复选框样式(CheckStyle))!值:$(pobjCheckStyleEN.style)(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCheckStyleEN.runat) == false && GetStrLen(pobjCheckStyleEN.runat) > 30) {
    throw new Error(
      '(errid:Watl000059)字段[运行在(runat)]的长度不能超过30(In 复选框样式(CheckStyle))!值:$(pobjCheckStyleEN.runat)(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.fontSize) == false &&
    GetStrLen(pobjCheckStyleEN.fontSize) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[字号(fontSize)]的长度不能超过20(In 复选框样式(CheckStyle))!值:$(pobjCheckStyleEN.fontSize)(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.fontName) == false &&
    GetStrLen(pobjCheckStyleEN.fontName) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[字体(fontName)]的长度不能超过20(In 复选框样式(CheckStyle))!值:$(pobjCheckStyleEN.fontName)(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.stylePosition) == false &&
    GetStrLen(pobjCheckStyleEN.stylePosition) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[Style_Position(stylePosition)]的长度不能超过20(In 复选框样式(CheckStyle))!值:$(pobjCheckStyleEN.stylePosition)(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCheckStyleEN.checkStyleId) == false &&
    undefined !== pobjCheckStyleEN.checkStyleId &&
    tzDataType.isString(pobjCheckStyleEN.checkStyleId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[CheckStyleId(checkStyleId)]的值:[$(pobjCheckStyleEN.checkStyleId)], 非法，应该为字符型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.checkStyleName) == false &&
    undefined !== pobjCheckStyleEN.checkStyleName &&
    tzDataType.isString(pobjCheckStyleEN.checkStyleName) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[CheckStyleName(checkStyleName)]的值:[$(pobjCheckStyleEN.checkStyleName)], 非法，应该为字符型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.style) == false &&
    undefined !== pobjCheckStyleEN.style &&
    tzDataType.isString(pobjCheckStyleEN.style) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[类型(style)]的值:[$(pobjCheckStyleEN.style)], 非法，应该为字符型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.runat) == false &&
    undefined !== pobjCheckStyleEN.runat &&
    tzDataType.isString(pobjCheckStyleEN.runat) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[运行在(runat)]的值:[$(pobjCheckStyleEN.runat)], 非法，应该为字符型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.fontSize) == false &&
    undefined !== pobjCheckStyleEN.fontSize &&
    tzDataType.isString(pobjCheckStyleEN.fontSize) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[字号(fontSize)]的值:[$(pobjCheckStyleEN.fontSize)], 非法，应该为字符型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.fontName) == false &&
    undefined !== pobjCheckStyleEN.fontName &&
    tzDataType.isString(pobjCheckStyleEN.fontName) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[字体(fontName)]的值:[$(pobjCheckStyleEN.fontName)], 非法，应该为字符型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjCheckStyleEN.width &&
    undefined !== pobjCheckStyleEN.width &&
    tzDataType.isNumber(pobjCheckStyleEN.width) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[宽(width)]的值:[$(pobjCheckStyleEN.width)], 非法，应该为数值型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjCheckStyleEN.height &&
    undefined !== pobjCheckStyleEN.height &&
    tzDataType.isNumber(pobjCheckStyleEN.height) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[高度(height)]的值:[$(pobjCheckStyleEN.height)], 非法，应该为数值型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjCheckStyleEN.styleZindex &&
    undefined !== pobjCheckStyleEN.styleZindex &&
    tzDataType.isNumber(pobjCheckStyleEN.styleZindex) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[Style_Zindex(styleZindex)]的值:[$(pobjCheckStyleEN.styleZindex)], 非法，应该为数值型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjCheckStyleEN.styleLeft &&
    undefined !== pobjCheckStyleEN.styleLeft &&
    tzDataType.isNumber(pobjCheckStyleEN.styleLeft) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[Style_Left(styleLeft)]的值:[$(pobjCheckStyleEN.styleLeft)], 非法，应该为数值型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.stylePosition) == false &&
    undefined !== pobjCheckStyleEN.stylePosition &&
    tzDataType.isString(pobjCheckStyleEN.stylePosition) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[Style_Position(stylePosition)]的值:[$(pobjCheckStyleEN.stylePosition)], 非法，应该为字符型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjCheckStyleEN.styleTop &&
    undefined !== pobjCheckStyleEN.styleTop &&
    tzDataType.isNumber(pobjCheckStyleEN.styleTop) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[Style_Top(styleTop)]的值:[$(pobjCheckStyleEN.styleTop)], 非法，应该为数值型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckPropertyNew)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！

  //设置说明该对象已经检查过了，后面不需要再检查，即非法！
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CheckStyle_CheckProperty4Update(pobjCheckStyleEN: clsCheckStyleEN) {
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjCheckStyleEN.checkStyleId) == false &&
    GetStrLen(pobjCheckStyleEN.checkStyleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000062)字段[CheckStyleId(checkStyleId)]的长度不能超过4(In 复选框样式(CheckStyle))!值:$(pobjCheckStyleEN.checkStyleId)(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.checkStyleName) == false &&
    GetStrLen(pobjCheckStyleEN.checkStyleName) > 30
  ) {
    throw new Error(
      '(errid:Watl000062)字段[CheckStyleName(checkStyleName)]的长度不能超过30(In 复选框样式(CheckStyle))!值:$(pobjCheckStyleEN.checkStyleName)(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCheckStyleEN.style) == false && GetStrLen(pobjCheckStyleEN.style) > 800) {
    throw new Error(
      '(errid:Watl000062)字段[类型(style)]的长度不能超过800(In 复选框样式(CheckStyle))!值:$(pobjCheckStyleEN.style)(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCheckStyleEN.runat) == false && GetStrLen(pobjCheckStyleEN.runat) > 30) {
    throw new Error(
      '(errid:Watl000062)字段[运行在(runat)]的长度不能超过30(In 复选框样式(CheckStyle))!值:$(pobjCheckStyleEN.runat)(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.fontSize) == false &&
    GetStrLen(pobjCheckStyleEN.fontSize) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[字号(fontSize)]的长度不能超过20(In 复选框样式(CheckStyle))!值:$(pobjCheckStyleEN.fontSize)(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.fontName) == false &&
    GetStrLen(pobjCheckStyleEN.fontName) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[字体(fontName)]的长度不能超过20(In 复选框样式(CheckStyle))!值:$(pobjCheckStyleEN.fontName)(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.stylePosition) == false &&
    GetStrLen(pobjCheckStyleEN.stylePosition) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[Style_Position(stylePosition)]的长度不能超过20(In 复选框样式(CheckStyle))!值:$(pobjCheckStyleEN.stylePosition)(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCheckStyleEN.checkStyleId) == false &&
    undefined !== pobjCheckStyleEN.checkStyleId &&
    tzDataType.isString(pobjCheckStyleEN.checkStyleId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[CheckStyleId(checkStyleId)]的值:[$(pobjCheckStyleEN.checkStyleId)], 非法，应该为字符型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.checkStyleName) == false &&
    undefined !== pobjCheckStyleEN.checkStyleName &&
    tzDataType.isString(pobjCheckStyleEN.checkStyleName) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[CheckStyleName(checkStyleName)]的值:[$(pobjCheckStyleEN.checkStyleName)], 非法，应该为字符型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.style) == false &&
    undefined !== pobjCheckStyleEN.style &&
    tzDataType.isString(pobjCheckStyleEN.style) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[类型(style)]的值:[$(pobjCheckStyleEN.style)], 非法，应该为字符型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.runat) == false &&
    undefined !== pobjCheckStyleEN.runat &&
    tzDataType.isString(pobjCheckStyleEN.runat) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[运行在(runat)]的值:[$(pobjCheckStyleEN.runat)], 非法，应该为字符型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.fontSize) == false &&
    undefined !== pobjCheckStyleEN.fontSize &&
    tzDataType.isString(pobjCheckStyleEN.fontSize) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[字号(fontSize)]的值:[$(pobjCheckStyleEN.fontSize)], 非法，应该为字符型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.fontName) == false &&
    undefined !== pobjCheckStyleEN.fontName &&
    tzDataType.isString(pobjCheckStyleEN.fontName) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[字体(fontName)]的值:[$(pobjCheckStyleEN.fontName)], 非法，应该为字符型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCheckStyleEN.width &&
    undefined !== pobjCheckStyleEN.width &&
    tzDataType.isNumber(pobjCheckStyleEN.width) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[宽(width)]的值:[$(pobjCheckStyleEN.width)], 非法，应该为数值型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCheckStyleEN.height &&
    undefined !== pobjCheckStyleEN.height &&
    tzDataType.isNumber(pobjCheckStyleEN.height) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[高度(height)]的值:[$(pobjCheckStyleEN.height)], 非法，应该为数值型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCheckStyleEN.styleZindex &&
    undefined !== pobjCheckStyleEN.styleZindex &&
    tzDataType.isNumber(pobjCheckStyleEN.styleZindex) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[Style_Zindex(styleZindex)]的值:[$(pobjCheckStyleEN.styleZindex)], 非法，应该为数值型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCheckStyleEN.styleLeft &&
    undefined !== pobjCheckStyleEN.styleLeft &&
    tzDataType.isNumber(pobjCheckStyleEN.styleLeft) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[Style_Left(styleLeft)]的值:[$(pobjCheckStyleEN.styleLeft)], 非法，应该为数值型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCheckStyleEN.stylePosition) == false &&
    undefined !== pobjCheckStyleEN.stylePosition &&
    tzDataType.isString(pobjCheckStyleEN.stylePosition) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[Style_Position(stylePosition)]的值:[$(pobjCheckStyleEN.stylePosition)], 非法，应该为字符型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCheckStyleEN.styleTop &&
    undefined !== pobjCheckStyleEN.styleTop &&
    tzDataType.isNumber(pobjCheckStyleEN.styleTop) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[Style_Top(styleTop)]的值:[$(pobjCheckStyleEN.styleTop)], 非法，应该为数值型(In 复选框样式(CheckStyle))!(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空！
  if (IsNullOrEmpty(pobjCheckStyleEN.checkStyleId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[CheckStyleId]不能为空(In 复选框样式)!(clsCheckStyleBL:CheckProperty4Update)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CheckStyle_GetJSONStrByObj(pobjCheckStyleEN: clsCheckStyleEN): string {
  pobjCheckStyleEN.sfUpdFldSetStr = pobjCheckStyleEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCheckStyleEN);
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
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function CheckStyle_GetObjLstByJSONStr(strJSON: string): Array<clsCheckStyleEN> {
  let arrCheckStyleObjLst = new Array<clsCheckStyleEN>();
  if (strJSON === '') {
    return arrCheckStyleObjLst;
  }
  try {
    arrCheckStyleObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCheckStyleObjLst;
  }
  return arrCheckStyleObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCheckStyleObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CheckStyle_GetObjLstByJSONObjLst(
  arrCheckStyleObjLstS: Array<clsCheckStyleEN>,
): Array<clsCheckStyleEN> {
  const arrCheckStyleObjLst = new Array<clsCheckStyleEN>();
  for (const objInFor of arrCheckStyleObjLstS) {
    const obj1 = CheckStyle_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCheckStyleObjLst.push(obj1);
  }
  return arrCheckStyleObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CheckStyle_GetObjByJSONStr(strJSON: string): clsCheckStyleEN {
  let pobjCheckStyleEN = new clsCheckStyleEN();
  if (strJSON === '') {
    return pobjCheckStyleEN;
  }
  try {
    pobjCheckStyleEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCheckStyleEN;
  }
  return pobjCheckStyleEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CheckStyle_GetCombineCondition(objCheckStyleCond: clsCheckStyleEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCheckStyleCond.dicFldComparisonOp,
      clsCheckStyleEN.con_CheckStyleId,
    ) == true
  ) {
    const strComparisonOpCheckStyleId: string =
      objCheckStyleCond.dicFldComparisonOp[clsCheckStyleEN.con_CheckStyleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCheckStyleEN.con_CheckStyleId,
      objCheckStyleCond.checkStyleId,
      strComparisonOpCheckStyleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCheckStyleCond.dicFldComparisonOp,
      clsCheckStyleEN.con_CheckStyleName,
    ) == true
  ) {
    const strComparisonOpCheckStyleName: string =
      objCheckStyleCond.dicFldComparisonOp[clsCheckStyleEN.con_CheckStyleName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCheckStyleEN.con_CheckStyleName,
      objCheckStyleCond.checkStyleName,
      strComparisonOpCheckStyleName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCheckStyleCond.dicFldComparisonOp,
      clsCheckStyleEN.con_Style,
    ) == true
  ) {
    const strComparisonOpStyle: string =
      objCheckStyleCond.dicFldComparisonOp[clsCheckStyleEN.con_Style];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCheckStyleEN.con_Style,
      objCheckStyleCond.style,
      strComparisonOpStyle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCheckStyleCond.dicFldComparisonOp,
      clsCheckStyleEN.con_Runat,
    ) == true
  ) {
    const strComparisonOpRunat: string =
      objCheckStyleCond.dicFldComparisonOp[clsCheckStyleEN.con_Runat];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCheckStyleEN.con_Runat,
      objCheckStyleCond.runat,
      strComparisonOpRunat,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCheckStyleCond.dicFldComparisonOp,
      clsCheckStyleEN.con_FontSize,
    ) == true
  ) {
    const strComparisonOpFontSize: string =
      objCheckStyleCond.dicFldComparisonOp[clsCheckStyleEN.con_FontSize];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCheckStyleEN.con_FontSize,
      objCheckStyleCond.fontSize,
      strComparisonOpFontSize,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCheckStyleCond.dicFldComparisonOp,
      clsCheckStyleEN.con_FontName,
    ) == true
  ) {
    const strComparisonOpFontName: string =
      objCheckStyleCond.dicFldComparisonOp[clsCheckStyleEN.con_FontName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCheckStyleEN.con_FontName,
      objCheckStyleCond.fontName,
      strComparisonOpFontName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCheckStyleCond.dicFldComparisonOp,
      clsCheckStyleEN.con_Width,
    ) == true
  ) {
    const strComparisonOpWidth: string =
      objCheckStyleCond.dicFldComparisonOp[clsCheckStyleEN.con_Width];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCheckStyleEN.con_Width,
      objCheckStyleCond.width,
      strComparisonOpWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCheckStyleCond.dicFldComparisonOp,
      clsCheckStyleEN.con_Height,
    ) == true
  ) {
    const strComparisonOpHeight: string =
      objCheckStyleCond.dicFldComparisonOp[clsCheckStyleEN.con_Height];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCheckStyleEN.con_Height,
      objCheckStyleCond.height,
      strComparisonOpHeight,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCheckStyleCond.dicFldComparisonOp,
      clsCheckStyleEN.con_StyleZindex,
    ) == true
  ) {
    const strComparisonOpStyleZindex: string =
      objCheckStyleCond.dicFldComparisonOp[clsCheckStyleEN.con_StyleZindex];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCheckStyleEN.con_StyleZindex,
      objCheckStyleCond.styleZindex,
      strComparisonOpStyleZindex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCheckStyleCond.dicFldComparisonOp,
      clsCheckStyleEN.con_StyleLeft,
    ) == true
  ) {
    const strComparisonOpStyleLeft: string =
      objCheckStyleCond.dicFldComparisonOp[clsCheckStyleEN.con_StyleLeft];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCheckStyleEN.con_StyleLeft,
      objCheckStyleCond.styleLeft,
      strComparisonOpStyleLeft,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCheckStyleCond.dicFldComparisonOp,
      clsCheckStyleEN.con_StylePosition,
    ) == true
  ) {
    const strComparisonOpStylePosition: string =
      objCheckStyleCond.dicFldComparisonOp[clsCheckStyleEN.con_StylePosition];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCheckStyleEN.con_StylePosition,
      objCheckStyleCond.stylePosition,
      strComparisonOpStylePosition,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCheckStyleCond.dicFldComparisonOp,
      clsCheckStyleEN.con_StyleTop,
    ) == true
  ) {
    const strComparisonOpStyleTop: string =
      objCheckStyleCond.dicFldComparisonOp[clsCheckStyleEN.con_StyleTop];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCheckStyleEN.con_StyleTop,
      objCheckStyleCond.styleTop,
      strComparisonOpStyleTop,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCheckStyleENS:源对象
 * @param objCheckStyleENT:目标对象
 */
export function CheckStyle_GetObjFromJsonObj(objCheckStyleENS: clsCheckStyleEN): clsCheckStyleEN {
  const objCheckStyleENT: clsCheckStyleEN = new clsCheckStyleEN();
  ObjectAssign(objCheckStyleENT, objCheckStyleENS);
  return objCheckStyleENT;
}
