/**
 * 类名:clsLabelStyleWApi
 * 表名:LabelStyle(00050066)
 * 版本:2023.06.21.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/22 09:49:51
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
 * 标签样式(LabelStyle)
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
import { clsLabelStyleEN } from '@/ts/L0Entity/SysPara/clsLabelStyleEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const labelStyle_Controller = 'LabelStyleApi';
export const labelStyle_ConstructorName = 'labelStyle';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strLabelStyleId:关键字
 * @returns 对象
 **/
export async function LabelStyle_GetObjByLabelStyleIdAsync(
  strLabelStyleId: string,
): Promise<clsLabelStyleEN | null> {
  const strThisFuncName = 'GetObjByLabelStyleIdAsync';

  if (IsNullOrEmpty(strLabelStyleId) == true) {
    const strMsg = Format(
      '参数:[strLabelStyleId]不能为空！(In clsLabelStyleWApi.GetObjByLabelStyleIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByLabelStyleId';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strLabelStyleId,
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
      const objLabelStyle = LabelStyle_GetObjFromJsonObj(returnObj);
      return objLabelStyle;
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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
 * @param strLabelStyleId:所给的关键字
 * @returns 对象
 */
export async function LabelStyle_GetObjByLabelStyleIdCache(
  strLabelStyleId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByLabelStyleIdCache';

  if (IsNullOrEmpty(strLabelStyleId) == true) {
    const strMsg = Format(
      '参数:[strLabelStyleId]不能为空！(In clsLabelStyleWApi.GetObjByLabelStyleIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrLabelStyleObjLstCache = await LabelStyle_GetObjLstCache();
  try {
    const arrLabelStyleSel = arrLabelStyleObjLstCache.filter(
      (x) => x.labelStyleId == strLabelStyleId,
    );
    let objLabelStyle: clsLabelStyleEN;
    if (arrLabelStyleSel.length > 0) {
      objLabelStyle = arrLabelStyleSel[0];
      return objLabelStyle;
    } else {
      if (bolTryAsyncOnce == true) {
        const objLabelStyleConst = await LabelStyle_GetObjByLabelStyleIdAsync(strLabelStyleId);
        if (objLabelStyleConst != null) {
          LabelStyle_ReFreshThisCache();
          return objLabelStyleConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strLabelStyleId,
      labelStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strLabelStyleId:所给的关键字
 * @returns 对象
 */
export async function LabelStyle_GetObjByLabelStyleIdlocalStorage(strLabelStyleId: string) {
  const strThisFuncName = 'GetObjByLabelStyleIdlocalStorage';

  if (IsNullOrEmpty(strLabelStyleId) == true) {
    const strMsg = Format(
      '参数:[strLabelStyleId]不能为空！(In clsLabelStyleWApi.GetObjByLabelStyleIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsLabelStyleEN._CurrTabName, strLabelStyleId);
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objLabelStyleCache: clsLabelStyleEN = JSON.parse(strTempObj);
    return objLabelStyleCache;
  }
  try {
    const objLabelStyle = await LabelStyle_GetObjByLabelStyleIdAsync(strLabelStyleId);
    if (objLabelStyle != null) {
      localStorage.setItem(strKey, JSON.stringify(objLabelStyle));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objLabelStyle;
    }
    return objLabelStyle;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strLabelStyleId,
      labelStyle_ConstructorName,
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
 * @param objLabelStyle:所给的对象
 * @returns 对象
 */
export async function LabelStyle_UpdateObjInLstCache(objLabelStyle: clsLabelStyleEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrLabelStyleObjLstCache = await LabelStyle_GetObjLstCache();
    const obj = arrLabelStyleObjLstCache.find((x) => x.labelStyleId == objLabelStyle.labelStyleId);
    if (obj != null) {
      objLabelStyle.labelStyleId = obj.labelStyleId;
      ObjectAssign(obj, objLabelStyle);
    } else {
      arrLabelStyleObjLstCache.push(objLabelStyle);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      labelStyle_ConstructorName,
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
export async function LabelStyle_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsLabelStyleEN.con_LabelStyleId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsLabelStyleEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strOutFldName,
      clsLabelStyleEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strLabelStyleId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objLabelStyle = await LabelStyle_GetObjByLabelStyleIdCache(strLabelStyleId);
  if (objLabelStyle == null) return '';
  if (objLabelStyle.GetFldValue(strOutFldName) == null) return '';
  return objLabelStyle.GetFldValue(strOutFldName).toString();
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
export function LabelStyle_SortFunDefa(a: clsLabelStyleEN, b: clsLabelStyleEN): number {
  return a.labelStyleId.localeCompare(b.labelStyleId);
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
export function LabelStyle_SortFunDefa2Fld(a: clsLabelStyleEN, b: clsLabelStyleEN): number {
  if (a.labelStyleName == b.labelStyleName) return a.style.localeCompare(b.style);
  else return a.labelStyleName.localeCompare(b.labelStyleName);
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
export function LabelStyle_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsLabelStyleEN.con_LabelStyleId:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          return a.labelStyleId.localeCompare(b.labelStyleId);
        };
      case clsLabelStyleEN.con_LabelStyleName:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          return a.labelStyleName.localeCompare(b.labelStyleName);
        };
      case clsLabelStyleEN.con_Style:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          if (a.style == null) return -1;
          if (b.style == null) return 1;
          return a.style.localeCompare(b.style);
        };
      case clsLabelStyleEN.con_Runat:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          if (a.runat == null) return -1;
          if (b.runat == null) return 1;
          return a.runat.localeCompare(b.runat);
        };
      case clsLabelStyleEN.con_FontSize:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          if (a.fontSize == null) return -1;
          if (b.fontSize == null) return 1;
          return a.fontSize.localeCompare(b.fontSize);
        };
      case clsLabelStyleEN.con_FontName:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          if (a.fontName == null) return -1;
          if (b.fontName == null) return 1;
          return a.fontName.localeCompare(b.fontName);
        };
      case clsLabelStyleEN.con_Width:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          return a.width - b.width;
        };
      case clsLabelStyleEN.con_Height:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          return a.height - b.height;
        };
      case clsLabelStyleEN.con_StyleZindex:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          return a.styleZindex - b.styleZindex;
        };
      case clsLabelStyleEN.con_StyleLeft:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          return a.styleLeft - b.styleLeft;
        };
      case clsLabelStyleEN.con_StylePosition:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          if (a.stylePosition == null) return -1;
          if (b.stylePosition == null) return 1;
          return a.stylePosition.localeCompare(b.stylePosition);
        };
      case clsLabelStyleEN.con_StyleTop:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          return a.styleTop - b.styleTop;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[LabelStyle]中不存在！(in ${labelStyle_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsLabelStyleEN.con_LabelStyleId:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          return b.labelStyleId.localeCompare(a.labelStyleId);
        };
      case clsLabelStyleEN.con_LabelStyleName:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          return b.labelStyleName.localeCompare(a.labelStyleName);
        };
      case clsLabelStyleEN.con_Style:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          if (b.style == null) return -1;
          if (a.style == null) return 1;
          return b.style.localeCompare(a.style);
        };
      case clsLabelStyleEN.con_Runat:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          if (b.runat == null) return -1;
          if (a.runat == null) return 1;
          return b.runat.localeCompare(a.runat);
        };
      case clsLabelStyleEN.con_FontSize:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          if (b.fontSize == null) return -1;
          if (a.fontSize == null) return 1;
          return b.fontSize.localeCompare(a.fontSize);
        };
      case clsLabelStyleEN.con_FontName:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          if (b.fontName == null) return -1;
          if (a.fontName == null) return 1;
          return b.fontName.localeCompare(a.fontName);
        };
      case clsLabelStyleEN.con_Width:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          return b.width - a.width;
        };
      case clsLabelStyleEN.con_Height:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          return b.height - a.height;
        };
      case clsLabelStyleEN.con_StyleZindex:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          return b.styleZindex - a.styleZindex;
        };
      case clsLabelStyleEN.con_StyleLeft:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          return b.styleLeft - a.styleLeft;
        };
      case clsLabelStyleEN.con_StylePosition:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          if (b.stylePosition == null) return -1;
          if (a.stylePosition == null) return 1;
          return b.stylePosition.localeCompare(a.stylePosition);
        };
      case clsLabelStyleEN.con_StyleTop:
        return (a: clsLabelStyleEN, b: clsLabelStyleEN) => {
          return b.styleTop - a.styleTop;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[LabelStyle]中不存在！(in ${labelStyle_ConstructorName}.${strThisFuncName})`;
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
export async function LabelStyle_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsLabelStyleEN.con_LabelStyleId:
      return (obj: clsLabelStyleEN) => {
        return obj.labelStyleId === value;
      };
    case clsLabelStyleEN.con_LabelStyleName:
      return (obj: clsLabelStyleEN) => {
        return obj.labelStyleName === value;
      };
    case clsLabelStyleEN.con_Style:
      return (obj: clsLabelStyleEN) => {
        return obj.style === value;
      };
    case clsLabelStyleEN.con_Runat:
      return (obj: clsLabelStyleEN) => {
        return obj.runat === value;
      };
    case clsLabelStyleEN.con_FontSize:
      return (obj: clsLabelStyleEN) => {
        return obj.fontSize === value;
      };
    case clsLabelStyleEN.con_FontName:
      return (obj: clsLabelStyleEN) => {
        return obj.fontName === value;
      };
    case clsLabelStyleEN.con_Width:
      return (obj: clsLabelStyleEN) => {
        return obj.width === value;
      };
    case clsLabelStyleEN.con_Height:
      return (obj: clsLabelStyleEN) => {
        return obj.height === value;
      };
    case clsLabelStyleEN.con_StyleZindex:
      return (obj: clsLabelStyleEN) => {
        return obj.styleZindex === value;
      };
    case clsLabelStyleEN.con_StyleLeft:
      return (obj: clsLabelStyleEN) => {
        return obj.styleLeft === value;
      };
    case clsLabelStyleEN.con_StylePosition:
      return (obj: clsLabelStyleEN) => {
        return obj.stylePosition === value;
      };
    case clsLabelStyleEN.con_StyleTop:
      return (obj: clsLabelStyleEN) => {
        return obj.styleTop === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[LabelStyle]中不存在！(in ${labelStyle_ConstructorName}.${strThisFuncName})`;
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
export async function LabelStyle_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsLabelStyleEN.con_LabelStyleId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrLabelStyle = await LabelStyle_GetObjLstCache();
  if (arrLabelStyle == null) return [];
  let arrLabelStyleSel = arrLabelStyle;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrLabelStyleSel = arrLabelStyleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrLabelStyleSel = arrLabelStyleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrLabelStyleSel = arrLabelStyleSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrLabelStyleSel = arrLabelStyleSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrLabelStyleSel = arrLabelStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrLabelStyleSel = arrLabelStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrLabelStyleSel = arrLabelStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrLabelStyleSel = arrLabelStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrLabelStyleSel = arrLabelStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrLabelStyleSel = arrLabelStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrLabelStyleSel.length == 0) return [];
  return arrLabelStyleSel.map((x) => x.labelStyleId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function LabelStyle_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
export async function LabelStyle_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
export async function LabelStyle_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsLabelStyleEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

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
      const objLabelStyle = LabelStyle_GetObjFromJsonObj(returnObj);
      return objLabelStyle;
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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
export async function LabelStyle_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsLabelStyleEN._CurrTabName;
  if (IsNullOrEmpty(clsLabelStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsLabelStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrLabelStyleExObjLstCache: Array<clsLabelStyleEN> = CacheHelper.Get(strKey);
    const arrLabelStyleObjLstT = LabelStyle_GetObjLstByJSONObjLst(arrLabelStyleExObjLstCache);
    return arrLabelStyleObjLstT;
  }
  try {
    const arrLabelStyleExObjLst = await LabelStyle_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrLabelStyleExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrLabelStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrLabelStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      labelStyle_ConstructorName,
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
export async function LabelStyle_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsLabelStyleEN._CurrTabName;
  if (IsNullOrEmpty(clsLabelStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsLabelStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrLabelStyleExObjLstCache: Array<clsLabelStyleEN> = JSON.parse(strTempObjLst);
    const arrLabelStyleObjLstT = LabelStyle_GetObjLstByJSONObjLst(arrLabelStyleExObjLstCache);
    return arrLabelStyleObjLstT;
  }
  try {
    const arrLabelStyleExObjLst = await LabelStyle_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrLabelStyleExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrLabelStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrLabelStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      labelStyle_ConstructorName,
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
export async function LabelStyle_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsLabelStyleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrLabelStyleObjLstCache: Array<clsLabelStyleEN> = JSON.parse(strTempObjLst);
    return arrLabelStyleObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function LabelStyle_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsLabelStyleEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

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
          labelStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = LabelStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
export async function LabelStyle_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsLabelStyleEN._CurrTabName;
  if (IsNullOrEmpty(clsLabelStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsLabelStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrLabelStyleExObjLstCache: Array<clsLabelStyleEN> = JSON.parse(strTempObjLst);
    const arrLabelStyleObjLstT = LabelStyle_GetObjLstByJSONObjLst(arrLabelStyleExObjLstCache);
    return arrLabelStyleObjLstT;
  }
  try {
    const arrLabelStyleExObjLst = await LabelStyle_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrLabelStyleExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrLabelStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrLabelStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      labelStyle_ConstructorName,
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
export async function LabelStyle_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsLabelStyleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrLabelStyleObjLstCache: Array<clsLabelStyleEN> = JSON.parse(strTempObjLst);
    return arrLabelStyleObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function LabelStyle_GetObjLstCache(): Promise<Array<clsLabelStyleEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrLabelStyleObjLstCache;
  switch (clsLabelStyleEN.CacheModeId) {
    case '04': //sessionStorage
      arrLabelStyleObjLstCache = await LabelStyle_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrLabelStyleObjLstCache = await LabelStyle_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrLabelStyleObjLstCache = await LabelStyle_GetObjLstClientCache();
      break;
    default:
      arrLabelStyleObjLstCache = await LabelStyle_GetObjLstClientCache();
      break;
  }
  return arrLabelStyleObjLstCache;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function LabelStyle_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrLabelStyleObjLstCache;
  switch (clsLabelStyleEN.CacheModeId) {
    case '04': //sessionStorage
      arrLabelStyleObjLstCache = await LabelStyle_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrLabelStyleObjLstCache = await LabelStyle_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrLabelStyleObjLstCache = null;
      break;
    default:
      arrLabelStyleObjLstCache = null;
      break;
  }
  return arrLabelStyleObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrLabelStyleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function LabelStyle_GetSubObjLstCache(objLabelStyleCond: clsLabelStyleEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrLabelStyleObjLstCache = await LabelStyle_GetObjLstCache();
  let arrLabelStyleSel = arrLabelStyleObjLstCache;
  if (objLabelStyleCond.sfFldComparisonOp == null || objLabelStyleCond.sfFldComparisonOp == '')
    return arrLabelStyleSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objLabelStyleCond.sfFldComparisonOp,
  );
  //console.log("clsLabelStyleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objLabelStyleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objLabelStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrLabelStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objLabelStyleCond),
      labelStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsLabelStyleEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrLabelStyleId:关键字列表
 * @returns 对象列表
 **/
export async function LabelStyle_GetObjLstByLabelStyleIdLstAsync(
  arrLabelStyleId: Array<string>,
): Promise<Array<clsLabelStyleEN>> {
  const strThisFuncName = 'GetObjLstByLabelStyleIdLstAsync';
  const strAction = 'GetObjLstByLabelStyleIdLst';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrLabelStyleId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          labelStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = LabelStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
 * @param arrstrLabelStyleIdLst:关键字列表
 * @returns 对象列表
 */
export async function LabelStyle_GetObjLstByLabelStyleIdLstCache(
  arrLabelStyleIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByLabelStyleIdLstCache';
  try {
    const arrLabelStyleObjLstCache = await LabelStyle_GetObjLstCache();
    const arrLabelStyleSel = arrLabelStyleObjLstCache.filter(
      (x) => arrLabelStyleIdLst.indexOf(x.labelStyleId) > -1,
    );
    return arrLabelStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrLabelStyleIdLst.join(','),
      labelStyle_ConstructorName,
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
export async function LabelStyle_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsLabelStyleEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

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
          labelStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = LabelStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
export async function LabelStyle_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsLabelStyleEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

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
          labelStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = LabelStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
export async function LabelStyle_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsLabelStyleEN>();
  const arrLabelStyleObjLstCache = await LabelStyle_GetObjLstCache();
  if (arrLabelStyleObjLstCache.length == 0) return arrLabelStyleObjLstCache;
  let arrLabelStyleSel = arrLabelStyleObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objLabelStyleCond = new clsLabelStyleEN();
  ObjectAssign(objLabelStyleCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsLabelStyleWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objLabelStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrLabelStyleSel.length == 0) return arrLabelStyleSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrLabelStyleSel = arrLabelStyleSel.sort(LabelStyle_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrLabelStyleSel = arrLabelStyleSel.sort(objPagerPara.sortFun);
    }
    arrLabelStyleSel = arrLabelStyleSel.slice(intStart, intEnd);
    return arrLabelStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      labelStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsLabelStyleEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表，只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function LabelStyle_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsLabelStyleEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsLabelStyleEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

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
          labelStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = LabelStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
 * @param strLabelStyleId:关键字
 * @returns 获取删除的结果
 **/
export async function LabelStyle_DelRecordAsync(strLabelStyleId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(labelStyle_Controller, strAction);
  strUrl = Format('{0}/?Id={1}', strUrl, strLabelStyleId);

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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
 * @param arrLabelStyleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function LabelStyle_DelLabelStylesAsync(
  arrLabelStyleId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelLabelStylesAsync';
  const strAction = 'DelLabelStyles';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrLabelStyleId, config);
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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
export async function LabelStyle_DelLabelStylesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelLabelStylesByCondAsync';
  const strAction = 'DelLabelStylesByCond';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
 * @param objLabelStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function LabelStyle_AddNewRecordAsync(
  objLabelStyleEN: clsLabelStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objLabelStyleEN.labelStyleId === null || objLabelStyleEN.labelStyleId === '') {
    const strMsg = '需要的对象的关键字为空，不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objLabelStyleEN);
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLabelStyleEN, config);
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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
 * @param objLabelStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function LabelStyle_AddNewRecordWithMaxIdAsync(
  objLabelStyleEN: clsLabelStyleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLabelStyleEN, config);
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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
 * @param objLabelStyleEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function LabelStyle_AddNewRecordWithReturnKeyAsync(
  objLabelStyleEN: clsLabelStyleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLabelStyleEN, config);
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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
 * @param objLabelStyleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function LabelStyle_UpdateRecordAsync(
  objLabelStyleEN: clsLabelStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objLabelStyleEN.sfUpdFldSetStr === undefined ||
    objLabelStyleEN.sfUpdFldSetStr === null ||
    objLabelStyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objLabelStyleEN.labelStyleId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLabelStyleEN, config);
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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
 * @param objLabelStyleEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function LabelStyle_UpdateWithConditionAsync(
  objLabelStyleEN: clsLabelStyleEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objLabelStyleEN.sfUpdFldSetStr === undefined ||
    objLabelStyleEN.sfUpdFldSetStr === null ||
    objLabelStyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空，不能修改!',
      objLabelStyleEN.labelStyleId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);
  objLabelStyleEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objLabelStyleEN, config);
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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
 * @param objstrLabelStyleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function LabelStyle_IsExistRecordCache(objLabelStyleCond: clsLabelStyleEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrLabelStyleObjLstCache = await LabelStyle_GetObjLstCache();
  if (arrLabelStyleObjLstCache == null) return false;
  let arrLabelStyleSel = arrLabelStyleObjLstCache;
  if (objLabelStyleCond.sfFldComparisonOp == null || objLabelStyleCond.sfFldComparisonOp == '')
    return arrLabelStyleSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objLabelStyleCond.sfFldComparisonOp,
  );
  //console.log("clsLabelStyleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objLabelStyleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objLabelStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrLabelStyleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objLabelStyleCond),
      labelStyle_ConstructorName,
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
export async function LabelStyle_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
 * @param strLabelStyleId:所给的关键字
 * @returns 对象
 */
export async function LabelStyle_IsExistCache(strLabelStyleId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrLabelStyleObjLstCache = await LabelStyle_GetObjLstCache();
  if (arrLabelStyleObjLstCache == null) return false;
  try {
    const arrLabelStyleSel = arrLabelStyleObjLstCache.filter(
      (x) => x.labelStyleId == strLabelStyleId,
    );
    if (arrLabelStyleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strLabelStyleId,
      labelStyle_ConstructorName,
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
 * @param strLabelStyleId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function LabelStyle_IsExistAsync(strLabelStyleId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strLabelStyleId,
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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
export async function LabelStyle_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
 * @param objLabelStyleCond:条件对象
 * @returns 对象列表记录数
 */
export async function LabelStyle_GetRecCountByCondCache(objLabelStyleCond: clsLabelStyleEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrLabelStyleObjLstCache = await LabelStyle_GetObjLstCache();
  if (arrLabelStyleObjLstCache == null) return 0;
  let arrLabelStyleSel = arrLabelStyleObjLstCache;
  if (objLabelStyleCond.sfFldComparisonOp == null || objLabelStyleCond.sfFldComparisonOp == '')
    return arrLabelStyleSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objLabelStyleCond.sfFldComparisonOp,
  );
  //console.log("clsLabelStyleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objLabelStyleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objLabelStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrLabelStyleSel = arrLabelStyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrLabelStyleSel = arrLabelStyleSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrLabelStyleSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objLabelStyleCond),
      labelStyle_ConstructorName,
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
export async function LabelStyle_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(labelStyle_Controller, strAction);

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
        labelStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        labelStyle_ConstructorName,
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
export function LabelStyle_GetWebApiUrl(strController: string, strAction: string): string {
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
export function LabelStyle_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功！');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsLabelStyleEN._CurrTabName;
  switch (clsLabelStyleEN.CacheModeId) {
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
export function LabelStyle_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsLabelStyleEN._CurrTabName;
    switch (clsLabelStyleEN.CacheModeId) {
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
export function LabelStyle_CheckPropertyNew(pobjLabelStyleEN: clsLabelStyleEN) {
  //检查字段非空， 即数据表要求非常非空的字段，不能为空！
  if (IsNullOrEmpty(pobjLabelStyleEN.labelStyleName) === true) {
    throw new Error(
      '(errid:Watl000058)字段[LabelStyleName]不能为空(In 标签样式)!(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjLabelStyleEN.labelStyleId) == false &&
    GetStrLen(pobjLabelStyleEN.labelStyleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000059)字段[LabelStyleId(labelStyleId)]的长度不能超过4(In 标签样式(LabelStyle))!值:$(pobjLabelStyleEN.labelStyleId)(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.labelStyleName) == false &&
    GetStrLen(pobjLabelStyleEN.labelStyleName) > 30
  ) {
    throw new Error(
      '(errid:Watl000059)字段[LabelStyleName(labelStyleName)]的长度不能超过30(In 标签样式(LabelStyle))!值:$(pobjLabelStyleEN.labelStyleName)(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjLabelStyleEN.style) == false && GetStrLen(pobjLabelStyleEN.style) > 800) {
    throw new Error(
      '(errid:Watl000059)字段[类型(style)]的长度不能超过800(In 标签样式(LabelStyle))!值:$(pobjLabelStyleEN.style)(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjLabelStyleEN.runat) == false && GetStrLen(pobjLabelStyleEN.runat) > 30) {
    throw new Error(
      '(errid:Watl000059)字段[运行在(runat)]的长度不能超过30(In 标签样式(LabelStyle))!值:$(pobjLabelStyleEN.runat)(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.fontSize) == false &&
    GetStrLen(pobjLabelStyleEN.fontSize) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[字号(fontSize)]的长度不能超过20(In 标签样式(LabelStyle))!值:$(pobjLabelStyleEN.fontSize)(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.fontName) == false &&
    GetStrLen(pobjLabelStyleEN.fontName) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[字体(fontName)]的长度不能超过20(In 标签样式(LabelStyle))!值:$(pobjLabelStyleEN.fontName)(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.stylePosition) == false &&
    GetStrLen(pobjLabelStyleEN.stylePosition) > 20
  ) {
    throw new Error(
      '(errid:Watl000059)字段[Style_Position(stylePosition)]的长度不能超过20(In 标签样式(LabelStyle))!值:$(pobjLabelStyleEN.stylePosition)(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjLabelStyleEN.labelStyleId) == false &&
    undefined !== pobjLabelStyleEN.labelStyleId &&
    tzDataType.isString(pobjLabelStyleEN.labelStyleId) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[LabelStyleId(labelStyleId)]的值:[$(pobjLabelStyleEN.labelStyleId)], 非法，应该为字符型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.labelStyleName) == false &&
    undefined !== pobjLabelStyleEN.labelStyleName &&
    tzDataType.isString(pobjLabelStyleEN.labelStyleName) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[LabelStyleName(labelStyleName)]的值:[$(pobjLabelStyleEN.labelStyleName)], 非法，应该为字符型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.style) == false &&
    undefined !== pobjLabelStyleEN.style &&
    tzDataType.isString(pobjLabelStyleEN.style) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[类型(style)]的值:[$(pobjLabelStyleEN.style)], 非法，应该为字符型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.runat) == false &&
    undefined !== pobjLabelStyleEN.runat &&
    tzDataType.isString(pobjLabelStyleEN.runat) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[运行在(runat)]的值:[$(pobjLabelStyleEN.runat)], 非法，应该为字符型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.fontSize) == false &&
    undefined !== pobjLabelStyleEN.fontSize &&
    tzDataType.isString(pobjLabelStyleEN.fontSize) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[字号(fontSize)]的值:[$(pobjLabelStyleEN.fontSize)], 非法，应该为字符型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.fontName) == false &&
    undefined !== pobjLabelStyleEN.fontName &&
    tzDataType.isString(pobjLabelStyleEN.fontName) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[字体(fontName)]的值:[$(pobjLabelStyleEN.fontName)], 非法，应该为字符型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjLabelStyleEN.width &&
    undefined !== pobjLabelStyleEN.width &&
    tzDataType.isNumber(pobjLabelStyleEN.width) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[宽(width)]的值:[$(pobjLabelStyleEN.width)], 非法，应该为数值型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjLabelStyleEN.height &&
    undefined !== pobjLabelStyleEN.height &&
    tzDataType.isNumber(pobjLabelStyleEN.height) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[高度(height)]的值:[$(pobjLabelStyleEN.height)], 非法，应该为数值型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjLabelStyleEN.styleZindex &&
    undefined !== pobjLabelStyleEN.styleZindex &&
    tzDataType.isNumber(pobjLabelStyleEN.styleZindex) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[Style_Zindex(styleZindex)]的值:[$(pobjLabelStyleEN.styleZindex)], 非法，应该为数值型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjLabelStyleEN.styleLeft &&
    undefined !== pobjLabelStyleEN.styleLeft &&
    tzDataType.isNumber(pobjLabelStyleEN.styleLeft) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[Style_Left(styleLeft)]的值:[$(pobjLabelStyleEN.styleLeft)], 非法，应该为数值型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.stylePosition) == false &&
    undefined !== pobjLabelStyleEN.stylePosition &&
    tzDataType.isString(pobjLabelStyleEN.stylePosition) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[Style_Position(stylePosition)]的值:[$(pobjLabelStyleEN.stylePosition)], 非法，应该为字符型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  if (
    null != pobjLabelStyleEN.styleTop &&
    undefined !== pobjLabelStyleEN.styleTop &&
    tzDataType.isNumber(pobjLabelStyleEN.styleTop) === false
  ) {
    throw new Error(
      '(errid:Watl000060)字段[Style_Top(styleTop)]的值:[$(pobjLabelStyleEN.styleTop)], 非法，应该为数值型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckPropertyNew)',
    );
  }
  //检查外键， 作为外键应该和主键的字段长度是一样的， 若不一样，即非法！

  //设置说明该对象已经检查过了，后面不需要再检查，即非法！
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function LabelStyle_CheckProperty4Update(pobjLabelStyleEN: clsLabelStyleEN) {
  //检查字段长度， 若字符型字段长度超出规定的长度，即非法！
  if (
    IsNullOrEmpty(pobjLabelStyleEN.labelStyleId) == false &&
    GetStrLen(pobjLabelStyleEN.labelStyleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000062)字段[LabelStyleId(labelStyleId)]的长度不能超过4(In 标签样式(LabelStyle))!值:$(pobjLabelStyleEN.labelStyleId)(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.labelStyleName) == false &&
    GetStrLen(pobjLabelStyleEN.labelStyleName) > 30
  ) {
    throw new Error(
      '(errid:Watl000062)字段[LabelStyleName(labelStyleName)]的长度不能超过30(In 标签样式(LabelStyle))!值:$(pobjLabelStyleEN.labelStyleName)(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjLabelStyleEN.style) == false && GetStrLen(pobjLabelStyleEN.style) > 800) {
    throw new Error(
      '(errid:Watl000062)字段[类型(style)]的长度不能超过800(In 标签样式(LabelStyle))!值:$(pobjLabelStyleEN.style)(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjLabelStyleEN.runat) == false && GetStrLen(pobjLabelStyleEN.runat) > 30) {
    throw new Error(
      '(errid:Watl000062)字段[运行在(runat)]的长度不能超过30(In 标签样式(LabelStyle))!值:$(pobjLabelStyleEN.runat)(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.fontSize) == false &&
    GetStrLen(pobjLabelStyleEN.fontSize) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[字号(fontSize)]的长度不能超过20(In 标签样式(LabelStyle))!值:$(pobjLabelStyleEN.fontSize)(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.fontName) == false &&
    GetStrLen(pobjLabelStyleEN.fontName) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[字体(fontName)]的长度不能超过20(In 标签样式(LabelStyle))!值:$(pobjLabelStyleEN.fontName)(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.stylePosition) == false &&
    GetStrLen(pobjLabelStyleEN.stylePosition) > 20
  ) {
    throw new Error(
      '(errid:Watl000062)字段[Style_Position(stylePosition)]的长度不能超过20(In 标签样式(LabelStyle))!值:$(pobjLabelStyleEN.stylePosition)(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjLabelStyleEN.labelStyleId) == false &&
    undefined !== pobjLabelStyleEN.labelStyleId &&
    tzDataType.isString(pobjLabelStyleEN.labelStyleId) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[LabelStyleId(labelStyleId)]的值:[$(pobjLabelStyleEN.labelStyleId)], 非法，应该为字符型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.labelStyleName) == false &&
    undefined !== pobjLabelStyleEN.labelStyleName &&
    tzDataType.isString(pobjLabelStyleEN.labelStyleName) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[LabelStyleName(labelStyleName)]的值:[$(pobjLabelStyleEN.labelStyleName)], 非法，应该为字符型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.style) == false &&
    undefined !== pobjLabelStyleEN.style &&
    tzDataType.isString(pobjLabelStyleEN.style) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[类型(style)]的值:[$(pobjLabelStyleEN.style)], 非法，应该为字符型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.runat) == false &&
    undefined !== pobjLabelStyleEN.runat &&
    tzDataType.isString(pobjLabelStyleEN.runat) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[运行在(runat)]的值:[$(pobjLabelStyleEN.runat)], 非法，应该为字符型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.fontSize) == false &&
    undefined !== pobjLabelStyleEN.fontSize &&
    tzDataType.isString(pobjLabelStyleEN.fontSize) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[字号(fontSize)]的值:[$(pobjLabelStyleEN.fontSize)], 非法，应该为字符型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.fontName) == false &&
    undefined !== pobjLabelStyleEN.fontName &&
    tzDataType.isString(pobjLabelStyleEN.fontName) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[字体(fontName)]的值:[$(pobjLabelStyleEN.fontName)], 非法，应该为字符型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjLabelStyleEN.width &&
    undefined !== pobjLabelStyleEN.width &&
    tzDataType.isNumber(pobjLabelStyleEN.width) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[宽(width)]的值:[$(pobjLabelStyleEN.width)], 非法，应该为数值型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjLabelStyleEN.height &&
    undefined !== pobjLabelStyleEN.height &&
    tzDataType.isNumber(pobjLabelStyleEN.height) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[高度(height)]的值:[$(pobjLabelStyleEN.height)], 非法，应该为数值型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjLabelStyleEN.styleZindex &&
    undefined !== pobjLabelStyleEN.styleZindex &&
    tzDataType.isNumber(pobjLabelStyleEN.styleZindex) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[Style_Zindex(styleZindex)]的值:[$(pobjLabelStyleEN.styleZindex)], 非法，应该为数值型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjLabelStyleEN.styleLeft &&
    undefined !== pobjLabelStyleEN.styleLeft &&
    tzDataType.isNumber(pobjLabelStyleEN.styleLeft) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[Style_Left(styleLeft)]的值:[$(pobjLabelStyleEN.styleLeft)], 非法，应该为数值型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjLabelStyleEN.stylePosition) == false &&
    undefined !== pobjLabelStyleEN.stylePosition &&
    tzDataType.isString(pobjLabelStyleEN.stylePosition) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[Style_Position(stylePosition)]的值:[$(pobjLabelStyleEN.stylePosition)], 非法，应该为字符型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjLabelStyleEN.styleTop &&
    undefined !== pobjLabelStyleEN.styleTop &&
    tzDataType.isNumber(pobjLabelStyleEN.styleTop) === false
  ) {
    throw new Error(
      '(errid:Watl000063)字段[Style_Top(styleTop)]的值:[$(pobjLabelStyleEN.styleTop)], 非法，应该为数值型(In 标签样式(LabelStyle))!(clsLabelStyleBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空！
  if (IsNullOrEmpty(pobjLabelStyleEN.labelStyleId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[LabelStyleId]不能为空(In 标签样式)!(clsLabelStyleBL:CheckProperty4Update)',
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
export function LabelStyle_GetJSONStrByObj(pobjLabelStyleEN: clsLabelStyleEN): string {
  pobjLabelStyleEN.sfUpdFldSetStr = pobjLabelStyleEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjLabelStyleEN);
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
export function LabelStyle_GetObjLstByJSONStr(strJSON: string): Array<clsLabelStyleEN> {
  let arrLabelStyleObjLst = new Array<clsLabelStyleEN>();
  if (strJSON === '') {
    return arrLabelStyleObjLst;
  }
  try {
    arrLabelStyleObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrLabelStyleObjLst;
  }
  return arrLabelStyleObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrLabelStyleObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function LabelStyle_GetObjLstByJSONObjLst(
  arrLabelStyleObjLstS: Array<clsLabelStyleEN>,
): Array<clsLabelStyleEN> {
  const arrLabelStyleObjLst = new Array<clsLabelStyleEN>();
  for (const objInFor of arrLabelStyleObjLstS) {
    const obj1 = LabelStyle_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrLabelStyleObjLst.push(obj1);
  }
  return arrLabelStyleObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-06-22
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function LabelStyle_GetObjByJSONStr(strJSON: string): clsLabelStyleEN {
  let pobjLabelStyleEN = new clsLabelStyleEN();
  if (strJSON === '') {
    return pobjLabelStyleEN;
  }
  try {
    pobjLabelStyleEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjLabelStyleEN;
  }
  return pobjLabelStyleEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function LabelStyle_GetCombineCondition(objLabelStyleCond: clsLabelStyleEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objLabelStyleCond.dicFldComparisonOp,
      clsLabelStyleEN.con_LabelStyleId,
    ) == true
  ) {
    const strComparisonOpLabelStyleId: string =
      objLabelStyleCond.dicFldComparisonOp[clsLabelStyleEN.con_LabelStyleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLabelStyleEN.con_LabelStyleId,
      objLabelStyleCond.labelStyleId,
      strComparisonOpLabelStyleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLabelStyleCond.dicFldComparisonOp,
      clsLabelStyleEN.con_LabelStyleName,
    ) == true
  ) {
    const strComparisonOpLabelStyleName: string =
      objLabelStyleCond.dicFldComparisonOp[clsLabelStyleEN.con_LabelStyleName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLabelStyleEN.con_LabelStyleName,
      objLabelStyleCond.labelStyleName,
      strComparisonOpLabelStyleName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLabelStyleCond.dicFldComparisonOp,
      clsLabelStyleEN.con_Style,
    ) == true
  ) {
    const strComparisonOpStyle: string =
      objLabelStyleCond.dicFldComparisonOp[clsLabelStyleEN.con_Style];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLabelStyleEN.con_Style,
      objLabelStyleCond.style,
      strComparisonOpStyle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLabelStyleCond.dicFldComparisonOp,
      clsLabelStyleEN.con_Runat,
    ) == true
  ) {
    const strComparisonOpRunat: string =
      objLabelStyleCond.dicFldComparisonOp[clsLabelStyleEN.con_Runat];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLabelStyleEN.con_Runat,
      objLabelStyleCond.runat,
      strComparisonOpRunat,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLabelStyleCond.dicFldComparisonOp,
      clsLabelStyleEN.con_FontSize,
    ) == true
  ) {
    const strComparisonOpFontSize: string =
      objLabelStyleCond.dicFldComparisonOp[clsLabelStyleEN.con_FontSize];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLabelStyleEN.con_FontSize,
      objLabelStyleCond.fontSize,
      strComparisonOpFontSize,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLabelStyleCond.dicFldComparisonOp,
      clsLabelStyleEN.con_FontName,
    ) == true
  ) {
    const strComparisonOpFontName: string =
      objLabelStyleCond.dicFldComparisonOp[clsLabelStyleEN.con_FontName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLabelStyleEN.con_FontName,
      objLabelStyleCond.fontName,
      strComparisonOpFontName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLabelStyleCond.dicFldComparisonOp,
      clsLabelStyleEN.con_Width,
    ) == true
  ) {
    const strComparisonOpWidth: string =
      objLabelStyleCond.dicFldComparisonOp[clsLabelStyleEN.con_Width];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsLabelStyleEN.con_Width,
      objLabelStyleCond.width,
      strComparisonOpWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLabelStyleCond.dicFldComparisonOp,
      clsLabelStyleEN.con_Height,
    ) == true
  ) {
    const strComparisonOpHeight: string =
      objLabelStyleCond.dicFldComparisonOp[clsLabelStyleEN.con_Height];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsLabelStyleEN.con_Height,
      objLabelStyleCond.height,
      strComparisonOpHeight,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLabelStyleCond.dicFldComparisonOp,
      clsLabelStyleEN.con_StyleZindex,
    ) == true
  ) {
    const strComparisonOpStyleZindex: string =
      objLabelStyleCond.dicFldComparisonOp[clsLabelStyleEN.con_StyleZindex];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsLabelStyleEN.con_StyleZindex,
      objLabelStyleCond.styleZindex,
      strComparisonOpStyleZindex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLabelStyleCond.dicFldComparisonOp,
      clsLabelStyleEN.con_StyleLeft,
    ) == true
  ) {
    const strComparisonOpStyleLeft: string =
      objLabelStyleCond.dicFldComparisonOp[clsLabelStyleEN.con_StyleLeft];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsLabelStyleEN.con_StyleLeft,
      objLabelStyleCond.styleLeft,
      strComparisonOpStyleLeft,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLabelStyleCond.dicFldComparisonOp,
      clsLabelStyleEN.con_StylePosition,
    ) == true
  ) {
    const strComparisonOpStylePosition: string =
      objLabelStyleCond.dicFldComparisonOp[clsLabelStyleEN.con_StylePosition];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsLabelStyleEN.con_StylePosition,
      objLabelStyleCond.stylePosition,
      strComparisonOpStylePosition,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objLabelStyleCond.dicFldComparisonOp,
      clsLabelStyleEN.con_StyleTop,
    ) == true
  ) {
    const strComparisonOpStyleTop: string =
      objLabelStyleCond.dicFldComparisonOp[clsLabelStyleEN.con_StyleTop];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsLabelStyleEN.con_StyleTop,
      objLabelStyleCond.styleTop,
      strComparisonOpStyleTop,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objLabelStyleENS:源对象
 * @param objLabelStyleENT:目标对象
 */
export function LabelStyle_GetObjFromJsonObj(objLabelStyleENS: clsLabelStyleEN): clsLabelStyleEN {
  const objLabelStyleENT: clsLabelStyleEN = new clsLabelStyleEN();
  ObjectAssign(objLabelStyleENT, objLabelStyleENS);
  return objLabelStyleENT;
}
