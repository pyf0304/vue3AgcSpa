/**
 * 类名:clsViewRegionWApi
 * 表名:ViewRegion(00050099)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 00:41:26
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:AGC(0005)
 应用类型:Vue应用InCore-TS(30)
 CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433AGC_CS12
 * PrjDataBaseId:0005
 模块中文名:区域管理(RegionManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 界面区域(ViewRegion)
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
import { viewRegionCache, isFuncMapCache } from '@/views/RegionManage/ViewRegionVueShare';
import { clsViewRegionENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionENEx';
import { clsViewRegionEN } from '@/ts/L0Entity/RegionManage/clsViewRegionEN';
import { RegionType_func } from '@/ts/L3ForWApi/RegionManage/clsRegionTypeWApi';
import { clsRegionTypeEN } from '@/ts/L0Entity/RegionManage/clsRegionTypeEN';
import { GCContainerType_func } from '@/ts/L3ForWApi/GeneCode/clsGCContainerTypeWApi';
import { clsGCContainerTypeEN } from '@/ts/L0Entity/GeneCode/clsGCContainerTypeEN';
import { PageDispMode_func } from '@/ts/L3ForWApi/PrjMenu/clsPageDispModeWApi';
import { clsPageDispModeEN } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { InOutType_func } from '@/ts/L3ForWApi/SysPara/clsInOutTypeWApi';
import { clsInOutTypeEN } from '@/ts/L0Entity/SysPara/clsInOutTypeEN';
import { vPrjTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
import { vViewRegionReferNum_func } from '@/ts/L3ForWApi/RegionManage/clsvViewRegionReferNumWApi';
import { clsvViewRegionReferNumEN } from '@/ts/L0Entity/RegionManage/clsvViewRegionReferNumEN';
import { CMProject_func } from '@/ts/L3ForWApi/CodeMan/clsCMProjectWApi';
import { clsCMProjectEN } from '@/ts/L0Entity/CodeMan/clsCMProjectEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const viewRegion_Controller = 'ViewRegionApi';
export const viewRegion_ConstructorName = 'viewRegion';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRegionId:关键字
 * @returns 对象
 **/
export async function ViewRegion_GetObjByRegionIdAsync(
  strRegionId: string,
): Promise<clsViewRegionEN | null> {
  const strThisFuncName = 'GetObjByRegionIdAsync';

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsViewRegionWApi.GetObjByRegionIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsViewRegionWApi.GetObjByRegionIdAsync)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByRegionId';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRegionId,
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
      const objViewRegion = ViewRegion_GetObjFromJsonObj(returnObj);
      return objViewRegion;
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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
 * @param strRegionId:所给的关键字
 * @returns 对象
 */
