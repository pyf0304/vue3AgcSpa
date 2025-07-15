/**
 * 类名:clsDataGridStyleWApi
 * 表名:DataGridStyle(00050005)
 * 版本:2023.10.12.1(服务器:WIN-SRV103-116)
 * 日期:2023/10/12 14:40:21
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
 * DataGrid类型(DataGridStyle)
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
import { clsDataGridStyleEN } from '@/ts/L0Entity/PrjInterface/clsDataGridStyleEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const dataGridStyle_Controller = 'DataGridStyleApi';
export const dataGridStyle_ConstructorName = 'dataGridStyle';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDgStyleId:关键字
 * @returns 对象
 **/
export async function DataGridStyle_GetObjByDgStyleIdAsync(
  strDgStyleId: string,
): Promise<clsDataGridStyleEN | null> {
  const strThisFuncName = 'GetObjByDgStyleIdAsync';

  if (IsNullOrEmpty(strDgStyleId) == true) {
    const strMsg = Format(
      '参数:[strDgStyleId]不能为空!(In clsDataGridStyleWApi.GetObjByDgStyleIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDgStyleId';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDgStyleId,
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
      const objDataGridStyle = DataGridStyle_GetObjFromJsonObj(returnObj);
      return objDataGridStyle;
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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
 * @param strDgStyleId:所给的关键字
 * @returns 对象
 */
export async function DataGridStyle_GetObjByDgStyleIdCache(
  strDgStyleId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDgStyleIdCache';

  if (IsNullOrEmpty(strDgStyleId) == true) {
    const strMsg = Format(
      '参数:[strDgStyleId]不能为空!(In clsDataGridStyleWApi.GetObjByDgStyleIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDataGridStyleObjLstCache = await DataGridStyle_GetObjLstCache();
  try {
    const arrDataGridStyleSel = arrDataGridStyleObjLstCache.filter(
      (x) => x.dgStyleId == strDgStyleId,
    );
    let objDataGridStyle: clsDataGridStyleEN;
    if (arrDataGridStyleSel.length > 0) {
      objDataGridStyle = arrDataGridStyleSel[0];
      return objDataGridStyle;
    } else {
      if (bolTryAsyncOnce == true) {
        const objDataGridStyleConst = await DataGridStyle_GetObjByDgStyleIdAsync(strDgStyleId);
        if (objDataGridStyleConst != null) {
          DataGridStyle_ReFreshThisCache();
          return objDataGridStyleConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDgStyleId,
      dataGridStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strDgStyleId:所给的关键字
 * @returns 对象
 */
export async function DataGridStyle_GetObjByDgStyleIdlocalStorage(strDgStyleId: string) {
  const strThisFuncName = 'GetObjByDgStyleIdlocalStorage';

  if (IsNullOrEmpty(strDgStyleId) == true) {
    const strMsg = Format(
      '参数:[strDgStyleId]不能为空!(In clsDataGridStyleWApi.GetObjByDgStyleIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsDataGridStyleEN._CurrTabName, strDgStyleId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objDataGridStyleCache: clsDataGridStyleEN = JSON.parse(strTempObj);
    return objDataGridStyleCache;
  }
  try {
    const objDataGridStyle = await DataGridStyle_GetObjByDgStyleIdAsync(strDgStyleId);
    if (objDataGridStyle != null) {
      localStorage.setItem(strKey, JSON.stringify(objDataGridStyle));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objDataGridStyle;
    }
    return objDataGridStyle;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDgStyleId,
      dataGridStyle_ConstructorName,
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
 * @param objDataGridStyle:所给的对象
 * @returns 对象
 */
export async function DataGridStyle_UpdateObjInLstCache(objDataGridStyle: clsDataGridStyleEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrDataGridStyleObjLstCache = await DataGridStyle_GetObjLstCache();
    const obj = arrDataGridStyleObjLstCache.find((x) => x.dgStyleId == objDataGridStyle.dgStyleId);
    if (obj != null) {
      objDataGridStyle.dgStyleId = obj.dgStyleId;
      ObjectAssign(obj, objDataGridStyle);
    } else {
      arrDataGridStyleObjLstCache.push(objDataGridStyle);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      dataGridStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strDgStyleId:所给的关键字
 * @returns 对象
 */
export async function DataGridStyle_GetNameByDgStyleIdCache(strDgStyleId: string) {
  if (IsNullOrEmpty(strDgStyleId) == true) {
    const strMsg = Format(
      '参数:[strDgStyleId]不能为空!(In clsDataGridStyleWApi.GetNameByDgStyleIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDataGridStyleObjLstCache = await DataGridStyle_GetObjLstCache();
  if (arrDataGridStyleObjLstCache == null) return '';
  try {
    const arrDataGridStyleSel = arrDataGridStyleObjLstCache.filter(
      (x) => x.dgStyleId == strDgStyleId,
    );
    let objDataGridStyle: clsDataGridStyleEN;
    if (arrDataGridStyleSel.length > 0) {
      objDataGridStyle = arrDataGridStyleSel[0];
      return objDataGridStyle.dgStyleName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strDgStyleId,
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
export async function DataGridStyle_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsDataGridStyleEN.con_DgStyleId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsDataGridStyleEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsDataGridStyleEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strDgStyleId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objDataGridStyle = await DataGridStyle_GetObjByDgStyleIdCache(strDgStyleId);
  if (objDataGridStyle == null) return '';
  if (objDataGridStyle.GetFldValue(strOutFldName) == null) return '';
  return objDataGridStyle.GetFldValue(strOutFldName).toString();
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
export function DataGridStyle_SortFunDefa(a: clsDataGridStyleEN, b: clsDataGridStyleEN): number {
  return a.dgStyleId.localeCompare(b.dgStyleId);
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
export function DataGridStyle_SortFunDefa2Fld(
  a: clsDataGridStyleEN,
  b: clsDataGridStyleEN,
): number {
  if (a.dgStyleName == b.dgStyleName) return a.runat.localeCompare(b.runat);
  else return a.dgStyleName.localeCompare(b.dgStyleName);
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
export function DataGridStyle_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDataGridStyleEN.con_DgStyleId:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return a.dgStyleId.localeCompare(b.dgStyleId);
        };
      case clsDataGridStyleEN.con_DgStyleName:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return a.dgStyleName.localeCompare(b.dgStyleName);
        };
      case clsDataGridStyleEN.con_Runat:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          if (a.runat == null) return -1;
          if (b.runat == null) return 1;
          return a.runat.localeCompare(b.runat);
        };
      case clsDataGridStyleEN.con_FontSize:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          if (a.fontSize == null) return -1;
          if (b.fontSize == null) return 1;
          return a.fontSize.localeCompare(b.fontSize);
        };
      case clsDataGridStyleEN.con_FontName:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          if (a.fontName == null) return -1;
          if (b.fontName == null) return 1;
          return a.fontName.localeCompare(b.fontName);
        };
      case clsDataGridStyleEN.con_AllowPaging:
        return (a: clsDataGridStyleEN) => {
          if (a.allowPaging == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_PageSize:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return a.pageSize - b.pageSize;
        };
      case clsDataGridStyleEN.con_AutoGenerateColumns:
        return (a: clsDataGridStyleEN) => {
          if (a.autoGenerateColumns == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_AllowSorting:
        return (a: clsDataGridStyleEN) => {
          if (a.allowSorting == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_IsRadio:
        return (a: clsDataGridStyleEN) => {
          if (a.isRadio == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_IsCheck:
        return (a: clsDataGridStyleEN) => {
          if (a.isCheck == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_IsJumpPage:
        return (a: clsDataGridStyleEN) => {
          if (a.isJumpPage == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_IsHaveUpdBtn:
        return (a: clsDataGridStyleEN) => {
          if (a.isHaveUpdBtn == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_IsHaveDelBtn:
        return (a: clsDataGridStyleEN) => {
          if (a.isHaveDelBtn == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_IsHaveDetailBtn:
        return (a: clsDataGridStyleEN) => {
          if (a.isHaveDetailBtn == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_IsInTab:
        return (a: clsDataGridStyleEN) => {
          if (a.isInTab == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_StyleZindex:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return a.styleZindex - b.styleZindex;
        };
      case clsDataGridStyleEN.con_StyleLeft:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return a.styleLeft - b.styleLeft;
        };
      case clsDataGridStyleEN.con_StylePosition:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          if (a.stylePosition == null) return -1;
          if (b.stylePosition == null) return 1;
          return a.stylePosition.localeCompare(b.stylePosition);
        };
      case clsDataGridStyleEN.con_Width:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return a.width - b.width;
        };
      case clsDataGridStyleEN.con_Height:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return a.height - b.height;
        };
      case clsDataGridStyleEN.con_StyleTop:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return a.styleTop - b.styleTop;
        };
      case clsDataGridStyleEN.con_Style:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          if (a.style == null) return -1;
          if (b.style == null) return 1;
          return a.style.localeCompare(b.style);
        };
      case clsDataGridStyleEN.con_IsDefault:
        return (a: clsDataGridStyleEN) => {
          if (a.isDefault == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataGridStyle]中不存在!(in ${dataGridStyle_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDataGridStyleEN.con_DgStyleId:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return b.dgStyleId.localeCompare(a.dgStyleId);
        };
      case clsDataGridStyleEN.con_DgStyleName:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return b.dgStyleName.localeCompare(a.dgStyleName);
        };
      case clsDataGridStyleEN.con_Runat:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          if (b.runat == null) return -1;
          if (a.runat == null) return 1;
          return b.runat.localeCompare(a.runat);
        };
      case clsDataGridStyleEN.con_FontSize:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          if (b.fontSize == null) return -1;
          if (a.fontSize == null) return 1;
          return b.fontSize.localeCompare(a.fontSize);
        };
      case clsDataGridStyleEN.con_FontName:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          if (b.fontName == null) return -1;
          if (a.fontName == null) return 1;
          return b.fontName.localeCompare(a.fontName);
        };
      case clsDataGridStyleEN.con_AllowPaging:
        return (b: clsDataGridStyleEN) => {
          if (b.allowPaging == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_PageSize:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return b.pageSize - a.pageSize;
        };
      case clsDataGridStyleEN.con_AutoGenerateColumns:
        return (b: clsDataGridStyleEN) => {
          if (b.autoGenerateColumns == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_AllowSorting:
        return (b: clsDataGridStyleEN) => {
          if (b.allowSorting == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_IsRadio:
        return (b: clsDataGridStyleEN) => {
          if (b.isRadio == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_IsCheck:
        return (b: clsDataGridStyleEN) => {
          if (b.isCheck == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_IsJumpPage:
        return (b: clsDataGridStyleEN) => {
          if (b.isJumpPage == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_IsHaveUpdBtn:
        return (b: clsDataGridStyleEN) => {
          if (b.isHaveUpdBtn == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_IsHaveDelBtn:
        return (b: clsDataGridStyleEN) => {
          if (b.isHaveDelBtn == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_IsHaveDetailBtn:
        return (b: clsDataGridStyleEN) => {
          if (b.isHaveDetailBtn == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_IsInTab:
        return (b: clsDataGridStyleEN) => {
          if (b.isInTab == true) return 1;
          else return -1;
        };
      case clsDataGridStyleEN.con_StyleZindex:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return b.styleZindex - a.styleZindex;
        };
      case clsDataGridStyleEN.con_StyleLeft:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return b.styleLeft - a.styleLeft;
        };
      case clsDataGridStyleEN.con_StylePosition:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          if (b.stylePosition == null) return -1;
          if (a.stylePosition == null) return 1;
          return b.stylePosition.localeCompare(a.stylePosition);
        };
      case clsDataGridStyleEN.con_Width:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return b.width - a.width;
        };
      case clsDataGridStyleEN.con_Height:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return b.height - a.height;
        };
      case clsDataGridStyleEN.con_StyleTop:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          return b.styleTop - a.styleTop;
        };
      case clsDataGridStyleEN.con_Style:
        return (a: clsDataGridStyleEN, b: clsDataGridStyleEN) => {
          if (b.style == null) return -1;
          if (a.style == null) return 1;
          return b.style.localeCompare(a.style);
        };
      case clsDataGridStyleEN.con_IsDefault:
        return (b: clsDataGridStyleEN) => {
          if (b.isDefault == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DataGridStyle]中不存在!(in ${dataGridStyle_ConstructorName}.${strThisFuncName})`;
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
export async function DataGridStyle_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDataGridStyleEN.con_DgStyleId:
      return (obj: clsDataGridStyleEN) => {
        return obj.dgStyleId === value;
      };
    case clsDataGridStyleEN.con_DgStyleName:
      return (obj: clsDataGridStyleEN) => {
        return obj.dgStyleName === value;
      };
    case clsDataGridStyleEN.con_Runat:
      return (obj: clsDataGridStyleEN) => {
        return obj.runat === value;
      };
    case clsDataGridStyleEN.con_FontSize:
      return (obj: clsDataGridStyleEN) => {
        return obj.fontSize === value;
      };
    case clsDataGridStyleEN.con_FontName:
      return (obj: clsDataGridStyleEN) => {
        return obj.fontName === value;
      };
    case clsDataGridStyleEN.con_AllowPaging:
      return (obj: clsDataGridStyleEN) => {
        return obj.allowPaging === value;
      };
    case clsDataGridStyleEN.con_PageSize:
      return (obj: clsDataGridStyleEN) => {
        return obj.pageSize === value;
      };
    case clsDataGridStyleEN.con_AutoGenerateColumns:
      return (obj: clsDataGridStyleEN) => {
        return obj.autoGenerateColumns === value;
      };
    case clsDataGridStyleEN.con_AllowSorting:
      return (obj: clsDataGridStyleEN) => {
        return obj.allowSorting === value;
      };
    case clsDataGridStyleEN.con_IsRadio:
      return (obj: clsDataGridStyleEN) => {
        return obj.isRadio === value;
      };
    case clsDataGridStyleEN.con_IsCheck:
      return (obj: clsDataGridStyleEN) => {
        return obj.isCheck === value;
      };
    case clsDataGridStyleEN.con_IsJumpPage:
      return (obj: clsDataGridStyleEN) => {
        return obj.isJumpPage === value;
      };
    case clsDataGridStyleEN.con_IsHaveUpdBtn:
      return (obj: clsDataGridStyleEN) => {
        return obj.isHaveUpdBtn === value;
      };
    case clsDataGridStyleEN.con_IsHaveDelBtn:
      return (obj: clsDataGridStyleEN) => {
        return obj.isHaveDelBtn === value;
      };
    case clsDataGridStyleEN.con_IsHaveDetailBtn:
      return (obj: clsDataGridStyleEN) => {
        return obj.isHaveDetailBtn === value;
      };
    case clsDataGridStyleEN.con_IsInTab:
      return (obj: clsDataGridStyleEN) => {
        return obj.isInTab === value;
      };
    case clsDataGridStyleEN.con_StyleZindex:
      return (obj: clsDataGridStyleEN) => {
        return obj.styleZindex === value;
      };
    case clsDataGridStyleEN.con_StyleLeft:
      return (obj: clsDataGridStyleEN) => {
        return obj.styleLeft === value;
      };
    case clsDataGridStyleEN.con_StylePosition:
      return (obj: clsDataGridStyleEN) => {
        return obj.stylePosition === value;
      };
    case clsDataGridStyleEN.con_Width:
      return (obj: clsDataGridStyleEN) => {
        return obj.width === value;
      };
    case clsDataGridStyleEN.con_Height:
      return (obj: clsDataGridStyleEN) => {
        return obj.height === value;
      };
    case clsDataGridStyleEN.con_StyleTop:
      return (obj: clsDataGridStyleEN) => {
        return obj.styleTop === value;
      };
    case clsDataGridStyleEN.con_Style:
      return (obj: clsDataGridStyleEN) => {
        return obj.style === value;
      };
    case clsDataGridStyleEN.con_IsDefault:
      return (obj: clsDataGridStyleEN) => {
        return obj.isDefault === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DataGridStyle]中不存在!(in ${dataGridStyle_ConstructorName}.${strThisFuncName})`;
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
export async function DataGridStyle_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsDataGridStyleEN.con_DgStyleId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrDataGridStyle = await DataGridStyle_GetObjLstCache();
  if (arrDataGridStyle == null) return [];
  let arrDataGridStyleSel = arrDataGridStyle;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrDataGridStyleSel = arrDataGridStyleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrDataGridStyleSel = arrDataGridStyleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrDataGridStyleSel = arrDataGridStyleSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrDataGridStyleSel = arrDataGridStyleSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrDataGridStyleSel = arrDataGridStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrDataGridStyleSel = arrDataGridStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrDataGridStyleSel = arrDataGridStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrDataGridStyleSel = arrDataGridStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrDataGridStyleSel = arrDataGridStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrDataGridStyleSel = arrDataGridStyleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrDataGridStyleSel.length == 0) return [];
  return arrDataGridStyleSel.map((x) => x.dgStyleId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataGridStyle_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
export async function DataGridStyle_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
export async function DataGridStyle_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDataGridStyleEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

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
      const objDataGridStyle = DataGridStyle_GetObjFromJsonObj(returnObj);
      return objDataGridStyle;
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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
export async function DataGridStyle_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDataGridStyleEN._CurrTabName;
  if (IsNullOrEmpty(clsDataGridStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDataGridStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrDataGridStyleExObjLstCache: Array<clsDataGridStyleEN> = CacheHelper.Get(strKey);
    const arrDataGridStyleObjLstT = DataGridStyle_GetObjLstByJSONObjLst(
      arrDataGridStyleExObjLstCache,
    );
    return arrDataGridStyleObjLstT;
  }
  try {
    const arrDataGridStyleExObjLst = await DataGridStyle_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrDataGridStyleExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDataGridStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrDataGridStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dataGridStyle_ConstructorName,
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
export async function DataGridStyle_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDataGridStyleEN._CurrTabName;
  if (IsNullOrEmpty(clsDataGridStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDataGridStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDataGridStyleExObjLstCache: Array<clsDataGridStyleEN> = JSON.parse(strTempObjLst);
    const arrDataGridStyleObjLstT = DataGridStyle_GetObjLstByJSONObjLst(
      arrDataGridStyleExObjLstCache,
    );
    return arrDataGridStyleObjLstT;
  }
  try {
    const arrDataGridStyleExObjLst = await DataGridStyle_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrDataGridStyleExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDataGridStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrDataGridStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dataGridStyle_ConstructorName,
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
export async function DataGridStyle_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsDataGridStyleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDataGridStyleObjLstCache: Array<clsDataGridStyleEN> = JSON.parse(strTempObjLst);
    return arrDataGridStyleObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function DataGridStyle_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDataGridStyleEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

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
          dataGridStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataGridStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
export async function DataGridStyle_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDataGridStyleEN._CurrTabName;
  if (IsNullOrEmpty(clsDataGridStyleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDataGridStyleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDataGridStyleExObjLstCache: Array<clsDataGridStyleEN> = JSON.parse(strTempObjLst);
    const arrDataGridStyleObjLstT = DataGridStyle_GetObjLstByJSONObjLst(
      arrDataGridStyleExObjLstCache,
    );
    return arrDataGridStyleObjLstT;
  }
  try {
    const arrDataGridStyleExObjLst = await DataGridStyle_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrDataGridStyleExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDataGridStyleExObjLst.length,
    );
    console.log(strInfo);
    return arrDataGridStyleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      dataGridStyle_ConstructorName,
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
export async function DataGridStyle_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsDataGridStyleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDataGridStyleObjLstCache: Array<clsDataGridStyleEN> = JSON.parse(strTempObjLst);
    return arrDataGridStyleObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DataGridStyle_GetObjLstCache(): Promise<Array<clsDataGridStyleEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrDataGridStyleObjLstCache;
  switch (clsDataGridStyleEN.CacheModeId) {
    case '04': //sessionStorage
      arrDataGridStyleObjLstCache = await DataGridStyle_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrDataGridStyleObjLstCache = await DataGridStyle_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrDataGridStyleObjLstCache = await DataGridStyle_GetObjLstClientCache();
      break;
    default:
      arrDataGridStyleObjLstCache = await DataGridStyle_GetObjLstClientCache();
      break;
  }
  return arrDataGridStyleObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DataGridStyle_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrDataGridStyleObjLstCache;
  switch (clsDataGridStyleEN.CacheModeId) {
    case '04': //sessionStorage
      arrDataGridStyleObjLstCache = await DataGridStyle_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrDataGridStyleObjLstCache = await DataGridStyle_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrDataGridStyleObjLstCache = null;
      break;
    default:
      arrDataGridStyleObjLstCache = null;
      break;
  }
  return arrDataGridStyleObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrDgStyleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DataGridStyle_GetSubObjLstCache(objDataGridStyleCond: clsDataGridStyleEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrDataGridStyleObjLstCache = await DataGridStyle_GetObjLstCache();
  let arrDataGridStyleSel = arrDataGridStyleObjLstCache;
  if (
    objDataGridStyleCond.sfFldComparisonOp == null ||
    objDataGridStyleCond.sfFldComparisonOp == ''
  )
    return arrDataGridStyleSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objDataGridStyleCond.sfFldComparisonOp,
  );
  //console.log("clsDataGridStyleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objDataGridStyleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrDataGridStyleSel = arrDataGridStyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDataGridStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDataGridStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDataGridStyleCond),
      dataGridStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDataGridStyleEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDgStyleId:关键字列表
 * @returns 对象列表
 **/
export async function DataGridStyle_GetObjLstByDgStyleIdLstAsync(
  arrDgStyleId: Array<string>,
): Promise<Array<clsDataGridStyleEN>> {
  const strThisFuncName = 'GetObjLstByDgStyleIdLstAsync';
  const strAction = 'GetObjLstByDgStyleIdLst';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDgStyleId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          dataGridStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataGridStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
 * @param arrstrDgStyleIdLst:关键字列表
 * @returns 对象列表
 */
export async function DataGridStyle_GetObjLstByDgStyleIdLstCache(arrDgStyleIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByDgStyleIdLstCache';
  try {
    const arrDataGridStyleObjLstCache = await DataGridStyle_GetObjLstCache();
    const arrDataGridStyleSel = arrDataGridStyleObjLstCache.filter(
      (x) => arrDgStyleIdLst.indexOf(x.dgStyleId) > -1,
    );
    return arrDataGridStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrDgStyleIdLst.join(','),
      dataGridStyle_ConstructorName,
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
export async function DataGridStyle_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDataGridStyleEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

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
          dataGridStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataGridStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
export async function DataGridStyle_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDataGridStyleEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

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
          dataGridStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataGridStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
export async function DataGridStyle_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsDataGridStyleEN>();
  const arrDataGridStyleObjLstCache = await DataGridStyle_GetObjLstCache();
  if (arrDataGridStyleObjLstCache.length == 0) return arrDataGridStyleObjLstCache;
  let arrDataGridStyleSel = arrDataGridStyleObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objDataGridStyleCond = new clsDataGridStyleEN();
  ObjectAssign(objDataGridStyleCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsDataGridStyleWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrDataGridStyleSel = arrDataGridStyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDataGridStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDataGridStyleSel.length == 0) return arrDataGridStyleSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDataGridStyleSel = arrDataGridStyleSel.sort(
        DataGridStyle_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDataGridStyleSel = arrDataGridStyleSel.sort(objPagerPara.sortFun);
    }
    arrDataGridStyleSel = arrDataGridStyleSel.slice(intStart, intEnd);
    return arrDataGridStyleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      dataGridStyle_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDataGridStyleEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function DataGridStyle_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDataGridStyleEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDataGridStyleEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

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
          dataGridStyle_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DataGridStyle_GetObjLstByJSONObjLst(returnObjLst);
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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
 * @param strDgStyleId:关键字
 * @returns 获取删除的结果
 **/
export async function DataGridStyle_DelRecordAsync(strDgStyleId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strDgStyleId);

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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
 * @param arrDgStyleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function DataGridStyle_DelDataGridStylesAsync(
  arrDgStyleId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelDataGridStylesAsync';
  const strAction = 'DelDataGridStyles';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDgStyleId, config);
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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
export async function DataGridStyle_DelDataGridStylesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelDataGridStylesByCondAsync';
  const strAction = 'DelDataGridStylesByCond';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
 * @param objDataGridStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DataGridStyle_AddNewRecordAsync(
  objDataGridStyleEN: clsDataGridStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objDataGridStyleEN.dgStyleId === null || objDataGridStyleEN.dgStyleId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objDataGridStyleEN);
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataGridStyleEN, config);
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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
 * @param objDataGridStyleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DataGridStyle_AddNewRecordWithMaxIdAsync(
  objDataGridStyleEN: clsDataGridStyleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataGridStyleEN, config);
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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
 * @param objDataGridStyleEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DataGridStyle_AddNewRecordWithReturnKeyAsync(
  objDataGridStyleEN: clsDataGridStyleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataGridStyleEN, config);
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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
 * @param objDataGridStyleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DataGridStyle_UpdateRecordAsync(
  objDataGridStyleEN: clsDataGridStyleEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDataGridStyleEN.sfUpdFldSetStr === undefined ||
    objDataGridStyleEN.sfUpdFldSetStr === null ||
    objDataGridStyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataGridStyleEN.dgStyleId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataGridStyleEN, config);
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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
 * @param objDataGridStyleEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DataGridStyle_UpdateWithConditionAsync(
  objDataGridStyleEN: clsDataGridStyleEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDataGridStyleEN.sfUpdFldSetStr === undefined ||
    objDataGridStyleEN.sfUpdFldSetStr === null ||
    objDataGridStyleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDataGridStyleEN.dgStyleId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);
  objDataGridStyleEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDataGridStyleEN, config);
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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
 * @param objstrDgStyleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DataGridStyle_IsExistRecordCache(objDataGridStyleCond: clsDataGridStyleEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrDataGridStyleObjLstCache = await DataGridStyle_GetObjLstCache();
  if (arrDataGridStyleObjLstCache == null) return false;
  let arrDataGridStyleSel = arrDataGridStyleObjLstCache;
  if (
    objDataGridStyleCond.sfFldComparisonOp == null ||
    objDataGridStyleCond.sfFldComparisonOp == ''
  )
    return arrDataGridStyleSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objDataGridStyleCond.sfFldComparisonOp,
  );
  //console.log("clsDataGridStyleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objDataGridStyleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDataGridStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDataGridStyleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objDataGridStyleCond),
      dataGridStyle_ConstructorName,
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
export async function DataGridStyle_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
 * @param strDgStyleId:所给的关键字
 * @returns 对象
 */
export async function DataGridStyle_IsExistCache(strDgStyleId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrDataGridStyleObjLstCache = await DataGridStyle_GetObjLstCache();
  if (arrDataGridStyleObjLstCache == null) return false;
  try {
    const arrDataGridStyleSel = arrDataGridStyleObjLstCache.filter(
      (x) => x.dgStyleId == strDgStyleId,
    );
    if (arrDataGridStyleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strDgStyleId,
      dataGridStyle_ConstructorName,
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
 * @param strDgStyleId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function DataGridStyle_IsExistAsync(strDgStyleId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDgStyleId,
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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
export async function DataGridStyle_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
 * @param objDataGridStyleCond:条件对象
 * @returns 对象列表记录数
 */
export async function DataGridStyle_GetRecCountByCondCache(
  objDataGridStyleCond: clsDataGridStyleEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrDataGridStyleObjLstCache = await DataGridStyle_GetObjLstCache();
  if (arrDataGridStyleObjLstCache == null) return 0;
  let arrDataGridStyleSel = arrDataGridStyleObjLstCache;
  if (
    objDataGridStyleCond.sfFldComparisonOp == null ||
    objDataGridStyleCond.sfFldComparisonOp == ''
  )
    return arrDataGridStyleSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objDataGridStyleCond.sfFldComparisonOp,
  );
  //console.log("clsDataGridStyleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objDataGridStyleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrDataGridStyleSel = arrDataGridStyleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDataGridStyleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDataGridStyleSel = arrDataGridStyleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDataGridStyleSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDataGridStyleCond),
      dataGridStyle_ConstructorName,
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
export async function DataGridStyle_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(dataGridStyle_Controller, strAction);

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
        dataGridStyle_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        dataGridStyle_ConstructorName,
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
export function DataGridStyle_GetWebApiUrl(strController: string, strAction: string): string {
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
export function DataGridStyle_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsDataGridStyleEN._CurrTabName;
  switch (clsDataGridStyleEN.CacheModeId) {
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
export function DataGridStyle_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsDataGridStyleEN._CurrTabName;
    switch (clsDataGridStyleEN.CacheModeId) {
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
export async function DataGridStyle_BindDdl_DgStyleIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_DgStyleIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DgStyleIdInDivCache");
  const arrObjLstSel = await DataGridStyle_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsDataGridStyleEN.con_DgStyleId,
    clsDataGridStyleEN.con_DgStyleName,
    'DataGrid类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DataGridStyle_CheckPropertyNew(pobjDataGridStyleEN: clsDataGridStyleEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjDataGridStyleEN.dgStyleName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[DG模式名]不能为空(In DataGrid类型)!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjDataGridStyleEN.allowPaging ||
    (pobjDataGridStyleEN.allowPaging != null && pobjDataGridStyleEN.allowPaging.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[允许分页]不能为空(In DataGrid类型)!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjDataGridStyleEN.autoGenerateColumns ||
    (pobjDataGridStyleEN.autoGenerateColumns != null &&
      pobjDataGridStyleEN.autoGenerateColumns.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[自动生成列]不能为空(In DataGrid类型)!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjDataGridStyleEN.allowSorting ||
    (pobjDataGridStyleEN.allowSorting != null && pobjDataGridStyleEN.allowSorting.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[允许排序]不能为空(In DataGrid类型)!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.dgStyleId) == false &&
    GetStrLen(pobjDataGridStyleEN.dgStyleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[DG模式ID(dgStyleId)]的长度不能超过4(In DataGrid类型(DataGridStyle))!值:$(pobjDataGridStyleEN.dgStyleId)(clsDataGridStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.dgStyleName) == false &&
    GetStrLen(pobjDataGridStyleEN.dgStyleName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[DG模式名(dgStyleName)]的长度不能超过30(In DataGrid类型(DataGridStyle))!值:$(pobjDataGridStyleEN.dgStyleName)(clsDataGridStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.runat) == false &&
    GetStrLen(pobjDataGridStyleEN.runat) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[运行在(runat)]的长度不能超过30(In DataGrid类型(DataGridStyle))!值:$(pobjDataGridStyleEN.runat)(clsDataGridStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.fontSize) == false &&
    GetStrLen(pobjDataGridStyleEN.fontSize) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字号(fontSize)]的长度不能超过20(In DataGrid类型(DataGridStyle))!值:$(pobjDataGridStyleEN.fontSize)(clsDataGridStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.fontName) == false &&
    GetStrLen(pobjDataGridStyleEN.fontName) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字体(fontName)]的长度不能超过20(In DataGrid类型(DataGridStyle))!值:$(pobjDataGridStyleEN.fontName)(clsDataGridStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.stylePosition) == false &&
    GetStrLen(pobjDataGridStyleEN.stylePosition) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Style_Position(stylePosition)]的长度不能超过20(In DataGrid类型(DataGridStyle))!值:$(pobjDataGridStyleEN.stylePosition)(clsDataGridStyleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.style) == false &&
    GetStrLen(pobjDataGridStyleEN.style) > 800
  ) {
    throw new Error(
      '(errid:Watl000413)字段[类型(style)]的长度不能超过800(In DataGrid类型(DataGridStyle))!值:$(pobjDataGridStyleEN.style)(clsDataGridStyleBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.dgStyleId) == false &&
    undefined !== pobjDataGridStyleEN.dgStyleId &&
    tzDataType.isString(pobjDataGridStyleEN.dgStyleId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[DG模式ID(dgStyleId)]的值:[$(pobjDataGridStyleEN.dgStyleId)], 非法,应该为字符型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.dgStyleName) == false &&
    undefined !== pobjDataGridStyleEN.dgStyleName &&
    tzDataType.isString(pobjDataGridStyleEN.dgStyleName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[DG模式名(dgStyleName)]的值:[$(pobjDataGridStyleEN.dgStyleName)], 非法,应该为字符型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.runat) == false &&
    undefined !== pobjDataGridStyleEN.runat &&
    tzDataType.isString(pobjDataGridStyleEN.runat) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[运行在(runat)]的值:[$(pobjDataGridStyleEN.runat)], 非法,应该为字符型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.fontSize) == false &&
    undefined !== pobjDataGridStyleEN.fontSize &&
    tzDataType.isString(pobjDataGridStyleEN.fontSize) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字号(fontSize)]的值:[$(pobjDataGridStyleEN.fontSize)], 非法,应该为字符型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.fontName) == false &&
    undefined !== pobjDataGridStyleEN.fontName &&
    tzDataType.isString(pobjDataGridStyleEN.fontName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字体(fontName)]的值:[$(pobjDataGridStyleEN.fontName)], 非法,应该为字符型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.allowPaging &&
    undefined !== pobjDataGridStyleEN.allowPaging &&
    tzDataType.isBoolean(pobjDataGridStyleEN.allowPaging) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[允许分页(allowPaging)]的值:[$(pobjDataGridStyleEN.allowPaging)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.pageSize &&
    undefined !== pobjDataGridStyleEN.pageSize &&
    tzDataType.isNumber(pobjDataGridStyleEN.pageSize) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[页大小(pageSize)]的值:[$(pobjDataGridStyleEN.pageSize)], 非法,应该为数值型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.autoGenerateColumns &&
    undefined !== pobjDataGridStyleEN.autoGenerateColumns &&
    tzDataType.isBoolean(pobjDataGridStyleEN.autoGenerateColumns) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[自动生成列(autoGenerateColumns)]的值:[$(pobjDataGridStyleEN.autoGenerateColumns)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.allowSorting &&
    undefined !== pobjDataGridStyleEN.allowSorting &&
    tzDataType.isBoolean(pobjDataGridStyleEN.allowSorting) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[允许排序(allowSorting)]的值:[$(pobjDataGridStyleEN.allowSorting)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isRadio &&
    undefined !== pobjDataGridStyleEN.isRadio &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isRadio) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否单选框(isRadio)]的值:[$(pobjDataGridStyleEN.isRadio)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isCheck &&
    undefined !== pobjDataGridStyleEN.isCheck &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isCheck) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否复选框(isCheck)]的值:[$(pobjDataGridStyleEN.isCheck)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isJumpPage &&
    undefined !== pobjDataGridStyleEN.isJumpPage &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isJumpPage) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否跳页(isJumpPage)]的值:[$(pobjDataGridStyleEN.isJumpPage)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isHaveUpdBtn &&
    undefined !== pobjDataGridStyleEN.isHaveUpdBtn &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isHaveUpdBtn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有修改按钮(isHaveUpdBtn)]的值:[$(pobjDataGridStyleEN.isHaveUpdBtn)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isHaveDelBtn &&
    undefined !== pobjDataGridStyleEN.isHaveDelBtn &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isHaveDelBtn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有删除按钮(isHaveDelBtn)]的值:[$(pobjDataGridStyleEN.isHaveDelBtn)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isHaveDetailBtn &&
    undefined !== pobjDataGridStyleEN.isHaveDetailBtn &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isHaveDetailBtn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有详细按钮(isHaveDetailBtn)]的值:[$(pobjDataGridStyleEN.isHaveDetailBtn)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isInTab &&
    undefined !== pobjDataGridStyleEN.isInTab &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isInTab) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否生成DG在表中(isInTab)]的值:[$(pobjDataGridStyleEN.isInTab)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.styleZindex &&
    undefined !== pobjDataGridStyleEN.styleZindex &&
    tzDataType.isNumber(pobjDataGridStyleEN.styleZindex) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Zindex(styleZindex)]的值:[$(pobjDataGridStyleEN.styleZindex)], 非法,应该为数值型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.styleLeft &&
    undefined !== pobjDataGridStyleEN.styleLeft &&
    tzDataType.isNumber(pobjDataGridStyleEN.styleLeft) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Left(styleLeft)]的值:[$(pobjDataGridStyleEN.styleLeft)], 非法,应该为数值型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.stylePosition) == false &&
    undefined !== pobjDataGridStyleEN.stylePosition &&
    tzDataType.isString(pobjDataGridStyleEN.stylePosition) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Position(stylePosition)]的值:[$(pobjDataGridStyleEN.stylePosition)], 非法,应该为字符型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.width &&
    undefined !== pobjDataGridStyleEN.width &&
    tzDataType.isNumber(pobjDataGridStyleEN.width) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[宽(width)]的值:[$(pobjDataGridStyleEN.width)], 非法,应该为数值型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.height &&
    undefined !== pobjDataGridStyleEN.height &&
    tzDataType.isNumber(pobjDataGridStyleEN.height) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[高度(height)]的值:[$(pobjDataGridStyleEN.height)], 非法,应该为数值型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.styleTop &&
    undefined !== pobjDataGridStyleEN.styleTop &&
    tzDataType.isNumber(pobjDataGridStyleEN.styleTop) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Top(styleTop)]的值:[$(pobjDataGridStyleEN.styleTop)], 非法,应该为数值型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.style) == false &&
    undefined !== pobjDataGridStyleEN.style &&
    tzDataType.isString(pobjDataGridStyleEN.style) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类型(style)]的值:[$(pobjDataGridStyleEN.style)], 非法,应该为字符型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isDefault &&
    undefined !== pobjDataGridStyleEN.isDefault &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isDefault) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否默认(isDefault)]的值:[$(pobjDataGridStyleEN.isDefault)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DataGridStyle_CheckProperty4Update(pobjDataGridStyleEN: clsDataGridStyleEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.dgStyleId) == false &&
    GetStrLen(pobjDataGridStyleEN.dgStyleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[DG模式ID(dgStyleId)]的长度不能超过4(In DataGrid类型(DataGridStyle))!值:$(pobjDataGridStyleEN.dgStyleId)(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.dgStyleName) == false &&
    GetStrLen(pobjDataGridStyleEN.dgStyleName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[DG模式名(dgStyleName)]的长度不能超过30(In DataGrid类型(DataGridStyle))!值:$(pobjDataGridStyleEN.dgStyleName)(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.runat) == false &&
    GetStrLen(pobjDataGridStyleEN.runat) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[运行在(runat)]的长度不能超过30(In DataGrid类型(DataGridStyle))!值:$(pobjDataGridStyleEN.runat)(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.fontSize) == false &&
    GetStrLen(pobjDataGridStyleEN.fontSize) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字号(fontSize)]的长度不能超过20(In DataGrid类型(DataGridStyle))!值:$(pobjDataGridStyleEN.fontSize)(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.fontName) == false &&
    GetStrLen(pobjDataGridStyleEN.fontName) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字体(fontName)]的长度不能超过20(In DataGrid类型(DataGridStyle))!值:$(pobjDataGridStyleEN.fontName)(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.stylePosition) == false &&
    GetStrLen(pobjDataGridStyleEN.stylePosition) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Style_Position(stylePosition)]的长度不能超过20(In DataGrid类型(DataGridStyle))!值:$(pobjDataGridStyleEN.stylePosition)(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.style) == false &&
    GetStrLen(pobjDataGridStyleEN.style) > 800
  ) {
    throw new Error(
      '(errid:Watl000416)字段[类型(style)]的长度不能超过800(In DataGrid类型(DataGridStyle))!值:$(pobjDataGridStyleEN.style)(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.dgStyleId) == false &&
    undefined !== pobjDataGridStyleEN.dgStyleId &&
    tzDataType.isString(pobjDataGridStyleEN.dgStyleId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[DG模式ID(dgStyleId)]的值:[$(pobjDataGridStyleEN.dgStyleId)], 非法,应该为字符型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.dgStyleName) == false &&
    undefined !== pobjDataGridStyleEN.dgStyleName &&
    tzDataType.isString(pobjDataGridStyleEN.dgStyleName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[DG模式名(dgStyleName)]的值:[$(pobjDataGridStyleEN.dgStyleName)], 非法,应该为字符型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.runat) == false &&
    undefined !== pobjDataGridStyleEN.runat &&
    tzDataType.isString(pobjDataGridStyleEN.runat) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[运行在(runat)]的值:[$(pobjDataGridStyleEN.runat)], 非法,应该为字符型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.fontSize) == false &&
    undefined !== pobjDataGridStyleEN.fontSize &&
    tzDataType.isString(pobjDataGridStyleEN.fontSize) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字号(fontSize)]的值:[$(pobjDataGridStyleEN.fontSize)], 非法,应该为字符型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.fontName) == false &&
    undefined !== pobjDataGridStyleEN.fontName &&
    tzDataType.isString(pobjDataGridStyleEN.fontName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字体(fontName)]的值:[$(pobjDataGridStyleEN.fontName)], 非法,应该为字符型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.allowPaging &&
    undefined !== pobjDataGridStyleEN.allowPaging &&
    tzDataType.isBoolean(pobjDataGridStyleEN.allowPaging) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[允许分页(allowPaging)]的值:[$(pobjDataGridStyleEN.allowPaging)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.pageSize &&
    undefined !== pobjDataGridStyleEN.pageSize &&
    tzDataType.isNumber(pobjDataGridStyleEN.pageSize) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[页大小(pageSize)]的值:[$(pobjDataGridStyleEN.pageSize)], 非法,应该为数值型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.autoGenerateColumns &&
    undefined !== pobjDataGridStyleEN.autoGenerateColumns &&
    tzDataType.isBoolean(pobjDataGridStyleEN.autoGenerateColumns) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[自动生成列(autoGenerateColumns)]的值:[$(pobjDataGridStyleEN.autoGenerateColumns)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.allowSorting &&
    undefined !== pobjDataGridStyleEN.allowSorting &&
    tzDataType.isBoolean(pobjDataGridStyleEN.allowSorting) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[允许排序(allowSorting)]的值:[$(pobjDataGridStyleEN.allowSorting)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isRadio &&
    undefined !== pobjDataGridStyleEN.isRadio &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isRadio) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否单选框(isRadio)]的值:[$(pobjDataGridStyleEN.isRadio)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isCheck &&
    undefined !== pobjDataGridStyleEN.isCheck &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isCheck) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否复选框(isCheck)]的值:[$(pobjDataGridStyleEN.isCheck)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isJumpPage &&
    undefined !== pobjDataGridStyleEN.isJumpPage &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isJumpPage) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否跳页(isJumpPage)]的值:[$(pobjDataGridStyleEN.isJumpPage)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isHaveUpdBtn &&
    undefined !== pobjDataGridStyleEN.isHaveUpdBtn &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isHaveUpdBtn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有修改按钮(isHaveUpdBtn)]的值:[$(pobjDataGridStyleEN.isHaveUpdBtn)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isHaveDelBtn &&
    undefined !== pobjDataGridStyleEN.isHaveDelBtn &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isHaveDelBtn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有删除按钮(isHaveDelBtn)]的值:[$(pobjDataGridStyleEN.isHaveDelBtn)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isHaveDetailBtn &&
    undefined !== pobjDataGridStyleEN.isHaveDetailBtn &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isHaveDetailBtn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有详细按钮(isHaveDetailBtn)]的值:[$(pobjDataGridStyleEN.isHaveDetailBtn)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isInTab &&
    undefined !== pobjDataGridStyleEN.isInTab &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isInTab) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否生成DG在表中(isInTab)]的值:[$(pobjDataGridStyleEN.isInTab)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.styleZindex &&
    undefined !== pobjDataGridStyleEN.styleZindex &&
    tzDataType.isNumber(pobjDataGridStyleEN.styleZindex) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Zindex(styleZindex)]的值:[$(pobjDataGridStyleEN.styleZindex)], 非法,应该为数值型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.styleLeft &&
    undefined !== pobjDataGridStyleEN.styleLeft &&
    tzDataType.isNumber(pobjDataGridStyleEN.styleLeft) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Left(styleLeft)]的值:[$(pobjDataGridStyleEN.styleLeft)], 非法,应该为数值型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.stylePosition) == false &&
    undefined !== pobjDataGridStyleEN.stylePosition &&
    tzDataType.isString(pobjDataGridStyleEN.stylePosition) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Position(stylePosition)]的值:[$(pobjDataGridStyleEN.stylePosition)], 非法,应该为字符型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.width &&
    undefined !== pobjDataGridStyleEN.width &&
    tzDataType.isNumber(pobjDataGridStyleEN.width) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[宽(width)]的值:[$(pobjDataGridStyleEN.width)], 非法,应该为数值型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.height &&
    undefined !== pobjDataGridStyleEN.height &&
    tzDataType.isNumber(pobjDataGridStyleEN.height) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[高度(height)]的值:[$(pobjDataGridStyleEN.height)], 非法,应该为数值型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.styleTop &&
    undefined !== pobjDataGridStyleEN.styleTop &&
    tzDataType.isNumber(pobjDataGridStyleEN.styleTop) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Top(styleTop)]的值:[$(pobjDataGridStyleEN.styleTop)], 非法,应该为数值型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.style) == false &&
    undefined !== pobjDataGridStyleEN.style &&
    tzDataType.isString(pobjDataGridStyleEN.style) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类型(style)]的值:[$(pobjDataGridStyleEN.style)], 非法,应该为字符型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjDataGridStyleEN.isDefault &&
    undefined !== pobjDataGridStyleEN.isDefault &&
    tzDataType.isBoolean(pobjDataGridStyleEN.isDefault) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否默认(isDefault)]的值:[$(pobjDataGridStyleEN.isDefault)], 非法,应该为布尔型(In DataGrid类型(DataGridStyle))!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjDataGridStyleEN.dgStyleId) === true ||
    pobjDataGridStyleEN.dgStyleId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[DG模式ID]不能为空(In DataGrid类型)!(clsDataGridStyleBL:CheckProperty4Update)',
    );
  }
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
export function DataGridStyle_GetJSONStrByObj(pobjDataGridStyleEN: clsDataGridStyleEN): string {
  pobjDataGridStyleEN.sfUpdFldSetStr = pobjDataGridStyleEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDataGridStyleEN);
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
export function DataGridStyle_GetObjLstByJSONStr(strJSON: string): Array<clsDataGridStyleEN> {
  let arrDataGridStyleObjLst = new Array<clsDataGridStyleEN>();
  if (strJSON === '') {
    return arrDataGridStyleObjLst;
  }
  try {
    arrDataGridStyleObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDataGridStyleObjLst;
  }
  return arrDataGridStyleObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDataGridStyleObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DataGridStyle_GetObjLstByJSONObjLst(
  arrDataGridStyleObjLstS: Array<clsDataGridStyleEN>,
): Array<clsDataGridStyleEN> {
  const arrDataGridStyleObjLst = new Array<clsDataGridStyleEN>();
  for (const objInFor of arrDataGridStyleObjLstS) {
    const obj1 = DataGridStyle_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDataGridStyleObjLst.push(obj1);
  }
  return arrDataGridStyleObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-10-12
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DataGridStyle_GetObjByJSONStr(strJSON: string): clsDataGridStyleEN {
  let pobjDataGridStyleEN = new clsDataGridStyleEN();
  if (strJSON === '') {
    return pobjDataGridStyleEN;
  }
  try {
    pobjDataGridStyleEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDataGridStyleEN;
  }
  return pobjDataGridStyleEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DataGridStyle_GetCombineCondition(
  objDataGridStyleCond: clsDataGridStyleEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_DgStyleId,
    ) == true
  ) {
    const strComparisonOpDgStyleId: string =
      objDataGridStyleCond.dicFldComparisonOp[clsDataGridStyleEN.con_DgStyleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataGridStyleEN.con_DgStyleId,
      objDataGridStyleCond.dgStyleId,
      strComparisonOpDgStyleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_DgStyleName,
    ) == true
  ) {
    const strComparisonOpDgStyleName: string =
      objDataGridStyleCond.dicFldComparisonOp[clsDataGridStyleEN.con_DgStyleName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataGridStyleEN.con_DgStyleName,
      objDataGridStyleCond.dgStyleName,
      strComparisonOpDgStyleName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_Runat,
    ) == true
  ) {
    const strComparisonOpRunat: string =
      objDataGridStyleCond.dicFldComparisonOp[clsDataGridStyleEN.con_Runat];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataGridStyleEN.con_Runat,
      objDataGridStyleCond.runat,
      strComparisonOpRunat,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_FontSize,
    ) == true
  ) {
    const strComparisonOpFontSize: string =
      objDataGridStyleCond.dicFldComparisonOp[clsDataGridStyleEN.con_FontSize];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataGridStyleEN.con_FontSize,
      objDataGridStyleCond.fontSize,
      strComparisonOpFontSize,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_FontName,
    ) == true
  ) {
    const strComparisonOpFontName: string =
      objDataGridStyleCond.dicFldComparisonOp[clsDataGridStyleEN.con_FontName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataGridStyleEN.con_FontName,
      objDataGridStyleCond.fontName,
      strComparisonOpFontName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_AllowPaging,
    ) == true
  ) {
    if (objDataGridStyleCond.allowPaging == true) {
      strWhereCond += Format(" And {0} = '1'", clsDataGridStyleEN.con_AllowPaging);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDataGridStyleEN.con_AllowPaging);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_PageSize,
    ) == true
  ) {
    const strComparisonOpPageSize: string =
      objDataGridStyleCond.dicFldComparisonOp[clsDataGridStyleEN.con_PageSize];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataGridStyleEN.con_PageSize,
      objDataGridStyleCond.pageSize,
      strComparisonOpPageSize,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_AutoGenerateColumns,
    ) == true
  ) {
    if (objDataGridStyleCond.autoGenerateColumns == true) {
      strWhereCond += Format(" And {0} = '1'", clsDataGridStyleEN.con_AutoGenerateColumns);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDataGridStyleEN.con_AutoGenerateColumns);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_AllowSorting,
    ) == true
  ) {
    if (objDataGridStyleCond.allowSorting == true) {
      strWhereCond += Format(" And {0} = '1'", clsDataGridStyleEN.con_AllowSorting);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDataGridStyleEN.con_AllowSorting);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_IsRadio,
    ) == true
  ) {
    if (objDataGridStyleCond.isRadio == true) {
      strWhereCond += Format(" And {0} = '1'", clsDataGridStyleEN.con_IsRadio);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDataGridStyleEN.con_IsRadio);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_IsCheck,
    ) == true
  ) {
    if (objDataGridStyleCond.isCheck == true) {
      strWhereCond += Format(" And {0} = '1'", clsDataGridStyleEN.con_IsCheck);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDataGridStyleEN.con_IsCheck);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_IsJumpPage,
    ) == true
  ) {
    if (objDataGridStyleCond.isJumpPage == true) {
      strWhereCond += Format(" And {0} = '1'", clsDataGridStyleEN.con_IsJumpPage);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDataGridStyleEN.con_IsJumpPage);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_IsHaveUpdBtn,
    ) == true
  ) {
    if (objDataGridStyleCond.isHaveUpdBtn == true) {
      strWhereCond += Format(" And {0} = '1'", clsDataGridStyleEN.con_IsHaveUpdBtn);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDataGridStyleEN.con_IsHaveUpdBtn);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_IsHaveDelBtn,
    ) == true
  ) {
    if (objDataGridStyleCond.isHaveDelBtn == true) {
      strWhereCond += Format(" And {0} = '1'", clsDataGridStyleEN.con_IsHaveDelBtn);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDataGridStyleEN.con_IsHaveDelBtn);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_IsHaveDetailBtn,
    ) == true
  ) {
    if (objDataGridStyleCond.isHaveDetailBtn == true) {
      strWhereCond += Format(" And {0} = '1'", clsDataGridStyleEN.con_IsHaveDetailBtn);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDataGridStyleEN.con_IsHaveDetailBtn);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_IsInTab,
    ) == true
  ) {
    if (objDataGridStyleCond.isInTab == true) {
      strWhereCond += Format(" And {0} = '1'", clsDataGridStyleEN.con_IsInTab);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDataGridStyleEN.con_IsInTab);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_StyleZindex,
    ) == true
  ) {
    const strComparisonOpStyleZindex: string =
      objDataGridStyleCond.dicFldComparisonOp[clsDataGridStyleEN.con_StyleZindex];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataGridStyleEN.con_StyleZindex,
      objDataGridStyleCond.styleZindex,
      strComparisonOpStyleZindex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_StyleLeft,
    ) == true
  ) {
    const strComparisonOpStyleLeft: string =
      objDataGridStyleCond.dicFldComparisonOp[clsDataGridStyleEN.con_StyleLeft];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataGridStyleEN.con_StyleLeft,
      objDataGridStyleCond.styleLeft,
      strComparisonOpStyleLeft,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_StylePosition,
    ) == true
  ) {
    const strComparisonOpStylePosition: string =
      objDataGridStyleCond.dicFldComparisonOp[clsDataGridStyleEN.con_StylePosition];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataGridStyleEN.con_StylePosition,
      objDataGridStyleCond.stylePosition,
      strComparisonOpStylePosition,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_Width,
    ) == true
  ) {
    const strComparisonOpWidth: string =
      objDataGridStyleCond.dicFldComparisonOp[clsDataGridStyleEN.con_Width];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataGridStyleEN.con_Width,
      objDataGridStyleCond.width,
      strComparisonOpWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_Height,
    ) == true
  ) {
    const strComparisonOpHeight: string =
      objDataGridStyleCond.dicFldComparisonOp[clsDataGridStyleEN.con_Height];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataGridStyleEN.con_Height,
      objDataGridStyleCond.height,
      strComparisonOpHeight,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_StyleTop,
    ) == true
  ) {
    const strComparisonOpStyleTop: string =
      objDataGridStyleCond.dicFldComparisonOp[clsDataGridStyleEN.con_StyleTop];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsDataGridStyleEN.con_StyleTop,
      objDataGridStyleCond.styleTop,
      strComparisonOpStyleTop,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_Style,
    ) == true
  ) {
    const strComparisonOpStyle: string =
      objDataGridStyleCond.dicFldComparisonOp[clsDataGridStyleEN.con_Style];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDataGridStyleEN.con_Style,
      objDataGridStyleCond.style,
      strComparisonOpStyle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDataGridStyleCond.dicFldComparisonOp,
      clsDataGridStyleEN.con_IsDefault,
    ) == true
  ) {
    if (objDataGridStyleCond.isDefault == true) {
      strWhereCond += Format(" And {0} = '1'", clsDataGridStyleEN.con_IsDefault);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsDataGridStyleEN.con_IsDefault);
    }
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDataGridStyleENS:源对象
 * @param objDataGridStyleENT:目标对象
 */
export function DataGridStyle_GetObjFromJsonObj(
  objDataGridStyleENS: clsDataGridStyleEN,
): clsDataGridStyleEN {
  const objDataGridStyleENT: clsDataGridStyleEN = new clsDataGridStyleEN();
  ObjectAssign(objDataGridStyleENT, objDataGridStyleENS);
  return objDataGridStyleENT;
}
