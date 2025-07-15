/**
 * 类名:clsButtonTabWApi
 * 表名:ButtonTab(00050427)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:28
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:函数管理(PrjFunction)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 按钮(ButtonTab)
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
import { clsButtonTabEN } from '@/ts/L0Entity/PrjFunction/clsButtonTabEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const buttonTab_Controller = 'ButtonTabApi';
export const buttonTab_ConstructorName = 'buttonTab';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strButtonId:关键字
 * @returns 对象
 **/
export async function ButtonTab_GetObjByButtonIdAsync(
  strButtonId: string,
): Promise<clsButtonTabEN | null> {
  const strThisFuncName = 'GetObjByButtonIdAsync';

  if (IsNullOrEmpty(strButtonId) == true) {
    const strMsg = Format('参数:[strButtonId]不能为空!(In clsButtonTabWApi.GetObjByButtonIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strButtonId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strButtonId]的长度:[{0}]不正确!(clsButtonTabWApi.GetObjByButtonIdAsync)',
      strButtonId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByButtonId';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strButtonId,
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
      const objButtonTab = ButtonTab_GetObjFromJsonObj(returnObj);
      return objButtonTab;
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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param strButtonId:所给的关键字
 * @returns 对象
 */
export async function ButtonTab_GetObjByButtonIdCache(strButtonId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByButtonIdCache';

  if (IsNullOrEmpty(strButtonId) == true) {
    const strMsg = Format('参数:[strButtonId]不能为空!(In clsButtonTabWApi.GetObjByButtonIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strButtonId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strButtonId]的长度:[{0}]不正确!(clsButtonTabWApi.GetObjByButtonIdCache)',
      strButtonId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrButtonTabObjLstCache = await ButtonTab_GetObjLstCache();
  try {
    const arrButtonTabSel = arrButtonTabObjLstCache.filter((x) => x.buttonId == strButtonId);
    let objButtonTab: clsButtonTabEN;
    if (arrButtonTabSel.length > 0) {
      objButtonTab = arrButtonTabSel[0];
      return objButtonTab;
    } else {
      if (bolTryAsyncOnce == true) {
        const objButtonTabConst = await ButtonTab_GetObjByButtonIdAsync(strButtonId);
        if (objButtonTabConst != null) {
          ButtonTab_ReFreshThisCache();
          return objButtonTabConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strButtonId,
      buttonTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strButtonId:所给的关键字
 * @returns 对象
 */
export async function ButtonTab_GetObjByButtonIdlocalStorage(strButtonId: string) {
  const strThisFuncName = 'GetObjByButtonIdlocalStorage';

  if (IsNullOrEmpty(strButtonId) == true) {
    const strMsg = Format(
      '参数:[strButtonId]不能为空!(In clsButtonTabWApi.GetObjByButtonIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strButtonId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strButtonId]的长度:[{0}]不正确!(clsButtonTabWApi.GetObjByButtonIdlocalStorage)',
      strButtonId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsButtonTabEN._CurrTabName, strButtonId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objButtonTabCache: clsButtonTabEN = JSON.parse(strTempObj);
    return objButtonTabCache;
  }
  try {
    const objButtonTab = await ButtonTab_GetObjByButtonIdAsync(strButtonId);
    if (objButtonTab != null) {
      localStorage.setItem(strKey, JSON.stringify(objButtonTab));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objButtonTab;
    }
    return objButtonTab;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strButtonId,
      buttonTab_ConstructorName,
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
 * @param objButtonTab:所给的对象
 * @returns 对象
 */
export async function ButtonTab_UpdateObjInLstCache(objButtonTab: clsButtonTabEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrButtonTabObjLstCache = await ButtonTab_GetObjLstCache();
    const obj = arrButtonTabObjLstCache.find((x) => x.buttonName == objButtonTab.buttonName);
    if (obj != null) {
      objButtonTab.buttonId = obj.buttonId;
      ObjectAssign(obj, objButtonTab);
    } else {
      arrButtonTabObjLstCache.push(objButtonTab);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      buttonTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strButtonId:所给的关键字
 * @returns 对象
 */
export async function ButtonTab_GetNameByButtonIdCache(strButtonId: string) {
  if (IsNullOrEmpty(strButtonId) == true) {
    const strMsg = Format(
      '参数:[strButtonId]不能为空!(In clsButtonTabWApi.GetNameByButtonIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strButtonId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strButtonId]的长度:[{0}]不正确!(clsButtonTabWApi.GetNameByButtonIdCache)',
      strButtonId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrButtonTabObjLstCache = await ButtonTab_GetObjLstCache();
  if (arrButtonTabObjLstCache == null) return '';
  try {
    const arrButtonTabSel = arrButtonTabObjLstCache.filter((x) => x.buttonId == strButtonId);
    let objButtonTab: clsButtonTabEN;
    if (arrButtonTabSel.length > 0) {
      objButtonTab = arrButtonTabSel[0];
      return objButtonTab.buttonName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strButtonId,
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
export async function ButtonTab_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsButtonTabEN.con_ButtonId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsButtonTabEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsButtonTabEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strButtonId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objButtonTab = await ButtonTab_GetObjByButtonIdCache(strButtonId);
  if (objButtonTab == null) return '';
  if (objButtonTab.GetFldValue(strOutFldName) == null) return '';
  return objButtonTab.GetFldValue(strOutFldName).toString();
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
export function ButtonTab_SortFunDefa(a: clsButtonTabEN, b: clsButtonTabEN): number {
  return a.buttonId.localeCompare(b.buttonId);
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
export function ButtonTab_SortFunDefa2Fld(a: clsButtonTabEN, b: clsButtonTabEN): number {
  if (a.buttonName == b.buttonName) return a.text.localeCompare(b.text);
  else return a.buttonName.localeCompare(b.buttonName);
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
export function ButtonTab_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsButtonTabEN.con_ButtonId:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          return a.buttonId.localeCompare(b.buttonId);
        };
      case clsButtonTabEN.con_ButtonName:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          return a.buttonName.localeCompare(b.buttonName);
        };
      case clsButtonTabEN.con_Text:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          return a.text.localeCompare(b.text);
        };
      case clsButtonTabEN.con_CommandName:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          if (a.commandName == null) return -1;
          if (b.commandName == null) return 1;
          return a.commandName.localeCompare(b.commandName);
        };
      case clsButtonTabEN.con_Height:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          return a.height - b.height;
        };
      case clsButtonTabEN.con_Width:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          return a.width - b.width;
        };
      case clsButtonTabEN.con_CssClass:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          if (a.cssClass == null) return -1;
          if (b.cssClass == null) return 1;
          return a.cssClass.localeCompare(b.cssClass);
        };
      case clsButtonTabEN.con_ImageUrl:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          if (a.imageUrl == null) return -1;
          if (b.imageUrl == null) return 1;
          return a.imageUrl.localeCompare(b.imageUrl);
        };
      case clsButtonTabEN.con_InUse:
        return (a: clsButtonTabEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsButtonTabEN.con_OrderNum:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsButtonTabEN.con_UpdUser:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsButtonTabEN.con_UpdDate:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsButtonTabEN.con_Memo:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ButtonTab]中不存在!(in ${buttonTab_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsButtonTabEN.con_ButtonId:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          return b.buttonId.localeCompare(a.buttonId);
        };
      case clsButtonTabEN.con_ButtonName:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          return b.buttonName.localeCompare(a.buttonName);
        };
      case clsButtonTabEN.con_Text:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          return b.text.localeCompare(a.text);
        };
      case clsButtonTabEN.con_CommandName:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          if (b.commandName == null) return -1;
          if (a.commandName == null) return 1;
          return b.commandName.localeCompare(a.commandName);
        };
      case clsButtonTabEN.con_Height:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          return b.height - a.height;
        };
      case clsButtonTabEN.con_Width:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          return b.width - a.width;
        };
      case clsButtonTabEN.con_CssClass:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          if (b.cssClass == null) return -1;
          if (a.cssClass == null) return 1;
          return b.cssClass.localeCompare(a.cssClass);
        };
      case clsButtonTabEN.con_ImageUrl:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          if (b.imageUrl == null) return -1;
          if (a.imageUrl == null) return 1;
          return b.imageUrl.localeCompare(a.imageUrl);
        };
      case clsButtonTabEN.con_InUse:
        return (b: clsButtonTabEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsButtonTabEN.con_OrderNum:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsButtonTabEN.con_UpdUser:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsButtonTabEN.con_UpdDate:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsButtonTabEN.con_Memo:
        return (a: clsButtonTabEN, b: clsButtonTabEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ButtonTab]中不存在!(in ${buttonTab_ConstructorName}.${strThisFuncName})`;
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
export async function ButtonTab_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsButtonTabEN.con_ButtonId:
      return (obj: clsButtonTabEN) => {
        return obj.buttonId === value;
      };
    case clsButtonTabEN.con_ButtonName:
      return (obj: clsButtonTabEN) => {
        return obj.buttonName === value;
      };
    case clsButtonTabEN.con_Text:
      return (obj: clsButtonTabEN) => {
        return obj.text === value;
      };
    case clsButtonTabEN.con_CommandName:
      return (obj: clsButtonTabEN) => {
        return obj.commandName === value;
      };
    case clsButtonTabEN.con_Height:
      return (obj: clsButtonTabEN) => {
        return obj.height === value;
      };
    case clsButtonTabEN.con_Width:
      return (obj: clsButtonTabEN) => {
        return obj.width === value;
      };
    case clsButtonTabEN.con_CssClass:
      return (obj: clsButtonTabEN) => {
        return obj.cssClass === value;
      };
    case clsButtonTabEN.con_ImageUrl:
      return (obj: clsButtonTabEN) => {
        return obj.imageUrl === value;
      };
    case clsButtonTabEN.con_InUse:
      return (obj: clsButtonTabEN) => {
        return obj.inUse === value;
      };
    case clsButtonTabEN.con_OrderNum:
      return (obj: clsButtonTabEN) => {
        return obj.orderNum === value;
      };
    case clsButtonTabEN.con_UpdUser:
      return (obj: clsButtonTabEN) => {
        return obj.updUser === value;
      };
    case clsButtonTabEN.con_UpdDate:
      return (obj: clsButtonTabEN) => {
        return obj.updDate === value;
      };
    case clsButtonTabEN.con_Memo:
      return (obj: clsButtonTabEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ButtonTab]中不存在!(in ${buttonTab_ConstructorName}.${strThisFuncName})`;
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
export async function ButtonTab_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsButtonTabEN.con_ButtonId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrButtonTab = await ButtonTab_GetObjLstCache();
  if (arrButtonTab == null) return [];
  let arrButtonTabSel = arrButtonTab;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrButtonTabSel = arrButtonTabSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrButtonTabSel = arrButtonTabSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrButtonTabSel = arrButtonTabSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrButtonTabSel = arrButtonTabSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrButtonTabSel = arrButtonTabSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrButtonTabSel = arrButtonTabSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrButtonTabSel = arrButtonTabSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrButtonTabSel = arrButtonTabSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrButtonTabSel.length == 0) return [];
  return arrButtonTabSel.map((x) => x.buttonId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ButtonTab_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
export async function ButtonTab_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
export async function ButtonTab_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsButtonTabEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
      const objButtonTab = ButtonTab_GetObjFromJsonObj(returnObj);
      return objButtonTab;
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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
export async function ButtonTab_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsButtonTabEN._CurrTabName;
  if (IsNullOrEmpty(clsButtonTabEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsButtonTabEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrButtonTabExObjLstCache: Array<clsButtonTabEN> = CacheHelper.Get(strKey);
    const arrButtonTabObjLstT = ButtonTab_GetObjLstByJSONObjLst(arrButtonTabExObjLstCache);
    return arrButtonTabObjLstT;
  }
  try {
    const arrButtonTabExObjLst = await ButtonTab_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrButtonTabExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrButtonTabExObjLst.length,
    );
    console.log(strInfo);
    return arrButtonTabExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      buttonTab_ConstructorName,
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
export async function ButtonTab_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsButtonTabEN._CurrTabName;
  if (IsNullOrEmpty(clsButtonTabEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsButtonTabEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrButtonTabExObjLstCache: Array<clsButtonTabEN> = JSON.parse(strTempObjLst);
    const arrButtonTabObjLstT = ButtonTab_GetObjLstByJSONObjLst(arrButtonTabExObjLstCache);
    return arrButtonTabObjLstT;
  }
  try {
    const arrButtonTabExObjLst = await ButtonTab_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrButtonTabExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrButtonTabExObjLst.length,
    );
    console.log(strInfo);
    return arrButtonTabExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      buttonTab_ConstructorName,
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
export async function ButtonTab_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsButtonTabEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrButtonTabObjLstCache: Array<clsButtonTabEN> = JSON.parse(strTempObjLst);
    return arrButtonTabObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ButtonTab_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsButtonTabEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
          buttonTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ButtonTab_GetObjLstByJSONObjLst(returnObjLst);
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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
export async function ButtonTab_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsButtonTabEN._CurrTabName;
  if (IsNullOrEmpty(clsButtonTabEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsButtonTabEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrButtonTabExObjLstCache: Array<clsButtonTabEN> = JSON.parse(strTempObjLst);
    const arrButtonTabObjLstT = ButtonTab_GetObjLstByJSONObjLst(arrButtonTabExObjLstCache);
    return arrButtonTabObjLstT;
  }
  try {
    const arrButtonTabExObjLst = await ButtonTab_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrButtonTabExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrButtonTabExObjLst.length,
    );
    console.log(strInfo);
    return arrButtonTabExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      buttonTab_ConstructorName,
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
export async function ButtonTab_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsButtonTabEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrButtonTabObjLstCache: Array<clsButtonTabEN> = JSON.parse(strTempObjLst);
    return arrButtonTabObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ButtonTab_GetObjLstCache(): Promise<Array<clsButtonTabEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrButtonTabObjLstCache;
  switch (clsButtonTabEN.CacheModeId) {
    case '04': //sessionStorage
      arrButtonTabObjLstCache = await ButtonTab_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrButtonTabObjLstCache = await ButtonTab_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrButtonTabObjLstCache = await ButtonTab_GetObjLstClientCache();
      break;
    default:
      arrButtonTabObjLstCache = await ButtonTab_GetObjLstClientCache();
      break;
  }
  return arrButtonTabObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ButtonTab_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrButtonTabObjLstCache;
  switch (clsButtonTabEN.CacheModeId) {
    case '04': //sessionStorage
      arrButtonTabObjLstCache = await ButtonTab_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrButtonTabObjLstCache = await ButtonTab_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrButtonTabObjLstCache = null;
      break;
    default:
      arrButtonTabObjLstCache = null;
      break;
  }
  return arrButtonTabObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrButtonIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ButtonTab_GetSubObjLstCache(objButtonTabCond: clsButtonTabEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrButtonTabObjLstCache = await ButtonTab_GetObjLstCache();
  let arrButtonTabSel = arrButtonTabObjLstCache;
  if (objButtonTabCond.sfFldComparisonOp == null || objButtonTabCond.sfFldComparisonOp == '')
    return arrButtonTabSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objButtonTabCond.sfFldComparisonOp,
  );
  //console.log("clsButtonTabWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objButtonTabCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objButtonTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrButtonTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objButtonTabCond),
      buttonTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsButtonTabEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrButtonId:关键字列表
 * @returns 对象列表
 **/
export async function ButtonTab_GetObjLstByButtonIdLstAsync(
  arrButtonId: Array<string>,
): Promise<Array<clsButtonTabEN>> {
  const strThisFuncName = 'GetObjLstByButtonIdLstAsync';
  const strAction = 'GetObjLstByButtonIdLst';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrButtonId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          buttonTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ButtonTab_GetObjLstByJSONObjLst(returnObjLst);
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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param arrstrButtonIdLst:关键字列表
 * @returns 对象列表
 */
export async function ButtonTab_GetObjLstByButtonIdLstCache(arrButtonIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByButtonIdLstCache';
  try {
    const arrButtonTabObjLstCache = await ButtonTab_GetObjLstCache();
    const arrButtonTabSel = arrButtonTabObjLstCache.filter(
      (x) => arrButtonIdLst.indexOf(x.buttonId) > -1,
    );
    return arrButtonTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrButtonIdLst.join(','),
      buttonTab_ConstructorName,
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
export async function ButtonTab_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsButtonTabEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
          buttonTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ButtonTab_GetObjLstByJSONObjLst(returnObjLst);
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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
export async function ButtonTab_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsButtonTabEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
          buttonTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ButtonTab_GetObjLstByJSONObjLst(returnObjLst);
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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
export async function ButtonTab_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsButtonTabEN>();
  const arrButtonTabObjLstCache = await ButtonTab_GetObjLstCache();
  if (arrButtonTabObjLstCache.length == 0) return arrButtonTabObjLstCache;
  let arrButtonTabSel = arrButtonTabObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objButtonTabCond = new clsButtonTabEN();
  ObjectAssign(objButtonTabCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsButtonTabWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objButtonTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrButtonTabSel.length == 0) return arrButtonTabSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrButtonTabSel = arrButtonTabSel.sort(ButtonTab_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrButtonTabSel = arrButtonTabSel.sort(objPagerPara.sortFun);
    }
    arrButtonTabSel = arrButtonTabSel.slice(intStart, intEnd);
    return arrButtonTabSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      buttonTab_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsButtonTabEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ButtonTab_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsButtonTabEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsButtonTabEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
          buttonTab_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ButtonTab_GetObjLstByJSONObjLst(returnObjLst);
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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param strButtonId:关键字
 * @returns 获取删除的结果
 **/
export async function ButtonTab_DelRecordAsync(strButtonId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(buttonTab_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strButtonId);

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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param arrButtonId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ButtonTab_DelButtonTabsAsync(arrButtonId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelButtonTabsAsync';
  const strAction = 'DelButtonTabs';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrButtonId, config);
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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
export async function ButtonTab_DelButtonTabsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelButtonTabsByCondAsync';
  const strAction = 'DelButtonTabsByCond';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param objButtonTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ButtonTab_AddNewRecordAsync(
  objButtonTabEN: clsButtonTabEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objButtonTabEN);
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objButtonTabEN, config);
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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param objButtonTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ButtonTab_AddNewRecordWithMaxIdAsync(
  objButtonTabEN: clsButtonTabEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objButtonTabEN, config);
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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param objButtonTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ButtonTab_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param objButtonTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ButtonTab_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objButtonTabEN);
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param objButtonTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ButtonTab_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objButtonTabEN);
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param objButtonTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ButtonTab_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objButtonTabEN);
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param objButtonTabEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ButtonTab_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objButtonTabEN);
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param objButtonTabEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ButtonTab_AddNewRecordWithReturnKeyAsync(
  objButtonTabEN: clsButtonTabEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objButtonTabEN, config);
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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param objButtonTabEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ButtonTab_UpdateRecordAsync(
  objButtonTabEN: clsButtonTabEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objButtonTabEN.sfUpdFldSetStr === undefined ||
    objButtonTabEN.sfUpdFldSetStr === null ||
    objButtonTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objButtonTabEN.buttonId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objButtonTabEN, config);
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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param objButtonTabEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ButtonTab_UpdateWithConditionAsync(
  objButtonTabEN: clsButtonTabEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objButtonTabEN.sfUpdFldSetStr === undefined ||
    objButtonTabEN.sfUpdFldSetStr === null ||
    objButtonTabEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objButtonTabEN.buttonId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);
  objButtonTabEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objButtonTabEN, config);
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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param objstrButtonIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ButtonTab_IsExistRecordCache(objButtonTabCond: clsButtonTabEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrButtonTabObjLstCache = await ButtonTab_GetObjLstCache();
  if (arrButtonTabObjLstCache == null) return false;
  let arrButtonTabSel = arrButtonTabObjLstCache;
  if (objButtonTabCond.sfFldComparisonOp == null || objButtonTabCond.sfFldComparisonOp == '')
    return arrButtonTabSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objButtonTabCond.sfFldComparisonOp,
  );
  //console.log("clsButtonTabWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objButtonTabCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objButtonTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrButtonTabSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objButtonTabCond),
      buttonTab_ConstructorName,
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
export async function ButtonTab_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param strButtonId:所给的关键字
 * @returns 对象
 */
export async function ButtonTab_IsExistCache(strButtonId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrButtonTabObjLstCache = await ButtonTab_GetObjLstCache();
  if (arrButtonTabObjLstCache == null) return false;
  try {
    const arrButtonTabSel = arrButtonTabObjLstCache.filter((x) => x.buttonId == strButtonId);
    if (arrButtonTabSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strButtonId,
      buttonTab_ConstructorName,
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
 * @param strButtonId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ButtonTab_IsExistAsync(strButtonId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strButtonId,
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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
export async function ButtonTab_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
 * @param objButtonTabCond:条件对象
 * @returns 对象列表记录数
 */
export async function ButtonTab_GetRecCountByCondCache(objButtonTabCond: clsButtonTabEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrButtonTabObjLstCache = await ButtonTab_GetObjLstCache();
  if (arrButtonTabObjLstCache == null) return 0;
  let arrButtonTabSel = arrButtonTabObjLstCache;
  if (objButtonTabCond.sfFldComparisonOp == null || objButtonTabCond.sfFldComparisonOp == '')
    return arrButtonTabSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objButtonTabCond.sfFldComparisonOp,
  );
  //console.log("clsButtonTabWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objButtonTabCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objButtonTabCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrButtonTabSel = arrButtonTabSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrButtonTabSel = arrButtonTabSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrButtonTabSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objButtonTabCond),
      buttonTab_ConstructorName,
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
export async function ButtonTab_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
export async function ButtonTab_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(buttonTab_Controller, strAction);

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
        buttonTab_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        buttonTab_ConstructorName,
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
export function ButtonTab_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ButtonTab_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsButtonTabEN._CurrTabName;
  switch (clsButtonTabEN.CacheModeId) {
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
export function ButtonTab_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsButtonTabEN._CurrTabName;
    switch (clsButtonTabEN.CacheModeId) {
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
export async function ButtonTab_BindDdl_ButtonIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ButtonIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ButtonIdInDivCache");
  const arrObjLstSel = await ButtonTab_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsButtonTabEN.con_ButtonId,
    clsButtonTabEN.con_ButtonName,
    '按钮',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ButtonTab_CheckPropertyNew(pobjButtonTabEN: clsButtonTabEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjButtonTabEN.buttonName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[按钮名称]不能为空(In 按钮)!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjButtonTabEN.text) === true) {
    throw new Error(
      '(errid:Watl000411)字段[文本]不能为空(In 按钮)!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjButtonTabEN.updUser) === true) {
    throw new Error(
      '(errid:Watl000411)字段[修改者]不能为空(In 按钮)!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjButtonTabEN.buttonId) == false && GetStrLen(pobjButtonTabEN.buttonId) > 2) {
    throw new Error(
      '(errid:Watl000413)字段[按钮Id(buttonId)]的长度不能超过2(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.buttonId)(clsButtonTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.buttonName) == false &&
    GetStrLen(pobjButtonTabEN.buttonName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[按钮名称(buttonName)]的长度不能超过30(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.buttonName)(clsButtonTabBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjButtonTabEN.text) == false && GetStrLen(pobjButtonTabEN.text) > 30) {
    throw new Error(
      '(errid:Watl000413)字段[文本(text)]的长度不能超过30(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.text)(clsButtonTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.commandName) == false &&
    GetStrLen(pobjButtonTabEN.commandName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[命令名(commandName)]的长度不能超过30(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.commandName)(clsButtonTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.cssClass) == false &&
    GetStrLen(pobjButtonTabEN.cssClass) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[样式表(cssClass)]的长度不能超过50(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.cssClass)(clsButtonTabBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.imageUrl) == false &&
    GetStrLen(pobjButtonTabEN.imageUrl) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[图片资源(imageUrl)]的长度不能超过100(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.imageUrl)(clsButtonTabBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjButtonTabEN.updUser) == false && GetStrLen(pobjButtonTabEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.updUser)(clsButtonTabBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjButtonTabEN.updDate) == false && GetStrLen(pobjButtonTabEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.updDate)(clsButtonTabBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjButtonTabEN.memo) == false && GetStrLen(pobjButtonTabEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.memo)(clsButtonTabBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjButtonTabEN.buttonId) == false &&
    undefined !== pobjButtonTabEN.buttonId &&
    tzDataType.isString(pobjButtonTabEN.buttonId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[按钮Id(buttonId)]的值:[$(pobjButtonTabEN.buttonId)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.buttonName) == false &&
    undefined !== pobjButtonTabEN.buttonName &&
    tzDataType.isString(pobjButtonTabEN.buttonName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[按钮名称(buttonName)]的值:[$(pobjButtonTabEN.buttonName)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.text) == false &&
    undefined !== pobjButtonTabEN.text &&
    tzDataType.isString(pobjButtonTabEN.text) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[文本(text)]的值:[$(pobjButtonTabEN.text)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.commandName) == false &&
    undefined !== pobjButtonTabEN.commandName &&
    tzDataType.isString(pobjButtonTabEN.commandName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[命令名(commandName)]的值:[$(pobjButtonTabEN.commandName)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjButtonTabEN.height &&
    undefined !== pobjButtonTabEN.height &&
    tzDataType.isNumber(pobjButtonTabEN.height) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[高度(height)]的值:[$(pobjButtonTabEN.height)], 非法,应该为数值型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjButtonTabEN.width &&
    undefined !== pobjButtonTabEN.width &&
    tzDataType.isNumber(pobjButtonTabEN.width) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[宽(width)]的值:[$(pobjButtonTabEN.width)], 非法,应该为数值型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.cssClass) == false &&
    undefined !== pobjButtonTabEN.cssClass &&
    tzDataType.isString(pobjButtonTabEN.cssClass) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[样式表(cssClass)]的值:[$(pobjButtonTabEN.cssClass)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.imageUrl) == false &&
    undefined !== pobjButtonTabEN.imageUrl &&
    tzDataType.isString(pobjButtonTabEN.imageUrl) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[图片资源(imageUrl)]的值:[$(pobjButtonTabEN.imageUrl)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjButtonTabEN.inUse &&
    undefined !== pobjButtonTabEN.inUse &&
    tzDataType.isBoolean(pobjButtonTabEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否在用(inUse)]的值:[$(pobjButtonTabEN.inUse)], 非法,应该为布尔型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjButtonTabEN.orderNum &&
    undefined !== pobjButtonTabEN.orderNum &&
    tzDataType.isNumber(pobjButtonTabEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjButtonTabEN.orderNum)], 非法,应该为数值型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.updUser) == false &&
    undefined !== pobjButtonTabEN.updUser &&
    tzDataType.isString(pobjButtonTabEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjButtonTabEN.updUser)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.updDate) == false &&
    undefined !== pobjButtonTabEN.updDate &&
    tzDataType.isString(pobjButtonTabEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjButtonTabEN.updDate)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.memo) == false &&
    undefined !== pobjButtonTabEN.memo &&
    tzDataType.isString(pobjButtonTabEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjButtonTabEN.memo)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ButtonTab_CheckProperty4Update(pobjButtonTabEN: clsButtonTabEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjButtonTabEN.buttonId) == false && GetStrLen(pobjButtonTabEN.buttonId) > 2) {
    throw new Error(
      '(errid:Watl000416)字段[按钮Id(buttonId)]的长度不能超过2(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.buttonId)(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.buttonName) == false &&
    GetStrLen(pobjButtonTabEN.buttonName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[按钮名称(buttonName)]的长度不能超过30(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.buttonName)(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjButtonTabEN.text) == false && GetStrLen(pobjButtonTabEN.text) > 30) {
    throw new Error(
      '(errid:Watl000416)字段[文本(text)]的长度不能超过30(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.text)(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.commandName) == false &&
    GetStrLen(pobjButtonTabEN.commandName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[命令名(commandName)]的长度不能超过30(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.commandName)(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.cssClass) == false &&
    GetStrLen(pobjButtonTabEN.cssClass) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[样式表(cssClass)]的长度不能超过50(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.cssClass)(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.imageUrl) == false &&
    GetStrLen(pobjButtonTabEN.imageUrl) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[图片资源(imageUrl)]的长度不能超过100(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.imageUrl)(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjButtonTabEN.updUser) == false && GetStrLen(pobjButtonTabEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.updUser)(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjButtonTabEN.updDate) == false && GetStrLen(pobjButtonTabEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.updDate)(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjButtonTabEN.memo) == false && GetStrLen(pobjButtonTabEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 按钮(ButtonTab))!值:$(pobjButtonTabEN.memo)(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjButtonTabEN.buttonId) == false &&
    undefined !== pobjButtonTabEN.buttonId &&
    tzDataType.isString(pobjButtonTabEN.buttonId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[按钮Id(buttonId)]的值:[$(pobjButtonTabEN.buttonId)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.buttonName) == false &&
    undefined !== pobjButtonTabEN.buttonName &&
    tzDataType.isString(pobjButtonTabEN.buttonName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[按钮名称(buttonName)]的值:[$(pobjButtonTabEN.buttonName)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.text) == false &&
    undefined !== pobjButtonTabEN.text &&
    tzDataType.isString(pobjButtonTabEN.text) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[文本(text)]的值:[$(pobjButtonTabEN.text)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.commandName) == false &&
    undefined !== pobjButtonTabEN.commandName &&
    tzDataType.isString(pobjButtonTabEN.commandName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[命令名(commandName)]的值:[$(pobjButtonTabEN.commandName)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjButtonTabEN.height &&
    undefined !== pobjButtonTabEN.height &&
    tzDataType.isNumber(pobjButtonTabEN.height) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[高度(height)]的值:[$(pobjButtonTabEN.height)], 非法,应该为数值型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjButtonTabEN.width &&
    undefined !== pobjButtonTabEN.width &&
    tzDataType.isNumber(pobjButtonTabEN.width) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[宽(width)]的值:[$(pobjButtonTabEN.width)], 非法,应该为数值型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.cssClass) == false &&
    undefined !== pobjButtonTabEN.cssClass &&
    tzDataType.isString(pobjButtonTabEN.cssClass) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[样式表(cssClass)]的值:[$(pobjButtonTabEN.cssClass)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.imageUrl) == false &&
    undefined !== pobjButtonTabEN.imageUrl &&
    tzDataType.isString(pobjButtonTabEN.imageUrl) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[图片资源(imageUrl)]的值:[$(pobjButtonTabEN.imageUrl)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjButtonTabEN.inUse &&
    undefined !== pobjButtonTabEN.inUse &&
    tzDataType.isBoolean(pobjButtonTabEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否在用(inUse)]的值:[$(pobjButtonTabEN.inUse)], 非法,应该为布尔型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjButtonTabEN.orderNum &&
    undefined !== pobjButtonTabEN.orderNum &&
    tzDataType.isNumber(pobjButtonTabEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjButtonTabEN.orderNum)], 非法,应该为数值型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.updUser) == false &&
    undefined !== pobjButtonTabEN.updUser &&
    tzDataType.isString(pobjButtonTabEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjButtonTabEN.updUser)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.updDate) == false &&
    undefined !== pobjButtonTabEN.updDate &&
    tzDataType.isString(pobjButtonTabEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjButtonTabEN.updDate)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjButtonTabEN.memo) == false &&
    undefined !== pobjButtonTabEN.memo &&
    tzDataType.isString(pobjButtonTabEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjButtonTabEN.memo)], 非法,应该为字符型(In 按钮(ButtonTab))!(clsButtonTabBL:CheckProperty4Update)',
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
export function ButtonTab_GetJSONStrByObj(pobjButtonTabEN: clsButtonTabEN): string {
  pobjButtonTabEN.sfUpdFldSetStr = pobjButtonTabEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjButtonTabEN);
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
export function ButtonTab_GetObjLstByJSONStr(strJSON: string): Array<clsButtonTabEN> {
  let arrButtonTabObjLst = new Array<clsButtonTabEN>();
  if (strJSON === '') {
    return arrButtonTabObjLst;
  }
  try {
    arrButtonTabObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrButtonTabObjLst;
  }
  return arrButtonTabObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrButtonTabObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ButtonTab_GetObjLstByJSONObjLst(
  arrButtonTabObjLstS: Array<clsButtonTabEN>,
): Array<clsButtonTabEN> {
  const arrButtonTabObjLst = new Array<clsButtonTabEN>();
  for (const objInFor of arrButtonTabObjLstS) {
    const obj1 = ButtonTab_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrButtonTabObjLst.push(obj1);
  }
  return arrButtonTabObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ButtonTab_GetObjByJSONStr(strJSON: string): clsButtonTabEN {
  let pobjButtonTabEN = new clsButtonTabEN();
  if (strJSON === '') {
    return pobjButtonTabEN;
  }
  try {
    pobjButtonTabEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjButtonTabEN;
  }
  return pobjButtonTabEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ButtonTab_GetCombineCondition(objButtonTabCond: clsButtonTabEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonTabCond.dicFldComparisonOp,
      clsButtonTabEN.con_ButtonId,
    ) == true
  ) {
    const strComparisonOpButtonId: string =
      objButtonTabCond.dicFldComparisonOp[clsButtonTabEN.con_ButtonId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonTabEN.con_ButtonId,
      objButtonTabCond.buttonId,
      strComparisonOpButtonId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonTabCond.dicFldComparisonOp,
      clsButtonTabEN.con_ButtonName,
    ) == true
  ) {
    const strComparisonOpButtonName: string =
      objButtonTabCond.dicFldComparisonOp[clsButtonTabEN.con_ButtonName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonTabEN.con_ButtonName,
      objButtonTabCond.buttonName,
      strComparisonOpButtonName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonTabCond.dicFldComparisonOp,
      clsButtonTabEN.con_Text,
    ) == true
  ) {
    const strComparisonOpText: string =
      objButtonTabCond.dicFldComparisonOp[clsButtonTabEN.con_Text];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonTabEN.con_Text,
      objButtonTabCond.text,
      strComparisonOpText,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonTabCond.dicFldComparisonOp,
      clsButtonTabEN.con_CommandName,
    ) == true
  ) {
    const strComparisonOpCommandName: string =
      objButtonTabCond.dicFldComparisonOp[clsButtonTabEN.con_CommandName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonTabEN.con_CommandName,
      objButtonTabCond.commandName,
      strComparisonOpCommandName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonTabCond.dicFldComparisonOp,
      clsButtonTabEN.con_Height,
    ) == true
  ) {
    const strComparisonOpHeight: string =
      objButtonTabCond.dicFldComparisonOp[clsButtonTabEN.con_Height];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsButtonTabEN.con_Height,
      objButtonTabCond.height,
      strComparisonOpHeight,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonTabCond.dicFldComparisonOp,
      clsButtonTabEN.con_Width,
    ) == true
  ) {
    const strComparisonOpWidth: string =
      objButtonTabCond.dicFldComparisonOp[clsButtonTabEN.con_Width];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsButtonTabEN.con_Width,
      objButtonTabCond.width,
      strComparisonOpWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonTabCond.dicFldComparisonOp,
      clsButtonTabEN.con_CssClass,
    ) == true
  ) {
    const strComparisonOpCssClass: string =
      objButtonTabCond.dicFldComparisonOp[clsButtonTabEN.con_CssClass];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonTabEN.con_CssClass,
      objButtonTabCond.cssClass,
      strComparisonOpCssClass,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonTabCond.dicFldComparisonOp,
      clsButtonTabEN.con_ImageUrl,
    ) == true
  ) {
    const strComparisonOpImageUrl: string =
      objButtonTabCond.dicFldComparisonOp[clsButtonTabEN.con_ImageUrl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonTabEN.con_ImageUrl,
      objButtonTabCond.imageUrl,
      strComparisonOpImageUrl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonTabCond.dicFldComparisonOp,
      clsButtonTabEN.con_InUse,
    ) == true
  ) {
    if (objButtonTabCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsButtonTabEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsButtonTabEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonTabCond.dicFldComparisonOp,
      clsButtonTabEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objButtonTabCond.dicFldComparisonOp[clsButtonTabEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsButtonTabEN.con_OrderNum,
      objButtonTabCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonTabCond.dicFldComparisonOp,
      clsButtonTabEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objButtonTabCond.dicFldComparisonOp[clsButtonTabEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonTabEN.con_UpdUser,
      objButtonTabCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonTabCond.dicFldComparisonOp,
      clsButtonTabEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objButtonTabCond.dicFldComparisonOp[clsButtonTabEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonTabEN.con_UpdDate,
      objButtonTabCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objButtonTabCond.dicFldComparisonOp,
      clsButtonTabEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objButtonTabCond.dicFldComparisonOp[clsButtonTabEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsButtonTabEN.con_Memo,
      objButtonTabCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ButtonTab(按钮),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strButtonName: 按钮名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ButtonTab_GetUniCondStr(objButtonTabEN: clsButtonTabEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ButtonName = '{0}'", objButtonTabEN.buttonName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ButtonTab(按钮),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strButtonName: 按钮名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ButtonTab_GetUniCondStr4Update(objButtonTabEN: clsButtonTabEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ButtonId <> '{0}'", objButtonTabEN.buttonId);
  strWhereCond += Format(" and ButtonName = '{0}'", objButtonTabEN.buttonName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objButtonTabENS:源对象
 * @param objButtonTabENT:目标对象
 */
export function ButtonTab_GetObjFromJsonObj(objButtonTabENS: clsButtonTabEN): clsButtonTabEN {
  const objButtonTabENT: clsButtonTabEN = new clsButtonTabEN();
  ObjectAssign(objButtonTabENT, objButtonTabENS);
  return objButtonTabENT;
}
