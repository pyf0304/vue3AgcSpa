/**
 * 类名:clsCMFeatureWApi
 * 表名:CMFeature(00050517)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 16:50:05
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:代码管理(CodeMan)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * CM功能(CMFeature)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2024年01月23日.
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
import { clsCMFeatureEN } from '@/ts/L0Entity/CodeMan/clsCMFeatureEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const cMFeature_Controller = 'CMFeatureApi';
export const cMFeature_ConstructorName = 'cMFeature';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCmFeatureId:关键字
 * @returns 对象
 **/
export async function CMFeature_GetObjByCmFeatureIdAsync(
  strCmFeatureId: string,
): Promise<clsCMFeatureEN | null> {
  const strThisFuncName = 'GetObjByCmFeatureIdAsync';

  if (IsNullOrEmpty(strCmFeatureId) == true) {
    const strMsg = Format(
      '参数:[strCmFeatureId]不能为空!(In clsCMFeatureWApi.GetObjByCmFeatureIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmFeatureId]的长度:[{0}]不正确!(clsCMFeatureWApi.GetObjByCmFeatureIdAsync)',
      strCmFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByCmFeatureId';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmFeatureId,
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
      const objCMFeature = CMFeature_GetObjFromJsonObj(returnObj);
      return objCMFeature;
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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param strCmFeatureId:所给的关键字
 * @returns 对象
 */
export async function CMFeature_GetObjByCmFeatureIdCache(
  strCmFeatureId: string,
  strCmPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByCmFeatureIdCache';

  if (IsNullOrEmpty(strCmFeatureId) == true) {
    const strMsg = Format(
      '参数:[strCmFeatureId]不能为空!(In clsCMFeatureWApi.GetObjByCmFeatureIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmFeatureId]的长度:[{0}]不正确!(clsCMFeatureWApi.GetObjByCmFeatureIdCache)',
      strCmFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCMFeatureObjLstCache = await CMFeature_GetObjLstCache(strCmPrjId);
  try {
    const arrCMFeatureSel = arrCMFeatureObjLstCache.filter((x) => x.cmFeatureId == strCmFeatureId);
    let objCMFeature: clsCMFeatureEN;
    if (arrCMFeatureSel.length > 0) {
      objCMFeature = arrCMFeatureSel[0];
      return objCMFeature;
    } else {
      if (bolTryAsyncOnce == true) {
        const objCMFeatureConst = await CMFeature_GetObjByCmFeatureIdAsync(strCmFeatureId);
        if (objCMFeatureConst != null) {
          CMFeature_ReFreshThisCache(strCmPrjId);
          return objCMFeatureConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCmFeatureId,
      cMFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strCmFeatureId:所给的关键字
 * @returns 对象
 */
export async function CMFeature_GetObjByCmFeatureIdlocalStorage(strCmFeatureId: string) {
  const strThisFuncName = 'GetObjByCmFeatureIdlocalStorage';

  if (IsNullOrEmpty(strCmFeatureId) == true) {
    const strMsg = Format(
      '参数:[strCmFeatureId]不能为空!(In clsCMFeatureWApi.GetObjByCmFeatureIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmFeatureId]的长度:[{0}]不正确!(clsCMFeatureWApi.GetObjByCmFeatureIdlocalStorage)',
      strCmFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsCMFeatureEN._CurrTabName, strCmFeatureId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objCMFeatureCache: clsCMFeatureEN = JSON.parse(strTempObj);
    return objCMFeatureCache;
  }
  try {
    const objCMFeature = await CMFeature_GetObjByCmFeatureIdAsync(strCmFeatureId);
    if (objCMFeature != null) {
      localStorage.setItem(strKey, JSON.stringify(objCMFeature));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objCMFeature;
    }
    return objCMFeature;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strCmFeatureId,
      cMFeature_ConstructorName,
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
 * @param objCMFeature:所给的对象
 * @returns 对象
 */
export async function CMFeature_UpdateObjInLstCache(
  objCMFeature: clsCMFeatureEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrCMFeatureObjLstCache = await CMFeature_GetObjLstCache(strCmPrjId);
    const obj = arrCMFeatureObjLstCache.find(
      (x) => x.featureName == objCMFeature.featureName && x.cmPrjId == objCMFeature.cmPrjId,
    );
    if (obj != null) {
      objCMFeature.cmFeatureId = obj.cmFeatureId;
      ObjectAssign(obj, objCMFeature);
    } else {
      arrCMFeatureObjLstCache.push(objCMFeature);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      cMFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCmFeatureId:所给的关键字
 * @returns 对象
 */
export async function CMFeature_GetNameByCmFeatureIdCache(
  strCmFeatureId: string,
  strCmPrjId: string,
) {
  if (IsNullOrEmpty(strCmFeatureId) == true) {
    const strMsg = Format(
      '参数:[strCmFeatureId]不能为空!(In clsCMFeatureWApi.GetNameByCmFeatureIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmFeatureId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCmFeatureId]的长度:[{0}]不正确!(clsCMFeatureWApi.GetNameByCmFeatureIdCache)',
      strCmFeatureId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrCMFeatureObjLstCache = await CMFeature_GetObjLstCache(strCmPrjId);
  if (arrCMFeatureObjLstCache == null) return '';
  try {
    const arrCMFeatureSel = arrCMFeatureObjLstCache.filter((x) => x.cmFeatureId == strCmFeatureId);
    let objCMFeature: clsCMFeatureEN;
    if (arrCMFeatureSel.length > 0) {
      objCMFeature = arrCMFeatureSel[0];
      return objCMFeature.featureName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strCmFeatureId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function CMFeature_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strCmPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strCmPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strCmPrjIdClassfy]不能为空!(In clsCMFeatureWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjIdClassfy.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjIdClassfy]的长度:[{0}]不正确!(clsCMFeatureWApi.func)',
      strCmPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsCMFeatureEN.con_CmFeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsCMFeatureEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsCMFeatureEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strCmFeatureId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objCMFeature = await CMFeature_GetObjByCmFeatureIdCache(strCmFeatureId, strCmPrjIdClassfy);
  if (objCMFeature == null) return '';
  if (objCMFeature.GetFldValue(strOutFldName) == null) return '';
  return objCMFeature.GetFldValue(strOutFldName).toString();
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
export function CMFeature_SortFunDefa(a: clsCMFeatureEN, b: clsCMFeatureEN): number {
  return a.cmFeatureId.localeCompare(b.cmFeatureId);
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
export function CMFeature_SortFunDefa2Fld(a: clsCMFeatureEN, b: clsCMFeatureEN): number {
  if (a.featureName == b.featureName) return a.featureENName.localeCompare(b.featureENName);
  else return a.featureName.localeCompare(b.featureName);
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
export function CMFeature_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCMFeatureEN.con_CmFeatureId:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return a.cmFeatureId.localeCompare(b.cmFeatureId);
        };
      case clsCMFeatureEN.con_FeatureName:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return a.featureName.localeCompare(b.featureName);
        };
      case clsCMFeatureEN.con_FeatureENName:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (a.featureENName == null) return -1;
          if (b.featureENName == null) return 1;
          return a.featureENName.localeCompare(b.featureENName);
        };
      case clsCMFeatureEN.con_KeyWords:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (a.keyWords == null) return -1;
          if (b.keyWords == null) return 1;
          return a.keyWords.localeCompare(b.keyWords);
        };
      case clsCMFeatureEN.con_FeatureDescription:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (a.featureDescription == null) return -1;
          if (b.featureDescription == null) return 1;
          return a.featureDescription.localeCompare(b.featureDescription);
        };
      case clsCMFeatureEN.con_CmParentFeatureId:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (a.cmParentFeatureId == null) return -1;
          if (b.cmParentFeatureId == null) return 1;
          return a.cmParentFeatureId.localeCompare(b.cmParentFeatureId);
        };
      case clsCMFeatureEN.con_ParentFeatureName:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (a.parentFeatureName == null) return -1;
          if (b.parentFeatureName == null) return 1;
          return a.parentFeatureName.localeCompare(b.parentFeatureName);
        };
      case clsCMFeatureEN.con_CmFeatureTypeId:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return a.cmFeatureTypeId.localeCompare(b.cmFeatureTypeId);
        };
      case clsCMFeatureEN.con_CreateUserId:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return a.createUserId.localeCompare(b.createUserId);
        };
      case clsCMFeatureEN.con_InUse:
        return (a: clsCMFeatureEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsCMFeatureEN.con_OrderNum:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsCMFeatureEN.con_FuncModuleAgcId:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
        };
      case clsCMFeatureEN.con_CmPrjId:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsCMFeatureEN.con_PrjId:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsCMFeatureEN.con_UpdDate:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsCMFeatureEN.con_UpdUser:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsCMFeatureEN.con_Memo:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMFeature]中不存在!(in ${cMFeature_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsCMFeatureEN.con_CmFeatureId:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return b.cmFeatureId.localeCompare(a.cmFeatureId);
        };
      case clsCMFeatureEN.con_FeatureName:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return b.featureName.localeCompare(a.featureName);
        };
      case clsCMFeatureEN.con_FeatureENName:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (b.featureENName == null) return -1;
          if (a.featureENName == null) return 1;
          return b.featureENName.localeCompare(a.featureENName);
        };
      case clsCMFeatureEN.con_KeyWords:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (b.keyWords == null) return -1;
          if (a.keyWords == null) return 1;
          return b.keyWords.localeCompare(a.keyWords);
        };
      case clsCMFeatureEN.con_FeatureDescription:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (b.featureDescription == null) return -1;
          if (a.featureDescription == null) return 1;
          return b.featureDescription.localeCompare(a.featureDescription);
        };
      case clsCMFeatureEN.con_CmParentFeatureId:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (b.cmParentFeatureId == null) return -1;
          if (a.cmParentFeatureId == null) return 1;
          return b.cmParentFeatureId.localeCompare(a.cmParentFeatureId);
        };
      case clsCMFeatureEN.con_ParentFeatureName:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (b.parentFeatureName == null) return -1;
          if (a.parentFeatureName == null) return 1;
          return b.parentFeatureName.localeCompare(a.parentFeatureName);
        };
      case clsCMFeatureEN.con_CmFeatureTypeId:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return b.cmFeatureTypeId.localeCompare(a.cmFeatureTypeId);
        };
      case clsCMFeatureEN.con_CreateUserId:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return b.createUserId.localeCompare(a.createUserId);
        };
      case clsCMFeatureEN.con_InUse:
        return (b: clsCMFeatureEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsCMFeatureEN.con_OrderNum:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsCMFeatureEN.con_FuncModuleAgcId:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
        };
      case clsCMFeatureEN.con_CmPrjId:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsCMFeatureEN.con_PrjId:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsCMFeatureEN.con_UpdDate:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsCMFeatureEN.con_UpdUser:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsCMFeatureEN.con_Memo:
        return (a: clsCMFeatureEN, b: clsCMFeatureEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[CMFeature]中不存在!(in ${cMFeature_ConstructorName}.${strThisFuncName})`;
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
export async function CMFeature_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsCMFeatureEN.con_CmFeatureId:
      return (obj: clsCMFeatureEN) => {
        return obj.cmFeatureId === value;
      };
    case clsCMFeatureEN.con_FeatureName:
      return (obj: clsCMFeatureEN) => {
        return obj.featureName === value;
      };
    case clsCMFeatureEN.con_FeatureENName:
      return (obj: clsCMFeatureEN) => {
        return obj.featureENName === value;
      };
    case clsCMFeatureEN.con_KeyWords:
      return (obj: clsCMFeatureEN) => {
        return obj.keyWords === value;
      };
    case clsCMFeatureEN.con_FeatureDescription:
      return (obj: clsCMFeatureEN) => {
        return obj.featureDescription === value;
      };
    case clsCMFeatureEN.con_CmParentFeatureId:
      return (obj: clsCMFeatureEN) => {
        return obj.cmParentFeatureId === value;
      };
    case clsCMFeatureEN.con_ParentFeatureName:
      return (obj: clsCMFeatureEN) => {
        return obj.parentFeatureName === value;
      };
    case clsCMFeatureEN.con_CmFeatureTypeId:
      return (obj: clsCMFeatureEN) => {
        return obj.cmFeatureTypeId === value;
      };
    case clsCMFeatureEN.con_CreateUserId:
      return (obj: clsCMFeatureEN) => {
        return obj.createUserId === value;
      };
    case clsCMFeatureEN.con_InUse:
      return (obj: clsCMFeatureEN) => {
        return obj.inUse === value;
      };
    case clsCMFeatureEN.con_OrderNum:
      return (obj: clsCMFeatureEN) => {
        return obj.orderNum === value;
      };
    case clsCMFeatureEN.con_FuncModuleAgcId:
      return (obj: clsCMFeatureEN) => {
        return obj.funcModuleAgcId === value;
      };
    case clsCMFeatureEN.con_CmPrjId:
      return (obj: clsCMFeatureEN) => {
        return obj.cmPrjId === value;
      };
    case clsCMFeatureEN.con_PrjId:
      return (obj: clsCMFeatureEN) => {
        return obj.prjId === value;
      };
    case clsCMFeatureEN.con_UpdDate:
      return (obj: clsCMFeatureEN) => {
        return obj.updDate === value;
      };
    case clsCMFeatureEN.con_UpdUser:
      return (obj: clsCMFeatureEN) => {
        return obj.updUser === value;
      };
    case clsCMFeatureEN.con_Memo:
      return (obj: clsCMFeatureEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[CMFeature]中不存在!(in ${cMFeature_ConstructorName}.${strThisFuncName})`;
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
 @param strCmPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function CMFeature_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strCmPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strCmPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strCmPrjIdClassfy]不能为空!(In clsCMFeatureWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjIdClassfy.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjIdClassfy]的长度:[{0}]不正确!(clsCMFeatureWApi.funcKey)',
      strCmPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsCMFeatureEN.con_CmFeatureId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrCMFeature = await CMFeature_GetObjLstCache(strCmPrjIdClassfy);
  if (arrCMFeature == null) return [];
  let arrCMFeatureSel = arrCMFeature;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrCMFeatureSel = arrCMFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrCMFeatureSel = arrCMFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrCMFeatureSel = arrCMFeatureSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrCMFeatureSel = arrCMFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrCMFeatureSel = arrCMFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrCMFeatureSel = arrCMFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrCMFeatureSel = arrCMFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrCMFeatureSel = arrCMFeatureSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrCMFeatureSel.length == 0) return [];
  return arrCMFeatureSel.map((x) => x.cmFeatureId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMFeature_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
export async function CMFeature_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
export async function CMFeature_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsCMFeatureEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
      const objCMFeature = CMFeature_GetObjFromJsonObj(returnObj);
      return objCMFeature;
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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
export async function CMFeature_GetObjLstClientCache(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCMFeatureEN.WhereFormat) == false) {
    strWhereCond = Format(clsCMFeatureEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("CmPrjId='{0}'", strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsCMFeatureEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsCMFeatureEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMFeatureEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrCMFeatureExObjLstCache: Array<clsCMFeatureEN> = CacheHelper.Get(strKey);
    const arrCMFeatureObjLstT = CMFeature_GetObjLstByJSONObjLst(arrCMFeatureExObjLstCache);
    return arrCMFeatureObjLstT;
  }
  try {
    const arrCMFeatureExObjLst = await CMFeature_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrCMFeatureExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMFeatureExObjLst.length,
    );
    console.log(strInfo);
    return arrCMFeatureExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMFeature_ConstructorName,
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
export async function CMFeature_GetObjLstlocalStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCMFeatureEN.WhereFormat) == false) {
    strWhereCond = Format(clsCMFeatureEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsCMFeatureEN.con_CmPrjId, strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsCMFeatureEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsCMFeatureEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMFeatureEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCMFeatureExObjLstCache: Array<clsCMFeatureEN> = JSON.parse(strTempObjLst);
    const arrCMFeatureObjLstT = CMFeature_GetObjLstByJSONObjLst(arrCMFeatureExObjLstCache);
    return arrCMFeatureObjLstT;
  }
  try {
    const arrCMFeatureExObjLst = await CMFeature_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrCMFeatureExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMFeatureExObjLst.length,
    );
    console.log(strInfo);
    return arrCMFeatureExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMFeature_ConstructorName,
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
export async function CMFeature_GetObjLstlocalStoragePureCache(strCmPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsCMFeatureEN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrCMFeatureObjLstCache: Array<clsCMFeatureEN> = JSON.parse(strTempObjLst);
    return arrCMFeatureObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function CMFeature_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsCMFeatureEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
          cMFeature_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFeature_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
export async function CMFeature_GetObjLstsessionStorage(strCmPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsCMFeatureEN.WhereFormat) == false) {
    strWhereCond = Format(clsCMFeatureEN.WhereFormat, strCmPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsCMFeatureEN.con_CmPrjId, strCmPrjId);
  }
  const strKey = Format('{0}_{1}', clsCMFeatureEN._CurrTabName, strCmPrjId);
  if (IsNullOrEmpty(clsCMFeatureEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsCMFeatureEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCMFeatureExObjLstCache: Array<clsCMFeatureEN> = JSON.parse(strTempObjLst);
    const arrCMFeatureObjLstT = CMFeature_GetObjLstByJSONObjLst(arrCMFeatureExObjLstCache);
    return arrCMFeatureObjLstT;
  }
  try {
    const arrCMFeatureExObjLst = await CMFeature_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrCMFeatureExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrCMFeatureExObjLst.length,
    );
    console.log(strInfo);
    return arrCMFeatureExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      cMFeature_ConstructorName,
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
export async function CMFeature_GetObjLstsessionStoragePureCache(strCmPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsCMFeatureEN._CurrTabName, strCmPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrCMFeatureObjLstCache: Array<clsCMFeatureEN> = JSON.parse(strTempObjLst);
    return arrCMFeatureObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CMFeature_GetObjLstCache(strCmPrjId: string): Promise<Array<clsCMFeatureEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空！(In clsCMFeatureWApi.CMFeature_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！(clsCMFeatureWApi.CMFeature_GetObjLstCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrCMFeatureObjLstCache;
  switch (clsCMFeatureEN.CacheModeId) {
    case '04': //sessionStorage
      arrCMFeatureObjLstCache = await CMFeature_GetObjLstsessionStorage(strCmPrjId);
      break;
    case '03': //localStorage
      arrCMFeatureObjLstCache = await CMFeature_GetObjLstlocalStorage(strCmPrjId);
      break;
    case '02': //ClientCache
      arrCMFeatureObjLstCache = await CMFeature_GetObjLstClientCache(strCmPrjId);
      break;
    default:
      arrCMFeatureObjLstCache = await CMFeature_GetObjLstClientCache(strCmPrjId);
      break;
  }
  return arrCMFeatureObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function CMFeature_GetObjLstPureCache(strCmPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrCMFeatureObjLstCache;
  switch (clsCMFeatureEN.CacheModeId) {
    case '04': //sessionStorage
      arrCMFeatureObjLstCache = await CMFeature_GetObjLstsessionStoragePureCache(strCmPrjId);
      break;
    case '03': //localStorage
      arrCMFeatureObjLstCache = await CMFeature_GetObjLstlocalStoragePureCache(strCmPrjId);
      break;
    case '02': //ClientCache
      arrCMFeatureObjLstCache = null;
      break;
    default:
      arrCMFeatureObjLstCache = null;
      break;
  }
  return arrCMFeatureObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCmFeatureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CMFeature_GetSubObjLstCache(
  objCMFeatureCond: clsCMFeatureEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrCMFeatureObjLstCache = await CMFeature_GetObjLstCache(strCmPrjId);
  let arrCMFeatureSel = arrCMFeatureObjLstCache;
  if (objCMFeatureCond.sfFldComparisonOp == null || objCMFeatureCond.sfFldComparisonOp == '')
    return arrCMFeatureSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCMFeatureCond.sfFldComparisonOp,
  );
  //console.log("clsCMFeatureWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCMFeatureCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMFeatureCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrCMFeatureSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCMFeatureCond),
      cMFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCMFeatureEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCmFeatureId:关键字列表
 * @returns 对象列表
 **/
export async function CMFeature_GetObjLstByCmFeatureIdLstAsync(
  arrCmFeatureId: Array<string>,
): Promise<Array<clsCMFeatureEN>> {
  const strThisFuncName = 'GetObjLstByCmFeatureIdLstAsync';
  const strAction = 'GetObjLstByCmFeatureIdLst';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCmFeatureId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          cMFeature_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFeature_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param arrstrCmFeatureIdLst:关键字列表
 * @returns 对象列表
 */
export async function CMFeature_GetObjLstByCmFeatureIdLstCache(
  arrCmFeatureIdLst: Array<string>,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByCmFeatureIdLstCache';
  try {
    const arrCMFeatureObjLstCache = await CMFeature_GetObjLstCache(strCmPrjId);
    const arrCMFeatureSel = arrCMFeatureObjLstCache.filter(
      (x) => arrCmFeatureIdLst.indexOf(x.cmFeatureId) > -1,
    );
    return arrCMFeatureSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrCmFeatureIdLst.join(','),
      cMFeature_ConstructorName,
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
export async function CMFeature_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsCMFeatureEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
          cMFeature_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFeature_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
export async function CMFeature_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsCMFeatureEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
          cMFeature_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFeature_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
export async function CMFeature_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMFeatureEN>();
  const arrCMFeatureObjLstCache = await CMFeature_GetObjLstCache(strCmPrjId);
  if (arrCMFeatureObjLstCache.length == 0) return arrCMFeatureObjLstCache;
  let arrCMFeatureSel = arrCMFeatureObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objCMFeatureCond = new clsCMFeatureEN();
  ObjectAssign(objCMFeatureCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsCMFeatureWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMFeatureCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCMFeatureSel.length == 0) return arrCMFeatureSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCMFeatureSel = arrCMFeatureSel.sort(CMFeature_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCMFeatureSel = arrCMFeatureSel.sort(objPagerPara.sortFun);
    }
    arrCMFeatureSel = arrCMFeatureSel.slice(intStart, intEnd);
    return arrCMFeatureSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cMFeature_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCMFeatureEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function CMFeature_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCMFeatureEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsCMFeatureEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
          cMFeature_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CMFeature_GetObjLstByJSONObjLst(returnObjLst);
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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param strCmFeatureId:关键字
 * @returns 获取删除的结果
 **/
export async function CMFeature_DelRecordAsync(strCmFeatureId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(cMFeature_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strCmFeatureId);

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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param arrCmFeatureId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function CMFeature_DelCMFeaturesAsync(arrCmFeatureId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelCMFeaturesAsync';
  const strAction = 'DelCMFeatures';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrCmFeatureId, config);
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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
export async function CMFeature_DelCMFeaturesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelCMFeaturesByCondAsync';
  const strAction = 'DelCMFeaturesByCond';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param objCMFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFeature_AddNewRecordAsync(
  objCMFeatureEN: clsCMFeatureEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objCMFeatureEN.cmFeatureId === null || objCMFeatureEN.cmFeatureId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCMFeatureEN);
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFeatureEN, config);
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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param objCMFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFeature_AddNewRecordWithMaxIdAsync(
  objCMFeatureEN: clsCMFeatureEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFeatureEN, config);
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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param objCMFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFeature_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param objCMFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFeature_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCMFeatureEN);
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param objCMFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFeature_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCMFeatureEN);
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param objCMFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFeature_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objCMFeatureEN);
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param objCMFeatureEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function CMFeature_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objCMFeatureEN);
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param objCMFeatureEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function CMFeature_AddNewRecordWithReturnKeyAsync(
  objCMFeatureEN: clsCMFeatureEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFeatureEN, config);
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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param objCMFeatureEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function CMFeature_UpdateRecordAsync(
  objCMFeatureEN: clsCMFeatureEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objCMFeatureEN.sfUpdFldSetStr === undefined ||
    objCMFeatureEN.sfUpdFldSetStr === null ||
    objCMFeatureEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMFeatureEN.cmFeatureId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFeatureEN, config);
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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param objCMFeatureEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function CMFeature_UpdateWithConditionAsync(
  objCMFeatureEN: clsCMFeatureEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objCMFeatureEN.sfUpdFldSetStr === undefined ||
    objCMFeatureEN.sfUpdFldSetStr === null ||
    objCMFeatureEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objCMFeatureEN.cmFeatureId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);
  objCMFeatureEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objCMFeatureEN, config);
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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param objstrCmFeatureIdCond:条件对象
 * @returns 对象列表子集
 */
export async function CMFeature_IsExistRecordCache(
  objCMFeatureCond: clsCMFeatureEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrCMFeatureObjLstCache = await CMFeature_GetObjLstCache(strCmPrjId);
  if (arrCMFeatureObjLstCache == null) return false;
  let arrCMFeatureSel = arrCMFeatureObjLstCache;
  if (objCMFeatureCond.sfFldComparisonOp == null || objCMFeatureCond.sfFldComparisonOp == '')
    return arrCMFeatureSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCMFeatureCond.sfFldComparisonOp,
  );
  //console.log("clsCMFeatureWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCMFeatureCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMFeatureCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrCMFeatureSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objCMFeatureCond),
      cMFeature_ConstructorName,
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
export async function CMFeature_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param strCmFeatureId:所给的关键字
 * @returns 对象
 */
export async function CMFeature_IsExistCache(strCmFeatureId: string, strCmPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrCMFeatureObjLstCache = await CMFeature_GetObjLstCache(strCmPrjId);
  if (arrCMFeatureObjLstCache == null) return false;
  try {
    const arrCMFeatureSel = arrCMFeatureObjLstCache.filter((x) => x.cmFeatureId == strCmFeatureId);
    if (arrCMFeatureSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strCmFeatureId,
      cMFeature_ConstructorName,
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
 * @param strCmFeatureId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function CMFeature_IsExistAsync(strCmFeatureId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCmFeatureId,
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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
export async function CMFeature_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
 * @param objCMFeatureCond:条件对象
 * @returns 对象列表记录数
 */
export async function CMFeature_GetRecCountByCondCache(
  objCMFeatureCond: clsCMFeatureEN,
  strCmPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrCMFeatureObjLstCache = await CMFeature_GetObjLstCache(strCmPrjId);
  if (arrCMFeatureObjLstCache == null) return 0;
  let arrCMFeatureSel = arrCMFeatureObjLstCache;
  if (objCMFeatureCond.sfFldComparisonOp == null || objCMFeatureCond.sfFldComparisonOp == '')
    return arrCMFeatureSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objCMFeatureCond.sfFldComparisonOp,
  );
  //console.log("clsCMFeatureWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCMFeatureCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objCMFeatureCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrCMFeatureSel = arrCMFeatureSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrCMFeatureSel = arrCMFeatureSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrCMFeatureSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objCMFeatureCond),
      cMFeature_ConstructorName,
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
export async function CMFeature_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdByPrefixAsync';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
export async function CMFeature_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(cMFeature_Controller, strAction);

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
        cMFeature_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        cMFeature_ConstructorName,
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
export function CMFeature_GetWebApiUrl(strController: string, strAction: string): string {
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
export function CMFeature_ReFreshCache(strCmPrjId: string): void {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsCMFeatureWApi.clsCMFeatureWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsCMFeatureWApi.clsCMFeatureWApi.ReFreshCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsCMFeatureEN._CurrTabName, strCmPrjId);
  switch (clsCMFeatureEN.CacheModeId) {
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
export function CMFeature_ReFreshThisCache(strCmPrjId: string): void {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空!(In clsCMFeatureWApi.CMFeature_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确!(clsCMFeatureWApi.CMFeature_ReFreshThisCache)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsCMFeatureEN._CurrTabName, strCmPrjId);
    switch (clsCMFeatureEN.CacheModeId) {
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

 * @param strCmPrjId:
*/
export async function CMFeature_BindDdl_CmFeatureIdByCmPrjIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strCmPrjId: string,
) {
  if (IsNullOrEmpty(strCmPrjId) == true) {
    const strMsg = Format(
      '参数:[strCmPrjId]不能为空！(In clsCMFeatureWApi.BindDdl_CmFeatureIdByCmPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCmPrjId.length != 6) {
    const strMsg = Format(
      '缓存分类变量:[strCmPrjId]的长度:[{0}]不正确！(clsCMFeatureWApi.BindDdl_CmFeatureIdByCmPrjIdInDiv)',
      strCmPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_CmFeatureIdByCmPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_CmFeatureIdByCmPrjIdInDivCache");
  let arrObjLstSel = await CMFeature_GetObjLstCache(strCmPrjId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.cmPrjId == strCmPrjId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsCMFeatureEN.con_CmFeatureId,
    clsCMFeatureEN.con_FeatureName,
    'CM功能',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMFeature_CheckPropertyNew(pobjCMFeatureEN: clsCMFeatureEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjCMFeatureEN.featureName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[功能名称]不能为空(In CM功能)!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmFeatureTypeId) === true ||
    pobjCMFeatureEN.cmFeatureTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[功能类型Id]不能为空(In CM功能)!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCMFeatureEN.createUserId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[建立用户Id]不能为空(In CM功能)!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    null === pobjCMFeatureEN.orderNum ||
    (pobjCMFeatureEN.orderNum != null && pobjCMFeatureEN.orderNum.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000411)字段[序号]不能为空(In CM功能)!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.funcModuleAgcId) === true ||
    pobjCMFeatureEN.funcModuleAgcId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[功能模块Id]不能为空(In CM功能)!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmPrjId) === true ||
    pobjCMFeatureEN.cmPrjId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[CM工程Id]不能为空(In CM功能)!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjCMFeatureEN.prjId) === true || pobjCMFeatureEN.prjId.toString() === '0') {
    throw new Error(
      '(errid:Watl000411)字段[工程ID]不能为空(In CM功能)!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmFeatureId) == false &&
    GetStrLen(pobjCMFeatureEN.cmFeatureId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能Id(cmFeatureId)]的长度不能超过8(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.cmFeatureId)(clsCMFeatureBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.featureName) == false &&
    GetStrLen(pobjCMFeatureEN.featureName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能名称(featureName)]的长度不能超过100(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.featureName)(clsCMFeatureBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.featureENName) == false &&
    GetStrLen(pobjCMFeatureEN.featureENName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能英文名(featureENName)]的长度不能超过100(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.featureENName)(clsCMFeatureBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.keyWords) == false &&
    GetStrLen(pobjCMFeatureEN.keyWords) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[关键字(keyWords)]的长度不能超过500(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.keyWords)(clsCMFeatureBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.featureDescription) == false &&
    GetStrLen(pobjCMFeatureEN.featureDescription) > 4000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能说明(featureDescription)]的长度不能超过4000(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.featureDescription)(clsCMFeatureBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmParentFeatureId) == false &&
    GetStrLen(pobjCMFeatureEN.cmParentFeatureId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[父功能Id(cmParentFeatureId)]的长度不能超过8(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.cmParentFeatureId)(clsCMFeatureBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.parentFeatureName) == false &&
    GetStrLen(pobjCMFeatureEN.parentFeatureName) > 500
  ) {
    throw new Error(
      '(errid:Watl000413)字段[父功能名(parentFeatureName)]的长度不能超过500(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.parentFeatureName)(clsCMFeatureBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmFeatureTypeId) == false &&
    GetStrLen(pobjCMFeatureEN.cmFeatureTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能类型Id(cmFeatureTypeId)]的长度不能超过2(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.cmFeatureTypeId)(clsCMFeatureBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.createUserId) == false &&
    GetStrLen(pobjCMFeatureEN.createUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[建立用户Id(createUserId)]的长度不能超过18(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.createUserId)(clsCMFeatureBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.funcModuleAgcId) == false &&
    GetStrLen(pobjCMFeatureEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.funcModuleAgcId)(clsCMFeatureBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMFeatureEN.cmPrjId) == false && GetStrLen(pobjCMFeatureEN.cmPrjId) > 6) {
    throw new Error(
      '(errid:Watl000413)字段[CM工程Id(cmPrjId)]的长度不能超过6(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.cmPrjId)(clsCMFeatureBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMFeatureEN.prjId) == false && GetStrLen(pobjCMFeatureEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[工程ID(prjId)]的长度不能超过4(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.prjId)(clsCMFeatureBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMFeatureEN.updDate) == false && GetStrLen(pobjCMFeatureEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.updDate)(clsCMFeatureBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMFeatureEN.updUser) == false && GetStrLen(pobjCMFeatureEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.updUser)(clsCMFeatureBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjCMFeatureEN.memo) == false && GetStrLen(pobjCMFeatureEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.memo)(clsCMFeatureBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmFeatureId) == false &&
    undefined !== pobjCMFeatureEN.cmFeatureId &&
    tzDataType.isString(pobjCMFeatureEN.cmFeatureId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能Id(cmFeatureId)]的值:[$(pobjCMFeatureEN.cmFeatureId)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.featureName) == false &&
    undefined !== pobjCMFeatureEN.featureName &&
    tzDataType.isString(pobjCMFeatureEN.featureName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能名称(featureName)]的值:[$(pobjCMFeatureEN.featureName)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.featureENName) == false &&
    undefined !== pobjCMFeatureEN.featureENName &&
    tzDataType.isString(pobjCMFeatureEN.featureENName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能英文名(featureENName)]的值:[$(pobjCMFeatureEN.featureENName)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.keyWords) == false &&
    undefined !== pobjCMFeatureEN.keyWords &&
    tzDataType.isString(pobjCMFeatureEN.keyWords) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[关键字(keyWords)]的值:[$(pobjCMFeatureEN.keyWords)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.featureDescription) == false &&
    undefined !== pobjCMFeatureEN.featureDescription &&
    tzDataType.isString(pobjCMFeatureEN.featureDescription) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能说明(featureDescription)]的值:[$(pobjCMFeatureEN.featureDescription)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmParentFeatureId) == false &&
    undefined !== pobjCMFeatureEN.cmParentFeatureId &&
    tzDataType.isString(pobjCMFeatureEN.cmParentFeatureId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[父功能Id(cmParentFeatureId)]的值:[$(pobjCMFeatureEN.cmParentFeatureId)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.parentFeatureName) == false &&
    undefined !== pobjCMFeatureEN.parentFeatureName &&
    tzDataType.isString(pobjCMFeatureEN.parentFeatureName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[父功能名(parentFeatureName)]的值:[$(pobjCMFeatureEN.parentFeatureName)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmFeatureTypeId) == false &&
    undefined !== pobjCMFeatureEN.cmFeatureTypeId &&
    tzDataType.isString(pobjCMFeatureEN.cmFeatureTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能类型Id(cmFeatureTypeId)]的值:[$(pobjCMFeatureEN.cmFeatureTypeId)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.createUserId) == false &&
    undefined !== pobjCMFeatureEN.createUserId &&
    tzDataType.isString(pobjCMFeatureEN.createUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[建立用户Id(createUserId)]的值:[$(pobjCMFeatureEN.createUserId)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFeatureEN.inUse &&
    undefined !== pobjCMFeatureEN.inUse &&
    tzDataType.isBoolean(pobjCMFeatureEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否在用(inUse)]的值:[$(pobjCMFeatureEN.inUse)], 非法,应该为布尔型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjCMFeatureEN.orderNum &&
    undefined !== pobjCMFeatureEN.orderNum &&
    tzDataType.isNumber(pobjCMFeatureEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjCMFeatureEN.orderNum)], 非法,应该为数值型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.funcModuleAgcId) == false &&
    undefined !== pobjCMFeatureEN.funcModuleAgcId &&
    tzDataType.isString(pobjCMFeatureEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[功能模块Id(funcModuleAgcId)]的值:[$(pobjCMFeatureEN.funcModuleAgcId)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmPrjId) == false &&
    undefined !== pobjCMFeatureEN.cmPrjId &&
    tzDataType.isString(pobjCMFeatureEN.cmPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[CM工程Id(cmPrjId)]的值:[$(pobjCMFeatureEN.cmPrjId)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.prjId) == false &&
    undefined !== pobjCMFeatureEN.prjId &&
    tzDataType.isString(pobjCMFeatureEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[工程ID(prjId)]的值:[$(pobjCMFeatureEN.prjId)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.updDate) == false &&
    undefined !== pobjCMFeatureEN.updDate &&
    tzDataType.isString(pobjCMFeatureEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjCMFeatureEN.updDate)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.updUser) == false &&
    undefined !== pobjCMFeatureEN.updUser &&
    tzDataType.isString(pobjCMFeatureEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改者(updUser)]的值:[$(pobjCMFeatureEN.updUser)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.memo) == false &&
    undefined !== pobjCMFeatureEN.memo &&
    tzDataType.isString(pobjCMFeatureEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[说明(memo)]的值:[$(pobjCMFeatureEN.memo)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function CMFeature_CheckProperty4Update(pobjCMFeatureEN: clsCMFeatureEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmFeatureId) == false &&
    GetStrLen(pobjCMFeatureEN.cmFeatureId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能Id(cmFeatureId)]的长度不能超过8(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.cmFeatureId)(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.featureName) == false &&
    GetStrLen(pobjCMFeatureEN.featureName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能名称(featureName)]的长度不能超过100(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.featureName)(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.featureENName) == false &&
    GetStrLen(pobjCMFeatureEN.featureENName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能英文名(featureENName)]的长度不能超过100(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.featureENName)(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.keyWords) == false &&
    GetStrLen(pobjCMFeatureEN.keyWords) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[关键字(keyWords)]的长度不能超过500(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.keyWords)(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.featureDescription) == false &&
    GetStrLen(pobjCMFeatureEN.featureDescription) > 4000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能说明(featureDescription)]的长度不能超过4000(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.featureDescription)(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmParentFeatureId) == false &&
    GetStrLen(pobjCMFeatureEN.cmParentFeatureId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[父功能Id(cmParentFeatureId)]的长度不能超过8(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.cmParentFeatureId)(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.parentFeatureName) == false &&
    GetStrLen(pobjCMFeatureEN.parentFeatureName) > 500
  ) {
    throw new Error(
      '(errid:Watl000416)字段[父功能名(parentFeatureName)]的长度不能超过500(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.parentFeatureName)(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmFeatureTypeId) == false &&
    GetStrLen(pobjCMFeatureEN.cmFeatureTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能类型Id(cmFeatureTypeId)]的长度不能超过2(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.cmFeatureTypeId)(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.createUserId) == false &&
    GetStrLen(pobjCMFeatureEN.createUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[建立用户Id(createUserId)]的长度不能超过18(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.createUserId)(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.funcModuleAgcId) == false &&
    GetStrLen(pobjCMFeatureEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.funcModuleAgcId)(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMFeatureEN.cmPrjId) == false && GetStrLen(pobjCMFeatureEN.cmPrjId) > 6) {
    throw new Error(
      '(errid:Watl000416)字段[CM工程Id(cmPrjId)]的长度不能超过6(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.cmPrjId)(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMFeatureEN.prjId) == false && GetStrLen(pobjCMFeatureEN.prjId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[工程ID(prjId)]的长度不能超过4(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.prjId)(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMFeatureEN.updDate) == false && GetStrLen(pobjCMFeatureEN.updDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.updDate)(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMFeatureEN.updUser) == false && GetStrLen(pobjCMFeatureEN.updUser) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.updUser)(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjCMFeatureEN.memo) == false && GetStrLen(pobjCMFeatureEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In CM功能(CMFeature))!值:$(pobjCMFeatureEN.memo)(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmFeatureId) == false &&
    undefined !== pobjCMFeatureEN.cmFeatureId &&
    tzDataType.isString(pobjCMFeatureEN.cmFeatureId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能Id(cmFeatureId)]的值:[$(pobjCMFeatureEN.cmFeatureId)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.featureName) == false &&
    undefined !== pobjCMFeatureEN.featureName &&
    tzDataType.isString(pobjCMFeatureEN.featureName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能名称(featureName)]的值:[$(pobjCMFeatureEN.featureName)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.featureENName) == false &&
    undefined !== pobjCMFeatureEN.featureENName &&
    tzDataType.isString(pobjCMFeatureEN.featureENName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能英文名(featureENName)]的值:[$(pobjCMFeatureEN.featureENName)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.keyWords) == false &&
    undefined !== pobjCMFeatureEN.keyWords &&
    tzDataType.isString(pobjCMFeatureEN.keyWords) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[关键字(keyWords)]的值:[$(pobjCMFeatureEN.keyWords)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.featureDescription) == false &&
    undefined !== pobjCMFeatureEN.featureDescription &&
    tzDataType.isString(pobjCMFeatureEN.featureDescription) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能说明(featureDescription)]的值:[$(pobjCMFeatureEN.featureDescription)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmParentFeatureId) == false &&
    undefined !== pobjCMFeatureEN.cmParentFeatureId &&
    tzDataType.isString(pobjCMFeatureEN.cmParentFeatureId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[父功能Id(cmParentFeatureId)]的值:[$(pobjCMFeatureEN.cmParentFeatureId)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.parentFeatureName) == false &&
    undefined !== pobjCMFeatureEN.parentFeatureName &&
    tzDataType.isString(pobjCMFeatureEN.parentFeatureName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[父功能名(parentFeatureName)]的值:[$(pobjCMFeatureEN.parentFeatureName)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmFeatureTypeId) == false &&
    undefined !== pobjCMFeatureEN.cmFeatureTypeId &&
    tzDataType.isString(pobjCMFeatureEN.cmFeatureTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能类型Id(cmFeatureTypeId)]的值:[$(pobjCMFeatureEN.cmFeatureTypeId)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.createUserId) == false &&
    undefined !== pobjCMFeatureEN.createUserId &&
    tzDataType.isString(pobjCMFeatureEN.createUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[建立用户Id(createUserId)]的值:[$(pobjCMFeatureEN.createUserId)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFeatureEN.inUse &&
    undefined !== pobjCMFeatureEN.inUse &&
    tzDataType.isBoolean(pobjCMFeatureEN.inUse) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否在用(inUse)]的值:[$(pobjCMFeatureEN.inUse)], 非法,应该为布尔型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjCMFeatureEN.orderNum &&
    undefined !== pobjCMFeatureEN.orderNum &&
    tzDataType.isNumber(pobjCMFeatureEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjCMFeatureEN.orderNum)], 非法,应该为数值型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.funcModuleAgcId) == false &&
    undefined !== pobjCMFeatureEN.funcModuleAgcId &&
    tzDataType.isString(pobjCMFeatureEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[功能模块Id(funcModuleAgcId)]的值:[$(pobjCMFeatureEN.funcModuleAgcId)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmPrjId) == false &&
    undefined !== pobjCMFeatureEN.cmPrjId &&
    tzDataType.isString(pobjCMFeatureEN.cmPrjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[CM工程Id(cmPrjId)]的值:[$(pobjCMFeatureEN.cmPrjId)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.prjId) == false &&
    undefined !== pobjCMFeatureEN.prjId &&
    tzDataType.isString(pobjCMFeatureEN.prjId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[工程ID(prjId)]的值:[$(pobjCMFeatureEN.prjId)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.updDate) == false &&
    undefined !== pobjCMFeatureEN.updDate &&
    tzDataType.isString(pobjCMFeatureEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjCMFeatureEN.updDate)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.updUser) == false &&
    undefined !== pobjCMFeatureEN.updUser &&
    tzDataType.isString(pobjCMFeatureEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改者(updUser)]的值:[$(pobjCMFeatureEN.updUser)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjCMFeatureEN.memo) == false &&
    undefined !== pobjCMFeatureEN.memo &&
    tzDataType.isString(pobjCMFeatureEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[说明(memo)]的值:[$(pobjCMFeatureEN.memo)], 非法,应该为字符型(In CM功能(CMFeature))!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjCMFeatureEN.cmFeatureId) === true ||
    pobjCMFeatureEN.cmFeatureId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[功能Id]不能为空(In CM功能)!(clsCMFeatureBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMFeature_GetJSONStrByObj(pobjCMFeatureEN: clsCMFeatureEN): string {
  pobjCMFeatureEN.sfUpdFldSetStr = pobjCMFeatureEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjCMFeatureEN);
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
export function CMFeature_GetObjLstByJSONStr(strJSON: string): Array<clsCMFeatureEN> {
  let arrCMFeatureObjLst = new Array<clsCMFeatureEN>();
  if (strJSON === '') {
    return arrCMFeatureObjLst;
  }
  try {
    arrCMFeatureObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrCMFeatureObjLst;
  }
  return arrCMFeatureObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrCMFeatureObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function CMFeature_GetObjLstByJSONObjLst(
  arrCMFeatureObjLstS: Array<clsCMFeatureEN>,
): Array<clsCMFeatureEN> {
  const arrCMFeatureObjLst = new Array<clsCMFeatureEN>();
  for (const objInFor of arrCMFeatureObjLstS) {
    const obj1 = CMFeature_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrCMFeatureObjLst.push(obj1);
  }
  return arrCMFeatureObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2024-01-23
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function CMFeature_GetObjByJSONStr(strJSON: string): clsCMFeatureEN {
  let pobjCMFeatureEN = new clsCMFeatureEN();
  if (strJSON === '') {
    return pobjCMFeatureEN;
  }
  try {
    pobjCMFeatureEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjCMFeatureEN;
  }
  return pobjCMFeatureEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function CMFeature_GetCombineCondition(objCMFeatureCond: clsCMFeatureEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_CmFeatureId,
    ) == true
  ) {
    const strComparisonOpCmFeatureId: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_CmFeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureEN.con_CmFeatureId,
      objCMFeatureCond.cmFeatureId,
      strComparisonOpCmFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_FeatureName,
    ) == true
  ) {
    const strComparisonOpFeatureName: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_FeatureName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureEN.con_FeatureName,
      objCMFeatureCond.featureName,
      strComparisonOpFeatureName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_FeatureENName,
    ) == true
  ) {
    const strComparisonOpFeatureENName: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_FeatureENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureEN.con_FeatureENName,
      objCMFeatureCond.featureENName,
      strComparisonOpFeatureENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_KeyWords,
    ) == true
  ) {
    const strComparisonOpKeyWords: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_KeyWords];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureEN.con_KeyWords,
      objCMFeatureCond.keyWords,
      strComparisonOpKeyWords,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_FeatureDescription,
    ) == true
  ) {
    const strComparisonOpFeatureDescription: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_FeatureDescription];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureEN.con_FeatureDescription,
      objCMFeatureCond.featureDescription,
      strComparisonOpFeatureDescription,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_CmParentFeatureId,
    ) == true
  ) {
    const strComparisonOpCmParentFeatureId: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_CmParentFeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureEN.con_CmParentFeatureId,
      objCMFeatureCond.cmParentFeatureId,
      strComparisonOpCmParentFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_ParentFeatureName,
    ) == true
  ) {
    const strComparisonOpParentFeatureName: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_ParentFeatureName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureEN.con_ParentFeatureName,
      objCMFeatureCond.parentFeatureName,
      strComparisonOpParentFeatureName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_CmFeatureTypeId,
    ) == true
  ) {
    const strComparisonOpCmFeatureTypeId: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_CmFeatureTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureEN.con_CmFeatureTypeId,
      objCMFeatureCond.cmFeatureTypeId,
      strComparisonOpCmFeatureTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_CreateUserId,
    ) == true
  ) {
    const strComparisonOpCreateUserId: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_CreateUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureEN.con_CreateUserId,
      objCMFeatureCond.createUserId,
      strComparisonOpCreateUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_InUse,
    ) == true
  ) {
    if (objCMFeatureCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsCMFeatureEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsCMFeatureEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsCMFeatureEN.con_OrderNum,
      objCMFeatureCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_FuncModuleAgcId,
    ) == true
  ) {
    const strComparisonOpFuncModuleAgcId: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_FuncModuleAgcId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureEN.con_FuncModuleAgcId,
      objCMFeatureCond.funcModuleAgcId,
      strComparisonOpFuncModuleAgcId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_CmPrjId,
    ) == true
  ) {
    const strComparisonOpCmPrjId: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_CmPrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureEN.con_CmPrjId,
      objCMFeatureCond.cmPrjId,
      strComparisonOpCmPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureEN.con_PrjId,
      objCMFeatureCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureEN.con_UpdDate,
      objCMFeatureCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureEN.con_UpdUser,
      objCMFeatureCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objCMFeatureCond.dicFldComparisonOp,
      clsCMFeatureEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objCMFeatureCond.dicFldComparisonOp[clsCMFeatureEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsCMFeatureEN.con_Memo,
      objCMFeatureCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMFeature(CM功能),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strFeatureName: 功能名称(要求唯一的字段)
 * @param strCmPrjId: CM工程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMFeature_GetUniCondStr(objCMFeatureEN: clsCMFeatureEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and FeatureName = '{0}'", objCMFeatureEN.featureName);
  strWhereCond += Format(" and CmPrjId = '{0}'", objCMFeatureEN.cmPrjId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--CMFeature(CM功能),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strFeatureName: 功能名称(要求唯一的字段)
 * @param strCmPrjId: CM工程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function CMFeature_GetUniCondStr4Update(objCMFeatureEN: clsCMFeatureEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and CmFeatureId <> '{0}'", objCMFeatureEN.cmFeatureId);
  strWhereCond += Format(" and FeatureName = '{0}'", objCMFeatureEN.featureName);
  strWhereCond += Format(" and CmPrjId = '{0}'", objCMFeatureEN.cmPrjId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objCMFeatureENS:源对象
 * @param objCMFeatureENT:目标对象
 */
export function CMFeature_GetObjFromJsonObj(objCMFeatureENS: clsCMFeatureEN): clsCMFeatureEN {
  const objCMFeatureENT: clsCMFeatureEN = new clsCMFeatureEN();
  ObjectAssign(objCMFeatureENT, objCMFeatureENS);
  return objCMFeatureENT;
}
