/**
 * 类名:clsViewDgInfoWApi
 * 表名:ViewDgInfo(00050012)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/15 18:20:29
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 视图Dg(ViewDgInfo)
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
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsViewDgInfoEN } from '@/ts/L0Entity/RegionManage/clsViewDgInfoEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const viewDgInfo_Controller = 'ViewDgInfoApi';
export const viewDgInfo_ConstructorName = 'viewDgInfo';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strViewDgID:关键字
 * @returns 对象
 **/
export async function ViewDgInfo_GetObjByViewDgIDAsync(
  strViewDgID: string,
): Promise<clsViewDgInfoEN | null> {
  const strThisFuncName = 'GetObjByViewDgIDAsync';

  if (IsNullOrEmpty(strViewDgID) == true) {
    const strMsg = Format(
      '参数:[strViewDgID]不能为空!(In clsViewDgInfoWApi.GetObjByViewDgIDAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByViewDgID';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewDgID,
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
      const objViewDgInfo = ViewDgInfo_GetObjFromJsonObj(returnObj);
      return objViewDgInfo;
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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
 * @param strViewDgID:所给的关键字
 * @returns 对象
 */
export async function ViewDgInfo_GetObjByViewDgIDCache(
  strViewDgID: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByViewDgIDCache';

  if (IsNullOrEmpty(strViewDgID) == true) {
    const strMsg = Format(
      '参数:[strViewDgID]不能为空!(In clsViewDgInfoWApi.GetObjByViewDgIDCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewDgInfoObjLstCache = await ViewDgInfo_GetObjLstCache();
  try {
    const arrViewDgInfoSel = arrViewDgInfoObjLstCache.filter((x) => x.viewDgID == strViewDgID);
    let objViewDgInfo: clsViewDgInfoEN;
    if (arrViewDgInfoSel.length > 0) {
      objViewDgInfo = arrViewDgInfoSel[0];
      return objViewDgInfo;
    } else {
      if (bolTryAsyncOnce == true) {
        const objViewDgInfoConst = await ViewDgInfo_GetObjByViewDgIDAsync(strViewDgID);
        if (objViewDgInfoConst != null) {
          ViewDgInfo_ReFreshThisCache();
          return objViewDgInfoConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewDgID,
      viewDgInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strViewDgID:所给的关键字
 * @returns 对象
 */
export async function ViewDgInfo_GetObjByViewDgIDlocalStorage(strViewDgID: string) {
  const strThisFuncName = 'GetObjByViewDgIDlocalStorage';

  if (IsNullOrEmpty(strViewDgID) == true) {
    const strMsg = Format(
      '参数:[strViewDgID]不能为空!(In clsViewDgInfoWApi.GetObjByViewDgIDlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsViewDgInfoEN._CurrTabName, strViewDgID);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objViewDgInfoCache: clsViewDgInfoEN = JSON.parse(strTempObj);
    return objViewDgInfoCache;
  }
  try {
    const objViewDgInfo = await ViewDgInfo_GetObjByViewDgIDAsync(strViewDgID);
    if (objViewDgInfo != null) {
      localStorage.setItem(strKey, JSON.stringify(objViewDgInfo));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objViewDgInfo;
    }
    return objViewDgInfo;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewDgID,
      viewDgInfo_ConstructorName,
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
 * @param objViewDgInfo:所给的对象
 * @returns 对象
 */
export async function ViewDgInfo_UpdateObjInLstCache(objViewDgInfo: clsViewDgInfoEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrViewDgInfoObjLstCache = await ViewDgInfo_GetObjLstCache();
    const obj = arrViewDgInfoObjLstCache.find(
      (x) => x.viewDgName == objViewDgInfo.viewDgName && x.viewId == objViewDgInfo.viewId,
    );
    if (obj != null) {
      objViewDgInfo.viewDgID = obj.viewDgID;
      ObjectAssign(obj, objViewDgInfo);
    } else {
      arrViewDgInfoObjLstCache.push(objViewDgInfo);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      viewDgInfo_ConstructorName,
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
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function ViewDgInfo_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsViewDgInfoEN.con_ViewDgID) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsViewDgInfoEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsViewDgInfoEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strViewDgID = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objViewDgInfo = await ViewDgInfo_GetObjByViewDgIDCache(strViewDgID);
  if (objViewDgInfo == null) return '';
  if (objViewDgInfo.GetFldValue(strOutFldName) == null) return '';
  return objViewDgInfo.GetFldValue(strOutFldName).toString();
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
export function ViewDgInfo_SortFunDefa(a: clsViewDgInfoEN, b: clsViewDgInfoEN): number {
  return a.viewDgID.localeCompare(b.viewDgID);
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
export function ViewDgInfo_SortFunDefa2Fld(a: clsViewDgInfoEN, b: clsViewDgInfoEN): number {
  if (a.viewDgName == b.viewDgName) return a.viewId.localeCompare(b.viewId);
  else return a.viewDgName.localeCompare(b.viewDgName);
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
export function ViewDgInfo_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewDgInfoEN.con_ViewDgID:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return a.viewDgID.localeCompare(b.viewDgID);
        };
      case clsViewDgInfoEN.con_ViewDgName:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return a.viewDgName.localeCompare(b.viewDgName);
        };
      case clsViewDgInfoEN.con_ViewId:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return a.viewId.localeCompare(b.viewId);
        };
      case clsViewDgInfoEN.con_SqlDsId:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          if (a.sqlDsId == null) return -1;
          if (b.sqlDsId == null) return 1;
          return a.sqlDsId.localeCompare(b.sqlDsId);
        };
      case clsViewDgInfoEN.con_DgStyleId:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return a.dgStyleId.localeCompare(b.dgStyleId);
        };
      case clsViewDgInfoEN.con_Style:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          if (a.style == null) return -1;
          if (b.style == null) return 1;
          return a.style.localeCompare(b.style);
        };
      case clsViewDgInfoEN.con_Runat:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          if (a.runat == null) return -1;
          if (b.runat == null) return 1;
          return a.runat.localeCompare(b.runat);
        };
      case clsViewDgInfoEN.con_FontSize:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          if (a.fontSize == null) return -1;
          if (b.fontSize == null) return 1;
          return a.fontSize.localeCompare(b.fontSize);
        };
      case clsViewDgInfoEN.con_FontName:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          if (a.fontName == null) return -1;
          if (b.fontName == null) return 1;
          return a.fontName.localeCompare(b.fontName);
        };
      case clsViewDgInfoEN.con_Width:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return a.width - b.width;
        };
      case clsViewDgInfoEN.con_Height:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return a.height - b.height;
        };
      case clsViewDgInfoEN.con_AllowPaging:
        return (a: clsViewDgInfoEN) => {
          if (a.allowPaging == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_PageSize:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return a.pageSize - b.pageSize;
        };
      case clsViewDgInfoEN.con_AutoGenerateColumns:
        return (a: clsViewDgInfoEN) => {
          if (a.autoGenerateColumns == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_AllowSorting:
        return (a: clsViewDgInfoEN) => {
          if (a.allowSorting == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_IsRadio:
        return (a: clsViewDgInfoEN) => {
          if (a.isRadio == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_IsCheck:
        return (a: clsViewDgInfoEN) => {
          if (a.isCheck == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_IsHaveUpdBtn:
        return (a: clsViewDgInfoEN) => {
          if (a.isHaveUpdBtn == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_IsHaveDelBtn:
        return (a: clsViewDgInfoEN) => {
          if (a.isHaveDelBtn == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_IsHaveDetailBtn:
        return (a: clsViewDgInfoEN) => {
          if (a.isHaveDetailBtn == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_IsJumpPage:
        return (a: clsViewDgInfoEN) => {
          if (a.isJumpPage == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_IsInTab:
        return (a: clsViewDgInfoEN) => {
          if (a.isInTab == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_StyleZindex:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return a.styleZindex - b.styleZindex;
        };
      case clsViewDgInfoEN.con_StyleLeft:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return a.styleLeft - b.styleLeft;
        };
      case clsViewDgInfoEN.con_StylePosition:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          if (a.stylePosition == null) return -1;
          if (b.stylePosition == null) return 1;
          return a.stylePosition.localeCompare(b.stylePosition);
        };
      case clsViewDgInfoEN.con_StyleTop:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return a.styleTop - b.styleTop;
        };
      case clsViewDgInfoEN.con_SqlDsTypeId:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return a.sqlDsTypeId.localeCompare(b.sqlDsTypeId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewDgInfo]中不存在!(in ${viewDgInfo_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewDgInfoEN.con_ViewDgID:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return b.viewDgID.localeCompare(a.viewDgID);
        };
      case clsViewDgInfoEN.con_ViewDgName:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return b.viewDgName.localeCompare(a.viewDgName);
        };
      case clsViewDgInfoEN.con_ViewId:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return b.viewId.localeCompare(a.viewId);
        };
      case clsViewDgInfoEN.con_SqlDsId:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          if (b.sqlDsId == null) return -1;
          if (a.sqlDsId == null) return 1;
          return b.sqlDsId.localeCompare(a.sqlDsId);
        };
      case clsViewDgInfoEN.con_DgStyleId:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return b.dgStyleId.localeCompare(a.dgStyleId);
        };
      case clsViewDgInfoEN.con_Style:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          if (b.style == null) return -1;
          if (a.style == null) return 1;
          return b.style.localeCompare(a.style);
        };
      case clsViewDgInfoEN.con_Runat:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          if (b.runat == null) return -1;
          if (a.runat == null) return 1;
          return b.runat.localeCompare(a.runat);
        };
      case clsViewDgInfoEN.con_FontSize:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          if (b.fontSize == null) return -1;
          if (a.fontSize == null) return 1;
          return b.fontSize.localeCompare(a.fontSize);
        };
      case clsViewDgInfoEN.con_FontName:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          if (b.fontName == null) return -1;
          if (a.fontName == null) return 1;
          return b.fontName.localeCompare(a.fontName);
        };
      case clsViewDgInfoEN.con_Width:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return b.width - a.width;
        };
      case clsViewDgInfoEN.con_Height:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return b.height - a.height;
        };
      case clsViewDgInfoEN.con_AllowPaging:
        return (b: clsViewDgInfoEN) => {
          if (b.allowPaging == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_PageSize:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return b.pageSize - a.pageSize;
        };
      case clsViewDgInfoEN.con_AutoGenerateColumns:
        return (b: clsViewDgInfoEN) => {
          if (b.autoGenerateColumns == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_AllowSorting:
        return (b: clsViewDgInfoEN) => {
          if (b.allowSorting == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_IsRadio:
        return (b: clsViewDgInfoEN) => {
          if (b.isRadio == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_IsCheck:
        return (b: clsViewDgInfoEN) => {
          if (b.isCheck == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_IsHaveUpdBtn:
        return (b: clsViewDgInfoEN) => {
          if (b.isHaveUpdBtn == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_IsHaveDelBtn:
        return (b: clsViewDgInfoEN) => {
          if (b.isHaveDelBtn == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_IsHaveDetailBtn:
        return (b: clsViewDgInfoEN) => {
          if (b.isHaveDetailBtn == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_IsJumpPage:
        return (b: clsViewDgInfoEN) => {
          if (b.isJumpPage == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_IsInTab:
        return (b: clsViewDgInfoEN) => {
          if (b.isInTab == true) return 1;
          else return -1;
        };
      case clsViewDgInfoEN.con_StyleZindex:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return b.styleZindex - a.styleZindex;
        };
      case clsViewDgInfoEN.con_StyleLeft:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return b.styleLeft - a.styleLeft;
        };
      case clsViewDgInfoEN.con_StylePosition:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          if (b.stylePosition == null) return -1;
          if (a.stylePosition == null) return 1;
          return b.stylePosition.localeCompare(a.stylePosition);
        };
      case clsViewDgInfoEN.con_StyleTop:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return b.styleTop - a.styleTop;
        };
      case clsViewDgInfoEN.con_SqlDsTypeId:
        return (a: clsViewDgInfoEN, b: clsViewDgInfoEN) => {
          return b.sqlDsTypeId.localeCompare(a.sqlDsTypeId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewDgInfo]中不存在!(in ${viewDgInfo_ConstructorName}.${strThisFuncName})`;
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
export async function ViewDgInfo_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewDgInfoEN.con_ViewDgID:
      return (obj: clsViewDgInfoEN) => {
        return obj.viewDgID === value;
      };
    case clsViewDgInfoEN.con_ViewDgName:
      return (obj: clsViewDgInfoEN) => {
        return obj.viewDgName === value;
      };
    case clsViewDgInfoEN.con_ViewId:
      return (obj: clsViewDgInfoEN) => {
        return obj.viewId === value;
      };
    case clsViewDgInfoEN.con_SqlDsId:
      return (obj: clsViewDgInfoEN) => {
        return obj.sqlDsId === value;
      };
    case clsViewDgInfoEN.con_DgStyleId:
      return (obj: clsViewDgInfoEN) => {
        return obj.dgStyleId === value;
      };
    case clsViewDgInfoEN.con_Style:
      return (obj: clsViewDgInfoEN) => {
        return obj.style === value;
      };
    case clsViewDgInfoEN.con_Runat:
      return (obj: clsViewDgInfoEN) => {
        return obj.runat === value;
      };
    case clsViewDgInfoEN.con_FontSize:
      return (obj: clsViewDgInfoEN) => {
        return obj.fontSize === value;
      };
    case clsViewDgInfoEN.con_FontName:
      return (obj: clsViewDgInfoEN) => {
        return obj.fontName === value;
      };
    case clsViewDgInfoEN.con_Width:
      return (obj: clsViewDgInfoEN) => {
        return obj.width === value;
      };
    case clsViewDgInfoEN.con_Height:
      return (obj: clsViewDgInfoEN) => {
        return obj.height === value;
      };
    case clsViewDgInfoEN.con_AllowPaging:
      return (obj: clsViewDgInfoEN) => {
        return obj.allowPaging === value;
      };
    case clsViewDgInfoEN.con_PageSize:
      return (obj: clsViewDgInfoEN) => {
        return obj.pageSize === value;
      };
    case clsViewDgInfoEN.con_AutoGenerateColumns:
      return (obj: clsViewDgInfoEN) => {
        return obj.autoGenerateColumns === value;
      };
    case clsViewDgInfoEN.con_AllowSorting:
      return (obj: clsViewDgInfoEN) => {
        return obj.allowSorting === value;
      };
    case clsViewDgInfoEN.con_IsRadio:
      return (obj: clsViewDgInfoEN) => {
        return obj.isRadio === value;
      };
    case clsViewDgInfoEN.con_IsCheck:
      return (obj: clsViewDgInfoEN) => {
        return obj.isCheck === value;
      };
    case clsViewDgInfoEN.con_IsHaveUpdBtn:
      return (obj: clsViewDgInfoEN) => {
        return obj.isHaveUpdBtn === value;
      };
    case clsViewDgInfoEN.con_IsHaveDelBtn:
      return (obj: clsViewDgInfoEN) => {
        return obj.isHaveDelBtn === value;
      };
    case clsViewDgInfoEN.con_IsHaveDetailBtn:
      return (obj: clsViewDgInfoEN) => {
        return obj.isHaveDetailBtn === value;
      };
    case clsViewDgInfoEN.con_IsJumpPage:
      return (obj: clsViewDgInfoEN) => {
        return obj.isJumpPage === value;
      };
    case clsViewDgInfoEN.con_IsInTab:
      return (obj: clsViewDgInfoEN) => {
        return obj.isInTab === value;
      };
    case clsViewDgInfoEN.con_StyleZindex:
      return (obj: clsViewDgInfoEN) => {
        return obj.styleZindex === value;
      };
    case clsViewDgInfoEN.con_StyleLeft:
      return (obj: clsViewDgInfoEN) => {
        return obj.styleLeft === value;
      };
    case clsViewDgInfoEN.con_StylePosition:
      return (obj: clsViewDgInfoEN) => {
        return obj.stylePosition === value;
      };
    case clsViewDgInfoEN.con_StyleTop:
      return (obj: clsViewDgInfoEN) => {
        return obj.styleTop === value;
      };
    case clsViewDgInfoEN.con_SqlDsTypeId:
      return (obj: clsViewDgInfoEN) => {
        return obj.sqlDsTypeId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewDgInfo]中不存在!(in ${viewDgInfo_ConstructorName}.${strThisFuncName})`;
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
export async function ViewDgInfo_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsViewDgInfoEN.con_ViewDgID) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrViewDgInfo = await ViewDgInfo_GetObjLstCache();
  if (arrViewDgInfo == null) return [];
  let arrViewDgInfoSel = arrViewDgInfo;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrViewDgInfoSel = arrViewDgInfoSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrViewDgInfoSel = arrViewDgInfoSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrViewDgInfoSel = arrViewDgInfoSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrViewDgInfoSel = arrViewDgInfoSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrViewDgInfoSel = arrViewDgInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrViewDgInfoSel = arrViewDgInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrViewDgInfoSel = arrViewDgInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrViewDgInfoSel = arrViewDgInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrViewDgInfoSel = arrViewDgInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrViewDgInfoSel = arrViewDgInfoSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrViewDgInfoSel.length == 0) return [];
  return arrViewDgInfoSel.map((x) => x.viewDgID);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewDgInfo_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
export async function ViewDgInfo_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
export async function ViewDgInfo_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewDgInfoEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

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
      const objViewDgInfo = ViewDgInfo_GetObjFromJsonObj(returnObj);
      return objViewDgInfo;
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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
export async function ViewDgInfo_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewDgInfoEN._CurrTabName;
  if (IsNullOrEmpty(clsViewDgInfoEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewDgInfoEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrViewDgInfoExObjLstCache: Array<clsViewDgInfoEN> = CacheHelper.Get(strKey);
    const arrViewDgInfoObjLstT = ViewDgInfo_GetObjLstByJSONObjLst(arrViewDgInfoExObjLstCache);
    return arrViewDgInfoObjLstT;
  }
  try {
    const arrViewDgInfoExObjLst = await ViewDgInfo_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrViewDgInfoExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewDgInfoExObjLst.length,
    );
    console.log(strInfo);
    return arrViewDgInfoExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewDgInfo_ConstructorName,
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
export async function ViewDgInfo_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewDgInfoEN._CurrTabName;
  if (IsNullOrEmpty(clsViewDgInfoEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewDgInfoEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewDgInfoExObjLstCache: Array<clsViewDgInfoEN> = JSON.parse(strTempObjLst);
    const arrViewDgInfoObjLstT = ViewDgInfo_GetObjLstByJSONObjLst(arrViewDgInfoExObjLstCache);
    return arrViewDgInfoObjLstT;
  }
  try {
    const arrViewDgInfoExObjLst = await ViewDgInfo_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrViewDgInfoExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewDgInfoExObjLst.length,
    );
    console.log(strInfo);
    return arrViewDgInfoExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewDgInfo_ConstructorName,
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
export async function ViewDgInfo_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsViewDgInfoEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewDgInfoObjLstCache: Array<clsViewDgInfoEN> = JSON.parse(strTempObjLst);
    return arrViewDgInfoObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ViewDgInfo_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewDgInfoEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

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
          viewDgInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewDgInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
export async function ViewDgInfo_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsViewDgInfoEN._CurrTabName;
  if (IsNullOrEmpty(clsViewDgInfoEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewDgInfoEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewDgInfoExObjLstCache: Array<clsViewDgInfoEN> = JSON.parse(strTempObjLst);
    const arrViewDgInfoObjLstT = ViewDgInfo_GetObjLstByJSONObjLst(arrViewDgInfoExObjLstCache);
    return arrViewDgInfoObjLstT;
  }
  try {
    const arrViewDgInfoExObjLst = await ViewDgInfo_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrViewDgInfoExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewDgInfoExObjLst.length,
    );
    console.log(strInfo);
    return arrViewDgInfoExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewDgInfo_ConstructorName,
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
export async function ViewDgInfo_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsViewDgInfoEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewDgInfoObjLstCache: Array<clsViewDgInfoEN> = JSON.parse(strTempObjLst);
    return arrViewDgInfoObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewDgInfo_GetObjLstCache(): Promise<Array<clsViewDgInfoEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrViewDgInfoObjLstCache;
  switch (clsViewDgInfoEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewDgInfoObjLstCache = await ViewDgInfo_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrViewDgInfoObjLstCache = await ViewDgInfo_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrViewDgInfoObjLstCache = await ViewDgInfo_GetObjLstClientCache();
      break;
    default:
      arrViewDgInfoObjLstCache = await ViewDgInfo_GetObjLstClientCache();
      break;
  }
  return arrViewDgInfoObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewDgInfo_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrViewDgInfoObjLstCache;
  switch (clsViewDgInfoEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewDgInfoObjLstCache = await ViewDgInfo_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrViewDgInfoObjLstCache = await ViewDgInfo_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrViewDgInfoObjLstCache = null;
      break;
    default:
      arrViewDgInfoObjLstCache = null;
      break;
  }
  return arrViewDgInfoObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrViewDgIDCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewDgInfo_GetSubObjLstCache(objViewDgInfoCond: clsViewDgInfoEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrViewDgInfoObjLstCache = await ViewDgInfo_GetObjLstCache();
  let arrViewDgInfoSel = arrViewDgInfoObjLstCache;
  if (objViewDgInfoCond.sfFldComparisonOp == null || objViewDgInfoCond.sfFldComparisonOp == '')
    return arrViewDgInfoSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewDgInfoCond.sfFldComparisonOp,
  );
  //console.log("clsViewDgInfoWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewDgInfoCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewDgInfoCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrViewDgInfoSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewDgInfoCond),
      viewDgInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewDgInfoEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewDgID:关键字列表
 * @returns 对象列表
 **/
export async function ViewDgInfo_GetObjLstByViewDgIDLstAsync(
  arrViewDgID: Array<string>,
): Promise<Array<clsViewDgInfoEN>> {
  const strThisFuncName = 'GetObjLstByViewDgIDLstAsync';
  const strAction = 'GetObjLstByViewDgIDLst';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewDgID, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          viewDgInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewDgInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
 * @param arrstrViewDgIDLst:关键字列表
 * @returns 对象列表
 */
export async function ViewDgInfo_GetObjLstByViewDgIDLstCache(arrViewDgIDLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByViewDgIDLstCache';
  try {
    const arrViewDgInfoObjLstCache = await ViewDgInfo_GetObjLstCache();
    const arrViewDgInfoSel = arrViewDgInfoObjLstCache.filter(
      (x) => arrViewDgIDLst.indexOf(x.viewDgID) > -1,
    );
    return arrViewDgInfoSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewDgIDLst.join(','),
      viewDgInfo_ConstructorName,
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
export async function ViewDgInfo_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewDgInfoEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

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
          viewDgInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewDgInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
export async function ViewDgInfo_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewDgInfoEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

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
          viewDgInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewDgInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
export async function ViewDgInfo_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewDgInfoEN>();
  const arrViewDgInfoObjLstCache = await ViewDgInfo_GetObjLstCache();
  if (arrViewDgInfoObjLstCache.length == 0) return arrViewDgInfoObjLstCache;
  let arrViewDgInfoSel = arrViewDgInfoObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objViewDgInfoCond = new clsViewDgInfoEN();
  ObjectAssign(objViewDgInfoCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsViewDgInfoWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewDgInfoCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewDgInfoSel.length == 0) return arrViewDgInfoSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewDgInfoSel = arrViewDgInfoSel.sort(ViewDgInfo_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewDgInfoSel = arrViewDgInfoSel.sort(objPagerPara.sortFun);
    }
    arrViewDgInfoSel = arrViewDgInfoSel.slice(intStart, intEnd);
    return arrViewDgInfoSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewDgInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewDgInfoEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ViewDgInfo_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewDgInfoEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewDgInfoEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

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
          viewDgInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewDgInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
 * @param strViewDgID:关键字
 * @returns 获取删除的结果
 **/
export async function ViewDgInfo_DelRecordAsync(strViewDgID: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strViewDgID);

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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
 * @param arrViewDgID:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ViewDgInfo_DelViewDgInfosAsync(arrViewDgID: Array<string>): Promise<number> {
  const strThisFuncName = 'DelViewDgInfosAsync';
  const strAction = 'DelViewDgInfos';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewDgID, config);
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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
export async function ViewDgInfo_DelViewDgInfosByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelViewDgInfosByCondAsync';
  const strAction = 'DelViewDgInfosByCond';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
 * @param objViewDgInfoEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewDgInfo_AddNewRecordAsync(
  objViewDgInfoEN: clsViewDgInfoEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objViewDgInfoEN.viewDgID === null || objViewDgInfoEN.viewDgID === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objViewDgInfoEN);
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewDgInfoEN, config);
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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
 * @param objViewDgInfoEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewDgInfo_AddNewRecordWithMaxIdAsync(
  objViewDgInfoEN: clsViewDgInfoEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewDgInfoEN, config);
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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
 * @param objViewDgInfoEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewDgInfo_AddNewRecordWithReturnKeyAsync(
  objViewDgInfoEN: clsViewDgInfoEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewDgInfoEN, config);
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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
 * @param objViewDgInfoEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewDgInfo_UpdateRecordAsync(
  objViewDgInfoEN: clsViewDgInfoEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewDgInfoEN.sfUpdFldSetStr === undefined ||
    objViewDgInfoEN.sfUpdFldSetStr === null ||
    objViewDgInfoEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewDgInfoEN.viewDgID,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewDgInfoEN, config);
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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
 * @param objViewDgInfoEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewDgInfo_UpdateWithConditionAsync(
  objViewDgInfoEN: clsViewDgInfoEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewDgInfoEN.sfUpdFldSetStr === undefined ||
    objViewDgInfoEN.sfUpdFldSetStr === null ||
    objViewDgInfoEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewDgInfoEN.viewDgID,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);
  objViewDgInfoEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewDgInfoEN, config);
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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
 * @param objstrViewDgIDCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewDgInfo_IsExistRecordCache(objViewDgInfoCond: clsViewDgInfoEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrViewDgInfoObjLstCache = await ViewDgInfo_GetObjLstCache();
  if (arrViewDgInfoObjLstCache == null) return false;
  let arrViewDgInfoSel = arrViewDgInfoObjLstCache;
  if (objViewDgInfoCond.sfFldComparisonOp == null || objViewDgInfoCond.sfFldComparisonOp == '')
    return arrViewDgInfoSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewDgInfoCond.sfFldComparisonOp,
  );
  //console.log("clsViewDgInfoWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewDgInfoCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewDgInfoCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewDgInfoSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objViewDgInfoCond),
      viewDgInfo_ConstructorName,
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
export async function ViewDgInfo_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
 * @param strViewDgID:所给的关键字
 * @returns 对象
 */
export async function ViewDgInfo_IsExistCache(strViewDgID: string) {
  const strThisFuncName = 'IsExistCache';
  const arrViewDgInfoObjLstCache = await ViewDgInfo_GetObjLstCache();
  if (arrViewDgInfoObjLstCache == null) return false;
  try {
    const arrViewDgInfoSel = arrViewDgInfoObjLstCache.filter((x) => x.viewDgID == strViewDgID);
    if (arrViewDgInfoSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strViewDgID,
      viewDgInfo_ConstructorName,
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
 * @param strViewDgID:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ViewDgInfo_IsExistAsync(strViewDgID: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewDgID,
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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
export async function ViewDgInfo_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
 * @param objViewDgInfoCond:条件对象
 * @returns 对象列表记录数
 */
export async function ViewDgInfo_GetRecCountByCondCache(objViewDgInfoCond: clsViewDgInfoEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrViewDgInfoObjLstCache = await ViewDgInfo_GetObjLstCache();
  if (arrViewDgInfoObjLstCache == null) return 0;
  let arrViewDgInfoSel = arrViewDgInfoObjLstCache;
  if (objViewDgInfoCond.sfFldComparisonOp == null || objViewDgInfoCond.sfFldComparisonOp == '')
    return arrViewDgInfoSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objViewDgInfoCond.sfFldComparisonOp,
  );
  //console.log("clsViewDgInfoWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objViewDgInfoCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objViewDgInfoCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewDgInfoSel = arrViewDgInfoSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewDgInfoSel = arrViewDgInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrViewDgInfoSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewDgInfoCond),
      viewDgInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefixAsync)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 **/
export async function ViewDgInfo_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdByPrefixAsync';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function ViewDgInfo_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewDgInfo_Controller, strAction);

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
        viewDgInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewDgInfo_ConstructorName,
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
export function ViewDgInfo_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewDgInfo_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsViewDgInfoEN._CurrTabName;
  switch (clsViewDgInfoEN.CacheModeId) {
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
export function ViewDgInfo_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsViewDgInfoEN._CurrTabName;
    switch (clsViewDgInfoEN.CacheModeId) {
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
export function ViewDgInfo_CheckPropertyNew(pobjViewDgInfoEN: clsViewDgInfoEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjViewDgInfoEN.viewDgName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[界面Dg名称]不能为空(In 视图Dg)!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.viewId) === true ||
    pobjViewDgInfoEN.viewId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[界面Id]不能为空(In 视图Dg)!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.dgStyleId) === true ||
    pobjViewDgInfoEN.dgStyleId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[DG模式ID]不能为空(In 视图Dg)!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewDgInfoEN.allowPaging ||
    (pobjViewDgInfoEN.allowPaging != null && pobjViewDgInfoEN.allowPaging.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[允许分页]不能为空(In 视图Dg)!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewDgInfoEN.autoGenerateColumns ||
    (pobjViewDgInfoEN.autoGenerateColumns != null &&
      pobjViewDgInfoEN.autoGenerateColumns.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[自动生成列]不能为空(In 视图Dg)!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjViewDgInfoEN.allowSorting ||
    (pobjViewDgInfoEN.allowSorting != null && pobjViewDgInfoEN.allowSorting.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[允许排序]不能为空(In 视图Dg)!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.sqlDsTypeId) === true ||
    pobjViewDgInfoEN.sqlDsTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[数据源类型Id]不能为空(In 视图Dg)!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.viewDgID) == false &&
    GetStrLen(pobjViewDgInfoEN.viewDgID) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[界面DgId(viewDgID)]的长度不能超过10(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.viewDgID)(clsViewDgInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.viewDgName) == false &&
    GetStrLen(pobjViewDgInfoEN.viewDgName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[界面Dg名称(viewDgName)]的长度不能超过100(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.viewDgName)(clsViewDgInfoBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjViewDgInfoEN.viewId) == false && GetStrLen(pobjViewDgInfoEN.viewId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[界面Id(viewId)]的长度不能超过8(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.viewId)(clsViewDgInfoBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjViewDgInfoEN.sqlDsId) == false && GetStrLen(pobjViewDgInfoEN.sqlDsId) > 8) {
    throw new Error(
      '(errid:Watl000413)字段[数据源表/视图Id(sqlDsId)]的长度不能超过8(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.sqlDsId)(clsViewDgInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.dgStyleId) == false &&
    GetStrLen(pobjViewDgInfoEN.dgStyleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[DG模式ID(dgStyleId)]的长度不能超过4(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.dgStyleId)(clsViewDgInfoBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjViewDgInfoEN.style) == false && GetStrLen(pobjViewDgInfoEN.style) > 800) {
    throw new Error(
      '(errid:Watl000413)字段[类型(style)]的长度不能超过800(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.style)(clsViewDgInfoBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjViewDgInfoEN.runat) == false && GetStrLen(pobjViewDgInfoEN.runat) > 30) {
    throw new Error(
      '(errid:Watl000413)字段[运行在(runat)]的长度不能超过30(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.runat)(clsViewDgInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.fontSize) == false &&
    GetStrLen(pobjViewDgInfoEN.fontSize) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字号(fontSize)]的长度不能超过20(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.fontSize)(clsViewDgInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.fontName) == false &&
    GetStrLen(pobjViewDgInfoEN.fontName) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[字体(fontName)]的长度不能超过20(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.fontName)(clsViewDgInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.stylePosition) == false &&
    GetStrLen(pobjViewDgInfoEN.stylePosition) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[Style_Position(stylePosition)]的长度不能超过20(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.stylePosition)(clsViewDgInfoBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.sqlDsTypeId) == false &&
    GetStrLen(pobjViewDgInfoEN.sqlDsTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[数据源类型Id(sqlDsTypeId)]的长度不能超过2(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.sqlDsTypeId)(clsViewDgInfoBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.viewDgID) == false &&
    undefined !== pobjViewDgInfoEN.viewDgID &&
    tzDataType.isString(pobjViewDgInfoEN.viewDgID) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[界面DgId(viewDgID)]的值:[$(pobjViewDgInfoEN.viewDgID)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.viewDgName) == false &&
    undefined !== pobjViewDgInfoEN.viewDgName &&
    tzDataType.isString(pobjViewDgInfoEN.viewDgName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[界面Dg名称(viewDgName)]的值:[$(pobjViewDgInfoEN.viewDgName)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.viewId) == false &&
    undefined !== pobjViewDgInfoEN.viewId &&
    tzDataType.isString(pobjViewDgInfoEN.viewId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[界面Id(viewId)]的值:[$(pobjViewDgInfoEN.viewId)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.sqlDsId) == false &&
    undefined !== pobjViewDgInfoEN.sqlDsId &&
    tzDataType.isString(pobjViewDgInfoEN.sqlDsId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据源表/视图Id(sqlDsId)]的值:[$(pobjViewDgInfoEN.sqlDsId)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.dgStyleId) == false &&
    undefined !== pobjViewDgInfoEN.dgStyleId &&
    tzDataType.isString(pobjViewDgInfoEN.dgStyleId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[DG模式ID(dgStyleId)]的值:[$(pobjViewDgInfoEN.dgStyleId)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.style) == false &&
    undefined !== pobjViewDgInfoEN.style &&
    tzDataType.isString(pobjViewDgInfoEN.style) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类型(style)]的值:[$(pobjViewDgInfoEN.style)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.runat) == false &&
    undefined !== pobjViewDgInfoEN.runat &&
    tzDataType.isString(pobjViewDgInfoEN.runat) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[运行在(runat)]的值:[$(pobjViewDgInfoEN.runat)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.fontSize) == false &&
    undefined !== pobjViewDgInfoEN.fontSize &&
    tzDataType.isString(pobjViewDgInfoEN.fontSize) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字号(fontSize)]的值:[$(pobjViewDgInfoEN.fontSize)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.fontName) == false &&
    undefined !== pobjViewDgInfoEN.fontName &&
    tzDataType.isString(pobjViewDgInfoEN.fontName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[字体(fontName)]的值:[$(pobjViewDgInfoEN.fontName)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.width &&
    undefined !== pobjViewDgInfoEN.width &&
    tzDataType.isNumber(pobjViewDgInfoEN.width) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[宽(width)]的值:[$(pobjViewDgInfoEN.width)], 非法,应该为数值型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.height &&
    undefined !== pobjViewDgInfoEN.height &&
    tzDataType.isNumber(pobjViewDgInfoEN.height) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[高度(height)]的值:[$(pobjViewDgInfoEN.height)], 非法,应该为数值型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.allowPaging &&
    undefined !== pobjViewDgInfoEN.allowPaging &&
    tzDataType.isBoolean(pobjViewDgInfoEN.allowPaging) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[允许分页(allowPaging)]的值:[$(pobjViewDgInfoEN.allowPaging)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.pageSize &&
    undefined !== pobjViewDgInfoEN.pageSize &&
    tzDataType.isNumber(pobjViewDgInfoEN.pageSize) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[页大小(pageSize)]的值:[$(pobjViewDgInfoEN.pageSize)], 非法,应该为数值型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.autoGenerateColumns &&
    undefined !== pobjViewDgInfoEN.autoGenerateColumns &&
    tzDataType.isBoolean(pobjViewDgInfoEN.autoGenerateColumns) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[自动生成列(autoGenerateColumns)]的值:[$(pobjViewDgInfoEN.autoGenerateColumns)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.allowSorting &&
    undefined !== pobjViewDgInfoEN.allowSorting &&
    tzDataType.isBoolean(pobjViewDgInfoEN.allowSorting) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[允许排序(allowSorting)]的值:[$(pobjViewDgInfoEN.allowSorting)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.isRadio &&
    undefined !== pobjViewDgInfoEN.isRadio &&
    tzDataType.isBoolean(pobjViewDgInfoEN.isRadio) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否单选框(isRadio)]的值:[$(pobjViewDgInfoEN.isRadio)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.isCheck &&
    undefined !== pobjViewDgInfoEN.isCheck &&
    tzDataType.isBoolean(pobjViewDgInfoEN.isCheck) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否复选框(isCheck)]的值:[$(pobjViewDgInfoEN.isCheck)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.isHaveUpdBtn &&
    undefined !== pobjViewDgInfoEN.isHaveUpdBtn &&
    tzDataType.isBoolean(pobjViewDgInfoEN.isHaveUpdBtn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有修改按钮(isHaveUpdBtn)]的值:[$(pobjViewDgInfoEN.isHaveUpdBtn)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.isHaveDelBtn &&
    undefined !== pobjViewDgInfoEN.isHaveDelBtn &&
    tzDataType.isBoolean(pobjViewDgInfoEN.isHaveDelBtn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有删除按钮(isHaveDelBtn)]的值:[$(pobjViewDgInfoEN.isHaveDelBtn)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.isHaveDetailBtn &&
    undefined !== pobjViewDgInfoEN.isHaveDetailBtn &&
    tzDataType.isBoolean(pobjViewDgInfoEN.isHaveDetailBtn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否有详细按钮(isHaveDetailBtn)]的值:[$(pobjViewDgInfoEN.isHaveDetailBtn)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.isJumpPage &&
    undefined !== pobjViewDgInfoEN.isJumpPage &&
    tzDataType.isBoolean(pobjViewDgInfoEN.isJumpPage) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否跳页(isJumpPage)]的值:[$(pobjViewDgInfoEN.isJumpPage)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.isInTab &&
    undefined !== pobjViewDgInfoEN.isInTab &&
    tzDataType.isBoolean(pobjViewDgInfoEN.isInTab) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否生成DG在表中(isInTab)]的值:[$(pobjViewDgInfoEN.isInTab)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.styleZindex &&
    undefined !== pobjViewDgInfoEN.styleZindex &&
    tzDataType.isNumber(pobjViewDgInfoEN.styleZindex) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Zindex(styleZindex)]的值:[$(pobjViewDgInfoEN.styleZindex)], 非法,应该为数值型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.styleLeft &&
    undefined !== pobjViewDgInfoEN.styleLeft &&
    tzDataType.isNumber(pobjViewDgInfoEN.styleLeft) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Left(styleLeft)]的值:[$(pobjViewDgInfoEN.styleLeft)], 非法,应该为数值型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.stylePosition) == false &&
    undefined !== pobjViewDgInfoEN.stylePosition &&
    tzDataType.isString(pobjViewDgInfoEN.stylePosition) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Position(stylePosition)]的值:[$(pobjViewDgInfoEN.stylePosition)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjViewDgInfoEN.styleTop &&
    undefined !== pobjViewDgInfoEN.styleTop &&
    tzDataType.isNumber(pobjViewDgInfoEN.styleTop) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[Style_Top(styleTop)]的值:[$(pobjViewDgInfoEN.styleTop)], 非法,应该为数值型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.sqlDsTypeId) == false &&
    undefined !== pobjViewDgInfoEN.sqlDsTypeId &&
    tzDataType.isString(pobjViewDgInfoEN.sqlDsTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[数据源类型Id(sqlDsTypeId)]的值:[$(pobjViewDgInfoEN.sqlDsTypeId)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.viewId) == false &&
    pobjViewDgInfoEN.viewId != '[nuull]' &&
    GetStrLen(pobjViewDgInfoEN.viewId) != 8
  ) {
    throw '(errid:Watl000415)字段[界面Id]作为外键字段,长度应该为8(In 视图Dg)!(clsViewDgInfoBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewDgInfo_CheckProperty4Update(pobjViewDgInfoEN: clsViewDgInfoEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.viewDgID) == false &&
    GetStrLen(pobjViewDgInfoEN.viewDgID) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[界面DgId(viewDgID)]的长度不能超过10(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.viewDgID)(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.viewDgName) == false &&
    GetStrLen(pobjViewDgInfoEN.viewDgName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[界面Dg名称(viewDgName)]的长度不能超过100(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.viewDgName)(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjViewDgInfoEN.viewId) == false && GetStrLen(pobjViewDgInfoEN.viewId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[界面Id(viewId)]的长度不能超过8(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.viewId)(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjViewDgInfoEN.sqlDsId) == false && GetStrLen(pobjViewDgInfoEN.sqlDsId) > 8) {
    throw new Error(
      '(errid:Watl000416)字段[数据源表/视图Id(sqlDsId)]的长度不能超过8(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.sqlDsId)(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.dgStyleId) == false &&
    GetStrLen(pobjViewDgInfoEN.dgStyleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[DG模式ID(dgStyleId)]的长度不能超过4(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.dgStyleId)(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjViewDgInfoEN.style) == false && GetStrLen(pobjViewDgInfoEN.style) > 800) {
    throw new Error(
      '(errid:Watl000416)字段[类型(style)]的长度不能超过800(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.style)(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjViewDgInfoEN.runat) == false && GetStrLen(pobjViewDgInfoEN.runat) > 30) {
    throw new Error(
      '(errid:Watl000416)字段[运行在(runat)]的长度不能超过30(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.runat)(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.fontSize) == false &&
    GetStrLen(pobjViewDgInfoEN.fontSize) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字号(fontSize)]的长度不能超过20(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.fontSize)(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.fontName) == false &&
    GetStrLen(pobjViewDgInfoEN.fontName) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[字体(fontName)]的长度不能超过20(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.fontName)(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.stylePosition) == false &&
    GetStrLen(pobjViewDgInfoEN.stylePosition) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[Style_Position(stylePosition)]的长度不能超过20(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.stylePosition)(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.sqlDsTypeId) == false &&
    GetStrLen(pobjViewDgInfoEN.sqlDsTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[数据源类型Id(sqlDsTypeId)]的长度不能超过2(In 视图Dg(ViewDgInfo))!值:$(pobjViewDgInfoEN.sqlDsTypeId)(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.viewDgID) == false &&
    undefined !== pobjViewDgInfoEN.viewDgID &&
    tzDataType.isString(pobjViewDgInfoEN.viewDgID) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[界面DgId(viewDgID)]的值:[$(pobjViewDgInfoEN.viewDgID)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.viewDgName) == false &&
    undefined !== pobjViewDgInfoEN.viewDgName &&
    tzDataType.isString(pobjViewDgInfoEN.viewDgName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[界面Dg名称(viewDgName)]的值:[$(pobjViewDgInfoEN.viewDgName)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.viewId) == false &&
    undefined !== pobjViewDgInfoEN.viewId &&
    tzDataType.isString(pobjViewDgInfoEN.viewId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[界面Id(viewId)]的值:[$(pobjViewDgInfoEN.viewId)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.sqlDsId) == false &&
    undefined !== pobjViewDgInfoEN.sqlDsId &&
    tzDataType.isString(pobjViewDgInfoEN.sqlDsId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据源表/视图Id(sqlDsId)]的值:[$(pobjViewDgInfoEN.sqlDsId)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.dgStyleId) == false &&
    undefined !== pobjViewDgInfoEN.dgStyleId &&
    tzDataType.isString(pobjViewDgInfoEN.dgStyleId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[DG模式ID(dgStyleId)]的值:[$(pobjViewDgInfoEN.dgStyleId)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.style) == false &&
    undefined !== pobjViewDgInfoEN.style &&
    tzDataType.isString(pobjViewDgInfoEN.style) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类型(style)]的值:[$(pobjViewDgInfoEN.style)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.runat) == false &&
    undefined !== pobjViewDgInfoEN.runat &&
    tzDataType.isString(pobjViewDgInfoEN.runat) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[运行在(runat)]的值:[$(pobjViewDgInfoEN.runat)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.fontSize) == false &&
    undefined !== pobjViewDgInfoEN.fontSize &&
    tzDataType.isString(pobjViewDgInfoEN.fontSize) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字号(fontSize)]的值:[$(pobjViewDgInfoEN.fontSize)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.fontName) == false &&
    undefined !== pobjViewDgInfoEN.fontName &&
    tzDataType.isString(pobjViewDgInfoEN.fontName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[字体(fontName)]的值:[$(pobjViewDgInfoEN.fontName)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.width &&
    undefined !== pobjViewDgInfoEN.width &&
    tzDataType.isNumber(pobjViewDgInfoEN.width) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[宽(width)]的值:[$(pobjViewDgInfoEN.width)], 非法,应该为数值型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.height &&
    undefined !== pobjViewDgInfoEN.height &&
    tzDataType.isNumber(pobjViewDgInfoEN.height) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[高度(height)]的值:[$(pobjViewDgInfoEN.height)], 非法,应该为数值型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.allowPaging &&
    undefined !== pobjViewDgInfoEN.allowPaging &&
    tzDataType.isBoolean(pobjViewDgInfoEN.allowPaging) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[允许分页(allowPaging)]的值:[$(pobjViewDgInfoEN.allowPaging)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.pageSize &&
    undefined !== pobjViewDgInfoEN.pageSize &&
    tzDataType.isNumber(pobjViewDgInfoEN.pageSize) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[页大小(pageSize)]的值:[$(pobjViewDgInfoEN.pageSize)], 非法,应该为数值型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.autoGenerateColumns &&
    undefined !== pobjViewDgInfoEN.autoGenerateColumns &&
    tzDataType.isBoolean(pobjViewDgInfoEN.autoGenerateColumns) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[自动生成列(autoGenerateColumns)]的值:[$(pobjViewDgInfoEN.autoGenerateColumns)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.allowSorting &&
    undefined !== pobjViewDgInfoEN.allowSorting &&
    tzDataType.isBoolean(pobjViewDgInfoEN.allowSorting) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[允许排序(allowSorting)]的值:[$(pobjViewDgInfoEN.allowSorting)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.isRadio &&
    undefined !== pobjViewDgInfoEN.isRadio &&
    tzDataType.isBoolean(pobjViewDgInfoEN.isRadio) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否单选框(isRadio)]的值:[$(pobjViewDgInfoEN.isRadio)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.isCheck &&
    undefined !== pobjViewDgInfoEN.isCheck &&
    tzDataType.isBoolean(pobjViewDgInfoEN.isCheck) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否复选框(isCheck)]的值:[$(pobjViewDgInfoEN.isCheck)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.isHaveUpdBtn &&
    undefined !== pobjViewDgInfoEN.isHaveUpdBtn &&
    tzDataType.isBoolean(pobjViewDgInfoEN.isHaveUpdBtn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有修改按钮(isHaveUpdBtn)]的值:[$(pobjViewDgInfoEN.isHaveUpdBtn)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.isHaveDelBtn &&
    undefined !== pobjViewDgInfoEN.isHaveDelBtn &&
    tzDataType.isBoolean(pobjViewDgInfoEN.isHaveDelBtn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有删除按钮(isHaveDelBtn)]的值:[$(pobjViewDgInfoEN.isHaveDelBtn)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.isHaveDetailBtn &&
    undefined !== pobjViewDgInfoEN.isHaveDetailBtn &&
    tzDataType.isBoolean(pobjViewDgInfoEN.isHaveDetailBtn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否有详细按钮(isHaveDetailBtn)]的值:[$(pobjViewDgInfoEN.isHaveDetailBtn)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.isJumpPage &&
    undefined !== pobjViewDgInfoEN.isJumpPage &&
    tzDataType.isBoolean(pobjViewDgInfoEN.isJumpPage) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否跳页(isJumpPage)]的值:[$(pobjViewDgInfoEN.isJumpPage)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.isInTab &&
    undefined !== pobjViewDgInfoEN.isInTab &&
    tzDataType.isBoolean(pobjViewDgInfoEN.isInTab) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否生成DG在表中(isInTab)]的值:[$(pobjViewDgInfoEN.isInTab)], 非法,应该为布尔型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.styleZindex &&
    undefined !== pobjViewDgInfoEN.styleZindex &&
    tzDataType.isNumber(pobjViewDgInfoEN.styleZindex) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Zindex(styleZindex)]的值:[$(pobjViewDgInfoEN.styleZindex)], 非法,应该为数值型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.styleLeft &&
    undefined !== pobjViewDgInfoEN.styleLeft &&
    tzDataType.isNumber(pobjViewDgInfoEN.styleLeft) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Left(styleLeft)]的值:[$(pobjViewDgInfoEN.styleLeft)], 非法,应该为数值型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.stylePosition) == false &&
    undefined !== pobjViewDgInfoEN.stylePosition &&
    tzDataType.isString(pobjViewDgInfoEN.stylePosition) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Position(stylePosition)]的值:[$(pobjViewDgInfoEN.stylePosition)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjViewDgInfoEN.styleTop &&
    undefined !== pobjViewDgInfoEN.styleTop &&
    tzDataType.isNumber(pobjViewDgInfoEN.styleTop) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[Style_Top(styleTop)]的值:[$(pobjViewDgInfoEN.styleTop)], 非法,应该为数值型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.sqlDsTypeId) == false &&
    undefined !== pobjViewDgInfoEN.sqlDsTypeId &&
    tzDataType.isString(pobjViewDgInfoEN.sqlDsTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[数据源类型Id(sqlDsTypeId)]的值:[$(pobjViewDgInfoEN.sqlDsTypeId)], 非法,应该为字符型(In 视图Dg(ViewDgInfo))!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjViewDgInfoEN.viewDgID) === true) {
    throw new Error(
      '(errid:Watl000064)字段[界面DgId]不能为空(In 视图Dg)!(clsViewDgInfoBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjViewDgInfoEN.viewId) == false &&
    pobjViewDgInfoEN.viewId != '[nuull]' &&
    GetStrLen(pobjViewDgInfoEN.viewId) != 8
  ) {
    throw '(errid:Watl000418)字段[界面Id]作为外键字段,长度应该为8(In 视图Dg)!(clsViewDgInfoBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewDgInfo_GetJSONStrByObj(pobjViewDgInfoEN: clsViewDgInfoEN): string {
  pobjViewDgInfoEN.sfUpdFldSetStr = pobjViewDgInfoEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewDgInfoEN);
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
export function ViewDgInfo_GetObjLstByJSONStr(strJSON: string): Array<clsViewDgInfoEN> {
  let arrViewDgInfoObjLst = new Array<clsViewDgInfoEN>();
  if (strJSON === '') {
    return arrViewDgInfoObjLst;
  }
  try {
    arrViewDgInfoObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewDgInfoObjLst;
  }
  return arrViewDgInfoObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewDgInfoObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewDgInfo_GetObjLstByJSONObjLst(
  arrViewDgInfoObjLstS: Array<clsViewDgInfoEN>,
): Array<clsViewDgInfoEN> {
  const arrViewDgInfoObjLst = new Array<clsViewDgInfoEN>();
  for (const objInFor of arrViewDgInfoObjLstS) {
    const obj1 = ViewDgInfo_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewDgInfoObjLst.push(obj1);
  }
  return arrViewDgInfoObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-12-15
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewDgInfo_GetObjByJSONStr(strJSON: string): clsViewDgInfoEN {
  let pobjViewDgInfoEN = new clsViewDgInfoEN();
  if (strJSON === '') {
    return pobjViewDgInfoEN;
  }
  try {
    pobjViewDgInfoEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewDgInfoEN;
  }
  return pobjViewDgInfoEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewDgInfo_GetCombineCondition(objViewDgInfoCond: clsViewDgInfoEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_ViewDgID,
    ) == true
  ) {
    const strComparisonOpViewDgID: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_ViewDgID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewDgInfoEN.con_ViewDgID,
      objViewDgInfoCond.viewDgID,
      strComparisonOpViewDgID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_ViewDgName,
    ) == true
  ) {
    const strComparisonOpViewDgName: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_ViewDgName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewDgInfoEN.con_ViewDgName,
      objViewDgInfoCond.viewDgName,
      strComparisonOpViewDgName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_ViewId,
    ) == true
  ) {
    const strComparisonOpViewId: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_ViewId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewDgInfoEN.con_ViewId,
      objViewDgInfoCond.viewId,
      strComparisonOpViewId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_SqlDsId,
    ) == true
  ) {
    const strComparisonOpSqlDsId: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_SqlDsId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewDgInfoEN.con_SqlDsId,
      objViewDgInfoCond.sqlDsId,
      strComparisonOpSqlDsId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_DgStyleId,
    ) == true
  ) {
    const strComparisonOpDgStyleId: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_DgStyleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewDgInfoEN.con_DgStyleId,
      objViewDgInfoCond.dgStyleId,
      strComparisonOpDgStyleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_Style,
    ) == true
  ) {
    const strComparisonOpStyle: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_Style];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewDgInfoEN.con_Style,
      objViewDgInfoCond.style,
      strComparisonOpStyle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_Runat,
    ) == true
  ) {
    const strComparisonOpRunat: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_Runat];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewDgInfoEN.con_Runat,
      objViewDgInfoCond.runat,
      strComparisonOpRunat,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_FontSize,
    ) == true
  ) {
    const strComparisonOpFontSize: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_FontSize];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewDgInfoEN.con_FontSize,
      objViewDgInfoCond.fontSize,
      strComparisonOpFontSize,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_FontName,
    ) == true
  ) {
    const strComparisonOpFontName: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_FontName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewDgInfoEN.con_FontName,
      objViewDgInfoCond.fontName,
      strComparisonOpFontName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_Width,
    ) == true
  ) {
    const strComparisonOpWidth: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_Width];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewDgInfoEN.con_Width,
      objViewDgInfoCond.width,
      strComparisonOpWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_Height,
    ) == true
  ) {
    const strComparisonOpHeight: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_Height];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewDgInfoEN.con_Height,
      objViewDgInfoCond.height,
      strComparisonOpHeight,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_AllowPaging,
    ) == true
  ) {
    if (objViewDgInfoCond.allowPaging == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewDgInfoEN.con_AllowPaging);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewDgInfoEN.con_AllowPaging);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_PageSize,
    ) == true
  ) {
    const strComparisonOpPageSize: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_PageSize];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewDgInfoEN.con_PageSize,
      objViewDgInfoCond.pageSize,
      strComparisonOpPageSize,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_AutoGenerateColumns,
    ) == true
  ) {
    if (objViewDgInfoCond.autoGenerateColumns == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewDgInfoEN.con_AutoGenerateColumns);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewDgInfoEN.con_AutoGenerateColumns);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_AllowSorting,
    ) == true
  ) {
    if (objViewDgInfoCond.allowSorting == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewDgInfoEN.con_AllowSorting);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewDgInfoEN.con_AllowSorting);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_IsRadio,
    ) == true
  ) {
    if (objViewDgInfoCond.isRadio == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewDgInfoEN.con_IsRadio);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewDgInfoEN.con_IsRadio);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_IsCheck,
    ) == true
  ) {
    if (objViewDgInfoCond.isCheck == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewDgInfoEN.con_IsCheck);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewDgInfoEN.con_IsCheck);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_IsHaveUpdBtn,
    ) == true
  ) {
    if (objViewDgInfoCond.isHaveUpdBtn == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewDgInfoEN.con_IsHaveUpdBtn);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewDgInfoEN.con_IsHaveUpdBtn);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_IsHaveDelBtn,
    ) == true
  ) {
    if (objViewDgInfoCond.isHaveDelBtn == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewDgInfoEN.con_IsHaveDelBtn);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewDgInfoEN.con_IsHaveDelBtn);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_IsHaveDetailBtn,
    ) == true
  ) {
    if (objViewDgInfoCond.isHaveDetailBtn == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewDgInfoEN.con_IsHaveDetailBtn);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewDgInfoEN.con_IsHaveDetailBtn);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_IsJumpPage,
    ) == true
  ) {
    if (objViewDgInfoCond.isJumpPage == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewDgInfoEN.con_IsJumpPage);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewDgInfoEN.con_IsJumpPage);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_IsInTab,
    ) == true
  ) {
    if (objViewDgInfoCond.isInTab == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewDgInfoEN.con_IsInTab);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewDgInfoEN.con_IsInTab);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_StyleZindex,
    ) == true
  ) {
    const strComparisonOpStyleZindex: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_StyleZindex];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewDgInfoEN.con_StyleZindex,
      objViewDgInfoCond.styleZindex,
      strComparisonOpStyleZindex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_StyleLeft,
    ) == true
  ) {
    const strComparisonOpStyleLeft: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_StyleLeft];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewDgInfoEN.con_StyleLeft,
      objViewDgInfoCond.styleLeft,
      strComparisonOpStyleLeft,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_StylePosition,
    ) == true
  ) {
    const strComparisonOpStylePosition: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_StylePosition];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewDgInfoEN.con_StylePosition,
      objViewDgInfoCond.stylePosition,
      strComparisonOpStylePosition,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_StyleTop,
    ) == true
  ) {
    const strComparisonOpStyleTop: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_StyleTop];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewDgInfoEN.con_StyleTop,
      objViewDgInfoCond.styleTop,
      strComparisonOpStyleTop,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewDgInfoCond.dicFldComparisonOp,
      clsViewDgInfoEN.con_SqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpSqlDsTypeId: string =
      objViewDgInfoCond.dicFldComparisonOp[clsViewDgInfoEN.con_SqlDsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewDgInfoEN.con_SqlDsTypeId,
      objViewDgInfoCond.sqlDsTypeId,
      strComparisonOpSqlDsTypeId,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewDgInfo(视图Dg),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strViewDgName: 界面Dg名称(要求唯一的字段)
 * @param strViewId: 界面Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewDgInfo_GetUniCondStr(objViewDgInfoEN: clsViewDgInfoEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewDgName = '{0}'", objViewDgInfoEN.viewDgName);
  strWhereCond += Format(" and ViewId = '{0}'", objViewDgInfoEN.viewId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewDgInfo(视图Dg),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strViewDgName: 界面Dg名称(要求唯一的字段)
 * @param strViewId: 界面Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewDgInfo_GetUniCondStr4Update(objViewDgInfoEN: clsViewDgInfoEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewDgID <> '{0}'", objViewDgInfoEN.viewDgID);
  strWhereCond += Format(" and ViewDgName = '{0}'", objViewDgInfoEN.viewDgName);
  strWhereCond += Format(" and ViewId = '{0}'", objViewDgInfoEN.viewId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewDgInfoENS:源对象
 * @param objViewDgInfoENT:目标对象
 */
export function ViewDgInfo_GetObjFromJsonObj(objViewDgInfoENS: clsViewDgInfoEN): clsViewDgInfoEN {
  const objViewDgInfoENT: clsViewDgInfoEN = new clsViewDgInfoEN();
  ObjectAssign(objViewDgInfoENT, objViewDgInfoENS);
  return objViewDgInfoENT;
}