export async function ViewRegion_GetObjByRegionIdlocalStorage(strRegionId: string) {
  const strThisFuncName = 'GetObjByRegionIdlocalStorage';

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsViewRegionWApi.GetObjByRegionIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsViewRegionWApi.GetObjByRegionIdlocalStorage)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsViewRegionEN._CurrTabName, strRegionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objViewRegionCache: clsViewRegionEN = JSON.parse(strTempObj);
    return objViewRegionCache;
  }
  try {
    const objViewRegion = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
    if (objViewRegion != null) {
      localStorage.setItem(strKey, JSON.stringify(objViewRegion));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objViewRegion;
    }
    return objViewRegion;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRegionId,
      viewRegion_ConstructorName,
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
 * @param strRegionId:所给的关键字
 * @returns 对象
 */
export async function ViewRegion_GetObjByRegionIdCache(
  strRegionId: string,
  strPrjId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByRegionIdCache';

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsViewRegionWApi.GetObjByRegionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsViewRegionWApi.GetObjByRegionIdCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewRegionObjLstCache = await ViewRegion_GetObjLstCache(strPrjId);
  try {
    const arrViewRegionSel = arrViewRegionObjLstCache.filter((x) => x.regionId == strRegionId);
    let objViewRegion: clsViewRegionEN;
    if (arrViewRegionSel.length > 0) {
      objViewRegion = arrViewRegionSel[0];
      return objViewRegion;
    } else {
      if (bolTryAsyncOnce == true) {
        const objViewRegionConst = await ViewRegion_GetObjByRegionIdAsync(strRegionId);
        if (objViewRegionConst != null) {
          ViewRegion_ReFreshThisCache(strPrjId);
          return objViewRegionConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRegionId,
      viewRegion_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objViewRegion:所给的对象
 * @returns 对象
 */
export async function ViewRegion_UpdateObjInLstCache(
  objViewRegion: clsViewRegionEN,
  strPrjId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrViewRegionObjLstCache = await ViewRegion_GetObjLstCache(strPrjId);
    const obj = arrViewRegionObjLstCache.find(
      (x) => x.prjId == objViewRegion.prjId && x.clsName == objViewRegion.clsName,
    );
    if (obj != null) {
      objViewRegion.regionId = obj.regionId;
      ObjectAssign(obj, objViewRegion);
    } else {
      arrViewRegionObjLstCache.push(objViewRegion);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      viewRegion_ConstructorName,
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
export function ViewRegion_SortFunDefa(a: clsViewRegionEN, b: clsViewRegionEN): number {
  return a.regionId.localeCompare(b.regionId);
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
export function ViewRegion_SortFunDefa2Fld(a: clsViewRegionEN, b: clsViewRegionEN): number {
  if (a.regionName == b.regionName) return a.regionTypeId.localeCompare(b.regionTypeId);
  else return a.regionName.localeCompare(b.regionName);
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
export function ViewRegion_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewRegionEN.con_RegionId:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsViewRegionEN.con_RegionName:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return a.regionName.localeCompare(b.regionName);
        };
      case clsViewRegionEN.con_RegionTypeId:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return a.regionTypeId.localeCompare(b.regionTypeId);
        };
      case clsViewRegionEN.con_FileName:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (a.fileName == null) return -1;
          if (b.fileName == null) return 1;
          return a.fileName.localeCompare(b.fileName);
        };
      case clsViewRegionEN.con_Height:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return a.height - b.height;
        };
      case clsViewRegionEN.con_Width:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return a.width - b.width;
        };
      case clsViewRegionEN.con_ColNum:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return a.colNum - b.colNum;
        };
      case clsViewRegionEN.con_ContainerTypeId:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (a.containerTypeId == null) return -1;
          if (b.containerTypeId == null) return 1;
          return a.containerTypeId.localeCompare(b.containerTypeId);
        };
      case clsViewRegionEN.con_PageDispModeId:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (a.pageDispModeId == null) return -1;
          if (b.pageDispModeId == null) return 1;
          return a.pageDispModeId.localeCompare(b.pageDispModeId);
        };
      case clsViewRegionEN.con_InOutTypeId:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return a.inOutTypeId.localeCompare(b.inOutTypeId);
        };
      case clsViewRegionEN.con_TabId:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsViewRegionEN.con_KeyId4Test:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (a.keyId4Test == null) return -1;
          if (b.keyId4Test == null) return 1;
          return a.keyId4Test.localeCompare(b.keyId4Test);
        };
      case clsViewRegionEN.con_ErrMsg:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsViewRegionEN.con_PrjId:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsViewRegionEN.con_UpdUser:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsViewRegionEN.con_UpdDate:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsViewRegionEN.con_Memo:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsViewRegionEN.con_ClsName:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return a.clsName.localeCompare(b.clsName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewRegion]中不存在!(in ${viewRegion_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsViewRegionEN.con_RegionId:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsViewRegionEN.con_RegionName:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return b.regionName.localeCompare(a.regionName);
        };
      case clsViewRegionEN.con_RegionTypeId:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return b.regionTypeId.localeCompare(a.regionTypeId);
        };
      case clsViewRegionEN.con_FileName:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (b.fileName == null) return -1;
          if (a.fileName == null) return 1;
          return b.fileName.localeCompare(a.fileName);
        };
      case clsViewRegionEN.con_Height:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return b.height - a.height;
        };
      case clsViewRegionEN.con_Width:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return b.width - a.width;
        };
      case clsViewRegionEN.con_ColNum:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return b.colNum - a.colNum;
        };
      case clsViewRegionEN.con_ContainerTypeId:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (b.containerTypeId == null) return -1;
          if (a.containerTypeId == null) return 1;
          return b.containerTypeId.localeCompare(a.containerTypeId);
        };
      case clsViewRegionEN.con_PageDispModeId:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (b.pageDispModeId == null) return -1;
          if (a.pageDispModeId == null) return 1;
          return b.pageDispModeId.localeCompare(a.pageDispModeId);
        };
      case clsViewRegionEN.con_InOutTypeId:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return b.inOutTypeId.localeCompare(a.inOutTypeId);
        };
      case clsViewRegionEN.con_TabId:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsViewRegionEN.con_KeyId4Test:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (b.keyId4Test == null) return -1;
          if (a.keyId4Test == null) return 1;
          return b.keyId4Test.localeCompare(a.keyId4Test);
        };
      case clsViewRegionEN.con_ErrMsg:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsViewRegionEN.con_PrjId:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsViewRegionEN.con_UpdUser:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsViewRegionEN.con_UpdDate:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsViewRegionEN.con_Memo:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsViewRegionEN.con_ClsName:
        return (a: clsViewRegionEN, b: clsViewRegionEN) => {
          return b.clsName.localeCompare(a.clsName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[ViewRegion]中不存在!(in ${viewRegion_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strRegionId:所给的关键字
 * @returns 对象
 */
export async function ViewRegion_GetNameByRegionIdCache(strRegionId: string, strPrjId: string) {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsViewRegionWApi.GetNameByRegionIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsViewRegionWApi.GetNameByRegionIdCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrViewRegionObjLstCache = await ViewRegion_GetObjLstCache(strPrjId);
  if (arrViewRegionObjLstCache == null) return '';
  try {
    const arrViewRegionSel = arrViewRegionObjLstCache.filter((x) => x.regionId == strRegionId);
    let objViewRegion: clsViewRegionEN;
    if (arrViewRegionSel.length > 0) {
      objViewRegion = arrViewRegionSel[0];
      return objViewRegion.regionName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strRegionId,
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
export async function ViewRegion_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsViewRegionEN.con_RegionId:
      return (obj: clsViewRegionEN) => {
        return obj.regionId === value;
      };
    case clsViewRegionEN.con_RegionName:
      return (obj: clsViewRegionEN) => {
        return obj.regionName === value;
      };
    case clsViewRegionEN.con_RegionTypeId:
      return (obj: clsViewRegionEN) => {
        return obj.regionTypeId === value;
      };
    case clsViewRegionEN.con_FileName:
      return (obj: clsViewRegionEN) => {
        return obj.fileName === value;
      };
    case clsViewRegionEN.con_Height:
      return (obj: clsViewRegionEN) => {
        return obj.height === value;
      };
    case clsViewRegionEN.con_Width:
      return (obj: clsViewRegionEN) => {
        return obj.width === value;
      };
    case clsViewRegionEN.con_ColNum:
      return (obj: clsViewRegionEN) => {
        return obj.colNum === value;
      };
    case clsViewRegionEN.con_ContainerTypeId:
      return (obj: clsViewRegionEN) => {
        return obj.containerTypeId === value;
      };
    case clsViewRegionEN.con_PageDispModeId:
      return (obj: clsViewRegionEN) => {
        return obj.pageDispModeId === value;
      };
    case clsViewRegionEN.con_InOutTypeId:
      return (obj: clsViewRegionEN) => {
        return obj.inOutTypeId === value;
      };
    case clsViewRegionEN.con_TabId:
      return (obj: clsViewRegionEN) => {
        return obj.tabId === value;
      };
    case clsViewRegionEN.con_KeyId4Test:
      return (obj: clsViewRegionEN) => {
        return obj.keyId4Test === value;
      };
    case clsViewRegionEN.con_ErrMsg:
      return (obj: clsViewRegionEN) => {
        return obj.errMsg === value;
      };
    case clsViewRegionEN.con_PrjId:
      return (obj: clsViewRegionEN) => {
        return obj.prjId === value;
      };
    case clsViewRegionEN.con_UpdUser:
      return (obj: clsViewRegionEN) => {
        return obj.updUser === value;
      };
    case clsViewRegionEN.con_UpdDate:
      return (obj: clsViewRegionEN) => {
        return obj.updDate === value;
      };
    case clsViewRegionEN.con_Memo:
      return (obj: clsViewRegionEN) => {
        return obj.memo === value;
      };
    case clsViewRegionEN.con_ClsName:
      return (obj: clsViewRegionEN) => {
        return obj.clsName === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[ViewRegion]中不存在!(in ${viewRegion_ConstructorName}.${strThisFuncName})`;
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
export async function ViewRegion_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strPrjIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsViewRegionWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsViewRegionWApi.func)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsViewRegionEN.con_RegionId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsViewRegionEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsViewRegionEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strRegionId = strInValue;
  if (IsNullOrEmpty(strRegionId) == true) {
    return '';
  }
  const objViewRegion = await ViewRegion_GetObjByRegionIdCache(strRegionId, strPrjIdClassfy);
  if (objViewRegion == null) return '';
  if (objViewRegion.GetFldValue(strOutFldName) == null) return '';
  return objViewRegion.GetFldValue(strOutFldName).toString();
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
export async function ViewRegion_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strPrjIdClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strPrjIdClassfy) == true) {
    const strMsg = Format('参数:[strPrjIdClassfy]不能为空!(In clsViewRegionWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjIdClassfy.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjIdClassfy]的长度:[{0}]不正确!(clsViewRegionWApi.funcKey)',
      strPrjIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsViewRegionEN.con_RegionId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrViewRegion = await ViewRegion_GetObjLstCache(strPrjIdClassfy);
  if (arrViewRegion == null) return [];
  let arrViewRegionSel = arrViewRegion;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrViewRegionSel = arrViewRegionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrViewRegionSel = arrViewRegionSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrViewRegionSel = arrViewRegionSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrViewRegionSel = arrViewRegionSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrViewRegionSel = arrViewRegionSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrViewRegionSel = arrViewRegionSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrViewRegionSel = arrViewRegionSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrViewRegionSel = arrViewRegionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrViewRegionSel = arrViewRegionSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrViewRegionSel = arrViewRegionSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrViewRegionSel.length == 0) return [];
  return arrViewRegionSel.map((x) => x.regionId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewRegion_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
export async function ViewRegion_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
export async function ViewRegion_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
export async function ViewRegion_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsViewRegionEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

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
      const objViewRegion = ViewRegion_GetObjFromJsonObj(returnObj);
      return objViewRegion;
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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
export async function ViewRegion_GetObjLstClientCache(strPrjId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewRegionEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewRegionEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("PrjId='{0}'", strPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewRegionEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsViewRegionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewRegionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrViewRegionExObjLstCache: Array<clsViewRegionEN> = CacheHelper.Get(strKey);
    const arrViewRegionObjLstT = ViewRegion_GetObjLstByJSONObjLst(arrViewRegionExObjLstCache);
    return arrViewRegionObjLstT;
  }
  try {
    const arrViewRegionExObjLst = await ViewRegion_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrViewRegionExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewRegionExObjLst.length,
    );
    console.log(strInfo);
    return arrViewRegionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewRegion_ConstructorName,
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
export async function ViewRegion_GetObjLstlocalStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewRegionEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewRegionEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsViewRegionEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewRegionEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsViewRegionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewRegionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewRegionExObjLstCache: Array<clsViewRegionEN> = JSON.parse(strTempObjLst);
    const arrViewRegionObjLstT = ViewRegion_GetObjLstByJSONObjLst(arrViewRegionExObjLstCache);
    return arrViewRegionObjLstT;
  }
  try {
    const arrViewRegionExObjLst = await ViewRegion_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsViewRegionEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrViewRegionExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewRegionExObjLst.length,
    );
    console.log(strInfo);
    return arrViewRegionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewRegion_ConstructorName,
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
export async function ViewRegion_GetObjLstlocalStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsViewRegionEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrViewRegionObjLstCache: Array<clsViewRegionEN> = JSON.parse(strTempObjLst);
    return arrViewRegionObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function ViewRegion_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsViewRegionEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

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
          viewRegion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewRegion_GetObjLstByJSONObjLst(returnObjLst);
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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
export async function ViewRegion_GetObjLstsessionStorage(strPrjId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsViewRegionEN.WhereFormat) == false) {
    strWhereCond = Format(clsViewRegionEN.WhereFormat, strPrjId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsViewRegionEN.con_PrjId, strPrjId);
  }
  const strKey = Format('{0}_{1}', clsViewRegionEN._CurrTabName, strPrjId);
  if (IsNullOrEmpty(clsViewRegionEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsViewRegionEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewRegionExObjLstCache: Array<clsViewRegionEN> = JSON.parse(strTempObjLst);
    const arrViewRegionObjLstT = ViewRegion_GetObjLstByJSONObjLst(arrViewRegionExObjLstCache);
    return arrViewRegionObjLstT;
  }
  try {
    const arrViewRegionExObjLst = await ViewRegion_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsViewRegionEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrViewRegionExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrViewRegionExObjLst.length,
    );
    console.log(strInfo);
    return arrViewRegionExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      viewRegion_ConstructorName,
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
export async function ViewRegion_GetObjLstsessionStoragePureCache(strPrjId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsViewRegionEN._CurrTabName, strPrjId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrViewRegionObjLstCache: Array<clsViewRegionEN> = JSON.parse(strTempObjLst);
    return arrViewRegionObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewRegion_GetObjLstCache(strPrjId: string): Promise<Array<clsViewRegionEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsViewRegionWApi.ViewRegion_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsViewRegionWApi.ViewRegion_GetObjLstCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrViewRegionObjLstCache;
  switch (clsViewRegionEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewRegionObjLstCache = await ViewRegion_GetObjLstsessionStorage(strPrjId);
      break;
    case '03': //localStorage
      arrViewRegionObjLstCache = await ViewRegion_GetObjLstlocalStorage(strPrjId);
      break;
    case '02': //ClientCache
      arrViewRegionObjLstCache = await ViewRegion_GetObjLstClientCache(strPrjId);
      break;
    default:
      arrViewRegionObjLstCache = await ViewRegion_GetObjLstClientCache(strPrjId);
      break;
  }
  return arrViewRegionObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function ViewRegion_GetObjLstPureCache(strPrjId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrViewRegionObjLstCache;
  switch (clsViewRegionEN.CacheModeId) {
    case '04': //sessionStorage
      arrViewRegionObjLstCache = await ViewRegion_GetObjLstsessionStoragePureCache(strPrjId);
      break;
    case '03': //localStorage
      arrViewRegionObjLstCache = await ViewRegion_GetObjLstlocalStoragePureCache(strPrjId);
      break;
    case '02': //ClientCache
      arrViewRegionObjLstCache = null;
      break;
    default:
      arrViewRegionObjLstCache = null;
      break;
  }
  return arrViewRegionObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrRegionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewRegion_GetSubObjLstCache(
  objViewRegionCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrViewRegionObjLstCache = await ViewRegion_GetObjLstCache(strPrjId);
  let arrViewRegionSel = arrViewRegionObjLstCache;
  if (objViewRegionCond.GetConditions().length == 0) return arrViewRegionSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objViewRegionCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrViewRegionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewRegionCond),
      viewRegion_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewRegionEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrRegionId:关键字列表
 * @returns 对象列表
 **/
export async function ViewRegion_GetObjLstByRegionIdLstAsync(
  arrRegionId: Array<string>,
): Promise<Array<clsViewRegionEN>> {
  const strThisFuncName = 'GetObjLstByRegionIdLstAsync';
  const strAction = 'GetObjLstByRegionIdLst';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRegionId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          viewRegion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewRegion_GetObjLstByJSONObjLst(returnObjLst);
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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
 * @param arrstrRegionIdLst:关键字列表
 * @returns 对象列表
 */
export async function ViewRegion_GetObjLstByRegionIdLstCache(
  arrRegionIdLst: Array<string>,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByRegionIdLstCache';
  try {
    const arrViewRegionObjLstCache = await ViewRegion_GetObjLstCache(strPrjId);
    const arrViewRegionSel = arrViewRegionObjLstCache.filter(
      (x) => arrRegionIdLst.indexOf(x.regionId) > -1,
    );
    return arrViewRegionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrRegionIdLst.join(','),
      viewRegion_ConstructorName,
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
export async function ViewRegion_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsViewRegionEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

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
          viewRegion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewRegion_GetObjLstByJSONObjLst(returnObjLst);
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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
export async function ViewRegion_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsViewRegionEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

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
          viewRegion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewRegion_GetObjLstByJSONObjLst(returnObjLst);
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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
export async function ViewRegion_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewRegionEN>();
  const arrViewRegionObjLstCache = await ViewRegion_GetObjLstCache(strPrjId);
  if (arrViewRegionObjLstCache.length == 0) return arrViewRegionObjLstCache;
  let arrViewRegionSel = arrViewRegionObjLstCache;
  const objViewRegionCond = objPagerPara.conditionCollection;
  if (objViewRegionCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsViewRegionEN>();
  }
  //console.log("clsViewRegionWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objViewRegionCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewRegionSel.length == 0) return arrViewRegionSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrViewRegionSel = arrViewRegionSel.sort(ViewRegion_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewRegionSel = arrViewRegionSel.sort(objPagerPara.sortFun);
    }
    arrViewRegionSel = arrViewRegionSel.slice(intStart, intEnd);
    return arrViewRegionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewRegion_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewRegionEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function ViewRegion_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsViewRegionEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsViewRegionEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

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
          viewRegion_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = ViewRegion_GetObjLstByJSONObjLst(returnObjLst);
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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
 * @param strRegionId:关键字
 * @returns 获取删除的结果
 **/
export async function ViewRegion_DelRecordAsync(strRegionId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(viewRegion_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strRegionId);

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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
 * @param arrRegionId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function ViewRegion_DelViewRegionsAsync(arrRegionId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelViewRegionsAsync';
  const strAction = 'DelViewRegions';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRegionId, config);
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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
export async function ViewRegion_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strPrjId: string,
): Promise<Array<clsViewRegionENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrViewRegionObjLst = await ViewRegion_GetObjLstCache(strPrjId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsViewRegionENEx>();
  const arrViewRegionExObjLst = arrViewRegionObjLst.map((obj) => {
    const cacheKey = `${obj.regionId}_${obj.prjId}`;
    if (viewRegionCache[cacheKey]) {
      const oldObj = viewRegionCache[cacheKey];
      return oldObj;
    } else {
      const newObj = ViewRegion_CopyToEx(obj);
      arrNewObj.push(newObj);
      viewRegionCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await ViewRegion_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsViewRegionEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrViewRegionExObjLst) {
      await ViewRegion_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.regionId}_${newObj.prjId}`;
      viewRegionCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrViewRegionExObjLst.length == 0) return arrViewRegionExObjLst;
  let arrViewRegionSel: Array<clsViewRegionENEx> = arrViewRegionExObjLst;
  const objViewRegionCond = objPagerPara.conditionCollection;
  if (objViewRegionCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrViewRegionExObjLst;
  }
  try {
    for (const objCondition of objViewRegionCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewRegionSel.length == 0) return arrViewRegionSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrViewRegionSel = arrViewRegionSel.sort(
        ViewRegion_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrViewRegionSel = arrViewRegionSel.sort(objPagerPara.sortFun);
    }
    arrViewRegionSel = arrViewRegionSel.slice(intStart, intEnd);
    return arrViewRegionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      viewRegion_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsViewRegionENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objViewRegionENS:源对象
 * @returns 目标对象=>clsViewRegionEN:objViewRegionENT
 **/
export function ViewRegion_CopyToEx(objViewRegionENS: clsViewRegionEN): clsViewRegionENEx {
  const strThisFuncName = ViewRegion_CopyToEx.name;
  const objViewRegionENT = new clsViewRegionENEx();
  try {
    ObjectAssign(objViewRegionENT, objViewRegionENS);
    return objViewRegionENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegion_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objViewRegionENT;
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
export function ViewRegion_FuncMapByFldName(
  strFldName: string,
  objViewRegionEx: clsViewRegionENEx,
) {
  const strThisFuncName = ViewRegion_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsViewRegionEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsViewRegionENEx.con_RegionTypeSimName:
      return ViewRegion_FuncMapRegionTypeSimName(objViewRegionEx);
    case clsViewRegionENEx.con_ContainerTypeName:
      return ViewRegion_FuncMapContainerTypeName(objViewRegionEx);
    case clsViewRegionENEx.con_PageDispModeName:
      return ViewRegion_FuncMapPageDispModeName(objViewRegionEx);
    case clsViewRegionENEx.con_InOutTypeName:
      return ViewRegion_FuncMapInOutTypeName(objViewRegionEx);
    case clsViewRegionENEx.con_TabName:
      return ViewRegion_FuncMapTabName(objViewRegionEx);
    case clsViewRegionENEx.con_ReferNum:
      return ViewRegion_FuncMapReferNum(objViewRegionEx);
    case clsViewRegionENEx.con_CmPrjName:
      return ViewRegion_FuncMapCmPrjName(objViewRegionEx);
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
export function ViewRegion_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsViewRegionENEx.con_RegionTypeSimName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          if (a.regionTypeSimName === null && b.regionTypeSimName === null) return 0;
          if (a.regionTypeSimName === null) return -1;
          if (b.regionTypeSimName === null) return 1;
          return a.regionTypeSimName.localeCompare(b.regionTypeSimName);
        };
      case clsViewRegionENEx.con_ContainerTypeName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          if (a.containerTypeName === null && b.containerTypeName === null) return 0;
          if (a.containerTypeName === null) return -1;
          if (b.containerTypeName === null) return 1;
          return a.containerTypeName.localeCompare(b.containerTypeName);
        };
      case clsViewRegionENEx.con_PageDispModeName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          if (a.pageDispModeName === null && b.pageDispModeName === null) return 0;
          if (a.pageDispModeName === null) return -1;
          if (b.pageDispModeName === null) return 1;
          return a.pageDispModeName.localeCompare(b.pageDispModeName);
        };
      case clsViewRegionENEx.con_InOutTypeName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return a.inOutTypeName.localeCompare(b.inOutTypeName);
        };
      case clsViewRegionENEx.con_TabName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsViewRegionENEx.con_RegionTypeOrderNum:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return a.regionTypeOrderNum - b.regionTypeOrderNum;
        };
      case clsViewRegionENEx.con_RegionTypeName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return a.regionTypeName.localeCompare(b.regionTypeName);
        };
      case clsViewRegionENEx.con_FldCountInUse:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return a.fldCountInUse - b.fldCountInUse;
        };
      case clsViewRegionENEx.con_ReferNum:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return a.referNum - b.referNum;
        };
      case clsViewRegionENEx.con_CmPrjName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          if (a.cmPrjName === null && b.cmPrjName === null) return 0;
          if (a.cmPrjName === null) return -1;
          if (b.cmPrjName === null) return 1;
          return a.cmPrjName.localeCompare(b.cmPrjName);
        };
      case clsViewRegionENEx.con_CmPrjId:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      case clsViewRegionENEx.con_PrjIdRefer:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return a.prjIdRefer.localeCompare(b.prjIdRefer);
        };
      default:
        return ViewRegion_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsViewRegionENEx.con_RegionTypeSimName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          if (a.regionTypeSimName === null && b.regionTypeSimName === null) return 0;
          if (a.regionTypeSimName === null) return 1;
          if (b.regionTypeSimName === null) return -1;
          return b.regionTypeSimName.localeCompare(a.regionTypeSimName);
        };
      case clsViewRegionENEx.con_ContainerTypeName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          if (a.containerTypeName === null && b.containerTypeName === null) return 0;
          if (a.containerTypeName === null) return 1;
          if (b.containerTypeName === null) return -1;
          return b.containerTypeName.localeCompare(a.containerTypeName);
        };
      case clsViewRegionENEx.con_PageDispModeName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          if (a.pageDispModeName === null && b.pageDispModeName === null) return 0;
          if (a.pageDispModeName === null) return 1;
          if (b.pageDispModeName === null) return -1;
          return b.pageDispModeName.localeCompare(a.pageDispModeName);
        };
      case clsViewRegionENEx.con_InOutTypeName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return b.inOutTypeName.localeCompare(a.inOutTypeName);
        };
      case clsViewRegionENEx.con_TabName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsViewRegionENEx.con_RegionTypeOrderNum:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return b.regionTypeOrderNum - a.regionTypeOrderNum;
        };
      case clsViewRegionENEx.con_RegionTypeName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return b.regionTypeName.localeCompare(a.regionTypeName);
        };
      case clsViewRegionENEx.con_FldCountInUse:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return b.fldCountInUse - a.fldCountInUse;
        };
      case clsViewRegionENEx.con_ReferNum:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return b.referNum - a.referNum;
        };
      case clsViewRegionENEx.con_CmPrjName:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          if (a.cmPrjName === null && b.cmPrjName === null) return 0;
          if (a.cmPrjName === null) return 1;
          if (b.cmPrjName === null) return -1;
          return b.cmPrjName.localeCompare(a.cmPrjName);
        };
      case clsViewRegionENEx.con_CmPrjId:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      case clsViewRegionENEx.con_PrjIdRefer:
        return (a: clsViewRegionENEx, b: clsViewRegionENEx) => {
          return b.prjIdRefer.localeCompare(a.prjIdRefer);
        };
      default:
        return ViewRegion_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegion_FuncMapRegionTypeSimName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegion_FuncMapRegionTypeSimName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.regionTypeSimName) == true) {
      const RegionTypeRegionTypeId = objViewRegion.regionTypeId;
      const RegionTypeRegionTypeSimName = await RegionType_func(
        clsRegionTypeEN.con_RegionTypeId,
        clsRegionTypeEN.con_RegionTypeSimName,
        RegionTypeRegionTypeId,
      );
      objViewRegion.regionTypeSimName = RegionTypeRegionTypeSimName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001394)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegion_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegion_FuncMapContainerTypeName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegion_FuncMapContainerTypeName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.containerTypeName) == true) {
      const GCContainerTypeContainerTypeId = objViewRegion.containerTypeId;
      const GCContainerTypeContainerTypeName = await GCContainerType_func(
        clsGCContainerTypeEN.con_ContainerTypeId,
        clsGCContainerTypeEN.con_ContainerTypeName,
        GCContainerTypeContainerTypeId,
      );
      objViewRegion.containerTypeName = GCContainerTypeContainerTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001395)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegion_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegion_FuncMapPageDispModeName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegion_FuncMapPageDispModeName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.pageDispModeName) == true) {
      const PageDispModePageDispModeId = objViewRegion.pageDispModeId;
      const PageDispModePageDispModeName = await PageDispMode_func(
        clsPageDispModeEN.con_PageDispModeId,
        clsPageDispModeEN.con_PageDispModeName,
        PageDispModePageDispModeId,
      );
      objViewRegion.pageDispModeName = PageDispModePageDispModeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001396)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegion_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegion_FuncMapInOutTypeName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegion_FuncMapInOutTypeName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.inOutTypeName) == true) {
      const InOutTypeInOutTypeId = objViewRegion.inOutTypeId;
      const InOutTypeInOutTypeName = await InOutType_func(
        clsInOutTypeEN.con_InOutTypeId,
        clsInOutTypeEN.con_InOutTypeName,
        InOutTypeInOutTypeId,
      );
      objViewRegion.inOutTypeName = InOutTypeInOutTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001302)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegion_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegion_FuncMapTabName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegion_FuncMapTabName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.tabName) == true) {
      const vPrjTabSimTabId = objViewRegion.tabId;
      if (IsNullOrEmpty(objViewRegion.cmPrjId) == true) {
        const strMsg = `函数映射[TabName]数据出错,cmPrjId不能为空!(in ${viewRegion_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vPrjTabSimTabName = await vPrjTab_Sim_func(
        clsvPrjTab_SimEN.con_TabId,
        clsvPrjTab_SimEN.con_TabName,
        vPrjTabSimTabId,
        objViewRegion.prjId,
      );
      objViewRegion.tabName = vPrjTabSimTabName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001298)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegion_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegion_FuncMapReferNum(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegion_FuncMapReferNum.name;
  try {
    if (objViewRegion.referNum == 0) {
      const vViewRegionReferNumRegionId = objViewRegion.regionId;
      if (IsNullOrEmpty(objViewRegion.prjIdRefer) == true) {
        const strMsg = `函数映射[ReferNum]数据出错,prjIdRefer不能为空!(in ${viewRegion_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vViewRegionReferNumReferNum = await vViewRegionReferNum_func(
        clsvViewRegionReferNumEN.con_RegionId,
        clsvViewRegionReferNumEN.con_ReferNum,
        vViewRegionReferNumRegionId,
        objViewRegion.prjIdRefer,
      );
      objViewRegion.referNum = vViewRegionReferNumReferNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001397)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegion_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objViewRegionS:源对象
 **/
export async function ViewRegion_FuncMapCmPrjName(objViewRegion: clsViewRegionENEx) {
  const strThisFuncName = ViewRegion_FuncMapCmPrjName.name;
  try {
    if (IsNullOrEmpty(objViewRegion.cmPrjName) == true) {
      const CMProjectCmPrjId = objViewRegion.cmPrjId;
      const CMProjectCmPrjName = await CMProject_func(
        clsCMProjectEN.con_CmPrjId,
        clsCMProjectEN.con_CmPrjName,
        CMProjectCmPrjId,
      );
      objViewRegion.cmPrjName = CMProjectCmPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001320)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      viewRegion_ConstructorName,
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
export async function ViewRegion_DelViewRegionsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelViewRegionsByCondAsync';
  const strAction = 'DelViewRegionsByCond';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
 * @param objViewRegionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewRegion_AddNewRecordAsync(
  objViewRegionEN: clsViewRegionEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objViewRegionEN);
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionEN, config);
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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
 * @param objViewRegionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function ViewRegion_AddNewRecordWithMaxIdAsync(
  objViewRegionEN: clsViewRegionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionEN, config);
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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
export async function ViewRegion_AddNewObjSave(
  objViewRegionEN: clsViewRegionEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    ViewRegion_CheckPropertyNew(objViewRegionEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewRegion_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ViewRegion_CheckUniCond4Add(objViewRegionEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await ViewRegion_AddNewRecordWithMaxIdAsync(objViewRegionEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      ViewRegion_ReFreshCache(objViewRegionEN.prjId);
    } else {
      const strInfo = `添加[界面区域(ViewRegion)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${viewRegion_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function ViewRegion_CheckUniCond4Add(
  objViewRegionEN: clsViewRegionEN,
): Promise<boolean> {
  const strUniquenessCondition = ViewRegion_GetUniCondStr(objViewRegionEN);
  const bolIsExistCondition = await ViewRegion_IsExistRecordAsync(strUniquenessCondition);
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
export async function ViewRegion_CheckUniCond4Update(
  objViewRegionEN: clsViewRegionEN,
): Promise<boolean> {
  const strUniquenessCondition = ViewRegion_GetUniCondStr4Update(objViewRegionEN);
  const bolIsExistCondition = await ViewRegion_IsExistRecordAsync(strUniquenessCondition);
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
export async function ViewRegion_UpdateObjSave(objViewRegionEN: clsViewRegionEN): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objViewRegionEN.sfUpdFldSetStr = objViewRegionEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objViewRegionEN.regionId == '' || objViewRegionEN.regionId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    ViewRegion_CheckProperty4Update(objViewRegionEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${viewRegion_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await ViewRegion_CheckUniCond4Update(objViewRegionEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await ViewRegion_UpdateRecordAsync(objViewRegionEN);
    if (returnBool == true) {
      ViewRegion_ReFreshCache(objViewRegionEN.prjId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${viewRegion_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objViewRegionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function ViewRegion_AddNewRecordWithReturnKeyAsync(
  objViewRegionEN: clsViewRegionEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionEN, config);
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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
 * @param objViewRegionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewRegion_UpdateRecordAsync(
  objViewRegionEN: clsViewRegionEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objViewRegionEN.sfUpdFldSetStr === undefined ||
    objViewRegionEN.sfUpdFldSetStr === null ||
    objViewRegionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewRegionEN.regionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionEN, config);
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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
 * @param objViewRegionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function ViewRegion_EditRecordExAsync(
  objViewRegionEN: clsViewRegionEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objViewRegionEN.sfUpdFldSetStr === undefined ||
    objViewRegionEN.sfUpdFldSetStr === null ||
    objViewRegionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewRegionEN.regionId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionEN, config);
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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
 * @param objViewRegionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function ViewRegion_UpdateWithConditionAsync(
  objViewRegionEN: clsViewRegionEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objViewRegionEN.sfUpdFldSetStr === undefined ||
    objViewRegionEN.sfUpdFldSetStr === null ||
    objViewRegionEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objViewRegionEN.regionId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);
  objViewRegionEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objViewRegionEN, config);
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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
 * @param objstrRegionIdCond:条件对象
 * @returns 对象列表子集
 */
export async function ViewRegion_IsExistRecordCache(
  objViewRegionCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrViewRegionObjLstCache = await ViewRegion_GetObjLstCache(strPrjId);
  if (arrViewRegionObjLstCache == null) return false;
  let arrViewRegionSel = arrViewRegionObjLstCache;
  if (objViewRegionCond.GetConditions().length == 0)
    return arrViewRegionSel.length > 0 ? true : false;
  try {
    for (const objCondition of objViewRegionCond.GetConditions()) {
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
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrViewRegionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objViewRegionCond),
      viewRegion_ConstructorName,
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
export async function ViewRegion_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
 * @param strRegionId:所给的关键字
 * @returns 对象
 */
export async function ViewRegion_IsExistCache(strRegionId: string, strPrjId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrViewRegionObjLstCache = await ViewRegion_GetObjLstCache(strPrjId);
  if (arrViewRegionObjLstCache == null) return false;
  try {
    const arrViewRegionSel = arrViewRegionObjLstCache.filter((x) => x.regionId == strRegionId);
    if (arrViewRegionSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strRegionId,
      viewRegion_ConstructorName,
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
 * @param strRegionId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function ViewRegion_IsExistAsync(strRegionId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRegionId,
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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
export async function ViewRegion_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
 * @param objViewRegionCond:条件对象
 * @returns 对象列表记录数
 */
export async function ViewRegion_GetRecCountByCondCache(
  objViewRegionCond: ConditionCollection,
  strPrjId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrViewRegionObjLstCache = await ViewRegion_GetObjLstCache(strPrjId);
  if (arrViewRegionObjLstCache == null) return 0;
  let arrViewRegionSel = arrViewRegionObjLstCache;
  if (objViewRegionCond.GetConditions().length == 0) return arrViewRegionSel.length;
  try {
    for (const objCondition of objViewRegionCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrViewRegionSel = arrViewRegionSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrViewRegionSel = arrViewRegionSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrViewRegionSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objViewRegionCond),
      viewRegion_ConstructorName,
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
export async function ViewRegion_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
export async function ViewRegion_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(viewRegion_Controller, strAction);

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
        viewRegion_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        viewRegion_ConstructorName,
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
export function ViewRegion_GetWebApiUrl(strController: string, strAction: string): string {
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
export function ViewRegion_ReFreshCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsViewRegionWApi.clsViewRegionWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsViewRegionWApi.clsViewRegionWApi.ReFreshCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsViewRegionEN._CurrTabName, strPrjId);
  switch (clsViewRegionEN.CacheModeId) {
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
  clsViewRegionEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function ViewRegion_ReFreshThisCache(strPrjId: string): void {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空!(In clsViewRegionWApi.ViewRegion_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确!(clsViewRegionWApi.ViewRegion_ReFreshThisCache)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsViewRegionEN._CurrTabName, strPrjId);
    switch (clsViewRegionEN.CacheModeId) {
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
    clsViewRegionEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function ViewRegion_GetLastRefreshTime(): string {
  if (clsViewRegionEN._RefreshTimeLst.length == 0) return '';
  return clsViewRegionEN._RefreshTimeLst[clsViewRegionEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function ViewRegion_BindDdl_RegionIdByPrjIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
  strPrjId: string,
) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsViewRegionWApi.BindDdl_RegionIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsViewRegionWApi.BindDdl_RegionIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_RegionIdByPrjIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_RegionIdByPrjIdInDivCache");
  let arrObjLstSel = await ViewRegion_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsViewRegionEN.con_RegionId,
    clsViewRegionEN.con_RegionName,
    '界面区域...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strPrjId:
*/
export async function ViewRegion_GetArrViewRegionByPrjId(strPrjId: string) {
  if (IsNullOrEmpty(strPrjId) == true) {
    const strMsg = Format(
      '参数:[strPrjId]不能为空！(In clsViewRegionWApi.BindDdl_RegionIdByPrjIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strPrjId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strPrjId]的长度:[{0}]不正确！(clsViewRegionWApi.BindDdl_RegionIdByPrjIdInDiv)',
      strPrjId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_RegionIdByPrjIdInDivCache");
  const arrViewRegion = new Array<clsViewRegionEN>();
  let arrObjLstSel = await ViewRegion_GetObjLstCache(strPrjId);
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.prjId == strPrjId);
  const obj0 = new clsViewRegionEN();
  obj0.regionId = '0';
  obj0.regionName = '选界面区域...';
  arrViewRegion.push(obj0);
  arrObjLstSel.forEach((x) => arrViewRegion.push(x));
  return arrViewRegion;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewRegion_CheckPropertyNew(pobjViewRegionEN: clsViewRegionEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjViewRegionEN.regionName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[区域名称]不能为空(In 界面区域)!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.regionTypeId) === true ||
    pobjViewRegionEN.regionTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[区域类型Id]不能为空(In 界面区域)!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.inOutTypeId) === true ||
    pobjViewRegionEN.inOutTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[INOUT类型ID]不能为空(In 界面区域)!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjViewRegionEN.tabId) === true || pobjViewRegionEN.tabId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[表ID]不能为空(In 界面区域)!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjViewRegionEN.prjId) === true || pobjViewRegionEN.prjId.toString() === '0') {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 界面区域)!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjViewRegionEN.clsName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[类名]不能为空(In 界面区域)!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewRegionEN.regionId) == false &&
    GetStrLen(pobjViewRegionEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域Id(regionId)]的长度不能超过10(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.regionId}(clsViewRegionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.regionName) == false &&
    GetStrLen(pobjViewRegionEN.regionName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域名称(regionName)]的长度不能超过50(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.regionName}(clsViewRegionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.regionTypeId) == false &&
    GetStrLen(pobjViewRegionEN.regionTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域类型Id(regionTypeId)]的长度不能超过4(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.regionTypeId}(clsViewRegionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.fileName) == false &&
    GetStrLen(pobjViewRegionEN.fileName) > 150
  ) {
    throw new Error(
      `(errid:Watl000413)字段[文件名(fileName)]的长度不能超过150(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.fileName}(clsViewRegionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.containerTypeId) == false &&
    GetStrLen(pobjViewRegionEN.containerTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[容器类型Id(containerTypeId)]的长度不能超过4(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.containerTypeId}(clsViewRegionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.pageDispModeId) == false &&
    GetStrLen(pobjViewRegionEN.pageDispModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[页面显示模式Id(pageDispModeId)]的长度不能超过2(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.pageDispModeId}(clsViewRegionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.inOutTypeId) == false &&
    GetStrLen(pobjViewRegionEN.inOutTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[INOUT类型ID(inOutTypeId)]的长度不能超过2(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.inOutTypeId}(clsViewRegionBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjViewRegionEN.tabId) == false && GetStrLen(pobjViewRegionEN.tabId) > 8) {
    throw new Error(
      `(errid:Watl000413)字段[表ID(tabId)]的长度不能超过8(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.tabId}(clsViewRegionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.keyId4Test) == false &&
    GetStrLen(pobjViewRegionEN.keyId4Test) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[测试关键字Id(keyId4Test)]的长度不能超过50(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.keyId4Test}(clsViewRegionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.errMsg) == false &&
    GetStrLen(pobjViewRegionEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.errMsg}(clsViewRegionBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjViewRegionEN.prjId) == false && GetStrLen(pobjViewRegionEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.prjId}(clsViewRegionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.updUser) == false &&
    GetStrLen(pobjViewRegionEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.updUser}(clsViewRegionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.updDate) == false &&
    GetStrLen(pobjViewRegionEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.updDate}(clsViewRegionBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjViewRegionEN.memo) == false && GetStrLen(pobjViewRegionEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.memo}(clsViewRegionBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.clsName) == false &&
    GetStrLen(pobjViewRegionEN.clsName) > 100
  ) {
    throw new Error(
      `(errid:Watl000413)字段[类名(clsName)]的长度不能超过100(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.clsName}(clsViewRegionBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewRegionEN.regionId) == false &&
    undefined !== pobjViewRegionEN.regionId &&
    tzDataType.isString(pobjViewRegionEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域Id(regionId)]的值:[${pobjViewRegionEN.regionId}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.regionName) == false &&
    undefined !== pobjViewRegionEN.regionName &&
    tzDataType.isString(pobjViewRegionEN.regionName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域名称(regionName)]的值:[${pobjViewRegionEN.regionName}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.regionTypeId) == false &&
    undefined !== pobjViewRegionEN.regionTypeId &&
    tzDataType.isString(pobjViewRegionEN.regionTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域类型Id(regionTypeId)]的值:[${pobjViewRegionEN.regionTypeId}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.fileName) == false &&
    undefined !== pobjViewRegionEN.fileName &&
    tzDataType.isString(pobjViewRegionEN.fileName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[文件名(fileName)]的值:[${pobjViewRegionEN.fileName}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjViewRegionEN.height &&
    undefined !== pobjViewRegionEN.height &&
    tzDataType.isNumber(pobjViewRegionEN.height) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[高度(height)]的值:[${pobjViewRegionEN.height}], 非法,应该为数值型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjViewRegionEN.width &&
    undefined !== pobjViewRegionEN.width &&
    tzDataType.isNumber(pobjViewRegionEN.width) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[宽(width)]的值:[${pobjViewRegionEN.width}], 非法,应该为数值型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjViewRegionEN.colNum &&
    undefined !== pobjViewRegionEN.colNum &&
    tzDataType.isNumber(pobjViewRegionEN.colNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[列数(colNum)]的值:[${pobjViewRegionEN.colNum}], 非法,应该为数值型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.containerTypeId) == false &&
    undefined !== pobjViewRegionEN.containerTypeId &&
    tzDataType.isString(pobjViewRegionEN.containerTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[容器类型Id(containerTypeId)]的值:[${pobjViewRegionEN.containerTypeId}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.pageDispModeId) == false &&
    undefined !== pobjViewRegionEN.pageDispModeId &&
    tzDataType.isString(pobjViewRegionEN.pageDispModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[页面显示模式Id(pageDispModeId)]的值:[${pobjViewRegionEN.pageDispModeId}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.inOutTypeId) == false &&
    undefined !== pobjViewRegionEN.inOutTypeId &&
    tzDataType.isString(pobjViewRegionEN.inOutTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[INOUT类型ID(inOutTypeId)]的值:[${pobjViewRegionEN.inOutTypeId}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.tabId) == false &&
    undefined !== pobjViewRegionEN.tabId &&
    tzDataType.isString(pobjViewRegionEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[表ID(tabId)]的值:[${pobjViewRegionEN.tabId}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.keyId4Test) == false &&
    undefined !== pobjViewRegionEN.keyId4Test &&
    tzDataType.isString(pobjViewRegionEN.keyId4Test) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[测试关键字Id(keyId4Test)]的值:[${pobjViewRegionEN.keyId4Test}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.errMsg) == false &&
    undefined !== pobjViewRegionEN.errMsg &&
    tzDataType.isString(pobjViewRegionEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjViewRegionEN.errMsg}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.prjId) == false &&
    undefined !== pobjViewRegionEN.prjId &&
    tzDataType.isString(pobjViewRegionEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjViewRegionEN.prjId}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.updUser) == false &&
    undefined !== pobjViewRegionEN.updUser &&
    tzDataType.isString(pobjViewRegionEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjViewRegionEN.updUser}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.updDate) == false &&
    undefined !== pobjViewRegionEN.updDate &&
    tzDataType.isString(pobjViewRegionEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjViewRegionEN.updDate}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.memo) == false &&
    undefined !== pobjViewRegionEN.memo &&
    tzDataType.isString(pobjViewRegionEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjViewRegionEN.memo}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.clsName) == false &&
    undefined !== pobjViewRegionEN.clsName &&
    tzDataType.isString(pobjViewRegionEN.clsName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[类名(clsName)]的值:[${pobjViewRegionEN.clsName}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjViewRegionEN.regionTypeId) == false &&
    pobjViewRegionEN.regionTypeId != '[nuull]' &&
    GetStrLen(pobjViewRegionEN.regionTypeId) != 4
  ) {
    throw '(errid:Watl000415)字段[区域类型Id]作为外键字段,长度应该为4(In 界面区域)!(clsViewRegionBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function ViewRegion_CheckProperty4Update(pobjViewRegionEN: clsViewRegionEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjViewRegionEN.regionId) == false &&
    GetStrLen(pobjViewRegionEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域Id(regionId)]的长度不能超过10(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.regionId}(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.regionName) == false &&
    GetStrLen(pobjViewRegionEN.regionName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域名称(regionName)]的长度不能超过50(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.regionName}(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.regionTypeId) == false &&
    GetStrLen(pobjViewRegionEN.regionTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域类型Id(regionTypeId)]的长度不能超过4(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.regionTypeId}(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.fileName) == false &&
    GetStrLen(pobjViewRegionEN.fileName) > 150
  ) {
    throw new Error(
      `(errid:Watl000416)字段[文件名(fileName)]的长度不能超过150(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.fileName}(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.containerTypeId) == false &&
    GetStrLen(pobjViewRegionEN.containerTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[容器类型Id(containerTypeId)]的长度不能超过4(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.containerTypeId}(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.pageDispModeId) == false &&
    GetStrLen(pobjViewRegionEN.pageDispModeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[页面显示模式Id(pageDispModeId)]的长度不能超过2(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.pageDispModeId}(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.inOutTypeId) == false &&
    GetStrLen(pobjViewRegionEN.inOutTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[INOUT类型ID(inOutTypeId)]的长度不能超过2(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.inOutTypeId}(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjViewRegionEN.tabId) == false && GetStrLen(pobjViewRegionEN.tabId) > 8) {
    throw new Error(
      `(errid:Watl000416)字段[表ID(tabId)]的长度不能超过8(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.tabId}(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.keyId4Test) == false &&
    GetStrLen(pobjViewRegionEN.keyId4Test) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[测试关键字Id(keyId4Test)]的长度不能超过50(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.keyId4Test}(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.errMsg) == false &&
    GetStrLen(pobjViewRegionEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.errMsg}(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjViewRegionEN.prjId) == false && GetStrLen(pobjViewRegionEN.prjId) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.prjId}(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.updUser) == false &&
    GetStrLen(pobjViewRegionEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.updUser}(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.updDate) == false &&
    GetStrLen(pobjViewRegionEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.updDate}(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjViewRegionEN.memo) == false && GetStrLen(pobjViewRegionEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.memo}(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.clsName) == false &&
    GetStrLen(pobjViewRegionEN.clsName) > 100
  ) {
    throw new Error(
      `(errid:Watl000416)字段[类名(clsName)]的长度不能超过100(In 界面区域(ViewRegion))!值:${pobjViewRegionEN.clsName}(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjViewRegionEN.regionId) == false &&
    undefined !== pobjViewRegionEN.regionId &&
    tzDataType.isString(pobjViewRegionEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域Id(regionId)]的值:[${pobjViewRegionEN.regionId}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.regionName) == false &&
    undefined !== pobjViewRegionEN.regionName &&
    tzDataType.isString(pobjViewRegionEN.regionName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域名称(regionName)]的值:[${pobjViewRegionEN.regionName}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.regionTypeId) == false &&
    undefined !== pobjViewRegionEN.regionTypeId &&
    tzDataType.isString(pobjViewRegionEN.regionTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域类型Id(regionTypeId)]的值:[${pobjViewRegionEN.regionTypeId}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.fileName) == false &&
    undefined !== pobjViewRegionEN.fileName &&
    tzDataType.isString(pobjViewRegionEN.fileName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[文件名(fileName)]的值:[${pobjViewRegionEN.fileName}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjViewRegionEN.height &&
    undefined !== pobjViewRegionEN.height &&
    tzDataType.isNumber(pobjViewRegionEN.height) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[高度(height)]的值:[${pobjViewRegionEN.height}], 非法,应该为数值型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjViewRegionEN.width &&
    undefined !== pobjViewRegionEN.width &&
    tzDataType.isNumber(pobjViewRegionEN.width) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[宽(width)]的值:[${pobjViewRegionEN.width}], 非法,应该为数值型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjViewRegionEN.colNum &&
    undefined !== pobjViewRegionEN.colNum &&
    tzDataType.isNumber(pobjViewRegionEN.colNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[列数(colNum)]的值:[${pobjViewRegionEN.colNum}], 非法,应该为数值型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.containerTypeId) == false &&
    undefined !== pobjViewRegionEN.containerTypeId &&
    tzDataType.isString(pobjViewRegionEN.containerTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[容器类型Id(containerTypeId)]的值:[${pobjViewRegionEN.containerTypeId}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.pageDispModeId) == false &&
    undefined !== pobjViewRegionEN.pageDispModeId &&
    tzDataType.isString(pobjViewRegionEN.pageDispModeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[页面显示模式Id(pageDispModeId)]的值:[${pobjViewRegionEN.pageDispModeId}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.inOutTypeId) == false &&
    undefined !== pobjViewRegionEN.inOutTypeId &&
    tzDataType.isString(pobjViewRegionEN.inOutTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[INOUT类型ID(inOutTypeId)]的值:[${pobjViewRegionEN.inOutTypeId}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.tabId) == false &&
    undefined !== pobjViewRegionEN.tabId &&
    tzDataType.isString(pobjViewRegionEN.tabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[表ID(tabId)]的值:[${pobjViewRegionEN.tabId}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.keyId4Test) == false &&
    undefined !== pobjViewRegionEN.keyId4Test &&
    tzDataType.isString(pobjViewRegionEN.keyId4Test) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[测试关键字Id(keyId4Test)]的值:[${pobjViewRegionEN.keyId4Test}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.errMsg) == false &&
    undefined !== pobjViewRegionEN.errMsg &&
    tzDataType.isString(pobjViewRegionEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjViewRegionEN.errMsg}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.prjId) == false &&
    undefined !== pobjViewRegionEN.prjId &&
    tzDataType.isString(pobjViewRegionEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjViewRegionEN.prjId}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.updUser) == false &&
    undefined !== pobjViewRegionEN.updUser &&
    tzDataType.isString(pobjViewRegionEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjViewRegionEN.updUser}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.updDate) == false &&
    undefined !== pobjViewRegionEN.updDate &&
    tzDataType.isString(pobjViewRegionEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjViewRegionEN.updDate}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.memo) == false &&
    undefined !== pobjViewRegionEN.memo &&
    tzDataType.isString(pobjViewRegionEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjViewRegionEN.memo}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjViewRegionEN.clsName) == false &&
    undefined !== pobjViewRegionEN.clsName &&
    tzDataType.isString(pobjViewRegionEN.clsName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[类名(clsName)]的值:[${pobjViewRegionEN.clsName}], 非法,应该为字符型(In 界面区域(ViewRegion))!(clsViewRegionBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjViewRegionEN.regionTypeId) == false &&
    pobjViewRegionEN.regionTypeId != '[nuull]' &&
    GetStrLen(pobjViewRegionEN.regionTypeId) != 4
  ) {
    throw '(errid:Watl000418)字段[区域类型Id]作为外键字段,长度应该为4(In 界面区域)!(clsViewRegionBL:CheckPropertyNew)';
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
export function ViewRegion_GetJSONStrByObj(pobjViewRegionEN: clsViewRegionEN): string {
  pobjViewRegionEN.sfUpdFldSetStr = pobjViewRegionEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjViewRegionEN);
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
export function ViewRegion_GetObjLstByJSONStr(strJSON: string): Array<clsViewRegionEN> {
  let arrViewRegionObjLst = new Array<clsViewRegionEN>();
  if (strJSON === '') {
    return arrViewRegionObjLst;
  }
  try {
    arrViewRegionObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrViewRegionObjLst;
  }
  return arrViewRegionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrViewRegionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function ViewRegion_GetObjLstByJSONObjLst(
  arrViewRegionObjLstS: Array<clsViewRegionEN>,
): Array<clsViewRegionEN> {
  const arrViewRegionObjLst = new Array<clsViewRegionEN>();
  for (const objInFor of arrViewRegionObjLstS) {
    const obj1 = ViewRegion_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrViewRegionObjLst.push(obj1);
  }
  return arrViewRegionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function ViewRegion_GetObjByJSONStr(strJSON: string): clsViewRegionEN {
  let pobjViewRegionEN = new clsViewRegionEN();
  if (strJSON === '') {
    return pobjViewRegionEN;
  }
  try {
    pobjViewRegionEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjViewRegionEN;
  }
  return pobjViewRegionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function ViewRegion_GetCombineCondition(objViewRegionCond: clsViewRegionEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_RegionId,
    ) == true
  ) {
    const strComparisonOpRegionId: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_RegionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionEN.con_RegionId,
      objViewRegionCond.regionId,
      strComparisonOpRegionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_RegionName,
    ) == true
  ) {
    const strComparisonOpRegionName: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_RegionName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionEN.con_RegionName,
      objViewRegionCond.regionName,
      strComparisonOpRegionName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_RegionTypeId,
    ) == true
  ) {
    const strComparisonOpRegionTypeId: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_RegionTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionEN.con_RegionTypeId,
      objViewRegionCond.regionTypeId,
      strComparisonOpRegionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_FileName,
    ) == true
  ) {
    const strComparisonOpFileName: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_FileName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionEN.con_FileName,
      objViewRegionCond.fileName,
      strComparisonOpFileName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_Height,
    ) == true
  ) {
    const strComparisonOpHeight: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_Height];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewRegionEN.con_Height,
      objViewRegionCond.height,
      strComparisonOpHeight,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_Width,
    ) == true
  ) {
    const strComparisonOpWidth: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_Width];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewRegionEN.con_Width,
      objViewRegionCond.width,
      strComparisonOpWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_ColNum,
    ) == true
  ) {
    const strComparisonOpColNum: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_ColNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsViewRegionEN.con_ColNum,
      objViewRegionCond.colNum,
      strComparisonOpColNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_ContainerTypeId,
    ) == true
  ) {
    const strComparisonOpContainerTypeId: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_ContainerTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionEN.con_ContainerTypeId,
      objViewRegionCond.containerTypeId,
      strComparisonOpContainerTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_PageDispModeId,
    ) == true
  ) {
    const strComparisonOpPageDispModeId: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_PageDispModeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionEN.con_PageDispModeId,
      objViewRegionCond.pageDispModeId,
      strComparisonOpPageDispModeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_InOutTypeId,
    ) == true
  ) {
    const strComparisonOpInOutTypeId: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_InOutTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionEN.con_InOutTypeId,
      objViewRegionCond.inOutTypeId,
      strComparisonOpInOutTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_TabId,
    ) == true
  ) {
    const strComparisonOpTabId: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_TabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionEN.con_TabId,
      objViewRegionCond.tabId,
      strComparisonOpTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_KeyId4Test,
    ) == true
  ) {
    const strComparisonOpKeyId4Test: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_KeyId4Test];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionEN.con_KeyId4Test,
      objViewRegionCond.keyId4Test,
      strComparisonOpKeyId4Test,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionEN.con_ErrMsg,
      objViewRegionCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionEN.con_PrjId,
      objViewRegionCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionEN.con_UpdUser,
      objViewRegionCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionEN.con_UpdDate,
      objViewRegionCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionEN.con_Memo,
      objViewRegionCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objViewRegionCond.dicFldComparisonOp,
      clsViewRegionEN.con_ClsName,
    ) == true
  ) {
    const strComparisonOpClsName: string =
      objViewRegionCond.dicFldComparisonOp[clsViewRegionEN.con_ClsName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsViewRegionEN.con_ClsName,
      objViewRegionCond.clsName,
      strComparisonOpClsName,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewRegion(界面区域),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param strClsName: 类名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewRegion_GetUniCondStr(objViewRegionEN: clsViewRegionEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and PrjId = '{0}'", objViewRegionEN.prjId);
  strWhereCond += Format(" and ClsName = '{0}'", objViewRegionEN.clsName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--ViewRegion(界面区域),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strPrjId: 工程Id(要求唯一的字段)
 * @param strClsName: 类名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function ViewRegion_GetUniCondStr4Update(objViewRegionEN: clsViewRegionEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RegionId <> '{0}'", objViewRegionEN.regionId);
  strWhereCond += Format(" and PrjId = '{0}'", objViewRegionEN.prjId);
  strWhereCond += Format(" and ClsName = '{0}'", objViewRegionEN.clsName);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objViewRegionENS:源对象
 * @param objViewRegionENT:目标对象
 */
export function ViewRegion_GetObjFromJsonObj(objViewRegionENS: clsViewRegionEN): clsViewRegionEN {
  const objViewRegionENT: clsViewRegionEN = new clsViewRegionEN();
  ObjectAssign(objViewRegionENT, objViewRegionENS);
  return objViewRegionENT;
}
