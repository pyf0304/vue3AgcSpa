/**
 * 类名:clsvFeatureRegionFlds_TtlWApi
 * 表名:vFeatureRegionFlds_Ttl(00050474)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:33
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
 * v功能区域字段_Ttl(vFeatureRegionFlds_Ttl)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
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
import { clsvFeatureRegionFlds_TtlEN } from '@/ts/L0Entity/RegionManage/clsvFeatureRegionFlds_TtlEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vFeatureRegionFlds_Ttl_Controller = 'vFeatureRegionFlds_TtlApi';
export const vFeatureRegionFlds_Ttl_ConstructorName = 'vFeatureRegionFlds_Ttl';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strViewFeatureId:关键字
 * @returns 对象
 **/
export async function vFeatureRegionFlds_Ttl_GetObjByViewFeatureIdAsync(
  strViewFeatureId: string,
): Promise<clsvFeatureRegionFlds_TtlEN | null> {
  const strThisFuncName = 'GetObjByViewFeatureIdAsync';

  if (IsNullOrEmpty(strViewFeatureId) == true) {
    const strMsg = Format(
      '参数:[strViewFeatureId]不能为空!(In clsvFeatureRegionFlds_TtlWApi.GetObjByViewFeatureIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewFeatureId]的长度:[{0}]不正确!(clsvFeatureRegionFlds_TtlWApi.GetObjByViewFeatureIdAsync)',
      strViewFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByViewFeatureId';
  const strUrl = GetWebApiUrl(vFeatureRegionFlds_Ttl_Controller, strAction);

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
      const objvFeatureRegionFlds_Ttl = vFeatureRegionFlds_Ttl_GetObjFromJsonObj(returnObj);
      return objvFeatureRegionFlds_Ttl;
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
        vFeatureRegionFlds_Ttl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_GetObjByViewFeatureIdCache(
  strViewFeatureId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByViewFeatureIdCache';

  if (IsNullOrEmpty(strViewFeatureId) == true) {
    const strMsg = Format(
      '参数:[strViewFeatureId]不能为空!(In clsvFeatureRegionFlds_TtlWApi.GetObjByViewFeatureIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewFeatureId]的长度:[{0}]不正确!(clsvFeatureRegionFlds_TtlWApi.GetObjByViewFeatureIdCache)',
      strViewFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvFeatureRegionFlds_TtlObjLstCache = await vFeatureRegionFlds_Ttl_GetObjLstCache();
  try {
    const arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlObjLstCache.filter(
      (x) => x.viewFeatureId == strViewFeatureId,
    );
    let objvFeatureRegionFlds_Ttl: clsvFeatureRegionFlds_TtlEN;
    if (arrvFeatureRegionFlds_TtlSel.length > 0) {
      objvFeatureRegionFlds_Ttl = arrvFeatureRegionFlds_TtlSel[0];
      return objvFeatureRegionFlds_Ttl;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvFeatureRegionFlds_TtlConst =
          await vFeatureRegionFlds_Ttl_GetObjByViewFeatureIdAsync(strViewFeatureId);
        if (objvFeatureRegionFlds_TtlConst != null) {
          vFeatureRegionFlds_Ttl_ReFreshThisCache();
          return objvFeatureRegionFlds_TtlConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewFeatureId,
      vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_GetObjByViewFeatureIdlocalStorage(
  strViewFeatureId: string,
) {
  const strThisFuncName = 'GetObjByViewFeatureIdlocalStorage';

  if (IsNullOrEmpty(strViewFeatureId) == true) {
    const strMsg = Format(
      '参数:[strViewFeatureId]不能为空!(In clsvFeatureRegionFlds_TtlWApi.GetObjByViewFeatureIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewFeatureId]的长度:[{0}]不正确!(clsvFeatureRegionFlds_TtlWApi.GetObjByViewFeatureIdlocalStorage)',
      strViewFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvFeatureRegionFlds_TtlEN._CurrTabName, strViewFeatureId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvFeatureRegionFlds_TtlCache: clsvFeatureRegionFlds_TtlEN = JSON.parse(strTempObj);
    return objvFeatureRegionFlds_TtlCache;
  }
  try {
    const objvFeatureRegionFlds_Ttl = await vFeatureRegionFlds_Ttl_GetObjByViewFeatureIdAsync(
      strViewFeatureId,
    );
    if (objvFeatureRegionFlds_Ttl != null) {
      localStorage.setItem(strKey, JSON.stringify(objvFeatureRegionFlds_Ttl));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvFeatureRegionFlds_Ttl;
    }
    return objvFeatureRegionFlds_Ttl;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewFeatureId,
      vFeatureRegionFlds_Ttl_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function vFeatureRegionFlds_Ttl_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvFeatureRegionFlds_TtlEN.con_ViewFeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvFeatureRegionFlds_TtlEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvFeatureRegionFlds_TtlEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strViewFeatureId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvFeatureRegionFlds_Ttl = await vFeatureRegionFlds_Ttl_GetObjByViewFeatureIdCache(
    strViewFeatureId,
  );
  if (objvFeatureRegionFlds_Ttl == null) return '';
  if (objvFeatureRegionFlds_Ttl.GetFldValue(strOutFldName) == null) return '';
  return objvFeatureRegionFlds_Ttl.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFeatureRegionFlds_Ttl_SortFunDefa(
  a: clsvFeatureRegionFlds_TtlEN,
  b: clsvFeatureRegionFlds_TtlEN,
): number {
  return a.viewFeatureId.localeCompare(b.viewFeatureId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFeatureRegionFlds_Ttl_SortFunDefa2Fld(
  a: clsvFeatureRegionFlds_TtlEN,
  b: clsvFeatureRegionFlds_TtlEN,
): number {
  if (a.regionId == b.regionId) return a.regionName.localeCompare(b.regionName);
  else return a.regionId.localeCompare(b.regionId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vFeatureRegionFlds_Ttl_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvFeatureRegionFlds_TtlEN.con_ViewFeatureId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return a.viewFeatureId.localeCompare(b.viewFeatureId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_RegionId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_RegionName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.regionName == null) return -1;
          if (b.regionName == null) return 1;
          return a.regionName.localeCompare(b.regionName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_RegionTypeId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.regionTypeId == null) return -1;
          if (b.regionTypeId == null) return 1;
          return a.regionTypeId.localeCompare(b.regionTypeId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_RegionTypeName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.regionTypeName == null) return -1;
          if (b.regionTypeName == null) return 1;
          return a.regionTypeName.localeCompare(b.regionTypeName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_FeatureId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return a.featureId.localeCompare(b.featureId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_FeatureName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.featureName == null) return -1;
          if (b.featureName == null) return 1;
          return a.featureName.localeCompare(b.featureName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_KeyWords:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.keyWords == null) return -1;
          if (b.keyWords == null) return 1;
          return a.keyWords.localeCompare(b.keyWords);
        };
      case clsvFeatureRegionFlds_TtlEN.con_TabFeatureId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.tabFeatureId == null) return -1;
          if (b.tabFeatureId == null) return 1;
          return a.tabFeatureId.localeCompare(b.tabFeatureId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_TabFeatureName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.tabFeatureName == null) return -1;
          if (b.tabFeatureName == null) return 1;
          return a.tabFeatureName.localeCompare(b.tabFeatureName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_CheckTabFeature:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.checkTabFeature == null) return -1;
          if (b.checkTabFeature == null) return 1;
          return a.checkTabFeature.localeCompare(b.checkTabFeature);
        };
      case clsvFeatureRegionFlds_TtlEN.con_FeatureDescription:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.featureDescription == null) return -1;
          if (b.featureDescription == null) return 1;
          return a.featureDescription.localeCompare(b.featureDescription);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ButtonName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return a.buttonName.localeCompare(b.buttonName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ButtonName4Mvc:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return a.buttonName4Mvc.localeCompare(b.buttonName4Mvc);
        };
      case clsvFeatureRegionFlds_TtlEN.con_EventFuncName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.eventFuncName == null) return -1;
          if (b.eventFuncName == null) return 1;
          return a.eventFuncName.localeCompare(b.eventFuncName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.valueGivingModeId == null) return -1;
          if (b.valueGivingModeId == null) return 1;
          return a.valueGivingModeId.localeCompare(b.valueGivingModeId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.valueGivingModeName == null) return -1;
          if (b.valueGivingModeName == null) return 1;
          return a.valueGivingModeName.localeCompare(b.valueGivingModeName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_FuncName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.funcName == null) return -1;
          if (b.funcName == null) return 1;
          return a.funcName.localeCompare(b.funcName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_DefaultValue:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.defaultValue == null) return -1;
          if (b.defaultValue == null) return 1;
          return a.defaultValue.localeCompare(b.defaultValue);
        };
      case clsvFeatureRegionFlds_TtlEN.con_Text:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return a.text.localeCompare(b.text);
        };
      case clsvFeatureRegionFlds_TtlEN.con_GroupName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return a.groupName.localeCompare(b.groupName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ReleTabId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.releTabId == null) return -1;
          if (b.releTabId == null) return 1;
          return a.releTabId.localeCompare(b.releTabId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ReleFldId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.releFldId == null) return -1;
          if (b.releFldId == null) return 1;
          return a.releFldId.localeCompare(b.releFldId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_FieldTypeId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.fieldTypeId == null) return -1;
          if (b.fieldTypeId == null) return 1;
          return a.fieldTypeId.localeCompare(b.fieldTypeId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_FieldTypeName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.fieldTypeName == null) return -1;
          if (b.fieldTypeName == null) return 1;
          return a.fieldTypeName.localeCompare(b.fieldTypeName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ViewImplId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return a.viewImplId.localeCompare(b.viewImplId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ViewImplName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.viewImplName == null) return -1;
          if (b.viewImplName == null) return 1;
          return a.viewImplName.localeCompare(b.viewImplName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_CtlTypeId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.ctlTypeId == null) return -1;
          if (b.ctlTypeId == null) return 1;
          return a.ctlTypeId.localeCompare(b.ctlTypeId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_CtlTypeName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.ctlTypeName == null) return -1;
          if (b.ctlTypeName == null) return 1;
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_CtlCnName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.ctlCnName == null) return -1;
          if (b.ctlCnName == null) return 1;
          return a.ctlCnName.localeCompare(b.ctlCnName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_CtlTypeAbbr:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.ctlTypeAbbr == null) return -1;
          if (b.ctlTypeAbbr == null) return 1;
          return a.ctlTypeAbbr.localeCompare(b.ctlTypeAbbr);
        };
      case clsvFeatureRegionFlds_TtlEN.con_Height:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return a.height - b.height;
        };
      case clsvFeatureRegionFlds_TtlEN.con_Width:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return a.width - b.width;
        };
      case clsvFeatureRegionFlds_TtlEN.con_SeqNum:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return a.seqNum - b.seqNum;
        };
      case clsvFeatureRegionFlds_TtlEN.con_CssClass:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.cssClass == null) return -1;
          if (b.cssClass == null) return 1;
          return a.cssClass.localeCompare(b.cssClass);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ImageUrl:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.imageUrl == null) return -1;
          if (b.imageUrl == null) return 1;
          return a.imageUrl.localeCompare(b.imageUrl);
        };
      case clsvFeatureRegionFlds_TtlEN.con_InUse:
        return (a: clsvFeatureRegionFlds_TtlEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsvFeatureRegionFlds_TtlEN.con_UpdUser:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvFeatureRegionFlds_TtlEN.con_UpdDate:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvFeatureRegionFlds_TtlEN.con_Memo:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvFeatureRegionFlds_TtlEN.con_FldNum:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return a.fldNum - b.fldNum;
        };
      case clsvFeatureRegionFlds_TtlEN.con_RelaFldName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.relaFldName == null) return -1;
          if (b.relaFldName == null) return 1;
          return a.relaFldName.localeCompare(b.relaFldName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_RelaTabName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.relaTabName == null) return -1;
          if (b.relaTabName == null) return 1;
          return a.relaTabName.localeCompare(b.relaTabName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_PrjId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (a.prjId == null) return -1;
          if (b.prjId == null) return 1;
          return a.prjId.localeCompare(b.prjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFeatureRegionFlds_Ttl]中不存在!(in ${vFeatureRegionFlds_Ttl_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvFeatureRegionFlds_TtlEN.con_ViewFeatureId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return b.viewFeatureId.localeCompare(a.viewFeatureId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_RegionId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_RegionName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.regionName == null) return -1;
          if (a.regionName == null) return 1;
          return b.regionName.localeCompare(a.regionName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_RegionTypeId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.regionTypeId == null) return -1;
          if (a.regionTypeId == null) return 1;
          return b.regionTypeId.localeCompare(a.regionTypeId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_RegionTypeName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.regionTypeName == null) return -1;
          if (a.regionTypeName == null) return 1;
          return b.regionTypeName.localeCompare(a.regionTypeName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_FeatureId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return b.featureId.localeCompare(a.featureId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_FeatureName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.featureName == null) return -1;
          if (a.featureName == null) return 1;
          return b.featureName.localeCompare(a.featureName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_KeyWords:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.keyWords == null) return -1;
          if (a.keyWords == null) return 1;
          return b.keyWords.localeCompare(a.keyWords);
        };
      case clsvFeatureRegionFlds_TtlEN.con_TabFeatureId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.tabFeatureId == null) return -1;
          if (a.tabFeatureId == null) return 1;
          return b.tabFeatureId.localeCompare(a.tabFeatureId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_TabFeatureName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.tabFeatureName == null) return -1;
          if (a.tabFeatureName == null) return 1;
          return b.tabFeatureName.localeCompare(a.tabFeatureName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_CheckTabFeature:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.checkTabFeature == null) return -1;
          if (a.checkTabFeature == null) return 1;
          return b.checkTabFeature.localeCompare(a.checkTabFeature);
        };
      case clsvFeatureRegionFlds_TtlEN.con_FeatureDescription:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.featureDescription == null) return -1;
          if (a.featureDescription == null) return 1;
          return b.featureDescription.localeCompare(a.featureDescription);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ButtonName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return b.buttonName.localeCompare(a.buttonName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ButtonName4Mvc:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return b.buttonName4Mvc.localeCompare(a.buttonName4Mvc);
        };
      case clsvFeatureRegionFlds_TtlEN.con_EventFuncName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.eventFuncName == null) return -1;
          if (a.eventFuncName == null) return 1;
          return b.eventFuncName.localeCompare(a.eventFuncName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.valueGivingModeId == null) return -1;
          if (a.valueGivingModeId == null) return 1;
          return b.valueGivingModeId.localeCompare(a.valueGivingModeId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.valueGivingModeName == null) return -1;
          if (a.valueGivingModeName == null) return 1;
          return b.valueGivingModeName.localeCompare(a.valueGivingModeName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_FuncName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.funcName == null) return -1;
          if (a.funcName == null) return 1;
          return b.funcName.localeCompare(a.funcName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_DefaultValue:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.defaultValue == null) return -1;
          if (a.defaultValue == null) return 1;
          return b.defaultValue.localeCompare(a.defaultValue);
        };
      case clsvFeatureRegionFlds_TtlEN.con_Text:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return b.text.localeCompare(a.text);
        };
      case clsvFeatureRegionFlds_TtlEN.con_GroupName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return b.groupName.localeCompare(a.groupName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ReleTabId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.releTabId == null) return -1;
          if (a.releTabId == null) return 1;
          return b.releTabId.localeCompare(a.releTabId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ReleFldId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.releFldId == null) return -1;
          if (a.releFldId == null) return 1;
          return b.releFldId.localeCompare(a.releFldId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_FieldTypeId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.fieldTypeId == null) return -1;
          if (a.fieldTypeId == null) return 1;
          return b.fieldTypeId.localeCompare(a.fieldTypeId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_FieldTypeName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.fieldTypeName == null) return -1;
          if (a.fieldTypeName == null) return 1;
          return b.fieldTypeName.localeCompare(a.fieldTypeName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ViewImplId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return b.viewImplId.localeCompare(a.viewImplId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ViewImplName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.viewImplName == null) return -1;
          if (a.viewImplName == null) return 1;
          return b.viewImplName.localeCompare(a.viewImplName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_CtlTypeId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.ctlTypeId == null) return -1;
          if (a.ctlTypeId == null) return 1;
          return b.ctlTypeId.localeCompare(a.ctlTypeId);
        };
      case clsvFeatureRegionFlds_TtlEN.con_CtlTypeName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.ctlTypeName == null) return -1;
          if (a.ctlTypeName == null) return 1;
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_CtlCnName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.ctlCnName == null) return -1;
          if (a.ctlCnName == null) return 1;
          return b.ctlCnName.localeCompare(a.ctlCnName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_CtlTypeAbbr:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.ctlTypeAbbr == null) return -1;
          if (a.ctlTypeAbbr == null) return 1;
          return b.ctlTypeAbbr.localeCompare(a.ctlTypeAbbr);
        };
      case clsvFeatureRegionFlds_TtlEN.con_Height:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return b.height - a.height;
        };
      case clsvFeatureRegionFlds_TtlEN.con_Width:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return b.width - a.width;
        };
      case clsvFeatureRegionFlds_TtlEN.con_SeqNum:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return b.seqNum - a.seqNum;
        };
      case clsvFeatureRegionFlds_TtlEN.con_CssClass:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.cssClass == null) return -1;
          if (a.cssClass == null) return 1;
          return b.cssClass.localeCompare(a.cssClass);
        };
      case clsvFeatureRegionFlds_TtlEN.con_ImageUrl:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.imageUrl == null) return -1;
          if (a.imageUrl == null) return 1;
          return b.imageUrl.localeCompare(a.imageUrl);
        };
      case clsvFeatureRegionFlds_TtlEN.con_InUse:
        return (b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsvFeatureRegionFlds_TtlEN.con_UpdUser:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvFeatureRegionFlds_TtlEN.con_UpdDate:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvFeatureRegionFlds_TtlEN.con_Memo:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvFeatureRegionFlds_TtlEN.con_FldNum:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          return b.fldNum - a.fldNum;
        };
      case clsvFeatureRegionFlds_TtlEN.con_RelaFldName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.relaFldName == null) return -1;
          if (a.relaFldName == null) return 1;
          return b.relaFldName.localeCompare(a.relaFldName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_RelaTabName:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.relaTabName == null) return -1;
          if (a.relaTabName == null) return 1;
          return b.relaTabName.localeCompare(a.relaTabName);
        };
      case clsvFeatureRegionFlds_TtlEN.con_PrjId:
        return (a: clsvFeatureRegionFlds_TtlEN, b: clsvFeatureRegionFlds_TtlEN) => {
          if (b.prjId == null) return -1;
          if (a.prjId == null) return 1;
          return b.prjId.localeCompare(a.prjId);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vFeatureRegionFlds_Ttl]中不存在!(in ${vFeatureRegionFlds_Ttl_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vFeatureRegionFlds_Ttl_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvFeatureRegionFlds_TtlEN.con_ViewFeatureId:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.viewFeatureId === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_RegionId:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.regionId === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_RegionName:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.regionName === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_RegionTypeId:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.regionTypeId === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_RegionTypeName:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.regionTypeName === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_FeatureId:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.featureId === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_FeatureName:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.featureName === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_KeyWords:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.keyWords === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_TabFeatureId:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.tabFeatureId === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_TabFeatureName:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.tabFeatureName === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_CheckTabFeature:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.checkTabFeature === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_FeatureDescription:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.featureDescription === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_ButtonName:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.buttonName === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_ButtonName4Mvc:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.buttonName4Mvc === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_EventFuncName:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.eventFuncName === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeId:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.valueGivingModeId === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeName:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.valueGivingModeName === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_FuncName:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.funcName === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_DefaultValue:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.defaultValue === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_Text:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.text === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_GroupName:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.groupName === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_ReleTabId:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.releTabId === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_ReleFldId:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.releFldId === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_FieldTypeId:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.fieldTypeId === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_FieldTypeName:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.fieldTypeName === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_ViewImplId:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.viewImplId === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_ViewImplName:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.viewImplName === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_CtlTypeId:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.ctlTypeId === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_CtlTypeName:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.ctlTypeName === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_CtlCnName:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.ctlCnName === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_CtlTypeAbbr:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.ctlTypeAbbr === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_Height:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.height === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_Width:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.width === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_SeqNum:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.seqNum === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_CssClass:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.cssClass === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_ImageUrl:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.imageUrl === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_InUse:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.inUse === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_UpdUser:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.updUser === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_UpdDate:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.updDate === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_Memo:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.memo === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_FldNum:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.fldNum === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_RelaFldName:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.relaFldName === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_RelaTabName:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.relaTabName === value;
      };
    case clsvFeatureRegionFlds_TtlEN.con_PrjId:
      return (obj: clsvFeatureRegionFlds_TtlEN) => {
        return obj.prjId === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vFeatureRegionFlds_Ttl]中不存在!(in ${vFeatureRegionFlds_Ttl_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function vFeatureRegionFlds_Ttl_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvFeatureRegionFlds_TtlEN.con_ViewFeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvFeatureRegionFlds_Ttl = await vFeatureRegionFlds_Ttl_GetObjLstCache();
  if (arrvFeatureRegionFlds_Ttl == null) return [];
  let arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_Ttl;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvFeatureRegionFlds_TtlSel.length == 0) return [];
  return arrvFeatureRegionFlds_TtlSel.map((x) => x.viewFeatureId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vFeatureRegionFlds_Ttl_GetFirstIDAsync(
  strWhereCond: string,
): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFeatureRegionFlds_Ttl_Controller, strAction);

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
        vFeatureRegionFlds_Ttl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vFeatureRegionFlds_Ttl_Controller, strAction);

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
        vFeatureRegionFlds_Ttl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvFeatureRegionFlds_TtlEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vFeatureRegionFlds_Ttl_Controller, strAction);

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
      const objvFeatureRegionFlds_Ttl = vFeatureRegionFlds_Ttl_GetObjFromJsonObj(returnObj);
      return objvFeatureRegionFlds_Ttl;
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
        vFeatureRegionFlds_Ttl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvFeatureRegionFlds_TtlEN._CurrTabName;
  if (IsNullOrEmpty(clsvFeatureRegionFlds_TtlEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFeatureRegionFlds_TtlEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvFeatureRegionFlds_TtlExObjLstCache: Array<clsvFeatureRegionFlds_TtlEN> =
      CacheHelper.Get(strKey);
    const arrvFeatureRegionFlds_TtlObjLstT = vFeatureRegionFlds_Ttl_GetObjLstByJSONObjLst(
      arrvFeatureRegionFlds_TtlExObjLstCache,
    );
    return arrvFeatureRegionFlds_TtlObjLstT;
  }
  try {
    const arrvFeatureRegionFlds_TtlExObjLst = await vFeatureRegionFlds_Ttl_GetObjLstAsync(
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrvFeatureRegionFlds_TtlExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFeatureRegionFlds_TtlExObjLst.length,
    );
    console.log(strInfo);
    return arrvFeatureRegionFlds_TtlExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvFeatureRegionFlds_TtlEN._CurrTabName;
  if (IsNullOrEmpty(clsvFeatureRegionFlds_TtlEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFeatureRegionFlds_TtlEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFeatureRegionFlds_TtlExObjLstCache: Array<clsvFeatureRegionFlds_TtlEN> =
      JSON.parse(strTempObjLst);
    const arrvFeatureRegionFlds_TtlObjLstT = vFeatureRegionFlds_Ttl_GetObjLstByJSONObjLst(
      arrvFeatureRegionFlds_TtlExObjLstCache,
    );
    return arrvFeatureRegionFlds_TtlObjLstT;
  }
  try {
    const arrvFeatureRegionFlds_TtlExObjLst = await vFeatureRegionFlds_Ttl_GetObjLstAsync(
      strWhereCond,
    );
    localStorage.setItem(strKey, JSON.stringify(arrvFeatureRegionFlds_TtlExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFeatureRegionFlds_TtlExObjLst.length,
    );
    console.log(strInfo);
    return arrvFeatureRegionFlds_TtlExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvFeatureRegionFlds_TtlEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvFeatureRegionFlds_TtlObjLstCache: Array<clsvFeatureRegionFlds_TtlEN> =
      JSON.parse(strTempObjLst);
    return arrvFeatureRegionFlds_TtlObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vFeatureRegionFlds_Ttl_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvFeatureRegionFlds_TtlEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vFeatureRegionFlds_Ttl_Controller, strAction);

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
          vFeatureRegionFlds_Ttl_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureRegionFlds_Ttl_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureRegionFlds_Ttl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvFeatureRegionFlds_TtlEN._CurrTabName;
  if (IsNullOrEmpty(clsvFeatureRegionFlds_TtlEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvFeatureRegionFlds_TtlEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFeatureRegionFlds_TtlExObjLstCache: Array<clsvFeatureRegionFlds_TtlEN> =
      JSON.parse(strTempObjLst);
    const arrvFeatureRegionFlds_TtlObjLstT = vFeatureRegionFlds_Ttl_GetObjLstByJSONObjLst(
      arrvFeatureRegionFlds_TtlExObjLstCache,
    );
    return arrvFeatureRegionFlds_TtlObjLstT;
  }
  try {
    const arrvFeatureRegionFlds_TtlExObjLst = await vFeatureRegionFlds_Ttl_GetObjLstAsync(
      strWhereCond,
    );
    sessionStorage.setItem(strKey, JSON.stringify(arrvFeatureRegionFlds_TtlExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvFeatureRegionFlds_TtlExObjLst.length,
    );
    console.log(strInfo);
    return arrvFeatureRegionFlds_TtlExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvFeatureRegionFlds_TtlEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvFeatureRegionFlds_TtlObjLstCache: Array<clsvFeatureRegionFlds_TtlEN> =
      JSON.parse(strTempObjLst);
    return arrvFeatureRegionFlds_TtlObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFeatureRegionFlds_Ttl_GetObjLstCache(): Promise<
  Array<clsvFeatureRegionFlds_TtlEN>
> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvFeatureRegionFlds_TtlObjLstCache;
  switch (clsvFeatureRegionFlds_TtlEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFeatureRegionFlds_TtlObjLstCache = await vFeatureRegionFlds_Ttl_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvFeatureRegionFlds_TtlObjLstCache = await vFeatureRegionFlds_Ttl_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvFeatureRegionFlds_TtlObjLstCache = await vFeatureRegionFlds_Ttl_GetObjLstClientCache();
      break;
    default:
      arrvFeatureRegionFlds_TtlObjLstCache = await vFeatureRegionFlds_Ttl_GetObjLstClientCache();
      break;
  }
  return arrvFeatureRegionFlds_TtlObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vFeatureRegionFlds_Ttl_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvFeatureRegionFlds_TtlObjLstCache;
  switch (clsvFeatureRegionFlds_TtlEN.CacheModeId) {
    case '04': //sessionStorage
      arrvFeatureRegionFlds_TtlObjLstCache =
        await vFeatureRegionFlds_Ttl_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvFeatureRegionFlds_TtlObjLstCache =
        await vFeatureRegionFlds_Ttl_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvFeatureRegionFlds_TtlObjLstCache = null;
      break;
    default:
      arrvFeatureRegionFlds_TtlObjLstCache = null;
      break;
  }
  return arrvFeatureRegionFlds_TtlObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrViewFeatureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vFeatureRegionFlds_Ttl_GetSubObjLstCache(
  objvFeatureRegionFlds_TtlCond: clsvFeatureRegionFlds_TtlEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvFeatureRegionFlds_TtlObjLstCache = await vFeatureRegionFlds_Ttl_GetObjLstCache();
  let arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlObjLstCache;
  if (
    objvFeatureRegionFlds_TtlCond.sfFldComparisonOp == null ||
    objvFeatureRegionFlds_TtlCond.sfFldComparisonOp == ''
  )
    return arrvFeatureRegionFlds_TtlSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFeatureRegionFlds_TtlCond.sfFldComparisonOp,
  );
  //console.log("clsvFeatureRegionFlds_TtlWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFeatureRegionFlds_TtlCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureRegionFlds_TtlCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFeatureRegionFlds_TtlSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFeatureRegionFlds_TtlCond),
      vFeatureRegionFlds_Ttl_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFeatureRegionFlds_TtlEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewFeatureId:关键字列表
 * @returns 对象列表
 **/
export async function vFeatureRegionFlds_Ttl_GetObjLstByViewFeatureIdLstAsync(
  arrViewFeatureId: Array<string>,
): Promise<Array<clsvFeatureRegionFlds_TtlEN>> {
  const strThisFuncName = 'GetObjLstByViewFeatureIdLstAsync';
  const strAction = 'GetObjLstByViewFeatureIdLst';
  const strUrl = GetWebApiUrl(vFeatureRegionFlds_Ttl_Controller, strAction);

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
          vFeatureRegionFlds_Ttl_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureRegionFlds_Ttl_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureRegionFlds_Ttl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_GetObjLstByViewFeatureIdLstCache(
  arrViewFeatureIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByViewFeatureIdLstCache';
  try {
    const arrvFeatureRegionFlds_TtlObjLstCache = await vFeatureRegionFlds_Ttl_GetObjLstCache();
    const arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlObjLstCache.filter(
      (x) => arrViewFeatureIdLst.indexOf(x.viewFeatureId) > -1,
    );
    return arrvFeatureRegionFlds_TtlSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewFeatureIdLst.join(','),
      vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvFeatureRegionFlds_TtlEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vFeatureRegionFlds_Ttl_Controller, strAction);

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
          vFeatureRegionFlds_Ttl_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureRegionFlds_Ttl_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureRegionFlds_Ttl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvFeatureRegionFlds_TtlEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vFeatureRegionFlds_Ttl_Controller, strAction);

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
          vFeatureRegionFlds_Ttl_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureRegionFlds_Ttl_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureRegionFlds_Ttl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFeatureRegionFlds_TtlEN>();
  const arrvFeatureRegionFlds_TtlObjLstCache = await vFeatureRegionFlds_Ttl_GetObjLstCache();
  if (arrvFeatureRegionFlds_TtlObjLstCache.length == 0) return arrvFeatureRegionFlds_TtlObjLstCache;
  let arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvFeatureRegionFlds_TtlCond = new clsvFeatureRegionFlds_TtlEN();
  ObjectAssign(objvFeatureRegionFlds_TtlCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvFeatureRegionFlds_TtlWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureRegionFlds_TtlCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFeatureRegionFlds_TtlSel.length == 0) return arrvFeatureRegionFlds_TtlSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.sort(
        vFeatureRegionFlds_Ttl_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.sort(objPagerPara.sortFun);
    }
    arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.slice(intStart, intEnd);
    return arrvFeatureRegionFlds_TtlSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vFeatureRegionFlds_Ttl_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvFeatureRegionFlds_TtlEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vFeatureRegionFlds_Ttl_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvFeatureRegionFlds_TtlEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvFeatureRegionFlds_TtlEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vFeatureRegionFlds_Ttl_Controller, strAction);

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
          vFeatureRegionFlds_Ttl_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vFeatureRegionFlds_Ttl_GetObjLstByJSONObjLst(returnObjLst);
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
        vFeatureRegionFlds_Ttl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_IsExistRecordCache(
  objvFeatureRegionFlds_TtlCond: clsvFeatureRegionFlds_TtlEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvFeatureRegionFlds_TtlObjLstCache = await vFeatureRegionFlds_Ttl_GetObjLstCache();
  if (arrvFeatureRegionFlds_TtlObjLstCache == null) return false;
  let arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlObjLstCache;
  if (
    objvFeatureRegionFlds_TtlCond.sfFldComparisonOp == null ||
    objvFeatureRegionFlds_TtlCond.sfFldComparisonOp == ''
  )
    return arrvFeatureRegionFlds_TtlSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFeatureRegionFlds_TtlCond.sfFldComparisonOp,
  );
  //console.log("clsvFeatureRegionFlds_TtlWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFeatureRegionFlds_TtlCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureRegionFlds_TtlCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvFeatureRegionFlds_TtlSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvFeatureRegionFlds_TtlCond),
      vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vFeatureRegionFlds_Ttl_Controller, strAction);

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
        vFeatureRegionFlds_Ttl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_IsExistCache(strViewFeatureId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvFeatureRegionFlds_TtlObjLstCache = await vFeatureRegionFlds_Ttl_GetObjLstCache();
  if (arrvFeatureRegionFlds_TtlObjLstCache == null) return false;
  try {
    const arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlObjLstCache.filter(
      (x) => x.viewFeatureId == strViewFeatureId,
    );
    if (arrvFeatureRegionFlds_TtlSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strViewFeatureId,
      vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_IsExistAsync(
  strViewFeatureId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vFeatureRegionFlds_Ttl_Controller, strAction);

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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vFeatureRegionFlds_Ttl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureRegionFlds_Ttl_ConstructorName,
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
export async function vFeatureRegionFlds_Ttl_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vFeatureRegionFlds_Ttl_Controller, strAction);

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
        vFeatureRegionFlds_Ttl_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vFeatureRegionFlds_Ttl_ConstructorName,
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
 * @param objvFeatureRegionFlds_TtlCond:条件对象
 * @returns 对象列表记录数
 */
export async function vFeatureRegionFlds_Ttl_GetRecCountByCondCache(
  objvFeatureRegionFlds_TtlCond: clsvFeatureRegionFlds_TtlEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvFeatureRegionFlds_TtlObjLstCache = await vFeatureRegionFlds_Ttl_GetObjLstCache();
  if (arrvFeatureRegionFlds_TtlObjLstCache == null) return 0;
  let arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlObjLstCache;
  if (
    objvFeatureRegionFlds_TtlCond.sfFldComparisonOp == null ||
    objvFeatureRegionFlds_TtlCond.sfFldComparisonOp == ''
  )
    return arrvFeatureRegionFlds_TtlSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvFeatureRegionFlds_TtlCond.sfFldComparisonOp,
  );
  //console.log("clsvFeatureRegionFlds_TtlWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvFeatureRegionFlds_TtlCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvFeatureRegionFlds_TtlCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvFeatureRegionFlds_TtlSel = arrvFeatureRegionFlds_TtlSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvFeatureRegionFlds_TtlSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvFeatureRegionFlds_TtlCond),
      vFeatureRegionFlds_Ttl_ConstructorName,
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
export function vFeatureRegionFlds_Ttl_GetWebApiUrl(
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
export function vFeatureRegionFlds_Ttl_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvFeatureRegionFlds_TtlEN._CurrTabName;
    switch (clsvFeatureRegionFlds_TtlEN.CacheModeId) {
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
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFeatureRegionFlds_Ttl_GetJSONStrByObj(
  pobjvFeatureRegionFlds_TtlEN: clsvFeatureRegionFlds_TtlEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvFeatureRegionFlds_TtlEN);
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
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vFeatureRegionFlds_Ttl_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvFeatureRegionFlds_TtlEN> {
  let arrvFeatureRegionFlds_TtlObjLst = new Array<clsvFeatureRegionFlds_TtlEN>();
  if (strJSON === '') {
    return arrvFeatureRegionFlds_TtlObjLst;
  }
  try {
    arrvFeatureRegionFlds_TtlObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvFeatureRegionFlds_TtlObjLst;
  }
  return arrvFeatureRegionFlds_TtlObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvFeatureRegionFlds_TtlObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vFeatureRegionFlds_Ttl_GetObjLstByJSONObjLst(
  arrvFeatureRegionFlds_TtlObjLstS: Array<clsvFeatureRegionFlds_TtlEN>,
): Array<clsvFeatureRegionFlds_TtlEN> {
  const arrvFeatureRegionFlds_TtlObjLst = new Array<clsvFeatureRegionFlds_TtlEN>();
  for (const objInFor of arrvFeatureRegionFlds_TtlObjLstS) {
    const obj1 = vFeatureRegionFlds_Ttl_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvFeatureRegionFlds_TtlObjLst.push(obj1);
  }
  return arrvFeatureRegionFlds_TtlObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vFeatureRegionFlds_Ttl_GetObjByJSONStr(
  strJSON: string,
): clsvFeatureRegionFlds_TtlEN {
  let pobjvFeatureRegionFlds_TtlEN = new clsvFeatureRegionFlds_TtlEN();
  if (strJSON === '') {
    return pobjvFeatureRegionFlds_TtlEN;
  }
  try {
    pobjvFeatureRegionFlds_TtlEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvFeatureRegionFlds_TtlEN;
  }
  return pobjvFeatureRegionFlds_TtlEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vFeatureRegionFlds_Ttl_GetCombineCondition(
  objvFeatureRegionFlds_TtlCond: clsvFeatureRegionFlds_TtlEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_ViewFeatureId,
    ) == true
  ) {
    const strComparisonOpViewFeatureId: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[
        clsvFeatureRegionFlds_TtlEN.con_ViewFeatureId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_ViewFeatureId,
      objvFeatureRegionFlds_TtlCond.viewFeatureId,
      strComparisonOpViewFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_RegionId,
    ) == true
  ) {
    const strComparisonOpRegionId: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_RegionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_RegionId,
      objvFeatureRegionFlds_TtlCond.regionId,
      strComparisonOpRegionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_RegionName,
    ) == true
  ) {
    const strComparisonOpRegionName: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_RegionName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_RegionName,
      objvFeatureRegionFlds_TtlCond.regionName,
      strComparisonOpRegionName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_RegionTypeId,
    ) == true
  ) {
    const strComparisonOpRegionTypeId: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[
        clsvFeatureRegionFlds_TtlEN.con_RegionTypeId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_RegionTypeId,
      objvFeatureRegionFlds_TtlCond.regionTypeId,
      strComparisonOpRegionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_RegionTypeName,
    ) == true
  ) {
    const strComparisonOpRegionTypeName: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[
        clsvFeatureRegionFlds_TtlEN.con_RegionTypeName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_RegionTypeName,
      objvFeatureRegionFlds_TtlCond.regionTypeName,
      strComparisonOpRegionTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_FeatureId,
    ) == true
  ) {
    const strComparisonOpFeatureId: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_FeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_FeatureId,
      objvFeatureRegionFlds_TtlCond.featureId,
      strComparisonOpFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_FeatureName,
    ) == true
  ) {
    const strComparisonOpFeatureName: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_FeatureName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_FeatureName,
      objvFeatureRegionFlds_TtlCond.featureName,
      strComparisonOpFeatureName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_KeyWords,
    ) == true
  ) {
    const strComparisonOpKeyWords: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_KeyWords];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_KeyWords,
      objvFeatureRegionFlds_TtlCond.keyWords,
      strComparisonOpKeyWords,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_TabFeatureId,
    ) == true
  ) {
    const strComparisonOpTabFeatureId: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[
        clsvFeatureRegionFlds_TtlEN.con_TabFeatureId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_TabFeatureId,
      objvFeatureRegionFlds_TtlCond.tabFeatureId,
      strComparisonOpTabFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_TabFeatureName,
    ) == true
  ) {
    const strComparisonOpTabFeatureName: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[
        clsvFeatureRegionFlds_TtlEN.con_TabFeatureName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_TabFeatureName,
      objvFeatureRegionFlds_TtlCond.tabFeatureName,
      strComparisonOpTabFeatureName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_CheckTabFeature,
    ) == true
  ) {
    const strComparisonOpCheckTabFeature: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[
        clsvFeatureRegionFlds_TtlEN.con_CheckTabFeature
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_CheckTabFeature,
      objvFeatureRegionFlds_TtlCond.checkTabFeature,
      strComparisonOpCheckTabFeature,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_FeatureDescription,
    ) == true
  ) {
    const strComparisonOpFeatureDescription: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[
        clsvFeatureRegionFlds_TtlEN.con_FeatureDescription
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_FeatureDescription,
      objvFeatureRegionFlds_TtlCond.featureDescription,
      strComparisonOpFeatureDescription,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_ButtonName,
    ) == true
  ) {
    const strComparisonOpButtonName: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_ButtonName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_ButtonName,
      objvFeatureRegionFlds_TtlCond.buttonName,
      strComparisonOpButtonName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_ButtonName4Mvc,
    ) == true
  ) {
    const strComparisonOpButtonName4Mvc: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[
        clsvFeatureRegionFlds_TtlEN.con_ButtonName4Mvc
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_ButtonName4Mvc,
      objvFeatureRegionFlds_TtlCond.buttonName4Mvc,
      strComparisonOpButtonName4Mvc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_EventFuncName,
    ) == true
  ) {
    const strComparisonOpEventFuncName: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[
        clsvFeatureRegionFlds_TtlEN.con_EventFuncName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_EventFuncName,
      objvFeatureRegionFlds_TtlCond.eventFuncName,
      strComparisonOpEventFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeId,
    ) == true
  ) {
    const strComparisonOpValueGivingModeId: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[
        clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeId,
      objvFeatureRegionFlds_TtlCond.valueGivingModeId,
      strComparisonOpValueGivingModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeName,
    ) == true
  ) {
    const strComparisonOpValueGivingModeName: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[
        clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_ValueGivingModeName,
      objvFeatureRegionFlds_TtlCond.valueGivingModeName,
      strComparisonOpValueGivingModeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_FuncName,
    ) == true
  ) {
    const strComparisonOpFuncName: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_FuncName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_FuncName,
      objvFeatureRegionFlds_TtlCond.funcName,
      strComparisonOpFuncName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_DefaultValue,
    ) == true
  ) {
    const strComparisonOpDefaultValue: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[
        clsvFeatureRegionFlds_TtlEN.con_DefaultValue
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_DefaultValue,
      objvFeatureRegionFlds_TtlCond.defaultValue,
      strComparisonOpDefaultValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_Text,
    ) == true
  ) {
    const strComparisonOpText: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_Text];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_Text,
      objvFeatureRegionFlds_TtlCond.text,
      strComparisonOpText,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_GroupName,
    ) == true
  ) {
    const strComparisonOpGroupName: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_GroupName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_GroupName,
      objvFeatureRegionFlds_TtlCond.groupName,
      strComparisonOpGroupName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_ReleTabId,
    ) == true
  ) {
    const strComparisonOpReleTabId: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_ReleTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_ReleTabId,
      objvFeatureRegionFlds_TtlCond.releTabId,
      strComparisonOpReleTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_ReleFldId,
    ) == true
  ) {
    const strComparisonOpReleFldId: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_ReleFldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_ReleFldId,
      objvFeatureRegionFlds_TtlCond.releFldId,
      strComparisonOpReleFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_FieldTypeId,
    ) == true
  ) {
    const strComparisonOpFieldTypeId: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_FieldTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_FieldTypeId,
      objvFeatureRegionFlds_TtlCond.fieldTypeId,
      strComparisonOpFieldTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_FieldTypeName,
    ) == true
  ) {
    const strComparisonOpFieldTypeName: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[
        clsvFeatureRegionFlds_TtlEN.con_FieldTypeName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_FieldTypeName,
      objvFeatureRegionFlds_TtlCond.fieldTypeName,
      strComparisonOpFieldTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_ViewImplId,
    ) == true
  ) {
    const strComparisonOpViewImplId: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_ViewImplId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_ViewImplId,
      objvFeatureRegionFlds_TtlCond.viewImplId,
      strComparisonOpViewImplId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_ViewImplName,
    ) == true
  ) {
    const strComparisonOpViewImplName: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[
        clsvFeatureRegionFlds_TtlEN.con_ViewImplName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_ViewImplName,
      objvFeatureRegionFlds_TtlCond.viewImplName,
      strComparisonOpViewImplName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_CtlTypeId,
    ) == true
  ) {
    const strComparisonOpCtlTypeId: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_CtlTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_CtlTypeId,
      objvFeatureRegionFlds_TtlCond.ctlTypeId,
      strComparisonOpCtlTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_CtlTypeName,
    ) == true
  ) {
    const strComparisonOpCtlTypeName: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_CtlTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_CtlTypeName,
      objvFeatureRegionFlds_TtlCond.ctlTypeName,
      strComparisonOpCtlTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_CtlCnName,
    ) == true
  ) {
    const strComparisonOpCtlCnName: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_CtlCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_CtlCnName,
      objvFeatureRegionFlds_TtlCond.ctlCnName,
      strComparisonOpCtlCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_CtlTypeAbbr,
    ) == true
  ) {
    const strComparisonOpCtlTypeAbbr: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_CtlTypeAbbr];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_CtlTypeAbbr,
      objvFeatureRegionFlds_TtlCond.ctlTypeAbbr,
      strComparisonOpCtlTypeAbbr,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_Height,
    ) == true
  ) {
    const strComparisonOpHeight: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_Height];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFeatureRegionFlds_TtlEN.con_Height,
      objvFeatureRegionFlds_TtlCond.height,
      strComparisonOpHeight,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_Width,
    ) == true
  ) {
    const strComparisonOpWidth: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_Width];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFeatureRegionFlds_TtlEN.con_Width,
      objvFeatureRegionFlds_TtlCond.width,
      strComparisonOpWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_SeqNum,
    ) == true
  ) {
    const strComparisonOpSeqNum: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_SeqNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFeatureRegionFlds_TtlEN.con_SeqNum,
      objvFeatureRegionFlds_TtlCond.seqNum,
      strComparisonOpSeqNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_CssClass,
    ) == true
  ) {
    const strComparisonOpCssClass: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_CssClass];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_CssClass,
      objvFeatureRegionFlds_TtlCond.cssClass,
      strComparisonOpCssClass,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_ImageUrl,
    ) == true
  ) {
    const strComparisonOpImageUrl: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_ImageUrl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_ImageUrl,
      objvFeatureRegionFlds_TtlCond.imageUrl,
      strComparisonOpImageUrl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_InUse,
    ) == true
  ) {
    if (objvFeatureRegionFlds_TtlCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsvFeatureRegionFlds_TtlEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvFeatureRegionFlds_TtlEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_UpdUser,
      objvFeatureRegionFlds_TtlCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_UpdDate,
      objvFeatureRegionFlds_TtlCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_Memo,
      objvFeatureRegionFlds_TtlCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_FldNum,
    ) == true
  ) {
    const strComparisonOpFldNum: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_FldNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvFeatureRegionFlds_TtlEN.con_FldNum,
      objvFeatureRegionFlds_TtlCond.fldNum,
      strComparisonOpFldNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_RelaFldName,
    ) == true
  ) {
    const strComparisonOpRelaFldName: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_RelaFldName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_RelaFldName,
      objvFeatureRegionFlds_TtlCond.relaFldName,
      strComparisonOpRelaFldName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_RelaTabName,
    ) == true
  ) {
    const strComparisonOpRelaTabName: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_RelaTabName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_RelaTabName,
      objvFeatureRegionFlds_TtlCond.relaTabName,
      strComparisonOpRelaTabName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp,
      clsvFeatureRegionFlds_TtlEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objvFeatureRegionFlds_TtlCond.dicFldComparisonOp[clsvFeatureRegionFlds_TtlEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvFeatureRegionFlds_TtlEN.con_PrjId,
      objvFeatureRegionFlds_TtlCond.prjId,
      strComparisonOpPrjId,
    );
  }
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvFeatureRegionFlds_TtlENS:源对象
 * @param objvFeatureRegionFlds_TtlENT:目标对象
 */
export function vFeatureRegionFlds_Ttl_GetObjFromJsonObj(
  objvFeatureRegionFlds_TtlENS: clsvFeatureRegionFlds_TtlEN,
): clsvFeatureRegionFlds_TtlEN {
  const objvFeatureRegionFlds_TtlENT: clsvFeatureRegionFlds_TtlEN =
    new clsvFeatureRegionFlds_TtlEN();
  ObjectAssign(objvFeatureRegionFlds_TtlENT, objvFeatureRegionFlds_TtlENS);
  return objvFeatureRegionFlds_TtlENT;
}
