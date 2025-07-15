/**
 * 类名:clsViewInfoWApi
 * 表名:ViewInfo(00050006)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 11:49:44
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:界面管理(PrjInterface)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 界面(ViewInfo)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月14日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import {
  CacheHelper,
  LocalStorage_GetKeyByPrefix,
  SessionStorage_GetKeyByPrefix,
} from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetSortExpressInfo,
  ObjectAssign,
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { viewInfoCache, isFuncMapCache } from '@/views/PrjInterface/ViewInfoVueShare';
import { clsViewInfoENEx } from '@/ts/L0Entity/PrjInterface/clsViewInfoENEx';
import { clsViewInfoEN } from '@/ts/L0Entity/PrjInterface/clsViewInfoEN';
import { ApplicationType_func } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
import { FuncModule_Agc_func } from '@/ts/L3ForWApi/PrjManage/clsFuncModule_AgcWApi';
import { clsFuncModule_AgcEN } from '@/ts/L0Entity/PrjManage/clsFuncModule_AgcEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const viewInfo_Controller = 'ViewInfoApi';
export const viewInfo_ConstructorName = 'viewInfo';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strViewId:关键字
 * @returns 对象
 **/
export async function ViewInfo_GetObjByViewIdAsync(
  strViewId: string,
): Promise<clsViewInfoEN | null> {
  const strThisFuncName = 'GetObjByViewIdAsync';

  if (IsNullOrEmpty(strViewId) == true) {
    const strMsg = Format('参数:[strViewId]不能为空!(In clsViewInfoWApi.GetObjByViewIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewId]的长度:[{0}]不正确!(clsViewInfoWApi.GetObjByViewIdAsync)',
      strViewId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByViewId';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewId,
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
      const objViewInfo = ViewInfo_GetObjFromJsonObj(returnObj);
      return objViewInfo;
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strViewId:所给的关键字
 * @returns 对象
 */
export async function ViewInfo_GetObjByViewIdlocalStorage(strViewId: string) {
  const strThisFuncName = 'GetObjByViewIdlocalStorage';

  if (IsNullOrEmpty(strViewId) == true) {
    const strMsg = Format(
      '参数:[strViewId]不能为空!(In clsViewInfoWApi.GetObjByViewIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewId]的长度:[{0}]不正确!(clsViewInfoWApi.GetObjByViewIdlocalStorage)',
      strViewId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsViewInfoEN._CurrTabName, strViewId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objViewInfoCache: clsViewInfoEN = JSON.parse(strTempObj);
    return objViewInfoCache;
  }
  try {
    const objViewInfo = await ViewInfo_GetObjByViewIdAsync(strViewId);
    if (objViewInfo != null) {
      localStorage.setItem(strKey, JSON.stringify(objViewInfo));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objViewInfo;
    }
    return objViewInfo;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewId,
      viewInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strViewId:所给的关键字
 * @returns 对象
 */
export async function ViewInfo_GetObjByViewIdCache(
  strViewId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByViewIdCache';

  if (IsNullOrEmpty(strViewId) == true) {
    const strMsg = Format('参数:[strViewId]不能为空!(In clsViewInfoWApi.GetObjByViewIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewId]的长度:[{0}]不正确!(clsViewInfoWApi.GetObjByViewIdCache)',
      strViewId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewInfoObjLstCache = await ViewInfo_GetObjLstCache(strPrjId);
  try {
    const arrViewInfoSel = arrViewInfoObjLstCache.filter((x) => x.viewId == strViewId);
    let objViewInfo: clsViewInfoEN;
    if (arrViewInfoSel.length > 0) {
      objViewInfo = arrViewInfoSel[0];
      return objViewInfo;
    } else {
      if (bolTryAsyncOnce == true) {
        const objViewInfoConst = await ViewInfo_GetObjByViewIdAsync(strViewId);
        if (objViewInfoConst != null) {
          ViewInfo_ReFreshThisCache(strPrjId);
          return objViewInfoConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strViewId,
      viewInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objViewInfo:所给的对象
 * @returns 对象
 */
export async function ViewInfo_UpdateObjInLstCache(objViewInfo: clsViewInfoEN, strPrjId: string) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrViewInfoObjLstCache = await ViewInfo_GetObjLstCache(strPrjId);
    const obj = arrViewInfoObjLstCache.find(
      (x) =>
        x.prjId == objViewInfo.prjId &&
        x.viewName == objViewInfo.viewName &&
        x.applicationTypeId == objViewInfo.applicationTypeId,
    );
    if (obj != null) {
      objViewInfo.viewId = obj.viewId;
      ObjectAssign(obj, objViewInfo);
    } else {
      arrViewInfoObjLstCache.push(objViewInfo);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      viewInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewInfo_SortFunDefa(a: clsViewInfoEN, b: clsViewInfoEN): number {
  return a.viewId.localeCompare(b.viewId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewInfo_SortFunDefa2Fld(a: clsViewInfoEN, b: clsViewInfoEN): number {
  if (a.viewName == b.viewName) return a.applicationTypeId - b.applicationTypeId;
  else return a.viewName.localeCompare(b.viewName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewInfo_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewInfoEN.con_ViewId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return a.viewId.localeCompare(b.viewId);
        };
      case clsViewInfoEN.con_ViewName:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return a.viewName.localeCompare(b.viewName);
        };
      case clsViewInfoEN.con_ApplicationTypeId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return a.applicationTypeId - b.applicationTypeId;
        };
      case clsViewInfoEN.con_FuncModuleAgcId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.funcModuleAgcId == null) return -1;
          if (b.funcModuleAgcId == null) return 1;
          return a.funcModuleAgcId.localeCompare(b.funcModuleAgcId);
        };
      case clsViewInfoEN.con_DataBaseName:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.dataBaseName == null) return -1;
          if (b.dataBaseName == null) return 1;
          return a.dataBaseName.localeCompare(b.dataBaseName);
        };
      case clsViewInfoEN.con_KeyForMainTab:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.keyForMainTab == null) return -1;
          if (b.keyForMainTab == null) return 1;
          return a.keyForMainTab.localeCompare(b.keyForMainTab);
        };
      case clsViewInfoEN.con_KeyForDetailTab:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.keyForDetailTab == null) return -1;
          if (b.keyForDetailTab == null) return 1;
          return a.keyForDetailTab.localeCompare(b.keyForDetailTab);
        };
      case clsViewInfoEN.con_IsNeedSort:
        return (a: clsViewInfoEN) => {
          if (a.isNeedSort == true) return 1;
          else return -1;
        };
      case clsViewInfoEN.con_IsNeedTransCode:
        return (a: clsViewInfoEN) => {
          if (a.isNeedTransCode == true) return 1;
          else return -1;
        };
      case clsViewInfoEN.con_IsNeedSetExportFld:
        return (a: clsViewInfoEN) => {
          if (a.isNeedSetExportFld == true) return 1;
          else return -1;
        };
      case clsViewInfoEN.con_UserId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsViewInfoEN.con_PrjId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsViewInfoEN.con_ViewFunction:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.viewFunction == null) return -1;
          if (b.viewFunction == null) return 1;
          return a.viewFunction.localeCompare(b.viewFunction);
        };
      case clsViewInfoEN.con_ViewDetail:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.viewDetail == null) return -1;
          if (b.viewDetail == null) return 1;
          return a.viewDetail.localeCompare(b.viewDetail);
        };
      case clsViewInfoEN.con_DefaMenuName:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return a.defaMenuName.localeCompare(b.defaMenuName);
        };
      case clsViewInfoEN.con_DetailTabId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.detailTabId == null) return -1;
          if (b.detailTabId == null) return 1;
          return a.detailTabId.localeCompare(b.detailTabId);
        };
      case clsViewInfoEN.con_FileName:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return a.fileName.localeCompare(b.fileName);
        };
      case clsViewInfoEN.con_FilePath:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return a.filePath.localeCompare(b.filePath);
        };
      case clsViewInfoEN.con_MainTabId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.mainTabId == null) return -1;
          if (b.mainTabId == null) return 1;
          return a.mainTabId.localeCompare(b.mainTabId);
        };
      case clsViewInfoEN.con_ViewCnName:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return a.viewCnName.localeCompare(b.viewCnName);
        };
      case clsViewInfoEN.con_ViewGroupId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.viewGroupId == null) return -1;
          if (b.viewGroupId == null) return 1;
          return a.viewGroupId.localeCompare(b.viewGroupId);
        };
      case clsViewInfoEN.con_InRelaTabId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.inRelaTabId == null) return -1;
          if (b.inRelaTabId == null) return 1;
          return a.inRelaTabId.localeCompare(b.inRelaTabId);
        };
      case clsViewInfoEN.con_InSqlDsTypeId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.inSqlDsTypeId == null) return -1;
          if (b.inSqlDsTypeId == null) return 1;
          return a.inSqlDsTypeId.localeCompare(b.inSqlDsTypeId);
        };
      case clsViewInfoEN.con_OutRelaTabId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.outRelaTabId == null) return -1;
          if (b.outRelaTabId == null) return 1;
          return a.outRelaTabId.localeCompare(b.outRelaTabId);
        };
      case clsViewInfoEN.con_OutSqlDsTypeId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.outSqlDsTypeId == null) return -1;
          if (b.outSqlDsTypeId == null) return 1;
          return a.outSqlDsTypeId.localeCompare(b.outSqlDsTypeId);
        };
      case clsViewInfoEN.con_DetailTabType:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.detailTabType == null) return -1;
          if (b.detailTabType == null) return 1;
          return a.detailTabType.localeCompare(b.detailTabType);
        };
      case clsViewInfoEN.con_DetailViewId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.detailViewId == null) return -1;
          if (b.detailViewId == null) return 1;
          return a.detailViewId.localeCompare(b.detailViewId);
        };
      case clsViewInfoEN.con_MainTabType:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.mainTabType == null) return -1;
          if (b.mainTabType == null) return 1;
          return a.mainTabType.localeCompare(b.mainTabType);
        };
      case clsViewInfoEN.con_MainViewId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.mainViewId == null) return -1;
          if (b.mainViewId == null) return 1;
          return a.mainViewId.localeCompare(b.mainViewId);
        };
      case clsViewInfoEN.con_GeneCodeDate:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.geneCodeDate == null) return -1;
          if (b.geneCodeDate == null) return 1;
          return a.geneCodeDate.localeCompare(b.geneCodeDate);
        };
      case clsViewInfoEN.con_TaskId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.taskId == null) return -1;
          if (b.taskId == null) return 1;
          return a.taskId.localeCompare(b.taskId);
        };
      case clsViewInfoEN.con_KeyId4Test:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.keyId4Test == null) return -1;
          if (b.keyId4Test == null) return 1;
          return a.keyId4Test.localeCompare(b.keyId4Test);
        };
      case clsViewInfoEN.con_ViewMasterId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.viewMasterId == null) return -1;
          if (b.viewMasterId == null) return 1;
          return a.viewMasterId.localeCompare(b.viewMasterId);
        };
      case clsViewInfoEN.con_IsShare:
        return (a: clsViewInfoEN) => {
          if (a.isShare == true) return 1;
          else return -1;
        };
      case clsViewInfoEN.con_ErrMsg:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsViewInfoEN.con_UpdDate:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsViewInfoEN.con_UpdUserId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsViewInfoEN.con_Memo:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsViewInfoEN.con_RegionNum:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return a.regionNum - b.regionNum;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewInfo]中不存在!(in ${viewInfo_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewInfoEN.con_ViewId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return b.viewId.localeCompare(a.viewId);
        };
      case clsViewInfoEN.con_ViewName:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return b.viewName.localeCompare(a.viewName);
        };
      case clsViewInfoEN.con_ApplicationTypeId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return b.applicationTypeId - a.applicationTypeId;
        };
      case clsViewInfoEN.con_FuncModuleAgcId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.funcModuleAgcId == null) return -1;
          if (a.funcModuleAgcId == null) return 1;
          return b.funcModuleAgcId.localeCompare(a.funcModuleAgcId);
        };
      case clsViewInfoEN.con_DataBaseName:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.dataBaseName == null) return -1;
          if (a.dataBaseName == null) return 1;
          return b.dataBaseName.localeCompare(a.dataBaseName);
        };
      case clsViewInfoEN.con_KeyForMainTab:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.keyForMainTab == null) return -1;
          if (a.keyForMainTab == null) return 1;
          return b.keyForMainTab.localeCompare(a.keyForMainTab);
        };
      case clsViewInfoEN.con_KeyForDetailTab:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.keyForDetailTab == null) return -1;
          if (a.keyForDetailTab == null) return 1;
          return b.keyForDetailTab.localeCompare(a.keyForDetailTab);
        };
      case clsViewInfoEN.con_IsNeedSort:
        return (b: clsViewInfoEN) => {
          if (b.isNeedSort == true) return 1;
          else return -1;
        };
      case clsViewInfoEN.con_IsNeedTransCode:
        return (b: clsViewInfoEN) => {
          if (b.isNeedTransCode == true) return 1;
          else return -1;
        };
      case clsViewInfoEN.con_IsNeedSetExportFld:
        return (b: clsViewInfoEN) => {
          if (b.isNeedSetExportFld == true) return 1;
          else return -1;
        };
      case clsViewInfoEN.con_UserId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsViewInfoEN.con_PrjId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsViewInfoEN.con_ViewFunction:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.viewFunction == null) return -1;
          if (a.viewFunction == null) return 1;
          return b.viewFunction.localeCompare(a.viewFunction);
        };
      case clsViewInfoEN.con_ViewDetail:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.viewDetail == null) return -1;
          if (a.viewDetail == null) return 1;
          return b.viewDetail.localeCompare(a.viewDetail);
        };
      case clsViewInfoEN.con_DefaMenuName:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return b.defaMenuName.localeCompare(a.defaMenuName);
        };
      case clsViewInfoEN.con_DetailTabId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.detailTabId == null) return -1;
          if (a.detailTabId == null) return 1;
          return b.detailTabId.localeCompare(a.detailTabId);
        };
      case clsViewInfoEN.con_FileName:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return b.fileName.localeCompare(a.fileName);
        };
      case clsViewInfoEN.con_FilePath:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return b.filePath.localeCompare(a.filePath);
        };
      case clsViewInfoEN.con_MainTabId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.mainTabId == null) return -1;
          if (a.mainTabId == null) return 1;
          return b.mainTabId.localeCompare(a.mainTabId);
        };
      case clsViewInfoEN.con_ViewCnName:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return b.viewCnName.localeCompare(a.viewCnName);
        };
      case clsViewInfoEN.con_ViewGroupId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.viewGroupId == null) return -1;
          if (a.viewGroupId == null) return 1;
          return b.viewGroupId.localeCompare(a.viewGroupId);
        };
      case clsViewInfoEN.con_InRelaTabId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.inRelaTabId == null) return -1;
          if (a.inRelaTabId == null) return 1;
          return b.inRelaTabId.localeCompare(a.inRelaTabId);
        };
      case clsViewInfoEN.con_InSqlDsTypeId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.inSqlDsTypeId == null) return -1;
          if (a.inSqlDsTypeId == null) return 1;
          return b.inSqlDsTypeId.localeCompare(a.inSqlDsTypeId);
        };
      case clsViewInfoEN.con_OutRelaTabId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.outRelaTabId == null) return -1;
          if (a.outRelaTabId == null) return 1;
          return b.outRelaTabId.localeCompare(a.outRelaTabId);
        };
      case clsViewInfoEN.con_OutSqlDsTypeId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.outSqlDsTypeId == null) return -1;
          if (a.outSqlDsTypeId == null) return 1;
          return b.outSqlDsTypeId.localeCompare(a.outSqlDsTypeId);
        };
      case clsViewInfoEN.con_DetailTabType:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.detailTabType == null) return -1;
          if (a.detailTabType == null) return 1;
          return b.detailTabType.localeCompare(a.detailTabType);
        };
      case clsViewInfoEN.con_DetailViewId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.detailViewId == null) return -1;
          if (a.detailViewId == null) return 1;
          return b.detailViewId.localeCompare(a.detailViewId);
        };
      case clsViewInfoEN.con_MainTabType:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.mainTabType == null) return -1;
          if (a.mainTabType == null) return 1;
          return b.mainTabType.localeCompare(a.mainTabType);
        };
      case clsViewInfoEN.con_MainViewId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.mainViewId == null) return -1;
          if (a.mainViewId == null) return 1;
          return b.mainViewId.localeCompare(a.mainViewId);
        };
      case clsViewInfoEN.con_GeneCodeDate:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.geneCodeDate == null) return -1;
          if (a.geneCodeDate == null) return 1;
          return b.geneCodeDate.localeCompare(a.geneCodeDate);
        };
      case clsViewInfoEN.con_TaskId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.taskId == null) return -1;
          if (a.taskId == null) return 1;
          return b.taskId.localeCompare(a.taskId);
        };
      case clsViewInfoEN.con_KeyId4Test:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.keyId4Test == null) return -1;
          if (a.keyId4Test == null) return 1;
          return b.keyId4Test.localeCompare(a.keyId4Test);
        };
      case clsViewInfoEN.con_ViewMasterId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.viewMasterId == null) return -1;
          if (a.viewMasterId == null) return 1;
          return b.viewMasterId.localeCompare(a.viewMasterId);
        };
      case clsViewInfoEN.con_IsShare:
        return (b: clsViewInfoEN) => {
          if (b.isShare == true) return 1;
          else return -1;
        };
      case clsViewInfoEN.con_ErrMsg:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsViewInfoEN.con_UpdDate:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsViewInfoEN.con_UpdUserId:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsViewInfoEN.con_Memo:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsViewInfoEN.con_RegionNum:
        return (a: clsViewInfoEN, b: clsViewInfoEN) => {
          return b.regionNum - a.regionNum;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewInfo]中不存在!(in ${viewInfo_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strViewId:所给的关键字
 * @returns 对象
 */
export async function ViewInfo_GetNameByViewIdCache(strViewId: string, strPrjId: string) {
  if (IsNullOrEmpty(strViewId) == true) {
    const strMsg = Format('参数:[strViewId]不能为空!(In clsViewInfoWApi.GetNameByViewIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strViewId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strViewId]的长度:[{0}]不正确!(clsViewInfoWApi.GetNameByViewIdCache)',
      strViewId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewInfoObjLstCache = await ViewInfo_GetObjLstCache(strPrjId);
  if (arrViewInfoObjLstCache == null) return '';
  try {
    const arrViewInfoSel = arrViewInfoObjLstCache.filter((x) => x.viewId == strViewId);
    let objViewInfo: clsViewInfoEN;
    if (arrViewInfoSel.length > 0) {
      objViewInfo = arrViewInfoSel[0];
      return objViewInfo.viewName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strViewId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ViewInfo_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewInfoEN.con_ViewId:
      return (obj: clsViewInfoEN) => {
        return obj.viewId === value;
      };
    case clsViewInfoEN.con_ViewName:
      return (obj: clsViewInfoEN) => {
        return obj.viewName === value;
      };
    case clsViewInfoEN.con_ApplicationTypeId:
      return (obj: clsViewInfoEN) => {
        return obj.applicationTypeId === value;
      };
    case clsViewInfoEN.con_FuncModuleAgcId:
      return (obj: clsViewInfoEN) => {
        return obj.funcModuleAgcId === value;
      };
    case clsViewInfoEN.con_DataBaseName:
      return (obj: clsViewInfoEN) => {
        return obj.dataBaseName === value;
      };
    case clsViewInfoEN.con_KeyForMainTab:
      return (obj: clsViewInfoEN) => {
        return obj.keyForMainTab === value;
      };
    case clsViewInfoEN.con_KeyForDetailTab:
      return (obj: clsViewInfoEN) => {
        return obj.keyForDetailTab === value;
      };
    case clsViewInfoEN.con_IsNeedSort:
      return (obj: clsViewInfoEN) => {
        return obj.isNeedSort === value;
      };
    case clsViewInfoEN.con_IsNeedTransCode:
      return (obj: clsViewInfoEN) => {
        return obj.isNeedTransCode === value;
      };
    case clsViewInfoEN.con_IsNeedSetExportFld:
      return (obj: clsViewInfoEN) => {
        return obj.isNeedSetExportFld === value;
      };
    case clsViewInfoEN.con_UserId:
      return (obj: clsViewInfoEN) => {
        return obj.userId === value;
      };
    case clsViewInfoEN.con_PrjId:
      return (obj: clsViewInfoEN) => {
        return obj.prjId === value;
      };
    case clsViewInfoEN.con_ViewFunction:
      return (obj: clsViewInfoEN) => {
        return obj.viewFunction === value;
      };
    case clsViewInfoEN.con_ViewDetail:
      return (obj: clsViewInfoEN) => {
        return obj.viewDetail === value;
      };
    case clsViewInfoEN.con_DefaMenuName:
      return (obj: clsViewInfoEN) => {
        return obj.defaMenuName === value;
      };
    case clsViewInfoEN.con_DetailTabId:
      return (obj: clsViewInfoEN) => {
        return obj.detailTabId === value;
      };
    case clsViewInfoEN.con_FileName:
      return (obj: clsViewInfoEN) => {
        return obj.fileName === value;
      };
    case clsViewInfoEN.con_FilePath:
      return (obj: clsViewInfoEN) => {
        return obj.filePath === value;
      };
    case clsViewInfoEN.con_MainTabId:
      return (obj: clsViewInfoEN) => {
        return obj.mainTabId === value;
      };
    case clsViewInfoEN.con_ViewCnName:
      return (obj: clsViewInfoEN) => {
        return obj.viewCnName === value;
      };
    case clsViewInfoEN.con_ViewGroupId:
      return (obj: clsViewInfoEN) => {
        return obj.viewGroupId === value;
      };
    case clsViewInfoEN.con_InRelaTabId:
      return (obj: clsViewInfoEN) => {
        return obj.inRelaTabId === value;
      };
    case clsViewInfoEN.con_InSqlDsTypeId:
      return (obj: clsViewInfoEN) => {
        return obj.inSqlDsTypeId === value;
      };
    case clsViewInfoEN.con_OutRelaTabId:
      return (obj: clsViewInfoEN) => {
        return obj.outRelaTabId === value;
      };
    case clsViewInfoEN.con_OutSqlDsTypeId:
      return (obj: clsViewInfoEN) => {
        return obj.outSqlDsTypeId === value;
      };
    case clsViewInfoEN.con_DetailTabType:
      return (obj: clsViewInfoEN) => {
        return obj.detailTabType === value;
      };
    case clsViewInfoEN.con_DetailViewId:
      return (obj: clsViewInfoEN) => {
        return obj.detailViewId === value;
      };
    case clsViewInfoEN.con_MainTabType:
      return (obj: clsViewInfoEN) => {
        return obj.mainTabType === value;
      };
    case clsViewInfoEN.con_MainViewId:
      return (obj: clsViewInfoEN) => {
        return obj.mainViewId === value;
      };
    case clsViewInfoEN.con_GeneCodeDate:
      return (obj: clsViewInfoEN) => {
        return obj.geneCodeDate === value;
      };
    case clsViewInfoEN.con_TaskId:
      return (obj: clsViewInfoEN) => {
        return obj.taskId === value;
      };
    case clsViewInfoEN.con_KeyId4Test:
      return (obj: clsViewInfoEN) => {
        return obj.keyId4Test === value;
      };
    case clsViewInfoEN.con_ViewMasterId:
      return (obj: clsViewInfoEN) => {
        return obj.viewMasterId === value;
      };
    case clsViewInfoEN.con_IsShare:
      return (obj: clsViewInfoEN) => {
        return obj.isShare === value;
      };
    case clsViewInfoEN.con_ErrMsg:
      return (obj: clsViewInfoEN) => {
        return obj.errMsg === value;
      };
    case clsViewInfoEN.con_UpdDate:
      return (obj: clsViewInfoEN) => {
        return obj.updDate === value;
      };
    case clsViewInfoEN.con_UpdUserId:
      return (obj: clsViewInfoEN) => {
        return obj.updUserId === value;
      };
    case clsViewInfoEN.con_Memo:
      return (obj: clsViewInfoEN) => {
        return obj.memo === value;
      };
    case clsViewInfoEN.con_RegionNum:
      return (obj: clsViewInfoEN) => {
        return obj.regionNum === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewInfo]中不存在!(in ${viewInfo_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function ViewInfo_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsViewInfoWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsViewInfoWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsViewInfoEN.con_ViewId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsViewInfoEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsViewInfoEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strViewId = strInValue;
  if (IsNullOrEmpty(strViewId) == true) {
    return '';
  }
  const objViewInfo = await ViewInfo_GetObjByViewIdCache(strViewId, strPrjIdClassfy);
  if (objViewInfo == null) return '';
  if (objViewInfo.GetFldValue(strOutFldName) == null) return '';
  return objViewInfo.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function ViewInfo_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsViewInfoWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsViewInfoWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsViewInfoEN.con_ViewId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrViewInfo = await ViewInfo_GetObjLstCache(strPrjIdClassfy);
  if (arrViewInfo == null) return [];
  let arrViewInfoSel = arrViewInfo;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrViewInfoSel = arrViewInfoSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrViewInfoSel = arrViewInfoSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrViewInfoSel = arrViewInfoSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrViewInfoSel.length == 0) return [];
  return arrViewInfoSel.map((x) => x.viewId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewInfo_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldName,
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const arrId = data.returnStrLst.split(',');
      return arrId;
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewInfo_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
export async function ViewInfo_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
export async function ViewInfo_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewInfoEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

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
      const objViewInfo = ViewInfo_GetObjFromJsonObj(returnObj);
      return objViewInfo;
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
export async function ViewInfo_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewInfoEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewInfoEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewInfoEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsViewInfoEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewInfoEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrViewInfoExObjLstCache: Array<clsViewInfoEN> = CacheHelper.Get(strKey);
    const arrViewInfoObjLstT = ViewInfo_GetObjLstByJSONObjLst(arrViewInfoExObjLstCache);
    return arrViewInfoObjLstT;
  }
  try {
    const arrViewInfoExObjLst = await ViewInfo_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrViewInfoExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewInfoExObjLst.length,
    );
    console.log(strInfo);
    return arrViewInfoExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewInfo_ConstructorName,
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
export async function ViewInfo_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewInfoEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewInfoEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsViewInfoEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewInfoEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsViewInfoEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewInfoEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewInfoExObjLstCache: Array<clsViewInfoEN> = JSON.parse(strTempObjLst);
    const arrViewInfoObjLstT = ViewInfo_GetObjLstByJSONObjLst(arrViewInfoExObjLstCache);
    return arrViewInfoObjLstT;
  }
  try {
    const arrViewInfoExObjLst = await ViewInfo_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsViewInfoEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrViewInfoExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewInfoExObjLst.length,
    );
    console.log(strInfo);
    return arrViewInfoExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewInfo_ConstructorName,
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
export async function ViewInfo_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsViewInfoEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewInfoObjLstCache: Array<clsViewInfoEN> = JSON.parse(strTempObjLst);
    return arrViewInfoObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ViewInfo_GetObjLstAsync(strWhereCond: string): Promise<Array<clsViewInfoEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

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
          viewInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
export async function ViewInfo_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewInfoEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewInfoEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsViewInfoEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewInfoEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsViewInfoEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewInfoEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewInfoExObjLstCache: Array<clsViewInfoEN> = JSON.parse(strTempObjLst);
    const arrViewInfoObjLstT = ViewInfo_GetObjLstByJSONObjLst(arrViewInfoExObjLstCache);
    return arrViewInfoObjLstT;
  }
  try {
    const arrViewInfoExObjLst = await ViewInfo_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsViewInfoEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrViewInfoExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewInfoExObjLst.length,
    );
    console.log(strInfo);
    return arrViewInfoExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewInfo_ConstructorName,
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
export async function ViewInfo_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsViewInfoEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewInfoObjLstCache: Array<clsViewInfoEN> = JSON.parse(strTempObjLst);
    return arrViewInfoObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewInfo_GetObjLstCache(strPrjId: string): Promise<Array<clsViewInfoEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空！(In clsViewInfoWApi.ViewInfo_GetObjLstCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsViewInfoWApi.ViewInfo_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrViewInfoObjLstCache;
  switch (clsViewInfoEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewInfoObjLstCache = await ViewInfo_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrViewInfoObjLstCache = await ViewInfo_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrViewInfoObjLstCache = await ViewInfo_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrViewInfoObjLstCache = await ViewInfo_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrViewInfoObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewInfo_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrViewInfoObjLstCache;
  switch (clsViewInfoEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewInfoObjLstCache = await ViewInfo_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrViewInfoObjLstCache = await ViewInfo_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrViewInfoObjLstCache = null;
      break;
    default:
      arrViewInfoObjLstCache = null;
      break;
  }
  return arrViewInfoObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrViewIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewInfo_GetSubObjLstCache(
  objViewInfoCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrViewInfoObjLstCache = await ViewInfo_GetObjLstCache(strPrjId);
  let arrViewInfoSel = arrViewInfoObjLstCache;
  if (objViewInfoCond.GetConditions().length == 0) return arrViewInfoSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objViewInfoCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrViewInfoSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewInfoCond),
      viewInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewInfoEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrViewId:关键字列表
 * @returns 对象列表
 **/
export async function ViewInfo_GetObjLstByViewIdLstAsync(
  arrViewId: Array<string>,
): Promise<Array<clsViewInfoEN>> {
  const strThisFuncName = 'GetObjLstByViewIdLstAsync';
  const strAction = 'GetObjLstByViewIdLst';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          viewInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
 * @param arrstrViewIdLst:关键字列表
 * @returns 对象列表
 */
export async function ViewInfo_GetObjLstByViewIdLstCache(
  arrViewIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByViewIdLstCache';
  try {
    const arrViewInfoObjLstCache = await ViewInfo_GetObjLstCache(strPrjId);
    const arrViewInfoSel = arrViewInfoObjLstCache.filter(
      (x) => arrViewIdLst.indexOf(x.viewId) > -1,
    );
    return arrViewInfoSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrViewIdLst.join(','),
      viewInfo_ConstructorName,
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
export async function ViewInfo_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewInfoEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

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
          viewInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
export async function ViewInfo_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewInfoEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

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
          viewInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
export async function ViewInfo_GetObjLstByPagerCache(objPagerPara: stuPagerPara, strPrjId: string) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewInfoEN>();
  const arrViewInfoObjLstCache = await ViewInfo_GetObjLstCache(strPrjId);
  if (arrViewInfoObjLstCache.length == 0) return arrViewInfoObjLstCache;
  let arrViewInfoSel = arrViewInfoObjLstCache;
  const objViewInfoCond = objPagerPara.conditionCollection;
  if (objViewInfoCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsViewInfoEN>();
  }
  //console.log("clsViewInfoWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objViewInfoCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewInfoSel.length == 0) return arrViewInfoSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewInfoSel = arrViewInfoSel.sort(ViewInfo_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewInfoSel = arrViewInfoSel.sort(objPagerPara.sortFun);
    }
    arrViewInfoSel = arrViewInfoSel.slice(intStart, intEnd);
    return arrViewInfoSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewInfoEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ViewInfo_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewInfoEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewInfoEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

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
          viewInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
 * @param strViewId:关键字
 * @returns 获取删除的结果
 **/
export async function ViewInfo_DelRecordAsync(strViewId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(viewInfo_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strViewId);

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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
 * @param arrViewId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ViewInfo_DelViewInfosAsync(arrViewId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelViewInfosAsync';
  const strAction = 'DelViewInfos';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrViewId, config);
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ViewInfo_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
): Promise<Array<clsViewInfoENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrViewInfoObjLst = await ViewInfo_GetObjLstCache(strPrjId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsViewInfoENEx>();
  const arrViewInfoExObjLst = arrViewInfoObjLst.map((obj) => {
    const cacheKey = `${obj.viewId}_${obj.prjId}`;
    if (viewInfoCache[cacheKey]) {
      const oldObj = viewInfoCache[cacheKey];
      return oldObj;
    } else {
      const newObj = ViewInfo_CopyToEx(obj);
      arrNewObj.push(newObj);
      viewInfoCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await ViewInfo_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsViewInfoEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrViewInfoExObjLst) {
      await ViewInfo_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.viewId}_${newObj.prjId}`;
      viewInfoCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrViewInfoExObjLst.length == 0) return arrViewInfoExObjLst;
  let arrViewInfoSel: Array<clsViewInfoENEx> = arrViewInfoExObjLst;
  const objViewInfoCond = objPagerPara.conditionCollection;
  if (objViewInfoCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrViewInfoExObjLst;
  }
  try {
    for (const objCondition of objViewInfoCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewInfoSel.length == 0) return arrViewInfoSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrViewInfoSel = arrViewInfoSel.sort(
        ViewInfo_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewInfoSel = arrViewInfoSel.sort(objPagerPara.sortFun);
    }
    arrViewInfoSel = arrViewInfoSel.slice(intStart, intEnd);
    return arrViewInfoSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewInfoENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objViewInfoENS:源对象
 * @returns 目标对象=>clsViewInfoEN:objViewInfoENT
 **/
export function ViewInfo_CopyToEx(objViewInfoENS: clsViewInfoEN): clsViewInfoENEx {
  const strThisFuncName = ViewInfo_CopyToEx.name;
  const objViewInfoENT = new clsViewInfoENEx();
  try {
    ObjectAssign(objViewInfoENT, objViewInfoENS);
    return objViewInfoENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewInfoENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ViewInfo_FuncMapByFldName(strFldName: string, objViewInfoEx: clsViewInfoENEx) {
  const strThisFuncName = ViewInfo_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsViewInfoEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsViewInfoENEx.con_ApplicationTypeSimName:
      return ViewInfo_FuncMapApplicationTypeSimName(objViewInfoEx);
    case clsViewInfoENEx.con_FuncModuleName:
      return ViewInfo_FuncMapFuncModuleName(objViewInfoEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ViewInfo_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewInfoENEx.con_ApplicationTypeSimName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.applicationTypeSimName === null && b.applicationTypeSimName === null) return 0;
          if (a.applicationTypeSimName === null) return -1;
          if (b.applicationTypeSimName === null) return 1;
          return a.applicationTypeSimName.localeCompare(b.applicationTypeSimName);
        };
      case clsViewInfoENEx.con_FuncModuleName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return a.funcModuleName.localeCompare(b.funcModuleName);
        };
      case clsViewInfoENEx.con_MainTabName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.mainTabName === null && b.mainTabName === null) return 0;
          if (a.mainTabName === null) return -1;
          if (b.mainTabName === null) return 1;
          return a.mainTabName.localeCompare(b.mainTabName);
        };
      case clsViewInfoENEx.con_MainTabNameEx:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.mainTabNameEx === null && b.mainTabNameEx === null) return 0;
          if (a.mainTabNameEx === null) return -1;
          if (b.mainTabNameEx === null) return 1;
          return a.mainTabNameEx.localeCompare(b.mainTabNameEx);
        };
      case clsViewInfoENEx.con_DetailTabNameEx:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.detailTabNameEx === null && b.detailTabNameEx === null) return 0;
          if (a.detailTabNameEx === null) return -1;
          if (b.detailTabNameEx === null) return 1;
          return a.detailTabNameEx.localeCompare(b.detailTabNameEx);
        };
      case clsViewInfoENEx.con_DetailTabName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.detailTabName === null && b.detailTabName === null) return 0;
          if (a.detailTabName === null) return -1;
          if (b.detailTabName === null) return 1;
          return a.detailTabName.localeCompare(b.detailTabName);
        };
      case clsViewInfoENEx.con_ViewNameEx:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return a.viewNameEx.localeCompare(b.viewNameEx);
        };
      case clsViewInfoENEx.con_InRelaTabName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.inRelaTabName === null && b.inRelaTabName === null) return 0;
          if (a.inRelaTabName === null) return -1;
          if (b.inRelaTabName === null) return 1;
          return a.inRelaTabName.localeCompare(b.inRelaTabName);
        };
      case clsViewInfoENEx.con_OutRelaTabName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.outRelaTabName === null && b.outRelaTabName === null) return 0;
          if (a.outRelaTabName === null) return -1;
          if (b.outRelaTabName === null) return 1;
          return a.outRelaTabName.localeCompare(b.outRelaTabName);
        };
      case clsViewInfoENEx.con_TabName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsViewInfoENEx.con_TrClass:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return -1;
          if (b.trClass === null) return 1;
          return a.trClass.localeCompare(b.trClass);
        };
      case clsViewInfoENEx.con_ViewCnNameEx:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.viewCnNameEx === null && b.viewCnNameEx === null) return 0;
          if (a.viewCnNameEx === null) return -1;
          if (b.viewCnNameEx === null) return 1;
          return a.viewCnNameEx.localeCompare(b.viewCnNameEx);
        };
      case clsViewInfoENEx.con_CmPrjNames:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.cmPrjNames === null && b.cmPrjNames === null) return 0;
          if (a.cmPrjNames === null) return -1;
          if (b.cmPrjNames === null) return 1;
          return a.cmPrjNames.localeCompare(b.cmPrjNames);
        };
      default:
        return ViewInfo_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsViewInfoENEx.con_ApplicationTypeSimName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.applicationTypeSimName === null && b.applicationTypeSimName === null) return 0;
          if (a.applicationTypeSimName === null) return 1;
          if (b.applicationTypeSimName === null) return -1;
          return b.applicationTypeSimName.localeCompare(a.applicationTypeSimName);
        };
      case clsViewInfoENEx.con_FuncModuleName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return b.funcModuleName.localeCompare(a.funcModuleName);
        };
      case clsViewInfoENEx.con_MainTabName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.mainTabName === null && b.mainTabName === null) return 0;
          if (a.mainTabName === null) return 1;
          if (b.mainTabName === null) return -1;
          return b.mainTabName.localeCompare(a.mainTabName);
        };
      case clsViewInfoENEx.con_MainTabNameEx:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.mainTabNameEx === null && b.mainTabNameEx === null) return 0;
          if (a.mainTabNameEx === null) return 1;
          if (b.mainTabNameEx === null) return -1;
          return b.mainTabNameEx.localeCompare(a.mainTabNameEx);
        };
      case clsViewInfoENEx.con_DetailTabNameEx:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.detailTabNameEx === null && b.detailTabNameEx === null) return 0;
          if (a.detailTabNameEx === null) return 1;
          if (b.detailTabNameEx === null) return -1;
          return b.detailTabNameEx.localeCompare(a.detailTabNameEx);
        };
      case clsViewInfoENEx.con_DetailTabName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.detailTabName === null && b.detailTabName === null) return 0;
          if (a.detailTabName === null) return 1;
          if (b.detailTabName === null) return -1;
          return b.detailTabName.localeCompare(a.detailTabName);
        };
      case clsViewInfoENEx.con_ViewNameEx:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return b.viewNameEx.localeCompare(a.viewNameEx);
        };
      case clsViewInfoENEx.con_InRelaTabName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.inRelaTabName === null && b.inRelaTabName === null) return 0;
          if (a.inRelaTabName === null) return 1;
          if (b.inRelaTabName === null) return -1;
          return b.inRelaTabName.localeCompare(a.inRelaTabName);
        };
      case clsViewInfoENEx.con_OutRelaTabName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.outRelaTabName === null && b.outRelaTabName === null) return 0;
          if (a.outRelaTabName === null) return 1;
          if (b.outRelaTabName === null) return -1;
          return b.outRelaTabName.localeCompare(a.outRelaTabName);
        };
      case clsViewInfoENEx.con_TabName:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsViewInfoENEx.con_TrClass:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return 1;
          if (b.trClass === null) return -1;
          return b.trClass.localeCompare(a.trClass);
        };
      case clsViewInfoENEx.con_ViewCnNameEx:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.viewCnNameEx === null && b.viewCnNameEx === null) return 0;
          if (a.viewCnNameEx === null) return 1;
          if (b.viewCnNameEx === null) return -1;
          return b.viewCnNameEx.localeCompare(a.viewCnNameEx);
        };
      case clsViewInfoENEx.con_CmPrjNames:
        return (a: clsViewInfoENEx, b: clsViewInfoENEx) => {
          if (a.cmPrjNames === null && b.cmPrjNames === null) return 0;
          if (a.cmPrjNames === null) return 1;
          if (b.cmPrjNames === null) return -1;
          return b.cmPrjNames.localeCompare(a.cmPrjNames);
        };
      default:
        return ViewInfo_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewInfoS:源对象
 **/
export async function ViewInfo_FuncMapApplicationTypeSimName(objViewInfo: clsViewInfoENEx) {
  const strThisFuncName = ViewInfo_FuncMapApplicationTypeSimName.name;
  try {
    if (IsNullOrEmpty(objViewInfo.applicationTypeSimName) == true) {
      const ApplicationTypeApplicationTypeId = objViewInfo.applicationTypeId.toString();
      const ApplicationTypeApplicationTypeSimName = await ApplicationType_func(
        clsApplicationTypeEN.con_ApplicationTypeId,
        clsApplicationTypeEN.con_ApplicationTypeSimName,
        ApplicationTypeApplicationTypeId,
      );
      objViewInfo.applicationTypeSimName = ApplicationTypeApplicationTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001316)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewInfoS:源对象
 **/
export async function ViewInfo_FuncMapFuncModuleName(objViewInfo: clsViewInfoENEx) {
  const strThisFuncName = ViewInfo_FuncMapFuncModuleName.name;
  try {
    if (IsNullOrEmpty(objViewInfo.funcModuleName) == true) {
      const FuncModuleAgcFuncModuleAgcId = objViewInfo.funcModuleAgcId;
      if (IsNullOrEmpty(objViewInfo.prjId) == true) {
        const strMsg = `函数映射[FuncModuleName]数据出错,prjId不能为空!(in ${viewInfo_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const FuncModuleAgcFuncModuleName = await FuncModule_Agc_func(
        clsFuncModule_AgcEN.con_FuncModuleAgcId,
        clsFuncModule_AgcEN.con_FuncModuleName,
        FuncModuleAgcFuncModuleAgcId,
        objViewInfo.prjId,
      );
      objViewInfo.funcModuleName = FuncModuleAgcFuncModuleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001372)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function ViewInfo_DelViewInfosByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelViewInfosByCondAsync';
  const strAction = 'DelViewInfosByCond';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
 * @param objViewInfoEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewInfo_AddNewRecordAsync(objViewInfoEN: clsViewInfoEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objViewInfoEN.viewId === null || objViewInfoEN.viewId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objViewInfoEN);
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewInfoEN, config);
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
 * @param objViewInfoEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewInfo_AddNewRecordWithMaxIdAsync(
  objViewInfoEN: clsViewInfoEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewInfoEN, config);
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function ViewInfo_AddNewObjSave(
  objViewInfoEN: clsViewInfoEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    ViewInfo_CheckPropertyNew(objViewInfoEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewInfo_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ViewInfo_CheckUniCond4Add(objViewInfoEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await ViewInfo_AddNewRecordWithMaxIdAsync(objViewInfoEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      ViewInfo_ReFreshCache(objViewInfoEN.prjId);
    } else {
      const strInfo = `添加[界面(ViewInfo)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${viewInfo_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function ViewInfo_CheckUniCond4Add(objViewInfoEN: clsViewInfoEN): Promise<boolean> {
  const strUniquenessCondition = ViewInfo_GetUniCondStr(objViewInfoEN);
  const bolIsExistCondition = await ViewInfo_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Update)
 **/
export async function ViewInfo_CheckUniCond4Update(objViewInfoEN: clsViewInfoEN): Promise<boolean> {
  const strUniquenessCondition = ViewInfo_GetUniCondStr4Update(objViewInfoEN);
  const bolIsExistCondition = await ViewInfo_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function ViewInfo_UpdateObjSave(objViewInfoEN: clsViewInfoEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objViewInfoEN.sfUpdFldSetStr = objViewInfoEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objViewInfoEN.viewId == '' || objViewInfoEN.viewId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    ViewInfo_CheckProperty4Update(objViewInfoEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewInfo_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ViewInfo_CheckUniCond4Update(objViewInfoEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await ViewInfo_UpdateRecordAsync(objViewInfoEN);
    if (returnBool == true) {
      ViewInfo_ReFreshCache(objViewInfoEN.prjId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${viewInfo_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objViewInfoEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewInfo_AddNewRecordWithReturnKeyAsync(
  objViewInfoEN: clsViewInfoEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewInfoEN, config);
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
 * @param objViewInfoEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewInfo_UpdateRecordAsync(objViewInfoEN: clsViewInfoEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewInfoEN.sfUpdFldSetStr === undefined ||
    objViewInfoEN.sfUpdFldSetStr === null ||
    objViewInfoEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objViewInfoEN.viewId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewInfoEN, config);
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
 * 调用WebApi来编辑记录（存在就修改，不存在就添加）,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_EditRecordExAsync)
 * @param objViewInfoEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewInfo_EditRecordExAsync(objViewInfoEN: clsViewInfoEN): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objViewInfoEN.sfUpdFldSetStr === undefined ||
    objViewInfoEN.sfUpdFldSetStr === null ||
    objViewInfoEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objViewInfoEN.viewId);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewInfoEN, config);
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
 * @param objViewInfoEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewInfo_UpdateWithConditionAsync(
  objViewInfoEN: clsViewInfoEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewInfoEN.sfUpdFldSetStr === undefined ||
    objViewInfoEN.sfUpdFldSetStr === null ||
    objViewInfoEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objViewInfoEN.viewId);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);
  objViewInfoEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewInfoEN, config);
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
 * @param objstrViewIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewInfo_IsExistRecordCache(
  objViewInfoCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrViewInfoObjLstCache = await ViewInfo_GetObjLstCache(strPrjId);
  if (arrViewInfoObjLstCache == null) return false;
  let arrViewInfoSel = arrViewInfoObjLstCache;
  if (objViewInfoCond.GetConditions().length == 0) return arrViewInfoSel.length > 0 ? true : false;
  try {
    for (const objCondition of objViewInfoCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewInfoSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objViewInfoCond),
      viewInfo_ConstructorName,
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
export async function ViewInfo_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
 * @param strViewId:所给的关键字
 * @returns 对象
 */
export async function ViewInfo_IsExistCache(strViewId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrViewInfoObjLstCache = await ViewInfo_GetObjLstCache(strPrjId);
  if (arrViewInfoObjLstCache == null) return false;
  try {
    const arrViewInfoSel = arrViewInfoObjLstCache.filter((x) => x.viewId == strViewId);
    if (arrViewInfoSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strViewId,
      viewInfo_ConstructorName,
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
 * @param strViewId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ViewInfo_IsExistAsync(strViewId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strViewId,
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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
export async function ViewInfo_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
 * @param objViewInfoCond:条件对象
 * @returns 对象列表记录数
 */
export async function ViewInfo_GetRecCountByCondCache(
  objViewInfoCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrViewInfoObjLstCache = await ViewInfo_GetObjLstCache(strPrjId);
  if (arrViewInfoObjLstCache == null) return 0;
  let arrViewInfoSel = arrViewInfoObjLstCache;
  if (objViewInfoCond.GetConditions().length == 0) return arrViewInfoSel.length;
  try {
    for (const objCondition of objViewInfoCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewInfoSel = arrViewInfoSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewInfoSel = arrViewInfoSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrViewInfoSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewInfoCond),
      viewInfo_ConstructorName,
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
export async function ViewInfo_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdByPrefixAsync';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
export async function ViewInfo_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewInfo_Controller, strAction);

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
        viewInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewInfo_ConstructorName,
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
export function ViewInfo_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewInfo_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsViewInfoWApi.clsViewInfoWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsViewInfoWApi.clsViewInfoWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsViewInfoEN._CurrTabName, strPrjId);
  switch (clsViewInfoEN.CacheModeId) {
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
  clsViewInfoEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ViewInfo_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format('参数:[strPrjId]不能为空!(In clsViewInfoWApi.ViewInfo_ReFreshThisCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsViewInfoWApi.ViewInfo_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsViewInfoEN._CurrTabName, strPrjId);
    switch (clsViewInfoEN.CacheModeId) {
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
    clsViewInfoEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
    const strMsg = Format('刷新缓存成功!');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}
/**
 * 获取最新的缓存刷新时间
 * @returns 最新的缓存刷新时间，字符串型
 **/
export function ViewInfo_GetLastRefreshTime(): string {
  if (clsViewInfoEN._RefreshTimeLst.length == 0) return '';
  return clsViewInfoEN._RefreshTimeLst[clsViewInfoEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function ViewInfo_BindDdl_ViewIdByPrjIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsViewInfoWApi.BindDdl_ViewIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsViewInfoWApi.BindDdl_ViewIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_ViewIdByPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ViewIdByPrjIdInDivCache");
  let arrObjLstSel = await ViewInfo_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsViewInfoEN.con_ViewId,
    clsViewInfoEN.con_ViewName,
    '界面...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function ViewInfo_GetArrViewInfoByPrjId(strPrjId: string) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsViewInfoWApi.BindDdl_ViewIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsViewInfoWApi.BindDdl_ViewIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_ViewIdByPrjIdInDivCache");
  const arrViewInfo = new Array<clsViewInfoEN>();
  let arrObjLstSel = await ViewInfo_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  const obj0 = new clsViewInfoEN();
  obj0.viewId = '0';
  obj0.viewName = '选界面...';
  arrViewInfo.push(obj0);
  arrObjLstSel.forEach((x) => arrViewInfo.push(x));
  return arrViewInfo;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewInfo_CheckPropertyNew(pobjViewInfoEN: clsViewInfoEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjViewInfoEN.viewName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[界面名称]不能为空(In 界面)!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjViewInfoEN.applicationTypeId ||
    (pobjViewInfoEN.applicationTypeId != null &&
      pobjViewInfoEN.applicationTypeId.toString() === '') ||
    pobjViewInfoEN.applicationTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[应用程序类型ID]不能为空(In 界面)!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjViewInfoEN.isNeedSort ||
    (pobjViewInfoEN.isNeedSort != null && pobjViewInfoEN.isNeedSort.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否需要排序]不能为空(In 界面)!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjViewInfoEN.isNeedTransCode ||
    (pobjViewInfoEN.isNeedTransCode != null && pobjViewInfoEN.isNeedTransCode.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否需要转换代码]不能为空(In 界面)!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    null === pobjViewInfoEN.isNeedSetExportFld ||
    (pobjViewInfoEN.isNeedSetExportFld != null &&
      pobjViewInfoEN.isNeedSetExportFld.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000411)字段[是否需要设置导出字段]不能为空(In 界面)!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.userId) === true || pobjViewInfoEN.userId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[用户Id]不能为空(In 界面)!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.prjId) === true || pobjViewInfoEN.prjId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 界面)!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.defaMenuName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[缺省菜单名]不能为空(In 界面)!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.fileName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[文件名]不能为空(In 界面)!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.filePath) === true) {
    throw new Error(
      `(errid:Watl000411)字段[文件路径]不能为空(In 界面)!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.viewCnName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[视图中文名]不能为空(In 界面)!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjViewInfoEN.viewId) == false && GetStrLen(pobjViewInfoEN.viewId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[界面Id(viewId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.viewId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.viewName) == false && GetStrLen(pobjViewInfoEN.viewName) > 100) {
    throw new Error(
      `(errid:Watl000413)字段[界面名称(viewName)]的长度不能超过100(In 界面(ViewInfo))!值:${pobjViewInfoEN.viewName}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.funcModuleAgcId) == false &&
    GetStrLen(pobjViewInfoEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.funcModuleAgcId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.dataBaseName) == false &&
    GetStrLen(pobjViewInfoEN.dataBaseName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据库名(dataBaseName)]的长度不能超过50(In 界面(ViewInfo))!值:${pobjViewInfoEN.dataBaseName}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.keyForMainTab) == false &&
    GetStrLen(pobjViewInfoEN.keyForMainTab) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[主表关键字(keyForMainTab)]的长度不能超过50(In 界面(ViewInfo))!值:${pobjViewInfoEN.keyForMainTab}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.keyForDetailTab) == false &&
    GetStrLen(pobjViewInfoEN.keyForDetailTab) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[明细表关键字(keyForDetailTab)]的长度不能超过50(In 界面(ViewInfo))!值:${pobjViewInfoEN.keyForDetailTab}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.userId) == false && GetStrLen(pobjViewInfoEN.userId) > 18) {
    throw new Error(
      `(errid:Watl000413)字段[用户Id(userId)]的长度不能超过18(In 界面(ViewInfo))!值:${pobjViewInfoEN.userId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.prjId) == false && GetStrLen(pobjViewInfoEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 界面(ViewInfo))!值:${pobjViewInfoEN.prjId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewFunction) == false &&
    GetStrLen(pobjViewInfoEN.viewFunction) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面功能(viewFunction)]的长度不能超过100(In 界面(ViewInfo))!值:${pobjViewInfoEN.viewFunction}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewDetail) == false &&
    GetStrLen(pobjViewInfoEN.viewDetail) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面说明(viewDetail)]的长度不能超过1000(In 界面(ViewInfo))!值:${pobjViewInfoEN.viewDetail}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.defaMenuName) == false &&
    GetStrLen(pobjViewInfoEN.defaMenuName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[缺省菜单名(defaMenuName)]的长度不能超过100(In 界面(ViewInfo))!值:${pobjViewInfoEN.defaMenuName}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.detailTabId) == false &&
    GetStrLen(pobjViewInfoEN.detailTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[明细表ID(detailTabId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.detailTabId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.fileName) == false && GetStrLen(pobjViewInfoEN.fileName) > 150) {
    throw new Error(
      `(errid:Watl000413)字段[文件名(fileName)]的长度不能超过150(In 界面(ViewInfo))!值:${pobjViewInfoEN.fileName}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.filePath) == false && GetStrLen(pobjViewInfoEN.filePath) > 500) {
    throw new Error(
      `(errid:Watl000413)字段[文件路径(filePath)]的长度不能超过500(In 界面(ViewInfo))!值:${pobjViewInfoEN.filePath}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.mainTabId) == false && GetStrLen(pobjViewInfoEN.mainTabId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[主表ID(mainTabId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.mainTabId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewCnName) == false &&
    GetStrLen(pobjViewInfoEN.viewCnName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[视图中文名(viewCnName)]的长度不能超过100(In 界面(ViewInfo))!值:${pobjViewInfoEN.viewCnName}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewGroupId) == false &&
    GetStrLen(pobjViewInfoEN.viewGroupId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面组ID(viewGroupId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.viewGroupId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.inRelaTabId) == false &&
    GetStrLen(pobjViewInfoEN.inRelaTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[输入数据源表ID(inRelaTabId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.inRelaTabId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.inSqlDsTypeId) == false &&
    GetStrLen(pobjViewInfoEN.inSqlDsTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[输入数据源类型(inSqlDsTypeId)]的长度不能超过2(In 界面(ViewInfo))!值:${pobjViewInfoEN.inSqlDsTypeId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.outRelaTabId) == false &&
    GetStrLen(pobjViewInfoEN.outRelaTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[输出数据源表ID(outRelaTabId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.outRelaTabId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.outSqlDsTypeId) == false &&
    GetStrLen(pobjViewInfoEN.outSqlDsTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[输出数据源类型(outSqlDsTypeId)]的长度不能超过2(In 界面(ViewInfo))!值:${pobjViewInfoEN.outSqlDsTypeId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.detailTabType) == false &&
    GetStrLen(pobjViewInfoEN.detailTabType) > 10
  ) {
    throw new Error(
      `(errid:Watl000413)字段[DetailTabType(detailTabType)]的长度不能超过10(In 界面(ViewInfo))!值:${pobjViewInfoEN.detailTabType}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.detailViewId) == false &&
    GetStrLen(pobjViewInfoEN.detailViewId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[DetailViewId(detailViewId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.detailViewId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.mainTabType) == false &&
    GetStrLen(pobjViewInfoEN.mainTabType) > 10
  ) {
    throw new Error(
      `(errid:Watl000413)字段[MainTabType(mainTabType)]的长度不能超过10(In 界面(ViewInfo))!值:${pobjViewInfoEN.mainTabType}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.mainViewId) == false &&
    GetStrLen(pobjViewInfoEN.mainViewId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[MainViewId(mainViewId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.mainViewId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.geneCodeDate) == false &&
    GetStrLen(pobjViewInfoEN.geneCodeDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[生成代码日期(geneCodeDate)]的长度不能超过20(In 界面(ViewInfo))!值:${pobjViewInfoEN.geneCodeDate}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.taskId) == false && GetStrLen(pobjViewInfoEN.taskId) > 16) {
    throw new Error(
      `(errid:Watl000413)字段[任务Id(taskId)]的长度不能超过16(In 界面(ViewInfo))!值:${pobjViewInfoEN.taskId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.keyId4Test) == false &&
    GetStrLen(pobjViewInfoEN.keyId4Test) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[测试关键字Id(keyId4Test)]的长度不能超过50(In 界面(ViewInfo))!值:${pobjViewInfoEN.keyId4Test}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewMasterId) == false &&
    GetStrLen(pobjViewInfoEN.viewMasterId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[界面母版Id(viewMasterId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.viewMasterId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.errMsg) == false && GetStrLen(pobjViewInfoEN.errMsg) > 2000) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In 界面(ViewInfo))!值:${pobjViewInfoEN.errMsg}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.updDate) == false && GetStrLen(pobjViewInfoEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 界面(ViewInfo))!值:${pobjViewInfoEN.updDate}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.updUserId) == false &&
    GetStrLen(pobjViewInfoEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 界面(ViewInfo))!值:${pobjViewInfoEN.updUserId}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.memo) == false && GetStrLen(pobjViewInfoEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 界面(ViewInfo))!值:${pobjViewInfoEN.memo}(clsViewInfoBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewId) == false &&
    undefined !== pobjViewInfoEN.viewId &&
    tzDataType.isString(pobjViewInfoEN.viewId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面Id(viewId)]的值:[${pobjViewInfoEN.viewId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewName) == false &&
    undefined !== pobjViewInfoEN.viewName &&
    tzDataType.isString(pobjViewInfoEN.viewName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面名称(viewName)]的值:[${pobjViewInfoEN.viewName}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjViewInfoEN.applicationTypeId &&
    undefined !== pobjViewInfoEN.applicationTypeId &&
    tzDataType.isNumber(pobjViewInfoEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjViewInfoEN.applicationTypeId}], 非法,应该为数值型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.funcModuleAgcId) == false &&
    undefined !== pobjViewInfoEN.funcModuleAgcId &&
    tzDataType.isString(pobjViewInfoEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[功能模块Id(funcModuleAgcId)]的值:[${pobjViewInfoEN.funcModuleAgcId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.dataBaseName) == false &&
    undefined !== pobjViewInfoEN.dataBaseName &&
    tzDataType.isString(pobjViewInfoEN.dataBaseName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据库名(dataBaseName)]的值:[${pobjViewInfoEN.dataBaseName}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.keyForMainTab) == false &&
    undefined !== pobjViewInfoEN.keyForMainTab &&
    tzDataType.isString(pobjViewInfoEN.keyForMainTab) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[主表关键字(keyForMainTab)]的值:[${pobjViewInfoEN.keyForMainTab}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.keyForDetailTab) == false &&
    undefined !== pobjViewInfoEN.keyForDetailTab &&
    tzDataType.isString(pobjViewInfoEN.keyForDetailTab) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[明细表关键字(keyForDetailTab)]的值:[${pobjViewInfoEN.keyForDetailTab}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjViewInfoEN.isNeedSort &&
    undefined !== pobjViewInfoEN.isNeedSort &&
    tzDataType.isBoolean(pobjViewInfoEN.isNeedSort) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否需要排序(isNeedSort)]的值:[${pobjViewInfoEN.isNeedSort}], 非法,应该为布尔型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjViewInfoEN.isNeedTransCode &&
    undefined !== pobjViewInfoEN.isNeedTransCode &&
    tzDataType.isBoolean(pobjViewInfoEN.isNeedTransCode) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否需要转换代码(isNeedTransCode)]的值:[${pobjViewInfoEN.isNeedTransCode}], 非法,应该为布尔型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjViewInfoEN.isNeedSetExportFld &&
    undefined !== pobjViewInfoEN.isNeedSetExportFld &&
    tzDataType.isBoolean(pobjViewInfoEN.isNeedSetExportFld) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否需要设置导出字段(isNeedSetExportFld)]的值:[${pobjViewInfoEN.isNeedSetExportFld}], 非法,应该为布尔型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.userId) == false &&
    undefined !== pobjViewInfoEN.userId &&
    tzDataType.isString(pobjViewInfoEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[用户Id(userId)]的值:[${pobjViewInfoEN.userId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.prjId) == false &&
    undefined !== pobjViewInfoEN.prjId &&
    tzDataType.isString(pobjViewInfoEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjViewInfoEN.prjId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewFunction) == false &&
    undefined !== pobjViewInfoEN.viewFunction &&
    tzDataType.isString(pobjViewInfoEN.viewFunction) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面功能(viewFunction)]的值:[${pobjViewInfoEN.viewFunction}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewDetail) == false &&
    undefined !== pobjViewInfoEN.viewDetail &&
    tzDataType.isString(pobjViewInfoEN.viewDetail) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面说明(viewDetail)]的值:[${pobjViewInfoEN.viewDetail}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.defaMenuName) == false &&
    undefined !== pobjViewInfoEN.defaMenuName &&
    tzDataType.isString(pobjViewInfoEN.defaMenuName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缺省菜单名(defaMenuName)]的值:[${pobjViewInfoEN.defaMenuName}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.detailTabId) == false &&
    undefined !== pobjViewInfoEN.detailTabId &&
    tzDataType.isString(pobjViewInfoEN.detailTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[明细表ID(detailTabId)]的值:[${pobjViewInfoEN.detailTabId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.fileName) == false &&
    undefined !== pobjViewInfoEN.fileName &&
    tzDataType.isString(pobjViewInfoEN.fileName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[文件名(fileName)]的值:[${pobjViewInfoEN.fileName}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.filePath) == false &&
    undefined !== pobjViewInfoEN.filePath &&
    tzDataType.isString(pobjViewInfoEN.filePath) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[文件路径(filePath)]的值:[${pobjViewInfoEN.filePath}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.mainTabId) == false &&
    undefined !== pobjViewInfoEN.mainTabId &&
    tzDataType.isString(pobjViewInfoEN.mainTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[主表ID(mainTabId)]的值:[${pobjViewInfoEN.mainTabId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewCnName) == false &&
    undefined !== pobjViewInfoEN.viewCnName &&
    tzDataType.isString(pobjViewInfoEN.viewCnName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[视图中文名(viewCnName)]的值:[${pobjViewInfoEN.viewCnName}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewGroupId) == false &&
    undefined !== pobjViewInfoEN.viewGroupId &&
    tzDataType.isString(pobjViewInfoEN.viewGroupId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面组ID(viewGroupId)]的值:[${pobjViewInfoEN.viewGroupId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.inRelaTabId) == false &&
    undefined !== pobjViewInfoEN.inRelaTabId &&
    tzDataType.isString(pobjViewInfoEN.inRelaTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[输入数据源表ID(inRelaTabId)]的值:[${pobjViewInfoEN.inRelaTabId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.inSqlDsTypeId) == false &&
    undefined !== pobjViewInfoEN.inSqlDsTypeId &&
    tzDataType.isString(pobjViewInfoEN.inSqlDsTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[输入数据源类型(inSqlDsTypeId)]的值:[${pobjViewInfoEN.inSqlDsTypeId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.outRelaTabId) == false &&
    undefined !== pobjViewInfoEN.outRelaTabId &&
    tzDataType.isString(pobjViewInfoEN.outRelaTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[输出数据源表ID(outRelaTabId)]的值:[${pobjViewInfoEN.outRelaTabId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.outSqlDsTypeId) == false &&
    undefined !== pobjViewInfoEN.outSqlDsTypeId &&
    tzDataType.isString(pobjViewInfoEN.outSqlDsTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[输出数据源类型(outSqlDsTypeId)]的值:[${pobjViewInfoEN.outSqlDsTypeId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.detailTabType) == false &&
    undefined !== pobjViewInfoEN.detailTabType &&
    tzDataType.isString(pobjViewInfoEN.detailTabType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[DetailTabType(detailTabType)]的值:[${pobjViewInfoEN.detailTabType}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.detailViewId) == false &&
    undefined !== pobjViewInfoEN.detailViewId &&
    tzDataType.isString(pobjViewInfoEN.detailViewId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[DetailViewId(detailViewId)]的值:[${pobjViewInfoEN.detailViewId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.mainTabType) == false &&
    undefined !== pobjViewInfoEN.mainTabType &&
    tzDataType.isString(pobjViewInfoEN.mainTabType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[MainTabType(mainTabType)]的值:[${pobjViewInfoEN.mainTabType}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.mainViewId) == false &&
    undefined !== pobjViewInfoEN.mainViewId &&
    tzDataType.isString(pobjViewInfoEN.mainViewId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[MainViewId(mainViewId)]的值:[${pobjViewInfoEN.mainViewId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.geneCodeDate) == false &&
    undefined !== pobjViewInfoEN.geneCodeDate &&
    tzDataType.isString(pobjViewInfoEN.geneCodeDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[生成代码日期(geneCodeDate)]的值:[${pobjViewInfoEN.geneCodeDate}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.taskId) == false &&
    undefined !== pobjViewInfoEN.taskId &&
    tzDataType.isString(pobjViewInfoEN.taskId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[任务Id(taskId)]的值:[${pobjViewInfoEN.taskId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.keyId4Test) == false &&
    undefined !== pobjViewInfoEN.keyId4Test &&
    tzDataType.isString(pobjViewInfoEN.keyId4Test) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[测试关键字Id(keyId4Test)]的值:[${pobjViewInfoEN.keyId4Test}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewMasterId) == false &&
    undefined !== pobjViewInfoEN.viewMasterId &&
    tzDataType.isString(pobjViewInfoEN.viewMasterId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[界面母版Id(viewMasterId)]的值:[${pobjViewInfoEN.viewMasterId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjViewInfoEN.isShare &&
    undefined !== pobjViewInfoEN.isShare &&
    tzDataType.isBoolean(pobjViewInfoEN.isShare) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否共享(isShare)]的值:[${pobjViewInfoEN.isShare}], 非法,应该为布尔型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.errMsg) == false &&
    undefined !== pobjViewInfoEN.errMsg &&
    tzDataType.isString(pobjViewInfoEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjViewInfoEN.errMsg}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.updDate) == false &&
    undefined !== pobjViewInfoEN.updDate &&
    tzDataType.isString(pobjViewInfoEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjViewInfoEN.updDate}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.updUserId) == false &&
    undefined !== pobjViewInfoEN.updUserId &&
    tzDataType.isString(pobjViewInfoEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjViewInfoEN.updUserId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.memo) == false &&
    undefined !== pobjViewInfoEN.memo &&
    tzDataType.isString(pobjViewInfoEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjViewInfoEN.memo}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjViewInfoEN.regionNum &&
    undefined !== pobjViewInfoEN.regionNum &&
    tzDataType.isNumber(pobjViewInfoEN.regionNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域数(regionNum)]的值:[${pobjViewInfoEN.regionNum}], 非法,应该为数值型(In 界面(ViewInfo))!(clsViewInfoBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjViewInfoEN.funcModuleAgcId) == false &&
    pobjViewInfoEN.funcModuleAgcId != '[nuull]' &&
    GetStrLen(pobjViewInfoEN.funcModuleAgcId) != 8
  ) {
    throw '(errid:Watl000415)字段[功能模块Id]作为外键字段,长度应该为8(In 界面)!(clsViewInfoBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.prjId) == false &&
    pobjViewInfoEN.prjId != '[nuull]' &&
    GetStrLen(pobjViewInfoEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程Id]作为外键字段,长度应该为4(In 界面)!(clsViewInfoBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewInfo_CheckProperty4Update(pobjViewInfoEN: clsViewInfoEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjViewInfoEN.viewId) == false && GetStrLen(pobjViewInfoEN.viewId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[界面Id(viewId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.viewId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.viewName) == false && GetStrLen(pobjViewInfoEN.viewName) > 100) {
    throw new Error(
      `(errid:Watl000416)字段[界面名称(viewName)]的长度不能超过100(In 界面(ViewInfo))!值:${pobjViewInfoEN.viewName}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.funcModuleAgcId) == false &&
    GetStrLen(pobjViewInfoEN.funcModuleAgcId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[功能模块Id(funcModuleAgcId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.funcModuleAgcId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.dataBaseName) == false &&
    GetStrLen(pobjViewInfoEN.dataBaseName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据库名(dataBaseName)]的长度不能超过50(In 界面(ViewInfo))!值:${pobjViewInfoEN.dataBaseName}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.keyForMainTab) == false &&
    GetStrLen(pobjViewInfoEN.keyForMainTab) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[主表关键字(keyForMainTab)]的长度不能超过50(In 界面(ViewInfo))!值:${pobjViewInfoEN.keyForMainTab}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.keyForDetailTab) == false &&
    GetStrLen(pobjViewInfoEN.keyForDetailTab) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[明细表关键字(keyForDetailTab)]的长度不能超过50(In 界面(ViewInfo))!值:${pobjViewInfoEN.keyForDetailTab}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.userId) == false && GetStrLen(pobjViewInfoEN.userId) > 18) {
    throw new Error(
      `(errid:Watl000416)字段[用户Id(userId)]的长度不能超过18(In 界面(ViewInfo))!值:${pobjViewInfoEN.userId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.prjId) == false && GetStrLen(pobjViewInfoEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 界面(ViewInfo))!值:${pobjViewInfoEN.prjId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewFunction) == false &&
    GetStrLen(pobjViewInfoEN.viewFunction) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面功能(viewFunction)]的长度不能超过100(In 界面(ViewInfo))!值:${pobjViewInfoEN.viewFunction}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewDetail) == false &&
    GetStrLen(pobjViewInfoEN.viewDetail) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面说明(viewDetail)]的长度不能超过1000(In 界面(ViewInfo))!值:${pobjViewInfoEN.viewDetail}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.defaMenuName) == false &&
    GetStrLen(pobjViewInfoEN.defaMenuName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[缺省菜单名(defaMenuName)]的长度不能超过100(In 界面(ViewInfo))!值:${pobjViewInfoEN.defaMenuName}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.detailTabId) == false &&
    GetStrLen(pobjViewInfoEN.detailTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[明细表ID(detailTabId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.detailTabId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.fileName) == false && GetStrLen(pobjViewInfoEN.fileName) > 150) {
    throw new Error(
      `(errid:Watl000416)字段[文件名(fileName)]的长度不能超过150(In 界面(ViewInfo))!值:${pobjViewInfoEN.fileName}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.filePath) == false && GetStrLen(pobjViewInfoEN.filePath) > 500) {
    throw new Error(
      `(errid:Watl000416)字段[文件路径(filePath)]的长度不能超过500(In 界面(ViewInfo))!值:${pobjViewInfoEN.filePath}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.mainTabId) == false && GetStrLen(pobjViewInfoEN.mainTabId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[主表ID(mainTabId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.mainTabId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewCnName) == false &&
    GetStrLen(pobjViewInfoEN.viewCnName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[视图中文名(viewCnName)]的长度不能超过100(In 界面(ViewInfo))!值:${pobjViewInfoEN.viewCnName}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewGroupId) == false &&
    GetStrLen(pobjViewInfoEN.viewGroupId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面组ID(viewGroupId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.viewGroupId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.inRelaTabId) == false &&
    GetStrLen(pobjViewInfoEN.inRelaTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[输入数据源表ID(inRelaTabId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.inRelaTabId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.inSqlDsTypeId) == false &&
    GetStrLen(pobjViewInfoEN.inSqlDsTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[输入数据源类型(inSqlDsTypeId)]的长度不能超过2(In 界面(ViewInfo))!值:${pobjViewInfoEN.inSqlDsTypeId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.outRelaTabId) == false &&
    GetStrLen(pobjViewInfoEN.outRelaTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[输出数据源表ID(outRelaTabId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.outRelaTabId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.outSqlDsTypeId) == false &&
    GetStrLen(pobjViewInfoEN.outSqlDsTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[输出数据源类型(outSqlDsTypeId)]的长度不能超过2(In 界面(ViewInfo))!值:${pobjViewInfoEN.outSqlDsTypeId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.detailTabType) == false &&
    GetStrLen(pobjViewInfoEN.detailTabType) > 10
  ) {
    throw new Error(
      `(errid:Watl000416)字段[DetailTabType(detailTabType)]的长度不能超过10(In 界面(ViewInfo))!值:${pobjViewInfoEN.detailTabType}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.detailViewId) == false &&
    GetStrLen(pobjViewInfoEN.detailViewId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[DetailViewId(detailViewId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.detailViewId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.mainTabType) == false &&
    GetStrLen(pobjViewInfoEN.mainTabType) > 10
  ) {
    throw new Error(
      `(errid:Watl000416)字段[MainTabType(mainTabType)]的长度不能超过10(In 界面(ViewInfo))!值:${pobjViewInfoEN.mainTabType}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.mainViewId) == false &&
    GetStrLen(pobjViewInfoEN.mainViewId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[MainViewId(mainViewId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.mainViewId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.geneCodeDate) == false &&
    GetStrLen(pobjViewInfoEN.geneCodeDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[生成代码日期(geneCodeDate)]的长度不能超过20(In 界面(ViewInfo))!值:${pobjViewInfoEN.geneCodeDate}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.taskId) == false && GetStrLen(pobjViewInfoEN.taskId) > 16) {
    throw new Error(
      `(errid:Watl000416)字段[任务Id(taskId)]的长度不能超过16(In 界面(ViewInfo))!值:${pobjViewInfoEN.taskId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.keyId4Test) == false &&
    GetStrLen(pobjViewInfoEN.keyId4Test) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[测试关键字Id(keyId4Test)]的长度不能超过50(In 界面(ViewInfo))!值:${pobjViewInfoEN.keyId4Test}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewMasterId) == false &&
    GetStrLen(pobjViewInfoEN.viewMasterId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[界面母版Id(viewMasterId)]的长度不能超过8(In 界面(ViewInfo))!值:${pobjViewInfoEN.viewMasterId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.errMsg) == false && GetStrLen(pobjViewInfoEN.errMsg) > 2000) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In 界面(ViewInfo))!值:${pobjViewInfoEN.errMsg}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.updDate) == false && GetStrLen(pobjViewInfoEN.updDate) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 界面(ViewInfo))!值:${pobjViewInfoEN.updDate}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.updUserId) == false &&
    GetStrLen(pobjViewInfoEN.updUserId) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 界面(ViewInfo))!值:${pobjViewInfoEN.updUserId}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjViewInfoEN.memo) == false && GetStrLen(pobjViewInfoEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 界面(ViewInfo))!值:${pobjViewInfoEN.memo}(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewId) == false &&
    undefined !== pobjViewInfoEN.viewId &&
    tzDataType.isString(pobjViewInfoEN.viewId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面Id(viewId)]的值:[${pobjViewInfoEN.viewId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewName) == false &&
    undefined !== pobjViewInfoEN.viewName &&
    tzDataType.isString(pobjViewInfoEN.viewName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面名称(viewName)]的值:[${pobjViewInfoEN.viewName}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjViewInfoEN.applicationTypeId &&
    undefined !== pobjViewInfoEN.applicationTypeId &&
    tzDataType.isNumber(pobjViewInfoEN.applicationTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[应用程序类型ID(applicationTypeId)]的值:[${pobjViewInfoEN.applicationTypeId}], 非法,应该为数值型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.funcModuleAgcId) == false &&
    undefined !== pobjViewInfoEN.funcModuleAgcId &&
    tzDataType.isString(pobjViewInfoEN.funcModuleAgcId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[功能模块Id(funcModuleAgcId)]的值:[${pobjViewInfoEN.funcModuleAgcId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.dataBaseName) == false &&
    undefined !== pobjViewInfoEN.dataBaseName &&
    tzDataType.isString(pobjViewInfoEN.dataBaseName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据库名(dataBaseName)]的值:[${pobjViewInfoEN.dataBaseName}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.keyForMainTab) == false &&
    undefined !== pobjViewInfoEN.keyForMainTab &&
    tzDataType.isString(pobjViewInfoEN.keyForMainTab) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[主表关键字(keyForMainTab)]的值:[${pobjViewInfoEN.keyForMainTab}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.keyForDetailTab) == false &&
    undefined !== pobjViewInfoEN.keyForDetailTab &&
    tzDataType.isString(pobjViewInfoEN.keyForDetailTab) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[明细表关键字(keyForDetailTab)]的值:[${pobjViewInfoEN.keyForDetailTab}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjViewInfoEN.isNeedSort &&
    undefined !== pobjViewInfoEN.isNeedSort &&
    tzDataType.isBoolean(pobjViewInfoEN.isNeedSort) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否需要排序(isNeedSort)]的值:[${pobjViewInfoEN.isNeedSort}], 非法,应该为布尔型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjViewInfoEN.isNeedTransCode &&
    undefined !== pobjViewInfoEN.isNeedTransCode &&
    tzDataType.isBoolean(pobjViewInfoEN.isNeedTransCode) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否需要转换代码(isNeedTransCode)]的值:[${pobjViewInfoEN.isNeedTransCode}], 非法,应该为布尔型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjViewInfoEN.isNeedSetExportFld &&
    undefined !== pobjViewInfoEN.isNeedSetExportFld &&
    tzDataType.isBoolean(pobjViewInfoEN.isNeedSetExportFld) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否需要设置导出字段(isNeedSetExportFld)]的值:[${pobjViewInfoEN.isNeedSetExportFld}], 非法,应该为布尔型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.userId) == false &&
    undefined !== pobjViewInfoEN.userId &&
    tzDataType.isString(pobjViewInfoEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[用户Id(userId)]的值:[${pobjViewInfoEN.userId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.prjId) == false &&
    undefined !== pobjViewInfoEN.prjId &&
    tzDataType.isString(pobjViewInfoEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjViewInfoEN.prjId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewFunction) == false &&
    undefined !== pobjViewInfoEN.viewFunction &&
    tzDataType.isString(pobjViewInfoEN.viewFunction) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面功能(viewFunction)]的值:[${pobjViewInfoEN.viewFunction}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewDetail) == false &&
    undefined !== pobjViewInfoEN.viewDetail &&
    tzDataType.isString(pobjViewInfoEN.viewDetail) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面说明(viewDetail)]的值:[${pobjViewInfoEN.viewDetail}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.defaMenuName) == false &&
    undefined !== pobjViewInfoEN.defaMenuName &&
    tzDataType.isString(pobjViewInfoEN.defaMenuName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缺省菜单名(defaMenuName)]的值:[${pobjViewInfoEN.defaMenuName}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.detailTabId) == false &&
    undefined !== pobjViewInfoEN.detailTabId &&
    tzDataType.isString(pobjViewInfoEN.detailTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[明细表ID(detailTabId)]的值:[${pobjViewInfoEN.detailTabId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.fileName) == false &&
    undefined !== pobjViewInfoEN.fileName &&
    tzDataType.isString(pobjViewInfoEN.fileName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[文件名(fileName)]的值:[${pobjViewInfoEN.fileName}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.filePath) == false &&
    undefined !== pobjViewInfoEN.filePath &&
    tzDataType.isString(pobjViewInfoEN.filePath) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[文件路径(filePath)]的值:[${pobjViewInfoEN.filePath}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.mainTabId) == false &&
    undefined !== pobjViewInfoEN.mainTabId &&
    tzDataType.isString(pobjViewInfoEN.mainTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[主表ID(mainTabId)]的值:[${pobjViewInfoEN.mainTabId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewCnName) == false &&
    undefined !== pobjViewInfoEN.viewCnName &&
    tzDataType.isString(pobjViewInfoEN.viewCnName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[视图中文名(viewCnName)]的值:[${pobjViewInfoEN.viewCnName}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewGroupId) == false &&
    undefined !== pobjViewInfoEN.viewGroupId &&
    tzDataType.isString(pobjViewInfoEN.viewGroupId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面组ID(viewGroupId)]的值:[${pobjViewInfoEN.viewGroupId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.inRelaTabId) == false &&
    undefined !== pobjViewInfoEN.inRelaTabId &&
    tzDataType.isString(pobjViewInfoEN.inRelaTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[输入数据源表ID(inRelaTabId)]的值:[${pobjViewInfoEN.inRelaTabId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.inSqlDsTypeId) == false &&
    undefined !== pobjViewInfoEN.inSqlDsTypeId &&
    tzDataType.isString(pobjViewInfoEN.inSqlDsTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[输入数据源类型(inSqlDsTypeId)]的值:[${pobjViewInfoEN.inSqlDsTypeId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.outRelaTabId) == false &&
    undefined !== pobjViewInfoEN.outRelaTabId &&
    tzDataType.isString(pobjViewInfoEN.outRelaTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[输出数据源表ID(outRelaTabId)]的值:[${pobjViewInfoEN.outRelaTabId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.outSqlDsTypeId) == false &&
    undefined !== pobjViewInfoEN.outSqlDsTypeId &&
    tzDataType.isString(pobjViewInfoEN.outSqlDsTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[输出数据源类型(outSqlDsTypeId)]的值:[${pobjViewInfoEN.outSqlDsTypeId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.detailTabType) == false &&
    undefined !== pobjViewInfoEN.detailTabType &&
    tzDataType.isString(pobjViewInfoEN.detailTabType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[DetailTabType(detailTabType)]的值:[${pobjViewInfoEN.detailTabType}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.detailViewId) == false &&
    undefined !== pobjViewInfoEN.detailViewId &&
    tzDataType.isString(pobjViewInfoEN.detailViewId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[DetailViewId(detailViewId)]的值:[${pobjViewInfoEN.detailViewId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.mainTabType) == false &&
    undefined !== pobjViewInfoEN.mainTabType &&
    tzDataType.isString(pobjViewInfoEN.mainTabType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[MainTabType(mainTabType)]的值:[${pobjViewInfoEN.mainTabType}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.mainViewId) == false &&
    undefined !== pobjViewInfoEN.mainViewId &&
    tzDataType.isString(pobjViewInfoEN.mainViewId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[MainViewId(mainViewId)]的值:[${pobjViewInfoEN.mainViewId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.geneCodeDate) == false &&
    undefined !== pobjViewInfoEN.geneCodeDate &&
    tzDataType.isString(pobjViewInfoEN.geneCodeDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[生成代码日期(geneCodeDate)]的值:[${pobjViewInfoEN.geneCodeDate}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.taskId) == false &&
    undefined !== pobjViewInfoEN.taskId &&
    tzDataType.isString(pobjViewInfoEN.taskId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[任务Id(taskId)]的值:[${pobjViewInfoEN.taskId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.keyId4Test) == false &&
    undefined !== pobjViewInfoEN.keyId4Test &&
    tzDataType.isString(pobjViewInfoEN.keyId4Test) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[测试关键字Id(keyId4Test)]的值:[${pobjViewInfoEN.keyId4Test}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.viewMasterId) == false &&
    undefined !== pobjViewInfoEN.viewMasterId &&
    tzDataType.isString(pobjViewInfoEN.viewMasterId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[界面母版Id(viewMasterId)]的值:[${pobjViewInfoEN.viewMasterId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjViewInfoEN.isShare &&
    undefined !== pobjViewInfoEN.isShare &&
    tzDataType.isBoolean(pobjViewInfoEN.isShare) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否共享(isShare)]的值:[${pobjViewInfoEN.isShare}], 非法,应该为布尔型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.errMsg) == false &&
    undefined !== pobjViewInfoEN.errMsg &&
    tzDataType.isString(pobjViewInfoEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjViewInfoEN.errMsg}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.updDate) == false &&
    undefined !== pobjViewInfoEN.updDate &&
    tzDataType.isString(pobjViewInfoEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjViewInfoEN.updDate}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.updUserId) == false &&
    undefined !== pobjViewInfoEN.updUserId &&
    tzDataType.isString(pobjViewInfoEN.updUserId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjViewInfoEN.updUserId}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.memo) == false &&
    undefined !== pobjViewInfoEN.memo &&
    tzDataType.isString(pobjViewInfoEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjViewInfoEN.memo}], 非法,应该为字符型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjViewInfoEN.regionNum &&
    undefined !== pobjViewInfoEN.regionNum &&
    tzDataType.isNumber(pobjViewInfoEN.regionNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域数(regionNum)]的值:[${pobjViewInfoEN.regionNum}], 非法,应该为数值型(In 界面(ViewInfo))!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjViewInfoEN.viewId) === true || pobjViewInfoEN.viewId.toString() === '0') {
    throw new Error(
      `(errid:Watl000064)字段[界面Id]不能为空(In 界面)!(clsViewInfoBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjViewInfoEN.funcModuleAgcId) == false &&
    pobjViewInfoEN.funcModuleAgcId != '[nuull]' &&
    GetStrLen(pobjViewInfoEN.funcModuleAgcId) != 8
  ) {
    throw '(errid:Watl000418)字段[功能模块Id]作为外键字段,长度应该为8(In 界面)!(clsViewInfoBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjViewInfoEN.prjId) == false &&
    pobjViewInfoEN.prjId != '[nuull]' &&
    GetStrLen(pobjViewInfoEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程Id]作为外键字段,长度应该为4(In 界面)!(clsViewInfoBL:CheckPropertyNew)';
  }
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewInfo_GetJSONStrByObj(pobjViewInfoEN: clsViewInfoEN): string {
  pobjViewInfoEN.sfUpdFldSetStr = pobjViewInfoEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewInfoEN);
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
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function ViewInfo_GetObjLstByJSONStr(strJSON: string): Array<clsViewInfoEN> {
  let arrViewInfoObjLst = new Array<clsViewInfoEN>();
  if (strJSON === '') {
    return arrViewInfoObjLst;
  }
  try {
    arrViewInfoObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewInfoObjLst;
  }
  return arrViewInfoObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewInfoObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewInfo_GetObjLstByJSONObjLst(
  arrViewInfoObjLstS: Array<clsViewInfoEN>,
): Array<clsViewInfoEN> {
  const arrViewInfoObjLst = new Array<clsViewInfoEN>();
  for (const objInFor of arrViewInfoObjLstS) {
    const obj1 = ViewInfo_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewInfoObjLst.push(obj1);
  }
  return arrViewInfoObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewInfo_GetObjByJSONStr(strJSON: string): clsViewInfoEN {
  let pobjViewInfoEN = new clsViewInfoEN();
  if (strJSON === '') {
    return pobjViewInfoEN;
  }
  try {
    pobjViewInfoEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewInfoEN;
  }
  return pobjViewInfoEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewInfo_GetCombineCondition(objViewInfoCond: clsViewInfoEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_ViewId,
    ) == true
  ) {
    const strComparisonOpViewId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_ViewId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_ViewId,
      objViewInfoCond.viewId,
      strComparisonOpViewId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_ViewName,
    ) == true
  ) {
    const strComparisonOpViewName: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_ViewName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_ViewName,
      objViewInfoCond.viewName,
      strComparisonOpViewName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_ApplicationTypeId,
    ) == true
  ) {
    const strComparisonOpApplicationTypeId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_ApplicationTypeId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewInfoEN.con_ApplicationTypeId,
      objViewInfoCond.applicationTypeId,
      strComparisonOpApplicationTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_FuncModuleAgcId,
    ) == true
  ) {
    const strComparisonOpFuncModuleAgcId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_FuncModuleAgcId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_FuncModuleAgcId,
      objViewInfoCond.funcModuleAgcId,
      strComparisonOpFuncModuleAgcId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_DataBaseName,
    ) == true
  ) {
    const strComparisonOpDataBaseName: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_DataBaseName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_DataBaseName,
      objViewInfoCond.dataBaseName,
      strComparisonOpDataBaseName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_KeyForMainTab,
    ) == true
  ) {
    const strComparisonOpKeyForMainTab: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_KeyForMainTab];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_KeyForMainTab,
      objViewInfoCond.keyForMainTab,
      strComparisonOpKeyForMainTab,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_KeyForDetailTab,
    ) == true
  ) {
    const strComparisonOpKeyForDetailTab: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_KeyForDetailTab];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_KeyForDetailTab,
      objViewInfoCond.keyForDetailTab,
      strComparisonOpKeyForDetailTab,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_IsNeedSort,
    ) == true
  ) {
    if (objViewInfoCond.isNeedSort == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewInfoEN.con_IsNeedSort);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewInfoEN.con_IsNeedSort);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_IsNeedTransCode,
    ) == true
  ) {
    if (objViewInfoCond.isNeedTransCode == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewInfoEN.con_IsNeedTransCode);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewInfoEN.con_IsNeedTransCode);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_IsNeedSetExportFld,
    ) == true
  ) {
    if (objViewInfoCond.isNeedSetExportFld == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewInfoEN.con_IsNeedSetExportFld);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewInfoEN.con_IsNeedSetExportFld);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_UserId,
      objViewInfoCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_PrjId,
      objViewInfoCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_ViewFunction,
    ) == true
  ) {
    const strComparisonOpViewFunction: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_ViewFunction];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_ViewFunction,
      objViewInfoCond.viewFunction,
      strComparisonOpViewFunction,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_ViewDetail,
    ) == true
  ) {
    const strComparisonOpViewDetail: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_ViewDetail];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_ViewDetail,
      objViewInfoCond.viewDetail,
      strComparisonOpViewDetail,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_DefaMenuName,
    ) == true
  ) {
    const strComparisonOpDefaMenuName: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_DefaMenuName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_DefaMenuName,
      objViewInfoCond.defaMenuName,
      strComparisonOpDefaMenuName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_DetailTabId,
    ) == true
  ) {
    const strComparisonOpDetailTabId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_DetailTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_DetailTabId,
      objViewInfoCond.detailTabId,
      strComparisonOpDetailTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_FileName,
    ) == true
  ) {
    const strComparisonOpFileName: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_FileName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_FileName,
      objViewInfoCond.fileName,
      strComparisonOpFileName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_FilePath,
    ) == true
  ) {
    const strComparisonOpFilePath: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_FilePath];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_FilePath,
      objViewInfoCond.filePath,
      strComparisonOpFilePath,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_MainTabId,
    ) == true
  ) {
    const strComparisonOpMainTabId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_MainTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_MainTabId,
      objViewInfoCond.mainTabId,
      strComparisonOpMainTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_ViewCnName,
    ) == true
  ) {
    const strComparisonOpViewCnName: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_ViewCnName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_ViewCnName,
      objViewInfoCond.viewCnName,
      strComparisonOpViewCnName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_ViewGroupId,
    ) == true
  ) {
    const strComparisonOpViewGroupId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_ViewGroupId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_ViewGroupId,
      objViewInfoCond.viewGroupId,
      strComparisonOpViewGroupId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_InRelaTabId,
    ) == true
  ) {
    const strComparisonOpInRelaTabId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_InRelaTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_InRelaTabId,
      objViewInfoCond.inRelaTabId,
      strComparisonOpInRelaTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_InSqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpInSqlDsTypeId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_InSqlDsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_InSqlDsTypeId,
      objViewInfoCond.inSqlDsTypeId,
      strComparisonOpInSqlDsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_OutRelaTabId,
    ) == true
  ) {
    const strComparisonOpOutRelaTabId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_OutRelaTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_OutRelaTabId,
      objViewInfoCond.outRelaTabId,
      strComparisonOpOutRelaTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_OutSqlDsTypeId,
    ) == true
  ) {
    const strComparisonOpOutSqlDsTypeId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_OutSqlDsTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_OutSqlDsTypeId,
      objViewInfoCond.outSqlDsTypeId,
      strComparisonOpOutSqlDsTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_DetailTabType,
    ) == true
  ) {
    const strComparisonOpDetailTabType: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_DetailTabType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_DetailTabType,
      objViewInfoCond.detailTabType,
      strComparisonOpDetailTabType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_DetailViewId,
    ) == true
  ) {
    const strComparisonOpDetailViewId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_DetailViewId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_DetailViewId,
      objViewInfoCond.detailViewId,
      strComparisonOpDetailViewId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_MainTabType,
    ) == true
  ) {
    const strComparisonOpMainTabType: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_MainTabType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_MainTabType,
      objViewInfoCond.mainTabType,
      strComparisonOpMainTabType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_MainViewId,
    ) == true
  ) {
    const strComparisonOpMainViewId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_MainViewId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_MainViewId,
      objViewInfoCond.mainViewId,
      strComparisonOpMainViewId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_GeneCodeDate,
    ) == true
  ) {
    const strComparisonOpGeneCodeDate: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_GeneCodeDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_GeneCodeDate,
      objViewInfoCond.geneCodeDate,
      strComparisonOpGeneCodeDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_TaskId,
    ) == true
  ) {
    const strComparisonOpTaskId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_TaskId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_TaskId,
      objViewInfoCond.taskId,
      strComparisonOpTaskId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_KeyId4Test,
    ) == true
  ) {
    const strComparisonOpKeyId4Test: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_KeyId4Test];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_KeyId4Test,
      objViewInfoCond.keyId4Test,
      strComparisonOpKeyId4Test,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_ViewMasterId,
    ) == true
  ) {
    const strComparisonOpViewMasterId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_ViewMasterId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_ViewMasterId,
      objViewInfoCond.viewMasterId,
      strComparisonOpViewMasterId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_IsShare,
    ) == true
  ) {
    if (objViewInfoCond.isShare == true) {
      strWhereCond += Format(" And {0} = '1'", clsViewInfoEN.con_IsShare);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsViewInfoEN.con_IsShare);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_ErrMsg,
      objViewInfoCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_UpdDate,
      objViewInfoCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_UpdUserId,
      objViewInfoCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewInfoEN.con_Memo,
      objViewInfoCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewInfoCond.dicFldComparisonOp,
      clsViewInfoEN.con_RegionNum,
    ) == true
  ) {
    const strComparisonOpRegionNum: string =
      objViewInfoCond.dicFldComparisonOp[clsViewInfoEN.con_RegionNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewInfoEN.con_RegionNum,
      objViewInfoCond.regionNum,
      strComparisonOpRegionNum,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewInfo(界面),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param strViewName: 界面名称(要求唯一的字段)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewInfo_GetUniCondStr(objViewInfoEN: clsViewInfoEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId = '{0}'", objViewInfoEN.prjId);
  strWhereCond += Format(" and ViewName = '{0}'", objViewInfoEN.viewName);
  strWhereCond += Format(" and ApplicationTypeId = '{0}'", objViewInfoEN.applicationTypeId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewInfo(界面),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param strViewName: 界面名称(要求唯一的字段)
 * @param intApplicationTypeId: 应用程序类型ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewInfo_GetUniCondStr4Update(objViewInfoEN: clsViewInfoEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and ViewId <> '{0}'", objViewInfoEN.viewId);
  strWhereCond += Format(" and PrjId = '{0}'", objViewInfoEN.prjId);
  strWhereCond += Format(" and ViewName = '{0}'", objViewInfoEN.viewName);
  strWhereCond += Format(" and ApplicationTypeId = '{0}'", objViewInfoEN.applicationTypeId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewInfoENS:源对象
 * @param objViewInfoENT:目标对象
 */
export function ViewInfo_GetObjFromJsonObj(objViewInfoENS: clsViewInfoEN): clsViewInfoEN {
  const objViewInfoENT: clsViewInfoEN = new clsViewInfoEN();
  ObjectAssign(objViewInfoENT, objViewInfoENS);
  return objViewInfoENT;
}
