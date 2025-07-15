/**
 * 类名:clsEditRegionFldsWApi
 * 表名:EditRegionFlds(00050116)
 * 版本:2025.06.13.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/14 18:58:58
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
 * 编辑区域字段(EditRegionFlds)
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
  GetExceptionStr,
  myShowErrorMsg,
} from '@/ts/PubFun/clsCommFunc4Web';
import { editRegionFldsCache, isFuncMapCache } from '@/views/RegionManage/EditRegionFldsVueShare';
import { clsEditRegionFldsENEx } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsENEx';
import { clsEditRegionFldsEN } from '@/ts/L0Entity/RegionManage/clsEditRegionFldsEN';
import { vFieldTab_Sim_func } from '@/ts/L3ForWApi/Table_Field/clsvFieldTab_SimWApi';
import { clsvFieldTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvFieldTab_SimEN';
import { CtlType_func } from '@/ts/L3ForWApi/PrjInterface/clsCtlTypeWApi';
import { clsCtlTypeEN } from '@/ts/L0Entity/PrjInterface/clsCtlTypeEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const editRegionFlds_Controller = 'EditRegionFldsApi';
export const editRegionFlds_ConstructorName = 'editRegionFlds';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function EditRegionFlds_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsEditRegionFldsEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsEditRegionFldsWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
      const objEditRegionFlds = EditRegionFlds_GetObjFromJsonObj(returnObj);
      return objEditRegionFlds;
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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function EditRegionFlds_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsEditRegionFldsWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsEditRegionFldsEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objEditRegionFldsCache: clsEditRegionFldsEN = JSON.parse(strTempObj);
    return objEditRegionFldsCache;
  }
  try {
    const objEditRegionFlds = await EditRegionFlds_GetObjBymIdAsync(lngmId);
    if (objEditRegionFlds != null) {
      localStorage.setItem(strKey, JSON.stringify(objEditRegionFlds));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objEditRegionFlds;
    }
    return objEditRegionFlds;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      editRegionFlds_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function EditRegionFlds_GetObjBymIdCache(
  lngmId: number,
  strRegionId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsEditRegionFldsWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstCache(strRegionId);
  try {
    const arrEditRegionFldsSel = arrEditRegionFldsObjLstCache.filter((x) => x.mId == lngmId);
    let objEditRegionFlds: clsEditRegionFldsEN;
    if (arrEditRegionFldsSel.length > 0) {
      objEditRegionFlds = arrEditRegionFldsSel[0];
      return objEditRegionFlds;
    } else {
      if (bolTryAsyncOnce == true) {
        const objEditRegionFldsConst = await EditRegionFlds_GetObjBymIdAsync(lngmId);
        if (objEditRegionFldsConst != null) {
          EditRegionFlds_ReFreshThisCache(strRegionId);
          return objEditRegionFldsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      editRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objEditRegionFlds:所给的对象
 * @returns 对象
 */
