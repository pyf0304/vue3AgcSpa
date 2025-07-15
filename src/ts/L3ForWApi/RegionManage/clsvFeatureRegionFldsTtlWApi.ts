/**
 * 类名:clsvFeatureRegionFldsTtlWApi
 * 表名:vFeatureRegionFlds_Ttl(00050474)
 * 版本:2023.06.08.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/08 06:20:19
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
 * v功能区域字段_Ttl(vFeatureRegionFldsTtl)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年06月08日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvFeatureRegionFldsTtlEN } from '@/ts/L0Entity/RegionManage/clsvFeatureRegionFldsTtlEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vFeatureRegionFldsTtlController = 'vFeatureRegionFldsTtlApi';
export const vFeatureRegionFldsTtlConstructorName = 'vFeatureRegionFldsTtl';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strViewFeatureId:关键字
 * @returns 对象
 **/
export async function vFeatureRegionFldsTtlGetObjByViewFeatureIdAsync(
  strViewFeatureId: string,
): Promise<clsvFeatureRegionFldsTtlEN | null> {
  const strThisFuncName = 'GetObjByViewFeatureIdAsync';

  if (IsNullOrEmpty(strViewFeatureId) == true) {
    const strMsg = Format(
      '参数:[strViewFeatureId]不能为空！(In clsvFeatureRegionFldsTtlWApi.GetObjByViewFeatureIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewFeatureId]的长度:[{0}]不正确！(clsvFeatureRegionFldsTtlWApi.GetObjByViewFeatureIdAsync)',
      strViewFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByViewFeatureId';
  const strUrl = GetWebApiUrl(vFeatureRegionFldsTtlController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewFeatureId,
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
      const objvFeatureRegionFldsTtl = vFeatureRegionFldsTtlGetObjFromJsonObj(returnObj);
      return objvFeatureRegionFldsTtl;
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
        vFeatureRegionFldsTtlConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFeatureRegionFldsTtlConstructorName,
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
 * @param strViewFeatureId:所给的关键字
 * @returns 对象
 */
export async function vFeatureRegionFldsTtlGetObjByViewFeatureIdCache(
  strViewFeatureId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByViewFeatureIdCache';

  if (IsNullOrEmpty(strViewFeatureId) == true) {
    const strMsg = Format(
      '参数:[strViewFeatureId]不能为空！(In clsvFeatureRegionFldsTtlWApi.GetObjByViewFeatureIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewFeatureId]的长度:[{0}]不正确！(clsvFeatureRegionFldsTtlWApi.GetObjByViewFeatureIdCache)',
      strViewFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFeatureRegionFldsTtlObjLstCache = await vFeatureRegionFldsTtlGetObjLstCache();
  try {
    const arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlObjLstCache.filter(
      (x) => x.viewFeatureId == strViewFeatureId,
    );
    let objvFeatureRegionFldsTtl: clsvFeatureRegionFldsTtlEN;
    if (arrvFeatureRegionFldsTtlSel.length > 0) {
      objvFeatureRegionFldsTtl = arrvFeatureRegionFldsTtlSel[0];
      return objvFeatureRegionFldsTtl;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvFeatureRegionFldsTtlConst = await vFeatureRegionFldsTtlGetObjByViewFeatureIdAsync(
          strViewFeatureId,
        );
        if (objvFeatureRegionFldsTtlConst != null) {
          vFeatureRegionFldsTtlReFreshThisCache();
          return objvFeatureRegionFldsTtlConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewFeatureId,
      vFeatureRegionFldsTtlConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strViewFeatureId:所给的关键字
 * @returns 对象
 */
export async function vFeatureRegionFldsTtlGetObjByViewFeatureIdlocalStorage(
  strViewFeatureId: string,
) {
  const strThisFuncName = 'GetObjByViewFeatureIdlocalStorage';

  if (IsNullOrEmpty(strViewFeatureId) == true) {
    const strMsg = Format(
      '参数:[strViewFeatureId]不能为空！(In clsvFeatureRegionFldsTtlWApi.GetObjByViewFeatureIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewFeatureId]的长度:[{0}]不正确！(clsvFeatureRegionFldsTtlWApi.GetObjByViewFeatureIdlocalStorage)',
      strViewFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvFeatureRegionFldsTtlEN._CurrTabName, strViewFeatureId);
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvFeatureRegionFldsTtlCache: clsvFeatureRegionFldsTtlEN = JSON.parse(strTempObj);
    return objvFeatureRegionFldsTtlCache;
  }
  try {
    const objvFeatureRegionFldsTtl = await vFeatureRegionFldsTtlGetObjByViewFeatureIdAsync(
      strViewFeatureId,
    );
    if (objvFeatureRegionFldsTtl != null) {
      localStorage.setItem(strKey, JSON.stringify(objvFeatureRegionFldsTtl));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvFeatureRegionFldsTtl;
    }
    return objvFeatureRegionFldsTtl;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewFeatureId,
      vFeatureRegionFldsTtlConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}
/*该表没有名称字段，不能生成此函数！*/

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function vFeatureRegionFldsTtlfunc(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvFeatureRegionFldsTtlEN.con_ViewFeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFeatureRegionFldsTtlEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strOutFldName,
      clsvFeatureRegionFldsTtlEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strViewFeatureId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvFeatureRegionFldsTtl = await vFeatureRegionFldsTtlGetObjByViewFeatureIdCache(
    strViewFeatureId,
  );
  if (objvFeatureRegionFldsTtl == null) return '';
  if (objvFeatureRegionFldsTtl.GetFldValue(strOutFldName) == null) return '';
  return objvFeatureRegionFldsTtl.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFeatureRegionFldsTtlSortFunDefa(
  a: clsvFeatureRegionFldsTtlEN,
  b: clsvFeatureRegionFldsTtlEN,
): number {
  return a.viewFeatureId.localeCompare(b.viewFeatureId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFeatureRegionFldsTtlSortFunDefa2Fld(
  a: clsvFeatureRegionFldsTtlEN,
  b: clsvFeatureRegionFldsTtlEN,
): number {
  if (a.regionId == b.regionId) return a.regionName.localeCompare(b.regionName);
  else return a.regionId.localeCompare(b.regionId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFeatureRegionFldsTtlSortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFeatureRegionFldsTtlEN.con_ViewFeatureId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return a.viewFeatureId.localeCompare(b.viewFeatureId);
        };
      case clsvFeatureRegionFldsTtlEN.con_RegionId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsvFeatureRegionFldsTtlEN.conRegionName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.regionName == null) return -1;
          if (b.regionName == null) return 1;
          return a.regionName.localeCompare(b.regionName);
        };
      case clsvFeatureRegionFldsTtlEN.conRegionTypeId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.regionTypeId == null) return -1;
          if (b.regionTypeId == null) return 1;
          return a.regionTypeId.localeCompare(b.regionTypeId);
        };
      case clsvFeatureRegionFldsTtlEN.conRegionTypeName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.regionTypeName == null) return -1;
          if (b.regionTypeName == null) return 1;
          return a.regionTypeName.localeCompare(b.regionTypeName);
        };
      case clsvFeatureRegionFldsTtlEN.con_FeatureId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return a.featureId.localeCompare(b.featureId);
        };
      case clsvFeatureRegionFldsTtlEN.con_FeatureName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.featureName == null) return -1;
          if (b.featureName == null) return 1;
          return a.featureName.localeCompare(b.featureName);
        };
      case clsvFeatureRegionFldsTtlEN.conKeyWords:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.keyWords == null) return -1;
          if (b.keyWords == null) return 1;
          return a.keyWords.localeCompare(b.keyWords);
        };
      case clsvFeatureRegionFldsTtlEN.con_TabFeatureId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.tabFeatureId == null) return -1;
          if (b.tabFeatureId == null) return 1;
          return a.tabFeatureId.localeCompare(b.tabFeatureId);
        };
      case clsvFeatureRegionFldsTtlEN.conTabFeatureName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.tabFeatureName == null) return -1;
          if (b.tabFeatureName == null) return 1;
          return a.tabFeatureName.localeCompare(b.tabFeatureName);
        };
      case clsvFeatureRegionFldsTtlEN.conCheckTabFeature:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.checkTabFeature == null) return -1;
          if (b.checkTabFeature == null) return 1;
          return a.checkTabFeature.localeCompare(b.checkTabFeature);
        };
      case clsvFeatureRegionFldsTtlEN.conFeatureDescription:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.featureDescription == null) return -1;
          if (b.featureDescription == null) return 1;
          return a.featureDescription.localeCompare(b.featureDescription);
        };
      case clsvFeatureRegionFldsTtlEN.conButtonName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return a.buttonName.localeCompare(b.buttonName);
        };
      case clsvFeatureRegionFldsTtlEN.conButtonName4Mvc:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return a.buttonName4Mvc.localeCompare(b.buttonName4Mvc);
        };
      case clsvFeatureRegionFldsTtlEN.conEventFuncName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.eventFuncName == null) return -1;
          if (b.eventFuncName == null) return 1;
          return a.eventFuncName.localeCompare(b.eventFuncName);
        };
      case clsvFeatureRegionFldsTtlEN.conValueGivingModeId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.valueGivingModeId == null) return -1;
          if (b.valueGivingModeId == null) return 1;
          return a.valueGivingModeId.localeCompare(b.valueGivingModeId);
        };
      case clsvFeatureRegionFldsTtlEN.conValueGivingModeName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.valueGivingModeName == null) return -1;
          if (b.valueGivingModeName == null) return 1;
          return a.valueGivingModeName.localeCompare(b.valueGivingModeName);
        };
      case clsvFeatureRegionFldsTtlEN.con_FuncName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.funcName == null) return -1;
          if (b.funcName == null) return 1;
          return a.funcName.localeCompare(b.funcName);
        };
      case clsvFeatureRegionFldsTtlEN.conDefaultValue:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.defaultValue == null) return -1;
          if (b.defaultValue == null) return 1;
          return a.defaultValue.localeCompare(b.defaultValue);
        };
      case clsvFeatureRegionFldsTtlEN.con_Text:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return a.text.localeCompare(b.text);
        };
      case clsvFeatureRegionFldsTtlEN.conGroupName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return a.groupName.localeCompare(b.groupName);
        };
      case clsvFeatureRegionFldsTtlEN.conReleTabId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.releTabId == null) return -1;
          if (b.releTabId == null) return 1;
          return a.releTabId.localeCompare(b.releTabId);
        };
      case clsvFeatureRegionFldsTtlEN.conReleFldId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.releFldId == null) return -1;
          if (b.releFldId == null) return 1;
          return a.releFldId.localeCompare(b.releFldId);
        };
      case clsvFeatureRegionFldsTtlEN.conFieldTypeId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.fieldTypeId == null) return -1;
          if (b.fieldTypeId == null) return 1;
          return a.fieldTypeId.localeCompare(b.fieldTypeId);
        };
      case clsvFeatureRegionFldsTtlEN.conFieldTypeName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.fieldTypeName == null) return -1;
          if (b.fieldTypeName == null) return 1;
          return a.fieldTypeName.localeCompare(b.fieldTypeName);
        };
      case clsvFeatureRegionFldsTtlEN.conViewImplId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return a.viewImplId.localeCompare(b.viewImplId);
        };
      case clsvFeatureRegionFldsTtlEN.conViewImplName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.viewImplName == null) return -1;
          if (b.viewImplName == null) return 1;
          return a.viewImplName.localeCompare(b.viewImplName);
        };
      case clsvFeatureRegionFldsTtlEN.conCtlTypeId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.ctlTypeId == null) return -1;
          if (b.ctlTypeId == null) return 1;
          return a.ctlTypeId.localeCompare(b.ctlTypeId);
        };
      case clsvFeatureRegionFldsTtlEN.conCtlTypeName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.ctlTypeName == null) return -1;
          if (b.ctlTypeName == null) return 1;
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      case clsvFeatureRegionFldsTtlEN.conCtlCnName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.ctlCnName == null) return -1;
          if (b.ctlCnName == null) return 1;
          return a.ctlCnName.localeCompare(b.ctlCnName);
        };
      case clsvFeatureRegionFldsTtlEN.conCtlTypeAbbr:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.ctlTypeAbbr == null) return -1;
          if (b.ctlTypeAbbr == null) return 1;
          return a.ctlTypeAbbr.localeCompare(b.ctlTypeAbbr);
        };
      case clsvFeatureRegionFldsTtlEN.conHeight:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return a.height - b.height;
        };
      case clsvFeatureRegionFldsTtlEN.conWidth:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return a.width - b.width;
        };
      case clsvFeatureRegionFldsTtlEN.conSeqNum:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return a.seqNum - b.seqNum;
        };
      case clsvFeatureRegionFldsTtlEN.conCssClass:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.cssClass == null) return -1;
          if (b.cssClass == null) return 1;
          return a.cssClass.localeCompare(b.cssClass);
        };
      case clsvFeatureRegionFldsTtlEN.conImageUrl:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.imageUrl == null) return -1;
          if (b.imageUrl == null) return 1;
          return a.imageUrl.localeCompare(b.imageUrl);
        };
      case clsvFeatureRegionFldsTtlEN.conInUse:
        return (a: clsvFeatureRegionFldsTtlEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsvFeatureRegionFldsTtlEN.conUpdUser:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvFeatureRegionFldsTtlEN.conUpdDate:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvFeatureRegionFldsTtlEN.conMemo:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvFeatureRegionFldsTtlEN.conFldNum:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return a.fldNum - b.fldNum;
        };
      case clsvFeatureRegionFldsTtlEN.conRelaFldName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.relaFldName == null) return -1;
          if (b.relaFldName == null) return 1;
          return a.relaFldName.localeCompare(b.relaFldName);
        };
      case clsvFeatureRegionFldsTtlEN.conRelaTabName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.relaTabName == null) return -1;
          if (b.relaTabName == null) return 1;
          return a.relaTabName.localeCompare(b.relaTabName);
        };
      case clsvFeatureRegionFldsTtlEN.conPrjId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFeatureRegionFldsTtl]中不存在！(in ${vFeatureRegionFldsTtlConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFeatureRegionFldsTtlEN.con_ViewFeatureId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return b.viewFeatureId.localeCompare(a.viewFeatureId);
        };
      case clsvFeatureRegionFldsTtlEN.con_RegionId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsvFeatureRegionFldsTtlEN.conRegionName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.regionName == null) return -1;
          if (a.regionName == null) return 1;
          return b.regionName.localeCompare(a.regionName);
        };
      case clsvFeatureRegionFldsTtlEN.conRegionTypeId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.regionTypeId == null) return -1;
          if (a.regionTypeId == null) return 1;
          return b.regionTypeId.localeCompare(a.regionTypeId);
        };
      case clsvFeatureRegionFldsTtlEN.conRegionTypeName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.regionTypeName == null) return -1;
          if (a.regionTypeName == null) return 1;
          return b.regionTypeName.localeCompare(a.regionTypeName);
        };
      case clsvFeatureRegionFldsTtlEN.con_FeatureId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return b.featureId.localeCompare(a.featureId);
        };
      case clsvFeatureRegionFldsTtlEN.con_FeatureName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.featureName == null) return -1;
          if (a.featureName == null) return 1;
          return b.featureName.localeCompare(a.featureName);
        };
      case clsvFeatureRegionFldsTtlEN.conKeyWords:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.keyWords == null) return -1;
          if (a.keyWords == null) return 1;
          return b.keyWords.localeCompare(a.keyWords);
        };
      case clsvFeatureRegionFldsTtlEN.con_TabFeatureId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.tabFeatureId == null) return -1;
          if (a.tabFeatureId == null) return 1;
          return b.tabFeatureId.localeCompare(a.tabFeatureId);
        };
      case clsvFeatureRegionFldsTtlEN.conTabFeatureName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.tabFeatureName == null) return -1;
          if (a.tabFeatureName == null) return 1;
          return b.tabFeatureName.localeCompare(a.tabFeatureName);
        };
      case clsvFeatureRegionFldsTtlEN.conCheckTabFeature:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.checkTabFeature == null) return -1;
          if (a.checkTabFeature == null) return 1;
          return b.checkTabFeature.localeCompare(a.checkTabFeature);
        };
      case clsvFeatureRegionFldsTtlEN.conFeatureDescription:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.featureDescription == null) return -1;
          if (a.featureDescription == null) return 1;
          return b.featureDescription.localeCompare(a.featureDescription);
        };
      case clsvFeatureRegionFldsTtlEN.conButtonName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return b.buttonName.localeCompare(a.buttonName);
        };
      case clsvFeatureRegionFldsTtlEN.conButtonName4Mvc:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return b.buttonName4Mvc.localeCompare(a.buttonName4Mvc);
        };
      case clsvFeatureRegionFldsTtlEN.conEventFuncName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.eventFuncName == null) return -1;
          if (a.eventFuncName == null) return 1;
          return b.eventFuncName.localeCompare(a.eventFuncName);
        };
      case clsvFeatureRegionFldsTtlEN.conValueGivingModeId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.valueGivingModeId == null) return -1;
          if (a.valueGivingModeId == null) return 1;
          return b.valueGivingModeId.localeCompare(a.valueGivingModeId);
        };
      case clsvFeatureRegionFldsTtlEN.conValueGivingModeName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.valueGivingModeName == null) return -1;
          if (a.valueGivingModeName == null) return 1;
          return b.valueGivingModeName.localeCompare(a.valueGivingModeName);
        };
      case clsvFeatureRegionFldsTtlEN.con_FuncName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.funcName == null) return -1;
          if (a.funcName == null) return 1;
          return b.funcName.localeCompare(a.funcName);
        };
      case clsvFeatureRegionFldsTtlEN.conDefaultValue:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.defaultValue == null) return -1;
          if (a.defaultValue == null) return 1;
          return b.defaultValue.localeCompare(a.defaultValue);
        };
      case clsvFeatureRegionFldsTtlEN.con_Text:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return b.text.localeCompare(a.text);
        };
      case clsvFeatureRegionFldsTtlEN.conGroupName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return b.groupName.localeCompare(a.groupName);
        };
      case clsvFeatureRegionFldsTtlEN.conReleTabId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.releTabId == null) return -1;
          if (a.releTabId == null) return 1;
          return b.releTabId.localeCompare(a.releTabId);
        };
      case clsvFeatureRegionFldsTtlEN.conReleFldId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.releFldId == null) return -1;
          if (a.releFldId == null) return 1;
          return b.releFldId.localeCompare(a.releFldId);
        };
      case clsvFeatureRegionFldsTtlEN.conFieldTypeId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.fieldTypeId == null) return -1;
          if (a.fieldTypeId == null) return 1;
          return b.fieldTypeId.localeCompare(a.fieldTypeId);
        };
      case clsvFeatureRegionFldsTtlEN.conFieldTypeName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.fieldTypeName == null) return -1;
          if (a.fieldTypeName == null) return 1;
          return b.fieldTypeName.localeCompare(a.fieldTypeName);
        };
      case clsvFeatureRegionFldsTtlEN.conViewImplId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return b.viewImplId.localeCompare(a.viewImplId);
        };
      case clsvFeatureRegionFldsTtlEN.conViewImplName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.viewImplName == null) return -1;
          if (a.viewImplName == null) return 1;
          return b.viewImplName.localeCompare(a.viewImplName);
        };
      case clsvFeatureRegionFldsTtlEN.conCtlTypeId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.ctlTypeId == null) return -1;
          if (a.ctlTypeId == null) return 1;
          return b.ctlTypeId.localeCompare(a.ctlTypeId);
        };
      case clsvFeatureRegionFldsTtlEN.conCtlTypeName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.ctlTypeName == null) return -1;
          if (a.ctlTypeName == null) return 1;
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      case clsvFeatureRegionFldsTtlEN.conCtlCnName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.ctlCnName == null) return -1;
          if (a.ctlCnName == null) return 1;
          return b.ctlCnName.localeCompare(a.ctlCnName);
        };
      case clsvFeatureRegionFldsTtlEN.conCtlTypeAbbr:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.ctlTypeAbbr == null) return -1;
          if (a.ctlTypeAbbr == null) return 1;
          return b.ctlTypeAbbr.localeCompare(a.ctlTypeAbbr);
        };
      case clsvFeatureRegionFldsTtlEN.conHeight:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return b.height - a.height;
        };
      case clsvFeatureRegionFldsTtlEN.conWidth:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return b.width - a.width;
        };
      case clsvFeatureRegionFldsTtlEN.conSeqNum:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return b.seqNum - a.seqNum;
        };
      case clsvFeatureRegionFldsTtlEN.conCssClass:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.cssClass == null) return -1;
          if (a.cssClass == null) return 1;
          return b.cssClass.localeCompare(a.cssClass);
        };
      case clsvFeatureRegionFldsTtlEN.conImageUrl:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.imageUrl == null) return -1;
          if (a.imageUrl == null) return 1;
          return b.imageUrl.localeCompare(a.imageUrl);
        };
      case clsvFeatureRegionFldsTtlEN.conInUse:
        return (b: clsvFeatureRegionFldsTtlEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsvFeatureRegionFldsTtlEN.conUpdUser:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvFeatureRegionFldsTtlEN.conUpdDate:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvFeatureRegionFldsTtlEN.conMemo:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvFeatureRegionFldsTtlEN.conFldNum:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          return b.fldNum - a.fldNum;
        };
      case clsvFeatureRegionFldsTtlEN.conRelaFldName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.relaFldName == null) return -1;
          if (a.relaFldName == null) return 1;
          return b.relaFldName.localeCompare(a.relaFldName);
        };
      case clsvFeatureRegionFldsTtlEN.conRelaTabName:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.relaTabName == null) return -1;
          if (a.relaTabName == null) return 1;
          return b.relaTabName.localeCompare(a.relaTabName);
        };
      case clsvFeatureRegionFldsTtlEN.conPrjId:
        return (a: clsvFeatureRegionFldsTtlEN, b: clsvFeatureRegionFldsTtlEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFeatureRegionFldsTtl]中不存在！(in ${vFeatureRegionFldsTtlConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vFeatureRegionFldsTtlFilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFeatureRegionFldsTtlEN.con_ViewFeatureId:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.viewFeatureId === value;
      };
    case clsvFeatureRegionFldsTtlEN.con_RegionId:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.regionId === value;
      };
    case clsvFeatureRegionFldsTtlEN.conRegionName:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.regionName === value;
      };
    case clsvFeatureRegionFldsTtlEN.conRegionTypeId:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.regionTypeId === value;
      };
    case clsvFeatureRegionFldsTtlEN.conRegionTypeName:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.regionTypeName === value;
      };
    case clsvFeatureRegionFldsTtlEN.con_FeatureId:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.featureId === value;
      };
    case clsvFeatureRegionFldsTtlEN.con_FeatureName:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.featureName === value;
      };
    case clsvFeatureRegionFldsTtlEN.conKeyWords:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.keyWords === value;
      };
    case clsvFeatureRegionFldsTtlEN.con_TabFeatureId:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.tabFeatureId === value;
      };
    case clsvFeatureRegionFldsTtlEN.conTabFeatureName:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.tabFeatureName === value;
      };
    case clsvFeatureRegionFldsTtlEN.conCheckTabFeature:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.checkTabFeature === value;
      };
    case clsvFeatureRegionFldsTtlEN.conFeatureDescription:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.featureDescription === value;
      };
    case clsvFeatureRegionFldsTtlEN.conButtonName:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.buttonName === value;
      };
    case clsvFeatureRegionFldsTtlEN.conButtonName4Mvc:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.buttonName4Mvc === value;
      };
    case clsvFeatureRegionFldsTtlEN.conEventFuncName:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.eventFuncName === value;
      };
    case clsvFeatureRegionFldsTtlEN.conValueGivingModeId:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.valueGivingModeId === value;
      };
    case clsvFeatureRegionFldsTtlEN.conValueGivingModeName:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.valueGivingModeName === value;
      };
    case clsvFeatureRegionFldsTtlEN.con_FuncName:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.funcName === value;
      };
    case clsvFeatureRegionFldsTtlEN.conDefaultValue:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.defaultValue === value;
      };
    case clsvFeatureRegionFldsTtlEN.con_Text:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.text === value;
      };
    case clsvFeatureRegionFldsTtlEN.conGroupName:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.groupName === value;
      };
    case clsvFeatureRegionFldsTtlEN.conReleTabId:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.releTabId === value;
      };
    case clsvFeatureRegionFldsTtlEN.conReleFldId:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.releFldId === value;
      };
    case clsvFeatureRegionFldsTtlEN.conFieldTypeId:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.fieldTypeId === value;
      };
    case clsvFeatureRegionFldsTtlEN.conFieldTypeName:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.fieldTypeName === value;
      };
    case clsvFeatureRegionFldsTtlEN.conViewImplId:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.viewImplId === value;
      };
    case clsvFeatureRegionFldsTtlEN.conViewImplName:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.viewImplName === value;
      };
    case clsvFeatureRegionFldsTtlEN.conCtlTypeId:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.ctlTypeId === value;
      };
    case clsvFeatureRegionFldsTtlEN.conCtlTypeName:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.ctlTypeName === value;
      };
    case clsvFeatureRegionFldsTtlEN.conCtlCnName:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.ctlCnName === value;
      };
    case clsvFeatureRegionFldsTtlEN.conCtlTypeAbbr:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.ctlTypeAbbr === value;
      };
    case clsvFeatureRegionFldsTtlEN.conHeight:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.height === value;
      };
    case clsvFeatureRegionFldsTtlEN.conWidth:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.width === value;
      };
    case clsvFeatureRegionFldsTtlEN.conSeqNum:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.seqNum === value;
      };
    case clsvFeatureRegionFldsTtlEN.conCssClass:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.cssClass === value;
      };
    case clsvFeatureRegionFldsTtlEN.conImageUrl:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.imageUrl === value;
      };
    case clsvFeatureRegionFldsTtlEN.conInUse:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.inUse === value;
      };
    case clsvFeatureRegionFldsTtlEN.conUpdUser:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.updUser === value;
      };
    case clsvFeatureRegionFldsTtlEN.conUpdDate:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.updDate === value;
      };
    case clsvFeatureRegionFldsTtlEN.conMemo:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.memo === value;
      };
    case clsvFeatureRegionFldsTtlEN.conFldNum:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.fldNum === value;
      };
    case clsvFeatureRegionFldsTtlEN.conRelaFldName:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.relaFldName === value;
      };
    case clsvFeatureRegionFldsTtlEN.conRelaTabName:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.relaTabName === value;
      };
    case clsvFeatureRegionFldsTtlEN.conPrjId:
      return (obj: clsvFeatureRegionFldsTtlEN) => {
        return obj.prjId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFeatureRegionFldsTtl]中不存在！(in ${vFeatureRegionFldsTtlConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值，映射成输出字段值
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function vFeatureRegionFldsTtlfuncKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvFeatureRegionFldsTtlEN.con_ViewFeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvFeatureRegionFldsTtl = await vFeatureRegionFldsTtlGetObjLstCache();
  if (arrvFeatureRegionFldsTtl == null) return [];
  let arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtl;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvFeatureRegionFldsTtlSel.length == 0) return [];
  return arrvFeatureRegionFldsTtlSel.map((x) => x.viewFeatureId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFeatureRegionFldsTtlGetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFeatureRegionFldsTtlController, strAction);
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
        vFeatureRegionFldsTtlConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFeatureRegionFldsTtlConstructorName,
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
export async function vFeatureRegionFldsTtlGetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFeatureRegionFldsTtlController, strAction);
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
        vFeatureRegionFldsTtlConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFeatureRegionFldsTtlConstructorName,
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
export async function vFeatureRegionFldsTtlGetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFeatureRegionFldsTtlEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFeatureRegionFldsTtlController, strAction);
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
      const objvFeatureRegionFldsTtl = vFeatureRegionFldsTtlGetObjFromJsonObj(returnObj);
      return objvFeatureRegionFldsTtl;
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
        vFeatureRegionFldsTtlConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFeatureRegionFldsTtlConstructorName,
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
export async function vFeatureRegionFldsTtlGetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvFeatureRegionFldsTtlEN._CurrTabName;
  if (IsNullOrEmpty(clsvFeatureRegionFldsTtlEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFeatureRegionFldsTtlEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrvFeatureRegionFldsTtlExObjLstCache: Array<clsvFeatureRegionFldsTtlEN> =
      CacheHelper.Get(strKey);
    const arrvFeatureRegionFldsTtlObjLstT = vFeatureRegionFldsTtlGetObjLstByJSONObjLst(
      arrvFeatureRegionFldsTtlExObjLstCache,
    );
    return arrvFeatureRegionFldsTtlObjLstT;
  }
  try {
    const arrvFeatureRegionFldsTtlExObjLst = await vFeatureRegionFldsTtlGetObjLstAsync(
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrvFeatureRegionFldsTtlExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvFeatureRegionFldsTtlExObjLst.length,
    );
    console.log(strInfo);
    return arrvFeatureRegionFldsTtlExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFeatureRegionFldsTtlConstructorName,
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
export async function vFeatureRegionFldsTtlGetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvFeatureRegionFldsTtlEN._CurrTabName;
  if (IsNullOrEmpty(clsvFeatureRegionFldsTtlEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFeatureRegionFldsTtlEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFeatureRegionFldsTtlExObjLstCache: Array<clsvFeatureRegionFldsTtlEN> =
      JSON.parse(strTempObjLst);
    const arrvFeatureRegionFldsTtlObjLstT = vFeatureRegionFldsTtlGetObjLstByJSONObjLst(
      arrvFeatureRegionFldsTtlExObjLstCache,
    );
    return arrvFeatureRegionFldsTtlObjLstT;
  }
  try {
    const arrvFeatureRegionFldsTtlExObjLst = await vFeatureRegionFldsTtlGetObjLstAsync(
      strWhereCond,
    );
    localStorage.setItem(strKey, JSON.stringify(arrvFeatureRegionFldsTtlExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvFeatureRegionFldsTtlExObjLst.length,
    );
    console.log(strInfo);
    return arrvFeatureRegionFldsTtlExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFeatureRegionFldsTtlConstructorName,
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
export async function vFeatureRegionFldsTtlGetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvFeatureRegionFldsTtlEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFeatureRegionFldsTtlObjLstCache: Array<clsvFeatureRegionFldsTtlEN> =
      JSON.parse(strTempObjLst);
    return arrvFeatureRegionFldsTtlObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vFeatureRegionFldsTtlGetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFeatureRegionFldsTtlEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFeatureRegionFldsTtlController, strAction);
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
          vFeatureRegionFldsTtlConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureRegionFldsTtlGetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureRegionFldsTtlConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFeatureRegionFldsTtlConstructorName,
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
export async function vFeatureRegionFldsTtlGetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvFeatureRegionFldsTtlEN._CurrTabName;
  if (IsNullOrEmpty(clsvFeatureRegionFldsTtlEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFeatureRegionFldsTtlEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFeatureRegionFldsTtlExObjLstCache: Array<clsvFeatureRegionFldsTtlEN> =
      JSON.parse(strTempObjLst);
    const arrvFeatureRegionFldsTtlObjLstT = vFeatureRegionFldsTtlGetObjLstByJSONObjLst(
      arrvFeatureRegionFldsTtlExObjLstCache,
    );
    return arrvFeatureRegionFldsTtlObjLstT;
  }
  try {
    const arrvFeatureRegionFldsTtlExObjLst = await vFeatureRegionFldsTtlGetObjLstAsync(
      strWhereCond,
    );
    sessionStorage.setItem(strKey, JSON.stringify(arrvFeatureRegionFldsTtlExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立，对象列表数：{1}!',
      strKey,
      arrvFeatureRegionFldsTtlExObjLst.length,
    );
    console.log(strInfo);
    return arrvFeatureRegionFldsTtlExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFeatureRegionFldsTtlConstructorName,
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
export async function vFeatureRegionFldsTtlGetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvFeatureRegionFldsTtlEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFeatureRegionFldsTtlObjLstCache: Array<clsvFeatureRegionFldsTtlEN> =
      JSON.parse(strTempObjLst);
    return arrvFeatureRegionFldsTtlObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFeatureRegionFldsTtlGetObjLstCache(): Promise<
  Array<clsvFeatureRegionFldsTtlEN>
> {
  //const strThisFuncName = "GetObjLstCache";
  let arrvFeatureRegionFldsTtlObjLstCache;
  switch (clsvFeatureRegionFldsTtlEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFeatureRegionFldsTtlObjLstCache = await vFeatureRegionFldsTtlGetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvFeatureRegionFldsTtlObjLstCache = await vFeatureRegionFldsTtlGetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvFeatureRegionFldsTtlObjLstCache = await vFeatureRegionFldsTtlGetObjLstClientCache();
      break;
    default:
      arrvFeatureRegionFldsTtlObjLstCache = await vFeatureRegionFldsTtlGetObjLstClientCache();
      break;
  }
  return arrvFeatureRegionFldsTtlObjLstCache;
}

/**
 * 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFeatureRegionFldsTtlGetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvFeatureRegionFldsTtlObjLstCache;
  switch (clsvFeatureRegionFldsTtlEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFeatureRegionFldsTtlObjLstCache =
        await vFeatureRegionFldsTtlGetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvFeatureRegionFldsTtlObjLstCache =
        await vFeatureRegionFldsTtlGetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvFeatureRegionFldsTtlObjLstCache = null;
      break;
    default:
      arrvFeatureRegionFldsTtlObjLstCache = null;
      break;
  }
  return arrvFeatureRegionFldsTtlObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrViewFeatureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vFeatureRegionFldsTtlGetSubObjLstCache(
  objvFeatureRegionFldsTtlCond: clsvFeatureRegionFldsTtlEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvFeatureRegionFldsTtlObjLstCache = await vFeatureRegionFldsTtlGetObjLstCache();
  let arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlObjLstCache;
  if (
    objvFeatureRegionFldsTtlCond.sfFldComparisonOp == null ||
    objvFeatureRegionFldsTtlCond.sfFldComparisonOp == ''
  )
    return arrvFeatureRegionFldsTtlSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFeatureRegionFldsTtlCond.sfFldComparisonOp,
  );
  //console.log("clsvFeatureRegionFldsTtlWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFeatureRegionFldsTtlCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureRegionFldsTtlCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFeatureRegionFldsTtlSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFeatureRegionFldsTtlCond),
      vFeatureRegionFldsTtlConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFeatureRegionFldsTtlEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewFeatureId:关键字列表
 * @returns 对象列表
 **/
export async function vFeatureRegionFldsTtlGetObjLstByViewFeatureIdLstAsync(
  arrViewFeatureId: Array<string>,
): Promise<Array<clsvFeatureRegionFldsTtlEN>> {
  const strThisFuncName = 'GetObjLstByViewFeatureIdLstAsync';
  const strAction = 'GetObjLstByViewFeatureIdLst';
  const strUrl = GetWebApiUrl(vFeatureRegionFldsTtlController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewFeatureId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vFeatureRegionFldsTtlConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureRegionFldsTtlGetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureRegionFldsTtlConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFeatureRegionFldsTtlConstructorName,
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
 * @param arrstrViewFeatureIdLst:关键字列表
 * @returns 对象列表
 */
export async function vFeatureRegionFldsTtlGetObjLstByViewFeatureIdLstCache(
  arrViewFeatureIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByViewFeatureIdLstCache';
  try {
    const arrvFeatureRegionFldsTtlObjLstCache = await vFeatureRegionFldsTtlGetObjLstCache();
    const arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlObjLstCache.filter(
      (x) => arrViewFeatureIdLst.indexOf(x.viewFeatureId) > -1,
    );
    return arrvFeatureRegionFldsTtlSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewFeatureIdLst.join(','),
      vFeatureRegionFldsTtlConstructorName,
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
export async function vFeatureRegionFldsTtlGetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFeatureRegionFldsTtlEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFeatureRegionFldsTtlController, strAction);
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
          vFeatureRegionFldsTtlConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureRegionFldsTtlGetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureRegionFldsTtlConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFeatureRegionFldsTtlConstructorName,
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
export async function vFeatureRegionFldsTtlGetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFeatureRegionFldsTtlEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFeatureRegionFldsTtlController, strAction);
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
          vFeatureRegionFldsTtlConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureRegionFldsTtlGetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureRegionFldsTtlConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFeatureRegionFldsTtlConstructorName,
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
export async function vFeatureRegionFldsTtlGetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFeatureRegionFldsTtlEN>();
  const arrvFeatureRegionFldsTtlObjLstCache = await vFeatureRegionFldsTtlGetObjLstCache();
  if (arrvFeatureRegionFldsTtlObjLstCache.length == 0) return arrvFeatureRegionFldsTtlObjLstCache;
  let arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvFeatureRegionFldsTtlCond = new clsvFeatureRegionFldsTtlEN();
  ObjectAssign(objvFeatureRegionFldsTtlCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvFeatureRegionFldsTtlWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureRegionFldsTtlCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFeatureRegionFldsTtlSel.length == 0) return arrvFeatureRegionFldsTtlSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.sort(
        vFeatureRegionFldsTtlSortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.sort(objPagerPara.sortFun);
    }
    arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.slice(intStart, intEnd);
    return arrvFeatureRegionFldsTtlSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vFeatureRegionFldsTtlConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFeatureRegionFldsTtlEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表，只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vFeatureRegionFldsTtlGetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFeatureRegionFldsTtlEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFeatureRegionFldsTtlEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFeatureRegionFldsTtlController, strAction);
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
          vFeatureRegionFldsTtlConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureRegionFldsTtlGetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureRegionFldsTtlConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFeatureRegionFldsTtlConstructorName,
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
 * @param objstrViewFeatureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vFeatureRegionFldsTtlIsExistRecordCache(
  objvFeatureRegionFldsTtlCond: clsvFeatureRegionFldsTtlEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvFeatureRegionFldsTtlObjLstCache = await vFeatureRegionFldsTtlGetObjLstCache();
  if (arrvFeatureRegionFldsTtlObjLstCache == null) return false;
  let arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlObjLstCache;
  if (
    objvFeatureRegionFldsTtlCond.sfFldComparisonOp == null ||
    objvFeatureRegionFldsTtlCond.sfFldComparisonOp == ''
  )
    return arrvFeatureRegionFldsTtlSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFeatureRegionFldsTtlCond.sfFldComparisonOp,
  );
  //console.log("clsvFeatureRegionFldsTtlWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFeatureRegionFldsTtlCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureRegionFldsTtlCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFeatureRegionFldsTtlSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvFeatureRegionFldsTtlCond),
      vFeatureRegionFldsTtlConstructorName,
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
export async function vFeatureRegionFldsTtlIsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFeatureRegionFldsTtlController, strAction);
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
        vFeatureRegionFldsTtlConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFeatureRegionFldsTtlConstructorName,
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
 * @param strViewFeatureId:所给的关键字
 * @returns 对象
 */
export async function vFeatureRegionFldsTtlIsExistCache(strViewFeatureId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvFeatureRegionFldsTtlObjLstCache = await vFeatureRegionFldsTtlGetObjLstCache();
  if (arrvFeatureRegionFldsTtlObjLstCache == null) return false;
  try {
    const arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlObjLstCache.filter(
      (x) => x.viewFeatureId == strViewFeatureId,
    );
    if (arrvFeatureRegionFldsTtlSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strViewFeatureId,
      vFeatureRegionFldsTtlConstructorName,
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
 * @param strViewFeatureId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vFeatureRegionFldsTtlIsExistAsync(
  strViewFeatureId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFeatureRegionFldsTtlController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewFeatureId,
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
        vFeatureRegionFldsTtlConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFeatureRegionFldsTtlConstructorName,
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
export async function vFeatureRegionFldsTtlGetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFeatureRegionFldsTtlController, strAction);
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
        vFeatureRegionFldsTtlConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vFeatureRegionFldsTtlConstructorName,
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
 * @param objvFeatureRegionFldsTtlCond:条件对象
 * @returns 对象列表记录数
 */
export async function vFeatureRegionFldsTtlGetRecCountByCondCache(
  objvFeatureRegionFldsTtlCond: clsvFeatureRegionFldsTtlEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvFeatureRegionFldsTtlObjLstCache = await vFeatureRegionFldsTtlGetObjLstCache();
  if (arrvFeatureRegionFldsTtlObjLstCache == null) return 0;
  let arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlObjLstCache;
  if (
    objvFeatureRegionFldsTtlCond.sfFldComparisonOp == null ||
    objvFeatureRegionFldsTtlCond.sfFldComparisonOp == ''
  )
    return arrvFeatureRegionFldsTtlSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFeatureRegionFldsTtlCond.sfFldComparisonOp,
  );
  //console.log("clsvFeatureRegionFldsTtlWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFeatureRegionFldsTtlCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureRegionFldsTtlCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFeatureRegionFldsTtlSel = arrvFeatureRegionFldsTtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFeatureRegionFldsTtlSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFeatureRegionFldsTtlCond),
      vFeatureRegionFldsTtlConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vFeatureRegionFldsTtlGetWebApiUrl(
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vFeatureRegionFldsTtlReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvFeatureRegionFldsTtlEN._CurrTabName;
    switch (clsvFeatureRegionFldsTtlEN.CacheModeId) {
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
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFeatureRegionFldsTtlGetJSONStrByObj(
  pobjvFeatureRegionFldsTtlEN: clsvFeatureRegionFldsTtlEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFeatureRegionFldsTtlEN);
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
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vFeatureRegionFldsTtlGetObjLstByJSONStr(
  strJSON: string,
): Array<clsvFeatureRegionFldsTtlEN> {
  let arrvFeatureRegionFldsTtlObjLst = new Array<clsvFeatureRegionFldsTtlEN>();
  if (strJSON === '') {
    return arrvFeatureRegionFldsTtlObjLst;
  }
  try {
    arrvFeatureRegionFldsTtlObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFeatureRegionFldsTtlObjLst;
  }
  return arrvFeatureRegionFldsTtlObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFeatureRegionFldsTtlObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFeatureRegionFldsTtlGetObjLstByJSONObjLst(
  arrvFeatureRegionFldsTtlObjLstS: Array<clsvFeatureRegionFldsTtlEN>,
): Array<clsvFeatureRegionFldsTtlEN> {
  const arrvFeatureRegionFldsTtlObjLst = new Array<clsvFeatureRegionFldsTtlEN>();
  for (const objInFor of arrvFeatureRegionFldsTtlObjLstS) {
    const obj1 = vFeatureRegionFldsTtlGetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFeatureRegionFldsTtlObjLst.push(obj1);
  }
  return arrvFeatureRegionFldsTtlObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFeatureRegionFldsTtlGetObjByJSONStr(strJSON: string): clsvFeatureRegionFldsTtlEN {
  let pobjvFeatureRegionFldsTtlEN = new clsvFeatureRegionFldsTtlEN();
  if (strJSON === '') {
    return pobjvFeatureRegionFldsTtlEN;
  }
  try {
    pobjvFeatureRegionFldsTtlEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFeatureRegionFldsTtlEN;
  }
  return pobjvFeatureRegionFldsTtlEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFeatureRegionFldsTtlGetCombineCondition(
  objvFeatureRegionFldsTtlCond: clsvFeatureRegionFldsTtlEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.con_ViewFeatureId,
    ) == true
  ) {
    const strComparisonOpViewFeatureId: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.con_ViewFeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.con_ViewFeatureId,
      objvFeatureRegionFldsTtlCond.viewFeatureId,
      strComparisonOpViewFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.con_RegionId,
    ) == true
  ) {
    const strComparisonOpRegionId: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.con_RegionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.con_RegionId,
      objvFeatureRegionFldsTtlCond.regionId,
      strComparisonOpRegionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conRegionName,
    ) == true
  ) {
    const strComparisonOpRegionName: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conRegionName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conRegionName,
      objvFeatureRegionFldsTtlCond.regionName,
      strComparisonOpRegionName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conRegionTypeId,
    ) == true
  ) {
    const strComparisonOpRegionTypeId: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conRegionTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conRegionTypeId,
      objvFeatureRegionFldsTtlCond.regionTypeId,
      strComparisonOpRegionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conRegionTypeName,
    ) == true
  ) {
    const strComparisonOpRegionTypeName: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conRegionTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conRegionTypeName,
      objvFeatureRegionFldsTtlCond.regionTypeName,
      strComparisonOpRegionTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.con_FeatureId,
    ) == true
  ) {
    const strComparisonOpFeatureId: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.con_FeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.con_FeatureId,
      objvFeatureRegionFldsTtlCond.featureId,
      strComparisonOpFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.con_FeatureName,
    ) == true
  ) {
    const strComparisonOpFeatureName: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.con_FeatureName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.con_FeatureName,
      objvFeatureRegionFldsTtlCond.featureName,
      strComparisonOpFeatureName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conKeyWords,
    ) == true
  ) {
    const strComparisonOpKeyWords: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conKeyWords];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conKeyWords,
      objvFeatureRegionFldsTtlCond.keyWords,
      strComparisonOpKeyWords,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.con_TabFeatureId,
    ) == true
  ) {
    const strComparisonOpTabFeatureId: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.con_TabFeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.con_TabFeatureId,
      objvFeatureRegionFldsTtlCond.tabFeatureId,
      strComparisonOpTabFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conTabFeatureName,
    ) == true
  ) {
    const strComparisonOpTabFeatureName: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conTabFeatureName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conTabFeatureName,
      objvFeatureRegionFldsTtlCond.tabFeatureName,
      strComparisonOpTabFeatureName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conCheckTabFeature,
    ) == true
  ) {
    const strComparisonOpCheckTabFeature: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[
        clsvFeatureRegionFldsTtlEN.conCheckTabFeature
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conCheckTabFeature,
      objvFeatureRegionFldsTtlCond.checkTabFeature,
      strComparisonOpCheckTabFeature,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conFeatureDescription,
    ) == true
  ) {
    const strComparisonOpFeatureDescription: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[
        clsvFeatureRegionFldsTtlEN.conFeatureDescription
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conFeatureDescription,
      objvFeatureRegionFldsTtlCond.featureDescription,
      strComparisonOpFeatureDescription,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conButtonName,
    ) == true
  ) {
    const strComparisonOpButtonName: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conButtonName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conButtonName,
      objvFeatureRegionFldsTtlCond.buttonName,
      strComparisonOpButtonName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conButtonName4Mvc,
    ) == true
  ) {
    const strComparisonOpButtonName4Mvc: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conButtonName4Mvc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conButtonName4Mvc,
      objvFeatureRegionFldsTtlCond.buttonName4Mvc,
      strComparisonOpButtonName4Mvc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conEventFuncName,
    ) == true
  ) {
    const strComparisonOpEventFuncName: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conEventFuncName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conEventFuncName,
      objvFeatureRegionFldsTtlCond.eventFuncName,
      strComparisonOpEventFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conValueGivingModeId,
    ) == true
  ) {
    const strComparisonOpValueGivingModeId: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[
        clsvFeatureRegionFldsTtlEN.conValueGivingModeId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conValueGivingModeId,
      objvFeatureRegionFldsTtlCond.valueGivingModeId,
      strComparisonOpValueGivingModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conValueGivingModeName,
    ) == true
  ) {
    const strComparisonOpValueGivingModeName: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[
        clsvFeatureRegionFldsTtlEN.conValueGivingModeName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conValueGivingModeName,
      objvFeatureRegionFldsTtlCond.valueGivingModeName,
      strComparisonOpValueGivingModeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.con_FuncName,
    ) == true
  ) {
    const strComparisonOpFuncName: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.con_FuncName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.con_FuncName,
      objvFeatureRegionFldsTtlCond.funcName,
      strComparisonOpFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conDefaultValue,
    ) == true
  ) {
    const strComparisonOpDefaultValue: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conDefaultValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conDefaultValue,
      objvFeatureRegionFldsTtlCond.defaultValue,
      strComparisonOpDefaultValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.con_Text,
    ) == true
  ) {
    const strComparisonOpText: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.con_Text];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.con_Text,
      objvFeatureRegionFldsTtlCond.text,
      strComparisonOpText,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conGroupName,
    ) == true
  ) {
    const strComparisonOpGroupName: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conGroupName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conGroupName,
      objvFeatureRegionFldsTtlCond.groupName,
      strComparisonOpGroupName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conReleTabId,
    ) == true
  ) {
    const strComparisonOpReleTabId: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conReleTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conReleTabId,
      objvFeatureRegionFldsTtlCond.releTabId,
      strComparisonOpReleTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conReleFldId,
    ) == true
  ) {
    const strComparisonOpReleFldId: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conReleFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conReleFldId,
      objvFeatureRegionFldsTtlCond.releFldId,
      strComparisonOpReleFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conFieldTypeId,
    ) == true
  ) {
    const strComparisonOpFieldTypeId: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conFieldTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conFieldTypeId,
      objvFeatureRegionFldsTtlCond.fieldTypeId,
      strComparisonOpFieldTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conFieldTypeName,
    ) == true
  ) {
    const strComparisonOpFieldTypeName: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conFieldTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conFieldTypeName,
      objvFeatureRegionFldsTtlCond.fieldTypeName,
      strComparisonOpFieldTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conViewImplId,
    ) == true
  ) {
    const strComparisonOpViewImplId: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conViewImplId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conViewImplId,
      objvFeatureRegionFldsTtlCond.viewImplId,
      strComparisonOpViewImplId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conViewImplName,
    ) == true
  ) {
    const strComparisonOpViewImplName: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conViewImplName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conViewImplName,
      objvFeatureRegionFldsTtlCond.viewImplName,
      strComparisonOpViewImplName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conCtlTypeId,
    ) == true
  ) {
    const strComparisonOpCtlTypeId: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conCtlTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conCtlTypeId,
      objvFeatureRegionFldsTtlCond.ctlTypeId,
      strComparisonOpCtlTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conCtlTypeName,
    ) == true
  ) {
    const strComparisonOpCtlTypeName: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conCtlTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conCtlTypeName,
      objvFeatureRegionFldsTtlCond.ctlTypeName,
      strComparisonOpCtlTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conCtlCnName,
    ) == true
  ) {
    const strComparisonOpCtlCnName: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conCtlCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conCtlCnName,
      objvFeatureRegionFldsTtlCond.ctlCnName,
      strComparisonOpCtlCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conCtlTypeAbbr,
    ) == true
  ) {
    const strComparisonOpCtlTypeAbbr: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conCtlTypeAbbr];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conCtlTypeAbbr,
      objvFeatureRegionFldsTtlCond.ctlTypeAbbr,
      strComparisonOpCtlTypeAbbr,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conHeight,
    ) == true
  ) {
    const strComparisonOpHeight: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conHeight];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFeatureRegionFldsTtlEN.conHeight,
      objvFeatureRegionFldsTtlCond.height,
      strComparisonOpHeight,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conWidth,
    ) == true
  ) {
    const strComparisonOpWidth: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conWidth];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFeatureRegionFldsTtlEN.conWidth,
      objvFeatureRegionFldsTtlCond.width,
      strComparisonOpWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conSeqNum,
    ) == true
  ) {
    const strComparisonOpSeqNum: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conSeqNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFeatureRegionFldsTtlEN.conSeqNum,
      objvFeatureRegionFldsTtlCond.seqNum,
      strComparisonOpSeqNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conCssClass,
    ) == true
  ) {
    const strComparisonOpCssClass: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conCssClass];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conCssClass,
      objvFeatureRegionFldsTtlCond.cssClass,
      strComparisonOpCssClass,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conImageUrl,
    ) == true
  ) {
    const strComparisonOpImageUrl: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conImageUrl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conImageUrl,
      objvFeatureRegionFldsTtlCond.imageUrl,
      strComparisonOpImageUrl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conInUse,
    ) == true
  ) {
    if (objvFeatureRegionFldsTtlCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFeatureRegionFldsTtlEN.conInUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFeatureRegionFldsTtlEN.conInUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conUpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conUpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conUpdUser,
      objvFeatureRegionFldsTtlCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conUpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conUpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conUpdDate,
      objvFeatureRegionFldsTtlCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conMemo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conMemo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conMemo,
      objvFeatureRegionFldsTtlCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conFldNum,
    ) == true
  ) {
    const strComparisonOpFldNum: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conFldNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFeatureRegionFldsTtlEN.conFldNum,
      objvFeatureRegionFldsTtlCond.fldNum,
      strComparisonOpFldNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conRelaFldName,
    ) == true
  ) {
    const strComparisonOpRelaFldName: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conRelaFldName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conRelaFldName,
      objvFeatureRegionFldsTtlCond.relaFldName,
      strComparisonOpRelaFldName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conRelaTabName,
    ) == true
  ) {
    const strComparisonOpRelaTabName: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conRelaTabName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conRelaTabName,
      objvFeatureRegionFldsTtlCond.relaTabName,
      strComparisonOpRelaTabName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp,
      clsvFeatureRegionFldsTtlEN.conPrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvFeatureRegionFldsTtlCond.dicFldComparisonOp[clsvFeatureRegionFldsTtlEN.conPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFldsTtlEN.conPrjId,
      objvFeatureRegionFldsTtlCond.prjId,
      strComparisonOpPrjId,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFeatureRegionFldsTtlENS:源对象
 * @param objvFeatureRegionFldsTtlENT:目标对象
 */
export function vFeatureRegionFldsTtlGetObjFromJsonObj(
  objvFeatureRegionFldsTtlENS: clsvFeatureRegionFldsTtlEN,
): clsvFeatureRegionFldsTtlEN {
  const objvFeatureRegionFldsTtlENT: clsvFeatureRegionFldsTtlEN = new clsvFeatureRegionFldsTtlEN();
  ObjectAssign(objvFeatureRegionFldsTtlENT, objvFeatureRegionFldsTtlENS);
  return objvFeatureRegionFldsTtlENT;
}