export async function EditRegionFlds_UpdateObjInLstCache(
  objEditRegionFlds: clsEditRegionFldsEN,
  strRegionId: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstCache(strRegionId);
    const obj = arrEditRegionFldsObjLstCache.find(
      (x) => x.regionId == objEditRegionFlds.regionId && x.fldId == objEditRegionFlds.fldId,
    );
    if (obj != null) {
      objEditRegionFlds.mId = obj.mId;
      ObjectAssign(obj, objEditRegionFlds);
    } else {
      arrEditRegionFldsObjLstCache.push(objEditRegionFlds);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      editRegionFlds_ConstructorName,
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
export function EditRegionFlds_SortFunDefa(a: clsEditRegionFldsEN, b: clsEditRegionFldsEN): number {
  return a.mId - b.mId;
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
export function EditRegionFlds_SortFunDefa2Fld(
  a: clsEditRegionFldsEN,
  b: clsEditRegionFldsEN,
): number {
  if (a.regionId == b.regionId) return a.fldId.localeCompare(b.fldId);
  else return a.regionId.localeCompare(b.regionId);
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
export function EditRegionFlds_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsEditRegionFldsEN.con_mId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return a.mId - b.mId;
        };
      case clsEditRegionFldsEN.con_RegionId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return a.regionId.localeCompare(b.regionId);
        };
      case clsEditRegionFldsEN.con_FldId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.fldId == null) return -1;
          if (b.fldId == null) return 1;
          return a.fldId.localeCompare(b.fldId);
        };
      case clsEditRegionFldsEN.con_LabelCaption:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.labelCaption == null) return -1;
          if (b.labelCaption == null) return 1;
          return a.labelCaption.localeCompare(b.labelCaption);
        };
      case clsEditRegionFldsEN.con_CtlTypeId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return a.ctlTypeId.localeCompare(b.ctlTypeId);
        };
      case clsEditRegionFldsEN.con_CallTabFeatureId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.callTabFeatureId == null) return -1;
          if (b.callTabFeatureId == null) return 1;
          return a.callTabFeatureId.localeCompare(b.callTabFeatureId);
        };
      case clsEditRegionFldsEN.con_VarId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.varId == null) return -1;
          if (b.varId == null) return 1;
          return a.varId.localeCompare(b.varId);
        };
      case clsEditRegionFldsEN.con_DefaultValue:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.defaultValue == null) return -1;
          if (b.defaultValue == null) return 1;
          return a.defaultValue.localeCompare(b.defaultValue);
        };
      case clsEditRegionFldsEN.con_DdlItemsOptionId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.ddlItemsOptionId == null) return -1;
          if (b.ddlItemsOptionId == null) return 1;
          return a.ddlItemsOptionId.localeCompare(b.ddlItemsOptionId);
        };
      case clsEditRegionFldsEN.con_DsTabId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.dsTabId == null) return -1;
          if (b.dsTabId == null) return 1;
          return a.dsTabId.localeCompare(b.dsTabId);
        };
      case clsEditRegionFldsEN.con_TabFeatureId4Ddl:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.tabFeatureId4Ddl == null) return -1;
          if (b.tabFeatureId4Ddl == null) return 1;
          return a.tabFeatureId4Ddl.localeCompare(b.tabFeatureId4Ddl);
        };
      case clsEditRegionFldsEN.con_FldIdCond1:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.fldIdCond1 == null) return -1;
          if (b.fldIdCond1 == null) return 1;
          return a.fldIdCond1.localeCompare(b.fldIdCond1);
        };
      case clsEditRegionFldsEN.con_VarIdCond1:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.varIdCond1 == null) return -1;
          if (b.varIdCond1 == null) return 1;
          return a.varIdCond1.localeCompare(b.varIdCond1);
        };
      case clsEditRegionFldsEN.con_FldIdCond2:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.fldIdCond2 == null) return -1;
          if (b.fldIdCond2 == null) return 1;
          return a.fldIdCond2.localeCompare(b.fldIdCond2);
        };
      case clsEditRegionFldsEN.con_VarIdCond2:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.varIdCond2 == null) return -1;
          if (b.varIdCond2 == null) return 1;
          return a.varIdCond2.localeCompare(b.varIdCond2);
        };
      case clsEditRegionFldsEN.con_DsCondStr:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.dsCondStr == null) return -1;
          if (b.dsCondStr == null) return 1;
          return a.dsCondStr.localeCompare(b.dsCondStr);
        };
      case clsEditRegionFldsEN.con_DsSqlStr:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.dsSqlStr == null) return -1;
          if (b.dsSqlStr == null) return 1;
          return a.dsSqlStr.localeCompare(b.dsSqlStr);
        };
      case clsEditRegionFldsEN.con_ItemsString:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.itemsString == null) return -1;
          if (b.itemsString == null) return 1;
          return a.itemsString.localeCompare(b.itemsString);
        };
      case clsEditRegionFldsEN.con_ColSpan:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return a.colSpan - b.colSpan;
        };
      case clsEditRegionFldsEN.con_ColIndex:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return a.colIndex - b.colIndex;
        };
      case clsEditRegionFldsEN.con_Width:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return a.width - b.width;
        };
      case clsEditRegionFldsEN.con_IsMultiRow:
        return (a: clsEditRegionFldsEN) => {
          if (a.isMultiRow == true) return 1;
          else return -1;
        };
      case clsEditRegionFldsEN.con_SeqNum:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return a.seqNum - b.seqNum;
        };
      case clsEditRegionFldsEN.con_InOutTypeId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.inOutTypeId == null) return -1;
          if (b.inOutTypeId == null) return 1;
          return a.inOutTypeId.localeCompare(b.inOutTypeId);
        };
      case clsEditRegionFldsEN.con_ClickEvent:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.clickEvent == null) return -1;
          if (b.clickEvent == null) return 1;
          return a.clickEvent.localeCompare(b.clickEvent);
        };
      case clsEditRegionFldsEN.con_ChangeEvent:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.changeEvent == null) return -1;
          if (b.changeEvent == null) return 1;
          return a.changeEvent.localeCompare(b.changeEvent);
        };
      case clsEditRegionFldsEN.con_InUse:
        return (a: clsEditRegionFldsEN) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsEditRegionFldsEN.con_ErrMsg:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.errMsg == null) return -1;
          if (b.errMsg == null) return 1;
          return a.errMsg.localeCompare(b.errMsg);
        };
      case clsEditRegionFldsEN.con_PrjId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return a.prjId.localeCompare(b.prjId);
        };
      case clsEditRegionFldsEN.con_UpdUser:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return a.updUser.localeCompare(b.updUser);
        };
      case clsEditRegionFldsEN.con_UpdDate:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsEditRegionFldsEN.con_Memo:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[EditRegionFlds]中不存在!(in ${editRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsEditRegionFldsEN.con_mId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return b.mId - a.mId;
        };
      case clsEditRegionFldsEN.con_RegionId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return b.regionId.localeCompare(a.regionId);
        };
      case clsEditRegionFldsEN.con_FldId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.fldId == null) return -1;
          if (a.fldId == null) return 1;
          return b.fldId.localeCompare(a.fldId);
        };
      case clsEditRegionFldsEN.con_LabelCaption:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.labelCaption == null) return -1;
          if (a.labelCaption == null) return 1;
          return b.labelCaption.localeCompare(a.labelCaption);
        };
      case clsEditRegionFldsEN.con_CtlTypeId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return b.ctlTypeId.localeCompare(a.ctlTypeId);
        };
      case clsEditRegionFldsEN.con_CallTabFeatureId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.callTabFeatureId == null) return -1;
          if (a.callTabFeatureId == null) return 1;
          return b.callTabFeatureId.localeCompare(a.callTabFeatureId);
        };
      case clsEditRegionFldsEN.con_VarId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.varId == null) return -1;
          if (a.varId == null) return 1;
          return b.varId.localeCompare(a.varId);
        };
      case clsEditRegionFldsEN.con_DefaultValue:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.defaultValue == null) return -1;
          if (a.defaultValue == null) return 1;
          return b.defaultValue.localeCompare(a.defaultValue);
        };
      case clsEditRegionFldsEN.con_DdlItemsOptionId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.ddlItemsOptionId == null) return -1;
          if (a.ddlItemsOptionId == null) return 1;
          return b.ddlItemsOptionId.localeCompare(a.ddlItemsOptionId);
        };
      case clsEditRegionFldsEN.con_DsTabId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.dsTabId == null) return -1;
          if (a.dsTabId == null) return 1;
          return b.dsTabId.localeCompare(a.dsTabId);
        };
      case clsEditRegionFldsEN.con_TabFeatureId4Ddl:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.tabFeatureId4Ddl == null) return -1;
          if (a.tabFeatureId4Ddl == null) return 1;
          return b.tabFeatureId4Ddl.localeCompare(a.tabFeatureId4Ddl);
        };
      case clsEditRegionFldsEN.con_FldIdCond1:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.fldIdCond1 == null) return -1;
          if (a.fldIdCond1 == null) return 1;
          return b.fldIdCond1.localeCompare(a.fldIdCond1);
        };
      case clsEditRegionFldsEN.con_VarIdCond1:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.varIdCond1 == null) return -1;
          if (a.varIdCond1 == null) return 1;
          return b.varIdCond1.localeCompare(a.varIdCond1);
        };
      case clsEditRegionFldsEN.con_FldIdCond2:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.fldIdCond2 == null) return -1;
          if (a.fldIdCond2 == null) return 1;
          return b.fldIdCond2.localeCompare(a.fldIdCond2);
        };
      case clsEditRegionFldsEN.con_VarIdCond2:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.varIdCond2 == null) return -1;
          if (a.varIdCond2 == null) return 1;
          return b.varIdCond2.localeCompare(a.varIdCond2);
        };
      case clsEditRegionFldsEN.con_DsCondStr:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.dsCondStr == null) return -1;
          if (a.dsCondStr == null) return 1;
          return b.dsCondStr.localeCompare(a.dsCondStr);
        };
      case clsEditRegionFldsEN.con_DsSqlStr:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.dsSqlStr == null) return -1;
          if (a.dsSqlStr == null) return 1;
          return b.dsSqlStr.localeCompare(a.dsSqlStr);
        };
      case clsEditRegionFldsEN.con_ItemsString:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.itemsString == null) return -1;
          if (a.itemsString == null) return 1;
          return b.itemsString.localeCompare(a.itemsString);
        };
      case clsEditRegionFldsEN.con_ColSpan:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return b.colSpan - a.colSpan;
        };
      case clsEditRegionFldsEN.con_ColIndex:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return b.colIndex - a.colIndex;
        };
      case clsEditRegionFldsEN.con_Width:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return b.width - a.width;
        };
      case clsEditRegionFldsEN.con_IsMultiRow:
        return (b: clsEditRegionFldsEN) => {
          if (b.isMultiRow == true) return 1;
          else return -1;
        };
      case clsEditRegionFldsEN.con_SeqNum:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return b.seqNum - a.seqNum;
        };
      case clsEditRegionFldsEN.con_InOutTypeId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.inOutTypeId == null) return -1;
          if (a.inOutTypeId == null) return 1;
          return b.inOutTypeId.localeCompare(a.inOutTypeId);
        };
      case clsEditRegionFldsEN.con_ClickEvent:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.clickEvent == null) return -1;
          if (a.clickEvent == null) return 1;
          return b.clickEvent.localeCompare(a.clickEvent);
        };
      case clsEditRegionFldsEN.con_ChangeEvent:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.changeEvent == null) return -1;
          if (a.changeEvent == null) return 1;
          return b.changeEvent.localeCompare(a.changeEvent);
        };
      case clsEditRegionFldsEN.con_InUse:
        return (b: clsEditRegionFldsEN) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsEditRegionFldsEN.con_ErrMsg:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.errMsg == null) return -1;
          if (a.errMsg == null) return 1;
          return b.errMsg.localeCompare(a.errMsg);
        };
      case clsEditRegionFldsEN.con_PrjId:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return b.prjId.localeCompare(a.prjId);
        };
      case clsEditRegionFldsEN.con_UpdUser:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          return b.updUser.localeCompare(a.updUser);
        };
      case clsEditRegionFldsEN.con_UpdDate:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsEditRegionFldsEN.con_Memo:
        return (a: clsEditRegionFldsEN, b: clsEditRegionFldsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[EditRegionFlds]中不存在!(in ${editRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function EditRegionFlds_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsEditRegionFldsEN.con_mId:
      return (obj: clsEditRegionFldsEN) => {
        return obj.mId === value;
      };
    case clsEditRegionFldsEN.con_RegionId:
      return (obj: clsEditRegionFldsEN) => {
        return obj.regionId === value;
      };
    case clsEditRegionFldsEN.con_FldId:
      return (obj: clsEditRegionFldsEN) => {
        return obj.fldId === value;
      };
    case clsEditRegionFldsEN.con_LabelCaption:
      return (obj: clsEditRegionFldsEN) => {
        return obj.labelCaption === value;
      };
    case clsEditRegionFldsEN.con_CtlTypeId:
      return (obj: clsEditRegionFldsEN) => {
        return obj.ctlTypeId === value;
      };
    case clsEditRegionFldsEN.con_CallTabFeatureId:
      return (obj: clsEditRegionFldsEN) => {
        return obj.callTabFeatureId === value;
      };
    case clsEditRegionFldsEN.con_VarId:
      return (obj: clsEditRegionFldsEN) => {
        return obj.varId === value;
      };
    case clsEditRegionFldsEN.con_DefaultValue:
      return (obj: clsEditRegionFldsEN) => {
        return obj.defaultValue === value;
      };
    case clsEditRegionFldsEN.con_DdlItemsOptionId:
      return (obj: clsEditRegionFldsEN) => {
        return obj.ddlItemsOptionId === value;
      };
    case clsEditRegionFldsEN.con_DsTabId:
      return (obj: clsEditRegionFldsEN) => {
        return obj.dsTabId === value;
      };
    case clsEditRegionFldsEN.con_TabFeatureId4Ddl:
      return (obj: clsEditRegionFldsEN) => {
        return obj.tabFeatureId4Ddl === value;
      };
    case clsEditRegionFldsEN.con_FldIdCond1:
      return (obj: clsEditRegionFldsEN) => {
        return obj.fldIdCond1 === value;
      };
    case clsEditRegionFldsEN.con_VarIdCond1:
      return (obj: clsEditRegionFldsEN) => {
        return obj.varIdCond1 === value;
      };
    case clsEditRegionFldsEN.con_FldIdCond2:
      return (obj: clsEditRegionFldsEN) => {
        return obj.fldIdCond2 === value;
      };
    case clsEditRegionFldsEN.con_VarIdCond2:
      return (obj: clsEditRegionFldsEN) => {
        return obj.varIdCond2 === value;
      };
    case clsEditRegionFldsEN.con_DsCondStr:
      return (obj: clsEditRegionFldsEN) => {
        return obj.dsCondStr === value;
      };
    case clsEditRegionFldsEN.con_DsSqlStr:
      return (obj: clsEditRegionFldsEN) => {
        return obj.dsSqlStr === value;
      };
    case clsEditRegionFldsEN.con_ItemsString:
      return (obj: clsEditRegionFldsEN) => {
        return obj.itemsString === value;
      };
    case clsEditRegionFldsEN.con_ColSpan:
      return (obj: clsEditRegionFldsEN) => {
        return obj.colSpan === value;
      };
    case clsEditRegionFldsEN.con_ColIndex:
      return (obj: clsEditRegionFldsEN) => {
        return obj.colIndex === value;
      };
    case clsEditRegionFldsEN.con_Width:
      return (obj: clsEditRegionFldsEN) => {
        return obj.width === value;
      };
    case clsEditRegionFldsEN.con_IsMultiRow:
      return (obj: clsEditRegionFldsEN) => {
        return obj.isMultiRow === value;
      };
    case clsEditRegionFldsEN.con_SeqNum:
      return (obj: clsEditRegionFldsEN) => {
        return obj.seqNum === value;
      };
    case clsEditRegionFldsEN.con_InOutTypeId:
      return (obj: clsEditRegionFldsEN) => {
        return obj.inOutTypeId === value;
      };
    case clsEditRegionFldsEN.con_ClickEvent:
      return (obj: clsEditRegionFldsEN) => {
        return obj.clickEvent === value;
      };
    case clsEditRegionFldsEN.con_ChangeEvent:
      return (obj: clsEditRegionFldsEN) => {
        return obj.changeEvent === value;
      };
    case clsEditRegionFldsEN.con_InUse:
      return (obj: clsEditRegionFldsEN) => {
        return obj.inUse === value;
      };
    case clsEditRegionFldsEN.con_ErrMsg:
      return (obj: clsEditRegionFldsEN) => {
        return obj.errMsg === value;
      };
    case clsEditRegionFldsEN.con_PrjId:
      return (obj: clsEditRegionFldsEN) => {
        return obj.prjId === value;
      };
    case clsEditRegionFldsEN.con_UpdUser:
      return (obj: clsEditRegionFldsEN) => {
        return obj.updUser === value;
      };
    case clsEditRegionFldsEN.con_UpdDate:
      return (obj: clsEditRegionFldsEN) => {
        return obj.updDate === value;
      };
    case clsEditRegionFldsEN.con_Memo:
      return (obj: clsEditRegionFldsEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[EditRegionFlds]中不存在!(in ${editRegionFlds_ConstructorName}.${strThisFuncName})`;
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
 @param strRegionId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function EditRegionFlds_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strRegionIdClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strRegionIdClassfy) == true) {
    const strMsg = Format('参数:[strRegionIdClassfy]不能为空!(In clsEditRegionFldsWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionIdClassfy.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionIdClassfy]的长度:[{0}]不正确!(clsEditRegionFldsWApi.func)',
      strRegionIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsEditRegionFldsEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsEditRegionFldsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsEditRegionFldsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objEditRegionFlds = await EditRegionFlds_GetObjBymIdCache(lngmId, strRegionIdClassfy);
  if (objEditRegionFlds == null) return '';
  if (objEditRegionFlds.GetFldValue(strOutFldName) == null) return '';
  return objEditRegionFlds.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strRegionId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function EditRegionFlds_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strRegionIdClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strRegionIdClassfy) == true) {
    const strMsg = Format('参数:[strRegionIdClassfy]不能为空!(In clsEditRegionFldsWApi.funcKey)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionIdClassfy.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionIdClassfy]的长度:[{0}]不正确!(clsEditRegionFldsWApi.funcKey)',
      strRegionIdClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsEditRegionFldsEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrEditRegionFlds = await EditRegionFlds_GetObjLstCache(strRegionIdClassfy);
  if (arrEditRegionFlds == null) return [];
  let arrEditRegionFldsSel = arrEditRegionFlds;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrEditRegionFldsSel.length == 0) return [];
  return arrEditRegionFldsSel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function EditRegionFlds_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsEditRegionFldsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
      const objEditRegionFlds = EditRegionFlds_GetObjFromJsonObj(returnObj);
      return objEditRegionFlds;
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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_GetObjLstClientCache(strRegionId: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsEditRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsEditRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("RegionId='{0}'", strRegionId);
  }
  const strKey = Format('{0}_{1}', clsEditRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsEditRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsEditRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrEditRegionFldsExObjLstCache: Array<clsEditRegionFldsEN> = CacheHelper.Get(strKey);
    const arrEditRegionFldsObjLstT = EditRegionFlds_GetObjLstByJSONObjLst(
      arrEditRegionFldsExObjLstCache,
    );
    return arrEditRegionFldsObjLstT;
  }
  try {
    const arrEditRegionFldsExObjLst = await EditRegionFlds_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrEditRegionFldsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrEditRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrEditRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_GetObjLstlocalStorage(strRegionId: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsEditRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsEditRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsEditRegionFldsEN.con_RegionId, strRegionId);
  }
  const strKey = Format('{0}_{1}', clsEditRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsEditRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsEditRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrEditRegionFldsExObjLstCache: Array<clsEditRegionFldsEN> = JSON.parse(strTempObjLst);
    const arrEditRegionFldsObjLstT = EditRegionFlds_GetObjLstByJSONObjLst(
      arrEditRegionFldsExObjLstCache,
    );
    return arrEditRegionFldsObjLstT;
  }
  try {
    const arrEditRegionFldsExObjLst = await EditRegionFlds_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsEditRegionFldsEN._CurrTabName);
    const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => localStorage.removeItem(x));
    localStorage.setItem(strKey, JSON.stringify(arrEditRegionFldsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrEditRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrEditRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_GetObjLstlocalStoragePureCache(strRegionId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsEditRegionFldsEN._CurrTabName, strRegionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrEditRegionFldsObjLstCache: Array<clsEditRegionFldsEN> = JSON.parse(strTempObjLst);
    return arrEditRegionFldsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function EditRegionFlds_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsEditRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
          editRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = EditRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_GetObjLstsessionStorage(strRegionId: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsEditRegionFldsEN.WhereFormat) == false) {
    strWhereCond = Format(clsEditRegionFldsEN.WhereFormat, strRegionId);
  } else {
    strWhereCond = Format("{0}='{1}'", clsEditRegionFldsEN.con_RegionId, strRegionId);
  }
  const strKey = Format('{0}_{1}', clsEditRegionFldsEN._CurrTabName, strRegionId);
  if (IsNullOrEmpty(clsEditRegionFldsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsEditRegionFldsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrEditRegionFldsExObjLstCache: Array<clsEditRegionFldsEN> = JSON.parse(strTempObjLst);
    const arrEditRegionFldsObjLstT = EditRegionFlds_GetObjLstByJSONObjLst(
      arrEditRegionFldsExObjLstCache,
    );
    return arrEditRegionFldsObjLstT;
  }
  try {
    const arrEditRegionFldsExObjLst = await EditRegionFlds_GetObjLstAsync(strWhereCond);
    const strPrefix = Format('{0}_', clsEditRegionFldsEN._CurrTabName);
    const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
    arrCacheKeyLst.forEach((x) => sessionStorage.removeItem(x));
    sessionStorage.setItem(strKey, JSON.stringify(arrEditRegionFldsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrEditRegionFldsExObjLst.length,
    );
    console.log(strInfo);
    return arrEditRegionFldsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_GetObjLstsessionStoragePureCache(strRegionId: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsEditRegionFldsEN._CurrTabName, strRegionId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrEditRegionFldsObjLstCache: Array<clsEditRegionFldsEN> = JSON.parse(strTempObjLst);
    return arrEditRegionFldsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function EditRegionFlds_GetObjLstCache(
  strRegionId: string,
): Promise<Array<clsEditRegionFldsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空！(In clsEditRegionFldsWApi.EditRegionFlds_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确！(clsEditRegionFldsWApi.EditRegionFlds_GetObjLstCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrEditRegionFldsObjLstCache;
  switch (clsEditRegionFldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstsessionStorage(strRegionId);
      break;
    case '03': //localStorage
      arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstlocalStorage(strRegionId);
      break;
    case '02': //ClientCache
      arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstClientCache(strRegionId);
      break;
    default:
      arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstClientCache(strRegionId);
      break;
  }
  return arrEditRegionFldsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function EditRegionFlds_GetObjLstPureCache(strRegionId: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrEditRegionFldsObjLstCache;
  switch (clsEditRegionFldsEN.CacheModeId) {
    case '04': //sessionStorage
      arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstsessionStoragePureCache(
        strRegionId,
      );
      break;
    case '03': //localStorage
      arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstlocalStoragePureCache(
        strRegionId,
      );
      break;
    case '02': //ClientCache
      arrEditRegionFldsObjLstCache = null;
      break;
    default:
      arrEditRegionFldsObjLstCache = null;
      break;
  }
  return arrEditRegionFldsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function EditRegionFlds_GetSubObjLstCache(
  objEditRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstCache(strRegionId);
  let arrEditRegionFldsSel = arrEditRegionFldsObjLstCache;
  if (objEditRegionFldsCond.GetConditions().length == 0) return arrEditRegionFldsSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objEditRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrEditRegionFldsSel = arrEditRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrEditRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objEditRegionFldsCond),
      editRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsEditRegionFldsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function EditRegionFlds_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsEditRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          editRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = EditRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
 */
export async function EditRegionFlds_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strRegionId: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstCache(strRegionId);
    const arrEditRegionFldsSel = arrEditRegionFldsObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrEditRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsEditRegionFldsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
          editRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = EditRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsEditRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
          editRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = EditRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strRegionId: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsEditRegionFldsEN>();
  const arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstCache(strRegionId);
  if (arrEditRegionFldsObjLstCache.length == 0) return arrEditRegionFldsObjLstCache;
  let arrEditRegionFldsSel = arrEditRegionFldsObjLstCache;
  const objEditRegionFldsCond = objPagerPara.conditionCollection;
  if (objEditRegionFldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return new Array<clsEditRegionFldsEN>();
  }
  //console.log("clsEditRegionFldsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    for (const objCondition of objEditRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrEditRegionFldsSel = arrEditRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrEditRegionFldsSel.length == 0) return arrEditRegionFldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrEditRegionFldsSel = arrEditRegionFldsSel.sort(
        EditRegionFlds_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrEditRegionFldsSel = arrEditRegionFldsSel.sort(objPagerPara.sortFun);
    }
    arrEditRegionFldsSel = arrEditRegionFldsSel.slice(intStart, intEnd);
    return arrEditRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      editRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsEditRegionFldsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function EditRegionFlds_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsEditRegionFldsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsEditRegionFldsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
          editRegionFlds_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = EditRegionFlds_GetObjLstByJSONObjLst(returnObjLst);
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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export async function EditRegionFlds_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngmId);

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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function EditRegionFlds_DelEditRegionFldssAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelEditRegionFldssAsync';
  const strAction = 'DelEditRegionFldss';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strRegionId: string,
): Promise<Array<clsEditRegionFldsENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrEditRegionFldsObjLst = await EditRegionFlds_GetObjLstCache(strRegionId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsEditRegionFldsENEx>();
  const arrEditRegionFldsExObjLst = arrEditRegionFldsObjLst.map((obj) => {
    const cacheKey = `${obj.mId}_${obj.regionId}`;
    if (editRegionFldsCache[cacheKey]) {
      const oldObj = editRegionFldsCache[cacheKey];
      return oldObj;
    } else {
      const newObj = EditRegionFlds_CopyToEx(obj);
      arrNewObj.push(newObj);
      editRegionFldsCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await EditRegionFlds_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsEditRegionFldsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrEditRegionFldsExObjLst) {
      await EditRegionFlds_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}_${newObj.regionId}`;
      editRegionFldsCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrEditRegionFldsExObjLst.length == 0) return arrEditRegionFldsExObjLst;
  let arrEditRegionFldsSel: Array<clsEditRegionFldsENEx> = arrEditRegionFldsExObjLst;
  const objEditRegionFldsCond = objPagerPara.conditionCollection;
  if (objEditRegionFldsCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrEditRegionFldsExObjLst;
  }
  try {
    for (const objCondition of objEditRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrEditRegionFldsSel = arrEditRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrEditRegionFldsSel.length == 0) return arrEditRegionFldsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrEditRegionFldsSel = arrEditRegionFldsSel.sort(
        EditRegionFlds_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrEditRegionFldsSel = arrEditRegionFldsSel.sort(objPagerPara.sortFun);
    }
    arrEditRegionFldsSel = arrEditRegionFldsSel.slice(intStart, intEnd);
    return arrEditRegionFldsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      editRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsEditRegionFldsENEx>();
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objEditRegionFldsENS:源对象
 * @returns 目标对象=>clsEditRegionFldsEN:objEditRegionFldsENT
 **/
export function EditRegionFlds_CopyToEx(
  objEditRegionFldsENS: clsEditRegionFldsEN,
): clsEditRegionFldsENEx {
  const strThisFuncName = EditRegionFlds_CopyToEx.name;
  const objEditRegionFldsENT = new clsEditRegionFldsENEx();
  try {
    ObjectAssign(objEditRegionFldsENT, objEditRegionFldsENS);
    return objEditRegionFldsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      editRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objEditRegionFldsENT;
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
export function EditRegionFlds_FuncMapByFldName(
  strFldName: string,
  objEditRegionFldsEx: clsEditRegionFldsENEx,
) {
  const strThisFuncName = EditRegionFlds_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsEditRegionFldsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsEditRegionFldsENEx.con_FldName:
      return EditRegionFlds_FuncMapFldName(objEditRegionFldsEx);
    case clsEditRegionFldsENEx.con_CtlTypeName:
      return EditRegionFlds_FuncMapCtlTypeName(objEditRegionFldsEx);
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
export function EditRegionFlds_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsEditRegionFldsENEx.con_TabName:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return a.tabName.localeCompare(b.tabName);
        };
      case clsEditRegionFldsENEx.con_FldName:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return a.fldName.localeCompare(b.fldName);
        };
      case clsEditRegionFldsENEx.con_CtlTypeName:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return a.ctlTypeName.localeCompare(b.ctlTypeName);
        };
      case clsEditRegionFldsENEx.con_TabId:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return a.tabId.localeCompare(b.tabId);
        };
      case clsEditRegionFldsENEx.con_CtrlId:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return a.ctrlId.localeCompare(b.ctrlId);
        };
      case clsEditRegionFldsENEx.con_Event:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          if (a.event === null && b.event === null) return 0;
          if (a.event === null) return -1;
          if (b.event === null) return 1;
          return a.event.localeCompare(b.event);
        };
      case clsEditRegionFldsENEx.con_FldNameV2:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return a.fldNameV2.localeCompare(b.fldNameV2);
        };
      case clsEditRegionFldsENEx.con_TrClass:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return -1;
          if (b.trClass === null) return 1;
          return a.trClass.localeCompare(b.trClass);
        };
      case clsEditRegionFldsENEx.con_TdClass:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          if (a.tdClass === null && b.tdClass === null) return 0;
          if (a.tdClass === null) return -1;
          if (b.tdClass === null) return 1;
          return a.tdClass.localeCompare(b.tdClass);
        };
      default:
        return EditRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsEditRegionFldsENEx.con_TabName:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return b.tabName.localeCompare(a.tabName);
        };
      case clsEditRegionFldsENEx.con_FldName:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return b.fldName.localeCompare(a.fldName);
        };
      case clsEditRegionFldsENEx.con_CtlTypeName:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return b.ctlTypeName.localeCompare(a.ctlTypeName);
        };
      case clsEditRegionFldsENEx.con_TabId:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return b.tabId.localeCompare(a.tabId);
        };
      case clsEditRegionFldsENEx.con_CtrlId:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return b.ctrlId.localeCompare(a.ctrlId);
        };
      case clsEditRegionFldsENEx.con_Event:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          if (a.event === null && b.event === null) return 0;
          if (a.event === null) return 1;
          if (b.event === null) return -1;
          return b.event.localeCompare(a.event);
        };
      case clsEditRegionFldsENEx.con_FldNameV2:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          return b.fldNameV2.localeCompare(a.fldNameV2);
        };
      case clsEditRegionFldsENEx.con_TrClass:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          if (a.trClass === null && b.trClass === null) return 0;
          if (a.trClass === null) return 1;
          if (b.trClass === null) return -1;
          return b.trClass.localeCompare(a.trClass);
        };
      case clsEditRegionFldsENEx.con_TdClass:
        return (a: clsEditRegionFldsENEx, b: clsEditRegionFldsENEx) => {
          if (a.tdClass === null && b.tdClass === null) return 0;
          if (a.tdClass === null) return 1;
          if (b.tdClass === null) return -1;
          return b.tdClass.localeCompare(a.tdClass);
        };
      default:
        return EditRegionFlds_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objEditRegionFldsS:源对象
 **/
export async function EditRegionFlds_FuncMapFldName(objEditRegionFlds: clsEditRegionFldsENEx) {
  const strThisFuncName = EditRegionFlds_FuncMapFldName.name;
  try {
    if (IsNullOrEmpty(objEditRegionFlds.fldName) == true) {
      const vFieldTabSimFldId = objEditRegionFlds.fldId;
      if (IsNullOrEmpty(objEditRegionFlds.prjId) == true) {
        const strMsg = `函数映射[FldName]数据出错,prjId不能为空!(in ${editRegionFlds_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const vFieldTabSimFldName = await vFieldTab_Sim_func(
        clsvFieldTab_SimEN.con_FldId,
        clsvFieldTab_SimEN.con_FldName,
        vFieldTabSimFldId,
        objEditRegionFlds.prjId,
      );
      objEditRegionFlds.fldName = vFieldTabSimFldName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001295)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      editRegionFlds_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objEditRegionFldsS:源对象
 **/
export async function EditRegionFlds_FuncMapCtlTypeName(objEditRegionFlds: clsEditRegionFldsENEx) {
  const strThisFuncName = EditRegionFlds_FuncMapCtlTypeName.name;
  try {
    if (IsNullOrEmpty(objEditRegionFlds.ctlTypeName) == true) {
      const CtlTypeCtlTypeId = objEditRegionFlds.ctlTypeId;
      const CtlTypeCtlTypeName = await CtlType_func(
        clsCtlTypeEN.con_CtlTypeId,
        clsCtlTypeEN.con_CtlTypeName,
        CtlTypeCtlTypeId,
      );
      objEditRegionFlds.ctlTypeName = CtlTypeCtlTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001301)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_DelEditRegionFldssByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelEditRegionFldssByCondAsync';
  const strAction = 'DelEditRegionFldssByCond';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
 * @param objEditRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function EditRegionFlds_AddNewRecordAsync(
  objEditRegionFldsEN: clsEditRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objEditRegionFldsEN);
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objEditRegionFldsEN, config);
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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

/**
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objEditRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function EditRegionFlds_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
 * @param objEditRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function EditRegionFlds_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objEditRegionFldsEN);
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
 * @param objEditRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function EditRegionFlds_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objEditRegionFldsEN);
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_AddNewObjSave(
  objEditRegionFldsEN: clsEditRegionFldsEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    EditRegionFlds_CheckPropertyNew(objEditRegionFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${editRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await EditRegionFlds_CheckUniCond4Add(objEditRegionFldsEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    returnBool = await EditRegionFlds_AddNewRecordAsync(objEditRegionFldsEN);
    if (returnBool == true) {
      EditRegionFlds_ReFreshCache(objEditRegionFldsEN.regionId);
    } else {
      const strInfo = `添加[编辑区域字段(EditRegionFlds)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objEditRegionFldsEN.mId.toString(), success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${editRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function EditRegionFlds_CheckUniCond4Add(
  objEditRegionFldsEN: clsEditRegionFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = EditRegionFlds_GetUniCondStr(objEditRegionFldsEN);
  const bolIsExistCondition = await EditRegionFlds_IsExistRecordAsync(strUniquenessCondition);
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
export async function EditRegionFlds_CheckUniCond4Update(
  objEditRegionFldsEN: clsEditRegionFldsEN,
): Promise<boolean> {
  const strUniquenessCondition = EditRegionFlds_GetUniCondStr4Update(objEditRegionFldsEN);
  const bolIsExistCondition = await EditRegionFlds_IsExistRecordAsync(strUniquenessCondition);
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
export async function EditRegionFlds_UpdateObjSave(
  objEditRegionFldsEN: clsEditRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objEditRegionFldsEN.sfUpdFldSetStr = objEditRegionFldsEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objEditRegionFldsEN.mId == 0 || objEditRegionFldsEN.mId == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    EditRegionFlds_CheckProperty4Update(objEditRegionFldsEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${editRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await EditRegionFlds_CheckUniCond4Update(objEditRegionFldsEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await EditRegionFlds_UpdateRecordAsync(objEditRegionFldsEN);
    if (returnBool == true) {
      EditRegionFlds_ReFreshCache(objEditRegionFldsEN.regionId);
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${editRegionFlds_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objEditRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function EditRegionFlds_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objEditRegionFldsEN);
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
 * @param objEditRegionFldsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function EditRegionFlds_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objEditRegionFldsEN);
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
 * @param objEditRegionFldsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function EditRegionFlds_AddNewRecordWithReturnKeyAsync(
  objEditRegionFldsEN: clsEditRegionFldsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objEditRegionFldsEN, config);
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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
 * @param objEditRegionFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function EditRegionFlds_UpdateRecordAsync(
  objEditRegionFldsEN: clsEditRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objEditRegionFldsEN.sfUpdFldSetStr === undefined ||
    objEditRegionFldsEN.sfUpdFldSetStr === null ||
    objEditRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objEditRegionFldsEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objEditRegionFldsEN, config);
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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
 * @param objEditRegionFldsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function EditRegionFlds_EditRecordExAsync(
  objEditRegionFldsEN: clsEditRegionFldsEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objEditRegionFldsEN.sfUpdFldSetStr === undefined ||
    objEditRegionFldsEN.sfUpdFldSetStr === null ||
    objEditRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objEditRegionFldsEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objEditRegionFldsEN, config);
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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
 * @param objEditRegionFldsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function EditRegionFlds_UpdateWithConditionAsync(
  objEditRegionFldsEN: clsEditRegionFldsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objEditRegionFldsEN.sfUpdFldSetStr === undefined ||
    objEditRegionFldsEN.sfUpdFldSetStr === null ||
    objEditRegionFldsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objEditRegionFldsEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);
  objEditRegionFldsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objEditRegionFldsEN, config);
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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function EditRegionFlds_IsExistRecordCache(
  objEditRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstCache(strRegionId);
  if (arrEditRegionFldsObjLstCache == null) return false;
  let arrEditRegionFldsSel = arrEditRegionFldsObjLstCache;
  if (objEditRegionFldsCond.GetConditions().length == 0)
    return arrEditRegionFldsSel.length > 0 ? true : false;
  try {
    for (const objCondition of objEditRegionFldsCond.GetConditions()) {
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
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrEditRegionFldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objEditRegionFldsCond),
      editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function EditRegionFlds_IsExistCache(lngmId: number, strRegionId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstCache(strRegionId);
  if (arrEditRegionFldsObjLstCache == null) return false;
  try {
    const arrEditRegionFldsSel = arrEditRegionFldsObjLstCache.filter((x) => x.mId == lngmId);
    if (arrEditRegionFldsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      editRegionFlds_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function EditRegionFlds_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
 * @param objEditRegionFldsCond:条件对象
 * @returns 对象列表记录数
 */
export async function EditRegionFlds_GetRecCountByCondCache(
  objEditRegionFldsCond: ConditionCollection,
  strRegionId: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrEditRegionFldsObjLstCache = await EditRegionFlds_GetObjLstCache(strRegionId);
  if (arrEditRegionFldsObjLstCache == null) return 0;
  let arrEditRegionFldsSel = arrEditRegionFldsObjLstCache;
  if (objEditRegionFldsCond.GetConditions().length == 0) return arrEditRegionFldsSel.length;
  try {
    for (const objCondition of objEditRegionFldsCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrEditRegionFldsSel = arrEditRegionFldsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrEditRegionFldsSel = arrEditRegionFldsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrEditRegionFldsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objEditRegionFldsCond),
      editRegionFlds_ConstructorName,
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
export async function EditRegionFlds_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(editRegionFlds_Controller, strAction);

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
        editRegionFlds_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        editRegionFlds_ConstructorName,
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
export function EditRegionFlds_GetWebApiUrl(strController: string, strAction: string): string {
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
export function EditRegionFlds_ReFreshCache(strRegionId: string): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsEditRegionFldsWApi.clsEditRegionFldsWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsEditRegionFldsWApi.clsEditRegionFldsWApi.ReFreshCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsEditRegionFldsEN._CurrTabName, strRegionId);
  switch (clsEditRegionFldsEN.CacheModeId) {
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
  clsEditRegionFldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function EditRegionFlds_ReFreshThisCache(strRegionId: string): void {
  if (IsNullOrEmpty(strRegionId) == true) {
    const strMsg = Format(
      '参数:[strRegionId]不能为空!(In clsEditRegionFldsWApi.EditRegionFlds_ReFreshThisCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRegionId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strRegionId]的长度:[{0}]不正确!(clsEditRegionFldsWApi.EditRegionFlds_ReFreshThisCache)',
      strRegionId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsEditRegionFldsEN._CurrTabName, strRegionId);
    switch (clsEditRegionFldsEN.CacheModeId) {
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
    clsEditRegionFldsEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function EditRegionFlds_GetLastRefreshTime(): string {
  if (clsEditRegionFldsEN._RefreshTimeLst.length == 0) return '';
  return clsEditRegionFldsEN._RefreshTimeLst[clsEditRegionFldsEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function EditRegionFlds_CheckPropertyNew(pobjEditRegionFldsEN: clsEditRegionFldsEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjEditRegionFldsEN.regionId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[区域Id]不能为空(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.ctlTypeId) === true ||
    pobjEditRegionFldsEN.ctlTypeId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[控件类型号]不能为空(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.prjId) === true ||
    pobjEditRegionFldsEN.prjId.toString() === '0'
  ) {
    throw new Error(
      `(errid:Watl000411)字段[工程Id]不能为空(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjEditRegionFldsEN.updUser) === true) {
    throw new Error(
      `(errid:Watl000411)字段[修改者]不能为空(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.regionId) == false &&
    GetStrLen(pobjEditRegionFldsEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000413)字段[区域Id(regionId)]的长度不能超过10(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.regionId}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.fldId) == false &&
    GetStrLen(pobjEditRegionFldsEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id(fldId)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.fldId}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.labelCaption) == false &&
    GetStrLen(pobjEditRegionFldsEN.labelCaption) > 150
  ) {
    throw new Error(
      `(errid:Watl000413)字段[标签标题(labelCaption)]的长度不能超过150(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.labelCaption}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.ctlTypeId) == false &&
    GetStrLen(pobjEditRegionFldsEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.ctlTypeId}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.callTabFeatureId) == false &&
    GetStrLen(pobjEditRegionFldsEN.callTabFeatureId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[调用表功能Id(callTabFeatureId)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.callTabFeatureId}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.varId) == false &&
    GetStrLen(pobjEditRegionFldsEN.varId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量Id(varId)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.varId}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.defaultValue) == false &&
    GetStrLen(pobjEditRegionFldsEN.defaultValue) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[缺省值(defaultValue)]的长度不能超过50(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.defaultValue}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.ddlItemsOptionId) == false &&
    GetStrLen(pobjEditRegionFldsEN.ddlItemsOptionId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[下拉框列表选项ID(ddlItemsOptionId)]的长度不能超过2(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.ddlItemsOptionId}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.dsTabId) == false &&
    GetStrLen(pobjEditRegionFldsEN.dsTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据源表ID(dsTabId)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.dsTabId}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.tabFeatureId4Ddl) == false &&
    GetStrLen(pobjEditRegionFldsEN.tabFeatureId4Ddl) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[下拉框表功能Id(tabFeatureId4Ddl)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.tabFeatureId4Ddl}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.fldIdCond1) == false &&
    GetStrLen(pobjEditRegionFldsEN.fldIdCond1) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id_条件1(fldIdCond1)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.fldIdCond1}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.varIdCond1) == false &&
    GetStrLen(pobjEditRegionFldsEN.varIdCond1) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[变量Id_条件1(varIdCond1)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.varIdCond1}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.fldIdCond2) == false &&
    GetStrLen(pobjEditRegionFldsEN.fldIdCond2) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[字段Id_条件2(fldIdCond2)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.fldIdCond2}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.varIdCond2) == false &&
    GetStrLen(pobjEditRegionFldsEN.varIdCond2) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据源字段_条件1(varIdCond2)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.varIdCond2}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.dsCondStr) == false &&
    GetStrLen(pobjEditRegionFldsEN.dsCondStr) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据源条件串(dsCondStr)]的长度不能超过50(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.dsCondStr}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.dsSqlStr) == false &&
    GetStrLen(pobjEditRegionFldsEN.dsSqlStr) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[数据源SQL串(dsSqlStr)]的长度不能超过200(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.dsSqlStr}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.itemsString) == false &&
    GetStrLen(pobjEditRegionFldsEN.itemsString) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[列表项串(itemsString)]的长度不能超过200(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.itemsString}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.inOutTypeId) == false &&
    GetStrLen(pobjEditRegionFldsEN.inOutTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[INOUT类型ID(inOutTypeId)]的长度不能超过2(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.inOutTypeId}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.clickEvent) == false &&
    GetStrLen(pobjEditRegionFldsEN.clickEvent) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Click事件(clickEvent)]的长度不能超过50(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.clickEvent}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.changeEvent) == false &&
    GetStrLen(pobjEditRegionFldsEN.changeEvent) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Change事件(changeEvent)]的长度不能超过50(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.changeEvent}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.errMsg) == false &&
    GetStrLen(pobjEditRegionFldsEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[错误信息(errMsg)]的长度不能超过2000(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.errMsg}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.prjId) == false &&
    GetStrLen(pobjEditRegionFldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[工程Id(prjId)]的长度不能超过4(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.prjId}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.updUser) == false &&
    GetStrLen(pobjEditRegionFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改者(updUser)]的长度不能超过20(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.updUser}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.updDate) == false &&
    GetStrLen(pobjEditRegionFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.updDate}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.memo) == false &&
    GetStrLen(pobjEditRegionFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000413)字段[说明(memo)]的长度不能超过1000(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.memo}(clsEditRegionFldsBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjEditRegionFldsEN.mId &&
    undefined !== pobjEditRegionFldsEN.mId &&
    tzDataType.isNumber(pobjEditRegionFldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[mId(mId)]的值:[${pobjEditRegionFldsEN.mId}], 非法,应该为数值型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.regionId) == false &&
    undefined !== pobjEditRegionFldsEN.regionId &&
    tzDataType.isString(pobjEditRegionFldsEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[区域Id(regionId)]的值:[${pobjEditRegionFldsEN.regionId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.fldId) == false &&
    undefined !== pobjEditRegionFldsEN.fldId &&
    tzDataType.isString(pobjEditRegionFldsEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id(fldId)]的值:[${pobjEditRegionFldsEN.fldId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.labelCaption) == false &&
    undefined !== pobjEditRegionFldsEN.labelCaption &&
    tzDataType.isString(pobjEditRegionFldsEN.labelCaption) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[标签标题(labelCaption)]的值:[${pobjEditRegionFldsEN.labelCaption}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.ctlTypeId) == false &&
    undefined !== pobjEditRegionFldsEN.ctlTypeId &&
    tzDataType.isString(pobjEditRegionFldsEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[控件类型号(ctlTypeId)]的值:[${pobjEditRegionFldsEN.ctlTypeId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.callTabFeatureId) == false &&
    undefined !== pobjEditRegionFldsEN.callTabFeatureId &&
    tzDataType.isString(pobjEditRegionFldsEN.callTabFeatureId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[调用表功能Id(callTabFeatureId)]的值:[${pobjEditRegionFldsEN.callTabFeatureId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.varId) == false &&
    undefined !== pobjEditRegionFldsEN.varId &&
    tzDataType.isString(pobjEditRegionFldsEN.varId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量Id(varId)]的值:[${pobjEditRegionFldsEN.varId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.defaultValue) == false &&
    undefined !== pobjEditRegionFldsEN.defaultValue &&
    tzDataType.isString(pobjEditRegionFldsEN.defaultValue) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[缺省值(defaultValue)]的值:[${pobjEditRegionFldsEN.defaultValue}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.ddlItemsOptionId) == false &&
    undefined !== pobjEditRegionFldsEN.ddlItemsOptionId &&
    tzDataType.isString(pobjEditRegionFldsEN.ddlItemsOptionId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[下拉框列表选项ID(ddlItemsOptionId)]的值:[${pobjEditRegionFldsEN.ddlItemsOptionId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.dsTabId) == false &&
    undefined !== pobjEditRegionFldsEN.dsTabId &&
    tzDataType.isString(pobjEditRegionFldsEN.dsTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源表ID(dsTabId)]的值:[${pobjEditRegionFldsEN.dsTabId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.tabFeatureId4Ddl) == false &&
    undefined !== pobjEditRegionFldsEN.tabFeatureId4Ddl &&
    tzDataType.isString(pobjEditRegionFldsEN.tabFeatureId4Ddl) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[下拉框表功能Id(tabFeatureId4Ddl)]的值:[${pobjEditRegionFldsEN.tabFeatureId4Ddl}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.fldIdCond1) == false &&
    undefined !== pobjEditRegionFldsEN.fldIdCond1 &&
    tzDataType.isString(pobjEditRegionFldsEN.fldIdCond1) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id_条件1(fldIdCond1)]的值:[${pobjEditRegionFldsEN.fldIdCond1}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.varIdCond1) == false &&
    undefined !== pobjEditRegionFldsEN.varIdCond1 &&
    tzDataType.isString(pobjEditRegionFldsEN.varIdCond1) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[变量Id_条件1(varIdCond1)]的值:[${pobjEditRegionFldsEN.varIdCond1}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.fldIdCond2) == false &&
    undefined !== pobjEditRegionFldsEN.fldIdCond2 &&
    tzDataType.isString(pobjEditRegionFldsEN.fldIdCond2) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段Id_条件2(fldIdCond2)]的值:[${pobjEditRegionFldsEN.fldIdCond2}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.varIdCond2) == false &&
    undefined !== pobjEditRegionFldsEN.varIdCond2 &&
    tzDataType.isString(pobjEditRegionFldsEN.varIdCond2) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源字段_条件1(varIdCond2)]的值:[${pobjEditRegionFldsEN.varIdCond2}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.dsCondStr) == false &&
    undefined !== pobjEditRegionFldsEN.dsCondStr &&
    tzDataType.isString(pobjEditRegionFldsEN.dsCondStr) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源条件串(dsCondStr)]的值:[${pobjEditRegionFldsEN.dsCondStr}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.dsSqlStr) == false &&
    undefined !== pobjEditRegionFldsEN.dsSqlStr &&
    tzDataType.isString(pobjEditRegionFldsEN.dsSqlStr) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[数据源SQL串(dsSqlStr)]的值:[${pobjEditRegionFldsEN.dsSqlStr}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.itemsString) == false &&
    undefined !== pobjEditRegionFldsEN.itemsString &&
    tzDataType.isString(pobjEditRegionFldsEN.itemsString) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[列表项串(itemsString)]的值:[${pobjEditRegionFldsEN.itemsString}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjEditRegionFldsEN.colSpan &&
    undefined !== pobjEditRegionFldsEN.colSpan &&
    tzDataType.isNumber(pobjEditRegionFldsEN.colSpan) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[跨列数(colSpan)]的值:[${pobjEditRegionFldsEN.colSpan}], 非法,应该为数值型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjEditRegionFldsEN.colIndex &&
    undefined !== pobjEditRegionFldsEN.colIndex &&
    tzDataType.isNumber(pobjEditRegionFldsEN.colIndex) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[列序号(colIndex)]的值:[${pobjEditRegionFldsEN.colIndex}], 非法,应该为数值型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjEditRegionFldsEN.width &&
    undefined !== pobjEditRegionFldsEN.width &&
    tzDataType.isNumber(pobjEditRegionFldsEN.width) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[宽(width)]的值:[${pobjEditRegionFldsEN.width}], 非法,应该为数值型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjEditRegionFldsEN.isMultiRow &&
    undefined !== pobjEditRegionFldsEN.isMultiRow &&
    tzDataType.isBoolean(pobjEditRegionFldsEN.isMultiRow) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否多行(isMultiRow)]的值:[${pobjEditRegionFldsEN.isMultiRow}], 非法,应该为布尔型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjEditRegionFldsEN.seqNum &&
    undefined !== pobjEditRegionFldsEN.seqNum &&
    tzDataType.isNumber(pobjEditRegionFldsEN.seqNum) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[字段序号(seqNum)]的值:[${pobjEditRegionFldsEN.seqNum}], 非法,应该为数值型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.inOutTypeId) == false &&
    undefined !== pobjEditRegionFldsEN.inOutTypeId &&
    tzDataType.isString(pobjEditRegionFldsEN.inOutTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[INOUT类型ID(inOutTypeId)]的值:[${pobjEditRegionFldsEN.inOutTypeId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.clickEvent) == false &&
    undefined !== pobjEditRegionFldsEN.clickEvent &&
    tzDataType.isString(pobjEditRegionFldsEN.clickEvent) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Click事件(clickEvent)]的值:[${pobjEditRegionFldsEN.clickEvent}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.changeEvent) == false &&
    undefined !== pobjEditRegionFldsEN.changeEvent &&
    tzDataType.isString(pobjEditRegionFldsEN.changeEvent) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Change事件(changeEvent)]的值:[${pobjEditRegionFldsEN.changeEvent}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjEditRegionFldsEN.inUse &&
    undefined !== pobjEditRegionFldsEN.inUse &&
    tzDataType.isBoolean(pobjEditRegionFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjEditRegionFldsEN.inUse}], 非法,应该为布尔型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.errMsg) == false &&
    undefined !== pobjEditRegionFldsEN.errMsg &&
    tzDataType.isString(pobjEditRegionFldsEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[错误信息(errMsg)]的值:[${pobjEditRegionFldsEN.errMsg}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.prjId) == false &&
    undefined !== pobjEditRegionFldsEN.prjId &&
    tzDataType.isString(pobjEditRegionFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[工程Id(prjId)]的值:[${pobjEditRegionFldsEN.prjId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.updUser) == false &&
    undefined !== pobjEditRegionFldsEN.updUser &&
    tzDataType.isString(pobjEditRegionFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改者(updUser)]的值:[${pobjEditRegionFldsEN.updUser}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.updDate) == false &&
    undefined !== pobjEditRegionFldsEN.updDate &&
    tzDataType.isString(pobjEditRegionFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjEditRegionFldsEN.updDate}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.memo) == false &&
    undefined !== pobjEditRegionFldsEN.memo &&
    tzDataType.isString(pobjEditRegionFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[说明(memo)]的值:[${pobjEditRegionFldsEN.memo}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.regionId) == false &&
    pobjEditRegionFldsEN.regionId != '[nuull]' &&
    GetStrLen(pobjEditRegionFldsEN.regionId) != 10
  ) {
    throw '(errid:Watl000415)字段[区域Id]作为外键字段,长度应该为10(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.ctlTypeId) == false &&
    pobjEditRegionFldsEN.ctlTypeId != '[nuull]' &&
    GetStrLen(pobjEditRegionFldsEN.ctlTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[控件类型号]作为外键字段,长度应该为2(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.ddlItemsOptionId) == false &&
    pobjEditRegionFldsEN.ddlItemsOptionId != '[nuull]' &&
    GetStrLen(pobjEditRegionFldsEN.ddlItemsOptionId) != 2
  ) {
    throw '(errid:Watl000415)字段[下拉框列表选项ID]作为外键字段,长度应该为2(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.tabFeatureId4Ddl) == false &&
    pobjEditRegionFldsEN.tabFeatureId4Ddl != '[nuull]' &&
    GetStrLen(pobjEditRegionFldsEN.tabFeatureId4Ddl) != 8
  ) {
    throw '(errid:Watl000415)字段[下拉框表功能Id]作为外键字段,长度应该为8(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.inOutTypeId) == false &&
    pobjEditRegionFldsEN.inOutTypeId != '[nuull]' &&
    GetStrLen(pobjEditRegionFldsEN.inOutTypeId) != 2
  ) {
    throw '(errid:Watl000415)字段[INOUT类型ID]作为外键字段,长度应该为2(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.prjId) == false &&
    pobjEditRegionFldsEN.prjId != '[nuull]' &&
    GetStrLen(pobjEditRegionFldsEN.prjId) != 4
  ) {
    throw '(errid:Watl000415)字段[工程Id]作为外键字段,长度应该为4(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew)';
  }

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function EditRegionFlds_CheckProperty4Update(pobjEditRegionFldsEN: clsEditRegionFldsEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.regionId) == false &&
    GetStrLen(pobjEditRegionFldsEN.regionId) > 10
  ) {
    throw new Error(
      `(errid:Watl000416)字段[区域Id(regionId)]的长度不能超过10(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.regionId}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.fldId) == false &&
    GetStrLen(pobjEditRegionFldsEN.fldId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id(fldId)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.fldId}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.labelCaption) == false &&
    GetStrLen(pobjEditRegionFldsEN.labelCaption) > 150
  ) {
    throw new Error(
      `(errid:Watl000416)字段[标签标题(labelCaption)]的长度不能超过150(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.labelCaption}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.ctlTypeId) == false &&
    GetStrLen(pobjEditRegionFldsEN.ctlTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[控件类型号(ctlTypeId)]的长度不能超过2(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.ctlTypeId}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.callTabFeatureId) == false &&
    GetStrLen(pobjEditRegionFldsEN.callTabFeatureId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[调用表功能Id(callTabFeatureId)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.callTabFeatureId}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.varId) == false &&
    GetStrLen(pobjEditRegionFldsEN.varId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量Id(varId)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.varId}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.defaultValue) == false &&
    GetStrLen(pobjEditRegionFldsEN.defaultValue) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[缺省值(defaultValue)]的长度不能超过50(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.defaultValue}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.ddlItemsOptionId) == false &&
    GetStrLen(pobjEditRegionFldsEN.ddlItemsOptionId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[下拉框列表选项ID(ddlItemsOptionId)]的长度不能超过2(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.ddlItemsOptionId}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.dsTabId) == false &&
    GetStrLen(pobjEditRegionFldsEN.dsTabId) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据源表ID(dsTabId)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.dsTabId}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.tabFeatureId4Ddl) == false &&
    GetStrLen(pobjEditRegionFldsEN.tabFeatureId4Ddl) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[下拉框表功能Id(tabFeatureId4Ddl)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.tabFeatureId4Ddl}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.fldIdCond1) == false &&
    GetStrLen(pobjEditRegionFldsEN.fldIdCond1) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id_条件1(fldIdCond1)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.fldIdCond1}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.varIdCond1) == false &&
    GetStrLen(pobjEditRegionFldsEN.varIdCond1) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[变量Id_条件1(varIdCond1)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.varIdCond1}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.fldIdCond2) == false &&
    GetStrLen(pobjEditRegionFldsEN.fldIdCond2) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[字段Id_条件2(fldIdCond2)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.fldIdCond2}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.varIdCond2) == false &&
    GetStrLen(pobjEditRegionFldsEN.varIdCond2) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据源字段_条件1(varIdCond2)]的长度不能超过8(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.varIdCond2}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.dsCondStr) == false &&
    GetStrLen(pobjEditRegionFldsEN.dsCondStr) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据源条件串(dsCondStr)]的长度不能超过50(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.dsCondStr}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.dsSqlStr) == false &&
    GetStrLen(pobjEditRegionFldsEN.dsSqlStr) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[数据源SQL串(dsSqlStr)]的长度不能超过200(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.dsSqlStr}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.itemsString) == false &&
    GetStrLen(pobjEditRegionFldsEN.itemsString) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[列表项串(itemsString)]的长度不能超过200(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.itemsString}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.inOutTypeId) == false &&
    GetStrLen(pobjEditRegionFldsEN.inOutTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[INOUT类型ID(inOutTypeId)]的长度不能超过2(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.inOutTypeId}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.clickEvent) == false &&
    GetStrLen(pobjEditRegionFldsEN.clickEvent) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Click事件(clickEvent)]的长度不能超过50(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.clickEvent}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.changeEvent) == false &&
    GetStrLen(pobjEditRegionFldsEN.changeEvent) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Change事件(changeEvent)]的长度不能超过50(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.changeEvent}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.errMsg) == false &&
    GetStrLen(pobjEditRegionFldsEN.errMsg) > 2000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[错误信息(errMsg)]的长度不能超过2000(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.errMsg}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.prjId) == false &&
    GetStrLen(pobjEditRegionFldsEN.prjId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[工程Id(prjId)]的长度不能超过4(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.prjId}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.updUser) == false &&
    GetStrLen(pobjEditRegionFldsEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改者(updUser)]的长度不能超过20(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.updUser}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.updDate) == false &&
    GetStrLen(pobjEditRegionFldsEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.updDate}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.memo) == false &&
    GetStrLen(pobjEditRegionFldsEN.memo) > 1000
  ) {
    throw new Error(
      `(errid:Watl000416)字段[说明(memo)]的长度不能超过1000(In 编辑区域字段(EditRegionFlds))!值:${pobjEditRegionFldsEN.memo}(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjEditRegionFldsEN.mId &&
    undefined !== pobjEditRegionFldsEN.mId &&
    tzDataType.isNumber(pobjEditRegionFldsEN.mId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[mId(mId)]的值:[${pobjEditRegionFldsEN.mId}], 非法,应该为数值型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.regionId) == false &&
    undefined !== pobjEditRegionFldsEN.regionId &&
    tzDataType.isString(pobjEditRegionFldsEN.regionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[区域Id(regionId)]的值:[${pobjEditRegionFldsEN.regionId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.fldId) == false &&
    undefined !== pobjEditRegionFldsEN.fldId &&
    tzDataType.isString(pobjEditRegionFldsEN.fldId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id(fldId)]的值:[${pobjEditRegionFldsEN.fldId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.labelCaption) == false &&
    undefined !== pobjEditRegionFldsEN.labelCaption &&
    tzDataType.isString(pobjEditRegionFldsEN.labelCaption) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[标签标题(labelCaption)]的值:[${pobjEditRegionFldsEN.labelCaption}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.ctlTypeId) == false &&
    undefined !== pobjEditRegionFldsEN.ctlTypeId &&
    tzDataType.isString(pobjEditRegionFldsEN.ctlTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[控件类型号(ctlTypeId)]的值:[${pobjEditRegionFldsEN.ctlTypeId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.callTabFeatureId) == false &&
    undefined !== pobjEditRegionFldsEN.callTabFeatureId &&
    tzDataType.isString(pobjEditRegionFldsEN.callTabFeatureId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[调用表功能Id(callTabFeatureId)]的值:[${pobjEditRegionFldsEN.callTabFeatureId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.varId) == false &&
    undefined !== pobjEditRegionFldsEN.varId &&
    tzDataType.isString(pobjEditRegionFldsEN.varId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量Id(varId)]的值:[${pobjEditRegionFldsEN.varId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.defaultValue) == false &&
    undefined !== pobjEditRegionFldsEN.defaultValue &&
    tzDataType.isString(pobjEditRegionFldsEN.defaultValue) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[缺省值(defaultValue)]的值:[${pobjEditRegionFldsEN.defaultValue}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.ddlItemsOptionId) == false &&
    undefined !== pobjEditRegionFldsEN.ddlItemsOptionId &&
    tzDataType.isString(pobjEditRegionFldsEN.ddlItemsOptionId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[下拉框列表选项ID(ddlItemsOptionId)]的值:[${pobjEditRegionFldsEN.ddlItemsOptionId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.dsTabId) == false &&
    undefined !== pobjEditRegionFldsEN.dsTabId &&
    tzDataType.isString(pobjEditRegionFldsEN.dsTabId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源表ID(dsTabId)]的值:[${pobjEditRegionFldsEN.dsTabId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.tabFeatureId4Ddl) == false &&
    undefined !== pobjEditRegionFldsEN.tabFeatureId4Ddl &&
    tzDataType.isString(pobjEditRegionFldsEN.tabFeatureId4Ddl) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[下拉框表功能Id(tabFeatureId4Ddl)]的值:[${pobjEditRegionFldsEN.tabFeatureId4Ddl}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.fldIdCond1) == false &&
    undefined !== pobjEditRegionFldsEN.fldIdCond1 &&
    tzDataType.isString(pobjEditRegionFldsEN.fldIdCond1) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id_条件1(fldIdCond1)]的值:[${pobjEditRegionFldsEN.fldIdCond1}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.varIdCond1) == false &&
    undefined !== pobjEditRegionFldsEN.varIdCond1 &&
    tzDataType.isString(pobjEditRegionFldsEN.varIdCond1) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[变量Id_条件1(varIdCond1)]的值:[${pobjEditRegionFldsEN.varIdCond1}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.fldIdCond2) == false &&
    undefined !== pobjEditRegionFldsEN.fldIdCond2 &&
    tzDataType.isString(pobjEditRegionFldsEN.fldIdCond2) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段Id_条件2(fldIdCond2)]的值:[${pobjEditRegionFldsEN.fldIdCond2}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.varIdCond2) == false &&
    undefined !== pobjEditRegionFldsEN.varIdCond2 &&
    tzDataType.isString(pobjEditRegionFldsEN.varIdCond2) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源字段_条件1(varIdCond2)]的值:[${pobjEditRegionFldsEN.varIdCond2}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.dsCondStr) == false &&
    undefined !== pobjEditRegionFldsEN.dsCondStr &&
    tzDataType.isString(pobjEditRegionFldsEN.dsCondStr) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源条件串(dsCondStr)]的值:[${pobjEditRegionFldsEN.dsCondStr}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.dsSqlStr) == false &&
    undefined !== pobjEditRegionFldsEN.dsSqlStr &&
    tzDataType.isString(pobjEditRegionFldsEN.dsSqlStr) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[数据源SQL串(dsSqlStr)]的值:[${pobjEditRegionFldsEN.dsSqlStr}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.itemsString) == false &&
    undefined !== pobjEditRegionFldsEN.itemsString &&
    tzDataType.isString(pobjEditRegionFldsEN.itemsString) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[列表项串(itemsString)]的值:[${pobjEditRegionFldsEN.itemsString}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjEditRegionFldsEN.colSpan &&
    undefined !== pobjEditRegionFldsEN.colSpan &&
    tzDataType.isNumber(pobjEditRegionFldsEN.colSpan) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[跨列数(colSpan)]的值:[${pobjEditRegionFldsEN.colSpan}], 非法,应该为数值型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjEditRegionFldsEN.colIndex &&
    undefined !== pobjEditRegionFldsEN.colIndex &&
    tzDataType.isNumber(pobjEditRegionFldsEN.colIndex) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[列序号(colIndex)]的值:[${pobjEditRegionFldsEN.colIndex}], 非法,应该为数值型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjEditRegionFldsEN.width &&
    undefined !== pobjEditRegionFldsEN.width &&
    tzDataType.isNumber(pobjEditRegionFldsEN.width) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[宽(width)]的值:[${pobjEditRegionFldsEN.width}], 非法,应该为数值型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjEditRegionFldsEN.isMultiRow &&
    undefined !== pobjEditRegionFldsEN.isMultiRow &&
    tzDataType.isBoolean(pobjEditRegionFldsEN.isMultiRow) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否多行(isMultiRow)]的值:[${pobjEditRegionFldsEN.isMultiRow}], 非法,应该为布尔型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjEditRegionFldsEN.seqNum &&
    undefined !== pobjEditRegionFldsEN.seqNum &&
    tzDataType.isNumber(pobjEditRegionFldsEN.seqNum) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[字段序号(seqNum)]的值:[${pobjEditRegionFldsEN.seqNum}], 非法,应该为数值型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.inOutTypeId) == false &&
    undefined !== pobjEditRegionFldsEN.inOutTypeId &&
    tzDataType.isString(pobjEditRegionFldsEN.inOutTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[INOUT类型ID(inOutTypeId)]的值:[${pobjEditRegionFldsEN.inOutTypeId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.clickEvent) == false &&
    undefined !== pobjEditRegionFldsEN.clickEvent &&
    tzDataType.isString(pobjEditRegionFldsEN.clickEvent) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Click事件(clickEvent)]的值:[${pobjEditRegionFldsEN.clickEvent}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.changeEvent) == false &&
    undefined !== pobjEditRegionFldsEN.changeEvent &&
    tzDataType.isString(pobjEditRegionFldsEN.changeEvent) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Change事件(changeEvent)]的值:[${pobjEditRegionFldsEN.changeEvent}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjEditRegionFldsEN.inUse &&
    undefined !== pobjEditRegionFldsEN.inUse &&
    tzDataType.isBoolean(pobjEditRegionFldsEN.inUse) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjEditRegionFldsEN.inUse}], 非法,应该为布尔型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.errMsg) == false &&
    undefined !== pobjEditRegionFldsEN.errMsg &&
    tzDataType.isString(pobjEditRegionFldsEN.errMsg) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[错误信息(errMsg)]的值:[${pobjEditRegionFldsEN.errMsg}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.prjId) == false &&
    undefined !== pobjEditRegionFldsEN.prjId &&
    tzDataType.isString(pobjEditRegionFldsEN.prjId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[工程Id(prjId)]的值:[${pobjEditRegionFldsEN.prjId}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.updUser) == false &&
    undefined !== pobjEditRegionFldsEN.updUser &&
    tzDataType.isString(pobjEditRegionFldsEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改者(updUser)]的值:[${pobjEditRegionFldsEN.updUser}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.updDate) == false &&
    undefined !== pobjEditRegionFldsEN.updDate &&
    tzDataType.isString(pobjEditRegionFldsEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjEditRegionFldsEN.updDate}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.memo) == false &&
    undefined !== pobjEditRegionFldsEN.memo &&
    tzDataType.isString(pobjEditRegionFldsEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[说明(memo)]的值:[${pobjEditRegionFldsEN.memo}], 非法,应该为字符型(In 编辑区域字段(EditRegionFlds))!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjEditRegionFldsEN.mId ||
    (pobjEditRegionFldsEN.mId != null && pobjEditRegionFldsEN.mId.toString() === '')
  ) {
    throw new Error(
      `(errid:Watl000064)字段[mId]不能为空(In 编辑区域字段)!(clsEditRegionFldsBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.regionId) == false &&
    pobjEditRegionFldsEN.regionId != '[nuull]' &&
    GetStrLen(pobjEditRegionFldsEN.regionId) != 10
  ) {
    throw '(errid:Watl000418)字段[区域Id]作为外键字段,长度应该为10(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.ctlTypeId) == false &&
    pobjEditRegionFldsEN.ctlTypeId != '[nuull]' &&
    GetStrLen(pobjEditRegionFldsEN.ctlTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[控件类型号]作为外键字段,长度应该为2(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.ddlItemsOptionId) == false &&
    pobjEditRegionFldsEN.ddlItemsOptionId != '[nuull]' &&
    GetStrLen(pobjEditRegionFldsEN.ddlItemsOptionId) != 2
  ) {
    throw '(errid:Watl000418)字段[下拉框列表选项ID]作为外键字段,长度应该为2(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.tabFeatureId4Ddl) == false &&
    pobjEditRegionFldsEN.tabFeatureId4Ddl != '[nuull]' &&
    GetStrLen(pobjEditRegionFldsEN.tabFeatureId4Ddl) != 8
  ) {
    throw '(errid:Watl000418)字段[下拉框表功能Id]作为外键字段,长度应该为8(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.inOutTypeId) == false &&
    pobjEditRegionFldsEN.inOutTypeId != '[nuull]' &&
    GetStrLen(pobjEditRegionFldsEN.inOutTypeId) != 2
  ) {
    throw '(errid:Watl000418)字段[INOUT类型ID]作为外键字段,长度应该为2(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew)';
  }
  if (
    IsNullOrEmpty(pobjEditRegionFldsEN.prjId) == false &&
    pobjEditRegionFldsEN.prjId != '[nuull]' &&
    GetStrLen(pobjEditRegionFldsEN.prjId) != 4
  ) {
    throw '(errid:Watl000418)字段[工程Id]作为外键字段,长度应该为4(In 编辑区域字段)!(clsEditRegionFldsBL:CheckPropertyNew)';
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
export function EditRegionFlds_GetJSONStrByObj(pobjEditRegionFldsEN: clsEditRegionFldsEN): string {
  pobjEditRegionFldsEN.sfUpdFldSetStr = pobjEditRegionFldsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjEditRegionFldsEN);
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
export function EditRegionFlds_GetObjLstByJSONStr(strJSON: string): Array<clsEditRegionFldsEN> {
  let arrEditRegionFldsObjLst = new Array<clsEditRegionFldsEN>();
  if (strJSON === '') {
    return arrEditRegionFldsObjLst;
  }
  try {
    arrEditRegionFldsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrEditRegionFldsObjLst;
  }
  return arrEditRegionFldsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrEditRegionFldsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function EditRegionFlds_GetObjLstByJSONObjLst(
  arrEditRegionFldsObjLstS: Array<clsEditRegionFldsEN>,
): Array<clsEditRegionFldsEN> {
  const arrEditRegionFldsObjLst = new Array<clsEditRegionFldsEN>();
  for (const objInFor of arrEditRegionFldsObjLstS) {
    const obj1 = EditRegionFlds_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrEditRegionFldsObjLst.push(obj1);
  }
  return arrEditRegionFldsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-14
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function EditRegionFlds_GetObjByJSONStr(strJSON: string): clsEditRegionFldsEN {
  let pobjEditRegionFldsEN = new clsEditRegionFldsEN();
  if (strJSON === '') {
    return pobjEditRegionFldsEN;
  }
  try {
    pobjEditRegionFldsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjEditRegionFldsEN;
  }
  return pobjEditRegionFldsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function EditRegionFlds_GetCombineCondition(
  objEditRegionFldsCond: clsEditRegionFldsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsEditRegionFldsEN.con_mId,
      objEditRegionFldsCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_RegionId,
    ) == true
  ) {
    const strComparisonOpRegionId: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_RegionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_RegionId,
      objEditRegionFldsCond.regionId,
      strComparisonOpRegionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_FldId,
    ) == true
  ) {
    const strComparisonOpFldId: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_FldId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_FldId,
      objEditRegionFldsCond.fldId,
      strComparisonOpFldId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_LabelCaption,
    ) == true
  ) {
    const strComparisonOpLabelCaption: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_LabelCaption];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_LabelCaption,
      objEditRegionFldsCond.labelCaption,
      strComparisonOpLabelCaption,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_CtlTypeId,
    ) == true
  ) {
    const strComparisonOpCtlTypeId: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_CtlTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_CtlTypeId,
      objEditRegionFldsCond.ctlTypeId,
      strComparisonOpCtlTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_CallTabFeatureId,
    ) == true
  ) {
    const strComparisonOpCallTabFeatureId: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_CallTabFeatureId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_CallTabFeatureId,
      objEditRegionFldsCond.callTabFeatureId,
      strComparisonOpCallTabFeatureId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_VarId,
    ) == true
  ) {
    const strComparisonOpVarId: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_VarId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_VarId,
      objEditRegionFldsCond.varId,
      strComparisonOpVarId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_DefaultValue,
    ) == true
  ) {
    const strComparisonOpDefaultValue: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_DefaultValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_DefaultValue,
      objEditRegionFldsCond.defaultValue,
      strComparisonOpDefaultValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_DdlItemsOptionId,
    ) == true
  ) {
    const strComparisonOpDdlItemsOptionId: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_DdlItemsOptionId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_DdlItemsOptionId,
      objEditRegionFldsCond.ddlItemsOptionId,
      strComparisonOpDdlItemsOptionId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_DsTabId,
    ) == true
  ) {
    const strComparisonOpDsTabId: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_DsTabId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_DsTabId,
      objEditRegionFldsCond.dsTabId,
      strComparisonOpDsTabId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_TabFeatureId4Ddl,
    ) == true
  ) {
    const strComparisonOpTabFeatureId4Ddl: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_TabFeatureId4Ddl];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_TabFeatureId4Ddl,
      objEditRegionFldsCond.tabFeatureId4Ddl,
      strComparisonOpTabFeatureId4Ddl,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_FldIdCond1,
    ) == true
  ) {
    const strComparisonOpFldIdCond1: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_FldIdCond1];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_FldIdCond1,
      objEditRegionFldsCond.fldIdCond1,
      strComparisonOpFldIdCond1,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_VarIdCond1,
    ) == true
  ) {
    const strComparisonOpVarIdCond1: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_VarIdCond1];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_VarIdCond1,
      objEditRegionFldsCond.varIdCond1,
      strComparisonOpVarIdCond1,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_FldIdCond2,
    ) == true
  ) {
    const strComparisonOpFldIdCond2: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_FldIdCond2];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_FldIdCond2,
      objEditRegionFldsCond.fldIdCond2,
      strComparisonOpFldIdCond2,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_VarIdCond2,
    ) == true
  ) {
    const strComparisonOpVarIdCond2: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_VarIdCond2];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_VarIdCond2,
      objEditRegionFldsCond.varIdCond2,
      strComparisonOpVarIdCond2,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_DsCondStr,
    ) == true
  ) {
    const strComparisonOpDsCondStr: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_DsCondStr];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_DsCondStr,
      objEditRegionFldsCond.dsCondStr,
      strComparisonOpDsCondStr,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_DsSqlStr,
    ) == true
  ) {
    const strComparisonOpDsSqlStr: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_DsSqlStr];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_DsSqlStr,
      objEditRegionFldsCond.dsSqlStr,
      strComparisonOpDsSqlStr,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_ItemsString,
    ) == true
  ) {
    const strComparisonOpItemsString: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_ItemsString];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_ItemsString,
      objEditRegionFldsCond.itemsString,
      strComparisonOpItemsString,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_ColSpan,
    ) == true
  ) {
    const strComparisonOpColSpan: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_ColSpan];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsEditRegionFldsEN.con_ColSpan,
      objEditRegionFldsCond.colSpan,
      strComparisonOpColSpan,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_ColIndex,
    ) == true
  ) {
    const strComparisonOpColIndex: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_ColIndex];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsEditRegionFldsEN.con_ColIndex,
      objEditRegionFldsCond.colIndex,
      strComparisonOpColIndex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_Width,
    ) == true
  ) {
    const strComparisonOpWidth: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_Width];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsEditRegionFldsEN.con_Width,
      objEditRegionFldsCond.width,
      strComparisonOpWidth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_IsMultiRow,
    ) == true
  ) {
    if (objEditRegionFldsCond.isMultiRow == true) {
      strWhereCond += Format(" And {0} = '1'", clsEditRegionFldsEN.con_IsMultiRow);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsEditRegionFldsEN.con_IsMultiRow);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_SeqNum,
    ) == true
  ) {
    const strComparisonOpSeqNum: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_SeqNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsEditRegionFldsEN.con_SeqNum,
      objEditRegionFldsCond.seqNum,
      strComparisonOpSeqNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_InOutTypeId,
    ) == true
  ) {
    const strComparisonOpInOutTypeId: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_InOutTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_InOutTypeId,
      objEditRegionFldsCond.inOutTypeId,
      strComparisonOpInOutTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_ClickEvent,
    ) == true
  ) {
    const strComparisonOpClickEvent: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_ClickEvent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_ClickEvent,
      objEditRegionFldsCond.clickEvent,
      strComparisonOpClickEvent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_ChangeEvent,
    ) == true
  ) {
    const strComparisonOpChangeEvent: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_ChangeEvent];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_ChangeEvent,
      objEditRegionFldsCond.changeEvent,
      strComparisonOpChangeEvent,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_InUse,
    ) == true
  ) {
    if (objEditRegionFldsCond.inUse == true) {
      strWhereCond += Format(" And {0} = '1'", clsEditRegionFldsEN.con_InUse);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsEditRegionFldsEN.con_InUse);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_ErrMsg,
    ) == true
  ) {
    const strComparisonOpErrMsg: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_ErrMsg];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_ErrMsg,
      objEditRegionFldsCond.errMsg,
      strComparisonOpErrMsg,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_PrjId,
    ) == true
  ) {
    const strComparisonOpPrjId: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_PrjId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_PrjId,
      objEditRegionFldsCond.prjId,
      strComparisonOpPrjId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_UpdUser,
      objEditRegionFldsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_UpdDate,
      objEditRegionFldsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEditRegionFldsCond.dicFldComparisonOp,
      clsEditRegionFldsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objEditRegionFldsCond.dicFldComparisonOp[clsEditRegionFldsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEditRegionFldsEN.con_Memo,
      objEditRegionFldsCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--EditRegionFlds(编辑区域字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function EditRegionFlds_GetUniCondStr(objEditRegionFldsEN: clsEditRegionFldsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RegionId = '{0}'", objEditRegionFldsEN.regionId);
  strWhereCond += Format(" and FldId = '{0}'", objEditRegionFldsEN.fldId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--EditRegionFlds(编辑区域字段),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strRegionId: 区域Id(要求唯一的字段)
 * @param strFldId: 字段Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function EditRegionFlds_GetUniCondStr4Update(
  objEditRegionFldsEN: clsEditRegionFldsEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objEditRegionFldsEN.mId);
  strWhereCond += Format(" and RegionId = '{0}'", objEditRegionFldsEN.regionId);
  strWhereCond += Format(" and FldId = '{0}'", objEditRegionFldsEN.fldId);
  return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objEditRegionFldsENS:源对象
 * @param objEditRegionFldsENT:目标对象
 */
export function EditRegionFlds_GetObjFromJsonObj(
  objEditRegionFldsENS: clsEditRegionFldsEN,
): clsEditRegionFldsEN {
  const objEditRegionFldsENT: clsEditRegionFldsEN = new clsEditRegionFldsEN();
  ObjectAssign(objEditRegionFldsENT, objEditRegionFldsENS);
  return objEditRegionFldsENT;
}
